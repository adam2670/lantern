// Odyssey family sync. FAMILY COPY ONLY.
//
// This file is copied into the family copy by tools/publish-family.sh and by nothing else: the
// public site (tools/publish-kit.sh) and the app (app/Scripts/copy_kit.sh) copy named files only,
// and this is not one of them. index.html calls it only when FAMILY_COPY is stamped true.
//
// What it does: keeps one encrypted copy of the save (localStorage 'basecamp.v3') in the family's
// own private GitHub repository, so the same player's progress follows them to any device where the
// family's secret phrase has been typed once. The phrase never leaves the device. It is stretched
// (PBKDF2-SHA256, 600,000 rounds, this copy's own salt) into an AES-GCM-256 key, and that key
// scrambles the save before it is sent. GitHub only ever holds ciphertext.
//
// The GitHub write key (a fine-grained token for that one repository) is baked into this copy at
// publish time, scrambled with the same phrase-derived key, together with where the saves live.
// Without the phrase this file holds a salt and two blobs of ciphertext, nothing else.
//
// Two devices never overwrite each other: every write is pull, merge, push, and the merge
// (mergeSaves below, a pure function with unit tests in tools/test-sync.js) only ever adds,
// apart from three deliberate grown-up actions it carries across: removing a player, renaming
// one, and starting one over.
(function (root) {
  'use strict';

  // Stamped by tools/publish-family.sh. null here, and in any copy that was not built by it.
  const FAMILY_CONFIG = {"v":1,"iter":600000,"salt":"OyQQCTqU3sC/fJm5Gz6dpKR8y248e4HkJ3MioonUroA=","cfg":{"ct":"V+pCYoUFrs3OvPutuikety\/kjD4aw5jeqDCkyjlaZk9DueWFkxBIEizfZJg08kxdX\/j+rR22jMEOnHOlUpQWLXocy+WHo0JUyVy6QxuU7esAGpkdRvGtg0e865g5FxgXiyYBaBez2itbUibZZ4GuwUAPuqAolCZzzf74ApQq9la0G9GUp0FzSxscOCJwQrMyE8wAHdkOlUt2ESvEzHIEpEzav3fV3nBaERPjHtgXaFFy2RBm1RmehxKR1B+Y4ousy0UKsERj8ziY5BbxvR+LIvRjdZwJlA==","iv":"GoSgh2HMFd3aNReJ","v":1}};

  const AAD_SAVE = 'odyssey-family-save-v1';
  const AAD_CONFIG = 'odyssey-family-config-v1';
  const AAD_FAMILY = 'odyssey-family-section-v1', FAMILY_STORE = 'odyssey.sync.family';
  const META_STORE = 'odyssey.sync.meta', PENDING_STORE = 'odyssey.sync.pending', LAST_STORE = 'odyssey.sync.last';
  const IDB_NAME = 'odyssey-family-sync', IDB_STORE = 'keys', IDB_KEY = 'save-key';

  // ======================================================================================
  //  PURE PART: the merge. No browser, no network. Tested in tools/test-sync.js.
  // ======================================================================================

  function clone(x) { return x === undefined ? undefined : JSON.parse(JSON.stringify(x)); }
  function isObj(x) { return !!x && typeof x === 'object' && !Array.isArray(x); }
  function keys(o) { return isObj(o) ? Object.keys(o) : []; }
  function union(a, b) { const s = {}; keys(a).forEach(k => { s[k] = 1; }); keys(b).forEach(k => { s[k] = 1; }); return Object.keys(s).sort(); }
  // A stable string for comparing two values: keys sorted, and the per-session parent unlock
  // (parentOk) left out, because it is not progress and differs between devices by design.
  function canon(x) {
    if (Array.isArray(x)) return '[' + x.map(canon).join(',') + ']';
    if (isObj(x)) return '{' + Object.keys(x).filter(k => k !== 'parentOk' && x[k] !== undefined).sort().map(k => JSON.stringify(k) + ':' + canon(x[k])).join(',') + '}';
    return JSON.stringify(x === undefined ? null : x);
  }
  function same(a, b) { return canon(a) === canon(b); }
  // Deterministic tie-break, so two devices merging the same pair reach the same answer.
  function bigger(a, b) { const x = canon(a), y = canon(b); return x.length !== y.length ? (x.length > y.length ? a : b) : (x >= y ? a : b); }

  // ---- one mission record (S.done[id]) ----------------------------------------------------
  // A record is the FIRST run plus, after a replay, the LATEST run (rec.latest), and attempts.
  // A record whose date is in brackets was not played: "(set by parent)", "(placed by link)",
  // "(from code)", "(from another device)".
  const PLACED = r => !!r && /^\(/.test(String(r.date || ''));
  const PLACED_RANK = { '(from another device)': 3, '(from code)': 2, '(placed by link)': 1, '(set by parent)': 0 };
  function runOnly(r) { const o = clone(r); delete o.latest; delete o.attempts; return o; }
  function runId(r) { return [r.date, r.secs, canon(r.recon), canon(r.nav), canon(r.orders), r.retry, r.flags, r.campaign, r.lap || 0].join('|'); }
  function asked(r) { return ((r.recon || [0, 0])[1] || 0) + ((r.nav || [0, 0])[1] || 0) + ((r.orders || [0, 0])[1] || 0); }
  function realRuns(rec) { return [rec, rec && rec.latest].filter(r => r && !PLACED(r)); }
  // Earlier first; on the same day the more complete run, then the longer one, then a fixed order.
  function runOrder(a, b) {
    const da = String(a.date || ''), db = String(b.date || '');
    if (da !== db) return da < db ? -1 : 1;
    if (asked(a) !== asked(b)) return asked(b) - asked(a);
    if ((a.secs || 0) !== (b.secs || 0)) return (b.secs || 0) - (a.secs || 0);
    const x = canon(a), y = canon(b); return x < y ? -1 : (x > y ? 1 : 0);
  }
  function mergeRecord(a, b) {
    if (!a) return clone(b);
    if (!b) return clone(a);
    if (same(a, b)) return clone(a);
    // Every distinct real run either side knows about. The same run seen on both sides is one run;
    // of two copies of it, the one still holding its question text is kept.
    const byId = {};
    [a, b].forEach(rec => realRuns(rec).forEach(r => { const o = runOnly(r), id = runId(o); byId[id] = byId[id] ? bigger(byId[id], o) : o; }));
    const runs = Object.keys(byId).map(k => byId[k]);
    const att = Math.max(a.attempts || 0, b.attempts || 0);
    if (!runs.length) {
      // Two marks and no play: keep one mark (the more telling kind), never invent a score.
      const ra = PLACED_RANK[a.date] == null ? -1 : PLACED_RANK[a.date], rb = PLACED_RANK[b.date] == null ? -1 : PLACED_RANK[b.date];
      const out = clone(ra !== rb ? (ra > rb ? a : b) : bigger(a, b));
      if (a.attempts != null || b.attempts != null) out.attempts = att;
      return out;
    }
    // If one side's real runs are all already in the other, and it adds no play, keep the other
    // as it is (so a record merged with itself, or with an older copy of itself, does not move).
    const ida = realRuns(a).map(r => runId(runOnly(r))), idb = realRuns(b).map(r => runId(runOnly(r)));
    const aCoversB = idb.every(x => ida.indexOf(x) >= 0), bCoversA = ida.every(x => idb.indexOf(x) >= 0);
    if (aCoversB !== bCoversA || (aCoversB && bCoversA)) {
      let keep;
      if (aCoversB && bCoversA) {
        // Same play on both sides, shaped differently: a real first run beats a mark with a replay.
        const fa = !PLACED(a), fb = !PLACED(b);
        keep = fa !== fb ? (fa ? a : b) : bigger(a, b);
      } else keep = aCoversB ? a : b;
      const out = clone(keep);
      // Keep the richer copy of each run (question text survives a storage squeeze elsewhere).
      const fix = r => { if (!r || PLACED(r)) return r; const best = byId[runId(runOnly(r))]; const extra = {}; if (r.latest) extra.latest = r.latest; if (r.attempts != null) extra.attempts = r.attempts; return Object.assign(clone(best), extra); };
      const merged = fix(out); if (merged.latest) merged.latest = fix(merged.latest);
      if (merged.attempts != null || att) merged.attempts = Math.max(att, runs.length);
      return merged;
    }
    // Both sides played it in ways the other has not seen: the earliest run is the first, the most
    // recent of the rest is the latest (the record keeps two runs; that is the game's own shape).
    runs.sort(runOrder);
    const out = clone(runs[0]);
    if (runs.length > 1) out.latest = clone(runs[runs.length - 1]);
    out.attempts = Math.max(att, runs.length);
    return out;
  }

  // ---- one player's profile ---------------------------------------------------------------
  const TIERS = ['bronze', 'silver', 'gold'];
  function maxMap(a, b) { const o = {}; union(a, b).forEach(k => { const x = (a || {})[k], y = (b || {})[k]; o[k] = (x == null) ? y : (y == null ? x : Math.max(x, y)); }); return o; }
  // A date string beats "true" (a medal from a code knows no date); of two dates, the earlier.
  function earliestMark(x, y) {
    if (x == null || x === false) return y; if (y == null || y === false) return x;
    const dx = typeof x === 'string', dy = typeof y === 'string';
    if (dx && dy) return x <= y ? x : y; if (dx) return x; if (dy) return y; return x;
  }
  function mergeProfile(a, b, ta, tb, name) {
    if (!isObj(a)) return clone(b);
    if (!isObj(b)) return clone(a);
    // The side changed most recently decides the plain settings (adventure, grade, a paused run).
    // With no change times to go on (a device's first sign-in), the side that played last.
    const da = String(a.lastDay || ''), db = String(b.lastDay || '');
    const newerIsA = (ta || 0) !== (tb || 0) ? (ta || 0) > (tb || 0) : (da !== db ? da > db : bigger(a, b) === a);
    const nw = newerIsA ? a : b, od = newerIsA ? b : a;
    const out = clone(nw);
    if (name != null) out.callsign = name;
    out.done = {}; union(a.done, b.done).forEach(id => { out.done[id] = mergeRecord((a.done || {})[id], (b.done || {})[id]); });
    out.stars = maxMap(a.stars, b.stars);
    out.tiers = {}; union(a.tiers, b.tiers).forEach(k => { const x = (a.tiers || {})[k] || null, y = (b.tiers || {})[k] || null; out.tiers[k] = TIERS.indexOf(x) >= TIERS.indexOf(y) ? x : y; });
    out.badges = {}; union(a.badges, b.badges).forEach(k => { out.badges[k] = earliestMark((a.badges || {})[k], (b.badges || {})[k]); });
    out.laps = maxMap(a.laps, b.laps);
    // "Finished" and "arrived" belong to a lap: a side still on an earlier lap of an adventure
    // does not bring its old finish into the new lap ("Do it again" clears them).
    ['finished', 'arrived'].forEach(f => {
      out[f] = {};
      union(a[f], b[f]).forEach(k => { const L = out.laps[k] || 0;
        const x = ((a.laps || {})[k] || 0) === L ? (a[f] || {})[k] : undefined, y = ((b.laps || {})[k] || 0) === L ? (b[f] || {})[k] : undefined;
        const v = f === 'finished' ? earliestMark(x, y) : (x || y);
        if (v != null && v !== false) out[f][k] = v; });
    });
    // Counts kept per skill: the larger. (A true sum would need to know what each device added;
    // the larger never counts a practice twice, and is short only when both devices practiced
    // the same skill between two syncs.)
    out.practised = maxMap(a.practised, b.practised);
    out.help = maxMap(a.help, b.help);
    ['practised', 'help', 'laps', 'stars', 'tiers', 'badges', 'finished', 'arrived'].forEach(f => { if (!keys(out[f]).length && a[f] === undefined && b[f] === undefined) delete out[f]; });
    // The streak goes with the most recent day played; on the same day, the longer streak.
    const la = String(a.lastDay || ''), lb = String(b.lastDay || '');
    if (la !== lb) { const s = la > lb ? a : b; out.lastDay = s.lastDay; out.streak = s.streak || 0; }
    else { out.lastDay = a.lastDay != null ? a.lastDay : b.lastDay; out.streak = Math.max(a.streak || 0, b.streak || 0); }
    out.welcomed = !!(a.welcomed || b.welcomed);
    if (a.starsV != null || b.starsV != null) out.starsV = Math.max(a.starsV || 0, b.starsV || 0);
    out.choices = Object.assign({}, od.choices || {}, nw.choices || {}); if (!keys(out.choices).length && !a.choices && !b.choices) delete out.choices;
    // The error log: both devices' entries, in time order, the last thirty.
    const seen = {}, errs = [];
    (a.errors || []).concat(b.errors || []).forEach(e => { const k = canon(e); if (!seen[k]) { seen[k] = 1; errs.push(e); } });
    errs.sort((x, y) => String(x && x.t || '') < String(y && y.t || '') ? -1 : (String(x && x.t || '') > String(y && y.t || '') ? 1 : (canon(x) < canon(y) ? -1 : 1)));
    if (a.errors || b.errors) out.errors = clone(errs.slice(-30));
    delete out.parentOk;
    return out;
  }

  // ---- the whole save --------------------------------------------------------------------
  // meta (kept beside the save, encrypted with it): touched[name] = when a device last changed that
  // player; epoch[name] = how many times they were started over; gone[name] = {t, to?} = removed
  // at t (or renamed to "to"). Merging meta: the later time, the higher count.
  function emptyMeta() { return { touched: {}, epoch: {}, gone: {} }; }
  function normMeta(m) { m = isObj(m) ? m : {}; return { touched: isObj(m.touched) ? m.touched : {}, epoch: isObj(m.epoch) ? m.epoch : {}, gone: isObj(m.gone) ? m.gone : {} }; }
  function mergeMeta(x, y) {
    x = normMeta(x); y = normMeta(y);
    const out = { touched: maxMap(x.touched, y.touched), epoch: maxMap(x.epoch, y.epoch), gone: {} };
    union(x.gone, y.gone).forEach(n => { const g = x.gone[n], h = y.gone[n];
      out.gone[n] = clone(!g ? h : !h ? g : (g.t !== h.t ? (g.t > h.t ? g : h) : bigger(g, h))); });
    return out;
  }
  function normSave(c) {
    c = isObj(c) ? clone(c) : {};
    if (!isObj(c.profiles)) c.profiles = {};
    if (!isObj(c.bak)) c.bak = {};
    if (c.current === undefined) c.current = null;
    if (c.parentPin === undefined) c.parentPin = null;
    return c;
  }
  // mergeSaves(local, localMeta, remote, remoteMeta) -> { save, meta }
  // local is this device's save; remote is the family copy's. Only "current" (who is playing on
  // THIS device) and the device-only review marks are taken from local as they are.
  //
  // ⚠️ THE CONTRACT WITH THE CALLER. A removal (meta.gone) and a start-over (meta.epoch) beat a
  // profile only when that profile's change time (meta.touched) is NOT later than them. So every
  // local profile holding play this device has not yet sent must carry a touched time, or the merge
  // reads it as "old, unchanged" and a removal or start-over made elsewhere wipes it. The
  // controller keeps this true with stampUntouched(): on every sign-in (a first sign-in, and a
  // sign-in after Sign out, which clears meta) and whenever this device's meta has been lost while
  // its key survived. Saves made while signed in are stamped by observe() as they happen. The cost
  // of stamping is the safe direction: a removal elsewhere may not take on a device that signs in
  // still holding that player; nothing is ever lost.
  function mergeSaves(local, lm, remote, rm) {
    const L = normSave(local), R = normSave(remote);
    lm = normMeta(lm); rm = normMeta(rm);
    const meta = mergeMeta(lm, rm);
    const out = Object.assign({}, R, L);   // container-level fields this file does not know: local's
    out.profiles = {};
    union(L.profiles, R.profiles).forEach(n => {
      const a = L.profiles[n], b = R.profiles[n];
      const ea = lm.epoch[n] || 0, eb = rm.epoch[n] || 0;
      // Started over on one side and not yet seen on the other: the newer start wins whole, unless
      // the other side changed that player AFTER the start-over side last did (play this device
      // has not sent yet); then nothing is dropped and the two are merged.
      if (a && b && ea !== eb) {
        const hiA = ea > eb, tHi = (hiA ? lm.touched[n] : rm.touched[n]) || 0, tLo = (hiA ? rm.touched[n] : lm.touched[n]) || 0;
        if (tLo <= tHi) { out.profiles[n] = clone(hiA ? a : b); delete out.profiles[n].parentOk; return; }
      }
      const p = mergeProfile(a, b, lm.touched[n] || 0, rm.touched[n] || 0, n);
      if (isObj(p)) { delete p.parentOk; out.profiles[n] = p; }
    });
    // Removed and renamed players. A player changed AFTER the removal (played on a device that had
    // not heard) is kept: nothing is ever lost to a sync.
    for (let pass = 0; pass < 10; pass++) {
      let moved = false;
      Object.keys(out.profiles).forEach(n => {
        const g = meta.gone[n]; if (!g || (meta.touched[n] || 0) > g.t) return;
        const p = out.profiles[n]; delete out.profiles[n]; moved = true;
        if (g.to && g.to !== n) {
          const q = out.profiles[g.to];
          out.profiles[g.to] = q ? mergeProfile(q, p, meta.touched[g.to] || 0, meta.touched[n] || 0, g.to) : Object.assign(p, { callsign: g.to });
          meta.epoch[g.to] = Math.max(meta.epoch[g.to] || 0, meta.epoch[n] || 0);
        }
      });
      if (!moved) break;
    }
    out.bak = {};
    union(L.bak, R.bak).forEach(n => { const x = L.bak[n], y = R.bak[n];
      out.bak[n] = clone(!x ? y : !y ? x : (String(x.when || '') !== String(y.when || '') ? (String(x.when || '') > String(y.when || '') ? x : y) : bigger(x, y))); });
    // Who is playing here stays who is playing here (following a rename); a device with nobody
    // yet takes whoever the family copy was last played as.
    let cur = L.current;
    for (let i = 0; i < 10 && cur && !out.profiles[cur] && meta.gone[cur] && meta.gone[cur].to; i++) cur = meta.gone[cur].to;
    if (!cur || !out.profiles[cur]) cur = (R.current && out.profiles[R.current]) ? R.current : (Object.keys(out.profiles).sort()[0] || null);
    out.current = cur;
    // The parent code: the family copy's, once it has one, so every device asks for the same code.
    out.parentPin = R.parentPin || L.parentPin || null;
    if (!keys(out.bak).length && local && !local.bak && remote && !remote.bak) delete out.bak;
    return { save: out, meta: meta };
  }

  // What changed between two saves THIS device wrote: which players were changed (touched), started
  // over (epoch), removed or renamed (gone). Pure: returns a new meta.
  function observe(prev, next, meta, now) {
    const m = clone(normMeta(meta));
    const P = normSave(prev).profiles, N = normSave(next).profiles;
    const pn = Object.keys(P), nn = Object.keys(N);
    const removed = pn.filter(n => !N[n]), added = nn.filter(n => !P[n]);
    if (removed.length === 1 && added.length === 1 && prev && next && prev.current === removed[0] && next.current === added[0]) {
      m.gone[removed[0]] = { t: now, to: added[0] };
      m.epoch[added[0]] = Math.max(m.epoch[added[0]] || 0, m.epoch[removed[0]] || 0);
    } else removed.forEach(n => { m.gone[n] = { t: now }; });
    added.forEach(n => { m.touched[n] = now; });
    nn.filter(n => P[n]).forEach(n => {
      if (same(P[n], N[n])) return;
      m.touched[n] = now;
      const before = keys(P[n] && P[n].done).length, after = keys(N[n] && N[n].done).length;
      if (before > 0 && after === 0 && N[n] && !N[n].welcomed) m.epoch[n] = (m.epoch[n] || 0) + 1;
    });
    return m;
  }

  // ---- the family section: { displayName, nameAt, checkins: [...], turn, introSeen } ----------
  // It travels inside the encrypted blob beside the save, never in the game's own storage, so the
  // page shows a name only after the phrase has unlocked it. A check-in is { d: day, m: mission,
  // q: question id, a: answer, t: ms }; the same (day, mission, question) is one check-in.
  function normFamily(f) {
    f = isObj(f) ? clone(f) : {};
    return { displayName: typeof f.displayName === 'string' ? f.displayName : '', nameAt: Number(f.nameAt) || 0,
      checkins: Array.isArray(f.checkins) ? f.checkins.filter(isObj) : [], turn: Number(f.turn) || 0, introSeen: !!f.introSeen };
  }
  function checkinKey(c) { return [c.d, c.m, c.q].join('|'); }
  function mergeFamily(a, b) {
    a = normFamily(a); b = normFamily(b);
    const named = a.nameAt !== b.nameAt ? (a.nameAt > b.nameAt ? a : b) : bigger({ n: a.displayName }, { n: b.displayName }) === b ? b : a;
    const byKey = {};
    a.checkins.concat(b.checkins).forEach(c => { const k = checkinKey(c), o = byKey[k];
      byKey[k] = !o ? clone(c) : ((Number(c.t) || 0) !== (Number(o.t) || 0) ? ((Number(c.t) || 0) > (Number(o.t) || 0) ? clone(c) : o) : clone(bigger(o, c))); });
    const checkins = Object.keys(byKey).map(k => byKey[k]).sort((x, y) => (Number(x.t) || 0) - (Number(y.t) || 0) || (checkinKey(x) < checkinKey(y) ? -1 : 1));
    return { displayName: named.displayName, nameAt: named.nameAt, checkins: checkins, turn: Math.max(a.turn, b.turn), introSeen: a.introSeen || b.introSeen };
  }

  // The controller's half of the contract above: every local profile without a change time gets
  // "now". Existing times are never moved.
  function stampUntouched(meta, save, now) {
    const m = clone(normMeta(meta));
    Object.keys(normSave(save).profiles).forEach(n => { if (!m.touched[n]) m.touched[n] = now; });
    return m;
  }

  const pure = { stampUntouched, mergeFamily, normFamily, mergeSaves, mergeProfile, mergeRecord, mergeMeta, observe, canon, same, emptyMeta, normalizePhrase };

  // ======================================================================================
  //  CRYPTO: WebCrypto only.
  // ======================================================================================
  // The phrase is forgiving about capitals and spacing, so a tablet's automatic capital letter or
  // a double space never locks a child out. publish-family's sealing tool does exactly the same.
  function normalizePhrase(s) { return String(s || '').normalize('NFKC').toLowerCase().trim().split(/\s+/).filter(Boolean).join(' '); }
  function utf8(s) { return new TextEncoder().encode(s); }
  function b64(bytes) { let s = ''; for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000)); return btoa(s); }
  function unb64(s) { const t = atob(String(s || '').replace(/\s+/g, '')); const o = new Uint8Array(t.length); for (let i = 0; i < t.length; i++) o[i] = t.charCodeAt(i); return o; }
  function subtle() { return (root.crypto && root.crypto.subtle) || null; }
  async function deriveKey(phrase, saltB64, iter) {
    const base = await subtle().importKey('raw', utf8(normalizePhrase(phrase)), 'PBKDF2', false, ['deriveKey']);
    return subtle().deriveKey({ name: 'PBKDF2', salt: unb64(saltB64), iterations: iter, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
  }
  async function seal(key, text, aad) {
    const iv = root.crypto.getRandomValues(new Uint8Array(12));
    const ct = await subtle().encrypt({ name: 'AES-GCM', iv: iv, additionalData: utf8(aad) }, key, utf8(text));
    return { v: 1, iv: b64(iv), ct: b64(new Uint8Array(ct)) };
  }
  async function open(key, box, aad) {
    const pt = await subtle().decrypt({ name: 'AES-GCM', iv: unb64(box.iv), additionalData: utf8(aad) }, key, unb64(box.ct));
    return new TextDecoder().decode(pt);
  }

  // The key, kept on this device as a non-extractable CryptoKey: usable by this page, not readable.
  function idb() {
    return new Promise((res, rej) => {
      try { const r = root.indexedDB.open(IDB_NAME, 1);
        r.onupgradeneeded = () => r.result.createObjectStore(IDB_STORE);
        r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); } catch (e) { rej(e); }
    });
  }
  async function idbDo(mode, fn) {
    const db = await idb();
    return new Promise((res, rej) => { const tx = db.transaction(IDB_STORE, mode), st = tx.objectStore(IDB_STORE); const q = fn(st);
      tx.oncomplete = () => { db.close(); res(q && q.result); }; tx.onerror = tx.onabort = () => { db.close(); rej(tx.error); }; });
  }
  const keyStore = {
    get: () => idbDo('readonly', st => st.get(IDB_KEY)).catch(() => null),
    put: k => idbDo('readwrite', st => st.put(k, IDB_KEY)).then(() => true, () => false),
    del: () => idbDo('readwrite', st => st.delete(IDB_KEY)).then(() => true, () => false)
  };

  // ======================================================================================
  //  THE FAMILY COPY'S STORE: the GitHub contents API.
  // ======================================================================================
  function SyncError(kind, detail) { const e = new Error(kind + (detail ? ': ' + detail : '')); e.kind = kind; return e; }
  function api(cfg, path, opts) {
    const h = { 'Authorization': 'Bearer ' + cfg.token, 'Accept': (opts && opts.accept) || 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' };
    if (opts && opts.body) h['Content-Type'] = 'application/json';
    return fetch(cfg.api.replace(/\/+$/, '') + '/repos/' + cfg.repo + '/contents/' + path.split('/').map(encodeURIComponent).join('/') + ((opts && opts.query) || ''),
      { method: (opts && opts.method) || 'GET', headers: h, body: opts && opts.body, cache: 'no-store', credentials: 'omit', referrerPolicy: 'no-referrer' })
      .catch(e => { throw SyncError('offline', e && e.message); });
  }
  function httpError(r) {
    if (r.status === 401) return SyncError('expired');
    if (r.status === 403 || r.status === 404) return SyncError('blocked', String(r.status));
    if (r.status === 409 || r.status === 422) return SyncError('conflict');
    if (r.status >= 500) return SyncError('offline', 'server ' + r.status);
    return SyncError('blocked', String(r.status));
  }
  function fromB64Text(s) { return new TextDecoder().decode(unb64(s)); }
  async function readRemote(cfg) {
    const q = cfg.branch ? '?ref=' + encodeURIComponent(cfg.branch) : '';
    const r = await api(cfg, cfg.path, { query: q });
    if (r.status === 404) return { sha: null, text: null };
    if (!r.ok) throw httpError(r);
    const j = await r.json();
    let text = j.content ? fromB64Text(j.content) : '';
    if (!text && j.size > 0) {   // over 1 MB the contents API leaves content out; ask for the raw file
      const raw = await api(cfg, cfg.path, { query: q, accept: 'application/vnd.github.raw+json' });
      if (!raw.ok) throw httpError(raw);
      text = await raw.text();
    }
    return { sha: j.sha, text: text };
  }
  async function writeRemote(cfg, text, sha) {
    const body = { message: 'Save', content: b64(utf8(text)) };
    if (sha) body.sha = sha;
    if (cfg.branch) body.branch = cfg.branch;
    const r = await api(cfg, cfg.path, { method: 'PUT', body: JSON.stringify(body) });
    if (!r.ok) throw httpError(r);
    const j = await r.json();
    return j && j.content && j.content.sha;
  }

  // ======================================================================================
  //  THE CONTROLLER
  // ======================================================================================
  const ls = {
    get(k) { try { return root.localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { root.localStorage.setItem(k, v); } catch (e) {} },
    del(k) { try { root.localStorage.removeItem(k); } catch (e) {} }
  };
  let host = null, key = null, cfg = null, started = false;
  let fam = normFamily(null);   // the family section, readable only once the phrase key is here
  let greeted = false, naming = false;
  let baseline = null;          // the save as this device last wrote or took it in
  let adopting = false;
  let state = 'idle';           // idle | signin | syncing | saved | offline | error
  let errorKind = null, note = '';
  let running = null, again = false, debounceT = null, retryT = null, retryMs = 15000, lastPull = 0;
  const cards = [];

  function loadMeta() { try { return normMeta(JSON.parse(ls.get(META_STORE) || 'null')); } catch (e) { return emptyMeta(); } }
  function saveMeta(m) { ls.set(META_STORE, JSON.stringify(normMeta(m))); }
  function signedIn() { return !!(key && cfg); }

  function timeWord(ms) {
    try { const d = new Date(ms); let s = d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }); s = s.replace(/\s?([AP])\.?M\.?$/i, (m, a) => ' ' + a.toLowerCase() + 'm');
      const today = new Date(); if (d.toDateString() !== today.toDateString()) s = d.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ', ' + s;
      return s; } catch (e) { return ''; }
  }
  const ERR = {
    phrase: 'That phrase did not work. Check each word and try again.',
    expired: 'The family copy’s key has run out or was turned off. Ask a grown-up to renew it. Your progress is safe on this device.',
    blocked: 'Your family copy could not be reached. Ask a grown-up to check it. Your progress is safe on this device.',
    otherPhrase: 'The progress in your family copy was saved with a different phrase. Ask a grown-up. Your progress here is safe.',
    nocrypto: 'This browser cannot do scrambled sync. Try a newer browser on this device. Your progress still saves here.',
    unset: 'This copy was built without sync. Ask a grown-up.'
  };
  function statusLine() {
    if (!FAMILY_CONFIG) return ERR.unset;
    if (state === 'signin') return 'Signing in… this can take a few seconds.';
    if (!signedIn()) return state === 'error' ? ERR[errorKind] || ERR.blocked : '';
    if (state === 'error') return ERR[errorKind] || ERR.blocked;
    if (state === 'offline') return 'Offline: will save when back online.';
    if (state === 'syncing') return 'Saving to your family copy…';
    const last = Number(ls.get(LAST_STORE) || 0);
    if (ls.get(PENDING_STORE)) return 'Waiting to save to your family copy.';
    return last ? 'Saved to your family copy at ' + timeWord(last) + '.' : 'Signed in. Checking your family copy…';
  }
  function setState(s, kind) { state = s; errorKind = kind || null; drawCards(); }

  // ---- the family section on this device: kept sealed, opened with the key ----
  async function cacheFamily() { if (!key) return; try { ls.set(FAMILY_STORE, JSON.stringify(await seal(key, JSON.stringify(fam), AAD_FAMILY))); } catch (e) {} }
  async function loadFamily() {
    const raw = ls.get(FAMILY_STORE); if (!raw || !key) return;
    try { fam = mergeFamily(fam, JSON.parse(await open(key, JSON.parse(raw), AAD_FAMILY))); } catch (e) {}
  }
  async function familyChanged() {
    await cacheFamily();
    ls.set(PENDING_STORE, '1');
    clearTimeout(debounceT); debounceT = setTimeout(syncNow, 4000);
  }
  function displayName() { return signedIn() ? String(fam.displayName || '').trim() : ''; }
  // "Good to see you, <name>." once per visit, on Base Camp only.
  function greet() {
    const n = displayName(); if (!n || greeted || !host || host.view() !== 'base') return;
    greeted = true; host.say('Good to see you, ' + n + '.');
  }

  // ---- sync: pull, merge, take in, push ----
  async function syncNow() {
    if (!signedIn()) return;
    if (running) { again = true; return running; }
    // The body starts on the next tick, so a body that returns at once still clears running AFTER it is set.
    running = Promise.resolve().then(async () => {
      try {
        for (let round = 0; round < 4; round++) {
          if (host.busy()) { schedule(5000); return; }
          setState('syncing');
          const remote = await readRemote(cfg);
          let rsave = null, rmeta = emptyMeta(), rfam = normFamily(null);
          if (remote.text) {
            let box; try { box = JSON.parse(remote.text); } catch (e) { throw SyncError('otherPhrase'); }
            let plain; try { plain = JSON.parse(await open(key, box, AAD_SAVE)); } catch (e) { throw SyncError('otherPhrase'); }
            rsave = plain.save; rmeta = normMeta(plain.meta); rfam = normFamily(plain.family);
          }
          lastPull = Date.now();
          const local = host.container();
          const lmeta = loadMeta();
          const m = mergeSaves(local, lmeta, rsave, rmeta);
          saveMeta(m.meta);
          if (!same(Object.assign({}, m.save, { current: null }), Object.assign({}, normSave(local), { current: null })) || m.save.current !== local.current) {
            if (host.busy()) { schedule(5000); return; }
            adopting = true; let ok = false;
            try { ok = host.adopt(clone(m.save)); } finally { adopting = false; }
            if (!ok) { schedule(5000); return; }
          }
          baseline = host.container();
          const famBefore = fam;
          fam = mergeFamily(fam, rfam);
          if (!same(famBefore, fam)) { await cacheFamily(); drawCards(); greet(); }
          const toSend = { save: Object.assign(baseline, {}), meta: loadMeta(), family: fam };
          const unchanged = rsave && same(Object.assign({}, rsave, { current: null }), Object.assign({}, toSend.save, { current: null })) && same(rmeta, toSend.meta) && same(rfam, fam);
          if (!unchanged) {
            const box = await seal(key, JSON.stringify(toSend), AAD_SAVE);
            try { await writeRemote(cfg, JSON.stringify(box), remote.sha); }
            catch (e) { if (e.kind === 'conflict') continue; throw e; }   // someone saved in between: pull again
          }
          ls.del(PENDING_STORE); ls.set(LAST_STORE, String(Date.now()));
          retryMs = 15000; setState('saved');
          return;
        }
        schedule(5000);
      } catch (e) {
        const kind = (e && e.kind) || 'offline';
        if (kind === 'offline' || kind === 'conflict') { setState('offline'); schedule(retryMs); retryMs = Math.min(retryMs * 2, 300000); }
        else setState('error', kind);
      } finally {
        running = null;
        if (again) { again = false; setTimeout(syncNow, 0); }
      }
    });
    return running;
  }
  function schedule(ms) { clearTimeout(retryT); retryT = setTimeout(() => { syncNow(); }, ms); }

  // Called by the page after every save it writes.
  function saved() {
    if (!started) return;
    let next; try { next = host.container(); } catch (e) { return; }
    if (adopting) { baseline = next; return; }
    if (baseline && same(baseline, next)) return;
    saveMeta(observe(baseline, next, loadMeta(), Date.now()));
    baseline = next;
    if (!signedIn()) return;
    ls.set(PENDING_STORE, '1');
    if (state === 'saved') drawCards();
    clearTimeout(debounceT); debounceT = setTimeout(syncNow, 4000);
  }

  async function unlock(phrase) {
    if (!FAMILY_CONFIG) { setState('error', 'unset'); return false; }
    if (!subtle() || !root.TextEncoder) { setState('error', 'nocrypto'); return false; }
    if (!normalizePhrase(phrase)) { note = 'Type your family’s secret phrase first.'; drawCards(); return false; }
    setState('signin'); note = '';
    let k, c;
    try {
      k = await deriveKey(phrase, FAMILY_CONFIG.salt, FAMILY_CONFIG.iter);
      c = JSON.parse(await open(k, FAMILY_CONFIG.cfg, AAD_CONFIG));
    } catch (e) { key = null; cfg = null; setState('error', 'phrase'); return false; }
    key = k; cfg = c;
    await loadFamily();
    const kept = await keyStore.put(k);
    note = kept ? '' : 'This browser cannot remember the phrase, so it will ask again next time.';
    setState('syncing');
    if (!baseline) baseline = host.container();
    // The merge contract (see mergeSaves): this device's players have play the family copy has not
    // seen, so each one without a change time is stamped now, before the first pull can judge it.
    saveMeta(stampUntouched(loadMeta(), host.container(), Date.now()));
    ls.set(PENDING_STORE, '1');
    await syncNow();
    return true;
  }
  async function signOut() {
    clearTimeout(debounceT); clearTimeout(retryT);
    await keyStore.del();
    key = null; cfg = null; note = '';
    ls.del(META_STORE); ls.del(PENDING_STORE); ls.del(LAST_STORE); ls.del(FAMILY_STORE); fam = normFamily(null); greeted = false;
    setState('idle');
  }

  async function start(h) {
    host = h; started = true;
    baseline = host.container();
    drawCards();
    if (!FAMILY_CONFIG || !subtle()) return;
    let k = null; try { k = await keyStore.get(); } catch (e) {}
    if (k) {
      try { cfg = JSON.parse(await open(k, FAMILY_CONFIG.cfg, AAD_CONFIG)); key = k; }
      catch (e) { await keyStore.del(); }   // the copy was rebuilt with a new phrase: sign in again
    }
    if (signedIn()) { await loadFamily(); greet(); }
    drawCards();
    // Signed in, but this device's meta is gone (storage partly cleared): stamp, as at sign-in.
    if (signedIn() && ls.get(META_STORE) == null && Object.keys(normSave(host.container()).profiles).length) saveMeta(stampUntouched(loadMeta(), host.container(), Date.now()));
    if (signedIn()) syncNow();
    root.addEventListener('online', () => { if (signedIn()) syncNow(); });
    root.document.addEventListener('visibilitychange', () => {
      if (root.document.visibilityState !== 'visible' || !signedIn()) return;
      if (ls.get(PENDING_STORE) || Date.now() - lastPull > 60000) syncNow();
    });
  }

  // ---- the card ----
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]); }
  function drawCards() {
    for (let i = cards.length - 1; i >= 0; i--) { const c = cards[i]; if (!c.el.isConnected) { cards.splice(i, 1); continue; } drawCard(c); }
  }
  function drawCard(c) {
    const el = c.el, line = statusLine();
    if (signedIn()) {
      el.innerHTML = `<h2>Sync</h2><p class="muted" role="status" data-sync-status>${esc(line)}</p>${note ? `<p class="dim">${esc(note)}</p>` : ''}
        <p class="dim">Your progress saves to your family copy after each mission and loads on any device you sign in on.</p>
        <div class="row" style="margin-top:8px"><button type="button" class="btn small" data-sync-now>Save now</button><button type="button" class="btn small ghost" data-sync-out>Sign out of sync on this device</button></div>
        ${nameHtml()}`;
      wireName(el);
      el.querySelector('[data-sync-now]').onclick = () => { ls.set(PENDING_STORE, '1'); syncNow(); };
      el.querySelector('[data-sync-out]').onclick = () => {
        if (!root.confirm('Sign out of sync on this device? Progress already on this device stays here. It stops saving to your family copy until you sign in again.')) return;
        signOut();
      };
      return;
    }
    const busy = state === 'signin';
    // A redraw keeps what was typed (a wrong word can be fixed, not typed all over again).
    const before = el.querySelector('[data-sync-phrase]'), typed = before ? before.value : '', shown = !!before && before.type === 'text';
    el.innerHTML = `<h2>${c.where === 'welcome' ? 'Already playing on another device?' : 'Sync'}</h2>
      <p class="muted">${c.where === 'welcome' ? 'Sign in to sync, and your progress comes here.' : 'Sign in to sync.'} Type your family’s secret phrase once on this device. After that, your progress saves to your family copy after each mission and loads on any device you sign in on.</p>
      <div class="answer"><input type="password" data-sync-phrase aria-label="Family secret phrase" placeholder="Secret phrase" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" enterkeyhint="go" ${busy ? 'disabled' : ''}><button type="button" class="btn primary" data-sync-in ${busy ? 'disabled' : ''}>Sign in</button></div>
      <div class="row" style="margin-top:6px"><button type="button" class="btn small ghost" data-sync-show aria-pressed="false">Show the words</button></div>
      <p class="dim" role="status" data-sync-status>${esc(note || line)}</p>`;
    const inp = el.querySelector('[data-sync-phrase]');
    inp.value = typed; if (shown) inp.type = 'text';
    const go = () => { const v = inp.value; unlock(v).then(ok => { if (ok) inp.value = ''; }); };
    el.querySelector('[data-sync-in]').onclick = go;
    inp.addEventListener('keydown', ev => { if (ev.key === 'Enter') { ev.preventDefault(); go(); } });
    const show = el.querySelector('[data-sync-show]');
    if (shown) { show.textContent = 'Hide the words'; show.setAttribute('aria-pressed', 'true'); }
    show.onclick = () => { const on = inp.type === 'password'; inp.type = on ? 'text' : 'password'; show.textContent = on ? 'Hide the words' : 'Show the words'; show.setAttribute('aria-pressed', on ? 'true' : 'false'); };
  }
  // The name the guide uses: set by a grown-up, behind the parent code. Shown in full only to a
  // grown-up who has unlocked the parent area on this visit.
  function nameHtml() {
    const n = String(fam.displayName || '');
    if (!host || !host.parentOk()) return `<h3 style="margin-top:14px">The name the guide uses</h3><p class="dim">${n ? 'A name is set.' : 'No name is set.'} Grown-ups can set it behind the parent code.</p>
      <div class="row"><button type="button" class="btn small" data-sync-name-gate>Set the name (grown-ups)</button></div>`;
    return `<h3 style="margin-top:14px">The name the guide uses</h3><p class="dim">The guide can greet the player by name on this family copy, now and then. The name is kept scrambled with the progress and appears only after the phrase is typed. It is never used in a hint, a report or the class code. Leave it empty for none.</p>
      <div class="answer"><input type="text" data-sync-name aria-label="Name the guide uses" maxlength="20" autocomplete="off" spellcheck="false" value="${esc(n)}"><button type="button" class="btn" data-sync-name-save>Save</button></div><p class="dim" role="status" data-sync-name-msg></p>`;
  }
  function wireName(el) {
    const g = el.querySelector('[data-sync-name-gate]'); if (g) g.onclick = () => host.parentGate('to set the name the guide uses');
    const b = el.querySelector('[data-sync-name-save]');
    if (b) b.onclick = () => { const v = String(el.querySelector('[data-sync-name]').value || '').trim().slice(0, 20);
      fam.displayName = v; fam.nameAt = Date.now(); familyChanged();
      const m = el.querySelector('[data-sync-name-msg]'); if (m) m.textContent = v ? 'Saved. It goes to your other devices with the next save.' : 'Name cleared.'; };
  }

  // ---- check-ins: one optional question after a mission (family copy, signed in) ----
  const QTEXT = { feel: 'How was that mission?', help: 'Anything you\u2019d like more help with?', tell: 'Anything you want to tell Dad about the game?', better: 'What would make Odyssey better?' };
  const ROTA = ['feel', 'help', 'tell'];
  function record(info, q, a) {
    fam.checkins.push({ d: info.date, m: info.mission, q: q, a: String(a).slice(0, 300), t: Date.now() });
    familyChanged();
  }
  function textBlock(q, label) {
    return `<div data-ck="${q}"><p class="q" id="ck-${q}">${esc(QTEXT[q])}</p><textarea rows="2" maxlength="300" aria-labelledby="ck-${q}" style="width:100%;box-sizing:border-box;border:1px solid var(--control-line);border-radius:10px;background:#0c1730;color:var(--text);padding:10px;font:inherit"></textarea>
      <div class="row" style="margin-top:6px"><button type="button" class="btn small primary" data-ck-send>${label}</button><button type="button" class="btn small ghost" data-ck-skip>Skip</button></div></div>`;
  }
  // The question is chosen once, when the mission ends. On the last mission of an adventure the
  // medal ceremony leads straight to the adventure chooser, so whatever was not yet answered or
  // skipped there is shown again at the top of the chooser, once (that screen IS "Which adventure next?").
  let pending = null;
  function finished(screen, info) {
    if (!screen || !signedIn() || !info) return;
    const n = displayName(); if (n) host.say('Nice work, ' + n + '.');
    let q = null;
    for (let i = 0; i < ROTA.length && !q; i++) { const c = ROTA[(fam.turn + i) % ROTA.length]; if (c !== 'help' || (info.skills || []).length) q = c; }
    fam.turn = (fam.turn || 0) + 1;
    const first = !fam.introSeen; fam.introSeen = true; familyChanged();
    const blocks = [q].concat(info.finished ? ['better'] : []);
    const card = checkinCard(info, blocks, first, !!info.finished);
    screen.appendChild(card);
    pending = info.finished ? { info: info, blocks: blocks, card: card, first: first } : null;
  }
  function checkinCard(info, blocks, first, withNext) {
    let h = `<div class="card" data-checkin><span class="tag">Check-in</span>${first ? '<p class="dim">Your answers go to your dad so he can tune the game for you. Skip any you like.</p>' : ''}`;
    blocks.forEach(q => {
      if (q === 'feel') h += `<div data-ck="feel"><p class="q" id="ck-feel">${esc(QTEXT.feel)}</p><div class="row" role="group" aria-labelledby="ck-feel">${['Easy', 'Just right', 'Tough'].map(a => `<button type="button" class="btn" data-ck-a="${a}">${a}</button>`).join('')}<button type="button" class="btn ghost" data-ck-skip>Skip</button></div></div>`;
      if (q === 'help') h += `<div data-ck="help"><p class="q" id="ck-help">${esc(QTEXT.help)}</p><div class="row" role="group" aria-labelledby="ck-help">${info.skills.map(s => `<button type="button" class="btn" data-ck-a="${esc(s)}">${esc(s)}</button>`).join('')}<button type="button" class="btn" data-ck-a="I'm good">I\u2019m good</button><button type="button" class="btn ghost" data-ck-skip>Skip</button></div></div>`;
      if (q === 'tell' || q === 'better') h += textBlock(q, 'Send');
    });
    if (withNext) h += `<div data-ck="next"><p class="q">Which adventure next?</p><div class="row"><button type="button" class="btn small" data-ck-next>Choose the next adventure</button></div></div>`;
    h += `</div>`;
    const wrap = root.document.createElement('div'); wrap.innerHTML = h; const card = wrap.firstChild;
    const settle = qid => { if (pending) pending.blocks = pending.blocks.filter(b => b !== qid); };
    const done = (blk, msg) => { blk.innerHTML = `<p class="dim" role="status">${esc(msg)}</p>`; };
    card.querySelectorAll('[data-ck]').forEach(blk => {
      const qid = blk.getAttribute('data-ck');
      blk.querySelectorAll('[data-ck-skip]').forEach(b => b.onclick = () => { settle(qid); blk.remove();
        if (!card.querySelector('[data-ck]')) card.remove(); });
      blk.querySelectorAll('[data-ck-a]').forEach(b => b.onclick = () => {
        const a = b.getAttribute('data-ck-a'); record(info, qid, a); settle(qid);
        if (qid === 'help' && a !== "I'm good") {
          blk.innerHTML = `<p class="dim" role="status">Here is the method for ${esc(a)}. The Practice tent has more to try, with nothing scored.</p>${host.helpHtml(a)}<div class="row" style="margin-top:8px"><button type="button" class="btn small primary" data-ck-tent>Go to the Practice tent</button></div>`;
          blk.querySelector('[data-ck-tent]').onclick = () => host.practice(a);
        } else done(blk, 'Got it. Thanks.');
      });
      const send = blk.querySelector('[data-ck-send]');
      if (send) send.onclick = () => { const v = blk.querySelector('textarea').value.trim(); settle(qid); if (!v) { blk.remove(); return; } record(info, qid, v); done(blk, 'Got it. Thanks.'); };
      const nx = blk.querySelector('[data-ck-next]'); if (nx) nx.onclick = () => { const back = root.document.getElementById('backBtn'); if (back) back.click(); };
    });
    return card;
  }
  function onChooser(screen) {
    const p = pending; pending = null;
    if (!p || !signedIn() || p.card.isConnected || !p.blocks.length) return;
    const card = checkinCard(p.info, p.blocks, false, false);
    const first = screen.querySelector('.card');
    if (first) first.insertAdjacentElement('afterend', card); else screen.appendChild(card);
  }
  function missionTitle(id) {
    try { const M = root.BASECAMP_MISSIONS; for (const k of M.campaigns) for (const p of (k.patrols || [])) if (p.id === id) return k.title + ': ' + p.title; } catch (e) {}
    return id;
  }
  function reportCard(screen) {
    if (!signedIn() || !host.parentOk()) return;
    const list = fam.checkins.slice().sort((x, y) => (Number(y.t) || 0) - (Number(x.t) || 0));
    const el = root.document.createElement('div'); el.className = 'card print-hide'; el.setAttribute('data-sync-checkins', '');
    el.innerHTML = `<h2>Check-ins</h2><p class="dim">Answers to the optional question after a mission, newest first, from every device on this family copy.</p>` +
      (list.length ? `<ul class="steps">${list.map(c => `<li><b>${esc(c.d)}</b> \u00b7 ${esc(missionTitle(c.m))}<br>${esc(QTEXT[c.q] || c.q)} <b>${esc(c.a)}</b></li>`).join('')}</ul>` : '<p class="muted">No check-ins yet.</p>');
    const first = screen.querySelector('.card');
    if (first) first.insertAdjacentElement('afterend', el); else screen.appendChild(el);
  }

  // The page asks for the card on Settings (under the callsign) and on the welcome card.
  function mount(screen, where) {
    if (!screen || !FAMILY_CONFIG) return;
    if (where === 'base') { greet(); return; }
    if (where === 'report') { reportCard(screen); return; }
    if (where === 'chooser') { onChooser(screen); return; }
    if (where === 'welcome' && signedIn()) return;   // nothing to ask; the save arrives by itself
    const el = root.document.createElement('div'); el.className = 'card'; el.setAttribute('data-sync-card', where);
    const first = screen.querySelector('.card');
    if (where === 'settings' && first) first.insertAdjacentElement('afterend', el);
    else screen.insertBefore(el, screen.firstChild);
    const c = { el: el, where: where }; cards.push(c); drawCard(c);
  }

  root.OdysseySync = { start, saved, mount, finished, signOut, syncNow, status: () => ({ state, errorKind, signedIn: signedIn(), line: statusLine() }), _pure: pure };
})(typeof window !== 'undefined' ? window : this);

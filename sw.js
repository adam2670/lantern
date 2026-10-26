// Odyssey service worker: makes the game work offline once it has loaded once.
//
// Two caches, on purpose:
//
//   CACHE_VERSION ("the shell")   the pages, the engine, help.js and the mission INDEX. Stamped
//                                 at publish time; a new stamp throws the old shell away, which
//                                 is how an update reaches a device that has the game stored.
//   CONTENT_CACHE ("the luggage") the adventure files (missions/<id>.<hash>.js) and the pictures.
//                                 Its name never changes, so a new version of the game does NOT
//                                 make a child download the year again. Safe because an adventure
//                                 file's name carries a hash of its own content: a changed
//                                 adventure is a new filename, never a changed file. Old
//                                 filenames are cleared out on activate, from the new index.
//                                 Pictures are NOT hashed in their names, so a corrected picture
//                                 keeps its name: PICTURES below says what each one should be, and
//                                 a stored copy that no longer matches is replaced (never just
//                                 dropped) the next time the page loads with a connection.
//
// Strategy: the shell is fetched fresh when the connection is healthy and served from store when
// it is not. The luggage is served from store first — it cannot go stale — and whatever is
// missing is fetched and kept.
const CACHE_VERSION = 'family-20261026180525';
const CONTENT_CACHE = 'basecamp-content';
// CORE is the shell: the home page, every other page, the mission index, help.js, the manifest
// and the icon. It is no longer kept by hand. The list in the PUBLISHED copy of this file is
// written by tools/publish-kit.sh from the .html files in kit/, in the same pass that stamps
// CACHE_VERSION above, so a page added to kit/ works offline the day it ships rather than the day
// somebody notices it is the one page that fails on a plane. The list kept in the source is a
// stub — the home page only, which is enough to install and to top up when kit/ is served as it
// stands; every other page is then stored the first time it is opened.
const CORE = ['./', './index.html', './medals.html', './missions.js', './help.js', './qr.js', './scan.js', './qr-decode.js', './qr-decode.LICENSE.txt', './manifest.json', './favicon.ico', './sync.js'];
// PICTURES: every picture's path and a short hash of its bytes, written into the PUBLISHED copy
// by tools/publish-kit.sh in the same pass as CORE. null in the source, which turns the picture
// check off when kit/ is served as it stands.
const PICTURES = {"assets/avatar-bat.png":"1cef6ee8a4ce1939","assets/avatar-bighorn.png":"2da3fb18acd0149e","assets/avatar-builderbot.png":"5c7de217d4b5374b","assets/avatar-cinder.png":"74470929fe5566b5","assets/avatar-countdown.png":"3d013477365498aa","assets/avatar-droid.png":"018569720880a900","assets/avatar-droid2.png":"9afe0bc430962d7d","assets/avatar-dusty.png":"0b3d0f060f735e35","assets/avatar-eagle.png":"fa30a91fa3bc20d0","assets/avatar-fox.png":"1239d83a72f7e6a6","assets/avatar-gatorbot.png":"ea43631ca7b8ca59","assets/avatar-goat.png":"47fe942ab7c8e874","assets/avatar-gust.png":"a6df5ec1546013b7","assets/avatar-hare.png":"ae3a883647a1e48a","assets/avatar-hawk.png":"1237d964bdf1b1c8","assets/avatar-heron.png":"76d2d828b4a5d347","assets/avatar-husky.png":"dceeb4235f798d21","assets/avatar-lynx.png":"c4ae80b68efbd55b","assets/avatar-marmot.png":"fa9bb5a73ab37e9d","assets/avatar-mole.png":"652811a1db6a218d","assets/avatar-moth.png":"07e724b60fea56df","assets/avatar-octopus.png":"3daa7f0a5798fd7a","assets/avatar-otter.png":"3fe9308174f02c16","assets/avatar-owl.png":"f87e571885746dc9","assets/avatar-parrot.png":"b316c7fb9911e485","assets/avatar-puffin.png":"c30d479b273b355f","assets/avatar-raven.png":"a2cd4aef8248b517","assets/avatar-rounds.png":"400db563f5a75546","assets/avatar-sealion.png":"dd94a44d912e1388","assets/avatar-showbot.png":"3f6d4f0fa77cda7f","assets/avatar-sloth.png":"7331cbc88372b2a3","assets/avatar-stagecat.png":"9cbdeb08e41058f9","assets/avatar-tether.png":"87001de3a0082847","assets/avatar-trowel.png":"ce9dd138d414043a","assets/avatar-walrus.png":"3c1a7e4776ef1f57","assets/avatar-wolf.png":"a5a9b1f7bc91ccb3","assets/avatar-wrench.png":"3830b81ae474c8ac","assets/bat-640.png":"de607f6614b8e002","assets/bear-640.png":"bad4bd81abcd419a","assets/bighorn-640.png":"4be577bdd81419cf","assets/builder-640.png":"a1037fcada3dba80","assets/cinder-640.png":"37907ab3aa821573","assets/countdown-640.png":"c23d694358e04f11","assets/droid-640.png":"bda6b1132c637bab","assets/droid2-640.png":"d23ca8894826005a","assets/dusty-640.png":"14d359ac109b90a3","assets/eagle-640.png":"eed2b316db31f399","assets/emblem-arena.png":"faeaf62da36d4845","assets/emblem-aurora.png":"8b3028f7e755a6bb","assets/emblem-basebuild.png":"017d645a260f25f2","assets/emblem-bering.png":"b549bf7d2c6d6f7f","assets/emblem-canopy.png":"aaad96b70f8debec","assets/emblem-canyon.png":"1a7f5b66cb1510a2","assets/emblem-castle.png":"777059015d4a2eaf","assets/emblem-cave.png":"fc54c8bde7dffad4","assets/emblem-circus.png":"a543d285b29d3adf","assets/emblem-cove.png":"dd5b475e80c78818","assets/emblem-dartops.png":"bef0f5d20970c4a8","assets/emblem-denali.png":"d55f2d74adc5bc8d","assets/emblem-dig.png":"a0dc066ca79f7e22","assets/emblem-drift.png":"63cb63f0a59306da","assets/emblem-flattop.png":"0230f2d6ca2bef5c","assets/emblem-ghosttrain.png":"7beee70a6ca3b68c","assets/emblem-glacier.png":"e6c8d0c968670956","assets/emblem-glades.png":"8d7c019d0c0a6bc8","assets/emblem-iditarod.png":"34fb54965fdf5ed5","assets/emblem-kenai.png":"808facc00ec4e0d1","assets/emblem-lighthouse.png":"f807c7ec4767c0f1","assets/emblem-lookout.png":"004d055db944008c","assets/emblem-mall.png":"85bbacd29e501fa4","assets/emblem-mine.png":"ec06b4b01e3eb9d5","assets/emblem-nightshift.png":"16b288d8e2abbf80","assets/emblem-redoubt.png":"babd9329d2349423","assets/emblem-rocket.png":"19620b032904328a","assets/emblem-rover.png":"4a1b99157c1207d4","assets/emblem-saber.png":"82bd1a7b1ff298e7","assets/emblem-sky.png":"1a1523aa6db87a70","assets/emblem-station.png":"a1778de0a300a4ad","assets/emblem-storm.png":"1ab71ce908d0fe1a","assets/emblem-theater.png":"acfc336eb8793f85","assets/emblem-trench.png":"9bf0fc0606bb3165","assets/emblem-wolves.png":"e49fe88d1c6b77ae","assets/emblem-wreck.png":"33471dc96e803682","assets/fox-640.png":"9681f88e9b7953f4","assets/gator-640.png":"f3ab1cfd96617120","assets/goat-640.png":"67667cf34fcebb46","assets/gust-640.png":"fa6ec45f5cecaf5f","assets/hare-640.png":"4c6cbcfc06c938c6","assets/hawk-640.png":"9f001b06ce9a3475","assets/heron-640.png":"7eec3f218f9c9fcc","assets/husky-640.png":"f1fa112e8af8659b","assets/icon-1024.png":"ea93aea2a6bf3596","assets/icon-180.png":"c41fb87f9dbc6263","assets/icon-192.png":"15a3ca8fbb0dbfb1","assets/icon-512.png":"482f06307a32705a","assets/lynx-640.png":"efe9d95129864ae8","assets/marmot-640.png":"f16e0d130096fae4","assets/medal-bronze.png":"f76c98fa66ad4a93","assets/medal-frame.png":"d1b036246cf2aa02","assets/medal-gold.png":"4798d857afcd43e7","assets/medal-silver.png":"b01cdfa3adb7b154","assets/mole-640.png":"662f88171bfa4d11","assets/moth-640.png":"274a1ff6ae8aee92","assets/octopus-640.png":"48236ea20f153b59","assets/otter-640.png":"25e537979b45e689","assets/owl-640.png":"cb3e37b9bdd7f218","assets/parrot-640.png":"aee08cb897fe0c8c","assets/puffin-640.png":"d3fc2bdf7b87b0cf","assets/qr-odyssey.png":"fda78647ba930a10","assets/rounds-640.png":"cb7f4adefe79d41c","assets/scene-arena.jpg":"e2e4517283f9c998","assets/scene-aurora.jpg":"88db6b4cebfe6d83","assets/scene-base.jpg":"33b59557a1f8efc7","assets/scene-bering.jpg":"b683171184ff37de","assets/scene-canopy.jpg":"8beb0fc93d53c22e","assets/scene-canyon.jpg":"9ae2cf403c28f95b","assets/scene-castle.jpg":"da249aa31977abe0","assets/scene-cave.jpg":"b914887a1b15b841","assets/scene-circus.jpg":"06acade94db14e33","assets/scene-cove.jpg":"c4e4d77d9fceacc1","assets/scene-dartops.jpg":"69983e1947f59399","assets/scene-denali.jpg":"cb06e9cc711fb92f","assets/scene-dig.jpg":"f0ecc9cf76a6f4e2","assets/scene-drift.jpg":"6bb421c70f0cb8b7","assets/scene-drift2.jpg":"69be5198368e6037","assets/scene-flattop.jpg":"dce0a06069e55969","assets/scene-ghosttrain.jpg":"e6467f3210de2f9e","assets/scene-glacier.jpg":"1c46720ae49baad4","assets/scene-glades.jpg":"2534f3f33812842e","assets/scene-iditarod.jpg":"866b8493aed3b42b","assets/scene-kenai.jpg":"aa1b751d91b29e49","assets/scene-lighthouse.jpg":"c9ba06436db7d229","assets/scene-lookout.jpg":"f8a3d0cd71db9e51","assets/scene-mall.jpg":"c7c90c7b6ad36f67","assets/scene-mine.jpg":"3f613e7366a7e4ad","assets/scene-nightshift.jpg":"2b55b2dfddc96768","assets/scene-redoubt.jpg":"b098333ed72bf6f4","assets/scene-rocket.jpg":"710466c55d4edf07","assets/scene-rover.jpg":"5f024bc350bd36bf","assets/scene-sky.jpg":"6f40f17c4fd08410","assets/scene-station.jpg":"0f48c5b852bbfb39","assets/scene-storm.jpg":"524484d809c6b09d","assets/scene-theater.jpg":"7ba1c8c5b3811fd1","assets/scene-trench.jpg":"a4978e09e3938abf","assets/scene-wolves.jpg":"a132e2d8c750ec49","assets/scene-workshop.jpg":"a9de17191dc2f0ff","assets/scene-wreck.jpg":"10e9de43897baf8b","assets/sealion-640.png":"39f5bf20b7790c6f","assets/sitka-640.png":"3acda741cbdcc12f","assets/sloth-640.png":"9717004a6f343f5a","assets/stagecat-640.png":"4349c20e8d54cba3","assets/tether-640.png":"a60aaa8cd918ef41","assets/thumb-arena.jpg":"68c6474fbfec893c","assets/thumb-aurora.jpg":"7e268b8311d1a843","assets/thumb-base.jpg":"f847e15f42f2ac1d","assets/thumb-bering.jpg":"b8dd3c721c0ff54d","assets/thumb-canopy.jpg":"9af58b3ab660332b","assets/thumb-canyon.jpg":"1575c518e8ebc7c7","assets/thumb-castle.jpg":"b580d5ccf364e90b","assets/thumb-cave.jpg":"5b61ad8c1f4c5347","assets/thumb-circus.jpg":"3c4b429fe8f07409","assets/thumb-cove.jpg":"c6f7a377a0210827","assets/thumb-dartops.jpg":"765d1605b10509ed","assets/thumb-denali.jpg":"b3fe4ea064642078","assets/thumb-dig.jpg":"d5e5fc59706ebe6e","assets/thumb-drift.jpg":"7538cacd1a8c56a0","assets/thumb-drift2.jpg":"c43dba63f574c46d","assets/thumb-flattop.jpg":"3fc3cc8837144dbf","assets/thumb-ghosttrain.jpg":"0ba47124579517a7","assets/thumb-glacier.jpg":"59140df880f1ef1a","assets/thumb-glades.jpg":"d7a711044035fe1e","assets/thumb-iditarod.jpg":"f34dba0202bfabbc","assets/thumb-kenai.jpg":"c9970876dd7f118d","assets/thumb-lighthouse.jpg":"59bf58fde177505f","assets/thumb-lookout.jpg":"75de9a139e8abbfe","assets/thumb-mall.jpg":"697914ba8602f800","assets/thumb-mine.jpg":"81841b2910e228f4","assets/thumb-nightshift.jpg":"aa2e85a43033e266","assets/thumb-redoubt.jpg":"ec809d5bf98165f9","assets/thumb-rocket.jpg":"ed60cf997ebf66fc","assets/thumb-rover.jpg":"ab0c17c10b91b6f9","assets/thumb-sky.jpg":"82d1295d443532d8","assets/thumb-station.jpg":"b0fe759f8097a45c","assets/thumb-storm.jpg":"0a9bd1d3653fc78b","assets/thumb-theater.jpg":"63a7ae2ad0161021","assets/thumb-trench.jpg":"2d9e0a7a94538d59","assets/thumb-wolves.jpg":"90834e94ce97b673","assets/thumb-workshop.jpg":"cfa01c6a9ecd316e","assets/thumb-wreck.jpg":"90cc4259c57686d5","assets/trowel-640.png":"d142c79ad2cd89d2","assets/walrus-640.png":"344f071db0561f0a","assets/wolf-640.png":"f8acd13c3809cfa7","assets/wrench-640.png":"a66a8a162c02beac"};
// How long to wait for a fresh copy before serving the stored one. This is only ever used when
// there IS a stored one: giving up early on a page nothing can stand in for would just show an
// error, so that case waits instead. Generous, because a page that arrives late still beats a
// page that arrives stale.
const NETWORK_TIMEOUT_MS = 5000;
const PREFETCH_PAUSE_MS = 60;      // a breather between downloads, so a tapped link never queues

function isCampaignFile(url) { return /\/missions\/[^/]+\.js$/.test(url.pathname); }
function isPicture(url) { return /\.(?:jpg|jpeg|png|webp|gif|svg)$/i.test(url.pathname); }
function isContent(url) { return isCampaignFile(url) || isPicture(url); }
function pause(ms) { return new Promise(r => setTimeout(() => r(null), ms)); }
// cache.add() goes through the browser's own HTTP cache, which can hand back yesterday's copy to
// be stored under today's version. Asking with no-cache makes it check with the server first.
function fresh(p) { return new Request(p, { cache: 'no-cache' }); }

// Install is deliberately NOT all-or-nothing. addAll rejects the whole install if a single file
// 404s or one request times out, which leaves a device with no offline copy at all because one
// icon was slow. Each file is fetched on its own and a failure is allowed to pass; whatever is
// missing is filled in by the shell top-up the first time that page is opened with a connection.
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_VERSION)
      .then(c => Promise.all(CORE.map(p => c.add(fresh(p)).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  const ready = caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION && k !== CONTENT_CACHE).map(k => caches.delete(k))))
    .then(dropSupersededCampaigns)
    .then(() => self.clients.claim());
  e.waitUntil(ready);
  // The page that brought this worker in has usually already said hello to the old one, so check
  // the pictures now rather than a whole visit later. Outside waitUntil on purpose: while activate
  // is waiting, every request the page makes waits with it. If the browser stops the worker
  // halfway, the next load's hello finishes the job.
  ready.then(checkPictures).catch(() => null);
});

// Adventure files whose filename the current index no longer mentions are last year's copies of
// something that has since been rewritten. Nothing will ever ask for them again.
async function dropSupersededCampaigns() {
  try {
    const res = await fetch('./missions.js', { cache: 'no-cache' });
    if (!res || !res.ok) return;                    // offline: keep everything, decide next time
    const text = await res.text();
    const keep = new Set(text.match(/missions\/[A-Za-z0-9._-]+\.js/g) || []);
    if (!keep.size) return;
    // CONTENT_CACHE is a fixed name, so every copy of Odyssey served from this host shares one
    // content cache: production, and any review or evaluation snapshot alongside it. The match
    // below is on the BARE FILENAME with the path discarded, which cannot tell one copy's campaign
    // from another's. Without the scope guard, a frozen snapshot and a moving production delete
    // each other's stored adventures every time either worker activates - harmless online, and
    // exactly the child the offline support exists for when not. Measured 20 September 2026: both
    // surfaces listed the same 36 filenames, so nothing was being evicted yet; it would have begun
    // at the first content publish that changed a hash while a snapshot stayed frozen.
    const scope = self.registration.scope;
    const cache = await caches.open(CONTENT_CACHE);
    const keys = await cache.keys();
    await Promise.all(keys.map(req => {
      if (!req.url.startsWith(scope)) return null;   // another copy's luggage, not ours to judge
      const u = new URL(req.url);
      if (!isCampaignFile(u)) return null;
      return keep.has('missions/' + u.pathname.split('/').pop()) ? null : cache.delete(req);
    }));
  } catch (e) { /* never let housekeeping stop the worker taking over */ }
}

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;

  if (isContent(url)) {                              // luggage: stored copy wins, always
    e.respondWith(caches.open(CONTENT_CACHE).then(async cache => {
      const hit = await cache.match(e.request);
      if (hit) return hit;
      try {
        const res = await fetch(e.request);
        if (res && res.ok) cache.put(e.request, res.clone());
        return res;
      } catch (err) {
        return new Response('Offline and not stored yet.', { status: 503 });
      }
    }).catch(() => fetch(e.request)));               // storage refused outright: just ask the network
    return;
  }

  e.respondWith(caches.open(CACHE_VERSION).then(async cache => {   // shell: fresh if it is quick
    // Start asking the network straight away, and keep whatever comes back however late it is:
    // a page that lands after the deadline still repairs the store for next time.
    // A page is stored under its address WITHOUT the query: every ?start=... link is the same
    // page, and storing each one by its full address kept a whole extra copy of the game per link.
    const key = e.request.mode === 'navigate' ? url.origin + url.pathname : e.request;
    const network = fetch(e.request, { cache: 'no-cache' })
      .then(res => { if (res && res.ok) { cache.put(key, res.clone()); return res; } return null; })
      .catch(() => null);

    // Is there a stored copy to fall back on? A link with a query on it (?start=glacier:3, a
    // cache-buster) is the same page as the one that was stored, so ignore the query for a page.
    const stored = await cache.match(e.request)
      || (e.request.mode === 'navigate' ? await cache.match(e.request, { ignoreSearch: true }) : null);

    // Only give up on the network early when there is something to give up TO. With nothing
    // stored — a first visit, or a device whose store the browser reclaimed — a deadline buys
    // nothing and costs everything: it turns a slow page into "Offline and not stored yet."
    // while the connection is perfectly fine. So wait.
    const res = stored ? await Promise.race([network, pause(NETWORK_TIMEOUT_MS)]) : await network;

    return res || stored || new Response('Offline and not stored yet.', { status: 503 });
  }).catch(() => fetch(e.request)));                 // storage refused outright (engine audit, 23 Oct 2026)
});

// The page sends the whole year's file list once it is up and today's adventure is in. Everything
// missing is fetched one at a time, adventures before pictures, and kept. After this has run
// once the game is complete on the device: any adventure, offline, all year.
let prefetching = false;
self.addEventListener('message', e => {
  const d = e.data || {};
  if (d.type !== 'prefetch' || prefetching) return;
  prefetching = true;
  e.waitUntil(
    topUpShell()                                     // the safety net first, the year afterwards
      .then(checkPictures)
      .then(() => prefetch([].concat(d.files || [], d.images || [])))
      .finally(() => { prefetching = false; })
  );
});

// A browser can reclaim a device's stored copies without unregistering the worker, which leaves
// the game running with an empty shell — every page a first visit again. The page tells us it is
// up on every load, so that is the moment to put back anything missing. A dozen small files, and
// nothing at all to do when they are already there.
async function topUpShell() {
  try {
    const cache = await caches.open(CACHE_VERSION);
    for (const path of CORE) {
      if (await cache.match(path)) continue;
      try { await cache.add(fresh(path)); } catch (err) { /* offline: it will keep until next time */ }
    }
  } catch (err) { /* never let housekeeping stop the prefetch */ }
}

// A picture's name does not change when the picture does, so "stored copy wins" would keep a
// corrected picture off every device that already has the old one. PICTURES names what each one
// should be. A stored picture is checked against it once (its bytes hashed here, nothing
// downloaded) and the answer remembered; one that differs is fetched again and swapped in only
// once the new copy has arrived and matches. The old copy is never deleted first, because a
// device that goes offline halfway would then show blanks where it used to show the old picture;
// a picture one version behind is the better failure. Whatever could not be fetched stays as it
// was and is tried again on the next load with a connection.
// Activate and the page's hello can both ask at once; the second simply waits for the first.
let picturesRun = null;
function checkPictures() {
  return picturesRun || (picturesRun = refreshPictures().finally(() => { picturesRun = null; }));
}
async function refreshPictures() {
  if (!PICTURES || !self.crypto || !crypto.subtle) return;
  try {
    const scope = self.registration.scope;
    const cache = await caches.open(CONTENT_CACHE);
    const ledgerKey = scope + '.picture-hashes';   // not a real file; per copy, like the scope guard
    const hit = await cache.match(ledgerKey);
    const ledger = hit ? await hit.json().catch(() => ({})) : {};
    let changed = false;
    for (const req of await cache.keys()) {
      if (!req.url.startsWith(scope)) continue;      // another copy's luggage, not ours to judge
      const u = new URL(req.url);
      if (!isPicture(u) || u.search) continue;
      const rel = req.url.slice(scope.length);
      const want = PICTURES[rel];
      if (!want || ledger[rel] === want) continue;
      const stored = await cache.match(req);
      if (stored && await shortHash(stored) === want) { ledger[rel] = want; changed = true; continue; }
      try {
        const res = await fetch(req.url, { cache: 'no-cache' });
        if (res && res.ok && await shortHash(res.clone()) === want) {
          await cache.put(req, res); ledger[rel] = want; changed = true;
        }
      } catch (err) { /* offline: keep the old picture, try again next time */ }
      await pause(PREFETCH_PAUSE_MS);
    }
    if (changed) await cache.put(ledgerKey, new Response(JSON.stringify(ledger), { headers: { 'Content-Type': 'application/json' } }));
  } catch (err) { /* never let housekeeping stop the prefetch */ }
}
async function shortHash(res) {
  const d = await crypto.subtle.digest('SHA-256', await res.arrayBuffer());
  return Array.from(new Uint8Array(d).slice(0, 8), b => b.toString(16).padStart(2, '0')).join('');
}

async function prefetch(list) {
  const cache = await caches.open(CONTENT_CACHE);
  const todo = [];
  for (const rel of list) {
    if (!rel) continue;
    const url = new URL(rel, self.location.href).href;
    if (!(await cache.match(url))) todo.push(url);
  }
  // One at a time, with a breather between each. The year still lands in the background, it just
  // never fills the connection: a child who taps a link while this is running waits for one file,
  // not for thirty-six. A burst is how a background download ends up in front of the child.
  for (const url of todo) {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (res && res.ok) await cache.put(url, res);
    } catch (err) { /* a missing picture is not a reason to stop */ }
    await pause(PREFETCH_PAUSE_MS);
  }
}

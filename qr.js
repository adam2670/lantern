/* qr.js — a QR code encoder for Odyssey.
 *
 * Written from scratch for this project against the published QR specification (ISO/IEC 18004).
 * No library, no dependency, no network. Placed in the public domain by its author; use it for
 * anything. There is no adapted third-party code in this file, so there is no other license to
 * carry.
 *
 * WHY THIS EXISTS, in plain English. A teacher with a cart of twenty-two laptops cannot type
 * twenty-two long codes into the class page. So the child's screen draws its class code as a
 * square of black and white blocks, and the teacher's phone camera reads it as she walks the row.
 * This file is the part that turns the text into the square. Nothing here knows anything about a
 * child: it is handed a string and it draws it.
 *
 * WHAT IT DOES AND DOES NOT DO. Encoding only — it makes codes, it does not read them; reading is
 * the browser's own code reader on the teacher's page. Byte mode only (any text, UTF-8), error
 * correction level M only (about 15% of the square can be dirty, smudged or glared out and the
 * code still reads — the level every phone-scanned code in the world uses), versions 1 to 40,
 * which is every size the format has. Level M is the only one with tables in this file, on purpose:
 * one level, one table, one thing to get wrong.
 *
 * API
 *   OdysseyQR.encode(text)            -> {version, size, modules}   modules[row][col] is 0 or 1
 *   OdysseyQR.toCanvas(canvas, text, opts)  draws it; opts {quiet, dark, light, scale, maxPixels}
 *   OdysseyQR.capacity(version)       -> how many bytes fit at level M
 */
(function (global) {
  'use strict';

  // Total codewords (data + error correction) in each version, 1 to 40.
  var TOTAL = [0,
    26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
    404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
    1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
    2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];

  // Error-correction level M, one row per version:
  //   [ec codewords per block, blocks in group 1, data codewords each, blocks in group 2, data each]
  // The self-check at the bottom of this file proves each row adds up to TOTAL for that version,
  // so a typo here cannot ship quietly.
  var ECM = [null,
    [10, 1, 16, 0, 0],   [16, 1, 28, 0, 0],   [26, 1, 44, 0, 0],   [18, 2, 32, 0, 0],
    [24, 2, 43, 0, 0],   [16, 4, 27, 0, 0],   [18, 4, 31, 0, 0],   [22, 2, 38, 2, 39],
    [22, 3, 36, 2, 37],  [26, 4, 43, 1, 44],  [30, 1, 50, 4, 51],  [22, 6, 36, 2, 37],
    [22, 8, 37, 1, 38],  [24, 4, 40, 5, 41],  [24, 5, 41, 5, 42],  [28, 7, 45, 3, 46],
    [28, 10, 46, 1, 47], [26, 9, 43, 4, 44],  [26, 3, 44, 11, 45], [26, 3, 41, 13, 42],
    [26, 17, 42, 0, 0],  [28, 17, 46, 0, 0],  [28, 4, 47, 14, 48], [28, 6, 45, 14, 46],
    [28, 8, 47, 13, 48], [28, 19, 46, 4, 47], [28, 22, 45, 3, 46], [28, 3, 45, 23, 46],
    [28, 21, 45, 7, 46], [28, 19, 47, 10, 48],[28, 2, 46, 29, 47], [28, 10, 46, 23, 47],
    [28, 14, 46, 21, 47],[28, 14, 46, 23, 47],[28, 12, 47, 26, 48],[28, 6, 47, 34, 48],
    [28, 29, 46, 14, 47],[28, 13, 46, 32, 47],[28, 40, 47, 7, 48], [28, 18, 47, 31, 48]];

  // Where the small alignment squares go, by version. Every pair of these coordinates gets one,
  // except the three corners already taken by the big finder squares.
  var ALIGN = [null, [],
    [6,18],[6,22],[6,26],[6,30],[6,34],
    [6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],
    [6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],
    [6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],
    [6,30,58,86,114],[6,34,62,90,118],
    [6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],
    [6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],
    [6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],
    [6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]];

  // ---- arithmetic in GF(256), the finite field the error correction is built on ----
  var EXP = new Uint8Array(512), LOG = new Uint8Array(256);
  (function () {
    var x = 1;
    for (var i = 0; i < 255; i++) {
      EXP[i] = x; LOG[x] = i;
      x <<= 1; if (x & 0x100) x ^= 0x11d;          // the standard primitive polynomial
    }
    for (i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
  })();
  function mul(a, b) { return (a === 0 || b === 0) ? 0 : EXP[LOG[a] + LOG[b]]; }

  // The generator polynomial for n error-correction codewords.
  var GEN = {};
  function generator(n) {
    if (GEN[n]) return GEN[n];
    var g = [1];
    for (var i = 0; i < n; i++) {
      var ng = new Array(g.length + 1).fill(0);
      for (var j = 0; j < g.length; j++) {
        ng[j] ^= g[j];                        // multiplied by x: the degree goes up
        ng[j + 1] ^= mul(g[j], EXP[i]);       // multiplied by the root
      }
      g = ng;
    }
    return (GEN[n] = g);
  }

  // Polynomial long division: the remainder is the error-correction block.
  function ecBlock(data, n) {
    var g = generator(n), rem = new Array(n).fill(0), i, j;
    for (i = 0; i < data.length; i++) {
      var factor = data[i] ^ rem[0];
      rem.shift(); rem.push(0);
      for (j = 0; j < n; j++) rem[j] ^= mul(g[j + 1], factor);
    }
    return rem;
  }

  // ---- bit stream ----
  function Bits() { this.bits = []; }
  Bits.prototype.put = function (value, length) {
    for (var i = length - 1; i >= 0; i--) this.bits.push((value >>> i) & 1);
  };
  Bits.prototype.bytes = function () {
    var out = [];
    for (var i = 0; i < this.bits.length; i += 8) {
      var b = 0;
      for (var j = 0; j < 8; j++) b = (b << 1) | (this.bits[i + j] || 0);
      out.push(b);
    }
    return out;
  };

  function utf8(text) {
    var out = [], s = unescape(encodeURIComponent(String(text)));
    for (var i = 0; i < s.length; i++) out.push(s.charCodeAt(i) & 0xff);
    return out;
  }

  function dataCodewords(version) {
    var e = ECM[version];
    return e[1] * e[2] + e[3] * e[4];
  }

  // How many bytes of text fit in a given version at level M. The overhead is the 4-bit mode
  // marker plus the character count (8 bits up to version 9, 16 bits from version 10).
  function capacity(version) {
    var countBits = version < 10 ? 8 : 16;
    return dataCodewords(version) - Math.ceil((4 + countBits) / 8);
  }

  function pickVersion(byteLength) {
    for (var v = 1; v <= 40; v++) if (capacity(v) >= byteLength) return v;
    return 0;
  }

  // ---- the codeword stream: encode, pad, split into blocks, interleave ----
  function codewords(version, bytes) {
    var e = ECM[version], total = dataCodewords(version);
    var bs = new Bits();
    bs.put(4, 4);                                   // byte mode
    bs.put(bytes.length, version < 10 ? 8 : 16);
    for (var i = 0; i < bytes.length; i++) bs.put(bytes[i], 8);
    var room = total * 8;
    bs.put(0, Math.min(4, room - bs.bits.length));  // terminator
    while (bs.bits.length % 8) bs.bits.push(0);
    var data = bs.bytes();
    var pad = [0xec, 0x11], p = 0;
    while (data.length < total) data.push(pad[p++ % 2]);

    // Split into the blocks this version uses, and compute each block's error correction.
    var blocks = [], ecs = [], at = 0, k;
    for (k = 0; k < e[1]; k++) { blocks.push(data.slice(at, at + e[2])); at += e[2]; }
    for (k = 0; k < e[3]; k++) { blocks.push(data.slice(at, at + e[4])); at += e[4]; }
    for (k = 0; k < blocks.length; k++) ecs.push(ecBlock(blocks[k], e[0]));

    // Interleave: first codeword of every block, then the second of every block, and so on.
    var out = [], maxData = Math.max(e[2], e[4]), b;
    for (i = 0; i < maxData; i++) for (b = 0; b < blocks.length; b++) if (i < blocks[b].length) out.push(blocks[b][i]);
    for (i = 0; i < e[0]; i++) for (b = 0; b < ecs.length; b++) out.push(ecs[b][i]);
    return out;
  }

  // ---- the matrix ----
  function blank(size) {
    var m = [], r;
    for (r = 0; r < size; r++) m.push(new Int8Array(size).fill(-1));   // -1 = still free
    return m;
  }

  function placeFunctions(m, version) {
    var size = m.length, i, j, r, c;
    function square(top, left) {                    // a finder pattern plus its white separator
      for (r = -1; r <= 7; r++) for (c = -1; c <= 7; c++) {
        var y = top + r, x = left + c;
        if (y < 0 || x < 0 || y >= size || x >= size) continue;
        var on = (r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
                 (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
                 (r >= 2 && r <= 4 && c >= 2 && c <= 4);
        m[y][x] = on ? 1 : 0;
      }
    }
    square(0, 0); square(0, size - 7); square(size - 7, 0);

    for (i = 8; i < size - 8; i++) {                // timing patterns
      var bit = (i % 2 === 0) ? 1 : 0;
      m[6][i] = bit; m[i][6] = bit;
    }

    var pos = ALIGN[version];                       // alignment patterns
    for (i = 0; i < pos.length; i++) for (j = 0; j < pos.length; j++) {
      var cy = pos[i], cx = pos[j];
      if ((cy <= 8 && cx <= 8) || (cy <= 8 && cx >= size - 9) || (cy >= size - 9 && cx <= 8)) continue;
      for (r = -2; r <= 2; r++) for (c = -2; c <= 2; c++) {
        m[cy + r][cx + c] = (Math.max(Math.abs(r), Math.abs(c)) !== 1) ? 1 : 0;
      }
    }

    m[size - 8][8] = 1;                             // the one module that is always dark

    for (i = 0; i < 9; i++) {                       // reserve the format-information strips
      if (m[8][i] === -1) m[8][i] = 0;
      if (m[i][8] === -1) m[i][8] = 0;
    }
    for (i = 0; i < 8; i++) {
      if (m[8][size - 1 - i] === -1) m[8][size - 1 - i] = 0;
      if (m[size - 1 - i][8] === -1) m[size - 1 - i][8] = 0;
    }

    if (version >= 7) {                             // version information, two 6x3 blocks
      var bits = versionBits(version);
      for (i = 0; i < 18; i++) {
        var b2 = (bits >>> i) & 1, a = Math.floor(i / 3), d = i % 3;
        m[a][size - 11 + d] = b2;
        m[size - 11 + d][a] = b2;
      }
    }
  }

  // Both of these are BCH codes; computing them is shorter and safer than a table of 40 rows.
  function versionBits(version) {
    var d = version << 12;
    for (var i = 0; i < 6; i++) if (d >>> (17 - i) & 1) d ^= 0x1f25 << (5 - i);
    return (version << 12) | d;
  }
  function formatBits(mask) {
    var v = (0 << 3) | mask;                        // 00 = error-correction level M
    var d = v << 10;
    for (var i = 0; i < 5; i++) if (d >>> (14 - i) & 1) d ^= 0x537 << (4 - i);
    return ((v << 10) | d) ^ 0x5412;
  }

  function isFree(m, r, c) { return m[r][c] === -1; }

  function placeData(m, bytes) {
    var size = m.length, bit = 0, up = true, col, r, c;
    for (col = size - 1; col > 0; col -= 2) {
      if (col === 6) col--;                         // the vertical timing column is not a data column
      for (var n = 0; n < size; n++) {
        r = up ? size - 1 - n : n;
        for (var k = 0; k < 2; k++) {
          c = col - k;
          if (!isFree(m, r, c)) continue;
          var b = 0;
          if (bit < bytes.length * 8) b = (bytes[bit >> 3] >>> (7 - (bit & 7))) & 1;
          m[r][c] = b | 2;                          // bit 2 marks "this is data", for masking
          bit++;
        }
      }
      up = !up;
    }
  }

  function maskFn(i) {
    return [
      function (r, c) { return (r + c) % 2 === 0; },
      function (r) { return r % 2 === 0; },
      function (r, c) { return c % 3 === 0; },
      function (r, c) { return (r + c) % 3 === 0; },
      function (r, c) { return (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0; },
      function (r, c) { return (r * c) % 2 + (r * c) % 3 === 0; },
      function (r, c) { return ((r * c) % 2 + (r * c) % 3) % 2 === 0; },
      function (r, c) { return ((r + c) % 2 + (r * c) % 3) % 2 === 0; }
    ][i];
  }

  // The scoring the specification defines, to choose the mask that gives a scanner the least
  // trouble: long same-color runs, 2x2 blocks, finder-like sequences, and a lopsided black/white
  // balance are all penalised.
  function penalty(g) {
    var size = g.length, score = 0, r, c, i;
    function runs(get) {
      var s = 0;
      for (r = 0; r < size; r++) {
        var run = 1;
        for (c = 1; c < size; c++) {
          if (get(r, c) === get(r, c - 1)) { run++; if (run === 5) s += 3; else if (run > 5) s += 1; }
          else run = 1;
        }
      }
      return s;
    }
    score += runs(function (a, b) { return g[a][b]; });
    score += runs(function (a, b) { return g[b][a]; });
    for (r = 0; r < size - 1; r++) for (c = 0; c < size - 1; c++) {
      var v = g[r][c];
      if (v === g[r][c + 1] && v === g[r + 1][c] && v === g[r + 1][c + 1]) score += 3;
    }
    var pat1 = [1,0,1,1,1,0,1,0,0,0,0], pat2 = [0,0,0,0,1,0,1,1,1,0,1];
    function scan(get) {
      var s = 0;
      for (r = 0; r < size; r++) for (c = 0; c + 11 <= size; c++) {
        var a = true, b = true;
        for (i = 0; i < 11; i++) { var v2 = get(r, c + i); if (v2 !== pat1[i]) a = false; if (v2 !== pat2[i]) b = false; }
        if (a || b) s += 40;
      }
      return s;
    }
    score += scan(function (a, b) { return g[a][b]; });
    score += scan(function (a, b) { return g[b][a]; });
    var dark = 0;
    for (r = 0; r < size; r++) for (c = 0; c < size; c++) dark += g[r][c];
    var pct = Math.abs(dark * 100 / (size * size) - 50);
    score += Math.floor(pct / 5) * 10;
    return score;
  }

  function encode(text) {
    var bytes = utf8(text);
    var version = pickVersion(bytes.length);
    if (!version) throw new Error('too long for a QR code: ' + bytes.length + ' bytes');
    var size = 17 + 4 * version;
    var m = blank(size);
    placeFunctions(m, version);
    placeData(m, codewords(version, bytes));

    var best = null, bestScore = Infinity, mask;
    for (mask = 0; mask < 8; mask++) {
      var fn = maskFn(mask), g = [], r, c;
      for (r = 0; r < size; r++) {
        var row = new Int8Array(size);
        for (c = 0; c < size; c++) {
          var cell = m[r][c];
          row[c] = (cell & 2) ? ((cell & 1) ^ (fn(r, c) ? 1 : 0)) : (cell & 1);
        }
        g.push(row);
      }
      // The format strips go in before scoring, because a scanner reads them too.
      // Both copies, in the order the specification lays them out: down the left of the
      // top-right finder and along the top, then along the bottom-right and up the left.
      var bits = formatBits(mask);
      for (var i = 0; i < 15; i++) {
        var b = (bits >>> i) & 1;
        if (i < 6) g[i][8] = b;
        else if (i === 6) g[7][8] = b;
        else if (i === 7) g[8][8] = b;
        else if (i === 8) g[8][7] = b;
        else g[8][14 - i] = b;
        if (i < 8) g[8][size - 1 - i] = b;
        else g[size - 15 + i][8] = b;
      }
      g[size - 8][8] = 1;                           // the module that is always dark
      var s = penalty(g);
      if (s < bestScore) { bestScore = s; best = g; }
    }
    return { version: version, size: size, modules: best, bytes: bytes.length };
  }

  // Draw onto a canvas. Whole-pixel modules only, so the squares stay crisp and a camera is not
  // asked to read a blurred edge. A quiet zone of four modules is part of the format, not padding.
  function toCanvas(canvas, text, opts) {
    opts = opts || {};
    var q = opts.quiet == null ? 4 : opts.quiet;
    var qr = encode(text);
    var total = qr.size + q * 2;
    var scale = opts.scale || Math.max(2, Math.floor((opts.maxPixels || 320) / total));
    var px = total * scale;
    var ratio = (global.devicePixelRatio || 1);
    canvas.width = px * ratio; canvas.height = px * ratio;
    canvas.style.width = px + 'px'; canvas.style.height = px + 'px';
    var ctx = canvas.getContext('2d');
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.fillStyle = opts.light || '#ffffff';
    ctx.fillRect(0, 0, px, px);
    ctx.fillStyle = opts.dark || '#000000';
    for (var r = 0; r < qr.size; r++) for (var c = 0; c < qr.size; c++) {
      if (qr.modules[r][c]) ctx.fillRect((c + q) * scale, (r + q) * scale, scale, scale);
    }
    return qr;
  }

  // The self-check promised at the top: every row of the level-M table must account for exactly
  // the codewords that version holds. If one ever does not, say so in the console rather than
  // shipping a square that will not scan.
  (function () {
    for (var v = 1; v <= 40; v++) {
      var e = ECM[v];
      if (e[0] * (e[1] + e[3]) + e[1] * e[2] + e[3] * e[4] !== TOTAL[v]) {
        (global.console || {}).error && console.error('qr.js: the level-M table is wrong at version ' + v);
      }
    }
  })();

  global.OdysseyQR = { encode: encode, toCanvas: toCanvas, capacity: capacity };
})(typeof window !== 'undefined' ? window : this);

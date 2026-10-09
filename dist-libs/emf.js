function B0(t, e) {
  for (var n = 0; n < e.length; n++) {
    const s = e[n];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const o in s)
        if (o !== "default" && !(o in t)) {
          const r = Object.getOwnPropertyDescriptor(s, o);
          r && Object.defineProperty(t, o, r.get ? r : {
            enumerable: !0,
            get: () => s[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var wc = {}, dn = {};
function Ll(t, e, n) {
  const s = (o) => o.toString(16).padStart(2, "0");
  return `#${s(t & 255)}${s(e & 255)}${s(n & 255)}`;
}
function wt(t) {
  const e = (t >>> 24 & 255) / 255, n = t >>> 16 & 255, s = t >>> 8 & 255, o = t & 255;
  return `rgba(${n},${s},${o},${e.toFixed(3)})`;
}
function Fl(t, e, n) {
  const s = Math.min(1, Math.max(0, n)), o = (h, f) => Math.round(h + (f - h) * s), r = t >>> 24 & 255, i = e >>> 24 & 255, c = o(t >>> 16 & 255, e >>> 16 & 255), a = o(t >>> 8 & 255, e >>> 8 & 255), l = o(t & 255, e & 255), u = o(r, i) / 255;
  return `rgba(${c},${a},${l},${u.toFixed(3)})`;
}
function X0(t) {
  const e = /^#([0-9a-f]{6})$/i.exec(t);
  if (e)
    return `#${(16777215 ^ parseInt(e[1], 16)).toString(16).padStart(6, "0")}`;
  const n = /^#([0-9a-f]{3})$/i.exec(t);
  if (n) {
    const [o, r, i] = n[1].split("").map((a) => parseInt(a + a, 16)), c = (a) => (255 - a).toString(16).padStart(2, "0");
    return `#${c(o)}${c(r)}${c(i)}`;
  }
  const s = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)$/i.exec(t);
  if (s) {
    const o = 255 - Math.min(255, parseInt(s[1], 10)), r = 255 - Math.min(255, parseInt(s[2], 10)), i = 255 - Math.min(255, parseInt(s[3], 10));
    return s[4] !== void 0 ? `rgba(${o},${r},${i},${s[4]})` : `rgb(${o},${r},${i})`;
  }
  return t;
}
function Y0(t, e, n, s, o, r, i, c, a, l) {
  let u = 0, h = o - 1, f = e;
  const g = e + n;
  for (; f + 1 < g && h >= 0; ) {
    const p = t.getUint8(f), d = t.getUint8(f + 1);
    if (f += 2, p === 0)
      if (d === 0)
        u = 0, h--;
      else {
        if (d === 1)
          break;
        if (d === 2) {
          if (f + 1 >= g)
            break;
          u += t.getUint8(f), h -= t.getUint8(f + 1), f += 2;
        } else {
          const y = d;
          if (i) {
            const m = Math.ceil(y / 2);
            let M = 0;
            for (let b = 0; b < m && f < g; b++) {
              const w = t.getUint8(f++);
              for (let x = 0; x < 2 && M < y; x++) {
                const E = x === 0 ? w >> 4 & 15 : w & 15;
                E < c.length && u < s && l(
                  u,
                  o - 1 - h,
                  c[E][0],
                  c[E][1],
                  c[E][2],
                  255
                ), u++, M++;
              }
            }
            m & 1 && f++;
          } else {
            for (let m = 0; m < y && f < g && u < s; m++) {
              const M = t.getUint8(f++);
              M < c.length && l(
                u,
                o - 1 - h,
                c[M][0],
                c[M][1],
                c[M][2],
                255
              ), u++;
            }
            y & 1 && f++;
          }
        }
      }
    else if (i) {
      const y = d >> 4 & 15, m = d & 15;
      for (let M = 0; M < p && u < s; M++) {
        const b = M & 1 ? m : y;
        b < c.length && l(
          u,
          o - 1 - h,
          c[b][0],
          c[b][1],
          c[b][2],
          255
        ), u++;
      }
    } else {
      const y = d, m = y < c.length ? c[y] : [0, 0, 0];
      for (let M = 0; M < p && u < s; M++)
        l(u, o - 1 - h, m[0], m[1], m[2], 255), u++;
    }
  }
  return K(
    new Uint8ClampedArray(a.buffer, a.byteOffset, a.byteLength),
    s,
    o
  );
}
function rr(t) {
  if (t === 0)
    return 0;
  let e = 0, n = t;
  for (; !(n & 1); )
    n >>>= 1, e++;
  return e;
}
var z0 = 3;
function O0(t, e, n, s, o) {
  let r = 0, i = 0, c = 0, a = 0, l = 0, u = 0, h = 1, f = 1, g = 1;
  if (s === z0) {
    const p = e + n;
    if (p + 12 > t.byteLength)
      return null;
    r = t.getUint32(p, !0), i = t.getUint32(p + 4, !0), c = t.getUint32(p + 8, !0), a = rr(r), l = rr(i), u = rr(c), h = r >>> a || 1, f = i >>> l || 1, g = c >>> u || 1;
  } else o === 16 && (r = 31744, i = 992, c = 31, a = 10, l = 5, u = 0, h = 31, f = 31, g = 31);
  return { rMask: r, gMask: i, bMask: c, rShift: a, gShift: l, bShift: u, rMax: h, gMax: f, bMax: g };
}
function $0(t, e, n, s, o, r, i, c, a, l = !1) {
  const u = Math.floor((r * n + 31) / 32) * 4, { rMask: h, gMask: f, bMask: g, rShift: p, gShift: d, bShift: y, rMax: m, gMax: M, bMax: b } = c;
  for (let w = 0; w < s; w++) {
    const x = o ? w : s - 1 - w, E = e + x * u;
    if (!(E + u > t.byteLength))
      for (let T = 0; T < n; T++) {
        const v = (w * n + T) * 4;
        if (r === 1) {
          const I = E + (T >> 3), P = t.getUint8(I) >> 7 - (T & 7) & 1;
          P < i.length && (a[v] = i[P][0], a[v + 1] = i[P][1], a[v + 2] = i[P][2]), a[v + 3] = 255;
        } else if (r === 4) {
          const I = E + (T >> 1), P = T & 1 ? t.getUint8(I) & 15 : t.getUint8(I) >> 4 & 15;
          P < i.length && (a[v] = i[P][0], a[v + 1] = i[P][1], a[v + 2] = i[P][2]), a[v + 3] = 255;
        } else if (r === 8) {
          const I = t.getUint8(E + T);
          I < i.length && (a[v] = i[I][0], a[v + 1] = i[I][1], a[v + 2] = i[I][2]), a[v + 3] = 255;
        } else if (r === 16) {
          const I = t.getUint16(E + T * 2, !0);
          a[v] = Math.round(((I & h) >>> p) * 255 / m), a[v + 1] = Math.round(((I & f) >>> d) * 255 / M), a[v + 2] = Math.round(((I & g) >>> y) * 255 / b), a[v + 3] = 255;
        } else if (r === 24) {
          const I = E + T * 3;
          a[v] = t.getUint8(I + 2), a[v + 1] = t.getUint8(I + 1), a[v + 2] = t.getUint8(I), a[v + 3] = 255;
        } else {
          const I = E + T * 4, P = t.getUint8(I), S = t.getUint8(I + 1), R = t.getUint8(I + 2), U = t.getUint8(I + 3);
          a[v] = R, a[v + 1] = S, a[v + 2] = P, a[v + 3] = U === 0 && !l ? 255 : U;
        }
      }
  }
}
function Xe(t, e, n, s, o, r = !1) {
  if (e < 0 || n < 0 || e + 40 > t.byteLength || n + s > t.byteLength)
    return null;
  const i = t.getUint32(e, !0);
  if (i < 40 || e + i > t.byteLength)
    return null;
  const c = t.getInt32(e + 4, !0), a = t.getInt32(e + 8, !0), l = t.getUint16(e + 12, !0), u = t.getUint16(e + 14, !0), h = t.getUint32(e + 16, !0);
  if (l !== 1 || c <= 0 || a === 0 || c > 8192 || Math.abs(a) > 8192)
    return null;
  const f = 0, g = 1, p = 2, d = 3;
  if (u !== 1 && u !== 4 && u !== 8 && u !== 16 && u !== 24 && u !== 32 || h === g && u !== 8 || h === p && u !== 4 || h === d && u !== 16 && u !== 32 || h !== f && h !== g && h !== p && h !== d)
    return null;
  const y = Math.abs(a), m = a < 0, M = [];
  if (u <= 8) {
    const x = 1 << u, E = t.getUint32(e + 32, !0) || x, T = Math.min(E, x), v = e + i, I = !!o && o.length > 0;
    if (v + T * (I ? 2 : 4) > t.byteLength)
      return null;
    for (let P = 0; P < T; P++) {
      if (I) {
        const A = t.getUint16(v + P * 2, !0), k = o[A < o.length ? A : 0];
        M.push([k >> 16 & 255, k >> 8 & 255, k & 255]);
        continue;
      }
      const S = t.getUint8(v + P * 4), R = t.getUint8(v + P * 4 + 1), U = t.getUint8(v + P * 4 + 2);
      M.push([U, R, S]);
    }
  }
  const b = O0(t, e, i, h, u);
  if (!b)
    return null;
  const w = new Uint8ClampedArray(c * y * 4);
  return h === g || h === p ? Y0(
    t,
    n,
    s,
    c,
    y,
    m,
    h === p,
    M,
    w,
    (E, T, v, I, P, S) => {
      const R = (T * c + E) * 4;
      w[R] = v, w[R + 1] = I, w[R + 2] = P, w[R + 3] = S;
    }
  ) : ($0(
    t,
    n,
    c,
    y,
    m,
    u,
    M,
    b,
    w,
    r
  ), K(w, c, y));
}
var xc = [
  [0, 0, 0, 255, 0, 0, 0, 0],
  // HS_HORIZONTAL
  [8, 8, 8, 8, 8, 8, 8, 8],
  // HS_VERTICAL
  [128, 64, 32, 16, 8, 4, 2, 1],
  // HS_FDIAGONAL
  [1, 2, 4, 8, 16, 32, 64, 128],
  // HS_BDIAGONAL
  [8, 8, 8, 255, 8, 8, 8, 8],
  // HS_CROSS
  [129, 66, 36, 24, 24, 36, 66, 129]
  // HS_DIAGCROSS
];
function ro(t, e, n) {
  return ((xc[t] ?? xc[0])[n & 7] >> 7 - (e & 7) & 1) === 1;
}
function As(t) {
  const e = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i.exec(t.trim());
  if (!e)
    return 0;
  const n = e[1].length === 3 ? e[1].replace(/./g, (s) => s + s) : e[1];
  return parseInt(n, 16);
}
function Dl(t, e, n) {
  if (e + 16 > t.byteLength)
    return null;
  const s = t.getInt32(e + 4, !0), o = t.getInt32(e + 8, !0), r = t.getUint16(e + 14, !0), i = Math.abs(o);
  if (r !== 1 || s <= 0 || i === 0 || s > 256 || i > 256)
    return null;
  const c = (s + 31 >> 5) * 4;
  if (n + c * i > t.byteLength)
    return null;
  const a = new Uint8Array(s * i);
  for (let l = 0; l < i; l++) {
    const u = o > 0 ? i - 1 - l : l, h = n + l * c;
    for (let f = 0; f < s; f++)
      a[u * s + f] = t.getUint8(h + (f >> 3)) >> 7 - (f & 7) & 1;
  }
  return { width: s, height: i, bits: a };
}
function C0(t, e, n, s, o = null) {
  if (n + 24 > t.byteLength)
    return null;
  const r = t.getUint32(n + 8, !0), i = t.getUint32(n + 16, !0), c = t.getUint32(n + 20, !0), a = e + r, l = e + i, u = a + 16 <= t.byteLength ? t.getUint16(a + 14, !0) : 0;
  if (s || u === 1) {
    const p = Dl(t, a, l);
    if (p && s)
      return { kind: "mono", ...p };
  }
  const h = Xe(t, a, l, c, o);
  if (!h)
    return null;
  const f = new Uint32Array(h.width * h.height), g = h.data;
  for (let p = 0; p < f.length; p++)
    f[p] = g[p * 4] << 16 | g[p * 4 + 1] << 8 | g[p * 4 + 2];
  return { kind: "bitmap", width: h.width, height: h.height, rgb: f };
}
function Gt(t) {
  if (t.brushStyle === 1)
    return { kind: "none" };
  const e = t.brushPattern;
  if (!e)
    return { kind: "solid", rgb: As(t.brushColor) };
  if (e.kind === "bitmap")
    return { kind: "tile", width: e.width, height: e.height, rgb: e.rgb };
  const n = As(t.bkColor);
  if (e.kind === "hatch") {
    const r = As(t.brushColor), i = new Uint32Array(64);
    for (let c = 0; c < 8; c++)
      for (let a = 0; a < 8; a++)
        i[c * 8 + a] = ro(e.hatch, a, c) ? r : n;
    return { kind: "tile", width: 8, height: 8, rgb: i };
  }
  const s = As(t.textColor), o = new Uint32Array(e.width * e.height);
  for (let r = 0; r < o.length; r++)
    o[r] = e.bits[r] ? n : s;
  return { kind: "tile", width: e.width, height: e.height, rgb: o };
}
function Ro(t, e, n, s, o) {
  const r = ((e - s) % t.width + t.width) % t.width, i = ((n - o) % t.height + t.height) % t.height;
  return t.rgb[i * t.width + r];
}
function H0(t) {
  const e = [];
  let n = 0;
  for (let s = 0; s < t.length; s++)
    e.push(n), n += t[s];
  return e;
}
function G0(t) {
  let e = 0;
  for (const n of t)
    e += n;
  return e;
}
function j0(t, e) {
  return e === "center" ? -t / 2 : e === "right" ? -t : 0;
}
var W0 = Math.PI / 180;
function V0(t) {
  return -(t / 10) * W0;
}
var q0 = 1.15;
function J0(t) {
  return t === 0 ? 0 : t < 0 ? -t : t / q0;
}
var Ti = 1, _l = 2, Nl = 3, K0 = 4, Yr = 5, Bl = 6, Z0 = 7, Q0 = 8, t1 = 9, e1 = 10, n1 = 11, s1 = 12, o1 = 13, Ec = 93, r1 = 94, Xl = 77, Yl = 14, i1 = 15, c1 = 17, zl = 18, Ol = 19, $l = 20, Cl = 21, a1 = 1, Hl = 2, Gl = 3, l1 = 4, jl = 5, u1 = 6, Wl = 7, Vl = 8, ql = 9, Jl = 10, h1 = 11, Kl = 12, Zl = 14, Ql = 15, f1 = 16, io = 8192, tu = 2e5, eu = 5e5, nu = 22, g1 = 24, p1 = 25, d1 = 26, su = 27, y1 = 28, m1 = 29, M1 = 30, b1 = 31, w1 = 32, ou = 33, ru = 34, x1 = 35, E1 = 36, v1 = 37, T1 = 38, I1 = 39, P1 = 40, S1 = 42, R1 = 43, A1 = 44, U1 = 45, zr = 46, Vs = 47, iu = 54, cu = 55, k1 = 57, L1 = 58, F1 = 59, D1 = 60, _1 = 61, N1 = 62, B1 = 63, X1 = 64, Y1 = 67, au = 70, z1 = 75, lu = 76, uu = 81, O1 = 82, hu = 84, fu = 85, Ii = 86, gu = 87, Or = 88, pu = 89, du = 91, $1 = 95, C1 = 98, H1 = 115, G1 = 16, j1 = 23, W1 = 41, V1 = 48, q1 = 49, J1 = 50, K1 = 51, Z1 = 52, Q1 = 53, t2 = 56, e2 = 65, n2 = 66, s2 = 68, o2 = 71, r2 = 72, vc = 73, i2 = 74, c2 = 78, a2 = 79, l2 = 80, u2 = 90, h2 = 92, f2 = 99, g2 = 100, p2 = 101, d2 = 102, y2 = 103, m2 = 104, M2 = 105, b2 = 106, w2 = 109, x2 = 110, E2 = 111, v2 = 112, T2 = 113, I2 = 114, P2 = 116, S2 = 118, R2 = 119, A2 = 120, U2 = 121, k2 = 122, L2 = 15, us = 2147483648, yu = 726027589, F2 = 1128875079, D2 = 16385, Tc = 16386, _2 = 16388, N2 = 16393, mu = 16392, B2 = 16394, X2 = 16395, Y2 = 16396, z2 = 16397, O2 = 16398, $2 = 16399, Ic = 16400, Pc = 16401, C2 = 16402, H2 = 16404, G2 = 16405, j2 = 16410, W2 = 16411, V2 = 16412, q2 = 16414, J2 = 16415, K2 = 16417, Z2 = 16418, Q2 = 16420, tg = 16421, eg = 16422, ng = 16424, sg = 16425, og = 16426, rg = 16427, ig = 16428, cg = 16429, ag = 16430, lg = 16431, ug = 16432, hg = 16433, fg = 16434, gg = 16435, pg = 16436, dg = 16438, yg = 16437, mg = 16406, Mg = 16407, bg = 16408, wg = 16409, xg = 16423, Eg = 16389, vg = 16390, Tg = 16391, Ig = 16403, Pg = 16413, Sg = 16416, Rg = 16419, Ag = 16439, Ug = 16441, kg = 16442, Mu = 1, $r = 2, Lg = 3, Fg = 4, bu = 5, Dg = 6, _g = 7, Ng = 8, Bg = 0, Xg = 1, wu = 2, Yg = 3, zg = 4, Og = 0, $g = 513, Cg = 258, Hg = 260, Gg = 262, jg = 521, Wg = 302, Vg = 523, qg = 524, Jg = 532, Kg = 531, Zg = 1051, Qg = 1564, tp = 1048, Sc = 2071, ep = 2074, Rc = 2096, Ac = 804, np = 805, sp = 301, op = 496, rp = 762, ip = 764, cp = 763, ap = 1313, lp = 1565, up = 2610, hp = 30, fp = 295, gp = 1336, pp = 53, dp = 55, yp = 259, mp = 261, Mp = 263, bp = 264, wp = 313, xp = 322, Ep = 329, vp = 522, Tp = 525, Ip = 526, Pp = 527, Sp = 529, Rp = 544, Ap = 552, Up = 561, kp = 564, Lp = 1040, Fp = 1042, Dp = 1045, _p = 1046, Np = 1049, Bp = 1055, Xp = 1065, Yp = 1078, zp = 1352, xu = 1574, Op = 298, $p = 299, Cp = 300, Hp = 2338, Uc = 2851, Gp = 2368, kc = 2881, jp = 3907, Wp = 3379, Vp = 247, qp = 248, Jp = 505, Kp = 765, Zp = 1790, Qp = 1791, X = (...t) => {
}, H = (...t) => {
}, td = [137, 80, 78, 71, 13, 10, 26, 10];
function Eu(t) {
  return t.length >= 8 && td.every((e, n) => t[n] === e);
}
async function ed(t) {
  if (typeof DecompressionStream == "function" && typeof Response == "function")
    try {
      const e = new Blob([t]).stream().pipeThrough(new DecompressionStream("deflate"));
      return new Uint8Array(await new Response(e).arrayBuffer());
    } catch {
    }
  return cd(t);
}
var nd = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], sd = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], od = [
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577
], rd = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], id = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
function Dn(t, e) {
  const n = new Uint16Array(16);
  for (let r = 0; r < e; r++)
    n[t[r]]++;
  n[0] = 0;
  const s = new Uint16Array(16);
  for (let r = 1; r < 16; r++)
    s[r] = s[r - 1] + n[r - 1];
  const o = new Uint16Array(e);
  for (let r = 0; r < e; r++)
    t[r] && (o[s[t[r]]++] = r);
  return { counts: n, symbols: o };
}
function cd(t) {
  let e = 2, n = 0, s = 0, o = new Uint8Array(Math.max(1024, t.length * 4)), r = 0;
  const i = (f) => {
    if (r + f > o.length) {
      const g = new Uint8Array(Math.max(o.length * 2, r + f));
      g.set(o.subarray(0, r)), o = g;
    }
  }, c = (f) => {
    for (; s < f; ) {
      if (e >= t.length)
        throw new Error("inflate: unexpected end of data");
      n |= t[e++] << s, s += 8;
    }
    const g = n & (1 << f) - 1;
    return n >>>= f, s -= f, g;
  }, a = (f) => {
    let g = 0, p = 0, d = 0;
    for (let y = 1; y < 16; y++) {
      g |= c(1);
      const m = f.counts[y];
      if (g - m < p)
        return f.symbols[d + (g - p)];
      d += m, p = p + m << 1, g <<= 1;
    }
    throw new Error("inflate: bad Huffman code");
  };
  let l = null, u = null, h = 0;
  for (; !h; ) {
    h = c(1);
    const f = c(2);
    if (f === 0) {
      n = 0, s = 0;
      const d = t[e] | t[e + 1] << 8;
      e += 4, i(d), o.set(t.subarray(e, e + d), r), r += d, e += d;
      continue;
    }
    let g, p;
    if (f === 1) {
      if (!l || !u) {
        const d = new Uint8Array(288);
        d.fill(8, 0, 144), d.fill(9, 144, 256), d.fill(7, 256, 280), d.fill(8, 280, 288), l = Dn(d, 288), u = Dn(new Uint8Array(30).fill(5), 30);
      }
      g = l, p = u;
    } else if (f === 2) {
      const d = c(5) + 257, y = c(5) + 1, m = c(4) + 4, M = new Uint8Array(19);
      for (let x = 0; x < m; x++)
        M[id[x]] = c(3);
      const b = Dn(M, 19), w = new Uint8Array(d + y);
      for (let x = 0; x < d + y; ) {
        const E = a(b);
        if (E < 16)
          w[x++] = E;
        else if (E === 16) {
          const T = w[x - 1];
          for (let v = 3 + c(2); v > 0; v--)
            w[x++] = T;
        } else E === 17 ? x += 3 + c(3) : x += 11 + c(7);
      }
      g = Dn(w.subarray(0, d), d), p = Dn(w.subarray(d), y);
    } else
      throw new Error("inflate: invalid block type");
    for (; ; ) {
      const d = a(g);
      if (d < 256)
        i(1), o[r++] = d;
      else {
        if (d === 256)
          break;
        {
          const y = d - 257, m = nd[y] + c(sd[y]), M = a(p), b = od[M] + c(rd[M]);
          i(m);
          for (let w = 0; w < m; w++)
            o[r] = o[r - b], r++;
        }
      }
    }
  }
  return o.subarray(0, r);
}
var ad = [
  [0, 0, 8, 8],
  [4, 0, 8, 8],
  [0, 4, 4, 8],
  [2, 0, 4, 4],
  [0, 2, 2, 4],
  [1, 0, 2, 2],
  [0, 1, 1, 2]
];
function ld(t, e, n) {
  const s = t + e - n, o = Math.abs(s - t), r = Math.abs(s - e), i = Math.abs(s - n);
  return o <= r && o <= i ? t : r <= i ? e : n;
}
function ud(t, e, n, s, o) {
  let r = -1;
  for (let i = 0; i < s; i++) {
    const c = t[e], a = e + 1;
    for (let l = 0; l < n; l++) {
      const u = l >= o ? t[a + l - o] : 0, h = r >= 0 ? t[r + l] : 0, f = r >= 0 && l >= o ? t[r + l - o] : 0;
      let g = t[a + l];
      switch (c) {
        case 1:
          g += u;
          break;
        case 2:
          g += h;
          break;
        case 3:
          g += u + h >> 1;
          break;
        case 4:
          g += ld(u, h, f);
          break;
      }
      t[a + l] = g & 255;
    }
    r = a, e = a + n;
  }
  return e;
}
async function hd(t) {
  if (!Eu(t))
    return null;
  const e = new DataView(t.buffer, t.byteOffset, t.byteLength);
  let n = 0, s = 0, o = 0, r = -1, i = 0, c = null, a = null;
  const l = [];
  let u = 0;
  for (let S = 8; S + 12 <= t.length; ) {
    const R = e.getUint32(S), U = String.fromCharCode(t[S + 4], t[S + 5], t[S + 6], t[S + 7]), A = t.subarray(S + 8, Math.min(t.length, S + 8 + R));
    if (U === "IHDR" && A.length >= 13)
      n = e.getUint32(S + 8), s = e.getUint32(S + 12), o = A[8], r = A[9], i = A[12];
    else if (U === "PLTE")
      c = A;
    else if (U === "tRNS")
      a = A;
    else if (U === "IDAT")
      l.push(A), u += A.length;
    else if (U === "IEND")
      break;
    S += 12 + R;
  }
  const h = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[r], f = r === 0 ? [1, 2, 4, 8, 16].includes(o) : r === 3 ? [1, 2, 4, 8].includes(o) : [8, 16].includes(o);
  if (!h || !f || n <= 0 || s <= 0 || u === 0 || r === 3 && !c || n * s > 268435456)
    return null;
  const g = new Uint8Array(u);
  let p = 0;
  for (const S of l)
    g.set(S, p), p += S.length;
  let d;
  try {
    d = await ed(g);
  } catch {
    return null;
  }
  const y = h * o, m = Math.max(1, y >> 3), M = new Uint8ClampedArray(n * s * 4), b = (1 << o) - 1, w = a && r === 0 && a.length >= 2 ? a[0] << 8 | a[1] : -1, x = a && r === 2 && a.length >= 6 ? [a[0] << 8 | a[1], a[2] << 8 | a[3], a[4] << 8 | a[5]] : null, E = (S, R) => {
    if (o === 8)
      return d[S + R];
    if (o === 16)
      return d[S + R * 2] << 8 | d[S + R * 2 + 1];
    const U = R * o;
    return d[S + (U >> 3)] >> 8 - o - (U & 7) & b;
  }, T = (S) => o === 16 ? S >> 8 : o === 8 ? S : Math.round(S * 255 / b), v = (S, R, U, A, k) => {
    for (let L = 0; L < R; L++) {
      const D = (U * n + A + L * k) * 4;
      if (r === 3) {
        const N = E(S, L);
        M[D] = c[N * 3] ?? 0, M[D + 1] = c[N * 3 + 1] ?? 0, M[D + 2] = c[N * 3 + 2] ?? 0, M[D + 3] = a && N < a.length ? a[N] : 255;
      } else if (r === 0 || r === 4) {
        const N = E(S, L * h), B = T(N);
        M[D] = B, M[D + 1] = B, M[D + 2] = B, M[D + 3] = r === 4 ? T(E(S, L * h + 1)) : N === w ? 0 : 255;
      } else {
        const N = E(S, L * h), B = E(S, L * h + 1), G = E(S, L * h + 2);
        M[D] = T(N), M[D + 1] = T(B), M[D + 2] = T(G), M[D + 3] = r === 6 ? T(E(S, L * h + 3)) : x && N === x[0] && B === x[1] && G === x[2] ? 0 : 255;
      }
    }
  };
  let I = 0;
  const P = i === 1 ? ad : [[0, 0, 1, 1]];
  for (const [S, R, U, A] of P) {
    const k = Math.ceil((n - S) / U), L = Math.ceil((s - R) / A);
    if (k <= 0 || L <= 0)
      continue;
    const D = Math.ceil(k * y / 8);
    if (I + L * (D + 1) > d.length)
      return null;
    const N = I;
    I = ud(d, I, D, L, m);
    for (let B = 0; B < L; B++)
      v(N + B * (D + 1) + 1, k, R + B * A, S, U);
  }
  return { width: n, height: s, data: M };
}
var Us = null;
function fd(t, e, n) {
  if (!Us) {
    Us = new Uint32Array(256);
    for (let o = 0; o < 256; o++) {
      let r = o;
      for (let i = 0; i < 8; i++)
        r = r & 1 ? 3988292384 ^ r >>> 1 : r >>> 1;
      Us[o] = r >>> 0;
    }
  }
  let s = 4294967295;
  for (let o = e; o < n; o++)
    s = Us[(s ^ t[o]) & 255] ^ s >>> 8;
  return (s ^ 4294967295) >>> 0;
}
function gd(t) {
  let e = 1, n = 0;
  for (let s = 0; s < t.length; ) {
    const o = Math.min(t.length, s + 5552);
    for (; s < o; s++)
      e += t[s], n += e;
    e %= 65521, n %= 65521;
  }
  return (n << 16 | e) >>> 0;
}
function pd(t) {
  const e = Math.max(1, Math.ceil(t.length / 65535)), n = new Uint8Array(2 + t.length + e * 5 + 4);
  n[0] = 120, n[1] = 1;
  let s = 2;
  for (let r = 0; r < e; r++) {
    const i = r * 65535, c = Math.min(65535, t.length - i);
    n[s++] = r === e - 1 ? 1 : 0, n[s++] = c & 255, n[s++] = c >>> 8, n[s++] = ~c & 255, n[s++] = ~c >>> 8 & 255, n.set(t.subarray(i, i + c), s), s += c;
  }
  const o = gd(t);
  return n[s++] = o >>> 24, n[s++] = o >>> 16 & 255, n[s++] = o >>> 8 & 255, n[s++] = o & 255, n;
}
async function dd(t) {
  if (typeof CompressionStream == "function" && typeof Response == "function")
    try {
      const e = new Blob([t]).stream().pipeThrough(new CompressionStream("deflate"));
      return new Uint8Array(await new Response(e).arrayBuffer());
    } catch {
    }
  return pd(t);
}
function yd(t, e, n) {
  const s = t + e - n, o = Math.abs(s - t), r = Math.abs(s - e), i = Math.abs(s - n);
  return o <= r && o <= i ? t : r <= i ? e : n;
}
function Lc(t, e) {
  let n = 0;
  for (let s = 0; s < e; s++) {
    const o = t[s];
    n += o < 128 ? o : 256 - o;
  }
  return n;
}
function md(t, e, n) {
  const s = t instanceof Uint8Array || t instanceof Uint8ClampedArray ? new Uint8Array(t.buffer, t.byteOffset, t.length) : Uint8Array.from(t), o = e * 4, r = s.byteOffset % 4 === 0 ? new Uint32Array(s.buffer, s.byteOffset, e * n) : null, i = new Uint8Array((o + 1) * n), c = new Uint8Array(o), a = new Uint8Array(o), l = new Uint8Array(o);
  for (let u = 0; u < n; u++) {
    const h = u * o, f = h - o, g = u * (o + 1);
    if (r && u > 0) {
      const x = h >> 2, E = f >> 2;
      let T = !0;
      for (let v = 0; v < e; v++)
        if (r[x + v] !== r[E + v]) {
          T = !1;
          break;
        }
      if (T) {
        i[g] = 2;
        continue;
      }
    }
    const p = s.subarray(h, h + o), d = Lc(p, o);
    if (d === 0) {
      i.set(p, g + 1);
      continue;
    }
    let y = 0, m = 0;
    for (let x = 0; x < 4 && x < o; x++) {
      const E = s[h + x];
      c[x] = E, y += E < 128 ? E : 256 - E;
    }
    for (let x = 4; x < o; x++) {
      const E = s[h + x] - s[h + x - 4] & 255;
      c[x] = E, y += E < 128 ? E : 256 - E;
    }
    if (u > 0)
      for (let x = 0; x < o; x++) {
        const E = s[h + x] - s[f + x] & 255;
        a[x] = E, m += E < 128 ? E : 256 - E;
      }
    else
      a.set(p), m = d;
    let M = p, b = 0, w = d;
    if (y < w && (w = y, M = c, b = 1), m < w && (w = m, M = a, b = 2), u > 0 && w > o >> 3) {
      for (let E = 0; E < o; E++) {
        const T = E >= 4 ? s[h + E - 4] : 0, v = s[f + E], I = E >= 4 ? s[f + E - 4] : 0;
        l[E] = s[h + E] - yd(T, v, I) & 255;
      }
      Lc(l, o) < w && (M = l, b = 4);
    }
    i[g] = b, i.set(M, g + 1);
  }
  return i;
}
function ir(t, e) {
  const n = new Uint8Array(12 + e.length), s = new DataView(n.buffer);
  s.setUint32(0, e.length);
  for (let o = 0; o < 4; o++)
    n[4 + o] = t.charCodeAt(o);
  return n.set(e, 8), s.setUint32(8 + e.length, fd(n, 4, 8 + e.length)), n;
}
async function vu(t, e, n) {
  const s = new Uint8Array(13), o = new DataView(s.buffer);
  o.setUint32(0, e), o.setUint32(4, n), s[8] = 8, s[9] = 6;
  const r = await dd(md(t, e, n)), i = [
    Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10),
    ir("IHDR", s),
    ir("IDAT", r),
    ir("IEND", new Uint8Array(0))
  ], c = i.reduce((u, h) => u + h.length, 0), a = new Uint8Array(c);
  let l = 0;
  for (const u of i)
    a.set(u, l), l += u.length;
  return a;
}
var Ct = class {
  constructor() {
    this.data = new Int32Array(96), this.length = 0;
  }
  /** Appends the span `x0 <= x < x1` on row `y` (ignored when empty). */
  add(t, e, n) {
    if (n <= e)
      return;
    const s = this.length * 3;
    if (s > 0 && this.data[s - 3] === t && this.data[s - 1] === e) {
      this.data[s - 1] = n;
      return;
    }
    if (s + 3 > this.data.length) {
      const o = new Int32Array(this.data.length * 2);
      o.set(this.data), this.data = o;
    }
    this.data[s] = t, this.data[s + 1] = e, this.data[s + 2] = n, this.length++;
  }
  /** Appends every span of `other`. */
  append(t) {
    for (let e = 0; e < t.length * 3; e += 3)
      this.add(t.data[e], t.data[e + 1], t.data[e + 2]);
  }
  /** The bounding box of all spans, or `null` when empty. `x1`/`y1` exclusive. */
  bounds() {
    if (this.length === 0)
      return null;
    let t = 1 / 0, e = 1 / 0, n = -1 / 0, s = -1 / 0;
    const o = this.data;
    for (let r = 0; r < this.length * 3; r += 3)
      o[r] < e && (e = o[r]), o[r] + 1 > s && (s = o[r] + 1), o[r + 1] < t && (t = o[r + 1]), o[r + 2] > n && (n = o[r + 2]);
    return { x0: t, y0: e, x1: n, y1: s };
  }
};
function Fc(t, e) {
  return Math.floor(t / e);
}
function ss(t, e) {
  return -Math.floor(-t / e);
}
function Ao(t, e, n = new Ct(), s = -1 / 0, o = 1 / 0) {
  const r = [];
  let i = 1 / 0, c = -1 / 0;
  for (const p of t) {
    const d = p.length >> 1;
    if (!(d < 2))
      for (let y = 0; y < d; y++) {
        const m = y + 1 === d ? 0 : y + 1, M = p[y * 2], b = p[y * 2 + 1], w = p[m * 2], x = p[m * 2 + 1];
        if (b === x)
          continue;
        const E = x > b ? 1 : -1, T = E > 0 ? M : w, v = E > 0 ? b : x, I = E > 0 ? w : M, P = E > 0 ? x : b, S = ss(v, 16), R = ss(P, 16);
        R <= S || (r.push([S, R, T, v, I - T, P - v, E]), S < i && (i = S), R > c && (c = R));
      }
  }
  if (r.length === 0)
    return n;
  r.sort((p, d) => p[0] - d[0]);
  const a = Math.max(i, Math.ceil(s)), l = Math.min(c, Math.floor(o)), u = [];
  let h = 0;
  const f = [], g = [];
  for (; h < r.length && r[h][1] <= a; )
    h++;
  for (let p = a; p < l; p++) {
    for (; h < r.length && r[h][0] <= p; )
      r[h][1] > p && u.push(r[h]), h++;
    for (let m = u.length - 1; m >= 0; m--)
      (u[m][1] <= p || u[m][0] > p) && u[m][1] <= p && u.splice(m, 1);
    f.length = 0, g.length = 0;
    const d = p * 16;
    for (const m of u) {
      if (m[0] > p)
        continue;
      const M = m[2] * m[5] + (d - m[3]) * m[4];
      f.push(ss(M, m[5] * 16)), g.push(m[6]);
    }
    const y = f.length;
    if (!(y < 2)) {
      for (let m = 1; m < y; m++) {
        const M = f[m], b = g[m];
        let w = m - 1;
        for (; w >= 0 && f[w] > M; )
          f[w + 1] = f[w], g[w + 1] = g[w], w--;
        f[w + 1] = M, g[w + 1] = b;
      }
      if (e) {
        let m = 0, M = 0;
        for (let b = 0; b < y; b++) {
          const w = m;
          m += g[b], w === 0 && m !== 0 ? M = f[b] : w !== 0 && m === 0 && n.add(p, M, f[b]);
        }
      } else
        for (let m = 0; m + 1 < y; m += 2)
          n.add(p, f[m], f[m + 1]);
    }
  }
  return n;
}
function Md(t, e) {
  return Math.abs(t) !== Math.abs(e) ? 10 : e > 0 ? 2 : t > 0 ? 136 : 68;
}
function Dc(t, e, n, s) {
  const o = Math.abs(t) + Math.abs(e), r = 8 * n;
  if (o < r)
    return !0;
  if (o > r)
    return !1;
  let i;
  return t === 0 ? i = e < 0 ? 1 : 2 : e === 0 ? i = t < 0 ? 4 : 8 : t < 0 ? i = e < 0 ? 16 : 64 : i = e < 0 ? 32 : 128, (s & i) !== 0;
}
function Cr(t, e, n, s, o) {
  const r = n - t, i = s - e;
  if (r === 0 && i === 0)
    return;
  const c = Md(r, i), a = Math.abs(r) >= Math.abs(i), l = a ? t : e, u = a ? e : t, h = a ? n : s, f = a ? s : n, g = h > l ? 1 : -1, p = Math.abs(h - l), d = (f - u) * g, y = Math.abs(r) === Math.abs(i), m = Math.min(l, h), M = Math.max(l, h), b = (E, T, v) => a ? Dc(E, T, v, c) : Dc(T, E, v, c), w = g > 0 ? Fc(m, 16) - 1 : ss(M, 16) + 1, x = g > 0 ? ss(M, 16) + 1 : Fc(m, 16) - 1;
  for (let E = w; g > 0 ? E <= x : E >= x; E += g) {
    const T = E * 16, v = u * p + (T - l) * d, I = v / p / 16, P = Math.round(I);
    for (let S = P - 1; S <= P + 1; S++) {
      const R = S * 16, U = v - R * p, A = m - T, k = M - T;
      let L;
      if (y) {
        const D = d / p, N = U / p, B = Math.max(A, Math.min(0, k)), G = Math.max(A, Math.min(-N / D, k));
        L = b(2 * B, 2 * (N + D * B), 2) || b(2 * G, 2 * (N + D * G), 2) || b(B + G, 2 * N + D * (B + G), 2);
      } else {
        const D = Math.max(A, Math.min(0, k));
        L = b(D * p, U + D * d, p);
      }
      L && (b(h - T, f - R, 1) || (a ? o(E, S) : o(S, E)));
    }
  }
}
var _c = 10, cr = 3, Tu = 6 * 10912, bd = Tu * 8;
function se(t, e) {
  return Math.floor(t / 2 ** e);
}
var Nc = class {
  constructor(t, e, n, s) {
    const o = 2 ** _c;
    this.e0 = t * o, this.e1 = (s - t) * o, this.e2 = 6 * (e - n - n + s) * o, this.e3 = 6 * (t - e - e + n) * o;
  }
  lazyHalve(t) {
    this.e2 = se(this.e2 + this.e3, 1), this.e1 = se(this.e1 - se(this.e2, t), 1);
  }
  steadyState(t) {
    const e = 2 ** cr;
    this.e0 *= e, this.e1 *= e;
    const n = t - cr;
    n < 0 ? (this.e2 *= 2 ** -n, this.e3 *= 2 ** -n) : (this.e2 = se(this.e2, n), this.e3 = se(this.e3, n));
  }
  halve() {
    this.e2 = se(this.e2 + this.e3, 3), this.e1 = se(this.e1 - this.e2, 1), this.e3 = se(this.e3, 2);
  }
  double() {
    this.e1 += this.e1 + this.e2, this.e3 *= 4, this.e2 = this.e2 * 8 - this.e3;
  }
  step() {
    this.e0 += this.e1;
    const t = this.e2;
    this.e1 += t, this.e2 += t - this.e3, this.e3 = t;
  }
  error() {
    return Math.max(Math.abs(this.e2), Math.abs(this.e3));
  }
  parentErrorDividedBy4() {
    return Math.max(Math.abs(this.e3), Math.abs(this.e2 + this.e2 - this.e3));
  }
  value() {
    const t = _c + cr;
    return se(this.e0 + 2 ** (t - 1), t);
  }
};
function Pi(t, e, n, s, o, r, i, c, a, l = 1) {
  const u = Tu * l, h = bd * l, f = new Nc(t, n, o, i), g = new Nc(e, s, r, c);
  let p = 1, d = 0;
  for (; d < 40 && (f.error() > u * 2 ** d || g.error() > u * 2 ** d); )
    d += 2, f.lazyHalve(d), g.lazyHalve(d), p *= 2;
  f.steadyState(d), g.steadyState(d);
  for (let y = 0; p > 0 && y < 1 << 20; y++) {
    for (Math.max(f.error(), g.error()) > h && (f.halve(), g.halve(), p *= 2); p % 2 === 0 && f.parentErrorDividedBy4() <= h / 4 && g.parentErrorDividedBy4() <= h / 4; )
      f.double(), g.double(), p /= 2;
    p--, f.step(), g.step(), a.push(f.value(), g.value());
  }
}
var Be = 0.5522847498307936;
function Iu(t, e, n, s) {
  return { ax: t, ay: e, exx: n - t, exy: 0, eyx: 0, eyy: s - e };
}
function Pu(t) {
  const e = (w, x) => x ? Math.ceil(w / 2) : Math.floor(w / 2), n = (w) => e(w, !1), s = (w) => e(w, !0), o = (w) => Math.floor(w / 2) + Math.ceil(Be * Math.ceil(w / 2)), r = (w) => Math.ceil(w / 2) - Math.ceil(Be * Math.ceil(w / 2)), i = (w) => e(w, !1), c = (w) => e(w, !0), a = (w) => Math.floor(w / 2) - Math.floor(Be * Math.floor(w / 2)), l = (w) => w - a(w), u = () => 0, h = (w) => w, { ax: f, ay: g, exx: p, exy: d, eyx: y, eyy: m } = t, M = [], b = (w, x) => {
    M.push(f + w(p) + x(y), g + w(d) + x(m));
  };
  return b(h, c), b(h, a), b(o, u), b(n, u), b(r, u), b(u, a), b(u, i), b(u, l), b(r, h), b(s, h), b(o, h), b(h, l), b(h, c), M;
}
function Si(t, e, n, s) {
  return Pu(Iu(t, e, n, s));
}
function wd(t) {
  const e = [t[0], t[1]];
  for (let n = 2; n + 5 < t.length; n += 6)
    Pi(t[n - 2], t[n - 1], t[n], t[n + 1], t[n + 2], t[n + 3], t[n + 4], t[n + 5], e);
  return e;
}
function xd(t, e, n, s, o, r) {
  const i = n - t, c = s - e, a = Math.min(Math.abs(o), i), l = Math.min(Math.abs(r), c), u = Math.floor(c / 2) - Math.floor((c - l) / 2), h = Math.floor(n - a / 2), f = n - h, g = [n, e + u, n, e + u - Math.floor(Be * u), n - f + Math.ceil(Be * f), e, h, e], p = (y) => t + n - y, d = (y) => e + s - y;
  return [
    // top right: right edge -> top edge
    g[0],
    g[1],
    g[2],
    g[3],
    g[4],
    g[5],
    g[6],
    g[7],
    // top left: top edge -> left edge
    p(g[6]),
    g[7],
    p(g[4]),
    g[5],
    p(g[2]),
    g[3],
    p(g[0]),
    g[1],
    // bottom left: left edge -> bottom edge
    p(g[0]),
    d(g[1]),
    p(g[2]),
    d(g[3]),
    p(g[4]),
    d(g[5]),
    p(g[6]),
    d(g[7]),
    // bottom right: bottom edge -> right edge
    g[6],
    d(g[7]),
    g[4],
    d(g[5]),
    g[2],
    d(g[3]),
    g[0],
    d(g[1])
  ];
}
var ks = 2 * Math.PI / 128;
function Su(t) {
  return (e) => {
    let n = e % (2 * Math.PI);
    n < 0 && (n += 2 * Math.PI);
    const s = Math.floor(n / ks), o = n / ks - s;
    return t(s * ks) * (1 - o) + t((s + 1) * ks) * o;
  };
}
var ye = Su(Math.cos), me = Su(Math.sin);
function Ru(t, e) {
  const n = [], s = (c, a) => {
    const l = Math.min(c, a), u = Math.max(c, a), h = Math.floor(u / 90) - Math.floor(l / 90) + 1, f = [];
    for (let p = Math.floor(l / 90) + 1; p * 90 < u; p++)
      f.push(p * 90);
    a < c && f.reverse();
    const g = [c, ...f, a];
    for (; g.length - 1 < h; )
      g.push(a);
    for (let p = 0; p + 1 < g.length; p++)
      n.push({ from: g[p], to: g[p + 1], first: p === 0 });
  }, o = e < 0 ? -1 : 1, r = Math.min(8, Math.trunc(Math.abs(e) / 360)), i = t + e - o * r * 360;
  s(t, i);
  for (let c = 1; c <= r; c++)
    s(i + o * 360 * (c - 1), t + o * 360 * c), s(t + o * 360 * c, i + o * 360 * c);
  return n;
}
function Au(t, e, n, s, o, r) {
  const i = o * Math.PI / 180, c = r * Math.PI / 180, a = 4 / 3 * Math.tan((c - i) / 4), l = t + n * ye(i), u = e - s * me(i), h = t + n * ye(c), f = e - s * me(c);
  return [l - a * n * me(i), u - a * s * ye(i), h + a * n * me(c), f + a * s * ye(c), h, f];
}
function Ed(t, e, n) {
  const s = Math.min(t.ax, t.ax + t.exx), o = Math.min(t.ay, t.ay + t.eyy), r = Math.abs(t.exx), i = Math.abs(t.eyy), c = s + r / 2, a = o + i / 2, l = Si(s, o, s + r, o + i), u = l.slice(), h = Math.ceil(Be * Math.floor(i / 2));
  u[3] = u[1] - h, u[11] = u[13] - h, u[15] = u[13] + h, u[23] = u[1] + h;
  const f = e * Math.PI / 180, g = [Math.round(c + r / 2 * ye(f)), Math.round(a - i / 2 * me(f))];
  for (const p of Ru(e, n)) {
    const d = p.to - p.from;
    if (!p.first && Math.abs(d) === 90 && p.from % 90 === 0) {
      const m = (Math.min(p.from, p.to) / 90 % 4 + 4) % 4 * 6;
      d > 0 ? g.push(l[m + 2], l[m + 3], l[m + 4], l[m + 5], l[m + 6], l[m + 7]) : g.push(u[m + 4], u[m + 5], u[m + 2], u[m + 3], u[m], u[m + 1]);
      continue;
    }
    for (const y of Au(c, a, r / 2, i / 2, p.from, p.to))
      g.push(Math.round(y));
  }
  return g;
}
function vd(t, e, n, s, o, r, i, c, a) {
  const l = n - t, u = s - e, h = Math.PI / 2, f = Math.ceil(l / 2), g = a ? Math.ceil(u / 2) : Math.floor(u / 2), p = t + Math.ceil(l / 2), d = e + Math.ceil(u / 2), y = (t + n) / 2, m = (e + s) / 2, M = (S, R) => Math.atan2(-(R - m) / (u / 2 || 1), (S - y) / (l / 2 || 1)), b = M(o, r);
  let w = M(i, c);
  const x = a ? -1 : 1;
  if (x > 0)
    for (; w <= b; ) w += 2 * Math.PI;
  else
    for (; w >= b; ) w -= 2 * Math.PI;
  const E = (S) => p + f * ye(S), T = (S) => d - g * me(S), v = Si(t, e, n, s);
  if (a) {
    const S = Math.floor((s - e) / 2), R = Math.ceil(Be * S);
    v[3] = v[1] - R, v[11] = v[13] - R, v[15] = v[13] + R, v[23] = v[1] + R;
  }
  const I = [Math.round(E(b)), Math.round(T(b))];
  let P = b;
  for (let S = 0; S < 8 && (x > 0 ? P < w - 1e-12 : P > w + 1e-12); S++) {
    const R = x > 0 ? Math.floor(P / h + 1e-9) * h + h : Math.ceil(P / h - 1e-9) * h - h;
    if (Math.abs(P / h - Math.round(P / h)) < 1e-9 && (x > 0 ? R <= w + 1e-12 : R >= w - 1e-12)) {
      const L = (Math.round(Math.min(P, R) / h) % 4 + 4) % 4 * 6;
      x > 0 ? I.push(v[L + 2], v[L + 3], v[L + 4], v[L + 5], v[L + 6], v[L + 7]) : I.push(v[L + 4], v[L + 5], v[L + 2], v[L + 3], v[L], v[L + 1]), P = R;
      continue;
    }
    const A = x > 0 ? Math.min(R, w) : Math.max(R, w), k = 4 / 3 * Math.tan((A - P) / 4);
    I.push(
      Math.round(E(P) - k * f * me(P)),
      Math.round(T(P) - k * g * ye(P)),
      Math.round(E(A) + k * f * me(A)),
      Math.round(T(A) + k * g * ye(A)),
      Math.round(E(A)),
      Math.round(T(A))
    ), P = A;
  }
  return I;
}
var ht = class {
  constructor() {
    this.figures = [], this.current = null;
  }
  /** Starts a new figure at (`x`, `y`). */
  moveTo(t, e) {
    this.current = { pts: [t, e], closed: !1 }, this.figures.push(this.current);
  }
  /** Adds a line to (`x`, `y`), starting a figure there when none is open. */
  lineTo(t, e) {
    if (!this.current) {
      const n = this.lastPoint();
      this.moveTo(n ? n[0] : t, n ? n[1] : e);
    }
    this.current.pts.push(t, e);
  }
  /** Adds a cubic Bezier from the current point. */
  bezierTo(t, e, n, s, o, r) {
    if (!this.current) {
      const c = this.lastPoint();
      this.moveTo(c ? c[0] : t, c ? c[1] : e);
    }
    const i = this.current.pts;
    this.flattenInto(i[i.length - 2], i[i.length - 1], t, e, n, s, o, r);
  }
  /** Flattens one Bezier onto the open figure, recording its end tangents. */
  flattenInto(t, e, n, s, o, r, i, c) {
    const a = this.current, l = a.pts.length / 2 - 1;
    Pi(t, e, n, s, o, r, i, c, a.pts);
    const u = a.pts.length / 2 - 2;
    if (u <= l)
      return;
    const h = (p, d, y, m, M, b, w, x) => y !== p || m !== d ? [y - p, m - d] : M !== p || b !== d ? [M - p, b - d] : w !== p || x !== d ? [w - p, x - d] : null, f = h(t, e, n, s, o, r, i, c), g = h(o, r, i, c, i, c, i, c) ?? h(n, s, i, c, i, c, i, c) ?? h(t, e, i, c, i, c, i, c);
    a.tangents ?? (a.tangents = /* @__PURE__ */ new Map()), f && a.tangents.set(l, f), g && a.tangents.set(u, g);
  }
  /**
   * Appends Beziers given as `1 + 3n` flat points; the first point is
   * joined with a line (or starts the figure when `move`).
   */
  addBeziers(t, e) {
    e ? this.moveTo(t[0], t[1]) : this.lineTo(t[0], t[1]);
    for (let n = 2; n + 5 < t.length; n += 6)
      this.flattenInto(t[n - 2], t[n - 1], t[n], t[n + 1], t[n + 2], t[n + 3], t[n + 4], t[n + 5]);
  }
  /** Closes the open figure (the next drawing call starts a new one). */
  closeFigure() {
    this.current && (this.current.closed = !0, this.current = null);
  }
  /** Appends every figure of `other`. */
  append(t) {
    for (const e of t.figures)
      this.figures.push({ pts: e.pts.slice(), closed: e.closed, tangents: e.tangents && new Map(e.tangents) });
    this.current = null;
  }
  lastPoint() {
    const t = this.figures[this.figures.length - 1];
    return t ? t.closed ? [t.pts[0], t.pts[1]] : [t.pts[t.pts.length - 2], t.pts[t.pts.length - 1]] : null;
  }
};
function Ri(t, e, n) {
  return Ao(
    t.figures.map((s) => s.pts),
    e,
    n
  );
}
function Ai(t, e) {
  switch (t & 15) {
    case 1:
      return [18, 6];
    case 2:
      return [3, 3];
    case 3:
      return [9, 6, 3, 6];
    case 4:
      return [9, 3, 3, 3, 3, 3];
    case 7:
      return e && e.length > 0 && e.some((n) => n > 0) ? e.map((n) => Math.max(0, n) * 3) : null;
    case 8:
      return [1, 1];
    default:
      return null;
  }
}
function Uu(t, e, n, s = 1) {
  const o = Math.max(e, 1);
  switch (t & 15) {
    case 1:
      return [3 * o, o];
    case 2:
      return [o, o];
    case 3:
      return [3 * o, o, o, o];
    case 4:
      return [3 * o, o, o, o, o, o];
    case 7:
      return n && n.some((r) => r > 0) ? n.map((r) => Math.max(0, r) * s) : null;
    default:
      return null;
  }
}
function ku(t) {
  const e = t & 15;
  return e >= 1 && e <= 4;
}
function Lu(t, e, n, s, o = { pos: 0 }, r = !0) {
  let i = 0;
  if (s)
    for (const a of s)
      i += a;
  const c = (a, l) => {
    if (!s || i === 0) {
      e.add(l, a, a + 1);
      return;
    }
    let u = o.pos % i;
    o.pos++;
    for (let h = 0; h < s.length; h++) {
      if (u < s[h]) {
        h % 2 === 0 ? e.add(l, a, a + 1) : n && n.add(l, a, a + 1);
        return;
      }
      u -= s[h];
    }
  };
  t.figures.forEach((a, l) => {
    l > 0 && r && (o.pos = 0);
    const u = a.pts;
    for (let h = 0; h + 3 < u.length; h += 2)
      Cr(u[h], u[h + 1], u[h + 2], u[h + 3], c);
    if (a.closed && u.length >= 4) {
      const h = u.length;
      (u[h - 2] !== u[0] || u[h - 1] !== u[1]) && Cr(u[h - 2], u[h - 1], u[0], u[1], c);
    }
  });
}
var Bc = [1, 0, 0, 1, 0, 0];
function Hr(t, e) {
  return [
    t[0] * e[0] + t[2] * e[1],
    t[1] * e[0] + t[3] * e[1],
    t[0] * e[2] + t[2] * e[3],
    t[1] * e[2] + t[3] * e[3],
    t[0] * e[4] + t[2] * e[5] + t[4],
    t[1] * e[4] + t[3] * e[5] + t[5]
  ];
}
function bn(t) {
  const e = t[0] * t[3] - t[1] * t[2];
  return !e || !Number.isFinite(e) ? null : [
    t[3] / e,
    -t[1] / e,
    -t[2] / e,
    t[0] / e,
    (t[2] * t[5] - t[3] * t[4]) / e,
    (t[1] * t[4] - t[0] * t[5]) / e
  ];
}
var Gr = class bt {
  constructor() {
    this.segs = [], this.cur = null, this.start = null;
  }
  reset() {
    this.segs = [], this.cur = null, this.start = null;
  }
  moveDevice(e) {
    this.segs.push({ t: "M", x: e.x, y: e.y }), this.cur = e, this.start = e;
  }
  lineDevice(e) {
    if (!this.cur) {
      this.moveDevice(e);
      return;
    }
    this.segs.push({ t: "L", x: e.x, y: e.y }), this.cur = e;
  }
  static map(e, n, s) {
    return { x: e[0] * n + e[2] * s + e[4], y: e[1] * n + e[3] * s + e[5] };
  }
  moveTo(e, n, s) {
    Number.isFinite(n) && Number.isFinite(s) && this.moveDevice(bt.map(e, n, s));
  }
  lineTo(e, n, s) {
    Number.isFinite(n) && Number.isFinite(s) && this.lineDevice(bt.map(e, n, s));
  }
  curveUser(e, n, s, o, r, i, c) {
    const a = bt.map(e, n, s), l = bt.map(e, o, r), u = bt.map(e, i, c);
    this.cur || this.moveDevice(a), this.segs.push({ t: "C", x1: a.x, y1: a.y, x2: l.x, y2: l.y, x: u.x, y: u.y }), this.cur = u;
  }
  bezierCurveTo(e, n, s, o, r, i, c) {
    [n, s, o, r, i, c].every(Number.isFinite) && this.curveUser(e, n, s, o, r, i, c);
  }
  quadraticCurveTo(e, n, s, o, r) {
    if (![n, s, o, r].every(Number.isFinite))
      return;
    const i = bn(e), c = this.cur && i ? { x: i[0] * this.cur.x + i[2] * this.cur.y + i[4], y: i[1] * this.cur.x + i[3] * this.cur.y + i[5] } : { x: n, y: s };
    this.curveUser(
      e,
      c.x + 2 / 3 * (n - c.x),
      c.y + 2 / 3 * (s - c.y),
      o + 2 / 3 * (n - o),
      r + 2 / 3 * (s - r),
      o,
      r
    );
  }
  closePath() {
    this.cur && (this.segs.push({ t: "Z" }), this.cur = this.start);
  }
  rect(e, n, s, o, r) {
    [n, s, o, r].every(Number.isFinite) && (this.moveDevice(bt.map(e, n, s)), this.lineDevice(bt.map(e, n + o, s)), this.lineDevice(bt.map(e, n + o, s + r)), this.lineDevice(bt.map(e, n, s + r)), this.segs.push({ t: "Z" }), this.moveDevice(bt.map(e, n, s)));
  }
  /** Appends an elliptical arc as cubic Beziers (user space, then mapped). */
  ellipseUser(e, n, s, o, r, i, c, a, l) {
    const u = Math.PI * 2;
    let h = a - c;
    l ? h = -h >= u ? -u : -((-h % u + u) % u) : h = h >= u ? u : (h % u + u) % u;
    const f = Math.cos(i), g = Math.sin(i), p = (w) => {
      const x = o * Math.cos(w), E = r * Math.sin(w);
      return { x: n + x * f - E * g, y: s + x * g + E * f };
    }, d = (w) => {
      const x = -o * Math.sin(w), E = r * Math.cos(w);
      return { x: x * f - E * g, y: x * g + E * f };
    }, y = p(c);
    if (this.lineDevice(bt.map(e, y.x, y.y)), h === 0)
      return;
    const m = Math.max(1, Math.ceil(Math.abs(h) / (Math.PI / 2) - 1e-9)), M = h / m, b = 4 / 3 * Math.tan(M / 4);
    for (let w = 0; w < m; w++) {
      const x = c + w * M, E = x + M, T = p(x), v = p(E), I = d(x), P = d(E);
      this.curveUser(e, T.x + b * I.x, T.y + b * I.y, v.x - b * P.x, v.y - b * P.y, v.x, v.y);
    }
  }
  ellipse(e, n, s, o, r, i, c, a, l = !1) {
    if (o < 0 || r < 0)
      throw new RangeError("The radii provided are negative");
    [n, s, o, r, i, c, a].every(Number.isFinite) && this.ellipseUser(e, n, s, o, r, i, c, a, l);
  }
  arc(e, n, s, o, r, i, c = !1) {
    if (o < 0)
      throw new RangeError("The radius provided is negative");
    [n, s, o, r, i].every(Number.isFinite) && this.ellipseUser(e, n, s, o, o, 0, r, i, c);
  }
  arcTo(e, n, s, o, r, i) {
    if (![n, s, o, r, i].every(Number.isFinite) || i < 0)
      return;
    if (!this.cur) {
      this.moveDevice(bt.map(e, n, s));
      return;
    }
    const c = bn(e);
    if (!c)
      return;
    const a = c[0] * this.cur.x + c[2] * this.cur.y + c[4], l = c[1] * this.cur.x + c[3] * this.cur.y + c[5], u = a - n, h = l - s, f = o - n, g = r - s, p = Math.hypot(u, h), d = Math.hypot(f, g), y = u * g - h * f;
    if (i === 0 || p === 0 || d === 0 || Math.abs(y) < 1e-12 * p * d) {
      this.lineDevice(bt.map(e, n, s));
      return;
    }
    const m = u / p, M = h / p, b = f / d, w = g / d, x = Math.acos(Math.max(-1, Math.min(1, m * b + M * w))), E = i / Math.tan(x / 2), T = { x: n + m * E, y: s + M * E }, v = { x: n + b * E, y: s + w * E }, I = m + b, P = M + w, S = Math.hypot(I, P), R = i / Math.sin(x / 2), U = { x: n + I / S * R, y: s + P / S * R }, A = Math.atan2(T.y - U.y, T.x - U.x);
    let L = Math.atan2(v.y - U.y, v.x - U.x) - A;
    for (; L > Math.PI; )
      L -= 2 * Math.PI;
    for (; L <= -Math.PI; )
      L += 2 * Math.PI;
    this.ellipseUser(e, U.x, U.y, i, i, 0, A, A + L, L < 0);
  }
};
function qs(t, e, n) {
  const s = [];
  let o = null, r = 0, i = 0, c = 0, a = 0;
  const l = (u, h) => {
    const f = { pts: [u, h], smooth: [!1], closed: !1 };
    return s.push(f), f;
  };
  for (const u of t)
    switch (u.t) {
      case "M":
        o = l(u.x, u.y), r = c = u.x, i = a = u.y;
        break;
      case "L":
        o || (o = l(r, i)), o.pts.push(u.x, u.y), o.smooth.push(!1), c = u.x, a = u.y;
        break;
      case "C": {
        o || (o = l(r, i));
        const h = Math.max(Math.abs(c - 2 * u.x1 + u.x2), Math.abs(u.x1 - 2 * u.x2 + u.x)), f = Math.max(Math.abs(a - 2 * u.y1 + u.y2), Math.abs(u.y1 - 2 * u.y2 + u.y)), g = Math.hypot(h, f), p = n ? n(c, a, u.x1, u.y1, u.x2, u.y2, u.x, u.y) : Math.max(1, Math.min(1e3, Math.ceil(Math.sqrt(0.75 * g / e))));
        for (let d = 1; d <= p; d++) {
          const y = d / p, m = 1 - y, M = m * m * m, b = 3 * m * m * y, w = 3 * m * y * y, x = y * y * y;
          o.pts.push(M * c + b * u.x1 + w * u.x2 + x * u.x, M * a + b * u.y1 + w * u.y2 + x * u.y), o.smooth.push(d < p);
        }
        c = u.x, a = u.y;
        break;
      }
      case "Z":
        o && (o.closed = !0, o = null, c = r, a = i);
        break;
    }
  return s;
}
function Fu(t, e, n, s) {
  let o = 0, r = 0;
  for (const i of t) {
    const c = i.pts, a = c.length / 2;
    if (!(a < 2))
      for (let l = 0; l < a; l++) {
        const u = c[l * 2], h = c[l * 2 + 1], f = l + 1 < a ? l + 1 : 0, g = c[f * 2], p = c[f * 2 + 1];
        (h <= n ? p > n : p <= n) && u + (n - h) * (g - u) / (p - h) > e && (r++, o += p > h ? 1 : -1);
      }
  }
  return s === "evenodd" ? (r & 1) === 1 : o !== 0;
}
var Td = 1 << 20, ar = new Float64Array(0), Xc = new Uint8Array(0), Js = [], kt = new Float64Array(0);
function Id(t) {
  if (kt.length < t) {
    const e = new Float64Array(Math.max(t, kt.length * 2, 1024));
    e.set(kt), kt = e;
  }
}
function Pd(t, e, n, s, o, r, i, c, a) {
  if (i === a)
    return;
  let l = 1;
  if (i > a) {
    l = -1;
    let y = r;
    r = c, c = y, y = i, i = a, a = y;
  }
  const u = Math.max(0, i), h = Math.min(s, a);
  if (u >= h)
    return;
  const f = (y, m, M) => {
    const b = y * n + m;
    t[b] += M, e[b] || (e[b] = 1, Js[y].push(m));
  }, g = (c - r) / (a - i);
  let p = Math.min(o, Math.max(0, r + (u - i) * g));
  const d = Math.ceil(h);
  for (let y = Math.floor(u); y < d; y++) {
    const m = Math.min(y + 1, h) - Math.max(y, u);
    let M = p + g * m;
    M < 0 ? M = 0 : M > o && (M = o);
    const b = m * l, w = p < M ? p : M, x = p < M ? M : p, E = Math.floor(w), T = Math.ceil(x);
    if (T <= E + 1) {
      const v = 0.5 * (p + M) - E;
      f(y, E, b - b * v), f(y, E + 1, b * v);
    } else {
      const v = 1 / (x - w), I = w - E, P = 0.5 * v * (1 - I) * (1 - I), S = x - T + 1, R = 0.5 * v * S * S;
      if (f(y, E, b * P), T === E + 2)
        f(y, E + 1, b * (1 - P - R));
      else {
        const U = v * (1.5 - I);
        f(y, E + 1, b * (U - P));
        for (let k = E + 2; k < T - 1; k++)
          f(y, k, b * v);
        const A = U + (T - E - 3) * v;
        f(y, T - 1, b * (1 - A - R));
      }
      f(y, T, b * R);
    }
    p = M;
  }
}
function Sd(t, e) {
  let n;
  if (e) {
    let s = Math.abs(t);
    s -= 2 * Math.floor(s / 2), n = s > 1 ? 2 - s : s;
  } else
    n = Math.abs(t), n > 1 && (n = 1);
  return Math.round(n * 255);
}
var Rd = (t, e) => t - e;
function Ks(t, e, n, s) {
  let o = 1 / 0, r = 1 / 0, i = -1 / 0, c = -1 / 0;
  for (const x of t)
    for (let E = 0; E + 1 < x.length; E += 2) {
      const T = x[E], v = x[E + 1];
      T < o && (o = T), T > i && (i = T), v < r && (r = v), v > c && (c = v);
    }
  if (!(o <= i) || !(r <= c) || !Number.isFinite(o + i + r + c))
    return null;
  const a = Math.max(n.x0, Math.floor(o)), l = Math.max(n.y0, Math.floor(r)), u = Math.min(n.x1, Math.ceil(i)), h = Math.min(n.y1, Math.ceil(c));
  if (u <= a || h <= l)
    return null;
  const f = u - a;
  let g = 0;
  const p = (x, E, T, v) => {
    E !== v && (Id((g + 1) * 4), kt[g * 4] = x, kt[g * 4 + 1] = E, kt[g * 4 + 2] = T, kt[g * 4 + 3] = v, g++);
  }, d = (x, E, T, v) => {
    if (!(E === v || Math.max(E, v) <= l || Math.min(E, v) >= h) && !(x >= f && T >= f)) {
      if (x > f || T > f) {
        const I = (f - x) / (T - x), P = E + (v - E) * I;
        x > f ? (x = f, E = P) : (T = f, v = P);
      }
      if (x <= 0 && T <= 0) {
        p(0, E, 0, v);
        return;
      }
      if (x < 0 || T < 0) {
        const I = (0 - x) / (T - x), P = E + (v - E) * I;
        x < 0 ? (p(0, E, 0, P), p(0, P, T, v)) : (p(x, E, 0, P), p(0, P, 0, v));
        return;
      }
      p(x, E, T, v);
    }
  };
  for (const x of t) {
    const E = x.length >> 1;
    if (!(E < 2))
      for (let T = 0; T < E; T++) {
        const v = T + 1 < E ? T + 1 : 0;
        d(x[T * 2] - a, x[T * 2 + 1], x[v * 2] - a, x[v * 2 + 1]);
      }
  }
  if (g === 0)
    return null;
  const y = f + 2, m = Math.max(1, Math.min(h - l, Math.floor(Td / y)));
  for (ar.length < m * y && (ar = new Float64Array(m * y), Xc = new Uint8Array(m * y)); Js.length < m; )
    Js.push([]);
  const M = ar, b = Xc, w = e === "evenodd";
  for (let x = l; x < h; x += m) {
    const E = Math.min(m, h - x);
    for (let T = 0; T < g; T++) {
      const v = T * 4, I = kt[v + 1] - x, P = kt[v + 3] - x;
      I <= 0 && P <= 0 || I >= E && P >= E || Pd(M, b, y, E, f, kt[v], I, kt[v + 2], P);
    }
    for (let T = 0; T < E; T++) {
      const v = Js[T];
      if (v.length === 0)
        continue;
      v.sort(Rd);
      const I = T * y, P = x + T;
      let S = 0;
      for (let R = 0; R < v.length; R++) {
        const U = v[R];
        if (S += M[I + U], M[I + U] = 0, b[I + U] = 0, U >= f)
          continue;
        const A = R + 1 < v.length ? Math.min(v[R + 1], f) : f, k = Sd(S, w);
        k && s(P, a + U, a + A, k);
      }
      v.length = 0;
    }
  }
  return { x0: a, y0: l, x1: u, y1: h };
}
var Ad = {
  black: 0,
  white: 16777215,
  red: 16711680,
  lime: 65280,
  green: 32768,
  blue: 255,
  yellow: 16776960,
  cyan: 65535,
  aqua: 65535,
  magenta: 16711935,
  fuchsia: 16711935,
  gray: 8421504,
  grey: 8421504,
  silver: 12632256,
  maroon: 8388608,
  olive: 8421376,
  teal: 32896,
  navy: 128,
  purple: 8388736,
  orange: 16753920,
  darkgray: 11119017,
  darkgrey: 11119017,
  lightgray: 13882323,
  lightgrey: 13882323,
  dimgray: 6908265,
  dimgrey: 6908265,
  whitesmoke: 16119285,
  gainsboro: 14474460
}, Ls = /* @__PURE__ */ new Map();
function Ui(t) {
  const e = Ls.get(t);
  if (e !== void 0)
    return e;
  const n = Ud(t.trim().toLowerCase());
  return Ls.size > 4096 && Ls.clear(), Ls.set(t, n), n;
}
function Ud(t) {
  if (t === "transparent")
    return [0, 0, 0, 0];
  if (t[0] === "#") {
    const s = t.slice(1);
    if (!/^[0-9a-f]+$/.test(s))
      return null;
    if (s.length === 3 || s.length === 4) {
      const o = [...s].map((r) => parseInt(r + r, 16));
      return [o[0], o[1], o[2], s.length === 4 ? o[3] / 255 : 1];
    }
    return s.length === 6 || s.length === 8 ? [
      parseInt(s.slice(0, 2), 16),
      parseInt(s.slice(2, 4), 16),
      parseInt(s.slice(4, 6), 16),
      s.length === 8 ? parseInt(s.slice(6, 8), 16) / 255 : 1
    ] : null;
  }
  const e = /^rgba?\(([^)]*)\)$/.exec(t);
  if (e) {
    const s = e[1].split(/[\s,/]+/).filter(Boolean);
    if (s.length < 3)
      return null;
    const o = (c) => {
      const a = c.endsWith("%") ? parseFloat(c) * 255 / 100 : parseFloat(c);
      return Math.max(0, Math.min(255, Math.round(a)));
    }, r = s.length > 3 ? s[3].endsWith("%") ? parseFloat(s[3]) / 100 : parseFloat(s[3]) : 1, i = [o(s[0]), o(s[1]), o(s[2])];
    return i.some((c) => !Number.isFinite(c)) || !Number.isFinite(r) ? null : [i[0], i[1], i[2], Math.max(0, Math.min(1, r))];
  }
  const n = Ad[t];
  return n === void 0 ? null : [n >> 16 & 255, n >> 8 & 255, n & 255, 1];
}
var Zs = class {
  constructor(t, e) {
    this.kind = t, this.coords = e, this.stops = [], this.sorted = null;
  }
  addColorStop(t, e) {
    if (!(t >= 0 && t <= 1))
      throw new RangeError("Gradient stop offset out of range");
    const n = Ui(e);
    if (!n)
      throw new SyntaxError(`Invalid colour: ${e}`);
    this.stops.push({ offset: t, color: n }), this.sorted = null;
  }
  /** Stops ordered by offset; equal offsets keep insertion order. */
  sortedStops() {
    return this.sorted || (this.sorted = this.stops.map((t, e) => ({ s: t, i: e })).sort((t, e) => t.s.offset - e.s.offset || t.i - e.i).map((t) => t.s)), this.sorted;
  }
}, jr = class {
  constructor(t, e, n, s) {
    this.data = t, this.width = e, this.height = n, this.repetition = s, this.matrix = [1, 0, 0, 1, 0, 0];
  }
  setTransform(t) {
    const e = [(t == null ? void 0 : t.a) ?? 1, (t == null ? void 0 : t.b) ?? 0, (t == null ? void 0 : t.c) ?? 0, (t == null ? void 0 : t.d) ?? 1, (t == null ? void 0 : t.e) ?? 0, (t == null ? void 0 : t.f) ?? 0];
    e.every(Number.isFinite) && (this.matrix = e);
  }
};
function Yc(t, e, n) {
  let s;
  const o = t.length;
  if (e <= t[0].offset)
    s = t[0].color;
  else if (e >= t[o - 1].offset)
    s = t[o - 1].color;
  else {
    let r = 0, i = o - 1;
    for (; i - r > 1; ) {
      const f = r + i >> 1;
      t[f].offset <= e ? r = f : i = f;
    }
    const c = t[r], a = t[i], l = a.offset - c.offset, u = l > 0 ? (e - c.offset) / l : 1, h = c.color[3] + (a.color[3] - c.color[3]) * u;
    n[0] = (c.color[0] + (a.color[0] - c.color[0]) * u) * h, n[1] = (c.color[1] + (a.color[1] - c.color[1]) * u) * h, n[2] = (c.color[2] + (a.color[2] - c.color[2]) * u) * h, n[3] = h * 255;
    return;
  }
  n[0] = s[0] * s[3], n[1] = s[1] * s[3], n[2] = s[2] * s[3], n[3] = s[3] * 255;
}
function kd(t, e) {
  const n = t.sortedStops(), s = bn(e);
  if (n.length === 0 || !s)
    return null;
  const o = t.coords;
  if (t.kind === "linear") {
    const [d, y, m, M] = o, b = m - d, w = M - y, x = b * b + w * w;
    return x > 0 ? {
      shade(E, T, v) {
        const I = E + 0.5, P = T + 0.5, S = s[0] * I + s[2] * P + s[4], R = s[1] * I + s[3] * P + s[5];
        return Yc(n, ((S - d) * b + (R - y) * w) / x, v), !0;
      }
    } : null;
  }
  const [r, i, c, a, l, u] = o;
  if (r === a && i === l && c === u)
    return null;
  const h = a - r, f = l - i, g = u - c, p = h * h + f * f - g * g;
  return {
    shade(d, y, m) {
      const M = d + 0.5, b = y + 0.5, w = s[0] * M + s[2] * b + s[4] - r, x = s[1] * M + s[3] * b + s[5] - i, E = w * h + x * f + c * g, T = w * w + x * x - c * c;
      let v;
      if (Math.abs(p) < 1e-12) {
        if (Math.abs(E) < 1e-12 || (v = T / (2 * E), c + v * g < 0))
          return !1;
      } else {
        const I = E * E - p * T;
        if (I < 0)
          return !1;
        const P = Math.sqrt(I), S = (E + P) / p, R = (E - P) / p, U = Math.max(S, R), A = Math.min(S, R);
        if (c + U * g >= 0)
          v = U;
        else if (c + A * g >= 0)
          v = A;
        else
          return !1;
      }
      return Yc(n, v, m), !0;
    }
  };
}
function zc(t, e) {
  const n = t % e;
  return n < 0 ? n + e : n;
}
function Ld(t, e, n, s) {
  if (t.transparentOutside && (!t.wrapX && (e < t.minX || e >= t.maxX) || !t.wrapY && (n < t.minY || n >= t.maxY)))
    return !1;
  const o = t.data, r = t.width, i = (P) => t.wrapX ? zc(P, r) : Math.min(t.maxX - 1, Math.max(t.minX, P)), c = (P) => t.wrapY ? zc(P, t.height) : Math.min(t.maxY - 1, Math.max(t.minY, P));
  if (!t.smooth) {
    const P = (c(Math.floor(n)) * r + i(Math.floor(e))) * 4;
    return s[0] = o[P], s[1] = o[P + 1], s[2] = o[P + 2], s[3] = o[P + 3], !0;
  }
  const a = e - 0.5, l = n - 0.5, u = Math.floor(a), h = Math.floor(l), f = a - u, g = l - h, p = i(u), d = i(u + 1), y = c(h) * r, m = c(h + 1) * r, M = (y + p) * 4, b = (y + d) * 4, w = (m + p) * 4, x = (m + d) * 4, E = (1 - f) * (1 - g), T = f * (1 - g), v = (1 - f) * g, I = f * g;
  for (let P = 0; P < 4; P++)
    s[P] = o[M + P] * E + o[b + P] * T + o[w + P] * v + o[x + P] * I;
  return !0;
}
function Du(t, e) {
  const n = bn(e);
  return n ? {
    shade(s, o, r) {
      const i = s + 0.5, c = o + 0.5;
      return Ld(t, n[0] * i + n[2] * c + n[4], n[1] * i + n[3] * c + n[5], r);
    }
  } : null;
}
function Fs(t, e, n) {
  if (typeof t == "string") {
    const s = Ui(t);
    return s ? { solid: [s[0] * s[3], s[1] * s[3], s[2] * s[3], s[3] * 255] } : null;
  }
  if (t instanceof Zs)
    return kd(t, e);
  if (t instanceof jr) {
    const s = t.repetition, o = s === "repeat" || s === "repeat-x", r = s === "repeat" || s === "repeat-y";
    return Du(
      {
        data: t.data,
        width: t.width,
        height: t.height,
        wrapX: o,
        wrapY: r,
        minX: 0,
        minY: 0,
        maxX: t.width,
        maxY: t.height,
        transparentOutside: !0,
        smooth: n
      },
      Hr(e, t.matrix)
    );
  }
  return null;
}
var Fd = /* @__PURE__ */ new Set(["copy", "source-in", "source-out", "destination-in", "destination-atop"]), ki = {
  multiply: (t, e) => t * e,
  screen: (t, e) => t + e - t * e,
  overlay: (t, e) => Oc(e, t),
  darken: (t, e) => Math.min(t, e),
  lighten: (t, e) => Math.max(t, e),
  "color-dodge": (t, e) => e === 0 ? 0 : t >= 1 ? 1 : Math.min(1, e / (1 - t)),
  "color-burn": (t, e) => e >= 1 ? 1 : t <= 0 ? 0 : 1 - Math.min(1, (1 - e) / t),
  "hard-light": (t, e) => Oc(t, e),
  "soft-light": (t, e) => {
    if (t <= 0.5)
      return e - (1 - 2 * t) * e * (1 - e);
    const n = e <= 0.25 ? ((16 * e - 12) * e + 4) * e : Math.sqrt(e);
    return e + (2 * t - 1) * (n - e);
  },
  difference: (t, e) => Math.abs(t - e),
  exclusion: (t, e) => t + e - 2 * t * e
};
function Oc(t, e) {
  return t <= 0.5 ? e * 2 * t : ki.screen(2 * t - 1, e);
}
function hn(t, e, n) {
  return 0.3 * t + 0.59 * e + 0.11 * n;
}
function Dd(t) {
  const e = hn(t[0], t[1], t[2]), n = Math.min(t[0], t[1], t[2]), s = Math.max(t[0], t[1], t[2]);
  let [o, r, i] = t;
  return n < 0 && (o = e + (o - e) * e / (e - n), r = e + (r - e) * e / (e - n), i = e + (i - e) * e / (e - n)), s > 1 && (o = e + (o - e) * (1 - e) / (s - e), r = e + (r - e) * (1 - e) / (s - e), i = e + (i - e) * (1 - e) / (s - e)), [o, r, i];
}
function Ds(t, e) {
  const n = e - hn(t[0], t[1], t[2]);
  return Dd([t[0] + n, t[1] + n, t[2] + n]);
}
function $c(t) {
  return Math.max(t[0], t[1], t[2]) - Math.min(t[0], t[1], t[2]);
}
function Cc(t, e) {
  const n = [0, 1, 2].sort((c, a) => t[c] - t[a]), s = [0, 0, 0], [o, r, i] = n;
  return t[i] > t[o] && (s[r] = (t[r] - t[o]) * e / (t[i] - t[o]), s[i] = e), s;
}
var _u = {
  hue: (t, e) => Ds(Cc(t, $c(e)), hn(e[0], e[1], e[2])),
  saturation: (t, e) => Ds(Cc(e, $c(t)), hn(e[0], e[1], e[2])),
  color: (t, e) => Ds(t, hn(e[0], e[1], e[2])),
  luminosity: (t, e) => Ds(e, hn(t[0], t[1], t[2]))
};
function _d(t) {
  return t in ki || t in _u || [
    "source-over",
    "source-in",
    "source-out",
    "source-atop",
    "destination-over",
    "destination-in",
    "destination-out",
    "destination-atop",
    "xor",
    "copy",
    "lighter"
  ].includes(t);
}
function Qs(t, e, n, s, o, r, i, c) {
  const a = t[e] / 255, l = t[e + 1] / 255, u = t[e + 2] / 255, h = t[e + 3] / 255;
  let f, g, p, d;
  switch (c) {
    case "source-over":
      f = n + a * (1 - r), g = s + l * (1 - r), p = o + u * (1 - r), d = r + h * (1 - r);
      break;
    case "copy":
      f = n, g = s, p = o, d = r;
      break;
    case "destination-over":
      f = n * (1 - h) + a, g = s * (1 - h) + l, p = o * (1 - h) + u, d = r * (1 - h) + h;
      break;
    case "source-in":
      f = n * h, g = s * h, p = o * h, d = r * h;
      break;
    case "destination-in":
      f = a * r, g = l * r, p = u * r, d = h * r;
      break;
    case "source-out":
      f = n * (1 - h), g = s * (1 - h), p = o * (1 - h), d = r * (1 - h);
      break;
    case "destination-out":
      f = a * (1 - r), g = l * (1 - r), p = u * (1 - r), d = h * (1 - r);
      break;
    case "source-atop":
      f = n * h + a * (1 - r), g = s * h + l * (1 - r), p = o * h + u * (1 - r), d = h;
      break;
    case "destination-atop":
      f = n * (1 - h) + a * r, g = s * (1 - h) + l * r, p = o * (1 - h) + u * r, d = r;
      break;
    case "xor":
      f = n * (1 - h) + a * (1 - r), g = s * (1 - h) + l * (1 - r), p = o * (1 - h) + u * (1 - r), d = r * (1 - h) + h * (1 - r);
      break;
    case "lighter":
      f = Math.min(1, n + a), g = Math.min(1, s + l), p = Math.min(1, o + u), d = Math.min(1, r + h);
      break;
    default: {
      d = r + h - r * h;
      const y = r * h, m = [r > 0 ? n / r : 0, r > 0 ? s / r : 0, r > 0 ? o / r : 0], M = [h > 0 ? a / h : 0, h > 0 ? l / h : 0, h > 0 ? u / h : 0];
      let b;
      const w = ki[c];
      if (w)
        b = [w(m[0], M[0]), w(m[1], M[1]), w(m[2], M[2])];
      else {
        const x = _u[c];
        if (!x) {
          Qs(t, e, n, s, o, r, i, "source-over");
          return;
        }
        b = x(m, M);
      }
      f = n * (1 - h) + a * (1 - r) + y * b[0], g = s * (1 - h) + l * (1 - r) + y * b[1], p = o * (1 - h) + u * (1 - r) + y * b[2];
    }
  }
  i < 1 && (f = a + (f - a) * i, g = l + (g - l) * i, p = u + (p - u) * i, d = h + (d - h) * i), t[e] = f * 255, t[e + 1] = g * 255, t[e + 2] = p * 255, t[e + 3] = d * 255;
}
function Hc(t, e) {
  let n = Math.abs(t), s = Math.abs(e);
  if (n < s) {
    const o = n;
    n = s, s = o;
  }
  return n + s / 2;
}
function Nd(t, e) {
  const n = Hc(t[0] * e, t[1] * e), s = Hc(t[2] * e, t[3] * e);
  return n <= 1 && s <= 1 ? (n + s) / 2 : null;
}
function Bd(t, e, n, s, o, r, i, c) {
  const a = i / 3 + 2 * t / 3, l = c / 3 + 2 * e / 3, u = t / 3 + 2 * i / 3, h = e / 3 + 2 * c / 3, f = Math.max(Math.abs(n - a), Math.abs(s - l), Math.abs(o - u), Math.abs(r - h));
  let g = 1 / 8;
  for (let p = 0; p < 9; p++) {
    if (f < g)
      return 1 << p;
    g *= 4;
  }
  return 512;
}
var _s = 32768;
function Gc(t, e) {
  return Math.trunc(t * 65536 / e);
}
function jc(t, e) {
  return t * e >> 6;
}
function Xd(t, e, n, s, o, r, i) {
  let c = 0, a = 1;
  const l = n - t, u = s - e, h = [
    [-l, t + 1],
    [l, o + 1 - t],
    [-u, e + 1],
    [u, r + 1 - e]
  ];
  for (const [f, g] of h)
    if (f === 0) {
      if (g < 0)
        return;
    } else {
      const p = g / f;
      f < 0 ? c = Math.max(c, p) : a = Math.min(a, p);
    }
  c > a || Wr(
    Math.round((t + l * c) * 64),
    Math.round((e + u * c) * 64),
    Math.round((t + l * a) * 64),
    Math.round((e + u * a) * 64),
    i
  );
}
function Wr(t, e, n, s, o) {
  if (Math.abs(n - t) > 511 * 64 || Math.abs(s - e) > 511 * 64) {
    const r = (t >> 1) + (n >> 1), i = (e >> 1) + (s >> 1);
    Wr(t, e, r, i, o), Wr(r, i, n, s, o);
    return;
  }
  if (Math.abs(n - t) > Math.abs(s - e)) {
    t > n && ([t, n] = [n, t], [e, s] = [s, e]);
    const r = t >> 6, i = n + 63 >> 6;
    let c = e << 10;
    const a = e === s ? 0 : Gc(s - e, n - t);
    c += a * (32 - (t & 63)) + 32 >> 6, Wc(r, i, c, a, n - t, t & 63, n & 63, (l, u, h, f) => {
      h && o(l, u - 1, h), f && o(l, u, f);
    });
  } else {
    if (t === n && e === s)
      return;
    e > s && ([t, n] = [n, t], [e, s] = [s, e]);
    const r = e >> 6, i = s + 63 >> 6;
    let c = t << 10;
    const a = t === n ? 0 : Gc(n - t, s - e);
    c += a * (32 - (e & 63)) + 32 >> 6, Wc(r, i, c, a, s - e, e & 63, s & 63, (l, u, h, f) => {
      h && o(u - 1, l, h), f && o(u, l, f);
    });
  }
}
function Wc(t, e, n, s, o, r, i, c) {
  if (e <= t)
    return;
  let a, l;
  e - t === 1 ? (a = o, l = 0) : (a = 64 - r, l = i);
  const u = (p, d, y) => {
    d += _s;
    const m = d >> 16, M = d >> 8 & 255;
    return c(p, m, jc(255 - M, y), jc(M, y)), d + s - _s;
  };
  let h = u(t, n, a), f = t + 1;
  const g = e - f - (l > 0 ? 1 : 0);
  if (g > 0) {
    h += _s;
    for (let p = 0; p < g; p++, f++) {
      const d = h >> 16, y = h >> 8 & 255;
      c(f, d, 255 - y, y), h += s;
    }
    h -= _s;
  }
  l > 0 && u(e - 1, h, l);
}
var fn = 1e-9;
function Nu(t) {
  const e = [], n = [], s = t.pts;
  for (let o = 0; o < s.length; o += 2) {
    const r = e.length;
    r >= 2 && Math.abs(e[r - 2] - s[o]) < fn && Math.abs(e[r - 1] - s[o + 1]) < fn || (e.push(s[o], s[o + 1]), n.push(t.smooth[o >> 1] ?? !1));
  }
  if (t.closed && e.length >= 4) {
    const o = e.length;
    Math.abs(e[o - 2] - e[0]) < fn && Math.abs(e[o - 1] - e[1]) < fn && (e.length -= 2, n.length -= 1);
  }
  return n[0] = !1, { pts: e, smooth: n, closed: t.closed };
}
function Bu(t, e, n) {
  const s = e.reduce((p, d) => p + d, 0);
  if (!(s > 0))
    return [t];
  const o = t.pts, r = o.length >> 1, i = t.closed ? r : r - 1;
  if (i < 1)
    return [t];
  let c = n % s;
  c < 0 && (c += s);
  let a = 0;
  for (; c > 0 && c >= e[a]; )
    c -= e[a], a = (a + 1) % e.length;
  let l = e[a] - c, u = a % 2 === 0;
  const h = [];
  let f = u ? { pts: [o[0], o[1]], smooth: [!1], closed: !1 } : null;
  const g = u;
  for (let p = 0; p < i; p++) {
    const d = o[p * 2], y = o[p * 2 + 1], m = (p + 1) % r, M = o[m * 2], b = o[m * 2 + 1], w = Math.hypot(M - d, b - y);
    let x = 0;
    for (; w - x > l; ) {
      x += l;
      const E = x / w, T = d + (M - d) * E, v = y + (b - y) * E;
      u && f ? (f.pts.push(T, v), f.smooth.push(!1), f.pts.length === 4 && Math.abs(f.pts[0] - T) < fn && Math.abs(f.pts[1] - v) < fn && (f.pts.length = 2, f.smooth.length = 1, f.dir = [(M - d) / w, (b - y) / w]), h.push(f), f = null) : f = { pts: [T, v], smooth: [!1], closed: !1, dir: [(M - d) / w, (b - y) / w] }, u = !u, a = (a + 1) % e.length, l = e[a];
    }
    l -= w - x, u && f && (f.pts.push(M, b), f.smooth.push(m === 0 ? !1 : t.smooth[m]));
  }
  if (u && f) {
    if (t.closed && g && h.length > 0) {
      const p = h.shift();
      f.pts.push(...p.pts.slice(2)), f.smooth.push(...p.smooth.slice(1));
    }
    h.push(f);
  }
  for (const p of h)
    p.pts.length > 2 && delete p.dir;
  return h;
}
function Vr(t, e, n, s, o, r, i) {
  const c = Math.ceil(Math.abs(r) / i);
  for (let a = 1; a < c; a++) {
    const l = o + r * a / c;
    t.push(e + s * Math.cos(l), n + s * Math.sin(l));
  }
}
function Yd(t, e, n, s, o, r, i, c, a, l, u, h, f, g, p) {
  const d = e + c * h, y = n + a * h, m = e + l * h, M = n + u * h, b = s * r + o * i, w = s * i - o * r;
  if (t.push(d, y), Math.abs(w) < 1e-12 && b > 0)
    return;
  if (!(c * r + a * i < 0 || Math.abs(w) < 1e-12 && b < 0)) {
    t.push(e, n), t.push(m, M);
    return;
  }
  if (f === "round") {
    const E = Math.atan2(a, c);
    let T = Math.atan2(u, l) - E;
    for (; T <= -Math.PI; )
      T += 2 * Math.PI;
    for (; T > Math.PI; )
      T -= 2 * Math.PI;
    Math.abs(w) < 1e-12 && (T = Math.PI * Math.sign(c * o - a * s)), Vr(t, e, n, h, E, T, p);
  } else if (f === "miter") {
    const E = c * l + a * u, T = Math.sqrt(Math.max(0, (1 + E) / 2));
    if (T > 1e-12 && 1 / T <= g) {
      const v = c + l, I = a + u, P = Math.hypot(v, I);
      if (P > 1e-12) {
        const S = h / T;
        t.push(e + v / P * S, n + I / P * S);
      }
    }
  }
  t.push(m, M);
}
function zd(t, e, n, s) {
  const o = e.lineWidth / 2, r = t.pts, i = r.length >> 1, c = e.lineCap;
  if (i === 1) {
    if (!s || t.closed || c === "butt")
      return [];
    const m = r[0], M = r[1], [b, w] = t.dir ?? [1, 0];
    if (c === "round") {
      const T = [m + o, M];
      return Vr(T, m, M, o, 0, 2 * Math.PI, n), [T];
    }
    const x = -w, E = b;
    return [
      [
        m + (b + x) * o,
        M + (w + E) * o,
        m + (-b + x) * o,
        M + (-w + E) * o,
        m + (-b - x) * o,
        M + (-w - E) * o,
        m + (b - x) * o,
        M + (w - E) * o
      ]
    ];
  }
  const a = t.closed ? i : i - 1, l = new Float64Array(a * 2);
  for (let m = 0; m < a; m++) {
    const M = (m + 1) % i, b = r[M * 2] - r[m * 2], w = r[M * 2 + 1] - r[m * 2 + 1], x = Math.hypot(b, w) || 1;
    l[m * 2] = b / x, l[m * 2 + 1] = w / x;
  }
  const u = (m) => {
    const M = [], b = t.closed ? 0 : 1, w = t.closed ? i - 1 : i - 2;
    t.closed || M.push(r[0] + m * l[1] * o, r[1] - m * l[0] * o);
    for (let x = b; x <= w; x++) {
      const E = (x - 1 + a) % a, T = x % a, v = l[E * 2], I = l[E * 2 + 1], P = l[T * 2], S = l[T * 2 + 1], R = t.smooth[x] ? "round" : e.lineJoin;
      Yd(
        M,
        r[x * 2],
        r[x * 2 + 1],
        v,
        I,
        P,
        S,
        m * I,
        -m * v,
        m * S,
        -m * P,
        o,
        R,
        e.miterLimit,
        n
      );
    }
    if (!t.closed) {
      const x = a - 1;
      M.push(r[(i - 1) * 2] + m * l[x * 2 + 1] * o, r[(i - 1) * 2 + 1] - m * l[x * 2] * o);
    }
    return M;
  }, h = u(1), f = u(-1), g = (m) => {
    const M = [];
    for (let b = m.length - 2; b >= 0; b -= 2)
      M.push(m[b], m[b + 1]);
    return M;
  };
  if (t.closed)
    return [h, g(f)];
  const p = h.slice(), d = (m, M, b, w) => {
    if (c === "square")
      p.push(m + (w + b) * o, M + (-b + w) * o), p.push(m + (-w + b) * o, M + (b + w) * o);
    else if (c === "round") {
      const x = Math.atan2(-b, w);
      Vr(p, m, M, o, x, Math.PI, n);
    }
  }, y = i - 1;
  return d(r[y * 2], r[y * 2 + 1], l[(a - 1) * 2], l[(a - 1) * 2 + 1]), p.push(...g(f)), d(r[0], r[1], -l[0], -l[1]), [p];
}
function Od(t, e, n) {
  const s = bn(e);
  if (!s)
    return [];
  const o = [];
  for (const r of t) {
    const i = { pts: new Array(r.pts.length), smooth: r.smooth, closed: r.closed };
    for (let l = 0; l < r.pts.length; l += 2) {
      const u = r.pts[l], h = r.pts[l + 1];
      i.pts[l] = s[0] * u + s[2] * h + s[4], i.pts[l + 1] = s[1] * u + s[3] * h + s[5];
    }
    const c = Nu(i), a = n.lineDash.length > 0 ? Bu(c, n.lineDash, n.lineDashOffset) : [c];
    for (const l of a) {
      const u = l.pts;
      for (let h = 0; h < u.length; h += 2) {
        const f = u[h], g = u[h + 1];
        u[h] = e[0] * f + e[2] * g + e[4], u[h + 1] = e[1] * f + e[3] * g + e[5];
      }
      o.push({ pts: u, smooth: l.smooth, closed: l.closed });
    }
  }
  return o;
}
function Vc(t, e, n, s) {
  const o = bn(e);
  if (!o || !(n.lineWidth > 0))
    return [];
  const r = Math.max(Math.hypot(e[0], e[1]), Math.hypot(e[2], e[3])), i = Math.max(1e-6, n.lineWidth / 2 * r), c = i <= s ? Math.PI / 2 : Math.max(0.05, 2 * Math.acos(1 - s / i)), a = [];
  for (const l of t) {
    const u = { pts: new Array(l.pts.length), smooth: l.smooth, closed: l.closed };
    for (let p = 0; p < l.pts.length; p += 2) {
      const d = l.pts[p], y = l.pts[p + 1];
      u.pts[p] = o[0] * d + o[2] * y + o[4], u.pts[p + 1] = o[1] * d + o[3] * y + o[5];
    }
    const h = l.pts.length >= 4, f = Nu(u), g = n.lineDash.length > 0 ? Bu(f, n.lineDash, n.lineDashOffset) : [f];
    for (const p of g)
      for (const d of zd(p, n, c, h)) {
        for (let y = 0; y < d.length; y += 2) {
          const m = d[y], M = d[y + 1];
          d[y] = e[0] * m + e[2] * M + e[4], d[y + 1] = e[1] * m + e[3] * M + e[5];
        }
        a.push(d);
      }
  }
  return a;
}
function co(t) {
  const e = /^\s*((?:(?:italic|oblique|normal|bold|bolder|lighter|small-caps|\d{3})\s+)*)([\d.]+)px\s+(.+)$/i.exec(t);
  if (!e)
    return { style: "", weight: "", size: 10, family: "sans-serif" };
  const n = e[1].trim().split(/\s+/).filter(Boolean), s = n.find((r) => /^(italic|oblique)$/i.test(r)) ?? "", o = n.find((r) => /^(bold|bolder|lighter|\d{3})$/i.test(r)) ?? "";
  return { style: s, weight: o, size: parseFloat(e[2]), family: e[3].trim() };
}
function Li(t, e) {
  let n = 0;
  for (const s of t)
    /[ilj.,;:'!|]/.test(s) ? n += 0.28 : /[mwMW@]/.test(s) ? n += 0.83 : /[A-Z0-9]/.test(s) ? n += 0.64 : s === " " ? n += 0.28 : s.charCodeAt(0) > 11903 ? n += 1 : n += 0.52;
  return n * e;
}
function $d(t, e, n, s, o, r, i) {
  const c = co(s).size;
  let a = Li(t, c) * 1.5 + c;
  i !== void 0 && Number.isFinite(i) && i > 0 && (a = Math.min(a, i + c));
  const l = c * 0.3;
  let u, h;
  o === "center" ? (u = e - a / 2, h = e + a / 2) : o === "right" || o === "end" ? (u = e - a, h = e + l) : (u = e - l, h = e + a);
  let f, g;
  switch (r) {
    case "top":
    case "hanging":
      f = 0.3, g = 1.5;
      break;
    case "middle":
      f = 0.9, g = 0.9;
      break;
    case "bottom":
    case "ideographic":
      f = 1.5, g = 0.3;
      break;
    default:
      f = 1.2, g = 0.5;
  }
  return { x0: u, y0: n - f * c, x1: h, y1: n + g * c };
}
var _n = 0.05, lr = null;
function Cd() {
  if (lr)
    return lr;
  const t = Math.fround, e = t(1 / 255), n = new Uint8Array(256 * 256);
  for (let s = 1; s < 256; s++) {
    const o = t(1 / t(s * e));
    for (let r = 0; r < 256; r++) {
      const i = t(t(t(r * e) * o) * 255), c = Math.min(Math.max(i, 0), 255), a = Math.floor(c), l = c - a;
      n[s << 8 | r] = l > 0.5 || l === 0.5 && a % 2 === 1 ? a + 1 : a;
    }
  }
  return lr = n, n;
}
var ce = class {
  constructor(t, e) {
    this.unknown = null, this.textDraws = 0, this.width = Math.max(1, Math.floor(t)), this.height = Math.max(1, Math.floor(e)), this.data = new Uint8ClampedArray(this.width * this.height * 4), this.words = new Uint32Array(this.data.buffer), this.ctx = new Uo(this);
  }
  getContext(t) {
    return this.ctx;
  }
  /** A straight-alpha (non-premultiplied) copy of every pixel, as `getImageData` would return it. */
  get pixels() {
    return this.readRgba(0, 0, this.width, this.height);
  }
  /** Straight-alpha RGBA of a rectangle; pixels outside the surface read as transparent. */
  readRgba(t, e, n, s) {
    const o = new Uint8ClampedArray(Math.max(0, n * s * 4)), { width: r, height: i, data: c } = this;
    for (let a = 0; a < s; a++) {
      const l = e + a;
      if (!(l < 0 || l >= i))
        for (let u = 0; u < n; u++) {
          const h = t + u;
          if (h < 0 || h >= r)
            continue;
          const f = (l * r + h) * 4, g = (a * n + u) * 4, p = c[f + 3];
          if (p === 255)
            o[g] = c[f], o[g + 1] = c[f + 1], o[g + 2] = c[f + 2], o[g + 3] = 255;
          else if (p !== 0) {
            const d = Cd(), y = p << 8;
            o[g] = d[y | c[f]], o[g + 1] = d[y | c[f + 1]], o[g + 2] = d[y | c[f + 2]], o[g + 3] = p;
          }
        }
    }
    return o;
  }
  /**
   * The unknown-pixel flags of a rectangle (see the module doc), or `null`
   * when every pixel in it is known.
   */
  unknownIn(t, e, n, s) {
    const o = this.unknown;
    if (!o)
      return null;
    let r = null;
    for (let i = 0; i < s; i++) {
      const c = e + i;
      if (!(c < 0 || c >= this.height))
        for (let a = 0; a < n; a++) {
          const l = t + a;
          l >= 0 && l < this.width && o[c * this.width + l] && (r ?? (r = new Uint8Array(n * s)), r[i * n + a] = 1);
        }
    }
    return r;
  }
  /** Marks every pixel touched by the device-space polygon `ring` (within `clip`) as unknown. */
  markUnknown(t, e = null) {
    const n = e ? e.box : { x0: 0, y0: 0, x1: this.width, y1: this.height };
    this.unknown ?? (this.unknown = new Uint8Array(this.width * this.height));
    const s = this.unknown;
    Ks([t], "nonzero", n, (o, r, i) => {
      for (let c = r; c < i; c++)
        (!e || Le(e, c, o)) && (s[o * this.width + c] = 1);
    });
  }
};
function Qe(t) {
  return t instanceof ce || t instanceof Uo;
}
var Hd = new Uint8Array(new Uint32Array([1]).buffer)[0] === 1;
function Gd(t, e, n, s) {
  const o = Math.round(t) & 255, r = Math.round(e) & 255, i = Math.round(n) & 255, c = Math.round(s) & 255;
  return (Hd ? c << 24 | i << 16 | r << 8 | o : o << 24 | r << 16 | i << 8 | c) >>> 0;
}
function Le(t, e, n) {
  const s = t.box;
  return e < s.x0 || e >= s.x1 || n < s.y0 || n >= s.y1 ? 0 : t.mask ? t.mask[(n - s.y0) * (s.x1 - s.x0) + (e - s.x0)] : 255;
}
function qc(t, e, n, s) {
  const o = t[e * 2] - t[n * 2], r = t[e * 2 + 1] - t[n * 2 + 1], i = Math.hypot(o, r);
  i > 0 && (t[e * 2] += o / i * s, t[e * 2 + 1] += r / i * s);
}
function jd(t) {
  let e = t.length >> 1;
  if (e === 5 && t[0] === t[8] && t[1] === t[9] && (e = 4), e !== 4)
    return null;
  const n = [t[0], t[2], t[4], t[6]], s = [t[1], t[3], t[5], t[7]];
  if (![...n, ...s].every(Number.isInteger))
    return null;
  const o = s[0] === s[1] && n[1] === n[2] && s[2] === s[3] && n[3] === n[0], r = n[0] === n[1] && s[1] === s[2] && n[2] === n[3] && s[3] === s[0];
  return !o && !r ? null : { x0: Math.min(...n), y0: Math.min(...s), x1: Math.max(...n), y1: Math.max(...s) };
}
function qr(t) {
  var i;
  if (t instanceof ce)
    return { data: t.data, width: t.width, height: t.height };
  if (t instanceof Uo)
    return qr(t.canvas);
  const e = t;
  let n = null;
  if (e && e.data instanceof Uint8ClampedArray && typeof e.width == "number" && typeof e.height == "number")
    n = { data: e.data, width: e.width, height: e.height };
  else if (e && typeof e.getContext == "function" && typeof e.width == "number" && typeof e.height == "number")
    try {
      const c = e.getContext("2d"), a = (i = c == null ? void 0 : c.getImageData) == null ? void 0 : i.call(c, 0, 0, e.width, e.height);
      a && (n = { data: a.data, width: e.width, height: e.height });
    } catch {
      n = null;
    }
  if (!n || n.width <= 0 || n.height <= 0)
    return null;
  const s = n.width * n.height * 4;
  if (n.data.length < s)
    return null;
  const o = new Uint8ClampedArray(s), r = n.data;
  for (let c = 0; c < s; c += 4) {
    const a = r[c + 3];
    if (a === 255)
      o[c] = r[c], o[c + 1] = r[c + 1], o[c + 2] = r[c + 2], o[c + 3] = 255;
    else if (a !== 0) {
      const l = a / 255;
      o[c] = r[c] * l, o[c + 1] = r[c + 1] * l, o[c + 2] = r[c + 2] * l, o[c + 3] = a;
    }
  }
  return { data: o, width: n.width, height: n.height };
}
var Uo = class {
  constructor(t) {
    this.state = {
      transform: [...Bc],
      fillStyle: "#000000",
      strokeStyle: "#000000",
      lineWidth: 1,
      lineCap: "butt",
      lineJoin: "miter",
      miterLimit: 10,
      lineDash: [],
      lineDashOffset: 0,
      globalAlpha: 1,
      gco: "source-over",
      font: "10px sans-serif",
      textAlign: "start",
      textBaseline: "alphabetic",
      imageSmoothingEnabled: !0,
      imageSmoothingQuality: "low",
      clip: null
    }, this.stack = [], this.path = new Gr(), this.flatCache = null, this.rowCache = null, this.px = new Float64Array(4), this.canvas = t;
  }
  // ---- state properties ---------------------------------------------------
  get fillStyle() {
    return this.state.fillStyle;
  }
  set fillStyle(t) {
    this.acceptStyle(t) && (this.state.fillStyle = t);
  }
  get strokeStyle() {
    return this.state.strokeStyle;
  }
  set strokeStyle(t) {
    this.acceptStyle(t) && (this.state.strokeStyle = t);
  }
  acceptStyle(t) {
    return typeof t == "string" && Ui(t) !== null || t instanceof Zs || t instanceof jr;
  }
  get lineWidth() {
    return this.state.lineWidth;
  }
  set lineWidth(t) {
    Number.isFinite(t) && t > 0 && (this.state.lineWidth = t);
  }
  get lineCap() {
    return this.state.lineCap;
  }
  set lineCap(t) {
    (t === "butt" || t === "round" || t === "square") && (this.state.lineCap = t);
  }
  get lineJoin() {
    return this.state.lineJoin;
  }
  set lineJoin(t) {
    (t === "miter" || t === "round" || t === "bevel") && (this.state.lineJoin = t);
  }
  get miterLimit() {
    return this.state.miterLimit;
  }
  set miterLimit(t) {
    Number.isFinite(t) && t > 0 && (this.state.miterLimit = t);
  }
  get lineDashOffset() {
    return this.state.lineDashOffset;
  }
  set lineDashOffset(t) {
    Number.isFinite(t) && (this.state.lineDashOffset = t);
  }
  get globalAlpha() {
    return this.state.globalAlpha;
  }
  set globalAlpha(t) {
    Number.isFinite(t) && t >= 0 && t <= 1 && (this.state.globalAlpha = t);
  }
  get globalCompositeOperation() {
    return this.state.gco;
  }
  set globalCompositeOperation(t) {
    _d(t) && (this.state.gco = t);
  }
  get font() {
    return this.state.font;
  }
  set font(t) {
    this.state.font = t;
  }
  get textAlign() {
    return this.state.textAlign;
  }
  set textAlign(t) {
    this.state.textAlign = t;
  }
  get textBaseline() {
    return this.state.textBaseline;
  }
  set textBaseline(t) {
    this.state.textBaseline = t;
  }
  get imageSmoothingEnabled() {
    return this.state.imageSmoothingEnabled;
  }
  set imageSmoothingEnabled(t) {
    this.state.imageSmoothingEnabled = !!t;
  }
  get imageSmoothingQuality() {
    return this.state.imageSmoothingQuality;
  }
  set imageSmoothingQuality(t) {
    this.state.imageSmoothingQuality = t;
  }
  setLineDash(t) {
    !Array.isArray(t) || t.some((e) => !Number.isFinite(e) || e < 0) || (this.state.lineDash = t.length % 2 ? [...t, ...t] : [...t]);
  }
  getLineDash() {
    return [...this.state.lineDash];
  }
  // ---- state stack & transforms -----------------------------------------
  save() {
    this.stack.push({ ...this.state, transform: [...this.state.transform], lineDash: [...this.state.lineDash] });
  }
  restore() {
    const t = this.stack.pop();
    t && (this.state = t);
  }
  getTransform() {
    const [t, e, n, s, o, r] = this.state.transform;
    return { a: t, b: e, c: n, d: s, e: o, f: r };
  }
  setTransform(t, e, n, s, o, r) {
    const i = typeof t == "object" ? [t.a ?? 1, t.b ?? 0, t.c ?? 0, t.d ?? 1, t.e ?? 0, t.f ?? 0] : [t, e, n, s, o, r];
    i.every(Number.isFinite) && (this.state.transform = i);
  }
  resetTransform() {
    this.state.transform = [...Bc];
  }
  transform(t, e, n, s, o, r) {
    [t, e, n, s, o, r].every(Number.isFinite) && (this.state.transform = Hr(this.state.transform, [t, e, n, s, o, r]));
  }
  translate(t, e) {
    this.transform(1, 0, 0, 1, t, e);
  }
  scale(t, e) {
    this.transform(t, 0, 0, e, 0, 0);
  }
  rotate(t) {
    const e = Math.cos(t), n = Math.sin(t);
    this.transform(e, n, -n, e, 0, 0);
  }
  // ---- path construction -------------------------------------------------
  beginPath() {
    this.path.reset();
  }
  closePath() {
    this.path.closePath();
  }
  moveTo(t, e) {
    this.path.moveTo(this.state.transform, t, e);
  }
  lineTo(t, e) {
    this.path.lineTo(this.state.transform, t, e);
  }
  bezierCurveTo(t, e, n, s, o, r) {
    this.path.bezierCurveTo(this.state.transform, t, e, n, s, o, r);
  }
  quadraticCurveTo(t, e, n, s) {
    this.path.quadraticCurveTo(this.state.transform, t, e, n, s);
  }
  arc(t, e, n, s, o, r = !1) {
    this.path.arc(this.state.transform, t, e, n, s, o, r);
  }
  arcTo(t, e, n, s, o) {
    this.path.arcTo(this.state.transform, t, e, n, s, o);
  }
  ellipse(t, e, n, s, o, r, i, c = !1) {
    this.path.ellipse(this.state.transform, t, e, n, s, o, r, i, c);
  }
  rect(t, e, n, s) {
    this.path.rect(this.state.transform, t, e, n, s);
  }
  /** The current path flattened in device space (cached until the path changes). */
  flattened() {
    const t = this.path.segs, e = this.flatCache;
    if (e && e.segs === t && e.length === t.length)
      return e.polys;
    const n = qs(t, _n);
    return this.flatCache = { segs: t, length: t.length, polys: n }, this.rowCache = null, n;
  }
  strokeParams() {
    const t = this.state;
    return {
      lineWidth: t.lineWidth,
      lineCap: t.lineCap,
      lineJoin: t.lineJoin,
      miterLimit: t.miterLimit,
      lineDash: t.lineDash,
      lineDashOffset: t.lineDashOffset
    };
  }
  // ---- painting ------------------------------------------------------------
  surfaceBounds() {
    const t = this.state.clip, e = { x0: 0, y0: 0, x1: this.canvas.width, y1: this.canvas.height };
    return t && (e.x0 = Math.max(e.x0, t.box.x0), e.y0 = Math.max(e.y0, t.box.y0), e.x1 = Math.min(e.x1, t.box.x1), e.y1 = Math.min(e.y1, t.box.y1)), e;
  }
  /**
   * Paints `rings` (device space) with `shader` under the current clip,
   * `globalAlpha` and `globalCompositeOperation`.
   */
  paintRings(t, e, n) {
    var w;
    if (!n || t.length === 0)
      return;
    const s = this.surfaceBounds();
    if (s.x1 <= s.x0 || s.y1 <= s.y0)
      return;
    const o = this.state.gco;
    if (Fd.has(o)) {
      this.paintUnbounded(t, e, n, s);
      return;
    }
    const r = this.state.globalAlpha;
    if (r <= 0)
      return;
    const { data: i, width: c } = this.canvas, a = (w = this.state.clip) != null && w.mask ? this.state.clip : null, l = this.canvas.unknown, u = this.px, h = n.solid, f = h ? null : n.shade, g = h ? h[0] * r / 255 : 0, p = h ? h[1] * r / 255 : 0, d = h ? h[2] * r / 255 : 0, y = h ? h[3] * r / 255 : 0;
    if (h && y <= 0 && (o === "source-over" || o === "destination-out" || o === "source-atop" || o === "lighter" || o === "xor"))
      return;
    const m = h !== void 0 && y >= 1 && o === "source-over", M = m ? this.canvas.words : null, b = h ? Gd(h[0], h[1], h[2], 255) : 0;
    Ks(t, e, s, (x, E, T, v) => {
      const I = x * c;
      if (M && v === 255 && !a) {
        M.fill(b, I + E, I + T), l && l.fill(0, I + E, I + T);
        return;
      }
      let P = (I + E) * 4, S = I + E;
      for (let R = E; R < T; R++, P += 4, S++) {
        let U = v;
        if (a && (U = U * Le(a, R, x) / 255), U <= 0)
          continue;
        const A = U >= 255 ? 1 : U / 255;
        let k = g, L = p, D = d, N = y;
        if (f) {
          if (!f(R, x, u))
            continue;
          k = u[0] * r / 255, L = u[1] * r / 255, D = u[2] * r / 255, N = u[3] * r / 255;
        }
        m && A === 1 ? (i[P] = h[0], i[P + 1] = h[1], i[P + 2] = h[2], i[P + 3] = 255) : Qs(i, P, k, L, D, N, A, o), l && l[S] && A === 1 && N >= 0.9999 && (o === "source-over" || o === "destination-out") && (l[S] = 0);
      }
    });
  }
  /** Operators that clear the destination outside the shape: the whole clip area is composited. */
  paintUnbounded(t, e, n, s) {
    const o = s.x1 - s.x0, r = s.y1 - s.y0, i = new Uint8Array(o * r);
    Ks(t, e, s, (p, d, y, m) => {
      const M = (p - s.y0) * o - s.x0;
      i.fill(m, M + d, M + y);
    });
    const { data: c, width: a } = this.canvas, l = this.state.clip, u = this.canvas.unknown, h = this.state.globalAlpha, f = this.state.gco, g = this.px;
    for (let p = s.y0; p < s.y1; p++)
      for (let d = s.x0; d < s.x1; d++) {
        const y = l ? Le(l, d, p) / 255 : 1;
        if (y <= 0)
          continue;
        const m = i[(p - s.y0) * o + (d - s.x0)] / 255;
        let M = 0, b = 0, w = 0, x = 0;
        if (m > 0) {
          n.solid ? [M, b, w, x] = n.solid : n.shade(d, p, g) && ([M, b, w, x] = g);
          const T = m * h / 255;
          M *= T, b *= T, w *= T, x *= T;
        }
        const E = p * a + d;
        Qs(c, E * 4, M, b, w, x, y, f), u && y >= 1 && f === "copy" && (u[E] = 0);
      }
  }
  fill(t = "nonzero") {
    const e = this.flattened();
    this.paintRings(
      e.map((n) => n.pts),
      t === "evenodd" ? "evenodd" : "nonzero",
      Fs(this.state.fillStyle, this.state.transform, this.state.imageSmoothingEnabled)
    );
  }
  stroke() {
    this.strokeSegs(this.path.segs, this.flattened());
  }
  /**
   * Strokes device-space segments: as Skia hairlines when the stroke is at
   * most one device pixel wide (see `software-raster-hairline.ts`),
   * otherwise as an outline polygon.
   */
  strokeSegs(t, e) {
    const n = Fs(this.state.strokeStyle, this.state.transform, this.state.imageSmoothingEnabled);
    if (!n)
      return;
    const s = Nd(this.state.transform, this.state.lineWidth);
    if (s === null) {
      const l = Vc(e, this.state.transform, this.strokeParams(), _n);
      this.paintRings(l, "nonzero", n);
      return;
    }
    const o = Od(qs(t, _n, Bd), this.state.transform, this.strokeParams()), r = this.state.lineCap === "square" ? 0.5 : this.state.lineCap === "round" ? Math.PI / 8 : 0, { width: i, height: c } = this.canvas, a = this.hairlinePlotter(n, s);
    for (const l of o) {
      const u = l.pts.slice(), h = u.length >> 1;
      if (h < 2)
        continue;
      r && !l.closed && (qc(u, 0, 1, r), qc(u, h - 1, h - 2, r));
      const f = l.closed ? h : h - 1;
      for (let g = 0; g < f; g++) {
        const p = (g + 1) % h;
        Xd(u[g * 2], u[g * 2 + 1], u[p * 2], u[p * 2 + 1], i, c, a);
      }
    }
  }
  /** Composites single hairline pixels with the paint, clip, alpha and operator. */
  hairlinePlotter(t, e) {
    const { data: n, width: s, height: o } = this.canvas, r = this.state.clip, i = this.state.gco, c = this.state.globalAlpha * Math.min(1, e), a = this.px;
    return (l, u, h) => {
      if (l < 0 || u < 0 || l >= s || u >= o)
        return;
      let f = h / 255;
      if (r && (f *= Le(r, l, u) / 255), f <= 0)
        return;
      let g, p, d, y;
      if (t.solid)
        [g, p, d, y] = t.solid;
      else {
        if (!t.shade(l, u, a))
          return;
        [g, p, d, y] = a;
      }
      const m = c / 255;
      Qs(n, (u * s + l) * 4, g * m, p * m, d * m, y * m, f, i);
    };
  }
  rectRing(t, e, n, s) {
    const o = this.state.transform, r = [
      [t, e],
      [t + n, e],
      [t + n, e + s],
      [t, e + s]
    ], i = [];
    for (const [c, a] of r)
      i.push(o[0] * c + o[2] * a + o[4], o[1] * c + o[3] * a + o[5]);
    return i;
  }
  fillRect(t, e, n, s) {
    ![t, e, n, s].every(Number.isFinite) || n === 0 || s === 0 || this.paintRings(
      [this.rectRing(t, e, n, s)],
      "nonzero",
      Fs(this.state.fillStyle, this.state.transform, this.state.imageSmoothingEnabled)
    );
  }
  strokeRect(t, e, n, s) {
    if (![t, e, n, s].every(Number.isFinite))
      return;
    const o = new Gr();
    o.rect(this.state.transform, t, e, n, s), this.strokeSegs(o.segs, qs(o.segs, _n));
  }
  clearRect(t, e, n, s) {
    if (![t, e, n, s].every(Number.isFinite) || n === 0 || s === 0)
      return;
    const o = { gco: this.state.gco, ga: this.state.globalAlpha };
    this.state.gco = "destination-out", this.state.globalAlpha = 1, this.paintRings([this.rectRing(t, e, n, s)], "nonzero", { solid: [0, 0, 0, 255] }), this.state.gco = o.gco, this.state.globalAlpha = o.ga;
  }
  clip(t = "nonzero") {
    const e = this.surfaceBounds(), n = this.state.clip, s = this.flattened().filter((a) => a.pts.length >= 6).map((a) => a.pts), o = { box: { x0: 0, y0: 0, x1: 0, y1: 0 }, mask: null }, r = s.length === 1 ? jd(s[0]) : null;
    if (r) {
      const a = {
        x0: Math.max(e.x0, r.x0),
        y0: Math.max(e.y0, r.y0),
        x1: Math.min(e.x1, r.x1),
        y1: Math.min(e.y1, r.y1)
      };
      if (a.x1 <= a.x0 || a.y1 <= a.y0) {
        this.state.clip = o;
        return;
      }
      let l = null;
      if (n != null && n.mask) {
        const u = a.x1 - a.x0;
        l = new Uint8Array(u * (a.y1 - a.y0));
        for (let h = a.y0; h < a.y1; h++)
          for (let f = a.x0; f < a.x1; f++)
            l[(h - a.y0) * u + (f - a.x0)] = Le(n, f, h);
      }
      this.state.clip = { box: a, mask: l };
      return;
    }
    let i = o, c = null;
    for (const a of s)
      for (let l = 0; l + 1 < a.length; l += 2) {
        const u = a[l], h = a[l + 1];
        c ?? (c = { x0: 1 / 0, y0: 1 / 0, x1: -1 / 0, y1: -1 / 0 }), c.x0 = Math.min(c.x0, u), c.y0 = Math.min(c.y0, h), c.x1 = Math.max(c.x1, u), c.y1 = Math.max(c.y1, h);
      }
    if (c && Number.isFinite(c.x0 + c.x1 + c.y0 + c.y1)) {
      const a = {
        x0: Math.max(e.x0, Math.floor(c.x0)),
        y0: Math.max(e.y0, Math.floor(c.y0)),
        x1: Math.min(e.x1, Math.ceil(c.x1)),
        y1: Math.min(e.y1, Math.ceil(c.y1))
      };
      if (a.x1 > a.x0 && a.y1 > a.y0) {
        const l = a.x1 - a.x0, u = new Uint8Array(l * (a.y1 - a.y0));
        Ks(s, t === "evenodd" ? "evenodd" : "nonzero", a, (f, g, p, d) => {
          const y = (f - a.y0) * l - a.x0;
          if (!(n != null && n.mask)) {
            u.fill(d, y + g, y + p);
            return;
          }
          for (let m = g; m < p; m++)
            u[y + m] = Math.round(d * Le(n, m, f) / 255);
        }) && (i = { box: a, mask: u });
      }
    }
    this.state.clip = i;
  }
  /**
   * The active clip's coverage (0..255) over a device rectangle, or `null`
   * when nothing is clipped.
   */
  clipCoverage(t, e, n, s) {
    const o = this.state.clip;
    if (!o)
      return null;
    const r = new Uint8Array(Math.max(0, n * s));
    for (let i = 0; i < s; i++)
      for (let c = 0; c < n; c++)
        r[i * n + c] = Le(o, t + c, e + i);
    return r;
  }
  isPointInPath(t, e, n = "nonzero") {
    if (!Number.isFinite(t) || !Number.isFinite(e))
      return !1;
    const s = this.flattened(), o = `${e}`;
    let r = this.rowCache;
    if (!r || r.key !== o) {
      const a = [], l = [];
      for (const g of s) {
        const p = g.pts, d = p.length >> 1;
        if (!(d < 2))
          for (let y = 0; y < d; y++) {
            const m = y + 1 < d ? y + 1 : 0, M = p[y * 2], b = p[y * 2 + 1], w = p[m * 2], x = p[m * 2 + 1];
            (b <= e ? x > e : x <= e) && (a.push(M + (e - b) * (w - M) / (x - b)), l.push(x > b ? 1 : -1));
          }
      }
      const u = a.map((g, p) => p).sort((g, p) => a[g] - a[p]), h = new Float64Array(u.length), f = new Int32Array(u.length + 1);
      for (let g = 0; g < u.length; g++)
        h[g] = a[u[g]];
      for (let g = u.length - 1; g >= 0; g--)
        f[g] = f[g + 1] + l[u[g]];
      r = { key: o, xs: h, suffixWinding: f, count: u.length }, this.rowCache = r;
    }
    let i = 0, c = r.count;
    for (; i < c; ) {
      const a = i + c >> 1;
      r.xs[a] > t ? c = a : i = a + 1;
    }
    return n === "evenodd" ? (r.count - i & 1) === 1 : r.suffixWinding[i] !== 0;
  }
  isPointInStroke(t, e) {
    const n = Vc(this.flattened(), this.state.transform, this.strokeParams(), _n);
    return Fu(
      n.map((s) => ({ pts: s, smooth: [], closed: !0 })),
      t,
      e,
      "nonzero"
    );
  }
  // ---- gradients & patterns ---------------------------------------------
  createLinearGradient(t, e, n, s) {
    return new Zs("linear", [t, e, n, s]);
  }
  createRadialGradient(t, e, n, s, o, r) {
    if (n < 0 || r < 0)
      throw new RangeError("The radius provided is negative");
    return new Zs("radial", [t, e, n, s, o, r]);
  }
  createPattern(t, e) {
    const n = qr(t);
    if (!n)
      return null;
    const s = e === "repeat-x" || e === "repeat-y" || e === "no-repeat" ? e : "repeat";
    return new jr(n.data.slice(), n.width, n.height, s);
  }
  // ---- text ------------------------------------------------------------------
  measureText(t) {
    const e = co(this.state.font).size, n = Li(String(t), e);
    return {
      width: n,
      actualBoundingBoxLeft: 0,
      actualBoundingBoxRight: n,
      actualBoundingBoxAscent: e * 0.8,
      actualBoundingBoxDescent: e * 0.2,
      fontBoundingBoxAscent: e * 0.9,
      fontBoundingBoxDescent: e * 0.25
    };
  }
  /** Glyphs cannot be rasterised without a font engine; see the module doc. */
  fillText(t, e, n, s) {
    this.recordText(t, e, n, s, this.state.fillStyle);
  }
  strokeText(t, e, n, s) {
    this.recordText(t, e, n, s, this.state.strokeStyle);
  }
  recordText(t, e, n, s, o) {
    const r = String(t ?? "");
    if (!r.trim() || ![e, n].every(Number.isFinite) || this.state.globalAlpha <= 0)
      return;
    const i = Fs(o, this.state.transform, !0);
    if (!i || i.solid && i.solid[3] <= 0)
      return;
    this.canvas.textDraws++;
    const c = $d(r, e, n, this.state.font, this.state.textAlign, this.state.textBaseline, s), a = this.state.transform, l = [];
    for (const [u, h] of [
      [c.x0, c.y0],
      [c.x1, c.y0],
      [c.x1, c.y1],
      [c.x0, c.y1]
    ])
      l.push(a[0] * u + a[2] * h + a[4], a[1] * u + a[3] * h + a[5]);
    this.canvas.markUnknown(l, this.state.clip);
  }
  // ---- images & pixels -------------------------------------------------
  /**
   * `drawImage(src, dx, dy)`, `(src, dx, dy, dw, dh)` or
   * `(src, sx, sy, sw, sh, dx, dy, dw, dh)`, from another software raster,
   * any `{ data, width, height }` pixel holder, or a canvas-like object
   * exposing `getContext('2d').getImageData`.
   */
  drawImage(t, ...e) {
    let n = qr(t);
    if (!n)
      return;
    (t === this.canvas || t === this) && (n = { ...n, data: n.data.slice() });
    let s = 0, o = 0, r = n.width, i = n.height, c, a, l, u;
    if (e.length >= 8 ? [s, o, r, i, c, a, l, u] = e : e.length >= 4 ? [c, a, l, u] = e : ([c, a] = e, l = r, u = i), ![s, o, r, i, c, a, l, u].every(Number.isFinite) || !r || !i || !l || !u)
      return;
    r < 0 && (s += r, r = -r), i < 0 && (o += i, i = -i), l < 0 && (c += l, l = -l), u < 0 && (a += u, u = -u);
    const h = l / r, f = u / i, g = Math.max(0, s), p = Math.max(0, o), d = Math.min(n.width, s + r), y = Math.min(n.height, o + i);
    if (d <= g || y <= p)
      return;
    c += (g - s) * h, a += (p - o) * f, s = g, o = p, r = d - g, i = y - p;
    const m = [h, 0, 0, f, c - s * h, a - o * f], M = Hr(this.state.transform, m), b = Du(
      {
        data: n.data,
        width: n.width,
        height: n.height,
        wrapX: !1,
        wrapY: !1,
        minX: Math.floor(s),
        minY: Math.floor(o),
        maxX: Math.ceil(s + r),
        maxY: Math.ceil(o + i),
        transparentOutside: !1,
        smooth: this.state.imageSmoothingEnabled
      },
      M
    ), w = M, x = [];
    for (const [E, T] of [
      [s, o],
      [s + r, o],
      [s + r, o + i],
      [s, o + i]
    ])
      x.push(w[0] * E + w[2] * T + w[4], w[1] * E + w[3] * T + w[5]);
    this.paintRings([x], "nonzero", b);
  }
  createImageData(t, e) {
    const n = Math.abs(Math.floor(t)) || 1, s = Math.abs(Math.floor(e)) || 1;
    return { data: new Uint8ClampedArray(n * s * 4), width: n, height: s };
  }
  getImageData(t, e, n, s) {
    let o = Math.floor(t), r = Math.floor(e), i = Math.floor(n), c = Math.floor(s);
    return i < 0 && (o += i, i = -i), c < 0 && (r += c, c = -c), { data: this.canvas.readRgba(o, r, i, c), width: i, height: c, colorSpace: "srgb" };
  }
  putImageData(t, e, n, s = 0, o = 0, r = t.width, i = t.height) {
    const { width: c, height: a, data: l } = this.canvas, u = this.canvas.unknown, h = Math.round(e), f = Math.round(n);
    r < 0 && (s += r, r = -r), i < 0 && (o += i, i = -i);
    const g = Math.max(0, Math.floor(s)), p = Math.max(0, Math.floor(o)), d = Math.min(t.width, Math.floor(s + r)), y = Math.min(t.height, Math.floor(o + i)), m = t.data;
    for (let M = p; M < y; M++) {
      const b = f + M;
      if (!(b < 0 || b >= a))
        for (let w = g; w < d; w++) {
          const x = h + w;
          if (x < 0 || x >= c)
            continue;
          const E = (M * t.width + w) * 4, T = (b * c + x) * 4, v = m[E + 3];
          if (v === 255)
            l[T] = m[E], l[T + 1] = m[E + 1], l[T + 2] = m[E + 2];
          else {
            const I = v / 255;
            l[T] = m[E] * I, l[T + 1] = m[E + 1] * I, l[T + 2] = m[E + 2] * I;
          }
          l[T + 3] = v, u && (u[b * c + x] = 0);
        }
    }
  }
};
function Jc(t) {
  return t.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F￾￿]/g, "").replace(new RegExp("[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?<![\\uD800-\\uDBFF])[\\uDC00-\\uDFFF]", "g"), "�").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Xu(t, e) {
  e.push("<", t.tag);
  for (const n of Object.keys(t.attrs))
    e.push(" ", n, '="', Jc(String(t.attrs[n])), '"');
  if (t.text !== void 0) {
    e.push(">", Jc(t.text), "</", t.tag, ">");
    return;
  }
  if (!t.children || t.children.length === 0) {
    e.push("/>");
    return;
  }
  e.push(">");
  for (const n of t.children)
    Xu(n, e);
  e.push("</", t.tag, ">");
}
function Fi(t) {
  const e = [];
  return Xu(t, e), e.join("");
}
var Se = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function ao(t) {
  const e = [];
  for (let s = 0; s < t.length; s += 12288) {
    const o = Math.min(t.length, s + 12288);
    let r = "", i = s;
    for (; i + 2 < o; i += 3) {
      const c = t[i] << 16 | t[i + 1] << 8 | t[i + 2];
      r += Se[c >> 18] + Se[c >> 12 & 63] + Se[c >> 6 & 63] + Se[c & 63];
    }
    if (i < o) {
      const c = t[i] << 16 | (i + 1 < o ? t[i + 1] : 0) << 8;
      r += Se[c >> 18] + Se[c >> 12 & 63] + (i + 1 < o ? Se[c >> 6 & 63] : "=") + "=";
    }
    e.push(r);
  }
  return e.join("");
}
function Wd(t) {
  if (typeof TextEncoder < "u")
    return new TextEncoder().encode(t);
  const e = [];
  for (const n of t) {
    const s = n.codePointAt(0);
    s < 128 ? e.push(s) : s < 2048 ? e.push(192 | s >> 6, 128 | s & 63) : s < 65536 ? e.push(224 | s >> 12, 128 | s >> 6 & 63, 128 | s & 63) : e.push(240 | s >> 18, 128 | s >> 12 & 63, 128 | s >> 6 & 63, 128 | s & 63);
  }
  return Uint8Array.from(e);
}
function Yu(t) {
  return `data:image/svg+xml;base64,${ao(Wd(t))}`;
}
function zu(t) {
  return Yu(Fi(t));
}
var Vd = {
  class: "className",
  "xml:space": "xmlSpace",
  "xlink:href": "xlinkHref",
  "xmlns:xlink": "xmlnsXlink"
};
function Ou(t) {
  const e = Vd[t];
  return e || (t.startsWith("data-") || t.startsWith("aria-") ? t : t.replace(/[-:]([a-z])/g, (n, s) => s.toUpperCase()));
}
function $u(t) {
  const e = {};
  for (const n of t.split(";")) {
    const s = n.indexOf(":");
    if (s <= 0)
      continue;
    const o = n.slice(0, s).trim(), r = n.slice(s + 1).trim();
    if (!o)
      continue;
    const i = o.startsWith("--") ? o : o.replace(/-([a-z])/g, (c, a) => a.toUpperCase());
    e[i] = r;
  }
  return e;
}
function qd(t) {
  const e = {};
  for (const n of Object.keys(t)) {
    const s = t[n];
    n === "style" ? e.style = $u(String(s)) : e[Ou(n)] = s;
  }
  return e;
}
function Jd(t, e, n) {
  let s = 0;
  const o = (c, a) => {
    const l = { key: s++, ...qd(c.attrs), ...a };
    if (c.text !== void 0)
      return e(c.tag, l, c.text);
    const u = (c.children ?? []).map((h) => o(h));
    return e(c.tag, l, ...u);
  }, { key: r, ...i } = n ?? {};
  return o(t, i);
}
function ur(t) {
  return JSON.stringify(t);
}
function Kd(t, e) {
  if (t === "style") {
    const n = $u(String(e));
    return `{{ ${Object.keys(n).map((o) => `${/^[a-zA-Z_$][\w$]*$/.test(o) ? o : ur(o)}: ${ur(n[o])}`).join(", ")} }}`;
  }
  return typeof e == "number" ? Number.isFinite(e) ? `{${e}}` : "{0}" : /^[^"\\{}<>&\r\n]*$/.test(e) ? `"${e}"` : `{${ur(e)}}`;
}
function Zd(t) {
  return `{${JSON.stringify(t)}}`;
}
function Cu(t, e, n, s) {
  const o = "	".repeat(e), r = Object.keys(t.attrs).map((c) => `${Ou(c)}=${Kd(c, t.attrs[c])}`);
  s && r.push("{...props}");
  const i = `${o}<${t.tag}${r.length ? " " + r.join(" ") : ""}`;
  if (t.text !== void 0) {
    n.push(`${i}>${Zd(t.text)}</${t.tag}>`);
    return;
  }
  if (!t.children || t.children.length === 0) {
    n.push(`${i} />`);
    return;
  }
  n.push(`${i}>`);
  for (const c of t.children)
    Cu(c, e + 1, n, !1);
  n.push(`${o}</${t.tag}>`);
}
function Qd(t, e = {}) {
  const n = e.componentName ?? "Metafile";
  if (!/^[A-Z][A-Za-z0-9_$]*$/.test(n))
    throw new TypeError(`svgTreeToJsx: componentName must be a PascalCase identifier, got ${JSON.stringify(n)}`);
  const s = e.typescript ?? !0, o = e.spreadProps ?? !0, r = [];
  Cu(t, 2, r, o);
  const i = o ? s ? "props: SVGProps<SVGSVGElement>" : "props" : "";
  return [
    ...s && o ? ["import type { SVGProps } from 'react';", ""] : [],
    `export function ${n}(${i}) {`,
    "	return (",
    ...r,
    "	);",
    "}",
    "",
    `export default ${n};`,
    ""
  ].join(`
`);
}
var et;
async function Hu() {
  if (et !== void 0)
    return et;
  if (typeof OffscreenCanvas < "u" || typeof document < "u" || typeof process > "u" || !(dn != null && dn.node))
    return et = null, et;
  try {
    et = await Promise.resolve().then(() => fw);
  } catch {
    et = null;
  }
  return et;
}
function Di() {
  return typeof OffscreenCanvas > "u" && typeof document > "u" && !et;
}
var In = 1;
function Gu(t, e, n, s, o = In, r = io) {
  const i = Math.max(1, Math.min(o, 4));
  let c = Math.round(t * i), a = Math.round(e * i), l = i, u = i;
  if (n && c > n) {
    const p = n / c;
    c = n, a = Math.round(a * p), l *= p, u *= p;
  }
  if (s && a > s) {
    const p = s / a;
    c = Math.round(c * p), a = s, l *= p, u *= p;
  }
  const h = Math.max(1, Math.floor(r)), f = Math.max(1, Math.min(c, h)), g = Math.max(1, Math.min(a, h));
  return (f !== c || g !== a) && console.warn(
    `[emf-converter] Canvas size clamped from ${c}×${a} to ${f}×${g}. Output may lose detail.`
  ), { w: f, h: g, scaleX: l, scaleY: u };
}
function _i(t, e, n, s, o = In, r = io) {
  const { w: i, h: c, scaleX: a, scaleY: l } = Gu(t, e, n, s, o, r);
  try {
    if (Di()) {
      X(`createCanvas: using the software rasteriser ${i}×${c}`);
      const u = new ce(i, c);
      return { canvas: u, ctx: u.ctx, scaleX: a, scaleY: l };
    }
    if (typeof OffscreenCanvas < "u") {
      X(
        `createCanvas: using OffscreenCanvas ${i}×${c}, scale=(${a.toFixed(3)},${l.toFixed(3)})`
      );
      const u = new OffscreenCanvas(i, c), h = u.getContext("2d");
      return h ? { canvas: u, ctx: h, scaleX: a, scaleY: l } : (H('createCanvas: OffscreenCanvas.getContext("2d") returned null'), null);
    }
    if (typeof document < "u") {
      X(
        `createCanvas: using HTMLCanvasElement ${i}×${c}, scale=(${a.toFixed(3)},${l.toFixed(3)})`
      );
      const u = document.createElement("canvas");
      u.width = i, u.height = c;
      const h = u.getContext("2d");
      return h ? { canvas: u, ctx: h, scaleX: a, scaleY: l } : (H('createCanvas: HTMLCanvasElement.getContext("2d") returned null'), null);
    }
    if (et) {
      X(
        `createCanvas: using @napi-rs/canvas ${i}×${c}, scale=(${a.toFixed(3)},${l.toFixed(3)})`
      );
      const u = et.createCanvas(i, c), h = u.getContext("2d");
      return h ? { canvas: u, ctx: h, scaleX: a, scaleY: l } : (H('createCanvas: @napi-rs/canvas getContext("2d") returned null'), null);
    }
    return H(
      "createCanvas: no OffscreenCanvas, no document, and no @napi-rs/canvas, cannot create canvas"
    ), null;
  } catch {
    return null;
  }
}
function W(t, e) {
  if (t <= 0 || e <= 0)
    return null;
  if (t = Math.max(1, Math.min(Math.floor(t), io)), e = Math.max(1, Math.min(Math.floor(e), io)), typeof OffscreenCanvas < "u") {
    const s = new OffscreenCanvas(t, e), o = s.getContext("2d");
    return o ? { canvas: s, ctx: o } : null;
  }
  if (typeof document < "u") {
    const s = document.createElement("canvas");
    s.width = t, s.height = e;
    const o = s.getContext("2d");
    return o ? { canvas: s, ctx: o } : null;
  }
  if (et) {
    const s = et.createCanvas(t, e), o = s.getContext("2d");
    return o ? { canvas: s, ctx: o } : null;
  }
  const n = new ce(t, e);
  return { canvas: n, ctx: n.ctx };
}
function jt(t) {
  switch (t) {
    case a1:
      return { gco: "source-over", colorTransform: "black", exact: !0 };
    case f1:
      return { gco: "source-over", colorTransform: "white", exact: !0 };
    case h1:
      return { gco: "source-over", colorTransform: "skip", exact: !0 };
    case l1:
      return { gco: "source-over", colorTransform: "invert", exact: !0 };
    case u1:
      return { gco: "difference", colorTransform: "white", exact: !0 };
    case Wl:
    case jl:
      return { gco: "difference", colorTransform: "none", exact: !1 };
    case Jl:
      return { gco: "difference", colorTransform: "invert", exact: !1 };
    case ql:
      return { gco: "darken", colorTransform: "none", exact: !1 };
    case Gl:
    case Hl:
      return { gco: "darken", colorTransform: "invert", exact: !1 };
    case Ql:
    case Zl:
      return { gco: "lighten", colorTransform: "none", exact: !1 };
    case Kl:
    case Vl:
      return { gco: "lighten", colorTransform: "invert", exact: !1 };
    default:
      return { gco: "source-over", colorTransform: "none", exact: !0 };
  }
}
function ko(t, e) {
  switch (e) {
    case "invert":
      return X0(t);
    case "black":
      return "#000000";
    case "white":
      return "#ffffff";
    case "skip":
      return "rgba(0,0,0,0)";
    default:
      return t;
  }
}
function Ni(t, e) {
  const n = jt(e.rop2);
  if (t.globalCompositeOperation = n.gco, e.penStyle === 5) {
    t.strokeStyle = "rgba(0,0,0,0)", t.lineWidth = 0;
    return;
  }
  t.strokeStyle = ko(e.penColor, n.colorTransform), t.lineWidth = Math.max(e.penWidth, 1), t.setLineDash(e.penWidth <= 1 ? Ai(e.penStyle, e.penUserStyle) ?? [] : []);
}
function Bi(t, e) {
  const n = jt(e.rop2);
  if (t.globalCompositeOperation = n.gco, Gt(e).kind === "none") {
    t.fillStyle = "rgba(0,0,0,0)";
    return;
  }
  t.fillStyle = ko(e.brushColor, n.colorTransform);
}
function ty(t) {
  if (!t || t === 400)
    return "";
  const e = Math.round(t / 100) * 100;
  return e === 700 ? "bold" : e >= 100 && e <= 900 ? String(e) : t >= 700 ? "bold" : "";
}
function lo(t, e) {
  const n = (e == null ? void 0 : e[t.toLowerCase().trim()]) ?? t;
  return /[\s,]/.test(n) && !/^["']/.test(n) ? `"${n}"` : n;
}
function Xi(t, e = 1) {
  return Math.max(J0(t.fontHeight) * Math.abs(e || 1), 8);
}
function ey(t, e, n = 1) {
  const s = e.fontItalic ? "italic " : "", o = ty(e.fontWeight), r = o ? `${o} ` : "", i = Xi(e, n), c = lo(e.fontFamily, e.fontFamilyMap);
  t.font = `${s}${r}${i}px ${c}`;
}
function ny(t, e, n, s, o, r = 1) {
  if (!e.fontUnderline && !e.fontStrikeOut)
    return;
  const i = Xi(e, r), c = Math.max(1, Math.round(i / 14)), a = t.fillStyle;
  t.fillStyle = e.textColor, e.fontUnderline && t.fillRect(n, s + Math.round(i * 0.12), o, c), e.fontStrikeOut && t.fillRect(n, s - Math.round(i * 0.3), o, c), t.fillStyle = a;
}
function hs(t, e, n) {
  if (n <= 0)
    return "";
  const s = t.byteLength - e;
  if (s <= 0)
    return "";
  const o = Math.min(n, Math.floor(s / 2));
  if (o <= 0)
    return "";
  let r;
  try {
    const c = new Uint8Array(t.buffer, t.byteOffset + e, o * 2);
    r = new TextDecoder("utf-16le").decode(c);
  } catch {
    const c = [];
    for (let a = 0; a < o; a++) {
      const l = t.getUint16(e + a * 2, !0);
      if (l === 0)
        return c.join("");
      c.push(String.fromCharCode(l));
    }
    return c.join("");
  }
  const i = r.indexOf("\0");
  return i === -1 ? r : r.slice(0, i);
}
function ju(t) {
  switch (t) {
    case 0:
      return { kind: "brush", style: 0, color: "#ffffff" };
    case 1:
      return { kind: "brush", style: 0, color: "#c0c0c0" };
    case 2:
      return { kind: "brush", style: 0, color: "#808080" };
    case 3:
      return { kind: "brush", style: 0, color: "#404040" };
    case 4:
      return { kind: "brush", style: 0, color: "#000000" };
    case 5:
      return { kind: "brush", style: 1, color: "#000000" };
    case 6:
      return { kind: "pen", style: 0, widthX: 1, color: "#ffffff" };
    case 7:
      return { kind: "pen", style: 0, widthX: 1, color: "#000000" };
    case 8:
      return { kind: "pen", style: 5, widthX: 0, color: "#000000" };
    case 10:
    case 11:
      return {
        kind: "font",
        height: 12,
        weight: 400,
        italic: !1,
        underline: !1,
        strikeOut: !1,
        family: "monospace"
      };
    case 12:
    case 13:
    case 14:
    case 17:
      return {
        kind: "font",
        height: 12,
        weight: 400,
        italic: !1,
        underline: !1,
        strikeOut: !1,
        family: "sans-serif"
      };
    default:
      return null;
  }
}
async function sy(t) {
  return new Promise((e, n) => {
    const s = new FileReader();
    s.onload = () => e(s.result), s.onerror = () => n(s.error), s.readAsDataURL(t);
  });
}
async function oy(t) {
  if (t instanceof ce) {
    const e = t;
    X(`exportCanvasToPngDataUrl: encoding the software raster (${e.width}×${e.height})`);
    const n = await vu(e.pixels, e.width, e.height);
    return `data:image/png;base64,${ao(n)}`;
  }
  if (typeof OffscreenCanvas < "u" && t instanceof OffscreenCanvas) {
    X(
      `exportCanvasToPngDataUrl: using OffscreenCanvas.convertToBlob (${t.width}×${t.height})`
    );
    const e = await t.convertToBlob({ type: "image/png" });
    return X(`exportCanvasToPngDataUrl: blob size=${e.size} bytes, type=${e.type}`), sy(e);
  }
  return typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement ? (X(
    `exportCanvasToPngDataUrl: using HTMLCanvasElement.toDataURL (${t.width}×${t.height})`
  ), t.toDataURL("image/png")) : et && t instanceof et.Canvas ? (X(
    `exportCanvasToPngDataUrl: using @napi-rs/canvas toDataURLAsync (${t.width}×${t.height})`
  ), t.toDataURLAsync()) : null;
}
async function Lo(t, e) {
  if (Di()) {
    const o = await Wu(new Uint8Array(t));
    return o ? { drawable: o, width: o.width, height: o.height, close: () => {
    } } : null;
  }
  if (et) {
    const o = await et.loadImage(new Uint8Array(t));
    return { drawable: o, width: o.width, height: o.height, close: () => {
    } };
  }
  if (typeof createImageBitmap != "function")
    return null;
  const n = e !== void 0 ? new Blob([t], { type: e }) : new Blob([t]), s = await createImageBitmap(n);
  return { drawable: s, width: s.width, height: s.height, close: () => s.close() };
}
async function Wu(t) {
  if (Eu(t))
    return hd(t);
  if (t.length >= 26 && t[0] === 66 && t[1] === 77) {
    const e = new DataView(t.buffer, t.byteOffset, t.byteLength), n = e.getUint32(10, !0), s = Xe(e, 14, n, e.byteLength - n);
    return s ? { data: s.data, width: s.width, height: s.height } : null;
  }
  return null;
}
function St(t, e, n, s, o, r) {
  t.drawImage.call(t, e, n, s, o, r);
}
function V(t, e, n, s, o) {
  return t.getImageData.call(t, e, n, s, o);
}
function Q(t, e, n, s) {
  t.putImageData.call(t, e, n, s);
}
function Vu(t, e, n) {
  return t.createPattern.call(t, e, n);
}
function K(t, e, n) {
  if (typeof ImageData < "u")
    return new ImageData(t, e, n);
  if (et) {
    const s = et.ImageData;
    return new s(t, e, n);
  }
  return { data: t, width: e, height: n, colorSpace: "srgb" };
}
function Kc(t, e, n) {
  if (e + 118 > n)
    return null;
  const s = t.getUint16(e, !0);
  if (s !== 512 && s !== 768 || t.getUint16(e + 66, !0) & 1)
    return null;
  const r = (x) => t.getUint8(e + x), i = (x) => t.getUint16(e + x, !0), c = (x) => t.getUint32(e + x, !0), a = r(95), l = r(96), u = i(88), h = c(105);
  let f = "";
  for (let x = e + h; x < n && t.getUint8(x) !== 0 && f.length < 64; x++)
    f += String.fromCharCode(t.getUint8(x));
  const g = s === 768 ? 148 : 118, p = s === 768 ? 6 : 4, d = l - a + 2;
  if (e + g + d * p > n)
    return null;
  const y = (x) => i(g + x * p), m = (x) => s === 768 ? c(g + x * p + 2) : i(g + x * p + 2), M = r(97) + a, b = (x) => ((x < a || x > l) && (x = M), x - a), w = /* @__PURE__ */ new Map();
  return {
    family: f,
    points: i(68),
    vertRes: i(70),
    horizRes: i(72),
    pixHeight: u,
    ascent: i(74),
    internalLeading: i(76),
    externalLeading: i(78),
    italic: r(80) !== 0,
    underline: r(81) !== 0,
    strikeOut: r(82) !== 0,
    weight: i(83),
    charSet: r(85),
    pitchAndFamily: r(90),
    avgWidth: i(91),
    maxWidth: i(93),
    firstChar: a,
    lastChar: l,
    defaultChar: M,
    breakChar: r(98) + a,
    width: (x) => {
      const E = b(x);
      return E >= 0 && E < d ? y(E) : 0;
    },
    bitmap: (x) => {
      const E = b(x);
      if (E < 0 || E >= d)
        return null;
      let T = w.get(E);
      if (T === void 0) {
        const v = y(E), I = m(E), P = Math.ceil(v / 8);
        if (v === 0 || e + I + P * u > n)
          T = null;
        else {
          T = new Uint8Array(v * u);
          for (let S = 0; S < P; S++)
            for (let R = 0; R < u; R++) {
              const U = t.getUint8(e + I + S * u + R);
              for (let A = 0; A < 8; A++) {
                const k = S * 8 + A;
                k < v && U & 128 >> A && (T[R * v + k] = 1);
              }
            }
        }
        w.set(E, T);
      }
      return T;
    }
  };
}
function ry(t) {
  const e = t instanceof ArrayBuffer ? new DataView(t) : new DataView(t.buffer, t.byteOffset, t.byteLength), n = [];
  try {
    if (e.byteLength < 64)
      return n;
    const s = e.getUint16(0, !0);
    if (s === 512 || s === 768) {
      const a = Kc(e, 0, e.byteLength);
      return a ? [a] : n;
    }
    if (s !== 23117)
      return n;
    const o = e.getUint32(60, !0);
    if (o + 64 > e.byteLength || e.getUint16(o, !0) !== 17742)
      return n;
    const r = o + e.getUint16(o + 36, !0), i = e.getUint16(r, !0);
    let c = r + 2;
    for (; c + 8 <= e.byteLength; ) {
      const a = e.getUint16(c, !0);
      if (a === 0)
        break;
      const l = e.getUint16(c + 2, !0);
      c += 8;
      for (let u = 0; u < l && c + 12 <= e.byteLength; u++, c += 12) {
        if (a !== 32776)
          continue;
        const h = e.getUint16(c, !0) * 2 ** i, f = e.getUint16(c + 2, !0) * 2 ** i, g = Kc(e, h, Math.min(e.byteLength, h + f));
        g && n.push(g);
      }
    }
  } catch {
    return [];
  }
  return n;
}
var ts = 2, iy = 4, qu = 8, cy = 32, Ju = 64, Ku = 128, ay = 256, ly = 512;
function Zu(t, e) {
  return String.fromCharCode(t.getUint8(e), t.getUint8(e + 1), t.getUint8(e + 2), t.getUint8(e + 3));
}
function uy(t, e) {
  if (e + 12 > t.byteLength)
    return null;
  const n = t.getUint32(e);
  if (n !== 65536 && n !== 1953658213)
    return null;
  const s = t.getUint16(e + 4), o = /* @__PURE__ */ new Map();
  for (let r = 0; r < s; r++) {
    const i = e + 12 + r * 16;
    if (i + 16 > t.byteLength)
      return null;
    const c = t.getUint32(i + 8), a = t.getUint32(i + 12);
    c + a <= t.byteLength && o.set(Zu(t, i), { offset: c, length: a });
  }
  return o;
}
function hy(t, e, n) {
  let s = "";
  for (let o = 0; o + 1 < n; o += 2)
    s += String.fromCharCode(t.getUint16(e + o));
  return s;
}
function fy(t, e, n) {
  let s = "";
  for (let o = 0; o < n; o++)
    s += String.fromCharCode(t.getUint8(e + o));
  return s;
}
function gy(t, e) {
  const n = /* @__PURE__ */ new Map();
  if (!e)
    return n;
  const s = t.getUint16(e.offset + 2), o = e.offset + t.getUint16(e.offset + 4), r = /* @__PURE__ */ new Map();
  for (let i = 0; i < s; i++) {
    const c = e.offset + 6 + i * 12, a = t.getUint16(c), l = t.getUint16(c + 2), u = t.getUint16(c + 4), h = t.getUint16(c + 6), f = t.getUint16(c + 8), g = t.getUint16(c + 10);
    if (h !== 1 && h !== 2 && h !== 4 && h !== 16)
      continue;
    let p = null, d = 0;
    a === 3 && (l === 1 || l === 0 || l === 10) ? (p = hy(t, o + g, f), d = u === 1033 ? 3 : 2) : a === 1 && l === 0 && (p = fy(t, o + g, f), d = 1), p !== null && d > (r.get(h) ?? 0) && (n.set(h, p), r.set(h, d));
  }
  return n;
}
function py(t, e) {
  const n = t.getUint16(e + 6), s = e + 14, o = s + n + 2, r = o + n, i = r + n;
  return (c) => {
    if (c > 65535)
      return 0;
    let a = 0, l = n / 2 - 1;
    for (; a <= l; ) {
      const u = a + l >> 1;
      if (t.getUint16(s + u * 2) < c) {
        a = u + 1;
        continue;
      }
      const f = t.getUint16(o + u * 2);
      if (f > c) {
        l = u - 1;
        continue;
      }
      const g = t.getInt16(r + u * 2), p = t.getUint16(i + u * 2);
      if (p === 0)
        return c + g & 65535;
      const d = i + u * 2 + p + (c - f) * 2;
      if (d + 2 > t.byteLength)
        return 0;
      const y = t.getUint16(d);
      return y === 0 ? 0 : y + g & 65535;
    }
    return 0;
  };
}
function dy(t, e) {
  const n = t.getUint32(e + 12);
  return (s) => {
    let o = 0, r = n - 1;
    for (; o <= r; ) {
      const i = o + r >> 1, c = e + 16 + i * 12, a = t.getUint32(c), l = t.getUint32(c + 4);
      if (s < a)
        r = i - 1;
      else if (s > l)
        o = i + 1;
      else
        return t.getUint32(c + 8) + (s - a);
    }
    return 0;
  };
}
function yy(t, e) {
  const n = t.getUint16(e + 6), s = t.getUint16(e + 8);
  return (o) => o >= n && o < n + s ? t.getUint16(e + 10 + (o - n) * 2) : 0;
}
function my(t, e) {
  return (n) => n < 256 ? t.getUint8(e + 6 + n) : 0;
}
function My(t, e) {
  const n = { lookup: () => 0, symbol: !1 };
  if (!e)
    return n;
  const s = t.getUint16(e.offset + 2);
  let o = null;
  for (let c = 0; c < s; c++) {
    const a = e.offset + 4 + c * 8, l = t.getUint16(a), u = t.getUint16(a + 2), h = e.offset + t.getUint32(a + 4);
    if (h + 4 > t.byteLength)
      continue;
    let f = 0, g = !1;
    l === 3 && u === 10 ? f = 5 : l === 3 && u === 1 ? f = 4 : l === 3 && u === 0 ? (f = 3, g = !0) : l === 0 ? f = 2 : l === 1 && u === 0 && (f = 1), f > 0 && (!o || f > o.rank) && (o = { off: h, rank: f, symbol: g });
  }
  if (!o)
    return n;
  const r = t.getUint16(o.off);
  let i;
  switch (r) {
    case 4:
      i = py(t, o.off);
      break;
    case 12:
      i = dy(t, o.off);
      break;
    case 6:
      i = yy(t, o.off);
      break;
    case 0:
      i = my(t, o.off);
      break;
    default:
      return n;
  }
  if (o.symbol) {
    const c = i;
    i = (a) => c(a) || (a < 256 ? c(61440 + a) : 0);
  }
  return { lookup: i, symbol: o.symbol };
}
function by(t, e, n) {
  const s = /* @__PURE__ */ new Map();
  if (!e || e.length < 8)
    return s;
  const o = t.getInt16(e.offset + 2), r = t.getInt32(e.offset + 4);
  for (let i = 0; i < o; i++) {
    const c = e.offset + 8 + i * r;
    if (c + 2 + n > e.offset + e.length)
      break;
    s.set(t.getUint8(c), new Uint8Array(t.buffer, t.byteOffset + c + 2, n));
  }
  return s;
}
function wy(t, e) {
  if (!e || e.length < 6)
    return null;
  const n = t.getUint16(e.offset + 4);
  let s = -1;
  for (let c = 0; c < n; c++) {
    const a = e.offset + 6 + c * 4, l = t.getUint8(a), u = t.getUint8(a + 1), h = t.getUint8(a + 2), f = t.getUint8(a + 3);
    if (l === 1 && (u === 0 && h === 0 && f === 0 || u === 1 && h <= 1 && f >= 1)) {
      s = c;
      break;
    }
  }
  if (s < 0)
    return null;
  const o = e.offset + t.getUint16(e.offset + 6 + n * 4 + s * 2);
  if (o + 4 > t.byteLength)
    return null;
  const r = t.getUint16(o), i = [];
  for (let c = 0; c < r; c++) {
    const a = o + 4 + c * 6;
    i.push({ ppem: t.getUint16(a), yMax: t.getInt16(a + 2), yMin: t.getInt16(a + 4) });
  }
  return i;
}
function xy(t, e, n, s) {
  if (s <= n)
    return null;
  const o = e.offset + n, r = t.getInt16(o), i = t.getInt16(o + 2), c = t.getInt16(o + 4), a = t.getInt16(o + 6), l = t.getInt16(o + 8);
  let u = o + 10;
  if (r >= 0) {
    const p = [];
    for (let T = 0; T < r; T++)
      p.push(t.getUint16(u)), u += 2;
    const d = r > 0 ? p[r - 1] + 1 : 0, y = t.getUint16(u);
    u += 2;
    const m = new Uint8Array(t.buffer, t.byteOffset + u, y);
    u += y;
    const M = new Uint8Array(d);
    for (let T = 0; T < d; ) {
      const v = t.getUint8(u++);
      if (M[T++] = v, v & 8) {
        let I = t.getUint8(u++);
        for (; I-- > 0 && T < d; )
          M[T++] = v;
      }
    }
    const b = new Array(d), w = new Array(d);
    let x = 0;
    for (let T = 0; T < d; T++) {
      const v = M[T];
      if (v & 2) {
        const I = t.getUint8(u++);
        x += v & 16 ? I : -I;
      } else v & 16 || (x += t.getInt16(u), u += 2);
      b[T] = x;
    }
    x = 0;
    for (let T = 0; T < d; T++) {
      const v = M[T];
      if (v & 4) {
        const I = t.getUint8(u++);
        x += v & 32 ? I : -I;
      } else v & 32 || (x += t.getInt16(u), u += 2);
      w[T] = x;
    }
    const E = new Array(d);
    for (let T = 0; T < d; T++)
      E[T] = (M[T] & 1) !== 0;
    return { xs: b, ys: w, onCurve: E, endPts: p, instructions: m, components: null, xMin: i, yMin: c, xMax: a, yMax: l };
  }
  const h = [];
  let f = 0;
  do {
    f = t.getUint16(u);
    const p = t.getUint16(u + 2);
    u += 4;
    let d, y;
    f & 1 ? (d = f & ts ? t.getInt16(u) : t.getUint16(u), y = f & ts ? t.getInt16(u + 2) : t.getUint16(u + 2), u += 4) : (d = f & ts ? t.getInt8(u) : t.getUint8(u), y = f & ts ? t.getInt8(u + 1) : t.getUint8(u + 1), u += 2);
    let m = 1, M = 0, b = 0, w = 1;
    f & qu ? (m = w = t.getInt16(u) / 16384, u += 2) : f & Ju ? (m = t.getInt16(u) / 16384, w = t.getInt16(u + 2) / 16384, u += 4) : f & Ku && (m = t.getInt16(u) / 16384, M = t.getInt16(u + 2) / 16384, b = t.getInt16(u + 4) / 16384, w = t.getInt16(u + 6) / 16384, u += 8), h.push({ glyphIndex: p, flags: f, arg1: d, arg2: y, a: m, b: M, c: b, d: w });
  } while (f & cy);
  let g = new Uint8Array(0);
  if (f & ay) {
    const p = t.getUint16(u);
    g = new Uint8Array(t.buffer, t.byteOffset + u + 2, p);
  }
  return { xs: [], ys: [], onCurve: [], endPts: [], instructions: g, components: h, xMin: i, yMin: c, xMax: a, yMax: l };
}
function Zc(t, e = 0) {
  const n = uy(t, e);
  if (!n)
    return null;
  const s = n.get("head"), o = n.get("hhea"), r = n.get("maxp"), i = n.get("hmtx"), c = n.get("loca"), a = n.get("glyf");
  if (!s || !o || !r || !i || !c || !a)
    return null;
  const l = t.getUint16(s.offset + 18), u = t.getUint16(s.offset + 16), h = t.getUint16(s.offset + 44), f = t.getInt16(s.offset + 50) === 1, g = t.getUint16(r.offset + 4), p = r.length >= 32, d = t.getUint16(o.offset + 34), y = gy(t, n.get("name")), m = My(t, n.get("cmap")), M = n.get("OS/2"), b = n.get("post"), w = n.get("cvt "), x = n.get("fpgm"), E = n.get("prep"), T = n.get("gasp"), v = n.get("LTSH"), I = new Int16Array(w ? w.length >> 1 : 0);
  for (let A = 0; A < I.length; A++)
    I[A] = t.getInt16(w.offset + A * 2);
  const P = (A) => A ? new Uint8Array(t.buffer, t.byteOffset + A.offset, A.length) : new Uint8Array(0), S = [];
  if (T && T.length >= 4) {
    const A = t.getUint16(T.offset + 2);
    for (let k = 0; k < A && 4 + k * 4 + 4 <= T.length; k++)
      S.push({
        maxPpem: t.getUint16(T.offset + 4 + k * 4),
        behavior: t.getUint16(T.offset + 6 + k * 4)
      });
  }
  const R = (A) => f ? t.getUint32(c.offset + A * 4) : t.getUint16(c.offset + A * 2) * 2, U = /* @__PURE__ */ new Map();
  return {
    family: y.get(1) ?? "",
    subfamily: y.get(2) ?? "",
    fullName: y.get(4) ?? "",
    typoFamily: y.get(16) ?? null,
    unitsPerEm: l,
    headFlags: u,
    macStyle: h,
    headYMax: t.getInt16(s.offset + 42),
    headYMin: t.getInt16(s.offset + 38),
    numGlyphs: g,
    hheaAscender: t.getInt16(o.offset + 4),
    hheaDescender: t.getInt16(o.offset + 6),
    hheaLineGap: t.getInt16(o.offset + 8),
    weightClass: M ? t.getUint16(M.offset + 4) : h & 1 ? 700 : 400,
    widthClass: M ? t.getUint16(M.offset + 6) : 5,
    fsSelection: M ? t.getUint16(M.offset + 62) : 0,
    winAscent: M ? t.getUint16(M.offset + 74) : t.getInt16(o.offset + 4),
    winDescent: M ? t.getUint16(M.offset + 76) : -t.getInt16(o.offset + 6),
    typoAscender: M ? t.getInt16(M.offset + 68) : 0,
    typoDescender: M ? t.getInt16(M.offset + 70) : 0,
    typoLineGap: M ? t.getInt16(M.offset + 72) : 0,
    xAvgCharWidth: M ? t.getInt16(M.offset + 2) : 0,
    strikeoutSize: M ? t.getInt16(M.offset + 26) : 0,
    strikeoutPosition: M ? t.getInt16(M.offset + 28) : 0,
    panose: M ? new Uint8Array(t.buffer, t.byteOffset + M.offset + 32, 10) : null,
    underlinePosition: b ? t.getInt16(b.offset + 8) : 0,
    underlineThickness: b ? t.getInt16(b.offset + 10) : 0,
    isFixedPitch: b ? t.getUint32(b.offset + 12) !== 0 : !1,
    isSymbol: m.symbol,
    maxStorage: p ? t.getUint16(r.offset + 18) : 0,
    maxFunctionDefs: p ? t.getUint16(r.offset + 20) : 0,
    maxInstructionDefs: p ? t.getUint16(r.offset + 22) : 0,
    maxStackElements: p ? t.getUint16(r.offset + 24) : 0,
    maxTwilightPoints: p ? t.getUint16(r.offset + 16) : 0,
    cvt: I,
    fpgm: P(x),
    prep: P(E),
    gasp: S,
    hdmx: by(t, n.get("hdmx"), g),
    vdmx: wy(t, n.get("VDMX")),
    ltsh: v && v.length >= 4 + g ? P(v).subarray(4, 4 + g) : null,
    glyphIndex: (A) => {
      const k = m.lookup(A);
      return k < g ? k : 0;
    },
    hMetrics: (A) => {
      const k = Math.min(A, d - 1), L = t.getUint16(i.offset + k * 4), D = A < d ? t.getInt16(i.offset + A * 4 + 2) : t.getInt16(i.offset + d * 4 + (A - d) * 2);
      return { advance: L, lsb: D };
    },
    loadGlyph: (A) => {
      if (A < 0 || A >= g)
        return null;
      let k = U.get(A);
      if (k === void 0) {
        try {
          k = xy(t, a, R(A), R(A + 1));
        } catch {
          k = null;
        }
        U.set(A, k);
      }
      return k;
    }
  };
}
function Ey(t) {
  const e = t instanceof ArrayBuffer ? new DataView(t) : new DataView(t.buffer, t.byteOffset, t.byteLength);
  try {
    if (e.byteLength >= 12 && Zu(e, 0) === "ttcf") {
      const s = e.getUint32(8), o = [];
      for (let r = 0; r < s && 12 + r * 4 + 4 <= e.byteLength; r++) {
        const i = Zc(e, e.getUint32(12 + r * 4));
        i && o.push(i);
      }
      return o;
    }
    const n = Zc(e, 0);
    return n ? [n] : [];
  } catch {
    return [];
  }
}
function nt(t, e) {
  return Math.floor((t * e + 32768) / 65536);
}
function lt(t, e, n) {
  let s = 1;
  t < 0 && (t = -t, s = -s), e < 0 && (e = -e, s = -s), n < 0 && (n = -n, s = -s);
  const o = n > 0 ? Math.floor((t * e + Math.floor(n / 2)) / n) : 2147483647;
  return s < 0 ? -o : o;
}
function vy(t, e, n) {
  let s = 1;
  t < 0 && (t = -t, s = -s), n < 0 && (n = -n, s = -s);
  const o = n > 0 ? Math.floor(t * e / n) : 2147483647;
  return s < 0 ? -o : o;
}
function Ce(t, e) {
  let n = 1;
  t < 0 && (t = -t, n = -n), e < 0 && (e = -e, n = -n);
  const s = e === 0 ? 2147483647 : Math.floor((t * 65536 + Math.floor(e / 2)) / e);
  return n < 0 ? -s : s;
}
function Qc(t, e, n, s) {
  const o = t * n + e * s;
  return Math.floor((o + 8192 + (o < 0 ? -1 : 0)) / 16384);
}
function He(t, e) {
  const n = t * e;
  return Math.floor((n + 8192 + (n < 0 ? -1 : 0)) / 16384);
}
var De = (t) => Math.floor(t / 64) * 64, dt = (t) => De(t + 32), hr = (t) => De(t + 63), Ge = 1, Nn = 8, Re = 16, je = class Qu {
  constructor(e, n = []) {
    this.n = e, this.orusX = new Float64Array(e), this.orusY = new Float64Array(e), this.orgX = new Float64Array(e), this.orgY = new Float64Array(e), this.curX = new Float64Array(e), this.curY = new Float64Array(e), this.tags = new Uint8Array(e), this.endPts = n;
  }
  clone() {
    const e = new Qu(this.n, this.endPts.slice());
    return e.orusX.set(this.orusX), e.orusY.set(this.orusY), e.orgX.set(this.orgX), e.orgY.set(this.orgY), e.curX.set(this.curX), e.curY.set(this.curY), e.tags.set(this.tags), e;
  }
};
function Bn() {
  return {
    rp0: 0,
    rp1: 0,
    rp2: 0,
    pvx: 16384,
    pvy: 0,
    fvx: 16384,
    fvy: 0,
    dvx: 16384,
    dvy: 0,
    loop: 1,
    minDist: 64,
    roundState: 1,
    autoFlip: !0,
    cvtCutIn: 68,
    swCutIn: 0,
    swValue: 0,
    deltaBase: 9,
    deltaShift: 3,
    instructControl: 0,
    scanControl: !1,
    scanType: 0,
    gep0: 1,
    gep1: 1,
    gep2: 1,
    period: 64,
    phase: 0,
    threshold: 32
  };
}
var st = class extends Error {
}, Ty = 1e6, fr = class tn {
  constructor(e, n, s, o, r = !0) {
    this.fdefs = [], this.idefs = /* @__PURE__ */ new Map(), this.prepOk = !0, this.stack = [], this.gs = Bn(), this.fDotP = 16384, this.inPrep = !1, this.pvFromSpvtl = !1, this.callFrames = [], this.inComposite = !1, this.count = 0, this.font = e, this.env = o, this.hinting = r;
    const i = e.unitsPerEm;
    this.xScale = Ce(n * 64, i), this.yScale = Ce(s * 64, i), n >= s ? (this.ppem = n, this.scale = this.xScale, this.xRatio = 65536, this.yRatio = Ce(s, n)) : (this.ppem = s, this.scale = this.yScale, this.xRatio = Ce(n, s), this.yRatio = 65536), this.stretched = n !== s, this.cvt0 = new Float64Array(e.cvt.length);
    for (let c = 0; c < e.cvt.length; c++)
      this.cvt0[c] = nt(e.cvt[c], this.scale);
    this.storage0 = new Float64Array(e.maxStorage), this.twilight0 = new je(e.maxTwilightPoints + 4), this.gs0 = Bn(), r && this.runSetup();
  }
  /** Runs fpgm then prep and records the post-prep state every glyph starts from. */
  runSetup() {
    this.cvt = this.cvt0, this.storage = this.storage0, this.twilight = this.twilight0, this.pts = new je(0), this.zp0 = this.zp1 = this.zp2 = this.pts, this.gs = Bn(), this.computeFuncs();
    try {
      this.execute(this.font.fpgm);
    } catch {
      this.prepOk = !1;
    }
    this.gs = Bn(), this.computeFuncs(), this.inPrep = !0, this.zp0 = this.zp1 = this.zp2 = this.pts;
    try {
      this.execute(this.font.prep);
    } catch {
    }
    this.inPrep = !1;
    const e = this.gs;
    e.pvx = e.fvx = e.dvx = 16384, e.pvy = e.fvy = e.dvy = 0, e.rp0 = e.rp1 = e.rp2 = 0, e.gep0 = e.gep1 = e.gep2 = 1, e.loop = 1, this.gs0 = { ...e };
  }
  /** Whether glyph programs are allowed to run at this size (INSTCTRL bit 0). */
  get glyphHinting() {
    return this.hinting && this.prepOk && (this.gs0.instructControl & 1) === 0;
  }
  /** The scan-conversion mode prep left, used when a glyph program doesn't set its own. */
  get defaultScan() {
    return { scanControl: this.gs0.scanControl, scanType: this.gs0.scanType };
  }
  // -----------------------------------------------------------------------
  // Glyph loading
  // -----------------------------------------------------------------------
  /** Loads and grid-fits glyph `g`. Never throws. */
  hintGlyph(e) {
    const { advance: n } = this.font.hMetrics(e), s = this.loadRecursive(e, 0), o = s.zone.n - 4, r = s.zone.curX[o], i = s.zone.curX[o + 1], c = new Float64Array(o), a = new Float64Array(o), l = new Uint8Array(o);
    for (let u = 0; u < o; u++)
      c[u] = s.zone.curX[u] - r, a[u] = s.zone.curY[u], l[u] = s.zone.tags[u] & Ge;
    return {
      xs: c,
      ys: a,
      onCurve: l,
      endPts: s.zone.endPts,
      advance: i - r,
      linearAdvance: nt(n, this.xScale),
      scanControl: s.scanControl,
      scanType: s.scanType
    };
  }
  /**
   * Loads glyph `g` into a fresh zone (points + 4 phantom points), scaled
   * and, when hinting is on, instructed. Composite glyphs are assembled
   * from their hinted components and then run their own program.
   */
  loadRecursive(e, n) {
    const s = this.font, o = n < 8 ? s.loadGlyph(e) : null, { advance: r, lsb: i } = s.hMetrics(e), c = o ? o.xMin : 0;
    o && o.yMax;
    const a = c - i, l = s.typoAscender || s.hheaAscender, u = s.typoDescender || s.hheaDescender, h = [
      [a, 0],
      [a + r, 0],
      [0, l],
      [0, u]
    ], f = this.defaultScan;
    if (!o || !o.components && o.endPts.length === 0) {
      const b = new je(4);
      for (let w = 0; w < 4; w++)
        b.orusX[w] = h[w][0], b.orusY[w] = h[w][1], b.orgX[w] = b.curX[w] = nt(h[w][0], this.xScale), b.orgY[w] = b.curY[w] = nt(h[w][1], this.yScale);
      return this.hinting && (b.curX[0] = dt(b.curX[0]), b.curX[1] = dt(b.curX[1]), b.curY[2] = dt(b.curY[2]), b.curY[3] = dt(b.curY[3])), { zone: b, ...f };
    }
    if (!o.components) {
      const b = o.xs.length, w = new je(b + 4, o.endPts.slice());
      for (let x = 0; x < b; x++)
        w.orusX[x] = o.xs[x], w.orusY[x] = o.ys[x], w.tags[x] = o.onCurve[x] ? Ge : 0;
      for (let x = 0; x < 4; x++)
        w.orusX[b + x] = h[x][0], w.orusY[b + x] = h[x][1];
      for (let x = 0; x < b + 4; x++)
        w.orgX[x] = w.curX[x] = nt(w.orusX[x], this.xScale), w.orgY[x] = w.curY[x] = nt(w.orusY[x], this.yScale);
      return this.hintZone(w, o.instructions);
    }
    const g = [];
    let p = 0, d = null, y = f;
    for (const b of o.components) {
      const w = this.loadRecursive(b.glyphIndex, n + 1);
      y = { scanControl: w.scanControl, scanType: w.scanType };
      const x = w.zone, E = x.n - 4;
      if (b.flags & (qu | Ju | Ku))
        for (let R = 0; R < x.n; R++) {
          const U = (D, N) => Math.round(D * b.a + N * b.c), A = (D, N) => Math.round(D * b.b + N * b.d);
          let k = x.curX[R], L = x.curY[R];
          x.curX[R] = U(k, L), x.curY[R] = A(k, L), k = x.orgX[R], L = x.orgY[R], x.orgX[R] = U(k, L), x.orgY[R] = A(k, L), k = x.orusX[R], L = x.orusY[R], x.orusX[R] = k * b.a + L * b.c, x.orusY[R] = k * b.b + L * b.d;
        }
      let T, v, I = 0, P = 0;
      if (b.flags & ts)
        I = b.arg1, P = b.arg2, T = nt(b.arg1, this.xScale), v = nt(b.arg2, this.yScale), this.hinting && b.flags & iy && (T = dt(T), v = dt(v));
      else {
        const R = b.arg1, U = b.arg2;
        let A = 0, k = 0, L = 0;
        for (const D of g) {
          const N = D.n;
          if (R < L + N) {
            A = D.curX[R - L], k = D.curY[R - L];
            break;
          }
          L += N;
        }
        T = U < E ? A - x.curX[U] : 0, v = U < E ? k - x.curY[U] : 0;
      }
      const S = new je(E, x.endPts.slice());
      for (let R = 0; R < E; R++)
        S.orusX[R] = x.orusX[R] + I, S.orusY[R] = x.orusY[R] + P, S.orgX[R] = x.orgX[R] + T, S.orgY[R] = x.orgY[R] + v, S.curX[R] = x.curX[R] + T, S.curY[R] = x.curY[R] + v, S.tags[R] = x.tags[R] & Ge;
      b.flags & ly && (d = x), g.push(S), p += E;
    }
    const m = new je(p + 4);
    let M = 0;
    for (const b of g) {
      m.orusX.set(b.orusX, M), m.orusY.set(b.orusY, M), m.orgX.set(b.orgX, M), m.orgY.set(b.orgY, M), m.curX.set(b.curX, M), m.curY.set(b.curY, M), m.tags.set(b.tags, M);
      for (const w of b.endPts)
        m.endPts.push(w + M);
      M += b.n;
    }
    for (let b = 0; b < 4; b++) {
      const w = p + b;
      if (d) {
        const x = d.n - 4 + b;
        m.orusX[w] = d.orusX[x], m.orusY[w] = d.orusY[x], m.orgX[w] = d.orgX[x], m.orgY[w] = d.orgY[x], m.curX[w] = d.curX[x], m.curY[w] = d.curY[x];
      } else
        m.orusX[w] = h[b][0], m.orusY[w] = h[b][1], m.orgX[w] = m.curX[w] = nt(h[b][0], this.xScale), m.orgY[w] = m.curY[w] = nt(h[b][1], this.yScale);
    }
    if (o.instructions.length > 0 && this.glyphHinting) {
      m.orgX.set(m.curX), m.orgY.set(m.curY), this.inComposite = !0;
      const b = this.hintZone(m, o.instructions, !d);
      return this.inComposite = !1, b;
    }
    return this.hinting && !d && (m.curX[p] = dt(m.curX[p]), m.curX[p + 1] = dt(m.curX[p + 1]), m.curY[p + 2] = dt(m.curY[p + 2]), m.curY[p + 3] = dt(m.curY[p + 3])), { zone: m, ...y };
  }
  /** Rounds the phantom points and runs a glyph program over `zone`. */
  hintZone(e, n, s = !0) {
    const o = e.n;
    if (this.hinting && s) {
      const r = this.env.clearType ? (i) => Math.floor((i + 2) / 4) * 4 : dt;
      e.curX[o - 4] = r(e.curX[o - 4]), e.curX[o - 3] = r(e.curX[o - 3]), e.curY[o - 2] = dt(e.curY[o - 2]), e.curY[o - 1] = dt(e.curY[o - 1]);
    }
    if (!this.glyphHinting || n.length === 0)
      return { zone: e, ...this.defaultScan };
    this.gs = this.gs0.instructControl & 2 ? Bn() : { ...this.gs0 }, this.cvt = this.cvt0.slice(), this.storage = this.storage0.slice(), this.twilight = this.twilight0.clone(), this.pts = e, this.zp0 = this.zp1 = this.zp2 = e, this.stack = [], this.computeFuncs();
    try {
      this.execute(n);
    } catch {
    }
    return { zone: e, scanControl: this.gs.scanControl, scanType: this.gs.scanType };
  }
  // -----------------------------------------------------------------------
  // Vector / projection machinery
  // -----------------------------------------------------------------------
  computeFuncs() {
    const e = this.gs;
    e.fvx === 16384 ? this.fDotP = e.pvx : e.fvy === 16384 ? this.fDotP = e.pvy : this.fDotP = Math.floor((e.pvx * e.fvx + e.pvy * e.fvy) / 16384), Math.abs(this.fDotP) < 1024 && (this.fDotP = 16384);
  }
  project(e, n) {
    return Qc(e, n, this.gs.pvx, this.gs.pvy);
  }
  dualProject(e, n) {
    return Qc(e, n, this.gs.dvx, this.gs.dvy);
  }
  /** Dual projection of an orus (font unit) difference, scaled to 26.6. */
  dualProjectOrus(e, n) {
    return this.xScale === this.yScale ? nt(this.dualProject(e, n), this.xScale) : this.dualProject(nt(e, this.xScale), nt(n, this.yScale));
  }
  normalize(e, n) {
    if (e === 0 && n === 0)
      return [16384, 0];
    const s = Math.hypot(e, n);
    return [Math.round(e / s * 16384), Math.round(n / s * 16384)];
  }
  currentRatio() {
    if (!this.stretched)
      return 65536;
    const e = this.gs;
    if (e.pvy === 0)
      return this.xRatio;
    if (e.pvx === 0)
      return this.yRatio;
    const n = lt(e.pvx, this.xRatio, 16384), s = lt(e.pvy, this.yRatio, 16384);
    return Math.round(Math.hypot(n, s));
  }
  currentPpem() {
    return this.stretched ? nt(this.ppem, this.currentRatio()) : this.ppem;
  }
  readCvt(e) {
    if (e < 0 || e >= this.cvt.length)
      throw new st("cvt");
    return this.stretched ? nt(this.cvt[e], this.currentRatio()) : this.cvt[e];
  }
  writeCvt(e, n) {
    e < 0 || e >= this.cvt.length || (this.cvt[e] = this.stretched ? Ce(n, this.currentRatio()) : n);
  }
  moveCvt(e, n) {
    e < 0 || e >= this.cvt.length || (this.cvt[e] += this.stretched ? Ce(n, this.currentRatio()) : n);
  }
  move(e, n, s) {
    const o = this.gs;
    o.fvx !== 0 && (e.curX[n] += this.moveAmt(s, o.fvx), e.tags[n] |= Nn), o.fvy !== 0 && (e.curY[n] += this.moveAmt(s, o.fvy), e.tags[n] |= Re);
  }
  /** A projected distance converted to a move along one freedom-vector component. */
  moveAmt(e, n) {
    return lt(e, n, this.fDotP);
  }
  moveOrig(e, n, s) {
    const o = this.gs;
    o.fvx !== 0 && (e.orgX[n] += lt(s, o.fvx, this.fDotP)), o.fvy !== 0 && (e.orgY[n] += lt(s, o.fvy, this.fDotP));
  }
  /**
   * Backward-compatible ClearType reads storage 22 (TypeMan Talk
   * DStroke/IStroke), 24 (spacing functions) and 8 (VacuFormRound) as 0
   * inside the functions whose signatures Microsoft documents, which
   * bypasses them.
   */
  ctBypassStorage(e) {
    if (!this.ctCompat() || e !== 22 && e !== 24 && e !== 8)
      return !1;
    const n = this.callFrames[this.callFrames.length - 1];
    if (!n)
      return !1;
    const s = n.def.code, o = n.def.start, r = (i) => i.every((c, a) => s[o + a] === c);
    return e === 22 ? r([176, 22, 67, 88]) : e === 24 ? r([1, 176, 24, 67, 88]) || r([1, 24, 176, 24, 67, 88]) : r([69, 35, 70, 96, 32, 176, 38]);
  }
  /** True when the projection vector points (mostly) along x, ClearType's direction. */
  ctDirection() {
    const e = this.gs;
    return !!this.env.clearType && Math.abs(e.pvx) > Math.abs(e.pvy);
  }
  /** Backward-compatible ClearType: ClearType on and the font has not set INSTCTRL selector 3. */
  ctCompat() {
    return !!this.env.clearType && (this.gs0.instructControl & 4) === 0 && (this.gs.instructControl & 4) === 0;
  }
  /** CVT cut-in along the current projection (1/16 of it in the ClearType direction). */
  cutIn() {
    return this.ctDirection() ? this.gs.cvtCutIn / 16 : this.gs.cvtCutIn;
  }
  /** Minimum distance along the current projection (halved in the ClearType direction). */
  minDistance() {
    return this.ctDirection() ? Math.floor(this.gs.minDist / 2) : this.gs.minDist;
  }
  /**
   * Rounds `d` per the round state. In the ClearType direction the grid
   * is the 1/16-pixel virtual grid, except in prep and for RDTG after
   * SPVTL, which round on the physical grid.
   */
  round(e, n = this.gs.roundState) {
    return n <= 5 && this.ctDirection() && !this.inPrep && !(n === 3 && this.pvFromSpvtl) ? this.roundPhysical(e * 16, n) / 16 : this.roundPhysical(e, n);
  }
  roundPhysical(e, n = this.gs.roundState) {
    const s = this.gs;
    let o;
    switch (n) {
      case 0:
        return e >= 0 ? (o = De(e) + 32, o < 0 && (o = 32)) : (o = -(De(-e) + 32), o > 0 && (o = -32)), o;
      case 1:
        return e >= 0 ? (o = dt(e), o < 0 && (o = 0)) : (o = -dt(-e), o > 0 && (o = 0)), o;
      case 2:
        return e >= 0 ? (o = Math.floor((e + 16) / 32) * 32, o < 0 && (o = 0)) : (o = -Math.floor((-e + 16) / 32) * 32, o > 0 && (o = 0)), o;
      case 3:
        return e >= 0 ? (o = De(e), o < 0 && (o = 0)) : (o = -De(-e), o > 0 && (o = 0)), o;
      case 4:
        return e >= 0 ? (o = hr(e), o < 0 && (o = 0)) : (o = -hr(-e), o > 0 && (o = 0)), o;
      case 5:
        return e;
      case 6:
        return e >= 0 ? (o = Math.floor((e - s.phase + s.threshold) / s.period) * s.period, o += s.phase, o < 0 && (o = s.phase)) : (o = -(Math.floor((s.threshold - s.phase - e) / s.period) * s.period), o -= s.phase, o > 0 && (o = -s.phase)), o;
      case 7:
        return e >= 0 ? (o = Math.trunc((e - s.phase + s.threshold) / s.period) * s.period, o += s.phase, o < 0 && (o = s.phase)) : (o = -(Math.trunc((s.threshold - s.phase - e) / s.period) * s.period), o -= s.phase, o > 0 && (o = -s.phase)), o;
      default:
        return e;
    }
  }
  setSuperRound(e, n) {
    const s = this.gs;
    let o;
    switch (n & 192) {
      case 0:
        o = Math.trunc(e / 2);
        break;
      case 128:
        o = e * 2;
        break;
      default:
        o = e;
    }
    let r;
    switch (n & 48) {
      case 0:
        r = 0;
        break;
      case 16:
        r = Math.trunc(o / 4);
        break;
      case 32:
        r = Math.trunc(o / 2);
        break;
      default:
        r = Math.trunc(o * 3 / 4);
    }
    let i;
    n & 15 ? i = Math.trunc(((n & 15) - 4) * o / 8) : i = o - 1, s.period = Math.floor(o / 256), s.phase = Math.floor(r / 256), s.threshold = Math.floor(i / 256), s.period === 0 && (s.period = 1);
  }
  /** The zone a SZP* argument names, or null for an invalid one (ignored, as GDI does). */
  zone(e) {
    return e === 0 ? this.twilight : e === 1 ? this.pts : null;
  }
  // -----------------------------------------------------------------------
  // Execution loop
  // -----------------------------------------------------------------------
  pop() {
    if (this.stack.length === 0)
      throw new st("underflow");
    return this.stack.pop();
  }
  push(e) {
    this.stack.push(e | 0);
  }
  /** Returns the length of the instruction at `ip` (for skipping). */
  static insLength(e, n) {
    const s = e[n];
    return s === 64 ? 2 + e[n + 1] : s === 65 ? 2 + e[n + 1] * 2 : s >= 176 && s <= 183 ? 2 + (s - 176) : s >= 184 && s <= 191 ? 1 + (s - 184 + 1) * 2 : 1;
  }
  execute(e) {
    const n = [];
    this.callFrames = n;
    let s = 0, o = e;
    for (; ; ) {
      if (s >= o.length) {
        if (n.length === 0)
          return;
        throw new st("eof");
      }
      if (++this.count > Ty)
        throw new st("too long");
      const r = o[s];
      let i = s + tn.insLength(o, s);
      switch (r) {
        case 88: {
          if (this.pop() === 0) {
            let a = 1, l = i;
            for (; l < o.length; ) {
              const u = o[l];
              if (u === 88)
                a++;
              else {
                if (u === 27 && a === 1)
                  break;
                if (u === 89 && (a--, a === 0))
                  break;
              }
              l += tn.insLength(o, l);
            }
            i = l + 1;
          }
          break;
        }
        case 27: {
          let c = 1, a = i;
          for (; a < o.length; ) {
            const l = o[a];
            if (l === 88)
              c++;
            else if (l === 89 && (c--, c === 0))
              break;
            a += tn.insLength(o, a);
          }
          i = a + 1;
          break;
        }
        case 89:
          break;
        case 28: {
          const c = this.pop();
          if (i = s + c, c === 0 || i < 0)
            throw new st("jmpr");
          break;
        }
        case 120: {
          const c = this.pop(), a = this.pop();
          if (c !== 0 && (i = s + a, a === 0 || i < 0))
            throw new st("jrot");
          break;
        }
        case 121: {
          const c = this.pop(), a = this.pop();
          if (c === 0 && (i = s + a, a === 0 || i < 0))
            throw new st("jrof");
          break;
        }
        case 44: {
          const c = this.pop();
          let a = i;
          for (; a < o.length && o[a] !== 45; ) {
            if (o[a] === 44 || o[a] === 137)
              throw new st("nested");
            a += tn.insLength(o, a);
          }
          if (c < 0 || c > 65535)
            throw new st("fdef");
          this.fdefs[c] = { code: o, start: i, end: a }, i = a + 1;
          break;
        }
        case 137: {
          const c = this.pop();
          let a = i;
          for (; a < o.length && o[a] !== 45; )
            a += tn.insLength(o, a);
          this.idefs.set(c & 255, { code: o, start: i, end: a }), i = a + 1;
          break;
        }
        case 45: {
          const c = n.pop();
          if (!c)
            throw new st("endf");
          if (c.count--, c.count > 0) {
            n.push(c), o = c.def.code, s = c.def.start;
            continue;
          }
          o = c.code, s = c.ip;
          continue;
        }
        case 43: {
          const c = this.pop(), a = this.fdefs[c];
          if (!a)
            throw new st("call");
          if (n.length > 64)
            throw new st("depth");
          n.push({ code: o, ip: i, def: a, count: 1 }), o = a.code, s = a.start;
          continue;
        }
        case 42: {
          const c = this.pop(), a = this.pop(), l = this.fdefs[c];
          if (!l)
            throw new st("loopcall");
          if (a > 0) {
            if (n.length > 64)
              throw new st("depth");
            n.push({ code: o, ip: i, def: l, count: a }), o = l.code, s = l.start;
            continue;
          }
          break;
        }
        default:
          if (!this.step(r, o, s)) {
            const c = this.idefs.get(r);
            if (!c)
              throw new st(`opcode ${r}`);
            n.push({ code: o, ip: i, def: c, count: 1 }), o = c.code, s = c.start;
            continue;
          }
      }
      s = i;
    }
  }
  /** Executes one non-flow-control instruction. Returns false for an undefined opcode. */
  step(e, n, s) {
    const o = this.gs;
    if (e >= 192)
      return e >= 224 ? this.insMIRP(e) : this.insMDRP(e), !0;
    if (e >= 176) {
      if (e <= 183) {
        const r = e - 176 + 1;
        for (let i = 0; i < r; i++)
          this.push(n[s + 1 + i]);
      } else {
        const r = e - 184 + 1;
        for (let i = 0; i < r; i++)
          this.push((n[s + 1 + i * 2] << 8 | n[s + 2 + i * 2]) << 16 >> 16);
      }
      return !0;
    }
    switch (e) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5: {
        const r = (e & 1) !== 0, i = r ? 16384 : 0, c = r ? 0 : 16384;
        return e < 4 && (o.pvx = o.dvx = i, o.pvy = o.dvy = c, this.pvFromSpvtl = !1), (e < 2 || e >= 4) && (o.fvx = i, o.fvy = c), this.computeFuncs(), !0;
      }
      case 6:
      case 7:
      case 8:
      case 9: {
        const r = this.pop(), i = this.pop();
        if (r < 0 || r >= this.zp2.n || i < 0 || i >= this.zp1.n)
          return !0;
        let c = this.zp1.curX[i] - this.zp2.curX[r], a = this.zp1.curY[i] - this.zp2.curY[r], l = e;
        if (c === 0 && a === 0 && (c = 16384, l = 0), l & 1) {
          const f = a;
          a = c, c = -f;
        }
        const [u, h] = this.normalize(c, a);
        return e < 8 ? (o.pvx = o.dvx = u, o.pvy = o.dvy = h, this.pvFromSpvtl = !0) : (o.fvx = u, o.fvy = h), this.computeFuncs(), !0;
      }
      case 10:
      case 11: {
        const r = this.pop() << 16 >> 16, i = this.pop() << 16 >> 16, [c, a] = this.normalize(i, r);
        return e === 10 ? (o.pvx = o.dvx = c, o.pvy = o.dvy = a, this.pvFromSpvtl = !1) : (o.fvx = c, o.fvy = a), this.computeFuncs(), !0;
      }
      case 12:
        return this.push(o.pvx), this.push(o.pvy), !0;
      case 13:
        return this.push(o.fvx), this.push(o.fvy), !0;
      case 14:
        return o.fvx = o.pvx, o.fvy = o.pvy, this.computeFuncs(), !0;
      case 15:
        return this.insISECT(), !0;
      case 16:
        return o.rp0 = this.pop(), !0;
      case 17:
        return o.rp1 = this.pop(), !0;
      case 18:
        return o.rp2 = this.pop(), !0;
      case 19:
      case 20:
      case 21:
      case 22: {
        const r = this.pop(), i = this.zone(r);
        return i && ((e === 19 || e === 22) && (this.zp0 = i, o.gep0 = r), (e === 20 || e === 22) && (this.zp1 = i, o.gep1 = r), (e === 21 || e === 22) && (this.zp2 = i, o.gep2 = r)), !0;
      }
      case 23: {
        const r = this.pop();
        if (r < 0)
          throw new st("sloop");
        return o.loop = Math.min(r, 65535), !0;
      }
      case 24:
        return o.roundState = 1, !0;
      case 25:
        return o.roundState = 0, !0;
      case 26:
        return o.minDist = this.pop(), !0;
      case 29:
        return o.cvtCutIn = this.pop(), !0;
      case 30:
        return o.swCutIn = this.pop(), !0;
      case 31:
        return o.swValue = nt(this.pop(), this.scale), !0;
      case 32: {
        const r = this.pop();
        return this.push(r), this.push(r), !0;
      }
      case 33:
        return this.pop(), !0;
      case 34:
        return this.stack.length = 0, !0;
      case 35: {
        const r = this.pop(), i = this.pop();
        return this.push(r), this.push(i), !0;
      }
      case 36:
        return this.push(this.stack.length), !0;
      case 37: {
        const r = this.pop();
        return this.push(r <= 0 || r > this.stack.length ? 0 : this.stack[this.stack.length - r]), !0;
      }
      case 38: {
        const r = this.pop();
        if (r <= 0 || r > this.stack.length)
          return !0;
        const i = this.stack.splice(this.stack.length - r, 1)[0];
        return this.push(i), !0;
      }
      case 39: {
        const r = this.pop(), i = this.pop();
        if (i < 0 || i >= this.zp1.n || r < 0 || r >= this.zp0.n)
          return !0;
        const c = Math.trunc(
          this.project(this.zp0.curX[r] - this.zp1.curX[i], this.zp0.curY[r] - this.zp1.curY[i]) / 2
        );
        return this.move(this.zp1, i, c), this.move(this.zp0, r, -c), !0;
      }
      case 41: {
        const r = this.pop();
        if (r < 0 || r >= this.zp0.n)
          return !0;
        let i = 255;
        return o.fvx !== 0 && (i &= ~Nn), o.fvy !== 0 && (i &= ~Re), this.zp0.tags[r] &= i, !0;
      }
      case 46:
      case 47: {
        const r = this.pop();
        if (r < 0 || r >= this.zp0.n)
          return !0;
        let i = 0;
        if (e & 1) {
          const c = this.project(this.zp0.curX[r], this.zp0.curY[r]);
          i = this.round(c) - c;
        }
        return this.move(this.zp0, r, i), o.rp0 = o.rp1 = r, !0;
      }
      case 48:
      case 49:
        return this.insIUP(e & 1), !0;
      case 50:
      case 51:
        return this.insSHP(e), !0;
      case 52:
      case 53:
        return this.insSHC(e), !0;
      case 54:
      case 55:
        return this.insSHZ(e), !0;
      case 56: {
        const r = this.pop(), i = He(r, o.fvx), c = He(r, o.fvy);
        for (; o.loop > 0; ) {
          const a = this.pop();
          a >= 0 && a < this.zp2.n && (!this.ctCompat() || this.inComposite || o.fvx === 0 && this.zp2.tags[a] & Re) && this.moveZp2(a, i, c, !0), o.loop--;
        }
        return o.loop = 1, !0;
      }
      case 57:
        return this.insIP(), !0;
      case 58:
      case 59: {
        const r = this.pop(), i = this.pop();
        if (i < 0 || i >= this.zp1.n || o.rp0 < 0 || o.rp0 >= this.zp0.n)
          return !0;
        o.gep1 === 0 && (this.zp1.orgX[i] = this.zp0.orgX[o.rp0], this.zp1.orgY[i] = this.zp0.orgY[o.rp0], this.moveOrig(this.zp1, i, r), this.zp1.curX[i] = this.zp1.orgX[i], this.zp1.curY[i] = this.zp1.orgY[i]);
        const c = this.project(
          this.zp1.curX[i] - this.zp0.curX[o.rp0],
          this.zp1.curY[i] - this.zp0.curY[o.rp0]
        );
        let a = r;
        if (this.ctCompat() && o.gep0 !== 0 && o.gep1 !== 0) {
          const l = this.dualProjectOrus(
            this.zp1.orusX[i] - this.zp0.orusX[o.rp0],
            this.zp1.orusY[i] - this.zp0.orusY[o.rp0]
          );
          l !== 0 && Math.abs(r - l) > this.cutIn() && (a = l);
        }
        return this.move(this.zp1, i, a - c), o.rp1 = o.rp0, o.rp2 = i, e & 1 && (o.rp0 = i), !0;
      }
      case 60: {
        for (; o.loop > 0; ) {
          const r = this.pop();
          if (r >= 0 && r < this.zp1.n && o.rp0 >= 0 && o.rp0 < this.zp0.n) {
            const i = this.project(
              this.zp1.curX[r] - this.zp0.curX[o.rp0],
              this.zp1.curY[r] - this.zp0.curY[o.rp0]
            );
            this.move(this.zp1, r, -i);
          }
          o.loop--;
        }
        return o.loop = 1, !0;
      }
      case 61:
        return o.roundState = 2, !0;
      case 62:
      case 63:
        return this.insMIAP(e), !0;
      case 64: {
        const r = n[s + 1];
        for (let i = 0; i < r; i++)
          this.push(n[s + 2 + i]);
        return !0;
      }
      case 65: {
        const r = n[s + 1];
        for (let i = 0; i < r; i++)
          this.push((n[s + 2 + i * 2] << 8 | n[s + 3 + i * 2]) << 16 >> 16);
        return !0;
      }
      case 66: {
        const r = this.pop(), i = this.pop();
        return i >= 0 && i < this.storage.length && (this.storage[i] = r), !0;
      }
      case 67: {
        const r = this.pop();
        return this.push(r >= 0 && r < this.storage.length && !this.ctBypassStorage(r) ? this.storage[r] : 0), !0;
      }
      case 68: {
        const r = this.pop(), i = this.pop();
        return this.writeCvt(i, r), !0;
      }
      case 69: {
        const r = this.pop();
        return this.push(r >= 0 && r < this.cvt.length ? this.readCvt(r) : 0), !0;
      }
      case 70:
      case 71: {
        const r = this.pop();
        return r < 0 || r >= this.zp2.n ? (this.push(0), !0) : (this.push(
          e & 1 ? this.dualProject(this.zp2.orgX[r], this.zp2.orgY[r]) : this.project(this.zp2.curX[r], this.zp2.curY[r])
        ), !0);
      }
      case 72: {
        const r = this.pop(), i = this.pop();
        if (i < 0 || i >= this.zp2.n)
          return !0;
        const c = this.project(this.zp2.curX[i], this.zp2.curY[i]);
        return this.move(this.zp2, i, r - c), o.gep2 === 0 && (this.zp2.orgX[i] = this.zp2.curX[i], this.zp2.orgY[i] = this.zp2.curY[i]), !0;
      }
      case 73:
      case 74: {
        const r = this.pop(), i = this.pop();
        if (i < 0 || i >= this.zp0.n || r < 0 || r >= this.zp1.n)
          return this.push(0), !0;
        let c;
        return e & 1 ? c = this.project(this.zp0.curX[i] - this.zp1.curX[r], this.zp0.curY[i] - this.zp1.curY[r]) : o.gep0 === 0 || o.gep1 === 0 ? c = this.dualProject(this.zp0.orgX[i] - this.zp1.orgX[r], this.zp0.orgY[i] - this.zp1.orgY[r]) : c = this.dualProjectOrus(this.zp0.orusX[i] - this.zp1.orusX[r], this.zp0.orusY[i] - this.zp1.orusY[r]), this.push(c), !0;
      }
      case 75:
        return this.push(this.currentPpem()), !0;
      case 76:
        return this.push(12), !0;
      case 77:
        return o.autoFlip = !0, !0;
      case 78:
        return o.autoFlip = !1, !0;
      case 79:
        return this.pop(), !0;
      case 80:
      case 81:
      case 82:
      case 83:
      case 84:
      case 85: {
        const r = this.pop(), i = this.pop(), c = e === 80 ? i < r : e === 81 ? i <= r : e === 82 ? i > r : e === 83 ? i >= r : e === 84 ? i === r : i !== r;
        return this.push(c ? 1 : 0), !0;
      }
      case 86:
      case 87: {
        const r = (this.round(this.pop()) & 127) === 64;
        return this.push((e === 86 ? r : !r) ? 1 : 0), !0;
      }
      case 90:
      case 91: {
        const r = this.pop(), i = this.pop();
        return this.push((e === 90 ? i !== 0 && r !== 0 : i !== 0 || r !== 0) ? 1 : 0), !0;
      }
      case 92:
        return this.push(this.pop() === 0 ? 1 : 0), !0;
      case 93:
      case 113:
      case 114:
        return this.insDELTAP(e), !0;
      case 115:
      case 116:
      case 117:
        return this.insDELTAC(e), !0;
      case 94:
        return o.deltaBase = this.pop() & 65535, !0;
      case 95:
        if (o.deltaShift = this.pop() & 65535, o.deltaShift > 6)
          throw new st("sds");
        return !0;
      case 96: {
        const r = this.pop(), i = this.pop();
        return this.push(i + r), !0;
      }
      case 97: {
        const r = this.pop(), i = this.pop();
        return this.push(i - r), !0;
      }
      case 98: {
        const r = this.pop(), i = this.pop();
        if (r === 0)
          throw new st("div0");
        return this.push(vy(i, 64, r)), !0;
      }
      case 99: {
        const r = this.pop(), i = this.pop();
        return this.push(lt(i, r, 64)), !0;
      }
      case 100:
        return this.push(Math.abs(this.pop())), !0;
      case 101:
        return this.push(-this.pop()), !0;
      case 102:
        return this.push(De(this.pop())), !0;
      case 103:
        return this.push(hr(this.pop())), !0;
      case 104:
      case 105:
      case 106:
      case 107:
        return this.push(this.round(this.pop())), !0;
      case 108:
      case 109:
      case 110:
      case 111:
        return !0;
      case 112: {
        const r = this.pop(), i = this.pop();
        return i >= 0 && i < this.cvt.length && (this.cvt[i] = nt(r, this.scale)), !0;
      }
      case 118:
        return this.setSuperRound(16384, this.pop()), o.roundState = 6, !0;
      case 119:
        return this.setSuperRound(11585, this.pop()), o.roundState = 7, !0;
      case 122:
        return o.roundState = 5, !0;
      case 124:
        return o.roundState = 4, !0;
      case 125:
        return o.roundState = 3, !0;
      case 126:
      case 127:
        return this.pop(), !0;
      case 128: {
        for (; o.loop > 0; ) {
          const r = this.pop();
          r >= 0 && r < this.pts.n && (this.pts.tags[r] ^= Ge), o.loop--;
        }
        return o.loop = 1, !0;
      }
      case 129:
      case 130: {
        const r = this.pop(), i = this.pop();
        if (r < 0 || r >= this.pts.n || i < 0 || i > r)
          return !0;
        for (let c = i; c <= r; c++)
          e === 129 ? this.pts.tags[c] |= Ge : this.pts.tags[c] &= ~Ge;
        return !0;
      }
      case 133: {
        const r = this.pop(), i = r & 255;
        return i === 255 ? (o.scanControl = !0, !0) : i === 0 ? (o.scanControl = !1, !0) : (r & 256 && this.ppem <= i && (o.scanControl = !0), r & 512 && this.env.rotated && (o.scanControl = !0), r & 1024 && this.stretched && (o.scanControl = !0), r & 2048 && this.ppem > i && (o.scanControl = !1), r & 4096 && this.env.rotated && (o.scanControl = !1), r & 8192 && this.stretched && (o.scanControl = !1), !0);
      }
      case 134:
      case 135:
        return this.insSDPVTL(e), !0;
      case 136: {
        const r = this.pop();
        let i = 0;
        return r & 1 && (i = this.env.version), r & 2 && this.env.rotated && (i |= 256), r & 4 && this.stretched && (i |= 512), r & 32 && this.env.grayscale && (i |= 4096), r & 64 && this.env.clearType && (i |= 8192), r & 128 && this.env.clearType && this.env.compatibleWidths !== !1 && (i |= 16384), r & 256 && this.env.symmetricSmoothing && (i |= 32768), this.push(i), !0;
      }
      case 138: {
        const r = this.pop(), i = this.pop(), c = this.pop();
        return this.push(i), this.push(r), this.push(c), !0;
      }
      case 139: {
        const r = this.pop(), i = this.pop();
        return this.push(Math.max(i, r)), !0;
      }
      case 140: {
        const r = this.pop(), i = this.pop();
        return this.push(Math.min(i, r)), !0;
      }
      case 141: {
        const r = this.pop();
        return r >= 0 && (o.scanType = r & 65535), !0;
      }
      case 142: {
        const r = this.pop(), i = this.pop();
        if (r < 1 || r > 3)
          throw new st("instctrl");
        if (!this.inPrep)
          return !0;
        const c = 1 << r - 1;
        return o.instructControl = o.instructControl & ~c | (i ? c : 0), !0;
      }
      default:
        return !1;
    }
  }
  // -----------------------------------------------------------------------
  // Individual instructions
  // -----------------------------------------------------------------------
  moveZp2(e, n, s, o) {
    const r = this.gs;
    r.fvx !== 0 && (this.zp2.curX[e] += n, o && (this.zp2.tags[e] |= Nn)), r.fvy !== 0 && (this.zp2.curY[e] += s, o && (this.zp2.tags[e] |= Re));
  }
  pointDisplacement(e) {
    const n = this.gs, s = e & 1 ? this.zp0 : this.zp1, o = e & 1 ? n.rp1 : n.rp2;
    if (o < 0 || o >= s.n)
      return null;
    const r = this.project(s.curX[o] - s.orgX[o], s.curY[o] - s.orgY[o]);
    return {
      dx: lt(r, n.fvx, this.fDotP),
      dy: lt(r, n.fvy, this.fDotP),
      zone: s,
      ref: o
    };
  }
  insSHP(e) {
    const n = this.gs, s = this.pointDisplacement(e);
    for (; n.loop > 0; ) {
      const o = this.pop();
      s && o >= 0 && o < this.zp2.n && this.moveZp2(o, s.dx, s.dy, !0), n.loop--;
    }
    n.loop = 1;
  }
  insSHC(e) {
    const n = this.gs, s = this.pop(), o = n.gep2 === 0 ? 1 : this.zp2.endPts.length;
    if (s < 0 || s >= o)
      return;
    const r = this.pointDisplacement(e);
    if (!r)
      return;
    const i = s === 0 ? 0 : this.zp2.endPts[s - 1] + 1, c = n.gep2 === 0 ? this.zp2.n : this.zp2.endPts[s] + 1;
    for (let a = i; a < c; a++)
      (r.zone !== this.zp2 || r.ref !== a) && this.moveZp2(a, r.dx, r.dy, !0);
  }
  insSHZ(e) {
    const n = this.gs, s = this.pop();
    if (s < 0 || s > 1)
      return;
    const o = this.pointDisplacement(e);
    if (!o)
      return;
    let r;
    n.gep2 === 0 ? r = this.zp2.n : n.gep2 === 1 && this.zp2.endPts.length > 0 ? r = this.zp2.endPts[this.zp2.endPts.length - 1] + 1 : r = 0;
    for (let i = 0; i < r; i++)
      (o.zone !== this.zp2 || o.ref !== i) && this.moveZp2(i, o.dx, o.dy, !1);
  }
  insMIAP(e) {
    const n = this.gs, s = this.pop(), o = this.pop();
    if (o < 0 || o >= this.zp0.n || s < 0 || s >= this.cvt.length) {
      n.rp0 = n.rp1 = o;
      return;
    }
    let r = this.readCvt(s);
    n.gep0 === 0 && (this.zp0.orgX[o] = He(r, n.fvx), this.zp0.orgY[o] = He(r, n.fvy), this.zp0.curX[o] = this.zp0.orgX[o], this.zp0.curY[o] = this.zp0.orgY[o]);
    const i = this.project(this.zp0.curX[o], this.zp0.curY[o]);
    e & 1 && (Math.abs(r - i) > this.cutIn() && (r = i), r = this.round(r)), this.move(this.zp0, o, r - i), n.rp0 = n.rp1 = o;
  }
  insMDRP(e) {
    const n = this.gs, s = this.pop();
    if (s < 0 || s >= this.zp1.n || n.rp0 < 0 || n.rp0 >= this.zp0.n) {
      n.rp1 = n.rp0, n.rp2 = s, e & 16 && (n.rp0 = s);
      return;
    }
    let o;
    n.gep0 === 0 || n.gep1 === 0 ? o = this.dualProject(this.zp1.orgX[s] - this.zp0.orgX[n.rp0], this.zp1.orgY[s] - this.zp0.orgY[n.rp0]) : o = this.dualProjectOrus(
      this.zp1.orusX[s] - this.zp0.orusX[n.rp0],
      this.zp1.orusY[s] - this.zp0.orusY[n.rp0]
    ), n.swCutIn > 0 && o < n.swValue + n.swCutIn && o > n.swValue - n.swCutIn && (o = o >= 0 ? n.swValue : -n.swValue);
    let r = e & 4 ? this.round(o) : o;
    e & 8 && (o >= 0 ? r < this.minDistance() && (r = this.minDistance()) : r > -this.minDistance() && (r = -this.minDistance()));
    const i = this.project(this.zp1.curX[s] - this.zp0.curX[n.rp0], this.zp1.curY[s] - this.zp0.curY[n.rp0]);
    this.move(this.zp1, s, r - i), n.rp1 = n.rp0, n.rp2 = s, e & 16 && (n.rp0 = s);
  }
  insMIRP(e) {
    const n = this.gs, s = this.pop() + 1, o = this.pop();
    if (o < 0 || o >= this.zp1.n || s < 0 || s > this.cvt.length || n.rp0 < 0 || n.rp0 >= this.zp0.n) {
      n.rp1 = n.rp0, e & 16 && (n.rp0 = o), n.rp2 = o;
      return;
    }
    let r = s === 0 ? 0 : this.readCvt(s - 1);
    Math.abs(r - n.swValue) < n.swCutIn && (r = r >= 0 ? n.swValue : -n.swValue), n.gep1 === 0 && (this.zp1.orgX[o] = this.zp0.orgX[n.rp0] + He(r, n.fvx), this.zp1.orgY[o] = this.zp0.orgY[n.rp0] + He(r, n.fvy), this.zp1.curX[o] = this.zp1.orgX[o], this.zp1.curY[o] = this.zp1.orgY[o]);
    const i = this.dualProject(this.zp1.orgX[o] - this.zp0.orgX[n.rp0], this.zp1.orgY[o] - this.zp0.orgY[n.rp0]), c = this.project(this.zp1.curX[o] - this.zp0.curX[n.rp0], this.zp1.curY[o] - this.zp0.curY[n.rp0]);
    n.autoFlip && i < 0 != r < 0 && (r = -r);
    let a;
    e & 4 ? (n.gep0 === n.gep1 && Math.abs(r - i) > this.cutIn() && (r = i), a = this.round(r)) : (this.env.clearType && this.ctCompat() && n.gep0 === n.gep1 && Math.abs(r - i) > this.cutIn() && (r = i), a = r), e & 8 && (i >= 0 ? a < this.minDistance() && (a = this.minDistance()) : a > -this.minDistance() && (a = -this.minDistance())), this.move(this.zp1, o, a - c), n.rp1 = n.rp0, e & 16 && (n.rp0 = o), n.rp2 = o;
  }
  insIP() {
    const e = this.gs, n = e.gep0 === 0 || e.gep1 === 0 || e.gep2 === 0, s = e.rp1, o = e.rp2;
    let r = 0, i = 0;
    if (s < 0 || s >= this.zp0.n) {
      e.loop = 1;
      return;
    }
    for (o >= 0 && o < this.zp1.n && (n ? r = this.dualProject(this.zp1.orgX[o] - this.zp0.orgX[s], this.zp1.orgY[o] - this.zp0.orgY[s]) : r = this.dualProjectOrusRaw(
      this.zp1.orusX[o] - this.zp0.orusX[s],
      this.zp1.orusY[o] - this.zp0.orusY[s]
    ), i = this.project(this.zp1.curX[o] - this.zp0.curX[s], this.zp1.curY[o] - this.zp0.curY[s])); e.loop > 0; ) {
      const a = this.pop();
      if (e.loop--, a < 0 || a >= this.zp2.n)
        continue;
      let l;
      n ? l = this.dualProject(this.zp2.orgX[a] - this.zp0.orgX[s], this.zp2.orgY[a] - this.zp0.orgY[s]) : l = this.dualProjectOrusRaw(this.zp2.orusX[a] - this.zp0.orusX[s], this.zp2.orusY[a] - this.zp0.orusY[s]);
      const u = this.project(this.zp2.curX[a] - this.zp0.curX[s], this.zp2.curY[a] - this.zp0.curY[s]);
      let h;
      l ? h = r ? lt(l, i, r) : l : h = 0, this.move(this.zp2, a, h - u);
    }
    e.loop = 1;
  }
  /** IP's orus projection: unscaled when both axes share one scale (only the ratio matters). */
  dualProjectOrusRaw(e, n) {
    return this.xScale === this.yScale ? this.dualProject(e, n) : this.dualProject(nt(e, this.xScale), nt(n, this.yScale));
  }
  insIUP(e) {
    const n = this.pts, s = e ? Nn : Re, o = e ? n.orgX : n.orgY, r = e ? n.curX : n.curY, i = e ? n.orusX : n.orusY, c = n.endPts.length;
    let a = 0;
    for (let l = 0; l < c; l++) {
      let u = n.endPts[l];
      const h = a;
      for (u >= n.n && (u = n.n - 1); a <= u && !(n.tags[a] & s); )
        a++;
      if (a <= u) {
        const f = a;
        let g = a;
        for (a++; a <= u; )
          n.tags[a] & s && (gr(o, r, i, g + 1, a - 1, g, a), g = a), a++;
        if (g === f) {
          const p = r[g] - o[g];
          for (let d = h; d <= u; d++)
            d !== g && (r[d] += p);
        } else
          gr(o, r, i, g + 1, u, g, f), f > 0 && gr(o, r, i, h, f - 1, g, f);
      }
      a = u + 1;
    }
  }
  insISECT() {
    const e = this.pop(), n = this.pop(), s = this.pop(), o = this.pop(), r = this.pop(), i = this.zp0, c = this.zp1, a = this.zp2;
    if (r < 0 || r >= a.n || o < 0 || o >= c.n || s < 0 || s >= c.n || n < 0 || n >= i.n || e < 0 || e >= i.n)
      return;
    const l = i.curX[e] - i.curX[n], u = i.curY[e] - i.curY[n], h = c.curX[s] - c.curX[o], f = c.curY[s] - c.curY[o], g = i.curX[n] - c.curX[o], p = i.curY[n] - c.curY[o], d = lt(h, -u, 64) + lt(f, l, 64), y = lt(h, l, 64) + lt(f, u, 64);
    if (19 * Math.abs(d) > Math.abs(y)) {
      const m = lt(g, -u, 64) + lt(p, l, 64);
      a.curX[r] = c.curX[o] + lt(m, h, d), a.curY[r] = c.curY[o] + lt(m, f, d);
    } else
      a.curX[r] = Math.trunc((c.curX[o] + c.curX[s] + i.curX[n] + i.curX[e]) / 4), a.curY[r] = Math.trunc((c.curY[o] + c.curY[s] + i.curY[n] + i.curY[e]) / 4);
    a.tags[r] |= Nn | Re;
  }
  insSDPVTL(e) {
    const n = this.gs, s = this.pop(), o = this.pop();
    if (s < 0 || s >= this.zp2.n || o < 0 || o >= this.zp1.n)
      return;
    let r = e, i = this.zp1.orgX[o] - this.zp2.orgX[s], c = this.zp1.orgY[o] - this.zp2.orgY[s];
    if (i === 0 && c === 0 && (i = 16384, r = 0), r & 1) {
      const a = c;
      c = i, i = -a;
    }
    if ([n.dvx, n.dvy] = this.normalize(i, c), r = e, i = this.zp1.curX[o] - this.zp2.curX[s], c = this.zp1.curY[o] - this.zp2.curY[s], i === 0 && c === 0 && (i = 16384, r = 0), r & 1) {
      const a = c;
      c = i, i = -a;
    }
    [n.pvx, n.pvy] = this.normalize(i, c), this.pvFromSpvtl = !1, this.computeFuncs();
  }
  insDELTAP(e) {
    const n = this.pop(), s = this.currentPpem();
    for (let o = 1; o <= n; o++) {
      if (this.stack.length < 2) {
        this.stack.length = 0;
        return;
      }
      const r = this.pop(), i = this.pop();
      if (r < 0 || r >= this.zp0.n)
        continue;
      let c = (i & 240) >> 4;
      if (e === 113 && (c += 16), e === 114 && (c += 32), c += this.gs.deltaBase, s === c) {
        let a = (i & 15) - 8;
        if (a >= 0 && a++, a *= 1 << 6 - this.gs.deltaShift, this.ctCompat() && !(this.gs.fvx === 0 && this.zp0.tags[r] & Re))
          continue;
        this.move(this.zp0, r, a);
      }
    }
  }
  insDELTAC(e) {
    const n = this.pop(), s = this.currentPpem();
    for (let o = 1; o <= n; o++) {
      if (this.stack.length < 2) {
        this.stack.length = 0;
        return;
      }
      const r = this.pop(), i = this.pop();
      let c = (i & 240) >> 4;
      if (e === 116 && (c += 16), e === 117 && (c += 32), c += this.gs.deltaBase, s === c) {
        let a = (i & 15) - 8;
        a >= 0 && a++, a *= 1 << 6 - this.gs.deltaShift, this.moveCvt(r, a);
      }
    }
  }
};
function gr(t, e, n, s, o, r, i) {
  if (s > o)
    return;
  let c = n[r], a = n[i];
  if (c > a) {
    const d = c;
    c = a, a = d;
    const y = r;
    r = i, i = y;
  }
  const l = t[r], u = t[i], h = e[r], f = e[i], g = h - l, p = f - u;
  if (h === f || c === a) {
    for (let d = s; d <= o; d++) {
      let y = t[d];
      y <= l ? y += g : y >= u ? y += p : y = h, e[d] = y;
    }
    return;
  }
  for (let d = s; d <= o; d++) {
    let y = t[d];
    y <= l ? y += g : y >= u ? y += p : y = h + lt(n[d] - c, f - h, a - c), e[d] = y;
  }
}
var fe = 8, uo = 16, ho = 32;
function pr() {
  return { flags: 0, start: 0, height: 0, xs: [], next: null, X: 0, offset: 0, countL: 0 };
}
var Ns = 0, ge = 1, Xn = 2;
function Iy(t, e) {
  if (!t)
    return 2;
  switch (e) {
    case 0:
      return 0;
    case 1:
      return 1;
    case 4:
      return 4;
    case 5:
      return 5;
    default:
      return 2;
  }
}
var ta = class {
  constructor(t) {
    this.dropOutControl = t, this.minY = 0, this.maxY = 0, this.profiles = [], this.cProfile = pr(), this.gProfile = null, this.fresh = !1, this.joint = !1, this.state = Ns, this.lastX = 0, this.lastY = 0, this.arcX = [], this.arcY = [], this.arc = 0, this.precBits = 16, this.precStep = 4096, this.precJitter = 480, this.prec = 2 ** this.precBits, this.precHalf = this.prec / 2, this.precScale = this.prec / 64;
  }
  floorP(t) {
    return Math.floor(t / this.prec) * this.prec;
  }
  ceilP(t) {
    return Math.floor((t + this.prec - 1) / this.prec) * this.prec;
  }
  trunc(t) {
    return Math.floor(t / this.prec);
  }
  frac(t) {
    return t - this.floorP(t);
  }
  scaled(t) {
    return t * this.precScale - this.precHalf;
  }
  isBottomOvershoot(t) {
    return this.ceilP(t) - t >= this.precHalf;
  }
  isTopOvershoot(t) {
    return t - this.floorP(t) >= this.precHalf;
  }
  // -------------------------------------------------------------------
  // Profile construction
  // -------------------------------------------------------------------
  newProfileState(t, e) {
    const n = this.cProfile;
    n.start = 0, n.height = 0, n.xs = [], n.next = null, n.flags = this.dropOutControl, t === ge ? (n.flags |= fe, e && (n.flags |= ho)) : e && (n.flags |= uo), this.gProfile || (this.gProfile = n), this.state = t, this.fresh = !0, this.joint = !1;
  }
  endProfile(t) {
    const e = this.cProfile, n = e.xs.length;
    if (n > 0) {
      t && (e.flags |= e.flags & fe ? uo : ho), e.height = n, this.profiles.push(e);
      const s = pr();
      e.next = s, this.cProfile = s;
    }
    this.joint = !1;
  }
  lineUp(t, e, n, s, o, r) {
    let i = n - t;
    const c = s - e;
    if (c <= 0 || s < o || e > r)
      return;
    let a, l, u, h;
    e < o ? (t += dr(i, o - e, c), a = this.trunc(o), l = 0) : (a = this.trunc(e), l = this.frac(e)), s > r ? (u = this.trunc(r), h = 0) : (u = this.trunc(s), h = this.frac(s));
    const f = this.cProfile.xs;
    if (l > 0) {
      if (a === u)
        return;
      t += dr(i, this.prec - l, c), a += 1;
    } else this.joint && (f.pop(), this.joint = !1);
    this.joint = h === 0, this.fresh && (this.cProfile.start = a, this.fresh = !1);
    let g = u - a + 1, p, d;
    i > 0 ? (p = Math.floor(this.prec * i / c), d = this.prec * i % c, i = 1) : (p = -Math.floor(this.prec * -i / c), d = this.prec * -i % c, i = -1);
    let y = -c;
    for (; g > 0; )
      f.push(t), t += p, y += d, y >= 0 && (y -= c, t += i), g--;
  }
  lineDown(t, e, n, s, o, r) {
    const i = this.fresh;
    this.lineUp(t, -e, n, -s, -r, -o), i && !this.fresh && (this.cProfile.start = -this.cProfile.start);
  }
  splitConic(t) {
    const e = this.arcX, n = this.arcY;
    e[t + 4] = e[t + 2];
    let s = e[t] + e[t + 1], o = e[t + 1] + e[t + 2];
    e[t + 3] = Math.floor(o / 2), e[t + 2] = Math.floor((s + o) / 4), e[t + 1] = Math.floor(s / 2), n[t + 4] = n[t + 2], s = n[t] + n[t + 1], o = n[t + 1] + n[t + 2], n[t + 3] = Math.floor(o / 2), n[t + 2] = Math.floor((s + o) / 4), n[t + 1] = Math.floor(s / 2);
  }
  bezierUp(t, e) {
    const n = this.arcX, s = this.arcY;
    let o = this.arc;
    const r = this.cProfile.xs;
    let i = s[o + 2], c = s[o];
    const a = () => {
      this.arc -= 2;
    };
    if (c < t || i > e) {
      a();
      return;
    }
    let l = this.floorP(c);
    l > e && (l = e);
    let u = t, h;
    if (i < t)
      h = t;
    else {
      h = this.ceilP(i);
      const g = this.frac(i);
      u = h, g === 0 && (this.joint && (r.pop(), this.joint = !1), r.push(n[o + 2]), h += this.prec);
    }
    if (this.fresh && (this.cProfile.start = this.trunc(u), this.fresh = !1), l < h) {
      a();
      return;
    }
    const f = o;
    do
      this.joint = !1, c = s[o], c > h ? (i = s[o + 2], c - i >= this.precStep ? (this.splitConic(o), o += 2) : (r.push(n[o + 2] + dr(n[o] - n[o + 2], h - i, c - i)), o -= 2, h += this.prec)) : (c === h && (this.joint = !0, r.push(n[o]), h += this.prec), o -= 2);
    while (o >= f && h <= l);
    a();
  }
  bezierDown(t, e) {
    const n = this.arcY, s = this.arc;
    n[s] = -n[s], n[s + 1] = -n[s + 1], n[s + 2] = -n[s + 2];
    const o = this.fresh;
    this.bezierUp(-e, -t), o && !this.fresh && (this.cProfile.start = -this.cProfile.start), n[s] = -n[s];
  }
  lineTo(t, e) {
    switch (this.state) {
      case Ns:
        e > this.lastY ? this.newProfileState(ge, this.isBottomOvershoot(this.lastY)) : e < this.lastY && this.newProfileState(Xn, this.isTopOvershoot(this.lastY));
        break;
      case ge:
        e < this.lastY && (this.endProfile(this.isTopOvershoot(this.lastY)), this.newProfileState(Xn, this.isTopOvershoot(this.lastY)));
        break;
      case Xn:
        e > this.lastY && (this.endProfile(this.isBottomOvershoot(this.lastY)), this.newProfileState(ge, this.isBottomOvershoot(this.lastY)));
        break;
    }
    this.state === ge ? this.lineUp(this.lastX, this.lastY, t, e, this.minY, this.maxY) : this.state === Xn && this.lineDown(this.lastX, this.lastY, t, e, this.minY, this.maxY), this.lastX = t, this.lastY = e;
  }
  conicTo(t, e, n, s) {
    const o = this.arcX, r = this.arcY;
    this.arc = 0, o[2] = this.lastX, r[2] = this.lastY, o[1] = t, r[1] = e, o[0] = n, r[0] = s;
    let i = n, c = s;
    do {
      const a = this.arc, l = r[a + 2], u = r[a + 1];
      c = r[a], i = o[a];
      let h, f;
      if (l <= c ? (h = l, f = c) : (h = c, f = l), u < h || u > f)
        this.splitConic(a), this.arc += 2;
      else if (l === c)
        this.arc -= 2;
      else {
        const g = l < c ? ge : Xn;
        if (this.state !== g) {
          const p = g === ge ? this.isBottomOvershoot(l) : this.isTopOvershoot(l);
          this.state !== Ns && this.endProfile(p), this.newProfileState(g, p);
        }
        g === ge ? this.bezierUp(this.minY, this.maxY) : this.bezierDown(this.minY, this.maxY);
      }
    } while (this.arc >= 0);
    this.lastX = i, this.lastY = c;
  }
  decomposeContour(t, e, n, s) {
    const o = (f) => this.scaled(s ? t.ys[f] : t.xs[f]), r = (f) => this.scaled(s ? t.xs[f] : t.ys[f]);
    let i = o(e), c = r(e);
    const a = o(n), l = r(n);
    let u = n, h = e;
    for (t.onCurve[e] || (t.onCurve[n] ? (i = a, c = l, u--) : (i = Math.trunc((i + a) / 2), c = Math.trunc((c + l) / 2)), h--), this.lastX = i, this.lastY = c; h < u; ) {
      if (h++, t.onCurve[h]) {
        this.lineTo(o(h), r(h));
        continue;
      }
      let f = o(h), g = r(h), p = !1;
      for (; ; ) {
        if (h < u) {
          h++;
          const d = o(h), y = r(h);
          if (t.onCurve[h]) {
            this.conicTo(f, g, d, y);
            break;
          }
          this.conicTo(f, g, Math.trunc((f + d) / 2), Math.trunc((g + y) / 2)), f = d, g = y;
          continue;
        }
        this.conicTo(f, g, i, c), p = !0;
        break;
      }
      if (p)
        return;
    }
    this.lineTo(i, c);
  }
  /** Converts the whole outline to profiles; returns false when nothing is drawable. */
  convert(t, e, n, s) {
    this.minY = n, this.maxY = s, this.profiles = [], this.cProfile = pr();
    let o = 0;
    for (const r of t.endPts) {
      if (this.state = Ns, this.gProfile = null, r >= o && this.decomposeContour(t, o, r, e), o = r + 1, this.frac(this.lastY) === 0 && this.lastY >= this.minY && this.lastY <= this.maxY) {
        const a = this.gProfile;
        a && (a.flags & fe) === (this.cProfile.flags & fe) && this.cProfile.xs.pop();
      }
      const i = this.cProfile;
      let c;
      this.cProfile.xs.length > 0 && this.cProfile.flags & fe ? c = this.isTopOvershoot(this.lastY) : c = this.isBottomOvershoot(this.lastY), this.endProfile(c), this.gProfile && (i.next = this.gProfile);
    }
    return this.profiles.length > 0;
  }
  // -------------------------------------------------------------------
  // Sweep
  // -------------------------------------------------------------------
  /**
   * Sweeps the profiles. `span(y, x1, x2, left, right)` and
   * `drop(...)` receive the scanline index and the two crossings.
   */
  sweep(t, e) {
    if (this.profiles.length === 0)
      return;
    let n = 1 / 0, s = -1 / 0;
    for (const l of this.profiles)
      l.flags & fe ? l.offset = 0 : (l.start = l.start - l.height + 1, l.offset = l.height - 1), l.start < n && (n = l.start), l.start + l.height - 1 > s && (s = l.start + l.height - 1), l.X = 0;
    const o = this.profiles.slice();
    let r = [], i = [];
    const c = (l, u) => {
      let h = 0;
      for (; h < l.length && !(u.X < l[h].X); ) h++;
      l.splice(h, 0, u);
    }, a = (l) => {
      for (const u of l)
        u.X = u.xs[u.offset], u.offset += u.flags & fe ? 1 : -1, u.height--;
      l.sort((u, h) => u.X - h.X);
    };
    for (let l = n; l <= s; l++) {
      for (let f = 0; f < o.length; ) {
        const g = o[f];
        g.start === l ? (o.splice(f, 1), c(g.flags & fe ? r : i, g)) : f++;
      }
      a(r), a(i);
      let u = 0;
      const h = Math.min(r.length, i.length);
      for (let f = 0; f < h; f++) {
        const g = r[f], p = i[f];
        let d = g.X, y = p.X;
        if (d > y) {
          const b = d;
          d = y, y = b;
        }
        const m = this.floorP(d), M = this.ceilP(y);
        if (y - d <= this.prec && m !== d && M !== y && (m > M || M === m + this.prec)) {
          (g.flags & 7) !== 2 && (g.X = d, p.X = y, g.countL = 1, u++);
          continue;
        }
        t(l, d, y);
      }
      if (u > 0)
        for (let f = 0; f < h; f++) {
          const g = r[f];
          g.countL && (g.countL = 0, e(l, g.X, i[f].X, g, i[f]));
        }
      r = r.filter((f) => f.height > 0), i = i.filter((f) => f.height > 0);
    }
  }
  get precision() {
    return this.prec;
  }
  get jitter() {
    return this.precJitter;
  }
  get half() {
    return this.precHalf;
  }
  floorPub(t) {
    return this.floorP(t);
  }
  ceilPub(t) {
    return this.ceilP(t);
  }
  truncPub(t) {
    return this.trunc(t);
  }
};
function dr(t, e, n) {
  let s = 1;
  t < 0 && (t = -t, s = -s), e < 0 && (e = -e, s = -s), n < 0 && (n = -n, s = -s);
  const o = n > 0 ? Math.floor((t * e + Math.floor(n / 2)) / n) : 2147483647;
  return s < 0 ? -o : o;
}
function Py(t) {
  const e = t.xs.length;
  if (e === 0)
    return null;
  let n = 1 / 0, s = -1 / 0, o = 1 / 0, r = -1 / 0;
  for (let h = 0; h < e; h++) {
    const f = t.xs[h], g = t.ys[h];
    f < n && (n = f), f > s && (s = f), g < o && (o = g), g > r && (r = g);
  }
  let i = Math.floor((n + 31) / 64), c = Math.floor((s + 32) / 64), a = Math.floor((o + 31) / 64), l = Math.floor((r + 32) / 64);
  const u = (h, f) => (h + f & 63) - f;
  return i === c && (u(n, 31) + u(s, 32) < 0 ? i -= 1 : c += 1), a === l && (u(o, 31) + u(r, 32) < 0 ? a -= 1 : l += 1), { xMin: i, xMax: c, yMin: a, yMax: l };
}
function Yi(t, e, n) {
  const s = n ?? Py(t);
  if (!s)
    return null;
  const o = s.xMax - s.xMin, r = s.yMax - s.yMin;
  if (o <= 0 || r <= 0 || o > 4096 || r > 4096)
    return null;
  const i = t.xs.length, c = new Float64Array(i), a = new Float64Array(i);
  for (let p = 0; p < i; p++)
    c[p] = t.xs[p] - s.xMin * 64, a[p] = t.ys[p] - s.yMin * 64;
  const l = { xs: c, ys: a, onCurve: t.onCurve, endPts: t.endPts }, u = new Uint8Array(o * r), h = (p, d) => (r - 1 - d) * o + p, f = new ta(e), g = f.precision;
  if (f.convert(l, !1, 0, (r - 1) * g) && f.sweep(
    (p, d, y) => {
      let m = f.ceilPub(d), M = f.floorPub(y);
      if (e !== 2 && y - d - g <= f.jitter && m !== d && M !== y && (M = m), m = f.truncPub(m), M = f.truncPub(M), M >= 0 && m < o && p >= 0 && p < r) {
        m < 0 && (m = 0), M >= o && (M = o - 1);
        for (let b = m; b <= M; b++) u[h(b, p)] = 1;
      }
    },
    (p, d, y, m, M) => {
      let b = f.ceilPub(d), w = f.floorPub(y), x = b;
      if (b > w) {
        const T = m.flags & 7;
        if (b !== w + g)
          return;
        switch (T) {
          case 0:
            x = w;
            break;
          case 4:
            x = f.floorPub(Math.floor((d + y + Math.floor(g * 63 / 64)) / 2));
            break;
          case 1:
          case 5:
            if (m.next === M && m.height <= 0 && !(m.flags & uo && y - d >= f.half) || M.next === m && m.start === p && !(m.flags & ho && y - d >= f.half))
              return;
            x = T === 1 ? w : f.floorPub(Math.floor((d + y + Math.floor(g * 63 / 64)) / 2));
            break;
          default:
            return;
        }
        x < 0 ? x = b : f.truncPub(x) >= o && (x = w);
        const v = f.truncPub(x === b ? w : b);
        if (v >= 0 && v < o && p >= 0 && p < r && u[h(v, p)])
          return;
      }
      const E = f.truncPub(x);
      E >= 0 && E < o && p >= 0 && p < r && (u[h(E, p)] = 1);
    }
  ), e !== 2) {
    const p = new ta(e);
    p.convert(l, !0, 0, (o - 1) * g) && p.sweep(
      (d, y, m) => {
        if (m - y < g) {
          const M = p.ceilPub(y), b = p.floorPub(m);
          if (M === b) {
            const w = p.truncPub(M);
            w >= 0 && w < r && d >= 0 && d < o && (u[h(d, w)] = 1);
          }
        }
      },
      (d, y, m, M, b) => {
        let w = p.ceilPub(y);
        const x = p.floorPub(m);
        let E = w;
        if (w > x) {
          const v = M.flags & 7;
          if (w !== x + g)
            return;
          switch (v) {
            case 0:
              E = x;
              break;
            case 4:
              E = p.floorPub(Math.floor((y + m + Math.floor(g * 63 / 64)) / 2));
              break;
            case 1:
            case 5:
              if (M.next === b && M.height <= 0 && !(M.flags & uo && m - y >= p.half) || b.next === M && M.start === d && !(M.flags & ho && m - y >= p.half))
                return;
              E = v === 1 ? x : p.floorPub(Math.floor((y + m + Math.floor(g * 63 / 64)) / 2));
              break;
            default:
              return;
          }
          if (E < 0 ? E = w : p.truncPub(E) >= r && (E = x), w = p.truncPub(E === w ? x : w), w >= 0 && w < r && d >= 0 && d < o && u[h(d, w)])
            return;
        }
        const T = p.truncPub(E);
        T >= 0 && T < r && d >= 0 && d < o && (u[h(d, T)] = 1);
      }
    );
  }
  return { width: o, height: r, left: s.xMin, top: s.yMax, data: u };
}
var Sy = 4;
function Ry(t, e, n, s = 0) {
  const o = t.xs.length;
  if (o === 0)
    return null;
  let r = 1 / 0, i = -1 / 0, c = 1 / 0, a = -1 / 0;
  for (let f = 0; f < o; f++)
    r = Math.min(r, t.xs[f]), i = Math.max(i, t.xs[f]), c = Math.min(c, t.ys[f]), a = Math.max(a, t.ys[f]);
  const l = {
    xMin: Math.floor(r / 64) - s,
    xMax: Math.ceil(i / 64) + s,
    yMin: Math.floor(c / 64),
    yMax: Math.ceil(a / 64)
  };
  l.xMax <= l.xMin && (l.xMax = l.xMin + 1), l.yMax <= l.yMin && (l.yMax = l.yMin + 1);
  const u = {
    xs: Array.from(t.xs, (f) => f * e),
    ys: Array.from(t.ys, (f) => f * n),
    onCurve: t.onCurve,
    endPts: t.endPts
  }, h = Yi(u, 2, { xMin: l.xMin * e, xMax: l.xMax * e, yMin: l.yMin * n, yMax: l.yMax * n });
  return h ? { box: l, hi: h } : null;
}
function Ay(t) {
  const e = t.xs.length;
  if (e === 0)
    return null;
  let n = 1 / 0, s = -1 / 0, o = 1 / 0, r = -1 / 0;
  for (let g = 0; g < e; g++)
    n = Math.min(n, t.xs[g]), s = Math.max(s, t.xs[g]), o = Math.min(o, t.ys[g]), r = Math.max(r, t.ys[g]);
  const i = {
    xMin: Math.floor(n / 64),
    xMax: Math.ceil(s / 64),
    yMin: Math.floor(o / 64),
    yMax: Math.ceil(r / 64)
  };
  i.xMax <= i.xMin && (i.xMax = i.xMin + 1), i.yMax <= i.yMin && (i.yMax = i.yMin + 1);
  const c = Sy, a = {
    xs: Array.from(t.xs, (g) => g * c),
    ys: Array.from(t.ys, (g) => g * c),
    onCurve: t.onCurve,
    endPts: t.endPts
  }, l = Yi(a, 2, { xMin: i.xMin * c, xMax: i.xMax * c, yMin: i.yMin * c, yMax: i.yMax * c });
  if (!l)
    return null;
  const u = i.xMax - i.xMin, h = i.yMax - i.yMin, f = new Uint8Array(u * h);
  for (let g = 0; g < l.height; g++) {
    const p = Math.floor(g / c) * u;
    for (let d = 0; d < l.width; d++)
      l.data[g * l.width + d] && f[p + Math.floor(d / c)]++;
  }
  return { width: u, height: h, left: i.xMin, top: i.yMax, data: f };
}
var os = 3, Jr = 4, Uy = 5, Kr = 6, Yn = 0, ky = {
  "ms shell dlg": "microsoft sans serif",
  "ms shell dlg 2": "tahoma",
  helvetica: "arial",
  times: "times new roman",
  "arial ce": "arial",
  "arial cyr": "arial",
  "arial greek": "arial",
  "arial tur": "arial",
  "arial baltic": "arial",
  "courier new ce": "courier new",
  "courier new cyr": "courier new",
  "courier new greek": "courier new",
  "courier new tur": "courier new",
  "courier new baltic": "courier new",
  "times new roman ce": "times new roman",
  "times new roman cyr": "times new roman",
  "times new roman greek": "times new roman",
  "times new roman tur": "times new roman",
  "times new roman baltic": "times new roman",
  "tahoma armenian": "tahoma",
  "arabic transparent": "arial"
};
function Ly(t) {
  const e = t.height - 1, n = Math.floor(e / 2), s = (i) => e > 0 ? Math.floor(((e - i) * n * 2 + e) / (2 * e)) : 0, o = t.width + n, r = new Uint8Array(o * t.height);
  for (let i = 0; i < t.height; i++)
    r.set(t.data.subarray(i * t.width, (i + 1) * t.width), i * o + s(i));
  return { ...t, width: o, data: r };
}
var Fy = [0, 0, 120, 150, 250, 250];
function ea(t) {
  return Math.max(1, t.pixHeight - t.internalLeading);
}
var Dy = {
  helv: "ms sans serif",
  "tms rmn": "ms serif"
}, _y = 22272 / 65536;
function na(t) {
  return (t.fsSelection & 1) !== 0 || (t.macStyle & 2) !== 0;
}
var sa = [
  8364,
  129,
  8218,
  402,
  8222,
  8230,
  8224,
  8225,
  710,
  8240,
  352,
  8249,
  338,
  141,
  381,
  143,
  144,
  8216,
  8217,
  8220,
  8221,
  8226,
  8211,
  8212,
  732,
  8482,
  353,
  8250,
  339,
  157,
  382,
  376
], oa = 255, ra = [
  199,
  252,
  233,
  226,
  228,
  224,
  229,
  231,
  234,
  235,
  232,
  239,
  238,
  236,
  196,
  197,
  201,
  230,
  198,
  244,
  246,
  242,
  251,
  249,
  255,
  214,
  220,
  162,
  163,
  165,
  8359,
  402,
  225,
  237,
  243,
  250,
  241,
  209,
  170,
  186,
  191,
  8976,
  172,
  189,
  188,
  161,
  171,
  187,
  9617,
  9618,
  9619,
  9474,
  9508,
  9569,
  9570,
  9558,
  9557,
  9571,
  9553,
  9559,
  9565,
  9564,
  9563,
  9488,
  9492,
  9524,
  9516,
  9500,
  9472,
  9532,
  9566,
  9567,
  9562,
  9556,
  9577,
  9574,
  9568,
  9552,
  9580,
  9575,
  9576,
  9572,
  9573,
  9561,
  9560,
  9554,
  9555,
  9579,
  9578,
  9496,
  9484,
  9608,
  9604,
  9612,
  9616,
  9600,
  945,
  223,
  915,
  960,
  931,
  963,
  181,
  964,
  934,
  920,
  937,
  948,
  8734,
  966,
  949,
  8745,
  8801,
  177,
  8805,
  8804,
  8992,
  8993,
  247,
  8776,
  176,
  8729,
  183,
  8730,
  8319,
  178,
  9632,
  160
], Ny = class {
  /**
   * @param scale - Whole-number vertical stretch.
   * @param syntheticBold - Embolden (bold requested from a regular face).
   * @param scaleX - Whole-number horizontal stretch (defaults to `scale`;
   *   a non-zero lfWidth picks lfWidth / avgWidth rounded half down).
   * @param obliquify - Slant the bitmaps (italic requested from an
   *   upright face): GDI leans each row by about half its height above
   *   the cell bottom (see `slantRows`), keeping the advances.
   */
  constructor(t, e, n, s = e, o = !1) {
    this.face = t, this.scale = e, this.scaleX = s, this.obliquify = o, this.mode = "mono", this.syntheticItalic = !1, this.gridFit = !0, this.glyphs = /* @__PURE__ */ new Map();
    const r = e;
    this.syntheticBold = n, this.ascent = t.ascent * r, this.descent = (t.pixHeight - t.ascent) * r, this.ppem = (t.pixHeight - t.internalLeading) * r, this.ppemX = (t.pixHeight - t.internalLeading) * s, this.underlinePosition = -r, this.underlineThickness = r, this.strikeoutPosition = Math.ceil((t.ascent - t.internalLeading) * r / 3), this.strikeoutThickness = r, this.ttf = {
      family: t.family,
      weightClass: t.weight,
      fsSelection: t.italic ? 1 : 0,
      macStyle: 0,
      winAscent: this.ascent,
      unitsPerEm: this.ppem || 1
    };
  }
  /** The font's 8-bit code for a Unicode character (Windows-1252 for the ANSI charsets). */
  glyphIndex(t) {
    if (t < 128)
      return t;
    if (this.face.charSet === oa) {
      const n = ra.indexOf(t);
      return n >= 0 ? 128 + n : this.face.defaultChar;
    }
    if (t >= 160 && t < 256)
      return t;
    const e = sa.indexOf(t);
    return e >= 0 ? 128 + e : this.face.defaultChar;
  }
  charForGlyph(t) {
    return t >= 128 && this.face.charSet === oa ? ra[t - 128] ?? t : t >= 128 && t < 160 ? sa[t - 128] : t;
  }
  advance(t) {
    return this.face.width(t) * this.scaleX + (this.syntheticBold ? 1 : 0);
  }
  rotatedAdvance(t) {
    return this.advance(t);
  }
  glyph(t) {
    let e = this.glyphs.get(t);
    if (e)
      return e;
    const n = this.face.bitmap(t), s = this.face.width(t);
    let o = null;
    if (n && s > 0) {
      const r = this.scale, i = this.scaleX, c = this.face.pixHeight, a = new Uint8Array(s * i * c * r);
      for (let l = 0; l < c * r; l++)
        for (let u = 0; u < s * i; u++)
          a[l * s * i + u] = n[Math.floor(l / r) * s + Math.floor(u / i)];
      o = { width: s * i, height: c * r, left: 0, top: this.ascent, data: a }, this.obliquify && (o = Ly(o)), this.syntheticBold && (o = th(o, 1));
    }
    return e = { bitmap: o, advance: this.advance(t) }, this.glyphs.set(t, e), e;
  }
}, By = class {
  constructor(t, e, n, s, o, r, i = 0, c = 0, a = !0) {
    var g;
    this.rotatedSize = null, this.rotOutlines = /* @__PURE__ */ new Map(), this.outlines = /* @__PURE__ */ new Map(), this.glyphs = /* @__PURE__ */ new Map(), this.reverseCmap = null, this.ctSize = null, this.naturalWidths = !1, this.ctOutlines = /* @__PURE__ */ new Map(), this.ttf = t, this.gridFit = a, this.stretchWidth = n !== e ? c : 0, this.ppem = e, this.ppemX = n, this.mode = s, this.syntheticBold = o, this.syntheticItalic = r;
    const l = t.unitsPerEm, u = (p) => Math.round(p * e / l), h = (g = t.vdmx) == null ? void 0 : g.find((p) => p.ppem === e), f = t.winAscent + t.winDescent;
    h ? (this.ascent = h.yMax, this.descent = -h.yMin) : i > 0 && f > 0 ? (this.ascent = Math.round(t.winAscent * i / f), this.descent = i - this.ascent) : (this.ascent = u(t.winAscent), this.descent = u(t.winDescent)), this.rotatedAscent = Math.floor(t.headYMax * e / l + 1.27), this.rotatedDescent = Math.floor(-t.headYMin * e / l + 1.27), this.underlinePosition = u(t.underlinePosition), this.underlineThickness = u(t.underlineThickness), this.strikeoutPosition = u(t.strikeoutPosition), this.strikeoutThickness = u(t.strikeoutSize), this.hinted = new fr(t, n, e, { version: 35, grayscale: s !== "mono" }, a), this.hdmx = n === e ? t.hdmx.get(e) : void 0;
  }
  /** Glyph index for a character code (UTF-16 code unit or code point). */
  glyphIndex(t) {
    return this.ttf.glyphIndex(t);
  }
  /** A character that maps to glyph `index` (for SVG text of ETO_GLYPH_INDEX runs), or U+FFFD. */
  charForGlyph(t) {
    if (!this.reverseCmap) {
      this.reverseCmap = /* @__PURE__ */ new Map();
      for (let e = 65535; e >= 32; e--) {
        const n = this.ttf.glyphIndex(e);
        n && this.reverseCmap.set(n, e);
      }
    }
    return this.reverseCmap.get(t) ?? 65533;
  }
  outline(t) {
    let e = this.outlines.get(t);
    return e || (e = this.hinted.hintGlyph(t < this.ttf.numGlyphs ? t : Yn), this.outlines.set(t, e)), e;
  }
  /**
   * The outline ClearType rasterises. It is grid-fitted at the real ppem
   * with the Microsoft rasterizer's ClearType interpreter rules (see
   * `HintEnvironment.clearType`: x rounds on a 1/16-pixel virtual grid,
   * legacy x-direction deltas are skipped, ...), then, for GDI's default
   * "compatible widths" ClearType, scaled horizontally so the glyph's
   * natural (unhinted) advance fills the black-and-white advance width
   * GDI keeps for ClearType text. CLEARTYPE_NATURAL_QUALITY keeps the
   * natural widths unscaled.
   */
  ctOutline(t) {
    let e = this.ctOutlines.get(t);
    if (e)
      return e;
    const n = t < this.ttf.numGlyphs ? t : Yn;
    this.ctSize ?? (this.ctSize = new fr(this.ttf, this.ppemX, this.ppem, { version: 40, grayscale: !1, clearType: !0 }));
    const s = this.ctSize.hintGlyph(n), o = this.ttf.hMetrics(n).advance * this.ppemX / this.ttf.unitsPerEm, r = !this.naturalWidths && o > 0 ? this.advance(t) / o : 1;
    return e = { xs: Array.from(s.xs, (i) => i * r), ys: s.ys, onCurve: s.onCurve, endPts: s.endPts }, this.ctOutlines.set(t, e), e;
  }
  rotatedOutline(t) {
    let e = this.rotOutlines.get(t);
    return e || (this.rotatedSize ?? (this.rotatedSize = new fr(this.ttf, this.ppemX, this.ppem, {
      version: 35,
      grayscale: this.mode !== "mono",
      rotated: !0
    })), e = this.rotatedSize.hintGlyph(t < this.ttf.numGlyphs ? t : Yn), this.rotOutlines.set(t, e)), e;
  }
  /** Integer advance width of glyph `index`, as GetCharWidth32 reports it. */
  advance(t) {
    const e = this.hdmx;
    let n;
    if (this.stretchWidth > 0) {
      const { advance: s } = this.ttf.hMetrics(t < this.ttf.numGlyphs ? t : Yn);
      n = Math.round(s * this.stretchWidth / this.ttf.xAvgCharWidth);
    } else this.gridFit ? n = e && t < e.length ? e[t] : Math.round(this.outline(t).advance / 64) : n = this.outline(t).linearAdvance / 64;
    return n + (this.syntheticBold ? 1 : 0);
  }
  /**
   * Advance of glyph `index` in a font realised with an escapement: GDI
   * does not use the hinted/hdmx widths there but the linearly scaled
   * advance, rounded (measured: the Dx GDI records for Times New Roman at
   * 30 and 90 degrees).
   */
  rotatedAdvance(t) {
    const { advance: e } = this.ttf.hMetrics(t < this.ttf.numGlyphs ? t : Yn);
    return Math.round(e * this.ppemX / this.ttf.unitsPerEm) + (this.syntheticBold ? 1 : 0);
  }
  /**
   * The glyph bitmap for `index`, optionally rotated by the 2x2 matrix
   * `m` = [a, b, c, d] (device, y down: x' = a*x + c*y, y' = b*x + d*y,
   * applied to the hinted outline about the pen position).
   */
  glyph(t, e, n = 0) {
    const s = (e ? `${t}|${e.map((l) => l.toFixed(6)).join(",")}` : String(t)) + (n ? `@${n}` : "");
    let o = this.glyphs.get(s);
    if (o)
      return o;
    const r = e && !(Math.abs(e[1]) < 1e-9 && Math.abs(e[2]) < 1e-9) && !(Math.abs(e[0]) < 1e-9 && Math.abs(e[3]) < 1e-9), i = r ? this.rotatedOutline(t) : this.outline(t);
    if (r && e) {
      const l = this.ppem;
      e = [Math.round(e[0] * l) / l, Math.round(e[1] * l) / l, Math.round(e[2] * l) / l, Math.round(e[3] * l) / l];
    }
    let c = i;
    if (this.syntheticItalic || e || n) {
      const l = i.xs.length, u = new Float64Array(l), h = new Float64Array(l);
      for (let f = 0; f < l; f++) {
        let g = i.xs[f];
        const p = i.ys[f];
        this.syntheticItalic && (g += p * _y), e ? (u[f] = Math.round(e[0] * g - e[2] * p), h[f] = Math.round(-(e[1] * g - e[3] * p))) : (u[f] = Math.round(g + n), h[f] = p);
      }
      c = { xs: u, ys: h, onCurve: i.onCurve, endPts: i.endPts };
    }
    let a;
    return this.mode === "mono" ? a = Yi(c, Iy(i.scanControl, i.scanType)) : this.mode === "cleartype" ? a = zy(!e && !this.syntheticItalic ? this.ctOutline(t) : c) : a = Ay(c), a && this.syntheticBold && (a = th(a, this.mode === "mono" ? 1 : 16)), o = { bitmap: a, advance: this.advance(t) }, this.glyphs.set(s, o), o;
  }
};
function th(t, e) {
  const n = t.width + 1, s = new Uint8Array(n * t.height);
  for (let o = 0; o < t.height; o++)
    for (let r = 0; r < n; r++) {
      const i = r < t.width ? t.data[o * t.width + r] : 0, c = r > 0 ? t.data[o * t.width + r - 1] : 0;
      s[o * n + r] = Math.min(e, Math.max(i, c));
    }
  return { width: n, height: t.height, left: t.left, top: t.top, data: s };
}
var ia = /* @__PURE__ */ new WeakMap(), Xy = class eh {
  constructor(e, n = "cleartype") {
    this.families = /* @__PURE__ */ new Map(), this.rasterFamilies = /* @__PURE__ */ new Map(), this.realized = /* @__PURE__ */ new Map(), this.defaultSmoothing = n;
    for (const s of e) {
      for (const o of ry(s)) {
        const r = o.family.toLowerCase().trim(), i = this.rasterFamilies.get(r) ?? [];
        i.push(o), this.rasterFamilies.set(r, i);
      }
      for (const o of Ey(s))
        this.add(o.family, o), o.typoFamily && o.typoFamily !== o.family && this.addAlias(o.typoFamily, o), o.fullName && o.fullName !== o.family && this.addAlias(o.fullName, o);
    }
  }
  /**
   * A collection for `sources`, cached per sources array (so converting
   * many files with the same `fonts` option parses each font once).
   */
  static for(e, n = "cleartype") {
    const s = e;
    let o = ia.get(s);
    return (!o || o.defaultSmoothing !== n) && (o = new eh(e, n), ia.set(s, o)), o;
  }
  get size() {
    return this.families.size + this.rasterFamilies.size;
  }
  add(e, n) {
    const s = e.toLowerCase().trim(), o = this.families.get(s) ?? [];
    o.push(n), this.families.set(s, o);
  }
  /** Secondary names only apply when no face claims them as its primary family. */
  addAlias(e, n) {
    const s = e.toLowerCase().trim(), o = this.families.get(s);
    o ? o.some((r) => r.family.toLowerCase().trim() === s) || o.push(n) : this.families.set(s, [n]);
  }
  /** The faces of a family, following GDI's substitutions and pitch/family fallback. */
  familyFaces(e, n, s) {
    const o = e.toLowerCase().trim(), r = this.families.get(o);
    if (r)
      return r;
    const i = s == null ? void 0 : s[o];
    if (i) {
      const h = this.families.get(i.replace(/^["']|["']$/g, "").toLowerCase().trim());
      if (h)
        return h;
    }
    const c = ky[o];
    if (c && this.families.get(c))
      return this.families.get(c);
    const a = n & 240, l = (n & 3) === 1, u = a === 16 ? "times new roman" : a === 48 || l ? "courier new" : "arial";
    return this.families.get(u) ?? null;
  }
  /**
   * The raster size GDI's font mapper picks for a device height, as a face
   * and a whole-number stretch (1 to 5). Heights compare as character
   * heights for a negative lfHeight and cell heights for a positive one.
   * The cost model is fitted to GetTextMetrics over lfHeight -60..60 for
   * MS Sans Serif, MS Serif, Courier, Small Fonts, System and Terminal
   * (98% exact): 150 per pixel too small; 290 plus 350 per pixel too big;
   * a stretch cost by factor (120, 150, 250, 250 for 2x..5x) plus 100 per
   * extra factor divided by the face's character height (small faces
   * stretch less readily); ties go to the smaller stretch, then to the
   * 96 dpi face. A weight mismatch costs 3 per 10 units (so Terminal's
   * bold 8 pixel size serves regular requests).
   */
  pickRaster(e, n, s) {
    const o = e;
    if (o.length === 0)
      return null;
    if (n === 0) {
      const a = o.slice().sort((l, u) => l.pixHeight - u.pixHeight);
      return { face: a.find((l) => l.points >= 10) ?? a[0], scale: 1 };
    }
    const r = Math.abs(n);
    let i = null, c = 1 / 0;
    for (const a of o) {
      const l = n < 0 ? ea(a) : a.pixHeight;
      for (let u = 1; u <= 5; u++) {
        const h = l * u - r, f = (h < 0 ? -h * 150 : h > 0 ? 290 + h * 350 : 0) + Fy[u] + (u > 1 ? 100 * (u - 1) / ea(a) : 0) + Math.abs(a.weight - s) * 3 / 10 + u * 0.01 + (a.vertRes === 96 ? 0 : 1e-3);
        f < c && (c = f, i = { face: a, scale: u });
      }
    }
    return i;
  }
  realizeRaster(e, n) {
    const s = n.weight || 400, o = this.pickRaster(e, n.height, s);
    if (!o)
      return null;
    const { face: r, scale: i } = o, c = n.width > 0 && r.avgWidth > 0 ? Math.max(1, Math.ceil(n.width / r.avgWidth - 0.5)) : i;
    return new Ny(r, i, s >= 600 && r.weight < 600, c, n.italic && !r.italic);
  }
  /**
   * MS Shell Dlg renders with Microsoft Sans Serif but GDI snaps small
   * sizes to the MS Sans Serif bitmap sizes: when the raster mapper would
   * pick an unstretched 8 or 10 point bitmap whose cell is at most one
   * pixel taller than the TrueType cell `ttCell`, the TrueType ppem
   * becomes that bitmap's character height (measured: lfHeight -9..-12
   * give ppem 11, -13..-15 ppem 13, cell heights 12..15 ppem 11 and
   * 16..19 ppem 13, while -8 and cell heights up to 11 stay unsnapped).
   */
  shellDlgPpem(e, n) {
    const s = this.rasterFamilies.get("ms sans serif");
    if (!s || e.height === 0)
      return 0;
    const o = this.pickRaster(s, e.height, e.weight || 400);
    if (!o || o.scale !== 1 || o.face.pixHeight > 16)
      return 0;
    const r = o.face;
    return r.pixHeight <= n + 1 ? r.pixHeight - r.internalLeading : 0;
  }
  /** Realises `spec`, or null when no supplied font can stand in for it. */
  realize(e, n) {
    const s = JSON.stringify(e) + (n ? JSON.stringify(n) : "");
    if (this.realized.has(s))
      return this.realized.get(s);
    const o = e.face.toLowerCase().trim();
    if (!this.families.has(o)) {
      const c = this.rasterFamilies.has(o) ? o : Dy[o], a = c ? this.rasterFamilies.get(c) : void 0;
      if (a) {
        const l = this.realizeRaster(a, e);
        return this.realized.set(s, l), l;
      }
    }
    const r = this.familyFaces(e.face, e.pitchAndFamily, n);
    let i = null;
    if (r && r.length > 0) {
      const c = e.weight || 400;
      let a = r[0], l = 1 / 0;
      for (const p of r) {
        const d = p.weightClass - c, y = (na(p) !== e.italic ? 1e4 : 0) + (d > 0 ? d * 3 : -d);
        y < l && (a = p, l = y);
      }
      const u = e.italic && !na(a), h = c >= 600 && a.weightClass < 600, f = (p, d) => {
        if (!(p > 0 && p <= 2048))
          return null;
        const y = Math.round(a.xAvgCharWidth * p / a.unitsPerEm), m = e.width > 0 && a.xAvgCharWidth > 0 && e.width !== y ? Math.max(1, Math.round(e.width * a.unitsPerEm / a.xAvgCharWidth)) : p, M = new By(
          a,
          p,
          m,
          this.modeFor(a, e.quality, p, e.ignoreGasp),
          h,
          u,
          d,
          e.width,
          !e.unhinted
        );
        return M.naturalWidths = e.quality === Kr, M;
      };
      let g = f(Yy(a, e.height), e.height > 0 ? Math.round(e.height) : 0);
      if (g && o === "ms shell dlg") {
        const p = this.shellDlgPpem(e, g.ascent + g.descent);
        p && p !== g.ppem && (g = f(p, 0));
      }
      i = g;
    }
    return this.realized.set(s, i), i;
  }
  /** Rendering mode for a LOGFONT quality at a ppem (honouring the font's `gasp`). */
  modeFor(e, n, s, o = !1) {
    let r;
    switch (n) {
      case os:
        return "mono";
      case Jr:
        r = "gray";
        break;
      case Uy:
      case Kr:
        r = "cleartype";
        break;
      default:
        r = this.defaultSmoothing;
    }
    if (r === "gray" && !o) {
      const i = e.gasp.find((c) => s <= c.maxPpem);
      if (i && !(i.behavior & 2))
        return "mono";
    }
    return r;
  }
};
function Yy(t, e) {
  if (e < 0)
    return Math.round(-e);
  const n = Math.round(e === 0 ? 16 : e), s = t.vdmx;
  if (s && s.length > 0) {
    let c = 0;
    for (let a = 0; a < s.length; a++) {
      const l = s[a].yMax - s[a].yMin;
      if (l === n) {
        c = s[a].ppem;
        break;
      }
      if (l > n) {
        c = a > 0 ? s[a - 1].ppem : 0;
        break;
      }
    }
    if (c > 0)
      return c;
  }
  const o = t.winAscent + t.winDescent || t.hheaAscender - t.hheaDescender;
  let r = Math.max(1, Math.round(n * t.unitsPerEm / (o || t.unitsPerEm)));
  const i = t.unitsPerEm;
  for (; r > 1; ) {
    const c = s == null ? void 0 : s.find((l) => l.ppem === r);
    if ((c ? c.yMax - c.yMin : Math.round(t.winAscent * r / i) + Math.round(t.winDescent * r / i)) <= n)
      break;
    r--;
  }
  return r;
}
var ca = 6;
function zy(t) {
  const e = ca / 3, n = Ry(t, ca, 1, 1);
  if (!n)
    return null;
  const { box: s, hi: o } = n, r = s.xMax - s.xMin, i = s.yMax - s.yMin, c = r * 3, a = new Float64Array(c), l = new Uint8Array(c * i);
  for (let u = 0; u < i; u++) {
    a.fill(0);
    const h = u * o.width;
    for (let f = 0; f < o.width; f++)
      o.data[h + f] && (a[Math.floor(f / e)] += 1);
    for (let f = 0; f < c; f++) {
      const g = (f > 0 ? a[f - 1] : 0) + a[f] + (f + 1 < c ? a[f + 1] : 0);
      l[u * c + f] = Math.round(255 * g / (3 * e));
    }
  }
  return { width: r, height: i, left: s.xMin, top: s.yMax, data: l, channels: 3 };
}
function nh(t) {
  const e = t;
  return e.length >= 8 && e[0] === 137 && e[1] === 80 && e[2] === 78 && e[3] === 71 ? "image/png" : e.length >= 3 && e[0] === 255 && e[1] === 216 && e[2] === 255 ? "image/jpeg" : e.length >= 6 && e[0] === 71 && e[1] === 73 && e[2] === 70 && e[3] === 56 ? "image/gif" : e.length >= 12 && e[0] === 82 && e[1] === 73 && e[2] === 70 && e[3] === 70 && e[8] === 87 && e[9] === 69 && e[10] === 66 && e[11] === 80 ? "image/webp" : null;
}
function sh(t) {
  if (t.kind === "rgba")
    return { w: t.width, h: t.height };
  if (t.kind !== "encoded")
    return null;
  const e = t.bytes, n = new DataView(e.buffer, e.byteOffset, e.byteLength);
  try {
    if (t.mime === "image/png" && e.length >= 24)
      return { w: n.getUint32(16), h: n.getUint32(20) };
    if (t.mime === "image/gif" && e.length >= 10)
      return { w: n.getUint16(6, !0), h: n.getUint16(8, !0) };
    if (t.mime === "image/jpeg")
      for (let s = 2; s + 9 < e.length; ) {
        if (e[s] !== 255) {
          s++;
          continue;
        }
        const o = e[s + 1], r = n.getUint16(s + 2);
        if (o >= 192 && o <= 207 && o !== 196 && o !== 200 && o !== 204)
          return { w: n.getUint16(s + 7), h: n.getUint16(s + 5) };
        s += 2 + r;
      }
    if (t.mime === "image/webp" && e.length >= 30) {
      const s = String.fromCharCode(e[12], e[13], e[14], e[15]);
      if (s === "VP8X")
        return { w: 1 + (e[24] | e[25] << 8 | e[26] << 16), h: 1 + (e[27] | e[28] << 8 | e[29] << 16) };
      if (s === "VP8 ")
        return { w: n.getUint16(26, !0) & 16383, h: n.getUint16(28, !0) & 16383 };
      if (s === "VP8L") {
        const o = n.getUint32(21, !0);
        return { w: (o & 16383) + 1, h: (o >> 14 & 16383) + 1 };
      }
    }
  } catch {
  }
  return null;
}
function oh(t) {
  const e = new DataView(t);
  if (e.byteLength < 26 || e.getUint8(0) !== 66 || e.getUint8(1) !== 77)
    return null;
  const n = e.getUint32(10, !0), s = Xe(e, 14, n, e.byteLength - n);
  return s ? { kind: "rgba", data: s.data, width: s.width, height: s.height } : null;
}
function Zr(t) {
  if (X("parseEmfHeader: byteLength =", t.byteLength), t.byteLength < 88 || t.getUint32(0, !0) !== Ti)
    return null;
  const n = t.getInt32(8, !0), s = t.getInt32(12, !0), o = t.getInt32(16, !0), r = t.getInt32(20, !0), i = t.getInt32(24, !0), c = t.getInt32(28, !0), a = t.getInt32(32, !0), l = t.getInt32(36, !0), u = a - i, h = l - c;
  return {
    bounds: {
      left: n,
      top: s,
      right: o,
      bottom: r
    },
    frameW: u,
    frameH: h
  };
}
function Oy(t) {
  const e = t.bounds.right - t.bounds.left, n = t.bounds.bottom - t.bounds.top;
  return e > 0 && n > 0 ? t.bounds : t.frameW > 0 && t.frameH > 0 ? (X(
    `getRenderableEmfBounds: bounds invalid (${e}×${n}), falling back to frame ${t.frameW}×${t.frameH}`
  ), { left: 0, top: 0, right: t.frameW, bottom: t.frameH }) : null;
}
function aa(t) {
  if (t.byteLength < 22)
    return null;
  const e = t.getUint32(0, !0);
  let n = 0, s = 0, o = 0, r = 800, i = 600, c = 96;
  if (e === 2596720087 && (s = t.getInt16(6, !0), o = t.getInt16(8, !0), r = t.getInt16(10, !0), i = t.getInt16(12, !0), c = t.getUint16(14, !0) || 96, n = 22), n + 18 > t.byteLength)
    return null;
  const a = t.getUint16(n, !0);
  if (a !== 1 && a !== 2)
    return null;
  const l = t.getUint16(n + 2, !0) * 2, u = t.getUint32(n + 8, !0) * 2;
  return {
    headerSize: n + l,
    maxRecordSize: u,
    boundsLeft: s,
    boundsTop: o,
    boundsRight: r,
    boundsBottom: i,
    unitsPerInch: c,
    placeable: n > 0
  };
}
var rh = 137224, ih = 139273, ch = 2498570, fo = 925707;
function $y(t, e, n, s, o, r) {
  const i = Math.abs(o), c = o > 0, l = n * 4 + 3 & -4, u = l * s, h = new Uint8Array(u);
  for (let f = 0; f < s; f++) {
    const g = c ? f : s - 1 - f, p = e + g * i, d = (s - 1 - f) * l;
    switch (r) {
      case ch:
      case fo: {
        for (let y = 0; y < n; y++) {
          const m = p + y * 4;
          if (m + 3 >= t.byteLength)
            break;
          let M = t.getUint8(m), b = t.getUint8(m + 1), w = t.getUint8(m + 2);
          const x = t.getUint8(m + 3);
          r === fo && x > 0 && x < 255 && (w = Math.min(255, Math.round(w * 255 / x)), b = Math.min(255, Math.round(b * 255 / x)), M = Math.min(255, Math.round(M * 255 / x)));
          const E = d + y * 4;
          h[E] = M, h[E + 1] = b, h[E + 2] = w, h[E + 3] = x;
        }
        break;
      }
      case ih: {
        for (let y = 0; y < n; y++) {
          const m = p + y * 4;
          if (m + 3 >= t.byteLength)
            break;
          const M = d + y * 4;
          h[M] = t.getUint8(m), h[M + 1] = t.getUint8(m + 1), h[M + 2] = t.getUint8(m + 2), h[M + 3] = 255;
        }
        break;
      }
      case rh: {
        for (let y = 0; y < n; y++) {
          const m = p + y * 3;
          if (m + 2 >= t.byteLength)
            break;
          const M = d + y * 4;
          h[M] = t.getUint8(m), h[M + 1] = t.getUint8(m + 1), h[M + 2] = t.getUint8(m + 2), h[M + 3] = 255;
        }
        break;
      }
      default:
        return null;
    }
  }
  return Hy(h, l, n, s, u);
}
function Cy(t, e, n, s, o, r) {
  const i = Math.abs(o), c = o > 0, a = new Uint8ClampedArray(n * s * 4);
  for (let l = 0; l < s; l++) {
    const u = c ? l : s - 1 - l, h = e + u * i, f = l * n * 4;
    switch (r) {
      case ch:
      case fo: {
        for (let g = 0; g < n; g++) {
          const p = h + g * 4;
          if (p + 3 >= t.byteLength)
            break;
          let d = t.getUint8(p), y = t.getUint8(p + 1), m = t.getUint8(p + 2);
          const M = t.getUint8(p + 3);
          r === fo && M > 0 && M < 255 && (m = Math.min(255, Math.round(m * 255 / M)), y = Math.min(255, Math.round(y * 255 / M)), d = Math.min(255, Math.round(d * 255 / M)));
          const b = f + g * 4;
          a[b] = m, a[b + 1] = y, a[b + 2] = d, a[b + 3] = M;
        }
        break;
      }
      case ih: {
        for (let g = 0; g < n; g++) {
          const p = h + g * 4;
          if (p + 3 >= t.byteLength)
            break;
          const d = f + g * 4;
          a[d] = t.getUint8(p + 2), a[d + 1] = t.getUint8(p + 1), a[d + 2] = t.getUint8(p), a[d + 3] = 255;
        }
        break;
      }
      case rh: {
        for (let g = 0; g < n; g++) {
          const p = h + g * 3;
          if (p + 2 >= t.byteLength)
            break;
          const d = f + g * 4;
          a[d] = t.getUint8(p + 2), a[d + 1] = t.getUint8(p + 1), a[d + 2] = t.getUint8(p), a[d + 3] = 255;
        }
        break;
      }
      default:
        return null;
    }
  }
  return a;
}
function Hy(t, e, n, s, o) {
  const c = 122 + o, a = new ArrayBuffer(c), l = new DataView(a), u = new Uint8Array(a);
  return l.setUint8(0, 66), l.setUint8(1, 77), l.setUint32(2, c, !0), l.setUint32(6, 0, !0), l.setUint32(10, 122, !0), l.setUint32(14, 108, !0), l.setInt32(18, n, !0), l.setInt32(22, s, !0), l.setUint16(26, 1, !0), l.setUint16(28, 32, !0), l.setUint32(30, 3, !0), l.setUint32(34, o, !0), l.setInt32(38, 2835, !0), l.setInt32(42, 2835, !0), l.setUint32(46, 0, !0), l.setUint32(50, 0, !0), l.setUint32(54, 16711680, !0), l.setUint32(58, 65280, !0), l.setUint32(62, 255, !0), l.setUint32(66, 4278190080, !0), l.setUint32(70, 1934772034, !0), u.set(t, 122), a;
}
var Qr = 0.05, ah = 4096, go = 32768, la = 1 << 23;
function Gy(t, e, n, s, o, r, i, c) {
  const a = Math.hypot(t - 2 * n + o, e - 2 * s + r), l = Math.hypot(n - 2 * o + i, s - 2 * r + c), u = Math.ceil(Math.sqrt(0.75 * Math.max(a, l) / Qr));
  return Math.min(ah, Math.max(1, u));
}
function ua(t, e) {
  if (!(t > Qr))
    return 1;
  const n = 2 * Math.acos(1 - Qr / t), s = Math.ceil(Math.abs(e) / n);
  return Math.min(ah, Math.max(1, s));
}
function ha(t, e) {
  const n = t % e;
  return n < 0 ? n + e : n;
}
function Fo(t) {
  const e = [];
  let n = [], s = !1, o = 0, r = 0;
  const i = () => {
    n.length >= 6 && e.push(n), n = [];
  }, c = (l, u) => {
    i(), n = [l, u], s = !0, o = l, r = u;
  }, a = (l, u) => {
    if (!s) {
      c(l, u);
      return;
    }
    n.push(l, u), o = l, r = u;
  };
  for (const l of t)
    switch (l.op) {
      case "moveTo":
        c(l.x, l.y);
        break;
      case "lineTo":
        a(l.x, l.y);
        break;
      case "rect":
        c(l.x, l.y), a(l.x + l.w, l.y), a(l.x + l.w, l.y + l.h), a(l.x, l.y + l.h), c(l.x, l.y);
        break;
      case "closePath":
        if (s) {
          const u = n[0], h = n[1];
          c(u, h);
        }
        break;
      case "bezierCurveTo": {
        s || c(l.cp1x, l.cp1y);
        const u = o, h = r, f = Gy(u, h, l.cp1x, l.cp1y, l.cp2x, l.cp2y, l.x, l.y);
        for (let g = 1; g < f; g++) {
          const p = g / f, d = 1 - p, y = d * d * d, m = 3 * d * d * p, M = 3 * d * p * p, b = p * p * p;
          a(
            y * u + m * l.cp1x + M * l.cp2x + b * l.x,
            y * h + m * l.cp1y + M * l.cp2y + b * l.y
          );
        }
        a(l.x, l.y);
        break;
      }
      case "arcTo": {
        if (!s) {
          c(l.x1, l.y1);
          break;
        }
        const u = o, h = r, f = u - l.x1, g = h - l.y1, p = l.x2 - l.x1, d = l.y2 - l.y1, y = Math.hypot(f, g), m = Math.hypot(p, d), M = f * d - g * p;
        if (l.radius <= 0 || y === 0 || m === 0 || Math.abs(M) < 1e-9 * y * m) {
          a(l.x1, l.y1);
          break;
        }
        const b = f / y, w = g / y, x = p / m, E = d / m, T = Math.max(-1, Math.min(1, b * x + w * E)), v = Math.acos(T) / 2, I = l.radius / Math.tan(v), P = l.x1 + b * I, S = l.y1 + w * I, R = l.x1 + x * I, U = l.y1 + E * I, A = b + x, k = w + E, L = Math.hypot(A, k), D = l.radius / Math.sin(v), N = l.x1 + A / L * D, B = l.y1 + k / L * D, G = Math.atan2(S - B, P - N);
        let it = Math.atan2(U - B, R - N) - G;
        it > Math.PI ? it -= 2 * Math.PI : it < -Math.PI && (it += 2 * Math.PI), a(P, S);
        const ct = ua(l.radius, it);
        for (let O = 1; O <= ct; O++) {
          const at = G + it * O / ct;
          a(N + l.radius * Math.cos(at), B + l.radius * Math.sin(at));
        }
        break;
      }
      case "ellipse": {
        const u = 2 * Math.PI;
        let h;
        if (l.ccw) {
          const M = l.startAngle - l.endAngle;
          h = -(M >= u ? u : ha(M, u));
        } else {
          const M = l.endAngle - l.startAngle;
          h = M >= u ? u : ha(M, u);
        }
        const f = Math.cos(l.rotation), g = Math.sin(l.rotation), p = (M) => {
          const b = l.rx * Math.cos(M), w = l.ry * Math.sin(M);
          return [l.cx + b * f - w * g, l.cy + b * g + w * f];
        }, [d, y] = p(l.startAngle);
        a(d, y);
        const m = ua(Math.max(Math.abs(l.rx), Math.abs(l.ry)), h);
        for (let M = 1; M <= m; M++) {
          const [b, w] = p(l.startAngle + h * M / m);
          a(b, w);
        }
        break;
      }
    }
  return i(), e;
}
function jy(t) {
  const e = Math.floor(t.x), n = Math.floor(t.y), s = Math.max(e, Math.min(e + go, Math.ceil(t.x + t.w))), o = Math.max(n, Math.min(n + go, Math.ceil(t.y + t.h)));
  return { x0: e, y0: n, x1: s, y1: o };
}
function Wy(...t) {
  let e = 1 / 0, n = 1 / 0, s = -1 / 0, o = -1 / 0;
  const r = (a, l) => {
    Math.abs(a) < la && Math.abs(l) < la && (e = Math.min(e, a), n = Math.min(n, l), s = Math.max(s, a), o = Math.max(o, l));
  };
  for (const a of t)
    for (const l of a ?? [])
      for (const u of Fo(l.cmds))
        for (let h = 0; h < u.length; h += 2)
          r(u[h], u[h + 1]);
  if (!Number.isFinite(e))
    return { x: 0, y: 0, w: 0, h: 0 };
  const i = Math.floor(e), c = Math.floor(n);
  return { x: i, y: c, w: Math.ceil(s) - i, h: Math.ceil(o) - c };
}
function Vy(t, e, n) {
  const s = [];
  for (const o of Fo(t.cmds)) {
    const r = o.length / 2;
    for (let i = 0; i < r; i++) {
      const c = o[2 * i], a = o[2 * i + 1], l = (i + 1) % r, u = o[2 * l], h = o[2 * l + 1];
      if (a === h || !Number.isFinite(c + a + u + h))
        continue;
      const f = h > a ? 1 : -1, g = f > 0 ? c : u, p = f > 0 ? a : h, d = f > 0 ? h : a, y = (u - c) / (h - a), m = Math.max(e, Math.ceil(p - 0.5)), M = Math.min(n, Math.ceil(d - 0.5));
      m >= M || s.push({ row0: m, row1: M, x: g + (m + 0.5 - p) * y, slope: y, dir: f });
    }
  }
  return s.sort((o, r) => o.row0 - r.row0), s;
}
function qy(t, e) {
  const n = [], s = Vy(t, e.y0, e.y1), o = t.fillRule === "evenodd";
  let r = [], i = 0;
  const c = [];
  for (let a = e.y0; a < e.y1; a++) {
    for (; i < s.length && s[i].row0 === a; )
      r.push(s[i++]);
    r = r.filter((f) => f.row1 > a), c.length = 0;
    for (const f of r)
      c.push({ x: f.x + (a - f.row0) * f.slope, dir: f.dir });
    c.sort((f, g) => f.x - g.x);
    const l = [];
    let u = 0, h = 0;
    for (const f of c) {
      const g = o ? (u & 1) !== 0 : u !== 0;
      u += f.dir;
      const p = o ? (u & 1) !== 0 : u !== 0;
      if (!g && p)
        h = f.x;
      else if (g && !p) {
        const d = Math.max(e.x0, Math.ceil(h - 0.5)), y = Math.min(e.x1, Math.ceil(f.x - 0.5));
        d < y && (l.length > 0 && l[l.length - 1] >= d ? l[l.length - 1] = Math.max(l[l.length - 1], y) : l.push(d, y));
      }
    }
    n.push(l);
  }
  return n;
}
function lh(t, e, n) {
  const s = [];
  let o = 0, r = 0, i = !1, c = !1, a = !1;
  for (; o < t.length || r < e.length; ) {
    const l = Math.min(o < t.length ? t[o] : 1 / 0, r < e.length ? e[r] : 1 / 0);
    for (; o < t.length && t[o] === l; )
      i = !i, o++;
    for (; r < e.length && e[r] === l; )
      c = !c, r++;
    const u = n(i, c);
    u !== a && (s.push(l), a = u);
  }
  return s;
}
function fa(t, e) {
  const n = e.x1 > e.x0 ? [e.x0, e.x1] : [];
  let s = [];
  for (let o = e.y0; o < e.y1; o++)
    s.push(n);
  for (const o of t ?? []) {
    const r = qy(o, e);
    s = s.map((i, c) => i.length === 0 ? i : lh(i, r[c], uh));
  }
  return s;
}
var uh = (t, e) => t && e, Jy = {
  replace: (t, e) => e,
  intersect: uh,
  union: (t, e) => t || e,
  xor: (t, e) => t !== e,
  exclude: (t, e) => t && !e,
  complement: (t, e) => e && !t
};
function Ky(t, e) {
  if (t.length !== e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function Zy(t, e) {
  const n = [];
  let s = 0;
  for (let o = 1; o <= t.length; o++) {
    if (o < t.length && Ky(t[o], t[s]))
      continue;
    const r = t[s];
    for (let i = 0; i < r.length; i += 2)
      n.push({ x: r[i], y: e + s, w: r[i + 1] - r[i], h: o - s });
    s = o;
  }
  return n;
}
function po(t, e, n, s) {
  const o = jy(s);
  if (o.x1 <= o.x0 || o.y1 <= o.y0)
    return [];
  const r = fa(t, o), i = fa(e, o), c = Jy[n], a = r.map((l, u) => lh(l, i[u], c));
  return Zy(a, o.y0);
}
function Qy(t) {
  return t.w > go || t.h > go;
}
var tm = 8192;
function Do(t, e, n) {
  if (n < 12)
    return null;
  t.getUint32(e, !0);
  const s = t.getUint32(e + 4, !0), o = t.getUint32(e + 8, !0);
  if (s === 0 || s > 1e5)
    return null;
  const r = (o & 16384) !== 0;
  if (12 + (s * (r ? 4 : 8) + s) > n)
    return null;
  const u = [];
  let h = e + 12;
  for (let p = 0; p < s; p++)
    r ? (u.push({
      x: t.getInt16(h, !0),
      y: t.getInt16(h + 2, !0)
    }), h += 4) : (u.push({
      x: t.getFloat32(h, !0),
      y: t.getFloat32(h + 4, !0)
    }), h += 8);
  const f = h + 3 & -4, g = new Uint8Array(t.buffer, t.byteOffset + f, s);
  return {
    kind: "plus-path",
    points: u,
    types: new Uint8Array(g),
    fillRule: o & tm ? "nonzero" : "evenodd"
  };
}
function em(t, e) {
  const n = (a, l) => e[0] * a + e[2] * l + e[4], s = (a, l) => e[1] * a + e[3] * l + e[5], o = [], r = t.points, i = t.types;
  let c = 0;
  for (; c < r.length; ) {
    const a = i[c] & 15, l = (i[c] & 128) !== 0;
    if (a === 0)
      o.push({ op: "moveTo", x: n(r[c].x, r[c].y), y: s(r[c].x, r[c].y) }), c++;
    else if (a === 3) {
      if (c + 2 < r.length) {
        o.push({
          op: "bezierCurveTo",
          cp1x: n(r[c].x, r[c].y),
          cp1y: s(r[c].x, r[c].y),
          cp2x: n(r[c + 1].x, r[c + 1].y),
          cp2y: s(r[c + 1].x, r[c + 1].y),
          x: n(r[c + 2].x, r[c + 2].y),
          y: s(r[c + 2].x, r[c + 2].y)
        }), i[c + 2] & 128 && o.push({ op: "closePath" }), c += 3;
        continue;
      }
      break;
    } else
      o.push({ op: "lineTo", x: n(r[c].x, r[c].y), y: s(r[c].x, r[c].y) }), c++;
    l && o.push({ op: "closePath" });
  }
  return o;
}
var nm = 512;
function sm(t, e, n, s, o, r, i, c) {
  const a = (i - o) * (e - r) - (c - r) * (t - o), l = (i - o) * (s - r) - (c - r) * (n - o), u = (n - t) * (r - e) - (s - e) * (o - t), h = (n - t) * (c - e) - (s - e) * (i - t);
  return a * l < 0 && u * h < 0;
}
function om(t) {
  const e = Fo(t);
  if (e.length !== 1)
    return !1;
  const n = e[0], s = n.length / 2;
  if (s < 3)
    return !0;
  if (s > nm)
    return !1;
  for (let o = 0; o < s; o++) {
    const r = (o + 1) % s;
    for (let i = o + 2; i < s; i++) {
      const c = (i + 1) % s;
      if (c !== o && sm(
        n[2 * o],
        n[2 * o + 1],
        n[2 * r],
        n[2 * r + 1],
        n[2 * i],
        n[2 * i + 1],
        n[2 * c],
        n[2 * c + 1]
      ))
        return !1;
    }
  }
  return !0;
}
function hh(t, e) {
  const n = em(t, e);
  return { cmds: n, fillRule: t.fillRule ?? "nonzero", simple: om(n) };
}
function yo(t, e) {
  t.beginPath();
  const n = e.points, s = e.types;
  let o = 0;
  for (; o < n.length; ) {
    const r = s[o] & 15, i = (s[o] & 128) !== 0;
    if (r === 0)
      t.moveTo(n[o].x, n[o].y), o++;
    else if (r === 1)
      t.lineTo(n[o].x, n[o].y), o++;
    else if (r === 3)
      if (o + 2 < n.length) {
        t.bezierCurveTo(
          n[o].x,
          n[o].y,
          n[o + 1].x,
          n[o + 1].y,
          n[o + 2].x,
          n[o + 2].y
        ), s[o + 2] & 128 && t.closePath(), o += 3;
        continue;
      } else
        break;
    else
      t.lineTo(n[o].x, n[o].y), o++;
    i && t.closePath();
  }
}
var rm = 1, _o = 2, fh = 4, gh = 8, im = 64, cm = 128, mo = 4096;
function No(t) {
  return t >>> 12 === 900097;
}
function zi(t, e) {
  return [
    t.getFloat32(e, !0),
    t.getFloat32(e + 4, !0),
    t.getFloat32(e + 8, !0),
    t.getFloat32(e + 12, !0),
    t.getFloat32(e + 16, !0),
    t.getFloat32(e + 20, !0)
  ];
}
function Mo(t, e, n) {
  return { x: t[0] * e + t[2] * n + t[4], y: t[1] * e + t[3] * n + t[5] };
}
function am(t) {
  return Number.isFinite(t) ? Math.min(1, Math.max(0, t)) : 0;
}
function Oi(t) {
  switch (t) {
    case 0:
      return "tile";
    case 1:
      return "tile-flip-x";
    case 2:
      return "tile-flip-y";
    case 3:
      return "tile-flip-xy";
    default:
      return "clamp";
  }
}
function ph(t) {
  return t.map((e) => ({ ...e, offset: am(e.offset) })).sort((e, n) => e.offset - n.offset);
}
function dh(t, e, n) {
  if (e + 4 > n)
    return null;
  const s = t.getUint32(e, !0);
  if (s === 0 || s > mo)
    return null;
  const o = e + 4, r = o + s * 4, i = r + s * 4;
  if (i > n)
    return null;
  const c = [];
  for (let a = 0; a < s; a++) {
    const l = t.getUint32(r + a * 4, !0);
    c.push({
      offset: t.getFloat32(o + a * 4, !0),
      color: wt(l),
      argb: l
    });
  }
  return { stops: c, next: i };
}
function yh(t, e, n) {
  if (e + 4 > n)
    return null;
  const s = t.getUint32(e, !0);
  if (s === 0 || s > mo)
    return null;
  const o = e + 4, r = o + s * 4, i = r + s * 4;
  if (i > n)
    return null;
  const c = [];
  for (let a = 0; a < s; a++)
    c.push({
      pos: t.getFloat32(o + a * 4, !0),
      factor: t.getFloat32(r + a * 4, !0)
    });
  return { entries: c, next: i };
}
function lm(t, e, n) {
  if (e + 40 > n)
    return null;
  const s = t.getUint32(e, !0), o = Oi(t.getUint32(e + 4, !0)), r = t.getFloat32(e + 8, !0), i = t.getFloat32(e + 12, !0), c = t.getFloat32(e + 16, !0), a = t.getFloat32(e + 20, !0), l = t.getUint32(e + 24, !0), u = t.getUint32(e + 28, !0);
  let h = e + 40, f = null;
  s & _o && h + 24 <= n && (f = zi(t, h), h += 24);
  let g = [
    { offset: 0, color: wt(l), argb: l },
    { offset: 1, color: wt(u), argb: u }
  ];
  const p = {
    startArgb: l,
    endArgb: u,
    preset: null,
    blend: null,
    gammaCorrected: (s & cm) !== 0
  };
  if (s & fh) {
    const m = dh(t, h, n);
    m && (g = m.stops, p.preset = {
      positions: m.stops.map((M) => M.offset),
      argb: m.stops.map((M) => M.argb ?? 0)
    });
  } else if (s & gh) {
    const m = yh(t, h, n);
    m && (g = m.entries.map((M) => ({
      offset: M.pos,
      color: Fl(l, u, M.factor),
      argb: $i(l, u, M.factor)
    })), p.blend = {
      positions: m.entries.map((M) => M.pos),
      factors: m.entries.map((M) => M.factor)
    });
  }
  let d = { x: r, y: i + a / 2 }, y = { x: r + c, y: i + a / 2 };
  return f && (d = Mo(f, d.x, d.y), y = Mo(f, y.x, y.y)), X(
    `parseEmfPlusBrushObject: linear gradient (${d.x.toFixed(1)},${d.y.toFixed(1)})→(${y.x.toFixed(1)},${y.y.toFixed(1)}), ${g.length} stop(s)`
  ), {
    kind: "plus-brush",
    color: wt(l),
    gradient: {
      type: "linear",
      x1: d.x,
      y1: d.y,
      x2: y.x,
      y2: y.y,
      stops: ph(g),
      wrapMode: o,
      rect: { x: r, y: i, w: c, h: a },
      transform: f,
      ramp: p
    }
  };
}
function mh(t, e, n) {
  if (e + 28 > n || t.getUint32(e + 4, !0) !== 1)
    return null;
  const o = t.getInt32(e + 8, !0), r = t.getInt32(e + 12, !0), i = t.getInt32(e + 16, !0), c = t.getUint32(e + 20, !0), a = e + 28, l = Math.abs(i);
  if (o <= 0 || r <= 0 || o > 8192 || r > 8192 || a + l * r > n)
    return null;
  const u = Cy(t, a, o, r, i, c);
  return u ? { width: o, height: r, rgba: u } : null;
}
function um(t, e, n) {
  if (e + 28 > n || t.getUint32(e + 4, !0) !== 1 || mh(t, e, n))
    return null;
  const s = e + 28;
  return s < n ? { start: s, end: n } : null;
}
function hm(t, e, n) {
  if (e + 8 > n)
    return null;
  const s = t.getUint32(e, !0);
  let o = e + 8;
  return s & _o && o + 24 <= n && (o += 24), o;
}
function fm(t, e, n, s) {
  if (e + 8 > n)
    return null;
  const o = t.getUint32(e, !0), r = Oi(t.getUint32(e + 4, !0));
  let i = e + 8, c = null;
  o & _o && i + 24 <= n && (c = zi(t, i), i += 24);
  const a = mh(t, i, n) ?? s ?? null;
  if (!a)
    return null;
  const l = {
    width: a.width,
    height: a.height,
    rgba: a.rgba,
    wrapMode: r,
    transform: c
  };
  let u = 0, h = 0, f = 0;
  const g = a.width * a.height;
  for (let d = 0; d < g; d++)
    u += a.rgba[d * 4], h += a.rgba[d * 4 + 1], f += a.rgba[d * 4 + 2];
  const p = g > 0 ? `rgba(${Math.round(u / g)},${Math.round(h / g)},${Math.round(f / g)},1)` : "rgba(128,128,128,1)";
  return X(`parseEmfPlusBrushObject: texture fill ${a.width}x${a.height}, wrapMode=${r}`), { kind: "plus-brush", color: p, texture: l };
}
function gm(t, e, n) {
  if (e + 24 > n)
    return null;
  const s = t.getUint32(e, !0), o = Oi(t.getUint32(e + 4, !0)), r = t.getUint32(e + 8, !0);
  let i = t.getFloat32(e + 12, !0), c = t.getFloat32(e + 16, !0);
  const a = t.getUint32(e + 20, !0);
  if (a > mo)
    return { kind: "plus-brush", color: wt(r) };
  const l = [];
  let u = e + 24;
  for (let v = 0; v < a && u + 4 <= n; v++)
    l.push(t.getUint32(u, !0)), u += 4;
  let h = [], f = [];
  const g = (v) => l.length > 0 ? l[Math.min(v, l.length - 1)] : r;
  if (s & rm) {
    if (u + 4 <= n) {
      const v = t.getInt32(u, !0);
      if (u += 4, v > 0 && u + v <= n) {
        const I = Do(t, u, v);
        if (I) {
          const P = ym(I.points, I.types, g);
          h = P.points, f = P.argb;
        }
        u += v;
      }
    }
  } else if (u + 4 <= n) {
    const v = t.getUint32(u, !0);
    if (u += 4, v > 0 && v <= mo && u + v * 8 <= n) {
      for (let I = 0; I < v; I++)
        h.push({
          x: t.getFloat32(u + I * 8, !0),
          y: t.getFloat32(u + I * 8 + 4, !0)
        }), f.push(g(I));
      u += v * 8;
    }
  }
  let p = null;
  s & _o && u + 24 <= n && (p = zi(t, u), u += 24);
  const d = { x: i, y: c }, y = p, m = y ? h.map((v) => Mo(y, v.x, v.y)) : h;
  y && ({ x: i, y: c } = Mo(y, i, c));
  const M = l.length > 0 ? l[0] : r;
  let b = [
    { offset: 0, color: wt(r), argb: r },
    { offset: 1, color: wt(M), argb: M }
  ], w = null, x = null;
  if (s & fh) {
    const v = dh(t, u, n);
    v && (b = v.stops.map((I) => ({ ...I, offset: 1 - I.offset })), x = {
      positions: v.stops.map((I) => I.offset),
      argb: v.stops.map((I) => I.argb ?? 0)
    }, u = v.next);
  } else if (s & gh) {
    const v = yh(t, u, n);
    v && (b = v.entries.map((I) => ({
      offset: 1 - I.pos,
      color: Fl(M, r, I.factor),
      argb: $i(M, r, I.factor)
    })), w = {
      positions: v.entries.map((I) => I.pos),
      factors: v.entries.map((I) => I.factor)
    }, u = v.next);
  }
  let E = null;
  s & im && u + 12 <= n && t.getUint32(u, !0) === 2 && (E = { x: t.getFloat32(u + 4, !0), y: t.getFloat32(u + 8, !0) });
  let T = 0;
  for (const v of m) {
    const I = Math.hypot(v.x - i, v.y - c);
    I > T && (T = I);
  }
  return T > 0 ? (X(
    `parseEmfPlusBrushObject: path gradient centre=(${i.toFixed(1)},${c.toFixed(1)}), ${h.length} boundary point(s)`
  ), {
    kind: "plus-brush",
    color: wt(r),
    gradient: {
      type: "radial",
      cx: i,
      cy: c,
      r: T,
      stops: ph(b),
      wrapMode: o,
      shape: {
        center: d,
        centerArgb: r,
        boundary: h,
        boundaryArgb: f,
        blend: w,
        preset: x,
        focus: E,
        transform: p
      }
    }
  }) : { kind: "plus-brush", color: wt(r) };
}
function $i(t, e, n) {
  const s = Math.min(1, Math.max(0, n));
  let o = 0;
  for (let r = 24; r >= 0; r -= 8) {
    const i = t >>> r & 255, c = e >>> r & 255;
    o = o * 256 + Math.round(i + (c - i) * s);
  }
  return o >>> 0;
}
var pm = 0.25, dm = 10;
function ga(t, e, n) {
  const s = n.x - e.x, o = n.y - e.y, r = Math.hypot(s, o);
  return r < 1e-12 ? Math.hypot(t.x - e.x, t.y - e.y) : Math.abs((t.x - e.x) * o - (t.y - e.y) * s) / r;
}
function bo(t, e, n, s, o, r = 0, i = 1, c = 0) {
  if (Math.max(ga(e, t, s), ga(n, t, s)) <= pm || c >= dm) {
    o.push({ x: s.x, y: s.y, t: i });
    return;
  }
  const l = (m, M) => ({ x: (m.x + M.x) / 2, y: (m.y + M.y) / 2 }), u = l(t, e), h = l(e, n), f = l(n, s), g = l(u, h), p = l(h, f), d = l(g, p), y = (r + i) / 2;
  bo(t, u, g, d, o, r, y, c + 1), bo(d, p, f, s, o, y, i, c + 1);
}
function ym(t, e, n) {
  const s = [], o = [];
  for (let i = 0; i < t.length; i++) {
    const c = e[i] & 7;
    if (i > 0 && c === 0)
      break;
    if (c === 3 && i > 0 && i + 2 < t.length) {
      const a = t[i - 1], l = t[i], u = t[i + 1], h = t[i + 2], f = n(i - 1), g = n(i + 2), p = [];
      bo(a, l, u, h, p);
      for (const d of p)
        s.push({ x: d.x, y: d.y }), o.push($i(f, g, d.t));
      if (i += 2, e[i] & 128)
        break;
      continue;
    }
    if (s.push(t[i]), o.push(n(i)), e[i] & 128)
      break;
  }
  const r = s.length;
  return r > 1 && s[0].x === s[r - 1].x && s[0].y === s[r - 1].y && (s.pop(), o.pop()), { points: s, argb: o };
}
function Mh(t, e, n, s, o = e) {
  if (n < 8)
    return null;
  const r = e + n, i = No(t.getUint32(e, !0)), c = e + (i ? 4 : 0);
  if (c + 8 > r)
    return null;
  const a = t.getUint32(c, !0), l = c + 4;
  switch (a) {
    case Bg:
      return { kind: "plus-brush", color: wt(t.getUint32(l, !0)) };
    case Xg:
      if (l + 12 <= r) {
        const u = t.getUint32(l + 4, !0);
        return {
          kind: "plus-brush",
          color: wt(u),
          hatch: { style: t.getUint32(l, !0), fore: u, back: t.getUint32(l + 8, !0) }
        };
      }
      return l + 8 <= r ? { kind: "plus-brush", color: wt(t.getUint32(l + 4, !0)) } : { kind: "plus-brush", color: "rgba(0,0,0,1)" };
    case wu: {
      const u = s == null ? void 0 : s.get(o);
      return fm(t, l, r, u) ?? { kind: "plus-brush", color: "rgba(0,0,0,1)" };
    }
    case zg:
      return lm(t, l, r) ?? { kind: "plus-brush", color: "rgba(0,0,0,1)" };
    case Yg:
      return gm(t, l, r) ?? { kind: "plus-brush", color: "rgba(0,0,0,1)" };
    default:
      return { kind: "plus-brush", color: "rgba(0,0,0,1)" };
  }
}
function mm(t) {
  const e = t[0] * t[3] - t[1] * t[2];
  if (!Number.isFinite(e) || Math.abs(e) < 1e-12)
    return null;
  const n = t[3] / e, s = -t[1] / e, o = -t[2] / e, r = t[0] / e;
  return [n, s, o, r, -(n * t[4] + o * t[5]), -(s * t[4] + r * t[5])];
}
function zn(t, e) {
  return { x: t[0] * e.x + t[2] * e.y + t[4], y: t[1] * e.x + t[3] * e.y + t[5] };
}
function Bo(t, e, n, s, o, r) {
  const i = Math.PI / 2, c = Math.max(1, Math.ceil(Math.abs(r) / i - 1e-9)), a = (h) => ({ x: t + n * Math.cos(h), y: e + s * Math.sin(h) }), l = (h) => ({ x: -n * Math.sin(h), y: s * Math.cos(h) }), u = [];
  for (let h = 0; h < c; h++) {
    const f = o + h * Math.sign(r) * i, g = h === c - 1 ? o + r - f : Math.sign(r) * i, p = 4 / 3 * Math.tan(g / 4), d = f + g, y = a(f), m = a(d), M = l(f), b = l(d);
    u.push([y, { x: y.x + p * M.x, y: y.y + p * M.y }, { x: m.x - p * b.x, y: m.y - p * b.y }, m]);
  }
  return u;
}
function Mm(t, e) {
  const n = mm(e);
  if (!n)
    return t;
  let s = null, o = null;
  const r = (l) => {
    t.moveTo(l.x, l.y), s = l, o = l;
  }, i = (l) => {
    t.lineTo(l.x, l.y), s = l;
  }, c = (l, u, h, f) => {
    const g = [];
    bo(zn(e, l), zn(e, u), zn(e, h), zn(e, f), g);
    for (let p = 0; p < g.length - 1; p++) {
      const d = zn(n, g[p]);
      t.lineTo(d.x, d.y);
    }
    i(f);
  }, a = {
    beginPath() {
      t.beginPath(), s = null, o = null;
    },
    moveTo(l, u) {
      r({ x: l, y: u });
    },
    lineTo(l, u) {
      if (!s) {
        r({ x: l, y: u });
        return;
      }
      i({ x: l, y: u });
    },
    closePath() {
      t.closePath(), s = o;
    },
    rect(l, u, h, f) {
      r({ x: l, y: u }), i({ x: l + h, y: u }), i({ x: l + h, y: u + f }), i({ x: l, y: u + f }), t.closePath(), s = { x: l, y: u };
    },
    bezierCurveTo(l, u, h, f, g, p) {
      const d = s ?? { x: l, y: u };
      s || r(d), c(d, { x: l, y: u }, { x: h, y: f }, { x: g, y: p });
    },
    ellipse(l, u, h, f, g, p, d, y) {
      let m = d - p;
      y ? (m = m > 0 ? m - 2 * Math.PI * Math.ceil(m / (2 * Math.PI)) : m, m < -2 * Math.PI && (m = -2 * Math.PI)) : (m = m < 0 ? m + 2 * Math.PI * Math.ceil(-m / (2 * Math.PI)) : m, m > 2 * Math.PI && (m = 2 * Math.PI));
      const M = Math.cos(g), b = Math.sin(g), w = (T) => g === 0 ? T : { x: l + (T.x - l) * M - (T.y - u) * b, y: u + (T.x - l) * b + (T.y - u) * M }, x = Bo(l, u, h, f, p, m).map((T) => T.map(w));
      if (x.length === 0)
        return;
      const E = x[0][0];
      s ? i(E) : r(E);
      for (const [T, v, I, P] of x)
        c(T, v, I, P);
    }
  };
  return new Proxy(t, {
    get(l, u) {
      if (typeof u == "string" && u in a)
        return a[u];
      const h = l[u];
      return typeof h == "function" ? h.bind(l) : h;
    },
    set(l, u, h) {
      return l[u] = h, !0;
    }
  });
}
var z = Math.fround;
function pa(t) {
  return Math.floor(z(z(t) * 256 + 0.5)) + 15 >> 4;
}
function bh(t, e, n) {
  let s = 1 / 0, o = 1 / 0, r = -1 / 0, i = -1 / 0;
  for (let M = 0; M < 8; M += 2)
    s = Math.min(s, t[M]), r = Math.max(r, t[M]), o = Math.min(o, t[M + 1]), i = Math.max(i, t[M + 1]);
  const c = s - 16, a = o - 16, l = [t[0] - c, t[2] - c, t[4] - c, t[6] - c], u = [t[1] - a, t[3] - a, t[5] - a, t[7] - a], h = (M, b) => Math.floor(M / 2 ** b), f = [l[0] * 1024, (l[3] - l[0]) * 1024, 3 * (l[1] - 2 * l[2] + l[3]) * 2048, 3 * (l[0] - 2 * l[1] + l[2]) * 2048], g = [u[0] * 1024, (u[3] - u[0]) * 1024, 3 * (u[1] - 2 * u[2] + u[3]) * 2048, 3 * (u[0] - 2 * u[1] + u[2]) * 2048];
  let p = 1, d = 0;
  const y = (M, b) => Math.abs(M) > Math.abs(b) ? Math.abs(M) : Math.abs(b);
  for (let M = 0; M < 40; M++) {
    const b = 24576 * 2 ** d;
    if (y(f[2], f[3]) <= b && y(g[2], g[3]) <= b)
      break;
    d += 2;
    for (const w of [f, g])
      w[2] = h(w[2] + w[3], 1), w[1] = h(w[1] - h(w[2], d), 1);
    p *= 2;
  }
  for (const M of [f, g]) {
    M[0] *= 8, M[1] *= 8;
    const b = d - 3;
    b >= 0 ? (M[2] = h(M[2], b), M[3] = h(M[3], b)) : (M[2] *= 2 ** -b, M[3] *= 2 ** -b);
  }
  const m = (M) => {
    M[0] += M[1];
    const b = M[2];
    M[1] += b, M[2] = b + b - M[3], M[3] = b;
  };
  m(f), m(g), p--;
  for (let M = 0; M < 1 << 22; M++) {
    if (e.push(h(f[0] + 4096, 13) + c, h(g[0] + 4096, 13) + a), p === 0)
      return;
    if (Math.max(y(f[2], f[3]), y(g[2], g[3])) > 196608) {
      for (const b of [f, g])
        b[2] = h(b[2] + b[3], 3), b[1] = h(b[1] - b[2], 1), b[3] = h(b[3], 2);
      p *= 2;
    }
    for (; p % 2 === 0 && y(f[3], 2 * f[2] - f[3]) <= 49152 && y(g[3], 2 * g[2] - g[3]) <= 49152; ) {
      for (const b of [f, g])
        b[3] *= 4, b[1] = b[2] + 2 * b[1], b[2] = b[2] * 8 - b[3];
      p /= 2;
    }
    p--, m(f), m(g);
  }
}
function bm(t, e, n) {
  const s = e.map((f) => z(f)), o = (f, g) => pa(z(z(z(s[0] * z(f)) + z(s[2] * z(g))) + s[4])), r = (f, g) => pa(z(z(z(s[1] * z(f)) + z(s[3] * z(g))) + s[5])), i = [];
  let c = null, a = null;
  const l = (f, g) => {
    c = { pts: [o(f, g), r(f, g)], closed: !1, curved: !1 }, i.push(c), a = { x: f, y: g };
  }, u = (f, g) => {
    if (!c) {
      l(f, g);
      return;
    }
    c.pts.push(o(f, g), r(f, g));
  }, h = {
    beginPath() {
      c = null, a = null;
    },
    moveTo: l,
    lineTo: u,
    bezierCurveTo(f, g, p, d, y, m) {
      c || l(f, g);
      const M = c;
      M.curved = !0;
      const b = M.pts.length;
      bh(
        [M.pts[b - 2], M.pts[b - 1], o(f, g), r(f, g), o(p, d), r(p, d), o(y, m), r(y, m)],
        M.pts
      );
    },
    ellipse(f, g, p, d, y, m, M, b) {
      let w = M - m;
      b ? (w = w > 0 ? w - 2 * Math.PI * Math.ceil(w / (2 * Math.PI)) : w, w = Math.max(w, -2 * Math.PI)) : (w = w < 0 ? w + 2 * Math.PI * Math.ceil(-w / (2 * Math.PI)) : w, w = Math.min(w, 2 * Math.PI));
      const x = Math.cos(y), E = Math.sin(y), T = (P) => y === 0 ? P : { x: f + (P.x - f) * x - (P.y - g) * E, y: g + (P.x - f) * E + (P.y - g) * x }, v = Bo(f, g, p, d, m, w);
      if (v.length === 0)
        return;
      const I = T(v[0][0]);
      c ? u(I.x, I.y) : l(I.x, I.y);
      for (const P of v) {
        const [, S, R, U] = P.map(T);
        h.bezierCurveTo(S.x, S.y, R.x, R.y, U.x, U.y);
      }
    },
    rect(f, g, p, d) {
      l(f, g), u(f + p, g), u(f + p, g + d), u(f, g + d), h.closePath();
    },
    closePath() {
      if (c && a) {
        c.closed = !0;
        const f = a;
        l(f.x, f.y);
      }
    }
  };
  return t(h), i.filter((f) => f.pts.length >= 4);
}
function da(t) {
  const e = t.pts;
  return !t.closed || e.length < 4 ? e : [...e, e[0], e[1]];
}
var ya = 32;
function wm(t) {
  const e = t.length / 2, n = [];
  for (let s = 0; s < e - 1; s += ya - 1)
    n.push(t.slice(2 * s, 2 * Math.min(e, s + ya)));
  return n;
}
function xm(t, e, n, s, o, r, i) {
  const c = z(n / 16 - t / 16), a = z(s / 16 - e / 16);
  if (c === 0 && a === 0)
    return;
  const l = Math.abs(c), u = Math.abs(a), h = u < l;
  let f = !1, g;
  h ? (g = a >= 0 ? 1 : -1, c < 0 && (f = !0, [t, e, n, s] = [n, s, t, e], g = -g)) : (g = c >= 0 ? 1 : -1, a < 0 && (f = !0, [t, e, n, s] = [n, s, t, e], g = -g));
  let p = h ? t : e, d = h ? n : s, y = h ? e : t, m = h ? s : n;
  const M = z(h ? z(g * u) / l : z(g * l) / u), b = d - p, w = (m - y) * g;
  let x = 0, E = 0, T = 0;
  if (i) {
    const q = M === 0 ? 0 : z(1 / M), xt = (h ? i.x : i.y) * 16 - 8, At = (h ? i.x + i.w : i.y + i.h) * 16 - 8, Wt = (h ? i.y : i.x) * 16 - 8, ne = (h ? i.y + i.h : i.x + i.w) * 16 - 8;
    if (p < xt || d > At) {
      if (p > At || d < xt)
        return;
      if (p < xt) {
        const Et = z(z((xt - p) * M) + y), Te = Math.floor(Et);
        y = Te, p = xt, x = z(Et - Te);
      }
      if (d > At) {
        const Et = z(z((At - d) * M) + m), Te = Math.floor(Et);
        o = !0, m = Te, d = At, E = z(Et - Te);
      }
    }
    const he = g === 1, ve = he ? y : m, $e = he ? m : y;
    if (ve < Wt || $e > ne) {
      if (ve > ne || $e < Wt)
        return;
      if (ve < Wt) {
        const Et = Math.floor(z(z(Wt - z(ve + (he ? x : E))) * q));
        he ? (p += Et, y = Wt) : (d += Et, m = Wt);
      }
      if ($e > ne) {
        const Et = Math.floor(z(z(ne - z($e + (he ? E : x))) * q));
        he ? (d += Et, m = ne) : (p += Et, y = ne), o = !0;
      }
    }
    E !== 0 && (m & 15) === 8 && m++, x !== 0 && (T = Math.floor(z(z(2 * b * g) * x)));
  }
  const v = h && b === w, I = v && g === 1, P = I ? 8 : 7, S = (q, xt) => {
    const At = Math.abs(q) + Math.abs(xt);
    return At < 8 ? !0 : At !== 8 ? !1 : xt === 0 && q === (I ? -8 : 8) || q === 0 && xt === 8 ? !0 : v && (I ? q < 0 : q > 0) && xt > 0;
  };
  let R = p + P & -16, U = d + P & -16;
  const A = S(p - R, y - (y + 7 & -16)), k = S(d - U, m - (m + 7 & -16)), L = p & 15, D = d & 15;
  f && !o ? (A || L <= 8) && (R += 16) : L <= 8 && !A && (R += 16), !f && !o ? (D > 8 || k) && (U -= 16) : !k && D > 8 && (U -= 16);
  const N = R >> 4, B = U >> 4;
  if (B < N)
    return;
  const G = Math.floor((R - p) * M + y + x), it = G + 7 & -16;
  let ct = it >> 4, O = T - ((it - G) * g + 8) * 2 * b >> 4;
  if (!i) {
    for (let q = N; q <= B; q++)
      h ? r(q, ct) : r(ct, q), O += 2 * w, O > 0 && (ct += g, O -= 2 * b);
    return;
  }
  const Rt = Math.floor((U - d) * M + m + E) + 7 >> 4, ue = h ? i.x : i.y, sr = (h ? i.x + i.w : i.y + i.h) - 1, or = h ? i.y : i.x, Ss = (h ? i.y + i.h : i.x + i.w) - 1;
  let Fn = (Rt - ct) * g;
  for (let q = N; q <= B && Fn >= 0; q++)
    q >= ue && q <= sr && ct >= or && ct <= Ss && (h ? r(q, ct) : r(ct, q)), O += 2 * w, O > 0 && (ct += g, O -= 2 * b, Fn--);
}
var ma = [0, -8, -8, 0, 0, 8, 8, 0];
function Ma(t, e) {
  return Math.abs(e) > Math.abs(t) ? e < 0 ? 1 : 3 : t < 0 ? 2 : 0;
}
function Em(t) {
  const e = t.length / 2;
  if (e < 2)
    return [];
  const n = [], s = [], o = (f) => t[2 * f], r = (f) => t[2 * f + 1];
  let i = Ma(o(1) - o(0), r(1) - r(0));
  const c = (f) => ma[2 * (f & 3)], a = (f) => ma[2 * (f & 3) + 1];
  n.push(o(0) - c(i), r(0) - a(i), o(0) + c(i + 1), r(0) + a(i + 1));
  for (let f = 0; f + 1 < e && (n.push(o(f) + c(i), r(f) + a(i), o(f + 1) + c(i), r(f + 1) + a(i)), s.push(o(f) - c(i), r(f) - a(i), o(f + 1) - c(i), r(f + 1) - a(i)), !(f + 2 >= e)); f++) {
    const g = Ma(o(f + 2) - o(f + 1), r(f + 2) - r(f + 1));
    if (g !== i) {
      const p = o(f + 1) - o(f), d = r(f + 1) - r(f), y = o(f + 2) - o(f + 1), m = r(f + 2) - r(f + 1), M = o(f + 1), b = r(f + 1);
      if (p * m >= d * y) {
        const w = i - 1 & 3;
        w !== g && n.push(M + c(w), b + a(w)), s.push(M, b);
      } else {
        const w = i + 1 & 3;
        w !== g && s.push(M - c(w), b - a(w)), n.push(M, b);
      }
      i = g;
    }
  }
  const l = o(e - 1), u = r(e - 1);
  n.push(l + c(i - 1), u + a(i - 1), l - c(i), u - a(i));
  const h = n.slice();
  for (let f = s.length - 2; f >= 0; f -= 2)
    h.push(s[f], s[f + 1]);
  return h;
}
function vm(t, e, n) {
  if (!e.antialias && e.opaqueSolid && !t.some((o) => o.curved)) {
    const o = e.half ? 8 : 0, r = new Uint8ClampedArray(n.w * n.h), i = (a, l) => {
      const u = a - n.x, h = l - n.y;
      u >= 0 && h >= 0 && u < n.w && h < n.h && (r[h * n.w + u] = 255);
    }, c = e.clip && !Tm(t, e.clip, o) ? e.clip : void 0;
    for (const a of t) {
      const l = da(a);
      for (let u = 0; u + 3 < l.length; u += 2)
        xm(l[u] - o, l[u + 1] - o, l[u + 2] - o, l[u + 3] - o, !0, i, c);
    }
    return r;
  }
  const s = [];
  for (const o of t)
    for (const r of wm(da(o))) {
      const i = Em(r);
      i.length >= 6 && s.push(i);
    }
  return Sn(s, !1, e.antialias, e.half, n);
}
function Tm(t, e, n) {
  let s = 1 / 0, o = 1 / 0, r = -1 / 0, i = -1 / 0;
  for (const c of t)
    for (let a = 0; a + 1 < c.pts.length; a += 2) {
      const l = (c.pts[a] - n) / 16, u = (c.pts[a + 1] - n) / 16;
      s = Math.min(s, l), r = Math.max(r, l), o = Math.min(o, u), i = Math.max(i, u);
    }
  return Math.floor(s - 0.5) - 1 >= e.x && Math.floor(o - 0.5) - 1 >= e.y && Math.ceil(r + 0.5) + 1 <= e.x + e.w - 1 && Math.ceil(i + 0.5) + 1 <= e.y + e.h - 1;
}
var Im = 3 / 8;
function pt(t) {
  return Math.ceil(Math.round(t * 256 - 1e-6) / 16);
}
function wh(t) {
  return Math.floor(t * 16 + 0.5 - 1e-4);
}
function Pm(t) {
  let e = t.map(wh);
  if (e.length === 10 && e[0] === e[8] && e[1] === e[9] && (e = e.slice(0, 8)), e.length !== 8)
    return null;
  const [n, s, o, r, i, c, a, l] = e;
  return s === r && o === i && c === l && a === n || n === o && r === c && i === a && l === s ? e : null;
}
function Pn(t, e) {
  const n = [];
  let s = null, o = null;
  const r = (f, g) => e[0] * f + e[2] * g + e[4], i = (f, g) => e[1] * f + e[3] * g + e[5], c = (f, g) => {
    s = { pts: [r(f, g), i(f, g)], closed: !1, curved: !1 }, n.push(s), o = { x: f, y: g };
  }, a = (f, g) => {
    if (!s) {
      c(f, g);
      return;
    }
    s.pts.push(r(f, g), i(f, g));
  }, l = (f, g, p, d, y, m) => {
    s || c(f, g);
    const M = s;
    M.curved = !0;
    const b = M.pts.length, w = (I) => pt(I), x = w(M.pts[b - 2]), E = w(M.pts[b - 1]);
    M.pts[b - 2] = x / 16, M.pts[b - 1] = E / 16;
    const T = [], v = [x, E, w(r(f, g)), w(i(f, g)), w(r(p, d)), w(i(p, d)), w(r(y, m)), w(i(y, m))];
    bh(v, T);
    for (const I of T)
      M.pts.push(I / 16);
  }, u = () => {
    if (s && o) {
      s.closed = !0;
      const f = o;
      c(f.x, f.y);
    }
  };
  return t({
    beginPath() {
      s = null, o = null;
    },
    moveTo: c,
    lineTo: a,
    closePath: u,
    rect(f, g, p, d) {
      c(f, g), a(f + p, g), a(f + p, g + d), a(f, g + d), u();
    },
    bezierCurveTo: l,
    ellipse(f, g, p, d, y, m, M, b) {
      let w = M - m;
      b ? (w = w > 0 ? w - 2 * Math.PI * Math.ceil(w / (2 * Math.PI)) : w, w = Math.max(w, -2 * Math.PI)) : (w = w < 0 ? w + 2 * Math.PI * Math.ceil(-w / (2 * Math.PI)) : w, w = Math.min(w, 2 * Math.PI));
      const x = Math.cos(y), E = Math.sin(y), T = (P) => y === 0 ? P : { x: f + (P.x - f) * x - (P.y - g) * E, y: g + (P.x - f) * E + (P.y - g) * x }, v = Bo(f, g, p, d, m, w);
      if (v.length === 0)
        return;
      const I = T(v[0][0]);
      s ? a(I.x, I.y) : c(I.x, I.y);
      for (const P of v) {
        const [, S, R, U] = P.map(T);
        l(S.x, S.y, R.x, R.y, U.x, U.y);
      }
    }
  }), n.filter((f) => f.pts.length >= 4);
}
function Sm(t, e, n = !1) {
  return Pn(t, e).map((s) => (n && !s.curved ? Pm(s.pts) : null) ?? s.pts.map(pt)).filter((s) => s.length >= 6);
}
function Rm(t, e) {
  let n = Math.floor(t / e);
  for (; n * e > t; )
    n--;
  for (; (n + 1) * e <= t; )
    n++;
  return n * e === t ? n : n + 1;
}
function Ci(t, e) {
  let n = 1 / 0, s = 1 / 0, o = -1 / 0, r = -1 / 0;
  for (const u of t)
    for (let h = 0; h < u.length; h += 2)
      n = Math.min(n, u[h]), o = Math.max(o, u[h]), s = Math.min(s, u[h + 1]), r = Math.max(r, u[h + 1]);
  if (!Number.isFinite(n))
    return null;
  const i = Math.max(0, Math.floor(n / 16) - 1), c = Math.max(0, Math.floor(s / 16) - 1), a = Math.min(e.w, Math.ceil(o / 16) + 2), l = Math.min(e.h, Math.ceil(r / 16) + 2);
  return a > i && l > c ? { x: i, y: c, w: a - i, h: l - c } : null;
}
function Sn(t, e, n, s, o) {
  const r = n ? 8 : 1, i = n ? 4 : 1, c = 16 / r, a = 16 / i, l = s ? 8 : 0, u = 16 * o.x + l - (n ? 8 : 0), h = 16 * o.y + l - (n ? 8 : 0), f = o.w * r, g = [];
  for (const M of t) {
    const b = M.length / 2;
    for (let w = 0; w < b; w++) {
      const x = (w + 1) % b, E = M[2 * w], T = M[2 * w + 1], v = M[2 * x], I = M[2 * x + 1];
      T !== I && g.push({ ax: E, ay: T, bx: v, by: I, top: Math.min(T, I), bottom: Math.max(T, I), w: I > T ? 1 : -1 });
    }
  }
  const p = new Uint8ClampedArray(o.w * o.h), d = new Int32Array(o.w), y = new Int32Array(f + 1), m = [];
  for (let M = 0; M < o.h; M++) {
    d.fill(0);
    for (let w = 0; w < i; w++) {
      const x = h + a * (M * i + w);
      m.length = 0;
      for (const v of g) {
        if (x < v.top || x >= v.bottom)
          continue;
        let I = v.by - v.ay, P = v.ax * I + (v.bx - v.ax) * (x - v.ay);
        I < 0 && (I = -I, P = -P);
        const S = Rm(P - u * I, c * I);
        m.push({ k: Math.min(Math.max(S, 0), f), w: v.w });
      }
      if (m.length < 2)
        continue;
      m.sort((v, I) => v.k - I.k), y.fill(0);
      let E = 0;
      for (let v = 0; v + 1 < m.length; v++)
        E += m[v].w, (e ? (E & 1) !== 0 : E !== 0) && m[v + 1].k > m[v].k && (y[m[v].k]++, y[m[v + 1].k]--);
      let T = 0;
      for (let v = 0; v < f; v++)
        T += y[v], T > 0 && d[v / r | 0]++;
    }
    const b = r * i;
    for (let w = 0; w < o.w; w++) {
      const x = d[w];
      p[M * o.w + w] = x === 0 ? 0 : x >= b ? 255 : Math.round(x * 255 / b);
    }
  }
  return p;
}
function Am(t, e, n) {
  const s = [1, 0, 0, 1, 0, 0];
  let o = null;
  for (const c of t) {
    let a;
    try {
      a = Pn(c.build, s).map((u) => u.pts.map(wh));
    } catch {
      return null;
    }
    const l = Sn(a, c.evenOdd, !1, n, e);
    if (o)
      for (let u = 0; u < l.length; u++)
        o[u] = o[u] && l[u];
    else
      o = l;
  }
  const r = [];
  if (!o)
    return r;
  let i = /* @__PURE__ */ new Map();
  for (let c = 0; c < e.h; c++) {
    const a = /* @__PURE__ */ new Map();
    for (let l = 0; l < e.w; ) {
      if (!o[c * e.w + l]) {
        l++;
        continue;
      }
      let u = l;
      for (; u < e.w && o[c * e.w + u]; )
        u++;
      const h = l + "," + u, f = i.get(h);
      if (f)
        f.h++, a.set(h, f), i.delete(h);
      else {
        const g = { x: e.x + l, y: e.y + c, w: u - l, h: 1 };
        r.push(g), a.set(h, g);
      }
      l = u;
    }
    i = a;
  }
  return r;
}
var Um = {
  0: "bilinear",
  // Default
  1: "bilinear",
  // LowQuality
  2: "hq-bicubic",
  // HighQuality
  3: "bilinear",
  // Bilinear
  4: "bicubic",
  // Bicubic
  5: "nearest",
  // NearestNeighbor
  6: "hq-bilinear",
  // HighQualityBilinear
  7: "hq-bicubic"
  // HighQualityBicubic
}, km = /* @__PURE__ */ new Set([2, 4]), xh = 16 * 1024 * 1024;
function Lm(t) {
  return Um[t] ?? "bilinear";
}
function te(t) {
  return km.has(t);
}
function Eh(t) {
  const e = t[0] * t[3] - t[1] * t[2];
  if (!Number.isFinite(e) || Math.abs(e) < 1e-12)
    return null;
  const n = t[3] / e, s = -t[1] / e, o = -t[2] / e, r = t[0] / e;
  return [n, s, o, r, -(n * t[4] + o * t[5]), -(s * t[4] + r * t[5])];
}
var Fm = 1e-6, Dm = 1e-9, Bs = 16;
function _m(t) {
  const e = t.toDevice, n = (l, u) => [
    Math.round((e[0] * l + e[2] * u + e[4]) * Bs) / Bs,
    Math.round((e[1] * l + e[3] * u + e[5]) * Bs) / Bs
  ], [s, o] = n(t.srcX, t.srcY), [r, i, c, a] = e;
  return [r, i, c, a, s - r * t.srcX - c * t.srcY, o - i * t.srcX - a * t.srcY];
}
function Nm(t, e) {
  const n = Math.abs(t);
  return n < 1 ? ((e + 2) * n - (e + 3)) * n * n + 1 : n < 2 ? e * (((n - 5) * n + 8) * n - 4) : 0;
}
function Bm(t) {
  const e = Math.min(1, Math.abs(t));
  return Math.sign(t) * (e - e * e / 2);
}
function Xm(t, e) {
  const n = Math.min(2, Math.abs(t));
  let s;
  if (n < 1)
    s = (e + 2) * n ** 4 / 4 - (e + 3) * n ** 3 / 3 + n;
  else {
    const o = (e + 2) / 4 - (e + 3) / 3 + 1, r = (i) => e * (i ** 4 / 4 - 5 * i ** 3 / 3 + 4 * i * i - 4 * i);
    s = o + r(n) - r(1);
  }
  return Math.sign(t) * s;
}
var Ym = -0.5, zm = -1;
function ba(t, e, n) {
  switch (t) {
    case "bilinear":
      return { radius: 1, weight: (s, o) => Math.max(0, 1 - Math.abs(s - o)) };
    case "bicubic":
      return { radius: 2, weight: (s, o) => Nm(s - o, Ym) };
    case "hq-bilinear":
    case "hq-bicubic": {
      if (n)
        return { radius: 0.5, weight: (c, a) => Math.floor(a + 0.5) === c ? 1 : 0 };
      const s = Math.min(1, Math.abs(e)), o = t === "hq-bicubic", r = o ? 2 : 1, i = o ? (c) => Xm(c, zm) : Bm;
      return {
        radius: r / s + 0.5,
        weight: (c, a) => i(s * (c + 0.5 - a)) - i(s * (c - 0.5 - a))
      };
    }
    default:
      return { radius: 0.5, weight: (s, o) => Math.floor(o + 0.5) === s ? 1 : 0 };
  }
}
function Om(t, e, n, s, o, r, i, c, a = { wrap: void 0, clamp: null }) {
  const [l, u, h, f] = c ? [s, o, r, i] : [r, i, s, o], [g, p, d, y] = c ? [n.x0, n.x1, n.y0, n.y1] : [n.y0, n.y1, n.x0, n.x1];
  let m = 0, M = 0, b = 0, w = 0;
  for (let x = 0; x < u.length; x++) {
    const E = u[x], T = l + x;
    if (E === 0)
      continue;
    const v = wa(T, g, p, c ? a.mirrorX : a.mirrorY, a);
    if (v === ti)
      continue;
    let I = 0, P = 0, S = 0, R = 0;
    for (let U = 0; U < f.length; U++) {
      const A = f[U], k = h + U;
      if (A === 0)
        continue;
      const L = wa(k, d, y, c ? a.mirrorY : a.mirrorX, a);
      if (L === ti)
        continue;
      let D, N = 0;
      L === ei || v === ei ? D = a.clamp ?? [0, 0, 0, 0] : (D = t, N = (c ? L * e + v : v * e + L) * 4);
      const B = D[N + 3], G = A * B / 255;
      I += G * D[N], P += G * D[N + 1], S += G * D[N + 2], R += A * B;
    }
    R = Math.min(255, Math.max(0, R)), m += E * Math.min(R, Math.max(0, I)), M += E * Math.min(R, Math.max(0, P)), b += E * Math.min(R, Math.max(0, S)), w += E * R;
  }
  return [m, M, b, w];
}
var ti = -1, ei = -2;
function wa(t, e, n, s, o) {
  if (t >= e && t < n)
    return t;
  if (!o.wrap)
    return ti;
  if (o.wrap === "clamp")
    return ei;
  const r = n - e;
  if (!s)
    return e + ((t - e) % r + r) % r;
  const i = ((t - e) % (2 * r) + 2 * r) % (2 * r);
  return e + (i < r ? i : 2 * r - 1 - i);
}
function xa(t) {
  const e = t - Math.floor(t);
  return e === 0 ? t : Math.floor(t) + 1 - e;
}
function Xo(t, e, n, s, o) {
  if (s.kernel === "nearest" && !s.wrap)
    return $m(t, e, n, s, o);
  let r = _m(s);
  const i = s.kernel, c = i === "hq-bilinear" || i === "hq-bicubic", a = r[1] === 0 && r[2] === 0;
  if (c && a) {
    const O = r[0] * s.srcX + r[4], at = r[3] * s.srcY + r[5];
    r = [r[0], 0, 0, r[3], r[4] + xa(O) - O, r[5] + xa(at) - at];
  }
  const l = Eh(r);
  if (!l)
    return null;
  const u = Math.max(0, Math.floor(s.srcX)), h = Math.max(0, Math.floor(s.srcY)), f = Math.min(e, Math.ceil(s.srcX + s.srcW)), g = Math.min(n, Math.ceil(s.srcY + s.srcH));
  if (f <= u || g <= h)
    return null;
  let p = 1 / 0, d = 1 / 0, y = -1 / 0, m = -1 / 0;
  for (const [O, at] of [
    [s.srcX, s.srcY],
    [s.srcX + s.srcW, s.srcY],
    [s.srcX, s.srcY + s.srcH],
    [s.srcX + s.srcW, s.srcY + s.srcH]
  ]) {
    const Rt = r[0] * O + r[2] * at + r[4], ue = r[1] * O + r[3] * at + r[5];
    p = Math.min(p, Rt), d = Math.min(d, ue), y = Math.max(y, Rt), m = Math.max(m, ue);
  }
  const M = Math.max(0, Math.floor(p) - 1), b = Math.max(0, Math.floor(d) - 1), w = Math.min(o.w, Math.ceil(y) + 1), x = Math.min(o.h, Math.ceil(m) + 1), E = w - M, T = x - b;
  if (!(E > 0 && T > 0) || E * T > xh)
    return null;
  const v = Math.hypot(r[0], r[1]), I = Math.hypot(r[2], r[3]), P = (O) => Math.abs(O - Math.round(O)) < 1e-9, S = a && Math.abs(v - 1) < 1e-9 && P(r[4]), R = a && Math.abs(I - 1) < 1e-9 && P(r[5]), U = ba(i, v, S), A = ba(i, I, R), k = new Uint8ClampedArray(E * T * 4), L = s.halfPixelOffset ? 0.5 : 0, D = s.srcX + s.srcW, N = s.srcY + s.srcH, B = [], G = [], it = s.clampArgb ?? 0, ct = {
    wrap: s.wrap,
    clamp: [it >>> 16 & 255, it >>> 8 & 255, it & 255, it >>> 24 & 255],
    mirrorX: s.wrap === "tile-flip-x" || s.wrap === "tile-flip-xy",
    mirrorY: s.wrap === "tile-flip-y" || s.wrap === "tile-flip-xy"
  };
  for (let O = 0; O < T; O++) {
    const at = b + O + L;
    for (let Rt = 0; Rt < E; Rt++) {
      const ue = M + Rt + L, sr = l[0] * ue + l[2] * at + l[4], or = l[1] * ue + l[3] * at + l[5], Ss = ue + Fm, Fn = at + Dm, q = l[0] * Ss + l[2] * Fn + l[4], xt = l[1] * Ss + l[3] * Fn + l[5];
      if (q < s.srcX || xt < s.srcY || q >= D || xt >= N)
        continue;
      const At = sr, Wt = or, ne = Math.ceil(At - U.radius), he = Math.floor(At + U.radius), ve = Math.ceil(Wt - A.radius), $e = Math.floor(Wt + A.radius);
      B.length = 0, G.length = 0;
      for (let Pe = ne; Pe <= he; Pe++)
        B.push(U.weight(Pe, At));
      for (let Pe = ve; Pe <= $e; Pe++)
        G.push(A.weight(Pe, Wt));
      const [Et, Te, N0, bc] = Om(
        t,
        e,
        s.wrap ? { x0: 0, y0: 0, x1: e, y1: n } : { x0: u, y0: h, x1: f, y1: g },
        ne,
        B,
        ve,
        G,
        i === "bicubic",
        ct
      );
      if (bc <= 0)
        continue;
      const Ie = Math.min(255, bc), Rs = (O * E + Rt) * 4;
      k[Rs] = Math.min(Math.max(0, Et), Ie) * 255 / Ie, k[Rs + 1] = Math.min(Math.max(0, Te), Ie) * 255 / Ie, k[Rs + 2] = Math.min(Math.max(0, N0), Ie) * 255 / Ie, k[Rs + 3] = Ie;
    }
  }
  return { x: M, y: b, w: E, h: T, rgba: k };
}
var pe = 65536;
function $m(t, e, n, s, o) {
  const r = s.toDevice, i = Eh(r);
  if (!i)
    return null;
  const { srcX: c, srcY: a, srcW: l, srcH: u } = s, h = [
    [c, a],
    [c + l, a],
    [c + l, a + u],
    [c, a + u]
  ].map(([A, k]) => [r[0] * A + r[2] * k + r[4], r[1] * A + r[3] * k + r[5]]);
  let f = 1 / 0, g = 1 / 0, p = -1 / 0, d = -1 / 0;
  for (const [A, k] of h)
    f = Math.min(f, A), g = Math.min(g, k), p = Math.max(p, A), d = Math.max(d, k);
  if (![f, g, p, d].every(Number.isFinite))
    return null;
  const y = Math.max(0, Math.floor(f) - 1), m = Math.max(0, Math.floor(g) - 1), M = Math.min(o.w, Math.ceil(p) + 2), b = Math.min(o.h, Math.ceil(d) + 2), w = M - y, x = b - m;
  if (!(w > 0 && x > 0) || w * x > xh)
    return null;
  const E = { x: y, y: m, w, h: x }, T = Sn([h.flatMap(([A, k]) => [pt(A), pt(k)])], !1, !1, s.halfPixelOffset, E), v = Math.max(0, Math.floor(a)), I = Math.min(n, Math.ceil(a + u)), P = s.halfPixelOffset ? 0.5 : 0, S = Math.round(i[0] * pe), R = Math.round(i[1] * pe), U = new Uint8ClampedArray(w * x * 4);
  for (let A = 0; A < x; A++) {
    const k = m + A + P;
    let L = -1, D = 0, N = 0;
    for (let B = 0; B < w; B++) {
      if (!T[A * w + B])
        continue;
      if (L < 0) {
        const Rt = y + B + P;
        L = B, D = Math.round((i[0] * Rt + i[2] * k + i[4]) * pe), N = Math.round((i[1] * Rt + i[3] * k + i[5]) * pe);
      }
      const G = B - L, it = Math.floor((D + G * S + pe / 2) / pe), ct = Math.floor((N + G * R + pe / 2) / pe);
      if (it < 0 || it >= e || ct < v || ct >= I)
        continue;
      const O = (ct * e + it) * 4, at = (A * w + B) * 4;
      U[at] = t[O], U[at + 1] = t[O + 1], U[at + 2] = t[O + 2], U[at + 3] = t[O + 3];
    }
  }
  return { x: y, y: m, w, h: x, rgba: U };
}
function vh(t, e, n, s) {
  const o = [];
  if (!(e > 0) || s === 0)
    return o;
  for (const [r, i, c, a] of Bo(t.x, t.y, e, e, n, s)) {
    const l = [];
    Pi(
      pt(r.x),
      pt(r.y),
      pt(i.x),
      pt(i.y),
      pt(c.x),
      pt(c.y),
      pt(a.x),
      pt(a.y),
      l,
      Im
    );
    for (let u = 0; u + 1 < l.length; u += 2)
      o.push({ x: l[u] / 16, y: l[u + 1] / 16 });
  }
  return o;
}
function Ea(t, e) {
  const n = [];
  for (let s = 0; s + 1 < t.length; s += 2) {
    const o = { x: t[s], y: t[s + 1] }, r = n[n.length - 1];
    (!r || Math.abs(r.x - o.x) > 1e-9 || Math.abs(r.y - o.y) > 1e-9) && n.push(o);
  }
  if (e && n.length > 1) {
    const s = n[0], o = n[n.length - 1];
    Math.abs(s.x - o.x) <= 1e-9 && Math.abs(s.y - o.y) <= 1e-9 && n.pop();
  }
  return n;
}
function ni(t, e) {
  const n = Math.hypot(e.x - t.x, e.y - t.y), s = (e.x - t.x) / n, o = (e.y - t.y) / n;
  return { ux: s, uy: o, nx: -o, ny: s };
}
function Cm(t, e, n, s, o) {
  const r = { x: t.x + e.nx * s, y: t.y + e.ny * s }, i = { x: t.x + n.nx * s, y: t.y + n.ny * s };
  if (s === 0)
    return [t];
  const c = e.ux * n.uy - e.uy * n.ux;
  if (Math.abs(c) < 1e-12 && e.ux * n.ux + e.uy * n.uy > 0)
    return [i];
  if (!(c * s < 0))
    return [r, i];
  if (o.join === 2) {
    const p = Math.atan2(r.y - t.y, r.x - t.x);
    let d = Math.atan2(i.y - t.y, i.x - t.x) - p;
    for (; d > Math.PI; )
      d -= 2 * Math.PI;
    for (; d < -Math.PI; )
      d += 2 * Math.PI;
    return [r, ...vh(t, Math.abs(s), p, d), i];
  }
  if (o.join === 1)
    return [r, i];
  const l = e.ux * n.uy - e.uy * n.ux, u = ((i.x - r.x) * n.uy - (i.y - r.y) * n.ux) / l, h = { x: r.x + e.ux * u, y: r.y + e.uy * u }, f = Math.hypot(h.x - t.x, h.y - t.y), g = o.miterLimit * o.half;
  if (f <= g)
    return [h];
  if (o.join === 3) {
    const p = (h.x - t.x) / f, d = (h.y - t.y) / f, y = (m, M) => {
      const b = (m.x - t.x) * p + (m.y - t.y) * d, w = (M.x - t.x) * p + (M.y - t.y) * d, x = w === b ? 0 : (g - b) / (w - b);
      return { x: m.x + (M.x - m.x) * x, y: m.y + (M.y - m.y) * x };
    };
    return [r, y(r, h), y(i, h), i];
  }
  return [r, i];
}
function va(t, e, n, s, o, r) {
  const i = (l, u) => ({ x: t.x + e.nx * l + e.ux * u, y: t.y + e.ny * l + e.uy * u }), c = o & 15;
  switch (o === 17 ? 1 : o === 18 ? 2 : o === 19 || o === 20 ? 3 : o >= 16 ? 0 : c) {
    case 1:
      return [i(s, 0), i(s, r), i(n, r), i(n, 0)];
    case 2: {
      if (Math.abs(n + s) > 1e-9)
        return [i(s, 0), i(n, 0)];
      const l = Math.atan2(e.ny, e.nx) + (s < 0 ? Math.PI : 0), u = s > 0 ? -Math.PI : Math.PI;
      return [i(s, 0), ...vh(t, Math.abs(s), l, u), i(n, 0)];
    }
    case 3:
      return [i(s, 0), i((n + s) / 2, r), i(n, 0)];
    default:
      return [i(s, 0), i(n, 0)];
  }
}
function Xs(t, e, n, s) {
  const o = t.length, r = [], i = e ? o : o - 1, c = Array.from({ length: i }, (a, l) => ni(t[l], t[(l + 1) % o]));
  for (let a = 0; a < o; a++) {
    const l = a - 1 >= 0 ? a - 1 : e ? i - 1 : -1, u = a < i ? a : -1;
    if (l >= 0 && u >= 0)
      r.push(...Cm(t[a], c[l], c[u], n, s));
    else {
      const h = c[u >= 0 ? u : l];
      r.push({ x: t[a].x + h.nx * n, y: t[a].y + h.ny * n });
    }
  }
  return r;
}
function Hm(t, e, n) {
  const s = n.dashCap !== 0 ? 2 * n.half : 0, o = n.dash.map((p, d, y) => {
    if (d % 2 === 0)
      return Math.max(p - s, Ta);
    const m = y[d - 1];
    return p + m - Math.max(m - s, Ta);
  }), r = o.reduce((p, d) => p + d, 0), i = [];
  if (!(r > 0))
    return i;
  const c = e ? [t[t.length - 1], ...t] : t;
  let a = (n.dashOffset % r + r) % r, l = 0;
  for (; a >= o[l]; )
    a -= o[l], l = (l + 1) % o.length;
  let u = o[l] - a, h = l % 2 === 0, f = h ? [c[0]] : null, g = h;
  for (let p = 0; p + 1 < c.length; p++) {
    const d = c[p], y = c[p + 1];
    let m = Math.hypot(y.x - d.x, y.y - d.y), M = 0;
    for (; m - M > u + 1e-9; ) {
      M += u;
      const b = { x: d.x + (y.x - d.x) * M / m, y: d.y + (y.y - d.y) * M / m };
      h && f ? (f.push(b), i.push({ pts: f, first: g, last: !1 }), f = null) : (f = [b], g = !1), h = !h, l = (l + 1) % o.length, u = o[l];
    }
    u -= m - M, h && f && f.push(y), m = 0;
  }
  return h && f && f.length > 1 && i.push({ pts: f, first: g, last: !0 }), i.filter((p) => p.pts.length > 1);
}
var Ta = 1 / 256;
function Gm(t) {
  let e = 0;
  for (let n = 0; n < t.length; n++) {
    const s = t[n], o = t[(n + 1) % t.length];
    e += s.x * o.y - o.x * s.y;
  }
  return e / 2;
}
function Hi(t, e) {
  const n = [], s = e.half;
  for (const o of t) {
    const r = Ea(o.pts, o.closed);
    if (r.length < 2)
      continue;
    const i = o.closed && r.length > 2;
    let c = -s, a = s;
    e.inset && i && (Gm(r) > 0 ? (c = 0, a = 2 * s) : (c = -2 * s, a = 0));
    const l = [], u = e.compound;
    if (u && u.length >= 2)
      for (let p = 0; p + 1 < u.length; p += 2)
        l.push([c + (a - c) * u[p], c + (a - c) * u[p + 1]]);
    else
      l.push([c, a]);
    const h = e.inset && i ? { ...e, dashOffset: e.dashOffset * 2 } : e, f = e.dash ? Hm(r, i, h) : [{ pts: r, first: !0, last: !0 }], g = !e.dash && i;
    for (const p of f) {
      const d = Ea(
        p.pts.flatMap((y) => [y.x, y.y]),
        !1
      );
      if (!(d.length < 2))
        for (const [y, m] of l) {
          if (g) {
            n.push(Xs(d, !0, m, e)), n.push(Xs(d, !0, y, e).reverse());
            continue;
          }
          const M = Xs(d, !1, m, e), b = Xs(d, !1, y, e).reverse(), w = ni(d[d.length - 2], d[d.length - 1]), x = ni(d[1], d[0]), E = p.last && !(e.dash && i) ? e.endCap : e.dashCap, T = p.first && !(e.dash && i) ? e.startCap : e.dashCap, v = va(d[d.length - 1], w, y, m, E, s), I = va(d[0], x, -m, -y, T, s);
          n.push([...M.slice(0, -1), ...v, ...b.slice(1, -1), ...I]);
        }
    }
  }
  return n;
}
var jm = 1, Wm = 2, Ot = 11920928955078125e-23, _ = Math.fround;
function yr(t, e) {
  const n = t.length;
  if (n < 2)
    return 0;
  let o = (e[n - 1] & 128) !== 0 ? t[n - 1] : t[0], r = 0;
  for (let i = 0; i < n; i++) {
    const c = t[i], a = _(o.x - c.x);
    if (Math.abs(a) >= Ot) {
      const l = _(-c.x / a);
      if (!(l < -Ot) && !(_(l - 1) > Ot)) {
        const u = _(_(_(o.y - c.y) * l) + c.y);
        r = Math.min(r, u);
      }
    }
    o = c;
  }
  return r < 0 ? -r : 0;
}
function Vm(t, e, n, s) {
  const o = _(e), r = _(_(t) * 0.5), i = [
    { x: r, y: -o },
    { x: 0, y: 0 },
    { x: -r, y: -o }
  ];
  s && n !== 0 && i.push({ x: 0, y: _(_(n) - o) });
  const c = new Uint8Array(i.length);
  return c.fill(1), c[0] = 0, s && (c[i.length - 1] |= 128), { kind: "plus-path", points: i, types: c, fillRule: "nonzero" };
}
function qm(t, e, n) {
  const s = e + n;
  if (n < 8 || s > t.byteLength)
    return null;
  const o = t.getInt32(e + 4, !0), r = e + 8, i = (g) => t.getFloat32(r + g, !0), c = (g) => t.getUint32(r + g, !0);
  if (o === 1) {
    if (r + 52 > s)
      return null;
    const g = i(0), p = i(4), d = i(8), y = c(12) !== 0, m = Vm(g, p, d, y), M = yr(m.points, m.types);
    return {
      kind: "plus-customlinecap",
      capType: 1,
      baseCap: 0,
      baseInset: g !== 0 ? _(p / g) : 0,
      strokeStartCap: c(16),
      strokeEndCap: c(20),
      strokeJoin: c(24),
      strokeMiterLimit: i(28),
      widthScale: i(32),
      fillPath: y ? m : null,
      linePath: y ? null : m,
      fillLength: y ? M : 0,
      strokeLength: y ? 0 : M,
      arrow: { width: g, height: p, middleInset: d, filled: y }
    };
  }
  if (o !== 0 || r + 48 > s)
    return null;
  const a = c(0);
  let l = r + 48;
  const u = () => {
    if (l + 4 > s)
      return null;
    const g = t.getInt32(l, !0);
    if (l += 4, g <= 0 || l + g > s)
      return null;
    const p = Do(t, l, g);
    return l += g, p;
  }, h = a & jm ? u() : null, f = a & Wm ? u() : null;
  return {
    kind: "plus-customlinecap",
    capType: 0,
    baseCap: c(4),
    baseInset: i(8),
    strokeStartCap: c(12),
    strokeEndCap: c(16),
    strokeJoin: c(20),
    strokeMiterLimit: i(24),
    widthScale: i(28),
    fillPath: h,
    linePath: f,
    fillLength: h ? yr(h.points, h.types) : 0,
    strokeLength: f ? yr(f.points, f.types) : 0
  };
}
function Jm(t, e, n, s) {
  const o = _(s.x - n.x), r = _(s.y - n.y), i = Math.sqrt(_(_(o * o) + _(r * r)));
  if (i < Ot)
    return null;
  const c = _(1 / i), a = _(o * c), l = _(r * c), u = _(t.x - n.x), h = _(t.y - n.y), f = _(_(h * h) + _(u * u)), g = _(_(h * l) + _(u * a));
  if (g < Ot && f >= e)
    return null;
  const p = e - f + g * g;
  if (p < Ot)
    return null;
  const d = Math.sqrt(p);
  let y = null;
  if (f >= e) {
    const M = g - d;
    M > Ot && M >= 0 && (y = M);
  }
  if (y === null) {
    const M = d + g;
    M > Ot && M >= 0 && (y = M);
  }
  if (y === null)
    return null;
  const m = _(y);
  return { x: _(_(m * a) + n.x), y: _(_(m * l) + n.y) };
}
function Km(t, e, n, s, o) {
  const r = t.length, i = (b) => n ? r - 1 - b : b, c = { ...t[i(0)] };
  let a = 0, l = !1, u = !1, h = i(0);
  for (; a < r; ) {
    const b = t[i(a)];
    h = i(a);
    const w = _(b.x - c.x), x = _(b.y - c.y);
    if (_(_(w * w) + _(x * x)) > s) {
      l = !0;
      break;
    }
    u = e[i(a)], e[i(a)] = !0, a++;
  }
  const f = i(Math.max(0, a - 1));
  l && !u && (e[f] = !1);
  const g = t[f], p = Jm(c, s, t[h], g) ?? { x: g.x, y: g.y };
  let d = _(p.x - c.x), y = _(p.y - c.y);
  const m = Math.sqrt(d * d + y * y);
  m > Ot ? (d = _(d / m), y = _(y / m)) : (d = 0, y = 0);
  const M = _(1 - o);
  return t[f] = {
    x: _(_(_(c.x - p.x) * M) + p.x),
    y: _(_(_(c.y - p.y) * M) + p.y)
  }, { x: d, y };
}
function Ia(t, e, n, s) {
  const o = _(n.y * s), r = _(-n.x * s), i = _(n.x * s), c = _(n.y * s), a = t.points.map((l) => ({
    x: _(_(_(o * l.x) + _(i * l.y)) + e.x),
    y: _(_(_(r * l.x) + _(c * l.y)) + e.y)
  }));
  return { ...t, points: a };
}
function Pa(t, e) {
  const n = Pn((s) => {
    const o = t.points, r = t.types;
    let i = 0;
    for (; i < o.length; ) {
      const c = r[i] & 7;
      if (c === 0 || i === 0)
        s.moveTo(o[i].x, o[i].y), i++;
      else if (c === 3 && i + 2 < o.length) {
        s.bezierCurveTo(o[i].x, o[i].y, o[i + 1].x, o[i + 1].y, o[i + 2].x, o[i + 2].y), i += 3, r[i - 1] & 128 && s.closePath();
        continue;
      } else
        s.lineTo(o[i].x, o[i].y), i++;
      r[i - 1] & 128 && s.closePath();
    }
  }, [1, 0, 0, 1, 0, 0]);
  return e ? n.map((s) => ({ ...s, closed: !0 })) : n;
}
function Zm(t, e, n, s, o = {}) {
  const r = [], i = [], c = [], a = o.minFillScale ?? 2;
  for (const l of t) {
    if (l.closed || !n && !s) {
      r.push(l), i.push({ start: !1, end: !1 });
      continue;
    }
    const u = [];
    for (let y = 0; y + 1 < l.pts.length; y += 2)
      u.push({ x: l.pts[y], y: l.pts[y + 1] });
    if (u.length < 2) {
      r.push(l), i.push({ start: !1, end: !1 });
      continue;
    }
    const h = new Array(u.length).fill(!1), f = { ...u[0] }, g = { ...u[u.length - 1] }, p = (y, m, M) => {
      const b = M ? y.fillPath : y.linePath;
      if (!b || b.points.length === 0)
        return;
      const w = _(y.widthScale * e);
      let x, E;
      M ? (x = y.fillLength, E = Math.max(w, 1)) : (x = Math.abs(y.strokeLength) < Ot ? 1 : y.strokeLength, E = w);
      const T = M && Math.abs(x) < Ot ? 0 : _(y.baseInset / x), v = _(x * E), I = Km(u, h, m, _(v * v), T), P = { x: -I.x, y: -I.y }, S = m ? g : f;
      if (M) {
        const R = Ia(b, S, P, Math.max(E, a));
        for (const U of Pa(R, !0)) {
          const A = [];
          for (let k = 0; k + 1 < U.pts.length; k += 2)
            A.push({ x: U.pts[k], y: U.pts[k + 1] });
          c.push(A);
        }
      } else {
        const R = Ia(b, S, P, E), U = {
          // GDI+'s widener never makes an outline thinner than one device pixel.
          half: Math.max(w, 1) / 2,
          join: (o.widenJoin ?? ((A) => A))(y.strokeJoin),
          miterLimit: 10,
          startCap: y.strokeStartCap,
          endCap: y.strokeEndCap,
          dashCap: 0,
          dash: null,
          dashOffset: 0,
          compound: null,
          inset: !1
        };
        c.push(...(o.widen ?? Hi)(Pa(R, !1), U).map((A) => A.reverse()));
      }
    };
    n && p(n, !1, !0), s && p(s, !0, !0), n && p(n, !1, !1), s && p(s, !0, !1);
    const d = [];
    u.forEach((y, m) => {
      h[m] || d.push(y.x, y.y);
    }), d.length >= 4 && (r.push({ pts: d, closed: !1, curved: l.curved }), i.push({ start: !!n, end: !!s }));
  }
  return { figures: r, capped: i, polygons: c };
}
var Th = 1, Ih = 2, Ph = 4, Sh = 8, Rh = 16, si = 32, Ah = 64, Uh = 128, kh = 256, Lh = 512, Fh = 1024, oi = 2048, Dh = 4096, es = 1024;
function Qm(t, e, n, s, o = e) {
  if (n < 20)
    return null;
  const r = e + n, i = No(t.getUint32(e, !0)), c = t.getUint32(e + (i ? 8 : 4), !0), a = t.getFloat32(e + 16, !0);
  let l = e + 20;
  const u = () => {
    if (l + 4 > r)
      return;
    const g = t.getUint32(l, !0);
    return l += 4, g;
  }, h = () => {
    if (l + 4 > r)
      return;
    const g = t.getFloat32(l, !0);
    return l += 4, g;
  }, f = { kind: "plus-pen", color: "rgba(0,0,0,1)", width: a || 1, dashStyle: 0 };
  if (c & Th && (l + 24 <= r && (f.transform = [0, 4, 8, 12, 16, 20].map((g) => t.getFloat32(l + g, !0))), l += 24), c & Ih && (f.startCap = u()), c & Ph && (f.endCap = u()), c & Sh && (f.lineJoin = u()), c & Rh && (f.miterLimit = h()), c & si && (f.dashStyle = u() ?? 0), c & Ah && (f.dashCap = u()), c & Uh && (f.dashOffset = h()), c & kh) {
    const g = u() ?? 0;
    g > 0 && g <= es && l + g * 4 <= r && (f.dashPattern = Array.from({ length: g }, (p, d) => t.getFloat32(l + d * 4, !0)), c & si || (f.dashStyle = 5)), l += Math.min(g, es) * 4;
  }
  if (c & Lh && (f.alignment = u()), c & Fh) {
    const g = u() ?? 0;
    g >= 2 && g <= es && l + g * 4 <= r && (f.compound = Array.from({ length: g }, (p, d) => t.getFloat32(l + d * 4, !0))), l += Math.min(g, es) * 4;
  }
  for (const g of [oi, Dh])
    if (c & g) {
      const p = u() ?? 0, d = l + p <= r ? qm(t, l, p) : null;
      g === oi ? f.customStartCap = d : f.customEndCap = d, l += p;
    }
  if (l + 8 <= r) {
    const g = Mh(t, l, r - l, s, o);
    g && (f.color = g.color, f.brush = g);
  }
  return f;
}
function tM(t, e, n) {
  if (n < 20)
    return null;
  const s = e + n, o = No(t.getUint32(e, !0)), r = t.getUint32(e + (o ? 8 : 4), !0);
  let i = e + 20;
  const c = () => {
    const a = i + 4 <= s ? t.getUint32(i, !0) : 0;
    i += 4 + Math.min(a, es) * 4;
  };
  r & Th && (i += 24);
  for (const a of [Ih, Ph, Sh, Rh, si, Ah, Uh])
    r & a && (i += 4);
  r & kh && c(), r & Lh && (i += 4), r & Fh && c();
  for (const a of [oi, Dh])
    if (r & a) {
      const l = i + 4 <= s ? t.getUint32(i, !0) : 0;
      i += 4 + l;
    }
  return i + 8 <= s ? i : null;
}
function _h(t, e, n, s) {
  let o = null;
  const r = t.getUint32(e + 4, !0);
  if (r === 1 && n >= 28) {
    const i = t.getUint32(e + 24, !0);
    if (i === 0) {
      const c = t.getInt32(e + 8, !0), a = t.getInt32(e + 12, !0), l = t.getInt32(e + 16, !0), u = t.getUint32(e + 20, !0);
      X(
        `  Bitmap(Pixel): ${c}×${a}, stride=${l}, pixelFormat=0x${u.toString(16).padStart(8, "0")}`
      );
      const h = e + 28, f = Math.abs(l);
      if (c > 0 && a > 0 && c <= 8192 && a <= 8192 && h + f * a <= t.byteLength) {
        const g = $y(
          t,
          h,
          c,
          a,
          l,
          u
        );
        g && (X(`  Bitmap(Pixel): decoded successfully, size=${g.byteLength} bytes`), o = g);
      }
    } else if (i === 1) {
      const c = e + 28, a = n - 28;
      if (X(`  Bitmap(Compressed): imgLen=${a}, imgStart=0x${c.toString(16)}`), a > 0 && c + a <= t.byteLength && (o = t.buffer.slice(
        t.byteOffset + c,
        t.byteOffset + c + a
      ), o.byteLength >= 4)) {
        const l = new Uint8Array(o, 0, 4);
        X(
          `  Bitmap(Compressed): first 4 bytes = [${Array.from(l).map((u) => u.toString(16).padStart(2, "0")).join(" ")}]`
        );
      }
    }
  } else if (r === 2 && n >= 12) {
    t.getUint32(e + 8, !0);
    const i = t.getUint32(e + 12, !0), c = e + 16;
    i > 0 && c + i <= t.byteLength ? (o = t.buffer.slice(
      t.byteOffset + c,
      t.byteOffset + c + i
    ), o.byteLength >= 4 && new DataView(o).getUint32(0, !0)) : H(
      `  Metafile: out of bounds or empty (mfStart=0x${c.toString(16)}, mfDataSize=${i}, viewLen=${t.byteLength})`
    );
  }
  return { data: o, type: r };
}
function eM(t, e, n) {
  if (n < 28)
    return null;
  const s = t.getFloat32(e + 4, !0), o = t.getUint32(e + 8, !0), r = t.getInt32(e + 12, !0), i = t.getUint32(e + 20, !0);
  let c = "sans-serif";
  return i > 0 && e + 24 + i * 2 <= e + n && (c = hs(t, e + 24, i) || "sans-serif"), { kind: "plus-font", emSize: s || 12, flags: r, family: c, unit: o };
}
var nM = 64 * 1024 * 1024;
function Nh() {
  return {
    continuationBuffer: null,
    continuationObjectId: -1,
    continuationObjectType: 0,
    continuationTotalSize: 0,
    continuationOffset: 0,
    continuationKey: void 0
  };
}
function Bh(t) {
  t.continuationBuffer = null, t.continuationObjectId = -1, t.continuationObjectType = 0, t.continuationTotalSize = 0, t.continuationOffset = 0, t.continuationKey = void 0;
}
function sM(t, e, n, s) {
  const o = t.continuationBuffer;
  if (!o)
    return;
  let r = n, i = s;
  i >= 4 && e.getUint32(n, !0) === t.continuationTotalSize && (r += 4, i -= 4);
  const c = Math.max(0, Math.min(i, t.continuationTotalSize - t.continuationOffset));
  o.set(new Uint8Array(e.buffer, e.byteOffset + r, c), t.continuationOffset), t.continuationOffset += c;
}
function oM(t, e) {
  const n = t.continuationBuffer, s = n ? {
    view: new DataView(n.buffer, n.byteOffset, n.byteLength),
    flags: t.continuationObjectType << 8 | e,
    dataOff: 0,
    dataSize: t.continuationTotalSize,
    cacheKey: t.continuationKey ?? -1
  } : null;
  return Bh(t), s;
}
function Xh(t, e, n, s, o) {
  const r = (n & 32768) !== 0, i = n & 255, c = t.continuationBuffer !== null && i === t.continuationObjectId;
  if (!r && !c)
    return { view: e, flags: n, dataOff: s, dataSize: o, cacheKey: s };
  if (r && !c) {
    if (t.continuationBuffer !== null && H(`EMFPLUS_OBJECT continuation: object ${t.continuationObjectId} never completed, dropping it`), Bh(t), o < 4)
      return null;
    const a = e.getUint32(s, !0), l = e.byteLength - s;
    if (a <= 0 || a > nM || a > l)
      return null;
    t.continuationBuffer = new Uint8Array(a), t.continuationObjectId = i, t.continuationObjectType = n >> 8 & 127, t.continuationTotalSize = a, t.continuationOffset = 0, t.continuationKey = s;
  }
  return sM(t, e, s, o), !r || t.continuationOffset >= t.continuationTotalSize ? oM(t, i) : null;
}
function rM(t, e) {
  const n = t.flags >> 8 & 127;
  if (n !== Mu && n !== $r || t.dataSize < 8)
    return;
  const { view: s } = t, o = t.dataOff + t.dataSize;
  let r = t.dataOff;
  if (n === $r) {
    const u = tM(s, t.dataOff, t.dataSize);
    if (u === null)
      return;
    r = u;
  }
  const i = No(s.getUint32(r, !0)), c = r + (i ? 4 : 0);
  if (c + 8 > o || s.getUint32(c, !0) !== wu)
    return;
  const a = hm(s, c + 4, o);
  if (a === null)
    return;
  const l = um(s, a, o);
  l && e.push({ key: t.cacheKey, view: s, byteStart: l.start, byteEnd: l.end });
}
function iM(t, e, n, s, o) {
  const r = e + n;
  let i = e, c = 0;
  const a = 5e5;
  for (; i + 12 <= r && c < a; ) {
    const l = t.getUint16(i, !0), u = t.getUint16(i + 2, !0), h = t.getUint32(i + 4, !0), f = t.getUint32(i + 8, !0);
    if (h < 12 || i + h > r)
      break;
    if (c++, l === mu) {
      const g = Xh(s, t, u, i + 12, f);
      g && o(g);
    }
    i += h;
  }
}
function Yh(t, e) {
  const n = Nh();
  let s = 0;
  const o = t.byteLength;
  let r = 0;
  const i = 5e5;
  for (; s + 8 <= o && r < i; ) {
    const c = t.getUint32(s, !0), a = t.getUint32(s + 4, !0);
    if (a < 8 || s + a > o)
      break;
    if (r++, c === au && a >= 16) {
      const l = s + 8, u = t.getUint32(l, !0);
      t.getUint32(l + 4, !0) === yu && u > 4 && iM(t, l + 8, u - 4, n, e);
    } else if (c === Yl)
      break;
    s += a;
  }
}
function cM(t) {
  const e = [];
  return Yh(t, (n) => rM(n, e)), e;
}
async function zh(t, e, n) {
  const s = n - e;
  if (s <= 0)
    return null;
  const o = new Uint8Array(t.buffer, t.byteOffset + e, s), r = new ArrayBuffer(s);
  new Uint8Array(r).set(o);
  try {
    const i = await Lo(r);
    if (!i)
      return null;
    const { width: c, height: a } = i;
    if (c <= 0 || a <= 0 || c > 8192 || a > 8192)
      return i.close(), null;
    const l = W(c, a);
    if (!l)
      return i.close(), null;
    St(l.ctx, i.drawable, 0, 0, c, a), i.close();
    const u = V(l.ctx, 0, 0, c, a);
    return { width: c, height: a, rgba: new Uint8ClampedArray(u.data.buffer.slice(0)) };
  } catch (i) {
    return H(
      "preDecodeEmfPlusTextures: failed to decode a compressed texture image:",
      i instanceof Error ? i.message : i
    ), null;
  }
}
async function Oh(t) {
  const e = /* @__PURE__ */ new Map();
  let n;
  try {
    n = cM(t);
  } catch (s) {
    return H("preDecodeEmfPlusTextures: scan failed:", s instanceof Error ? s.message : s), e;
  }
  if (n.length === 0)
    return e;
  X(`preDecodeEmfPlusTextures: found ${n.length} compressed-texture candidate(s)`);
  for (const s of n) {
    const o = await zh(s.view, s.byteStart, s.byteEnd);
    o && (e.set(s.key, o), X(`preDecodeEmfPlusTextures: decoded texture for key=0x${s.key.toString(16)}: ${o.width}x${o.height}`));
  }
  return e;
}
var $h = 3;
async function Ch(t, e = 0) {
  const n = /* @__PURE__ */ new Map(), s = [];
  try {
    Yh(t, (o) => {
      if ((o.flags >> 8 & 127) !== bu || o.dataSize < 8)
        return;
      const i = _h(o.view, o.dataOff, o.dataSize, o.flags & 255);
      i.data && i.data.byteLength > 0 && s.push({ key: o.cacheKey, type: i.type, data: i.data });
    });
  } catch (o) {
    return H("preDecodeEmfPlusImages: scan failed:", o instanceof Error ? o.message : o), n;
  }
  for (const o of s) {
    const r = new DataView(o.data, 0, o.data.byteLength);
    if (o.type === 2) {
      if (e >= $h)
        continue;
      n.set(o.key, { kind: "metafile", caches: await aM(r, e + 1) });
      continue;
    }
    const i = await zh(r, 0, o.data.byteLength);
    i && (n.set(o.key, { kind: "bitmap", ...i }), X(`preDecodeEmfPlusImages: decoded image key=0x${o.key.toString(16)}: ${i.width}x${i.height}`));
  }
  return n;
}
async function aM(t, e = 0) {
  return {
    textures: await Oh(t),
    images: await Ch(t, e)
  };
}
var lM = [
  0,
  8388608,
  32768,
  8421376,
  128,
  8388736,
  32896,
  12632256,
  12639424,
  10930928,
  16776176,
  10526884,
  8421504,
  16711680,
  65280,
  16776960,
  255,
  16711935,
  65535,
  16777215
];
function yn(t, e) {
  return t.getUint32(e, !0);
}
function to(t) {
  return t >>> 24 !== 0;
}
function Ye(t) {
  var e;
  return ((e = t.palette) == null ? void 0 : e.entries) ?? lM;
}
function Gi(t, e) {
  const n = t >>> 24;
  if (n & 16)
    return 0;
  if (n & 1) {
    const s = t & 65535;
    return e.length === 0 ? 0 : e[s < e.length ? s : 0];
  }
  return (t & 255) << 16 | t & 65280 | t >>> 16 & 255;
}
function Tt(t, e) {
  const n = Gi(e, Ye(t));
  return Ll(n >> 16 & 255, n >> 8 & 255, n & 255);
}
function uM(t, e, n) {
  return Tt(t, yn(e, n));
}
function wo(t, e, n) {
  const s = { ...t.colorRefs };
  n !== void 0 && to(n) ? s[e] = n : delete s[e], t.colorRefs = s;
}
function Hh(t) {
  const e = t.colorRefs;
  e && (e.pen !== void 0 && (t.penColor = Tt(t, e.pen)), e.brush !== void 0 && (t.brushColor = Tt(t, e.brush)), e.text !== void 0 && (t.textColor = Tt(t, e.text)), e.bk !== void 0 && (t.bkColor = Tt(t, e.bk)));
}
function Sa(t, e, n) {
  const s = [];
  for (let o = 0; o < n && e + o * 4 + 4 <= t.byteLength; o++) {
    const r = e + o * 4;
    s.push(t.getUint8(r) << 16 | t.getUint8(r + 1) << 8 | t.getUint8(r + 2));
  }
  return s;
}
function mr(t, e) {
  const n = t.objectTable.get(e);
  return n && n.kind === "palette" ? n : null;
}
function Ra(t, e) {
  t.state.palette === e && Hh(t.state);
}
function hM(t, e, n, s) {
  const { view: o, state: r } = t;
  switch (e) {
    case q1: {
      if (s >= 16) {
        const i = o.getUint32(n, !0), c = o.getUint16(n + 6, !0);
        t.objectTable.set(i, { kind: "palette", entries: Sa(o, n + 8, Math.min(c, (s - 16) / 4)) });
      }
      return !0;
    }
    case V1: {
      if (s >= 12) {
        const i = o.getUint32(n, !0);
        if (i === (us | L2) >>> 0)
          r.palette = null;
        else {
          const c = mr(t, i);
          if (!c)
            return !0;
          r.palette = c;
        }
        Hh(r);
      }
      return !0;
    }
    case J1: {
      if (s >= 20) {
        const i = mr(t, o.getUint32(n, !0)), c = o.getUint32(n + 4, !0), a = o.getUint32(n + 8, !0);
        if (i) {
          const l = Sa(o, n + 12, Math.min(a, (s - 20) / 4));
          for (let u = 0; u < l.length && c + u < i.entries.length; u++)
            i.entries[c + u] = l[u];
          Ra(t, i);
        }
      }
      return !0;
    }
    case K1: {
      if (s >= 16) {
        const i = mr(t, o.getUint32(n, !0)), c = Math.min(o.getUint32(n + 4, !0), 1024);
        if (i) {
          for (i.entries.length = Math.min(i.entries.length, c); i.entries.length < c; )
            i.entries.push(0);
          Ra(t, i);
        }
      }
      return !0;
    }
    case Z1:
      return !0;
    default:
      return !1;
  }
}
function ft(t, e) {
  const n = t.state.worldTransform, s = n[0] * e + n[4];
  return t.useMappingMode ? (s - t.windowOrg.x) / (t.windowExt.cx || 1) * (t.viewportExt.cx || 1) + t.viewportOrg.x : (s - t.bounds.left) * t.sx;
}
function gt(t, e) {
  const n = t.state.worldTransform, s = n[3] * e + n[5];
  return t.useMappingMode ? (s - t.windowOrg.y) / (t.windowExt.cy || 1) * (t.viewportExt.cy || 1) + t.viewportOrg.y : (s - t.bounds.top) * t.sy;
}
function _t(t, e) {
  const n = t.state.worldTransform[0] * e;
  return t.useMappingMode ? n / (t.windowExt.cx || 1) * (t.viewportExt.cx || 1) : n * t.sx;
}
function Nt(t, e) {
  const n = t.state.worldTransform[3] * e;
  return t.useMappingMode ? n / (t.windowExt.cy || 1) * (t.viewportExt.cy || 1) : n * t.sy;
}
function Ae(t) {
  t.useMappingMode = !0;
}
function Bt(t) {
  const e = t.state.worldTransform;
  return e[1] !== 0 || e[2] !== 0;
}
function rt(t) {
  const e = t.state.worldTransform;
  if (t.useMappingMode) {
    const o = (t.viewportExt.cx || 1) / (t.windowExt.cx || 1), r = (t.viewportExt.cy || 1) / (t.windowExt.cy || 1);
    return [
      e[0] * o,
      e[1] * r,
      e[2] * o,
      e[3] * r,
      (e[4] - t.windowOrg.x) * o + t.viewportOrg.x,
      (e[5] - t.windowOrg.y) * r + t.viewportOrg.y
    ];
  }
  const n = t.sx || 1, s = t.sy || 1;
  return [e[0] * n, e[1] * s, e[2] * n, e[3] * s, (e[4] - t.bounds.left) * n, (e[5] - t.bounds.top) * s];
}
function Z(t, e, n) {
  const s = rt(t);
  return { x: s[0] * e + s[2] * n + s[4], y: s[1] * e + s[3] * n + s[5] };
}
function ji(t, e, n, s, o) {
  const r = rt(t), i = Z(t, e, n), c = r[0] * s, a = r[2] * o, l = r[1] * s, u = r[3] * o, h = c * c + a * a, f = c * l + a * u, g = l * l + u * u, p = (h + g) / 2, d = Math.sqrt(Math.max(0, ((h - g) / 2) ** 2 + f * f)), y = Math.max(0, p + d), m = Math.max(0, p - d), M = 0.5 * Math.atan2(2 * f, h - g);
  return {
    cx: i.x,
    cy: i.y,
    rx: Math.sqrt(y),
    ry: Math.sqrt(m),
    rotation: M
  };
}
function fM(t, e) {
  for (const n of e)
    switch (n.op) {
      case "moveTo":
        t.moveTo(n.x, n.y);
        break;
      case "lineTo":
        t.lineTo(n.x, n.y);
        break;
      case "rect":
        t.rect(n.x, n.y, n.w, n.h);
        break;
      case "bezierCurveTo":
        t.bezierCurveTo(n.cp1x, n.cp1y, n.cp2x, n.cp2y, n.x, n.y);
        break;
      case "arcTo":
        t.arcTo(n.x1, n.y1, n.x2, n.y2, n.radius);
        break;
      case "ellipse":
        t.ellipse(n.cx, n.cy, n.rx, n.ry, n.rotation, n.startAngle, n.endAngle, n.ccw);
        break;
      case "closePath":
        t.closePath();
        break;
    }
}
function Ht(t) {
  const { ctx: e, pathCmds: n } = t;
  return new Proxy(e, {
    get(s, o, r) {
      switch (o) {
        case "moveTo":
          return (i, c) => (n.push({ op: "moveTo", x: i, y: c }), s.moveTo(i, c));
        case "lineTo":
          return (i, c) => (n.push({ op: "lineTo", x: i, y: c }), s.lineTo(i, c));
        case "rect":
          return (i, c, a, l) => (n.push({ op: "rect", x: i, y: c, w: a, h: l }), s.rect(i, c, a, l));
        case "bezierCurveTo":
          return (i, c, a, l, u, h) => (n.push({ op: "bezierCurveTo", cp1x: i, cp1y: c, cp2x: a, cp2y: l, x: u, y: h }), s.bezierCurveTo(i, c, a, l, u, h));
        case "arcTo":
          return (i, c, a, l, u) => (n.push({ op: "arcTo", x1: i, y1: c, x2: a, y2: l, radius: u }), s.arcTo(i, c, a, l, u));
        case "ellipse":
          return (i, c, a, l, u, h, f, g) => (n.push({ op: "ellipse", cx: i, cy: c, rx: a, ry: l, rotation: u, startAngle: h, endAngle: f, ccw: !!g }), s.ellipse(i, c, a, l, u, h, f, g));
        case "closePath":
          return () => (n.push({ op: "closePath" }), s.closePath());
        default: {
          const i = Reflect.get(s, o, r);
          return typeof i == "function" ? i.bind(s) : i;
        }
      }
    }
  });
}
function Gh(t) {
  return t >>> 16 & 255;
}
function Me(t) {
  const e = t & 255;
  return {
    usesP: (e >> 4 & 15) !== (e & 15),
    usesS: (e >> 2 & 51) !== (e & 51),
    usesD: (e >> 1 & 85) !== (e & 85)
  };
}
function mt(t, e, n, s, o = 16777215) {
  let r = 0;
  const i = ~e, c = ~n, a = ~s;
  for (let l = 0; l < 8; l++)
    t & 1 << l && (r |= (l & 4 ? e : i) & (l & 2 ? n : c) & (l & 1 ? s : a));
  return r & o;
}
function jh(t) {
  const e = Gh(t);
  switch (e) {
    case 204:
      return { kind: "copy" };
    case 0:
      return { kind: "solid", color: "black" };
    case 255:
      return { kind: "solid", color: "white" };
    case 170:
      return { kind: "noop" };
    case 85:
      return { kind: "invert-dest" };
    default:
      return { kind: "ternary", index: e, operands: Me(e) };
  }
}
function gM(t, e, n, s, o, r) {
  const i = t.data, c = e ? e.data : null, a = t.width, l = t.height, u = typeof n == "number" ? n : 0, h = typeof n == "function" ? n : null;
  for (let f = 0; f < l; f++)
    for (let g = 0; g < a; g++) {
      const p = (f * a + g) * 4, d = i[p] << 16 | i[p + 1] << 8 | i[p + 2], y = c ? c[p] << 16 | c[p + 1] << 8 | c[p + 2] : 0, m = h ? h(o + g, r + f) : u, M = mt(s, m, y, d);
      i[p] = M >> 16 & 255, i[p + 1] = M >> 8 & 255, i[p + 2] = M & 255, i[p + 3] = 255;
    }
}
function pM(t, e, n, s, o, r) {
  let i = n < 0 ? t + n : t, c = s < 0 ? e + s : e, a = Math.abs(n), l = Math.abs(s);
  i = Math.round(i), c = Math.round(c), a = Math.round(a), l = Math.round(l);
  const u = Math.min(i + a, Math.round(o)), h = Math.min(c + l, Math.round(r));
  return i = Math.max(i, 0), c = Math.max(c, 0), a = u - i, l = h - c, a <= 0 || l <= 0 ? null : { x: i, y: c, w: a, h: l };
}
var en = [1, 0, 0, 1, 0, 0];
function Mr(t, e) {
  return [
    t[0] * e[0] + t[2] * e[1],
    t[1] * e[0] + t[3] * e[1],
    t[0] * e[2] + t[2] * e[3],
    t[1] * e[2] + t[3] * e[3],
    t[0] * e[4] + t[2] * e[5] + t[4],
    t[1] * e[4] + t[3] * e[5] + t[5]
  ];
}
function Aa(t) {
  const e = t[0] * t[3] - t[1] * t[2];
  return !e || !Number.isFinite(e) ? null : [
    t[3] / e,
    -t[1] / e,
    -t[2] / e,
    t[0] / e,
    (t[2] * t[5] - t[3] * t[4]) / e,
    (t[1] * t[4] - t[0] * t[5]) / e
  ];
}
function Vt(t) {
  return t[0] === 1 && t[1] === 0 && t[2] === 0 && t[3] === 1 && t[4] === 0 && t[5] === 0;
}
function Y(t) {
  if (!Number.isFinite(t))
    return "0";
  const e = Math.round(t * 1e3) / 1e3;
  return Object.is(e, -0) ? "0" : String(e);
}
function de(t) {
  return `matrix(${t.map(Y).join(" ")})`;
}
function br(t) {
  return Math.max(0, Math.min(255, Math.round(t))).toString(16).padStart(2, "0");
}
function Ua(t) {
  const e = t.trim();
  if (e === "transparent")
    return { color: "#000000", alpha: 0 };
  const n = /^rgba?\(([^)]*)\)$/i.exec(e);
  if (n) {
    const o = n[1].split(/[\s,/]+/).filter(Boolean), r = (c) => c === void 0 ? 0 : c.endsWith("%") ? parseFloat(c) * 255 / 100 : parseFloat(c), i = o.length > 3 ? o[3].endsWith("%") ? parseFloat(o[3]) / 100 : parseFloat(o[3]) : 1;
    return {
      color: `#${br(r(o[0]))}${br(r(o[1]))}${br(r(o[2]))}`,
      alpha: Number.isFinite(i) ? Math.max(0, Math.min(1, i)) : 1
    };
  }
  const s = /^#([0-9a-f]{6})([0-9a-f]{2})$/i.exec(e);
  return s ? { color: `#${s[1].toLowerCase()}`, alpha: parseInt(s[2], 16) / 255 } : { color: e.toLowerCase(), alpha: 1 };
}
function ri(t) {
  const e = t, n = typeof e.naturalWidth == "number" && e.naturalWidth > 0 ? e.naturalWidth : e.width, s = typeof e.naturalHeight == "number" && e.naturalHeight > 0 ? e.naturalHeight : e.height;
  return typeof n == "number" && typeof s == "number" && n > 0 && s > 0 ? { w: n, h: s } : null;
}
function wr(t) {
  if (t instanceof ii)
    return t.payload;
  if (t instanceof ce)
    return { kind: "rgba", data: t.pixels, width: t.width, height: t.height };
  const e = ri(t);
  if (!e)
    return null;
  const n = t;
  if (n.data instanceof Uint8ClampedArray)
    return { kind: "rgba", data: n.data.slice(), width: e.w, height: e.h };
  try {
    if (typeof n.getContext == "function") {
      const o = n.getContext("2d");
      if (o && typeof o.getImageData == "function")
        return { kind: "rgba", data: V(o, 0, 0, e.w, e.h).data.slice(), width: e.w, height: e.h };
    }
    const s = W(e.w, e.h);
    if (s && !Qe(s.canvas))
      return St(s.ctx, t, 0, 0, e.w, e.h), { kind: "rgba", data: V(s.ctx, 0, 0, e.w, e.h).data.slice(), width: e.w, height: e.h };
  } catch {
  }
  return null;
}
function dM(t, e, n, s, o) {
  if (t.kind !== "rgba")
    return t;
  const r = Math.max(0, Math.floor(Math.min(e, e + s))), i = Math.max(0, Math.floor(Math.min(n, n + o))), c = Math.min(t.width, Math.ceil(Math.max(e, e + s))), a = Math.min(t.height, Math.ceil(Math.max(n, n + o))), l = c - r, u = a - i;
  if (l <= 0 || u <= 0)
    return null;
  if (r === 0 && i === 0 && l === t.width && u === t.height)
    return t;
  const h = new Uint8ClampedArray(l * u * 4);
  for (let f = 0; f < u; f++)
    h.set(t.data.subarray(((i + f) * t.width + r) * 4, ((i + f) * t.width + r + l) * 4), f * l * 4);
  return { kind: "rgba", data: h, width: l, height: u };
}
var ii = class {
  constructor(t, e, n) {
    this.payload = t, this.width = e, this.height = n;
  }
}, Wh = 0, On = class {
  constructor(t, e, n) {
    this.type = t, this.coords = e, this.real = n, this.uid = ++Wh, this.stops = [];
  }
  addColorStop(t, e) {
    var n;
    if (!(t >= 0 && t <= 1))
      throw new RangeError("Gradient stop offset out of range");
    this.stops.push({ offset: t, color: e }), (n = this.real) == null || n.addColorStop(t, e);
  }
}, Ys = class {
  constructor(t, e, n, s, o, r) {
    this.payload = t, this.width = e, this.height = n, this.repetition = s, this.real = o, this.pixelated = r, this.uid = ++Wh, this.matrix = [...en];
  }
  setTransform(t) {
    var e;
    this.matrix = [(t == null ? void 0 : t.a) ?? 1, (t == null ? void 0 : t.b) ?? 0, (t == null ? void 0 : t.c) ?? 0, (t == null ? void 0 : t.d) ?? 1, (t == null ? void 0 : t.e) ?? 0, (t == null ? void 0 : t.f) ?? 0];
    try {
      (e = this.real) == null || e.setTransform(t);
    } catch {
    }
  }
};
function xr(t, e, n = 2) {
  const s = 10 ** n;
  let o = "", r = "", i = "", c = 0, a = 0, l = 0, u = 0;
  const h = (p, d) => {
    const y = e ? e[0] * p + e[2] * d + e[4] : p, m = e ? e[1] * p + e[3] * d + e[5] : d;
    return [Math.round(y * s), Math.round(m * s)];
  }, f = (p) => {
    let d = (p / s).toFixed(n);
    d.includes(".") && (d = d.replace(/0+$/, "").replace(/\.$/, "")), d = d.replace(/^(-?)0\./, "$1."), d === "-0" && (d = "0"), i && !(d[0] === "-" || d[0] === "." && i.includes(".")) && (o += " "), o += d, i = d;
  }, g = (p) => {
    (p !== r || p === "m") && (o += p, r = p, i = "");
  };
  for (const p of t)
    switch (p.t) {
      case "M": {
        const [d, y] = h(p.x, p.y);
        o === "" ? (o += "M", i = "", f(d), f(y), r = "M") : (g("m"), f(d - c), f(y - a), r = "l"), c = l = d, a = u = y;
        break;
      }
      case "L": {
        const [d, y] = h(p.x, p.y);
        g("l"), f(d - c), f(y - a), c = d, a = y;
        break;
      }
      case "C": {
        const [d, y] = h(p.x1, p.y1), [m, M] = h(p.x2, p.y2), [b, w] = h(p.x, p.y);
        g("c"), f(d - c), f(y - a), f(m - c), f(M - a), f(b - c), f(w - a), c = b, a = w;
        break;
      }
      case "Z":
        o += "z", r = "z", i = "", c = l, a = u;
        break;
    }
  return o;
}
function yM(t) {
  const e = Math.sqrt(Math.abs(t[0] * t[3] - t[1] * t[2])) || 1;
  return Math.max(2, Math.min(8, Math.ceil(2 + Math.log10(e))));
}
var Er = /* @__PURE__ */ new Set([
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity"
]), Wi = class {
  constructor(t, e, n = {}) {
    this.nextId = 0, this.stack = [], this.pb = new Gr(), this.defs = [], this.defKeys = /* @__PURE__ */ new Map(), this.body = [], this.group = null, this.images = [], this.canvas = { width: t, height: e, svgContext: this }, this.shadow = n.shadow ?? null, this.imageResampling = n.imageResampling ?? "renderer", this.idPrefix = n.idPrefix ?? "emf-", this.state = {
      transform: [...en],
      fillStyle: "#000000",
      strokeStyle: "#000000",
      lineWidth: 1,
      lineDash: [],
      lineDashOffset: 0,
      lineCap: "butt",
      lineJoin: "miter",
      miterLimit: 10,
      globalAlpha: 1,
      gco: "source-over",
      font: "10px sans-serif",
      textAlign: "start",
      textBaseline: "alphabetic",
      imageSmoothingEnabled: !0,
      clipId: null
    };
  }
  /** True when `getImageData` returns the real destination (a shadow canvas exists). */
  get canReadPixels() {
    return this.shadow !== null;
  }
  /** The shadow when it is the pure-JavaScript rasteriser (`software-raster.ts`). */
  get softShadow() {
    return this.shadow instanceof Uo ? this.shadow : null;
  }
  /** True when the shadow can draw (or make a pattern from) `image` directly. */
  shadowAccepts(t) {
    return t instanceof ii ? !1 : this.softShadow !== null || !Qe(t);
  }
  /**
   * Flags (1 = unknown) for the device rectangle's pixels whose true value
   * the shadow does not know, or `null` when it knows them all. Only the
   * pure-JavaScript shadow has unknown pixels: it cannot rasterise glyphs,
   * so text (and deferred EMF+ images) leave their area unknown until
   * something opaque is painted over it (see `software-raster.ts`).
   */
  unknownPixels(t, e, n, s) {
    const o = this.softShadow;
    return o ? o.canvas.unknownIn(t, e, n, s) : null;
  }
  /**
   * Composites a device-space RGBA patch (straight alpha, `w` x `h` at
   * `x`, `y`, identity transform) with a blend mode, as an `<image>` with
   * `mix-blend-mode`, so the SVG renderer blends it with whatever is
   * really underneath (glyphs included). The active clip is applied to the
   * patch's own pixels, from the shadow's clip coverage, and the patch is
   * emitted OUTSIDE any clip group: a `clip-path` group may be rendered as
   * an isolated layer, which would blend the patch with nothing. The
   * shadow receives the same draw.
   */
  blendPatch(t, e, n, s, o, r) {
    const i = this.softShadow, c = t.slice();
    if (i) {
      const l = i.clipCoverage(e, n, s, o);
      if (l)
        for (let u = 0; u < s * o; u++)
          c[u * 4 + 3] = c[u * 4 + 3] * l[u] / 255;
      i.save(), i.setTransform(1, 0, 0, 1, 0, 0), i.globalAlpha = 1, i.globalCompositeOperation = r, i.imageSmoothingEnabled = !1, i.drawImage({ data: t, width: s, height: o }, e, n), i.restore();
    }
    const a = this.imageNode({ kind: "rgba", data: c, width: s, height: o }, e, n, s, o, !0);
    Er.has(r) && (a.attrs.style = `${a.attrs.style};mix-blend-mode:${r}`), this.body.push(a), this.group = null;
  }
  id(t) {
    return `${this.idPrefix}${t}${this.nextId++}`;
  }
  // ---- state properties --------------------------------------------------
  get fillStyle() {
    return this.state.fillStyle;
  }
  set fillStyle(t) {
    (typeof t == "string" || t instanceof On || t instanceof Ys) && (this.state.fillStyle = t, this.forwardPaint("fillStyle", t));
  }
  get strokeStyle() {
    return this.state.strokeStyle;
  }
  set strokeStyle(t) {
    (typeof t == "string" || t instanceof On || t instanceof Ys) && (this.state.strokeStyle = t, this.forwardPaint("strokeStyle", t));
  }
  forwardPaint(t, e) {
    if (!this.shadow)
      return;
    const n = typeof e == "string" ? e : e.real;
    n && (this.shadow[t] = n);
  }
  get lineWidth() {
    return this.state.lineWidth;
  }
  set lineWidth(t) {
    Number.isFinite(t) && t > 0 && (this.state.lineWidth = t, this.shadow && (this.shadow.lineWidth = t));
  }
  get lineCap() {
    return this.state.lineCap;
  }
  set lineCap(t) {
    this.state.lineCap = t, this.shadow && (this.shadow.lineCap = t);
  }
  get lineJoin() {
    return this.state.lineJoin;
  }
  set lineJoin(t) {
    this.state.lineJoin = t, this.shadow && (this.shadow.lineJoin = t);
  }
  get miterLimit() {
    return this.state.miterLimit;
  }
  set miterLimit(t) {
    Number.isFinite(t) && t > 0 && (this.state.miterLimit = t, this.shadow && (this.shadow.miterLimit = t));
  }
  get lineDashOffset() {
    return this.state.lineDashOffset;
  }
  set lineDashOffset(t) {
    Number.isFinite(t) && (this.state.lineDashOffset = t, this.shadow && (this.shadow.lineDashOffset = t));
  }
  get globalAlpha() {
    return this.state.globalAlpha;
  }
  set globalAlpha(t) {
    Number.isFinite(t) && t >= 0 && t <= 1 && (this.state.globalAlpha = t, this.shadow && (this.shadow.globalAlpha = t));
  }
  get globalCompositeOperation() {
    return this.state.gco;
  }
  set globalCompositeOperation(t) {
    this.state.gco = t, this.shadow && (this.shadow.globalCompositeOperation = t);
  }
  get font() {
    return this.state.font;
  }
  set font(t) {
    this.state.font = t, this.shadow && (this.shadow.font = t);
  }
  get textAlign() {
    return this.state.textAlign;
  }
  set textAlign(t) {
    this.state.textAlign = t, this.shadow && (this.shadow.textAlign = t);
  }
  get textBaseline() {
    return this.state.textBaseline;
  }
  set textBaseline(t) {
    this.state.textBaseline = t, this.shadow && (this.shadow.textBaseline = t);
  }
  get imageSmoothingEnabled() {
    return this.state.imageSmoothingEnabled;
  }
  set imageSmoothingEnabled(t) {
    this.state.imageSmoothingEnabled = t, this.shadow && (this.shadow.imageSmoothingEnabled = t);
  }
  setLineDash(t) {
    var e;
    !Array.isArray(t) || t.some((n) => !Number.isFinite(n) || n < 0) || (this.state.lineDash = t.length % 2 ? [...t, ...t] : [...t], (e = this.shadow) == null || e.setLineDash(t));
  }
  getLineDash() {
    return [...this.state.lineDash];
  }
  // ---- state stack & transforms -----------------------------------------
  save() {
    var t;
    this.stack.push({
      ...this.state,
      transform: [...this.state.transform],
      lineDash: [...this.state.lineDash]
    }), (t = this.shadow) == null || t.save();
  }
  restore() {
    var e;
    const t = this.stack.pop();
    t && (this.state = t), (e = this.shadow) == null || e.restore();
  }
  getTransform() {
    const [t, e, n, s, o, r] = this.state.transform;
    return { a: t, b: e, c: n, d: s, e: o, f: r };
  }
  setTransform(t, e, n, s, o, r) {
    var i;
    [t, e, n, s, o, r].every(Number.isFinite) && (this.state.transform = [t, e, n, s, o, r]), (i = this.shadow) == null || i.setTransform(t, e, n, s, o, r);
  }
  resetTransform() {
    this.setTransform(1, 0, 0, 1, 0, 0);
  }
  transform(t, e, n, s, o, r) {
    var i;
    [t, e, n, s, o, r].every(Number.isFinite) && (this.state.transform = Mr(this.state.transform, [t, e, n, s, o, r])), (i = this.shadow) == null || i.transform(t, e, n, s, o, r);
  }
  translate(t, e) {
    this.transform(1, 0, 0, 1, t, e);
  }
  scale(t, e) {
    this.transform(t, 0, 0, e, 0, 0);
  }
  rotate(t) {
    const e = Math.cos(t), n = Math.sin(t);
    this.transform(e, n, -n, e, 0, 0);
  }
  // ---- path construction -----------------------------------------------
  get path() {
    return this.pb.segs;
  }
  map(t, e) {
    const n = this.state.transform;
    return { x: n[0] * t + n[2] * e + n[4], y: n[1] * t + n[3] * e + n[5] };
  }
  beginPath() {
    var t;
    this.pb.reset(), (t = this.shadow) == null || t.beginPath();
  }
  moveTo(t, e) {
    var n;
    this.pb.moveTo(this.state.transform, t, e), (n = this.shadow) == null || n.moveTo(t, e);
  }
  lineTo(t, e) {
    var n;
    this.pb.lineTo(this.state.transform, t, e), (n = this.shadow) == null || n.lineTo(t, e);
  }
  bezierCurveTo(t, e, n, s, o, r) {
    var i;
    this.pb.bezierCurveTo(this.state.transform, t, e, n, s, o, r), (i = this.shadow) == null || i.bezierCurveTo(t, e, n, s, o, r);
  }
  quadraticCurveTo(t, e, n, s) {
    var o;
    this.pb.quadraticCurveTo(this.state.transform, t, e, n, s), (o = this.shadow) == null || o.quadraticCurveTo(t, e, n, s);
  }
  closePath() {
    var t;
    this.pb.closePath(), (t = this.shadow) == null || t.closePath();
  }
  rect(t, e, n, s) {
    var o;
    this.pb.rect(this.state.transform, t, e, n, s), (o = this.shadow) == null || o.rect(t, e, n, s);
  }
  ellipse(t, e, n, s, o, r, i, c = !1) {
    var a;
    this.pb.ellipse(this.state.transform, t, e, n, s, o, r, i, c), (a = this.shadow) == null || a.ellipse(t, e, n, s, o, r, i, c);
  }
  arc(t, e, n, s, o, r = !1) {
    var i;
    this.pb.arc(this.state.transform, t, e, n, s, o, r), (i = this.shadow) == null || i.arc(t, e, n, s, o, r);
  }
  arcTo(t, e, n, s, o) {
    var r;
    (r = this.shadow) == null || r.arcTo(t, e, n, s, o), this.pb.arcTo(this.state.transform, t, e, n, s, o);
  }
  isPointInPath(t, e, n = "nonzero") {
    return this.shadow && typeof this.shadow.isPointInPath == "function" ? this.shadow.isPointInPath(t, e, n) : Fu(qs(this.path, 0.05), t, e, n);
  }
  // ---- emission --------------------------------------------------------
  /** Appends a drawn element to the body, inside a group for the active clip. */
  emit(t) {
    const e = this.state.clipId;
    if (!e) {
      this.body.push(t), this.group = null;
      return;
    }
    (!this.group || this.group.clipId !== e || this.body[this.body.length - 1] !== this.group.node) && (this.group = { node: { tag: "g", attrs: { "clip-path": `url(#${e})` }, children: [] }, clipId: e }, this.body.push(this.group.node)), this.group.node.children.push(t);
  }
  blendStyle(t) {
    Er.has(this.state.gco) && (t.style = `mix-blend-mode:${this.state.gco}`);
  }
  define(t, e, n) {
    const s = this.defKeys.get(t);
    if (s)
      return s;
    const o = this.id(e);
    return this.defKeys.set(t, o), this.defs.push(n(o)), o;
  }
  /** Resolves a paint to an SVG paint + opacity, in the user space `space`. */
  resolvePaint(t, e) {
    const n = this.state.globalAlpha;
    if (typeof t == "string") {
      const r = Ua(t), i = r.alpha * n;
      return i <= 0 ? null : { value: r.color, opacity: i };
    }
    if (n <= 0)
      return null;
    if (t instanceof On) {
      if (t.stops.length === 0)
        return null;
      const r = `g${t.uid}:${t.stops.length}:${e.join(",")}`;
      return { value: `url(#${this.define(r, "g", (c) => this.gradientNode(t, c, e))})`, opacity: n };
    }
    const s = `p${t.uid}:${t.matrix.join(",")}:${e.join(",")}`;
    return { value: `url(#${this.define(s, "p", (r) => this.patternNode(t, r, e))})`, opacity: n };
  }
  gradientNode(t, e, n) {
    const s = t.coords, o = t.type === "linear" ? { id: e, gradientUnits: "userSpaceOnUse", x1: Y(s[0]), y1: Y(s[1]), x2: Y(s[2]), y2: Y(s[3]) } : {
      id: e,
      gradientUnits: "userSpaceOnUse",
      fx: Y(s[0]),
      fy: Y(s[1]),
      fr: Y(s[2]),
      cx: Y(s[3]),
      cy: Y(s[4]),
      r: Y(s[5])
    };
    Vt(n) || (o.gradientTransform = de(n));
    const r = [...t.stops].map((a, l) => ({ ...a, i: l })).sort((a, l) => a.offset - l.offset || a.i - l.i), i = r.map((a) => a.offset);
    if (t.type === "linear") {
      const a = n[0] * (s[2] - s[0]) + n[2] * (s[3] - s[1]), l = n[1] * (s[2] - s[0]) + n[3] * (s[3] - s[1]), u = n[0] * s[0] + n[2] * s[1] + n[4], h = n[1] * s[0] + n[3] * s[1] + n[5], f = Math.hypot(a, l), g = f > 0 && Math.abs(l) < 1e-9 * f, p = f > 0 && Math.abs(a) < 1e-9 * f;
      if (g || p) {
        const d = g ? u : h, y = g ? a : l;
        for (let m = 1; m < r.length; m++) {
          const M = r[m].offset;
          if (Math.abs(M - r[m - 1].offset) > 1e-9 || M <= 0 || M >= 1)
            continue;
          const b = d + M * y, w = Math.round(b - 0.5) + 0.5, x = b - w;
          if (Math.abs(x) >= 0.1)
            continue;
          const E = y > 0 ? x >= 0 : x < 0, T = (w + (E === y > 0 ? 0.25 : -0.25) - d) / y, v = m >= 2 ? i[m - 2] : 0, I = m + 1 < r.length ? r[m + 1].offset : 1, P = Math.min(Math.max(T, v), I);
          i[m - 1] = P, i[m] = P;
        }
      }
    }
    const c = r.map((a, l) => {
      const u = Ua(a.color), h = { offset: String(Math.round(i[l] * 1e6) / 1e6), "stop-color": u.color };
      return u.alpha < 1 && (h["stop-opacity"] = Y(u.alpha)), { tag: "stop", attrs: h };
    });
    return { tag: t.type === "linear" ? "linearGradient" : "radialGradient", attrs: o, children: c };
  }
  patternNode(t, e, n) {
    const s = Mr(n, t.matrix);
    let o = t.width, r = t.height;
    const i = Aa(s);
    if (i) {
      const { width: h, height: f } = this.canvas;
      for (const [g, p] of [
        [0, 0],
        [h, 0],
        [0, f],
        [h, f]
      ])
        o = Math.max(o, Math.abs(i[0] * g + i[2] * p + i[4])), r = Math.max(r, Math.abs(i[1] * g + i[3] * p + i[5]));
    }
    const c = t.repetition === "repeat" || t.repetition === "repeat-x" ? t.width : Math.ceil(2 * (o + t.width) + 1), a = t.repetition === "repeat" || t.repetition === "repeat-y" ? t.height : Math.ceil(2 * (r + t.height) + 1), l = {
      id: e,
      patternUnits: "userSpaceOnUse",
      width: Y(c),
      height: Y(a)
    };
    Vt(s) || (l.patternTransform = de(s));
    const u = this.imageNode(t.payload, 0, 0, t.width, t.height, t.pixelated);
    return { tag: "pattern", attrs: l, children: [u] };
  }
  imageNode(t, e, n, s, o, r) {
    const i = {
      x: Y(e),
      y: Y(n),
      width: Y(s),
      height: Y(o),
      preserveAspectRatio: "none"
    };
    r && (i["image-rendering"] = "optimizeSpeed", i.style = "image-rendering:pixelated");
    const c = { tag: "image", attrs: i };
    return this.images.push({ node: c, payload: t }), c;
  }
  fillPath(t, e) {
    if (t.length === 0)
      return;
    const n = this.resolvePaint(this.state.fillStyle, this.state.transform);
    if (!n)
      return;
    const s = { d: xr(t, null), fill: n.value };
    n.opacity < 1 && (s["fill-opacity"] = Y(n.opacity)), e === "evenodd" && (s["fill-rule"] = "evenodd"), this.blendStyle(s), this.emit({ tag: "path", attrs: s });
  }
  strokePath(t) {
    if (t.length === 0)
      return;
    const e = this.state.transform, n = Aa(e);
    if (!n)
      return;
    const s = this.resolvePaint(this.state.strokeStyle, en);
    if (!s)
      return;
    const o = this.state, r = {
      d: xr(t, Vt(e) ? null : n, Vt(e) ? 2 : yM(e)),
      fill: "none",
      stroke: s.value
    };
    s.opacity < 1 && (r["stroke-opacity"] = Y(s.opacity)), o.lineWidth !== 1 && (r["stroke-width"] = Y(o.lineWidth)), o.lineCap !== "butt" && (r["stroke-linecap"] = o.lineCap), o.lineJoin !== "miter" ? r["stroke-linejoin"] = o.lineJoin : r["stroke-miterlimit"] = Y(o.miterLimit), o.lineDash.length && (r["stroke-dasharray"] = o.lineDash.map(Y).join(" "), o.lineDashOffset && (r["stroke-dashoffset"] = Y(o.lineDashOffset))), Vt(e) || (r.transform = de(e)), this.blendStyle(r), this.emit({ tag: "path", attrs: r });
  }
  fill(t = "nonzero") {
    var e;
    this.fillPath(this.path, t), (e = this.shadow) == null || e.fill(t);
  }
  stroke() {
    var t;
    this.strokePath(this.path), (t = this.shadow) == null || t.stroke();
  }
  rectSegs(t, e, n, s) {
    const o = [this.map(t, e), this.map(t + n, e), this.map(t + n, e + s), this.map(t, e + s)];
    return [
      { t: "M", x: o[0].x, y: o[0].y },
      { t: "L", x: o[1].x, y: o[1].y },
      { t: "L", x: o[2].x, y: o[2].y },
      { t: "L", x: o[3].x, y: o[3].y },
      { t: "Z" }
    ];
  }
  fillRect(t, e, n, s) {
    var o;
    [t, e, n, s].every(Number.isFinite) && n !== 0 && s !== 0 && this.fillPath(this.rectSegs(t, e, n, s), "nonzero"), (o = this.shadow) == null || o.fillRect(t, e, n, s);
  }
  strokeRect(t, e, n, s) {
    var o;
    [t, e, n, s].every(Number.isFinite) && this.strokePath(this.rectSegs(t, e, n, s)), (o = this.shadow) == null || o.strokeRect(t, e, n, s);
  }
  clearRect(t, e, n, s) {
    var o;
    (o = this.shadow) == null || o.clearRect(t, e, n, s);
  }
  clip(t = "nonzero") {
    var r;
    const e = this.state.clipId, n = this.id("c"), s = { id: n };
    e && (s["clip-path"] = `url(#${e})`);
    const o = { d: xr(this.path, null) || "M0 0" };
    t === "evenodd" && (o["clip-rule"] = "evenodd"), this.defs.push({ tag: "clipPath", attrs: s, children: [{ tag: "path", attrs: o }] }), this.state.clipId = n, (r = this.shadow) == null || r.clip(t);
  }
  // ---- gradients & patterns -------------------------------------------
  createLinearGradient(t, e, n, s) {
    const o = this.shadow ? this.shadow.createLinearGradient(t, e, n, s) : null;
    return new On("linear", [t, e, n, s], o);
  }
  createRadialGradient(t, e, n, s, o, r) {
    const i = this.shadow ? this.shadow.createRadialGradient(t, e, n, s, o, r) : null;
    return new On("radial", [t, e, n, s, o, r], i);
  }
  createPattern(t, e) {
    const n = wr(t), s = ri(t);
    if (!n || !s)
      return null;
    let o = null;
    if (this.shadow && this.shadowAccepts(t))
      try {
        o = this.shadow.createPattern.call(
          this.shadow,
          t,
          e ?? "repeat"
        );
      } catch {
        o = null;
      }
    return new Ys(n, s.w, s.h, e || "repeat", o, !this.state.imageSmoothingEnabled);
  }
  /**
   * Fills the current path with a repeating tile whose texel (0,0) sits at
   * device (`originX`, `originY`) and each texel spans `cellW`×`cellH`
   * device pixels, rendered without filtering. This is how a GDI hatch/
   * mono/DIB pattern brush fill is expressed natively in SVG (where the
   * raster path instead writes every covered pixel).
   */
  fillWithTile(t, e, n, s, o, r) {
    const i = new Ys(
      { kind: "rgba", data: t.rgba, width: t.width, height: t.height },
      t.width,
      t.height,
      "repeat",
      null,
      !0
    );
    i.matrix = [s, 0, 0, o, e, n];
    const c = this.state.fillStyle, a = this.state.transform;
    if (this.state.fillStyle = i, this.state.transform = [...en], this.fillPath(this.path, r), this.state.fillStyle = c, this.state.transform = a, this.softShadow) {
      const l = new ce(t.width, t.height);
      l.ctx.putImageData({ data: t.rgba, width: t.width, height: t.height }, 0, 0);
      const u = this.softShadow.createPattern(l, "repeat");
      if (u) {
        u.setTransform({ a: s, b: 0, c: 0, d: o, e, f: n });
        const h = this.softShadow;
        h.save(), h.setTransform(1, 0, 0, 1, 0, 0), h.imageSmoothingEnabled = !1, h.fillStyle = u, h.fill(r), h.restore();
      }
    } else if (this.shadow) {
      const l = W(t.width, t.height);
      if (l && !Qe(l.canvas)) {
        Q(l.ctx, K(t.rgba, t.width, t.height), 0, 0);
        const u = this.shadow.createPattern.call(
          this.shadow,
          l.canvas,
          "repeat"
        );
        u && (u.setTransform({ a: s, b: 0, c: 0, d: o, e, f: n }), this.shadow.save(), this.shadow.setTransform(1, 0, 0, 1, 0, 0), this.shadow.fillStyle = u, this.shadow.fill(r), this.shadow.restore());
      }
    }
  }
  // ---- text ---------------------------------------------------------------
  measurer() {
    if (this.measureCtx === void 0) {
      const t = W(1, 1);
      this.measureCtx = t && !Qe(t.canvas) ? t.ctx : null;
    }
    return this.measureCtx;
  }
  measureText(t) {
    const e = this.shadow ?? this.measurer();
    if (e)
      return e.font = this.state.font, e.measureText(t);
    const n = co(this.state.font).size;
    return { width: Li(t, n) };
  }
  fillText(t, e, n, s) {
    var u;
    if ((u = this.shadow) == null || u.fillText(t, e, n, s), !t || ![e, n].every(Number.isFinite))
      return;
    const o = this.resolvePaint(this.state.fillStyle, en);
    if (!o)
      return;
    const r = co(this.state.font), i = { x: Y(e), y: Y(n) }, c = this.state.transform;
    Vt(c) || (i.transform = de(c)), i["font-family"] = r.family, i["font-size"] = Y(r.size), r.weight && (i["font-weight"] = r.weight), r.style && (i["font-style"] = r.style);
    const a = { center: "middle", right: "end", end: "end" }[this.state.textAlign];
    a && (i["text-anchor"] = a);
    const l = {
      top: "text-before-edge",
      hanging: "hanging",
      middle: "central",
      bottom: "text-after-edge",
      ideographic: "ideographic"
    }[this.state.textBaseline];
    l && (i["dominant-baseline"] = l), i.fill = o.value, o.opacity < 1 && (i["fill-opacity"] = Y(o.opacity)), s !== void 0 && Number.isFinite(s) && s > 0 && this.measureText(t).width > s && (i.textLength = Y(s), i.lengthAdjust = "spacingAndGlyphs"), /^\s|\s$|\s\s/.test(t) && (i["xml:space"] = "preserve"), this.blendStyle(i), this.emit({ tag: "text", attrs: i, text: t });
  }
  /**
   * Emits one GDI text run as a single `<text>` whose glyphs sit at the
   * exact per-glyph positions GDI would use (`x`/`y` lists, one entry per
   * UTF-16 code unit), in device space or, for a rotated run, in the run's
   * own frame under `matrix`. `fontSize` is the realised em height in
   * pixels; `scaleX` stretches it horizontally (LOGFONT `lfWidth`).
   * `aliased` asks the viewer for non-antialiased text rendering
   * (`text-rendering="optimizeSpeed"`), the closest SVG has to GDI's
   * NONANTIALIASED_QUALITY. Does not touch the shadow canvas (the caller
   * paints its exact raster there).
   */
  fillGlyphRun(t) {
    if (!t.text || t.xs.length === 0)
      return;
    const e = this.resolvePaint(t.fill, en);
    if (!e)
      return;
    const n = {
      x: t.xs.map(Y).join(" "),
      y: t.ys.every((o) => o === t.ys[0]) ? Y(t.ys[0]) : t.ys.map(Y).join(" ")
    };
    let s = t.matrix ? [...t.matrix] : null;
    if (t.scaleX && t.scaleX !== 1) {
      const o = [t.scaleX, 0, 0, 1, 0, 0];
      s = s ? Mr(s, o) : o, n.x = t.xs.map((r) => Y(r / t.scaleX)).join(" ");
    }
    s && !Vt(s) && (n.transform = de(s)), n["font-family"] = t.fontFamily, n["font-size"] = Y(t.fontSize), t.fontWeight && t.fontWeight !== 400 && (n["font-weight"] = String(t.fontWeight)), t.italic && (n["font-style"] = "italic"), t.aliased && (n["text-rendering"] = "optimizeSpeed"), n.fill = e.value, e.opacity < 1 && (n["fill-opacity"] = Y(e.opacity)), n["xml:space"] = "preserve", this.blendStyle(n), this.emit({ tag: "text", attrs: n, text: t.text });
  }
  // ---- images & pixels -------------------------------------------------
  drawImage(t, ...e) {
    if (this.softShadow) {
      const u = t instanceof ii ? t.payload.kind === "rgba" ? { data: t.payload.data, width: t.payload.width, height: t.payload.height } : null : t;
      u && this.softShadow.drawImage(u, ...e);
    } else if (this.shadow && this.shadowAccepts(t))
      try {
        this.shadow.drawImage.call(this.shadow, t, ...e);
      } catch {
      }
    else this.shadow && Qe(t) && this.mirrorSoftwareDraw(t, e);
    const n = ri(t);
    if (!n)
      return;
    let s, o, r, i, c;
    if (e.length >= 8) {
      const [u, h, f, g] = e;
      if ([, , , , o, r, i, c] = e, t instanceof ce) {
        const p = Math.max(0, Math.floor(Math.min(u, u + f))), d = Math.max(0, Math.floor(Math.min(h, h + g))), y = Math.min(t.width, Math.ceil(Math.max(u, u + f))), m = Math.min(t.height, Math.ceil(Math.max(h, h + g)));
        s = y > p && m > d ? { kind: "rgba", data: t.readRgba(p, d, y - p, m - d), width: y - p, height: m - d } : null;
      } else {
        const p = wr(t);
        s = p && dM(p, u, h, f, g);
      }
      if (!s)
        return;
    } else {
      if (s = wr(t), !s)
        return;
      e.length >= 4 ? [o, r, i, c] = e : ([o, r] = e, i = n.w, c = n.h);
    }
    if (![o, r, i, c].every(Number.isFinite) || i === 0 || c === 0 || this.state.globalAlpha <= 0)
      return;
    const a = this.imageNode(s, o, r, i, c, !this.state.imageSmoothingEnabled), l = this.state.transform;
    Vt(l) || (a.attrs.transform = de(l)), this.state.globalAlpha < 1 && (a.attrs.opacity = Y(this.state.globalAlpha)), Er.has(this.state.gco) && (a.attrs.style = `${a.attrs.style ? `${a.attrs.style};` : ""}mix-blend-mode:${this.state.gco}`), this.emit(a);
  }
  /** Copies a software-raster draw onto the shadow through a real scratch canvas. */
  mirrorSoftwareDraw(t, e) {
    const n = W(t.width, t.height);
    !n || Qe(n.canvas) || !this.shadow || (Q(n.ctx, K(t.pixels.slice(), t.width, t.height), 0, 0), this.shadow.drawImage.call(this.shadow, n.canvas, ...e));
  }
  getImageData(t, e, n, s) {
    return this.shadow ? V(this.shadow, t, e, n, s) : K(new Uint8ClampedArray(Math.max(0, n * s * 4)), n, s);
  }
  /**
   * Writes pixels (ignoring transform, clip and compositing, like Canvas),
   * emitting only the pixels that differ from what is already there.
   */
  putImageData(t, e, n) {
    const s = Math.round(e), o = Math.round(n), { width: r, height: i, data: c } = t, a = this.shadow ? V(this.shadow, s, o, r, i).data : null;
    let l = r, u = i, h = -1, f = -1;
    const g = new Uint8Array(r * i);
    for (let M = 0; M < i; M++) {
      const b = o + M;
      if (!(b < 0 || b >= this.canvas.height))
        for (let w = 0; w < r; w++) {
          const x = s + w;
          if (x < 0 || x >= this.canvas.width)
            continue;
          const E = (M * r + w) * 4;
          (a ? c[E] !== a[E] || c[E + 1] !== a[E + 1] || c[E + 2] !== a[E + 2] || c[E + 3] !== a[E + 3] : c[E + 3] !== 0) && (g[M * r + w] = 1, w < l && (l = w), w > h && (h = w), M < u && (u = M), M > f && (f = M));
        }
    }
    if (this.shadow && Q(this.shadow, t, s, o), h < 0)
      return;
    const p = h - l + 1, d = f - u + 1, y = new Uint8ClampedArray(p * d * 4);
    for (let M = 0; M < d; M++)
      for (let b = 0; b < p; b++) {
        const w = (u + M) * r + (l + b);
        if (!g[w])
          continue;
        const x = (M * p + b) * 4;
        y[x] = c[w * 4], y[x + 1] = c[w * 4 + 1], y[x + 2] = c[w * 4 + 2], y[x + 3] = c[w * 4 + 3];
      }
    const m = this.imageNode(
      { kind: "rgba", data: y, width: p, height: d },
      s + l,
      o + u,
      p,
      d,
      !0
    );
    this.body.push(m), this.group = null;
  }
  /**
   * Reserves a placeholder at the current paint position (and clip), for
   * an image whose content is only available after async decoding. Keeps
   * the image in its true z-order instead of painting it on top of
   * everything recorded after it. `deviceQuad` (flat `x, y` corners in
   * device space), when given, is where the image will land; the pure-
   * JavaScript shadow marks that area unknown.
   */
  reserveSlot(t) {
    const e = this.softShadow;
    e && t && t.length >= 6 && e.canvas.markUnknown(t, null);
    const n = { tag: "g", attrs: {}, children: [] };
    return this.emit(n), n;
  }
  /** Fills a slot from {@link reserveSlot} with an image under `transform`. */
  fillSlot(t, e, n, s, o, r, i) {
    const c = this.imageNode(e, s, o, r, i, !1);
    Vt(n) || (c.attrs.transform = de(n)), t.children.push(c);
  }
  /**
   * Fills a slot with the source rectangle (`sx`,`sy`,`sw`,`sh`, in image
   * pixels) of an image whose pixel coordinates `toDevice` maps to the
   * device: the image is laid out at its natural size in pixel space and
   * clipped to the source rectangle, so crops, rotation and shear are all
   * carried by one exact affine transform.
   */
  fillSlotCropped(t, e, n, s, o, r, i, c) {
    const a = this.imageNode(e, 0, 0, s.w, s.h, !1), l = o <= 0 && r <= 0 && o + i >= s.w && r + c >= s.h, u = { tag: "g", attrs: {}, children: [a] };
    if (Vt(n) || (u.attrs.transform = de(n)), !l) {
      const h = this.id("c");
      this.defs.push({
        tag: "clipPath",
        attrs: { id: h },
        children: [{ tag: "rect", attrs: { x: Y(o), y: Y(r), width: Y(i), height: Y(c) } }]
      }), a.attrs["clip-path"] = `url(#${h})`;
    }
    t.children.push(u);
  }
  // ---- finalisation ------------------------------------------------------
  /**
   * Encodes every pending raster payload and returns the finished `<svg>`
   * tree. Call once, after replay (and deferred images) are complete.
   */
  async toTree(t = {}) {
    const e = /* @__PURE__ */ new Map();
    for (const i of this.images) {
      let c = e.get(i.payload);
      c === void 0 && (c = await mM(i.payload), e.set(i.payload, c)), i.node.attrs.href = c;
    }
    const { width: n, height: s } = this.canvas, o = { xmlns: "http://www.w3.org/2000/svg" };
    (t.includeSize ?? !0) && (o.width = n, o.height = s), o.viewBox = `0 0 ${n} ${s}`, o.style = "isolation:isolate";
    const r = [];
    return this.defs.length && r.push({ tag: "defs", attrs: {}, children: this.defs }), r.push(...Vh(this.body)), { tag: "svg", attrs: o, children: r };
  }
};
function Vh(t) {
  return t.filter((e) => e.tag === "g" && e.children ? (e.children = Vh(e.children), e.children.length > 0) : !0);
}
async function mM(t) {
  switch (t.kind) {
    case "url":
      return t.url;
    case "encoded":
      return `data:${t.mime};base64,${ao(t.bytes)}`;
    case "rgba":
      return `data:image/png;base64,${ao(await vu(t.data, t.width, t.height))}`;
  }
}
function ot(t) {
  return t instanceof Wi;
}
function le(t) {
  return !(t instanceof Wi) || t.canReadPixels;
}
var MM = {
  [ql]: 160,
  // P & D
  [Ql]: 250,
  // P | D
  [Wl]: 90,
  // P ^ D
  [Jl]: 165,
  // ~(P ^ D)
  [jl]: 80,
  // P & ~D
  [Zl]: 245,
  // P | ~D
  [Gl]: 10,
  // ~P & D
  [Kl]: 175,
  // ~P | D
  [Vl]: 95,
  // ~(P & D)
  [Hl]: 5
  // ~(P | D)
};
function ys(t) {
  return t in MM;
}
function Yo(t) {
  if (!Number.isInteger(t) || t < 1 || t > 16)
    return;
  const e = t - 1;
  return (e >> 2) * 80 + (e & 3) * 5;
}
function ci(t, e, n) {
  return t << 16 | e << 8 | n;
}
function qh(t, e) {
  switch (e) {
    case "invert":
      return ~t & 16777215;
    case "black":
      return 0;
    case "white":
      return 16777215;
    default:
      return t;
  }
}
function ms(t) {
  const e = t.canvas, n = e == null ? void 0 : e.width, s = e == null ? void 0 : e.height;
  return typeof n == "number" && typeof s == "number" && n > 0 && s > 0 ? { w: n, h: s } : null;
}
function Jh(t, e, n) {
  let s = 1 / 0, o = 1 / 0, r = -1 / 0, i = -1 / 0, c = 0, a = 0, l = !1;
  const u = (b, w, x = 0) => {
    s = Math.min(s, b + c - x), o = Math.min(o, w + a - x), r = Math.max(r, b + c + x), i = Math.max(i, w + a + x);
  }, h = () => {
    l = !0;
  }, f = {
    moveTo: (b, w) => u(b, w),
    lineTo: (b, w) => u(b, w),
    rect: (b, w, x, E) => {
      u(b, w), u(b + x, w + E);
    },
    fillRect: (b, w, x, E) => {
      u(b, w), u(b + x, w + E);
    },
    strokeRect: (b, w, x, E) => {
      u(b, w), u(b + x, w + E);
    },
    bezierCurveTo: (b, w, x, E, T, v) => {
      u(b, w), u(x, E), u(T, v);
    },
    quadraticCurveTo: (b, w, x, E) => {
      u(b, w), u(x, E);
    },
    arcTo: (b, w, x, E) => {
      u(b, w), u(x, E);
    },
    arc: (b, w, x) => u(b, w, Math.abs(x)),
    ellipse: (b, w, x, E) => u(b, w, Math.max(Math.abs(x), Math.abs(E))),
    translate: (b, w) => {
      c += b, a += w;
    },
    setTransform: h,
    transform: h,
    scale: h,
    rotate: h
  }, g = () => {
  }, p = new Proxy(f, {
    get: (b, w) => typeof w == "string" && w in b ? b[w] : g,
    set: () => !0
  });
  if (t(p), l)
    return { x: 0, y: 0, w: n.w, h: n.h };
  if (!Number.isFinite(s) || !Number.isFinite(o) || !Number.isFinite(r) || !Number.isFinite(i))
    return null;
  const d = Math.max(0, Math.floor(s - e)), y = Math.max(0, Math.floor(o - e)), m = Math.min(n.w, Math.ceil(r + e)), M = Math.min(n.h, Math.ceil(i + e));
  return m <= d || M <= y ? null : { x: d, y, w: m - d, h: M - y };
}
var bM = 1024 * 1024, Xt = null;
function ze(t, e) {
  let n = Xt && Xt.w >= t && Xt.h >= e ? Xt : null;
  if (!n) {
    const o = Math.max(t, (Xt == null ? void 0 : Xt.w) ?? 0), r = Math.max(e, (Xt == null ? void 0 : Xt.h) ?? 0), i = o * r <= bM, c = i ? W(o, r) : W(t, e);
    if (!c)
      return null;
    n = { canvas: c.canvas, ctx: c.ctx, w: i ? o : t, h: i ? r : e }, i && (Xt = n);
  }
  const s = n.ctx;
  return s.setTransform(1, 0, 0, 1, 0, 0), s.globalAlpha = 1, s.globalCompositeOperation = "source-over", s.clearRect(0, 0, t, e), n;
}
function Oe(t, e, n, s) {
  Q(n.ctx, s, 0, 0);
  const o = t.drawImage;
  t.save();
  try {
    t.setTransform(1, 0, 0, 1, 0, 0), t.globalAlpha = 1, t.globalCompositeOperation = "source-over", o.call(t, n.canvas, 0, 0, e.w, e.h, e.x, e.y, e.w, e.h);
  } finally {
    t.restore();
  }
}
function Vi(t, e) {
  return ot(t) ? t.unknownPixels(e.x, e.y, e.w, e.h) : null;
}
function qi(t, e, n, s, o) {
  let r = null, i = null;
  const c = /* @__PURE__ */ new Map(), a = (u, h, f) => {
    u[h * 4] = f >> 16 & 255, u[h * 4 + 1] = f >> 8 & 255, u[h * 4 + 2] = f & 255, u[h * 4 + 3] = 255;
  };
  for (let u = 0; u < e; u++) {
    if (!n[u] || t[u * 4 + 3] === 0)
      continue;
    const h = s(u, 0), f = s(u, 16777215);
    if (h === f)
      continue;
    let g = 0, p = 0, d = !0;
    for (let m = 16; m >= 0; m -= 8) {
      const M = h >> m & 255, b = f >> m & 255;
      if (M === b)
        p |= M << m;
      else if (M === 0 && b === 255)
        g |= 255 << m;
      else if (M === 255 && b === 0)
        g |= 255 << m, p |= 255 << m;
      else {
        d = !1;
        break;
      }
    }
    if (d) {
      t[u * 4 + 3] = 0, g !== 16777215 && (r ?? (r = new Uint8ClampedArray(e * 4)), a(r, u, g)), p !== 0 && (i ?? (i = new Uint8ClampedArray(e * 4)), a(i, u, p));
      continue;
    }
    const y = o == null ? void 0 : o(u);
    if (y) {
      if (t[u * 4 + 3] = 0, y.mode === "multiply") {
        r ?? (r = new Uint8ClampedArray(e * 4)), a(r, u, y.color);
        continue;
      }
      if (y.mode === "difference") {
        i ?? (i = new Uint8ClampedArray(e * 4)), a(i, u, y.color);
        continue;
      }
      let m = c.get(y.mode);
      m || (m = new Uint8ClampedArray(e * 4), c.set(y.mode, m)), a(m, u, y.color);
    }
  }
  const l = [];
  r && l.push({ mode: "multiply", data: r }), i && l.push({ mode: "difference", data: i });
  for (const [u, h] of c)
    l.push({ mode: u, data: h });
  return l;
}
function Ji(t, e, n) {
  if (ot(t))
    for (const s of n)
      t.blendPatch(s.data, e.x, e.y, e.w, e.h, s.mode);
}
function Ki(t, e, n, s) {
  try {
    const o = V(t, e.x, e.y, e.w, e.h), r = o.data, i = ze(e.w, e.h), c = i ? V(i.ctx, 0, 0, e.w, e.h) : o, a = c.data;
    for (let h = 0; h < e.h; h++)
      for (let f = 0; f < e.w; f++) {
        const g = (h * e.w + f) * 4, p = n(e.x + f, e.y + h, ci(r[g], r[g + 1], r[g + 2]));
        p < 0 || (a[g] = p >> 16 & 255, a[g + 1] = p >> 8 & 255, a[g + 2] = p & 255, a[g + 3] = 255);
      }
    if (!i)
      return Q(t, o, e.x, e.y), !0;
    const l = Vi(t, e), u = l ? qi(
      a,
      e.w * e.h,
      l,
      (h, f) => n(e.x + h % e.w, e.y + Math.floor(h / e.w), f),
      s && ((h) => s(e.x + h % e.w, e.y + Math.floor(h / e.w)))
    ) : [];
    return Oe(t, e, i, c), Ji(t, e, u), !0;
  } catch {
    return !1;
  }
}
function Kh(t, e, n, s, o = 2, r) {
  const i = Yo(e);
  if (i === void 0 || !le(t))
    return !1;
  if (i === 170)
    return !0;
  const c = ms(t);
  if (!c)
    return !1;
  try {
    const a = Jh(s, o, c);
    if (!a)
      return !0;
    const l = ze(a.w, a.h);
    if (!l)
      return !1;
    const u = l.ctx;
    u.save();
    try {
      u.fillStyle = n, u.strokeStyle = n, u.translate(-a.x, -a.y), s(u);
    } finally {
      u.restore();
    }
    const h = r !== void 0 && typeof u.isPointInPath == "function", f = /^#([0-9a-f]{6})$/i.exec(n.trim()), g = f ? parseInt(f[1], 16) : -1, p = V(u, 0, 0, a.w, a.h), d = p.data, y = i === 240 ? null : V(t, a.x, a.y, a.w, a.h).data, m = y ? Vi(t, a) : null, M = m ? new Int32Array(a.w * a.h) : null;
    for (let w = 0; w < d.length; w += 4) {
      const x = d[w + 3];
      let E;
      if (x === 0)
        E = !1;
      else if (x === 255)
        E = !0;
      else if (h) {
        const I = (w >> 2) % a.w, P = ((w >> 2) - I) / a.w;
        E = u.isPointInPath(I + 0.5, P + 0.5, r);
      } else
        E = x >= 128;
      if (!E) {
        d[w] = 0, d[w + 1] = 0, d[w + 2] = 0, d[w + 3] = 0;
        continue;
      }
      const T = g >= 0 ? g : ci(d[w], d[w + 1], d[w + 2]);
      M && (M[w >> 2] = T);
      let v = T;
      if (y) {
        const I = ci(y[w], y[w + 1], y[w + 2]);
        v = mt(i, T, I, I);
      }
      d[w] = v >> 16 & 255, d[w + 1] = v >> 8 & 255, d[w + 2] = v & 255, d[w + 3] = 255;
    }
    let b = [];
    if (m && M) {
      const w = jt(e);
      b = qi(
        d,
        a.w * a.h,
        m,
        (x, E) => mt(i, M[x], E, E),
        (x) => ({ color: qh(M[x], w.colorTransform), mode: w.gco })
      );
    }
    return Oe(t, a, l, p), Ji(t, a, b), !0;
  } catch {
    return !1;
  }
}
var wM = 16 * 1024 * 1024;
function xM(t) {
  if (t.gdiAntialias !== !1)
    return null;
  if (t.rasterLayer !== void 0)
    return t.rasterLayer;
  const e = ms(t.ctx);
  return !e || ot(t.ctx) || e.w * e.h > wM ? (t.rasterLayer = null, null) : (t.rasterLayer = {
    w: e.w,
    h: e.h,
    data: new Uint8ClampedArray(e.w * e.h * 4),
    x0: e.w,
    y0: e.h,
    x1: 0,
    y1: 0
  }, t.rasterLayer);
}
function Pt(t) {
  const e = t.rasterLayer;
  if (!e || e.x1 <= e.x0 || e.y1 <= e.y0)
    return;
  const n = { x: e.x0, y: e.y0, w: e.x1 - e.x0, h: e.y1 - e.y0 }, s = new Uint8ClampedArray(n.w * n.h * 4);
  for (let i = 0; i < n.h; i++) {
    const c = ((n.y + i) * e.w + n.x) * 4;
    s.set(e.data.subarray(c, c + n.w * 4), i * n.w * 4), e.data.fill(0, c, c + n.w * 4);
  }
  e.x0 = e.w, e.y0 = e.h, e.x1 = 0, e.y1 = 0;
  const o = ze(n.w, n.h);
  if (o) {
    Oe(t.ctx, n, o, K(s, n.w, n.h));
    return;
  }
  const r = V(t.ctx, n.x, n.y, n.w, n.h);
  for (let i = 0; i < s.length; i += 4)
    s[i + 3] !== 0 && (r.data[i] = s[i], r.data[i + 1] = s[i + 1], r.data[i + 2] = s[i + 2], r.data[i + 3] = 255);
  Q(t.ctx, r, n.x, n.y);
}
var EM = /* @__PURE__ */ new Set([
  // shapes, polys, paths (incl. AngleArc, PolyDraw, Flatten/Widen/AbortPath), regions
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  27,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  54,
  55,
  56,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  68,
  71,
  72,
  73,
  74,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  // objects
  37,
  38,
  39,
  40,
  82,
  93,
  94,
  95,
  // state and mapping
  9,
  10,
  11,
  12,
  13,
  17,
  18,
  19,
  20,
  21,
  22,
  24,
  25,
  31,
  32,
  33,
  35,
  36,
  57,
  58,
  // palettes, and state/informational records that draw nothing
  16,
  23,
  48,
  49,
  50,
  51,
  52,
  99,
  100,
  101,
  102,
  103,
  104,
  105,
  106,
  109,
  110,
  111,
  112,
  113,
  119,
  120,
  121,
  122
]);
function Zh(t) {
  return EM.has(t);
}
function Qh(t, e, n) {
  if (t.kind !== "tile" || !t.skip)
    return !1;
  const [s, o] = t.toDevice(e, n), { width: r, height: i } = t.tile, c = ((s - t.orgX) % r + r) % r, a = ((o - t.orgY) % i + i) % i;
  return t.skip[a * r + c] === 1;
}
function ka(t) {
  return `#${(t & 16777215).toString(16).padStart(6, "0")}`;
}
function tf(t) {
  for (const e of [0, 16777215])
    if (mt(t, e, 0, 0) !== mt(t, e, 0, 16777215))
      return !0;
  return !1;
}
function ef(t, e) {
  t.beginPath();
  for (const n of nf(e))
    t.rect(n.x, n.y, n.w, n.h);
}
function nf(t) {
  const e = [], n = t.length, s = t.data, o = new Array(n);
  for (let i = 0; i < n; i++)
    o[i] = i * 3;
  o.sort((i, c) => s[i + 1] - s[c + 1] || s[i + 2] - s[c + 2] || s[i] - s[c]);
  let r = 0;
  for (; r < n; ) {
    const i = o[r], c = s[i + 1], a = s[i + 2], l = s[i];
    let u = l + 1, h = r + 1;
    for (; h < n; ) {
      const f = o[h];
      if (s[f + 1] !== c || s[f + 2] !== a || s[f] > u)
        break;
      s[f] === u && u++, h++;
    }
    e.push({ x: c, y: l, w: a - c, h: u - l }), r = h;
  }
  return e;
}
function La(t, e, n, s = "source-over") {
  t.save();
  try {
    t.setTransform(1, 0, 0, 1, 0, 0), t.globalAlpha = 1, t.globalCompositeOperation = s, t.fillStyle = n, ef(t, e), t.fill("nonzero");
  } finally {
    t.restore();
  }
}
function Ft(t, e, n, s) {
  if (e.length === 0)
    return;
  const o = Yo(s) ?? 240;
  if (o === 170)
    return;
  const r = tf(o) ? null : xM(t);
  if (!r) {
    Pt(t), vM(t.ctx, e, n, s);
    return;
  }
  const { w: i, h: c, data: a } = r, l = e.data, u = n.kind === "solid" ? mt(o, n.rgb, 0, 0) : 0;
  for (let h = 0; h < e.length * 3; h += 3) {
    const f = l[h];
    if (f < 0 || f >= c)
      continue;
    const g = Math.max(0, l[h + 1]), p = Math.min(i, l[h + 2]);
    if (p <= g)
      continue;
    g < r.x0 && (r.x0 = g), p > r.x1 && (r.x1 = p), f < r.y0 && (r.y0 = f), f + 1 > r.y1 && (r.y1 = f + 1);
    let d = (f * i + g) * 4;
    for (let y = g; y < p; y++, d += 4) {
      if (Qh(n, y, f))
        continue;
      let m = u;
      if (n.kind === "tile") {
        const [M, b] = n.toDevice(y, f);
        m = mt(o, Ro(n.tile, M, b, n.orgX, n.orgY), 0, 0);
      }
      a[d] = m >> 16 & 255, a[d + 1] = m >> 8 & 255, a[d + 2] = m & 255, a[d + 3] = 255;
    }
  }
}
function vM(t, e, n, s) {
  var M;
  if (e.length === 0)
    return;
  const o = Yo(s) ?? 240;
  if (o === 170)
    return;
  const r = tf(o);
  if (n.kind === "solid" && !r) {
    La(t, e, ka(mt(o, n.rgb, 0, 0)));
    return;
  }
  if (!le(t) || n.kind === "tile" && ot(t) && o === 240) {
    if (n.kind === "tile" && ot(t) && o === 240) {
      const { tile: x, orgX: E, orgY: T } = n, v = new Uint8ClampedArray(x.width * x.height * 4);
      for (let S = 0; S < x.rgb.length; S++)
        v[S * 4] = x.rgb[S] >>> 16 & 255, v[S * 4 + 1] = x.rgb[S] >>> 8 & 255, v[S * 4 + 2] = x.rgb[S] & 255, v[S * 4 + 3] = ((M = n.skip) == null ? void 0 : M[S]) === 1 ? 0 : 255;
      const [I, P] = n.toDevice(0, 0);
      t.save(), t.setTransform(1, 0, 0, 1, 0, 0), ef(t, e), t.fillWithTile({ width: x.width, height: x.height, rgba: v }, E - I, T - P, 1, 1, "nonzero"), t.restore();
      return;
    }
    const b = n.kind === "solid" ? n.rgb : n.tile.rgb[0], w = jt(s);
    La(t, e, ko(ka(b), w.colorTransform), w.gco);
    return;
  }
  const i = e.bounds(), c = ms(t);
  if (!i)
    return;
  const a = Math.max(0, i.x0), l = Math.max(0, i.y0), u = c ? Math.min(c.w, i.x1) : i.x1, h = c ? Math.min(c.h, i.y1) : i.y1;
  if (u <= a || h <= l)
    return;
  const f = { x: a, y: l, w: u - a, h: h - l }, g = ze(f.w, f.h);
  if (!g)
    return;
  const p = V(t, f.x, f.y, f.w, f.h).data, d = V(g.ctx, 0, 0, f.w, f.h), y = d.data, m = e.data;
  for (let b = 0; b < e.length * 3; b += 3) {
    const w = m[b];
    if (w < l || w >= h)
      continue;
    const x = Math.max(a, m[b + 1]), E = Math.min(u, m[b + 2]);
    for (let T = x; T < E; T++) {
      if (Qh(n, T, w))
        continue;
      const v = ((w - l) * f.w + (T - a)) * 4;
      let I;
      if (n.kind === "solid")
        I = n.rgb;
      else {
        const [S, R] = n.toDevice(T, w);
        I = Ro(n.tile, S, R, n.orgX, n.orgY);
      }
      let P = I;
      if (r) {
        const S = y[v + 3] === 255 ? y[v] << 16 | y[v + 1] << 8 | y[v + 2] : p[v] << 16 | p[v + 1] << 8 | p[v + 2];
        P = mt(o, I, S, S);
      } else
        P = mt(o, I, 0, 0);
      y[v] = P >> 16 & 255, y[v + 1] = P >> 8 & 255, y[v + 2] = P & 255, y[v + 3] = 255;
    }
  }
  Oe(t, f, g, d);
}
var TM = [
  [[0, -8], [-8, 0], [0, 8], [8, 0]],
  [[8, -16], [-8, -16], [-16, 0], [-8, 16], [8, 16], [16, 0]],
  [[8, -24], [-8, -24], [-24, -8], [-24, 8], [-8, 24], [8, 24], [24, 8], [24, -8]],
  [[8, -32], [-8, -32], [-24, -24], [-32, -8], [-32, 8], [-24, 24], [-8, 32], [8, 32], [24, 24], [32, 8], [32, -8], [24, -24]],
  [[8, -40], [-8, -40], [-24, -32], [-32, -24], [-40, -8], [-40, 8], [-32, 24], [-24, 32], [-8, 40], [8, 40], [24, 32], [32, 24], [40, 8], [40, -8], [32, -24], [24, -32]],
  [[8, -48], [-8, -48], [-24, -40], [-40, -24], [-48, -8], [-48, 8], [-40, 24], [-24, 40], [-8, 48], [8, 48], [24, 40], [40, 24], [48, 8], [48, -8], [40, -24], [24, -40]]
], sf = 104, IM = { 7: [0, 0.5], 8: [0, 0.5], 9: [0.5, 0.5], 10: [0.5, 0] }, Fa = /* @__PURE__ */ new Map();
function of(t) {
  const e = Fa.get(t);
  if (e)
    return e;
  let n;
  if (t < sf) {
    const s = Math.min(6, Math.max(1, Math.floor(t / 16 + 0.5)));
    n = TM[s - 1];
  } else {
    const s = Math.ceil(t / 2), o = 8 * Math.floor((t + 9) / 16), r = wd(Si(-s, -o, s, o)), i = [];
    for (let c = 0; c + 1 < r.length && (i.push([r[c], r[c + 1]]), !(c > 0 && r[c + 1] === 0)); c += 2)
      ;
    i.pop(), n = [...i, ...i.map((c) => [0 - c[0] || 0, 0 - c[1] || 0])];
  }
  return Fa.set(t, n), n;
}
function PM(t, e, n) {
  const s = t.length, o = t.some((u) => u[1] === 0), i = (Math.abs(n) > 2 * Math.abs(e) || Math.abs(n) === 2 * Math.abs(e) && o ? n < 0 : e < 0 || e === 0 && n < 0) ? -1 : 1;
  let c = 0, a = -1 / 0, l = 0;
  for (let u = 0; u < s; u++) {
    const h = n * t[u][0] - e * t[u][1], f = i * (e * t[u][0] + n * t[u][1]);
    (h > a || h === a && f > l) && (a = h, c = u, l = f);
  }
  return [c, (c + s / 2) % s];
}
function zs(t) {
  return Math.sign(t) * 8 * Math.floor((Math.abs(t) + 4) / 8);
}
function SM(t, e, n) {
  let s = e, o = n;
  const r = s < 0 || s === 0 && o < 0;
  r && (s = -s, o = -o);
  const i = of(t), c = i.length, a = -o, l = s;
  let u = 0, h = -1 / 0;
  for (let U = 0; U < c; U++) {
    const A = a * i[U][0] + l * i[U][1];
    A > h && (h = A, u = U);
  }
  const f = i[(u + c - 1) % c], g = i[(u + 1) % c], p = i[u], d = a * f[0] + l * f[1], y = a * g[0] + l * g[1], [m, M, b] = d >= y ? [f, d, y] : [g, y, d], w = 2 * (h - M + (h - b)), x = w === 0 ? 0 : (M - b) / w, E = t % 16 === 0 && t >= sf ? IM[t / 16] : void 0, T = u < c / 2 ? 1 : -1, v = E ? T * E[0] : 0, I = E ? T * E[1] : 0, P = (U) => 8 * Math.floor((U + 4) / 8), S = P(p[0] + (m[0] - p[0]) * x + 0.5 * Math.sign(o) + v), R = P(p[1] + (m[1] - p[1]) * x + 0.5 * Math.sign(s) + I);
  return r ? [-S, -R] : [S, R];
}
function RM(t, e, n) {
  const s = Math.hypot(e, n), o = t / 2;
  return [Math.floor(e / s * o + 0.5), Math.floor(n / s * o + 0.5)];
}
function Os(t, e, n, s) {
  const o = t * s - e * n;
  if (o !== 0)
    return o;
  if (t * n + e * s >= 0)
    return 0;
  const r = t >= 0 ? 1 : -1, i = e >= 0 ? 1 : -1, c = Math.abs(e) > Math.abs(t) || Math.abs(e) === Math.abs(t) && e > 0;
  return r * i < 0 !== c ? -1 : 1;
}
var AM = class {
  constructor(t, e) {
    this.opts = t, this.out = e, this.pts = [], this.pen = of(t.width), this.n = this.pen.length, this.rr = t.cap === "round" && t.join === "round", this.roundJoinSides = t.join === "round" && t.cap !== "flat", this.maxX = Math.max(...this.pen.map((n) => Math.abs(n[0])));
  }
  /**
   * Segment `a`..`b`. `dir` (a dash's path segment) replaces its direction;
   * `drawDir` (a curve's end tangent) only picks the draw vertices, the
   * perpendicular following the chord (measured on Bezier ends).
   */
  seg(t, e, n, s) {
    const o = n ? n[0] : e[0] - t[0], r = n ? n[1] : e[1] - t[1], i = s ?? [o, r], [c, a] = PM(this.pen, i[0], i[1]);
    return { dx: o, dy: r, L: c, R: a, v: SM(this.opts.width, o, r), e: RM(this.opts.width, o, r) };
  }
  push(t, e) {
    this.pts.push([t[0] + e[0], t[1] + e[1]]);
  }
  /** Pen vertex `k` placed around `p` (pulled one unit inwards when `p` is on a pixel). */
  penAt(t, e) {
    const n = this.pen[e];
    !(t[0] & 15) && !(t[1] & 15) ? this.push(t, [n[0] - Math.sign(n[0]), n[1] - Math.sign(n[1])]) : this.push(t, n);
  }
  /** Pen vertices from index `a` to index `b` in pen order, ends included on request. */
  walk(t, e, n, s, o) {
    if (s && this.penAt(t, e), e !== n) {
      for (let r = (e + 1) % this.n; r !== n; r = (r + 1) % this.n)
        this.penAt(t, r);
      o && this.penAt(t, n);
    }
  }
  /**
   * Pen vertices angularly inside the wedge from side offset `A` to side
   * offset `B` (pen order, decreasing screen angle), in that order. A
   * vertex exactly on `A`'s ray is included when `startIncl`, one on `B`'s
   * ray when `endIncl`.
   */
  wedge(t, e, n, s, o) {
    const r = Math.PI * 2, i = Math.atan2(e[1], e[0]), c = (h) => {
      let f = (i - Math.atan2(h[1], h[0])) % r;
      return f < 0 && (f += r), f;
    }, a = (h, f) => h[0] * f[1] - h[1] * f[0] === 0 && h[0] * f[0] + h[1] * f[1] > 0, l = a(e, n) ? r : c(n), u = [];
    for (let h = 0; h < this.n; h++) {
      const f = this.pen[h];
      if (a(e, f))
        s && u.push([0, h]);
      else if (a(n, f))
        o && u.push([l, h]);
      else {
        const g = c(f);
        g < l && u.push([g, h]);
      }
    }
    u.sort((h, f) => h[0] - f[0]);
    for (const [, h] of u)
      this.penAt(t, h);
  }
  /** Side offset of segment `s` at a join. */
  joinSide(t, e) {
    if (this.roundJoinSides) {
      const n = this.pen[e === "L" ? t.L : t.R];
      return [zs(n[0]), zs(n[1])];
    }
    return e === "R" ? t.v : [-t.v[0], -t.v[1]];
  }
  /** Side offset of segment `s` at a cap. */
  capSide(t, e) {
    if (this.rr) {
      const n = this.pen[e === "L" ? t.L : t.R];
      return [zs(n[0]), zs(n[1])];
    }
    return e === "R" ? t.v : [-t.v[0], -t.v[1]];
  }
  /** A cap at `p` from the `from` side of `s` round to the other side (`start`: around the back). */
  cap(t, e, n) {
    const s = n ? "L" : "R", o = n ? "R" : "L", { cap: r } = this.opts;
    if (r === "round") {
      if (this.push(t, this.capSide(e, s)), this.rr)
        this.walk(t, e[s], e[o], !1, !1);
      else {
        const a = this.capSide(e, s);
        this.wedge(t, a, [-a[0], -a[1]], !0, !1);
      }
      this.push(t, this.capSide(e, o));
      return;
    }
    const i = this.capSide(e, s), c = this.capSide(e, o);
    if (r === "square") {
      const a = n ? [-e.e[0], -e.e[1]] : e.e;
      this.push(t, [i[0] + a[0], i[1] + a[1]]), this.push(t, [c[0] + a[0], c[1] + a[1]]);
    } else
      this.push(t, i), this.push(t, c);
  }
  /**
   * The join at `p` on `side`, coming along `a` and leaving along `b` in
   * outline order (for the left side, walked backwards, `a` is the later
   * segment).
   */
  join(t, e, n, s, o) {
    const { join: r, cap: i, width: c, miterLimit: a } = this.opts, l = this.joinSide(e, s), u = this.joinSide(n, s), h = s === "R" ? e.R : e.L, f = s === "R" ? n.R : n.L;
    if (this.roundJoinSides && h === f) {
      this.push(t, l);
      return;
    }
    if (this.push(t, l), o) {
      if (r === "round")
        if (this.roundJoinSides) {
          const g = this.pen[f], p = Math.abs(n.dy) > Math.abs(n.dx), d = s === "L" && p && Math.abs(g[0]) === this.maxX && g[0] * g[1] <= 0;
          this.walk(t, h, f, !1, d);
        } else {
          const g = l[0] === -u[0] && l[1] === -u[1];
          this.wedge(t, l, u, !g, !g);
        }
      else if (r === "miter") {
        const g = kM(l, [e.dx, e.dy], u, [n.dx, n.dy], c, a);
        g && this.push(t, g);
      }
    } else
      this.pts.push([t[0], t[1]]), r === "round" && i === "flat" && (this.push(t, u), this.wedge(t, u, l, !1, !1), this.push(t, l), this.pts.push([t[0], t[1]]));
    this.push(t, u);
  }
  /** Emits the current figure. */
  flush() {
    const t = [];
    let e = NaN, n = NaN;
    for (const [s, o] of this.pts)
      (s !== e || o !== n) && (t.push(s, o), e = s, n = o);
    for (; t.length >= 4 && t[0] === t[t.length - 2] && t[1] === t[t.length - 1]; )
      t.length -= 2;
    t.length >= 6 && this.out.push(t), this.pts = [];
  }
  /**
   * Outlines an open polyline (distinct consecutive points). `dirs` (a
   * dash's segment directions) replaces each segment's own direction, and
   * lets a single point stand for a zero-length dash along `dirs[0]`;
   * `draws` (curve end tangents) picks draw vertices only.
   */
  open(t, e, n) {
    if (t.length < 2 && !(e != null && e[0])) {
      this.dot(t[0]);
      return;
    }
    const s = [];
    for (let o = 0; o + 1 < t.length; o++)
      s.push(this.seg(t[o], t[o + 1], e == null ? void 0 : e[o], n == null ? void 0 : n[o]));
    if (s.length === 0) {
      const o = this.seg(t[0], t[0], e == null ? void 0 : e[0], n == null ? void 0 : n[0]);
      this.cap(t[0], o, !0), this.cap(t[0], o, !1), this.flush();
      return;
    }
    this.cap(t[0], s[0], !0);
    for (let o = 0; o + 1 < s.length; o++) {
      const r = s[o], i = s[o + 1], c = Os(r.dx, r.dy, i.dx, i.dy);
      c === 0 ? this.push(t[o + 1], this.joinSide(r, "R")) : this.join(t[o + 1], r, i, "R", c < 0);
    }
    this.cap(t[t.length - 1], s[s.length - 1], !1);
    for (let o = s.length - 1; o > 0; o--) {
      const r = s[o], i = s[o - 1], c = Os(i.dx, i.dy, r.dx, r.dy);
      c === 0 ? this.push(t[o], this.joinSide(r, "L")) : this.join(t[o], r, i, "L", c > 0);
    }
    this.flush();
  }
  /** Outlines a closed polygon (distinct consecutive points, not repeating the first). */
  closed(t, e) {
    const n = t.length, s = [];
    for (let o = 0; o < n; o++)
      s.push(this.seg(t[o], t[(o + 1) % n], void 0, e == null ? void 0 : e[o]));
    for (let o = 1; o <= n; o++) {
      const r = o % n, i = s[(r + n - 1) % n], c = s[r], a = Os(i.dx, i.dy, c.dx, c.dy);
      a === 0 ? this.push(t[r], this.joinSide(i, "R")) : this.join(t[r], i, c, "R", a < 0);
    }
    this.flush();
    for (let o = 0; o < n; o++) {
      const r = (n - o) % n, i = s[r], c = s[(r + n - 1) % n], a = Os(c.dx, c.dy, i.dx, i.dy);
      a === 0 ? this.push(t[r], this.joinSide(i, "L")) : this.join(t[r], i, c, "L", a > 0);
    }
    this.flush();
  }
  /** A zero-length figure: the whole pen for a round cap, nothing otherwise. */
  dot(t) {
    if (this.opts.cap === "round") {
      for (let e = 0; e < this.n; e++)
        this.push(t, this.pen[e]);
      this.flush();
    }
  }
};
function UM(t, e, n, s) {
  const o = [], r = [];
  for (let u = 0; u < n.length; u += 2) {
    const h = n[u], f = n[u + 1] ?? 0, g = Math.min(h, s);
    r.push(h - g, f + g);
  }
  if (r.reduce((u, h) => u + h, 0) <= 0)
    return [];
  let i = 0, c = r[0], a = !0, l = { pts: [t[0]], dirs: [], draws: [] };
  for (let u = 0; u + 1 < t.length; u++) {
    const [h, f] = t[u], [g, p] = t[u + 1], d = [g - h, p - f], y = Math.hypot(d[0], d[1]);
    let m = 0;
    for (; y - m > c || c === 0 && a; ) {
      m += c;
      const M = [Math.floor(h + d[0] * m / y + 0.5), Math.floor(f + d[1] * m / y + 0.5)];
      a && l ? (l.pts.push(M), l.dirs.push(d), l.draws.push(e[u]), o.push(l), l = null) : l = { pts: [M], dirs: [], draws: [] }, a = !a, i = (i + 1) % r.length, c = r[i];
    }
    c -= y - m, a && l && (l.pts.push(t[u + 1]), l.dirs.push(d), l.draws.push(e[u]));
  }
  return a && l && l.dirs.length > 0 && o.push(l), o;
}
function rf(t, e) {
  var r;
  const n = [], s = new AM(e, n), o = !!e.dashes && e.dashes.length > 0;
  for (const i of t.figures) {
    let c = [];
    const a = [];
    for (let u = 0; u + 1 < i.pts.length; u += 2) {
      const h = [i.pts[u], i.pts[u + 1]], f = c[c.length - 1];
      f && f[0] === h[0] && f[1] === h[1] || (f && a.push((r = i.tangents) == null ? void 0 : r.get(u / 2 - 1)), c.push(h));
    }
    if (c.length === 0)
      continue;
    const l = i.closed && c.length >= 2;
    if (l && c.length >= 2 && c[0][0] === c[c.length - 1][0] && c[0][1] === c[c.length - 1][1] && (c = c.slice(0, -1)), o) {
      const u = l ? [...c, c[0]] : c, h = e.cap === "flat" || e.shortenDashes === !1 ? 0 : e.width;
      for (const f of UM(u, l ? [...a, void 0] : a, e.dashes, h)) {
        const g = [f.pts[0]], p = [], d = [];
        for (let y = 1; y < f.pts.length; y++) {
          const m = f.pts[y], M = g[g.length - 1];
          (m[0] !== M[0] || m[1] !== M[1]) && (g.push(m), p.push(f.dirs[y - 1]), d.push(f.draws[y - 1]));
        }
        s.open(g, p.length > 0 ? p : [f.dirs[0]], p.length > 0 ? d : [f.draws[0]]);
      }
    } else l && c.length >= 3 ? s.closed(c, a) : l && c.length === 2 ? s.open([c[0], c[1], c[0]]) : s.open(c, void 0, a);
  }
  return n;
}
function kM(t, e, n, s, o, r) {
  const i = e[0] * s[1] - e[1] * s[0];
  if (i === 0)
    return null;
  const c = n[0] - t[0], a = n[1] - t[1], l = (c * s[1] - a * s[0]) / i, u = t[0] + e[0] * l, h = t[1] + e[1] * l;
  return Math.hypot(u, h) > r * o / 2 ? null : [Math.floor(u + 0.5), Math.floor(h + 0.5)];
}
function vr(t) {
  const e = /^#?([0-9a-f]{6})$/i.exec(t.trim());
  return e ? parseInt(e[1], 16) : 0;
}
function $(t, e, n) {
  const s = rt(t), o = Math.round((s[0] * e + s[2] * n) * 16) + Math.round(s[4] * 16), r = Math.round((s[1] * e + s[3] * n) * 16) + Math.round(s[5] * 16), i = t.wholeDevicePixels;
  if (i) {
    const c = 16 * i[0], a = 16 * i[1];
    return [Math.round(Math.floor(o / c + 0.5) * c), Math.round(Math.floor(r / a + 0.5) * a)];
  }
  return [o, r];
}
function Rn(t, e, n, s, o) {
  const [r, i] = $(t, e, n), [c, a] = $(t, s, n), [l, u] = $(t, e, o);
  return { ax: r, ay: i, exx: c - r, exy: a - i, eyx: l - r, eyy: u - i };
}
function Ms(t) {
  return t.exy === 0 && t.eyx === 0;
}
function LM(t) {
  const { ax: e, ay: n, exx: s, exy: o, eyx: r, eyy: i } = t;
  return [e + s, n + o, e, n, e + r, n + i, e + s + r, n + o + i];
}
function ns(t) {
  const e = LM(t), n = new ht();
  return n.moveTo(e[0], e[1]), n.lineTo(e[2], e[3]), n.lineTo(e[4], e[5]), n.lineTo(e[6], e[7]), n.closeFigure(), n;
}
function ai(t) {
  const e = new ht();
  return e.addBeziers(Pu(t), !0), e.closeFigure(), e;
}
function cf(t, e, n, s, o) {
  return Ms(t) ? (r, i) => [r, i] : (r, i) => {
    const c = s !== 0 ? (r - e) / s : 0, a = o !== 0 ? (i - n) / o : 0;
    return [Math.round(t.ax + t.exx * c + t.eyx * a), Math.round(t.ay + t.exy * c + t.eyy * a)];
  };
}
function af(t) {
  if (Ms(t)) {
    const s = t.ax, o = t.ax + t.exx, r = t.ay, i = t.ay + t.eyy;
    return { l: Math.min(s, o), t: Math.min(r, i), r: Math.max(s, o), b: Math.max(r, i) };
  }
  const e = Math.round(Math.hypot(t.exx, t.exy)), n = Math.round(Math.hypot(t.eyx, t.eyy));
  return { l: 0, t: 0, r: e, b: n };
}
function lf(t, e, n) {
  const s = af(t), o = xd(s.l, s.t, s.r, s.b, e, n), r = cf(t, s.l, s.t, s.r - s.l, s.b - s.t), i = [];
  for (let a = 0; a < o.length; a += 2)
    i.push(...r(o[a], o[a + 1]));
  const c = new ht();
  for (let a = 0; a < 4; a++) {
    const l = a * 8;
    c.addBeziers(i.slice(l, l + 8), a === 0);
  }
  return c.closeFigure(), c;
}
function eo(t, e, n, s, o, r, i = new ht()) {
  const c = af(t), a = cf(t, c.l, c.t, c.r - c.l, c.b - c.t);
  let l = e[0], u = e[1], h = n[0], f = n[1], g = s;
  if (Ms(t))
    t.exx < 0 != t.eyy < 0 && (g = !g);
  else {
    const y = t.exx * t.eyy - t.exy * t.eyx || 1, m = (M, b) => {
      const w = M - t.ax, x = b - t.ay, E = (w * t.eyy - x * t.eyx) / y, T = (t.exx * x - t.exy * w) / y;
      return [c.l + E * (c.r - c.l), c.t + T * (c.b - c.t)];
    };
    [l, u] = m(l, u), [h, f] = m(h, f), y < 0 && (g = !g);
  }
  const p = vd(c.l, c.t, c.r, c.b, l, u, h, f, g), d = [];
  for (let y = 0; y < p.length; y += 2)
    d.push(...a(p[y], p[y + 1]));
  if (o === "arcto" && r ? (i.lineTo(r[0], r[1]), i.addBeziers(d, !1)) : i.addBeziers(d, !0), o === "pie") {
    const y = c.r - c.l, m = c.b - c.t, [M, b] = a(c.l + Math.ceil(y / 2), c.t + Math.ceil(m / 2));
    i.lineTo(M, b);
  }
  return (o === "pie" || o === "chord") && i.closeFigure(), { path: i, end: [d[d.length - 2], d[d.length - 1]] };
}
var uf = 5, FM = 65536;
function Zi(t) {
  const e = rt(t), n = Math.sqrt(Math.abs(e[0] * e[3] - e[1] * e[2])), s = t.wholeDevicePixels;
  return s ? Math.round(t.state.penWidth * n / s[0]) * s[0] : t.state.penWidth * n;
}
function Ee(t) {
  var n;
  return !((t.state.penFlags ?? t.state.penStyle) & FM) && t.state.penExtended ? !0 : Math.round(Zi(t) / (((n = t.wholeDevicePixels) == null ? void 0 : n[0]) ?? 1)) <= 1;
}
function hf(t) {
  return (t.state.penStyle & 15) !== uf;
}
function ff(t, e = {}) {
  const { state: n } = t, s = n.penFlags ?? n.penStyle, o = Zi(t), r = s & 3840, i = s & 61440, c = n.penExtended ? Uu(s, o, n.penUserStyle, o / (n.penWidth || 1)) : null;
  return {
    width: Math.round(o * 16),
    cap: e.roundPen || !n.penExtended || r === 0 ? "round" : r === 256 ? "square" : "flat",
    join: e.roundPen ? "round" : e.rectangle && !n.penExtended ? "miter" : !n.penExtended || i === 0 ? "round" : i === 4096 ? "bevel" : "miter",
    miterLimit: n.miterLimit ?? 10,
    dashes: c ? c.map((a) => a * 16) : null,
    shortenDashes: (s & 15) !== 7
  };
}
function DM(t) {
  const e = new Uint8Array(64);
  for (let n = 0; n < 8; n++)
    for (let s = 0; s < 8; s++)
      e[n * 8 + s] = ro(t, s, n) ? 0 : 1;
  return e;
}
function An(t) {
  var i;
  const e = Gt(t.state);
  if (e.kind === "none")
    return null;
  if (e.kind === "solid")
    return { kind: "solid", rgb: e.rgb };
  const n = t.sx || 1, s = t.sy || 1, { bounds: o, state: r } = t;
  return {
    kind: "tile",
    tile: e,
    toDevice: (c, a) => [Math.floor(o.left + (c + 0.5) / n), Math.floor(o.top + (a + 0.5) / s)],
    orgX: r.brushOrgX,
    orgY: r.brushOrgY,
    ...r.bkMode === 1 && ((i = r.brushPattern) == null ? void 0 : i.kind) === "hatch" ? { skip: DM(r.brushPattern.hatch) } : {}
  };
}
function _M(t, e, n) {
  const { ctx: s, state: o } = t;
  if (n.fill) {
    const l = An(t);
    if (l) {
      const u = Ri(n.fillPath ?? e, !!n.winding);
      Ft(t, u, l, o.rop2);
    }
  }
  if (!n.stroke || o.penStyle === uf)
    return !0;
  if (!Ee(t)) {
    if (!hf(t))
      return !1;
    const l = rf(e, ff(t, n));
    return Ft(t, Ao(l, !0), { kind: "solid", rgb: vr(o.penColor) }, o.rop2), !0;
  }
  const r = Ai(o.penFlags ?? o.penStyle, o.penUserStyle), i = new Ct(), a = r !== null && o.bkMode === 2 && ku(o.penFlags ?? o.penStyle) ? new Ct() : null;
  return Lu(e, i, a, r, n.style ?? { pos: 0 }), a && Ft(t, a, { kind: "solid", rgb: vr(o.bkColor) }, o.rop2), Ft(t, i, { kind: "solid", rgb: vr(o.penColor) }, o.rop2), !0;
}
var li = 0.5 - 1 / 32;
function ui(t, e) {
  return e === 0 ? t : (n) => {
    n.save(), n.translate(e, e), t(n), n.restore();
  };
}
function Qi(t) {
  return t.gdiAntialias === !1;
}
function NM(t, e, n) {
  var m;
  const { ctx: s, bounds: o, state: r } = t, i = Gt(r);
  if (i.kind !== "tile")
    return !1;
  const c = t.sx || 1, a = t.sy || 1, l = Yo(r.rop2) ?? 240, u = r.bkMode === 1 && ((m = r.brushPattern) == null ? void 0 : m.kind) === "hatch" ? r.brushPattern.hatch : -1, h = (M, b) => u >= 0 && !ro(u, ((M - r.brushOrgX) % 8 + 8) % 8, ((b - r.brushOrgY) % 8 + 8) % 8);
  if (ot(s) && (l === 240 || !s.canReadPixels)) {
    const M = new Uint8ClampedArray(i.width * i.height * 4);
    for (let b = 0; b < i.rgb.length; b++) {
      const w = i.rgb[b];
      M[b * 4] = w >>> 16 & 255, M[b * 4 + 1] = w >>> 8 & 255, M[b * 4 + 2] = w & 255, M[b * 4 + 3] = u >= 0 && !ro(u, b % 8, Math.floor(b / 8)) ? 0 : 255;
    }
    return s.fillWithTile(
      { width: i.width, height: i.height, rgba: M },
      (r.brushOrgX - o.left) * c,
      (r.brushOrgY - o.top) * a,
      c,
      a,
      e
    ), !0;
  }
  const f = ms(s);
  if (!f || typeof s.isPointInPath != "function")
    return !1;
  if (l === 170)
    return !0;
  const g = n ? Jh(n, 1, f) : { x: 0, y: 0, w: f.w, h: f.h };
  if (!g)
    return !0;
  const p = 0.5 - li, d = (M, b) => Ro(
    i,
    Math.floor(o.left + (M + 0.5) / c),
    Math.floor(o.top + (b + 0.5) / a),
    r.brushOrgX,
    r.brushOrgY
  ), y = jt(r.rop2);
  return Ki(
    s,
    g,
    (M, b, w) => {
      if (!s.isPointInPath(M + p, b + p, e) || u >= 0 && h(Math.floor(o.left + (M + 0.5) / c), Math.floor(o.top + (b + 0.5) / a)))
        return -1;
      const x = d(M, b);
      return l === 240 ? x : mt(l, x, w, w);
    },
    (M, b) => ({ color: qh(d(M, b), y.colorTransform), mode: y.gco })
  );
}
function BM(t, e, n = "nonzero", s) {
  const { ctx: o, state: r } = t;
  if (r.brushStyle === 1)
    return;
  const i = s ?? e;
  if (Gt(r).kind === "tile") {
    s && s(o);
    const l = NM(t, n, i);
    if (s && e(o), l)
      return;
  } else {
    const l = jt(r.rop2);
    if ((Qi(t) || !l.exact && ys(r.rop2)) && Kh(
      o,
      r.rop2,
      r.brushColor,
      (h) => {
        ui(i, li)(h), h.fill(n);
      },
      1,
      n
    ))
      return;
  }
  const c = Bt(t) ? li : 0, a = c !== 0 || s !== void 0;
  a && ui(i, c)(o), Bi(o, r), o.fill(n), a && e(o);
}
var fs = 5;
function bs(t, e = 1) {
  return Math.max(t.penWidth * e, 1);
}
function wn(t) {
  const e = rt(t);
  return Math.sqrt(Math.abs(e[0] * e[3] - e[1] * e[2])) || 1;
}
function ws(t, e = 1) {
  if (t.penStyle === fs)
    return 0;
  const n = bs(t, e);
  return Number.isInteger(n) && n % 2 === 1 ? 0.5 : 0;
}
function Da(t, e) {
  const { state: n } = e, s = wn(e), o = bs(n, s), r = n.penFlags ?? n.penStyle;
  t.lineWidth = o;
  const i = Ee(e);
  if (!i && n.penExtended) {
    const c = r & 3840, a = r & 61440;
    t.lineCap = c === 256 ? "square" : c === 512 ? "butt" : "round", t.lineJoin = a === 4096 ? "bevel" : a === 8192 ? "miter" : "round", t.miterLimit = n.miterLimit ?? 10, t.setLineDash(Uu(r, o, n.penUserStyle, s) ?? []);
  } else i ? (t.lineWidth = 1, t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 10, t.setLineDash([])) : (t.lineCap = "round", t.lineJoin = "round", t.setLineDash([]));
}
function XM(t) {
  const { state: e } = t;
  return e.penStyle === fs || !Ee(t) ? null : Ai(e.penFlags ?? e.penStyle, e.penUserStyle);
}
function YM(t, e, n, s) {
  const { ctx: o, state: r } = t, i = r.penFlags ?? r.penStyle, c = n.reduce((f, g) => f + g, 0), a = jt(r.rop2), l = r.bkMode === 2 && ku(i), u = [];
  e.figures.forEach((f, g) => {
    g > 0 && (s.pos = 0);
    const p = f.closed ? [...f.pts, f.pts[0], f.pts[1]] : f.pts;
    for (let d = 0; d + 3 < p.length; d += 2) {
      let y = 0;
      Cr(p[d], p[d + 1], p[d + 2], p[d + 3], () => {
        y++;
      }), y !== 0 && (u.push([p[d], p[d + 1], p[d + 2], p[d + 3], s.pos, y]), s.pos += y);
    }
  });
  const h = (f) => f / 16 + 0.5;
  o.save();
  try {
    o.globalCompositeOperation = a.gco, o.lineWidth = 1, o.lineCap = "butt";
    for (const f of l ? ["bk", "fg"] : ["fg"]) {
      o.strokeStyle = ko(f === "bk" ? r.bkColor : r.penColor, a.colorTransform);
      for (const [g, p, d, y, m, M] of u) {
        const b = Math.hypot(d - g, y - p) / 16 / M;
        f === "fg" ? (o.setLineDash(n.map((w) => w * b)), o.lineDashOffset = m % c * b) : o.setLineDash([]), o.beginPath(), o.moveTo(h(g), h(p)), o.lineTo(h(d), h(y)), o.stroke();
      }
    }
  } finally {
    o.setLineDash([]), o.lineDashOffset = 0, o.restore();
  }
}
function zM(t, e) {
  const { ctx: n, state: s } = t, o = wn(t), r = ws(s, o), i = ui(e, r), c = jt(s.rop2);
  s.penStyle !== fs && (Qi(t) || !c.exact && ys(s.rop2)) && Kh(
    n,
    s.rop2,
    s.penColor,
    (l) => {
      Da(l, t), i(l), l.stroke();
    },
    bs(s, o) / 2 + 2
  ) || (r !== 0 && i(n), Ni(n, s), s.penStyle !== fs && Da(n, t), n.stroke());
}
function Mt(t, e) {
  const { ctx: n, state: s } = t, o = Qi(t), r = !jt(s.rop2).exact && ys(s.rop2), i = s.penStyle === fs, c = !i && Ee(t);
  let a = null;
  const l = () => (a ?? (a = e.raster()), a);
  let u = !1;
  const h = () => {
    u || (e.build(n), u = !0);
  }, f = e.fillRule ?? "nonzero";
  if (e.fill && s.brushStyle !== 1) {
    const p = Gt(s).kind === "tile";
    if (o || p || r) {
      const d = An(t);
      if (d) {
        let y = Ri(l(), f === "nonzero");
        e.axisRect && e.stroke && c && (y = OM(y, l())), Ft(t, y, d, s.rop2);
      }
    } else {
      h();
      const d = e.axisRect && e.stroke && !i ? e.axisRect.interior : void 0;
      BM(t, e.build, f, d);
    }
  }
  if (!e.stroke || i)
    return;
  if ((c || hf(t)) && (o || r)) {
    _M(t, l(), { fill: !1, stroke: !0, style: e.style, rectangle: e.rectangle, roundPen: e.roundPen });
    return;
  }
  const g = XM(t);
  if (g && !o && !r) {
    YM(t, l(), g, e.style ?? { pos: 0 });
    return;
  }
  Pt(t), h(), zM(t, e.build);
}
function OM(t, e) {
  const n = new Ct();
  Lu(e, n, null, null);
  const s = /* @__PURE__ */ new Map(), o = n.data;
  for (let c = 0; c < n.length * 3; c += 3) {
    let a = s.get(o[c]);
    a || (a = [], s.set(o[c], a)), a.push([o[c + 1], o[c + 2]]);
  }
  const r = new Ct(), i = t.data;
  for (let c = 0; c < t.length * 3; c += 3) {
    const a = i[c], l = (s.get(a) ?? []).slice().sort((f, g) => f[0] - g[0]);
    let u = i[c + 1];
    const h = i[c + 2];
    for (const [f, g] of l)
      g <= u || f >= h || (r.add(a, u, Math.min(f, h)), u = Math.max(u, g));
    r.add(a, u, h);
  }
  return r;
}
var gf = 2.2;
function $M(t, e) {
  if (t <= 3)
    return 16;
  const n = Math.abs(e.w) + Math.abs(e.h);
  return n > 512 ? 256 : n > 128 ? 64 : 16;
}
function CM(t) {
  return t.preset ? t.preset.positions.length : t.blend ? t.blend.positions.length : 2;
}
function _a(t, e, n) {
  const s = Math.min(t.length, e.length);
  if (s === 0)
    return n;
  if (n <= t[0])
    return e[0];
  for (let o = 1; o < s; o++)
    if (n <= t[o]) {
      const r = t[o] - t[o - 1], i = r > 0 ? (n - t[o - 1]) / r : 1;
      return e[o - 1] + (e[o] - e[o - 1]) * i;
    }
  return e[s - 1];
}
function We(t, e) {
  const n = t >>> 24 & 255, s = n / 255, o = (r) => {
    const i = t >>> r & 255;
    return (e ? 255 * Math.pow(i / 255, gf) : i) * s * (n < 255 ? 1 - 2 ** -40 : 1);
  };
  return [o(16), o(8), o(0), n];
}
function Na(t, e, n) {
  return [
    t[0] + (e[0] - t[0]) * n,
    t[1] + (e[1] - t[1]) * n,
    t[2] + (e[2] - t[2]) * n,
    t[3] + (e[3] - t[3]) * n
  ];
}
function HM(t, e, n) {
  const s = Math.fround(1 - n), o = (r, i) => (Math.trunc(r * 256 * s) + Math.trunc(i * 256 * n)) / 256;
  return [o(t[0], e[0]), o(t[1], e[1]), o(t[2], e[2]), o(t[3], e[3])];
}
function GM(t, e) {
  const n = t.gammaCorrected;
  if (t.preset && t.preset.positions.length > 0) {
    const { positions: r, argb: i } = t.preset, c = Math.min(r.length, i.length);
    if (e <= r[0] || c === 1)
      return We(i[0], n);
    for (let a = 1; a < c; a++)
      if (e <= r[a]) {
        const l = r[a] - r[a - 1], u = l > 0 ? (e - r[a - 1]) / l : 1;
        return Na(We(i[a - 1], n), We(i[a], n), u);
      }
    return We(i[c - 1], n);
  }
  const s = We(t.startArgb, n), o = We(t.endArgb, n);
  return t.blend && !n ? HM(s, o, _a(t.blend.positions, t.blend.factors, e)) : Na(s, o, t.blend ? _a(t.blend.positions, t.blend.factors, e) : e);
}
function jM(t, e) {
  if (e <= 0)
    return 0;
  const n = e / 255, s = Math.round(Math.min(1, Math.max(0, t / n / 255)) * 1023) / 1023;
  return 255 * Math.pow(s, 1 / gf) * n;
}
function pf(t, e) {
  const n = $M(CM(t), e), s = new Uint8Array((n + 1) * 4);
  for (let o = 0; o <= n; o++) {
    const r = GM(t, o / n), i = o * 4;
    for (let c = 0; c < 3; c++) {
      const a = t.gammaCorrected ? jM(r[c], r[3]) : r[c];
      s[i + c] = Math.min(255, Math.max(0, Math.floor(a + 0.5)));
    }
    s[i + 3] = Math.min(255, Math.max(0, Math.floor(r[3] + 0.5)));
  }
  return { intervals: n, knots: s };
}
function df(t) {
  if (t.ramp)
    return t.ramp;
  const e = t.stops;
  return e.length === 2 && e[0].offset === 0 && e[1].offset === 1 && e[0].argb !== void 0 && e[1].argb !== void 0 ? { startArgb: e[0].argb, endArgb: e[1].argb, preset: null, blend: null, gammaCorrected: !1 } : null;
}
function WM(t, e) {
  const n = e * 4, s = t.knots[n + 3];
  if (s === 0)
    return 0;
  const o = (r) => Math.min(255, Math.round(r * 255 / s));
  return (s << 24 | o(t.knots[n]) << 16 | o(t.knots[n + 1]) << 8 | o(t.knots[n + 2])) >>> 0;
}
function VM(t) {
  const e = [];
  for (let n = 0; n <= t.intervals; n++) {
    const s = WM(t, n), o = (s >>> 24 & 255) / 255;
    e.push({
      offset: n / t.intervals,
      color: `rgba(${s >>> 16 & 255},${s >>> 8 & 255},${s & 255},${Number(o.toFixed(4))})`,
      argb: s
    });
  }
  return e;
}
var rs = 65536;
function qM(t, e, n) {
  const s = (n === "tile-flip-x" || n === "tile-flip-xy" ? 2 : 1) * e * rs;
  return (t % s + s) % s;
}
function JM(t, e, n, s) {
  const o = t.intervals, r = Math.floor(e / rs), i = Math.floor(e / 256) & 255, c = r <= o ? r : 2 * o - r, a = r + 1 <= o ? r + 1 : Math.max(0, 2 * o - r - 1), l = t.knots, u = Math.min(o, c) * 4, h = Math.min(o, a) * 4, f = l[u + 3] * (256 - i) + l[h + 3] * i + 128 >> 8;
  if (f !== 0) {
    for (let g = 0; g < 3; g++) {
      const p = l[u + g] * (256 - i) + l[h + g] * i + 128 >> 8;
      n[s + g] = f === 255 ? p : Math.round(p * 255 / f);
    }
    n[s + 3] = f;
  }
}
function KM(t, e, n) {
  const s = t.rect, o = df(t);
  if (!s || !o || !(Math.abs(s.w) > 1e-9))
    return null;
  const r = t.transform ?? [1, 0, 0, 1, 0, 0], i = [
    e[0] * r[0] + e[2] * r[1],
    e[1] * r[0] + e[3] * r[1],
    e[0] * r[2] + e[2] * r[3],
    e[1] * r[2] + e[3] * r[3],
    e[0] * r[4] + e[2] * r[5] + e[4],
    e[1] * r[4] + e[3] * r[5] + e[5]
  ], c = i[0] * i[3] - i[1] * i[2];
  if (!Number.isFinite(c) || Math.abs(c) < 1e-12)
    return null;
  const a = i[3] / c, l = -i[2] / c, u = -(a * i[4] + l * i[5]), h = pf(o, s), f = h.intervals, g = f / s.w, p = n ? 0.5 : 0, d = Math.round(a * g * rs), y = Math.round(l * g * rs), m = Math.round((a * p + l * p + u - s.x) * g * rs);
  return (M, b, w, x, E) => {
    for (let T = 0; T < x; T++) {
      let v = m + M * d + (b + T) * y;
      for (let I = 0; I < w; I++, v += d)
        JM(h, qM(v, f, t.wrapMode), E, (T * w + I) * 4);
    }
  };
}
var zo = [1, 0, 0, 1, 0, 0];
function Zt(t, e) {
  return [
    t[0] * e[0] + t[2] * e[1],
    t[1] * e[0] + t[3] * e[1],
    t[0] * e[2] + t[2] * e[3],
    t[1] * e[2] + t[3] * e[3],
    t[0] * e[4] + t[2] * e[5] + t[4],
    t[1] * e[4] + t[3] * e[5] + t[5]
  ];
}
function yf(t) {
  const e = t[0] * t[3] - t[1] * t[2];
  return !Number.isFinite(e) || Math.abs(e) < 1e-12 ? null : [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e];
}
function no(t, e, n) {
  const s = (o) => {
    const r = t >>> o & 255, i = e >>> o & 255;
    return Math.round(r + (i - r) * n);
  };
  return (s(24) << 24 | s(16) << 16 | s(8) << 8 | s(0)) >>> 0;
}
function ZM(t, e, n) {
  const s = Math.min(t.length, e.length);
  if (s === 0)
    return n;
  if (n <= t[0])
    return e[0];
  for (let o = 1; o < s; o++)
    if (n <= t[o]) {
      const r = t[o] - t[o - 1], i = r > 0 ? (n - t[o - 1]) / r : 1;
      return e[o - 1] + (e[o] - e[o - 1]) * i;
    }
  return e[s - 1];
}
function Ba(t, e) {
  if (t.length === 0 || t.some((n) => n.argb === void 0))
    return null;
  if (e <= t[0].offset)
    return t[0].argb;
  for (let n = 1; n < t.length; n++) {
    const s = t[n];
    if (e <= s.offset) {
      const o = t[n - 1], r = s.offset - o.offset;
      return no(o.argb, s.argb, r > 0 ? (e - o.offset) / r : 1);
    }
  }
  return t[t.length - 1].argb;
}
function mf(t, e, n) {
  const { center: s, boundary: o, boundaryArgb: r } = t, i = o.length, c = e - s.x, a = n - s.y;
  let l = -1, u = 0, h = 0;
  const f = 1e-9;
  for (let b = 0; b < i; b++) {
    const w = o[b], x = o[(b + 1) % i], E = w.x - s.x, T = w.y - s.y, v = x.x - w.x, I = x.y - w.y, P = E * I - T * v;
    if (Math.abs(P) < 1e-12)
      continue;
    const S = (c * I - a * v) / P, R = (E * a - T * c) / P;
    S < -f || R < -f || R > S + f || S > 1 + f || (l = b, u = Math.max(0, S), h = S > 0 ? Math.min(1, Math.max(0, R / S)) : 0);
  }
  if (l < 0)
    return null;
  let g = u;
  if (t.focus) {
    const b = Math.min(0.999, Math.max(0, (t.focus.x + t.focus.y) / 2));
    g = g <= b ? 0 : (g - b) / (1 - b);
  }
  const p = 1 - g;
  if (t.preset && t.preset.positions.length > 0) {
    const { positions: b, argb: w } = t.preset;
    if (p <= b[0])
      return w[0];
    for (let x = 1; x < b.length; x++)
      if (p <= b[x]) {
        const E = b[x] - b[x - 1];
        return no(w[x - 1], w[x], E > 0 ? (p - b[x - 1]) / E : 1);
      }
    return w[b.length - 1];
  }
  const d = r[l] ?? t.centerArgb, y = r[(l + 1) % i] ?? d, m = no(d, y, h), M = t.blend ? ZM(t.blend.positions, t.blend.factors, p) : p;
  return no(m, t.centerArgb, Math.min(1, Math.max(0, M)));
}
var QM = 2048;
function Mf(t) {
  return {
    x: t === "tile-flip-x" || t === "tile-flip-xy",
    y: t === "tile-flip-y" || t === "tile-flip-xy"
  };
}
function tc(t, e, n, s, o, r, i, c, a) {
  if (typeof t.createPattern != "function")
    return null;
  const l = o === "clamp" ? { x: !1, y: !1 } : Mf(o), u = n * (l.x ? 2 : 1), h = s * (l.y ? 2 : 1), f = W(u, h);
  if (!f)
    return null;
  const g = e.w / n, p = e.h / s, d = (x) => {
    const E = x % n * g + (0.5 + c.phaseX) * g;
    return x < n ? E : e.w - c.lagX - (E - (0.5 + c.phaseX) * g) - 0.5 * g;
  }, y = (x) => {
    const E = (x % s + 0.5) * p;
    return x < s ? E : e.h - c.lagY - E;
  }, m = new Uint8ClampedArray(u * h * 4);
  for (let x = 0; x < h; x++) {
    const E = e.y + y(x);
    for (let T = 0; T < u; T++) {
      const v = a(e.x + d(T), E);
      if (v === null)
        continue;
      const I = (x * u + T) * 4;
      m[I] = v >>> 16 & 255, m[I + 1] = v >>> 8 & 255, m[I + 2] = v & 255, m[I + 3] = v >>> 24 & 255;
    }
  }
  Q(f.ctx, K(m, u, h), 0, 0);
  const M = Vu(t, f.canvas, o === "clamp" ? "no-repeat" : "repeat");
  if (!M || typeof M.setTransform != "function")
    return null;
  const b = [g, 0, 0, p, e.x + c.phaseX * g, e.y], w = Zt([1, 0, 0, 1, i.x, i.y], Zt(r, b));
  try {
    M.setTransform({ a: w[0], b: w[1], c: w[2], d: w[3], e: w[4], f: w[5] });
  } catch {
    return null;
  }
  return M;
}
function Oo(t) {
  const e = yf(t);
  return e ? { x: e[0] * 0.5 + e[2] * 0.5, y: e[1] * 0.5 + e[3] * 0.5 } : { x: 0, y: 0 };
}
var t3 = 4;
function hi(t, e, n) {
  const s = e === "x" ? Math.hypot(t[0], t[1]) : Math.hypot(t[2], t[3]);
  return Math.max(2, Math.min(QM, Math.ceil(Math.abs(n) * s * t3)));
}
function bf(t, e) {
  const n = e ?? zo, s = (u, h) => ({
    x: n[0] * u + n[2] * h + n[4],
    y: n[1] * u + n[3] * h + n[5]
  }), o = s(t.x, t.y + t.h / 2), r = s(t.x + t.w, t.y + t.h / 2), i = n[3], c = -n[2], a = i * i + c * c;
  if (a < 1e-12)
    return { x1: o.x, y1: o.y, x2: r.x, y2: r.y };
  const l = ((r.x - o.x) * i + (r.y - o.y) * c) / a;
  return { x1: o.x, y1: o.y, x2: o.x + i * l, y2: o.y + c * l };
}
function e3(t, e) {
  if (typeof t.createLinearGradient != "function")
    return null;
  const n = e.rect ? bf(e.rect, e.transform) : e;
  if (n.x1 === n.x2 && n.y1 === n.y2)
    return null;
  const s = t.createLinearGradient(n.x1, n.y1, n.x2, n.y2);
  for (const o of e.stops)
    s.addColorStop(o.offset, o.color);
  return s;
}
var Xa = 1e-5, n3 = 2048;
function s3(t) {
  const e = t.canvas, n = e == null ? void 0 : e.width, s = e == null ? void 0 : e.height;
  return typeof n == "number" && typeof s == "number" && n > 0 && s > 0 ? { w: n, h: s } : null;
}
function o3(t, e, n, s) {
  const o = s3(t), r = yf(s);
  if (!o || !r || typeof t.createLinearGradient != "function")
    return null;
  const i = bf(n, e.transform), c = Oo(s), a = i.x2 - i.x1, l = i.y2 - i.y1, u = i.x1 + c.x + a * Xa, h = i.y1 + c.y + l * Xa, f = a * a + l * l;
  if (!(f > 1e-12))
    return null;
  let g = 1 / 0, p = -1 / 0;
  for (const [x, E] of [
    [0, 0],
    [o.w, 0],
    [0, o.h],
    [o.w, o.h]
  ]) {
    const T = x - s[4], v = E - s[5], I = r[0] * T + r[2] * v, P = r[1] * T + r[3] * v, S = ((I - u) * a + (P - h) * l) / f;
    g = Math.min(g, S), p = Math.max(p, S);
  }
  const d = Math.floor(g), y = Math.max(d + 1, Math.ceil(p));
  if (y - d > n3)
    return null;
  const m = t.createLinearGradient(u + a * d, h + l * d, u + a * y, h + l * y), M = y - d, b = Mf(e.wrapMode).x, w = [...e.stops].reverse();
  for (let x = d; x < y; x++) {
    const E = b && (x % 2 + 2) % 2 === 1;
    for (const T of E ? w : e.stops) {
      const v = E ? 1 - T.offset : T.offset;
      m.addColorStop(Math.min(1, Math.max(0, (x - d + v) / M)), T.color);
    }
  }
  return m;
}
function r3(t) {
  const e = t.rect ? df(t) : null;
  return e && t.rect ? VM(pf(e, t.rect)) : t.stops;
}
function i3(t, e, n) {
  const s = { ...e, stops: r3(e) }, o = s.rect;
  if (s.wrapMode !== "clamp" && o && o.w !== 0) {
    const r = o3(t, s, o, n);
    if (r)
      return r;
    if (Ba(s.stops, 0) !== null) {
      const i = s.transform ?? zo, c = hi(Zt(n, i), "x", o.w), a = tc(
        t,
        o,
        c,
        1,
        s.wrapMode,
        i,
        Oo(n),
        { phaseX: 0.5, lagX: 0, lagY: 0 },
        (l) => Ba(s.stops, (l - o.x) / o.w)
      );
      if (a)
        return a;
    }
  }
  return e3(t, s);
}
function c3(t) {
  if (t.length < 3)
    return null;
  let e = 1 / 0, n = 1 / 0, s = -1 / 0, o = -1 / 0;
  for (const r of t)
    e = Math.min(e, r.x), n = Math.min(n, r.y), s = Math.max(s, r.x), o = Math.max(o, r.y);
  return s > e && o > n ? { x: e, y: n, w: s - e, h: o - n } : null;
}
function a3(t, e, n, s) {
  const o = c3(e.boundary);
  if (!o)
    return null;
  const r = e.transform ?? zo, i = Zt(s, r), c = Math.hypot(i[0], i[1]), a = Math.hypot(i[2], i[3]);
  return tc(
    t,
    o,
    hi(i, "x", o.w),
    hi(i, "y", o.h),
    n,
    r,
    Oo(s),
    { phaseX: 0, lagX: c > 0 ? 1 / c : 0, lagY: a > 0 ? 1 / a : 0 },
    (l, u) => mf(e, l, u)
  );
}
function l3(t, e) {
  if (!(e.r > 0) || typeof t.createRadialGradient != "function")
    return null;
  const n = t.createRadialGradient(e.cx, e.cy, 0, e.cx, e.cy, e.r);
  for (const s of e.stops)
    n.addColorStop(s.offset, s.color);
  return n;
}
function u3(t, e, n = zo) {
  try {
    if (e.type === "linear")
      return i3(t, e, n);
    if (e.shape) {
      const s = a3(t, e.shape, e.wrapMode, n);
      if (s)
        return s;
      X("createBrushGradient: path gradient pattern unavailable, using the radial approximation");
    }
    return l3(t, e);
  } catch {
    return null;
  }
}
var h3 = [
  [255, 0, 0, 0, 0, 0, 0, 0],
  [128, 128, 128, 128, 128, 128, 128, 128],
  [128, 64, 32, 16, 8, 4, 2, 1],
  [1, 2, 4, 8, 16, 32, 64, 128],
  [255, 128, 128, 128, 128, 128, 128, 128],
  [129, 66, 36, 24, 24, 36, 66, 129],
  [128, 0, 0, 0, 8, 0, 0, 0],
  [128, 0, 8, 0, 128, 0, 8, 0],
  [136, 0, 34, 0, 136, 0, 34, 0],
  [136, 34, 136, 34, 136, 34, 136, 34],
  [170, 68, 170, 17, 170, 68, 170, 17],
  [170, 85, 170, 81, 170, 85, 170, 21],
  [170, 85, 170, 85, 170, 85, 170, 85],
  [238, 85, 187, 85, 238, 85, 187, 85],
  [119, 221, 119, 221, 119, 221, 119, 221],
  [119, 255, 221, 255, 119, 255, 221, 255],
  [239, 255, 254, 255, 239, 255, 254, 255],
  [255, 255, 255, 247, 255, 255, 255, 127],
  [136, 68, 34, 17, 136, 68, 34, 17],
  [17, 34, 68, 136, 17, 34, 68, 136],
  [204, 102, 51, 153, 204, 102, 51, 153],
  [51, 102, 204, 153, 51, 102, 204, 153],
  [193, 224, 112, 56, 28, 14, 7, 131],
  [131, 7, 14, 28, 56, 112, 224, 193],
  [136, 136, 136, 136, 136, 136, 136, 136],
  [255, 0, 0, 0, 255, 0, 0, 0],
  [85, 85, 85, 85, 85, 85, 85, 85],
  [255, 0, 255, 0, 255, 0, 255, 0],
  [204, 204, 204, 204, 204, 204, 204, 204],
  [255, 255, 0, 0, 255, 255, 0, 0],
  [0, 0, 136, 68, 34, 17, 0, 0],
  [0, 0, 17, 34, 68, 136, 0, 0],
  [240, 0, 0, 0, 15, 0, 0, 0],
  [128, 128, 128, 128, 8, 8, 8, 8],
  [128, 8, 64, 2, 16, 1, 32, 4],
  [177, 48, 3, 27, 216, 192, 12, 141],
  [129, 66, 36, 24, 129, 66, 36, 24],
  [0, 24, 37, 192, 0, 24, 37, 192],
  [1, 2, 4, 8, 24, 36, 66, 129],
  [255, 128, 128, 128, 255, 8, 8, 8],
  [136, 84, 34, 69, 136, 20, 34, 81],
  [170, 85, 170, 85, 240, 240, 240, 240],
  [0, 16, 8, 16, 0, 128, 1, 128],
  [170, 0, 128, 0, 128, 0, 128, 0],
  [128, 0, 34, 0, 8, 0, 34, 0],
  [3, 132, 72, 48, 12, 2, 1, 1],
  [255, 102, 255, 153, 255, 102, 255, 153],
  [119, 137, 143, 143, 119, 152, 248, 248],
  [255, 136, 136, 136, 255, 136, 136, 136],
  [153, 102, 102, 153, 153, 102, 102, 153],
  [240, 240, 240, 240, 15, 15, 15, 15],
  [130, 68, 40, 16, 40, 68, 130, 1],
  [16, 56, 124, 254, 124, 56, 16, 0]
], Ya = 234, za = 64;
function f3(t, e, n) {
  const s = () => {
    const r = ((e - n) % 8 + 8) % 8;
    return r === 0 ? Ya : r === 1 || r === 7 ? za : 0;
  }, o = () => {
    const r = ((e + n - 7) % 8 + 8) % 8;
    return r === 0 ? Ya : r === 1 || r === 7 ? za : 0;
  };
  switch (t) {
    case 2:
      return s();
    case 3:
      return o();
    case 5:
      return Math.max(s(), o());
    default: {
      const r = h3[t];
      return r && r[n] & 128 >> e ? 256 : 0;
    }
  }
}
function g3(t, e, n) {
  if (n >= 256)
    return t >>> 0;
  if (n <= 0)
    return e >>> 0;
  const s = t >>> 24 & 255, o = e >>> 24 & 255, r = s * n + o * (256 - n) >> 8;
  if (r === 0)
    return 0;
  let i = r << 24;
  for (const c of [16, 8, 0]) {
    const a = Math.round((t >>> c & 255) * s / 255), l = Math.round((e >>> c & 255) * o / 255), u = a * n + l * (256 - n) >> 8;
    i |= Math.min(255, Math.round(u * 255 / r)) << c;
  }
  return i >>> 0;
}
function wf(t) {
  const e = new Uint8ClampedArray(256);
  for (let n = 0; n < 8; n++)
    for (let s = 0; s < 8; s++) {
      const o = g3(t.fore, t.back, f3(t.style, s, n)), r = (n * 8 + s) * 4;
      e[r] = o >>> 16 & 255, e[r + 1] = o >>> 8 & 255, e[r + 2] = o & 255, e[r + 3] = o >>> 24 & 255;
    }
  return e;
}
function p3(t, e, n) {
  const s = wf(t), o = n;
  return (r, i, c, a, l) => {
    for (let u = 0; u < a; u++)
      for (let h = 0; h < c; h++) {
        const f = r + h + 0.5, g = i + u + 0.5, p = Math.floor(o[0] * f + o[2] * g + o[4]), d = Math.floor(o[1] * f + o[3] * g + o[5]), y = ((p - e.x) % 8 + 8) % 8 + ((d - e.y) % 8 + 8) % 8 * 8, m = (u * c + h) * 4;
        l[m] = s[y * 4], l[m + 1] = s[y * 4 + 1], l[m + 2] = s[y * 4 + 2], l[m + 3] = s[y * 4 + 3];
      }
  };
}
function d3(t, e, n, s, o) {
  if (typeof t.createPattern != "function")
    return null;
  const r = W(8, 8);
  if (!r)
    return null;
  Q(r.ctx, K(wf(e), 8, 8), 0, 0);
  const i = Vu(t, r.canvas, "repeat");
  if (!i || typeof i.setTransform != "function")
    return i;
  const c = s[0] * s[3] - s[1] * s[2];
  if (!Number.isFinite(c) || Math.abs(c) < 1e-12)
    return i;
  const a = [
    s[3] / c,
    -s[1] / c,
    -s[2] / c,
    s[0] / c,
    (s[2] * s[5] - s[3] * s[4]) / c,
    (s[1] * s[4] - s[0] * s[5]) / c
  ], l = o, u = [l[0], l[1], l[2], l[3], l[0] * n.x + l[2] * n.y + l[4], l[1] * n.x + l[3] * n.y + l[5]], h = [
    a[0] * u[0] + a[2] * u[1],
    a[1] * u[0] + a[3] * u[1],
    a[0] * u[2] + a[2] * u[3],
    a[1] * u[2] + a[3] * u[3],
    a[0] * u[4] + a[2] * u[5] + a[4],
    a[1] * u[4] + a[3] * u[5] + a[5]
  ];
  try {
    i.setTransform({ a: h[0], b: h[1], c: h[2], d: h[3], e: h[4], f: h[5] });
  } catch {
  }
  return i;
}
function Oa(t, e, n) {
  if (!n)
    return (t % e + e) % e;
  const s = (t % (2 * e) + 2 * e) % (2 * e);
  return s < e ? s : 2 * e - 1 - s;
}
function y3(t, e, n, s, o, r, i, c, a, l) {
  const u = r ? 0.5 : 0, h = i + u, f = c + u, g = t[0] * h + t[2] * f + t[4] - u, p = t[1] * h + t[3] * f + t[5] - u, d = Math.floor(g + 1e-9), y = Math.floor(p + 1e-9), m = Math.max(0, g - d), M = Math.max(0, p - y), b = o === "clamp", w = o === "tile-flip-x" || o === "tile-flip-xy", x = o === "tile-flip-y" || o === "tile-flip-xy";
  let E = 0, T = 0, v = 0, I = 0;
  for (let P = 0; P < 4; P++) {
    const S = d + (P & 1), R = y + (P >> 1), U = (P & 1 ? m : 1 - m) * (P >> 1 ? M : 1 - M);
    if (U <= 0)
      continue;
    let A, k;
    if (b) {
      if (S < 0 || R < 0 || S >= e || R >= n)
        continue;
      A = S, k = R;
    } else
      A = Oa(S, e, w), k = Oa(R, n, x);
    const L = (k * e + A) * 4, D = U * s[L + 3];
    E += D * s[L], T += D * s[L + 1], v += D * s[L + 2], I += D;
  }
  I <= 0 || (a[l] = E / I, a[l + 1] = T / I, a[l + 2] = v / I, a[l + 3] = I);
}
var $a = [1, 0, 0, 1, 0, 0];
function m3(t, e) {
  return (t[e + 3] << 24 | t[e] << 16 | t[e + 1] << 8 | t[e + 2]) >>> 0;
}
function M3(t, e, n = $a) {
  const { width: s, height: o, rgba: r } = e;
  if (s <= 0 || o <= 0)
    return null;
  try {
    const i = e.transform ?? $a, c = (a, l) => {
      const u = Math.floor(a), h = Math.floor(l);
      return u < 0 || h < 0 || u >= s || h >= o ? null : m3(r, (h * s + u) * 4);
    };
    return tc(
      t,
      { x: 0, y: 0, w: s, h: o },
      s,
      o,
      e.wrapMode,
      i,
      Oo(n),
      { phaseX: 0, lagX: 0, lagY: 0 },
      c
    );
  } catch {
    return null;
  }
}
var $s = 1 << 24;
function b3(t, e, n, s) {
  return { cmds: [{ op: "rect", x: t, y: e, w: n, h: s }], fillRule: "nonzero", simple: !0 };
}
function xn(t) {
  return {
    cmds: t.map((e) => ({ op: "rect", x: e.x, y: e.y, w: e.w, h: e.h })),
    fillRule: "nonzero",
    simple: !0
  };
}
function Qt() {
  return { cmds: [{ op: "rect", x: 0, y: 0, w: 0, h: 0 }], fillRule: "nonzero", simple: !0 };
}
function w3(t, e, n) {
  return {
    ...t,
    cmds: t.cmds.map((s) => {
      switch (s.op) {
        case "rect":
          return { ...s, x: s.x + e, y: s.y + n };
        case "moveTo":
        case "lineTo":
          return { ...s, x: s.x + e, y: s.y + n };
        case "bezierCurveTo":
          return {
            ...s,
            cp1x: s.cp1x + e,
            cp1y: s.cp1y + n,
            cp2x: s.cp2x + e,
            cp2y: s.cp2y + n,
            x: s.x + e,
            y: s.y + n
          };
        case "arcTo":
          return { ...s, x1: s.x1 + e, y1: s.y1 + n, x2: s.x2 + e, y2: s.y2 + n };
        case "ellipse":
          return { ...s, cx: s.cx + e, cy: s.cy + n };
        case "closePath":
          return s;
      }
    })
  };
}
function $o(t, e, n) {
  return t ? t.map((s) => w3(s, e, n)) : null;
}
function fi(t) {
  return t.simple && t.fillRule === "nonzero";
}
function _e(t) {
  return t.fillRule === "evenodd" || fi(t);
}
function Ca(t) {
  let e = 0;
  for (const n of Fo(t.cmds)) {
    let s = 0;
    const o = n.length / 2;
    for (let i = 0; i < o; i++) {
      const c = (i + 1) % o;
      s += n[2 * i] * n[2 * c + 1] - n[2 * c] * n[2 * i + 1];
    }
    const r = Math.abs(s) < 1e-9 ? 0 : Math.sign(s);
    if (r !== 0) {
      if (e !== 0 && r !== e)
        return NaN;
      e = r;
    }
  }
  return e;
}
function x3(t, e) {
  if (!fi(t) || !fi(e))
    return !1;
  const n = Ca(t), s = Ca(e);
  return !Number.isNaN(n) && !Number.isNaN(s) && (n === 0 || s === 0 || n === s);
}
function is(t) {
  return {
    cmds: [
      { op: "rect", x: -$s, y: -$s, w: 2 * $s, h: 2 * $s },
      ...t.cmds
    ],
    fillRule: "evenodd",
    simple: !1
  };
}
var E3 = { x: 1 << 23, y: 1 << 23, w: 1, h: 1 };
function oe(t, e, n, s) {
  const o = s ?? Wy(t, e), r = po(t, e, n, o);
  let i = !Qy(o);
  return !s && po(t, e, n, E3).length > 0 && (i = !1), { region: [r.length > 0 ? xn(r) : Qt()], exact: i };
}
function xf(t, e, n, s) {
  switch (n) {
    case "replace":
      return { region: [e], exact: !0 };
    case "intersect":
      return { region: t ? [...t, e] : [e], exact: !0 };
    case "exclude": {
      if (_e(e)) {
        const o = is(e);
        return { region: t ? [...t, o] : [o], exact: !0 };
      }
      return oe(t, [e], n, s);
    }
    case "union":
      return t ? t.length === 1 && x3(t[0], e) ? {
        region: [
          { cmds: [...t[0].cmds, ...e.cmds], fillRule: "nonzero", simple: !1 }
        ],
        exact: !0
      } : oe(t, [e], n, s) : { region: null, exact: !0 };
    case "xor":
      return t ? t.length === 1 && _e(t[0]) && _e(e) ? {
        region: [
          { cmds: [...t[0].cmds, ...e.cmds], fillRule: "evenodd", simple: !1 }
        ],
        exact: !0
      } : oe(t, [e], n, s) : _e(e) ? { region: [is(e)], exact: !0 } : oe(t, [e], n, s);
    case "complement":
      return t ? t.length === 1 && _e(t[0]) ? { region: [e, is(t[0])], exact: !0 } : oe(t, [e], n, s) : { region: [Qt()], exact: !0 };
  }
}
function Ef(t, e, n, s) {
  if (n === "replace")
    return { region: e, exact: !0 };
  if (e && e.length === 1)
    return xf(t, e[0], n, s);
  if (!e)
    switch (n) {
      case "intersect":
        return { region: t, exact: !0 };
      case "union":
        return { region: null, exact: !0 };
      case "exclude":
        return { region: [Qt()], exact: !0 };
      case "xor":
      case "complement":
        return t ? t.length === 1 && _e(t[0]) ? { region: [is(t[0])], exact: !0 } : oe(t, e, n, s) : { region: [Qt()], exact: !0 };
    }
  switch (n) {
    case "intersect":
      return { region: t ? [...t, ...e] : e, exact: !0 };
    case "union":
      return t ? oe(t, e, n, s) : { region: null, exact: !0 };
    case "complement":
      return t ? t.length === 1 && _e(t[0]) ? { region: [...e, is(t[0])], exact: !0 } : oe(t, e, n, s) : { region: [Qt()], exact: !0 };
    case "xor":
    case "exclude":
      return oe(t, e, n, s);
  }
}
function ec(t, e) {
  for (const n of e)
    switch (n.op) {
      case "rect":
        t.rect(n.x, n.y, n.w, n.h);
        break;
      case "moveTo":
        t.moveTo(n.x, n.y);
        break;
      case "lineTo":
        t.lineTo(n.x, n.y);
        break;
      case "bezierCurveTo":
        t.bezierCurveTo(n.cp1x, n.cp1y, n.cp2x, n.cp2y, n.x, n.y);
        break;
      case "arcTo":
        t.arcTo(n.x1, n.y1, n.x2, n.y2, n.radius);
        break;
      case "ellipse":
        t.ellipse(n.cx, n.cy, n.rx, n.ry, n.rotation, n.startAngle, n.endAngle, n.ccw);
        break;
      case "closePath":
        t.closePath();
        break;
    }
}
function v3(t, e) {
  for (const n of e) {
    t.beginPath(), ec(t, n.cmds);
    try {
      t.clip(n.fillRule);
    } catch {
    }
  }
}
function we(t, e, n = !1) {
  const { ctx: s } = t;
  for (; t.clipSaveDepth > 0; )
    s.restore(), t.clipSaveDepth--;
  e && (s.save(), t.clipSaveDepth = 1, n && s.setTransform(1, 0, 0, 1, 0, 0), v3(s, e));
}
function zt(t, e) {
  return [
    t[0] * e[0] + t[1] * e[2],
    t[0] * e[1] + t[1] * e[3],
    t[2] * e[0] + t[3] * e[2],
    t[2] * e[1] + t[3] * e[3],
    t[4] * e[0] + t[5] * e[2] + e[4],
    t[4] * e[1] + t[5] * e[3] + e[5]
  ];
}
function re(t, e, n) {
  if (e & 32768)
    return wt(n);
  const s = t.objectTable.get(n & 255);
  return s && s.kind === "plus-brush" ? nc(t, s) : "rgba(0,0,0,1)";
}
function nc(t, e) {
  var n;
  if (e.gradient) {
    const s = u3(t.ctx, e.gradient, ut(t));
    if (s)
      return s;
  }
  if (e.texture) {
    const s = M3(t.ctx, e.texture, ut(t));
    if (s)
      return s;
  }
  if (e.hatch) {
    const s = d3(
      t.ctx,
      e.hatch,
      ((n = t.ext) == null ? void 0 : n.renderingOrigin) ?? { x: 0, y: 0 },
      ut(t),
      sc(t)
    );
    if (s)
      return s;
  }
  return e.color;
}
function vf(t, e) {
  let s;
  switch (t) {
    case 3:
      s = 96 / 72;
      break;
    case 4:
      s = 96;
      break;
    case 5:
      s = 96 / 300;
      break;
    case 6:
      s = 96 / 25.4;
      break;
    default:
      s = 1;
      break;
  }
  return s * e;
}
function ut(t) {
  const e = Tf(t), n = t.dpiScale, s = [e[0] * n, e[1] * n, e[2] * n, e[3] * n, e[4] * n, e[5] * n], o = t.baseTransform;
  return o ? [
    o[0] * s[0] + o[2] * s[1],
    o[1] * s[0] + o[3] * s[1],
    o[0] * s[2] + o[2] * s[3],
    o[1] * s[2] + o[3] * s[3],
    o[0] * s[4] + o[2] * s[5] + o[4],
    o[1] * s[4] + o[3] * s[5] + o[5]
  ] : s;
}
function ie(t) {
  return t.ext || (t.ext = {}), t.ext;
}
function Tf(t) {
  const e = t.ext;
  if (e != null && e.tsDevice)
    return e.tsDevice;
  const n = t.worldTransform, s = vf(t.pageUnit, t.pageScale), o = [n[0] * s, n[1] * s, n[2] * s, n[3] * s, n[4] * s, n[5] * s];
  return e != null && e.containerTransform ? zt(o, e.containerTransform) : o;
}
function sc(t) {
  const e = t.dpiScale, n = [e, 0, 0, e, 0, 0];
  return t.baseTransform ? zt(n, t.baseTransform) : n;
}
function $t(t, e = !0) {
  const n = ut(t), s = e ? If(t) : 0;
  t.ctx.setTransform(n[0], n[1], n[2], n[3], n[4] + s, n[5] + s);
}
function If(t) {
  return ot(t.ctx) ? 0 : t.antiAlias && !te(t.pixelOffsetMode ?? 0) ? 0.5 : 0;
}
function Pf(t, e) {
  const n = ie(t);
  t.saveStack.push({
    transform: [...t.worldTransform],
    snapshot: {
      clipRegion: t.clipRegion ?? null,
      antiAlias: t.antiAlias,
      interpolationMode: t.interpolationMode,
      pixelOffsetMode: t.pixelOffsetMode,
      textRenderingHint: t.textRenderingHint,
      pageUnit: t.pageUnit,
      pageScale: t.pageScale,
      ext: { ...n, multiFormatSkip: void 0, pendingEffect: void 0 }
    }
  }), t.saveIdMap.set(e, t.saveStack.length - 1);
}
function Ha(t, e) {
  const n = t.saveIdMap.get(e);
  if (n !== void 0 && n < t.saveStack.length) {
    const s = t.saveStack[n];
    t.worldTransform = [...s.transform];
    const o = s.snapshot;
    if (o) {
      t.clipRegion = o.clipRegion, t.antiAlias = o.antiAlias, t.interpolationMode = o.interpolationMode, t.pixelOffsetMode = o.pixelOffsetMode, t.textRenderingHint = o.textRenderingHint, t.pageUnit = o.pageUnit, t.pageScale = o.pageScale;
      const i = ie(t), { multiFormatSkip: c, pendingEffect: a } = i;
      for (const l of Object.keys(i))
        delete i[l];
      Object.assign(i, o.ext, { multiFormatSkip: c, pendingEffect: a });
    }
    t.saveStack.length = n;
    const r = /* @__PURE__ */ new Map();
    for (const [i, c] of t.saveIdMap)
      c < n && r.set(i, c);
    t.saveIdMap = r, o && En(t);
  }
}
function Ga(t, e, n) {
  var i;
  const s = Tf(t), o = xo((i = t.ext) == null ? void 0 : i.containerClip, t.clipRegion);
  Pf(t, e);
  const r = ie(t);
  r.containerTransform = n ? zt(n, s) : s, r.tsDevice = null, r.containerClip = o, r.compositingMode = void 0, r.compositingQuality = void 0, r.textContrast = void 0, t.clipRegion = null, t.worldTransform = [1, 0, 0, 1, 0, 0], t.pageUnit = 2, t.pageScale = 1, t.antiAlias = !1, t.interpolationMode = void 0, t.pixelOffsetMode = void 0, t.textRenderingHint = void 0, En(t);
}
function T3(t, e, n) {
  const s = vf(n, 1), o = e.w * s, r = e.h * s;
  if (!(Math.abs(o) > 0 && Math.abs(r) > 0) || ![t.x, t.y, t.w, t.h, o, r].every(Number.isFinite))
    return null;
  const i = t.w / o, c = t.h / r;
  return [i, 0, 0, c, t.x - e.x * s * i, t.y - e.y * s * c];
}
function xo(t, e) {
  const n = [...t ?? [], ...e ?? []];
  return t || e ? n : null;
}
function Cs(t) {
  return ut(t);
}
function Sf(t, e, n, s, o) {
  const r = (a, l) => o[0] * a + o[2] * l + o[4], i = (a, l) => o[1] * a + o[3] * l + o[5];
  return { cmds: [
    { op: "moveTo", x: r(t, e), y: i(t, e) },
    { op: "lineTo", x: r(t + n, e), y: i(t + n, e) },
    { op: "lineTo", x: r(t + n, e + s), y: i(t + n, e + s) },
    { op: "lineTo", x: r(t, e + s), y: i(t, e + s) },
    { op: "closePath" }
  ], fillRule: "nonzero", simple: !0 };
}
function I3(t, e) {
  return hh(t.path, e);
}
var P3 = {
  0: "intersect",
  // legacy/lenient: treat 0 as And
  1: "intersect",
  // RegionNodeDataTypeAnd
  2: "union",
  // RegionNodeDataTypeOr
  3: "xor",
  // RegionNodeDataTypeXor
  4: "exclude",
  // RegionNodeDataTypeExclude
  5: "complement"
  // RegionNodeDataTypeComplement
}, S3 = 64;
function Eo(t, e, n = 0, s) {
  if (n > S3)
    return { region: [Qt()], exact: !1 };
  switch (t.type) {
    case "rect":
      return { region: [Sf(t.x, t.y, t.width, t.height, e)], exact: !0 };
    case "path":
      return { region: [I3(t, e)], exact: !0 };
    case "infinite":
      return { region: null, exact: !0 };
    case "empty":
      return { region: [Qt()], exact: !0 };
    case "combine": {
      const o = Eo(t.left, e, n + 1, s), r = Eo(t.right, e, n + 1, s), i = P3[t.combineMode] ?? "intersect", c = Ef(o.region, r.region, i, s);
      return { region: c.region, exact: c.exact && o.exact && r.exact };
    }
  }
}
var R3 = {
  0: "replace",
  1: "intersect",
  2: "union",
  3: "xor",
  4: "exclude",
  5: "complement"
};
function oc(t) {
  if (!(t.canvasW === void 0 || t.canvasH === void 0))
    return { x: 0, y: 0, w: t.canvasW, h: t.canvasH };
}
function Rf(t) {
  const e = t.ext;
  return xo(xo(e == null ? void 0 : e.containerClip, t.clipRegion ?? void 0) ?? void 0, (e == null ? void 0 : e.tsClip) ?? void 0);
}
function En(t) {
  we(t, Rf(t), !0);
}
function Af(t, e) {
  const n = oc(t);
  if (t.gdiAntialias === !0 || !e || !n || ot(t.ctx))
    return e;
  const s = te(t.pixelOffsetMode ?? 0), o = Am(
    e.map((c) => ({ build: (a) => ec(a, c.cmds), evenOdd: c.fillRule === "evenodd" })),
    n,
    s
  );
  if (o)
    return [xn(o)];
  const r = (s ? 0 : 0.5) - 1 / 32, i = $o(e, r, r);
  return [xn(po(i, null, "intersect", n))];
}
function Uf(t, e, n, s) {
  const o = Af(t, e), r = R3[n], i = Ef(
    t.clipRegion ?? null,
    o,
    r ?? "intersect",
    oc(t)
  );
  i.exact, t.clipRegion = i.region, En(t);
}
function ja(t, e, n, s) {
  Uf(t, [e], n);
}
function Ue(t) {
  var e;
  (e = t.ext) != null && e.tsDevice && (t.ext.tsDevice = null);
}
function A3(t, e, n) {
  const { view: s } = t;
  if (n < 40 || s.getUint32(e, !0) & 1 && n < 296)
    return;
  const r = s.getUint8(e + 4);
  t.antiAlias = r === 2 || r === 4 || r === 5, t.textRenderingHint = s.getUint8(e + 5);
  const i = ie(t);
  i.compositingMode = s.getUint8(e + 6), i.compositingQuality = s.getUint8(e + 7), i.renderingOrigin = { x: s.getInt16(e + 8, !0), y: s.getInt16(e + 10, !0) }, i.textContrast = s.getUint16(e + 12, !0), t.interpolationMode = s.getUint8(e + 14);
  const c = [0, 4, 8, 12, 16, 20].map((a) => s.getFloat32(e + 16 + a, !0));
  c.every(Number.isFinite) && (i.tsDevice = c);
}
function U3(t, e, n, s) {
  const o = s & 32767, r = e + n, i = [];
  if (!(s & 32768)) {
    if (e + o * 16 > r)
      return null;
    for (let u = 0; u < o; u++) {
      const h = e + u * 16;
      i.push({ l: t.getInt32(h, !0), t: t.getInt32(h + 4, !0), r: t.getInt32(h + 8, !0), b: t.getInt32(h + 12, !0) });
    }
    return i;
  }
  let c = e;
  const a = () => {
    if (c >= r)
      return null;
    const u = t.getUint8(c);
    if (u & 128) {
      c += 1;
      const f = u & 127;
      return f & 64 ? f - 128 : f;
    }
    if (c + 2 > r)
      return null;
    const h = u << 8 | t.getUint8(c + 1);
    return c += 2, h & 16384 ? h - 32768 : h;
  };
  let l = { l: 0, r: 0, b: 0 };
  for (let u = 0; u < o; u++) {
    const h = a(), f = a(), g = a(), p = a();
    if (h === null || f === null || g === null || p === null)
      return null;
    const d = l.b + f, y = { l: l.l + h, t: d, r: l.r + g, b: d + p };
    i.push(y), l = y;
  }
  return i;
}
function k3(t, e, n, s) {
  const o = U3(t.view, n, s, e);
  if (!o)
    return;
  const r = sc(t), i = (h, f) => r[0] * h + r[2] * f + r[4], c = (h, f) => r[1] * h + r[3] * f + r[5], a = [];
  for (const h of o)
    h.r <= h.l || h.b <= h.t || a.push(
      { op: "moveTo", x: i(h.l, h.t), y: c(h.l, h.t) },
      { op: "lineTo", x: i(h.r, h.t), y: c(h.r, h.t) },
      { op: "lineTo", x: i(h.r, h.b), y: c(h.r, h.b) },
      { op: "lineTo", x: i(h.l, h.b), y: c(h.l, h.b) },
      { op: "closePath" }
    );
  const l = a.length > 0 ? { cmds: a, fillRule: "nonzero", simple: o.length === 1 } : Qt(), u = ie(t);
  u.tsClip = xo(Rf(t) ?? void 0, Af(t, [l]) ?? void 0), En(t);
}
function L3(t, e, n, s, o) {
  const { view: r } = t;
  switch (e) {
    case og:
      return Ue(t), o >= 24 && (t.worldTransform = [
        r.getFloat32(s, !0),
        r.getFloat32(s + 4, !0),
        r.getFloat32(s + 8, !0),
        r.getFloat32(s + 12, !0),
        r.getFloat32(s + 16, !0),
        r.getFloat32(s + 20, !0)
      ]), !0;
    case rg:
      return Ue(t), t.worldTransform = [1, 0, 0, 1, 0, 0], !0;
    case ig: {
      if (Ue(t), o >= 24) {
        const i = [
          r.getFloat32(s, !0),
          r.getFloat32(s + 4, !0),
          r.getFloat32(s + 8, !0),
          r.getFloat32(s + 12, !0),
          r.getFloat32(s + 16, !0),
          r.getFloat32(s + 20, !0)
        ];
        n & 8192 ? t.worldTransform = zt(t.worldTransform, i) : t.worldTransform = zt(i, t.worldTransform);
      }
      return !0;
    }
    case cg: {
      if (Ue(t), o >= 8) {
        const i = r.getFloat32(s, !0), c = r.getFloat32(s + 4, !0), a = [1, 0, 0, 1, i, c];
        n & 8192 ? t.worldTransform = zt(t.worldTransform, a) : t.worldTransform = zt(a, t.worldTransform);
      }
      return !0;
    }
    case ag: {
      if (Ue(t), o >= 8) {
        const i = r.getFloat32(s, !0), c = r.getFloat32(s + 4, !0), a = [i, 0, 0, c, 0, 0];
        n & 8192 ? t.worldTransform = zt(t.worldTransform, a) : t.worldTransform = zt(a, t.worldTransform);
      }
      return !0;
    }
    case lg: {
      if (Ue(t), o >= 4) {
        const i = r.getFloat32(s, !0) * Math.PI / 180, c = Math.cos(i), a = Math.sin(i), l = [c, a, -a, c, 0, 0];
        n & 8192 ? t.worldTransform = zt(t.worldTransform, l) : t.worldTransform = zt(l, t.worldTransform);
      }
      return !0;
    }
    case tg:
      return o >= 4 && Pf(t, r.getUint32(s, !0)), !0;
    case eg:
      return o >= 4 && Ha(t, r.getUint32(s, !0)), !0;
    case fg: {
      if (o >= 16) {
        const i = n >> 8 & 15, c = r.getFloat32(s, !0), a = r.getFloat32(s + 4, !0), l = r.getFloat32(s + 8, !0), u = r.getFloat32(s + 12, !0), h = Sf(c, a, l, u, Cs(t));
        ja(t, h, i);
      }
      return !0;
    }
    case hg:
      return t.clipRegion = null, En(t), !0;
    case pg: {
      const i = n & 255, c = n >> 8 & 15, a = t.objectTable.get(i);
      if (a && a.kind === "plus-region" && a.nodes.length > 0) {
        const l = Eo(
          a.nodes[0],
          Cs(t),
          0,
          oc(t)
        );
        l.exact, Uf(t, l.region, c);
      }
      return !0;
    }
    case gg: {
      const i = n & 255, c = n >> 8 & 15, a = t.objectTable.get(i);
      if (a && a.kind === "plus-path") {
        const l = hh(a, Cs(t));
        ja(t, l, c);
      }
      return !0;
    }
    case yg: {
      if (o >= 8) {
        const i = r.getFloat32(s, !0), c = r.getFloat32(s + 4, !0);
        if (t.clipRegion) {
          const a = Cs(t), l = a[0] * i + a[2] * c, u = a[1] * i + a[3] * c;
          t.clipRegion = $o(t.clipRegion, l, u), En(t);
        }
      }
      return !0;
    }
    case ng:
      return o >= 4 && Ga(t, r.getUint32(s, !0), null), !0;
    case xg: {
      if (o >= 36) {
        const i = (a) => r.getFloat32(s + a, !0), c = T3(
          { x: i(0), y: i(4), w: i(8), h: i(12) },
          { x: i(16), y: i(20), w: i(24), h: i(28) },
          n & 255
        );
        Ga(t, r.getUint32(s + 32, !0), c ?? [1, 0, 0, 1, 0, 0]);
      }
      return !0;
    }
    case sg:
      return o >= 4 && Ha(t, r.getUint32(s, !0)), !0;
    case ug: {
      Ue(t);
      const i = n & 255, c = o >= 4 ? r.getFloat32(s, !0) : 1;
      return t.pageUnit = i, t.pageScale = c, !0;
    }
    case K2:
      return t.interpolationMode = n & 255, !0;
    case Z2:
      return t.pixelOffsetMode = n & 255, !0;
    case J2:
      return t.textRenderingHint = n & 255, !0;
    case q2:
      return t.antiAlias = (n & 1) !== 0, !0;
    case Q2:
      return ie(t).compositingQuality = n & 255, !0;
    case Rg:
      return ie(t).compositingMode = n & 255, !0;
    case Pg:
      return o >= 8 && (ie(t).renderingOrigin = { x: r.getInt32(s, !0), y: r.getInt32(s + 4, !0) }), !0;
    case Sg:
      return ie(t).textContrast = n & 4095, !0;
    case Ug:
      return A3(t, s, o), !0;
    case kg:
      return k3(t, n, s, o), !0;
    default:
      return !1;
  }
}
var kf = [1, 0, 0, 1, 0, 0], rc = 16 * 1024 * 1024, F3 = 1e-4;
function Un(t) {
  const e = t[0] * t[3] - t[1] * t[2];
  if (!Number.isFinite(e) || Math.abs(e) < 1e-12)
    return null;
  const n = t[3] / e, s = -t[1] / e, o = -t[2] / e, r = t[0] / e;
  return [n, s, o, r, -(n * t[4] + o * t[5]), -(s * t[4] + r * t[5])];
}
function D3(t) {
  const e = t.canvas, n = e == null ? void 0 : e.width, s = e == null ? void 0 : e.height;
  return typeof n == "number" && typeof s == "number" && n > 0 && s > 0 ? { w: n, h: s } : null;
}
function _3(t, e, n = !1) {
  const { width: s, height: o, rgba: r, wrapMode: i } = t;
  if (s <= 0 || o <= 0)
    return null;
  const c = Un(Zt(e, t.transform ?? kf));
  return c ? (a, l, u, h, f) => {
    for (let g = 0; g < h; g++)
      for (let p = 0; p < u; p++)
        y3(c, s, o, r, i, n, a + p, l + g, f, (g * u + p) * 4);
  } : null;
}
function N3(t) {
  if (t.length < 3)
    return null;
  let e = 1 / 0, n = 1 / 0, s = -1 / 0, o = -1 / 0;
  for (const r of t)
    e = Math.min(e, r.x), n = Math.min(n, r.y), s = Math.max(s, r.x), o = Math.max(o, r.y);
  return s > e && o > n ? { x: e, y: n, w: s - e, h: o - n } : null;
}
function Wa(t, e, n, s, o) {
  const r = t - e, i = Math.floor(r / n), c = r - i * n;
  return s && (i % 2 + 2) % 2 === 1 ? e + n - o - c : e + c;
}
function B3(t, e, n) {
  const s = N3(t.boundary), o = Zt(n, t.transform ?? kf), r = Un(o);
  if (!s || !r)
    return null;
  const i = Math.hypot(o[0], o[1]), c = Math.hypot(o[2], o[3]), a = i > 0 ? 1 / i : 0, l = c > 0 ? 1 / c : 0, u = e === "tile-flip-x" || e === "tile-flip-xy", h = e === "tile-flip-y" || e === "tile-flip-xy", f = e === "clamp" ? F3 : 0;
  return (g, p, d, y, m) => {
    for (let M = 0; M < y; M++) {
      const b = p + M + f;
      for (let w = 0; w < d; w++) {
        const x = g + w + f;
        let E = r[0] * x + r[2] * b + r[4], T = r[1] * x + r[3] * b + r[5];
        e !== "clamp" && (E = Wa(E, s.x, s.w, u, a), T = Wa(T, s.y, s.h, h, l));
        const v = mf(t, E, T);
        if (v === null)
          continue;
        const I = (M * d + w) * 4;
        m[I] = v >>> 16 & 255, m[I + 1] = v >>> 8 & 255, m[I + 2] = v & 255, m[I + 3] = v >>> 24 & 255;
      }
    }
  };
}
function Co(t, e, n) {
  if (e & 32768)
    return null;
  const s = t.objectTable.get(n & 255);
  return !s || s.kind !== "plus-brush" ? null : Lf(t, s);
}
function Lf(t, e) {
  var s;
  const n = ut(t);
  if (e.hatch && !ot(t.ctx)) {
    const o = Un(sc(t));
    if (o)
      return p3(e.hatch, ((s = t.ext) == null ? void 0 : s.renderingOrigin) ?? { x: 0, y: 0 }, o);
  }
  return e.texture ? _3(e.texture, n, te(t.pixelOffsetMode ?? 0)) : e.gradient && e.gradient.type === "radial" && e.gradient.shape ? B3(e.gradient.shape, e.gradient.wrapMode, n) : e.gradient && e.gradient.type === "linear" && !ot(t.ctx) ? KM(e.gradient, n, te(t.pixelOffsetMode ?? 0)) : null;
}
function Ho(t, e, n, s = 0) {
  if (!t || t.length === 0)
    return { x: 0, y: 0, w: n.w, h: n.h };
  let o = 1 / 0, r = 1 / 0, i = -1 / 0, c = -1 / 0;
  for (const g of t) {
    const p = e[0] * g.x + e[2] * g.y + e[4], d = e[1] * g.x + e[3] * g.y + e[5];
    o = Math.min(o, p), r = Math.min(r, d), i = Math.max(i, p), c = Math.max(c, d);
  }
  if (!Number.isFinite(o + r + i + c))
    return { x: 0, y: 0, w: n.w, h: n.h };
  const a = Math.ceil(Math.max(0, s)) + 1, l = Math.max(0, Math.floor(o) - a), u = Math.max(0, Math.floor(r) - a), h = Math.min(n.w, Math.ceil(i) + a), f = Math.min(n.h, Math.ceil(c) + a);
  return h > l && f > u ? { x: l, y: u, w: h - l, h: f - u } : null;
}
function gn(t, e, n, s, o, r = "nonzero") {
  const { ctx: i } = t, c = D3(i);
  if (!c || typeof i.clip != "function" || typeof i.drawImage != "function")
    return !1;
  const a = cc(t);
  if (a !== "canvas") {
    const g = Ff(t, e, n);
    if (g && Y3(t, g, s, o, r, c, a))
      return !0;
  }
  const l = Co(t, e, n);
  if (!l)
    return !1;
  const u = Ho(o, ut(t), c);
  if (!u)
    return !0;
  if (u.w * u.h > rc)
    return !1;
  const h = W(u.w, u.h);
  if (!h)
    return !1;
  const f = new Uint8ClampedArray(u.w * u.h * 4);
  l(u.x, u.y, u.w, u.h, f), Q(h.ctx, K(f, u.w, u.h), 0, 0), i.save();
  try {
    $t(t), i.beginPath(), s(i), i.clip(r), i.setTransform(1, 0, 0, 1, 0, 0), i.imageSmoothingEnabled = !1, i.drawImage.call(i, h.canvas, u.x, u.y);
  } finally {
    i.restore();
  }
  return !0;
}
function ic(t, e, n, s, o = "canvas", r, i = !0) {
  const c = o === !0 ? "aliased" : o === !1 ? "canvas" : o, a = c === "aliased", l = c === "gdiplus-aa", { ctx: u } = t;
  if (typeof u.drawImage != "function" || n.w * n.h > rc)
    return !1;
  const h = W(n.w, n.h), f = W(n.w, n.h);
  if (!h || !f || typeof h.ctx.getImageData != "function")
    return !1;
  const g = ut(t), p = h.ctx, d = a ? X3(t) : i ? If(t) : 0;
  p.setTransform(g[0], g[1], g[2], g[3], g[4] - n.x + d + Number(wc.HDX ?? 0), g[5] - n.y + d + Number(wc.HDY ?? 0)), p.fillStyle = "#000", p.strokeStyle = "#000", s(c !== "canvas" ? Mm(p, g) : p);
  const y = V(p, 0, 0, n.w, n.h).data;
  if (l && r && typeof p.isPointInPath == "function")
    for (let M = 3; M < y.length; M += 4) {
      const b = y[M];
      if (b === 0 || b === 255)
        continue;
      const w = (M - 3) / 4, x = w % n.w, E = Math.floor(w / n.w);
      let T = 0;
      for (let v = 0; v < 4; v++)
        for (let I = 0; I < 8; I++)
          r(p, x + I / 8 + Va, E + v / 4 + Va) && T++;
      y[M] = Math.round(T * 255 / 32);
    }
  if (a) {
    const M = r && typeof p.isPointInPath == "function" ? r : null;
    for (let b = 3; b < y.length; b += 4) {
      const w = y[b];
      if (!(w === 0 || w === 255))
        if (M) {
          const x = (b - 3) / 4, E = x % n.w + 0.5, T = Math.floor(x / n.w) + 0.5;
          y[b] = M(p, E, T) ? 255 : 0;
        } else
          y[b] = w >= 128 ? 255 : 0;
    }
  }
  const m = new Uint8ClampedArray(n.w * n.h * 4);
  e(n.x, n.y, n.w, n.h, m);
  for (let M = 3; M < m.length; M += 4)
    m[M] = (m[M] * y[M] + 127) / 255;
  Q(f.ctx, K(m, n.w, n.h), 0, 0), u.save();
  try {
    u.setTransform(1, 0, 0, 1, 0, 0), u.imageSmoothingEnabled = !1, u.drawImage.call(u, f.canvas, n.x, n.y);
  } finally {
    u.restore();
  }
  return !0;
}
function X3(t) {
  return (te(t.pixelOffsetMode ?? 0) ? 0 : 0.5) - 1 / 32;
}
var Va = 1 / 1024;
function cc(t) {
  return t.gdiAntialias === !0 || ot(t.ctx) ? "canvas" : t.antiAlias ? "gdiplus-aa" : "aliased";
}
function vo(t) {
  const e = t >>> 24 & 255, n = t >>> 16 & 255, s = t >>> 8 & 255, o = t & 255;
  return (r, i, c, a, l) => {
    for (let u = 0; u < c * a * 4; u += 4)
      l[u] = n, l[u + 1] = s, l[u + 2] = o, l[u + 3] = e;
  };
}
function Go(t) {
  const e = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)$/.exec(t);
  if (e) {
    const s = e[4] === void 0 ? 1 : Number(e[4]), o = (r) => Math.min(255, Math.max(0, Math.round(Number(r))));
    return (Math.round(Math.min(1, Math.max(0, s)) * 255) << 24 | o(e[1]) << 16 | o(e[2]) << 8 | o(e[3])) >>> 0;
  }
  const n = /^#([0-9a-f]{6})$/i.exec(t);
  return n ? (4278190080 | parseInt(n[1], 16)) >>> 0 : null;
}
function Ff(t, e, n) {
  if (e & 32768)
    return vo(n >>> 0);
  const s = Co(t, e, n);
  if (s)
    return s;
  const o = t.objectTable.get(n & 255), r = o && o.kind === "plus-brush" ? Go(o.color) : null;
  return r === null ? null : vo(r);
}
function Y3(t, e, n, s, o, r, i) {
  const c = ut(t);
  let a = null;
  try {
    a = Sm(n, c, i === "aliased");
  } catch {
    a = null;
  }
  if (a) {
    const u = Ci(a, r);
    if (!u)
      return !0;
    if (u.w * u.h <= rc) {
      const h = te(t.pixelOffsetMode ?? 0), f = Sn(a, o === "evenodd", i === "gdiplus-aa", h, u);
      return xs(t, e, u, f, 1, !0);
    }
  }
  const l = Ho(s, c, r);
  return l ? ic(
    t,
    e,
    l,
    (u) => {
      u.beginPath(), n(u), u.fill(o);
    },
    i,
    (u, h, f) => u.isPointInPath(h, f, o)
  ) : !0;
}
function z3(t, e, n) {
  for (let s = 0; s < n.length; s++) {
    const o = s * 4, r = n[s], i = t[o + 3];
    if (r === 0 || i === 0) {
      t[o + 3] = 0;
      continue;
    }
    if (e[o + 3] !== 255)
      return !1;
    const c = r === 255 ? 32 : Math.round(r * 32 / 255), a = Math.round(i * c / 32);
    for (let l = 0; l < 3; l++) {
      const u = Math.round(t[o + l] * i / 255);
      t[o + l] = Math.min(255, Math.round(u * c / 32) + Math.round(e[o + l] * (255 - a) / 255));
    }
    t[o + 3] = 255;
  }
  return !0;
}
function O3(t, e, n) {
  for (let s = 0; s < n.length; s++) {
    const o = s * 4, r = n[s];
    if (r === 0)
      t[o + 3] = 0;
    else if (r !== 255) {
      const i = Math.round(r * 32 / 255);
      t[o + 3] = Math.round(t[o + 3] * i / 32);
    }
  }
  return t;
}
function $3(t, e, n, s) {
  const { ctx: o } = t, r = W(e.w, e.h), i = W(e.w, e.h);
  if (!r || !i)
    return !1;
  const c = new Uint8ClampedArray(e.w * e.h * 4);
  for (let a = 0; a < s.length; a++)
    c[a * 4 + 3] = s[a] ? 255 : 0;
  Q(r.ctx, K(c, e.w, e.h), 0, 0), Q(i.ctx, K(n, e.w, e.h), 0, 0), o.save();
  try {
    o.setTransform(1, 0, 0, 1, 0, 0), o.imageSmoothingEnabled = !1;
    const a = o.drawImage;
    o.globalCompositeOperation = "destination-out", a.call(o, r.canvas, e.x, e.y), o.globalCompositeOperation = "source-over", a.call(o, i.canvas, e.x, e.y);
  } finally {
    o.restore();
  }
  return !0;
}
function xs(t, e, n, s, o = 1, r = !1, i = 1) {
  var u;
  const { ctx: c } = t, a = W(n.w, n.h);
  if (typeof c.drawImage != "function" || !a)
    return !1;
  const l = new Uint8ClampedArray(n.w * n.h * 4);
  if (e(n.x, n.y, n.w, n.h, l), o === 1 && ((u = t.ext) == null ? void 0 : u.compositingMode) === 1 && typeof c.getImageData == "function") {
    const h = V(c, n.x, n.y, n.w, n.h).data;
    return $3(t, n, O3(l, h, s), s);
  }
  if (o === 1 && r && typeof c.getImageData == "function") {
    const h = V(c, n.x, n.y, n.w, n.h).data;
    if (z3(l, h, s)) {
      Q(a.ctx, K(l, n.w, n.h), 0, 0), c.save();
      try {
        c.setTransform(1, 0, 0, 1, 0, 0), c.imageSmoothingEnabled = !1, c.drawImage.call(c, a.canvas, n.x, n.y);
      } finally {
        c.restore();
      }
      return !0;
    }
    e(n.x, n.y, n.w, n.h, l);
  }
  if (o === 3) {
    if (typeof c.getImageData != "function")
      return !1;
    const h = V(c, n.x, n.y, n.w, n.h).data;
    for (let f = 0; f < n.w * n.h; f++) {
      const g = f * 4, p = l[g + 3] / 255;
      let d = !1;
      for (let y = 0; y < 3; y++) {
        const m = s[f * 3 + y] / 255 * p;
        if (m > 0 && (d = !0), i === 1)
          l[g + y] = h[g + y] + (l[g + y] - h[g + y]) * m;
        else {
          const M = Math.pow(h[g + y] / 255, i), b = Math.pow(l[g + y] / 255, i);
          l[g + y] = 255 * Math.pow(M + (b - M) * m, 1 / i);
        }
      }
      l[g + 3] = d ? 255 : 0;
    }
  } else
    for (let h = 3; h < l.length; h += 4)
      l[h] = (l[h] * s[(h - 3) / 4] + 127) / 255;
  Q(a.ctx, K(l, n.w, n.h), 0, 0), c.save();
  try {
    c.setTransform(1, 0, 0, 1, 0, 0), c.imageSmoothingEnabled = !1, c.drawImage.call(c, a.canvas, n.x, n.y);
  } finally {
    c.restore();
  }
  return !0;
}
function C3(t) {
  const { state: e } = t, s = !jt(e.rop2).exact && ys(e.rop2), o = e.penStyle === 5 || (e.penStyle === 0 || e.penStyle === 6) && Ee(t);
  return s || t.gdiAntialias === !1 || Gt(e).kind === "tile" || !o;
}
function ee(t) {
  return t.rasterPath ?? (t.rasterPath = new ht()), t.rasterPath;
}
function H3(t) {
  return t.lineStyle ?? (t.lineStyle = { pos: 0 }), t.lineStyle;
}
function kn(t) {
  t.lineStyle = { pos: 0 };
}
function xe(t) {
  const e = t.curFix, { state: n } = t;
  return e && e.lx === n.curX && e.ly === n.curY ? [e.x, e.y] : $(t, n.curX, n.curY);
}
function qa(t, e, n) {
  const s = rt(t), o = n === 0 ? Math.hypot(s[0], s[1]) : Math.hypot(s[2], s[3]);
  return Math.round(Math.abs(e) * o * 16);
}
function G3(t, e, n) {
  const { ctx: s, view: o } = t;
  if (n >= 20) {
    const r = o.getInt32(e, !0), i = o.getInt32(e + 4, !0), c = uM(t.state, o, e + 8), a = Bt(t) ? Z(t, r, i) : { x: ft(t, r), y: gt(t, i) };
    s.fillStyle = c, s.fillRect(a.x, a.y, 1, 1);
  }
  return !0;
}
function j3(t, e, n) {
  const { view: s, state: o, inPath: r } = t;
  if (n >= 16 && (o.curX = s.getInt32(e, !0), o.curY = s.getInt32(e + 4, !0), kn(t), t.curFix = void 0, r)) {
    const i = Bt(t) ? Z(t, o.curX, o.curY) : { x: ft(t, o.curX), y: gt(t, o.curY) };
    Ht(t).moveTo(i.x, i.y);
    const c = $(t, o.curX, o.curY);
    ee(t).moveTo(c[0], c[1]);
  }
  return !0;
}
function W3(t, e, n) {
  const { view: s, state: o, inPath: r } = t;
  if (n >= 16) {
    const i = s.getInt32(e, !0), c = s.getInt32(e + 4, !0), a = Bt(t), l = a ? Z(t, i, c) : { x: ft(t, i), y: gt(t, c) }, u = $(t, i, c);
    if (r)
      Ht(t).lineTo(l.x, l.y), ee(t).lineTo(u[0], u[1]);
    else {
      const h = a ? Z(t, o.curX, o.curY) : { x: ft(t, o.curX), y: gt(t, o.curY) }, f = xe(t);
      Mt(t, {
        build: (g) => {
          g.beginPath(), g.moveTo(h.x, h.y), g.lineTo(l.x, l.y);
        },
        raster: () => {
          const g = new ht();
          return g.moveTo(f[0], f[1]), g.lineTo(u[0], u[1]), g;
        },
        fill: !1,
        stroke: !0,
        style: H3(t)
      });
    }
    o.curX = i, o.curY = c;
  }
  return !0;
}
function V3(t, e, n) {
  const { ctx: s, view: o, state: r, inPath: i } = t;
  if (n >= 24) {
    const c = o.getInt32(e, !0), a = o.getInt32(e + 4, !0), l = o.getInt32(e + 8, !0), u = o.getInt32(e + 12, !0), h = Rn(t, c, a, l, u);
    if (i || kn(t), Bt(t)) {
      const m = Z(t, c, a), M = Z(t, l, a), b = Z(t, l, u), w = Z(t, c, u), x = (E) => {
        E.moveTo(m.x, m.y), E.lineTo(M.x, M.y), E.lineTo(b.x, b.y), E.lineTo(w.x, w.y), E.closePath();
      };
      return i ? (x(Ht(t)), ee(t).append(ns(h))) : Mt(t, {
        build: (E) => {
          E.beginPath(), x(E);
        },
        raster: () => ns(h),
        rectangle: !0,
        fill: !0,
        stroke: !0,
        axisRect: Ms(h) ? {} : void 0
      }), !0;
    }
    const g = ft(t, c), p = gt(t, a), d = _t(t, l - c), y = Nt(t, u - a);
    if (i)
      Ht(t).rect(g, p, d, y), ee(t).append(ns(h));
    else if (C3(t))
      Mt(t, {
        build: (m) => {
          m.beginPath(), m.rect(g, p, d, y);
        },
        raster: () => ns(h),
        rectangle: !0,
        fill: !0,
        stroke: !0,
        axisRect: { interior: q3(r, g, p, d, y, wn(t)) }
      });
    else {
      Bi(s, r), s.fillRect(g, p, d, y), Ni(s, r), s.lineWidth = 1;
      const m = ws(r, wn(t));
      s.strokeRect(g + m, p + m, d, y);
    }
  }
  return !0;
}
function q3(t, e, n, s, o, r = 1) {
  if (ws(t, r) === 0 || bs(t, r) !== 1)
    return;
  const i = Math.min(e, e + s), c = Math.min(n, n + o), a = Math.abs(s) - 1, l = Math.abs(o) - 1;
  if (!(a <= 0 || l <= 0))
    return (u) => {
      u.beginPath(), u.rect(i + 1, c + 1, a, l);
    };
}
var Ja = 0.5522847498307936;
function Ka(t, e, n, s, o, r, i, c) {
  const a = Math.min(e, s), l = Math.max(e, s), u = Math.min(n, o), h = Math.max(n, o), f = Math.min(Math.abs(r), (l - a) / 2), g = Math.min(Math.abs(i), (h - u) / 2);
  if (!c) {
    if (f <= 0 || g <= 0) {
      t.rect(a, u, l - a, h - u);
      return;
    }
    const b = Math.PI / 2;
    t.moveTo(a + f, u), t.lineTo(l - f, u), t.ellipse(l - f, u + g, f, g, 0, -b, 0), t.lineTo(l, h - g), t.ellipse(l - f, h - g, f, g, 0, 0, b), t.lineTo(a + f, h), t.ellipse(a + f, h - g, f, g, 0, b, 2 * b), t.lineTo(a, u + g), t.ellipse(a + f, u + g, f, g, 0, 2 * b, 3 * b), t.closePath();
    return;
  }
  const p = (b, w) => {
    const x = c(b, w);
    t.moveTo(x.x, x.y);
  }, d = (b, w) => {
    const x = c(b, w);
    t.lineTo(x.x, x.y);
  }, y = (b, w, x, E, T, v) => {
    const I = c(b, w), P = c(x, E), S = c(T, v);
    t.bezierCurveTo(I.x, I.y, P.x, P.y, S.x, S.y);
  };
  if (f <= 0 || g <= 0) {
    p(a, u), d(l, u), d(l, h), d(a, h), t.closePath();
    return;
  }
  const m = f * Ja, M = g * Ja;
  p(a + f, u), d(l - f, u), y(l - f + m, u, l, u + g - M, l, u + g), d(l, h - g), y(l, h - g + M, l - f + m, h, l - f, h), d(a + f, h), y(a + f - m, h, a, h - g + M, a, h - g), d(a, u + g), y(a, u + g - M, a + f - m, u, a + f, u), t.closePath();
}
function J3(t, e, n) {
  const { view: s, inPath: o } = t;
  if (n >= 32) {
    const r = s.getInt32(e, !0), i = s.getInt32(e + 4, !0), c = s.getInt32(e + 8, !0), a = s.getInt32(e + 12, !0), l = s.getInt32(e + 16, !0), u = s.getInt32(e + 20, !0), h = Bt(t) ? (g) => Ka(g, r, i, c, a, l / 2, u / 2, (p, d) => Z(t, p, d)) : (g) => Ka(
      g,
      ft(t, r),
      gt(t, i),
      ft(t, c),
      gt(t, a),
      _t(t, l) / 2,
      Nt(t, u) / 2,
      null
    ), f = (g = Rn(t, r, i, c, a)) => lf(g, qa(t, l, 0), qa(t, u, 1));
    o ? (h(Ht(t)), ee(t).append(f())) : (kn(t), Mt(t, {
      build: (g) => {
        g.beginPath(), h(g);
      },
      raster: () => f(ac(t, r, i, c, a)),
      roundPen: !0,
      fill: !0,
      stroke: !0
    }));
  }
  return !0;
}
function ac(t, e, n, s, o) {
  const r = Rn(t, e, n, s, o);
  if (t.state.penStyle !== 5)
    return r;
  const i = rt(t);
  if (Math.abs(i[0]) !== 1 || Math.abs(i[3]) !== 1 || i[1] !== 0 || i[2] !== 0)
    return r;
  const c = r.exx < 0 ? -1 : 1, a = r.eyy < 0 ? -1 : 1;
  return {
    ax: r.ax - 4 * c,
    ay: r.ay - 4 * a,
    exx: r.exx + 8 * c,
    exy: 0,
    eyx: 0,
    eyy: r.eyy + 8 * a
  };
}
function K3(t, e, n) {
  const { view: s, inPath: o } = t;
  if (n >= 24) {
    const r = s.getInt32(e, !0), i = s.getInt32(e + 4, !0), c = s.getInt32(e + 8, !0), a = s.getInt32(e + 12, !0), l = Bt(t) ? ji(t, (r + c) / 2, (i + a) / 2, Math.abs(c - r) / 2, Math.abs(a - i) / 2) : {
      cx: ft(t, (r + c) / 2),
      cy: gt(t, (i + a) / 2),
      rx: Math.abs(_t(t, c - r)) / 2,
      ry: Math.abs(Nt(t, a - i)) / 2,
      rotation: 0
    };
    o ? (Ht(t).ellipse(l.cx, l.cy, l.rx, l.ry, l.rotation, 0, Math.PI * 2), ee(t).append(ai(Rn(t, r, i, c, a)))) : (kn(t), Mt(t, {
      build: (u) => {
        u.beginPath(), u.ellipse(l.cx, l.cy, l.rx, l.ry, l.rotation, 0, Math.PI * 2);
      },
      raster: () => ai(ac(t, r, i, c, a)),
      roundPen: !0,
      fill: !0,
      stroke: !0
    }));
  }
  return !0;
}
function Z3(t, e, n, s) {
  const { ctx: o, view: r, state: i, inPath: c } = t;
  if (s >= 40) {
    const a = r.getInt32(n, !0), l = r.getInt32(n + 4, !0), u = r.getInt32(n + 8, !0), h = r.getInt32(n + 12, !0), f = r.getInt32(n + 16, !0), g = r.getInt32(n + 20, !0), p = r.getInt32(n + 24, !0), d = r.getInt32(n + 28, !0), y = (a + u) / 2, m = (l + h) / 2, M = Math.abs(u - a) / 2, b = Math.abs(h - l) / 2, w = Math.atan2((g - m) / (b || 1), (f - y) / (M || 1)), x = Math.atan2((d - m) / (b || 1), (p - y) / (M || 1)), E = Bt(t), T = E ? ji(t, y, m, M, b) : {
      cx: ft(t, y),
      cy: gt(t, m),
      rx: Math.abs(_t(t, M)),
      ry: Math.abs(Nt(t, b)),
      rotation: 0
    }, v = e === cu, I = e === Vs || e === zr, P = i.arcDirection === 2, S = E ? Z(t, y + M * Math.cos(w), m + b * Math.sin(w)) : { x: T.cx + T.rx * Math.cos(w), y: T.cy + T.ry * Math.sin(w) }, R = (k) => {
      e === Vs && k.moveTo(T.cx, T.cy), v && k.lineTo(S.x, S.y), k.ellipse(T.cx, T.cy, T.rx, T.ry, T.rotation, w, x, !P), I && k.closePath();
    }, U = v ? "arcto" : e === Vs ? "pie" : e === zr ? "chord" : "arc", A = (k = !1) => ({
      box: k && I ? ac(t, a, l, u, h) : Rn(t, a, l, u, h),
      s: $(t, f, g),
      e: $(t, p, d),
      from: xe(t)
    });
    if (c) {
      R(Ht(t));
      const k = A();
      eo(k.box, k.s, k.e, P, U, k.from, ee(t)), I && ee(t).closeFigure();
    } else
      kn(t), o.beginPath(), Mt(t, {
        build: (k) => {
          k.beginPath(), R(k);
        },
        raster: () => {
          const k = A(!0);
          return eo(k.box, k.s, k.e, P, U, k.from).path;
        },
        fill: I,
        stroke: !0
      });
    if (v) {
      const k = A(), L = eo(k.box, k.s, k.e, P, "arc").end, D = Math.floor(L[0] / 16), N = Math.floor(L[1] / 16), B = Un(rt(t));
      B ? (i.curX = Math.round(B[0] * D + B[2] * N + B[4]), i.curY = Math.round(B[1] * D + B[3] * N + B[5])) : (i.curX = Math.round(y + M * Math.cos(x)), i.curY = Math.round(m + b * Math.sin(x))), t.curFix = c ? { x: L[0], y: L[1], lx: i.curX, ly: i.curY } : { x: D * 16, y: N * 16, lx: i.curX, ly: i.curY };
    }
  }
  return !0;
}
function Q3(t, e, n) {
  const { view: s, state: o, inPath: r } = t;
  if (n < 28)
    return !0;
  const i = s.getInt32(e, !0), c = s.getInt32(e + 4, !0), a = s.getUint32(e + 8, !0), l = s.getFloat32(e + 12, !0), u = s.getFloat32(e + 16, !0);
  if (!Number.isFinite(l) || !Number.isFinite(u) || a > 2147483647)
    return !0;
  const h = l * Math.PI / 180, f = (l + u) * Math.PI / 180, g = i + a * Math.cos(h), p = c - a * Math.sin(h), d = i + a * Math.cos(f), y = c - a * Math.sin(f), m = u < 0, M = Math.min(8, Math.trunc(Math.abs(u) / 360)), b = Rn(t, i - a, c - a, i + a, c + a);
  let w;
  if (Ms(b))
    w = Ed(b, l, u);
  else {
    w = [...$(t, i + a * Math.cos(h), c - a * Math.sin(h))];
    for (const U of Ru(l, u)) {
      const A = Au(i, c, a, a, U.from, U.to);
      for (let k = 0; k < 6; k += 2)
        w.push(...$(t, A[k], A[k + 1]));
    }
  }
  const x = [w[w.length - 2], w[w.length - 1]], E = (U, A) => {
    A && U.moveTo(A[0], A[1]), U.addBeziers(w, !1);
  }, T = ji(t, i, c, a, a), v = Z(t, g, p), I = (U) => {
    if (U.lineTo(v.x, v.y), a === 0)
      return;
    const A = Math.min(Math.abs(f - h), Math.PI * 2 * (M + 1));
    U.ellipse(T.cx, T.cy, T.rx, T.ry, T.rotation, -h, m ? -h + A : -h - A, !m);
  };
  if (r) {
    const U = Ht(t);
    I(U), E(ee(t), ee(t).figures.length === 0 ? xe(t) : null);
  } else {
    kn(t);
    const U = xe(t), A = Z(t, o.curX, o.curY);
    Mt(t, {
      build: (k) => {
        k.beginPath(), k.moveTo(A.x, A.y), I(k);
      },
      raster: () => {
        const k = new ht();
        return E(k, U), k;
      },
      fill: !1,
      stroke: !0
    });
  }
  const P = Math.floor(x[0] / 16), S = Math.floor(x[1] / 16), R = Un(rt(t));
  return o.curX = Math.round(R ? R[0] * P + R[2] * S + R[4] : d), o.curY = Math.round(R ? R[1] * P + R[3] * S + R[5] : y), t.curFix = r ? { x: x[0], y: x[1], lx: o.curX, ly: o.curY } : { x: P * 16, y: S * 16, lx: o.curX, ly: o.curY }, !0;
}
function t4(t, e, n, s) {
  switch (e) {
    case i1:
      return G3(t, n, s);
    case su:
      return j3(t, n, s);
    case iu:
      return W3(t, n, s);
    case R1:
      return V3(t, n, s);
    case A1:
      return J3(t, n, s);
    case S1:
      return K3(t, n, s);
    case W1:
      return Q3(t, n, s);
    case U1:
    case cu:
    case zr:
    case Vs:
      return Z3(t, e, n, s);
    default:
      return !1;
  }
}
var Tr = 1, Za = 2, e4 = 4;
function To(t, e, n) {
  const s = Math.floor((2 * t + 1) * e / (2 * n));
  return Math.max(0, Math.min(e - 1, s));
}
function Qa(t, e, n, s, o) {
  const r = [], i = (a) => s ? t + e - 1 - a : t + a;
  if (n <= 0 || e <= 0)
    return r;
  let c = -1;
  for (let a = 0; a < n; a++) {
    const l = To(a, e, n), u = [], h = o && n < e ? c + 1 : l;
    for (let f = h; f <= l; f++)
      u.push(i(f));
    r.push(u), c = l;
  }
  return r;
}
function n4(t, e, n, s, o, r, i, c) {
  const a = Math.max(0, Math.round(Math.abs(r))), l = Math.max(0, Math.round(Math.abs(i))), u = r < 0 != s < 0, h = i < 0 != o < 0, f = c === Tr || c === Za, g = Qa(Math.round(Math.min(e, e + s)), Math.round(Math.abs(s)), a, u, f), p = Qa(Math.round(Math.min(n, n + o)), Math.round(Math.abs(o)), l, h, f), d = new Uint8ClampedArray(a * l * 4), y = t.data, m = (M, b) => {
    if (M < 0 || b < 0 || M >= t.width || b >= t.height)
      return 0;
    const w = (b * t.width + M) * 4;
    return y[w] << 16 | y[w + 1] << 8 | y[w + 2];
  };
  for (let M = 0; M < l; M++) {
    const b = p[M] ?? [];
    for (let w = 0; w < a; w++) {
      const x = g[w] ?? [];
      let E = c === Tr ? 16777215 : 0, T = !0;
      for (const I of b)
        for (const P of x) {
          const S = m(P, I);
          c === Tr ? E &= S : c === Za ? E |= S : T && (E = S), T = !1;
        }
      const v = (M * a + w) * 4;
      d[v] = E >> 16 & 255, d[v + 1] = E >> 8 & 255, d[v + 2] = E & 255, d[v + 3] = 255;
    }
  }
  return { width: a, height: l, data: d };
}
function lc(t, e) {
  if (e.kind === "solid")
    return e.rgb;
  if (e.kind === "none")
    return 0;
  const { state: n, bounds: s } = t, o = t.sx || 1, r = t.sy || 1;
  return (i, c) => Ro(
    e,
    Math.floor(s.left + (i + 0.5) / o),
    Math.floor(s.top + (c + 0.5) / r),
    n.brushOrgX,
    n.brushOrgY
  );
}
function Df(t, e, n, s, o, r) {
  const i = Math.min(n.dx, n.dx + n.dw) - s, c = Math.min(n.dy, n.dy + n.dh) - o;
  if (r !== e4) {
    const g = n4(e.pixels, n.sx, n.sy, n.sw, n.sh, n.dw, n.dh, r), p = W(g.width, g.height);
    if (!p)
      return;
    Q(p.ctx, K(g.data, g.width, g.height), 0, 0), t.save(), t.globalCompositeOperation = "source-over", St(t, p.canvas, Math.round(i), Math.round(c), g.width, g.height), t.restore();
    return;
  }
  const a = n.dw < 0 != n.sw < 0, l = n.dh < 0 != n.sh < 0, u = Math.abs(n.dw), h = Math.abs(n.dh);
  t.save(), t.imageSmoothingEnabled = !0, t.transform(
    a ? -1 : 1,
    0,
    0,
    l ? -1 : 1,
    a ? i * 2 + u : 0,
    l ? c * 2 + h : 0
  ), t.drawImage.call(
    t,
    e.canvas,
    Math.min(n.sx, n.sx + n.sw),
    Math.min(n.sy, n.sy + n.sh),
    Math.abs(n.sw),
    Math.abs(n.sh),
    i,
    c,
    u,
    h
  ), t.restore();
}
function uc(t, e) {
  if (!e.source)
    return null;
  const n = Xe(
    t.view,
    e.source.bmi,
    e.source.bits,
    e.source.cbBits,
    e.source.palColors ? Ye(t.state) : null
  );
  if (!n)
    return null;
  const s = W(n.width, n.height);
  if (!s)
    return null;
  Q(s.ctx, n, 0, 0);
  let { sy: o } = e;
  return e.dibOrigin === "bottom-left" && t.view.getInt32(e.source.bmi + 8, !0) > 0 && (o = n.height - o - e.sh), {
    decoded: { pixels: n, canvas: s.canvas },
    req: { ...e, sy: o }
  };
}
function Ir(t, e, n, s) {
  const o = t.globalCompositeOperation, r = t.fillStyle;
  t.globalCompositeOperation = n, t.fillStyle = e, t.fillRect(s.dx, s.dy, s.dw, s.dh), t.globalCompositeOperation = o, t.fillStyle = r;
}
var tl = {
  136: [204, "multiply"],
  // SRCAND: S & D
  34: [51, "multiply"],
  // ~S & D
  238: [204, "screen"],
  // SRCPAINT: S | D
  187: [51, "screen"],
  // MERGEPAINT: ~S | D
  102: [204, "difference"],
  // SRCINVERT: S ^ D
  153: [51, "difference"],
  // ~(S ^ D)
  160: [240, "multiply"],
  // P & D
  10: [15, "multiply"],
  // ~P & D
  250: [240, "screen"],
  // P | D
  175: [15, "screen"],
  // ~P | D
  90: [240, "difference"],
  // PATINVERT: P ^ D
  165: [15, "difference"]
  // ~(P ^ D)
};
function s4(t, e, n, s, o) {
  const { ctx: r } = t, i = pM(e.dx, e.dy, e.dw, e.dh, t.canvasW, t.canvasH);
  if (!i || typeof r.getImageData != "function")
    return;
  let c = "source-over";
  if (!le(r) && Me(n).usesD) {
    const d = tl[n];
    if (!d) {
      H(`runTernary: ROP3 0x${n.toString(16)} needs the destination, which SVG output without a raster mirror cannot read; skipped`);
      return;
    }
    [n, c] = d, s = Me(n).usesP, o = Me(n).usesS;
  }
  const a = Gt(t.state);
  if (s && a.kind === "none")
    return;
  const l = W(i.w, i.h);
  if (!l)
    return;
  let u = null;
  if (o) {
    const d = uc(t, e);
    if (!d)
      return;
    Df(l.ctx, d.decoded, d.req, i.x, i.y, t.state.stretchBltMode), u = V(l.ctx, 0, 0, i.w, i.h);
  }
  const h = V(r, i.x, i.y, i.w, i.h), f = lc(t, a);
  gM(h, u, f, n, i.x, i.y);
  const g = c === "source-over" && Me(n).usesD ? Vi(r, i) : null;
  let p = [];
  if (g) {
    const d = u ? u.data : null, y = (b) => typeof f == "number" ? f : f(i.x + b % i.w, i.y + Math.floor(b / i.w)), m = (b) => d ? d[b * 4] << 16 | d[b * 4 + 1] << 8 | d[b * 4 + 2] : 0, M = tl[n];
    p = qi(
      h.data,
      i.w * i.h,
      g,
      (b, w) => mt(n, y(b), m(b), w),
      M ? (b) => ({ color: mt(M[0], y(b), m(b), 0), mode: M[1] }) : void 0
    );
  }
  Q(l.ctx, h, 0, 0), r.save(), r.setTransform(1, 0, 0, 1, 0, 0), r.globalCompositeOperation = c, r.globalAlpha = 1, St(r, l.canvas, i.x, i.y, i.w, i.h), r.restore(), Ji(r, i, p);
}
function gi(t, e, n) {
  return Math.sign(t !== 0 ? t : e !== 0 ? e : n);
}
function el(t, e, n, s) {
  return gi(t, n, s) >= 0 && gi(t - e, n, s) < 0;
}
function nl(t, e, n, s) {
  const o = Math.floor(t / e);
  return t === o * e && gi(0, n, s) < 0 ? o - 1 : o;
}
function _f(t, e, n, s, o, r, i, c, a, l, u, h) {
  const { ctx: f } = t, g = Gh(r);
  if (g === 170)
    return;
  const p = Me(g);
  if (!le(f) && p.usesD || typeof f.getImageData != "function" || s === 0 || o === 0)
    return;
  const d = Gt(t.state);
  if (p.usesP && d.kind === "none")
    return;
  const y = lc(t, d);
  let m = null, M = c, b = a;
  if (p.usesS) {
    const x = uc(t, {
      plan: { kind: "ternary", index: g, operands: p },
      dx: 0,
      dy: 0,
      dw: s,
      dh: o,
      source: i,
      sx: c,
      sy: a,
      sw: l,
      sh: u,
      dibOrigin: h
    });
    if (!x)
      return;
    m = x.decoded.pixels, M = x.req.sx, b = x.req.sy;
  }
  const w = (x, E) => {
    if (!m)
      return 0;
    let T = l < 0 ? M - 1 - x : M + x, v = u < 0 ? b - 1 - E : b + E;
    T = Math.max(0, Math.min(m.width - 1, T)), v = Math.max(0, Math.min(m.height - 1, v));
    const I = (v * m.width + T) * 4;
    return m.data[I] << 16 | m.data[I + 1] << 8 | m.data[I + 2];
  };
  Nf(
    t,
    $(t, e, n),
    $(t, e + s, n),
    $(t, e, n + o),
    l,
    u,
    (x, E, T, v, I) => {
      const P = p.usesS ? w(x, E) : 0, S = typeof y == "function" ? y(T, v) : y;
      return mt(g, S, P, I);
    }
  );
}
function Nf(t, e, n, s, o, r, i) {
  const [c, a] = e, l = n[0] - c, u = n[1] - a, h = s[0] - c, f = s[1] - a;
  let g = l * f - u * h;
  if (g === 0)
    return;
  const p = g < 0 ? -1 : 1;
  g *= p;
  const d = [c, n[0], s[0], n[0] + h], y = [a, n[1], s[1], n[1] + f], m = Math.max(0, Math.floor(Math.min(...d) / 16) - 1), M = Math.max(0, Math.floor(Math.min(...y) / 16) - 1), b = Math.min(t.canvasW, Math.ceil(Math.max(...d) / 16) + 2), w = Math.min(t.canvasH, Math.ceil(Math.max(...y) / 16) + 2);
  if (b <= m || w <= M)
    return;
  const x = Math.abs(o) || 1, E = Math.abs(r) || 1, T = p * f, v = -p * h, I = -p * u, P = p * l;
  Ki(t.ctx, { x: m, y: M, w: b - m, h: w - M }, (S, R, U) => {
    const A = S * 16 - c, k = R * 16 - a, L = p * (A * f - k * h), D = p * (l * k - u * A);
    if (!el(L, g, T, v) || !el(D, g, I, P))
      return -1;
    const N = Math.min(x - 1, nl(L * x, g, T, v)), B = Math.min(E - 1, nl(D * E, g, I, P));
    return i(N, B, S, R, U);
  });
}
function o4(t, e) {
  const n = t.useMappingMode ? 1 : t.sx, s = t.useMappingMode ? 1 : t.sy;
  return {
    ...e,
    dx: e.dw < 0 ? e.dx + n : e.dx,
    dy: e.dh < 0 ? e.dy + s : e.dy
  };
}
function Bf(t, e) {
  const { ctx: n } = t, s = o4(t, e), o = s.plan;
  switch (o.kind) {
    case "noop":
      return;
    case "solid":
      Ir(n, o.color === "black" ? "#000000" : "#ffffff", "source-over", s);
      return;
    case "invert-dest":
      Ir(n, "#ffffff", "difference", s);
      return;
    case "copy": {
      const r = uc(t, s);
      r && Df(n, r.decoded, r.req, 0, 0, t.state.stretchBltMode);
      return;
    }
    case "ternary": {
      const r = Gt(t.state);
      if (o.index === 240 && r.kind !== "tile") {
        r.kind === "solid" && Ir(n, t.state.brushColor, "source-over", s);
        return;
      }
      s4(t, s, o.index, o.operands.usesP, o.operands.usesS);
    }
  }
}
function Xf(t, e, n, s, o, r = 0) {
  return e > 0 && n > 0 && s > 0 && o > 0 ? { bmi: t + e, bits: t + s, cbBits: o, ...r === 1 ? { palColors: !0 } : {} } : null;
}
function sl(t, e, n, s, o) {
  const { view: r } = t;
  if (s < (o ? 108 : 96))
    return !0;
  const i = r.getInt32(n + 16, !0), c = r.getInt32(n + 20, !0), a = r.getInt32(n + 24, !0), l = r.getInt32(n + 28, !0), u = r.getUint32(n + 32, !0), h = r.getInt32(n + 36, !0), f = r.getInt32(n + 40, !0), g = r.getFloat32(n + 44, !0), p = r.getFloat32(n + 48, !0), d = r.getFloat32(n + 52, !0), y = r.getFloat32(n + 56, !0), m = r.getFloat32(n + 60, !0), M = r.getFloat32(n + 64, !0), b = o ? r.getInt32(n + 92, !0) : a, w = o ? r.getInt32(n + 96, !0) : l, x = s >= 100 ? Xf(
    e,
    r.getUint32(n + 76, !0),
    r.getUint32(n + 80, !0),
    r.getUint32(n + 84, !0),
    r.getUint32(n + 88, !0),
    r.getUint32(n + 72, !0)
  ) : null, E = g === 0 && y === 0 && p === 0 && d === 0, T = E ? 1 : g, v = E ? 1 : y, I = {
    sx: T * h + (E ? 0 : d * f + m),
    sy: v * f + (E ? 0 : p * h + M),
    sw: T * b,
    sh: v * w
  };
  return Bt(t) ? (_f(
    t,
    i,
    c,
    a,
    l,
    u,
    x,
    I.sx,
    I.sy,
    I.sw,
    I.sh,
    "top-left"
  ), !0) : (Bf(t, {
    plan: jh(u),
    dx: ft(t, i),
    dy: gt(t, c),
    dw: _t(t, a),
    dh: Nt(t, l),
    source: x,
    ...I,
    dibOrigin: "top-left"
  }), !0);
}
function r4(t, e, n, s) {
  const { view: o } = t;
  if (s < 80)
    return !0;
  const r = o.getInt32(n + 16, !0), i = o.getInt32(n + 20, !0), c = o.getInt32(n + 64, !0), a = o.getInt32(n + 68, !0), l = o.getUint32(n + 60, !0), u = Xf(
    e,
    o.getUint32(n + 40, !0),
    o.getUint32(n + 44, !0),
    o.getUint32(n + 48, !0),
    o.getUint32(n + 52, !0),
    o.getUint32(n + 56, !0)
  ), h = o.getInt32(n + 24, !0), f = o.getInt32(n + 28, !0), g = o.getInt32(n + 32, !0), p = o.getInt32(n + 36, !0);
  return Bt(t) ? (_f(t, r, i, c, a, l, u, h, f, g, p, "bottom-left"), !0) : (Bf(t, {
    plan: jh(l),
    dx: ft(t, r),
    dy: gt(t, i),
    dw: _t(t, c),
    dh: Nt(t, a),
    source: u,
    sx: h,
    sy: f,
    sw: g,
    sh: p,
    dibOrigin: "bottom-left"
  }), !0);
}
function i4(t, e, n, s, o) {
  switch (e) {
    case lu:
      return sl(t, n, s, o, !1);
    case Xl:
      return sl(t, n, s, o, !0);
    case uu:
      return r4(t, n, s, o);
    default:
      return !1;
  }
}
function jo(t, e, n, s, o, r, i, c = !1) {
  return !n || !s || !o || !r ? null : Xe(
    t.view,
    e + n,
    e + o,
    r,
    i === 1 ? Ye(t.state) : null,
    c
  );
}
function Yf(t, e, n, s, o, r) {
  const { view: i } = t;
  if (!n || !s || !o || !r)
    return null;
  const c = e + n;
  if (c + 16 > i.byteLength)
    return null;
  const a = i.getInt32(c + 4, !0), l = i.getInt32(c + 8, !0), u = Math.abs(l);
  if (i.getUint16(c + 14, !0) !== 1 || a <= 0 || u === 0 || a > 16384 || u > 16384)
    return null;
  const h = (a + 31 >> 5) * 4, f = e + o;
  if (f + h * u > i.byteLength)
    return null;
  const g = new Uint8Array(a * u);
  for (let p = 0; p < u; p++) {
    const d = l > 0 ? u - 1 - p : p, y = f + p * h;
    for (let m = 0; m < a; m++)
      g[d * a + m] = i.getUint8(y + (m >> 3)) >> 7 - (m & 7) & 1;
  }
  return { width: a, height: u, bits: g };
}
function Wo(t, e, n, s, o, r) {
  const i = t.getFloat32(e, !0), c = t.getFloat32(e + 4, !0), a = t.getFloat32(e + 8, !0), l = t.getFloat32(e + 12, !0), u = t.getFloat32(e + 16, !0), h = t.getFloat32(e + 20, !0), f = i === 0 && l === 0 && c === 0 && a === 0, g = f ? 1 : i, p = f ? 1 : l;
  return {
    sx: Math.round(g * n + (f ? 0 : a * s + u)),
    sy: Math.round(p * s + (f ? 0 : c * n + h)),
    sw: Math.round(g * o),
    sh: Math.round(p * r)
  };
}
function Ln(t, e, n) {
  const s = e < 0 ? 0 : e >= t.width ? t.width - 1 : e, r = ((n < 0 ? 0 : n >= t.height ? t.height - 1 : n) * t.width + s) * 4;
  return (t.data[r + 3] << 24 | t.data[r] << 16 | t.data[r + 1] << 8 | t.data[r + 2]) >>> 0;
}
function Vo(t, e, n, s, o, r, i, c, a) {
  let l = ft(t, e), u = gt(t, n);
  const h = _t(t, s), f = Nt(t, o);
  h < 0 && (l += t.useMappingMode ? 1 : t.sx), f < 0 && (u += t.useMappingMode ? 1 : t.sy);
  const g = Math.round(Math.abs(h)), p = Math.round(Math.abs(f)), d = Math.abs(c), y = Math.abs(a);
  if (g === 0 || p === 0 || d === 0 || y === 0)
    return null;
  const m = Math.round(Math.min(l, l + h)), M = Math.round(Math.min(u, u + f)), b = Math.max(0, m), w = Math.max(0, M), x = Math.min(t.canvasW, m + g), E = Math.min(t.canvasH, M + p);
  if (x <= b || E <= w)
    return null;
  const T = Math.min(r, r + c), v = Math.min(i, i + a), I = new Int32Array(x - b), P = new Int32Array(E - w), S = h < 0 || f < 0, R = (U, A, k) => S ? Math.min(A - 1, Math.floor(U * A / k)) : To(U, A, k);
  for (let U = b; U < x; U++) {
    const A = R(U - m, d, g);
    I[U - b] = c < 0 != h < 0 ? T + d - 1 - A : T + A;
  }
  for (let U = w; U < E; U++) {
    const A = R(U - M, y, p);
    P[U - w] = a < 0 != f < 0 ? v + y - 1 - A : v + A;
  }
  return { box: { x: b, y: w, w: x - b, h: E - w }, col: I, row: P };
}
function Es(t, e, n) {
  const { ctx: s } = t;
  if (le(s) && typeof s.getImageData == "function" && Ki(s, e, n))
    return;
  const o = ze(e.w, e.h);
  if (!o)
    return;
  const r = new Uint8ClampedArray(e.w * e.h * 4);
  for (let i = 0; i < e.h; i++)
    for (let c = 0; c < e.w; c++) {
      const a = n(e.x + c, e.y + i, 0);
      if (a < 0)
        continue;
      const l = (i * e.w + c) * 4;
      r[l] = a >> 16 & 255, r[l + 1] = a >> 8 & 255, r[l + 2] = a & 255, r[l + 3] = 255;
    }
  Oe(s, e, o, K(r, e.w, e.h));
}
function ke(t) {
  return Math.round(t / 255);
}
function c4(t, e, n, s) {
  const o = t >>> 24;
  if (n === 0)
    return -1;
  const r = t >> 16 & 255, i = t >> 8 & 255, c = t & 255, a = e >> 16 & 255, l = e >> 8 & 255, u = e & 255;
  if (!s || o === 255 && n !== 255)
    return a + Math.round((r - a) * n / 255) << 16 | l + Math.round((i - l) * n / 255) << 8 | u + Math.round((c - u) * n / 255);
  if (o === 0)
    return -1;
  let h = r, f = i, g = c, p = o;
  n !== 255 && (h = ke(r * n), f = ke(i * n), g = ke(c * n), p = ke(o * n));
  const d = 255 - p, y = g + ke(u * d), m = f + ke(l * d) + (y >> 8);
  return (h + ke(a * d) + (m >> 8) & 255) << 16 | (m & 255) << 8 | y & 255;
}
function a4(t, e, n, s) {
  const { view: o } = t;
  if (s < 108)
    return;
  const r = o.getUint32(n + 32, !0), i = r >>> 16 & 255, c = (r >>> 24 & 1) !== 0, a = jo(
    t,
    e,
    o.getUint32(n + 76, !0),
    o.getUint32(n + 80, !0),
    o.getUint32(n + 84, !0),
    o.getUint32(n + 88, !0),
    o.getUint32(n + 72, !0),
    !0
  );
  if (!a || i === 0)
    return;
  const l = Wo(o, n + 44, o.getInt32(n + 36, !0), o.getInt32(n + 40, !0), o.getInt32(n + 92, !0), o.getInt32(n + 96, !0)), u = Vo(t, o.getInt32(n + 16, !0), o.getInt32(n + 20, !0), o.getInt32(n + 24, !0), o.getInt32(n + 28, !0), l.sx, l.sy, l.sw, l.sh);
  if (!u)
    return;
  const { box: h, col: f, row: g } = u;
  if (!le(t.ctx)) {
    l4(t, u, a, i, c);
    return;
  }
  Es(t, h, (p, d, y) => c4(Ln(a, f[p - h.x], g[d - h.y]), y, i, c));
}
function l4(t, e, n, s, o) {
  const { box: r, col: i, row: c } = e, a = ze(r.w, r.h);
  if (!a)
    return;
  const l = new Uint8ClampedArray(r.w * r.h * 4);
  for (let u = 0; u < r.h; u++)
    for (let h = 0; h < r.w; h++) {
      const f = Ln(n, i[h], c[u]), g = o ? (f >>> 24) * s / 255 : s, p = (u * r.w + h) * 4, d = o && f >>> 24 > 0 ? 255 / (f >>> 24) : 1;
      l[p] = (f >> 16 & 255) * d, l[p + 1] = (f >> 8 & 255) * d, l[p + 2] = (f & 255) * d, l[p + 3] = g;
    }
  Oe(t.ctx, r, a, K(l, r.w, r.h));
}
function u4(t, e, n, s) {
  const { view: o } = t;
  if (s < 108)
    return;
  const r = Gi(o.getUint32(n + 32, !0), Ye(t.state)), i = jo(
    t,
    e,
    o.getUint32(n + 76, !0),
    o.getUint32(n + 80, !0),
    o.getUint32(n + 84, !0),
    o.getUint32(n + 88, !0),
    o.getUint32(n + 72, !0)
  );
  if (!i)
    return;
  const c = Wo(o, n + 44, o.getInt32(n + 36, !0), o.getInt32(n + 40, !0), o.getInt32(n + 92, !0), o.getInt32(n + 96, !0)), a = Vo(t, o.getInt32(n + 16, !0), o.getInt32(n + 20, !0), o.getInt32(n + 24, !0), o.getInt32(n + 28, !0), c.sx, c.sy, c.sw, c.sh);
  if (!a)
    return;
  const { box: l, col: u, row: h } = a;
  Es(t, l, (f, g) => {
    const p = Ln(i, u[f - l.x], h[g - l.y]) & 16777215;
    return p === r ? -1 : p;
  });
}
function h4(t, e, n, s) {
  const { view: o } = t;
  if (s < 128)
    return;
  const r = o.getUint32(n + 32, !0), i = r >>> 16 & 255, c = r >>> 24 & 255, a = o.getInt32(n + 24, !0), l = o.getInt32(n + 28, !0), u = jo(
    t,
    e,
    o.getUint32(n + 76, !0),
    o.getUint32(n + 80, !0),
    o.getUint32(n + 84, !0),
    o.getUint32(n + 88, !0),
    o.getUint32(n + 72, !0)
  ), h = Yf(t, e, o.getUint32(n + 104, !0), o.getUint32(n + 108, !0), o.getUint32(n + 112, !0), o.getUint32(n + 116, !0)), f = o.getInt32(n + 92, !0), g = o.getInt32(n + 96, !0), p = Wo(o, n + 44, o.getInt32(n + 36, !0), o.getInt32(n + 40, !0), a, l), d = Vo(t, o.getInt32(n + 16, !0), o.getInt32(n + 20, !0), a, l, p.sx, p.sy, p.sw, p.sh);
  if (!d)
    return;
  const { box: y, col: m, row: M } = d;
  if ((Me(i).usesD || h !== null && Me(c).usesD) && !le(t.ctx))
    return;
  const w = lc(t, Gt(t.state)), x = Math.min(p.sx, p.sx + p.sw), E = Math.min(p.sy, p.sy + p.sh);
  Es(t, y, (T, v, I) => {
    const P = m[T - y.x], S = M[v - y.y];
    let R = i;
    if (h) {
      const k = f + P - x, L = g + S - E;
      R = (k >= 0 && L >= 0 && k < h.width && L < h.height ? h.bits[L * h.width + k] : 0) ? i : c;
    }
    const U = u ? Ln(u, P, S) & 16777215 : 0, A = typeof w == "function" ? w(T, v) : w;
    return mt(R, A, U, I);
  });
}
function f4(t, e, n, s) {
  const { view: o } = t;
  if (s < 140)
    return;
  const r = [0, 1, 2].map((m) => $(t, o.getInt32(n + 16 + m * 8, !0), o.getInt32(n + 20 + m * 8, !0))), i = o.getInt32(n + 48, !0), c = o.getInt32(n + 52, !0), a = jo(
    t,
    e,
    o.getUint32(n + 88, !0),
    o.getUint32(n + 92, !0),
    o.getUint32(n + 96, !0),
    o.getUint32(n + 100, !0),
    o.getUint32(n + 84, !0)
  );
  if (!a)
    return;
  const l = Yf(t, e, o.getUint32(n + 116, !0), o.getUint32(n + 120, !0), o.getUint32(n + 124, !0), o.getUint32(n + 128, !0)), u = o.getInt32(n + 104, !0), h = o.getInt32(n + 108, !0), f = Wo(o, n + 56, o.getInt32(n + 40, !0), o.getInt32(n + 44, !0), i, c), g = (m, M, b = m, w = M) => {
    if (l) {
      const T = u + b, v = h + w;
      if (T < 0 || v < 0 || T >= l.width || v >= l.height || !l.bits[v * l.width + T])
        return -1;
    }
    const x = f.sw < 0 ? f.sx - 1 - m : f.sx + m, E = f.sh < 0 ? f.sy - 1 - M : f.sy + M;
    return Ln(a, x, E) & 16777215;
  }, [p, d, y] = r;
  if (d[1] === p[1] && y[0] === p[0]) {
    const m = Math.round(Math.abs(d[0] - p[0]) / 16), M = Math.round(Math.abs(y[1] - p[1]) / 16), b = Math.round(p[0] / 16) + (d[0] < p[0] ? 1 - m : 0), w = Math.round(p[1] / 16) + (y[1] < p[1] ? 1 - M : 0), x = Math.abs(f.sw), E = Math.abs(f.sh), T = Math.max(0, b), v = Math.max(0, w), I = Math.min(t.canvasW, b + m), P = Math.min(t.canvasH, w + M);
    if (I <= T || P <= v || x === 0 || E === 0)
      return;
    const S = d[0] < p[0], R = y[1] < p[1];
    Es(t, { x: T, y: v, w: I - T, h: P - v }, (U, A) => {
      const k = To(U - b, x, m), L = To(A - w, E, M);
      return g(S ? x - 1 - k : k, R ? E - 1 - L : L, k, L);
    });
    return;
  }
  Nf(t, p, d, y, f.sw, f.sh, (m, M) => g(m, M));
}
function g4(t, e, n, s, o, r, i, c) {
  const { view: a } = t;
  if (!n || !s || !o || !r || e + n + s > a.byteLength || e + o + r > a.byteLength)
    return null;
  const l = new Uint8Array(s + r);
  l.set(new Uint8Array(a.buffer, a.byteOffset + e + n, s), 0), l.set(new Uint8Array(a.buffer, a.byteOffset + e + o, r), s);
  const u = new DataView(l.buffer), h = u.getInt32(8, !0);
  return u.setInt32(8, h < 0 ? -c : c, !0), Xe(u, 0, s, r, i === 1 ? Ye(t.state) : null);
}
function p4(t, e, n, s) {
  const { view: o } = t;
  if (s < 76)
    return;
  const r = o.getInt32(n + 24, !0), i = o.getInt32(n + 28, !0), c = o.getInt32(n + 32, !0), a = o.getInt32(n + 36, !0), l = o.getUint32(n + 40, !0), u = o.getUint32(n + 44, !0), h = o.getUint32(n + 60, !0), f = o.getUint32(n + 64, !0);
  if (f === 0 || !l || e + l + 12 > o.byteLength)
    return;
  const g = o.getInt32(e + l + 8, !0), p = g < 0, d = Math.abs(g), y = g4(t, e, l, u, o.getUint32(n + 48, !0), o.getUint32(n + 52, !0), o.getUint32(n + 56, !0), f);
  if (!y)
    return;
  const m = Vo(t, o.getInt32(n + 16, !0), o.getInt32(n + 20, !0), c, a, 0, 0, c, a);
  if (!m)
    return;
  const { box: M, col: b, row: w } = m;
  Es(t, M, (x, E) => {
    const T = b[x - M.x], v = w[E - M.y], I = i + a - 1 - v, P = p ? d - 1 - I - h : f - 1 - (I - h);
    if (P < 0 || P >= y.height)
      return -1;
    const S = r + T;
    return S < 0 || S >= y.width ? -1 : Ln(y, S, P) & 16777215;
  });
}
function d4(t, e, n, s, o) {
  switch (e) {
    case I2:
      return a4(t, n, s, o), !0;
    case P2:
      return u4(t, n, s, o), !0;
    case c2:
      return h4(t, n, s, o), !0;
    case a2:
      return f4(t, n, s, o), !0;
    case l2:
      return p4(t, n, s, o), !0;
    default:
      return !1;
  }
}
var Io = 2, hc = 4, y4 = 16, m4 = 8192, ol = 0.43, M4 = [255, 255, 240, 233, 225, 217, 208, 199, 189, 178, 167, 154, 140, 124, 104, 77, 0];
function zf(t) {
  const e = /^#?([0-9a-f]{6})$/i.exec(t.trim());
  if (!e)
    return [0, 0, 0];
  const n = parseInt(e[1], 16);
  return [n >> 16 & 255, n >> 8 & 255, n & 255];
}
function Of(t, e, n, s) {
  const o = [0, 0, 0];
  let r = 0, i = 255;
  for (let c = 0; c < 3; c++)
    o[c] = s(n[c], 255, c), r += 1 - (o[c] - s(n[c], 0, c)) / 255, i = Math.min(i, o[c]);
  if (r = Math.min(1, Math.max(r / 3, 1 - i / 255)), !(r <= 0)) {
    for (let c = 0; c < 3; c++)
      t[e + c] = Math.round((o[c] - 255 * (1 - r)) / r);
    t[e + 3] = Math.round(r * 255);
  }
}
function Hs(t, e, n) {
  if (n <= 1)
    return e;
  if (n >= 16)
    return t;
  const s = n / 16, o = 1 / ol, r = s * Math.pow(t / 255, o) + (1 - s) * Math.pow(e / 255, o);
  return Math.floor(255 * Math.pow(r, ol) + 1e-9);
}
function Pr(t, e, n, s) {
  let { left: o, top: r, right: i, bottom: c } = e;
  s && (o = Math.max(o, s.left), r = Math.max(r, s.top), i = Math.min(i, s.right), c = Math.min(c, s.bottom)), !(i <= o || c <= r) && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.globalCompositeOperation = "source-over", t.globalAlpha = 1, t.fillStyle = n, t.fillRect(o, r, i - o, c - r), t.restore());
}
function rl(t, e, n, s) {
  t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.globalCompositeOperation = "source-over", t.globalAlpha = 1, s && (t.beginPath(), t.rect(s.left, s.top, s.right - s.left, s.bottom - s.top), t.clip()), t.fillStyle = n, t.beginPath(), t.moveTo(e[0].x, e[0].y);
  for (let o = 1; o < e.length; o++)
    t.lineTo(e[o].x, e[o].y);
  t.closePath(), t.fill(), t.restore();
}
function $f(t, e) {
  const n = e.codes.length, s = e.codes.map((P) => e.glyphIndices ? P : t.glyphIndex(P)), o = [];
  for (let P = 0; P < n; P++)
    o.push(
      e.dx && P < e.dx.length ? e.dx[P] : e.matrix ? t.rotatedAdvance(s[P]) : t.advance(s[P])
    );
  const r = [];
  for (let P = 0; P < n; P++)
    r.push(e.dy && P < e.dy.length ? e.dy[P] : 0);
  let i = 0, c = 0;
  for (let P = 0; P < n; P++)
    i += o[P], c += r[P];
  const a = e.matrix, l = a ? a[0] : 1, u = a ? a[1] : 0, h = a ? a[2] : 0, f = a ? a[3] : 1, g = (P, S) => ({
    x: e.x + l * P + h * S,
    y: e.y + u * P + f * S
  }), p = e.textAlign & 6;
  let d = 0;
  p === 6 ? d = -Math.ceil(i / 2) : p === 2 && (d = -i);
  const y = e.textAlign & 24, m = !!a && Math.abs(a[0]) > 1e-9 && Math.abs(a[1]) > 1e-9, M = m ? t.rotatedAscent ?? t.ascent : t.ascent, b = m ? t.rotatedDescent ?? t.descent : t.descent, w = y === 24 ? 0 : y === 8 ? -b : M, x = [], E = [], T = a ? [a[0], a[1], a[2], a[3]] : void 0;
  let v = d, I = w;
  for (let P = 0; P < n; P++) {
    const S = g(v, I), R = t.gridFit ? Math.round(S.x) : Math.floor(S.x), U = t.gridFit ? 0 : Math.round((S.x - R) * 64), A = Math.round(S.y);
    E.push({ x: R + U / 64, y: A, along: v, down: I });
    const k = t.glyph(s[P], T, U);
    k.bitmap && x.push({ x: R + k.bitmap.left, y: A - k.bitmap.top, bitmap: k.bitmap }), v += o[P], I += r[P];
  }
  return { glyphs: s, total: i, totalY: c, startAlong: d, baseDown: w, hAlign: p, at: g, placed: x, origins: E };
}
function Cf(t, e, n, s) {
  const { glyphs: o, total: r, totalY: i, startAlong: c, baseDown: a, at: l, placed: u, origins: h, hAlign: f } = $f(e, n), g = n.matrix, p = g ? g[0] : 1, d = g ? g[1] : 0, y = g ? g[2] : 0, m = g ? g[3] : 1, M = n.options & hc && n.rect ? n.rect : null;
  if (n.options & Io && n.rect && Pr(t, n.rect, n.bkColor, null), n.bkMode === 2 && r !== 0)
    if (g) {
      const x = [
        l(c, a - e.ascent),
        l(c + r, a - e.ascent),
        l(c + r, a + e.descent),
        l(c, a + e.descent)
      ];
      rl(t, x, n.bkColor, M);
    } else {
      const x = Math.round(n.x + c), E = Math.round(n.y + a), T = Math.min(x, x + Math.round(r)), v = Math.max(x, x + Math.round(r));
      Pr(t, { left: T, top: E - e.ascent, right: v, bottom: E + e.descent }, n.bkColor, M);
    }
  if (ot(t) ? (M && (t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.beginPath(), t.rect(M.left, M.top, M.right - M.left, M.bottom - M.top), t.clip()), b4(t, e, n, o, h, s), M && t.restore(), t.shadow && il(t.shadow, u, n.textColor, e.mode !== "mono", M)) : il(t, u, n.textColor, e.mode !== "mono", M), (n.underline || n.strikeOut) && r !== 0) {
    const x = [];
    n.underline && x.push([e.underlinePosition, Math.max(1, e.underlineThickness)]), n.strikeOut && x.push([e.strikeoutPosition, Math.max(1, e.strikeoutThickness)]);
    for (const [E, T] of x)
      if (g) {
        const v = [
          l(c, a - E),
          l(c + r, a - E),
          l(c + r, a - E + T),
          l(c, a - E + T)
        ];
        rl(t, v, n.textColor, M);
      } else {
        const v = Math.round(n.x + c), I = Math.round(n.y + a) - E, P = Math.min(v, v + Math.round(r)), S = Math.max(v, v + Math.round(r));
        Pr(t, { left: P, top: I, right: S, bottom: I + T }, n.textColor, M);
      }
  }
  const b = f === 6 ? 0 : f === 2 ? -r : r, w = f === 6 ? 0 : i;
  return { dx: p * b + y * w, dy: d * b + m * w };
}
function b4(t, e, n, s, o, r) {
  let i = "";
  for (let f = 0; f < o.length; f++) {
    const g = n.glyphIndices ? e.charForGlyph(s[f]) : n.codes[f];
    i += String.fromCharCode(g);
  }
  const c = n.matrix, a = e.ttf, l = e.syntheticBold || a.weightClass >= 600, u = e.syntheticItalic || (a.fsSelection & 1) !== 0 || (a.macStyle & 2) !== 0, h = o[0];
  t.fillGlyphRun({
    text: i,
    // Upright runs: device positions. Rotated runs: offsets along/across
    // the baseline from the first glyph, under the frame matrix.
    xs: o.map((f) => c ? f.along - h.along : f.x),
    ys: o.map((f) => c ? f.down - h.down : f.y),
    matrix: c ? [c[0], c[1], c[2], c[3], h.x, h.y] : null,
    scaleX: e.ppemX !== e.ppem ? e.ppemX / e.ppem : 1,
    fontFamily: lo(a.family, r),
    fontSize: e.ppem,
    fontWeight: l ? 700 : 400,
    italic: u,
    aliased: e.mode === "mono",
    fill: n.textColor
  });
}
function il(t, e, n, s, o) {
  if (e.length === 0)
    return;
  let r = 1 / 0, i = 1 / 0, c = -1 / 0, a = -1 / 0;
  for (const w of e)
    r = Math.min(r, w.x), i = Math.min(i, w.y), c = Math.max(c, w.x + w.bitmap.width), a = Math.max(a, w.y + w.bitmap.height);
  const l = t.canvas;
  typeof (l == null ? void 0 : l.width) == "number" && typeof (l == null ? void 0 : l.height) == "number" && (r = Math.max(r, 0), i = Math.max(i, 0), c = Math.min(c, l.width), a = Math.min(a, l.height)), o && (r = Math.max(r, o.left), i = Math.max(i, o.top), c = Math.min(c, o.right), a = Math.min(a, o.bottom));
  const u = c - r, h = a - i;
  if (u <= 0 || h <= 0 || u * h > 64 * 1024 * 1024)
    return;
  if (e.some((w) => w.bitmap.channels === 3)) {
    E4(t, e, n, r, i, u, h);
    return;
  }
  const f = new Uint8Array(u * h), g = s ? 16 : 1;
  for (const w of e) {
    const x = w.bitmap;
    for (let E = 0; E < x.height; E++) {
      const T = w.y + E - i;
      if (!(T < 0 || T >= h))
        for (let v = 0; v < x.width; v++) {
          const I = x.data[E * x.width + v];
          if (!I) continue;
          const P = w.x + v - r;
          if (P < 0 || P >= u) continue;
          const S = T * u + P;
          I > f[S] && (f[S] = I);
        }
    }
  }
  const p = W(u, h);
  if (!p)
    return;
  const [d, y, m] = zf(n), M = new Uint8ClampedArray(u * h * 4);
  let b = null;
  if (s && typeof t.getImageData == "function")
    try {
      b = V(t, r, i, u, h).data;
    } catch {
      b = null;
    }
  for (let w = 0; w < u * h; w++) {
    const x = f[w];
    if (x <= (s ? 1 : 0)) continue;
    const E = w * 4;
    !s || x >= g ? (M[E] = d, M[E + 1] = y, M[E + 2] = m, M[E + 3] = 255) : b && b[E + 3] === 255 ? (M[E] = Hs(d, b[E], x), M[E + 1] = Hs(y, b[E + 1], x), M[E + 2] = Hs(m, b[E + 2], x), M[E + 3] = 255) : b ? Of(M, E, [d, y, m], (T, v) => Hs(T, v, x)) : (M[E] = d, M[E + 1] = y, M[E + 2] = m, M[E + 3] = 255 - M4[x]);
  }
  Q(p.ctx, K(M, u, h), 0, 0), t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.globalCompositeOperation = "source-over", t.globalAlpha = 1, St(t, p.canvas, r, i, u, h), t.restore();
}
var w4 = Math.PI / 180;
function Hf(t, e, n) {
  const s = t.fontDetails, o = t.fontHeight * e;
  return {
    face: t.fontFamily,
    height: o < 0 ? -Math.round(-o) : Math.round(o),
    width: s && s.width ? Math.round(Math.abs(s.width * n)) : 0,
    weight: t.fontWeight,
    italic: t.fontItalic,
    charSet: s ? s.charSet : 1,
    pitchAndFamily: s ? s.pitchAndFamily : 0,
    quality: s ? s.quality : 0
  };
}
function Gf(t, e, n, s) {
  const [o, r, i, c, a, l] = s.matrix, u = Math.hypot(o, r), h = Math.hypot(i, c);
  if (!(u > 0) || !(h > 0) || s.codes.length === 0)
    return null;
  const f = e.realize(Hf(n, h, u), n.fontFamilyMap);
  if (!f)
    return null;
  let p = r !== 0 || i !== 0 ? [o / u, r / u, i / h, c / h] : null;
  const d = n.fontEscapementTenthDeg % 3600;
  if (d !== 0) {
    const I = d / 10 * w4, P = [Math.cos(I), -Math.sin(I), Math.sin(I), Math.cos(I)];
    p = p ? [
      p[0] * P[0] + p[2] * P[1],
      p[1] * P[0] + p[3] * P[1],
      p[0] * P[2] + p[2] * P[3],
      p[1] * P[2] + p[3] * P[3]
    ] : P;
  }
  const y = (n.textAlign & 1) !== 0, m = y ? n.curX : s.x, M = y ? n.curY : s.y, b = (I, P) => ({ x: o * I + i * P + a, y: r * I + c * P + l }), w = b(m, M);
  let x = null;
  if (s.rect && s.options & (Io | hc)) {
    const I = b(s.rect.left, s.rect.top), P = b(s.rect.right, s.rect.bottom);
    x = {
      left: Math.round(Math.min(I.x, P.x)),
      top: Math.round(Math.min(I.y, P.y)),
      right: Math.round(Math.max(I.x, P.x)),
      bottom: Math.round(Math.max(I.y, P.y))
    };
  }
  const E = {
    codes: s.codes,
    glyphIndices: s.glyphIndices,
    x: w.x,
    y: w.y,
    dx: s.dx ? s.dx.map((I) => I * u) : null,
    dy: s.dy ? s.dy.map((I) => -I * h) : null,
    textAlign: n.textAlign,
    textColor: n.textColor,
    bkColor: n.bkColor,
    bkMode: n.bkMode,
    options: s.options,
    rect: x,
    matrix: p,
    underline: n.fontUnderline,
    strikeOut: n.fontStrikeOut
  }, T = Cf(t, f, E, n.fontFamilyMap), v = o * c - r * i;
  return v === 0 ? { dx: 0, dy: 0 } : { dx: (c * T.dx - i * T.dy) / v, dy: (-r * T.dx + o * T.dy) / v };
}
var x4 = 1.2;
function Gs(t, e, n) {
  if (n <= 0)
    return e;
  if (n >= 1)
    return t;
  const s = x4, o = n * Math.pow(t / 255, s) + (1 - n) * Math.pow(e / 255, s);
  return Math.round(255 * Math.pow(o, 1 / s));
}
function E4(t, e, n, s, o, r, i) {
  const c = new Uint8Array(r * i * 3);
  for (const f of e) {
    const g = f.bitmap, p = g.channels === 3 ? 3 : 1;
    for (let d = 0; d < g.height; d++) {
      const y = f.y + d - o;
      if (!(y < 0 || y >= i))
        for (let m = 0; m < g.width; m++) {
          const M = f.x + m - s;
          if (!(M < 0 || M >= r))
            for (let b = 0; b < 3; b++) {
              const w = p === 3 ? g.data[(d * g.width + m) * 3 + b] : g.data[d * g.width + m] * 255, x = (y * r + M) * 3 + b;
              w > c[x] && (c[x] = w);
            }
        }
    }
  }
  const a = W(r, i);
  if (!a)
    return;
  let l;
  try {
    l = V(t, s, o, r, i).data;
  } catch {
    return;
  }
  const u = zf(n), h = new Uint8ClampedArray(r * i * 4);
  for (let f = 0; f < r * i; f++) {
    const g = c[f * 3], p = c[f * 3 + 1], d = c[f * 3 + 2];
    if (!g && !p && !d) continue;
    const y = f * 4;
    if (l[y + 3] !== 255) {
      const m = [g / 255, p / 255, d / 255];
      Of(h, y, u, (M, b, w) => Gs(M, b, m[w]));
      continue;
    }
    h[y] = Gs(u[0], l[y], g / 255), h[y + 1] = Gs(u[1], l[y + 1], p / 255), h[y + 2] = Gs(u[2], l[y + 2], d / 255), h[y + 3] = 255;
  }
  Q(a.ctx, K(h, r, i), 0, 0), t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.globalCompositeOperation = "source-over", t.globalAlpha = 1, St(t, a.canvas, s, o, r, i), t.restore();
}
function v4(t, e) {
  const { placed: n } = $f(t, e);
  if (n.length === 0)
    return null;
  let s = 1 / 0, o = 1 / 0, r = -1 / 0, i = -1 / 0;
  for (const f of n)
    s = Math.min(s, f.x), o = Math.min(o, f.y), r = Math.max(r, f.x + f.bitmap.width), i = Math.max(i, f.y + f.bitmap.height);
  const c = r - s, a = i - o;
  if (c <= 0 || a <= 0 || c * a > 64 * 1024 * 1024)
    return null;
  const l = n.some((f) => f.bitmap.channels === 3) ? 3 : 1, u = new Uint8ClampedArray(c * a * l), h = t.mode === "mono" ? 1 : 16;
  for (const f of n) {
    const g = f.bitmap, p = g.channels === 3 ? 3 : 1;
    for (let d = 0; d < g.height; d++)
      for (let y = 0; y < g.width; y++)
        for (let m = 0; m < l; m++) {
          const M = p === 3 ? g.data[(d * g.width + y) * 3 + m] : Math.round(g.data[d * g.width + y] * 255 / h), b = ((f.y + d - o) * c + (f.x + y - s)) * l + m;
          M > u[b] && (u[b] = M);
        }
  }
  return { x: s, y: o, width: c, height: a, channels: l, data: u };
}
function jf(t, e, n, s, o) {
  const r = t.getUint32(n + 64, !0);
  if (r === 0)
    return null;
  const i = e + r, c = i + s * 4;
  if (i < 0 || c > o)
    return null;
  const a = [];
  for (let l = 0; l < s; l++)
    a.push(t.getUint32(i + l * 4, !0));
  return a;
}
function T4(t, e, n, s, o) {
  const { ctx: r, view: i, state: c } = t, a = t.fonts;
  if (!a)
    return !1;
  const l = i.getUint32(n + 44, !0), u = [];
  for (let y = 0; y < s; y++)
    u.push(i.getUint16(e + o + y * 2, !0));
  const h = (l & m4) !== 0, f = jf(i, e, n, h ? s * 2 : s, i.byteLength);
  let g = f, p = null;
  if (f && h) {
    g = [], p = [];
    for (let y = 0; y < s; y++)
      g.push(f[y * 2] | 0), p.push(f[y * 2 + 1] | 0);
  }
  const d = Gf(r, a, c, {
    codes: u,
    glyphIndices: (l & y4) !== 0,
    x: i.getInt32(n + 28, !0),
    y: i.getInt32(n + 32, !0),
    options: l,
    rect: {
      left: i.getInt32(n + 48, !0),
      top: i.getInt32(n + 52, !0),
      right: i.getInt32(n + 56, !0),
      bottom: i.getInt32(n + 60, !0)
    },
    dx: g,
    dy: p,
    matrix: rt(t)
  });
  return d ? (c.textAlign & 1 && (c.curX += d.dx, c.curY += d.dy), !0) : !1;
}
function I4(t) {
  return t & 2 ? "right" : t & 6 ? "center" : "left";
}
function P4(t) {
  const e = t & 24;
  return e === 24 ? "alphabetic" : e === 8 ? "bottom" : "top";
}
function Sr(t, e, n, s, o, r, i, c) {
  const a = s ? G0(s) : t.measureText(n).width, l = s ? o + j0(a, i) : o;
  if (e.bkMode === 2) {
    const u = Xi(e, c), h = t.fillStyle;
    t.fillStyle = e.bkColor, t.fillRect(l, r - u, a, u), t.fillStyle = h;
  }
  if (t.fillStyle = e.textColor, s) {
    const u = H0(s), h = t.textAlign;
    t.textAlign = "left";
    for (let f = 0; f < n.length && f < u.length; f++)
      t.fillText(n[f], l + u[f], r);
    t.textAlign = h;
  } else
    t.fillText(n, o, r);
  (e.fontUnderline || e.fontStrikeOut) && ny(t, e, l, r, a, c);
}
function S4(t, e, n, s) {
  const { ctx: o, view: r, state: i } = t;
  if (s < 76)
    return !0;
  const c = r.getInt32(n + 28, !0), a = r.getInt32(n + 32, !0), l = r.getUint32(n + 36, !0), u = r.getUint32(n + 40, !0), h = r.byteLength;
  if (l === 0 || u === 0 || e + u + l * 2 > h || T4(t, e, n, l, u))
    return !0;
  const f = hs(r, e + u, l);
  if (f.length === 0)
    return !0;
  const p = Bt(t) ? rt(t) : null, d = p ? Math.hypot(p[2], p[3]) : Math.abs(Nt(t, 1)), y = p ? Math.hypot(p[0], p[1]) : null;
  ey(o, i, d);
  const m = I4(i.textAlign);
  o.textBaseline = P4(i.textAlign), o.textAlign = m === "center" ? "center" : m === "right" ? "right" : "left";
  const M = jf(r, e, n, l, h), b = M ? M.map((E) => y !== null ? E * y : _t(t, E)) : null;
  b && (o.textAlign = "left");
  const w = p ? Z(t, c, a) : { x: ft(t, c), y: gt(t, a) }, x = V0(i.fontEscapementTenthDeg);
  return p && d > 0 && y ? (o.save(), o.translate(w.x, w.y), o.transform(
    p[0] / y,
    p[1] / y,
    p[2] / d,
    p[3] / d,
    0,
    0
  ), x !== 0 && o.rotate(x), Sr(o, i, f, b, 0, 0, m, d), o.restore()) : x !== 0 ? (o.save(), o.translate(w.x, w.y), o.rotate(x), Sr(o, i, f, b, 0, 0, m, d), o.restore()) : Sr(o, i, f, b, w.x, w.y, m, d), !0;
}
function R4(t, e, n, s, o) {
  return e === hu ? S4(t, n, s, o) : !1;
}
function vs(t, e, n) {
  const s = xf(n === "replace" ? null : t.clipRegion ?? null, e, n, {
    x: 0,
    y: 0,
    w: t.canvasW,
    h: t.canvasH
  });
  s.exact, t.clipRegion = s.region, we(t, s.region);
}
function Wf(t, e) {
  const { view: n } = t, s = n.getInt32(e, !0), o = n.getInt32(e + 4, !0), r = n.getInt32(e + 8, !0), i = n.getInt32(e + 12, !0);
  return b3(
    ft(t, s),
    gt(t, o),
    _t(t, r - s),
    Nt(t, i - o)
  );
}
function A4(t, e, n) {
  return n >= 24 && vs(t, Wf(t, e), "intersect"), !0;
}
function U4(t, e, n) {
  return n >= 24 && vs(t, Wf(t, e), "exclude"), !0;
}
var Vf = {
  1: "intersect",
  // RGN_AND
  2: "union",
  // RGN_OR
  3: "xor",
  // RGN_XOR
  4: "exclude",
  // RGN_DIFF
  5: "replace"
  // RGN_COPY
};
function k4(t, e, n) {
  const { view: s } = t;
  if (n < 16)
    return !0;
  const o = s.getUint32(e, !0), r = s.getUint32(e + 4, !0), i = Vf[r];
  if (!i)
    return !0;
  if (o === 0)
    return i === "replace" && (t.clipRegion = null, we(t, null)), !0;
  const c = e + 8;
  if (o < 32)
    return !0;
  const a = s.getUint32(c + 8, !0);
  if (a === 0)
    return !0;
  const l = [], u = c + 32;
  for (let h = 0; h < a; h++) {
    const f = u + h * 16;
    if (f + 16 > e + 8 + o)
      break;
    const g = s.getInt32(f, !0), p = s.getInt32(f + 4, !0), d = s.getInt32(f + 8, !0), y = s.getInt32(f + 12, !0);
    l.push({
      x: ft(t, g),
      y: gt(t, p),
      w: _t(t, d - g),
      h: Nt(t, y - p)
    });
  }
  return l.length === 0 || (vs(t, xn(l), i), X(`EMR_EXTSELECTCLIPRGN: mode=${r} (${i}) with ${l.length} rect(s)`)), !0;
}
function L4(t, e, n) {
  if (n >= 16) {
    const s = t.view.getInt32(e, !0), o = t.view.getInt32(e + 4, !0);
    t.clipRegion && (t.clipRegion = $o(t.clipRegion, _t(t, s), Nt(t, o)), we(t, t.clipRegion));
  }
  return !0;
}
function F4(t, e, n, s) {
  switch (e) {
    case M1:
      return A4(t, n, s);
    case z1:
      return k4(t, n, s);
    case m1:
      return U4(t, n, s);
    case d1:
      return L4(t, n, s);
    default:
      return !1;
  }
}
var D4 = 1;
function _4(t, e, n) {
  const s = new Uint8Array(e * n);
  if (!t.clipRegion)
    return s.fill(1), s;
  for (const o of po(t.clipRegion, null, "intersect", { x: 0, y: 0, w: e, h: n }))
    for (let r = Math.max(0, o.y); r < Math.min(n, o.y + o.h); r++)
      s.fill(1, r * e + Math.max(0, o.x), r * e + Math.min(e, o.x + o.w));
  return s;
}
function N4(t, e, n, s, o, r, i) {
  const c = new Ct(), a = (f, g) => {
    const p = g * e + f;
    return i[p] === 1 && r(t[p * 4] << 16 | t[p * 4 + 1] << 8 | t[p * 4 + 2]);
  };
  if (s < 0 || o < 0 || s >= e || o >= n || !a(s, o))
    return c;
  const l = new Uint8Array(e * n), u = [s, o], h = [];
  for (; u.length > 0; ) {
    const f = u.pop(), g = u.pop();
    if (l[f * e + g] || !a(g, f))
      continue;
    let p = g;
    for (; p > 0 && !l[f * e + p - 1] && a(p - 1, f); )
      p--;
    let d = g + 1;
    for (; d < e && !l[f * e + d] && a(d, f); )
      d++;
    l.fill(1, f * e + p, f * e + d), h.push([f, p, d]);
    for (const y of [f - 1, f + 1]) {
      if (y < 0 || y >= n)
        continue;
      let m = !1;
      for (let M = p; M < d; M++) {
        const b = !l[y * e + M] && a(M, y);
        b && !m && u.push(M, y), m = b;
      }
    }
  }
  h.sort((f, g) => f[0] - g[0] || f[1] - g[1]);
  for (const [f, g, p] of h)
    c.add(f, g, p);
  return c;
}
function B4(t, e, n, s) {
  if (e !== Q1)
    return !1;
  if (s < 24)
    return !0;
  const { ctx: o, view: r, state: i } = t;
  if (!le(o) || typeof o.getImageData != "function")
    return !0;
  const c = An(t);
  if (!c)
    return !0;
  const a = t.canvasW, l = t.canvasH, [u, h] = $(t, r.getInt32(n, !0), r.getInt32(n + 4, !0)), f = Gi(r.getUint32(n + 8, !0), Ye(i)), g = r.getUint32(n + 12, !0) === D4;
  let p;
  try {
    p = V(o, 0, 0, a, l).data;
  } catch {
    return !0;
  }
  const d = N4(
    p,
    a,
    l,
    Math.round(u / 16),
    Math.round(h / 16),
    g ? (y) => y === f : (y) => y !== f,
    _4(t, a, l)
  );
  return Ft(t, d, c, i.rop2), !0;
}
var X4 = 0, cl = 1, qf = 2;
function Y4(t, e, n, s) {
  const o = Math.floor((e - t) * 65536 / s);
  return Math.floor((t * 65536 + o * n) / 65536) >> 8;
}
function z4(t, e) {
  const n = Ao([t.flatMap((f) => [f.x, f.y])], !1);
  if (n.length === 0)
    return;
  const [s, o, r] = t.map((f) => ({ x: f.x / 16, y: f.y / 16, c: f.c.map((g) => Math.min(g, 65280)) })), i = (o.x - s.x) * (r.y - s.y) - (r.x - s.x) * (o.y - s.y);
  if (i === 0)
    return;
  const c = [0, 1, 2].map((f) => ((o.c[f] - s.c[f]) * (r.y - s.y) - (r.c[f] - s.c[f]) * (o.y - s.y)) / i), a = [0, 1, 2].map((f) => ((r.c[f] - s.c[f]) * (o.x - s.x) - (o.c[f] - s.c[f]) * (r.x - s.x)) / i), l = c.map((f) => Math.floor(f * 65536)), u = n.data, h = u[0];
  for (let f = 0; f < n.length * 3; f += 3) {
    const g = u[f], p = u[f + 1], d = u[f + 2];
    if (g < e.y || g >= e.y + e.h)
      continue;
    const y = [0, 1, 2].map((m) => s.c[m] + c[m] * (p - s.x) + a[m] * (g - s.y) + (g === h ? 0 : 0.5));
    for (let m = Math.max(p, e.x); m < Math.min(d, e.x + e.w); m++) {
      let M = 0;
      for (let b = 0; b < 3; b++) {
        const w = Math.floor(y[b] + l[b] * (m - p) / 65536 + 1e-9) >> 8;
        M = M << 8 | Math.max(0, Math.min(255, w));
      }
      e.rgb[(g - e.y) * e.w + (m - e.x)] = M;
    }
  }
}
function O4(t, e, n) {
  const { view: s } = t;
  if (n < 36)
    return null;
  const o = s.getUint32(e + 16, !0), r = s.getUint32(e + 20, !0), i = s.getUint32(e + 24, !0), c = i === qf ? 3 : 2, a = e + 28, l = a + o * 16;
  if (o > 1e6 || r > 1e6 || l + r * c * 4 > e - 8 + n)
    return null;
  const u = [];
  for (let f = 0; f < o; f++) {
    const g = a + f * 16, [p, d] = $(t, s.getInt32(g, !0), s.getInt32(g + 4, !0));
    u.push({ x: p, y: d, c: [s.getUint16(g + 8, !0), s.getUint16(g + 10, !0), s.getUint16(g + 12, !0)] });
  }
  const h = [];
  for (let f = 0; f < r; f++) {
    const g = [];
    for (let p = 0; p < c; p++)
      g.push(s.getUint32(l + (f * c + p) * 4, !0));
    g.every((p) => p < o) && h.push(g);
  }
  return { mode: i, vertices: u, mesh: h };
}
function al(t, e) {
  const n = Math.max(0, e.x), s = Math.max(0, e.y), o = Math.min(t.canvasW, e.x + e.w), r = Math.min(t.canvasH, e.y + e.h);
  if (o <= n || r <= s)
    return;
  const i = o - n, c = r - s, a = new Uint8ClampedArray(i * c * 4);
  let l = !1;
  for (let h = 0; h < c; h++)
    for (let f = 0; f < i; f++) {
      const g = e.rgb[(h + s - e.y) * e.w + (f + n - e.x)];
      if (g < 0)
        continue;
      const p = (h * i + f) * 4;
      a[p] = g >> 16 & 255, a[p + 1] = g >> 8 & 255, a[p + 2] = g & 255, a[p + 3] = 255, l = !0;
    }
  const u = l ? ze(i, c) : null;
  u && Oe(t.ctx, { x: n, y: s, w: i, h: c }, u, K(a, i, c));
}
function ll(t) {
  return `#${t.map((e) => (e >> 8).toString(16).padStart(2, "0")).join("")}`;
}
function $4(t, e, n) {
  const s = Math.round(t.x / 16), o = Math.round(t.y / 16), r = Math.round(e.x / 16), i = Math.round(e.y / 16), c = (n ? o <= i : s <= r) ? t : e;
  return { l: Math.min(s, r), t: Math.min(o, i), r: Math.max(s, r), b: Math.max(o, i), first: c, second: c === t ? e : t };
}
function C4(t, e, n, s) {
  if (e !== S2)
    return !1;
  const o = O4(t, n, s);
  if (!o)
    return !0;
  const { ctx: r } = t;
  if (o.mode === X4 || o.mode === cl) {
    const i = o.mode === cl, c = ot(r) && t.gdiAntialias !== !1;
    for (const [a, l] of o.mesh) {
      const u = $4(o.vertices[a], o.vertices[l], i), h = u.r - u.l, f = u.b - u.t;
      if (h <= 0 || f <= 0)
        continue;
      if (c) {
        const w = i ? f : h, x = i ? r.createLinearGradient(0, u.t, 0, u.t + w) : r.createLinearGradient(u.l, 0, u.l + w, 0);
        x.addColorStop(0, ll(u.first.c)), x.addColorStop(1, ll(u.second.c)), r.save(), r.setTransform(1, 0, 0, 1, 0, 0), r.fillStyle = x, r.fillRect(u.l, u.t, h, f), r.restore();
        continue;
      }
      const g = Math.max(u.l, 0), p = Math.max(u.t, 0), d = Math.min(u.r, t.canvasW), y = Math.min(u.b, t.canvasH);
      if (d <= g || y <= p)
        continue;
      const m = { x: g, y: p, w: d - g, h: y - p, rgb: new Int32Array((d - g) * (y - p)) }, M = i ? f : h, b = [];
      for (let w = i ? p - u.t : g - u.l; w < (i ? y - u.t : d - u.l); w++) {
        let x = 0;
        for (let E = 0; E < 3; E++)
          x = x << 8 | Math.max(0, Math.min(255, Y4(u.first.c[E], u.second.c[E], w, M)));
        b.push(x);
      }
      for (let w = 0; w < m.h; w++)
        for (let x = 0; x < m.w; x++)
          m.rgb[w * m.w + x] = b[i ? w : x];
      al(t, m);
    }
    return !0;
  }
  if (o.mode === qf)
    for (const i of o.mesh) {
      const c = i.map((d) => o.vertices[d]), a = c.map((d) => d.x / 16), l = c.map((d) => d.y / 16), u = Math.max(0, Math.floor(Math.min(...a)) - 1), h = Math.max(0, Math.floor(Math.min(...l)) - 1), f = Math.min(t.canvasW, Math.ceil(Math.max(...a)) + 1), g = Math.min(t.canvasH, Math.ceil(Math.max(...l)) + 1);
      if (f <= u || g <= h)
        continue;
      const p = { x: u, y: h, w: f - u, h: g - h, rgb: new Int32Array((f - u) * (g - h)).fill(-1) };
      z4(c, p), al(t, p);
    }
  return !0;
}
var H4 = 6;
function Rr(t, e, n) {
  const s = [];
  if (n < 32 || e + 32 > t.byteLength)
    return s;
  const o = t.getUint32(e + 8, !0), r = Math.min(t.byteLength, e + n);
  for (let i = 0; i < o; i++) {
    const c = e + 32 + i * 16;
    if (c + 16 > r)
      break;
    s.push([t.getInt32(c, !0), t.getInt32(c + 4, !0), t.getInt32(c + 8, !0), t.getInt32(c + 12, !0)]);
  }
  return s;
}
function Ar(t, e) {
  const n = new Ct();
  if (Bt(t)) {
    const s = e.map(([o, r, i, c]) => [...$(t, o, r), ...$(t, i, r), ...$(t, i, c), ...$(t, o, c)]);
    return Ao(s, !0, n);
  }
  for (const [s, o, r, i] of e) {
    const c = Math.round(ft(t, s)), a = Math.round(ft(t, r)), l = Math.round(gt(t, o)), u = Math.round(gt(t, i)), h = Math.min(c, a), f = Math.max(c, a);
    for (let g = Math.min(l, u); g < Math.max(l, u); g++)
      n.add(g, h, f);
  }
  return n;
}
function G4(t, e, n) {
  const s = new Ct(), o = t.bounds();
  if (!o)
    return s;
  const r = o.x1 - o.x0, i = o.y1 - o.y0, c = new Uint8Array(r * i), a = t.data;
  for (let h = 0; h < t.length * 3; h += 3)
    c.fill(1, (a[h] - o.y0) * r + a[h + 1] - o.x0, (a[h] - o.y0) * r + a[h + 2] - o.x0);
  const l = new Uint8Array(r * i);
  for (let h = 0; h < i; h++)
    for (let f = 0; f < r; f++) {
      let g = 1;
      for (let p = -e; p <= e && g; p++) {
        const d = f + p;
        g = d >= 0 && d < r ? c[h * r + d] : 0;
      }
      l[h * r + f] = g;
    }
  const u = (h, f) => {
    for (let g = -n; g <= n; g++) {
      const p = f + g;
      if (p < 0 || p >= i || !l[p * r + h])
        return !1;
    }
    return !0;
  };
  for (let h = 0; h < i; h++) {
    let f = -1;
    for (let g = 0; g <= r; g++) {
      const p = g < r && c[h * r + g] === 1 && !u(g, h);
      p && f < 0 ? f = g : !p && f >= 0 && (s.add(h + o.y0, f + o.x0, g + o.x0), f = -1);
    }
  }
  return s;
}
function ul(t, e) {
  const n = e >= us ? ju(e - us) : t.objectTable.get(e) ?? null;
  return n && n.kind === "brush" ? n : null;
}
function Ur(t, e, n) {
  const { state: s } = t, o = { style: s.brushStyle, color: s.brushColor, pattern: s.brushPattern };
  n && (s.brushStyle = n.style, s.brushColor = n.colorRef !== void 0 ? Tt(s, n.colorRef) : n.color, s.brushPattern = n.pattern ?? null);
  try {
    const r = An(t);
    r && Ft(t, e, r, s.rop2);
  } finally {
    s.brushStyle = o.style, s.brushColor = o.color, s.brushPattern = o.pattern;
  }
}
function j4(t, e, n, s) {
  const { view: o } = t;
  switch (e) {
    case o2: {
      if (s >= 32) {
        const r = o.getUint32(n + 16, !0), i = ul(t, o.getUint32(n + 20, !0));
        i && Ur(t, Ar(t, Rr(o, n + 24, r)), i);
      }
      return !0;
    }
    case r2: {
      if (s >= 40) {
        const r = o.getUint32(n + 16, !0), i = ul(t, o.getUint32(n + 20, !0)), c = Math.round(Math.abs(_t(t, o.getInt32(n + 24, !0)))), a = Math.round(Math.abs(Nt(t, o.getInt32(n + 28, !0))));
        if (i) {
          const l = Ar(t, Rr(o, n + 32, r));
          Ur(t, G4(l, c, a), i);
        }
      }
      return !0;
    }
    case vc:
    case i2: {
      if (s >= 24) {
        const r = o.getUint32(n + 16, !0), i = Ar(t, Rr(o, n + 20, r));
        e === vc ? Ft(t, i, { kind: "solid", rgb: 0 }, H4) : Ur(t, i, null);
      }
      return !0;
    }
    default:
      return !1;
  }
}
function W4(t, e, n, s, o) {
  return R4(t, e, n, s, o) || i4(t, e, n, s, o) || d4(t, e, n, s, o) || F4(t, e, s, o) || j4(t, e, s, o) || B4(t, e, s, o) || C4(t, e, s, o);
}
function Jf(t, e, n, s, o) {
  return t4(t, e, s, o) || W4(t, e, n, s, o);
}
function V4(t, e, n, s, o, r, i) {
  const { view: c } = e;
  let a = 0;
  for (let l = 0; l < o; l++) {
    const u = c.getUint32(s + l * 4, !0);
    for (let h = 0; h < u && a < r; h++) {
      const f = n(a);
      h === 0 ? t.moveTo(f.x, f.y) : t.lineTo(f.x, f.y), a++;
    }
    i && t.closePath();
  }
}
function hl(t, e, n, s, o, r, i) {
  const { view: c } = e;
  let a = 0;
  for (let l = 0; l < o; l++) {
    const u = c.getUint32(s + l * 4, !0);
    for (let h = 0; h < u && a < r; h++) {
      const [f, g] = n(a), [p, d] = $(e, f, g);
      h === 0 ? t.moveTo(p, d) : t.lineTo(p, d), a++;
    }
    i && u > 0 && t.closeFigure();
  }
}
function qo(t, e, n, s, o, r) {
  const { view: i, state: c, inPath: a } = t, l = i.getUint32(n + 16, !0), u = i.getUint32(n + 20, !0);
  if (l === 0 || l >= 1e4 || u >= 1e5)
    return;
  const h = n + 24, f = h + l * 4;
  if (f + u * o > e + s)
    return;
  const g = (y) => o === 8 ? [i.getInt32(f + y * 8, !0), i.getInt32(f + y * 8 + 4, !0)] : [i.getInt16(f + y * 4, !0), i.getInt16(f + y * 4 + 2, !0)], p = (y) => {
    const [m, M] = g(y);
    return Z(t, m, M);
  }, d = (y) => {
    V4(y, t, p, h, l, u, r);
  };
  if (a) {
    d(Ht(t)), t.rasterPath ?? (t.rasterPath = new ht()), hl(t.rasterPath, t, g, h, l, u, r);
    return;
  }
  t.lineStyle = { pos: 0 }, Mt(t, {
    build: (y) => {
      y.beginPath(), d(y);
    },
    raster: () => {
      const y = new ht();
      return hl(y, t, g, h, l, u, r), y;
    },
    fill: r,
    stroke: !0,
    fillRule: c.polyFillMode === 2 ? "nonzero" : "evenodd"
  });
}
function q4(t, e, n, s) {
  qo(t, e, n, s, 8, !0);
}
function J4(t, e, n, s) {
  qo(t, e, n, s, 8, !1);
}
function K4(t, e, n, s) {
  qo(t, e, n, s, 4, !1);
}
function Z4(t, e, n, s) {
  qo(t, e, n, s, 4, !0);
}
function Kf(t, e, n, s, o) {
  const { state: r, inPath: i } = t, { polygon: c, bezier: a, to: l } = o, u = (p) => {
    const [d, y] = s(p);
    return Z(t, d, y);
  }, h = (p) => {
    if (!l) {
      const y = u(0);
      p.moveTo(y.x, y.y);
    }
    let d = l ? 0 : 1;
    if (a)
      for (; d + 2 < n; ) {
        const y = u(d), m = u(d + 1), M = u(d + 2);
        p.bezierCurveTo(y.x, y.y, m.x, m.y, M.x, M.y), d += 3;
      }
    else
      for (; d < n; d++) {
        const y = u(d);
        p.lineTo(y.x, y.y);
      }
    c && p.closePath();
  }, f = (p) => {
    const [d, y] = s(p);
    return $(t, d, y);
  }, g = (p, d) => {
    let y = 0;
    if (l)
      d && p.moveTo(d[0], d[1]);
    else {
      const m = f(0);
      p.moveTo(m[0], m[1]), y = 1;
    }
    if (a)
      for (; y + 2 < n; y += 3) {
        const m = f(y), M = f(y + 1), b = f(y + 2);
        p.bezierTo(m[0], m[1], M[0], M[1], b[0], b[1]);
      }
    else
      for (; y < n; y++) {
        const m = f(y);
        p.lineTo(m[0], m[1]);
      }
    c && p.closeFigure();
  };
  if (i)
    h(Ht(t)), t.rasterPath ?? (t.rasterPath = new ht()), g(t.rasterPath, l && t.rasterPath.figures.length === 0 ? xe(t) : null);
  else {
    const p = l ? xe(t) : null, d = l ? Z(t, r.curX, r.curY) : null;
    t.lineStyle = { pos: 0 }, Mt(t, {
      build: (y) => {
        y.beginPath(), d && y.moveTo(d.x, d.y), h(y);
      },
      raster: () => {
        const y = new ht();
        return g(y, p), y;
      },
      fill: c,
      stroke: !0,
      fillRule: r.polyFillMode === 2 ? "nonzero" : "evenodd"
    });
  }
  if (n > 0) {
    const [p, d] = s(n - 1);
    r.curX = p, r.curY = d;
  }
}
function Q4(t, e, n, s, o) {
  const { view: r } = t;
  if (o < 28)
    return !0;
  const i = r.getUint32(s + 16, !0), c = s + 20;
  return i === 0 || c + i * 8 > n + o || Kf(t, e, i, (a) => [r.getInt32(c + a * 8, !0), r.getInt32(c + a * 8 + 4, !0)], {
    polygon: e === Nl,
    bezier: e === _l || e === Yr,
    to: e === Yr || e === Bl
  }), !0;
}
function t5(t, e, n, s, o) {
  const { view: r } = t;
  if (o < 28)
    return !0;
  const i = r.getUint32(s + 16, !0), c = s + 20;
  return i === 0 || c + i * 4 > n + o || Kf(t, e, i, (a) => [r.getInt16(c + a * 4, !0), r.getInt16(c + a * 4 + 2, !0)], {
    polygon: e === Ii,
    bezier: e === fu || e === Or,
    to: e === Or || e === pu
  }), !0;
}
var kr = 1, e5 = 2, n5 = 4, fl = 6;
function gl(t, e, n, s, o) {
  const { view: r, state: i, inPath: c } = t;
  if (s < 28)
    return;
  const a = r.getUint32(n + 16, !0), l = n + 20, u = l + a * o;
  if (a === 0 || a > 1e6 || u + a > e + s)
    return;
  const h = (m) => o === 8 ? [r.getInt32(l + m * 8, !0), r.getInt32(l + m * 8 + 4, !0)] : [r.getInt16(l + m * 4, !0), r.getInt16(l + m * 4 + 2, !0)], f = (m) => r.getUint8(u + m), g = (m, M, b, w) => {
    let x = !1;
    const E = () => {
      x || (w && (m == null || m.moveTo(w.x, w.y)), b && (M == null || M.moveTo(b[0], b[1])), x = !0);
    };
    for (let T = 0; T < a; T++) {
      const I = f(T) & ~kr;
      if (I === fl) {
        const [P, S] = h(T), R = Z(t, P, S), U = $(t, P, S);
        m == null || m.moveTo(R.x, R.y), M == null || M.moveTo(U[0], U[1]), x = !0;
        continue;
      }
      if (I === e5) {
        E();
        const [P, S] = h(T), R = Z(t, P, S), U = $(t, P, S);
        m == null || m.lineTo(R.x, R.y), M == null || M.lineTo(U[0], U[1]);
      } else if (I === n5 && T + 2 < a) {
        E();
        const P = [0, 1, 2].map((U) => h(T + U)), S = P.map(([U, A]) => Z(t, U, A)), R = P.map(([U, A]) => $(t, U, A));
        m == null || m.bezierCurveTo(S[0].x, S[0].y, S[1].x, S[1].y, S[2].x, S[2].y), M == null || M.bezierTo(R[0][0], R[0][1], R[1][0], R[1][1], R[2][0], R[2][1]), T += 2;
      } else
        continue;
      f(T) & kr && (m == null || m.closePath(), M == null || M.closeFigure());
    }
  }, p = (f(0) & ~kr) === fl;
  if (c) {
    t.rasterPath ?? (t.rasterPath = new ht());
    const m = t.rasterPath.figures.length === 0;
    g(Ht(t), t.rasterPath, !p && m ? xe(t) : null, null);
  } else {
    const m = p ? null : xe(t), M = p ? null : Z(t, i.curX, i.curY);
    t.lineStyle = { pos: 0 }, Mt(t, {
      build: (b) => {
        b.beginPath(), g(b, null, null, M);
      },
      raster: () => {
        const b = new ht();
        return g(null, b, m, null), b;
      },
      fill: !1,
      stroke: !0
    });
  }
  const [d, y] = h(a - 1);
  i.curX = d, i.curY = y, t.curFix = void 0;
}
function s5(t) {
  const e = [];
  for (const n of t)
    n.op === "moveTo" && e.length > 0 && e.push({ op: "closePath" }), e.push(n);
  return e.length > 0 && e.push({ op: "closePath" }), e;
}
function Lr(t, e, n) {
  const { state: s } = t, o = e && n, r = o ? s5(t.pathCmds) : t.pathCmds, i = (a) => {
    a.beginPath(), fM(a, r);
  };
  let c = t.rasterPath ?? new ht();
  if (o) {
    const a = new ht();
    a.append(c);
    for (const l of a.figures)
      l.closed = !0;
    c = a;
  }
  Mt(t, {
    build: i,
    raster: () => c,
    fill: e,
    stroke: n,
    fillRule: s.polyFillMode === 2 ? "nonzero" : "evenodd"
  });
}
function $n(t) {
  t.pathCmds = [], t.rasterPath = new ht();
}
function Zf(t) {
  var n;
  const e = [];
  for (const s of ((n = t.rasterPath) == null ? void 0 : n.figures) ?? []) {
    for (let o = 0; o + 1 < s.pts.length; o += 2)
      e.push({ op: o === 0 ? "moveTo" : "lineTo", x: s.pts[o] / 16, y: s.pts[o + 1] / 16 });
    s.closed && e.push({ op: "closePath" });
  }
  t.pathCmds = e;
}
function o5(t) {
  if (!(t.inPath || !t.rasterPath)) {
    for (const e of t.rasterPath.figures)
      delete e.tangents;
    Zf(t);
  }
}
function r5(t) {
  const { state: e } = t;
  if (t.inPath || !t.rasterPath || (e.penStyle & 15) === 5)
    return;
  const n = Ee(t) ? { width: 16, cap: "round", join: "round", miterLimit: e.miterLimit ?? 10 } : ff(t), s = rf(t.rasterPath, n), o = new ht();
  for (const r of s)
    if (!(r.length < 4)) {
      o.moveTo(r[0], r[1]);
      for (let i = 2; i + 1 < r.length; i += 2)
        o.lineTo(r[i], r[i + 1]);
      o.closeFigure();
    }
  t.rasterPath = o, Zf(t);
}
function Qf(t, e, n, s, o) {
  var c;
  const { ctx: r, state: i } = t;
  switch (e) {
    case K0:
    case Nl:
    case _l:
    case Yr:
    case Bl:
      return Q4(t, e, n, s, o);
    case gu:
    case Ii:
    case fu:
    case Or:
    case pu:
      return t5(t, e, n, s, o);
    case Z0:
      return o >= 28 && J4(t, n, s, o), !0;
    case Q0:
      return o >= 28 && q4(t, n, s, o), !0;
    case du:
      return o >= 28 && Z4(t, n, s, o), !0;
    case t2:
      return gl(t, n, s, o, 8), !0;
    case h2:
      return gl(t, n, s, o, 4), !0;
    case u2:
      return o >= 28 && K4(t, n, s, o), !0;
    case F1:
      return t.inPath = !0, t.pathCmds = [], t.rasterPath = new ht(), r.beginPath(), !0;
    case D1:
      return t.inPath = !1, !0;
    case _1:
      return r.closePath(), t.inPath && (t.pathCmds.push({ op: "closePath" }), (c = t.rasterPath) == null || c.closeFigure()), !0;
    case N1:
      return Lr(t, !0, !1), $n(t), !0;
    case B1:
      return Lr(t, !0, !0), $n(t), !0;
    case X1:
      return Lr(t, !1, !0), $n(t), !0;
    case e2:
      return o5(t), !0;
    case n2:
      return r5(t), !0;
    case s2:
      return t.inPath = !1, $n(t), r.beginPath(), !0;
    case Y1: {
      const a = o >= 12 ? t.view.getUint32(s, !0) : 5, l = Vf[a];
      if (t.inPath || !t.rasterPath || t.rasterPath.figures.length === 0 || !l)
        return !0;
      const u = nf(Ri(t.rasterPath, i.polyFillMode === 2)), h = u.length > 0 ? xn(u) : Qt();
      return vs(t, h, l), $n(t), !0;
    }
    default:
      return !1;
  }
}
var i5 = /* @__PURE__ */ new Set([
  G1,
  f2,
  g2,
  p2,
  d2,
  y2,
  m2,
  M2,
  b2,
  w2,
  x2,
  E2,
  v2,
  T2,
  R2,
  U2,
  k2
]);
function c5(t, e, n, s) {
  const { view: o, state: r } = t;
  switch (e) {
    case A2: {
      if (s >= 16) {
        const i = o.getInt32(n, !0), c = o.getInt32(n + 4, !0);
        r.textJustification = i !== 0 && c > 0 ? { extra: i, count: c } : void 0;
      }
      return !0;
    }
    case j1:
      return s >= 32 && (r.colorAdjustment = {
        flags: o.getUint16(n + 2, !0),
        illuminant: o.getUint16(n + 4, !0),
        redGamma: o.getUint16(n + 6, !0),
        greenGamma: o.getUint16(n + 8, !0),
        blueGamma: o.getUint16(n + 10, !0),
        referenceBlack: o.getUint16(n + 12, !0),
        referenceWhite: o.getUint16(n + 14, !0),
        contrast: o.getInt16(n + 16, !0),
        brightness: o.getInt16(n + 18, !0),
        colorfulness: o.getInt16(n + 20, !0),
        redGreenTint: o.getInt16(n + 22, !0)
      }), !0;
    default:
      return !!i5.has(e);
  }
}
function a5(t, e, n, s) {
  const { view: o, state: r } = t;
  switch (e) {
    case T1: {
      if (s >= 28) {
        const i = o.getUint32(n, !0), c = o.getUint32(n + 4, !0), a = o.getInt32(n + 8, !0), l = yn(o, n + 16), u = Tt(r, l);
        t.objectTable.set(i, {
          kind: "pen",
          style: c & 255,
          widthX: a,
          color: u,
          flags: c,
          ...to(l) ? { colorRef: l } : {}
        });
      }
      return !0;
    }
    case $1: {
      if (s >= 52) {
        const i = o.getUint32(n, !0), c = o.getUint32(n + 20, !0), a = o.getInt32(n + 24, !0), l = yn(o, n + 32), u = Tt(r, l), h = o.getUint32(n + 40, !0), f = [];
        if ((c & 15) === 7)
          for (let g = 0; g < h && g < 16 && 52 + g * 4 + 4 <= s; g++)
            f.push(o.getUint32(n + 44 + g * 4, !0));
        t.objectTable.set(i, {
          kind: "pen",
          style: c & 15,
          widthX: a,
          color: u,
          flags: c,
          extended: !0,
          ...to(l) ? { colorRef: l } : {},
          ...f.length > 0 ? { userStyle: f } : {}
        });
      }
      return !0;
    }
    case I1: {
      if (s >= 24) {
        const i = o.getUint32(n, !0), c = o.getUint32(n + 4, !0), a = yn(o, n + 8), l = Tt(r, a), u = o.getUint32(n + 12, !0);
        t.objectTable.set(i, {
          kind: "brush",
          style: c,
          color: l,
          ...to(a) ? { colorRef: a } : {},
          ...c === 2 && u <= 5 ? { pattern: { kind: "hatch", hatch: u } } : {}
        });
      }
      return !0;
    }
    case Ec:
    case r1: {
      if (s >= 32) {
        const i = o.getUint32(n, !0), c = e === Ec, a = o.getUint32(n + 4, !0), l = C0(o, n - 8, n, c, a === 1 ? Ye(r) : null);
        t.objectTable.set(i, {
          kind: "brush",
          style: l ? c ? 3 : 6 : 0,
          // Flat stand-in for fills that do not realise the pattern.
          color: "#808080",
          ...l ? { pattern: l } : {}
        });
      }
      return !0;
    }
    case O1: {
      if (s >= 332) {
        const i = o.getUint32(n, !0), c = o.getInt32(n + 4, !0), a = o.getInt32(n + 8, !0), l = o.getInt32(n + 12, !0), u = o.getInt32(n + 16, !0), h = o.getInt32(n + 20, !0), f = o.getUint8(n + 24), g = o.getUint8(n + 25), p = o.getUint8(n + 26), d = o.getUint8(n + 27), y = o.getUint8(n + 30), m = o.getUint8(n + 31), M = hs(o, n + 32, 32) || "sans-serif";
        t.objectTable.set(i, {
          kind: "font",
          // Sign kept (not Math.abs'd): resolveFontPixelHeight() needs it
          // to distinguish GDI's cell-height vs character-height convention.
          height: c,
          weight: h,
          italic: f !== 0,
          underline: g !== 0,
          strikeOut: p !== 0,
          family: M,
          escapementTenthDeg: l,
          details: { width: a, orientationTenthDeg: u, charSet: d, quality: y, pitchAndFamily: m }
        });
      }
      return !0;
    }
    case v1: {
      if (s >= 12) {
        const i = o.getUint32(n, !0), c = i >= us ? ju(i - us) : t.objectTable.get(i) ?? null;
        if (c)
          switch (c.kind) {
            case "pen":
              r.penStyle = c.style, r.penWidth = c.widthX, r.penColor = c.colorRef !== void 0 ? Tt(r, c.colorRef) : c.color, wo(r, "pen", c.colorRef), r.penFlags = c.flags ?? c.style, r.penUserStyle = c.userStyle, r.penExtended = c.extended === !0;
              break;
            case "brush":
              r.brushStyle = c.style, r.brushColor = c.colorRef !== void 0 ? Tt(r, c.colorRef) : c.color, wo(r, "brush", c.colorRef), r.brushPattern = c.pattern ?? null;
              break;
            case "font":
              r.fontHeight = c.height, r.fontWeight = c.weight, r.fontItalic = c.italic, r.fontUnderline = c.underline, r.fontStrikeOut = c.strikeOut, r.fontFamily = c.family, r.fontEscapementTenthDeg = c.escapementTenthDeg ?? 0, r.fontDetails = c.details;
              break;
          }
      }
      return !0;
    }
    case P1:
      return s >= 12 && t.objectTable.delete(o.getUint32(n, !0)), !0;
    default:
      return !1;
  }
}
function l5(t, e, n, s) {
  const { view: o } = t;
  switch (e) {
    case t1:
      return s >= 16 && (t.windowExt.cx = o.getInt32(n, !0), t.windowExt.cy = o.getInt32(n + 4, !0), Ae(t)), !0;
    case e1:
      return s >= 16 && (t.windowOrg.x = o.getInt32(n, !0), t.windowOrg.y = o.getInt32(n + 4, !0), Ae(t)), !0;
    case n1:
      return s >= 16 && (t.viewportExt.cx = o.getInt32(n, !0), t.viewportExt.cy = o.getInt32(n + 4, !0), Ae(t)), !0;
    case s1:
      return s >= 16 && (t.viewportOrg.x = o.getInt32(n, !0), t.viewportOrg.y = o.getInt32(n + 4, !0), Ae(t)), !0;
    case c1: {
      if (s >= 12) {
        const r = o.getUint32(n, !0);
        (r === 8 || r === 7) && Ae(t);
      }
      return !0;
    }
    case b1: {
      if (s >= 24) {
        const r = o.getInt32(n, !0), i = o.getInt32(n + 4, !0), c = o.getInt32(n + 8, !0), a = o.getInt32(n + 12, !0);
        i !== 0 && (t.viewportExt.cx = Math.round(t.viewportExt.cx * r / i)), a !== 0 && (t.viewportExt.cy = Math.round(t.viewportExt.cy * c / a)), Ae(t);
      }
      return !0;
    }
    case w1: {
      if (s >= 24) {
        const r = o.getInt32(n, !0), i = o.getInt32(n + 4, !0), c = o.getInt32(n + 8, !0), a = o.getInt32(n + 12, !0);
        i !== 0 && (t.windowExt.cx = Math.round(t.windowExt.cx * r / i)), a !== 0 && (t.windowExt.cy = Math.round(t.windowExt.cy * c / a)), Ae(t);
      }
      return !0;
    }
    default:
      return !1;
  }
}
function u5(t, e, n, s) {
  const { view: o, state: r } = t;
  switch (e) {
    case x1:
      return s >= 32 && (r.worldTransform = [
        o.getFloat32(n, !0),
        o.getFloat32(n + 4, !0),
        o.getFloat32(n + 8, !0),
        o.getFloat32(n + 12, !0),
        o.getFloat32(n + 16, !0),
        o.getFloat32(n + 20, !0)
      ]), !0;
    case E1: {
      if (s >= 36) {
        const i = o.getUint32(n + 24, !0);
        if (i === 1)
          r.worldTransform = [1, 0, 0, 1, 0, 0];
        else if (i === 2 || i === 3) {
          const c = [
            o.getFloat32(n, !0),
            o.getFloat32(n + 4, !0),
            o.getFloat32(n + 8, !0),
            o.getFloat32(n + 12, !0),
            o.getFloat32(n + 16, !0),
            o.getFloat32(n + 20, !0)
          ], [a, l, u, h, f, g] = r.worldTransform;
          i === 2 ? r.worldTransform = [
            c[0] * a + c[1] * u,
            c[0] * l + c[1] * h,
            c[2] * a + c[3] * u,
            c[2] * l + c[3] * h,
            c[4] * a + c[5] * u + f,
            c[4] * l + c[5] * h + g
          ] : r.worldTransform = [
            a * c[0] + l * c[2],
            a * c[1] + l * c[3],
            u * c[0] + h * c[2],
            u * c[1] + h * c[3],
            f * c[0] + g * c[2] + c[4],
            f * c[1] + g * c[3] + c[5]
          ];
        }
      }
      return !0;
    }
    default:
      return !1;
  }
}
function h5(t, e, n, s) {
  return l5(t, e, n, s) || u5(t, e, n, s);
}
function t0() {
  return {
    penColor: "#000000",
    penWidth: 1,
    penStyle: 0,
    brushColor: "#ffffff",
    brushStyle: 0,
    brushPattern: null,
    brushOrgX: 0,
    brushOrgY: 0,
    stretchBltMode: 1,
    textColor: "#000000",
    bkColor: "#ffffff",
    bkMode: 2,
    // Negative (character-height convention) so the no-font-selected default
    // resolves to exactly 12px, matching this library's historical fallback.
    fontHeight: -12,
    fontWeight: 400,
    fontItalic: !1,
    fontFamily: "sans-serif",
    fontUnderline: !1,
    fontStrikeOut: !1,
    fontEscapementTenthDeg: 0,
    rop2: 13,
    curX: 0,
    curY: 0,
    polyFillMode: 1,
    textAlign: 0,
    worldTransform: [1, 0, 0, 1, 0, 0]
  };
}
function f5(t) {
  return {
    ...t,
    worldTransform: [...t.worldTransform]
  };
}
function e0() {
  return {
    objectTable: /* @__PURE__ */ new Map(),
    worldTransform: [1, 0, 0, 1, 0, 0],
    saveStack: [],
    saveIdMap: /* @__PURE__ */ new Map(),
    clipRegion: null,
    clipSaveDepth: 0
  };
}
function n0(t, e, n, s, o) {
  var a, l;
  if (h5(t, e, s, o) || a5(t, e, s, o) || hM(t, e, s, o) || c5(t, e, s, o))
    return !0;
  const { ctx: r, view: i, state: c } = t;
  switch (e) {
    case ou: {
      for (; t.clipSaveDepth > 0; )
        r.restore(), t.clipSaveDepth--;
      return t.clipStack ?? (t.clipStack = []), t.clipStack.push({ region: t.clipRegion ?? null }), t.stateStack.push(f5(c)), r.save(), t.clipRegion && we(t, t.clipRegion), !0;
    }
    case ru: {
      if (o >= 12) {
        for (; t.clipSaveDepth > 0; )
          r.restore(), t.clipSaveDepth--;
        let u = i.getInt32(s, !0);
        for (u < 0 && (u = t.stateStack.length + u + 1); t.stateStack.length > u && t.stateStack.length > 0; )
          t.stateStack.pop(), (a = t.clipStack) == null || a.pop(), r.restore();
        const h = t.stateStack.pop();
        if (h) {
          const f = (l = t.clipStack) == null ? void 0 : l.pop();
          Object.assign(c, h), r.restore(), t.clipRegion = (f == null ? void 0 : f.region) ?? null, t.clipRegion && we(t, t.clipRegion);
        }
      }
      return !0;
    }
    case g1: {
      if (o >= 12) {
        const u = yn(i, s);
        c.textColor = Tt(c, u), wo(c, "text", u);
      }
      return !0;
    }
    case p1: {
      if (o >= 12) {
        const u = yn(i, s);
        c.bkColor = Tt(c, u), wo(c, "bk", u);
      }
      return !0;
    }
    case zl:
      return o >= 12 && (c.bkMode = i.getUint32(s, !0)), !0;
    case Ol:
      return o >= 12 && (c.polyFillMode = i.getUint32(s, !0)), !0;
    case $l:
      return o >= 12 && (c.rop2 = i.getUint32(s, !0)), !0;
    case Cl:
      return o >= 12 && (c.stretchBltMode = i.getUint32(s, !0)), !0;
    case o1:
      return o >= 16 && (c.brushOrgX = i.getInt32(s, !0), c.brushOrgY = i.getInt32(s + 4, !0)), !0;
    case L1: {
      if (o >= 12) {
        const u = i.getFloat32(s, !0);
        c.miterLimit = Number.isFinite(u) && u >= 1 ? u : Math.max(1, i.getUint32(s, !0));
      }
      return !0;
    }
    case k1:
      return o >= 12 && (c.arcDirection = i.getUint32(s, !0) === 2 ? 2 : 1), !0;
    case nu:
      return o >= 12 && (c.textAlign = i.getUint32(s, !0)), !0;
    default:
      return !1;
  }
}
function s0(t) {
  const e = t.canvas, n = e == null ? void 0 : e.width, s = e == null ? void 0 : e.height;
  return typeof n == "number" && typeof s == "number" && n > 0 && s > 0 ? { w: n, h: s } : null;
}
function pl(t, e, n) {
  const s = W(e, n);
  return s ? (Q(s.ctx, K(t, e, n), 0, 0), s) : null;
}
function o0(t, e, n) {
  const s = s0(t);
  if (n.resample && s) {
    const r = Xo(e.rgba, e.width, e.height, n.resample, s);
    if (r) {
      const i = pl(r.rgba, r.w, r.h);
      if (!i)
        return !1;
      t.save();
      try {
        t.setTransform(1, 0, 0, 1, 0, 0), t.imageSmoothingEnabled = !1, St(t, i.canvas, r.x, r.y, r.w, r.h);
      } finally {
        t.restore();
      }
      return !0;
    }
  }
  const o = pl(e.rgba, e.width, e.height);
  if (!o)
    return !1;
  t.save();
  try {
    t.setTransform(...n.transform), St(t, o.canvas, n.dx, n.dy, n.dw, n.dh);
  } finally {
    t.restore();
  }
  return !0;
}
function g5(t, e) {
  if (!t.data)
    return null;
  const n = new Uint8Array(t.data.slice(0)), s = nh(n);
  return s ? { kind: "encoded", bytes: n, mime: s } : e ? { kind: "rgba", data: e.rgba, width: e.width, height: e.height } : oh(n.buffer);
}
function p5(t, e, n, s) {
  const o = g5(e, n);
  if (!o)
    return !1;
  const r = t.reserveSlot(), i = t.imageResampling === "exact" && n && s.resample ? Xo(n.rgba, n.width, n.height, s.resample, {
    w: t.canvas.width,
    h: t.canvas.height
  }) : null, c = s.resample ? sh(o) : null;
  if (i) {
    const a = { kind: "rgba", data: i.rgba, width: i.w, height: i.h };
    t.fillSlot(r, a, [1, 0, 0, 1, 0, 0], i.x, i.y, i.w, i.h);
  } else if (s.resample && c) {
    const a = s.resample;
    t.fillSlotCropped(r, o, a.toDevice, c, a.srcX, a.srcY, a.srcW, a.srcH);
  } else
    t.fillSlot(r, o, s.transform, s.dx, s.dy, s.dw, s.dh);
  return t.shadow && n && o0(t.shadow, n, s), !0;
}
var d5 = 2, pi = null;
function y5(t) {
  pi = t;
}
function m5(t, e, n, s) {
  const o = t.nestingDepth ?? 0;
  if (!pi || !s || !e.data || s.unit !== d5 || o >= $h)
    return !1;
  const { srcX: r, srcY: i, srcW: c, srcH: a } = s;
  if (!(c > 0 && a > 0) || ![r, i, c, a].every(Number.isFinite))
    return !1;
  const l = s0(t.ctx);
  if (!l)
    return !1;
  const u = Zt(
    [1, 0, 0, 1, -0.5, -0.5],
    Zt(Zt(ut(t), s.toWorld(r, i, c, a)), [1, 0, 0, 1, 0.5, 0.5])
  ), h = e.data.slice(0), f = n && n.kind === "metafile" ? n.caches : void 0, { ctx: g } = t;
  g.save();
  let p = null;
  try {
    g.setTransform(u[0], u[1], u[2], u[3], u[4], u[5]), g.beginPath(), g.rect(r, i, c, a), g.clip(), p = pi(h, g, l.w, l.h, u, {
      textureCache: f == null ? void 0 : f.textures,
      imageCache: f == null ? void 0 : f.images,
      fontFamilyMap: t.fontFamilyMap,
      gdiAntialias: t.gdiAntialias,
      nestingDepth: o + 1
    });
  } finally {
    g.restore();
  }
  return p ? (t.deferredImages.push(...p), !0) : !1;
}
function M5(t, e, n, s) {
  var i;
  const o = e.cacheKey !== void 0 ? (i = t.imageCache) == null ? void 0 : i.get(e.cacheKey) : void 0;
  if (e.type === 2)
    return m5(t, e, o, s);
  const r = o && o.kind === "bitmap" ? o : null;
  return ot(t.ctx) ? p5(t.ctx, e, r, n) : r ? o0(t.ctx, r, n) : !1;
}
function dl(t, e, n) {
  return n ? {
    x: t.getInt16(e, !0),
    y: t.getInt16(e + 2, !0),
    w: t.getInt16(e + 4, !0),
    h: t.getInt16(e + 6, !0)
  } : {
    x: t.getFloat32(e, !0),
    y: t.getFloat32(e + 4, !0),
    w: t.getFloat32(e + 8, !0),
    h: t.getFloat32(e + 12, !0)
  };
}
function r0(t, e, n) {
  return n ? {
    x: t.getInt16(e, !0),
    y: t.getInt16(e + 2, !0)
  } : {
    x: t.getFloat32(e, !0),
    y: t.getFloat32(e + 4, !0)
  };
}
var b5 = 16384, i0 = 2048;
function yl(t, e, n) {
  if (e >= n)
    return null;
  const s = t.getUint8(e);
  if (s & 128) {
    const r = s & 127;
    return { value: r & 64 ? r - 128 : r, size: 1 };
  }
  if (e + 2 > n)
    return null;
  const o = s << 8 | t.getUint8(e + 1);
  return { value: o & 16384 ? o - 32768 : o, size: 2 };
}
function pn(t, e, n, s, o) {
  if (!(s >= 0) || s > 1e6)
    return null;
  const r = [];
  if (o & i0) {
    let a = e, l = 0, u = 0;
    for (let h = 0; h < s; h++) {
      const f = yl(t, a, n);
      if (!f)
        return null;
      a += f.size;
      const g = yl(t, a, n);
      if (!g)
        return null;
      a += g.size, l += f.value, u += g.value, r.push({ x: l, y: u });
    }
    return r;
  }
  const i = (o & b5) !== 0, c = i ? 4 : 8;
  if (e + s * c > n)
    return null;
  for (let a = 0; a < s; a++)
    r.push(r0(t, e + a * c, i));
  return r;
}
var w5 = 64;
function x5(t) {
  return Math.floor(t * 16 + 0.5 - 1e-4);
}
function ml(t, e, n, s, o) {
  let r;
  try {
    r = Pn(t, e).map((a) => a.pts.map(x5));
  } catch {
    return null;
  }
  const i = Sn(
    r.filter((a) => a.length >= 6),
    n,
    !1,
    o,
    s
  ), c = new Uint8Array(s.w * s.h);
  for (let a = 0; a < c.length; a++)
    c[a] = i[a] ? 1 : 0;
  return c;
}
function di(t, e, n, s, o = 0) {
  if (o > w5)
    return null;
  switch (t.type) {
    case "infinite":
      return new Uint8Array(n.w * n.h).fill(1);
    case "empty":
      return new Uint8Array(n.w * n.h);
    case "rect": {
      const { x: r, y: i, width: c, height: a } = t;
      return ml((l) => l.rect(r, i, c, a), e, !1, n, s);
    }
    case "path": {
      const r = t.path;
      return ml((i) => yo(i, r), e, r.fillRule === "evenodd", n, s);
    }
    case "combine": {
      const r = di(t.left, e, n, s, o + 1), i = r ? di(t.right, e, n, s, o + 1) : null;
      if (!r || !i)
        return null;
      const c = t.combineMode;
      for (let a = 0; a < r.length; a++) {
        const l = r[a], u = i[a];
        r[a] = c === 2 ? l | u : c === 3 ? l ^ u : c === 4 ? l & (u ^ 1) : c === 5 ? u & (l ^ 1) : l & u;
      }
      return r;
    }
  }
}
function E5(t, e) {
  let n = 1 / 0, s = 1 / 0, o = -1, r = -1;
  for (let i = 0; i < e.h; i++)
    for (let c = 0; c < e.w; c++)
      t[i * e.w + c] && (n = Math.min(n, c), o = Math.max(o, c), s = Math.min(s, i), r = Math.max(r, i));
  return o < 0 ? null : { x: e.x + n, y: e.y + s, w: o - n + 1, h: r - s + 1 };
}
function Fr(t, e, n, s = 0, o) {
  const r = t.length;
  if (r < (n ? 3 : 2))
    return [];
  const i = (Number.isFinite(e) ? e : 0) / 3, c = (f) => {
    let g, p;
    return n ? (g = t[(f - 1 + r) % r], p = t[(f + 1) % r]) : (g = t[Math.max(0, f - 1)], p = t[Math.min(r - 1, f + 1)]), { x: i * (p.x - g.x), y: i * (p.y - g.y) };
  }, a = n ? r : r - 1, l = n ? 0 : Math.max(0, Math.floor(s)), u = n ? a : Math.min(a - l, o === void 0 ? a : Math.floor(o));
  if (!(u > 0))
    return [];
  const h = [{ x: t[l].x, y: t[l].y }];
  for (let f = l; f < l + u; f++) {
    const g = t[f], p = t[(f + 1) % r], d = c(f), y = c((f + 1) % r);
    h.push({ x: g.x + d.x, y: g.y + d.y }, { x: p.x - y.x, y: p.y - y.y }, { x: p.x, y: p.y });
  }
  return h;
}
var v5 = 1.5, T5 = {
  1: [3, 1],
  2: [1, 1],
  3: [3, 1, 1, 1],
  4: [3, 1, 1, 1, 1, 1]
};
function I5(t) {
  switch (t) {
    case 1:
    case 17:
      return "square";
    case 2:
    case 18:
    case 3:
    case 19:
      return "round";
    default:
      return "butt";
  }
}
function P5(t) {
  return t === 1 ? "bevel" : t === 2 ? "round" : "miter";
}
function fc(t) {
  const e = t.width || 1, n = t.dashStyle === 5 ? t.dashPattern : T5[t.dashStyle];
  return !n || n.length === 0 || n.some((s) => !(s >= 0)) ? [] : n.map((s) => s * e);
}
function Ml(t, e, n = 1) {
  t.lineWidth = e.width * n;
  const s = fc(e);
  t.lineCap = I5(s.length > 0 ? e.dashCap ?? 0 : e.startCap ?? e.endCap), t.lineJoin = P5(e.lineJoin), t.miterLimit = e.miterLimit && e.miterLimit >= 1 ? e.miterLimit : 10, typeof t.setLineDash == "function" && t.setLineDash(s), t.lineDashOffset = s.length > 0 ? (e.dashOffset ?? 0) * (e.width || 1) : 0;
}
function be(t, e, n, s, o = !1) {
  const { ctx: r } = t, i = !!e && e.alignment === 1 && o, c = i ? 2 : 1, a = (l) => {
    i && (l.save(), l.beginPath(), n(l), l.clip()), l.beginPath(), n(l), l.stroke(), i && l.restore();
  };
  if (e) {
    Ml(r, e, c);
    const l = cc(t);
    let u = e.brush && !ot(r) ? Lf(t, e.brush) : null;
    if (!u && l !== "canvas") {
      const h = Go(e.color);
      u = h === null ? null : vo(h);
    }
    if (u) {
      const h = k5(r), f = ut(t), g = Math.max(Math.hypot(f[0], f[1]), Math.hypot(f[2], f[3]));
      if (l !== "canvas" && h && S5(t, e, u, n, f, h, l, o))
        return;
      const p = Math.max(1, r.miterLimit || 10), d = e.width * g * p / 2 + 2, y = h ? Ho(s, f, h, d) : null;
      if (h && !y || y && ic(
        t,
        u,
        y,
        (m) => {
          Ml(m, e, c), a(m), m.beginPath(), n(m);
        },
        l,
        (m, M, b) => m.isPointInStroke(M, b) && (!i || m.isPointInPath(M, b))
      ))
        return;
    }
    if (c0(e) && !e.transform && A5(t, e, n, o))
      return;
    r.strokeStyle = e.brush ? nc(t, e.brush) : e.color;
  }
  $t(t), a(r);
}
function S5(t, e, n, s, o, r, i, c) {
  if (e.transform && !U5(e.transform))
    return !1;
  const a = Math.hypot(o[0], o[1]), l = Math.hypot(o[2], o[3]), u = o[0] * o[2] + o[1] * o[3];
  if (!(a > 0) || Math.abs(a - l) > 1e-6 * a || Math.abs(u) > 1e-6 * a * l)
    return !1;
  let h;
  try {
    h = Pn(s, o);
  } catch {
    return !1;
  }
  c && (h = h.map((b) => ({ ...b, closed: !0 })));
  const f = (e.width || 1) * a, g = fc(e).map((b) => b * a), p = {
    half: f / 2,
    join: e.lineJoin ?? 0,
    miterLimit: e.miterLimit && e.miterLimit >= 1 ? e.miterLimit : 10,
    startCap: e.startCap ?? 0,
    endCap: e.endCap ?? 0,
    dashCap: e.dashCap ?? 0,
    dash: g.length > 0 ? g : null,
    dashOffset: (e.dashOffset ?? 0) * (e.width || 1) * a,
    compound: e.compound ?? null,
    inset: e.alignment === 1
  }, d = i === "gdiplus-aa";
  let y;
  if (c0(e))
    y = a0(h, f, p, e).map((b) => b.flatMap((w) => [pt(w.x), pt(w.y)]));
  else {
    if (f <= v5 && !p.dash && !(((e.startCap ?? 0) | (e.endCap ?? 0) | (e.dashCap ?? 0)) & 240))
      return R5(t, e, n, s, o, r, d, c);
    y = Hi(h, p).map((b) => b.flatMap((w) => [pt(w.x), pt(w.y)]));
  }
  const m = Ci(y, r);
  if (!m)
    return !0;
  if (m.w * m.h > 16e6)
    return !1;
  const M = Sn(y, !1, d, te(t.pixelOffsetMode ?? 0), m);
  return xs(t, n, m, M, 1, !0);
}
function R5(t, e, n, s, o, r, i, c) {
  var p;
  let a;
  try {
    a = bm(s, o);
  } catch {
    return !1;
  }
  c && (a = a.map((d) => ({ ...d, closed: !0 })));
  const l = Ci(
    a.map((d) => d.pts),
    r
  );
  if (!l)
    return !0;
  if (l.w * l.h > 16e6)
    return !1;
  const u = Go(e.color), f = (!e.brush || !e.brush.gradient && !e.brush.texture && !e.brush.hatch) && u !== null && u >>> 24 === 255 && ((p = t.ext) == null ? void 0 : p.compositingMode) !== 1, g = vm(
    a,
    { antialias: i, half: te(t.pixelOffsetMode ?? 0), opaqueSolid: f, clip: { x: 0, y: 0, w: r.w, h: r.h } },
    l
  );
  return xs(t, n, l, g, 1, !0);
}
function c0(t) {
  return !!(t.customStartCap || t.customEndCap);
}
function a0(t, e, n, s) {
  const o = Zm(t, e, s.customStartCap ?? null, s.customEndCap ?? null), r = [];
  return o.figures.forEach((i, c) => {
    const a = o.capped[c], l = {
      ...n,
      half: Math.max(e, 1) / 2,
      startCap: a.start ? 0 : n.startCap,
      endCap: a.end ? 0 : n.endCap
    };
    for (const u of Hi([i], l))
      r.push(u.slice().reverse());
  }), r.push(...o.polygons), r;
}
function A5(t, e, n, s) {
  const o = ut(t), r = Math.hypot(o[0], o[1]), i = o[0] * o[3] - o[1] * o[2];
  if (!(r > 0) || !Number.isFinite(i) || Math.abs(i) < 1e-12)
    return !1;
  let c;
  try {
    c = Pn(n, o);
  } catch {
    return !1;
  }
  s && (c = c.map((g) => ({ ...g, closed: !0 })));
  const a = (e.width || 1) * r, l = fc(e).map((g) => g * r), u = {
    half: a / 2,
    join: e.lineJoin ?? 0,
    miterLimit: e.miterLimit && e.miterLimit >= 1 ? e.miterLimit : 10,
    startCap: e.startCap ?? 0,
    endCap: e.endCap ?? 0,
    dashCap: e.dashCap ?? 0,
    dash: l.length > 0 ? l : null,
    dashOffset: (e.dashOffset ?? 0) * (e.width || 1) * r,
    compound: e.compound ?? null,
    inset: e.alignment === 1
  }, h = [
    o[3] / i,
    -o[1] / i,
    -o[2] / i,
    o[0] / i,
    (o[2] * o[5] - o[3] * o[4]) / i,
    (o[1] * o[4] - o[0] * o[5]) / i
  ], { ctx: f } = t;
  f.save();
  try {
    f.fillStyle = e.brush ? nc(t, e.brush) : e.color, $t(t), f.beginPath();
    for (const g of a0(c, a, u, e))
      g.forEach((p, d) => {
        const y = h[0] * p.x + h[2] * p.y + h[4], m = h[1] * p.x + h[3] * p.y + h[5];
        d === 0 ? f.moveTo(y, m) : f.lineTo(y, m);
      }), f.closePath();
    f.fill("nonzero");
  } finally {
    f.restore();
  }
  return !0;
}
function U5(t) {
  return t[0] === 1 && t[1] === 0 && t[2] === 0 && t[3] === 1 && t[4] === 0 && t[5] === 0;
}
function k5(t) {
  const e = t.canvas, n = e == null ? void 0 : e.width, s = e == null ? void 0 : e.height;
  return typeof n == "number" && typeof s == "number" && n > 0 && s > 0 ? { w: n, h: s } : null;
}
function L5(t, e) {
  const n = e <= 255 ? t.objectTable.get(e) : void 0;
  return !n || n.kind !== "plus-imageattributes" || !n.wrapMode ? {} : { wrap: n.wrapMode, clampArgb: n.clampArgb };
}
var F5 = 2;
function D5(t, e, n) {
  const s = [];
  for (let o = 0; o < n.length; o += 2) {
    const r = n[o], i = n[o + 1];
    s.push((t[0] * r + t[2] * i + t[4]) * e, (t[1] * r + t[3] * i + t[5]) * e);
  }
  return s;
}
function _5(t, e, n, s) {
  const { view: o } = t, r = Lm(t.interpolationMode ?? 0);
  if (n || o.getUint32(e + 4, !0) !== F5)
    return;
  const i = o.getFloat32(e + 8, !0), c = o.getFloat32(e + 12, !0), a = o.getFloat32(e + 16, !0), l = o.getFloat32(e + 20, !0);
  if (!(!(a > 0 && l > 0) || !Number.isFinite(i + c + a + l)))
    return {
      srcX: i,
      srcY: c,
      srcW: a,
      srcH: l,
      toDevice: Zt(ut(t), s(i, c, a, l)),
      kernel: r,
      halfPixelOffset: te(t.pixelOffsetMode ?? 0),
      ...L5(t, o.getUint32(e, !0))
    };
}
function bl(t, e, n, s, o, r, i, c) {
  if (!e.data)
    return;
  const a = e.type === 2, l = {
    imageData: e.data,
    dx: s,
    dy: o,
    dw: r,
    dh: i,
    transform: ut(t),
    isMetafile: a,
    resample: _5(t, n, a, c)
  }, { view: u } = t, h = {
    unit: u.getUint32(n + 4, !0),
    srcX: u.getFloat32(n + 8, !0),
    srcY: u.getFloat32(n + 12, !0),
    srcW: u.getFloat32(n + 16, !0),
    srcH: u.getFloat32(n + 20, !0),
    toWorld: c
  };
  if (!M5(t, e, l, h)) {
    if (ot(t.ctx)) {
      const f = c(h.srcX, h.srcY, h.srcW, h.srcH), g = [
        h.srcX,
        h.srcY,
        h.srcX + h.srcW,
        h.srcY,
        h.srcX + h.srcW,
        h.srcY + h.srcH,
        h.srcX,
        h.srcY + h.srcH
      ], p = [];
      for (let d = 0; d < g.length; d += 2)
        p.push(f[0] * g[d] + f[2] * g[d + 1] + f[4], f[1] * g[d] + f[3] * g[d + 1] + f[5]);
      l.svgSlot = t.ctx.reserveSlot(D5(ut(t), 1, p));
    }
    t.deferredImages.push(l), X(`DrawImage: queued deferred image (total=${t.deferredImages.length})`);
  }
}
function l0(t, e, n, s) {
  const { ctx: o } = t, r = s.fillRule ?? "nonzero";
  gn(t, e, n, (c) => yo(c, s), s.points, r) || (o.fillStyle = re(t, e, n), $t(t), yo(o, s), o.fill(r));
}
function u0(t, e, n) {
  be(t, e, (s) => yo(s, n), n.points, X5(n.types));
}
function N5(t) {
  return 1 + (t === void 0 || !Number.isFinite(t) ? 4 : Math.min(12, Math.max(0, t))) / 10;
}
function B5(t, e) {
  if (e === 1)
    return;
  const n = 1 / e;
  for (let s = 0; s < t.length; s++) {
    const o = t[s] / 255;
    t[s] = Math.round((1 - Math.pow(1 - o, n)) * 255);
  }
}
function X5(t) {
  if (t.length === 0)
    return !1;
  for (let e = 1; e <= t.length; e++)
    if ((e === t.length || !(t[e] & 15)) && !(t[e - 1] & 128))
      return !1;
  return !0;
}
function wl(t, e, n, s, o, r, i) {
  const { ctx: c } = t, a = ot(c) ? null : Co(t, e, n), l = c.canvas;
  if (a && l && typeof l.width == "number" && typeof l.height == "number") {
    const u = typeof c.measureText == "function" ? c.measureText(s).width : s.length * i, h = Math.abs(i) || 1, f = [
      { x: o - u - h, y: r - 2 * h },
      { x: o + u + h, y: r - 2 * h },
      { x: o - u - h, y: r + 2 * h },
      { x: o + u + h, y: r + 2 * h }
    ], g = Ho(f, ut(t), { w: l.width, h: l.height });
    if (!g)
      return;
    const { font: p, textAlign: d, textBaseline: y } = c;
    if (ic(
      t,
      a,
      g,
      (m) => {
        m.font = p, m.textAlign = d, m.textBaseline = y, m.fillText(s, o, r);
      },
      "canvas",
      void 0,
      !1
    ))
      return;
  }
  c.fillStyle = re(t, e, n), $t(t, !1), c.fillText(s, o, r);
}
var Y5 = [os, os, os, Jr, Jr, Kr], z5 = 1 / 6, O5 = 1.03;
function $5(t) {
  const e = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/.exec(t.trim());
  return e ? e[4] !== void 0 && Number(e[4]) < 1 ? null : "#" + [e[1], e[2], e[3]].map((n) => Number(n).toString(16).padStart(2, "0")).join("") : /^#[0-9a-f]{6}$/i.test(t) ? t : null;
}
function C5(t, e, n, s, o, r, i, c, a = null) {
  var k;
  const l = t.fonts, u = typeof r == "string" ? $5(r) : null, h = t.textRenderingHint ?? 0, g = !!u && (h === 3 || h === 4 || h === 5) && !ot(t.ctx), p = ot(t.ctx) ? null : g ? vo(Go(r) ?? 4278190080) : u ? null : a, d = e.unit ?? 0;
  if (!l || !u && !p || i !== 0 || d !== 0 && d !== 2)
    return !1;
  const y = ut(t);
  if (y[1] !== 0 || y[2] !== 0 || y[0] <= 0 || y[3] <= 0)
    return !1;
  const m = e.emSize * y[3], M = t.textRenderingHint ?? 0, b = Y5[M] ?? os, w = {
    face: e.family,
    height: -Math.round(m),
    width: 0,
    weight: e.flags & 1 ? 700 : 400,
    italic: (e.flags & 2) !== 0,
    charSet: 1,
    pitchAndFamily: 0,
    quality: b,
    unhinted: M === 2 || M === 4,
    // AntiAlias ignores the font's gasp table (measured: Arial 16 px is
    // grayscale there, but single-bit under AntiAliasGridFit, as in GDI).
    ignoreGasp: M === 4
  }, x = l.realize(w, t.fontFamilyMap);
  if (!x)
    return !1;
  const E = x.ttf, T = w.unhinted === !0, v = m * E.winAscent / E.unitsPerEm, I = T ? v : Math.ceil(v), P = y[0] * s + y[4] + m * ((c == null ? void 0 : c.leadingMargin) ?? z5), S = y[3] * o + y[5] + I, R = [];
  for (let L = 0; L < n.length; L++)
    R.push(n.charCodeAt(L));
  const U = (c == null ? void 0 : c.tracking) ?? O5, A = T ? R.map((L) => x.advance(x.glyphIndex(L)) * U) : null;
  if ((!u || g) && p) {
    const L = v4(x, {
      codes: R,
      glyphIndices: !1,
      x: P,
      y: S,
      dx: A,
      dy: null,
      textAlign: 24,
      matrix: null
    });
    if (!L)
      return !0;
    const D = N5((k = t.ext) == null ? void 0 : k.textContrast);
    return L.channels === 1 && B5(L.data, D), xs(
      t,
      p,
      { x: L.x, y: L.y, w: L.width, h: L.height },
      L.data,
      L.channels,
      !1,
      L.channels === 3 ? D : 1
    );
  }
  return Cf(t.ctx, x, {
    codes: R,
    glyphIndices: !1,
    x: P,
    y: S,
    dx: A,
    dy: null,
    textAlign: 24,
    textColor: u,
    bkColor: "#ffffff",
    bkMode: 1,
    options: 0,
    rect: null,
    matrix: null,
    underline: (e.flags & 4) !== 0,
    strikeOut: (e.flags & 8) !== 0
  }, t.fontFamilyMap), !0;
}
function H5(t, e, n, s, o) {
  const { ctx: r, view: i, objectTable: c } = t;
  switch (e) {
    case H2: {
      if (o >= 4) {
        const a = c.get(n & 255);
        a && a.kind === "plus-path" && l0(t, n, i.getUint32(s, !0), a);
      }
      return !0;
    }
    case G2: {
      if (o >= 4) {
        const a = c.get(n & 255), l = c.get(i.getUint32(s, !0) & 255);
        a && a.kind === "plus-path" && u0(t, l && l.kind === "plus-pen" ? l : null, a);
      }
      return !0;
    }
    case V2: {
      if (o >= 28) {
        const a = i.getUint32(s, !0), l = i.getUint32(s + 4, !0), u = i.getUint32(s + 8, !0), h = i.getFloat32(s + 12, !0), f = i.getFloat32(s + 16, !0);
        i.getFloat32(s + 20, !0), i.getFloat32(s + 24, !0);
        const g = n & 255, p = c.get(g);
        if (u > 0 && s + 28 + u * 2 <= s + o) {
          const d = hs(i, s + 28, u);
          if (d.length > 0 && p && p.kind === "plus-font") {
            const y = c.get(l), m = re(t, n, a), M = y && y.kind === "plus-stringformat" ? y.alignment : 0, b = y && y.kind === "plus-stringformat" ? y : void 0;
            if (C5(
              t,
              p,
              d,
              h,
              f,
              m,
              M,
              b,
              t.fonts ? Co(t, n, a) : null
            ))
              return !0;
            const w = p.flags & 1 ? "bold " : "", x = p.flags & 2 ? "italic " : "", E = lo(p.family, t.fontFamilyMap);
            if (r.font = `${x}${w}${p.emSize}px ${E}`, r.textBaseline = "top", y && y.kind === "plus-stringformat")
              switch (y.alignment) {
                case 1:
                  r.textAlign = "center";
                  break;
                case 2:
                  r.textAlign = "right";
                  break;
                default:
                  r.textAlign = "left";
              }
            else
              r.textAlign = "left";
            wl(t, n, a, d, h, f, p.emSize);
          }
        }
      }
      return !0;
    }
    case dg: {
      if (o >= 16) {
        const a = i.getUint32(s, !0), l = i.getUint32(s + 12, !0), u = n & 255, h = c.get(u), f = s + 16, p = f + l * 2 + 3 & -4;
        if (l > 0 && l < 1e5 && p + l * 8 <= s + o && h && h.kind === "plus-font") {
          const d = hs(i, f, l);
          if (d.length > 0) {
            const y = h.flags & 1 ? "bold " : "", m = h.flags & 2 ? "italic " : "", M = lo(h.family, t.fontFamilyMap);
            r.font = `${m}${y}${h.emSize}px ${M}`, r.textBaseline = "alphabetic", r.textAlign = "left";
            const b = i.getFloat32(p, !0), w = i.getFloat32(p + 4, !0);
            wl(t, n, a, d, b, w, h.emSize);
          }
        }
      }
      return !0;
    }
    case j2: {
      if (o >= 24) {
        const a = n & 255, l = c.get(a), u = (n & 16384) !== 0, h = s + 24;
        let f, g, p, d;
        if (u && h + 8 <= s + o)
          f = i.getInt16(h, !0), g = i.getInt16(h + 2, !0), p = i.getInt16(h + 4, !0), d = i.getInt16(h + 6, !0);
        else if (!u && h + 16 <= s + o)
          f = i.getFloat32(h, !0), g = i.getFloat32(h + 4, !0), p = i.getFloat32(h + 8, !0), d = i.getFloat32(h + 12, !0);
        else
          return !0;
        t.totalDrawImageCalls++;
        const y = l && l.kind === "plus-image" && l.data;
        X(
          `DrawImage: imgId=${a}, dest=(${f},${g},${p},${d}), compressed=${u}, hasObj=${!!l}, objKind=${l == null ? void 0 : l.kind}, hasData=${!!y}, dataLen=${y ? l.data.byteLength : 0}, isMetafile=${(l == null ? void 0 : l.kind) === "plus-image" ? l.type === 2 : "N/A"}`
        ), X(
          `DrawImage: worldTransform=[${t.worldTransform.map((m) => m.toFixed(3)).join(", ")}]`
        ), l && l.kind === "plus-image" && l.data && bl(t, l, s, f, g, p, d, (m, M, b, w) => [
          p / b,
          0,
          0,
          d / w,
          f - m * p / b,
          g - M * d / w
        ]);
      }
      return !0;
    }
    case W2: {
      if (o >= 28) {
        const a = n & 255, l = c.get(a), u = i.getUint32(s + 24, !0), h = s + 28;
        if (u >= 3 && l && l.kind === "plus-image" && l.data) {
          const f = pn(i, h, s + o, 3, n);
          if (!f)
            return !0;
          const [{ x: g, y: p }, { x: d, y }, { x: m, y: M }] = f, b = g, w = p, x = Math.sqrt((d - g) ** 2 + (y - p) ** 2), E = Math.sqrt((m - g) ** 2 + (M - p) ** 2);
          t.totalDrawImageCalls++, X(
            `DrawImagePoints: imgId=${a}, points=[(${g},${p}),(${d},${y}),(${m},${M})], dest=(${b.toFixed(1)},${w.toFixed(1)},${x.toFixed(1)},${E.toFixed(1)})`
          ), X(
            `DrawImagePoints: worldTransform=[${t.worldTransform.map((T) => T.toFixed(3)).join(", ")}]`
          ), bl(t, l, s, b, w, x, E, (T, v, I, P) => {
            const S = (d - g) / I, R = (y - p) / I, U = (m - g) / P, A = (M - p) / P;
            return [S, R, U, A, g - S * T - U * v, p - R * T - A * v];
          });
        } else
          l && l.kind === "plus-image" && l.data;
      }
      return !0;
    }
    default:
      return !1;
  }
}
var G5 = 8192;
function Dr(t, e) {
  const n = t.objectTable.get(e & 255);
  return n && n.kind === "plus-pen" ? n : null;
}
function js(t, e) {
  return (n) => {
    n.moveTo(t[0].x, t[0].y);
    for (let s = 1; s + 2 < t.length; s += 3)
      n.bezierCurveTo(t[s].x, t[s].y, t[s + 1].x, t[s + 1].y, t[s + 2].x, t[s + 2].y);
    e && n.closePath();
  };
}
function j5(t, e, n, s, o) {
  const { view: r } = t, i = s + o;
  switch (e) {
    case wg: {
      if (o < 4)
        return !0;
      const c = r.getUint32(s, !0), a = pn(r, s + 4, i, c, n);
      return !a || a.length < 4 || (a.length - 1) % 3 !== 0 || be(t, Dr(t, n), js(a, !1), a, !1), !0;
    }
    case bg: {
      if (o < 16)
        return !0;
      const c = r.getFloat32(s, !0), a = r.getUint32(s + 4, !0), l = r.getUint32(s + 8, !0), u = r.getUint32(s + 12, !0), h = pn(r, s + 16, i, u, n & 16384);
      if (!h)
        return !0;
      const f = Fr(h, c, !1, a, l);
      return f.length >= 4 && be(t, Dr(t, n), js(f, !1), f, !1), !0;
    }
    case Mg: {
      if (o < 8)
        return !0;
      const c = r.getFloat32(s, !0), a = r.getUint32(s + 4, !0), l = pn(r, s + 8, i, a, n), u = l ? Fr(l, c, !0) : [];
      return u.length >= 4 && be(t, Dr(t, n), js(u, !0), u, !0), !0;
    }
    case mg: {
      if (o < 12)
        return !0;
      const c = r.getUint32(s, !0), a = r.getFloat32(s + 4, !0), l = r.getUint32(s + 8, !0), u = pn(r, s + 12, i, l, n), h = u ? Fr(u, a, !0) : [];
      if (h.length < 4)
        return !0;
      const f = n & G5 ? "nonzero" : "evenodd", g = js(h, !0);
      if (!gn(t, n, c, g, h, f)) {
        const { ctx: p } = t;
        p.fillStyle = re(t, n, c), $t(t), p.beginPath(), g(p), p.fill(f);
      }
      return !0;
    }
    case Ag:
      return W5(t, n, s, o), !0;
    case Ig:
      return o < 4 || q5(t, n, r.getUint32(s, !0)), !0;
    default:
      return !1;
  }
}
function W5(t, e, n, s) {
  if (s < 12)
    return;
  const { view: o, objectTable: r } = t, i = r.get(e & 255), c = o.getUint32(n, !0), a = o.getUint32(n + 4, !0);
  if (t.ext && (t.ext.pendingEffect = null), !i || i.kind !== "plus-path")
    return;
  const l = a <= 255 ? r.get(a) : void 0;
  l && l.kind === "plus-brush" && l0(t, 0, a, i);
  const u = c <= 255 ? r.get(c) : void 0;
  u && u.kind === "plus-pen" && u0(t, u, i);
}
function V5(t) {
  const e = t.canvas, n = e == null ? void 0 : e.width, s = e == null ? void 0 : e.height;
  return typeof n == "number" && typeof s == "number" && n > 0 && s > 0 ? { w: n, h: s } : null;
}
function q5(t, e, n) {
  const s = t.objectTable.get(e & 255);
  if (!s || s.kind !== "plus-region" || s.nodes.length === 0)
    return;
  const o = s.nodes[0], r = ut(t), { ctx: i } = t, c = V5(i);
  if (cc(t) !== "canvas" && c) {
    const f = { x: 0, y: 0, w: c.w, h: c.h }, g = di(o, r, f, te(t.pixelOffsetMode ?? 0)), p = g ? Ff(t, e, n) : null;
    if (g && p) {
      const d = E5(g, f);
      if (!d)
        return;
      const y = new Uint8ClampedArray(d.w * d.h);
      for (let m = 0; m < d.h; m++)
        for (let M = 0; M < d.w; M++)
          y[m * d.w + M] = g[(d.y + m) * f.w + d.x + M] ? 255 : 0;
      if (xs(t, p, d, y, 1, !0))
        return;
    }
  }
  const a = Eo(o, r, 0, c ? { x: 0, y: 0, w: c.w, h: c.h } : void 0);
  a.exact;
  const l = a.region, u = Un(r);
  if (l && l.length === 0 || !u)
    return;
  const h = c ?? { w: 1e6, h: 1e6 };
  i.save();
  try {
    i.setTransform(1, 0, 0, 1, 0, 0);
    for (const g of l ?? [])
      i.beginPath(), ec(i, g.cmds), i.clip(g.fillRule);
    i.fillStyle = re(t, e, n), $t(t);
    const f = [
      [0, 0],
      [h.w, 0],
      [h.w, h.h],
      [0, h.h]
    ].map(([g, p]) => ({ x: u[0] * g + u[2] * p + u[4], y: u[1] * g + u[3] * p + u[5] }));
    i.beginPath(), i.moveTo(f[0].x, f[0].y);
    for (let g = 1; g < 4; g++)
      i.lineTo(f[g].x, f[g].y);
    i.closePath(), i.fill();
  } finally {
    i.restore();
  }
}
function J5(t, e, n, s) {
  const o = (a) => {
    const l = a * Math.PI / 180;
    return n > 0 && s > 0 ? Math.atan2(n * Math.sin(l), s * Math.cos(l)) : l;
  }, r = Math.max(-360, Math.min(360, e)), i = o(t);
  if (Math.abs(r) >= 360)
    return { start: i, sweep: Math.sign(r) * 2 * Math.PI };
  let c = o(t + r) - i;
  return r > 0 && c < 0 ? c += 2 * Math.PI : r < 0 && c > 0 ? c -= 2 * Math.PI : r === 0 && (c = 0), { start: i, sweep: c };
}
function xl(t, e, n, s, o) {
  if (o & i0)
    return pn(t, e, n, s, o);
  const r = (o & 16384) !== 0, i = r ? 4 : 8, c = [];
  for (let a = 0, l = e; a < s && l + i <= n; a++, l += i)
    c.push(r0(t, l, r));
  return c;
}
function _r(t, e) {
  const n = t.objectTable.get(e & 255);
  return n && n.kind === "plus-pen" ? n : null;
}
function K5(t, e, n, s, o) {
  const { ctx: r, view: i, objectTable: c } = t;
  switch (e) {
    case B2: {
      if (o >= 8) {
        const a = i.getUint32(s, !0), l = i.getUint32(s + 4, !0), u = (n & 16384) !== 0, h = u ? 8 : 16, f = [];
        let g = s + 8;
        for (let d = 0; d < l && g + h <= s + o; d++)
          f.push(dl(i, g, u)), g += h;
        if (!gn(
          t,
          n,
          a,
          (d) => {
            for (const y of f)
              d.rect(y.x, y.y, y.w, y.h);
          },
          f.flatMap((d) => [
            { x: d.x, y: d.y },
            { x: d.x + d.w, y: d.y },
            { x: d.x, y: d.y + d.h },
            { x: d.x + d.w, y: d.y + d.h }
          ])
        )) {
          r.fillStyle = re(t, n, a), $t(t);
          for (const d of f)
            r.fillRect(d.x, d.y, d.w, d.h);
        }
      }
      return !0;
    }
    case X2: {
      if (o >= 4) {
        const a = i.getUint32(s, !0), l = (n & 16384) !== 0, u = l ? 8 : 16, h = [];
        let f = s + 4;
        for (let g = 0; g < a && f + u <= s + o; g++)
          h.push(dl(i, f, l)), f += u;
        be(
          t,
          _r(t, n),
          (g) => {
            for (const p of h)
              g.rect(p.x, p.y, p.w, p.h);
          },
          h.flatMap((g) => [
            { x: g.x, y: g.y },
            { x: g.x + g.w, y: g.y + g.h }
          ]),
          !0
        );
      }
      return !0;
    }
    case O2: {
      if (o >= 12) {
        const a = i.getUint32(s, !0), l = (n & 16384) !== 0;
        let u, h, f, g;
        if (l)
          u = i.getInt16(s + 4, !0), h = i.getInt16(s + 6, !0), f = i.getInt16(s + 8, !0), g = i.getInt16(s + 10, !0);
        else {
          if (o < 20)
            return !0;
          u = i.getFloat32(s + 4, !0), h = i.getFloat32(s + 8, !0), f = i.getFloat32(s + 12, !0), g = i.getFloat32(s + 16, !0);
        }
        const p = (y) => {
          y.ellipse(u + f / 2, h + g / 2, Math.abs(f) / 2, Math.abs(g) / 2, 0, 0, Math.PI * 2);
        }, d = [
          { x: u, y: h },
          { x: u + f, y: h },
          { x: u, y: h + g },
          { x: u + f, y: h + g }
        ];
        gn(t, n, a, p, d) || (r.fillStyle = re(t, n, a), $t(t), r.beginPath(), p(r), r.fill());
      }
      return !0;
    }
    case $2: {
      const a = n & 255, l = c.get(a), u = (n & 16384) !== 0;
      let h, f, g, p;
      if (u && o >= 8)
        h = i.getInt16(s, !0), f = i.getInt16(s + 2, !0), g = i.getInt16(s + 4, !0), p = i.getInt16(s + 6, !0);
      else if (!u && o >= 16)
        h = i.getFloat32(s, !0), f = i.getFloat32(s + 4, !0), g = i.getFloat32(s + 8, !0), p = i.getFloat32(s + 12, !0);
      else
        return !0;
      return be(
        t,
        l && l.kind === "plus-pen" ? l : null,
        (d) => d.ellipse(h + g / 2, f + p / 2, Math.abs(g) / 2, Math.abs(p) / 2, 0, 0, Math.PI * 2),
        [
          { x: h, y: f },
          { x: h + g, y: f + p }
        ],
        !0
      ), !0;
    }
    case Ic:
    case Pc:
    case C2: {
      const a = e === Ic;
      if (o < (a ? 12 : 8))
        return !0;
      let u = s;
      const h = a ? i.getUint32(u, !0) : 0;
      a && (u += 4);
      const f = i.getFloat32(u, !0), g = i.getFloat32(u + 4, !0);
      u += 8;
      const p = (n & 16384) !== 0;
      let d, y, m, M;
      if (p && u + 8 <= s + o)
        d = i.getInt16(u, !0), y = i.getInt16(u + 2, !0), m = i.getInt16(u + 4, !0), M = i.getInt16(u + 6, !0);
      else if (!p && u + 16 <= s + o)
        d = i.getFloat32(u, !0), y = i.getFloat32(u + 4, !0), m = i.getFloat32(u + 8, !0), M = i.getFloat32(u + 12, !0);
      else
        return !0;
      const b = d + m / 2, w = y + M / 2, x = Math.abs(m) / 2, E = Math.abs(M) / 2, { start: T, sweep: v } = J5(f, g, x, E);
      if (a) {
        const P = (R) => {
          R.moveTo(b, w), R.ellipse(b, w, x, E, 0, T, T + v, v < 0), R.closePath();
        }, S = [
          { x: d, y },
          { x: d + m, y },
          { x: d, y: y + M },
          { x: d + m, y: y + M }
        ];
        return gn(t, n, h, P, S) || (r.fillStyle = re(t, n, h), $t(t), r.beginPath(), P(r), r.fill()), !0;
      }
      const I = e === Pc;
      return be(
        t,
        _r(t, n),
        (P) => {
          I && P.moveTo(b, w), P.ellipse(b, w, x, E, 0, T, T + v, v < 0), I && P.closePath();
        },
        [
          { x: d, y },
          { x: d + m, y: y + M }
        ],
        I
      ), !0;
    }
    case z2: {
      if (o >= 4) {
        const a = i.getUint32(s, !0), l = xl(i, s + 4, s + o, a, n);
        if (!l)
          return !0;
        const u = (n & 8192) !== 0;
        be(
          t,
          _r(t, n),
          (h) => {
            l.forEach((f, g) => g === 0 ? h.moveTo(f.x, f.y) : h.lineTo(f.x, f.y)), u && h.closePath();
          },
          l,
          u
        );
      }
      return !0;
    }
    case Y2: {
      if (o >= 8) {
        const a = i.getUint32(s, !0), l = i.getUint32(s + 4, !0), u = xl(i, s + 8, s + o, l, n);
        if (!u)
          return !0;
        const h = (f) => {
          u.forEach((g, p) => p === 0 ? f.moveTo(g.x, g.y) : f.lineTo(g.x, g.y)), f.closePath();
        };
        gn(t, n, a, h, u) || (r.fillStyle = re(t, n, a), $t(t), r.beginPath(), h(r), r.fill());
      }
      return !0;
    }
    default:
      return !1;
  }
}
function Z5(t, e, n, s, o = n) {
  const { view: r, objectTable: i } = t, c = e & 255;
  switch (e >> 8 & 127) {
    case Mu: {
      const l = Mh(r, n, s, t.textureCache, o);
      l && i.set(c, l);
      break;
    }
    case $r: {
      const l = Qm(r, n, s, t.textureCache, o);
      l && i.set(c, l);
      break;
    }
    case Lg: {
      const l = Do(r, n, s);
      l && i.set(c, l);
      break;
    }
    case Dg: {
      const l = eM(r, n, s);
      l && i.set(c, l);
      break;
    }
    case _g: {
      if (s >= 16) {
        const l = r.getUint32(n + 4, !0), u = r.getUint32(n + 12, !0), h = r.getUint32(n + 16, !0), f = s >= 48;
        i.set(c, {
          kind: "plus-stringformat",
          flags: l,
          alignment: u ?? 0,
          lineAlignment: h ?? 0,
          leadingMargin: f ? r.getFloat32(n + 36, !0) : void 0,
          trailingMargin: f ? r.getFloat32(n + 40, !0) : void 0,
          tracking: f ? r.getFloat32(n + 44, !0) : void 0
        });
      }
      break;
    }
    case bu: {
      if (s < 8)
        break;
      const l = _h(r, n, s);
      i.set(c, {
        kind: "plus-image",
        data: l.data,
        type: l.type,
        cacheKey: o
      }), t.totalImageObjects++;
      break;
    }
    case Ng: {
      if (s >= 16) {
        const l = r.getUint32(n + 8, !0), u = ["tile", "tile-flip-x", "tile-flip-y", "tile-flip-xy", "clamp"];
        i.set(c, {
          kind: "plus-imageattributes",
          wrapMode: u[l] ?? "clamp",
          clampArgb: r.getUint32(n + 12, !0)
        });
      } else
        i.set(c, { kind: "plus-imageattributes" });
      break;
    }
    case Fg: {
      const l = t6(r, n, s);
      l && i.set(c, l);
      break;
    }
  }
}
var Q5 = 64;
function yi(t, e, n, s = 0) {
  if (e + 4 > n || s > Q5)
    return null;
  const o = t.getUint32(e, !0);
  let r = e + 4;
  if (o <= 5) {
    const i = yi(t, r, n, s + 1);
    if (!i)
      return null;
    r += i.bytesRead;
    const c = yi(t, r, n, s + 1);
    return c ? (r += c.bytesRead, {
      node: {
        type: "combine",
        combineMode: o,
        left: i.node,
        right: c.node
      },
      bytesRead: r - e
    }) : null;
  }
  if (o === 268435456) {
    if (r + 16 > n)
      return null;
    const i = t.getFloat32(r, !0), c = t.getFloat32(r + 4, !0), a = t.getFloat32(r + 8, !0), l = t.getFloat32(r + 12, !0);
    return {
      node: { type: "rect", x: i, y: c, width: a, height: l },
      bytesRead: r + 16 - e
    };
  }
  if (o === 268435457) {
    if (r + 4 > n)
      return null;
    const i = t.getInt32(r, !0);
    if (r += 4, i <= 0 || r + i > n)
      return null;
    const c = Do(t, r, i);
    return {
      node: c ? { type: "path", path: c } : { type: "empty" },
      bytesRead: r + i - e
    };
  }
  return o === 268435458 ? { node: { type: "empty" }, bytesRead: 4 } : o === 268435459 ? { node: { type: "infinite" }, bytesRead: 4 } : (H(`parseRegionNode: unknown node type 0x${o.toString(16)}`), { node: { type: "empty" }, bytesRead: 4 });
}
function t6(t, e, n) {
  if (n < 8)
    return null;
  t.getUint32(e, !0);
  const s = t.getUint32(e + 4, !0);
  if (s === 0 || s > 1e5)
    return null;
  const o = e + n, r = yi(t, e + 8, o);
  return r ? {
    kind: "plus-region",
    nodes: [r.node]
  } : null;
}
var e6 = {
  16385: "Header",
  16389: "MultiFormatStart",
  16390: "MultiFormatSection",
  16391: "MultiFormatEnd",
  16386: "EndOfFile",
  16388: "GetDC",
  16392: "Object",
  16393: "Clear",
  16394: "FillRects",
  16395: "DrawRects",
  16396: "FillPolygon",
  16397: "DrawLines",
  16398: "FillEllipse",
  16399: "DrawEllipse",
  16400: "FillPie",
  16401: "DrawPie",
  16402: "DrawArc",
  16403: "FillRegion",
  16406: "FillClosedCurve",
  16407: "DrawClosedCurve",
  16408: "DrawCurve",
  16409: "DrawBeziers",
  16404: "FillPath",
  16405: "DrawPath",
  16410: "DrawImage",
  16411: "DrawImagePoints",
  16412: "DrawString",
  16438: "DrawDriverString",
  16413: "SetRenderingOrigin",
  16414: "SetAntiAliasMode",
  16415: "SetTextRenderingHint",
  16416: "SetTextContrast",
  16417: "SetInterpolationMode",
  16418: "SetPixelOffsetMode",
  16419: "SetCompositingMode",
  16420: "SetCompositingQuality",
  16423: "BeginContainer",
  16429: "TranslateWorldTransform",
  16430: "ScaleWorldTransform",
  16431: "RotateWorldTransform",
  16439: "StrokeFillPath",
  16440: "SerializableObject",
  16441: "SetTSGraphics",
  16442: "SetTSClip",
  16426: "SetWorldTransform",
  16427: "ResetWorldTransform",
  16428: "MultiplyWorldTransform",
  16432: "SetPageTransform",
  16433: "ResetClip",
  16434: "SetClipRect",
  16435: "SetClipPath",
  16436: "SetClipRegion",
  16437: "OffsetClip",
  16421: "Save",
  16422: "Restore",
  16424: "BeginContainerNoParams",
  16425: "EndContainer"
};
function n6(t, e, n) {
  if (n < 8)
    return;
  const s = t.view.getUint32(e, !0);
  n < 4 + 4 * s || ((t.ext ?? (t.ext = {})).multiFormatSkip = !0);
}
function s6(t, e, n, s, o, r, i, c = 1, a = eu, l, u, h) {
  var M;
  const f = i ?? e0(), g = {
    ctx: s,
    view: t,
    objectTable: f.objectTable,
    worldTransform: f.worldTransform,
    deferredImages: [],
    saveStack: f.saveStack,
    saveIdMap: f.saveIdMap,
    totalImageObjects: 0,
    totalDrawImageCalls: 0,
    clipSaveDepth: f.clipSaveDepth,
    clipRegion: f.clipRegion,
    pageUnit: f.pageUnit ?? 2,
    pageScale: f.pageScale ?? 1,
    ...f.continuation ?? Nh(),
    dpiScale: c,
    canvasW: o,
    canvasH: r,
    fontFamilyMap: l,
    textureCache: u,
    interpolationMode: f.interpolationMode,
    pixelOffsetMode: f.pixelOffsetMode,
    textRenderingHint: f.textRenderingHint,
    fonts: h,
    baseTransform: f.baseTransform,
    imageCache: f.imageCache,
    nestingDepth: f.nestingDepth,
    gdiAntialias: f.gdiAntialias,
    antiAlias: f.antiAlias,
    ext: f.ext ?? (f.ext = {})
  }, p = e + n;
  let d = 0;
  const y = /* @__PURE__ */ new Map();
  for (X(`replayEmfPlusRecords: offset=0x${e.toString(16)}, length=${n}`); e + 12 <= p && d < a; ) {
    const b = t.getUint16(e, !0), w = t.getUint16(e + 2, !0), x = t.getUint32(e + 4, !0), E = t.getUint32(e + 8, !0);
    if (x < 12 || e + x > p)
      break;
    d++, y.set(b, (y.get(b) ?? 0) + 1);
    const T = e + 12;
    if ((M = g.ext) != null && M.multiFormatSkip && b !== Tc) {
      e += x;
      continue;
    }
    switch (b) {
      case D2: {
        E >= 16 && (t.getFloat32(T + 8, !0), t.getFloat32(T + 12, !0));
        break;
      }
      case Tc:
        e = p;
        continue;
      case _2:
        break;
      case Eg:
        n6(g, T, E);
        break;
      case vg:
      case Tg:
        break;
      case N2: {
        if (E >= 4) {
          const v = t.getUint32(T, !0);
          s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.globalAlpha = 1, s.globalCompositeOperation = "source-over", v >>> 24 !== 255 && s.clearRect(0, 0, o, r), s.fillStyle = wt(v), s.fillRect(0, 0, o, r), s.restore();
        }
        break;
      }
      case mu: {
        const v = Xh(g, t, w, T, E);
        v && Z5(
          v.view === t ? g : { ...g, view: v.view },
          v.flags,
          v.dataOff,
          v.dataSize,
          v.cacheKey
        );
        break;
      }
      default: {
        K5(g, b, w, T, E) || j5(g, b, w, T, E) || H5(g, b, w, T, E) || L3(g, b, w, T, E) || console.warn(`[emf-converter] Unhandled EMF+ record type: 0x${b.toString(16)}`);
        break;
      }
    }
    e += x;
  }
  d >= a && console.warn(
    `[emf-converter] EMF+ record limit reached (${a}). Output may be incomplete.`
  );
  const m = [];
  for (const [b, w] of y)
    m.push(`${e6[b] ?? `0x${b.toString(16)}`}:${w}`);
  return X(
    `replayEmfPlusRecords: totalImageObjects=${g.totalImageObjects}, totalDrawImageCalls=${g.totalDrawImageCalls}, deferredImages=${g.deferredImages.length}`
  ), X(
    `replayEmfPlusRecords: object table has ${g.objectTable.size} entries: [${Array.from(
      g.objectTable.entries()
    ).map(([b, w]) => `${b}:${w.kind}`).join(", ")}]`
  ), i && (i.worldTransform = g.worldTransform, i.saveIdMap = g.saveIdMap, i.clipRegion = g.clipRegion ?? null, i.clipSaveDepth = g.clipSaveDepth, i.continuation = {
    continuationBuffer: g.continuationBuffer,
    continuationObjectId: g.continuationObjectId,
    continuationObjectType: g.continuationObjectType,
    continuationTotalSize: g.continuationTotalSize,
    continuationOffset: g.continuationOffset,
    continuationKey: g.continuationKey
  }, i.interpolationMode = g.interpolationMode, i.pixelOffsetMode = g.pixelOffsetMode, i.textRenderingHint = g.textRenderingHint, i.pageUnit = g.pageUnit, i.pageScale = g.pageScale, i.antiAlias = g.antiAlias), s.setTransform(1, 0, 0, 1, 0, 0), g.deferredImages;
}
var o6 = {
  1: "EMR_HEADER",
  2: "EMR_POLYBEZIER",
  3: "EMR_POLYGON",
  4: "EMR_POLYLINE",
  5: "EMR_POLYBEZIERTO",
  6: "EMR_POLYLINETO",
  14: "EMR_EOF",
  27: "EMR_MOVETOEX",
  37: "EMR_SELECTOBJECT",
  38: "EMR_CREATEPEN",
  39: "EMR_CREATEBRUSHINDIRECT",
  40: "EMR_DELETEOBJECT",
  42: "EMR_ELLIPSE",
  43: "EMR_RECTANGLE",
  54: "EMR_LINETO",
  59: "EMR_BEGINPATH",
  60: "EMR_ENDPATH",
  62: "EMR_FILLPATH",
  63: "EMR_STROKEANDFILLPATH",
  64: "EMR_STROKEPATH",
  70: "EMR_COMMENT",
  76: "EMR_BITBLT",
  81: "EMR_STRETCHDIBITS",
  84: "EMR_EXTTEXTOUTW",
  85: "EMR_POLYBEZIER16",
  86: "EMR_POLYGON16",
  87: "EMR_POLYLINE16",
  88: "EMR_POLYBEZIERTO16",
  91: "EMR_POLYPOLYGON16"
};
function mi(t, e, n, s, o, r = 1, i = {}) {
  X(
    `replayEmfRecords: bounds=(${n.left},${n.top})→(${n.right},${n.bottom}), canvas=${s}×${o}`
  );
  const c = [], a = e0(), l = i.maxRecords ?? tu, u = i.maxRecordsEmfPlus ?? eu, h = n.right - n.left || 1, f = n.bottom - n.top || 1, g = s / h, p = o / f, d = r > 0 ? r : 1;
  a.imageCache = i.imageCache, a.gdiAntialias = i.gdiAntialias, a.baseTransform = i.plusBaseTransform ?? [
    g / d,
    0,
    0,
    p / d,
    -n.left * g,
    -n.top * p
  ], a.nestingDepth = i.nestingDepth, X(
    `replayEmfRecords: logical=${h}×${f}, scale=(${g.toFixed(4)},${p.toFixed(4)})`
  );
  const y = {
    ctx: e,
    view: t,
    objectTable: /* @__PURE__ */ new Map(),
    state: { ...t0(), fontFamilyMap: i.fontFamilyMap },
    stateStack: [],
    inPath: !1,
    windowOrg: { x: n.left, y: n.top },
    windowExt: { cx: h, cy: f },
    viewportOrg: { x: 0, y: 0 },
    viewportExt: { cx: s, cy: o },
    useMappingMode: !1,
    clipSaveDepth: 0,
    bounds: n,
    canvasW: s,
    canvasH: o,
    sx: g,
    sy: p,
    pathCmds: [],
    gdiAntialias: i.gdiAntialias,
    fonts: i.fonts
  };
  let m = 0;
  const M = t.byteLength;
  let b = 0, w = 0;
  const x = /* @__PURE__ */ new Map();
  for (; m + 8 <= M && b < l; ) {
    const E = t.getUint32(m, !0), T = t.getUint32(m + 4, !0);
    if (T < 8 || m + T > M)
      break;
    b++;
    const v = m + 8;
    if (x.set(E, (x.get(E) ?? 0) + 1), E === au) {
      if (T >= 16) {
        const P = t.getUint32(v, !0), S = t.getUint32(v + 4, !0);
        if (S === yu && P > 4) {
          Pt(y), w++, X(
            `replayEmfRecords: EMF+ comment #${w} at offset 0x${m.toString(16)}, dataSize=${P}`
          );
          const R = s6(
            t,
            v + 8,
            P - 4,
            e,
            s,
            o,
            a,
            r,
            u,
            i.fontFamilyMap,
            i.textureCache,
            i.fonts
          );
          X(
            `replayEmfRecords: EMF+ comment #${w} returned ${R.length} deferred images`
          ), c.push(...R);
        } else X(
          S === F2 ? `replayEmfRecords: EMR_COMMENT_PUBLIC at offset 0x${m.toString(16)}, size=${P}` : `replayEmfRecords: EMR_COMMENT (sig=0x${S.toString(16).padStart(8, "0")}) at offset 0x${m.toString(16)}, size=${P}`
        );
      }
      m += T;
      continue;
    }
    if (E === Yl) {
      const P = [];
      for (const [S, R] of x)
        P.push(`${o6[S] ?? `0x${S.toString(16)}`}:${R}`);
      X(
        `replayEmfRecords: total deferred images = ${c.length}, EMF+ object table size = ${a.objectTable.size}`
      );
      break;
    }
    if (E === y1 || E === C1 || E === H1 || E === Ti) {
      m += T;
      continue;
    }
    if (Zh(E) || Pt(y), i.gdiDrawing === !1) {
      m += T;
      continue;
    }
    n0(y, E, m, v, T) || Jf(y, E, m, v, T) || Qf(y, E, m, v, T) || console.warn(`[emf-converter] Unhandled EMR record type: ${E}`), m += T;
  }
  if (Pt(y), b >= l && console.warn(
    `[emf-converter] EMF record limit reached (${l}). Output may be incomplete.`
  ), i.nestingDepth) {
    let E = a.clipSaveDepth + y.clipSaveDepth + y.stateStack.length;
    for (; E-- > 0; )
      e.restore();
  }
  return c;
}
function r6(t, e, n, s, o, r) {
  const i = new DataView(t);
  if (!Zr(i))
    return null;
  const [a, l, u, h, f, g] = o;
  if (l === 0 && u === 0 && a > 0 && h > 0) {
    const d = -f / a, y = -g / h, m = { left: d, top: y, right: d + n / a, bottom: y + s / h };
    return mi(i, e, m, n, s, 1, r);
  }
  return mi(i, e, { left: 0, top: 0, right: n, bottom: s }, n, s, 1, {
    ...r,
    plusBaseTransform: o,
    gdiDrawing: !1
  });
}
y5(r6);
var i6 = 15, c6 = 1128680791;
function a6(t, e) {
  let n = e, s = null, o = 0, r = 0, i = 0, c = 0, a = 0;
  for (; n + 6 <= t.byteLength && a++ < 1e6; ) {
    const u = t.getUint32(n, !0) * 2, h = t.getUint16(n + 4, !0);
    if (u < 6 || n + u > t.byteLength || h === 0)
      break;
    if (h === xu && u >= 44) {
      const f = n + 6, g = t.getUint16(f, !0), p = t.getUint16(f + 2, !0), d = f + 4;
      if (g === i6 && p >= 34 && t.getUint32(d, !0) === c6 && t.getUint32(d + 4, !0) === 1) {
        const y = t.getUint32(d + 18, !0), m = t.getUint32(d + 22, !0), M = t.getUint32(d + 26, !0), b = t.getUint32(d + 30, !0), w = d + 34;
        if (m > p - 34 || w + m > n + u)
          return null;
        if (!s) {
          if (b === 0 || b > 256 * 1024 * 1024)
            return null;
          s = new Uint8Array(b), r = b, i = y;
        }
        if (b !== r || o + m > r || M !== r - o - m)
          return null;
        s.set(new Uint8Array(t.buffer, t.byteOffset + w, m), o), o += m, c++;
      }
    }
    n += u;
  }
  if (!s || o !== r || c !== i)
    return null;
  const l = new DataView(s.buffer);
  return r < 88 || l.getUint32(0, !0) !== Ti ? null : s.buffer;
}
var El = 1, h0 = 2, l6 = 3, u6 = 4, h6 = 5, f6 = 6, mn = 7, cs = 8, as = 96;
function f0(t) {
  return {
    mode: t.mode,
    winOrg: { ...t.winOrg },
    winExt: { ...t.winExt },
    vpOrg: { ...t.vpOrg },
    vpExt: { ...t.vpExt }
  };
}
var g6 = {
  [h0]: 254,
  [l6]: 2540,
  [u6]: 100,
  [h6]: 1e3,
  [f6]: 1440
};
function Jo(t) {
  if (t.mode !== mn || !t.winExt.cx || !t.winExt.cy)
    return;
  const e = Math.abs(t.vpExt.cx / t.winExt.cx), n = Math.abs(t.vpExt.cy / t.winExt.cy);
  if (e > n) {
    const s = t.vpExt.cx >= 0 ? 1 : -1;
    t.vpExt.cx = Math.floor(t.vpExt.cx * n / e + 0.5) || s;
  } else if (n > e) {
    const s = t.vpExt.cy >= 0 ? 1 : -1;
    t.vpExt.cy = Math.floor(t.vpExt.cy * e / n + 0.5) || s;
  }
}
function p6(t, e) {
  if (e < El || e > cs)
    return;
  const n = g6[e === mn ? h0 : e];
  e === El ? (t.winExt = { cx: 1, cy: 1 }, t.vpExt = { cx: 1, cy: 1 }) : n !== void 0 && (e !== mn || t.mode !== mn) && (t.winExt = { cx: n, cy: n }, t.vpExt = { cx: as, cy: -as }), t.mode = e;
}
function Ko(t) {
  return t.mode === mn || t.mode === cs;
}
function d6(t, e, n) {
  !Ko(t) || e === 0 || n === 0 || (t.winExt = { cx: e, cy: n }, Jo(t));
}
function y6(t, e, n) {
  !Ko(t) || e === 0 || n === 0 || (t.vpExt = { cx: e, cy: n }, Jo(t));
}
function Po(t, e, n) {
  return Math.trunc(t * e / n);
}
function m6(t, e, n, s, o) {
  if (!Ko(t) || !n || !o)
    return;
  const r = Po(t.winExt.cx, e, n), i = Po(t.winExt.cy, s, o);
  r === 0 || i === 0 || (t.winExt = { cx: r, cy: i }, Jo(t));
}
function M6(t, e, n, s, o) {
  if (!Ko(t) || !n || !o)
    return;
  const r = Po(t.vpExt.cx, e, n), i = Po(t.vpExt.cy, s, o);
  r === 0 || i === 0 || (t.vpExt = { cx: r, cy: i }, Jo(t));
}
function g0(t, e, n, s, o = 0) {
  t.useMappingMode = !0, t.windowOrg = { x: e.winOrg.x, y: e.winOrg.y }, t.windowExt = { cx: e.winExt.cx || 1, cy: e.winExt.cy || 1 }, t.viewportOrg = { x: e.vpOrg.x * n, y: e.vpOrg.y * s }, t.viewportExt = { cx: (e.vpExt.cx || 1) * n, cy: (e.vpExt.cy || 1) * s }, o > 0 && (t.viewportOrg.x = o * n - t.viewportOrg.x, t.viewportExt.cx = -t.viewportExt.cx);
}
function b6(t, e) {
  const n = {
    mode: null,
    winExt: null,
    vpExt: null
  };
  let s = e, o = 0;
  for (; s + 6 <= t.byteLength && o++ < 1e6; ) {
    const r = t.getUint32(s, !0) * 2, i = t.getUint16(s + 4, !0);
    if (r < 6 || s + r > t.byteLength || i === 0)
      break;
    const c = s + 6;
    i === 259 && r >= 8 && n.mode === null ? n.mode = t.getUint16(c, !0) : i === 524 && r >= 10 && !n.winExt ? n.winExt = { cy: t.getInt16(c, !0), cx: t.getInt16(c + 2, !0) } : i === 526 && r >= 10 && !n.vpExt && (n.vpExt = { cy: t.getInt16(c, !0), cx: t.getInt16(c + 2, !0) }), s += r;
  }
  return n;
}
function p0(t, e) {
  const n = e.boundsRight - e.boundsLeft, s = e.boundsBottom - e.boundsTop;
  if (e.placeable !== !1) {
    const h = e.unitsPerInch > 0 ? e.unitsPerInch : as, f = Math.max(1, Math.round(Math.abs(n) * as / h)), g = Math.max(1, Math.round(Math.abs(s) * as / h));
    return {
      width: f,
      height: g,
      mapping: {
        mode: cs,
        winOrg: { x: e.boundsLeft, y: e.boundsTop },
        winExt: { cx: n || 1, cy: s || 1 },
        vpOrg: { x: 0, y: 0 },
        vpExt: { cx: f, cy: g }
      }
    };
  }
  const o = b6(t, e.headerSize), i = (o.mode === mn || o.mode === cs) && o.vpExt ? o.vpExt : o.winExt, c = Math.abs(i ? i.cx : n), a = Math.abs(i ? i.cy : s), l = Math.max(1, c || 1), u = Math.max(1, a || 1);
  return {
    width: l,
    height: u,
    mapping: {
      mode: cs,
      winOrg: { x: 0, y: 0 },
      winExt: { cx: l, cy: u },
      vpOrg: { x: 0, y: 0 },
      vpExt: { cx: l, cy: u }
    }
  };
}
var Jt = class {
  constructor(t, e = 64) {
    this.type = t, this.len = 8, this.bytes = new Uint8Array(Math.max(16, e)), this.view = new DataView(this.bytes.buffer);
  }
  ensure(t) {
    if (this.len + t <= this.bytes.length)
      return;
    const e = new Uint8Array(Math.max(this.bytes.length * 2, this.len + t));
    e.set(this.bytes), this.bytes = e, this.view = new DataView(e.buffer);
  }
  /** Current length in bytes (the offset the next field is written at). */
  get offset() {
    return this.len;
  }
  i32(t) {
    return this.ensure(4), this.view.setInt32(this.len, t | 0, !0), this.len += 4, this;
  }
  u32(t) {
    return this.ensure(4), this.view.setUint32(this.len, t >>> 0, !0), this.len += 4, this;
  }
  i16(t) {
    return this.ensure(2), this.view.setInt16(this.len, t, !0), this.len += 2, this;
  }
  u16(t) {
    return this.ensure(2), this.view.setUint16(this.len, t & 65535, !0), this.len += 2, this;
  }
  f32(t) {
    return this.ensure(4), this.view.setFloat32(this.len, t, !0), this.len += 4, this;
  }
  /** Appends raw bytes. */
  raw(t) {
    return this.ensure(t.length), this.bytes.set(t, this.len), this.len += t.length, this;
  }
  /** Pads to a multiple of four bytes. */
  align() {
    for (; this.len % 4 !== 0; )
      this.ensure(1), this.bytes[this.len++] = 0;
    return this;
  }
  /** Overwrites the u32 at byte `at` (for offsets known only later). */
  patchU32(t, e) {
    return this.view.setUint32(t, e >>> 0, !0), this;
  }
  /** The finished record. */
  finish() {
    return this.align(), this.view.setUint32(0, this.type, !0), this.view.setUint32(4, this.len, !0), new DataView(this.bytes.buffer, 0, this.len);
  }
};
function Kt(t, e) {
  const n = e.getUint32(0, !0), s = e.getUint32(4, !0);
  Zh(n) || Pt(t);
  const o = t.view;
  t.view = e;
  try {
    !n0(t, n, 0, 8, s) && !Jf(t, n, 0, 8, s) && Qf(t, n, 0, 8, s);
  } finally {
    t.view = o;
  }
}
var vl = [
  0,
  8388608,
  32768,
  8421376,
  128,
  8388736,
  32896,
  12632256,
  12639424,
  10930928,
  16776176,
  10526884,
  8421504,
  16711680,
  65280,
  16776960,
  255,
  16711935,
  65535,
  16777215
];
function w6() {
  return { kind: "pen", style: 0, width: 0, color: 0 };
}
function x6() {
  return { kind: "brush", style: 0, color: 16777215, hatch: 0 };
}
function Tl(t, e, n) {
  return t << 16 | e << 8 | n;
}
function vn(t, e) {
  const n = t & 255, s = t >>> 8 & 255, o = t >>> 16 & 255;
  if (t >>> 24 === 1) {
    const r = t & 65535;
    if (e) {
      const i = e.entries[r < e.entries.length ? r : 0];
      return i === void 0 ? 0 : Tl(i & 255, i >>> 8 & 255, i >>> 16 & 255);
    }
    return vl[r < vl.length ? r : 0];
  }
  return Tl(n, s, o);
}
function Tn(t, e) {
  const n = vn(e, t.palette);
  return Ll(n >> 16 & 255, n >> 8 & 255, n & 255);
}
function Ne(t, e) {
  return t.getUint32(e, !0);
}
function d0(t, e) {
  t.pen = e;
  const n = t.rCtx.state;
  n.penStyle = e.style & 15, n.penFlags = e.style & 15, n.penWidth = e.width, n.penColor = Tn(t, e.color), n.penUserStyle = void 0, n.penExtended = !1;
}
function So(t, e) {
  t.brush = e;
  const n = t.rCtx.state;
  n.brushStyle = e.pattern ? e.pattern.kind === "mono" ? 3 : 6 : e.style, n.brushColor = Tn(t, e.color), n.brushPattern = e.pattern ?? (e.style === 2 && e.hatch >= 0 && e.hatch <= 5 ? { kind: "hatch", hatch: e.hatch } : null);
}
function Ts(t) {
  d0(t, t.pen), So(t, t.brush), t.rCtx.state.textColor = Tn(t, t.textColor), t.rCtx.state.bkColor = Tn(t, t.bkColor);
}
function Dt(t, e) {
  let n = 0;
  for (; t.objects[n] !== void 0; )
    n++;
  t.objects[n] = e;
}
function E6(t, e, n) {
  const { view: s } = t;
  if (n < 16) {
    Dt(t, { kind: "other" });
    return;
  }
  Dt(t, {
    kind: "pen",
    style: s.getUint16(e, !0),
    width: s.getInt16(e + 2, !0),
    color: Ne(s, e + 6)
  });
}
function v6(t, e, n) {
  const { view: s } = t;
  if (n < 14) {
    Dt(t, { kind: "other" });
    return;
  }
  Dt(t, {
    kind: "brush",
    style: s.getUint16(e, !0),
    color: Ne(s, e + 2),
    hatch: s.getUint16(e + 6, !0)
  });
}
function T6(t, e, n, s) {
  const { view: o } = t;
  if (n < 24) {
    Dt(t, { kind: "other" });
    return;
  }
  let r = "";
  for (let c = 0; c < 32 && e + 18 + c < s; c++) {
    const a = o.getUint8(e + 18 + c);
    if (a === 0)
      break;
    r += String.fromCharCode(a);
  }
  const i = {
    kind: "font",
    // Sign kept: resolveFontPixelHeight() tells cell from character height by it.
    height: o.getInt16(e, !0),
    weight: o.getInt16(e + 8, !0),
    italic: o.getUint8(e + 10) !== 0,
    underline: o.getUint8(e + 11) !== 0,
    strikeOut: o.getUint8(e + 12) !== 0,
    family: r || "sans-serif",
    escapementTenthDeg: o.getInt16(e + 4, !0),
    details: {
      width: o.getInt16(e + 2, !0),
      orientationTenthDeg: o.getInt16(e + 6, !0),
      charSet: o.getUint8(e + 13),
      quality: o.getUint8(e + 16),
      pitchAndFamily: o.getUint8(e + 17)
    }
  };
  Dt(t, { kind: "font", font: i });
}
function y0(t, e, n, s) {
  if (n + 40 > s)
    return null;
  const o = e.getUint32(n, !0), r = e.getUint16(n + 14, !0), i = e.getUint32(n + 32, !0);
  if (o < 40 || r > 8)
    return null;
  const c = i || 1 << r, a = n + o + c * 2;
  if (a > s)
    return null;
  const l = s - a, u = new Uint8Array(o + c * 4 + l), h = new Uint8Array(e.buffer, e.byteOffset + n, s - n);
  u.set(h.subarray(0, o), 0);
  for (let f = 0; f < c; f++) {
    const g = vn(16777216 | e.getUint16(n + o + f * 2, !0), t.palette);
    u[o + f * 4] = g & 255, u[o + f * 4 + 1] = g >> 8 & 255, u[o + f * 4 + 2] = g >> 16 & 255, u[o + f * 4 + 3] = 0;
  }
  return u.set(h.subarray(a - n), o + c * 4), u;
}
function m0(t, e, n) {
  const s = t.getUint32(e, !0), o = t.getUint16(e + 14, !0), r = t.getUint32(e + 16, !0);
  let c = t.getUint32(e + 32, !0);
  c === 0 && o <= 8 && (c = 1 << o);
  let l = s + c * 4;
  return r === 3 && s === 40 && (l += 12), l;
}
function I6(t, e, n, s, o) {
  let r = t.view, i = e, c = n;
  if (s === 1) {
    const h = y0(t, t.view, e, n);
    if (!h)
      return null;
    r = new DataView(h.buffer), i = 0, c = h.length;
  }
  if (i + 40 > c)
    return null;
  const a = i + m0(r, i);
  if (o && r.getUint16(i + 14, !0) === 1) {
    const h = Dl(r, i, a);
    if (h)
      return { kind: "mono", ...h };
  }
  const l = Xe(r, i, a, Math.max(0, c - a));
  if (!l)
    return null;
  const u = new Uint32Array(l.width * l.height);
  for (let h = 0; h < u.length; h++)
    u[h] = l.data[h * 4] << 16 | l.data[h * 4 + 1] << 8 | l.data[h * 4 + 2];
  return { kind: "bitmap", width: l.width, height: l.height, rgb: u };
}
function P6(t, e, n) {
  const { view: s } = t;
  if (e + 4 + 40 > n) {
    Dt(t, { kind: "other" });
    return;
  }
  const o = s.getUint16(e, !0), r = s.getUint16(e + 2, !0), i = I6(t, e + 4, n, r, o === 3);
  Dt(t, { kind: "brush", style: i ? 6 : 0, color: 8421504, hatch: 0, ...i ? { pattern: i } : {} });
}
function M0(t, e, n) {
  const s = t.getUint16(e, !0), o = t.getUint16(e + 2, !0), r = [];
  for (let i = 0; i < o && e + 4 + i * 4 + 4 <= n; i++)
    r.push(t.getUint32(e + 4 + i * 4, !0));
  return { start: s, entries: r };
}
function S6(t, e, n) {
  if (e + 4 > n) {
    Dt(t, { kind: "other" });
    return;
  }
  Dt(t, { kind: "palette", entries: M0(t.view, e, n).entries });
}
function Il(t, e, n, s) {
  const o = t.palette;
  if (!o || e + 4 > n)
    return;
  const { start: r, entries: i } = M0(t.view, e, n);
  for (let c = 0; c < i.length && r + c < o.entries.length; c++)
    s && !(o.entries[r + c] >>> 24 & 1) || (o.entries[r + c] = i[c]);
  Ts(t);
}
function R6(t, e) {
  const n = t.palette;
  if (n) {
    if (e < n.entries.length)
      n.entries.length = e;
    else
      for (; n.entries.length < e; )
        n.entries.push(0);
    Ts(t);
  }
}
function A6(t, e) {
  const n = t.objects[e];
  (n == null ? void 0 : n.kind) === "palette" && (t.palette = n, Ts(t));
}
function U6(t, e, n) {
  const { view: s } = t, o = { kind: "region", rects: [] };
  if (e + 22 <= n) {
    const r = s.getUint16(e + 10, !0);
    let i = e + 22;
    for (let c = 0; c < r && i + 6 <= n; c++) {
      const a = s.getUint16(i, !0), l = s.getInt16(i + 2, !0), u = s.getInt16(i + 4, !0);
      let h = i + 6;
      for (let f = 0; f + 1 < a && h + 4 <= n; f += 2, h += 4) {
        const g = s.getInt16(h, !0), p = s.getInt16(h + 2, !0);
        p > g && u > l && o.rects.push([g, l, p, u]);
      }
      i = h + 2;
    }
    if (r === 0) {
      const c = s.getInt16(e + 14, !0), a = s.getInt16(e + 16, !0), l = s.getInt16(e + 18, !0), u = s.getInt16(e + 20, !0);
      l > c && u > a && o.rects.push([c, a, l, u]);
    }
  }
  Dt(t, o);
}
function k6(t, e) {
  const n = t.objects[e];
  if (!n)
    return;
  const s = t.rCtx.state;
  switch (n.kind) {
    case "pen":
      d0(t, n);
      break;
    case "brush":
      So(t, n);
      break;
    case "font": {
      const o = n.font;
      s.fontHeight = o.height, s.fontWeight = o.weight, s.fontItalic = o.italic, s.fontUnderline = o.underline, s.fontStrikeOut = o.strikeOut, s.fontFamily = o.family, s.fontEscapementTenthDeg = o.escapementTenthDeg ?? 0, s.fontDetails = o.details;
      break;
    }
  }
  return n;
}
function L6(t, e) {
  e >= 0 && e < t.objects.length && (t.objects[e] = void 0);
}
function gc(t, e, n, s, o) {
  const r = rt(t.rCtx), i = (l, u) => [
    Math.floor((r[0] * l + r[2] * u + r[4]) / t.kx + 0.5),
    Math.floor((r[1] * l + r[3] * u + r[5]) / t.ky + 0.5)
  ], c = i(e, n), a = i(e + s, n + o);
  return [c[0], c[1], a[0] - c[0], a[1] - c[1]];
}
function b0(t, e) {
  const { rCtx: n } = t, s = {
    windowOrg: n.windowOrg,
    windowExt: n.windowExt,
    viewportOrg: n.viewportOrg,
    viewportExt: n.viewportExt
  };
  n.windowOrg = { x: 0, y: 0 }, n.windowExt = { cx: 1, cy: 1 }, n.viewportOrg = { x: 0, y: 0 }, n.viewportExt = { cx: t.kx, cy: t.ky };
  try {
    e();
  } finally {
    Object.assign(n, s);
  }
}
function F6(t, e) {
  if (!e || e.bmi.length < 48)
    return e;
  const n = new DataView(e.bmi.buffer, e.bmi.byteOffset, e.bmi.byteLength);
  if (n.getUint16(14, !0) !== 1)
    return e;
  const s = e.bmi.slice(), o = n.getUint32(0, !0), r = (i, c) => {
    s[o + i * 4] = c & 255, s[o + i * 4 + 1] = c >> 8 & 255, s[o + i * 4 + 2] = c >> 16 & 255, s[o + i * 4 + 3] = 0;
  };
  return r(0, vn(t.textColor, t.palette)), r(1, vn(t.bkColor, t.palette)), { bmi: s, bits: e.bits };
}
function pc(t, e, n, s) {
  const { view: o } = t;
  if (e + 40 > n)
    return null;
  let r = new Uint8Array(o.buffer, o.byteOffset + e, n - e), i = new DataView(r.buffer, r.byteOffset, r.byteLength);
  if (s === 1) {
    const a = y0(t, o, e, n);
    if (!a)
      return null;
    r = a, i = new DataView(a.buffer);
  }
  if (i.getUint32(0, !0) < 40)
    return null;
  const c = m0(i, 0);
  return c > r.length ? null : { bmi: r.subarray(0, c), bits: r.subarray(c) };
}
function dc(t, e, n, s, o, r, i, c, a, l, u, h) {
  [s, o, r, i] = gc(t, s, o, r, i);
  const f = e ? 108 : 100, g = new Jt(e ? Xl : lu, f + (h ? h.bmi.length + h.bits.length + 8 : 0));
  g.i32(0).i32(0).i32(-1).i32(-1), g.i32(s).i32(o).i32(r).i32(i), g.u32(n), g.i32(c).i32(a), g.f32(1).f32(0).f32(0).f32(1).f32(0).f32(0), g.u32(0), g.u32(0);
  const p = g.offset;
  if (g.u32(0).u32(0).u32(0).u32(0), e && g.i32(l).i32(u), h) {
    const y = g.offset;
    g.raw(h.bmi).align();
    const m = g.offset;
    g.raw(h.bits), g.patchU32(p, y).patchU32(p + 4, h.bmi.length).patchU32(p + 8, m).patchU32(p + 12, h.bits.length);
  }
  const d = g.finish();
  b0(t, () => Kt(t.rCtx, d));
}
function w0(t, e, n, s, o, r, i, c, a, l, u, h = !1) {
  h || ([n, s, o, r] = gc(t, n, s, o, r));
  const f = new Jt(uu, 80 + u.bmi.length + u.bits.length + 8);
  f.i32(0).i32(0).i32(-1).i32(-1), f.i32(n).i32(s), f.i32(i).i32(c).i32(a).i32(l);
  const g = f.offset;
  f.u32(0).u32(0).u32(0).u32(0), f.u32(0), f.u32(e), f.i32(o).i32(r);
  const p = f.offset;
  f.raw(u.bmi).align();
  const d = f.offset;
  f.raw(u.bits), f.patchU32(g, p).patchU32(g + 4, u.bmi.length).patchU32(g + 8, d).patchU32(g + 12, u.bits.length);
  const y = f.finish();
  b0(t, () => Kt(t.rCtx, y));
}
function D6(t, e, n) {
  const { view: s } = t;
  if (e + 12 > n)
    return;
  const o = s.getUint32(e, !0), r = s.getInt16(e + 4, !0), i = s.getInt16(e + 6, !0), c = s.getInt16(e + 8, !0), a = s.getInt16(e + 10, !0);
  dc(t, !1, o, a, c, i, r, 0, 0, i, r, null);
}
function x0(t, e) {
  return e / 2 === (t >> 8) + 3;
}
function _6(t, e, n, s) {
  const { view: o } = t, r = o.getUint16(n + 4, !0);
  if (!x0(r, s))
    return;
  const i = n + 6, c = i + 4 + (e ? 4 : 0) + 6;
  if (c + 8 > n + s)
    return;
  const a = o.getUint32(i, !0), l = o.getInt16(c, !0), u = o.getInt16(c + 2, !0), h = o.getInt16(c + 4, !0), f = o.getInt16(c + 6, !0);
  dc(t, !1, a, f, h, u, l, 0, 0, u, l, null);
}
function N6(t, e, n, s) {
  const { view: o } = t, r = o.getUint16(n + 4, !0), i = n + 6, c = n + s, a = x0(r, s);
  let l = i + 4;
  const u = () => {
    const x = o.getInt16(l, !0);
    return l += 2, x;
  };
  if (i + 4 + (e ? 16 : 12) > c)
    return;
  const h = o.getUint32(i, !0), f = e ? u() : 0, g = e ? u() : 0, p = u(), d = u();
  a && (l += 2);
  const y = u(), m = u(), M = u(), b = u(), w = a ? null : F6(t, pc(t, l, c, 0));
  dc(t, e, h, b, M, m, y, d, p, e ? g : m, e ? f : y, w);
}
function B6(t, e, n) {
  const { view: s } = t;
  if (e + 22 > n)
    return;
  const o = s.getUint32(e, !0), r = s.getUint16(e + 4, !0), i = s.getInt16(e + 6, !0), c = s.getInt16(e + 8, !0), a = s.getInt16(e + 10, !0), l = s.getInt16(e + 12, !0), u = s.getInt16(e + 14, !0), h = s.getInt16(e + 16, !0), f = s.getInt16(e + 18, !0), g = s.getInt16(e + 20, !0), p = pc(t, e + 22, n, r);
  p && w0(t, o, g, f, h, u, l, a, c, i, p);
}
function X6(t, e, n) {
  const { view: s } = t;
  if (e + 18 > n)
    return;
  const o = s.getUint16(e, !0), r = s.getUint16(e + 2, !0), i = s.getUint16(e + 4, !0), c = s.getInt16(e + 6, !0), a = s.getInt16(e + 8, !0), l = s.getInt16(e + 10, !0), u = s.getInt16(e + 12, !0), h = s.getInt16(e + 14, !0), f = s.getInt16(e + 16, !0), g = pc(t, e + 18, n, o);
  if (!g || r === 0)
    return;
  const p = Math.abs(new DataView(g.bmi.buffer, g.bmi.byteOffset, g.bmi.byteLength).getInt32(8, !0));
  if (i !== 0 || r < p)
    return;
  const d = Math.max(c, i), y = Math.min(c + l, i + r);
  if (y <= d || u <= 0)
    return;
  const m = g.bmi.slice(), M = new DataView(m.buffer), b = M.getInt32(8, !0);
  M.setInt32(8, b < 0 ? -r : r, !0);
  const [w, x] = gc(t, f, h, 0, 0);
  w0(t, 13369376, w, x + (c + l - y), u, y - d, a, d - i, u, y - d, { bmi: m, bits: g.bits }, !0);
}
function Pl(t, e, n) {
  const s = rt(t.rCtx), o = Math.round((s[0] * e + s[2] * n) * 16) + Math.round(s[4] * 16), r = Math.round((s[1] * e + s[3] * n) * 16) + Math.round(s[5] * 16);
  return [Math.floor((o / t.kx + 8) / 16), Math.floor((r / t.ky + 8) / 16)];
}
function Is(t, e, n, s, o) {
  const r = Pl(t, e, n), i = Pl(t, s, o);
  return [Math.min(r[0], i[0]), Math.min(r[1], i[1]), Math.max(r[0], i[0]), Math.max(r[1], i[1])];
}
function Y6(t, e) {
  return e.map(([n, s, o, r]) => ({ x: n * t.kx, y: s * t.ky, w: (o - n) * t.kx, h: (r - s) * t.ky }));
}
function yc(t, e, n) {
  Pt(t.rCtx);
  const s = e.length > 0 ? xn(Y6(t, e)) : Qt();
  vs(t.rCtx, s, n);
}
function z6(t, e, n, s, o) {
  yc(t, [Is(t, e, n, s, o)], "intersect");
}
function O6(t, e, n, s, o) {
  yc(t, [Is(t, e, n, s, o)], "exclude");
}
function $6(t, e, n) {
  const { rCtx: s } = t;
  if (!s.clipRegion)
    return;
  Pt(s);
  const o = rt(s), r = Math.round(o[0] * e / t.kx) * t.kx, i = Math.round(o[3] * n / t.ky) * t.ky;
  s.clipRegion = $o(s.clipRegion, r, i), we(s, s.clipRegion);
}
function Sl(t, e) {
  const n = t.objects[e];
  if ((n == null ? void 0 : n.kind) !== "region") {
    Pt(t.rCtx), t.rCtx.clipRegion = null, we(t.rCtx, null);
    return;
  }
  yc(t, n.rects, "replace");
}
function Zo(t, e) {
  return e.rects.map(([n, s, o, r]) => Is(t, n, s, o, r)).filter(([n, s, o, r]) => o > n && r > s);
}
function E0(t, e) {
  const n = new Ct(), s = /* @__PURE__ */ new Map();
  for (const [o, r, i, c] of e) {
    const a = Math.round(o * t.kx), l = Math.round(i * t.kx);
    for (let u = Math.round(r * t.ky); u < Math.round(c * t.ky); u++) {
      let h = s.get(u);
      h || (h = [], s.set(u, h)), h.push([a, l]);
    }
  }
  for (const o of [...s.keys()].sort((r, i) => r - i)) {
    const r = s.get(o).sort((a, l) => a[0] - l[0]);
    let [i, c] = r[0];
    for (let a = 1; a < r.length; a++)
      r[a][0] <= c ? c = Math.max(c, r[a][1]) : (n.add(o, i, c), [i, c] = r[a]);
    n.add(o, i, c);
  }
  return n;
}
function mc(t, e, n) {
  const s = t.brush;
  if (n !== null) {
    const r = t.objects[n];
    if ((r == null ? void 0 : r.kind) !== "brush")
      return;
    So(t, r);
  }
  const o = An(t.rCtx);
  o && Ft(t.rCtx, E0(t, e), o, t.rCtx.state.rop2), n !== null && So(t, s);
}
function Qo(t, e) {
  const n = t.objects[e];
  return (n == null ? void 0 : n.kind) === "region" ? n : null;
}
function C6(t, e, n) {
  const s = Qo(t, e);
  s && mc(t, Zo(t, s), n);
}
function H6(t, e) {
  const n = Qo(t, e);
  n && mc(t, Zo(t, n), null);
}
function G6(t, e) {
  const n = Qo(t, e);
  n && Ft(t.rCtx, E0(t, Zo(t, n)), { kind: "solid", rgb: 0 }, 6);
}
function j6(t) {
  if (t.length === 0)
    return null;
  let e = 1 / 0, n = 1 / 0, s = -1 / 0, o = -1 / 0;
  for (const [a, l, u, h] of t)
    e = Math.min(e, a), n = Math.min(n, l), s = Math.max(s, u), o = Math.max(o, h);
  const r = s - e, i = o - n;
  if (r <= 0 || i <= 0 || r * i > 64 * 1024 * 1024)
    return null;
  const c = new Uint8Array(r * i);
  for (const [a, l, u, h] of t)
    for (let f = l; f < h; f++)
      c.fill(1, (f - n) * r + (a - e), (f - n) * r + (u - e));
  return { x0: e, y0: n, w: r, h: i, m: c };
}
function W6(t, e, n, s, o) {
  const r = Qo(t, e);
  if (!r)
    return;
  const i = rt(t.rCtx), c = Math.abs(Math.round(i[0] * o / t.kx)), a = Math.abs(Math.round(i[3] * s / t.ky)), l = j6(Zo(t, r));
  if (!l)
    return;
  const { x0: u, y0: h, w: f, h: g } = l, p = (y, m) => y >= 0 && m >= 0 && y < f && m < g ? l.m[m * f + y] : 0, d = [];
  for (let y = 0; y < g; y++) {
    let m = -1;
    for (let M = 0; M <= f; M++) {
      const b = M < f && p(M, y) === 1, w = b && p(M - c, y) === 1 && p(M + c, y) === 1 && p(M, y - a) === 1 && p(M, y + a) === 1 && p(M - c, y - a) === 1 && p(M + c, y - a) === 1 && p(M - c, y + a) === 1 && p(M + c, y + a) === 1, x = b && !w;
      x && m < 0 ? m = M : !x && m >= 0 && (d.push([u + m, h + y, u + M, h + y + 1]), m = -1);
    }
  }
  mc(t, d, n);
}
function V6(t, e, n) {
  const s = new Ct(), o = Math.round(e * t.kx), r = Math.max(o + 1, Math.round((e + 1) * t.kx)), i = Math.round(n * t.ky), c = Math.max(i + 1, Math.round((n + 1) * t.ky));
  for (let a = i; a < c; a++)
    s.add(a, o, r);
  return s;
}
function q6(t, e, n, s) {
  const [o, r] = Is(t, e, n, e, n);
  Ft(t.rCtx, V6(t, o, r), { kind: "solid", rgb: vn(s, t.palette) }, 13);
}
function Rl(t, e, n, s, o) {
  const { rCtx: r } = t, { ctx: i } = r, c = ms(i);
  if (!c || !le(i) || typeof i.getImageData != "function")
    return;
  const a = An(r);
  if (!a)
    return;
  Pt(r);
  const [l, u] = Is(t, e, n, e, n), h = Math.floor((l + 0.5) * t.kx), f = Math.floor((u + 0.5) * t.ky), { w: g, h: p } = c;
  if (h < 0 || f < 0 || h >= g || f >= p)
    return;
  const d = V(i, 0, 0, g, p).data, y = vn(s, t.palette), m = (v) => d[v * 4 + 3] === 0 ? 16777215 : d[v * 4] << 16 | d[v * 4 + 1] << 8 | d[v * 4 + 2], M = o === 1, b = (v) => M ? m(v) === y : m(v) !== y, w = f * g + h;
  if (!b(w))
    return;
  const x = new Uint8Array(g * p), E = [w];
  for (x[w] = 1; E.length > 0; ) {
    const v = E.pop(), I = v % g, P = (v - I) / g, S = (R) => {
      !x[R] && b(R) && (x[R] = 1, E.push(R));
    };
    I > 0 && S(v - 1), I + 1 < g && S(v + 1), P > 0 && S(v - g), P + 1 < p && S(v + g);
  }
  const T = new Ct();
  for (let v = 0; v < p; v++) {
    let I = -1;
    for (let P = 0; P <= g; P++) {
      const S = P < g && x[v * g + P] === 1;
      S && I < 0 ? I = P : !S && I >= 0 && (T.add(v, I, P), I = -1);
    }
  }
  Ft(r, T, a, r.state.rop2);
}
var v0 = 5, J6 = 6;
function gs(t, e, n, s, o, r = {}) {
  const i = r.exclusive !== !1, c = $(t.rCtx, e, n), a = $(t.rCtx, s, o), l = 16 * t.kx, u = 16 * t.ky, h = {
    x0: Math.min(c[0], a[0]),
    y0: Math.min(c[1], a[1]),
    x1: Math.max(c[0], a[0]) - (i ? Math.round(l) : 0),
    y1: Math.max(c[1], a[1]) - (i ? Math.round(u) : 0)
  };
  if (!i)
    return h;
  if (r.curved && T0(t) && (h.x0 -= Math.round(l / 4), h.y0 -= Math.round(u / 4), h.x1 -= Math.round(l * 3 / 4), h.y1 -= Math.round(u * 3 / 4)), (t.rCtx.state.penStyle & 15) === J6) {
    const f = Math.round(Zi(t.rCtx) / t.kx);
    f > 1 && (h.x0 += Math.round(Math.floor(f / 2) * l), h.y0 += Math.round(Math.floor(f / 2) * u), h.x1 -= Math.round(Math.floor((f - 1) / 2) * l), h.y1 -= Math.round(Math.floor((f - 1) / 2) * u));
  }
  return h;
}
function tr(t) {
  return Iu(t.x0, t.y0, Math.max(t.x0, t.x1), Math.max(t.y0, t.y1));
}
function Ps(t) {
  return { x: t.x0 / 16, y: t.y0 / 16, w: Math.max(0, t.x1 - t.x0) / 16, h: Math.max(0, t.y1 - t.y0) / 16 };
}
function K6(t, e) {
  const { state: n } = t.rCtx, s = wn(t.rCtx);
  if (ws(n, s) === 0 || bs(n, s) !== 1)
    return;
  const o = Ps(e);
  if (!(o.w <= 1 || o.h <= 1))
    return (r) => {
      r.beginPath(), r.rect(o.x + 1, o.y + 1, o.w - 1, o.h - 1);
    };
}
function Z6(t, e, n, s, o) {
  const r = gs(t, e, n, s, o);
  if (r.x1 < r.x0 || r.y1 < r.y0)
    return;
  const i = Ps(r), { rCtx: c } = t, { state: a } = c, l = a.penStyle === v0 || (a.penStyle === 0 || a.penStyle === 6) && Ee(c);
  if (c.gdiAntialias !== !1 && l && Gt(a).kind !== "tile" && (jt(a.rop2).exact || !ys(a.rop2))) {
    const { ctx: u } = c;
    Pt(c), Bi(u, a), u.fillRect(i.x, i.y, i.w, i.h), Ni(u, a), u.lineWidth = 1;
    const h = ws(a, wn(c));
    u.strokeRect(i.x + h, i.y + h, i.w, i.h);
    return;
  }
  Mt(t.rCtx, {
    build: (u) => {
      u.beginPath(), u.rect(i.x, i.y, i.w, i.h);
    },
    raster: () => ns(tr(r)),
    rectangle: !0,
    fill: !0,
    stroke: !0,
    axisRect: { interior: K6(t, r) }
  });
}
function Q6(t, e, n, s, o, r, i) {
  const c = gs(t, e, n, s, o, { curved: !0 });
  if (c.x1 < c.x0 || c.y1 < c.y0)
    return;
  const a = rt(t.rCtx);
  let l = Math.round(Math.abs(r * a[0]) * 16), u = Math.round(Math.abs(i * a[3]) * 16);
  !T0(t) && !Ee(t.rCtx) && (l = Math.floor(l / 32) * 32, u = Math.floor(u / 32) * 32);
  const h = Ps(c);
  Mt(t.rCtx, {
    build: (f) => {
      f.beginPath();
      const g = Math.min(l / 32, h.w / 2), p = Math.min(u / 32, h.h / 2);
      if (g <= 0 || p <= 0) {
        f.rect(h.x, h.y, h.w, h.h);
        return;
      }
      const d = Math.PI / 2, y = h.x + h.w, m = h.y + h.h;
      f.moveTo(h.x + g, h.y), f.lineTo(y - g, h.y), f.ellipse(y - g, h.y + p, g, p, 0, -d, 0), f.lineTo(y, m - p), f.ellipse(y - g, m - p, g, p, 0, 0, d), f.lineTo(h.x + g, m), f.ellipse(h.x + g, m - p, g, p, 0, d, 2 * d), f.lineTo(h.x, h.y + p), f.ellipse(h.x + g, h.y + p, g, p, 0, 2 * d, 3 * d), f.closePath();
    },
    raster: () => lf(tr(c), l, u),
    roundPen: !0,
    fill: !0,
    stroke: !0
  });
}
function tb(t, e, n, s, o) {
  const r = gs(t, e, n, s, o, { curved: !0 });
  if (r.x1 < r.x0 || r.y1 < r.y0)
    return;
  const i = Ps(r);
  Mt(t.rCtx, {
    build: (c) => {
      c.beginPath(), c.ellipse(i.x + i.w / 2, i.y + i.h / 2, i.w / 2, i.h / 2, 0, 0, Math.PI * 2);
    },
    raster: () => ai(tr(r)),
    roundPen: !0,
    fill: !0,
    stroke: !0
  });
}
function eb(t, e, n, s, o, r, i, c, a, l) {
  const u = gs(t, n, s, o, r, { curved: e !== "arc" });
  if (u.x1 < u.x0 || u.y1 < u.y0)
    return;
  const h = gs(t, n, s, o, r, { exclusive: !1 }), f = (u.x0 + u.x1 - h.x0 - h.x1) / 2, g = (u.y0 + u.y1 - h.y0 - h.y1) / 2, p = $(t.rCtx, i, c), d = $(t.rCtx, a, l), y = [p[0] + f, p[1] + g], m = [d[0] + f, d[1] + g], M = t.rCtx.state.arcDirection === 2, b = Ps(u), w = b.x + b.w / 2, x = b.y + b.h / 2, E = b.w / 2 || 1, T = b.h / 2 || 1, v = Math.atan2((y[1] / 16 - x) / T, (y[0] / 16 - w) / E), I = Math.atan2((m[1] / 16 - x) / T, (m[0] / 16 - w) / E), P = e === "chord" || e === "pie";
  Mt(t.rCtx, {
    build: (S) => {
      S.beginPath(), e === "pie" && S.moveTo(w, x), S.ellipse(w, x, b.w / 2, b.h / 2, 0, v, I, !M), P && S.closePath();
    },
    raster: () => eo(tr(u), y, m, M, e).path,
    fill: P,
    stroke: !0
  });
}
function T0(t) {
  return (t.rCtx.state.penStyle & 15) === v0;
}
var nb = [
  8364,
  129,
  8218,
  402,
  8222,
  8230,
  8224,
  8225,
  710,
  8240,
  352,
  8249,
  338,
  141,
  381,
  143,
  144,
  8216,
  8217,
  8220,
  8221,
  8226,
  8211,
  8212,
  732,
  8482,
  353,
  8250,
  339,
  157,
  382,
  376
];
function sb(t, e) {
  return e === 2 ? t : t >= 128 && t <= 159 ? nb[t - 128] : t;
}
function ob(t, e) {
  const n = t.rCtx.fonts;
  if (!n)
    return null;
  const s = rt(t.rCtx), o = n.realize(Hf(t.rCtx.state, Math.hypot(s[2], s[3]), Math.hypot(s[0], s[1])), t.rCtx.state.fontFamilyMap);
  return o ? e.map((r) => o.advance(o.glyphIndex(r))) : null;
}
function rb(t, e) {
  if (t.charExtra === 0 && (t.justifyExtra === 0 || t.justifyCount === 0))
    return null;
  const n = ob(t, e);
  if (!n)
    return null;
  const s = rt(t.rCtx), o = Math.hypot(s[0], s[1]) || 1, r = Math.round(t.charExtra * o), i = 32, c = t.justifyCount, a = c > 0 ? Math.round(t.justifyExtra * o) : 0, l = (h) => Math.round((h + 1) * a / c) - Math.round(h * a / c);
  let u = 0;
  return n.map((h, f) => {
    let g = h + r;
    return e[f] === i && c > 0 && (g += l(u++)), g / o;
  });
}
function ib(t, e, n, s) {
  const { rCtx: o } = t;
  if (!o.fonts)
    return !1;
  Pt(o);
  const r = e.rect, i = Gf(o.ctx, o.fonts, o.state, {
    codes: n,
    glyphIndices: !1,
    x: e.x,
    y: e.y,
    options: e.options,
    rect: r ? { left: r[0], top: r[1], right: r[2], bottom: r[3] } : null,
    dx: s,
    dy: null,
    matrix: rt(o)
  });
  return i ? (o.state.textAlign & 1 && (o.state.curX += i.dx, o.state.curY += i.dy), !0) : !1;
}
function Mi(t, e) {
  var u;
  const n = ((u = t.rCtx.state.fontDetails) == null ? void 0 : u.charSet) ?? 1, s = e.bytes.map((h) => sb(h, n)), o = s.length;
  if (o === 0)
    return;
  const r = e.dx ?? rb(t, s);
  if (ib(t, e, s, r))
    return;
  const i = new Jt(hu, 76 + o * 6 + 8);
  i.i32(0).i32(0).i32(-1).i32(-1), i.u32(1), i.f32(1).f32(1), i.i32(e.x).i32(e.y), i.u32(o);
  const c = i.offset;
  i.u32(0), i.u32(e.options);
  const a = e.rect ?? [0, 0, 0, 0];
  i.i32(a[0]).i32(a[1]).i32(a[2]).i32(a[3]);
  const l = i.offset;
  i.u32(0), i.patchU32(c, i.offset);
  for (const h of s)
    i.u16(h);
  if (i.align(), r) {
    i.patchU32(l, i.offset);
    for (const h of r)
      i.u32(Math.round(h) >>> 0);
  }
  Kt(t.rCtx, i.finish());
}
function cb(t, e, n) {
  const { view: s } = t;
  if (e + 2 > n)
    return;
  const o = s.getInt16(e, !0), r = e + 2, i = r + o + (o & 1);
  if (o <= 0 || i + 4 > n)
    return;
  const c = [];
  for (let a = 0; a < o; a++)
    c.push(s.getUint8(r + a));
  Mi(t, {
    y: s.getInt16(i, !0),
    x: s.getInt16(i + 2, !0),
    bytes: c,
    options: 0,
    rect: null,
    dx: null
  });
}
function ab(t, e, n) {
  const { view: s } = t;
  if (e + 8 > n)
    return;
  const o = s.getInt16(e, !0), r = s.getInt16(e + 2, !0), i = s.getInt16(e + 4, !0), c = s.getUint16(e + 6, !0), a = (c & (Io | hc)) !== 0, l = e + 8 + (a ? 8 : 0), u = a && e + 16 <= n ? [s.getInt16(e + 8, !0), s.getInt16(e + 10, !0), s.getInt16(e + 12, !0), s.getInt16(e + 14, !0)] : null, h = Math.max(0, i);
  if (l + h > n)
    return;
  const f = [];
  for (let d = 0; d < h; d++)
    f.push(s.getUint8(l + d));
  const g = l + h + (h & 1);
  let p = null;
  if (h > 0 && g + h * 2 <= n) {
    p = [];
    for (let d = 0; d < h; d++)
      p.push(s.getInt16(g + d * 2, !0));
  }
  if (h === 0) {
    u && c & Io && Mi(t, { x: r, y: o, bytes: [32], options: c, rect: u, dx: [0] });
    return;
  }
  Mi(t, { x: r, y: o, bytes: f, options: c, rect: u, dx: p });
}
function lb(t, e, n, s, o, r = {}) {
  const i = p0(t, n), c = s / i.width, a = o / i.height, l = { ...t0(), fontFamilyMap: r.fontFamilyMap }, u = {
    ctx: e,
    view: t,
    objectTable: /* @__PURE__ */ new Map(),
    state: l,
    stateStack: [],
    inPath: !1,
    windowOrg: { x: 0, y: 0 },
    windowExt: { cx: 1, cy: 1 },
    viewportOrg: { x: 0, y: 0 },
    viewportExt: { cx: 1, cy: 1 },
    useMappingMode: !0,
    clipSaveDepth: 0,
    bounds: { left: 0, top: 0, right: i.width, bottom: i.height },
    canvasW: s,
    canvasH: o,
    sx: c,
    sy: a,
    pathCmds: [],
    gdiAntialias: r.gdiAntialias,
    fonts: r.fonts,
    wholeDevicePixels: [c, a]
  }, h = {
    rCtx: u,
    view: t,
    kx: c,
    ky: a,
    devW: i.width,
    devH: i.height,
    objects: [],
    stack: [],
    mapping: i.mapping,
    pen: w6(),
    brush: x6(),
    palette: null,
    textColor: 0,
    bkColor: 16777215,
    charExtra: 0,
    justifyExtra: 0,
    justifyCount: 0,
    layout: 0
  };
  return g0(u, h.mapping, c, a), Ts(h), h;
}
function Yt(t) {
  g0(t.rCtx, t.mapping, t.kx, t.ky, t.layout & 1 ? t.devW : 0);
}
function ub(t) {
  return {
    mapping: f0(t.mapping),
    pen: t.pen,
    brush: t.brush,
    palette: t.palette,
    textColor: t.textColor,
    bkColor: t.bkColor,
    charExtra: t.charExtra,
    justifyExtra: t.justifyExtra,
    justifyCount: t.justifyCount,
    layout: t.layout
  };
}
function Cn(t, e, n) {
  Kt(t.rCtx, new Jt(e, 16).u32(n).finish());
}
function hb(t, e, n, s) {
  const o = new Jt(e, 28 + n * 4);
  o.i32(0).i32(0).i32(-1).i32(-1).u32(n);
  for (let r = 0; r < n; r++)
    o.i16(t.view.getInt16(s + r * 4, !0)).i16(t.view.getInt16(s + r * 4 + 2, !0));
  Kt(t.rCtx, o.finish());
}
function fb(t, e, n, s) {
  const { view: o, rCtx: r } = t, i = n + 6, c = n + s, a = (h) => i + h <= c, l = (h) => o.getInt16(i + h * 2, !0), u = (h) => o.getUint16(i + h * 2, !0);
  switch (e) {
    case yp:
      a(2) && (p6(t.mapping, u(0)), Yt(t));
      return;
    case Vg:
      a(4) && (t.mapping.winOrg = { y: l(0), x: l(1) }, Yt(t));
      return;
    case qg:
      a(4) && (d6(t.mapping, l(1), l(0)), Yt(t));
      return;
    case Tp:
      a(4) && (t.mapping.vpOrg = { y: l(0), x: l(1) }, Yt(t));
      return;
    case Ip:
      a(4) && (y6(t.mapping, l(1), l(0)), Yt(t));
      return;
    case Pp:
      a(4) && (t.mapping.winOrg = { x: t.mapping.winOrg.x + l(1), y: t.mapping.winOrg.y + l(0) }, Yt(t));
      return;
    case Sp:
      a(4) && (t.mapping.vpOrg = { x: t.mapping.vpOrg.x + l(1), y: t.mapping.vpOrg.y + l(0) }, Yt(t));
      return;
    case Lp:
      a(8) && (m6(t.mapping, l(3), l(2), l(1), l(0)), Yt(t));
      return;
    case Fp:
      a(8) && (M6(t.mapping, l(3), l(2), l(1), l(0)), Yt(t));
      return;
    case hp:
      t.stack.push(ub(t)), Kt(r, new Jt(ou, 8).finish());
      return;
    case fp: {
      let h = a(2) ? l(0) : -1;
      const f = t.stack.length;
      if (h < 0 && (h = f + h + 1), h < 1 || h > f)
        return;
      const g = t.stack[h - 1];
      t.stack.length = h - 1, Kt(r, new Jt(ru, 12).i32(h).finish()), Object.assign(t, { ...g, mapping: f0(g.mapping) }), Yt(t), Ts(t);
      return;
    }
    case jg:
      a(4) && (t.textColor = Ne(o, i), r.state.textColor = Tn(t, t.textColor));
      return;
    case $g:
      a(4) && (t.bkColor = Ne(o, i), r.state.bkColor = Tn(t, t.bkColor));
      return;
    case Cg:
      a(2) && Cn(t, zl, u(0));
      return;
    case Hg:
      a(2) && Cn(t, $l, u(0));
      return;
    case Gg:
      a(2) && Cn(t, Ol, u(0));
      return;
    case Mp:
      a(2) && Cn(t, Cl, u(0));
      return;
    case Wg:
      a(2) && Cn(t, nu, u(0));
      return;
    case bp:
      a(2) && (t.charExtra = l(0));
      return;
    case vp:
      a(4) && (t.justifyCount = l(0), t.justifyExtra = l(1));
      return;
    case Ep:
      a(4) && (t.layout = o.getUint32(i, !0), Yt(t));
      return;
    case mp:
    case Up:
    case xu:
    case pp:
      return;
    case rp:
      E6(t, i, s);
      return;
    case ip:
      v6(t, i, s);
      return;
    case cp:
      T6(t, i, s, c);
      return;
    case xp:
      P6(t, i, c);
      return;
    case Jp:
      return;
    case Vp:
      S6(t, i, c);
      return;
    case Qp:
      U6(t, i, c);
      return;
    case qp:
    case Zp:
    case Kp:
      Dt(t, { kind: "other" });
      return;
    case sp:
      if (a(2)) {
        const h = t.objects[u(0)];
        (h == null ? void 0 : h.kind) === "region" ? Sl(t, u(0)) : k6(t, u(0));
      }
      return;
    case kp:
      a(2) && A6(t, u(0));
      return;
    case dp:
      Il(t, i, c, !1);
      return;
    case Yp:
      Il(t, i, c, !0);
      return;
    case wp:
      a(2) && R6(t, u(0));
      return;
    case op:
      a(2) && L6(t, u(0));
      return;
    case Jg:
      a(4) && Kt(r, new Jt(su, 16).i32(l(1)).i32(l(0)).finish());
      return;
    case Kg:
      a(4) && Kt(r, new Jt(iu, 16).i32(l(1)).i32(l(0)).finish());
      return;
    case Zg:
      a(8) && Z6(t, l(3), l(2), l(1), l(0));
      return;
    case Qg:
      a(12) && Q6(t, l(5), l(4), l(3), l(2), l(1), l(0));
      return;
    case tp:
      a(8) && tb(t, l(3), l(2), l(1), l(0));
      return;
    case Sc:
    case Rc:
    case ep:
      a(16) && eb(t, e === Sc ? "arc" : e === Rc ? "chord" : "pie", l(7), l(6), l(5), l(4), l(3), l(2), l(1), l(0));
      return;
    case Ac:
    case np:
      if (a(2)) {
        const h = l(0);
        h > 0 && a(2 + h * 4) && hb(t, e === Ac ? Ii : gu, h, i + 2);
      }
      return;
    case gp:
      if (a(2)) {
        const h = u(0);
        if (h === 0 || !a(2 + h * 2))
          return;
        const f = [];
        let g = 0;
        for (let y = 0; y < h; y++) {
          const m = o.getUint16(i + 2 + y * 2, !0);
          f.push(m), g += m;
        }
        const p = i + 2 + h * 2;
        if (!a(2 + h * 2 + g * 4))
          return;
        const d = new Jt(du, 32 + h * 4 + g * 4);
        d.i32(0).i32(0).i32(-1).i32(-1).u32(h).u32(g);
        for (const y of f)
          d.u32(y);
        for (let y = 0; y < g; y++)
          d.i16(o.getInt16(p + y * 4, !0)).i16(o.getInt16(p + y * 4 + 2, !0));
        Kt(r, d.finish());
      }
      return;
    case ap:
      cb(t, i, c);
      return;
    case up:
      ab(t, i, c);
      return;
    case lp:
      D6(t, i, c);
      return;
    case Hp:
    case Uc:
      _6(t, e === Uc, n, s);
      return;
    case Gp:
    case kc:
      N6(t, e === kc, n, s);
      return;
    case jp:
      B6(t, i, c);
      return;
    case Wp:
      X6(t, i, c);
      return;
    case _p:
      a(8) && z6(t, l(3), l(2), l(1), l(0));
      return;
    case Dp:
      a(8) && O6(t, l(3), l(2), l(1), l(0));
      return;
    case Rp:
      a(4) && $6(t, l(1), l(0));
      return;
    case Cp:
      a(2) && Sl(t, u(0));
      return;
    case Ap:
      a(4) && C6(t, u(0), u(1));
      return;
    case $p:
      a(2) && H6(t, u(0));
      return;
    case Op:
      a(2) && G6(t, u(0));
      return;
    case Xp:
      a(8) && W6(t, u(0), u(1), l(2), l(3));
      return;
    case Bp:
      a(8) && q6(t, l(3), l(2), Ne(o, i));
      return;
    case Np:
      a(8) && Rl(t, l(3), l(2), Ne(o, i), 0);
      return;
    case zp:
      a(10) && Rl(t, l(4), l(3), Ne(o, i + 2), u(0));
      return;
    default:
      return;
  }
}
function gb(t, e, n, s, o, r = {}) {
  const i = lb(t, e, n, s, o, r);
  let c = n.headerSize;
  const a = t.byteLength, l = r.maxRecords ?? tu;
  let u = 0;
  for (; c + 6 <= a && u < l; ) {
    const f = t.getUint32(c, !0) * 2, g = t.getUint16(c + 4, !0);
    if (f < 6 || c + f > a || g === Og)
      break;
    u++, fb(i, g, c, f), c += f;
  }
  Pt(i.rCtx);
  let h = i.rCtx.clipSaveDepth + i.rCtx.stateStack.length;
  for (; h-- > 0; )
    e.restore();
  u >= l && console.warn(`[emf-converter] WMF record limit reached (${l}). Output may be incomplete.`);
}
var er = 3;
async function I0(t, e, n) {
  if (X(`replayMetafile: input buffer ${t.byteLength} bytes`), t.byteLength >= 16) {
    const c = new Uint8Array(t, 0, 16);
    X(
      `replayMetafile: first 16 bytes: [${Array.from(c).map((a) => a.toString(16).padStart(2, "0")).join(" ")}]`
    );
  }
  const s = e ?? {}, o = s.dpiScale ?? In;
  let r = new DataView(t), i = null;
  try {
    i = Zr(r);
  } catch (c) {
    H("replayMetafile: parseEmfHeader threw during detection:", c instanceof Error ? c.message : c);
  }
  if (!i)
    try {
      const c = aa(r), a = c ? a6(r, c.headerSize) : null;
      if (a) {
        const l = new DataView(a);
        i = Zr(l), i && (X("replayMetafile: WMF carries an embedded EMF; playing the EMF"), r = l);
      }
    } catch (c) {
      H("replayMetafile: embedded-EMF probe threw:", c instanceof Error ? c.message : c);
    }
  if (i)
    try {
      const c = await Oh(r), a = await Ch(r), l = Oy(i);
      if (!l)
        return X("replayMetafile: getRenderableEmfBounds returned null"), null;
      const u = n(
        l.right - l.left,
        l.bottom - l.top
      );
      if (!u)
        return X("replayMetafile: surface creation failed"), null;
      u.ctx.save();
      const h = mi(
        r,
        u.ctx,
        l,
        u.width,
        u.height,
        o,
        {
          maxRecords: s.maxRecords,
          maxRecordsEmfPlus: s.maxRecords,
          fontFamilyMap: s.fontFamilyMap,
          textureCache: c,
          imageCache: a,
          gdiAntialias: s.gdiAntialias,
          fonts: Al(s)
        }
      );
      return u.ctx.restore(), X(`replayMetafile: EMF replay done, ${h.length} deferred images`), { surface: u, deferredImages: h };
    } catch (c) {
      return H("replayMetafile: EMF EXCEPTION:", c instanceof Error ? c.message : c), console.warn("[emf-converter] EMF conversion failed:", c instanceof Error ? c.message : c), null;
    }
  try {
    const c = aa(r);
    if (!c)
      return X("replayMetafile: parseWmfHeader returned null"), null;
    if (c.boundsRight - c.boundsLeft <= 0 || c.boundsBottom - c.boundsTop <= 0)
      return X("replayMetafile: invalid WMF dimensions"), null;
    const a = p0(r, c), l = n(a.width, a.height);
    return l ? (l.ctx.save(), gb(r, l.ctx, c, l.width, l.height, {
      maxRecords: s.maxRecords,
      fontFamilyMap: s.fontFamilyMap,
      gdiAntialias: s.gdiAntialias,
      fonts: Al(s)
    }), l.ctx.restore(), { surface: l, deferredImages: [] }) : null;
  } catch (c) {
    return H("replayMetafile: WMF EXCEPTION:", c instanceof Error ? c.message : c), console.warn("[emf-converter] WMF conversion failed:", c instanceof Error ? c.message : c), null;
  }
}
function Al(t) {
  if (!t.fonts || t.fonts.length === 0)
    return;
  const e = Xy.for(t.fonts, t.fontSmoothing ?? "cleartype");
  return e.size > 0 ? e : void 0;
}
function P0(t) {
  const e = new ArrayBuffer(t.byteLength);
  return new Uint8Array(e).set(new Uint8Array(t)), e;
}
function pb(t, e, n) {
  const s = t.canvas, o = s == null ? void 0 : s.width, r = s == null ? void 0 : s.height;
  if (typeof o != "number" || typeof r != "number")
    return !1;
  const { width: i, height: c } = e, a = W(i, c);
  if (!a)
    return !1;
  St(a.ctx, e.drawable, 0, 0, i, c);
  const l = V(a.ctx, 0, 0, i, c), u = Xo(l.data, i, c, n, { w: o, h: r });
  if (!u)
    return !1;
  const h = W(u.w, u.h);
  return h ? (Q(h.ctx, K(u.rgba, u.w, u.h), 0, 0), t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.imageSmoothingEnabled = !1, St(t, h.canvas, u.x, u.y, u.w, u.h), t.restore(), !0) : !1;
}
async function db(t, e, n) {
  var o;
  X(`processDeferredImages: ${e.length} deferred images (recursionDepth=${n})`);
  let s = !0;
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    try {
      const c = P0(i.imageData);
      t.setTransform(...i.transform);
      let a = c, l;
      if (i.isMetafile) {
        if (n >= er) {
          H(`  Deferred image [${r}]: skipping embedded metafile, recursion depth ${n}`);
          continue;
        }
        const h = await S0(c, void 0, n + 1);
        if (!h) {
          H(`  Deferred image [${r}]: metafile conversion returned null`), s = !1;
          continue;
        }
        const f = atob(h.split(",")[1]);
        l = ((o = h.match(/data:([^;]+)/)) == null ? void 0 : o[1]) ?? "image/png", a = new ArrayBuffer(f.length);
        const g = new Uint8Array(a);
        for (let p = 0; p < f.length; p++)
          g[p] = f.charCodeAt(p);
      }
      const u = await Lo(a, l);
      u ? (i.resample && pb(t, u, i.resample) || St(t, u.drawable, i.dx, i.dy, i.dw, i.dh), u.close()) : (H(`  Deferred image [${r}]: no image decoder available`), s = !1);
    } catch (c) {
      s = !1;
      const a = c instanceof Error ? c.message : String(c);
      console.warn(
        "[emf-converter] Deferred image draw failed:",
        a,
        `(isMetafile=${i.isMetafile}, dataLen=${i.imageData.byteLength})`
      );
    }
  }
  return t.setTransform(1, 0, 0, 1, 0, 0), s;
}
async function S0(t, e, n = 0) {
  if (await Hu(), n > er)
    return null;
  const s = { ...e, gdiAntialias: (e == null ? void 0 : e.gdiAntialias) ?? !1 };
  let o = null;
  const r = await I0(t, s, (i, c) => {
    const a = _i(
      i,
      c,
      s.maxWidth,
      s.maxHeight,
      s.dpiScale ?? In,
      s.maxCanvasDimension
    );
    return a ? (o = a.canvas, { ctx: a.ctx, width: a.canvas.width, height: a.canvas.height }) : null;
  });
  if (!r || !o)
    return null;
  try {
    const i = await db(r.surface.ctx, r.deferredImages, n), c = o instanceof ce ? o : null;
    if (c && (c.textDraws > 0 || !i))
      return H(
        `convertMetafileToDataUrl: no canvas backend and the drawing ${c.textDraws > 0 ? `contains text (${c.textDraws} runs)` : "contains an image only a canvas can decode"}; install @napi-rs/canvas for PNG output, or use SVG output`
      ), null;
    const a = await oy(o);
    return a || H("convertMetafileToDataUrl: exportCanvasToPngDataUrl returned null"), a;
  } catch (i) {
    return H("convertMetafileToDataUrl: EXCEPTION:", i instanceof Error ? i.message : i), console.warn("[emf-converter] Conversion failed:", i instanceof Error ? i.message : i), null;
  }
}
var yb = 0;
async function mb(t) {
  const e = await Wu(new Uint8Array(t));
  if (e || Di())
    return e;
  const n = await Lo(t);
  if (!n)
    return null;
  try {
    const s = W(n.width, n.height);
    return s ? (St(s.ctx, n.drawable, 0, 0, n.width, n.height), { data: V(s.ctx, 0, 0, n.width, n.height).data, width: n.width, height: n.height }) : null;
  } finally {
    n.close();
  }
}
async function Mb(t, e, n) {
  const s = await mb(t);
  return s ? Xo(s.data, s.width, s.height, e, { w: n.width, h: n.height }) : null;
}
async function bb(t, e, n, s) {
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    try {
      const i = P0(r.imageData);
      let c = null;
      if (r.isMetafile) {
        if (s >= er) {
          H(`  Deferred image [${o}]: skipping embedded metafile, recursion depth ${s}`);
          continue;
        }
        const u = await Mc(
          i,
          { ...n, includeSize: !0, idPrefix: void 0 },
          s + 1
        );
        u && (c = { kind: "url", url: zu(u) });
      } else {
        const u = new Uint8Array(i), h = nh(u);
        if (h)
          c = { kind: "encoded", bytes: u, mime: h };
        else if (c = oh(i), !c) {
          const f = await Lo(i);
          if (f) {
            const g = _i(f.width, f.height, void 0, void 0, 1);
            g && (St(g.ctx, f.drawable, 0, 0, f.width, f.height), c = {
              kind: "rgba",
              data: g.ctx.getImageData(0, 0, f.width, f.height).data,
              width: f.width,
              height: f.height
            }), f.close();
          }
        }
      }
      if (!c) {
        H(`  Deferred image [${o}]: unsupported image data for SVG output`);
        continue;
      }
      const a = r.svgSlot ?? t.reserveSlot();
      if (r.resample && n.imageResampling === "exact" && !r.isMetafile) {
        const u = await Mb(i, r.resample, t.canvas);
        if (u) {
          t.fillSlot(a, { kind: "rgba", data: u.rgba, width: u.w, height: u.h }, [1, 0, 0, 1, 0, 0], u.x, u.y, u.w, u.h);
          continue;
        }
        H(`  Deferred image [${o}]: exact resampling unavailable (image not decodable here); renderer scaling used`);
      }
      const l = r.resample ? sh(c) : null;
      if (r.resample && l) {
        const u = r.resample;
        t.fillSlotCropped(a, c, u.toDevice, l, u.srcX, u.srcY, u.srcW, u.srcH);
      } else
        t.fillSlot(a, c, r.transform, r.dx, r.dy, r.dw, r.dh);
    } catch (i) {
      H(`  Deferred image [${o}]: SVG embed failed: ${i instanceof Error ? i.message : i}`);
    }
  }
}
async function Mc(t, e, n = 0) {
  const s = await wb(t, e, n);
  return s ? s.toTree({ includeSize: e == null ? void 0 : e.includeSize }) : null;
}
async function wb(t, e, n = 0) {
  if (await Hu(), n > er)
    return null;
  const s = e ?? {}, o = s.dpiScale ?? In, r = s.idPrefix ?? `emf${++yb}-`;
  let i = null;
  const c = await I0(t, s, (l, u) => {
    var g;
    const h = Gu(l, u, s.maxWidth, s.maxHeight, o, s.maxCanvasDimension), f = s.exactRasterOps === !1 ? null : ((g = _i(l, u, s.maxWidth, s.maxHeight, o, s.maxCanvasDimension)) == null ? void 0 : g.ctx) ?? null;
    return i = new Wi(h.w, h.h, { shadow: f, idPrefix: r, imageResampling: s.imageResampling }), { ctx: i, width: h.w, height: h.h };
  });
  if (!c || !i)
    return null;
  const a = i;
  return await bb(a, c.deferredImages, s, n), a;
}
async function R0(t, e) {
  const n = await Mc(t, e);
  return n ? Fi(n) : null;
}
async function xb(t, e) {
  const n = await R0(t, e);
  return n ? Yu(n) : null;
}
var Eb = /\.(ttf|ttc|fon|fnt)$/i;
async function vb(t = {}) {
  if (typeof process > "u" || !(dn != null && dn.node))
    return [];
  let e, n, s;
  try {
    e = await Promise.resolve().then(() => so), n = await Promise.resolve().then(() => so), s = await Promise.resolve().then(() => so);
  } catch {
    return [];
  }
  const o = t.dirs ?? Tb(n, s), r = t.maxDepth ?? 4, i = [], c = /* @__PURE__ */ new Set(), a = async (u, h) => {
    let f;
    try {
      f = await e.readdir(u, { withFileTypes: !0 });
    } catch {
      return;
    }
    for (const g of f) {
      const p = n.join(u, g.name);
      if (g.isDirectory())
        h < r && await a(p, h + 1);
      else if (Eb.test(g.name)) {
        const d = p.toLowerCase();
        !c.has(d) && (!t.filter || t.filter(p, g.name.toLowerCase())) && (c.add(d), i.push(p));
      }
    }
  };
  for (const u of o)
    await a(u, 0);
  const l = [];
  for (const u of i)
    try {
      l.push(new Uint8Array(await e.readFile(u)));
    } catch {
    }
  return l;
}
function Tb(t, e) {
  const n = e.homedir();
  return ["/usr/share/fonts", "/usr/local/share/fonts", t.join(n, ".fonts"), t.join(n, ".local", "share", "fonts")];
}
const gw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DEFAULT_DPI_SCALE: In,
  convertMetafileToDataUrl: S0,
  convertMetafileToSvg: R0,
  convertMetafileToSvgDataUrl: xb,
  convertMetafileToSvgTree: Mc,
  loadSystemFonts: vb,
  svgTreeToDataUrl: zu,
  svgTreeToJsx: Qd,
  svgTreeToReact: Jd,
  svgTreeToString: Fi
}, Symbol.toStringTag, { value: "Module" }));
function Ib(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Pb(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function s() {
      return this instanceof s ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(s) {
    var o = Object.getOwnPropertyDescriptor(t, s);
    Object.defineProperty(n, s, o.get ? o : {
      enumerable: !0,
      get: function() {
        return t[s];
      }
    });
  }), n;
}
const Sb = {}, so = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sb
}, Symbol.toStringTag, { value: "Module" })), ae = /* @__PURE__ */ Pb(so);
function Rb(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var J = { exports: {} }, ls = {};
const { readFileSync: pw } = ae;
let C = null;
const ps = [];
function Ab() {
  if (ls.NAPI_RS_NATIVE_LIBRARY_PATH)
    try {
      return Rb(ls.NAPI_RS_NATIVE_LIBRARY_PATH);
    } catch (t) {
      ps.push(t);
    }
  else
    ps.push(new Error(`Unsupported OS: browser, architecture: ${process.arch}`));
}
C = Ab();
if (!C || ls.NAPI_RS_FORCE_WASI) {
  let t = null, e = null;
  try {
    t = require("./skia.wasi.cjs"), C = t;
  } catch (n) {
    ls.NAPI_RS_FORCE_WASI && (e = n);
  }
  if (!C)
    try {
      t = require("@napi-rs/canvas-wasm32-wasi"), C = t;
    } catch (n) {
      ls.NAPI_RS_FORCE_WASI && (e.cause = n, ps.push(n));
    }
}
if (!C)
  throw ps.length > 0 ? new Error(
    "Cannot find native binding. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try `npm i` again after removing both package-lock.json and node_modules directory.",
    {
      cause: ps.reduce((t, e) => (e.cause = t, e))
    }
  ) : new Error("Failed to load native binding");
J.exports = C;
J.exports.GlobalFonts = C.GlobalFonts;
J.exports.CanvasElement = C.CanvasElement;
J.exports.CanvasGradient = C.CanvasGradient;
J.exports.CanvasPattern = C.CanvasPattern;
J.exports.CanvasRenderingContext2D = C.CanvasRenderingContext2D;
J.exports.FontKey = C.FontKey;
J.exports.Image = C.Image;
J.exports.ImageData = C.ImageData;
J.exports.Path = C.Path;
J.exports.PdfDocument = C.PdfDocument;
J.exports.SVGCanvas = C.SVGCanvas;
J.exports.ChromaSubsampling = C.ChromaSubsampling;
J.exports.clearAllCache = C.clearAllCache;
J.exports.convertSVGTextToPath = C.convertSVGTextToPath;
J.exports.FillType = C.FillType;
J.exports.PathOp = C.PathOp;
J.exports.StrokeCap = C.StrokeCap;
J.exports.StrokeJoin = C.StrokeJoin;
J.exports.SvgExportFlag = C.SvgExportFlag;
J.exports.GifEncoder = C.GifEncoder;
J.exports.GifDisposal = C.GifDisposal;
var A0 = J.exports;
const { inspect: Nr } = ae;
let U0 = class oo {
  constructor(e = 0, n = 0, s = 0, o = 1) {
    this.x = e, this.y = n, this.z = s, this.w = o;
  }
  static fromPoint(e) {
    return new oo(
      e.x,
      e.y,
      e.z !== void 0 ? e.z : 0,
      e.w !== void 0 ? e.w : 1
    );
  }
  matrixTransform(e) {
    return (e.is2D || e instanceof SVGMatrix) && this.z === 0 && this.w === 1 ? new oo(
      this.x * e.a + this.y * e.c + e.e,
      this.x * e.b + this.y * e.d + e.f,
      0,
      1
    ) : new oo(
      this.x * e.m11 + this.y * e.m21 + this.z * e.m31 + this.w * e.m41,
      this.x * e.m12 + this.y * e.m22 + this.z * e.m32 + this.w * e.m42,
      this.x * e.m13 + this.y * e.m23 + this.z * e.m33 + this.w * e.m43,
      this.x * e.m14 + this.y * e.m24 + this.z * e.m34 + this.w * e.m44
    );
  }
  toJSON() {
    return {
      x: this.x,
      y: this.y,
      z: this.z,
      w: this.w
    };
  }
}, bi = class k0 {
  constructor(e = 0, n = 0, s = 0, o = 0) {
    this.x = e, this.y = n, this.width = s, this.height = o;
  }
  static fromRect(e) {
    return new k0(e.x, e.y, e.width, e.height);
  }
  get top() {
    return this.y;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
  get bottom() {
    return this.y + this.height;
  }
  toJSON() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      top: this.top,
      left: this.left,
      right: this.right,
      bottom: this.bottom
    };
  }
};
for (const t of ["top", "right", "bottom", "left"]) {
  const e = Object.getOwnPropertyDescriptor(bi.prototype, t);
  e.enumerable = !0, Object.defineProperty(bi.prototype, t, e);
}
const nn = 0, sn = 1, Hn = 2, Gn = 3, on = 4, rn = 5, jn = 6, Wn = 7, Vn = 8, qn = 9, cn = 10, Jn = 11, an = 12, ln = 13, Kn = 14, un = 15, Ve = nn, qe = sn, Je = on, Ke = rn, Zn = an, Qn = ln, Ub = 180 / Math.PI, Ze = Math.PI / 180, F = Symbol("values"), yt = Symbol("is2D");
function kb(t) {
  let e = t.replace(/matrix\(/, "").split(/,/, 7);
  if (e.length !== 6)
    throw new Error(`Failed to parse ${t}`);
  return e = e.map(parseFloat), [e[0], e[1], 0, 0, e[2], e[3], 0, 0, 0, 0, 1, 0, e[4], e[5], 0, 1];
}
function Lb(t) {
  const e = t.replace(/matrix3d\(/, "").split(/,/, 17);
  if (e.length !== 16)
    throw new Error(`Failed to parse ${t}`);
  return e.map(parseFloat);
}
function Fb(t) {
  const e = t.split(/\(/, 1)[0];
  if (e === "matrix")
    return kb(t);
  if (e === "matrix3d")
    return Lb(t);
  throw new Error(`${e} parsing not implemented`);
}
const j = (t, e, n) => {
  if (typeof n != "number")
    throw new TypeError("Expected number");
  t[F][e] = n;
}, tt = (t, e, n) => {
  if (typeof n != "number")
    throw new TypeError("Expected number");
  e === cn || e === un ? n !== 1 && (t[yt] = !1) : n !== 0 && (t[yt] = !1), t[F][e] = n;
}, Ut = (t) => {
  const e = Object.create(ds.prototype);
  return e.constructor = ds, e[yt] = !0, e[F] = t, e;
}, vt = (t, e) => {
  const n = new Float64Array(16);
  for (let s = 0; s < 4; s++)
    for (let o = 0; o < 4; o++) {
      let r = 0;
      for (let i = 0; i < 4; i++)
        r += t[s * 4 + i] * e[i * 4 + o];
      n[s * 4 + o] = r;
    }
  return n;
};
let ds = class Fe {
  get m11() {
    return this[F][nn];
  }
  set m11(e) {
    j(this, nn, e);
  }
  get m12() {
    return this[F][sn];
  }
  set m12(e) {
    j(this, sn, e);
  }
  get m13() {
    return this[F][Hn];
  }
  set m13(e) {
    tt(this, Hn, e);
  }
  get m14() {
    return this[F][Gn];
  }
  set m14(e) {
    tt(this, Gn, e);
  }
  get m21() {
    return this[F][on];
  }
  set m21(e) {
    j(this, on, e);
  }
  get m22() {
    return this[F][rn];
  }
  set m22(e) {
    j(this, rn, e);
  }
  get m23() {
    return this[F][jn];
  }
  set m23(e) {
    tt(this, jn, e);
  }
  get m24() {
    return this[F][Wn];
  }
  set m24(e) {
    tt(this, Wn, e);
  }
  get m31() {
    return this[F][Vn];
  }
  set m31(e) {
    tt(this, Vn, e);
  }
  get m32() {
    return this[F][qn];
  }
  set m32(e) {
    tt(this, qn, e);
  }
  get m33() {
    return this[F][cn];
  }
  set m33(e) {
    tt(this, cn, e);
  }
  get m34() {
    return this[F][Jn];
  }
  set m34(e) {
    tt(this, Jn, e);
  }
  get m41() {
    return this[F][an];
  }
  set m41(e) {
    j(this, an, e);
  }
  get m42() {
    return this[F][ln];
  }
  set m42(e) {
    j(this, ln, e);
  }
  get m43() {
    return this[F][Kn];
  }
  set m43(e) {
    tt(this, Kn, e);
  }
  get m44() {
    return this[F][un];
  }
  set m44(e) {
    tt(this, un, e);
  }
  get a() {
    return this[F][Ve];
  }
  set a(e) {
    j(this, Ve, e);
  }
  get b() {
    return this[F][qe];
  }
  set b(e) {
    j(this, qe, e);
  }
  get c() {
    return this[F][Je];
  }
  set c(e) {
    j(this, Je, e);
  }
  get d() {
    return this[F][Ke];
  }
  set d(e) {
    j(this, Ke, e);
  }
  get e() {
    return this[F][Zn];
  }
  set e(e) {
    j(this, Zn, e);
  }
  get f() {
    return this[F][Qn];
  }
  set f(e) {
    j(this, Qn, e);
  }
  get is2D() {
    return this[yt];
  }
  get isIdentity() {
    const e = this[F];
    return e[nn] === 1 && e[sn] === 0 && e[Hn] === 0 && e[Gn] === 0 && e[on] === 0 && e[rn] === 1 && e[jn] === 0 && e[Wn] === 0 && e[Vn] === 0 && e[qn] === 0 && e[cn] === 1 && e[Jn] === 0 && e[an] === 0 && e[ln] === 0 && e[Kn] === 0 && e[un] === 1;
  }
  static fromMatrix(e) {
    if (e instanceof Fe)
      return new Fe(e[F]);
    if (e instanceof SVGMatrix)
      return new Fe([e.a, e.b, e.c, e.d, e.e, e.f]);
    throw new TypeError("Expected DOMMatrix");
  }
  static fromFloat32Array(e) {
    if (!(e instanceof Float32Array)) throw new TypeError("Expected Float32Array");
    return new Fe(e);
  }
  static fromFloat64Array(e) {
    if (!(e instanceof Float64Array)) throw new TypeError("Expected Float64Array");
    return new Fe(e);
  }
  // @type
  // (Float64Array) => void
  constructor(e) {
    if (this[yt] = !0, this[F] = new Float64Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), typeof e == "string") {
      if (e === "")
        return;
      {
        const s = e.split(/\)\s+/, 20).map(Fb);
        if (s.length === 0)
          return;
        e = s[0];
        for (let o = 1; o < s.length; o++)
          e = vt(s[o], e);
      }
    }
    let n = 0;
    if (e && e.length === 6)
      j(this, Ve, e[n++]), j(this, qe, e[n++]), j(this, Je, e[n++]), j(this, Ke, e[n++]), j(this, Zn, e[n++]), j(this, Qn, e[n++]);
    else if (e && e.length === 16)
      j(this, nn, e[n++]), j(this, sn, e[n++]), tt(this, Hn, e[n++]), tt(this, Gn, e[n++]), j(this, on, e[n++]), j(this, rn, e[n++]), tt(this, jn, e[n++]), tt(this, Wn, e[n++]), tt(this, Vn, e[n++]), tt(this, qn, e[n++]), tt(this, cn, e[n++]), tt(this, Jn, e[n++]), j(this, an, e[n++]), j(this, ln, e[n++]), tt(this, Kn, e[n++]), tt(this, un, e[n]);
    else if (e !== void 0)
      throw new TypeError("Expected string or array.");
  }
  dump() {
    const e = this[F];
    console.info([e.slice(0, 4), e.slice(4, 8), e.slice(8, 12), e.slice(12, 16)]);
  }
  [Nr.custom](e) {
    if (e < 0) return "[DOMMatrix]";
    const { a: n, b: s, c: o, d: r, e: i, f: c, is2D: a, isIdentity: l } = this;
    if (this.is2D)
      return `DOMMatrix ${Nr({ a: n, b: s, c: o, d: r, e: i, f: c, is2D: a, isIdentity: l }, { colors: !0 })}`;
    {
      const { m11: u, m12: h, m13: f, m14: g, m21: p, m22: d, m23: y, m24: m, m31: M, m32: b, m33: w, m34: x, m41: E, m42: T, m43: v, m44: I, is2D: P, isIdentity: S } = this;
      return `DOMMatrix ${Nr(
        {
          a: n,
          b: s,
          c: o,
          d: r,
          e: i,
          f: c,
          m11: u,
          m12: h,
          m13: f,
          m14: g,
          m21: p,
          m22: d,
          m23: y,
          m24: m,
          m31: M,
          m32: b,
          m33: w,
          m34: x,
          m41: E,
          m42: T,
          m43: v,
          m44: I,
          is2D: P,
          isIdentity: S
        },
        { colors: !0 }
      )}`;
    }
  }
  multiply(e) {
    return Ut(this[F]).multiplySelf(e);
  }
  multiplySelf(e) {
    return this[F] = vt(e[F], this[F]), e.is2D || (this[yt] = !1), this;
  }
  preMultiplySelf(e) {
    return this[F] = vt(this[F], e[F]), e.is2D || (this[yt] = !1), this;
  }
  translate(e, n, s) {
    return Ut(this[F]).translateSelf(e, n, s);
  }
  translateSelf(e = 0, n = 0, s = 0) {
    return this[F] = vt([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, n, s, 1], this[F]), s !== 0 && (this[yt] = !1), this;
  }
  scale(e, n, s, o, r, i) {
    return Ut(this[F]).scaleSelf(e, n, s, o, r, i);
  }
  scale3d(e, n, s, o) {
    return Ut(this[F]).scale3dSelf(e, n, s, o);
  }
  scale3dSelf(e, n, s, o) {
    return this.scaleSelf(e, e, e, n, s, o);
  }
  scaleSelf(e, n, s, o, r, i) {
    return typeof o != "number" && (o = 0), typeof r != "number" && (r = 0), typeof i != "number" && (i = 0), this.translateSelf(o, r, i), typeof e != "number" && (e = 1), typeof n != "number" && (n = e), typeof s != "number" && (s = 1), this[F] = vt([e, 0, 0, 0, 0, n, 0, 0, 0, 0, s, 0, 0, 0, 0, 1], this[F]), this.translateSelf(-o, -r, -i), (s !== 1 || i !== 0) && (this[yt] = !1), this;
  }
  rotateFromVector(e, n) {
    return Ut(this[F]).rotateFromVectorSelf(e, n);
  }
  rotateFromVectorSelf(e = 0, n = 0) {
    const s = e === 0 && n === 0 ? 0 : Math.atan2(n, e) * Ub;
    return this.rotateSelf(s);
  }
  rotate(e, n, s) {
    return Ut(this[F]).rotateSelf(e, n, s);
  }
  rotateSelf(e, n, s) {
    n === void 0 && s === void 0 && (s = e, e = n = 0), typeof n != "number" && (n = 0), typeof s != "number" && (s = 0), (e !== 0 || n !== 0) && (this[yt] = !1), e *= Ze, n *= Ze, s *= Ze;
    let o = Math.cos(s), r = Math.sin(s);
    return this[F] = vt([o, r, 0, 0, -r, o, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], this[F]), o = Math.cos(n), r = Math.sin(n), this[F] = vt([o, 0, -r, 0, 0, 1, 0, 0, r, 0, o, 0, 0, 0, 0, 1], this[F]), o = Math.cos(e), r = Math.sin(e), this[F] = vt([1, 0, 0, 0, 0, o, r, 0, 0, -r, o, 0, 0, 0, 0, 1], this[F]), this;
  }
  rotateAxisAngle(e, n, s, o) {
    return Ut(this[F]).rotateAxisAngleSelf(e, n, s, o);
  }
  rotateAxisAngleSelf(e = 0, n = 0, s = 0, o = 0) {
    const r = Math.sqrt(e * e + n * n + s * s);
    if (r === 0)
      return this;
    r !== 1 && (e /= r, n /= r, s /= r), o *= Ze;
    const i = Math.cos(o), c = Math.sin(o), a = 1 - i, l = a * e, u = a * n;
    return this[F] = vt(
      [
        l * e + i,
        l * n + c * s,
        l * s - c * n,
        0,
        l * n - c * s,
        u * n + i,
        u * s + c * e,
        0,
        l * s + c * n,
        u * s - c * e,
        a * s * s + i,
        0,
        0,
        0,
        0,
        1
      ],
      this[F]
    ), (e !== 0 || n !== 0) && (this[yt] = !1), this;
  }
  skewX(e) {
    return Ut(this[F]).skewXSelf(e);
  }
  skewXSelf(e) {
    if (typeof e != "number")
      return this;
    const n = Math.tan(e * Ze);
    return this[F] = vt([1, 0, 0, 0, n, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], this[F]), this;
  }
  skewY(e) {
    return Ut(this[F]).skewYSelf(e);
  }
  skewYSelf(e) {
    if (typeof e != "number")
      return this;
    const n = Math.tan(e * Ze);
    return this[F] = vt([1, n, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], this[F]), this;
  }
  flipX() {
    return Ut(vt([-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], this[F]));
  }
  flipY() {
    return Ut(vt([1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], this[F]));
  }
  inverse() {
    return Ut(this[F].slice()).invertSelf();
  }
  invertSelf() {
    if (this[yt]) {
      const e = this[F][Ve] * this[F][Ke] - this[F][qe] * this[F][Je];
      if (e !== 0) {
        const n = this[F][Ke] / e, s = -this[F][qe] / e, o = -this[F][Je] / e, r = this[F][Ve] / e, i = (this[F][Je] * this[F][Qn] - this[F][Ke] * this[F][Zn]) / e, c = (this[F][qe] * this[F][Zn] - this[F][Ve] * this[F][Qn]) / e;
        return this.a = n, this.b = s, this.c = o, this.d = r, this.e = i, this.f = c, this;
      } else
        return this[yt] = !1, this[F] = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN], this;
    } else
      throw new Error("3D matrix inversion is not implemented.");
  }
  setMatrixValue(e) {
    const n = new Fe(e);
    return this[F] = n[F], this[yt] = n[yt], this;
  }
  transformPoint(e) {
    const n = e.x || 0, s = e.y || 0, o = e.z || 0, r = e.w || 1, i = this[F], c = i[nn] * n + i[on] * s + i[Vn] * o + i[an] * r, a = i[sn] * n + i[rn] * s + i[qn] * o + i[ln] * r, l = i[Hn] * n + i[jn] * s + i[cn] * o + i[Kn] * r, u = i[Gn] * n + i[Wn] * s + i[Jn] * o + i[un] * r;
    return new U0(c, a, l, u);
  }
  toFloat32Array() {
    return Float32Array.from(this[F]);
  }
  toFloat64Array() {
    return this[F].slice(0);
  }
  toJSON() {
    return {
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f,
      m11: this.m11,
      m12: this.m12,
      m13: this.m13,
      m14: this.m14,
      m21: this.m21,
      m22: this.m22,
      m23: this.m23,
      m24: this.m24,
      m31: this.m31,
      m32: this.m32,
      m33: this.m33,
      m34: this.m34,
      m41: this.m41,
      m42: this.m42,
      m43: this.m43,
      m44: this.m44,
      is2D: this.is2D,
      isIdentity: this.isIdentity
    };
  }
  toString() {
    return this.is2D ? `matrix(${this.a}, ${this.b}, ${this.c}, ${this.d}, ${this.e}, ${this.f})` : `matrix3d(${this[F].join(", ")})`;
  }
};
for (const t of [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "m11",
  "m12",
  "m13",
  "m14",
  "m21",
  "m22",
  "m23",
  "m24",
  "m31",
  "m32",
  "m33",
  "m34",
  "m41",
  "m42",
  "m43",
  "m44",
  "is2D",
  "isIdentity"
]) {
  const e = Object.getOwnPropertyDescriptor(ds.prototype, t);
  e.enumerable = !0, Object.defineProperty(ds.prototype, t, e);
}
var Db = { DOMPoint: U0, DOMMatrix: ds, DOMRect: bi };
const Ul = ae, { Readable: _b } = ae, { URL: wi } = ae, { Image: L0 } = A0;
let Br, Xr;
const kl = 20, Nb = /* @__PURE__ */ new Set([301, 302]);
var Bb = async function(e, n = {}) {
  if (Buffer.isBuffer(e) || e instanceof Uint8Array) return qt(e, n.alt);
  if (e instanceof _b) return qt(await F0(e), n.alt);
  if (e instanceof ArrayBuffer || e instanceof SharedArrayBuffer)
    return qt(new Uint8Array(e), n.alt);
  if (Xb(e)) return qt(Buffer.from(e), n.alt);
  if (e instanceof L0) return qt(e.src, n.alt);
  if (typeof e == "string" && e.trimStart().startsWith("data:")) {
    const s = e.indexOf(","), o = e.lastIndexOf("base64", s) < 0 ? "utf-8" : "base64", r = Buffer.from(e.slice(s + 1), o);
    if (r.length === 0) throw new Error(`Invalid data URI: empty payload in ${e.slice(0, 64)}`);
    return qt(r, n.alt);
  }
  if (typeof e == "string") {
    if (!e.startsWith("http") && !e.startsWith("https") && await Yb(e))
      return qt(e, n.alt);
    {
      e = new wi(e);
      const s = await new Promise(
        (o, r) => xi(
          e,
          o,
          r,
          typeof n.maxRedirects == "number" && n.maxRedirects >= 0 ? n.maxRedirects : kl,
          n.requestOptions
        )
      );
      return qt(s, n.alt);
    }
  }
  if (e instanceof wi) {
    if (e.protocol === "file:")
      return qt(e.pathname, n.alt);
    {
      const s = await new Promise(
        (o, r) => xi(
          e,
          o,
          r,
          typeof n.maxRedirects == "number" && n.maxRedirects >= 0 ? n.maxRedirects : kl,
          n.requestOptions
        )
      );
      return qt(s, n.alt);
    }
  }
  throw new TypeError("unsupported image source");
};
function xi(t, e, n, s, o) {
  (t.protocol === "https:" ? Xr || (Xr = ae) : Br || (Br = ae)).get(t.toString(), o || {}, (c) => {
    try {
      if (Nb.has(c.statusCode) && typeof c.headers.location == "string" && s > 0)
        return xi(
          new wi(c.headers.location, t.origin),
          e,
          n,
          s - 1,
          o
        );
      if (typeof c.statusCode == "number" && (c.statusCode < 200 || c.statusCode >= 300))
        return n(new Error(`remote source rejected with status code ${c.statusCode}`));
      F0(c).then(e, n);
    } catch (a) {
      n(a);
    }
  }).on("error", n);
}
function F0(t) {
  return new Promise((e, n) => {
    const s = [];
    t.on("data", (o) => s.push(o)), t.on("end", () => e(Buffer.concat(s))), t.on("error", n);
  });
}
async function qt(t, e) {
  if ((Buffer.isBuffer(t) || t instanceof Uint8Array) && t.length === 0)
    throw new Error("loadImage: empty image data");
  const n = new L0();
  return typeof e == "string" && (n.alt = e), new Promise((s, o) => {
    n.onload = () => {
      Promise.resolve().then(() => n.decode()).then(() => s(n), o);
    }, n.onerror = (r) => o(r), n.src = t;
  });
}
function Xb(t) {
  return t && t.type === "Buffer" || Array.isArray(t);
}
async function Yb(t) {
  try {
    return await Ul.promises.access(t, Ul.constants.F_OK), !0;
  } catch {
    return !1;
  }
}
var zb = {};
const { platform: Ob, homedir: $b } = ae, { join: Ws } = ae, {
  clearAllCache: Cb,
  CanvasRenderingContext2D: nr,
  CanvasElement: It,
  SVGCanvas: Mn,
  Path: Hb,
  ImageData: Gb,
  Image: jb,
  FontKey: Wb,
  GlobalFonts: Lt,
  PathOp: Vb,
  FillType: qb,
  StrokeJoin: Jb,
  StrokeCap: Kb,
  convertSVGTextToPath: Zb,
  PdfDocument: Qb,
  GifEncoder: Ei,
  GifDisposal: tw,
  LottieAnimation: ew
} = A0, { DOMPoint: nw, DOMMatrix: vi, DOMRect: sw } = Db, ow = Bb;
Ei && typeof Symbol.dispose < "u" && (Ei.prototype[Symbol.dispose] = function() {
  this.dispose();
});
const rw = {
  ConvertTextToPaths: 1,
  NoPrettyXML: 2,
  RelativePathEncoding: 4
};
"families" in Lt || Object.defineProperty(Lt, "families", {
  get: function() {
    return JSON.parse(Lt.getFamilies().toString());
  }
});
"has" in Lt || Object.defineProperty(Lt, "has", {
  value: function(e) {
    return !!JSON.parse(Lt.getFamilies().toString()).find(({ family: n }) => n === e);
  },
  configurable: !1,
  enumerable: !1,
  writable: !1
});
const iw = It.prototype.toBlob, cw = It.prototype.convertToBlob;
"Blob" in globalThis ? (It.prototype.toBlob = function(e, n, s) {
  iw.call(
    this,
    function(o) {
      const r = new Blob([o.buffer], { type: n });
      e(r);
    },
    n,
    s
  );
}, It.prototype.convertToBlob = function(e) {
  return cw.call(this, e).then((n) => new Blob([n.buffer], { type: (e == null ? void 0 : e.mime) || "image/png" }));
}) : (It.prototype.toBlob = function(e, n, s) {
  e(null);
}, It.prototype.convertToBlob = function(e) {
  return Promise.reject(new Error("Blob is not supported in this environment"));
});
const aw = nr.prototype.getTransform;
nr.prototype.getTransform = function() {
  const e = aw.apply(this, arguments);
  if (e instanceof vi)
    return e;
  const { a: n, b: s, c: o, d: r, e: i, f: c } = e;
  return new vi([n, s, o, r, i, c]);
};
const lw = nr.prototype.drawImage;
nr.prototype.drawImage = function(e, ...n) {
  return e && typeof e == "object" && (e.canvas instanceof It || e.canvas instanceof Mn ? e = e.canvas : e._canvas instanceof It || e._canvas instanceof Mn ? e = e._canvas : typeof e.getContext == "function" && e.width && e.height && !(e instanceof It) && !(e instanceof Mn) && Object.setPrototypeOf(e, It.prototype)), lw.apply(this, [e, ...n]);
};
function D0(t, e, n) {
  return typeof n < "u" ? new Mn(t, e, n) : new It(t, e);
}
class uw {
  constructor(e, n, s) {
    return D0(e, n, s);
  }
  static [Symbol.hasInstance](e) {
    return e instanceof It || e instanceof Mn;
  }
}
if (!zb.DISABLE_SYSTEM_FONTS_LOAD) {
  Lt.loadSystemFonts();
  const t = Ob(), e = $b();
  switch (t) {
    case "win32":
      Lt.loadFontsFromDir(Ws(e, "AppData", "Local", "Microsoft", "Windows", "Fonts"));
      break;
    case "darwin":
      Lt.loadFontsFromDir(Ws(e, "Library", "Fonts"));
      break;
    case "linux":
      Lt.loadFontsFromDir(Ws("usr", "local", "share", "fonts")), Lt.loadFontsFromDir(Ws(e, ".fonts"));
      break;
  }
}
var _0 = {
  clearAllCache: Cb,
  Canvas: uw,
  createCanvas: D0,
  Path2D: Hb,
  ImageData: Gb,
  Image: jb,
  PathOp: Vb,
  FillType: qb,
  StrokeCap: Kb,
  StrokeJoin: Jb,
  SvgExportFlag: rw,
  GlobalFonts: Lt,
  convertSVGTextToPath: Zb,
  DOMPoint: nw,
  DOMMatrix: vi,
  DOMRect: sw,
  loadImage: ow,
  FontKey: Wb,
  // Export these for better webpack compatibility
  CanvasElement: It,
  SVGCanvas: Mn,
  PDFDocument: Qb,
  // GIF encoding
  GifEncoder: Ei,
  GifDisposal: tw,
  // Lottie animation
  LottieAnimation: ew
};
const hw = /* @__PURE__ */ Ib(_0), fw = /* @__PURE__ */ B0({
  __proto__: null,
  default: hw
}, [_0]);
export {
  In as DEFAULT_DPI_SCALE,
  S0 as convertMetafileToDataUrl,
  R0 as convertMetafileToSvg,
  xb as convertMetafileToSvgDataUrl,
  Mc as convertMetafileToSvgTree,
  gw as default,
  vb as loadSystemFonts,
  zu as svgTreeToDataUrl,
  Qd as svgTreeToJsx,
  Jd as svgTreeToReact,
  Fi as svgTreeToString
};

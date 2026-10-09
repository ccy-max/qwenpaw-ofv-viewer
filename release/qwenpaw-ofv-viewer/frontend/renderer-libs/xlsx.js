var qs = {};
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var on = {};
on.version = "1.0.9";
var xr = 1200, ha = 1252, Be, Yl = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], fs = {
  0: 1252,
  /* ANSI */
  1: 65001,
  /* DEFAULT */
  2: 65001,
  /* SYMBOL */
  77: 1e4,
  /* MAC */
  128: 932,
  /* SHIFTJIS */
  129: 949,
  /* HANGUL */
  130: 1361,
  /* JOHAB */
  134: 936,
  /* GB2312 */
  136: 950,
  /* CHINESEBIG5 */
  161: 1253,
  /* GREEK */
  162: 1254,
  /* TURKISH */
  163: 1258,
  /* VIETNAMESE */
  177: 1255,
  /* HEBREW */
  178: 1256,
  /* ARABIC */
  186: 1257,
  /* BALTIC */
  204: 1251,
  /* RUSSIAN */
  222: 874,
  /* THAI */
  238: 1250,
  /* EASTEUROPE */
  255: 1252,
  /* OEM */
  69: 6969
  /* MISC */
}, hi = function(e) {
  Yl.indexOf(e) != -1 && (ha = fs[0] = e);
};
function Zl() {
  hi(1252);
}
var dt = function(e) {
  xr = e, hi(e);
};
function di() {
  dt(1200), Zl();
}
function qn(e) {
  for (var r = [], t = 0, a = e.length; t < a; ++t) r[t] = e.charCodeAt(t);
  return r;
}
function oc(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e.charCodeAt(2 * t) + (e.charCodeAt(2 * t + 1) << 8));
  return r.join("");
}
function Jl(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e[2 * t] + (e[2 * t + 1] << 8));
  return r.join("");
}
function lc(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t) r[t] = String.fromCharCode(e.charCodeAt(2 * t + 1) + (e.charCodeAt(2 * t) << 8));
  return r.join("");
}
var Ca = function(e) {
  var r = e.charCodeAt(0), t = e.charCodeAt(1);
  return r == 255 && t == 254 ? oc(e.slice(2)) : r == 254 && t == 255 ? lc(e.slice(2)) : r == 65279 ? e.slice(1) : e;
}, Ya = function(r) {
  return String.fromCharCode(r);
}, ji = function(r) {
  return String.fromCharCode(r);
};
function uc(e) {
  Be = e, dt = function(r) {
    xr = r, hi(r);
  }, Ca = function(r) {
    return r.charCodeAt(0) === 255 && r.charCodeAt(1) === 254 ? Be.utils.decode(1200, qn(r.slice(2))) : r;
  }, Ya = function(t) {
    return xr === 1200 ? String.fromCharCode(t) : Be.utils.decode(xr, [t & 255, t >> 8])[0];
  }, ji = function(t) {
    return Be.utils.decode(ha, [t])[0];
  }, Wc();
}
var ql = null, Gr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function Qn(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0, o = 0; o < e.length; )
    t = e.charCodeAt(o++), i = t >> 2, a = e.charCodeAt(o++), s = (t & 3) << 4 | a >> 4, n = e.charCodeAt(o++), f = (a & 15) << 2 | n >> 6, c = n & 63, isNaN(a) ? f = c = 64 : isNaN(n) && (c = 64), r += Gr.charAt(i) + Gr.charAt(s) + Gr.charAt(f) + Gr.charAt(c);
  return r;
}
function Ql(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0, o = 0; o < e.length; )
    t = e.charCodeAt(o++), t > 255 && (t = 95), i = t >> 2, a = e.charCodeAt(o++), a > 255 && (a = 95), s = (t & 3) << 4 | a >> 4, n = e.charCodeAt(o++), n > 255 && (n = 95), f = (a & 15) << 2 | n >> 6, c = n & 63, isNaN(a) ? f = c = 64 : isNaN(n) && (c = 64), r += Gr.charAt(i) + Gr.charAt(s) + Gr.charAt(f) + Gr.charAt(c);
  return r;
}
function e1(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0, o = 0; o < e.length; )
    t = e[o++], i = t >> 2, a = e[o++], s = (t & 3) << 4 | a >> 4, n = e[o++], f = (a & 15) << 2 | n >> 6, c = n & 63, isNaN(a) ? f = c = 64 : isNaN(n) && (c = 64), r += Gr.charAt(i) + Gr.charAt(s) + Gr.charAt(f) + Gr.charAt(c);
  return r;
}
function st(e) {
  var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0, c = 0;
  if (e.slice(0, 5) == "data:") {
    var o = e.slice(0, 1024).indexOf(";base64,");
    o > -1 && (e = e.slice(o + 8));
  }
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var o = 0; o < e.length; )
    i = Gr.indexOf(e.charAt(o++)), s = Gr.indexOf(e.charAt(o++)), t = i << 2 | s >> 4, r += String.fromCharCode(t), f = Gr.indexOf(e.charAt(o++)), a = (s & 15) << 4 | f >> 2, f !== 64 && (r += String.fromCharCode(a)), c = Gr.indexOf(e.charAt(o++)), n = (f & 3) << 6 | c, c !== 64 && (r += String.fromCharCode(n));
  return r;
}
var Ue = /* @__PURE__ */ function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof qs < "u" && !!qs.node;
}(), Rt = /* @__PURE__ */ function() {
  if (typeof Buffer < "u") {
    var e = !Buffer.from;
    if (!e) try {
      Buffer.from("foo", "utf8");
    } catch {
      e = !0;
    }
    return e ? function(r, t) {
      return t ? new Buffer(r, t) : new Buffer(r);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
}(), ln = /* @__PURE__ */ function() {
  if (typeof Buffer > "u") return !1;
  var e = Rt([65, 0]);
  if (!e) return !1;
  var r = e.toString("utf16le");
  return r.length == 1;
}();
function Zt(e) {
  return Ue ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function Qs(e) {
  return Ue ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var qr = function(r) {
  return Ue ? Rt(r, "binary") : r.split("").map(function(t) {
    return t.charCodeAt(0) & 255;
  });
};
function Sn(e) {
  if (typeof ArrayBuffer > "u") return qr(e);
  for (var r = new ArrayBuffer(e.length), t = new Uint8Array(r), a = 0; a != e.length; ++a) t[a] = e.charCodeAt(a) & 255;
  return r;
}
function bt(e) {
  if (Array.isArray(e)) return e.map(function(a) {
    return String.fromCharCode(a);
  }).join("");
  for (var r = [], t = 0; t < e.length; ++t) r[t] = String.fromCharCode(e[t]);
  return r.join("");
}
function r1(e) {
  if (typeof Uint8Array > "u") throw new Error("Unsupported");
  return new Uint8Array(e);
}
function cs(e) {
  if (typeof ArrayBuffer > "u") throw new Error("Unsupported");
  if (e instanceof ArrayBuffer) return cs(new Uint8Array(e));
  for (var r = new Array(e.length), t = 0; t < e.length; ++t) r[t] = e[t];
  return r;
}
var mr = Ue ? function(e) {
  return Buffer.concat(e.map(function(r) {
    return Buffer.isBuffer(r) ? r : Rt(r);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var r = 0, t = 0;
    for (r = 0; r < e.length; ++r) t += e[r].length;
    var a = new Uint8Array(t), n = 0;
    for (r = 0, t = 0; r < e.length; t += n, ++r)
      n = e[r].length, e[r] instanceof Uint8Array ? a.set(e[r], t) : typeof e[r] == "string" ? a.set(new Uint8Array(qr(e[r])), t) : a.set(new Uint8Array(e[r]), t);
    return a;
  }
  return [].concat.apply([], e.map(function(i) {
    return Array.isArray(i) ? i : [].slice.call(i);
  }));
};
function t1(e) {
  for (var r = [], t = 0, a = e.length + 250, n = Zt(e.length + 255), i = 0; i < e.length; ++i) {
    var s = e.charCodeAt(i);
    if (s < 128) n[t++] = s;
    else if (s < 2048)
      n[t++] = 192 | s >> 6 & 31, n[t++] = 128 | s & 63;
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var f = e.charCodeAt(++i) & 1023;
      n[t++] = 240 | s >> 8 & 7, n[t++] = 128 | s >> 2 & 63, n[t++] = 128 | f >> 6 & 15 | (s & 3) << 4, n[t++] = 128 | f & 63;
    } else
      n[t++] = 224 | s >> 12 & 15, n[t++] = 128 | s >> 6 & 63, n[t++] = 128 | s & 63;
    t > a && (r.push(n.slice(0, t)), t = 0, n = Zt(65535), a = 65530);
  }
  return r.push(n.slice(0, t)), mr(r);
}
var et = /\u0000/g, Za = /[\u0001-\u0006]/g;
function Oa(e) {
  for (var r = "", t = e.length - 1; t >= 0; ) r += e.charAt(t--);
  return r;
}
function wt(e, r) {
  var t = "" + e;
  return t.length >= r ? t : Ke("0", r - t.length) + t;
}
function os(e, r) {
  var t = "" + e;
  return t.length >= r ? t : Ke(" ", r - t.length) + t;
}
function ei(e, r) {
  var t = "" + e;
  return t.length >= r ? t : t + Ke(" ", r - t.length);
}
function a1(e, r) {
  var t = "" + Math.round(e);
  return t.length >= r ? t : Ke("0", r - t.length) + t;
}
function n1(e, r) {
  var t = "" + e;
  return t.length >= r ? t : Ke("0", r - t.length) + t;
}
var ef = /* @__PURE__ */ Math.pow(2, 32);
function Fa(e, r) {
  if (e > ef || e < -ef) return a1(e, r);
  var t = Math.round(e);
  return n1(t, r);
}
function ri(e, r) {
  return r = r || 0, e.length >= 7 + r && (e.charCodeAt(r) | 32) === 103 && (e.charCodeAt(r + 1) | 32) === 101 && (e.charCodeAt(r + 2) | 32) === 110 && (e.charCodeAt(r + 3) | 32) === 101 && (e.charCodeAt(r + 4) | 32) === 114 && (e.charCodeAt(r + 5) | 32) === 97 && (e.charCodeAt(r + 6) | 32) === 108;
}
var rf = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"]
], Ci = [
  ["J", "Jan", "January"],
  ["F", "Feb", "February"],
  ["M", "Mar", "March"],
  ["A", "Apr", "April"],
  ["M", "May", "May"],
  ["J", "Jun", "June"],
  ["J", "Jul", "July"],
  ["A", "Aug", "August"],
  ["S", "Sep", "September"],
  ["O", "Oct", "October"],
  ["N", "Nov", "November"],
  ["D", "Dec", "December"]
];
function i1(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "', e;
}
var Fe = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: '"上午/下午 "hh"時"mm"分"ss"秒 "'
}, tf = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  //  5 -> 37 ...  8 -> 40
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  // 23 ->  0 ... 26 ->  0
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  // 27 -> 14 ... 31 -> 14
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  // 50 -> 14 ... 58 -> 14
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  // 59 ->  1 ... 62 ->  4
  67: 9,
  68: 10,
  // 67 ->  9 ... 68 -> 10
  69: 12,
  70: 13,
  71: 14,
  // 69 -> 12 ... 71 -> 14
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  // 72 -> 14 ... 75 -> 17
  76: 20,
  77: 21,
  78: 22,
  // 76 -> 20 ... 78 -> 22
  79: 45,
  80: 46,
  81: 47,
  // 79 -> 45 ... 81 -> 47
  82: 0
  // 82 ->  0 ... 65536 -> 0 (omitted)
}, s1 = {
  //  5 -- Currency,   0 decimal, black negative
  5: '"$"#,##0_);\\("$"#,##0\\)',
  63: '"$"#,##0_);\\("$"#,##0\\)',
  //  6 -- Currency,   0 decimal, red   negative
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  //  7 -- Currency,   2 decimal, black negative
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  //  8 -- Currency,   2 decimal, red   negative
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  // 41 -- Accounting, 0 decimal, No Symbol
  41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
  // 42 -- Accounting, 0 decimal, $  Symbol
  42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
  // 43 -- Accounting, 2 decimal, No Symbol
  43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
  // 44 -- Accounting, 2 decimal, $  Symbol
  44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
};
function ti(e, r, t) {
  for (var a = e < 0 ? -1 : 1, n = e * a, i = 0, s = 1, f = 0, c = 1, o = 0, l = 0, d = Math.floor(n); o < r && (d = Math.floor(n), f = d * s + i, l = d * o + c, !(n - d < 5e-8)); )
    n = 1 / (n - d), i = s, s = f, c = o, o = l;
  if (l > r && (o > r ? (l = c, f = i) : (l = o, f = s)), !t) return [0, a * f, l];
  var u = Math.floor(a * f / l);
  return [u, a * f - u * l, l];
}
function f1(e) {
  var r = e.toPrecision(16);
  if (r.indexOf("e") > -1) {
    var t = r.slice(0, r.indexOf("e"));
    return t = t.indexOf(".") > -1 ? t.slice(0, t.slice(0, 2) == "0." ? 17 : 16) : t.slice(0, 15) + Ke("0", t.length - 15), t + r.slice(r.indexOf("e"));
  }
  var a = r.indexOf(".") > -1 ? r.slice(0, r.slice(0, 2) == "0." ? 17 : 16) : r.slice(0, 15) + Ke("0", r.length - 15);
  return Number(a);
}
function At(e, r, t) {
  if (e > 2958465 || e < 0) return null;
  e = f1(e);
  var a = e | 0, n = Math.floor(86400 * (e - a)), i = 0, s = [], f = { D: a, T: n, u: 86400 * (e - a) - n, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(f.u) < 1e-6 && (f.u = 0), r && r.date1904 && (a += 1462), f.u > 0.9999 && (f.u = 0, ++n == 86400 && (f.T = n = 0, ++a, ++f.D)), a === 60)
    s = t ? [1317, 10, 29] : [1900, 2, 29], i = 3;
  else if (a === 0)
    s = t ? [1317, 8, 29] : [1900, 1, 0], i = 6;
  else {
    a > 60 && --a;
    var c = new Date(1900, 0, 1);
    c.setDate(c.getDate() + a - 1), s = [c.getFullYear(), c.getMonth() + 1, c.getDate()], i = c.getDay(), a < 60 && (i = (i + 6) % 7), t && (i = u1(c, s));
  }
  return f.y = s[0], f.m = s[1], f.d = s[2], f.S = n % 60, n = Math.floor(n / 60), f.M = n % 60, n = Math.floor(n / 60), f.H = n, f.q = i, f;
}
function ls(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function c1(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function o1(e) {
  var r = e < 0 ? 12 : 11, t = ls(e.toFixed(12));
  return t.length <= r || (t = e.toPrecision(10), t.length <= r) ? t : e.toExponential(5);
}
function l1(e) {
  var r = ls(e.toFixed(11));
  return r.length > (e < 0 ? 12 : 11) || r === "0" || r === "-0" ? e.toPrecision(6) : r;
}
function un(e) {
  if (!isFinite(e)) return isNaN(e) ? "#NUM!" : "#DIV/0!";
  var r = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), t;
  return r >= -4 && r <= -1 ? t = e.toPrecision(10 + r) : Math.abs(r) <= 9 ? t = o1(e) : r === 10 ? t = e.toFixed(10).substr(0, 12) : t = l1(e), ls(c1(t.toUpperCase()));
}
function da(e, r) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : un(e);
    case "undefined":
      return "";
    case "object":
      if (e == null) return "";
      if (e instanceof Date) return at(14, or(e, r && r.date1904), r);
  }
  throw new Error("unsupported value in General format: " + e);
}
function u1(e, r) {
  r[0] -= 581;
  var t = e.getDay();
  return e < 60 && (t = (t + 6) % 7), t;
}
function h1(e, r, t, a) {
  var n = "", i = 0, s = 0, f = t.y, c, o = 0;
  switch (e) {
    case 98:
      f = t.y + 543;
    case 121:
      switch (r.length) {
        case 1:
        case 2:
          c = f % 100, o = 2;
          break;
        default:
          c = f % 1e4, o = 4;
          break;
      }
      break;
    case 109:
      switch (r.length) {
        case 1:
        case 2:
          c = t.m, o = r.length;
          break;
        case 3:
          return Ci[t.m - 1][1];
        case 5:
          return Ci[t.m - 1][0];
        default:
          return Ci[t.m - 1][2];
      }
      break;
    case 100:
      switch (r.length) {
        case 1:
        case 2:
          c = t.d, o = r.length;
          break;
        case 3:
          return rf[t.q][0];
        default:
          return rf[t.q][1];
      }
      break;
    case 104:
      switch (r.length) {
        case 1:
        case 2:
          c = 1 + (t.H + 11) % 12, o = r.length;
          break;
        default:
          throw "bad hour format: " + r;
      }
      break;
    case 72:
      switch (r.length) {
        case 1:
        case 2:
          c = t.H, o = r.length;
          break;
        default:
          throw "bad hour format: " + r;
      }
      break;
    case 77:
      switch (r.length) {
        case 1:
        case 2:
          c = t.M, o = r.length;
          break;
        default:
          throw "bad minute format: " + r;
      }
      break;
    case 115:
      if (r != "s" && r != "ss" && r != ".0" && r != ".00" && r != ".000") throw "bad second format: " + r;
      return t.u === 0 && (r == "s" || r == "ss") ? wt(t.S, r.length) : (a >= 2 ? s = a === 3 ? 1e3 : 100 : s = a === 1 ? 10 : 1, i = Math.round(s * (t.S + t.u)), i >= 60 * s && (i = 0), r === "s" ? i === 0 ? "0" : "" + i / s : (n = wt(i, 2 + a), r === "ss" ? n.substr(0, 2) : "." + n.substr(2, r.length - 1)));
    case 90:
      switch (r) {
        case "[h]":
        case "[hh]":
          c = t.D * 24 + t.H;
          break;
        case "[m]":
        case "[mm]":
          c = (t.D * 24 + t.H) * 60 + t.M;
          break;
        case "[s]":
        case "[ss]":
          c = ((t.D * 24 + t.H) * 60 + t.M) * 60 + (a == 0 ? Math.round(t.S + t.u) : t.S);
          break;
        default:
          throw "bad abstime format: " + r;
      }
      o = r.length === 3 ? 1 : 2;
      break;
    case 101:
      c = f, o = 1;
      break;
  }
  var l = o > 0 ? wt(c, o) : "";
  return l;
}
function Mt(e) {
  var r = 3;
  if (e.length <= r) return e;
  for (var t = e.length % r, a = e.substr(0, t); t != e.length; t += r) a += (a.length > 0 ? "," : "") + e.substr(t, r);
  return a;
}
var hc = /%/g;
function d1(e, r, t) {
  var a = r.replace(hc, ""), n = r.length - a.length;
  return Wt(e, a, t * Math.pow(10, 2 * n)) + Ke("%", n);
}
function v1(e, r, t) {
  for (var a = r.length - 1; r.charCodeAt(a - 1) === 44; ) --a;
  return Wt(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
}
function dc(e, r) {
  var t, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return "0.0E+0";
    if (r < 0) return "-" + dc(e, -r);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var i = Math.floor(Math.log(r) * Math.LOG10E) % n;
    if (i < 0 && (i += n), t = (r / Math.pow(10, i)).toPrecision(a + 1 + (n + i) % n), t.indexOf("e") === -1) {
      var s = Math.floor(Math.log(r) * Math.LOG10E);
      for (t.indexOf(".") === -1 ? t = t.charAt(0) + "." + t.substr(1) + "E+" + (s - t.length + i) : t += "E+" + (s - i); t.substr(0, 2) === "0."; )
        t = t.charAt(0) + t.substr(2, n) + "." + t.substr(2 + n), t = t.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      t = t.replace(/\+-/, "-");
    }
    t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, c, o, l) {
      return c + o + l.substr(0, (n + i) % n) + "." + l.substr(i) + "E";
    });
  } else t = r.toExponential(a);
  return e.match(/E\+00$/) && t.match(/e[+-]\d$/) && (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)), e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")), t.replace("e", "E");
}
var vc = /# (\?+)( ?)\/( ?)(\d+)/;
function m1(e, r, t) {
  var a = parseInt(e[4], 10), n = Math.round(r * a), i = Math.floor(n / a), s = n - i * a, f = a;
  return t + (i === 0 ? "" : "" + i) + " " + (s === 0 ? Ke(" ", e[1].length + 1 + e[4].length) : os(s, e[1].length) + e[2] + "/" + e[3] + wt(f, e[4].length));
}
function p1(e, r, t) {
  return t + (r === 0 ? "" : "" + r) + Ke(" ", e[1].length + 2 + e[4].length);
}
var mc = /^#*0*\.([0#]+)/, pc = /\)[^)]*[0#]/, gc = /\(###\) ###\\?-####/;
function Jr(e) {
  for (var r = "", t, a = 0; a != e.length; ++a) switch (t = e.charCodeAt(a)) {
    case 35:
      break;
    case 63:
      r += " ";
      break;
    case 48:
      r += "0";
      break;
    default:
      r += String.fromCharCode(t);
  }
  return r;
}
function af(e, r) {
  var t = Math.pow(10, r);
  return "" + Math.round(e * t) / t;
}
function nf(e, r) {
  var t = e - Math.floor(e), a = Math.pow(10, r);
  return r < ("" + Math.round(t * a)).length ? 0 : Math.round(t * a);
}
function g1(e, r) {
  return r < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, r))).length ? 1 : 0;
}
function _1(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function ot(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(pc)) {
    var a = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return t >= 0 ? ot("n", a, t) : "(" + ot("n", a, -t) + ")";
  }
  if (r.charCodeAt(r.length - 1) === 44) return v1(e, r, t);
  if (r.indexOf("%") !== -1) return d1(e, r, t);
  if (r.indexOf("E") !== -1) return dc(r, t);
  if (r.charCodeAt(0) === 36) return "$" + ot(e, r.substr(r.charAt(1) == " " ? 2 : 1), t);
  var n, i, s, f, c = Math.abs(t), o = t < 0 ? "-" : "";
  if (r.match(/^00+$/)) return o + Fa(c, r.length);
  if (r.match(/^[#?]+$/))
    return n = Fa(t, 0), n === "0" && (n = ""), n.length > r.length ? n : Jr(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(vc)) return m1(i, c, o);
  if (r.match(/^#+0+$/)) return o + Fa(c, r.length - r.indexOf("0"));
  if (i = r.match(mc))
    return n = af(t, i[1].length).replace(/^([^\.]+)$/, "$1." + Jr(i[1])).replace(/\.$/, "." + Jr(i[1])).replace(/\.(\d*)$/, function(m, g) {
      return "." + g + Ke("0", Jr(
        /*::(*/
        i[1]
      ).length - g.length);
    }), r.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (r = r.replace(/^#+([0.])/, "$1"), i = r.match(/^(0*)\.(#*)$/))
    return o + af(c, i[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = r.match(/^#{1,3},##0(\.?)$/)) return o + Mt(Fa(c, 0));
  if (i = r.match(/^#,##0\.([#0]*0)$/))
    return t < 0 ? "-" + ot(e, r, -t) : Mt("" + (Math.floor(t) + g1(t, i[1].length))) + "." + wt(nf(t, i[1].length), i[1].length);
  if (i = r.match(/^#,#*,#0/)) return ot(e, r.replace(/^#,#*,/, ""), t);
  if (i = r.match(/^([0#]+)(\\?-([0#]+))+$/))
    return n = Oa(ot(e, r.replace(/[\\-]/g, ""), t)), s = 0, Oa(Oa(r.replace(/\\/g, "")).replace(/[0#]/g, function(m) {
      return s < n.length ? n.charAt(s++) : m === "0" ? "0" : "";
    }));
  if (r.match(gc))
    return n = ot(e, "##########", t), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var l = "";
  if (i = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(
      /*::String(*/
      i[4].length,
      7
    ), f = ti(c, Math.pow(10, s) - 1, !1), n = "" + o, l = Wt(
      "n",
      /*::String(*/
      i[1],
      f[1]
    ), l.charAt(l.length - 1) == " " && (l = l.substr(0, l.length - 1) + "0"), n += l + /*::String(*/
    i[2] + "/" + /*::String(*/
    i[3], l = ei(f[2], s), l.length < i[4].length && (l = Jr(i[4].substr(i[4].length - l.length)) + l), n += l, n;
  if (i = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = ti(c, Math.pow(10, s) - 1, !0), o + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? os(f[1], s) + i[2] + "/" + i[3] + ei(f[2], s) : Ke(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = r.match(/^[#0?]+$/))
    return n = Fa(t, 0), r.length <= n.length ? n : Jr(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(/^([#0?]+)\.([#0]+)$/)) {
    n = "" + t.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
    var d = r.indexOf(".") - s, u = r.length - n.length - d;
    return Jr(r.substr(0, d) + n + r.substr(r.length - u));
  }
  if (i = r.match(/^00,000\.([#0]*0)$/))
    return s = nf(t, i[1].length), t < 0 ? "-" + ot(e, r, -t) : Mt(_1(t)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(m) {
      return "00," + (m.length < 3 ? wt(0, 3 - m.length) : "") + m;
    }) + "." + wt(s, i[1].length);
  switch (r) {
    case "###,##0.00":
      return ot(e, "#,##0.00", t);
    case "###,###":
    case "##,###":
    case "#,###":
      var h = Mt(Fa(c, 0));
      return h !== "0" ? o + h : "";
    case "###,###.00":
      return ot(e, "###,##0.00", t).replace(/^0\./, ".");
    case "#,###.00":
      return ot(e, "#,##0.00", t).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + r + "|");
}
function w1(e, r, t) {
  for (var a = r.length - 1; r.charCodeAt(a - 1) === 44; ) --a;
  return Wt(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
}
function k1(e, r, t) {
  var a = r.replace(hc, ""), n = r.length - a.length;
  return Wt(e, a, t * Math.pow(10, 2 * n)) + Ke("%", n);
}
function _c(e, r) {
  var t, a = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return "0.0E+0";
    if (r < 0) return "-" + _c(e, -r);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var i = Math.floor(Math.log(r) * Math.LOG10E) % n;
    if (i < 0 && (i += n), t = (r / Math.pow(10, i)).toPrecision(a + 1 + (n + i) % n), !t.match(/[Ee]/)) {
      var s = Math.floor(Math.log(r) * Math.LOG10E);
      t.indexOf(".") === -1 ? t = t.charAt(0) + "." + t.substr(1) + "E+" + (s - t.length + i) : t += "E+" + (s - i), t = t.replace(/\+-/, "-");
    }
    t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(f, c, o, l) {
      return c + o + l.substr(0, (n + i) % n) + "." + l.substr(i) + "E";
    });
  } else t = r.toExponential(a);
  return e.match(/E\+00$/) && t.match(/e[+-]\d$/) && (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)), e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")), t.replace("e", "E");
}
function St(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(pc)) {
    var a = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return t >= 0 ? St("n", a, t) : "(" + St("n", a, -t) + ")";
  }
  if (r.charCodeAt(r.length - 1) === 44) return w1(e, r, t);
  if (r.indexOf("%") !== -1) return k1(e, r, t);
  if (r.indexOf("E") !== -1) return _c(r, t);
  if (r.charCodeAt(0) === 36) return "$" + St(e, r.substr(r.charAt(1) == " " ? 2 : 1), t);
  var n, i, s, f, c = Math.abs(t), o = t < 0 ? "-" : "";
  if (r.match(/^00+$/)) return o + wt(c, r.length);
  if (r.match(/^[#?]+$/))
    return n = "" + t, t === 0 && (n = ""), n.length > r.length ? n : Jr(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(vc)) return p1(i, c, o);
  if (r.match(/^#+0+$/)) return o + wt(c, r.length - r.indexOf("0"));
  if (i = r.match(mc))
    return n = ("" + t).replace(/^([^\.]+)$/, "$1." + Jr(i[1])).replace(/\.$/, "." + Jr(i[1])), n = n.replace(/\.(\d*)$/, function(m, g) {
      return "." + g + Ke("0", Jr(i[1]).length - g.length);
    }), r.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".");
  if (r = r.replace(/^#+([0.])/, "$1"), i = r.match(/^(0*)\.(#*)$/))
    return o + ("" + c).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = r.match(/^#{1,3},##0(\.?)$/)) return o + Mt("" + c);
  if (i = r.match(/^#,##0\.([#0]*0)$/))
    return t < 0 ? "-" + St(e, r, -t) : Mt("" + t) + "." + Ke("0", i[1].length);
  if (i = r.match(/^#,#*,#0/)) return St(e, r.replace(/^#,#*,/, ""), t);
  if (i = r.match(/^([0#]+)(\\?-([0#]+))+$/))
    return n = Oa(St(e, r.replace(/[\\-]/g, ""), t)), s = 0, Oa(Oa(r.replace(/\\/g, "")).replace(/[0#]/g, function(m) {
      return s < n.length ? n.charAt(s++) : m === "0" ? "0" : "";
    }));
  if (r.match(gc))
    return n = St(e, "##########", t), "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6);
  var l = "";
  if (i = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(
      /*::String(*/
      i[4].length,
      7
    ), f = ti(c, Math.pow(10, s) - 1, !1), n = "" + o, l = Wt(
      "n",
      /*::String(*/
      i[1],
      f[1]
    ), l.charAt(l.length - 1) == " " && (l = l.substr(0, l.length - 1) + "0"), n += l + /*::String(*/
    i[2] + "/" + /*::String(*/
    i[3], l = ei(f[2], s), l.length < i[4].length && (l = Jr(i[4].substr(i[4].length - l.length)) + l), n += l, n;
  if (i = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(Math.max(i[1].length, i[4].length), 7), f = ti(c, Math.pow(10, s) - 1, !0), o + (f[0] || (f[1] ? "" : "0")) + " " + (f[1] ? os(f[1], s) + i[2] + "/" + i[3] + ei(f[2], s) : Ke(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = r.match(/^[#0?]+$/))
    return n = "" + t, r.length <= n.length ? n : Jr(r.substr(0, r.length - n.length)) + n;
  if (i = r.match(/^([#0]+)\.([#0]+)$/)) {
    n = "" + t.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = n.indexOf(".");
    var d = r.indexOf(".") - s, u = r.length - n.length - d;
    return Jr(r.substr(0, d) + n + r.substr(r.length - u));
  }
  if (i = r.match(/^00,000\.([#0]*0)$/))
    return t < 0 ? "-" + St(e, r, -t) : Mt("" + t).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(m) {
      return "00," + (m.length < 3 ? wt(0, 3 - m.length) : "") + m;
    }) + "." + wt(0, i[1].length);
  switch (r) {
    case "###,###":
    case "##,###":
    case "#,###":
      var h = Mt("" + c);
      return h !== "0" ? o + h : "";
    default:
      if (r.match(/\.[0#?]*$/)) return St(e, r.slice(0, r.lastIndexOf(".")), t) + Jr(r.slice(r.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + r + "|");
}
function Wt(e, r, t) {
  return (t | 0) === t ? St(e, r, t) : ot(e, r, t);
}
function T1(e) {
  for (var r = [], t = !1, a = 0, n = 0; a < e.length; ++a) switch (
    /*cc=*/
    e.charCodeAt(a)
  ) {
    case 34:
      t = !t;
      break;
    case 95:
    case 42:
    case 92:
      ++a;
      break;
    case 59:
      r[r.length] = e.substr(n, a - n), n = a + 1;
  }
  if (r[r.length] = e.substr(n), t === !0) throw new Error("Format |" + e + "| unterminated string ");
  return r;
}
var wc = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function ft(e) {
  for (var r = 0, t = "", a = ""; r < e.length; )
    switch (t = e.charAt(r)) {
      case "G":
        ri(e, r) && (r += 6), r++;
        break;
      case '"':
        for (
          ;
          /*cc=*/
          e.charCodeAt(++r) !== 34 && r < e.length;
        )
          ;
        ++r;
        break;
      case "\\":
        r += 2;
        break;
      case "_":
        r += 2;
        break;
      case "@":
        ++r;
        break;
      case "B":
      case "b":
        if (e.charAt(r + 1) === "1" || e.charAt(r + 1) === "2") return !0;
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "上":
        if (e.substr(r, 3).toUpperCase() === "A/P" || e.substr(r, 5).toUpperCase() === "AM/PM" || e.substr(r, 5).toUpperCase() === "上午/下午") return !0;
        ++r;
        break;
      case "[":
        for (a = t; e.charAt(r++) !== "]" && r < e.length; ) a += e.charAt(r);
        if (a.match(wc)) return !0;
        break;
      case ".":
      case "0":
      case "#":
        for (; r < e.length && ("0#?.,E+-%".indexOf(t = e.charAt(++r)) > -1 || t == "\\" && e.charAt(r + 1) == "-" && "0#".indexOf(e.charAt(r + 2)) > -1); )
          ;
        break;
      case "?":
        for (; e.charAt(++r) === t; )
          ;
        break;
      case "*":
        ++r, (e.charAt(r) == " " || e.charAt(r) == "*") && ++r;
        break;
      case "(":
      case ")":
        ++r;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; r < e.length && "0123456789".indexOf(e.charAt(++r)) > -1; )
          ;
        break;
      case " ":
        ++r;
        break;
      default:
        ++r;
        break;
    }
  return !1;
}
function E1(e, r, t, a) {
  for (var n = [], i = "", s = 0, f = "", c = "t", o, l, d, u = "H"; s < e.length; )
    switch (f = e.charAt(s)) {
      case "G":
        if (!ri(e, s)) throw new Error("unrecognized character " + f + " in " + e);
        n[n.length] = { t: "G", v: "General" }, s += 7;
        break;
      case '"':
        for (i = ""; (d = e.charCodeAt(++s)) !== 34 && s < e.length; ) i += String.fromCharCode(d);
        n[n.length] = { t: "t", v: i }, ++s;
        break;
      case "\\":
        var h = e.charAt(++s), m = h === "(" || h === ")" ? h : "t";
        n[n.length] = { t: m, v: h }, ++s;
        break;
      case "_":
        n[n.length] = { t: "t", v: " " }, s += 2;
        break;
      case "@":
        n[n.length] = { t: "T", v: r }, ++s;
        break;
      case "B":
      case "b":
        if (e.charAt(s + 1) === "1" || e.charAt(s + 1) === "2") {
          if (o == null && (o = At(r, t, e.charAt(s + 1) === "2"), o == null))
            return "";
          n[n.length] = { t: "X", v: e.substr(s, 2) }, c = f, s += 2;
          break;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        f = f.toLowerCase();
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (r < 0 || o == null && (o = At(r, t), o == null))
          return "";
        for (i = f; ++s < e.length && e.charAt(s).toLowerCase() === f; ) i += f;
        f === "m" && c.toLowerCase() === "h" && (f = "M"), f === "h" && (f = u), n[n.length] = { t: f, v: i }, c = f;
        break;
      case "A":
      case "a":
      case "上":
        var g = { t: f, v: f };
        if (o == null && (o = At(r, t)), e.substr(s, 3).toUpperCase() === "A/P" ? (o != null && (g.v = o.H >= 12 ? e.charAt(s + 2) : f), g.t = "T", u = "h", s += 3) : e.substr(s, 5).toUpperCase() === "AM/PM" ? (o != null && (g.v = o.H >= 12 ? "PM" : "AM"), g.t = "T", s += 5, u = "h") : e.substr(s, 5).toUpperCase() === "上午/下午" ? (o != null && (g.v = o.H >= 12 ? "下午" : "上午"), g.t = "T", s += 5, u = "h") : (g.t = "t", ++s), o == null && g.t === "T") return "";
        n[n.length] = g, c = f;
        break;
      case "[":
        for (i = f; e.charAt(s++) !== "]" && s < e.length; ) i += e.charAt(s);
        if (i.slice(-1) !== "]") throw 'unterminated "[" block: |' + i + "|";
        if (i.match(wc)) {
          if (o == null && (o = At(r, t), o == null))
            return "";
          n[n.length] = { t: "Z", v: i.toLowerCase() }, c = i.charAt(1);
        } else i.indexOf("$") > -1 && (i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$", ft(e) || (n[n.length] = { t: "t", v: i }));
        break;
      case ".":
        if (o != null) {
          if (e.charAt(s + 1) !== "0") {
            n[n.length] = { t: "t", v: "." }, ++s;
            break;
          }
          for (i = f; ++s < e.length && (f = e.charAt(s)) === "0"; ) i += f;
          n[n.length] = { t: "s", v: i };
          break;
        }
      case "0":
      case "#":
        for (i = f; ++s < e.length && "0#?.,E+-%".indexOf(f = e.charAt(s)) > -1; ) i += f;
        n[n.length] = { t: "n", v: i };
        break;
      case "?":
        for (i = f; e.charAt(++s) === f; ) i += f;
        n[n.length] = { t: f, v: i }, c = f;
        break;
      case "*":
        ++s, (e.charAt(s) == " " || e.charAt(s) == "*") && ++s;
        break;
      case "(":
      case ")":
        n[n.length] = { t: a === 1 ? "t" : f, v: f }, ++s;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (i = f; s < e.length && "0123456789".indexOf(e.charAt(++s)) > -1; ) i += e.charAt(s);
        n[n.length] = { t: "D", v: i };
        break;
      case " ":
        n[n.length] = { t: f, v: f }, ++s;
        break;
      case "$":
        n[n.length] = { t: "t", v: "$" }, ++s;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(f) === -1) throw new Error("unrecognized character " + f + " in " + e);
        n[n.length] = { t: "t", v: f }, ++s;
        break;
    }
  var p = 0, v = 0, w;
  for (s = n.length - 1, c = "t"; s >= 0; --s)
    switch (n[s].t) {
      case "h":
      case "H":
        n[s].t = u, c = "h", p < 1 && (p = 1);
        break;
      case "s":
        (w = n[s].v.match(/\.0+$/)) && (v = Math.max(v, w[0].length - 1), p = 4), p < 3 && (p = 3);
      case "d":
      case "y":
      case "e":
        c = n[s].t;
        break;
      case "M":
        c = n[s].t, p < 2 && (p = 2);
        break;
      case "m":
        c === "s" && (n[s].t = "M", p < 2 && (p = 2));
        break;
      case "X":
        break;
      case "Z":
        p < 1 && n[s].v.match(/[Hh]/) && (p = 1), p < 2 && n[s].v.match(/[Mm]/) && (p = 2), p < 3 && n[s].v.match(/[Ss]/) && (p = 3);
    }
  var _;
  switch (p) {
    case 0:
      break;
    case 1:
    case 2:
    case 3:
      o.u >= 0.5 && (o.u = 0, ++o.S), o.S >= 60 && (o.S = 0, ++o.M), o.M >= 60 && (o.M = 0, ++o.H), o.H >= 24 && (o.H = 0, ++o.D, _ = At(o.D), _.u = o.u, _.S = o.S, _.M = o.M, _.H = o.H, o = _);
      break;
    case 4:
      switch (v) {
        case 1:
          o.u = Math.round(o.u * 10) / 10;
          break;
        case 2:
          o.u = Math.round(o.u * 100) / 100;
          break;
        case 3:
          o.u = Math.round(o.u * 1e3) / 1e3;
          break;
      }
      o.u >= 1 && (o.u = 0, ++o.S), o.S >= 60 && (o.S = 0, ++o.M), o.M >= 60 && (o.M = 0, ++o.H), o.H >= 24 && (o.H = 0, ++o.D, _ = At(o.D), _.u = o.u, _.S = o.S, _.M = o.M, _.H = o.H, o = _);
      break;
  }
  var T = "", b;
  for (s = 0; s < n.length; ++s)
    switch (n[s].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        n[s].v = "", n[s].t = ";";
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        n[s].v = h1(n[s].t.charCodeAt(0), n[s].v, o, v), n[s].t = "t";
        break;
      case "n":
      case "?":
        for (b = s + 1; n[b] != null && ((f = n[b].t) === "?" || f === "D" || (f === " " || f === "t") && n[b + 1] != null && (n[b + 1].t === "?" || n[b + 1].t === "t" && n[b + 1].v === "/") || n[s].t === "(" && (f === " " || f === "n" || f === ")") || f === "t" && (n[b].v === "/" || n[b].v === " " && n[b + 1] != null && n[b + 1].t == "?")); )
          n[s].v += n[b].v, n[b] = { v: "", t: ";" }, ++b;
        T += n[s].v, s = b - 1;
        break;
      case "G":
        n[s].t = "t", n[s].v = da(r, t);
        break;
    }
  var B = "", y, O;
  if (T.length > 0) {
    T.charCodeAt(0) == 40 ? (y = r < 0 && T.charCodeAt(0) === 45 ? -r : r, O = Wt("n", T, y)) : (y = r < 0 && a > 1 ? -r : r, O = Wt("n", T, y), y < 0 && n[0] && n[0].t == "t" && (O = O.substr(1), n[0].v = "-" + n[0].v)), b = O.length - 1;
    var R = n.length;
    for (s = 0; s < n.length; ++s) if (n[s] != null && n[s].t != "t" && n[s].v.indexOf(".") > -1) {
      R = s;
      break;
    }
    var P = n.length;
    if (R === n.length && O.indexOf("E") === -1) {
      for (s = n.length - 1; s >= 0; --s)
        n[s] == null || "n?".indexOf(n[s].t) === -1 || (b >= n[s].v.length - 1 ? (b -= n[s].v.length, n[s].v = O.substr(b + 1, n[s].v.length)) : b < 0 ? n[s].v = "" : (n[s].v = O.substr(0, b + 1), b = -1), n[s].t = "t", P = s);
      b >= 0 && P < n.length && (n[P].v = O.substr(0, b + 1) + n[P].v);
    } else if (R !== n.length && O.indexOf("E") === -1) {
      for (b = O.indexOf(".") - 1, s = R; s >= 0; --s)
        if (!(n[s] == null || "n?".indexOf(n[s].t) === -1)) {
          for (l = n[s].v.indexOf(".") > -1 && s === R ? n[s].v.indexOf(".") - 1 : n[s].v.length - 1, B = n[s].v.substr(l + 1); l >= 0; --l)
            b >= 0 && (n[s].v.charAt(l) === "0" || n[s].v.charAt(l) === "#") && (B = O.charAt(b--) + B);
          n[s].v = B, n[s].t = "t", P = s;
        }
      for (b >= 0 && P < n.length && (n[P].v = O.substr(0, b + 1) + n[P].v), b = O.indexOf(".") + 1, s = R; s < n.length; ++s)
        if (!(n[s] == null || "n?(".indexOf(n[s].t) === -1 && s !== R)) {
          for (l = n[s].v.indexOf(".") > -1 && s === R ? n[s].v.indexOf(".") + 1 : 0, B = n[s].v.substr(0, l); l < n[s].v.length; ++l)
            b < O.length && (B += O.charAt(b++));
          n[s].v = B, n[s].t = "t", P = s;
        }
    }
  }
  for (s = 0; s < n.length; ++s) n[s] != null && "n?".indexOf(n[s].t) > -1 && (y = a > 1 && r < 0 && s > 0 && n[s - 1].v === "-" ? -r : r, n[s].v = Wt(n[s].t, n[s].v, y), n[s].t = "t");
  var L = "";
  for (s = 0; s !== n.length; ++s) n[s] != null && (L += n[s].v);
  return L;
}
var sf = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function ff(e, r) {
  if (r == null) return !1;
  var t = parseFloat(r[2]);
  switch (r[1]) {
    case "=":
      if (e == t) return !0;
      break;
    case ">":
      if (e > t) return !0;
      break;
    case "<":
      if (e < t) return !0;
      break;
    case "<>":
      if (e != t) return !0;
      break;
    case ">=":
      if (e >= t) return !0;
      break;
    case "<=":
      if (e <= t) return !0;
      break;
  }
  return !1;
}
function y1(e, r) {
  var t = T1(e), a = t.length, n = t[a - 1].indexOf("@");
  if (a < 4 && n > -1 && --a, t.length > 4) throw new Error("cannot find right format for |" + t.join("|") + "|");
  if (typeof r != "number") return [4, t.length === 4 || n > -1 ? t[t.length - 1] : "@"];
  switch (typeof r == "number" && !isFinite(r) && (r = 0), t.length) {
    case 1:
      t = n > -1 ? ["General", "General", "General", t[0]] : [t[0], t[0], t[0], "@"];
      break;
    case 2:
      t = n > -1 ? [t[0], t[0], t[0], t[1]] : [t[0], t[1], t[0], "@"];
      break;
    case 3:
      t = n > -1 ? [t[0], t[1], t[0], t[2]] : [t[0], t[1], t[2], "@"];
      break;
  }
  var i = r > 0 ? t[0] : r < 0 ? t[1] : t[2];
  if (t[0].indexOf("[") === -1 && t[1].indexOf("[") === -1) return [a, i];
  if (t[0].match(/\[[=<>]/) != null || t[1].match(/\[[=<>]/) != null) {
    var s = t[0].match(sf), f = t[1].match(sf);
    return ff(r, s) ? [a, t[0]] : ff(r, f) ? [a, t[1]] : [a, t[s != null && f != null ? 2 : 1]];
  }
  return [a, i];
}
function at(e, r, t) {
  t == null && (t = {});
  var a = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && t.dateNF ? a = t.dateNF : a = e;
      break;
    case "number":
      e == 14 && t.dateNF ? a = t.dateNF : a = (t.table != null ? t.table : Fe)[e], a == null && (a = t.table && t.table[tf[e]] || Fe[tf[e]]), a == null && (a = s1[e] || "General");
      break;
  }
  if (ri(a, 0)) return da(r, t);
  r instanceof Date && (r = or(r, t.date1904));
  var n = y1(a, r);
  if (ri(n[1])) return da(r, t);
  if (r === !0) r = "TRUE";
  else if (r === !1) r = "FALSE";
  else {
    if (r === "" || r == null) return "";
    if (isNaN(r) && n[1].indexOf("0") > -1) return "#NUM!";
    if (!isFinite(r) && n[1].indexOf("0") > -1) return "#DIV/0!";
  }
  return E1(n[1], r, t, n[0]);
}
function us(e, r) {
  if (typeof r != "number") {
    r = +r || -1;
    for (var t = 0; t < 392; ++t) {
      if (Fe[t] == null) {
        r < 0 && (r = t);
        continue;
      }
      if (Fe[t] == e) {
        r = t;
        break;
      }
    }
    r < 0 && (r = 391);
  }
  return Fe[r] = e, r;
}
function Ha(e) {
  for (var r = 0; r != 392; ++r)
    e[r] !== void 0 && us(e[r], r);
}
function ka() {
  Fe = i1();
}
var hs = {
  format: at,
  load: us,
  _table: Fe,
  load_table: Ha,
  parse_date_code: At,
  is_date: ft,
  get_table: function() {
    return hs._table = Fe;
  }
}, S1 = {
  5: '"$"#,##0_);\\("$"#,##0\\)',
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  23: "General",
  24: "General",
  25: "General",
  26: "General",
  27: "m/d/yy",
  28: "m/d/yy",
  29: "m/d/yy",
  30: "m/d/yy",
  31: "m/d/yy",
  32: "h:mm:ss",
  33: "h:mm:ss",
  34: "h:mm:ss",
  35: "h:mm:ss",
  36: "m/d/yy",
  41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
  42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
  43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
  44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
  50: "m/d/yy",
  51: "m/d/yy",
  52: "m/d/yy",
  53: "m/d/yy",
  54: "m/d/yy",
  55: "m/d/yy",
  56: "m/d/yy",
  57: "m/d/yy",
  58: "m/d/yy",
  59: "0",
  60: "0.00",
  61: "#,##0",
  62: "#,##0.00",
  63: '"$"#,##0_);\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  67: "0%",
  68: "0.00%",
  69: "# ?/?",
  70: "# ??/??",
  71: "m/d/yy",
  72: "m/d/yy",
  73: "d-mmm-yy",
  74: "d-mmm",
  75: "mmm-yy",
  76: "h:mm",
  77: "h:mm:ss",
  78: "m/d/yy h:mm",
  79: "mm:ss",
  80: "[h]:mm:ss",
  81: "mmss.0"
}, ai = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function x1(e) {
  var r = typeof e == "number" ? Fe[e] : e;
  return r = r.replace(ai, "(\\d+)"), ai.lastIndex = 0, new RegExp("^" + r + "$");
}
function A1(e, r, t) {
  var a = -1, n = -1, i = -1, s = -1, f = -1, c = -1;
  (r.match(ai) || []).forEach(function(d, u) {
    var h = parseInt(t[u + 1], 10);
    switch (d.toLowerCase().charAt(0)) {
      case "y":
        a = h;
        break;
      case "d":
        i = h;
        break;
      case "h":
        s = h;
        break;
      case "s":
        c = h;
        break;
      case "m":
        s >= 0 ? f = h : n = h;
        break;
    }
  }), ai.lastIndex = 0, c >= 0 && f == -1 && n >= 0 && (f = n, n = -1);
  var o = ("" + (a >= 0 ? a : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (n >= 1 ? n : 1)).slice(-2) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2);
  o.length == 7 && (o = "0" + o), o.length == 8 && (o = "20" + o);
  var l = ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2) + ":" + ("00" + (c >= 0 ? c : 0)).slice(-2);
  return s == -1 && f == -1 && c == -1 ? o : a == -1 && n == -1 && i == -1 ? l : o + "T" + l;
}
var F1 = {
  "d.m": "d\\.m"
  // Issue #2571 Google Sheets writes invalid format 'd.m', correct format is 'd"."m' or 'd\\.m'
};
function jt(e, r) {
  return us(F1[e] || e, r);
}
var cf = /* @__PURE__ */ function() {
  var e = {};
  e.version = "1.2.0";
  function r() {
    for (var y = 0, O = new Array(256), R = 0; R != 256; ++R)
      y = R, y = y & 1 ? -306674912 ^ y >>> 1 : y >>> 1, y = y & 1 ? -306674912 ^ y >>> 1 : y >>> 1, y = y & 1 ? -306674912 ^ y >>> 1 : y >>> 1, y = y & 1 ? -306674912 ^ y >>> 1 : y >>> 1, y = y & 1 ? -306674912 ^ y >>> 1 : y >>> 1, y = y & 1 ? -306674912 ^ y >>> 1 : y >>> 1, y = y & 1 ? -306674912 ^ y >>> 1 : y >>> 1, y = y & 1 ? -306674912 ^ y >>> 1 : y >>> 1, O[R] = y;
    return typeof Int32Array < "u" ? new Int32Array(O) : O;
  }
  var t = r();
  function a(y) {
    var O = 0, R = 0, P = 0, L = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (P = 0; P != 256; ++P) L[P] = y[P];
    for (P = 0; P != 256; ++P)
      for (R = y[P], O = 256 + P; O < 4096; O += 256) R = L[O] = R >>> 8 ^ y[R & 255];
    var U = [];
    for (P = 1; P != 16; ++P) U[P - 1] = typeof Int32Array < "u" && typeof L.subarray == "function" ? L.subarray(P * 256, P * 256 + 256) : L.slice(P * 256, P * 256 + 256);
    return U;
  }
  var n = a(t), i = n[0], s = n[1], f = n[2], c = n[3], o = n[4], l = n[5], d = n[6], u = n[7], h = n[8], m = n[9], g = n[10], p = n[11], v = n[12], w = n[13], _ = n[14];
  function T(y, O) {
    for (var R = O ^ -1, P = 0, L = y.length; P < L; ) R = R >>> 8 ^ t[(R ^ y.charCodeAt(P++)) & 255];
    return ~R;
  }
  function b(y, O) {
    for (var R = O ^ -1, P = y.length - 15, L = 0; L < P; ) R = _[y[L++] ^ R & 255] ^ w[y[L++] ^ R >> 8 & 255] ^ v[y[L++] ^ R >> 16 & 255] ^ p[y[L++] ^ R >>> 24] ^ g[y[L++]] ^ m[y[L++]] ^ h[y[L++]] ^ u[y[L++]] ^ d[y[L++]] ^ l[y[L++]] ^ o[y[L++]] ^ c[y[L++]] ^ f[y[L++]] ^ s[y[L++]] ^ i[y[L++]] ^ t[y[L++]];
    for (P += 15; L < P; ) R = R >>> 8 ^ t[(R ^ y[L++]) & 255];
    return ~R;
  }
  function B(y, O) {
    for (var R = O ^ -1, P = 0, L = y.length, U = 0, K = 0; P < L; )
      U = y.charCodeAt(P++), U >= 55296 && U < 57344 && !(U < 56320 && P < L && (K = y.charCodeAt(P)) >= 56320 && K < 57344) && (U = 65533), U < 128 ? R = R >>> 8 ^ t[(R ^ U) & 255] : U < 2048 ? (R = R >>> 8 ^ t[(R ^ (192 | U >> 6 & 31)) & 255], R = R >>> 8 ^ t[(R ^ (128 | U & 63)) & 255]) : U >= 55296 && U < 56320 ? (U = (U & 1023) + 64, K = y.charCodeAt(P++) & 1023, R = R >>> 8 ^ t[(R ^ (240 | U >> 8 & 7)) & 255], R = R >>> 8 ^ t[(R ^ (128 | U >> 2 & 63)) & 255], R = R >>> 8 ^ t[(R ^ (128 | K >> 6 & 15 | (U & 3) << 4)) & 255], R = R >>> 8 ^ t[(R ^ (128 | K & 63)) & 255]) : (R = R >>> 8 ^ t[(R ^ (224 | U >> 12 & 15)) & 255], R = R >>> 8 ^ t[(R ^ (128 | U >> 6 & 63)) & 255], R = R >>> 8 ^ t[(R ^ (128 | U & 63)) & 255]);
    return ~R;
  }
  return e.table = t, e.bstr = T, e.buf = b, e.str = B, e;
}(), Ie = /* @__PURE__ */ function() {
  var r = (
    /*::(*/
    {}
  );
  r.version = "1.2.2";
  function t(k, I) {
    for (var E = k.split("/"), S = I.split("/"), F = 0, C = 0, X = Math.min(E.length, S.length); F < X; ++F) {
      if (C = E[F].length - S[F].length) return C;
      if (E[F] != S[F]) return E[F] < S[F] ? -1 : 1;
    }
    return E.length - S.length;
  }
  function a(k) {
    if (k.charAt(k.length - 1) == "/") return k.slice(0, -1).indexOf("/") === -1 ? k : a(k.slice(0, -1));
    var I = k.lastIndexOf("/");
    return I === -1 ? k : k.slice(0, I + 1);
  }
  function n(k) {
    if (k.charAt(k.length - 1) == "/") return n(k.slice(0, -1));
    var I = k.lastIndexOf("/");
    return I === -1 ? k : k.slice(I + 1);
  }
  function i(k, I) {
    typeof I == "string" && (I = new Date(I));
    var E = I.getHours();
    E = E << 6 | I.getMinutes(), E = E << 5 | I.getSeconds() >>> 1, k.write_shift(2, E);
    var S = I.getFullYear() - 1980;
    S = S << 4 | I.getMonth() + 1, S = S << 5 | I.getDate(), k.write_shift(2, S);
  }
  function s(k) {
    var I = k.read_shift(2) & 65535, E = k.read_shift(2) & 65535, S = /* @__PURE__ */ new Date(), F = E & 31;
    E >>>= 5;
    var C = E & 15;
    E >>>= 4, S.setMilliseconds(0), S.setFullYear(E + 1980), S.setMonth(C - 1), S.setDate(F);
    var X = I & 31;
    I >>>= 5;
    var Y = I & 63;
    return I >>>= 6, S.setHours(I), S.setMinutes(Y), S.setSeconds(X << 1), S;
  }
  function f(k) {
    yr(k, 0);
    for (var I = (
      /*::(*/
      {}
    ), E = 0; k.l <= k.length - 4; ) {
      var S = k.read_shift(2), F = k.read_shift(2), C = k.l + F, X = {};
      switch (S) {
        case 21589:
          E = k.read_shift(1), E & 1 && (X.mtime = k.read_shift(4)), F > 5 && (E & 2 && (X.atime = k.read_shift(4)), E & 4 && (X.ctime = k.read_shift(4))), X.mtime && (X.mt = new Date(X.mtime * 1e3));
          break;
        case 1:
          {
            var Y = k.read_shift(4), W = k.read_shift(4);
            X.usz = W * Math.pow(2, 32) + Y, Y = k.read_shift(4), W = k.read_shift(4), X.csz = W * Math.pow(2, 32) + Y;
          }
          break;
      }
      k.l = C, I[S] = X;
    }
    return I;
  }
  var c;
  function o() {
    return c || (c = Bt);
  }
  function l(k, I) {
    if (k[0] == 80 && k[1] == 75) return Js(k, I);
    if ((k[0] | 32) == 109 && (k[1] | 32) == 105) return Vl(k, I);
    if (k.length < 512) throw new Error("CFB file size " + k.length + " < 512");
    var E = 3, S = 512, F = 0, C = 0, X = 0, Y = 0, W = 0, V = [], G = (
      /*::(*/
      k.slice(0, 512)
    );
    yr(G, 0);
    var ee = d(G);
    switch (E = ee[0], E) {
      case 3:
        S = 512;
        break;
      case 4:
        S = 4096;
        break;
      case 0:
        if (ee[1] == 0) return Js(k, I);
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + E);
    }
    S !== 512 && (G = /*::(*/
    k.slice(0, S), yr(
      G,
      28
      /* blob.l */
    ));
    var ce = k.slice(0, S);
    u(G, E);
    var we = G.read_shift(4, "i");
    if (E === 3 && we !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + we);
    G.l += 4, X = G.read_shift(4, "i"), G.l += 4, G.chk("00100000", "Mini Stream Cutoff Size: "), Y = G.read_shift(4, "i"), F = G.read_shift(4, "i"), W = G.read_shift(4, "i"), C = G.read_shift(4, "i");
    for (var re = -1, ue = 0; ue < 109 && (re = G.read_shift(4, "i"), !(re < 0)); ++ue)
      V[ue] = re;
    var Re = h(k, S);
    p(W, C, Re, S, V);
    var ir = w(Re, X, V, S);
    X < ir.length && (ir[X].name = "!Directory"), F > 0 && Y !== K && (ir[Y].name = "!MiniFAT"), ir[V[0]].name = "!FAT", ir.fat_addrs = V, ir.ssz = S;
    var cr = {}, Lr = [], za = [], $a = [];
    _(X, ir, Re, Lr, F, cr, za, Y), m(za, $a, Lr), Lr.shift();
    var Ka = {
      FileIndex: za,
      FullPaths: $a
    };
    return I && I.raw && (Ka.raw = { header: ce, sectors: Re }), Ka;
  }
  function d(k) {
    if (k[k.l] == 80 && k[k.l + 1] == 75) return [0, 0];
    k.chk(me, "Header Signature: "), k.l += 16;
    var I = k.read_shift(2, "u");
    return [k.read_shift(2, "u"), I];
  }
  function u(k, I) {
    var E = 9;
    switch (k.l += 2, E = k.read_shift(2)) {
      case 9:
        if (I != 3) throw new Error("Sector Shift: Expected 9 saw " + E);
        break;
      case 12:
        if (I != 4) throw new Error("Sector Shift: Expected 12 saw " + E);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + E);
    }
    k.chk("0600", "Mini Sector Shift: "), k.chk("000000000000", "Reserved: ");
  }
  function h(k, I) {
    for (var E = Math.ceil(k.length / I) - 1, S = [], F = 1; F < E; ++F) S[F - 1] = k.slice(F * I, (F + 1) * I);
    return S[E - 1] = k.slice(E * I), S;
  }
  function m(k, I, E) {
    for (var S = 0, F = 0, C = 0, X = 0, Y = 0, W = E.length, V = [], G = []; S < W; ++S)
      V[S] = G[S] = S, I[S] = E[S];
    for (; Y < G.length; ++Y)
      S = G[Y], F = k[S].L, C = k[S].R, X = k[S].C, V[S] === S && (F !== -1 && V[F] !== F && (V[S] = V[F]), C !== -1 && V[C] !== C && (V[S] = V[C])), X !== -1 && (V[X] = S), F !== -1 && S != V[S] && (V[F] = V[S], G.lastIndexOf(F) < Y && G.push(F)), C !== -1 && S != V[S] && (V[C] = V[S], G.lastIndexOf(C) < Y && G.push(C));
    for (S = 1; S < W; ++S) V[S] === S && (C !== -1 && V[C] !== C ? V[S] = V[C] : F !== -1 && V[F] !== F && (V[S] = V[F]));
    for (S = 1; S < W; ++S)
      if (k[S].type !== 0) {
        if (Y = S, Y != V[Y]) do
          Y = V[Y], I[S] = I[Y] + "/" + I[S];
        while (Y !== 0 && V[Y] !== -1 && Y != V[Y]);
        V[S] = -1;
      }
    for (I[0] += "/", S = 1; S < W; ++S)
      k[S].type !== 2 && (I[S] += "/");
  }
  function g(k, I, E) {
    for (var S = k.start, F = k.size, C = [], X = S; E && F > 0 && X >= 0; )
      C.push(I.slice(X * U, X * U + U)), F -= U, X = ia(E, X * 4);
    return C.length === 0 ? H(0) : mr(C).slice(0, k.size);
  }
  function p(k, I, E, S, F) {
    var C = K;
    if (k === K) {
      if (I !== 0) throw new Error("DIFAT chain shorter than expected");
    } else if (k !== -1) {
      var X = E[k], Y = (S >>> 2) - 1;
      if (!X) return;
      for (var W = 0; W < Y && (C = ia(X, W * 4)) !== K; ++W)
        F.push(C);
      I >= 1 && p(ia(X, S - 4), I - 1, E, S, F);
    }
  }
  function v(k, I, E, S, F) {
    var C = [], X = [];
    F || (F = []);
    var Y = S - 1, W = 0, V = 0;
    for (W = I; W >= 0; ) {
      if (F[W]) throw new Error("Cycle detected in FAT chain at sector " + W);
      F[W] = !0, C[C.length] = W, X.push(k[W]);
      var G = E[Math.floor(W * 4 / S)];
      if (V = W * 4 & Y, S < 4 + V) throw new Error("FAT boundary crossed: " + W + " 4 " + S);
      if (!k[G]) break;
      W = ia(k[G], V);
    }
    return { nodes: C, data: wf([X]) };
  }
  function w(k, I, E, S) {
    var F = k.length, C = [], X = [], Y = [], W = [], V = S - 1, G = 0, ee = 0, ce = 0, we = 0;
    for (G = 0; G < F; ++G)
      if (Y = [], ce = G + I, ce >= F && (ce -= F), !X[ce]) {
        W = [];
        var re = [];
        for (ee = ce; ee >= 0; ) {
          re[ee] = !0, X[ee] = !0, Y[Y.length] = ee, W.push(k[ee]);
          var ue = E[Math.floor(ee * 4 / S)];
          if (we = ee * 4 & V, S < 4 + we) throw new Error("FAT boundary crossed: " + ee + " 4 " + S);
          if (!k[ue] || (ee = ia(k[ue], we), re[ee])) break;
        }
        C[ce] = { nodes: Y, data: wf([W]) };
      }
    return C;
  }
  function _(k, I, E, S, F, C, X, Y) {
    for (var W = 0, V = S.length ? 2 : 0, G = I[k].data, ee = 0, ce = 0, we; ee < G.length; ee += 128) {
      var re = (
        /*::(*/
        G.slice(ee, ee + 128)
      );
      yr(re, 64), ce = re.read_shift(2), we = _i(re, 0, ce - V), S.push(we);
      var ue = {
        name: we,
        type: re.read_shift(1),
        color: re.read_shift(1),
        L: re.read_shift(4, "i"),
        R: re.read_shift(4, "i"),
        C: re.read_shift(4, "i"),
        clsid: re.read_shift(16),
        state: re.read_shift(4, "i"),
        start: 0,
        size: 0
      }, Re = re.read_shift(2) + re.read_shift(2) + re.read_shift(2) + re.read_shift(2);
      Re !== 0 && (ue.ct = T(re, re.l - 8));
      var ir = re.read_shift(2) + re.read_shift(2) + re.read_shift(2) + re.read_shift(2);
      ir !== 0 && (ue.mt = T(re, re.l - 8)), ue.start = re.read_shift(4, "i"), ue.size = re.read_shift(4, "i"), ue.size < 0 && ue.start < 0 && (ue.size = ue.type = 0, ue.start = K, ue.name = ""), ue.type === 5 ? (W = ue.start, F > 0 && W !== K && (I[W].name = "!StreamData")) : ue.size >= 4096 ? (ue.storage = "fat", I[ue.start] === void 0 && (I[ue.start] = v(E, ue.start, I.fat_addrs, I.ssz)), I[ue.start].name = ue.name, ue.content = I[ue.start].data.slice(0, ue.size)) : (ue.storage = "minifat", ue.size < 0 ? ue.size = 0 : W !== K && ue.start !== K && I[W] && (ue.content = g(ue, I[W].data, (I[Y] || {}).data))), ue.content && yr(ue.content, 0), C[we] = ue, X.push(ue);
    }
  }
  function T(k, I) {
    return new Date((br(k, I + 4) / 1e7 * Math.pow(2, 32) + br(k, I) / 1e7 - 11644473600) * 1e3);
  }
  function b(k, I) {
    return o(), l(c.readFileSync(k), I);
  }
  function B(k, I) {
    var E = I && I.type;
    switch (E || Ue && Buffer.isBuffer(k) && (E = "buffer"), E || "base64") {
      case "file":
        return b(k, I);
      case "base64":
        return l(qr(st(k)), I);
      case "binary":
        return l(qr(k), I);
    }
    return l(
      /*::typeof blob == 'string' ? new Buffer(blob, 'utf-8') : */
      k,
      I
    );
  }
  function y(k, I) {
    var E = I || {}, S = E.root || "Root Entry";
    if (k.FullPaths || (k.FullPaths = []), k.FileIndex || (k.FileIndex = []), k.FullPaths.length !== k.FileIndex.length) throw new Error("inconsistent CFB structure");
    k.FullPaths.length === 0 && (k.FullPaths[0] = S + "/", k.FileIndex[0] = { name: S, type: 5 }), E.CLSID && (k.FileIndex[0].clsid = E.CLSID), O(k);
  }
  function O(k) {
    var I = "Sh33tJ5";
    if (!Ie.find(k, "/" + I)) {
      var E = H(4);
      E[0] = 55, E[1] = E[3] = 50, E[2] = 54, k.FileIndex.push({ name: I, type: 2, content: E, size: 4, L: 69, R: 69, C: 69 }), k.FullPaths.push(k.FullPaths[0] + I), R(k);
    }
  }
  function R(k, I) {
    y(k);
    for (var E = !1, S = !1, F = k.FullPaths.length - 1; F >= 0; --F) {
      var C = k.FileIndex[F];
      switch (C.type) {
        case 0:
          S ? E = !0 : (k.FileIndex.pop(), k.FullPaths.pop());
          break;
        case 1:
        case 2:
        case 5:
          S = !0, isNaN(C.R * C.L * C.C) && (E = !0), C.R > -1 && C.L > -1 && C.R == C.L && (E = !0);
          break;
        default:
          E = !0;
          break;
      }
    }
    if (!(!E && !I)) {
      var X = new Date(1987, 1, 19), Y = 0, W = Object.create ? /* @__PURE__ */ Object.create(null) : {}, V = [];
      for (F = 0; F < k.FullPaths.length; ++F)
        W[k.FullPaths[F]] = !0, k.FileIndex[F].type !== 0 && V.push([k.FullPaths[F], k.FileIndex[F]]);
      for (F = 0; F < V.length; ++F) {
        var G = a(V[F][0]);
        for (S = W[G]; !S; ) {
          for (; a(G) && !W[a(G)]; ) G = a(G);
          V.push([G, {
            name: n(G).replace("/", ""),
            type: 1,
            clsid: ae,
            ct: X,
            mt: X,
            content: null
          }]), W[G] = !0, G = a(V[F][0]), S = W[G];
        }
      }
      for (V.sort(function(we, re) {
        return t(we[0], re[0]);
      }), k.FullPaths = [], k.FileIndex = [], F = 0; F < V.length; ++F)
        k.FullPaths[F] = V[F][0], k.FileIndex[F] = V[F][1];
      for (F = 0; F < V.length; ++F) {
        var ee = k.FileIndex[F], ce = k.FullPaths[F];
        if (ee.name = n(ce).replace("/", ""), ee.L = ee.R = ee.C = -(ee.color = 1), ee.size = ee.content ? ee.content.length : 0, ee.start = 0, ee.clsid = ee.clsid || ae, F === 0)
          ee.C = V.length > 1 ? 1 : -1, ee.size = 0, ee.type = 5;
        else if (ce.slice(-1) == "/") {
          for (Y = F + 1; Y < V.length && a(k.FullPaths[Y]) != ce; ++Y) ;
          for (ee.C = Y >= V.length ? -1 : Y, Y = F + 1; Y < V.length && a(k.FullPaths[Y]) != a(ce); ++Y) ;
          ee.R = Y >= V.length ? -1 : Y, ee.type = 1;
        } else
          a(k.FullPaths[F + 1] || "") == a(ce) && (ee.R = F + 1), ee.type = 2;
      }
    }
  }
  function P(k, I) {
    var E = I || {};
    if (E.fileType == "mad") return Gl(k, E);
    switch (R(k), E.fileType) {
      case "zip":
        return Ml(k, E);
    }
    var S = function(we) {
      for (var re = 0, ue = 0, Re = 0; Re < we.FileIndex.length; ++Re) {
        var ir = we.FileIndex[Re];
        if (ir.content) {
          var cr = ir.content.length;
          cr > 0 && (cr < 4096 ? re += cr + 63 >> 6 : ue += cr + 511 >> 9);
        }
      }
      for (var Lr = we.FullPaths.length + 3 >> 2, za = re + 7 >> 3, $a = re + 127 >> 7, Ka = za + ue + Lr + $a, ta = Ka + 127 >> 7, Ii = ta <= 109 ? 0 : Math.ceil((ta - 109) / 127); Ka + ta + Ii + 127 >> 7 > ta; ) Ii = ++ta <= 109 ? 0 : Math.ceil((ta - 109) / 127);
      var Pt = [1, Ii, ta, $a, Lr, ue, re, 0];
      return we.FileIndex[0].size = re << 6, Pt[7] = (we.FileIndex[0].start = Pt[0] + Pt[1] + Pt[2] + Pt[3] + Pt[4] + Pt[5]) + (Pt[6] + 7 >> 3), Pt;
    }(k), F = H(S[7] << 9), C = 0, X = 0;
    {
      for (C = 0; C < 8; ++C) F.write_shift(1, de[C]);
      for (C = 0; C < 8; ++C) F.write_shift(2, 0);
      for (F.write_shift(2, 62), F.write_shift(2, 3), F.write_shift(2, 65534), F.write_shift(2, 9), F.write_shift(2, 6), C = 0; C < 3; ++C) F.write_shift(2, 0);
      for (F.write_shift(4, 0), F.write_shift(4, S[2]), F.write_shift(4, S[0] + S[1] + S[2] + S[3] - 1), F.write_shift(4, 0), F.write_shift(4, 4096), F.write_shift(4, S[3] ? S[0] + S[1] + S[2] - 1 : K), F.write_shift(4, S[3]), F.write_shift(-4, S[1] ? S[0] - 1 : K), F.write_shift(4, S[1]), C = 0; C < 109; ++C) F.write_shift(-4, C < S[2] ? S[1] + C : -1);
    }
    if (S[1])
      for (X = 0; X < S[1]; ++X) {
        for (; C < 236 + X * 127; ++C) F.write_shift(-4, C < S[2] ? S[1] + C : -1);
        F.write_shift(-4, X === S[1] - 1 ? K : X + 1);
      }
    var Y = function(we) {
      for (X += we; C < X - 1; ++C) F.write_shift(-4, C + 1);
      we && (++C, F.write_shift(-4, K));
    };
    for (X = C = 0, X += S[1]; C < X; ++C) F.write_shift(-4, he.DIFSECT);
    for (X += S[2]; C < X; ++C) F.write_shift(-4, he.FATSECT);
    Y(S[3]), Y(S[4]);
    for (var W = 0, V = 0, G = k.FileIndex[0]; W < k.FileIndex.length; ++W)
      G = k.FileIndex[W], G.content && (V = G.content.length, !(V < 4096) && (G.start = X, Y(V + 511 >> 9)));
    for (Y(S[6] + 7 >> 3); F.l & 511; ) F.write_shift(-4, he.ENDOFCHAIN);
    for (X = C = 0, W = 0; W < k.FileIndex.length; ++W)
      G = k.FileIndex[W], G.content && (V = G.content.length, !(!V || V >= 4096) && (G.start = X, Y(V + 63 >> 6)));
    for (; F.l & 511; ) F.write_shift(-4, he.ENDOFCHAIN);
    for (C = 0; C < S[4] << 2; ++C) {
      var ee = k.FullPaths[C];
      if (!ee || ee.length === 0) {
        for (W = 0; W < 17; ++W) F.write_shift(4, 0);
        for (W = 0; W < 3; ++W) F.write_shift(4, -1);
        for (W = 0; W < 12; ++W) F.write_shift(4, 0);
        continue;
      }
      G = k.FileIndex[C], C === 0 && (G.start = G.size ? G.start - 1 : K);
      var ce = C === 0 && E.root || G.name;
      if (ce.length > 31 && (console.error("Name " + ce + " will be truncated to " + ce.slice(0, 31)), ce = ce.slice(0, 31)), V = 2 * (ce.length + 1), F.write_shift(64, ce, "utf16le"), F.write_shift(2, V), F.write_shift(1, G.type), F.write_shift(1, G.color), F.write_shift(-4, G.L), F.write_shift(-4, G.R), F.write_shift(-4, G.C), G.clsid) F.write_shift(16, G.clsid, "hex");
      else for (W = 0; W < 4; ++W) F.write_shift(4, 0);
      F.write_shift(4, G.state || 0), F.write_shift(4, 0), F.write_shift(4, 0), F.write_shift(4, 0), F.write_shift(4, 0), F.write_shift(4, G.start), F.write_shift(4, G.size), F.write_shift(4, 0);
    }
    for (C = 1; C < k.FileIndex.length; ++C)
      if (G = k.FileIndex[C], G.size >= 4096)
        if (F.l = G.start + 1 << 9, Ue && Buffer.isBuffer(G.content))
          G.content.copy(F, F.l, 0, G.size), F.l += G.size + 511 & -512;
        else {
          for (W = 0; W < G.size; ++W) F.write_shift(1, G.content[W]);
          for (; W & 511; ++W) F.write_shift(1, 0);
        }
    for (C = 1; C < k.FileIndex.length; ++C)
      if (G = k.FileIndex[C], G.size > 0 && G.size < 4096)
        if (Ue && Buffer.isBuffer(G.content))
          G.content.copy(F, F.l, 0, G.size), F.l += G.size + 63 & -64;
        else {
          for (W = 0; W < G.size; ++W) F.write_shift(1, G.content[W]);
          for (; W & 63; ++W) F.write_shift(1, 0);
        }
    if (Ue)
      F.l = F.length;
    else
      for (; F.l < F.length; ) F.write_shift(1, 0);
    return F;
  }
  function L(k, I) {
    var E = k.FullPaths.map(function(W) {
      return W.toUpperCase();
    }), S = E.map(function(W) {
      var V = W.split("/");
      return V[V.length - (W.slice(-1) == "/" ? 2 : 1)];
    }), F = !1;
    I.charCodeAt(0) === 47 ? (F = !0, I = E[0].slice(0, -1) + I) : F = I.indexOf("/") !== -1;
    var C = I.toUpperCase(), X = F === !0 ? E.indexOf(C) : S.indexOf(C);
    if (X !== -1) return k.FileIndex[X];
    var Y = !C.match(Za);
    for (C = C.replace(et, ""), Y && (C = C.replace(Za, "!")), X = 0; X < E.length; ++X)
      if ((Y ? E[X].replace(Za, "!") : E[X]).replace(et, "") == C || (Y ? S[X].replace(Za, "!") : S[X]).replace(et, "") == C) return k.FileIndex[X];
    return null;
  }
  var U = 64, K = -2, me = "d0cf11e0a1b11ae1", de = [208, 207, 17, 224, 161, 177, 26, 225], ae = "00000000000000000000000000000000", he = {
    /* 2.1 Compund File Sector Numbers and Types */
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: K,
    FREESECT: -1,
    /* 2.2 Compound File Header */
    HEADER_SIGNATURE: me,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: ae,
    /* 2.6.1 Compound File Directory Entry */
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function q(k, I, E) {
    o();
    var S = P(k, E);
    c.writeFileSync(I, S);
  }
  function ge(k) {
    for (var I = new Array(k.length), E = 0; E < k.length; ++E) I[E] = String.fromCharCode(k[E]);
    return I.join("");
  }
  function z(k, I) {
    var E = P(k, I);
    switch (I && I.type || "buffer") {
      case "file":
        return o(), c.writeFileSync(I.filename, E), E;
      case "binary":
        return typeof E == "string" ? E : ge(E);
      case "base64":
        return Qn(typeof E == "string" ? E : ge(E));
      case "buffer":
        if (Ue) return Buffer.isBuffer(E) ? E : Rt(E);
      case "array":
        return typeof E == "string" ? qr(E) : E;
    }
    return E;
  }
  var be;
  function oe(k) {
    try {
      var I = k.InflateRaw, E = new I();
      if (E._processChunk(new Uint8Array([3, 0]), E._finishFlushFlag), E.bytesRead) be = k;
      else throw new Error("zlib does not expose bytesRead");
    } catch (S) {
      console.error("cannot use native zlib: " + (S.message || S));
    }
  }
  function fe(k, I) {
    if (!be) return Ys(k, I);
    var E = be.InflateRaw, S = new E(), F = S._processChunk(k.slice(k.l), S._finishFlushFlag);
    return k.l += S.bytesRead, F;
  }
  function Q(k) {
    return be ? be.deflateRawSync(k) : Pr(k);
  }
  var _e = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], Ee = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], Se = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function A(k) {
    var I = (k << 1 | k << 11) & 139536 | (k << 5 | k << 15) & 558144;
    return (I >> 16 | I >> 8 | I) & 255;
  }
  for (var M = typeof Uint8Array < "u", D = M ? new Uint8Array(256) : [], N = 0; N < 256; ++N) D[N] = A(N);
  function j(k, I) {
    var E = D[k & 255];
    return I <= 8 ? E >>> 8 - I : (E = E << 8 | D[k >> 8 & 255], I <= 16 ? E >>> 16 - I : (E = E << 8 | D[k >> 16 & 255], E >>> 24 - I));
  }
  function x(k, I) {
    var E = I & 7, S = I >>> 3;
    return (k[S] | (E <= 6 ? 0 : k[S + 1] << 8)) >>> E & 3;
  }
  function ne(k, I) {
    var E = I & 7, S = I >>> 3;
    return (k[S] | (E <= 5 ? 0 : k[S + 1] << 8)) >>> E & 7;
  }
  function ve(k, I) {
    var E = I & 7, S = I >>> 3;
    return (k[S] | (E <= 4 ? 0 : k[S + 1] << 8)) >>> E & 15;
  }
  function se(k, I) {
    var E = I & 7, S = I >>> 3;
    return (k[S] | (E <= 3 ? 0 : k[S + 1] << 8)) >>> E & 31;
  }
  function Ce(k, I) {
    var E = I & 7, S = I >>> 3;
    return (k[S] | (E <= 1 ? 0 : k[S + 1] << 8)) >>> E & 127;
  }
  function xe(k, I, E) {
    var S = I & 7, F = I >>> 3, C = (1 << E) - 1, X = k[F] >>> S;
    return E < 8 - S || (X |= k[F + 1] << 8 - S, E < 16 - S) || (X |= k[F + 2] << 16 - S, E < 24 - S) || (X |= k[F + 3] << 24 - S), X & C;
  }
  function Oe(k, I, E) {
    var S = I & 7, F = I >>> 3;
    return S <= 5 ? k[F] |= (E & 7) << S : (k[F] |= E << S & 255, k[F + 1] = (E & 7) >> 8 - S), I + 3;
  }
  function qe(k, I, E) {
    var S = I & 7, F = I >>> 3;
    return E = (E & 1) << S, k[F] |= E, I + 1;
  }
  function tr(k, I, E) {
    var S = I & 7, F = I >>> 3;
    return E <<= S, k[F] |= E & 255, E >>>= 8, k[F + 1] = E, I + 8;
  }
  function lr(k, I, E) {
    var S = I & 7, F = I >>> 3;
    return E <<= S, k[F] |= E & 255, E >>>= 8, k[F + 1] = E & 255, k[F + 2] = E >>> 8, I + 16;
  }
  function Te(k, I) {
    var E = k.length, S = 2 * E > I ? 2 * E : I + 5, F = 0;
    if (E >= I) return k;
    if (Ue) {
      var C = Qs(S);
      if (k.copy) k.copy(C);
      else for (; F < k.length; ++F) C[F] = k[F];
      return C;
    } else if (M) {
      var X = new Uint8Array(S);
      if (X.set) X.set(k);
      else for (; F < E; ++F) X[F] = k[F];
      return X;
    }
    return k.length = S, k;
  }
  function $e(k) {
    for (var I = new Array(k), E = 0; E < k; ++E) I[E] = 0;
    return I;
  }
  function le(k, I, E) {
    var S = 1, F = 0, C = 0, X = 0, Y = 0, W = k.length, V = M ? new Uint16Array(32) : $e(32);
    for (C = 0; C < 32; ++C) V[C] = 0;
    for (C = W; C < E; ++C) k[C] = 0;
    W = k.length;
    var G = M ? new Uint16Array(W) : $e(W);
    for (C = 0; C < W; ++C)
      V[F = k[C]]++, S < F && (S = F), G[C] = 0;
    for (V[0] = 0, C = 1; C <= S; ++C) V[C + 16] = Y = Y + V[C - 1] << 1;
    for (C = 0; C < W; ++C)
      Y = k[C], Y != 0 && (G[C] = V[Y + 16]++);
    var ee = 0;
    for (C = 0; C < W; ++C)
      if (ee = k[C], ee != 0)
        for (Y = j(G[C], S) >> S - ee, X = (1 << S + 4 - ee) - 1; X >= 0; --X)
          I[Y | X << ee] = ee & 15 | C << 4;
    return S;
  }
  var nt = M ? new Uint16Array(512) : $e(512), Yr = M ? new Uint16Array(32) : $e(32);
  if (!M) {
    for (var nr = 0; nr < 512; ++nr) nt[nr] = 0;
    for (nr = 0; nr < 32; ++nr) Yr[nr] = 0;
  }
  (function() {
    for (var k = [], I = 0; I < 32; I++) k.push(5);
    le(k, Yr, 32);
    var E = [];
    for (I = 0; I <= 143; I++) E.push(8);
    for (; I <= 255; I++) E.push(9);
    for (; I <= 279; I++) E.push(7);
    for (; I <= 287; I++) E.push(8);
    le(E, nt, 288);
  })();
  var pt = /* @__PURE__ */ function() {
    for (var I = M ? new Uint8Array(32768) : [], E = 0, S = 0; E < Se.length - 1; ++E)
      for (; S < Se[E + 1]; ++S) I[S] = E;
    for (; S < 32768; ++S) I[S] = 29;
    var F = M ? new Uint8Array(259) : [];
    for (E = 0, S = 0; E < Ee.length - 1; ++E)
      for (; S < Ee[E + 1]; ++S) F[S] = E;
    function C(Y, W) {
      for (var V = 0; V < Y.length; ) {
        var G = Math.min(65535, Y.length - V), ee = V + G == Y.length;
        for (W.write_shift(1, +ee), W.write_shift(2, G), W.write_shift(2, ~G & 65535); G-- > 0; ) W[W.l++] = Y[V++];
      }
      return W.l;
    }
    function X(Y, W) {
      for (var V = 0, G = 0, ee = M ? new Uint16Array(32768) : []; G < Y.length; ) {
        var ce = (
          /* data.length - boff; */
          Math.min(65535, Y.length - G)
        );
        if (ce < 10) {
          for (V = Oe(W, V, +(G + ce == Y.length)), V & 7 && (V += 8 - (V & 7)), W.l = V / 8 | 0, W.write_shift(2, ce), W.write_shift(2, ~ce & 65535); ce-- > 0; ) W[W.l++] = Y[G++];
          V = W.l * 8;
          continue;
        }
        V = Oe(W, V, +(G + ce == Y.length) + 2);
        for (var we = 0; ce-- > 0; ) {
          var re = Y[G];
          we = (we << 5 ^ re) & 32767;
          var ue = -1, Re = 0;
          if ((ue = ee[we]) && (ue |= G & -32768, ue > G && (ue -= 32768), ue < G))
            for (; Y[ue + Re] == Y[G + Re] && Re < 250; ) ++Re;
          if (Re > 2) {
            re = F[Re], re <= 22 ? V = tr(W, V, D[re + 1] >> 1) - 1 : (tr(W, V, 3), V += 5, tr(W, V, D[re - 23] >> 5), V += 3);
            var ir = re < 8 ? 0 : re - 4 >> 2;
            ir > 0 && (lr(W, V, Re - Ee[re]), V += ir), re = I[G - ue], V = tr(W, V, D[re] >> 3), V -= 3;
            var cr = re < 4 ? 0 : re - 2 >> 1;
            cr > 0 && (lr(W, V, G - ue - Se[re]), V += cr);
            for (var Lr = 0; Lr < Re; ++Lr)
              ee[we] = G & 32767, we = (we << 5 ^ Y[G]) & 32767, ++G;
            ce -= Re - 1;
          } else
            re <= 143 ? re = re + 48 : V = qe(W, V, 1), V = tr(W, V, D[re]), ee[we] = G & 32767, ++G;
        }
        V = tr(W, V, 0) - 1;
      }
      return W.l = (V + 7) / 8 | 0, W.l;
    }
    return function(W, V) {
      return W.length < 8 ? C(W, V) : X(W, V);
    };
  }();
  function Pr(k) {
    var I = H(50 + Math.floor(k.length * 1.1)), E = pt(k, I);
    return I.slice(0, E);
  }
  var pe = M ? new Uint16Array(32768) : $e(32768), Ye = M ? new Uint16Array(32768) : $e(32768), gr = M ? new Uint16Array(128) : $e(128), _r = 1, Dt = 1;
  function ra(k, I) {
    var E = se(k, I) + 257;
    I += 5;
    var S = se(k, I) + 1;
    I += 5;
    var F = ve(k, I) + 4;
    I += 4;
    for (var C = 0, X = M ? new Uint8Array(19) : $e(19), Y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], W = 1, V = M ? new Uint8Array(8) : $e(8), G = M ? new Uint8Array(8) : $e(8), ee = X.length, ce = 0; ce < F; ++ce)
      X[_e[ce]] = C = ne(k, I), W < C && (W = C), V[C]++, I += 3;
    var we = 0;
    for (V[0] = 0, ce = 1; ce <= W; ++ce) G[ce] = we = we + V[ce - 1] << 1;
    for (ce = 0; ce < ee; ++ce) (we = X[ce]) != 0 && (Y[ce] = G[we]++);
    var re = 0;
    for (ce = 0; ce < ee; ++ce)
      if (re = X[ce], re != 0) {
        we = D[Y[ce]] >> 8 - re;
        for (var ue = (1 << 7 - re) - 1; ue >= 0; --ue) gr[we | ue << re] = re & 7 | ce << 3;
      }
    var Re = [];
    for (W = 1; Re.length < E + S; )
      switch (we = gr[Ce(k, I)], I += we & 7, we >>>= 3) {
        case 16:
          for (C = 3 + x(k, I), I += 2, we = Re[Re.length - 1]; C-- > 0; ) Re.push(we);
          break;
        case 17:
          for (C = 3 + ne(k, I), I += 3; C-- > 0; ) Re.push(0);
          break;
        case 18:
          for (C = 11 + Ce(k, I), I += 7; C-- > 0; ) Re.push(0);
          break;
        default:
          Re.push(we), W < we && (W = we);
          break;
      }
    var ir = Re.slice(0, E), cr = Re.slice(E);
    for (ce = E; ce < 286; ++ce) ir[ce] = 0;
    for (ce = S; ce < 30; ++ce) cr[ce] = 0;
    return _r = le(ir, pe, 286), Dt = le(cr, Ye, 30), I;
  }
  function Bn(k, I) {
    if (k[0] == 3 && !(k[1] & 3))
      return [Zt(I), 2];
    for (var E = 0, S = 0, F = Qs(I || 1 << 18), C = 0, X = F.length >>> 0, Y = 0, W = 0; !(S & 1); ) {
      if (S = ne(k, E), E += 3, S >>> 1)
        S >> 1 == 1 ? (Y = 9, W = 5) : (E = ra(k, E), Y = _r, W = Dt);
      else {
        E & 7 && (E += 8 - (E & 7));
        var V = k[E >>> 3] | k[(E >>> 3) + 1] << 8;
        if (E += 32, V > 0)
          for (!I && X < C + V && (F = Te(F, C + V), X = F.length); V-- > 0; )
            F[C++] = k[E >>> 3], E += 8;
        continue;
      }
      for (; ; ) {
        !I && X < C + 32767 && (F = Te(F, C + 32767), X = F.length);
        var G = xe(k, E, Y), ee = S >>> 1 == 1 ? nt[G] : pe[G];
        if (E += ee & 15, ee >>>= 4, !(ee >>> 8 & 255)) F[C++] = ee;
        else {
          if (ee == 256) break;
          ee -= 257;
          var ce = ee < 8 ? 0 : ee - 4 >> 2;
          ce > 5 && (ce = 0);
          var we = C + Ee[ee];
          ce > 0 && (we += xe(k, E, ce), E += ce), G = xe(k, E, W), ee = S >>> 1 == 1 ? Yr[G] : Ye[G], E += ee & 15, ee >>>= 4;
          var re = ee < 4 ? 0 : ee - 2 >> 1, ue = Se[ee];
          for (re > 0 && (ue += xe(k, E, re), E += re), !I && X < we && (F = Te(F, we + 100), X = F.length); C < we; )
            F[C] = F[C - ue], ++C;
        }
      }
    }
    return I ? [F, E + 7 >>> 3] : [F.slice(0, C), E + 7 >>> 3];
  }
  function Ys(k, I) {
    var E = k.slice(k.l || 0), S = Bn(E, I);
    return k.l += S[1], S[0];
  }
  function Zs(k, I) {
    if (k)
      typeof console < "u" && console.error(I);
    else throw new Error(I);
  }
  function Js(k, I) {
    var E = (
      /*::(*/
      k
    );
    yr(E, 0);
    var S = [], F = [], C = {
      FileIndex: S,
      FullPaths: F
    };
    y(C, { root: I.root });
    for (var X = E.length - 4; (E[X] != 80 || E[X + 1] != 75 || E[X + 2] != 5 || E[X + 3] != 6) && X >= 0; ) --X;
    E.l = X + 4, E.l += 4;
    var Y = E.read_shift(2);
    E.l += 6;
    var W = E.read_shift(4);
    for (E.l = W, X = 0; X < Y; ++X) {
      E.l += 20;
      var V = E.read_shift(4), G = E.read_shift(4), ee = E.read_shift(2), ce = E.read_shift(2), we = E.read_shift(2);
      E.l += 8;
      var re = E.read_shift(4), ue = f(
        /*::(*/
        E.slice(E.l + ee, E.l + ee + ce)
        /*:: :any)*/
      );
      E.l += ee + ce + we;
      var Re = E.l;
      E.l = re + 4, ue && ue[1] && ((ue[1] || {}).usz && (G = ue[1].usz), (ue[1] || {}).csz && (V = ue[1].csz)), Ll(E, V, G, C, ue), E.l = Re;
    }
    return C;
  }
  function Ll(k, I, E, S, F) {
    k.l += 2;
    var C = k.read_shift(2), X = k.read_shift(2), Y = s(k);
    if (C & 8257) throw new Error("Unsupported ZIP encryption");
    for (var W = k.read_shift(4), V = k.read_shift(4), G = k.read_shift(4), ee = k.read_shift(2), ce = k.read_shift(2), we = "", re = 0; re < ee; ++re) we += String.fromCharCode(k[k.l++]);
    if (ce) {
      var ue = f(
        /*::(*/
        k.slice(k.l, k.l + ce)
        /*:: :any)*/
      );
      (ue[21589] || {}).mt && (Y = ue[21589].mt), (ue[1] || {}).usz && (G = ue[1].usz), (ue[1] || {}).csz && (V = ue[1].csz), F && ((F[21589] || {}).mt && (Y = F[21589].mt), (F[1] || {}).usz && (G = F[1].usz), (F[1] || {}).csz && (V = F[1].csz));
    }
    k.l += ce;
    var Re = k.slice(k.l, k.l + V);
    switch (X) {
      case 8:
        Re = fe(k, G);
        break;
      case 0:
        k.l += V;
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + X);
    }
    var ir = !1;
    C & 8 && (W = k.read_shift(4), W == 134695760 && (W = k.read_shift(4), ir = !0), V = k.read_shift(4), G = k.read_shift(4)), V != I && Zs(ir, "Bad compressed size: " + I + " != " + V), G != E && Zs(ir, "Bad uncompressed size: " + E + " != " + G), Fi(S, we, Re, { unsafe: !0, mt: Y });
  }
  function Ml(k, I) {
    var E = I || {}, S = [], F = [], C = H(1), X = E.compression ? 8 : 0, Y = 0, W = 0, V = 0, G = 0, ee = 0, ce = k.FullPaths[0], we = ce, re = k.FileIndex[0], ue = [], Re = 0;
    for (W = 1; W < k.FullPaths.length; ++W)
      if (we = k.FullPaths[W].slice(ce.length), re = k.FileIndex[W], !(!re.size || !re.content || Array.isArray(re.content) && re.content.length == 0 || we == "Sh33tJ5")) {
        var ir = G, cr = H(we.length);
        for (V = 0; V < we.length; ++V) cr.write_shift(1, we.charCodeAt(V) & 127);
        cr = cr.slice(0, cr.l), ue[ee] = typeof re.content == "string" ? cf.bstr(re.content, 0) : cf.buf(
          /*::((*/
          re.content,
          0
        );
        var Lr = typeof re.content == "string" ? qr(re.content) : re.content;
        X == 8 && (Lr = Q(Lr)), C = H(30), C.write_shift(4, 67324752), C.write_shift(2, 20), C.write_shift(2, Y), C.write_shift(2, X), re.mt ? i(C, re.mt) : C.write_shift(4, 0), C.write_shift(-4, ue[ee]), C.write_shift(4, Lr.length), C.write_shift(
          4,
          /*::(*/
          re.content.length
        ), C.write_shift(2, cr.length), C.write_shift(2, 0), G += C.length, S.push(C), G += cr.length, S.push(cr), G += Lr.length, S.push(Lr), C = H(46), C.write_shift(4, 33639248), C.write_shift(2, 0), C.write_shift(2, 20), C.write_shift(2, Y), C.write_shift(2, X), C.write_shift(4, 0), C.write_shift(-4, ue[ee]), C.write_shift(4, Lr.length), C.write_shift(
          4,
          /*::(*/
          re.content.length
        ), C.write_shift(2, cr.length), C.write_shift(2, 0), C.write_shift(2, 0), C.write_shift(2, 0), C.write_shift(2, 0), C.write_shift(4, 0), C.write_shift(4, ir), Re += C.l, F.push(C), Re += cr.length, F.push(cr), ++ee;
      }
    return C = H(22), C.write_shift(4, 101010256), C.write_shift(2, 0), C.write_shift(2, 0), C.write_shift(2, ee), C.write_shift(2, ee), C.write_shift(4, Re), C.write_shift(4, G), C.write_shift(2, 0), mr([mr(S), mr(F), C]);
  }
  var Un = {
    htm: "text/html",
    xml: "text/xml",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    mso: "application/x-mso",
    thmx: "application/vnd.ms-officetheme",
    sh33tj5: "application/octet-stream"
  };
  function Bl(k, I) {
    if (k.ctype) return k.ctype;
    var E = k.name || "", S = E.match(/\.([^\.]+)$/);
    return S && Un[S[1]] || I && (S = (E = I).match(/[\.\\]([^\.\\])+$/), S && Un[S[1]]) ? Un[S[1]] : "application/octet-stream";
  }
  function Ul(k) {
    for (var I = Qn(k), E = [], S = 0; S < I.length; S += 76) E.push(I.slice(S, S + 76));
    return E.join(`\r
`) + `\r
`;
  }
  function Wl(k) {
    var I = k.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(V) {
      var G = V.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (G.length == 1 ? "0" + G : G);
    });
    I = I.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), I.charAt(0) == `
` && (I = "=0D" + I.slice(1)), I = I.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var E = [], S = I.split(`\r
`), F = 0; F < S.length; ++F) {
      var C = S[F];
      if (C.length == 0) {
        E.push("");
        continue;
      }
      for (var X = 0; X < C.length; ) {
        var Y = 76, W = C.slice(X, X + Y);
        W.charAt(Y - 1) == "=" ? Y-- : W.charAt(Y - 2) == "=" ? Y -= 2 : W.charAt(Y - 3) == "=" && (Y -= 3), W = C.slice(X, X + Y), X += Y, X < C.length && (W += "="), E.push(W);
      }
    }
    return E.join(`\r
`);
  }
  function Hl(k) {
    for (var I = [], E = 0; E < k.length; ++E) {
      for (var S = k[E]; E <= k.length && S.charAt(S.length - 1) == "="; ) S = S.slice(0, S.length - 1) + k[++E];
      I.push(S);
    }
    for (var F = 0; F < I.length; ++F) I[F] = I[F].replace(/[=][0-9A-Fa-f]{2}/g, function(C) {
      return String.fromCharCode(parseInt(C.slice(1), 16));
    });
    return qr(I.join(`\r
`));
  }
  function Xl(k, I, E) {
    for (var S = "", F = "", C = "", X, Y = 0; Y < 10; ++Y) {
      var W = I[Y];
      if (!W || W.match(/^\s*$/)) break;
      var V = W.match(/^([^:]*?):\s*([^\s].*)$/);
      if (V) switch (V[1].toLowerCase()) {
        case "content-location":
          S = V[2].trim();
          break;
        case "content-type":
          C = V[2].trim();
          break;
        case "content-transfer-encoding":
          F = V[2].trim();
          break;
      }
    }
    switch (++Y, F.toLowerCase()) {
      case "base64":
        X = qr(st(I.slice(Y).join("")));
        break;
      case "quoted-printable":
        X = Hl(I.slice(Y));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + F);
    }
    var G = Fi(k, S.slice(E.length), X, { unsafe: !0 });
    C && (G.ctype = C);
  }
  function Vl(k, I) {
    if (ge(k.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
    var E = I && I.root || "", S = (Ue && Buffer.isBuffer(k) ? k.toString("binary") : ge(k)).split(`\r
`), F = 0, C = "";
    for (F = 0; F < S.length; ++F)
      if (C = S[F], !!/^Content-Location:/i.test(C) && (C = C.slice(C.indexOf("file")), E || (E = C.slice(0, C.lastIndexOf("/") + 1)), C.slice(0, E.length) != E))
        for (; E.length > 0 && (E = E.slice(0, E.length - 1), E = E.slice(0, E.lastIndexOf("/") + 1), C.slice(0, E.length) != E); )
          ;
    var X = (S[1] || "").match(/boundary="(.*?)"/);
    if (!X) throw new Error("MAD cannot find boundary");
    var Y = "--" + (X[1] || ""), W = [], V = [], G = {
      FileIndex: W,
      FullPaths: V
    };
    y(G);
    var ee, ce = 0;
    for (F = 0; F < S.length; ++F) {
      var we = S[F];
      we !== Y && we !== Y + "--" || (ce++ && Xl(G, S.slice(ee, F), E), ee = F);
    }
    return G;
  }
  function Gl(k, I) {
    var E = I || {}, S = E.boundary || "SheetJS";
    S = "------=" + S;
    for (var F = [
      "MIME-Version: 1.0",
      'Content-Type: multipart/related; boundary="' + S.slice(2) + '"',
      "",
      "",
      ""
    ], C = k.FullPaths[0], X = C, Y = k.FileIndex[0], W = 1; W < k.FullPaths.length; ++W)
      if (X = k.FullPaths[W].slice(C.length), Y = k.FileIndex[W], !(!Y.size || !Y.content || X == "Sh33tJ5")) {
        X = X.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(Re) {
          return "_x" + Re.charCodeAt(0).toString(16) + "_";
        }).replace(/[\u0080-\uFFFF]/g, function(Re) {
          return "_u" + Re.charCodeAt(0).toString(16) + "_";
        });
        for (var V = Y.content, G = Ue && Buffer.isBuffer(V) ? V.toString("binary") : ge(V), ee = 0, ce = Math.min(1024, G.length), we = 0, re = 0; re <= ce; ++re) (we = G.charCodeAt(re)) >= 32 && we < 128 && ++ee;
        var ue = ee >= ce * 4 / 5;
        F.push(S), F.push("Content-Location: " + (E.root || "file:///C:/SheetJS/") + X), F.push("Content-Transfer-Encoding: " + (ue ? "quoted-printable" : "base64")), F.push("Content-Type: " + Bl(Y, X)), F.push(""), F.push(ue ? Wl(G) : Ul(G));
      }
    return F.push(S + `--\r
`), F.join(`\r
`);
  }
  function zl(k) {
    var I = {};
    return y(I, k), I;
  }
  function Fi(k, I, E, S) {
    var F = S && S.unsafe;
    F || y(k);
    var C = !F && Ie.find(k, I);
    if (!C) {
      var X = k.FullPaths[0];
      I.slice(0, X.length) == X ? X = I : (X.slice(-1) != "/" && (X += "/"), X = (X + I).replace("//", "/")), C = { name: n(I), type: 2 }, k.FileIndex.push(C), k.FullPaths.push(X), F || Ie.utils.cfb_gc(k);
    }
    return C.content = E, C.size = E ? E.length : 0, S && (S.CLSID && (C.clsid = S.CLSID), S.mt && (C.mt = S.mt), S.ct && (C.ct = S.ct)), C;
  }
  function $l(k, I) {
    y(k);
    var E = Ie.find(k, I);
    if (E) {
      for (var S = 0; S < k.FileIndex.length; ++S) if (k.FileIndex[S] == E)
        return k.FileIndex.splice(S, 1), k.FullPaths.splice(S, 1), !0;
    }
    return !1;
  }
  function Kl(k, I, E) {
    y(k);
    var S = Ie.find(k, I);
    if (S) {
      for (var F = 0; F < k.FileIndex.length; ++F) if (k.FileIndex[F] == S)
        return k.FileIndex[F].name = n(E), k.FullPaths[F] = E, !0;
    }
    return !1;
  }
  function jl(k) {
    R(k, !0);
  }
  return r.find = L, r.read = B, r.parse = l, r.write = z, r.writeFile = q, r.utils = {
    cfb_new: zl,
    cfb_add: Fi,
    cfb_del: $l,
    cfb_mov: Kl,
    cfb_gc: jl,
    ReadShift: qa,
    CheckField: Hc,
    prep_blob: yr,
    bconcat: mr,
    use_zlib: oe,
    _deflateRaw: Pr,
    _inflateRaw: Ys,
    consts: he
  }, r;
}(), Bt;
function kc(e) {
  Bt = e;
}
function of(e) {
  return typeof e == "string" ? Sn(e) : Array.isArray(e) ? r1(e) : e;
}
function xn(e, r, t) {
  if (typeof Bt < "u" && Bt.writeFileSync) return t ? Bt.writeFileSync(e, r, t) : Bt.writeFileSync(e, r);
  if (typeof Deno < "u") {
    if (t && typeof r == "string") switch (t) {
      case "utf8":
        r = new TextEncoder(t).encode(r);
        break;
      case "binary":
        r = Sn(r);
        break;
      default:
        throw new Error("Unsupported encoding " + t);
    }
    return Deno.writeFileSync(e, r);
  }
  var a = t == "utf8" ? Ct(r) : r;
  if (typeof IE_SaveFile < "u") return IE_SaveFile(a, e);
  if (typeof Blob < "u") {
    var n = new Blob([of(a)], { type: "application/octet-stream" });
    if (typeof navigator < "u" && navigator.msSaveBlob) return navigator.msSaveBlob(n, e);
    if (typeof saveAs < "u") return saveAs(n, e);
    if (typeof URL < "u" && typeof document < "u" && document.createElement && URL.createObjectURL) {
      var i = URL.createObjectURL(n);
      if (typeof chrome == "object" && typeof (chrome.downloads || {}).download == "function")
        return URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(i);
        }, 6e4), chrome.downloads.download({ url: i, filename: e, saveAs: !0 });
      var s = document.createElement("a");
      if (s.download != null)
        return s.download = e, s.href = i, document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL && typeof setTimeout < "u" && setTimeout(function() {
          URL.revokeObjectURL(i);
        }, 6e4), i;
    } else if (typeof URL < "u" && !URL.createObjectURL && typeof chrome == "object") {
      var f = "data:application/octet-stream;base64," + e1(new Uint8Array(of(a)));
      return chrome.downloads.download({ url: f, filename: e, saveAs: !0 });
    }
  }
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u") try {
    var c = File(e);
    return c.open("w"), c.encoding = "binary", Array.isArray(r) && (r = bt(r)), c.write(r), c.close(), r;
  } catch (o) {
    if (!o.message || o.message.indexOf("onstruct") == -1) throw o;
  }
  throw new Error("cannot save file " + e);
}
function I1(e) {
  if (typeof Bt < "u") return Bt.readFileSync(e);
  if (typeof Deno < "u") return Deno.readFileSync(e);
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u") try {
    var r = File(e);
    r.open("r"), r.encoding = "binary";
    var t = r.read();
    return r.close(), t;
  } catch (a) {
    if (!a.message || a.message.indexOf("onstruct") == -1) throw a;
  }
  throw new Error("Cannot access file " + e);
}
function sr(e) {
  for (var r = Object.keys(e), t = [], a = 0; a < r.length; ++a) Object.prototype.hasOwnProperty.call(e, r[a]) && t.push(r[a]);
  return t;
}
function vi(e) {
  return String(e);
}
function zr(e) {
  var r = vi(e);
  return r === "__proto__" || r === "prototype" || r === "constructor";
}
function Tc(e) {
  return zr(e);
}
function vr() {
  return typeof Object.create == "function" ? /* @__PURE__ */ Object.create(null) : {};
}
function C1(e, r) {
  return !zr(r) && Object.prototype.hasOwnProperty.call(e, vi(r));
}
function ar(e, r, t) {
  return zr(r) ? !1 : (e[vi(r)] = t, !0);
}
function lf(e, r) {
  for (var t = [], a = sr(e), n = 0; n !== a.length; ++n) t[e[a[n]][r]] == null && (t[e[a[n]][r]] = a[n]);
  return t;
}
function mi(e) {
  for (var r = [], t = sr(e), a = 0; a !== t.length; ++a) r[e[t[a]]] = t[a];
  return r;
}
function An(e) {
  for (var r = [], t = sr(e), a = 0; a !== t.length; ++a) r[e[t[a]]] = parseInt(t[a], 10);
  return r;
}
function b1(e) {
  for (var r = [], t = sr(e), a = 0; a !== t.length; ++a)
    r[e[t[a]]] == null && (r[e[t[a]]] = []), r[e[t[a]]].push(t[a]);
  return r;
}
var Ec = /* @__PURE__ */ Date.UTC(1899, 11, 30, 0, 0, 0), O1 = /* @__PURE__ */ Date.UTC(1899, 11, 31, 0, 0, 0), N1 = /* @__PURE__ */ Date.UTC(1904, 0, 1, 0, 0, 0);
function or(e, r) {
  var t = /* @__PURE__ */ e.getTime(), a = (t - Ec) / (24 * 60 * 60 * 1e3);
  return r ? (a -= 1462, a < -1402 ? a - 1 : a) : a < 60 ? a - 1 : a;
}
function Ht(e) {
  if (e >= 60 && e < 61) return e;
  var r = /* @__PURE__ */ new Date();
  return r.setTime((e > 60 ? e : e + 1) * 24 * 60 * 60 * 1e3 + Ec), r;
}
function R1(e) {
  var r = 0, t = 0, a = !1, n = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
  if (!n) throw new Error("|" + e + "| is not an ISO8601 Duration");
  for (var i = 1; i != n.length; ++i)
    if (n[i]) {
      switch (t = 1, i > 3 && (a = !0), n[i].slice(n[i].length - 1)) {
        case "Y":
          throw new Error("Unsupported ISO Duration Field: " + n[i].slice(n[i].length - 1));
        case "D":
          t *= 24;
        case "H":
          t *= 60;
        case "M":
          if (a) t *= 60;
          else throw new Error("Unsupported ISO Duration Field: M");
      }
      r += t * parseInt(n[i], 10);
    }
  return r;
}
var D1 = /^(\d+):(\d+)(:\d+)?(\.\d+)?$/, P1 = /^(\d+)-(\d+)-(\d+)$/, yc = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)?(\.\d+)?$/;
function fr(e, r) {
  if (e instanceof Date) return e;
  var t = e.match(D1);
  if (t) return new Date((r ? N1 : O1) + ((parseInt(t[1], 10) * 60 + parseInt(t[2], 10)) * 60 + (t[3] ? parseInt(t[3].slice(1), 10) : 0)) * 1e3 + (t[4] ? parseInt((t[4] + "000").slice(1, 4), 10) : 0));
  if (t = e.match(P1), t) return new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], 0, 0, 0, 0));
  if (t = e.match(yc), t) return new Date(Date.UTC(+t[1], +t[2] - 1, +t[3], +t[4], +t[5], t[6] && parseInt(t[6].slice(1), 10) || 0, t[7] && parseInt((t[7] + "0000").slice(1, 4), 10) || 0));
  var a = new Date(e);
  return a;
}
function va(e, r) {
  if (Ue && Buffer.isBuffer(e)) {
    if (r && ln) {
      if (e[0] == 255 && e[1] == 254) return Ct(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255) return Ct(lc(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u") try {
    if (r) {
      if (e[0] == 255 && e[1] == 254) return Ct(new TextDecoder("utf-16le").decode(e.slice(2)));
      if (e[0] == 254 && e[1] == 255) return Ct(new TextDecoder("utf-16be").decode(e.slice(2)));
    }
    var t = {
      "€": "",
      "‚": "",
      ƒ: "",
      "„": "",
      "…": "",
      "†": "",
      "‡": "",
      "ˆ": "",
      "‰": "",
      Š: "",
      "‹": "",
      Œ: "",
      Ž: "",
      "‘": "",
      "’": "",
      "“": "",
      "”": "",
      "•": "",
      "–": "",
      "—": "",
      "˜": "",
      "™": "",
      š: "",
      "›": "",
      œ: "",
      ž: "",
      Ÿ: ""
    };
    return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(i) {
      return t[i] || i;
    });
  } catch {
  }
  var a = [], n = 0;
  try {
    for (n = 0; n < e.length - 65536; n += 65536) a.push(String.fromCharCode.apply(0, e.slice(n, n + 65536)));
    a.push(String.fromCharCode.apply(0, e.slice(n)));
  } catch {
    try {
      for (; n < e.length - 16384; n += 16384) a.push(String.fromCharCode.apply(0, e.slice(n, n + 16384)));
      a.push(String.fromCharCode.apply(0, e.slice(n)));
    } catch {
      for (; n != e.length; ++n) a.push(String.fromCharCode(e[n]));
    }
  }
  return a.join("");
}
function je(e) {
  if (typeof e != "object" || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var r = Array.isArray && Array.isArray(e) ? new Array(e.length) : {};
  for (var t in e) C1(e, t) && (r[t] = je(e[t]));
  return r;
}
function Ke(e, r) {
  for (var t = ""; t.length < r; ) t += e;
  return t;
}
function it(e) {
  var r = Number(e);
  if (!isNaN(r)) return isFinite(r) ? r : NaN;
  if (!/\d/.test(e)) return r;
  var t = 1, a = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    return t *= 100, "";
  });
  return !isNaN(r = Number(a)) || (a = a.replace(/[(]([^()]*)[)]/, function(n, i) {
    return t = -t, i;
  }), !isNaN(r = Number(a))) ? r / t : r;
}
var L1 = /^(0?\d|1[0-2])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))\s+([ap])m?$/, M1 = /^([01]?\d|2[0-3])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))$/, B1 = /^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)(\.\d+)?[Z]?$/, U1 = (/* @__PURE__ */ new Date("6/9/69 00:00 UTC")).valueOf() == -177984e5;
function W1(e) {
  return e[2] ? e[3] ? e[4] ? new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], +e[4], parseFloat(e[3]) * 1e3)) : new Date(Date.UTC(1899, 11, 31, e[7] == "p" ? 12 : 0, +e[1], +e[2], parseFloat(e[3]) * 1e3)) : e[5] ? new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], +e[5], e[6] ? parseFloat(e[6]) * 1e3 : 0)) : new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), +e[2], 0, 0)) : new Date(Date.UTC(1899, 11, 31, +e[1] % 12 + (e[7] == "p" ? 12 : 0), 0, 0, 0));
}
function H1(e) {
  return e[2] ? e[3] ? e[4] ? new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], +e[4], parseFloat(e[3]) * 1e3)) : new Date(Date.UTC(1899, 11, 31, 0, +e[1], +e[2], parseFloat(e[3]) * 1e3)) : e[5] ? new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], +e[5], e[6] ? parseFloat(e[6]) * 1e3 : 0)) : new Date(Date.UTC(1899, 11, 31, +e[1], +e[2], 0, 0)) : new Date(Date.UTC(1899, 11, 31, +e[1], 0, 0, 0));
}
var X1 = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function hn(e) {
  if (B1.test(e)) return e.indexOf("Z") == -1 ? pi(new Date(e)) : new Date(e);
  var r = e.toLowerCase(), t = r.replace(/\s+/g, " ").trim(), a = t.match(L1);
  if (a) return W1(a);
  if (a = t.match(M1), a) return H1(a);
  if (a = t.match(yc), a) return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], a[6] && parseInt(a[6].slice(1), 10) || 0, a[7] && parseInt((a[7] + "0000").slice(1, 4), 10) || 0));
  var n = new Date(U1 && e.indexOf("UTC") == -1 ? e + " UTC" : e), i = /* @__PURE__ */ new Date(NaN), s = n.getYear();
  n.getMonth();
  var f = n.getDate();
  if (isNaN(f)) return i;
  if (r.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (r = r.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), r.length > 3 && X1.indexOf(r) == -1) return i;
  } else if (r.replace(/[ap]m?/, "").match(/[a-z]/)) return i;
  return s < 0 || s > 8099 || e.match(/[^-0-9:,\/\\\ ]/) ? i : n;
}
var V1 = /* @__PURE__ */ function() {
  var e = "abacaba".split(/(:?b)/i).length == 5;
  return function(t, a, n) {
    if (e || typeof a == "string") return t.split(a);
    for (var i = t.split(a), s = [i[0]], f = 1; f < i.length; ++f)
      s.push(n), s.push(i[f]);
    return s;
  };
}();
function ma(e) {
  return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds());
}
function pi(e) {
  return new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
}
function ds(e) {
  var r = e.slice(0, 1024), t = r.indexOf("<!DOCTYPE");
  if (t == -1) return e;
  var a = e.match(/<[\w]/);
  return a ? e.slice(0, t) + e.slice(a.index) : e;
}
function vs(e, r, t) {
  for (var a = [], n = e.indexOf(r); n > -1; ) {
    var i = e.indexOf(t, n + r.length);
    if (i == -1) break;
    a.push(e.slice(n, i + t.length)), n = e.indexOf(r, i + t.length);
  }
  return a.length > 0 ? a : null;
}
function Fn(e, r, t) {
  var a = [], n = 0, i = e.indexOf(r);
  if (i == -1) return e;
  for (; i > -1; ) {
    a.push(e.slice(n, i));
    var s = e.indexOf(t, i + r.length);
    if (s == -1) break;
    (i = e.indexOf(r, n = s + t.length)) == -1 && a.push(e.slice(n));
  }
  return a.join("");
}
var G1 = { " ": 1, "	": 1, "\r": 1, "\n": 1, ">": 1 };
function sa(e, r) {
  for (var t = e.indexOf("<" + r), a = r.length + 1, n = e.length; t >= 0 && t <= n - a && !G1[e.charAt(t + a)]; ) t = e.indexOf("<" + r, t + 1);
  if (t === -1) return null;
  var i = e.indexOf(">", t + r.length);
  if (i === -1) return null;
  var s = "</" + r + ">", f = e.indexOf(s, i);
  return f == -1 ? null : [e.slice(t, f + s.length), e.slice(i + 1, f)];
}
var Or = /* @__PURE__ */ function() {
  var e = {};
  return function(t, a) {
    var n = e[a];
    n || (e[a] = n = [
      new RegExp("<(?:\\w+:)?" + a + "\\b[^<>]*>", "g"),
      new RegExp("</(?:\\w+:)?" + a + ">", "g")
    ]), n[0].lastIndex = n[1].lastIndex = 0;
    var i = n[0].exec(t);
    if (!i) return null;
    var s = i.index, f = n[0].lastIndex;
    if (n[1].lastIndex = n[0].lastIndex, i = n[1].exec(t), !i) return null;
    var c = i.index, o = n[1].lastIndex;
    return [t.slice(s, o), t.slice(f, c)];
  };
}(), Sc = /* @__PURE__ */ function() {
  var e = {};
  return function(t, a) {
    var n = [], i = e[a];
    i || (e[a] = i = [
      new RegExp("<(?:\\w+:)?" + a + "\\b[^<>]*>", "g"),
      new RegExp("</(?:\\w+:)?" + a + ">", "g")
    ]), i[0].lastIndex = i[1].lastIndex = 0;
    for (var s; s = i[0].exec(t); ) {
      var f = s.index;
      if (i[1].lastIndex = i[0].lastIndex, s = i[1].exec(t), !s) return null;
      var c = i[1].lastIndex;
      n.push(t.slice(f, c)), i[0].lastIndex = i[1].lastIndex;
    }
    return n.length == 0 ? null : n;
  };
}(), z1 = /* @__PURE__ */ function() {
  var e = {};
  return function(t, a) {
    var n = [], i = e[a];
    i || (e[a] = i = [
      new RegExp("<(?:\\w+:)?" + a + "\\b[^<>]*>", "g"),
      new RegExp("</(?:\\w+:)?" + a + ">", "g")
    ]), i[0].lastIndex = i[1].lastIndex = 0;
    for (var s, f = 0, c = 0; s = i[0].exec(t); ) {
      if (f = s.index, n.push(t.slice(c, f)), c = f, i[1].lastIndex = i[0].lastIndex, s = i[1].exec(t), !s) return null;
      c = i[1].lastIndex, i[0].lastIndex = i[1].lastIndex;
    }
    return n.push(t.slice(c)), n.length == 0 ? "" : n.join("");
  };
}(), $1 = /* @__PURE__ */ function() {
  var e = {};
  return function(t, a) {
    var n = [], i = e[a];
    i || (e[a] = i = [
      new RegExp("<" + a + "\\b[^<>]*>", "ig"),
      new RegExp("</" + a + ">", "ig")
    ]), i[0].lastIndex = i[1].lastIndex = 0;
    for (var s; s = i[0].exec(t); ) {
      var f = s.index;
      if (i[1].lastIndex = i[0].lastIndex, s = i[1].exec(t), !s) return null;
      var c = i[1].lastIndex;
      n.push(t.slice(f, c)), i[0].lastIndex = i[1].lastIndex;
    }
    return n.length == 0 ? null : n;
  };
}();
function xc(e) {
  return e ? e.content && e.type ? va(e.content, !0) : e.data ? Ca(e.data) : e.asNodeBuffer && Ue ? Ca(e.asNodeBuffer().toString("binary")) : e.asBinary ? Ca(e.asBinary()) : e._data && e._data.getContent ? Ca(va(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null;
}
function Ac(e) {
  if (!e) return null;
  if (e.data) return qn(e.data);
  if (e.asNodeBuffer && Ue) return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var r = e._data.getContent();
    return typeof r == "string" ? qn(r) : Array.prototype.slice.call(r);
  }
  return e.content && e.type ? e.content : null;
}
function K1(e) {
  return e && e.name.slice(-4) === ".bin" ? Ac(e) : xc(e);
}
function lt(e, r) {
  for (var t = e.FullPaths || sr(e.files), a = r.toLowerCase().replace(/[\/]/g, "\\"), n = a.replace(/\\/g, "/"), i = 0; i < t.length; ++i) {
    var s = t[i].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (a == s || n == s) return e.files ? e.files[t[i]] : e.FileIndex[i];
  }
  return null;
}
function ms(e, r) {
  var t = lt(e, r);
  if (t == null) throw new Error("Cannot find file " + r + " in zip");
  return t;
}
function kr(e, r, t) {
  if (!t) return K1(ms(e, r));
  if (!r) return null;
  try {
    return kr(e, r);
  } catch {
    return null;
  }
}
function Qr(e, r, t) {
  if (!t) return xc(ms(e, r));
  if (!r) return null;
  try {
    return Qr(e, r);
  } catch {
    return null;
  }
}
function j1(e, r, t) {
  return Ac(ms(e, r));
}
function uf(e) {
  for (var r = e.FullPaths || sr(e.files), t = [], a = 0; a < r.length; ++a) r[a].slice(-1) != "/" && t.push(r[a].replace(/^Root Entry[\/]/, ""));
  return t.sort();
}
function De(e, r, t) {
  if (e.FullPaths) {
    if (Array.isArray(t) && typeof t[0] == "string" && (t = t.join("")), typeof t == "string") {
      var a;
      return Ue ? a = Rt(t) : a = t1(t), Ie.utils.cfb_add(e, r, a);
    }
    Ie.utils.cfb_add(e, r, t);
  } else e.file(r, t);
}
function ps() {
  return Ie.utils.cfb_new();
}
function Fc(e, r) {
  switch (r.type) {
    case "base64":
      return Ie.read(e, { type: "base64" });
    case "binary":
      return Ie.read(e, { type: "binary" });
    case "buffer":
    case "array":
      return Ie.read(e, { type: "buffer" });
  }
  throw new Error("Unrecognized type " + r.type);
}
function ba(e, r) {
  if (e.charAt(0) == "/") return e.slice(1);
  var t = r.split("/");
  r.slice(-1) != "/" && t.pop();
  for (var a = e.split("/"); a.length !== 0; ) {
    var n = a.shift();
    n === ".." ? t.pop() : n !== "." && t.push(n);
  }
  return t.join("/");
}
var hr = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, Ic = /\s([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g, hf = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?<>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'"<>\s=]+))*\s*[\/\?]?>/mg, Y1 = /<[^<>]*>/g, Dr = /* @__PURE__ */ hr.match(hf) ? hf : Y1, Z1 = /<\w*:/, J1 = /<(\/?)\w+:/;
function ke(e, r, t) {
  for (var a = vr(), n = 0, i = 0; n !== e.length && !((i = e.charCodeAt(n)) === 32 || i === 10 || i === 13); ++n) ;
  if (r || (a[0] = e.slice(0, n)), n === e.length) return a;
  var s = e.match(Ic), f = 0, c = "", o = 0, l = "", d = "", u = 1;
  if (s) for (o = 0; o != s.length; ++o) {
    for (d = s[o].slice(1), i = 0; i != d.length && d.charCodeAt(i) !== 61; ++i) ;
    for (l = d.slice(0, i).trim(); d.charCodeAt(i + 1) == 32; ) ++i;
    for (u = (n = d.charCodeAt(i + 1)) == 34 || n == 39 ? 1 : 0, c = d.slice(i + 1 + u, d.length - u), f = 0; f != l.length && l.charCodeAt(f) !== 58; ++f) ;
    if (f === l.length) {
      if (l.indexOf("_") > 0 && (l = l.slice(0, l.indexOf("_"))), !ar(a, l, c)) continue;
      ar(a, l.toLowerCase(), c);
    } else {
      var h = (f === 5 && l.slice(0, 5) === "xmlns" ? "xmlns" : "") + l.slice(f + 1);
      if (a[h] && l.slice(f - 3, f) == "ext" || !ar(a, h, c)) continue;
      ar(a, h.toLowerCase(), c);
    }
  }
  return a;
}
function q1(e, r, t) {
  for (var a = {}, n = 0, i = 0; n !== e.length && !((i = e.charCodeAt(n)) === 32 || i === 10 || i === 13); ++n) ;
  if (n === e.length) return a;
  var s = e.match(Ic), f = "", c = 0, o = "", l = "", d = 1;
  if (s) for (c = 0; c != s.length; ++c) {
    for (l = s[c].slice(1), i = 0; i != l.length && l.charCodeAt(i) !== 61; ++i) ;
    for (o = l.slice(0, i).trim(); l.charCodeAt(i + 1) == 32; ) ++i;
    d = (n = l.charCodeAt(i + 1)) == 34 || n == 39 ? 1 : 0, f = l.slice(i + 1 + d, l.length - d), o.indexOf("_") > 0 && (o = o.slice(0, o.indexOf("_"))), a[o] = f, a[o.toLowerCase()] = f;
  }
  return a;
}
function vt(e) {
  return e.replace(J1, "<$1");
}
var Cc = {
  "&quot;": '"',
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
}, gs = /* @__PURE__ */ mi(Cc), ze = /* @__PURE__ */ function() {
  var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig, r = /_x([\da-fA-F]{4})_/ig;
  function t(a) {
    var n = a + "", i = n.indexOf("<![CDATA[");
    if (i == -1) return n.replace(e, function(f, c) {
      return Cc[f] || String.fromCharCode(parseInt(c, f.indexOf("x") > -1 ? 16 : 10)) || f;
    }).replace(r, function(f, c) {
      return String.fromCharCode(parseInt(c, 16));
    });
    var s = n.indexOf("]]>");
    return t(n.slice(0, i)) + n.slice(i + 9, s) + t(n.slice(s + 3));
  }
  return function(n, i) {
    var s = t(n);
    return i ? s.replace(/\r\n/g, `
`) : s;
  };
}(), _s = /[&<>'"]/g, Q1 = /[\u0000-\u0008\u000b-\u001f\uFFFE-\uFFFF]/g;
function Le(e) {
  var r = e + "";
  return r.replace(_s, function(t) {
    return gs[t];
  }).replace(Q1, function(t) {
    return "_x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + "_";
  });
}
function df(e) {
  return Le(e).replace(/ /g, "_x0020_");
}
var bc = /[\u0000-\u001f]/g;
function Ja(e) {
  var r = e + "";
  return r.replace(_s, function(t) {
    return gs[t];
  }).replace(/\n/g, "<br/>").replace(bc, function(t) {
    return "&#x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
function eu(e) {
  var r = e + "";
  return r.replace(_s, function(t) {
    return gs[t];
  }).replace(bc, function(t) {
    return "&#x" + t.charCodeAt(0).toString(16).toUpperCase() + ";";
  });
}
var vf = /* @__PURE__ */ function() {
  var e = /&#(\d+);/g;
  function r(t, a) {
    return String.fromCharCode(parseInt(a, 10));
  }
  return function(a) {
    return a.replace(e, r);
  };
}();
function ru(e) {
  return e.replace(/(\r\n|[\r\n])/g, "&#10;");
}
function Je(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
      return !0;
    case 0:
    case !1:
    case "0":
    case "false":
      return !1;
  }
  return !1;
}
function bi(e) {
  for (var r = "", t = 0, a = 0, n = 0, i = 0, s = 0, f = 0; t < e.length; ) {
    if (a = e.charCodeAt(t++), a < 128) {
      r += String.fromCharCode(a);
      continue;
    }
    if (n = e.charCodeAt(t++), a > 191 && a < 224) {
      s = (a & 31) << 6, s |= n & 63, r += String.fromCharCode(s);
      continue;
    }
    if (i = e.charCodeAt(t++), a < 240) {
      r += String.fromCharCode((a & 15) << 12 | (n & 63) << 6 | i & 63);
      continue;
    }
    s = e.charCodeAt(t++), f = ((a & 7) << 18 | (n & 63) << 12 | (i & 63) << 6 | s & 63) - 65536, r += String.fromCharCode(55296 + (f >>> 10 & 1023)), r += String.fromCharCode(56320 + (f & 1023));
  }
  return r;
}
function mf(e) {
  var r = Zt(2 * e.length), t, a, n = 1, i = 0, s = 0, f;
  for (a = 0; a < e.length; a += n)
    n = 1, (f = e.charCodeAt(a)) < 128 ? t = f : f < 224 ? (t = (f & 31) * 64 + (e.charCodeAt(a + 1) & 63), n = 2) : f < 240 ? (t = (f & 15) * 4096 + (e.charCodeAt(a + 1) & 63) * 64 + (e.charCodeAt(a + 2) & 63), n = 3) : (n = 4, t = (f & 7) * 262144 + (e.charCodeAt(a + 1) & 63) * 4096 + (e.charCodeAt(a + 2) & 63) * 64 + (e.charCodeAt(a + 3) & 63), t -= 65536, s = 55296 + (t >>> 10 & 1023), t = 56320 + (t & 1023)), s !== 0 && (r[i++] = s & 255, r[i++] = s >>> 8, s = 0), r[i++] = t % 256, r[i++] = t >>> 8;
  return r.slice(0, i).toString("ucs2");
}
function pf(e) {
  return Rt(e, "binary").toString("utf8");
}
var Wn = "foo bar bazâð£", Qe = Ue && (/* @__PURE__ */ pf(Wn) == /* @__PURE__ */ bi(Wn) && pf || /* @__PURE__ */ mf(Wn) == /* @__PURE__ */ bi(Wn) && mf) || bi, Ct = Ue ? function(e) {
  return Rt(e, "utf8").toString("binary");
} : function(e) {
  for (var r = [], t = 0, a = 0, n = 0; t < e.length; )
    switch (a = e.charCodeAt(t++), !0) {
      case a < 128:
        r.push(String.fromCharCode(a));
        break;
      case a < 2048:
        r.push(String.fromCharCode(192 + (a >> 6))), r.push(String.fromCharCode(128 + (a & 63)));
        break;
      case (a >= 55296 && a < 57344):
        a -= 55296, n = e.charCodeAt(t++) - 56320 + (a << 10), r.push(String.fromCharCode(240 + (n >> 18 & 7))), r.push(String.fromCharCode(144 + (n >> 12 & 63))), r.push(String.fromCharCode(128 + (n >> 6 & 63))), r.push(String.fromCharCode(128 + (n & 63)));
        break;
      default:
        r.push(String.fromCharCode(224 + (a >> 12))), r.push(String.fromCharCode(128 + (a >> 6 & 63))), r.push(String.fromCharCode(128 + (a & 63)));
    }
  return r.join("");
}, Oc = /* @__PURE__ */ function() {
  var e = [
    ["nbsp", " "],
    ["middot", "·"],
    ["quot", '"'],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["amp", "&"]
  ].map(function(r) {
    return [new RegExp("&" + r[0] + ";", "ig"), r[1]];
  });
  return function(t) {
    for (var a = t.replace(/^[\t\n\r ]+/, "").replace(/(^|[^\t\n\r ])[\t\n\r ]+$/, "$1").replace(/>\s+/g, ">").replace(/\b\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^<>]*>/g, ""), n = 0; n < e.length; ++n) a = a.replace(e[n][0], e[n][1]);
    return a;
  };
}(), tu = /<\/?(?:vt:)?variant>/g, au = /<(?:vt:)([^<"'>]*)>([\s\S]*)</;
function gf(e, r) {
  var t = ke(e), a = Sc(e, t.baseType) || [], n = [];
  if (a.length != t.size) {
    if (r.WTF) throw new Error("unexpected vector length " + a.length + " != " + t.size);
    return n;
  }
  return a.forEach(function(i) {
    var s = i.replace(tu, "").match(au);
    s && n.push({ v: Qe(s[2]), t: s[1] });
  }), n;
}
var Nc = /(^\s|\s$|\n)/;
function Rr(e, r) {
  return "<" + e + (r.match(Nc) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e + ">";
}
function pa(e) {
  return sr(e).map(function(r) {
    return " " + r + '="' + e[r] + '"';
  }).join("");
}
function te(e, r, t) {
  return "<" + e + (t != null ? pa(t) : "") + (r != null ? (r.match(Nc) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e : "/") + ">";
}
function Yi(e, r) {
  try {
    return e.toISOString().replace(/\.\d*/, "");
  } catch (t) {
    if (r) throw t;
  }
  return "";
}
function nu(e, r) {
  switch (typeof e) {
    case "string":
      var t = te("vt:lpwstr", Le(e));
      return t = t.replace(/&quot;/g, "_x0022_"), t;
    case "number":
      return te((e | 0) == e ? "vt:i4" : "vt:r8", Le(String(e)));
    case "boolean":
      return te("vt:bool", e ? "true" : "false");
  }
  if (e instanceof Date) return te("vt:filetime", Yi(e));
  throw new Error("Unable to serialize " + e);
}
function gi(e) {
  if (Ue && /*::typeof Buffer !== "undefined" && d != null && d instanceof Buffer &&*/
  Buffer.isBuffer(e)) return e.toString("utf8");
  if (typeof e == "string") return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array) return Qe(bt(cs(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var Tr = /<([\/]?)([^\s?><!\/:"]*:|)([^\s?<>:\/"]+)(?:\s+[^<>=?"'\s]+="[^"]*?")*\s*[\/]?>/mg, Ar = {
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
  CT: "http://schemas.openxmlformats.org/package/2006/content-types",
  RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
  TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
  dc: "http://purl.org/dc/elements/1.1/",
  dcterms: "http://purl.org/dc/terms/",
  dcmitype: "http://purl.org/dc/dcmitype/",
  r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
  vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
  xsi: "http://www.w3.org/2001/XMLSchema-instance",
  xsd: "http://www.w3.org/2001/XMLSchema"
}, Ta = [
  "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
  "http://purl.oclc.org/ooxml/spreadsheetml/main",
  "http://schemas.microsoft.com/office/excel/2006/main",
  "http://schemas.microsoft.com/office/excel/2006/2"
], Sr = {
  o: "urn:schemas-microsoft-com:office:office",
  x: "urn:schemas-microsoft-com:office:excel",
  ss: "urn:schemas-microsoft-com:office:spreadsheet",
  dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
  mv: "http://macVmlSchemaUri",
  v: "urn:schemas-microsoft-com:vml",
  html: "http://www.w3.org/TR/REC-html40"
};
function iu(e, r) {
  for (var t = 1 - 2 * (e[r + 7] >>> 7), a = ((e[r + 7] & 127) << 4) + (e[r + 6] >>> 4 & 15), n = e[r + 6] & 15, i = 5; i >= 0; --i) n = n * 256 + e[r + i];
  return a == 2047 ? n == 0 ? t * (1 / 0) : NaN : (a == 0 ? a = -1022 : (a -= 1023, n += Math.pow(2, 52)), t * Math.pow(2, a - 52) * n);
}
function su(e, r, t) {
  var a = (r < 0 || 1 / r == -1 / 0 ? 1 : 0) << 7, n = 0, i = 0, s = a ? -r : r;
  isFinite(s) ? s == 0 ? n = i = 0 : (n = Math.floor(Math.log(s) / Math.LN2), i = s * Math.pow(2, 52 - n), n <= -1023 && (!isFinite(i) || i < Math.pow(2, 52)) ? n = -1022 : (i -= Math.pow(2, 52), n += 1023)) : (n = 2047, i = isNaN(r) ? 26985 : 0);
  for (var f = 0; f <= 5; ++f, i /= 256) e[t + f] = i & 255;
  e[t + 6] = (n & 15) << 4 | i & 15, e[t + 7] = n >> 4 | a;
}
var _f = function(e) {
  for (var r = [], t = 10240, a = 0; a < e[0].length; ++a) if (e[0][a]) for (var n = 0, i = e[0][a].length; n < i; n += t) r.push.apply(r, e[0][a].slice(n, n + t));
  return r;
}, wf = Ue ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(r) {
    return Buffer.isBuffer(r) ? r : Rt(r);
  })) : _f(e);
} : _f, kf = function(e, r, t) {
  for (var a = [], n = r; n < t; n += 2) a.push(String.fromCharCode(Ut(e, n)));
  return a.join("").replace(et, "");
}, _i = Ue ? function(e, r, t) {
  return !Buffer.isBuffer(e) || !ln ? kf(e, r, t) : e.toString("utf16le", r, t).replace(et, "");
} : kf, Tf = function(e, r, t) {
  for (var a = [], n = r; n < r + t; ++n) a.push(("0" + e[n].toString(16)).slice(-2));
  return a.join("");
}, Rc = Ue ? function(e, r, t) {
  return Buffer.isBuffer(e) ? e.toString("hex", r, r + t) : Tf(e, r, t);
} : Tf, Ef = function(e, r, t) {
  for (var a = [], n = r; n < t; n++) a.push(String.fromCharCode(Ia(e, n)));
  return a.join("");
}, Xa = Ue ? function(r, t, a) {
  return Buffer.isBuffer(r) ? r.toString("utf8", t, a) : Ef(r, t, a);
} : Ef, Dc = function(e, r) {
  var t = br(e, r);
  return t > 0 ? Xa(e, r + 4, r + 4 + t - 1) : "";
}, ws = Dc, Pc = function(e, r) {
  var t = br(e, r);
  return t > 0 ? Xa(e, r + 4, r + 4 + t - 1) : "";
}, ks = Pc, Lc = function(e, r) {
  var t = 2 * br(e, r);
  return t > 0 ? Xa(e, r + 4, r + 4 + t - 1) : "";
}, Ts = Lc, Mc = function(r, t) {
  var a = br(r, t);
  return a > 0 ? _i(r, t + 4, t + 4 + a) : "";
}, Es = Mc, Bc = function(e, r) {
  var t = br(e, r);
  return t > 0 ? Xa(e, r + 4, r + 4 + t) : "";
}, ys = Bc, Uc = function(e, r) {
  return iu(e, r);
}, ni = Uc, Ss = function(r) {
  return Array.isArray(r) || typeof Uint8Array < "u" && r instanceof Uint8Array;
};
Ue && (ws = function(r, t) {
  if (!Buffer.isBuffer(r)) return Dc(r, t);
  var a = r.readUInt32LE(t);
  return a > 0 ? r.toString("utf8", t + 4, t + 4 + a - 1) : "";
}, ks = function(r, t) {
  if (!Buffer.isBuffer(r)) return Pc(r, t);
  var a = r.readUInt32LE(t);
  return a > 0 ? r.toString("utf8", t + 4, t + 4 + a - 1) : "";
}, Ts = function(r, t) {
  if (!Buffer.isBuffer(r) || !ln) return Lc(r, t);
  var a = 2 * r.readUInt32LE(t);
  return r.toString("utf16le", t + 4, t + 4 + a - 1);
}, Es = function(r, t) {
  if (!Buffer.isBuffer(r) || !ln) return Mc(r, t);
  var a = r.readUInt32LE(t);
  return r.toString("utf16le", t + 4, t + 4 + a);
}, ys = function(r, t) {
  if (!Buffer.isBuffer(r)) return Bc(r, t);
  var a = r.readUInt32LE(t);
  return r.toString("utf8", t + 4, t + 4 + a);
}, ni = function(r, t) {
  return Buffer.isBuffer(r) ? r.readDoubleLE(t) : Uc(r, t);
}, Ss = function(r) {
  return Buffer.isBuffer(r) || Array.isArray(r) || typeof Uint8Array < "u" && r instanceof Uint8Array;
});
function Wc() {
  _i = function(e, r, t) {
    return Be.utils.decode(1200, e.slice(r, t)).replace(et, "");
  }, Xa = function(e, r, t) {
    return Be.utils.decode(65001, e.slice(r, t));
  }, ws = function(e, r) {
    var t = br(e, r);
    return t > 0 ? Be.utils.decode(ha, e.slice(r + 4, r + 4 + t - 1)) : "";
  }, ks = function(e, r) {
    var t = br(e, r);
    return t > 0 ? Be.utils.decode(xr, e.slice(r + 4, r + 4 + t - 1)) : "";
  }, Ts = function(e, r) {
    var t = 2 * br(e, r);
    return t > 0 ? Be.utils.decode(1200, e.slice(r + 4, r + 4 + t - 1)) : "";
  }, Es = function(e, r) {
    var t = br(e, r);
    return t > 0 ? Be.utils.decode(1200, e.slice(r + 4, r + 4 + t)) : "";
  }, ys = function(e, r) {
    var t = br(e, r);
    return t > 0 ? Be.utils.decode(65001, e.slice(r + 4, r + 4 + t)) : "";
  };
}
typeof Be < "u" && Wc();
var Ia = function(e, r) {
  return e[r];
}, Ut = function(e, r) {
  return e[r + 1] * 256 + e[r];
}, fu = function(e, r) {
  var t = e[r + 1] * 256 + e[r];
  return t < 32768 ? t : (65535 - t + 1) * -1;
}, br = function(e, r) {
  return e[r + 3] * (1 << 24) + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r];
}, ia = function(e, r) {
  return e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r];
}, cu = function(e, r) {
  return e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3];
};
function qa(e, r) {
  var t = "", a, n, i = [], s, f, c, o;
  switch (r) {
    case "dbcs":
      if (o = this.l, Ue && Buffer.isBuffer(this) && ln) t = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else for (c = 0; c < e; ++c)
        t += String.fromCharCode(Ut(this, o)), o += 2;
      e *= 2;
      break;
    case "utf8":
      t = Xa(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, t = _i(this, this.l, this.l + e);
      break;
    case "wstr":
      if (typeof Be < "u") t = Be.utils.decode(xr, this.slice(this.l, this.l + 2 * e));
      else return qa.call(this, e, "dbcs");
      e = 2 * e;
      break;
    case "lpstr-ansi":
      t = ws(this, this.l), e = 4 + br(this, this.l);
      break;
    case "lpstr-cp":
      t = ks(this, this.l), e = 4 + br(this, this.l);
      break;
    case "lpwstr":
      t = Ts(this, this.l), e = 4 + 2 * br(this, this.l);
      break;
    case "lpp4":
      e = 4 + br(this, this.l), t = Es(this, this.l), e & 2 && (e += 2);
      break;
    case "8lpp4":
      e = 4 + br(this, this.l), t = ys(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, t = ""; (s = Ia(this, this.l + e++)) !== 0; ) i.push(Ya(s));
      t = i.join("");
      break;
    case "_wstr":
      for (e = 0, t = ""; (s = Ut(this, this.l + e)) !== 0; )
        i.push(Ya(s)), e += 2;
      e += 2, t = i.join("");
      break;
    case "dbcs-cont":
      for (t = "", o = this.l, c = 0; c < e; ++c) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return s = Ia(this, o), this.l = o + 1, f = qa.call(this, e - c, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(Ya(Ut(this, o))), o += 2;
      }
      t = i.join(""), e *= 2;
      break;
    case "cpstr":
      if (typeof Be < "u") {
        t = Be.utils.decode(xr, this.slice(this.l, this.l + e));
        break;
      }
    case "sbcs-cont":
      for (t = "", o = this.l, c = 0; c != e; ++c) {
        if (this.lens && this.lens.indexOf(o) !== -1)
          return s = Ia(this, o), this.l = o + 1, f = qa.call(this, e - c, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + f;
        i.push(Ya(Ia(this, o))), o += 1;
      }
      t = i.join("");
      break;
    default:
      switch (e) {
        case 1:
          return a = Ia(this, this.l), this.l++, a;
        case 2:
          return a = (r === "i" ? fu : Ut)(this, this.l), this.l += 2, a;
        case 4:
        case -4:
          return r === "i" || !(this[this.l + 3] & 128) ? (a = (e > 0 ? ia : cu)(this, this.l), this.l += 4, a) : (n = br(this, this.l), this.l += 4, n);
        case 8:
        case -8:
          if (r === "f")
            return e == 8 ? n = ni(this, this.l) : n = ni([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, n;
          e = 8;
        case 16:
          t = Rc(this, this.l, e);
          break;
      }
  }
  return this.l += e, t;
}
var ou = function(e, r, t) {
  e[t] = r & 255, e[t + 1] = r >>> 8 & 255, e[t + 2] = r >>> 16 & 255, e[t + 3] = r >>> 24 & 255;
}, lu = function(e, r, t) {
  e[t] = r & 255, e[t + 1] = r >> 8 & 255, e[t + 2] = r >> 16 & 255, e[t + 3] = r >> 24 & 255;
}, uu = function(e, r, t) {
  e[t] = r & 255, e[t + 1] = r >>> 8 & 255;
};
function hu(e, r, t) {
  var a = 0, n = 0;
  if (t === "dbcs") {
    for (n = 0; n != r.length; ++n) uu(this, r.charCodeAt(n), this.l + 2 * n);
    a = 2 * r.length;
  } else if (t === "sbcs" || t == "cpstr")
    if (typeof Be < "u" && ha == 874) {
      for (n = 0; n != r.length; ++n) {
        var i = Be.utils.encode(ha, r.charAt(n));
        this[this.l + n] = i[0];
      }
      a = r.length;
    } else if (typeof Be < "u" && t == "cpstr") {
      if (i = Be.utils.encode(xr, r), i.length == r.length)
        for (n = 0; n < r.length; ++n) i[n] == 0 && r.charCodeAt(n) != 0 && (i[n] = 95);
      if (i.length == 2 * r.length)
        for (n = 0; n < r.length; ++n) i[2 * n] == 0 && i[2 * n + 1] == 0 && r.charCodeAt(n) != 0 && (i[2 * n] = 95);
      for (n = 0; n < i.length; ++n) this[this.l + n] = i[n];
      a = i.length;
    } else {
      for (r = r.replace(/[^\x00-\x7F]/g, "_"), n = 0; n != r.length; ++n) this[this.l + n] = r.charCodeAt(n) & 255;
      a = r.length;
    }
  else if (t === "hex") {
    for (; n < e; ++n)
      this[this.l++] = parseInt(r.slice(2 * n, 2 * n + 2), 16) || 0;
    return this;
  } else if (t === "utf16le") {
    var s = Math.min(this.l + e, this.length);
    for (n = 0; n < Math.min(r.length, e); ++n) {
      var f = r.charCodeAt(n);
      this[this.l++] = f & 255, this[this.l++] = f >> 8;
    }
    for (; this.l < s; ) this[this.l++] = 0;
    return this;
  } else switch (e) {
    case 1:
      a = 1, this[this.l] = r & 255;
      break;
    case 2:
      a = 2, this[this.l] = r & 255, r >>>= 8, this[this.l + 1] = r & 255;
      break;
    case 3:
      a = 3, this[this.l] = r & 255, r >>>= 8, this[this.l + 1] = r & 255, r >>>= 8, this[this.l + 2] = r & 255;
      break;
    case 4:
      a = 4, ou(this, r, this.l);
      break;
    case 8:
      if (a = 8, t === "f") {
        su(this, r, this.l);
        break;
      }
    case 16:
      break;
    case -4:
      a = 4, lu(this, r, this.l);
      break;
  }
  return this.l += a, this;
}
function Hc(e, r) {
  var t = Rc(this, this.l, e.length >> 1);
  if (t !== e) throw new Error(r + "Expected " + e + " saw " + t);
  this.l += e.length >> 1;
}
function yr(e, r) {
  e.l = r, e.read_shift = /*::(*/
  qa, e.chk = Hc, e.write_shift = hu;
}
function jr(e, r) {
  e.l += r;
}
function H(e) {
  var r = Zt(e);
  return yr(r, 0), r;
}
function $t(e, r, t) {
  if (e) {
    var a, n, i;
    yr(e, e.l || 0);
    for (var s = e.length, f = 0, c = 0; e.l < s; ) {
      f = e.read_shift(1), f & 128 && (f = (f & 127) + ((e.read_shift(1) & 127) << 7));
      var o = wn[f] || wn[65535];
      for (a = e.read_shift(1), i = a & 127, n = 1; n < 4 && a & 128; ++n) i += ((a = e.read_shift(1)) & 127) << 7 * n;
      c = e.l + i;
      var l = o.f && o.f(e, i, t);
      if (e.l = c, r(l, o, f)) return;
    }
  }
}
function $r() {
  var e = [], r = Ue ? 16384 : 2048;
  Ue && H(r).copy;
  var t = function(l) {
    var d = H(l);
    return yr(d, 0), d;
  }, a = t(r), n = function() {
    a && (a.l && (a.length > a.l && (a = a.slice(0, a.l), a.l = a.length), a.length > 0 && e.push(a)), a = null);
  }, i = function(l) {
    return a && l < a.length - a.l ? a : (n(), a = t(Math.max(l + 1, r)));
  }, s = function() {
    return n(), mr(e);
  }, f = function() {
    return n(), e;
  }, c = function(l) {
    n(), a = l, a.l == null && (a.l = a.length), i(r);
  };
  return { next: i, push: c, end: s, _bufs: e, end2: f };
}
function Z(e, r, t, a) {
  var n = +r, i;
  if (!isNaN(n)) {
    a || (a = wn[n].p || (t || []).length || 0), i = 1 + (n >= 128 ? 1 : 0) + 1, a >= 128 && ++i, a >= 16384 && ++i, a >= 2097152 && ++i;
    var s = e.next(i);
    n <= 127 ? s.write_shift(1, n) : (s.write_shift(1, (n & 127) + 128), s.write_shift(1, n >> 7));
    for (var f = 0; f != 4; ++f)
      if (a >= 128)
        s.write_shift(1, (a & 127) + 128), a >>= 7;
      else {
        s.write_shift(1, a);
        break;
      }
    /*:: length != null &&*/
    a > 0 && Ss(t) && e.push(t);
  }
}
function Qa(e, r, t) {
  var a = je(e);
  if (r.s ? (a.cRel && (a.c += r.s.c), a.rRel && (a.r += r.s.r)) : (a.cRel && (a.c += r.c), a.rRel && (a.r += r.r)), !t || t.biff < 12) {
    for (; a.c >= 256; ) a.c -= 256;
    for (; a.r >= 65536; ) a.r -= 65536;
  }
  return a;
}
function yf(e, r, t) {
  var a = je(e);
  return a.s = Qa(a.s, r.s, t), a.e = Qa(a.e, r.s, t), a;
}
function en(e, r) {
  if (e.cRel && e.c < 0)
    for (e = je(e); e.c < 0; ) e.c += r > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = je(e); e.r < 0; ) e.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
  var t = He(e);
  return !e.cRel && e.cRel != null && (t = mu(t)), !e.rRel && e.rRel != null && (t = du(t)), t;
}
function Oi(e, r) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + Ne(e.s.c) + ":" + (e.e.cRel ? "" : "$") + Ne(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (r.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + Xe(e.s.r) + ":" + (e.e.rRel ? "" : "$") + Xe(e.e.r) : en(e.s, r.biff) + ":" + en(e.e, r.biff);
}
function xs(e) {
  return parseInt(vu(e), 10) - 1;
}
function Xe(e) {
  return "" + (e + 1);
}
function du(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function vu(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function As(e) {
  for (var r = pu(e), t = 0, a = 0; a !== r.length; ++a) t = 26 * t + r.charCodeAt(a) - 64;
  return t - 1;
}
function Ne(e) {
  if (e < 0) throw new Error("invalid column " + e);
  var r = "";
  for (++e; e; e = Math.floor((e - 1) / 26)) r = String.fromCharCode((e - 1) % 26 + 65) + r;
  return r;
}
function mu(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function pu(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function gu(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function er(e) {
  for (var r = 0, t = 0, a = 0; a < e.length; ++a) {
    var n = e.charCodeAt(a);
    n >= 48 && n <= 57 ? r = 10 * r + (n - 48) : n >= 65 && n <= 90 && (t = 26 * t + (n - 64));
  }
  return { c: t - 1, r: r - 1 };
}
function He(e) {
  for (var r = e.c + 1, t = ""; r; r = (r - 1) / 26 | 0) t = String.fromCharCode((r - 1) % 26 + 65) + t;
  return t + (e.r + 1);
}
function Er(e) {
  var r = e.indexOf(":");
  return r == -1 ? { s: er(e), e: er(e) } : { s: er(e.slice(0, r)), e: er(e.slice(r + 1)) };
}
function Me(e, r) {
  return typeof r > "u" || typeof r == "number" ? Me(e.s, e.e) : (typeof e != "string" && (e = He(e)), typeof r != "string" && (r = He(r)), e == r ? e : e + ":" + r);
}
function La(e) {
  var r = Er(e);
  return "$" + Ne(r.s.c) + "$" + Xe(r.s.r) + ":$" + Ne(r.e.c) + "$" + Xe(r.e.r);
}
function dn(e, r) {
  if (!e && !(r && r.biff <= 5 && r.biff >= 2)) throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e.replace(/'/g, "''") + "'" : e;
}
function Ge(e) {
  var r = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, t = 0, a = 0, n = 0, i = e.length;
  for (t = 0; a < i && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a)
    t = 26 * t + n;
  for (r.s.c = --t, t = 0; a < i && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a)
    t = 10 * t + n;
  if (r.s.r = --t, a === i || n != 10)
    return r.e.c = r.s.c, r.e.r = r.s.r, r;
  for (++a, t = 0; a != i && !((n = e.charCodeAt(a) - 64) < 1 || n > 26); ++a)
    t = 26 * t + n;
  for (r.e.c = --t, t = 0; a != i && !((n = e.charCodeAt(a) - 48) < 0 || n > 9); ++a)
    t = 10 * t + n;
  return r.e.r = --t, r;
}
function Sf(e, r) {
  var t = e.t == "d" && r instanceof Date;
  if (e.z != null) try {
    return e.w = at(e.z, t ? or(r) : r);
  } catch {
  }
  try {
    return e.w = at((e.XF || {}).numFmtId || (t ? 14 : 0), t ? or(r) : r);
  } catch {
    return "" + r;
  }
}
function Ot(e, r, t) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && t && t.dateNF && (e.z = t.dateNF), e.t == "e" ? Ir[e.v] || e.v : r == null ? Sf(e, e.v) : Sf(e, r));
}
function ea(e, r) {
  var t = r && r.sheet ? r.sheet : "Sheet1", a = {};
  return a[t] = e, { SheetNames: [t], Sheets: a };
}
function _u(e) {
  var r = {}, t = e || {};
  return t.dense && (r["!data"] = []), r;
}
function Xc(e, r, t) {
  var a = t || {}, n = e ? e["!data"] != null : a.dense, i = e || (n ? { "!data": [] } : {});
  n && !i["!data"] && (i["!data"] = []);
  var s = 0, f = 0;
  if (i && a.origin != null)
    if (typeof a.origin == "number") s = a.origin;
    else {
      var c = typeof a.origin == "string" ? er(a.origin) : a.origin;
      s = c.r, f = c.c;
    }
  var o = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (i["!ref"]) {
    var l = Ge(i["!ref"]);
    o.s.c = l.s.c, o.s.r = l.s.r, o.e.c = Math.max(o.e.c, l.e.c), o.e.r = Math.max(o.e.r, l.e.r), s == -1 && (o.e.r = s = i["!ref"] ? l.e.r + 1 : 0);
  } else
    o.s.c = o.e.c = o.s.r = o.e.r = 0;
  for (var d = [], u = !1, h = 0; h != r.length; ++h)
    if (r[h]) {
      if (!Array.isArray(r[h])) throw new Error("aoa_to_sheet expects an array of arrays");
      var m = s + h;
      n && (i["!data"][m] || (i["!data"][m] = []), d = i["!data"][m]);
      for (var g = r[h], p = 0; p != g.length; ++p)
        if (!(typeof g[p] > "u")) {
          var v = { v: g[p], t: "" }, w = f + p;
          if (o.s.r > m && (o.s.r = m), o.s.c > w && (o.s.c = w), o.e.r < m && (o.e.r = m), o.e.c < w && (o.e.c = w), u = !0, g[p] && typeof g[p] == "object" && !Array.isArray(g[p]) && !(g[p] instanceof Date)) v = g[p];
          else if (Array.isArray(v.v) && (v.f = g[p][1], v.v = v.v[0]), v.v === null)
            if (v.f) v.t = "n";
            else if (a.nullError)
              v.t = "e", v.v = 0;
            else if (a.sheetStubs) v.t = "z";
            else continue;
          else typeof v.v == "number" ? isFinite(v.v) ? v.t = "n" : isNaN(v.v) ? (v.t = "e", v.v = 15) : (v.t = "e", v.v = 7) : typeof v.v == "boolean" ? v.t = "b" : v.v instanceof Date ? (v.z = a.dateNF || Fe[14], a.UTC || (v.v = pi(v.v)), a.cellDates ? (v.t = "d", v.w = at(v.z, or(v.v, a.date1904))) : (v.t = "n", v.v = or(v.v, a.date1904), v.w = at(v.z, v.v))) : v.t = "s";
          if (n)
            d[w] && d[w].z && (v.z = d[w].z), d[w] = v;
          else {
            var _ = Ne(w) + (m + 1);
            i[_] && i[_].z && (v.z = i[_].z), i[_] = v;
          }
        }
    }
  return u && o.s.c < 104e5 && (i["!ref"] = Me(o)), i;
}
function Va(e, r) {
  return Xc(null, e, r);
}
function wu(e) {
  return e.read_shift(4, "i");
}
function kt(e, r) {
  return r || (r = H(4)), r.write_shift(4, e), r;
}
function Kr(e) {
  var r = e.read_shift(4);
  return r === 0 ? "" : e.read_shift(r, "dbcs");
}
function Fr(e, r) {
  var t = !1;
  return r == null && (t = !0, r = H(4 + 2 * e.length)), r.write_shift(4, e.length), e.length > 0 && r.write_shift(0, e, "dbcs"), t ? r.slice(0, r.l) : r;
}
function ku(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function Tu(e, r) {
  return r || (r = H(4)), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function Fs(e, r) {
  var t = e.l, a = e.read_shift(1), n = Kr(e), i = [], s = { t: n, h: n };
  if (a & 1) {
    for (var f = e.read_shift(4), c = 0; c != f; ++c) i.push(ku(e));
    s.r = i;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return e.l = t + r, s;
}
function Eu(e, r) {
  var t = !1;
  return r == null && (t = !0, r = H(15 + 4 * e.t.length)), r.write_shift(1, 0), Fr(e.t, r), t ? r.slice(0, r.l) : r;
}
var yu = Fs;
function Su(e, r) {
  var t = !1;
  return r == null && (t = !0, r = H(23 + 4 * e.t.length)), r.write_shift(1, 1), Fr(e.t, r), r.write_shift(4, 1), Tu({}, r), t ? r.slice(0, r.l) : r;
}
function mt(e) {
  var r = e.read_shift(4), t = e.read_shift(2);
  return t += e.read_shift(1) << 16, e.l++, { c: r, iStyleRef: t };
}
function Ea(e, r) {
  return r == null && (r = H(8)), r.write_shift(-4, e.c), r.write_shift(3, e.iStyleRef || e.s), r.write_shift(1, 0), r;
}
function ya(e) {
  var r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: r };
}
function Sa(e, r) {
  return r == null && (r = H(4)), r.write_shift(3, e.iStyleRef || e.s), r.write_shift(1, 0), r;
}
var xu = Kr, Vc = Fr;
function wi(e) {
  var r = e.read_shift(4);
  return r === 0 || r === 4294967295 ? "" : e.read_shift(r, "dbcs");
}
function vn(e, r) {
  var t = !1;
  return r == null && (t = !0, r = H(127)), r.write_shift(4, e.length > 0 ? e.length : 4294967295), e.length > 0 && r.write_shift(0, e, "dbcs"), t ? r.slice(0, r.l) : r;
}
var Au = Kr, Zi = wi, Is = vn;
function ki(e) {
  var r = e.slice(e.l, e.l + 4), t = r[0] & 1, a = r[0] & 2;
  e.l += 4;
  var n = a === 0 ? ni([0, 0, 0, 0, r[0] & 252, r[1], r[2], r[3]], 0) : ia(r, 0) >> 2;
  return t ? n / 100 : n;
}
function Gc(e, r) {
  r == null && (r = H(4));
  var t = 0, a = 0, n = e * 100;
  if (e == (e | 0) && e >= -536870912 && e < 1 << 29 ? a = 1 : n == (n | 0) && n >= -536870912 && n < 1 << 29 && (a = 1, t = 1), a) r.write_shift(-4, ((t ? n : e) << 2) + (t + 2));
  else throw new Error("unsupported RkNumber " + e);
}
function zc(e) {
  var r = { s: {}, e: {} };
  return r.s.r = e.read_shift(4), r.e.r = e.read_shift(4), r.s.c = e.read_shift(4), r.e.c = e.read_shift(4), r;
}
function Fu(e, r) {
  return r || (r = H(16)), r.write_shift(4, e.s.r), r.write_shift(4, e.e.r), r.write_shift(4, e.s.c), r.write_shift(4, e.e.c), r;
}
var xa = zc, Ga = Fu;
function Vr(e) {
  if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function ga(e, r) {
  return (r || H(8)).write_shift(8, e, "f");
}
function Iu(e) {
  var r = {}, t = e.read_shift(1), a = t >>> 1, n = e.read_shift(1), i = e.read_shift(2, "i"), s = e.read_shift(1), f = e.read_shift(1), c = e.read_shift(1);
  switch (e.l++, a) {
    case 0:
      r.auto = 1;
      break;
    case 1:
      r.index = n;
      var o = fa[n];
      o && (r.rgb = pn(o));
      break;
    case 2:
      r.rgb = pn([s, f, c]);
      break;
    case 3:
      r.theme = n;
      break;
  }
  return i != 0 && (r.tint = i > 0 ? i / 32767 : i / 32768), r;
}
function ii(e, r) {
  if (r || (r = H(8)), !e || e.auto)
    return r.write_shift(4, 0), r.write_shift(4, 0), r;
  e.index != null ? (r.write_shift(1, 2), r.write_shift(1, e.index)) : e.theme != null ? (r.write_shift(1, 6), r.write_shift(1, e.theme)) : (r.write_shift(1, 5), r.write_shift(1, 0));
  var t = e.tint || 0;
  if (t > 0 ? t *= 32767 : t < 0 && (t *= 32768), r.write_shift(2, t), !e.rgb || e.theme != null)
    r.write_shift(2, 0), r.write_shift(1, 0), r.write_shift(1, 0);
  else {
    var a = e.rgb || "FFFFFF";
    typeof a == "number" && (a = ("000000" + a.toString(16)).slice(-6)), r.write_shift(1, parseInt(a.slice(0, 2), 16)), r.write_shift(1, parseInt(a.slice(2, 4), 16)), r.write_shift(1, parseInt(a.slice(4, 6), 16)), r.write_shift(1, 255);
  }
  return r;
}
function Cu(e) {
  var r = e.read_shift(1);
  e.l++;
  var t = {
    fBold: r & 1,
    fItalic: r & 2,
    fUnderline: r & 4,
    fStrikeout: r & 8,
    fOutline: r & 16,
    fShadow: r & 32,
    fCondense: r & 64,
    fExtend: r & 128
  };
  return t;
}
function bu(e, r) {
  r || (r = H(2));
  var t = (e.italic ? 2 : 0) | (e.strike ? 8 : 0) | (e.outline ? 16 : 0) | (e.shadow ? 32 : 0) | (e.condense ? 64 : 0) | (e.extend ? 128 : 0);
  return r.write_shift(1, t), r.write_shift(1, 0), r;
}
function $c(e, r) {
  var t = { 2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE" }, a = e.read_shift(4);
  switch (a) {
    case 0:
      return "";
    case 4294967295:
    case 4294967294:
      return t[e.read_shift(4)] || "";
  }
  if (a > 400) throw new Error("Unsupported Clipboard: " + a.toString(16));
  return e.l -= 4, e.read_shift(0, r == 1 ? "lpstr" : "lpwstr");
}
function Ou(e) {
  return $c(e, 1);
}
function Nu(e) {
  return $c(e, 2);
}
var Cs = 2, tt = 3, Hn = 11, xf = 12, si = 19, Xn = 64, Ru = 65, Du = 71, Pu = 4108, Lu = 4126, Cr = 80, Kc = 81, Mu = [Cr, Kc], Ji = {
  1: { n: "CodePage", t: Cs },
  2: { n: "Category", t: Cr },
  3: { n: "PresentationFormat", t: Cr },
  4: { n: "ByteCount", t: tt },
  5: { n: "LineCount", t: tt },
  6: { n: "ParagraphCount", t: tt },
  7: { n: "SlideCount", t: tt },
  8: { n: "NoteCount", t: tt },
  9: { n: "HiddenCount", t: tt },
  10: { n: "MultimediaClipCount", t: tt },
  11: { n: "ScaleCrop", t: Hn },
  12: {
    n: "HeadingPairs",
    t: Pu
    /* VT_VECTOR | VT_VARIANT */
  },
  13: {
    n: "TitlesOfParts",
    t: Lu
    /* VT_VECTOR | VT_LPSTR */
  },
  14: { n: "Manager", t: Cr },
  15: { n: "Company", t: Cr },
  16: { n: "LinksUpToDate", t: Hn },
  17: { n: "CharacterCount", t: tt },
  19: { n: "SharedDoc", t: Hn },
  22: { n: "HyperlinksChanged", t: Hn },
  23: { n: "AppVersion", t: tt, p: "version" },
  24: { n: "DigSig", t: Ru },
  26: { n: "ContentType", t: Cr },
  27: { n: "ContentStatus", t: Cr },
  28: { n: "Language", t: Cr },
  29: { n: "Version", t: Cr },
  255: {},
  /* [MS-OLEPS] 2.18 */
  2147483648: { n: "Locale", t: si },
  2147483651: { n: "Behavior", t: si },
  1919054434: {}
}, qi = {
  1: { n: "CodePage", t: Cs },
  2: { n: "Title", t: Cr },
  3: { n: "Subject", t: Cr },
  4: { n: "Author", t: Cr },
  5: { n: "Keywords", t: Cr },
  6: { n: "Comments", t: Cr },
  7: { n: "Template", t: Cr },
  8: { n: "LastAuthor", t: Cr },
  9: { n: "RevNumber", t: Cr },
  10: { n: "EditTime", t: Xn },
  11: { n: "LastPrinted", t: Xn },
  12: { n: "CreatedDate", t: Xn },
  13: { n: "ModifiedDate", t: Xn },
  14: { n: "PageCount", t: tt },
  15: { n: "WordCount", t: tt },
  16: { n: "CharCount", t: tt },
  17: { n: "Thumbnail", t: Du },
  18: { n: "Application", t: Cr },
  19: { n: "DocSecurity", t: tt },
  255: {},
  /* [MS-OLEPS] 2.18 */
  2147483648: { n: "Locale", t: si },
  2147483651: { n: "Behavior", t: si },
  1919054434: {}
}, Af = {
  1: "US",
  // United States
  2: "CA",
  // Canada
  3: "",
  // Latin America (except Brazil)
  7: "RU",
  // Russia
  20: "EG",
  // Egypt
  30: "GR",
  // Greece
  31: "NL",
  // Netherlands
  32: "BE",
  // Belgium
  33: "FR",
  // France
  34: "ES",
  // Spain
  36: "HU",
  // Hungary
  39: "IT",
  // Italy
  41: "CH",
  // Switzerland
  43: "AT",
  // Austria
  44: "GB",
  // United Kingdom
  45: "DK",
  // Denmark
  46: "SE",
  // Sweden
  47: "NO",
  // Norway
  48: "PL",
  // Poland
  49: "DE",
  // Germany
  52: "MX",
  // Mexico
  55: "BR",
  // Brazil
  61: "AU",
  // Australia
  64: "NZ",
  // New Zealand
  66: "TH",
  // Thailand
  81: "JP",
  // Japan
  82: "KR",
  // Korea
  84: "VN",
  // Viet Nam
  86: "CN",
  // China
  90: "TR",
  // Turkey
  105: "JS",
  // Ramastan
  213: "DZ",
  // Algeria
  216: "MA",
  // Morocco
  218: "LY",
  // Libya
  351: "PT",
  // Portugal
  354: "IS",
  // Iceland
  358: "FI",
  // Finland
  420: "CZ",
  // Czech Republic
  886: "TW",
  // Taiwan
  961: "LB",
  // Lebanon
  962: "JO",
  // Jordan
  963: "SY",
  // Syria
  964: "IQ",
  // Iraq
  965: "KW",
  // Kuwait
  966: "SA",
  // Saudi Arabia
  971: "AE",
  // United Arab Emirates
  972: "IL",
  // Israel
  974: "QA",
  // Qatar
  981: "IR",
  // Iran
  65535: "US"
  // United States
}, Bu = [
  null,
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
];
function Uu(e) {
  return e.map(function(r) {
    return [r >> 16 & 255, r >> 8 & 255, r & 255];
  });
}
var Wu = /* @__PURE__ */ Uu([
  /* Color Constants */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  /* Overridable Defaults */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  8388608,
  32768,
  128,
  8421376,
  8388736,
  32896,
  12632256,
  8421504,
  10066431,
  10040166,
  16777164,
  13434879,
  6684774,
  16744576,
  26316,
  13421823,
  128,
  16711935,
  16776960,
  65535,
  8388736,
  8388608,
  32896,
  255,
  52479,
  13434879,
  13434828,
  16777113,
  10079487,
  16751052,
  13408767,
  16764057,
  3368703,
  3394764,
  10079232,
  16763904,
  16750848,
  16737792,
  6710937,
  9868950,
  13158,
  3381606,
  13056,
  3355392,
  10040064,
  10040166,
  3355545,
  3355443,
  /* Other entries to appease BIFF8/12 */
  0,
  /* 0x40 icvForeground ?? */
  16777215,
  /* 0x41 icvBackground ?? */
  0,
  /* 0x42 icvFrame ?? */
  0,
  /* 0x43 icv3D ?? */
  0,
  /* 0x44 icv3DText ?? */
  0,
  /* 0x45 icv3DHilite ?? */
  0,
  /* 0x46 icv3DShadow ?? */
  0,
  /* 0x47 icvHilite ?? */
  0,
  /* 0x48 icvCtlText ?? */
  0,
  /* 0x49 icvCtlScrl ?? */
  0,
  /* 0x4A icvCtlInv ?? */
  0,
  /* 0x4B icvCtlBody ?? */
  0,
  /* 0x4C icvCtlFrame ?? */
  0,
  /* 0x4D icvCtlFore ?? */
  0,
  /* 0x4E icvCtlBack ?? */
  0,
  /* 0x4F icvCtlNeutral */
  0,
  /* 0x50 icvInfoBk ?? */
  0
  /* 0x51 icvInfoText ?? */
]), fa = /* @__PURE__ */ je(Wu), Ir = {
  0: "#NULL!",
  7: "#DIV/0!",
  15: "#VALUE!",
  23: "#REF!",
  29: "#NAME?",
  36: "#NUM!",
  42: "#N/A",
  43: "#GETTING_DATA",
  255: "#WTF?"
}, Nr = {
  "#NULL!": 0,
  "#DIV/0!": 7,
  "#VALUE!": 15,
  "#REF!": 23,
  "#NAME?": 29,
  "#NUM!": 36,
  "#N/A": 42,
  "#GETTING_DATA": 43,
  "#WTF?": 255
}, bs = [
  "_xlnm.Consolidate_Area",
  "_xlnm.Auto_Open",
  "_xlnm.Auto_Close",
  "_xlnm.Extract",
  "_xlnm.Database",
  "_xlnm.Criteria",
  "_xlnm.Print_Area",
  "_xlnm.Print_Titles",
  "_xlnm.Recorder",
  "_xlnm.Data_Form",
  "_xlnm.Auto_Activate",
  "_xlnm.Auto_Deactivate",
  "_xlnm.Sheet_Title",
  "_xlnm._FilterDatabase"
], Qi = {
  /* Workbook */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  /* Worksheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  /* Binary Index */
  /* Chartsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  /* Macrosheet */
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  /* Binary Index */
  /* Dialogsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  /* Shared Strings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  /* Styles */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  /* File Properties */
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  /* Custom Data Properties */
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  /* Comments */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  /* Metadata (Stock/Geography and Dynamic Array) */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  /* PivotTable */
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  /* Chart Objects */
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  /* Chart Colors */
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  /* Chart Style */
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  /* Chart Advanced */
  "application/vnd.ms-office.chartex+xml": "TODO",
  /* Calculation Chain */
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  /* Printer Settings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  /* ActiveX */
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  /* Custom Toolbars */
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  /* External Data Connections */
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  /* External Links */
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  /* PivotCache */
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  /* Query Table */
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  /* Shared Workbook */
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  /* Single Cell Table */
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  /* Slicer */
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  /* Sort Map */
  "application/vnd.ms-excel.wsSortMap": "TODO",
  /* Table */
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  /* Themes */
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  /* Theme Override */
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  /* Timeline */
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  /* verify */
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  /* verify */
  /* VBA */
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  /* Volatile Dependencies */
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  /* Control Properties */
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  /* Data Model */
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  /* Survey */
  "application/vnd.ms-excel.Survey+xml": "TODO",
  /* Drawing */
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  /* VML */
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  /* Image */
  "image/png": "TODO",
  sheet: "js"
}, Vn = {
  workbooks: {
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
    xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
    xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
    xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
    xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
  },
  strs: {
    /* Shared Strings */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
    xlsb: "application/vnd.ms-excel.sharedStrings"
  },
  comments: {
    /* Comments */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
    xlsb: "application/vnd.ms-excel.comments"
  },
  sheets: {
    /* Worksheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
    xlsb: "application/vnd.ms-excel.worksheet"
  },
  charts: {
    /* Chartsheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
    xlsb: "application/vnd.ms-excel.chartsheet"
  },
  dialogs: {
    /* Dialogsheet */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
    xlsb: "application/vnd.ms-excel.dialogsheet"
  },
  macros: {
    /* Macrosheet (Excel 4.0 Macros) */
    xlsx: "application/vnd.ms-excel.macrosheet+xml",
    xlsb: "application/vnd.ms-excel.macrosheet"
  },
  metadata: {
    /* Metadata (Stock/Geography and Dynamic Array) */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",
    xlsb: "application/vnd.ms-excel.sheetMetadata"
  },
  styles: {
    /* Styles */
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
    xlsb: "application/vnd.ms-excel.styles"
  }
};
function Os() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
}
function Hu(e) {
  var r = Os();
  if (!e || !e.match) return r;
  var t = {};
  if ((e.match(Dr) || []).forEach(function(a) {
    var n = ke(a);
    switch (n[0].replace(Z1, "<")) {
      case "<?xml":
        break;
      case "<Types":
        r.xmlns = n["xmlns" + (n[0].match(/<(\w+):/) || ["", ""])[1]];
        break;
      case "<Default":
        t[n.Extension.toLowerCase()] = n.ContentType;
        break;
      case "<Override":
        r[Qi[n.ContentType]] !== void 0 && r[Qi[n.ContentType]].push(n.PartName);
        break;
    }
  }), r.xmlns !== Ar.CT) throw new Error("Unknown Namespace: " + r.xmlns);
  return r.calcchain = r.calcchains.length > 0 ? r.calcchains[0] : "", r.sst = r.strs.length > 0 ? r.strs[0] : "", r.style = r.styles.length > 0 ? r.styles[0] : "", r.defaults = t, delete r.calcchains, r;
}
function jc(e, r, t) {
  var a = b1(Qi), n = [], i;
  n[n.length] = hr, n[n.length] = te("Types", null, {
    xmlns: Ar.CT,
    "xmlns:xsd": Ar.xsd,
    "xmlns:xsi": Ar.xsi
  }), n = n.concat([
    ["xml", "application/xml"],
    ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
    ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
    ["data", "application/vnd.openxmlformats-officedocument.model+data"],
    /* from test files */
    ["bmp", "image/bmp"],
    ["png", "image/png"],
    ["gif", "image/gif"],
    ["emf", "image/x-emf"],
    ["wmf", "image/x-wmf"],
    ["jpg", "image/jpeg"],
    ["jpeg", "image/jpeg"],
    ["tif", "image/tiff"],
    ["tiff", "image/tiff"],
    ["pdf", "application/pdf"],
    ["rels", "application/vnd.openxmlformats-package.relationships+xml"]
  ].map(function(o) {
    return te("Default", null, { Extension: o[0], ContentType: o[1] });
  }));
  var s = function(o) {
    e[o] && e[o].length > 0 && (i = e[o][0], n[n.length] = te("Override", null, {
      PartName: (i[0] == "/" ? "" : "/") + i,
      ContentType: Vn[o][r.bookType] || Vn[o].xlsx
    }));
  }, f = function(o) {
    (e[o] || []).forEach(function(l) {
      n[n.length] = te("Override", null, {
        PartName: (l[0] == "/" ? "" : "/") + l,
        ContentType: Vn[o][r.bookType] || Vn[o].xlsx
      });
    });
  }, c = function(o) {
    (e[o] || []).forEach(function(l) {
      n[n.length] = te("Override", null, {
        PartName: (l[0] == "/" ? "" : "/") + l,
        ContentType: a[o][0]
      });
    });
  };
  return s("workbooks"), f("sheets"), f("charts"), c("themes"), ["strs", "styles"].forEach(s), ["coreprops", "extprops", "custprops"].forEach(c), c("vba"), c("comments"), c("threadedcomments"), c("drawings"), f("metadata"), c("people"), n.length > 2 && (n[n.length] = "</Types>", n[1] = n[1].replace("/>", ">")), n.join("");
}
var We = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
  ],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  CONN: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/connections",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function mn(e) {
  var r = e.lastIndexOf("/");
  return e.slice(0, r + 1) + "_rels/" + e.slice(r + 1) + ".rels";
}
function rn(e, r) {
  var t = vr();
  if (t["!id"] = vr(), !e) return t;
  r.charAt(0) !== "/" && (r = "/" + r);
  var a = vr();
  return (e.match(Dr) || []).forEach(function(n) {
    var i = ke(n);
    if (i[0] === "<Relationship") {
      var s = {};
      s.Type = i.Type, s.Target = ze(i.Target), s.Id = i.Id, i.TargetMode && (s.TargetMode = i.TargetMode);
      var f = i.TargetMode === "External" ? i.Target : ba(i.Target, r);
      ar(t, f, s), ar(a, i.Id, s);
    }
  }), t["!id"] = a, t;
}
function Na(e) {
  var r = [hr, te("Relationships", null, {
    //'xmlns:ns0': XMLNS.RELS,
    xmlns: Ar.RELS
  })];
  return sr(e["!id"]).forEach(function(t) {
    r[r.length] = te("Relationship", null, e["!id"][t]);
  }), r.length > 2 && (r[r.length] = "</Relationships>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function Ze(e, r, t, a, n, i) {
  if (n || (n = {}), e["!id"] || (e["!id"] = vr()), e["!idx"] || (e["!idx"] = 1), r < 0) for (r = e["!idx"]; e["!id"]["rId" + r]; ++r)
    ;
  if (e["!idx"] = r + 1, n.Id = "rId" + r, n.Type = a, n.Target = t, [We.HLINK, We.XPATH, We.XMISS].indexOf(n.Type) > -1 && (n.TargetMode = "External"), e["!id"][n.Id]) throw new Error("Cannot rewrite rId " + r);
  return ar(e["!id"], n.Id, n), ar(e, ("/" + n.Target).replace("//", "/"), n), r;
}
var Xu = "application/vnd.oasis.opendocument.spreadsheet";
function Vu(e, r) {
  for (var t = gi(e), a, n; a = Tr.exec(t); ) switch (a[3]) {
    case "manifest":
      break;
    case "file-entry":
      if (n = ke(a[0], !1), n.path == "/" && n.type !== Xu) throw new Error("This OpenDocument is not a spreadsheet");
      break;
    case "encryption-data":
    case "algorithm":
    case "start-key-generation":
    case "key-derivation":
      throw new Error("Unsupported ODS Encryption");
    default:
      if (r && r.WTF) throw a;
  }
}
function Gu(e) {
  var r = [hr];
  r.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`), r.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);
  for (var t = 0; t < e.length; ++t) r.push('  <manifest:file-entry manifest:full-path="' + e[t][0] + '" manifest:media-type="' + e[t][1] + `"/>
`);
  return r.push("</manifest:manifest>"), r.join("");
}
function Ff(e, r, t) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' + (t || "odf") + "#" + r + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function zu(e, r) {
  return [
    '  <rdf:Description rdf:about="' + e + `">
`,
    '    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' + r + `"/>
`,
    `  </rdf:Description>
`
  ].join("");
}
function $u(e) {
  var r = [hr];
  r.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);
  for (var t = 0; t != e.length; ++t)
    r.push(Ff(e[t][0], e[t][1])), r.push(zu("", e[t][0]));
  return r.push(Ff("", "Document", "pkg")), r.push("</rdf:RDF>"), r.join("");
}
function Yc(e, r) {
  return '<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS ' + on.version + "</meta:generator></office:meta></office:document-meta>";
}
var Xt = [
  ["cp:category", "Category"],
  ["cp:contentStatus", "ContentStatus"],
  ["cp:keywords", "Keywords"],
  ["cp:lastModifiedBy", "LastAuthor"],
  ["cp:lastPrinted", "LastPrinted"],
  ["cp:revision", "RevNumber"],
  ["cp:version", "Version"],
  ["dc:creator", "Author"],
  ["dc:description", "Comments"],
  ["dc:identifier", "Identifier"],
  ["dc:language", "Language"],
  ["dc:subject", "Subject"],
  ["dc:title", "Title"],
  ["dcterms:created", "CreatedDate", "date"],
  ["dcterms:modified", "ModifiedDate", "date"]
];
function Zc(e) {
  var r = {};
  e = Qe(e);
  for (var t = 0; t < Xt.length; ++t) {
    var a = Xt[t], n = sa(e, a[0]);
    n != null && n.length > 0 && (r[a[1]] = ze(n[1])), a[2] === "date" && r[a[1]] && (r[a[1]] = fr(r[a[1]]));
  }
  return r;
}
function Ni(e, r, t, a, n) {
  n[e] != null || r == null || r === "" || (n[e] = r, r = Le(r), a[a.length] = t ? te(e, r, t) : Rr(e, r));
}
function Jc(e, r) {
  var t = r || {}, a = [hr, te("cp:coreProperties", null, {
    //'xmlns': XMLNS.CORE_PROPS,
    "xmlns:cp": Ar.CORE_PROPS,
    "xmlns:dc": Ar.dc,
    "xmlns:dcterms": Ar.dcterms,
    "xmlns:dcmitype": Ar.dcmitype,
    "xmlns:xsi": Ar.xsi
  })], n = {};
  if (!e && !t.Props) return a.join("");
  e && (e.CreatedDate != null && Ni("dcterms:created", typeof e.CreatedDate == "string" ? e.CreatedDate : Yi(e.CreatedDate, t.WTF), { "xsi:type": "dcterms:W3CDTF" }, a, n), e.ModifiedDate != null && Ni("dcterms:modified", typeof e.ModifiedDate == "string" ? e.ModifiedDate : Yi(e.ModifiedDate, t.WTF), { "xsi:type": "dcterms:W3CDTF" }, a, n));
  for (var i = 0; i != Xt.length; ++i) {
    var s = Xt[i], f = t.Props && t.Props[s[1]] != null ? t.Props[s[1]] : e ? e[s[1]] : null;
    f === !0 ? f = "1" : f === !1 ? f = "0" : typeof f == "number" && (f = String(f)), f != null && Ni(s[0], f, null, a, n);
  }
  return a.length > 2 && (a[a.length] = "</cp:coreProperties>", a[1] = a[1].replace("/>", ">")), a.join("");
}
var ca = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"]
], qc = [
  "Worksheets",
  "SheetNames",
  "NamedRanges",
  "DefinedNames",
  "Chartsheets",
  "ChartNames"
];
function Qc(e, r, t, a) {
  var n = [];
  if (typeof e == "string") n = gf(e, a);
  else for (var i = 0; i < e.length; ++i) n = n.concat(e[i].map(function(l) {
    return { v: l };
  }));
  var s = typeof r == "string" ? gf(r, a).map(function(l) {
    return l.v;
  }) : r, f = 0, c = 0;
  if (s.length > 0) for (var o = 0; o !== n.length; o += 2) {
    switch (c = +n[o + 1].v, n[o].v) {
      case "Worksheets":
      case "工作表":
      case "Листы":
      case "أوراق العمل":
      case "ワークシート":
      case "גליונות עבודה":
      case "Arbeitsblätter":
      case "Çalışma Sayfaları":
      case "Feuilles de calcul":
      case "Fogli di lavoro":
      case "Folhas de cálculo":
      case "Planilhas":
      case "Regneark":
      case "Hojas de cálculo":
      case "Werkbladen":
        t.Worksheets = c, t.SheetNames = s.slice(f, f + c);
        break;
      case "Named Ranges":
      case "Rangos con nombre":
      case "名前付き一覧":
      case "Benannte Bereiche":
      case "Navngivne områder":
        t.NamedRanges = c, t.DefinedNames = s.slice(f, f + c);
        break;
      case "Charts":
      case "Diagramme":
        t.Chartsheets = c, t.ChartNames = s.slice(f, f + c);
        break;
    }
    f += c;
  }
}
function Ku(e, r, t) {
  var a = {};
  return r || (r = {}), e = Qe(e), ca.forEach(function(n) {
    var i = (Or(e, n[0]) || [])[1];
    switch (n[2]) {
      case "string":
        i && (r[n[1]] = ze(i));
        break;
      case "bool":
        r[n[1]] = i === "true";
        break;
      case "raw":
        var s = sa(e, n[0]);
        s && s.length > 0 && (a[n[1]] = s[1]);
        break;
    }
  }), a.HeadingPairs && a.TitlesOfParts && Qc(a.HeadingPairs, a.TitlesOfParts, r, t), r;
}
function eo(e) {
  var r = [], t = te;
  return e || (e = {}), e.Application = "SheetJS", r[r.length] = hr, r[r.length] = te("Properties", null, {
    xmlns: Ar.EXT_PROPS,
    "xmlns:vt": Ar.vt
  }), ca.forEach(function(a) {
    if (e[a[1]] !== void 0) {
      var n;
      switch (a[2]) {
        case "string":
          n = Le(String(e[a[1]]));
          break;
        case "bool":
          n = e[a[1]] ? "true" : "false";
          break;
      }
      n !== void 0 && (r[r.length] = t(a[0], n));
    }
  }), r[r.length] = t("HeadingPairs", t("vt:vector", t("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + t("vt:variant", t("vt:i4", String(e.Worksheets))), { size: 2, baseType: "variant" })), r[r.length] = t("TitlesOfParts", t("vt:vector", e.SheetNames.map(function(a) {
    return "<vt:lpstr>" + Le(a) + "</vt:lpstr>";
  }).join(""), { size: e.Worksheets, baseType: "lpstr" })), r.length > 2 && (r[r.length] = "</Properties>", r[1] = r[1].replace("/>", ">")), r.join("");
}
var ju = /<[^<>]+>[^<]*/g;
function Yu(e, r) {
  var t = vr(), a = "", n = e.match(ju);
  if (n) for (var i = 0; i != n.length; ++i) {
    var s = n[i], f = ke(s);
    switch (vt(f[0])) {
      case "<?xml":
        break;
      case "<Properties":
        break;
      case "<property":
        a = ze(f.name);
        break;
      case "</property>":
        a = null;
        break;
      default:
        if (s.indexOf("<vt:") === 0 && a != null && !zr(a)) {
          var c = s.split(">"), o = c[0].slice(4), l = c[1], d = null, u = !0;
          switch (o) {
            case "lpstr":
            case "bstr":
            case "lpwstr":
              d = ze(l);
              break;
            case "bool":
              d = Je(l);
              break;
            case "i1":
            case "i2":
            case "i4":
            case "i8":
            case "int":
            case "uint":
              d = parseInt(l, 10);
              break;
            case "r4":
            case "r8":
            case "decimal":
              d = parseFloat(l);
              break;
            case "filetime":
            case "date":
              d = fr(l);
              break;
            case "cy":
            case "error":
              d = ze(l);
              break;
            default:
              if (u = !1, o.slice(-1) == "/") break;
              r.WTF && typeof console < "u" && console.warn("Unexpected", s, o, c);
          }
          u && ar(t, a, d);
        } else if (s.slice(0, 2) !== "</") {
          if (r.WTF) throw new Error(s);
        }
    }
  }
  return t;
}
function ro(e) {
  var r = [hr, te("Properties", null, {
    xmlns: Ar.CUST_PROPS,
    "xmlns:vt": Ar.vt
  })];
  if (!e) return r.join("");
  var t = 1;
  return sr(e).forEach(function(n) {
    zr(n) || (++t, r[r.length] = te("property", nu(e[n]), {
      fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
      pid: t,
      name: Le(n)
    }));
  }), r.length > 2 && (r[r.length] = "</Properties>", r[1] = r[1].replace("/>", ">")), r.join("");
}
var es = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  /* TotalTime: 'TotalTime', */
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  /* Pages */
  /* Words */
  /* Characters */
  Category: "Category",
  /* PresentationFormat */
  Manager: "Manager",
  Company: "Company",
  /* Guid */
  /* HyperlinkBase */
  /* Bytes */
  /* Lines */
  /* Paragraphs */
  /* CharactersWithSpaces */
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  /* NOTE: missing from schema */
  Identifier: "Identifier",
  /* NOTE: missing from schema */
  Language: "Language"
  /* NOTE: missing from schema */
}, Ri;
function Zu(e, r, t) {
  Ri || (Ri = mi(es)), r = Ri[r] || r, e[r] = t;
}
function Ju(e, r) {
  var t = [];
  return sr(es).map(function(a) {
    for (var n = 0; n < Xt.length; ++n) if (Xt[n][1] == a) return Xt[n];
    for (n = 0; n < ca.length; ++n) if (ca[n][1] == a) return ca[n];
    throw a;
  }).forEach(function(a) {
    if (e[a[1]] != null) {
      var n = r && r.Props && r.Props[a[1]] != null ? r.Props[a[1]] : e[a[1]];
      switch (a[2]) {
        case "date":
          n = new Date(n).toISOString().replace(/\.\d*Z/, "Z");
          break;
      }
      typeof n == "number" ? n = String(n) : n === !0 || n === !1 ? n = n ? "1" : "0" : n instanceof Date && (n = new Date(n).toISOString().replace(/\.\d*Z/, "")), t.push(Rr(es[a[1]] || a[1], n));
    }
  }), te("DocumentProperties", t.join(""), { xmlns: Sr.o });
}
function qu(e, r) {
  var t = ["Worksheets", "SheetNames"], a = "CustomDocumentProperties", n = [];
  return e && sr(e).forEach(function(i) {
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      for (var s = 0; s < Xt.length; ++s) if (i == Xt[s][1]) return;
      for (s = 0; s < ca.length; ++s) if (i == ca[s][1]) return;
      for (s = 0; s < t.length; ++s) if (i == t[s]) return;
      var f = e[i], c = "string";
      typeof f == "number" ? (c = "float", f = String(f)) : f === !0 || f === !1 ? (c = "boolean", f = f ? "1" : "0") : f = String(f), n.push(te(df(i), f, { "dt:dt": c }));
    }
  }), r && sr(r).forEach(function(i) {
    if (Object.prototype.hasOwnProperty.call(r, i) && !(e && Object.prototype.hasOwnProperty.call(e, i))) {
      var s = r[i], f = "string";
      typeof s == "number" ? (f = "float", s = String(s)) : s === !0 || s === !1 ? (f = "boolean", s = s ? "1" : "0") : s instanceof Date ? (f = "dateTime.tz", s = s.toISOString()) : s = String(s), n.push(te(df(i), s, { "dt:dt": f }));
    }
  }), "<" + a + ' xmlns="' + Sr.o + '">' + n.join("") + "</" + a + ">";
}
function Ns(e) {
  var r = e.read_shift(4), t = e.read_shift(4);
  return new Date((t / 1e7 * Math.pow(2, 32) + r / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "");
}
function Qu(e) {
  var r = typeof e == "string" ? new Date(Date.parse(e)) : e, t = r.getTime() / 1e3 + 11644473600, a = t % Math.pow(2, 32), n = (t - a) / Math.pow(2, 32);
  a *= 1e7, n *= 1e7;
  var i = a / Math.pow(2, 32) | 0;
  i > 0 && (a = a % Math.pow(2, 32), n += i);
  var s = H(8);
  return s.write_shift(4, a), s.write_shift(4, n), s;
}
function eh(e, r, t) {
  var a = e.l, n = e.read_shift(0, "lpstr-cp");
  if (t) for (; e.l - a & 3; ) ++e.l;
  return n;
}
function rh(e, r, t) {
  var a = e.read_shift(0, "lpwstr");
  return a;
}
function to(e, r, t) {
  return r === 31 ? rh(e) : eh(e, r, t);
}
function tn(e, r, t) {
  return to(e, r, t === !1 ? 0 : 4);
}
function th(e, r) {
  if (!r) throw new Error("VtUnalignedString must have positive length");
  return to(e, r, 0);
}
function ah(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a != r; ++a) {
    var n = e.l;
    t[a] = e.read_shift(0, "lpwstr").replace(et, ""), e.l - n & 2 && (e.l += 2);
  }
  return t;
}
function nh(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a != r; ++a) t[a] = e.read_shift(0, "lpstr-cp").replace(et, "");
  return t;
}
function ih(e) {
  var r = e.l, t = fi(e, Kc);
  e[e.l] == 0 && e[e.l + 1] == 0 && e.l - r & 2 && (e.l += 2);
  var a = fi(e, tt);
  return [t, a];
}
function sh(e) {
  for (var r = e.read_shift(4), t = [], a = 0; a < r / 2; ++a) t.push(ih(e));
  return t;
}
function If(e, r) {
  for (var t = e.read_shift(4), a = {}, n = 0; n != t; ++n) {
    var i = e.read_shift(4), s = e.read_shift(4);
    a[i] = e.read_shift(s, r === 1200 ? "utf16le" : "utf8").replace(et, "").replace(Za, "!"), r === 1200 && s % 2 && (e.l += 2);
  }
  return e.l & 3 && (e.l = e.l >> 3 << 2), a;
}
function ao(e) {
  var r = e.read_shift(4), t = e.slice(e.l, e.l + r);
  return e.l += r, (r & 3) > 0 && (e.l += 4 - (r & 3) & 3), t;
}
function fh(e) {
  var r = {};
  return r.Size = e.read_shift(4), e.l += r.Size + 3 - (r.Size - 1) % 4, r;
}
function fi(e, r, t) {
  var a = e.read_shift(2), n, i = t || {};
  if (e.l += 2, r !== xf && a !== r && Mu.indexOf(r) === -1 && !((r & 65534) == 4126 && (a & 65534) == 4126))
    throw new Error("Expected type " + r + " saw " + a);
  switch (r === xf ? a : r) {
    case 2:
      return n = e.read_shift(2, "i"), i.raw || (e.l += 2), n;
    case 3:
      return n = e.read_shift(4, "i"), n;
    case 11:
      return e.read_shift(4) !== 0;
    case 19:
      return n = e.read_shift(4), n;
    case 30:
      e.l += 4, val = tn(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
      break;
    case 31:
      e.l += 4, val = tn(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
      break;
    case 64:
      return Ns(e);
    case 65:
      return ao(e);
    case 71:
      return fh(e);
    case 80:
      return tn(e, a, !i.raw).replace(et, "");
    case 81:
      return th(
        e,
        a
        /*, 4*/
      ).replace(et, "");
    case 4108:
      return sh(e);
    case 4126:
    case 4127:
      return a == 4127 ? ah(e) : nh(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + r + " " + a);
  }
}
function Cf(e, r) {
  var t = H(4), a = H(4);
  switch (t.write_shift(4, e == 80 ? 31 : e), e) {
    case 3:
      a.write_shift(-4, r);
      break;
    case 5:
      a = H(8), a.write_shift(8, r, "f");
      break;
    case 11:
      a.write_shift(4, r ? 1 : 0);
      break;
    case 64:
      a = Qu(r);
      break;
    case 31:
    case 80:
      for (a = H(4 + 2 * (r.length + 1) + (r.length % 2 ? 0 : 2)), a.write_shift(4, r.length + 1), a.write_shift(0, r, "dbcs"); a.l != a.length; ) a.write_shift(1, 0);
      break;
    default:
      throw new Error("TypedPropertyValue unrecognized type " + e + " " + r);
  }
  return mr([t, a]);
}
function bf(e, r) {
  var t = e.l, a = e.read_shift(4), n = e.read_shift(4), i = [], s = 0, f = 0, c = -1, o = {};
  for (s = 0; s != n; ++s) {
    var l = e.read_shift(4), d = e.read_shift(4);
    i[s] = [l, d + t];
  }
  i.sort(function(w, _) {
    return w[1] - _[1];
  });
  var u = {};
  for (s = 0; s != n; ++s) {
    if (e.l !== i[s][1]) {
      var h = !0;
      if (s > 0 && r) switch (r[i[s - 1][0]].t) {
        case 2:
          e.l + 2 === i[s][1] && (e.l += 2, h = !1);
          break;
        case 80:
          e.l <= i[s][1] && (e.l = i[s][1], h = !1);
          break;
        case 4108:
          e.l <= i[s][1] && (e.l = i[s][1], h = !1);
          break;
      }
      if ((!r || s == 0) && e.l <= i[s][1] && (h = !1, e.l = i[s][1]), h) throw new Error("Read Error: Expected address " + i[s][1] + " at " + e.l + " :" + s);
    }
    if (r) {
      if (i[s][0] == 0 && i.length > s + 1 && i[s][1] == i[s + 1][1]) continue;
      var m = r[i[s][0]];
      if (u[m.n] = fi(e, m.t, { raw: !0 }), m.p === "version" && (u[m.n] = String(u[m.n] >> 16) + "." + ("0000" + String(u[m.n] & 65535)).slice(-4)), m.n == "CodePage") switch (u[m.n]) {
        case 0:
          u[m.n] = 1252;
        case 874:
        case 932:
        case 936:
        case 949:
        case 950:
        case 1250:
        case 1251:
        case 1253:
        case 1254:
        case 1255:
        case 1256:
        case 1257:
        case 1258:
        case 1e4:
        case 1200:
        case 1201:
        case 1252:
        case 65e3:
        case -536:
        case 65001:
        case -535:
          dt(f = u[m.n] >>> 0 & 65535);
          break;
        default:
          throw new Error("Unsupported CodePage: " + u[m.n]);
      }
    } else if (i[s][0] === 1) {
      if (f = u.CodePage = fi(e, Cs), dt(f), c !== -1) {
        var g = e.l;
        e.l = i[c][1], o = If(e, f), e.l = g;
      }
    } else if (i[s][0] === 0) {
      if (f === 0) {
        c = s, e.l = i[s + 1][1];
        continue;
      }
      o = If(e, f);
    } else {
      var p = o[i[s][0]], v;
      switch (e[e.l]) {
        case 65:
          e.l += 4, v = ao(e);
          break;
        case 30:
          e.l += 4, v = tn(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
          break;
        case 31:
          e.l += 4, v = tn(e, e[e.l - 4]).replace(/(^|[^\u0000])\u0000+$/, "$1");
          break;
        case 3:
          e.l += 4, v = e.read_shift(4, "i");
          break;
        case 19:
          e.l += 4, v = e.read_shift(4);
          break;
        case 5:
          e.l += 4, v = e.read_shift(8, "f");
          break;
        case 11:
          e.l += 4, v = dr(e, 4);
          break;
        case 64:
          e.l += 4, v = fr(Ns(e));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      u[p] = v;
    }
  }
  return e.l = t + a, u;
}
var no = ["CodePage", "Thumbnail", "_PID_LINKBASE", "_PID_HLINKS", "SystemIdentifier", "FMTID"];
function ch(e) {
  switch (typeof e) {
    case "boolean":
      return 11;
    case "number":
      return (e | 0) == e ? 3 : 5;
    case "string":
      return 31;
    case "object":
      if (e instanceof Date) return 64;
      break;
  }
  return -1;
}
function Of(e, r, t) {
  var a = H(8), n = [], i = [], s = 8, f = 0, c = H(8), o = H(8);
  if (c.write_shift(4, 2), c.write_shift(4, 1200), o.write_shift(4, 1), i.push(c), n.push(o), s += 8 + c.length, !r) {
    o = H(8), o.write_shift(4, 0), n.unshift(o);
    var l = [H(4)];
    for (l[0].write_shift(4, e.length), f = 0; f < e.length; ++f) {
      var d = e[f][0];
      for (c = H(8 + 2 * (d.length + 1) + (d.length % 2 ? 0 : 2)), c.write_shift(4, f + 2), c.write_shift(4, d.length + 1), c.write_shift(0, d, "dbcs"); c.l != c.length; ) c.write_shift(1, 0);
      l.push(c);
    }
    c = mr(l), i.unshift(c), s += 8 + c.length;
  }
  for (f = 0; f < e.length; ++f)
    if (!(r && !r[e[f][0]]) && !(no.indexOf(e[f][0]) > -1 || qc.indexOf(e[f][0]) > -1) && e[f][1] != null) {
      var u = e[f][1], h = 0;
      if (r) {
        h = +r[e[f][0]];
        var m = t[h];
        if (m.p == "version" && typeof u == "string") {
          var g = u.split(".");
          u = (+g[0] << 16) + (+g[1] || 0);
        }
        c = Cf(m.t, u);
      } else {
        var p = ch(u);
        p == -1 && (p = 31, u = String(u)), c = Cf(p, u);
      }
      i.push(c), o = H(8), o.write_shift(4, r ? h : 2 + f), n.push(o), s += 8 + c.length;
    }
  var v = 8 * (i.length + 1);
  for (f = 0; f < i.length; ++f)
    n[f].write_shift(4, v), v += i[f].length;
  return a.write_shift(4, s), a.write_shift(4, i.length), mr([a].concat(n).concat(i));
}
function Nf(e, r, t) {
  var a = e.content;
  if (!a) return {};
  yr(a, 0);
  var n, i, s, f, c = 0;
  a.chk("feff", "Byte Order: "), a.read_shift(2);
  var o = a.read_shift(4), l = a.read_shift(16);
  if (l !== Ie.utils.consts.HEADER_CLSID && l !== t) throw new Error("Bad PropertySet CLSID " + l);
  if (n = a.read_shift(4), n !== 1 && n !== 2) throw new Error("Unrecognized #Sets: " + n);
  if (i = a.read_shift(16), f = a.read_shift(4), n === 1 && f !== a.l) throw new Error("Length mismatch: " + f + " !== " + a.l);
  n === 2 && (s = a.read_shift(16), c = a.read_shift(4));
  var d = bf(a, r), u = { SystemIdentifier: o };
  for (var h in d) u[h] = d[h];
  if (u.FMTID = i, n === 1) return u;
  if (c - a.l == 2 && (a.l += 2), a.l !== c) throw new Error("Length mismatch 2: " + a.l + " !== " + c);
  var m;
  try {
    m = bf(a, null);
  } catch {
  }
  for (h in m) u[h] = m[h];
  return u.FMTID = [i, s], u;
}
function Rf(e, r, t, a, n, i) {
  var s = H(n ? 68 : 48), f = [s];
  s.write_shift(2, 65534), s.write_shift(2, 0), s.write_shift(4, 842412599), s.write_shift(16, Ie.utils.consts.HEADER_CLSID, "hex"), s.write_shift(4, n ? 2 : 1), s.write_shift(16, r, "hex"), s.write_shift(4, n ? 68 : 48);
  var c = Of(e, t, a);
  if (f.push(c), n) {
    var o = Of(n, null, null);
    s.write_shift(16, i, "hex"), s.write_shift(4, 68 + c.length), f.push(o);
  }
  return mr(f);
}
function Kt(e, r) {
  return e.read_shift(r), null;
}
function oh(e, r) {
  r || (r = H(e));
  for (var t = 0; t < e; ++t) r.write_shift(1, 0);
  return r;
}
function lh(e, r, t) {
  for (var a = [], n = e.l + r; e.l < n; ) a.push(t(e, n - e.l));
  if (n !== e.l) throw new Error("Slurp error");
  return a;
}
function dr(e, r) {
  return e.read_shift(r) === 1;
}
function Wr(e, r) {
  return r || (r = H(2)), r.write_shift(2, +!!e), r;
}
function ur(e) {
  return e.read_shift(2, "u");
}
function ht(e, r) {
  return r || (r = H(2)), r.write_shift(2, e), r;
}
function io(e, r) {
  return lh(e, r, ur);
}
function so(e) {
  var r = e.read_shift(1), t = e.read_shift(1);
  return t === 1 ? r : r === 1;
}
function fo(e, r, t) {
  return t || (t = H(2)), t.write_shift(1, r == "e" ? +e : +!!e), t.write_shift(1, r == "e" ? 1 : 0), t;
}
function Ma(e, r, t) {
  var a = e.read_shift(t && t.biff >= 12 ? 2 : 1), n = "sbcs-cont", i = xr;
  if (t && t.biff >= 8 && (xr = 1200), !t || t.biff == 8) {
    var s = e.read_shift(1);
    s && (n = "dbcs-cont");
  } else t.biff == 12 && (n = "wstr");
  t.biff >= 2 && t.biff <= 5 && (n = "cpstr");
  var f = a ? e.read_shift(a, n) : "";
  return xr = i, f;
}
function uh(e) {
  var r = xr;
  xr = 1200;
  var t = e.read_shift(2), a = e.read_shift(1), n = a & 4, i = a & 8, s = 1 + (a & 1), f = 0, c, o = {};
  i && (f = e.read_shift(2)), n && (c = e.read_shift(4));
  var l = s == 2 ? "dbcs-cont" : "sbcs-cont", d = t === 0 ? "" : e.read_shift(t, l);
  return i && (e.l += 4 * f), n && (e.l += c), o.t = d, i || (o.raw = "<t>" + o.t + "</t>", o.r = o.t), xr = r, o;
}
function hh(e) {
  var r = e.t || "", t = H(3);
  t.write_shift(2, r.length), t.write_shift(1, 1);
  var a = H(2 * r.length);
  a.write_shift(2 * r.length, r, "utf16le");
  var n = [t, a];
  return mr(n);
}
function _a(e, r, t) {
  var a;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return e.read_shift(r, "cpstr");
    if (t.biff >= 12) return e.read_shift(r, "dbcs-cont");
  }
  var n = e.read_shift(1);
  return n === 0 ? a = e.read_shift(r, "sbcs-cont") : a = e.read_shift(r, "dbcs-cont"), a;
}
function In(e, r, t) {
  var a = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return a === 0 ? (e.l++, "") : _a(e, a, t);
}
function Aa(e, r, t) {
  if (t.biff > 5) return In(e, r, t);
  var a = e.read_shift(1);
  return a === 0 ? (e.l++, "") : e.read_shift(a, t.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function co(e, r, t) {
  return t || (t = H(3 + 2 * e.length)), t.write_shift(2, e.length), t.write_shift(1, 1), t.write_shift(31, e, "utf16le"), t;
}
function dh(e) {
  var r = e.read_shift(1);
  e.l++;
  var t = e.read_shift(2);
  return e.l += 2, [r, t];
}
function vh(e) {
  var r = e.read_shift(4), t = e.l, a = !1;
  r > 24 && (e.l += r - 24, e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763" && (a = !0), e.l = t);
  var n = e.read_shift((a ? r - 24 : r) >> 1, "utf16le").replace(et, "");
  return a && (e.l += 24), n;
}
function mh(e) {
  for (var r = e.read_shift(2), t = ""; r-- > 0; ) t += "../";
  var a = e.read_shift(0, "lpstr-ansi");
  if (e.l += 2, e.read_shift(2) != 57005) throw new Error("Bad FileMoniker");
  var n = e.read_shift(4);
  if (n === 0) return t + a.replace(/\\/g, "/");
  var i = e.read_shift(4);
  if (e.read_shift(2) != 3) throw new Error("Bad FileMoniker");
  var s = e.read_shift(i >> 1, "utf16le").replace(et, "");
  return t + s;
}
function ph(e, r) {
  var t = e.read_shift(16);
  switch (t) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return vh(e);
    case "0303000000000000c000000000000046":
      return mh(e);
    default:
      throw new Error("Unsupported Moniker " + t);
  }
}
function Gn(e) {
  var r = e.read_shift(4), t = r > 0 ? e.read_shift(r, "utf16le").replace(et, "") : "";
  return t;
}
function Df(e, r) {
  r || (r = H(6 + e.length * 2)), r.write_shift(4, 1 + e.length);
  for (var t = 0; t < e.length; ++t) r.write_shift(2, e.charCodeAt(t));
  return r.write_shift(2, 0), r;
}
function gh(e, r) {
  var t = e.l + r, a = e.read_shift(4);
  if (a !== 2) throw new Error("Unrecognized streamVersion: " + a);
  var n = e.read_shift(2);
  e.l += 2;
  var i, s, f, c, o = "", l, d;
  n & 16 && (i = Gn(e, t - e.l)), n & 128 && (s = Gn(e, t - e.l)), (n & 257) === 257 && (f = Gn(e, t - e.l)), (n & 257) === 1 && (c = ph(e, t - e.l)), n & 8 && (o = Gn(e, t - e.l)), n & 32 && (l = e.read_shift(16)), n & 64 && (d = Ns(
    e
    /*, 8*/
  )), e.l = t;
  var u = s || f || c || "";
  u && o && (u += "#" + o), u || (u = "#" + o), n & 2 && u.charAt(0) == "/" && u.charAt(1) != "/" && (u = "file://" + u);
  var h = { Target: u };
  return l && (h.guid = l), d && (h.time = d), i && (h.Tooltip = i), h;
}
function _h(e) {
  var r = H(512), t = 0, a = e.Target;
  a.slice(0, 7) == "file://" && (a = a.slice(7));
  var n = a.indexOf("#"), i = n > -1 ? 31 : 23;
  switch (a.charAt(0)) {
    case "#":
      i = 28;
      break;
    case ".":
      i &= -3;
      break;
  }
  r.write_shift(4, 2), r.write_shift(4, i);
  var s = [8, 6815827, 6619237, 4849780, 83];
  for (t = 0; t < s.length; ++t) r.write_shift(4, s[t]);
  if (i == 28)
    a = a.slice(1), Df(a, r);
  else if (i & 2) {
    for (s = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), t = 0; t < s.length; ++t) r.write_shift(1, parseInt(s[t], 16));
    var f = n > -1 ? a.slice(0, n) : a;
    for (r.write_shift(4, 2 * (f.length + 1)), t = 0; t < f.length; ++t) r.write_shift(2, f.charCodeAt(t));
    r.write_shift(2, 0), i & 8 && Df(n > -1 ? a.slice(n + 1) : "", r);
  } else {
    for (s = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "), t = 0; t < s.length; ++t) r.write_shift(1, parseInt(s[t], 16));
    for (var c = 0; a.slice(c * 3, c * 3 + 3) == "../" || a.slice(c * 3, c * 3 + 3) == "..\\"; ) ++c;
    for (r.write_shift(2, c), r.write_shift(4, a.length - 3 * c + 1), t = 0; t < a.length - 3 * c; ++t) r.write_shift(1, a.charCodeAt(t + 3 * c) & 255);
    for (r.write_shift(1, 0), r.write_shift(2, 65535), r.write_shift(2, 57005), t = 0; t < 6; ++t) r.write_shift(4, 0);
  }
  return r.slice(0, r.l);
}
function oo(e) {
  var r = e.read_shift(1), t = e.read_shift(1), a = e.read_shift(1), n = e.read_shift(1);
  return [r, t, a, n];
}
function lo(e, r) {
  var t = oo(e);
  return t[3] = 0, t;
}
function Et(e, r, t) {
  var a = e.read_shift(2), n = e.read_shift(2), i = { r: a, c: n, ixfe: 0 };
  if (t && t.biff == 2 || r == 7) {
    var s = e.read_shift(1);
    i.ixfe = s & 63, e.l += 2;
  } else i.ixfe = e.read_shift(2);
  return i;
}
function wa(e, r, t, a) {
  return a || (a = H(6)), a.write_shift(2, e), a.write_shift(2, r), a.write_shift(2, t || 0), a;
}
function wh(e) {
  var r = e.read_shift(2), t = e.read_shift(2);
  return e.l += 8, { type: r, flags: t };
}
function kh(e, r, t) {
  return r === 0 ? "" : Aa(e, r, t);
}
function Th(e, r, t) {
  var a = t.biff > 8 ? 4 : 2, n = e.read_shift(a), i = e.read_shift(a, "i"), s = e.read_shift(a, "i");
  return [n, i, s];
}
function uo(e) {
  var r = e.read_shift(2), t = ki(e);
  return [r, t];
}
function Eh(e, r, t) {
  e.l += 4, r -= 4;
  var a = e.l + r, n = Ma(e, r, t), i = e.read_shift(2);
  if (a -= e.l, i !== a) throw new Error("Malformed AddinUdf: padding = " + a + " != " + i);
  return e.l += i, n;
}
function Ti(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2);
  return { s: { c: a, r }, e: { c: n, r: t } };
}
function ho(e, r) {
  return r || (r = H(8)), r.write_shift(2, e.s.r), r.write_shift(2, e.e.r), r.write_shift(2, e.s.c), r.write_shift(2, e.e.c), r;
}
function vo(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { c: a, r }, e: { c: n, r: t } };
}
var yh = vo;
function mo(e) {
  e.l += 4;
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2);
  return e.l += 12, [t, r, a];
}
function Sh(e) {
  var r = {};
  return e.l += 4, e.l += 16, r.fSharedNote = e.read_shift(2), e.l += 4, r;
}
function xh(e) {
  var r = {};
  return e.l += 4, e.cf = e.read_shift(2), r;
}
function Mr(e) {
  e.l += 2, e.l += e.read_shift(2);
}
var Ah = {
  0: Mr,
  /* FtEnd */
  4: Mr,
  /* FtMacro */
  5: Mr,
  /* FtButton */
  6: Mr,
  /* FtGmo */
  7: xh,
  /* FtCf */
  8: Mr,
  /* FtPioGrbit */
  9: Mr,
  /* FtPictFmla */
  10: Mr,
  /* FtCbls */
  11: Mr,
  /* FtRbo */
  12: Mr,
  /* FtSbs */
  13: Sh,
  /* FtNts */
  14: Mr,
  /* FtSbsFmla */
  15: Mr,
  /* FtGboData */
  16: Mr,
  /* FtEdoData */
  17: Mr,
  /* FtRboData */
  18: Mr,
  /* FtCblsData */
  19: Mr,
  /* FtLbsData */
  20: Mr,
  /* FtCblsFmla */
  21: mo
};
function Fh(e, r) {
  for (var t = e.l + r, a = []; e.l < t; ) {
    var n = e.read_shift(2);
    e.l -= 2;
    try {
      a[n] = Ah[n](e, t - e.l);
    } catch {
      return e.l = t, a;
    }
  }
  return e.l != t && (e.l = t), a;
}
function zn(e, r) {
  var t = { BIFFVer: 0, dt: 0 };
  switch (t.BIFFVer = e.read_shift(2), r -= 2, r >= 2 && (t.dt = e.read_shift(2), e.l -= 2), t.BIFFVer) {
    case 1536:
    case 1280:
    case 1024:
    case 768:
    case 512:
    case 2:
    case 7:
      break;
    default:
      if (r > 6) throw new Error("Unexpected BIFF Ver " + t.BIFFVer);
  }
  return e.read_shift(r), t;
}
function Rs(e, r, t) {
  var a = 1536, n = 16;
  switch (t.bookType) {
    case "biff8":
      break;
    case "biff5":
      a = 1280, n = 8;
      break;
    case "biff4":
      a = 4, n = 6;
      break;
    case "biff3":
      a = 3, n = 6;
      break;
    case "biff2":
      a = 2, n = 4;
      break;
    case "xla":
      break;
    default:
      throw new Error("unsupported BIFF version");
  }
  var i = H(n);
  return i.write_shift(2, a), i.write_shift(2, r), n > 4 && i.write_shift(2, 29282), n > 6 && i.write_shift(2, 1997), n > 8 && (i.write_shift(2, 49161), i.write_shift(2, 1), i.write_shift(2, 1798), i.write_shift(2, 0)), i;
}
function Ih(e, r) {
  return r === 0 || e.read_shift(2), 1200;
}
function Ch(e, r, t) {
  if (t.enc)
    return e.l += r, "";
  var a = e.l, n = Aa(e, 0, t);
  return e.read_shift(r + a - e.l), n;
}
function bh(e, r) {
  var t = !r || r.biff == 8, a = H(t ? 112 : 54);
  for (a.write_shift(r.biff == 8 ? 2 : 1, 7), t && a.write_shift(1, 0), a.write_shift(4, 859007059), a.write_shift(4, 5458548 | (t ? 0 : 536870912)); a.l < a.length; ) a.write_shift(1, t ? 0 : 32);
  return a;
}
function Oh(e, r, t) {
  var a = t && t.biff == 8 || r == 2 ? e.read_shift(2) : (e.l += r, 0);
  return { fDialog: a & 16, fBelow: a & 64, fRight: a & 128 };
}
function Nh(e, r, t) {
  var a = "";
  if (t.biff == 4)
    return a = Ma(e, 0, t), a.length === 0 && (a = "Sheet1"), { name: a };
  var n = e.read_shift(4), i = e.read_shift(1) & 3, s = e.read_shift(1);
  switch (s) {
    case 0:
      s = "Worksheet";
      break;
    case 1:
      s = "Macrosheet";
      break;
    case 2:
      s = "Chartsheet";
      break;
    case 6:
      s = "VBAModule";
      break;
  }
  return a = Ma(e, 0, t), a.length === 0 && (a = "Sheet1"), { pos: n, hs: i, dt: s, name: a };
}
function Rh(e, r) {
  var t = !r || r.biff >= 8 ? 2 : 1, a = H(8 + t * e.name.length);
  a.write_shift(4, e.pos), a.write_shift(1, e.hs || 0), a.write_shift(1, e.dt), a.write_shift(1, e.name.length), r.biff >= 8 && a.write_shift(1, 1), a.write_shift(t * e.name.length, e.name, r.biff < 8 ? "sbcs" : "utf16le");
  var n = a.slice(0, a.l);
  return n.l = a.l, n;
}
function Dh(e, r) {
  for (var t = e.l + r, a = e.read_shift(4), n = e.read_shift(4), i = [], s = 0; s != n && e.l < t; ++s)
    i.push(uh(e));
  return i.Count = a, i.Unique = n, i;
}
function Ph(e, r) {
  var t = H(8);
  t.write_shift(4, e.Count), t.write_shift(4, e.Unique);
  for (var a = [], n = 0; n < e.length; ++n) a[n] = hh(e[n]);
  var i = mr([t].concat(a));
  return i.parts = [t.length].concat(a.map(function(s) {
    return s.length;
  })), i;
}
function Lh(e, r) {
  var t = {};
  return t.dsst = e.read_shift(2), e.l += r - 2, t;
}
function Mh(e) {
  var r = {};
  r.r = e.read_shift(2), r.c = e.read_shift(2), r.cnt = e.read_shift(2) - r.c;
  var t = e.read_shift(2);
  e.l += 4;
  var a = e.read_shift(1);
  return e.l += 3, a & 7 && (r.level = a & 7), a & 32 && (r.hidden = !0), a & 64 && (r.hpt = t / 20), r;
}
function Bh(e) {
  var r = wh(e);
  if (r.type != 2211) throw new Error("Invalid Future Record " + r.type);
  var t = e.read_shift(4);
  return t !== 0;
}
function Uh(e) {
  return e.read_shift(2), e.read_shift(4);
}
function Pf(e, r, t) {
  var a = 0;
  t && t.biff == 2 || (a = e.read_shift(2));
  var n = e.read_shift(2);
  t && t.biff == 2 && (a = 1 - (n >> 15), n &= 32767);
  var i = { Unsynced: a & 1, DyZero: (a & 2) >> 1, ExAsc: (a & 4) >> 2, ExDsc: (a & 8) >> 3 };
  return [i, n];
}
function Wh(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), f = e.read_shift(2), c = e.read_shift(2), o = e.read_shift(2);
  return {
    Pos: [r, t],
    Dim: [a, n],
    Flags: i,
    CurTab: s,
    FirstTab: f,
    Selected: c,
    TabRatio: o
  };
}
function Hh() {
  var e = H(18);
  return e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 29280), e.write_shift(2, 17600), e.write_shift(2, 56), e.write_shift(2, 0), e.write_shift(2, 0), e.write_shift(2, 1), e.write_shift(2, 500), e;
}
function Xh(e, r, t) {
  if (t && t.biff >= 2 && t.biff < 5) return {};
  var a = e.read_shift(2);
  return { RTL: a & 64 };
}
function Vh(e) {
  var r = H(18), t = 1718;
  return e && e.RTL && (t |= 64), r.write_shift(2, t), r.write_shift(4, 0), r.write_shift(4, 64), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
function Gh() {
}
function zh(e, r, t) {
  var a = {
    dyHeight: e.read_shift(2),
    fl: e.read_shift(2)
  };
  switch (t && t.biff || 8) {
    case 2:
      break;
    case 3:
    case 4:
      e.l += 2;
      break;
    default:
      e.l += 10;
      break;
  }
  return a.name = Ma(e, 0, t), a;
}
function $h(e, r) {
  var t = e.name || "Arial", a = r && r.biff == 5, n = a ? 15 + t.length : 16 + 2 * t.length, i = H(n);
  return i.write_shift(2, e.sz * 20), i.write_shift(4, 0), i.write_shift(2, 400), i.write_shift(4, 0), i.write_shift(2, 0), i.write_shift(1, t.length), a || i.write_shift(1, 1), i.write_shift((a ? 1 : 2) * t.length, t, a ? "sbcs" : "utf16le"), i;
}
function Kh(e, r, t) {
  var a = Et(e, r, t);
  return a.isst = e.read_shift(4), a;
}
function jh(e, r, t, a) {
  var n = H(10);
  return wa(e, r, a, n), n.write_shift(4, t), n;
}
function Yh(e, r, t) {
  t.biffguess && t.biff == 2 && (t.biff = 5);
  var a = e.l + r, n = Et(e, r, t), i = In(e, a - e.l, t);
  return n.val = i, n;
}
function Zh(e, r, t, a, n) {
  var i = !n || n.biff == 8, s = H(8 + +i + (1 + i) * t.length);
  return wa(e, r, a, s), s.write_shift(2, t.length), i && s.write_shift(1, 1), s.write_shift((1 + i) * t.length, t, i ? "utf16le" : "sbcs"), s;
}
function Jh(e, r, t) {
  var a = e.read_shift(2), n = Aa(e, 0, t);
  return [a, n];
}
function qh(e, r, t, a) {
  var n = t && t.biff == 5;
  a || (a = H(n ? 3 + r.length : 5 + 2 * r.length)), a.write_shift(2, e), a.write_shift(n ? 1 : 2, r.length), n || a.write_shift(1, 1), a.write_shift((n ? 1 : 2) * r.length, r, n ? "sbcs" : "utf16le");
  var i = a.length > a.l ? a.slice(0, a.l) : a;
  return i.l == null && (i.l = i.length), i;
}
var Qh = Aa;
function e0(e) {
  var r = H(1 + e.length);
  return r.write_shift(1, e.length), r.write_shift(e.length, e, "sbcs"), r;
}
function r0(e) {
  var r = H(3 + e.length);
  return r.l += 2, r.write_shift(1, e.length), r.write_shift(e.length, e, "sbcs"), r;
}
function Lf(e, r, t) {
  var a = e.l + r, n = t.biff == 8 || !t.biff ? 4 : 2, i = e.read_shift(n), s = e.read_shift(n), f = e.read_shift(2), c = e.read_shift(2);
  return e.l = a, { s: { r: i, c: f }, e: { r: s, c } };
}
function t0(e, r) {
  var t = r.biff == 8 || !r.biff ? 4 : 2, a = H(2 * t + 6);
  return a.write_shift(t, e.s.r), a.write_shift(t, e.e.r + 1), a.write_shift(2, e.s.c), a.write_shift(2, e.e.c + 1), a.write_shift(2, 0), a;
}
function a0(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = uo(e);
  return { r, c: t, ixfe: a[0], rknum: a[1] };
}
function n0(e, r) {
  for (var t = e.l + r - 2, a = e.read_shift(2), n = e.read_shift(2), i = []; e.l < t; ) i.push(uo(e));
  if (e.l !== t) throw new Error("MulRK read error");
  var s = e.read_shift(2);
  if (i.length != s - n + 1) throw new Error("MulRK length mismatch");
  return { r: a, c: n, C: s, rkrec: i };
}
function i0(e, r) {
  for (var t = e.l + r - 2, a = e.read_shift(2), n = e.read_shift(2), i = []; e.l < t; ) i.push(e.read_shift(2));
  if (e.l !== t) throw new Error("MulBlank read error");
  var s = e.read_shift(2);
  if (i.length != s - n + 1) throw new Error("MulBlank length mismatch");
  return { r: a, c: n, C: s, ixfe: i };
}
function s0(e, r, t, a) {
  var n = {}, i = e.read_shift(4), s = e.read_shift(4), f = e.read_shift(4), c = e.read_shift(2);
  return n.patternType = Bu[f >> 26], a.cellStyles && (n.alc = i & 7, n.fWrap = i >> 3 & 1, n.alcV = i >> 4 & 7, n.fJustLast = i >> 7 & 1, n.trot = i >> 8 & 255, n.cIndent = i >> 16 & 15, n.fShrinkToFit = i >> 20 & 1, n.iReadOrder = i >> 22 & 2, n.fAtrNum = i >> 26 & 1, n.fAtrFnt = i >> 27 & 1, n.fAtrAlc = i >> 28 & 1, n.fAtrBdr = i >> 29 & 1, n.fAtrPat = i >> 30 & 1, n.fAtrProt = i >> 31 & 1, n.dgLeft = s & 15, n.dgRight = s >> 4 & 15, n.dgTop = s >> 8 & 15, n.dgBottom = s >> 12 & 15, n.icvLeft = s >> 16 & 127, n.icvRight = s >> 23 & 127, n.grbitDiag = s >> 30 & 3, n.icvTop = f & 127, n.icvBottom = f >> 7 & 127, n.icvDiag = f >> 14 & 127, n.dgDiag = f >> 21 & 15, n.icvFore = c & 127, n.icvBack = c >> 7 & 127, n.fsxButton = c >> 14 & 1), n;
}
function f0(e, r, t) {
  var a = {};
  return a.ifnt = e.read_shift(2), a.numFmtId = e.read_shift(2), a.flags = e.read_shift(2), a.fStyle = a.flags >> 2 & 1, r -= 6, a.data = s0(e, r, a.fStyle, t), a;
}
function Mf(e, r, t, a) {
  var n = t && t.biff == 5;
  a || (a = H(n ? 16 : 20)), a.write_shift(2, 0), e.style ? (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, 65524)) : (a.write_shift(2, e.numFmtId || 0), a.write_shift(2, r << 4));
  var i = 0;
  return e.numFmtId > 0 && n && (i |= 1024), a.write_shift(4, i), a.write_shift(4, 0), n || a.write_shift(4, 0), a.write_shift(2, 0), a;
}
function c0(e) {
  var r = {};
  return r.ifnt = e.read_shift(1), e.l++, r.flags = e.read_shift(1), r.numFmtId = r.flags & 63, r.flags >>= 6, r.fStyle = 0, r.data = {}, r;
}
function o0(e) {
  var r = H(4);
  return r.l += 2, r.write_shift(1, e.numFmtId), r.l++, r;
}
function po(e) {
  var r = H(12);
  return r.l++, r.write_shift(1, e.numFmtId), r.l += 10, r;
}
var l0 = po;
function u0(e) {
  var r = {};
  return r.ifnt = e.read_shift(1), r.numFmtId = e.read_shift(1), r.flags = e.read_shift(2), r.fStyle = r.flags >> 2 & 1, r.data = {}, r;
}
function h0(e) {
  var r = {};
  return r.ifnt = e.read_shift(1), r.numFmtId = e.read_shift(1), r.flags = e.read_shift(2), r.fStyle = r.flags >> 2 & 1, r.data = {}, r;
}
function d0(e) {
  e.l += 4;
  var r = [e.read_shift(2), e.read_shift(2)];
  if (r[0] !== 0 && r[0]--, r[1] !== 0 && r[1]--, r[0] > 7 || r[1] > 7) throw new Error("Bad Gutters: " + r.join("|"));
  return r;
}
function v0(e) {
  var r = H(8);
  return r.write_shift(4, 0), r.write_shift(2, 0), r.write_shift(2, 0), r;
}
function m0(e, r, t) {
  var a = Et(e, 6, t), n = so(e);
  return a.val = n, a.t = n === !0 || n === !1 ? "b" : "e", a;
}
function Di(e, r, t, a, n, i) {
  var s = H(8);
  return wa(e, r, a, s), fo(t, i, s), s;
}
function p0(e, r, t) {
  t.biffguess && t.biff == 2 && (t.biff = 5);
  var a = Et(e, 6, t), n = Vr(e);
  return a.val = n, a;
}
function g0(e, r, t, a) {
  var n = H(14);
  return wa(e, r, a, n), ga(t, n), n;
}
var Bf = kh;
function _0(e, r, t) {
  var a = e.l + r, n = e.read_shift(2), i = e.read_shift(2);
  if (t.sbcch = i, i == 1025 || i == 14849) return [i, n];
  if (i < 1 || i > 255) throw new Error("Unexpected SupBook type: " + i);
  for (var s = _a(e, i), f = []; a > e.l; ) f.push(In(e));
  return [i, n, s, f];
}
function Uf(e, r, t) {
  var a = e.read_shift(2), n, i = {
    fBuiltIn: a & 1,
    fWantAdvise: a >>> 1 & 1,
    fWantPict: a >>> 2 & 1,
    fOle: a >>> 3 & 1,
    fOleLink: a >>> 4 & 1,
    cf: a >>> 5 & 1023,
    fIcon: a >>> 15 & 1
  };
  return t.sbcch === 14849 && (n = Eh(e, r - 2, t)), i.body = n || e.read_shift(r - 2), typeof n == "string" && (i.Name = n), i;
}
function Wf(e, r, t) {
  var a = e.l + r, n = e.read_shift(2), i = e.read_shift(1), s = e.read_shift(1), f = e.read_shift(t && t.biff == 2 ? 1 : 2), c = 0;
  (!t || t.biff >= 5) && (t.biff != 5 && (e.l += 2), c = e.read_shift(2), t.biff == 5 && (e.l += 2), e.l += 4);
  var o = _a(e, s, t);
  n & 32 && (o = bs[o.charCodeAt(0)]);
  var l = a - e.l;
  t && t.biff == 2 && --l;
  var d = a == e.l || f === 0 || !(l > 0) ? [] : Nm(e, l, t, f);
  return {
    chKey: i,
    Name: o,
    itab: c,
    rgce: d
  };
}
function go(e, r, t) {
  if (t.biff < 8 || !(t.biff > 8) && r == e[e.l] + (e[e.l + 1] == 3 ? 1 : 0) + 1) return Hf(e, r, t);
  for (var a = [], n = e.l + r, i = e.read_shift(t.biff > 8 ? 4 : 2); i-- !== 0; ) a.push(Th(e, t.biff > 8 ? 12 : 6, t));
  if (e.l != n) throw new Error("Bad ExternSheet: " + e.l + " != " + n);
  return a;
}
function Hf(e, r, t) {
  e[e.l + 1] == 3 && e[e.l]++;
  var a = Ma(e, r, t);
  return a.charCodeAt(0) == 3 ? a.slice(1) : a;
}
function w0(e, r, t) {
  if (t.biff < 8) {
    e.l += r;
    return;
  }
  var a = e.read_shift(2), n = e.read_shift(2), i = _a(e, a, t), s = _a(e, n, t);
  return [i, s];
}
function k0(e, r, t) {
  var a = vo(e);
  e.l++;
  var n = e.read_shift(1);
  return r -= 8, [Rm(e, r, t), n, a];
}
function Xf(e, r, t) {
  var a = yh(e);
  switch (t.biff) {
    case 2:
      e.l++, r -= 7;
      break;
    case 3:
    case 4:
      e.l += 2, r -= 8;
      break;
    default:
      e.l += 6, r -= 12;
  }
  return [a, bm(e, r, t)];
}
function T0(e) {
  var r = e.read_shift(4) !== 0, t = e.read_shift(4) !== 0, a = e.read_shift(4);
  return [r, t, a];
}
function E0(e, r, t) {
  var a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), f = Aa(e, 0, t);
  return [{ r: a, c: n }, f, s, i];
}
function y0(e, r, t) {
  if (t && t.biff < 8) {
    var a = e.read_shift(2), n = e.read_shift(2);
    if (a == 65535 || a == -1) return;
    var i = e.read_shift(2), s = e.read_shift(Math.min(i, 2048), "cpstr");
    return [{ r: a, c: n }, s];
  }
  return E0(e, r, t);
}
function Pi(e, r, t, a) {
  var n = H(6 + (a || e.length));
  return n.write_shift(2, r), n.write_shift(2, t), n.write_shift(2, a || e.length), n.write_shift(e.length, e, "sbcs"), n;
}
function S0(e, r) {
  for (var t = [], a = e.read_shift(2); a--; ) t.push(Ti(e));
  return t;
}
function x0(e) {
  var r = H(2 + e.length * 8);
  r.write_shift(2, e.length);
  for (var t = 0; t < e.length; ++t) ho(e[t], r);
  return r;
}
function A0(e, r, t) {
  if (t && t.biff < 8) return I0(e, r, t);
  var a = mo(e), n = Fh(e, r - 22, a[1]);
  return { cmo: a, ft: n };
}
var F0 = {
  8: function(e, r) {
    var t = e.l + r;
    e.l += 10;
    var a = e.read_shift(2);
    e.l += 4, e.l += 2, e.l += 2, e.l += 2, e.l += 4;
    var n = e.read_shift(1);
    return e.l += n, e.l = t, { fmt: a };
  }
};
function I0(e, r, t) {
  e.l += 4;
  var a = e.read_shift(2), n = e.read_shift(2), i = e.read_shift(2);
  e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 6, r -= 36;
  var s = [];
  return s.push((F0[a] || jr)(e, r, t)), { cmo: [n, a, i], ft: s };
}
function C0(e, r, t) {
  var a = e.l, n = "";
  try {
    e.l += 4;
    var i = (t.lastobj || { cmo: [0, 0] }).cmo[1], s;
    [0, 5, 7, 11, 12, 14].indexOf(i) == -1 ? e.l += 6 : s = dh(e, 6, t);
    var f = e.read_shift(2);
    e.read_shift(2), ur(e, 2);
    var c = e.read_shift(2);
    e.l += c;
    for (var o = 1; o < e.lens.length - 1; ++o) {
      if (e.l - a != e.lens[o]) throw new Error("TxO: bad continue record");
      var l = e[e.l], d = _a(e, e.lens[o + 1] - e.lens[o] - 1);
      if (n += d, n.length >= (l ? f : 2 * f)) break;
    }
    if (n.length !== f && n.length !== f * 2)
      throw new Error("cchText: " + f + " != " + n.length);
    return e.l = a + r, { t: n };
  } catch {
    return e.l = a + r, { t: n };
  }
}
function b0(e, r) {
  var t = Ti(e);
  e.l += 16;
  var a = gh(e, r - 24);
  return [t, a];
}
function O0(e) {
  var r = H(24), t = er(e[0]);
  r.write_shift(2, t.r), r.write_shift(2, t.r), r.write_shift(2, t.c), r.write_shift(2, t.c);
  for (var a = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "), n = 0; n < 16; ++n) r.write_shift(1, parseInt(a[n], 16));
  return mr([r, _h(e[1])]);
}
function N0(e, r) {
  e.read_shift(2);
  var t = Ti(e), a = e.read_shift((r - 10) / 2, "dbcs-cont");
  return a = a.replace(et, ""), [t, a];
}
function R0(e) {
  var r = e[1].Tooltip, t = H(10 + 2 * (r.length + 1));
  t.write_shift(2, 2048);
  var a = er(e[0]);
  t.write_shift(2, a.r), t.write_shift(2, a.r), t.write_shift(2, a.c), t.write_shift(2, a.c);
  for (var n = 0; n < r.length; ++n) t.write_shift(2, r.charCodeAt(n));
  return t.write_shift(2, 0), t;
}
function D0(e) {
  var r = [0, 0], t;
  return t = e.read_shift(2), r[0] = Af[t] || t, t = e.read_shift(2), r[1] = Af[t] || t, r;
}
function P0(e) {
  return e || (e = H(4)), e.write_shift(2, 1), e.write_shift(2, 1), e;
}
function L0(e) {
  for (var r = e.read_shift(2), t = []; r-- > 0; ) t.push(lo(e));
  return t;
}
function M0(e) {
  for (var r = e.read_shift(2), t = []; r-- > 0; ) t.push(lo(e));
  return t;
}
function B0(e) {
  e.l += 2;
  var r = { cxfs: 0, crc: 0 };
  return r.cxfs = e.read_shift(2), r.crc = e.read_shift(4), r;
}
function _o(e, r, t) {
  if (!t.cellStyles) return jr(e, r);
  var a = t && t.biff >= 12 ? 4 : 2, n = e.read_shift(a), i = e.read_shift(a), s = e.read_shift(a), f = e.read_shift(a), c = e.read_shift(2);
  a == 2 && (e.l += 2);
  var o = { s: n, e: i, w: s, ixfe: f, flags: c };
  return (t.biff >= 5 || !t.biff) && (o.level = c >> 8 & 7), o;
}
function U0(e, r) {
  var t = H(12);
  t.write_shift(2, r), t.write_shift(2, r), t.write_shift(2, e.width * 256), t.write_shift(2, 0);
  var a = 0;
  return e.hidden && (a |= 1), t.write_shift(1, a), a = e.level || 0, t.write_shift(1, a), t.write_shift(2, 0), t;
}
function W0(e, r) {
  var t = {};
  return r < 32 || (e.l += 16, t.header = Vr(e), t.footer = Vr(e), e.l += 2), t;
}
function H0(e, r, t) {
  var a = { area: !1 };
  if (t.biff != 5)
    return e.l += r, a;
  var n = e.read_shift(1);
  return e.l += 3, n & 16 && (a.area = !0), a;
}
function X0(e) {
  for (var r = H(2 * e), t = 0; t < e; ++t) r.write_shift(2, t + 1);
  return r;
}
var V0 = Et, G0 = io, z0 = In;
function $0(e) {
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(4), n = { fmt: r, env: t, len: a, data: e.slice(e.l, e.l + a) };
  return e.l += a, n;
}
function Cn(e, r, t, a, n) {
  return e || (e = H(7)), e.write_shift(2, r), e.write_shift(2, t), e.write_shift(
    1,
    a || 0
    /* & 0x3F */
  ), e.write_shift(
    1,
    n || 0
    /* & 0x3F */
  ), e.write_shift(1, 0), e;
}
function K0(e, r, t) {
  t.biffguess && t.biff == 5 && (t.biff = 2);
  var a = Et(e, 7, t), n = Aa(e, r - 7, t);
  return a.t = "str", a.val = n, a;
}
function j0(e, r, t) {
  var a = Et(e, 7, t), n = Vr(e);
  return a.t = "n", a.val = n, a;
}
function Y0(e, r, t, a, n) {
  var i = H(15);
  return Cn(i, e, r, a || 0, n || 0), i.write_shift(8, t, "f"), i;
}
function Z0(e, r, t) {
  var a = Et(e, 7, t), n = e.read_shift(2);
  return a.t = "n", a.val = n, a;
}
function J0(e, r, t, a, n) {
  var i = H(9);
  return Cn(i, e, r, a || 0, n || 0), i.write_shift(2, t), i;
}
function q0(e) {
  var r = e.read_shift(1);
  return r === 0 ? (e.l++, "") : e.read_shift(r, "sbcs-cont");
}
function Q0(e, r, t) {
  var a = e.l + 7, n = Et(e, 6, t);
  e.l = a;
  var i = so(e);
  return n.val = i, n.t = i === !0 || i === !1 ? "b" : "e", n;
}
function ed(e, r) {
  e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += r - 13;
}
function rd(e, r, t) {
  var a = e.l + r, n = Et(e, 6, t), i = e.read_shift(2), s = _a(e, i, t);
  return e.l = a, n.t = "str", n.val = s, n;
}
function td(e) {
  var r = e.read_shift(4), t = e.read_shift(1), a = e.read_shift(t, "sbcs");
  return a.length === 0 && (a = "Sheet1"), { flags: r, name: a };
}
var ad = [2, 3, 48, 49, 131, 139, 140, 245], rs = /* @__PURE__ */ function() {
  var e = {
    /* Code Pages Supported by Visual FoxPro */
    1: 437,
    2: 850,
    3: 1252,
    4: 1e4,
    100: 852,
    101: 866,
    102: 865,
    103: 861,
    104: 895,
    105: 620,
    106: 737,
    107: 857,
    120: 950,
    121: 949,
    122: 936,
    123: 932,
    124: 874,
    125: 1255,
    126: 1256,
    150: 10007,
    151: 10029,
    152: 10006,
    200: 1250,
    201: 1251,
    202: 1254,
    203: 1253,
    /* shapefile DBF extension */
    0: 20127,
    8: 865,
    9: 437,
    10: 850,
    11: 437,
    13: 437,
    14: 850,
    15: 437,
    16: 850,
    17: 437,
    18: 850,
    19: 932,
    20: 850,
    21: 437,
    22: 850,
    23: 865,
    24: 437,
    25: 437,
    26: 850,
    27: 437,
    28: 863,
    29: 850,
    31: 852,
    34: 852,
    35: 852,
    36: 860,
    37: 850,
    38: 866,
    55: 850,
    64: 852,
    77: 936,
    78: 949,
    79: 950,
    80: 874,
    87: 1252,
    88: 1252,
    89: 1252,
    108: 863,
    134: 737,
    135: 852,
    136: 857,
    204: 1257,
    255: 16969
  }, r = mi({
    1: 437,
    2: 850,
    3: 1252,
    4: 1e4,
    100: 852,
    101: 866,
    102: 865,
    103: 861,
    104: 895,
    105: 620,
    106: 737,
    107: 857,
    120: 950,
    121: 949,
    122: 936,
    123: 932,
    124: 874,
    125: 1255,
    126: 1256,
    150: 10007,
    151: 10029,
    152: 10006,
    200: 1250,
    201: 1251,
    202: 1254,
    203: 1253,
    0: 20127
  });
  function t(f, c) {
    var o = [], l = Zt(1);
    switch (c.type) {
      case "base64":
        l = qr(st(f));
        break;
      case "binary":
        l = qr(f);
        break;
      case "buffer":
      case "array":
        l = f;
        break;
    }
    yr(l, 0);
    var d = l.read_shift(1), u = !!(d & 136), h = !1, m = !1;
    switch (d) {
      case 2:
        break;
      case 3:
        break;
      case 48:
        h = !0, u = !0;
        break;
      case 49:
        h = !0, u = !0;
        break;
      case 131:
        break;
      case 139:
        break;
      case 140:
        m = !0;
        break;
      case 245:
        break;
      default:
        throw new Error("DBF Unsupported Version: " + d.toString(16));
    }
    var g = 0, p = 521;
    d == 2 && (g = l.read_shift(2)), l.l += 3, d != 2 && (g = l.read_shift(4)), g > 1048576 && (g = 1e6), d != 2 && (p = l.read_shift(2));
    var v = l.read_shift(2), w = c.codepage || 1252;
    d != 2 && (l.l += 16, l.read_shift(1), l[l.l] !== 0 && (w = e[l[l.l]]), l.l += 1, l.l += 2), m && (l.l += 36);
    for (var _ = [], T = {}, b = Math.min(l.length, d == 2 ? 521 : p - 10 - (h ? 264 : 0)), B = m ? 32 : 11; l.l < b && l[l.l] != 13; )
      switch (T = {}, T.name = (typeof Be < "u" ? Be.utils.decode(w, l.slice(l.l, l.l + B)) : bt(l.slice(l.l, l.l + B))).replace(/[\u0000\r\n][\S\s]*$/g, ""), l.l += B, T.type = String.fromCharCode(l.read_shift(1)), d != 2 && !m && (T.offset = l.read_shift(4)), T.len = l.read_shift(1), d == 2 && (T.offset = l.read_shift(2)), T.dec = l.read_shift(1), T.name.length && _.push(T), d != 2 && (l.l += m ? 13 : 14), T.type) {
        case "B":
          (!h || T.len != 8) && c.WTF && console.log("Skipping " + T.name + ":" + T.type);
          break;
        case "G":
        case "P":
          c.WTF && console.log("Skipping " + T.name + ":" + T.type);
          break;
        case "+":
        case "0":
        case "@":
        case "C":
        case "D":
        case "F":
        case "I":
        case "L":
        case "M":
        case "N":
        case "O":
        case "T":
        case "Y":
          break;
        default:
          throw new Error("Unknown Field Type: " + T.type);
      }
    if (l[l.l] !== 13 && (l.l = p - 1), l.read_shift(1) !== 13) throw new Error("DBF Terminator not found " + l.l + " " + l[l.l]);
    l.l = p;
    var y = 0, O = 0;
    for (o[0] = [], O = 0; O != _.length; ++O) o[0][O] = _[O].name;
    for (; g-- > 0; ) {
      if (l[l.l] === 42) {
        l.l += v;
        continue;
      }
      for (++l.l, o[++y] = [], O = 0, O = 0; O != _.length; ++O) {
        var R = l.slice(l.l, l.l + _[O].len);
        l.l += _[O].len, yr(R, 0);
        var P = typeof Be < "u" ? Be.utils.decode(w, R) : bt(R);
        switch (_[O].type) {
          case "C":
            P.trim().length && (o[y][O] = P.replace(/([^\s])\s+$/, "$1"));
            break;
          case "D":
            P.length === 8 ? (o[y][O] = new Date(Date.UTC(+P.slice(0, 4), +P.slice(4, 6) - 1, +P.slice(6, 8), 0, 0, 0, 0)), c && c.UTC || (o[y][O] = ma(o[y][O]))) : o[y][O] = P;
            break;
          case "F":
            o[y][O] = parseFloat(P.trim());
            break;
          case "+":
          case "I":
            o[y][O] = m ? R.read_shift(-4, "i") ^ 2147483648 : R.read_shift(4, "i");
            break;
          case "L":
            switch (P.trim().toUpperCase()) {
              case "Y":
              case "T":
                o[y][O] = !0;
                break;
              case "N":
              case "F":
                o[y][O] = !1;
                break;
              case "":
              case "\0":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + P + "|");
            }
            break;
          case "M":
            if (!u) throw new Error("DBF Unexpected MEMO for type " + d.toString(16));
            o[y][O] = "##MEMO##" + (m ? parseInt(P.trim(), 10) : R.read_shift(4));
            break;
          case "N":
            P = P.replace(/\u0000/g, "").trim(), P && P != "." && (o[y][O] = +P || 0);
            break;
          case "@":
            o[y][O] = new Date(R.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            {
              var L = R.read_shift(4), U = R.read_shift(4);
              if (L == 0 && U == 0) break;
              o[y][O] = new Date((L - 2440588) * 864e5 + U), c && c.UTC || (o[y][O] = ma(o[y][O]));
            }
            break;
          case "Y":
            o[y][O] = R.read_shift(4, "i") / 1e4 + R.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            o[y][O] = -R.read_shift(-8, "f");
            break;
          case "B":
            if (h && _[O].len == 8) {
              o[y][O] = R.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            R.l += _[O].len;
            break;
          case "0":
            if (_[O].name === "_NullFlags") break;
          default:
            throw new Error("DBF Unsupported data type " + _[O].type);
        }
      }
    }
    if (d != 2 && l.l < l.length && l[l.l++] != 26)
      throw new Error("DBF EOF Marker missing " + (l.l - 1) + " of " + l.length + " " + l[l.l - 1].toString(16));
    return c && c.sheetRows && (o = o.slice(0, c.sheetRows)), c.DBF = _, o;
  }
  function a(f, c) {
    var o = c || {};
    o.dateNF || (o.dateNF = "yyyymmdd");
    var l = Va(t(f, o), o);
    return l["!cols"] = o.DBF.map(function(d) {
      return {
        wch: d.len,
        DBF: d
      };
    }), delete o.DBF, l;
  }
  function n(f, c) {
    try {
      var o = ea(a(f, c), c);
      return o.bookType = "dbf", o;
    } catch (l) {
      if (c && c.WTF) throw l;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var i = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function s(f, c) {
    if (!f["!ref"]) throw new Error("Cannot export empty sheet to DBF");
    var o = c || {}, l = xr;
    if (+o.codepage >= 0 && dt(+o.codepage), o.type == "string") throw new Error("Cannot write DBF to JS string");
    var d = $r(), u = ss(f, { header: 1, raw: !0, cellDates: !0 }), h = u[0], m = u.slice(1), g = f["!cols"] || [], p = 0, v = 0, w = 0, _ = 1;
    for (p = 0; p < h.length; ++p) {
      if (((g[p] || {}).DBF || {}).name) {
        h[p] = g[p].DBF.name, ++w;
        continue;
      }
      if (h[p] != null) {
        if (++w, typeof h[p] == "number" && (h[p] = h[p].toString(10)), typeof h[p] != "string") throw new Error("DBF Invalid column name " + h[p] + " |" + typeof h[p] + "|");
        if (h.indexOf(h[p]) !== p) {
          for (v = 0; v < 1024; ++v)
            if (h.indexOf(h[p] + "_" + v) == -1) {
              h[p] += "_" + v;
              break;
            }
        }
      }
    }
    var T = Ge(f["!ref"]), b = [], B = [], y = [];
    for (p = 0; p <= T.e.c - T.s.c; ++p) {
      var O = "", R = "", P = 0, L = [];
      for (v = 0; v < m.length; ++v)
        m[v][p] != null && L.push(m[v][p]);
      if (L.length == 0 || h[p] == null) {
        b[p] = "?";
        continue;
      }
      for (v = 0; v < L.length; ++v) {
        switch (typeof L[v]) {
          case "number":
            R = "B";
            break;
          case "string":
            R = "C";
            break;
          case "boolean":
            R = "L";
            break;
          case "object":
            R = L[v] instanceof Date ? "D" : "C";
            break;
          default:
            R = "C";
        }
        P = Math.max(P, (typeof Be < "u" && typeof L[v] == "string" ? Be.utils.encode(ha, L[v]) : String(L[v])).length), O = O && O != R ? "C" : R;
      }
      P > 250 && (P = 250), R = ((g[p] || {}).DBF || {}).type, R == "C" && g[p].DBF.len > P && (P = g[p].DBF.len), O == "B" && R == "N" && (O = "N", y[p] = g[p].DBF.dec, P = g[p].DBF.len), B[p] = O == "C" || R == "N" ? P : i[O] || 0, _ += B[p], b[p] = O;
    }
    var U = d.next(32);
    for (U.write_shift(4, 318902576), U.write_shift(4, m.length), U.write_shift(2, 296 + 32 * w), U.write_shift(2, _), p = 0; p < 4; ++p) U.write_shift(4, 0);
    var K = +r[
      /*::String(*/
      xr
      /*::)*/
    ] || 3;
    for (U.write_shift(4, 0 | K << 8), e[K] != +o.codepage && (o.codepage && console.error("DBF Unsupported codepage " + xr + ", using 1252"), xr = 1252), p = 0, v = 0; p < h.length; ++p)
      if (h[p] != null) {
        var me = d.next(32), de = (h[p].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
        me.write_shift(1, de, "sbcs"), me.write_shift(1, b[p] == "?" ? "C" : b[p], "sbcs"), me.write_shift(4, v), me.write_shift(1, B[p] || i[b[p]] || 0), me.write_shift(1, y[p] || 0), me.write_shift(1, 2), me.write_shift(4, 0), me.write_shift(1, 0), me.write_shift(4, 0), me.write_shift(4, 0), v += B[p] || i[b[p]] || 0;
      }
    var ae = d.next(264);
    for (ae.write_shift(4, 13), p = 0; p < 65; ++p) ae.write_shift(4, 0);
    for (p = 0; p < m.length; ++p) {
      var he = d.next(_);
      for (he.write_shift(1, 0), v = 0; v < h.length; ++v)
        if (h[v] != null)
          switch (b[v]) {
            case "L":
              he.write_shift(1, m[p][v] == null ? 63 : m[p][v] ? 84 : 70);
              break;
            case "B":
              he.write_shift(8, m[p][v] || 0, "f");
              break;
            case "N":
              var q = "0";
              for (typeof m[p][v] == "number" && (q = m[p][v].toFixed(y[v] || 0)), q.length > B[v] && (q = q.slice(0, B[v])), w = 0; w < B[v] - q.length; ++w) he.write_shift(1, 32);
              he.write_shift(1, q, "sbcs");
              break;
            case "D":
              m[p][v] ? (he.write_shift(4, ("0000" + m[p][v].getFullYear()).slice(-4), "sbcs"), he.write_shift(2, ("00" + (m[p][v].getMonth() + 1)).slice(-2), "sbcs"), he.write_shift(2, ("00" + m[p][v].getDate()).slice(-2), "sbcs")) : he.write_shift(8, "00000000", "sbcs");
              break;
            case "C":
              var ge = he.l, z = String(m[p][v] != null ? m[p][v] : "").slice(0, B[v]);
              for (he.write_shift(1, z, "cpstr"), ge += B[v] - he.l, w = 0; w < ge; ++w) he.write_shift(1, 32);
              break;
          }
    }
    return xr = l, d.next(1).write_shift(1, 26), d.end();
  }
  return {
    to_workbook: n,
    to_sheet: a,
    from_sheet: s
  };
}(), wo = /* @__PURE__ */ function() {
  var e = {
    AA: "À",
    BA: "Á",
    CA: "Â",
    DA: 195,
    HA: "Ä",
    JA: 197,
    AE: "È",
    BE: "É",
    CE: "Ê",
    HE: "Ë",
    AI: "Ì",
    BI: "Í",
    CI: "Î",
    HI: "Ï",
    AO: "Ò",
    BO: "Ó",
    CO: "Ô",
    DO: 213,
    HO: "Ö",
    AU: "Ù",
    BU: "Ú",
    CU: "Û",
    HU: "Ü",
    Aa: "à",
    Ba: "á",
    Ca: "â",
    Da: 227,
    Ha: "ä",
    Ja: 229,
    Ae: "è",
    Be: "é",
    Ce: "ê",
    He: "ë",
    Ai: "ì",
    Bi: "í",
    Ci: "î",
    Hi: "ï",
    Ao: "ò",
    Bo: "ó",
    Co: "ô",
    Do: 245,
    Ho: "ö",
    Au: "ù",
    Bu: "ú",
    Cu: "û",
    Hu: "ü",
    KC: "Ç",
    Kc: "ç",
    q: "æ",
    z: "œ",
    a: "Æ",
    j: "Œ",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    0: 176,
    1: 177,
    2: 178,
    3: 179,
    5: 181,
    6: 182,
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    '"': 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  }, r = function(m) {
    return m.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
  };
  e["|"] = 254;
  var t = new RegExp("\x1BN(" + sr(e).map(r).join("|") + ")", "gm"), a = function(m, g) {
    var p = e[g];
    return typeof p == "number" ? ji(p) : p;
  }, n = function(m, g, p) {
    var v = g.charCodeAt(0) - 32 << 4 | p.charCodeAt(0) - 48;
    return v == 59 ? m : ji(v);
  }, i = function(m) {
    return m.replace(/\n/g, "\x1B :").replace(/\r/g, "\x1B =");
  };
  function s(m, g) {
    switch (g.type) {
      case "base64":
        return f(st(m), g);
      case "binary":
        return f(m, g);
      case "buffer":
        return f(Ue && Buffer.isBuffer(m) ? m.toString("binary") : bt(m), g);
      case "array":
        return f(va(m), g);
    }
    throw new Error("Unrecognized type " + g.type);
  }
  function f(m, g) {
    var p = m.split(/[\n\r]+/), v = -1, w = -1, _ = 0, T = 0, b = [], B = [], y = null, O = {}, R = [], P = [], L = [], U = 0, K, me = { Workbook: { WBProps: {}, Names: [] } };
    for (+g.codepage >= 0 && dt(+g.codepage); _ !== p.length; ++_) {
      U = 0;
      var de = p[_].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n).replace(t, a), ae = de.replace(/;;/g, "\0").split(";").map(function(j) {
        return j.replace(/\u0000/g, ";");
      }), he = ae[0], q;
      if (de.length > 0) switch (he) {
        case "ID":
          break;
        case "E":
          break;
        case "B":
          break;
        case "O":
          for (T = 1; T < ae.length; ++T) switch (ae[T].charAt(0)) {
            case "V":
              {
                var ge = parseInt(ae[T].slice(1), 10);
                ge >= 1 && ge <= 4 && (me.Workbook.WBProps.date1904 = !0);
              }
              break;
          }
          break;
        case "W":
          break;
        case "P":
          switch (ae[1].charAt(0)) {
            case "P":
              B.push(de.slice(3).replace(/;;/g, ";"));
              break;
          }
          break;
        case "NN":
          {
            var z = { Sheet: 0 };
            for (T = 1; T < ae.length; ++T) switch (ae[T].charAt(0)) {
              case "N":
                z.Name = ae[T].slice(1);
                break;
              case "E":
                z.Ref = (g && g.sheet || "Sheet1") + "!" + la(ae[T].slice(1));
                break;
            }
            me.Workbook.Names.push(z);
          }
          break;
        case "C":
          var be = !1, oe = !1, fe = !1, Q = !1, _e = -1, Ee = -1, Se = "", A = "z", M = "";
          for (T = 1; T < ae.length; ++T) switch (ae[T].charAt(0)) {
            case "A":
              M = ae[T].slice(1);
              break;
            case "X":
              w = parseInt(ae[T].slice(1), 10) - 1, oe = !0;
              break;
            case "Y":
              for (v = parseInt(ae[T].slice(1), 10) - 1, oe || (w = 0), K = b.length; K <= v; ++K) b[K] = [];
              break;
            case "K":
              q = ae[T].slice(1), q.charAt(0) === '"' ? (q = q.slice(1, q.length - 1), A = "s") : q === "TRUE" || q === "FALSE" ? (q = q === "TRUE", A = "b") : q.charAt(0) == "#" && Nr[q] != null ? (A = "e", q = Nr[q]) : isNaN(it(q)) || (q = it(q), A = "n", y !== null && ft(y) && g.cellDates && (q = Ht(me.Workbook.WBProps.date1904 ? q + 1462 : q), A = typeof q == "number" ? "n" : "d")), typeof Be < "u" && typeof q == "string" && (g || {}).type != "string" && (g || {}).codepage && (q = Be.utils.decode(g.codepage, q)), be = !0;
              break;
            case "E":
              Q = !0, Se = la(ae[T].slice(1), { r: v, c: w });
              break;
            case "S":
              fe = !0;
              break;
            case "G":
              break;
            case "R":
              _e = parseInt(ae[T].slice(1), 10) - 1;
              break;
            case "C":
              Ee = parseInt(ae[T].slice(1), 10) - 1;
              break;
            default:
              if (g && g.WTF) throw new Error("SYLK bad record " + de);
          }
          if (be && (b[v][w] ? (b[v][w].t = A, b[v][w].v = q) : b[v][w] = { t: A, v: q }, y && (b[v][w].z = y), g.cellText !== !1 && y && (b[v][w].w = at(b[v][w].z, b[v][w].v, { date1904: me.Workbook.WBProps.date1904 })), y = null), fe) {
            if (Q) throw new Error("SYLK shared formula cannot have own formula");
            var D = _e > -1 && b[_e][Ee];
            if (!D || !D[1]) throw new Error("SYLK shared formula cannot find base");
            Se = Ro(D[1], { r: v - _e, c: w - Ee });
          }
          Se && (b[v][w] ? b[v][w].f = Se : b[v][w] = { t: "n", f: Se }), M && (b[v][w] || (b[v][w] = { t: "z" }), b[v][w].c = [{ a: "SheetJSYLK", t: M }]);
          break;
        case "F":
          var N = 0;
          for (T = 1; T < ae.length; ++T) switch (ae[T].charAt(0)) {
            case "X":
              w = parseInt(ae[T].slice(1), 10) - 1, ++N;
              break;
            case "Y":
              for (v = parseInt(ae[T].slice(1), 10) - 1, K = b.length; K <= v; ++K) b[K] = [];
              break;
            case "M":
              U = parseInt(ae[T].slice(1), 10) / 20;
              break;
            case "F":
              break;
            case "G":
              break;
            case "P":
              y = B[parseInt(ae[T].slice(1), 10)];
              break;
            case "S":
              break;
            case "D":
              break;
            case "N":
              break;
            case "W":
              for (L = ae[T].slice(1).split(" "), K = parseInt(L[0], 10); K <= parseInt(L[1], 10); ++K)
                U = parseInt(L[2], 10), P[K - 1] = U === 0 ? { hidden: !0 } : { wch: U };
              break;
            case "C":
              w = parseInt(ae[T].slice(1), 10) - 1, P[w] || (P[w] = {});
              break;
            case "R":
              v = parseInt(ae[T].slice(1), 10) - 1, R[v] || (R[v] = {}), U > 0 ? (R[v].hpt = U, R[v].hpx = Wa(U)) : U === 0 && (R[v].hidden = !0);
              break;
            default:
              if (g && g.WTF) throw new Error("SYLK bad record " + de);
          }
          N < 1 && (y = null);
          break;
        default:
          if (g && g.WTF) throw new Error("SYLK bad record " + de);
      }
    }
    return R.length > 0 && (O["!rows"] = R), P.length > 0 && (O["!cols"] = P), P.forEach(function(j) {
      Gt(j);
    }), g && g.sheetRows && (b = b.slice(0, g.sheetRows)), [b, O, me];
  }
  function c(m, g) {
    var p = s(m, g), v = p[0], w = p[1], _ = p[2], T = je(g);
    T.date1904 = (((_ || {}).Workbook || {}).WBProps || {}).date1904;
    var b = Va(v, T);
    sr(w).forEach(function(y) {
      b[y] = w[y];
    });
    var B = ea(b, g);
    return sr(_).forEach(function(y) {
      B[y] = _[y];
    }), B.bookType = "sylk", B;
  }
  function o(m, g, p, v, w, _) {
    var T = "C;Y" + (p + 1) + ";X" + (v + 1) + ";K";
    switch (m.t) {
      case "n":
        T += isFinite(m.v) ? m.v || 0 : Ir[isNaN(m.v) ? 36 : 7], m.f && !m.F && (T += ";E" + bn(m.f, { r: p, c: v }));
        break;
      case "b":
        T += m.v ? "TRUE" : "FALSE";
        break;
      case "e":
        T += m.w || Ir[m.v] || m.v;
        break;
      case "d":
        T += or(fr(m.v, _), _);
        break;
      case "s":
        T += '"' + (m.v == null ? "" : String(m.v)).replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return T;
  }
  function l(m, g, p) {
    var v = "C;Y" + (g + 1) + ";X" + (p + 1) + ";A";
    return v += i(m.map(function(w) {
      return w.t;
    }).join("")), v;
  }
  function d(m, g) {
    g.forEach(function(p, v) {
      var w = "F;W" + (v + 1) + " " + (v + 1) + " ";
      p.hidden ? w += "0" : (typeof p.width == "number" && !p.wpx && (p.wpx = Ua(p.width)), typeof p.wpx == "number" && !p.wch && (p.wch = gn(p.wpx)), typeof p.wch == "number" && (w += Math.round(p.wch))), w.charAt(w.length - 1) != " " && m.push(w);
    });
  }
  function u(m, g) {
    g.forEach(function(p, v) {
      var w = "F;";
      p.hidden ? w += "M0;" : p.hpt ? w += "M" + 20 * p.hpt + ";" : p.hpx && (w += "M" + 20 * _n(p.hpx) + ";"), w.length > 2 && m.push(w + "R" + (v + 1));
    });
  }
  function h(m, g, p) {
    g || (g = {}), g._formats = ["General"];
    var v = ["ID;PSheetJS;N;E"], w = [], _ = Ge(m["!ref"] || "A1"), T, b = m["!data"] != null, B = `\r
`, y = (((p || {}).Workbook || {}).WBProps || {}).date1904, O = "General";
    v.push("P;PGeneral");
    var R = _.s.r, P = _.s.c, L = [];
    if (m["!ref"]) {
      for (R = _.s.r; R <= _.e.r; ++R)
        if (!(b && !m["!data"][R])) {
          for (L = [], P = _.s.c; P <= _.e.c; ++P)
            T = b ? m["!data"][R][P] : m[Ne(P) + Xe(R)], !(!T || !T.c) && L.push(l(T.c, R, P));
          L.length && w.push(L.join(B));
        }
    }
    if (m["!ref"]) {
      for (R = _.s.r; R <= _.e.r; ++R)
        if (!(b && !m["!data"][R])) {
          for (L = [], P = _.s.c; P <= _.e.c; ++P)
            if (T = b ? m["!data"][R][P] : m[Ne(P) + Xe(R)], !(!T || T.v == null && (!T.f || T.F))) {
              if ((T.z || (T.t == "d" ? Fe[14] : "General")) != O) {
                var U = g._formats.indexOf(T.z);
                U == -1 && (g._formats.push(T.z), U = g._formats.length - 1, v.push("P;P" + T.z.replace(/;/g, ";;"))), L.push("F;P" + U + ";Y" + (R + 1) + ";X" + (P + 1));
              }
              L.push(o(T, m, R, P, g, y));
            }
          w.push(L.join(B));
        }
    }
    return v.push("F;P0;DG0G8;M255"), m["!cols"] && d(v, m["!cols"]), m["!rows"] && u(v, m["!rows"]), m["!ref"] && v.push("B;Y" + (_.e.r - _.s.r + 1) + ";X" + (_.e.c - _.s.c + 1) + ";D" + [_.s.c, _.s.r, _.e.c, _.e.r].join(" ")), v.push("O;L;D;B" + (y ? ";V4" : "") + ";K47;G100 0.001"), delete g._formats, v.join(B) + B + w.join(B) + B + "E" + B;
  }
  return {
    to_workbook: c,
    from_sheet: h
  };
}(), ko = /* @__PURE__ */ function() {
  function e(f, c) {
    switch (c.type) {
      case "base64":
        return r(st(f), c);
      case "binary":
        return r(f, c);
      case "buffer":
        return r(Ue && Buffer.isBuffer(f) ? f.toString("binary") : bt(f), c);
      case "array":
        return r(va(f), c);
    }
    throw new Error("Unrecognized type " + c.type);
  }
  function r(f, c) {
    for (var o = f.split(`
`), l = -1, d = -1, u = 0, h = []; u !== o.length; ++u) {
      if (o[u].trim() === "BOT") {
        h[++l] = [], d = 0;
        continue;
      }
      if (!(l < 0)) {
        var m = o[u].trim().split(","), g = m[0], p = m[1];
        ++u;
        for (var v = o[u] || ""; (v.match(/["]/g) || []).length & 1 && u < o.length - 1; ) v += `
` + o[++u];
        switch (v = v.trim(), +g) {
          case -1:
            if (v === "BOT") {
              h[++l] = [], d = 0;
              continue;
            } else if (v !== "EOD") throw new Error("Unrecognized DIF special command " + v);
            break;
          case 0:
            v === "TRUE" ? h[l][d] = !0 : v === "FALSE" ? h[l][d] = !1 : isNaN(it(p)) ? isNaN(hn(p).getDate()) ? h[l][d] = p : (h[l][d] = fr(p), c && c.UTC || (h[l][d] = ma(h[l][d]))) : h[l][d] = it(p), ++d;
            break;
          case 1:
            v = v.slice(1, v.length - 1), v = v.replace(/""/g, '"'), v && v.match(/^=".*"$/) && (v = v.slice(2, -1)), h[l][d++] = v !== "" ? v : null;
            break;
        }
        if (v === "EOD") break;
      }
    }
    return c && c.sheetRows && (h = h.slice(0, c.sheetRows)), h;
  }
  function t(f, c) {
    return Va(e(f, c), c);
  }
  function a(f, c) {
    var o = ea(t(f, c), c);
    return o.bookType = "dif", o;
  }
  function n(f, c) {
    return "0," + String(f) + `\r
` + c;
  }
  function i(f) {
    return `1,0\r
"` + f.replace(/"/g, '""') + '"';
  }
  function s(f) {
    if (!f["!ref"]) throw new Error("Cannot export empty sheet to DIF");
    for (var c = Ge(f["!ref"]), o = f["!data"] != null, l = [
      `TABLE\r
0,1\r
"sheetjs"\r
`,
      `VECTORS\r
0,` + (c.e.r - c.s.r + 1) + `\r
""\r
`,
      `TUPLES\r
0,` + (c.e.c - c.s.c + 1) + `\r
""\r
`,
      `DATA\r
0,0\r
""\r
`
    ], d = c.s.r; d <= c.e.r; ++d) {
      for (var u = o ? f["!data"][d] : [], h = `-1,0\r
BOT\r
`, m = c.s.c; m <= c.e.c; ++m) {
        var g = o ? u && u[m] : f[He({ r: d, c: m })];
        if (g == null) {
          h += `1,0\r
""\r
`;
          continue;
        }
        switch (g.t) {
          case "n":
            g.w != null ? h += "0," + g.w + `\r
V` : g.v != null ? h += n(g.v, "V") : g.f != null && !g.F ? h += i("=" + g.f) : h += `1,0\r
""`;
            break;
          case "b":
            h += g.v ? n(1, "TRUE") : n(0, "FALSE");
            break;
          case "s":
            h += i(isNaN(+g.v) ? g.v : '="' + g.v + '"');
            break;
          case "d":
            g.w || (g.w = at(g.z || Fe[14], or(fr(g.v)))), h += n(g.w, "V");
            break;
          default:
            h += `1,0\r
""`;
        }
        h += `\r
`;
      }
      l.push(h);
    }
    return l.join("") + `-1,0\r
EOD`;
  }
  return {
    to_workbook: a,
    to_sheet: t,
    from_sheet: s
  };
}(), To = /* @__PURE__ */ function() {
  var e = { b: "\\", c: ":", n: `
` };
  function r(u) {
    return u.replace(/\\([bcn])/g, function(h, m) {
      return e[m];
    });
  }
  function t(u) {
    return u.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function a(u, h) {
    for (var m = u.split(`
`), g = -1, p = -1, v = 0, w = []; v !== m.length; ++v) {
      var _ = m[v].trim().split(":");
      if (_[0] === "cell") {
        var T = er(_[1]);
        if (w.length <= T.r)
          for (g = w.length; g <= T.r; ++g) w[g] || (w[g] = []);
        switch (g = T.r, p = T.c, _[2]) {
          case "t":
            w[g][p] = r(_[3]);
            break;
          case "v":
            w[g][p] = +_[3];
            break;
          case "vtf":
            var b = _[_.length - 1];
          case "vtc":
            switch (_[3]) {
              case "nl":
                w[g][p] = !!+_[4];
                break;
              default:
                w[g][p] = _[_.length - 1].charAt(0) == "#" ? { t: "e", v: Nr[_[_.length - 1]] } : +_[4];
                break;
            }
            _[2] == "vtf" && (w[g][p] = [w[g][p], b]);
        }
      }
    }
    return h && h.sheetRows && (w = w.slice(0, h.sheetRows)), w;
  }
  function n(u, h) {
    return Va(a(u, h), h);
  }
  function i(u, h) {
    return ea(n(u, h), h);
  }
  var s = [
    "socialcalc:version:1.5",
    "MIME-Version: 1.0",
    "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
  ].join(`
`), f = [
    "--SocialCalcSpreadsheetControlSave",
    "Content-type: text/plain; charset=UTF-8"
  ].join(`
`) + `
`, c = [
    "# SocialCalc Spreadsheet Control Save",
    "part:sheet"
  ].join(`
`), o = "--SocialCalcSpreadsheetControlSave--";
  function l(u) {
    if (!u || !u["!ref"]) return "";
    for (var h = [], m = [], g, p = "", v = Er(u["!ref"]), w = u["!data"] != null, _ = v.s.r; _ <= v.e.r; ++_)
      for (var T = v.s.c; T <= v.e.c; ++T)
        if (p = He({ r: _, c: T }), g = w ? (u["!data"][_] || [])[T] : u[p], !(!g || g.v == null || g.t === "z")) {
          switch (m = ["cell", p, "t"], g.t) {
            case "s":
              m.push(t(g.v));
              break;
            case "b":
              m[2] = "vt" + (g.f ? "f" : "c"), m[3] = "nl", m[4] = g.v ? "1" : "0", m[5] = t(g.f || (g.v ? "TRUE" : "FALSE"));
              break;
            case "d":
              var b = or(fr(g.v));
              m[2] = "vtc", m[3] = "nd", m[4] = "" + b, m[5] = g.w || at(g.z || Fe[14], b);
              break;
            case "n":
              isFinite(g.v) ? g.f ? (m[2] = "vtf", m[3] = "n", m[4] = g.v, m[5] = t(g.f)) : (m[2] = "v", m[3] = g.v) : (m[2] = "vt" + (g.f ? "f" : "c"), m[3] = "e" + Ir[isNaN(g.v) ? 36 : 7], m[4] = "0", m[5] = g.f || m[3].slice(1), m[6] = "e", m[7] = m[3].slice(1));
              break;
            case "e":
              continue;
          }
          h.push(m.join(":"));
        }
    return h.push("sheet:c:" + (v.e.c - v.s.c + 1) + ":r:" + (v.e.r - v.s.r + 1) + ":tvf:1"), h.push("valueformat:1:text-wiki"), h.join(`
`);
  }
  function d(u) {
    return [s, f, c, f, l(u), o].join(`
`);
  }
  return {
    to_workbook: i,
    to_sheet: n,
    from_sheet: d
  };
}(), Ba = /* @__PURE__ */ function() {
  function e(l, d, u, h, m) {
    m.raw ? d[u][h] = l : l === "" || (l === "TRUE" ? d[u][h] = !0 : l === "FALSE" ? d[u][h] = !1 : isNaN(it(l)) ? isNaN(hn(l).getDate()) ? l.charCodeAt(0) == 35 && Nr[l] != null ? d[u][h] = { t: "e", v: Nr[l], w: l } : d[u][h] = l : d[u][h] = fr(l) : d[u][h] = it(l));
  }
  function r(l, d) {
    var u = d || {}, h = [];
    if (!l || l.length === 0) return h;
    for (var m = l.split(/[\r\n]/), g = m.length - 1; g >= 0 && m[g].length === 0; ) --g;
    for (var p = 10, v = 0, w = 0; w <= g; ++w)
      v = m[w].indexOf(" "), v == -1 ? v = m[w].length : v++, p = Math.max(p, v);
    for (w = 0; w <= g; ++w) {
      h[w] = [];
      var _ = 0;
      for (e(m[w].slice(0, p).trim(), h, w, _, u), _ = 1; _ <= (m[w].length - p) / 10 + 1; ++_)
        e(m[w].slice(p + (_ - 1) * 10, p + _ * 10).trim(), h, w, _, u);
    }
    return u.sheetRows && (h = h.slice(0, u.sheetRows)), h;
  }
  var t = {
    44: ",",
    9: "	",
    59: ";",
    124: "|"
  }, a = {
    44: 3,
    9: 2,
    59: 1,
    124: 0
  };
  function n(l) {
    for (var d = {}, u = !1, h = 0, m = 0; h < l.length; ++h)
      (m = l.charCodeAt(h)) == 34 ? u = !u : !u && m in t && (d[m] = (d[m] || 0) + 1);
    m = [];
    for (h in d) Object.prototype.hasOwnProperty.call(d, h) && m.push([d[h], h]);
    if (!m.length) {
      d = a;
      for (h in d) Object.prototype.hasOwnProperty.call(d, h) && m.push([d[h], h]);
    }
    return m.sort(function(g, p) {
      return g[0] - p[0] || a[g[1]] - a[p[1]];
    }), t[m.pop()[1]] || 44;
  }
  function i(l, d) {
    var u = d || {}, h = "", m = {};
    u.dense && (m["!data"] = []);
    var g = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    l.slice(0, 4) == "sep=" ? l.charCodeAt(5) == 13 && l.charCodeAt(6) == 10 ? (h = l.charAt(4), l = l.slice(7)) : l.charCodeAt(5) == 13 || l.charCodeAt(5) == 10 ? (h = l.charAt(4), l = l.slice(6)) : h = n(l.slice(0, 1024)) : u && u.FS ? h = u.FS : h = n(l.slice(0, 1024));
    var p = 0, v = 0, w = 0, _ = 0, T = 0, b = h.charCodeAt(0), B = !1, y = 0, O = l.charCodeAt(0), R = u.dateNF != null ? x1(u.dateNF) : null;
    function P() {
      var L = l.slice(_, T);
      L.slice(-1) == "\r" && (L = L.slice(0, -1));
      var U = {};
      if (L.charAt(0) == '"' && L.charAt(L.length - 1) == '"' && (L = L.slice(1, -1).replace(/""/g, '"')), u.cellText !== !1 && (U.w = L), L.length === 0) U.t = "z";
      else if (u.raw)
        U.t = "s", U.v = L;
      else if (L.trim().length === 0)
        U.t = "s", U.v = L;
      else if (L.charCodeAt(0) == 61)
        L.charCodeAt(1) == 34 && L.charCodeAt(L.length - 1) == 34 ? (U.t = "s", U.v = L.slice(2, -1).replace(/""/g, '"')) : p2(L) ? (U.t = "s", U.f = L.slice(1), U.v = L) : (U.t = "s", U.v = L);
      else if (L == "TRUE")
        U.t = "b", U.v = !0;
      else if (L == "FALSE")
        U.t = "b", U.v = !1;
      else if (!isNaN(w = it(L)))
        U.t = "n", U.v = w;
      else if (!isNaN((w = hn(L)).getDate()) || R && L.match(R)) {
        if (U.z = u.dateNF || Fe[14], R && L.match(R)) {
          var K = A1(L, u.dateNF, L.match(R) || []);
          w = fr(K), u && u.UTC === !1 && (w = ma(w));
        } else u && u.UTC === !1 ? w = ma(w) : u.cellText !== !1 && u.dateNF && (U.w = at(U.z, w));
        u.cellDates ? (U.t = "d", U.v = w) : (U.t = "n", U.v = or(w)), u.cellNF || delete U.z;
      } else L.charCodeAt(0) == 35 && Nr[L] != null ? (U.t = "e", U.w = L, U.v = Nr[L]) : (U.t = "s", U.v = L);
      if (U.t == "z" || (u.dense ? (m["!data"][p] || (m["!data"][p] = []), m["!data"][p][v] = U) : m[He({ c: v, r: p })] = U), _ = T + 1, O = l.charCodeAt(_), g.e.c < v && (g.e.c = v), g.e.r < p && (g.e.r = p), y == b) ++v;
      else if (v = 0, ++p, u.sheetRows && u.sheetRows <= p) return !0;
    }
    e: for (; T < l.length; ++T) switch (y = l.charCodeAt(T)) {
      case 34:
        O === 34 && (B = !B);
        break;
      case 13:
        if (B) break;
        l.charCodeAt(T + 1) == 10 && ++T;
      case b:
      case 10:
        if (!B && P()) break e;
        break;
    }
    return T - _ > 0 && P(), m["!ref"] = Me(g), m;
  }
  function s(l, d) {
    return !(d && d.PRN) || d.FS || l.slice(0, 4) == "sep=" || l.indexOf("	") >= 0 || l.indexOf(",") >= 0 || l.indexOf(";") >= 0 ? i(l, d) : Va(r(l, d), d);
  }
  function f(l, d) {
    var u = "", h = d.type == "string" ? [0, 0, 0, 0] : zs(l, d);
    switch (d.type) {
      case "base64":
        u = st(l);
        break;
      case "binary":
        u = l;
        break;
      case "buffer":
        d.codepage == 65001 ? u = l.toString("utf8") : d.codepage && typeof Be < "u" ? u = Be.utils.decode(d.codepage, l) : u = Ue && Buffer.isBuffer(l) ? l.toString("binary") : bt(l);
        break;
      case "array":
        u = va(l);
        break;
      case "string":
        u = l;
        break;
      default:
        throw new Error("Unrecognized type " + d.type);
    }
    return h[0] == 239 && h[1] == 187 && h[2] == 191 ? u = Qe(u.slice(3)) : d.type != "string" && d.type != "buffer" && d.codepage == 65001 ? u = Qe(u) : d.type == "binary" && typeof Be < "u" && d.codepage && (u = Be.utils.decode(d.codepage, Be.utils.encode(28591, u))), u.slice(0, 19) == "socialcalc:version:" ? To.to_sheet(d.type == "string" ? u : Qe(u), d) : s(u, d);
  }
  function c(l, d) {
    return ea(f(l, d), d);
  }
  function o(l) {
    var d = [];
    if (!l["!ref"]) return "";
    for (var u = Ge(l["!ref"]), h, m = l["!data"] != null, g = u.s.r; g <= u.e.r; ++g) {
      for (var p = [], v = u.s.c; v <= u.e.c; ++v) {
        var w = He({ r: g, c: v });
        if (h = m ? (l["!data"][g] || [])[v] : l[w], !h || h.v == null) {
          p.push("          ");
          continue;
        }
        for (var _ = (h.w || (Ot(h), h.w) || "").slice(0, 10); _.length < 10; ) _ += " ";
        p.push(_ + (v === 0 ? " " : ""));
      }
      d.push(p.join(""));
    }
    return d.join(`
`);
  }
  return {
    to_workbook: c,
    to_sheet: f,
    from_sheet: o
  };
}();
function nd(e, r) {
  var t = r || {}, a = !!t.WTF;
  t.WTF = !0;
  try {
    var n = wo.to_workbook(e, t);
    return t.WTF = a, n;
  } catch (i) {
    if (t.WTF = a, i.message.indexOf("SYLK bad record ID") == -1 && a) throw i;
    return Ba.to_workbook(e, r);
  }
}
var oa = /* @__PURE__ */ function() {
  function e(A, M, D) {
    if (A) {
      yr(A, A.l || 0);
      for (var N = D.Enum || fe; A.l < A.length; ) {
        var j = A.read_shift(2), x = N[j] || N[65535], ne = A.read_shift(2), ve = A.l + ne, se = x.f && x.f(A, ne, D);
        if (A.l = ve, M(se, x, j)) return;
      }
    }
  }
  function r(A, M) {
    switch (M.type) {
      case "base64":
        return a(qr(st(A)), M);
      case "binary":
        return a(qr(A), M);
      case "buffer":
      case "array":
        return a(A, M);
    }
    throw "Unsupported type " + M.type;
  }
  var t = [
    "mmmm",
    "dd-mmm-yyyy",
    "dd-mmm",
    "mmm-yyyy",
    "@",
    // "text"?
    "mm/dd",
    "hh:mm:ss AM/PM",
    // 7
    "hh:mm AM/PM",
    "mm/dd/yyyy",
    "mm/dd",
    "hh:mm:ss",
    "hh:mm"
    // 12
  ];
  function a(A, M) {
    if (!A) return A;
    var D = M || {}, N = {}, j = "Sheet1", x = "", ne = 0, ve = {}, se = [], Ce = [], xe = [];
    D.dense && (xe = N["!data"] = []);
    var Oe = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, qe = D.sheetRows || 0, tr = {};
    if (A[4] == 81 && A[5] == 80 && A[6] == 87) return Se(A, M);
    if (A[2] == 0 && (A[3] == 8 || A[3] == 9) && A.length >= 16 && A[14] == 5 && A[15] === 108)
      throw new Error("Unsupported Works 3 for Mac file");
    if (A[2] == 2)
      D.Enum = fe, e(A, function(le, nt, Yr) {
        switch (Yr) {
          case 0:
            D.vers = le, le >= 4096 && (D.qpro = !0);
            break;
          case 255:
            D.vers = le, D.works = !0;
            break;
          case 6:
            Oe = le;
            break;
          case 204:
            le && (x = le);
            break;
          case 222:
            x = le;
            break;
          case 15:
          case 51:
            (!D.qpro && !D.works || Yr == 51) && le[1].v.charCodeAt(0) < 48 && (le[1].v = le[1].v.slice(1)), (D.works || D.works2) && (le[1].v = le[1].v.replace(/\r\n/g, `
`));
          case 13:
          case 14:
          case 16:
            (le[2] & 112) == 112 && (le[2] & 15) > 1 && (le[2] & 15) < 15 && (le[1].z = D.dateNF || t[(le[2] & 15) - 1] || Fe[14], D.cellDates && (le[1].v = Ht(le[1].v), le[1].t = typeof le[1].v == "number" ? "n" : "d")), D.qpro && le[3] > ne && (N["!ref"] = Me(Oe), ve[j] = N, se.push(j), N = {}, D.dense && (xe = N["!data"] = []), Oe = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, ne = le[3], j = x || "Sheet" + (ne + 1), x = "");
            var nr = D.dense ? (xe[le[0].r] || [])[le[0].c] : N[He(le[0])];
            if (nr) {
              nr.t = le[1].t, nr.v = le[1].v, le[1].z != null && (nr.z = le[1].z), le[1].f != null && (nr.f = le[1].f), tr = nr;
              break;
            }
            D.dense ? (xe[le[0].r] || (xe[le[0].r] = []), xe[le[0].r][le[0].c] = le[1]) : N[He(le[0])] = le[1], tr = le[1];
            break;
          case 21509:
            D.works2 = !0;
            break;
          case 21506:
            le == 5281 && (tr.z = "hh:mm:ss", D.cellDates && tr.t == "n" && (tr.v = Ht(tr.v), tr.t = typeof tr.v == "number" ? "n" : "d"));
            break;
        }
      }, D);
    else if (A[2] == 26 || A[2] == 14)
      D.Enum = Q, A[2] == 14 && (D.qpro = !0, A.l = 0), e(A, function(le, nt, Yr) {
        switch (Yr) {
          case 204:
            j = le;
            break;
          case 22:
            le[1].v.charCodeAt(0) < 48 && (le[1].v = le[1].v.slice(1)), le[1].v = le[1].v.replace(/\x0F./g, function(nr) {
              return String.fromCharCode(nr.charCodeAt(1) - 32);
            }).replace(/\r\n/g, `
`);
          case 23:
          case 24:
          case 25:
          case 37:
          case 39:
          case 40:
            if (le[3] > ne && (N["!ref"] = Me(Oe), ve[j] = N, se.push(j), N = {}, D.dense && (xe = N["!data"] = []), Oe = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, ne = le[3], j = "Sheet" + (ne + 1)), qe > 0 && le[0].r >= qe) break;
            D.dense ? (xe[le[0].r] || (xe[le[0].r] = []), xe[le[0].r][le[0].c] = le[1]) : N[He(le[0])] = le[1], Oe.e.c < le[0].c && (Oe.e.c = le[0].c), Oe.e.r < le[0].r && (Oe.e.r = le[0].r);
            break;
          case 27:
            le[14e3] && (Ce[le[14e3][0]] = le[14e3][1]);
            break;
          case 1537:
            Ce[le[0]] = le[1], le[0] == ne && (j = le[1]);
            break;
        }
      }, D);
    else throw new Error("Unrecognized LOTUS BOF " + A[2]);
    if (N["!ref"] = Me(Oe), ve[x || j] = N, se.push(x || j), !Ce.length) return { SheetNames: se, Sheets: ve };
    for (var lr = {}, Te = [], $e = 0; $e < Ce.length; ++$e) ve[se[$e]] ? (Te.push(Ce[$e] || se[$e]), lr[Ce[$e]] = ve[Ce[$e]] || ve[se[$e]]) : (Te.push(Ce[$e]), lr[Ce[$e]] = { "!ref": "A1" });
    return { SheetNames: Te, Sheets: lr };
  }
  function n(A, M) {
    var D = M || {};
    if (+D.codepage >= 0 && dt(+D.codepage), D.type == "string") throw new Error("Cannot write WK1 to JS string");
    var N = $r();
    if (!A["!ref"]) throw new Error("Cannot export empty sheet to WK1");
    var j = Ge(A["!ref"]), x = A["!data"] != null, ne = [];
    J(N, 0, s(1030)), J(N, 6, o(j));
    for (var ve = Math.min(j.e.r, 8191), se = j.s.c; se <= j.e.c; ++se) ne[se] = Ne(se);
    for (var Ce = j.s.r; Ce <= ve; ++Ce) {
      var xe = Xe(Ce);
      for (se = j.s.c; se <= j.e.c; ++se) {
        var Oe = x ? (A["!data"][Ce] || [])[se] : A[ne[se] + xe];
        if (!(!Oe || Oe.t == "z"))
          switch (Oe.t) {
            case "n":
              (Oe.v | 0) == Oe.v && Oe.v >= -32768 && Oe.v <= 32767 ? J(N, 13, p(Ce, se, Oe)) : J(N, 14, w(Ce, se, Oe));
              break;
            case "d":
              var qe = or(Oe.v);
              (qe | 0) == qe && qe >= -32768 && qe <= 32767 ? J(N, 13, p(Ce, se, { v: qe, z: Oe.z || Fe[14] })) : J(N, 14, w(Ce, se, { v: qe, z: Oe.z || Fe[14] }));
              break;
            default:
              var tr = Ot(Oe);
              J(N, 15, h(Ce, se, tr.slice(0, 239)));
          }
      }
    }
    return J(N, 1), N.end();
  }
  function i(A, M) {
    var D = M || {};
    if (+D.codepage >= 0 && dt(+D.codepage), D.type == "string") throw new Error("Cannot write WK3 to JS string");
    var N = $r();
    J(N, 0, f(A));
    for (var j = 0, x = 0; j < A.SheetNames.length; ++j) (A.Sheets[A.SheetNames[j]] || {})["!ref"] && J(N, 27, oe(A.SheetNames[j], x++));
    var ne = 0;
    for (j = 0; j < A.SheetNames.length; ++j) {
      var ve = A.Sheets[A.SheetNames[j]];
      if (!(!ve || !ve["!ref"])) {
        for (var se = Ge(ve["!ref"]), Ce = ve["!data"] != null, xe = [], Oe = Math.min(se.e.r, 8191), qe = se.s.r; qe <= Oe; ++qe)
          for (var tr = Xe(qe), lr = se.s.c; lr <= se.e.c; ++lr) {
            qe === se.s.r && (xe[lr] = Ne(lr));
            var Te = xe[lr] + tr, $e = Ce ? (ve["!data"][qe] || [])[lr] : ve[Te];
            if (!(!$e || $e.t == "z"))
              if ($e.t == "n")
                J(N, 23, K(qe, lr, ne, $e.v));
              else {
                var le = Ot($e);
                J(N, 22, P(qe, lr, ne, le.slice(0, 239)));
              }
          }
        ++ne;
      }
    }
    return J(N, 1), N.end();
  }
  function s(A) {
    var M = H(2);
    return M.write_shift(2, A), M;
  }
  function f(A) {
    var M = H(26);
    M.write_shift(2, 4096), M.write_shift(2, 4), M.write_shift(4, 0);
    for (var D = 0, N = 0, j = 0, x = 0; x < A.SheetNames.length; ++x) {
      var ne = A.SheetNames[x], ve = A.Sheets[ne];
      if (!(!ve || !ve["!ref"])) {
        ++j;
        var se = Er(ve["!ref"]);
        D < se.e.r && (D = se.e.r), N < se.e.c && (N = se.e.c);
      }
    }
    return D > 8191 && (D = 8191), M.write_shift(2, D), M.write_shift(1, j), M.write_shift(1, N), M.write_shift(2, 0), M.write_shift(2, 0), M.write_shift(1, 1), M.write_shift(1, 2), M.write_shift(4, 0), M.write_shift(4, 0), M;
  }
  function c(A, M, D) {
    var N = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return M == 8 && D.qpro ? (N.s.c = A.read_shift(1), A.l++, N.s.r = A.read_shift(2), N.e.c = A.read_shift(1), A.l++, N.e.r = A.read_shift(2), N) : (N.s.c = A.read_shift(2), N.s.r = A.read_shift(2), M == 12 && D.qpro && (A.l += 2), N.e.c = A.read_shift(2), N.e.r = A.read_shift(2), M == 12 && D.qpro && (A.l += 2), N.s.c == 65535 && (N.s.c = N.e.c = N.s.r = N.e.r = 0), N);
  }
  function o(A) {
    var M = H(8);
    return M.write_shift(2, A.s.c), M.write_shift(2, A.s.r), M.write_shift(2, A.e.c), M.write_shift(2, A.e.r), M;
  }
  function l(A, M, D) {
    var N = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return D.qpro && D.vers != 20768 ? (N[0].c = A.read_shift(1), N[3] = A.read_shift(1), N[0].r = A.read_shift(2), A.l += 2) : D.works ? (N[0].c = A.read_shift(2), N[0].r = A.read_shift(2), N[2] = A.read_shift(2)) : (N[2] = A.read_shift(1), N[0].c = A.read_shift(2), N[0].r = A.read_shift(2)), N;
  }
  function d(A) {
    return A.z && ft(A.z) ? 240 | (t.indexOf(A.z) + 1 || 2) : 255;
  }
  function u(A, M, D) {
    var N = A.l + M, j = l(A, M, D);
    if (j[1].t = "s", (D.vers & 65534) == 20768) {
      A.l++;
      var x = A.read_shift(1);
      return j[1].v = A.read_shift(x, "utf8"), j;
    }
    return D.qpro && A.l++, j[1].v = A.read_shift(N - A.l, "cstr"), j;
  }
  function h(A, M, D) {
    var N = H(7 + D.length);
    N.write_shift(1, 255), N.write_shift(2, M), N.write_shift(2, A), N.write_shift(1, 39);
    for (var j = 0; j < N.length; ++j) {
      var x = D.charCodeAt(j);
      N.write_shift(1, x >= 128 ? 95 : x);
    }
    return N.write_shift(1, 0), N;
  }
  function m(A, M, D) {
    var N = A.l + M, j = l(A, M, D);
    if (j[1].t = "s", D.vers == 20768) {
      var x = A.read_shift(1);
      return j[1].v = A.read_shift(x, "utf8"), j;
    }
    return j[1].v = A.read_shift(N - A.l, "cstr"), j;
  }
  function g(A, M, D) {
    var N = l(A, M, D);
    return N[1].v = A.read_shift(2, "i"), N;
  }
  function p(A, M, D) {
    var N = H(7);
    return N.write_shift(1, d(D)), N.write_shift(2, M), N.write_shift(2, A), N.write_shift(2, D.v, "i"), N;
  }
  function v(A, M, D) {
    var N = l(A, M, D);
    return N[1].v = A.read_shift(8, "f"), N;
  }
  function w(A, M, D) {
    var N = H(13);
    return N.write_shift(1, d(D)), N.write_shift(2, M), N.write_shift(2, A), N.write_shift(8, D.v, "f"), N;
  }
  function _(A, M, D) {
    var N = A.l + M, j = l(A, M, D);
    if (j[1].v = A.read_shift(8, "f"), D.qpro) A.l = N;
    else {
      var x = A.read_shift(2);
      y(A.slice(A.l, A.l + x), j), A.l += x;
    }
    return j;
  }
  function T(A, M, D) {
    var N = M & 32768;
    return M &= -32769, M = (N ? A : 0) + (M >= 8192 ? M - 16384 : M), (N ? "" : "$") + (D ? Ne(M) : Xe(M));
  }
  var b = {
    31: ["NA", 0],
    // 0x20: ["ERR", 0],
    33: ["ABS", 1],
    34: ["TRUNC", 1],
    35: ["SQRT", 1],
    36: ["LOG", 1],
    37: ["LN", 1],
    38: ["PI", 0],
    39: ["SIN", 1],
    40: ["COS", 1],
    41: ["TAN", 1],
    42: ["ATAN2", 2],
    43: ["ATAN", 1],
    44: ["ASIN", 1],
    45: ["ACOS", 1],
    46: ["EXP", 1],
    47: ["MOD", 2],
    // 0x30
    49: ["ISNA", 1],
    50: ["ISERR", 1],
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    53: ["RAND", 0],
    54: ["DATE", 3],
    // 0x37 NOW
    // 0x38 PMT
    // 0x39 PV
    // 0x3A FV
    // 0x3B IF
    // 0x3C DAY
    // 0x3D MONTH
    // 0x3E YEAR
    63: ["ROUND", 2],
    64: ["TIME", 3],
    // 0x41 HOUR
    // 0x42 MINUTE
    // 0x43 SECOND
    68: ["ISNUMBER", 1],
    69: ["ISTEXT", 1],
    70: ["LEN", 1],
    71: ["VALUE", 1],
    // 0x48: ["FIXED", ?? 1],
    73: ["MID", 3],
    74: ["CHAR", 1],
    // 0x4B
    // 0x4C FIND
    // 0x4D DATEVALUE
    // 0x4E TIMEVALUE
    // 0x4F CELL
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    // 0x55 VLOOKUP
    // 0x56 NPV
    // 0x57 VAR
    // 0x58 STD
    // 0x59 IRR
    // 0x5A HLOOKUP
    // 0x5B DSUM
    // 0x5C DAVERAGE
    // 0x5D DCOUNTA
    // 0x5E DMIN
    // 0x5F DMAX
    // 0x60 DVARP
    // 0x61 DSTDEVP
    // 0x62 INDEX
    // 0x63 COLS
    // 0x64 ROWS
    // 0x65 REPEAT
    102: ["UPPER", 1],
    103: ["LOWER", 1],
    // 0x68 LEFT
    // 0x69 RIGHT
    // 0x6A REPLACE
    107: ["PROPER", 1],
    // 0x6C CELL
    109: ["TRIM", 1],
    // 0x6E CLEAN
    111: ["T", 1]
    // 0x70 V
  }, B = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "",
    "+",
    "-",
    "*",
    "/",
    "^",
    "=",
    "<>",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "<=",
    ">=",
    "<",
    ">",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "&",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    // eslint-disable-line no-mixed-spaces-and-tabs
  ];
  function y(A, M) {
    yr(A, 0);
    for (var D = [], N = 0, j = "", x = "", ne = "", ve = ""; A.l < A.length; ) {
      var se = A[A.l++];
      switch (se) {
        case 0:
          D.push(A.read_shift(8, "f"));
          break;
        case 1:
          x = T(M[0].c, A.read_shift(2), !0), j = T(M[0].r, A.read_shift(2), !1), D.push(x + j);
          break;
        case 2:
          {
            var Ce = T(M[0].c, A.read_shift(2), !0), xe = T(M[0].r, A.read_shift(2), !1);
            x = T(M[0].c, A.read_shift(2), !0), j = T(M[0].r, A.read_shift(2), !1), D.push(Ce + xe + ":" + x + j);
          }
          break;
        case 3:
          if (A.l < A.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          D.push("(" + D.pop() + ")");
          break;
        case 5:
          D.push(A.read_shift(2));
          break;
        case 6:
          {
            for (var Oe = ""; se = A[A.l++]; ) Oe += String.fromCharCode(se);
            D.push('"' + Oe.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          D.push("-" + D.pop());
          break;
        case 23:
          D.push("+" + D.pop());
          break;
        case 22:
          D.push("NOT(" + D.pop() + ")");
          break;
        case 20:
        case 21:
          ve = D.pop(), ne = D.pop(), D.push(["AND", "OR"][se - 20] + "(" + ne + "," + ve + ")");
          break;
        default:
          if (se < 32 && B[se])
            ve = D.pop(), ne = D.pop(), D.push(ne + B[se] + ve);
          else if (b[se]) {
            if (N = b[se][1], N == 69 && (N = A[A.l++]), N > D.length) {
              console.error("WK1 bad formula parse 0x" + se.toString(16) + ":|" + D.join("|") + "|");
              return;
            }
            var qe = D.slice(-N);
            D.length -= N, D.push(b[se][0] + "(" + qe.join(",") + ")");
          } else return se <= 7 ? console.error("WK1 invalid opcode " + se.toString(16)) : se <= 24 ? console.error("WK1 unsupported op " + se.toString(16)) : se <= 30 ? console.error("WK1 invalid opcode " + se.toString(16)) : se <= 115 ? console.error("WK1 unsupported function opcode " + se.toString(16)) : console.error("WK1 unrecognized opcode " + se.toString(16));
      }
    }
    D.length == 1 ? M[1].f = "" + D[0] : console.error("WK1 bad formula parse |" + D.join("|") + "|");
  }
  function O(A) {
    var M = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return M[0].r = A.read_shift(2), M[3] = A[A.l++], M[0].c = A[A.l++], M;
  }
  function R(A, M) {
    var D = O(A);
    return D[1].t = "s", D[1].v = A.read_shift(M - 4, "cstr"), D;
  }
  function P(A, M, D, N) {
    var j = H(6 + N.length);
    j.write_shift(2, A), j.write_shift(1, D), j.write_shift(1, M), j.write_shift(1, 39);
    for (var x = 0; x < N.length; ++x) {
      var ne = N.charCodeAt(x);
      j.write_shift(1, ne >= 128 ? 95 : ne);
    }
    return j.write_shift(1, 0), j;
  }
  function L(A, M) {
    var D = O(A);
    D[1].v = A.read_shift(2);
    var N = D[1].v >> 1;
    if (D[1].v & 1)
      switch (N & 7) {
        case 0:
          N = (N >> 3) * 5e3;
          break;
        case 1:
          N = (N >> 3) * 500;
          break;
        case 2:
          N = (N >> 3) / 20;
          break;
        case 3:
          N = (N >> 3) / 200;
          break;
        case 4:
          N = (N >> 3) / 2e3;
          break;
        case 5:
          N = (N >> 3) / 2e4;
          break;
        case 6:
          N = (N >> 3) / 16;
          break;
        case 7:
          N = (N >> 3) / 64;
          break;
      }
    return D[1].v = N, D;
  }
  function U(A, M) {
    var D = O(A), N = A.read_shift(4), j = A.read_shift(4), x = A.read_shift(2);
    if (x == 65535)
      return N === 0 && j === 3221225472 ? (D[1].t = "e", D[1].v = 15) : N === 0 && j === 3489660928 ? (D[1].t = "e", D[1].v = 42) : D[1].v = 0, D;
    var ne = x >>> 15;
    x = (x & 32767) - 16383;
    var ve = j / Math.pow(2, 31) + N / Math.pow(2, 63);
    return D[1].v = (1 - ne * 2) * (x < -1022 ? ve * Math.pow(2, x + 1022) * Math.pow(2, -1022) : ve * Math.pow(2, x)), D;
  }
  function K(A, M, D, N) {
    var j = H(14);
    if (j.write_shift(2, A), j.write_shift(1, D), j.write_shift(1, M), N == 0)
      return j.write_shift(4, 0), j.write_shift(4, 0), j.write_shift(2, 65535), j;
    var x = 0, ne = 0, ve = 0, se = 0;
    return N < 0 && (x = 1, N = -N), ne = Math.min(1023, Math.floor(Math.log2(N))), N /= Math.pow(2, ne), N < 1 ? (N *= 2, --ne) : N >= 2 && (N /= 2, ++ne), N *= Math.pow(2, 31), se = N >>> 0, N -= se, se |= 2147483648, se >>>= 0, N *= Math.pow(2, 32), ve = N >>> 0, j.write_shift(4, ve), j.write_shift(4, se), ne += 16383 + (x ? 32768 : 0), j.write_shift(2, ne), j;
  }
  function me(A, M) {
    var D = U(A);
    return A.l += M - 14, D;
  }
  function de(A, M) {
    var D = O(A), N = A.read_shift(4);
    return D[1].v = N >> 6, D;
  }
  function ae(A, M) {
    var D = O(A), N = A.read_shift(8, "f");
    return D[1].v = N, D;
  }
  function he(A, M) {
    var D = ae(A);
    return A.l += M - 12, D;
  }
  function q(A, M) {
    return A[A.l + M - 1] == 0 ? A.read_shift(M, "cstr") : "";
  }
  function ge(A, M) {
    var D = A[A.l++];
    D > M - 1 && (D = M - 1);
    for (var N = ""; N.length < D; ) N += String.fromCharCode(A[A.l++]);
    return N;
  }
  function z(A, M, D) {
    if (!(!D.qpro || M < 21)) {
      var N = A.read_shift(1);
      A.l += 17, A.l += 1, A.l += 2;
      var j = A.read_shift(M - 21, "cstr");
      return [N, j];
    }
  }
  function be(A, M) {
    for (var D = {}, N = A.l + M; A.l < N; ) {
      var j = A.read_shift(2);
      if (j == 14e3) {
        for (D[j] = [0, ""], D[j][0] = A.read_shift(2); A[A.l]; )
          D[j][1] += String.fromCharCode(A[A.l]), A.l++;
        A.l++;
      }
    }
    return D;
  }
  function oe(A, M) {
    var D = H(5 + A.length);
    D.write_shift(2, 14e3), D.write_shift(2, M);
    for (var N = 0; N < A.length; ++N) {
      var j = A.charCodeAt(N);
      D[D.l++] = j > 127 ? 95 : j;
    }
    return D[D.l++] = 0, D;
  }
  var fe = {
    0: { n: "BOF", f: ur },
    1: { n: "EOF" },
    2: { n: "CALCMODE" },
    3: { n: "CALCORDER" },
    4: { n: "SPLIT" },
    5: { n: "SYNC" },
    6: { n: "RANGE", f: c },
    7: { n: "WINDOW1" },
    8: { n: "COLW1" },
    9: { n: "WINTWO" },
    10: { n: "COLW2" },
    11: { n: "NAME" },
    12: { n: "BLANK" },
    13: { n: "INTEGER", f: g },
    14: { n: "NUMBER", f: v },
    15: { n: "LABEL", f: u },
    16: { n: "FORMULA", f: _ },
    24: { n: "TABLE" },
    25: { n: "ORANGE" },
    26: { n: "PRANGE" },
    27: { n: "SRANGE" },
    28: { n: "FRANGE" },
    29: { n: "KRANGE1" },
    32: { n: "HRANGE" },
    35: { n: "KRANGE2" },
    36: { n: "PROTEC" },
    37: { n: "FOOTER" },
    38: { n: "HEADER" },
    39: { n: "SETUP" },
    40: { n: "MARGINS" },
    41: { n: "LABELFMT" },
    42: { n: "TITLES" },
    43: { n: "SHEETJS" },
    45: { n: "GRAPH" },
    46: { n: "NGRAPH" },
    47: { n: "CALCCOUNT" },
    48: { n: "UNFORMATTED" },
    49: { n: "CURSORW12" },
    50: { n: "WINDOW" },
    51: { n: "STRING", f: m },
    55: { n: "PASSWORD" },
    56: { n: "LOCKED" },
    60: { n: "QUERY" },
    61: { n: "QUERYNAME" },
    62: { n: "PRINT" },
    63: { n: "PRINTNAME" },
    64: { n: "GRAPH2" },
    65: { n: "GRAPHNAME" },
    66: { n: "ZOOM" },
    67: { n: "SYMSPLIT" },
    68: { n: "NSROWS" },
    69: { n: "NSCOLS" },
    70: { n: "RULER" },
    71: { n: "NNAME" },
    72: { n: "ACOMM" },
    73: { n: "AMACRO" },
    74: { n: "PARSE" },
    // 0x0064
    102: { n: "PRANGES??" },
    103: { n: "RRANGES??" },
    104: { n: "FNAME??" },
    105: { n: "MRANGES??" },
    // 0x0096
    // 0x0099
    // 0x009A
    // 0x009B
    // 0x009C
    // 0x00C0
    // 0x00C7
    // 0x00C9
    204: { n: "SHEETNAMECS", f: q },
    // 0x00CD
    222: { n: "SHEETNAMELP", f: ge },
    255: { n: "BOF", f: ur },
    21506: { n: "WKSNF", f: ur },
    65535: { n: "" }
  }, Q = {
    0: { n: "BOF" },
    1: { n: "EOF" },
    2: { n: "PASSWORD" },
    3: { n: "CALCSET" },
    4: { n: "WINDOWSET" },
    5: { n: "SHEETCELLPTR" },
    6: { n: "SHEETLAYOUT" },
    7: { n: "COLUMNWIDTH" },
    8: { n: "HIDDENCOLUMN" },
    9: { n: "USERRANGE" },
    10: { n: "SYSTEMRANGE" },
    11: { n: "ZEROFORCE" },
    12: { n: "SORTKEYDIR" },
    13: { n: "FILESEAL" },
    14: { n: "DATAFILLNUMS" },
    15: { n: "PRINTMAIN" },
    16: { n: "PRINTSTRING" },
    17: { n: "GRAPHMAIN" },
    18: { n: "GRAPHSTRING" },
    19: { n: "??" },
    20: { n: "ERRCELL" },
    21: { n: "NACELL" },
    22: { n: "LABEL16", f: R },
    23: { n: "NUMBER17", f: U },
    24: { n: "NUMBER18", f: L },
    25: { n: "FORMULA19", f: me },
    26: { n: "FORMULA1A" },
    27: { n: "XFORMAT", f: be },
    28: { n: "DTLABELMISC" },
    29: { n: "DTLABELCELL" },
    30: { n: "GRAPHWINDOW" },
    31: { n: "CPA" },
    32: { n: "LPLAUTO" },
    33: { n: "QUERY" },
    34: { n: "HIDDENSHEET" },
    35: { n: "??" },
    37: { n: "NUMBER25", f: de },
    38: { n: "??" },
    39: { n: "NUMBER27", f: ae },
    40: { n: "FORMULA28", f: he },
    142: { n: "??" },
    147: { n: "??" },
    150: { n: "??" },
    151: { n: "??" },
    152: { n: "??" },
    153: { n: "??" },
    154: { n: "??" },
    155: { n: "??" },
    156: { n: "??" },
    163: { n: "??" },
    174: { n: "??" },
    175: { n: "??" },
    176: { n: "??" },
    177: { n: "??" },
    184: { n: "??" },
    185: { n: "??" },
    186: { n: "??" },
    187: { n: "??" },
    188: { n: "??" },
    195: { n: "??" },
    201: { n: "??" },
    204: { n: "SHEETNAMECS", f: q },
    205: { n: "??" },
    206: { n: "??" },
    207: { n: "??" },
    208: { n: "??" },
    256: { n: "??" },
    259: { n: "??" },
    260: { n: "??" },
    261: { n: "??" },
    262: { n: "??" },
    263: { n: "??" },
    265: { n: "??" },
    266: { n: "??" },
    267: { n: "??" },
    268: { n: "??" },
    270: { n: "??" },
    271: { n: "??" },
    384: { n: "??" },
    389: { n: "??" },
    390: { n: "??" },
    393: { n: "??" },
    396: { n: "??" },
    512: { n: "??" },
    514: { n: "??" },
    513: { n: "??" },
    516: { n: "??" },
    517: { n: "??" },
    640: { n: "??" },
    641: { n: "??" },
    642: { n: "??" },
    643: { n: "??" },
    644: { n: "??" },
    645: { n: "??" },
    646: { n: "??" },
    647: { n: "??" },
    648: { n: "??" },
    658: { n: "??" },
    659: { n: "??" },
    660: { n: "??" },
    661: { n: "??" },
    662: { n: "??" },
    665: { n: "??" },
    666: { n: "??" },
    768: { n: "??" },
    772: { n: "??" },
    1537: { n: "SHEETINFOQP", f: z },
    1600: { n: "??" },
    1602: { n: "??" },
    1793: { n: "??" },
    1794: { n: "??" },
    1795: { n: "??" },
    1796: { n: "??" },
    1920: { n: "??" },
    2048: { n: "??" },
    2049: { n: "??" },
    2052: { n: "??" },
    2688: { n: "??" },
    10998: { n: "??" },
    12849: { n: "??" },
    28233: { n: "??" },
    28484: { n: "??" },
    65535: { n: "" }
  }, _e = {
    5: "dd-mmm-yy",
    6: "dd-mmm",
    7: "mmm-yy",
    8: "mm/dd/yy",
    // Long Date Intl
    10: "hh:mm:ss AM/PM",
    11: "hh:mm AM/PM",
    14: "dd-mmm-yyyy",
    15: "mmm-yyyy",
    /* It is suspected that the the low nybble specifies decimal places */
    34: "0.00",
    50: "0.00;[Red]0.00",
    66: "0.00;(0.00)",
    82: "0.00;[Red](0.00)",
    162: '"$"#,##0.00;\\("$"#,##0.00\\)',
    288: "0%",
    304: "0E+00",
    320: "# ?/?"
  };
  function Ee(A) {
    var M = A.read_shift(2), D = A.read_shift(1);
    if (D != 0) throw "unsupported QPW string type " + D.toString(16);
    return A.read_shift(M, "sbcs-cont");
  }
  function Se(A, M) {
    yr(A, 0);
    var D = M || {}, N = {};
    D.dense && (N["!data"] = []);
    var j = [], x = "", ne = { s: { r: -1, c: -1 }, e: { r: -1, c: -1 } }, ve = 0, se = 0, Ce = 0, xe = 0, Oe = { SheetNames: [], Sheets: {} }, qe = [];
    e: for (; A.l < A.length; ) {
      var tr = A.read_shift(2), lr = A.read_shift(2), Te = A.slice(A.l, A.l + lr);
      switch (yr(Te, 0), tr) {
        case 1:
          if (Te.read_shift(4) != 962023505) throw "Bad QPW9 BOF!";
          break;
        case 2:
          break e;
        case 8:
          break;
        case 10:
          for (var $e = Te.read_shift(4), le = (Te.length - Te.l) / $e | 0, nt = 0; nt < $e; ++nt) {
            var Yr = Te.l + le, nr = {};
            Te.l += 2, nr.numFmtId = Te.read_shift(2), _e[nr.numFmtId] && (nr.z = _e[nr.numFmtId]), Te.l = Yr, qe.push(nr);
          }
          break;
        case 1025:
          break;
        case 1026:
          break;
        case 1031:
          for (Te.l += 12; Te.l < Te.length; )
            ve = Te.read_shift(2), se = Te.read_shift(1), j.push(Te.read_shift(ve, "cstr"));
          break;
        case 1032:
          break;
        case 1537:
          {
            var pt = Te.read_shift(2);
            N = {}, D.dense && (N["!data"] = []), ne.s.c = Te.read_shift(2), ne.e.c = Te.read_shift(2), ne.s.r = Te.read_shift(4), ne.e.r = Te.read_shift(4), Te.l += 4, Te.l + 2 < Te.length && (ve = Te.read_shift(2), se = Te.read_shift(1), x = ve == 0 ? "" : Te.read_shift(ve, "cstr")), x || (x = Ne(pt));
          }
          break;
        case 1538:
          {
            if (ne.s.c > 255 || ne.s.r > 999999) break;
            ne.e.c < ne.s.c && (ne.e.c = ne.s.c), ne.e.r < ne.s.r && (ne.e.r = ne.s.r), N["!ref"] = Me(ne), Ln(Oe, N, x);
          }
          break;
        case 2561:
          Ce = Te.read_shift(2), ne.e.c < Ce && (ne.e.c = Ce), ne.s.c > Ce && (ne.s.c = Ce), xe = Te.read_shift(4), ne.s.r > xe && (ne.s.r = xe), xe = Te.read_shift(4), ne.e.r < xe && (ne.e.r = xe);
          break;
        case 3073:
          {
            xe = Te.read_shift(4), ve = Te.read_shift(4), ne.s.r > xe && (ne.s.r = xe), ne.e.r < xe + ve - 1 && (ne.e.r = xe + ve - 1);
            for (var Pr = Ne(Ce); Te.l < Te.length; ) {
              var pe = { t: "z" }, Ye = Te.read_shift(1), gr = -1;
              Ye & 128 && (gr = Te.read_shift(2));
              var _r = Ye & 64 ? Te.read_shift(2) - 1 : 0;
              switch (Ye & 31) {
                case 0:
                  break;
                case 1:
                  break;
                case 2:
                  pe = { t: "n", v: Te.read_shift(2) };
                  break;
                case 3:
                  pe = { t: "n", v: Te.read_shift(2, "i") };
                  break;
                case 4:
                  pe = { t: "n", v: ki(Te) };
                  break;
                case 5:
                  pe = { t: "n", v: Te.read_shift(8, "f") };
                  break;
                case 7:
                  pe = { t: "s", v: j[se = Te.read_shift(4) - 1] };
                  break;
                case 8:
                  pe = { t: "n", v: Te.read_shift(8, "f") }, Te.l += 2, Te.l += 4, isNaN(pe.v) && (pe = { t: "e", v: 15 });
                  break;
                default:
                  throw "Unrecognized QPW cell type " + (Ye & 31);
              }
              gr != -1 && (qe[gr - 1] || {}).z && (pe.z = qe[gr - 1].z);
              var Dt = 0;
              if (Ye & 32) switch (Ye & 31) {
                case 2:
                  Dt = Te.read_shift(2);
                  break;
                case 3:
                  Dt = Te.read_shift(2, "i");
                  break;
                case 7:
                  Dt = Te.read_shift(2);
                  break;
                default:
                  throw "Unsupported delta for QPW cell type " + (Ye & 31);
              }
              if (!(!D.sheetStubs && pe.t == "z")) {
                var ra = je(pe);
                pe.t == "n" && pe.z && ft(pe.z) && D.cellDates && (ra.v = Ht(pe.v), ra.t = typeof ra.v == "number" ? "n" : "d"), N["!data"] != null ? (N["!data"][xe] || (N["!data"][xe] = []), N["!data"][xe][Ce] = ra) : N[Pr + Xe(xe)] = ra;
              }
              for (++xe, --ve; _r-- > 0 && ve >= 0; ) {
                if (Ye & 32) switch (Ye & 31) {
                  case 2:
                    pe = { t: "n", v: pe.v + Dt & 65535 };
                    break;
                  case 3:
                    pe = { t: "n", v: pe.v + Dt & 65535 }, pe.v > 32767 && (pe.v -= 65536);
                    break;
                  case 7:
                    pe = { t: "s", v: j[se = se + Dt >>> 0] };
                    break;
                  default:
                    throw "Cannot apply delta for QPW cell type " + (Ye & 31);
                }
                else switch (Ye & 31) {
                  case 1:
                    pe = { t: "z" };
                    break;
                  case 2:
                    pe = { t: "n", v: Te.read_shift(2) };
                    break;
                  case 7:
                    pe = { t: "s", v: j[se = Te.read_shift(4) - 1] };
                    break;
                  default:
                    throw "Cannot apply repeat for QPW cell type " + (Ye & 31);
                }
                !D.sheetStubs && pe.t == "z" || (N["!data"] != null ? (N["!data"][xe] || (N["!data"][xe] = []), N["!data"][xe][Ce] = pe) : N[Pr + Xe(xe)] = pe), ++xe, --ve;
              }
            }
          }
          break;
        case 3074:
          {
            Ce = Te.read_shift(2), xe = Te.read_shift(4);
            var Bn = Ee(Te);
            N["!data"] != null ? (N["!data"][xe] || (N["!data"][xe] = []), N["!data"][xe][Ce] = { t: "s", v: Bn }) : N[Ne(Ce) + Xe(xe)] = { t: "s", v: Bn };
          }
          break;
      }
      A.l += lr;
    }
    return Oe;
  }
  return {
    sheet_to_wk1: n,
    book_to_wk3: i,
    to_workbook: r
  };
}();
function id(e) {
  var r = {}, t = e.match(Dr), a = 0, n = !1;
  if (t) for (; a != t.length; ++a) {
    var i = ke(t[a]);
    switch (i[0].replace(/<\w*:/g, "<")) {
      case "<condense":
        break;
      case "<extend":
        break;
      case "<shadow":
        if (!i.val) break;
      case "<shadow>":
      case "<shadow/>":
        r.shadow = 1;
        break;
      case "</shadow>":
        break;
      case "<charset":
        if (i.val == "1") break;
        r.cp = fs[parseInt(i.val, 10)];
        break;
      case "<outline":
        if (!i.val) break;
      case "<outline>":
      case "<outline/>":
        r.outline = 1;
        break;
      case "</outline>":
        break;
      case "<rFont":
        r.name = i.val;
        break;
      case "<sz":
        r.sz = i.val;
        break;
      case "<strike":
        if (!i.val) break;
      case "<strike>":
      case "<strike/>":
        r.strike = 1;
        break;
      case "</strike>":
        break;
      case "<u":
        if (!i.val) break;
        switch (i.val) {
          case "double":
            r.uval = "double";
            break;
          case "singleAccounting":
            r.uval = "single-accounting";
            break;
          case "doubleAccounting":
            r.uval = "double-accounting";
            break;
        }
      case "<u>":
      case "<u/>":
        r.u = 1;
        break;
      case "</u>":
        break;
      case "<b":
        if (i.val == "0") break;
      case "<b>":
      case "<b/>":
        r.b = 1;
        break;
      case "</b>":
        break;
      case "<i":
        if (i.val == "0") break;
      case "<i>":
      case "<i/>":
        r.i = 1;
        break;
      case "</i>":
        break;
      case "<color":
        i.rgb && (r.color = i.rgb.slice(2, 8));
        break;
      case "<color>":
      case "<color/>":
      case "</color>":
        break;
      case "<family":
        r.family = i.val;
        break;
      case "<family>":
      case "<family/>":
      case "</family>":
        break;
      case "<vertAlign":
        r.valign = i.val;
        break;
      case "<vertAlign>":
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      case "<scheme":
        break;
      case "<scheme>":
      case "<scheme/>":
      case "</scheme>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      default:
        if (i[0].charCodeAt(1) !== 47 && !n) throw new Error("Unrecognized rich format " + i[0]);
    }
  }
  return r;
}
var sd = /* @__PURE__ */ function() {
  function e(a) {
    var n = Or(a, "t");
    if (!n) return { t: "s", v: "" };
    var i = { t: "s", v: ze(n[1]) }, s = Or(a, "rPr");
    return s && (i.s = id(s[1])), i;
  }
  var r = /<(?:\w+:)?r>/g, t = /<\/(?:\w+:)?r>/;
  return function(n) {
    return n.replace(r, "").split(t).map(e).filter(function(i) {
      return i.v;
    });
  };
}(), fd = /* @__PURE__ */ function() {
  var r = /(\r\n|\n)/g;
  function t(n, i, s) {
    var f = [];
    n.u && f.push("text-decoration: underline;"), n.uval && f.push("text-underline-style:" + n.uval + ";"), n.sz && f.push("font-size:" + n.sz + "pt;"), n.outline && f.push("text-effect: outline;"), n.shadow && f.push("text-shadow: auto;"), i.push('<span style="' + f.join("") + '">'), n.b && (i.push("<b>"), s.push("</b>")), n.i && (i.push("<i>"), s.push("</i>")), n.strike && (i.push("<s>"), s.push("</s>"));
    var c = n.valign || "";
    return c == "superscript" || c == "super" ? c = "sup" : c == "subscript" && (c = "sub"), c != "" && (i.push("<" + c + ">"), s.push("</" + c + ">")), s.push("</span>"), n;
  }
  function a(n) {
    var i = [[], n.v, []];
    return n.v ? (n.s && t(n.s, i[0], i[2]), i[0].join("") + i[1].replace(r, "<br/>") + i[2].join("")) : "";
  }
  return function(i) {
    return i.map(a).join("");
  };
}(), cd = /<(?:\w+:)?t\b[^<>]*>([^<]*)<\/(?:\w+:)?t>/g, od = /<(?:\w+:)?r\b[^<>]*>/;
function Ds(e, r) {
  var t = r ? r.cellHTML : !0, a = {};
  return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (a.t = ze(Qe(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || ""), !0), a.r = Qe(e), t && (a.h = Ja(a.t))) : (
    /*y = */
    e.match(od) && (a.r = Qe(e), a.t = ze(Qe((z1(e, "rPh").match(cd) || []).join("").replace(Dr, "")), !0), t && (a.h = fd(sd(a.r))))
  ), a) : { t: "" };
}
var ld = /<(?:\w+:)?(?:si|sstItem)>/g, ud = /<\/(?:\w+:)?(?:si|sstItem)>/;
function hd(e, r) {
  var t = [], a = "";
  if (!e) return t;
  var n = Or(e, "sst");
  if (n) {
    a = n[1].replace(ld, "").split(ud);
    for (var i = 0; i != a.length; ++i) {
      var s = Ds(a[i].trim(), r);
      s != null && (t[t.length] = s);
    }
    n = ke(n[0].slice(0, n[0].indexOf(">"))), t.Count = n.count, t.Unique = n.uniqueCount;
  }
  return t;
}
var dd = /^\s|\s$|[\t\n\r]/;
function vd(e, r) {
  if (!r.bookSST) return "";
  var t = [hr];
  t[t.length] = te("sst", null, {
    xmlns: Ta[0],
    count: e.Count,
    uniqueCount: e.Unique
  });
  for (var a = 0; a != e.length; ++a)
    if (e[a] != null) {
      var n = e[a], i = "<si>";
      n.r ? i += n.r : (i += "<t", n.t || (n.t = ""), typeof n.t != "string" && (n.t = String(n.t)), n.t.match(dd) && (i += ' xml:space="preserve"'), i += ">" + Le(n.t) + "</t>"), i += "</si>", t[t.length] = i;
    }
  return t.length > 2 && (t[t.length] = "</sst>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function md(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function pd(e, r) {
  var t = [], a = !1;
  return $t(e, function(i, s, f) {
    switch (f) {
      case 159:
        t.Count = i[0], t.Unique = i[1];
        break;
      case 19:
        t.push(i);
        break;
      case 160:
        return !0;
      case 35:
        a = !0;
        break;
      case 36:
        a = !1;
        break;
      default:
        if (s.T, !a || r.WTF) throw new Error("Unexpected record 0x" + f.toString(16));
    }
  }), t;
}
function gd(e, r) {
  return r || (r = H(8)), r.write_shift(4, e.Count), r.write_shift(4, e.Unique), r;
}
var _d = Eu;
function wd(e) {
  var r = $r();
  Z(r, 159, gd(e));
  for (var t = 0; t < e.length; ++t) Z(r, 19, _d(e[t]));
  return Z(
    r,
    160
    /* BrtEndSst */
  ), r.end();
}
function Eo(e) {
  if (typeof Be < "u") return Be.utils.encode(ha, e);
  for (var r = [], t = e.split(""), a = 0; a < t.length; ++a) r[a] = t[a].charCodeAt(0);
  return r;
}
function Vt(e, r) {
  var t = {};
  return t.Major = e.read_shift(2), t.Minor = e.read_shift(2), r >= 4 && (e.l += r - 4), t;
}
function kd(e) {
  var r = {};
  return r.id = e.read_shift(0, "lpp4"), r.R = Vt(e, 4), r.U = Vt(e, 4), r.W = Vt(e, 4), r;
}
function Td(e) {
  for (var r = e.read_shift(4), t = e.l + r - 4, a = {}, n = e.read_shift(4), i = []; n-- > 0; ) i.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (a.name = e.read_shift(0, "lpp4"), a.comps = i, e.l != t) throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + t);
  return a;
}
function Ed(e) {
  var r = [];
  e.l += 4;
  for (var t = e.read_shift(4); t-- > 0; ) r.push(Td(e));
  return r;
}
function yd(e) {
  var r = [];
  e.l += 4;
  for (var t = e.read_shift(4); t-- > 0; ) r.push(e.read_shift(0, "lpp4"));
  return r;
}
function Sd(e) {
  var r = {};
  return e.read_shift(4), e.l += 4, r.id = e.read_shift(0, "lpp4"), r.name = e.read_shift(0, "lpp4"), r.R = Vt(e, 4), r.U = Vt(e, 4), r.W = Vt(e, 4), r;
}
function xd(e) {
  var r = Sd(e);
  if (r.ename = e.read_shift(0, "8lpp4"), r.blksz = e.read_shift(4), r.cmode = e.read_shift(4), e.read_shift(4) != 4) throw new Error("Bad !Primary record");
  return r;
}
function yo(e, r) {
  var t = e.l + r, a = {};
  a.Flags = e.read_shift(4) & 63, e.l += 4, a.AlgID = e.read_shift(4);
  var n = !1;
  switch (a.AlgID) {
    case 26126:
    case 26127:
    case 26128:
      n = a.Flags == 36;
      break;
    case 26625:
      n = a.Flags == 4;
      break;
    case 0:
      n = a.Flags == 16 || a.Flags == 4 || a.Flags == 36;
      break;
    default:
      throw "Unrecognized encryption algorithm: " + a.AlgID;
  }
  if (!n) throw new Error("Encryption Flags/AlgID mismatch");
  return a.AlgIDHash = e.read_shift(4), a.KeySize = e.read_shift(4), a.ProviderType = e.read_shift(4), e.l += 8, a.CSPName = e.read_shift(t - e.l >> 1, "utf16le"), e.l = t, a;
}
function So(e, r) {
  var t = {}, a = e.l + r;
  return e.l += 4, t.Salt = e.slice(e.l, e.l + 16), e.l += 16, t.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), t.VerifierHash = e.slice(e.l, a), e.l = a, t;
}
function Ad(e) {
  var r = Vt(e);
  switch (r.Minor) {
    case 2:
      return [r.Minor, Fd(e)];
    case 3:
      return [r.Minor, Id()];
    case 4:
      return [r.Minor, Cd(e)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + r.Minor);
}
function Fd(e) {
  var r = e.read_shift(4);
  if ((r & 63) != 36) throw new Error("EncryptionInfo mismatch");
  var t = e.read_shift(4), a = yo(e, t), n = So(e, e.length - e.l);
  return { t: "Std", h: a, v: n };
}
function Id() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function Cd(e) {
  var r = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
  e.l += 4;
  var t = e.read_shift(e.length - e.l, "utf8"), a = {};
  return t.replace(Dr, function(i) {
    var s = ke(i);
    switch (vt(s[0])) {
      case "<?xml":
        break;
      case "<encryption":
      case "</encryption>":
        break;
      case "<keyData":
        r.forEach(function(f) {
          a[f] = s[f];
        });
        break;
      case "<dataIntegrity":
        a.encryptedHmacKey = s.encryptedHmacKey, a.encryptedHmacValue = s.encryptedHmacValue;
        break;
      case "<keyEncryptors>":
      case "<keyEncryptors":
        a.encs = [];
        break;
      case "</keyEncryptors>":
        break;
      case "<keyEncryptor":
        a.uri = s.uri;
        break;
      case "</keyEncryptor>":
        break;
      case "<encryptedKey":
        a.encs.push(s);
        break;
      default:
        throw s[0];
    }
  }), a;
}
function bd(e, r) {
  var t = {}, a = t.EncryptionVersionInfo = Vt(e, 4);
  if (r -= 4, a.Minor != 2) throw new Error("unrecognized minor version code: " + a.Minor);
  if (a.Major > 4 || a.Major < 2) throw new Error("unrecognized major version code: " + a.Major);
  t.Flags = e.read_shift(4), r -= 4;
  var n = e.read_shift(4);
  return r -= 4, t.EncryptionHeader = yo(e, n), r -= n, t.EncryptionVerifier = So(e, r), t;
}
function Od(e) {
  var r = {}, t = r.EncryptionVersionInfo = Vt(e, 4);
  if (t.Major != 1 || t.Minor != 1) throw "unrecognized version code " + t.Major + " : " + t.Minor;
  return r.Salt = e.read_shift(16), r.EncryptedVerifier = e.read_shift(16), r.EncryptedVerifierHash = e.read_shift(16), r;
}
function Ps(e) {
  var r = 0, t, a = Eo(e), n = a.length + 1, i, s, f, c, o;
  for (t = Zt(n), t[0] = a.length, i = 1; i != n; ++i) t[i] = a[i - 1];
  for (i = n - 1; i >= 0; --i)
    s = t[i], f = r & 16384 ? 1 : 0, c = r << 1 & 32767, o = f | c, r = o ^ s;
  return r ^ 52811;
}
var xo = /* @__PURE__ */ function() {
  var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0], r = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163], t = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628], a = function(s) {
    return (s / 2 | s * 128) & 255;
  }, n = function(s, f) {
    return a(s ^ f);
  }, i = function(s) {
    for (var f = r[s.length - 1], c = 104, o = s.length - 1; o >= 0; --o)
      for (var l = s[o], d = 0; d != 7; ++d)
        l & 64 && (f ^= t[c]), l *= 2, --c;
    return f;
  };
  return function(s) {
    for (var f = Eo(s), c = i(f), o = f.length, l = Zt(16), d = 0; d != 16; ++d) l[d] = 0;
    var u, h, m;
    for ((o & 1) === 1 && (u = c >> 8, l[o] = n(e[0], u), --o, u = c & 255, h = f[f.length - 1], l[o] = n(h, u)); o > 0; )
      --o, u = c >> 8, l[o] = n(f[o], u), --o, u = c & 255, l[o] = n(f[o], u);
    for (o = 15, m = 15 - f.length; m > 0; )
      u = c >> 8, l[o] = n(e[m], u), --o, --m, u = c & 255, l[o] = n(f[o], u), --o, --m;
    return l;
  };
}(), Nd = function(e, r, t, a, n) {
  n || (n = r), a || (a = xo(e));
  var i, s;
  for (i = 0; i != r.length; ++i)
    s = r[i], s ^= a[t], s = (s >> 5 | s << 3) & 255, n[i] = s, ++t;
  return [n, t, a];
}, Rd = function(e) {
  var r = 0, t = xo(e);
  return function(a) {
    var n = Nd("", a, r, t);
    return r = n[1], n[0];
  };
};
function Dd(e, r, t, a) {
  var n = { key: ur(e), verificationBytes: ur(e) };
  return t.password && (n.verifier = Ps(t.password)), a.valid = n.verificationBytes === n.verifier, a.valid && (a.insitu = Rd(t.password)), n;
}
function Pd(e, r, t) {
  var a = t || {};
  return a.Info = e.read_shift(2), e.l -= 2, a.Info === 1 ? a.Data = Od(e) : a.Data = bd(e, r), a;
}
function Ld(e, r, t) {
  var a = { Type: t.biff >= 8 ? e.read_shift(2) : 0 };
  return a.Type ? Pd(e, r - 2, a) : Dd(e, t.biff >= 8 ? r : r - 2, t, a), a;
}
function Md(e, r) {
  switch (r.type) {
    case "base64":
      return $n(st(e), r);
    case "binary":
      return $n(e, r);
    case "buffer":
      return $n(Ue && Buffer.isBuffer(e) ? e.toString("binary") : bt(e), r);
    case "array":
      return $n(va(e), r);
  }
  throw new Error("Unrecognized type " + r.type);
}
function $n(e, r) {
  var t = r || {}, a = {}, n = t.dense;
  n && (a["!data"] = []);
  var i = vs(e, "\\trowd", "\\row");
  if (!i) throw new Error("RTF missing table");
  var s = { s: { c: 0, r: 0 }, e: { c: 0, r: i.length - 1 } }, f = [];
  return i.forEach(function(c, o) {
    n && (f = a["!data"][o] = []);
    for (var l = /\\[\w\-]+\b/g, d = 0, u, h = -1, m = []; (u = l.exec(c)) != null; ) {
      var g = c.slice(d, l.lastIndex - u[0].length);
      switch (g.charCodeAt(0) == 32 && (g = g.slice(1)), g.length && m.push(g), u[0]) {
        case "\\cell":
          if (++h, m.length) {
            var p = { v: m.join(""), t: "s" };
            p.v == "TRUE" || p.v == "FALSE" ? (p.v = p.v == "TRUE", p.t = "b") : isNaN(it(p.v)) ? Nr[p.v] != null && (p.t = "e", p.w = p.v, p.v = Nr[p.v]) : (p.t = "n", t.cellText !== !1 && (p.w = p.v), p.v = it(p.v)), n ? f[h] = p : a[He({ r: o, c: h })] = p;
          }
          m = [];
          break;
        case "\\par":
          m.push(`
`);
          break;
      }
      d = l.lastIndex;
    }
    h > s.e.c && (s.e.c = h);
  }), a["!ref"] = Me(s), a;
}
function Bd(e, r) {
  var t = ea(Md(e, r), r);
  return t.bookType = "rtf", t;
}
function Ud(e, r) {
  var t = ["{\\rtf1\\ansi"];
  if (!e["!ref"]) return t[0] + "}";
  for (var a = Ge(e["!ref"]), n, i = e["!data"] != null, s = [], f = a.s.r; f <= a.e.r; ++f) {
    t.push("\\trowd\\trautofit1");
    for (var c = a.s.c; c <= a.e.c; ++c) t.push("\\cellx" + (c + 1));
    for (t.push("\\pard\\intbl"), i && (s = e["!data"][f] || []), c = a.s.c; c <= a.e.c; ++c) {
      var o = He({ r: f, c });
      if (n = i ? s[c] : e[o], !n || n.v == null && (!n.f || n.F)) {
        t.push(" \\cell");
        continue;
      }
      t.push(" " + (n.w || (Ot(n), n.w) || "").replace(/[\r\n]/g, "\\par ")), t.push("\\cell");
    }
    t.push("\\pard\\intbl\\row");
  }
  return t.join("") + "}";
}
function Wd(e) {
  var r = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(r.slice(0, 2), 16), parseInt(r.slice(2, 4), 16), parseInt(r.slice(4, 6), 16)];
}
function pn(e) {
  for (var r = 0, t = 1; r != 3; ++r) t = t * 256 + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
  return t.toString(16).toUpperCase().slice(1);
}
function Hd(e) {
  var r = e[0] / 255, t = e[1] / 255, a = e[2] / 255, n = Math.max(r, t, a), i = Math.min(r, t, a), s = n - i;
  if (s === 0) return [0, 0, r];
  var f = 0, c = 0, o = n + i;
  switch (c = s / (o > 1 ? 2 - o : o), n) {
    case r:
      f = ((t - a) / s + 6) % 6;
      break;
    case t:
      f = (a - r) / s + 2;
      break;
    case a:
      f = (r - t) / s + 4;
      break;
  }
  return [f / 6, c, o / 2];
}
function Xd(e) {
  var r = e[0], t = e[1], a = e[2], n = t * 2 * (a < 0.5 ? a : 1 - a), i = a - n / 2, s = [i, i, i], f = 6 * r, c;
  if (t !== 0) switch (f | 0) {
    case 0:
    case 6:
      c = n * f, s[0] += n, s[1] += c;
      break;
    case 1:
      c = n * (2 - f), s[0] += c, s[1] += n;
      break;
    case 2:
      c = n * (f - 2), s[1] += n, s[2] += c;
      break;
    case 3:
      c = n * (4 - f), s[1] += c, s[2] += n;
      break;
    case 4:
      c = n * (f - 4), s[2] += n, s[0] += c;
      break;
    case 5:
      c = n * (6 - f), s[2] += c, s[0] += n;
      break;
  }
  for (var o = 0; o != 3; ++o) s[o] = Math.round(s[o] * 255);
  return s;
}
function ci(e, r) {
  if (r === 0) return e;
  var t = Hd(Wd(e));
  return r < 0 ? t[2] = t[2] * (1 + r) : t[2] = 1 - (1 - t[2]) * (1 - r), pn(Xd(t));
}
var Ao = 6, Vd = 15, Gd = 1, Xr = Ao;
function Ua(e) {
  return Math.floor((e + Math.round(128 / Xr) / 256) * Xr);
}
function gn(e) {
  return Math.floor((e - 5) / Xr * 100 + 0.5) / 100;
}
function oi(e) {
  return Math.round((e * Xr + 5) / Xr * 256) / 256;
}
function Li(e) {
  return oi(gn(Ua(e)));
}
function Ls(e) {
  var r = Math.abs(e - Li(e)), t = Xr;
  if (r > 5e-3)
    for (Xr = Gd; Xr < Vd; ++Xr) Math.abs(e - Li(e)) <= r && (r = Math.abs(e - Li(e)), t = Xr);
  Xr = t;
}
function Gt(e) {
  e.width ? (e.wpx = Ua(e.width), e.wch = gn(e.wpx), e.MDW = Xr) : e.wpx ? (e.wch = gn(e.wpx), e.width = oi(e.wch), e.MDW = Xr) : typeof e.wch == "number" && (e.width = oi(e.wch), e.wpx = Ua(e.width), e.MDW = Xr), e.customWidth && delete e.customWidth;
}
var zd = 96, Fo = zd;
function _n(e) {
  return e * 96 / Fo;
}
function Wa(e) {
  return e * Fo / 96;
}
var $d = {
  None: "none",
  Solid: "solid",
  Gray50: "mediumGray",
  Gray75: "darkGray",
  Gray25: "lightGray",
  HorzStripe: "darkHorizontal",
  VertStripe: "darkVertical",
  ReverseDiagStripe: "darkDown",
  DiagStripe: "darkUp",
  DiagCross: "darkGrid",
  ThickDiagCross: "darkTrellis",
  ThinHorzStripe: "lightHorizontal",
  ThinVertStripe: "lightVertical",
  ThinReverseDiagStripe: "lightDown",
  ThinHorzCross: "lightGrid"
};
function Kd(e, r, t, a) {
  r.Borders = [];
  var n = {}, i = !1;
  (e.match(Dr) || []).forEach(function(s) {
    var f = ke(s);
    switch (vt(f[0])) {
      case "<borders":
      case "<borders>":
      case "</borders>":
        break;
      case "<border":
      case "<border>":
      case "<border/>":
        n = /*::(*/
        {}, f.diagonalUp && (n.diagonalUp = Je(f.diagonalUp)), f.diagonalDown && (n.diagonalDown = Je(f.diagonalDown)), r.Borders.push(n);
        break;
      case "</border>":
        break;
      case "<left/>":
        break;
      case "<left":
      case "<left>":
        break;
      case "</left>":
        break;
      case "<right/>":
        break;
      case "<right":
      case "<right>":
        break;
      case "</right>":
        break;
      case "<top/>":
        break;
      case "<top":
      case "<top>":
        break;
      case "</top>":
        break;
      case "<bottom/>":
        break;
      case "<bottom":
      case "<bottom>":
        break;
      case "</bottom>":
        break;
      case "<diagonal":
      case "<diagonal>":
      case "<diagonal/>":
        break;
      case "</diagonal>":
        break;
      case "<horizontal":
      case "<horizontal>":
      case "<horizontal/>":
        break;
      case "</horizontal>":
        break;
      case "<vertical":
      case "<vertical>":
      case "<vertical/>":
        break;
      case "</vertical>":
        break;
      case "<start":
      case "<start>":
      case "<start/>":
        break;
      case "</start>":
        break;
      case "<end":
      case "<end>":
      case "<end/>":
        break;
      case "</end>":
        break;
      case "<color":
      case "<color>":
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = !0;
        break;
      case "</ext>":
        i = !1;
        break;
      default:
        if (a && a.WTF && !i)
          throw new Error("unrecognized " + f[0] + " in borders");
    }
  });
}
function jd(e, r, t, a) {
  r.Fills = [];
  var n = {}, i = !1;
  (e.match(Dr) || []).forEach(function(s) {
    var f = ke(s);
    switch (vt(f[0])) {
      case "<fills":
      case "<fills>":
      case "</fills>":
        break;
      case "<fill>":
      case "<fill":
      case "<fill/>":
        n = {}, r.Fills.push(n);
        break;
      case "</fill>":
        break;
      case "<gradientFill>":
        break;
      case "<gradientFill":
      case "</gradientFill>":
        r.Fills.push(n), n = {};
        break;
      case "<patternFill":
      case "<patternFill>":
        f.patternType && (n.patternType = f.patternType);
        break;
      case "<patternFill/>":
      case "</patternFill>":
        break;
      case "<bgColor":
        n.bgColor || (n.bgColor = {}), f.indexed && (n.bgColor.indexed = parseInt(f.indexed, 10)), f.theme && (n.bgColor.theme = parseInt(f.theme, 10)), f.tint && (n.bgColor.tint = parseFloat(f.tint)), f.rgb && (n.bgColor.rgb = f.rgb.slice(-6));
        break;
      case "<bgColor/>":
      case "</bgColor>":
        break;
      case "<fgColor":
        n.fgColor || (n.fgColor = {}), f.theme && (n.fgColor.theme = parseInt(f.theme, 10)), f.tint && (n.fgColor.tint = parseFloat(f.tint)), f.rgb != null && (n.fgColor.rgb = f.rgb.slice(-6));
        break;
      case "<fgColor/>":
      case "</fgColor>":
        break;
      case "<stop":
      case "<stop/>":
        break;
      case "</stop>":
        break;
      case "<color":
      case "<color/>":
        break;
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = !0;
        break;
      case "</ext>":
        i = !1;
        break;
      default:
        if (a && a.WTF && !i)
          throw new Error("unrecognized " + f[0] + " in fills");
    }
  });
}
function Yd(e, r, t, a) {
  r.Fonts = [];
  var n = {}, i = !1;
  (e.match(Dr) || []).forEach(function(s) {
    var f = ke(s);
    switch (vt(f[0])) {
      case "<fonts":
      case "<fonts>":
      case "</fonts>":
        break;
      case "<font":
      case "<font>":
        break;
      case "</font>":
      case "<font/>":
        r.Fonts.push(n), n = {};
        break;
      case "<name":
        f.val && (n.name = Qe(f.val));
        break;
      case "<name/>":
      case "</name>":
        break;
      case "<b":
        n.bold = f.val ? Je(f.val) : 1;
        break;
      case "<b/>":
        n.bold = 1;
        break;
      case "</b>":
      case "</b":
        break;
      case "<i":
        n.italic = f.val ? Je(f.val) : 1;
        break;
      case "<i/>":
        n.italic = 1;
        break;
      case "</i>":
      case "</i":
        break;
      case "<u":
        switch (f.val) {
          case "none":
            n.underline = 0;
            break;
          case "single":
            n.underline = 1;
            break;
          case "double":
            n.underline = 2;
            break;
          case "singleAccounting":
            n.underline = 33;
            break;
          case "doubleAccounting":
            n.underline = 34;
            break;
        }
        break;
      case "<u/>":
        n.underline = 1;
        break;
      case "</u>":
      case "</u":
        break;
      case "<strike":
        n.strike = f.val ? Je(f.val) : 1;
        break;
      case "<strike/>":
        n.strike = 1;
        break;
      case "</strike>":
      case "</strike":
        break;
      case "<outline":
        n.outline = f.val ? Je(f.val) : 1;
        break;
      case "<outline/>":
        n.outline = 1;
        break;
      case "</outline>":
      case "</outline":
        break;
      case "<shadow":
        n.shadow = f.val ? Je(f.val) : 1;
        break;
      case "<shadow/>":
        n.shadow = 1;
        break;
      case "</shadow>":
      case "</shadow":
        break;
      case "<condense":
        n.condense = f.val ? Je(f.val) : 1;
        break;
      case "<condense/>":
        n.condense = 1;
        break;
      case "</condense>":
      case "</condense":
        break;
      case "<extend":
        n.extend = f.val ? Je(f.val) : 1;
        break;
      case "<extend/>":
        n.extend = 1;
        break;
      case "</extend>":
      case "</extend":
        break;
      case "<sz":
        f.val && (n.sz = +f.val);
        break;
      case "<sz/>":
      case "</sz>":
      case "</sz":
        break;
      case "<vertAlign":
        f.val && (n.vertAlign = f.val);
        break;
      case "<vertAlign/>":
      case "</vertAlign>":
      case "</vertAlign":
        break;
      case "<family":
        f.val && (n.family = parseInt(f.val, 10));
        break;
      case "<family/>":
      case "</family>":
      case "</family":
        break;
      case "<scheme":
        f.val && (n.scheme = f.val);
        break;
      case "<scheme/>":
      case "</scheme>":
      case "</scheme":
        break;
      case "<charset":
        if (f.val == "1") break;
        f.codepage = fs[parseInt(f.val, 10)];
        break;
      case "<charset/>":
      case "</charset>":
      case "</charset":
        break;
      case "<color":
        if (n.color || (n.color = {}), f.auto && (n.color.auto = Je(f.auto)), f.rgb) n.color.rgb = f.rgb.slice(-6);
        else if (f.indexed) {
          n.color.index = parseInt(f.indexed, 10);
          var c = fa[n.color.index];
          n.color.index == 81 && (c = fa[1]), c || (c = fa[1]), n.color.rgb = c[0].toString(16) + c[1].toString(16) + c[2].toString(16);
        } else f.theme && (n.color.theme = parseInt(f.theme, 10), f.tint && (n.color.tint = parseFloat(f.tint)), f.theme && t.themeElements && t.themeElements.clrScheme && (n.color.rgb = ci(t.themeElements.clrScheme[n.color.theme].rgb, n.color.tint || 0)));
        break;
      case "<color/>":
      case "</color>":
      case "</color":
        break;
      case "<AlternateContent":
        i = !0;
        break;
      case "</AlternateContent>":
      case "</AlternateContent":
        i = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = !0;
        break;
      case "</ext>":
        i = !1;
        break;
      default:
        if (a && a.WTF && !i)
          throw new Error("unrecognized " + f[0] + " in fonts");
    }
  });
}
function Zd(e, r, t) {
  r.NumberFmt = [];
  for (var a = sr(Fe), n = 0; n < a.length; ++n) r.NumberFmt[a[n]] = Fe[a[n]];
  var i = e.match(Dr);
  if (i)
    for (n = 0; n < i.length; ++n) {
      var s = ke(i[n]);
      switch (vt(s[0])) {
        case "<numFmts":
        case "</numFmts>":
        case "<numFmts/>":
        case "<numFmts>":
          break;
        case "<numFmt":
          {
            var f = ze(Qe(s.formatCode)), c = parseInt(s.numFmtId, 10);
            if (r.NumberFmt[c] = f, c > 0) {
              if (c > 392) {
                for (c = 392; c > 60 && r.NumberFmt[c] != null; --c) ;
                r.NumberFmt[c] = f;
              }
              jt(f, c);
            }
          }
          break;
        case "</numFmt>":
          break;
        default:
          if (t.WTF) throw new Error("unrecognized " + s[0] + " in numFmts");
      }
    }
}
function Jd(e) {
  var r = ["<numFmts>"];
  return [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(t) {
    for (var a = t[0]; a <= t[1]; ++a) e[a] != null && (r[r.length] = te("numFmt", null, { numFmtId: a, formatCode: Le(e[a]) }));
  }), r.length === 1 ? "" : (r[r.length] = "</numFmts>", r[0] = te("numFmts", null, { count: r.length - 2 }).replace("/>", ">"), r.join(""));
}
var Kn = ["numFmtId", "fillId", "fontId", "borderId", "xfId"], jn = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function qd(e, r, t) {
  r.CellXf = [];
  var a, n = !1;
  (e.match(Dr) || []).forEach(function(i) {
    var s = ke(i), f = 0;
    switch (vt(s[0])) {
      case "<cellXfs":
      case "<cellXfs>":
      case "<cellXfs/>":
      case "</cellXfs>":
        break;
      case "<xf":
      case "<xf/>":
      case "<xf>":
        for (a = s, delete a[0], f = 0; f < Kn.length; ++f) a[Kn[f]] && (a[Kn[f]] = parseInt(a[Kn[f]], 10));
        for (f = 0; f < jn.length; ++f) a[jn[f]] && (a[jn[f]] = Je(a[jn[f]]));
        if (r.NumberFmt && a.numFmtId > 392) {
          for (f = 392; f > 60; --f) if (r.NumberFmt[a.numFmtId] == r.NumberFmt[f]) {
            a.numFmtId = f;
            break;
          }
        }
        r.CellXf.push(a);
        break;
      case "</xf>":
        break;
      case "<alignment":
      case "<alignment/>":
      case "<alignment>":
        var c = {};
        s.vertical && (c.vertical = s.vertical), s.horizontal && (c.horizontal = s.horizontal), s.textRotation != null && (c.textRotation = s.textRotation), s.indent && (c.indent = s.indent), s.wrapText && (c.wrapText = Je(s.wrapText)), a.alignment = c;
        break;
      case "</alignment>":
        break;
      case "<protection":
      case "<protection>":
        break;
      case "</protection>":
      case "<protection/>":
        break;
      case "<AlternateContent":
      case "<AlternateContent>":
        n = !0;
        break;
      case "</AlternateContent>":
        n = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      default:
        if (t && t.WTF && !n)
          throw new Error("unrecognized " + s[0] + " in cellXfs");
    }
  });
}
function Qd(e) {
  var r = [];
  return r[r.length] = te("cellXfs", null), e.forEach(function(t) {
    r[r.length] = te("xf", null, t);
  }), r[r.length] = "</cellXfs>", r.length === 2 ? "" : (r[0] = te("cellXfs", null, { count: r.length - 2 }).replace("/>", ">"), r.join(""));
}
var ev = /* @__PURE__ */ function() {
  return function(t, a, n) {
    var i = {};
    if (!t) return i;
    t = ds(Fn(t, "<!--", "-->"));
    var s;
    return (s = Or(t, "numFmts")) && Zd(s[0], i, n), (s = Or(t, "fonts")) && Yd(s[0], i, a, n), (s = Or(t, "fills")) && jd(s[0], i, a, n), (s = Or(t, "borders")) && Kd(s[0], i, a, n), (s = Or(t, "cellXfs")) && qd(s[0], i, n), i;
  };
}();
function rv(e, r) {
  var t = [hr, te("styleSheet", null, {
    xmlns: Ta[0],
    "xmlns:vt": Ar.vt
  })], a;
  return e.SSF && (a = Jd(e.SSF)) != null && (t[t.length] = a), t[t.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>', t[t.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>', t[t.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>', t[t.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>', (a = Qd(r.cellXfs)) && (t[t.length] = a), t[t.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>', t[t.length] = '<dxfs count="0"/>', t[t.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>', t.length > 2 && (t[t.length] = "</styleSheet>", t[1] = t[1].replace("/>", ">")), t.join("");
}
function tv(e, r) {
  var t = e.read_shift(2), a = Kr(e);
  return [t, a];
}
function av(e, r, t) {
  t || (t = H(6 + 4 * r.length)), t.write_shift(2, e), Fr(r, t);
  var a = t.length > t.l ? t.slice(0, t.l) : t;
  return t.l == null && (t.l = t.length), a;
}
function nv(e, r, t) {
  var a = {};
  a.sz = e.read_shift(2) / 20;
  var n = Cu(e);
  n.fItalic && (a.italic = 1), n.fCondense && (a.condense = 1), n.fExtend && (a.extend = 1), n.fShadow && (a.shadow = 1), n.fOutline && (a.outline = 1), n.fStrikeout && (a.strike = 1);
  var i = e.read_shift(2);
  switch (i === 700 && (a.bold = 1), e.read_shift(2)) {
    case 1:
      a.vertAlign = "superscript";
      break;
    case 2:
      a.vertAlign = "subscript";
      break;
  }
  var s = e.read_shift(1);
  s != 0 && (a.underline = s);
  var f = e.read_shift(1);
  f > 0 && (a.family = f);
  var c = e.read_shift(1);
  switch (c > 0 && (a.charset = c), e.l++, a.color = Iu(e), e.read_shift(1)) {
    case 1:
      a.scheme = "major";
      break;
    case 2:
      a.scheme = "minor";
      break;
  }
  return a.name = Kr(e), a;
}
function iv(e, r) {
  r || (r = H(25 + 4 * 32)), r.write_shift(2, e.sz * 20), bu(e, r), r.write_shift(2, e.bold ? 700 : 400);
  var t = 0;
  e.vertAlign == "superscript" ? t = 1 : e.vertAlign == "subscript" && (t = 2), r.write_shift(2, t), r.write_shift(1, e.underline || 0), r.write_shift(1, e.family || 0), r.write_shift(1, e.charset || 0), r.write_shift(1, 0), ii(e.color, r);
  var a = 0;
  return a = 2, r.write_shift(1, a), Fr(e.name, r), r.length > r.l ? r.slice(0, r.l) : r;
}
var sv = [
  "none",
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
], Mi, fv = jr;
function Vf(e, r) {
  r || (r = H(4 * 3 + 8 * 7 + 16 * 1)), Mi || (Mi = mi(sv));
  var t = Mi[e.patternType];
  t == null && (t = 40), r.write_shift(4, t);
  var a = 0;
  if (t != 40)
    for (ii({ auto: 1 }, r), ii({ auto: 1 }, r); a < 12; ++a) r.write_shift(4, 0);
  else {
    for (; a < 4; ++a) r.write_shift(4, 0);
    for (; a < 12; ++a) r.write_shift(4, 0);
  }
  return r.length > r.l ? r.slice(0, r.l) : r;
}
function cv(e, r) {
  var t = e.l + r, a = e.read_shift(2), n = e.read_shift(2);
  return e.l = t, { ixfe: a, numFmtId: n };
}
function Io(e, r, t) {
  t || (t = H(16)), t.write_shift(2, r || 0), t.write_shift(2, e.numFmtId || 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(1, 0), t.write_shift(1, 0);
  var a = 0;
  return t.write_shift(1, a), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(1, 0), t;
}
function ja(e, r) {
  return r || (r = H(10)), r.write_shift(1, 0), r.write_shift(1, 0), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
var ov = jr;
function lv(e, r) {
  return r || (r = H(51)), r.write_shift(1, 0), ja(null, r), ja(null, r), ja(null, r), ja(null, r), ja(null, r), r.length > r.l ? r.slice(0, r.l) : r;
}
function uv(e, r) {
  return r || (r = H(12 + 4 * 10)), r.write_shift(4, e.xfId), r.write_shift(2, 1), r.write_shift(1, 0), r.write_shift(1, 0), vn(e.name || "", r), r.length > r.l ? r.slice(0, r.l) : r;
}
function hv(e, r, t) {
  var a = H(2052);
  return a.write_shift(4, e), vn(r, a), vn(t, a), a.length > a.l ? a.slice(0, a.l) : a;
}
function dv(e, r, t) {
  var a = {};
  a.NumberFmt = [];
  for (var n in Fe) a.NumberFmt[n] = Fe[n];
  a.CellXf = [], a.Fonts = [];
  var i = [], s = !1;
  return $t(e, function(c, o, l) {
    switch (l) {
      case 44:
        a.NumberFmt[c[0]] = c[1], jt(c[1], c[0]);
        break;
      case 43:
        a.Fonts.push(c), c.color.theme != null && r && r.themeElements && r.themeElements.clrScheme && (c.color.rgb = ci(r.themeElements.clrScheme[c.color.theme].rgb, c.color.tint || 0));
        break;
      case 1025:
        break;
      case 45:
        break;
      case 46:
        break;
      case 47:
        i[i.length - 1] == 617 && a.CellXf.push(c);
        break;
      case 48:
      case 507:
      case 572:
      case 475:
        break;
      case 1171:
      case 2102:
      case 1130:
      case 512:
      case 2095:
      case 3072:
        break;
      case 35:
        s = !0;
        break;
      case 36:
        s = !1;
        break;
      case 37:
        i.push(l), s = !0;
        break;
      case 38:
        i.pop(), s = !1;
        break;
      default:
        if (o.T > 0) i.push(l);
        else if (o.T < 0) i.pop();
        else if (!s || t.WTF && i[i.length - 1] != 37) throw new Error("Unexpected record 0x" + l.toString(16));
    }
  }), a;
}
function vv(e, r) {
  if (r) {
    var t = 0;
    [[5, 8], [23, 26], [41, 44], [
      /*63*/
      50,
      /*66],[164,*/
      392
    ]].forEach(function(a) {
      for (var n = a[0]; n <= a[1]; ++n) r[n] != null && ++t;
    }), t != 0 && (Z(e, 615, kt(t)), [[5, 8], [23, 26], [41, 44], [
      /*63*/
      50,
      /*66],[164,*/
      392
    ]].forEach(function(a) {
      for (var n = a[0]; n <= a[1]; ++n) r[n] != null && Z(e, 44, av(n, r[n]));
    }), Z(
      e,
      616
      /* BrtEndFmts */
    ));
  }
}
function mv(e) {
  var r = 1;
  Z(e, 611, kt(r)), Z(e, 43, iv({
    sz: 12,
    color: { theme: 1 },
    name: "Calibri",
    family: 2
  })), Z(
    e,
    612
    /* BrtEndFonts */
  );
}
function pv(e) {
  var r = 2;
  Z(e, 603, kt(r)), Z(e, 45, Vf({ patternType: "none" })), Z(e, 45, Vf({ patternType: "gray125" })), Z(
    e,
    604
    /* BrtEndFills */
  );
}
function gv(e) {
  var r = 1;
  Z(e, 613, kt(r)), Z(e, 46, lv()), Z(
    e,
    614
    /* BrtEndBorders */
  );
}
function _v(e) {
  var r = 1;
  Z(e, 626, kt(r)), Z(e, 47, Io({
    numFmtId: 0
  }, 65535)), Z(
    e,
    627
    /* BrtEndCellStyleXFs */
  );
}
function wv(e, r) {
  Z(e, 617, kt(r.length)), r.forEach(function(t) {
    Z(e, 47, Io(t, 0));
  }), Z(
    e,
    618
    /* BrtEndCellXFs */
  );
}
function kv(e) {
  var r = 1;
  Z(e, 619, kt(r)), Z(e, 48, uv({
    xfId: 0,
    name: "Normal"
  })), Z(
    e,
    620
    /* BrtEndStyles */
  );
}
function Tv(e) {
  var r = 0;
  Z(e, 505, kt(r)), Z(
    e,
    506
    /* BrtEndDXFs */
  );
}
function Ev(e) {
  var r = 0;
  Z(e, 508, hv(r, "TableStyleMedium9", "PivotStyleMedium4")), Z(
    e,
    509
    /* BrtEndTableStyles */
  );
}
function yv(e, r) {
  var t = $r();
  return Z(
    t,
    278
    /* BrtBeginStyleSheet */
  ), vv(t, e.SSF), mv(t), pv(t), gv(t), _v(t), wv(t, r.cellXfs), kv(t), Tv(t), Ev(t), Z(
    t,
    279
    /* BrtEndStyleSheet */
  ), t.end();
}
var Sv = [
  "</a:lt1>",
  "</a:dk1>",
  "</a:lt2>",
  "</a:dk2>",
  "</a:accent1>",
  "</a:accent2>",
  "</a:accent3>",
  "</a:accent4>",
  "</a:accent5>",
  "</a:accent6>",
  "</a:hlink>",
  "</a:folHlink>"
];
function xv(e, r, t) {
  r.themeElements.clrScheme = [];
  var a = {};
  (e[0].match(Dr) || []).forEach(function(n) {
    var i = ke(n);
    switch (i[0]) {
      case "<a:clrScheme":
      case "</a:clrScheme>":
        break;
      case "<a:srgbClr":
        a.rgb = i.val;
        break;
      case "</a:srgbClr>":
        break;
      case "<a:sysClr":
        a.rgb = i.lastClr;
        break;
      case "</a:sysClr>":
        break;
      case "</a:dk1>":
      case "</a:lt1>":
      case "<a:dk1>":
      case "<a:lt1>":
      case "<a:dk2>":
      case "</a:dk2>":
      case "<a:lt2>":
      case "</a:lt2>":
      case "<a:accent1>":
      case "</a:accent1>":
      case "<a:accent2>":
      case "</a:accent2>":
      case "<a:accent3>":
      case "</a:accent3>":
      case "<a:accent4>":
      case "</a:accent4>":
      case "<a:accent5>":
      case "</a:accent5>":
      case "<a:accent6>":
      case "</a:accent6>":
      case "<a:hlink>":
      case "</a:hlink>":
      case "<a:folHlink>":
      case "</a:folHlink>":
        i[0].charAt(1) === "/" ? (r.themeElements.clrScheme[Sv.indexOf(i[0])] = a, a = {}) : a.name = i[0].slice(3, i[0].length - 1);
        break;
      default:
        if (t && t.WTF) throw new Error("Unrecognized " + i[0] + " in clrScheme");
    }
  });
}
function Av(e, r, t) {
  r.themeElements = {};
  var a;
  if (!(a = sa(e, "a:clrScheme"))) throw new Error("clrScheme not found in themeElements");
  if (xv(a, r, t), !(a = sa(e, "a:fontScheme"))) throw new Error("fontScheme not found in themeElements");
  if (!(a = sa(e, "a:fmtScheme"))) throw new Error("fmtScheme not found in themeElements");
}
function Co(e, r) {
  (!e || e.length === 0) && (e = Ms());
  var t, a = {};
  if (!(t = sa(e, "a:themeElements"))) throw new Error("themeElements not found in theme");
  return Av(t[0], a, r), a.raw = e, a;
}
function Ms(e, r) {
  if (r && r.themeXLSX) return r.themeXLSX;
  if (e && typeof e.raw == "string") return e.raw;
  var t = [hr];
  return t[t.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', t[t.length] = "<a:themeElements>", t[t.length] = '<a:clrScheme name="Office">', t[t.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', t[t.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', t[t.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', t[t.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', t[t.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', t[t.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', t[t.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', t[t.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', t[t.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', t[t.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', t[t.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', t[t.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', t[t.length] = "</a:clrScheme>", t[t.length] = '<a:fontScheme name="Office">', t[t.length] = "<a:majorFont>", t[t.length] = '<a:latin typeface="Cambria"/>', t[t.length] = '<a:ea typeface=""/>', t[t.length] = '<a:cs typeface=""/>', t[t.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', t[t.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', t[t.length] = '<a:font script="Hans" typeface="宋体"/>', t[t.length] = '<a:font script="Hant" typeface="新細明體"/>', t[t.length] = '<a:font script="Arab" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>', t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>', t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>', t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>', t[t.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', t[t.length] = '<a:font script="Knda" typeface="Tunga"/>', t[t.length] = '<a:font script="Guru" typeface="Raavi"/>', t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>', t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>', t[t.length] = '<a:font script="Deva" typeface="Mangal"/>', t[t.length] = '<a:font script="Telu" typeface="Gautami"/>', t[t.length] = '<a:font script="Taml" typeface="Latha"/>', t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>', t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>', t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>', t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', t[t.length] = '<a:font script="Viet" typeface="Times New Roman"/>', t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>', t[t.length] = "</a:majorFont>", t[t.length] = "<a:minorFont>", t[t.length] = '<a:latin typeface="Calibri"/>', t[t.length] = '<a:ea typeface=""/>', t[t.length] = '<a:cs typeface=""/>', t[t.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', t[t.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', t[t.length] = '<a:font script="Hans" typeface="宋体"/>', t[t.length] = '<a:font script="Hant" typeface="新細明體"/>', t[t.length] = '<a:font script="Arab" typeface="Arial"/>', t[t.length] = '<a:font script="Hebr" typeface="Arial"/>', t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>', t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>', t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>', t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>', t[t.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', t[t.length] = '<a:font script="Knda" typeface="Tunga"/>', t[t.length] = '<a:font script="Guru" typeface="Raavi"/>', t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>', t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>', t[t.length] = '<a:font script="Deva" typeface="Mangal"/>', t[t.length] = '<a:font script="Telu" typeface="Gautami"/>', t[t.length] = '<a:font script="Taml" typeface="Latha"/>', t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>', t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>', t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>', t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', t[t.length] = '<a:font script="Viet" typeface="Arial"/>', t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>', t[t.length] = "</a:minorFont>", t[t.length] = "</a:fontScheme>", t[t.length] = '<a:fmtScheme name="Office">', t[t.length] = "<a:fillStyleLst>", t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:lin ang="16200000" scaled="1"/>', t[t.length] = "</a:gradFill>", t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:lin ang="16200000" scaled="0"/>', t[t.length] = "</a:gradFill>", t[t.length] = "</a:fillStyleLst>", t[t.length] = "<a:lnStyleLst>", t[t.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', t[t.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', t[t.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', t[t.length] = "</a:lnStyleLst>", t[t.length] = "<a:effectStyleLst>", t[t.length] = "<a:effectStyle>", t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', t[t.length] = "</a:effectLst>", t[t.length] = "</a:effectStyle>", t[t.length] = "<a:effectStyle>", t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', t[t.length] = "</a:effectLst>", t[t.length] = "</a:effectStyle>", t[t.length] = "<a:effectStyle>", t[t.length] = "<a:effectLst>", t[t.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', t[t.length] = "</a:effectLst>", t[t.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', t[t.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', t[t.length] = "</a:effectStyle>", t[t.length] = "</a:effectStyleLst>", t[t.length] = "<a:bgFillStyleLst>", t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', t[t.length] = "</a:gradFill>", t[t.length] = '<a:gradFill rotWithShape="1">', t[t.length] = "<a:gsLst>", t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', t[t.length] = "</a:gsLst>", t[t.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', t[t.length] = "</a:gradFill>", t[t.length] = "</a:bgFillStyleLst>", t[t.length] = "</a:fmtScheme>", t[t.length] = "</a:themeElements>", t[t.length] = "<a:objectDefaults>", t[t.length] = "<a:spDef>", t[t.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', t[t.length] = "</a:spDef>", t[t.length] = "<a:lnDef>", t[t.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', t[t.length] = "</a:lnDef>", t[t.length] = "</a:objectDefaults>", t[t.length] = "<a:extraClrSchemeLst/>", t[t.length] = "</a:theme>", t.join("");
}
function Fv(e, r, t) {
  var a = e.l + r, n = e.read_shift(4);
  if (n !== 124226) {
    if (!t.cellStyles) {
      e.l = a;
      return;
    }
    var i = e.slice(e.l);
    e.l = a;
    var s;
    try {
      s = Fc(i, { type: "array" });
    } catch {
      return;
    }
    var f = Qr(s, "theme/theme/theme1.xml", !0);
    if (f)
      return Co(f, t);
  }
}
function Iv(e) {
  return e.read_shift(4);
}
function Cv(e) {
  var r = {};
  switch (r.xclrType = e.read_shift(2), r.nTintShade = e.read_shift(2), r.xclrType) {
    case 0:
      e.l += 4;
      break;
    case 1:
      r.xclrValue = bv(e, 4);
      break;
    case 2:
      r.xclrValue = oo(e);
      break;
    case 3:
      r.xclrValue = Iv(e);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return e.l += 8, r;
}
function bv(e, r) {
  return jr(e, r);
}
function Ov(e, r) {
  return jr(e, r);
}
function Nv(e) {
  var r = e.read_shift(2), t = e.read_shift(2) - 4, a = [r];
  switch (r) {
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 13:
      a[1] = Cv(e);
      break;
    case 6:
      a[1] = Ov(e, t);
      break;
    case 14:
    case 15:
      a[1] = e.read_shift(t === 1 ? 1 : 2);
      break;
    default:
      throw new Error("Unrecognized ExtProp type: " + r + " " + t);
  }
  return a;
}
function Rv(e, r) {
  var t = e.l + r;
  e.l += 2;
  var a = e.read_shift(2);
  e.l += 2;
  for (var n = e.read_shift(2), i = []; n-- > 0; ) i.push(Nv(e, t - e.l));
  return { ixfe: a, ext: i };
}
function Dv(e, r) {
  r.forEach(function(t) {
    switch (t[0]) {
    }
  });
}
function Pv(e, r) {
  return {
    flags: e.read_shift(4),
    version: e.read_shift(4),
    name: Kr(e)
  };
}
function Lv(e) {
  var r = H(12 + 2 * e.name.length);
  return r.write_shift(4, e.flags), r.write_shift(4, e.version), Fr(e.name, r), r.slice(0, r.l);
}
function Mv(e) {
  for (var r = [], t = e.read_shift(4); t-- > 0; ) r.push([e.read_shift(4), e.read_shift(4)]);
  return r;
}
function Bv(e) {
  var r = H(4 + 8 * e.length);
  r.write_shift(4, e.length);
  for (var t = 0; t < e.length; ++t)
    r.write_shift(4, e[t][0]), r.write_shift(4, e[t][1]);
  return r;
}
function Uv(e, r) {
  var t = H(8 + 2 * r.length);
  return t.write_shift(4, e), Fr(r, t), t.slice(0, t.l);
}
function Wv(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function Hv(e, r) {
  var t = H(8);
  return t.write_shift(4, e), t.write_shift(4, 1), t;
}
function Xv(e, r, t) {
  var a = { Types: [], Cell: [], Value: [] }, n = t || {}, i = [], s = !1, f = 2;
  return $t(e, function(c, o, l) {
    switch (l) {
      case 335:
        a.Types.push({ name: c.name });
        break;
      case 51:
        c.forEach(function(d) {
          f == 1 ? a.Cell.push({ type: a.Types[d[0] - 1].name, index: d[1] }) : f == 0 && a.Value.push({ type: a.Types[d[0] - 1].name, index: d[1] });
        });
        break;
      case 337:
        f = c ? 1 : 0;
        break;
      case 338:
        f = 2;
        break;
      case 35:
        i.push(l), s = !0;
        break;
      case 36:
        i.pop(), s = !1;
        break;
      default:
        if (!o.T) {
          if (!s || n.WTF && i[i.length - 1] != 35) throw new Error("Unexpected record 0x" + l.toString(16));
        }
    }
  }), a;
}
function Vv() {
  var e = $r();
  return Z(
    e,
    332
    /* BrtBeginMetadata */
  ), Z(e, 334, kt(1)), Z(e, 335, Lv({
    name: "XLDAPR",
    version: 12e4,
    flags: 3496657072
  })), Z(
    e,
    336
    /* BrtEndEsmdtinfo */
  ), Z(e, 339, Uv(1, "XLDAPR")), Z(
    e,
    52
    /* BrtBeginFmd */
  ), Z(e, 35, kt(514)), Z(e, 4096, kt(0)), Z(e, 4097, ht(1)), Z(
    e,
    36
    /* BrtFRTEnd */
  ), Z(
    e,
    53
    /* BrtEndFmd */
  ), Z(
    e,
    340
    /* BrtEndEsfmd */
  ), Z(e, 337, Hv(1)), Z(e, 51, Bv([[1, 0]])), Z(
    e,
    338
    /* BrtEndEsmdb */
  ), Z(
    e,
    333
    /* BrtEndMetadata */
  ), e.end();
}
function Gv(e, r, t) {
  var a = { Types: [], Cell: [], Value: [] };
  if (!e) return a;
  var n = !1, i = 2, s;
  return e.replace(Dr, function(f) {
    var c = ke(f);
    switch (vt(c[0])) {
      case "<?xml":
        break;
      case "<metadata":
      case "</metadata>":
        break;
      case "<metadataTypes":
      case "</metadataTypes>":
        break;
      case "<metadataType":
        a.Types.push({ name: c.name });
        break;
      case "</metadataType>":
        break;
      case "<futureMetadata":
        for (var o = 0; o < a.Types.length; ++o) a.Types[o].name == c.name && (s = a.Types[o]);
        break;
      case "</futureMetadata>":
        break;
      case "<bk>":
        break;
      case "</bk>":
        break;
      case "<rc":
        i == 1 ? a.Cell.push({ type: a.Types[c.t - 1].name, index: +c.v }) : i == 0 && a.Value.push({ type: a.Types[c.t - 1].name, index: +c.v });
        break;
      case "</rc>":
        break;
      case "<cellMetadata":
        i = 1;
        break;
      case "</cellMetadata>":
        i = 2;
        break;
      case "<valueMetadata":
        i = 0;
        break;
      case "</valueMetadata>":
        i = 2;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      case "<rvb":
        if (!s) break;
        s.offsets || (s.offsets = []), s.offsets.push(+c.i);
        break;
      default:
        if (!n && (t != null && t.WTF)) throw new Error("unrecognized " + c[0] + " in metadata");
    }
    return f;
  }), a;
}
function zv() {
  var e = [hr];
  return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`), e.join("");
}
function $v(e) {
  var r = [];
  if (!e) return r;
  var t = 1;
  return (e.match(Dr) || []).forEach(function(a) {
    var n = ke(a);
    switch (n[0]) {
      case "<?xml":
        break;
      case "<calcChain":
      case "<calcChain>":
      case "</calcChain>":
        break;
      case "<c":
        delete n[0], n.i ? t = n.i : n.i = t, r.push(n);
        break;
    }
  }), r;
}
function Kv(e) {
  var r = {};
  r.i = e.read_shift(4);
  var t = {};
  t.r = e.read_shift(4), t.c = e.read_shift(4), r.r = He(t);
  var a = e.read_shift(1);
  return a & 2 && (r.l = "1"), a & 8 && (r.a = "1"), r;
}
function jv(e, r, t) {
  var a = [];
  return $t(e, function(i, s, f) {
    switch (f) {
      case 63:
        a.push(i);
        break;
      default:
        if (!s.T) throw new Error("Unexpected record 0x" + f.toString(16));
    }
  }), a;
}
function Yv(e, r, t, a) {
  if (!e) return e;
  var n = a || {}, i = !1;
  $t(e, function(f, c, o) {
    switch (o) {
      case 359:
      case 363:
      case 364:
      case 366:
      case 367:
      case 368:
      case 369:
      case 370:
      case 371:
      case 472:
      case 577:
      case 578:
      case 579:
      case 580:
      case 581:
      case 582:
      case 583:
      case 584:
      case 585:
      case 586:
      case 587:
        break;
      case 35:
        i = !0;
        break;
      case 36:
        i = !1;
        break;
      default:
        if (!c.T) {
          if (!i || n.WTF) throw new Error("Unexpected record 0x" + o.toString(16));
        }
    }
  }, n);
}
function Zv(e, r) {
  if (!e) return "??";
  var t = (e.match(/<c:chart [^<>]*r:id="([^<>"]*)"/) || ["", ""])[1];
  return r["!id"][t].Target;
}
function Jv(e, r, t) {
  var a = 0;
  (Sc(e, "shape") || []).forEach(function(n) {
    var i = "", s = !0, f = -1, c = -1, o = -1;
    switch (n.replace(Dr, function(d, u) {
      var h = ke(d);
      switch (vt(h[0])) {
        case "<ClientData":
          h.ObjectType && (i = h.ObjectType);
          break;
        case "<Visible":
        case "<Visible/>":
          s = !1;
          break;
        case "<Row":
        case "<Row>":
          f = u + d.length;
          break;
        case "</Row>":
          c = +n.slice(f, u).trim();
          break;
        case "<Column":
        case "<Column>":
          f = u + d.length;
          break;
        case "</Column>":
          o = +n.slice(f, u).trim();
          break;
      }
      return "";
    }), i) {
      case "Note":
        var l = yn(r, c >= 0 && o >= 0 ? He({ r: c, c: o }) : t[a].ref);
        l.c && (l.c.hidden = s), ++a;
        break;
    }
  });
}
function bo(e, r, t) {
  var a = [21600, 21600], n = ["m0,0l0", a[1], a[0], a[1], a[0], "0xe"].join(","), i = [
    te("xml", null, { "xmlns:v": Sr.v, "xmlns:o": Sr.o, "xmlns:x": Sr.x, "xmlns:mv": Sr.mv }).replace(/\/>/, ">"),
    te("o:shapelayout", te("o:idmap", null, { "v:ext": "edit", data: e }), { "v:ext": "edit" })
  ], s = 65536 * e, f = r || [];
  return f.length > 0 && i.push(te("v:shapetype", [
    te("v:stroke", null, { joinstyle: "miter" }),
    te("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" })
  ].join(""), { id: "_x0000_t202", coordsize: a.join(","), "o:spt": 202, path: n })), f.forEach(function(c) {
    ++s, i.push(qv(c, s));
  }), i.push("</xml>"), i.join("");
}
function qv(e, r, t) {
  var a = er(e[0]), n = (
    /*::(*/
    { color2: "#BEFF82", type: "gradient" }
  );
  n.type == "gradient" && (n.angle = "-180");
  var i = n.type == "gradient" ? te("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }) : null, s = te("v:fill", i, n), f = { on: "t", obscured: "t" };
  return [
    "<v:shape" + pa({
      id: "_x0000_s" + r,
      type: "#_x0000_t202",
      style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (e[1].hidden ? ";visibility:hidden" : ""),
      fillcolor: "#ECFAD4",
      strokecolor: "#edeaa1"
    }) + ">",
    s,
    te("v:shadow", null, f),
    te("v:path", null, { "o:connecttype": "none" }),
    '<v:textbox><div style="text-align:left"></div></v:textbox>',
    '<x:ClientData ObjectType="Note">',
    "<x:MoveWithCells/>",
    "<x:SizeWithCells/>",
    /* Part 4 19.4.2.3 Anchor (Anchor) */
    Rr("x:Anchor", [a.c + 1, 0, a.r + 1, 0, a.c + 3, 20, a.r + 5, 20].join(",")),
    Rr("x:AutoFill", "False"),
    Rr("x:Row", String(a.r)),
    Rr("x:Column", String(a.c)),
    e[1].hidden ? "" : "<x:Visible/>",
    "</x:ClientData>",
    "</v:shape>"
  ].join("");
}
function Gf(e, r, t, a) {
  var n = e["!data"] != null, i;
  r.forEach(function(s) {
    var f = er(s.ref);
    if (!(f.r < 0 || f.c < 0)) {
      if (n ? (e["!data"][f.r] || (e["!data"][f.r] = []), i = e["!data"][f.r][f.c]) : i = e[s.ref], !i) {
        i = { t: "z" }, n ? e["!data"][f.r][f.c] = i : e[s.ref] = i;
        var c = Ge(e["!ref"] || "BDWGO1000001:A1");
        c.s.r > f.r && (c.s.r = f.r), c.e.r < f.r && (c.e.r = f.r), c.s.c > f.c && (c.s.c = f.c), c.e.c < f.c && (c.e.c = f.c);
        var o = Me(c);
        e["!ref"] = o;
      }
      i.c || (i.c = []);
      var l = { a: s.author, t: s.t, r: s.r, T: t };
      s.h && (l.h = s.h);
      for (var d = i.c.length - 1; d >= 0; --d) {
        if (!t && i.c[d].T) return;
        t && !i.c[d].T && i.c.splice(d, 1);
      }
      if (t && a) {
        for (d = 0; d < a.length; ++d)
          if (l.a == a[d].id) {
            l.a = a[d].name || l.a;
            break;
          }
      }
      i.c.push(l);
    }
  });
}
function Qv(e, r) {
  if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
  var t = [], a = [], n = Or(e, "authors");
  n && n[1] && n[1].split(/<\/\w*:?author>/).forEach(function(s) {
    if (!(s === "" || s.trim() === "")) {
      var f = s.match(/<(?:\w+:)?author[^<>]*>(.*)/);
      f && t.push(f[1]);
    }
  });
  var i = Or(e, "commentList");
  return i && i[1] && i[1].split(/<\/\w*:?comment>/).forEach(function(s) {
    if (!(s === "" || s.trim() === "")) {
      var f = s.match(/<(?:\w+:)?comment[^<>]*>/);
      if (f) {
        var c = ke(f[0]), o = { author: c.authorId && t[c.authorId] || "sheetjsghost", ref: c.ref, guid: c.guid }, l = er(c.ref);
        if (!(r.sheetRows && r.sheetRows <= l.r)) {
          var d = Or(s, "text"), u = !!d && !!d[1] && Ds(d[1]) || { r: "", t: "", h: "" };
          o.r = u.r, u.r == "<t></t>" && (u.t = u.h = ""), o.t = (u.t || "").replace(/\r\n/g, `
`).replace(/\r/g, `
`), r.cellHTML && (o.h = u.h), a.push(o);
        }
      }
    }
  }), a;
}
function e2(e) {
  var r = [hr, te("comments", null, { xmlns: Ta[0] })], t = [];
  return r.push("<authors>"), e.forEach(function(a) {
    a[1].forEach(function(n) {
      var i = Le(n.a);
      t.indexOf(i) == -1 && (t.push(i), r.push("<author>" + i + "</author>")), n.T && n.ID && t.indexOf("tc=" + n.ID) == -1 && (t.push("tc=" + n.ID), r.push("<author>tc=" + n.ID + "</author>"));
    });
  }), t.length == 0 && (t.push("SheetJ5"), r.push("<author>SheetJ5</author>")), r.push("</authors>"), r.push("<commentList>"), e.forEach(function(a) {
    var n = 0, i = [], s = 0;
    if (a[1][0] && a[1][0].T && a[1][0].ID && (n = t.indexOf("tc=" + a[1][0].ID)), a[1].forEach(function(o) {
      o.a && (n = t.indexOf(Le(o.a))), o.T && ++s, i.push(o.t == null ? "" : Le(o.t));
    }), s === 0)
      a[1].forEach(function(o) {
        r.push('<comment ref="' + a[0] + '" authorId="' + t.indexOf(Le(o.a)) + '"><text>'), r.push(Rr("t", o.t == null ? "" : Le(o.t))), r.push("</text></comment>");
      });
    else {
      a[1][0] && a[1][0].T && a[1][0].ID && (n = t.indexOf("tc=" + a[1][0].ID)), r.push('<comment ref="' + a[0] + '" authorId="' + n + '"><text>');
      for (var f = `Comment:
    ` + i[0] + `
`, c = 1; c < i.length; ++c) f += `Reply:
    ` + i[c] + `
`;
      r.push(Rr("t", Le(f))), r.push("</text></comment>");
    }
  }), r.push("</commentList>"), r.length > 2 && (r[r.length] = "</comments>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function r2(e, r) {
  var t = [], a = !1, n = {}, i = 0;
  return e.replace(Dr, function(f, c) {
    var o = ke(f);
    switch (vt(o[0])) {
      case "<?xml":
        break;
      case "<ThreadedComments":
        break;
      case "</ThreadedComments>":
        break;
      case "<threadedComment":
        n = { author: o.personId, guid: o.id, ref: o.ref, T: 1 };
        break;
      case "</threadedComment>":
        n.t != null && t.push(n);
        break;
      case "<text>":
      case "<text":
        i = c + f.length;
        break;
      case "</text>":
        n.t = e.slice(i, c).replace(/\r\n/g, `
`).replace(/\r/g, `
`);
        break;
      case "<mentions":
      case "<mentions>":
        a = !0;
        break;
      case "</mentions>":
        a = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        a = !0;
        break;
      case "</ext>":
        a = !1;
        break;
      default:
        if (!a && r.WTF) throw new Error("unrecognized " + o[0] + " in threaded comments");
    }
    return f;
  }), t;
}
function Oo(e, r, t) {
  var a = [hr, te("ThreadedComments", null, { xmlns: Ar.TCMNT }).replace(/[\/]>/, ">")];
  return e.forEach(function(n) {
    var i = "";
    (n[1] || []).forEach(function(s, f) {
      if (!s.T) {
        delete s.ID;
        return;
      }
      s.a && r.indexOf(s.a) == -1 && r.push(s.a);
      var c = {
        ref: n[0],
        id: "{54EE7951-7262-4200-6969-" + ("000000000000" + t.tcid++).slice(-12) + "}"
      };
      f == 0 ? i = c.id : c.parentId = i, s.ID = c.id, s.a && (c.personId = "{54EE7950-7262-4200-6969-" + ("000000000000" + r.indexOf(s.a)).slice(-12) + "}"), a.push(te("threadedComment", Rr("text", s.t || ""), c));
    });
  }), a.push("</ThreadedComments>"), a.join("");
}
function t2(e, r) {
  var t = [], a = !1;
  return e.replace(Dr, function(i) {
    var s = ke(i);
    switch (vt(s[0])) {
      case "<?xml":
        break;
      case "<personList":
        break;
      case "</personList>":
        break;
      case "<person":
        t.push({ name: s.displayname, id: s.id });
        break;
      case "</person>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        a = !0;
        break;
      case "</ext>":
        a = !1;
        break;
      default:
        if (!a && r.WTF) throw new Error("unrecognized " + s[0] + " in threaded comments");
    }
    return i;
  }), t;
}
function No(e) {
  var r = [hr, te("personList", null, {
    xmlns: Ar.TCMNT,
    "xmlns:x": Ta[0]
  }).replace(/[\/]>/, ">")];
  return e.forEach(function(t, a) {
    r.push(te("person", null, {
      displayName: t,
      id: "{54EE7950-7262-4200-6969-" + ("000000000000" + a).slice(-12) + "}",
      userId: t,
      providerId: "None"
    }));
  }), r.push("</personList>"), r.join("");
}
function a2(e) {
  var r = {};
  r.iauthor = e.read_shift(4);
  var t = xa(e);
  return r.rfx = t.s, r.ref = He(t.s), e.l += 16, r;
}
function n2(e, r) {
  return r == null && (r = H(36)), r.write_shift(4, e[1].iauthor), Ga(e[0], r), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r.write_shift(4, 0), r;
}
var i2 = Kr;
function zf(e) {
  return Fr(e.slice(0, 54));
}
function s2(e, r) {
  var t = [], a = [], n = {}, i = !1;
  return $t(e, function(f, c, o) {
    switch (o) {
      case 632:
        a.push(f);
        break;
      case 635:
        n = f;
        break;
      case 637:
        n.t = f.t, n.h = f.h, n.r = f.r;
        break;
      case 636:
        if (n.author = a[n.iauthor], delete n.iauthor, r.sheetRows && n.rfx && r.sheetRows <= n.rfx.r) break;
        n.t || (n.t = ""), delete n.rfx, t.push(n);
        break;
      case 3072:
        break;
      case 35:
        i = !0;
        break;
      case 36:
        i = !1;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!c.T) {
          if (!i || r.WTF) throw new Error("Unexpected record 0x" + o.toString(16));
        }
    }
  }), t;
}
function f2(e) {
  var r = $r(), t = [];
  return Z(
    r,
    628
    /* BrtBeginComments */
  ), Z(
    r,
    630
    /* BrtBeginCommentAuthors */
  ), e.forEach(function(a) {
    a[1].forEach(function(n) {
      t.indexOf(n.a) > -1 || (t.push(n.a.slice(0, 54)), Z(r, 632, zf(n.a)), n.T && n.ID && t.indexOf("tc=" + n.ID) == -1 && (t.push("tc=" + n.ID), Z(r, 632, zf("tc=" + n.ID))));
    });
  }), Z(
    r,
    631
    /* BrtEndCommentAuthors */
  ), Z(
    r,
    633
    /* BrtBeginCommentList */
  ), e.forEach(function(a) {
    a[1].forEach(function(n) {
      var i = -1;
      n.ID && (i = t.indexOf("tc=" + n.ID)), i == -1 && a[1][0].T && a[1][0].ID && (i = t.indexOf("tc=" + a[1][0].ID)), i == -1 && (i = t.indexOf(n.a)), n.iauthor = i;
      var s = { s: er(a[0]), e: er(a[0]) };
      Z(r, 635, n2([s, n])), n.t && n.t.length > 0 && Z(r, 637, Su(n)), Z(
        r,
        636
        /* BrtEndComment */
      ), delete n.iauthor;
    });
  }), Z(
    r,
    634
    /* BrtEndCommentList */
  ), Z(
    r,
    629
    /* BrtEndComments */
  ), r.end();
}
var c2 = "application/vnd.ms-office.vbaProject";
function o2(e) {
  var r = Ie.utils.cfb_new({ root: "R" });
  return e.FullPaths.forEach(function(t, a) {
    if (!(t.slice(-1) === "/" || !t.match(/_VBA_PROJECT_CUR/))) {
      var n = t.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
      Ie.utils.cfb_add(r, n, e.FileIndex[a].content);
    }
  }), Ie.write(r);
}
function l2(e, r) {
  r.FullPaths.forEach(function(t, a) {
    if (a != 0) {
      var n = t.replace(/^[\/]*[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
      n.slice(-1) !== "/" && Ie.utils.cfb_add(e, n, r.FileIndex[a].content);
    }
  });
}
var u2 = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
function h2() {
  return { "!type": "dialog" };
}
function d2() {
  return { "!type": "dialog" };
}
function v2() {
  return { "!type": "macro" };
}
function m2() {
  return { "!type": "macro" };
}
var la = /* @__PURE__ */ function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, r = { r: 0, c: 0 };
  function t(a, n, i, s) {
    var f = !1, c = !1;
    i.length == 0 ? c = !0 : i.charAt(0) == "[" && (c = !0, i = i.slice(1, -1)), s.length == 0 ? f = !0 : s.charAt(0) == "[" && (f = !0, s = s.slice(1, -1));
    var o = i.length > 0 ? parseInt(i, 10) | 0 : 0, l = s.length > 0 ? parseInt(s, 10) | 0 : 0;
    return f ? l += r.c : --l, c ? o += r.r : --o, n + (f ? "" : "$") + Ne(l) + (c ? "" : "$") + Xe(o);
  }
  return function(n, i) {
    return r = i, n.replace(e, t);
  };
}(), Ei = /(^|[^._A-Z0-9])(\$?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])(\$?)(\d{1,7})(?![_.\(A-Za-z0-9])/g;
try {
  Ei = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g;
} catch {
}
var bn = /* @__PURE__ */ function() {
  return function(r, t) {
    return r.replace(Ei, function(a, n, i, s, f, c) {
      var o = As(s) - (i ? 0 : t.c), l = xs(c) - (f ? 0 : t.r), d = f == "$" ? l + 1 : l == 0 ? "" : "[" + l + "]", u = i == "$" ? o + 1 : o == 0 ? "" : "[" + o + "]";
      return n + "R" + d + "C" + u;
    });
  };
}();
function Ro(e, r) {
  return e.replace(Ei, function(t, a, n, i, s, f) {
    return a + (n == "$" ? n + i : Ne(As(i) + r.c)) + (s == "$" ? s + f : Xe(xs(f) + r.r));
  });
}
function $f(e, r, t) {
  var a = Er(r), n = a.s, i = er(t), s = { r: i.r - n.r, c: i.c - n.c };
  return Ro(e, s);
}
function p2(e) {
  return e.length != 1;
}
function Kf(e) {
  return e.replace(/_xlfn\./g, "");
}
function wr(e) {
  e.l += 1;
}
function Jt(e, r) {
  var t = e.read_shift(2);
  return [t & 16383, t >> 14 & 1, t >> 15 & 1];
}
function Do(e, r, t) {
  var a = 2;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return Po(e);
    t.biff == 12 && (a = 4);
  }
  var n = e.read_shift(a), i = e.read_shift(a), s = Jt(e), f = Jt(e);
  return { s: { r: n, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: i, c: f[0], cRel: f[1], rRel: f[2] } };
}
function Po(e) {
  var r = Jt(e), t = Jt(e), a = e.read_shift(1), n = e.read_shift(1);
  return { s: { r: r[0], c: a, cRel: r[1], rRel: r[2] }, e: { r: t[0], c: n, cRel: t[1], rRel: t[2] } };
}
function g2(e, r, t) {
  if (t.biff < 8) return Po(e);
  var a = e.read_shift(t.biff == 12 ? 4 : 2), n = e.read_shift(t.biff == 12 ? 4 : 2), i = Jt(e), s = Jt(e);
  return { s: { r: a, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: n, c: s[0], cRel: s[1], rRel: s[2] } };
}
function Lo(e, r, t) {
  if (t && t.biff >= 2 && t.biff <= 5) return _2(e);
  var a = e.read_shift(t && t.biff == 12 ? 4 : 2), n = Jt(e);
  return { r: a, c: n[0], cRel: n[1], rRel: n[2] };
}
function _2(e) {
  var r = Jt(e), t = e.read_shift(1);
  return { r: r[0], c: t, cRel: r[1], rRel: r[2] };
}
function w2(e) {
  var r = e.read_shift(2), t = e.read_shift(2);
  return { r, c: t & 255, fQuoted: !!(t & 16384), cRel: t >> 15, rRel: t >> 15 };
}
function k2(e, r, t) {
  var a = t && t.biff ? t.biff : 8;
  if (a >= 2 && a <= 5) return T2(e);
  var n = e.read_shift(a >= 12 ? 4 : 2), i = e.read_shift(2), s = (i & 16384) >> 14, f = (i & 32768) >> 15;
  if (i &= 16383, f == 1) for (; n > 524287; ) n -= 1048576;
  if (s == 1) for (; i > 8191; ) i = i - 16384;
  return { r: n, c: i, cRel: s, rRel: f };
}
function T2(e) {
  var r = e.read_shift(2), t = e.read_shift(1), a = (r & 32768) >> 15, n = (r & 16384) >> 14;
  return r &= 16383, a == 1 && r >= 8192 && (r = r - 16384), n == 1 && t >= 128 && (t = t - 256), { r, c: t, cRel: n, rRel: a };
}
function E2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = Do(e, t.biff >= 2 && t.biff <= 5 ? 6 : 8, t);
  return [a, n];
}
function y2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2, "i"), i = 8;
  if (t) switch (t.biff) {
    case 5:
      e.l += 12, i = 6;
      break;
    case 12:
      i = 12;
      break;
  }
  var s = Do(e, i, t);
  return [a, n, s];
}
function S2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5;
  return e.l += t && t.biff > 8 ? 12 : t.biff < 8 ? 6 : 8, [a];
}
function x2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2), i = 8;
  if (t) switch (t.biff) {
    case 5:
      e.l += 12, i = 6;
      break;
    case 12:
      i = 12;
      break;
  }
  return e.l += i, [a, n];
}
function A2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = g2(e, r - 1, t);
  return [a, n];
}
function F2(e, r, t) {
  var a = (e[e.l++] & 96) >> 5;
  return e.l += t.biff == 2 ? 6 : t.biff == 12 ? 14 : 7, [a];
}
function jf(e) {
  var r = e[e.l + 1] & 1, t = 1;
  return e.l += 4, [r, t];
}
function I2(e, r, t) {
  e.l += 2;
  for (var a = e.read_shift(t && t.biff == 2 ? 1 : 2), n = [], i = 0; i <= a; ++i) n.push(e.read_shift(t && t.biff == 2 ? 1 : 2));
  return n;
}
function C2(e, r, t) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(t && t.biff == 2 ? 1 : 2)];
}
function b2(e, r, t) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(t && t.biff == 2 ? 1 : 2)];
}
function O2(e) {
  var r = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [r, e.read_shift(2)];
}
function N2(e, r, t) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += t && t.biff == 2 ? 3 : 4, [a];
}
function Mo(e) {
  var r = e.read_shift(1), t = e.read_shift(1);
  return [r, t];
}
function R2(e) {
  return e.read_shift(2), Mo(e);
}
function D2(e) {
  return e.read_shift(2), Mo(e);
}
function P2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = Lo(e, 0, t);
  return [a, n];
}
function L2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = k2(e, 0, t);
  return [a, n];
}
function M2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(2);
  t && t.biff == 5 && (e.l += 12);
  var i = Lo(e, 0, t);
  return [a, n, i];
}
function B2(e, r, t) {
  var a = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(t && t.biff <= 3 ? 1 : 2);
  return [qm[n], Wo[n], a];
}
function U2(e, r, t) {
  var a = e[e.l++], n = e.read_shift(1), i = t && t.biff <= 3 ? [a == 88 ? -1 : 0, e.read_shift(1)] : W2(e);
  return [n, (i[0] === 0 ? Wo : Jm)[i[1]]];
}
function W2(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function H2(e, r, t) {
  e.l += t && t.biff == 2 ? 3 : 4;
}
function X2(e, r, t) {
  if (e.l++, t && t.biff == 12) return [e.read_shift(4, "i"), 0];
  var a = e.read_shift(2), n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [a, n];
}
function V2(e) {
  return e.l++, Ir[e.read_shift(1)];
}
function G2(e) {
  return e.l++, e.read_shift(2);
}
function z2(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function $2(e) {
  return e.l++, Vr(e);
}
function K2(e, r, t) {
  return e.l++, Ma(e, r - 1, t);
}
function j2(e, r) {
  var t = [e.read_shift(1)];
  if (r == 12) switch (t[0]) {
    case 2:
      t[0] = 4;
      break;
    case 4:
      t[0] = 16;
      break;
    case 0:
      t[0] = 1;
      break;
    case 1:
      t[0] = 2;
      break;
  }
  switch (t[0]) {
    case 4:
      t[1] = dr(e, 1) ? "TRUE" : "FALSE", r != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      t[1] = Ir[e[e.l]], e.l += r == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      t[1] = Vr(e);
      break;
    case 2:
      t[1] = Aa(e, 0, { biff: r > 0 && r < 8 ? 2 : r });
      break;
    default:
      throw new Error("Bad SerAr: " + t[0]);
  }
  return t;
}
function Y2(e, r, t) {
  for (var a = e.read_shift(t.biff == 12 ? 4 : 2), n = [], i = 0; i != a; ++i) n.push((t.biff == 12 ? xa : Ti)(e));
  return n;
}
function Z2(e, r, t) {
  var a = 0, n = 0;
  t.biff == 12 ? (a = e.read_shift(4), n = e.read_shift(4)) : (n = 1 + e.read_shift(1), a = 1 + e.read_shift(2)), t.biff >= 2 && t.biff < 8 && (--a, --n == 0 && (n = 256));
  for (var i = 0, s = []; i != a && (s[i] = []); ++i)
    for (var f = 0; f != n; ++f) s[i][f] = j2(e, t.biff);
  return s;
}
function J2(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3, n = !t || t.biff >= 8 ? 4 : 2, i = e.read_shift(n);
  switch (t.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [a, 0, i];
}
function q2(e, r, t) {
  if (t.biff == 5) return Q2(e);
  var a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(2), i = e.read_shift(4);
  return [a, n, i];
}
function Q2(e) {
  var r = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2, "i");
  e.l += 8;
  var a = e.read_shift(2);
  return e.l += 12, [r, t, a];
}
function em(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3;
  e.l += t && t.biff == 2 ? 3 : 4;
  var n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [a, n];
}
function rm(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3, n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [a, n];
}
function tm(e, r, t) {
  var a = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, t.biff < 8 && e.l--, t.biff == 12 && (e.l += 2), [a];
}
function am(e, r, t) {
  var a = (e[e.l++] & 96) >> 5, n = e.read_shift(2), i = 4;
  if (t) switch (t.biff) {
    case 5:
      i = 15;
      break;
    case 12:
      i = 6;
      break;
  }
  return e.l += i, [a, n];
}
var nm = jr, im = jr, sm = jr;
function On(e, r, t) {
  return e.l += 2, [w2(e)];
}
function Bs(e) {
  return e.l += 6, [];
}
var fm = On, cm = Bs, om = Bs, lm = On;
function Bo(e) {
  return e.l += 2, [ur(e), e.read_shift(2) & 1];
}
var um = On, hm = Bo, dm = Bs, vm = On, mm = On, pm = [
  "Data",
  "All",
  "Headers",
  "??",
  "?Data2",
  "??",
  "?DataHeaders",
  "??",
  "Totals",
  "??",
  "??",
  "??",
  "?DataTotals",
  "??",
  "??",
  "??",
  "?Current"
];
function gm(e) {
  e.l += 2;
  var r = e.read_shift(2), t = e.read_shift(2), a = e.read_shift(4), n = e.read_shift(2), i = e.read_shift(2), s = pm[t >> 2 & 31];
  return { ixti: r, coltype: t & 3, rt: s, idx: a, c: n, C: i };
}
function _m(e) {
  return e.l += 2, [e.read_shift(4)];
}
function wm(e, r, t) {
  return e.l += 5, e.l += 2, e.l += t.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function km(e, r, t) {
  return e.l += t.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function Tm(e) {
  var r = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2);
  return [r, t];
}
function Em(e) {
  var r = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2);
  return [r, t];
}
function ym(e) {
  return e.l += 4, [0, 0];
}
var Yf = {
  1: { n: "PtgExp", f: X2 },
  2: { n: "PtgTbl", f: sm },
  3: { n: "PtgAdd", f: wr },
  4: { n: "PtgSub", f: wr },
  5: { n: "PtgMul", f: wr },
  6: { n: "PtgDiv", f: wr },
  7: { n: "PtgPower", f: wr },
  8: { n: "PtgConcat", f: wr },
  9: { n: "PtgLt", f: wr },
  10: { n: "PtgLe", f: wr },
  11: { n: "PtgEq", f: wr },
  12: { n: "PtgGe", f: wr },
  13: { n: "PtgGt", f: wr },
  14: { n: "PtgNe", f: wr },
  15: { n: "PtgIsect", f: wr },
  16: { n: "PtgUnion", f: wr },
  17: { n: "PtgRange", f: wr },
  18: { n: "PtgUplus", f: wr },
  19: { n: "PtgUminus", f: wr },
  20: { n: "PtgPercent", f: wr },
  21: { n: "PtgParen", f: wr },
  22: { n: "PtgMissArg", f: wr },
  23: { n: "PtgStr", f: K2 },
  26: { n: "PtgSheet", f: wm },
  27: { n: "PtgEndSheet", f: km },
  28: { n: "PtgErr", f: V2 },
  29: { n: "PtgBool", f: z2 },
  30: { n: "PtgInt", f: G2 },
  31: { n: "PtgNum", f: $2 },
  32: { n: "PtgArray", f: F2 },
  33: { n: "PtgFunc", f: B2 },
  34: { n: "PtgFuncVar", f: U2 },
  35: { n: "PtgName", f: J2 },
  36: { n: "PtgRef", f: P2 },
  37: { n: "PtgArea", f: E2 },
  38: { n: "PtgMemArea", f: em },
  39: { n: "PtgMemErr", f: nm },
  40: { n: "PtgMemNoMem", f: im },
  41: { n: "PtgMemFunc", f: rm },
  42: { n: "PtgRefErr", f: tm },
  43: { n: "PtgAreaErr", f: S2 },
  44: { n: "PtgRefN", f: L2 },
  45: { n: "PtgAreaN", f: A2 },
  46: { n: "PtgMemAreaN", f: Tm },
  47: { n: "PtgMemNoMemN", f: Em },
  57: { n: "PtgNameX", f: q2 },
  58: { n: "PtgRef3d", f: M2 },
  59: { n: "PtgArea3d", f: y2 },
  60: { n: "PtgRefErr3d", f: am },
  61: { n: "PtgAreaErr3d", f: x2 },
  255: {}
}, Sm = {
  64: 32,
  96: 32,
  65: 33,
  97: 33,
  66: 34,
  98: 34,
  67: 35,
  99: 35,
  68: 36,
  100: 36,
  69: 37,
  101: 37,
  70: 38,
  102: 38,
  71: 39,
  103: 39,
  72: 40,
  104: 40,
  73: 41,
  105: 41,
  74: 42,
  106: 42,
  75: 43,
  107: 43,
  76: 44,
  108: 44,
  77: 45,
  109: 45,
  78: 46,
  110: 46,
  79: 47,
  111: 47,
  88: 34,
  120: 34,
  89: 57,
  121: 57,
  90: 58,
  122: 58,
  91: 59,
  123: 59,
  92: 60,
  124: 60,
  93: 61,
  125: 61
}, xm = {
  1: { n: "PtgElfLel", f: Bo },
  2: { n: "PtgElfRw", f: vm },
  3: { n: "PtgElfCol", f: fm },
  6: { n: "PtgElfRwV", f: mm },
  7: { n: "PtgElfColV", f: lm },
  10: { n: "PtgElfRadical", f: um },
  11: { n: "PtgElfRadicalS", f: dm },
  13: { n: "PtgElfColS", f: cm },
  15: { n: "PtgElfColSV", f: om },
  16: { n: "PtgElfRadicalLel", f: hm },
  25: { n: "PtgList", f: gm },
  29: { n: "PtgSxName", f: _m },
  255: {}
}, Am = {
  0: { n: "PtgAttrNoop", f: ym },
  1: { n: "PtgAttrSemi", f: N2 },
  2: { n: "PtgAttrIf", f: b2 },
  4: { n: "PtgAttrChoose", f: I2 },
  8: { n: "PtgAttrGoto", f: C2 },
  16: { n: "PtgAttrSum", f: H2 },
  32: { n: "PtgAttrBaxcel", f: jf },
  33: { n: "PtgAttrBaxcel", f: jf },
  64: { n: "PtgAttrSpace", f: R2 },
  65: { n: "PtgAttrSpaceSemi", f: D2 },
  128: { n: "PtgAttrIfError", f: O2 },
  255: {}
};
function Nn(e, r, t, a) {
  if (a.biff < 8) return jr(e, r);
  for (var n = e.l + r, i = [], s = 0; s !== t.length; ++s)
    switch (t[s][0]) {
      case "PtgArray":
        t[s][1] = Z2(e, 0, a), i.push(t[s][1]);
        break;
      case "PtgMemArea":
        t[s][2] = Y2(e, t[s][1], a), i.push(t[s][2]);
        break;
      case "PtgExp":
        a && a.biff == 12 && (t[s][1][1] = e.read_shift(4), i.push(t[s][1]));
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + t[s][0];
    }
  return r = n - e.l, r !== 0 && i.push(jr(e, r)), i;
}
function Rn(e, r, t) {
  for (var a = e.l + r, n, i, s = []; a != e.l; )
    r = a - e.l, i = e[e.l], n = Yf[i] || Yf[Sm[i]], (i === 24 || i === 25) && (n = (i === 24 ? xm : Am)[e[e.l + 1]]), !n || !n.f ? jr(e, r) : s.push([n.n, n.f(e, r, t)]);
  return s;
}
function Fm(e) {
  for (var r = [], t = 0; t < e.length; ++t) {
    for (var a = e[t], n = [], i = 0; i < a.length; ++i) {
      var s = a[i];
      if (s) switch (s[0]) {
        case 2:
          n.push('"' + s[1].replace(/"/g, '""') + '"');
          break;
        default:
          n.push(s[1]);
      }
      else n.push("");
    }
    r.push(n.join(","));
  }
  return r.join(";");
}
var Im = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function Cm(e, r) {
  var t = e.lastIndexOf("!"), a = r.lastIndexOf("!");
  return t == -1 && a == -1 ? e + ":" + r : t > 0 && a > 0 && e.slice(0, t).toLowerCase() == r.slice(0, a).toLowerCase() ? e + ":" + r.slice(a + 1) : (console.error("Cannot hydrate range", e, r), e + ":" + r);
}
function Uo(e, r, t) {
  if (!e) return "SH33TJSERR0";
  if (t.biff > 8 && (!e.XTI || !e.XTI[r])) return e.SheetNames[r];
  if (!e.XTI) return "SH33TJSERR6";
  var a = e.XTI[r];
  if (t.biff < 8)
    return r > 1e4 && (r -= 65536), r < 0 && (r = -r), r == 0 ? "" : e.XTI[r - 1];
  if (!a) return "SH33TJSERR1";
  var n = "";
  if (t.biff > 8) switch (e[a[0]][0]) {
    case 357:
      return n = a[1] == -1 ? "#REF" : e.SheetNames[a[1]], a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
    case 358:
      return t.SID != null ? e.SheetNames[t.SID] : "SH33TJSSAME" + e[a[0]][0];
    case 355:
    default:
      return "SH33TJSSRC" + e[a[0]][0];
  }
  switch (e[a[0]][0][0]) {
    case 1025:
      return n = a[1] == -1 ? "#REF" : e.SheetNames[a[1]] || "SH33TJSERR3", a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
    case 14849:
      return e[a[0]].slice(1).map(function(i) {
        return i.Name;
      }).join(";;");
    default:
      return e[a[0]][0][3] ? (n = a[1] == -1 ? "#REF" : e[a[0]][0][3][a[1]] || "SH33TJSERR4", a[1] == a[2] ? n : n + ":" + e[a[0]][0][3][a[2]]) : "SH33TJSERR2";
  }
}
function Zf(e, r, t) {
  var a = Uo(e, r, t);
  return a == "#REF" ? a : dn(a, t);
}
function Hr(e, r, t, a, n) {
  var i = n && n.biff || 8, s = (
    /*range != null ? range :*/
    { s: { c: 0, r: 0 } }
  ), f = [], c, o, l, d = 0, u = 0, h, m = "";
  if (!e[0] || !e[0][0]) return "";
  for (var g = -1, p = "", v = 0, w = e[0].length; v < w; ++v) {
    var _ = e[0][v];
    switch (_[0]) {
      case "PtgUminus":
        f.push("-" + f.pop());
        break;
      case "PtgUplus":
        f.push("+" + f.pop());
        break;
      case "PtgPercent":
        f.push(f.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        if (c = f.pop(), o = f.pop(), g >= 0) {
          switch (e[0][g][1][0]) {
            case 0:
              p = Ke(" ", e[0][g][1][1]);
              break;
            case 1:
              p = Ke("\r", e[0][g][1][1]);
              break;
            default:
              if (p = "", n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][g][1][0]);
          }
          o = o + p, g = -1;
        }
        f.push(o + Im[_[0]] + c);
        break;
      case "PtgIsect":
        c = f.pop(), o = f.pop(), f.push(o + " " + c);
        break;
      case "PtgUnion":
        c = f.pop(), o = f.pop(), f.push(o + "," + c);
        break;
      case "PtgRange":
        c = f.pop(), o = f.pop(), f.push(Cm(o, c));
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        l = Qa(_[1][1], s, n), f.push(en(l, i));
        break;
      case "PtgRefN":
        l = t ? Qa(_[1][1], t, n) : _[1][1], f.push(en(l, i));
        break;
      case "PtgRef3d":
        d = /*::Number(*/
        _[1][1], l = Qa(_[1][2], s, n), m = Zf(a, d, n), f.push(m + "!" + en(l, i));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var T = _[1][0], b = _[1][1];
        T || (T = 0), T &= 127;
        var B = T == 0 ? [] : f.slice(-T);
        f.length -= T, b === "User" && (b = B.shift()), f.push(b + "(" + B.join(",") + ")");
        break;
      case "PtgBool":
        f.push(_[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        f.push(
          /*::String(*/
          _[1]
          /*::)*/
        );
        break;
      case "PtgNum":
        f.push(String(_[1]));
        break;
      case "PtgStr":
        f.push('"' + _[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        f.push(
          /*::String(*/
          _[1]
          /*::)*/
        );
        break;
      case "PtgAreaN":
        h = yf(_[1][1], t ? { s: t } : s, n), f.push(Oi(h, n));
        break;
      case "PtgArea":
        h = yf(_[1][1], s, n), f.push(Oi(h, n));
        break;
      case "PtgArea3d":
        d = /*::Number(*/
        _[1][1], h = _[1][2], m = Zf(a, d, n), f.push(m + "!" + Oi(h, n));
        break;
      case "PtgAttrSum":
        f.push("SUM(" + f.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        u = _[1][2];
        var y = (a.names || [])[u - 1] || (a[0] || [])[u], O = y ? y.Name : "SH33TJSNAME" + String(u);
        O && O.slice(0, 6) == "_xlfn." && !n.xlfn && (O = O.slice(6)), f.push(O);
        break;
      case "PtgNameX":
        var R = _[1][1];
        u = _[1][2];
        var P;
        if (n.biff <= 5)
          R < 0 && (R = -R), a[R] && (P = a[R][u]);
        else {
          var L = "";
          if (((a[R] || [])[0] || [])[0] == 14849 || (((a[R] || [])[0] || [])[0] == 1025 ? a[R][u] && a[R][u].itab > 0 && (L = a.SheetNames[a[R][u].itab - 1] + "!") : L = a.SheetNames[u - 1] + "!"), a[R] && a[R][u]) L += a[R][u].Name;
          else if (a[0] && a[0][u]) L += a[0][u].Name;
          else {
            var U = (Uo(a, R, n) || "").split(";;");
            U[u - 1] ? L = U[u - 1] : L += "SH33TJSERRX";
          }
          f.push(L);
          break;
        }
        P || (P = { Name: "SH33TJSERRY" }), f.push(P.Name);
        break;
      case "PtgParen":
        var K = "(", me = ")";
        if (g >= 0) {
          switch (p = "", e[0][g][1][0]) {
            case 2:
              K = Ke(" ", e[0][g][1][1]) + K;
              break;
            case 3:
              K = Ke("\r", e[0][g][1][1]) + K;
              break;
            case 4:
              me = Ke(" ", e[0][g][1][1]) + me;
              break;
            case 5:
              me = Ke("\r", e[0][g][1][1]) + me;
              break;
            default:
              if (n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][g][1][0]);
          }
          g = -1;
        }
        f.push(K + f.pop() + me);
        break;
      case "PtgRefErr":
        f.push("#REF!");
        break;
      case "PtgRefErr3d":
        f.push("#REF!");
        break;
      case "PtgExp":
        l = { c: _[1][1], r: _[1][0] };
        var de = { c: t.c, r: t.r };
        if (a.sharedf[He(l)]) {
          var ae = a.sharedf[He(l)];
          f.push(Hr(ae, s, de, a, n));
        } else {
          var he = !1;
          for (c = 0; c != a.arrayf.length; ++c)
            if (o = a.arrayf[c], !(l.c < o[0].s.c || l.c > o[0].e.c) && !(l.r < o[0].s.r || l.r > o[0].e.r)) {
              f.push(Hr(o[1], s, de, a, n)), he = !0;
              break;
            }
          he || f.push(
            /*::String(*/
            _[1]
            /*::)*/
          );
        }
        break;
      case "PtgArray":
        f.push("{" + Fm(
          /*::(*/
          _[1]
          /*:: :any)*/
        ) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        g = v;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        f.push("");
        break;
      case "PtgAreaErr":
        f.push("#REF!");
        break;
      case "PtgAreaErr3d":
        f.push("#REF!");
        break;
      case "PtgList":
        f.push("Table" + _[1].idx + "[#" + _[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(_));
      default:
        throw new Error("Unrecognized Formula Token: " + String(_));
    }
    var q = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (n.biff != 3 && g >= 0 && q.indexOf(e[0][v][0]) == -1) {
      _ = e[0][g];
      var ge = !0;
      switch (_[1][0]) {
        case 4:
          ge = !1;
        case 0:
          p = Ke(" ", _[1][1]);
          break;
        case 5:
          ge = !1;
        case 1:
          p = Ke("\r", _[1][1]);
          break;
        default:
          if (p = "", n.WTF) throw new Error("Unexpected PtgAttrSpaceType " + _[1][0]);
      }
      f.push((ge ? p : "") + f.pop() + (ge ? "" : p)), g = -1;
    }
  }
  if (f.length > 1 && n.WTF) throw new Error("bad formula stack");
  return f[0] == "TRUE" ? !0 : f[0] == "FALSE" ? !1 : f[0];
}
function bm(e, r, t) {
  var a = e.l + r, n = t.biff == 2 ? 1 : 2, i, s = e.read_shift(n);
  if (s == 65535) return [[], jr(e, r - 2)];
  var f = Rn(e, s, t);
  return r !== s + n && (i = Nn(e, r - s - n, f, t)), e.l = a, [f, i];
}
function Om(e, r, t) {
  var a = e.l + r, n = t.biff == 2 ? 1 : 2, i, s = e.read_shift(n);
  if (s == 65535) return [[], jr(e, r - 2)];
  var f = Rn(e, s, t);
  return r !== s + n && (i = Nn(e, r - s - n, f, t)), e.l = a, [f, i];
}
function Nm(e, r, t, a) {
  var n = e.l + r, i = Rn(e, a, t), s;
  return n !== e.l && (s = Nn(e, n - e.l, i, t)), [i, s];
}
function Rm(e, r, t) {
  var a = e.l + r, n, i = e.read_shift(2), s = Rn(e, i, t);
  return i == 65535 ? [[], jr(e, r - 2)] : (r !== i + 2 && (n = Nn(e, a - i - 2, s, t)), [s, n]);
}
function Dm(e) {
  var r;
  if (Ut(e, e.l + 6) !== 65535) return [Vr(e), "n"];
  switch (e[e.l]) {
    case 0:
      return e.l += 8, ["String", "s"];
    case 1:
      return r = e[e.l + 2] === 1, e.l += 8, [r, "b"];
    case 2:
      return r = e[e.l + 2], e.l += 8, [r, "e"];
    case 3:
      return e.l += 8, ["", "s"];
  }
  return [];
}
function Pm(e) {
  if (e == null) {
    var r = H(8);
    return r.write_shift(1, 3), r.write_shift(1, 0), r.write_shift(2, 0), r.write_shift(2, 0), r.write_shift(2, 65535), r;
  } else if (typeof e == "number") return ga(e);
  return ga(0);
}
function Bi(e, r, t) {
  var a = e.l + r, n = Et(e, 6, t), i = Dm(e), s = e.read_shift(1);
  t.biff != 2 && (e.read_shift(1), t.biff >= 5 && e.read_shift(4));
  var f = Om(e, a - e.l, t);
  return { cell: n, val: i[0], formula: f, shared: s >> 3 & 1, tt: i[1] };
}
function Lm(e, r, t, a, n) {
  var i = wa(r, t, n), s = Pm(e.v), f = H(6), c = 33;
  f.write_shift(2, c), f.write_shift(4, 0);
  for (var o = H(e.bf.length), l = 0; l < e.bf.length; ++l) o[l] = e.bf[l];
  var d = mr([i, s, f, o]);
  return d;
}
function yi(e, r, t) {
  var a = e.read_shift(4), n = Rn(e, a, t), i = e.read_shift(4), s = i > 0 ? Nn(e, i, n, t) : null;
  return [n, s];
}
var Mm = yi, Si = yi, Bm = yi, Um = yi;
function Jf(e) {
  if ((e | 0) == e && e < Math.pow(2, 16) && e >= 0) {
    var r = H(11);
    return r.write_shift(4, 3), r.write_shift(1, 30), r.write_shift(2, e), r.write_shift(4, 0), r;
  }
  var t = H(17);
  return t.write_shift(4, 11), t.write_shift(1, 31), t.write_shift(8, e), t.write_shift(4, 0), t;
}
function Wm(e) {
  var r = H(10);
  return r.write_shift(4, 2), r.write_shift(1, 28), r.write_shift(1, e), r.write_shift(4, 0), r;
}
function Hm(e) {
  var r = H(10);
  return r.write_shift(4, 2), r.write_shift(1, 29), r.write_shift(1, e ? 1 : 0), r.write_shift(4, 0), r;
}
function Xm(e) {
  var r = H(7);
  r.write_shift(4, 3 + 2 * e.length), r.write_shift(1, 23), r.write_shift(2, e.length);
  var t = H(2 * e.length);
  t.write_shift(2 * e.length, e, "utf16le");
  var a = H(4);
  return a.write_shift(4, 0), mr([r, t, a]);
}
function Vm(e) {
  var r = er(e), t = H(15);
  return t.write_shift(4, 7), t.write_shift(1, 36), t.write_shift(4, r.r), t.write_shift(2, r.c | (e.charAt(0) == "$" ? 0 : 1) << 14 | (e.match(/\$\d/) ? 0 : 1) << 15), t.write_shift(4, 0), t;
}
function Gm(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1);
  var n = er(e);
  a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var i = H(17);
  return i.write_shift(4, 9), i.write_shift(1, 58), i.write_shift(2, 2 + r.SheetNames.map(function(s) {
    return s.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, n.r), i.write_shift(2, n.c | (e.charAt(0) == "$" ? 0 : 1) << 14 | (e.match(/\$\d/) ? 0 : 1) << 15), i.write_shift(4, 0), i;
}
function zm(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1), a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var n = H(17);
  return n.write_shift(4, 9), n.write_shift(1, 60), n.write_shift(2, 2 + r.SheetNames.map(function(i) {
    return i.toLowerCase();
  }).indexOf(a.toLowerCase())), n.write_shift(4, 0), n.write_shift(2, 0), n.write_shift(4, 0), n;
}
function $m(e) {
  var r = e.split(":"), t = r[0], a = H(23);
  a.write_shift(4, 15), t = r[0];
  var n = er(t);
  return a.write_shift(1, 36), a.write_shift(4, n.r), a.write_shift(2, n.c | (t.charAt(0) == "$" ? 0 : 1) << 14 | (t.match(/\$\d/) ? 0 : 1) << 15), a.write_shift(4, 0), t = r[1], n = er(t), a.write_shift(1, 36), a.write_shift(4, n.r), a.write_shift(2, n.c | (t.charAt(0) == "$" ? 0 : 1) << 14 | (t.match(/\$\d/) ? 0 : 1) << 15), a.write_shift(4, 0), a.write_shift(1, 17), a.write_shift(4, 0), a;
}
function Km(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1), a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var n = e.split(":"), i = H(27);
  i.write_shift(4, 19);
  var s = n[0], f = er(s);
  return i.write_shift(1, 58), i.write_shift(2, 2 + r.SheetNames.map(function(c) {
    return c.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, f.r), i.write_shift(2, f.c | (s.charAt(0) == "$" ? 0 : 1) << 14 | (s.match(/\$\d/) ? 0 : 1) << 15), s = n[1], f = er(s), i.write_shift(1, 58), i.write_shift(2, 2 + r.SheetNames.map(function(c) {
    return c.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, f.r), i.write_shift(2, f.c | (s.charAt(0) == "$" ? 0 : 1) << 14 | (s.match(/\$\d/) ? 0 : 1) << 15), i.write_shift(1, 17), i.write_shift(4, 0), i;
}
function jm(e, r) {
  var t = e.lastIndexOf("!"), a = e.slice(0, t);
  e = e.slice(t + 1), a.charAt(0) == "'" && (a = a.slice(1, -1).replace(/''/g, "'"));
  var n = Er(e), i = H(23);
  return i.write_shift(4, 15), i.write_shift(1, 59), i.write_shift(2, 2 + r.SheetNames.map(function(s) {
    return s.toLowerCase();
  }).indexOf(a.toLowerCase())), i.write_shift(4, n.s.r), i.write_shift(4, n.e.r), i.write_shift(2, n.s.c), i.write_shift(2, n.e.c), i.write_shift(4, 0), i;
}
function Ym(e, r) {
  if (typeof e == "number") return Jf(e);
  if (typeof e == "boolean") return Hm(e);
  if (/^#(DIV\/0!|GETTING_DATA|N\/A|NAME\?|NULL!|NUM!|REF!|VALUE!)$/.test(e)) return Wm(+Nr[e]);
  if (e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return Vm(e);
  if (e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return $m(e);
  if (e.match(/^#REF!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return jm(e, r);
  if (e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return Gm(e, r);
  if (e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/)) return Km(e, r);
  if (/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!#REF!$/.test(e)) return zm(e, r);
  if (/^".*"$/.test(e)) return Xm(e);
  if (/^[+-]\d+$/.test(e)) return Jf(parseInt(e, 10));
  throw "Formula |" + e + "| not supported for XLSB";
}
var Zm = Ym, Jm = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
}, Wo = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
}, qm = {
  2: 1,
  /* ISNA */
  3: 1,
  /* ISERROR */
  10: 0,
  /* NA */
  15: 1,
  /* SIN */
  16: 1,
  /* COS */
  17: 1,
  /* TAN */
  18: 1,
  /* ATAN */
  19: 0,
  /* PI */
  20: 1,
  /* SQRT */
  21: 1,
  /* EXP */
  22: 1,
  /* LN */
  23: 1,
  /* LOG10 */
  24: 1,
  /* ABS */
  25: 1,
  /* INT */
  26: 1,
  /* SIGN */
  27: 2,
  /* ROUND */
  30: 2,
  /* REPT */
  31: 3,
  /* MID */
  32: 1,
  /* LEN */
  33: 1,
  /* VALUE */
  34: 0,
  /* TRUE */
  35: 0,
  /* FALSE */
  38: 1,
  /* NOT */
  39: 2,
  /* MOD */
  40: 3,
  /* DCOUNT */
  41: 3,
  /* DSUM */
  42: 3,
  /* DAVERAGE */
  43: 3,
  /* DMIN */
  44: 3,
  /* DMAX */
  45: 3,
  /* DSTDEV */
  47: 3,
  /* DVAR */
  48: 2,
  /* TEXT */
  53: 1,
  /* GOTO */
  61: 3,
  /* MIRR */
  63: 0,
  /* RAND */
  65: 3,
  /* DATE */
  66: 3,
  /* TIME */
  67: 1,
  /* DAY */
  68: 1,
  /* MONTH */
  69: 1,
  /* YEAR */
  70: 1,
  /* WEEKDAY */
  71: 1,
  /* HOUR */
  72: 1,
  /* MINUTE */
  73: 1,
  /* SECOND */
  74: 0,
  /* NOW */
  75: 1,
  /* AREAS */
  76: 1,
  /* ROWS */
  77: 1,
  /* COLUMNS */
  79: 2,
  /* ABSREF */
  80: 2,
  /* RELREF */
  83: 1,
  /* TRANSPOSE */
  85: 0,
  /* STEP */
  86: 1,
  /* TYPE */
  89: 0,
  /* CALLER */
  90: 1,
  /* DEREF */
  94: 0,
  /* ACTIVE.CELL */
  95: 0,
  /* SELECTION */
  97: 2,
  /* ATAN2 */
  98: 1,
  /* ASIN */
  99: 1,
  /* ACOS */
  101: 3,
  /* HLOOKUP */
  102: 3,
  /* VLOOKUP */
  105: 1,
  /* ISREF */
  106: 1,
  /* GET.FORMULA */
  108: 2,
  /* SET.VALUE */
  111: 1,
  /* CHAR */
  112: 1,
  /* LOWER */
  113: 1,
  /* UPPER */
  114: 1,
  /* PROPER */
  117: 2,
  /* EXACT */
  118: 1,
  /* TRIM */
  119: 4,
  /* REPLACE */
  121: 1,
  /* CODE */
  126: 1,
  /* ISERR */
  127: 1,
  /* ISTEXT */
  128: 1,
  /* ISNUMBER */
  129: 1,
  /* ISBLANK */
  130: 1,
  /* T */
  131: 1,
  /* N */
  133: 1,
  /* FCLOSE */
  134: 1,
  /* FSIZE */
  135: 1,
  /* FREADLN */
  136: 2,
  /* FREAD */
  137: 2,
  /* FWRITELN */
  138: 2,
  /* FWRITE */
  140: 1,
  /* DATEVALUE */
  141: 1,
  /* TIMEVALUE */
  142: 3,
  /* SLN */
  143: 4,
  /* SYD */
  144: 4,
  /* DDB */
  161: 1,
  /* DIALOG.BOX */
  162: 1,
  /* CLEAN */
  163: 1,
  /* MDETERM */
  164: 1,
  /* MINVERSE */
  165: 2,
  /* MMULT */
  172: 1,
  /* WHILE */
  175: 2,
  /* INITIATE */
  176: 2,
  /* REQUEST */
  177: 3,
  /* POKE */
  178: 2,
  /* EXECUTE */
  179: 1,
  /* TERMINATE */
  184: 1,
  /* FACT */
  186: 1,
  /* GET.WORKSPACE */
  189: 3,
  /* DPRODUCT */
  190: 1,
  /* ISNONTEXT */
  195: 3,
  /* DSTDEVP */
  196: 3,
  /* DVARP */
  197: 1,
  /* TRUNC */
  198: 1,
  /* ISLOGICAL */
  199: 3,
  /* DCOUNTA */
  201: 1,
  /* UNREGISTER */
  207: 4,
  /* REPLACEB */
  210: 3,
  /* MIDB */
  211: 1,
  /* LENB */
  212: 2,
  /* ROUNDUP */
  213: 2,
  /* ROUNDDOWN */
  214: 1,
  /* ASC */
  215: 1,
  /* DBCS */
  225: 0,
  /* END.IF */
  229: 1,
  /* SINH */
  230: 1,
  /* COSH */
  231: 1,
  /* TANH */
  232: 1,
  /* ASINH */
  233: 1,
  /* ACOSH */
  234: 1,
  /* ATANH */
  235: 3,
  /* DGET */
  244: 1,
  /* INFO */
  247: 4,
  /* DB */
  252: 2,
  /* FREQUENCY */
  257: 1,
  /* EVALUATE */
  261: 1,
  /* ERROR.TYPE */
  271: 1,
  /* GAMMALN */
  273: 4,
  /* BINOMDIST */
  274: 2,
  /* CHIDIST */
  275: 2,
  /* CHIINV */
  276: 2,
  /* COMBIN */
  277: 3,
  /* CONFIDENCE */
  278: 3,
  /* CRITBINOM */
  279: 1,
  /* EVEN */
  280: 3,
  /* EXPONDIST */
  281: 3,
  /* FDIST */
  282: 3,
  /* FINV */
  283: 1,
  /* FISHER */
  284: 1,
  /* FISHERINV */
  285: 2,
  /* FLOOR */
  286: 4,
  /* GAMMADIST */
  287: 3,
  /* GAMMAINV */
  288: 2,
  /* CEILING */
  289: 4,
  /* HYPGEOMDIST */
  290: 3,
  /* LOGNORMDIST */
  291: 3,
  /* LOGINV */
  292: 3,
  /* NEGBINOMDIST */
  293: 4,
  /* NORMDIST */
  294: 1,
  /* NORMSDIST */
  295: 3,
  /* NORMINV */
  296: 1,
  /* NORMSINV */
  297: 3,
  /* STANDARDIZE */
  298: 1,
  /* ODD */
  299: 2,
  /* PERMUT */
  300: 3,
  /* POISSON */
  301: 3,
  /* TDIST */
  302: 4,
  /* WEIBULL */
  303: 2,
  /* SUMXMY2 */
  304: 2,
  /* SUMX2MY2 */
  305: 2,
  /* SUMX2PY2 */
  306: 2,
  /* CHITEST */
  307: 2,
  /* CORREL */
  308: 2,
  /* COVAR */
  309: 3,
  /* FORECAST */
  310: 2,
  /* FTEST */
  311: 2,
  /* INTERCEPT */
  312: 2,
  /* PEARSON */
  313: 2,
  /* RSQ */
  314: 2,
  /* STEYX */
  315: 2,
  /* SLOPE */
  316: 4,
  /* TTEST */
  325: 2,
  /* LARGE */
  326: 2,
  /* SMALL */
  327: 2,
  /* QUARTILE */
  328: 2,
  /* PERCENTILE */
  331: 2,
  /* TRIMMEAN */
  332: 2,
  /* TINV */
  337: 2,
  /* POWER */
  342: 1,
  /* RADIANS */
  343: 1,
  /* DEGREES */
  346: 2,
  /* COUNTIF */
  347: 1,
  /* COUNTBLANK */
  350: 4,
  /* ISPMT */
  351: 3,
  /* DATEDIF */
  352: 1,
  /* DATESTRING */
  353: 2,
  /* NUMBERSTRING */
  360: 1,
  /* PHONETIC */
  368: 1,
  /* BAHTTEXT */
  369: 1,
  /* THAIDAYOFWEEK */
  370: 1,
  /* THAIDIGIT */
  371: 1,
  /* THAIMONTHOFYEAR */
  372: 1,
  /* THAINUMSOUND */
  373: 1,
  /* THAINUMSTRING */
  374: 1,
  /* THAISTRINGLENGTH */
  375: 1,
  /* ISTHAIDIGIT */
  376: 1,
  /* ROUNDBAHTDOWN */
  377: 1,
  /* ROUNDBAHTUP */
  378: 1,
  /* THAIYEAR */
  382: 3,
  /* CUBEMEMBERPROPERTY */
  385: 1,
  /* HEX2DEC */
  392: 1,
  /* OCT2DEC */
  393: 1,
  /* BIN2DEC */
  396: 2,
  /* IMSUB */
  397: 2,
  /* IMDIV */
  398: 2,
  /* IMPOWER */
  399: 1,
  /* IMABS */
  400: 1,
  /* IMSQRT */
  401: 1,
  /* IMLN */
  402: 1,
  /* IMLOG2 */
  403: 1,
  /* IMLOG10 */
  404: 1,
  /* IMSIN */
  405: 1,
  /* IMCOS */
  406: 1,
  /* IMEXP */
  407: 1,
  /* IMARGUMENT */
  408: 1,
  /* IMCONJUGATE */
  409: 1,
  /* IMAGINARY */
  410: 1,
  /* IMREAL */
  414: 4,
  /* SERIESSUM */
  415: 1,
  /* FACTDOUBLE */
  416: 1,
  /* SQRTPI */
  417: 2,
  /* QUOTIENT */
  420: 1,
  /* ISEVEN */
  421: 1,
  /* ISODD */
  422: 2,
  /* MROUND */
  424: 1,
  /* ERFC */
  425: 2,
  /* BESSELJ */
  426: 2,
  /* BESSELK */
  427: 2,
  /* BESSELY */
  428: 2,
  /* BESSELI */
  430: 3,
  /* XNPV */
  438: 3,
  /* TBILLEQ */
  439: 3,
  /* TBILLPRICE */
  440: 3,
  /* TBILLYIELD */
  443: 2,
  /* DOLLARDE */
  444: 2,
  /* DOLLARFR */
  445: 2,
  /* NOMINAL */
  446: 2,
  /* EFFECT */
  447: 6,
  /* CUMPRINC */
  448: 6,
  /* CUMIPMT */
  449: 2,
  /* EDATE */
  450: 2,
  /* EOMONTH */
  464: 2,
  /* RANDBETWEEN */
  468: 3,
  /* CONVERT */
  476: 2,
  /* FVSCHEDULE */
  479: 1,
  /* CUBESETCOUNT */
  480: 2,
  /* IFERROR */
  65535: 0
};
function qf(e) {
  return e.slice(0, 3) == "of:" && (e = e.slice(3)), e.charCodeAt(0) == 61 && (e = e.slice(1), e.charCodeAt(0) == 61 && (e = e.slice(1))), e = e.replace(/COM\.MICROSOFT\./g, ""), e = e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function(r, t) {
    return t.replace(/\./g, "");
  }), e = e.replace(/\$'([^']|'')+'/g, function(r) {
    return r.slice(1);
  }), e = e.replace(/\$([^\]\. #$]+)/g, function(r, t) {
    return t.match(/^([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])?(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})?$/) ? r : t;
  }), e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1"), e.replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function Qm(e) {
  var r = "of:=" + e.replace(Ei, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
  return r.replace(/;/g, "|").replace(/,/g, ";");
}
function Ui(e) {
  e = e.replace(/\$'([^']|'')+'/g, function(a) {
    return a.slice(1);
  }), e = e.replace(/\$([^\]\. #$]+)/g, function(a, n) {
    return n.match(/^([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])?(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})?$/) ? a : n;
  });
  var r = e.split(":"), t = r[0].split(".")[0];
  return [t, r[0].split(".")[1] + (r.length > 1 ? ":" + (r[1].split(".")[1] || r[1].split(".")[0]) : "")];
}
function Ho(e) {
  return e.replace(/!/, ".").replace(/:/, ":.");
}
var an = {}, Ra = {}, nn = typeof Map < "u";
function Us(e, r, t) {
  var a = 0, n = e.length;
  if (t) {
    if (nn ? t.has(r) : Object.prototype.hasOwnProperty.call(t, r)) {
      for (var i = nn ? t.get(r) : t[r]; a < i.length; ++a)
        if (e[i[a]].t === r)
          return e.Count++, i[a];
    }
  } else for (; a < n; ++a)
    if (e[a].t === r)
      return e.Count++, a;
  return e[n] = { t: r }, e.Count++, e.Unique++, t && (nn ? (t.has(r) || t.set(r, []), t.get(r).push(n)) : (Object.prototype.hasOwnProperty.call(t, r) || (t[r] = []), t[r].push(n))), n;
}
function Dn(e, r) {
  var t = { min: e + 1, max: e + 1 }, a = -1;
  return r.MDW && (Xr = r.MDW), r.width != null ? t.customWidth = 1 : r.wpx != null ? a = gn(r.wpx) : r.wch != null && (a = r.wch), a > -1 ? (t.width = oi(a), t.customWidth = 1) : r.width != null && (t.width = r.width), r.hidden && (t.hidden = !0), r.level != null && (t.outlineLevel = t.level = r.level), t;
}
function ua(e, r) {
  if (e) {
    var t = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    r == "xlml" && (t = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = t[0]), e.right == null && (e.right = t[1]), e.top == null && (e.top = t[2]), e.bottom == null && (e.bottom = t[3]), e.header == null && (e.header = t[4]), e.footer == null && (e.footer = t[5]);
  }
}
function Nt(e, r, t) {
  var a = t.revssf[r.z != null ? r.z : "General"], n = 60, i = e.length;
  if (a == null && t.ssf) {
    for (; n < 392; ++n) if (t.ssf[n] == null) {
      jt(r.z, n), t.ssf[n] = r.z, t.revssf[r.z] = a = n;
      break;
    }
  }
  for (n = 0; n != i; ++n) if (e[n].numFmtId === a) return n;
  return e[i] = {
    numFmtId: a,
    fontId: 0,
    fillId: 0,
    borderId: 0,
    xfId: 0,
    applyNumberFormat: 1
  }, i;
}
function Xo(e, r, t, a, n, i, s) {
  try {
    a.cellNF && (e.z = Fe[r]);
  } catch (c) {
    if (a.WTF) throw c;
  }
  if (!(e.t === "z" && !a.cellStyles)) {
    if (e.t === "d" && typeof e.v == "string" && (e.v = fr(e.v)), (!a || a.cellText !== !1) && e.t !== "z") try {
      if (Fe[r] == null && jt(S1[r] || "General", r), e.t === "e") e.w = e.w || Ir[e.v];
      else if (r === 0)
        if (e.t === "n")
          (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = un(e.v);
        else if (e.t === "d") {
          var f = or(e.v, !!s);
          (f | 0) === f ? e.w = f.toString(10) : e.w = un(f);
        } else {
          if (e.v === void 0) return "";
          e.w = da(e.v, Ra);
        }
      else e.t === "d" ? e.w = at(r, or(e.v, !!s), Ra) : e.w = at(r, e.v, Ra);
    } catch (c) {
      if (a.WTF) throw c;
    }
    if (a.cellStyles && t != null)
      try {
        e.s = i.Fills[t], e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && (e.s.fgColor.rgb = ci(n.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0), a.WTF && (e.s.fgColor.raw_rgb = n.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && (e.s.bgColor.rgb = ci(n.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0), a.WTF && (e.s.bgColor.raw_rgb = n.themeElements.clrScheme[e.s.bgColor.theme].rgb));
      } catch (c) {
        if (a.WTF && i.Fills) throw c;
      }
  }
}
function ep(e, r, t) {
  if (e && e["!ref"]) {
    var a = Ge(e["!ref"]);
    if (a.e.c < a.s.c || a.e.r < a.s.r) throw new Error("Bad range (" + t + "): " + e["!ref"]);
  }
}
function rp(e, r) {
  var t = Ge(r);
  t.s.r <= t.e.r && t.s.c <= t.e.c && t.s.r >= 0 && t.s.c >= 0 && (e["!ref"] = Me(t));
}
var tp = /<(?:\w+:)?mergeCell ref=["'][A-Z0-9:]+['"]\s*[\/]?>/g, ap = /<(?:\w+:)?hyperlink [^<>]*>/mg, np = /"(\w*:\w*)"/, ip = /<(?:\w+:)?col\b[^<>]*[\/]?>/g, sp = /<(?:\w+:)?autoFilter[^>]*/g, fp = /<(?:\w+:)?pageMargins[^<>]*\/>/g, Vo = /<(?:\w+:)?sheetPr\b[^<>]*?\/>/;
function cp(e, r, t, a, n, i, s) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var f = {};
  r.dense && (f["!data"] = []);
  var c = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, o = "", l = "", d = Or(e, "sheetData");
  d ? (o = e.slice(0, d.index), l = e.slice(d.index + d[0].length)) : o = l = e;
  var u = o.match(Vo);
  u ? Ws(u[0], f, n, t) : (u = Or(o, "sheetPr")) && lp(u[0], u[1] || "", f, n, t);
  var h = (o.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (h > 0) {
    var m = o.slice(h, h + 50).match(np);
    m && !(r && r.nodim) && rp(f, m[1]);
  }
  var g = Or(o, "sheetViews");
  g && g[1] && yp(g[1], n);
  var p = [];
  if (r.cellStyles) {
    var v = o.match(ip);
    v && _p(p, v);
  }
  d && Ap(d[1], f, r, c, i, s, n);
  var w = l.match(sp);
  w && (f["!autofilter"] = kp(w[0]));
  var _ = [], T = l.match(tp);
  if (T) for (h = 0; h != T.length; ++h)
    _[h] = Ge(T[h].slice(T[h].indexOf("=") + 2));
  var b = l.match(ap);
  b && mp(f, b, a);
  var B = l.match(fp);
  B && (f["!margins"] = pp(ke(B[0])));
  var y;
  if ((y = l.match(/legacyDrawing r:id="(.*?)"/)) && (f["!legrel"] = y[1]), r && r.nodim && (c.s.c = c.s.r = 0), !f["!ref"] && c.e.c >= c.s.c && c.e.r >= c.s.r && (f["!ref"] = Me(c)), r.sheetRows > 0 && f["!ref"]) {
    var O = Ge(f["!ref"]);
    r.sheetRows <= +O.e.r && (O.e.r = r.sheetRows - 1, O.e.r > c.e.r && (O.e.r = c.e.r), O.e.r < O.s.r && (O.s.r = O.e.r), O.e.c > c.e.c && (O.e.c = c.e.c), O.e.c < O.s.c && (O.s.c = O.e.c), f["!fullref"] = f["!ref"], f["!ref"] = Me(O));
  }
  return p.length > 0 && (f["!cols"] = p), _.length > 0 && (f["!merges"] = _), a["!id"][f["!legrel"]] && (f["!legdrawel"] = a["!id"][f["!legrel"]]), f;
}
function op(e) {
  if (e.length === 0) return "";
  for (var r = '<mergeCells count="' + e.length + '">', t = 0; t != e.length; ++t) r += '<mergeCell ref="' + Me(e[t]) + '"/>';
  return r + "</mergeCells>";
}
function Ws(e, r, t, a) {
  var n = ke(e);
  t.Sheets[a] || (t.Sheets[a] = {}), n.codeName && (t.Sheets[a].CodeName = ze(Qe(n.codeName)));
}
function lp(e, r, t, a, n) {
  Ws(e.slice(0, e.indexOf(">")), t, a, n);
}
function up(e, r, t, a, n) {
  var i = !1, s = {}, f = null;
  if (a.bookType !== "xlsx" && r.vbaraw) {
    var c = r.SheetNames[t];
    try {
      r.Workbook && (c = r.Workbook.Sheets[t].CodeName || c);
    } catch {
    }
    i = !0, s.codeName = Ct(Le(c));
  }
  if (e && e["!outline"]) {
    var o = { summaryBelow: 1, summaryRight: 1 };
    e["!outline"].above && (o.summaryBelow = 0), e["!outline"].left && (o.summaryRight = 0), f = (f || "") + te("outlinePr", null, o);
  }
  !i && !f || (n[n.length] = te("sheetPr", f, s));
}
var hp = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"], dp = [
  "formatColumns",
  "formatRows",
  "formatCells",
  "insertColumns",
  "insertRows",
  "insertHyperlinks",
  "deleteColumns",
  "deleteRows",
  "sort",
  "autoFilter",
  "pivotTables"
];
function vp(e) {
  var r = { sheet: 1 };
  return hp.forEach(function(t) {
    e[t] != null && e[t] && (r[t] = "1");
  }), dp.forEach(function(t) {
    e[t] != null && !e[t] && (r[t] = "0");
  }), e.password && (r.password = Ps(e.password).toString(16).toUpperCase()), te("sheetProtection", null, r);
}
function mp(e, r, t) {
  for (var a = e["!data"] != null, n = 0; n != r.length; ++n) {
    var i = ke(Qe(r[n]), !0);
    if (!i.ref) return;
    var s = ((t || {})["!id"] || [])[i.id];
    s ? (i.Target = s.Target, i.location && (i.Target += "#" + ze(i.location))) : (i.Target = "#" + ze(i.location), s = { Target: i.Target, TargetMode: "Internal" }), i.Rel = s, i.tooltip && (i.Tooltip = i.tooltip, delete i.tooltip);
    for (var f = Ge(i.ref), c = f.s.r; c <= f.e.r; ++c) for (var o = f.s.c; o <= f.e.c; ++o) {
      var l = Ne(o) + Xe(c);
      a ? (e["!data"][c] || (e["!data"][c] = []), e["!data"][c][o] || (e["!data"][c][o] = { t: "z", v: void 0 }), e["!data"][c][o].l = i) : (e[l] || (e[l] = { t: "z", v: void 0 }), e[l].l = i);
    }
  }
}
function pp(e) {
  var r = {};
  return ["left", "right", "top", "bottom", "header", "footer"].forEach(function(t) {
    e[t] && (r[t] = parseFloat(e[t]));
  }), r;
}
function gp(e) {
  return ua(e), te("pageMargins", null, e);
}
function _p(e, r) {
  for (var t = !1, a = 0; a != r.length; ++a) {
    var n = ke(r[a], !0);
    n.hidden && (n.hidden = Je(n.hidden));
    var i = parseInt(n.min, 10) - 1, s = parseInt(n.max, 10) - 1;
    for (n.outlineLevel && (n.level = +n.outlineLevel || 0), delete n.min, delete n.max, n.width = +n.width, !t && n.width && (t = !0, Ls(n.width)), Gt(n); i <= s; ) e[i++] = je(n);
  }
}
function wp(e, r) {
  for (var t = ["<cols>"], a, n = 0; n != r.length; ++n)
    (a = r[n]) && (t[t.length] = te("col", null, Dn(n, a)));
  return t[t.length] = "</cols>", t.join("");
}
function kp(e) {
  var r = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return r;
}
function Tp(e, r, t, a) {
  var n = typeof e.ref == "string" ? e.ref : Me(e.ref);
  t.Workbook || (t.Workbook = { Sheets: [] }), t.Workbook.Names || (t.Workbook.Names = []);
  var i = t.Workbook.Names, s = Er(n);
  s.s.r == s.e.r && (s.e.r = Er(r["!ref"]).e.r, n = Me(s));
  for (var f = 0; f < i.length; ++f) {
    var c = i[f];
    if (c.Name == "_xlnm._FilterDatabase" && c.Sheet == a) {
      c.Ref = dn(t.SheetNames[a]) + "!" + La(n);
      break;
    }
  }
  return f == i.length && i.push({ Name: "_xlnm._FilterDatabase", Sheet: a, Ref: "'" + t.SheetNames[a] + "'!" + n }), te("autoFilter", null, { ref: n });
}
var Ep = /<(?:\w:)?sheetView(?:[^<>a-z][^<>]*)?\/?>/g;
function yp(e, r) {
  r.Views || (r.Views = [{}]), (e.match(Ep) || []).forEach(function(t, a) {
    var n = ke(t);
    r.Views[a] || (r.Views[a] = {}), +n.zoomScale && (r.Views[a].zoom = +n.zoomScale), n.rightToLeft && Je(n.rightToLeft) && (r.Views[a].RTL = !0);
  });
}
function Sp(e, r, t, a) {
  var n = { workbookViewId: "0" };
  return (((a || {}).Workbook || {}).Views || [])[0] && (n.rightToLeft = a.Workbook.Views[0].RTL ? "1" : "0"), te("sheetViews", te("sheetView", null, n), {});
}
function xp(e, r, t, a, n, i, s) {
  if (e.c && t["!comments"].push([r, e.c]), (e.v === void 0 || e.t === "z" && !(a || {}).sheetStubs) && typeof e.f != "string" && typeof e.z > "u") return "";
  var f = "", c = e.t, o = e.v;
  if (e.t !== "z") switch (e.t) {
    case "b":
      f = e.v ? "1" : "0";
      break;
    case "n":
      isNaN(e.v) ? (e.t = "e", f = Ir[e.v = 36]) : isFinite(e.v) ? f = "" + e.v : (e.t = "e", f = Ir[e.v = 7]);
      break;
    case "e":
      f = Ir[e.v];
      break;
    case "d":
      if (a && a.cellDates) {
        var l = fr(e.v, s);
        f = l.toISOString(), l.getUTCFullYear() < 1900 && (f = f.slice(f.indexOf("T") + 1).replace("Z", ""));
      } else
        e = je(e), e.t = "n", f = "" + (e.v = or(fr(e.v, s), s));
      typeof e.z > "u" && (e.z = Fe[14]);
      break;
    default:
      f = e.v;
      break;
  }
  var d = e.t == "z" || e.v == null ? "" : Rr("v", Le(f)), u = { r }, h = Nt(a.cellXfs, e, a);
  switch (h !== 0 && (u.s = h), e.t) {
    case "n":
      break;
    case "d":
      u.t = "d";
      break;
    case "b":
      u.t = "b";
      break;
    case "e":
      u.t = "e";
      break;
    case "z":
      break;
    default:
      if (e.v == null) {
        delete e.t;
        break;
      }
      if (e.v.length > 32767) throw new Error("Text length must not exceed 32767 characters");
      if (a && a.bookSST) {
        d = Rr("v", "" + Us(a.Strings, e.v, a.revStrings)), u.t = "s";
        break;
      } else u.t = "str";
      break;
  }
  if (e.t != c && (e.t = c, e.v = o), typeof e.f == "string" && e.f) {
    var m = e.F && e.F.slice(0, r.length) == r ? { t: "array", ref: e.F } : null;
    d = te("f", Le(e.f), m) + (e.v != null ? d : "");
  }
  return e.l && (e.l.display = Le(f), t["!links"].push([r, e.l])), e.D && (u.cm = 1), te("c", d, u);
}
var Ap = /* @__PURE__ */ function() {
  var e = /<(?:\w+:)?c[ \/>]/, r = /<\/(?:\w+:)?row>/, t = /r=["']([^"']*)["']/, a = /ref=["']([^"']*)["']/;
  return function(i, s, f, c, o, l, d) {
    for (var u = 0, h = "", m = [], g = [], p = 0, v = 0, w = 0, _ = "", T, b, B = 0, y = 0, O, R, P = 0, L = 0, U = Array.isArray(l.CellXf), K, me = [], de = [], ae = s["!data"] != null, he = [], q = {}, ge = !1, z = !!f.sheetStubs, be = !!((d || {}).WBProps || {}).date1904, oe = i.split(r), fe = 0, Q = oe.length; fe != Q; ++fe) {
      h = oe[fe].trim();
      var _e = h.length;
      if (_e !== 0) {
        var Ee = 0;
        e: for (u = 0; u < _e; ++u) switch (
          /*x.charCodeAt(ri)*/
          h[u]
        ) {
          case ">":
            if (
              /*x.charCodeAt(ri-1) != 47*/
              h[u - 1] != "/"
            ) {
              ++u;
              break e;
            }
            if (f && f.cellStyles) {
              if (b = ke(h.slice(Ee, u), !0), B = b.r != null ? parseInt(b.r, 10) : B + 1, y = -1, f.sheetRows && f.sheetRows < B) continue;
              q = {}, ge = !1, b.ht && (ge = !0, q.hpt = parseFloat(b.ht), q.hpx = Wa(q.hpt)), b.hidden && Je(b.hidden) && (ge = !0, q.hidden = !0), b.outlineLevel != null && (ge = !0, q.level = +b.outlineLevel), ge && (he[B - 1] = q);
            }
            break;
          case "<":
            Ee = u;
            break;
        }
        if (Ee >= u) break;
        if (b = ke(h.slice(Ee, u), !0), B = b.r != null ? parseInt(b.r, 10) : B + 1, y = -1, !(f.sheetRows && f.sheetRows < B)) {
          f.nodim || (c.s.r > B - 1 && (c.s.r = B - 1), c.e.r < B - 1 && (c.e.r = B - 1)), f && f.cellStyles && (q = {}, ge = !1, b.ht && (ge = !0, q.hpt = parseFloat(b.ht), q.hpx = Wa(q.hpt)), b.hidden && Je(b.hidden) && (ge = !0, q.hidden = !0), b.outlineLevel != null && (ge = !0, q.level = +b.outlineLevel), ge && (he[B - 1] = q)), m = h.slice(u).split(e);
          for (var Se = 0; Se != m.length && m[Se].trim().charAt(0) == "<"; ++Se) ;
          for (m = m.slice(Se), u = 0; u != m.length; ++u)
            if (h = m[u].trim(), h.length !== 0) {
              if (g = h.match(t), p = u, v = 0, w = 0, h = "<c " + (h.slice(0, 1) == "<" ? ">" : "") + h, g != null && g.length === 2) {
                for (p = 0, _ = g[1], v = 0; v != _.length && !((w = _.charCodeAt(v) - 64) < 1 || w > 26); ++v)
                  p = 26 * p + w;
                --p, y = p;
              } else ++y;
              for (v = 0; v != h.length && h.charCodeAt(v) !== 62; ++v) ;
              if (++v, b = ke(h.slice(0, v), !0), b.r || (b.r = He({ r: B - 1, c: y })), _ = h.slice(v), T = { t: "" }, (g = Or(_, "v")) != null && /*::cref != null && */
              g[1] !== "" && (T.v = ze(g[1])), f.cellFormula) {
                if ((g = Or(_, "f")) != null) {
                  if (g[1] == "")
                    /*::cref != null && cref[0] != null && */
                    g[0].indexOf('t="shared"') > -1 && (R = ke(g[0]), de[R.si] && (T.f = $f(de[R.si][1], de[R.si][2], b.r)));
                  else if (T.f = ze(Qe(g[1]), !0), f.xlfn || (T.f = Kf(T.f)), /*::cref != null && cref[0] != null && */
                  g[0].indexOf('t="array"') > -1)
                    T.F = (_.match(a) || [])[1], T.F.indexOf(":") > -1 && me.push([Ge(T.F), T.F]);
                  else if (
                    /*::cref != null && cref[0] != null && */
                    g[0].indexOf('t="shared"') > -1
                  ) {
                    R = ke(g[0]);
                    var A = ze(Qe(g[1]));
                    f.xlfn || (A = Kf(A)), de[parseInt(R.si, 10)] = [R, A, b.r];
                  }
                } else (g = _.match(/<f[^<>]*\/>/)) && (R = ke(g[0]), de[R.si] && (T.f = $f(de[R.si][1], de[R.si][2], b.r)));
                var M = er(b.r);
                for (v = 0; v < me.length; ++v)
                  M.r >= me[v][0].s.r && M.r <= me[v][0].e.r && M.c >= me[v][0].s.c && M.c <= me[v][0].e.c && (T.F = me[v][1]);
              }
              if (b.t == null && T.v === void 0)
                if (T.f || T.F)
                  T.v = 0, T.t = "n";
                else if (z) T.t = "z";
                else continue;
              else T.t = b.t || "n";
              switch (c.s.c > y && (c.s.c = y), c.e.c < y && (c.e.c = y), T.t) {
                case "n":
                  if (T.v == "" || T.v == null) {
                    if (!z) continue;
                    T.t = "z";
                  } else T.v = parseFloat(T.v);
                  break;
                case "s":
                  if (typeof T.v > "u") {
                    if (!z) continue;
                    T.t = "z";
                  } else
                    O = an[parseInt(T.v, 10)], T.v = O.t, T.r = O.r, f.cellHTML && (T.h = O.h);
                  break;
                case "str":
                  T.t = "s", T.v = T.v != null ? ze(Qe(T.v), !0) : "", f.cellHTML && (T.h = Ja(T.v));
                  break;
                case "inlineStr":
                  g = Or(_, "is"), T.t = "s", g != null && (O = Ds(g[1])) ? (T.v = O.t, f.cellHTML && (T.h = O.h)) : T.v = "";
                  break;
                case "b":
                  T.v = Je(T.v);
                  break;
                case "d":
                  f.cellDates ? T.v = fr(T.v, be) : (T.v = or(fr(T.v, be), be), T.t = "n");
                  break;
                case "e":
                  (!f || f.cellText !== !1) && (T.w = T.v), T.v = Nr[T.v];
                  break;
              }
              if (P = L = 0, K = null, U && b.s !== void 0 && (K = l.CellXf[b.s], K != null && (K.numFmtId != null && (P = K.numFmtId), f.cellStyles && K.fillId != null && (L = K.fillId))), Xo(T, P, L, f, o, l, be), f.cellDates && U && T.t == "n" && ft(Fe[P]) && (T.v = Ht(T.v + (be ? 1462 : 0)), T.t = typeof T.v == "number" ? "n" : "d"), b.cm && f.xlmeta) {
                var D = (f.xlmeta.Cell || [])[+b.cm - 1];
                D && D.type == "XLDAPR" && (T.D = !0);
              }
              var N;
              f.nodim && (N = er(b.r), c.s.r > N.r && (c.s.r = N.r), c.e.r < N.r && (c.e.r = N.r)), ae ? (N = er(b.r), s["!data"][N.r] || (s["!data"][N.r] = []), s["!data"][N.r][N.c] = T) : s[b.r] = T;
            }
        }
      }
    }
    he.length > 0 && (s["!rows"] = he);
  };
}();
function Fp(e, r, t, a) {
  var n = [], i = [], s = Ge(e["!ref"]), f = "", c, o = "", l = [], d = 0, u = 0, h = e["!rows"], m = e["!data"] != null, g = m ? e["!data"] : [], p = { r: o }, v, w = -1, _ = (((a || {}).Workbook || {}).WBProps || {}).date1904;
  for (u = s.s.c; u <= s.e.c; ++u) l[u] = Ne(u);
  for (d = s.s.r; d <= s.e.r; ++d) {
    i = [], o = Xe(d);
    var T = m ? g[d] : [];
    for (u = s.s.c; u <= s.e.c; ++u) {
      c = l[u] + o;
      var b = m ? T[u] : e[c];
      b !== void 0 && (f = xp(b, c, e, r, t, a, _)) != null && i.push(f);
    }
    (i.length > 0 || h && h[d]) && (p = { r: o }, h && h[d] && (v = h[d], v.hidden && (p.hidden = 1), w = -1, v.hpx ? w = _n(v.hpx) : v.hpt && (w = v.hpt), w > -1 && (p.ht = w, p.customHeight = 1), v.level && (p.outlineLevel = v.level)), n[n.length] = te("row", i.join(""), p));
  }
  if (h) for (; d < h.length; ++d)
    h && h[d] && (p = { r: d + 1 }, v = h[d], v.hidden && (p.hidden = 1), w = -1, v.hpx ? w = _n(v.hpx) : v.hpt && (w = v.hpt), w > -1 && (p.ht = w, p.customHeight = 1), v.level && (p.outlineLevel = v.level), n[n.length] = te("row", "", p));
  return n.join("");
}
function Ip(e, r, t, a) {
  var n = [hr, te("worksheet", null, {
    xmlns: Ta[0],
    "xmlns:r": Ar.r
  })], i = t.SheetNames[e], s = 0, f = "", c = t.Sheets[i];
  c == null && (c = {});
  var o = c["!ref"] || "A1", l = Ge(o);
  if (l.e.c > 16383 || l.e.r > 1048575) {
    if (r.WTF) throw new Error("Range " + o + " exceeds format limit A1:XFD1048576");
    l.e.c = Math.min(l.e.c, 16383), l.e.r = Math.min(l.e.c, 1048575), o = Me(l);
  }
  a || (a = {}), c["!comments"] = [];
  var d = [];
  up(c, t, e, r, n), n[n.length] = te("dimension", null, { ref: o }), n[n.length] = Sp(c, r, e, t), r.sheetFormat && (n[n.length] = te("sheetFormatPr", null, {
    defaultRowHeight: r.sheetFormat.defaultRowHeight || "16",
    baseColWidth: r.sheetFormat.baseColWidth || "10",
    outlineLevelRow: r.sheetFormat.outlineLevelRow || "7"
  })), c["!cols"] != null && c["!cols"].length > 0 && (n[n.length] = wp(c, c["!cols"])), n[s = n.length] = "<sheetData/>", c["!links"] = [], c["!ref"] != null && (f = Fp(c, r, e, t), f.length > 0 && (n[n.length] = f)), n.length > s + 1 && (n[n.length] = "</sheetData>", n[s] = n[s].replace("/>", ">")), c["!protect"] && (n[n.length] = vp(c["!protect"])), c["!autofilter"] != null && (n[n.length] = Tp(c["!autofilter"], c, t, e)), c["!merges"] != null && c["!merges"].length > 0 && (n[n.length] = op(c["!merges"]));
  var u = -1, h, m = -1;
  return (
    /*::(*/
    c["!links"].length > 0 && (n[n.length] = "<hyperlinks>", c["!links"].forEach(function(g) {
      g[1].Target && (h = { ref: g[0] }, g[1].Target.charAt(0) != "#" && (m = Ze(a, -1, Le(g[1].Target).replace(/#[\s\S]*$/, ""), We.HLINK), h["r:id"] = "rId" + m), (u = g[1].Target.indexOf("#")) > -1 && (h.location = Le(g[1].Target.slice(u + 1))), g[1].Tooltip && (h.tooltip = Le(g[1].Tooltip)), h.display = g[1].display, n[n.length] = te("hyperlink", null, h));
    }), n[n.length] = "</hyperlinks>"), delete c["!links"], c["!margins"] != null && (n[n.length] = gp(c["!margins"])), (!r || r.ignoreEC || r.ignoreEC == null) && (n[n.length] = Rr("ignoredErrors", te("ignoredError", null, { numberStoredAsText: 1, sqref: o }))), d.length > 0 && (m = Ze(a, -1, "../drawings/drawing" + (e + 1) + ".xml", We.DRAW), n[n.length] = te("drawing", null, { "r:id": "rId" + m }), c["!drawing"] = d), c["!comments"].length > 0 && (m = Ze(a, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", We.VML), n[n.length] = te("legacyDrawing", null, { "r:id": "rId" + m }), c["!legacy"] = m), n.length > 1 && (n[n.length] = "</worksheet>", n[1] = n[1].replace("/>", ">")), n.join("")
  );
}
function Cp(e, r) {
  var t = {}, a = e.l + r;
  t.r = e.read_shift(4), e.l += 4;
  var n = e.read_shift(2);
  e.l += 1;
  var i = e.read_shift(1);
  return e.l = a, i & 7 && (t.level = i & 7), i & 16 && (t.hidden = !0), i & 32 && (t.hpt = n / 20), t;
}
function bp(e, r, t) {
  var a = H(145), n = (t["!rows"] || [])[e] || {};
  a.write_shift(4, e), a.write_shift(4, 0);
  var i = 320;
  n.hpx ? i = _n(n.hpx) * 20 : n.hpt && (i = n.hpt * 20), a.write_shift(2, i), a.write_shift(1, 0);
  var s = 0;
  n.level && (s |= n.level), n.hidden && (s |= 16), (n.hpx || n.hpt) && (s |= 32), a.write_shift(1, s), a.write_shift(1, 0);
  var f = 0, c = a.l;
  a.l += 4;
  for (var o = { r: e, c: 0 }, l = t["!data"] != null, d = 0; d < 16; ++d)
    if (!(r.s.c > d + 1 << 10 || r.e.c < d << 10)) {
      for (var u = -1, h = -1, m = d << 10; m < d + 1 << 10; ++m) {
        o.c = m;
        var g = l ? (t["!data"][o.r] || [])[o.c] : t[He(o)];
        g && (u < 0 && (u = m), h = m);
      }
      u < 0 || (++f, a.write_shift(4, u), a.write_shift(4, h));
    }
  var p = a.l;
  return a.l = c, a.write_shift(4, f), a.l = p, a.length > a.l ? a.slice(0, a.l) : a;
}
function Op(e, r, t, a) {
  var n = bp(a, t, r);
  (n.length > 17 || (r["!rows"] || [])[a]) && Z(e, 0, n);
}
var Np = xa, Rp = Ga;
function Dp() {
}
function Pp(e, r) {
  var t = {}, a = e[e.l];
  return ++e.l, t.above = !(a & 64), t.left = !(a & 128), e.l += 18, t.name = xu(e), t;
}
function Lp(e, r, t) {
  t == null && (t = H(84 + 4 * e.length));
  var a = 192;
  r && (r.above && (a &= -65), r.left && (a &= -129)), t.write_shift(1, a);
  for (var n = 1; n < 3; ++n) t.write_shift(1, 0);
  return ii({ auto: 1 }, t), t.write_shift(-4, -1), t.write_shift(-4, -1), Vc(e, t), t.slice(0, t.l);
}
function Mp(e) {
  var r = mt(e);
  return [r];
}
function Bp(e, r, t) {
  return t == null && (t = H(8)), Ea(r, t);
}
function Up(e) {
  var r = ya(e);
  return [r];
}
function Wp(e, r, t) {
  return t == null && (t = H(4)), Sa(r, t);
}
function Hp(e) {
  var r = mt(e), t = e.read_shift(1);
  return [r, t, "b"];
}
function Xp(e, r, t) {
  return t == null && (t = H(9)), Ea(r, t), t.write_shift(1, e.v ? 1 : 0), t;
}
function Vp(e) {
  var r = ya(e), t = e.read_shift(1);
  return [r, t, "b"];
}
function Gp(e, r, t) {
  return t == null && (t = H(5)), Sa(r, t), t.write_shift(1, e.v ? 1 : 0), t;
}
function zp(e) {
  var r = mt(e), t = e.read_shift(1);
  return [r, t, "e"];
}
function Wi(e, r, t) {
  return t == null && (t = H(9)), Ea(r, t), t.write_shift(1, e.v), t;
}
function $p(e) {
  var r = ya(e), t = e.read_shift(1);
  return [r, t, "e"];
}
function Hi(e, r, t) {
  return t == null && (t = H(8)), Sa(r, t), t.write_shift(1, e.v), t.write_shift(2, 0), t.write_shift(1, 0), t;
}
function Kp(e) {
  var r = mt(e), t = e.read_shift(4);
  return [r, t, "s"];
}
function jp(e, r, t) {
  return t == null && (t = H(12)), Ea(r, t), t.write_shift(4, r.v), t;
}
function Yp(e) {
  var r = ya(e), t = e.read_shift(4);
  return [r, t, "s"];
}
function Zp(e, r, t) {
  return t == null && (t = H(8)), Sa(r, t), t.write_shift(4, r.v), t;
}
function Jp(e) {
  var r = mt(e), t = Vr(e);
  return [r, t, "n"];
}
function qp(e, r, t) {
  return t == null && (t = H(16)), Ea(r, t), ga(e.v, t), t;
}
function Go(e) {
  var r = ya(e), t = Vr(e);
  return [r, t, "n"];
}
function Qp(e, r, t) {
  return t == null && (t = H(12)), Sa(r, t), ga(e.v, t), t;
}
function eg(e) {
  var r = mt(e), t = ki(e);
  return [r, t, "n"];
}
function rg(e, r, t) {
  return t == null && (t = H(12)), Ea(r, t), Gc(e.v, t), t;
}
function tg(e) {
  var r = ya(e), t = ki(e);
  return [r, t, "n"];
}
function ag(e, r, t) {
  return t == null && (t = H(8)), Sa(r, t), Gc(e.v, t), t;
}
function ng(e) {
  var r = mt(e), t = Fs(e);
  return [r, t, "is"];
}
function ig(e) {
  var r = mt(e), t = Kr(e);
  return [r, t, "str"];
}
function sg(e, r, t) {
  var a = e.v == null ? "" : String(e.v);
  return t == null && (t = H(12 + 4 * e.v.length)), Ea(r, t), Fr(a, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function fg(e) {
  var r = ya(e), t = Kr(e);
  return [r, t, "str"];
}
function cg(e, r, t) {
  var a = e.v == null ? "" : String(e.v);
  return t == null && (t = H(8 + 4 * a.length)), Sa(r, t), Fr(a, t), t.length > t.l ? t.slice(0, t.l) : t;
}
function og(e, r, t) {
  var a = e.l + r, n = mt(e);
  n.r = t["!row"];
  var i = e.read_shift(1), s = [n, i, "b"];
  if (t.cellFormula) {
    e.l += 2;
    var f = Si(e, a - e.l, t);
    s[3] = Hr(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function lg(e, r, t) {
  var a = e.l + r, n = mt(e);
  n.r = t["!row"];
  var i = e.read_shift(1), s = [n, i, "e"];
  if (t.cellFormula) {
    e.l += 2;
    var f = Si(e, a - e.l, t);
    s[3] = Hr(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function ug(e, r, t) {
  var a = e.l + r, n = mt(e);
  n.r = t["!row"];
  var i = Vr(e), s = [n, i, "n"];
  if (t.cellFormula) {
    e.l += 2;
    var f = Si(e, a - e.l, t);
    s[3] = Hr(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
function hg(e, r, t) {
  var a = e.l + r, n = mt(e);
  n.r = t["!row"];
  var i = Kr(e), s = [n, i, "str"];
  if (t.cellFormula) {
    e.l += 2;
    var f = Si(e, a - e.l, t);
    s[3] = Hr(f, null, n, t.supbooks, t);
  } else e.l = a;
  return s;
}
var dg = xa, vg = Ga;
function mg(e, r) {
  return r == null && (r = H(4)), r.write_shift(4, e), r;
}
function pg(e, r) {
  var t = e.l + r, a = xa(e), n = wi(e), i = Kr(e), s = Kr(e), f = Kr(e);
  e.l = t;
  var c = { rfx: a, relId: n, loc: i, display: f };
  return s && (c.Tooltip = s), c;
}
function gg(e, r) {
  var t = H(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
  Ga({ s: er(e[0]), e: er(e[0]) }, t), Is("rId" + r, t);
  var a = e[1].Target.indexOf("#"), n = a == -1 ? "" : e[1].Target.slice(a + 1);
  return Fr(n || "", t), Fr(e[1].Tooltip || "", t), Fr("", t), t.slice(0, t.l);
}
function _g() {
}
function wg(e, r, t) {
  var a = e.l + r, n = zc(e), i = e.read_shift(1), s = [n];
  if (s[2] = i, t.cellFormula) {
    var f = Mm(e, a - e.l, t);
    s[1] = f;
  } else e.l = a;
  return s;
}
function kg(e, r, t) {
  var a = e.l + r, n = xa(e), i = [n];
  if (t.cellFormula) {
    var s = Um(e, a - e.l, t);
    i[1] = s, e.l = a;
  } else e.l = a;
  return i;
}
function Tg(e, r, t) {
  t == null && (t = H(18));
  var a = Dn(e, r);
  t.write_shift(-4, e), t.write_shift(-4, e), t.write_shift(4, (a.width || 10) * 256), t.write_shift(
    4,
    0
    /*ixfe*/
  );
  var n = 0;
  return r.hidden && (n |= 1), typeof a.width == "number" && (n |= 2), r.level && (n |= r.level << 8), t.write_shift(2, n), t;
}
var zo = ["left", "right", "top", "bottom", "header", "footer"];
function Eg(e) {
  var r = {};
  return zo.forEach(function(t) {
    r[t] = Vr(e);
  }), r;
}
function yg(e, r) {
  return r == null && (r = H(6 * 8)), ua(e), zo.forEach(function(t) {
    ga(e[t], r);
  }), r;
}
function Sg(e) {
  var r = e.read_shift(2);
  return e.l += 28, { RTL: r & 32 };
}
function xg(e, r, t) {
  t == null && (t = H(30));
  var a = 924;
  return (((r || {}).Views || [])[0] || {}).RTL && (a |= 32), t.write_shift(2, a), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(1, 0), t.write_shift(1, 0), t.write_shift(2, 0), t.write_shift(2, 100), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(2, 0), t.write_shift(4, 0), t;
}
function Ag(e) {
  var r = H(24);
  return r.write_shift(4, 4), r.write_shift(4, 1), Ga(e, r), r;
}
function Fg(e, r) {
  return r == null && (r = H(16 * 4 + 2)), r.write_shift(2, e.password ? Ps(e.password) : 0), r.write_shift(4, 1), [
    ["objects", !1],
    // fObjects
    ["scenarios", !1],
    // fScenarios
    ["formatCells", !0],
    // fFormatCells
    ["formatColumns", !0],
    // fFormatColumns
    ["formatRows", !0],
    // fFormatRows
    ["insertColumns", !0],
    // fInsertColumns
    ["insertRows", !0],
    // fInsertRows
    ["insertHyperlinks", !0],
    // fInsertHyperlinks
    ["deleteColumns", !0],
    // fDeleteColumns
    ["deleteRows", !0],
    // fDeleteRows
    ["selectLockedCells", !1],
    // fSelLockedCells
    ["sort", !0],
    // fSort
    ["autoFilter", !0],
    // fAutoFilter
    ["pivotTables", !0],
    // fPivotTables
    ["selectUnlockedCells", !1]
    // fSelUnlockedCells
  ].forEach(function(t) {
    t[1] ? r.write_shift(4, e[t[0]] != null && !e[t[0]] ? 1 : 0) : r.write_shift(4, e[t[0]] != null && e[t[0]] ? 0 : 1);
  }), r;
}
function Ig() {
}
function Cg() {
}
function bg(e, r, t, a, n, i, s) {
  if (!e) return e;
  var f = r || {};
  a || (a = { "!id": {} });
  var c = {};
  f.dense && (c["!data"] = []);
  var o, l = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, d = !1, u = !1, h, m, g, p, v, w, _, T, b, B = [];
  f.biff = 12, f["!row"] = 0;
  var y = 0, O = !1, R = [], P = {}, L = f.supbooks || /*::(*/
  n.supbooks || [[]];
  if (L.sharedf = P, L.arrayf = R, L.SheetNames = n.SheetNames || n.Sheets.map(function(ge) {
    return ge.name;
  }), !f.supbooks && (f.supbooks = L, n.Names))
    for (var U = 0; U < n.Names.length; ++U) L[0][U + 1] = n.Names[U];
  var K = [], me = [], de = !1;
  wn[16] = { n: "BrtShortReal", f: Go };
  var ae, he = 1462 * +!!((n || {}).WBProps || {}).date1904;
  if ($t(e, function(z, be, oe) {
    if (!u)
      switch (oe) {
        case 148:
          o = z;
          break;
        case 0:
          h = z, f.sheetRows && f.sheetRows <= h.r && (u = !0), T = Xe(p = h.r), f["!row"] = h.r, (z.hidden || z.hpt || z.level != null) && (z.hpt && (z.hpx = Wa(z.hpt)), me[z.r] = z);
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 62:
          switch (m = { t: z[2] }, z[2]) {
            case "n":
              m.v = z[1];
              break;
            case "s":
              _ = an[z[1]], m.v = _.t, m.r = _.r;
              break;
            case "b":
              m.v = !!z[1];
              break;
            case "e":
              m.v = z[1], f.cellText !== !1 && (m.w = Ir[m.v]);
              break;
            case "str":
              m.t = "s", m.v = z[1];
              break;
            case "is":
              m.t = "s", m.v = z[1].t;
              break;
          }
          if ((g = s.CellXf[z[0].iStyleRef]) && Xo(m, g.numFmtId, null, f, i, s, he > 0), v = z[0].c == -1 ? v + 1 : z[0].c, f.dense ? (c["!data"][p] || (c["!data"][p] = []), c["!data"][p][v] = m) : c[Ne(v) + T] = m, f.cellFormula) {
            for (O = !1, y = 0; y < R.length; ++y) {
              var fe = R[y];
              h.r >= fe[0].s.r && h.r <= fe[0].e.r && v >= fe[0].s.c && v <= fe[0].e.c && (m.F = Me(fe[0]), O = !0);
            }
            !O && z.length > 3 && (m.f = z[3]);
          }
          if (l.s.r > h.r && (l.s.r = h.r), l.s.c > v && (l.s.c = v), l.e.r < h.r && (l.e.r = h.r), l.e.c < v && (l.e.c = v), f.cellDates && g && m.t == "n" && ft(Fe[g.numFmtId])) {
            var Q = At(m.v + he);
            Q && (m.t = "d", m.v = new Date(Date.UTC(Q.y, Q.m - 1, Q.d, Q.H, Q.M, Q.S, Q.u)));
          }
          ae && (ae.type == "XLDAPR" && (m.D = !0), ae = void 0);
          break;
        case 1:
        case 12:
          if (!f.sheetStubs || d) break;
          m = { t: "z", v: void 0 }, v = z[0].c == -1 ? v + 1 : z[0].c, f.dense ? (c["!data"][p] || (c["!data"][p] = []), c["!data"][p][v] = m) : c[Ne(v) + T] = m, l.s.r > h.r && (l.s.r = h.r), l.s.c > v && (l.s.c = v), l.e.r < h.r && (l.e.r = h.r), l.e.c < v && (l.e.c = v), ae && (ae.type == "XLDAPR" && (m.D = !0), ae = void 0);
          break;
        case 176:
          B.push(z);
          break;
        case 49:
          ae = ((f.xlmeta || {}).Cell || [])[z - 1];
          break;
        case 494:
          var _e = a["!id"][z.relId];
          for (_e ? (z.Target = _e.Target, z.loc && (z.Target += "#" + z.loc), z.Rel = _e) : z.relId == "" && (z.Target = "#" + z.loc), p = z.rfx.s.r; p <= z.rfx.e.r; ++p) for (v = z.rfx.s.c; v <= z.rfx.e.c; ++v)
            f.dense ? (c["!data"][p] || (c["!data"][p] = []), c["!data"][p][v] || (c["!data"][p][v] = { t: "z", v: void 0 }), c["!data"][p][v].l = z) : (w = Ne(v) + Xe(p), c[w] || (c[w] = { t: "z", v: void 0 }), c[w].l = z);
          break;
        case 426:
          if (!f.cellFormula) break;
          R.push(z), b = f.dense ? c["!data"][p][v] : c[Ne(v) + T], b.f = Hr(z[1], l, { r: h.r, c: v }, L, f), b.F = Me(z[0]);
          break;
        case 427:
          if (!f.cellFormula) break;
          P[He(z[0].s)] = z[1], b = f.dense ? c["!data"][p][v] : c[Ne(v) + T], b.f = Hr(z[1], l, { r: h.r, c: v }, L, f);
          break;
        case 60:
          if (!f.cellStyles) break;
          for (; z.e >= z.s; )
            K[z.e--] = { width: z.w / 256, hidden: !!(z.flags & 1), level: z.level }, de || (de = !0, Ls(z.w / 256)), Gt(K[z.e + 1]);
          break;
        case 551:
          z && (c["!legrel"] = z);
          break;
        case 161:
          c["!autofilter"] = { ref: Me(z) };
          break;
        case 476:
          c["!margins"] = z;
          break;
        case 147:
          n.Sheets[t] || (n.Sheets[t] = {}), z.name && (n.Sheets[t].CodeName = z.name), (z.above || z.left) && (c["!outline"] = { above: z.above, left: z.left });
          break;
        case 137:
          n.Views || (n.Views = [{}]), n.Views[0] || (n.Views[0] = {}), z.RTL && (n.Views[0].RTL = !0);
          break;
        case 485:
          break;
        case 64:
        case 1053:
          break;
        case 151:
          break;
        case 152:
        case 175:
        case 644:
        case 625:
        case 562:
        case 396:
        case 1112:
        case 1146:
        case 471:
        case 1050:
        case 649:
        case 1105:
        case 589:
        case 607:
        case 564:
        case 1055:
        case 168:
        case 174:
        case 1180:
        case 499:
        case 507:
        case 550:
        case 171:
        case 167:
        case 1177:
        case 169:
        case 1181:
        case 552:
        case 661:
        case 639:
        case 478:
        case 537:
        case 477:
        case 536:
        case 1103:
        case 680:
        case 1104:
        case 1024:
        case 663:
        case 535:
        case 678:
        case 504:
        case 1043:
        case 428:
        case 170:
        case 3072:
        case 50:
        case 2070:
        case 1045:
          break;
        case 35:
          d = !0;
          break;
        case 36:
          d = !1;
          break;
        case 37:
          d = !0;
          break;
        case 38:
          d = !1;
          break;
        default:
          if (!be.T) {
            if (!d || f.WTF) throw new Error("Unexpected record 0x" + oe.toString(16));
          }
      }
  }, f), delete f.supbooks, delete f["!row"], !c["!ref"] && (l.s.r < 2e6 || o && (o.e.r > 0 || o.e.c > 0 || o.s.r > 0 || o.s.c > 0)) && (c["!ref"] = Me(o || l)), f.sheetRows && c["!ref"]) {
    var q = Ge(c["!ref"]);
    f.sheetRows <= +q.e.r && (q.e.r = f.sheetRows - 1, q.e.r > l.e.r && (q.e.r = l.e.r), q.e.r < q.s.r && (q.s.r = q.e.r), q.e.c > l.e.c && (q.e.c = l.e.c), q.e.c < q.s.c && (q.s.c = q.e.c), c["!fullref"] = c["!ref"], c["!ref"] = Me(q));
  }
  return B.length > 0 && (c["!merges"] = B), K.length > 0 && (c["!cols"] = K), me.length > 0 && (c["!rows"] = me), a["!id"][c["!legrel"]] && (c["!legdrawel"] = a["!id"][c["!legrel"]]), c;
}
function Og(e, r, t, a, n, i, s, f) {
  var c = { r: t, c: a };
  if (r.c && i["!comments"].push([He(c), r.c]), r.v === void 0) return !1;
  var o = "";
  switch (r.t) {
    case "b":
      o = r.v ? "1" : "0";
      break;
    case "d":
      r = je(r), r.z = r.z || Fe[14], r.v = or(fr(r.v, f), f), r.t = "n";
      break;
    case "n":
    case "e":
      o = "" + r.v;
      break;
    default:
      o = r.v;
      break;
  }
  switch (c.s = Nt(n.cellXfs, r, n), r.l && i["!links"].push([He(c), r.l]), r.t) {
    case "s":
    case "str":
      return n.bookSST ? (o = Us(n.Strings, r.v == null ? "" : String(r.v), n.revStrings), c.t = "s", c.v = o, s ? Z(e, 18, Zp(r, c)) : Z(e, 7, jp(r, c))) : (c.t = "str", s ? Z(e, 17, cg(r, c)) : Z(e, 6, sg(r, c))), !0;
    case "n":
      return r.v == (r.v | 0) && r.v > -1e3 && r.v < 1e3 ? s ? Z(e, 13, ag(r, c)) : Z(e, 2, rg(r, c)) : isFinite(r.v) ? s ? Z(e, 16, Qp(r, c)) : Z(e, 5, qp(r, c)) : (c.t = "e", isNaN(r.v) ? s ? Z(e, 14, Hi({ v: 36 }, c)) : Z(e, 3, Wi({ v: 36 }, c)) : s ? Z(e, 14, Hi({ v: 7 }, c)) : Z(e, 3, Wi({ v: 7 }, c))), !0;
    case "b":
      return c.t = "b", s ? Z(e, 15, Gp(r, c)) : Z(e, 4, Xp(r, c)), !0;
    case "e":
      return c.t = "e", s ? Z(e, 14, Hi(r, c)) : Z(e, 3, Wi(r, c)), !0;
  }
  return s ? Z(e, 12, Wp(r, c)) : Z(e, 1, Bp(r, c)), !0;
}
function Ng(e, r, t, a, n) {
  var i = Ge(r["!ref"] || "A1"), s = "", f = [], c = (((n || {}).Workbook || {}).WBProps || {}).date1904;
  Z(
    e,
    145
    /* BrtBeginSheetData */
  );
  var o = r["!data"] != null, l = o ? r["!data"][i.s.r] : [], d = i.e.r;
  r["!rows"] && (d = Math.max(i.e.r, r["!rows"].length - 1));
  for (var u = i.s.r; u <= d; ++u)
    if (s = Xe(u), o && (l = r["!data"][u]), Op(e, r, i, u), !(o && !l)) {
      var h = !1;
      if (u <= i.e.r) for (var m = i.s.c; m <= i.e.c; ++m) {
        u === i.s.r && (f[m] = Ne(m));
        var g = o ? l[m] : r[f[m] + s];
        if (!g) {
          h = !1;
          continue;
        }
        h = Og(e, g, u, m, a, r, h, c);
      }
    }
  Z(
    e,
    146
    /* BrtEndSheetData */
  );
}
function Rg(e, r) {
  !r || !r["!merges"] || (Z(e, 177, mg(r["!merges"].length)), r["!merges"].forEach(function(t) {
    Z(e, 176, vg(t));
  }), Z(
    e,
    178
    /* BrtEndMergeCells */
  ));
}
function Dg(e, r) {
  !r || !r["!cols"] || (Z(
    e,
    390
    /* BrtBeginColInfos */
  ), r["!cols"].forEach(function(t, a) {
    t && Z(e, 60, Tg(a, t));
  }), Z(
    e,
    391
    /* BrtEndColInfos */
  ));
}
function Pg(e, r) {
  !r || !r["!ref"] || (Z(
    e,
    648
    /* BrtBeginCellIgnoreECs */
  ), Z(e, 649, Ag(Ge(r["!ref"]))), Z(
    e,
    650
    /* BrtEndCellIgnoreECs */
  ));
}
function Lg(e, r, t) {
  r["!links"].forEach(function(a) {
    if (a[1].Target) {
      var n = Ze(t, -1, a[1].Target.replace(/#[\s\S]*$/, ""), We.HLINK);
      Z(e, 494, gg(a, n));
    }
  }), delete r["!links"];
}
function Mg(e, r, t, a) {
  if (r["!comments"].length > 0) {
    var n = Ze(a, -1, "../drawings/vmlDrawing" + (t + 1) + ".vml", We.VML);
    Z(e, 551, Is("rId" + n)), r["!legacy"] = n;
  }
}
function Bg(e, r, t, a) {
  if (r["!autofilter"]) {
    var n = r["!autofilter"], i = typeof n.ref == "string" ? n.ref : Me(n.ref);
    t.Workbook || (t.Workbook = { Sheets: [] }), t.Workbook.Names || (t.Workbook.Names = []);
    var s = t.Workbook.Names, f = Er(i);
    f.s.r == f.e.r && (f.e.r = Er(r["!ref"]).e.r, i = Me(f));
    for (var c = 0; c < s.length; ++c) {
      var o = s[c];
      if (o.Name == "_xlnm._FilterDatabase" && o.Sheet == a) {
        o.Ref = dn(t.SheetNames[a]) + "!" + La(i);
        break;
      }
    }
    c == s.length && s.push({ Name: "_xlnm._FilterDatabase", Sheet: a, Ref: dn(t.SheetNames[a]) + "!" + La(i) }), Z(e, 161, Ga(Ge(i))), Z(
      e,
      162
      /* BrtEndAFilter */
    );
  }
}
function Ug(e, r, t) {
  Z(
    e,
    133
    /* BrtBeginWsViews */
  ), Z(e, 137, xg(r, t)), Z(
    e,
    138
    /* BrtEndWsView */
  ), Z(
    e,
    134
    /* BrtEndWsViews */
  );
}
function Wg(e, r) {
  r["!protect"] && Z(e, 535, Fg(r["!protect"]));
}
function Hg(e, r, t, a) {
  var n = $r(), i = t.SheetNames[e], s = t.Sheets[i] || {}, f = i;
  try {
    t && t.Workbook && (f = t.Workbook.Sheets[e].CodeName || f);
  } catch {
  }
  var c = Ge(s["!ref"] || "A1");
  if (c.e.c > 16383 || c.e.r > 1048575) {
    if (r.WTF) throw new Error("Range " + (s["!ref"] || "A1") + " exceeds format limit A1:XFD1048576");
    c.e.c = Math.min(c.e.c, 16383), c.e.r = Math.min(c.e.c, 1048575);
  }
  return s["!links"] = [], s["!comments"] = [], Z(
    n,
    129
    /* BrtBeginSheet */
  ), (t.vbaraw || s["!outline"]) && Z(n, 147, Lp(f, s["!outline"])), Z(n, 148, Rp(c)), Ug(n, s, t.Workbook), Dg(n, s), Ng(n, s, e, r, t), Wg(n, s), Bg(n, s, t, e), Rg(n, s), Lg(n, s, a), s["!margins"] && Z(n, 476, yg(s["!margins"])), (!r || r.ignoreEC || r.ignoreEC == null) && Pg(n, s), Mg(n, s, e, a), Z(
    n,
    130
    /* BrtEndSheet */
  ), n.end();
}
function Xg(e) {
  var r = [], t = e.match(/^<c:numCache>/), a;
  (e.match(/<c:pt idx="(\d*)"[^<>\/]*><c:v>([^<])<\/c:v><\/c:pt>/mg) || []).forEach(function(i) {
    var s = i.match(/<c:pt idx="(\d*)"[^<>\/]*><c:v>([^<]*)<\/c:v><\/c:pt>/);
    s && (r[+s[1]] = t ? +s[2] : s[2]);
  });
  var n = ze((sa(e, "c:formatCode") || ["", "General"])[1]);
  return (vs(e, "<c:f>", "</c:f>") || []).forEach(function(i) {
    a = i.replace(/<[^<>]*>/g, "");
  }), [r, n, a];
}
function Vg(e, r, t, a, n, i) {
  var s = i || { "!type": "chart" };
  if (!e) return i;
  var f = 0, c = 0, o = "A", l = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return (vs(e, "<c:numCache>", "</c:numCache>") || []).forEach(function(d) {
    var u = Xg(d);
    l.s.r = l.s.c = 0, l.e.c = f, o = Ne(f), u[0].forEach(function(h, m) {
      s["!data"] ? (s["!data"][m] || (s["!data"][m] = []), s["!data"][m][f] = { t: "n", v: h, z: u[1] }) : s[o + Xe(m)] = { t: "n", v: h, z: u[1] }, c = m;
    }), l.e.r < c && (l.e.r = c), ++f;
  }), f > 0 && (s["!ref"] = Me(l)), s;
}
function Gg(e, r, t, a, n) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s, f = e.match(Vo);
  return f && Ws(f[0], i, n, t), (s = e.match(/drawing r:id="(.*?)"/)) && (i["!rel"] = s[1]), a["!id"][i["!rel"]] && (i["!drawel"] = a["!id"][i["!rel"]]), i;
}
function zg(e, r) {
  e.l += 10;
  var t = Kr(e);
  return { name: t };
}
function $g(e, r, t, a, n) {
  if (!e) return e;
  a || (a = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s = !1;
  return $t(e, function(c, o, l) {
    switch (l) {
      case 550:
        i["!rel"] = c;
        break;
      case 651:
        n.Sheets[t] || (n.Sheets[t] = {}), c.name && (n.Sheets[t].CodeName = c.name);
        break;
      case 562:
      case 652:
      case 669:
      case 679:
      case 551:
      case 552:
      case 476:
      case 3072:
        break;
      case 35:
        s = !0;
        break;
      case 36:
        s = !1;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!(o.T > 0)) {
          if (!(o.T < 0)) {
            if (!s || r.WTF) throw new Error("Unexpected record 0x" + l.toString(16));
          }
        }
    }
  }, r), a["!id"][i["!rel"]] && (i["!drawel"] = a["!id"][i["!rel"]]), i;
}
var Hs = [
  ["allowRefreshQuery", !1, "bool"],
  ["autoCompressPictures", !0, "bool"],
  ["backupFile", !1, "bool"],
  ["checkCompatibility", !1, "bool"],
  ["CodeName", ""],
  ["date1904", !1, "bool"],
  ["defaultThemeVersion", 0, "int"],
  ["filterPrivacy", !1, "bool"],
  ["hidePivotFieldList", !1, "bool"],
  ["promptedSolutions", !1, "bool"],
  ["publishItems", !1, "bool"],
  ["refreshAllConnections", !1, "bool"],
  ["saveExternalLinkValues", !0, "bool"],
  ["showBorderUnselectedTables", !0, "bool"],
  ["showInkAnnotation", !0, "bool"],
  ["showObjects", "all"],
  ["showPivotChartFilter", !1, "bool"],
  ["updateLinks", "userSet"]
], Kg = [
  ["activeTab", 0, "int"],
  ["autoFilterDateGrouping", !0, "bool"],
  ["firstSheet", 0, "int"],
  ["minimized", !1, "bool"],
  ["showHorizontalScroll", !0, "bool"],
  ["showSheetTabs", !0, "bool"],
  ["showVerticalScroll", !0, "bool"],
  ["tabRatio", 600, "int"],
  ["visibility", "visible"]
  //window{Height,Width}, {x,y}Window
], jg = [
  //['state', 'visible']
], Yg = [
  ["calcCompleted", "true"],
  ["calcMode", "auto"],
  ["calcOnSave", "true"],
  ["concurrentCalc", "true"],
  ["fullCalcOnLoad", "false"],
  ["fullPrecision", "true"],
  ["iterate", "false"],
  ["iterateCount", "100"],
  ["iterateDelta", "0.001"],
  ["refMode", "A1"]
];
function Qf(e, r) {
  for (var t = 0; t != e.length; ++t)
    for (var a = e[t], n = 0; n != r.length; ++n) {
      var i = r[n];
      if (a[i[0]] == null) a[i[0]] = i[1];
      else switch (i[2]) {
        case "bool":
          typeof a[i[0]] == "string" && (a[i[0]] = Je(a[i[0]]));
          break;
        case "int":
          typeof a[i[0]] == "string" && (a[i[0]] = parseInt(a[i[0]], 10));
          break;
      }
    }
}
function ec(e, r) {
  for (var t = 0; t != r.length; ++t) {
    var a = r[t];
    if (e[a[0]] == null) e[a[0]] = a[1];
    else switch (a[2]) {
      case "bool":
        typeof e[a[0]] == "string" && (e[a[0]] = Je(e[a[0]]));
        break;
      case "int":
        typeof e[a[0]] == "string" && (e[a[0]] = parseInt(e[a[0]], 10));
        break;
    }
  }
}
function $o(e) {
  ec(e.WBProps, Hs), ec(e.CalcPr, Yg), Qf(e.WBView, Kg), Qf(e.Sheets, jg), Ra.date1904 = Je(e.WBProps.date1904);
}
function Zg(e) {
  return !e.Workbook || !e.Workbook.WBProps ? "false" : Je(e.Workbook.WBProps.date1904) ? "true" : "false";
}
var Jg = /* @__PURE__ */ ":][*?/\\".split("");
function Ko(e, r) {
  try {
    if (e == "") throw new Error("Sheet name cannot be blank");
    if (e.length > 31) throw new Error("Sheet name cannot exceed 31 chars");
    if (Tc(e)) throw new Error("Sheet name cannot be a reserved object key");
    if (e.charCodeAt(0) == 39 || e.charCodeAt(e.length - 1) == 39) throw new Error("Sheet name cannot start or end with apostrophe (')");
    if (e.toLowerCase() == "history") throw new Error("Sheet name cannot be 'History'");
    Jg.forEach(function(t) {
      if (e.indexOf(t) != -1)
        throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
    });
  } catch (t) {
    throw t;
  }
  return !0;
}
function qg(e, r, t) {
  e.forEach(function(a, n) {
    Ko(a);
    for (var i = 0; i < n; ++i) if (a == e[i]) throw new Error("Duplicate Sheet Name: " + a);
    if (t) {
      var s = r && r[n] && r[n].CodeName || a;
      if (s.charCodeAt(0) == 95 && s.length > 22) throw new Error("Bad Code Name: Worksheet" + s);
    }
  });
}
function jo(e) {
  if (!e || !e.SheetNames || !e.Sheets) throw new Error("Invalid Workbook");
  if (!e.SheetNames.length) throw new Error("Workbook is empty");
  var r = e.Workbook && e.Workbook.Sheets || [];
  qg(e.SheetNames, r, !!e.vbaraw);
  for (var t = 0; t < e.SheetNames.length; ++t) ep(e.Sheets[e.SheetNames[t]], e.SheetNames[t], t);
  e.SheetNames.forEach(function(a, n) {
    var i = e.Sheets[a];
    if (!(!i || !i["!autofilter"])) {
      var s;
      e.Workbook || (e.Workbook = {}), e.Workbook.Names || (e.Workbook.Names = []), e.Workbook.Names.forEach(function(c) {
        c.Name == "_xlnm._FilterDatabase" && c.Sheet == n && (s = c);
      });
      var f = dn(a) + "!" + La(i["!autofilter"].ref);
      s ? s.Ref = f : e.Workbook.Names.push({ Name: "_xlnm._FilterDatabase", Sheet: n, Ref: f });
    }
  });
}
var Qg = /<\w+:workbook/;
function e_(e, r) {
  if (!e) throw new Error("Could not find file");
  var t = (
    /*::(*/
    { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" }
  ), a = !1, n = "xmlns", i = {}, s = 0;
  if (e.replace(Dr, function(c, o) {
    var l = ke(c);
    switch (vt(l[0])) {
      case "<?xml":
        break;
      case "<workbook":
        c.match(Qg) && (n = "xmlns" + c.match(/<(\w+):/)[1]), t.xmlns = l[n];
        break;
      case "</workbook>":
        break;
      case "<fileVersion":
        delete l[0], t.AppVersion = l;
        break;
      case "<fileVersion/>":
      case "</fileVersion>":
        break;
      case "<fileSharing":
        break;
      case "<fileSharing/>":
        break;
      case "<workbookPr":
      case "<workbookPr/>":
        Hs.forEach(function(d) {
          if (l[d[0]] != null)
            switch (d[2]) {
              case "bool":
                t.WBProps[d[0]] = Je(l[d[0]]);
                break;
              case "int":
                t.WBProps[d[0]] = parseInt(l[d[0]], 10);
                break;
              default:
                t.WBProps[d[0]] = l[d[0]];
            }
        }), l.codeName && (t.WBProps.CodeName = Qe(l.codeName));
        break;
      case "</workbookPr>":
        break;
      case "<workbookProtection":
        break;
      case "<workbookProtection/>":
        break;
      case "<bookViews":
      case "<bookViews>":
      case "</bookViews>":
        break;
      case "<workbookView":
      case "<workbookView/>":
        delete l[0], t.WBView.push(l);
        break;
      case "</workbookView>":
        break;
      case "<sheets":
      case "<sheets>":
      case "</sheets>":
        break;
      case "<sheet":
        switch (l.state) {
          case "hidden":
            l.Hidden = 1;
            break;
          case "veryHidden":
            l.Hidden = 2;
            break;
          default:
            l.Hidden = 0;
        }
        delete l.state, l.name = ze(Qe(l.name)), delete l[0], t.Sheets.push(l);
        break;
      case "</sheet>":
        break;
      case "<functionGroups":
      case "<functionGroups/>":
        break;
      case "<functionGroup":
        break;
      case "<externalReferences":
      case "</externalReferences>":
      case "<externalReferences>":
        break;
      case "<externalReference":
        break;
      case "<definedNames/>":
        break;
      case "<definedNames>":
      case "<definedNames":
        a = !0;
        break;
      case "</definedNames>":
        a = !1;
        break;
      case "<definedName":
        i = {}, i.Name = Qe(l.name), l.comment && (i.Comment = l.comment), l.localSheetId && (i.Sheet = +l.localSheetId), Je(l.hidden || "0") && (i.Hidden = !0), s = o + c.length;
        break;
      case "</definedName>":
        i.Ref = ze(Qe(e.slice(s, o))), t.Names.push(i);
        break;
      case "<definedName/>":
        break;
      case "<calcPr":
        delete l[0], t.CalcPr = l;
        break;
      case "<calcPr/>":
        delete l[0], t.CalcPr = l;
        break;
      case "</calcPr>":
        break;
      case "<oleSize":
        break;
      case "<customWorkbookViews>":
      case "</customWorkbookViews>":
      case "<customWorkbookViews":
        break;
      case "<customWorkbookView":
      case "</customWorkbookView>":
        break;
      case "<pivotCaches>":
      case "</pivotCaches>":
      case "<pivotCaches":
        break;
      case "<pivotCache":
        break;
      case "<smartTagPr":
      case "<smartTagPr/>":
        break;
      case "<smartTagTypes":
      case "<smartTagTypes>":
      case "</smartTagTypes>":
        break;
      case "<smartTagType":
        break;
      case "<webPublishing":
      case "<webPublishing/>":
        break;
      case "<fileRecoveryPr":
      case "<fileRecoveryPr/>":
        break;
      case "<webPublishObjects>":
      case "<webPublishObjects":
      case "</webPublishObjects>":
        break;
      case "<webPublishObject":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        a = !0;
        break;
      case "</ext>":
        a = !1;
        break;
      case "<ArchID":
        break;
      case "<AlternateContent":
      case "<AlternateContent>":
        a = !0;
        break;
      case "</AlternateContent>":
        a = !1;
        break;
      case "<revisionPtr":
        break;
      default:
        if (!a && r.WTF) throw new Error("unrecognized " + l[0] + " in workbook");
    }
    return c;
  }), Ta.indexOf(t.xmlns) === -1) throw new Error("Unknown Namespace: " + t.xmlns);
  return $o(t), t;
}
function r_(e) {
  var r = [hr];
  r[r.length] = te("workbook", null, {
    xmlns: Ta[0],
    //'xmlns:mx': XMLNS.mx,
    //'xmlns:s': XMLNS_main[0],
    "xmlns:r": Ar.r
  });
  var t = e.Workbook && (e.Workbook.Names || []).length > 0, a = { codeName: "ThisWorkbook" };
  e.Workbook && e.Workbook.WBProps && (Hs.forEach(function(f) {
    e.Workbook.WBProps[f[0]] != null && e.Workbook.WBProps[f[0]] != f[1] && (a[f[0]] = e.Workbook.WBProps[f[0]]);
  }), e.Workbook.WBProps.CodeName && (a.codeName = e.Workbook.WBProps.CodeName, delete a.CodeName)), r[r.length] = te("workbookPr", null, a);
  var n = e.Workbook && e.Workbook.Sheets || [], i = 0;
  if (n && n[0] && n[0].Hidden) {
    for (r[r.length] = "<bookViews>", i = 0; i != e.SheetNames.length && !(!n[i] || !n[i].Hidden); ++i)
      ;
    i == e.SheetNames.length && (i = 0), r[r.length] = '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>', r[r.length] = "</bookViews>";
  }
  for (r[r.length] = "<sheets>", i = 0; i != e.SheetNames.length; ++i) {
    var s = { name: Le(e.SheetNames[i].slice(0, 31)) };
    if (s.sheetId = "" + (i + 1), s["r:id"] = "rId" + (i + 1), n[i]) switch (n[i].Hidden) {
      case 1:
        s.state = "hidden";
        break;
      case 2:
        s.state = "veryHidden";
        break;
    }
    r[r.length] = te("sheet", null, s);
  }
  return r[r.length] = "</sheets>", t && (r[r.length] = "<definedNames>", e.Workbook && e.Workbook.Names && e.Workbook.Names.forEach(function(f) {
    var c = { name: f.Name };
    f.Comment && (c.comment = f.Comment), f.Sheet != null && (c.localSheetId = "" + f.Sheet), f.Hidden && (c.hidden = "1"), f.Ref && (r[r.length] = te("definedName", Le(f.Ref), c));
  }), r[r.length] = "</definedNames>"), r.length > 2 && (r[r.length] = "</workbook>", r[1] = r[1].replace("/>", ">")), r.join("");
}
function t_(e, r) {
  var t = {};
  return t.Hidden = e.read_shift(4), t.iTabID = e.read_shift(4), t.strRelID = Zi(e), t.name = Kr(e), t;
}
function a_(e, r) {
  return r || (r = H(127)), r.write_shift(4, e.Hidden), r.write_shift(4, e.iTabID), Is(e.strRelID, r), Fr(e.name.slice(0, 31), r), r.length > r.l ? r.slice(0, r.l) : r;
}
function n_(e, r) {
  var t = {}, a = e.read_shift(4);
  t.defaultThemeVersion = e.read_shift(4);
  var n = r > 8 ? Kr(e) : "";
  return n.length > 0 && (t.CodeName = n), t.autoCompressPictures = !!(a & 65536), t.backupFile = !!(a & 64), t.checkCompatibility = !!(a & 4096), t.date1904 = !!(a & 1), t.filterPrivacy = !!(a & 8), t.hidePivotFieldList = !!(a & 1024), t.promptedSolutions = !!(a & 16), t.publishItems = !!(a & 2048), t.refreshAllConnections = !!(a & 262144), t.saveExternalLinkValues = !!(a & 128), t.showBorderUnselectedTables = !!(a & 4), t.showInkAnnotation = !!(a & 32), t.showObjects = ["all", "placeholders", "none"][a >> 13 & 3], t.showPivotChartFilter = !!(a & 32768), t.updateLinks = ["userSet", "never", "always"][a >> 8 & 3], t;
}
function i_(e, r) {
  r || (r = H(72));
  var t = 0;
  return e && (e.date1904 && (t |= 1), e.filterPrivacy && (t |= 8)), r.write_shift(4, t), r.write_shift(4, 0), Vc(e && e.CodeName || "ThisWorkbook", r), r.slice(0, r.l);
}
function s_(e, r) {
  var t = {};
  return e.read_shift(4), t.ArchID = e.read_shift(4), e.l += r - 8, t;
}
function f_(e, r, t) {
  var a = e.l + r, n = e.read_shift(4);
  e.l += 1;
  var i = e.read_shift(4), s = Au(e), f, c = "";
  try {
    f = Bm(e, 0, t);
    try {
      c = wi(e);
    } catch {
    }
  } catch {
    console.error("Could not parse defined name " + s);
  }
  n & 32 && (s = "_xlnm." + s), e.l = a;
  var o = { Name: s, Ptg: f, Flags: n };
  return i < 268435455 && (o.Sheet = i), c && (o.Comment = c), o;
}
function c_(e, r) {
  var t = H(9), a = 0, n = e.Name;
  bs.indexOf(n) > -1 && (a |= 32, n = n.slice(6)), t.write_shift(4, a), t.write_shift(1, 0), t.write_shift(4, e.Sheet == null ? 4294967295 : e.Sheet);
  var i = [
    t,
    Fr(n),
    Zm(e.Ref, r)
  ];
  if (e.Comment) i.push(vn(e.Comment));
  else {
    var s = H(4);
    s.write_shift(4, 4294967295), i.push(s);
  }
  return mr(i);
}
function o_(e, r) {
  var t = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, xmlns: "" }, a = [], n = !1;
  r || (r = {}), r.biff = 12;
  var i = [], s = [[]];
  return s.SheetNames = [], s.XTI = [], wn[16] = { n: "BrtFRTArchID$", f: s_ }, $t(e, function(c, o, l) {
    switch (l) {
      case 156:
        s.SheetNames.push(c.name), t.Sheets.push(c);
        break;
      case 153:
        t.WBProps = c;
        break;
      case 39:
        c.Sheet != null && (r.SID = c.Sheet), c.Ref = c.Ptg ? Hr(c.Ptg, null, null, s, r) : "#REF!", delete r.SID, delete c.Ptg, i.push(c);
        break;
      case 1036:
        break;
      case 357:
      case 358:
      case 355:
      case 667:
        s[0].length ? s.push([l, c]) : s[0] = [l, c], s[s.length - 1].XTI = [];
        break;
      case 362:
        s.length === 0 && (s[0] = [], s[0].XTI = []), s[s.length - 1].XTI = s[s.length - 1].XTI.concat(c), s.XTI = s.XTI.concat(c);
        break;
      case 361:
        break;
      case 2071:
      case 158:
      case 143:
      case 664:
      case 353:
        break;
      case 3072:
      case 3073:
      case 534:
      case 677:
      case 157:
      case 610:
      case 2050:
      case 155:
      case 548:
      case 676:
      case 128:
      case 665:
      case 2128:
      case 2125:
      case 549:
      case 2053:
      case 596:
      case 2076:
      case 2075:
      case 2082:
      case 397:
      case 154:
      case 1117:
      case 553:
      case 2091:
        break;
      case 35:
        a.push(l), n = !0;
        break;
      case 36:
        a.pop(), n = !1;
        break;
      case 37:
        a.push(l), n = !0;
        break;
      case 38:
        a.pop(), n = !1;
        break;
      case 16:
        break;
      default:
        if (!o.T) {
          if (!n || r.WTF && a[a.length - 1] != 37 && a[a.length - 1] != 35) throw new Error("Unexpected record 0x" + l.toString(16));
        }
    }
  }, r), $o(t), t.Names = i, t.supbooks = s, t;
}
function l_(e, r) {
  Z(
    e,
    143
    /* BrtBeginBundleShs */
  );
  for (var t = 0; t != r.SheetNames.length; ++t) {
    var a = r.Workbook && r.Workbook.Sheets && r.Workbook.Sheets[t] && r.Workbook.Sheets[t].Hidden || 0, n = { Hidden: a, iTabID: t + 1, strRelID: "rId" + (t + 1), name: r.SheetNames[t] };
    Z(e, 156, a_(n));
  }
  Z(
    e,
    144
    /* BrtEndBundleShs */
  );
}
function u_(e, r) {
  r || (r = H(127));
  for (var t = 0; t != 4; ++t) r.write_shift(4, 0);
  return Fr("SheetJS", r), Fr(on.version, r), Fr(on.version, r), Fr("7262", r), r.length > r.l ? r.slice(0, r.l) : r;
}
function h_(e, r) {
  r || (r = H(29)), r.write_shift(-4, 0), r.write_shift(-4, 460), r.write_shift(4, 28800), r.write_shift(4, 17600), r.write_shift(4, 500), r.write_shift(4, e), r.write_shift(4, e);
  var t = 120;
  return r.write_shift(1, t), r.length > r.l ? r.slice(0, r.l) : r;
}
function d_(e, r) {
  if (!(!r.Workbook || !r.Workbook.Sheets)) {
    for (var t = r.Workbook.Sheets, a = 0, n = -1, i = -1; a < t.length; ++a)
      !t[a] || !t[a].Hidden && n == -1 ? n = a : t[a].Hidden == 1 && i == -1 && (i = a);
    i > n || (Z(
      e,
      135
      /* BrtBeginBookViews */
    ), Z(e, 158, h_(n)), Z(
      e,
      136
      /* BrtEndBookViews */
    ));
  }
}
function v_(e, r) {
  !r.Workbook || !r.Workbook.Names || r.Workbook.Names.forEach(function(t) {
    try {
      if (t.Flags & 14) return;
      Z(e, 39, c_(t, r));
    } catch {
      console.error("Could not serialize defined name " + JSON.stringify(t));
    }
  });
}
function m_(e) {
  var r = e.SheetNames.length, t = H(12 * r + 28);
  t.write_shift(4, r + 2), t.write_shift(4, 0), t.write_shift(4, -2), t.write_shift(4, -2), t.write_shift(4, 0), t.write_shift(4, -1), t.write_shift(4, -1);
  for (var a = 0; a < r; ++a)
    t.write_shift(4, 0), t.write_shift(4, a), t.write_shift(4, a);
  return t;
}
function p_(e, r) {
  Z(
    e,
    353
    /* BrtBeginExternals */
  ), Z(
    e,
    357
    /* BrtSupSelf */
  ), Z(e, 362, m_(r)), Z(
    e,
    354
    /* BrtEndExternals */
  );
}
function g_(e, r) {
  var t = $r();
  return Z(
    t,
    131
    /* BrtBeginBook */
  ), Z(t, 128, u_()), Z(t, 153, i_(e.Workbook && e.Workbook.WBProps || null)), d_(t, e), l_(t, e), p_(t, e), (e.Workbook || {}).Names && v_(t, e), Z(
    t,
    132
    /* BrtEndBook */
  ), t.end();
}
function __(e, r, t) {
  return r.slice(-4) === ".bin" ? o_(e, t) : e_(e, t);
}
function w_(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? bg(e, a, t, n, i, s, f) : cp(e, a, t, n, i, s, f);
}
function k_(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? $g(e, a, t, n, i) : Gg(e, a, t, n, i);
}
function T_(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? v2() : m2();
}
function E_(e, r, t, a, n, i, s, f) {
  return r.slice(-4) === ".bin" ? h2() : d2();
}
function y_(e, r, t, a) {
  return r.slice(-4) === ".bin" ? dv(e, t, a) : ev(e, t, a);
}
function S_(e, r, t) {
  return r.slice(-4) === ".bin" ? pd(e, t) : hd(e, t);
}
function x_(e, r, t) {
  return r.slice(-4) === ".bin" ? s2(e, t) : Qv(e, t);
}
function A_(e, r, t) {
  return r.slice(-4) === ".bin" ? jv(e) : $v(e);
}
function F_(e, r, t, a) {
  return t.slice(-4) === ".bin" ? Yv(e, r, t, a) : void 0;
}
function I_(e, r, t) {
  return r.slice(-4) === ".bin" ? Xv(e, r, t) : Gv(e, r, t);
}
var Yo = /\b((?:\w+:)?[\w]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g, Zo = /\b((?:\w+:)?[\w]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function gt(e, r) {
  var t = e.split(/\s+/), a = [];
  if (a[0] = t[0], t.length === 1) return a;
  var n = e.match(Yo), i, s, f, c;
  if (n) for (c = 0; c != n.length; ++c)
    i = n[c].match(Zo), (s = i[1].indexOf(":")) === -1 ? ar(a, i[1], i[2].slice(1, i[2].length - 1)) : (i[1].slice(0, 6) === "xmlns:" ? f = "xmlns" + i[1].slice(6) : f = i[1].slice(s + 1), ar(a, f, i[2].slice(1, i[2].length - 1)));
  return a;
}
function C_(e) {
  var r = e.split(/\s+/), t = vr();
  if (r.length === 1) return t;
  var a = e.match(Yo), n, i, s, f;
  if (a) for (f = 0; f != a.length; ++f)
    n = a[f].match(Zo), (i = n[1].indexOf(":")) === -1 ? ar(t, n[1], n[2].slice(1, n[2].length - 1)) : (n[1].slice(0, 6) === "xmlns:" ? s = "xmlns" + n[1].slice(6) : s = n[1].slice(i + 1), ar(t, s, n[2].slice(1, n[2].length - 1)));
  return t;
}
var sn;
function b_(e, r, t) {
  var a = sn[e] || ze(e);
  return a === "General" ? da(r) : at(a, r, { date1904: !!t });
}
function O_(e, r, t, a) {
  var n = a;
  switch ((t[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
    case "boolean":
      n = Je(a);
      break;
    case "i2":
    case "int":
      n = parseInt(a, 10);
      break;
    case "r4":
    case "float":
      n = parseFloat(a);
      break;
    case "date":
    case "dateTime.tz":
      n = fr(a);
      break;
    case "i8":
    case "string":
    case "fixed":
    case "uuid":
    case "bin.base64":
      break;
    default:
      throw new Error("bad custprop:" + t[0]);
  }
  e[ze(r)] = n;
}
function N_(e, r, t, a) {
  if (e.t !== "z") {
    if (!t || t.cellText !== !1) try {
      e.t === "e" ? e.w = e.w || Ir[e.v] : r === "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = un(e.v) : e.w = da(e.v) : e.w = b_(r || "General", e.v, a);
    } catch (s) {
      if (t.WTF) throw s;
    }
    try {
      var n = sn[r] || r || "General";
      if (t.cellNF && (e.z = n), t.cellDates && e.t == "n" && ft(n)) {
        var i = At(e.v + (a ? 1462 : 0));
        i && (e.t = "d", e.v = new Date(Date.UTC(i.y, i.m - 1, i.d, i.H, i.M, i.S, i.u)));
      }
    } catch (s) {
      if (t.WTF) throw s;
    }
  }
}
function R_(e, r, t) {
  if (t.cellStyles && r.Interior) {
    var a = r.Interior;
    a.Pattern && (a.patternType = $d[a.Pattern] || a.Pattern);
  }
  e[r.ID] = r;
}
function D_(e, r, t, a, n, i, s, f, c, o, l) {
  var d = "General", u = a.StyleID, h = {};
  o = o || {};
  var m = [], g = 0;
  for (u === void 0 && f && (u = f.StyleID), u === void 0 && s && (u = s.StyleID); i[u] !== void 0; ) {
    var p = i[u];
    if (p.nf && (d = p.nf), p.Interior && m.push(p.Interior), !p.Parent) break;
    u = p.Parent;
  }
  switch (t.Type) {
    case "Boolean":
      a.t = "b", a.v = Je(e);
      break;
    case "String":
      a.t = "s", a.r = vf(ze(e)), a.v = e.indexOf("<") > -1 ? ze(r || e).replace(/<[^<>]*>/g, "") : a.r;
      break;
    case "DateTime":
      e.slice(-1) != "Z" && (e += "Z"), a.v = or(fr(e, l), l), a.v !== a.v && (a.v = ze(e)), (!d || d == "General") && (d = "yyyy-mm-dd");
    case "Number":
      a.v === void 0 && (a.v = +e), a.t || (a.t = "n");
      break;
    case "Error":
      a.t = "e", a.v = Nr[e], o.cellText !== !1 && (a.w = e);
      break;
    default:
      e == "" && r == "" ? a.t = "z" : (a.t = "s", a.v = vf(r || e));
      break;
  }
  if (N_(a, d, o, l), o.cellFormula !== !1)
    if (a.Formula) {
      var v = ze(a.Formula);
      v.charCodeAt(0) == 61 && (v = v.slice(1)), a.f = la(v, n), delete a.Formula, a.ArrayRange == "RC" ? a.F = la("RC:RC", n) : a.ArrayRange && (a.F = la(a.ArrayRange, n), c.push([Ge(a.F), a.F]));
    } else
      for (g = 0; g < c.length; ++g)
        n.r >= c[g][0].s.r && n.r <= c[g][0].e.r && n.c >= c[g][0].s.c && n.c <= c[g][0].e.c && (a.F = c[g][1]);
  o.cellStyles && (m.forEach(function(w) {
    !h.patternType && w.patternType && (h.patternType = w.patternType);
  }), a.s = h), a.StyleID !== void 0 && (a.ixfe = a.StyleID);
}
function P_(e) {
  return bs.indexOf("_xlnm." + e) > -1 ? "_xlnm." + e : e;
}
function L_(e) {
  e.t = e.v || "", e.t = e.t.replace(/\r\n/g, `
`).replace(/\r/g, `
`), e.v = e.w = e.ixfe = void 0;
}
function Xi(e, r) {
  var t = r || {};
  ka();
  var a = Ca(gi(e));
  (t.type == "binary" || t.type == "array" || t.type == "base64") && (typeof Be < "u" ? a = Be.utils.decode(65001, qn(a)) : a = Qe(a));
  var n = a.slice(0, 1024).toLowerCase(), i = !1;
  if (n = n.replace(/".*?"/g, ""), (n.indexOf(">") & 1023) > Math.min(n.indexOf(",") & 1023, n.indexOf(";") & 1023)) {
    var s = je(t);
    return s.type = "string", Ba.to_workbook(a, s);
  }
  if (n.indexOf("<?xml") == -1 && ["html", "table", "head", "meta", "script", "style", "div"].forEach(function(xe) {
    n.indexOf("<" + xe) >= 0 && (i = !0);
  }), i) return h4(a, t);
  sn = {
    "General Number": "General",
    "General Date": Fe[22],
    "Long Date": "dddd, mmmm dd, yyyy",
    "Medium Date": Fe[15],
    "Short Date": Fe[14],
    "Long Time": Fe[19],
    "Medium Time": Fe[18],
    "Short Time": Fe[20],
    Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    Fixed: Fe[2],
    Standard: Fe[4],
    Percent: Fe[10],
    Scientific: Fe[11],
    "Yes/No": '"Yes";"Yes";"No";@',
    "True/False": '"True";"True";"False";@',
    "On/Off": '"Yes";"Yes";"No";@'
  };
  var f, c = [], o, l = vr(), d = [], u = {}, h = "";
  t.dense && (u["!data"] = []);
  var m = {}, g = {}, p = gt('<Data ss:Type="String">'), v = 0, w = 0, _ = 0, T = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, b = {}, B = {}, y = "", O = 0, R = [], P = {}, L = {}, U = 0, K = [], me = [], de = {}, ae = [], he, q = !1, ge = [], z = [], be = {}, oe = 0, fe = 0, Q = { Sheets: [], WBProps: { date1904: !1 } }, _e = {};
  Tr.lastIndex = 0, a = Fn(a, "<!--", "-->");
  for (var Ee = ""; f = Tr.exec(a); ) switch (f[3] = (Ee = f[3]).toLowerCase()) {
    case "data":
      if (Ee == "data") {
        if (f[1] === "/") {
          if ((o = c.pop())[0] !== f[3]) throw new Error("Bad state: " + o.join("|"));
        } else f[0].charAt(f[0].length - 2) !== "/" && c.push([f[3], !0]);
        break;
      }
      if (c[c.length - 1][1]) break;
      f[1] === "/" ? D_(a.slice(v, f.index), y, p, c[c.length - 1][0] == /*"Comment"*/
      "comment" ? de : m, { c: w, r: _ }, b, ae[w], g, ge, t, Q.WBProps.date1904) : (y = "", p = gt(f[0]), v = f.index + f[0].length);
      break;
    case "cell":
      if (f[1] === "/")
        if (me.length > 0 && (m.c = me), (!t.sheetRows || t.sheetRows > _) && m.v !== void 0 && (t.dense ? (u["!data"][_] || (u["!data"][_] = []), u["!data"][_][w] = m) : u[Ne(w) + Xe(_)] = m), m.HRef && (m.l = { Target: ze(m.HRef) }, m.HRefScreenTip && (m.l.Tooltip = m.HRefScreenTip), delete m.HRef, delete m.HRefScreenTip), (m.MergeAcross || m.MergeDown) && (oe = w + (parseInt(m.MergeAcross, 10) | 0), fe = _ + (parseInt(m.MergeDown, 10) | 0), (oe > w || fe > _) && R.push({ s: { c: w, r: _ }, e: { c: oe, r: fe } })), !t.sheetStubs)
          m.MergeAcross ? w = oe + 1 : ++w;
        else if (m.MergeAcross || m.MergeDown) {
          for (var Se = w; Se <= oe; ++Se)
            for (var A = _; A <= fe; ++A)
              (Se > w || A > _) && (t.dense ? (u["!data"][A] || (u["!data"][A] = []), u["!data"][A][Se] = { t: "z" }) : u[Ne(Se) + Xe(A)] = { t: "z" });
          w = oe + 1;
        } else ++w;
      else
        m = C_(f[0]), m.Index && (w = +m.Index - 1), w < T.s.c && (T.s.c = w), w > T.e.c && (T.e.c = w), f[0].slice(-2) === "/>" && ++w, me = [];
      break;
    case "row":
      f[1] === "/" || f[0].slice(-2) === "/>" ? (_ < T.s.r && (T.s.r = _), _ > T.e.r && (T.e.r = _), f[0].slice(-2) === "/>" && (g = gt(f[0]), g.Index && (_ = +g.Index - 1)), w = 0, ++_) : (g = gt(f[0]), g.Index && (_ = +g.Index - 1), be = {}, (g.AutoFitHeight == "0" || g.Height) && (be.hpx = parseInt(g.Height, 10), be.hpt = _n(be.hpx), z[_] = be), g.Hidden == "1" && (be.hidden = !0, z[_] = be));
      break;
    case "worksheet":
      if (f[1] === "/") {
        if ((o = c.pop())[0] !== f[3]) throw new Error("Bad state: " + o.join("|"));
        if (T.s.r <= T.e.r && T.s.c <= T.e.c && (u["!ref"] = Me(T), t.sheetRows && t.sheetRows <= T.e.r && (u["!fullref"] = u["!ref"], T.e.r = t.sheetRows - 1, u["!ref"] = Me(T))), R.length && (u["!merges"] = R), ae.length > 0 && (u["!cols"] = ae), z.length > 0 && (u["!rows"] = z), Tc(h)) {
          if (t.WTF) throw new Error("Bad sheet name: " + h);
        } else
          d.push(h), ar(l, h, u);
      } else
        T = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, _ = w = 0, c.push([f[3], !1]), o = gt(f[0]), h = ze(o.Name), u = {}, t.dense && (u["!data"] = []), R = [], ge = [], z = [], _e = { name: h, Hidden: 0 }, Q.Sheets.push(_e);
      break;
    case "table":
      if (f[1] === "/") {
        if ((o = c.pop())[0] !== f[3]) throw new Error("Bad state: " + o.join("|"));
      } else {
        if (f[0].slice(-2) == "/>") break;
        c.push([f[3], !1]), ae = [], q = !1;
      }
      break;
    case "style":
      f[1] === "/" ? R_(b, B, t) : B = gt(f[0]);
      break;
    case "numberformat":
      B.nf = ze(gt(f[0]).Format || "General"), sn[B.nf] && (B.nf = sn[B.nf]);
      for (var M = 0; M != 392 && Fe[M] != B.nf; ++M) ;
      if (M == 392) {
        for (M = 57; M != 392; ++M) if (Fe[M] == null) {
          jt(B.nf, M);
          break;
        }
      }
      break;
    case "column":
      if (c[c.length - 1][0] !== /*'Table'*/
      "table" || f[1] === "/") break;
      if (he = gt(f[0]), he.Hidden && (he.hidden = !0, delete he.Hidden), he.Width && (he.wpx = parseInt(he.Width, 10)), !q && he.wpx > 10) {
        q = !0, Xr = Ao;
        for (var D = 0; D < ae.length; ++D) ae[D] && Gt(ae[D]);
      }
      q && Gt(he), ae[he.Index - 1 || ae.length] = he;
      for (var N = 0; N < +he.Span; ++N) ae[ae.length] = je(he);
      break;
    case "namedrange":
      if (f[1] === "/") break;
      Q.Names || (Q.Names = []);
      var j = ke(f[0]), x = {
        Name: P_(j.Name),
        Ref: la(j.RefersTo.slice(1), { r: 0, c: 0 })
      };
      Q.Sheets.length > 0 && (x.Sheet = Q.Sheets.length - 1), Q.Names.push(x);
      break;
    case "namedcell":
      break;
    case "b":
      break;
    case "i":
      break;
    case "u":
      break;
    case "s":
      break;
    case "em":
      break;
    case "h2":
      break;
    case "h3":
      break;
    case "sub":
      break;
    case "sup":
      break;
    case "span":
      break;
    case "alignment":
      break;
    case "borders":
      break;
    case "border":
      break;
    case "font":
      if (f[0].slice(-2) === "/>") break;
      f[1] === "/" ? y += a.slice(O, f.index) : O = f.index + f[0].length;
      break;
    case "interior":
      if (!t.cellStyles) break;
      B.Interior = gt(f[0]);
      break;
    case "protection":
      break;
    case "author":
    case "title":
    case "description":
    case "created":
    case "keywords":
    case "subject":
    case "category":
    case "company":
    case "lastauthor":
    case "lastsaved":
    case "lastprinted":
    case "version":
    case "revision":
    case "totaltime":
    case "hyperlinkbase":
    case "manager":
    case "contentstatus":
    case "identifier":
    case "language":
    case "appname":
      if (f[0].slice(-2) === "/>") break;
      f[1] === "/" ? Zu(P, Ee, a.slice(U, f.index)) : U = f.index + f[0].length;
      break;
    case "paragraphs":
      break;
    case "styles":
    case "workbook":
      if (f[1] === "/") {
        if ((o = c.pop())[0] !== f[3]) throw new Error("Bad state: " + o.join("|"));
      } else c.push([f[3], !1]);
      break;
    case "comment":
      if (f[1] === "/") {
        if ((o = c.pop())[0] !== f[3]) throw new Error("Bad state: " + o.join("|"));
        L_(de), me.push(de);
      } else
        c.push([f[3], !1]), o = gt(f[0]), Je(o.ShowAlways || "0") || (me.hidden = !0), de = { a: o.Author };
      break;
    case "autofilter":
      if (f[1] === "/") {
        if ((o = c.pop())[0] !== f[3]) throw new Error("Bad state: " + o.join("|"));
      } else if (f[0].charAt(f[0].length - 2) !== "/") {
        var ne = gt(f[0]);
        u["!autofilter"] = { ref: la(ne.Range).replace(/\$/g, "") }, c.push([f[3], !0]);
      }
      break;
    case "name":
      break;
    case "datavalidation":
      if (f[1] === "/") {
        if ((o = c.pop())[0] !== f[3]) throw new Error("Bad state: " + o.join("|"));
      } else
        f[0].charAt(f[0].length - 2) !== "/" && c.push([f[3], !0]);
      break;
    case "pixelsperinch":
      break;
    case "componentoptions":
    case "documentproperties":
    case "customdocumentproperties":
    case "officedocumentsettings":
    case "pivottable":
    case "pivotcache":
    case "names":
    case "mapinfo":
    case "pagebreaks":
    case "querytable":
    case "sorting":
    case "schema":
    case "conditionalformatting":
    case "smarttagtype":
    case "smarttags":
    case "excelworkbook":
    case "workbookoptions":
    case "worksheetoptions":
      if (f[1] === "/") {
        if ((o = c.pop())[0] !== f[3]) throw new Error("Bad state: " + o.join("|"));
      } else f[0].charAt(f[0].length - 2) !== "/" && c.push([f[3], !0]);
      break;
    case "null":
      break;
    default:
      if (c.length == 0 && f[3] == "document" || c.length == 0 && f[3] == "uof") return nc(a, t);
      var ve = !0;
      switch (c[c.length - 1][0]) {
        case "officedocumentsettings":
          switch (f[3]) {
            case "allowpng":
              break;
            case "removepersonalinformation":
              break;
            case "downloadcomponents":
              break;
            case "locationofcomponents":
              break;
            case "colors":
              break;
            case "color":
              break;
            case "index":
              break;
            case "rgb":
              break;
            case "targetscreensize":
              break;
            case "readonlyrecommended":
              break;
            default:
              ve = !1;
          }
          break;
        case "componentoptions":
          switch (f[3]) {
            case "toolbar":
              break;
            case "hideofficelogo":
              break;
            case "spreadsheetautofit":
              break;
            case "label":
              break;
            case "caption":
              break;
            case "maxheight":
              break;
            case "maxwidth":
              break;
            case "nextsheetnumber":
              break;
            default:
              ve = !1;
          }
          break;
        case "excelworkbook":
          switch (f[3]) {
            case "date1904":
              Q.WBProps.date1904 = !0;
              break;
            case "hidehorizontalscrollbar":
              break;
            case "hideverticalscrollbar":
              break;
            case "hideworkbooktabs":
              break;
            case "windowheight":
              break;
            case "windowwidth":
              break;
            case "windowtopx":
              break;
            case "windowtopy":
              break;
            case "tabratio":
              break;
            case "protectstructure":
              break;
            case "protectwindow":
              break;
            case "protectwindows":
              break;
            case "activesheet":
              break;
            case "displayinknotes":
              break;
            case "firstvisiblesheet":
              break;
            case "supbook":
              break;
            case "sheetname":
              break;
            case "sheetindex":
              break;
            case "sheetindexfirst":
              break;
            case "sheetindexlast":
              break;
            case "dll":
              break;
            case "acceptlabelsinformulas":
              break;
            case "donotsavelinkvalues":
              break;
            case "iteration":
              break;
            case "maxiterations":
              break;
            case "maxchange":
              break;
            case "path":
              break;
            case "xct":
              break;
            case "count":
              break;
            case "selectedsheets":
              break;
            case "calculation":
              break;
            case "uncalced":
              break;
            case "startupprompt":
              break;
            case "crn":
              break;
            case "externname":
              break;
            case "formula":
              break;
            case "colfirst":
              break;
            case "collast":
              break;
            case "wantadvise":
              break;
            case "boolean":
              break;
            case "error":
              break;
            case "text":
              break;
            case "ole":
              break;
            case "noautorecover":
              break;
            case "publishobjects":
              break;
            case "donotcalculatebeforesave":
              break;
            case "number":
              break;
            case "refmoder1c1":
              break;
            case "embedsavesmarttags":
              break;
            default:
              ve = !1;
          }
          break;
        case "workbookoptions":
          switch (f[3]) {
            case "owcversion":
              break;
            case "height":
              break;
            case "width":
              break;
            default:
              ve = !1;
          }
          break;
        case "worksheetoptions":
          switch (f[3]) {
            case "visible":
              if (f[0].slice(-2) !== "/>") if (f[1] === "/") switch (a.slice(U, f.index)) {
                case "SheetHidden":
                  _e.Hidden = 1;
                  break;
                case "SheetVeryHidden":
                  _e.Hidden = 2;
                  break;
              }
              else U = f.index + f[0].length;
              break;
            case "header":
              u["!margins"] || ua(u["!margins"] = {}, "xlml"), isNaN(+ke(f[0]).Margin) || (u["!margins"].header = +ke(f[0]).Margin);
              break;
            case "footer":
              u["!margins"] || ua(u["!margins"] = {}, "xlml"), isNaN(+ke(f[0]).Margin) || (u["!margins"].footer = +ke(f[0]).Margin);
              break;
            case "pagemargins":
              var se = ke(f[0]);
              u["!margins"] || ua(u["!margins"] = {}, "xlml"), isNaN(+se.Top) || (u["!margins"].top = +se.Top), isNaN(+se.Left) || (u["!margins"].left = +se.Left), isNaN(+se.Right) || (u["!margins"].right = +se.Right), isNaN(+se.Bottom) || (u["!margins"].bottom = +se.Bottom);
              break;
            case "displayrighttoleft":
              Q.Views || (Q.Views = []), Q.Views[0] || (Q.Views[0] = {}), Q.Views[0].RTL = !0;
              break;
            case "freezepanes":
              break;
            case "frozennosplit":
              break;
            case "splithorizontal":
            case "splitvertical":
              break;
            case "donotdisplaygridlines":
              break;
            case "activerow":
              break;
            case "activecol":
              break;
            case "toprowbottompane":
              break;
            case "leftcolumnrightpane":
              break;
            case "unsynced":
              break;
            case "print":
              break;
            case "printerrors":
              break;
            case "panes":
              break;
            case "scale":
              break;
            case "pane":
              break;
            case "number":
              break;
            case "layout":
              break;
            case "pagesetup":
              break;
            case "selected":
              break;
            case "protectobjects":
              break;
            case "enableselection":
              break;
            case "protectscenarios":
              break;
            case "validprinterinfo":
              break;
            case "horizontalresolution":
              break;
            case "verticalresolution":
              break;
            case "numberofcopies":
              break;
            case "activepane":
              break;
            case "toprowvisible":
              break;
            case "leftcolumnvisible":
              break;
            case "fittopage":
              break;
            case "rangeselection":
              break;
            case "papersizeindex":
              break;
            case "pagelayoutzoom":
              break;
            case "pagebreakzoom":
              break;
            case "filteron":
              break;
            case "fitwidth":
              break;
            case "fitheight":
              break;
            case "commentslayout":
              break;
            case "zoom":
              break;
            case "lefttoright":
              break;
            case "gridlines":
              break;
            case "allowsort":
              break;
            case "allowfilter":
              break;
            case "allowinsertrows":
              break;
            case "allowdeleterows":
              break;
            case "allowinsertcols":
              break;
            case "allowdeletecols":
              break;
            case "allowinserthyperlinks":
              break;
            case "allowformatcells":
              break;
            case "allowsizecols":
              break;
            case "allowsizerows":
              break;
            case "nosummaryrowsbelowdetail":
              u["!outline"] || (u["!outline"] = {}), u["!outline"].above = !0;
              break;
            case "tabcolorindex":
              break;
            case "donotdisplayheadings":
              break;
            case "showpagelayoutzoom":
              break;
            case "nosummarycolumnsrightdetail":
              u["!outline"] || (u["!outline"] = {}), u["!outline"].left = !0;
              break;
            case "blackandwhite":
              break;
            case "donotdisplayzeros":
              break;
            case "displaypagebreak":
              break;
            case "rowcolheadings":
              break;
            case "donotdisplayoutline":
              break;
            case "noorientation":
              break;
            case "allowusepivottables":
              break;
            case "zeroheight":
              break;
            case "viewablerange":
              break;
            case "selection":
              break;
            case "protectcontents":
              break;
            default:
              ve = !1;
          }
          break;
        case "pivottable":
        case "pivotcache":
          switch (f[3]) {
            case "immediateitemsondrop":
              break;
            case "showpagemultipleitemlabel":
              break;
            case "compactrowindent":
              break;
            case "location":
              break;
            case "pivotfield":
              break;
            case "orientation":
              break;
            case "layoutform":
              break;
            case "layoutsubtotallocation":
              break;
            case "layoutcompactrow":
              break;
            case "position":
              break;
            case "pivotitem":
              break;
            case "datatype":
              break;
            case "datafield":
              break;
            case "sourcename":
              break;
            case "parentfield":
              break;
            case "ptlineitems":
              break;
            case "ptlineitem":
              break;
            case "countofsameitems":
              break;
            case "item":
              break;
            case "itemtype":
              break;
            case "ptsource":
              break;
            case "cacheindex":
              break;
            case "consolidationreference":
              break;
            case "filename":
              break;
            case "reference":
              break;
            case "nocolumngrand":
              break;
            case "norowgrand":
              break;
            case "blanklineafteritems":
              break;
            case "hidden":
              break;
            case "subtotal":
              break;
            case "basefield":
              break;
            case "mapchilditems":
              break;
            case "function":
              break;
            case "refreshonfileopen":
              break;
            case "printsettitles":
              break;
            case "mergelabels":
              break;
            case "defaultversion":
              break;
            case "refreshname":
              break;
            case "refreshdate":
              break;
            case "refreshdatecopy":
              break;
            case "versionlastrefresh":
              break;
            case "versionlastupdate":
              break;
            case "versionupdateablemin":
              break;
            case "versionrefreshablemin":
              break;
            case "calculation":
              break;
            default:
              ve = !1;
          }
          break;
        case "pagebreaks":
          switch (f[3]) {
            case "colbreaks":
              break;
            case "colbreak":
              break;
            case "rowbreaks":
              break;
            case "rowbreak":
              break;
            case "colstart":
              break;
            case "colend":
              break;
            case "rowend":
              break;
            default:
              ve = !1;
          }
          break;
        case "autofilter":
          switch (f[3]) {
            case "autofiltercolumn":
              break;
            case "autofiltercondition":
              break;
            case "autofilterand":
              break;
            case "autofilteror":
              break;
            default:
              ve = !1;
          }
          break;
        case "querytable":
          switch (f[3]) {
            case "id":
              break;
            case "autoformatfont":
              break;
            case "autoformatpattern":
              break;
            case "querysource":
              break;
            case "querytype":
              break;
            case "enableredirections":
              break;
            case "refreshedinxl9":
              break;
            case "urlstring":
              break;
            case "htmltables":
              break;
            case "connection":
              break;
            case "commandtext":
              break;
            case "refreshinfo":
              break;
            case "notitles":
              break;
            case "nextid":
              break;
            case "columninfo":
              break;
            case "overwritecells":
              break;
            case "donotpromptforfile":
              break;
            case "textwizardsettings":
              break;
            case "source":
              break;
            case "number":
              break;
            case "decimal":
              break;
            case "thousandseparator":
              break;
            case "trailingminusnumbers":
              break;
            case "formatsettings":
              break;
            case "fieldtype":
              break;
            case "delimiters":
              break;
            case "tab":
              break;
            case "comma":
              break;
            case "autoformatname":
              break;
            case "versionlastedit":
              break;
            case "versionlastrefresh":
              break;
            default:
              ve = !1;
          }
          break;
        case "datavalidation":
          switch (f[3]) {
            case "range":
              break;
            case "type":
              break;
            case "min":
              break;
            case "max":
              break;
            case "sort":
              break;
            case "descending":
              break;
            case "order":
              break;
            case "casesensitive":
              break;
            case "value":
              break;
            case "errorstyle":
              break;
            case "errormessage":
              break;
            case "errortitle":
              break;
            case "inputmessage":
              break;
            case "inputtitle":
              break;
            case "combohide":
              break;
            case "inputhide":
              break;
            case "condition":
              break;
            case "qualifier":
              break;
            case "useblank":
              break;
            case "value1":
              break;
            case "value2":
              break;
            case "format":
              break;
            case "cellrangelist":
              break;
            default:
              ve = !1;
          }
          break;
        case "sorting":
        case "conditionalformatting":
          switch (f[3]) {
            case "range":
              break;
            case "type":
              break;
            case "min":
              break;
            case "max":
              break;
            case "sort":
              break;
            case "descending":
              break;
            case "order":
              break;
            case "casesensitive":
              break;
            case "value":
              break;
            case "errorstyle":
              break;
            case "errormessage":
              break;
            case "errortitle":
              break;
            case "cellrangelist":
              break;
            case "inputmessage":
              break;
            case "inputtitle":
              break;
            case "combohide":
              break;
            case "inputhide":
              break;
            case "condition":
              break;
            case "qualifier":
              break;
            case "useblank":
              break;
            case "value1":
              break;
            case "value2":
              break;
            case "format":
              break;
            default:
              ve = !1;
          }
          break;
        case "mapinfo":
        case "schema":
        case "data":
          switch (f[3]) {
            case "map":
              break;
            case "entry":
              break;
            case "range":
              break;
            case "xpath":
              break;
            case "field":
              break;
            case "xsdtype":
              break;
            case "filteron":
              break;
            case "aggregate":
              break;
            case "elementtype":
              break;
            case "attributetype":
              break;
            case "schema":
            case "element":
            case "complextype":
            case "datatype":
            case "all":
            case "attribute":
            case "extends":
              break;
            case "row":
              break;
            default:
              ve = !1;
          }
          break;
        case "smarttags":
          break;
        default:
          ve = !1;
          break;
      }
      if (ve || f[3].match(/!\[CDATA/)) break;
      if (!c[c.length - 1][1]) throw "Unrecognized tag: " + f[3] + "|" + c.join("|");
      if (c[c.length - 1][0] === /*'CustomDocumentProperties'*/
      "customdocumentproperties") {
        if (f[0].slice(-2) === "/>") break;
        f[1] === "/" ? O_(L, Ee, K, a.slice(U, f.index)) : (K = f, U = f.index + f[0].length);
        break;
      }
      if (t.WTF) throw "Unrecognized tag: " + f[3] + "|" + c.join("|");
  }
  var Ce = {};
  return !t.bookSheets && !t.bookProps && (Ce.Sheets = l), Ce.SheetNames = d, Ce.Workbook = Q, Ce.SSF = je(Fe), Ce.Props = P, Ce.Custprops = L, Ce.bookType = "xlml", Ce;
}
function ts(e, r) {
  switch (Xs(r = r || {}), r.type || "base64") {
    case "base64":
      return Xi(st(e), r);
    case "binary":
    case "buffer":
    case "file":
      return Xi(e, r);
    case "array":
      return Xi(bt(e), r);
  }
}
function Jo(e, r) {
  var t = [];
  return e.Props && t.push(Ju(e.Props, r)), e.Custprops && t.push(qu(e.Props, e.Custprops)), t.join("");
}
function qo(e) {
  return (((e || {}).Workbook || {}).WBProps || {}).date1904 ? '<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"><Date1904/></ExcelWorkbook>' : "";
}
function Qo(e, r) {
  var t = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
  return r.cellXfs.forEach(function(a, n) {
    var i = [];
    i.push(te("NumberFormat", null, { "ss:Format": Le(Fe[a.numFmtId]) }));
    var s = (
      /*::(*/
      { "ss:ID": "s" + (21 + n) }
    );
    t.push(te("Style", i.join(""), s));
  }), te("Styles", t.join(""));
}
function el(e) {
  return te("NamedRange", null, { "ss:Name": e.Name.slice(0, 6) == "_xlnm." ? e.Name.slice(6) : e.Name, "ss:RefersTo": "=" + bn(e.Ref, { r: 0, c: 0 }) });
}
function rl(e) {
  if (!((e || {}).Workbook || {}).Names) return "";
  for (var r = e.Workbook.Names, t = [], a = 0; a < r.length; ++a) {
    var n = r[a];
    n.Sheet == null && (n.Name.match(/^_xlfn\./) || t.push(el(n)));
  }
  return te("Names", t.join(""));
}
function tl(e, r, t, a) {
  if (!e || !((a || {}).Workbook || {}).Names) return "";
  for (var n = a.Workbook.Names, i = [], s = 0; s < n.length; ++s) {
    var f = n[s];
    f.Sheet == t && (f.Name.match(/^_xlfn\./) || i.push(el(f)));
  }
  return i.join("");
}
function al(e, r, t, a) {
  if (!e) return "";
  var n = [];
  if (e["!margins"] && (n.push("<PageSetup>"), e["!margins"].header && n.push(te("Header", null, { "x:Margin": e["!margins"].header })), e["!margins"].footer && n.push(te("Footer", null, { "x:Margin": e["!margins"].footer })), n.push(te("PageMargins", null, {
    "x:Bottom": e["!margins"].bottom || "0.75",
    "x:Left": e["!margins"].left || "0.7",
    "x:Right": e["!margins"].right || "0.7",
    "x:Top": e["!margins"].top || "0.75"
  })), n.push("</PageSetup>")), a && a.Workbook && a.Workbook.Sheets && a.Workbook.Sheets[t])
    if (a.Workbook.Sheets[t].Hidden) n.push(te("Visible", a.Workbook.Sheets[t].Hidden == 1 ? "SheetHidden" : "SheetVeryHidden", {}));
    else {
      for (var i = 0; i < t && !(a.Workbook.Sheets[i] && !a.Workbook.Sheets[i].Hidden); ++i) ;
      i == t && n.push("<Selected/>");
    }
  return ((((a || {}).Workbook || {}).Views || [])[0] || {}).RTL && n.push("<DisplayRightToLeft/>"), e["!protect"] && (n.push(Rr("ProtectContents", "True")), e["!protect"].objects && n.push(Rr("ProtectObjects", "True")), e["!protect"].scenarios && n.push(Rr("ProtectScenarios", "True")), e["!protect"].selectLockedCells != null && !e["!protect"].selectLockedCells ? n.push(Rr("EnableSelection", "NoSelection")) : e["!protect"].selectUnlockedCells != null && !e["!protect"].selectUnlockedCells && n.push(Rr("EnableSelection", "UnlockedCells")), [
    ["formatCells", "AllowFormatCells"],
    ["formatColumns", "AllowSizeCols"],
    ["formatRows", "AllowSizeRows"],
    ["insertColumns", "AllowInsertCols"],
    ["insertRows", "AllowInsertRows"],
    ["insertHyperlinks", "AllowInsertHyperlinks"],
    ["deleteColumns", "AllowDeleteCols"],
    ["deleteRows", "AllowDeleteRows"],
    ["sort", "AllowSort"],
    ["autoFilter", "AllowFilter"],
    ["pivotTables", "AllowUsePivotTables"]
  ].forEach(function(s) {
    e["!protect"][s[0]] && n.push("<" + s[1] + "/>");
  })), n.length == 0 ? "" : te("WorksheetOptions", n.join(""), { xmlns: Sr.x });
}
function M_(e) {
  return e.map(function(r) {
    var t = ru(r.t || ""), a = te("ss:Data", t, { xmlns: "http://www.w3.org/TR/REC-html40" }), n = vr();
    return r.a && (n["ss:Author"] = r.a), e.hidden || (n["ss:ShowAlways"] = "1"), te("Comment", a, n);
  }).join("");
}
function nl(e, r, t, a, n, i, s) {
  if (!e || e.v == null && e.f == null) return "";
  var f = {};
  if (e.f && (f["ss:Formula"] = "=" + Le(bn(e.f, s))), e.F && e.F.slice(0, r.length) == r) {
    var c = er(e.F.slice(r.length + 1));
    f["ss:ArrayRange"] = "RC:R" + (c.r == s.r ? "" : "[" + (c.r - s.r) + "]") + "C" + (c.c == s.c ? "" : "[" + (c.c - s.c) + "]");
  }
  if (e.l && e.l.Target && (f["ss:HRef"] = Le(e.l.Target), e.l.Tooltip && (f["x:HRefScreenTip"] = Le(e.l.Tooltip))), t["!merges"])
    for (var o = t["!merges"], l = 0; l != o.length; ++l)
      o[l].s.c != s.c || o[l].s.r != s.r || (o[l].e.c > o[l].s.c && (f["ss:MergeAcross"] = o[l].e.c - o[l].s.c), o[l].e.r > o[l].s.r && (f["ss:MergeDown"] = o[l].e.r - o[l].s.r));
  var d = "", u = "";
  switch (e.t) {
    case "z":
      if (!a.sheetStubs) return "";
      break;
    case "n":
      isFinite(e.v) ? (d = "Number", u = String(e.v)) : (d = "Error", u = Ir[isNaN(e.v) ? 36 : 7]);
      break;
    case "b":
      d = "Boolean", u = e.v ? "1" : "0";
      break;
    case "e":
      d = "Error", u = Ir[e.v];
      break;
    case "d":
      d = "DateTime", u = new Date(e.v).toISOString(), e.z == null && (e.z = e.z || Fe[14]);
      break;
    case "s":
      d = "String", u = eu(e.v || "");
      break;
  }
  var h = Nt(a.cellXfs, e, a);
  f["ss:StyleID"] = "s" + (21 + h), f["ss:Index"] = s.c + 1;
  var m = e.v != null ? u : "", g = e.t == "z" ? "" : '<Data ss:Type="' + d + '">' + m + "</Data>";
  return (e.c || []).length > 0 && (g += M_(e.c)), te("Cell", g, f);
}
function il(e, r) {
  var t = '<Row ss:Index="' + (e + 1) + '"';
  return r && (r.hpt && !r.hpx && (r.hpx = Wa(r.hpt)), r.hpx && (t += ' ss:AutoFitHeight="0" ss:Height="' + r.hpx + '"'), r.hidden && (t += ' ss:Hidden="1"')), t + ">";
}
function B_(e, r, t, a) {
  if (!e["!ref"]) return "";
  var n = Ge(e["!ref"]), i = e["!merges"] || [], s = 0, f = [];
  e["!cols"] && e["!cols"].forEach(function(p, v) {
    Gt(p);
    var w = !!p.width, _ = Dn(v, p), T = { "ss:Index": v + 1 };
    w && (T["ss:Width"] = Ua(_.width)), p.hidden && (T["ss:Hidden"] = "1"), f.push(te("Column", null, T));
  });
  for (var c = e["!data"] != null, o = { r: 0, c: 0 }, l = n.s.r; l <= n.e.r; ++l) {
    var d = [il(l, (e["!rows"] || [])[l])];
    o.r = l;
    for (var u = n.s.c; u <= n.e.c; ++u) {
      o.c = u;
      var h = !1;
      for (s = 0; s != i.length; ++s)
        if (!(i[s].s.c > u) && !(i[s].s.r > l) && !(i[s].e.c < u) && !(i[s].e.r < l)) {
          (i[s].s.c != u || i[s].s.r != l) && (h = !0);
          break;
        }
      if (!h) {
        var m = Ne(u) + Xe(l), g = c ? (e["!data"][l] || [])[u] : e[m];
        d.push(nl(g, m, e, r, t, a, o));
      }
    }
    d.push("</Row>"), d.length > 2 && f.push(d.join(""));
  }
  return f.join("");
}
function U_(e, r, t) {
  var a = [], n = t.SheetNames[e], i = t.Sheets[n], s = i ? tl(i, r, e, t) : "";
  return s.length > 0 && a.push("<Names>" + s + "</Names>"), s = i ? B_(i, r, e, t) : "", s.length > 0 && a.push("<Table>" + s + "</Table>"), a.push(al(i, r, e, t)), i && i["!autofilter"] && a.push('<AutoFilter x:Range="' + bn(La(i["!autofilter"].ref), { r: 0, c: 0 }) + '" xmlns="urn:schemas-microsoft-com:office:excel"></AutoFilter>'), a.join("");
}
function W_(e, r) {
  r || (r = {}), e.SSF || (e.SSF = je(Fe)), e.SSF && (ka(), Ha(e.SSF), r.revssf = An(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF, r.cellXfs = [], Nt(r.cellXfs, {}, { revssf: { General: 0 } }));
  var t = [];
  t.push(Jo(e, r)), t.push(qo(e)), t.push(""), t.push(rl(e));
  for (var a = 0; a < e.SheetNames.length; ++a)
    t.push(te("Worksheet", U_(a, r, e), { "ss:Name": Le(e.SheetNames[a]) }));
  return t[2] = Qo(e, r), hr + te("Workbook", t.join(""), {
    xmlns: Sr.ss,
    "xmlns:o": Sr.o,
    "xmlns:x": Sr.x,
    "xmlns:ss": Sr.ss,
    "xmlns:dt": Sr.dt,
    "xmlns:html": Sr.html
  });
}
function H_(e) {
  var r = {}, t = e.content;
  if (t.l = 28, r.AnsiUserType = t.read_shift(0, "lpstr-ansi"), r.AnsiClipboardFormat = Ou(t), t.length - t.l <= 4) return r;
  var a = t.read_shift(4);
  if (a == 0 || a > 40 || (t.l -= 4, r.Reserved1 = t.read_shift(0, "lpstr-ansi"), t.length - t.l <= 4) || (a = t.read_shift(4), a !== 1907505652) || (r.UnicodeClipboardFormat = Nu(t), a = t.read_shift(4), a == 0 || a > 40)) return r;
  t.l -= 4, r.Reserved2 = t.read_shift(0, "lpwstr");
}
var X_ = [60, 1084, 2066, 2165, 2175];
function V_(e, r, t, a, n) {
  var i = a, s = [], f = t.slice(t.l, t.l + i);
  if (n && n.enc && n.enc.insitu && f.length > 0) switch (e) {
    case 9:
    case 521:
    case 1033:
    case 2057:
    case 47:
    case 405:
    case 225:
    case 406:
    case 312:
    case 404:
    case 10:
      break;
    case 133:
      break;
    default:
      n.enc.insitu(f);
  }
  s.push(f), t.l += i;
  for (var c = Ut(t, t.l), o = as[c], l = 0; o != null && X_.indexOf(c) > -1; )
    i = Ut(t, t.l + 2), l = t.l + 4, c == 2066 ? l += 4 : (c == 2165 || c == 2175) && (l += 12), f = t.slice(l, t.l + 4 + i), s.push(f), t.l += 4 + i, o = as[c = Ut(t, t.l)];
  var d = mr(s);
  yr(d, 0);
  var u = 0;
  d.lens = [];
  for (var h = 0; h < s.length; ++h)
    d.lens.push(u), u += s[h].length;
  if (d.length < a) throw "XLS Record 0x" + e.toString(16) + " Truncated: " + d.length + " < " + a;
  return r.f(d, d.length, n);
}
function yt(e, r, t) {
  if (e.t !== "z" && e.XF) {
    var a = 0;
    try {
      a = e.z || e.XF.numFmtId || 0, r.cellNF && e.z == null && (e.z = Fe[a]);
    } catch (i) {
      if (r.WTF) throw i;
    }
    if (!r || r.cellText !== !1) try {
      e.t === "e" ? e.w = e.w || Ir[e.v] : a === 0 || a == "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = un(e.v) : e.w = da(e.v) : e.w = at(a, e.v, { date1904: !!t, dateNF: r && r.dateNF });
    } catch (i) {
      if (r.WTF) throw i;
    }
    if (r.cellDates && a && e.t == "n" && ft(Fe[a] || String(a))) {
      var n = At(e.v + (t ? 1462 : 0));
      n && (e.t = "d", e.v = new Date(Date.UTC(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u)));
    }
  }
}
function Yn(e, r, t) {
  return { v: e, ixfe: r, t };
}
function G_(e, r) {
  var t = { opts: {} }, a = vr(), n = {};
  r.dense && (n["!data"] = []);
  var i = {}, s = {}, f = null, c = [], o = "", l = {}, d, u = "", h, m, g, p, v = {}, w = [], _, T, b = [], B = [], y = { Sheets: [], WBProps: { date1904: !1 }, Views: [{}] }, O = {}, R = !1, P = function(pe) {
    return pe < 8 ? fa[pe] : pe < 64 && B[pe - 8] || fa[pe];
  }, L = function(pe, Ye) {
    var gr = pe.XF.data;
    if (!(!gr || !gr.patternType || !Ye || !Ye.cellStyles)) {
      pe.s = {}, pe.s.patternType = gr.patternType;
      var _r;
      (_r = pn(P(gr.icvFore))) && (pe.s.fgColor = { rgb: _r }), (_r = pn(P(gr.icvBack))) && (pe.s.bgColor = { rgb: _r });
    }
  }, U = function(pe, Ye, gr) {
    if (!(!R && oe > 1) && !(gr.sheetRows && pe.r >= gr.sheetRows)) {
      if (gr.cellStyles && Ye.XF && Ye.XF.data && L(Ye, gr), delete Ye.ixfe, delete Ye.XF, d = pe, u = He(pe), (!s || !s.s || !s.e) && (s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), pe.r < s.s.r && (s.s.r = pe.r), pe.c < s.s.c && (s.s.c = pe.c), pe.r + 1 > s.e.r && (s.e.r = pe.r + 1), pe.c + 1 > s.e.c && (s.e.c = pe.c + 1), gr.cellFormula && Ye.f) {
        for (var _r = 0; _r < w.length; ++_r)
          if (!(w[_r][0].s.c > pe.c || w[_r][0].s.r > pe.r) && !(w[_r][0].e.c < pe.c || w[_r][0].e.r < pe.r)) {
            Ye.F = Me(w[_r][0]), (w[_r][0].s.c != pe.c || w[_r][0].s.r != pe.r) && delete Ye.f, Ye.f && (Ye.f = "" + Hr(w[_r][1], s, pe, z, K));
            break;
          }
      }
      gr.dense ? (n["!data"][pe.r] || (n["!data"][pe.r] = []), n["!data"][pe.r][pe.c] = Ye) : n[u] = Ye;
    }
  }, K = {
    enc: !1,
    // encrypted
    sbcch: 0,
    // cch in the preceding SupBook
    snames: [],
    // sheetnames
    sharedf: v,
    // shared formulae by address
    arrayf: w,
    // array formulae array
    rrtabid: [],
    // RRTabId
    lastuser: "",
    // Last User from WriteAccess
    biff: 8,
    // BIFF version
    codepage: 0,
    // CP from CodePage record
    winlocked: 0,
    // fLockWn from WinProtect
    cellStyles: !!r && !!r.cellStyles,
    WTF: !!r && !!r.wtf
  };
  r.password && (K.password = r.password);
  var me, de = [], ae = [], he = [], q = [], ge = !1, z = [];
  z.SheetNames = K.snames, z.sharedf = K.sharedf, z.arrayf = K.arrayf, z.names = [], z.XTI = [];
  var be = 0, oe = 0, fe = 0, Q = [], _e = [], Ee;
  K.codepage = 1200, dt(1200);
  for (var Se = !1; e.l < e.length - 1; ) {
    var A = e.l, M = e.read_shift(2);
    if (M === 0 && be === 10) break;
    var D = e.l === e.length ? 0 : e.read_shift(2), N = as[M];
    if (oe == 0 && [9, 521, 1033, 2057].indexOf(M) == -1) break;
    if (N && N.f) {
      if (r.bookSheets && be === 133 && M !== 133)
        break;
      if (be = M, N.r === 2 || N.r == 12) {
        var j = e.read_shift(2);
        if (D -= 2, !K.enc && j !== M && ((j & 255) << 8 | j >> 8) !== M) throw new Error("rt mismatch: " + j + "!=" + M);
        N.r == 12 && (e.l += 10, D -= 10);
      }
      var x = {};
      if (M === 10 ? x = /*::(*/
      N.f(e, D, K) : x = /*::(*/
      V_(M, N, e, D, K), oe == 0 && [9, 521, 1033, 2057].indexOf(be) === -1) continue;
      switch (M) {
        case 34:
          t.opts.Date1904 = y.WBProps.date1904 = x;
          break;
        case 134:
          t.opts.WriteProtect = !0;
          break;
        case 47:
          if (K.enc || (e.l = 0), K.enc = x, !r.password) throw new Error("File is password-protected");
          if (x.valid == null) throw new Error("Encryption scheme unsupported");
          if (!x.valid) throw new Error("Password is incorrect");
          break;
        case 92:
          K.lastuser = x;
          break;
        case 66:
          var ne = Number(x);
          switch (ne) {
            case 21010:
              ne = 1200;
              break;
            case 32768:
              ne = 1e4;
              break;
            case 32769:
              ne = 1252;
              break;
          }
          dt(K.codepage = ne), Se = !0;
          break;
        case 317:
          K.rrtabid = x;
          break;
        case 25:
          K.winlocked = x;
          break;
        case 439:
          t.opts.RefreshAll = x;
          break;
        case 12:
          t.opts.CalcCount = x;
          break;
        case 16:
          t.opts.CalcDelta = x;
          break;
        case 17:
          t.opts.CalcIter = x;
          break;
        case 13:
          t.opts.CalcMode = x;
          break;
        case 14:
          t.opts.CalcPrecision = x;
          break;
        case 95:
          t.opts.CalcSaveRecalc = x;
          break;
        case 15:
          K.CalcRefMode = x;
          break;
        case 2211:
          t.opts.FullCalc = x;
          break;
        case 129:
          x.fDialog && (n["!type"] = "dialog"), x.fBelow || ((n["!outline"] || (n["!outline"] = {})).above = !0), x.fRight || ((n["!outline"] || (n["!outline"] = {})).left = !0);
          break;
        case 67:
        case 579:
        case 1091:
        case 224:
          b.push(x);
          break;
        case 430:
          z.push([x]), z[z.length - 1].XTI = [];
          break;
        case 35:
        case 547:
          z[z.length - 1].push(x);
          break;
        case 24:
        case 536:
          Ee = {
            Name: x.Name,
            Ref: Hr(x.rgce, s, null, z, K)
          }, x.itab > 0 && (Ee.Sheet = x.itab - 1), z.names.push(Ee), z[0] || (z[0] = [], z[0].XTI = []), z[z.length - 1].push(x), x.Name == "_xlnm._FilterDatabase" && x.itab > 0 && x.rgce && x.rgce[0] && x.rgce[0][0] && x.rgce[0][0][0] == "PtgArea3d" && (_e[x.itab - 1] = { ref: Me(x.rgce[0][0][1][2]) });
          break;
        case 22:
          K.ExternCount = x;
          break;
        case 23:
          z.length == 0 && (z[0] = [], z[0].XTI = []), z[z.length - 1].XTI = z[z.length - 1].XTI.concat(x), z.XTI = z.XTI.concat(x);
          break;
        case 2196:
          if (K.biff < 8) break;
          Ee != null && (Ee.Comment = x[1]);
          break;
        case 18:
          n["!protect"] = x;
          break;
        case 19:
          x !== 0 && K.WTF && console.error("Password verifier: " + x);
          break;
        case 133:
          i[K.biff == 4 ? K.snames.length : x.pos] = x, K.snames.push(x.name);
          break;
        case 10:
          {
            if (--oe ? !R : R) break;
            if (s.e) {
              if (s.e.r > 0 && s.e.c > 0) {
                if (s.e.r--, s.e.c--, n["!ref"] = Me(s), r.sheetRows && r.sheetRows <= s.e.r) {
                  var ve = s.e.r;
                  s.e.r = r.sheetRows - 1, n["!fullref"] = n["!ref"], n["!ref"] = Me(s), s.e.r = ve;
                }
                s.e.r++, s.e.c++;
              }
              de.length > 0 && (n["!merges"] = de), ae.length > 0 && (n["!objects"] = ae), he.length > 0 && (n["!cols"] = he), q.length > 0 && (n["!rows"] = q), y.Sheets.push(O);
            }
            if (o === "") l = n;
            else if (zr(o)) {
              if (r.WTF) throw new Error("Bad sheet name: " + o);
            } else ar(a, o, n);
            n = {}, r.dense && (n["!data"] = []);
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (K.biff === 8 && (K.biff = {
              9: 2,
              521: 3,
              1033: 4
            }[M] || {
              512: 2,
              768: 3,
              1024: 4,
              1280: 5,
              1536: 8,
              2: 2,
              7: 2
            }[x.BIFFVer] || 8), K.biffguess = x.BIFFVer == 0, x.BIFFVer == 0 && x.dt == 4096 && (K.biff = 5, Se = !0, dt(K.codepage = 28591)), K.biff == 4 && x.dt & 256 && (R = !0), K.biff == 8 && x.BIFFVer == 0 && x.dt == 16 && (K.biff = 2), oe++ && !R) break;
            if (n = {}, r.dense && (n["!data"] = []), K.biff < 8 && !Se && (Se = !0, dt(K.codepage = r.codepage || 1252)), K.biff == 4 && R)
              o = (i[K.snames.indexOf(o) + 1] || { name: "" }).name;
            else if (K.biff < 5 || x.BIFFVer == 0 && x.dt == 4096) {
              o === "" && (o = "Sheet1"), s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              var se = { pos: e.l - D, name: o };
              i[se.pos] = se, K.snames.push(o);
            } else o = (i[A] || { name: "" }).name;
            x.dt == 32 && (n["!type"] = "chart"), x.dt == 64 && (n["!type"] = "macro"), de = [], ae = [], K.arrayf = w = [], he = [], q = [], ge = !1, O = { Hidden: (i[A] || { hs: 0 }).hs, name: o };
          }
          break;
        case 515:
        case 3:
        case 2:
          n["!type"] == "chart" && (r.dense ? (n["!data"][x.r] || [])[x.c] : n[Ne(x.c) + Xe(x.r)]) && ++x.c, _ = { ixfe: x.ixfe, XF: b[x.ixfe] || {}, v: x.val, t: "n" }, fe > 0 && (_.z = _.XF && _.XF.numFmtId && Q[_.XF.numFmtId] || Q[_.ixfe >> 8 & 63]), yt(_, r, t.opts.Date1904), U({ c: x.c, r: x.r }, _, r);
          break;
        case 5:
        case 517:
          _ = { ixfe: x.ixfe, XF: b[x.ixfe], v: x.val, t: x.t }, fe > 0 && (_.z = _.XF && _.XF.numFmtId && Q[_.XF.numFmtId] || Q[_.ixfe >> 8 & 63]), yt(_, r, t.opts.Date1904), U({ c: x.c, r: x.r }, _, r);
          break;
        case 638:
          _ = { ixfe: x.ixfe, XF: b[x.ixfe], v: x.rknum, t: "n" }, fe > 0 && (_.z = _.XF && _.XF.numFmtId && Q[_.XF.numFmtId] || Q[_.ixfe >> 8 & 63]), yt(_, r, t.opts.Date1904), U({ c: x.c, r: x.r }, _, r);
          break;
        case 189:
          for (var Ce = x.c; Ce <= x.C; ++Ce) {
            var xe = x.rkrec[Ce - x.c][0];
            _ = { ixfe: xe, XF: b[xe], v: x.rkrec[Ce - x.c][1], t: "n" }, fe > 0 && (_.z = _.XF && _.XF.numFmtId && Q[_.XF.numFmtId] || Q[_.ixfe >> 8 & 63]), yt(_, r, t.opts.Date1904), U({ c: Ce, r: x.r }, _, r);
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (x.val == "String") {
              f = x;
              break;
            }
            if (_ = Yn(x.val, x.cell.ixfe, x.tt), _.XF = b[_.ixfe], r.cellFormula) {
              var Oe = x.formula;
              if (Oe && Oe[0] && Oe[0][0] && Oe[0][0][0] == "PtgExp") {
                var qe = Oe[0][0][1][0], tr = Oe[0][0][1][1], lr = He({ r: qe, c: tr });
                v[lr] ? _.f = "" + Hr(x.formula, s, x.cell, z, K) : _.F = ((r.dense ? (n["!data"][qe] || [])[tr] : n[lr]) || {}).F;
              } else _.f = "" + Hr(x.formula, s, x.cell, z, K);
            }
            fe > 0 && (_.z = _.XF && _.XF.numFmtId && Q[_.XF.numFmtId] || Q[_.ixfe >> 8 & 63]), yt(_, r, t.opts.Date1904), U(x.cell, _, r), f = x;
          }
          break;
        case 7:
        case 519:
          if (f)
            f.val = x, _ = Yn(x, f.cell.ixfe, "s"), _.XF = b[_.ixfe], r.cellFormula && (_.f = "" + Hr(f.formula, s, f.cell, z, K)), fe > 0 && (_.z = _.XF && _.XF.numFmtId && Q[_.XF.numFmtId] || Q[_.ixfe >> 8 & 63]), yt(_, r, t.opts.Date1904), U(f.cell, _, r), f = null;
          else throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            w.push(x);
            var Te = He(x[0].s);
            if (h = r.dense ? (n["!data"][x[0].s.r] || [])[x[0].s.c] : n[Te], r.cellFormula && h) {
              if (!f || !Te || !h) break;
              h.f = "" + Hr(x[1], s, x[0], z, K), h.F = Me(x[0]);
            }
          }
          break;
        case 1212:
          {
            if (!r.cellFormula) break;
            if (u) {
              if (!f) break;
              v[He(f.cell)] = x[0], h = r.dense ? (n["!data"][f.cell.r] || [])[f.cell.c] : n[He(f.cell)], (h || {}).f = "" + Hr(x[0], s, d, z, K);
            }
          }
          break;
        case 253:
          _ = Yn(c[x.isst].t, x.ixfe, "s"), c[x.isst].h && (_.h = c[x.isst].h), _.XF = b[_.ixfe], fe > 0 && (_.z = _.XF && _.XF.numFmtId && Q[_.XF.numFmtId] || Q[_.ixfe >> 8 & 63]), yt(_, r, t.opts.Date1904), U({ c: x.c, r: x.r }, _, r);
          break;
        case 513:
          r.sheetStubs && (_ = { ixfe: x.ixfe, XF: b[x.ixfe], t: "z" }, fe > 0 && (_.z = _.XF && _.XF.numFmtId && Q[_.XF.numFmtId] || Q[_.ixfe >> 8 & 63]), yt(_, r, t.opts.Date1904), U({ c: x.c, r: x.r }, _, r));
          break;
        case 190:
          if (r.sheetStubs)
            for (var $e = x.c; $e <= x.C; ++$e) {
              var le = x.ixfe[$e - x.c];
              _ = { ixfe: le, XF: b[le], t: "z" }, fe > 0 && (_.z = _.XF && _.XF.numFmtId && Q[_.XF.numFmtId] || Q[_.ixfe >> 8 & 63]), yt(_, r, t.opts.Date1904), U({ c: $e, r: x.r }, _, r);
            }
          break;
        case 214:
        case 516:
        case 4:
          _ = Yn(x.val, x.ixfe, "s"), _.XF = b[_.ixfe], fe > 0 && (_.z = _.XF && _.XF.numFmtId && Q[_.XF.numFmtId] || Q[_.ixfe >> 8 & 63]), yt(_, r, t.opts.Date1904), U({ c: x.c, r: x.r }, _, r);
          break;
        case 0:
        case 512:
          oe === 1 && (s = x);
          break;
        case 252:
          c = x;
          break;
        case 1054:
          if (K.biff >= 3 && K.biff <= 4) {
            Q[fe++] = x[1];
            for (var nt = 0; nt < fe + 163 && Fe[nt] != x[1]; ++nt) ;
            nt >= 163 && jt(x[1], fe + 163);
          } else jt(x[1], x[0]);
          break;
        case 30:
          {
            Q[fe++] = x;
            for (var Yr = 0; Yr < fe + 163 && Fe[Yr] != x; ++Yr) ;
            Yr >= 163 && jt(x, fe + 163);
          }
          break;
        case 229:
          de = de.concat(x);
          break;
        case 93:
          ae[x.cmo[0]] = K.lastobj = x;
          break;
        case 438:
          K.lastobj.TxO = x;
          break;
        case 127:
          K.lastobj.ImData = x;
          break;
        case 440:
          for (p = x[0].s.r; p <= x[0].e.r; ++p)
            for (g = x[0].s.c; g <= x[0].e.c; ++g)
              h = r.dense ? (n["!data"][p] || [])[g] : n[He({ c: g, r: p })], h && (h.l = x[1]);
          break;
        case 2048:
          for (p = x[0].s.r; p <= x[0].e.r; ++p)
            for (g = x[0].s.c; g <= x[0].e.c; ++g)
              h = r.dense ? (n["!data"][p] || [])[g] : n[He({ c: g, r: p })], h && h.l && (h.l.Tooltip = x[1]);
          break;
        case 28:
          {
            if (h = r.dense ? (n["!data"][x[0].r] || [])[x[0].c] : n[He(x[0])], h || (r.dense ? (n["!data"][x[0].r] || (n["!data"][x[0].r] = []), h = n["!data"][x[0].r][x[0].c] = { t: "z" }) : h = n[He(x[0])] = { t: "z" }, s.e.r = Math.max(s.e.r, x[0].r), s.s.r = Math.min(s.s.r, x[0].r), s.e.c = Math.max(s.e.c, x[0].c), s.s.c = Math.min(s.s.c, x[0].c)), h.c || (h.c = []), K.biff <= 5 && K.biff >= 2) m = { a: "SheetJ5", t: x[1] };
            else {
              var nr = ae[x[2]];
              m = { a: x[1], t: nr.TxO.t }, x[3] != null && !(x[3] & 2) && (h.c.hidden = !0);
            }
            h.c.push(m);
          }
          break;
        case 2173:
          Dv(b[x.ixfe], x.ext);
          break;
        case 125:
          {
            if (!K.cellStyles) break;
            for (; x.e >= x.s; )
              he[x.e--] = { width: x.w / 256, level: x.level || 0, hidden: !!(x.flags & 1) }, ge || (ge = !0, Ls(x.w / 256)), Gt(he[x.e + 1]);
          }
          break;
        case 520:
          {
            var pt = {};
            x.level != null && (q[x.r] = pt, pt.level = x.level), x.hidden && (q[x.r] = pt, pt.hidden = !0), x.hpt && (q[x.r] = pt, pt.hpt = x.hpt, pt.hpx = Wa(x.hpt));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          n["!margins"] || ua(n["!margins"] = {}), n["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[M]] = x;
          break;
        case 161:
          n["!margins"] || ua(n["!margins"] = {}), n["!margins"].header = x.header, n["!margins"].footer = x.footer;
          break;
        case 574:
          x.RTL && (y.Views[0].RTL = !0);
          break;
        case 146:
          B = x;
          break;
        case 2198:
          me = x;
          break;
        case 140:
          T = x;
          break;
        case 442:
          o ? O.CodeName = x || O.name : y.WBProps.CodeName = x || "ThisWorkbook";
          break;
      }
    } else
      N || console.error("Missing Info for XLS Record 0x" + M.toString(16)), e.l += D;
  }
  return t.SheetNames = sr(i).sort(function(Pr, pe) {
    return Number(Pr) - Number(pe);
  }).map(function(Pr) {
    return i[Pr].name;
  }).filter(function(Pr) {
    return !zr(Pr);
  }), r.bookSheets || (t.Sheets = a), !t.SheetNames.length && l["!ref"] ? (t.SheetNames.push("Sheet1"), t.Sheets && (t.Sheets.Sheet1 = l)) : t.Preamble = l, t.Sheets && _e.forEach(function(Pr, pe) {
    t.Sheets[t.SheetNames[pe]]["!autofilter"] = Pr;
  }), t.Strings = c, t.SSF = je(Fe), K.enc && (t.Encryption = K.enc), me && (t.Themes = me), t.Metadata = {}, T !== void 0 && (t.Metadata.Country = T), z.names.length > 0 && (y.Names = z.names), t.Workbook = y, t;
}
var fn = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function z_(e, r, t) {
  var a = Ie.find(e, "/!DocumentSummaryInformation");
  if (a && a.size > 0) try {
    var n = Nf(a, Ji, fn.DSI);
    for (var i in n) r[i] = n[i];
  } catch (o) {
    if (t.WTF) throw o;
  }
  var s = Ie.find(e, "/!SummaryInformation");
  if (s && s.size > 0) try {
    var f = Nf(s, qi, fn.SI);
    for (var c in f) r[c] == null && (r[c] = f[c]);
  } catch (o) {
    if (t.WTF) throw o;
  }
  r.HeadingPairs && r.TitlesOfParts && (Qc(r.HeadingPairs, r.TitlesOfParts, r, t), delete r.HeadingPairs, delete r.TitlesOfParts);
}
function $_(e, r) {
  var t = [], a = [], n = [], i = 0, s, f = lf(Ji, "n"), c = lf(qi, "n");
  if (e.Props)
    for (s = sr(e.Props), i = 0; i < s.length; ++i) (Object.prototype.hasOwnProperty.call(f, s[i]) ? t : Object.prototype.hasOwnProperty.call(c, s[i]) ? a : n).push([s[i], e.Props[s[i]]]);
  if (e.Custprops)
    for (s = sr(e.Custprops), i = 0; i < s.length; ++i) Object.prototype.hasOwnProperty.call(e.Props || {}, s[i]) || (Object.prototype.hasOwnProperty.call(f, s[i]) ? t : Object.prototype.hasOwnProperty.call(c, s[i]) ? a : n).push([s[i], e.Custprops[s[i]]]);
  var o = [];
  for (i = 0; i < n.length; ++i)
    no.indexOf(n[i][0]) > -1 || qc.indexOf(n[i][0]) > -1 || n[i][1] != null && o.push(n[i]);
  a.length && Ie.utils.cfb_add(r, "/SummaryInformation", Rf(a, fn.SI, c, qi)), (t.length || o.length) && Ie.utils.cfb_add(r, "/DocumentSummaryInformation", Rf(t, fn.DSI, f, Ji, o.length ? o : null, fn.UDI));
}
function xi(e, r) {
  r || (r = {}), Xs(r), di(), r.codepage && hi(r.codepage);
  var t, a;
  if (e.FullPaths) {
    if (Ie.find(e, "/encryption")) throw new Error("File is password-protected");
    t = Ie.find(e, "!CompObj"), a = Ie.find(e, "/Workbook") || Ie.find(e, "/Book");
  } else {
    switch (r.type) {
      case "base64":
        e = qr(st(e));
        break;
      case "binary":
        e = qr(e);
        break;
      case "buffer":
        break;
      case "array":
        Array.isArray(e) || (e = Array.prototype.slice.call(e));
        break;
    }
    yr(e, 0), a = { content: e };
  }
  var n, i;
  if (t && H_(t), r.bookProps && !r.bookSheets) n = {};
  else {
    var s = Ue ? "buffer" : "array";
    if (a && a.content) n = G_(a.content, r);
    else if ((i = Ie.find(e, "PerfectOffice_MAIN")) && i.content) n = oa.to_workbook(i.content, (r.type = s, r));
    else if ((i = Ie.find(e, "NativeContent_MAIN")) && i.content) n = oa.to_workbook(i.content, (r.type = s, r));
    else throw (i = Ie.find(e, "MN0")) && i.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
    r.bookVBA && e.FullPaths && Ie.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (n.vbaraw = o2(e));
  }
  var f = {};
  return e.FullPaths && z_(
    /*::((*/
    e,
    f,
    r
  ), n.Props = n.Custprops = f, r.bookFiles && (n.cfb = e), n;
}
function K_(e, r) {
  var t = r || {}, a = Ie.utils.cfb_new({ root: "R" }), n = "/Workbook";
  switch (t.bookType || "xls") {
    case "xls":
      t.bookType = "biff8";
    case "xla":
      t.bookType || (t.bookType = "xla");
    case "biff8":
      n = "/Workbook", t.biff = 8;
      break;
    case "biff5":
      n = "/Book", t.biff = 5;
      break;
    default:
      throw new Error("invalid type " + t.bookType + " for XLS CFB");
  }
  return Ie.utils.cfb_add(a, n, fl(e, t)), t.biff == 8 && (e.Props || e.Custprops) && $_(e, a), t.biff == 8 && e.vbaraw && l2(a, Ie.read(e.vbaraw, { type: typeof e.vbaraw == "string" ? "binary" : "buffer" })), a;
}
var wn = {
  0: {
    /* n:"BrtRowHdr", */
    f: Cp
  },
  1: {
    /* n:"BrtCellBlank", */
    f: Mp
  },
  2: {
    /* n:"BrtCellRk", */
    f: eg
  },
  3: {
    /* n:"BrtCellError", */
    f: zp
  },
  4: {
    /* n:"BrtCellBool", */
    f: Hp
  },
  5: {
    /* n:"BrtCellReal", */
    f: Jp
  },
  6: {
    /* n:"BrtCellSt", */
    f: ig
  },
  7: {
    /* n:"BrtCellIsst", */
    f: Kp
  },
  8: {
    /* n:"BrtFmlaString", */
    f: hg
  },
  9: {
    /* n:"BrtFmlaNum", */
    f: ug
  },
  10: {
    /* n:"BrtFmlaBool", */
    f: og
  },
  11: {
    /* n:"BrtFmlaError", */
    f: lg
  },
  12: {
    /* n:"BrtShortBlank", */
    f: Up
  },
  13: {
    /* n:"BrtShortRk", */
    f: tg
  },
  14: {
    /* n:"BrtShortError", */
    f: $p
  },
  15: {
    /* n:"BrtShortBool", */
    f: Vp
  },
  16: {
    /* n:"BrtShortReal", */
    f: Go
  },
  17: {
    /* n:"BrtShortSt", */
    f: fg
  },
  18: {
    /* n:"BrtShortIsst", */
    f: Yp
  },
  19: {
    /* n:"BrtSSTItem", */
    f: Fs
  },
  20: {
    /* n:"BrtPCDIMissing" */
  },
  21: {
    /* n:"BrtPCDINumber" */
  },
  22: {
    /* n:"BrtPCDIBoolean" */
  },
  23: {
    /* n:"BrtPCDIError" */
  },
  24: {
    /* n:"BrtPCDIString" */
  },
  25: {
    /* n:"BrtPCDIDatetime" */
  },
  26: {
    /* n:"BrtPCDIIndex" */
  },
  27: {
    /* n:"BrtPCDIAMissing" */
  },
  28: {
    /* n:"BrtPCDIANumber" */
  },
  29: {
    /* n:"BrtPCDIABoolean" */
  },
  30: {
    /* n:"BrtPCDIAError" */
  },
  31: {
    /* n:"BrtPCDIAString" */
  },
  32: {
    /* n:"BrtPCDIADatetime" */
  },
  33: {
    /* n:"BrtPCRRecord" */
  },
  34: {
    /* n:"BrtPCRRecordDt" */
  },
  35: {
    /* n:"BrtFRTBegin", */
    T: 1
  },
  36: {
    /* n:"BrtFRTEnd", */
    T: -1
  },
  37: {
    /* n:"BrtACBegin", */
    T: 1
  },
  38: {
    /* n:"BrtACEnd", */
    T: -1
  },
  39: {
    /* n:"BrtName", */
    f: f_
  },
  40: {
    /* n:"BrtIndexRowBlock" */
  },
  42: {
    /* n:"BrtIndexBlock" */
  },
  43: {
    /* n:"BrtFont", */
    f: nv
  },
  44: {
    /* n:"BrtFmt", */
    f: tv
  },
  45: {
    /* n:"BrtFill", */
    f: fv
  },
  46: {
    /* n:"BrtBorder", */
    f: ov
  },
  47: {
    /* n:"BrtXF", */
    f: cv
  },
  48: {
    /* n:"BrtStyle" */
  },
  49: {
    /* n:"BrtCellMeta", */
    f: wu
  },
  50: {
    /* n:"BrtValueMeta" */
  },
  51: {
    /* n:"BrtMdb" */
    f: Mv
  },
  52: {
    /* n:"BrtBeginFmd", */
    T: 1
  },
  53: {
    /* n:"BrtEndFmd", */
    T: -1
  },
  54: {
    /* n:"BrtBeginMdx", */
    T: 1
  },
  55: {
    /* n:"BrtEndMdx", */
    T: -1
  },
  56: {
    /* n:"BrtBeginMdxTuple", */
    T: 1
  },
  57: {
    /* n:"BrtEndMdxTuple", */
    T: -1
  },
  58: {
    /* n:"BrtMdxMbrIstr" */
  },
  59: {
    /* n:"BrtStr" */
  },
  60: {
    /* n:"BrtColInfo", */
    f: _o
  },
  62: {
    /* n:"BrtCellRString", */
    f: ng
  },
  63: {
    /* n:"BrtCalcChainItem$", */
    f: Kv
  },
  64: {
    /* n:"BrtDVal", */
    f: Ig
  },
  65: {
    /* n:"BrtSxvcellNum" */
  },
  66: {
    /* n:"BrtSxvcellStr" */
  },
  67: {
    /* n:"BrtSxvcellBool" */
  },
  68: {
    /* n:"BrtSxvcellErr" */
  },
  69: {
    /* n:"BrtSxvcellDate" */
  },
  70: {
    /* n:"BrtSxvcellNil" */
  },
  128: {
    /* n:"BrtFileVersion" */
  },
  129: {
    /* n:"BrtBeginSheet", */
    T: 1
  },
  130: {
    /* n:"BrtEndSheet", */
    T: -1
  },
  131: {
    /* n:"BrtBeginBook", */
    T: 1,
    f: jr,
    p: 0
  },
  132: {
    /* n:"BrtEndBook", */
    T: -1
  },
  133: {
    /* n:"BrtBeginWsViews", */
    T: 1
  },
  134: {
    /* n:"BrtEndWsViews", */
    T: -1
  },
  135: {
    /* n:"BrtBeginBookViews", */
    T: 1
  },
  136: {
    /* n:"BrtEndBookViews", */
    T: -1
  },
  137: {
    /* n:"BrtBeginWsView", */
    T: 1,
    f: Sg
  },
  138: {
    /* n:"BrtEndWsView", */
    T: -1
  },
  139: {
    /* n:"BrtBeginCsViews", */
    T: 1
  },
  140: {
    /* n:"BrtEndCsViews", */
    T: -1
  },
  141: {
    /* n:"BrtBeginCsView", */
    T: 1
  },
  142: {
    /* n:"BrtEndCsView", */
    T: -1
  },
  143: {
    /* n:"BrtBeginBundleShs", */
    T: 1
  },
  144: {
    /* n:"BrtEndBundleShs", */
    T: -1
  },
  145: {
    /* n:"BrtBeginSheetData", */
    T: 1
  },
  146: {
    /* n:"BrtEndSheetData", */
    T: -1
  },
  147: {
    /* n:"BrtWsProp", */
    f: Pp
  },
  148: {
    /* n:"BrtWsDim", */
    f: Np,
    p: 16
  },
  151: {
    /* n:"BrtPane", */
    f: _g
  },
  152: {
    /* n:"BrtSel" */
  },
  153: {
    /* n:"BrtWbProp", */
    f: n_
  },
  154: {
    /* n:"BrtWbFactoid" */
  },
  155: {
    /* n:"BrtFileRecover" */
  },
  156: {
    /* n:"BrtBundleSh", */
    f: t_
  },
  157: {
    /* n:"BrtCalcProp" */
  },
  158: {
    /* n:"BrtBookView" */
  },
  159: {
    /* n:"BrtBeginSst", */
    T: 1,
    f: md
  },
  160: {
    /* n:"BrtEndSst", */
    T: -1
  },
  161: {
    /* n:"BrtBeginAFilter", */
    T: 1,
    f: xa
  },
  162: {
    /* n:"BrtEndAFilter", */
    T: -1
  },
  163: {
    /* n:"BrtBeginFilterColumn", */
    T: 1
  },
  164: {
    /* n:"BrtEndFilterColumn", */
    T: -1
  },
  165: {
    /* n:"BrtBeginFilters", */
    T: 1
  },
  166: {
    /* n:"BrtEndFilters", */
    T: -1
  },
  167: {
    /* n:"BrtFilter" */
  },
  168: {
    /* n:"BrtColorFilter" */
  },
  169: {
    /* n:"BrtIconFilter" */
  },
  170: {
    /* n:"BrtTop10Filter" */
  },
  171: {
    /* n:"BrtDynamicFilter" */
  },
  172: {
    /* n:"BrtBeginCustomFilters", */
    T: 1
  },
  173: {
    /* n:"BrtEndCustomFilters", */
    T: -1
  },
  174: {
    /* n:"BrtCustomFilter" */
  },
  175: {
    /* n:"BrtAFilterDateGroupItem" */
  },
  176: {
    /* n:"BrtMergeCell", */
    f: dg
  },
  177: {
    /* n:"BrtBeginMergeCells", */
    T: 1
  },
  178: {
    /* n:"BrtEndMergeCells", */
    T: -1
  },
  179: {
    /* n:"BrtBeginPivotCacheDef", */
    T: 1
  },
  180: {
    /* n:"BrtEndPivotCacheDef", */
    T: -1
  },
  181: {
    /* n:"BrtBeginPCDFields", */
    T: 1
  },
  182: {
    /* n:"BrtEndPCDFields", */
    T: -1
  },
  183: {
    /* n:"BrtBeginPCDField", */
    T: 1
  },
  184: {
    /* n:"BrtEndPCDField", */
    T: -1
  },
  185: {
    /* n:"BrtBeginPCDSource", */
    T: 1
  },
  186: {
    /* n:"BrtEndPCDSource", */
    T: -1
  },
  187: {
    /* n:"BrtBeginPCDSRange", */
    T: 1
  },
  188: {
    /* n:"BrtEndPCDSRange", */
    T: -1
  },
  189: {
    /* n:"BrtBeginPCDFAtbl", */
    T: 1
  },
  190: {
    /* n:"BrtEndPCDFAtbl", */
    T: -1
  },
  191: {
    /* n:"BrtBeginPCDIRun", */
    T: 1
  },
  192: {
    /* n:"BrtEndPCDIRun", */
    T: -1
  },
  193: {
    /* n:"BrtBeginPivotCacheRecords", */
    T: 1
  },
  194: {
    /* n:"BrtEndPivotCacheRecords", */
    T: -1
  },
  195: {
    /* n:"BrtBeginPCDHierarchies", */
    T: 1
  },
  196: {
    /* n:"BrtEndPCDHierarchies", */
    T: -1
  },
  197: {
    /* n:"BrtBeginPCDHierarchy", */
    T: 1
  },
  198: {
    /* n:"BrtEndPCDHierarchy", */
    T: -1
  },
  199: {
    /* n:"BrtBeginPCDHFieldsUsage", */
    T: 1
  },
  200: {
    /* n:"BrtEndPCDHFieldsUsage", */
    T: -1
  },
  201: {
    /* n:"BrtBeginExtConnection", */
    T: 1
  },
  202: {
    /* n:"BrtEndExtConnection", */
    T: -1
  },
  203: {
    /* n:"BrtBeginECDbProps", */
    T: 1
  },
  204: {
    /* n:"BrtEndECDbProps", */
    T: -1
  },
  205: {
    /* n:"BrtBeginECOlapProps", */
    T: 1
  },
  206: {
    /* n:"BrtEndECOlapProps", */
    T: -1
  },
  207: {
    /* n:"BrtBeginPCDSConsol", */
    T: 1
  },
  208: {
    /* n:"BrtEndPCDSConsol", */
    T: -1
  },
  209: {
    /* n:"BrtBeginPCDSCPages", */
    T: 1
  },
  210: {
    /* n:"BrtEndPCDSCPages", */
    T: -1
  },
  211: {
    /* n:"BrtBeginPCDSCPage", */
    T: 1
  },
  212: {
    /* n:"BrtEndPCDSCPage", */
    T: -1
  },
  213: {
    /* n:"BrtBeginPCDSCPItem", */
    T: 1
  },
  214: {
    /* n:"BrtEndPCDSCPItem", */
    T: -1
  },
  215: {
    /* n:"BrtBeginPCDSCSets", */
    T: 1
  },
  216: {
    /* n:"BrtEndPCDSCSets", */
    T: -1
  },
  217: {
    /* n:"BrtBeginPCDSCSet", */
    T: 1
  },
  218: {
    /* n:"BrtEndPCDSCSet", */
    T: -1
  },
  219: {
    /* n:"BrtBeginPCDFGroup", */
    T: 1
  },
  220: {
    /* n:"BrtEndPCDFGroup", */
    T: -1
  },
  221: {
    /* n:"BrtBeginPCDFGItems", */
    T: 1
  },
  222: {
    /* n:"BrtEndPCDFGItems", */
    T: -1
  },
  223: {
    /* n:"BrtBeginPCDFGRange", */
    T: 1
  },
  224: {
    /* n:"BrtEndPCDFGRange", */
    T: -1
  },
  225: {
    /* n:"BrtBeginPCDFGDiscrete", */
    T: 1
  },
  226: {
    /* n:"BrtEndPCDFGDiscrete", */
    T: -1
  },
  227: {
    /* n:"BrtBeginPCDSDTupleCache", */
    T: 1
  },
  228: {
    /* n:"BrtEndPCDSDTupleCache", */
    T: -1
  },
  229: {
    /* n:"BrtBeginPCDSDTCEntries", */
    T: 1
  },
  230: {
    /* n:"BrtEndPCDSDTCEntries", */
    T: -1
  },
  231: {
    /* n:"BrtBeginPCDSDTCEMembers", */
    T: 1
  },
  232: {
    /* n:"BrtEndPCDSDTCEMembers", */
    T: -1
  },
  233: {
    /* n:"BrtBeginPCDSDTCEMember", */
    T: 1
  },
  234: {
    /* n:"BrtEndPCDSDTCEMember", */
    T: -1
  },
  235: {
    /* n:"BrtBeginPCDSDTCQueries", */
    T: 1
  },
  236: {
    /* n:"BrtEndPCDSDTCQueries", */
    T: -1
  },
  237: {
    /* n:"BrtBeginPCDSDTCQuery", */
    T: 1
  },
  238: {
    /* n:"BrtEndPCDSDTCQuery", */
    T: -1
  },
  239: {
    /* n:"BrtBeginPCDSDTCSets", */
    T: 1
  },
  240: {
    /* n:"BrtEndPCDSDTCSets", */
    T: -1
  },
  241: {
    /* n:"BrtBeginPCDSDTCSet", */
    T: 1
  },
  242: {
    /* n:"BrtEndPCDSDTCSet", */
    T: -1
  },
  243: {
    /* n:"BrtBeginPCDCalcItems", */
    T: 1
  },
  244: {
    /* n:"BrtEndPCDCalcItems", */
    T: -1
  },
  245: {
    /* n:"BrtBeginPCDCalcItem", */
    T: 1
  },
  246: {
    /* n:"BrtEndPCDCalcItem", */
    T: -1
  },
  247: {
    /* n:"BrtBeginPRule", */
    T: 1
  },
  248: {
    /* n:"BrtEndPRule", */
    T: -1
  },
  249: {
    /* n:"BrtBeginPRFilters", */
    T: 1
  },
  250: {
    /* n:"BrtEndPRFilters", */
    T: -1
  },
  251: {
    /* n:"BrtBeginPRFilter", */
    T: 1
  },
  252: {
    /* n:"BrtEndPRFilter", */
    T: -1
  },
  253: {
    /* n:"BrtBeginPNames", */
    T: 1
  },
  254: {
    /* n:"BrtEndPNames", */
    T: -1
  },
  255: {
    /* n:"BrtBeginPName", */
    T: 1
  },
  256: {
    /* n:"BrtEndPName", */
    T: -1
  },
  257: {
    /* n:"BrtBeginPNPairs", */
    T: 1
  },
  258: {
    /* n:"BrtEndPNPairs", */
    T: -1
  },
  259: {
    /* n:"BrtBeginPNPair", */
    T: 1
  },
  260: {
    /* n:"BrtEndPNPair", */
    T: -1
  },
  261: {
    /* n:"BrtBeginECWebProps", */
    T: 1
  },
  262: {
    /* n:"BrtEndECWebProps", */
    T: -1
  },
  263: {
    /* n:"BrtBeginEcWpTables", */
    T: 1
  },
  264: {
    /* n:"BrtEndECWPTables", */
    T: -1
  },
  265: {
    /* n:"BrtBeginECParams", */
    T: 1
  },
  266: {
    /* n:"BrtEndECParams", */
    T: -1
  },
  267: {
    /* n:"BrtBeginECParam", */
    T: 1
  },
  268: {
    /* n:"BrtEndECParam", */
    T: -1
  },
  269: {
    /* n:"BrtBeginPCDKPIs", */
    T: 1
  },
  270: {
    /* n:"BrtEndPCDKPIs", */
    T: -1
  },
  271: {
    /* n:"BrtBeginPCDKPI", */
    T: 1
  },
  272: {
    /* n:"BrtEndPCDKPI", */
    T: -1
  },
  273: {
    /* n:"BrtBeginDims", */
    T: 1
  },
  274: {
    /* n:"BrtEndDims", */
    T: -1
  },
  275: {
    /* n:"BrtBeginDim", */
    T: 1
  },
  276: {
    /* n:"BrtEndDim", */
    T: -1
  },
  277: {
    /* n:"BrtIndexPartEnd" */
  },
  278: {
    /* n:"BrtBeginStyleSheet", */
    T: 1
  },
  279: {
    /* n:"BrtEndStyleSheet", */
    T: -1
  },
  280: {
    /* n:"BrtBeginSXView", */
    T: 1
  },
  281: {
    /* n:"BrtEndSXVI", */
    T: -1
  },
  282: {
    /* n:"BrtBeginSXVI", */
    T: 1
  },
  283: {
    /* n:"BrtBeginSXVIs", */
    T: 1
  },
  284: {
    /* n:"BrtEndSXVIs", */
    T: -1
  },
  285: {
    /* n:"BrtBeginSXVD", */
    T: 1
  },
  286: {
    /* n:"BrtEndSXVD", */
    T: -1
  },
  287: {
    /* n:"BrtBeginSXVDs", */
    T: 1
  },
  288: {
    /* n:"BrtEndSXVDs", */
    T: -1
  },
  289: {
    /* n:"BrtBeginSXPI", */
    T: 1
  },
  290: {
    /* n:"BrtEndSXPI", */
    T: -1
  },
  291: {
    /* n:"BrtBeginSXPIs", */
    T: 1
  },
  292: {
    /* n:"BrtEndSXPIs", */
    T: -1
  },
  293: {
    /* n:"BrtBeginSXDI", */
    T: 1
  },
  294: {
    /* n:"BrtEndSXDI", */
    T: -1
  },
  295: {
    /* n:"BrtBeginSXDIs", */
    T: 1
  },
  296: {
    /* n:"BrtEndSXDIs", */
    T: -1
  },
  297: {
    /* n:"BrtBeginSXLI", */
    T: 1
  },
  298: {
    /* n:"BrtEndSXLI", */
    T: -1
  },
  299: {
    /* n:"BrtBeginSXLIRws", */
    T: 1
  },
  300: {
    /* n:"BrtEndSXLIRws", */
    T: -1
  },
  301: {
    /* n:"BrtBeginSXLICols", */
    T: 1
  },
  302: {
    /* n:"BrtEndSXLICols", */
    T: -1
  },
  303: {
    /* n:"BrtBeginSXFormat", */
    T: 1
  },
  304: {
    /* n:"BrtEndSXFormat", */
    T: -1
  },
  305: {
    /* n:"BrtBeginSXFormats", */
    T: 1
  },
  306: {
    /* n:"BrtEndSxFormats", */
    T: -1
  },
  307: {
    /* n:"BrtBeginSxSelect", */
    T: 1
  },
  308: {
    /* n:"BrtEndSxSelect", */
    T: -1
  },
  309: {
    /* n:"BrtBeginISXVDRws", */
    T: 1
  },
  310: {
    /* n:"BrtEndISXVDRws", */
    T: -1
  },
  311: {
    /* n:"BrtBeginISXVDCols", */
    T: 1
  },
  312: {
    /* n:"BrtEndISXVDCols", */
    T: -1
  },
  313: {
    /* n:"BrtEndSXLocation", */
    T: -1
  },
  314: {
    /* n:"BrtBeginSXLocation", */
    T: 1
  },
  315: {
    /* n:"BrtEndSXView", */
    T: -1
  },
  316: {
    /* n:"BrtBeginSXTHs", */
    T: 1
  },
  317: {
    /* n:"BrtEndSXTHs", */
    T: -1
  },
  318: {
    /* n:"BrtBeginSXTH", */
    T: 1
  },
  319: {
    /* n:"BrtEndSXTH", */
    T: -1
  },
  320: {
    /* n:"BrtBeginISXTHRws", */
    T: 1
  },
  321: {
    /* n:"BrtEndISXTHRws", */
    T: -1
  },
  322: {
    /* n:"BrtBeginISXTHCols", */
    T: 1
  },
  323: {
    /* n:"BrtEndISXTHCols", */
    T: -1
  },
  324: {
    /* n:"BrtBeginSXTDMPS", */
    T: 1
  },
  325: {
    /* n:"BrtEndSXTDMPs", */
    T: -1
  },
  326: {
    /* n:"BrtBeginSXTDMP", */
    T: 1
  },
  327: {
    /* n:"BrtEndSXTDMP", */
    T: -1
  },
  328: {
    /* n:"BrtBeginSXTHItems", */
    T: 1
  },
  329: {
    /* n:"BrtEndSXTHItems", */
    T: -1
  },
  330: {
    /* n:"BrtBeginSXTHItem", */
    T: 1
  },
  331: {
    /* n:"BrtEndSXTHItem", */
    T: -1
  },
  332: {
    /* n:"BrtBeginMetadata", */
    T: 1
  },
  333: {
    /* n:"BrtEndMetadata", */
    T: -1
  },
  334: {
    /* n:"BrtBeginEsmdtinfo", */
    T: 1
  },
  335: {
    /* n:"BrtMdtinfo", */
    f: Pv
  },
  336: {
    /* n:"BrtEndEsmdtinfo", */
    T: -1
  },
  337: {
    /* n:"BrtBeginEsmdb", */
    f: Wv,
    T: 1
  },
  338: {
    /* n:"BrtEndEsmdb", */
    T: -1
  },
  339: {
    /* n:"BrtBeginEsfmd", */
    T: 1
  },
  340: {
    /* n:"BrtEndEsfmd", */
    T: -1
  },
  341: {
    /* n:"BrtBeginSingleCells", */
    T: 1
  },
  342: {
    /* n:"BrtEndSingleCells", */
    T: -1
  },
  343: {
    /* n:"BrtBeginList", */
    T: 1
  },
  344: {
    /* n:"BrtEndList", */
    T: -1
  },
  345: {
    /* n:"BrtBeginListCols", */
    T: 1
  },
  346: {
    /* n:"BrtEndListCols", */
    T: -1
  },
  347: {
    /* n:"BrtBeginListCol", */
    T: 1
  },
  348: {
    /* n:"BrtEndListCol", */
    T: -1
  },
  349: {
    /* n:"BrtBeginListXmlCPr", */
    T: 1
  },
  350: {
    /* n:"BrtEndListXmlCPr", */
    T: -1
  },
  351: {
    /* n:"BrtListCCFmla" */
  },
  352: {
    /* n:"BrtListTrFmla" */
  },
  353: {
    /* n:"BrtBeginExternals", */
    T: 1
  },
  354: {
    /* n:"BrtEndExternals", */
    T: -1
  },
  355: {
    /* n:"BrtSupBookSrc", */
    f: Zi
  },
  357: {
    /* n:"BrtSupSelf" */
  },
  358: {
    /* n:"BrtSupSame" */
  },
  359: {
    /* n:"BrtSupTabs" */
  },
  360: {
    /* n:"BrtBeginSupBook", */
    T: 1
  },
  361: {
    /* n:"BrtPlaceholderName" */
  },
  362: {
    /* n:"BrtExternSheet", */
    f: go
  },
  363: {
    /* n:"BrtExternTableStart" */
  },
  364: {
    /* n:"BrtExternTableEnd" */
  },
  366: {
    /* n:"BrtExternRowHdr" */
  },
  367: {
    /* n:"BrtExternCellBlank" */
  },
  368: {
    /* n:"BrtExternCellReal" */
  },
  369: {
    /* n:"BrtExternCellBool" */
  },
  370: {
    /* n:"BrtExternCellError" */
  },
  371: {
    /* n:"BrtExternCellString" */
  },
  372: {
    /* n:"BrtBeginEsmdx", */
    T: 1
  },
  373: {
    /* n:"BrtEndEsmdx", */
    T: -1
  },
  374: {
    /* n:"BrtBeginMdxSet", */
    T: 1
  },
  375: {
    /* n:"BrtEndMdxSet", */
    T: -1
  },
  376: {
    /* n:"BrtBeginMdxMbrProp", */
    T: 1
  },
  377: {
    /* n:"BrtEndMdxMbrProp", */
    T: -1
  },
  378: {
    /* n:"BrtBeginMdxKPI", */
    T: 1
  },
  379: {
    /* n:"BrtEndMdxKPI", */
    T: -1
  },
  380: {
    /* n:"BrtBeginEsstr", */
    T: 1
  },
  381: {
    /* n:"BrtEndEsstr", */
    T: -1
  },
  382: {
    /* n:"BrtBeginPRFItem", */
    T: 1
  },
  383: {
    /* n:"BrtEndPRFItem", */
    T: -1
  },
  384: {
    /* n:"BrtBeginPivotCacheIDs", */
    T: 1
  },
  385: {
    /* n:"BrtEndPivotCacheIDs", */
    T: -1
  },
  386: {
    /* n:"BrtBeginPivotCacheID", */
    T: 1
  },
  387: {
    /* n:"BrtEndPivotCacheID", */
    T: -1
  },
  388: {
    /* n:"BrtBeginISXVIs", */
    T: 1
  },
  389: {
    /* n:"BrtEndISXVIs", */
    T: -1
  },
  390: {
    /* n:"BrtBeginColInfos", */
    T: 1
  },
  391: {
    /* n:"BrtEndColInfos", */
    T: -1
  },
  392: {
    /* n:"BrtBeginRwBrk", */
    T: 1
  },
  393: {
    /* n:"BrtEndRwBrk", */
    T: -1
  },
  394: {
    /* n:"BrtBeginColBrk", */
    T: 1
  },
  395: {
    /* n:"BrtEndColBrk", */
    T: -1
  },
  396: {
    /* n:"BrtBrk" */
  },
  397: {
    /* n:"BrtUserBookView" */
  },
  398: {
    /* n:"BrtInfo" */
  },
  399: {
    /* n:"BrtCUsr" */
  },
  400: {
    /* n:"BrtUsr" */
  },
  401: {
    /* n:"BrtBeginUsers", */
    T: 1
  },
  403: {
    /* n:"BrtEOF" */
  },
  404: {
    /* n:"BrtUCR" */
  },
  405: {
    /* n:"BrtRRInsDel" */
  },
  406: {
    /* n:"BrtRREndInsDel" */
  },
  407: {
    /* n:"BrtRRMove" */
  },
  408: {
    /* n:"BrtRREndMove" */
  },
  409: {
    /* n:"BrtRRChgCell" */
  },
  410: {
    /* n:"BrtRREndChgCell" */
  },
  411: {
    /* n:"BrtRRHeader" */
  },
  412: {
    /* n:"BrtRRUserView" */
  },
  413: {
    /* n:"BrtRRRenSheet" */
  },
  414: {
    /* n:"BrtRRInsertSh" */
  },
  415: {
    /* n:"BrtRRDefName" */
  },
  416: {
    /* n:"BrtRRNote" */
  },
  417: {
    /* n:"BrtRRConflict" */
  },
  418: {
    /* n:"BrtRRTQSIF" */
  },
  419: {
    /* n:"BrtRRFormat" */
  },
  420: {
    /* n:"BrtRREndFormat" */
  },
  421: {
    /* n:"BrtRRAutoFmt" */
  },
  422: {
    /* n:"BrtBeginUserShViews", */
    T: 1
  },
  423: {
    /* n:"BrtBeginUserShView", */
    T: 1
  },
  424: {
    /* n:"BrtEndUserShView", */
    T: -1
  },
  425: {
    /* n:"BrtEndUserShViews", */
    T: -1
  },
  426: {
    /* n:"BrtArrFmla", */
    f: wg
  },
  427: {
    /* n:"BrtShrFmla", */
    f: kg
  },
  428: {
    /* n:"BrtTable" */
  },
  429: {
    /* n:"BrtBeginExtConnections", */
    T: 1
  },
  430: {
    /* n:"BrtEndExtConnections", */
    T: -1
  },
  431: {
    /* n:"BrtBeginPCDCalcMems", */
    T: 1
  },
  432: {
    /* n:"BrtEndPCDCalcMems", */
    T: -1
  },
  433: {
    /* n:"BrtBeginPCDCalcMem", */
    T: 1
  },
  434: {
    /* n:"BrtEndPCDCalcMem", */
    T: -1
  },
  435: {
    /* n:"BrtBeginPCDHGLevels", */
    T: 1
  },
  436: {
    /* n:"BrtEndPCDHGLevels", */
    T: -1
  },
  437: {
    /* n:"BrtBeginPCDHGLevel", */
    T: 1
  },
  438: {
    /* n:"BrtEndPCDHGLevel", */
    T: -1
  },
  439: {
    /* n:"BrtBeginPCDHGLGroups", */
    T: 1
  },
  440: {
    /* n:"BrtEndPCDHGLGroups", */
    T: -1
  },
  441: {
    /* n:"BrtBeginPCDHGLGroup", */
    T: 1
  },
  442: {
    /* n:"BrtEndPCDHGLGroup", */
    T: -1
  },
  443: {
    /* n:"BrtBeginPCDHGLGMembers", */
    T: 1
  },
  444: {
    /* n:"BrtEndPCDHGLGMembers", */
    T: -1
  },
  445: {
    /* n:"BrtBeginPCDHGLGMember", */
    T: 1
  },
  446: {
    /* n:"BrtEndPCDHGLGMember", */
    T: -1
  },
  447: {
    /* n:"BrtBeginQSI", */
    T: 1
  },
  448: {
    /* n:"BrtEndQSI", */
    T: -1
  },
  449: {
    /* n:"BrtBeginQSIR", */
    T: 1
  },
  450: {
    /* n:"BrtEndQSIR", */
    T: -1
  },
  451: {
    /* n:"BrtBeginDeletedNames", */
    T: 1
  },
  452: {
    /* n:"BrtEndDeletedNames", */
    T: -1
  },
  453: {
    /* n:"BrtBeginDeletedName", */
    T: 1
  },
  454: {
    /* n:"BrtEndDeletedName", */
    T: -1
  },
  455: {
    /* n:"BrtBeginQSIFs", */
    T: 1
  },
  456: {
    /* n:"BrtEndQSIFs", */
    T: -1
  },
  457: {
    /* n:"BrtBeginQSIF", */
    T: 1
  },
  458: {
    /* n:"BrtEndQSIF", */
    T: -1
  },
  459: {
    /* n:"BrtBeginAutoSortScope", */
    T: 1
  },
  460: {
    /* n:"BrtEndAutoSortScope", */
    T: -1
  },
  461: {
    /* n:"BrtBeginConditionalFormatting", */
    T: 1
  },
  462: {
    /* n:"BrtEndConditionalFormatting", */
    T: -1
  },
  463: {
    /* n:"BrtBeginCFRule", */
    T: 1
  },
  464: {
    /* n:"BrtEndCFRule", */
    T: -1
  },
  465: {
    /* n:"BrtBeginIconSet", */
    T: 1
  },
  466: {
    /* n:"BrtEndIconSet", */
    T: -1
  },
  467: {
    /* n:"BrtBeginDatabar", */
    T: 1
  },
  468: {
    /* n:"BrtEndDatabar", */
    T: -1
  },
  469: {
    /* n:"BrtBeginColorScale", */
    T: 1
  },
  470: {
    /* n:"BrtEndColorScale", */
    T: -1
  },
  471: {
    /* n:"BrtCFVO" */
  },
  472: {
    /* n:"BrtExternValueMeta" */
  },
  473: {
    /* n:"BrtBeginColorPalette", */
    T: 1
  },
  474: {
    /* n:"BrtEndColorPalette", */
    T: -1
  },
  475: {
    /* n:"BrtIndexedColor" */
  },
  476: {
    /* n:"BrtMargins", */
    f: Eg
  },
  477: {
    /* n:"BrtPrintOptions" */
  },
  478: {
    /* n:"BrtPageSetup" */
  },
  479: {
    /* n:"BrtBeginHeaderFooter", */
    T: 1
  },
  480: {
    /* n:"BrtEndHeaderFooter", */
    T: -1
  },
  481: {
    /* n:"BrtBeginSXCrtFormat", */
    T: 1
  },
  482: {
    /* n:"BrtEndSXCrtFormat", */
    T: -1
  },
  483: {
    /* n:"BrtBeginSXCrtFormats", */
    T: 1
  },
  484: {
    /* n:"BrtEndSXCrtFormats", */
    T: -1
  },
  485: {
    /* n:"BrtWsFmtInfo", */
    f: Dp
  },
  486: {
    /* n:"BrtBeginMgs", */
    T: 1
  },
  487: {
    /* n:"BrtEndMGs", */
    T: -1
  },
  488: {
    /* n:"BrtBeginMGMaps", */
    T: 1
  },
  489: {
    /* n:"BrtEndMGMaps", */
    T: -1
  },
  490: {
    /* n:"BrtBeginMG", */
    T: 1
  },
  491: {
    /* n:"BrtEndMG", */
    T: -1
  },
  492: {
    /* n:"BrtBeginMap", */
    T: 1
  },
  493: {
    /* n:"BrtEndMap", */
    T: -1
  },
  494: {
    /* n:"BrtHLink", */
    f: pg
  },
  495: {
    /* n:"BrtBeginDCon", */
    T: 1
  },
  496: {
    /* n:"BrtEndDCon", */
    T: -1
  },
  497: {
    /* n:"BrtBeginDRefs", */
    T: 1
  },
  498: {
    /* n:"BrtEndDRefs", */
    T: -1
  },
  499: {
    /* n:"BrtDRef" */
  },
  500: {
    /* n:"BrtBeginScenMan", */
    T: 1
  },
  501: {
    /* n:"BrtEndScenMan", */
    T: -1
  },
  502: {
    /* n:"BrtBeginSct", */
    T: 1
  },
  503: {
    /* n:"BrtEndSct", */
    T: -1
  },
  504: {
    /* n:"BrtSlc" */
  },
  505: {
    /* n:"BrtBeginDXFs", */
    T: 1
  },
  506: {
    /* n:"BrtEndDXFs", */
    T: -1
  },
  507: {
    /* n:"BrtDXF" */
  },
  508: {
    /* n:"BrtBeginTableStyles", */
    T: 1
  },
  509: {
    /* n:"BrtEndTableStyles", */
    T: -1
  },
  510: {
    /* n:"BrtBeginTableStyle", */
    T: 1
  },
  511: {
    /* n:"BrtEndTableStyle", */
    T: -1
  },
  512: {
    /* n:"BrtTableStyleElement" */
  },
  513: {
    /* n:"BrtTableStyleClient" */
  },
  514: {
    /* n:"BrtBeginVolDeps", */
    T: 1
  },
  515: {
    /* n:"BrtEndVolDeps", */
    T: -1
  },
  516: {
    /* n:"BrtBeginVolType", */
    T: 1
  },
  517: {
    /* n:"BrtEndVolType", */
    T: -1
  },
  518: {
    /* n:"BrtBeginVolMain", */
    T: 1
  },
  519: {
    /* n:"BrtEndVolMain", */
    T: -1
  },
  520: {
    /* n:"BrtBeginVolTopic", */
    T: 1
  },
  521: {
    /* n:"BrtEndVolTopic", */
    T: -1
  },
  522: {
    /* n:"BrtVolSubtopic" */
  },
  523: {
    /* n:"BrtVolRef" */
  },
  524: {
    /* n:"BrtVolNum" */
  },
  525: {
    /* n:"BrtVolErr" */
  },
  526: {
    /* n:"BrtVolStr" */
  },
  527: {
    /* n:"BrtVolBool" */
  },
  528: {
    /* n:"BrtBeginCalcChain$", */
    T: 1
  },
  529: {
    /* n:"BrtEndCalcChain$", */
    T: -1
  },
  530: {
    /* n:"BrtBeginSortState", */
    T: 1
  },
  531: {
    /* n:"BrtEndSortState", */
    T: -1
  },
  532: {
    /* n:"BrtBeginSortCond", */
    T: 1
  },
  533: {
    /* n:"BrtEndSortCond", */
    T: -1
  },
  534: {
    /* n:"BrtBookProtection" */
  },
  535: {
    /* n:"BrtSheetProtection" */
  },
  536: {
    /* n:"BrtRangeProtection" */
  },
  537: {
    /* n:"BrtPhoneticInfo" */
  },
  538: {
    /* n:"BrtBeginECTxtWiz", */
    T: 1
  },
  539: {
    /* n:"BrtEndECTxtWiz", */
    T: -1
  },
  540: {
    /* n:"BrtBeginECTWFldInfoLst", */
    T: 1
  },
  541: {
    /* n:"BrtEndECTWFldInfoLst", */
    T: -1
  },
  542: {
    /* n:"BrtBeginECTwFldInfo", */
    T: 1
  },
  548: {
    /* n:"BrtFileSharing" */
  },
  549: {
    /* n:"BrtOleSize" */
  },
  550: {
    /* n:"BrtDrawing", */
    f: Zi
  },
  551: {
    /* n:"BrtLegacyDrawing", */
    f: wi
  },
  552: {
    /* n:"BrtLegacyDrawingHF" */
  },
  553: {
    /* n:"BrtWebOpt" */
  },
  554: {
    /* n:"BrtBeginWebPubItems", */
    T: 1
  },
  555: {
    /* n:"BrtEndWebPubItems", */
    T: -1
  },
  556: {
    /* n:"BrtBeginWebPubItem", */
    T: 1
  },
  557: {
    /* n:"BrtEndWebPubItem", */
    T: -1
  },
  558: {
    /* n:"BrtBeginSXCondFmt", */
    T: 1
  },
  559: {
    /* n:"BrtEndSXCondFmt", */
    T: -1
  },
  560: {
    /* n:"BrtBeginSXCondFmts", */
    T: 1
  },
  561: {
    /* n:"BrtEndSXCondFmts", */
    T: -1
  },
  562: {
    /* n:"BrtBkHim" */
  },
  564: {
    /* n:"BrtColor" */
  },
  565: {
    /* n:"BrtBeginIndexedColors", */
    T: 1
  },
  566: {
    /* n:"BrtEndIndexedColors", */
    T: -1
  },
  569: {
    /* n:"BrtBeginMRUColors", */
    T: 1
  },
  570: {
    /* n:"BrtEndMRUColors", */
    T: -1
  },
  572: {
    /* n:"BrtMRUColor" */
  },
  573: {
    /* n:"BrtBeginDVals", */
    T: 1
  },
  574: {
    /* n:"BrtEndDVals", */
    T: -1
  },
  577: {
    /* n:"BrtSupNameStart" */
  },
  578: {
    /* n:"BrtSupNameValueStart" */
  },
  579: {
    /* n:"BrtSupNameValueEnd" */
  },
  580: {
    /* n:"BrtSupNameNum" */
  },
  581: {
    /* n:"BrtSupNameErr" */
  },
  582: {
    /* n:"BrtSupNameSt" */
  },
  583: {
    /* n:"BrtSupNameNil" */
  },
  584: {
    /* n:"BrtSupNameBool" */
  },
  585: {
    /* n:"BrtSupNameFmla" */
  },
  586: {
    /* n:"BrtSupNameBits" */
  },
  587: {
    /* n:"BrtSupNameEnd" */
  },
  588: {
    /* n:"BrtEndSupBook", */
    T: -1
  },
  589: {
    /* n:"BrtCellSmartTagProperty" */
  },
  590: {
    /* n:"BrtBeginCellSmartTag", */
    T: 1
  },
  591: {
    /* n:"BrtEndCellSmartTag", */
    T: -1
  },
  592: {
    /* n:"BrtBeginCellSmartTags", */
    T: 1
  },
  593: {
    /* n:"BrtEndCellSmartTags", */
    T: -1
  },
  594: {
    /* n:"BrtBeginSmartTags", */
    T: 1
  },
  595: {
    /* n:"BrtEndSmartTags", */
    T: -1
  },
  596: {
    /* n:"BrtSmartTagType" */
  },
  597: {
    /* n:"BrtBeginSmartTagTypes", */
    T: 1
  },
  598: {
    /* n:"BrtEndSmartTagTypes", */
    T: -1
  },
  599: {
    /* n:"BrtBeginSXFilters", */
    T: 1
  },
  600: {
    /* n:"BrtEndSXFilters", */
    T: -1
  },
  601: {
    /* n:"BrtBeginSXFILTER", */
    T: 1
  },
  602: {
    /* n:"BrtEndSXFilter", */
    T: -1
  },
  603: {
    /* n:"BrtBeginFills", */
    T: 1
  },
  604: {
    /* n:"BrtEndFills", */
    T: -1
  },
  605: {
    /* n:"BrtBeginCellWatches", */
    T: 1
  },
  606: {
    /* n:"BrtEndCellWatches", */
    T: -1
  },
  607: {
    /* n:"BrtCellWatch" */
  },
  608: {
    /* n:"BrtBeginCRErrs", */
    T: 1
  },
  609: {
    /* n:"BrtEndCRErrs", */
    T: -1
  },
  610: {
    /* n:"BrtCrashRecErr" */
  },
  611: {
    /* n:"BrtBeginFonts", */
    T: 1
  },
  612: {
    /* n:"BrtEndFonts", */
    T: -1
  },
  613: {
    /* n:"BrtBeginBorders", */
    T: 1
  },
  614: {
    /* n:"BrtEndBorders", */
    T: -1
  },
  615: {
    /* n:"BrtBeginFmts", */
    T: 1
  },
  616: {
    /* n:"BrtEndFmts", */
    T: -1
  },
  617: {
    /* n:"BrtBeginCellXFs", */
    T: 1
  },
  618: {
    /* n:"BrtEndCellXFs", */
    T: -1
  },
  619: {
    /* n:"BrtBeginStyles", */
    T: 1
  },
  620: {
    /* n:"BrtEndStyles", */
    T: -1
  },
  625: {
    /* n:"BrtBigName" */
  },
  626: {
    /* n:"BrtBeginCellStyleXFs", */
    T: 1
  },
  627: {
    /* n:"BrtEndCellStyleXFs", */
    T: -1
  },
  628: {
    /* n:"BrtBeginComments", */
    T: 1
  },
  629: {
    /* n:"BrtEndComments", */
    T: -1
  },
  630: {
    /* n:"BrtBeginCommentAuthors", */
    T: 1
  },
  631: {
    /* n:"BrtEndCommentAuthors", */
    T: -1
  },
  632: {
    /* n:"BrtCommentAuthor", */
    f: i2
  },
  633: {
    /* n:"BrtBeginCommentList", */
    T: 1
  },
  634: {
    /* n:"BrtEndCommentList", */
    T: -1
  },
  635: {
    /* n:"BrtBeginComment", */
    T: 1,
    f: a2
  },
  636: {
    /* n:"BrtEndComment", */
    T: -1
  },
  637: {
    /* n:"BrtCommentText", */
    f: yu
  },
  638: {
    /* n:"BrtBeginOleObjects", */
    T: 1
  },
  639: {
    /* n:"BrtOleObject" */
  },
  640: {
    /* n:"BrtEndOleObjects", */
    T: -1
  },
  641: {
    /* n:"BrtBeginSxrules", */
    T: 1
  },
  642: {
    /* n:"BrtEndSxRules", */
    T: -1
  },
  643: {
    /* n:"BrtBeginActiveXControls", */
    T: 1
  },
  644: {
    /* n:"BrtActiveX" */
  },
  645: {
    /* n:"BrtEndActiveXControls", */
    T: -1
  },
  646: {
    /* n:"BrtBeginPCDSDTCEMembersSortBy", */
    T: 1
  },
  648: {
    /* n:"BrtBeginCellIgnoreECs", */
    T: 1
  },
  649: {
    /* n:"BrtCellIgnoreEC" */
  },
  650: {
    /* n:"BrtEndCellIgnoreECs", */
    T: -1
  },
  651: {
    /* n:"BrtCsProp", */
    f: zg
  },
  652: {
    /* n:"BrtCsPageSetup" */
  },
  653: {
    /* n:"BrtBeginUserCsViews", */
    T: 1
  },
  654: {
    /* n:"BrtEndUserCsViews", */
    T: -1
  },
  655: {
    /* n:"BrtBeginUserCsView", */
    T: 1
  },
  656: {
    /* n:"BrtEndUserCsView", */
    T: -1
  },
  657: {
    /* n:"BrtBeginPcdSFCIEntries", */
    T: 1
  },
  658: {
    /* n:"BrtEndPCDSFCIEntries", */
    T: -1
  },
  659: {
    /* n:"BrtPCDSFCIEntry" */
  },
  660: {
    /* n:"BrtBeginListParts", */
    T: 1
  },
  661: {
    /* n:"BrtListPart" */
  },
  662: {
    /* n:"BrtEndListParts", */
    T: -1
  },
  663: {
    /* n:"BrtSheetCalcProp" */
  },
  664: {
    /* n:"BrtBeginFnGroup", */
    T: 1
  },
  665: {
    /* n:"BrtFnGroup" */
  },
  666: {
    /* n:"BrtEndFnGroup", */
    T: -1
  },
  667: {
    /* n:"BrtSupAddin" */
  },
  668: {
    /* n:"BrtSXTDMPOrder" */
  },
  669: {
    /* n:"BrtCsProtection" */
  },
  671: {
    /* n:"BrtBeginWsSortMap", */
    T: 1
  },
  672: {
    /* n:"BrtEndWsSortMap", */
    T: -1
  },
  673: {
    /* n:"BrtBeginRRSort", */
    T: 1
  },
  674: {
    /* n:"BrtEndRRSort", */
    T: -1
  },
  675: {
    /* n:"BrtRRSortItem" */
  },
  676: {
    /* n:"BrtFileSharingIso" */
  },
  677: {
    /* n:"BrtBookProtectionIso" */
  },
  678: {
    /* n:"BrtSheetProtectionIso" */
  },
  679: {
    /* n:"BrtCsProtectionIso" */
  },
  680: {
    /* n:"BrtRangeProtectionIso" */
  },
  681: {
    /* n:"BrtDValList" */
  },
  1024: {
    /* n:"BrtRwDescent" */
  },
  1025: {
    /* n:"BrtKnownFonts" */
  },
  1026: {
    /* n:"BrtBeginSXTupleSet", */
    T: 1
  },
  1027: {
    /* n:"BrtEndSXTupleSet", */
    T: -1
  },
  1028: {
    /* n:"BrtBeginSXTupleSetHeader", */
    T: 1
  },
  1029: {
    /* n:"BrtEndSXTupleSetHeader", */
    T: -1
  },
  1030: {
    /* n:"BrtSXTupleSetHeaderItem" */
  },
  1031: {
    /* n:"BrtBeginSXTupleSetData", */
    T: 1
  },
  1032: {
    /* n:"BrtEndSXTupleSetData", */
    T: -1
  },
  1033: {
    /* n:"BrtBeginSXTupleSetRow", */
    T: 1
  },
  1034: {
    /* n:"BrtEndSXTupleSetRow", */
    T: -1
  },
  1035: {
    /* n:"BrtSXTupleSetRowItem" */
  },
  1036: {
    /* n:"BrtNameExt" */
  },
  1037: {
    /* n:"BrtPCDH14" */
  },
  1038: {
    /* n:"BrtBeginPCDCalcMem14", */
    T: 1
  },
  1039: {
    /* n:"BrtEndPCDCalcMem14", */
    T: -1
  },
  1040: {
    /* n:"BrtSXTH14" */
  },
  1041: {
    /* n:"BrtBeginSparklineGroup", */
    T: 1
  },
  1042: {
    /* n:"BrtEndSparklineGroup", */
    T: -1
  },
  1043: {
    /* n:"BrtSparkline" */
  },
  1044: {
    /* n:"BrtSXDI14" */
  },
  1045: {
    /* n:"BrtWsFmtInfoEx14" */
  },
  1046: {
    /* n:"BrtBeginConditionalFormatting14", */
    T: 1
  },
  1047: {
    /* n:"BrtEndConditionalFormatting14", */
    T: -1
  },
  1048: {
    /* n:"BrtBeginCFRule14", */
    T: 1
  },
  1049: {
    /* n:"BrtEndCFRule14", */
    T: -1
  },
  1050: {
    /* n:"BrtCFVO14" */
  },
  1051: {
    /* n:"BrtBeginDatabar14", */
    T: 1
  },
  1052: {
    /* n:"BrtBeginIconSet14", */
    T: 1
  },
  1053: {
    /* n:"BrtDVal14", */
    f: Cg
  },
  1054: {
    /* n:"BrtBeginDVals14", */
    T: 1
  },
  1055: {
    /* n:"BrtColor14" */
  },
  1056: {
    /* n:"BrtBeginSparklines", */
    T: 1
  },
  1057: {
    /* n:"BrtEndSparklines", */
    T: -1
  },
  1058: {
    /* n:"BrtBeginSparklineGroups", */
    T: 1
  },
  1059: {
    /* n:"BrtEndSparklineGroups", */
    T: -1
  },
  1061: {
    /* n:"BrtSXVD14" */
  },
  1062: {
    /* n:"BrtBeginSXView14", */
    T: 1
  },
  1063: {
    /* n:"BrtEndSXView14", */
    T: -1
  },
  1064: {
    /* n:"BrtBeginSXView16", */
    T: 1
  },
  1065: {
    /* n:"BrtEndSXView16", */
    T: -1
  },
  1066: {
    /* n:"BrtBeginPCD14", */
    T: 1
  },
  1067: {
    /* n:"BrtEndPCD14", */
    T: -1
  },
  1068: {
    /* n:"BrtBeginExtConn14", */
    T: 1
  },
  1069: {
    /* n:"BrtEndExtConn14", */
    T: -1
  },
  1070: {
    /* n:"BrtBeginSlicerCacheIDs", */
    T: 1
  },
  1071: {
    /* n:"BrtEndSlicerCacheIDs", */
    T: -1
  },
  1072: {
    /* n:"BrtBeginSlicerCacheID", */
    T: 1
  },
  1073: {
    /* n:"BrtEndSlicerCacheID", */
    T: -1
  },
  1075: {
    /* n:"BrtBeginSlicerCache", */
    T: 1
  },
  1076: {
    /* n:"BrtEndSlicerCache", */
    T: -1
  },
  1077: {
    /* n:"BrtBeginSlicerCacheDef", */
    T: 1
  },
  1078: {
    /* n:"BrtEndSlicerCacheDef", */
    T: -1
  },
  1079: {
    /* n:"BrtBeginSlicersEx", */
    T: 1
  },
  1080: {
    /* n:"BrtEndSlicersEx", */
    T: -1
  },
  1081: {
    /* n:"BrtBeginSlicerEx", */
    T: 1
  },
  1082: {
    /* n:"BrtEndSlicerEx", */
    T: -1
  },
  1083: {
    /* n:"BrtBeginSlicer", */
    T: 1
  },
  1084: {
    /* n:"BrtEndSlicer", */
    T: -1
  },
  1085: {
    /* n:"BrtSlicerCachePivotTables" */
  },
  1086: {
    /* n:"BrtBeginSlicerCacheOlapImpl", */
    T: 1
  },
  1087: {
    /* n:"BrtEndSlicerCacheOlapImpl", */
    T: -1
  },
  1088: {
    /* n:"BrtBeginSlicerCacheLevelsData", */
    T: 1
  },
  1089: {
    /* n:"BrtEndSlicerCacheLevelsData", */
    T: -1
  },
  1090: {
    /* n:"BrtBeginSlicerCacheLevelData", */
    T: 1
  },
  1091: {
    /* n:"BrtEndSlicerCacheLevelData", */
    T: -1
  },
  1092: {
    /* n:"BrtBeginSlicerCacheSiRanges", */
    T: 1
  },
  1093: {
    /* n:"BrtEndSlicerCacheSiRanges", */
    T: -1
  },
  1094: {
    /* n:"BrtBeginSlicerCacheSiRange", */
    T: 1
  },
  1095: {
    /* n:"BrtEndSlicerCacheSiRange", */
    T: -1
  },
  1096: {
    /* n:"BrtSlicerCacheOlapItem" */
  },
  1097: {
    /* n:"BrtBeginSlicerCacheSelections", */
    T: 1
  },
  1098: {
    /* n:"BrtSlicerCacheSelection" */
  },
  1099: {
    /* n:"BrtEndSlicerCacheSelections", */
    T: -1
  },
  1100: {
    /* n:"BrtBeginSlicerCacheNative", */
    T: 1
  },
  1101: {
    /* n:"BrtEndSlicerCacheNative", */
    T: -1
  },
  1102: {
    /* n:"BrtSlicerCacheNativeItem" */
  },
  1103: {
    /* n:"BrtRangeProtection14" */
  },
  1104: {
    /* n:"BrtRangeProtectionIso14" */
  },
  1105: {
    /* n:"BrtCellIgnoreEC14" */
  },
  1111: {
    /* n:"BrtList14" */
  },
  1112: {
    /* n:"BrtCFIcon" */
  },
  1113: {
    /* n:"BrtBeginSlicerCachesPivotCacheIDs", */
    T: 1
  },
  1114: {
    /* n:"BrtEndSlicerCachesPivotCacheIDs", */
    T: -1
  },
  1115: {
    /* n:"BrtBeginSlicers", */
    T: 1
  },
  1116: {
    /* n:"BrtEndSlicers", */
    T: -1
  },
  1117: {
    /* n:"BrtWbProp14" */
  },
  1118: {
    /* n:"BrtBeginSXEdit", */
    T: 1
  },
  1119: {
    /* n:"BrtEndSXEdit", */
    T: -1
  },
  1120: {
    /* n:"BrtBeginSXEdits", */
    T: 1
  },
  1121: {
    /* n:"BrtEndSXEdits", */
    T: -1
  },
  1122: {
    /* n:"BrtBeginSXChange", */
    T: 1
  },
  1123: {
    /* n:"BrtEndSXChange", */
    T: -1
  },
  1124: {
    /* n:"BrtBeginSXChanges", */
    T: 1
  },
  1125: {
    /* n:"BrtEndSXChanges", */
    T: -1
  },
  1126: {
    /* n:"BrtSXTupleItems" */
  },
  1128: {
    /* n:"BrtBeginSlicerStyle", */
    T: 1
  },
  1129: {
    /* n:"BrtEndSlicerStyle", */
    T: -1
  },
  1130: {
    /* n:"BrtSlicerStyleElement" */
  },
  1131: {
    /* n:"BrtBeginStyleSheetExt14", */
    T: 1
  },
  1132: {
    /* n:"BrtEndStyleSheetExt14", */
    T: -1
  },
  1133: {
    /* n:"BrtBeginSlicerCachesPivotCacheID", */
    T: 1
  },
  1134: {
    /* n:"BrtEndSlicerCachesPivotCacheID", */
    T: -1
  },
  1135: {
    /* n:"BrtBeginConditionalFormattings", */
    T: 1
  },
  1136: {
    /* n:"BrtEndConditionalFormattings", */
    T: -1
  },
  1137: {
    /* n:"BrtBeginPCDCalcMemExt", */
    T: 1
  },
  1138: {
    /* n:"BrtEndPCDCalcMemExt", */
    T: -1
  },
  1139: {
    /* n:"BrtBeginPCDCalcMemsExt", */
    T: 1
  },
  1140: {
    /* n:"BrtEndPCDCalcMemsExt", */
    T: -1
  },
  1141: {
    /* n:"BrtPCDField14" */
  },
  1142: {
    /* n:"BrtBeginSlicerStyles", */
    T: 1
  },
  1143: {
    /* n:"BrtEndSlicerStyles", */
    T: -1
  },
  1144: {
    /* n:"BrtBeginSlicerStyleElements", */
    T: 1
  },
  1145: {
    /* n:"BrtEndSlicerStyleElements", */
    T: -1
  },
  1146: {
    /* n:"BrtCFRuleExt" */
  },
  1147: {
    /* n:"BrtBeginSXCondFmt14", */
    T: 1
  },
  1148: {
    /* n:"BrtEndSXCondFmt14", */
    T: -1
  },
  1149: {
    /* n:"BrtBeginSXCondFmts14", */
    T: 1
  },
  1150: {
    /* n:"BrtEndSXCondFmts14", */
    T: -1
  },
  1152: {
    /* n:"BrtBeginSortCond14", */
    T: 1
  },
  1153: {
    /* n:"BrtEndSortCond14", */
    T: -1
  },
  1154: {
    /* n:"BrtEndDVals14", */
    T: -1
  },
  1155: {
    /* n:"BrtEndIconSet14", */
    T: -1
  },
  1156: {
    /* n:"BrtEndDatabar14", */
    T: -1
  },
  1157: {
    /* n:"BrtBeginColorScale14", */
    T: 1
  },
  1158: {
    /* n:"BrtEndColorScale14", */
    T: -1
  },
  1159: {
    /* n:"BrtBeginSxrules14", */
    T: 1
  },
  1160: {
    /* n:"BrtEndSxrules14", */
    T: -1
  },
  1161: {
    /* n:"BrtBeginPRule14", */
    T: 1
  },
  1162: {
    /* n:"BrtEndPRule14", */
    T: -1
  },
  1163: {
    /* n:"BrtBeginPRFilters14", */
    T: 1
  },
  1164: {
    /* n:"BrtEndPRFilters14", */
    T: -1
  },
  1165: {
    /* n:"BrtBeginPRFilter14", */
    T: 1
  },
  1166: {
    /* n:"BrtEndPRFilter14", */
    T: -1
  },
  1167: {
    /* n:"BrtBeginPRFItem14", */
    T: 1
  },
  1168: {
    /* n:"BrtEndPRFItem14", */
    T: -1
  },
  1169: {
    /* n:"BrtBeginCellIgnoreECs14", */
    T: 1
  },
  1170: {
    /* n:"BrtEndCellIgnoreECs14", */
    T: -1
  },
  1171: {
    /* n:"BrtDxf14" */
  },
  1172: {
    /* n:"BrtBeginDxF14s", */
    T: 1
  },
  1173: {
    /* n:"BrtEndDxf14s", */
    T: -1
  },
  1177: {
    /* n:"BrtFilter14" */
  },
  1178: {
    /* n:"BrtBeginCustomFilters14", */
    T: 1
  },
  1180: {
    /* n:"BrtCustomFilter14" */
  },
  1181: {
    /* n:"BrtIconFilter14" */
  },
  1182: {
    /* n:"BrtPivotCacheConnectionName" */
  },
  2048: {
    /* n:"BrtBeginDecoupledPivotCacheIDs", */
    T: 1
  },
  2049: {
    /* n:"BrtEndDecoupledPivotCacheIDs", */
    T: -1
  },
  2050: {
    /* n:"BrtDecoupledPivotCacheID" */
  },
  2051: {
    /* n:"BrtBeginPivotTableRefs", */
    T: 1
  },
  2052: {
    /* n:"BrtEndPivotTableRefs", */
    T: -1
  },
  2053: {
    /* n:"BrtPivotTableRef" */
  },
  2054: {
    /* n:"BrtSlicerCacheBookPivotTables" */
  },
  2055: {
    /* n:"BrtBeginSxvcells", */
    T: 1
  },
  2056: {
    /* n:"BrtEndSxvcells", */
    T: -1
  },
  2057: {
    /* n:"BrtBeginSxRow", */
    T: 1
  },
  2058: {
    /* n:"BrtEndSxRow", */
    T: -1
  },
  2060: {
    /* n:"BrtPcdCalcMem15" */
  },
  2067: {
    /* n:"BrtQsi15" */
  },
  2068: {
    /* n:"BrtBeginWebExtensions", */
    T: 1
  },
  2069: {
    /* n:"BrtEndWebExtensions", */
    T: -1
  },
  2070: {
    /* n:"BrtWebExtension" */
  },
  2071: {
    /* n:"BrtAbsPath15" */
  },
  2072: {
    /* n:"BrtBeginPivotTableUISettings", */
    T: 1
  },
  2073: {
    /* n:"BrtEndPivotTableUISettings", */
    T: -1
  },
  2075: {
    /* n:"BrtTableSlicerCacheIDs" */
  },
  2076: {
    /* n:"BrtTableSlicerCacheID" */
  },
  2077: {
    /* n:"BrtBeginTableSlicerCache", */
    T: 1
  },
  2078: {
    /* n:"BrtEndTableSlicerCache", */
    T: -1
  },
  2079: {
    /* n:"BrtSxFilter15" */
  },
  2080: {
    /* n:"BrtBeginTimelineCachePivotCacheIDs", */
    T: 1
  },
  2081: {
    /* n:"BrtEndTimelineCachePivotCacheIDs", */
    T: -1
  },
  2082: {
    /* n:"BrtTimelineCachePivotCacheID" */
  },
  2083: {
    /* n:"BrtBeginTimelineCacheIDs", */
    T: 1
  },
  2084: {
    /* n:"BrtEndTimelineCacheIDs", */
    T: -1
  },
  2085: {
    /* n:"BrtBeginTimelineCacheID", */
    T: 1
  },
  2086: {
    /* n:"BrtEndTimelineCacheID", */
    T: -1
  },
  2087: {
    /* n:"BrtBeginTimelinesEx", */
    T: 1
  },
  2088: {
    /* n:"BrtEndTimelinesEx", */
    T: -1
  },
  2089: {
    /* n:"BrtBeginTimelineEx", */
    T: 1
  },
  2090: {
    /* n:"BrtEndTimelineEx", */
    T: -1
  },
  2091: {
    /* n:"BrtWorkBookPr15" */
  },
  2092: {
    /* n:"BrtPCDH15" */
  },
  2093: {
    /* n:"BrtBeginTimelineStyle", */
    T: 1
  },
  2094: {
    /* n:"BrtEndTimelineStyle", */
    T: -1
  },
  2095: {
    /* n:"BrtTimelineStyleElement" */
  },
  2096: {
    /* n:"BrtBeginTimelineStylesheetExt15", */
    T: 1
  },
  2097: {
    /* n:"BrtEndTimelineStylesheetExt15", */
    T: -1
  },
  2098: {
    /* n:"BrtBeginTimelineStyles", */
    T: 1
  },
  2099: {
    /* n:"BrtEndTimelineStyles", */
    T: -1
  },
  2100: {
    /* n:"BrtBeginTimelineStyleElements", */
    T: 1
  },
  2101: {
    /* n:"BrtEndTimelineStyleElements", */
    T: -1
  },
  2102: {
    /* n:"BrtDxf15" */
  },
  2103: {
    /* n:"BrtBeginDxfs15", */
    T: 1
  },
  2104: {
    /* n:"BrtEndDxfs15", */
    T: -1
  },
  2105: {
    /* n:"BrtSlicerCacheHideItemsWithNoData" */
  },
  2106: {
    /* n:"BrtBeginItemUniqueNames", */
    T: 1
  },
  2107: {
    /* n:"BrtEndItemUniqueNames", */
    T: -1
  },
  2108: {
    /* n:"BrtItemUniqueName" */
  },
  2109: {
    /* n:"BrtBeginExtConn15", */
    T: 1
  },
  2110: {
    /* n:"BrtEndExtConn15", */
    T: -1
  },
  2111: {
    /* n:"BrtBeginOledbPr15", */
    T: 1
  },
  2112: {
    /* n:"BrtEndOledbPr15", */
    T: -1
  },
  2113: {
    /* n:"BrtBeginDataFeedPr15", */
    T: 1
  },
  2114: {
    /* n:"BrtEndDataFeedPr15", */
    T: -1
  },
  2115: {
    /* n:"BrtTextPr15" */
  },
  2116: {
    /* n:"BrtRangePr15" */
  },
  2117: {
    /* n:"BrtDbCommand15" */
  },
  2118: {
    /* n:"BrtBeginDbTables15", */
    T: 1
  },
  2119: {
    /* n:"BrtEndDbTables15", */
    T: -1
  },
  2120: {
    /* n:"BrtDbTable15" */
  },
  2121: {
    /* n:"BrtBeginDataModel", */
    T: 1
  },
  2122: {
    /* n:"BrtEndDataModel", */
    T: -1
  },
  2123: {
    /* n:"BrtBeginModelTables", */
    T: 1
  },
  2124: {
    /* n:"BrtEndModelTables", */
    T: -1
  },
  2125: {
    /* n:"BrtModelTable" */
  },
  2126: {
    /* n:"BrtBeginModelRelationships", */
    T: 1
  },
  2127: {
    /* n:"BrtEndModelRelationships", */
    T: -1
  },
  2128: {
    /* n:"BrtModelRelationship" */
  },
  2129: {
    /* n:"BrtBeginECTxtWiz15", */
    T: 1
  },
  2130: {
    /* n:"BrtEndECTxtWiz15", */
    T: -1
  },
  2131: {
    /* n:"BrtBeginECTWFldInfoLst15", */
    T: 1
  },
  2132: {
    /* n:"BrtEndECTWFldInfoLst15", */
    T: -1
  },
  2133: {
    /* n:"BrtBeginECTWFldInfo15", */
    T: 1
  },
  2134: {
    /* n:"BrtFieldListActiveItem" */
  },
  2135: {
    /* n:"BrtPivotCacheIdVersion" */
  },
  2136: {
    /* n:"BrtSXDI15" */
  },
  2137: {
    /* n:"BrtBeginModelTimeGroupings", */
    T: 1
  },
  2138: {
    /* n:"BrtEndModelTimeGroupings", */
    T: -1
  },
  2139: {
    /* n:"BrtBeginModelTimeGrouping", */
    T: 1
  },
  2140: {
    /* n:"BrtEndModelTimeGrouping", */
    T: -1
  },
  2141: {
    /* n:"BrtModelTimeGroupingCalcCol" */
  },
  3072: {
    /* n:"BrtUid" */
  },
  3073: {
    /* n:"BrtRevisionPtr" */
  },
  4096: {
    /* n:"BrtBeginDynamicArrayPr", */
    T: 1
  },
  4097: {
    /* n:"BrtEndDynamicArrayPr", */
    T: -1
  },
  5002: {
    /* n:"BrtBeginRichValueBlock", */
    T: 1
  },
  5003: {
    /* n:"BrtEndRichValueBlock", */
    T: -1
  },
  5081: {
    /* n:"BrtBeginRichFilters", */
    T: 1
  },
  5082: {
    /* n:"BrtEndRichFilters", */
    T: -1
  },
  5083: {
    /* n:"BrtRichFilter" */
  },
  5084: {
    /* n:"BrtBeginRichFilterColumn", */
    T: 1
  },
  5085: {
    /* n:"BrtEndRichFilterColumn", */
    T: -1
  },
  5086: {
    /* n:"BrtBeginCustomRichFilters", */
    T: 1
  },
  5087: {
    /* n:"BrtEndCustomRichFilters", */
    T: -1
  },
  5088: {
    /* n:"BrtCustomRichFilter" */
  },
  5089: {
    /* n:"BrtTop10RichFilter" */
  },
  5090: {
    /* n:"BrtDynamicRichFilter" */
  },
  5092: {
    /* n:"BrtBeginRichSortCondition", */
    T: 1
  },
  5093: {
    /* n:"BrtEndRichSortCondition", */
    T: -1
  },
  5094: {
    /* n:"BrtRichFilterDateGroupItem" */
  },
  5095: {
    /* n:"BrtBeginCalcFeatures", */
    T: 1
  },
  5096: {
    /* n:"BrtEndCalcFeatures", */
    T: -1
  },
  5097: {
    /* n:"BrtCalcFeature" */
  },
  5099: {
    /* n:"BrtExternalLinksPr" */
  },
  65535: { n: "" }
}, as = {
  /* [MS-XLS] 2.3 Record Enumeration 2021-08-17 */
  6: {
    /* n:"Formula", */
    f: Bi
  },
  10: {
    /* n:"EOF", */
    f: Kt
  },
  12: {
    /* n:"CalcCount", */
    f: ur
  },
  //
  13: {
    /* n:"CalcMode", */
    f: ur
  },
  //
  14: {
    /* n:"CalcPrecision", */
    f: dr
  },
  //
  15: {
    /* n:"CalcRefMode", */
    f: dr
  },
  //
  16: {
    /* n:"CalcDelta", */
    f: Vr
  },
  //
  17: {
    /* n:"CalcIter", */
    f: dr
  },
  //
  18: {
    /* n:"Protect", */
    f: dr
  },
  19: {
    /* n:"Password", */
    f: ur
  },
  20: {
    /* n:"Header", */
    f: Bf
  },
  21: {
    /* n:"Footer", */
    f: Bf
  },
  23: {
    /* n:"ExternSheet", */
    f: go
  },
  24: {
    /* n:"Lbl", */
    f: Wf
  },
  25: {
    /* n:"WinProtect", */
    f: dr
  },
  26: {
    /* n:"VerticalPageBreaks", */
  },
  27: {
    /* n:"HorizontalPageBreaks", */
  },
  28: {
    /* n:"Note", */
    f: y0
  },
  29: {
    /* n:"Selection", */
  },
  34: {
    /* n:"Date1904", */
    f: dr
  },
  35: {
    /* n:"ExternName", */
    f: Uf
  },
  38: {
    /* n:"LeftMargin", */
    f: Vr
  },
  // *
  39: {
    /* n:"RightMargin", */
    f: Vr
  },
  // *
  40: {
    /* n:"TopMargin", */
    f: Vr
  },
  // *
  41: {
    /* n:"BottomMargin", */
    f: Vr
  },
  // *
  42: {
    /* n:"PrintRowCol", */
    f: dr
  },
  43: {
    /* n:"PrintGrid", */
    f: dr
  },
  47: {
    /* n:"FilePass", */
    f: Ld
  },
  49: {
    /* n:"Font", */
    f: zh
  },
  51: {
    /* n:"PrintSize", */
    f: ur
  },
  60: {
    /* n:"Continue", */
  },
  61: {
    /* n:"Window1", */
    f: Wh
  },
  64: {
    /* n:"Backup", */
    f: dr
  },
  65: {
    /* n:"Pane", */
    f: Gh
  },
  66: {
    /* n:"CodePage", */
    f: ur
  },
  77: {
    /* n:"Pls", */
  },
  80: {
    /* n:"DCon", */
  },
  81: {
    /* n:"DConRef", */
  },
  82: {
    /* n:"DConName", */
  },
  85: {
    /* n:"DefColWidth", */
    f: ur
  },
  89: {
    /* n:"XCT", */
  },
  90: {
    /* n:"CRN", */
  },
  91: {
    /* n:"FileSharing", */
  },
  92: {
    /* n:"WriteAccess", */
    f: Ch
  },
  93: {
    /* n:"Obj", */
    f: A0
  },
  94: {
    /* n:"Uncalced", */
  },
  95: {
    /* n:"CalcSaveRecalc", */
    f: dr
  },
  //
  96: {
    /* n:"Template", */
  },
  97: {
    /* n:"Intl", */
  },
  99: {
    /* n:"ObjProtect", */
    f: dr
  },
  125: {
    /* n:"ColInfo", */
    f: _o
  },
  128: {
    /* n:"Guts", */
    f: d0
  },
  129: {
    /* n:"WsBool", */
    f: Oh
  },
  130: {
    /* n:"GridSet", */
    f: ur
  },
  131: {
    /* n:"HCenter", */
    f: dr
  },
  132: {
    /* n:"VCenter", */
    f: dr
  },
  133: {
    /* n:"BoundSheet8", */
    f: Nh
  },
  134: {
    /* n:"WriteProtect", */
  },
  140: {
    /* n:"Country", */
    f: D0
  },
  141: {
    /* n:"HideObj", */
    f: ur
  },
  144: {
    /* n:"Sort", */
  },
  146: {
    /* n:"Palette", */
    f: M0
  },
  151: {
    /* n:"Sync", */
  },
  152: {
    /* n:"LPr", */
  },
  153: {
    /* n:"DxGCol", */
  },
  154: {
    /* n:"FnGroupName", */
  },
  155: {
    /* n:"FilterMode", */
  },
  156: {
    /* n:"BuiltInFnGroupCount", */
    f: ur
  },
  157: {
    /* n:"AutoFilterInfo", */
  },
  158: {
    /* n:"AutoFilter", */
  },
  160: {
    /* n:"Scl", */
    f: G0
  },
  161: {
    /* n:"Setup", */
    f: W0
  },
  174: {
    /* n:"ScenMan", */
  },
  175: {
    /* n:"SCENARIO", */
  },
  176: {
    /* n:"SxView", */
  },
  177: {
    /* n:"Sxvd", */
  },
  178: {
    /* n:"SXVI", */
  },
  180: {
    /* n:"SxIvd", */
  },
  181: {
    /* n:"SXLI", */
  },
  182: {
    /* n:"SXPI", */
  },
  184: {
    /* n:"DocRoute", */
  },
  185: {
    /* n:"RecipName", */
  },
  189: {
    /* n:"MulRk", */
    f: n0
  },
  190: {
    /* n:"MulBlank", */
    f: i0
  },
  193: {
    /* n:"Mms", */
    f: Kt
  },
  197: {
    /* n:"SXDI", */
  },
  198: {
    /* n:"SXDB", */
  },
  199: {
    /* n:"SXFDB", */
  },
  200: {
    /* n:"SXDBB", */
  },
  201: {
    /* n:"SXNum", */
  },
  202: {
    /* n:"SxBool", */
    f: dr
  },
  203: {
    /* n:"SxErr", */
  },
  204: {
    /* n:"SXInt", */
  },
  205: {
    /* n:"SXString", */
  },
  206: {
    /* n:"SXDtr", */
  },
  207: {
    /* n:"SxNil", */
  },
  208: {
    /* n:"SXTbl", */
  },
  209: {
    /* n:"SXTBRGIITM", */
  },
  210: {
    /* n:"SxTbpg", */
  },
  211: {
    /* n:"ObProj", */
  },
  213: {
    /* n:"SXStreamID", */
  },
  215: {
    /* n:"DBCell", */
  },
  216: {
    /* n:"SXRng", */
  },
  217: {
    /* n:"SxIsxoper", */
  },
  218: {
    /* n:"BookBool", */
    f: ur
  },
  220: {
    /* n:"DbOrParamQry", */
  },
  221: {
    /* n:"ScenarioProtect", */
    f: dr
  },
  222: {
    /* n:"OleObjectSize", */
  },
  224: {
    /* n:"XF", */
    f: f0
  },
  225: {
    /* n:"InterfaceHdr", */
    f: Ih
  },
  226: {
    /* n:"InterfaceEnd", */
    f: Kt
  },
  227: {
    /* n:"SXVS", */
  },
  229: {
    /* n:"MergeCells", */
    f: S0
  },
  233: {
    /* n:"BkHim", */
  },
  235: {
    /* n:"MsoDrawingGroup", */
  },
  236: {
    /* n:"MsoDrawing", */
  },
  237: {
    /* n:"MsoDrawingSelection", */
  },
  239: {
    /* n:"PhoneticInfo", */
  },
  240: {
    /* n:"SxRule", */
  },
  241: {
    /* n:"SXEx", */
  },
  242: {
    /* n:"SxFilt", */
  },
  244: {
    /* n:"SxDXF", */
  },
  245: {
    /* n:"SxItm", */
  },
  246: {
    /* n:"SxName", */
  },
  247: {
    /* n:"SxSelect", */
  },
  248: {
    /* n:"SXPair", */
  },
  249: {
    /* n:"SxFmla", */
  },
  251: {
    /* n:"SxFormat", */
  },
  252: {
    /* n:"SST", */
    f: Dh
  },
  253: {
    /* n:"LabelSst", */
    f: Kh
  },
  255: {
    /* n:"ExtSST", */
    f: Lh
  },
  256: {
    /* n:"SXVDEx", */
  },
  259: {
    /* n:"SXFormula", */
  },
  290: {
    /* n:"SXDBEx", */
  },
  311: {
    /* n:"RRDInsDel", */
  },
  312: {
    /* n:"RRDHead", */
  },
  315: {
    /* n:"RRDChgCell", */
  },
  317: {
    /* n:"RRTabId", */
    f: io
  },
  318: {
    /* n:"RRDRenSheet", */
  },
  319: {
    /* n:"RRSort", */
  },
  320: {
    /* n:"RRDMove", */
  },
  330: {
    /* n:"RRFormat", */
  },
  331: {
    /* n:"RRAutoFmt", */
  },
  333: {
    /* n:"RRInsertSh", */
  },
  334: {
    /* n:"RRDMoveBegin", */
  },
  335: {
    /* n:"RRDMoveEnd", */
  },
  336: {
    /* n:"RRDInsDelBegin", */
  },
  337: {
    /* n:"RRDInsDelEnd", */
  },
  338: {
    /* n:"RRDConflict", */
  },
  339: {
    /* n:"RRDDefName", */
  },
  340: {
    /* n:"RRDRstEtxp", */
  },
  351: {
    /* n:"LRng", */
  },
  352: {
    /* n:"UsesELFs", */
    f: dr
  },
  353: {
    /* n:"DSF", */
    f: Kt
  },
  401: {
    /* n:"CUsr", */
  },
  402: {
    /* n:"CbUsr", */
  },
  403: {
    /* n:"UsrInfo", */
  },
  404: {
    /* n:"UsrExcl", */
  },
  405: {
    /* n:"FileLock", */
  },
  406: {
    /* n:"RRDInfo", */
  },
  407: {
    /* n:"BCUsrs", */
  },
  408: {
    /* n:"UsrChk", */
  },
  425: {
    /* n:"UserBView", */
  },
  426: {
    /* n:"UserSViewBegin", */
  },
  427: {
    /* n:"UserSViewEnd", */
  },
  428: {
    /* n:"RRDUserView", */
  },
  429: {
    /* n:"Qsi", */
  },
  430: {
    /* n:"SupBook", */
    f: _0
  },
  431: {
    /* n:"Prot4Rev", */
    f: dr
  },
  432: {
    /* n:"CondFmt", */
  },
  433: {
    /* n:"CF", */
  },
  434: {
    /* n:"DVal", */
  },
  437: {
    /* n:"DConBin", */
  },
  438: {
    /* n:"TxO", */
    f: C0
  },
  439: {
    /* n:"RefreshAll", */
    f: dr
  },
  //
  440: {
    /* n:"HLink", */
    f: b0
  },
  441: {
    /* n:"Lel", */
  },
  442: {
    /* n:"CodeName", */
    f: In
  },
  443: {
    /* n:"SXFDBType", */
  },
  444: {
    /* n:"Prot4RevPass", */
    f: ur
  },
  445: {
    /* n:"ObNoMacros", */
  },
  446: {
    /* n:"Dv", */
  },
  448: {
    /* n:"Excel9File", */
    f: Kt
  },
  449: {
    /* n:"RecalcId", */
    f: Uh,
    r: 2
  },
  450: {
    /* n:"EntExU2", */
    f: Kt
  },
  512: {
    /* n:"Dimensions", */
    f: Lf
  },
  513: {
    /* n:"Blank", */
    f: V0
  },
  515: {
    /* n:"Number", */
    f: p0
  },
  516: {
    /* n:"Label", */
    f: Yh
  },
  517: {
    /* n:"BoolErr", */
    f: m0
  },
  519: {
    /* n:"String", */
    f: z0
  },
  520: {
    /* n:"Row", */
    f: Mh
  },
  523: {
    /* n:"Index", */
  },
  545: {
    /* n:"Array", */
    f: Xf
  },
  549: {
    /* n:"DefaultRowHeight", */
    f: Pf
  },
  566: {
    /* n:"Table", */
  },
  574: {
    /* n:"Window2", */
    f: Xh
  },
  638: {
    /* n:"RK", */
    f: a0
  },
  659: {
    /* n:"Style", */
  },
  1048: {
    /* n:"BigName", */
  },
  1054: {
    /* n:"Format", */
    f: Jh
  },
  1084: {
    /* n:"ContinueBigName", */
  },
  1212: {
    /* n:"ShrFmla", */
    f: k0
  },
  2048: {
    /* n:"HLinkTooltip", */
    f: N0
  },
  2049: {
    /* n:"WebPub", */
  },
  2050: {
    /* n:"QsiSXTag", */
  },
  2051: {
    /* n:"DBQueryExt", */
  },
  2052: {
    /* n:"ExtString", */
  },
  2053: {
    /* n:"TxtQry", */
  },
  2054: {
    /* n:"Qsir", */
  },
  2055: {
    /* n:"Qsif", */
  },
  2056: {
    /* n:"RRDTQSIF", */
  },
  2057: {
    /* n:"BOF", */
    f: zn
  },
  2058: {
    /* n:"OleDbConn", */
  },
  2059: {
    /* n:"WOpt", */
  },
  2060: {
    /* n:"SXViewEx", */
  },
  2061: {
    /* n:"SXTH", */
  },
  2062: {
    /* n:"SXPIEx", */
  },
  2063: {
    /* n:"SXVDTEx", */
  },
  2064: {
    /* n:"SXViewEx9", */
  },
  2066: {
    /* n:"ContinueFrt", */
  },
  2067: {
    /* n:"RealTimeData", */
  },
  2128: {
    /* n:"ChartFrtInfo", */
  },
  2129: {
    /* n:"FrtWrapper", */
  },
  2130: {
    /* n:"StartBlock", */
  },
  2131: {
    /* n:"EndBlock", */
  },
  2132: {
    /* n:"StartObject", */
  },
  2133: {
    /* n:"EndObject", */
  },
  2134: {
    /* n:"CatLab", */
  },
  2135: {
    /* n:"YMult", */
  },
  2136: {
    /* n:"SXViewLink", */
  },
  2137: {
    /* n:"PivotChartBits", */
  },
  2138: {
    /* n:"FrtFontList", */
  },
  2146: {
    /* n:"SheetExt", */
  },
  2147: {
    /* n:"BookExt", */
    r: 12
  },
  2148: {
    /* n:"SXAddl", */
  },
  2149: {
    /* n:"CrErr", */
  },
  2150: {
    /* n:"HFPicture", */
  },
  2151: {
    /* n:"FeatHdr", */
    f: Kt
  },
  2152: {
    /* n:"Feat", */
  },
  2154: {
    /* n:"DataLabExt", */
  },
  2155: {
    /* n:"DataLabExtContents", */
  },
  2156: {
    /* n:"CellWatch", */
  },
  2161: {
    /* n:"FeatHdr11", */
  },
  2162: {
    /* n:"Feature11", */
  },
  2164: {
    /* n:"DropDownObjIds", */
  },
  2165: {
    /* n:"ContinueFrt11", */
  },
  2166: {
    /* n:"DConn", */
  },
  2167: {
    /* n:"List12", */
  },
  2168: {
    /* n:"Feature12", */
  },
  2169: {
    /* n:"CondFmt12", */
  },
  2170: {
    /* n:"CF12", */
  },
  2171: {
    /* n:"CFEx", */
  },
  2172: {
    /* n:"XFCRC", */
    f: B0,
    r: 12
  },
  2173: {
    /* n:"XFExt", */
    f: Rv,
    r: 12
  },
  2174: {
    /* n:"AutoFilter12", */
  },
  2175: {
    /* n:"ContinueFrt12", */
  },
  2180: {
    /* n:"MDTInfo", */
  },
  2181: {
    /* n:"MDXStr", */
  },
  2182: {
    /* n:"MDXTuple", */
  },
  2183: {
    /* n:"MDXSet", */
  },
  2184: {
    /* n:"MDXProp", */
  },
  2185: {
    /* n:"MDXKPI", */
  },
  2186: {
    /* n:"MDB", */
  },
  2187: {
    /* n:"PLV", */
  },
  2188: {
    /* n:"Compat12", */
    f: dr,
    r: 12
  },
  2189: {
    /* n:"DXF", */
  },
  2190: {
    /* n:"TableStyles", */
    r: 12
  },
  2191: {
    /* n:"TableStyle", */
  },
  2192: {
    /* n:"TableStyleElement", */
  },
  2194: {
    /* n:"StyleExt", */
  },
  2195: {
    /* n:"NamePublish", */
  },
  2196: {
    /* n:"NameCmt", */
    f: w0,
    r: 12
  },
  2197: {
    /* n:"SortData", */
  },
  2198: {
    /* n:"Theme", */
    f: Fv,
    r: 12
  },
  2199: {
    /* n:"GUIDTypeLib", */
  },
  2200: {
    /* n:"FnGrp12", */
  },
  2201: {
    /* n:"NameFnGrp12", */
  },
  2202: {
    /* n:"MTRSettings", */
    f: T0,
    r: 12
  },
  2203: {
    /* n:"CompressPictures", */
    f: Kt
  },
  2204: {
    /* n:"HeaderFooter", */
  },
  2205: {
    /* n:"CrtLayout12", */
  },
  2206: {
    /* n:"CrtMlFrt", */
  },
  2207: {
    /* n:"CrtMlFrtContinue", */
  },
  2211: {
    /* n:"ForceFullCalculation", */
    f: Bh
  },
  2212: {
    /* n:"ShapePropsStream", */
  },
  2213: {
    /* n:"TextPropsStream", */
  },
  2214: {
    /* n:"RichTextStream", */
  },
  2215: {
    /* n:"CrtLayout12A", */
  },
  4097: {
    /* n:"Units", */
  },
  4098: {
    /* n:"Chart", */
  },
  4099: {
    /* n:"Series", */
  },
  4102: {
    /* n:"DataFormat", */
  },
  4103: {
    /* n:"LineFormat", */
  },
  4105: {
    /* n:"MarkerFormat", */
  },
  4106: {
    /* n:"AreaFormat", */
  },
  4107: {
    /* n:"PieFormat", */
  },
  4108: {
    /* n:"AttachedLabel", */
  },
  4109: {
    /* n:"SeriesText", */
  },
  4116: {
    /* n:"ChartFormat", */
  },
  4117: {
    /* n:"Legend", */
  },
  4118: {
    /* n:"SeriesList", */
  },
  4119: {
    /* n:"Bar", */
  },
  4120: {
    /* n:"Line", */
  },
  4121: {
    /* n:"Pie", */
  },
  4122: {
    /* n:"Area", */
  },
  4123: {
    /* n:"Scatter", */
  },
  4124: {
    /* n:"CrtLine", */
  },
  4125: {
    /* n:"Axis", */
  },
  4126: {
    /* n:"Tick", */
  },
  4127: {
    /* n:"ValueRange", */
  },
  4128: {
    /* n:"CatSerRange", */
  },
  4129: {
    /* n:"AxisLine", */
  },
  4130: {
    /* n:"CrtLink", */
  },
  4132: {
    /* n:"DefaultText", */
  },
  4133: {
    /* n:"Text", */
  },
  4134: {
    /* n:"FontX", */
    f: ur
  },
  4135: {
    /* n:"ObjectLink", */
  },
  4146: {
    /* n:"Frame", */
  },
  4147: {
    /* n:"Begin", */
  },
  4148: {
    /* n:"End", */
  },
  4149: {
    /* n:"PlotArea", */
  },
  4154: {
    /* n:"Chart3d", */
  },
  4156: {
    /* n:"PicF", */
  },
  4157: {
    /* n:"DropBar", */
  },
  4158: {
    /* n:"Radar", */
  },
  4159: {
    /* n:"Surf", */
  },
  4160: {
    /* n:"RadarArea", */
  },
  4161: {
    /* n:"AxisParent", */
  },
  4163: {
    /* n:"LegendException", */
  },
  4164: {
    /* n:"ShtProps", */
    f: H0
  },
  4165: {
    /* n:"SerToCrt", */
  },
  4166: {
    /* n:"AxesUsed", */
  },
  4168: {
    /* n:"SBaseRef", */
  },
  4170: {
    /* n:"SerParent", */
  },
  4171: {
    /* n:"SerAuxTrend", */
  },
  4174: {
    /* n:"IFmtRecord", */
  },
  4175: {
    /* n:"Pos", */
  },
  4176: {
    /* n:"AlRuns", */
  },
  4177: {
    /* n:"BRAI", */
  },
  4187: {
    /* n:"SerAuxErrBar", */
  },
  4188: {
    /* n:"ClrtClient", */
    f: L0
  },
  4189: {
    /* n:"SerFmt", */
  },
  4191: {
    /* n:"Chart3DBarShape", */
  },
  4192: {
    /* n:"Fbi", */
  },
  4193: {
    /* n:"BopPop", */
  },
  4194: {
    /* n:"AxcExt", */
  },
  4195: {
    /* n:"Dat", */
  },
  4196: {
    /* n:"PlotGrowth", */
  },
  4197: {
    /* n:"SIIndex", */
  },
  4198: {
    /* n:"GelFrame", */
  },
  4199: {
    /* n:"BopPopCustom", */
  },
  4200: {
    /* n:"Fbi2", */
  },
  0: {
    /* n:"Dimensions", */
    f: Lf
  },
  1: {
    /* n:"BIFF2BLANK", */
  },
  2: {
    /* n:"BIFF2INT", */
    f: Z0
  },
  3: {
    /* n:"BIFF2NUM", */
    f: j0
  },
  4: {
    /* n:"BIFF2STR", */
    f: K0
  },
  5: {
    /* n:"BIFF2BOOLERR", */
    f: Q0
  },
  7: {
    /* n:"String", */
    f: q0
  },
  8: {
    /* n:"BIFF2ROW", */
  },
  9: {
    /* n:"BOF", */
    f: zn
  },
  11: {
    /* n:"Index", */
  },
  22: {
    /* n:"ExternCount", */
    f: ur
  },
  30: {
    /* n:"BIFF2FORMAT", */
    f: Qh
  },
  31: {
    /* n:"BIFF2FMTCNT", */
  },
  /* 16-bit cnt of BIFF2FORMAT records */
  32: {
    /* n:"BIFF2COLINFO", */
  },
  33: {
    /* n:"Array", */
    f: Xf
  },
  36: {
    /* n:"COLWIDTH", */
  },
  37: {
    /* n:"DefaultRowHeight", */
    f: Pf
  },
  // 0x002c ??
  // 0x002d ??
  // 0x002e ??
  // 0x0030 FONTCOUNT: number of fonts
  50: {
    /* n:"BIFF2FONTXTRA", */
    f: ed
  },
  // 0x0035: INFOOPTS
  // 0x0036: TABLE (BIFF2 only)
  // 0x0037: TABLE2 (BIFF2 only)
  // 0x0038: WNDESK
  // 0x0039 ??
  // 0x003a: BEGINPREF
  // 0x003b: ENDPREF
  62: {
    /* n:"BIFF2WINDOW2", */
  },
  // 0x003f ??
  // 0x0046: SHOWSCROLL
  // 0x0047: SHOWFORMULA
  // 0x0048: STATUSBAR
  // 0x0049: SHORTMENUS
  // 0x004A:
  // 0x004B:
  // 0x004C:
  // 0x004E:
  // 0x004F:
  // 0x0058: TOOLBAR (BIFF3)
  /* - - - */
  52: {
    /* n:"DDEObjName", */
  },
  67: {
    /* n:"BIFF2XF", */
    f: c0
  },
  68: {
    /* n:"BIFF2XFINDEX", */
    f: ur
  },
  69: {
    /* n:"BIFF2FONTCLR", */
  },
  86: {
    /* n:"BIFF4FMTCNT", */
  },
  /* 16-bit cnt, similar to BIFF2 */
  126: {
    /* n:"RK", */
  },
  /* Not necessarily same as 0x027e */
  127: {
    /* n:"ImData", */
    f: $0
  },
  135: {
    /* n:"Addin", */
  },
  136: {
    /* n:"Edg", */
  },
  137: {
    /* n:"Pub", */
  },
  // 0x8A
  // 0x8B LH: alternate menu key flag (BIFF3/4)
  // 0x8E
  143: {
    /* n:"BIFF4SheetInfo", */
    f: td
  },
  145: {
    /* n:"Sub", */
  },
  // 0x93 STYLE
  148: {
    /* n:"LHRecord", */
  },
  149: {
    /* n:"LHNGraph", */
  },
  150: {
    /* n:"Sound", */
  },
  // 0xA2 FNPROTO: function prototypes (BIFF4)
  // 0xA3
  // 0xA8
  169: {
    /* n:"CoordList", */
  },
  171: {
    /* n:"GCW", */
  },
  188: {
    /* n:"ShrFmla", */
  },
  /* Not necessarily same as 0x04bc */
  191: {
    /* n:"ToolbarHdr", */
  },
  192: {
    /* n:"ToolbarEnd", */
  },
  194: {
    /* n:"AddMenu", */
  },
  195: {
    /* n:"DelMenu", */
  },
  214: {
    /* n:"RString", */
    f: rd
  },
  223: {
    /* n:"UDDesc", */
  },
  234: {
    /* n:"TabIdConf", */
  },
  354: {
    /* n:"XL5Modify", */
  },
  421: {
    /* n:"FileSharing2", */
  },
  518: {
    /* n:"Formula", */
    f: Bi
  },
  521: {
    /* n:"BOF", */
    f: zn
  },
  536: {
    /* n:"Lbl", */
    f: Wf
  },
  547: {
    /* n:"ExternName", */
    f: Uf
  },
  561: {
    /* n:"Font", */
  },
  579: {
    /* n:"BIFF3XF", */
    f: u0
  },
  1030: {
    /* n:"Formula", */
    f: Bi
  },
  1033: {
    /* n:"BOF", */
    f: zn
  },
  1091: {
    /* n:"BIFF4XF", */
    f: h0
  },
  2157: {
    /* n:"FeatInfo", */
  },
  2163: {
    /* n:"FeatInfo11", */
  },
  2177: {
    /* n:"SXAddl12", */
  },
  2240: {
    /* n:"AutoWebPub", */
  },
  2241: {
    /* n:"ListObj", */
  },
  2242: {
    /* n:"ListField", */
  },
  2243: {
    /* n:"ListDV", */
  },
  2244: {
    /* n:"ListCondFmt", */
  },
  2245: {
    /* n:"ListCF", */
  },
  2246: {
    /* n:"FMQry", */
  },
  2247: {
    /* n:"FMSQry", */
  },
  2248: {
    /* n:"PLV", */
  },
  2249: {
    /* n:"LnExt", */
  },
  2250: {
    /* n:"MkrExt", */
  },
  2251: {
    /* n:"CrtCoopt", */
  },
  2262: {
    /* n:"FRTArchId$", */
    r: 12
  },
  /* --- multiplan 4 records --- */
  101: {
    /* n:"", */
  },
  // one per window
  102: {
    /* n:"", */
  },
  // calc settings
  105: {
    /* n:"", */
  },
  // print header
  106: {
    /* n:"", */
  },
  // print footer
  107: {
    /* n:"", */
  },
  // print settings
  109: {
    /* n:"", */
  },
  // one per window
  112: {
    /* n:"", */
  },
  // includes default col width
  114: {
    /* n:"", */
  },
  // includes selected cell
  29282: {}
};
function J(e, r, t, a) {
  var n = r;
  if (!isNaN(n)) {
    var i = a || (t || []).length || 0, s = e.next(4);
    s.write_shift(2, n), s.write_shift(2, i), /*:: len != null &&*/
    i > 0 && Ss(t) && e.push(t);
  }
}
function j_(e, r, t, a) {
  var n = (t || []).length || 0;
  if (n <= 8224) return J(e, r, t, n);
  var i = r;
  if (!isNaN(i)) {
    for (var s = t.parts || [], f = 0, c = 0, o = 0; o + (s[f] || 8224) <= 8224; )
      o += s[f] || 8224, f++;
    var l = e.next(4);
    for (l.write_shift(2, i), l.write_shift(2, o), e.push(t.slice(c, c + o)), c += o; c < n; ) {
      for (l = e.next(4), l.write_shift(2, 60), o = 0; o + (s[f] || 8224) <= 8224; )
        o += s[f] || 8224, f++;
      l.write_shift(2, o), e.push(t.slice(c, c + o)), c += o;
    }
  }
}
function Vi(e, r, t, a) {
  var n = H(9);
  return Cn(n, e, r), fo(t, a || "b", n), n;
}
function Y_(e, r, t) {
  var a = H(8 + 2 * t.length);
  return Cn(a, e, r), a.write_shift(1, t.length), a.write_shift(t.length, t, "sbcs"), a.l < a.length ? a.slice(0, a.l) : a;
}
function sl(e, r) {
  r.forEach(function(t) {
    var a = t[0].map(function(i) {
      return i.t;
    }).join("");
    if (a.length <= 2048) return J(e, 28, Pi(a, t[1], t[2]));
    J(e, 28, Pi(a.slice(0, 2048), t[1], t[2], a.length));
    for (var n = 2048; n < a.length; n += 2048)
      J(e, 28, Pi(a.slice(n, Math.min(n + 2048, a.length)), -1, -1, Math.min(2048, a.length - n)));
  });
}
function Z_(e, r, t, a, n, i) {
  var s = 0;
  r.z != null && (s = n._BIFF2FmtTable.indexOf(r.z), s == -1 && (n._BIFF2FmtTable.push(r.z), s = n._BIFF2FmtTable.length - 1));
  var f = 0;
  if (r.z != null) {
    for (; f < n.cellXfs.length && n.cellXfs[f].numFmtId != s; ++f) ;
    f == n.cellXfs.length && n.cellXfs.push({ numFmtId: s });
  }
  if (r.v != null) switch (r.t) {
    case "d":
    case "n":
      var c = r.t == "d" ? or(fr(r.v, i), i) : r.v;
      n.biff == 2 && c == (c | 0) && c >= 0 && c < 65536 ? J(e, 2, J0(t, a, c, f, s)) : isNaN(c) ? J(e, 5, Vi(t, a, 36, "e")) : isFinite(c) ? J(e, 3, Y0(t, a, c, f, s)) : J(e, 5, Vi(t, a, 7, "e"));
      return;
    case "b":
    case "e":
      J(e, 5, Vi(t, a, r.v, r.t));
      return;
    case "s":
    case "str":
      J(e, 4, Y_(t, a, r.v == null ? "" : String(r.v).slice(0, 255)));
      return;
  }
  J(e, 1, Cn(null, t, a));
}
function J_(e, r, t, a, n) {
  var i = r["!data"] != null, s = Ge(r["!ref"] || "A1"), f = "", c = [];
  if (s.e.c > 255 || s.e.r > 16383) {
    if (a.WTF) throw new Error("Range " + (r["!ref"] || "A1") + " exceeds format limit A1:IV16384");
    s.e.c = Math.min(s.e.c, 255), s.e.r = Math.min(s.e.r, 16383);
  }
  for (var o = (((n || {}).Workbook || {}).WBProps || {}).date1904, l = [], d = [], u = s.s.c; u <= s.e.c; ++u) c[u] = Ne(u);
  for (var h = s.s.r; h <= s.e.r; ++h)
    for (i && (l = r["!data"][h] || []), f = Xe(h), u = s.s.c; u <= s.e.c; ++u) {
      var m = i ? l[u] : r[c[u] + f];
      m && (Z_(e, m, h, u, a, o), m.c && d.push([m.c, h, u]));
    }
  sl(e, d);
}
function q_(e, r) {
  for (var t = r || {}, a = $r(), n = 0, i = 0; i < e.SheetNames.length; ++i) e.SheetNames[i] == t.sheet && (n = i);
  if (n == 0 && t.sheet && e.SheetNames[0] != t.sheet) throw new Error("Sheet not found: " + t.sheet);
  J(a, t.biff == 4 ? 1033 : t.biff == 3 ? 521 : 9, Rs(e, 16, t)), ((e.Workbook || {}).WBProps || {}).date1904 && J(a, 34, Wr(!0)), t.cellXfs = [{ numFmtId: 0 }], t._BIFF2FmtTable = ["General"], t._Fonts = [];
  var s = $r();
  return J_(s, e.Sheets[e.SheetNames[n]], n, t, e), t._BIFF2FmtTable.forEach(function(f) {
    t.biff <= 3 ? J(a, 30, e0(f)) : J(a, 1054, r0(f));
  }), t.cellXfs.forEach(function(f) {
    switch (t.biff) {
      case 2:
        J(a, 67, o0(f));
        break;
      case 3:
        J(a, 579, po(f));
        break;
      case 4:
        J(a, 1091, l0(f));
        break;
    }
  }), delete t._BIFF2FmtTable, delete t.cellXfs, delete t._Fonts, a.push(s.end()), J(a, 10), a.end();
}
var _t = 1, ut = [];
function Q_() {
  var e = H(82 + 8 * ut.length);
  e.write_shift(2, 15), e.write_shift(2, 61440), e.write_shift(4, 74 + 8 * ut.length);
  {
    e.write_shift(2, 0), e.write_shift(2, 61446), e.write_shift(4, 16 + 8 * ut.length);
    {
      e.write_shift(4, _t), e.write_shift(4, ut.length + 1);
      for (var r = 0, t = 0; t < ut.length; ++t) r += ut[t] && ut[t][1] || 0;
      e.write_shift(4, r), e.write_shift(4, ut.length);
    }
    ut.forEach(function(a) {
      e.write_shift(4, a[0]), e.write_shift(4, a[2]);
    });
  }
  return e.write_shift(2, 51), e.write_shift(2, 61451), e.write_shift(4, 18), e.write_shift(2, 191), e.write_shift(4, 524296), e.write_shift(2, 385), e.write_shift(4, 134217793), e.write_shift(2, 448), e.write_shift(4, 134217792), e.write_shift(2, 64), e.write_shift(2, 61726), e.write_shift(4, 16), e.write_shift(4, 134217741), e.write_shift(4, 134217740), e.write_shift(4, 134217751), e.write_shift(4, 268435703), e;
}
function e4(e, r) {
  var t = [], a = 0, n = $r(), i = _t, s;
  r.forEach(function(c, o) {
    var l = "", d = c[0].map(function(_) {
      return _.a && !l && (l = _.a), _.t;
    }).join("");
    ++_t;
    {
      var u = H(150);
      u.write_shift(2, 15), u.write_shift(2, 61444), u.write_shift(4, 150), u.write_shift(2, 3234), u.write_shift(2, 61450), u.write_shift(4, 8), u.write_shift(4, _t), u.write_shift(4, 2560), u.write_shift(2, 227), u.write_shift(2, 61451), u.write_shift(4, 84), u.write_shift(2, 128), u.write_shift(4, 0), u.write_shift(2, 139), u.write_shift(4, 2), u.write_shift(2, 191), u.write_shift(4, 524296), u.write_shift(2, 344), u.l += 4, u.write_shift(2, 385), u.write_shift(4, 134217808), u.write_shift(2, 387), u.write_shift(4, 134217808), u.write_shift(2, 389), u.write_shift(4, 268435700), u.write_shift(2, 447), u.write_shift(4, 1048592), u.write_shift(2, 448), u.write_shift(4, 134217809), u.write_shift(2, 451), u.write_shift(4, 268435700), u.write_shift(2, 513), u.write_shift(4, 134217809), u.write_shift(2, 515), u.write_shift(4, 268435700), u.write_shift(2, 575), u.write_shift(4, 196609), u.write_shift(2, 959), u.write_shift(4, 131072 | (c[0].hidden ? 2 : 0)), u.l += 2, u.write_shift(2, 61456), u.write_shift(4, 18), u.write_shift(2, 3), u.write_shift(2, c[2] + 2), u.l += 2, u.write_shift(2, c[1] + 1), u.l += 2, u.write_shift(2, c[2] + 4), u.l += 2, u.write_shift(2, c[1] + 5), u.l += 2, u.l += 2, u.write_shift(2, 61457), u.l += 4, u.l = 150, o == 0 ? s = u : J(n, 236, u);
    }
    a += 150;
    {
      var h = H(52);
      h.write_shift(2, 21), h.write_shift(2, 18), h.write_shift(2, 25), h.write_shift(2, _t), h.write_shift(2, 0), h.l = 22, h.write_shift(2, 13), h.write_shift(2, 22), h.write_shift(4, 1651663474), h.write_shift(4, 2503426821), h.write_shift(4, 2150634280), h.write_shift(4, 1768515844 + _t * 256), h.write_shift(2, 0), h.write_shift(4, 0), h.l += 4, J(n, 93, h);
    }
    {
      var m = H(8);
      m.l += 2, m.write_shift(2, 61453), m.l += 4, J(n, 236, m);
    }
    a += 8;
    {
      var g = H(18);
      g.write_shift(2, 18), g.l += 8, g.write_shift(2, d.length), g.write_shift(2, 16), g.l += 4, J(n, 438, g);
      {
        var p = H(1 + d.length);
        p.write_shift(1, 0), p.write_shift(d.length, d, "sbcs"), J(n, 60, p);
      }
      {
        var v = H(16);
        v.l += 8, v.write_shift(2, d.length), v.l += 6, J(n, 60, v);
      }
    }
    {
      var w = H(12 + l.length);
      w.write_shift(2, c[1]), w.write_shift(2, c[2]), w.write_shift(2, 0 | (c[0].hidden ? 0 : 2)), w.write_shift(2, _t), w.write_shift(2, l.length), w.write_shift(1, 0), w.write_shift(l.length, l, "sbcs"), w.l++, t.push(w);
    }
  });
  {
    var f = H(80);
    f.write_shift(2, 15), f.write_shift(2, 61442), f.write_shift(4, a + f.length - 8), f.write_shift(2, 16), f.write_shift(2, 61448), f.write_shift(4, 8), f.write_shift(4, r.length + 1), f.write_shift(4, _t), f.write_shift(2, 15), f.write_shift(2, 61443), f.write_shift(4, a + 48), f.write_shift(2, 15), f.write_shift(2, 61444), f.write_shift(4, 40), f.write_shift(2, 1), f.write_shift(2, 61449), f.write_shift(4, 16), f.l += 16, f.write_shift(2, 2), f.write_shift(2, 61450), f.write_shift(4, 8), f.write_shift(4, i), f.write_shift(4, 5), J(
      e,
      236,
      /* hdr */
      s ? mr([f, s]) : f
    );
  }
  e.push(n.end()), t.forEach(function(c) {
    J(e, 28, c);
  }), ut.push([i, r.length + 1, _t]), ++_t;
}
function r4(e, r, t) {
  J(e, 49, $h({
    sz: 12,
    name: "Arial"
  }, t));
}
function t4(e, r, t) {
  r && [[5, 8], [23, 26], [41, 44], [
    /*63*/
    50,
    /*66],[164,*/
    392
  ]].forEach(function(a) {
    for (var n = a[0]; n <= a[1]; ++n) r[n] != null && J(e, 1054, qh(n, r[n], t));
  });
}
function a4(e, r) {
  var t = H(19);
  t.write_shift(4, 2151), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(2, 3), t.write_shift(1, 1), t.write_shift(4, 0), J(e, 2151, t), t = H(39), t.write_shift(4, 2152), t.write_shift(4, 0), t.write_shift(4, 0), t.write_shift(2, 3), t.write_shift(1, 0), t.write_shift(4, 0), t.write_shift(2, 1), t.write_shift(4, 4), t.write_shift(2, 0), ho(Ge(r["!ref"] || "A1"), t), t.write_shift(4, 4), J(e, 2152, t);
}
function n4(e, r) {
  for (var t = 0; t < 16; ++t) J(e, 224, Mf({ numFmtId: 0, style: !0 }, 0, r));
  r.cellXfs.forEach(function(a) {
    J(e, 224, Mf(a, 0, r));
  });
}
function i4(e, r) {
  for (var t = 0; t < r["!links"].length; ++t) {
    var a = r["!links"][t];
    J(e, 440, O0(a)), a[1].Tooltip && J(e, 2048, R0(a));
  }
  delete r["!links"];
}
function s4(e, r) {
  if (r) {
    var t = 0;
    r.forEach(function(a, n) {
      ++t <= 256 && a && J(e, 125, U0(Dn(n, a), n));
    });
  }
}
function f4(e, r, t, a, n, i) {
  var s = 16 + Nt(n.cellXfs, r, n);
  if (r.v == null && !r.bf) {
    J(e, 513, wa(t, a, s));
    return;
  }
  if (r.bf) J(e, 6, Lm(r, t, a, n, s));
  else switch (r.t) {
    case "d":
    case "n":
      var f = r.t == "d" ? or(fr(r.v, i), i) : r.v;
      isNaN(f) ? J(e, 517, Di(t, a, 36, s, n, "e")) : isFinite(f) ? J(e, 515, g0(t, a, f, s)) : J(e, 517, Di(t, a, 7, s, n, "e"));
      break;
    case "b":
    case "e":
      J(e, 517, Di(t, a, r.v, s, n, r.t));
      break;
    case "s":
    case "str":
      if (n.bookSST) {
        var c = Us(n.Strings, r.v == null ? "" : String(r.v), n.revStrings);
        J(e, 253, jh(t, a, c, s));
      } else J(e, 516, Zh(t, a, (r.v == null ? "" : String(r.v)).slice(0, 255), s, n));
      break;
    default:
      J(e, 513, wa(t, a, s));
  }
}
function c4(e, r, t) {
  var a = $r(), n = t.SheetNames[e], i = t.Sheets[n] || {}, s = (t || {}).Workbook || {}, f = (s.Sheets || [])[e] || {}, c = i["!data"] != null, o = r.biff == 8, l = "", d = [], u = Ge(i["!ref"] || "A1"), h = o ? 65536 : 16384;
  if (u.e.c > 255 || u.e.r >= h) {
    if (r.WTF) throw new Error("Range " + (i["!ref"] || "A1") + " exceeds format limit A1:IV" + h);
    u.e.c = Math.min(u.e.c, 255), u.e.r = Math.min(u.e.r, h - 1);
  }
  J(a, 2057, Rs(t, 16, r)), J(a, 13, ht(1)), J(a, 12, ht(100)), J(a, 15, Wr(!0)), J(a, 17, Wr(!1)), J(a, 16, ga(1e-3)), J(a, 95, Wr(!0)), J(a, 42, Wr(!1)), J(a, 43, Wr(!1)), J(a, 130, ht(1)), J(a, 128, v0()), J(a, 131, Wr(!1)), J(a, 132, Wr(!1)), o && s4(a, i["!cols"]), J(a, 512, t0(u, r));
  var m = (((t || {}).Workbook || {}).WBProps || {}).date1904;
  o && (i["!links"] = []);
  for (var g = u.s.c; g <= u.e.c; ++g) d[g] = Ne(g);
  for (var p = [], v = [], w = u.s.r; w <= u.e.r; ++w)
    for (c && (v = i["!data"][w] || []), l = Xe(w), g = u.s.c; g <= u.e.c; ++g) {
      var _ = c ? v[g] : i[d[g] + l];
      _ && (f4(a, _, w, g, r, m), o && _.l && i["!links"].push([d[g] + l, _.l]), _.c && p.push([_.c, w, g]));
    }
  var T = f.CodeName || f.name || n;
  return o ? e4(a, p) : sl(a, p), o && J(a, 574, Vh((s.Views || [])[0])), o && (i["!merges"] || []).length && J(a, 229, x0(i["!merges"])), o && i4(a, i), J(a, 442, co(T)), o && a4(a, i), J(
    a,
    10
    /* EOF */
  ), a.end();
}
function o4(e, r, t) {
  var a = $r(), n = (e || {}).Workbook || {}, i = n.Sheets || [], s = (
    /*::((*/
    n.WBProps || {
      /*::CodeName:"ThisWorkbook"*/
    }
  ), f = t.biff == 8, c = t.biff == 5;
  if (J(a, 2057, Rs(e, 5, t)), t.bookType == "xla" && J(
    a,
    135
    /* Addin */
  ), J(a, 225, f ? ht(1200) : null), J(a, 193, oh(2)), c && J(
    a,
    191
    /* ToolbarHdr */
  ), c && J(
    a,
    192
    /* ToolbarEnd */
  ), J(
    a,
    226
    /* InterfaceEnd */
  ), J(a, 92, bh("SheetJS", t)), J(a, 66, ht(f ? 1200 : 1252)), f && J(a, 353, ht(0)), f && J(
    a,
    448
    /* Excel9File */
  ), J(a, 317, X0(e.SheetNames.length)), f && e.vbaraw && J(
    a,
    211
    /* ObProj */
  ), f && e.vbaraw) {
    var o = s.CodeName || "ThisWorkbook";
    J(a, 442, co(o));
  }
  J(a, 156, ht(17)), J(a, 25, Wr(!1)), J(a, 18, Wr(!1)), J(a, 19, ht(0)), f && J(a, 431, Wr(!1)), f && J(a, 444, ht(0)), J(a, 61, Hh()), J(a, 64, Wr(!1)), J(a, 141, ht(0)), J(a, 34, Wr(Zg(e) == "true")), J(a, 14, Wr(!0)), f && J(a, 439, Wr(!1)), J(a, 218, ht(0)), r4(a, e, t), t4(a, e.SSF, t), n4(a, t), f && J(a, 352, Wr(!1));
  var l = a.end(), d = $r();
  f && J(d, 140, P0()), f && ut.length && J(d, 235, Q_()), f && t.Strings && j_(d, 252, Ph(t.Strings)), J(
    d,
    10
    /* EOF */
  );
  var u = d.end(), h = $r(), m = 0, g = 0;
  for (g = 0; g < e.SheetNames.length; ++g) m += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[g].length;
  var p = l.length + m + u.length;
  for (g = 0; g < e.SheetNames.length; ++g) {
    var v = i[g] || {};
    J(h, 133, Rh({ pos: p, hs: v.Hidden || 0, dt: 0, name: e.SheetNames[g] }, t)), p += r[g].length;
  }
  var w = h.end();
  if (m != w.length) throw new Error("BS8 " + m + " != " + w.length);
  var _ = [];
  return l.length && _.push(l), w.length && _.push(w), u.length && _.push(u), mr(_);
}
function l4(e, r) {
  var t = r || {}, a = [];
  e && !e.SSF && (e.SSF = je(Fe)), e && e.SSF && (ka(), Ha(e.SSF), t.revssf = An(e.SSF), t.revssf[e.SSF[65535]] = 0, t.ssf = e.SSF), _t = 1, ut = [], t.Strings = /*::((*/
  [], t.Strings.Count = 0, t.Strings.Unique = 0, Vs(t), t.cellXfs = [], Nt(t.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {});
  for (var n = 0; n < e.SheetNames.length; ++n) a[a.length] = c4(n, t, e);
  return a.unshift(o4(e, a, t)), mr(a);
}
function fl(e, r) {
  for (var t = 0; t <= e.SheetNames.length; ++t) {
    var a = e.Sheets[e.SheetNames[t]];
    if (!(!a || !a["!ref"])) {
      var n = Er(a["!ref"]);
      n.e.c > 255 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[t] + "' extends beyond column IV (255).  Data may be lost."), n.e.r > 65535 && typeof console < "u" && console.error && console.error("Worksheet '" + e.SheetNames[t] + "' extends beyond row 65536.  Data may be lost.");
    }
  }
  var i = r || {};
  switch (i.biff || 2) {
    case 8:
    case 5:
      return l4(e, r);
    case 4:
    case 3:
    case 2:
      return q_(e, r);
  }
  throw new Error("invalid type " + i.bookType + " for BIFF");
}
function rc(e, r) {
  var t = r || {}, a = t.dense != null ? t.dense : ql, n = {};
  a && (n["!data"] = []), e = Fn(e, "<!--", "-->");
  var i = e.match(/<table/i);
  if (!i) throw new Error("Invalid HTML: could not find <table>");
  var s = e.match(/<\/table/i), f = i.index, c = s && s.index || e.length, o = V1(e.slice(f, c), /(:?<tr[^<>]*>)/i, "<tr>"), l = -1, d = 0, u = 0, h = 0, m = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } }, g = [];
  for (f = 0; f < o.length; ++f) {
    var p = o[f].trim(), v = p.slice(0, 3).toLowerCase();
    if (v == "<tr") {
      if (++l, t.sheetRows && t.sheetRows <= l) {
        --l;
        break;
      }
      d = 0;
      continue;
    }
    if (!(v != "<td" && v != "<th")) {
      var w = p.split(/<\/t[dh]>/i);
      for (c = 0; c < w.length; ++c) {
        var _ = w[c].trim();
        if (_.match(/<t[dh]/i)) {
          for (var T = _, b = 0; T.charAt(0) == "<" && (b = T.indexOf(">")) > -1; ) T = T.slice(b + 1);
          for (var B = 0; B < g.length; ++B) {
            var y = g[B];
            y.s.c == d && y.s.r < l && l <= y.e.r && (d = y.e.c + 1, B = -1);
          }
          var O = ke(_.slice(0, _.indexOf(">")));
          h = O.colspan ? +O.colspan : 1, ((u = +O.rowspan) > 1 || h > 1) && g.push({ s: { r: l, c: d }, e: { r: l + (u || 1) - 1, c: d + h - 1 } });
          var R = O.t || O["data-t"] || "";
          if (!T.length) {
            d += h;
            continue;
          }
          if (T = Oc(T), m.s.r > l && (m.s.r = l), m.e.r < l && (m.e.r = l), m.s.c > d && (m.s.c = d), m.e.c < d && (m.e.c = d), !T.length) {
            d += h;
            continue;
          }
          var P = { t: "s", v: T };
          t.raw || !T.trim().length || R == "s" || (T === "TRUE" ? P = { t: "b", v: !0 } : T === "FALSE" ? P = { t: "b", v: !1 } : isNaN(it(T)) ? isNaN(hn(T).getDate()) ? T.charCodeAt(0) == 35 && Nr[T] != null && (P.t = "e", P.w = T, P.v = Nr[T]) : (P = { t: "d", v: fr(T) }, t.UTC === !1 && (P.v = ma(P.v)), t.cellDates || (P = { t: "n", v: or(P.v) }), P.z = t.dateNF || Fe[14]) : P = { t: "n", v: it(T) }), P.cellText !== !1 && (P.w = T), a ? (n["!data"][l] || (n["!data"][l] = []), n["!data"][l][d] = P) : n[He({ r: l, c: d })] = P, d += h;
        }
      }
    }
  }
  return n["!ref"] = Me(m), g.length && (n["!merges"] = g), n;
}
function u4(e) {
  for (var r = "", t = !1, a = 0; a < e.length; ++a) {
    var n = e.charCodeAt(a);
    if (!(n <= 32 || n >= 127 && n <= 159)) {
      if (n == 47 || n == 63 || n == 35 || n == 92) return !0;
      if (n == 58) {
        if (!r.length || t) return !1;
        switch (r.toLowerCase()) {
          case "http":
          case "https":
          case "mailto":
          case "tel":
          case "ftp":
          case "ftps":
            return !0;
        }
        return !1;
      }
      if (r.length) {
        if (!(n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 48 && n <= 57 || n == 43 || n == 45 || n == 46)) return !0;
      } else if (!(n >= 65 && n <= 90 || n >= 97 && n <= 122)) return !0;
      r.length < 32 ? r += e.charAt(a) : t = !0;
    }
  }
  return !0;
}
function cl(e, r, t, a) {
  for (var n = e["!merges"] || [], i = [], s = {}, f = e["!data"] != null, c = r.s.c; c <= r.e.c; ++c) {
    for (var o = 0, l = 0, d = 0; d < n.length; ++d)
      if (!(n[d].s.r > t || n[d].s.c > c) && !(n[d].e.r < t || n[d].e.c < c)) {
        if (n[d].s.r < t || n[d].s.c < c) {
          o = -1;
          break;
        }
        o = n[d].e.r - n[d].s.r + 1, l = n[d].e.c - n[d].s.c + 1;
        break;
      }
    if (!(o < 0)) {
      var u = Ne(c) + Xe(t), h = f ? (e["!data"][t] || [])[c] : e[u];
      h && h.t == "n" && h.v != null && !isFinite(h.v) && (isNaN(h.v) ? h = { t: "e", v: 36, w: Ir[36] } : h = { t: "e", v: 7, w: Ir[7] });
      var m = h && h.v != null && (h.h || Ja(h.w || (Ot(h), h.w) || "")) || "";
      s = {}, o > 1 && (s.rowspan = o), l > 1 && (s.colspan = l), a.editable ? m = '<span contenteditable="true">' + m + "</span>" : h && (s["data-t"] = h && h.t || "z", h.v != null && (s["data-v"] = Ja(h.v instanceof Date ? h.v.toISOString() : h.v)), h.z != null && (s["data-z"] = h.z), h.l && (h.l.Target || "#").charAt(0) != "#" && (!a.sanitizeLinks || u4(String(h.l.Target || ""))) && (m = '<a href="' + Ja(h.l.Target) + '">' + m + "</a>")), s.id = (a.id || "sjs") + "-" + u, i.push(te("td", m, s));
    }
  }
  var g = "<tr>";
  return g + i.join("") + "</tr>";
}
var ol = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', ll = "</body></html>";
function h4(e, r) {
  var t = $1(e, "table");
  if (!t || t.length == 0) throw new Error("Invalid HTML: could not find <table>");
  if (t.length == 1) {
    var a = ea(rc(t[0], r), r);
    return a.bookType = "html", a;
  }
  var n = js();
  return t.forEach(function(i, s) {
    Ln(n, rc(i, r), "Sheet" + (s + 1));
  }), n.bookType = "html", n;
}
function ul(e, r, t) {
  var a = [];
  return a.join("") + "<table" + (t && t.id ? ' id="' + t.id + '"' : "") + ">";
}
function hl(e, r) {
  var t = r || {}, a = t.header != null ? t.header : ol, n = t.footer != null ? t.footer : ll, i = [a], s = Er(e["!ref"] || "A1");
  if (i.push(ul(e, s, t)), e["!ref"]) for (var f = s.s.r; f <= s.e.r; ++f) i.push(cl(e, s, f, t));
  return i.push("</table>" + n), i.join("");
}
function dl(e, r, t) {
  var a = r.rows;
  if (!a)
    throw "Unsupported origin when " + r.tagName + " is not a TABLE";
  var n = t || {}, i = e["!data"] != null, s = 0, f = 0;
  if (n.origin != null)
    if (typeof n.origin == "number") s = n.origin;
    else {
      var c = typeof n.origin == "string" ? er(n.origin) : n.origin;
      s = c.r, f = c.c;
    }
  var o = Math.min(n.sheetRows || 1e7, a.length), l = { s: { r: 0, c: 0 }, e: { r: s, c: f } };
  if (e["!ref"]) {
    var d = Er(e["!ref"]);
    l.s.r = Math.min(l.s.r, d.s.r), l.s.c = Math.min(l.s.c, d.s.c), l.e.r = Math.max(l.e.r, d.e.r), l.e.c = Math.max(l.e.c, d.e.c), s == -1 && (l.e.r = s = d.e.r + 1);
  }
  var u = [], h = 0, m = e["!rows"] || (e["!rows"] = []), g = 0, p = 0, v = 0, w = 0, _ = 0, T = 0;
  for (e["!cols"] || (e["!cols"] = []); g < a.length && p < o; ++g) {
    var b = a[g];
    if (tc(b)) {
      if (n.display) continue;
      m[p] = { hidden: !0 };
    }
    var B = b.cells;
    for (v = w = 0; v < B.length; ++v) {
      var y = B[v];
      if (!(n.display && tc(y))) {
        var O = y.hasAttribute("data-v") ? y.getAttribute("data-v") : y.hasAttribute("v") ? y.getAttribute("v") : Oc(y.innerHTML), R = y.getAttribute("data-z") || y.getAttribute("z");
        for (h = 0; h < u.length; ++h) {
          var P = u[h];
          P.s.c == w + f && P.s.r < p + s && p + s <= P.e.r && (w = P.e.c + 1 - f, h = -1);
        }
        T = +y.getAttribute("colspan") || 1, ((_ = +y.getAttribute("rowspan") || 1) > 1 || T > 1) && u.push({ s: { r: p + s, c: w + f }, e: { r: p + s + (_ || 1) - 1, c: w + f + (T || 1) - 1 } });
        var L = { t: "s", v: O }, U = y.getAttribute("data-t") || y.getAttribute("t") || "";
        O != null && (O.length == 0 ? L.t = U || "z" : n.raw || O.trim().length == 0 || U == "s" || (U == "e" && Ir[+O] ? L = { t: "e", v: +O, w: Ir[+O] } : O === "TRUE" ? L = { t: "b", v: !0 } : O === "FALSE" ? L = { t: "b", v: !1 } : isNaN(it(O)) ? isNaN(hn(O).getDate()) ? O.charCodeAt(0) == 35 && Nr[O] != null && (L = { t: "e", v: Nr[O], w: O }) : (L = { t: "d", v: fr(O) }, n.UTC && (L.v = pi(L.v)), n.cellDates || (L = { t: "n", v: or(L.v) }), L.z = n.dateNF || Fe[14]) : L = { t: "n", v: it(O) })), L.z === void 0 && R != null && (L.z = R);
        var K = "", me = y.getElementsByTagName("A");
        if (me && me.length)
          for (var de = 0; de < me.length && !(me[de].hasAttribute("href") && (K = me[de].getAttribute("href"), K.charAt(0) != "#")); ++de) ;
        K && K.charAt(0) != "#" && K.slice(0, 11).toLowerCase() != "javascript:" && (L.l = { Target: K }), i ? (e["!data"][p + s] || (e["!data"][p + s] = []), e["!data"][p + s][w + f] = L) : e[He({ c: w + f, r: p + s })] = L, l.e.c < w + f && (l.e.c = w + f), w += T;
      }
    }
    ++p;
  }
  return u.length && (e["!merges"] = (e["!merges"] || []).concat(u)), l.e.r = Math.max(l.e.r, p - 1 + s), e["!ref"] = Me(l), p >= o && (e["!fullref"] = Me((l.e.r = a.length - g + p - 1 + s, l))), e;
}
function vl(e, r) {
  var t = r || {}, a = {};
  return t.dense && (a["!data"] = []), dl(a, e, r);
}
function d4(e, r) {
  var t = ea(vl(e, r), r);
  return t;
}
function tc(e) {
  var r = "", t = v4(e);
  return t && (r = t(e).getPropertyValue("display")), r || (r = e.style && e.style.display), r === "none" ? !0 : m4(e);
}
function v4(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
function m4(e) {
  var r = e.ownerDocument;
  if (!r || !r.styleSheets) return !1;
  var t = e.matches || e.msMatchesSelector || e.webkitMatchesSelector;
  if (!t) return !1;
  for (var a = 0; a < r.styleSheets.length; ++a) {
    var n = null;
    try {
      n = r.styleSheets[a].cssRules || r.styleSheets[a].rules;
    } catch {
      continue;
    }
    if (n)
      for (var i = 0; i < n.length; ++i) {
        var s = n[i];
        if (!(!s || !s.style || s.style.display !== "none" || !s.selectorText))
          for (var f = s.selectorText.split(","), c = 0; c < f.length; ++c) try {
            if (t.call(e, f[c].trim())) return !0;
          } catch {
          }
      }
  }
  return !1;
}
function p4(e) {
  var r = e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function(a, n) {
    return Array(parseInt(n, 10) + 1).join(" ");
  }).replace(/<text:tab[^<>]*\/>/g, "	").replace(/<text:line-break\/>/g, `
`), t = ze(r.replace(/<[^<>]*>/g, ""));
  return [t];
}
function ml(e, r, t) {
  var a = t || {}, n = gi(e);
  Tr.lastIndex = 0, n = ds(Fn(n, "<!--", "-->"));
  for (var i, s, f = "", c = "", o, l = 0, d = -1, u = ""; i = Tr.exec(n); )
    switch (i[3] = i[3].replace(/_[\s\S]*$/, "")) {
      case "number-style":
      case "currency-style":
      case "percentage-style":
      case "date-style":
      case "time-style":
      case "text-style":
        i[1] === "/" ? (s["truncate-on-overflow"] == "false" && (f.match(/h/) ? f = f.replace(/h+/, "[$&]") : f.match(/m/) ? f = f.replace(/m+/, "[$&]") : f.match(/s/) && (f = f.replace(/s+/, "[$&]"))), a[s.name] = f, f = "") : i[0].charAt(i[0].length - 2) !== "/" && (f = "", s = ke(i[0], !1));
        break;
      case "boolean-style":
        i[1] === "/" ? (a[s.name] = "General", f = "") : i[0].charAt(i[0].length - 2) !== "/" && (f = "", s = ke(i[0], !1));
        break;
      case "boolean":
        f += "General";
        break;
      case "text":
        i[1] === "/" ? (u = n.slice(d, Tr.lastIndex - i[0].length), u == "%" && s[0] == "<number:percentage-style" ? f += "%" : f += '"' + u.replace(/"/g, '""') + '"') : i[0].charAt(i[0].length - 2) !== "/" && (d = Tr.lastIndex);
        break;
      case "day":
        switch (o = ke(i[0], !1), o.style) {
          case "short":
            f += "d";
            break;
          case "long":
            f += "dd";
            break;
          default:
            f += "dd";
            break;
        }
        break;
      case "day-of-week":
        switch (o = ke(i[0], !1), o.style) {
          case "short":
            f += "ddd";
            break;
          case "long":
            f += "dddd";
            break;
          default:
            f += "ddd";
            break;
        }
        break;
      case "era":
        switch (o = ke(i[0], !1), o.style) {
          case "short":
            f += "ee";
            break;
          case "long":
            f += "eeee";
            break;
          default:
            f += "eeee";
            break;
        }
        break;
      case "hours":
        switch (o = ke(i[0], !1), o.style) {
          case "short":
            f += "h";
            break;
          case "long":
            f += "hh";
            break;
          default:
            f += "hh";
            break;
        }
        break;
      case "minutes":
        switch (o = ke(i[0], !1), o.style) {
          case "short":
            f += "m";
            break;
          case "long":
            f += "mm";
            break;
          default:
            f += "mm";
            break;
        }
        break;
      case "month":
        switch (o = ke(i[0], !1), o.textual && (f += "mm"), o.style) {
          case "short":
            f += "m";
            break;
          case "long":
            f += "mm";
            break;
          default:
            f += "m";
            break;
        }
        break;
      case "seconds":
        {
          switch (o = ke(i[0], !1), o.style) {
            case "short":
              f += "s";
              break;
            case "long":
              f += "ss";
              break;
            default:
              f += "ss";
              break;
          }
          o["decimal-places"] && (f += "." + Ke("0", +o["decimal-places"]));
        }
        break;
      case "year":
        switch (o = ke(i[0], !1), o.style) {
          case "short":
            f += "yy";
            break;
          case "long":
            f += "yyyy";
            break;
          default:
            f += "yy";
            break;
        }
        break;
      case "am-pm":
        f += "AM/PM";
        break;
      case "week-of-year":
      case "quarter":
        console.error("Excel does not support ODS format token " + i[3]);
        break;
      case "fill-character":
        i[1] === "/" ? (u = n.slice(d, Tr.lastIndex - i[0].length), f += '"' + u.replace(/"/g, '""') + '"*') : i[0].charAt(i[0].length - 2) !== "/" && (d = Tr.lastIndex);
        break;
      case "scientific-number":
        o = ke(i[0], !1), f += "0." + Ke("0", +o["min-decimal-places"] || +o["decimal-places"] || 2) + Ke("?", +o["decimal-places"] - +o["min-decimal-places"] || 0) + "E" + (Je(o["forced-exponent-sign"]) ? "+" : "") + Ke("0", +o["min-exponent-digits"] || 2);
        break;
      case "fraction":
        o = ke(i[0], !1), +o["min-integer-digits"] ? f += Ke("0", +o["min-integer-digits"]) : f += "#", f += " ", f += Ke("?", +o["min-numerator-digits"] || 1), f += "/", +o["denominator-value"] ? f += o["denominator-value"] : f += Ke("?", +o["min-denominator-digits"] || 1);
        break;
      case "currency-symbol":
        i[1] === "/" ? f += '"' + n.slice(d, Tr.lastIndex - i[0].length).replace(/"/g, '""') + '"' : i[0].charAt(i[0].length - 2) !== "/" ? d = Tr.lastIndex : f += "$";
        break;
      case "text-properties":
        switch (o = ke(i[0], !1), (o.color || "").toLowerCase().replace("#", "")) {
          case "ff0000":
          case "red":
            f = "[Red]" + f;
            break;
        }
        break;
      case "text-content":
        f += "@";
        break;
      case "map":
        o = ke(i[0], !1), ze(o.condition) == "value()>=0" ? f = a[o["apply-style-name"]] + ";" + f : console.error("ODS number format may be incorrect: " + o.condition);
        break;
      case "number":
        if (i[1] === "/") break;
        o = ke(i[0], !1), c = "", c += Ke("0", +o["min-integer-digits"] || 1), Je(o.grouping) && (c = Mt(Ke("#", Math.max(0, 4 - c.length)) + c)), (+o["min-decimal-places"] || +o["decimal-places"]) && (c += "."), +o["min-decimal-places"] && (c += Ke("0", +o["min-decimal-places"] || 1)), +o["decimal-places"] - (+o["min-decimal-places"] || 0) && (c += Ke("0", +o["decimal-places"] - (+o["min-decimal-places"] || 0))), f += c;
        break;
      case "embedded-text":
        i[1] === "/" ? l == 0 ? f += '"' + n.slice(d, Tr.lastIndex - i[0].length).replace(/"/g, '""') + '"' : f = f.slice(0, l) + '"' + n.slice(d, Tr.lastIndex - i[0].length).replace(/"/g, '""') + '"' + f.slice(l) : i[0].charAt(i[0].length - 2) !== "/" && (d = Tr.lastIndex, l = -+ke(i[0], !1).position || 0);
        break;
    }
  return a;
}
function pl(e, r, t) {
  var a = r || {}, n = gi(e), i = [], s, f, c, o = "", l = 0, d, u, h = vr(), m = [], g = {};
  a.dense && (g["!data"] = []);
  var p, v, w = { value: "" }, _ = {}, T = "", b = 0, B = "", y = 0, O = [], R = [], P = -1, L = -1, U = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } }, K = 0, me = t || {}, de = {}, ae = [], he = {}, q = 0, ge = 0, z = [], be = 1, oe = 1, fe = [], Q = { Names: [], WBProps: {} }, _e = {}, Ee = ["", ""], Se = [], A = {}, M = "", D = 0, N = !1, j = !1, x = 0;
  for (Tr.lastIndex = 0, n = ds(Fn(n, "<!--", "-->")); p = Tr.exec(n); ) switch (p[3] = p[3].replace(/_[\s\S]*$/, "")) {
    case "table":
    case "工作表":
      if (p[1] === "/") {
        if (U.e.c >= U.s.c && U.e.r >= U.s.r ? g["!ref"] = Me(U) : g["!ref"] = "A1:A1", a.sheetRows > 0 && a.sheetRows <= U.e.r && (g["!fullref"] = g["!ref"], U.e.r = a.sheetRows - 1, g["!ref"] = Me(U)), ae.length && (g["!merges"] = ae), z.length && (g["!rows"] = z), d.name = d.名称 || d.name, typeof JSON < "u" && JSON.stringify(d), zr(d.name)) {
          if (a.WTF) throw new Error("Bad sheet name: " + d.name);
        } else
          m.push(d.name), ar(h, d.name, g);
        j = !1;
      } else p[0].charAt(p[0].length - 2) !== "/" && (d = ke(p[0], !1), P = L = -1, U.s.r = U.s.c = 1e7, U.e.r = U.e.c = 0, g = {}, a.dense && (g["!data"] = []), ae = [], z = [], j = !0);
      break;
    case "table-row-group":
      p[1] === "/" ? --K : ++K;
      break;
    case "table-row":
    case "行":
      if (p[1] === "/") {
        P += be, be = 1;
        break;
      }
      if (u = ke(p[0], !1), u.行号 ? P = u.行号 - 1 : P == -1 && (P = 0), be = +u["number-rows-repeated"] || 1, be < 10)
        for (x = 0; x < be; ++x) K > 0 && (z[P + x] = { level: K });
      L = -1;
      break;
    case "covered-table-cell":
      if (p[1] !== "/")
        if (++L, w = ke(p[0], !1), oe = parseInt(w["number-columns-repeated"] || "1", 10) || 1, a.sheetStubs) {
          for (; oe-- > 0; )
            a.dense ? (g["!data"][P] || (g["!data"][P] = []), g["!data"][P][L] = { t: "z" }) : g[He({ r: P, c: L })] = { t: "z" }, ++L;
          --L;
        } else L += oe - 1;
      T = "", O = [];
      break;
    case "table-cell":
    case "数据":
      if (p[0].charAt(p[0].length - 2) === "/")
        ++L, w = ke(p[0], !1), oe = parseInt(w["number-columns-repeated"] || "1", 10) || 1, v = {
          t: "z",
          v: null
          /*:: , z:null, w:"",c:[]*/
        }, w.formula && a.cellFormula != !1 && (v.f = qf(ze(w.formula))), w["style-name"] && de[w["style-name"]] && (v.z = de[w["style-name"]]), (w.数据类型 || w["value-type"]) == "string" && (v.t = "s", v.v = ze(w["string-value"] || ""), a.dense ? (g["!data"][P] || (g["!data"][P] = []), g["!data"][P][L] = v) : g[Ne(L) + Xe(P)] = v), L += oe - 1;
      else if (p[1] !== "/") {
        ++L, T = B = "", b = y = 0, O = [], R = [], oe = 1;
        var ne = be ? P + be - 1 : P;
        if (L > U.e.c && (U.e.c = L), L < U.s.c && (U.s.c = L), P < U.s.r && (U.s.r = P), ne > U.e.r && (U.e.r = ne), w = ke(p[0], !1), _ = q1(p[0]), Se = [], A = {}, v = {
          t: w.数据类型 || w["value-type"],
          v: null
          /*:: , z:null, w:"",c:[]*/
        }, w["style-name"] && de[w["style-name"]] && (v.z = de[w["style-name"]]), a.cellFormula)
          if (w.formula && (w.formula = ze(w.formula)), w["number-matrix-columns-spanned"] && w["number-matrix-rows-spanned"] && (q = parseInt(w["number-matrix-rows-spanned"], 10) || 0, ge = parseInt(w["number-matrix-columns-spanned"], 10) || 0, he = { s: { r: P, c: L }, e: { r: P + q - 1, c: L + ge - 1 } }, v.F = Me(he), fe.push([he, v.F])), w.formula) v.f = qf(w.formula);
          else for (x = 0; x < fe.length; ++x)
            P >= fe[x][0].s.r && P <= fe[x][0].e.r && L >= fe[x][0].s.c && L <= fe[x][0].e.c && (v.F = fe[x][1]);
        switch ((w["number-columns-spanned"] || w["number-rows-spanned"]) && (q = parseInt(w["number-rows-spanned"] || "1", 10) || 1, ge = parseInt(w["number-columns-spanned"] || "1", 10) || 1, q * ge > 1 && (he = { s: { r: P, c: L }, e: { r: P + q - 1, c: L + ge - 1 } }, ae.push(he))), w["number-columns-repeated"] && (oe = parseInt(w["number-columns-repeated"], 10)), v.t) {
          case "boolean":
            v.t = "b", v.v = Je(w["boolean-value"]) || +w["boolean-value"] >= 1;
            break;
          case "float":
            v.t = "n", v.v = parseFloat(w.value), a.cellDates && v.z && ft(v.z) && (v.v = Ht(v.v + (Q.WBProps.date1904 ? 1462 : 0)), v.t = typeof v.v == "number" ? "n" : "d");
            break;
          case "percentage":
            v.t = "n", v.v = parseFloat(w.value);
            break;
          case "currency":
            v.t = "n", v.v = parseFloat(w.value);
            break;
          case "date":
            v.t = "d", v.v = fr(w["date-value"], Q.WBProps.date1904), a.cellDates || (v.t = "n", v.v = or(v.v, Q.WBProps.date1904)), v.z || (v.z = "m/d/yy");
            break;
          case "time":
            v.t = "n", v.v = R1(w["time-value"]) / 86400, a.cellDates && (v.v = Ht(v.v), v.t = typeof v.v == "number" ? "n" : "d"), v.z || (v.z = "HH:MM:SS");
            break;
          case "number":
            v.t = "n", v.v = parseFloat(w.数据数值);
            break;
          default:
            if (v.t === "string" || v.t === "text" || !v.t)
              v.t = "s", w["string-value"] != null && (T = ze(w["string-value"]), O = []);
            else throw new Error("Unsupported value type " + v.t);
        }
      } else {
        if (N = !1, _["calcext:value-type"] == "error" && Nr[T] != null && (v.t = "e", v.w = T, v.v = Nr[T]), v.t === "s" && (v.v = T || "", O.length && (v.R = O), N = b == 0), _e.Target && (v.l = _e), Se.length > 0 && (v.c = Se, Se = []), T && a.cellText !== !1 && (v.w = T), N && (v.t = "z", delete v.v), (!N || a.sheetStubs) && !(a.sheetRows && a.sheetRows <= P))
          for (var ve = 0; ve < be; ++ve) {
            if (oe = parseInt(w["number-columns-repeated"] || "1", 10), a.dense)
              for (g["!data"][P + ve] || (g["!data"][P + ve] = []), g["!data"][P + ve][L] = ve == 0 ? v : je(v); --oe > 0; ) g["!data"][P + ve][L + oe] = je(v);
            else
              for (g[He({ r: P + ve, c: L })] = v; --oe > 0; ) g[He({ r: P + ve, c: L + oe })] = je(v);
            U.e.c <= L && (U.e.c = L);
          }
        oe = parseInt(w["number-columns-repeated"] || "1", 10), L += oe - 1, oe = 0, v = {
          /*:: t:"", v:null, z:null, w:"",c:[]*/
        }, T = "", O = [];
      }
      _e = {};
      break;
    case "document":
    case "document-content":
    case "电子表格文档":
    case "spreadsheet":
    case "主体":
    case "scripts":
    case "styles":
    case "font-face-decls":
    case "master-styles":
      if (p[1] === "/") {
        if ((s = i.pop())[0] !== p[3]) throw "Bad state: " + s;
      } else p[0].charAt(p[0].length - 2) !== "/" && i.push([p[3], !0]);
      break;
    case "annotation":
      if (p[1] === "/") {
        if ((s = i.pop())[0] !== p[3]) throw "Bad state: " + s;
        A.t = T, O.length && (A.R = O), A.a = M, Se.push(A), T = B, b = y, O = R;
      } else if (p[0].charAt(p[0].length - 2) !== "/") {
        i.push([p[3], !1]);
        var se = ke(p[0], !0);
        se.display && Je(se.display) || (Se.hidden = !0), B = T, y = b, R = O, T = "", b = 0, O = [];
      }
      M = "", D = 0;
      break;
    case "creator":
      p[1] === "/" ? M = n.slice(D, p.index) : D = p.index + p[0].length;
      break;
    case "meta":
    case "元数据":
    case "settings":
    case "config-item-set":
    case "config-item-map-indexed":
    case "config-item-map-entry":
    case "config-item-map-named":
    case "shapes":
    case "frame":
    case "text-box":
    case "image":
    case "data-pilot-tables":
    case "list-style":
    case "form":
    case "dde-links":
    case "event-listeners":
    case "chart":
      if (p[1] === "/") {
        if ((s = i.pop())[0] !== p[3]) throw "Bad state: " + s;
      } else p[0].charAt(p[0].length - 2) !== "/" && i.push([p[3], !1]);
      T = "", b = 0, O = [];
      break;
    case "scientific-number":
    case "currency-symbol":
    case "fill-character":
      break;
    case "text-style":
    case "boolean-style":
    case "number-style":
    case "currency-style":
    case "percentage-style":
    case "date-style":
    case "time-style":
      if (p[1] === "/") {
        var Ce = Tr.lastIndex;
        ml(n.slice(c, Tr.lastIndex), r, me), Tr.lastIndex = Ce;
      } else p[0].charAt(p[0].length - 2) !== "/" && (c = Tr.lastIndex - p[0].length);
      break;
    case "script":
      break;
    case "libraries":
      break;
    case "automatic-styles":
      break;
    case "default-style":
    case "page-layout":
      break;
    case "style":
      {
        var xe = ke(p[0], !1);
        xe.family == "table-cell" && me[xe["data-style-name"]] && (de[xe.name] = me[xe["data-style-name"]]);
      }
      break;
    case "map":
      break;
    case "font-face":
      break;
    case "paragraph-properties":
      break;
    case "table-properties":
      break;
    case "table-column-properties":
      break;
    case "table-row-properties":
      break;
    case "table-cell-properties":
      break;
    case "number":
      break;
    case "fraction":
      break;
    case "day":
    case "month":
    case "year":
    case "era":
    case "day-of-week":
    case "week-of-year":
    case "quarter":
    case "hours":
    case "minutes":
    case "seconds":
    case "am-pm":
      break;
    case "boolean":
      break;
    case "text":
      if (p[0].slice(-2) === "/>") break;
      if (p[1] === "/") switch (i[i.length - 1][0]) {
        case "number-style":
        case "date-style":
        case "time-style":
          o += n.slice(l, p.index);
          break;
      }
      else l = p.index + p[0].length;
      break;
    case "named-range":
      f = ke(p[0], !1), Ee = Ui(f["cell-range-address"]);
      var Oe = { Name: f.name, Ref: Ee[0] + "!" + Ee[1] };
      j && (Oe.Sheet = m.length), Q.Names.push(Oe);
      break;
    case "text-content":
      break;
    case "text-properties":
      break;
    case "embedded-text":
      break;
    case "body":
    case "电子表格":
      break;
    case "forms":
      break;
    case "table-column":
      break;
    case "table-header-rows":
      break;
    case "table-rows":
      break;
    case "table-column-group":
      break;
    case "table-header-columns":
      break;
    case "table-columns":
      break;
    case "null-date":
      switch (f = ke(p[0], !1), f["date-value"]) {
        case "1904-01-01":
          Q.WBProps.date1904 = !0;
          break;
      }
      break;
    case "graphic-properties":
      break;
    case "calculation-settings":
      break;
    case "named-expressions":
      break;
    case "label-range":
      break;
    case "label-ranges":
      break;
    case "named-expression":
      break;
    case "sort":
      break;
    case "sort-by":
      break;
    case "sort-groups":
      break;
    case "tab":
      break;
    case "line-break":
      break;
    case "span":
      break;
    case "p":
    case "文本串":
      if (["master-styles"].indexOf(i[i.length - 1][0]) > -1) break;
      if (p[1] === "/" && (!w || !w["string-value"])) {
        var qe = p4(n.slice(b, p.index));
        T = (T.length > 0 ? T + `
` : "") + qe[0];
      } else p[0].slice(-2) == "/>" ? T += `
` : (ke(p[0], !1), b = p.index + p[0].length);
      break;
    case "s":
      break;
    case "database-range":
      if (p[1] === "/") break;
      try {
        Ee = Ui(ke(p[0])["target-range-address"]), h[Ee[0]]["!autofilter"] = { ref: Ee[1] };
      } catch {
      }
      break;
    case "date":
      break;
    case "object":
      break;
    case "title":
    case "标题":
      break;
    case "desc":
      break;
    case "binary-data":
      break;
    case "table-source":
      break;
    case "scenario":
      break;
    case "iteration":
      break;
    case "content-validations":
      break;
    case "content-validation":
      break;
    case "help-message":
      break;
    case "error-message":
      break;
    case "database-ranges":
      break;
    case "filter":
      break;
    case "filter-and":
      break;
    case "filter-or":
      break;
    case "filter-condition":
      break;
    case "filter-set-item":
      break;
    case "list-level-style-bullet":
      break;
    case "list-level-style-number":
      break;
    case "list-level-properties":
      break;
    case "sender-firstname":
    case "sender-lastname":
    case "sender-initials":
    case "sender-title":
    case "sender-position":
    case "sender-email":
    case "sender-phone-private":
    case "sender-fax":
    case "sender-company":
    case "sender-phone-work":
    case "sender-street":
    case "sender-city":
    case "sender-postal-code":
    case "sender-country":
    case "sender-state-or-province":
    case "author-name":
    case "author-initials":
    case "chapter":
    case "file-name":
    case "template-name":
    case "sheet-name":
      break;
    case "event-listener":
      break;
    case "initial-creator":
    case "creation-date":
    case "print-date":
    case "generator":
    case "document-statistic":
    case "user-defined":
    case "editing-duration":
    case "editing-cycles":
      break;
    case "config-item":
      break;
    case "page-number":
      break;
    case "page-count":
      break;
    case "time":
      break;
    case "cell-range-source":
      break;
    case "detective":
      break;
    case "operation":
      break;
    case "highlighted-range":
      break;
    case "data-pilot-table":
    case "source-cell-range":
    case "source-service":
    case "data-pilot-field":
    case "data-pilot-level":
    case "data-pilot-subtotals":
    case "data-pilot-subtotal":
    case "data-pilot-members":
    case "data-pilot-member":
    case "data-pilot-display-info":
    case "data-pilot-sort-info":
    case "data-pilot-layout-info":
    case "data-pilot-field-reference":
    case "data-pilot-groups":
    case "data-pilot-group":
    case "data-pilot-group-member":
      break;
    case "rect":
      break;
    case "dde-connection-decls":
    case "dde-connection-decl":
    case "dde-link":
    case "dde-source":
      break;
    case "properties":
      break;
    case "property":
      break;
    case "a":
      if (p[1] !== "/") {
        if (_e = ke(p[0], !1), !_e.href) break;
        _e.Target = ze(_e.href), delete _e.href, _e.Target.charAt(0) == "#" && _e.Target.indexOf(".") > -1 ? (Ee = Ui(_e.Target.slice(1)), _e.Target = "#" + Ee[0] + "!" + Ee[1]) : _e.Target.match(/^\.\.[\\\/]/) && (_e.Target = _e.Target.slice(3));
      }
      break;
    case "table-protection":
      break;
    case "data-pilot-grand-total":
      break;
    case "office-document-common-attrs":
      break;
    default:
      switch (p[2]) {
        case "dc:":
        case "calcext:":
        case "loext:":
        case "ooo:":
        case "chartooo:":
        case "draw:":
        case "style:":
        case "chart:":
        case "form:":
        case "uof:":
        case "表:":
        case "字:":
          break;
        default:
          if (a.WTF) throw new Error(p);
      }
  }
  var tr = {
    Sheets: h,
    SheetNames: m,
    Workbook: Q
  };
  return a.bookSheets && delete /*::(*/
  tr.Sheets, tr;
}
function ac(e, r) {
  r = r || {}, lt(e, "META-INF/manifest.xml") && Vu(kr(e, "META-INF/manifest.xml"), r);
  var t = Qr(e, "styles.xml"), a = t && ml(Qe(t)), n = Qr(e, "content.xml");
  if (!n) throw new Error("Missing content.xml in ODS / UOF file");
  var i = pl(Qe(n), r, a);
  return lt(e, "meta.xml") && (i.Props = Zc(kr(e, "meta.xml"))), i.bookType = "ods", i;
}
function nc(e, r) {
  var t = pl(e, r);
  return t.bookType = "fods", t;
}
var g4 = /* @__PURE__ */ function() {
  var e = [
    "<office:master-styles>",
    '<style:master-page style:name="mp1" style:page-layout-name="mp1">',
    "<style:header/>",
    '<style:header-left style:display="false"/>',
    "<style:footer/>",
    '<style:footer-left style:display="false"/>',
    "</style:master-page>",
    "</office:master-styles>"
  ].join(""), r = "<office:document-styles " + pa({
    "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
    "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
    "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
    "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
    "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
    "office:version": "1.2"
  }) + ">" + e + "</office:document-styles>";
  return function() {
    return hr + r;
  };
}();
function _4(e, r) {
  var t = "number", a = "", n = { "style:name": r }, i = "", s = 0;
  e = e.replace(/"[$]"/g, "$");
  e: {
    if (e.indexOf(";") > -1 && (console.error("Unsupported ODS Style Map exported.  Using first branch of " + e), e = e.slice(0, e.indexOf(";"))), e == "@") {
      t = "text", a = "<number:text-content/>";
      break e;
    }
    if (e.indexOf(/\$/) > -1 && (t = "currency"), e[s] == '"') {
      for (i = ""; e[++s] != '"' || e[++s] == '"'; ) i += e[s];
      --s, e[s + 1] == "*" ? (s++, a += "<number:fill-character>" + Le(i.replace(/""/g, '"')) + "</number:fill-character>") : a += "<number:text>" + Le(i.replace(/""/g, '"')) + "</number:text>", e = e.slice(s + 1), s = 0;
    }
    var f = e.match(/# (\?+)\/(\?+)/);
    if (f) {
      a += te("number:fraction", null, { "number:min-integer-digits": 0, "number:min-numerator-digits": f[1].length, "number:max-denominator-value": Math.max(+f[1].replace(/./g, "9"), +f[2].replace(/./g, "9")) });
      break e;
    }
    if (f = e.match(/# (\?+)\/(\d+)/)) {
      a += te("number:fraction", null, { "number:min-integer-digits": 0, "number:min-numerator-digits": f[1].length, "number:denominator-value": +f[2] });
      break e;
    }
    if (f = e.match(/\b(\d+)(|\.\d+)%/)) {
      t = "percentage", a += te("number:number", null, { "number:decimal-places": f[2] && f.length - 1 || 0, "number:min-decimal-places": f[2] && f.length - 1 || 0, "number:min-integer-digits": f[1].length }) + "<number:text>%</number:text>";
      break e;
    }
    var c = !1;
    if (["y", "m", "d"].indexOf(e[0]) > -1) {
      t = "date";
      r: for (; s < e.length; ++s) switch (i = e[s].toLowerCase()) {
        case "h":
        case "s":
          c = !0, --s;
          break r;
        case "m":
          t: for (var o = s + 1; o < e.length; ++o) switch (e[o]) {
            case "y":
            case "d":
              break t;
            case "h":
            case "s":
              c = !0, --s;
              break r;
          }
        case "y":
        case "d":
          for (; (e[++s] || "").toLowerCase() == i[0]; ) i += i[0];
          switch (--s, i) {
            case "y":
            case "yy":
              a += "<number:year/>";
              break;
            case "yyy":
            case "yyyy":
              a += '<number:year number:style="long"/>';
              break;
            case "mmmmm":
              console.error("ODS has no equivalent of format |mmmmm|");
            case "m":
            case "mm":
            case "mmm":
            case "mmmm":
              a += '<number:month number:style="' + (i.length % 2 ? "short" : "long") + '" number:textual="' + (i.length >= 3 ? "true" : "false") + '"/>';
              break;
            case "d":
            case "dd":
              a += '<number:day number:style="' + (i.length % 2 ? "short" : "long") + '"/>';
              break;
            case "ddd":
            case "dddd":
              a += '<number:day-of-week number:style="' + (i.length % 2 ? "short" : "long") + '"/>';
              break;
          }
          break;
        case '"':
          for (; e[++s] != '"' || e[++s] == '"'; ) i += e[s];
          --s, a += "<number:text>" + Le(i.slice(1).replace(/""/g, '"')) + "</number:text>";
          break;
        case "\\":
          i = e[++s], a += "<number:text>" + Le(i) + "</number:text>";
          break;
        case "/":
        case ":":
          a += "<number:text>" + Le(i) + "</number:text>";
          break;
        default:
          console.error("unrecognized character " + i + " in ODF format " + e);
      }
      if (!c) break e;
      e = e.slice(s + 1), s = 0;
    }
    if (e.match(/^\[?[hms]/)) {
      for (t == "number" && (t = "time"), e.match(/\[/) && (e = e.replace(/[\[\]]/g, ""), n["number:truncate-on-overflow"] = "false"); s < e.length; ++s) switch (i = e[s].toLowerCase()) {
        case "h":
        case "m":
        case "s":
          for (; (e[++s] || "").toLowerCase() == i[0]; ) i += i[0];
          switch (--s, i) {
            case "h":
            case "hh":
              a += '<number:hours number:style="' + (i.length % 2 ? "short" : "long") + '"/>';
              break;
            case "m":
            case "mm":
              a += '<number:minutes number:style="' + (i.length % 2 ? "short" : "long") + '"/>';
              break;
            case "s":
            case "ss":
              if (e[s + 1] == ".") do
                i += e[s + 1], ++s;
              while (e[s + 1] == "0");
              a += '<number:seconds number:style="' + (i.match("ss") ? "long" : "short") + '"' + (i.match(/\./) ? ' number:decimal-places="' + (i.match(/0+/) || [""])[0].length + '"' : "") + "/>";
              break;
          }
          break;
        case '"':
          for (; e[++s] != '"' || e[++s] == '"'; ) i += e[s];
          --s, a += "<number:text>" + Le(i.slice(1).replace(/""/g, '"')) + "</number:text>";
          break;
        case "/":
        case ":":
          a += "<number:text>" + Le(i) + "</number:text>";
          break;
        case "a":
          if (e.slice(s, s + 3).toLowerCase() == "a/p") {
            a += "<number:am-pm/>", s += 2;
            break;
          }
          if (e.slice(s, s + 5).toLowerCase() == "am/pm") {
            a += "<number:am-pm/>", s += 4;
            break;
          }
        default:
          console.error("unrecognized character " + i + " in ODF format " + e);
      }
      break e;
    }
    if (e.indexOf(/\$/) > -1 && (t = "currency"), e[0] == "$" && (a += '<number:currency-symbol number:language="en" number:country="US">$</number:currency-symbol>', e = e.slice(1), s = 0), s = 0, e[s] == '"') {
      for (; e[++s] != '"' || e[++s] == '"'; ) i += e[s];
      --s, e[s + 1] == "*" ? (s++, a += "<number:fill-character>" + Le(i.replace(/""/g, '"')) + "</number:fill-character>") : a += "<number:text>" + Le(i.replace(/""/g, '"')) + "</number:text>", e = e.slice(s + 1), s = 0;
    }
    var l = e.match(/([#0][0#,]*)(\.[0#]*|)(E[+]?0*|)/i);
    if (!l || !l[0]) console.error("Could not find numeric part of " + e);
    else {
      var d = l[1].replace(/,/g, "");
      a += "<number:" + (l[3] ? "scientific-" : "") + 'number number:min-integer-digits="' + (d.indexOf("0") == -1 ? "0" : d.length - d.indexOf("0")) + '"' + (l[0].indexOf(",") > -1 ? ' number:grouping="true"' : "") + (l[2] && ' number:decimal-places="' + (l[2].length - 1) + '"' || ' number:decimal-places="0"') + (l[3] && l[3].indexOf("+") > -1 ? ' number:forced-exponent-sign="true"' : "") + (l[3] ? ' number:min-exponent-digits="' + l[3].match(/0+/)[0].length + '"' : "") + "></number:" + (l[3] ? "scientific-" : "") + "number>", s = l.index + l[0].length;
    }
    if (e[s] == '"') {
      for (i = ""; e[++s] != '"' || e[++s] == '"'; ) i += e[s];
      --s, a += "<number:text>" + Le(i.replace(/""/g, '"')) + "</number:text>";
    }
  }
  return a ? te("number:" + t + "-style", a, n) : (console.error("Could not generate ODS number format for |" + e + "|"), "");
}
function ic(e, r, t) {
  for (var a = [], n = 0; n < e.length; ++n) {
    var i = e[n];
    i && i.Sheet == (t == -1 ? null : t) && a.push(i);
  }
  return a.length ? `      <table:named-expressions>
` + a.map(function(s) {
    var f = (t == -1 ? "$" : "") + Ho(s.Ref);
    return "        " + te("table:named-range", null, {
      "table:name": s.Name,
      "table:cell-range-address": f,
      "table:base-cell-address": f.replace(/[\.][^\.]*$/, ".$A$1")
    });
  }).join(`
`) + `
      </table:named-expressions>
` : "";
}
var sc = /* @__PURE__ */ function() {
  var e = function(n, i) {
    return Le(n).replace(/  +/g, function(s) {
      return '<text:s text:c="' + s.length + '"/>';
    }).replace(/\t/g, "<text:tab/>").replace(/\n/g, "</text:p><text:p>").replace(/^ /, "<text:s/>").replace(/ $/, "<text:s/>");
  }, r = `          <table:table-cell />
`, t = function(n, i, s, f, c, o) {
    var l = [];
    l.push('      <table:table table:name="' + Le(i.SheetNames[s]) + `" table:style-name="ta1">
`);
    var d = 0, u = 0, h = Er(n["!ref"] || "A1"), m = n["!merges"] || [], g = 0, p = n["!data"] != null;
    if (n["!cols"])
      for (u = 0; u <= h.e.c; ++u) l.push("        <table:table-column" + (n["!cols"][u] ? ' table:style-name="co' + n["!cols"][u].ods + '"' : "") + `></table:table-column>
`);
    var v = "", w = n["!rows"] || [];
    for (d = 0; d < h.s.r; ++d)
      v = w[d] ? ' table:style-name="ro' + w[d].ods + '"' : "", l.push("        <table:table-row" + v + `></table:table-row>
`);
    for (; d <= h.e.r; ++d) {
      for (v = w[d] ? ' table:style-name="ro' + w[d].ods + '"' : "", l.push("        <table:table-row" + v + `>
`), u = 0; u < h.s.c; ++u) l.push(r);
      for (; u <= h.e.c; ++u) {
        var _ = !1, T = {}, b = "";
        for (g = 0; g != m.length; ++g)
          if (!(m[g].s.c > u) && !(m[g].s.r > d) && !(m[g].e.c < u) && !(m[g].e.r < d)) {
            (m[g].s.c != u || m[g].s.r != d) && (_ = !0), T["table:number-columns-spanned"] = m[g].e.c - m[g].s.c + 1, T["table:number-rows-spanned"] = m[g].e.r - m[g].s.r + 1;
            break;
          }
        if (_) {
          l.push(`          <table:covered-table-cell/>
`);
          continue;
        }
        var B = He({ r: d, c: u }), y = p ? (n["!data"][d] || [])[u] : n[B];
        if (y && y.f && (T["table:formula"] = Le(Qm(y.f)), y.F && y.F.slice(0, B.length) == B)) {
          var O = Er(y.F);
          T["table:number-matrix-columns-spanned"] = O.e.c - O.s.c + 1, T["table:number-matrix-rows-spanned"] = O.e.r - O.s.r + 1;
        }
        if (!y) {
          l.push(r);
          continue;
        }
        switch (y.t) {
          case "b":
            b = y.v ? "TRUE" : "FALSE", T["office:value-type"] = "boolean", T["office:boolean-value"] = y.v ? "true" : "false";
            break;
          case "n":
            isFinite(y.v) ? (b = y.w || String(y.v || 0), T["office:value-type"] = "float", T["office:value"] = y.v || 0) : (isNaN(y.v) ? (b = "#NUM!", T["table:formula"] = "of:=#NUM!") : (b = "#DIV/0!", T["table:formula"] = "of:=" + (y.v < 0 ? "-" : "") + "1/0"), T["office:string-value"] = "", T["office:value-type"] = "string", T["calcext:value-type"] = "error");
            break;
          case "s":
          case "str":
            b = y.v == null ? "" : y.v, T["office:value-type"] = "string";
            break;
          case "d":
            b = y.w || fr(y.v, o).toISOString(), T["office:value-type"] = "date", T["office:date-value"] = fr(y.v, o).toISOString(), T["table:style-name"] = "ce1";
            break;
          default:
            l.push(r);
            continue;
        }
        var R = e(b);
        if (y.l && y.l.Target) {
          var P = y.l.Target;
          P = P.charAt(0) == "#" ? "#" + Ho(P.slice(1)) : P, P.charAt(0) != "#" && !P.match(/^\w+:/) && (P = "../" + P), R = te("text:a", R, { "xlink:href": P.replace(/&/g, "&amp;") });
        }
        c[y.z] && (T["table:style-name"] = "ce" + c[y.z].slice(1));
        var L = te("text:p", R, {});
        if (y.c) {
          for (var U = "", K = "", me = {}, de = 0; de < y.c.length; ++de)
            !U && y.c[de].a && (U = y.c[de].a), K += "<text:p>" + e(y.c[de].t) + "</text:p>";
          y.c.hidden || (me["office:display"] = !0), L = te("office:annotation", K, me) + L;
        }
        l.push("          " + te("table:table-cell", L, T) + `
`);
      }
      l.push(`        </table:table-row>
`);
    }
    return (i.Workbook || {}).Names && l.push(ic(i.Workbook.Names, i.SheetNames, s)), l.push(`      </table:table>
`), l.join("");
  }, a = function(n, i) {
    n.push(` <office:automatic-styles>
`);
    var s = 0;
    i.SheetNames.map(function(l) {
      return i.Sheets[l];
    }).forEach(function(l) {
      if (l && l["!cols"]) {
        for (var d = 0; d < l["!cols"].length; ++d) if (l["!cols"][d]) {
          var u = l["!cols"][d];
          if (u.width == null && u.wpx == null && u.wch == null) continue;
          Gt(u), u.ods = s;
          var h = l["!cols"][d].wpx + "px";
          n.push('  <style:style style:name="co' + s + `" style:family="table-column">
`), n.push('   <style:table-column-properties fo:break-before="auto" style:column-width="' + h + `"/>
`), n.push(`  </style:style>
`), ++s;
        }
      }
    });
    var f = 0;
    i.SheetNames.map(function(l) {
      return i.Sheets[l];
    }).forEach(function(l) {
      if (l && l["!rows"]) {
        for (var d = 0; d < l["!rows"].length; ++d) if (l["!rows"][d]) {
          l["!rows"][d].ods = f;
          var u = l["!rows"][d].hpx + "px";
          n.push('  <style:style style:name="ro' + f + `" style:family="table-row">
`), n.push('   <style:table-row-properties fo:break-before="auto" style:row-height="' + u + `"/>
`), n.push(`  </style:style>
`), ++f;
        }
      }
    }), n.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`), n.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`), n.push(`  </style:style>
`), n.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`), n.push(`   <number:month number:style="long"/>
`), n.push(`   <number:text>/</number:text>
`), n.push(`   <number:day number:style="long"/>
`), n.push(`   <number:text>/</number:text>
`), n.push(`   <number:year/>
`), n.push(`  </number:date-style>
`);
    var c = {}, o = 69;
    return i.SheetNames.map(function(l) {
      return i.Sheets[l];
    }).forEach(function(l) {
      if (l) {
        var d = l["!data"] != null;
        if (l["!ref"])
          for (var u = Er(l["!ref"]), h = 0; h <= u.e.r; ++h) for (var m = 0; m <= u.e.c; ++m) {
            var g = d ? (l["!data"][h] || [])[m] : l[He({ r: h, c: m })];
            if (!(!g || !g.z || g.z.toLowerCase() == "general") && !c[g.z]) {
              var p = _4(g.z, "N" + o);
              p && (c[g.z] = "N" + o, ++o, n.push(p + `
`));
            }
          }
      }
    }), n.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`), sr(c).forEach(function(l) {
      n.push('<style:style style:name="ce' + c[l].slice(1) + '" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="' + c[l] + `"/>
`);
    }), n.push(` </office:automatic-styles>
`), c;
  };
  return function(i, s) {
    var f = [hr], c = pa({
      "xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
      "xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
      "xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
      "xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
      "xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
      "xmlns:fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",
      "xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
      "xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
      "xmlns:presentation": "urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
      "xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
      "xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
      "xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
      "xmlns:math": "http://www.w3.org/1998/Math/MathML",
      "xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
      "xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
      "xmlns:ooo": "http://openoffice.org/2004/office",
      "xmlns:ooow": "http://openoffice.org/2004/writer",
      "xmlns:oooc": "http://openoffice.org/2004/calc",
      "xmlns:dom": "http://www.w3.org/2001/xml-events",
      "xmlns:xforms": "http://www.w3.org/2002/xforms",
      "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
      "xmlns:rpt": "http://openoffice.org/2005/report",
      "xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
      "xmlns:xhtml": "http://www.w3.org/1999/xhtml",
      "xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
      "xmlns:tableooo": "http://openoffice.org/2009/table",
      "xmlns:drawooo": "http://openoffice.org/2010/draw",
      "xmlns:calcext": "urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
      "xmlns:loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
      "xmlns:field": "urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
      "xmlns:formx": "urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
      "xmlns:css3t": "http://www.w3.org/TR/css3-text/",
      "office:version": "1.2"
    }), o = pa({
      "xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
      "office:mimetype": "application/vnd.oasis.opendocument.spreadsheet"
    });
    s.bookType == "fods" ? (f.push("<office:document" + c + o + `>
`), f.push(Yc().replace(/<office:document-meta[^<>]*?>/, "").replace(/<\/office:document-meta>/, "") + `
`)) : f.push("<office:document-content" + c + `>
`);
    var l = a(f, i);
    f.push(`  <office:body>
`), f.push(`    <office:spreadsheet>
`), ((i.Workbook || {}).WBProps || {}).date1904 && f.push(`      <table:calculation-settings table:case-sensitive="false" table:search-criteria-must-apply-to-whole-cell="true" table:use-wildcards="true" table:use-regular-expressions="false" table:automatic-find-labels="false">
        <table:null-date table:date-value="1904-01-01"/>
      </table:calculation-settings>
`);
    for (var d = 0; d != i.SheetNames.length; ++d) f.push(t(i.Sheets[i.SheetNames[d]], i, d, s, l, ((i.Workbook || {}).WBProps || {}).date1904));
    return (i.Workbook || {}).Names && f.push(ic(i.Workbook.Names, i.SheetNames, -1)), f.push(`    </office:spreadsheet>
`), f.push(`  </office:body>
`), s.bookType == "fods" ? f.push("</office:document>") : f.push("</office:document-content>"), f.join("");
  };
}();
function gl(e, r) {
  if (r.bookType == "fods") return sc(e, r);
  var t = ps(), a = "", n = [], i = [];
  return a = "mimetype", De(t, a, "application/vnd.oasis.opendocument.spreadsheet"), a = "content.xml", De(t, a, sc(e, r)), n.push([a, "text/xml"]), i.push([a, "ContentFile"]), a = "styles.xml", De(t, a, g4()), n.push([a, "text/xml"]), i.push([a, "StylesFile"]), a = "meta.xml", De(t, a, hr + Yc(
    /*::wb, opts*/
  )), n.push([a, "text/xml"]), i.push([a, "MetadataFile"]), a = "manifest.rdf", De(t, a, $u(
    i
    /*, opts*/
  )), n.push([a, "application/rdf+xml"]), a = "META-INF/manifest.xml", De(t, a, Gu(
    n
    /*, opts*/
  )), t;
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
var pr = function() {
  try {
    return typeof Uint8Array > "u" || typeof Uint8Array.prototype.subarray > "u" ? "slice" : typeof Buffer < "u" ? typeof Buffer.prototype.subarray > "u" ? "slice" : (typeof Buffer.from == "function" ? Buffer.from([72, 62]) : new Buffer([72, 62])) instanceof Uint8Array ? "subarray" : "slice" : "subarray";
  } catch {
    return "slice";
  }
}();
function zt(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Tt(e) {
  return (
    /* Buffer.isBuffer(u8) ? u8.toString() :*/
    typeof TextDecoder < "u" ? new TextDecoder().decode(e) : Qe(bt(e))
  );
}
function Zr(e) {
  return typeof TextEncoder < "u" ? new TextEncoder().encode(e) : qr(Ct(e));
}
function qt(e) {
  for (var r = 0, t = 0; t < e.length; ++t) r += e[t].length;
  var a = new Uint8Array(r), n = 0;
  for (t = 0; t < e.length; ++t) {
    var i = e[t], s = i.length;
    if (s < 250)
      for (var f = 0; f < s; ++f) a[n++] = i[f];
    else
      a.set(i, n), n += s;
  }
  return a;
}
function cn(e) {
  return e -= e >> 1 & 1431655765, e = (e & 858993459) + (e >> 2 & 858993459), (e + (e >> 4) & 252645135) * 16843009 >>> 24;
}
function w4(e, r) {
  for (var t = (e[r + 15] & 127) << 7 | e[r + 14] >> 1, a = e[r + 14] & 1, n = r + 13; n >= r; --n) a = a * 256 + e[n];
  return a = e[r + 15] & 128 ? -a : a, t - 6176 < -308 ? a * Math.pow(10, t - 6176 + 300) * 1e-300 : a * Math.pow(10, t - 6176);
}
function k4(e, r, t) {
  var a = Math.floor(t == 0 ? 0 : (
    /*Math.log10*/
    Math.LOG10E * Math.log(Math.abs(t))
  )) + 6176 - 16, n = Math.abs(t), i = a - 6176 < -308 ? n * 1e300 / Math.pow(10, a - 6176 + 300) : n / Math.pow(10, a - 6176);
  e[r + 15] |= a >> 7, e[r + 14] |= (a & 127) << 1;
  for (var s = 0; i >= 1; ++s, i /= 256) e[r + s] = i & 255;
  e[r + 15] |= t >= 0 ? 0 : 128;
}
function kn(e, r) {
  var t = r.l, a = e[t] & 127;
  e: if (e[t++] >= 128 && (a |= (e[t] & 127) << 7, e[t++] < 128 || (a |= (e[t] & 127) << 14, e[t++] < 128) || (a |= (e[t] & 127) << 21, e[t++] < 128) || (a += (e[t] & 127) * Math.pow(2, 28), ++t, e[t++] < 128) || (a += (e[t] & 127) * Math.pow(2, 35), ++t, e[t++] < 128) || (a += (e[t] & 127) * Math.pow(2, 42), ++t, e[t++] < 128)))
    break e;
  return r.l = t, a;
}
function ye(e) {
  var r = new Uint8Array(7);
  r[0] = e & 127;
  var t = 1;
  e: if (e > 127) {
    if (r[t - 1] |= 128, r[t] = e >> 7 & 127, ++t, e <= 16383 || (r[t - 1] |= 128, r[t] = e >> 14 & 127, ++t, e <= 2097151) || (r[t - 1] |= 128, r[t] = e >> 21 & 127, ++t, e <= 268435455) || (r[t - 1] |= 128, r[t] = e / 256 >>> 21 & 127, ++t, e <= 34359738367) || (r[t - 1] |= 128, r[t] = e / 65536 >>> 21 & 127, ++t, e <= 4398046511103)) break e;
    r[t - 1] |= 128, r[t] = e / 16777216 >>> 21 & 127, ++t;
  }
  return r[pr](0, t);
}
function _l(e) {
  for (var r = { l: 0 }, t = []; r.l < e.length; ) t.push(kn(e, r));
  return t;
}
function wl(e) {
  return qt(e.map(function(r) {
    return ye(r);
  }));
}
function Pe(e) {
  var r = 0, t = e[r] & 127;
  return e[r++] < 128 || (t |= (e[r] & 127) << 7, e[r++] < 128) || (t |= (e[r] & 127) << 14, e[r++] < 128) || (t |= (e[r] & 127) << 21, e[r++] < 128) || (t |= (e[r] & 15) << 28), t;
}
function ie(e) {
  for (var r = [], t = { l: 0 }; t.l < e.length; ) {
    var a = t.l, n = kn(e, t), i = n & 7;
    n = n / 8 | 0;
    var s, f = t.l;
    switch (i) {
      case 0:
        {
          for (; e[f++] >= 128; ) ;
          s = e[pr](t.l, f), t.l = f;
        }
        break;
      case 1:
        s = e[pr](f, f + 8), t.l = f + 8;
        break;
      case 2:
        {
          var c = kn(e, t);
          s = e[pr](t.l, t.l + c), t.l += c;
        }
        break;
      case 5:
        s = e[pr](f, f + 4), t.l = f + 4;
        break;
      default:
        throw new Error("PB Type ".concat(i, " for Field ").concat(n, " at offset ").concat(a));
    }
    var o = { data: s, type: i };
    r[n] == null && (r[n] = []), r[n].push(o);
  }
  return r;
}
function Ae(e) {
  var r = [];
  return e.forEach(function(t, a) {
    a != 0 && t.forEach(function(n) {
      n.data && (r.push(ye(a * 8 + n.type)), n.type == 2 && r.push(ye(n.data.length)), r.push(n.data));
    });
  }), qt(r);
}
function Qt(e, r) {
  return (e == null ? void 0 : e.map(function(t) {
    return r(t.data);
  })) || [];
}
function Tn(e) {
  for (var r, t = [], a = { l: 0 }; a.l < e.length; ) {
    var n = kn(e, a), i = ie(e[pr](a.l, a.l + n));
    a.l += n;
    var s = {
      /* TODO: technically ID is optional */
      id: Pe(i[1][0].data),
      messages: []
    };
    i[2].forEach(function(f) {
      var c = ie(f.data), o = Pe(c[3][0].data);
      s.messages.push({
        meta: c,
        data: e[pr](a.l, a.l + o)
      }), a.l += o;
    }), (r = i[3]) != null && r[0] && (s.merge = Pe(i[3][0].data) >>> 0 > 0), t.push(s);
  }
  return t;
}
function Da(e) {
  var r = [];
  return e.forEach(function(t) {
    var a = [
      [],
      [{ data: ye(t.id), type: 0 }],
      []
    ];
    t.merge != null && (a[3] = [{ data: ye(+!!t.merge), type: 0 }]);
    var n = [];
    t.messages.forEach(function(s) {
      n.push(s.data), s.meta[3] = [{ type: 0, data: ye(s.data.length) }], a[2].push({ data: Ae(s.meta), type: 2 });
    });
    var i = Ae(a);
    r.push(ye(i.length)), r.push(i), n.forEach(function(s) {
      return r.push(s);
    });
  }), qt(r);
}
function T4(e, r) {
  if (e != 0) throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var t = { l: 0 }, a = kn(r, t), n = [], i = t.l; i < r.length; ) {
    var s = r[i] & 3;
    if (s == 0) {
      var f = r[i++] >> 2;
      if (f < 60) ++f;
      else {
        var c = f - 59;
        f = r[i], c > 1 && (f |= r[i + 1] << 8), c > 2 && (f |= r[i + 2] << 16), c > 3 && (f |= r[i + 3] << 24), f >>>= 0, f++, i += c;
      }
      n.push(r[pr](i, i + f)), i += f;
      continue;
    } else {
      var o = 0, l = 0;
      if (s == 1 ? (l = (r[i] >> 2 & 7) + 4, o = (r[i++] & 224) << 3, o |= r[i++]) : (l = (r[i++] >> 2) + 1, s == 2 ? (o = r[i] | r[i + 1] << 8, i += 2) : (o = (r[i] | r[i + 1] << 8 | r[i + 2] << 16 | r[i + 3] << 24) >>> 0, i += 4)), o == 0) throw new Error("Invalid offset 0");
      for (var d = n.length - 1, u = o; d >= 0 && u >= n[d].length; )
        u -= n[d].length, --d;
      if (d < 0)
        if (u == 0) u = n[d = 0].length;
        else throw new Error("Invalid offset beyond length");
      if (l < u) n.push(n[d][pr](n[d].length - u, n[d].length - u + l));
      else {
        for (u > 0 && (n.push(n[d][pr](n[d].length - u)), l -= u), ++d; l >= n[d].length; )
          n.push(n[d]), l -= n[d].length, ++d;
        l && n.push(n[d][pr](0, l));
      }
      n.length > 25 && (n = [qt(n)]);
    }
  }
  for (var h = 0, m = 0; m < n.length; ++m) h += n[m].length;
  if (h != a) throw new Error("Unexpected length: ".concat(h, " != ").concat(a));
  return n;
}
function En(e) {
  Array.isArray(e) && (e = new Uint8Array(e));
  for (var r = [], t = 0; t < e.length; ) {
    var a = e[t++], n = e[t] | e[t + 1] << 8 | e[t + 2] << 16;
    t += 3, r.push.apply(r, T4(a, e[pr](t, t + n))), t += n;
  }
  if (t !== e.length) throw new Error("data is not a valid framed stream!");
  return r.length == 1 ? r[0] : qt(r);
}
function Pa(e) {
  for (var r = [], t = 0; t < e.length; ) {
    var a = Math.min(e.length - t, 268435455), n = new Uint8Array(4);
    r.push(n);
    var i = ye(a), s = i.length;
    r.push(i), a <= 60 ? (s++, r.push(new Uint8Array([a - 1 << 2]))) : a <= 256 ? (s += 2, r.push(new Uint8Array([240, a - 1 & 255]))) : a <= 65536 ? (s += 3, r.push(new Uint8Array([244, a - 1 & 255, a - 1 >> 8 & 255]))) : a <= 16777216 ? (s += 4, r.push(new Uint8Array([248, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255]))) : a <= 4294967296 && (s += 5, r.push(new Uint8Array([252, a - 1 & 255, a - 1 >> 8 & 255, a - 1 >> 16 & 255, a - 1 >>> 24 & 255]))), r.push(e[pr](t, t + a)), s += a, n[0] = 0, n[1] = s & 255, n[2] = s >> 8 & 255, n[3] = s >> 16 & 255, t += a;
  }
  return qt(r);
}
var E4 = function() {
  return { sst: [], rsst: [], ofmt: [], nfmt: [], fmla: [], ferr: [], cmnt: [] };
};
function kl(e, r, t, a, n) {
  var i, s, f, c, o = r & 255, l = r >> 8, d = l >= 5 ? n : a;
  e: if (t & (l > 4 ? 8 : 4) && e.t == "n" && o == 7) {
    var u = (i = d[7]) != null && i[0] ? Pe(d[7][0].data) : -1;
    if (u == -1) break e;
    var h = (s = d[15]) != null && s[0] ? Pe(d[15][0].data) : -1, m = (f = d[16]) != null && f[0] ? Pe(d[16][0].data) : -1, g = (c = d[40]) != null && c[0] ? Pe(d[40][0].data) : -1, p = e.v, v = p;
    r: if (g) {
      if (p == 0) {
        h = m = 2;
        break r;
      }
      p >= 604800 ? h = 1 : p >= 86400 ? h = 2 : p >= 3600 ? h = 4 : p >= 60 ? h = 8 : p >= 1 ? h = 16 : h = 32, Math.floor(p) != p ? m = 32 : p % 60 ? m = 16 : p % 3600 ? m = 8 : p % 86400 ? m = 4 : p % 604800 && (m = 2), m < h && (m = h);
    }
    if (h == -1 || m == -1) break e;
    var w = [], _ = [];
    h == 1 && (v = p / 604800, m == 1 ? _.push('d"d"') : (v |= 0, p -= 604800 * v), w.push(v + (u == 2 ? " week" + (v == 1 ? "" : "s") : u == 1 ? "w" : ""))), h <= 2 && m >= 2 && (v = p / 86400, m > 2 && (v |= 0, p -= 86400 * v), _.push('d"d"'), w.push(v + (u == 2 ? " day" + (v == 1 ? "" : "s") : u == 1 ? "d" : ""))), h <= 4 && m >= 4 && (v = p / 3600, m > 4 && (v |= 0, p -= 3600 * v), _.push((h >= 4 ? "[h]" : "h") + '"h"'), w.push(v + (u == 2 ? " hour" + (v == 1 ? "" : "s") : u == 1 ? "h" : ""))), h <= 8 && m >= 8 && (v = p / 60, m > 8 && (v |= 0, p -= 60 * v), _.push((h >= 8 ? "[m]" : "m") + '"m"'), u == 0 ? w.push((h == 8 && m == 8 || v >= 10 ? "" : "0") + v) : w.push(v + (u == 2 ? " minute" + (v == 1 ? "" : "s") : u == 1 ? "m" : ""))), h <= 16 && m >= 16 && (v = p, m > 16 && (v |= 0, p -= v), _.push((h >= 16 ? "[s]" : "s") + '"s"'), u == 0 ? w.push((m == 16 && h == 16 || v >= 10 ? "" : "0") + v) : w.push(v + (u == 2 ? " second" + (v == 1 ? "" : "s") : u == 1 ? "s" : ""))), m >= 32 && (v = Math.round(1e3 * p), h < 32 && _.push('.000"ms"'), u == 0 ? w.push((v >= 100 ? "" : v >= 10 ? "0" : "00") + v) : w.push(v + (u == 2 ? " millisecond" + (v == 1 ? "" : "s") : u == 1 ? "ms" : ""))), e.w = w.join(u == 0 ? ":" : " "), e.z = _.join(u == 0 ? '":"' : " "), u == 0 && (e.w = e.w.replace(/:(\d\d\d)$/, ".$1"));
  }
}
function y4(e, r, t, a) {
  var n = zt(e), i = n.getUint32(4, !0), s = -1, f = -1, c = -1, o = NaN, l = 0, d = new Date(Date.UTC(2001, 0, 1)), u = t > 1 ? 12 : 8;
  i & 2 && (c = n.getUint32(u, !0), u += 4), u += cn(i & (t > 1 ? 3468 : 396)) * 4, i & 512 && (s = n.getUint32(u, !0), u += 4), u += cn(i & (t > 1 ? 12288 : 4096)) * 4, i & 16 && (f = n.getUint32(u, !0), u += 4), i & 32 && (o = n.getFloat64(u, !0), u += 8), i & 64 && (d.setTime(d.getTime() + (l = n.getFloat64(u, !0)) * 1e3), u += 8), t > 1 && (i = n.getUint32(8, !0) >>> 16, i & 255 && (c == -1 && (c = n.getUint32(u, !0)), u += 4));
  var h, m = e[t >= 4 ? 1 : 2];
  switch (m) {
    case 0:
      return;
    case 2:
      h = { t: "n", v: o };
      break;
    case 3:
      h = { t: "s", v: r.sst[f] };
      break;
    case 5:
      a != null && a.cellDates ? h = { t: "d", v: d } : h = { t: "n", v: l / 86400 + 35430, z: Fe[14] };
      break;
    case 6:
      h = { t: "b", v: o > 0 };
      break;
    case 7:
      h = { t: "n", v: o };
      break;
    case 8:
      h = { t: "e", v: 0 };
      break;
    case 9:
      if (s > -1) {
        var g = r.rsst[s];
        h = { t: "s", v: g.v }, g.l && (h.l = { Target: g.l });
      } else throw new Error("Unsupported cell type ".concat(e[pr](0, 4)));
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e[pr](0, 4)));
  }
  return c > -1 && kl(h, m | t << 8, i, r.ofmt[c], r.nfmt[c]), m == 7 && (h.v /= 86400), h;
}
function S4(e, r, t) {
  var a = zt(e);
  a.getUint32(4, !0);
  var n = a.getUint32(8, !0), i = 12, s = -1, f = -1, c = -1, o = NaN, l = NaN, d = 0, u = new Date(Date.UTC(2001, 0, 1));
  n & 1 && (o = w4(e, i), i += 16), n & 2 && (l = a.getFloat64(i, !0), i += 8), n & 4 && (u.setTime(u.getTime() + (d = a.getFloat64(i, !0)) * 1e3), i += 8), n & 8 && (f = a.getUint32(i, !0), i += 4), n & 16 && (s = a.getUint32(i, !0), i += 4), i += cn(n & 480) * 4, n & 512 && (a.getUint32(i, !0), i += 4), i += cn(n & 1024) * 4, n & 2048 && (a.getUint32(i, !0), i += 4);
  var h, m = e[1];
  switch (m) {
    case 0:
      h = { t: "z" };
      break;
    case 2:
      h = { t: "n", v: o };
      break;
    case 3:
      h = { t: "s", v: r.sst[f] };
      break;
    case 5:
      t != null && t.cellDates ? h = { t: "d", v: u } : h = { t: "n", v: d / 86400 + 35430, z: Fe[14] };
      break;
    case 6:
      h = { t: "b", v: l > 0 };
      break;
    case 7:
      h = { t: "n", v: l };
      break;
    case 8:
      h = { t: "e", v: 0 };
      break;
    case 9:
      if (s > -1) {
        var g = r.rsst[s];
        h = { t: "s", v: g.v }, g.l && (h.l = { Target: g.l });
      } else throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(n & 31, " : ").concat(e[pr](0, 4)));
      break;
    case 10:
      h = { t: "n", v: o };
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(n & 31, " : ").concat(e[pr](0, 4)));
  }
  if (i += cn(n & 4096) * 4, n & 516096 && (c == -1 && (c = a.getUint32(i, !0)), i += 4), n & 524288) {
    var p = a.getUint32(i, !0);
    i += 4, r.cmnt[p] && (h.c = I4(r.cmnt[p]));
  }
  return c > -1 && kl(h, m | 1280, n >> 13, r.ofmt[c], r.nfmt[c]), m == 7 && (h.v /= 86400), h;
}
function Gi(e, r) {
  var t = new Uint8Array(32), a = zt(t), n = 12, i = 0;
  switch (t[0] = 5, e.t) {
    case "n":
      if (e.z && ft(e.z)) {
        t[1] = 5, a.setFloat64(n, (Ht(e.v + 1462).getTime() - Date.UTC(2001, 0, 1)) / 1e3, !0), i |= 4, n += 8;
        break;
      } else
        t[1] = 2, k4(t, n, e.v), i |= 1, n += 16;
      break;
    case "b":
      t[1] = 6, a.setFloat64(n, e.v ? 1 : 0, !0), i |= 2, n += 8;
      break;
    case "s":
      {
        var s = e.v == null ? "" : String(e.v);
        if (e.l) {
          var f = r.rsst.findIndex(function(o) {
            var l;
            return o.v == s && o.l == ((l = e.l) == null ? void 0 : l.Target);
          });
          f == -1 && (r.rsst[f = r.rsst.length] = { v: s, l: e.l.Target }), t[1] = 9, a.setUint32(n, f, !0), i |= 16, n += 4;
        } else {
          var c = r.sst.indexOf(s);
          c == -1 && (r.sst[c = r.sst.length] = s), t[1] = 3, a.setUint32(n, c, !0), i |= 8, n += 4;
        }
      }
      break;
    case "d":
      t[1] = 5, a.setFloat64(n, (e.v.getTime() - Date.UTC(2001, 0, 1)) / 1e3, !0), i |= 4, n += 8;
      break;
    case "z":
      t[1] = 0;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return e.c && (r.cmnt.push(C4(e.c)), a.setUint32(n, r.cmnt.length - 1, !0), i |= 524288, n += 4), a.setUint32(8, i, !0), t[pr](0, n);
}
function zi(e, r) {
  var t = new Uint8Array(32), a = zt(t), n = 12, i = 0, s = "";
  switch (t[0] = 4, e.t) {
    case "n":
      break;
    case "b":
      break;
    case "s":
      if (s = e.v == null ? "" : String(e.v), e.l) {
        var f = r.rsst.findIndex(function(o) {
          var l;
          return o.v == s && o.l == ((l = e.l) == null ? void 0 : l.Target);
        });
        f == -1 && (r.rsst[f = r.rsst.length] = { v: s, l: e.l.Target }), t[1] = 9, a.setUint32(n, f, !0), i |= 512, n += 4;
      }
      break;
    case "d":
      break;
    case "e":
      break;
    case "z":
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  switch (e.c && (a.setUint32(n, r.cmnt.length - 1, !0), i |= 4096, n += 4), e.t) {
    case "n":
      t[1] = 2, a.setFloat64(n, e.v, !0), i |= 32, n += 8;
      break;
    case "b":
      t[1] = 6, a.setFloat64(n, e.v ? 1 : 0, !0), i |= 32, n += 8;
      break;
    case "s":
      if (s = e.v == null ? "" : String(e.v), !e.l) {
        var c = r.sst.indexOf(s);
        c == -1 && (r.sst[c = r.sst.length] = s), t[1] = 3, a.setUint32(n, c, !0), i |= 16, n += 4;
      }
      break;
    case "d":
      t[1] = 5, a.setFloat64(n, (e.v.getTime() - Date.UTC(2001, 0, 1)) / 1e3, !0), i |= 64, n += 8;
      break;
    case "z":
      t[1] = 0;
      break;
    default:
      throw "unsupported cell type " + e.t;
  }
  return a.setUint32(8, i, !0), t[pr](0, n);
}
function x4(e, r, t) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return y4(e, r, e[0], t);
    case 5:
      return S4(e, r, t);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function Ve(e) {
  var r = ie(e);
  return Pe(r[1][0].data);
}
function Ur(e) {
  return Ae([
    [],
    [{ type: 0, data: ye(e) }]
  ]);
}
function Br(e, r) {
  var t, a = (t = e.messages[0].meta[5]) != null && t[0] ? _l(e.messages[0].meta[5][0].data) : [], n = a.indexOf(r);
  n == -1 && (a.push(r), e.messages[0].meta[5] = [{ type: 2, data: wl(a) }]);
}
function Lt(e, r) {
  var t, a = (t = e.messages[0].meta[5]) != null && t[0] ? _l(e.messages[0].meta[5][0].data) : [];
  e.messages[0].meta[5] = [{ type: 2, data: wl(a.filter(function(n) {
    return n != r;
  })) }];
}
function aa(e, r) {
  var t = ie(r.data), a = Pe(t[1][0].data), n = t[3], i = [];
  return (n || []).forEach(function(s) {
    var f, c, o = ie(s.data);
    if (o[1]) {
      var l = Pe(o[1][0].data) >>> 0;
      switch (a) {
        case 1:
          i[l] = Tt(o[3][0].data);
          break;
        case 8:
          {
            var d = e[Ve(o[9][0].data)][0], u = ie(d.data), h = e[Ve(u[1][0].data)][0], m = Pe(h.meta[1][0].data);
            if (m != 2001) throw new Error("2000 unexpected reference to ".concat(m));
            var g = ie(h.data), p = { v: g[3].map(function(_) {
              return Tt(_.data);
            }).join("") };
            i[l] = p;
            e: if ((f = g == null ? void 0 : g[11]) != null && f[0]) {
              var v = (c = ie(g[11][0].data)) == null ? void 0 : c[1];
              if (!v) break e;
              v.forEach(function(_) {
                var T, b, B, y = ie(_.data);
                if ((T = y[2]) != null && T[0]) {
                  var O = e[Ve((b = y[2]) == null ? void 0 : b[0].data)][0], R = Pe(O.meta[1][0].data);
                  switch (R) {
                    case 2032:
                      var P = ie(O.data);
                      (B = P == null ? void 0 : P[2]) != null && B[0] && !p.l && (p.l = Tt(P[2][0].data));
                      break;
                    case 2039:
                      break;
                    default:
                      console.log("unrecognized ObjectAttribute type ".concat(R));
                  }
                }
              });
            }
          }
          break;
        case 2:
          i[l] = ie(o[6][0].data);
          break;
        case 3:
          i[l] = ie(o[5][0].data);
          break;
        case 10:
          {
            var w = e[Ve(o[10][0].data)][0];
            i[l] = Tl(e, w.data);
          }
          break;
        default:
          throw a;
      }
    }
  }), i;
}
function A4(e, r) {
  var t, a, n, i, s, f, c, o, l, d, u, h, m, g, p = ie(e), v = Pe(p[1][0].data) >>> 0, w = Pe(p[2][0].data) >>> 0, _ = ((a = (t = p[8]) == null ? void 0 : t[0]) == null ? void 0 : a.data) && Pe(p[8][0].data) > 0 || !1, T, b;
  if ((i = (n = p[7]) == null ? void 0 : n[0]) != null && i.data && r != 0)
    T = (f = (s = p[7]) == null ? void 0 : s[0]) == null ? void 0 : f.data, b = (o = (c = p[6]) == null ? void 0 : c[0]) == null ? void 0 : o.data;
  else if ((d = (l = p[4]) == null ? void 0 : l[0]) != null && d.data && r != 1)
    T = (h = (u = p[4]) == null ? void 0 : u[0]) == null ? void 0 : h.data, b = (g = (m = p[3]) == null ? void 0 : m[0]) == null ? void 0 : g.data;
  else throw "NUMBERS Tile missing ".concat(r, " cell storage");
  for (var B = _ ? 4 : 1, y = zt(T), O = [], R = 0; R < T.length / 2; ++R) {
    var P = y.getUint16(R * 2, !0);
    P < 65535 && O.push([R, P]);
  }
  if (O.length != w) throw "Expected ".concat(w, " cells, found ").concat(O.length);
  var L = [];
  for (R = 0; R < O.length - 1; ++R) L[O[R][0]] = b[pr](O[R][1] * B, O[R + 1][1] * B);
  return O.length >= 1 && (L[O[O.length - 1][0]] = b[pr](O[O.length - 1][1] * B)), { R: v, cells: L };
}
function F4(e, r) {
  var t, a = ie(r.data), n = -1;
  (t = a == null ? void 0 : a[7]) != null && t[0] && (Pe(a[7][0].data) >>> 0 ? n = 1 : n = 0);
  var i = Qt(a[5], function(s) {
    return A4(s, n);
  });
  return {
    nrows: Pe(a[4][0].data) >>> 0,
    data: i.reduce(function(s, f) {
      return s[f.R] || (s[f.R] = []), f.cells.forEach(function(c, o) {
        if (s[f.R][o]) throw new Error("Duplicate cell r=".concat(f.R, " c=").concat(o));
        s[f.R][o] = c;
      }), s;
    }, [])
  };
}
function Tl(e, r) {
  var t, a, n, i, s, f, c, o, l, d, u = { t: "", a: "" }, h = ie(r);
  if ((a = (t = h == null ? void 0 : h[1]) == null ? void 0 : t[0]) != null && a.data && (u.t = Tt((i = (n = h == null ? void 0 : h[1]) == null ? void 0 : n[0]) == null ? void 0 : i.data) || ""), (f = (s = h == null ? void 0 : h[3]) == null ? void 0 : s[0]) != null && f.data) {
    var m = e[Ve((o = (c = h == null ? void 0 : h[3]) == null ? void 0 : c[0]) == null ? void 0 : o.data)][0], g = ie(m.data);
    (d = (l = g[1]) == null ? void 0 : l[0]) != null && d.data && (u.a = Tt(g[1][0].data));
  }
  return h != null && h[4] && (u.replies = [], h[4].forEach(function(p) {
    var v = e[Ve(p.data)][0];
    u.replies.push(Tl(e, v.data));
  })), u;
}
function I4(e) {
  var r = [];
  return r.push({ t: e.t || "", a: e.a, T: e.replies && e.replies.length > 0 }), e.replies && e.replies.forEach(function(t) {
    r.push({ t: t.t || "", a: t.a, T: !0 });
  }), r;
}
function C4(e) {
  for (var r = { a: "", t: "", replies: [] }, t = 0; t < e.length; ++t)
    t == 0 ? (r.a = e[t].a, r.t = e[t].t) : r.replies.push({ a: e[t].a, t: e[t].t });
  return r;
}
function b4(e, r, t, a) {
  var n, i, s, f, c, o, l, d, u, h, m, g, p, v, w = ie(r.data), _ = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (_.e.r = (Pe(w[6][0].data) >>> 0) - 1, _.e.r < 0) throw new Error("Invalid row varint ".concat(w[6][0].data));
  if (_.e.c = (Pe(w[7][0].data) >>> 0) - 1, _.e.c < 0) throw new Error("Invalid col varint ".concat(w[7][0].data));
  t["!ref"] = Me(_);
  var T = t["!data"] != null, b = t, B = ie(w[4][0].data), y = E4();
  (n = B[4]) != null && n[0] && (y.sst = aa(e, e[Ve(B[4][0].data)][0])), (i = B[6]) != null && i[0] && (y.fmla = aa(e, e[Ve(B[6][0].data)][0])), (s = B[11]) != null && s[0] && (y.ofmt = aa(e, e[Ve(B[11][0].data)][0])), (f = B[12]) != null && f[0] && (y.ferr = aa(e, e[Ve(B[12][0].data)][0])), (c = B[17]) != null && c[0] && (y.rsst = aa(e, e[Ve(B[17][0].data)][0])), (o = B[19]) != null && o[0] && (y.cmnt = aa(e, e[Ve(B[19][0].data)][0])), (l = B[22]) != null && l[0] && (y.nfmt = aa(e, e[Ve(B[22][0].data)][0]));
  var O = ie(B[3][0].data), R = 0;
  if (!((d = B[9]) != null && d[0])) throw "NUMBERS file missing row tree";
  var P = ie(B[9][0].data)[1].map(function(de) {
    return ie(de.data);
  });
  if (P.forEach(function(de) {
    R = Pe(de[1][0].data);
    var ae = Pe(de[2][0].data), he = O[1][ae];
    if (!he) throw "NUMBERS missing tile " + ae;
    var q = ie(he.data), ge = e[Ve(q[2][0].data)][0], z = Pe(ge.meta[1][0].data);
    if (z != 6002) throw new Error("6001 unexpected reference to ".concat(z));
    var be = F4(e, ge);
    be.data.forEach(function(oe, fe) {
      oe.forEach(function(Q, _e) {
        var Ee = x4(Q, y, a);
        Ee && (T ? (b["!data"][R + fe] || (b["!data"][R + fe] = []), b["!data"][R + fe][_e] = Ee) : t[Ne(_e) + Xe(R + fe)] = Ee);
      });
    }), R += be.nrows;
  }), (u = B[13]) != null && u[0]) {
    var L = e[Ve(B[13][0].data)][0], U = Pe(L.meta[1][0].data);
    if (U != 6144) throw new Error("Expected merge type 6144, found ".concat(U));
    t["!merges"] = (h = ie(L.data)) == null ? void 0 : h[1].map(function(de) {
      var ae = ie(de.data), he = zt(ie(ae[1][0].data)[1][0].data), q = zt(ie(ae[2][0].data)[1][0].data);
      return {
        s: { r: he.getUint16(0, !0), c: he.getUint16(2, !0) },
        e: {
          r: he.getUint16(0, !0) + q.getUint16(0, !0) - 1,
          c: he.getUint16(2, !0) + q.getUint16(2, !0) - 1
        }
      };
    });
  }
  if (!((m = t["!merges"]) != null && m.length) && ((g = w[47]) != null && g[0])) {
    var K = ie(w[47][0].data);
    if ((p = K[2]) != null && p[0]) {
      var me = ie(K[2][0].data);
      (v = me[3]) != null && v[0] && (t["!merges"] = Qt(me[3], function(de) {
        var ae, he, q, ge, z, be = ie(de), oe = ie(be[2][0].data), fe = ie(oe[1][0].data);
        if ((ae = fe[1]) != null && ae[0]) {
          var Q = ie(fe[1][0].data), _e = Pe(Q[1][0].data);
          if (_e == 67) {
            var Ee = ie(Q[40][0].data);
            if (!(!((he = Ee[3]) != null && he[0]) || !((q = Ee[4]) != null && q[0]))) {
              var Se = ie(Ee[3][0].data), A = ie(Ee[4][0].data), M = Pe(Se[1][0].data), D = (ge = Se[2]) != null && ge[0] ? Pe(Se[2][0].data) : M, N = Pe(A[1][0].data), j = (z = A[2]) != null && z[0] ? Pe(A[2][0].data) : N;
              return { s: { r: N, c: M }, e: { r: j, c: D } };
            }
          }
        }
      }).filter(function(de) {
        return de != null;
      }));
    }
  }
}
function O4(e, r, t) {
  var a = ie(r.data), n = { "!ref": "A1" };
  t != null && t.dense && (n["!data"] = []);
  var i = e[Ve(a[2][0].data)], s = Pe(i[0].meta[1][0].data);
  if (s != 6001) throw new Error("6000 unexpected reference to ".concat(s));
  return b4(e, i[0], n, t), n;
}
function N4(e, r, t) {
  var a, n = ie(r.data), i = {
    name: (a = n[1]) != null && a[0] ? Tt(n[1][0].data) : "",
    sheets: []
  }, s = Qt(n[2], Ve);
  return s.forEach(function(f) {
    e[f].forEach(function(c) {
      var o = Pe(c.meta[1][0].data);
      o == 6e3 && i.sheets.push(O4(e, c, t));
    });
  }), i;
}
function R4(e, r, t) {
  var a, n = js();
  n.Workbook = { WBProps: { date1904: !0 } };
  var i = ie(r.data);
  if ((a = i[2]) != null && a[0]) throw new Error("Keynote presentations are not supported");
  var s = Qt(i[1], Ve);
  if (s.forEach(function(f) {
    e[f].forEach(function(c) {
      var o = Pe(c.meta[1][0].data);
      if (o == 2) {
        var l = N4(e, c, t);
        l.sheets.forEach(function(d, u) {
          Ln(n, d, u == 0 ? l.name : l.name + "_" + u, !0);
        });
      }
    });
  }), n.SheetNames.length == 0) throw new Error("Empty NUMBERS file");
  return n.bookType = "numbers", n;
}
function $i(e, r) {
  var t, a, n, i, s, f, c, o = {}, l = [];
  if (e.FullPaths.forEach(function(u) {
    if (u.match(/\.iwpv2/)) throw new Error("Unsupported password protection");
  }), e.FileIndex.forEach(function(u) {
    if (u.name.match(/\.iwa$/) && u.content[0] == 0) {
      var h;
      try {
        h = En(u.content);
      } catch (g) {
        return console.log("?? " + u.content.length + " " + (g.message || g));
      }
      var m;
      try {
        m = Tn(h);
      } catch (g) {
        return console.log("## " + (g.message || g));
      }
      m.forEach(function(g) {
        o[g.id] = g.messages, l.push(g.id);
      });
    }
  }), !l.length) throw new Error("File has no messages");
  if ((n = (a = (t = o == null ? void 0 : o[1]) == null ? void 0 : t[0].meta) == null ? void 0 : a[1]) != null && n[0].data && Pe(o[1][0].meta[1][0].data) == 1e4) throw new Error("Pages documents are not supported");
  var d = ((c = (f = (s = (i = o == null ? void 0 : o[1]) == null ? void 0 : i[0]) == null ? void 0 : s.meta) == null ? void 0 : f[1]) == null ? void 0 : c[0].data) && Pe(o[1][0].meta[1][0].data) == 1 && o[1][0];
  if (d || l.forEach(function(u) {
    o[u].forEach(function(h) {
      var m = Pe(h.meta[1][0].data) >>> 0;
      if (m == 1)
        if (!d) d = h;
        else throw new Error("Document has multiple roots");
    });
  }), !d) throw new Error("Cannot find Document root");
  return R4(o, d, r);
}
function D4(e, r, t) {
  var a, n, i, s = [
    [],
    [{ type: 0, data: ye(0) }],
    [{ type: 0, data: ye(0) }],
    [{ type: 2, data: new Uint8Array([]) }],
    [{ type: 2, data: new Uint8Array(Array.from({ length: 510 }, function() {
      return 255;
    })) }],
    [{ type: 0, data: ye(5) }],
    [{ type: 2, data: new Uint8Array([]) }],
    [{ type: 2, data: new Uint8Array(Array.from({ length: 510 }, function() {
      return 255;
    })) }],
    [{ type: 0, data: ye(1) }]
  ];
  if (!((a = s[6]) != null && a[0]) || !((n = s[7]) != null && n[0])) throw "Mutation only works on post-BNC storages!";
  var f = 0;
  if (s[7][0].data.length < 2 * e.length) {
    var c = new Uint8Array(2 * e.length);
    c.set(s[7][0].data), s[7][0].data = c;
  }
  if (s[4][0].data.length < 2 * e.length) {
    var o = new Uint8Array(2 * e.length);
    o.set(s[4][0].data), s[4][0].data = o;
  }
  for (var l = zt(s[7][0].data), d = 0, u = [], h = zt(s[4][0].data), m = 0, g = [], p = 4, v = 0; v < e.length; ++v) {
    if (e[v] == null || e[v].t == "z" && !((i = e[v].c) != null && i.length) || e[v].t == "e") {
      l.setUint16(v * 2, 65535, !0), h.setUint16(v * 2, 65535);
      continue;
    }
    l.setUint16(v * 2, d / p, !0), h.setUint16(v * 2, m / p, !0);
    var w, _;
    switch (e[v].t) {
      case "d":
        if (e[v].v instanceof Date) {
          w = Gi(e[v], r), _ = zi(e[v], r);
          break;
        }
        w = Gi(e[v], r), _ = zi(e[v], r);
        break;
      case "s":
      case "n":
      case "b":
      case "z":
        w = Gi(e[v], r), _ = zi(e[v], r);
        break;
      default:
        throw new Error("Unsupported value " + e[v]);
    }
    u.push(w), d += w.length, g.push(_), m += _.length, ++f;
  }
  for (s[2][0].data = ye(f), s[5][0].data = ye(5); v < s[7][0].data.length / 2; ++v)
    l.setUint16(v * 2, 65535, !0), h.setUint16(v * 2, 65535, !0);
  return s[6][0].data = qt(u), s[3][0].data = qt(g), s[8] = [{ type: 0, data: ye(1) }], s;
}
function ns(e, r) {
  return {
    meta: [
      [],
      [{ type: 0, data: ye(e) }]
      // [ { type: 2, data: new Uint8Array([1, 0, 5]) }]
    ],
    data: r
  };
}
function Ft(e, r) {
  r.last || (r.last = 927262);
  for (var t = r.last; t < 2e6; ++t) if (!r[t])
    return r[r.last = t] = e, t;
  throw new Error("Too many messages");
}
function P4(e) {
  var r = {}, t = [];
  return e.FileIndex.map(function(a, n) {
    return [a, e.FullPaths[n]];
  }).forEach(function(a) {
    var n = a[0], i = a[1];
    n.type == 2 && n.name.match(/\.iwa/) && n.content[0] == 0 && Tn(En(n.content)).forEach(function(s) {
      t.push(s.id), r[s.id] = { deps: [], location: i, type: Pe(s.messages[0].meta[1][0].data) };
    });
  }), e.FileIndex.forEach(function(a) {
    a.name.match(/\.iwa/) && a.content[0] == 0 && Tn(En(a.content)).forEach(function(n) {
      n.messages.forEach(function(i) {
        [5, 6].forEach(function(s) {
          i.meta[s] && i.meta[s].forEach(function(f) {
            r[n.id].deps.push(Pe(f.data));
          });
        });
      });
    });
  }), r;
}
function Zn(e, r, t) {
  return Ae([
    [],
    [{ type: 0, data: ye(1) }],
    [],
    [{ type: 5, data: new Uint8Array(Float32Array.from([e / 255]).buffer) }],
    [{ type: 5, data: new Uint8Array(Float32Array.from([r / 255]).buffer) }],
    [{ type: 5, data: new Uint8Array(Float32Array.from([t / 255]).buffer) }],
    [{ type: 5, data: new Uint8Array(Float32Array.from([1]).buffer) }],
    [],
    [],
    [],
    [],
    [],
    [{ type: 0, data: ye(1) }]
  ]);
}
function fc(e) {
  switch (e) {
    case 0:
      return Zn(99, 222, 171);
    case 1:
      return Zn(162, 197, 240);
    case 2:
      return Zn(255, 189, 189);
  }
  return Zn(Math.random() * 255, Math.random() * 255, Math.random() * 255);
}
function L4(e, r) {
  if (!r || !r.numbers) throw new Error("Must pass a `numbers` option -- check the README");
  var t = Ie.read(r.numbers, { type: "base64" }), a = P4(t), n = It(t, a, 1);
  if (n == null) throw "Could not find message ".concat(1, " in Numbers template");
  var i = Qt(ie(n.messages[0].data)[1], Ve);
  if (i.length > 1) throw new Error("Template NUMBERS file must have exactly one sheet");
  return e.SheetNames.forEach(function(s, f) {
    f >= 1 && (B4(t, a, f + 1), n = It(t, a, 1), i = Qt(ie(n.messages[0].data)[1], Ve)), U4(t, a, e.Sheets[s], s, f, i[f]);
  }), t;
}
function rr(e, r, t, a) {
  var n = Ie.find(e, r[t].location);
  if (!n) throw "Could not find ".concat(r[t].location, " in Numbers template");
  var i = Tn(En(n.content)), s = i.find(function(f) {
    return f.id == t;
  });
  a(s, i), n.content = Pa(Da(i)), n.size = n.content.length;
}
function It(e, r, t) {
  var a = Ie.find(e, r[t].location);
  if (!a) throw "Could not find ".concat(r[t].location, " in Numbers template");
  var n = Tn(En(a.content)), i = n.find(function(s) {
    return s.id == t;
  });
  return i;
}
function is(e, r, t) {
  e[3].push({ type: 2, data: Ae([
    [],
    [{ type: 0, data: ye(r) }],
    [{ type: 2, data: Zr(t.replace(/-[\s\S]*$/, "")) }],
    [{ type: 2, data: Zr(t) }],
    [{ type: 2, data: new Uint8Array([2, 0, 0]) }],
    [{ type: 2, data: new Uint8Array([2, 0, 0]) }],
    [],
    [],
    [],
    [],
    // skip fields 6-9
    [{ type: 0, data: ye(0) }],
    [],
    [{ type: 0, data: ye(
      0
      /* TODO: save_token */
    ) }]
  ]) }), e[1] = [{ type: 0, data: ye(Math.max(r + 1, Pe(e[1][0].data))) }];
}
function na(e, r, t, a, n, i) {
  i || (i = Ft({ deps: [], location: "", type: r }, n));
  var s = "".concat(a, "-").concat(i, ".iwa");
  n[i].location = "Root Entry" + s, Ie.utils.cfb_add(e, s, Pa(Da([{
    id: i,
    messages: [ns(r, Ae(t))]
  }])));
  var f = s.replace(/^[\/]/, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
  return rr(e, n, 2, function(c) {
    var o = ie(c.messages[0].data);
    is(o, i || 0, f), c.messages[0].data = Ae(o);
  }), i;
}
function rt(e, r, t, a) {
  var n = r[t].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, ""), i = e[3].findIndex(function(f) {
    var c, o, l = ie(f.data);
    return (c = l[3]) != null && c[0] ? Tt(l[3][0].data) == n : !!((o = l[2]) != null && o[0] && Tt(l[2][0].data) == n);
  }), s = ie(e[3][i].data);
  s[6] || (s[6] = []), (Array.isArray(a) ? a : [a]).forEach(function(f) {
    s[6].push({
      type: 2,
      data: Ae([
        [],
        [{ type: 0, data: ye(f) }]
      ])
    });
  }), e[3][i].data = Ae(s);
}
function M4(e, r, t, a) {
  var n = r[t].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, ""), i = e[3].findIndex(function(f) {
    var c, o, l = ie(f.data);
    return (c = l[3]) != null && c[0] ? Tt(l[3][0].data) == n : !!((o = l[2]) != null && o[0] && Tt(l[2][0].data) == n);
  }), s = ie(e[3][i].data);
  s[6] || (s[6] = []), s[6] = s[6].filter(function(f) {
    return Pe(ie(f.data)[1][0].data) != a;
  }), e[3][i].data = Ae(s);
}
function B4(e, r, t) {
  var a = -1, n = -1, i = {};
  rr(e, r, 1, function(c, o) {
    var l = ie(c.messages[0].data);
    a = Ve(ie(c.messages[0].data)[1][0].data), n = Ft({ deps: [1], location: r[a].location, type: 2 }, r), i[a] = n, Br(c, n), l[1].push({ type: 2, data: Ur(n) });
    var d = It(e, r, a);
    d.id = n, r[1].location == r[n].location ? o.push(d) : rr(e, r, n, function(u, h) {
      return h.push(d);
    }), c.messages[0].data = Ae(l);
  });
  var s = -1;
  rr(e, r, n, function(c, o) {
    for (var l = ie(c.messages[0].data), d = 3; d <= 69; ++d) delete l[d];
    var u = Qt(l[2], Ve);
    u.forEach(function(m) {
      return Lt(c, m);
    }), s = Ft({ deps: [n], location: r[u[0]].location, type: r[u[0]].type }, r), Br(c, s), i[u[0]] = s, l[2] = [{ type: 2, data: Ur(s) }];
    var h = It(e, r, u[0]);
    h.id = s, r[u[0]].location == r[n].location ? o.push(h) : (rr(e, r, 2, function(m) {
      var g = ie(m.messages[0].data);
      rt(g, r, n, s), m.messages[0].data = Ae(g);
    }), rr(e, r, s, function(m, g) {
      return g.push(h);
    })), c.messages[0].data = Ae(l);
  });
  var f = -1;
  rr(e, r, s, function(c, o) {
    for (var l = ie(c.messages[0].data), d = ie(l[1][0].data), u = 3; u <= 69; ++u) delete d[u];
    var h = Ve(d[2][0].data);
    d[2][0].data = Ur(i[h]), l[1][0].data = Ae(d);
    var m = Ve(l[2][0].data);
    Lt(c, m), f = Ft({ deps: [s], location: r[m].location, type: r[m].type }, r), Br(c, f), i[m] = f, l[2][0].data = Ur(f);
    var g = It(e, r, m);
    g.id = f, r[s].location == r[f].location ? o.push(g) : rr(e, r, f, function(p, v) {
      return v.push(g);
    }), c.messages[0].data = Ae(l);
  }), rr(e, r, f, function(c, o) {
    var l, d, u = ie(c.messages[0].data), h = Tt(u[1][0].data), m = h.replace(/-[A-Z0-9]*/, "-".concat(("0000" + t.toString(16)).slice(-4)));
    if (u[1][0].data = Zr(m), [12, 13, 29, 31, 32, 33, 39, 44, 47, 81, 82, 84].forEach(function(b) {
      return delete u[b];
    }), u[45]) {
      var g = ie(u[45][0].data), p = Ve(g[1][0].data);
      Lt(c, p), delete u[45];
    }
    if (u[70]) {
      var v = ie(u[70][0].data);
      (l = v[2]) == null || l.forEach(function(b) {
        var B = ie(b.data);
        [2, 3].map(function(y) {
          return B[y][0];
        }).forEach(function(y) {
          var O = ie(y.data);
          if (O[8]) {
            var R = Ve(O[8][0].data);
            Lt(c, R);
          }
        });
      }), delete u[70];
    }
    [
      46,
      // deleting field 46 (base_column_row_uids) forces Numbers to refresh cell table
      30,
      34,
      35,
      36,
      38,
      48,
      49,
      60,
      61,
      62,
      63,
      64,
      71,
      72,
      73,
      74,
      75,
      85,
      86,
      87,
      88,
      89
    ].forEach(function(b) {
      if (u[b]) {
        var B = Ve(u[b][0].data);
        delete u[b], Lt(c, B);
      }
    });
    var w = ie(u[4][0].data);
    {
      [2, 4, 5, 6, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22].forEach(function(b) {
        var B;
        if ((B = w[b]) != null && B[0]) {
          var y = Ve(w[b][0].data), O = Ft({ deps: [f], location: r[y].location, type: r[y].type }, r);
          Lt(c, y), Br(c, O), i[y] = O;
          var R = It(e, r, y);
          if (R.id = O, r[y].location == r[f].location) o.push(R);
          else {
            r[O].location = r[y].location.replace(y.toString(), O.toString()), r[O].location == r[y].location && (r[O].location = r[O].location.replace(/\.iwa/, "-".concat(O, ".iwa"))), Ie.utils.cfb_add(e, r[O].location, Pa(Da([R])));
            var P = r[O].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
            rr(e, r, 2, function(L) {
              var U = ie(L.messages[0].data);
              is(U, O, P), rt(U, r, f, O), L.messages[0].data = Ae(U);
            });
          }
          w[b][0].data = Ur(O);
        }
      });
      var _ = ie(w[1][0].data);
      (d = _[2]) == null || d.forEach(function(b) {
        var B = Ve(b.data), y = Ft({ deps: [f], location: r[B].location, type: r[B].type }, r);
        Lt(c, B), Br(c, y), i[B] = y;
        var O = It(e, r, B);
        if (O.id = y, r[B].location == r[f].location)
          o.push(O);
        else {
          r[y].location = r[B].location.replace(B.toString(), y.toString()), r[y].location == r[B].location && (r[y].location = r[y].location.replace(/\.iwa/, "-".concat(y, ".iwa"))), Ie.utils.cfb_add(e, r[y].location, Pa(Da([O])));
          var R = r[y].location.replace(/^Root Entry\//, "").replace(/^Index\//, "").replace(/\.iwa$/, "");
          rr(e, r, 2, function(P) {
            var L = ie(P.messages[0].data);
            is(L, y, R), rt(L, r, f, y), P.messages[0].data = Ae(L);
          });
        }
        b.data = Ur(y);
      }), w[1][0].data = Ae(_);
      var T = ie(w[3][0].data);
      T[1].forEach(function(b) {
        var B = ie(b.data), y = Ve(B[2][0].data), O = i[y];
        if (!i[y]) {
          O = Ft({ deps: [f], location: "", type: r[y].type }, r), r[O].location = "Root Entry/Index/Tables/Tile-".concat(O, ".iwa"), i[y] = O;
          var R = It(e, r, y);
          R.id = O, Lt(c, y), Br(c, O), Ie.utils.cfb_add(e, "/Index/Tables/Tile-".concat(O, ".iwa"), Pa(Da([R]))), rr(e, r, 2, function(P) {
            var L = ie(P.messages[0].data);
            L[3].push({ type: 2, data: Ae([
              [],
              [{ type: 0, data: ye(O) }],
              [{ type: 2, data: Zr("Tables/Tile") }],
              [{ type: 2, data: Zr("Tables/Tile-".concat(O)) }],
              [{ type: 2, data: new Uint8Array([2, 0, 0]) }],
              [{ type: 2, data: new Uint8Array([2, 0, 0]) }],
              [],
              [],
              [],
              [],
              // skip fields 6-9
              [{ type: 0, data: ye(0) }],
              [],
              [{ type: 0, data: ye(
                0
                /* TODO: save_token */
              ) }]
            ]) }), L[1] = [{ type: 0, data: ye(Math.max(O + 1, Pe(L[1][0].data))) }], rt(L, r, f, O), P.messages[0].data = Ae(L);
          });
        }
        B[2][0].data = Ur(O), b.data = Ae(B);
      }), w[3][0].data = Ae(T);
    }
    u[4][0].data = Ae(w), c.messages[0].data = Ae(u);
  });
}
function U4(e, r, t, a, n, i) {
  var s = [];
  rr(e, r, i, function(o) {
    var l = ie(o.messages[0].data);
    l[1] = [{ type: 2, data: Zr(a) }], s = Qt(l[2], Ve), o.messages[0].data = Ae(l);
  });
  var f = It(e, r, s[0]), c = Ve(ie(f.messages[0].data)[2][0].data);
  rr(e, r, c, function(o, l) {
    return W4(e, r, t, o, l, c);
  });
}
function W4(e, r, t, a, n, i) {
  if (!t["!ref"]) throw new Error("Cannot export empty sheet to NUMBERS");
  var s = Er(t["!ref"]);
  s.s.r = s.s.c = 0;
  var f = !1;
  s.e.c > 999 && (f = !0, s.e.c = 999), s.e.r > 999999 && (f = !0, s.e.r = 999999), f && console.error("Truncating to ".concat(Me(s)));
  var c = [];
  if (t["!data"]) c = t["!data"];
  else {
    for (var o = [], l = 0; l <= s.e.c; ++l) o[l] = Ne(l);
    for (var d = 0; d <= s.e.r; ++d) {
      c[d] = [];
      var u = "" + (d + 1);
      for (l = 0; l <= s.e.c; ++l) {
        var h = t[o[l] + u];
        h && (c[d][l] = h);
      }
    }
  }
  var m = {
    cmnt: [{ a: "~54ee77S~", t: "... the people who are crazy enough to think they can change the world, are the ones who do." }],
    rsst: [{ v: "~54ee77S~", l: "https://sheetjs.com/" }],
    sst: ["~Sh33tJ5~"]
  }, g = ie(a.messages[0].data);
  {
    g[6][0].data = ye(s.e.r + 1), g[7][0].data = ye(s.e.c + 1), delete g[46];
    var p = ie(g[4][0].data);
    {
      var v = Ve(ie(p[1][0].data)[2][0].data);
      rr(e, r, v, function(oe, fe) {
        var Q, _e = ie(oe.messages[0].data);
        if ((Q = _e == null ? void 0 : _e[2]) != null && Q[0]) for (var Ee = 0; Ee < c.length; ++Ee) {
          var Se = ie(_e[2][0].data);
          Se[1][0].data = ye(Ee), Se[4][0].data = ye(c[Ee].length), _e[2][Ee] = { type: _e[2][0].type, data: Ae(Se) };
        }
        oe.messages[0].data = Ae(_e);
      });
      var w = Ve(p[2][0].data);
      rr(e, r, w, function(oe, fe) {
        for (var Q = ie(oe.messages[0].data), _e = 0; _e <= s.e.c; ++_e) {
          var Ee = ie(Q[2][0].data);
          Ee[1][0].data = ye(_e), Ee[4][0].data = ye(s.e.r + 1), Q[2][_e] = { type: Q[2][0].type, data: Ae(Ee) };
        }
        oe.messages[0].data = Ae(Q);
      });
      var _ = ie(p[9][0].data);
      _[1] = [];
      var T = ie(p[3][0].data);
      {
        var b = 256;
        T[2] = [{ type: 0, data: ye(b) }];
        var B = Ve(ie(T[1][0].data)[2][0].data), y = function() {
          var oe = It(e, r, 2), fe = ie(oe.messages[0].data), Q = fe[3].filter(function(_e) {
            return Pe(ie(_e.data)[1][0].data) == B;
          });
          return Q != null && Q.length ? Pe(ie(Q[0].data)[12][0].data) : 0;
        }();
        Ie.utils.cfb_del(e, r[B].location), rr(e, r, 2, function(oe) {
          var fe = ie(oe.messages[0].data);
          fe[3] = fe[3].filter(function(Q) {
            return Pe(ie(Q.data)[1][0].data) != B;
          }), M4(fe, r, i, B), oe.messages[0].data = Ae(fe);
        }), Lt(a, B), T[1] = [];
        for (var O = Math.ceil((s.e.r + 1) / b), R = 0; R < O; ++R) {
          var P = Ft({
            deps: [],
            // TODO: probably should update this
            location: "",
            type: 6002
          }, r);
          r[P].location = "Root Entry/Index/Tables/Tile-".concat(P, ".iwa");
          for (var L = [
            [],
            [{ type: 0, data: ye(
              0
              /*range.e.c + 1*/
            ) }],
            [{ type: 0, data: ye(Math.min(s.e.r + 1, (R + 1) * b)) }],
            [{ type: 0, data: ye(
              0
              /*cnt*/
            ) }],
            [{ type: 0, data: ye(Math.min((R + 1) * b, s.e.r + 1) - R * b) }],
            [],
            [{ type: 0, data: ye(5) }],
            [{ type: 0, data: ye(1) }],
            [{ type: 0, data: ye(1) }]
          ], U = R * b; U <= Math.min(s.e.r, (R + 1) * b - 1); ++U) {
            var K = D4(c[U], m);
            K[1][0].data = ye(U - R * b), L[5].push({ data: Ae(K), type: 2 });
          }
          T[1].push({ type: 2, data: Ae([
            [],
            [{ type: 0, data: ye(R) }],
            [{ type: 2, data: Ur(P) }]
          ]) });
          var me = {
            id: P,
            messages: [ns(6002, Ae(L))]
          }, de = Pa(Da([me]));
          Ie.utils.cfb_add(e, "/Index/Tables/Tile-".concat(P, ".iwa"), de), rr(e, r, 2, function(oe) {
            var fe = ie(oe.messages[0].data);
            fe[3].push({ type: 2, data: Ae([
              [],
              [{ type: 0, data: ye(P) }],
              [{ type: 2, data: Zr("Tables/Tile") }],
              [{ type: 2, data: Zr("Tables/Tile-".concat(P)) }],
              [{ type: 2, data: new Uint8Array([2, 0, 0]) }],
              [{ type: 2, data: new Uint8Array([2, 0, 0]) }],
              [],
              [],
              [],
              [],
              // skip fields 6-9
              [{ type: 0, data: ye(0) }],
              [],
              // skip field 11
              [{ type: 0, data: ye(y) }]
            ]) }), fe[1] = [{ type: 0, data: ye(Math.max(P + 1, Pe(fe[1][0].data))) }], rt(fe, r, i, P), oe.messages[0].data = Ae(fe);
          }), Br(a, P), _[1].push({ type: 2, data: Ae([
            [],
            [{ type: 0, data: ye(R * b) }],
            [{ type: 0, data: ye(R) }]
          ]) });
        }
      }
      if (p[3][0].data = Ae(T), p[9][0].data = Ae(_), p[10] = [{ type: 2, data: new Uint8Array([]) }], t["!merges"]) {
        var ae = Ft({
          type: 6144,
          deps: [i],
          location: r[i].location
        }, r);
        n.push({
          id: ae,
          messages: [ns(6144, Ae([
            [],
            t["!merges"].map(function(oe) {
              return { type: 2, data: Ae([
                [],
                [{ type: 2, data: Ae([
                  [],
                  [{ type: 5, data: new Uint8Array(new Uint16Array([oe.s.r, oe.s.c]).buffer) }]
                ]) }],
                [{ type: 2, data: Ae([
                  [],
                  [{ type: 5, data: new Uint8Array(new Uint16Array([oe.e.r - oe.s.r + 1, oe.e.c - oe.s.c + 1]).buffer) }]
                ]) }]
              ]) };
            })
          ]))]
        }), p[13] = [{ type: 2, data: Ur(ae) }], rr(e, r, 2, function(oe) {
          var fe = ie(oe.messages[0].data);
          rt(fe, r, i, ae), oe.messages[0].data = Ae(fe);
        }), Br(a, ae);
      } else delete p[13];
      var he = Ve(p[4][0].data);
      rr(e, r, he, function(oe) {
        var fe = ie(oe.messages[0].data);
        fe[3] = [], m.sst.forEach(function(Q, _e) {
          _e != 0 && fe[3].push({ type: 2, data: Ae([
            [],
            [{ type: 0, data: ye(_e) }],
            [{ type: 0, data: ye(1) }],
            [{ type: 2, data: Zr(Q) }]
          ]) });
        }), oe.messages[0].data = Ae(fe);
      });
      var q = Ve(p[17][0].data);
      if (rr(e, r, q, function(oe) {
        var fe = ie(oe.messages[0].data);
        fe[3] = [];
        var Q = [
          904980,
          // hardcoded stylesheet
          903835,
          // paragraph style
          903815,
          // list style
          903845
          // character style
        ];
        m.rsst.forEach(function(_e, Ee) {
          if (Ee != 0) {
            var Se = [
              [],
              [{ type: 0, data: new Uint8Array([5]) }],
              // .TSWP.StorageArchive.KindType CELL = 5
              [],
              [{ type: 2, data: Zr(_e.v) }]
            ];
            Se[10] = [{ type: 0, data: new Uint8Array([1]) }], Se[19] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 18, 2, 101, 110]) }], Se[5] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 155, 149, 55]) }], Se[2] = [{ type: 2, data: new Uint8Array([8, 148, 158, 55]) }], Se[6] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }], Se[7] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 135, 149, 55]) }], Se[8] = [{ type: 2, data: new Uint8Array([10, 8, 8, 0, 18, 4, 8, 165, 149, 55]) }], Se[14] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }], Se[24] = [{ type: 2, data: new Uint8Array([10, 6, 8, 0, 16, 0, 24, 0]) }];
            var A = Ft({ deps: [], location: "", type: 2001 }, r), M = [];
            if (_e.l) {
              var D = na(e, 2032, [
                [],
                [],
                [{ type: 2, data: Zr(_e.l) }]
              ], "/Index/Tables/DataList", r);
              Se[11] = [];
              var N = [[], []];
              N[1] || (N[1] = []), N[1].push({ type: 2, data: Ae([
                [],
                [{ type: 0, data: ye(0) }],
                [{ type: 2, data: Ur(D) }]
              ]) }), Se[11][0] = { type: 2, data: Ae(N) }, M.push(D);
            }
            na(e, 2001, Se, "/Index/Tables/DataList", r, A), rr(e, r, A, function(x) {
              Q.forEach(function(ne) {
                return Br(x, ne);
              }), M.forEach(function(ne) {
                return Br(x, ne);
              });
            });
            var j = na(e, 6218, [
              [],
              [{ type: 2, data: Ur(A) }],
              [],
              [{ type: 2, data: new Uint8Array([13, 255, 255, 255, 0, 18, 10, 16, 255, 255, 1, 24, 255, 255, 255, 255, 7]) }]
            ], "/Index/Tables/DataList", r);
            rr(e, r, j, function(x) {
              return Br(x, A);
            }), fe[3].push({ type: 2, data: Ae([
              [],
              [{ type: 0, data: ye(Ee) }],
              [{ type: 0, data: ye(1) }],
              [],
              [],
              [],
              [],
              [],
              [],
              // skip fields 3-8
              [{ type: 2, data: Ur(j) }]
            ]) }), Br(oe, j), rr(e, r, 2, function(x) {
              var ne = ie(x.messages[0].data);
              rt(ne, r, q, j), rt(ne, r, j, A), rt(ne, r, A, M), rt(ne, r, A, Q), x.messages[0].data = Ae(ne);
            });
          }
        }), oe.messages[0].data = Ae(fe);
      }), m.cmnt.length > 1) {
        var ge = Ve(p[19][0].data), z = {}, be = 0;
        rr(e, r, ge, function(oe) {
          var fe = ie(oe.messages[0].data);
          fe[3] = [], m.cmnt.forEach(function(Q, _e) {
            if (_e != 0) {
              var Ee = [];
              Q.replies && Q.replies.forEach(function(M) {
                z[M.a || ""] || (z[M.a || ""] = na(e, 212, [
                  [],
                  [{ type: 2, data: Zr(M.a || "") }],
                  [{ type: 2, data: fc(++be) }],
                  [],
                  [{ type: 0, data: ye(0) }]
                ], "/Index/Tables/DataList", r));
                var D = z[M.a || ""], N = na(e, 3056, [
                  [],
                  [{ type: 2, data: Zr(M.t || "") }],
                  [{ type: 2, data: Ae([
                    [],
                    [{ type: 1, data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65]) }]
                  ]) }],
                  [{ type: 2, data: Ur(D) }]
                ], "/Index/Tables/DataList", r);
                rr(e, r, N, function(j) {
                  return Br(j, D);
                }), Ee.push(N), rr(e, r, 2, function(j) {
                  var x = ie(j.messages[0].data);
                  rt(x, r, N, D), j.messages[0].data = Ae(x);
                });
              }), z[Q.a || ""] || (z[Q.a || ""] = na(e, 212, [
                [],
                [{ type: 2, data: Zr(Q.a || "") }],
                [{ type: 2, data: fc(++be) }],
                [],
                [{ type: 0, data: ye(0) }]
              ], "/Index/Tables/DataList", r));
              var Se = z[Q.a || ""], A = na(e, 3056, [
                [],
                [{ type: 2, data: Zr(Q.t || "") }],
                [{ type: 2, data: Ae([
                  [],
                  [{ type: 1, data: new Uint8Array([0, 0, 0, 128, 116, 109, 182, 65]) }]
                ]) }],
                [{ type: 2, data: Ur(Se) }],
                Ee.map(function(M) {
                  return { type: 2, data: Ur(M) };
                }),
                [{ type: 2, data: Ae([
                  [],
                  [{ type: 0, data: ye(_e) }],
                  [{ type: 0, data: ye(0) }]
                ]) }]
              ], "/Index/Tables/DataList", r);
              rr(e, r, A, function(M) {
                Br(M, Se), Ee.forEach(function(D) {
                  return Br(M, D);
                });
              }), fe[3].push({ type: 2, data: Ae([
                [],
                [{ type: 0, data: ye(_e) }],
                [{ type: 0, data: ye(1) }],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                // skip fields 3-9
                [{ type: 2, data: Ur(A) }]
              ]) }), Br(oe, A), rr(e, r, 2, function(M) {
                var D = ie(M.messages[0].data);
                rt(D, r, ge, A), rt(D, r, A, Se), Ee.length && rt(D, r, A, Ee), M.messages[0].data = Ae(D);
              });
            }
          }), fe[2][0].data = ye(m.cmnt.length + 1), oe.messages[0].data = Ae(fe);
        });
      }
    }
    g[4][0].data = Ae(p);
  }
  a.messages[0].data = Ae(g);
}
function El(e) {
  return function(t) {
    for (var a = 0; a != e.length; ++a) {
      var n = e[a];
      t[n[0]] === void 0 && (t[n[0]] = n[1]), n[2] === "n" && (t[n[0]] = Number(t[n[0]]));
    }
  };
}
function Xs(e) {
  El([
    ["cellNF", !1],
    /* emit cell number format string as .z */
    ["cellHTML", !0],
    /* emit html string as .h */
    ["cellFormula", !0],
    /* emit formulae as .f */
    ["cellStyles", !1],
    /* emits style/theme as .s */
    ["cellText", !0],
    /* emit formatted text as .w */
    ["cellDates", !1],
    /* emit date cells with type `d` */
    ["sheetStubs", !1],
    /* emit empty cells */
    ["sheetRows", 0, "n"],
    /* read n rows (0 = read all rows) */
    ["bookDeps", !1],
    /* parse calculation chains */
    ["bookSheets", !1],
    /* only try to get sheet names (no Sheets) */
    ["bookProps", !1],
    /* only try to get properties (no Sheets) */
    ["bookFiles", !1],
    /* include raw file structure (keys, files, cfb) */
    ["bookVBA", !1],
    /* include vba raw data (vbaraw) */
    ["password", ""],
    /* password */
    ["WTF", !1]
    /* WTF mode (throws errors) */
  ])(e);
}
function Vs(e) {
  El([
    ["cellDates", !1],
    /* write date cells with type `d` */
    ["bookSST", !1],
    /* Generate Shared String Table */
    ["bookType", "xlsx"],
    /* Type of workbook (xlsx/m/b) */
    ["compression", !1],
    /* Use file compression */
    ["WTF", !1]
    /* WTF mode (throws errors) */
  ])(e);
}
function H4(e) {
  return We.WS.indexOf(e) > -1 ? "sheet" : e == We.CS ? "chart" : e == We.DS ? "dialog" : e == We.MS ? "macro" : e && e.length ? e : "sheet";
}
function X4(e, r) {
  if (!e) return 0;
  try {
    e = r.map(function(a) {
      return a.id || (a.id = a.strRelID), [a.name, e["!id"][a.id].Target, H4(e["!id"][a.id].Type)];
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function V4(e, r, t, a, n, i, s, f) {
  if (!(!e || !e["!legdrawel"])) {
    var c = ba(e["!legdrawel"].Target, a), o = Qr(t, c, !0);
    o && Jv(Qe(o), e, f || []);
  }
}
function G4(e, r, t, a, n, i, s, f, c, o, l, d) {
  try {
    if (zr(a)) throw new Error("Bad sheet name: " + a);
    var u = vi(a);
    ar(i, u, rn(Qr(e, t, !0), r));
    var h = kr(e, r), m;
    switch (f) {
      case "sheet":
        m = w_(h, r, n, c, i[u], o, l, d);
        break;
      case "chart":
        if (m = k_(h, r, n, c, i[u], o, l, d), !m || !m["!drawel"]) break;
        var g = ba(m["!drawel"].Target, r), p = mn(g), v = Zv(Qr(e, g, !0), rn(Qr(e, p, !0), g)), w = ba(v, g), _ = mn(w);
        m = Vg(Qr(e, w, !0), w, c, rn(Qr(e, _, !0), w), o, m);
        break;
      case "macro":
        m = T_(h, r, n, c, i[u], o, l, d);
        break;
      case "dialog":
        m = E_(h, r, n, c, i[u], o, l, d);
        break;
      default:
        throw new Error("Unrecognized sheet type " + f);
    }
    if (!ar(s, u, m)) return !1;
    var T = [], b = [];
    return i && i[u] && sr(i[u]).forEach(function(B) {
      var y = "";
      if (i[u][B].Type == We.CMNT) {
        if (y = ba(i[u][B].Target, r), T = x_(kr(e, y, !0), y, c), !T || !T.length) return;
        Gf(m, T, !1);
      }
      i[u][B].Type == We.TCMNT && (y = ba(i[u][B].Target, r), b = b.concat(r2(kr(e, y, !0), c)));
    }), b && b.length && Gf(m, b, !0, c.people || []), V4(m, f, e, r, n, c, o, T), !0;
  } catch (B) {
    if (c.WTF) throw B;
  }
  return !1;
}
function ct(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function Gs(e, r) {
  if (ka(), r = r || {}, Xs(r), lt(e, "META-INF/manifest.xml") || lt(e, "objectdata.xml")) return ac(e, r);
  if (lt(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u") throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof $i < "u") {
      if (e.FileIndex) return $i(e, r);
      var t = Ie.utils.cfb_new();
      return uf(e).forEach(function(ge) {
        De(t, ge, j1(e, ge));
      }), $i(t, r);
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!lt(e, "[Content_Types].xml")) {
    if (lt(e, "index.xml.gz")) throw new Error("Unsupported NUMBERS 08 file");
    if (lt(e, "index.xml")) throw new Error("Unsupported NUMBERS 09 file");
    var a = Ie.find(e, "Index.zip");
    if (a)
      return r = je(r), delete r.type, typeof a.content == "string" && (r.type = "binary"), typeof Bun < "u" && Buffer.isBuffer(a.content) ? Yt(new Uint8Array(a.content), r) : Yt(a.content, r);
    throw new Error("Unsupported ZIP file");
  }
  var n = uf(e), i = Hu(Qr(e, "[Content_Types].xml")), s = !1, f, c;
  if (i.workbooks.length === 0 && (c = "xl/workbook.xml", kr(e, c, !0) && i.workbooks.push(c)), i.workbooks.length === 0) {
    if (c = "xl/workbook.bin", !kr(e, c, !0)) throw new Error("Could not find workbook");
    i.workbooks.push(c), s = !0;
  }
  i.workbooks[0].slice(-3) == "bin" && (s = !0);
  var o = vr(), l = vr();
  if (!r.bookSheets && !r.bookProps) {
    if (an = [], i.sst) try {
      an = S_(kr(e, ct(i.sst)), i.sst, r);
    } catch (ge) {
      if (r.WTF) throw ge;
    }
    r.cellStyles && i.themes.length && (o = Co(Qr(e, i.themes[0].replace(/^\//, ""), !0) || "", r)), i.style && (l = y_(kr(e, ct(i.style)), i.style, o, r));
  }
  i.links.map(function(ge) {
    try {
      var z = rn(Qr(e, mn(ct(ge))), ge);
      return F_(kr(e, ct(ge)), z, ge, r);
    } catch {
    }
  });
  var d = __(kr(e, ct(i.workbooks[0])), i.workbooks[0], r), u = {}, h = "";
  i.coreprops.length && (h = kr(e, ct(i.coreprops[0]), !0), h && (u = Zc(h)), i.extprops.length !== 0 && (h = kr(e, ct(i.extprops[0]), !0), h && Ku(h, u, r)));
  var m = vr();
  (!r.bookSheets || r.bookProps) && i.custprops.length !== 0 && (h = Qr(e, ct(i.custprops[0]), !0), h && (m = Yu(h, r)));
  var g = {};
  if (r.bookSheets || r.bookProps) {
    if (d.Sheets ? f = d.Sheets.map(function(z) {
      return z.name;
    }) : u.Worksheets && u.SheetNames.length > 0 && (f = u.SheetNames), f) {
      for (var p = [], v = 0; v != f.length; ++v) zr(f[v]) || p.push(f[v]);
      f = p;
    }
    if (r.bookProps && (g.Props = u, g.Custprops = m), r.bookSheets && typeof f < "u" && (g.SheetNames = f), r.bookSheets ? g.SheetNames : r.bookProps) return g;
  }
  f = vr();
  var w = vr();
  r.bookDeps && i.calcchain && (w = A_(kr(e, ct(i.calcchain)), i.calcchain));
  var _ = 0, T = vr(), b, B;
  {
    var y = d.Sheets;
    u.Worksheets = y.length, u.SheetNames = [];
    for (var O = 0; O != y.length; ++O)
      u.SheetNames[O] = y[O].name;
  }
  var R = s ? "bin" : "xml", P = i.workbooks[0].lastIndexOf("/"), L = (i.workbooks[0].slice(0, P + 1) + "_rels/" + i.workbooks[0].slice(P + 1) + ".rels").replace(/^\//, "");
  lt(e, L) || (L = "xl/_rels/workbook." + R + ".rels");
  var U = rn(Qr(e, L, !0), L.replace(/_rels.*/, "s5s"));
  (i.metadata || []).length >= 1 && (r.xlmeta = I_(kr(e, ct(i.metadata[0])), i.metadata[0], r)), (i.people || []).length >= 1 && (r.people = t2(kr(e, ct(i.people[0])), r)), U && (U = X4(U, d.Sheets));
  var K = kr(e, "xl/worksheets/sheet.xml", !0) ? 1 : 0, me = [];
  e: for (_ = 0; _ != u.Worksheets; ++_) {
    var de = u.SheetNames[_];
    if (zr(de)) {
      if (r.WTF) throw new Error("Bad sheet name: " + de);
      continue e;
    }
    me.push(de);
    var ae = "sheet";
    if (U && U[_] ? (b = "xl/" + U[_][1].replace(/[\/]?xl\//, ""), lt(e, b) || (b = U[_][1]), lt(e, b) || (b = L.replace(/_rels\/[\S\s]*$/, "") + U[_][1]), ae = U[_][2]) : (b = "xl/worksheets/sheet" + (_ + 1 - K) + "." + R, b = b.replace(/sheet0\./, "sheet.")), B = b.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), r && r.sheets != null) switch (typeof r.sheets) {
      case "number":
        if (_ != r.sheets) continue e;
        break;
      case "string":
        if (de.toLowerCase() != r.sheets.toLowerCase()) continue e;
        break;
      default:
        if (Array.isArray && Array.isArray(r.sheets)) {
          for (var he = !1, q = 0; q != r.sheets.length; ++q)
            typeof r.sheets[q] == "number" && r.sheets[q] == _ && (he = 1), typeof r.sheets[q] == "string" && r.sheets[q].toLowerCase() == de.toLowerCase() && (he = 1);
          if (!he) continue e;
        }
    }
    G4(e, b, B, de, _, T, f, ae, r, d, o, l);
  }
  return u.SheetNames = me, u.Worksheets = me.length, g = {
    Directory: i,
    Workbook: d,
    Props: u,
    Custprops: m,
    Deps: w,
    Sheets: f,
    SheetNames: me,
    Strings: an,
    Styles: l,
    Themes: o,
    SSF: je(Fe)
  }, r && r.bookFiles && (e.files ? (g.keys = n, g.files = e.files) : (g.keys = [], g.files = vr(), e.FullPaths.forEach(function(ge, z) {
    ge = ge.replace(/^Root Entry[\/]/, ""), g.keys.push(ge), ar(g.files, ge, e.FileIndex[z]);
  }))), r && r.bookVBA && (i.vba.length > 0 ? g.vbaraw = kr(e, ct(i.vba[0]), !0) : i.defaults && i.defaults.bin === c2 && (g.vbaraw = kr(e, "xl/vbaProject.bin", !0))), g.bookType = s ? "xlsb" : "xlsx", g;
}
function z4(e, r) {
  var t = r || {}, a = "Workbook", n = Ie.find(e, a);
  try {
    if (a = "/!DataSpaces/Version", n = Ie.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    if (kd(n.content), a = "/!DataSpaces/DataSpaceMap", n = Ie.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    var i = Ed(n.content);
    if (i.length !== 1 || i[0].comps.length !== 1 || i[0].comps[0].t !== 0 || i[0].name !== "StrongEncryptionDataSpace" || i[0].comps[0].v !== "EncryptedPackage")
      throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", n = Ie.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    var s = yd(n.content);
    if (s.length != 1 || s[0] != "StrongEncryptionTransform")
      throw new Error("ECMA-376 Encrypted file bad " + a);
    if (a = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", n = Ie.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
    xd(n.content);
  } catch {
  }
  if (a = "/EncryptionInfo", n = Ie.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
  var f = Ad(n.content);
  if (a = "/EncryptedPackage", n = Ie.find(e, a), !n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
  if (f[0] == 4 && typeof decrypt_agile < "u") return decrypt_agile(f[1], n.content, t.password || "", t);
  if (f[0] == 2 && typeof decrypt_std76 < "u") return decrypt_std76(f[1], n.content, t.password || "", t);
  throw new Error("File is password-protected");
}
function $4(e, r) {
  e && !e.SSF && (e.SSF = je(Fe)), e && e.SSF && (ka(), Ha(e.SSF), r.revssf = An(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.rels = {}, r.wbrels = {}, r.Strings = /*::((*/
  [], r.Strings.Count = 0, r.Strings.Unique = 0, nn ? r.revStrings = /* @__PURE__ */ new Map() : (r.revStrings = {}, r.revStrings.foo = [], delete r.revStrings.foo);
  var t = "bin", a = !0, n = Os();
  Vs(r = r || {});
  var i = ps(), s = "", f = 0;
  if (r.cellXfs = [], Nt(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", De(i, s, Jc(e.Props, r)), n.coreprops.push(s), Ze(r.rels, 2, s, We.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames)) if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
  else {
    for (var c = [], o = 0; o < e.SheetNames.length; ++o)
      (e.Workbook.Sheets[o] || {}).Hidden != 2 && c.push(e.SheetNames[o]);
    e.Props.SheetNames = c;
  }
  e.Props.Worksheets = e.Props.SheetNames.length, De(i, s, eo(e.Props)), n.extprops.push(s), Ze(r.rels, 3, s, We.EXT_PROPS), e.Custprops !== e.Props && sr(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", De(i, s, ro(e.Custprops)), n.custprops.push(s), Ze(r.rels, 4, s, We.CUST_PROPS));
  var l = ["SheetJ5"];
  for (r.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var d = { "!id": {} }, u = e.Sheets[e.SheetNames[f - 1]], h = (u || {})["!type"] || "sheet";
    switch (h) {
      case "chart":
      default:
        s = "xl/worksheets/sheet" + f + "." + t, De(i, s, Hg(f - 1, r, e, d)), n.sheets.push(s), Ze(r.wbrels, -1, "worksheets/sheet" + f + "." + t, We.WS[0]);
    }
    if (u) {
      var m = u["!comments"], g = !1, p = "";
      if (m && m.length > 0) {
        var v = !1;
        m.forEach(function(_) {
          _[1].forEach(function(T) {
            T.T == !0 && (v = !0);
          });
        }), v && (p = "xl/threadedComments/threadedComment" + f + ".xml", De(i, p, Oo(m, l, r)), n.threadedcomments.push(p), Ze(d, -1, "../threadedComments/threadedComment" + f + ".xml", We.TCMNT)), p = "xl/comments" + f + "." + t, De(i, p, f2(m)), n.comments.push(p), Ze(d, -1, "../comments" + f + "." + t, We.CMNT), g = !0;
      }
      u["!legacy"] && g && De(i, "xl/drawings/vmlDrawing" + f + ".vml", bo(f, u["!comments"])), delete u["!comments"], delete u["!legacy"];
    }
    d["!id"].rId1 && De(i, mn(s), Na(d));
  }
  r.Strings != null && r.Strings.length > 0 && (s = "xl/sharedStrings." + t, De(i, s, wd(r.Strings)), n.strs.push(s), Ze(r.wbrels, -1, "sharedStrings." + t, We.SST)), s = "xl/workbook." + t, De(i, s, g_(e)), n.workbooks.push(s), Ze(r.rels, 1, s, We.WB), s = "xl/theme/theme1.xml";
  var w = Ms(e.Themes, r);
  return De(i, s, w), n.themes.push(s), Ze(r.wbrels, -1, "theme/theme1.xml", We.THEME), s = "xl/styles." + t, De(i, s, yv(e, r)), n.styles.push(s), Ze(r.wbrels, -1, "styles." + t, We.STY), e.vbaraw && a && (s = "xl/vbaProject.bin", De(i, s, e.vbaraw), n.vba.push(s), Ze(r.wbrels, -1, "vbaProject.bin", We.VBA)), s = "xl/metadata." + t, De(i, s, Vv()), n.metadata.push(s), Ze(r.wbrels, -1, "metadata." + t, We.XLMETA), l.length > 1 && (s = "xl/persons/person.xml", De(i, s, No(l)), n.people.push(s), Ze(r.wbrels, -1, "persons/person.xml", We.PEOPLE)), De(i, "[Content_Types].xml", jc(n, r)), De(i, "_rels/.rels", Na(r.rels)), De(i, "xl/_rels/workbook." + t + ".rels", Na(r.wbrels)), delete r.revssf, delete r.ssf, i;
}
function yl(e, r) {
  e && !e.SSF && (e.SSF = je(Fe)), e && e.SSF && (ka(), Ha(e.SSF), r.revssf = An(e.SSF), r.revssf[e.SSF[65535]] = 0, r.ssf = e.SSF), r.rels = {}, r.wbrels = {}, r.Strings = /*::((*/
  [], r.Strings.Count = 0, r.Strings.Unique = 0, nn ? r.revStrings = /* @__PURE__ */ new Map() : (r.revStrings = {}, r.revStrings.foo = [], delete r.revStrings.foo);
  var t = "xml", a = u2.indexOf(r.bookType) > -1, n = Os();
  Vs(r = r || {});
  var i = ps(), s = "", f = 0;
  if (r.cellXfs = [], Nt(r.cellXfs, {}, { revssf: { General: 0 } }), e.Props || (e.Props = {}), s = "docProps/core.xml", De(i, s, Jc(e.Props, r)), n.coreprops.push(s), Ze(r.rels, 2, s, We.CORE_PROPS), s = "docProps/app.xml", !(e.Props && e.Props.SheetNames)) if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;
  else {
    for (var c = [], o = 0; o < e.SheetNames.length; ++o)
      (e.Workbook.Sheets[o] || {}).Hidden != 2 && c.push(e.SheetNames[o]);
    e.Props.SheetNames = c;
  }
  e.Props.Worksheets = e.Props.SheetNames.length, De(i, s, eo(e.Props)), n.extprops.push(s), Ze(r.rels, 3, s, We.EXT_PROPS), e.Custprops !== e.Props && sr(e.Custprops || {}).length > 0 && (s = "docProps/custom.xml", De(i, s, ro(e.Custprops)), n.custprops.push(s), Ze(r.rels, 4, s, We.CUST_PROPS));
  var l = ["SheetJ5"];
  for (r.tcid = 0, f = 1; f <= e.SheetNames.length; ++f) {
    var d = { "!id": {} }, u = e.Sheets[e.SheetNames[f - 1]], h = (u || {})["!type"] || "sheet";
    switch (h) {
      case "chart":
      default:
        s = "xl/worksheets/sheet" + f + "." + t, De(i, s, Ip(f - 1, r, e, d)), n.sheets.push(s), Ze(r.wbrels, -1, "worksheets/sheet" + f + "." + t, We.WS[0]);
    }
    if (u) {
      var m = u["!comments"], g = !1, p = "";
      if (m && m.length > 0) {
        var v = !1;
        m.forEach(function(w) {
          w[1].forEach(function(_) {
            _.T == !0 && (v = !0);
          });
        }), v && (p = "xl/threadedComments/threadedComment" + f + ".xml", De(i, p, Oo(m, l, r)), n.threadedcomments.push(p), Ze(d, -1, "../threadedComments/threadedComment" + f + ".xml", We.TCMNT)), p = "xl/comments" + f + "." + t, De(i, p, e2(m)), n.comments.push(p), Ze(d, -1, "../comments" + f + "." + t, We.CMNT), g = !0;
      }
      u["!legacy"] && g && De(i, "xl/drawings/vmlDrawing" + f + ".vml", bo(f, u["!comments"])), delete u["!comments"], delete u["!legacy"];
    }
    d["!id"].rId1 && De(i, mn(s), Na(d));
  }
  return r.Strings != null && r.Strings.length > 0 && (s = "xl/sharedStrings." + t, De(i, s, vd(r.Strings, r)), n.strs.push(s), Ze(r.wbrels, -1, "sharedStrings." + t, We.SST)), s = "xl/workbook." + t, De(i, s, r_(e)), n.workbooks.push(s), Ze(r.rels, 1, s, We.WB), s = "xl/theme/theme1.xml", De(i, s, Ms(e.Themes, r)), n.themes.push(s), Ze(r.wbrels, -1, "theme/theme1.xml", We.THEME), s = "xl/styles." + t, De(i, s, rv(e, r)), n.styles.push(s), Ze(r.wbrels, -1, "styles." + t, We.STY), e.vbaraw && a && (s = "xl/vbaProject.bin", De(i, s, e.vbaraw), n.vba.push(s), Ze(r.wbrels, -1, "vbaProject.bin", We.VBA)), s = "xl/metadata." + t, De(i, s, zv()), n.metadata.push(s), Ze(r.wbrels, -1, "metadata." + t, We.XLMETA), l.length > 1 && (s = "xl/persons/person.xml", De(i, s, No(l)), n.people.push(s), Ze(r.wbrels, -1, "persons/person.xml", We.PEOPLE)), De(i, "[Content_Types].xml", jc(n, r)), De(i, "_rels/.rels", Na(r.rels)), De(i, "xl/_rels/workbook." + t + ".rels", Na(r.wbrels)), delete r.revssf, delete r.ssf, i;
}
function zs(e, r) {
  var t = "";
  switch ((r || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      t = st(e.slice(0, 12));
      break;
    case "binary":
      t = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + (r && r.type || "undefined"));
  }
  return [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3), t.charCodeAt(4), t.charCodeAt(5), t.charCodeAt(6), t.charCodeAt(7)];
}
function K4(e, r) {
  return Ie.find(e, "EncryptedPackage") ? z4(e, r) : xi(e, r);
}
function j4(e, r) {
  var t, a = e, n = r || {};
  return n.type || (n.type = Ue && Buffer.isBuffer(e) ? "buffer" : "base64"), t = Fc(a, n), Gs(t, n);
}
function Sl(e, r) {
  var t = 0;
  e: for (; t < e.length; ) switch (e.charCodeAt(t)) {
    case 10:
    case 13:
    case 32:
      ++t;
      break;
    case 60:
      return ts(e.slice(t), r);
    default:
      break e;
  }
  return Ba.to_workbook(e, r);
}
function Y4(e, r) {
  var t = "", a = zs(e, r);
  switch (r.type) {
    case "base64":
      t = st(e);
      break;
    case "binary":
      t = e;
      break;
    case "buffer":
      t = e.toString("binary");
      break;
    case "array":
      t = va(e);
      break;
    default:
      throw new Error("Unrecognized type " + r.type);
  }
  return a[0] == 239 && a[1] == 187 && a[2] == 191 && (t = Qe(t)), r.type = "binary", Sl(t, r);
}
function Z4(e, r) {
  var t = e;
  return r.type == "base64" && (t = st(t)), typeof ArrayBuffer < "u" && e instanceof ArrayBuffer && (t = new Uint8Array(e)), t = typeof Be < "u" ? Be.utils.decode(1200, t.slice(2), "str") : Ue && Buffer.isBuffer(e) ? e.slice(2).toString("utf16le") : typeof Uint8Array < "u" && t instanceof Uint8Array ? typeof TextDecoder < "u" ? new TextDecoder("utf-16le").decode(t.slice(2)) : Jl(t.slice(2)) : oc(t.slice(2)), r.type = "binary", Sl(t, r);
}
function J4(e) {
  return e.match(/[^\x00-\x7F]/) ? Ct(e) : e;
}
function Ki(e, r, t, a) {
  return a ? (t.type = "string", Ba.to_workbook(e, t)) : Ba.to_workbook(r, t);
}
function Yt(e, r) {
  di();
  var t = r || {};
  if (t.codepage && typeof Be > "u" && console.error("Codepage tables are not loaded.  Non-ASCII characters may not give expected results"), typeof ArrayBuffer < "u" && e instanceof ArrayBuffer) return Yt(new Uint8Array(e), (t = je(t), t.type = "array", t));
  if (typeof Int8Array < "u" && e instanceof Int8Array) return Yt(new Uint8Array(e.buffer, e.byteOffset, e.length), t);
  typeof Uint8Array < "u" && e instanceof Uint8Array && !t.type && (t.type = typeof Deno < "u" ? "buffer" : "array");
  var a = e, n = [0, 0, 0, 0], i = !1;
  if (t.cellStyles && (t.cellNF = !0, t.sheetStubs = !0), Ra = {}, t.dateNF && (Ra.dateNF = t.dateNF), t.type || (t.type = Ue && Buffer.isBuffer(e) ? "buffer" : "base64"), t.type == "file" && (t.type = Ue ? "buffer" : "binary", a = I1(e), typeof Uint8Array < "u" && !Ue && (t.type = "array")), t.type == "string" && (i = !0, t.type = "binary", t.codepage = 65001, a = J4(e)), t.type == "array" && typeof Uint8Array < "u" && e instanceof Uint8Array && typeof ArrayBuffer < "u") {
    var s = new ArrayBuffer(3), f = new Uint8Array(s);
    if (f.foo = "bar", !f.foo)
      return t = je(t), t.type = "array", Yt(cs(a), t);
  }
  switch ((n = zs(a, t))[0]) {
    case 208:
      if (n[1] === 207 && n[2] === 17 && n[3] === 224 && n[4] === 161 && n[5] === 177 && n[6] === 26 && n[7] === 225) return K4(Ie.read(a, t), t);
      break;
    case 9:
      if (n[1] <= 8) return xi(a, t);
      break;
    case 60:
      return ts(a, t);
    case 73:
      if (n[1] === 73 && n[2] === 42 && n[3] === 0) throw new Error("TIFF Image File is not a spreadsheet");
      if (n[1] === 68) return nd(a, t);
      break;
    case 84:
      if (n[1] === 65 && n[2] === 66 && n[3] === 76) return ko.to_workbook(a, t);
      break;
    case 80:
      return n[1] === 75 && n[2] < 9 && n[3] < 9 ? j4(a, t) : Ki(e, a, t, i);
    case 239:
      return n[3] === 60 ? ts(a, t) : Ki(e, a, t, i);
    case 255:
      if (n[1] === 254)
        return Z4(a, t);
      if (n[1] === 0 && n[2] === 2 && n[3] === 0) return oa.to_workbook(a, t);
      break;
    case 0:
      if (n[1] === 0 && (n[2] >= 2 && n[3] === 0 || n[2] === 0 && (n[3] === 8 || n[3] === 9)))
        return oa.to_workbook(a, t);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return rs.to_workbook(a, t);
    case 123:
      if (n[1] === 92 && n[2] === 114 && n[3] === 116) return Bd(a, t);
      break;
    case 10:
    case 13:
    case 32:
      return Y4(a, t);
    case 137:
      if (n[1] === 80 && n[2] === 78 && n[3] === 71) throw new Error("PNG Image File is not a spreadsheet");
      break;
    case 8:
      if (n[1] === 231) throw new Error("Unsupported Multiplan 1.x file!");
      break;
    case 12:
      if (n[1] === 236) throw new Error("Unsupported Multiplan 2.x file!");
      if (n[1] === 237) throw new Error("Unsupported Multiplan 3.x file!");
      break;
  }
  return ad.indexOf(n[0]) > -1 && n[2] <= 12 && n[3] <= 31 ? rs.to_workbook(a, t) : Ki(e, a, t, i);
}
function li(e, r) {
  var t = r || {};
  return t.type = "file", Yt(e, t);
}
function xl(e, r) {
  switch (r.type) {
    case "base64":
    case "binary":
      break;
    case "buffer":
    case "array":
      r.type = "";
      break;
    case "file":
      return xn(r.file, Ie.write(e, { type: Ue ? "buffer" : "" }));
    case "string":
      throw new Error("'string' output type invalid for '" + r.bookType + "' files");
    default:
      throw new Error("Unrecognized type " + r.type);
  }
  return Ie.write(e, r);
}
function q4(e, r) {
  switch (r.bookType) {
    case "ods":
      return gl(e, r);
    case "numbers":
      return L4(e, r);
    case "xlsb":
      return $4(e, r);
    default:
      return yl(e, r);
  }
}
function Q4(e, r) {
  var t = je(r || {}), a = q4(e, t);
  return Al(a, t);
}
function ew(e, r) {
  var t = je(r || {}), a = yl(e, t);
  return Al(a, t);
}
function Al(e, r) {
  var t = {}, a = Ue ? "nodebuffer" : typeof Uint8Array < "u" ? "array" : "string";
  if (r.compression && (t.compression = "DEFLATE"), r.password) t.type = a;
  else switch (r.type) {
    case "base64":
      t.type = "base64";
      break;
    case "binary":
      t.type = "string";
      break;
    case "string":
      throw new Error("'string' output type invalid for '" + r.bookType + "' files");
    case "buffer":
    case "file":
      t.type = a;
      break;
    default:
      throw new Error("Unrecognized type " + r.type);
  }
  var n = e.FullPaths ? Ie.write(e, { fileType: "zip", type: (
    /*::(*/
    { nodebuffer: "buffer", string: "binary" }[t.type] || t.type
  ), compression: !!r.compression }) : e.generate(t);
  if (typeof Deno < "u" && typeof n == "string") {
    if (r.type == "binary" || r.type == "base64") return n;
    n = new Uint8Array(Sn(n));
  }
  return r.password && typeof encrypt_agile < "u" ? xl(encrypt_agile(n, r.password), r) : r.type === "file" ? xn(r.file, n) : r.type == "string" ? Qe(
    /*::(*/
    n
    /*:: :any)*/
  ) : n;
}
function rw(e, r) {
  var t = r || {}, a = K_(e, t);
  return xl(a, t);
}
function xt(e, r, t) {
  t || (t = "");
  var a = t + e;
  switch (r.type) {
    case "base64":
      return Qn(Ct(a));
    case "binary":
      return Ct(a);
    case "string":
      return e;
    case "file":
      return xn(r.file, a, "utf8");
    case "buffer":
      return Ue ? Rt(a, "utf8") : typeof TextEncoder < "u" ? new TextEncoder().encode(a) : xt(a, { type: "binary" }).split("").map(function(n) {
        return n.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + r.type);
}
function tw(e, r) {
  switch (r.type) {
    case "base64":
      return Ql(e);
    case "binary":
      return e;
    case "string":
      return e;
    case "file":
      return xn(r.file, e, "binary");
    case "buffer":
      return Ue ? Rt(e, "binary") : e.split("").map(function(t) {
        return t.charCodeAt(0);
      });
  }
  throw new Error("Unrecognized type " + r.type);
}
function Jn(e, r) {
  switch (r.type) {
    case "string":
    case "base64":
    case "binary":
      for (var t = "", a = 0; a < e.length; ++a) t += String.fromCharCode(e[a]);
      return r.type == "base64" ? Qn(t) : r.type == "string" ? Qe(t) : t;
    case "file":
      return xn(r.file, e);
    case "buffer":
      return e;
    default:
      throw new Error("Unrecognized type " + r.type);
  }
}
function Ai(e, r) {
  di(), jo(e);
  var t = je(r || {});
  if (t.cellStyles && (t.cellNF = !0, t.sheetStubs = !0), t.type == "array") {
    t.type = "binary";
    var a = Ai(e, t);
    return t.type = "array", Sn(a);
  }
  return ew(e, t);
}
function Pn(e, r) {
  di(), jo(e);
  var t = je(r || {});
  if (t.cellStyles && (t.cellNF = !0, t.sheetStubs = !0), t.type == "array") {
    t.type = "binary";
    var a = Pn(e, t);
    return t.type = "array", Sn(a);
  }
  var n = 0;
  if (t.sheet && (typeof t.sheet == "number" ? n = t.sheet : n = e.SheetNames.indexOf(t.sheet), !e.SheetNames[n]))
    throw new Error("Sheet not found: " + t.sheet + " : " + typeof t.sheet);
  switch (t.bookType || "xlsb") {
    case "xml":
    case "xlml":
      return xt(W_(e, t), t);
    case "slk":
    case "sylk":
      return xt(wo.from_sheet(e.Sheets[e.SheetNames[n]], t, e), t);
    case "htm":
    case "html":
      return xt(hl(e.Sheets[e.SheetNames[n]], t), t);
    case "txt":
      return tw(Ol(e.Sheets[e.SheetNames[n]], t), t);
    case "csv":
      return xt(Ks(e.Sheets[e.SheetNames[n]], t), t, "\uFEFF");
    case "dif":
      return xt(ko.from_sheet(e.Sheets[e.SheetNames[n]]), t);
    case "dbf":
      return Jn(rs.from_sheet(e.Sheets[e.SheetNames[n]], t), t);
    case "prn":
      return xt(Ba.from_sheet(e.Sheets[e.SheetNames[n]]), t);
    case "rtf":
      return xt(Ud(e.Sheets[e.SheetNames[n]]), t);
    case "eth":
      return xt(To.from_sheet(e.Sheets[e.SheetNames[n]]), t);
    case "fods":
      return xt(gl(e, t), t);
    case "wk1":
      return Jn(oa.sheet_to_wk1(e.Sheets[e.SheetNames[n]], t), t);
    case "wk3":
      return Jn(oa.book_to_wk3(e, t), t);
    case "biff2":
      t.biff || (t.biff = 2);
    case "biff3":
      t.biff || (t.biff = 3);
    case "biff4":
      return t.biff || (t.biff = 4), Jn(fl(e, t), t);
    case "biff5":
      t.biff || (t.biff = 5);
    case "biff8":
    case "xla":
    case "xls":
      return t.biff || (t.biff = 8), rw(e, t);
    case "xlsx":
    case "xlsm":
    case "xlam":
    case "xlsb":
    case "numbers":
    case "ods":
      return Q4(e, t);
    default:
      throw new Error("Unrecognized bookType |" + t.bookType + "|");
  }
}
function $s(e) {
  if (!e.bookType) {
    var r = {
      xls: "biff8",
      htm: "html",
      slk: "sylk",
      socialcalc: "eth",
      Sh33tJS: "WTF"
    }, t = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
    t.match(/^\.[a-z]+$/) && (e.bookType = t.slice(1)), e.bookType = r[e.bookType] || e.bookType;
  }
}
function ui(e, r, t) {
  var a = t || {};
  return a.type = "file", a.file = r, $s(a), Pn(e, a);
}
function Fl(e, r, t) {
  var a = t || {};
  return a.type = "file", a.file = r, $s(a), Ai(e, a);
}
function Il(e, r, t, a) {
  var n = t || {};
  n.type = "file", n.file = e, $s(n), n.type = "buffer";
  var i = a;
  return i instanceof Function || (i = t), Bt.writeFile(e, Pn(r, n), i);
}
function Cl(e, r, t, a, n, i, s) {
  var f = Xe(t), c = s.defval, o = s.raw || !Object.prototype.hasOwnProperty.call(s, "raw"), l = !0, d = e["!data"] != null, u = n === 1 ? [] : vr();
  if (n !== 1)
    if (Object.defineProperty) try {
      Object.defineProperty(u, "__rowNum__", { value: t, enumerable: !1 });
    } catch {
      u.__rowNum__ = t;
    }
    else u.__rowNum__ = t;
  if (!d || e["!data"][t]) for (var h = r.s.c; h <= r.e.c; ++h) {
    var m = d ? (e["!data"][t] || [])[h] : e[a[h] + f];
    if (m == null || m.t === void 0) {
      if (c === void 0) continue;
      i[h] != null && ar(u, i[h], c);
      continue;
    }
    var g = m.v;
    switch (m.t) {
      case "z":
        if (g == null) break;
        continue;
      case "e":
        g = g == 0 ? null : void 0;
        break;
      case "s":
      case "b":
      case "n":
        if (!m.z || !ft(m.z) || (g = Ht(g), typeof g == "number")) break;
      case "d":
        s && (s.UTC || s.raw === !1) || (g = ma(new Date(g)));
        break;
      default:
        throw new Error("unrecognized type " + m.t);
    }
    if (i[h] != null && !zr(i[h])) {
      if (g == null)
        if (m.t == "e" && g === null) ar(u, i[h], null);
        else if (c !== void 0) ar(u, i[h], c);
        else if (o && g === null) ar(u, i[h], null);
        else continue;
      else
        ar(u, i[h], (m.t === "n" && typeof s.rawNumbers == "boolean" ? s.rawNumbers : o) ? g : Ot(m, g, s));
      g != null && (l = !1);
    }
  }
  return { row: u, isempty: l };
}
function ss(e, r) {
  if (e == null || e["!ref"] == null) return [];
  var t = { t: "n", v: 0 }, a = 0, n = 1, i = [], s = 0, f = "", c = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, o = r || {}, l = o.range != null ? o.range : e["!ref"];
  switch (o.header === 1 ? a = 1 : o.header === "A" ? a = 2 : Array.isArray(o.header) ? a = 3 : o.header == null && (a = 0), typeof l) {
    case "string":
      c = Ge(l);
      break;
    case "number":
      c = Ge(e["!ref"]), c.s.r = l;
      break;
    default:
      c = l;
  }
  a > 0 && (n = 0);
  var d = Xe(c.s.r), u = [], h = [], m = 0, g = 0, p = e["!data"] != null, v = c.s.r, w = 0, _ = vr();
  p && !e["!data"][v] && (e["!data"][v] = []);
  var T = o.skipHidden && e["!cols"] || [], b = o.skipHidden && e["!rows"] || [];
  for (w = c.s.c; w <= c.e.c; ++w)
    if (!(T[w] || {}).hidden)
      switch (u[w] = Ne(w), t = p ? e["!data"][v][w] : e[u[w] + d], a) {
        case 1:
          i[w] = w - c.s.c;
          break;
        case 2:
          i[w] = u[w];
          break;
        case 3:
          i[w] = o.header[w - c.s.c];
          break;
        default:
          if (t == null && (t = { w: "__EMPTY", t: "s" }), f = s = Ot(t, null, o), zr(s)) {
            i[w] = null;
            break;
          }
          if (g = _[s] || 0, !g) _[s] = 1;
          else {
            do
              f = s + "_" + g++;
            while (_[f]);
            _[s] = g, _[f] = 1;
          }
          i[w] = f;
      }
  for (v = c.s.r + n; v <= c.e.r; ++v)
    if (!(b[v] || {}).hidden) {
      var B = Cl(e, c, v, u, a, i, o);
      (B.isempty === !1 || (a === 1 ? o.blankrows !== !1 : o.blankrows)) && (h[m++] = B.row);
    }
  return h.length = m, h;
}
var cc = /"/g;
function bl(e, r, t, a, n, i, s, f, c) {
  for (var o = !0, l = [], d = "", u = Xe(t), h = e["!data"] != null, m = h && e["!data"][t] || [], g = r.s.c; g <= r.e.c; ++g)
    if (a[g]) {
      var p = h ? m[g] : e[a[g] + u];
      if (p == null) d = "";
      else if (p.v != null) {
        o = !1, d = "" + (c.rawNumbers && p.t == "n" ? p.v : Ot(p, null, c));
        for (var v = 0, w = 0; v !== d.length; ++v) if ((w = d.charCodeAt(v)) === n || w === i || w === 34 || c.forceQuotes) {
          d = '"' + d.replace(cc, '""') + '"';
          break;
        }
        d == "ID" && f == 0 && l.length == 0 && (d = '"ID"');
      } else p.f != null && !p.F ? (o = !1, d = "=" + p.f, d.indexOf(",") >= 0 && (d = '"' + d.replace(cc, '""') + '"')) : d = "";
      l.push(d);
    }
  if (c.strip) for (; l[l.length - 1] === ""; ) --l.length;
  return c.blankrows === !1 && o ? null : l.join(s);
}
function Ks(e, r) {
  var t = [], a = r ?? {};
  if (e == null || e["!ref"] == null) return "";
  for (var n = Ge(e["!ref"]), i = a.FS !== void 0 ? a.FS : ",", s = i.charCodeAt(0), f = a.RS !== void 0 ? a.RS : `
`, c = f.charCodeAt(0), o = "", l = [], d = a.skipHidden && e["!cols"] || [], u = a.skipHidden && e["!rows"] || [], h = n.s.c; h <= n.e.c; ++h) (d[h] || {}).hidden || (l[h] = Ne(h));
  for (var m = 0, g = n.s.r; g <= n.e.r; ++g)
    (u[g] || {}).hidden || (o = bl(e, n, g, l, s, c, i, m, a), o != null && (o || a.blankrows !== !1) && t.push((m++ ? f : "") + o));
  return t.join("");
}
function Ol(e, r) {
  r || (r = {}), r.FS = "	", r.RS = `
`;
  var t = Ks(e, r);
  if (typeof Be > "u" || r.type == "string") return t;
  var a = Be.utils.encode(1200, t, "str");
  return "ÿþ" + a;
}
function aw(e, r) {
  var t = "", a, n = "";
  if (e == null || e["!ref"] == null) return [];
  var i = Ge(e["!ref"]), s = "", f = [], c, o = [], l = e["!data"] != null;
  for (c = i.s.c; c <= i.e.c; ++c) f[c] = Ne(c);
  for (var d = i.s.r; d <= i.e.r; ++d)
    for (s = Xe(d), c = i.s.c; c <= i.e.c; ++c)
      if (t = f[c] + s, a = l ? (e["!data"][d] || [])[c] : e[t], n = "", a !== void 0) {
        if (a.F != null) {
          if (t = a.F, !a.f) continue;
          n = a.f, t.indexOf(":") == -1 && (t = t + ":" + t);
        }
        if (a.f != null) n = a.f;
        else {
          if (r && r.values === !1) continue;
          if (a.t == "z") continue;
          if (a.t == "n" && a.v != null) n = "" + a.v;
          else if (a.t == "b") n = a.v ? "TRUE" : "FALSE";
          else if (a.w !== void 0) n = "'" + a.w;
          else {
            if (a.v === void 0) continue;
            a.t == "s" ? n = "'" + a.v : n = "" + a.v;
          }
        }
        o[o.length] = t + "=" + n;
      }
  return o;
}
function Nl(e, r, t) {
  var a = t || {}, n = e ? e["!data"] != null : a.dense, i = +!a.skipHeader, s = e || {};
  !e && n && (s["!data"] = []);
  var f = 0, c = 0;
  if (s && a.origin != null)
    if (typeof a.origin == "number") f = a.origin;
    else {
      var o = typeof a.origin == "string" ? er(a.origin) : a.origin;
      f = o.r, c = o.c;
    }
  var l = { s: { c: 0, r: 0 }, e: { c, r: f + r.length - 1 + i } };
  if (s["!ref"]) {
    var d = Ge(s["!ref"]);
    l.e.c = Math.max(l.e.c, d.e.c), l.e.r = Math.max(l.e.r, d.e.r), f == -1 && (f = d.e.r + 1, l.e.r = f + r.length - 1 + i);
  } else
    f == -1 && (f = 0, l.e.r = r.length - 1 + i);
  var u = a.header || [], h = 0;
  if (a.header)
    for (u = [], h = 0; h != a.header.length; ++h) u[h] = zr(a.header[h]) ? null : a.header[h];
  var m = [];
  r.forEach(function(p, v) {
    n && !s["!data"][f + v + i] && (s["!data"][f + v + i] = []), n && (m = s["!data"][f + v + i]), sr(p).forEach(function(w) {
      if (!zr(w)) {
        (h = u.indexOf(w)) == -1 && (u[h = u.length] = w);
        var _ = p[w], T = "z", b = "", B = n ? "" : Ne(c + h) + Xe(f + v + i), y = n ? m[c + h] : s[B];
        _ && typeof _ == "object" && !(_ instanceof Date) ? n ? m[c + h] = _ : s[B] = _ : (typeof _ == "number" ? T = "n" : typeof _ == "boolean" ? T = "b" : typeof _ == "string" ? T = "s" : _ instanceof Date ? (T = "d", a.UTC || (_ = pi(_)), a.cellDates || (T = "n", _ = or(_)), b = y != null && y.z && ft(y.z) ? y.z : a.dateNF || Fe[14]) : _ === null && a.nullError && (T = "e", _ = 0), y ? (y.t = T, y.v = _, delete y.w, delete y.R, b && (y.z = b)) : n ? m[c + h] = y = { t: T, v: _ } : s[B] = y = { t: T, v: _ }, b && (y.z = b));
      }
    });
  }), l.e.c = Math.max(l.e.c, c + u.length - 1);
  var g = Xe(f);
  if (n && !s["!data"][f] && (s["!data"][f] = []), i) for (h = 0; h < u.length; ++h)
    u[h] == null || zr(u[h]) || (n ? s["!data"][f][h + c] = { t: "s", v: u[h] } : s[Ne(h + c) + g] = { t: "s", v: u[h] });
  return s["!ref"] = Me(l), s;
}
function nw(e, r) {
  return Nl(null, e, r);
}
function yn(e, r, t) {
  if (typeof r == "string") {
    if (e["!data"] != null) {
      var a = er(r);
      return e["!data"][a.r] || (e["!data"][a.r] = []), e["!data"][a.r][a.c] || (e["!data"][a.r][a.c] = { t: "z" });
    }
    return e[r] || (e[r] = { t: "z" });
  }
  return typeof r != "number" ? yn(e, He(r)) : yn(e, Ne(t || 0) + Xe(r));
}
function iw(e, r) {
  if (typeof r == "number") {
    if (r >= 0 && e.SheetNames.length > r) return r;
    throw new Error("Cannot find sheet # " + r);
  } else if (typeof r == "string") {
    var t = e.SheetNames.indexOf(r);
    if (t > -1) return t;
    throw new Error("Cannot find sheet name |" + r + "|");
  } else throw new Error("Cannot find sheet |" + r + "|");
}
function js(e, r) {
  var t = { SheetNames: [], Sheets: vr() };
  return e && Ln(t, e, r || "Sheet1"), t;
}
function Ln(e, r, t, a) {
  var n = 1;
  if (!t)
    for (; n <= 65535 && e.SheetNames.indexOf(t = "Sheet" + n) != -1; ++n, t = void 0) ;
  if (!t || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
  if (a && e.SheetNames.indexOf(t) >= 0 && t.length < 32) {
    var i = t.match(/\d+$/);
    n = i && +i[0] || 0;
    var s = i && t.slice(0, i.index) || t;
    for (++n; n <= 65535 && e.SheetNames.indexOf(t = s + n) != -1; ++n) ;
  }
  if (Ko(t), e.SheetNames.indexOf(t) >= 0) throw new Error("Worksheet with name |" + t + "| already exists!");
  return e.SheetNames.push(t), ar(e.Sheets, t, r), t;
}
function sw(e, r, t) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var a = iw(e, r);
  switch (e.Workbook.Sheets[a] || (e.Workbook.Sheets[a] = {}), t) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + t);
  }
  e.Workbook.Sheets[a].Hidden = t;
}
function fw(e, r) {
  return e.z = r, e;
}
function Rl(e, r, t) {
  return r ? (e.l = { Target: r }, t && (e.l.Tooltip = t)) : delete e.l, e;
}
function cw(e, r, t) {
  return Rl(e, "#" + r, t);
}
function ow(e, r, t) {
  e.c || (e.c = []), e.c.push({ t: r, a: t || "SheetJS" });
}
function lw(e, r, t, a) {
  for (var n = typeof r != "string" ? r : Ge(r), i = typeof r == "string" ? r : Me(r), s = n.s.r; s <= n.e.r; ++s) for (var f = n.s.c; f <= n.e.c; ++f) {
    var c = yn(e, s, f);
    c.t = "n", c.F = i, delete c.v, s == n.s.r && f == n.s.c && (c.f = t, a && (c.D = !0));
  }
  var o = Er(e["!ref"]);
  return o.s.r > n.s.r && (o.s.r = n.s.r), o.s.c > n.s.c && (o.s.c = n.s.c), o.e.r < n.e.r && (o.e.r = n.e.r), o.e.c < n.e.c && (o.e.c = n.e.c), e["!ref"] = Me(o), e;
}
var Dl = {
  encode_col: Ne,
  encode_row: Xe,
  encode_cell: He,
  encode_range: Me,
  decode_col: As,
  decode_row: xs,
  split_cell: gu,
  decode_cell: er,
  decode_range: Er,
  format_cell: Ot,
  sheet_new: _u,
  sheet_add_aoa: Xc,
  sheet_add_json: Nl,
  sheet_add_dom: dl,
  aoa_to_sheet: Va,
  json_to_sheet: nw,
  table_to_sheet: vl,
  table_to_book: d4,
  sheet_to_csv: Ks,
  sheet_to_txt: Ol,
  sheet_to_json: ss,
  sheet_to_html: hl,
  sheet_to_formulae: aw,
  sheet_to_row_object_array: ss,
  sheet_get_cell: yn,
  book_new: js,
  book_append_sheet: Ln,
  book_set_sheet_visibility: sw,
  cell_set_number_format: fw,
  cell_set_hyperlink: Rl,
  cell_set_internal_link: cw,
  cell_add_comment: ow,
  sheet_set_array_formula: lw,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
}, Mn;
function uw(e) {
  Mn = e;
}
function hw(e, r) {
  var t = Mn(), a = r ?? {};
  if (e == null || e["!ref"] == null)
    return t.push(null), t;
  for (var n = Ge(e["!ref"]), i = a.FS !== void 0 ? a.FS : ",", s = i.charCodeAt(0), f = a.RS !== void 0 ? a.RS : `
`, c = f.charCodeAt(0), o = "", l = [], d = a.skipHidden && e["!cols"] || [], u = a.skipHidden && e["!rows"] || [], h = n.s.c; h <= n.e.c; ++h) (d[h] || {}).hidden || (l[h] = Ne(h));
  var m = n.s.r, g = !1, p = 0;
  return t._read = function() {
    if (!g)
      return g = !0, t.push("\uFEFF");
    for (; m <= n.e.r; )
      if (++m, !(u[m - 1] || {}).hidden && (o = bl(e, n, m - 1, l, s, c, i, p, a), o != null && (o || a.blankrows !== !1)))
        return t.push((p++ ? f : "") + o);
    return t.push(null);
  }, t;
}
function dw(e, r) {
  var t = Mn(), a = r || {}, n = a.header != null ? a.header : ol, i = a.footer != null ? a.footer : ll;
  t.push(n);
  var s = Er(e["!ref"]);
  t.push(ul(e, s, a));
  var f = s.s.r, c = !1;
  return t._read = function() {
    if (f > s.e.r)
      return c || (c = !0, t.push("</table>" + i)), t.push(null);
    for (; f <= s.e.r; ) {
      t.push(cl(e, s, f, a)), ++f;
      break;
    }
  }, t;
}
function vw(e, r) {
  var t = Mn({ objectMode: !0 });
  if (e == null || e["!ref"] == null)
    return t.push(null), t;
  var a = { t: "n", v: 0 }, n = 0, i = 1, s = [], f = 0, c = "", o = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, l = r || {}, d = l.range != null ? l.range : e["!ref"];
  switch (l.header === 1 ? n = 1 : l.header === "A" ? n = 2 : Array.isArray(l.header) && (n = 3), typeof d) {
    case "string":
      o = Ge(d);
      break;
    case "number":
      o = Ge(e["!ref"]), o.s.r = d;
      break;
    default:
      o = d;
  }
  n > 0 && (i = 0);
  var u = Xe(o.s.r), h = [], m = 0, g = e["!data"] != null, p = o.s.r, v = 0, w = {};
  g && !e["!data"][p] && (e["!data"][p] = []);
  var _ = l.skipHidden && e["!cols"] || [], T = l.skipHidden && e["!rows"] || [];
  for (v = o.s.c; v <= o.e.c; ++v)
    if (!(_[v] || {}).hidden)
      switch (h[v] = Ne(v), a = g ? e["!data"][p][v] : e[h[v] + u], n) {
        case 1:
          s[v] = v - o.s.c;
          break;
        case 2:
          s[v] = h[v];
          break;
        case 3:
          s[v] = l.header[v - o.s.c];
          break;
        default:
          if (a == null && (a = { w: "__EMPTY", t: "s" }), c = f = Ot(a, null, l), m = w[f] || 0, !m) w[f] = 1;
          else {
            do
              c = f + "_" + m++;
            while (w[c]);
            w[f] = m, w[c] = 1;
          }
          s[v] = c;
      }
  return p = o.s.r + i, t._read = function() {
    for (; p <= o.e.r; ) {
      if ((T[p] || {}).hidden) {
        ++p;
        continue;
      }
      var b = Cl(e, o, p, h, n, s, l);
      if (++p, b.isempty === !1 || (n === 1 ? l.blankrows !== !1 : l.blankrows)) {
        t.push(b.row);
        return;
      }
    }
    return t.push(null);
  }, t;
}
function mw(e, r) {
  var t = Mn(), a = r ?? {}, n = +a.stride || 10;
  e.SSF || (e.SSF = je(Fe)), e.SSF && (ka(), Ha(e.SSF), a.revssf = An(e.SSF), a.revssf[e.SSF[65535]] = 0, a.ssf = e.SSF, a.cellXfs = [], Nt(a.cellXfs, {}, { revssf: { General: 0 } })), e.SheetNames.forEach(function(v) {
    var w = e.Sheets[v];
    if (!(!w || !w["!ref"])) {
      for (var _ = Er(w["!ref"]), T = w["!data"] != null, b = T ? w["!data"] : [], B = _.s.r; B <= _.e.r; ++B)
        if (!(T && !b[B]))
          for (var y = _.s.c; y <= _.e.c; ++y) {
            var O = T ? b[B][y] : w[Ne(y) + Xe(B)];
            O && (O.t == "d" && O.z == null && (O = je(O), O.z = Fe[14]), Nt(a.cellXfs, O, a));
          }
    }
  });
  var i = Qo(e, a), s = 0, f = 0, c = e.Sheets[e.SheetNames[f]], o = Ge(c), l = -1, d = !1, u = [], h = 0, m = !1, g = [], p = { r: 0, c: 0 };
  return t._read = function() {
    switch (s) {
      case 0:
        s = 1, t.push(hr), t.push("<Workbook" + pa({
          xmlns: Sr.ss,
          "xmlns:o": Sr.o,
          "xmlns:x": Sr.x,
          "xmlns:ss": Sr.ss,
          "xmlns:dt": Sr.dt,
          "xmlns:html": Sr.html
        }) + ">");
        break;
      case 1:
        s = 2, t.push(Jo(e, a)), t.push(qo(e));
        break;
      case 2:
        s = 3, t.push(i), t.push(rl(e));
        break;
      case 3:
        {
          if (d = !1, f >= e.SheetNames.length) {
            s = -1, t.push("");
            break;
          }
          if (t.push("<Worksheet" + pa({ "ss:Name": Le(e.SheetNames[f]) }) + ">"), c = e.Sheets[e.SheetNames[f]], !c)
            return t.push("</Worksheet>"), void ++f;
          var v = tl(c, a, f, e);
          if (v.length && t.push("<Names>" + v + "</Names>"), !c["!ref"]) return s = 5;
          o = Ge(c["!ref"]), l = o.s.r, s = 4;
        }
        break;
      case 4:
        {
          if (l < 0 || l > o.e.r)
            return d && t.push("</Table>"), void (s = 5);
          l <= o.s.r && (c["!cols"] && c["!cols"].forEach(function(O, R) {
            Gt(O);
            var P = !!O.width, L = Dn(R, O), U = { "ss:Index": R + 1 };
            P && (U["ss:Width"] = Ua(L.width)), O.hidden && (U["ss:Hidden"] = "1"), d || (d = !0, t.push("<Table>")), t.push(te("Column", null, U));
          }), m = c["!data"] != null, m && (g = c["!data"]), p.r = p.c = 0);
          for (var w = 0; l <= o.e.r && w < n; ++l, ++w) {
            var _ = [il(l, (c["!rows"] || [])[l])];
            if (p.r = l, !(m && !g[l])) for (var T = o.s.c; T <= o.e.c; ++T) {
              p.c = T;
              var b = !1;
              for (h = 0; h != u.length; ++h)
                if (!(u[h].s.c > T) && !(u[h].s.r > l) && !(u[h].e.c < T) && !(u[h].e.r < l)) {
                  (u[h].s.c != T || u[h].s.r != l) && (b = !0);
                  break;
                }
              if (!b) {
                var B = Ne(T) + Xe(l), y = m ? g[l][T] : c[B];
                _.push(nl(y, B, c, a, f, e, p));
              }
            }
            _.push("</Row>"), d || (d = !0, t.push("<Table>")), t.push(_.join(""));
          }
        }
        break;
      case 5:
        return t.push(al(c, a, f, e)), c && c["!autofilter"] && t.push('<AutoFilter x:Range="' + bn(La(c["!autofilter"].ref), { r: 0, c: 0 }) + '" xmlns="urn:schemas-microsoft-com:office:excel"></AutoFilter>'), t.push("</Worksheet>"), f++, l = -1, void (s = 3);
      case -1:
        s = -2, t.push("</Workbook>");
        break;
      case -2:
        t.push(null);
        break;
    }
  }, t;
}
var Pl = {
  to_json: vw,
  to_html: dw,
  to_csv: hw,
  to_xlml: mw,
  set_readable: uw
};
const pw = on.version, gw = {
  parse_xlscfb: xi,
  parse_zip: Gs,
  read: Yt,
  readFile: li,
  readFileSync: li,
  write: Pn,
  writeFile: ui,
  writeFileSync: ui,
  writeFileAsync: Il,
  writeXLSX: Ai,
  writeFileXLSX: Fl,
  utils: Dl,
  set_fs: kc,
  set_cptable: uc,
  stream: Pl,
  SSF: hs,
  CFB: Ie
}, _w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CFB: Ie,
  SSF: hs,
  default: gw,
  parse_xlscfb: xi,
  parse_zip: Gs,
  read: Yt,
  readFile: li,
  readFileSync: li,
  set_cptable: uc,
  set_fs: kc,
  stream: Pl,
  utils: Dl,
  version: pw,
  write: Pn,
  writeFile: ui,
  writeFileAsync: Il,
  writeFileSync: ui,
  writeFileXLSX: Fl,
  writeXLSX: Ai
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ie as CFB,
  hs as SSF,
  _w as default,
  xi as parse_xlscfb,
  Gs as parse_zip,
  Yt as read,
  li as readFile,
  li as readFileSync,
  uc as set_cptable,
  kc as set_fs,
  Pl as stream,
  Dl as utils,
  pw as version,
  Pn as write,
  ui as writeFile,
  Il as writeFileAsync,
  ui as writeFileSync,
  Fl as writeFileXLSX,
  Ai as writeXLSX
};

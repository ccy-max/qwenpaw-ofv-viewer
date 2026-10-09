var qA = Object.defineProperty;
var Nm = (p) => {
  throw TypeError(p);
};
var QA = (p, t, e) => t in p ? qA(p, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : p[t] = e;
var T = (p, t, e) => QA(p, typeof t != "symbol" ? t + "" : t, e), mp = (p, t, e) => t.has(p) || Nm("Cannot " + e);
var n = (p, t, e) => (mp(p, t, "read from private field"), e ? e.call(p) : t.get(p)), g = (p, t, e) => t.has(p) ? Nm("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(p) : t.set(p, e), u = (p, t, e, s) => (mp(p, t, "write to private field"), s ? s.call(p, e) : t.set(p, e), e), b = (p, t, e) => (mp(p, t, "access private method"), e);
var yt = (p, t, e, s) => ({
  set _(i) {
    u(p, t, i, e);
  },
  get _() {
    return n(p, t, s);
  }
});
var Bm = {};
const ps = typeof process == "object" && process + "" == "[object process]" && !Bm.nw && !(Bm.electron && process.type && process.type !== "browser"), Ui = [1 / 0, 1 / 0, -1 / 0, -1 / 0], na = new Float32Array(Ui), Cp = [1e-3, 0, 0, 1e-3, 0, 0], Re = "http://www.w3.org/2000/svg", fs = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  IS_EDITING: 128,
  OPLIST: 256
}, Dn = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, Yo = "pdfjs_internal_id_", Ph = "pdfjs_internal_editor_", W = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  POPUP: 16,
  SIGNATURE: 101,
  COMMENT: 102
}, et = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  INK_COLOR_AND_OPACITY: 24,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_THICKNESS: 32,
  HIGHLIGHT_FREE: 33,
  HIGHLIGHT_SHOW_ALL: 34,
  DRAW_STEP: 41
}, mb = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, Qt = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, ac = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, Et = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26,
  RICHMEDIA: 27
}, zo = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, du = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, ni = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93,
  rawFillPath: 94
}, Oh = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  quadraticCurveTo: 3,
  closePath: 4
}, bb = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let Qf = du.WARNINGS;
function JA(p) {
  Number.isInteger(p) && (Qf = p);
}
function ZA() {
  return Qf;
}
function Jf(p) {
  Qf >= du.INFOS && console.info(`Info: ${p}`);
}
function X(p) {
  Qf >= du.WARNINGS && console.warn(`Warning: ${p}`);
}
function st(p) {
  throw new Error(p);
}
function Gt(p, t) {
  p || st(t);
}
function tw(p) {
  switch (p == null ? void 0 : p.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function gm(p, t = null, e = null) {
  if (!p)
    return null;
  if (e && typeof p == "string") {
    if (e.addDefaultProtocol && p.startsWith("www.")) {
      const i = p.match(/\./g);
      (i == null ? void 0 : i.length) >= 2 && (p = `http://${p}`);
    }
    if (e.tryConvertEncoding)
      try {
        p = iw(p);
      } catch {
      }
  }
  const s = t ? URL.parse(p, t) : URL.parse(p);
  return tw(s) ? s : null;
}
function mm(p, t, e = !1) {
  const s = URL.parse(p);
  return s ? (s.hash = t, s.href) : e && gm(p, "http://example.com") ? p.split("#", 1)[0] + `${t ? `#${t}` : ""}` : "";
}
function xp(p) {
  return p.substring(p.lastIndexOf("/") + 1);
}
function R(p, t, e, s = !1) {
  return Object.defineProperty(p, t, {
    value: e,
    enumerable: !s,
    configurable: !0,
    writable: !1
  }), e;
}
const Bo = function() {
  function t(e, s) {
    this.message = e, this.name = s;
  }
  return t.prototype = new Error(), t.constructor = t, t;
}();
class cf extends Bo {
  constructor(t, e) {
    super(t, "PasswordException"), this.code = e;
  }
}
class bp extends Bo {
  constructor(t, e) {
    super(t, "UnknownErrorException"), this.details = e;
  }
}
class df extends Bo {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class fc extends Bo {
  constructor(t, e, s) {
    super(t, "ResponseException"), this.status = e, this.missing = s;
  }
}
class ew extends Bo {
  constructor(t) {
    super(t, "FormatError");
  }
}
class Rn extends Bo {
  constructor(t) {
    super(t, "AbortException");
  }
}
function sw(p) {
  (typeof p != "object" || (p == null ? void 0 : p.length) === void 0) && st("Invalid argument for bytesToString");
  const t = p.length, e = 8192;
  if (t < e)
    return String.fromCharCode.apply(null, p);
  const s = [];
  for (let i = 0; i < t; i += e) {
    const r = Math.min(i + e, t), a = p.subarray(i, r);
    s.push(String.fromCharCode.apply(null, a));
  }
  return s.join("");
}
function Zf(p) {
  typeof p != "string" && st("Invalid argument for stringToBytes");
  const t = p.length, e = new Uint8Array(t);
  for (let s = 0; s < t; ++s)
    e[s] = p.charCodeAt(s) & 255;
  return e;
}
class ot {
  static get isLittleEndian() {
    const t = new Uint8Array(4);
    t[0] = 1;
    const e = new Uint32Array(t.buffer, 0, 1);
    return R(this, "isLittleEndian", e[0] === 1);
  }
  static get isOffscreenCanvasSupported() {
    return R(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get isImageDecoderSupported() {
    return R(this, "isImageDecoderSupported", typeof ImageDecoder < "u");
  }
  static get isFloat16ArraySupported() {
    return R(this, "isFloat16ArraySupported", typeof Float16Array < "u");
  }
  static get isSanitizerSupported() {
    return R(this, "isSanitizerSupported", typeof Sanitizer < "u");
  }
  static get platform() {
    const {
      platform: t,
      userAgent: e
    } = navigator;
    return R(this, "platform", {
      isAndroid: e.includes("Android"),
      isLinux: t.includes("Linux"),
      isMac: t.includes("Mac"),
      isWindows: t.includes("Win"),
      isFirefox: e.includes("Firefox")
    });
  }
  static get isCanvasFilterSupported() {
    let t;
    return this.isOffscreenCanvasSupported ? t = new OffscreenCanvas(1, 1).getContext("2d") : typeof document < "u" && (t = document.createElement("canvas").getContext("2d")), R(this, "isCanvasFilterSupported", (t == null ? void 0 : t.filter) !== void 0);
  }
  static get isAlphaColorInputSupported() {
    if (typeof document > "u")
      return R(this, "isAlphaColorInputSupported", !1);
    const t = document.createElement("input");
    return t.type = "color", t.setAttribute("alpha", ""), t.value = "#ff000080", R(this, "isAlphaColorInputSupported", t.value !== "#ff0000");
  }
  static get isBackdropFilterSupported() {
    return R(this, "isBackdropFilterSupported", typeof CSS < "u" && CSS.supports("backdrop-filter", "blur(1px)"));
  }
}
var In, Cu, _p;
class I {
  static get hexNums() {
    return R(this, "hexNums", Array.from({
      length: 256
    }, (t, e) => e.toString(16).padStart(2, "0")));
  }
  static makeHexColor(t, e, s) {
    return `#${this.hexNums[t]}${this.hexNums[e]}${this.hexNums[s]}`;
  }
  static transform(t, e) {
    return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]];
  }
  static multiplyByDOMMatrix(t, e) {
    return [t[0] * e.a + t[2] * e.b, t[1] * e.a + t[3] * e.b, t[0] * e.c + t[2] * e.d, t[1] * e.c + t[3] * e.d, t[0] * e.e + t[2] * e.f + t[4], t[1] * e.e + t[3] * e.f + t[5]];
  }
  static applyTransform(t, e, s = 0) {
    const i = t[s], r = t[s + 1];
    t[s] = i * e[0] + r * e[2] + e[4], t[s + 1] = i * e[1] + r * e[3] + e[5];
  }
  static applyTransformToBezier(t, e, s = 0) {
    const i = e[0], r = e[1], a = e[2], o = e[3], l = e[4], h = e[5];
    for (let c = 0; c < 6; c += 2) {
      const d = t[s + c], f = t[s + c + 1];
      t[s + c] = d * i + f * a + l, t[s + c + 1] = d * r + f * o + h;
    }
  }
  static applyInverseTransform(t, e) {
    const s = t[0], i = t[1], r = e[0] * e[3] - e[1] * e[2];
    t[0] = (s * e[3] - i * e[2] + e[2] * e[5] - e[4] * e[3]) / r, t[1] = (-s * e[1] + i * e[0] + e[4] * e[1] - e[5] * e[0]) / r;
  }
  static axialAlignedBoundingBox(t, e, s) {
    const i = e[0], r = e[1], a = e[2], o = e[3], l = e[4], h = e[5], c = t[0], d = t[1], f = t[2], m = t[3];
    let y = i * c + l, A = y, w = i * f + l, v = w, S = o * d + h, E = S, C = o * m + h, x = C;
    if (r !== 0 || a !== 0) {
      const _ = r * c, k = r * f, M = a * d, P = a * m;
      y += M, v += M, w += P, A += P, S += _, x += _, C += k, E += k;
    }
    s[0] = Math.min(s[0], y, w, A, v), s[1] = Math.min(s[1], S, C, E, x), s[2] = Math.max(s[2], y, w, A, v), s[3] = Math.max(s[3], S, C, E, x);
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e];
  }
  static singularValueDecompose2dScale(t, e) {
    const s = t[0], i = t[1], r = t[2], a = t[3], o = s ** 2 + i ** 2, l = s * r + i * a, h = r ** 2 + a ** 2, c = (o + h) / 2, d = Math.sqrt(c ** 2 - (o * h - l ** 2));
    e[0] = Math.sqrt(c + d || 1), e[1] = Math.sqrt(c - d || 1);
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e;
  }
  static intersect(t, e) {
    const s = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])), i = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (s > i)
      return null;
    const r = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])), a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return r > a ? null : [s, r, i, a];
  }
  static pointBoundingBox(t, e, s) {
    s[0] = Math.min(s[0], t), s[1] = Math.min(s[1], e), s[2] = Math.max(s[2], t), s[3] = Math.max(s[3], e);
  }
  static rectBoundingBox(t, e, s, i, r) {
    r[0] = Math.min(r[0], t, s), r[1] = Math.min(r[1], e, i), r[2] = Math.max(r[2], t, s), r[3] = Math.max(r[3], e, i);
  }
  static bezierBoundingBox(t, e, s, i, r, a, o, l, h) {
    h[0] = Math.min(h[0], t, o), h[1] = Math.min(h[1], e, l), h[2] = Math.max(h[2], t, o), h[3] = Math.max(h[3], e, l), b(this, In, _p).call(this, t, s, r, o, e, i, a, l, 3 * (-t + 3 * (s - r) + o), 6 * (t - 2 * s + r), 3 * (s - t), h), b(this, In, _p).call(this, t, s, r, o, e, i, a, l, 3 * (-e + 3 * (i - a) + l), 6 * (e - 2 * i + a), 3 * (i - e), h);
  }
}
In = new WeakSet(), Cu = function(t, e, s, i, r, a, o, l, h, c) {
  if (h <= 0 || h >= 1)
    return;
  const d = 1 - h, f = h * h, m = f * h, y = d * (d * (d * t + 3 * h * e) + 3 * f * s) + m * i, A = d * (d * (d * r + 3 * h * a) + 3 * f * o) + m * l;
  c[0] = Math.min(c[0], y), c[1] = Math.min(c[1], A), c[2] = Math.max(c[2], y), c[3] = Math.max(c[3], A);
}, _p = function(t, e, s, i, r, a, o, l, h, c, d, f) {
  if (Math.abs(h) < 1e-12) {
    Math.abs(c) >= 1e-12 && b(this, In, Cu).call(this, t, e, s, i, r, a, o, l, -d / c, f);
    return;
  }
  const m = c ** 2 - 4 * d * h;
  if (m < 0)
    return;
  const y = Math.sqrt(m), A = 2 * h;
  b(this, In, Cu).call(this, t, e, s, i, r, a, o, l, (-c + y) / A, f), b(this, In, Cu).call(this, t, e, s, i, r, a, o, l, (-c - y) / A, f);
}, g(I, In);
function iw(p) {
  return decodeURIComponent(escape(p));
}
let yp = null, Hm = null;
function yb(p) {
  return yp || (yp = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, Hm = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), p.replaceAll(yp, (t, e, s) => e ? e.normalize("NFKC") : Hm.get(s));
}
function bm() {
  if (typeof crypto.randomUUID == "function")
    return crypto.randomUUID();
  const p = new Uint8Array(32);
  return crypto.getRandomValues(p), sw(p);
}
function nw(p, t, e) {
  if (!Array.isArray(e) || e.length < 2)
    return !1;
  const [s, i, ...r] = e;
  if (!p(s) && !Number.isInteger(s) || !t(i))
    return !1;
  const a = r.length;
  let o = !0;
  switch (i.name) {
    case "XYZ":
      if (a < 2 || a > 3)
        return !1;
      break;
    case "Fit":
    case "FitB":
      return a === 0;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (a > 1)
        return !1;
      break;
    case "FitR":
      if (a !== 4)
        return !1;
      o = !1;
      break;
    default:
      return !1;
  }
  for (const l of r)
    if (!(typeof l == "number" || o && l === null))
      return !1;
  return !0;
}
const Ho = () => [], tp = () => /* @__PURE__ */ new Map(), uf = () => /* @__PURE__ */ Object.create(null), Ab = () => /* @__PURE__ */ new Set();
typeof Iterator.prototype.join != "function" && (Iterator.prototype.join = function(p) {
  return [...this].join(p);
});
function wt(p, t, e) {
  return Math.min(Math.max(p, t), e);
}
class uu {
  constructor({
    viewBox: t,
    userUnit: e,
    scale: s,
    rotation: i,
    offsetX: r = 0,
    offsetY: a = 0,
    dontFlip: o = !1
  }) {
    this.viewBox = t, this.userUnit = e, this.scale = s, this.rotation = i, this.offsetX = r, this.offsetY = a, s *= e;
    const l = (t[2] + t[0]) / 2, h = (t[3] + t[1]) / 2;
    let c, d, f, m;
    switch (i %= 360, i < 0 && (i += 360), i) {
      case 180:
        c = -1, d = 0, f = 0, m = 1;
        break;
      case 90:
        c = 0, d = 1, f = 1, m = 0;
        break;
      case 270:
        c = 0, d = -1, f = -1, m = 0;
        break;
      case 0:
        c = 1, d = 0, f = 0, m = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    o && (f = -f, m = -m);
    let y, A, w, v;
    c === 0 ? (y = Math.abs(h - t[1]) * s + r, A = Math.abs(l - t[0]) * s + a, w = (t[3] - t[1]) * s, v = (t[2] - t[0]) * s) : (y = Math.abs(l - t[0]) * s + r, A = Math.abs(h - t[1]) * s + a, w = (t[2] - t[0]) * s, v = (t[3] - t[1]) * s), this.transform = [c * s, d * s, f * s, m * s, y - c * s * l - f * s * h, A - d * s * l - m * s * h], this.width = w, this.height = v;
  }
  get rawDims() {
    const t = this.viewBox;
    return R(this, "rawDims", {
      pageWidth: t[2] - t[0],
      pageHeight: t[3] - t[1],
      pageX: t[0],
      pageY: t[1]
    });
  }
  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: s = this.offsetX,
    offsetY: i = this.offsetY,
    dontFlip: r = !1
  } = {}) {
    return new uu({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: r
    });
  }
  convertToViewportPoint(t, e) {
    const s = [t, e];
    return I.applyTransform(s, this.transform), s;
  }
  convertToPdfPoint(t, e) {
    const s = [t, e];
    return I.applyInverseTransform(s, this.transform), s;
  }
}
class pc {
  static textContent(t) {
    const e = [], s = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function i(r) {
      var l;
      if (!r)
        return;
      let a = null;
      const o = r.name;
      if (o === "#text")
        a = r.value;
      else if (pc.shouldBuildText(o))
        (l = r == null ? void 0 : r.attributes) != null && l.textContent ? a = r.attributes.textContent : r.value && (a = r.value);
      else return;
      if (a !== null && e.push({
        str: a
      }), !!r.children)
        for (const h of r.children)
          i(h);
    }
    return i(t), s;
  }
  static shouldBuildText(t) {
    return !(t === "textarea" || t === "input" || t === "option" || t === "select");
  }
}
const rw = /url\(|image-set\(/i, aw = /^on/i;
var vc, Tp;
class ep {
  static get _allowedHtmlElements() {
    return R(this, "_allowedHtmlElements", /* @__PURE__ */ new Set(["a", "b", "br", "button", "div", "i", "img", "input", "label", "li", "ol", "option", "p", "select", "span", "sub", "sup", "textarea", "ul"]));
  }
  static get _allowedSvgElements() {
    return R(this, "_allowedSvgElements", /* @__PURE__ */ new Set(["ellipse", "line", "path", "rect", "svg"]));
  }
  static get _allowedRichTextElements() {
    return R(this, "_allowedRichTextElements", /* @__PURE__ */ new Set(["a", "b", "br", "div", "i", "li", "ol", "p", "span", "sub", "sup", "ul"]));
  }
  static get _allowedRichTextAttributes() {
    return R(this, "_allowedRichTextAttributes", /* @__PURE__ */ new Set(["class", "dir", "style"]));
  }
  static get _allowedRichTextStyles() {
    return R(this, "_allowedRichTextStyles", /* @__PURE__ */ new Set(["color", "font", "fontFamily", "fontSize", "fontStretch", "fontStyle", "fontWeight", "kerningMode", "letterSpacing", "lineHeight", "margin", "marginBottom", "marginLeft", "marginRight", "marginTop", "orphans", "paddingLeft", "paddingRight", "breakAfter", "breakBefore", "breakInside", "tabInterval", "tabStop", "textAlign", "textDecoration", "textIndent", "transform", "verticalAlign", "widows"]));
  }
  static setupStorage(t, e, s, i, r) {
    const a = i.getValue(e, {
      value: null
    });
    switch (s.name) {
      case "textarea":
        if (a.value !== null && (t.textContent = a.value), r === "print")
          break;
        t.addEventListener("input", (o) => {
          i.setValue(e, {
            value: o.target.value
          });
        });
        break;
      case "input":
        if (s.attributes.type === "radio" || s.attributes.type === "checkbox") {
          if (a.value === s.attributes.xfaOn ? t.setAttribute("checked", !0) : a.value === s.attributes.xfaOff && t.removeAttribute("checked"), r === "print")
            break;
          t.addEventListener("change", (o) => {
            i.setValue(e, {
              value: o.target.checked ? o.target.getAttribute("xfaOn") : o.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (a.value !== null && t.setAttribute("value", a.value), r === "print")
            break;
          t.addEventListener("input", (o) => {
            i.setValue(e, {
              value: o.target.value
            });
          });
        }
        break;
      case "select":
        if (a.value !== null) {
          t.setAttribute("value", a.value);
          for (const o of s.children)
            o.attributes.value === a.value ? o.attributes.selected = !0 : Object.hasOwn(o.attributes, "selected") && delete o.attributes.selected;
        }
        t.addEventListener("input", (o) => {
          const l = o.target.options, h = l.selectedIndex === -1 ? "" : l[l.selectedIndex].value;
          i.setValue(e, {
            value: h
          });
        });
        break;
    }
  }
  static setAttributes({
    html: t,
    element: e,
    storage: s = null,
    intent: i,
    linkService: r
  }) {
    const {
      attributes: a
    } = e, o = t instanceof HTMLAnchorElement;
    a.type === "radio" && (a.name = `${a.name}-${i}`);
    for (const [l, h] of Object.entries(a))
      if (!(h == null || aw.test(l)) && !(i === "richText" && !this._allowedRichTextAttributes.has(l)))
        switch (l) {
          case "class":
            h.length && t.setAttribute(l, h.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t.setAttribute("data-element-id", h);
            break;
          case "style":
            if (i === "richText") {
              const c = this._allowedRichTextStyles;
              for (const [d, f] of Object.entries(h))
                c.has(d) && !rw.test(f) && (t.style[d] = f);
            } else
              Object.assign(t.style, h);
            break;
          case "textContent":
            t.textContent = h;
            break;
          default:
            (!o || l !== "href" && l !== "newWindow") && t.setAttribute(l, h);
        }
    o && (r == null || r.addLinkAttributes(t, a.href, a.newWindow)), s && a.dataId && this.setupStorage(t, a.dataId, e, s);
  }
  static render(t) {
    var d, f, m;
    const e = t.annotationStorage, s = t.linkService, i = t.xfaHtml, r = t.intent || "display", a = b(this, vc, Tp).call(this, i.name, (d = i.attributes) == null ? void 0 : d.xmlns, r) ?? document.createElement("div");
    i.attributes && this.setAttributes({
      html: a,
      element: i,
      intent: r,
      linkService: s
    });
    const o = r !== "richText", l = t.div;
    if (l.append(a), t.viewport) {
      const y = `matrix(${t.viewport.transform.join(",")})`;
      l.style.transform = y;
    }
    o && l.setAttribute("class", "xfaLayer xfaFont");
    const h = [];
    if (i.children.length === 0) {
      if (i.value) {
        const y = document.createTextNode(i.value);
        a.append(y), o && pc.shouldBuildText(i.name) && h.push(y);
      }
      return {
        textDivs: h
      };
    }
    const c = [[i, -1, a]];
    for (; c.length > 0; ) {
      const [y, A, w] = c.at(-1);
      if (A + 1 === y.children.length) {
        c.pop();
        continue;
      }
      const v = y.children[++c.at(-1)[1]];
      if (v === null)
        continue;
      const {
        name: S
      } = v;
      if (S === "#text") {
        const C = document.createTextNode(v.value);
        h.push(C), w.append(C);
        continue;
      }
      const E = b(this, vc, Tp).call(this, S, (f = v.attributes) == null ? void 0 : f.xmlns, r);
      if (E) {
        if (w.append(E), v.attributes && this.setAttributes({
          html: E,
          element: v,
          storage: e,
          intent: r,
          linkService: s
        }), ((m = v.children) == null ? void 0 : m.length) > 0)
          c.push([v, -1, E]);
        else if (v.value) {
          const C = document.createTextNode(v.value);
          o && pc.shouldBuildText(S) && h.push(C), E.append(C);
        }
      }
    }
    for (const y of l.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      y.setAttribute("readOnly", !0);
    return {
      textDivs: h
    };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    t.div.style.transform = e, t.div.hidden = !1;
  }
  static getPageViewport(t, {
    scale: e = 1,
    rotation: s = 0
  }) {
    const {
      width: i,
      height: r
    } = t.attributes.style;
    return new uu({
      viewBox: [0, 0, parseInt(i, 10), parseInt(r, 10)],
      userUnit: 1,
      scale: e,
      rotation: s
    });
  }
}
vc = new WeakSet(), Tp = function(t, e, s) {
  return s === "richText" ? !e && this._allowedRichTextElements.has(t) ? document.createElement(t) : null : e ? e === Re && this._allowedSvgElements.has(t) ? document.createElementNS(Re, t) : null : this._allowedHtmlElements.has(t) ? document.createElement(t) : null;
}, g(ep, vc);
const ta = class ta {
};
T(ta, "CSS", 96), T(ta, "PDF", 72), T(ta, "PDF_TO_CSS_UNITS", ta.CSS / ta.PDF);
let Fn = ta;
async function sp(p, t = "text") {
  if (oc(p, document.baseURI)) {
    const e = await fetch(p);
    if (!e.ok)
      throw new Error(e.statusText);
    switch (t) {
      case "blob":
        return e.blob();
      case "bytes":
        return e.bytes();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, s) => {
    const i = new XMLHttpRequest();
    i.open("GET", p, !0), i.responseType = t === "bytes" ? "arraybuffer" : t, i.onreadystatechange = () => {
      if (i.readyState === XMLHttpRequest.DONE) {
        if (i.status === 200 || i.status === 0) {
          switch (t) {
            case "bytes":
              e(new Uint8Array(i.response));
              return;
            case "blob":
            case "json":
              e(i.response);
              return;
          }
          e(i.responseText);
          return;
        }
        s(new Error(i.statusText));
      }
    }, i.send(null);
  });
}
class ip extends Bo {
  constructor(t, e = 0) {
    super(t, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function fu(p) {
  const t = p.length;
  let e = 0;
  for (; e < t && p[e].trim() === ""; )
    e++;
  return p.substring(e, e + 5).toLowerCase() === "data:";
}
function np(p) {
  return typeof p == "string" && /\.pdf$/i.test(p);
}
function wb(p) {
  return [p] = p.split(/[#?]/, 1), xp(p);
}
function vb(p, t = "document.pdf") {
  if (typeof p != "string")
    return t;
  if (fu(p))
    return X('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), t;
  const s = ((o) => {
    try {
      return new URL(o);
    } catch {
    }
    try {
      return new URL(decodeURIComponent(o));
    } catch {
    }
    try {
      return new URL(o, "https://foo.bar");
    } catch {
    }
    try {
      return new URL(decodeURIComponent(o), "https://foo.bar");
    } catch {
    }
    return null;
  })(p);
  if (!s)
    return t;
  const i = (o) => {
    try {
      let l = decodeURIComponent(o);
      return l.includes("/") && (l = xp(l), l.length === 4 && r.test(l)) ? o : l;
    } catch {
      return o;
    }
  }, r = /\.pdf$/i, a = xp(s.pathname);
  if (r.test(a))
    return i(a);
  if (s.searchParams.size > 0) {
    const o = (h) => [...h].findLast((c) => r.test(c)), l = o(s.searchParams.values()) ?? o(s.searchParams.keys());
    if (l)
      return i(l);
  }
  if (s.hash) {
    const {
      hash: o
    } = s;
    let l = -1;
    for (const {
      index: h
    } of o.matchAll(/\.pdf\b/gi))
      l = h;
    if (l > 0) {
      let h = l;
      for (; h > 0 && !"/?#=".includes(o[h - 1]); )
        h--;
      if (h < l)
        return i(o.slice(h, l + 4));
    }
  }
  return t;
}
var Gn;
class Um {
  constructor() {
    g(this, Gn, /* @__PURE__ */ new Map());
    T(this, "times", []);
  }
  time(t) {
    n(this, Gn).has(t) && X(`Timer is already running for ${t}`), n(this, Gn).set(t, Date.now());
  }
  timeEnd(t) {
    n(this, Gn).has(t) || X(`Timer has not been started for ${t}`), this.times.push({
      name: t,
      start: n(this, Gn).get(t),
      end: Date.now()
    }), n(this, Gn).delete(t);
  }
  toString() {
    const t = Math.max(...this.times.map((e) => e.name.length));
    return this.times.map((e) => `${e.name.padEnd(t)} ${e.end - e.start}ms
`).join("");
  }
}
Gn = new WeakMap();
function oc(p, t) {
  const e = t ? URL.parse(p, t) : URL.parse(p);
  return /https?:/.test((e == null ? void 0 : e.protocol) ?? "");
}
function Us(p) {
  p.preventDefault();
}
function Kt(p) {
  p.preventDefault(), p.stopPropagation();
}
var Sc;
class gc {
  static toDateObject(t) {
    if (t instanceof Date)
      return t;
    if (!t || typeof t != "string")
      return null;
    n(this, Sc) || u(this, Sc, new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+\\-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = n(this, Sc).exec(t);
    if (!e)
      return null;
    const s = parseInt(e[1], 10);
    let i = parseInt(e[2], 10);
    i = i >= 1 && i <= 12 ? i - 1 : 0;
    let r = parseInt(e[3], 10);
    r = r >= 1 && r <= 31 ? r : 1;
    let a = parseInt(e[4], 10);
    a = a >= 0 && a <= 23 ? a : 0;
    let o = parseInt(e[5], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    let l = parseInt(e[6], 10);
    l = l >= 0 && l <= 59 ? l : 0;
    const h = e[7] || "Z";
    let c = parseInt(e[8], 10);
    c = c >= 0 && c <= 23 ? c : 0;
    let d = parseInt(e[9], 10) || 0;
    return d = d >= 0 && d <= 59 ? d : 0, h === "-" ? (a += c, o += d) : h === "+" && (a -= c, o -= d), new Date(Date.UTC(s, i, r, a, o, l));
  }
}
Sc = new WeakMap(), g(gc, Sc);
function Uo(p) {
  if (p.startsWith("#")) {
    const e = p.slice(1);
    return [parseInt(e.slice(0, 2), 16), parseInt(e.slice(2, 4), 16), parseInt(e.slice(4, 6), 16), e.length >= 8 ? parseInt(e.slice(6, 8), 16) / 255 : 1];
  }
  if (p.startsWith("rgb(")) {
    const [e, s, i] = p.slice(4, -1).split(",").map((r) => parseInt(r, 10));
    return [e, s, i, 1];
  }
  if (p.startsWith("rgba(")) {
    const e = p.slice(5, -1).split(",");
    return [parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10), parseFloat(e[3])];
  }
  const t = p.match(/^color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+|none))?\)$/);
  return t ? [Math.round(parseFloat(t[1]) * 255), Math.round(parseFloat(t[2]) * 255), Math.round(parseFloat(t[3]) * 255), t[4] !== void 0 && t[4] !== "none" ? parseFloat(t[4]) : 1] : null;
}
function Fh(p) {
  const t = Uo(p);
  return t ? t.slice(0, 3) : (X(`Not a valid color format: "${p}"`), [0, 0, 0]);
}
function ow(p) {
  const t = document.createElement("span");
  t.style.visibility = "hidden", t.style.colorScheme = "only light", document.body.append(t);
  for (const e of p.keys()) {
    t.style.color = e;
    const s = window.getComputedStyle(t).color;
    p.set(e, Fh(s));
  }
  t.remove();
}
function mt(p) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: r,
    f: a
  } = p.getTransform();
  return [t, e, s, i, r, a];
}
function ai(p) {
  const {
    a: t,
    b: e,
    c: s,
    d: i,
    e: r,
    f: a
  } = p.getTransform().invertSelf();
  return [t, e, s, i, r, a];
}
function jr(p, t, e = !1, s = !0) {
  if (t instanceof uu) {
    const {
      pageWidth: i,
      pageHeight: r
    } = t.rawDims, {
      style: a
    } = p, o = `round(down, var(--total-scale-factor) * ${i}px, var(--scale-round-x))`, l = `round(down, var(--total-scale-factor) * ${r}px, var(--scale-round-y))`;
    !e || t.rotation % 180 === 0 ? (a.width = o, a.height = l) : (a.width = l, a.height = o);
  }
  s && p.setAttribute("data-main-rotation", t.rotation);
}
class bs {
  constructor() {
    const {
      pixelRatio: t
    } = bs;
    this.sx = t, this.sy = t;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
  limitCanvas(t, e, s, i, r = -1) {
    let a = 1 / 0, o = 1 / 0, l = 1 / 0;
    s = bs.capPixels(s, r), s > 0 && (a = Math.sqrt(s / (t * e))), i !== -1 && (o = i / t, l = i / e);
    const h = Math.min(a, o, l);
    return this.sx > h || this.sy > h ? (this.sx = h, this.sy = h, !0) : !1;
  }
  static get pixelRatio() {
    return globalThis.devicePixelRatio || 1;
  }
  static capPixels(t, e) {
    if (e >= 0) {
      const s = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e / 100));
      return t > 0 ? Math.min(t, s) : s;
    }
    return t;
  }
}
const ff = /* @__PURE__ */ new Set(["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"]);
class lw {
  static get isDarkMode() {
    var t;
    return R(this, "isDarkMode", !!((t = window == null ? void 0 : window.matchMedia) != null && t.call(window, "(prefers-color-scheme: dark)").matches));
  }
}
class Sb {
  static get commentForegroundColor() {
    const t = document.createElement("span");
    t.classList.add("comment", "sidebar");
    const {
      style: e
    } = t;
    e.width = e.height = "0", e.display = "none", e.color = "var(--comment-fg-color)", document.body.append(t);
    const {
      color: s
    } = window.getComputedStyle(t);
    return t.remove(), R(this, "commentForegroundColor", Fh(s));
  }
}
function Eb(p, t) {
  t = wt(t ?? 1, 0, 1);
  const e = 255 * (1 - t);
  return p.map((s) => Math.round(s * t + e));
}
function Gm(p, t) {
  const e = p[0] / 255, s = p[1] / 255, i = p[2] / 255, r = Math.max(e, s, i), a = Math.min(e, s, i), o = (r + a) / 2;
  if (r === a)
    t[0] = t[1] = 0;
  else {
    const l = r - a;
    switch (t[1] = o < 0.5 ? l / (r + a) : l / (2 - r - a), r) {
      case e:
        t[0] = ((s - i) / l + (s < i ? 6 : 0)) * 60;
        break;
      case s:
        t[0] = ((i - e) / l + 2) * 60;
        break;
      case i:
        t[0] = ((e - s) / l + 4) * 60;
        break;
    }
  }
  t[2] = o;
}
function kp(p, t) {
  const e = p[0], s = p[1], i = p[2], r = (1 - Math.abs(2 * i - 1)) * s, a = r * (1 - Math.abs(e / 60 % 2 - 1)), o = i - r / 2;
  switch (Math.floor(e / 60)) {
    case 0:
      t[0] = r + o, t[1] = a + o, t[2] = o;
      break;
    case 1:
      t[0] = a + o, t[1] = r + o, t[2] = o;
      break;
    case 2:
      t[0] = o, t[1] = r + o, t[2] = a + o;
      break;
    case 3:
      t[0] = o, t[1] = a + o, t[2] = r + o;
      break;
    case 4:
      t[0] = a + o, t[1] = o, t[2] = r + o;
      break;
    case 5:
    case 6:
      t[0] = r + o, t[1] = o, t[2] = a + o;
      break;
  }
}
function Pp(p) {
  return p <= 0.03928 ? p / 12.92 : ((p + 0.055) / 1.055) ** 2.4;
}
function $m(p, t, e) {
  kp(p, e), e.map(Pp);
  const s = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  kp(t, e), e.map(Pp);
  const i = 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
  return s > i ? (s + 0.05) / (i + 0.05) : (i + 0.05) / (s + 0.05);
}
const zm = /* @__PURE__ */ new Map();
function Cb(p, t) {
  const e = p[0] + p[1] * 256 + p[2] * 65536 + t[0] * 16777216 + t[1] * 4294967296 + t[2] * 1099511627776;
  let s = zm.get(e);
  if (s)
    return s;
  const i = new Float32Array(9), r = i.subarray(0, 3), a = i.subarray(3, 6);
  Gm(p, a);
  const o = i.subarray(6, 9);
  Gm(t, o);
  const l = o[2] < 0.5, h = l ? 12 : 4.5;
  if (a[2] = l ? Math.sqrt(a[2]) : 1 - Math.sqrt(1 - a[2]), $m(a, o, r) < h) {
    let c, d;
    l ? (c = a[2], d = 1) : (c = 0, d = a[2]);
    const f = 5e-3;
    for (; d - c > f; ) {
      const m = a[2] = (c + d) / 2;
      l === $m(a, o, r) < h ? c = m : d = m;
    }
    a[2] = l ? d : c;
  }
  return kp(a, r), s = I.makeHexColor(Math.round(r[0] * 255), Math.round(r[1] * 255), Math.round(r[2] * 255)), zm.set(e, s), s;
}
function ym({
  html: p,
  dir: t,
  className: e
}, s) {
  const i = document.createDocumentFragment();
  if (typeof p == "string") {
    const r = document.createElement("p");
    r.dir = t || "auto";
    const a = p.split(/\r\n?|\n/);
    for (let o = 0, l = a.length; o < l; ++o) {
      const h = a[o];
      r.append(document.createTextNode(h)), o < l - 1 && r.append(document.createElement("br"));
    }
    i.append(r);
  } else
    ep.render({
      xfaHtml: p,
      div: i,
      intent: "richText"
    });
  i.firstElementChild.classList.add("richText", e), s.append(i);
}
function xb(p) {
  const t = new Path2D();
  if (!p)
    return t;
  for (let e = 0, s = p.length; e < s; )
    switch (p[e++]) {
      case Oh.moveTo:
        t.moveTo(p[e++], p[e++]);
        break;
      case Oh.lineTo:
        t.lineTo(p[e++], p[e++]);
        break;
      case Oh.curveTo:
        t.bezierCurveTo(p[e++], p[e++], p[e++], p[e++], p[e++], p[e++]);
        break;
      case Oh.quadraticCurveTo:
        t.quadraticCurveTo(p[e++], p[e++], p[e++], p[e++]);
        break;
      case Oh.closePath:
        t.closePath();
        break;
      default:
        X(`Unrecognized drawing path operator: ${p[e - 1]}`);
        break;
    }
  return t;
}
var $n, zn, Ss, Es, Ec, Vn, Jo, Zo, Cc, Sf, _b, be, Tb, kb, Vo, Hh;
const Wi = class Wi {
  constructor(t) {
    g(this, be);
    g(this, $n, null);
    g(this, zn, null);
    g(this, Ss);
    g(this, Es, null);
    g(this, Ec, null);
    g(this, Vn, null);
    g(this, Jo, null);
    g(this, Zo, null);
    u(this, Ss, t), n(Wi, Cc) || u(Wi, Cc, Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button",
      signature: "pdfjs-editor-remove-signature-button"
    }));
  }
  render() {
    const t = u(this, $n, document.createElement("div"));
    t.classList.add("editToolbar", "hidden"), t.setAttribute("role", "toolbar");
    const e = n(this, Ss)._uiManager._signal;
    e instanceof AbortSignal && !e.aborted && (t.addEventListener("contextmenu", Us, {
      signal: e
    }), t.addEventListener("pointerdown", b(Wi, Sf, _b), {
      signal: e
    }));
    const s = u(this, Es, document.createElement("div"));
    s.className = "buttons", t.append(s);
    const i = n(this, Ss).toolbarPosition;
    if (i) {
      const {
        style: r
      } = t, a = n(this, Ss)._uiManager.direction === "ltr" ? 1 - i[0] : i[0];
      r.insetInlineEnd = `${100 * a}%`, r.top = `calc(${100 * i[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return t;
  }
  get div() {
    return n(this, $n);
  }
  hide() {
    var t;
    n(this, $n).classList.add("hidden"), (t = n(this, zn)) == null || t.hideDropdown();
  }
  show() {
    var t, e;
    n(this, $n).classList.remove("hidden"), (t = n(this, Ec)) == null || t.shown(), (e = n(this, Vn)) == null || e.shown();
  }
  addDeleteButton() {
    const {
      editorType: t,
      _uiManager: e
    } = n(this, Ss), s = document.createElement("button");
    s.classList.add("basic", "deleteButton"), s.tabIndex = 0, s.setAttribute("data-l10n-id", n(Wi, Cc)[t]), b(this, be, Vo).call(this, s) && s.addEventListener("click", (i) => {
      e.delete();
    }, {
      signal: e._signal
    }), n(this, Es).append(s);
  }
  async addAltText(t) {
    const e = await t.render();
    b(this, be, Vo).call(this, e), n(this, Es).append(e, n(this, be, Hh)), u(this, Ec, t);
  }
  addComment(t, e = null) {
    if (n(this, Vn))
      return;
    const s = t.renderForToolbar();
    if (!s)
      return;
    b(this, be, Vo).call(this, s);
    const i = u(this, Jo, n(this, be, Hh));
    e ? (n(this, Es).insertBefore(s, e), n(this, Es).insertBefore(i, e)) : n(this, Es).append(s, i), u(this, Vn, t), t.toolbar = this;
  }
  addColorPicker(t) {
    if (n(this, zn))
      return;
    u(this, zn, t);
    const e = t.renderButton();
    b(this, be, Vo).call(this, e), n(this, Es).append(e, n(this, be, Hh));
  }
  async addEditSignatureButton(t) {
    const e = u(this, Zo, await t.renderEditButton(n(this, Ss)));
    e && (b(this, be, Vo).call(this, e), n(this, Es).append(e, n(this, be, Hh)));
  }
  removeButton(t) {
    var e, s;
    switch (t) {
      case "comment":
        (e = n(this, Vn)) == null || e.removeToolbarCommentButton(), u(this, Vn, null), (s = n(this, Jo)) == null || s.remove(), u(this, Jo, null);
        break;
    }
  }
  async addButton(t, e) {
    switch (t) {
      case "colorPicker":
        e && this.addColorPicker(e);
        break;
      case "altText":
        e && await this.addAltText(e);
        break;
      case "editSignature":
        e && await this.addEditSignatureButton(e);
        break;
      case "delete":
        this.addDeleteButton();
        break;
      case "comment":
        e && this.addComment(e);
        break;
    }
  }
  async addButtonBefore(t, e, s) {
    if (!e && t === "comment")
      return;
    const i = n(this, Es).querySelector(s);
    i && t === "comment" && this.addComment(e, i);
  }
  updateEditSignatureButton(t) {
    n(this, Zo) && (n(this, Zo).title = t);
  }
  remove() {
    var t;
    n(this, $n).remove(), (t = n(this, zn)) == null || t.destroy(), u(this, zn, null);
  }
};
$n = new WeakMap(), zn = new WeakMap(), Ss = new WeakMap(), Es = new WeakMap(), Ec = new WeakMap(), Vn = new WeakMap(), Jo = new WeakMap(), Zo = new WeakMap(), Cc = new WeakMap(), Sf = new WeakSet(), _b = function(t) {
  t.stopPropagation();
}, be = new WeakSet(), Tb = function(t) {
  n(this, Ss)._focusEventsAllowed = !1, Kt(t);
}, kb = function(t) {
  n(this, Ss)._focusEventsAllowed = !0, Kt(t);
}, Vo = function(t) {
  const e = n(this, Ss)._uiManager._signal;
  return !(e instanceof AbortSignal) || e.aborted ? !1 : (t.addEventListener("focusin", b(this, be, Tb).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("focusout", b(this, be, kb).bind(this), {
    capture: !0,
    signal: e
  }), t.addEventListener("contextmenu", Us, {
    signal: e
  }), !0);
}, Hh = function() {
  const t = document.createElement("div");
  return t.className = "divider", t;
}, g(Wi, Sf), g(Wi, Cc, null);
let Mp = Wi;
var xc, ra, di, On, Pb, Mb, Dp;
class hw {
  constructor(t) {
    g(this, On);
    g(this, xc, null);
    g(this, ra, null);
    g(this, di);
    u(this, di, t);
  }
  show(t, e, s) {
    const [i, r] = b(this, On, Mb).call(this, e, s), {
      style: a
    } = n(this, ra) || u(this, ra, b(this, On, Pb).call(this));
    t.append(n(this, ra)), a.insetInlineEnd = `${100 * i}%`, a.top = `calc(${100 * r}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    n(this, ra).remove();
  }
}
xc = new WeakMap(), ra = new WeakMap(), di = new WeakMap(), On = new WeakSet(), Pb = function() {
  const t = u(this, ra, document.createElement("div"));
  t.className = "editToolbar", t.setAttribute("role", "toolbar"), t.dir = n(this, di).direction;
  const e = n(this, di)._signal;
  e instanceof AbortSignal && !e.aborted && t.addEventListener("contextmenu", Us, {
    signal: e
  });
  const s = u(this, xc, document.createElement("div"));
  return s.className = "buttons", t.append(s), n(this, di).hasCommentManager() && b(this, On, Dp).call(this, "commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", () => {
    n(this, di).commentSelection("floating_button");
  }), b(this, On, Dp).call(this, "highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", () => {
    n(this, di).highlightSelection("floating_button");
  }), t;
}, Mb = function(t, e) {
  let s = 0, i = 0;
  for (const r of t) {
    const a = r.y + r.height;
    if (a < s)
      continue;
    const o = r.x + (e ? r.width : 0);
    if (a > s) {
      i = o, s = a;
      continue;
    }
    e ? o > i && (i = o) : o < i && (i = o);
  }
  return [e ? 1 - i : i, s];
}, Dp = function(t, e, s, i) {
  const r = document.createElement("button");
  r.classList.add("basic", t), r.tabIndex = 0, r.setAttribute("data-l10n-id", e);
  const a = document.createElement("span");
  r.append(a), a.className = "visuallyHidden", a.setAttribute("data-l10n-id", s);
  const o = n(this, di)._signal;
  o instanceof AbortSignal && !o.aborted && (r.addEventListener("contextmenu", Us, {
    signal: o
  }), r.addEventListener("click", i, {
    signal: o
  })), n(this, xc).append(r);
};
const cw = "2837668c-d334-48d1-ba74-aa7deba483da", Ap = Object.freeze({
  internal: cw
});
function Db(p, t, e) {
  for (const s of e)
    t.addEventListener(s, p[s].bind(p));
}
var aa, oa, tl, la;
const ct = class ct {
  static initializeAndAddPointerId(t) {
    (n(ct, oa) || u(ct, oa, /* @__PURE__ */ new Set())).add(t);
  }
  static setPointer(t, e) {
    n(ct, aa) || u(ct, aa, e), n(ct, la) ?? u(ct, la, t);
  }
  static setTimeStamp(t) {
    u(ct, tl, t);
  }
  static isSamePointerId(t) {
    return n(ct, aa) === t;
  }
  static isSamePointerIdOrRemove(t) {
    var e;
    return n(ct, aa) === t ? !0 : ((e = n(ct, oa)) == null || e.delete(t), !1);
  }
  static isSamePointerType(t) {
    return n(ct, la) === t;
  }
  static isInitializedAndDifferentPointerType(t) {
    return n(ct, la) !== null && !ct.isSamePointerType(t);
  }
  static isSameTimeStamp(t) {
    return n(ct, tl) === t;
  }
  static isUsingMultiplePointers() {
    var t;
    return ((t = n(ct, oa)) == null ? void 0 : t.size) >= 1;
  }
  static clearPointerType() {
    u(ct, la, null);
  }
  static clearPointerIds() {
    u(ct, aa, NaN), u(ct, oa, null);
  }
  static clearTimeStamp() {
    u(ct, tl, NaN);
  }
};
aa = new WeakMap(), oa = new WeakMap(), tl = new WeakMap(), la = new WeakMap(), g(ct, aa, NaN), g(ct, oa, null), g(ct, tl, NaN), g(ct, la, null);
let we = ct;
var Ef;
class dw {
  constructor() {
    g(this, Ef, 0);
  }
  get id() {
    return `${Ph}${yt(this, Ef)._++}`;
  }
}
Ef = new WeakMap();
var el, _c, ve, sl, xu;
const Mm = class Mm {
  constructor() {
    g(this, sl);
    g(this, el, bm());
    g(this, _c, 0);
    g(this, ve, null);
  }
  static get _isSVGFittingCanvas() {
    const t = `data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="${Re}"><rect width="1" height="1" style="fill:red;"/></svg>`, s = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), i = new Image();
    i.src = t;
    const r = i.decode().then(() => (s.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(s.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return R(this, "_isSVGFittingCanvas", r);
  }
  async getFromFile(t) {
    const {
      lastModified: e,
      name: s,
      size: i,
      type: r
    } = t;
    return b(this, sl, xu).call(this, `${e}_${s}_${i}_${r}`, t);
  }
  async getFromUrl(t) {
    return b(this, sl, xu).call(this, t, t);
  }
  async getFromBlob(t, e) {
    const s = await e;
    return b(this, sl, xu).call(this, t, s);
  }
  async getFromId(t) {
    n(this, ve) || u(this, ve, /* @__PURE__ */ new Map());
    const e = n(this, ve).get(t);
    if (!e)
      return null;
    if (e.bitmap)
      return e.refCounter += 1, e;
    if (e.file)
      return this.getFromFile(e.file);
    if (e.blobPromise) {
      const {
        blobPromise: s
      } = e;
      return delete e.blobPromise, this.getFromBlob(e.id, s);
    }
    return this.getFromUrl(e.url);
  }
  getFromCanvas(t, e) {
    n(this, ve) || u(this, ve, /* @__PURE__ */ new Map());
    let s = n(this, ve).get(t);
    if (s != null && s.bitmap)
      return s.refCounter += 1, s;
    const i = new OffscreenCanvas(e.width, e.height);
    return i.getContext("2d").drawImage(e, 0, 0), s = {
      bitmap: i.transferToImageBitmap(),
      id: `image_${n(this, el)}_${yt(this, _c)._++}`,
      refCounter: 1,
      isSvg: !1
    }, n(this, ve).set(t, s), n(this, ve).set(s.id, s), s;
  }
  getSvgUrl(t) {
    const e = n(this, ve).get(t);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    var i;
    n(this, ve) || u(this, ve, /* @__PURE__ */ new Map());
    const e = n(this, ve).get(t);
    if (!e || (e.refCounter -= 1, e.refCounter !== 0))
      return;
    const {
      bitmap: s
    } = e;
    if (!e.url && !e.file) {
      const r = new OffscreenCanvas(s.width, s.height);
      r.getContext("bitmaprenderer").transferFromImageBitmap(s), e.blobPromise = r.convertToBlob();
    }
    (i = s.close) == null || i.call(s), e.bitmap = null;
  }
  isValidId(t) {
    return t.startsWith(`image_${n(this, el)}_`);
  }
};
el = new WeakMap(), _c = new WeakMap(), ve = new WeakMap(), sl = new WeakSet(), xu = async function(t, e) {
  n(this, ve) || u(this, ve, /* @__PURE__ */ new Map());
  let s = n(this, ve).get(t);
  if (s === null)
    return null;
  if (s != null && s.bitmap)
    return s.refCounter += 1, s;
  try {
    s || (s = {
      bitmap: null,
      id: `image_${n(this, el)}_${yt(this, _c)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let i;
    if (typeof e == "string" ? (s.url = e, i = await sp(e, "blob")) : e instanceof File ? i = s.file = e : e instanceof Blob && (i = e), i.type === "image/svg+xml") {
      const r = Mm._isSVGFittingCanvas, a = new FileReader(), o = new Image(), l = new Promise((h, c) => {
        o.onload = () => {
          s.bitmap = o, s.isSvg = !0, h();
        }, a.onload = async () => {
          const d = s.svgUrl = a.result;
          o.src = await r ? `${d}#svgView(preserveAspectRatio(none))` : d;
        }, o.onerror = a.onerror = c;
      });
      a.readAsDataURL(i), await l;
    } else
      s.bitmap = await createImageBitmap(i);
    s.refCounter = 1;
  } catch (i) {
    X(i), s = null;
  }
  return n(this, ve).set(t, s), s && n(this, ve).set(s.id, s), s;
};
let Ip = Mm;
var zt, jn, Tc, Mt;
class uw {
  constructor(t = 128) {
    g(this, zt, []);
    g(this, jn, !1);
    g(this, Tc);
    g(this, Mt, -1);
    u(this, Tc, t);
  }
  add({
    cmd: t,
    undo: e,
    post: s,
    mustExec: i,
    type: r = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: o = !1
  }) {
    if (i && t(), n(this, jn))
      return;
    const l = {
      cmd: t,
      undo: e,
      post: s,
      type: r
    };
    if (n(this, Mt) === -1) {
      n(this, zt).length > 0 && (n(this, zt).length = 0), u(this, Mt, 0), n(this, zt).push(l);
      return;
    }
    if (a && n(this, zt)[n(this, Mt)].type === r) {
      o && (l.undo = n(this, zt)[n(this, Mt)].undo), n(this, zt)[n(this, Mt)] = l;
      return;
    }
    const h = n(this, Mt) + 1;
    h === n(this, Tc) ? n(this, zt).splice(0, 1) : (u(this, Mt, h), h < n(this, zt).length && n(this, zt).splice(h)), n(this, zt).push(l);
  }
  undo() {
    if (n(this, Mt) === -1)
      return;
    u(this, jn, !0);
    const {
      undo: t,
      post: e
    } = n(this, zt)[n(this, Mt)];
    t(), e == null || e(), u(this, jn, !1), u(this, Mt, n(this, Mt) - 1);
  }
  redo() {
    if (n(this, Mt) < n(this, zt).length - 1) {
      u(this, Mt, n(this, Mt) + 1), u(this, jn, !0);
      const {
        cmd: t,
        post: e
      } = n(this, zt)[n(this, Mt)];
      t(), e == null || e(), u(this, jn, !1);
    }
  }
  hasSomethingToUndo() {
    return n(this, Mt) !== -1;
  }
  hasSomethingToRedo() {
    return n(this, Mt) < n(this, zt).length - 1;
  }
  cleanType(t) {
    if (n(this, Mt) !== -1) {
      for (let e = n(this, Mt); e >= 0; e--)
        if (n(this, zt)[e].type !== t) {
          n(this, zt).splice(e + 1, n(this, Mt) - e), u(this, Mt, e);
          return;
        }
      n(this, zt).length = 0, u(this, Mt, -1);
    }
  }
  destroy() {
    u(this, zt, null);
  }
}
zt = new WeakMap(), jn = new WeakMap(), Tc = new WeakMap(), Mt = new WeakMap();
var Ih, Ib, Lb;
const Ge = class Ge {
  constructor(t) {
    var s;
    this.callbacks = /* @__PURE__ */ new Map();
    const {
      isMac: e
    } = ot.platform;
    for (const [i, r, a = {}] of t) {
      const o = i.some((l) => l.startsWith("mac+"));
      for (const l of i) {
        let h = l;
        if (o) {
          const f = l.startsWith("mac+");
          if (e !== f)
            continue;
          f && (h = l.slice(4));
        }
        const [c, d] = b(s = Ge, Ih, Ib).call(s, h);
        c !== null && this.callbacks.getOrInsertComputed(c, Ho).push({
          callback: r,
          options: a,
          modifiers: d
        });
      }
    }
  }
  exec(t, e) {
    var c;
    let s = this.callbacks.get(e.key);
    if (!s) {
      if (/^[a-z]$/i.test(e.key))
        return;
      const d = b(c = Ge, Ih, Lb).call(c, e.code);
      if (d === null || d === e.key || (s = this.callbacks.get(d), !s))
        return;
    }
    const i = (e.altKey ? Ge.ALT : 0) | (e.ctrlKey ? Ge.CTRL : 0) | (e.metaKey ? Ge.META : 0) | (e.shiftKey ? Ge.SHIFT : 0), r = s.find((d) => d.modifiers === i);
    if (!r)
      return;
    const {
      callback: a,
      options: {
        bubbles: o = !1,
        args: l = [],
        checker: h = null
      }
    } = r;
    h && !h(t, e) || (a.bind(t, ...l, e)(), o || Kt(e));
  }
};
Ih = new WeakSet(), Ib = function(t) {
  let e = null, s = 0;
  for (let i of t.split("+")) {
    if (i = i.trim(), !i)
      continue;
    const r = i.toUpperCase(), a = Ge[r];
    if (a) {
      s |= a;
      continue;
    }
    if (e !== null) {
      X(`KeyboardManager: multiple keys in shortcut "${t}"`);
      break;
    }
    e = r === "SPACE" ? " " : i;
  }
  return e === null && X(`KeyboardManager: no key found in shortcut "${t}"`), [e, s];
}, Lb = function(t) {
  var s;
  const e = /^(?:Key([A-Z])|(?:Digit|Numpad)(\d))$/.exec(t);
  return e ? ((s = e[1]) == null ? void 0 : s.toLowerCase()) ?? e[2] : null;
}, g(Ge, Ih), T(Ge, "ALT", 1), T(Ge, "CTRL", 2), T(Ge, "META", 4), T(Ge, "SHIFT", 8);
let Fo = Ge;
const Cf = class Cf {
  get _colors() {
    const t = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return ow(t), R(this, "_colors", t);
  }
  convert(t) {
    const e = Fh(t);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [s, i] of this._colors)
      if (i.every((r, a) => r === e[a]))
        return Cf._colorsMapping.get(s);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? I.makeHexColor(...e) : t;
  }
};
T(Cf, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
let Lp = Cf;
var il, Je, nl, Ct, Dt, rl, al, ol, Se, ll, Cs, ne, Wn, Xn, Yn, Kn, ui, xs, ha, kc, Pc, hl, Mc, fi, qn, cl, Qn, pi, xf, Yi, dl, Dc, Jn, ca, ul, Zn, Ic, jt, dt, Ki, tr, er, Lc, fl, Rc, sr, gi, qi, Fc, Oc, _s, F, _u, Rp, Rb, Fb, Uh, Ob, Nb, Bb, Fp, Hb, Ub, Gb, $b, Te, Vi, zb, Vb, Op, jb, Gh, Np;
const Ko = class Ko {
  constructor(t, e, s, i, r, a, o, l, h, c, d, f, m, y, A, w) {
    g(this, F);
    g(this, il, new AbortController());
    g(this, Je, null);
    g(this, nl, null);
    g(this, Ct, /* @__PURE__ */ new Map());
    g(this, Dt, /* @__PURE__ */ new Map());
    g(this, rl, null);
    g(this, al, null);
    g(this, ol, null);
    g(this, Se, null);
    g(this, ll, null);
    g(this, Cs, new uw());
    g(this, ne, null);
    g(this, Wn, null);
    g(this, Xn, null);
    g(this, Yn, 0);
    g(this, Kn, /* @__PURE__ */ new Set());
    g(this, ui, null);
    g(this, xs, null);
    g(this, ha, /* @__PURE__ */ new Set());
    T(this, "_editorUndoBar", null);
    g(this, kc, !1);
    g(this, Pc, !1);
    g(this, hl, !1);
    g(this, Mc, null);
    g(this, fi, null);
    g(this, qn, null);
    g(this, cl, null);
    g(this, Qn, !1);
    g(this, pi, null);
    g(this, xf, new dw());
    g(this, Yi, !1);
    g(this, dl, !1);
    g(this, Dc, !1);
    g(this, Jn, null);
    g(this, ca, null);
    g(this, ul, null);
    g(this, Zn, null);
    g(this, Ic, null);
    g(this, jt, W.NONE);
    g(this, dt, /* @__PURE__ */ new Set());
    g(this, Ki, null);
    g(this, tr, null);
    g(this, er, null);
    g(this, Lc, null);
    g(this, fl, null);
    g(this, Rc, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    g(this, sr, [0, 0]);
    g(this, gi, null);
    g(this, qi, null);
    g(this, Fc, null);
    g(this, Oc, null);
    g(this, _s, null);
    const v = this._signal = n(this, il).signal;
    u(this, qi, t), u(this, Fc, e), u(this, Oc, s), u(this, ol, i), u(this, ne, r), u(this, tr, a), u(this, fl, l), this._eventBus = o;
    const S = {
      signal: v,
      ...Ap
    };
    o.on("editingaction", this.onEditingAction.bind(this), S), o.on("pagechanging", this.onPageChanging.bind(this), S), o.on("scalechanging", this.onScaleChanging.bind(this), S), o.on("rotationchanging", this.onRotationChanging.bind(this), S), o.on("setpreference", this.onSetPreference.bind(this), S), o.on("switchannotationeditorparams", (E) => this.updateParams(E.type, E.value), S), window.addEventListener("pointerdown", () => {
      u(this, dl, !0);
    }, {
      capture: !0,
      signal: v
    }), window.addEventListener("pointerup", () => {
      u(this, dl, !1);
    }, {
      capture: !0,
      signal: v
    }), window.addEventListener("beforeunload", this.endCurrentEditing.bind(this), {
      capture: !0,
      signal: v
    }), b(this, F, Ob).call(this), b(this, F, $b).call(this), b(this, F, Fp).call(this), u(this, Se, l.annotationStorage), u(this, Mc, l.filterFactory), u(this, er, h), u(this, cl, c || null), u(this, kc, d), u(this, Pc, f), u(this, hl, m), u(this, Ic, y || null), this.viewParameters = {
      realScale: Fn.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1, this._editorUndoBar = A || null, this._supportsPinchToZoom = w !== !1, r == null || r.setSidebarUiManager(this);
  }
  static get _keyboardManager() {
    const t = Ko.prototype, e = (a) => n(a, qi).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && a.hasSomethingToControl(), s = (a, {
      target: o
    }) => {
      if (o instanceof HTMLInputElement) {
        const {
          type: l
        } = o;
        return l !== "text" && l !== "number";
      }
      return !0;
    }, i = this.TRANSLATE_SMALL, r = this.TRANSLATE_BIG;
    return R(this, "_keyboardManager", new Fo([[["ctrl+a", "mac+meta+a"], t.selectAll, {
      checker: s
    }], [["ctrl+z", "mac+meta+z"], t.undo, {
      checker: s
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], t.redo, {
      checker: s
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], t.delete, {
      checker: s
    }], [["Enter"], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && n(a, qi).contains(o) && !a.isEnterHandled
    }], [["Space"], t.addNewEditorFromKeyboard, {
      checker: (a, {
        target: o
      }) => !(o instanceof HTMLButtonElement) && n(a, qi).contains(document.activeElement)
    }], [["Escape"], t.unselectAll], [["ArrowLeft"], t.translateSelectedEditors, {
      args: [-i, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t.translateSelectedEditors, {
      args: [-r, 0],
      checker: e
    }], [["ArrowRight"], t.translateSelectedEditors, {
      args: [i, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t.translateSelectedEditors, {
      args: [r, 0],
      checker: e
    }], [["ArrowUp"], t.translateSelectedEditors, {
      args: [0, -i],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t.translateSelectedEditors, {
      args: [0, -r],
      checker: e
    }], [["ArrowDown"], t.translateSelectedEditors, {
      args: [0, i],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t.translateSelectedEditors, {
      args: [0, r],
      checker: e
    }]]));
  }
  destroy() {
    var t, e, s, i, r, a, o, l, h;
    (t = n(this, _s)) == null || t.resolve(), u(this, _s, null), (e = n(this, il)) == null || e.abort(), u(this, il, null), this._signal = null;
    for (const c of n(this, Dt).values())
      c.destroy();
    n(this, Dt).clear(), n(this, Ct).clear(), n(this, ha).clear(), (s = n(this, Zn)) == null || s.clear(), u(this, Je, null), n(this, dt).clear(), n(this, Cs).destroy(), (i = n(this, ol)) == null || i.destroy(), (r = n(this, ne)) == null || r.destroy(), (a = n(this, tr)) == null || a.destroy(), (o = n(this, pi)) == null || o.hide(), u(this, pi, null), (l = n(this, ul)) == null || l.destroy(), u(this, ul, null), u(this, nl, null), n(this, fi) && (clearTimeout(n(this, fi)), u(this, fi, null)), n(this, gi) && (clearTimeout(n(this, gi)), u(this, gi, null)), (h = this._editorUndoBar) == null || h.destroy(), u(this, fl, null);
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return n(this, Ic);
  }
  get useNewAltTextFlow() {
    return n(this, Pc);
  }
  get useNewAltTextWhenAddingImage() {
    return n(this, hl);
  }
  get hcmFilter() {
    return R(this, "hcmFilter", n(this, er) ? n(this, Mc).addHCMFilter(n(this, er).foreground, n(this, er).background) : "none");
  }
  get direction() {
    return R(this, "direction", getComputedStyle(n(this, qi)).direction);
  }
  get _highlightColors() {
    return R(this, "_highlightColors", n(this, cl) ? new Map(n(this, cl).split(",").map((t) => (t = t.split("=").map((e) => e.trim()), t[1] = t[1].toUpperCase(), t))) : null);
  }
  get highlightColors() {
    const {
      _highlightColors: t
    } = this;
    if (!t)
      return R(this, "highlightColors", null);
    const e = /* @__PURE__ */ new Map(), s = !!n(this, er);
    for (const [i, r] of t) {
      const a = i.endsWith("_HCM");
      if (s && a) {
        e.set(i.replace("_HCM", ""), r);
        continue;
      }
      !s && !a && e.set(i, r);
    }
    return R(this, "highlightColors", e);
  }
  get highlightColorNames() {
    return R(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t) => t.reverse())) : null);
  }
  getNonHCMColor(t) {
    if (!this._highlightColors)
      return t;
    const e = this.highlightColorNames.get(t);
    return this._highlightColors.get(e) || t;
  }
  getNonHCMColorName(t) {
    return this.highlightColorNames.get(t) || t;
  }
  setCurrentDrawingSession(t) {
    t ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), u(this, Xn, t);
  }
  setMainHighlightColorPicker(t) {
    u(this, ul, t);
  }
  editAltText(t, e = !1) {
    var s;
    (s = n(this, ol)) == null || s.editAltText(this, t, e);
  }
  hasCommentManager() {
    return !!n(this, ne);
  }
  editComment(t, e, s, i) {
    var r;
    (r = n(this, ne)) == null || r.showDialog(this, t, e, s, i);
  }
  selectComment(t, e) {
    const s = n(this, Dt).get(t), i = s == null ? void 0 : s.getEditorByUID(e);
    i == null || i.toggleComment(!0, !0);
  }
  updateComment(t) {
    var e;
    (e = n(this, ne)) == null || e.updateComment(t.getData());
  }
  updatePopupColor(t) {
    var e;
    (e = n(this, ne)) == null || e.updatePopupColor(t);
  }
  removeComment(t) {
    var e;
    (e = n(this, ne)) == null || e.removeComments([t.uid]);
  }
  deleteComment(t, e) {
    const s = () => {
      t.comment = e;
    }, i = () => {
      var r;
      (r = this._editorUndoBar) == null || r.show(s, "comment"), this.toggleComment(null), t.comment = null;
    };
    this.addCommands({
      cmd: i,
      undo: s,
      mustExec: !0
    });
  }
  toggleComment(t, e, s = void 0) {
    var i;
    (i = n(this, ne)) == null || i.toggleCommentPopup(t, e, s);
  }
  makeCommentColor(t, e) {
    var s;
    return t && ((s = n(this, ne)) == null ? void 0 : s.makeCommentColor(t, e)) || null;
  }
  getCommentDialogElement() {
    var t;
    return ((t = n(this, ne)) == null ? void 0 : t.dialogElement) || null;
  }
  async waitForEditorsRendered(t) {
    if (n(this, Dt).has(t - 1))
      return;
    const {
      resolve: e,
      promise: s
    } = Promise.withResolvers(), i = (r) => {
      r.pageNumber === t && (this._eventBus.off("editorsrendered", i), e());
    };
    this._eventBus.on("editorsrendered", i, Ap), await s;
  }
  getSignature(t) {
    var e;
    (e = n(this, tr)) == null || e.getSignature({
      uiManager: this,
      editor: t
    });
  }
  get signatureManager() {
    return n(this, tr);
  }
  switchToMode(t, e) {
    this._eventBus.on("annotationeditormodechanged", e, {
      once: !0,
      signal: this._signal,
      ...Ap
    }), this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode: t
    });
  }
  setPreference(t, e) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name: t,
      value: e
    });
  }
  onSetPreference({
    name: t,
    value: e
  }) {
    switch (t) {
      case "enableNewAltTextWhenAddingImage":
        u(this, hl, e);
        break;
    }
  }
  onPageChanging({
    pageNumber: t
  }) {
    u(this, Yn, t - 1);
  }
  deletePage(t) {
    for (const e of this.getEditors(t))
      e.remove();
    n(this, Dt).delete(t), n(this, Yn) === t && u(this, Yn, 0);
  }
  focusMainContainer() {
    n(this, qi).focus();
  }
  findParent(t, e) {
    for (const s of n(this, Dt).values()) {
      const {
        x: i,
        y: r,
        width: a,
        height: o
      } = s.div.getBoundingClientRect();
      if (t >= i && t <= i + a && e >= r && e <= r + o)
        return s;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    n(this, Fc).classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    n(this, ha).add(t);
  }
  removeShouldRescale(t) {
    n(this, ha).delete(t);
  }
  onScaleChanging({
    scale: t
  }) {
    var e;
    this.commitOrRemove(), this.viewParameters.realScale = t * Fn.PDF_TO_CSS_UNITS;
    for (const s of n(this, ha))
      s.onScaleChanging();
    (e = n(this, Xn)) == null || e.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: t
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = t;
  }
  highlightSelection(t = "", e = !1) {
    const s = document.getSelection();
    if (!s || s.isCollapsed)
      return;
    const {
      anchorNode: i,
      anchorOffset: r,
      focusNode: a,
      focusOffset: o
    } = s, l = s.toString(), c = b(this, F, _u).call(this, s).closest(".textLayer"), d = this.getSelectionBoxes(c);
    if (!d)
      return;
    s.empty();
    const f = b(this, F, Rp).call(this, c), m = n(this, jt) === W.NONE, y = () => {
      const A = f == null ? void 0 : f.createAndAddNewEditor({
        x: 0,
        y: 0
      }, !1, {
        methodOfCreation: t,
        boxes: d,
        anchorNode: i,
        anchorOffset: r,
        focusNode: a,
        focusOffset: o,
        text: l
      });
      m && this.showAllEditors("highlight", !0, !0), e && (A == null || A.editComment());
    };
    if (m) {
      this.switchToMode(W.HIGHLIGHT, y);
      return;
    }
    y();
  }
  commentSelection(t = "") {
    this.highlightSelection(t, !0);
  }
  endCurrentEditing() {
    var t;
    this.commitOrRemove(), (t = this.currentLayer) == null || t.endDrawingSession(!1);
  }
  getAndRemoveDataFromAnnotationStorage(t) {
    if (!n(this, Se))
      return null;
    const e = `${Ph}${t}`, s = n(this, Se).getRawValue(e);
    return s && n(this, Se).remove(e), s;
  }
  addToAnnotationStorage(t) {
    !t.isEmpty() && n(this, Se) && !n(this, Se).has(t.id) && n(this, Se).setValue(t.id, t);
  }
  a11yAlert(t, e = null) {
    const s = n(this, Oc);
    s && (s.setAttribute("data-l10n-id", t), e ? s.setAttribute("data-l10n-args", JSON.stringify(e)) : s.removeAttribute("data-l10n-args"));
  }
  blur() {
    if (this.isShiftKeyDown = !1, n(this, Qn) && (u(this, Qn, !1), b(this, F, Uh).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: t
    } = document;
    for (const e of n(this, dt))
      if (e.div.contains(t)) {
        u(this, ca, [e, t]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!n(this, ca))
      return;
    const [t, e] = n(this, ca);
    u(this, ca, null), e.addEventListener("focusin", () => {
      t._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    b(this, F, Fp).call(this), this.setEditingState(!0);
  }
  removeEditListeners() {
    b(this, F, Hb).call(this), this.setEditingState(!1);
  }
  dragOver(t) {
    for (const {
      type: e
    } of t.dataTransfer.items)
      for (const s of n(this, xs))
        if (s.isHandlingMimeForPasting(e)) {
          t.dataTransfer.dropEffect = "copy", t.preventDefault();
          return;
        }
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const s of n(this, xs))
        if (s.isHandlingMimeForPasting(e.type)) {
          s.paste(e, this.currentLayer), t.preventDefault();
          return;
        }
  }
  copy(t) {
    var s;
    if (t.preventDefault(), (s = n(this, Je)) == null || s.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const i of n(this, dt)) {
      const r = i.serialize(!0);
      r && e.push(r);
    }
    e.length !== 0 && t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(t) {
    this.copy(t), this.delete();
  }
  async paste(t) {
    t.preventDefault();
    const {
      clipboardData: e
    } = t;
    for (const r of e.items)
      for (const a of n(this, xs))
        if (a.isHandlingMimeForPasting(r.type)) {
          a.paste(r, this.currentLayer);
          return;
        }
    let s = e.getData("application/pdfjs");
    if (!s)
      return;
    try {
      s = JSON.parse(s);
    } catch (r) {
      X(`paste: "${r.message}".`);
      return;
    }
    if (!Array.isArray(s))
      return;
    this.unselectAll();
    const i = this.currentLayer;
    try {
      const r = [];
      for (const l of s) {
        const h = await i.deserialize(l);
        if (!h)
          return;
        r.push(h);
      }
      const a = () => {
        for (const l of r)
          b(this, F, Op).call(this, l);
        b(this, F, Np).call(this, r);
      }, o = () => {
        for (const l of r)
          l.remove();
      };
      this.addCommands({
        cmd: a,
        undo: o,
        mustExec: !0
      });
    } catch (r) {
      X(`paste: "${r.message}".`);
    }
  }
  keydown(t) {
    !this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !0), n(this, jt) !== W.NONE && !this.isEditorHandlingKeyboard && Ko._keyboardManager.exec(this, t);
  }
  keyup(t) {
    this.isShiftKeyDown && t.key === "Shift" && (this.isShiftKeyDown = !1, n(this, Qn) && (u(this, Qn, !1), b(this, F, Uh).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: t
  }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
      case "commentSelection":
        this.commentSelection("context_menu");
        break;
    }
  }
  updatePageIndex(t, e) {
    for (const i of n(this, al).get(t) || [])
      i.pageIndex = e;
    const s = n(this, rl).get(t);
    s && (s.pageIndex = e, n(this, Dt).set(e, s), n(this, Yi) ? s.enable() : s.disable());
  }
  startUpdatePages() {
    u(this, rl, new Map(n(this, Dt))), n(this, Dt).clear();
    const t = u(this, al, /* @__PURE__ */ new Map()), e = (s) => {
      t.getOrInsertComputed(s.pageIndex, Ho).push(s);
    };
    for (const s of n(this, Ct).values())
      e(s);
    for (const [s, i] of n(this, Se))
      s.startsWith(Ph) && !n(this, Ct).has(s) && Number.isInteger(i == null ? void 0 : i.pageIndex) && e(i);
  }
  endUpdatePages() {
    u(this, rl, null), u(this, al, null);
  }
  clonePage(t, e) {
    for (const s of this.getEditors(t)) {
      const i = s.serialize(s.mode !== W.HIGHLIGHT);
      i && (i.pageIndex = e, i.id = this.getId(), i.isClone = !0, delete i.popupRef, n(this, Se).setValue(i.id, i));
    }
  }
  findClonesForPage(t) {
    const e = [], {
      pageIndex: s
    } = t;
    for (const [i, r] of n(this, Se))
      r.pageIndex === s && r.isClone && (n(this, Se).remove(i), e.push(t.deserialize(r).then((a) => {
        a && (a.isClone = !0, t.addOrRebuild(a));
      })));
    return Promise.all(e);
  }
  setEditingState(t) {
    t ? (b(this, F, Nb).call(this), b(this, F, Ub).call(this), b(this, F, Te).call(this, {
      isEditing: n(this, jt) !== W.NONE,
      isEmpty: b(this, F, Gh).call(this),
      hasSomethingToUndo: n(this, Cs).hasSomethingToUndo(),
      hasSomethingToRedo: n(this, Cs).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (b(this, F, Bb).call(this), b(this, F, Gb).call(this), b(this, F, Te).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!n(this, xs)) {
      u(this, xs, t);
      for (const e of n(this, xs))
        b(this, F, Vi).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return n(this, xf).id;
  }
  get currentLayer() {
    return n(this, Dt).get(n(this, Yn));
  }
  getLayer(t) {
    return n(this, Dt).get(t);
  }
  get currentPageIndex() {
    return n(this, Yn);
  }
  addLayer(t) {
    n(this, Dt).set(t.pageIndex, t), n(this, Yi) ? t.enable() : t.disable();
  }
  removeLayer(t) {
    n(this, Dt).delete(t.pageIndex);
  }
  async updateMode(t, e = null, s = !1, i = !1, r = !1, a = !1) {
    var o, l, h, c, d, f;
    if (n(this, jt) !== t && !(n(this, _s) && (await n(this, _s).promise, !n(this, _s)))) {
      if (u(this, _s, Promise.withResolvers()), (o = n(this, Xn)) == null || o.commitOrRemove(), n(this, jt) === W.POPUP && ((l = n(this, ne)) == null || l.hideSidebar()), (h = n(this, ne)) == null || h.destroyPopup(), u(this, jt, t), t === W.NONE) {
        this.setEditingState(!1), b(this, F, Vb).call(this);
        for (const m of n(this, Ct).values())
          m.hideStandaloneCommentButton();
        (c = this._editorUndoBar) == null || c.hide(), this.toggleComment(null), n(this, _s).resolve();
        return;
      }
      for (const m of n(this, Ct).values())
        m.addStandaloneCommentButton();
      t === W.SIGNATURE && await ((d = n(this, tr)) == null ? void 0 : d.loadSignatures()), s && we.clearPointerType(), this.setEditingState(!0), await b(this, F, zb).call(this), this.unselectAll();
      for (const m of n(this, Dt).values())
        m.updateMode(t);
      if (t === W.POPUP) {
        n(this, nl) || u(this, nl, await n(this, fl).getAnnotationsByType(new Set(n(this, xs).map((A) => A._editorType))));
        const m = /* @__PURE__ */ new Set(), y = [];
        for (const A of n(this, Ct).values()) {
          const {
            annotationElementId: w,
            hasComment: v,
            deleted: S
          } = A;
          w && m.add(w), v && !S && y.push(A.getData());
        }
        for (const A of n(this, nl)) {
          const {
            id: w,
            popupRef: v,
            contentsObj: S
          } = A;
          v && (S != null && S.str) && !m.has(w) && !n(this, Kn).has(w) && y.push(A);
        }
        (f = n(this, ne)) == null || f.showSidebar(y);
      }
      if (!e) {
        i && this.addNewEditorFromKeyboard(), n(this, _s).resolve();
        return;
      }
      for (const m of n(this, Ct).values())
        m.uid === e ? (this.setSelected(m), a ? m.editComment() : r ? m.enterInEditMode() : m.focus()) : m.unselect();
      n(this, _s).resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t.mode !== n(this, jt) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      ...t
    });
  }
  updateParams(t, e) {
    if (n(this, xs)) {
      switch (t) {
        case et.CREATE:
          this.currentLayer.addNewEditor(e);
          return;
        case et.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (n(this, Lc) || u(this, Lc, /* @__PURE__ */ new Map())).set(t, e), this.showAllEditors("highlight", e);
          break;
      }
      if (this.hasSelection)
        for (const s of n(this, dt))
          s.updateParams(t, e);
      else
        for (const s of n(this, xs))
          s.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, s = !1) {
    var r;
    for (const a of n(this, Ct).values())
      a.editorType === t && a.show(e);
    (((r = n(this, Lc)) == null ? void 0 : r.get(et.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && b(this, F, Vi).call(this, [[et.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (n(this, Dc) !== t) {
      u(this, Dc, t);
      for (const e of n(this, Dt).values())
        t ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t);
    }
  }
  *getEditors(t) {
    for (const e of n(this, Ct).values())
      e.pageIndex === t && (yield e);
  }
  getEditor(t) {
    return n(this, Ct).get(t);
  }
  addEditor(t) {
    n(this, Ct).set(t.id, t);
  }
  removeEditor(t) {
    var e, s;
    t.div.contains(document.activeElement) && (n(this, fi) && clearTimeout(n(this, fi)), u(this, fi, setTimeout(() => {
      this.focusMainContainer(), u(this, fi, null);
    }, 0))), n(this, Ct).delete(t.id), t.annotationElementId && ((e = n(this, Zn)) == null || e.delete(t.annotationElementId)), this.unselect(t), (!t.annotationElementId || !n(this, Kn).has(t.annotationElementId)) && ((s = n(this, Se)) == null || s.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    n(this, Kn).add(t.annotationElementId), this.addChangedExistingAnnotation(t), t.deleted = !0;
  }
  isDeletedAnnotationElement(t) {
    return n(this, Kn).has(t);
  }
  removeDeletedAnnotationElement(t) {
    n(this, Kn).delete(t.annotationElementId), this.removeChangedExistingAnnotation(t), t.deleted = !1;
  }
  setActiveEditor(t) {
    n(this, Je) !== t && (u(this, Je, t), t && b(this, F, Vi).call(this, t.propertiesToUpdate));
  }
  updateUI(t) {
    n(this, F, jb) === t && b(this, F, Vi).call(this, t.propertiesToUpdate);
  }
  updateUIForDefaultProperties(t) {
    b(this, F, Vi).call(this, t.defaultPropertiesToUpdate);
  }
  toggleSelected(t) {
    if (n(this, dt).has(t)) {
      n(this, dt).delete(t), t.unselect(), b(this, F, Te).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    n(this, dt).add(t), t.select(), b(this, F, Vi).call(this, t.propertiesToUpdate), b(this, F, Te).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(t) {
    var e, s;
    this.updateToolbar({
      mode: t.mode,
      editId: t.uid
    }), (e = n(this, Xn)) == null || e.commitOrRemove();
    for (const i of n(this, dt))
      i !== t && i.unselect();
    (s = n(this, ne)) == null || s.destroyPopup(), n(this, dt).clear(), n(this, dt).add(t), t.select(), b(this, F, Vi).call(this, t.propertiesToUpdate), b(this, F, Te).call(this, {
      hasSelectedEditor: !0
    });
  }
  get firstSelectedEditor() {
    return n(this, dt).values().next().value;
  }
  unselect(t) {
    t.unselect(), n(this, dt).delete(t), b(this, F, Te).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return n(this, dt).size !== 0;
  }
  get isEnterHandled() {
    return n(this, dt).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    var t;
    n(this, Cs).undo(), b(this, F, Te).call(this, {
      hasSomethingToUndo: n(this, Cs).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: b(this, F, Gh).call(this)
    }), (t = this._editorUndoBar) == null || t.hide();
  }
  redo() {
    n(this, Cs).redo(), b(this, F, Te).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: n(this, Cs).hasSomethingToRedo(),
      isEmpty: b(this, F, Gh).call(this)
    });
  }
  addCommands(t) {
    n(this, Cs).add(t), b(this, F, Te).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: b(this, F, Gh).call(this)
    });
  }
  cleanUndoStack(t) {
    n(this, Cs).cleanType(t);
  }
  delete() {
    var r;
    this.commitOrRemove();
    const t = (r = this.currentLayer) == null ? void 0 : r.endDrawingSession(!0);
    if (!this.hasSelection && !t)
      return;
    const e = t ? [t] : [...n(this, dt)], s = () => {
      var a;
      (a = this._editorUndoBar) == null || a.show(i, e.length === 1 ? e[0].editorType : e.length);
      for (const o of e)
        o.remove();
    }, i = () => {
      for (const a of e)
        b(this, F, Op).call(this, a);
    };
    this.addCommands({
      cmd: s,
      undo: i,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var t;
    (t = n(this, Je)) == null || t.commitOrRemove();
  }
  hasSomethingToControl() {
    return n(this, Je) || this.hasSelection;
  }
  selectAll() {
    for (const t of n(this, dt))
      t.commit();
    b(this, F, Np).call(this, n(this, Ct).values());
  }
  unselectAll() {
    var t, e;
    if (!(n(this, Je) && (n(this, Je).commitOrRemove(), n(this, jt) !== W.NONE)) && !((t = n(this, Xn)) != null && t.commitOrRemove()) && ((e = n(this, ne)) == null || e.destroyPopup(), !!this.hasSelection)) {
      for (const s of n(this, dt))
        s.unselect();
      n(this, dt).clear(), b(this, F, Te).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(t, e, s = !1) {
    if (s || this.commitOrRemove(), !this.hasSelection)
      return;
    n(this, sr)[0] += t, n(this, sr)[1] += e;
    const [i, r] = n(this, sr), a = [...n(this, dt)], o = 1e3;
    n(this, gi) && clearTimeout(n(this, gi)), u(this, gi, setTimeout(() => {
      u(this, gi, null), n(this, sr)[0] = n(this, sr)[1] = 0, this.addCommands({
        cmd: () => {
          for (const l of a)
            n(this, Ct).has(l.id) && (l.translateInPage(i, r), l.translationDone());
        },
        undo: () => {
          for (const l of a)
            n(this, Ct).has(l.id) && (l.translateInPage(-i, -r), l.translationDone());
        },
        mustExec: !1
      });
    }, o));
    for (const l of a)
      l.translateInPage(t, e), l.translationDone();
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), u(this, ui, /* @__PURE__ */ new Map());
      for (const t of n(this, dt))
        n(this, ui).set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!n(this, ui))
      return !1;
    this.disableUserSelect(!1);
    const t = n(this, ui);
    u(this, ui, null);
    let e = !1;
    for (const [{
      x: i,
      y: r,
      pageIndex: a
    }, o] of t)
      o.newX = i, o.newY = r, o.newPageIndex = a, e || (e = i !== o.savedX || r !== o.savedY || a !== o.savedPageIndex);
    if (!e)
      return !1;
    const s = (i, r, a, o) => {
      if (n(this, Ct).has(i.id)) {
        const l = n(this, Dt).get(o);
        l ? i._setParentAndPosition(l, r, a) : (i.pageIndex = o, i.x = r, i.y = a);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [i, {
          newX: r,
          newY: a,
          newPageIndex: o
        }] of t)
          s(i, r, a, o);
      },
      undo: () => {
        for (const [i, {
          savedX: r,
          savedY: a,
          savedPageIndex: o
        }] of t)
          s(i, r, a, o);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(t, e) {
    if (n(this, ui))
      for (const s of n(this, ui).keys())
        s.drag(t, e);
  }
  rebuild(t) {
    if (t.parent === null) {
      const e = this.getLayer(t.pageIndex);
      e ? (e.changeParent(t), e.addOrRebuild(t)) : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else
      t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    var t;
    return ((t = this.getActive()) == null ? void 0 : t.shouldGetKeyboardEvents()) || n(this, dt).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(t) {
    return n(this, Je) === t;
  }
  getActive() {
    return n(this, Je);
  }
  getMode() {
    return n(this, jt);
  }
  isEditingMode() {
    return n(this, jt) !== W.NONE;
  }
  get imageManager() {
    return R(this, "imageManager", new Ip());
  }
  getSelectionBoxes(t) {
    if (!t)
      return null;
    const e = document.getSelection();
    for (let h = 0, c = e.rangeCount; h < c; h++)
      if (!t.contains(e.getRangeAt(h).commonAncestorContainer))
        return null;
    const {
      x: s,
      y: i,
      width: r,
      height: a
    } = t.getBoundingClientRect();
    let o;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        o = (h, c, d, f) => ({
          x: (c - i) / a,
          y: 1 - (h + d - s) / r,
          width: f / a,
          height: d / r
        });
        break;
      case "180":
        o = (h, c, d, f) => ({
          x: 1 - (h + d - s) / r,
          y: 1 - (c + f - i) / a,
          width: d / r,
          height: f / a
        });
        break;
      case "270":
        o = (h, c, d, f) => ({
          x: 1 - (c + f - i) / a,
          y: (h - s) / r,
          width: f / a,
          height: d / r
        });
        break;
      default:
        o = (h, c, d, f) => ({
          x: (h - s) / r,
          y: (c - i) / a,
          width: d / r,
          height: f / a
        });
        break;
    }
    const l = [];
    for (let h = 0, c = e.rangeCount; h < c; h++) {
      const d = e.getRangeAt(h);
      if (!d.collapsed)
        for (const {
          x: f,
          y: m,
          width: y,
          height: A
        } of d.getClientRects())
          y === 0 || A === 0 || l.push(o(f, m, y, A));
    }
    return l.length === 0 ? null : l;
  }
  addChangedExistingAnnotation({
    annotationElementId: t,
    id: e
  }) {
    (n(this, ll) || u(this, ll, /* @__PURE__ */ new Map())).set(t, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: t
  }) {
    var e;
    (e = n(this, ll)) == null || e.delete(t);
  }
  renderAnnotationElement(t) {
    var i;
    const e = (i = n(this, ll)) == null ? void 0 : i.get(t.data.id);
    if (!e)
      return;
    const s = n(this, Se).getRawValue(e);
    s && (n(this, jt) === W.NONE && !s.hasBeenModified || s.renderAnnotationElement(t));
  }
  setMissingCanvas(t, e, s) {
    var r;
    const i = (r = n(this, Zn)) == null ? void 0 : r.get(t);
    i && (i.setCanvas(e, s), n(this, Zn).delete(t));
  }
  addMissingCanvas(t, e) {
    (n(this, Zn) || u(this, Zn, /* @__PURE__ */ new Map())).set(t, e);
  }
};
il = new WeakMap(), Je = new WeakMap(), nl = new WeakMap(), Ct = new WeakMap(), Dt = new WeakMap(), rl = new WeakMap(), al = new WeakMap(), ol = new WeakMap(), Se = new WeakMap(), ll = new WeakMap(), Cs = new WeakMap(), ne = new WeakMap(), Wn = new WeakMap(), Xn = new WeakMap(), Yn = new WeakMap(), Kn = new WeakMap(), ui = new WeakMap(), xs = new WeakMap(), ha = new WeakMap(), kc = new WeakMap(), Pc = new WeakMap(), hl = new WeakMap(), Mc = new WeakMap(), fi = new WeakMap(), qn = new WeakMap(), cl = new WeakMap(), Qn = new WeakMap(), pi = new WeakMap(), xf = new WeakMap(), Yi = new WeakMap(), dl = new WeakMap(), Dc = new WeakMap(), Jn = new WeakMap(), ca = new WeakMap(), ul = new WeakMap(), Zn = new WeakMap(), Ic = new WeakMap(), jt = new WeakMap(), dt = new WeakMap(), Ki = new WeakMap(), tr = new WeakMap(), er = new WeakMap(), Lc = new WeakMap(), fl = new WeakMap(), Rc = new WeakMap(), sr = new WeakMap(), gi = new WeakMap(), qi = new WeakMap(), Fc = new WeakMap(), Oc = new WeakMap(), _s = new WeakMap(), F = new WeakSet(), _u = function({
  anchorNode: t
}) {
  return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
}, Rp = function(t) {
  const {
    currentLayer: e
  } = this;
  if (e.hasTextLayer(t))
    return e;
  for (const s of n(this, Dt).values())
    if (s.hasTextLayer(t))
      return s;
  return null;
}, Rb = function() {
  const t = document.getSelection();
  if (!t || t.isCollapsed)
    return;
  const s = b(this, F, _u).call(this, t).closest(".textLayer"), i = this.getSelectionBoxes(s);
  i && (n(this, pi) || u(this, pi, new hw(this)), n(this, pi).show(s, i, this.direction === "ltr"));
}, Fb = function() {
  var r, a, o;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    n(this, Ki) && ((r = n(this, pi)) == null || r.hide(), u(this, Ki, null), b(this, F, Te).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = t;
  if (e === n(this, Ki))
    return;
  const i = b(this, F, _u).call(this, t).closest(".textLayer");
  if (!i) {
    n(this, Ki) && ((a = n(this, pi)) == null || a.hide(), u(this, Ki, null), b(this, F, Te).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((o = n(this, pi)) == null || o.hide(), u(this, Ki, e), b(this, F, Te).call(this, {
    hasSelectedText: !0
  }), !(n(this, jt) !== W.HIGHLIGHT && n(this, jt) !== W.NONE) && (n(this, jt) === W.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), u(this, Qn, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const l = n(this, jt) === W.HIGHLIGHT ? b(this, F, Rp).call(this, i) : null;
    if (l == null || l.toggleDrawing(), n(this, dl)) {
      const h = new AbortController(), c = this.combinedSignal(h), d = (f) => {
        f.type === "pointerup" && f.button !== 0 || (h.abort(), l == null || l.toggleDrawing(!0), f.type === "pointerup" && b(this, F, Uh).call(this, "main_toolbar"));
      };
      window.addEventListener("pointerup", d, {
        signal: c
      }), window.addEventListener("blur", d, {
        signal: c
      });
    } else
      l == null || l.toggleDrawing(!0), b(this, F, Uh).call(this, "main_toolbar");
  }
}, Uh = function(t = "") {
  n(this, jt) === W.HIGHLIGHT ? this.highlightSelection(t) : n(this, kc) && b(this, F, Rb).call(this);
}, Ob = function() {
  document.addEventListener("selectionchange", b(this, F, Fb).bind(this), {
    signal: this._signal
  });
}, Nb = function() {
  if (n(this, qn))
    return;
  u(this, qn, new AbortController());
  const t = this.combinedSignal(n(this, qn));
  window.addEventListener("focus", this.focus.bind(this), {
    signal: t
  }), window.addEventListener("blur", this.blur.bind(this), {
    signal: t
  });
}, Bb = function() {
  var t;
  (t = n(this, qn)) == null || t.abort(), u(this, qn, null);
}, Fp = function() {
  if (n(this, Jn))
    return;
  u(this, Jn, new AbortController());
  const t = this.combinedSignal(n(this, Jn));
  window.addEventListener("keydown", this.keydown.bind(this), {
    signal: t
  }), window.addEventListener("keyup", this.keyup.bind(this), {
    signal: t
  });
}, Hb = function() {
  var t;
  (t = n(this, Jn)) == null || t.abort(), u(this, Jn, null);
}, Ub = function() {
  if (n(this, Wn))
    return;
  u(this, Wn, new AbortController());
  const t = this.combinedSignal(n(this, Wn));
  document.addEventListener("copy", this.copy.bind(this), {
    signal: t
  }), document.addEventListener("cut", this.cut.bind(this), {
    signal: t
  }), document.addEventListener("paste", this.paste.bind(this), {
    signal: t
  });
}, Gb = function() {
  var t;
  (t = n(this, Wn)) == null || t.abort(), u(this, Wn, null);
}, $b = function() {
  const t = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: t
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: t
  });
}, Te = function(t) {
  Object.entries(t).some(([s, i]) => n(this, Rc)[s] !== i) && (this._eventBus.dispatch("editingstateschanged", {
    source: this,
    details: Object.assign(n(this, Rc), t)
  }), n(this, jt) === W.HIGHLIGHT && t.hasSelectedEditor === !1 && b(this, F, Vi).call(this, [[et.HIGHLIGHT_FREE, !0]]));
}, Vi = function(t) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: t
  });
}, zb = async function() {
  if (!n(this, Yi)) {
    u(this, Yi, !0);
    const t = [];
    for (const e of n(this, Dt).values())
      t.push(e.enable());
    await Promise.all(t);
    for (const e of n(this, Ct).values())
      e.enable();
  }
}, Vb = function() {
  if (this.unselectAll(), n(this, Yi)) {
    u(this, Yi, !1);
    for (const t of n(this, Dt).values())
      t.disable();
    for (const t of n(this, Ct).values())
      t.disable();
  }
}, Op = function(t) {
  const e = n(this, Dt).get(t.pageIndex);
  e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
}, jb = function() {
  let t = null;
  for (t of n(this, dt))
    ;
  return t;
}, Gh = function() {
  if (n(this, Ct).size === 0)
    return !0;
  if (n(this, Ct).size === 1)
    for (const t of n(this, Ct).values())
      return t.isEmpty();
  return !1;
}, Np = function(t) {
  for (const e of n(this, dt))
    e.unselect();
  n(this, dt).clear();
  for (const e of t)
    e.isEmpty() || (n(this, dt).add(e), e.select());
  b(this, F, Te).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, T(Ko, "TRANSLATE_SMALL", 1), T(Ko, "TRANSLATE_BIG", 10);
let Wr = Ko;
var re, mi, zs, pl, bi, Ze, gl, yi, ze, Qi, da, Ai, ir, ri, $h, Tu;
const ke = class ke {
  constructor(t) {
    g(this, ri);
    g(this, re, null);
    g(this, mi, !1);
    g(this, zs, null);
    g(this, pl, null);
    g(this, bi, null);
    g(this, Ze, null);
    g(this, gl, !1);
    g(this, yi, null);
    g(this, ze, null);
    g(this, Qi, null);
    g(this, da, null);
    g(this, Ai, !1);
    u(this, ze, t), u(this, Ai, t._uiManager.useNewAltTextFlow), n(ke, ir) || u(ke, ir, Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    }));
  }
  static initialize(t) {
    ke._l10n ?? (ke._l10n = t);
  }
  async render() {
    const t = u(this, zs, document.createElement("button"));
    t.className = "altText", t.tabIndex = "0";
    const e = u(this, pl, document.createElement("span"));
    t.append(e), n(this, Ai) ? (t.classList.add("new"), t.setAttribute("data-l10n-id", n(ke, ir).missing), e.setAttribute("data-l10n-id", n(ke, ir)["missing-label"])) : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
    const s = n(this, ze)._uiManager._signal;
    t.addEventListener("contextmenu", Us, {
      signal: s
    }), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
      signal: s
    });
    const i = (r) => {
      r.preventDefault(), n(this, ze)._uiManager.editAltText(n(this, ze)), n(this, Ai) && n(this, ze)._reportTelemetry({
        action: "pdfjs.image.alt_text.image_status_label_clicked",
        data: {
          label: n(this, ri, $h)
        }
      });
    };
    return t.addEventListener("click", i, {
      capture: !0,
      signal: s
    }), t.addEventListener("keydown", (r) => {
      r.target === t && r.key === "Enter" && (u(this, gl, !0), i(r));
    }, {
      signal: s
    }), await b(this, ri, Tu).call(this), t;
  }
  finish() {
    n(this, zs) && (n(this, zs).focus({
      focusVisible: n(this, gl)
    }), u(this, gl, !1));
  }
  isEmpty() {
    return n(this, Ai) ? n(this, re) === null : !n(this, re) && !n(this, mi);
  }
  hasData() {
    return n(this, Ai) ? n(this, re) !== null || !!n(this, Qi) : this.isEmpty();
  }
  get guessedText() {
    return n(this, Qi);
  }
  async setGuessedText(t) {
    n(this, re) === null && (u(this, Qi, t), u(this, da, await ke._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: t
    })), b(this, ri, Tu).call(this));
  }
  toggleAltTextBadge(t = !1) {
    var e;
    if (!n(this, Ai) || n(this, re)) {
      (e = n(this, yi)) == null || e.remove(), u(this, yi, null);
      return;
    }
    if (!n(this, yi)) {
      const s = u(this, yi, document.createElement("div"));
      s.className = "noAltTextBadge", n(this, ze).div.append(s);
    }
    n(this, yi).classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = n(this, re);
    return !t && n(this, Qi) === e && (e = n(this, da)), {
      altText: e,
      decorative: n(this, mi),
      guessedText: n(this, Qi),
      textWithDisclaimer: n(this, da)
    };
  }
  get data() {
    return {
      altText: n(this, re),
      decorative: n(this, mi)
    };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: s,
    textWithDisclaimer: i,
    cancel: r = !1
  }) {
    s && (u(this, Qi, s), u(this, da, i)), !(n(this, re) === t && n(this, mi) === e) && (r || (u(this, re, t), u(this, mi, e)), b(this, ri, Tu).call(this));
  }
  toggle(t = !1) {
    n(this, zs) && (!t && n(this, Ze) && (clearTimeout(n(this, Ze)), u(this, Ze, null)), n(this, zs).disabled = !t);
  }
  shown() {
    n(this, ze)._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: n(this, ri, $h)
      }
    });
  }
  destroy() {
    var t, e;
    (t = n(this, zs)) == null || t.remove(), u(this, zs, null), u(this, pl, null), u(this, bi, null), (e = n(this, yi)) == null || e.remove(), u(this, yi, null);
  }
};
re = new WeakMap(), mi = new WeakMap(), zs = new WeakMap(), pl = new WeakMap(), bi = new WeakMap(), Ze = new WeakMap(), gl = new WeakMap(), yi = new WeakMap(), ze = new WeakMap(), Qi = new WeakMap(), da = new WeakMap(), Ai = new WeakMap(), ir = new WeakMap(), ri = new WeakSet(), $h = function() {
  return n(this, re) && "added" || n(this, re) === null && this.guessedText && "review" || "missing";
}, Tu = async function() {
  var i, r, a;
  const t = n(this, zs);
  if (!t)
    return;
  if (n(this, Ai)) {
    if (t.classList.toggle("done", !!n(this, re)), t.setAttribute("data-l10n-id", n(ke, ir)[n(this, ri, $h)]), (i = n(this, pl)) == null || i.setAttribute("data-l10n-id", n(ke, ir)[`${n(this, ri, $h)}-label`]), !n(this, re)) {
      (r = n(this, bi)) == null || r.remove();
      return;
    }
  } else {
    if (!n(this, re) && !n(this, mi)) {
      t.classList.remove("done"), (a = n(this, bi)) == null || a.remove();
      return;
    }
    t.classList.add("done"), t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
  }
  let e = n(this, bi);
  if (!e) {
    u(this, bi, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${n(this, ze).id}`;
    const o = 100, l = n(this, ze)._uiManager._signal;
    l.addEventListener("abort", () => {
      clearTimeout(n(this, Ze)), u(this, Ze, null);
    }, {
      once: !0
    }), t.addEventListener("mouseenter", () => {
      u(this, Ze, setTimeout(() => {
        u(this, Ze, null), n(this, bi).classList.add("show"), n(this, ze)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, o));
    }, {
      signal: l
    }), t.addEventListener("mouseleave", () => {
      var h;
      n(this, Ze) && (clearTimeout(n(this, Ze)), u(this, Ze, null)), (h = n(this, bi)) == null || h.classList.remove("show");
    }, {
      signal: l
    });
  }
  n(this, mi) ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = n(this, re)), e.parentNode || t.append(e);
  const s = n(this, ze).getElementForAltText();
  s == null || s.setAttribute("aria-describedby", e.id);
}, g(ke, ir, null), T(ke, "_l10n", null);
let pf = ke;
var ce, Ts, ua, At, Nc, nr, ks, rr, ar, fa, Bc, Bp;
class gu {
  constructor(t) {
    g(this, Bc);
    g(this, ce, null);
    g(this, Ts, null);
    g(this, ua, !1);
    g(this, At, null);
    g(this, Nc, null);
    g(this, nr, null);
    g(this, ks, null);
    g(this, rr, null);
    g(this, ar, !1);
    g(this, fa, null);
    u(this, At, t);
  }
  renderForToolbar() {
    const t = u(this, Ts, document.createElement("button"));
    return t.className = "comment", b(this, Bc, Bp).call(this, t, !1);
  }
  renderForStandalone() {
    const t = u(this, ce, document.createElement("button"));
    t.className = "annotationCommentButton";
    const e = n(this, At).commentButtonPosition;
    if (e) {
      const {
        style: s
      } = t;
      s.insetInlineEnd = `calc(${100 * (n(this, At)._uiManager.direction === "ltr" ? 1 - e[0] : e[0])}% - var(--comment-button-dim))`, s.top = `calc(${100 * e[1]}% - var(--comment-button-dim))`;
      const i = n(this, At).commentButtonColor;
      i && (s.backgroundColor = i);
    }
    return b(this, Bc, Bp).call(this, t, !0);
  }
  focusButton() {
    setTimeout(() => {
      var t;
      (t = n(this, ce) ?? n(this, Ts)) == null || t.focus();
    }, 0);
  }
  onUpdatedColor() {
    if (!n(this, ce))
      return;
    const t = n(this, At).commentButtonColor;
    t && (n(this, ce).style.backgroundColor = t), n(this, At)._uiManager.updatePopupColor(n(this, At));
  }
  get commentButtonWidth() {
    var t;
    return (((t = n(this, ce)) == null ? void 0 : t.getBoundingClientRect().width) ?? 0) / n(this, At).parent.boundingClientRect.width;
  }
  get commentPopupPositionInLayer() {
    if (n(this, fa))
      return n(this, fa);
    if (!n(this, ce))
      return null;
    const {
      x: t,
      y: e,
      height: s
    } = n(this, ce).getBoundingClientRect(), {
      x: i,
      y: r,
      width: a,
      height: o
    } = n(this, At).parent.boundingClientRect;
    return [(t - i) / a, (e + s - r) / o];
  }
  set commentPopupPositionInLayer(t) {
    u(this, fa, t);
  }
  hasDefaultPopupPosition() {
    return n(this, fa) === null;
  }
  removeStandaloneCommentButton() {
    var t;
    (t = n(this, ce)) == null || t.remove(), u(this, ce, null);
  }
  removeToolbarCommentButton() {
    var t;
    (t = n(this, Ts)) == null || t.remove(), u(this, Ts, null);
  }
  setCommentButtonStates({
    selected: t,
    hasPopup: e
  }) {
    n(this, ce) && (n(this, ce).classList.toggle("selected", t), n(this, ce).ariaExpanded = e);
  }
  edit(t) {
    const e = this.commentPopupPositionInLayer;
    let s, i;
    if (e)
      [s, i] = e;
    else {
      [s, i] = n(this, At).commentButtonPosition;
      const {
        width: c,
        height: d,
        x: f,
        y: m
      } = n(this, At);
      s = f + s * c, i = m + i * d;
    }
    const r = n(this, At).parent.boundingClientRect, {
      x: a,
      y: o,
      width: l,
      height: h
    } = r;
    n(this, At)._uiManager.editComment(n(this, At), a + s * l, o + i * h, {
      ...t,
      parentDimensions: r
    });
  }
  finish() {
    n(this, Ts) && (n(this, Ts).focus({
      focusVisible: n(this, ua)
    }), u(this, ua, !1));
  }
  isDeleted() {
    return n(this, ar) || n(this, ks) === "";
  }
  isEmpty() {
    return n(this, ks) === null;
  }
  hasBeenEdited() {
    return this.isDeleted() || n(this, ks) !== n(this, Nc);
  }
  serialize() {
    return this.data;
  }
  get data() {
    return {
      text: n(this, ks),
      richText: n(this, nr),
      date: n(this, rr),
      deleted: this.isDeleted()
    };
  }
  set data(t) {
    if (t !== n(this, ks) && u(this, nr, null), t === null) {
      u(this, ks, ""), u(this, ar, !0);
      return;
    }
    u(this, ks, t), u(this, rr, /* @__PURE__ */ new Date()), u(this, ar, !1);
  }
  restoreData({
    text: t,
    richText: e,
    date: s
  }) {
    u(this, ks, t), u(this, nr, e), u(this, rr, s), u(this, ar, !1);
  }
  setInitialText(t, e = null) {
    u(this, Nc, t), this.data = t, u(this, rr, null), u(this, nr, e);
  }
  shown() {
  }
  destroy() {
    var t, e;
    (t = n(this, Ts)) == null || t.remove(), u(this, Ts, null), (e = n(this, ce)) == null || e.remove(), u(this, ce, null), u(this, ks, ""), u(this, nr, null), u(this, rr, null), u(this, At, null), u(this, ua, !1), u(this, ar, !1);
  }
}
ce = new WeakMap(), Ts = new WeakMap(), ua = new WeakMap(), At = new WeakMap(), Nc = new WeakMap(), nr = new WeakMap(), ks = new WeakMap(), rr = new WeakMap(), ar = new WeakMap(), fa = new WeakMap(), Bc = new WeakSet(), Bp = function(t, e) {
  if (!n(this, At)._uiManager.hasCommentManager())
    return null;
  t.tabIndex = "0", t.ariaHasPopup = "dialog", e ? (t.ariaControls = "commentPopup", t.setAttribute("data-l10n-id", "pdfjs-show-comment-button")) : (t.ariaControlsElements = [n(this, At)._uiManager.getCommentDialogElement()], t.setAttribute("data-l10n-id", "pdfjs-editor-add-comment-button"));
  const s = n(this, At)._uiManager._signal;
  if (!(s instanceof AbortSignal) || s.aborted)
    return t;
  t.addEventListener("contextmenu", Us, {
    signal: s
  }), e && (t.addEventListener("focusin", (r) => {
    n(this, At)._focusEventsAllowed = !1, Kt(r);
  }, {
    capture: !0,
    signal: s
  }), t.addEventListener("focusout", (r) => {
    n(this, At)._focusEventsAllowed = !0, Kt(r);
  }, {
    capture: !0,
    signal: s
  })), t.addEventListener("pointerdown", (r) => r.stopPropagation(), {
    signal: s
  });
  const i = (r) => {
    r.preventDefault(), t === n(this, Ts) ? this.edit() : n(this, At).toggleComment(!0);
  };
  return t.addEventListener("click", i, {
    capture: !0,
    signal: s
  }), t.addEventListener("keydown", (r) => {
    r.target === t && r.key === "Enter" && (u(this, ua, !0), i(r));
  }, {
    signal: s
  }), t.addEventListener("pointerenter", () => {
    n(this, At).toggleComment(!1, !0);
  }, {
    signal: s
  }), t.addEventListener("pointerleave", () => {
    n(this, At).toggleComment(!1, !1);
  }, {
    signal: s
  }), t;
};
function Vm(p) {
  p.preventDefault();
}
const jm = 1e-4;
function wp(p) {
  return p.cancelable ? (Kt(p), !0) : (p.stopPropagation(), !1);
}
var ml, or, Hc, Uc, Gc, $c, zc, pa, lr, Ji, ga, wi, Zi, ma, tn, hr, Pt, Wb, Hp, Up, Gp, ku, Xb, Yb, $p;
class Am {
  constructor({
    container: t,
    isPinchingDisabled: e = null,
    isPinchingStopped: s = null,
    onPinchStart: i = null,
    onPinching: r = null,
    onPinchEnd: a = null,
    onPanning: o = null,
    signal: l
  }) {
    g(this, Pt);
    g(this, ml);
    g(this, or, !1);
    g(this, Hc, null);
    g(this, Uc);
    g(this, Gc);
    g(this, $c);
    g(this, zc);
    g(this, pa);
    g(this, lr, !1);
    g(this, Ji, null);
    g(this, ga);
    g(this, wi, /* @__PURE__ */ new Set());
    g(this, Zi, null);
    g(this, ma);
    g(this, tn, null);
    g(this, hr, 0);
    u(this, ml, t), u(this, Hc, s), u(this, Uc, e), u(this, Gc, i), u(this, $c, r), u(this, zc, a), u(this, pa, o), u(this, ma, new AbortController()), u(this, ga, AbortSignal.any([l, n(this, ma).signal])), t.addEventListener("touchstart", b(this, Pt, Wb).bind(this), {
      passive: !1,
      signal: n(this, ga)
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / bs.pixelRatio;
  }
  get MIN_TOUCH_DISTANCE_TO_SCALE() {
    return 4 / bs.pixelRatio;
  }
  destroy() {
    var t, e;
    b(this, Pt, $p).call(this), n(this, wi).clear(), (t = n(this, ma)) == null || t.abort(), u(this, ma, null), (e = n(this, Ji)) == null || e.abort(), u(this, Ji, null);
  }
}
ml = new WeakMap(), or = new WeakMap(), Hc = new WeakMap(), Uc = new WeakMap(), Gc = new WeakMap(), $c = new WeakMap(), zc = new WeakMap(), pa = new WeakMap(), lr = new WeakMap(), Ji = new WeakMap(), ga = new WeakMap(), wi = new WeakMap(), Zi = new WeakMap(), ma = new WeakMap(), tn = new WeakMap(), hr = new WeakMap(), Pt = new WeakSet(), Wb = function(t) {
  var s, i;
  if ((s = n(this, Uc)) != null && s.call(this))
    return;
  b(this, Pt, Up).call(this, t);
  const e = n(this, wi);
  for (const {
    identifier: r
  } of t.changedTouches)
    e.add(r);
  if (e.size === 1) {
    b(this, Pt, Hp).call(this);
    return;
  }
  if (!n(this, tn)) {
    u(this, tn, new AbortController());
    const r = AbortSignal.any([n(this, ga), n(this, tn).signal]), a = n(this, ml), o = {
      signal: r,
      capture: !1,
      passive: !1
    };
    a.addEventListener("touchmove", b(this, Pt, Xb).bind(this), o);
    const l = b(this, Pt, Yb).bind(this);
    a.addEventListener("touchend", l, o), a.addEventListener("touchcancel", l, o), o.capture = !0, a.addEventListener("pointerdown", Kt, o), a.addEventListener("pointermove", Kt, o), a.addEventListener("pointercancel", Vm, o), a.addEventListener("pointerup", Vm, o), (i = n(this, Gc)) == null || i.call(this);
  }
  u(this, lr, wp(t)), b(this, Pt, ku).call(this, t);
}, Hp = function() {
  if (n(this, Ji))
    return;
  const t = u(this, Ji, new AbortController()), e = AbortSignal.any([n(this, ga), t.signal]), s = n(this, ml), i = {
    capture: !0,
    signal: e,
    passive: !1
  }, r = (a) => {
    var o;
    a.pointerType === "touch" && ((o = n(this, Ji)) == null || o.abort(), u(this, Ji, null));
  };
  s.addEventListener("pointerdown", (a) => {
    a.pointerType === "touch" && (Kt(a), r(a));
  }, i), s.addEventListener("pointerup", r, i), s.addEventListener("pointercancel", r, i);
}, Up = function(t) {
  const e = n(this, wi);
  if (e.size === 0)
    return;
  const s = u(this, wi, /* @__PURE__ */ new Set());
  for (const {
    identifier: i
  } of t.touches)
    e.has(i) && s.add(i);
}, Gp = function(t) {
  const e = n(this, wi), s = [];
  for (const i of t.touches)
    e.has(i.identifier) && s.push(i);
  return s;
}, ku = function(t) {
  var r;
  const e = b(this, Pt, Gp).call(this, t);
  if (e.length !== 2 || (r = n(this, Hc)) != null && r.call(this)) {
    u(this, Zi, null);
    return;
  }
  const [s, i] = e;
  u(this, Zi, {
    touch0X: s.screenX,
    touch0Y: s.screenY,
    touch1X: i.screenX,
    touch1Y: i.screenY,
    panX: (s.clientX + i.clientX) / 2,
    panY: (s.clientY + i.clientY) / 2,
    screenPanX: (s.screenX + i.screenX) / 2,
    screenPanY: (s.screenY + i.screenY) / 2
  });
}, Xb = function(t) {
  var B, G, nt, he;
  if (!n(this, Zi))
    return;
  const e = b(this, Pt, Gp).call(this, t);
  if (e.length !== 2)
    return;
  const s = n(this, lr);
  if (u(this, lr, wp(t)), !n(this, lr))
    return;
  if (!s) {
    b(this, Pt, ku).call(this, t);
    return;
  }
  const [i, r] = e, {
    screenX: a,
    screenY: o
  } = i, {
    screenX: l,
    screenY: h
  } = r, c = n(this, Zi), {
    touch0X: d,
    touch0Y: f,
    touch1X: m,
    touch1Y: y,
    panX: A,
    panY: w
  } = c, v = m - d, S = y - f, E = l - a, C = h - o, x = (i.clientX + r.clientX) / 2, _ = (i.clientY + r.clientY) / 2;
  c.panX = x, c.panY = _;
  const k = x - A, M = _ - w, P = (a + l) / 2, D = (o + h) / 2, N = Math.hypot(P - c.screenPanX, D - c.screenPanY);
  c.screenPanX = P, c.screenPanY = D;
  const Z = Math.hypot(E, C), Q = Math.hypot(v, S), Y = n(this, or) ? this.MIN_TOUCH_DISTANCE_TO_SCALE : this.MIN_TOUCH_DISTANCE_TO_PINCH + 2 * N;
  if (Z < jm || Q < jm || Math.abs(Q - Z) <= Y) {
    (k || M) && ((B = n(this, pa)) == null || B.call(this, k, M));
    return;
  }
  c.touch0X = a, c.touch0Y = o, c.touch1X = l, c.touch1Y = h;
  const K = Math.sign(Z - Q);
  if (!n(this, or)) {
    u(this, or, !0), u(this, hr, K), (k || M) && ((G = n(this, pa)) == null || G.call(this, k, M));
    return;
  }
  if (n(this, hr)) {
    const ee = n(this, hr);
    if (u(this, hr, 0), K !== ee && Math.abs(Z - Q) <= 2 * N) {
      u(this, or, !1), (k || M) && ((nt = n(this, pa)) == null || nt.call(this, k, M));
      return;
    }
  }
  (he = n(this, $c)) == null || he.call(this, [A, w], Q, Z, k, M);
}, Yb = function(t) {
  if (b(this, Pt, Up).call(this, t), n(this, wi).size >= 2) {
    b(this, Pt, ku).call(this, t);
    return;
  }
  const e = !!n(this, Zi);
  b(this, Pt, $p).call(this), n(this, wi).size === 1 && b(this, Pt, Hp).call(this), e && wp(t);
}, $p = function() {
  var t;
  u(this, Zi, null), u(this, or, !1), u(this, hr, 0), u(this, lr, !1), n(this, tn) && (n(this, tn).abort(), u(this, tn, null), (t = n(this, zc)) == null || t.call(this));
};
var ba, Vs, xt, ht, en, bl, cr, Vc, de, ya, sn, Ps, dr, jc, Aa, ts, Wc, wa, nn, vi, yl, Al, Ms, ur, Xc, _f, z, zp, Yc, Vp, Pu, Kb, qb, jp, Mu, Wp, Qb, Jb, Zb, Xp, ty, Yp, Kp, ey, sy, iy, qp, zh;
const j = class j {
  constructor(t) {
    g(this, z);
    g(this, ba, null);
    g(this, Vs, null);
    g(this, xt, null);
    g(this, ht, null);
    g(this, en, null);
    g(this, bl, !1);
    g(this, cr, null);
    g(this, Vc, "");
    g(this, de, null);
    g(this, ya, null);
    g(this, sn, null);
    g(this, Ps, null);
    g(this, dr, null);
    g(this, jc, "");
    g(this, Aa, !1);
    g(this, ts, null);
    g(this, Wc, !1);
    g(this, wa, !1);
    g(this, nn, !1);
    g(this, vi, null);
    g(this, yl, 0);
    g(this, Al, 0);
    g(this, Ms, null);
    g(this, ur, null);
    T(this, "isSelected", !1);
    T(this, "_isCopy", !1);
    T(this, "_editToolbar", null);
    T(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    T(this, "_initialData", null);
    T(this, "_isVisible", !0);
    T(this, "_uiManager", null);
    T(this, "_focusEventsAllowed", !0);
    g(this, Xc, !1);
    g(this, _f, j._zIndex++);
    this.parent = t.parent, this.id = t.id, this.width = this.height = null, this.pageIndex = t.parent.pageIndex, this.name = t.name, this.div = null, this._uiManager = t.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t.isCentered, this._structTreeParentId = null, this.annotationElementId = t.annotationElementId || null, this.creationDate = t.creationDate || /* @__PURE__ */ new Date(), this.modificationDate = t.modificationDate || null, this.canAddComment = !0;
    const {
      rotation: e,
      rawDims: {
        pageWidth: s,
        pageHeight: i,
        pageX: r,
        pageY: a
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [s, i], this.pageTranslation = [r, a];
    const [o, l] = this.parentDimensions;
    this.x = t.x / o, this.y = t.y / l, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const t = j.prototype._resizeWithKeyboard, e = Wr.TRANSLATE_SMALL, s = Wr.TRANSLATE_BIG;
    return R(this, "_resizerKeyboardManager", new Fo([[["ArrowLeft"], t, {
      args: [-e, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, {
      args: [-s, 0]
    }], [["ArrowRight"], t, {
      args: [e, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, {
      args: [s, 0]
    }], [["ArrowUp"], t, {
      args: [0, -e]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, {
      args: [0, -s]
    }], [["ArrowDown"], t, {
      args: [0, e]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, {
      args: [0, s]
    }], [["Escape"], j.prototype._stopResizingWithKeyboard]]));
  }
  updatePageIndex(t) {
    this.pageIndex = t;
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  get mode() {
    return Object.getPrototypeOf(this).constructor._editorType;
  }
  static get isDrawer() {
    return !1;
  }
  static get _defaultLineColor() {
    return R(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(t) {
    const e = new fw({
      id: t._uiManager.getId(),
      parent: t.parent,
      uiManager: t._uiManager
    });
    e.annotationElementId = t.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(t, e) {
    if (j._l10n ?? (j._l10n = t), j._l10nAlert ?? (j._l10nAlert = Object.freeze({
      highlight: "pdfjs-editor-highlight-added-alert",
      freetext: "pdfjs-editor-freetext-added-alert",
      ink: "pdfjs-editor-ink-added-alert",
      stamp: "pdfjs-editor-stamp-added-alert",
      signature: "pdfjs-editor-signature-added-alert"
    })), j._l10nResizer ?? (j._l10nResizer = Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    })), j._borderLineWidth !== -1)
      return;
    const s = getComputedStyle(document.documentElement);
    j._borderLineWidth = parseFloat(s.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return !1;
  }
  static paste(t, e) {
    st("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return n(this, Xc);
  }
  set _isDraggable(t) {
    var e;
    u(this, Xc, t), (e = this.div) == null || e.classList.toggle("draggable", t);
  }
  get uid() {
    return this.annotationElementId || this.id;
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (t * 2), this.y += this.width * t / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (t * 2), this.y -= this.width * t / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = n(this, _f);
  }
  setParent(t) {
    var e;
    t !== null ? (this.pageIndex = t.pageIndex, this.pageDimensions = t.pageDimensions) : (b(this, z, zh).call(this), (e = n(this, Ps)) == null || e.remove(), u(this, Ps, null)), this.parent = t;
  }
  focusin(t) {
    this._focusEventsAllowed && (n(this, Aa) ? u(this, Aa, !1) : this.parent.setSelected(this));
  }
  focusout(t) {
    var s;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const e = t.relatedTarget;
    e != null && e.closest(`#${this.id}`) || (t.preventDefault(), (s = this.parent) != null && s.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.isInEditMode() && this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, s, i) {
    const [r, a] = this.parentDimensions;
    [s, i] = this.screenToPageTranslation(s, i), this.x = (t + s) / r, this.y = (e + i) / a, this.fixAndSetPosition();
  }
  _moveAfterPaste(t, e) {
    if (this.isClone) {
      delete this.isClone;
      return;
    }
    const [s, i] = this.parentDimensions;
    this.setAt(t * s, e * i, this.width * s, this.height * i), this._onTranslated();
  }
  translate(t, e) {
    b(this, z, zp).call(this, this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    n(this, ts) || u(this, ts, [this.x, this.y, this.width, this.height]), b(this, z, zp).call(this, this.pageDimensions, t, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  translationDone() {
    this._onTranslated(this.x, this.y);
  }
  drag(t, e) {
    n(this, ts) || u(this, ts, [this.x, this.y, this.width, this.height]);
    const {
      div: s,
      parentDimensions: [i, r]
    } = this;
    if (this.x += t / i, this.y += e / r, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: d,
        y: f
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, d, f) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: a,
      y: o
    } = this;
    const [l, h] = this.getBaseTranslation();
    a += l, o += h;
    const {
      style: c
    } = s;
    c.left = `${(100 * a).toFixed(2)}%`, c.top = `${(100 * o).toFixed(2)}%`, this._onTranslating(a, o);
  }
  _onTranslating(t, e) {
  }
  _onTranslated(t, e) {
  }
  get _hasBeenMoved() {
    return !!n(this, ts) && (n(this, ts)[0] !== this.x || n(this, ts)[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!n(this, ts) && (n(this, ts)[2] !== this.width || n(this, ts)[3] !== this.height);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions, {
      _borderLineWidth: s
    } = j, i = s / t, r = s / e;
    switch (this.rotation) {
      case 90:
        return [-i, r];
      case 180:
        return [i, r];
      case 270:
        return [i, -r];
      default:
        return [-i, -r];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(t = this.rotation) {
    const {
      div: {
        style: e
      },
      pageDimensions: [s, i]
    } = this;
    let {
      x: r,
      y: a,
      width: o,
      height: l
    } = this;
    if (o *= s, l *= i, r *= s, a *= i, this._mustFixPosition)
      switch (t) {
        case 0:
          r = wt(r, 0, s - o), a = wt(a, 0, i - l);
          break;
        case 90:
          r = wt(r, 0, s - l), a = wt(a, o, i);
          break;
        case 180:
          r = wt(r, o, s), a = wt(a, l, i);
          break;
        case 270:
          r = wt(r, l, s), a = wt(a, 0, i - o);
          break;
      }
    this.x = r /= s, this.y = a /= i;
    const [h, c] = this.getBaseTranslation();
    r += h, a += c, e.left = `${(100 * r).toFixed(2)}%`, e.top = `${(100 * a).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(t, e) {
    var s;
    return b(s = j, Yc, Vp).call(s, t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    var s;
    return b(s = j, Yc, Vp).call(s, t, e, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [e, s]
    } = this;
    return [e * t, s * t];
  }
  setDims() {
    const {
      div: {
        style: t
      },
      width: e,
      height: s
    } = this;
    t.width = `${(100 * e).toFixed(2)}%`, t.height = `${(100 * s).toFixed(2)}%`;
  }
  getInitialTranslation() {
    return [0, 0];
  }
  _onResized() {
  }
  static _round(t) {
    return Math.round(t * 1e4) / 1e4;
  }
  _onResizing() {
  }
  altTextFinish() {
    var t;
    (t = n(this, xt)) == null || t.finish();
  }
  get toolbarButtons() {
    return null;
  }
  async addEditToolbar() {
    if (this._editToolbar || n(this, wa))
      return this._editToolbar;
    this._editToolbar = new Mp(this), this.div.append(this._editToolbar.render());
    const {
      toolbarButtons: t
    } = this;
    if (t)
      for (const [e, s] of t)
        await this._editToolbar.addButton(e, s);
    return this.hasComment || this._editToolbar.addButton("comment", this.addCommentButton()), this._editToolbar.addButton("delete"), this._editToolbar;
  }
  addCommentButtonInToolbar() {
    var t;
    (t = this._editToolbar) == null || t.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
  }
  removeCommentButtonFromToolbar() {
    var t;
    (t = this._editToolbar) == null || t.removeButton("comment");
  }
  removeEditToolbar() {
    var t, e;
    (t = this._editToolbar) == null || t.remove(), this._editToolbar = null, (e = n(this, xt)) == null || e.destroy();
  }
  addContainer(t) {
    var s;
    const e = (s = this._editToolbar) == null ? void 0 : s.div;
    e ? e.before(t) : this.div.append(t);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  createAltText() {
    return n(this, xt) || (pf.initialize(j._l10n), u(this, xt, new pf(this)), n(this, ba) && (n(this, xt).data = n(this, ba), u(this, ba, null))), n(this, xt);
  }
  get altTextData() {
    var t;
    return (t = n(this, xt)) == null ? void 0 : t.data;
  }
  set altTextData(t) {
    n(this, xt) && (n(this, xt).data = t);
  }
  get guessedAltText() {
    var t;
    return (t = n(this, xt)) == null ? void 0 : t.guessedText;
  }
  async setGuessedAltText(t) {
    var e;
    await ((e = n(this, xt)) == null ? void 0 : e.setGuessedText(t));
  }
  serializeAltText(t) {
    var e;
    return (e = n(this, xt)) == null ? void 0 : e.serialize(t);
  }
  hasAltText() {
    return !!n(this, xt) && !n(this, xt).isEmpty();
  }
  hasAltTextData() {
    var t;
    return ((t = n(this, xt)) == null ? void 0 : t.hasData()) ?? !1;
  }
  focusCommentButton() {
    var t;
    (t = n(this, ht)) == null || t.focusButton();
  }
  addCommentButton() {
    return this.canAddComment ? n(this, ht) || u(this, ht, new gu(this)) : null;
  }
  addStandaloneCommentButton() {
    if (this._uiManager.hasCommentManager()) {
      if (n(this, en)) {
        this._uiManager.isEditingMode() && n(this, en).classList.remove("hidden");
        return;
      }
      this.hasComment && (u(this, en, n(this, ht).renderForStandalone()), this.div.append(n(this, en)));
    }
  }
  removeStandaloneCommentButton() {
    n(this, ht).removeStandaloneCommentButton(), u(this, en, null);
  }
  hideStandaloneCommentButton() {
    var t;
    (t = n(this, en)) == null || t.classList.add("hidden");
  }
  get comment() {
    if (!n(this, ht))
      return null;
    const {
      data: {
        richText: t,
        text: e,
        date: s,
        deleted: i
      }
    } = n(this, ht);
    return {
      text: e,
      richText: t,
      date: s,
      deleted: i,
      color: this.getNonHCMColor(),
      opacity: this.opacity ?? 1
    };
  }
  set comment(t) {
    n(this, ht) || u(this, ht, new gu(this)), typeof t == "object" && t !== null ? n(this, ht).restoreData(t) : n(this, ht).data = t, this.hasComment ? (this.removeCommentButtonFromToolbar(), this.addStandaloneCommentButton(), this._uiManager.updateComment(this)) : (this.addCommentButtonInToolbar(), this.removeStandaloneCommentButton(), this._uiManager.removeComment(this));
  }
  setCommentData({
    comment: t,
    popupRef: e,
    richText: s
  }) {
    if (!e || (n(this, ht) || u(this, ht, new gu(this)), n(this, ht).setInitialText(t, s), !this.annotationElementId))
      return;
    const i = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
    i && this.updateFromAnnotationLayer(i);
  }
  get hasEditedComment() {
    var t;
    return (t = n(this, ht)) == null ? void 0 : t.hasBeenEdited();
  }
  get hasDeletedComment() {
    var t;
    return (t = n(this, ht)) == null ? void 0 : t.isDeleted();
  }
  get hasComment() {
    return !!n(this, ht) && !n(this, ht).isEmpty() && !n(this, ht).isDeleted();
  }
  async editComment(t) {
    n(this, ht) || u(this, ht, new gu(this)), n(this, ht).edit(t);
  }
  toggleComment(t, e = void 0) {
    this.hasComment && this._uiManager.toggleComment(this, t, e);
  }
  setSelectedCommentButton(t) {
    n(this, ht).setSelectedButton(t);
  }
  addComment(t) {
    if (this.hasEditedComment) {
      const [, , , i] = t.rect, [r] = this.pageDimensions, [a] = this.pageTranslation, o = a + r + 1, l = i - 100, h = o + 180;
      t.popup = {
        contents: this.comment.text,
        deleted: this.comment.deleted,
        rect: [o, l, h, i]
      };
    }
  }
  updateFromAnnotationLayer({
    popup: {
      contents: t,
      deleted: e
    }
  }) {
    n(this, ht).data = e ? null : t;
  }
  get parentBoundingClientRect() {
    return this.parent.boundingClientRect;
  }
  render() {
    var a;
    const t = this.div = document.createElement("div");
    t.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), t.className = this.name, t.setAttribute("id", this.id), t.tabIndex = n(this, bl) ? -1 : 0, t.setAttribute("role", "application"), this.defaultL10nId && t.setAttribute("data-l10n-id", this.defaultL10nId), this._isVisible || t.classList.add("hidden"), this.setInForeground(), b(this, z, Yp).call(this);
    const [e, s] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (t.style.maxWidth = `${(100 * s / e).toFixed(2)}%`, t.style.maxHeight = `${(100 * e / s).toFixed(2)}%`);
    const [i, r] = this.getInitialTranslation();
    return this.translate(i, r), Db(this, t, ["keydown", "pointerdown", "dblclick"]), b(this, z, Kp).call(this), this.addStandaloneCommentButton(), (a = this._uiManager._editorUndoBar) == null || a.hide(), t;
  }
  pointerdown(t) {
    const {
      isMac: e
    } = ot.platform;
    if (t.button !== 0 || t.ctrlKey && e) {
      t.preventDefault();
      return;
    }
    if (u(this, Aa, !0), this._isDraggable) {
      b(this, z, ty).call(this, t);
      return;
    }
    b(this, z, Xp).call(this, t);
  }
  _onStartDragging() {
  }
  _onStopDragging() {
  }
  moveInDOM() {
    n(this, vi) && clearTimeout(n(this, vi)), u(this, vi, setTimeout(() => {
      var t;
      u(this, vi, null), (t = this.parent) == null || t.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(t, e, s) {
    t.changeParent(this), this.x = e, this.y = s, this.fixAndSetPosition(), this._onTranslated();
  }
  getRect(t, e, s = this.rotation) {
    const i = this.parentScale, [r, a] = this.pageDimensions, [o, l] = this.pageTranslation, h = t / i, c = e / i, d = this.x * r, f = this.y * a, m = this.width * r, y = this.height * a;
    switch (s) {
      case 0:
        return [d + h + o, a - f - c - y + l, d + h + m + o, a - f - c + l];
      case 90:
        return [d + c + o, a - f + h + l, d + c + y + o, a - f + h + m + l];
      case 180:
        return [d - h - m + o, a - f + c + l, d - h + o, a - f + c + y + l];
      case 270:
        return [d - c - y + o, a - f - h - m + l, d - c + o, a - f - h + l];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [s, i, r, a] = t, o = r - s, l = a - i;
    switch (this.rotation) {
      case 0:
        return [s, e - a, o, l];
      case 90:
        return [s, e - i, l, o];
      case 180:
        return [r, e - i, o, l];
      case 270:
        return [r, e - a, l, o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getPDFRect() {
    return this.getRect(0, 0);
  }
  getNonHCMColor() {
    return this.color && j._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
  }
  onUpdatedColor() {
    var t;
    (t = n(this, ht)) == null || t.onUpdatedColor();
  }
  getData() {
    const {
      comment: {
        text: t,
        color: e,
        date: s,
        opacity: i,
        deleted: r,
        richText: a
      },
      uid: o,
      pageIndex: l,
      creationDate: h,
      modificationDate: c
    } = this;
    return {
      id: o,
      pageIndex: l,
      rect: this.getPDFRect(),
      richText: a,
      contentsObj: {
        str: t
      },
      creationDate: h,
      modificationDate: s || c,
      popupRef: !r,
      color: e,
      opacity: i
    };
  }
  onceAdded(t) {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    return this.isInEditMode() ? !1 : (this.parent.setEditingState(!1), u(this, wa, !0), !0);
  }
  disableEditMode() {
    return this.isInEditMode() ? (this.parent.setEditingState(!0), u(this, wa, !1), !0) : !1;
  }
  isInEditMode() {
    return n(this, wa);
  }
  shouldGetKeyboardEvents() {
    return n(this, nn);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const {
      top: t,
      left: e,
      bottom: s,
      right: i
    } = this.getClientDimensions(), {
      innerHeight: r,
      innerWidth: a
    } = window;
    return e < a && i > 0 && t < r && s > 0;
  }
  rebuild() {
    b(this, z, Yp).call(this), b(this, z, Kp).call(this);
  }
  rotate(t) {
  }
  resize() {
  }
  serializeDeleted() {
    var t;
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex,
      popupRef: ((t = this._initialData) == null ? void 0 : t.popupRef) || ""
    };
  }
  serialize(t = !1, e = null) {
    var s;
    return {
      annotationType: this.mode,
      pageIndex: this.pageIndex,
      rect: this.getPDFRect(),
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId,
      popupRef: ((s = this._initialData) == null ? void 0 : s.popupRef) || ""
    };
  }
  static async deserialize(t, e, s) {
    const i = new this.prototype.constructor({
      parent: e,
      id: s.getId(),
      uiManager: s,
      annotationElementId: t.annotationElementId,
      creationDate: t.creationDate,
      modificationDate: t.modificationDate
    });
    i.rotation = t.rotation, u(i, ba, t.accessibilityData), i._isCopy = t.isCopy || !1;
    const [r, a] = i.pageDimensions, [o, l, h, c] = i.getRectInCurrentCoords(t.rect, a);
    return i.x = o / r, i.y = l / a, i.width = h / r, i.height = c / a, i;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    var t, e, s;
    if ((t = n(this, dr)) == null || t.abort(), u(this, dr, null), this.isEmpty() || this.commit(), (e = n(this, ur)) == null || e.destroy(), u(this, ur, null), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), this.hideCommentPopup(), n(this, vi) && (clearTimeout(n(this, vi)), u(this, vi, null)), b(this, z, zh).call(this), this.removeEditToolbar(), n(this, Ms)) {
      for (const i of n(this, Ms).values())
        clearTimeout(i);
      u(this, Ms, null);
    }
    this.parent = null, (s = n(this, Ps)) == null || s.remove(), u(this, Ps, null);
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (b(this, z, Kb).call(this), n(this, de).classList.remove("hidden"));
  }
  get toolbarPosition() {
    return null;
  }
  get commentButtonPosition() {
    return this._uiManager.direction === "ltr" ? [1, 0] : [0, 0];
  }
  get commentButtonPositionInPage() {
    const {
      commentButtonPosition: [t, e]
    } = this, [s, i, r, a] = this.getPDFRect();
    return [j._round(s + (r - s) * t), j._round(i + (a - i) * (1 - e))];
  }
  get commentButtonColor() {
    return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
  }
  get commentPopupPosition() {
    return n(this, ht).commentPopupPositionInLayer;
  }
  set commentPopupPosition(t) {
    n(this, ht).commentPopupPositionInLayer = t;
  }
  hasDefaultPopupPosition() {
    return n(this, ht).hasDefaultPopupPosition();
  }
  get commentButtonWidth() {
    return n(this, ht).commentButtonWidth;
  }
  get elementBeforePopup() {
    return this.div;
  }
  setCommentButtonStates(t) {
    var e;
    (e = n(this, ht)) == null || e.setCommentButtonStates(t);
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || t.key !== "Enter")
      return;
    this._uiManager.setSelected(this), u(this, sn, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = n(this, de).children;
    if (!n(this, Vs)) {
      u(this, Vs, Array.from(e));
      const a = b(this, z, ey).bind(this), o = b(this, z, sy).bind(this), l = this._uiManager._signal;
      for (const h of n(this, Vs)) {
        const c = h.getAttribute("data-resizer-name");
        h.setAttribute("role", "spinbutton"), h.addEventListener("keydown", a, {
          signal: l
        }), h.addEventListener("blur", o, {
          signal: l
        }), h.addEventListener("focus", b(this, z, iy).bind(this, c), {
          signal: l
        }), h.setAttribute("data-l10n-id", j._l10nResizer[c]);
      }
    }
    const s = n(this, Vs)[0];
    let i = 0;
    for (const a of e) {
      if (a === s)
        break;
      i++;
    }
    const r = (360 - this.rotation + this.parentRotation) % 360 / 90 * (n(this, Vs).length / 4);
    if (r !== i) {
      if (r < i)
        for (let o = 0; o < i - r; o++)
          n(this, de).append(n(this, de).firstElementChild);
      else if (r > i)
        for (let o = 0; o < r - i; o++)
          n(this, de).firstElementChild.before(n(this, de).lastElementChild);
      let a = 0;
      for (const o of e) {
        const h = n(this, Vs)[a++].getAttribute("data-resizer-name");
        o.setAttribute("data-l10n-id", j._l10nResizer[h]);
      }
    }
    b(this, z, qp).call(this, 0), u(this, nn, !0), n(this, de).firstElementChild.focus({
      focusVisible: !0
    }), t.preventDefault(), t.stopImmediatePropagation();
  }
  _resizeWithKeyboard(t, e) {
    n(this, nn) && b(this, z, Wp).call(this, n(this, jc), {
      deltaX: t,
      deltaY: e,
      fromKeyboard: !0
    });
  }
  _stopResizingWithKeyboard() {
    b(this, z, zh).call(this), this.div.focus();
  }
  select() {
    var t, e, s;
    if (this.isSelected && this._editToolbar) {
      this._editToolbar.show();
      return;
    }
    if (this.isSelected = !0, this.makeResizable(), (t = this.div) == null || t.classList.add("selectedEditor"), !this._editToolbar) {
      this.addEditToolbar().then(() => {
        var i, r;
        (i = this.div) != null && i.classList.contains("selectedEditor") && ((r = this._editToolbar) == null || r.show());
      });
      return;
    }
    (e = this._editToolbar) == null || e.show(), (s = n(this, xt)) == null || s.toggleAltTextBadge(!1);
  }
  focus() {
    this.div && !this.div.contains(document.activeElement) && setTimeout(() => {
      var t;
      return (t = this.div) == null ? void 0 : t.focus({
        preventScroll: !0
      });
    }, 0);
  }
  unselect() {
    var t, e, s, i, r;
    this.isSelected && (this.isSelected = !1, (t = n(this, de)) == null || t.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (s = this.div) != null && s.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (i = this._editToolbar) == null || i.hide(), (r = n(this, xt)) == null || r.toggleAltTextBadge(!0), this.hideCommentPopup());
  }
  hideCommentPopup() {
    this.hasComment && this._uiManager.toggleComment(null);
  }
  updateParams(t, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  get canChangeContent() {
    return !1;
  }
  enterInEditMode() {
    this.canChangeContent && (this.enableEditMode(), this.div.focus());
  }
  dblclick(t) {
    t.target.nodeName !== "BUTTON" && (this.enterInEditMode(), this.parent.updateToolbar({
      mode: this.constructor._editorType,
      editId: this.uid
    }));
  }
  getElementForAltText() {
    return this.div;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return n(this, Wc);
  }
  set isEditing(t) {
    u(this, Wc, t), this.parent && (t ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = !1) {
    if (e) {
      n(this, Ms) || u(this, Ms, /* @__PURE__ */ new Map());
      const {
        action: s
      } = t;
      let i = n(this, Ms).get(s);
      i && clearTimeout(i), i = setTimeout(() => {
        this._reportTelemetry(t), n(this, Ms).delete(s), n(this, Ms).size === 0 && u(this, Ms, null);
      }, j._telemetryTimeout), n(this, Ms).set(s, i);
      return;
    }
    t.type || (t.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: t
      }
    });
  }
  show(t = this._isVisible) {
    this.div.classList.toggle("hidden", !t), this._isVisible = t;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), u(this, bl, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), u(this, bl, !0);
  }
  updateFakeAnnotationElement(t) {
    if (!n(this, Ps) && !this.deleted) {
      u(this, Ps, t.addFakeAnnotation(this));
      return;
    }
    if (this.deleted) {
      n(this, Ps).remove(), u(this, Ps, null);
      return;
    }
    (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && n(this, Ps).updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    });
  }
  renderAnnotationElement(t) {
    if (this.deleted)
      return t.hide(), null;
    let e = t.container.querySelector(".annotationContent");
    if (!e)
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t.container.prepend(e);
    else if (e.nodeName === "CANVAS") {
      const s = e;
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), s.before(e);
    }
    return e;
  }
  resetAnnotationElement(t) {
    const {
      firstElementChild: e
    } = t.container;
    (e == null ? void 0 : e.nodeName) === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
ba = new WeakMap(), Vs = new WeakMap(), xt = new WeakMap(), ht = new WeakMap(), en = new WeakMap(), bl = new WeakMap(), cr = new WeakMap(), Vc = new WeakMap(), de = new WeakMap(), ya = new WeakMap(), sn = new WeakMap(), Ps = new WeakMap(), dr = new WeakMap(), jc = new WeakMap(), Aa = new WeakMap(), ts = new WeakMap(), Wc = new WeakMap(), wa = new WeakMap(), nn = new WeakMap(), vi = new WeakMap(), yl = new WeakMap(), Al = new WeakMap(), Ms = new WeakMap(), ur = new WeakMap(), Xc = new WeakMap(), _f = new WeakMap(), z = new WeakSet(), zp = function([t, e], s, i) {
  [s, i] = this.screenToPageTranslation(s, i), this.x += s / t, this.y += i / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
}, Yc = new WeakSet(), Vp = function(t, e, s) {
  switch (s) {
    case 90:
      return [e, -t];
    case 180:
      return [-t, -e];
    case 270:
      return [-e, t];
    default:
      return [t, e];
  }
}, Pu = function(t) {
  switch (t) {
    case 90: {
      const [e, s] = this.pageDimensions;
      return [0, -e / s, s / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, s] = this.pageDimensions;
      return [0, e / s, -s / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, Kb = function() {
  if (n(this, de))
    return;
  u(this, de, document.createElement("div")), n(this, de).classList.add("resizers");
  const t = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const s of t) {
    const i = document.createElement("div");
    n(this, de).append(i), i.classList.add("resizer", s), i.setAttribute("data-resizer-name", s), i.addEventListener("pointerdown", b(this, z, qb).bind(this, s), {
      signal: e
    }), i.addEventListener("contextmenu", Us, {
      signal: e
    }), i.tabIndex = -1;
  }
  this.div.prepend(n(this, de));
}, qb = function(t, e) {
  var c;
  e.preventDefault();
  const {
    isMac: s
  } = ot.platform;
  if (e.button !== 0 || e.ctrlKey && s)
    return;
  (c = n(this, xt)) == null || c.toggle(!1);
  const i = this._isDraggable;
  this._isDraggable = !1, u(this, ya, [e.screenX, e.screenY]);
  const r = new AbortController(), a = this._uiManager.combinedSignal(r);
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", b(this, z, Wp).bind(this, t), {
    passive: !0,
    capture: !0,
    signal: a
  }), window.addEventListener("touchmove", Kt, {
    passive: !1,
    signal: a
  }), window.addEventListener("contextmenu", Us, {
    signal: a
  }), u(this, sn, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  });
  const o = this.parent.div.style.cursor, l = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const h = () => {
    var d;
    r.abort(), this.parent.togglePointerEvents(!0), (d = n(this, xt)) == null || d.toggle(!0), this._isDraggable = i, this.parent.div.style.cursor = o, this.div.style.cursor = l, b(this, z, Mu).call(this);
  };
  window.addEventListener("pointerup", h, {
    signal: a
  }), window.addEventListener("blur", h, {
    signal: a
  });
}, jp = function(t, e, s, i) {
  this.width = s, this.height = i, this.x = t, this.y = e, this.setDims(), this.fixAndSetPosition(), this._onResized();
}, Mu = function() {
  if (!n(this, sn))
    return;
  const {
    savedX: t,
    savedY: e,
    savedWidth: s,
    savedHeight: i
  } = n(this, sn);
  u(this, sn, null);
  const r = this.x, a = this.y, o = this.width, l = this.height;
  r === t && a === e && o === s && l === i || this.addCommands({
    cmd: b(this, z, jp).bind(this, r, a, o, l),
    undo: b(this, z, jp).bind(this, t, e, s, i),
    mustExec: !0
  });
}, Wp = function(t, e) {
  const [s, i] = this.parentDimensions, r = this.x, a = this.y, o = this.width, l = this.height, h = j.MIN_SIZE / s, c = j.MIN_SIZE / i, d = b(this, z, Pu).call(this, this.rotation), f = (B, G) => [d[0] * B + d[2] * G, d[1] * B + d[3] * G], m = b(this, z, Pu).call(this, 360 - this.rotation), y = (B, G) => [m[0] * B + m[2] * G, m[1] * B + m[3] * G];
  let A, w, v = !1, S = !1;
  switch (t) {
    case "topLeft":
      v = !0, A = (B, G) => [0, 0], w = (B, G) => [B, G];
      break;
    case "topMiddle":
      A = (B, G) => [B / 2, 0], w = (B, G) => [B / 2, G];
      break;
    case "topRight":
      v = !0, A = (B, G) => [B, 0], w = (B, G) => [0, G];
      break;
    case "middleRight":
      S = !0, A = (B, G) => [B, G / 2], w = (B, G) => [0, G / 2];
      break;
    case "bottomRight":
      v = !0, A = (B, G) => [B, G], w = (B, G) => [0, 0];
      break;
    case "bottomMiddle":
      A = (B, G) => [B / 2, G], w = (B, G) => [B / 2, 0];
      break;
    case "bottomLeft":
      v = !0, A = (B, G) => [0, G], w = (B, G) => [B, 0];
      break;
    case "middleLeft":
      S = !0, A = (B, G) => [0, G / 2], w = (B, G) => [B, G / 2];
      break;
  }
  const E = A(o, l), C = w(o, l);
  let x = f(...C);
  const _ = j._round(r + x[0]), k = j._round(a + x[1]);
  let M = 1, P = 1, D, N;
  if (e.fromKeyboard)
    ({
      deltaX: D,
      deltaY: N
    } = e);
  else {
    const {
      screenX: B,
      screenY: G
    } = e, [nt, he] = n(this, ya);
    [D, N] = this.screenToPageTranslation(B - nt, G - he), n(this, ya)[0] = B, n(this, ya)[1] = G;
  }
  if ([D, N] = y(D / s, N / i), v) {
    const B = Math.hypot(o, l);
    M = P = Math.max(Math.min(Math.hypot(C[0] - E[0] - D, C[1] - E[1] - N) / B, 1 / o, 1 / l), h / o, c / l);
  } else S ? M = wt(Math.abs(C[0] - E[0] - D), h, 1) / o : P = wt(Math.abs(C[1] - E[1] - N), c, 1) / l;
  const Z = j._round(o * M), Q = j._round(l * P);
  x = f(...w(Z, Q));
  const Y = _ - x[0], K = k - x[1];
  n(this, ts) || u(this, ts, [this.x, this.y, this.width, this.height]), this.width = Z, this.height = Q, this.x = Y, this.y = K, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, Qb = function() {
  var t;
  u(this, sn, {
    savedX: this.x,
    savedY: this.y,
    savedWidth: this.width,
    savedHeight: this.height
  }), (t = n(this, xt)) == null || t.toggle(!1), this.parent.togglePointerEvents(!1);
}, Jb = function(t, e, s) {
  let r = 0.7 * (s / e) + 1 - 0.7;
  if (r === 1)
    return;
  const a = b(this, z, Pu).call(this, this.rotation), o = (_, k) => [a[0] * _ + a[2] * k, a[1] * _ + a[3] * k], [l, h] = this.parentDimensions, c = this.x, d = this.y, f = this.width, m = this.height, y = j.MIN_SIZE / l, A = j.MIN_SIZE / h;
  r = Math.max(Math.min(r, 1 / f, 1 / m), y / f, A / m);
  const w = j._round(f * r), v = j._round(m * r);
  if (w === f && v === m)
    return;
  n(this, ts) || u(this, ts, [c, d, f, m]);
  const S = o(f / 2, m / 2), E = j._round(c + S[0]), C = j._round(d + S[1]), x = o(w / 2, v / 2);
  this.x = E - x[0], this.y = C - x[1], this.width = w, this.height = v, this.setDims(), this.fixAndSetPosition(), this._onResizing();
}, Zb = function() {
  var t;
  (t = n(this, xt)) == null || t.toggle(!0), this.parent.togglePointerEvents(!0), b(this, z, Mu).call(this);
}, Xp = function(t) {
  const {
    isMac: e
  } = ot.platform;
  t.ctrlKey && !e || t.shiftKey || t.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, ty = function(t) {
  const {
    isSelected: e
  } = this;
  this._uiManager.setUpDragSession();
  let s = !1;
  const i = new AbortController(), r = this._uiManager.combinedSignal(i), a = {
    capture: !0,
    passive: !1,
    signal: r
  }, o = (h) => {
    i.abort(), u(this, cr, null), u(this, Aa, !1), this._uiManager.endDragSession() || b(this, z, Xp).call(this, h), s && this._onStopDragging();
  };
  e && (u(this, yl, t.clientX), u(this, Al, t.clientY), u(this, cr, t.pointerId), u(this, Vc, t.pointerType), window.addEventListener("pointermove", (h) => {
    s || (s = !0, this._uiManager.toggleComment(this, !0, !1), this._onStartDragging());
    const {
      clientX: c,
      clientY: d,
      pointerId: f
    } = h;
    if (f !== n(this, cr)) {
      Kt(h);
      return;
    }
    const [m, y] = this.screenToPageTranslation(c - n(this, yl), d - n(this, Al));
    u(this, yl, c), u(this, Al, d), this._uiManager.dragSelectedEditors(m, y), this.div.scrollIntoView({
      block: "nearest"
    });
  }, a), window.addEventListener("touchmove", Kt, a), window.addEventListener("pointerdown", (h) => {
    h.pointerType === n(this, Vc) && (n(this, ur) || h.isPrimary) && o(h), Kt(h);
  }, a));
  const l = (h) => {
    if (!n(this, cr) || n(this, cr) === h.pointerId) {
      o(h);
      return;
    }
    Kt(h);
  };
  window.addEventListener("pointerup", l, {
    signal: r
  }), window.addEventListener("blur", l, {
    signal: r
  });
}, Yp = function() {
  if (n(this, dr) || !this.div)
    return;
  u(this, dr, new AbortController());
  const t = this._uiManager.combinedSignal(n(this, dr));
  this.div.addEventListener("focusin", this.focusin.bind(this), {
    signal: t
  }), this.div.addEventListener("focusout", this.focusout.bind(this), {
    signal: t
  });
}, Kp = function() {
  n(this, ur) || !this.div || !this.isResizable || !this._uiManager._supportsPinchToZoom || u(this, ur, new Am({
    container: this.div,
    isPinchingDisabled: () => !this.isSelected,
    onPinchStart: b(this, z, Qb).bind(this),
    onPinching: b(this, z, Jb).bind(this),
    onPinchEnd: b(this, z, Zb).bind(this),
    signal: this._uiManager._signal
  }));
}, ey = function(t) {
  j._resizerKeyboardManager.exec(this, t);
}, sy = function(t) {
  var e;
  n(this, nn) && ((e = t.relatedTarget) == null ? void 0 : e.parentNode) !== n(this, de) && b(this, z, zh).call(this);
}, iy = function(t) {
  u(this, jc, n(this, nn) ? t : "");
}, qp = function(t) {
  if (n(this, Vs))
    for (const e of n(this, Vs))
      e.tabIndex = t;
}, zh = function() {
  u(this, nn, !1), b(this, z, qp).call(this, -1), b(this, z, Mu).call(this);
}, g(j, Yc), T(j, "_l10n", null), T(j, "_l10nAlert", null), T(j, "_l10nResizer", null), T(j, "_borderLineWidth", -1), T(j, "_colorManager", new Lp()), T(j, "_zIndex", 1), T(j, "_telemetryTimeout", 1e3);
let gt = j;
class fw extends gt {
  constructor(t) {
    super(t), this.annotationElementId = t.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const Wm = 3285377520, ws = 4294901760, oi = 65535;
class Qp {
  constructor(t) {
    this.h1 = t ? t & 4294967295 : Wm, this.h2 = t ? t & 4294967295 : Wm;
  }
  update(t) {
    let e, s;
    if (typeof t == "string") {
      e = new Uint8Array(t.length * 2), s = 0;
      for (let A = 0, w = t.length; A < w; A++) {
        const v = t.charCodeAt(A);
        v <= 255 ? e[s++] = v : (e[s++] = v >>> 8, e[s++] = v & 255);
      }
    } else if (ArrayBuffer.isView(t))
      e = t.slice(), s = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const i = s >> 2, r = s - i * 4, a = new Uint32Array(e.buffer, 0, i);
    let o = 0, l = 0, h = this.h1, c = this.h2;
    const d = 3432918353, f = 461845907, m = d & oi, y = f & oi;
    for (let A = 0; A < i; A++)
      A & 1 ? (o = a[A], o = o * d & ws | o * m & oi, o = o << 15 | o >>> 17, o = o * f & ws | o * y & oi, h ^= o, h = h << 13 | h >>> 19, h = h * 5 + 3864292196) : (l = a[A], l = l * d & ws | l * m & oi, l = l << 15 | l >>> 17, l = l * f & ws | l * y & oi, c ^= l, c = c << 13 | c >>> 19, c = c * 5 + 3864292196);
    switch (o = 0, r) {
      case 3:
        o ^= e[i * 4 + 2] << 16;
      case 2:
        o ^= e[i * 4 + 1] << 8;
      case 1:
        o ^= e[i * 4], o = o * d & ws | o * m & oi, o = o << 15 | o >>> 17, o = o * f & ws | o * y & oi, i & 1 ? h ^= o : c ^= o;
    }
    this.h1 = h, this.h2 = c;
  }
  hexdigest() {
    let t = this.h1, e = this.h2;
    return t ^= e >>> 1, t = t * 3981806797 & ws | t * 36045 & oi, e = e * 4283543511 & ws | ((e << 16 | t >>> 16) * 2950163797 & ws) >>> 16, t ^= e >>> 1, t = t * 444984403 & ws | t * 60499 & oi, e = e * 3301882366 & ws | ((e << 16 | t >>> 16) * 3120437893 & ws) >>> 16, t ^= e >>> 1, (t >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const mc = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var va, Sa, rn, ue, Tf, ny;
class wm {
  constructor() {
    g(this, Tf);
    g(this, va, !1);
    g(this, Sa, null);
    g(this, rn, null);
    g(this, ue, /* @__PURE__ */ new Map());
    T(this, "onSetModified", null);
    T(this, "onResetModified", null);
    T(this, "onAnnotationEditor", null);
  }
  getValue(t, e) {
    const s = n(this, ue).get(t);
    return s === void 0 ? e : Object.assign(e, s);
  }
  getRawValue(t) {
    return n(this, ue).get(t);
  }
  remove(t) {
    var s;
    const e = n(this, ue).get(t);
    e !== void 0 && (e instanceof gt && n(this, rn).delete(e.annotationElementId), n(this, ue).delete(t), n(this, ue).size === 0 && this.resetModified(), !n(this, ue).values().some((i) => i instanceof gt) && ((s = this.onAnnotationEditor) == null || s.call(this, null)));
  }
  setValue(t, e) {
    var r;
    const s = n(this, ue).get(t);
    let i = !1;
    if (s !== void 0)
      for (const [a, o] of Object.entries(e))
        s[a] !== o && (i = !0, s[a] = o);
    else
      i = !0, n(this, ue).set(t, e);
    i && b(this, Tf, ny).call(this), e instanceof gt && ((n(this, rn) || u(this, rn, /* @__PURE__ */ new Map())).set(e.annotationElementId, e), (r = this.onAnnotationEditor) == null || r.call(this, e.constructor._type));
  }
  has(t) {
    return n(this, ue).has(t);
  }
  get size() {
    return n(this, ue).size;
  }
  resetModified() {
    var t;
    n(this, va) && (u(this, va, !1), (t = this.onResetModified) == null || t.call(this));
  }
  get print() {
    return new ry(this);
  }
  get serializable() {
    if (n(this, ue).size === 0)
      return mc;
    const t = /* @__PURE__ */ new Map(), e = new Qp(), s = [], i = /* @__PURE__ */ Object.create(null);
    let r = !1;
    for (const [a, o] of n(this, ue)) {
      const l = o instanceof gt ? o.serialize(!1, i) : o;
      o.page && (o.pageIndex = o.page._pageIndex, delete o.page), l && (t.set(a, l), e.update(`${a}:${JSON.stringify(l)}`), r || (r = !!l.bitmap));
    }
    if (r)
      for (const a of t.values())
        a.bitmap && s.push(a.bitmap);
    return t.size > 0 ? {
      map: t,
      hash: e.hexdigest(),
      transfer: s
    } : mc;
  }
  get editorStats() {
    let t = null;
    const e = /* @__PURE__ */ new Map();
    let s = 0, i = 0;
    for (const r of n(this, ue).values()) {
      if (!(r instanceof gt)) {
        r.popup && (r.popup.deleted ? i += 1 : s += 1);
        continue;
      }
      r.isCommentDeleted ? i += 1 : r.hasEditedComment && (s += 1);
      const a = r.telemetryFinalData;
      if (!a)
        continue;
      const {
        type: o
      } = a;
      e.getOrInsertComputed(o, () => Object.getPrototypeOf(r).constructor), t || (t = /* @__PURE__ */ Object.create(null));
      const l = t[o] || (t[o] = /* @__PURE__ */ new Map());
      for (const [h, c] of Object.entries(a)) {
        if (h === "type")
          continue;
        const d = l.getOrInsertComputed(h, tp);
        d.set(c, (d.get(c) ?? 0) + 1);
      }
    }
    if ((i > 0 || s > 0) && (t || (t = /* @__PURE__ */ Object.create(null)), t.comments = {
      deleted: i,
      edited: s
    }), !t)
      return null;
    for (const [r, a] of e)
      t[r] = a.computeTelemetryFinalData(t[r]);
    return t;
  }
  resetModifiedIds() {
    u(this, Sa, null);
  }
  updateEditor(t, e) {
    var i;
    const s = (i = n(this, rn)) == null ? void 0 : i.get(t);
    return s ? (s.updateFromAnnotationLayer(e), !0) : !1;
  }
  getEditor(t) {
    var e;
    return ((e = n(this, rn)) == null ? void 0 : e.get(t)) || null;
  }
  get modifiedIds() {
    if (n(this, Sa))
      return n(this, Sa);
    const t = [];
    if (n(this, rn))
      for (const s of n(this, rn).values())
        s.serialize() && t.push(s.annotationElementId);
    let e = "";
    if (t.length) {
      const s = new Qp();
      s.update(t.join(",")), e = s.hexdigest();
    }
    return u(this, Sa, {
      ids: new Set(t),
      hash: e
    });
  }
  [Symbol.iterator]() {
    return n(this, ue).entries();
  }
}
va = new WeakMap(), Sa = new WeakMap(), rn = new WeakMap(), ue = new WeakMap(), Tf = new WeakSet(), ny = function() {
  var t;
  n(this, va) || (u(this, va, !0), (t = this.onSetModified) == null || t.call(this));
};
var Kc;
class ry extends wm {
  constructor(e) {
    super();
    g(this, Kc, mc);
    const {
      serializable: s
    } = e;
    if (s === mc)
      return;
    const {
      map: i,
      hash: r,
      transfer: a
    } = s, o = structuredClone(i, a ? {
      transfer: a
    } : null);
    u(this, Kc, {
      map: o,
      hash: r,
      transfer: []
    });
  }
  get print() {
    st("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return n(this, Kc);
  }
  get modifiedIds() {
    return R(this, "modifiedIds", {
      ids: /* @__PURE__ */ new Set(),
      hash: ""
    });
  }
}
Kc = new WeakMap();
const $o = "__forcedDependency", {
  floor: Xm,
  ceil: Ym
} = Math;
function Km(p, t, e, s, i, r) {
  p[t * 4 + 0] = Math.min(p[t * 4 + 0], e), p[t * 4 + 1] = Math.min(p[t * 4 + 1], s), p[t * 4 + 2] = Math.max(p[t * 4 + 2], i), p[t * 4 + 3] = Math.max(p[t * 4 + 3], r);
}
function pw(p, t, e, s, i) {
  let r;
  p ? (p < 0 && (r = i[0], i[0] = i[2], i[2] = r), i[0] *= p, i[2] *= p, t < 0 && (r = i[1], i[1] = i[3], i[3] = r), i[1] *= t, i[3] *= t) : i.fill(0), i[0] += e, i[1] += s, i[2] += e, i[3] += s;
}
const Jp = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0];
var wl, fr;
class gw {
  constructor(t, e) {
    g(this, wl);
    g(this, fr);
    u(this, wl, t), u(this, fr, e);
  }
  get length() {
    return n(this, wl).length;
  }
  isEmpty(t) {
    return n(this, wl)[t] === Jp;
  }
  minX(t) {
    return n(this, fr)[t * 4 + 0] / 256;
  }
  minY(t) {
    return n(this, fr)[t * 4 + 1] / 256;
  }
  maxX(t) {
    return (n(this, fr)[t * 4 + 2] + 1) / 256;
  }
  maxY(t) {
    return (n(this, fr)[t * 4 + 3] + 1) / 256;
  }
}
wl = new WeakMap(), fr = new WeakMap();
const qm = (p, t) => p == null ? void 0 : p.getOrInsertComputed(t, () => ({
  dependencies: /* @__PURE__ */ new Set(),
  isRenderingOperation: !1
}));
var an, at, St, Ea, Ca, xa, Ee, qc, Zp;
class mw {
  constructor(t, e) {
    g(this, qc);
    g(this, an, [[1, 0, 0, 1, 0, 0]]);
    g(this, at, [-1 / 0, -1 / 0, 1 / 0, 1 / 0]);
    g(this, St, new Float64Array(Ui));
    T(this, "_pendingBBoxIdx", -1);
    g(this, Ea);
    g(this, Ca);
    g(this, xa);
    g(this, Ee);
    T(this, "_savesStack", []);
    T(this, "_markedContentStack", []);
    u(this, Ea, t.width), u(this, Ca, t.height), b(this, qc, Zp).call(this, e);
  }
  growOperationsCount(t) {
    t >= n(this, Ee).length && b(this, qc, Zp).call(this, t, n(this, Ee));
  }
  get clipBox() {
    return n(this, at);
  }
  save(t) {
    return u(this, at, {
      __proto__: n(this, at)
    }), this._savesStack.push(t), this;
  }
  restore(t, e) {
    const s = Object.getPrototypeOf(n(this, at));
    if (s === null)
      return this;
    u(this, at, s);
    const i = this._savesStack.pop();
    return i !== void 0 && (e == null || e(i, t), n(this, Ee)[t] = n(this, Ee)[i]), this;
  }
  recordOpenMarker(t) {
    return this._savesStack.push(t), this;
  }
  getOpenMarker() {
    return this._savesStack.length === 0 ? null : this._savesStack.at(-1);
  }
  recordCloseMarker(t, e) {
    const s = this._savesStack.pop();
    return s !== void 0 && (e == null || e(s, t), n(this, Ee)[t] = n(this, Ee)[s]), this;
  }
  beginMarkedContent(t) {
    return this._markedContentStack.push(t), this;
  }
  endMarkedContent(t, e) {
    const s = this._markedContentStack.pop();
    return s !== void 0 && (e == null || e(s, t), n(this, Ee)[t] = n(this, Ee)[s]), this;
  }
  pushBaseTransform(t) {
    return n(this, an).push(I.multiplyByDOMMatrix(n(this, an).at(-1), t.getTransform())), this;
  }
  popBaseTransform() {
    return n(this, an).length > 1 && n(this, an).pop(), this;
  }
  resetBBox(t) {
    return this._pendingBBoxIdx !== t && (this._pendingBBoxIdx = t, n(this, St).set(Ui, 0)), this;
  }
  recordClipBox(t, e, s, i, r, a) {
    const o = I.multiplyByDOMMatrix(n(this, an).at(-1), e.getTransform()), l = Ui.slice();
    I.axialAlignedBoundingBox([s, r, i, a], o, l);
    const h = I.intersect(n(this, at), l);
    return h ? (n(this, at)[0] = h[0], n(this, at)[1] = h[1], n(this, at)[2] = h[2], n(this, at)[3] = h[3]) : (n(this, at)[0] = n(this, at)[1] = 1 / 0, n(this, at)[2] = n(this, at)[3] = -1 / 0), this;
  }
  recordBBox(t, e, s, i, r, a) {
    const o = n(this, at);
    if (o[0] === 1 / 0)
      return this;
    const l = I.multiplyByDOMMatrix(n(this, an).at(-1), e.getTransform());
    if (o[0] === -1 / 0)
      return I.axialAlignedBoundingBox([s, r, i, a], l, n(this, St)), this;
    const h = Ui.slice();
    return I.axialAlignedBoundingBox([s, r, i, a], l, h), n(this, St)[0] = wt(h[0], o[0], n(this, St)[0]), n(this, St)[1] = wt(h[1], o[1], n(this, St)[1]), n(this, St)[2] = wt(h[2], n(this, St)[2], o[2]), n(this, St)[3] = wt(h[3], n(this, St)[3], o[3]), this;
  }
  recordFullPageBBox(t) {
    return n(this, St)[0] = Math.max(0, n(this, at)[0]), n(this, St)[1] = Math.max(0, n(this, at)[1]), n(this, St)[2] = Math.min(n(this, Ea), n(this, at)[2]), n(this, St)[3] = Math.min(n(this, Ca), n(this, at)[3]), this;
  }
  recordOperation(t, e = !1, s) {
    if (this._pendingBBoxIdx !== t)
      return this;
    const i = Xm(n(this, St)[0] * 256 / n(this, Ea)), r = Xm(n(this, St)[1] * 256 / n(this, Ca)), a = Ym(n(this, St)[2] * 256 / n(this, Ea)), o = Ym(n(this, St)[3] * 256 / n(this, Ca));
    if (Km(n(this, xa), t, i, r, a, o), s)
      for (const l of s)
        for (const h of l)
          h !== t && Km(n(this, xa), h, i, r, a, o);
    return e || (this._pendingBBoxIdx = -1), this;
  }
  bboxToClipBoxDropOperation(t) {
    return this._pendingBBoxIdx === t && (this._pendingBBoxIdx = -1, n(this, at)[0] = Math.max(n(this, at)[0], n(this, St)[0]), n(this, at)[1] = Math.max(n(this, at)[1], n(this, St)[1]), n(this, at)[2] = Math.min(n(this, at)[2], n(this, St)[2]), n(this, at)[3] = Math.min(n(this, at)[3], n(this, St)[3])), this;
  }
  take() {
    return new gw(n(this, Ee), n(this, xa));
  }
  takeDebugMetadata() {
    throw new Error("Unreachable");
  }
  recordSimpleData(t, e) {
    return this;
  }
  recordIncrementalData(t, e) {
    return this;
  }
  resetIncrementalData(t, e) {
    return this;
  }
  recordNamedData(t, e) {
    return this;
  }
  recordSimpleDataFromNamed(t, e, s) {
    return this;
  }
  recordFutureForcedDependency(t, e) {
    return this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    return this;
  }
  recordCharacterBBox(t, e, s, i = 1, r = 0, a = 0, o) {
    return this;
  }
  getSimpleIndex(t) {
  }
  recordDependencies(t, e) {
    return this;
  }
  recordNamedDependency(t, e) {
    return this;
  }
  recordShowTextOperation(t, e = !1) {
    return this;
  }
}
an = new WeakMap(), at = new WeakMap(), St = new WeakMap(), Ea = new WeakMap(), Ca = new WeakMap(), xa = new WeakMap(), Ee = new WeakMap(), qc = new WeakSet(), Zp = function(t, e) {
  const s = new ArrayBuffer(t * 4);
  u(this, xa, new Uint8ClampedArray(s)), u(this, Ee, new Uint32Array(s)), e && e.length > 0 ? (n(this, Ee).set(e), n(this, Ee).fill(Jp, e.length)) : n(this, Ee).fill(Jp);
};
var Ve, je, _a, js, vl, pr, gr, ut;
class bw {
  constructor(t, e = !1) {
    g(this, Ve, {
      __proto__: null
    });
    g(this, je, {
      __proto__: null,
      transform: [],
      moveText: [],
      sameLineText: [],
      [$o]: []
    });
    g(this, _a, /* @__PURE__ */ new Map());
    g(this, js, /* @__PURE__ */ new Set());
    g(this, vl, /* @__PURE__ */ new Map());
    g(this, pr);
    g(this, gr);
    g(this, ut);
    u(this, ut, t), e && (u(this, pr, /* @__PURE__ */ new Map()), u(this, gr, (s, i) => {
      qm(n(this, pr), i).dependencies.add(s);
    }));
  }
  get clipBox() {
    return n(this, ut).clipBox;
  }
  growOperationsCount(t) {
    n(this, ut).growOperationsCount(t);
  }
  save(t) {
    return u(this, Ve, {
      __proto__: n(this, Ve)
    }), u(this, je, {
      __proto__: n(this, je),
      transform: {
        __proto__: n(this, je).transform
      },
      moveText: {
        __proto__: n(this, je).moveText
      },
      sameLineText: {
        __proto__: n(this, je).sameLineText
      },
      [$o]: {
        __proto__: n(this, je)[$o]
      }
    }), n(this, ut).save(t), this;
  }
  restore(t) {
    n(this, ut).restore(t, n(this, gr));
    const e = Object.getPrototypeOf(n(this, Ve));
    return e === null ? this : (u(this, Ve, e), u(this, je, Object.getPrototypeOf(n(this, je))), this);
  }
  recordOpenMarker(t) {
    return n(this, ut).recordOpenMarker(t, n(this, gr)), this;
  }
  getOpenMarker() {
    return n(this, ut).getOpenMarker();
  }
  recordCloseMarker(t) {
    return n(this, ut).recordCloseMarker(t, n(this, gr)), this;
  }
  beginMarkedContent(t) {
    return n(this, ut).beginMarkedContent(t), this;
  }
  endMarkedContent(t) {
    return n(this, ut).endMarkedContent(t, n(this, gr)), this;
  }
  pushBaseTransform(t) {
    return n(this, ut).pushBaseTransform(t), this;
  }
  popBaseTransform() {
    return n(this, ut).popBaseTransform(), this;
  }
  recordSimpleData(t, e) {
    return n(this, Ve)[t] = e, this;
  }
  recordIncrementalData(t, e) {
    return n(this, je)[t].push(e), this;
  }
  resetIncrementalData(t, e) {
    return n(this, je)[t].length = 0, this;
  }
  recordNamedData(t, e) {
    return n(this, _a).set(t, e), this;
  }
  recordSimpleDataFromNamed(t, e, s) {
    n(this, Ve)[t] = n(this, _a).get(e) ?? s;
  }
  recordFutureForcedDependency(t, e) {
    return this.recordIncrementalData($o, e), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    for (const e of t)
      e in n(this, Ve) && this.recordFutureForcedDependency(e, n(this, Ve)[e]);
    return this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    for (const t of n(this, js))
      this.recordFutureForcedDependency($o, t);
    return this;
  }
  resetBBox(t) {
    return n(this, ut).resetBBox(t), this;
  }
  recordClipBox(t, e, s, i, r, a) {
    return n(this, ut).recordClipBox(t, e, s, i, r, a), this;
  }
  recordBBox(t, e, s, i, r, a) {
    return n(this, ut).recordBBox(t, e, s, i, r, a), this;
  }
  recordCharacterBBox(t, e, s, i = 1, r = 0, a = 0, o) {
    const l = s.bbox;
    let h, c;
    if (l && (h = l[2] !== l[0] && l[3] !== l[1] && n(this, vl).get(s), h !== !1 && (c = [0, 0, 0, 0], I.axialAlignedBoundingBox(l, s.fontMatrix, c), (i !== 1 || r !== 0 || a !== 0) && pw(i, -i, r, a, c), h)))
      return this.recordBBox(t, e, c[0], c[2], c[1], c[3]);
    if (!o)
      return this.recordFullPageBBox(t);
    const d = o();
    return l && c && h === void 0 && (h = c[0] <= r - d.actualBoundingBoxLeft && c[2] >= r + d.actualBoundingBoxRight && c[1] <= a - d.actualBoundingBoxAscent && c[3] >= a + d.actualBoundingBoxDescent, n(this, vl).set(s, h), h) ? this.recordBBox(t, e, c[0], c[2], c[1], c[3]) : this.recordBBox(t, e, r - d.actualBoundingBoxLeft, r + d.actualBoundingBoxRight, a - d.actualBoundingBoxAscent, a + d.actualBoundingBoxDescent);
  }
  recordFullPageBBox(t) {
    return n(this, ut).recordFullPageBBox(t), this;
  }
  getSimpleIndex(t) {
    return n(this, Ve)[t];
  }
  recordDependencies(t, e) {
    const s = n(this, js), i = n(this, Ve), r = n(this, je);
    for (const a of e)
      a in n(this, Ve) ? s.add(i[a]) : a in r && r[a].forEach(s.add, s);
    return this;
  }
  recordNamedDependency(t, e) {
    return n(this, _a).has(e) && n(this, js).add(n(this, _a).get(e)), this;
  }
  recordOperation(t, e = !1) {
    if (this.recordDependencies(t, [$o]), n(this, pr)) {
      const i = qm(n(this, pr), t), {
        dependencies: r
      } = i;
      n(this, js).forEach(r.add, r), n(this, ut)._savesStack.forEach(r.add, r), n(this, ut)._markedContentStack.forEach(r.add, r), r.delete(t), i.isRenderingOperation = !0;
    }
    const s = !e && t === n(this, ut)._pendingBBoxIdx;
    return n(this, ut).recordOperation(t, e, [n(this, js), n(this, ut)._savesStack, n(this, ut)._markedContentStack]), s && n(this, js).clear(), this;
  }
  recordShowTextOperation(t, e = !1) {
    const s = Array.from(n(this, js));
    this.recordOperation(t, e), this.recordIncrementalData("sameLineText", t);
    for (const i of s)
      this.recordIncrementalData("sameLineText", i);
    return this;
  }
  bboxToClipBoxDropOperation(t, e = !1) {
    const s = !e && t === n(this, ut)._pendingBBoxIdx;
    return n(this, ut).bboxToClipBoxDropOperation(t), s && n(this, js).clear(), this;
  }
  take() {
    return n(this, vl).clear(), n(this, ut).take();
  }
  takeDebugMetadata() {
    return n(this, pr);
  }
}
Ve = new WeakMap(), je = new WeakMap(), _a = new WeakMap(), js = new WeakMap(), vl = new WeakMap(), pr = new WeakMap(), gr = new WeakMap(), ut = new WeakMap();
var ft, Nt, Ws, Sl, El;
const Dm = class Dm {
  constructor(t, e, s) {
    g(this, ft);
    g(this, Nt);
    g(this, Ws);
    g(this, Sl, 0);
    g(this, El, 0);
    if (t instanceof Dm && n(t, Ws) === !!s)
      return t;
    u(this, ft, t), u(this, Nt, e), u(this, Ws, !!s);
  }
  get clipBox() {
    return n(this, ft).clipBox;
  }
  growOperationsCount() {
    throw new Error("Unreachable");
  }
  save(t) {
    return yt(this, El)._++, n(this, ft).save(n(this, Nt)), this;
  }
  restore(t) {
    return n(this, El) > 0 && (n(this, ft).restore(n(this, Nt)), yt(this, El)._--), this;
  }
  recordOpenMarker(t) {
    return yt(this, Sl)._++, this;
  }
  getOpenMarker() {
    return n(this, Sl) > 0 ? n(this, Nt) : n(this, ft).getOpenMarker();
  }
  recordCloseMarker(t) {
    return yt(this, Sl)._--, this;
  }
  beginMarkedContent(t) {
    return this;
  }
  endMarkedContent(t) {
    return this;
  }
  pushBaseTransform(t) {
    return n(this, ft).pushBaseTransform(t), this;
  }
  popBaseTransform() {
    return n(this, ft).popBaseTransform(), this;
  }
  recordSimpleData(t, e) {
    return n(this, ft).recordSimpleData(t, n(this, Nt)), this;
  }
  recordIncrementalData(t, e) {
    return n(this, ft).recordIncrementalData(t, n(this, Nt)), this;
  }
  resetIncrementalData(t, e) {
    return n(this, ft).resetIncrementalData(t, n(this, Nt)), this;
  }
  recordNamedData(t, e) {
    return this;
  }
  recordSimpleDataFromNamed(t, e, s) {
    return n(this, ft).recordSimpleDataFromNamed(t, e, n(this, Nt)), this;
  }
  recordFutureForcedDependency(t, e) {
    return n(this, ft).recordFutureForcedDependency(t, n(this, Nt)), this;
  }
  inheritSimpleDataAsFutureForcedDependencies(t) {
    return n(this, ft).inheritSimpleDataAsFutureForcedDependencies(t), this;
  }
  inheritPendingDependenciesAsFutureForcedDependencies() {
    return n(this, ft).inheritPendingDependenciesAsFutureForcedDependencies(), this;
  }
  resetBBox(t) {
    return n(this, Ws) || n(this, ft).resetBBox(n(this, Nt)), this;
  }
  recordClipBox(t, e, s, i, r, a) {
    return n(this, Ws) || n(this, ft).recordClipBox(n(this, Nt), e, s, i, r, a), this;
  }
  recordBBox(t, e, s, i, r, a) {
    return n(this, Ws) || n(this, ft).recordBBox(n(this, Nt), e, s, i, r, a), this;
  }
  recordCharacterBBox(t, e, s, i, r, a, o) {
    return n(this, Ws) || n(this, ft).recordCharacterBBox(n(this, Nt), e, s, i, r, a, o), this;
  }
  recordFullPageBBox(t) {
    return n(this, Ws) || n(this, ft).recordFullPageBBox(n(this, Nt)), this;
  }
  getSimpleIndex(t) {
    return n(this, ft).getSimpleIndex(t);
  }
  recordDependencies(t, e) {
    return n(this, ft).recordDependencies(n(this, Nt), e), this;
  }
  recordNamedDependency(t, e) {
    return n(this, ft).recordNamedDependency(n(this, Nt), e), this;
  }
  recordOperation(t) {
    return n(this, ft).recordOperation(n(this, Nt), !0), this;
  }
  recordShowTextOperation(t) {
    return n(this, ft).recordShowTextOperation(n(this, Nt), !0), this;
  }
  bboxToClipBoxDropOperation(t) {
    return n(this, Ws) || n(this, ft).bboxToClipBoxDropOperation(n(this, Nt), !0), this;
  }
  take() {
    throw new Error("Unreachable");
  }
  takeDebugMetadata() {
    throw new Error("Unreachable");
  }
};
ft = new WeakMap(), Nt = new WeakMap(), Ws = new WeakMap(), Sl = new WeakMap(), El = new WeakMap();
let bc = Dm;
const vs = {
  stroke: ["path", "transform", "filter", "strokeColor", "strokeAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "dash"],
  fill: ["path", "transform", "filter", "fillColor", "fillAlpha", "globalCompositeOperation", "SMask"],
  imageXObject: ["transform", "SMask", "filter", "fillAlpha", "strokeAlpha", "globalCompositeOperation"],
  rawFillPath: ["filter", "fillColor", "fillAlpha"],
  showText: ["transform", "leading", "charSpacing", "wordSpacing", "hScale", "textRise", "moveText", "textMatrix", "font", "fontObj", "filter", "fillColor", "textRenderingMode", "SMask", "fillAlpha", "strokeAlpha", "globalCompositeOperation", "sameLineText"],
  transform: ["transform"],
  transformAndFill: ["transform", "filter", "fillColor"]
};
var Ta, ka, Pa, Ma, Da, Qc;
const cc = class cc {
  constructor(t) {
    g(this, Ta);
    g(this, ka);
    g(this, Pa, 4);
    g(this, Ma, 0);
    g(this, Da, new (n(cc, Qc))(n(this, Pa) * 6));
    u(this, Ta, t.width), u(this, ka, t.height);
  }
  record(t, e, s, i) {
    if (n(this, Ma) === n(this, Pa)) {
      u(this, Pa, n(this, Pa) * 2);
      const o = new (n(cc, Qc))(n(this, Pa) * 6);
      o.set(n(this, Da)), u(this, Da, o);
    }
    const r = mt(t);
    let a;
    if (i[0] !== 1 / 0) {
      const o = Ui.slice();
      I.axialAlignedBoundingBox([0, -s, e, 0], r, o);
      const l = I.intersect(i, o);
      if (!l)
        return;
      const [h, c, d, f] = l;
      if (h !== o[0] || c !== o[1] || d !== o[2] || f !== o[3]) {
        const m = Math.atan2(r[1], r[0]), y = Math.abs(Math.sin(m)), A = Math.abs(Math.cos(m));
        if (y < 1e-6 || A < 1e-6 || Math.abs(y - A) < 1e-6)
          a = [h, c, h, f, d, c];
        else {
          const w = d - h, v = f - c, S = y * y, E = A * A, C = A * y, x = E - S, _ = (v * E - w * C) / x, k = (v * C - w * S) / x;
          a = [h + k, c, h, c + _, d, f - _];
        }
      }
    }
    a || (a = [0, -s, 0, 0, e, -s], I.applyTransform(a, r, 0), I.applyTransform(a, r, 2), I.applyTransform(a, r, 4)), a[0] /= n(this, Ta), a[1] /= n(this, ka), a[2] /= n(this, Ta), a[3] /= n(this, ka), a[4] /= n(this, Ta), a[5] /= n(this, ka), n(this, Da).set(a, n(this, Ma) * 6), yt(this, Ma)._++;
  }
  take() {
    return n(this, Da).subarray(0, n(this, Ma) * 6);
  }
};
Ta = new WeakMap(), ka = new WeakMap(), Pa = new WeakMap(), Ma = new WeakMap(), Da = new WeakMap(), Qc = new WeakMap(), g(cc, Qc, ot.isFloat16ArraySupported ? Float16Array : Float32Array);
let tg = cc;
const Qm = new RegExp("\\p{Cc}", "u");
function yw(p) {
  const t = p[0];
  if (p.length < 2 || t !== '"' && t !== "'" || p.at(-1) !== t)
    return !1;
  const e = p.length - 1;
  for (let s = 1; s < e; s++) {
    const i = p[s];
    if (i === t || Qm.test(i) || i === "\\" && (++s >= e || Qm.test(p[s])))
      return !1;
  }
  return !0;
}
function Jm(p) {
  return yw(p) ? p : `"${p.replaceAll(/["\\\p{Cc}]/gu, (e) => e === '"' || e === "\\" ? `\\${e}` : `\\${e.codePointAt(0).toString(16)} `)}"`;
}
var Ia, Cl, Xs, Lh, ay, oy;
class Aw {
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null
  }) {
    g(this, Lh);
    g(this, Ia, /* @__PURE__ */ new Set());
    g(this, Cl, /* @__PURE__ */ new Set());
    g(this, Xs, null);
    this._document = t, this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(t) {
    n(this, Ia).add(t), this._document.fonts.add(t);
  }
  removeNativeFontFace(t) {
    n(this, Ia).delete(t), this._document.fonts.delete(t);
  }
  insertRule(t) {
    const e = b(this, Lh, ay).call(this);
    e.insertRule(t, e.cssRules.length);
  }
  clear() {
    var t;
    for (const e of n(this, Ia))
      this._document.fonts.delete(e);
    if (n(this, Ia).clear(), n(this, Cl).clear(), n(this, Xs)) {
      const {
        adoptedStyleSheets: e
      } = this._document;
      e != null && e.includes(n(this, Xs)) && (this._document.adoptedStyleSheets = e.filter((s) => s !== n(this, Xs))), u(this, Xs, null);
    }
    (t = this.styleElement) == null || t.remove(), this.styleElement = null;
  }
  async loadSystemFont({
    systemFontInfo: t,
    disableFontFace: e,
    _inspectFont: s
  }) {
    if (!(!t || n(this, Cl).has(t.loadedName))) {
      if (Gt(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: i,
          src: r,
          style: a
        } = t, o = new FontFace(i, r, a);
        this.addNativeFontFace(o);
        try {
          await o.load(), n(this, Cl).add(i), s == null || s(t);
        } catch {
          X(`Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(o);
        }
        return;
      }
      st("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(t) {
    if (t.attached || t.missingFile && !t.systemFontInfo)
      return;
    if (t.attached = !0, t.systemFontInfo) {
      await this.loadSystemFont(t);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const s = t.createNativeFontFace();
      if (s) {
        this.addNativeFontFace(s);
        try {
          await s.loaded;
        } catch (i) {
          throw X(`Failed to load font '${s.family}': '${i}'.`), t.disableFontFace = !0, i;
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported)
        return;
      await b(this, Lh, oy).call(this, t);
    }
  }
  get isFontLoadingAPISupported() {
    var t;
    return R(this, "isFontLoadingAPISupported", !!((t = this._document) != null && t.fonts));
  }
  get isSyncFontLoadingSupported() {
    return R(this, "isSyncFontLoadingSupported", ps || ot.platform.isFirefox);
  }
}
Ia = new WeakMap(), Cl = new WeakMap(), Xs = new WeakMap(), Lh = new WeakSet(), ay = function() {
  var e;
  if (n(this, Xs))
    return n(this, Xs);
  const t = ((e = this._document.defaultView) == null ? void 0 : e.CSSStyleSheet) || globalThis.CSSStyleSheet;
  if (!this.styleElement && t) {
    const {
      adoptedStyleSheets: s
    } = this._document;
    if (s) {
      const i = new t();
      return s.push(i), u(this, Xs, i);
    }
  }
  return this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement)), u(this, Xs, this.styleElement.sheet);
}, oy = function(t) {
  function e() {
    for (Gt(!a.done, "completeRequest() cannot be called twice."), a.done = !0; s.length > 0 && s[0].done; ) {
      const P = s.shift();
      setTimeout(P.resolve, 0);
    }
  }
  const {
    loadingRequests: s
  } = this, {
    promise: i,
    resolve: r
  } = Promise.withResolvers(), a = {
    done: !1,
    resolve: r
  };
  s.push(a), this._loadTestFont ?? (this._loadTestFont = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="));
  function o(P, D) {
    return P.charCodeAt(D) << 24 | P.charCodeAt(D + 1) << 16 | P.charCodeAt(D + 2) << 8 | P.charCodeAt(D + 3) & 255;
  }
  function l(P) {
    return String.fromCharCode(P >> 24 & 255, P >> 16 & 255, P >> 8 & 255, P & 255);
  }
  function h(P, D, N, Z) {
    const Q = P.substring(0, D), Y = P.substring(D + N);
    return Q + Z + Y;
  }
  let c, d;
  const f = this._document.createElement("canvas");
  f.width = 1, f.height = 1;
  const m = f.getContext("2d");
  let y = 0;
  function A(P, D) {
    if (++y > 30) {
      X("Load test font never loaded."), D();
      return;
    }
    if (m.font = "30px " + P, m.fillText(".", 0, 20), m.getImageData(0, 0, 1, 1).data[3] > 0) {
      D();
      return;
    }
    setTimeout(A.bind(null, P, D));
  }
  const w = `lt${Date.now()}${this.loadTestFontId++}`;
  let v = this._loadTestFont;
  v = h(v, 976, w.length, w);
  const E = 16, C = 1482184792;
  let x = o(v, E);
  for (c = 0, d = w.length - 3; c < d; c += 4)
    x = x - C + o(w, c) | 0;
  c < w.length && (x = x - C + o(w + "XXX", c) | 0), v = h(v, E, 4, l(x));
  const _ = `url(data:font/opentype;base64,${btoa(v)});`, k = `@font-face {font-family:"${w}";src:${_}}`;
  this.insertRule(k);
  const M = this._document.createElement("div");
  M.style.visibility = "hidden", M.style.width = M.style.height = "10px", M.style.position = "absolute", M.style.top = M.style.left = "0px";
  for (const P of [t.loadedName, w]) {
    const D = this._document.createElement("span");
    D.textContent = "Hi", D.style.fontFamily = P, M.append(D);
  }
  return this._document.body.append(M), A(w, () => {
    M.remove(), e();
  }), i;
};
var Jc, Bt;
class ww {
  constructor(t, e = null, s, i) {
    g(this, Jc, /* @__PURE__ */ new Map());
    g(this, Bt);
    u(this, Bt, t), this._inspectFont = e, s && (this.charProcOperatorList = s), i && Object.assign(this, i);
  }
  createNativeFontFace() {
    var s;
    const {
      data: t
    } = this;
    if (!t || this.disableFontFace)
      return null;
    let e;
    if (!this.cssFontInfo)
      e = new FontFace(this.loadedName, t, {});
    else {
      const i = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (i.style = `oblique ${this.cssFontInfo.italicAngle}deg`), e = new FontFace(Jm(this.cssFontInfo.fontFamily), t, i);
    }
    return (s = this._inspectFont) == null || s.call(this, this), e;
  }
  createFontFaceRule() {
    var i;
    const {
      data: t
    } = this;
    if (!t || this.disableFontFace)
      return null;
    const e = `url(data:${this.mimetype};base64,${t.toBase64()});`;
    let s;
    if (!this.cssFontInfo)
      s = `@font-face {font-family:"${this.loadedName}";src:${e}}`;
    else {
      let r = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (r += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), s = `@font-face {font-family:${Jm(this.cssFontInfo.fontFamily)};${r}src:${e}}`;
    }
    return (i = this._inspectFont) == null || i.call(this, this, e), s;
  }
  getPathGenerator(t, e) {
    let s = n(this, Jc).get(e);
    if (s)
      return s;
    const i = `${this.loadedName}_path_${e}`;
    let r;
    try {
      r = t.get(i);
    } catch (a) {
      X(`getPathGenerator - ignoring character: "${a}".`);
    }
    return s = xb(r == null ? void 0 : r.path), this.fontExtraProperties || t.delete(i), n(this, Jc).set(e, s), s;
  }
  get black() {
    return n(this, Bt).black;
  }
  get bold() {
    return n(this, Bt).bold;
  }
  get disableFontFace() {
    return n(this, Bt).disableFontFace;
  }
  set disableFontFace(t) {
    R(this, "disableFontFace", !!t);
  }
  get fontExtraProperties() {
    return n(this, Bt).fontExtraProperties;
  }
  get isInvalidPDFjsFont() {
    return n(this, Bt).isInvalidPDFjsFont;
  }
  get isType3Font() {
    return n(this, Bt).isType3Font;
  }
  get italic() {
    return n(this, Bt).italic;
  }
  get missingFile() {
    return n(this, Bt).missingFile;
  }
  get remeasure() {
    return n(this, Bt).remeasure;
  }
  get vertical() {
    return n(this, Bt).vertical;
  }
  get bbox() {
    return n(this, Bt).bbox;
  }
  get fontMatrix() {
    return n(this, Bt).fontMatrix;
  }
  get fallbackName() {
    return n(this, Bt).fallbackName;
  }
  get loadedName() {
    return n(this, Bt).loadedName;
  }
  get mimetype() {
    return this.missingFile ? null : "font/opentype";
  }
  get data() {
    return n(this, Bt).data;
  }
  clearData() {
    n(this, Bt).clearData();
  }
  get cssFontInfo() {
    return n(this, Bt).cssFontInfo;
  }
  get systemFontInfo() {
    return n(this, Bt).systemFontInfo;
  }
}
Jc = new WeakMap(), Bt = new WeakMap();
class ly {
}
T(ly, "strings", ["fontFamily", "fontWeight", "italicAngle"]);
class hy {
}
T(hy, "strings", ["css", "loadedName", "baseFontName", "src"]);
const ci = class ci {
};
T(ci, "bools", ["black", "bold", "disableFontFace", "fontExtraProperties", "isInvalidPDFjsFont", "isType3Font", "italic", "missingFile", "remeasure", "vertical"]), T(ci, "strings", ["fallbackName", "loadedName"]), T(ci, "OFFSET_BBOX", Math.ceil(ci.bools.length * 2 / 8)), T(ci, "OFFSET_FONT_MATRIX", ci.OFFSET_BBOX + 1 + 2 * 4), T(ci, "OFFSET_STRINGS", ci.OFFSET_FONT_MATRIX + 1 + 8 * 6);
let Un = ci;
class Fe {
}
T(Fe, "KIND", 0), T(Fe, "HAS_BBOX", 1), T(Fe, "HAS_BACKGROUND", 2), T(Fe, "SHADING_TYPE", 3), T(Fe, "N_COORD", 4), T(Fe, "N_COLOR", 8), T(Fe, "N_STOP", 12), T(Fe, "N_FIGURES", 16);
class vw {
  static get decoder() {
    return R(this, "decoder", new TextDecoder());
  }
  static get encoder() {
    return R(this, "encoder", new TextEncoder());
  }
}
function lc(p, t, e, s = 0) {
  const {
    decoder: i
  } = vw;
  for (let a = 0; a < e; a++)
    s += t.getUint32(s) + 4;
  const r = t.getUint32(s);
  return i.decode(new Uint8Array(p, s + 4, r));
}
var Zc, td, xl, Du;
class Sw {
  constructor(t) {
    g(this, xl);
    g(this, Zc);
    g(this, td);
    u(this, Zc, t), u(this, td, new DataView(t));
  }
  get fontFamily() {
    return R(this, "fontFamily", b(this, xl, Du).call(this, 0));
  }
  get fontWeight() {
    return R(this, "fontWeight", b(this, xl, Du).call(this, 1));
  }
  get italicAngle() {
    return R(this, "italicAngle", b(this, xl, Du).call(this, 2));
  }
}
Zc = new WeakMap(), td = new WeakMap(), xl = new WeakSet(), Du = function(t) {
  return Gt(t < ly.strings.length, "Invalid string index"), lc(n(this, Zc), n(this, td), t);
};
var La, mr, Ra, Vh;
class Ew {
  constructor(t) {
    g(this, Ra);
    g(this, La);
    g(this, mr);
    u(this, La, t), u(this, mr, new DataView(t));
  }
  get css() {
    return R(this, "css", b(this, Ra, Vh).call(this, 0));
  }
  get loadedName() {
    return R(this, "loadedName", b(this, Ra, Vh).call(this, 1));
  }
  get baseFontName() {
    return R(this, "baseFontName", b(this, Ra, Vh).call(this, 2));
  }
  get src() {
    return R(this, "src", b(this, Ra, Vh).call(this, 3));
  }
  get style() {
    let t = 0;
    t += 4 + n(this, mr).getUint32(t);
    const e = lc(n(this, La), n(this, mr), 0, t), s = lc(n(this, La), n(this, mr), 1, t);
    return R(this, "style", {
      style: e,
      weight: s
    });
  }
}
La = new WeakMap(), mr = new WeakMap(), Ra = new WeakSet(), Vh = function(t) {
  return Gt(t < hy.strings.length, "Invalid string index"), lc(n(this, La), n(this, mr), t, 4);
};
var Ys, Ds, Tt, Gs, eg, sg, jh;
class Cw {
  constructor(t) {
    g(this, Tt);
    g(this, Ys);
    g(this, Ds);
    u(this, Ys, t), u(this, Ds, new DataView(t));
  }
  get black() {
    return R(this, "black", b(this, Tt, Gs).call(this, 0));
  }
  get bold() {
    return R(this, "bold", b(this, Tt, Gs).call(this, 1));
  }
  get disableFontFace() {
    return R(this, "disableFontFace", b(this, Tt, Gs).call(this, 2));
  }
  get fontExtraProperties() {
    return R(this, "fontExtraProperties", b(this, Tt, Gs).call(this, 3));
  }
  get isInvalidPDFjsFont() {
    return R(this, "isInvalidPDFjsFont", b(this, Tt, Gs).call(this, 4));
  }
  get isType3Font() {
    return R(this, "isType3Font", b(this, Tt, Gs).call(this, 5));
  }
  get italic() {
    return R(this, "italic", b(this, Tt, Gs).call(this, 6));
  }
  get missingFile() {
    return R(this, "missingFile", b(this, Tt, Gs).call(this, 7));
  }
  get remeasure() {
    return R(this, "remeasure", b(this, Tt, Gs).call(this, 8));
  }
  get vertical() {
    return R(this, "vertical", b(this, Tt, Gs).call(this, 9));
  }
  get bbox() {
    return R(this, "bbox", b(this, Tt, eg).call(this, Un.OFFSET_BBOX, 4, "getInt16", 2));
  }
  get fontMatrix() {
    return R(this, "fontMatrix", b(this, Tt, eg).call(this, Un.OFFSET_FONT_MATRIX, 6, "getFloat64", 8));
  }
  get fallbackName() {
    return R(this, "fallbackName", b(this, Tt, sg).call(this, 0));
  }
  get loadedName() {
    return R(this, "loadedName", b(this, Tt, sg).call(this, 1));
  }
  get data() {
    const {
      offset: t,
      length: e
    } = b(this, Tt, jh).call(this, 2);
    return e ? new Uint8Array(n(this, Ys), t + 4, e) : void 0;
  }
  clearData() {
    const {
      offset: t,
      length: e
    } = b(this, Tt, jh).call(this, 2);
    e && (n(this, Ds).setUint32(t, 0), u(this, Ys, new Uint8Array(n(this, Ys), 0, t + 4).slice().buffer), u(this, Ds, new DataView(n(this, Ys))));
  }
  get cssFontInfo() {
    const {
      offset: t,
      length: e
    } = b(this, Tt, jh).call(this, 1);
    let s = null;
    if (e) {
      const i = new Uint8Array(n(this, Ys), t + 4, e).slice();
      s = new Sw(i.buffer);
    }
    return R(this, "cssFontInfo", s);
  }
  get systemFontInfo() {
    const {
      offset: t,
      length: e
    } = b(this, Tt, jh).call(this, 0);
    let s = null;
    if (e) {
      const i = new Uint8Array(n(this, Ys), t + 4, e).slice();
      s = new Ew(i.buffer);
    }
    return R(this, "systemFontInfo", s);
  }
}
Ys = new WeakMap(), Ds = new WeakMap(), Tt = new WeakSet(), Gs = function(t) {
  Gt(t < Un.bools.length, "Invalid boolean index");
  const e = Math.floor(t / 4), s = t * 2 % 8, i = n(this, Ds).getUint8(e) >> s & 3;
  return i === 0 ? void 0 : i === 2;
}, eg = function(t, e, s, i) {
  const r = n(this, Ds).getUint8(t++);
  if (r === 0)
    return;
  Gt(r === e, "Invalid array length.");
  const a = new Array(r);
  for (let o = 0; o < r; o++)
    a[o] = n(this, Ds)[s](t, !0), t += i;
  return a;
}, sg = function(t) {
  return Gt(t < Un.strings.length, "Invalid string index"), lc(n(this, Ys), n(this, Ds), t, Un.OFFSET_STRINGS + 4);
}, jh = function(t) {
  let e = Un.OFFSET_STRINGS;
  for (let i = 0; i <= t; i++)
    e += 4 + n(this, Ds).getUint32(e);
  const s = n(this, Ds).getUint32(e);
  return {
    offset: e,
    length: s
  };
};
class xw {
  constructor(t) {
    this.buffer = t, this.view = new DataView(t), this.data = new Uint8Array(t);
  }
  getIR() {
    const t = this.view, e = this.data[Fe.KIND], s = !!this.data[Fe.HAS_BBOX], i = !!this.data[Fe.HAS_BACKGROUND], r = t.getUint32(Fe.N_COORD, !0), a = t.getUint32(Fe.N_COLOR, !0), o = t.getUint32(Fe.N_STOP, !0);
    let l = 20;
    const h = new Float32Array(this.buffer, l, r * 2);
    l += r * 8;
    const c = new Uint8Array(this.buffer, l, a * 4);
    l += a * 4;
    const d = [];
    for (let y = 0; y < o; ++y) {
      const A = t.getFloat32(l, !0);
      l += 4;
      const w = t.getUint32(l, !0);
      l += 4, d.push([A, `#${w.toString(16).padStart(6, "0")}`]);
    }
    let f = null;
    if (s) {
      f = [];
      for (let y = 0; y < 4; ++y)
        f.push(t.getFloat32(l, !0)), l += 4;
    }
    let m = null;
    if (i && (m = new Uint8Array(this.buffer, l, 3), l += 3), e === 1)
      return ["RadialAxial", "axial", f, d, [h[0], h[1]], [h[2], h[3]], null, null];
    if (e === 2)
      return ["RadialAxial", "radial", f, d, [h[0], h[1]], [h[3], h[4]], h[2], h[5]];
    if (e === 3) {
      const y = this.data[Fe.SHADING_TYPE];
      let A = null;
      if (h.length > 0) {
        A = Ui.slice();
        for (let w = 0, v = h.length; w < v; w += 2)
          I.pointBoundingBox(h[w], h[w + 1], A);
      }
      return ["Mesh", y, h, c, r, A, f, m];
    }
    throw new Error(`Unsupported pattern kind: ${e}`);
  }
}
var _l;
class _w {
  constructor(t) {
    g(this, _l);
    u(this, _l, t);
  }
  get path() {
    return ot.isFloat16ArraySupported ? new Float16Array(n(this, _l)) : new Float32Array(n(this, _l));
  }
}
_l = new WeakMap();
function Tw(p) {
  if (p instanceof URL)
    return p;
  if (typeof p == "string") {
    if (ps) {
      if (/^[a-z][a-z0-9\-+.]+:/i.test(p))
        return new URL(p);
      const e = process.getBuiltinModule("url");
      return new URL(e.pathToFileURL(p));
    }
    const t = URL.parse(p, window.location);
    if (t)
      return t;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function kw(p) {
  if (ps && typeof Buffer < "u" && p instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (p instanceof Uint8Array && p.byteLength === p.buffer.byteLength)
    return p;
  if (typeof p == "string")
    return Zf(p);
  if (p instanceof ArrayBuffer || ArrayBuffer.isView(p) || typeof p == "object" && !isNaN(p == null ? void 0 : p.length))
    return new Uint8Array(p);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function mu(p) {
  if (typeof p != "string")
    return null;
  if (p.endsWith("/"))
    return p;
  throw new Error(`Invalid factory url: "${p}" must include trailing slash.`);
}
const ig = (p) => typeof p == "object" && Number.isInteger(p == null ? void 0 : p.num) && p.num >= 0 && Number.isInteger(p == null ? void 0 : p.gen) && p.gen >= 0, Pw = (p) => typeof p == "object" && typeof (p == null ? void 0 : p.name) == "string", cy = nw.bind(null, ig, Pw);
var on, kf;
class Mw {
  constructor() {
    g(this, on, /* @__PURE__ */ new Map());
    g(this, kf, Promise.resolve());
  }
  postMessage(t, e) {
    const s = {
      data: structuredClone(t, e ? {
        transfer: e
      } : null)
    };
    n(this, kf).then(() => {
      for (const [i] of n(this, on))
        i.call(this, s);
    });
  }
  addEventListener(t, e, s = null) {
    let i = null;
    if ((s == null ? void 0 : s.signal) instanceof AbortSignal) {
      const {
        signal: r
      } = s;
      if (r.aborted) {
        X("LoopbackPort - cannot use an `aborted` signal.");
        return;
      }
      const a = () => this.removeEventListener(t, e);
      i = () => r.removeEventListener("abort", a), r.addEventListener("abort", a);
    }
    n(this, on).set(e, i);
  }
  removeEventListener(t, e) {
    const s = n(this, on).get(e);
    s == null || s(), n(this, on).delete(e);
  }
  terminate() {
    for (const [, t] of n(this, on))
      t == null || t();
    n(this, on).clear();
  }
}
on = new WeakMap(), kf = new WeakMap();
const bu = {
  DATA: 1,
  ERROR: 2
}, Vt = {
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function Zm() {
}
function Ue(p) {
  if (p instanceof Rn || p instanceof df || p instanceof cf || p instanceof fc || p instanceof bp)
    return p;
  switch (p instanceof Error || typeof p == "object" && p !== null || st('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), p.name) {
    case "AbortException":
      return new Rn(p.message);
    case "InvalidPDFException":
      return new df(p.message);
    case "PasswordException":
      return new cf(p.message, p.code);
    case "ResponseException":
      return new fc(p.message, p.status, p.missing);
    case "UnknownErrorException":
      return new bp(p.message, p.details);
  }
  return new bp(p.message, p.toString());
}
var Tl, kl, Pf, Si, Pl, Ks, ln, Mf, Ml, Fa, Hs, dy, uy, fy, Iu;
class Wh {
  constructor(t, e, s) {
    g(this, Hs);
    g(this, Tl, /* @__PURE__ */ new Map());
    g(this, kl, /* @__PURE__ */ new Map());
    g(this, Pf, 1);
    g(this, Si);
    g(this, Pl, new AbortController());
    g(this, Ks);
    g(this, ln, /* @__PURE__ */ new Map());
    g(this, Mf, 1);
    g(this, Ml, /* @__PURE__ */ new Map());
    g(this, Fa);
    u(this, Ks, t), u(this, Fa, e), u(this, Si, s), s.addEventListener("message", b(this, Hs, dy).bind(this), {
      signal: n(this, Pl).signal
    });
  }
  on(t, e) {
    const s = n(this, Tl);
    if (s.has(t))
      throw new Error(`There is already a "${t}" handler.`);
    s.set(t, e);
  }
  send(t, e, s) {
    n(this, Si).postMessage({
      sourceName: n(this, Ks),
      targetName: n(this, Fa),
      action: t,
      data: e
    }, s);
  }
  sendWithPromise(t, e, s) {
    const i = yt(this, Pf)._++, r = Promise.withResolvers();
    n(this, kl).set(i, r);
    try {
      n(this, Si).postMessage({
        sourceName: n(this, Ks),
        targetName: n(this, Fa),
        action: t,
        callbackId: i,
        data: e
      }, s);
    } catch (a) {
      r.reject(a);
    }
    return r.promise;
  }
  sendWithStream(t, e, s, i) {
    const r = yt(this, Mf)._++, a = n(this, Ks), o = n(this, Fa), l = n(this, Si);
    return new ReadableStream({
      start: (h) => {
        const c = Promise.withResolvers();
        return n(this, ln).set(r, {
          controller: h,
          startCall: c,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }), l.postMessage({
          sourceName: a,
          targetName: o,
          action: t,
          streamId: r,
          data: e,
          desiredSize: h.desiredSize
        }, i), c.promise;
      },
      pull: (h) => {
        const c = Promise.withResolvers();
        return n(this, ln).get(r).pullCall = c, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: Vt.PULL,
          streamId: r,
          desiredSize: h.desiredSize
        }), c.promise;
      },
      cancel: (h) => {
        Gt(h instanceof Error, "cancel must have a valid reason");
        const c = Promise.withResolvers();
        return n(this, ln).get(r).cancelCall = c, n(this, ln).get(r).isClosed = !0, l.postMessage({
          sourceName: a,
          targetName: o,
          stream: Vt.CANCEL,
          streamId: r,
          reason: Ue(h)
        }), c.promise;
      }
    }, s);
  }
  destroy() {
    var t;
    (t = n(this, Pl)) == null || t.abort(), u(this, Pl, null);
  }
}
Tl = new WeakMap(), kl = new WeakMap(), Pf = new WeakMap(), Si = new WeakMap(), Pl = new WeakMap(), Ks = new WeakMap(), ln = new WeakMap(), Mf = new WeakMap(), Ml = new WeakMap(), Fa = new WeakMap(), Hs = new WeakSet(), dy = function({
  data: t
}) {
  if (t.targetName !== n(this, Ks))
    return;
  if (t.stream) {
    b(this, Hs, fy).call(this, t);
    return;
  }
  if (t.callback) {
    const {
      callbackId: s,
      callback: i
    } = t, r = n(this, kl).get(s);
    if (!r)
      throw new Error(`Cannot resolve callback ${s}`);
    if (n(this, kl).delete(s), i === bu.DATA)
      r.resolve(t.data);
    else if (i === bu.ERROR)
      r.reject(Ue(t.reason));
    else
      throw new Error("Unexpected callback case");
    return;
  }
  const e = n(this, Tl).get(t.action);
  if (!e)
    throw new Error(`Unknown action from worker: ${t.action}`);
  if (t.callbackId) {
    const s = n(this, Ks), i = t.sourceName, r = n(this, Si);
    Promise.try(e, t.data).then((a) => {
      r.postMessage({
        sourceName: s,
        targetName: i,
        callback: bu.DATA,
        callbackId: t.callbackId,
        data: a
      });
    }, (a) => {
      r.postMessage({
        sourceName: s,
        targetName: i,
        callback: bu.ERROR,
        callbackId: t.callbackId,
        reason: Ue(a)
      });
    });
    return;
  }
  if (t.streamId) {
    b(this, Hs, uy).call(this, t);
    return;
  }
  e(t.data);
}, uy = function(t) {
  const e = t.streamId, s = n(this, Ks), i = t.sourceName, r = n(this, Si), a = n(this, Ml), o = n(this, Tl).get(t.action), l = {
    enqueue(h, c = 1, d) {
      if (this.isCancelled)
        return;
      const f = this.desiredSize;
      this.desiredSize -= c, f > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), r.postMessage({
        sourceName: s,
        targetName: i,
        stream: Vt.ENQUEUE,
        streamId: e,
        chunk: h
      }, d);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, r.postMessage({
        sourceName: s,
        targetName: i,
        stream: Vt.CLOSE,
        streamId: e
      }), a.delete(e));
    },
    error(h) {
      Gt(h instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, r.postMessage({
        sourceName: s,
        targetName: i,
        stream: Vt.ERROR,
        streamId: e,
        reason: Ue(h)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: t.desiredSize,
    ready: null
  };
  l.sinkCapability.resolve(), l.ready = l.sinkCapability.promise, a.set(e, l), Promise.try(o, t.data, l).then(() => {
    r.postMessage({
      sourceName: s,
      targetName: i,
      stream: Vt.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, (h) => {
    r.postMessage({
      sourceName: s,
      targetName: i,
      stream: Vt.START_COMPLETE,
      streamId: e,
      reason: Ue(h)
    });
  });
}, fy = function(t) {
  const e = t.streamId, s = n(this, Ks), i = t.sourceName, r = n(this, Si), a = n(this, ln).get(e), o = n(this, Ml).get(e);
  switch (t.stream) {
    case Vt.START_COMPLETE:
      t.success ? a.startCall.resolve() : a.startCall.reject(Ue(t.reason));
      break;
    case Vt.PULL_COMPLETE:
      t.success ? a.pullCall.resolve() : a.pullCall.reject(Ue(t.reason));
      break;
    case Vt.PULL:
      if (!o) {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: Vt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      o.desiredSize <= 0 && t.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = t.desiredSize, Promise.try(o.onPull || Zm).then(() => {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: Vt.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, (h) => {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: Vt.PULL_COMPLETE,
          streamId: e,
          reason: Ue(h)
        });
      });
      break;
    case Vt.ENQUEUE:
      if (Gt(a, "enqueue should have stream controller"), a.isClosed)
        break;
      a.controller.enqueue(t.chunk);
      break;
    case Vt.CLOSE:
      if (Gt(a, "close should have stream controller"), a.isClosed)
        break;
      a.isClosed = !0, a.controller.close(), b(this, Hs, Iu).call(this, a, e);
      break;
    case Vt.ERROR:
      Gt(a, "error should have stream controller"), a.controller.error(Ue(t.reason)), b(this, Hs, Iu).call(this, a, e);
      break;
    case Vt.CANCEL_COMPLETE:
      t.success ? a.cancelCall.resolve() : a.cancelCall.reject(Ue(t.reason)), b(this, Hs, Iu).call(this, a, e);
      break;
    case Vt.CANCEL:
      if (!o)
        break;
      const l = Ue(t.reason);
      Promise.try(o.onCancel || Zm, l).then(() => {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: Vt.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, (h) => {
        r.postMessage({
          sourceName: s,
          targetName: i,
          stream: Vt.CANCEL_COMPLETE,
          streamId: e,
          reason: Ue(h)
        });
      }), o.sinkCapability.reject(l), o.isCancelled = !0, n(this, Ml).delete(e);
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, Iu = async function(t, e) {
  var s, i, r;
  await Promise.allSettled([(s = t.startCall) == null ? void 0 : s.promise, (i = t.pullCall) == null ? void 0 : i.promise, (r = t.cancelCall) == null ? void 0 : r.promise]), n(this, ln).delete(e);
};
var Df;
class py {
  constructor({
    cMapUrl: t = null,
    standardFontDataUrl: e = null,
    wasmUrl: s = null
  }) {
    g(this, Df, Object.freeze({
      cMapUrl: "CMap",
      standardFontDataUrl: "font",
      wasmUrl: "wasm"
    }));
    this.cMapUrl = t, this.standardFontDataUrl = e, this.wasmUrl = s;
  }
  async fetch({
    kind: t,
    filename: e
  }) {
    switch (t) {
      case "cMapUrl":
      case "standardFontDataUrl":
      case "wasmUrl":
        break;
      default:
        st(`Not implemented: ${t}`);
    }
    const s = this[t];
    if (!s)
      throw new Error(`Ensure that the \`${t}\` API parameter is provided.`);
    const i = `${s}${e}`;
    return this._fetch(i, t).catch((r) => {
      throw new Error(`Unable to load ${n(this, Df)[t]} data at: ${i}`);
    });
  }
  async _fetch(t, e) {
    st("Abstract method `_fetch` called.");
  }
}
Df = new WeakMap();
class tb extends py {
  async _fetch(t, e) {
    const s = e === "cMapUrl" && !t.endsWith(".bcmap") ? "text" : "bytes", i = await sp(t, s);
    return i instanceof Uint8Array ? i : Zf(i);
  }
}
var ed;
class gy {
  constructor({
    enableHWA: t = !1
  }) {
    g(this, ed, !1);
    u(this, ed, t);
  }
  create(t, e) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const s = this._createCanvas(t, e);
    return {
      canvas: s,
      context: s.getContext("2d", {
        willReadFrequently: !n(this, ed)
      })
    };
  }
  reset({
    canvas: t
  }, e, s) {
    if (!t)
      throw new Error("Canvas is not specified");
    if (e <= 0 || s <= 0)
      throw new Error("Invalid canvas size");
    t.width = e, t.height = s;
  }
  destroy(t) {
    const {
      canvas: e
    } = t;
    if (!e)
      throw new Error("Canvas is not specified");
    e.width = e.height = 0, t.canvas = null, t.context = null;
  }
  _createCanvas(t, e) {
    st("Abstract method `_createCanvas` called.");
  }
}
ed = new WeakMap();
class Dw extends gy {
  constructor({
    ownerDocument: t = globalThis.document,
    enableHWA: e = !1
  }) {
    super({
      enableHWA: e
    }), this._document = t;
  }
  _createCanvas(t, e) {
    const s = this._document.createElement("canvas");
    return s.width = t, s.height = e, s;
  }
}
class my {
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addKnockoutFilter(t = 0) {
    return "none";
  }
  addHighlightHCMFilter(t, e, s, i, r) {
    return "none";
  }
  addSelectionHCMFilter(t, e) {
    return "none";
  }
  addSelectionFilter() {
    return "none";
  }
  createSelectionStyle(t = null) {
    return null;
  }
  destroy(t = !1) {
  }
}
var Oa, Dl, hn, Ei, ae, Na, br, L, se, Xh, li, Lu, Kr, by, ng, qr, Yh, Kh, rg, qh, yy, ag, Ay;
class Iw extends my {
  constructor({
    docId: e,
    ownerDocument: s = globalThis.document
  }) {
    super();
    g(this, L);
    g(this, Oa);
    g(this, Dl);
    g(this, hn);
    g(this, Ei);
    g(this, ae);
    g(this, Na);
    g(this, br, 0);
    u(this, Ei, e), u(this, ae, s);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let s = n(this, L, se).get(e);
    if (s)
      return s;
    const [i, r, a] = b(this, L, Lu).call(this, e), o = e.length === 1 ? i : `${i}${r}${a}`;
    if (s = n(this, L, se).get(o), s)
      return n(this, L, se).set(e, s), s;
    const l = `g_${n(this, Ei)}_transfer_map_${yt(this, br)._++}`, h = b(this, L, Kr).call(this, l);
    n(this, L, se).set(e, h), n(this, L, se).set(o, h);
    const c = b(this, L, qr).call(this, l);
    return b(this, L, Kh).call(this, i, r, a, c), h;
  }
  addHCMFilter(e, s) {
    var y;
    const i = `${e}-${s}`, r = "base";
    let a = n(this, L, Xh).get(r);
    if ((a == null ? void 0 : a.key) === i || (a ? ((y = a.filter) == null || y.remove(), a.key = i, a.url = "none", a.filter = null) : (a = {
      key: i,
      url: "none",
      filter: null
    }, n(this, L, Xh).set(r, a)), !e || !s))
      return a.url;
    const o = b(this, L, qh).call(this, e);
    e = I.makeHexColor(...o);
    const l = b(this, L, qh).call(this, s);
    if (s = I.makeHexColor(...l), b(this, L, ag).call(this), e === "#000000" && s === "#ffffff" || e === s)
      return a.url;
    const c = Array.from({
      length: 256
    }, (A, w) => Pp(w / 255)).join(","), d = `g_${n(this, Ei)}_hcm_filter`, f = a.filter = b(this, L, qr).call(this, d);
    b(this, L, Kh).call(this, c, c, c, f), b(this, L, ng).call(this, f);
    const m = (A, w) => {
      const v = o[A] / 255, S = l[A] / 255, E = new Array(w + 1);
      for (let C = 0; C <= w; C++)
        E[C] = v + C / w * (S - v);
      return E.join(",");
    };
    return b(this, L, Kh).call(this, m(0, 5), m(1, 5), m(2, 5), f), a.url = b(this, L, Kr).call(this, d), a.url;
  }
  addSelectionHCMFilter(e, s) {
    return this.addHighlightHCMFilter("selection", e, s, "HighlightText", "Highlight");
  }
  addSelectionFilter() {
    return this.addHighlightHCMFilter("selection_default", "black", "white", "HighlightText", "Highlight");
  }
  createSelectionStyle(e = null) {
    const s = e ? this.addSelectionHCMFilter(e.foreground, e.background) : this.addSelectionFilter();
    return s === "none" || !ot.platform.isFirefox ? null : {
      "backdrop-filter": s,
      "background-color": "transparent"
    };
  }
  addAlphaFilter(e) {
    let s = n(this, L, se).get(e);
    if (s)
      return s;
    const [i] = b(this, L, Lu).call(this, [e]), r = `alpha_${i}`;
    if (s = n(this, L, se).get(r), s)
      return n(this, L, se).set(e, s), s;
    const a = `g_${n(this, Ei)}_alpha_map_${yt(this, br)._++}`, o = b(this, L, Kr).call(this, a);
    n(this, L, se).set(e, o), n(this, L, se).set(r, o);
    const l = b(this, L, qr).call(this, a);
    return b(this, L, rg).call(this, i, l), o;
  }
  addLuminosityFilter(e) {
    let s = n(this, L, se).get(e || "luminosity");
    if (s)
      return s;
    let i, r;
    if (e ? ([i] = b(this, L, Lu).call(this, [e]), r = `luminosity_${i}`) : r = "luminosity", s = n(this, L, se).get(r), s)
      return n(this, L, se).set(e, s), s;
    const a = `g_${n(this, Ei)}_luminosity_map_${yt(this, br)._++}`, o = b(this, L, Kr).call(this, a);
    n(this, L, se).set(e, o), n(this, L, se).set(r, o);
    const l = b(this, L, qr).call(this, a);
    return b(this, L, by).call(this, l), e && b(this, L, rg).call(this, i, l), o;
  }
  addKnockoutFilter(e = 0) {
    const s = e > 0 ? Math.min(1 / e, 1e6) : 1e6, i = `knockout_${s}`, r = n(this, L, se).get(i);
    if (r)
      return r;
    const a = `g_${n(this, Ei)}_knockout_filter_${yt(this, br)._++}`, o = b(this, L, Kr).call(this, a);
    n(this, L, se).set(i, o);
    const l = b(this, L, qr).call(this, a), h = n(this, ae).createElementNS(Re, "feComponentTransfer");
    l.append(h);
    const c = n(this, ae).createElementNS(Re, "feFuncA");
    return c.setAttribute("type", "linear"), c.setAttribute("slope", `${s}`), c.setAttribute("intercept", "0"), h.append(c), o;
  }
  addHighlightHCMFilter(e, s, i, r, a) {
    var S;
    const o = `${s}-${i}-${r}-${a}`;
    let l = n(this, L, Xh).get(e);
    if ((l == null ? void 0 : l.key) === o || (l ? ((S = l.filter) == null || S.remove(), l.key = o, l.url = "none", l.filter = null) : (l = {
      key: o,
      url: "none",
      filter: null
    }, n(this, L, Xh).set(e, l)), !s || !i))
      return l.url;
    const [h, c] = [s, i].map(b(this, L, qh).bind(this));
    let d = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]), f = Math.round(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]), [m, y] = [r, a].map(b(this, L, Ay).bind(this));
    f < d && ([d, f, m, y] = [f, d, y, m]), b(this, L, ag).call(this);
    const A = (E, C, x) => {
      const _ = new Array(256), k = (f - d) / x, M = E / 255, P = (C - E) / (255 * x);
      let D = 0;
      for (let N = 0; N <= x; N++) {
        const Z = Math.round(d + N * k), Q = M + N * P;
        for (let Y = D; Y <= Z; Y++)
          _[Y] = Q;
        D = Z + 1;
      }
      for (let N = D; N < 256; N++)
        _[N] = _[D - 1];
      return _.join(",");
    }, w = `g_${n(this, Ei)}_hcm_${e}_filter`, v = l.filter = b(this, L, qr).call(this, w);
    return b(this, L, ng).call(this, v), b(this, L, Kh).call(this, A(m[0], y[0], 5), A(m[1], y[1], 5), A(m[2], y[2], 5), v), l.url = b(this, L, Kr).call(this, w), l.url;
  }
  destroy(e = !1) {
    var s, i, r, a;
    e && ((s = n(this, Na)) != null && s.size) || ((i = n(this, hn)) == null || i.parentNode.parentNode.remove(), u(this, hn, null), (r = n(this, Dl)) == null || r.clear(), u(this, Dl, null), (a = n(this, Na)) == null || a.clear(), u(this, Na, null), u(this, br, 0));
  }
}
Oa = new WeakMap(), Dl = new WeakMap(), hn = new WeakMap(), Ei = new WeakMap(), ae = new WeakMap(), Na = new WeakMap(), br = new WeakMap(), L = new WeakSet(), se = function() {
  return n(this, Dl) || u(this, Dl, /* @__PURE__ */ new Map());
}, Xh = function() {
  return n(this, Na) || u(this, Na, /* @__PURE__ */ new Map());
}, li = function() {
  if (!n(this, hn)) {
    const e = n(this, ae).createElement("div"), {
      style: s
    } = e;
    s.colorScheme = "only light", s.visibility = "hidden", s.contain = "strict", s.width = s.height = 0, s.position = "absolute", s.top = s.left = 0, s.zIndex = -1;
    const i = n(this, ae).createElementNS(Re, "svg");
    i.setAttribute("width", 0), i.setAttribute("height", 0), u(this, hn, n(this, ae).createElementNS(Re, "defs")), e.append(i), i.append(n(this, hn)), n(this, ae).body.append(e);
  }
  return n(this, hn);
}, Lu = function(e) {
  const s = (o) => o && Array.from(o, (l) => l / 255).join(",");
  if (e.length === 1) {
    const o = s(e[0]);
    return [o, o, o];
  }
  const [i, r, a] = e;
  return [s(i), s(r), s(a)];
}, Kr = function(e) {
  if (n(this, Oa) === void 0) {
    u(this, Oa, "");
    const s = n(this, ae).URL;
    s !== n(this, ae).baseURI && (fu(s) ? X('#createUrl: ignore "data:"-URL for performance reasons.') : u(this, Oa, mm(s, "")));
  }
  return `url(${n(this, Oa)}#${e})`;
}, by = function(e) {
  const s = n(this, ae).createElementNS(Re, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(s);
}, ng = function(e) {
  const s = n(this, ae).createElementNS(Re, "feColorMatrix");
  s.setAttribute("type", "matrix"), s.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(s);
}, qr = function(e) {
  const s = n(this, ae).createElementNS(Re, "filter");
  return s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("id", e), n(this, L, li).append(s), s;
}, Yh = function(e, s, i) {
  if (!i)
    return;
  const r = n(this, ae).createElementNS(Re, s);
  r.setAttribute("type", "discrete"), r.setAttribute("tableValues", i), e.append(r);
}, Kh = function(e, s, i, r) {
  const a = n(this, ae).createElementNS(Re, "feComponentTransfer");
  r.append(a), b(this, L, Yh).call(this, a, "feFuncR", e), b(this, L, Yh).call(this, a, "feFuncG", s), b(this, L, Yh).call(this, a, "feFuncB", i);
}, rg = function(e, s) {
  const i = n(this, ae).createElementNS(Re, "feComponentTransfer");
  s.append(i), b(this, L, Yh).call(this, i, "feFuncA", e);
}, qh = function(e) {
  return n(this, L, li).style.color = "CanvasText", n(this, L, li).style.backgroundColor = e, Fh(getComputedStyle(n(this, L, li)).getPropertyValue("background-color"));
}, yy = function(e) {
  return n(this, L, li).style.color = "CanvasText", n(this, L, li).style.backgroundColor = e, Uo(getComputedStyle(n(this, L, li)).getPropertyValue("background-color"));
}, ag = function() {
  n(this, L, li).style.color = "", n(this, L, li).style.backgroundColor = "";
}, Ay = function(e) {
  const [s, i, r, a] = b(this, L, yy).call(this, e);
  if (a === 1)
    return [s, i, r];
  const [o, l, h] = b(this, L, qh).call(this, "Canvas");
  return [vp(s, o, a), vp(i, l, a), vp(r, h, a)];
};
function vp(p, t, e) {
  return Math.round(e * p + (1 - e) * t);
}
ps && X("Please use the `legacy` build in Node.js environments.");
async function Lw(p) {
  const e = await process.getBuiltinModule("fs/promises").readFile(p);
  return new Uint8Array(e);
}
class Rw extends my {
}
class Fw extends gy {
  _createCanvas(t, e) {
    return process.getBuiltinModule("module").createRequire(import.meta.url)("@napi-rs/canvas").createCanvas(t, e);
  }
}
class Ow extends py {
  async _fetch(t, e) {
    return Lw(t);
  }
}
function wy({
  src: p,
  srcPos: t = 0,
  dest: e,
  width: s,
  height: i,
  nonBlackColor: r = 4294967295,
  inverseDecode: a = !1
}) {
  const o = ot.isLittleEndian ? 4278190080 : 255, [l, h] = a ? [r, o] : [o, r], c = s >> 3, d = s & 7, f = l ^ h, m = p.length;
  e = new Uint32Array(e.buffer);
  let y = 0;
  for (let A = 0; A < i; ++A) {
    for (const v = t + c; t < v; ++t, y += 8) {
      const S = p[t];
      e[y] = l ^ -(S >> 7 & 1) & f, e[y + 1] = l ^ -(S >> 6 & 1) & f, e[y + 2] = l ^ -(S >> 5 & 1) & f, e[y + 3] = l ^ -(S >> 4 & 1) & f, e[y + 4] = l ^ -(S >> 3 & 1) & f, e[y + 5] = l ^ -(S >> 2 & 1) & f, e[y + 6] = l ^ -(S >> 1 & 1) & f, e[y + 7] = l ^ -(S & 1) & f;
    }
    if (d === 0)
      continue;
    const w = t < m ? p[t++] : 255;
    for (let v = 0; v < d; ++v, ++y)
      e[y] = l ^ -(w >> 7 - v & 1) & f;
  }
  return {
    srcPos: t,
    destPos: y
  };
}
function Nw({
  src: p,
  srcPos: t = 0,
  dest: e,
  destPos: s = 0,
  width: i,
  height: r
}) {
  let a = 0;
  const o = i * r * 3, l = o >> 2, h = new Uint32Array(p.buffer, t, l), c = ot.isLittleEndian ? 4278190080 : 255;
  if (ot.isLittleEndian) {
    for (; a < l - 2; a += 3, s += 4) {
      const d = h[a], f = h[a + 1], m = h[a + 2];
      e[s] = d | c, e[s + 1] = d >>> 24 | f << 8 | c, e[s + 2] = f >>> 16 | m << 16 | c, e[s + 3] = m >>> 8 | c;
    }
    for (let d = t + a * 4, f = t + o; d < f; d += 3)
      e[s++] = p[d] | p[d + 1] << 8 | p[d + 2] << 16 | c;
  } else {
    for (; a < l - 2; a += 3, s += 4) {
      const d = h[a], f = h[a + 1], m = h[a + 2];
      e[s] = d | c, e[s + 1] = d << 24 | f >>> 8 | c, e[s + 2] = f << 16 | m >>> 16 | c, e[s + 3] = m << 8 | c;
    }
    for (let d = t + a * 4, f = t + o; d < f; d += 3)
      e[s++] = p[d] << 24 | p[d + 1] << 16 | p[d + 2] << 8 | c;
  }
  return {
    srcPos: t + o,
    destPos: s
  };
}
const Bw = `
struct Uniforms {
  offsetX      : f32,
  offsetY      : f32,
  scaleX       : f32,
  scaleY       : f32,
  paddedWidth  : f32,
  paddedHeight : f32,
  borderSize   : f32,
  _pad         : f32,
};

@group(0) @binding(0) var<uniform> u : Uniforms;

struct VertexInput {
  @location(0) position : vec2<f32>,
  @location(1) color    : vec4<f32>,
};

struct VertexOutput {
  @builtin(position) position : vec4<f32>,
  @location(0)       color    : vec3<f32>,
};

@vertex
fn vs_main(in : VertexInput) -> VertexOutput {
  var out : VertexOutput;
  let cx = (in.position.x + u.offsetX) * u.scaleX;
  let cy = (in.position.y + u.offsetY) * u.scaleY;
  out.position = vec4<f32>(
    ((cx + u.borderSize) / u.paddedWidth) * 2.0 - 1.0,
    1.0 - ((cy + u.borderSize) / u.paddedHeight) * 2.0,
    0.0,
    1.0
  );
  out.color = in.color.rgb;
  return out;
}

@fragment
fn fs_main(in : VertexOutput) -> @location(0) vec4<f32> {
  return vec4<f32>(in.color, 1.0);
}
`;
var If, cn, Ba, Il, Lf, vy;
class Hw {
  constructor() {
    g(this, Lf);
    g(this, If, null);
    g(this, cn, null);
    g(this, Ba, null);
    g(this, Il, null);
  }
  init() {
    return n(this, If) || u(this, If, b(this, Lf, vy).call(this));
  }
  get isReady() {
    return n(this, cn) !== null;
  }
  loadMeshShader() {
    if (!n(this, cn) || n(this, Ba))
      return;
    const t = n(this, cn).createShaderModule({
      code: Bw
    });
    u(this, Ba, n(this, cn).createRenderPipeline({
      layout: "auto",
      vertex: {
        module: t,
        entryPoint: "vs_main",
        buffers: [{
          arrayStride: 2 * 4,
          attributes: [{
            shaderLocation: 0,
            offset: 0,
            format: "float32x2"
          }]
        }, {
          arrayStride: 4,
          attributes: [{
            shaderLocation: 1,
            offset: 0,
            format: "unorm8x4"
          }]
        }]
      },
      fragment: {
        module: t,
        entryPoint: "fs_main",
        targets: [{
          format: n(this, Il)
        }]
      },
      primitive: {
        topology: "triangle-list"
      }
    }));
  }
  draw(t, e, s, i, r, a, o, l) {
    this.loadMeshShader();
    const h = n(this, cn), {
      offsetX: c,
      offsetY: d,
      scaleX: f,
      scaleY: m
    } = i, y = h.createBuffer({
      size: Math.max(t.byteLength, 4),
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    });
    t.byteLength > 0 && h.queue.writeBuffer(y, 0, t);
    const A = h.createBuffer({
      size: Math.max(e.byteLength, 4),
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
    });
    e.byteLength > 0 && h.queue.writeBuffer(A, 0, e);
    const w = h.createBuffer({
      size: 8 * 4,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });
    h.queue.writeBuffer(w, 0, new Float32Array([c, d, f, m, a, o, l, 0]));
    const v = h.createBindGroup({
      layout: n(this, Ba).getBindGroupLayout(0),
      entries: [{
        binding: 0,
        resource: {
          buffer: w
        }
      }]
    }), S = new OffscreenCanvas(a, o), E = S.getContext("webgpu");
    E.configure({
      device: h,
      format: n(this, Il),
      alphaMode: r ? "opaque" : "premultiplied"
    });
    const C = r ? {
      r: r[0] / 255,
      g: r[1] / 255,
      b: r[2] / 255,
      a: 1
    } : {
      r: 0,
      g: 0,
      b: 0,
      a: 0
    }, x = h.createCommandEncoder(), _ = x.beginRenderPass({
      colorAttachments: [{
        view: E.getCurrentTexture().createView(),
        clearValue: C,
        loadOp: "clear",
        storeOp: "store"
      }]
    });
    return s > 0 && (_.setPipeline(n(this, Ba)), _.setBindGroup(0, v), _.setVertexBuffer(0, y), _.setVertexBuffer(1, A), _.draw(s)), _.end(), h.queue.submit([x.finish()]), y.destroy(), A.destroy(), w.destroy(), S.transferToImageBitmap();
  }
}
If = new WeakMap(), cn = new WeakMap(), Ba = new WeakMap(), Il = new WeakMap(), Lf = new WeakSet(), vy = async function() {
  var t;
  if (!((t = globalThis.navigator) != null && t.gpu))
    return !1;
  try {
    const e = await navigator.gpu.requestAdapter();
    return e ? (u(this, Il, navigator.gpu.getPreferredCanvasFormat()), u(this, cn, await e.requestDevice()), !0) : !1;
  } catch {
    return !1;
  }
};
const rp = new Hw();
function Uw() {
  return rp.init();
}
function Gw() {
  return rp.isReady;
}
function $w() {
  rp.loadMeshShader();
}
function zw(p, t, e, s, i, r, a, o) {
  return rp.draw(p, t, e, s, i, r, a, o);
}
const ge = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function Ru(p, t) {
  if (!t)
    return;
  const e = t[2] - t[0], s = t[3] - t[1], i = new Path2D();
  i.rect(t[0], t[1], e, s), p.clip(i);
}
class vm {
  constructor() {
    T(this, "matrix", null);
  }
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern() {
    st("Abstract method `getPattern` called.");
  }
}
class Vw extends vm {
  constructor(t) {
    super(), this._type = t[1], this._bbox = t[2], this._colorStops = t[3], this._p0 = t[4], this._p1 = t[5], this._r0 = t[6], this._r1 = t[7];
  }
  isOriginBased() {
    return this._p0[0] === 0 && this._p0[1] === 0 && (!this.isRadial() || this._p1[0] === 0 && this._p1[1] === 0);
  }
  isRadial() {
    return this._type === "radial";
  }
  areConic() {
    if (!this.isRadial())
      return !1;
    const t = Math.hypot(this._p0[0] - this._p1[0], this._p0[1] - this._p1[1]);
    return t + this._r1 > this._r0 && t + this._r0 > this._r1;
  }
  _createGradient(t, e = null) {
    let s, i = this._p0, r = this._p1;
    if (e && (i = i.slice(), r = r.slice(), I.applyTransform(i, e), I.applyTransform(r, e)), this._type === "axial")
      s = t.createLinearGradient(i[0], i[1], r[0], r[1]);
    else if (this._type === "radial") {
      let a = this._r0, o = this._r1;
      if (e) {
        const l = new Float32Array(2);
        I.singularValueDecompose2dScale(e, l), a *= l[0], o *= l[0];
      }
      s = t.createRadialGradient(i[0], i[1], a, r[0], r[1], o);
    }
    for (const a of this._colorStops)
      s.addColorStop(a[0], a[1]);
    return s;
  }
  _createReversedGradient(t, e = null) {
    let s = this._p1, i = this._p0;
    e && (s = s.slice(), i = i.slice(), I.applyTransform(s, e), I.applyTransform(i, e));
    let r = this._r1, a = this._r0;
    if (e) {
      const h = new Float32Array(2);
      I.singularValueDecompose2dScale(e, h), r *= h[0], a *= h[0];
    }
    const o = t.createRadialGradient(s[0], s[1], r, i[0], i[1], a), l = this._colorStops.map(([h, c]) => [1 - h, c]).reverse();
    for (const [h, c] of l)
      o.addColorStop(h, c);
    return o;
  }
  _createRasterPattern(t, e, s, i, r, a) {
    const o = Math.ceil(i[2] - i[0]) || 1, l = Math.ceil(i[3] - i[1]) || 1, h = e.canvasFactory.create(o, l), c = h.context;
    c.clearRect(0, 0, o, l), c.beginPath(), c.rect(0, 0, o, l), c.translate(-i[0], -i[1]), s = I.transform(s, [1, 0, 0, 1, i[0], i[1]]), c.transform(...r), Ru(c, this._bbox), this.areConic() && (c.fillStyle = this._createReversedGradient(c), c.fill()), c.fillStyle = this._createGradient(c), c.fill(), a == null || a.applyToCanvas(c);
    const d = t.createPattern(h.canvas, "no-repeat");
    return e.canvasFactory.destroy(h), d.setTransform(new DOMMatrix(s)), d;
  }
  getPattern(t, e, s, i) {
    const r = e.current.transferMapsFallback;
    if (i === ge.STROKE || i === ge.FILL) {
      if (this.isOriginBased() && !r) {
        let l = I.transform(s, e.baseTransform);
        this.matrix && (l = I.transform(l, this.matrix));
        const h = 1e-3, c = Math.hypot(l[0], l[1]), d = Math.hypot(l[2], l[3]), f = (l[0] * l[2] + l[1] * l[3]) / (c * d);
        if (Math.abs(f) < h)
          if (this.isRadial()) {
            if (Math.abs(c - d) < h)
              return this._createGradient(t, l);
          } else
            return this._createGradient(t, l);
      }
      const a = e.current.getClippedPathBoundingBox(i, mt(t)) || [0, 0, 0, 0], o = this.matrix ? I.transform(e.baseTransform, this.matrix) : e.baseTransform;
      return this._createRasterPattern(t, e, s, a, o, r);
    }
    return r && s ? this._createRasterPattern(t, e, s, e.current.clipBox, mt(t), r) : (this.areConic() && (t.save(), Ru(t, this._bbox), t.fillStyle = this._createReversedGradient(t), t.fillRect(-1e10, -1e10, 2e10, 2e10), t.restore()), Ru(t, this._bbox), this._createGradient(t));
  }
}
function jw(p, t, e, s, i, r, a, o) {
  const l = t.coords, h = t.colors, c = p.data, d = p.width * 4;
  let f;
  l[e * 2 + 1] > l[s * 2 + 1] && (f = e, e = s, s = f, f = r, r = a, a = f), l[s * 2 + 1] > l[i * 2 + 1] && (f = s, s = i, i = f, f = a, a = o, o = f), l[e * 2 + 1] > l[s * 2 + 1] && (f = e, e = s, s = f, f = r, r = a, a = f);
  const m = (l[e * 2] + t.offsetX) * t.scaleX, y = (l[e * 2 + 1] + t.offsetY) * t.scaleY, A = (l[s * 2] + t.offsetX) * t.scaleX, w = (l[s * 2 + 1] + t.offsetY) * t.scaleY, v = (l[i * 2] + t.offsetX) * t.scaleX, S = (l[i * 2 + 1] + t.offsetY) * t.scaleY;
  if (y >= S)
    return;
  const E = h[r * 4], C = h[r * 4 + 1], x = h[r * 4 + 2], _ = h[a * 4], k = h[a * 4 + 1], M = h[a * 4 + 2], P = h[o * 4], D = h[o * 4 + 1], N = h[o * 4 + 2], Z = Math.round(y), Q = Math.round(S);
  let Y, K, B, G, nt, he, ee, _e;
  for (let Rt = Z; Rt <= Q; Rt++) {
    if (Rt < w) {
      const $t = Rt < y ? 0 : (y - Rt) / (y - w);
      Y = m - (m - A) * $t, K = E - (E - _) * $t, B = C - (C - k) * $t, G = x - (x - M) * $t;
    } else {
      let $t;
      Rt > S ? $t = 1 : w === S ? $t = 0 : $t = (w - Rt) / (w - S), Y = A - (A - v) * $t, K = _ - (_ - P) * $t, B = k - (k - D) * $t, G = M - (M - N) * $t;
    }
    let Ft;
    Rt < y ? Ft = 0 : Rt > S ? Ft = 1 : Ft = (y - Rt) / (y - S), nt = m - (m - v) * Ft, he = E - (E - P) * Ft, ee = C - (C - D) * Ft, _e = x - (x - N) * Ft;
    const Xr = Math.round(Math.min(Y, nt)), Be = Math.round(Math.max(Y, nt));
    let qe = d * Rt + Xr * 4;
    for (let $t = Xr; $t <= Be; $t++)
      Ft = (Y - $t) / (Y - nt), Ft < 0 ? Ft = 0 : Ft > 1 && (Ft = 1), c[qe++] = K - (K - he) * Ft | 0, c[qe++] = B - (B - ee) * Ft | 0, c[qe++] = G - (G - _e) * Ft | 0, c[qe++] = 255;
  }
}
class Ww extends vm {
  constructor(t) {
    super(), this._posData = t[2], this._colData = t[3], this._vertexCount = t[4], this._bounds = t[5], this._bbox = t[6], this._background = t[7], $w();
  }
  _createMeshCanvas(t, e, s, i = null) {
    const l = Math.floor(this._bounds[0]), h = Math.floor(this._bounds[1]), c = Math.ceil(this._bounds[2]) - l, d = Math.ceil(this._bounds[3]) - h, f = Math.min(Math.ceil(Math.abs(c * t[0] * 1.1)), 3e3) || 1, m = Math.min(Math.ceil(Math.abs(d * t[1] * 1.1)), 3e3) || 1, y = c ? c / f : 1, A = d ? d / m : 1, w = {
      coords: this._posData,
      colors: this._colData,
      offsetX: -l,
      offsetY: -h,
      scaleX: 1 / y,
      scaleY: 1 / A
    }, v = f + 2 * 2, S = m + 2 * 2, E = s.create(v, S);
    if (Gw() && this._vertexCount > 48)
      E.context.drawImage(zw(this._posData, this._colData, this._vertexCount, w, e, v, S, 2), 0, 0);
    else {
      const C = E.context.createImageData(f, m);
      if (e) {
        const x = C.data;
        for (let _ = 0, k = x.length; _ < k; _ += 4)
          x[_] = e[0], x[_ + 1] = e[1], x[_ + 2] = e[2], x[_ + 3] = 255;
      }
      for (let x = 0, _ = this._vertexCount; x < _; x += 3)
        jw(C, w, x, x + 1, x + 2, x, x + 1, x + 2);
      E.context.putImageData(C, 2, 2);
    }
    return i == null || i.applyToCanvas(E.context), {
      canvas: E.canvas,
      offsetX: l - 2 * y,
      offsetY: h - 2 * A,
      scaleX: y,
      scaleY: A
    };
  }
  isModifyingCurrentTransform() {
    return !0;
  }
  getPattern(t, e, s, i) {
    Ru(t, this._bbox);
    const r = new Float32Array(2);
    if (i === ge.SHADING)
      I.singularValueDecompose2dScale(mt(t), r);
    else if (this.matrix) {
      I.singularValueDecompose2dScale(this.matrix, r);
      const [l, h] = r;
      I.singularValueDecompose2dScale(e.baseTransform, r), r[0] *= l, r[1] *= h;
    } else
      I.singularValueDecompose2dScale(e.baseTransform, r);
    const a = this._createMeshCanvas(r, i === ge.SHADING ? null : this._background, e.canvasFactory, e.current.transferMapsFallback);
    i !== ge.SHADING && (t.setTransform(...e.baseTransform), this.matrix && t.transform(...this.matrix)), t.translate(a.offsetX, a.offsetY), t.scale(a.scaleX, a.scaleY);
    const o = t.createPattern(a.canvas, "no-repeat");
    return e.canvasFactory.destroy(a), o;
  }
}
class Xw extends vm {
  getPattern() {
    return "hotpink";
  }
}
function Yw(p) {
  switch (p[0]) {
    case "RadialAxial":
      return new Vw(p);
    case "Mesh":
      return new Ww(p);
    case "Dummy":
      return new Xw();
  }
  throw new Error(`Unknown IR type: ${p[0]}`);
}
const eb = {
  COLORED: 1,
  UNCOLORED: 2
}, Rf = class Rf {
  constructor(t, e, s, i) {
    this.color = t[1], this.operatorList = t[2], this.matrix = t[3], this.bbox = t[4], this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.needsIsolation = t[9] ?? !0, this.ctx = e, this.canvasGraphicsFactory = s, this.baseTransform = i, this.patternBaseMatrix = this.matrix ? I.transform(i, this.matrix) : i;
  }
  canSkipPatternCanvas([t, e, s, i]) {
    const [r, a, o, l] = this.bbox, h = Math.abs(this.xstep), c = Math.abs(this.ystep);
    if (t > h + 1e-6 || e > c + 1e-6)
      return null;
    const d = Math.floor((s - o) / h) + 1, f = Math.ceil((s + t - r) / h) - 1, m = Math.floor((i - l) / c) + 1, y = Math.ceil((i + e - a) / c) - 1;
    return f <= d && y <= m ? [d, m] : null;
  }
  updatePatternDims(t, e) {
    const s = Ui.slice();
    I.axialAlignedBoundingBox(t, I.inverseTransform(this.patternBaseMatrix), s), e[0] = s[2] - s[0], e[1] = s[3] - s[1], e[2] = s[0], e[3] = s[1];
  }
  _renderTileCanvas(t, e, s, i) {
    var f, m;
    const [r, a, o, l] = this.bbox, h = t.canvasFactory.create(s.size, i.size), c = h.context, d = this.canvasGraphicsFactory.createCanvasGraphics(c, e);
    return d.groupLevel = t.groupLevel, d.current.transferMapsFallback = t.current.transferMapsFallback, this.setFillAndStrokeStyleToContext(d, this.paintType, this.color), c.translate(-s.scale * r, -i.scale * a), d.transform(0, s.scale, 0, 0, i.scale, 0, 0), c.save(), (f = d.dependencyTracker) == null || f.save(), this.clipBbox(d, r, a, o, l), d.baseTransform = mt(d.ctx), d.executeOperatorList(this.operatorList), d.endDrawing(), (m = d.dependencyTracker) == null || m.restore(), c.restore(), h;
  }
  _getCombinedScales() {
    const t = new Float32Array(2);
    I.singularValueDecompose2dScale(this.matrix, t);
    const [e, s] = t;
    return I.singularValueDecompose2dScale(this.baseTransform, t), [e * t[0], s * t[1]];
  }
  drawPattern(t, e, s = !1, [i, r], a) {
    const [o, l, h, c] = this.bbox, d = t.dependencyTracker;
    if (d && (t.dependencyTracker = new bc(d, a)), t.save(), s ? t.ctx.clip(e, "evenodd") : t.ctx.clip(e), t.ctx.setTransform(...this.patternBaseMatrix), t.ctx.translate(i * this.xstep, r * this.ystep), this.needsIsolation || t.ctx.globalAlpha !== 1 || t.ctx.globalCompositeOperation !== "source-over" || t.inSMaskMode) {
      const f = h - o, m = c - l, [y, A] = this._getCombinedScales(), w = this.getSizeAndScale(f, this.ctx.canvas.width, y), v = this.getSizeAndScale(m, this.ctx.canvas.height, A), S = this._renderTileCanvas(t, a, w, v);
      t.ctx.drawImage(S.canvas, o, l, f, m), t.canvasFactory.destroy(S);
    } else
      this.setFillAndStrokeStyleToContext(t, this.paintType, this.color), this.clipBbox(t, o, l, h, c), t.baseTransformStack.push(t.baseTransform), t.baseTransform = mt(t.ctx), t.executeOperatorList(this.operatorList), t.baseTransform = t.baseTransformStack.pop();
    t.restore(), d && (t.dependencyTracker = d);
  }
  createPatternCanvas(t, e) {
    const [s, i, r, a] = this.bbox, o = r - s, l = a - i;
    let {
      xstep: h,
      ystep: c
    } = this;
    h = Math.abs(h), c = Math.abs(c), Jf("TilingType: " + this.tilingType);
    const [d, f] = this._getCombinedScales();
    let m = o, y = l, A = !1, w = !1;
    Math.ceil(h * d) >= Math.ceil(o * d) ? m = h : A = !0, Math.ceil(c * f) >= Math.ceil(l * f) ? y = c : w = !0;
    const v = this.getSizeAndScale(m, this.ctx.canvas.width, d), S = this.getSizeAndScale(y, this.ctx.canvas.height, f), E = this._renderTileCanvas(t, e, v, S);
    if (A || w) {
      const C = E.canvas;
      A && (m = h), w && (y = c);
      const x = this.getSizeAndScale(m, this.ctx.canvas.width, d), _ = this.getSizeAndScale(y, this.ctx.canvas.height, f), k = x.size, M = _.size, P = t.canvasFactory.create(k, M), D = P.context, N = A ? Math.min(Math.floor(o / h), Math.ceil(C.width / k)) : 0, Z = w ? Math.min(Math.floor(l / c), Math.ceil(C.height / M)) : 0;
      let Q = C, Y = null;
      if (w) {
        Y = t.canvasFactory.create(C.width, M);
        const K = Y.context;
        for (let B = Z; B >= 0; B--)
          K.drawImage(C, 0, M * B, C.width, M, 0, 0, C.width, M);
        Q = Y.canvas;
      }
      for (let K = N; K >= 0; K--)
        D.drawImage(Q, k * K, 0, k, M, 0, 0, k, M);
      return Y && t.canvasFactory.destroy(Y), t.canvasFactory.destroy(E), {
        canvas: P.canvas,
        canvasEntry: P,
        scaleX: x.scale,
        scaleY: _.scale,
        offsetX: s,
        offsetY: i
      };
    }
    return {
      canvas: E.canvas,
      canvasEntry: E,
      scaleX: v.scale,
      scaleY: S.scale,
      offsetX: s,
      offsetY: i
    };
  }
  getSizeAndScale(t, e, s) {
    const i = Math.max(Rf.MAX_PATTERN_SIZE, e);
    let r = Math.ceil(t * s);
    return r >= i ? r = i : s = r / t, {
      scale: s,
      size: r
    };
  }
  clipBbox(t, e, s, i, r) {
    const a = i - e, o = r - s, l = new Path2D();
    l.rect(e, s, a, o), I.axialAlignedBoundingBox([e, s, i, r], mt(t.ctx), t.current.minMax), t.ctx.clip(l), t.current.updateClipFromPath();
  }
  setFillAndStrokeStyleToContext(t, e, s) {
    var a;
    switch (e) {
      case eb.COLORED:
        s = "#000000";
        break;
      case eb.UNCOLORED:
        break;
      default:
        throw new ew(`Unsupported paint type: ${e}`);
    }
    const {
      ctx: i,
      current: r
    } = t;
    r.patternFill = r.patternStroke = !1, i.fillStyle = i.strokeStyle = ((a = r.transferMapsFallback) == null ? void 0 : a.applyToColor(s)) ?? s, r.fillColor = r.strokeColor = s;
  }
  isModifyingCurrentTransform() {
    return !1;
  }
  getPattern(t, e, s, i, r) {
    const a = i !== ge.SHADING ? I.transform(s, this.patternBaseMatrix) : s, o = this.createPatternCanvas(e, r);
    let l = new DOMMatrix(a);
    l = l.translate(o.offsetX, o.offsetY), l = l.scale(1 / o.scaleX, 1 / o.scaleY);
    const h = t.createPattern(o.canvas, "repeat");
    return e.canvasFactory.destroy(o.canvasEntry), h.setTransform(l), h;
  }
};
T(Rf, "MAX_PATTERN_SIZE", 3e3);
let hc = Rf;
const Kw = 16, qw = 100, Qw = 15, sb = 10, Ye = 16, gs = new Float32Array(2);
function ib(p, t) {
  if (p._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  const e = /* @__PURE__ */ new Map();
  for (const s of ["save", "restore", "rotate", "scale", "translate", "transform", "setTransform", "resetTransform", "clip", "moveTo", "lineTo", "bezierCurveTo", "quadraticCurveTo", "arc", "arcTo", "ellipse", "rect", "roundRect", "closePath", "beginPath"]) {
    const i = p[s];
    typeof i != "function" || typeof t[s] != "function" || (e.set(s, i), p[s] = function(...r) {
      return t[s](...r), i.apply(this, r);
    });
  }
  p._removeMirroring = () => {
    for (const [s, i] of e)
      p[s] = i;
    delete p._removeMirroring;
  };
}
function yu(p, t, e, s, i, r, a, o, l, h) {
  const [c, d, f, m, y, A] = mt(p);
  if (d === 0 && f === 0) {
    const S = a * c + y, E = Math.round(S), C = o * m + A, x = Math.round(C), _ = (a + l) * c + y, k = Math.abs(Math.round(_) - E) || 1, M = (o + h) * m + A, P = Math.abs(Math.round(M) - x) || 1;
    return p.setTransform(Math.sign(c), 0, 0, Math.sign(m), E, x), p.drawImage(t, e, s, i, r, 0, 0, k, P), p.setTransform(c, d, f, m, y, A), [k, P];
  }
  if (c === 0 && m === 0) {
    const S = o * f + y, E = Math.round(S), C = a * d + A, x = Math.round(C), _ = (o + h) * f + y, k = Math.abs(Math.round(_) - E) || 1, M = (a + l) * d + A, P = Math.abs(Math.round(M) - x) || 1;
    return p.setTransform(0, Math.sign(d), Math.sign(f), 0, E, x), p.drawImage(t, e, s, i, r, 0, 0, P, k), p.setTransform(c, d, f, m, y, A), [P, k];
  }
  p.drawImage(t, e, s, i, r, a, o, l, h);
  const w = Math.hypot(c, d), v = Math.hypot(f, m);
  return [w * l, v * h];
}
class nb {
  constructor(t, e) {
    T(this, "alphaIsShape", !1);
    T(this, "fontSize", 0);
    T(this, "fontSizeScale", 1);
    T(this, "textMatrix", null);
    T(this, "textMatrixScale", 1);
    T(this, "fontMatrix", Cp);
    T(this, "leading", 0);
    T(this, "x", 0);
    T(this, "y", 0);
    T(this, "lineX", 0);
    T(this, "lineY", 0);
    T(this, "charSpacing", 0);
    T(this, "wordSpacing", 0);
    T(this, "textHScale", 1);
    T(this, "textRenderingMode", Qt.FILL);
    T(this, "textRise", 0);
    T(this, "fillColor", "#000000");
    T(this, "strokeColor", "#000000");
    T(this, "tilingPatternDims", null);
    T(this, "patternFill", !1);
    T(this, "patternStroke", !1);
    T(this, "fillAlpha", 1);
    T(this, "strokeAlpha", 1);
    T(this, "lineWidth", 1);
    T(this, "activeSMask", null);
    T(this, "transferMaps", "none");
    T(this, "transferMapsFallback", null);
    T(this, "minMax", na.slice());
    this.clipBox = new Float32Array([0, 0, t, e]);
  }
  clone() {
    var e;
    const t = Object.create(this);
    return t.clipBox = this.clipBox.slice(), t.minMax = this.minMax.slice(), t.tilingPatternDims = (e = this.tilingPatternDims) == null ? void 0 : e.slice(), t;
  }
  getPathBoundingBox(t = ge.FILL, e = null) {
    const s = this.minMax.slice();
    if (t === ge.STROKE) {
      e || st("Stroke bounding box must include transform."), I.singularValueDecompose2dScale(e, gs);
      const i = gs[0] * this.lineWidth / 2, r = gs[1] * this.lineWidth / 2;
      s[0] -= i, s[1] -= r, s[2] += i, s[3] += r;
    }
    return s;
  }
  updateClipFromPath() {
    const t = I.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minMax[0] === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    this.clipBox.set(t, 0), this.minMax.set(na, 0);
  }
  getClippedPathBoundingBox(t = ge.FILL, e = null) {
    return I.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function rb(p, t) {
  const {
    width: e,
    height: s,
    kind: i
  } = t, r = s % Ye, a = (s - r) / Ye, o = r === 0 ? a : a + 1, l = p.createImageData(e, Ye);
  let h = 0;
  const c = t.data, d = l.data;
  let f;
  if (i === ac.GRAYSCALE_1BPP)
    for (f = 0; f < o; f++)
      ({
        srcPos: h
      } = wy({
        src: c,
        srcPos: h,
        dest: d,
        width: e,
        height: f < a ? Ye : r
      })), p.putImageData(l, 0, f * Ye);
  else if (i === ac.RGBA_32BPP) {
    let m = 0, y = e * Ye * 4;
    for (f = 0; f < a; f++)
      d.set(c.subarray(h, h + y)), h += y, p.putImageData(l, 0, m), m += Ye;
    f < o && (y = e * r * 4, d.set(c.subarray(h, h + y)), p.putImageData(l, 0, m));
  } else if (i === ac.RGB_24BPP)
    for (f = 0; f < o; f++)
      ({
        srcPos: h
      } = Nw({
        src: c,
        srcPos: h,
        dest: new Uint32Array(d.buffer),
        width: e,
        height: f < a ? Ye : r
      })), p.putImageData(l, 0, f * Ye);
  else
    throw new Error(`bad image kind: ${i}`);
}
function ab(p, t) {
  if (t.bitmap) {
    p.drawImage(t.bitmap, 0, 0);
    return;
  }
  const {
    width: e,
    height: s
  } = t, i = s % Ye, r = (s - i) / Ye, a = i === 0 ? r : r + 1, o = p.createImageData(e, Ye);
  let l = 0;
  const h = t.data, c = o.data;
  for (let d = 0; d < a; d++)
    ({
      srcPos: l
    } = wy({
      src: h,
      srcPos: l,
      dest: c,
      width: e,
      height: d < r ? Ye : i,
      nonBlackColor: 0
    })), p.putImageData(o, 0, d * Ye);
}
function Yr(p, t) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const s of e)
    p[s] !== void 0 && (t[s] = p[s]);
  p.setLineDash !== void 0 && (t.setLineDash(p.getLineDash()), t.lineDashOffset = p.lineDashOffset);
}
function Au(p) {
  p.strokeStyle = p.fillStyle = "#000000", p.fillRule = "nonzero", p.globalAlpha = 1, p.lineWidth = 1, p.lineCap = "butt", p.lineJoin = "miter", p.miterLimit = 10, p.globalCompositeOperation = "source-over", p.font = "10px sans-serif", p.setLineDash !== void 0 && (p.setLineDash([]), p.lineDashOffset = 0);
  const {
    filter: t
  } = p;
  t !== "none" && t !== "" && (p.filter = "none");
}
var Ll;
const Im = class Im {
  constructor(t) {
    g(this, Ll);
    const [e, s = e, i = e] = t, {
      identityMap: r
    } = Im;
    u(this, Ll, [e || r, s || r, i || r]);
  }
  static get identityMap() {
    return R(this, "identityMap", Uint8Array.from({
      length: 256
    }, (t, e) => e));
  }
  applyToColor(t) {
    if (typeof t != "string" || !t.startsWith("#"))
      return t;
    const [e, s, i] = Uo(t), [r, a, o] = n(this, Ll);
    return I.makeHexColor(r[e], a[s], o[i]);
  }
  applyToImageData({
    data: t
  }) {
    const [e, s, i] = n(this, Ll);
    for (let r = 0, a = t.length; r < a; r += 4)
      t[r] = e[t[r]], t[r + 1] = s[t[r + 1]], t[r + 2] = i[t[r + 2]];
  }
  applyToCanvas(t) {
    const {
      width: e,
      height: s
    } = t.canvas, i = t.getImageData(0, 0, e, s);
    this.applyToImageData(i), t.putImageData(i, 0, 0);
  }
};
Ll = new WeakMap();
let og = Im;
function ob(p, t) {
  if (t)
    return !0;
  I.singularValueDecompose2dScale(p, gs);
  const e = Math.fround(bs.pixelRatio * Fn.PDF_TO_CSS_UNITS);
  return gs[0] <= e && gs[1] <= e;
}
const Jw = ["butt", "round", "square"], Zw = ["miter", "round", "bevel"], tv = {}, lb = {};
var Ff, es, yr, Ha, Ua, Ga, $a, za, Va, ja, Ci, U, lg, hg, cg, dg, ug, He, Ae, fg, Qh, Sy, Fu;
const ea = class ea {
  constructor(t, e, s, i, r, {
    optionalContentConfig: a,
    markedContentStack: o = null
  }, l, h, c, d) {
    g(this, U);
    g(this, es, 0);
    g(this, yr, 0);
    g(this, Ha, null);
    g(this, Ua, null);
    g(this, Ga, null);
    g(this, $a, null);
    g(this, za, 1);
    g(this, Va);
    g(this, ja, null);
    g(this, Ci, []);
    this.ctx = t, this.current = new nb(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.commonObjs = e, this.objs = s, this.canvasFactory = i, this.filterFactory = r, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.tempSMask = null, this.smaskGroupCanvases = [], this.smaskPreparedEntry = null, this.smaskPreparedFor = null, this.smaskPreparedOffsetX = 0, this.smaskPreparedOffsetY = 0, this.smaskPreparedOOBAlpha = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = o || [], this.optionalContentConfig = a, this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = l, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = h, this._cachedScaleForStroking = [-1, 0], this._cachedBitmapsMap = /* @__PURE__ */ new Map(), this.dependencyTracker = c ?? null, this.imagesTracker = d ?? null;
  }
  getObject(t, e, s = null) {
    var i;
    return typeof e == "string" ? ((i = this.dependencyTracker) == null || i.recordNamedDependency(t, e), e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e)) : s;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: s = !1,
    background: i = null
  }) {
    const r = this.ctx.canvas.width, a = this.ctx.canvas.height, o = this.ctx.fillStyle;
    if (this.ctx.fillStyle = i || "#ffffff", this.ctx.fillRect(0, 0, r, a), this.ctx.fillStyle = o, s) {
      const l = this.transparentCanvasEntry = this.canvasFactory.create(r, a);
      this.compositeCtx = this.ctx, {
        canvas: this.transparentCanvas,
        context: this.ctx
      } = l, this.ctx.save(), this.ctx.transform(...mt(this.compositeCtx));
    }
    this.ctx.save(), Au(this.ctx), t && (this.ctx.transform(...t), this.outputScaleX = t[0], this.outputScaleY = t[3]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = mt(this.ctx);
  }
  executeOperatorList(t, e, s, i, r) {
    var v;
    const a = t.argsArray, o = t.fnArray;
    let l = e || 0;
    const h = a.length;
    if (h === l)
      return l;
    const c = h - l > sb && typeof s == "function", d = c ? Date.now() + Qw : 0;
    let f = 0;
    const m = this.commonObjs, y = this.objs;
    let A, w;
    for (; ; ) {
      if (i !== void 0) {
        if (l === i.nextBreakPoint)
          return i.breakIt(l, s), l;
        if (i.shouldSkip(l)) {
          if (++l === h)
            return l;
          continue;
        }
      }
      if (!r || r(l, t))
        if (A = o[l], w = a[l] ?? null, A !== ni.dependency)
          w === null ? this[A](l) : this[A](l, ...w);
        else
          for (const S of w) {
            (v = this.dependencyTracker) == null || v.recordNamedData(S, l);
            const E = S.startsWith("g_") ? m : y;
            if (!E.has(S))
              return E.get(S, s), l;
          }
      if (l++, l === h)
        return l;
      if (c && ++f > sb) {
        if (Date.now() > d)
          return s(), l;
        f = 0;
      }
    }
  }
  endDrawing() {
    b(this, U, lg).call(this);
    for (const t of this.smaskGroupCanvases)
      this.canvasFactory.destroy(t);
    this.smaskGroupCanvases.length = 0, this._clearPreparedSMask(), this.tempSMask = null, this.smaskStack.length = 0;
    for (const t of n(this, Ci))
      b(this, U, Fu).call(this, t);
    n(this, Ci).length = 0, u(this, Ha, null), u(this, Ua, null), u(this, Ga, null), u(this, $a, null), u(this, za, 1), u(this, ja, null), u(this, yr, 0), u(this, es, 0), this.cachedPatterns.clear();
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      t.clear();
    }
    this._cachedBitmapsMap.clear(), b(this, U, hg).call(this);
  }
  _scaleImage(t, e) {
    const s = t.width ?? t.displayWidth, i = t.height ?? t.displayHeight, r = Math.max(Math.hypot(e[0], e[1]), 1), a = Math.max(Math.hypot(e[2], e[3]), 1), o = [];
    let l = r, h = a, c = s, d = i;
    for (; l > 2 && c > 1 || h > 2 && d > 1; ) {
      let v = c, S = d;
      l > 2 && c > 1 && (v = Math.ceil(c / 2), l /= c / v), h > 2 && d > 1 && (S = Math.ceil(d / 2), h /= d / S), o.push({
        newWidth: v,
        newHeight: S
      }), c = v, d = S;
    }
    if (o.length === 0)
      return {
        img: t,
        paintWidth: s,
        paintHeight: i,
        tmpCanvas: null
      };
    if (o.length === 1) {
      const {
        newWidth: v,
        newHeight: S
      } = o[0], E = this.canvasFactory.create(v, S);
      return E.context.drawImage(t, 0, 0, s, i, 0, 0, v, S), {
        img: E.canvas,
        paintWidth: v,
        paintHeight: S,
        tmpCanvas: E
      };
    }
    let f = this.canvasFactory.create(1, 1), m = this.canvasFactory.create(1, 1), y = s, A = i, w = t;
    for (const {
      newWidth: v,
      newHeight: S
    } of o)
      this.canvasFactory.reset(m, v, S), m.context.drawImage(w, 0, 0, y, A, 0, 0, v, S), [f, m] = [m, f], w = f.canvas, y = v, A = S;
    return this.canvasFactory.destroy(m), {
      img: f.canvas,
      paintWidth: y,
      paintHeight: A,
      tmpCanvas: f
    };
  }
  _createMaskCanvas(t, e) {
    var N, Z;
    const s = this.ctx, {
      width: i,
      height: r
    } = e, a = this.current.patternFill, o = a ? this.current.fillColor : s.fillStyle, l = mt(s);
    let h, c, d, f;
    if ((e.bitmap || e.data) && e.count > 1) {
      const Q = e.bitmap || e.data.buffer;
      c = JSON.stringify(a ? l : [l.slice(0, 4), o]), h = this._cachedBitmapsMap.getOrInsertComputed(Q, tp);
      const Y = h.get(c);
      if (Y && !a) {
        const K = Math.round(Math.min(l[0], l[2]) + l[4]), B = Math.round(Math.min(l[1], l[3]) + l[5]);
        return (N = this.dependencyTracker) == null || N.recordDependencies(t, vs.transformAndFill), {
          canvas: Y,
          offsetX: K,
          offsetY: B
        };
      }
      d = Y;
    }
    d || (f = this.canvasFactory.create(i, r), ab(f.context, e));
    let m = I.transform(l, [1 / i, 0, 0, -1 / r, 0, 0]);
    m = I.transform(m, [1, 0, 0, 1, 0, -r]);
    const y = na.slice();
    I.axialAlignedBoundingBox([0, 0, i, r], m, y);
    const [A, w, v, S] = y, E = Math.round(v - A) || 1, C = Math.round(S - w) || 1, x = this.canvasFactory.create(E, C), _ = x.context, k = A, M = w;
    _.translate(-k, -M), _.transform(...m);
    let P = null;
    if (!d) {
      const Q = this._scaleImage(f.canvas, ai(_));
      d = Q.img, P = Q.tmpCanvas, d !== f.canvas && (this.canvasFactory.destroy(f), f = null), h && a && (h.set(c, d), P = null, f = null);
    }
    _.imageSmoothingEnabled = ob(mt(_), e.interpolate), yu(_, d, 0, 0, d.width, d.height, 0, 0, i, r), P && this.canvasFactory.destroy(P), f && this.canvasFactory.destroy(f), _.globalCompositeOperation = "source-in";
    const D = I.transform(ai(_), [1, 0, 0, 1, -k, -M]);
    return _.fillStyle = a ? o.getPattern(s, this, D, ge.FILL, t) : o, _.fillRect(0, 0, i, r), h && !a && h.set(c, x.canvas), (Z = this.dependencyTracker) == null || Z.recordDependencies(t, vs.transformAndFill), {
      canvas: x.canvas,
      canvasEntry: h && !a ? null : x,
      offsetX: Math.round(k),
      offsetY: Math.round(M)
    };
  }
  setLineWidth(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("lineWidth", t), e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
  }
  setLineCap(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("lineCap", t), this.ctx.lineCap = Jw[e];
  }
  setLineJoin(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("lineJoin", t), this.ctx.lineJoin = Zw[e];
  }
  setMiterLimit(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("miterLimit", t), this.ctx.miterLimit = e;
  }
  setDash(t, e, s) {
    var r;
    (r = this.dependencyTracker) == null || r.recordSimpleData("dash", t);
    const i = this.ctx;
    i.setLineDash !== void 0 && (i.setLineDash(e), i.lineDashOffset = s);
  }
  setRenderingIntent(t, e) {
  }
  setFlatness(t, e) {
  }
  setGState(t, e) {
    var s, i, r, a, o;
    for (const [l, h] of e)
      switch (l) {
        case "LW":
          this.setLineWidth(t, h);
          break;
        case "LC":
          this.setLineCap(t, h);
          break;
        case "LJ":
          this.setLineJoin(t, h);
          break;
        case "ML":
          this.setMiterLimit(t, h);
          break;
        case "D":
          this.setDash(t, h[0], h[1]);
          break;
        case "RI":
          this.setRenderingIntent(t, h);
          break;
        case "FL":
          this.setFlatness(t, h);
          break;
        case "Font":
          this.setFont(t, h[0], h[1]);
          break;
        case "CA":
          (s = this.dependencyTracker) == null || s.recordSimpleData("strokeAlpha", t), this.current.strokeAlpha = h;
          break;
        case "ca":
          (i = this.dependencyTracker) == null || i.recordSimpleData("fillAlpha", t), this.ctx.globalAlpha = this.current.fillAlpha = h;
          break;
        case "BM":
          (r = this.dependencyTracker) == null || r.recordSimpleData("globalCompositeOperation", t), this.ctx.globalCompositeOperation = h;
          break;
        case "SMask":
          (a = this.dependencyTracker) == null || a.recordSimpleData("SMask", t), this.current.activeSMask = h ? this.tempSMask : null, this.current.activeSMask && (this.current.activeSMask.blendMode = this.ctx.globalCompositeOperation), this.tempSMask = null, this.checkSMaskState(t);
          break;
        case "TR": {
          (o = this.dependencyTracker) == null || o.recordSimpleData("filter", t);
          let c = this.filterFactory.addFilter(h);
          this.ctx.filter = c;
          let d = null;
          h && (c === "none" || !ot.isCanvasFilterSupported || this.ctx.filter === "none" || this.ctx.filter === "") && (this.ctx.filter = c = "none", d = new og(h)), this.current.transferMaps = c, (d || this.current.transferMapsFallback) && (this.current.transferMapsFallback = d, this.current.patternFill || (this.ctx.fillStyle = b(this, U, Qh).call(this, this.current.fillColor)), this.current.patternStroke || (this.ctx.strokeStyle = b(this, U, Qh).call(this, this.current.strokeColor)));
          break;
        }
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  _clearPreparedSMask() {
    this.smaskPreparedEntry && (this.canvasFactory.destroy(this.smaskPreparedEntry), this.smaskPreparedEntry = null), this.smaskPreparedFor = null, this.smaskPreparedOffsetX = 0, this.smaskPreparedOffsetY = 0, this.smaskPreparedOOBAlpha = null;
  }
  _ensurePreparedSMask(t) {
    t !== this.smaskPreparedFor && (this._clearPreparedSMask(), this._prepareSMaskCanvas(t));
  }
  checkSMaskState(t) {
    const e = this.inSMaskMode;
    this.current.activeSMask && !e ? this.beginSMaskMode(t) : !this.current.activeSMask && e ? this.endSMaskMode() : this.current.activeSMask && e && this._ensurePreparedSMask(this.current.activeSMask);
  }
  _prepareSMaskCanvas(t) {
    const {
      canvas: e,
      subtype: s,
      backdrop: i,
      transferMap: r
    } = t, a = s === "Luminosity" || s === "Alpha" && r;
    if (!a && !(s === "Luminosity" && i)) {
      this.smaskPreparedFor = t;
      return;
    }
    let o;
    if (s === "Luminosity" && i) {
      const [S, E, C] = Uo(i), x = Math.round(0.3 * S + 0.59 * E + 0.11 * C);
      o = (r == null ? void 0 : r[x]) ?? x;
    } else
      o = (r == null ? void 0 : r[0]) ?? 0;
    const l = 4, {
      width: h,
      height: c
    } = this.ctx.canvas, d = e.width * e.height, f = h * c < l * d, m = a ? {
      url: s === "Alpha" ? this.filterFactory.addAlphaFilter(r) : this.filterFactory.addLuminosityFilter(r),
      subtype: s,
      transferMap: r
    } : null, y = s === "Luminosity" ? i : null;
    let A, w, v;
    f ? (A = this._bakeSMaskCanvas(e, t.offsetX, t.offsetY, h, c, y, m), w = 0, v = 0) : (A = this._bakeSMaskCanvas(e, 0, 0, e.width, e.height, y, m), w = t.offsetX, v = t.offsetY), this.smaskPreparedEntry = A, this.smaskPreparedFor = t, this.smaskPreparedOffsetX = w, this.smaskPreparedOffsetY = v, this.smaskPreparedOOBAlpha = !f && o !== 0 ? o : null;
  }
  _bakeSMaskCanvas(t, e, s, i, r, a, o) {
    !a && !o && st("_bakeSMaskCanvas with neither backdrop nor filter");
    const l = this.canvasFactory.create(i, r), h = l.context;
    if (h.drawImage(t, e, s), a && (h.globalCompositeOperation = "destination-atop", h.fillStyle = a, h.fillRect(0, 0, i, r)), !o)
      return l;
    const c = this.canvasFactory.create(i, r), d = c.context;
    d.filter = o.url;
    const f = ot.isCanvasFilterSupported && d.filter !== "none" && d.filter !== "";
    if (d.drawImage(l.canvas, 0, 0), ot.isCanvasFilterSupported && (d.filter = "none"), !f) {
      const m = d.getImageData(0, 0, i, r), {
        data: y
      } = m, {
        transferMap: A
      } = o;
      if (o.subtype === "Luminosity")
        for (let w = 0, v = y.length; w < v; w += 4) {
          const S = 0.3 * y[w] + 0.59 * y[w + 1] + 0.11 * y[w + 2] + 0.5 | 0;
          y[w] = y[w + 1] = y[w + 2] = 0, y[w + 3] = (A == null ? void 0 : A[S]) ?? S;
        }
      else
        for (let w = 3, v = y.length; w < v; w += 4)
          y[w] = A[y[w]];
      d.putImageData(m, 0, 0);
    }
    return this.canvasFactory.destroy(l), c;
  }
  beginSMaskMode(t) {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const {
      width: e,
      height: s
    } = this.ctx.canvas, i = this.canvasFactory.create(e, s);
    this.smaskScratchCanvas = i, this.suspendedCtx = this.ctx;
    const r = this.ctx = i.context;
    r.setTransform(this.suspendedCtx.getTransform()), Yr(this.suspendedCtx, r), ib(r, this.suspendedCtx), this._ensurePreparedSMask(this.current.activeSMask), this.setGState(t, [["BM", "source-over"]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), Yr(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null, this.canvasFactory.destroy(this.smaskScratchCanvas), this.smaskScratchCanvas = null, this._clearPreparedSMask();
  }
  compose(t) {
    if (!this.current.activeSMask)
      return;
    t = t ? [Math.floor(t[0]), Math.floor(t[1]), Math.ceil(t[2]), Math.ceil(t[3])] : [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, s = this.suspendedCtx, i = n(this, yr) > 0 && s === this.ctx;
    this.composeSMask(i ? null : s, e, this.ctx, t), !i && (this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore());
  }
  composeSMask(t, e, s, i) {
    const r = i[0], a = i[1], o = i[2] - r, l = i[3] - a;
    if (o === 0 || l === 0)
      return;
    const h = this.smaskPreparedEntry;
    if (h) {
      let c = r, d = a, f = o, m = l;
      const y = this.smaskPreparedOOBAlpha, A = y !== null;
      if (A) {
        c = Math.max(r, e.offsetX), d = Math.max(a, e.offsetY);
        const w = Math.min(r + o, e.offsetX + e.canvas.width), v = Math.min(a + l, e.offsetY + e.canvas.height);
        f = w - c, m = v - d;
      }
      if (f > 0 && m > 0) {
        const w = c - this.smaskPreparedOffsetX, v = d - this.smaskPreparedOffsetY;
        s.save(), s.globalAlpha = 1, s.setTransform(1, 0, 0, 1, 0, 0);
        const S = new Path2D();
        S.rect(c, d, f, m), s.clip(S), s.globalCompositeOperation = "destination-in", s.drawImage(h.canvas, w, v, f, m, c, d, f, m), s.restore();
      }
      A && y < 255 && this._applySMaskOOBAlpha(s, r, a, o, l, c, d, c + f, d + m, y);
    } else
      this.genericComposeSMask(e, s, o, l, r, a);
    t && (t.save(), t.globalAlpha = 1, t.globalCompositeOperation = e.blendMode || "source-over", t.setTransform(1, 0, 0, 1, 0, 0), t.drawImage(s.canvas, r, a, o, l, r, a, o, l), t.restore());
  }
  _applySMaskOOBAlpha(t, e, s, i, r, a, o, l, h, c) {
    const d = a < l && o < h;
    if (d && a === e && o === s && l === e + i && h === s + r)
      return;
    const f = new Path2D();
    f.rect(e, s, i, r), d && f.rect(a, o, l - a, h - o), t.save(), t.globalAlpha = c / 255, t.setTransform(1, 0, 0, 1, 0, 0), t.clip(f, "evenodd"), t.globalCompositeOperation = "destination-in", t.fillStyle = "#000000", t.fillRect(e, s, i, r), t.restore();
  }
  genericComposeSMask(t, e, s, i, r, a) {
    const {
      context: o,
      offsetX: l,
      offsetY: h
    } = t;
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0);
    const c = new Path2D();
    c.rect(r, a, s, i), e.clip(c), e.globalCompositeOperation = "destination-in", e.drawImage(o.canvas, r - l, a - h, s, i, r, a, s, i), e.restore();
  }
  save(t) {
    var s;
    this.inSMaskMode && Yr(this.ctx, this.suspendedCtx), this.ctx.save();
    const e = this.current;
    this.stateStack.push(e), this.current = e.clone(), (s = this.dependencyTracker) == null || s.save(t);
  }
  restore(t) {
    var e;
    if ((e = this.dependencyTracker) == null || e.restore(t), this.stateStack.length === 0) {
      this.inSMaskMode && this.endSMaskMode();
      return;
    }
    this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && (Yr(this.suspendedCtx, this.ctx), this.ctx.setTransform(this.suspendedCtx.getTransform())), this.checkSMaskState(t), this.pendingClip = null, this._cachedScaleForStroking[0] = -1;
  }
  transform(t, e, s, i, r, a, o) {
    var l;
    (l = this.dependencyTracker) == null || l.recordIncrementalData("transform", t), this.ctx.transform(e, s, i, r, a, o), this._cachedScaleForStroking[0] = -1;
  }
  constructPath(t, e, s, i) {
    let [r] = s;
    if (!i) {
      r || (r = s[0] = new Path2D()), e !== ni.stroke && e !== ni.closeStroke && (this.current.tilingPatternDims = null), this[e](t, r);
      return;
    }
    if (this.dependencyTracker !== null) {
      const o = e === ni.stroke ? this.current.lineWidth / 2 : 0;
      this.dependencyTracker.resetBBox(t).recordBBox(t, this.ctx, i[0] - o, i[2] + o, i[1] - o, i[3] + o).recordDependencies(t, ["transform"]);
    }
    r instanceof Path2D || (r = s[0] = xb(r)), I.axialAlignedBoundingBox(i, mt(this.ctx), this.current.minMax);
    const a = this.current.tilingPatternDims;
    if (a && e !== ni.stroke && e !== ni.closeStroke && this.current.fillColor instanceof hc) {
      const o = I.intersect(this.current.clipBox, this.current.minMax);
      o ? this.current.fillColor.updatePatternDims(o, a) : this.current.tilingPatternDims = null;
    }
    this[e](t, r), this._pathStartIdx = t;
  }
  closePath(t) {
    this.ctx.closePath();
  }
  stroke(t, e, s = !0) {
    var o;
    const i = s && b(this, U, He).call(this, this.current.strokeAlpha), r = this.ctx, a = this.current.strokeColor;
    if (r.globalAlpha = this.current.strokeAlpha, this.contentVisible)
      if (typeof a == "object" && (a != null && a.getPattern)) {
        const l = a.isModifyingCurrentTransform() ? r.getTransform() : null;
        if (r.save(), r.strokeStyle = a.getPattern(r, this, ai(r), ge.STROKE, t), l) {
          const h = new Path2D();
          h.addPath(e, r.getTransform().invertSelf().multiplySelf(l)), e = h;
        }
        this.rescaleAndStroke(e, !1), r.restore();
      } else
        this.rescaleAndStroke(e, !0);
    (o = this.dependencyTracker) == null || o.recordDependencies(t, vs.stroke), s && this.consumePath(t, e, this.current.getClippedPathBoundingBox(ge.STROKE, mt(this.ctx))), r.globalAlpha = this.current.fillAlpha, b(this, U, Ae).call(this, i);
  }
  closeStroke(t, e) {
    this.stroke(t, e);
  }
  fill(t, e, s = !0) {
    var c, d, f;
    const i = s && b(this, U, He).call(this, this.current.fillAlpha), r = this.ctx, a = this.current.fillColor, o = this.current.patternFill;
    let l = !1;
    const h = this.current.getClippedPathBoundingBox();
    if ((c = this.dependencyTracker) == null || c.recordDependencies(t, vs.fill), o) {
      const m = this.current.tilingPatternDims, y = m && a.canSkipPatternCanvas(m);
      if (y) {
        a.drawPattern(this, e, this.pendingEOFill, y, t), this.pendingEOFill = !1, s && this.consumePath(t, e, h), this.current.tilingPatternDims = null, b(this, U, Ae).call(this, i);
        return;
      }
      const A = a.isModifyingCurrentTransform() ? r.getTransform() : null;
      if ((d = this.dependencyTracker) == null || d.save(t), r.save(), r.fillStyle = a.getPattern(r, this, ai(r), ge.FILL, t), A) {
        const w = new Path2D();
        w.addPath(e, r.getTransform().invertSelf().multiplySelf(A)), e = w;
      }
      l = !0;
    }
    this.contentVisible && h !== null && (this.pendingEOFill ? (r.fill(e, "evenodd"), this.pendingEOFill = !1) : r.fill(e)), l && (r.restore(), (f = this.dependencyTracker) == null || f.restore(t)), s && this.consumePath(t, e, h), b(this, U, Ae).call(this, i);
  }
  eoFill(t, e) {
    this.pendingEOFill = !0, this.fill(t, e);
  }
  fillStroke(t, e) {
    const s = b(this, U, He).call(this, Math.min(this.current.fillAlpha, this.current.strokeAlpha));
    this.fill(t, e, !1), this.stroke(t, e, !1), this.consumePath(t, e), b(this, U, Ae).call(this, s);
  }
  eoFillStroke(t, e) {
    this.pendingEOFill = !0, this.fillStroke(t, e);
  }
  closeFillStroke(t, e) {
    this.fillStroke(t, e);
  }
  closeEOFillStroke(t, e) {
    this.pendingEOFill = !0, this.fillStroke(t, e);
  }
  endPath(t, e) {
    this.consumePath(t, e);
  }
  rawFillPath(t, e) {
    var i;
    const s = b(this, U, He).call(this, this.current.fillAlpha);
    this.ctx.fill(e), (i = this.dependencyTracker) == null || i.recordDependencies(t, vs.rawFillPath).recordOperation(t), b(this, U, Ae).call(this, s);
  }
  clip(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency("clipMode", t), this.pendingClip = tv;
  }
  eoClip(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordFutureForcedDependency("clipMode", t), this.pendingClip = lb;
  }
  beginText(t) {
    var e;
    this.current.textMatrix = null, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, (e = this.dependencyTracker) == null || e.recordOpenMarker(t).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t);
  }
  endText(t) {
    const e = this.pendingTextPaths, s = this.ctx;
    if (this.dependencyTracker) {
      const {
        dependencyTracker: i
      } = this;
      e !== void 0 && i.recordFutureForcedDependency("textClip", i.getOpenMarker()).recordFutureForcedDependency("textClip", t), i.recordCloseMarker(t);
    }
    if (e !== void 0) {
      const i = new Path2D(), r = s.getTransform().invertSelf();
      for (const {
        transform: a,
        x: o,
        y: l,
        fontSize: h,
        path: c
      } of e)
        c && i.addPath(c, new DOMMatrix(a).preMultiplySelf(r).translate(o, l).scale(h, -h));
      s.clip(i);
    }
    delete this.pendingTextPaths;
  }
  setCharSpacing(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("charSpacing", t), this.current.charSpacing = e;
  }
  setWordSpacing(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("wordSpacing", t), this.current.wordSpacing = e;
  }
  setHScale(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("hScale", t), this.current.textHScale = e / 100;
  }
  setLeading(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("leading", t), this.current.leading = -e;
  }
  setFont(t, e, s) {
    var d, f;
    (d = this.dependencyTracker) == null || d.recordSimpleData("font", t).recordSimpleDataFromNamed("fontObj", e, t);
    const i = this.commonObjs.get(e), r = this.current;
    if (!i)
      throw new Error(`Can't find font for ${e}`);
    if (r.fontMatrix = i.fontMatrix || Cp, (r.fontMatrix[0] === 0 || r.fontMatrix[3] === 0) && X("Invalid font matrix for font " + e), s < 0 ? (s = -s, r.fontDirection = -1) : r.fontDirection = 1, this.current.font = i, this.current.fontSize = s, i.isType3Font)
      return;
    const a = i.loadedName || "sans-serif", o = ((f = i.systemFontInfo) == null ? void 0 : f.css) || `"${a}", ${i.fallbackName}`;
    let l = "normal";
    i.black ? l = "900" : i.bold && (l = "bold");
    const h = i.italic ? "italic" : "normal", c = wt(s, Kw, qw);
    this.current.fontSizeScale = s / c, this.ctx.font = `${h} ${l} ${c}px ${o}`;
  }
  setTextRenderingMode(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("textRenderingMode", t), this.current.textRenderingMode = e;
  }
  setTextRise(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("textRise", t), this.current.textRise = e;
  }
  moveText(t, e, s) {
    var i;
    (i = this.dependencyTracker) == null || i.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t), this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += s;
  }
  setLeadingMoveText(t, e, s) {
    this.setLeading(t, -s), this.moveText(t, e, s);
  }
  setTextMatrix(t, e) {
    var i;
    (i = this.dependencyTracker) == null || i.resetIncrementalData("sameLineText").recordSimpleData("textMatrix", t);
    const {
      current: s
    } = this;
    s.textMatrix = e, s.textMatrixScale = Math.hypot(e[0], e[1]), s.x = s.lineX = 0, s.y = s.lineY = 0;
  }
  nextLine(t) {
    var e;
    this.moveText(t, 0, this.current.leading), (e = this.dependencyTracker) == null || e.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? t);
  }
  paintChar(t, e, s, i, r, a) {
    var v, S, E, C;
    const o = this.ctx, l = this.current, h = l.font, c = l.textRenderingMode, d = l.fontSize / l.fontSizeScale, f = c & Qt.FILL_STROKE_MASK, m = !!(c & Qt.ADD_TO_PATH_FLAG), y = l.patternFill && !h.missingFile, A = l.patternStroke && !h.missingFile;
    let w;
    if ((h.disableFontFace || m || y || A) && !h.missingFile && (w = h.getPathGenerator(this.commonObjs, e)), w && (h.disableFontFace || y || A)) {
      o.save(), o.translate(s, i), o.scale(d, -d), (v = this.dependencyTracker) == null || v.recordCharacterBBox(t, o, h);
      let x;
      if (f === Qt.FILL || f === Qt.FILL_STROKE)
        if (r) {
          x = o.getTransform(), o.setTransform(...r);
          const _ = b(this, U, fg).call(this, w, x, r);
          o.fill(_);
        } else
          o.fill(w);
      if (f === Qt.STROKE || f === Qt.FILL_STROKE)
        if (a) {
          x || (x = o.getTransform()), o.setTransform(...a);
          const {
            a: _,
            b: k,
            c: M,
            d: P
          } = x, D = I.inverseTransform(a), N = I.transform([_, k, M, P, 0, 0], D);
          I.singularValueDecompose2dScale(N, gs), o.lineWidth *= Math.max(gs[0], gs[1]) / d, o.stroke(b(this, U, fg).call(this, w, x, a));
        } else
          o.lineWidth /= d, o.stroke(w);
      o.restore();
    } else
      (f === Qt.FILL || f === Qt.FILL_STROKE) && (o.fillText(e, s, i), (S = this.dependencyTracker) == null || S.recordCharacterBBox(t, o, h, d, s, i, () => o.measureText(e))), (f === Qt.STROKE || f === Qt.FILL_STROKE) && (this.dependencyTracker && ((E = this.dependencyTracker) == null || E.recordCharacterBBox(t, o, h, d, s, i, () => o.measureText(e)).recordDependencies(t, vs.stroke)), o.strokeText(e, s, i));
    m && ((this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: mt(o),
      x: s,
      y: i,
      fontSize: d,
      path: w
    }), (C = this.dependencyTracker) == null || C.recordCharacterBBox(t, o, h, d, s, i));
  }
  get isFontSubpixelAAEnabled() {
    const t = this.canvasFactory.create(10, 10), e = t.context;
    e.scale(1.5, 1), e.fillText("I", 0, 10);
    const s = e.getImageData(0, 0, 10, 10).data;
    this.canvasFactory.destroy(t);
    let i = !1;
    for (let r = 3; r < s.length; r += 4)
      if (s[r] > 0 && s[r] < 255) {
        i = !0;
        break;
      }
    return R(this, "isFontSubpixelAAEnabled", i);
  }
  showText(t, e) {
    var N, Z, Q, Y;
    this.dependencyTracker && (this.dependencyTracker.recordDependencies(t, vs.showText).resetBBox(t), this.current.textRenderingMode & Qt.ADD_TO_PATH_FLAG && this.dependencyTracker.recordFutureForcedDependency("textClip", t).inheritPendingDependenciesAsFutureForcedDependencies());
    const s = this.current, i = s.font;
    if (i.isType3Font) {
      const K = b(this, U, He).call(this, s.fillAlpha);
      this.showType3Text(t, e), (N = this.dependencyTracker) == null || N.recordShowTextOperation(t), b(this, U, Ae).call(this, K);
      return;
    }
    const r = s.fontSize;
    if (r === 0) {
      (Z = this.dependencyTracker) == null || Z.recordOperation(t);
      return;
    }
    const a = b(this, U, He).call(this, s.fillAlpha), o = this.ctx, l = s.fontSizeScale, h = s.charSpacing, c = s.wordSpacing, d = s.fontDirection, f = s.textHScale * d, m = e.length, y = i.vertical, A = y ? 1 : -1, w = r * s.fontMatrix[0], v = s.textRenderingMode === Qt.FILL && !i.disableFontFace && !s.patternFill;
    o.save(), s.textMatrix && o.transform(...s.textMatrix), o.translate(s.x, s.y + s.textRise), d > 0 ? o.scale(f, -1) : o.scale(f, 1);
    let S, E;
    const C = s.textRenderingMode & Qt.FILL_STROKE_MASK, x = C === Qt.FILL || C === Qt.FILL_STROKE, _ = C === Qt.STROKE || C === Qt.FILL_STROKE;
    let k = s.lineWidth;
    const M = s.textMatrixScale;
    if (M === 0 || k === 0 ? _ && (k = this.getSinglePixelWidth()) : k /= M, l !== 1 && (o.scale(l, l), k /= l), o.lineWidth = k, x && s.patternFill) {
      o.save();
      const K = s.fillColor.getPattern(o, this, ai(o), ge.FILL, t);
      S = mt(o), o.restore(), o.fillStyle = K;
    }
    if (_ && s.patternStroke) {
      o.save();
      const K = s.strokeColor.getPattern(o, this, ai(o), ge.STROKE, t);
      E = mt(o), o.restore(), o.strokeStyle = K;
    }
    if (i.isInvalidPDFjsFont) {
      const K = [];
      let B = 0;
      for (const nt of e)
        K.push(nt.unicode), B += nt.width;
      const G = K.join("");
      if (o.fillText(G, 0, 0), this.dependencyTracker !== null) {
        const nt = o.measureText(G);
        this.dependencyTracker.recordBBox(t, this.ctx, -nt.actualBoundingBoxLeft, nt.actualBoundingBoxRight, -nt.actualBoundingBoxAscent, nt.actualBoundingBoxDescent).recordShowTextOperation(t);
      }
      s.x += B * w * f, o.restore(), this.compose(), b(this, U, Ae).call(this, a);
      return;
    }
    let P = 0, D;
    for (D = 0; D < m; ++D) {
      const K = e[D];
      if (typeof K == "number") {
        P += A * K * r / 1e3;
        continue;
      }
      let B = !1;
      const G = (K.isSpace ? c : 0) + h, nt = K.fontChar, he = K.accent;
      let ee, _e, Rt = K.width;
      if (y) {
        const Be = K.vmetric, qe = -Be[1] * w, $t = Be[2] * w;
        Rt = -Be[0], ee = qe / l, _e = (P + $t) / l;
      } else
        ee = P / l, _e = 0;
      let Ft;
      if (i.remeasure && Rt > 0) {
        Ft = o.measureText(nt);
        const Be = Ft.width * 1e3 / r * l;
        if (Rt < Be && this.isFontSubpixelAAEnabled) {
          const qe = Rt / Be;
          B = !0, o.save(), o.scale(qe, 1), ee /= qe;
        } else Rt !== Be && (ee += (Rt - Be) / 2e3 * r / l);
      }
      if (this.contentVisible && (K.isInFont || i.missingFile)) {
        if (v && !he)
          o.fillText(nt, ee, _e), (Q = this.dependencyTracker) == null || Q.recordCharacterBBox(t, o, Ft ? {
            bbox: null
          } : i, r / l, ee, _e, () => Ft ?? o.measureText(nt));
        else if (this.paintChar(t, nt, ee, _e, S, E), he) {
          const Be = ee + r * he.offset.x / l, qe = _e - r * he.offset.y / l;
          this.paintChar(t, he.fontChar, Be, qe, S, E);
        }
      }
      const Xr = y ? Rt * w - G * d : Rt * w + G * d;
      P += Xr, B && o.restore();
    }
    y ? s.y -= P : s.x += P * f, o.restore(), this.compose(), (Y = this.dependencyTracker) == null || Y.recordShowTextOperation(t), b(this, U, Ae).call(this, a);
  }
  showType3Text(t, e) {
    const s = this.ctx, i = this.current, r = i.font, a = i.fontSize, o = i.fontDirection, l = r.vertical ? 1 : -1, h = i.charSpacing, c = i.wordSpacing, d = i.textHScale * o, f = i.fontMatrix || Cp, m = e.length, y = i.textRenderingMode === Qt.INVISIBLE;
    let A, w, v, S;
    if (y || a === 0)
      return;
    this._cachedScaleForStroking[0] = -1, s.save(), i.textMatrix && s.transform(...i.textMatrix), s.translate(i.x, i.y + i.textRise), s.scale(d, o);
    const E = this.dependencyTracker;
    for (this.dependencyTracker = E ? new bc(E, t) : null, A = 0; A < m; ++A) {
      if (w = e[A], typeof w == "number") {
        S = l * w * a / 1e3, this.ctx.translate(S, 0), i.x += S * d;
        continue;
      }
      const C = (w.isSpace ? c : 0) + h, x = r.charProcOperatorList.get(w.operatorListId);
      x ? this.contentVisible && (this.save(), x.fnArray[0] === ni.setCharWidth && (i.fillAlpha = i.strokeAlpha = 1, s.globalAlpha = 1), s.scale(a, a), s.transform(...f), this.executeOperatorList(x), this.restore()) : X(`Type3 character "${w.operatorListId}" is not available.`);
      const _ = [w.width, 0];
      I.applyTransform(_, f), v = _[0] * a + C, s.translate(v, 0), i.x += v * d;
    }
    s.restore(), E && (this.dependencyTracker = E);
  }
  setCharWidth(t, e, s) {
  }
  setCharWidthAndBounds(t, e, s, i, r, a, o) {
    var h;
    const l = new Path2D();
    l.rect(i, r, a - i, o - r), this.ctx.clip(l), (h = this.dependencyTracker) == null || h.recordBBox(t, this.ctx, i, a, r, o).recordClipBox(t, this.ctx, i, a, r, o), this.endPath(t);
  }
  getColorN_Pattern(t, e) {
    let s;
    if (e[0] === "TilingPattern") {
      const i = this.baseTransform || mt(this.ctx), r = {
        createCanvasGraphics: (a, o) => new ea(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        }, void 0, void 0, this.dependencyTracker ? new bc(this.dependencyTracker, o, !0) : null)
      };
      s = new hc(e, this.ctx, r, i);
    } else
      s = this._getPattern(t, e[1], e[2]);
    return s;
  }
  setStrokeColorN(t, ...e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("strokeColor", t), this.current.strokeColor = this.getColorN_Pattern(t, e), this.current.patternStroke = !0;
  }
  setFillColorN(t, ...e) {
    var i;
    (i = this.dependencyTracker) == null || i.recordSimpleData("fillColor", t);
    const s = this.current.fillColor = this.getColorN_Pattern(t, e);
    this.current.patternFill = !0, this.current.tilingPatternDims = s instanceof hc ? [0, 0, 0, 0] : null;
  }
  setStrokeRGBColor(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("strokeColor", t), this.current.strokeColor = e, this.ctx.strokeStyle = b(this, U, Qh).call(this, e), this.current.patternStroke = !1;
  }
  setStrokeTransparent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordSimpleData("strokeColor", t), this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = !1;
  }
  setFillRGBColor(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.recordSimpleData("fillColor", t), this.current.fillColor = e, this.ctx.fillStyle = b(this, U, Qh).call(this, e), this.current.patternFill = !1, this.current.tilingPatternDims = null;
  }
  setFillTransparent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.recordSimpleData("fillColor", t), this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1, this.current.tilingPatternDims = null;
  }
  _getPattern(t, e, s = null) {
    const i = this.cachedPatterns.getOrInsertComputed(e, () => Yw(this.getObject(t, e)));
    return s && (i.matrix = s), i;
  }
  shadingFill(t, e) {
    var o;
    if (!this.contentVisible)
      return;
    const s = b(this, U, He).call(this, this.current.fillAlpha), i = this.ctx;
    this.save(t);
    const r = this._getPattern(t, e);
    i.fillStyle = r.getPattern(i, this, ai(i), ge.SHADING, t);
    const a = ai(i);
    if (a) {
      const {
        width: l,
        height: h
      } = i.canvas, c = na.slice();
      I.axialAlignedBoundingBox([0, 0, l, h], a, c);
      const [d, f, m, y] = c;
      this.ctx.fillRect(d, f, m - d, y - f);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    (o = this.dependencyTracker) == null || o.resetBBox(t).recordFullPageBBox(t).recordDependencies(t, vs.transform).recordDependencies(t, vs.fill).recordOperation(t), this.compose(this.current.getClippedPathBoundingBox()), this.restore(t), b(this, U, Ae).call(this, s);
  }
  beginInlineImage() {
    st("Should not call beginInlineImage");
  }
  beginImageData() {
    st("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e, s) {
    var i;
    if (this.contentVisible && (this.save(t), this.baseTransformStack.push(this.baseTransform), e && this.transform(t, ...e), this.baseTransform = mt(this.ctx), s)) {
      I.axialAlignedBoundingBox(s, this.baseTransform, this.current.minMax);
      const [r, a, o, l] = s, h = new Path2D();
      h.rect(r, a, o - r, l - a), this.ctx.clip(h), (i = this.dependencyTracker) == null || i.recordClipBox(t, this.ctx, r, o, a, l), this.endPath(t);
    }
  }
  paintFormXObjectEnd(t) {
    this.contentVisible && (this.restore(t), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(t, e) {
    var C;
    if (!this.contentVisible)
      return;
    this.save(t);
    const {
      inSMaskMode: s
    } = this;
    s && (this.endSMaskMode(), this.current.activeSMask = null);
    const i = this.ctx;
    if ((!e.needsIsolation || !e.isolated && !e.hasSoftMask) && !e.knockout && !e.isGray && n(this, es) === 0 && i.globalAlpha === 1 && i.globalCompositeOperation === "source-over" && !s) {
      if (e.bbox) {
        let x = new Path2D();
        const [_, k, M, P] = e.bbox;
        if (x.rect(_, k, M - _, P - k), e.matrix) {
          const D = new Path2D();
          D.addPath(x, new DOMMatrix(e.matrix)), x = D;
        }
        i.clip(x);
      }
      this.groupStack.push(null), n(this, Ci).push(null), this.groupLevel++;
      return;
    }
    !e.isolated && !e.knockout && n(this, es) === 0 && Jf("TODO: Fully support non-isolated non-knockout groups.");
    const r = mt(i);
    e.matrix && i.transform(...e.matrix);
    const a = [0, 0, i.canvas.width, i.canvas.height];
    let o;
    e.bbox ? (o = na.slice(), I.axialAlignedBoundingBox(e.bbox, mt(i), o), o = I.intersect(o, a) || [0, 0, 0, 0]) : o = a;
    const l = Math.floor(o[0]), h = Math.floor(o[1]), c = Math.max(Math.ceil(o[2]) - l, 1), d = Math.max(Math.ceil(o[3]) - h, 1);
    this.current.startNewPathAndClipBox([0, 0, c, d]);
    const f = this.canvasFactory.create(c, d);
    e.smask && this.smaskGroupCanvases.push(f);
    const m = f.context, y = e.knockout && !e.isolated ? i : null, A = !e.isolated && !e.knockout && !e.smask && e.needsIsolation && n(this, es) > 0, w = e.knockout ? this.canvasFactory.create(c, d) : null, v = n(this, es);
    e.knockout ? yt(this, es)._++ : u(this, es, 0), m.translate(-l, -h), m.transform(...r);
    const S = !e.isolated && !e.smask && e.needsIsolation, E = S && !s && v === 0 && !e.knockout && !e.isGray && e.hasSoftMask && i.globalAlpha === 1 && i.globalCompositeOperation === "source-over" && this.current.transferMaps === "none" && !this.current.transferMapsFallback;
    if (S && (s || E) && (m.save(), m.setTransform(1, 0, 0, 1, 0, 0), m.drawImage(i.canvas, -l, -h), m.restore()), e.bbox) {
      let x = new Path2D();
      const [_, k, M, P] = e.bbox;
      if (x.rect(_, k, M - _, P - k), e.matrix) {
        const D = new Path2D();
        D.addPath(x, new DOMMatrix(e.matrix)), x = D;
      }
      m.clip(x);
    }
    e.smask && this.smaskStack.push({
      canvas: f.canvas,
      context: m,
      offsetX: l,
      offsetY: h,
      subtype: e.smask.subtype,
      backdrop: e.smask.backdrop,
      transferMap: e.smask.transferMap || null
    }), (!e.smask || this.dependencyTracker) && (i.setTransform(1, 0, 0, 1, 0, 0), i.translate(l, h), i.save()), Yr(i, m), this.ctx = m, (C = this.dependencyTracker) == null || C.inheritSimpleDataAsFutureForcedDependencies(["fillAlpha", "strokeAlpha", "globalCompositeOperation"]).pushBaseTransform(i), this.setGState(t, [["BM", "source-over"], ["ca", 1], ["CA", 1], ["TR", null]]), this.groupStack.push(i), n(this, Ci).push({
      backdropCtx: y,
      savedKnockoutLevel: v,
      offsetX: l,
      offsetY: h,
      hasInnerBackdrop: A,
      replaceBackdrop: E,
      knockoutMaskEntry: w,
      knockoutTempEntry: null,
      knockoutBackdropEntry: null
    }), this.groupLevel++;
  }
  endGroup(t, e) {
    var a, o;
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const s = this.ctx, i = this.groupStack.pop(), r = n(this, Ci).pop();
    if (r && u(this, es, r.savedKnockoutLevel), i === null) {
      this.restore(t);
      return;
    }
    if (e.isGray && b(this, U, Sy).call(this, s), this.ctx = i, this.ctx.imageSmoothingEnabled = !1, (a = this.dependencyTracker) == null || a.popBaseTransform(), e.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore(t), this.dependencyTracker && (this.ctx.restore(), this.inSMaskMode && this.ctx.setTransform(this.suspendedCtx.getTransform())), b(this, U, Fu).call(this, r);
    else {
      this.ctx.restore();
      const l = mt(this.ctx);
      this.restore(t), (o = this.current.transferMapsFallback) == null || o.applyToCanvas(s), this.ctx.save(), this.ctx.setTransform(...l);
      const h = na.slice();
      I.axialAlignedBoundingBox([0, 0, s.canvas.width, s.canvas.height], l, h);
      const c = n(this, Ci).at(-1);
      if (n(this, es) > 0)
        if (r.hasInnerBackdrop) {
          const {
            width: d,
            height: f
          } = s.canvas, m = this.canvasFactory.create(d, f), y = m.context;
          y.drawImage(i.canvas, r.offsetX, r.offsetY, d, f, 0, 0, d, f), y.globalCompositeOperation = "source-over", y.drawImage(s.canvas, 0, 0);
          const A = b(this, U, cg).call(this, s.canvas);
          y.globalCompositeOperation = "destination-in", y.drawImage(A.canvas, 0, 0);
          const w = this.ctx.globalCompositeOperation, v = this.ctx.globalAlpha, S = this.ctx.filter;
          this.ctx.save(), this.ctx.setTransform(...l), this.ctx.globalAlpha = 1, ot.isCanvasFilterSupported && (this.ctx.filter = "none"), this.ctx.globalCompositeOperation = "destination-out", this.ctx.drawImage(A.canvas, 0, 0), this.ctx.globalCompositeOperation = w, this.ctx.globalAlpha = v, ot.isCanvasFilterSupported && (this.ctx.filter = S ?? "none"), this.ctx.drawImage(m.canvas, 0, 0), this.ctx.restore(), this.canvasFactory.destroy(A), this.canvasFactory.destroy(m);
        } else {
          const d = (c == null ? void 0 : c.backdropCtx) ?? null;
          b(this, U, ug).call(this, this.ctx, s.canvas, {
            backdropCanvas: (d == null ? void 0 : d.canvas) ?? null,
            destTransform: l,
            backdropOffset: d ? [c.offsetX + r.offsetX, c.offsetY + r.offsetY] : [0, 0],
            sourceAlpha: this.ctx.globalAlpha,
            sourceFilter: this.ctx.filter
          });
        }
      else {
        if (r.replaceBackdrop) {
          const d = new Path2D();
          d.rect(0, 0, s.canvas.width, s.canvas.height), this.ctx.clip(d), this.ctx.globalCompositeOperation = "copy";
        }
        this.ctx.drawImage(s.canvas, 0, 0);
      }
      this.ctx.restore(), this.canvasFactory.destroy({
        canvas: s.canvas,
        context: s
      }), b(this, U, Fu).call(this, r), this.compose(h);
    }
  }
  beginAnnotation(t, e, s, i, r, a, o) {
    if (b(this, U, lg).call(this), Au(this.ctx), this.ctx.save(), this.save(t), this.baseTransform && this.ctx.setTransform(...this.baseTransform), s) {
      const l = s[2] - s[0], h = s[3] - s[1];
      if (a && this.annotationCanvasMap) {
        i = i.slice(), i[4] -= s[0], i[5] -= s[1], I.singularValueDecompose2dScale(mt(this.ctx), gs);
        const {
          viewportScale: c
        } = this, d = Math.ceil(l * this.outputScaleX * c), f = Math.ceil(h * this.outputScaleY * c);
        this.annotationCanvas = this.canvasFactory.create(d, f);
        const {
          canvas: m,
          context: y
        } = this.annotationCanvas;
        if (o) {
          const A = this.annotationCanvasMap.getOrInsertComputed(e, Ho);
          m.setAttribute("data-canvas-name", o);
          const w = A.findIndex((v) => v.getAttribute("data-canvas-name") === o);
          w === -1 ? A.push(m) : A[w] = m;
        } else
          this.annotationCanvasMap.set(e, m);
        this.annotationCanvas.savedCtx = this.ctx, this.ctx = y, this.ctx.save(), this.ctx.setTransform(gs[0], 0, 0, -gs[1], 0, h * gs[1]), Au(this.ctx);
      } else {
        Au(this.ctx), this.endPath(t);
        const c = new Path2D();
        c.rect(s[0], s[1], l, h), this.ctx.clip(c);
      }
    }
    this.current = new nb(this.ctx.canvas.width, this.ctx.canvas.height), this.baseTransformStack.push(this.baseTransform), this.transform(t, ...i), this.transform(t, ...r), this.baseTransform = mt(this.ctx);
  }
  endAnnotation(t) {
    this.annotationCanvas && (this.ctx.restore(), b(this, U, hg).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas), this.baseTransform = this.baseTransformStack.pop();
  }
  paintImageMaskXObject(t, e) {
    var l;
    if (!this.contentVisible)
      return;
    const s = e.count;
    e = this.getObject(t, e.data, e), e.count = s;
    const i = b(this, U, He).call(this, this.current.fillAlpha), r = this.ctx, a = this._createMaskCanvas(t, e), o = a.canvas;
    r.save(), r.setTransform(1, 0, 0, 1, 0, 0), r.drawImage(o, a.offsetX, a.offsetY), (l = this.dependencyTracker) == null || l.resetBBox(t).recordBBox(t, this.ctx, a.offsetX, a.offsetX + o.width, a.offsetY, a.offsetY + o.height).recordOperation(t), r.restore(), a.canvasEntry && this.canvasFactory.destroy(a.canvasEntry), this.compose(), b(this, U, Ae).call(this, i);
  }
  paintImageMaskXObjectRepeat(t, e, s, i = 0, r = 0, a, o) {
    var f, m, y;
    if (!this.contentVisible)
      return;
    e = this.getObject(t, e.data, e);
    const l = b(this, U, He).call(this, this.current.fillAlpha), h = this.ctx;
    h.save();
    const c = mt(h);
    h.transform(s, i, r, a, 0, 0);
    const d = this._createMaskCanvas(t, e);
    h.setTransform(1, 0, 0, 1, d.offsetX - c[4], d.offsetY - c[5]), (f = this.dependencyTracker) == null || f.resetBBox(t);
    for (let A = 0, w = o.length; A < w; A += 2) {
      const v = I.transform(c, [s, i, r, a, o[A], o[A + 1]]);
      h.drawImage(d.canvas, v[4], v[5]), (m = this.dependencyTracker) == null || m.recordBBox(t, this.ctx, v[4], v[4] + d.canvas.width, v[5], v[5] + d.canvas.height);
    }
    h.restore(), d.canvasEntry && this.canvasFactory.destroy(d.canvasEntry), this.compose(), (y = this.dependencyTracker) == null || y.recordOperation(t), b(this, U, Ae).call(this, l);
  }
  paintImageMaskXObjectGroup(t, e) {
    var o, l, h;
    if (!this.contentVisible)
      return;
    const s = b(this, U, He).call(this, this.current.fillAlpha), i = this.ctx, r = this.current.patternFill, a = r ? this.current.fillColor : i.fillStyle;
    (o = this.dependencyTracker) == null || o.resetBBox(t).recordDependencies(t, vs.transformAndFill);
    for (const c of e) {
      const {
        data: d,
        width: f,
        height: m,
        transform: y
      } = c, A = this.canvasFactory.create(f, m), w = A.context;
      w.save();
      const v = this.getObject(t, d, c);
      ab(w, v), w.globalCompositeOperation = "source-in", w.fillStyle = r ? a.getPattern(w, this, ai(i), ge.FILL, t) : a, w.fillRect(0, 0, f, m), w.restore(), i.save(), i.transform(...y), i.scale(1, -1), yu(i, A.canvas, 0, 0, f, m, 0, -1, 1, 1), this.canvasFactory.destroy(A), (l = this.dependencyTracker) == null || l.recordBBox(t, i, 0, f, 0, m), i.restore();
    }
    this.compose(), (h = this.dependencyTracker) == null || h.recordOperation(t), b(this, U, Ae).call(this, s);
  }
  paintImageXObject(t, e) {
    if (!this.contentVisible)
      return;
    const s = this.getObject(t, e);
    if (!s) {
      X("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(t, s);
  }
  paintImageXObjectRepeat(t, e, s, i, r) {
    if (!this.contentVisible)
      return;
    const a = this.getObject(t, e);
    if (!a) {
      X("Dependent image isn't ready yet");
      return;
    }
    const o = a.width, l = a.height, h = [];
    for (let c = 0, d = r.length; c < d; c += 2)
      h.push({
        transform: [s, 0, 0, i, r[c], r[c + 1]],
        x: 0,
        y: 0,
        w: o,
        h: l
      });
    this.paintInlineImageXObjectGroup(t, a, h);
  }
  applyTransferMapsToCanvas(t) {
    var e;
    return this.current.transferMaps !== "none" ? (t.filter = this.current.transferMaps, t.drawImage(t.canvas, 0, 0), t.filter = "none") : (e = this.current.transferMapsFallback) == null || e.applyToCanvas(t), t.canvas;
  }
  applyTransferMapsToBitmap(t) {
    const {
      transferMaps: e,
      transferMapsFallback: s
    } = this.current;
    if (e === "none" && !s)
      return {
        img: t.bitmap,
        canvasEntry: null
      };
    const {
      bitmap: i,
      width: r,
      height: a
    } = t, o = this.canvasFactory.create(r, a), l = o.context;
    return l.filter = e, l.drawImage(i, 0, 0), l.filter = "none", s == null || s.applyToCanvas(l), {
      img: o.canvas,
      canvasEntry: o
    };
  }
  paintInlineImageXObject(t, e) {
    var d;
    if (!this.contentVisible)
      return;
    const s = e.width, i = e.height, r = b(this, U, He).call(this, this.current.fillAlpha), a = this.ctx;
    this.save(t);
    const {
      filter: o
    } = a;
    o !== "none" && o !== "" && (a.filter = "none"), a.scale(1 / s, -1 / i);
    let l, h = null;
    if (e.bitmap) {
      const f = this.applyTransferMapsToBitmap(e);
      l = f.img, h = f.canvasEntry;
    } else {
      const f = this.canvasFactory.create(s, i);
      rb(f.context, e), l = this.applyTransferMapsToCanvas(f.context), h = f;
    }
    const c = this._scaleImage(l, ai(a));
    a.imageSmoothingEnabled = ob(mt(a), e.interpolate), this.dependencyTracker && (this.dependencyTracker.resetBBox(t).recordBBox(t, a, 0, s, -i, 0).recordDependencies(t, vs.imageXObject).recordOperation(t), (d = this.imagesTracker) == null || d.record(a, s, i, this.dependencyTracker.clipBox)), yu(a, c.img, 0, 0, c.paintWidth, c.paintHeight, 0, -i, s, i), c.tmpCanvas && this.canvasFactory.destroy(c.tmpCanvas), h && this.canvasFactory.destroy(h), this.compose(), this.restore(t), b(this, U, Ae).call(this, r);
  }
  paintInlineImageXObjectGroup(t, e, s) {
    var l, h, c;
    if (!this.contentVisible)
      return;
    const i = b(this, U, He).call(this, this.current.fillAlpha), r = this.ctx;
    let a, o = null;
    if (e.bitmap && !this.current.transferMapsFallback)
      a = e.bitmap;
    else if (e.bitmap)
      ({
        img: a,
        canvasEntry: o
      } = this.applyTransferMapsToBitmap(e));
    else {
      const d = e.width, f = e.height, m = this.canvasFactory.create(d, f);
      rb(m.context, e), a = this.applyTransferMapsToCanvas(m.context), o = m;
    }
    (l = this.dependencyTracker) == null || l.resetBBox(t);
    for (const d of s)
      r.save(), r.transform(...d.transform), r.scale(1, -1), yu(r, a, d.x, d.y, d.w, d.h, 0, -1, 1, 1), (h = this.dependencyTracker) == null || h.recordBBox(t, r, 0, 1, -1, 0), r.restore();
    o && this.canvasFactory.destroy(o), (c = this.dependencyTracker) == null || c.recordOperation(t), this.compose(), b(this, U, Ae).call(this, i);
  }
  paintSolidColorImageMask(t) {
    var s;
    if (!this.contentVisible)
      return;
    const e = b(this, U, He).call(this, this.current.fillAlpha);
    (s = this.dependencyTracker) == null || s.resetBBox(t).recordBBox(t, this.ctx, 0, 1, 0, 1).recordDependencies(t, vs.fill).recordOperation(t), this.ctx.fillRect(0, 0, 1, 1), this.compose(), b(this, U, Ae).call(this, e);
  }
  markPoint(t, e) {
  }
  markPointProps(t, e, s) {
  }
  beginMarkedContent(t, e) {
    var s;
    (s = this.dependencyTracker) == null || s.beginMarkedContent(t), this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(t, e, s) {
    var i;
    (i = this.dependencyTracker) == null || i.beginMarkedContent(t), e === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(s)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent(t) {
    var e;
    (e = this.dependencyTracker) == null || e.endMarkedContent(t), this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat(t) {
  }
  endCompat(t) {
  }
  consumePath(t, e, s) {
    var a, o;
    const i = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(s);
    const r = this.ctx;
    this.pendingClip ? (i || (this.pendingClip === lb ? r.clip(e, "evenodd") : r.clip(e)), this.pendingClip = null, (a = this.dependencyTracker) == null || a.bboxToClipBoxDropOperation(t).recordFutureForcedDependency("clipPath", t)) : (o = this.dependencyTracker) == null || o.recordOperation(t), this.current.startNewPathAndClipBox(this.current.clipBox);
  }
  getSinglePixelWidth() {
    const t = mt(this.ctx);
    if (t[1] === 0 && t[2] === 0)
      return 1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
    const e = Math.abs(t[0] * t[3] - t[2] * t[1]), s = Math.hypot(t[0], t[2]), i = Math.hypot(t[1], t[3]);
    return Math.max(s, i) / e;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: t
      } = this.current, {
        a: e,
        b: s,
        c: i,
        d: r
      } = this.ctx.getTransform();
      let a, o;
      if (s === 0 && i === 0) {
        const l = Math.abs(e), h = Math.abs(r);
        if (l === h)
          if (t === 0)
            a = o = 1 / l;
          else {
            const c = l * t;
            a = o = c < 1 ? 1 / c : 1;
          }
        else if (t === 0)
          a = 1 / l, o = 1 / h;
        else {
          const c = l * t, d = h * t;
          a = c < 1 ? 1 / c : 1, o = d < 1 ? 1 / d : 1;
        }
      } else {
        const l = Math.abs(e * r - s * i), h = Math.hypot(e, s), c = Math.hypot(i, r);
        if (t === 0)
          a = c / l, o = h / l;
        else {
          const d = t * l;
          a = c > d ? c / d : 1, o = h > d ? h / d : 1;
        }
      }
      this._cachedScaleForStroking[0] = a, this._cachedScaleForStroking[1] = o;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t, e) {
    const {
      ctx: s,
      current: {
        lineWidth: i
      }
    } = this, [r, a] = this.getScaleForStroking();
    if (r === a) {
      s.lineWidth = (i || 1) * r, s.stroke(t);
      return;
    }
    const o = n(ea, Ff) ?? u(ea, Ff, new DOMMatrix()), l = s.getLineDash();
    e && s.save(), s.scale(r, a), o.a = 1 / r, o.d = 1 / a;
    const h = new Path2D();
    if (h.addPath(t, o), l.length > 0) {
      const c = Math.max(r, a);
      s.setLineDash(l.map((d) => d / c)), s.lineDashOffset /= c;
    }
    s.lineWidth = i || 1, s.stroke(h), e && s.restore();
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible)
        return !1;
    return !0;
  }
};
Ff = new WeakMap(), es = new WeakMap(), yr = new WeakMap(), Ha = new WeakMap(), Ua = new WeakMap(), Ga = new WeakMap(), $a = new WeakMap(), za = new WeakMap(), Va = new WeakMap(), ja = new WeakMap(), Ci = new WeakMap(), U = new WeakSet(), lg = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.canvasFactory.destroy(this.transparentCanvasEntry), this.transparentCanvas = null, this.transparentCanvasEntry = null);
}, hg = function() {
  if (this.pageColors) {
    const t = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (t !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = t, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
}, cg = function(t, e = null, s = 1) {
  const {
    width: i,
    height: r
  } = t, a = e ?? this.canvasFactory.create(i, r), o = a.context;
  s = Math.round(s * 255) / 255;
  const l = s < 1;
  l && n(this, Va) === void 0 && u(this, Va, ot.isCanvasFilterSupported ? /* @__PURE__ */ new Map() : "none");
  let h = "none";
  if (l && n(this, Va) instanceof Map && (h = n(this, Va).getOrInsertComputed(s, () => this.filterFactory.addKnockoutFilter(s))), !l || h !== "none")
    return e && (o.save(), o.setTransform(1, 0, 0, 1, 0, 0), o.clearRect(0, 0, i, r), o.restore()), o.filter = h, o.drawImage(t, 0, 0), o.filter = "none", a;
  const c = t.getContext("2d", {
    willReadFrequently: !0
  }).getImageData(0, 0, i, r), d = o.createImageData(i, r), f = c.data, m = d.data, y = s > 0 ? 1 / s : 1e6;
  for (let A = 3, w = f.length; A < w; A += 4)
    m[A] = Math.min(Math.round(f[A] * y), 255);
  return o.putImageData(d, 0, 0), a;
}, dg = function(t, e, s, i) {
  let r = (t == null ? void 0 : t[e]) ?? null;
  if (r && (r.canvas.width !== s || r.canvas.height !== i) && (this.canvasFactory.destroy(r), r = null), !r)
    return r = this.canvasFactory.create(s, i), t && (t[e] = r), r;
  const a = r.context;
  return a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, s, i), a.restore(), r;
}, ug = function(t, e, s = {}) {
  const {
    backdropCanvas: i = null,
    destTransform: r = [1, 0, 0, 1, 0, 0],
    backdropOffset: a = [0, 0],
    reuseMaskEntry: o = null,
    poolMeta: l = null,
    sourceAlpha: h = 1,
    sourceFilter: c = "none",
    knockoutAlpha: d = 1
  } = s, {
    width: f,
    height: m
  } = e, y = b(this, U, cg).call(this, e, o, d), A = t.globalCompositeOperation;
  if (t.save(), t.setTransform(...r), t.globalAlpha = 1, ot.isCanvasFilterSupported && (t.filter = "none"), t.globalCompositeOperation = "destination-out", t.drawImage(y.canvas, 0, 0), i) {
    const [w, v] = a, S = b(this, U, dg).call(this, l, "knockoutBackdropEntry", f, m), E = S.context;
    E.drawImage(i, w, v, f, m, 0, 0, f, m), E.globalCompositeOperation = "destination-in", E.drawImage(y.canvas, 0, 0), E.globalCompositeOperation = "source-over", t.globalCompositeOperation = "destination-over", t.drawImage(S.canvas, 0, 0), l || this.canvasFactory.destroy(S);
  }
  t.globalCompositeOperation = A, t.globalAlpha = h, ot.isCanvasFilterSupported && (t.filter = c ?? "none"), t.drawImage(e, 0, 0), t.restore(), o || this.canvasFactory.destroy(y);
}, He = function(t = 1) {
  if (n(this, es) === 0 || n(this, yr) > 0 || !this.contentVisible)
    return !1;
  yt(this, yr)._++, u(this, za, t);
  const e = n(this, Ci).at(-1), {
    canvas: s
  } = this.ctx, i = b(this, U, dg).call(this, e, "knockoutTempEntry", s.width, s.height);
  u(this, Ha, i);
  const r = i.context;
  return r.save(), r.setTransform(this.ctx.getTransform()), Yr(this.ctx, r), u(this, $a, r.globalCompositeOperation), r.globalCompositeOperation = "source-over", ib(r, this.ctx), u(this, ja, e), u(this, Ua, this.ctx), u(this, Ga, this.suspendedCtx), this.ctx = r, this.inSMaskMode && (this.suspendedCtx = r), !0;
}, Ae = function(t) {
  var l;
  if (!t)
    return;
  const e = n(this, Ha), s = n(this, Ua), i = n(this, Ga), r = e.context;
  u(this, Ha, null), u(this, Ua, null), u(this, Ga, null), this.inSMaskMode && this.suspendedCtx === r && this.ctx !== r && this.endSMaskMode(), this.inSMaskMode && (this.suspendedCtx = i), this.ctx._removeMirroring(), this.ctx.globalCompositeOperation = n(this, $a), u(this, $a, null), Yr(this.ctx, s), this.ctx = s;
  const a = n(this, ja);
  u(this, ja, null);
  const o = n(this, za);
  u(this, za, 1);
  try {
    b(this, U, ug).call(this, i ?? s, e.canvas, {
      backdropCanvas: ((l = a == null ? void 0 : a.backdropCtx) == null ? void 0 : l.canvas) ?? null,
      backdropOffset: a != null && a.backdropCtx ? [a.offsetX, a.offsetY] : [0, 0],
      reuseMaskEntry: (a == null ? void 0 : a.knockoutMaskEntry) ?? null,
      poolMeta: a,
      knockoutAlpha: o
    });
  } finally {
    r.restore(), yt(this, yr)._--, a || this.canvasFactory.destroy(e);
  }
}, fg = function(t, e, s) {
  const i = new Path2D();
  return i.addPath(t, new DOMMatrix(s).invertSelf().multiplySelf(e)), i;
}, Qh = function(t) {
  var e;
  return ((e = this.current.transferMapsFallback) == null ? void 0 : e.applyToColor(t)) ?? t;
}, Sy = function(t) {
  const {
    canvas: e
  } = t, {
    width: s,
    height: i
  } = e;
  if (ot.isCanvasFilterSupported) {
    t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.filter = "grayscale(1)", t.globalAlpha = 1, t.globalCompositeOperation = "copy", t.drawImage(e, 0, 0), t.restore();
    return;
  }
  const r = t.getImageData(0, 0, s, i), {
    data: a
  } = r;
  for (let o = 0, l = a.length; o < l; o += 4) {
    const h = a[o] * 0.2126 + a[o + 1] * 0.7152 + a[o + 2] * 0.0722 + 0.5 | 0;
    a[o] = a[o + 1] = a[o + 2] = h;
  }
  t.putImageData(r, 0, 0);
}, Fu = function(t) {
  t && (t.knockoutMaskEntry && (this.canvasFactory.destroy(t.knockoutMaskEntry), t.knockoutMaskEntry = null), t.knockoutTempEntry && (this.canvasFactory.destroy(t.knockoutTempEntry), t.knockoutTempEntry = null), t.knockoutBackdropEntry && (this.canvasFactory.destroy(t.knockoutBackdropEntry), t.knockoutBackdropEntry = null));
}, g(ea, Ff, null);
let Qo = ea;
for (const p in ni)
  Qo.prototype[p] !== void 0 && (Qo.prototype[ni[p]] = Qo.prototype[p]);
var sd, id;
class ap {
  constructor(t, e, s) {
    g(this, sd, null);
    g(this, id, null);
    T(this, "_fullReader", null);
    T(this, "_rangeReaders", /* @__PURE__ */ new Set());
    T(this, "_source", null);
    this._source = t, u(this, sd, e), u(this, id, s);
  }
  get _progressiveDataLength() {
    var t;
    return ((t = this._fullReader) == null ? void 0 : t._loaded) ?? 0;
  }
  getFullReader() {
    return Gt(!this._fullReader, "BasePDFStream.getFullReader can only be called once."), this._fullReader = new (n(this, sd))(this);
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const s = new (n(this, id))(this, t, e);
    return this._rangeReaders.add(s), s;
  }
  cancelAllRequests(t) {
    var e;
    (e = this._fullReader) == null || e.cancel(t);
    for (const s of new Set(this._rangeReaders))
      s.cancel(t);
  }
}
sd = new WeakMap(), id = new WeakMap();
class op {
  constructor(t) {
    T(this, "onProgress", null);
    T(this, "_contentLength", 0);
    T(this, "_filename", null);
    T(this, "_headersCapability", Promise.withResolvers());
    T(this, "_isRangeSupported", !1);
    T(this, "_isStreamingSupported", !1);
    T(this, "_loaded", 0);
    T(this, "_stream", null);
    this._stream = t;
  }
  _callOnProgress() {
    var t;
    (t = this.onProgress) == null || t.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    });
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    st("Abstract method `read` called");
  }
  cancel(t) {
    st("Abstract method `cancel` called");
  }
}
class lp {
  constructor(t, e, s) {
    T(this, "_stream", null);
    this._stream = t;
  }
  async read() {
    st("Abstract method `read` called");
  }
  cancel(t) {
    st("Abstract method `cancel` called");
  }
}
function ev(p) {
  let t = !0, e = s("filename\\*", "i").exec(p);
  if (e) {
    e = e[1];
    let c = o(e);
    return c = unescape(c), c = l(c), c = h(c), r(c);
  }
  if (e = a(p), e) {
    const c = h(e);
    return r(c);
  }
  if (e = s("filename", "i").exec(p), e) {
    e = e[1];
    let c = o(e);
    return c = h(c), r(c);
  }
  function s(c, d) {
    return new RegExp("(?:^|;)\\s*" + c + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', d);
  }
  function i(c, d) {
    if (c) {
      if (!/^[\x00-\xFF]+$/.test(d))
        return d;
      try {
        const f = new TextDecoder(c, {
          fatal: !0
        }), m = Zf(d);
        d = f.decode(m), t = !1;
      } catch {
      }
    }
    return d;
  }
  function r(c) {
    return t && /[\x80-\xff]/.test(c) && (c = i("utf-8", c), t && (c = i("iso-8859-1", c))), c;
  }
  function a(c) {
    const d = [];
    let f;
    const m = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (f = m.exec(c)) !== null; ) {
      let [, A, w, v] = f;
      if (A = parseInt(A, 10), A in d) {
        if (A === 0)
          break;
        continue;
      }
      d[A] = [w, v];
    }
    const y = [];
    for (let A = 0; A < d.length && A in d; ++A) {
      let [w, v] = d[A];
      v = o(v), w && (v = unescape(v), A === 0 && (v = l(v))), y.push(v);
    }
    return y.join("");
  }
  function o(c) {
    if (c.startsWith('"')) {
      const d = c.slice(1).split('\\"');
      for (let f = 0; f < d.length; ++f) {
        const m = d[f].indexOf('"');
        m !== -1 && (d[f] = d[f].slice(0, m), d.length = f + 1), d[f] = d[f].replaceAll(/\\(.)/g, "$1");
      }
      c = d.join('"');
    }
    return c;
  }
  function l(c) {
    const d = c.indexOf("'");
    if (d === -1)
      return c;
    const f = c.slice(0, d), y = c.slice(d + 1).replace(/^[^']*'/, "");
    return i(f, y);
  }
  function h(c) {
    return !c.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(c) ? c : c.replaceAll(/=\?([\w-]*)\?([QB])\?((?:[^?]|\?(?!=))*)\?=/gi, function(d, f, m, y) {
      if (m === "q" || m === "Q")
        return y = y.replaceAll("_", " ").replaceAll(/=([0-9a-f]{2})/gi, (A, w) => String.fromCharCode(parseInt(w, 16))), i(f, y);
      try {
        y = atob(y);
      } catch {
      }
      return i(f, y);
    });
  }
  return "";
}
function Ey(p, t) {
  const e = new Headers();
  if (!p || !t || typeof t != "object")
    return e;
  for (const s in t) {
    const i = t[s];
    i !== void 0 && e.append(s, i);
  }
  return e;
}
function sv(p) {
  let t = p.length;
  for (; t > 0 && p[t - 1] !== " " && /\s/.test(p[t - 1]); )
    t--;
  return p.slice(0, t);
}
function hp(p) {
  var t;
  return ((t = URL.parse(p)) == null ? void 0 : t.origin) ?? null;
}
function Cy({
  responseHeaders: p,
  isHttp: t,
  rangeChunkSize: e,
  disableRange: s
}) {
  const i = {
    contentLength: 0,
    isRangeSupported: !1
  }, r = parseInt(p.get("Content-Length"), 10);
  return !Number.isInteger(r) || (i.contentLength = r, r <= 2 * e) || s || !t || p.get("Accept-Ranges") !== "bytes" || (p.get("Content-Encoding") || "identity") === "identity" && (i.isRangeSupported = !0), i;
}
function xy(p) {
  const t = p.get("Content-Disposition");
  if (t) {
    let e = ev(t);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (np(e))
      return e;
  }
  return null;
}
function cp(p, t) {
  return new fc(`Unexpected server response (${p}) while retrieving PDF "${t.href}".`, p, p === 404 || p === 0 && t.protocol === "file:");
}
function _y(p, t) {
  if (p !== t)
    throw new Error(`Expected range response-origin "${p}" to match "${t}".`);
}
function Ty(p, t, e, s) {
  return fetch(p, {
    method: "GET",
    headers: t,
    signal: s.signal,
    mode: "cors",
    credentials: e ? "include" : "same-origin",
    redirect: "follow"
  });
}
function ky(p, t) {
  if (p !== 200 && p !== 206)
    throw cp(p, t);
}
function dp(p) {
  if (p instanceof Uint8Array)
    return p.buffer;
  if (p instanceof ArrayBuffer)
    return p;
  throw new Error(`getArrayBuffer - unexpected data: ${p}`);
}
class iv extends ap {
  constructor(e) {
    super(e, nv, rv);
    T(this, "_responseOrigin", null);
    const {
      httpHeaders: s,
      url: i
    } = e;
    Gt(/https?:/.test(i.protocol), "PDFFetchStream only supports http(s):// URLs."), this.headers = Ey(!0, s);
  }
}
class nv extends op {
  constructor(e) {
    super(e);
    T(this, "_abortController", new AbortController());
    T(this, "_reader", null);
    const {
      disableRange: s,
      disableStream: i,
      rangeChunkSize: r,
      url: a,
      withCredentials: o
    } = e._source;
    this._isStreamingSupported = !i;
    const l = new Headers(e.headers);
    Ty(a, l, o, this._abortController).then((h) => {
      e._responseOrigin = hp(h.url), ky(h.status, a), this._reader = h.body.getReader();
      const c = h.headers, {
        contentLength: d,
        isRangeSupported: f
      } = Cy({
        responseHeaders: c,
        isHttp: !0,
        rangeChunkSize: r,
        disableRange: s
      });
      this._contentLength = d, this._isRangeSupported = f, this._filename = xy(c), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Rn("Streaming is disabled.")), this._headersCapability.resolve();
    }).catch(this._headersCapability.reject);
  }
  async read() {
    await this._headersCapability.promise;
    const {
      value: e,
      done: s
    } = await this._reader.read();
    return s ? {
      value: e,
      done: s
    } : (this._loaded += e.byteLength, this._callOnProgress(), {
      value: dp(e),
      done: !1
    });
  }
  cancel(e) {
    var s;
    (s = this._reader) == null || s.cancel(e), this._abortController.abort();
  }
}
class rv extends lp {
  constructor(e, s, i) {
    super(e, s, i);
    T(this, "_abortController", new AbortController());
    T(this, "_readCapability", Promise.withResolvers());
    T(this, "_reader", null);
    const {
      url: r,
      withCredentials: a
    } = e._source, o = new Headers(e.headers);
    o.append("Range", `bytes=${s}-${i - 1}`), Ty(r, o, a, this._abortController).then((l) => {
      const h = hp(l.url);
      _y(h, e._responseOrigin), ky(l.status, r), this._reader = l.body.getReader(), this._readCapability.resolve();
    }).catch(this._readCapability.reject);
  }
  async read() {
    await this._readCapability.promise;
    const {
      value: e,
      done: s
    } = await this._reader.read();
    return s ? {
      value: e,
      done: s
    } : {
      value: dp(e),
      done: !1
    };
  }
  cancel(e) {
    var s;
    (s = this._reader) == null || s.cancel(e), this._abortController.abort();
  }
}
function hb(p) {
  return p instanceof Uint8Array && p.byteLength === p.buffer.byteLength ? p.buffer : new Uint8Array(p).buffer;
}
function up() {
  for (const p of this._requests)
    p.resolve({
      value: void 0,
      done: !0
    });
  this._requests.length = 0;
}
var Of, Py;
class av extends ap {
  constructor(e) {
    super(e, ov, lv);
    g(this, Of);
    T(this, "_progressiveDone", !1);
    T(this, "_queuedChunks", []);
    const {
      pdfDataRangeTransport: s
    } = e, {
      initialData: i,
      progressiveDone: r
    } = s;
    if ((i == null ? void 0 : i.length) > 0) {
      const o = hb(i);
      this._queuedChunks.push(o);
    }
    this._progressiveDone = r;
    const a = (o) => {
      var l;
      switch (o.type) {
        case "range":
        case "progressiveRead":
          b(this, Of, Py).call(this, o.begin, o.chunk);
          break;
        case "progressiveDone":
          (l = this._fullReader) == null || l.progressiveDone(), this._progressiveDone = !0;
          break;
      }
    };
    s.transportReady(a);
  }
  getFullReader() {
    const e = super.getFullReader();
    return this._queuedChunks = null, e;
  }
  getRangeReader(e, s) {
    const i = super.getRangeReader(e, s);
    return i && (i.onDone = () => this._rangeReaders.delete(i), this._source.pdfDataRangeTransport.requestDataRange(e, s)), i;
  }
  cancelAllRequests(e) {
    super.cancelAllRequests(e), this._source.pdfDataRangeTransport.abort();
  }
}
Of = new WeakSet(), Py = function(e, s) {
  const i = hb(s);
  if (e === void 0)
    this._fullReader ? this._fullReader._enqueue(i) : this._queuedChunks.push(i);
  else {
    const r = this._rangeReaders.keys().find((a) => a._begin === e);
    Gt(r, "#onReceiveData - no `PDFDataTransportStreamRangeReader` instance found."), r._enqueue(i);
  }
};
var nd;
class ov extends op {
  constructor(e) {
    super(e);
    g(this, nd, up.bind(this));
    T(this, "_done", !1);
    T(this, "_queuedChunks", null);
    T(this, "_requests", []);
    const {
      pdfDataRangeTransport: s,
      disableRange: i,
      disableStream: r
    } = e._source, {
      length: a,
      contentDispositionFilename: o
    } = s;
    this._queuedChunks = e._queuedChunks || [];
    for (const h of this._queuedChunks)
      this._loaded += h.byteLength;
    this._done = e._progressiveDone, this._contentLength = a, this._isStreamingSupported = !r, this._isRangeSupported = !i, np(o) && (this._filename = o), this._headersCapability.resolve();
    const l = this._loaded;
    Promise.resolve().then(() => {
      l > 0 && this._loaded === l && this._callOnProgress();
    });
  }
  _enqueue(e) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunks.push(e), this._loaded += e.byteLength, this._callOnProgress());
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const e = Promise.withResolvers();
    return this._requests.push(e), e.promise;
  }
  cancel(e) {
    this._done = !0, n(this, nd).call(this);
  }
  progressiveDone() {
    this._done || (this._done = !0), this._queuedChunks.length === 0 && n(this, nd).call(this);
  }
}
nd = new WeakMap();
var rd;
class lv extends lp {
  constructor(e, s, i) {
    super(e, s, i);
    g(this, rd, up.bind(this));
    T(this, "onDone", null);
    T(this, "_begin", -1);
    T(this, "_done", !1);
    T(this, "_queuedChunk", null);
    T(this, "_requests", []);
    this._begin = s;
  }
  _enqueue(e) {
    var s;
    this._done || (this._requests.length === 0 ? this._queuedChunk = e : (this._requests.shift().resolve({
      value: e,
      done: !1
    }), n(this, rd).call(this)), this._done = !0, (s = this.onDone) == null || s.call(this));
  }
  async read() {
    if (this._queuedChunk) {
      const s = this._queuedChunk;
      return this._queuedChunk = null, {
        value: s,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const e = Promise.withResolvers();
    return this._requests.push(e), e.promise;
  }
  cancel(e) {
    var s;
    this._done = !0, n(this, rd).call(this), (s = this.onDone) == null || s.call(this);
  }
}
rd = new WeakMap();
const Sp = 200, cb = 206;
function hv(p) {
  return typeof p != "string" ? p : Zf(p).buffer;
}
var xi, Rh, My, Dy;
class cv extends ap {
  constructor(e) {
    super(e, dv, uv);
    g(this, Rh);
    g(this, xi, /* @__PURE__ */ new WeakMap());
    T(this, "_responseOrigin", null);
    const {
      httpHeaders: s,
      url: i
    } = e;
    this.url = i, this.isHttp = /https?:/.test(i.protocol), this.headers = Ey(this.isHttp, s);
  }
  _request(e) {
    const s = new XMLHttpRequest(), i = {
      validateStatus: null,
      onHeadersReceived: e.onHeadersReceived,
      onDone: e.onDone,
      onError: e.onError,
      onProgress: e.onProgress
    };
    n(this, xi).set(s, i), s.open("GET", this.url), s.withCredentials = this._source.withCredentials;
    for (const [r, a] of this.headers)
      s.setRequestHeader(r, a);
    return this.isHttp && "begin" in e && "end" in e ? (s.setRequestHeader("Range", `bytes=${e.begin}-${e.end - 1}`), i.validateStatus = (r) => r === cb || r === Sp) : i.validateStatus = (r) => r === Sp, s.responseType = "arraybuffer", Gt(e.onError, "Expected `onError` callback to be provided."), s.onerror = () => e.onError(s.status), s.onreadystatechange = b(this, Rh, Dy).bind(this, s), s.onprogress = b(this, Rh, My).bind(this, s), s.send(null), s;
  }
  _abortRequest(e) {
    n(this, xi).has(e) && (n(this, xi).delete(e), e.abort());
  }
  getRangeReader(e, s) {
    const i = super.getRangeReader(e, s);
    return i && (i.onClosed = () => this._rangeReaders.delete(i)), i;
  }
}
xi = new WeakMap(), Rh = new WeakSet(), My = function(e, s) {
  var r;
  const i = n(this, xi).get(e);
  (r = i == null ? void 0 : i.onProgress) == null || r.call(i, s);
}, Dy = function(e, s) {
  const i = n(this, xi).get(e);
  if (!i || (e.readyState >= 2 && i.onHeadersReceived && (i.onHeadersReceived(), delete i.onHeadersReceived), e.readyState !== 4) || !n(this, xi).has(e))
    return;
  if (n(this, xi).delete(e), e.status === 0 && this.isHttp) {
    i.onError(e.status);
    return;
  }
  const r = e.status || Sp;
  if (!i.validateStatus(r)) {
    i.onError(e.status);
    return;
  }
  const a = hv(e.response);
  if (r === cb) {
    const o = e.getResponseHeader("Content-Range");
    /bytes \d+-\d+\/\d+/.test(o) ? i.onDone(a) : (X('Missing or invalid "Content-Range" header.'), i.onError(0));
  } else a ? i.onDone(a) : i.onError(e.status);
};
var ad, $i, Iy, Ly, Ry, Fy;
class dv extends op {
  constructor(e) {
    super(e);
    g(this, $i);
    g(this, ad, up.bind(this));
    T(this, "_cachedChunks", []);
    T(this, "_done", !1);
    T(this, "_requests", []);
    T(this, "_storedError", null);
    this._fullRequestXhr = e._request({
      onHeadersReceived: b(this, $i, Iy).bind(this),
      onDone: b(this, $i, Ly).bind(this),
      onError: b(this, $i, Ry).bind(this),
      onProgress: b(this, $i, Fy).bind(this)
    });
  }
  async read() {
    if (await this._headersCapability.promise, this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const e = Promise.withResolvers();
    return this._requests.push(e), e.promise;
  }
  cancel(e) {
    this._done = !0, this._headersCapability.reject(e), n(this, ad).call(this), this._stream._abortRequest(this._fullRequestXhr), this._fullRequestXhr = null;
  }
}
ad = new WeakMap(), $i = new WeakSet(), Iy = function() {
  const e = this._stream, {
    disableRange: s,
    rangeChunkSize: i
  } = e._source, r = this._fullRequestXhr;
  e._responseOrigin = hp(r.responseURL);
  const a = r.getAllResponseHeaders(), o = new Headers(a ? sv(a.trimStart()).split(/[\r\n]+/).map((c) => {
    const [d, ...f] = c.split(": ");
    return [d, f.join(": ")];
  }) : []), {
    contentLength: l,
    isRangeSupported: h
  } = Cy({
    responseHeaders: o,
    isHttp: e.isHttp,
    rangeChunkSize: i,
    disableRange: s
  });
  this._contentLength = l, this._isRangeSupported = h, this._filename = xy(o), this._isRangeSupported && e._abortRequest(r), this._headersCapability.resolve();
}, Ly = function(e) {
  this._requests.length > 0 ? this._requests.shift().resolve({
    value: e,
    done: !1
  }) : this._cachedChunks.push(e), this._done = !0, this._cachedChunks.length === 0 && n(this, ad).call(this);
}, Ry = function(e) {
  this._storedError = cp(e, this._stream.url), this._headersCapability.reject(this._storedError);
  for (const s of this._requests)
    s.reject(this._storedError);
  this._requests.length = 0, this._cachedChunks.length = 0;
}, Fy = function(e) {
  var s;
  (s = this.onProgress) == null || s.call(this, {
    loaded: e.loaded,
    total: e.lengthComputable ? e.total : this._contentLength
  });
};
var od, Nn, Oy, Ny, pg;
class uv extends lp {
  constructor(e, s, i) {
    super(e, s, i);
    g(this, Nn);
    g(this, od, up.bind(this));
    T(this, "onClosed", null);
    T(this, "_done", !1);
    T(this, "_queuedChunk", null);
    T(this, "_requests", []);
    T(this, "_storedError", null);
    this._requestXhr = e._request({
      begin: s,
      end: i,
      onHeadersReceived: b(this, Nn, Oy).bind(this),
      onDone: b(this, Nn, Ny).bind(this),
      onError: b(this, Nn, pg).bind(this),
      onProgress: null
    });
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const s = this._queuedChunk;
      return this._queuedChunk = null, {
        value: s,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const e = Promise.withResolvers();
    return this._requests.push(e), e.promise;
  }
  cancel(e) {
    var s;
    this._done = !0, n(this, od).call(this), this._stream._abortRequest(this._requestXhr), (s = this.onClosed) == null || s.call(this);
  }
}
od = new WeakMap(), Nn = new WeakSet(), Oy = function() {
  var s;
  const e = hp((s = this._requestXhr) == null ? void 0 : s.responseURL);
  try {
    _y(e, this._stream._responseOrigin);
  } catch (i) {
    this._storedError = i, b(this, Nn, pg).call(this, 0);
  }
}, Ny = function(e) {
  var s;
  this._requests.length > 0 ? this._requests.shift().resolve({
    value: e,
    done: !1
  }) : this._queuedChunk = e, this._done = !0, n(this, od).call(this), (s = this.onClosed) == null || s.call(this);
}, pg = function(e) {
  this._storedError ?? (this._storedError = cp(e, this._stream.url));
  for (const s of this._requests)
    s.reject(this._storedError);
  this._requests.length = 0, this._queuedChunk = null;
};
function By(p, t = null) {
  const e = process.getBuiltinModule("fs"), {
    Readable: s
  } = process.getBuiltinModule("stream"), i = e.createReadStream(p, t);
  return s.toWeb(i);
}
class fv extends ap {
  constructor(t) {
    super(t, pv, gv);
    const {
      url: e
    } = t;
    Gt(e.protocol === "file:", "PDFNodeStream only supports file:// URLs.");
  }
}
class pv extends op {
  constructor(e) {
    super(e);
    T(this, "_reader", null);
    const {
      disableRange: s,
      disableStream: i,
      rangeChunkSize: r,
      url: a
    } = e._source;
    this._isStreamingSupported = !i, process.getBuiltinModule("fs/promises").lstat(a).then((l) => {
      const h = By(a);
      this._reader = h.getReader();
      const {
        size: c
      } = l;
      this._contentLength = c, this._isRangeSupported = !s && c > 2 * r, !this._isStreamingSupported && this._isRangeSupported && this.cancel(new Rn("Streaming is disabled.")), this._headersCapability.resolve();
    }).catch((l) => {
      l.code === "ENOENT" && (l = cp(0, a)), this._headersCapability.reject(l);
    });
  }
  async read() {
    await this._headersCapability.promise;
    const {
      value: e,
      done: s
    } = await this._reader.read();
    return s ? {
      value: e,
      done: s
    } : (this._loaded += e.byteLength, this._callOnProgress(), {
      value: dp(e),
      done: !1
    });
  }
  cancel(e) {
    var s;
    (s = this._reader) == null || s.cancel(e);
  }
}
class gv extends lp {
  constructor(e, s, i) {
    super(e, s, i);
    T(this, "_readCapability", Promise.withResolvers());
    T(this, "_reader", null);
    const {
      url: r
    } = e._source;
    try {
      const a = By(r, {
        start: s,
        end: i - 1
      });
      this._reader = a.getReader(), this._readCapability.resolve();
    } catch (a) {
      this._readCapability.reject(a);
    }
  }
  async read() {
    await this._readCapability.promise;
    const {
      value: e,
      done: s
    } = await this._reader.read();
    return s ? {
      value: e,
      done: s
    } : {
      value: dp(e),
      done: !1
    };
  }
  cancel(e) {
    var s;
    (s = this._reader) == null || s.cancel(e);
  }
}
function mv(p) {
  return oc(p) ? iv : ps ? fv : cv;
}
var ld, hd;
class Bi {
  static get workerPort() {
    return n(this, ld);
  }
  static set workerPort(t) {
    if (!(typeof Worker < "u" && t instanceof Worker) && t !== null)
      throw new Error("Invalid `workerPort` type.");
    u(this, ld, t);
  }
  static get workerSrc() {
    return n(this, hd);
  }
  static set workerSrc(t) {
    if (typeof t != "string")
      throw new Error("Invalid `workerSrc` type.");
    u(this, hd, t);
  }
}
ld = new WeakMap(), hd = new WeakMap(), g(Bi, ld, null), g(Bi, hd, "");
var Rl, cd;
class bv {
  constructor({
    parsedData: t,
    rawData: e
  }) {
    g(this, Rl);
    g(this, cd);
    u(this, Rl, t), u(this, cd, e);
  }
  getRaw() {
    return n(this, cd);
  }
  get(t) {
    return n(this, Rl).get(t) ?? null;
  }
  [Symbol.iterator]() {
    return n(this, Rl).entries();
  }
}
Rl = new WeakMap(), cd = new WeakMap();
const Qr = Symbol("INTERNAL");
var dd, ud, Fl, Wa;
class yv {
  constructor(t, {
    name: e,
    intent: s,
    usage: i,
    rbGroups: r
  }) {
    g(this, dd, !1);
    g(this, ud, !1);
    g(this, Fl, !1);
    g(this, Wa, !0);
    u(this, dd, !!(t & fs.DISPLAY)), u(this, ud, !!(t & fs.PRINT)), this.name = e, this.intent = s, this.usage = i, this.rbGroups = r;
  }
  get visible() {
    if (n(this, Fl))
      return n(this, Wa);
    if (!n(this, Wa))
      return !1;
    const {
      print: t,
      view: e
    } = this.usage;
    return n(this, dd) ? (e == null ? void 0 : e.viewState) !== "OFF" : n(this, ud) ? (t == null ? void 0 : t.printState) !== "OFF" : !0;
  }
  _setVisible(t, e, s = !1) {
    t !== Qr && st("Internal method `_setVisible` called."), u(this, Fl, s), u(this, Wa, e);
  }
  get serializable() {
    return {
      userSet: n(this, Fl),
      visible: n(this, Wa)
    };
  }
}
dd = new WeakMap(), ud = new WeakMap(), Fl = new WeakMap(), Wa = new WeakMap();
var Ar, rt, Ol, Nl, fd, pd, mg;
const Lm = class Lm {
  constructor(t, e = fs.DISPLAY, s = null) {
    g(this, pd);
    g(this, Ar, null);
    g(this, rt, /* @__PURE__ */ new Map());
    g(this, Ol, null);
    g(this, Nl, null);
    g(this, fd);
    T(this, "creator", null);
    T(this, "name", null);
    if (u(this, fd, t), this.renderingIntent = e, t !== null) {
      this.name = t.name, this.creator = t.creator, u(this, Nl, t.order);
      for (const i of t.groups)
        n(this, rt).set(i.id, new yv(e, i));
      if (s) {
        s.size !== n(this, rt).size && st("Incorrect serialized groupState.");
        for (const [i, r] of s)
          n(this, rt).get(i)._setVisible(Qr, r.visible, r.userSet);
      } else {
        if (t.baseState === "OFF")
          for (const i of n(this, rt).values())
            i._setVisible(Qr, !1);
        for (const i of t.on)
          n(this, rt).get(i)._setVisible(Qr, !0);
        for (const i of t.off)
          n(this, rt).get(i)._setVisible(Qr, !1);
      }
      u(this, Ol, this.getHash());
    }
  }
  isVisible(t) {
    if (n(this, rt).size === 0)
      return !0;
    if (!t)
      return Jf("Optional content group not defined."), !0;
    if (t.type === "OCG")
      return n(this, rt).has(t.id) ? n(this, rt).get(t.id).visible : (X(`Optional content group not found: ${t.id}`), !0);
    if (t.type === "OCMD") {
      if (t.expression)
        return b(this, pd, mg).call(this, t.expression);
      if (!t.policy || t.policy === "AnyOn") {
        for (const e of t.ids) {
          if (!n(this, rt).has(e))
            return X(`Optional content group not found: ${e}`), !0;
          if (n(this, rt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOn") {
        for (const e of t.ids) {
          if (!n(this, rt).has(e))
            return X(`Optional content group not found: ${e}`), !0;
          if (!n(this, rt).get(e).visible)
            return !1;
        }
        return !0;
      } else if (t.policy === "AnyOff") {
        for (const e of t.ids) {
          if (!n(this, rt).has(e))
            return X(`Optional content group not found: ${e}`), !0;
          if (!n(this, rt).get(e).visible)
            return !0;
        }
        return !1;
      } else if (t.policy === "AllOff") {
        for (const e of t.ids) {
          if (!n(this, rt).has(e))
            return X(`Optional content group not found: ${e}`), !0;
          if (n(this, rt).get(e).visible)
            return !1;
        }
        return !0;
      }
      return X(`Unknown optional content policy ${t.policy}.`), !0;
    }
    return X(`Unknown group type ${t.type}.`), !0;
  }
  setVisibility(t, e = !0, s = !0) {
    var r;
    const i = n(this, rt).get(t);
    if (!i) {
      X(`Optional content group not found: ${t}`);
      return;
    }
    if (s && e && i.rbGroups.length)
      for (const a of i.rbGroups)
        for (const o of a)
          o !== t && ((r = n(this, rt).get(o)) == null || r._setVisible(Qr, !1, !0));
    i._setVisible(Qr, !!e, !0), u(this, Ar, null);
  }
  setOCGState({
    state: t,
    preserveRB: e
  }) {
    let s;
    for (const i of t) {
      switch (i) {
        case "ON":
        case "OFF":
        case "Toggle":
          s = i;
          continue;
      }
      const r = n(this, rt).get(i);
      if (r)
        switch (s) {
          case "ON":
            this.setVisibility(i, !0, e);
            break;
          case "OFF":
            this.setVisibility(i, !1, e);
            break;
          case "Toggle":
            this.setVisibility(i, !r.visible, e);
            break;
        }
    }
    u(this, Ar, null);
  }
  get hasInitialVisibility() {
    return n(this, Ol) === null || this.getHash() === n(this, Ol);
  }
  getOrder() {
    return n(this, rt).size ? n(this, Nl) ? n(this, Nl).slice() : [...n(this, rt).keys()] : null;
  }
  getGroup(t) {
    return n(this, rt).get(t) || null;
  }
  getHash() {
    if (n(this, Ar) !== null)
      return n(this, Ar);
    const t = new Qp();
    for (const [e, s] of n(this, rt))
      t.update(`${e}:${s.visible}`);
    return u(this, Ar, t.hexdigest());
  }
  [Symbol.iterator]() {
    return n(this, rt).entries();
  }
  get serializable() {
    const t = /* @__PURE__ */ new Map();
    for (const [e, s] of n(this, rt))
      t.set(e, s.serializable);
    return {
      data: n(this, fd),
      renderingIntent: this.renderingIntent,
      groupState: t
    };
  }
  static fromSerializable({
    data: t,
    renderingIntent: e,
    groupState: s
  }) {
    return new Lm(t, e, s);
  }
};
Ar = new WeakMap(), rt = new WeakMap(), Ol = new WeakMap(), Nl = new WeakMap(), fd = new WeakMap(), pd = new WeakSet(), mg = function(t) {
  const e = t.length;
  if (e < 2)
    return !0;
  const s = t[0];
  for (let i = 1; i < e; i++) {
    const r = t[i];
    let a;
    if (Array.isArray(r))
      a = b(this, pd, mg).call(this, r);
    else if (n(this, rt).has(r))
      a = n(this, rt).get(r).visible;
    else
      return X(`Optional content group not found: ${r}`), !0;
    switch (s) {
      case "And":
        if (!a)
          return !1;
        break;
      case "Or":
        if (a)
          return !0;
        break;
      case "Not":
        return !a;
      default:
        return !0;
    }
  }
  return s === "And";
};
let gg = Lm;
var It, Is, Jt, Xa, _i, ye, Jh, Ou, bg, yg;
class Av {
  constructor() {
    g(this, ye);
    g(this, It, null);
    g(this, Is, null);
    g(this, Jt, 0);
    g(this, Xa, null);
    g(this, _i, null);
  }
  get pagesNumber() {
    return n(this, Jt);
  }
  set pagesNumber(t) {
    n(this, Jt) !== t && (u(this, Jt, t), u(this, It, null), u(this, Is, null));
  }
  movePages(t, e, s) {
    b(this, ye, Jh).call(this);
    const i = n(this, It), r = e.length, a = new Uint32Array(r);
    let o = 0;
    for (let f = 0; f < r; f++) {
      const m = e[f] - 1;
      a[f] = i[m], m < s && o++;
    }
    const l = n(this, Jt), h = l - r, c = new Int32Array(l), d = wt(s - o, 0, h);
    for (let f = 0, m = 0; f < l; f++)
      t.has(f + 1) || (i[m] = i[f], c[m++] = f + 1);
    i.copyWithin(d + r, d, h), i.set(a, d), c.copyWithin(d + r, d, h), c.set(e, d), u(this, Is, c), i.every((f, m) => f === m + 1) && u(this, It, null);
  }
  deletePages(t) {
    b(this, ye, Jh).call(this);
    const e = n(this, It), s = b(this, ye, Ou).call(this);
    u(this, _i, {
      pageNumberToId: e.slice(),
      pagesNumber: n(this, Jt),
      prevPageNumbers: n(this, Is).slice()
    });
    const i = n(this, Jt) - t.length;
    u(this, Jt, i);
    const r = u(this, It, new Uint32Array(i));
    u(this, Is, new Int32Array(i));
    let a = 0, o = 0;
    for (const l of t) {
      const h = l - 1;
      h !== a && (r.set(e.subarray(a, h), o), o += h - a), a = h + 1;
    }
    a < e.length && r.set(e.subarray(a), o), b(this, ye, bg).call(this, s, new Set(t));
  }
  cancelDelete() {
    n(this, _i) && (u(this, It, n(this, _i).pageNumberToId), u(this, Jt, n(this, _i).pagesNumber), u(this, Is, n(this, _i).prevPageNumbers), u(this, _i, null));
  }
  cleanSavedData() {
    u(this, _i, null);
  }
  copyPages(t) {
    b(this, ye, Jh).call(this), u(this, Xa, {
      pageNumbers: t,
      pageIds: t.map((e) => n(this, It)[e - 1])
    });
  }
  cancelCopy() {
    u(this, Xa, null);
  }
  pastePages(t) {
    b(this, ye, Jh).call(this);
    const e = n(this, It), s = b(this, ye, Ou).call(this), {
      pageNumbers: i,
      pageIds: r
    } = n(this, Xa), a = n(this, Jt) + i.length;
    u(this, Jt, a);
    const o = u(this, It, new Uint32Array(a));
    u(this, Is, new Int32Array(a)), o.set(e.subarray(0, t), 0), o.set(r, t), o.set(e.subarray(t), t + i.length), b(this, ye, bg).call(this, s, null, t, i), u(this, Xa, null);
  }
  hasBeenAltered() {
    return n(this, It) !== null;
  }
  getPageMappingForSaving(t = null, e = b(this, ye, yg).call(this)) {
    t ?? (t = b(this, ye, Ou).call(this));
    let s = 0;
    for (const r of t.values())
      s = Math.max(s, r.length);
    const i = new Array(s);
    for (let r = 0; r < s; r++)
      i[r] = {
        document: null,
        pageIndices: [],
        includePages: []
      };
    for (const [r, a] of t)
      for (let o = 0, l = a.length; o < l; o++)
        i[o].includePages.push([r - 1, a[o] - 1]);
    for (const {
      includePages: r,
      pageIndices: a
    } of i) {
      r.sort((o, l) => o[0] - l[0]);
      for (let o = 0, l = r.length; o < l; o++)
        a.push(r[o][1]), r[o] = r[o][0];
    }
    return {
      pageInfos: i,
      copyLevels: e
    };
  }
  extractPages(t) {
    t = Array.from(t).sort((s, i) => s - i);
    const e = /* @__PURE__ */ new Map();
    for (let s = 0, i = t.length; s < i; s++) {
      const r = this.getPageId(t[s]);
      e.getOrInsertComputed(r, Ho).push(s + 1);
    }
    return this.getPageMappingForSaving(e, b(this, ye, yg).call(this, t));
  }
  getPrevPageNumber(t) {
    var e;
    return ((e = n(this, Is)) == null ? void 0 : e[t - 1]) ?? 0;
  }
  getPageNumber(t) {
    if (!n(this, It))
      return t;
    const e = n(this, It);
    for (let s = 0, i = n(this, Jt); s < i; s++)
      if (e[s] === t)
        return s + 1;
    return 0;
  }
  getPageId(t) {
    var e;
    return ((e = n(this, It)) == null ? void 0 : e[t - 1]) ?? t;
  }
  getMapping() {
    var t;
    return (t = n(this, It)) == null ? void 0 : t.subarray(0, this.pagesNumber);
  }
}
It = new WeakMap(), Is = new WeakMap(), Jt = new WeakMap(), Xa = new WeakMap(), _i = new WeakMap(), ye = new WeakSet(), Jh = function() {
  if (n(this, It))
    return;
  const t = n(this, Jt), e = u(this, It, new Uint32Array(t));
  for (let s = 0; s < t; s++)
    e[s] = s + 1;
  u(this, Is, new Int32Array(e));
}, Ou = function() {
  const t = /* @__PURE__ */ new Map(), e = n(this, It);
  for (let s = 0, i = n(this, Jt); s < i; s++) {
    const r = e[s], a = t.get(r);
    a ? a.push(s + 1) : t.set(r, [s + 1]);
  }
  return t;
}, bg = function(t, e = null, s = -1, i = null) {
  const r = n(this, Is), a = n(this, It), o = s + ((i == null ? void 0 : i.length) ?? 0), l = /* @__PURE__ */ new Map();
  for (let h = 0, c = n(this, Jt); h < c; h++) {
    if (h >= s && h < o) {
      r[h] = -i[h - s];
      continue;
    }
    const d = a[h], f = t.get(d);
    let m = l.get(d) || 0;
    if (e && f)
      for (; m < f.length && e.has(f[m]); )
        m++;
    r[h] = f == null ? void 0 : f[m], l.set(d, m + 1);
  }
}, yg = function(t = null) {
  if (!n(this, It))
    return null;
  const e = new Int32Array(n(this, Jt)).fill(-1), s = /* @__PURE__ */ new Map();
  if (t)
    for (const i of t) {
      const r = this.getPageId(i), a = s.get(r) ?? 0;
      s.set(r, a + 1), e[i - 1] = a;
    }
  else
    for (let i = 0, r = n(this, Jt); i < r; i++) {
      const a = n(this, It)[i], o = s.get(a) ?? 0;
      s.set(a, o + 1), e[i] = o;
    }
  return e;
};
const jo = Symbol("INITIAL_DATA"), db = () => ({
  ...Promise.withResolvers(),
  data: jo
});
var Ls;
class Hy {
  constructor() {
    g(this, Ls, /* @__PURE__ */ new Map());
  }
  get(t, e = null) {
    if (e) {
      const i = n(this, Ls).getOrInsertComputed(t, db);
      return i.promise.then(() => e(i.data)), null;
    }
    const s = n(this, Ls).get(t);
    if (!s || s.data === jo)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return s.data;
  }
  has(t) {
    const e = n(this, Ls).get(t);
    return !!e && e.data !== jo;
  }
  delete(t) {
    const e = n(this, Ls).get(t);
    return !e || e.data === jo ? !1 : (n(this, Ls).delete(t), !0);
  }
  resolve(t, e = null) {
    const s = n(this, Ls).getOrInsertComputed(t, db);
    if (s.data !== jo)
      throw new Error(`Object already resolved ${t}.`);
    s.data = e, s.resolve();
  }
  clear() {
    var t;
    for (const {
      data: e
    } of n(this, Ls).values())
      (t = e == null ? void 0 : e.bitmap) == null || t.close();
    n(this, Ls).clear();
  }
  *[Symbol.iterator]() {
    for (const [t, {
      data: e
    }] of n(this, Ls))
      e !== jo && (yield [t, e]);
  }
}
Ls = new WeakMap();
const wv = 1e5, vv = 30;
var gb, wr, Me, gd, md, Bl, Ya, dn, bd, yd, Hl, Ka, Ad, Ul, qa, Gl, wd, $l, Qa, vd, Sd, zl, Ja, Ed, Vl, jl, Bn, Uy, Gy, Ag, Oe, Nu, $y, wg, zy, Vy;
const ie = class ie {
  constructor({
    textContentSource: t,
    images: e,
    container: s,
    viewport: i
  }) {
    g(this, Bn);
    g(this, wr, Promise.withResolvers());
    g(this, Me, null);
    g(this, gd, !1);
    g(this, md, !!((gb = globalThis.FontInspector) != null && gb.enabled));
    g(this, Bl, null);
    g(this, Ya, null);
    g(this, dn, null);
    g(this, bd, 0);
    g(this, yd, 0);
    g(this, Hl, bs.pixelRatio);
    g(this, Ka, null);
    g(this, Ad, null);
    g(this, Ul, 0);
    g(this, qa, 0);
    g(this, Gl, /* @__PURE__ */ Object.create(null));
    g(this, wd, []);
    g(this, $l, null);
    g(this, Qa, []);
    g(this, vd, /* @__PURE__ */ new WeakMap());
    g(this, Sd, null);
    var h;
    if (t instanceof ReadableStream)
      u(this, $l, t);
    else if (typeof t == "object")
      u(this, $l, new ReadableStream({
        start(c) {
          c.enqueue(t), c.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    u(this, Me, u(this, Ad, s)), u(this, Bl, e), u(this, qa, i.scale * n(this, Hl)), u(this, Ul, i.rotation), u(this, dn, {
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: r,
      pageHeight: a,
      pageX: o,
      pageY: l
    } = i.rawDims;
    u(this, Sd, [1, 0, 0, -1, -o, l + a]), u(this, yd, r), u(this, bd, a), b(h = ie, Oe, zy).call(h), s.style.setProperty("--min-font-size", n(ie, Vl)), jr(s, i), n(this, wr).promise.finally(() => {
      n(ie, jl).delete(this), u(this, dn, null), u(this, Gl, null);
    }).catch(() => {
    });
  }
  static get fontFamilyMap() {
    const {
      isWindows: t,
      isFirefox: e
    } = ot.platform;
    return R(this, "fontFamilyMap", /* @__PURE__ */ new Map([["sans-serif", `${t && e ? "Calibri, " : ""}sans-serif`], ["monospace", `${t && e ? "Lucida Console, " : ""}monospace`]]));
  }
  render() {
    n(this, Bl) && n(this, Me).append(n(this, Bl).render());
    const t = () => {
      n(this, Ka).read().then(({
        value: e,
        done: s
      }) => {
        if (s) {
          n(this, wr).resolve();
          return;
        }
        n(this, Ya) ?? u(this, Ya, e.lang), Object.assign(n(this, Gl), e.styles), b(this, Bn, Uy).call(this, e.items), t();
      }, n(this, wr).reject);
    };
    return u(this, Ka, n(this, $l).getReader()), n(ie, jl).add(this), t(), n(this, wr).promise;
  }
  update({
    viewport: t,
    onBefore: e = null
  }) {
    var r;
    const s = t.scale * bs.pixelRatio, i = t.rotation;
    if (i !== n(this, Ul) && (e == null || e(), u(this, Ul, i), jr(n(this, Ad), {
      rotation: i
    })), s !== n(this, qa)) {
      e == null || e(), u(this, qa, s), u(this, Hl, bs.pixelRatio);
      const a = {
        div: null,
        properties: null,
        ctx: b(r = ie, Oe, Nu).call(r, n(this, Ya))
      };
      for (const o of n(this, Qa))
        a.properties = n(this, vd).get(o), a.div = o, b(this, Bn, Ag).call(this, a);
    }
  }
  cancel() {
    var e;
    const t = new Rn("TextLayer task cancelled.");
    (e = n(this, Ka)) == null || e.cancel(t).catch(() => {
    }), u(this, Ka, null), n(this, wr).reject(t);
  }
  get textDivs() {
    return n(this, Qa);
  }
  get textContentItemsStr() {
    return n(this, wd);
  }
  static cleanup() {
    if (!(n(this, jl).size > 0)) {
      n(this, zl).clear();
      for (const {
        canvas: t
      } of n(this, Ja).values())
        t.remove();
      n(this, Ja).clear();
    }
  }
};
wr = new WeakMap(), Me = new WeakMap(), gd = new WeakMap(), md = new WeakMap(), Bl = new WeakMap(), Ya = new WeakMap(), dn = new WeakMap(), bd = new WeakMap(), yd = new WeakMap(), Hl = new WeakMap(), Ka = new WeakMap(), Ad = new WeakMap(), Ul = new WeakMap(), qa = new WeakMap(), Gl = new WeakMap(), wd = new WeakMap(), $l = new WeakMap(), Qa = new WeakMap(), vd = new WeakMap(), Sd = new WeakMap(), zl = new WeakMap(), Ja = new WeakMap(), Ed = new WeakMap(), Vl = new WeakMap(), jl = new WeakMap(), Bn = new WeakSet(), Uy = function(t) {
  var i, r;
  if (n(this, gd))
    return;
  (r = n(this, dn)).ctx ?? (r.ctx = b(i = ie, Oe, Nu).call(i, n(this, Ya)));
  const e = n(this, Qa), s = n(this, wd);
  for (const a of t) {
    if (e.length > wv) {
      X("Ignoring additional textDivs for performance reasons."), u(this, gd, !0);
      return;
    }
    if (a.str === void 0) {
      if (a.type === "beginMarkedContentProps" || a.type === "beginMarkedContent") {
        const o = n(this, Me);
        u(this, Me, document.createElement("span")), n(this, Me).classList.add("markedContent"), a.id && n(this, Me).setAttribute("id", a.id), a.tag === "Artifact" && (n(this, Me).ariaHidden = !0), o.append(n(this, Me));
      } else a.type === "endMarkedContent" && u(this, Me, n(this, Me).parentNode);
      continue;
    }
    s.push(a.str), b(this, Bn, Gy).call(this, a);
  }
}, Gy = function(t) {
  var A;
  const e = document.createElement("span"), s = {
    angle: 0,
    canvasWidth: 0,
    hasText: t.str !== "",
    hasEOL: t.hasEOL,
    fontSize: 0
  };
  n(this, Qa).push(e);
  const i = I.transform(n(this, Sd), t.transform);
  let r = Math.atan2(i[1], i[0]);
  const a = n(this, Gl)[t.fontName];
  a.vertical && (r += Math.PI / 2);
  let o = n(this, md) && a.fontSubstitution || a.fontFamily;
  o = ie.fontFamilyMap.get(o) || o;
  const l = Math.hypot(i[2], i[3]), h = l * b(A = ie, Oe, Vy).call(A, o, a, n(this, Ya));
  let c, d;
  r === 0 ? (c = i[4], d = i[5] - h) : (c = i[4] + h * Math.sin(r), d = i[5] - h * Math.cos(r));
  const f = e.style;
  f.left = `${(100 * c / n(this, yd)).toFixed(2)}%`, f.top = `${(100 * d / n(this, bd)).toFixed(2)}%`;
  const m = Math.round(l * 100) / 100;
  f.setProperty("--font-height", `${m}px`), f.fontFamily = o, s.fontSize = m, e.setAttribute("role", "presentation"), e.textContent = t.str, e.dir = t.dir, n(this, md) && (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName), r !== 0 && (s.angle = r * (180 / Math.PI));
  let y = !1;
  if (t.str.length > 1)
    y = !0;
  else if (t.str !== " " && t.transform[0] !== t.transform[3]) {
    const w = Math.abs(t.transform[0]), v = Math.abs(t.transform[3]);
    w !== v && Math.max(w, v) / Math.min(w, v) > 1.5 && (y = !0);
  }
  if (y && (s.canvasWidth = a.vertical ? t.height : t.width), n(this, vd).set(e, s), n(this, dn).div = e, n(this, dn).properties = s, b(this, Bn, Ag).call(this, n(this, dn)), s.hasText && n(this, Me).append(e), s.hasEOL) {
    const w = document.createElement("br");
    w.setAttribute("role", "presentation"), n(this, Me).append(w);
  }
}, Ag = function(t) {
  var l, h;
  const {
    div: e,
    properties: s,
    ctx: i
  } = t, {
    style: r
  } = e, {
    canvasWidth: a,
    fontSize: o
  } = s;
  if (a !== 0 && o !== 0 && s.hasText) {
    const {
      fontFamily: c
    } = r, d = n(this, Hl), f = b(l = ie, Oe, $y).call(l, o * n(this, qa) / d) * d;
    b(h = ie, Oe, wg).call(h, i, f, c);
    const {
      width: m
    } = i.measureText(e.textContent);
    m > 0 && r.setProperty("--scale-x", a * f / (m * o));
  }
  s.angle !== 0 && r.setProperty("--rotate", `${s.angle}deg`);
}, Oe = new WeakSet(), Nu = function(t = null) {
  let e = n(this, Ja).get(t || (t = ""));
  if (!e) {
    const s = document.createElement("canvas");
    s.style.cssText = "position:absolute;top:0;left:0;width:0;height:0;display:none;letter-spacing:normal;word-spacing:normal", s.lang = t, document.body.append(s), e = s.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), n(this, Ja).set(t, e), n(this, Ed).set(e, {
      size: 0,
      family: ""
    });
  }
  return e;
}, $y = function(t) {
  t = Math.fround(t);
  const e = Math.fround(t * ((1 << 17) + 1));
  return Math.fround(e - Math.fround(e - t));
}, wg = function(t, e, s) {
  const i = n(this, Ed).get(t);
  e === i.size && s === i.family || (t.font = `${e}px ${s}`, i.size = e, i.family = s);
}, zy = function() {
  if (n(this, Vl) !== null)
    return;
  const t = document.createElement("div");
  t.style.opacity = 0, t.style.lineHeight = 1, t.style.fontSize = "1px", t.style.position = "absolute", t.textContent = "X", document.body.append(t), u(this, Vl, t.getBoundingClientRect().height), t.remove();
}, Vy = function(t, e, s) {
  const i = n(this, zl).get(t);
  if (i)
    return i;
  const r = b(this, Oe, Nu).call(this, s);
  b(this, Oe, wg).call(this, r, vv, t);
  const a = r.measureText(""), o = a.fontBoundingBoxAscent, l = Math.abs(a.fontBoundingBoxDescent);
  let h = 0.8;
  return o ? h = o / (o + l) : (ot.platform.isFirefox && X("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."), e.ascent ? h = e.ascent : e.descent && (h = 1 + e.descent)), n(this, zl).set(t, h), h;
}, g(ie, Oe), g(ie, zl, /* @__PURE__ */ new Map()), g(ie, Ja, /* @__PURE__ */ new Map()), g(ie, Ed, /* @__PURE__ */ new WeakMap()), g(ie, Vl, null), g(ie, jl, /* @__PURE__ */ new Set());
let Mh = ie;
const Sv = 100;
function jy(p = {}) {
  const t = new vg(), {
    docId: e
  } = t, s = p.url ? Tw(p.url) : null, i = p.data ? kw(p.data) : null, r = p.httpHeaders || null, a = p.withCredentials === !0, o = p.password ?? null, l = p.range instanceof Sm ? p.range : null, h = Number.isInteger(p.rangeChunkSize) && p.rangeChunkSize > 0 ? p.rangeChunkSize : 2 ** 16;
  let c = p.worker instanceof Dh ? p.worker : null;
  const d = p.verbosity, f = typeof p.docBaseUrl == "string" && !fu(p.docBaseUrl) ? p.docBaseUrl : null, m = mu(p.cMapUrl), y = p.cMapPacked !== !1, A = mu(p.iccUrl), w = mu(p.standardFontDataUrl), v = mu(p.wasmUrl), S = p.stopAtErrors !== !0, E = Number.isInteger(p.maxImageSize) && p.maxImageSize > -1 ? p.maxImageSize : -1, C = typeof p.isOffscreenCanvasSupported == "boolean" ? p.isOffscreenCanvasSupported : !ps, x = typeof p.isImageDecoderSupported == "boolean" ? p.isImageDecoderSupported : !ps, _ = Number.isInteger(p.canvasMaxAreaInBytes) ? p.canvasMaxAreaInBytes : -1, k = typeof p.disableFontFace == "boolean" ? p.disableFontFace : ps, M = p.fontExtraProperties === !0, P = p.enableXfa === !0, D = p.ownerDocument || globalThis.document, N = p.disableRange === !0, Z = p.disableStream === !0, Q = p.disableAutoFetch === !0, Y = p.pdfBug === !0, K = p.CanvasFactory || (ps ? Fw : Dw), B = p.FilterFactory || (ps ? Rw : Iw), G = p.BinaryDataFactory || (ps ? Ow : tb), nt = p.enableHWA === !0, ee = p.enableWebGPU === !0 ? Uw() : Promise.resolve(!1), _e = p.useWasm !== !1, Rt = p.pagesMapper || new Av(), Ft = typeof p.useSystemFonts == "boolean" ? p.useSystemFonts : !ps && !k, Xr = typeof p.useWorkerFetch == "boolean" ? p.useWorkerFetch : !!(G === tb && m && y && w && v && oc(m, document.baseURI) && oc(w, document.baseURI) && oc(v, document.baseURI)), Be = null;
  JA(d);
  const qe = {
    canvasFactory: new K({
      ownerDocument: D,
      enableHWA: nt
    }),
    filterFactory: new B({
      docId: e,
      ownerDocument: D
    }),
    binaryDataFactory: Xr ? null : new G({
      cMapUrl: m,
      standardFontDataUrl: w,
      wasmUrl: v
    })
  };
  c || (c = Dh.create({
    verbosity: d,
    port: Bi.workerPort
  }), t._worker = c);
  const $t = {
    docId: e,
    apiVersion: "6.4.299",
    data: i,
    password: o,
    disableAutoFetch: Q,
    rangeChunkSize: h,
    docBaseUrl: f,
    enableXfa: P,
    evaluatorOptions: {
      maxImageSize: E,
      disableFontFace: k,
      ignoreErrors: S,
      isOffscreenCanvasSupported: C,
      isImageDecoderSupported: x,
      canvasMaxAreaInBytes: _,
      fontExtraProperties: M,
      useSystemFonts: Ft,
      useWasm: _e,
      useWorkerFetch: Xr,
      cMapUrl: m,
      cMapPacked: y,
      iccUrl: A,
      standardFontDataUrl: w,
      wasmUrl: v,
      hasGPU: !1
    }
  }, WA = {
    ownerDocument: D,
    pdfBug: Y,
    styleElement: Be,
    enableHWA: nt,
    loadingParams: {
      disableAutoFetch: Q,
      enableXfa: P
    }
  };
  return Promise.all([c.promise, ee]).then(function([, XA]) {
    if (c.destroyed)
      throw new Error("Worker was destroyed");
    $t.evaluatorOptions.hasGPU = XA;
    const YA = c.messageHandler.sendWithPromise("GetDocRequest", $t, i ? [i.buffer] : null);
    let pp;
    if (!i) if (l)
      pp = new av({
        pdfDataRangeTransport: l,
        disableRange: N,
        disableStream: Z
      });
    else if (s) {
      const gp = mv(s);
      pp = new gp({
        url: s,
        httpHeaders: r,
        withCredentials: a,
        rangeChunkSize: h,
        disableRange: N,
        disableStream: Z
      });
    } else
      throw new Error("getDocument - expected either `data`, `range`, or `url` parameter.");
    return YA.then((gp) => {
      if (c.destroyed)
        throw new Error("Worker was destroyed");
      const Om = new Wh(e, gp, c.port), KA = new Cv(Om, t, pp, WA, qe, Rt);
      if (t._transport = KA, t.destroyed)
        throw new Error("Loading aborted");
      Om.send("Ready", null);
    });
  }).catch(t._capability.reject).finally(t._setupCapability.resolve), t;
}
var Nf;
const Bf = class Bf {
  constructor() {
    T(this, "_capability", Promise.withResolvers());
    T(this, "_setupCapability", Promise.withResolvers());
    T(this, "_transport", null);
    T(this, "_worker", null);
    T(this, "docId", `d${yt(Bf, Nf)._++}`);
    T(this, "destroyed", !1);
    T(this, "onPassword", null);
    T(this, "onProgress", null);
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var t, e, s, i;
    this.destroyed = !0, this._capability.promise.catch(() => {
    });
    try {
      (t = this._worker) != null && t.port && (this._worker._pendingDestroy = !0), await this._setupCapability.promise, await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (r) {
      throw (s = this._worker) != null && s.port && delete this._worker._pendingDestroy, r;
    }
    this._transport = null, (i = this._worker) == null || i.destroy(), this._worker = null;
  }
  async getData() {
    return this._transport.getData();
  }
};
Nf = new WeakMap(), g(Bf, Nf, 0);
let vg = Bf;
var Wl, Za;
class Sm {
  constructor(t, e, s = !1, i = null) {
    g(this, Wl, Promise.withResolvers());
    g(this, Za, null);
    this.length = t, this.initialData = e, this.progressiveDone = s, this.contentDispositionFilename = i;
  }
  onDataRange(t, e) {
    n(this, Za).call(this, {
      type: "range",
      begin: t,
      chunk: e
    });
  }
  onDataProgressiveRead(t) {
    n(this, Wl).promise.then(() => {
      n(this, Za).call(this, {
        type: "progressiveRead",
        chunk: t
      });
    });
  }
  onDataProgressiveDone() {
    n(this, Wl).promise.then(() => {
      n(this, Za).call(this, {
        type: "progressiveDone"
      });
    });
  }
  transportReady(t) {
    u(this, Za, t), n(this, Wl).resolve();
  }
  requestDataRange(t, e) {
    st("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
Wl = new WeakMap(), Za = new WeakMap();
class Ev {
  constructor(t, e) {
    this._pdfInfo = t, this._transport = e;
  }
  get pagesMapper() {
    return this._transport.pagesMapper;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return R(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getAttachmentContent(t) {
    return this._transport.getAttachmentContent(t);
  }
  getAnnotationsByType(t, e) {
    return this._transport.getAnnotationsByType(t, e);
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument(t) {
    return this._transport.saveDocument(t);
  }
  extractPages(t, e = null) {
    return this._transport.extractPages(t, e);
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  getSignatures() {
    return this._transport.getSignatures();
  }
  getSignatureData(t) {
    return this._transport.getSignatureData(t);
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var un, to, Hf, eo, Zh;
const dc = class dc {
  constructor(t, e, s, i, r = !1) {
    g(this, eo);
    g(this, un, !1);
    g(this, to, null);
    this._pageIndex = t, this._id = yt(dc, Hf)._++, this._pageInfo = e, this._transport = s, this._stats = r ? new Um() : null, this._pdfBug = r, this.commonObjs = s.commonObjs, this.objs = new Hy(), this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1, this.recordedBBoxes = null, u(this, to, i), this.imageCoordinates = null;
  }
  clone(t) {
    const e = new dc(t, this._pageInfo, this._transport, n(this, to), this._pdfBug);
    return e.clonedFromIndex = this.clonedFromIndex ?? this._pageIndex, this._transport.updatePage(e), e;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  set pageNumber(t) {
    this._pageIndex = t - 1, this._transport.updatePage(this);
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: t,
    rotation: e = this.rotate,
    offsetX: s = 0,
    offsetY: i = 0,
    dontFlip: r = !1
  } = {}) {
    return new uu({
      viewBox: this.view,
      userUnit: this.userUnit,
      scale: t,
      rotation: e,
      offsetX: s,
      offsetY: i,
      dontFlip: r
    });
  }
  getAnnotations({
    intent: t = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return R(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var t;
    return ((t = this._transport._htmlForXfa) == null ? void 0 : t.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: t,
    canvas: e = t.canvas,
    viewport: s,
    intent: i = "display",
    annotationMode: r = Dn.ENABLE,
    transform: a = null,
    background: o = null,
    optionalContentConfigPromise: l = null,
    annotationCanvasMap: h = null,
    pageColors: c = null,
    printAnnotationStorage: d = null,
    isEditing: f = !1,
    recordImages: m = !1,
    recordOperations: y = !1,
    operationsFilter: A = null
  }) {
    var Q, Y, K;
    (Q = this._stats) == null || Q.time("Overall");
    const w = this._transport.getRenderingIntent(i, r, d, f), {
      renderingIntent: v,
      cacheKey: S
    } = w;
    u(this, un, !1), l || (l = this._transport.getOptionalContentConfig(v));
    const E = this._intentStates.getOrInsertComputed(S, uf);
    E.streamReaderCancelTimeout && (clearTimeout(E.streamReaderCancelTimeout), E.streamReaderCancelTimeout = null);
    const C = !!(v & fs.PRINT);
    E.displayReadyCapability || (E.displayReadyCapability = Promise.withResolvers(), E.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (Y = this._stats) == null || Y.time("Page Request"), this._pumpOperatorList(w));
    const x = !!(this._pdfBug && ((K = globalThis.StepperManager) != null && K.enabled)), _ = !!e && !this.recordedBBoxes && (y || x), k = !!e && !this.imageCoordinates && m, M = (B) => {
      var G, nt, he, ee;
      if (E.renderTasks.delete(N), _) {
        const _e = (G = N.gfx) == null ? void 0 : G.dependencyTracker.take();
        _e && ((nt = N.stepper) == null || nt.setOperatorBBoxes(_e, N.gfx.dependencyTracker.takeDebugMetadata()), y && (this.recordedBBoxes = _e));
      }
      k && !B && (this.imageCoordinates = (he = N.gfx) == null ? void 0 : he.imagesTracker.take()), C && u(this, un, !0), b(this, eo, Zh).call(this), B ? (N.capability.reject(B), this._abortOperatorList({
        intentState: E,
        reason: B instanceof Error ? B : new Error(B)
      })) : N.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (ee = globalThis.Stats) != null && ee.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    };
    let P = null, D = null;
    (_ || k) && (D = new mw(e, E.operatorList.length)), _ && (P = new bw(D, x));
    const N = new Eg({
      callback: M,
      params: {
        canvas: e,
        canvasContext: t,
        dependencyTracker: P ?? D,
        imagesTracker: k ? new tg(e) : null,
        viewport: s,
        transform: a,
        background: o
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: h,
      operatorList: E.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !C,
      pdfBug: this._pdfBug,
      pageColors: c,
      enableHWA: this._transport.enableHWA,
      operationsFilter: A
    });
    (E.renderTasks || (E.renderTasks = /* @__PURE__ */ new Set())).add(N);
    const Z = N.task;
    return Promise.all([E.displayReadyCapability.promise, l]).then(([B, G]) => {
      var nt;
      if (this.destroyed) {
        M();
        return;
      }
      if ((nt = this._stats) == null || nt.time("Rendering"), !(G.renderingIntent & v))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      N.initializeGraphics({
        transparency: B,
        optionalContentConfig: G
      }), N.operatorListChanged();
    }).catch(M), Z;
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = Dn.ENABLE,
    printAnnotationStorage: s = null,
    isEditing: i = !1
  } = {}) {
    var h;
    function r() {
      o.operatorList.lastChunk && (o.opListReadCapability.resolve(o.operatorList), o.renderTasks.delete(l));
    }
    const a = this._transport.getRenderingIntent(t, e, s, i, !0), o = this._intentStates.getOrInsertComputed(a.cacheKey, uf);
    let l;
    return o.opListReadCapability || (l = /* @__PURE__ */ Object.create(null), l.operatorListChanged = r, o.opListReadCapability = Promise.withResolvers(), (o.renderTasks || (o.renderTasks = /* @__PURE__ */ new Set())).add(l), o.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (h = this._stats) == null || h.time("Page Request"), this._pumpOperatorList(a)), o.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageId: n(this, to).getPageId(this._pageIndex + 1) - 1,
      pageIndex: this._pageIndex,
      includeMarkedContent: t === !0,
      disableNormalization: e === !0
    }, {
      highWaterMark: 100,
      size: (i) => i.items.length
    });
  }
  async getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((i) => pc.textContent(i));
    const e = this.streamTextContent(t), s = {
      items: [],
      styles: /* @__PURE__ */ Object.create(null),
      lang: null
    };
    for await (const i of e)
      s.lang ?? (s.lang = i.lang), Object.assign(s.styles, i.styles), s.items.push(...i.items);
    return s;
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const e of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !e.opListReadCapability)
        for (const s of e.renderTasks)
          t.push(s.completed), s.cancel();
    return this.objs.clear(), u(this, un, !1), Promise.all(t);
  }
  cleanup(t = !1) {
    u(this, un, !0);
    const e = b(this, eo, Zh).call(this);
    return t && e && this._stats && (this._stats = new Um()), e;
  }
  _startRenderPage(t, e) {
    var i, r;
    const s = this._intentStates.get(e);
    s && ((i = this._stats) == null || i.timeEnd("Page Request"), (r = s.displayReadyCapability) == null || r.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let s = 0, i = t.length; s < i; s++)
      e.operatorList.fnArray.push(t.fnArray[s]), e.operatorList.argsArray.push(t.argsArray[s]);
    e.operatorList.lastChunk = t.lastChunk, e.operatorList.separateAnnots = t.separateAnnots;
    for (const s of e.renderTasks)
      s.operatorListChanged();
    t.lastChunk && b(this, eo, Zh).call(this);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: s,
    modifiedIds: i
  }) {
    const {
      map: r,
      transfer: a
    } = s, l = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageId: n(this, to).getPageId(this._pageIndex + 1) - 1,
      pageIndex: this._pageIndex,
      pageProxyId: this._id,
      intent: t,
      cacheKey: e,
      annotationStorage: r,
      modifiedIds: i
    }, void 0, a).getReader(), h = this._intentStates.get(e);
    h.streamReader = l;
    const c = () => {
      l.read().then(({
        value: d,
        done: f
      }) => {
        if (f) {
          h.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(d, h), c());
      }, (d) => {
        if (h.streamReader = null, !this._transport.destroyed) {
          if (h.operatorList) {
            h.operatorList.lastChunk = !0;
            for (const f of h.renderTasks)
              f.operatorListChanged();
            b(this, eo, Zh).call(this);
          }
          if (h.displayReadyCapability)
            h.displayReadyCapability.reject(d);
          else if (h.opListReadCapability)
            h.opListReadCapability.reject(d);
          else
            throw d;
        }
      });
    };
    c();
  }
  _abortOperatorList({
    intentState: t,
    reason: e,
    force: s = !1
  }) {
    if (t.streamReader) {
      if (t.streamReaderCancelTimeout && (clearTimeout(t.streamReaderCancelTimeout), t.streamReaderCancelTimeout = null), !s) {
        if (t.renderTasks.size > 0)
          return;
        if (e instanceof ip) {
          let i = Sv;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), t.streamReaderCancelTimeout = setTimeout(() => {
            t.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: t,
              reason: e,
              force: !0
            });
          }, i);
          return;
        }
      }
      if (t.streamReader.cancel(new Rn(e.message)).catch(() => {
      }), t.streamReader = null, !this._transport.destroyed) {
        for (const [i, r] of this._intentStates)
          if (r === t) {
            this._intentStates.delete(i);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
};
un = new WeakMap(), to = new WeakMap(), Hf = new WeakMap(), eo = new WeakSet(), Zh = function() {
  if (!n(this, un) || this.destroyed)
    return !1;
  for (const {
    renderTasks: t,
    operatorList: e
  } of this._intentStates.values())
    if (t.size > 0 || !e.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), u(this, un, !1), !0;
}, g(dc, Hf, 0);
let Sg = dc;
var vr, qs, fn, so, Uf, io, no, Ke, Bu, Wy, Xy, Hu, Xl, Uu;
const Ot = class Ot {
  constructor({
    name: t = null,
    port: e = null,
    verbosity: s = ZA()
  } = {}) {
    g(this, Ke);
    g(this, vr, Promise.withResolvers());
    g(this, qs, null);
    g(this, fn, null);
    g(this, so, null);
    if (this.name = t, this.destroyed = !1, this.verbosity = s, e) {
      if (n(Ot, no).has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      n(Ot, no).set(e, this), b(this, Ke, Wy).call(this, e);
    } else
      b(this, Ke, Xy).call(this);
  }
  get promise() {
    return n(this, vr).promise;
  }
  get port() {
    return n(this, fn);
  }
  get messageHandler() {
    return n(this, qs);
  }
  destroy() {
    var t, e;
    this.destroyed = !0, (t = n(this, so)) == null || t.terminate(), u(this, so, null), n(Ot, no).delete(n(this, fn)), u(this, fn, null), (e = n(this, qs)) == null || e.destroy(), u(this, qs, null);
  }
  static create(t) {
    const e = n(this, no).get(t == null ? void 0 : t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new Ot(t);
  }
  static get workerSrc() {
    if (Bi.workerSrc)
      return Bi.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return R(this, "_setupFakeWorkerGlobal", (async () => n(this, Xl, Uu) ? n(this, Xl, Uu) : (await import(
      /*webpackIgnore: true*/
      /*@vite-ignore*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
vr = new WeakMap(), qs = new WeakMap(), fn = new WeakMap(), so = new WeakMap(), Uf = new WeakMap(), io = new WeakMap(), no = new WeakMap(), Ke = new WeakSet(), Bu = function() {
  n(this, vr).resolve(), n(this, qs).send("configure", {
    verbosity: this.verbosity
  });
}, Wy = function(t) {
  u(this, fn, t), u(this, qs, new Wh("main", "worker", t)), n(this, qs).on("ready", () => {
  }), b(this, Ke, Bu).call(this);
}, Xy = function() {
  if (n(Ot, io) || n(Ot, Xl, Uu)) {
    b(this, Ke, Hu).call(this);
    return;
  }
  let {
    workerSrc: t
  } = Ot;
  try {
    Ot._isSameOrigin(window.location, t) || (t = Ot._createCDNWrapper(new URL(t, window.location).href));
    const e = new Worker(t, {
      type: "module"
    }), s = new Wh("main", "worker", e), i = () => {
      r.abort(), s.destroy(), e.terminate(), this.destroyed ? n(this, vr).reject(new Error("Worker was destroyed")) : b(this, Ke, Hu).call(this);
    }, r = new AbortController();
    e.addEventListener("error", () => {
      n(this, so) || i();
    }, {
      signal: r.signal
    }), s.on("ready", (a) => {
      if (r.abort(), this.destroyed || !(a instanceof Uint8Array)) {
        i();
        return;
      }
      u(this, qs, s), u(this, fn, e), u(this, so, e), b(this, Ke, Bu).call(this);
    });
  } catch {
    Jf("The worker has been disabled."), b(this, Ke, Hu).call(this);
  }
}, Hu = function() {
  n(Ot, io) || (X("Setting up fake worker."), u(Ot, io, !0)), Ot._setupFakeWorkerGlobal.then((t) => {
    if (this.destroyed) {
      n(this, vr).reject(new Error("Worker was destroyed"));
      return;
    }
    const e = new Mw();
    u(this, fn, e);
    const s = `fake${yt(Ot, Uf)._++}`, i = new Wh(s + "_worker", s, e);
    t.setup(i, e), u(this, qs, new Wh(s, s + "_worker", e)), b(this, Ke, Bu).call(this);
  }).catch((t) => {
    n(this, vr).reject(new Error(`Setting up fake worker failed: "${t.message}".`));
  });
}, Xl = new WeakSet(), Uu = function() {
  var t;
  try {
    return ((t = globalThis.pdfjsWorker) == null ? void 0 : t.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, g(Ot, Xl), g(Ot, Uf, 0), g(Ot, io, !1), g(Ot, no, /* @__PURE__ */ new WeakMap()), ps && (u(Ot, io, !0), Bi.workerSrc || (Bi.workerSrc = "./pdf.worker.mjs")), Ot._isSameOrigin = (t, e) => {
  const s = URL.parse(t);
  if (!(s != null && s.origin) || s.origin === "null")
    return !1;
  const i = new URL(e, s);
  return s.origin === i.origin;
}, Ot._createCDNWrapper = (t) => {
  const e = `await import("${t}");`;
  return URL.createObjectURL(new Blob([e], {
    type: "text/javascript"
  }));
};
let Dh = Ot;
var ss, ro, pn, Qs, ao, Yl, gn, Cd, Bs, Wo, Gu;
class Cv {
  constructor(t, e, s, i, r, a) {
    g(this, Bs);
    T(this, "downloadInfoCapability", Promise.withResolvers());
    g(this, ss, null);
    g(this, ro, /* @__PURE__ */ new Map());
    g(this, pn, null);
    g(this, Qs, /* @__PURE__ */ new Map());
    g(this, ao, /* @__PURE__ */ new Map());
    g(this, Yl, /* @__PURE__ */ new Map());
    g(this, gn, null);
    g(this, Cd, null);
    this.messageHandler = t, this.loadingTask = e, u(this, pn, s), this.commonObjs = new Hy(), this.fontLoader = new Aw({
      ownerDocument: i.ownerDocument,
      styleElement: i.styleElement
    }), this.enableHWA = i.enableHWA, this.loadingParams = i.loadingParams, this._params = i, this.canvasFactory = r.canvasFactory, this.filterFactory = r.filterFactory, this.binaryDataFactory = r.binaryDataFactory, this.pagesMapper = a, this.destroyed = !1, this.destroyCapability = null, this.setupMessageHandler();
  }
  updatePage(t) {
    n(this, Qs).set(t._id, t), n(this, ao).set(t._pageIndex, Promise.resolve(t));
  }
  get annotationStorage() {
    return R(this, "annotationStorage", new wm());
  }
  getRenderingIntent(t, e = Dn.ENABLE, s = null, i = !1, r = !1) {
    let a = fs.DISPLAY, o = mc;
    switch (t) {
      case "any":
        a = fs.ANY;
        break;
      case "display":
        break;
      case "print":
        a = fs.PRINT;
        break;
      default:
        X(`getRenderingIntent - invalid intent: ${t}`);
    }
    const l = a & fs.PRINT && s instanceof ry ? s : this.annotationStorage;
    switch (e) {
      case Dn.DISABLE:
        a += fs.ANNOTATIONS_DISABLE;
        break;
      case Dn.ENABLE:
        break;
      case Dn.ENABLE_FORMS:
        a += fs.ANNOTATIONS_FORMS;
        break;
      case Dn.ENABLE_STORAGE:
        a += fs.ANNOTATIONS_STORAGE, o = l.serializable;
        break;
      default:
        X(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    i && (a += fs.IS_EDITING), r && (a += fs.OPLIST);
    const {
      ids: h,
      hash: c
    } = l.modifiedIds, d = [a, o.hash, c];
    return {
      renderingIntent: a,
      cacheKey: d.join("_"),
      annotationStorageSerializable: o,
      modifiedIds: h
    };
  }
  destroy() {
    var s;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (s = n(this, gn)) == null || s.reject(new Error("Worker was destroyed during onPassword callback"));
    const t = [];
    for (const i of n(this, Qs).values())
      t.push(i._destroy());
    n(this, Qs).clear(), n(this, ao).clear(), n(this, Yl).clear(), Object.hasOwn(this, "annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return t.push(e), Promise.all(t).then(() => {
      var i, r;
      this.commonObjs.clear(), this.fontLoader.clear(), n(this, ro).clear(), this.filterFactory.destroy(), Mh.cleanup(), (i = n(this, pn)) == null || i.cancelAllRequests(new Rn("Worker was terminated.")), (r = this.messageHandler) == null || r.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: t,
      loadingTask: e
    } = this;
    t.on("GetReader", (s, i) => {
      Gt(n(this, pn), "GetReader - no `BasePDFStream` instance available."), u(this, ss, n(this, pn).getFullReader()), n(this, ss).onProgress = (r) => b(this, Bs, Gu).call(this, r), i.onPull = () => {
        n(this, ss).read().then(function({
          value: r,
          done: a
        }) {
          if (a) {
            i.close();
            return;
          }
          Gt(r instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(r), 1, [r]);
        }).catch((r) => {
          i.error(r);
        });
      }, i.onCancel = (r) => {
        n(this, ss).cancel(r), i.ready.catch((a) => {
          if (!this.destroyed)
            throw a;
        });
      };
    }), t.on("ReaderHeadersReady", async (s) => {
      await n(this, ss).headersReady;
      const {
        isStreamingSupported: i,
        isRangeSupported: r,
        contentLength: a
      } = n(this, ss);
      return i && r && (n(this, ss).onProgress = null), {
        isStreamingSupported: i,
        isRangeSupported: r,
        contentLength: a
      };
    }), t.on("GetRangeReader", (s, i) => {
      Gt(n(this, pn), "GetRangeReader - no `BasePDFStream` instance available.");
      const r = n(this, pn).getRangeReader(s.begin, s.end);
      if (!r) {
        i.close();
        return;
      }
      i.onPull = () => {
        r.read().then(function({
          value: a,
          done: o
        }) {
          if (o) {
            i.close();
            return;
          }
          Gt(a instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), i.enqueue(new Uint8Array(a), 1, [a]);
        }).catch((a) => {
          i.error(a);
        });
      }, i.onCancel = (a) => {
        r.cancel(a), i.ready.catch((o) => {
          if (!this.destroyed)
            throw o;
        });
      };
    }), t.on("GetDoc", ({
      pdfInfo: s
    }) => {
      this.pagesMapper.pagesNumber = s.numPages, this._numPages = s.numPages, this._htmlForXfa = s.htmlForXfa, delete s.htmlForXfa, e._capability.resolve(new Ev(s, this));
    }), t.on("DocException", (s) => {
      e._capability.reject(Ue(s));
    }), t.on("PasswordRequest", (s) => {
      u(this, gn, Promise.withResolvers());
      try {
        if (!e.onPassword)
          throw Ue(s);
        const i = (r) => {
          r instanceof Error ? n(this, gn).reject(r) : n(this, gn).resolve({
            password: r
          });
        };
        e.onPassword(i, s.code);
      } catch (i) {
        n(this, gn).reject(i);
      }
      return n(this, gn).promise;
    }), t.on("DataLoaded", (s) => {
      b(this, Bs, Gu).call(this, {
        loaded: s.length,
        total: s.length
      }), this.downloadInfoCapability.resolve(s);
    }), t.on("StartRenderPage", (s) => {
      if (this.destroyed)
        return;
      n(this, Qs).get(s.pageProxyId)._startRenderPage(s.transparency, s.cacheKey);
    }), t.on("commonobj", ([s, i, r]) => {
      var a;
      if (this.destroyed || this.commonObjs.has(s))
        return null;
      switch (i) {
        case "Font":
          if ("error" in r) {
            const f = r.error;
            X(`Error during font loading: ${f}`), this.commonObjs.resolve(s, f);
            break;
          }
          const o = new Cw(r.buffer), l = this._params.pdfBug && ((a = globalThis.FontInspector) != null && a.enabled) ? (f, m) => globalThis.FontInspector.fontAdded(f, m) : null, h = new ww(o, l, r.charProcOperatorList, r.extra);
          this.fontLoader.bind(h).catch(() => t.sendWithPromise("FontFallback", {
            id: s
          })).finally(() => {
            h.fontExtraProperties || h.clearData(), this.commonObjs.resolve(s, h);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: c
          } = r;
          Gt(c, "The imageRef must be defined.");
          for (const f of n(this, Qs).values())
            for (const [, m] of f.objs) {
              if ((m == null ? void 0 : m.ref) !== c)
                continue;
              if (!m.dataLen)
                return null;
              const y = structuredClone(m);
              return this.commonObjs.resolve(s, y), m.dataLen;
            }
          break;
        case "FontPath":
          this.commonObjs.resolve(s, new _w(r));
          break;
        case "Image":
          this.commonObjs.resolve(s, r);
          break;
        case "Pattern":
          const d = new xw(r);
          this.commonObjs.resolve(s, d.getIR());
          break;
        default:
          throw new Error(`Got unknown common object type ${i}`);
      }
      return null;
    }), t.on("obj", ([s, i, r, a]) => {
      var l;
      if (this.destroyed)
        return;
      const o = n(this, Qs).get(i);
      if (!o.objs.has(s)) {
        if (o._intentStates.size === 0) {
          (l = a == null ? void 0 : a.bitmap) == null || l.close();
          return;
        }
        switch (r) {
          case "Image":
          case "Pattern":
            o.objs.resolve(s, a);
            break;
          default:
            throw new Error(`Got unknown object type ${r}`);
        }
      }
    }), t.on("DocProgress", (s) => {
      this.destroyed || b(this, Bs, Gu).call(this, s);
    }), t.on("FetchBinaryData", async (s) => {
      if (this.destroyed)
        throw new Error("Worker was destroyed.");
      if (!this.binaryDataFactory)
        throw new Error("`BinaryDataFactory` not initialized, see the `useWorkerFetch` parameter.");
      return this.binaryDataFactory.fetch(s);
    });
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument(t = null) {
    var i;
    this.annotationStorage.size <= 0 && X("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: e,
      transfer: s
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: e,
      supportsPrintToPDF: n(this, Cd) !== null,
      filename: ((i = n(this, ss)) == null ? void 0 : i.filename) ?? null
    }, s).finally(() => {
      u(this, Cd, null), this.annotationStorage.resetModified();
    });
  }
  extractPages(t, e = null) {
    var a;
    const s = {
      pageInfos: t
    };
    let i;
    const r = globalThis.ImageBitmap;
    if (typeof r == "function") {
      const o = Array.isArray(t) ? t : [t];
      for (const l of o)
        (l == null ? void 0 : l.image) instanceof r && (i || (i = [])).push(l.image);
    }
    if (this.annotationStorage.size > 0) {
      const o = this.annotationStorage.serializable;
      let {
        map: l
      } = o;
      (a = o.transfer) != null && a.length && (i ? i.push(...o.transfer) : i = o.transfer);
      const h = this.pagesMapper.getMapping();
      if (h) {
        const c = /* @__PURE__ */ new Map();
        for (const [d, f] of l) {
          if ((f == null ? void 0 : f.pageIndex) !== void 0 && f.pageIndex >= 0 && f.pageIndex < h.length) {
            const m = (e == null ? void 0 : e[f.pageIndex]) ?? 0, y = h[f.pageIndex] - 1;
            if (y !== f.pageIndex || m !== 0) {
              c.set(d, {
                ...f,
                pageIndex: y,
                copyLevel: m
              });
              continue;
            }
          }
          c.set(d, f);
        }
        l = c;
      }
      s.annotationStorage = l;
    }
    return this.messageHandler.sendWithPromise("ExtractPages", s, i).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this.pagesMapper.pagesNumber)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1, s = this.pagesMapper.getPageId(t) - 1, i = n(this, ao).get(e);
    if (i)
      return i;
    const r = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: s
    }).then((a) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      a.refStr && n(this, Yl).set(a.refStr, s);
      const o = new Sg(e, a, this, this.pagesMapper, this._params.pdfBug);
      return n(this, Qs).set(o._id, o), o;
    });
    return n(this, ao).set(e, r), r;
  }
  async getPageIndex(t) {
    if (!ig(t))
      throw new Error("Invalid pageIndex request.");
    const e = await this.messageHandler.sendWithPromise("GetPageIndex", {
      num: t.num,
      gen: t.gen
    }), s = this.pagesMapper.getPageNumber(e + 1);
    if (s === 0)
      throw new Error("GetPageIndex: page has been removed.");
    return s - 1;
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: this.pagesMapper.getPageId(t + 1) - 1,
      intent: e
    });
  }
  getFieldObjects() {
    return b(this, Bs, Wo).call(this, "GetFieldObjects");
  }
  getSignatures() {
    return b(this, Bs, Wo).call(this, "GetSignatures");
  }
  getSignatureData(t) {
    return this.messageHandler.sendWithPromise("GetSignatureData", t);
  }
  hasJSActions() {
    return b(this, Bs, Wo).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return typeof t != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: t
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getAttachmentContent(t) {
    return this.messageHandler.sendWithPromise("GetAttachmentContent", t);
  }
  getAnnotationsByType(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotationsByType", {
      types: t,
      pageIndexesToSkip: e
    });
  }
  getDocJSActions() {
    return b(this, Bs, Wo).call(this, "GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: this.pagesMapper.getPageId(t + 1) - 1
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: this.pagesMapper.getPageId(t + 1) - 1
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return b(this, Bs, Wo).call(this, "GetOptionalContentConfig").then((e) => new gg(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata";
    return n(this, ro).getOrInsertComputed(t, () => this.messageHandler.sendWithPromise(t, null).then((e) => {
      var s, i;
      return {
        info: e[0],
        metadata: e[1] ? new bv(e[1]) : null,
        contentDispositionFilename: ((s = n(this, ss)) == null ? void 0 : s.filename) ?? null,
        contentLength: ((i = n(this, ss)) == null ? void 0 : i.contentLength) ?? null,
        hasStructTree: e[2]
      };
    }));
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of n(this, Qs).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), t || this.fontLoader.clear(), n(this, ro).clear(), this.filterFactory.destroy(!0), Mh.cleanup();
    }
  }
  cachedPageNumber(t) {
    if (!ig(t))
      return null;
    const e = t.gen === 0 ? `${t.num}R` : `${t.num}R${t.gen}`, s = n(this, Yl).get(e);
    if (s >= 0) {
      const i = this.pagesMapper.getPageNumber(s + 1);
      if (i !== 0)
        return i;
    }
    return null;
  }
}
ss = new WeakMap(), ro = new WeakMap(), pn = new WeakMap(), Qs = new WeakMap(), ao = new WeakMap(), Yl = new WeakMap(), gn = new WeakMap(), Cd = new WeakMap(), Bs = new WeakSet(), Wo = function(t, e = null) {
  return n(this, ro).getOrInsertComputed(t, () => this.messageHandler.sendWithPromise(t, e));
}, Gu = function({
  loaded: t,
  total: e
}) {
  var s, i;
  (i = (s = this.loadingTask).onProgress) == null || i.call(s, {
    loaded: t,
    total: e,
    percent: e ? wt(Math.round(t / e * 100), 0, 100) : NaN
  });
};
class xv {
  constructor(t) {
    T(this, "_internalRenderTask", null);
    T(this, "onContinue", null);
    T(this, "onError", null);
    this._internalRenderTask = t;
  }
  get promise() {
    return this._internalRenderTask.capability.promise;
  }
  cancel(t = 0) {
    this._internalRenderTask.cancel(null, t);
  }
  get separateAnnots() {
    const {
      separateAnnots: t
    } = this._internalRenderTask.operatorList;
    if (!t)
      return !1;
    const {
      annotationCanvasMap: e
    } = this._internalRenderTask;
    return t.form || t.canvas && (e == null ? void 0 : e.size) > 0;
  }
  get imageCoordinates() {
    return this._internalRenderTask.imageCoordinates || null;
  }
}
var Sr, oo;
const sa = class sa {
  constructor({
    callback: t,
    params: e,
    objs: s,
    commonObjs: i,
    annotationCanvasMap: r,
    operatorList: a,
    pageIndex: o,
    canvasFactory: l,
    filterFactory: h,
    useRequestAnimationFrame: c = !1,
    pdfBug: d = !1,
    pageColors: f = null,
    enableHWA: m = !1,
    operationsFilter: y = null
  }) {
    g(this, Sr, null);
    this.callback = t, this.params = e, this.objs = s, this.commonObjs = i, this.annotationCanvasMap = r, this.operatorListIdx = null, this.operatorList = a, this._pageIndex = o, this.canvasFactory = l, this.filterFactory = h, this._pdfBug = d, this.pageColors = f, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = c === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new xv(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvas, this._canvasContext = e.canvas ? null : e.canvasContext, this._enableHWA = m, this._dependencyTracker = e.dependencyTracker, this._imagesTracker = e.imagesTracker, this._operationsFilter = y;
  }
  get completed() {
    return this.capability.promise.catch(() => {
    });
  }
  initializeGraphics({
    transparency: t = !1,
    optionalContentConfig: e
  }) {
    var h, c;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (n(sa, oo).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      n(sa, oo).add(this._canvas);
    }
    this._pdfBug && ((h = globalThis.StepperManager) != null && h.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      viewport: s,
      transform: i,
      background: r,
      dependencyTracker: a,
      imagesTracker: o
    } = this.params, l = this._canvasContext || this._canvas.getContext("2d", {
      alpha: !1,
      willReadFrequently: !this._enableHWA
    });
    this.gfx = new Qo(l, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors, a, o), this.gfx.beginDrawing({
      transform: i,
      viewport: s,
      transparency: t,
      background: r
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (c = this.graphicsReadyCallback) == null || c.call(this);
  }
  cancel(t = null, e = 0) {
    var s, i, r;
    this.running = !1, this.cancelled = !0, (s = this.gfx) == null || s.endDrawing(), n(this, Sr) && (window.cancelAnimationFrame(n(this, Sr)), u(this, Sr, null)), n(sa, oo).delete(this._canvas), t || (t = new ip(`Rendering cancelled, page ${this._pageIndex + 1}`, e)), this.callback(t), (r = (i = this.task).onError) == null || r.call(i, t);
  }
  operatorListChanged() {
    var t, e;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (t = this.gfx.dependencyTracker) == null || t.growOperationsCount(this.operatorList.fnArray.length), (e = this.stepper) == null || e.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? u(this, Sr, window.requestAnimationFrame(() => {
      u(this, Sr, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), n(sa, oo).delete(this._canvas), this.callback())));
  }
};
Sr = new WeakMap(), oo = new WeakMap(), g(sa, oo, /* @__PURE__ */ new WeakSet());
let Eg = sa;
const Yy = "6.4.299", Ky = "d0991a0d5";
var is, lo, Kl, Zt, xd, ql, mn, _d, Er, Js, Td, pt, Cg, xg, _g, Jr, qy, Hn;
const $e = class $e {
  constructor({
    editor: t = null,
    uiManager: e = null
  }) {
    g(this, pt);
    g(this, is, null);
    g(this, lo, null);
    g(this, Kl);
    g(this, Zt, null);
    g(this, xd, !1);
    g(this, ql, !1);
    g(this, mn, null);
    g(this, _d);
    g(this, Er, null);
    g(this, Js, null);
    var s, i;
    t ? (u(this, ql, !1), u(this, mn, t)) : u(this, ql, !0), u(this, Js, (t == null ? void 0 : t._uiManager) || e), u(this, _d, n(this, Js)._eventBus), u(this, Kl, ((s = t == null ? void 0 : t.color) == null ? void 0 : s.toUpperCase()) || ((i = n(this, Js)) == null ? void 0 : i.highlightColors.values().next().value) || "#FFFF98"), n($e, Td) || u($e, Td, Object.freeze({
      blue: "pdfjs-editor-colorpicker-blue",
      green: "pdfjs-editor-colorpicker-green",
      pink: "pdfjs-editor-colorpicker-pink",
      red: "pdfjs-editor-colorpicker-red",
      yellow: "pdfjs-editor-colorpicker-yellow"
    }));
  }
  static get _keyboardManager() {
    return R(this, "_keyboardManager", new Fo([[["Escape"], $e.prototype._hideDropdownFromKeyboard], [["Space"], $e.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight"], $e.prototype._moveToNext], [["ArrowUp", "ArrowLeft"], $e.prototype._moveToPrevious], [["Home"], $e.prototype._moveToBeginning], [["End"], $e.prototype._moveToEnd]]));
  }
  renderButton() {
    const t = u(this, is, document.createElement("button"));
    t.className = "colorPicker", t.tabIndex = "0", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t.ariaHasPopup = "true", n(this, mn) && (t.ariaControls = `${n(this, mn).id}_colorpicker_dropdown`);
    const e = n(this, Js)._signal;
    t.addEventListener("click", b(this, pt, Jr).bind(this), {
      signal: e
    }), t.addEventListener("keydown", b(this, pt, _g).bind(this), {
      signal: e
    });
    const s = u(this, lo, document.createElement("span"));
    return s.className = "swatch", s.ariaHidden = "true", s.style.backgroundColor = n(this, Kl), t.append(s), t;
  }
  renderMainDropdown() {
    const t = u(this, Zt, b(this, pt, Cg).call(this));
    return t.ariaOrientation = "horizontal", t.ariaLabelledBy = "highlightColorPickerLabel", t;
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === n(this, is)) {
      b(this, pt, Jr).call(this, t);
      return;
    }
    const e = t.target.getAttribute("data-color");
    e && b(this, pt, xg).call(this, e, t);
  }
  _moveToNext(t) {
    var e, s;
    if (!n(this, pt, Hn)) {
      b(this, pt, Jr).call(this, t);
      return;
    }
    if (t.target === n(this, is)) {
      (e = n(this, Zt).firstElementChild) == null || e.focus();
      return;
    }
    (s = t.target.nextSibling) == null || s.focus();
  }
  _moveToPrevious(t) {
    var e, s;
    if (t.target === ((e = n(this, Zt)) == null ? void 0 : e.firstElementChild) || t.target === n(this, is)) {
      n(this, pt, Hn) && this._hideDropdownFromKeyboard();
      return;
    }
    n(this, pt, Hn) || b(this, pt, Jr).call(this, t), (s = t.target.previousSibling) == null || s.focus();
  }
  _moveToBeginning(t) {
    var e;
    if (!n(this, pt, Hn)) {
      b(this, pt, Jr).call(this, t);
      return;
    }
    (e = n(this, Zt).firstElementChild) == null || e.focus();
  }
  _moveToEnd(t) {
    var e;
    if (!n(this, pt, Hn)) {
      b(this, pt, Jr).call(this, t);
      return;
    }
    (e = n(this, Zt).lastElementChild) == null || e.focus();
  }
  hideDropdown() {
    var t, e;
    (t = n(this, Zt)) == null || t.classList.add("hidden"), n(this, is).ariaExpanded = "false", (e = n(this, Er)) == null || e.abort(), u(this, Er, null);
  }
  _hideDropdownFromKeyboard() {
    var t;
    if (!n(this, ql)) {
      if (!n(this, pt, Hn)) {
        (t = n(this, mn)) == null || t.unselect();
        return;
      }
      this.hideDropdown(), n(this, is).focus({
        preventScroll: !0,
        focusVisible: n(this, xd)
      });
    }
  }
  update(t) {
    if (n(this, lo) && (n(this, lo).style.backgroundColor = t), !n(this, Zt))
      return;
    const e = n(this, Js).highlightColors.values();
    for (const s of n(this, Zt).children)
      s.ariaSelected = e.next().value === t.toUpperCase();
  }
  destroy() {
    var t, e;
    (t = n(this, is)) == null || t.remove(), u(this, is, null), u(this, lo, null), (e = n(this, Zt)) == null || e.remove(), u(this, Zt, null);
  }
};
is = new WeakMap(), lo = new WeakMap(), Kl = new WeakMap(), Zt = new WeakMap(), xd = new WeakMap(), ql = new WeakMap(), mn = new WeakMap(), _d = new WeakMap(), Er = new WeakMap(), Js = new WeakMap(), Td = new WeakMap(), pt = new WeakSet(), Cg = function() {
  const t = document.createElement("div"), e = n(this, Js)._signal;
  t.addEventListener("contextmenu", Us, {
    signal: e
  }), t.className = "dropdown", t.role = "listbox", t.ariaMultiSelectable = "false", t.ariaOrientation = "vertical", t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"), n(this, mn) && (t.id = `${n(this, mn).id}_colorpicker_dropdown`);
  for (const [s, i] of n(this, Js).highlightColors) {
    const r = document.createElement("button");
    r.tabIndex = "0", r.role = "option", r.setAttribute("data-color", i), r.title = s, r.setAttribute("data-l10n-id", n($e, Td)[s]);
    const a = document.createElement("span");
    r.append(a), a.className = "swatch", a.style.backgroundColor = i, r.ariaSelected = i === n(this, Kl), r.addEventListener("click", b(this, pt, xg).bind(this, i), {
      signal: e
    }), t.append(r);
  }
  return t.addEventListener("keydown", b(this, pt, _g).bind(this), {
    signal: e
  }), t;
}, xg = function(t, e) {
  e.stopPropagation(), n(this, _d).dispatch("switchannotationeditorparams", {
    source: this,
    type: et.HIGHLIGHT_COLOR,
    value: t
  }), this.update(t);
}, _g = function(t) {
  $e._keyboardManager.exec(this, t);
}, Jr = function(t) {
  if (n(this, pt, Hn)) {
    this.hideDropdown();
    return;
  }
  if (u(this, xd, t.detail === 0), n(this, Er) || (u(this, Er, new AbortController()), window.addEventListener("pointerdown", b(this, pt, qy).bind(this), {
    signal: n(this, Js).combinedSignal(n(this, Er))
  })), n(this, is).ariaExpanded = "true", n(this, Zt)) {
    n(this, Zt).classList.remove("hidden");
    return;
  }
  const e = u(this, Zt, b(this, pt, Cg).call(this));
  n(this, is).append(e);
}, qy = function(t) {
  var e;
  (e = n(this, Zt)) != null && e.contains(t.target) || this.hideDropdown();
}, Hn = function() {
  return n(this, Zt) && !n(this, Zt).classList.contains("hidden");
}, g($e, Td, null);
let yc = $e;
var ns, Ql, ho, bn, kd;
const ia = class ia {
  constructor(t) {
    g(this, ns, null);
    g(this, Ql, !1);
    g(this, ho, null);
    g(this, bn, null);
    u(this, ho, t), u(this, bn, t._uiManager), n(ia, kd) || u(ia, kd, Object.freeze({
      freetext: "pdfjs-editor-color-picker-free-text-input",
      ink: "pdfjs-editor-color-picker-ink-input"
    }));
  }
  renderButton() {
    if (n(this, ns))
      return n(this, ns);
    const {
      editorType: t,
      colorType: e,
      colorAndOpacityType: s,
      opacityType: i,
      color: r,
      opacity: a
    } = n(this, ho), o = u(this, Ql, ot.isAlphaColorInputSupported && i !== void 0), l = u(this, ns, document.createElement("input"));
    if (l.type = "color", o) {
      l.setAttribute("alpha", "");
      const h = I.hexNums[Math.round((a ?? 1) * 255)];
      l.value = (r || "#000000") + h;
    } else
      l.value = r || "#000000";
    return l.className = "basicColorPicker", l.tabIndex = 0, l.setAttribute("data-l10n-id", n(ia, kd)[t]), l.addEventListener("input", () => {
      if (o) {
        const h = Uo(l.value);
        if (!h)
          return;
        const [c, d, f, m] = h, y = I.makeHexColor(c, d, f);
        s !== void 0 ? n(this, bn).updateParams(s, {
          color: y,
          opacity: m
        }) : (n(this, bn).updateParams(e, y), n(this, bn).updateParams(i, m));
      } else
        n(this, bn).updateParams(e, l.value);
    }, {
      signal: n(this, bn)._signal
    }), l;
  }
  update(t) {
    if (n(this, ns))
      if (n(this, Ql)) {
        const e = I.hexNums[Math.round(n(this, ho).opacity * 255)];
        n(this, ns).value = t + e;
      } else
        n(this, ns).value = t;
  }
  updateOpacity(t) {
    if (!n(this, ns) || !n(this, Ql))
      return;
    const e = I.hexNums[Math.round(t * 255)];
    n(this, ns).value = n(this, ho).color + e;
  }
  destroy() {
    var t;
    (t = n(this, ns)) == null || t.remove(), u(this, ns, null);
  }
  hideDropdown() {
  }
};
ns = new WeakMap(), Ql = new WeakMap(), ho = new WeakMap(), bn = new WeakMap(), kd = new WeakMap(), g(ia, kd, null);
let gf = ia;
function ub(p) {
  return Math.floor(wt(p, 0, 1) * 255).toString(16).padStart(2, "0");
}
function Nh(p) {
  return wt(p, 0, 1) * 255;
}
class fb {
  static CMYK_G([t, e, s, i]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * s + 0.11 * e + i)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return t = Nh(t), [t, t, t];
  }
  static G_HTML([t]) {
    const e = ub(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, s]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * s];
  }
  static RGB_rgb(t) {
    return t.map(Nh);
  }
  static RGB_HTML(t) {
    return `#${t.map(ub).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, s, i]) {
    return ["RGB", 1 - Math.min(1, t + i), 1 - Math.min(1, s + i), 1 - Math.min(1, e + i)];
  }
  static CMYK_rgb([t, e, s, i]) {
    return [Nh(1 - Math.min(1, t + i)), Nh(1 - Math.min(1, s + i)), Nh(1 - Math.min(1, e + i))];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, s]) {
    const i = 1 - t, r = 1 - e, a = 1 - s, o = Math.min(i, r, a);
    return ["CMYK", i, r, a, o];
  }
}
class _v {
  create(t, e, s = !1) {
    if (t <= 0 || e <= 0)
      throw new Error("Invalid SVG dimensions");
    const i = this._createSVG("svg:svg");
    return i.setAttribute("version", "1.1"), s || (i.setAttribute("width", `${t}px`), i.setAttribute("height", `${e}px`)), i.setAttribute("preserveAspectRatio", "none"), i.setAttribute("viewBox", `0 0 ${t} ${e}`), i;
  }
  createElement(t) {
    if (typeof t != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    st("Abstract method `_createSVG` called.");
  }
}
class Ac extends _v {
  _createSVG(t) {
    return document.createElementNS(Re, t);
  }
}
const Tv = 9, Oo = /* @__PURE__ */ new WeakSet(), kv = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 60 * 1e3;
class Ep {
  static create(t) {
    switch (t.data.annotationType) {
      case Et.LINK:
        return new Em(t);
      case Et.TEXT:
        return new Mv(t);
      case Et.WIDGET:
        switch (t.data.fieldType) {
          case "Tx":
            return new Dv(t);
          case "Btn":
            return t.data.radioButton ? new Rv(t) : t.data.checkBox ? new Lv(t) : new Fv(t);
          case "Ch":
            return new Ov(t);
          case "Sig":
            return new Iv(t);
        }
        return new Go(t);
      case Et.POPUP:
        return new kg(t);
      case Et.FREETEXT:
        return new iA(t);
      case Et.LINE:
        return new Bv(t);
      case Et.SQUARE:
        return new Hv(t);
      case Et.CIRCLE:
        return new Uv(t);
      case Et.POLYLINE:
        return new nA(t);
      case Et.CARET:
        return new $v(t);
      case Et.INK:
        return new Cm(t);
      case Et.POLYGON:
        return new Gv(t);
      case Et.HIGHLIGHT:
        return new rA(t);
      case Et.UNDERLINE:
        return new zv(t);
      case Et.SQUIGGLY:
        return new Vv(t);
      case Et.STRIKEOUT:
        return new jv(t);
      case Et.STAMP:
        return new aA(t);
      case Et.FILEATTACHMENT:
        return new Wv(t);
      case Et.RICHMEDIA:
      case Et.SCREEN:
      case Et.SOUND:
        return new oA(t);
      default:
        return new kt(t);
    }
  }
}
var co, Jl, Rs, Pd, Tg;
const Rm = class Rm {
  constructor(t, {
    isRenderable: e = !1,
    ignoreBorder: s = !1,
    createQuadrilaterals: i = !1
  } = {}) {
    g(this, Pd);
    g(this, co, null);
    g(this, Jl, !1);
    g(this, Rs, null);
    this.isRenderable = e, this.data = t.data, this.layer = t.layer, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderForms = t.renderForms, this.svgFactory = t.svgFactory, this.annotationStorage = t.annotationStorage, this.enableComment = t.enableComment, this.enableScripting = t.enableScripting, this.hasJSActions = t.hasJSActions, this._fieldObjects = t.fieldObjects, this.parent = t.parent, this.hasOwnCommentButton = !1, e && (this.contentElement = this.container = this._createContainer(s)), i && this._createQuadrilaterals();
  }
  static _hasPopupData({
    contentsObj: t,
    richText: e
  }) {
    return !!(t != null && t.str || e != null && e.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return Rm._hasPopupData(this.data) || this.enableComment && !!this.commentText;
  }
  get commentData() {
    var s;
    const {
      data: t
    } = this, e = (s = this.annotationStorage) == null ? void 0 : s.getEditor(t.id);
    return e ? e.getData() : t;
  }
  get hasCommentButton() {
    return this.enableComment && this.hasPopupElement;
  }
  get commentButtonPosition() {
    var o;
    const t = (o = this.annotationStorage) == null ? void 0 : o.getEditor(this.data.id);
    if (t)
      return t.commentButtonPositionInPage;
    const {
      quadPoints: e,
      inkLists: s,
      rect: i
    } = this.data;
    let r = -1 / 0, a = -1 / 0;
    if ((e == null ? void 0 : e.length) >= 8) {
      for (let l = 0; l < e.length; l += 8)
        e[l + 1] > a ? (a = e[l + 1], r = e[l + 2]) : e[l + 1] === a && (r = Math.max(r, e[l + 2]));
      return [r, a];
    }
    if ((s == null ? void 0 : s.length) >= 1) {
      for (const l of s)
        for (let h = 0, c = l.length; h < c; h += 2)
          l[h + 1] > a ? (a = l[h + 1], r = l[h]) : l[h + 1] === a && (r = Math.max(r, l[h]));
      if (r !== 1 / 0)
        return [r, a];
    }
    return i ? [i[2], i[3]] : null;
  }
  _normalizePoint(t) {
    const {
      page: {
        view: e
      },
      viewport: {
        rawDims: {
          pageWidth: s,
          pageHeight: i,
          pageX: r,
          pageY: a
        }
      }
    } = this.parent;
    return t[1] = e[3] - t[1] + e[1], t[0] = 100 * (t[0] - r) / s, t[1] = 100 * (t[1] - a) / i, t;
  }
  get commentText() {
    var e, s, i;
    const {
      data: t
    } = this;
    return ((s = (e = this.annotationStorage.getRawValue(`${Ph}${t.id}`)) == null ? void 0 : e.popup) == null ? void 0 : s.contents) || ((i = t.contentsObj) == null ? void 0 : i.str) || "";
  }
  set commentText(t) {
    const {
      data: e
    } = this, s = {
      deleted: !t,
      contents: t || ""
    };
    this.annotationStorage.updateEditor(e.id, {
      popup: s
    }) || this.annotationStorage.setValue(`${Ph}${e.id}`, {
      id: e.id,
      annotationType: e.annotationType,
      page: this.parent.page,
      popup: s,
      popupRef: e.popupRef,
      modificationDate: /* @__PURE__ */ new Date()
    }), t || this.removePopup();
  }
  removePopup() {
    var t, e;
    (e = ((t = n(this, Rs)) == null ? void 0 : t.popup) || this.popup) == null || e.remove(), u(this, Rs, this.popup = null);
  }
  updateEdited(t) {
    var r;
    if (!this.container)
      return;
    t.rect && (n(this, co) || u(this, co, {
      rect: this.data.rect.slice(0)
    }));
    const {
      rect: e,
      popup: s
    } = t;
    e && b(this, Pd, Tg).call(this, e);
    let i = ((r = n(this, Rs)) == null ? void 0 : r.popup) || this.popup;
    !i && (s != null && s.text) && (this._createPopup(s), i = n(this, Rs).popup), i && (i.updateEdited(t), s != null && s.deleted && (i.remove(), u(this, Rs, null), this.popup = null));
  }
  resetEdited() {
    var t;
    n(this, co) && (b(this, Pd, Tg).call(this, n(this, co).rect), (t = n(this, Rs)) == null || t.popup.resetEdited(), u(this, co, null));
  }
  _createContainer(t) {
    const {
      data: e,
      parent: {
        page: s,
        viewport: i
      }
    } = this, r = document.createElement("section");
    r.setAttribute("data-annotation-id", e.id), !(this instanceof Go) && !(this instanceof Em) && !(this instanceof oA) && (r.tabIndex = 0);
    const {
      style: a
    } = r;
    if (a.zIndex = this.parent.zIndex, this.parent.zIndex += 2, e.alternativeText && (r.title = e.alternativeText), e.noRotate && r.classList.add("norotate"), !e.rect || this instanceof kg) {
      const {
        rotation: A
      } = e;
      return !e.hasOwnCanvas && A !== 0 && this.setRotation(A, r), r;
    }
    const {
      width: o,
      height: l
    } = this;
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const A = e.borderStyle.horizontalCornerRadius, w = e.borderStyle.verticalCornerRadius;
      if (A > 0 || w > 0) {
        const S = `calc(${A}px * var(--total-scale-factor)) / calc(${w}px * var(--total-scale-factor))`;
        a.borderRadius = S;
      }
      switch (e.borderStyle.style) {
        case zo.SOLID:
          a.borderStyle = "solid";
          break;
        case zo.DASHED:
          a.borderStyle = "dashed";
          break;
        case zo.BEVELED:
          X("Unimplemented border style: beveled");
          break;
        case zo.INSET:
          X("Unimplemented border style: inset");
          break;
        case zo.UNDERLINE:
          a.borderBottomStyle = "solid";
          break;
      }
      const v = e.borderColor || null;
      v ? (u(this, Jl, !0), a.borderColor = I.makeHexColor(...v)) : a.borderWidth = 0;
    }
    const h = I.normalizeRect([e.rect[0], s.view[3] - e.rect[1] + s.view[1], e.rect[2], s.view[3] - e.rect[3] + s.view[1]]), {
      pageWidth: c,
      pageHeight: d,
      pageX: f,
      pageY: m
    } = i.rawDims;
    a.left = `${100 * (h[0] - f) / c}%`, a.top = `${100 * (h[1] - m) / d}%`;
    const {
      rotation: y
    } = e;
    return e.hasOwnCanvas || y === 0 ? (a.width = `${100 * o / c}%`, a.height = `${100 * l / d}%`) : this.setRotation(y, r), r;
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: s,
      pageHeight: i
    } = this.parent.viewport.rawDims;
    let {
      width: r,
      height: a
    } = this;
    t % 180 !== 0 && ([r, a] = [a, r]), e.style.width = `${100 * r / s}%`, e.style.height = `${100 * a / i}%`, e.setAttribute("data-main-rotation", (360 - t) % 360);
  }
  get _commonActions() {
    const t = (e, s, i) => {
      const r = i.detail[e], a = r[0], o = r.slice(1);
      i.target.style[s] = fb[`${a}_HTML`](o), this.annotationStorage.setValue(this.data.id, {
        [s]: fb[`${a}_rgb`](o)
      });
    };
    return R(this, "_commonActions", {
      display: (e) => {
        const {
          display: s
        } = e.detail, i = s % 2 === 1;
        this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: i,
          noPrint: s === 1 || s === 2
        });
      },
      print: (e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      },
      hidden: (e) => {
        const {
          hidden: s
        } = e.detail;
        this.container.style.visibility = s ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: s,
          noView: s
        });
      },
      focus: (e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (e) => {
        e.target.title = e.detail.userName;
      },
      readonly: (e) => {
        e.target.disabled = e.detail.readonly;
      },
      required: (e) => {
        this._setRequired(e.target, e.detail.required);
      },
      bgColor: (e) => {
        t("bgColor", "backgroundColor", e);
      },
      fillColor: (e) => {
        t("fillColor", "backgroundColor", e);
      },
      fgColor: (e) => {
        t("fgColor", "color", e);
      },
      textColor: (e) => {
        t("textColor", "color", e);
      },
      borderColor: (e) => {
        t("borderColor", "borderColor", e);
      },
      strokeColor: (e) => {
        t("strokeColor", "borderColor", e);
      },
      rotation: (e) => {
        const s = e.detail.rotation;
        this.setRotation(s), this.annotationStorage.setValue(this.data.id, {
          rotation: s
        });
      }
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const s = this._commonActions;
    for (const i of Object.keys(e.detail)) {
      const r = t[i] || s[i];
      r == null || r(e);
    }
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const s = this._commonActions;
    for (const [i, r] of Object.entries(e)) {
      const a = s[i];
      if (a) {
        const o = {
          detail: {
            [i]: r
          },
          target: t
        };
        a(o), delete e[i];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: t
    } = this.data;
    if (!t)
      return;
    const [e, s, i, r] = this.data.rect.map(Math.fround);
    if (t.length === 8) {
      const [A, w, v, S] = t.subarray(2, 6);
      if (i === A && r === w && e === v && s === S)
        return;
    }
    const {
      style: a
    } = this.container;
    let o;
    if (n(this, Jl)) {
      const {
        borderColor: A,
        borderWidth: w
      } = a;
      a.borderWidth = 0, o = ["url('data:image/svg+xml;utf8,", `<svg xmlns="${Re}" preserveAspectRatio="none" viewBox="0 0 1 1">`, `<g fill="transparent" stroke="${A}" stroke-width="${w}">`], this.container.classList.add("hasBorder");
    }
    const l = i - e, h = r - s, {
      svgFactory: c
    } = this, d = c.createElement("svg");
    d.classList.add("quadrilateralsContainer"), d.setAttribute("width", 0), d.setAttribute("height", 0), d.role = "none";
    const f = c.createElement("defs");
    d.append(f);
    const m = c.createElement("clipPath"), y = `clippath_${this.data.id}`;
    m.setAttribute("id", y), m.setAttribute("clipPathUnits", "objectBoundingBox"), f.append(m);
    for (let A = 2, w = t.length; A < w; A += 8) {
      const v = t[A], S = t[A + 1], E = t[A + 2], C = t[A + 3], x = c.createElement("rect"), _ = (E - e) / l, k = (r - S) / h, M = (v - E) / l, P = (S - C) / h;
      x.setAttribute("x", _), x.setAttribute("y", k), x.setAttribute("width", M), x.setAttribute("height", P), m.append(x), o == null || o.push(`<rect vector-effect="non-scaling-stroke" x="${_}" y="${k}" width="${M}" height="${P}"/>`);
    }
    n(this, Jl) && (o.push("</g></svg>')"), a.backgroundImage = o.join("")), this.container.append(d), this.container.style.clipPath = `url(#${y})`;
  }
  _createPopup(t = null) {
    const {
      data: e
    } = this;
    let s, i;
    t ? (s = {
      str: t.text
    }, i = t.date) : (s = e.contentsObj, i = e.modificationDate), u(this, Rs, new kg({
      data: {
        color: e.color,
        titleObj: e.titleObj,
        modificationDate: i,
        contentsObj: s,
        richText: e.richText,
        parentRect: e.rect,
        borderStyle: 0,
        id: `popup_${e.id}`,
        rotation: e.rotation,
        noRotate: !0
      },
      linkService: this.linkService,
      parent: this.parent,
      elements: [this]
    }));
  }
  get hasPopupElement() {
    return !!(n(this, Rs) || this.popup || this.data.popupRef);
  }
  get extraPopupElement() {
    return n(this, Rs);
  }
  render() {
    st("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const s = [];
    if (this._fieldObjects) {
      const i = this._fieldObjects.get(t) || [];
      for (const {
        page: r,
        id: a,
        exportValues: o
      } of i) {
        if (r === -1 || a === e)
          continue;
        const l = typeof o == "string" ? o : null, h = document.querySelector(`[data-element-id="${a}"]`);
        if (h && !Oo.has(h)) {
          X(`_getElementsByName - element not allowed: ${a}`);
          continue;
        }
        s.push({
          id: a,
          exportValue: l,
          domElement: h
        });
      }
      return s;
    }
    for (const i of document.getElementsByName(t)) {
      const {
        exportValue: r
      } = i, a = i.getAttribute("data-element-id");
      a === e || !Oo.has(i) || s.push({
        id: a,
        exportValue: r,
        domElement: i
      });
    }
    return s;
  }
  show() {
    var t;
    this.container && (this.container.hidden = !1), (t = this.popup) == null || t.maybeShow();
  }
  hide() {
    var t;
    this.container && (this.container.hidden = !0), (t = this.popup) == null || t.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t))
      for (const e of t)
        e.classList.add("highlightArea");
    else
      t.classList.add("highlightArea");
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: t,
      data: {
        id: e
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var s;
      (s = this.linkService.eventBus) == null || s.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: e,
        mustEnterInEditMode: !0
      });
    });
  }
  updateOC(t) {
    if (!this.data.oc || !t)
      return;
    t.isVisible(this.data.oc) ? this.show() : this.hide();
  }
  get width() {
    return this.data.rect[2] - this.data.rect[0];
  }
  get height() {
    return this.data.rect[3] - this.data.rect[1];
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor = e === null ? "transparent" : I.makeHexColor(...e);
  }
};
co = new WeakMap(), Jl = new WeakMap(), Rs = new WeakMap(), Pd = new WeakSet(), Tg = function(t) {
  const {
    container: {
      style: e
    },
    data: {
      rect: s,
      rotation: i
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: r,
          pageHeight: a,
          pageX: o,
          pageY: l
        }
      }
    }
  } = this;
  s == null || s.splice(0, 4, ...t), e.left = `${100 * (t[0] - o) / r}%`, e.top = `${100 * (a - t[3] + l) / a}%`, i === 0 ? (e.width = `${100 * (t[2] - t[0]) / r}%`, e.height = `${100 * (t[3] - t[1]) / a}%`) : this.setRotation(i);
};
let kt = Rm;
class Pv extends kt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.editor = t.editor;
  }
  render() {
    return this.container.className = "editorAnnotation", this.container;
  }
  createOrUpdatePopup() {
    const {
      editor: t
    } = this;
    t.hasComment && this._createPopup(t.comment);
  }
  get hasCommentButton() {
    return this.enableComment && this.editor.hasComment;
  }
  get commentButtonPosition() {
    return this.editor.commentButtonPositionInPage;
  }
  get commentText() {
    return this.editor.comment.text;
  }
  set commentText(t) {
    this.editor.comment = t, t || this.removePopup();
  }
  get commentData() {
    return this.editor.getData();
  }
  remove() {
    this.parent.removeAnnotation(this.data.id), this.container.remove(), this.container = null, this.removePopup();
  }
}
var ms, Zr, Qy, Jy;
class Em extends kt {
  constructor(e, s = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(s != null && s.ignoreBorder),
      createQuadrilaterals: !0
    });
    g(this, ms);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: s
    } = this, i = document.createElement("a");
    i.setAttribute("data-element-id", e.id);
    let r = !1;
    return e.url ? (s.addLinkAttributes(i, e.url, e.newWindow), r = !0) : e.action ? (this._bindNamedAction(i, e.action, e.overlaidText), r = !0) : e.attachment ? (b(this, ms, Qy).call(this, i, e.attachmentId, e.attachment, e.overlaidText, e.attachmentDest), r = !0) : e.setOCGState ? (b(this, ms, Jy).call(this, i, e.setOCGState, e.overlaidText), r = !0) : e.dest ? (this._bindLink(i, e.dest, e.overlaidText), r = !0) : (e.actions && (e.actions.has("Action") || e.actions.has("Mouse Up") || e.actions.has("Mouse Down")) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, e), r = !0), e.resetForm ? (this._bindResetFormAction(i, e.resetForm), r = !0) : this.isTooltipOnly && !r && (this._bindLink(i, ""), r = !0)), this.container.classList.add("linkAnnotation"), r && (this.contentElement = i, this.container.append(i)), this.container;
  }
  _bindLink(e, s, i = "") {
    e.href = this.linkService.getDestinationHash(s), e.onclick = () => (s && this.linkService.goToDestination(s), !1), (s || s === "") && b(this, ms, Zr).call(this), i && (e.title = i);
  }
  _bindNamedAction(e, s, i = "") {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(s), !1), i && (e.title = i), b(this, ms, Zr).call(this);
  }
  _bindJSAction(e, {
    actions: s,
    id: i,
    overlaidText: r
  }) {
    e.href = this.linkService.getAnchorUrl("");
    const a = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const o of s.keys()) {
      const l = a.get(o);
      l && (e[l] = () => {
        var h;
        return (h = this.linkService.eventBus) == null || h.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: i,
            name: o
          }
        }), !1;
      });
    }
    r && (e.title = r), e.onclick || (e.onclick = () => !1), b(this, ms, Zr).call(this);
  }
  _bindResetFormAction(e, s) {
    const i = e.onclick;
    if (i || (e.href = this.linkService.getAnchorUrl("")), b(this, ms, Zr).call(this), !this._fieldObjects) {
      X('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), i || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      var d;
      i == null || i();
      const {
        fields: r,
        refs: a,
        include: o
      } = s, l = [];
      if (r.length !== 0 || a.length !== 0) {
        const f = new Set(a);
        for (const y of r) {
          const A = this._fieldObjects.get(y) || [];
          for (const {
            id: w
          } of A)
            f.add(w);
        }
        const m = /* @__PURE__ */ new Map();
        for (const y of this._fieldObjects.values())
          for (const {
            id: A,
            kidIds: w
          } of y)
            w && m.set(A, w);
        for (const y of f)
          for (const A of m.get(y) || [])
            f.add(A);
        for (const y of this._fieldObjects.values())
          for (const A of y)
            f.has(A.id) === o && l.push(A);
      } else
        for (const f of this._fieldObjects.values())
          l.push(...f);
      const h = this.annotationStorage, c = [];
      for (const f of l) {
        const {
          id: m
        } = f;
        switch (c.push(m), f.type) {
          case "text": {
            const A = f.defaultValue || "";
            h.setValue(m, {
              value: A
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const A = f.defaultValue === f.exportValues;
            h.setValue(m, {
              value: A
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const A = f.defaultValue || "";
            h.setValue(m, {
              value: A
            });
            break;
          }
          default:
            continue;
        }
        const y = document.querySelector(`[data-element-id="${m}"]`);
        if (y) {
          if (!Oo.has(y)) {
            X(`_bindResetFormAction - element not allowed: ${m}`);
            continue;
          }
        } else continue;
        y.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((d = this.linkService.eventBus) == null || d.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: c,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
ms = new WeakSet(), Zr = function() {
  this.container.setAttribute("data-internal-link", "");
}, Qy = function(e, s, i, r = "", a = null) {
  e.href = this.linkService.getAnchorUrl(""), i.description ? e.title = i.description : r && (e.title = r);
  const o = async () => {
    var h;
    const l = await this.linkService.getAttachmentContent(s);
    l && ((h = this.downloadManager) == null || h.openOrDownloadData(l, i.filename, a));
  };
  e.onclick = () => (o(), !1), b(this, ms, Zr).call(this);
}, Jy = function(e, s, i = "") {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(s), !1), i && (e.title = i), b(this, ms, Zr).call(this);
};
class Mv extends kt {
  constructor(t) {
    super(t, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.append(t), this.container;
  }
}
class Go extends kt {
  render() {
    return this.container;
  }
  _getKeyModifier(t) {
    return ot.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, s, i, r) {
    s.includes("mouse") ? t.addEventListener(s, (a) => {
      var o;
      (o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: r(a),
          shift: a.shiftKey,
          modifier: this._getKeyModifier(a)
        }
      });
    }) : t.addEventListener(s, (a) => {
      var o;
      if (s === "blur") {
        if (!e.focused || !a.relatedTarget)
          return;
        e.focused = !1;
      } else if (s === "focus") {
        if (e.focused)
          return;
        e.focused = !0;
      }
      r && ((o = this.linkService.eventBus) == null || o.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: i,
          value: r(a)
        }
      }));
    });
  }
  _setEventListeners(t, e, s, i) {
    const {
      actions: r
    } = this.data;
    for (const [a, o] of s)
      (o === "Action" || r != null && r.has(o)) && ((o === "Focus" || o === "Blur") && (e || (e = {
        focused: !1
      })), this._setEventListener(t, e, a, o, i), o === "Focus" && !(r != null && r.has("Blur")) ? this._setEventListener(t, e, "blur", "Blur", null) : o === "Blur" && !(r != null && r.has("Focus")) && this._setEventListener(t, e, "focus", "Focus", null));
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"], {
      fontColor: s
    } = this.data.defaultAppearanceData, i = this.data.defaultAppearanceData.fontSize || Tv, r = t.style;
    let a;
    const o = 2, l = (h) => Math.round(10 * h) / 10;
    if (this.data.multiLine) {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o), c = Math.round(h / /* inlined export .LINE_FACTOR */
      (1.35 * i)) || 1, d = h / c;
      a = Math.min(i, l(d / /* inlined export .LINE_FACTOR */
      1.35));
    } else {
      const h = Math.abs(this.data.rect[3] - this.data.rect[1] - o);
      a = Math.min(i, l(h / /* inlined export .LINE_FACTOR */
      1.35));
    }
    r.fontSize = `calc(${a}px * var(--total-scale-factor))`, r.color = I.makeHexColor(...s), this.data.textAlignment !== null && !this.data.comb && (r.textAlign = e[this.data.textAlignment]);
  }
  _setRequired(t, e) {
    e ? t.setAttribute("required", !0) : t.removeAttribute("required"), t.setAttribute("aria-required", e);
  }
}
class Dv extends Go {
  constructor(t) {
    const e = t.renderForms || t.data.hasOwnCanvas || !t.data.hasAppearance && !!t.data.fieldValue;
    super(t, {
      isRenderable: e
    });
  }
  setPropertyOnSiblings(t, e, s, i) {
    const r = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id))
      a.domElement && (a.domElement[e] = s), r.setValue(a.id, {
        [i]: s
      });
  }
  render() {
    var i, r;
    const t = this.annotationStorage, e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let s = null;
    if (this.renderForms) {
      const a = t.getValue(e, {
        value: this.data.fieldValue
      });
      let o = a.value || "";
      const l = t.getValue(e, {
        charLimit: this.data.maxLen
      }).charLimit;
      l && o.length > l && (o = o.slice(0, l));
      let h = a.formattedValue || ((i = this.data.textContent) == null ? void 0 : i.join(`
`)) || null;
      h && this.data.comb && (h = h.replaceAll(/\s+/g, ""));
      const c = {
        userValue: o,
        formattedValue: h,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1
      };
      this.data.multiLine ? (s = document.createElement("textarea"), s.textContent = h ?? o, this.data.doNotScroll && (s.style.overflowY = "hidden")) : (s = document.createElement("input"), s.type = this.data.password ? "password" : "text", s.setAttribute("value", h ?? o), this.data.doNotScroll && (s.style.overflowX = "hidden")), this.data.hasOwnCanvas && (this.container.classList.add("hasOwnCanvas"), t.has(e) && this.container.classList.add("sandboxModified")), Oo.add(s), this.contentElement = s, s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, s.name = this.data.fieldName, s.tabIndex = 0;
      const {
        datetimeFormat: d,
        datetimeType: f,
        timeStep: m
      } = this.data, y = !!f && this.enableScripting;
      d && (s.title = d), this._setRequired(s, this.data.required), l && (s.maxLength = l), s.addEventListener("input", (w) => {
        t.setValue(e, {
          value: w.target.value
        }), this.setPropertyOnSiblings(s, "value", w.target.value, "value"), c.formattedValue = null;
      }), s.addEventListener("resetform", (w) => {
        const v = this.data.defaultFieldValue ?? "";
        s.value = c.userValue = v, c.formattedValue = null;
      });
      let A = (w) => {
        const {
          formattedValue: v
        } = c;
        v != null && (w.target.value = v), w.target.scrollLeft = 0;
      };
      if (this.enableScripting && this.hasJSActions) {
        s.addEventListener("focus", (v) => {
          var E;
          if (c.focused)
            return;
          const {
            target: S
          } = v;
          if (y && (S.type = f, m && (S.step = m)), c.userValue) {
            const C = c.userValue;
            if (y)
              if (f === "time") {
                const x = new Date(C), _ = [x.getHours(), x.getMinutes(), x.getSeconds()];
                S.value = _.map((k) => k.toString().padStart(2, "0")).join(":");
              } else
                S.value = new Date(C - kv).toISOString().split(f === "date" ? "T" : ".", 1)[0];
            else
              S.value = C;
          }
          c.lastCommittedValue = S.value, c.commitKey = 1, (E = this.data.actions) != null && E.has("Focus") || (c.focused = !0);
        }), s.addEventListener("updatefromsandbox", (v) => {
          this.container.classList.add("sandboxModified");
          const S = {
            value(E) {
              c.userValue = E.detail.value ?? "", y || t.setValue(e, {
                value: c.userValue.toString()
              }), E.target.value = c.userValue;
            },
            formattedValue(E) {
              const {
                formattedValue: C
              } = E.detail;
              c.formattedValue = C, C != null && E.target !== document.activeElement && (E.target.value = C);
              const x = {
                formattedValue: C
              };
              y && (x.value = C), t.setValue(e, x);
            },
            selRange(E) {
              E.target.setSelectionRange(...E.detail.selRange);
            },
            charLimit: (E) => {
              var k;
              const {
                charLimit: C
              } = E.detail, {
                target: x
              } = E;
              if (C === 0) {
                x.removeAttribute("maxLength");
                return;
              }
              x.setAttribute("maxLength", C);
              let _ = c.userValue;
              !_ || _.length <= C || (_ = _.slice(0, C), x.value = c.userValue = _, t.setValue(e, {
                value: _
              }), (k = this.linkService.eventBus) == null || k.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: _,
                  willCommit: !0,
                  commitKey: 1,
                  selStart: x.selectionStart,
                  selEnd: x.selectionEnd
                }
              }));
            }
          };
          this._dispatchEventFromSandbox(S, v);
        }), s.addEventListener("keydown", (v) => {
          var C;
          c.commitKey = 1;
          let S = -1;
          if (v.key === "Escape" ? S = 0 : v.key === "Enter" && !this.data.multiLine ? S = 2 : v.key === "Tab" && (c.commitKey = 3), S === -1)
            return;
          const {
            value: E
          } = v.target;
          c.lastCommittedValue !== E && (c.lastCommittedValue = E, c.userValue = E, (C = this.linkService.eventBus) == null || C.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: E,
              willCommit: !0,
              commitKey: S,
              selStart: v.target.selectionStart,
              selEnd: v.target.selectionEnd
            }
          }));
        });
        const w = A;
        A = null, s.addEventListener("blur", (v) => {
          var C, x;
          if (!c.focused || !v.relatedTarget)
            return;
          (C = this.data.actions) != null && C.has("Blur") || (c.focused = !1);
          const {
            target: S
          } = v;
          let {
            value: E
          } = S;
          if (y) {
            if (E && f === "time") {
              const _ = E.split(":").map((k) => parseInt(k, 10));
              E = new Date(2e3, 0, 1, _[0], _[1], _[2] || 0).valueOf(), S.step = "";
            } else
              E.includes("T") || (E = `${E}T00:00`), E = new Date(E).valueOf();
            S.type = "text";
          }
          c.userValue = E, c.lastCommittedValue !== E && ((x = this.linkService.eventBus) == null || x.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: E,
              willCommit: !0,
              commitKey: c.commitKey,
              selStart: v.target.selectionStart,
              selEnd: v.target.selectionEnd
            }
          })), w(v);
        }), (r = this.data.actions) != null && r.has("Keystroke") && s.addEventListener("beforeinput", (v) => {
          var P;
          c.lastCommittedValue = null;
          const {
            data: S,
            target: E
          } = v, {
            value: C,
            selectionStart: x,
            selectionEnd: _
          } = E;
          let k = x, M = _;
          switch (v.inputType) {
            case "deleteWordBackward": {
              const D = /\w/;
              for (; k > 0 && !D.test(C[k - 1]); )
                k--;
              for (; k > 0 && D.test(C[k - 1]); )
                k--;
              break;
            }
            case "deleteWordForward": {
              const D = C.substring(x).match(/^\W*\w*/);
              D && (M += D[0].length);
              break;
            }
            case "deleteContentBackward":
              x === _ && (k -= 1);
              break;
            case "deleteContentForward":
              x === _ && (M += 1);
              break;
          }
          v.preventDefault(), (P = this.linkService.eventBus) == null || P.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: e,
              name: "Keystroke",
              value: C,
              change: S || "",
              willCommit: !1,
              selStart: k,
              selEnd: M
            }
          });
        }), this._setEventListeners(s, c, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (v) => v.target.value);
      }
      if (A && s.addEventListener("blur", A), this.data.comb) {
        const v = (this.data.rect[2] - this.data.rect[0]) / l;
        s.classList.add("comb"), s.style.setProperty("--comb-width", `calc(${v}px * var(--total-scale-factor))`);
        const S = this.data.textAlignment;
        if (S === 1 || S === 2) {
          const E = () => {
            const C = l - s.value.length;
            s.style.setProperty("--comb-offset", `${S === 1 ? C >> 1 : C}`);
          };
          E();
          for (const C of ["input", "blur", "resetform", "updatefromsandbox"])
            s.addEventListener(C, E);
        }
      }
    } else
      s = document.createElement("div"), s.textContent = this.data.fieldValue, s.style.verticalAlign = "middle", s.style.display = "table-cell", this.data.hasOwnCanvas && (s.hidden = !0);
    return this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
  }
}
class Iv extends Go {
  constructor(t) {
    super(t, {
      isRenderable: !!t.data.hasOwnCanvas
    });
  }
}
class Lv extends Go {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, {
      value: e.exportValue === e.fieldValue
    }).value;
    typeof i == "string" && (i = i !== "Off", t.setValue(s, {
      value: i
    })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
    const r = document.createElement("input");
    return Oo.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "checkbox", r.name = e.fieldName, i && r.setAttribute("checked", !0), r.setAttribute("exportValue", e.exportValue), r.tabIndex = 0, r.addEventListener("change", (a) => {
      const {
        name: o,
        checked: l
      } = a.target;
      for (const h of this._getElementsByName(o, s)) {
        const c = l && h.exportValue === e.exportValue;
        h.domElement && (h.domElement.checked = c), t.setValue(h.id, {
          value: c
        });
      }
      t.setValue(s, {
        value: l
      });
    }), r.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue || "Off";
      a.target.checked = o === e.exportValue;
    }), this.enableScripting && this.hasJSActions && (r.addEventListener("updatefromsandbox", (a) => {
      const o = {
        value(l) {
          l.target.checked = l.detail.value !== "Off", t.setValue(s, {
            value: l.target.checked
          });
        }
      };
      this._dispatchEventFromSandbox(o, a);
    }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (a) => a.target.checked)), this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class Rv extends Go {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage, e = this.data, s = e.id;
    let i = t.getValue(s, {
      value: e.buttonValue !== null && e.fieldValue === e.buttonValue
    }).value;
    if (typeof i == "string" && (i = i !== e.buttonValue, t.setValue(s, {
      value: i
    })), i)
      for (const a of this._getElementsByName(e.fieldName, s))
        t.setValue(a.id, {
          value: !1
        });
    const r = document.createElement("input");
    if (Oo.add(r), r.setAttribute("data-element-id", s), r.disabled = e.readOnly, this._setRequired(r, this.data.required), r.type = "radio", r.name = e.fieldName, i && r.setAttribute("checked", !0), r.tabIndex = 0, r.addEventListener("change", (a) => {
      const {
        name: o,
        checked: l
      } = a.target;
      for (const h of this._getElementsByName(o, s))
        t.setValue(h.id, {
          value: !1
        });
      t.setValue(s, {
        value: l
      });
    }), r.addEventListener("resetform", (a) => {
      const o = e.defaultFieldValue;
      a.target.checked = o != null && o === e.buttonValue;
    }), this.enableScripting && this.hasJSActions) {
      const a = e.buttonValue;
      r.addEventListener("updatefromsandbox", (o) => {
        const l = {
          value: (h) => {
            const c = a === h.detail.value;
            for (const d of this._getElementsByName(h.target.name)) {
              const f = c && d.id === s;
              d.domElement && (d.domElement.checked = f), t.setValue(d.id, {
                value: f
              });
            }
          }
        };
        this._dispatchEventFromSandbox(l, o);
      }), this._setEventListeners(r, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (o) => o.target.checked);
    }
    return this._setDefaultPropertiesFromJS(r), this.container.append(r), this.container;
  }
}
class Fv extends Em {
  constructor(t) {
    super(t, {
      ignoreBorder: t.data.hasAppearance
    });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const e = t.lastChild;
    return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (s) => {
      this._dispatchEventFromSandbox({}, s);
    })), t;
  }
}
class Ov extends Go {
  constructor(t) {
    super(t, {
      isRenderable: t.renderForms
    });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage, e = this.data.id, s = t.getValue(e, {
      value: this.data.fieldValue
    }), i = document.createElement("select");
    Oo.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, this._setRequired(i, this.data.required), i.name = this.data.fieldName, i.tabIndex = 0;
    let r = this.data.combo && this.data.options.length > 0;
    this.data.combo || (i.size = this.data.options.length, this.data.multiSelect && (i.multiple = !0)), i.addEventListener("resetform", (d) => {
      const f = this.data.defaultFieldValue;
      for (const m of i.options)
        m.selected = m.value === f;
    });
    const a = (d, f) => {
      const m = f.replaceAll(" ", " ");
      d.textContent = m, m !== f && d.setAttribute("display-value", f);
    };
    for (const d of this.data.options) {
      const f = document.createElement("option");
      a(f, d.displayValue), f.value = d.exportValue, s.value.includes(d.exportValue) && (f.setAttribute("selected", !0), r = !1), i.append(f);
    }
    let o = null;
    if (r) {
      const d = document.createElement("option");
      d.value = " ", d.setAttribute("hidden", !0), d.setAttribute("selected", !0), i.prepend(d), o = () => {
        d.remove(), i.removeEventListener("input", o), o = null;
      }, i.addEventListener("input", o);
    }
    const l = (d) => {
      const f = d ? "value" : "textContent", {
        options: m,
        multiple: y
      } = i;
      return y ? Array.prototype.filter.call(m, (A) => A.selected).map((A) => A[f]) : m.selectedIndex === -1 ? null : m[m.selectedIndex][f];
    };
    let h = l(!1);
    const c = (d) => {
      const f = d.target.options;
      return Array.prototype.map.call(f, (m) => ({
        displayValue: m.getAttribute("display-value") || m.textContent,
        exportValue: m.value
      }));
    };
    return this.enableScripting && this.hasJSActions ? (i.addEventListener("updatefromsandbox", (d) => {
      const f = {
        value(m) {
          o == null || o();
          const y = m.detail.value, A = new Set(Array.isArray(y) ? y : [y]);
          for (const w of i.options)
            w.selected = A.has(w.value);
          t.setValue(e, {
            value: l(!0)
          }), h = l(!1);
        },
        multipleSelection(m) {
          i.multiple = !0;
        },
        remove(m) {
          const y = i.options, A = m.detail.remove;
          y[A].selected = !1, i.remove(A), y.length > 0 && Array.prototype.findIndex.call(y, (v) => v.selected) === -1 && (y[0].selected = !0), t.setValue(e, {
            value: l(!0),
            items: c(m)
          }), h = l(!1);
        },
        clear(m) {
          for (; i.length !== 0; )
            i.remove(0);
          t.setValue(e, {
            value: null,
            items: []
          }), h = l(!1);
        },
        insert(m) {
          const {
            index: y,
            displayValue: A,
            exportValue: w
          } = m.detail.insert, v = i.children[y], S = document.createElement("option");
          a(S, A), S.value = w, v ? v.before(S) : i.append(S), t.setValue(e, {
            value: l(!0),
            items: c(m)
          }), h = l(!1);
        },
        items(m) {
          const {
            items: y
          } = m.detail;
          for (; i.length !== 0; )
            i.remove(0);
          for (const A of y) {
            const {
              displayValue: w,
              exportValue: v
            } = A, S = document.createElement("option");
            a(S, w), S.value = v, i.append(S);
          }
          i.options.length > 0 && (i.options[0].selected = !0), t.setValue(e, {
            value: l(!0),
            items: c(m)
          }), h = l(!1);
        },
        indices(m) {
          const y = new Set(m.detail.indices);
          for (const A of m.target.options)
            A.selected = y.has(A.index);
          t.setValue(e, {
            value: l(!0)
          }), h = l(!1);
        },
        editable(m) {
          m.target.disabled = !m.detail.editable;
        }
      };
      this._dispatchEventFromSandbox(f, d);
    }), i.addEventListener("input", (d) => {
      var y;
      const f = l(!0), m = l(!1);
      t.setValue(e, {
        value: f
      }), d.preventDefault(), (y = this.linkService.eventBus) == null || y.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: e,
          name: "Keystroke",
          value: h,
          change: m,
          changeEx: f,
          willCommit: !1,
          commitKey: 1,
          keyDown: !1
        }
      });
    }), this._setEventListeners(i, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (d) => d.target.value)) : i.addEventListener("input", function(d) {
      t.setValue(e, {
        value: l(!0)
      });
    }), this.data.combo && this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
  }
}
var Md, Pg;
class kg extends kt {
  constructor(e) {
    const {
      data: s,
      elements: i,
      parent: r
    } = e, a = !!r._commentManager;
    super(e, {
      isRenderable: !a && kt._hasPopupData(s)
    });
    g(this, Md);
    if (this.elements = i, a && kt._hasPopupData(s)) {
      const o = this.popup = b(this, Md, Pg).call(this);
      for (const l of i)
        l.popup = o;
    } else
      this.popup = null;
  }
  render() {
    const {
      container: e
    } = this;
    e.classList.add("popupAnnotation"), e.role = "comment";
    const s = this.popup = b(this, Md, Pg).call(this), i = [];
    for (const r of this.elements)
      r.popup = s, r.container.ariaHasPopup = "dialog", i.push(r.data.id), r.addHighlightArea();
    return this.container.setAttribute("aria-controls", i.map((r) => `${Yo}${r}`).join(",")), this.container;
  }
}
Md = new WeakSet(), Pg = function() {
  return new Nv({
    container: this.container,
    color: this.data.color,
    titleObj: this.data.titleObj,
    modificationDate: this.data.modificationDate || this.data.creationDate,
    contentsObj: this.data.contentsObj,
    richText: this.data.richText,
    rect: this.data.rect,
    parentRect: this.data.parentRect || null,
    parent: this.parent,
    elements: this.elements,
    open: this.data.open,
    commentManager: this.parent._commentManager
  });
};
var rs, Cr, Gf, $f, Zl, th, Ht, Ti, xr, uo, eh, sh, ki, as, yn, An, Ut, wn, _r, Dd, vn, ih, fo, Tr, oe, kr, J, $u, Mg, Dg, Ig, zu, Lg, Zy, tA, eA, sA, Vu, ju, Rg;
class Nv {
  constructor({
    container: t,
    color: e,
    elements: s,
    titleObj: i,
    modificationDate: r,
    contentsObj: a,
    richText: o,
    parent: l,
    rect: h,
    parentRect: c,
    open: d,
    commentManager: f = null
  }) {
    g(this, J);
    g(this, rs, null);
    g(this, Cr, b(this, J, eA).bind(this));
    g(this, Gf, b(this, J, Rg).bind(this));
    g(this, $f, b(this, J, ju).bind(this));
    g(this, Zl, b(this, J, Vu).bind(this));
    g(this, th, null);
    g(this, Ht, null);
    g(this, Ti, null);
    g(this, xr, null);
    g(this, uo, null);
    g(this, eh, null);
    g(this, sh, null);
    g(this, ki, !1);
    g(this, as, null);
    g(this, yn, null);
    g(this, An, null);
    g(this, Ut, null);
    g(this, wn, null);
    g(this, _r, null);
    g(this, Dd, null);
    g(this, vn, null);
    g(this, ih, null);
    g(this, fo, null);
    g(this, Tr, !1);
    g(this, oe, null);
    g(this, kr, null);
    u(this, Ht, t), u(this, ih, i), u(this, Ti, a), u(this, vn, o), u(this, eh, l), u(this, th, e), u(this, Dd, h), u(this, sh, c), u(this, uo, s), u(this, rs, f), u(this, oe, s[0]), u(this, xr, gc.toDateObject(r)), this.trigger = s.flatMap((m) => m.getElementsToTriggerPopup()), f || (b(this, J, $u).call(this), n(this, Ht).hidden = !0, d && b(this, J, Vu).call(this));
  }
  renderCommentButton() {
    if (n(this, Ut)) {
      n(this, Ut).parentNode || n(this, oe).container.after(n(this, Ut));
      return;
    }
    if (n(this, wn) || b(this, J, Mg).call(this), !n(this, wn))
      return;
    const {
      signal: t
    } = u(this, yn, new AbortController()), e = n(this, oe).hasOwnCommentButton, s = () => {
      n(this, rs).toggleCommentPopup(this, !0, void 0, !e);
    }, i = () => {
      n(this, rs).toggleCommentPopup(this, !1, !0, !e);
    }, r = () => {
      n(this, rs).toggleCommentPopup(this, !1, !1);
    };
    if (e) {
      u(this, Ut, n(this, oe).container);
      for (const a of this.trigger)
        a.ariaHasPopup = "dialog", a.ariaControls = "commentPopup", a.addEventListener("keydown", n(this, Cr), {
          signal: t
        }), a.addEventListener("click", s, {
          signal: t
        }), a.addEventListener("pointerenter", i, {
          signal: t
        }), a.addEventListener("pointerleave", r, {
          signal: t
        }), a.classList.add("popupTriggerArea");
    } else {
      const a = u(this, Ut, document.createElement("button"));
      a.className = "annotationCommentButton";
      const o = n(this, oe).container;
      a.style.zIndex = parseInt(o.style.zIndex, 10) + 1, a.tabIndex = 0, a.ariaHasPopup = "dialog", a.ariaControls = "commentPopup", a.setAttribute("data-l10n-id", "pdfjs-show-comment-button"), b(this, J, Ig).call(this), b(this, J, Dg).call(this), a.addEventListener("keydown", n(this, Cr), {
        signal: t
      }), a.addEventListener("click", s, {
        signal: t
      }), a.addEventListener("pointerenter", i, {
        signal: t
      }), a.addEventListener("pointerleave", r, {
        signal: t
      }), o.after(a);
    }
  }
  get commentButtonColor() {
    const {
      color: t,
      opacity: e
    } = n(this, oe).commentData;
    return t ? n(this, eh)._commentManager.makeCommentColor(t, e) : null;
  }
  focusCommentButton() {
    setTimeout(() => {
      var t;
      (t = n(this, Ut)) == null || t.focus();
    }, 0);
  }
  getData() {
    const {
      richText: t,
      color: e,
      opacity: s,
      creationDate: i,
      modificationDate: r
    } = n(this, oe).commentData;
    return {
      contentsObj: {
        str: this.comment
      },
      richText: t,
      color: e,
      opacity: s,
      creationDate: i,
      modificationDate: r
    };
  }
  get elementBeforePopup() {
    return n(this, Ut);
  }
  get comment() {
    return n(this, kr) || u(this, kr, n(this, oe).commentText), n(this, kr);
  }
  set comment(t) {
    t !== this.comment && (n(this, oe).commentText = u(this, kr, t));
  }
  focus() {
    var t;
    (t = n(this, oe).container) == null || t.focus();
  }
  get parentBoundingClientRect() {
    return n(this, oe).layer.getBoundingClientRect();
  }
  setCommentButtonStates({
    selected: t,
    hasPopup: e
  }) {
    n(this, Ut) && (n(this, Ut).classList.toggle("selected", t), n(this, Ut).ariaExpanded = e);
  }
  setSelectedCommentButton(t) {
    n(this, Ut).classList.toggle("selected", t);
  }
  get commentPopupPosition() {
    if (n(this, _r))
      return n(this, _r);
    const {
      x: t,
      y: e,
      height: s
    } = n(this, Ut).getBoundingClientRect(), {
      x: i,
      y: r,
      width: a,
      height: o
    } = n(this, oe).layer.getBoundingClientRect();
    return [(t - i) / a, (e + s - r) / o];
  }
  set commentPopupPosition(t) {
    u(this, _r, t);
  }
  hasDefaultPopupPosition() {
    return n(this, _r) === null;
  }
  get commentButtonPosition() {
    return n(this, wn);
  }
  get commentButtonWidth() {
    return n(this, Ut).getBoundingClientRect().width / this.parentBoundingClientRect.width;
  }
  editComment(t) {
    const [e, s] = n(this, _r) || this.commentButtonPosition.map((h) => h / 100), i = this.parentBoundingClientRect, {
      x: r,
      y: a,
      width: o,
      height: l
    } = i;
    n(this, rs).showDialog(null, this, r + e * o, a + s * l, {
      ...t,
      parentDimensions: i
    });
  }
  render() {
    var s, i;
    if (n(this, as))
      return;
    const t = u(this, as, document.createElement("div"));
    if (t.className = "popup", n(this, th)) {
      const r = t.style.outlineColor = I.makeHexColor(...n(this, th));
      t.style.backgroundColor = `color-mix(in srgb, ${r} 30%, white)`;
    }
    const e = document.createElement("span");
    if (e.className = "header", (s = n(this, ih)) != null && s.str) {
      const r = document.createElement("span");
      r.className = "title", e.append(r), {
        dir: r.dir,
        str: r.textContent
      } = n(this, ih);
    }
    if (t.append(e), n(this, xr)) {
      const r = document.createElement("time");
      r.className = "popupDate", r.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), r.setAttribute("data-l10n-args", JSON.stringify({
        dateObj: n(this, xr).valueOf()
      })), r.dateTime = n(this, xr).toISOString(), e.append(r);
    }
    ym({
      html: n(this, J, zu) || n(this, Ti).str,
      dir: (i = n(this, Ti)) == null ? void 0 : i.dir,
      className: "popupContent"
    }, t), n(this, Ht).append(t);
  }
  updateEdited({
    rect: t,
    popup: e,
    deleted: s
  }) {
    var i;
    if (n(this, rs)) {
      s ? (this.remove(), u(this, kr, null)) : e && (e.deleted ? this.remove() : (b(this, J, Ig).call(this), u(this, kr, e.text))), t && (u(this, wn, null), b(this, J, Mg).call(this), b(this, J, Dg).call(this));
      return;
    }
    if (s || e != null && e.deleted) {
      this.remove();
      return;
    }
    b(this, J, $u).call(this), n(this, fo) || u(this, fo, {
      contentsObj: n(this, Ti),
      richText: n(this, vn)
    }), t && u(this, An, null), e && e.text && (u(this, vn, b(this, J, tA).call(this, e.text)), u(this, xr, gc.toDateObject(e.date)), u(this, Ti, null)), (i = n(this, as)) == null || i.remove(), u(this, as, null);
  }
  resetEdited() {
    var t;
    n(this, fo) && ({
      contentsObj: yt(this, Ti)._,
      richText: yt(this, vn)._
    } = n(this, fo), u(this, fo, null), (t = n(this, as)) == null || t.remove(), u(this, as, null), u(this, An, null));
  }
  remove() {
    var t, e, s;
    if ((t = n(this, yn)) == null || t.abort(), u(this, yn, null), (e = n(this, as)) == null || e.remove(), u(this, as, null), u(this, Tr, !1), u(this, ki, !1), (s = n(this, Ut)) == null || s.remove(), u(this, Ut, null), this.trigger)
      for (const i of this.trigger)
        i.classList.remove("popupTriggerArea");
  }
  forceHide() {
    u(this, Tr, this.isVisible), n(this, Tr) && (n(this, Ht).hidden = !0);
  }
  maybeShow() {
    n(this, rs) || (b(this, J, $u).call(this), n(this, Tr) && (n(this, as) || b(this, J, ju).call(this), u(this, Tr, !1), n(this, Ht).hidden = !1));
  }
  get isVisible() {
    return !n(this, rs) && n(this, Ht).hidden === !1;
  }
}
rs = new WeakMap(), Cr = new WeakMap(), Gf = new WeakMap(), $f = new WeakMap(), Zl = new WeakMap(), th = new WeakMap(), Ht = new WeakMap(), Ti = new WeakMap(), xr = new WeakMap(), uo = new WeakMap(), eh = new WeakMap(), sh = new WeakMap(), ki = new WeakMap(), as = new WeakMap(), yn = new WeakMap(), An = new WeakMap(), Ut = new WeakMap(), wn = new WeakMap(), _r = new WeakMap(), Dd = new WeakMap(), vn = new WeakMap(), ih = new WeakMap(), fo = new WeakMap(), Tr = new WeakMap(), oe = new WeakMap(), kr = new WeakMap(), J = new WeakSet(), $u = function() {
  var e;
  if (n(this, yn))
    return;
  u(this, yn, new AbortController());
  const {
    signal: t
  } = n(this, yn);
  for (const s of this.trigger)
    s.addEventListener("click", n(this, Zl), {
      signal: t
    }), s.addEventListener("pointerenter", n(this, $f), {
      signal: t
    }), s.addEventListener("pointerleave", n(this, Gf), {
      signal: t
    }), s.classList.add("popupTriggerArea");
  for (const s of n(this, uo))
    (e = s.container) == null || e.addEventListener("keydown", n(this, Cr), {
      signal: t
    });
}, Mg = function() {
  const t = n(this, uo).find((e) => e.hasCommentButton);
  t && u(this, wn, t._normalizePoint(t.commentButtonPosition));
}, Dg = function() {
  if (n(this, oe).extraPopupElement && !n(this, oe).editor)
    return;
  n(this, Ut) || this.renderCommentButton();
  const [t, e] = n(this, wn), {
    style: s
  } = n(this, Ut);
  s.left = `calc(${t}%)`, s.top = `calc(${e}% - var(--comment-button-dim))`;
}, Ig = function() {
  n(this, oe).extraPopupElement || (n(this, Ut) || this.renderCommentButton(), n(this, Ut).style.backgroundColor = this.commentButtonColor || "");
}, zu = function() {
  const t = n(this, vn), e = n(this, Ti);
  return t != null && t.str && (!(e != null && e.str) || e.str === t.str) && n(this, vn).html || null;
}, Lg = function() {
  var t, e, s;
  return ((s = (e = (t = n(this, J, zu)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.fontSize) || 0;
}, Zy = function() {
  var t, e, s;
  return ((s = (e = (t = n(this, J, zu)) == null ? void 0 : t.attributes) == null ? void 0 : e.style) == null ? void 0 : s.color) || null;
}, tA = function(t) {
  const e = [], s = {
    str: t,
    html: {
      name: "div",
      attributes: {
        dir: "auto"
      },
      children: [{
        name: "p",
        children: e
      }]
    }
  }, i = {
    style: {
      color: n(this, J, Zy),
      fontSize: n(this, J, Lg) ? `calc(${n(this, J, Lg)}px * var(--total-scale-factor))` : ""
    }
  };
  for (const r of t.split(`
`))
    e.push({
      name: "span",
      value: r,
      attributes: i
    });
  return s;
}, eA = function(t) {
  t.altKey || t.shiftKey || t.ctrlKey || t.metaKey || (t.key === "Enter" || t.key === "Escape" && n(this, ki)) && b(this, J, Vu).call(this);
}, sA = function() {
  if (n(this, An) !== null)
    return;
  const {
    page: {
      view: t
    },
    viewport: {
      rawDims: {
        pageWidth: e,
        pageHeight: s,
        pageX: i,
        pageY: r
      }
    }
  } = n(this, eh);
  let a = !!n(this, sh), o = a ? n(this, sh) : n(this, Dd);
  for (const y of n(this, uo))
    if (!o || I.intersect(y.data.rect, o) !== null) {
      o = y.data.rect, a = !0;
      break;
    }
  const l = I.normalizeRect([o[0], t[3] - o[1] + t[1], o[2], t[3] - o[3] + t[1]]), c = a ? o[2] - o[0] + 5 : 0, d = l[0] + c, f = l[1];
  u(this, An, [100 * (d - i) / e, 100 * (f - r) / s]);
  const {
    style: m
  } = n(this, Ht);
  m.left = `${n(this, An)[0]}%`, m.top = `${n(this, An)[1]}%`;
}, Vu = function() {
  if (n(this, rs)) {
    n(this, rs).toggleCommentPopup(this, !1);
    return;
  }
  u(this, ki, !n(this, ki)), n(this, ki) ? (b(this, J, ju).call(this), n(this, Ht).addEventListener("click", n(this, Zl)), n(this, Ht).addEventListener("keydown", n(this, Cr))) : (b(this, J, Rg).call(this), n(this, Ht).removeEventListener("click", n(this, Zl)), n(this, Ht).removeEventListener("keydown", n(this, Cr)));
}, ju = function() {
  n(this, as) || this.render(), this.isVisible ? n(this, ki) && n(this, Ht).classList.add("focused") : (b(this, J, sA).call(this), n(this, Ht).hidden = !1, n(this, Ht).style.zIndex = parseInt(n(this, Ht).style.zIndex, 10) + 1e3);
}, Rg = function() {
  n(this, Ht).classList.remove("focused"), !(n(this, ki) || !this.isVisible) && (n(this, Ht).hidden = !0, n(this, Ht).style.zIndex = parseInt(n(this, Ht).style.zIndex, 10) - 1e3);
};
class iA extends kt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.textContent = t.data.textContent, this.textPosition = t.data.textPosition, this.annotationEditorType = W.FREETEXT;
  }
  render() {
    if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
      const t = this.contentElement = document.createElement("div");
      t.classList.add("annotationTextContent"), t.setAttribute("role", "comment");
      for (const e of this.textContent) {
        const s = document.createElement("span");
        s.textContent = e, t.append(s);
      }
      this.container.append(t);
    }
    return !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this._editOnDoubleClick(), this.container;
  }
}
var Id;
class Bv extends kt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    g(this, Id, null);
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const {
      data: e,
      width: s,
      height: i
    } = this, r = this.svgFactory.create(s, i, !0), a = u(this, Id, this.svgFactory.createElement("svg:line"));
    return a.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), a.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), a.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), a.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), a.setAttribute("stroke-width", e.borderStyle.width || 1), a.setAttribute("stroke", "transparent"), a.setAttribute("fill", "transparent"), r.append(a), this.container.append(r), !e.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Id);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Id = new WeakMap();
var Ld;
class Hv extends kt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    g(this, Ld, null);
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const {
      data: e,
      width: s,
      height: i
    } = this, r = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = u(this, Ld, this.svgFactory.createElement("svg:rect"));
    return o.setAttribute("x", a / 2), o.setAttribute("y", a / 2), o.setAttribute("width", s - a), o.setAttribute("height", i - a), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Ld);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Ld = new WeakMap();
var Rd;
class Uv extends kt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    g(this, Rd, null);
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const {
      data: e,
      width: s,
      height: i
    } = this, r = this.svgFactory.create(s, i, !0), a = e.borderStyle.width, o = u(this, Rd, this.svgFactory.createElement("svg:ellipse"));
    return o.setAttribute("cx", s / 2), o.setAttribute("cy", i / 2), o.setAttribute("rx", s / 2 - a / 2), o.setAttribute("ry", i / 2 - a / 2), o.setAttribute("stroke-width", a || 1), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "transparent"), r.append(o), this.container.append(r), !e.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Rd);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Rd = new WeakMap();
var Fd;
class nA extends kt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    g(this, Fd, null);
    this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        vertices: s,
        borderStyle: i,
        popupRef: r
      },
      width: a,
      height: o
    } = this;
    if (!s)
      return this.container;
    const l = this.svgFactory.create(a, o, !0);
    let h = [];
    for (let d = 0, f = s.length; d < f; d += 2) {
      const m = s[d] - e[0], y = e[3] - s[d + 1];
      h.push(`${m},${y}`);
    }
    h = h.join(" ");
    const c = u(this, Fd, this.svgFactory.createElement(this.svgElementName));
    return c.setAttribute("points", h), c.setAttribute("stroke-width", i.width || 1), c.setAttribute("stroke", "transparent"), c.setAttribute("fill", "transparent"), l.append(c), this.container.append(l), !r && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
  getElementsToTriggerPopup() {
    return n(this, Fd);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Fd = new WeakMap();
class Gv extends nA {
  constructor(t) {
    super(t), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
  }
}
class $v extends kt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    });
  }
  render() {
    return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container;
  }
}
var Od, po, Nd, Fg;
class Cm extends kt {
  constructor(e) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !0
    });
    g(this, Nd);
    g(this, Od, null);
    g(this, po, []);
    this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = this.data.it === "InkHighlight" ? W.HIGHLIGHT : W.INK;
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: {
        rect: e,
        rotation: s,
        inkLists: i,
        borderStyle: r,
        popupRef: a
      }
    } = this, {
      transform: o,
      width: l,
      height: h
    } = b(this, Nd, Fg).call(this, s, e), c = this.svgFactory.create(l, h, !0), d = u(this, Od, this.svgFactory.createElement("svg:g"));
    c.append(d), d.setAttribute("stroke-width", r.width || 1), d.setAttribute("stroke-linecap", "round"), d.setAttribute("stroke-linejoin", "round"), d.setAttribute("stroke-miterlimit", 10), d.setAttribute("stroke", "transparent"), d.setAttribute("fill", "transparent"), d.setAttribute("transform", o);
    for (const f of i) {
      const m = this.svgFactory.createElement(this.svgElementName);
      n(this, po).push(m), m.setAttribute("points", f.join(",")), d.append(m);
    }
    return !a && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.append(c), this._editOnDoubleClick(), this.container;
  }
  updateEdited(e) {
    super.updateEdited(e);
    const {
      thickness: s,
      points: i,
      rect: r
    } = e, a = n(this, Od);
    if (s >= 0 && a.setAttribute("stroke-width", s || 1), i)
      for (let o = 0, l = n(this, po).length; o < l; o++)
        n(this, po)[o].setAttribute("points", i[o].join(","));
    if (r) {
      const {
        transform: o,
        width: l,
        height: h
      } = b(this, Nd, Fg).call(this, this.data.rotation, r);
      a.parentElement.setAttribute("viewBox", `0 0 ${l} ${h}`), a.setAttribute("transform", o);
    }
  }
  getElementsToTriggerPopup() {
    return n(this, po);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Od = new WeakMap(), po = new WeakMap(), Nd = new WeakSet(), Fg = function(e, s) {
  switch (e) {
    case 90:
      return {
        transform: `rotate(90) translate(${-s[0]},${s[1]}) scale(1,-1)`,
        width: s[3] - s[1],
        height: s[2] - s[0]
      };
    case 180:
      return {
        transform: `rotate(180) translate(${-s[2]},${s[1]}) scale(1,-1)`,
        width: s[2] - s[0],
        height: s[3] - s[1]
      };
    case 270:
      return {
        transform: `rotate(270) translate(${-s[2]},${s[3]}) scale(1,-1)`,
        width: s[3] - s[1],
        height: s[2] - s[0]
      };
    default:
      return {
        transform: `translate(${-s[0]},${s[3]}) scale(1,-1)`,
        width: s[2] - s[0],
        height: s[3] - s[1]
      };
  }
};
class rA extends kt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    }), this.annotationEditorType = W.HIGHLIGHT;
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), t) {
      const s = document.createElement("mark");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class zv extends kt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.classList.add("underlineAnnotation"), t) {
      const s = document.createElement("u");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class Vv extends kt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.classList.add("squigglyAnnotation"), t) {
      const s = document.createElement("u");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class jv extends kt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0,
      createQuadrilaterals: !0
    });
  }
  render() {
    const {
      data: {
        overlaidText: t,
        popupRef: e
      }
    } = this;
    if (!e && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this.container.classList.add("strikeoutAnnotation"), t) {
      const s = document.createElement("s");
      s.classList.add("overlaidText"), s.textContent = t, this.container.append(s);
    }
    return this.container;
  }
}
class aA extends kt {
  constructor(t) {
    super(t, {
      isRenderable: !0,
      ignoreBorder: !0
    }), this.annotationEditorType = W.STAMP;
  }
  render() {
    return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && (this.hasOwnCommentButton = !0, this._createPopup()), this._editOnDoubleClick(), this.container;
  }
}
var Bd, Hd, Og;
class Wv extends kt {
  constructor(e) {
    var r;
    super(e, {
      isRenderable: !0
    });
    g(this, Hd);
    g(this, Bd, null);
    const {
      fileId: s,
      file: i
    } = this.data;
    this.filename = i.filename, this.content = i.content, this.fileId = s, (r = this.linkService.eventBus) == null || r.dispatch("fileattachmentannotation", {
      source: this,
      attachmentId: this.fileId,
      ...i
    });
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const {
      container: e,
      data: s
    } = this;
    let i;
    s.hasAppearance || s.fillAlpha === 0 ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(s.name) ? "paperclip" : "pushpin"}.svg`, s.fillAlpha && s.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(s.fillAlpha * 100)}%);`)), i.addEventListener("dblclick", b(this, Hd, Og).bind(this)), u(this, Bd, i);
    const {
      isMac: r
    } = ot.platform;
    return e.addEventListener("keydown", (a) => {
      a.key === "Enter" && (r ? a.metaKey : a.ctrlKey) && b(this, Hd, Og).call(this);
    }), !s.popupRef && this.hasPopupData ? (this.hasOwnCommentButton = !0, this._createPopup()) : i.classList.add("popupTriggerArea"), e.append(i), e;
  }
  getElementsToTriggerPopup() {
    return n(this, Bd);
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
Bd = new WeakMap(), Hd = new WeakSet(), Og = async function() {
  var a;
  const {
    fileId: e,
    filename: s,
    content: i
  } = this, r = await this.linkService.getAttachmentContent(e) || i;
  r && ((a = this.downloadManager) == null || a.openOrDownloadData(r, s));
};
var nh, go, Sn, No, lA, Ng;
class oA extends kt {
  constructor(e) {
    super(e, {
      isRenderable: !!e.data.richMedia
    });
    g(this, No);
    g(this, nh, new AbortController());
    g(this, go, null);
    g(this, Sn, null);
  }
  render() {
    this.container.classList.add("mediaAnnotation");
    const {
      filename: e
    } = this.data.richMedia, s = document.createElement("button");
    return s.className = "mediaPlayButton", s.type = "button", s.title = s.ariaLabel = e, s.addEventListener("click", () => b(this, No, lA).call(this, s), {
      signal: n(this, nh).signal
    }), this.container.append(s), this.container;
  }
  destroy() {
    n(this, nh).abort(), n(this, Sn) && (n(this, Sn).pause(), n(this, Sn).removeAttribute("src"), n(this, Sn).load(), u(this, Sn, null)), b(this, No, Ng).call(this);
  }
}
nh = new WeakMap(), go = new WeakMap(), Sn = new WeakMap(), No = new WeakSet(), lA = async function(e) {
  const {
    fileId: s,
    filename: i,
    contentType: r
  } = this.data.richMedia;
  e.disabled = !0;
  let a;
  try {
    a = await this.linkService.getAttachmentContent(s);
  } catch {
    return;
  } finally {
    e.disabled = !1;
  }
  if (!a || !e.isConnected)
    return;
  const {
    signal: o
  } = n(this, nh), l = new Blob([a], {
    type: r
  });
  if (!/^(?:video|audio)\//.test(l.type))
    return;
  const h = URL.createObjectURL(l);
  u(this, go, h);
  const c = l.type.startsWith("audio/"), d = document.createElement(c ? "audio" : "video");
  if (u(this, Sn, d), d.className = "mediaContent", this._setBackgroundColor(d), d.src = h, d.title = i, d.controls = !0, d.autoplay = !0, d.tabIndex = 0, c) {
    let f = !1, m = !1;
    const y = () => {
      d.controls = f || m;
    };
    this.container.addEventListener("pointerenter", () => {
      f = !0, y();
    }, {
      signal: o
    }), this.container.addEventListener("pointerleave", () => {
      f = !1, y();
    }, {
      signal: o
    }), this.container.addEventListener("focusin", () => {
      m = !0, y();
    }, {
      signal: o
    }), this.container.addEventListener("focusout", () => {
      m = !1, y();
    }, {
      signal: o
    });
  }
  d.addEventListener("emptied", () => b(this, No, Ng).call(this, h), {
    once: !0,
    signal: o
  }), e.replaceWith(d), d.play().catch(() => {
  });
}, Ng = function(e = n(this, go)) {
  e && e === n(this, go) && (URL.revokeObjectURL(e), u(this, go, null));
};
var Pr, mo, rh, En, ah, bo, Ce, Ud, Gi, Wu, Xu;
const Fm = class Fm {
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: s,
    annotationEditorUIManager: i,
    page: r,
    viewport: a,
    structTreeLayer: o,
    commentManager: l,
    linkService: h,
    annotationStorage: c
  }) {
    g(this, Gi);
    g(this, Pr, null);
    g(this, mo, null);
    g(this, rh, null);
    g(this, En, /* @__PURE__ */ new Map());
    g(this, ah, null);
    g(this, bo, null);
    g(this, Ce, []);
    g(this, Ud, !1);
    T(this, "zIndex", 0);
    this.div = t, u(this, Pr, e), u(this, mo, s), u(this, ah, o || null), u(this, bo, h || null), u(this, rh, c || new wm()), this.page = r, this.viewport = a, this._annotationEditorUIManager = i, this._commentManager = l || null;
  }
  hasEditableAnnotations() {
    return n(this, En).size > 0;
  }
  async render(t) {
    var l;
    const {
      annotations: e,
      optionalContentConfig: s
    } = t, i = this.div;
    jr(i, this.viewport);
    const r = /* @__PURE__ */ new Map(), a = [], o = {
      data: null,
      layer: i,
      linkService: n(this, bo),
      downloadManager: t.downloadManager,
      imageResourcesPath: t.imageResourcesPath || "",
      renderForms: t.renderForms !== !1,
      svgFactory: new Ac(),
      annotationStorage: n(this, rh),
      enableComment: t.enableComment === !0,
      enableScripting: t.enableScripting === !0,
      hasJSActions: t.hasJSActions,
      fieldObjects: t.fieldObjects,
      parent: this,
      elements: null
    };
    for (const h of e) {
      if (h.noHTML)
        continue;
      const c = h.annotationType === Et.POPUP;
      if (c) {
        const m = r.get(h.id);
        if (!m)
          continue;
        if (!this._commentManager) {
          a.push(h);
          continue;
        }
        o.elements = m;
      } else if (h.rect[2] === h.rect[0] || h.rect[3] === h.rect[1])
        continue;
      o.data = h;
      const d = Ep.create(o);
      if (!d.isRenderable)
        continue;
      c || (n(this, Ce).push(d), h.popupRef && r.getOrInsertComputed(h.popupRef, Ho).push(d));
      const f = d.render();
      h.hidden && (f.style.visibility = "hidden"), d.updateOC(s), d._isEditable && (n(this, En).set(d.data.id, d), (l = this._annotationEditorUIManager) == null || l.renderAnnotationElement(d));
    }
    await b(this, Gi, Wu).call(this);
    for (const h of a) {
      const c = o.elements = r.get(h.id);
      o.data = h;
      const d = Ep.create(o);
      if (!d.isRenderable)
        continue;
      const f = d.render();
      d.contentElement.id = `${Yo}${h.id}`, h.hidden && (f.style.visibility = "hidden"), c.at(-1).container.after(f);
    }
    b(this, Gi, Xu).call(this);
  }
  async addLinkAnnotations(t) {
    const e = {
      data: null,
      layer: this.div,
      linkService: n(this, bo),
      svgFactory: new Ac(),
      parent: this
    };
    for (const s of t) {
      s.borderStyle || (s.borderStyle = Fm._defaultBorderStyle), e.data = s;
      const i = Ep.create(e);
      i.isRenderable && (i.render(), i.contentElement.id = `${Yo}${s.id}`, n(this, Ce).push(i));
    }
    await b(this, Gi, Wu).call(this);
  }
  update({
    viewport: t,
    optionalContentConfig: e
  }) {
    const s = this.div;
    this.viewport = t, jr(s, {
      rotation: t.rotation
    });
    for (const i of n(this, Ce))
      i.updateOC(e);
    b(this, Gi, Xu).call(this), s.hidden = !1;
  }
  destroy() {
    var t, e;
    for (const s of n(this, Ce))
      (t = s.destroy) == null || t.call(s), (e = n(this, Pr)) == null || e.removePointerInTextLayer(s.contentElement);
    n(this, Ce).length = 0, n(this, En).clear(), this.div.replaceChildren();
  }
  refreshCanvases() {
    b(this, Gi, Xu).call(this);
  }
  getEditableAnnotations() {
    return n(this, En).values();
  }
  getEditableAnnotation(t) {
    return n(this, En).get(t);
  }
  addFakeAnnotation(t) {
    const {
      div: e
    } = this, {
      id: s,
      rotation: i
    } = t, r = new Pv({
      data: {
        id: s,
        rect: t.getPDFRect(),
        rotation: i
      },
      editor: t,
      layer: e,
      parent: this,
      enableComment: !!this._commentManager,
      linkService: n(this, bo),
      annotationStorage: n(this, rh)
    });
    return r.render(), r.contentElement.id = `${Yo}${s}`, r.createOrUpdatePopup(), n(this, Ce).push(r), r;
  }
  removeAnnotation(t) {
    var i;
    const e = n(this, Ce).findIndex((r) => r.data.id === t);
    if (e < 0)
      return;
    const [s] = n(this, Ce).splice(e, 1);
    (i = n(this, Pr)) == null || i.removePointerInTextLayer(s.contentElement);
  }
  updateFakeAnnotations(t) {
    if (t.length !== 0) {
      for (const e of t)
        e.updateFakeAnnotationElement(this);
      b(this, Gi, Wu).call(this);
    }
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  static get _defaultBorderStyle() {
    return R(this, "_defaultBorderStyle", Object.freeze({
      width: 1,
      rawWidth: 1,
      style: zo.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0
    }));
  }
};
Pr = new WeakMap(), mo = new WeakMap(), rh = new WeakMap(), En = new WeakMap(), ah = new WeakMap(), bo = new WeakMap(), Ce = new WeakMap(), Ud = new WeakMap(), Gi = new WeakSet(), Wu = async function() {
  var s, i, r, a;
  if (n(this, Ce).length === 0)
    return;
  this.div.replaceChildren();
  const t = [];
  if (!n(this, Ud)) {
    u(this, Ud, !0);
    for (const {
      contentElement: o,
      data: {
        hidden: l,
        id: h,
        oc: c
      }
    } of n(this, Ce)) {
      const d = o.id = `${Yo}${h}`, f = o.localName === "a" && !l && !c;
      t.push((s = n(this, ah)) == null ? void 0 : s.getAriaAttributes(d, {
        enableLinkOwnership: f
      }).then((m) => {
        if (m)
          for (const [y, A] of m)
            o.setAttribute(y, A);
      }));
    }
  }
  n(this, Ce).sort(({
    data: {
      rect: [o, l, h, c]
    }
  }, {
    data: {
      rect: [d, f, m, y]
    }
  }) => {
    if (o === h && l === c)
      return 1;
    if (d === m && f === y)
      return -1;
    const A = c, w = l, v = (l + c) / 2, S = y, E = f, C = (f + y) / 2;
    if (v >= S && C <= w)
      return -1;
    if (C >= A && v <= E)
      return 1;
    const x = (o + h) / 2, _ = (d + m) / 2;
    return x - _;
  });
  const e = document.createDocumentFragment();
  for (const o of n(this, Ce))
    e.append(o.container), this._commentManager ? (r = ((i = o.extraPopupElement) == null ? void 0 : i.popup) || o.popup) == null || r.renderCommentButton() : o.extraPopupElement && e.append(o.extraPopupElement.render());
  if (this.div.append(e), await Promise.all(t), n(this, Pr)) {
    const o = await ((a = n(this, ah)) == null ? void 0 : a.getAnnotationIds());
    for (const {
      contentElement: l
    } of n(this, Ce))
      o != null && o.has(l.id) || n(this, Pr).addPointerInTextLayer(l, !1);
  }
}, Xu = function() {
  var e;
  if (!n(this, mo))
    return;
  const t = this.div;
  for (const [s, i] of n(this, mo)) {
    const r = t.querySelector(`[data-annotation-id="${s}"]`);
    if (!r)
      continue;
    if (Array.isArray(i))
      for (const c of i)
        c.className = "annotationContent", c.ariaHidden = !0;
    else
      i.className = "annotationContent", i.ariaHidden = !0;
    const a = [];
    for (const c of r.children)
      c.nodeName === "CANVAS" && a.push(c);
    for (const c of a)
      c.remove();
    const o = Array.isArray(i) ? i[0] : i, {
      firstChild: l
    } = r;
    if (l ? l.classList.contains("annotationContent") ? l.after(o) : l.before(o) : r.append(o), Array.isArray(i)) {
      let c = o;
      for (let d = 1, f = i.length; d < f; d++)
        c.after(i[d]), c = i[d];
    }
    n(this, mo).delete(s);
    const h = n(this, En).get(s);
    h && (h._hasNoCanvas ? ((e = this._annotationEditorUIManager) == null || e.setMissingCanvas(s, r.id, i), h._hasNoCanvas = !1) : h.canvas = i);
  }
};
let mf = Fm;
const wu = /\r\n?|\n/g;
var os, Gd, yo, ls, qt, hA, cA, dA, Yu, Ln, Ku, qu, uA, Hg, fA;
const vt = class vt extends gt {
  constructor(e) {
    super({
      ...e,
      name: "freeTextEditor"
    });
    g(this, qt);
    g(this, os, "");
    g(this, Gd, `${this.id}-editor`);
    g(this, yo, null);
    g(this, ls);
    T(this, "_colorPicker", null);
    this.color = e.color || vt._defaultColor || gt._defaultLineColor, u(this, ls, e.fontSize || vt._defaultFontSize), this.annotationElementId || this._uiManager.a11yAlert(gt._l10nAlert.freetext), this.canAddComment = !1;
  }
  static get _keyboardManager() {
    const e = vt.prototype, s = (a) => a.isEmpty(), i = Wr.TRANSLATE_SMALL, r = Wr.TRANSLATE_BIG;
    return R(this, "_keyboardManager", new Fo([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
      bubbles: !0
    }], [["ctrl+Enter", "mac+meta+Enter"], e.commitOrRemove], [["Escape"], e.commitOrRemove], [["ArrowLeft"], e._translateEmpty, {
      args: [-i, 0],
      checker: s
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
      args: [-r, 0],
      checker: s
    }], [["ArrowRight"], e._translateEmpty, {
      args: [i, 0],
      checker: s
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
      args: [r, 0],
      checker: s
    }], [["ArrowUp"], e._translateEmpty, {
      args: [0, -i],
      checker: s
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
      args: [0, -r],
      checker: s
    }], [["ArrowDown"], e._translateEmpty, {
      args: [0, i],
      checker: s
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
      args: [0, r],
      checker: s
    }]]));
  }
  static initialize(e, s) {
    gt.initialize(e, s);
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(e, s) {
    switch (e) {
      case et.FREETEXT_SIZE:
        vt._defaultFontSize = s;
        break;
      case et.FREETEXT_COLOR:
        vt._defaultColor = s;
        break;
    }
  }
  updateParams(e, s) {
    switch (e) {
      case et.FREETEXT_SIZE:
        b(this, qt, hA).call(this, s);
        break;
      case et.FREETEXT_COLOR:
        b(this, qt, cA).call(this, s);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[et.FREETEXT_SIZE, vt._defaultFontSize], [et.FREETEXT_COLOR, vt._defaultColor || gt._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[et.FREETEXT_SIZE, n(this, ls)], [et.FREETEXT_COLOR, this.color]];
  }
  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new gf(this)), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return et.FREETEXT_COLOR;
  }
  onUpdatedColor() {
    var e;
    this.editorDiv.style.color = this.color, (e = this._colorPicker) == null || e.update(this.color), super.onUpdatedColor();
  }
  _translateEmpty(e, s) {
    this._uiManager.translateSelectedEditors(e, s, !0);
  }
  getInitialTranslation() {
    const e = this.parentScale;
    return [-vt._internalPadding * e, -(vt._internalPadding + n(this, ls)) * e];
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (!super.enableEditMode())
      return !1;
    this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), u(this, yo, new AbortController());
    const e = this._uiManager.combinedSignal(n(this, yo));
    return this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal: e
    }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal: e
    }), !0;
  }
  disableEditMode() {
    var e;
    return super.disableEditMode() ? (this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", n(this, Gd)), this._isDraggable = !0, (e = n(this, yo)) == null || e.abort(), u(this, yo, null), this.div.focus({
      preventScroll: !0
    }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"), !0) : !1;
  }
  focusin(e) {
    this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded(e) {
    var s;
    this.width || (this.enableEditMode(), e && this.editorDiv.focus(), (s = this._initialOptions) != null && s.isCentered && this.center(), this._initialOptions = null);
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
  }
  commit() {
    if (!this.isInEditMode())
      return;
    super.commit(), this.disableEditMode();
    const e = n(this, os), s = u(this, os, b(this, qt, dA).call(this).trimEnd());
    if (e === s)
      return;
    const i = (r) => {
      if (u(this, os, r), !r) {
        this.remove();
        return;
      }
      b(this, qt, qu).call(this), this._uiManager.rebuild(this), b(this, qt, Yu).call(this);
    };
    this.addCommands({
      cmd: () => {
        i(s);
      },
      undo: () => {
        i(e);
      },
      mustExec: !1
    }), b(this, qt, Yu).call(this);
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode(), this.editorDiv.focus();
  }
  keydown(e) {
    e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
  }
  editorDivKeydown(e) {
    vt._keyboardManager.exec(this, e);
  }
  editorDivFocus(e) {
    this.isEditing = !0;
  }
  editorDivBlur(e) {
    this.isEditing = !1;
  }
  editorDivInput(e) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
  }
  get canChangeContent() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    (this._isCopy || this.annotationElementId) && (e = this.x, s = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", n(this, Gd)), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
    const {
      style: i
    } = this.editorDiv;
    if (i.fontSize = `calc(${n(this, ls)}px * var(--total-scale-factor))`, i.color = this.color, this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
      const [r, a] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position: o
        } = this._initialData;
        let [l, h] = this.getInitialTranslation();
        [l, h] = this.pageTranslationToScreen(l, h);
        const [c, d] = this.pageDimensions, [f, m] = this.pageTranslation;
        let y, A;
        switch (this.rotation) {
          case 0:
            y = e + (o[0] - f) / c, A = s + this.height - (o[1] - m) / d;
            break;
          case 90:
            y = e + (o[0] - f) / c, A = s - (o[1] - m) / d, [l, h] = [h, -l];
            break;
          case 180:
            y = e - this.width + (o[0] - f) / c, A = s - (o[1] - m) / d, [l, h] = [-l, -h];
            break;
          case 270:
            y = e + (o[0] - f - this.height * d) / c, A = s + (o[1] - m - this.width * c) / d, [l, h] = [-h, l];
            break;
        }
        this.setAt(y * r, A * a, l, h);
      } else
        this._moveAfterPaste(e, s);
      b(this, qt, qu).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
    } else
      this._isDraggable = !1, this.editorDiv.contentEditable = !0;
    return this.div;
  }
  editorDivPaste(e) {
    var y, A, w;
    const s = e.clipboardData || window.clipboardData, {
      types: i
    } = s;
    if (i.length === 1 && i[0] === "text/plain")
      return;
    e.preventDefault();
    const r = b(y = vt, Ln, Hg).call(y, s.getData("text") || "").replaceAll(wu, `
`);
    if (!r)
      return;
    const a = window.getSelection();
    if (!a.rangeCount)
      return;
    this.editorDiv.normalize(), a.deleteFromDocument();
    const o = a.getRangeAt(0);
    if (!r.includes(`
`)) {
      o.insertNode(document.createTextNode(r)), this.editorDiv.normalize(), a.collapseToStart();
      return;
    }
    const {
      startContainer: l,
      startOffset: h
    } = o, c = [], d = [];
    if (l.nodeType === Node.TEXT_NODE) {
      const v = l.parentElement;
      if (d.push(l.nodeValue.slice(h).replaceAll(wu, "")), v !== this.editorDiv) {
        let S = c;
        for (const E of this.editorDiv.childNodes) {
          if (E === v) {
            S = d;
            continue;
          }
          S.push(b(A = vt, Ln, Ku).call(A, E));
        }
      }
      c.push(l.nodeValue.slice(0, h).replaceAll(wu, ""));
    } else if (l === this.editorDiv) {
      let v = c, S = 0;
      for (const E of this.editorDiv.childNodes)
        S++ === h && (v = d), v.push(b(w = vt, Ln, Ku).call(w, E));
    }
    u(this, os, `${c.join(`
`)}${r}${d.join(`
`)}`), b(this, qt, qu).call(this);
    const f = new Range();
    let m = Math.sumPrecise(c.map((v) => v.length));
    for (const {
      firstChild: v
    } of this.editorDiv.childNodes)
      if (v.nodeType === Node.TEXT_NODE) {
        const S = v.nodeValue.length;
        if (m <= S) {
          f.setStart(v, m), f.setEnd(v, m);
          break;
        }
        m -= S;
      }
    a.removeAllRanges(), a.addRange(f);
  }
  get contentDiv() {
    return this.editorDiv;
  }
  getPDFRect() {
    const e = vt._internalPadding * this.parentScale;
    return this.getRect(e, e);
  }
  static async deserialize(e, s, i) {
    var o;
    let r = null;
    if (e instanceof iA) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize: l,
            fontColor: h
          },
          rect: c,
          rotation: d,
          id: f,
          popupRef: m,
          richText: y,
          contentsObj: A,
          creationDate: w,
          modificationDate: v
        },
        textContent: S,
        textPosition: E,
        parent: {
          page: {
            pageNumber: C
          }
        }
      } = e;
      if (!(S != null && S.length))
        return null;
      r = e = {
        annotationType: W.FREETEXT,
        color: Array.from(h),
        fontSize: l,
        value: S.join(`
`),
        position: E,
        pageIndex: C - 1,
        rect: c.slice(0),
        rotation: d,
        annotationElementId: f,
        id: f,
        deleted: !1,
        popupRef: m,
        comment: (A == null ? void 0 : A.str) || null,
        richText: y,
        creationDate: w,
        modificationDate: v
      };
    }
    const a = await super.deserialize(e, s, i);
    return u(a, ls, e.fontSize), a.color = I.makeHexColor(...e.color), u(a, os, b(o = vt, Ln, Hg).call(o, e.value)), a._initialData = r, e.comment && a.setCommentData(e), a;
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = gt._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color), i = Object.assign(super.serialize(e), {
      color: s,
      fontSize: n(this, ls),
      value: b(this, qt, uA).call(this)
    });
    return this.addComment(i), e ? (i.isCopy = !0, i) : this.annotationElementId && !b(this, qt, fA).call(this, i) ? null : (i.id = this.annotationElementId, i);
  }
  renderAnnotationElement(e) {
    const s = super.renderAnnotationElement(e);
    if (!s)
      return null;
    const {
      style: i
    } = s;
    i.fontSize = `calc(${n(this, ls)}px * var(--total-scale-factor))`, i.color = this.color, s.replaceChildren();
    for (const r of n(this, os).split(`
`)) {
      const a = document.createElement("div");
      a.append(r ? document.createTextNode(r) : document.createElement("br")), s.append(a);
    }
    return e.updateEdited({
      rect: this.getPDFRect(),
      popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : {
        text: n(this, os)
      }
    }), s;
  }
  resetAnnotationElement(e) {
    super.resetAnnotationElement(e), e.resetEdited();
  }
};
os = new WeakMap(), Gd = new WeakMap(), yo = new WeakMap(), ls = new WeakMap(), qt = new WeakSet(), hA = function(e) {
  const s = (r) => {
    this.editorDiv.style.fontSize = `calc(${r}px * var(--total-scale-factor))`, this.translate(0, -(r - n(this, ls)) * this.parentScale), u(this, ls, r), b(this, qt, Yu).call(this);
  }, i = n(this, ls);
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: et.FREETEXT_SIZE,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, cA = function(e) {
  const s = (r) => {
    this.color = r, this.onUpdatedColor();
  }, i = this.color;
  this.addCommands({
    cmd: s.bind(this, e),
    undo: s.bind(this, i),
    post: this._uiManager.updateUI.bind(this._uiManager, this),
    mustExec: !0,
    type: et.FREETEXT_COLOR,
    overwriteIfSameType: !0,
    keepUndo: !0
  });
}, dA = function() {
  var i;
  const e = [];
  this.editorDiv.normalize();
  let s = null;
  for (const r of this.editorDiv.childNodes)
    (s == null ? void 0 : s.nodeType) === Node.TEXT_NODE && r.nodeName === "BR" || (e.push(b(i = vt, Ln, Ku).call(i, r)), s = r);
  return e.join(`
`);
}, Yu = function() {
  const [e, s] = this.parentDimensions;
  let i;
  if (this.isAttachedToDOM)
    i = this.div.getBoundingClientRect();
  else {
    const {
      currentLayer: r,
      div: a
    } = this, o = a.style.display, l = a.classList.contains("hidden");
    a.classList.remove("hidden"), a.style.display = "hidden", r.div.append(this.div), i = a.getBoundingClientRect(), a.remove(), a.style.display = o, a.classList.toggle("hidden", l);
  }
  this.rotation % 180 === this.parentRotation % 180 ? (this.width = i.width / e, this.height = i.height / s) : (this.width = i.height / e, this.height = i.width / s), this.fixAndSetPosition();
}, Ln = new WeakSet(), Ku = function(e) {
  return (e.nodeType === Node.TEXT_NODE ? e.nodeValue : e.innerText).replaceAll(wu, "");
}, qu = function() {
  if (this.editorDiv.replaceChildren(), !!n(this, os))
    for (const e of n(this, os).split(`
`)) {
      const s = document.createElement("div");
      s.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(s);
    }
}, uA = function() {
  return n(this, os).replaceAll(" ", " ");
}, Hg = function(e) {
  return e.replaceAll(" ", " ");
}, fA = function(e) {
  const {
    value: s,
    fontSize: i,
    color: r,
    pageIndex: a
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || e.value !== s || e.fontSize !== i || e.color.some((o, l) => o !== r[l]) || e.pageIndex !== a;
}, g(vt, Ln), T(vt, "_freeTextDefaultContent", ""), T(vt, "_internalPadding", 0), T(vt, "_defaultColor", null), T(vt, "_defaultFontSize", 10), T(vt, "_type", "freetext"), T(vt, "_editorType", W.FREETEXT);
let Bg = vt;
var Ao;
class xm {
  constructor() {
    g(this, Ao, /* @__PURE__ */ Object.create(null));
  }
  updateProperty(t, e) {
    this[t] = e, this.updateSVGProperty(t, e);
  }
  updateProperties(t) {
    if (t)
      for (const [e, s] of Object.entries(t))
        e.startsWith("_") || this.updateProperty(e, s);
  }
  updateSVGProperty(t, e) {
    n(this, Ao)[t] = e;
  }
  toSVGProperties() {
    const t = n(this, Ao);
    return u(this, Ao, /* @__PURE__ */ Object.create(null)), {
      root: t
    };
  }
  reset() {
    u(this, Ao, /* @__PURE__ */ Object.create(null));
  }
  updateAll(t = this) {
    this.updateProperties(t);
  }
  clone() {
    st("Not implemented");
  }
}
Ao = new WeakMap();
var oh, lh, Wt, wo, vo, hh, V, Ug, Gg, $g, zg, tc, Vg, jg, Wg, ec, pA, Qu, sc, Xo;
const q = class q extends gt {
  constructor(e) {
    super(e);
    g(this, V);
    g(this, oh, null);
    g(this, lh);
    T(this, "_clipPathId", null);
    T(this, "_colorPicker", null);
    T(this, "_drawId", null);
    T(this, "_drawOutlines", null);
    T(this, "_focusDrawId", null);
    u(this, lh, e.mustBeCommitted || !1), this._addOutlines(e);
  }
  onUpdatedColor() {
    var e;
    (e = this._colorPicker) == null || e.update(this.color), super.onUpdatedColor();
  }
  onUpdatedOpacity() {
    var e, s;
    (s = (e = this._colorPicker) == null ? void 0 : e.updateOpacity) == null || s.call(e, this.opacity);
  }
  _addOutlines(e) {
    e.drawOutlines && (b(this, V, Ug).call(this, e), b(this, V, ec).call(this));
  }
  static _mergeSVGProperties(e, s) {
    const i = new Set(Object.keys(e));
    for (const [r, a] of Object.entries(s))
      i.has(r) ? Object.assign(e[r], a) : e[r] = a;
    return e;
  }
  static getDefaultDrawingOptions(e) {
    st("Not implemented");
  }
  static get typesMap() {
    st("Not implemented");
  }
  static get isDrawer() {
    return !0;
  }
  static get _hasClipPath() {
    return !1;
  }
  static get _hasDrawClass() {
    return !0;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  get _drawRotation() {
    return this.rotation;
  }
  get _opacityName() {
    return this.constructor.typesMap.get(this.opacityType);
  }
  static updateDefaultParams(e, s) {
    const i = this.typesMap.get(e);
    i && this._defaultDrawingOptions.updateProperty(i, s), this._currentParent && (n(q, Wt).updateProperty(i, s), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  updateParams(e, s) {
    const i = this.constructor.typesMap.get(e);
    i && this._updateProperty(e, i, s);
  }
  static get defaultPropertiesToUpdate() {
    const e = [], s = this._defaultDrawingOptions;
    for (const [i, r] of this.typesMap)
      e.push([i, s[r]]);
    return e;
  }
  get propertiesToUpdate() {
    const e = [], {
      _drawingOptions: s
    } = this;
    for (const [i, r] of this.constructor.typesMap)
      e.push([i, s[r]]);
    return e;
  }
  _updateProperty(e, s, i) {
    const r = this._drawingOptions, a = r[s], o = (l) => {
      var c;
      r.updateProperty(s, l);
      const h = this._drawOutlines.updateProperty(s, l);
      h && b(this, V, sc).call(this, h), (c = this.parent) == null || c.drawLayer.updateProperties(this._drawId, r.toSVGProperties()), e === this.colorType ? this.onUpdatedColor() : e === this.opacityType && this.onUpdatedOpacity();
    };
    this.addCommands({
      cmd: o.bind(this, i),
      undo: o.bind(this, a),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: e,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  _updateColorAndOpacity(e, s, i = this.colorAndOpacityType) {
    const r = this.constructor.typesMap.get(this.colorType), a = this._opacityName, o = this._drawingOptions, l = o[r], h = o[a], c = (d, f) => {
      var m;
      o.updateProperty(r, d), o.updateProperty(a, f), this._drawOutlines.updateProperty(r, d), this._drawOutlines.updateProperty(a, f), (m = this.parent) == null || m.drawLayer.updateProperties(this._drawId, o.toSVGProperties()), this.onUpdatedColor(), this.onUpdatedOpacity();
    };
    this.addCommands({
      cmd: c.bind(this, e, s),
      undo: c.bind(this, l, h),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: i,
      overwriteIfSameType: !0,
      keepUndo: !0
    });
  }
  _onResizing() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, q._mergeSVGProperties(this._drawOutlines.getPathResizingSVGProperties(b(this, V, Qu).call(this)), {
      bbox: b(this, V, Xo).call(this)
    }));
  }
  _onResized() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, q._mergeSVGProperties(this._drawOutlines.getPathResizedSVGProperties(b(this, V, Qu).call(this)), {
      bbox: b(this, V, Xo).call(this)
    })), b(this, V, zg).call(this);
  }
  _onTranslating(e, s) {
    var i;
    (i = this.parent) == null || i.drawLayer.updateProperties(this._drawId, {
      bbox: b(this, V, Xo).call(this)
    });
  }
  _onTranslated() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, q._mergeSVGProperties(this._drawOutlines.getPathTranslatedSVGProperties(b(this, V, Qu).call(this), this.parentDimensions), {
      bbox: b(this, V, Xo).call(this)
    }));
  }
  _onStartDragging() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !0
      }
    });
  }
  _onStopDragging() {
    var e;
    (e = this.parent) == null || e.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: !1
      }
    });
  }
  get _mustBeDisabledOnCommit() {
    return !0;
  }
  commit() {
    super.commit(), this._mustBeDisabledOnCommit && (this.disableEditMode(), this.disableEditing());
  }
  disableEditing() {
    super.disableEditing(), this.div.classList.toggle("disabled", !0);
  }
  enableEditing() {
    super.enableEditing(), this.div.classList.toggle("disabled", !1);
  }
  getBaseTranslation() {
    return [0, 0];
  }
  get isResizable() {
    return !0;
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, n(this, lh) && (u(this, lh, !1), this.commit(), this.parent.setSelected(this), e && this.isOnScreen && this.div.focus());
  }
  remove() {
    this._uiManager.removeShouldRescale(this), b(this, V, Wg).call(this), super.remove();
  }
  rebuild() {
    this.parent && (super.rebuild(), this.div !== null && (b(this, V, ec).call(this), b(this, V, sc).call(this, this._drawOutlines.box), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(e) {
    var i;
    let s = !1;
    this.parent && !e ? (this._uiManager.removeShouldRescale(this), b(this, V, Wg).call(this)) : e && (this._uiManager.addShouldRescale(this), b(this, V, ec).call(this, e), s = !this.parent && ((i = this.div) == null ? void 0 : i.classList.contains("selectedEditor"))), super.setParent(e), b(this, V, Vg).call(this), s && this.select();
  }
  rotate(e = this.parentRotation) {
    if (!this.parent || this._drawId === null)
      return;
    const s = (e - this._drawRotation + 360) % 360;
    this.parent.drawLayer.updateProperties(this._drawId, q._mergeSVGProperties({
      bbox: b(this, V, Xo).call(this, e)
    }, this._drawOutlines.updateRotation(s))), b(this, V, zg).call(this, s);
  }
  show(e = this._isVisible) {
    super.show(e), b(this, V, Vg).call(this);
  }
  select() {
    super.select(), b(this, V, tc).call(this, {
      hovered: !1,
      selected: !0
    });
  }
  unselect() {
    super.unselect(), b(this, V, tc).call(this, {
      selected: !1
    });
  }
  pointerover() {
    this.isSelected || b(this, V, tc).call(this, {
      hovered: !0
    });
  }
  pointerleave() {
    this.isSelected || b(this, V, tc).call(this, {
      hovered: !1
    });
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    const e = this._drawOutlines.updateParentDimensions(this.parentDimensions, this.parent.scale);
    e && b(this, V, sc).call(this, e);
  }
  static onScaleChangingWhenDrawing() {
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    this._isCopy && (e = this.x, s = this.y);
    const i = super.render();
    this.constructor._hasDrawClass && i.classList.add("draw");
    const r = u(this, oh, document.createElement("div"));
    return i.append(r), r.setAttribute("aria-hidden", "true"), r.className = "internal", this._clipPathId && (r.style.clipPath = this._clipPathId), Db(this, r, ["pointerover", "pointerleave"]), this.setDims(), this._uiManager.addShouldRescale(this), this.disableEditing(), this._isCopy && this._moveAfterPaste(e, s), i;
  }
  static createDrawerInstance(e) {
    st("Not implemented");
  }
  static _getDrawingTarget(e, {
    target: s
  }) {
    return s;
  }
  static _getPointerCoords({
    offsetX: e,
    offsetY: s,
    clientX: i,
    clientY: r
  }, a = null) {
    if (!a)
      return [e, s];
    let o = i - a.clientX, l = r - a.clientY;
    switch (this._currentParent.viewport.rotation) {
      case 90:
        [o, l] = [l, -o];
        break;
      case 180:
        [o, l] = [-o, -l];
        break;
      case 270:
        [o, l] = [-l, o];
        break;
    }
    return [a.offsetX + o, a.offsetY + l];
  }
  static _addDrawingListeners(e, s) {
  }
  static _endDrawingSession(e = !1) {
    return this._currentParent.endDrawingSession(e);
  }
  static startDrawing(e, s, i, r) {
    var C;
    const {
      pointerId: a,
      pointerType: o
    } = r;
    if (we.isInitializedAndDifferentPointerType(o))
      return;
    const l = this._getDrawingTarget(e, r), [h, c] = this._getPointerCoords(r), {
      viewport: {
        rotation: d
      }
    } = e, {
      x: f,
      y: m,
      width: y,
      height: A
    } = l.getBoundingClientRect(), w = u(q, wo, new AbortController()), v = e.combinedSignal(w);
    if (we.setPointer(o, a), window.addEventListener("pointerup", (x) => {
      we.isSamePointerIdOrRemove(x.pointerId) && this._endDraw(x);
    }, {
      signal: v
    }), window.addEventListener("pointercancel", (x) => {
      we.isSamePointerIdOrRemove(x.pointerId) && this._endDrawingSession();
    }, {
      signal: v
    }), window.addEventListener("pointerdown", (x) => {
      we.isSamePointerType(x.pointerType) && (we.initializeAndAddPointerId(x.pointerId), n(q, Wt).isCancellable() && (n(q, Wt).removeLastElement(), n(q, Wt).isEmpty() ? this._endDrawingSession(!0) : this._endDraw(null)));
    }, {
      capture: !0,
      passive: !1,
      signal: v
    }), window.addEventListener("contextmenu", Us, {
      signal: v
    }), l.addEventListener("pointermove", this._drawMove.bind(this), {
      signal: v
    }), l.addEventListener("touchmove", (x) => {
      we.isSameTimeStamp(x.timeStamp) && Kt(x);
    }, {
      signal: v
    }), this._addDrawingListeners(l, v), e.toggleDrawing(), (C = s._editorUndoBar) == null || C.hide(), n(q, Wt)) {
      e.drawLayer.updateProperties(this._currentDrawId, n(q, Wt).startNew(h, c, y, A, d));
      return;
    }
    s.updateUIForDefaultProperties(this), u(q, Wt, this.createDrawerInstance({
      x: h,
      y: c,
      box: [f, m, y, A],
      rotation: d,
      parent: e,
      isLTR: i
    })), u(q, vo, this.getDefaultDrawingOptions()), this._currentParent = e;
    const {
      id: S,
      clipPathId: E
    } = e.drawLayer.draw(this._mergeSVGProperties(n(q, vo).toSVGProperties(), n(q, Wt).defaultSVGProperties), !0, this._hasClipPath);
    this._currentDrawId = S, u(q, hh, this._hasClipPath ? E : null);
  }
  static _drawMove(e) {
    var r;
    if (we.isSameTimeStamp(e.timeStamp), !n(q, Wt) || !we.isSamePointerId(e.pointerId))
      return;
    if (we.isUsingMultiplePointers()) {
      this._endDraw(e);
      return;
    }
    let s;
    const i = (r = e.getCoalescedEvents) == null ? void 0 : r.call(e);
    if (i != null && i.length) {
      const a = [];
      for (const o of i)
        a.push(...this._getPointerCoords(o, e));
      s = n(q, Wt).addPoints(a);
    } else
      s = n(q, Wt).add(...this._getPointerCoords(e));
    this._currentParent.drawLayer.updateProperties(this._currentDrawId, s), we.setTimeStamp(e.timeStamp), Kt(e);
  }
  static _cleanup(e) {
    e && (this._currentDrawId = -1, this._currentParent = null, u(q, Wt, null), u(q, vo, null), u(q, hh, null), we.clearTimeStamp()), n(q, wo) && (n(q, wo).abort(), u(q, wo, null), we.clearPointerIds());
  }
  static _endDraw(e) {
    const s = this._currentParent;
    if (s) {
      if (s.toggleDrawing(!0), this._cleanup(!1), s.drawLayer.updateProperties(this._currentDrawId, (e == null ? void 0 : e.target) === s.div ? n(q, Wt).end(...this._getPointerCoords(e)) : n(q, Wt).end()), this.supportMultipleDrawings) {
        const i = n(q, Wt), r = this._currentDrawId, a = i.getLastElement();
        s.addCommands({
          cmd: () => {
            s.drawLayer.updateProperties(r, i.setLastElement(a));
          },
          undo: () => {
            s.drawLayer.updateProperties(r, i.removeLastElement());
          },
          mustExec: !1,
          type: et.DRAW_STEP
        });
        return;
      }
      this.endDrawing(!1);
    }
  }
  static endDrawing(e) {
    const s = this._currentParent;
    if (!s)
      return null;
    if (s.toggleDrawing(!0), s.cleanUndoStack(et.DRAW_STEP), !n(q, Wt).isEmpty()) {
      const {
        pageDimensions: [i, r],
        scale: a
      } = s, o = s.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, !1, {
        drawId: this._currentDrawId,
        clipPathId: n(q, hh),
        drawOutlines: n(q, Wt).getOutlines(i * a, r * a, a, this._INNER_MARGIN),
        drawingOptions: n(q, vo),
        mustBeCommitted: !e
      });
      return this._cleanup(!0), o;
    }
    return s.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
  }
  createDrawingOptions(e) {
  }
  static deserializeDraw(e, s, i, r, a, o, l) {
    st("Not implemented");
  }
  static async deserialize(e, s, i) {
    var d, f;
    const {
      rawDims: {
        pageWidth: r,
        pageHeight: a,
        pageX: o,
        pageY: l
      }
    } = s.viewport, h = this.deserializeDraw(o, l, r, a, this._INNER_MARGIN, e, i), c = await super.deserialize(e, s, i);
    return c.createDrawingOptions(e), b(d = c, V, Ug).call(d, {
      drawOutlines: h
    }), b(f = c, V, ec).call(f), c.onScaleChanging(), c.rotate(), c;
  }
  serializeDraw(e) {
    const [s, i] = this.pageTranslation, [r, a] = this.pageDimensions;
    return this._drawOutlines.serialize([s, i, r, a], e);
  }
  renderAnnotationElement(e) {
    return e.updateEdited({
      rect: this.getPDFRect()
    }), null;
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
};
oh = new WeakMap(), lh = new WeakMap(), Wt = new WeakMap(), wo = new WeakMap(), vo = new WeakMap(), hh = new WeakMap(), V = new WeakSet(), Ug = function({
  drawOutlines: e,
  drawId: s,
  drawingOptions: i,
  clipPathId: r
}) {
  this._drawOutlines = e, this._drawingOptions || (this._drawingOptions = i), this.annotationElementId || this._uiManager.a11yAlert(gt._l10nAlert[this.editorType]), s >= 0 ? (this._drawId = s, this._clipPathId = r ?? null, this.parent.drawLayer.finalizeDraw(s, e.defaultProperties), b(this, V, $g).call(this, this.parent)) : this._drawId = b(this, V, Gg).call(this, e, this.parent), b(this, V, sc).call(this, e.box);
}, Gg = function(e, s) {
  const {
    id: i,
    clipPathId: r
  } = s.drawLayer.draw(q._mergeSVGProperties(this._drawingOptions.toSVGProperties(), e.defaultSVGProperties), !1, this.constructor._hasClipPath);
  return this.constructor._hasClipPath && (this._clipPathId = r), b(this, V, $g).call(this, s), i;
}, $g = function(e) {
  const s = this._drawOutlines.getFocusSVGProperties(n(this, V, jg));
  s && (this._focusDrawId = e.drawLayer.drawOutline(s, this._drawOutlines.focusMustRemoveSelfIntersections));
}, zg = function(e = n(this, V, jg)) {
  var s;
  this._focusDrawId !== null && ((s = this.parent) == null || s.drawLayer.updateProperties(this._focusDrawId, this._drawOutlines.getFocusSVGProperties(e)));
}, tc = function(e) {
  var s;
  this._focusDrawId !== null && ((s = this.parent) == null || s.drawLayer.updateProperties(this._focusDrawId, {
    rootClass: e
  }));
}, Vg = function() {
  const {
    parent: e,
    _drawId: s,
    _focusDrawId: i,
    _isVisible: r
  } = this;
  if (!e || s === null)
    return;
  const a = {
    hidden: !r
  };
  e.drawLayer.updateProperties(s, {
    rootClass: a
  }), i !== null && e.drawLayer.updateProperties(i, {
    rootClass: a
  });
}, jg = function() {
  return (this.parentRotation - this._drawRotation + 360) % 360;
}, Wg = function() {
  if (this._drawId === null || !this.parent)
    return;
  const {
    drawLayer: e
  } = this.parent;
  e.remove(this._drawId), this._drawId = null, this._focusDrawId !== null && (e.remove(this._focusDrawId), this._focusDrawId = null), this._drawingOptions.reset();
}, ec = function(e = this.parent) {
  if (!(this._drawId !== null && this.parent === e)) {
    if (this._drawId !== null) {
      const {
        drawLayer: s
      } = this.parent;
      s.updateParent(this._drawId, e.drawLayer), this._focusDrawId !== null && s.updateParent(this._focusDrawId, e.drawLayer);
      return;
    }
    this._drawingOptions.updateAll(), this._drawId = b(this, V, Gg).call(this, this._drawOutlines, e), this._clipPathId && n(this, oh) && (n(this, oh).style.clipPath = this._clipPathId);
  }
}, pA = function([e, s, i, r]) {
  const {
    parentDimensions: [a, o],
    _drawRotation: l
  } = this;
  switch (l) {
    case 90:
      return [s, 1 - e, i * (o / a), r * (a / o)];
    case 180:
      return [1 - e, 1 - s, i, r];
    case 270:
      return [1 - s, e, i * (o / a), r * (a / o)];
    default:
      return [e, s, i, r];
  }
}, Qu = function() {
  const {
    x: e,
    y: s,
    width: i,
    height: r,
    parentDimensions: [a, o],
    _drawRotation: l
  } = this;
  switch (l) {
    case 90:
      return [1 - s, e, i * (a / o), r * (o / a)];
    case 180:
      return [1 - e, 1 - s, i, r];
    case 270:
      return [s, 1 - e, i * (a / o), r * (o / a)];
    default:
      return [e, s, i, r];
  }
}, sc = function(e) {
  [this.x, this.y, this.width, this.height] = b(this, V, pA).call(this, e), this.div && (this.fixAndSetPosition(), this.setDims()), this._onResized();
}, Xo = function(e = this.parentRotation) {
  const {
    x: s,
    y: i,
    width: r,
    height: a,
    _drawRotation: o,
    parentDimensions: [l, h]
  } = this;
  switch ((o * 4 + e) / 90) {
    case 1:
      return [1 - i - a, s, a, r];
    case 2:
      return [1 - s - r, 1 - i - a, r, a];
    case 3:
      return [i, 1 - s - r, a, r];
    case 4:
      return [s, i - r * (l / h), a * (h / l), r * (l / h)];
    case 5:
      return [1 - i, s, r * (l / h), a * (h / l)];
    case 6:
      return [1 - s - a * (h / l), 1 - i, a * (h / l), r * (l / h)];
    case 7:
      return [i - r * (l / h), 1 - s - a * (h / l), r * (l / h), a * (h / l)];
    case 8:
      return [s - r, i - a, r, a];
    case 9:
      return [1 - i, s - r, a, r];
    case 10:
      return [1 - s, 1 - i, r, a];
    case 11:
      return [i - a, 1 - s, a, r];
    case 12:
      return [s - a * (h / l), i, a * (h / l), r * (l / h)];
    case 13:
      return [1 - i - r * (l / h), s - a * (h / l), r * (l / h), a * (h / l)];
    case 14:
      return [1 - s, 1 - i - r * (l / h), a * (h / l), r * (l / h)];
    case 15:
      return [i, 1 - s, r * (l / h), a * (h / l)];
    default:
      return [s, i, r, a];
  }
}, T(q, "_currentDrawId", -1), T(q, "_currentParent", null), g(q, Wt, null), g(q, wo, null), g(q, vo, null), g(q, hh, null), T(q, "_INNER_MARGIN", 3);
let wc = q;
class O {
  constructor() {
    T(this, "focusOutline", null);
  }
  toSVGPath() {
    st("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    st("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    st("Abstract method `serialize` must be implemented.");
  }
  get defaultSVGProperties() {
    st("Abstract getter `defaultSVGProperties` must be implemented.");
  }
  get defaultProperties() {
    return this.defaultSVGProperties;
  }
  getFocusSVGProperties(t) {
    return null;
  }
  get focusMustRemoveSelfIntersections() {
    return !1;
  }
  updateProperty(t, e) {
    return null;
  }
  updateParentDimensions(t, e) {
    return null;
  }
  serializeQuadPoints(t, e) {
    return null;
  }
  updateRotation(t) {
    return {};
  }
  getPathResizingSVGProperties(t) {
    return {};
  }
  getPathResizedSVGProperties(t) {
    return {};
  }
  getPathTranslatedSVGProperties(t, e) {
    return {};
  }
  static _rotateBox([t, e, s, i], r) {
    switch (r) {
      case 90:
        return [1 - e - i, t, i, s];
      case 180:
        return [1 - t - s, 1 - e - i, s, i];
      case 270:
        return [e, 1 - t - s, i, s];
    }
    return [t, e, s, i];
  }
  static _rescale(t, e, s, i, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2)
      a[o] = e + t[o] * i, a[o + 1] = s + t[o + 1] * r;
    return a;
  }
  static _rescaleAndSwap(t, e, s, i, r, a) {
    a || (a = new Float32Array(t.length));
    for (let o = 0, l = t.length; o < l; o += 2)
      a[o] = e + t[o + 1] * i, a[o + 1] = s + t[o] * r;
    return a;
  }
  static _translate(t, e, s, i) {
    i || (i = new Float32Array(t.length));
    for (let r = 0, a = t.length; r < a; r += 2)
      i[r] = e + t[r], i[r + 1] = s + t[r + 1];
    return i;
  }
  static svgRound(t) {
    return Math.round(t * 1e4);
  }
  static _normalizePoint(t, e, s, i, r) {
    switch (r) {
      case 90:
        return [1 - e / s, t / i];
      case 180:
        return [1 - t / s, 1 - e / i];
      case 270:
        return [e / s, 1 - t / i];
      default:
        return [t / s, e / i];
    }
  }
  static createBezierPoints(t, e, s, i, r, a) {
    return [(t + 5 * s) / 6, (e + 5 * i) / 6, (5 * s + r) / 6, (5 * i + a) / 6, (s + r) / 2, (i + a) / 2];
  }
}
T(O, "PRECISION", 1e-4);
var hs, Fs, ch, dh, Zs, tt, So, Eo, $d, zd, uh, fh, Pi, Vd, zf, Vf, te, ic, gA, mA, bA, yA, AA, wA;
const Xi = class Xi {
  constructor(t, e, s, i, r, a, o = 0) {
    g(this, te);
    g(this, hs);
    g(this, Fs, []);
    g(this, ch);
    g(this, dh);
    g(this, Zs, []);
    g(this, tt, new Float32Array(18));
    g(this, So);
    g(this, Eo);
    g(this, $d);
    g(this, zd);
    g(this, uh);
    g(this, fh);
    g(this, Pi, []);
    u(this, hs, s), u(this, fh, r * i), u(this, dh, a), n(this, tt).set([NaN, NaN, NaN, NaN, t, e], 6), u(this, ch, o), u(this, zd, n(Xi, Vd) * i), u(this, $d, n(Xi, Vf) * i), u(this, uh, i), n(this, Pi).push(t, e);
  }
  isEmpty() {
    return isNaN(n(this, tt)[8]);
  }
  isCancellable() {
    return n(this, Pi).length <= 10;
  }
  removeLastElement() {
    return n(this, tt).fill(NaN), n(this, Zs).length = n(this, Fs).length = n(this, Pi).length = 0, {
      path: {
        d: ""
      }
    };
  }
  add(t, e) {
    var P;
    u(this, So, t), u(this, Eo, e);
    const [s, i, r, a] = n(this, hs);
    let [o, l, h, c] = n(this, tt).subarray(8, 12);
    const d = t - h, f = e - c, m = Math.hypot(d, f);
    if (m < n(this, $d))
      return !1;
    const y = m - n(this, zd), A = y / m, w = A * d, v = A * f;
    let S = o, E = l;
    o = h, l = c, h += w, c += v, (P = n(this, Pi)) == null || P.push(t, e);
    const C = -v / y, x = w / y, _ = C * n(this, fh), k = x * n(this, fh);
    return n(this, tt).set(n(this, tt).subarray(2, 8), 0), n(this, tt).set([h + _, c + k], 4), n(this, tt).set(n(this, tt).subarray(14, 18), 12), n(this, tt).set([h - _, c - k], 16), isNaN(n(this, tt)[6]) ? (n(this, Zs).length === 0 && (n(this, tt).set([o + _, l + k], 2), n(this, Zs).push(NaN, NaN, NaN, NaN, (o + _ - s) / r, (l + k - i) / a), n(this, tt).set([o - _, l - k], 14), n(this, Fs).push(NaN, NaN, NaN, NaN, (o - _ - s) / r, (l - k - i) / a)), n(this, tt).set([S, E, o, l, h, c], 6), !this.isEmpty()) : (n(this, tt).set([S, E, o, l, h, c], 6), Math.abs(Math.atan2(E - l, S - o) - Math.atan2(v, w)) < Math.PI / 2 ? ([o, l, h, c] = n(this, tt).subarray(2, 6), n(this, Zs).push(NaN, NaN, NaN, NaN, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), [o, l, S, E] = n(this, tt).subarray(14, 18), n(this, Fs).push(NaN, NaN, NaN, NaN, ((S + o) / 2 - s) / r, ((E + l) / 2 - i) / a), !0) : ([S, E, o, l, h, c] = n(this, tt).subarray(0, 6), n(this, Zs).push(((S + 5 * o) / 6 - s) / r, ((E + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / r, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), [h, c, o, l, S, E] = n(this, tt).subarray(12, 18), n(this, Fs).push(((S + 5 * o) / 6 - s) / r, ((E + 5 * l) / 6 - i) / a, ((5 * o + h) / 6 - s) / r, ((5 * l + c) / 6 - i) / a, ((o + h) / 2 - s) / r, ((l + c) / 2 - i) / a), !0));
  }
  toSVGPath() {
    if (this.isEmpty())
      return "";
    const t = n(this, Zs), e = n(this, Fs);
    if (isNaN(n(this, tt)[6]) && !this.isEmpty())
      return b(this, te, gA).call(this);
    const s = [];
    s.push(`M${t[4]} ${t[5]}`);
    for (let i = 6; i < t.length; i += 6)
      isNaN(t[i]) ? s.push(`L${t[i + 4]} ${t[i + 5]}`) : s.push(`C${t[i]} ${t[i + 1]} ${t[i + 2]} ${t[i + 3]} ${t[i + 4]} ${t[i + 5]}`);
    b(this, te, bA).call(this, s);
    for (let i = e.length - 6; i >= 6; i -= 6)
      isNaN(e[i]) ? s.push(`L${e[i + 4]} ${e[i + 5]}`) : s.push(`C${e[i]} ${e[i + 1]} ${e[i + 2]} ${e[i + 3]} ${e[i + 4]} ${e[i + 5]}`);
    return b(this, te, mA).call(this, s), s.join(" ");
  }
  newFreeDrawOutline(t, e, s, i, r, a) {
    return new vA(t, e, s, i, r, a);
  }
  getOutlines() {
    var d;
    const t = n(this, Zs), e = n(this, Fs), s = n(this, tt), [i, r, a, o] = n(this, hs), l = new Float32Array((((d = n(this, Pi)) == null ? void 0 : d.length) ?? 0) + 2);
    for (let f = 0, m = l.length - 2; f < m; f += 2)
      l[f] = (n(this, Pi)[f] - i) / a, l[f + 1] = (n(this, Pi)[f + 1] - r) / o;
    if (l[l.length - 2] = (n(this, So) - i) / a, l[l.length - 1] = (n(this, Eo) - r) / o, isNaN(s[6]) && !this.isEmpty())
      return b(this, te, yA).call(this, l);
    const h = new Float32Array(n(this, Zs).length + 24 + n(this, Fs).length);
    let c = t.length;
    for (let f = 0; f < c; f += 2) {
      if (isNaN(t[f])) {
        h[f] = h[f + 1] = NaN;
        continue;
      }
      h[f] = t[f], h[f + 1] = t[f + 1];
    }
    c = b(this, te, wA).call(this, h, c);
    for (let f = e.length - 6; f >= 6; f -= 6)
      for (let m = 0; m < 6; m += 2) {
        if (isNaN(e[f + m])) {
          h[c] = h[c + 1] = NaN, c += 2;
          continue;
        }
        h[c] = e[f + m], h[c + 1] = e[f + m + 1], c += 2;
      }
    return b(this, te, AA).call(this, h, c), this.newFreeDrawOutline(h, l, n(this, hs), n(this, uh), n(this, ch), n(this, dh));
  }
};
hs = new WeakMap(), Fs = new WeakMap(), ch = new WeakMap(), dh = new WeakMap(), Zs = new WeakMap(), tt = new WeakMap(), So = new WeakMap(), Eo = new WeakMap(), $d = new WeakMap(), zd = new WeakMap(), uh = new WeakMap(), fh = new WeakMap(), Pi = new WeakMap(), Vd = new WeakMap(), zf = new WeakMap(), Vf = new WeakMap(), te = new WeakSet(), ic = function() {
  const t = n(this, tt).subarray(4, 6), e = n(this, tt).subarray(16, 18), [s, i, r, a] = n(this, hs);
  return [(n(this, So) + (t[0] - e[0]) / 2 - s) / r, (n(this, Eo) + (t[1] - e[1]) / 2 - i) / a, (n(this, So) + (e[0] - t[0]) / 2 - s) / r, (n(this, Eo) + (e[1] - t[1]) / 2 - i) / a];
}, gA = function() {
  const [t, e, s, i] = n(this, hs), [r, a, o, l] = b(this, te, ic).call(this);
  return `M${(n(this, tt)[2] - t) / s} ${(n(this, tt)[3] - e) / i} L${(n(this, tt)[4] - t) / s} ${(n(this, tt)[5] - e) / i} L${r} ${a} L${o} ${l} L${(n(this, tt)[16] - t) / s} ${(n(this, tt)[17] - e) / i} L${(n(this, tt)[14] - t) / s} ${(n(this, tt)[15] - e) / i} Z`;
}, mA = function(t) {
  const e = n(this, Fs);
  t.push(`L${e[4]} ${e[5]} Z`);
}, bA = function(t) {
  const [e, s, i, r] = n(this, hs), a = n(this, tt).subarray(4, 6), o = n(this, tt).subarray(16, 18), [l, h, c, d] = b(this, te, ic).call(this);
  t.push(`L${(a[0] - e) / i} ${(a[1] - s) / r} L${l} ${h} L${c} ${d} L${(o[0] - e) / i} ${(o[1] - s) / r}`);
}, yA = function(t) {
  const e = n(this, tt), [s, i, r, a] = n(this, hs), [o, l, h, c] = b(this, te, ic).call(this), d = new Float32Array(36);
  return d.set([NaN, NaN, NaN, NaN, (e[2] - s) / r, (e[3] - i) / a, NaN, NaN, NaN, NaN, (e[4] - s) / r, (e[5] - i) / a, NaN, NaN, NaN, NaN, o, l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, (e[16] - s) / r, (e[17] - i) / a, NaN, NaN, NaN, NaN, (e[14] - s) / r, (e[15] - i) / a], 0), this.newFreeDrawOutline(d, t, n(this, hs), n(this, uh), n(this, ch), n(this, dh));
}, AA = function(t, e) {
  const s = n(this, Fs);
  return t.set([NaN, NaN, NaN, NaN, s[4], s[5]], e), e += 6;
}, wA = function(t, e) {
  const s = n(this, tt).subarray(4, 6), i = n(this, tt).subarray(16, 18), [r, a, o, l] = n(this, hs), [h, c, d, f] = b(this, te, ic).call(this);
  return t.set([NaN, NaN, NaN, NaN, (s[0] - r) / o, (s[1] - a) / l, NaN, NaN, NaN, NaN, h, c, NaN, NaN, NaN, NaN, d, f, NaN, NaN, NaN, NaN, (i[0] - r) / o, (i[1] - a) / l], e), e += 24;
}, g(Xi, Vd, 8), g(Xi, zf, 2), g(Xi, Vf, n(Xi, Vd) + n(Xi, zf));
let bf = Xi;
var ph, Mi, Cn, jd, ti, Wd, Lt, jf, SA;
class vA extends O {
  constructor(e, s, i, r, a, o) {
    super();
    g(this, jf);
    g(this, ph);
    g(this, Mi, new Float32Array(4));
    g(this, Cn);
    g(this, jd);
    g(this, ti);
    g(this, Wd);
    g(this, Lt);
    u(this, Lt, e), u(this, ti, s), u(this, ph, i), u(this, Wd, r), u(this, Cn, a), u(this, jd, o), this.firstPoint = [NaN, NaN], this.lastPoint = [NaN, NaN], b(this, jf, SA).call(this, o);
    const [l, h, c, d] = n(this, Mi);
    for (let f = 0, m = e.length; f < m; f += 2)
      e[f] = (e[f] - l) / c, e[f + 1] = (e[f + 1] - h) / d;
    for (let f = 0, m = s.length; f < m; f += 2)
      s[f] = (s[f] - l) / c, s[f + 1] = (s[f + 1] - h) / d;
  }
  toSVGPath() {
    const e = [`M${n(this, Lt)[4]} ${n(this, Lt)[5]}`];
    for (let s = 6, i = n(this, Lt).length; s < i; s += 6) {
      if (isNaN(n(this, Lt)[s])) {
        e.push(`L${n(this, Lt)[s + 4]} ${n(this, Lt)[s + 5]}`);
        continue;
      }
      e.push(`C${n(this, Lt)[s]} ${n(this, Lt)[s + 1]} ${n(this, Lt)[s + 2]} ${n(this, Lt)[s + 3]} ${n(this, Lt)[s + 4]} ${n(this, Lt)[s + 5]}`);
    }
    return e.push("Z"), e.join(" ");
  }
  serialize([e, s, i, r], a) {
    const o = i - e, l = r - s;
    let h, c;
    switch (a) {
      case 0:
        h = O._rescale(n(this, Lt), e, r, o, -l), c = O._rescale(n(this, ti), e, r, o, -l);
        break;
      case 90:
        h = O._rescaleAndSwap(n(this, Lt), e, s, o, l), c = O._rescaleAndSwap(n(this, ti), e, s, o, l);
        break;
      case 180:
        h = O._rescale(n(this, Lt), i, s, -o, l), c = O._rescale(n(this, ti), i, s, -o, l);
        break;
      case 270:
        h = O._rescaleAndSwap(n(this, Lt), i, r, -o, -l), c = O._rescaleAndSwap(n(this, ti), i, r, -o, -l);
        break;
    }
    return {
      outline: Array.from(h),
      points: [Array.from(c)]
    };
  }
  get box() {
    return n(this, Mi);
  }
  newOutliner(e, s, i, r, a, o, l = 0) {
    return new bf(e, s, i, r, a, o, l);
  }
  updateThickness(e) {
    const s = this.getNewOutline(e);
    return u(this, Lt, n(s, Lt)), u(this, ti, n(s, ti)), n(this, Mi).set(n(s, Mi)), this.firstPoint = s.firstPoint, this.lastPoint = s.lastPoint, n(this, Mi);
  }
  getNewOutline(e, s) {
    const [i, r, a, o] = n(this, Mi), [l, h, c, d] = n(this, ph), f = a * c, m = o * d, y = i * c + l, A = r * d + h, w = n(this, ti), v = this.newOutliner(w[0] * f + y, w[1] * m + A, n(this, ph), n(this, Wd), e, n(this, jd), s ?? n(this, Cn));
    for (let S = 2, E = w.length; S < E; S += 2)
      v.add(w[S] * f + y, w[S + 1] * m + A);
    return v.getOutlines();
  }
}
ph = new WeakMap(), Mi = new WeakMap(), Cn = new WeakMap(), jd = new WeakMap(), ti = new WeakMap(), Wd = new WeakMap(), Lt = new WeakMap(), jf = new WeakSet(), SA = function(e) {
  const s = n(this, Lt);
  let i = s[4], r = s[5];
  const a = [i, r, i, r];
  let o = i, l = r, h = i, c = r;
  const d = e ? Math.max : Math.min, f = new Float32Array(4);
  for (let y = 6, A = s.length; y < A; y += 6) {
    const w = s[y + 4], v = s[y + 5];
    isNaN(s[y]) ? (I.pointBoundingBox(w, v, a), l > v ? (o = w, l = v) : l === v && (o = d(o, w)), c < v ? (h = w, c = v) : c === v && (h = d(h, w))) : (f.set(Ui, 0), I.bezierBoundingBox(i, r, ...s.slice(y, y + 6), f), I.rectBoundingBox(...f, a), l > f[1] ? (o = f[0], l = f[1]) : l === f[1] && (o = d(o, f[0])), c < f[3] ? (h = f[2], c = f[3]) : c === f[3] && (h = d(h, f[2]))), i = w, r = v;
  }
  const m = n(this, Mi);
  m[0] = a[0] - n(this, Cn), m[1] = a[1] - n(this, Cn), m[2] = a[2] - a[0] + 2 * n(this, Cn), m[3] = a[3] - a[1] + 2 * n(this, Cn), this.firstPoint = [o, l], this.lastPoint = [h, c];
};
function EA(p) {
  return {
    bbox: p.box,
    root: {
      viewBox: "0 0 1 1"
    },
    rootClass: {
      highlight: !0,
      free: p.isFree
    },
    path: {
      d: p.toSVGPath()
    }
  };
}
function CA(p, t) {
  const {
    focusOutline: e
  } = p;
  return {
    bbox: O._rotateBox(e.box, t),
    root: {
      "data-main-rotation": t
    },
    rootClass: {
      highlightOutline: !0,
      free: p.isFree
    },
    path: {
      d: e.toSVGPath()
    }
  };
}
var Xd, Yd, Kd, Mr, ei, Ne, xA, Ju, _A, TA, Yg;
class Xg {
  constructor(t, e = 0, s = 0, i = !0) {
    g(this, Ne);
    g(this, Xd);
    g(this, Yd);
    g(this, Kd);
    g(this, Mr, []);
    g(this, ei, []);
    const r = Ui.slice(), a = 10 ** -4;
    for (const {
      x: A,
      y: w,
      width: v,
      height: S
    } of t) {
      const E = Math.floor((A - e) / a) * a, C = Math.ceil((A + v + e) / a) * a, x = Math.floor((w - e) / a) * a, _ = Math.ceil((w + S + e) / a) * a, k = [E, x, _, !0], M = [C, x, _, !1];
      n(this, Mr).push(k, M), I.rectBoundingBox(E, x, C, _, r);
    }
    const o = r[2] - r[0] + 2 * s, l = r[3] - r[1] + 2 * s, h = r[0] - s, c = r[1] - s;
    let d = i ? -1 / 0 : 1 / 0, f = 1 / 0;
    const m = n(this, Mr).at(i ? -1 : -2), y = [m[0], m[2]];
    for (const A of n(this, Mr)) {
      const [w, v, S, E] = A;
      !E && i ? v < f ? (f = v, d = w) : v === f && (d = Math.max(d, w)) : E && !i && (v < f ? (f = v, d = w) : v === f && (d = Math.min(d, w))), A[0] = (w - h) / o, A[1] = (v - c) / l, A[2] = (S - c) / l;
    }
    u(this, Xd, new Float32Array([h, c, o, l])), u(this, Yd, [d, f]), u(this, Kd, y);
  }
  getOutlines() {
    n(this, Mr).sort((e, s) => e[0] - s[0] || e[1] - s[1] || e[2] - s[2]);
    const t = [];
    for (const e of n(this, Mr))
      e[3] ? (t.push(...b(this, Ne, Yg).call(this, e)), b(this, Ne, _A).call(this, e)) : (b(this, Ne, TA).call(this, e), t.push(...b(this, Ne, Yg).call(this, e)));
    return b(this, Ne, xA).call(this, t);
  }
}
Xd = new WeakMap(), Yd = new WeakMap(), Kd = new WeakMap(), Mr = new WeakMap(), ei = new WeakMap(), Ne = new WeakSet(), xA = function(t) {
  const e = [], s = /* @__PURE__ */ new Set();
  for (const r of t) {
    const [a, o, l] = r;
    e.push([a, o, r], [a, l, r]);
  }
  e.sort((r, a) => r[1] - a[1] || r[0] - a[0]);
  for (let r = 0, a = e.length; r < a; r += 2) {
    const o = e[r][2], l = e[r + 1][2];
    o.push(l), l.push(o), s.add(o), s.add(l);
  }
  const i = [];
  for (; s.size > 0; ) {
    const r = s.values().next().value;
    let [a, o, l, h, c] = r;
    s.delete(r);
    let d = a, f = o;
    const m = [a, l];
    for (i.push(m); ; ) {
      let y;
      if (s.has(h))
        y = h;
      else if (s.has(c))
        y = c;
      else
        break;
      s.delete(y), [a, o, l, h, c] = y, d !== a && (m.push(d, f, a, f === o ? o : l), d = a), f = f === o ? l : o;
    }
    m.push(d, f);
  }
  return new Kg(i, n(this, Xd), n(this, Yd), n(this, Kd));
}, Ju = function(t) {
  const e = n(this, ei);
  let s = 0, i = e.length - 1;
  for (; s <= i; ) {
    const r = s + i >> 1, a = e[r][0];
    if (a === t)
      return r;
    a < t ? s = r + 1 : i = r - 1;
  }
  return i + 1;
}, _A = function([, t, e]) {
  const s = b(this, Ne, Ju).call(this, t);
  n(this, ei).splice(s, 0, [t, e]);
}, TA = function([, t, e]) {
  const s = b(this, Ne, Ju).call(this, t);
  for (let i = s; i < n(this, ei).length; i++) {
    const [r, a] = n(this, ei)[i];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, ei).splice(i, 1);
      return;
    }
  }
  for (let i = s - 1; i >= 0; i--) {
    const [r, a] = n(this, ei)[i];
    if (r !== t)
      break;
    if (r === t && a === e) {
      n(this, ei).splice(i, 1);
      return;
    }
  }
}, Yg = function(t) {
  const [e, s, i] = t, r = [[e, s, i]], a = b(this, Ne, Ju).call(this, i);
  for (let o = 0; o < a; o++) {
    const [l, h] = n(this, ei)[o];
    for (let c = 0, d = r.length; c < d; c++) {
      const [, f, m] = r[c];
      if (!(h <= f || m <= l)) {
        if (f >= l) {
          if (m > h)
            r[c][1] = h;
          else {
            if (d === 1)
              return [];
            r.splice(c, 1), c--, d--;
          }
          continue;
        }
        r[c][2] = l, m > h && r.push([e, h, m]);
      }
    }
  }
  return r;
};
var qd, Qd, gh;
class Kg extends O {
  constructor(e, s, i, r) {
    super();
    g(this, qd);
    g(this, Qd, null);
    g(this, gh);
    u(this, gh, e), u(this, qd, s), this.firstPoint = i, this.lastPoint = r;
  }
  static build(e, s) {
    const i = new Xg(e, 1e-3).getOutlines();
    return u(i, Qd, e), i.focusOutline = new Xg(e, 25e-4, 1e-3, s).getOutlines(), i;
  }
  get isFree() {
    return !1;
  }
  get defaultSVGProperties() {
    return EA(this);
  }
  getFocusSVGProperties(e) {
    return CA(this, e);
  }
  updateRotation(e) {
    return {
      root: {
        "data-main-rotation": e
      }
    };
  }
  serializeQuadPoints([e, s], [i, r]) {
    const a = n(this, Qd), o = new Float32Array(a.length * 8);
    let l = 0;
    for (const {
      x: h,
      y: c,
      width: d,
      height: f
    } of a) {
      const m = h * i + e, y = (1 - c) * r + s;
      o[l] = o[l + 4] = m, o[l + 1] = o[l + 3] = y, o[l + 2] = o[l + 6] = m + d * i, o[l + 5] = o[l + 7] = y - f * r, l += 8;
    }
    return o;
  }
  toSVGPath() {
    const e = [];
    for (const s of n(this, gh)) {
      let [i, r] = s;
      e.push(`M${i} ${r}`);
      for (let a = 2; a < s.length; a += 2) {
        const o = s[a], l = s[a + 1];
        o === i ? (e.push(`V${l}`), r = l) : l === r && (e.push(`H${o}`), i = o);
      }
      e.push("Z");
    }
    return e.join(" ");
  }
  serialize([e, s, i, r], a) {
    const o = [], l = i - e, h = r - s;
    for (const c of n(this, gh)) {
      const d = new Array(c.length);
      for (let f = 0; f < c.length; f += 2)
        d[f] = e + c[f] * l, d[f + 1] = r - c[f + 1] * h;
      o.push(d);
    }
    return o;
  }
  get box() {
    return n(this, qd);
  }
}
qd = new WeakMap(), Qd = new WeakMap(), gh = new WeakMap();
class _m extends bf {
  newFreeDrawOutline(t, e, s, i, r, a) {
    return new qg(t, e, s, i, r, a);
  }
}
var cs, Jd;
class Xv {
  constructor(t, e, s, i, r, a, o) {
    g(this, cs);
    g(this, Jd);
    u(this, cs, new _m(t, e, s, i, r, a, o)), u(this, Jd, r);
  }
  add(t, e) {
    return n(this, cs).add(t, e) ? {
      path: {
        d: n(this, cs).toSVGPath()
      }
    } : null;
  }
  addPoints(t) {
    let e = !1;
    for (let s = 0, i = t.length; s < i; s += 2)
      e = n(this, cs).add(t[s], t[s + 1]) || e;
    return e ? {
      path: {
        d: n(this, cs).toSVGPath()
      }
    } : null;
  }
  end(t, e) {
    return t === void 0 ? null : this.add(t, e);
  }
  isEmpty() {
    return n(this, cs).isEmpty();
  }
  isCancellable() {
    return n(this, cs).isCancellable();
  }
  removeLastElement() {
    return n(this, cs).removeLastElement();
  }
  updateProperty(t, e) {
    return null;
  }
  getOutlines() {
    const t = n(this, cs).getOutlines();
    return t.buildFocusOutline(2 * n(this, Jd)), t;
  }
  get defaultSVGProperties() {
    return {
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: "0 0 1 1"
      },
      rootClass: {
        highlight: !0,
        free: !0
      },
      path: {
        d: n(this, cs).toSVGPath()
      }
    };
  }
}
cs = new WeakMap(), Jd = new WeakMap();
var Wf;
const Xf = class Xf extends vA {
  newOutliner(t, e, s, i, r, a, o = 0) {
    return new _m(t, e, s, i, r, a, o);
  }
  get isFree() {
    return !0;
  }
  buildFocusOutline(t) {
    this.focusOutline = this.getNewOutline(t / 2 + n(Xf, Wf), 25e-4);
  }
  get defaultSVGProperties() {
    return EA(this);
  }
  getFocusSVGProperties(t) {
    return CA(this, t);
  }
  get focusMustRemoveSelfIntersections() {
    return !0;
  }
  updateRotation(t) {
    return {
      root: {
        "data-main-rotation": t
      }
    };
  }
  updateProperty(t, e) {
    if (t !== "thickness")
      return null;
    const s = this.updateThickness(e / 2);
    return this.buildFocusOutline(e), s;
  }
  getPathResizedSVGProperties() {
    return {
      path: {
        d: this.toSVGPath()
      }
    };
  }
};
Wf = new WeakMap(), g(Xf, Wf, 1.5);
let qg = Xf;
class Tm extends xm {
  constructor(t = null) {
    super(), super.updateProperties(t);
  }
  updateSVGProperty(t, e) {
    t !== "thickness" && super.updateSVGProperty(t, e);
  }
  clone() {
    const t = new Tm();
    return t.updateAll(this), t;
  }
}
var mh, Zd, tu, eu, su, bh, ys, Qg, kA, Zu, PA;
const Pe = class Pe extends wc {
  constructor(e) {
    var s;
    super({
      ...e,
      name: "highlightEditor"
    });
    g(this, ys);
    g(this, mh, null);
    g(this, Zd, 0);
    g(this, tu, null);
    g(this, eu, 0);
    g(this, su, "");
    g(this, bh, "");
    u(this, mh, e.anchorNode || null), u(this, Zd, e.anchorOffset || 0), u(this, tu, e.focusNode || null), u(this, eu, e.focusOffset || 0), u(this, su, e.methodOfCreation || ((s = this._drawOutlines) != null && s.isFree ? "main_toolbar" : "")), u(this, bh, e.text || ""), this._isDraggable = !1, this.defaultL10nId = "pdfjs-editor-highlight-editor", this.rotate();
  }
  static get _keyboardManager() {
    const e = Pe.prototype;
    return R(this, "_keyboardManager", new Fo([[["ArrowLeft"], e._moveCaret, {
      args: [0]
    }], [["ArrowRight"], e._moveCaret, {
      args: [1]
    }], [["ArrowUp"], e._moveCaret, {
      args: [2]
    }], [["ArrowDown"], e._moveCaret, {
      args: [3]
    }]]));
  }
  static initialize(e, s) {
    var i;
    gt.initialize(e, s), this._defaultDrawingOptions || (this._defaultDrawingOptions = new Tm({
      fill: ((i = s.highlightColors) == null ? void 0 : i.values().next().value) || "#fff066",
      "fill-opacity": Pe._DEFAULT_OPACITY,
      thickness: Pe._DEFAULT_THICKNESS
    }));
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get typesMap() {
    return R(this, "typesMap", /* @__PURE__ */ new Map([[et.HIGHLIGHT_COLOR, "fill"], [et.HIGHLIGHT_THICKNESS, "thickness"]]));
  }
  static get isDrawer() {
    return !1;
  }
  static get _hasClipPath() {
    return !0;
  }
  static get _hasDrawClass() {
    return !1;
  }
  _addOutlines(e) {
    const {
      boxes: s,
      drawOutlines: i
    } = e;
    !s && !i || (this._drawingOptions || (this._drawingOptions = e.drawingOptions || Pe.getDefaultDrawingOptions()), s && (e = {
      ...e,
      drawOutlines: Kg.build(s, this._uiManager.direction === "ltr")
    }), super._addOutlines(e));
  }
  get colorType() {
    return et.HIGHLIGHT_COLOR;
  }
  get color() {
    return this._drawingOptions.fill;
  }
  get opacity() {
    return this._drawingOptions["fill-opacity"];
  }
  get _opacityName() {
    return "fill-opacity";
  }
  get _drawRotation() {
    var e;
    return (e = this._drawOutlines) != null && e.isFree ? this.rotation : 0;
  }
  get isResizable() {
    return !1;
  }
  get _mustBeDisabledOnCommit() {
    return !1;
  }
  get _mustFixPosition() {
    var e;
    return !((e = this._drawOutlines) != null && e.isFree);
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: this._drawOutlines.isFree ? "free_highlight" : "highlight",
      color: this._uiManager.getNonHCMColorName(this.color),
      thickness: this._drawingOptions.thickness,
      methodOfCreation: n(this, su)
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.getNonHCMColorName(this.color)
    };
  }
  static computeTelemetryFinalData(e) {
    return {
      numberOfColors: e.get("color").size
    };
  }
  translateInPage(e, s) {
  }
  get toolbarPosition() {
    return b(this, ys, Qg).call(this, this._drawOutlines.focusOutline.lastPoint);
  }
  get commentButtonPosition() {
    return b(this, ys, Qg).call(this, this._drawOutlines.firstPoint);
  }
  updateParams(e, s) {
    switch (e) {
      case et.HIGHLIGHT_COLOR:
        this._updateColorAndOpacity(s, Pe._DEFAULT_OPACITY, e), this._reportTelemetry({
          action: "color_changed",
          color: this._uiManager.getNonHCMColorName(s)
        }, !0);
        break;
      case et.HIGHLIGHT_THICKNESS:
        super.updateParams(e, s), this._reportTelemetry({
          action: "thickness_changed",
          thickness: s
        }, !0);
        break;
    }
  }
  get propertiesToUpdate() {
    const e = super.propertiesToUpdate;
    return e.push([et.HIGHLIGHT_FREE, this._drawOutlines.isFree]), e;
  }
  get toolbarButtons() {
    return this._uiManager.highlightColors ? (this._colorPicker = new yc({
      editor: this
    }), [["colorPicker", this._colorPicker]]) : super.toolbarButtons;
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(this._drawRotation);
  }
  getRect(e, s) {
    return super.getRect(e, s, this._drawRotation);
  }
  onceAdded(e) {
    this.annotationElementId || this.parent.addUndoableEditor(this), e && this.div.focus();
  }
  remove() {
    this._reportTelemetry({
      action: "deleted"
    }), super.remove();
  }
  render() {
    if (this.div)
      return this.div;
    const e = super.render();
    return n(this, bh) && (e.setAttribute("aria-label", n(this, bh)), e.setAttribute("role", "mark")), this._drawOutlines.isFree ? e.classList.add("free") : e.addEventListener("keydown", b(this, ys, kA).bind(this), {
      signal: this._uiManager._signal
    }), this.enableEditing(), e;
  }
  _moveCaret(e) {
    switch (this.parent.unselect(this), e) {
      case 0:
      case 2:
        b(this, ys, Zu).call(this, !0);
        break;
      case 1:
      case 3:
        b(this, ys, Zu).call(this, !1);
        break;
    }
  }
  unselect() {
    super.unselect(), this._drawOutlines.isFree || b(this, ys, Zu).call(this, !1);
  }
  static createDrawerInstance({
    x: e,
    y: s,
    box: i,
    parent: r,
    isLTR: a
  }) {
    return new Xv(e, s, i, r.scale, this._defaultDrawingOptions.thickness / 2, a, 1e-3);
  }
  static _getDrawingTarget(e, {
    target: s
  }) {
    return s.closest(".textLayer");
  }
  static _getPointerCoords({
    x: e,
    y: s
  }) {
    return [e, s];
  }
  static _addDrawingListeners(e, s) {
    e.classList.add("free"), s.addEventListener("abort", () => e.classList.remove("free"), {
      once: !0
    }), window.addEventListener("blur", () => this._endDraw(null), {
      signal: s
    }), window.addEventListener("pointerdown", Kt, {
      capture: !0,
      passive: !1,
      signal: s
    });
  }
  static _endDrawingSession(e = !1) {
    return this.endDrawing(e);
  }
  createDrawingOptions({
    color: e,
    opacity: s,
    thickness: i
  }) {
    const {
      _defaultDrawingOptions: r,
      _DEFAULT_OPACITY: a
    } = Pe;
    this._drawingOptions = Pe.getDefaultDrawingOptions({
      fill: I.makeHexColor(...e),
      "fill-opacity": s || a,
      thickness: i || r.thickness
    });
  }
  static deserializeDraw(e, s, i, r, a, o, l) {
    const {
      quadPoints: h
    } = o;
    if (h) {
      const y = [];
      for (let A = 0, w = h.length; A < w; A += 8)
        y.push({
          x: (h[A] - e) / i,
          y: 1 - (h[A + 1] - s) / r,
          width: (h[A + 2] - h[A]) / i,
          height: (h[A + 1] - h[A + 5]) / r
        });
      return Kg.build(y, l.direction === "ltr");
    }
    const c = o.thickness || this._defaultDrawingOptions.thickness, d = (o.inkLists || o.outlines.points)[0], f = new _m(d[0] - e, r - (d[1] - s), [0, 0, i, r], 1, c / 2, !0, 1e-3);
    for (let y = 0, A = d.length; y < A; y += 2)
      f.add(d[y] - e, r - (d[y + 1] - s));
    const m = f.getOutlines();
    return m.buildFocusOutline(c), m;
  }
  static async deserialize(e, s, i) {
    let r = null;
    if (e instanceof rA) {
      const {
        data: {
          quadPoints: o,
          rect: l,
          rotation: h,
          id: c,
          color: d,
          opacity: f,
          popupRef: m,
          richText: y,
          contentsObj: A,
          creationDate: w,
          modificationDate: v
        },
        parent: {
          page: {
            pageNumber: S
          }
        }
      } = e;
      r = e = {
        annotationType: W.HIGHLIGHT,
        color: Array.from(d),
        opacity: f,
        quadPoints: o,
        pageIndex: S - 1,
        rect: l.slice(0),
        rotation: h,
        annotationElementId: c,
        id: c,
        deleted: !1,
        popupRef: m,
        richText: y,
        comment: (A == null ? void 0 : A.str) || null,
        creationDate: w,
        modificationDate: v
      };
    } else if (e instanceof Cm) {
      const {
        data: {
          inkLists: o,
          rect: l,
          rotation: h,
          id: c,
          color: d,
          borderStyle: {
            rawWidth: f
          },
          popupRef: m,
          richText: y,
          contentsObj: A,
          creationDate: w,
          modificationDate: v
        },
        parent: {
          page: {
            pageNumber: S
          }
        }
      } = e;
      r = e = {
        annotationType: W.HIGHLIGHT,
        color: Array.from(d),
        thickness: f,
        inkLists: o,
        pageIndex: S - 1,
        rect: l.slice(0),
        rotation: h,
        annotationElementId: c,
        id: c,
        deleted: !1,
        popupRef: m,
        richText: y,
        comment: (A == null ? void 0 : A.str) || null,
        creationDate: w,
        modificationDate: v
      };
    }
    const a = await super.deserialize(e, s, i);
    return a._initialData = r, e.comment && a.setCommentData(e), a;
  }
  serialize(e = !1) {
    if (this.isEmpty() || e)
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const s = super.serialize(e);
    return Object.assign(s, {
      color: gt._colorManager.convert(this._uiManager.getNonHCMColor(this.color)),
      opacity: this.opacity,
      thickness: this._drawingOptions.thickness,
      quadPoints: this._drawOutlines.serializeQuadPoints(this.pageTranslation, this.pageDimensions),
      outlines: this._drawOutlines.serialize(s.rect, this._drawRotation)
    }), this.addComment(s), this.annotationElementId && !b(this, ys, PA).call(this, s) ? null : (s.id = this.annotationElementId, s);
  }
  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    }), null);
  }
};
mh = new WeakMap(), Zd = new WeakMap(), tu = new WeakMap(), eu = new WeakMap(), su = new WeakMap(), bh = new WeakMap(), ys = new WeakSet(), Qg = function([e, s]) {
  const [i, r, a, o] = this._drawOutlines.box;
  return [(e - i) / a, (s - r) / o];
}, kA = function(e) {
  Pe._keyboardManager.exec(this, e);
}, Zu = function(e) {
  if (!n(this, mh))
    return;
  const s = window.getSelection();
  e ? s.setPosition(n(this, mh), n(this, Zd)) : s.setPosition(n(this, tu), n(this, eu));
}, PA = function(e) {
  const {
    color: s
  } = this._initialData;
  return this.hasEditedComment || e.color.some((i, r) => i !== s[r]);
}, T(Pe, "_DEFAULT_OPACITY", 1), T(Pe, "_DEFAULT_THICKNESS", 12), T(Pe, "_defaultDrawingOptions", null), T(Pe, "_type", "highlight"), T(Pe, "_editorType", W.HIGHLIGHT);
let yf = Pe;
var Di, Dr, Xt, fe, Co, yh, pe, Yt, Os, xo, _o, To, As, tf, ef, Jg;
class Yv {
  constructor(t, e, s, i, r, a) {
    g(this, As);
    g(this, Di, new Float64Array(6));
    g(this, Dr, new Float64Array(2));
    g(this, Xt);
    g(this, fe);
    g(this, Co);
    g(this, yh);
    g(this, pe);
    g(this, Yt, "");
    g(this, Os, 0);
    g(this, xo, new pu());
    g(this, _o);
    g(this, To);
    u(this, _o, s), u(this, To, i), u(this, Co, r), u(this, yh, a), [t, e] = b(this, As, tf).call(this, t, e);
    const o = u(this, Xt, [NaN, NaN, NaN, NaN, t, e]);
    u(this, pe, [t, e]), u(this, fe, [{
      line: o,
      points: n(this, pe)
    }]), n(this, Di).set(o, 0), n(this, Dr).set([t, e], 0);
  }
  updateProperty(t, e) {
    t === "stroke-width" && u(this, yh, e);
  }
  isEmpty() {
    var t;
    return !((t = n(this, fe)) != null && t.length);
  }
  isCancellable() {
    return n(this, pe).length <= 10;
  }
  add(t, e) {
    return b(this, As, ef).call(this, t, e) && this.toSVGPath(), {
      path: {
        d: b(this, As, Jg).call(this)
      }
    };
  }
  addPoints(t) {
    let e = !1;
    for (let s = 0, i = t.length; s < i; s += 2)
      b(this, As, ef).call(this, t[s], t[s + 1]) && (e = !0, n(this, pe).length <= 6 && (this.toSVGPath(), e = !1));
    return e && this.toSVGPath(), {
      path: {
        d: b(this, As, Jg).call(this)
      }
    };
  }
  end(t, e) {
    return t !== void 0 && b(this, As, ef).call(this, t, e) ? {
      path: {
        d: this.toSVGPath()
      }
    } : n(this, pe).length === 2 ? {
      path: {
        d: this.toSVGPath()
      }
    } : {
      path: {
        d: n(this, Yt)
      }
    };
  }
  startNew(t, e, s, i, r) {
    u(this, _o, s), u(this, To, i), u(this, Co, r), [t, e] = b(this, As, tf).call(this, t, e);
    const a = u(this, Xt, [NaN, NaN, NaN, NaN, t, e]);
    u(this, pe, [t, e]), n(this, Dr).set([t, e], 0);
    const o = n(this, fe).at(-1);
    return o && (o.line = new Float32Array(o.line), o.points = new Float32Array(o.points)), n(this, fe).push({
      line: a,
      points: n(this, pe)
    }), n(this, Di).set(a, 0), u(this, Os, 0), this.toSVGPath(), null;
  }
  getLastElement() {
    return n(this, fe).at(-1);
  }
  setLastElement(t) {
    return n(this, fe) ? (n(this, fe).push(t), u(this, Xt, t.line), u(this, pe, t.points), u(this, Os, 0), {
      path: {
        d: this.toSVGPath()
      }
    }) : n(this, xo).setLastElement(t);
  }
  removeLastElement() {
    if (!n(this, fe))
      return n(this, xo).removeLastElement();
    n(this, fe).pop(), u(this, Yt, "");
    for (let t = 0, e = n(this, fe).length; t < e; t++) {
      const {
        line: s,
        points: i
      } = n(this, fe)[t];
      u(this, Xt, s), u(this, pe, i), u(this, Os, 0), this.toSVGPath();
    }
    return {
      path: {
        d: n(this, Yt)
      }
    };
  }
  toSVGPath() {
    const t = O.svgRound(n(this, Xt)[4]), e = O.svgRound(n(this, Xt)[5]);
    if (n(this, pe).length === 2)
      return u(this, Yt, `${n(this, Yt)} M ${t} ${e} Z`), n(this, Yt);
    if (n(this, pe).length <= 6) {
      const i = n(this, Yt).lastIndexOf("M");
      u(this, Yt, `${n(this, Yt).slice(0, i)} M ${t} ${e}`), u(this, Os, 6);
    }
    if (n(this, pe).length === 4) {
      const i = O.svgRound(n(this, Xt)[10]), r = O.svgRound(n(this, Xt)[11]);
      return u(this, Yt, `${n(this, Yt)} L ${i} ${r}`), u(this, Os, 12), n(this, Yt);
    }
    const s = [];
    n(this, Os) === 0 && (s.push(`M ${t} ${e}`), u(this, Os, 6));
    for (let i = n(this, Os), r = n(this, Xt).length; i < r; i += 6) {
      const [a, o, l, h, c, d] = n(this, Xt).slice(i, i + 6).map(O.svgRound);
      s.push(`C${a} ${o} ${l} ${h} ${c} ${d}`);
    }
    return u(this, Yt, n(this, Yt) + s.join(" ")), u(this, Os, n(this, Xt).length), n(this, Yt);
  }
  getOutlines(t, e, s, i) {
    const r = n(this, fe).at(-1);
    return r.line = new Float32Array(r.line), r.points = new Float32Array(r.points), n(this, xo).build(n(this, fe), t, e, s, n(this, Co), n(this, yh), i), u(this, Di, null), u(this, Xt, null), u(this, fe, null), u(this, Yt, null), n(this, xo);
  }
  get defaultSVGProperties() {
    return {
      root: {
        viewBox: "0 0 10000 10000"
      },
      rootClass: {
        draw: !0
      },
      bbox: [0, 0, 1, 1]
    };
  }
}
Di = new WeakMap(), Dr = new WeakMap(), Xt = new WeakMap(), fe = new WeakMap(), Co = new WeakMap(), yh = new WeakMap(), pe = new WeakMap(), Yt = new WeakMap(), Os = new WeakMap(), xo = new WeakMap(), _o = new WeakMap(), To = new WeakMap(), As = new WeakSet(), tf = function(t, e) {
  return O._normalizePoint(t, e, n(this, _o), n(this, To), n(this, Co));
}, ef = function(t, e) {
  [t, e] = b(this, As, tf).call(this, t, e), n(this, Dr).set([t, e], 0);
  const [s, i, r, a] = n(this, Di).subarray(2, 6), o = t - r, l = e - a;
  return Math.hypot(n(this, _o) * o, n(this, To) * l) <= 2 ? !1 : (n(this, pe).push(t, e), isNaN(s) ? (n(this, Di).set([r, a, t, e], 2), n(this, Xt).push(NaN, NaN, NaN, NaN, t, e), !0) : (isNaN(n(this, Di)[0]) && n(this, Xt).splice(6, 6), n(this, Di).set([s, i, r, a, t, e], 0), n(this, Xt).push(...O.createBezierPoints(s, i, r, a, t, e)), !0));
}, Jg = function() {
  const t = O.svgRound(n(this, Dr)[0]), e = O.svgRound(n(this, Dr)[1]);
  if (n(this, pe).length === 2) {
    const s = O.svgRound(n(this, Xt)[4]), i = O.svgRound(n(this, Xt)[5]);
    return `${n(this, Yt)} M ${s} ${i} L ${t} ${e}`;
  }
  return `${n(this, Yt)} L ${t} ${e}`;
};
var De, iu, nu, ds, Ii, Li, Ah, wh, ko, me, ji, MA, DA, IA;
class pu extends O {
  constructor() {
    super(...arguments);
    g(this, me);
    g(this, De);
    g(this, iu, 0);
    g(this, nu);
    g(this, ds);
    g(this, Ii);
    g(this, Li);
    g(this, Ah);
    g(this, wh);
    g(this, ko);
  }
  build(e, s, i, r, a, o, l) {
    u(this, Ii, s), u(this, Li, i), u(this, Ah, r), u(this, wh, a), u(this, ko, o), u(this, nu, l ?? 0), u(this, ds, e), b(this, me, DA).call(this);
  }
  get thickness() {
    return n(this, ko);
  }
  setLastElement(e) {
    return n(this, ds).push(e), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    return n(this, ds).pop(), {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const e = [];
    for (const {
      line: s
    } of n(this, ds)) {
      if (e.push(`M${O.svgRound(s[4])} ${O.svgRound(s[5])}`), s.length === 6) {
        e.push("Z");
        continue;
      }
      if (s.length === 12 && isNaN(s[6])) {
        e.push(`L${O.svgRound(s[10])} ${O.svgRound(s[11])}`);
        continue;
      }
      for (let i = 6, r = s.length; i < r; i += 6) {
        const [a, o, l, h, c, d] = s.subarray(i, i + 6).map(O.svgRound);
        e.push(`C${a} ${o} ${l} ${h} ${c} ${d}`);
      }
    }
    return e.join("");
  }
  serialize([e, s, i, r], a) {
    const o = [], l = [], [h, c, d, f] = b(this, me, MA).call(this);
    let m, y, A, w, v, S, E, C, x;
    switch (n(this, wh)) {
      case 0:
        x = O._rescale, m = e, y = s + r, A = i, w = -r, v = e + h * i, S = s + (1 - c - f) * r, E = e + (h + d) * i, C = s + (1 - c) * r;
        break;
      case 90:
        x = O._rescaleAndSwap, m = e, y = s, A = i, w = r, v = e + c * i, S = s + h * r, E = e + (c + f) * i, C = s + (h + d) * r;
        break;
      case 180:
        x = O._rescale, m = e + i, y = s, A = -i, w = r, v = e + (1 - h - d) * i, S = s + c * r, E = e + (1 - h) * i, C = s + (c + f) * r;
        break;
      case 270:
        x = O._rescaleAndSwap, m = e + i, y = s + r, A = -i, w = -r, v = e + (1 - c - f) * i, S = s + (1 - h - d) * r, E = e + (1 - c) * i, C = s + (1 - h) * r;
        break;
    }
    for (const {
      line: _,
      points: k
    } of n(this, ds))
      o.push(x(_, m, y, A, w, a ? new Array(_.length) : null)), l.push(x(k, m, y, A, w, a ? new Array(k.length) : null));
    return {
      lines: o,
      points: l,
      rect: [v, S, E, C]
    };
  }
  static deserialize(e, s, i, r, a, {
    paths: {
      lines: o,
      points: l
    },
    rotation: h,
    thickness: c
  }) {
    const d = [];
    let f, m, y, A, w;
    switch (h) {
      case 0:
        w = O._rescale, f = -e / i, m = s / r + 1, y = 1 / i, A = -1 / r;
        break;
      case 90:
        w = O._rescaleAndSwap, f = -s / r, m = -e / i, y = 1 / r, A = 1 / i;
        break;
      case 180:
        w = O._rescale, f = e / i + 1, m = -s / r, y = -1 / i, A = 1 / r;
        break;
      case 270:
        w = O._rescaleAndSwap, f = s / r + 1, m = e / i + 1, y = -1 / r, A = -1 / i;
        break;
    }
    if (!o) {
      o = [];
      for (const S of l) {
        const E = S.length;
        if (E === 2) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, S[0], S[1]]));
          continue;
        }
        if (E === 4) {
          o.push(new Float32Array([NaN, NaN, NaN, NaN, S[0], S[1], NaN, NaN, NaN, NaN, S[2], S[3]]));
          continue;
        }
        const C = new Float32Array(3 * (E - 2));
        o.push(C);
        let [x, _, k, M] = S.subarray(0, 4);
        C.set([NaN, NaN, NaN, NaN, x, _], 0);
        for (let P = 4; P < E; P += 2) {
          const D = S[P], N = S[P + 1];
          C.set(O.createBezierPoints(x, _, k, M, D, N), (P - 2) * 3), [x, _, k, M] = [k, M, D, N];
        }
      }
    }
    for (let S = 0, E = o.length; S < E; S++)
      d.push({
        line: w(o[S].map((C) => C ?? NaN), f, m, y, A),
        points: w(l[S].map((C) => C ?? NaN), f, m, y, A)
      });
    const v = new this.prototype.constructor();
    return v.build(d, i, r, 1, h, c, a), v;
  }
  get box() {
    return n(this, De);
  }
  updateProperty(e, s) {
    return e === "stroke-width" ? b(this, me, IA).call(this, s) : null;
  }
  updateParentDimensions([e, s], i) {
    const [r, a] = b(this, me, ji).call(this);
    u(this, Ii, e), u(this, Li, s), u(this, Ah, i);
    const [o, l] = b(this, me, ji).call(this), h = o - r, c = l - a, d = n(this, De);
    return d[0] -= h, d[1] -= c, d[2] += 2 * h, d[3] += 2 * c, d;
  }
  updateRotation(e) {
    return u(this, iu, e), {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return n(this, De).map(O.svgRound).join(" ");
  }
  get defaultProperties() {
    const [e, s] = n(this, De);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${O.svgRound(e)} ${O.svgRound(s)}`
      }
    };
  }
  get rotationTransform() {
    const [, , e, s] = n(this, De);
    let i = 0, r = 0, a = 0, o = 0, l = 0, h = 0;
    switch (n(this, iu)) {
      case 90:
        r = s / e, a = -e / s, l = e;
        break;
      case 180:
        i = -1, o = -1, l = e, h = s;
        break;
      case 270:
        r = -s / e, a = e / s, h = s;
        break;
      default:
        return "";
    }
    return `matrix(${i} ${r} ${a} ${o} ${O.svgRound(l)} ${O.svgRound(h)})`;
  }
  getPathResizingSVGProperties([e, s, i, r]) {
    const [a, o] = b(this, me, ji).call(this), [l, h, c, d] = n(this, De);
    if (Math.abs(c - a) <= O.PRECISION || Math.abs(d - o) <= O.PRECISION) {
      const w = e + i / 2 - (l + c / 2), v = s + r / 2 - (h + d / 2);
      return {
        path: {
          "transform-origin": `${O.svgRound(e)} ${O.svgRound(s)}`,
          transform: `${this.rotationTransform} translate(${w} ${v})`
        }
      };
    }
    const f = (i - 2 * a) / (c - 2 * a), m = (r - 2 * o) / (d - 2 * o), y = c / i, A = d / r;
    return {
      path: {
        "transform-origin": `${O.svgRound(l)} ${O.svgRound(h)}`,
        transform: `${this.rotationTransform} scale(${y} ${A}) translate(${O.svgRound(a)} ${O.svgRound(o)}) scale(${f} ${m}) translate(${O.svgRound(-a)} ${O.svgRound(-o)})`
      }
    };
  }
  getPathResizedSVGProperties([e, s, i, r]) {
    const [a, o] = b(this, me, ji).call(this), l = n(this, De), [h, c, d, f] = l;
    if (l[0] = e, l[1] = s, l[2] = i, l[3] = r, Math.abs(d - a) <= O.PRECISION || Math.abs(f - o) <= O.PRECISION) {
      const v = e + i / 2 - (h + d / 2), S = s + r / 2 - (c + f / 2);
      for (const {
        line: E,
        points: C
      } of n(this, ds))
        O._translate(E, v, S, E), O._translate(C, v, S, C);
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${O.svgRound(e)} ${O.svgRound(s)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const m = (i - 2 * a) / (d - 2 * a), y = (r - 2 * o) / (f - 2 * o), A = -m * (h + a) + e + a, w = -y * (c + o) + s + o;
    if (m !== 1 || y !== 1 || A !== 0 || w !== 0)
      for (const {
        line: v,
        points: S
      } of n(this, ds))
        O._rescale(v, A, w, m, y, v), O._rescale(S, A, w, m, y, S);
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${O.svgRound(e)} ${O.svgRound(s)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([e, s], i) {
    const [r, a] = i, o = n(this, De), l = e - o[0], h = s - o[1];
    if (n(this, Ii) === r && n(this, Li) === a)
      for (const {
        line: c,
        points: d
      } of n(this, ds))
        O._translate(c, l, h, c), O._translate(d, l, h, d);
    else {
      const c = n(this, Ii) / r, d = n(this, Li) / a;
      u(this, Ii, r), u(this, Li, a);
      for (const {
        line: f,
        points: m
      } of n(this, ds))
        O._rescale(f, l, h, c, d, f), O._rescale(m, l, h, c, d, m);
      o[2] *= c, o[3] *= d;
    }
    return o[0] = e, o[1] = s, {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${O.svgRound(e)} ${O.svgRound(s)}`
      }
    };
  }
  get defaultSVGProperties() {
    const e = n(this, De);
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: !0
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${O.svgRound(e[0])} ${O.svgRound(e[1])}`,
        transform: this.rotationTransform || null
      },
      bbox: e
    };
  }
}
De = new WeakMap(), iu = new WeakMap(), nu = new WeakMap(), ds = new WeakMap(), Ii = new WeakMap(), Li = new WeakMap(), Ah = new WeakMap(), wh = new WeakMap(), ko = new WeakMap(), me = new WeakSet(), ji = function(e = n(this, ko)) {
  const s = n(this, nu) + e / 2 * n(this, Ah);
  return n(this, wh) % 180 === 0 ? [s / n(this, Ii), s / n(this, Li)] : [s / n(this, Li), s / n(this, Ii)];
}, MA = function() {
  const [e, s, i, r] = n(this, De), [a, o] = b(this, me, ji).call(this, 0);
  return [e + a, s + o, i - 2 * a, r - 2 * o];
}, DA = function() {
  const e = u(this, De, na.slice());
  for (const {
    line: r
  } of n(this, ds)) {
    if (r.length <= 12) {
      for (let l = 4, h = r.length; l < h; l += 6)
        I.pointBoundingBox(r[l], r[l + 1], e);
      continue;
    }
    let a = r[4], o = r[5];
    for (let l = 6, h = r.length; l < h; l += 6) {
      const [c, d, f, m, y, A] = r.subarray(l, l + 6);
      I.bezierBoundingBox(a, o, c, d, f, m, y, A, e), a = y, o = A;
    }
  }
  const [s, i] = b(this, me, ji).call(this);
  e[0] = wt(e[0] - s, 0, 1), e[1] = wt(e[1] - i, 0, 1), e[2] = wt(e[2] + s, 0, 1), e[3] = wt(e[3] + i, 0, 1), e[2] -= e[0], e[3] -= e[1];
}, IA = function(e) {
  const [s, i] = b(this, me, ji).call(this);
  u(this, ko, e);
  const [r, a] = b(this, me, ji).call(this), [o, l] = [r - s, a - i], h = n(this, De);
  return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
};
class fp extends xm {
  constructor(t) {
    super(), this._viewParameters = t, super.updateProperties({
      fill: "none",
      stroke: gt._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(t, e) {
    t === "stroke-width" && (e ?? (e = this["stroke-width"]), e *= this._viewParameters.realScale), super.updateSVGProperty(t, e);
  }
  clone() {
    const t = new fp(this._viewParameters);
    return t.updateAll(this), t;
  }
}
var Yf, LA;
const qo = class qo extends wc {
  constructor(e) {
    super({
      ...e,
      name: "inkEditor"
    });
    g(this, Yf);
    this._willKeepAspectRatio = !0, this.defaultL10nId = "pdfjs-editor-ink-editor";
  }
  static initialize(e, s) {
    gt.initialize(e, s), this._defaultDrawingOptions = new fp(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !0;
  }
  static get typesMap() {
    return R(this, "typesMap", /* @__PURE__ */ new Map([[et.INK_THICKNESS, "stroke-width"], [et.INK_COLOR, "stroke"], [et.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance({
    x: e,
    y: s,
    box: [, , i, r],
    rotation: a
  }) {
    return new Yv(e, s, i, r, a, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(e, s, i, r, a, o) {
    return pu.deserialize(e, s, i, r, a, o);
  }
  static async deserialize(e, s, i) {
    let r = null;
    if (e instanceof Cm) {
      const {
        data: {
          inkLists: o,
          rect: l,
          rotation: h,
          id: c,
          color: d,
          opacity: f,
          borderStyle: {
            rawWidth: m
          },
          popupRef: y,
          richText: A,
          contentsObj: w,
          creationDate: v,
          modificationDate: S
        },
        parent: {
          page: {
            pageNumber: E
          }
        }
      } = e;
      r = e = {
        annotationType: W.INK,
        color: Array.from(d),
        thickness: m,
        opacity: f,
        paths: {
          points: o
        },
        boxes: null,
        pageIndex: E - 1,
        rect: l.slice(0),
        rotation: h,
        annotationElementId: c,
        id: c,
        deleted: !1,
        popupRef: y,
        richText: A,
        comment: (w == null ? void 0 : w.str) || null,
        creationDate: v,
        modificationDate: S
      };
    }
    const a = await super.deserialize(e, s, i);
    return a._initialData = r, e.comment && a.setCommentData(e), a;
  }
  get toolbarButtons() {
    return this._colorPicker || (this._colorPicker = new gf(this)), [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return et.INK_COLOR;
  }
  get colorAndOpacityType() {
    return et.INK_COLOR_AND_OPACITY;
  }
  get opacityType() {
    return et.INK_OPACITY;
  }
  updateParams(e, s) {
    if (e === et.INK_COLOR_AND_OPACITY) {
      this._updateColorAndOpacity(s.color, s.opacity);
      return;
    }
    super.updateParams(e, s);
  }
  static updateDefaultParams(e, s) {
    if (e === et.INK_COLOR_AND_OPACITY) {
      super.updateDefaultParams(et.INK_COLOR, s.color), super.updateDefaultParams(et.INK_OPACITY, s.opacity);
      return;
    }
    super.updateDefaultParams(e, s);
  }
  get color() {
    return this._drawingOptions.stroke;
  }
  get opacity() {
    return this._drawingOptions["stroke-opacity"];
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    super.onScaleChanging();
    const {
      _drawId: e,
      _drawingOptions: s,
      parent: i
    } = this;
    s.updateSVGProperty("stroke-width"), i.drawLayer.updateProperties(e, s.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const e = this._currentParent;
    e && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), e.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
  }
  createDrawingOptions({
    color: e,
    thickness: s,
    opacity: i
  }) {
    this._drawingOptions = qo.getDefaultDrawingOptions({
      stroke: I.makeHexColor(...e),
      "stroke-width": s,
      "stroke-opacity": i
    });
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const {
      lines: s,
      points: i
    } = this.serializeDraw(e), {
      _drawingOptions: {
        stroke: r,
        "stroke-opacity": a,
        "stroke-width": o
      }
    } = this, l = Object.assign(super.serialize(e), {
      color: gt._colorManager.convert(r),
      opacity: a,
      thickness: o,
      paths: {
        lines: s,
        points: i
      }
    });
    return this.addComment(l), e ? (l.isCopy = !0, l) : this.annotationElementId && !b(this, Yf, LA).call(this, l) ? null : (l.id = this.annotationElementId, l);
  }
  renderAnnotationElement(e) {
    if (this.deleted)
      return e.hide(), null;
    const {
      points: s,
      rect: i
    } = this.serializeDraw(!1);
    return e.updateEdited({
      rect: i,
      thickness: this._drawingOptions["stroke-width"],
      points: s,
      popup: this.comment
    }), null;
  }
};
Yf = new WeakSet(), LA = function(e) {
  const {
    color: s,
    thickness: i,
    opacity: r,
    pageIndex: a
  } = this._initialData;
  return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || e.color.some((o, l) => o !== s[l]) || e.thickness !== i || e.opacity !== r || e.pageIndex !== a;
}, T(qo, "_type", "ink"), T(qo, "_editorType", W.INK), T(qo, "_defaultDrawingOptions", null);
let Zg = qo;
class tm extends pu {
  toSVGPath() {
    let t = super.toSVGPath();
    return t.endsWith("Z") || (t += "Z"), t;
  }
}
const vu = 8, Bh = 3;
var Po, lt, em, si, RA, FA, sm, sf, OA, NA, BA, im, nm, HA;
class Hi {
  static extractContoursFromText(t, {
    fontFamily: e,
    fontStyle: s,
    fontWeight: i
  }, r, a, o, l) {
    let h = new OffscreenCanvas(1, 1), c = h.getContext("2d", {
      alpha: !1
    });
    const d = 200, f = c.font = `${s} ${i} ${d}px ${e}`, {
      actualBoundingBoxLeft: m,
      actualBoundingBoxRight: y,
      actualBoundingBoxAscent: A,
      actualBoundingBoxDescent: w,
      fontBoundingBoxAscent: v,
      fontBoundingBoxDescent: S,
      width: E
    } = c.measureText(t), C = 1.5, x = Math.ceil(Math.max(Math.abs(m) + Math.abs(y) || 0, E) * C), _ = Math.ceil(Math.max(Math.abs(A) + Math.abs(w) || d, Math.abs(v) + Math.abs(S) || d) * C);
    h = new OffscreenCanvas(x, _), c = h.getContext("2d", {
      alpha: !0,
      willReadFrequently: !0
    }), c.font = f, c.filter = "grayscale(1)", c.fillStyle = "white", c.fillRect(0, 0, x, _), c.fillStyle = "black", c.fillText(t, x * (C - 1) / 2, _ * (3 - C) / 2);
    const k = b(this, lt, im).call(this, c.getImageData(0, 0, x, _).data), M = b(this, lt, BA).call(this, k), P = b(this, lt, nm).call(this, M), D = b(this, lt, sm).call(this, k, x, _, P);
    return this.processDrawnLines({
      lines: {
        curves: D,
        width: x,
        height: _
      },
      pageWidth: r,
      pageHeight: a,
      rotation: o,
      innerMargin: l,
      mustSmooth: !0,
      areContours: !0
    });
  }
  static process(t, e, s, i, r) {
    const [a, o, l] = b(this, lt, HA).call(this, t), [h, c] = b(this, lt, NA).call(this, a, o, l, Math.hypot(o, l) * n(this, Po).sigmaSFactor, n(this, Po).sigmaR, n(this, Po).kernelSize), d = b(this, lt, nm).call(this, c), f = b(this, lt, sm).call(this, h, o, l, d);
    return this.processDrawnLines({
      lines: {
        curves: f,
        width: o,
        height: l
      },
      pageWidth: e,
      pageHeight: s,
      rotation: i,
      innerMargin: r,
      mustSmooth: !0,
      areContours: !0
    });
  }
  static processDrawnLines({
    lines: t,
    pageWidth: e,
    pageHeight: s,
    rotation: i,
    innerMargin: r,
    mustSmooth: a,
    areContours: o
  }) {
    i % 180 !== 0 && ([e, s] = [s, e]);
    const {
      curves: l,
      width: h,
      height: c
    } = t, d = t.thickness ?? 0, f = [], m = Math.min(e / h, s / c), y = m / e, A = m / s, w = [];
    for (const {
      points: S
    } of l) {
      const E = a ? b(this, lt, OA).call(this, S) : S;
      if (!E)
        continue;
      w.push(E);
      const C = E.length, x = new Float32Array(C), _ = new Float32Array(3 * (C === 2 ? 2 : C - 2));
      if (f.push({
        line: _,
        points: x
      }), C === 2) {
        x[0] = E[0] * y, x[1] = E[1] * A, _.set([NaN, NaN, NaN, NaN, x[0], x[1]], 0);
        continue;
      }
      let [k, M, P, D] = E;
      k *= y, M *= A, P *= y, D *= A, x.set([k, M, P, D], 0), _.set([NaN, NaN, NaN, NaN, k, M], 0);
      for (let N = 4; N < C; N += 2) {
        const Z = x[N] = E[N] * y, Q = x[N + 1] = E[N + 1] * A;
        _.set(O.createBezierPoints(k, M, P, D, Z, Q), (N - 2) * 3), [k, M, P, D] = [P, D, Z, Q];
      }
    }
    if (f.length === 0)
      return null;
    const v = o ? new tm() : new pu();
    return v.build(f, e, s, 1, i, o ? 0 : d, r), {
      outline: v,
      newCurves: w,
      areContours: o,
      thickness: d,
      width: h,
      height: c
    };
  }
  static async compressSignature({
    outlines: t,
    areContours: e,
    thickness: s,
    width: i,
    height: r
  }) {
    let a = 1 / 0, o = -1 / 0, l = 0;
    for (const S of t) {
      l += S.length;
      for (let E = 2, C = S.length; E < C; E++) {
        const x = S[E] - S[E - 2];
        a = Math.min(a, x), o = Math.max(o, x);
      }
    }
    let h;
    a >= -128 && o <= 127 ? h = Int8Array : a >= -32768 && o <= 32767 ? h = Int16Array : h = Int32Array;
    const c = t.length, d = vu + Bh * c, f = new Uint32Array(d);
    let m = 0;
    f[m++] = d * Uint32Array.BYTES_PER_ELEMENT + (l - 2 * c) * h.BYTES_PER_ELEMENT, f[m++] = 0, f[m++] = i, f[m++] = r, f[m++] = e ? 0 : 1, f[m++] = Math.max(0, Math.floor(s ?? 0)), f[m++] = c, f[m++] = h.BYTES_PER_ELEMENT;
    for (const S of t)
      f[m++] = S.length - 2, f[m++] = S[0], f[m++] = S[1];
    const y = new CompressionStream("deflate-raw"), A = y.writable.getWriter();
    await A.ready, A.write(f);
    const w = h.prototype.constructor;
    for (const S of t) {
      const E = new w(S.length - 2);
      for (let C = 2, x = S.length; C < x; C++)
        E[C - 2] = S[C] - S[C - 2];
      A.write(E);
    }
    return A.close(), (await new Response(y.readable).bytes()).toBase64();
  }
  static async decompressSignature(t) {
    try {
      const e = Uint8Array.fromBase64(t), {
        readable: s,
        writable: i
      } = new DecompressionStream("deflate-raw"), r = i.getWriter();
      await r.ready, r.write(e).then(async () => {
        await r.ready, await r.close();
      }).catch(() => {
      });
      let a = null, o = 0;
      for await (const E of s)
        a || (a = new Uint8Array(new Uint32Array(E.buffer, 0, 4)[0])), a.set(E, o), o += E.length;
      const l = new Uint32Array(a.buffer, 0, a.length >> 2), h = l[1];
      if (h !== 0)
        throw new Error(`Invalid version: ${h}`);
      const c = l[2], d = l[3], f = l[4] === 0, m = l[5], y = l[6], A = l[7], w = [], v = (vu + Bh * y) * Uint32Array.BYTES_PER_ELEMENT;
      let S;
      switch (A) {
        case Int8Array.BYTES_PER_ELEMENT:
          S = new Int8Array(a.buffer, v);
          break;
        case Int16Array.BYTES_PER_ELEMENT:
          S = new Int16Array(a.buffer, v);
          break;
        case Int32Array.BYTES_PER_ELEMENT:
          S = new Int32Array(a.buffer, v);
          break;
      }
      o = 0;
      for (let E = 0; E < y; E++) {
        const C = l[Bh * E + vu], x = new Float32Array(C + 2);
        w.push(x);
        for (let _ = 0; _ < Bh - 1; _++)
          x[_] = l[Bh * E + vu + _ + 1];
        for (let _ = 0; _ < C; _++)
          x[_ + 2] = x[_] + S[o++];
      }
      return {
        areContours: f,
        thickness: m,
        outlines: w,
        width: c,
        height: d
      };
    } catch (e) {
      return X(`decompressSignature: ${e}`), null;
    }
  }
}
Po = new WeakMap(), lt = new WeakSet(), em = function(t, e, s, i) {
  return s -= t, i -= e, s === 0 ? i > 0 ? 0 : 4 : s === 1 ? i + 6 : 2 - i;
}, si = new WeakMap(), RA = function(t, e, s, i, r, a, o) {
  const l = b(this, lt, em).call(this, s, i, r, a);
  for (let h = 0; h < 8; h++) {
    const c = (-h + l - o + 16) % 8, d = n(this, si)[2 * c], f = n(this, si)[2 * c + 1];
    if (t[(s + d) * e + (i + f)] !== 0)
      return c;
  }
  return -1;
}, FA = function(t, e, s, i, r, a, o) {
  const l = b(this, lt, em).call(this, s, i, r, a);
  for (let h = 0; h < 8; h++) {
    const c = (h + l + o + 16) % 8, d = n(this, si)[2 * c], f = n(this, si)[2 * c + 1];
    if (t[(s + d) * e + (i + f)] !== 0)
      return c;
  }
  return -1;
}, sm = function(t, e, s, i) {
  const r = t.length, a = new Int32Array(r);
  for (let c = 0; c < r; c++)
    a[c] = t[c] <= i ? 1 : 0;
  for (let c = 1; c < s - 1; c++)
    a[c * e] = a[c * e + e - 1] = 0;
  for (let c = 0; c < e; c++)
    a[c] = a[e * s - 1 - c] = 0;
  let o = 1, l;
  const h = [];
  for (let c = 1; c < s - 1; c++) {
    l = 1;
    for (let d = 1; d < e - 1; d++) {
      const f = c * e + d, m = a[f];
      if (m === 0)
        continue;
      let y = c, A = d;
      if (m === 1 && a[f - 1] === 0)
        o += 1, A -= 1;
      else if (m >= 1 && a[f + 1] === 0)
        o += 1, A += 1, m > 1 && (l = m);
      else {
        m !== 1 && (l = Math.abs(m));
        continue;
      }
      const w = [d, c], v = A === d + 1, S = {
        isHole: v,
        points: w,
        id: o,
        parent: 0
      };
      h.push(S);
      let E;
      for (const N of h)
        if (N.id === l) {
          E = N;
          break;
        }
      E ? E.isHole ? S.parent = v ? E.parent : l : S.parent = v ? l : E.parent : S.parent = v ? l : 0;
      const C = b(this, lt, RA).call(this, a, e, c, d, y, A, 0);
      if (C === -1) {
        a[f] = -o, a[f] !== 1 && (l = Math.abs(a[f]));
        continue;
      }
      let x = n(this, si)[2 * C], _ = n(this, si)[2 * C + 1];
      const k = c + x, M = d + _;
      y = k, A = M;
      let P = c, D = d;
      for (; ; ) {
        const N = b(this, lt, FA).call(this, a, e, P, D, y, A, 1);
        x = n(this, si)[2 * N], _ = n(this, si)[2 * N + 1];
        const Z = P + x, Q = D + _;
        w.push(Q, Z);
        const Y = P * e + D;
        if (a[Y + 1] === 0 ? a[Y] = -o : a[Y] === 1 && (a[Y] = o), Z === c && Q === d && P === k && D === M) {
          a[f] !== 1 && (l = Math.abs(a[f]));
          break;
        } else
          y = P, A = D, P = Z, D = Q;
      }
    }
  }
  return h;
}, sf = function(t, e, s, i) {
  if (s - e <= 4) {
    for (let k = e; k < s - 2; k += 2)
      i.push(t[k], t[k + 1]);
    return;
  }
  const r = t[e], a = t[e + 1], o = t[s - 4] - r, l = t[s - 3] - a, h = Math.hypot(o, l), c = o / h, d = l / h, f = c * a - d * r, m = l / o, y = 1 / h, A = Math.atan(m), w = Math.cos(A), v = Math.sin(A), S = y * (Math.abs(w) + Math.abs(v)), E = y * (1 - S + S ** 2), C = Math.max(Math.atan(Math.abs(v + w) * E), Math.atan(Math.abs(v - w) * E));
  let x = 0, _ = e;
  for (let k = e + 2; k < s - 2; k += 2) {
    const M = Math.abs(f - c * t[k + 1] + d * t[k]);
    M > x && (_ = k, x = M);
  }
  x > (h * C) ** 2 ? (b(this, lt, sf).call(this, t, e, _ + 2, i), b(this, lt, sf).call(this, t, _, s, i)) : i.push(r, a);
}, OA = function(t) {
  const e = [], s = t.length;
  return b(this, lt, sf).call(this, t, 0, s, e), e.push(t[s - 2], t[s - 1]), e.length <= 4 ? null : e;
}, NA = function(t, e, s, i, r, a) {
  const o = new Float32Array(a ** 2), l = -2 * i ** 2, h = a >> 1;
  for (let A = 0; A < a; A++) {
    const w = (A - h) ** 2;
    for (let v = 0; v < a; v++)
      o[A * a + v] = Math.exp((w + (v - h) ** 2) / l);
  }
  const c = new Float32Array(256), d = -2 * r ** 2;
  for (let A = 0; A < 256; A++)
    c[A] = Math.exp(A ** 2 / d);
  const f = t.length, m = new Uint8Array(f), y = new Uint32Array(256);
  for (let A = 0; A < s; A++)
    for (let w = 0; w < e; w++) {
      const v = A * e + w, S = t[v];
      let E = 0, C = 0;
      for (let _ = 0; _ < a; _++) {
        const k = A + _ - h;
        if (!(k < 0 || k >= s))
          for (let M = 0; M < a; M++) {
            const P = w + M - h;
            if (P < 0 || P >= e)
              continue;
            const D = t[k * e + P], N = o[_ * a + M] * c[Math.abs(D - S)];
            E += D * N, C += N;
          }
      }
      const x = m[v] = Math.round(E / C);
      y[x]++;
    }
  return [m, y];
}, BA = function(t) {
  const e = new Uint32Array(256);
  for (const s of t)
    e[s]++;
  return e;
}, im = function(t) {
  const e = t.length, s = new Uint8ClampedArray(e >> 2);
  let i = -1 / 0, r = 1 / 0;
  for (let o = 0, l = s.length; o < l; o++) {
    const h = s[o] = t[o << 2];
    i = Math.max(i, h), r = Math.min(r, h);
  }
  const a = 255 / (i - r);
  for (let o = 0, l = s.length; o < l; o++)
    s[o] = (s[o] - r) * a;
  return s;
}, nm = function(t) {
  let e, s = -1 / 0, i = -1 / 0;
  const r = t.findIndex((l) => l !== 0);
  let a = r, o = r;
  for (e = r; e < 256; e++) {
    const l = t[e];
    l > s && (e - a > i && (i = e - a, o = e - 1), s = l, a = e);
  }
  for (e = o - 1; e >= 0 && !(t[e] > t[e + 1]); e--)
    ;
  return e;
}, HA = function(t) {
  const e = t, {
    width: s,
    height: i
  } = t, {
    maxDim: r
  } = n(this, Po);
  let a = s, o = i;
  if (s > r || i > r) {
    let f = s, m = i, y = Math.log2(Math.max(s, i) / r);
    const A = Math.floor(y);
    y = y === A ? A - 1 : A;
    for (let v = 0; v < y; v++) {
      a = Math.ceil(f / 2), o = Math.ceil(m / 2);
      const S = new OffscreenCanvas(a, o);
      S.getContext("2d").drawImage(t, 0, 0, f, m, 0, 0, a, o), f = a, m = o, t !== e && t.close(), t = S.transferToImageBitmap();
    }
    const w = Math.min(r / a, r / o);
    a = Math.round(a * w), o = Math.round(o * w);
  }
  const h = new OffscreenCanvas(a, o).getContext("2d", {
    willReadFrequently: !0
  });
  h.fillStyle = "white", h.fillRect(0, 0, a, o), h.filter = "grayscale(1)", h.drawImage(t, 0, 0, t.width, t.height, 0, 0, a, o);
  const c = h.getImageData(0, 0, a, o).data;
  return [b(this, lt, im).call(this, c), a, o];
}, g(Hi, lt), g(Hi, Po, {
  maxDim: 512,
  sigmaSFactor: 0.02,
  sigmaR: 25,
  kernelSize: 16
}), g(Hi, si, new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]));
class km extends xm {
  constructor() {
    super(), super.updateProperties({
      fill: gt._defaultLineColor,
      "stroke-width": 0
    });
  }
  clone() {
    const t = new km();
    return t.updateAll(this), t;
  }
}
class Pm extends fp {
  constructor(t) {
    super(t), super.updateProperties({
      stroke: gt._defaultLineColor,
      "stroke-width": 1
    });
  }
  clone() {
    const t = new Pm(this._viewParameters);
    return t.updateAll(this), t;
  }
}
var Ir, Ri, Lr, Mo;
const Qe = class Qe extends wc {
  constructor(e) {
    super({
      ...e,
      mustBeCommitted: !0,
      name: "signatureEditor"
    });
    g(this, Ir, !1);
    g(this, Ri, null);
    g(this, Lr, null);
    g(this, Mo, null);
    this._willKeepAspectRatio = !0, u(this, Lr, e.signatureData || null), u(this, Ri, null), this.defaultL10nId = "pdfjs-editor-signature-editor1";
  }
  static initialize(e, s) {
    gt.initialize(e, s), this._defaultDrawingOptions = new km(), this._defaultDrawnSignatureOptions = new Pm(s.viewParameters);
  }
  static getDefaultDrawingOptions(e) {
    const s = this._defaultDrawingOptions.clone();
    return s.updateProperties(e), s;
  }
  static get supportMultipleDrawings() {
    return !1;
  }
  static get typesMap() {
    return R(this, "typesMap", /* @__PURE__ */ new Map());
  }
  static get isDrawer() {
    return !1;
  }
  get telemetryFinalData() {
    return {
      type: "signature",
      hasDescription: !!n(this, Ri)
    };
  }
  static computeTelemetryFinalData(e) {
    const s = e.get("hasDescription");
    return {
      hasAltText: s.get(!0) ?? 0,
      hasNoAltText: s.get(!1) ?? 0
    };
  }
  get isResizable() {
    return !0;
  }
  onScaleChanging() {
    this._drawId !== null && super.onScaleChanging();
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    const {
      _isCopy: i
    } = this;
    if (i && (this._isCopy = !1, e = this.x, s = this.y), super.render(), this._drawId === null)
      if (n(this, Lr)) {
        const {
          lines: r,
          mustSmooth: a,
          areContours: o,
          description: l,
          uuid: h,
          heightInPage: c
        } = n(this, Lr), {
          rawDims: {
            pageWidth: d,
            pageHeight: f
          },
          rotation: m
        } = this.parent.viewport, y = Hi.processDrawnLines({
          lines: r,
          pageWidth: d,
          pageHeight: f,
          rotation: m,
          innerMargin: Qe._INNER_MARGIN,
          mustSmooth: a,
          areContours: o
        });
        this.addSignature(y, c, l, h);
      } else
        this.div.setAttribute("data-l10n-args", JSON.stringify({
          description: ""
        })), this.div.hidden = !0, this._uiManager.getSignature(this);
    else
      this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: n(this, Ri) || ""
      }));
    return i && (this._isCopy = !0, this._moveAfterPaste(e, s)), this.div;
  }
  setUuid(e) {
    u(this, Mo, e), this.addEditToolbar();
  }
  getUuid() {
    return n(this, Mo);
  }
  get description() {
    return n(this, Ri);
  }
  set description(e) {
    u(this, Ri, e), this.div && (this.div.setAttribute("data-l10n-args", JSON.stringify({
      description: e
    })), super.addEditToolbar().then((s) => {
      s == null || s.updateEditSignatureButton(e);
    }));
  }
  getSignaturePreview() {
    const {
      newCurves: e,
      areContours: s,
      thickness: i,
      width: r,
      height: a
    } = n(this, Lr), o = Math.max(r, a), l = Hi.processDrawnLines({
      lines: {
        curves: e.map((h) => ({
          points: h
        })),
        thickness: i,
        width: r,
        height: a
      },
      pageWidth: o,
      pageHeight: o,
      rotation: 0,
      innerMargin: 0,
      mustSmooth: !1,
      areContours: s
    });
    return {
      areContours: s,
      outline: l.outline
    };
  }
  get toolbarButtons() {
    return this._uiManager.signatureManager ? [["editSignature", this._uiManager.signatureManager]] : super.toolbarButtons;
  }
  addSignature(e, s, i, r) {
    const {
      x: a,
      y: o
    } = this, {
      outline: l
    } = u(this, Lr, e);
    u(this, Ir, l instanceof tm), this.description = i;
    let h;
    n(this, Ir) ? h = Qe.getDefaultDrawingOptions() : (h = Qe._defaultDrawnSignatureOptions.clone(), h.updateProperties({
      "stroke-width": l.thickness
    })), this._addOutlines({
      drawOutlines: l,
      drawingOptions: h
    });
    const [, c] = this.pageDimensions;
    let d = s / c;
    d = d >= 1 ? 0.5 : d, this.width *= d / this.height, this.width >= 1 && (d *= 0.9 / this.width, this.width = 0.9), this.height = d, this.setDims(), this.x = a, this.y = o, this.center(), this._onResized(), this.onScaleChanging(), this.rotate(), this._uiManager.addToAnnotationStorage(this), this.setUuid(r), this._reportTelemetry({
      action: "pdfjs.signature.inserted",
      data: {
        hasBeenSaved: !!r,
        hasDescription: !!i
      }
    }), this.div.hidden = !1;
  }
  getFromImage(e) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: i
      },
      rotation: r
    } = this.parent.viewport;
    return Hi.process(e, s, i, r, Qe._INNER_MARGIN);
  }
  getFromText(e, s) {
    const {
      rawDims: {
        pageWidth: i,
        pageHeight: r
      },
      rotation: a
    } = this.parent.viewport;
    return Hi.extractContoursFromText(e, s, i, r, a, Qe._INNER_MARGIN);
  }
  getDrawnSignature(e) {
    const {
      rawDims: {
        pageWidth: s,
        pageHeight: i
      },
      rotation: r
    } = this.parent.viewport;
    return Hi.processDrawnLines({
      lines: e,
      pageWidth: s,
      pageHeight: i,
      rotation: r,
      innerMargin: Qe._INNER_MARGIN,
      mustSmooth: !1,
      areContours: !1
    });
  }
  createDrawingOptions({
    areContours: e,
    thickness: s
  }) {
    e ? this._drawingOptions = Qe.getDefaultDrawingOptions() : (this._drawingOptions = Qe._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
      "stroke-width": s
    }));
  }
  serialize(e = !1) {
    if (this.isEmpty())
      return null;
    const {
      lines: s,
      points: i
    } = this.serializeDraw(e), {
      _drawingOptions: {
        "stroke-width": r
      }
    } = this, a = Object.assign(super.serialize(e), {
      isSignature: !0,
      areContours: n(this, Ir),
      color: [0, 0, 0],
      thickness: n(this, Ir) ? 0 : r
    });
    return this.addComment(a), e ? (a.paths = {
      lines: s,
      points: i
    }, a.uuid = n(this, Mo), a.isCopy = !0) : a.lines = s, n(this, Ri) && (a.accessibilityData = {
      type: "Figure",
      alt: n(this, Ri)
    }), a;
  }
  static deserializeDraw(e, s, i, r, a, o) {
    return o.areContours ? tm.deserialize(e, s, i, r, a, o) : pu.deserialize(e, s, i, r, a, o);
  }
  static async deserialize(e, s, i) {
    var a;
    const r = await super.deserialize(e, s, i);
    return u(r, Ir, e.areContours), r.description = ((a = e.accessibilityData) == null ? void 0 : a.alt) || "", u(r, Mo, e.uuid), r;
  }
};
Ir = new WeakMap(), Ri = new WeakMap(), Lr = new WeakMap(), Mo = new WeakMap(), T(Qe, "_type", "signature"), T(Qe, "_editorType", W.SIGNATURE), T(Qe, "_defaultDrawingOptions", null);
let rm = Qe;
var _t, le, Rr, xn, Fr, vh, _n, Do, Fi, us, Sh, it, nc, rc, nf, rf, af, om, of, UA;
class am extends gt {
  constructor(e) {
    super({
      ...e,
      name: "stampEditor"
    });
    g(this, it);
    g(this, _t, null);
    g(this, le, null);
    g(this, Rr, null);
    g(this, xn, null);
    g(this, Fr, null);
    g(this, vh, "");
    g(this, _n, null);
    g(this, Do, !1);
    g(this, Fi, null);
    g(this, us, !1);
    g(this, Sh, !1);
    u(this, xn, e.bitmapUrl), u(this, Fr, e.bitmapFile), this.defaultL10nId = "pdfjs-editor-stamp-editor";
  }
  static initialize(e, s) {
    gt.initialize(e, s);
  }
  static isHandlingMimeForPasting(e) {
    return ff.has(e);
  }
  static paste(e, s) {
    s.pasteEditor({
      mode: W.STAMP
    }, {
      bitmapFile: e.getAsFile()
    });
  }
  altTextFinish() {
    this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
  }
  get telemetryFinalData() {
    var e;
    return {
      type: "stamp",
      hasAltText: !!((e = this.altTextData) != null && e.altText)
    };
  }
  static computeTelemetryFinalData(e) {
    const s = e.get("hasAltText");
    return {
      hasAltText: s.get(!0) ?? 0,
      hasNoAltText: s.get(!1) ?? 0
    };
  }
  async mlGuessAltText(e = null, s = !0) {
    if (this.hasAltTextData())
      return null;
    const {
      mlManager: i
    } = this._uiManager;
    if (!i)
      throw new Error("No ML.");
    if (!await i.isEnabledFor("altText"))
      throw new Error("ML isn't enabled for alt text.");
    const {
      data: r,
      width: a,
      height: o
    } = e || this.copyCanvas(null, null, !0).imageData, l = await i.guess({
      name: "altText",
      request: {
        data: r,
        width: a,
        height: o,
        channels: r.length / (a * o)
      }
    });
    if (!l)
      throw new Error("No response from the AI service.");
    if (l.error)
      throw new Error("Error from the AI service.");
    if (l.cancel)
      return null;
    if (!l.output)
      throw new Error("No valid response from the AI service.");
    const h = l.output;
    return await this.setGuessedAltText(h), s && !this.hasAltTextData() && (this.altTextData = {
      alt: h,
      decorative: !1
    }), h;
  }
  remove() {
    var e;
    n(this, le) && (u(this, _t, null), this._uiManager.imageManager.deleteId(n(this, le)), (e = n(this, _n)) == null || e.remove(), u(this, _n, null), n(this, Fi) && (clearTimeout(n(this, Fi)), u(this, Fi, null))), super.remove();
  }
  rebuild() {
    if (!this.parent) {
      n(this, le) && b(this, it, nf).call(this);
      return;
    }
    super.rebuild(), this.div !== null && (n(this, le) && n(this, _n) === null && b(this, it, nf).call(this), this.isAttachedToDOM || this.parent.add(this));
  }
  onceAdded(e) {
    this._isDraggable = !0, e && this.div.focus();
  }
  isEmpty() {
    return !(n(this, Rr) || n(this, _t) || n(this, xn) || n(this, Fr) || n(this, le) || n(this, Do));
  }
  get toolbarButtons() {
    return [["altText", this.createAltText()]];
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div)
      return this.div;
    let e, s;
    return this._isCopy && (e = this.x, s = this.y), super.render(), this.div.hidden = !0, this.createAltText(), n(this, Do) || (n(this, _t) ? b(this, it, rf).call(this) : b(this, it, nf).call(this)), this._isCopy && this._moveAfterPaste(e, s), this._uiManager.addShouldRescale(this), this.div;
  }
  setCanvas(e, s) {
    const {
      id: i,
      bitmap: r
    } = this._uiManager.imageManager.getFromCanvas(e, s);
    s.remove(), i && this._uiManager.imageManager.isValidId(i) && (u(this, le, i), r && u(this, _t, r), u(this, Do, !1), b(this, it, rf).call(this));
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent)
      return;
    n(this, Fi) !== null && clearTimeout(n(this, Fi)), u(this, Fi, setTimeout(() => {
      u(this, Fi, null), b(this, it, om).call(this);
    }, 200));
  }
  copyCanvas(e, s, i = !1) {
    e || (e = 224);
    const {
      width: r,
      height: a
    } = n(this, _t), o = new bs();
    let l = n(this, _t), h = r, c = a, d = null;
    if (s) {
      if (r > s || a > s) {
        const k = Math.min(s / r, s / a);
        h = Math.floor(r * k), c = Math.floor(a * k);
      }
      d = document.createElement("canvas");
      const m = d.width = Math.ceil(h * o.sx), y = d.height = Math.ceil(c * o.sy);
      n(this, us) || (l = b(this, it, af).call(this, m, y));
      const A = d.getContext("2d");
      A.filter = this._uiManager.hcmFilter;
      let w = "white", v = "#cfcfd8";
      this._uiManager.hcmFilter !== "none" ? v = "black" : lw.isDarkMode && (w = "#8f8f9d", v = "#42414d");
      const S = 15, E = S * o.sx, C = S * o.sy, x = new OffscreenCanvas(E * 2, C * 2), _ = x.getContext("2d");
      _.fillStyle = w, _.fillRect(0, 0, E * 2, C * 2), _.fillStyle = v, _.fillRect(0, 0, E, C), _.fillRect(E, C, E, C), A.fillStyle = A.createPattern(x, "repeat"), A.fillRect(0, 0, m, y), A.drawImage(l, 0, 0, l.width, l.height, 0, 0, m, y);
    }
    let f = null;
    if (i) {
      let m, y;
      if (o.symmetric && l.width < e && l.height < e)
        m = l.width, y = l.height;
      else if (l = n(this, _t), r > e || a > e) {
        const v = Math.min(e / r, e / a);
        m = Math.floor(r * v), y = Math.floor(a * v), n(this, us) || (l = b(this, it, af).call(this, m, y));
      }
      const w = new OffscreenCanvas(m, y).getContext("2d", {
        willReadFrequently: !0
      });
      w.drawImage(l, 0, 0, l.width, l.height, 0, 0, m, y), f = {
        width: m,
        height: y,
        data: w.getImageData(0, 0, m, y).data
      };
    }
    return {
      canvas: d,
      width: h,
      height: c,
      imageData: f
    };
  }
  static async deserialize(e, s, i) {
    var w;
    let r = null, a = !1;
    if (e instanceof aA) {
      const {
        data: {
          rect: v,
          rotation: S,
          id: E,
          structParent: C,
          popupRef: x,
          richText: _,
          contentsObj: k,
          creationDate: M,
          modificationDate: P
        },
        container: D,
        parent: {
          page: {
            pageNumber: N
          }
        },
        canvas: Z
      } = e;
      let Q, Y;
      Z ? (delete e.canvas, {
        id: Q,
        bitmap: Y
      } = i.imageManager.getFromCanvas(D.id, Z), Z.remove()) : (a = !0, e._hasNoCanvas = !0);
      const K = ((w = await s._structTree.getAriaAttributes(`${Yo}${E}`)) == null ? void 0 : w.get("aria-label")) || "";
      r = e = {
        annotationType: W.STAMP,
        bitmapId: Q,
        bitmap: Y,
        pageIndex: N - 1,
        rect: v.slice(0),
        rotation: S,
        annotationElementId: E,
        id: E,
        deleted: !1,
        accessibilityData: {
          decorative: !1,
          altText: K
        },
        isSvg: !1,
        structParent: C,
        popupRef: x,
        richText: _,
        comment: (k == null ? void 0 : k.str) || null,
        creationDate: M,
        modificationDate: P
      };
    }
    const o = await super.deserialize(e, s, i), {
      rect: l,
      bitmap: h,
      bitmapUrl: c,
      bitmapId: d,
      isSvg: f,
      accessibilityData: m
    } = e;
    a ? (i.addMissingCanvas(e.id, o), u(o, Do, !0)) : d && i.imageManager.isValidId(d) ? (u(o, le, d), h && u(o, _t, h)) : u(o, xn, c), u(o, us, f);
    const [y, A] = o.pageDimensions;
    return o.width = (l[2] - l[0]) / y, o.height = (l[3] - l[1]) / A, m && (o.altTextData = m), o._initialData = r, e.comment && o.setCommentData(e), u(o, Sh, !!r), o;
  }
  serialize(e = !1, s = null) {
    if (this.isEmpty())
      return null;
    if (this.deleted)
      return this.serializeDeleted();
    const i = Object.assign(super.serialize(e), {
      bitmapId: n(this, le),
      isSvg: n(this, us)
    });
    if (this.addComment(i), e)
      return i.bitmapUrl = b(this, it, of).call(this, !0), i.accessibilityData = this.serializeAltText(!0), i.isCopy = !0, i;
    const {
      decorative: r,
      altText: a
    } = this.serializeAltText(!1);
    if (!r && a && (i.accessibilityData = {
      type: "Figure",
      alt: a
    }), this.annotationElementId) {
      const l = b(this, it, UA).call(this, i);
      return l.isSame ? null : (l.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1, i.id = this.annotationElementId, delete i.bitmapId, i);
    }
    if (s === null)
      return i;
    s.stamps || (s.stamps = /* @__PURE__ */ new Map());
    const o = n(this, us) ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
    if (!s.stamps.has(n(this, le)))
      s.stamps.set(n(this, le), {
        area: o,
        serialized: i
      }), i.bitmap = b(this, it, of).call(this, !1);
    else if (n(this, us)) {
      const l = s.stamps.get(n(this, le));
      o > l.area && (l.area = o, l.serialized.bitmap.close(), l.serialized.bitmap = b(this, it, of).call(this, !1));
    }
    return i;
  }
  renderAnnotationElement(e) {
    return this.deleted ? (e.hide(), null) : (e.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    }), null);
  }
}
_t = new WeakMap(), le = new WeakMap(), Rr = new WeakMap(), xn = new WeakMap(), Fr = new WeakMap(), vh = new WeakMap(), _n = new WeakMap(), Do = new WeakMap(), Fi = new WeakMap(), us = new WeakMap(), Sh = new WeakMap(), it = new WeakSet(), nc = function(e, s = !1) {
  if (!e) {
    this.remove();
    return;
  }
  u(this, _t, e.bitmap), s || (u(this, le, e.id), u(this, us, e.isSvg)), e.file && u(this, vh, e.file.name), b(this, it, rf).call(this);
}, rc = function() {
  if (u(this, Rr, null), this._uiManager.enableWaiting(!1), !!n(this, _n)) {
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, _t)) {
      this.addEditToolbar().then(() => {
        this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
      });
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && n(this, _t)) {
      this._reportTelemetry({
        action: "pdfjs.image.image_added",
        data: {
          alt_text_modal: !1,
          alt_text_type: "empty"
        }
      });
      try {
        this.mlGuessAltText();
      } catch {
      }
    }
    this.div.focus();
  }
}, nf = function() {
  if (n(this, le)) {
    this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(n(this, le)).then((i) => b(this, it, nc).call(this, i, !0)).finally(() => b(this, it, rc).call(this));
    return;
  }
  if (n(this, xn)) {
    const i = n(this, xn);
    u(this, xn, null), this._uiManager.enableWaiting(!0), u(this, Rr, this._uiManager.imageManager.getFromUrl(i).then((r) => b(this, it, nc).call(this, r)).finally(() => b(this, it, rc).call(this)));
    return;
  }
  if (n(this, Fr)) {
    const i = n(this, Fr);
    u(this, Fr, null), this._uiManager.enableWaiting(!0), u(this, Rr, this._uiManager.imageManager.getFromFile(i).then((r) => b(this, it, nc).call(this, r)).finally(() => b(this, it, rc).call(this)));
    return;
  }
  const e = document.createElement("input");
  e.type = "file", e.accept = ff.keys().join(",");
  const s = this._uiManager._signal;
  u(this, Rr, new Promise((i) => {
    e.addEventListener("change", async () => {
      if (!e.files || e.files.length === 0)
        this.remove();
      else {
        this._uiManager.enableWaiting(!0);
        const r = await this._uiManager.imageManager.getFromFile(e.files[0]);
        this._reportTelemetry({
          action: "pdfjs.image.image_selected",
          data: {
            alt_text_modal: this._uiManager.useNewAltTextFlow
          }
        }), b(this, it, nc).call(this, r);
      }
      i();
    }, {
      signal: s
    }), e.addEventListener("cancel", () => {
      this.remove(), i();
    }, {
      signal: s
    });
  }).finally(() => b(this, it, rc).call(this))), e.click();
}, rf = function() {
  var h;
  const {
    div: e
  } = this;
  let {
    width: s,
    height: i
  } = n(this, _t);
  const [r, a] = this.pageDimensions, o = 0.75;
  if (this.width)
    s = this.width * r, i = this.height * a;
  else if (s > o * r || i > o * a) {
    const c = Math.min(o * r / s, o * a / i);
    s *= c, i *= c;
  }
  this._uiManager.enableWaiting(!1);
  const l = u(this, _n, document.createElement("canvas"));
  l.setAttribute("role", "img"), this.addContainer(l), this.width = s / r, this.height = i / a, this.setDims(), (h = this._initialOptions) != null && h.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) && (e.hidden = !1), b(this, it, om).call(this), n(this, Sh) || (this.parent.addUndoableEditor(this), u(this, Sh, !0)), this._reportTelemetry({
    action: "inserted_image"
  }), n(this, vh) && this.div.setAttribute("aria-description", n(this, vh)), this.annotationElementId || this._uiManager.a11yAlert(gt._l10nAlert.stamp);
}, af = function(e, s) {
  const {
    width: i,
    height: r
  } = n(this, _t);
  let a = i, o = r, l = n(this, _t);
  for (; a > 2 * e || o > 2 * s; ) {
    const h = a, c = o;
    a > 2 * e && (a = Math.ceil(a / 2)), o > 2 * s && (o = Math.ceil(o / 2));
    const d = new OffscreenCanvas(a, o);
    d.getContext("2d").drawImage(l, 0, 0, h, c, 0, 0, a, o), l = d.transferToImageBitmap();
  }
  return l;
}, om = function() {
  const [e, s] = this.parentDimensions, {
    width: i,
    height: r
  } = this, a = new bs(), o = Math.ceil(i * e * a.sx), l = Math.ceil(r * s * a.sy), h = n(this, _n);
  if (!h || h.width === o && h.height === l)
    return;
  h.width = o, h.height = l;
  const c = n(this, us) ? n(this, _t) : b(this, it, af).call(this, o, l), d = h.getContext("2d");
  d.filter = this._uiManager.hcmFilter, d.drawImage(c, 0, 0, c.width, c.height, 0, 0, o, l);
}, of = function(e) {
  if (e) {
    if (n(this, us)) {
      const r = this._uiManager.imageManager.getSvgUrl(n(this, le));
      if (r)
        return r;
    }
    const s = document.createElement("canvas");
    return {
      width: s.width,
      height: s.height
    } = n(this, _t), s.getContext("2d").drawImage(n(this, _t), 0, 0), s.toDataURL();
  }
  if (n(this, us)) {
    const [s, i] = this.pageDimensions, r = Math.round(this.width * s * Fn.PDF_TO_CSS_UNITS), a = Math.round(this.height * i * Fn.PDF_TO_CSS_UNITS), o = new OffscreenCanvas(r, a);
    return o.getContext("2d").drawImage(n(this, _t), 0, 0, n(this, _t).width, n(this, _t).height, 0, 0, r, a), o.transferToImageBitmap();
  }
  return structuredClone(n(this, _t));
}, UA = function(e) {
  var o;
  const {
    pageIndex: s,
    accessibilityData: {
      altText: i
    }
  } = this._initialData, r = e.pageIndex === s, a = (((o = e.accessibilityData) == null ? void 0 : o.alt) || "") === i;
  return {
    isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && r && a,
    isSameAltText: a
  };
}, T(am, "_type", "stamp"), T(am, "_editorType", W.STAMP);
var Io, Eh, Or, Nr, Tn, We, Br, Ch, xh, ii, kn, Xe, Pn, Hr, _h, H, Ur, bt, lm, GA, hi, hm, cm, lf;
const $s = class $s {
  constructor({
    uiManager: t,
    pageIndex: e,
    div: s,
    structTreeLayer: i,
    accessibilityManager: r,
    annotationLayer: a,
    drawLayer: o,
    textLayer: l,
    viewport: h,
    l10n: c
  }) {
    g(this, bt);
    g(this, Io);
    g(this, Eh, !1);
    g(this, Or, null);
    g(this, Nr, null);
    g(this, Tn, null);
    g(this, We, /* @__PURE__ */ new Map());
    g(this, Br, !1);
    g(this, Ch, !1);
    g(this, xh, !1);
    g(this, ii, null);
    g(this, kn, null);
    g(this, Xe, null);
    g(this, Pn, null);
    g(this, Hr, null);
    g(this, _h, -1);
    g(this, H);
    const d = [...n($s, Ur).values()];
    if (!$s._initialized) {
      $s._initialized = !0;
      for (const f of d)
        f.initialize(c, t);
    }
    t.registerEditorTypes(d), u(this, H, t), this.pageIndex = e, this.div = s, u(this, Io, r), u(this, Or, a), this.viewport = h, u(this, Xe, l), this.drawLayer = o, this._structTree = i, n(this, H).addLayer(this);
  }
  get isEmpty() {
    return n(this, We).size === 0;
  }
  get isInvisible() {
    return this.isEmpty && n(this, H).getMode() === W.NONE;
  }
  updateToolbar(t) {
    n(this, H).updateToolbar(t);
  }
  updateMode(t = n(this, H).getMode()) {
    switch (b(this, bt, lf).call(this), t) {
      case W.NONE:
        this.div.classList.toggle("nonEditing", !0), this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), this.disableClick();
        return;
      case W.INK:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        break;
      case W.HIGHLIGHT:
        this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
        break;
      default:
        this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const {
      classList: e
    } = this.div;
    if (e.toggle("nonEditing", !1), t === W.POPUP)
      e.toggle("commentEditing", !0);
    else {
      e.toggle("commentEditing", !1);
      for (const s of n($s, Ur).values())
        e.toggle(`${s._type}Editing`, t === s._editorType);
    }
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    var e;
    return t === ((e = n(this, Xe)) == null ? void 0 : e.div);
  }
  setEditingState(t) {
    n(this, H).setEditingState(t);
  }
  addCommands(t) {
    n(this, H).addCommands(t);
  }
  cleanUndoStack(t) {
    n(this, H).cleanUndoStack(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    var e;
    (e = n(this, Or)) == null || e.togglePointerEvents(t);
  }
  async enable() {
    var s;
    u(this, xh, !0), this.div.tabIndex = 0, this.togglePointerEvents(!0), this.div.classList.toggle("nonEditing", !1), (s = n(this, Hr)) == null || s.abort(), u(this, Hr, null);
    const t = /* @__PURE__ */ new Set();
    for (const i of n(this, bt, lm))
      i.enableEditing(), i.show(!0), i.annotationElementId && (n(this, H).removeChangedExistingAnnotation(i), t.add(i.annotationElementId));
    const e = n(this, Or);
    if (e)
      for (const i of e.getEditableAnnotations()) {
        if (i.hide(), n(this, H).isDeletedAnnotationElement(i.data.id) || t.has(i.data.id))
          continue;
        const r = await this.deserialize(i);
        r && (this.addOrRebuild(r), r.enableEditing());
      }
    u(this, xh, !1), n(this, H)._eventBus.dispatch("editorsrendered", {
      source: this,
      pageNumber: this.pageIndex + 1
    });
  }
  disable() {
    var i;
    if (u(this, Ch, !0), this.div.tabIndex = -1, this.togglePointerEvents(!1), this.div.classList.toggle("nonEditing", !0), n(this, Xe) && !n(this, Hr)) {
      u(this, Hr, new AbortController());
      const r = n(this, H).combinedSignal(n(this, Hr));
      n(this, Xe).div.addEventListener("pointerdown", (a) => {
        const {
          clientX: l,
          clientY: h,
          timeStamp: c
        } = a, d = n(this, _h);
        if (c - d > 500) {
          u(this, _h, c);
          return;
        }
        u(this, _h, -1);
        const {
          classList: f
        } = this.div;
        f.toggle("getElements", !0);
        const m = document.elementsFromPoint(l, h);
        if (f.toggle("getElements", !1), !this.div.contains(m[0]))
          return;
        let y;
        const A = new RegExp(`^${Ph}[0-9]+$`);
        for (const v of m)
          if (A.test(v.id)) {
            y = v.id;
            break;
          }
        if (!y)
          return;
        const w = n(this, We).get(y);
        (w == null ? void 0 : w.annotationElementId) === null && (Kt(a), w.dblclick(a));
      }, {
        signal: r,
        capture: !0
      });
    }
    const t = n(this, Or), e = [];
    if (t) {
      const r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
      for (const o of n(this, bt, lm)) {
        if (o.disableEditing(), !o.annotationElementId) {
          e.push(o);
          continue;
        }
        if (o.serialize() !== null) {
          r.set(o.annotationElementId, o);
          continue;
        } else
          a.set(o.annotationElementId, o);
        (i = this.getEditableAnnotation(o.annotationElementId)) == null || i.show(), o.remove();
      }
      for (const o of t.getEditableAnnotations()) {
        const {
          id: l
        } = o.data;
        if (n(this, H).isDeletedAnnotationElement(l)) {
          o.updateEdited({
            deleted: !0
          });
          continue;
        }
        let h = a.get(l);
        if (h) {
          h.resetAnnotationElement(o), h.show(!1), o.show();
          continue;
        }
        h = r.get(l), h && (n(this, H).addChangedExistingAnnotation(h), h.renderAnnotationElement(o) && h.show(!1)), o.show();
      }
    }
    b(this, bt, lf).call(this), this.isEmpty && (this.div.hidden = !0);
    const {
      classList: s
    } = this.div;
    for (const r of n($s, Ur).values())
      s.remove(`${r._type}Editing`);
    this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), t == null || t.updateFakeAnnotations(e), u(this, Ch, !1);
  }
  getEditableAnnotation(t) {
    var e;
    return ((e = n(this, Or)) == null ? void 0 : e.getEditableAnnotation(t)) || null;
  }
  setActiveEditor(t) {
    n(this, H).getActive() !== t && n(this, H).setActiveEditor(t);
  }
  enableTextSelection() {
    var t;
    if (this.div.tabIndex = -1, (t = n(this, Xe)) != null && t.div && !n(this, Pn)) {
      u(this, Pn, new AbortController());
      const e = n(this, H).combinedSignal(n(this, Pn));
      n(this, Xe).div.addEventListener("pointerdown", b(this, bt, GA).bind(this), {
        signal: e
      }), n(this, Xe).div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    var t;
    this.div.tabIndex = 0, (t = n(this, Xe)) != null && t.div && n(this, Pn) && (n(this, Pn).abort(), u(this, Pn, null), n(this, Xe).div.classList.remove("highlighting"));
  }
  enableClick() {
    if (n(this, Nr))
      return;
    u(this, Nr, new AbortController());
    const t = n(this, H).combinedSignal(n(this, Nr));
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal: t
    });
    const e = this.pointerup.bind(this);
    this.div.addEventListener("pointerup", e, {
      signal: t
    }), this.div.addEventListener("pointercancel", e, {
      signal: t
    });
  }
  disableClick() {
    var t;
    (t = n(this, Nr)) == null || t.abort(), u(this, Nr, null);
  }
  attach(t) {
    n(this, We).set(t.id, t);
    const {
      annotationElementId: e
    } = t;
    e && n(this, H).isDeletedAnnotationElement(e) && n(this, H).removeDeletedAnnotationElement(t);
  }
  detach(t) {
    var e;
    n(this, We).delete(t.id), (e = n(this, Io)) == null || e.removePointerInTextLayer(t.contentDiv), !n(this, Ch) && t.annotationElementId && n(this, H).addDeletedAnnotationElement(t);
  }
  remove(t) {
    this.detach(t), n(this, H).removeEditor(t), t.div.remove(), t.isAttachedToDOM = !1;
  }
  changeParent(t) {
    var e;
    t.parent !== this && (t.parent && t.annotationElementId && (n(this, H).addDeletedAnnotationElement(t), gt.deleteAnnotationElement(t), t.annotationElementId = null), this.attach(t), (e = t.parent) == null || e.detach(t), t.setParent(this), t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (!(t.parent === this && t.isAttachedToDOM)) {
      if (this.changeParent(t), n(this, H).addEditor(t), this.attach(t), !t.isAttachedToDOM) {
        const e = t.render();
        this.div.append(e), t.isAttachedToDOM = !0;
      }
      t.fixAndSetPosition(), t.onceAdded(!n(this, xh)), n(this, H).addToAnnotationStorage(t), t._reportTelemetry(t.telemetryInitialData);
    }
  }
  moveEditorInDOM(t) {
    var s;
    if (!t.isAttachedToDOM)
      return;
    const {
      activeElement: e
    } = document;
    t.div.contains(e) && !n(this, Tn) && (t._focusEventsAllowed = !1, u(this, Tn, setTimeout(() => {
      u(this, Tn, null), t.div.contains(document.activeElement) ? t._focusEventsAllowed = !0 : (t.div.addEventListener("focusin", () => {
        t._focusEventsAllowed = !0;
      }, {
        once: !0,
        signal: n(this, H)._signal
      }), e.focus());
    }, 0))), t._structTreeParentId = (s = n(this, Io)) == null ? void 0 : s.moveElementInDOM(this.div, t.div, t.contentDiv, !0);
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt() ? (t.parent || (t.parent = this), t.rebuild(), t.show()) : this.add(t);
  }
  addUndoableEditor(t) {
    const e = () => t._uiManager.rebuild(t), s = () => {
      t.remove();
    };
    this.addCommands({
      cmd: e,
      undo: s,
      mustExec: !1
    });
  }
  getEditorByUID(t) {
    for (const e of n(this, We).values())
      if (e.uid === t)
        return e;
    return null;
  }
  combinedSignal(t) {
    return n(this, H).combinedSignal(t);
  }
  canCreateNewEmptyEditor() {
    var t;
    return (t = n(this, bt, hi)) == null ? void 0 : t.canCreateNewEmptyEditor();
  }
  async pasteEditor(t, e) {
    this.updateToolbar(t), await n(this, H).updateMode(t.mode);
    const {
      offsetX: s,
      offsetY: i
    } = b(this, bt, cm).call(this), r = n(this, H).getId(), a = b(this, bt, hm).call(this, {
      parent: this,
      id: r,
      x: s,
      y: i,
      uiManager: n(this, H),
      isCentered: !0,
      ...e
    });
    a && this.add(a);
  }
  async deserialize(t) {
    var e;
    return await ((e = n($s, Ur).get(t.annotationType ?? t.annotationEditorType)) == null ? void 0 : e.deserialize(t, this, n(this, H))) || null;
  }
  createAndAddNewEditor(t, e, s = {}) {
    const i = n(this, H).getId(), r = b(this, bt, hm).call(this, {
      parent: this,
      id: i,
      x: t.offsetX,
      y: t.offsetY,
      uiManager: n(this, H),
      isCentered: e,
      ...s
    });
    return r && this.add(r), r;
  }
  get boundingClientRect() {
    return this.div.getBoundingClientRect();
  }
  addNewEditor(t = {}) {
    this.createAndAddNewEditor(b(this, bt, cm).call(this), !0, t);
  }
  setSelected(t) {
    n(this, H).setSelected(t);
  }
  toggleSelected(t) {
    n(this, H).toggleSelected(t);
  }
  unselect(t) {
    n(this, H).unselect(t);
  }
  pointerup(t) {
    var i;
    const {
      isMac: e
    } = ot.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div || !n(this, Br) || (u(this, Br, !1), (i = n(this, bt, hi)) != null && i.isDrawer && n(this, bt, hi).supportMultipleDrawings))
      return;
    if (!n(this, Eh)) {
      u(this, Eh, !0);
      return;
    }
    const s = n(this, H).getMode();
    if (s === W.STAMP || s === W.POPUP || s === W.SIGNATURE) {
      n(this, H).unselectAll();
      return;
    }
    this.createAndAddNewEditor(t, !1);
  }
  pointerdown(t) {
    var i;
    if (n(this, H).getMode() === W.HIGHLIGHT && this.enableTextSelection(), n(this, Br)) {
      u(this, Br, !1);
      return;
    }
    const {
      isMac: e
    } = ot.platform;
    if (t.button !== 0 || t.ctrlKey && e || t.target !== this.div)
      return;
    if (u(this, Br, !0), (i = n(this, bt, hi)) != null && i.isDrawer) {
      this.startDrawingSession(t);
      return;
    }
    const s = n(this, H).getActive();
    u(this, Eh, !s || s.isEmpty());
  }
  startDrawingSession(t) {
    if (this.div.focus({
      preventScroll: !0
    }), n(this, ii)) {
      n(this, bt, hi).startDrawing(this, n(this, H), !1, t);
      return;
    }
    n(this, H).setCurrentDrawingSession(this), u(this, ii, new AbortController());
    const e = n(this, H).combinedSignal(n(this, ii));
    this.div.addEventListener("blur", ({
      relatedTarget: s
    }) => {
      s && !this.div.contains(s) && (u(this, kn, null), this.commitOrRemove());
    }, {
      signal: e
    }), n(this, bt, hi).startDrawing(this, n(this, H), !1, t);
  }
  pause(t) {
    if (t) {
      const {
        activeElement: e
      } = document;
      this.div.contains(e) && u(this, kn, e);
      return;
    }
    n(this, kn) && setTimeout(() => {
      var e;
      (e = n(this, kn)) == null || e.focus(), u(this, kn, null);
    }, 0);
  }
  endDrawingSession(t = !1) {
    return n(this, ii) ? (n(this, H).setCurrentDrawingSession(null), n(this, ii).abort(), u(this, ii, null), u(this, kn, null), n(this, bt, hi).endDrawing(t)) : null;
  }
  findNewParent(t, e, s) {
    const i = n(this, H).findParent(e, s);
    return i === null || i === this ? !1 : (i.changeParent(t), !0);
  }
  commitOrRemove() {
    return n(this, ii) ? (this.endDrawingSession(), !0) : !1;
  }
  onScaleChanging() {
    n(this, ii) && n(this, bt, hi).onScaleChangingWhenDrawing(this);
  }
  destroy() {
    var t, e;
    this.commitOrRemove(), ((t = n(this, H).getActive()) == null ? void 0 : t.parent) === this && (n(this, H).commitOrRemove(), n(this, H).setActiveEditor(null)), n(this, Tn) && (clearTimeout(n(this, Tn)), u(this, Tn, null));
    for (const s of n(this, We).values())
      (e = n(this, Io)) == null || e.removePointerInTextLayer(s.contentDiv), s.setParent(null), s.isAttachedToDOM = !1, s.div.remove();
    this.div = null, n(this, We).clear(), n(this, H).removeLayer(this);
  }
  async render({
    viewport: t
  }) {
    this.viewport = t, jr(this.div, t);
    for (const e of n(this, H).getEditors(this.pageIndex))
      this.add(e), e.rebuild();
    await n(this, H).findClonesForPage(this), this.div.hidden = this.isEmpty, this.updateMode();
  }
  update({
    viewport: t
  }) {
    n(this, H).commitOrRemove(), b(this, bt, lf).call(this);
    const e = this.viewport.rotation, s = t.rotation;
    if (this.viewport = t, jr(this.div, {
      rotation: s
    }), e !== s)
      for (const i of n(this, We).values())
        i.rotate(s);
  }
  get pageDimensions() {
    const {
      pageWidth: t,
      pageHeight: e
    } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return n(this, H).viewParameters.realScale;
  }
};
Io = new WeakMap(), Eh = new WeakMap(), Or = new WeakMap(), Nr = new WeakMap(), Tn = new WeakMap(), We = new WeakMap(), Br = new WeakMap(), Ch = new WeakMap(), xh = new WeakMap(), ii = new WeakMap(), kn = new WeakMap(), Xe = new WeakMap(), Pn = new WeakMap(), Hr = new WeakMap(), _h = new WeakMap(), H = new WeakMap(), Ur = new WeakMap(), bt = new WeakSet(), lm = function() {
  return n(this, We).size !== 0 ? n(this, We).values() : n(this, H).getEditors(this.pageIndex);
}, GA = function(t) {
  n(this, H).unselectAll();
  const {
    target: e
  } = t;
  if (e === n(this, Xe).div || (e.getAttribute("role") === "img" || e.classList.contains("endOfContent") || e.classList.contains("textLayerImages") || e.classList.contains("textLayerImagePlaceholder")) && n(this, Xe).div.contains(e)) {
    const {
      isMac: s
    } = ot.platform;
    if (t.button !== 0 || t.ctrlKey && s)
      return;
    n(this, H).showAllEditors("highlight", !0, !0), yf.startDrawing(this, n(this, H), n(this, H).direction === "ltr", t), t.preventDefault();
  }
}, hi = function() {
  return n($s, Ur).get(n(this, H).getMode());
}, hm = function(t) {
  const e = n(this, bt, hi);
  return e ? new e.prototype.constructor(t) : null;
}, cm = function() {
  const {
    x: t,
    y: e,
    width: s,
    height: i
  } = this.boundingClientRect, r = Math.max(0, t), a = Math.max(0, e), o = Math.min(window.innerWidth, t + s), l = Math.min(window.innerHeight, e + i), h = (r + o) / 2 - t, c = (a + l) / 2 - e, [d, f] = this.viewport.rotation % 180 === 0 ? [h, c] : [c, h];
  return {
    offsetX: d,
    offsetY: f
  };
}, lf = function() {
  for (const t of n(this, We).values())
    t.isEmpty() && t.remove();
}, T($s, "_initialized", !1), g($s, Ur, new Map([Bg, Zg, am, yf, rm].map((t) => [t._editorType, t])));
let Af = $s;
function Kv(p, t) {
  return p === t ? 0 : p.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}
function Su(p) {
  var t;
  return p ? p.nodeType === Node.ELEMENT_NODE ? p.closest(".textLayer") : ((t = p.parentElement) == null ? void 0 : t.closest(".textLayer")) || null : null;
}
function qv(p, t, e, s) {
  if (p === e)
    return t <= s;
  const i = p.compareDocumentPosition(e);
  return i & Node.DOCUMENT_POSITION_FOLLOWING ? !0 : i & Node.DOCUMENT_POSITION_PRECEDING ? !1 : null;
}
function pb(p, t, e) {
  if (p.nodeType !== Node.ELEMENT_NODE || !p.classList.contains("textLayer") || t !== p.childNodes.length)
    return {
      container: p,
      offset: t
    };
  let s = p.lastChild;
  return (s == null ? void 0 : s.nodeType) === Node.ELEMENT_NODE && s.classList.contains("endOfContent") && (s = s.previousSibling), !s || !e.contains(s) ? null : s.nodeType === Node.TEXT_NODE ? {
    container: s,
    offset: s.textContent.length
  } : {
    container: s,
    offset: s.childNodes.length
  };
}
var Ie, Le, Ns, ru, au, Lo, Ro, ou, Kf, Gr, $r, zr, Vr, Mn, xe, dm, um, $A, hf, zA, zi, fm, VA, pm;
const $ = class $ {
  constructor({
    filterFactory: t = null,
    pageColors: e = null,
    pageIndex: s,
    textLayer: i = null
  }) {
    g(this, zi);
    g(this, Ie, null);
    g(this, Le, /* @__PURE__ */ new Map());
    g(this, Ns, null);
    g(this, ru, null);
    g(this, au, null);
    g(this, Lo, null);
    g(this, Ro, /* @__PURE__ */ new Map());
    if (this.pageIndex = s, u(this, ru, t), u(this, au, e), i) {
      const r = n($, Mn).get(i);
      if (r != null && r.selectionDiv && (r.selectionDiv.remove(), n($, $r).delete(r.selectionDiv)), n($, Mn).set(i, {
        drawLayer: this
      }), n($, Vr).add(i), u(this, Ns, i), u(this, Lo, new MutationObserver((a) => {
        var o, l, h;
        if (!(!n(this, Ie) || !((o = n(this, Ns)) != null && o.isConnected) || !b(l = $, xe, um).call(l))) {
          for (const {
            addedNodes: c
          } of a)
            for (const d of c)
              if (d.nodeType === Node.ELEMENT_NODE && d.classList.contains("endOfContent")) {
                b(h = $, xe, hf).call(h);
                return;
              }
        }
      })), n(this, Lo).observe(i, {
        childList: !0
      }), n($, Gr) === null) {
        u($, Gr, new AbortController());
        const {
          signal: a
        } = n($, Gr);
        document.addEventListener("selectionchange", b($, xe, hf).bind($), {
          signal: a
        }), document.addEventListener("pointerdown", () => {
          u($, zr, !0);
        }, {
          signal: a
        }), document.addEventListener("pointerup", () => {
          u($, zr, !1);
        }, {
          signal: a
        }), window.addEventListener("blur", () => {
          u($, zr, !1);
        }, {
          signal: a
        });
      }
    }
  }
  setParent(t) {
    var e, s, i;
    if (!n(this, Ie)) {
      u(this, Ie, t), (e = n(this, Ns)) != null && e.isConnected && b(s = $, xe, um).call(s) && b(i = $, xe, hf).call(i);
      return;
    }
    if (n(this, Ie) !== t) {
      if (n(this, Le).size > 0)
        for (const r of n(this, Le).values())
          r.remove(), t.append(r);
      u(this, Ie, t);
    }
  }
  static get _svgFactory() {
    return R(this, "_svgFactory", new Ac());
  }
  draw(t, e = !1, s = !1) {
    const i = yt($, ou)._++, r = b(this, zi, fm).call(this), a = $._svgFactory.createElement("defs");
    r.append(a);
    const o = $._svgFactory.createElement("path");
    a.append(o);
    const l = `path_${i}`;
    o.setAttribute("id", l), o.setAttribute("vector-effect", "non-scaling-stroke"), e && n(this, Ro).set(i, o);
    const h = s ? b(this, zi, VA).call(this, a, l) : null, c = $._svgFactory.createElement("use");
    return r.append(c), c.setAttribute("href", `#${l}`), this.updateProperties(r, t), n(this, Le).set(i, r), {
      id: i,
      clipPathId: `url(#${h})`
    };
  }
  drawOutline(t, e) {
    const s = yt($, ou)._++, i = b(this, zi, fm).call(this), r = $._svgFactory.createElement("defs");
    i.append(r);
    const a = $._svgFactory.createElement("path");
    r.append(a);
    const o = `path_${s}`;
    a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke");
    let l;
    if (e) {
      const d = $._svgFactory.createElement("mask");
      r.append(d), l = `mask_${s}`, d.setAttribute("id", l), d.setAttribute("maskUnits", "objectBoundingBox");
      const f = $._svgFactory.createElement("rect");
      d.append(f), f.setAttribute("width", "1"), f.setAttribute("height", "1"), f.setAttribute("fill", "white");
      const m = $._svgFactory.createElement("use");
      d.append(m), m.setAttribute("href", `#${o}`), m.setAttribute("stroke", "none"), m.setAttribute("fill", "black"), m.setAttribute("fill-rule", "nonzero"), m.classList.add("mask");
    }
    const h = $._svgFactory.createElement("use");
    i.append(h), h.setAttribute("href", `#${o}`), l && h.setAttribute("mask", `url(#${l})`);
    const c = h.cloneNode();
    return i.append(c), h.classList.add("mainOutline"), c.classList.add("secondaryOutline"), this.updateProperties(i, t), n(this, Le).set(s, i), s;
  }
  finalizeDraw(t, e) {
    n(this, Ro).delete(t), this.updateProperties(t, e);
  }
  updateProperties(t, e) {
    var l;
    if (!e)
      return;
    const {
      root: s,
      bbox: i,
      rootClass: r,
      path: a
    } = e, o = typeof t == "number" ? n(this, Le).get(t) : t;
    if (o) {
      if (s && b(this, zi, pm).call(this, o, s), i && b(l = $, xe, zA).call(l, o, i), r) {
        const {
          classList: h
        } = o;
        for (const [c, d] of Object.entries(r))
          h.toggle(c, d);
      }
      if (a) {
        const c = o.firstElementChild.firstElementChild;
        b(this, zi, pm).call(this, c, a);
      }
    }
  }
  updateParent(t, e) {
    if (e === this)
      return;
    const s = n(this, Le).get(t);
    s && (n(e, Ie).append(s), n(this, Le).delete(t), n(e, Le).set(t, s));
  }
  remove(t) {
    n(this, Ro).delete(t), n(this, Ie) !== null && (n(this, Le).get(t).remove(), n(this, Le).delete(t));
  }
  destroy() {
    var t, e, s;
    u(this, Ie, null);
    for (const i of n(this, Le).values())
      i.remove();
    if (n(this, Le).clear(), n(this, Ro).clear(), (t = n(this, Lo)) == null || t.disconnect(), u(this, Lo, null), n(this, Ns)) {
      const i = n($, Mn).get(n(this, Ns));
      (i == null ? void 0 : i.drawLayer) === this && (b(e = $, xe, dm).call(e, n(this, Ns)), n($, Mn).delete(n(this, Ns)), n($, Vr).delete(n(this, Ns)), n($, Vr).size === 0 && ((s = n($, Gr)) == null || s.abort(), u($, Gr, null), u($, zr, !1))), u(this, Ns, null);
    }
  }
};
Ie = new WeakMap(), Le = new WeakMap(), Ns = new WeakMap(), ru = new WeakMap(), au = new WeakMap(), Lo = new WeakMap(), Ro = new WeakMap(), ou = new WeakMap(), Kf = new WeakMap(), Gr = new WeakMap(), $r = new WeakMap(), zr = new WeakMap(), Vr = new WeakMap(), Mn = new WeakMap(), xe = new WeakSet(), dm = function(t) {
  const e = n(this, Mn).get(t);
  e != null && e.selectionDiv && (e.selectionDiv.remove(), n(this, $r).delete(e.selectionDiv), e.selectionDiv = null, e.path = null);
}, um = function() {
  const t = document.getSelection();
  return !!t && !t.isCollapsed;
}, $A = function() {
  return n(this, Vr).keys().filter((t) => t.isConnected).toArray().sort(Kv);
}, hf = function() {
  var a;
  const t = document.getSelection();
  if (!t || t.isCollapsed) {
    for (const o of n(this, $r))
      o.remove();
    n(this, $r).clear();
    return;
  }
  const e = /* @__PURE__ */ new WeakMap(), s = b(this, xe, $A).call(this), i = [];
  for (let o = 0, l = t.rangeCount; o < l; o++) {
    const h = t.getRangeAt(o);
    if (h.collapsed)
      continue;
    let {
      startContainer: c,
      startOffset: d,
      endContainer: f,
      endOffset: m
    } = h, y = Su(c), A = Su(f);
    const w = y === null, v = A === null;
    if (n(this, zr) && w !== v)
      return;
    if (t.rangeCount === 1) {
      const {
        anchorNode: C,
        anchorOffset: x,
        focusNode: _,
        focusOffset: k
      } = t, M = Su(C), P = Su(_), D = qv(C, x, _, k);
      M && P && D !== null && (D ? (c = C, d = x, y = M, f = _, m = k, A = P) : (c = _, d = k, y = P, f = C, m = x, A = M));
    }
    const S = s.filter((C) => h.intersectsNode(C));
    if (S.length === 0)
      continue;
    let E = !1;
    if (y || (y = S[0], c = y, d = 0, E = !0), A || (A = S.at(-1), f = A, m = A.childNodes.length, E = !0), f.nodeType === Node.ELEMENT_NODE) {
      if (f.classList.contains("endOfContent")) {
        const C = f.previousSibling;
        if (!C)
          continue;
        f = C, m = C.nodeType === Node.TEXT_NODE ? C.textContent.length : C.childNodes.length;
      } else if (f.classList.contains("textLayer") && f.childNodes.length === m) {
        const C = pb(f, m, A);
        if (!C)
          continue;
        f = C.container, m = C.offset;
      }
    }
    if (c.nodeType === Node.ELEMENT_NODE) {
      const C = pb(c, d, y);
      if (!C)
        continue;
      c = C.container, d = C.offset;
    }
    if (y === A && !E && S.includes(y)) {
      i.push([h, y]);
      continue;
    }
    for (const C of S) {
      const x = C.firstChild;
      if (!x)
        continue;
      const _ = document.createRange();
      if (C === y ? _.setStart(c, d) : _.setStartBefore(x), C === A)
        _.setEnd(f, m);
      else {
        const k = C.lastChild;
        if (!k)
          continue;
        if (k.nodeType === Node.ELEMENT_NODE && k.classList.contains("endOfContent")) {
          const M = k.previousSibling;
          if (!M)
            continue;
          _.setEndAfter(M);
        } else
          _.setEndAfter(k);
      }
      _.collapsed || i.push([_, C]);
    }
  }
  const r = new Set(i.map((o) => o[1]));
  for (const o of n(this, Vr))
    r.has(o) || b(this, xe, dm).call(this, o);
  for (const [o, l] of i) {
    const h = n($, Mn).get(l);
    if (!h)
      continue;
    let c = e.get(l);
    if (!c) {
      const A = l.getBoundingClientRect();
      c = (w, v, S, E) => ({
        x: (w - A.x) / A.width,
        y: (v - A.y) / A.height,
        width: S / A.width,
        height: E / A.height
      }), e.set(l, c);
    }
    const d = [];
    for (let {
      x: A,
      y: w,
      width: v,
      height: S
    } of o.getClientRects())
      v === 0 || S === 0 || ({
        x: A,
        y: w,
        width: v,
        height: S
      } = c(A, w, v, S), !(v === 1 && S === 1) && d.push(`M${A} ${w} h${v} v${S} h-${v} Z`));
    if (d.length === 0)
      continue;
    const f = h.drawLayer;
    let m = h.selectionDiv, y = h.path;
    if (!m) {
      const A = `clip_selection_${yt($, Kf)._++}`;
      m = document.createElement("div"), m.className = "selection", m.style.clipPath = `url(#${A})`;
      const w = (a = n(f, ru)) == null ? void 0 : a.createSelectionStyle(n(f, au));
      if (w)
        for (const [E, C] of Object.entries(w))
          m.style.setProperty(E, C);
      const v = $._svgFactory.create(1, 1, !0);
      v.setAttribute("aria-hidden", "true"), v.setAttribute("width", "100%"), v.setAttribute("height", "100%");
      const S = $._svgFactory.createElement("clipPath");
      S.setAttribute("id", A), S.setAttribute("clipPathUnits", "objectBoundingBox"), y = $._svgFactory.createElement("path"), S.append(y), v.append(S), m.append(v), h.path = y, h.selectionDiv = m;
    }
    n(f, Ie) && m.parentNode !== n(f, Ie) && (n(f, Ie).append(m), n(this, $r).add(m)), y.setAttribute("d", d.join(" "));
  }
}, zA = function(t, [e, s, i, r]) {
  const {
    style: a
  } = t;
  a.top = `${100 * s}%`, a.left = `${100 * e}%`, a.width = `${100 * i}%`, a.height = `${100 * r}%`;
}, zi = new WeakSet(), fm = function() {
  const t = $._svgFactory.create(1, 1, !0);
  return n(this, Ie).append(t), t.setAttribute("aria-hidden", "true"), t;
}, VA = function(t, e) {
  const s = $._svgFactory.createElement("clipPath");
  t.append(s);
  const i = `clip_${e}`;
  s.setAttribute("id", i), s.setAttribute("clipPathUnits", "objectBoundingBox");
  const r = $._svgFactory.createElement("use");
  return s.append(r), r.setAttribute("href", `#${e}`), r.classList.add("clip"), i;
}, pm = function(t, e) {
  for (const [s, i] of Object.entries(e))
    i === null ? t.removeAttribute(s) : t.setAttribute(s, i);
}, g($, xe), g($, ou, 0), g($, Kf, 0), g($, Gr, null), g($, $r, /* @__PURE__ */ new Set()), g($, zr, !1), g($, Vr, /* @__PURE__ */ new Set()), g($, Mn, /* @__PURE__ */ new WeakMap());
let wf = $;
function Eu(p) {
  return `${(p * 100).toFixed(2)}%`;
}
var Th, lu, hu, kh, Oi, Ni, cu, qf, jA;
const uc = class uc {
  constructor(t, e, s, i) {
    g(this, qf);
    g(this, Th, []);
    g(this, lu, /* @__PURE__ */ new Map());
    g(this, hu, null);
    g(this, kh, 0);
    g(this, Oi, 0);
    g(this, Ni, 0);
    u(this, kh, t), u(this, Th, e), u(this, Oi, s.rawDims.pageWidth), u(this, Ni, s.rawDims.pageHeight), u(this, hu, i);
  }
  render() {
    const t = document.createElement("div");
    t.className = "textLayerImages";
    for (let e = 0; e < n(this, Th).length; e += 6) {
      const s = b(this, qf, jA).call(this, n(this, Th).subarray(e, e + 6));
      s && t.append(s);
    }
    return t.addEventListener("contextmenu", (e) => {
      var v;
      if (!(e.target instanceof HTMLCanvasElement))
        return;
      const s = e.target, i = n(this, lu).get(s);
      if (!i)
        return;
      const r = (v = n(uc, cu)) == null ? void 0 : v.deref();
      if (r === s)
        return;
      r && (r.width = 0, r.height = 0), u(uc, cu, new WeakRef(s));
      const {
        inverseTransform: a,
        x1: o,
        y1: l,
        width: h,
        height: c
      } = i, d = n(this, hu).call(this), f = Math.ceil(o * d.width), m = Math.ceil(l * d.height), y = Math.floor((o + h / n(this, Oi)) * d.width), A = Math.floor((l + c / n(this, Ni)) * d.height);
      s.width = y - f, s.height = A - m;
      const w = s.getContext("2d");
      w.setTransform(...a), w.translate(-f, -m), w.drawImage(d, 0, 0);
    }), t;
  }
};
Th = new WeakMap(), lu = new WeakMap(), hu = new WeakMap(), kh = new WeakMap(), Oi = new WeakMap(), Ni = new WeakMap(), cu = new WeakMap(), qf = new WeakSet(), jA = function([t, e, s, i, r, a]) {
  const o = Math.hypot((r - t) * n(this, Oi), (a - e) * n(this, Ni)), l = Math.hypot((s - t) * n(this, Oi), (i - e) * n(this, Ni));
  if (o < n(this, kh) || l < n(this, kh))
    return null;
  const h = [(r - t) * n(this, Oi) / o, (a - e) * n(this, Ni) / o, (s - t) * n(this, Oi) / l, (i - e) * n(this, Ni) / l, 0, 0], c = I.inverseTransform(h), d = document.createElement("canvas");
  return d.className = "textLayerImagePlaceholder", d.width = 0, d.height = 0, Object.assign(d.style, {
    opacity: 0,
    position: "absolute",
    left: Eu(t),
    top: Eu(e),
    width: Eu(o / n(this, Oi)),
    height: Eu(l / n(this, Ni)),
    transformOrigin: "0% 0%",
    transform: `matrix(${h.join(",")})`
  }), n(this, lu).set(d, {
    inverseTransform: c,
    width: o,
    height: l,
    x1: t,
    y1: e
  }), d;
}, g(uc, cu, null);
let vf = uc;
globalThis._pdfjsTestingUtils = {
  HighlightOutliner: Xg
};
globalThis.pdfjsLib = {
  AbortException: Rn,
  AnnotationEditorLayer: Af,
  AnnotationEditorParamsType: et,
  AnnotationEditorType: W,
  AnnotationEditorUIManager: Wr,
  AnnotationLayer: mf,
  AnnotationMode: Dn,
  AnnotationType: Et,
  applyOpacity: Eb,
  build: Ky,
  ColorPicker: yc,
  createValidAbsoluteUrl: gm,
  CSSConstants: Sb,
  DOMSVGFactory: Ac,
  DrawLayer: wf,
  FeatureTest: ot,
  fetchData: sp,
  findContrastColor: Cb,
  getDocument: jy,
  getFilenameFromUrl: wb,
  getPdfFilenameFromUrl: vb,
  getRGB: Fh,
  getRGBA: Uo,
  getUuid: bm,
  GlobalWorkerOptions: Bi,
  ImageKind: ac,
  InvalidPDFException: df,
  isDataScheme: fu,
  isPdfFile: np,
  isValidExplicitDest: cy,
  makeArr: Ho,
  makeMap: tp,
  makeObj: uf,
  makeSet: Ab,
  MathClamp: wt,
  noContextMenu: Us,
  normalizeUnicode: yb,
  OPS: ni,
  OutputScale: bs,
  PasswordException: cf,
  PasswordResponses: bb,
  PDFDataRangeTransport: Sm,
  PDFDateString: gc,
  PDFWorker: Dh,
  PermissionFlag: mb,
  PixelsPerInch: Fn,
  RenderingCancelledException: ip,
  renderRichText: ym,
  ResponseException: fc,
  setLayerDimensions: jr,
  shadow: R,
  SignatureExtractor: Hi,
  stopEvent: Kt,
  SupportedImageMimeTypes: ff,
  TextLayer: Mh,
  TextLayerImages: vf,
  TouchManager: Am,
  updateUrlHash: mm,
  Util: I,
  VerbosityLevel: du,
  version: Yy,
  XfaLayer: ep
};
const Jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbortException: Rn,
  AnnotationEditorLayer: Af,
  AnnotationEditorParamsType: et,
  AnnotationEditorType: W,
  AnnotationEditorUIManager: Wr,
  AnnotationLayer: mf,
  AnnotationMode: Dn,
  AnnotationType: Et,
  CSSConstants: Sb,
  ColorPicker: yc,
  DOMSVGFactory: Ac,
  DrawLayer: wf,
  FeatureTest: ot,
  GlobalWorkerOptions: Bi,
  ImageKind: ac,
  InvalidPDFException: df,
  MathClamp: wt,
  OPS: ni,
  OutputScale: bs,
  PDFDataRangeTransport: Sm,
  PDFDateString: gc,
  PDFWorker: Dh,
  PasswordException: cf,
  PasswordResponses: bb,
  PermissionFlag: mb,
  PixelsPerInch: Fn,
  RenderingCancelledException: ip,
  ResponseException: fc,
  SignatureExtractor: Hi,
  SupportedImageMimeTypes: ff,
  TextLayer: Mh,
  TextLayerImages: vf,
  TouchManager: Am,
  Util: I,
  VerbosityLevel: du,
  XfaLayer: ep,
  applyOpacity: Eb,
  build: Ky,
  createValidAbsoluteUrl: gm,
  fetchData: sp,
  findContrastColor: Cb,
  getDocument: jy,
  getFilenameFromUrl: wb,
  getPdfFilenameFromUrl: vb,
  getRGB: Fh,
  getRGBA: Uo,
  getUuid: bm,
  isDataScheme: fu,
  isPdfFile: np,
  isValidExplicitDest: cy,
  makeArr: Ho,
  makeMap: tp,
  makeObj: uf,
  makeSet: Ab,
  noContextMenu: Us,
  normalizeUnicode: yb,
  renderRichText: ym,
  setLayerDimensions: jr,
  shadow: R,
  stopEvent: Kt,
  updateUrlHash: mm,
  version: Yy
}, Symbol.toStringTag, { value: "Module" }));
export {
  Rn as AbortException,
  Af as AnnotationEditorLayer,
  et as AnnotationEditorParamsType,
  W as AnnotationEditorType,
  Wr as AnnotationEditorUIManager,
  mf as AnnotationLayer,
  Dn as AnnotationMode,
  Et as AnnotationType,
  Sb as CSSConstants,
  yc as ColorPicker,
  Ac as DOMSVGFactory,
  wf as DrawLayer,
  ot as FeatureTest,
  Bi as GlobalWorkerOptions,
  ac as ImageKind,
  df as InvalidPDFException,
  wt as MathClamp,
  ni as OPS,
  bs as OutputScale,
  Sm as PDFDataRangeTransport,
  gc as PDFDateString,
  Dh as PDFWorker,
  cf as PasswordException,
  bb as PasswordResponses,
  mb as PermissionFlag,
  Fn as PixelsPerInch,
  ip as RenderingCancelledException,
  fc as ResponseException,
  Hi as SignatureExtractor,
  ff as SupportedImageMimeTypes,
  Mh as TextLayer,
  vf as TextLayerImages,
  Am as TouchManager,
  I as Util,
  du as VerbosityLevel,
  ep as XfaLayer,
  Eb as applyOpacity,
  Ky as build,
  gm as createValidAbsoluteUrl,
  Jv as default,
  sp as fetchData,
  Cb as findContrastColor,
  jy as getDocument,
  wb as getFilenameFromUrl,
  vb as getPdfFilenameFromUrl,
  Fh as getRGB,
  Uo as getRGBA,
  bm as getUuid,
  fu as isDataScheme,
  np as isPdfFile,
  cy as isValidExplicitDest,
  Ho as makeArr,
  tp as makeMap,
  uf as makeObj,
  Ab as makeSet,
  Us as noContextMenu,
  yb as normalizeUnicode,
  ym as renderRichText,
  jr as setLayerDimensions,
  R as shadow,
  Kt as stopEvent,
  mm as updateUrlHash,
  Yy as version
};

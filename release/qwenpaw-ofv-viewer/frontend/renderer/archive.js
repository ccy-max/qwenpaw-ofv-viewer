var ps = Object.defineProperty;
var gs = (e, n, t) => n in e ? ps(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var Zn = (e, n, t) => gs(e, typeof n != "symbol" ? n + "" : n, t);
function eo(e, n) {
  for (var t = 0; t < n.length; t++) {
    const r = n[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const a in r)
        if (a !== "default" && !(a in e)) {
          const i = Object.getOwnPropertyDescriptor(r, a);
          i && Object.defineProperty(e, a, i.get ? i : {
            enumerable: !0,
            get: () => r[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var ms = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
function si(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function _s(e) {
  if (e.__esModule) return e;
  var n = e.default;
  if (typeof n == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    t.prototype = n.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(t, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), t;
}
function Wn(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var to = { exports: {} };
/*!

JSZip v3.10.2 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(e, n) {
  (function(t) {
    e.exports = t();
  })(function() {
    return function t(r, a, i) {
      function s(l, A) {
        if (!a[l]) {
          if (!r[l]) {
            var b = typeof Wn == "function" && Wn;
            if (!A && b) return b(l, !0);
            if (o) return o(l, !0);
            var _ = new Error("Cannot find module '" + l + "'");
            throw _.code = "MODULE_NOT_FOUND", _;
          }
          var f = a[l] = { exports: {} };
          r[l][0].call(f.exports, function(g) {
            var p = r[l][1][g];
            return s(p || g);
          }, f, f.exports, t, r, a, i);
        }
        return a[l].exports;
      }
      for (var o = typeof Wn == "function" && Wn, d = 0; d < i.length; d++) s(i[d]);
      return s;
    }({ 1: [function(t, r, a) {
      var i = t("./utils"), s = t("./support"), o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      a.encode = function(d) {
        for (var l, A, b, _, f, g, p, m = [], u = 0, C = d.length, v = C, y = i.getTypeOf(d) !== "string"; u < d.length; ) v = C - u, b = y ? (l = d[u++], A = u < C ? d[u++] : 0, u < C ? d[u++] : 0) : (l = d.charCodeAt(u++), A = u < C ? d.charCodeAt(u++) : 0, u < C ? d.charCodeAt(u++) : 0), _ = l >> 2, f = (3 & l) << 4 | A >> 4, g = 1 < v ? (15 & A) << 2 | b >> 6 : 64, p = 2 < v ? 63 & b : 64, m.push(o.charAt(_) + o.charAt(f) + o.charAt(g) + o.charAt(p));
        return m.join("");
      }, a.decode = function(d) {
        var l, A, b, _, f, g, p = 0, m = 0, u = "data:";
        if (d.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
        var C, v = 3 * (d = d.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (d.charAt(d.length - 1) === o.charAt(64) && v--, d.charAt(d.length - 2) === o.charAt(64) && v--, v % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
        for (C = s.uint8array ? new Uint8Array(0 | v) : new Array(0 | v); p < d.length; ) l = o.indexOf(d.charAt(p++)) << 2 | (_ = o.indexOf(d.charAt(p++))) >> 4, A = (15 & _) << 4 | (f = o.indexOf(d.charAt(p++))) >> 2, b = (3 & f) << 6 | (g = o.indexOf(d.charAt(p++))), C[m++] = l, f !== 64 && (C[m++] = A), g !== 64 && (C[m++] = b);
        return C;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(t, r, a) {
      var i = t("./external"), s = t("./stream/DataWorker"), o = t("./stream/Crc32Probe"), d = t("./stream/DataLengthProbe");
      function l(A, b, _, f, g) {
        this.compressedSize = A, this.uncompressedSize = b, this.crc32 = _, this.compression = f, this.compressedContent = g;
      }
      l.prototype = { getContentWorker: function() {
        var A = new s(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new d("data_length")), b = this;
        return A.on("end", function() {
          if (this.streamInfo.data_length !== b.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
        }), A;
      }, getCompressedWorker: function() {
        return new s(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, l.createWorkerFrom = function(A, b, _) {
        return A.pipe(new o()).pipe(new d("uncompressedSize")).pipe(b.compressWorker(_)).pipe(new d("compressedSize")).withStreamInfo("compression", b);
      }, r.exports = l;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(t, r, a) {
      var i = t("./stream/GenericWorker");
      a.STORE = { magic: "\0\0", compressWorker: function() {
        return new i("STORE compression");
      }, uncompressWorker: function() {
        return new i("STORE decompression");
      } }, a.DEFLATE = t("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(t, r, a) {
      var i = t("./utils"), s = function() {
        for (var o, d = [], l = 0; l < 256; l++) {
          o = l;
          for (var A = 0; A < 8; A++) o = 1 & o ? 3988292384 ^ o >>> 1 : o >>> 1;
          d[l] = o;
        }
        return d;
      }();
      r.exports = function(o, d) {
        return o !== void 0 && o.length ? i.getTypeOf(o) !== "string" ? function(l, A, b, _) {
          var f = s, g = _ + b;
          l ^= -1;
          for (var p = _; p < g; p++) l = l >>> 8 ^ f[255 & (l ^ A[p])];
          return -1 ^ l;
        }(0 | d, o, o.length, 0) : function(l, A, b, _) {
          var f = s, g = _ + b;
          l ^= -1;
          for (var p = _; p < g; p++) l = l >>> 8 ^ f[255 & (l ^ A.charCodeAt(p))];
          return -1 ^ l;
        }(0 | d, o, o.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(t, r, a) {
      a.base64 = !1, a.binary = !1, a.dir = !1, a.createFolders = !0, a.date = null, a.compression = null, a.compressionOptions = null, a.comment = null, a.unixPermissions = null, a.dosPermissions = null;
    }, {}], 6: [function(t, r, a) {
      var i = null;
      i = typeof Promise < "u" ? Promise : t("lie"), r.exports = { Promise: i };
    }, { lie: 37 }], 7: [function(t, r, a) {
      var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = t("pako"), o = t("./utils"), d = t("./stream/GenericWorker"), l = i ? "uint8array" : "array";
      function A(b, _) {
        d.call(this, "FlateWorker/" + b), this._pako = null, this._pakoAction = b, this._pakoOptions = _, this.meta = {};
      }
      a.magic = "\b\0", o.inherits(A, d), A.prototype.processChunk = function(b) {
        this.meta = b.meta, this._pako === null && this._createPako(), this._pako.push(o.transformTo(l, b.data), !1);
      }, A.prototype.flush = function() {
        d.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, A.prototype.cleanUp = function() {
        d.prototype.cleanUp.call(this), this._pako = null;
      }, A.prototype._createPako = function() {
        this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var b = this;
        this._pako.onData = function(_) {
          b.push({ data: _, meta: b.meta });
        };
      }, a.compressWorker = function(b) {
        return new A("Deflate", b);
      }, a.uncompressWorker = function() {
        return new A("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(t, r, a) {
      function i(f, g) {
        var p, m = "";
        for (p = 0; p < g; p++) m += String.fromCharCode(255 & f), f >>>= 8;
        return m;
      }
      function s(f, g, p, m, u, C) {
        var v, y, k = f.file, O = f.compression, S = C !== l.utf8encode, F = o.transformTo("string", C(k.name)), D = o.transformTo("string", l.utf8encode(k.name)), Q = k.comment, R = o.transformTo("string", C(Q)), E = o.transformTo("string", l.utf8encode(Q)), z = D.length !== k.name.length, h = E.length !== Q.length, U = "", re = "", K = "", ie = k.dir, G = k.date, ae = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        g && !p || (ae.crc32 = f.crc32, ae.compressedSize = f.compressedSize, ae.uncompressedSize = f.uncompressedSize);
        var P = 0;
        g && (P |= 8), S || !z && !h || (P |= 2048);
        var B = 0, $ = 0;
        ie && (B |= 16), u === "UNIX" ? ($ = 798, B |= function(W, le) {
          var ce = W;
          return W || (ce = le ? 16893 : 33204), (65535 & ce) << 16;
        }(k.unixPermissions, ie)) : ($ = 20, B |= function(W) {
          return 63 & (W || 0);
        }(k.dosPermissions)), v = G.getUTCHours(), v <<= 6, v |= G.getUTCMinutes(), v <<= 5, v |= G.getUTCSeconds() / 2, y = G.getUTCFullYear() - 1980, y <<= 4, y |= G.getUTCMonth() + 1, y <<= 5, y |= G.getUTCDate(), z && (re = i(1, 1) + i(A(F), 4) + D, U += "up" + i(re.length, 2) + re), h && (K = i(1, 1) + i(A(R), 4) + E, U += "uc" + i(K.length, 2) + K);
        var H = "";
        return H += `
\0`, H += i(P, 2), H += O.magic, H += i(v, 2), H += i(y, 2), H += i(ae.crc32, 4), H += i(ae.compressedSize, 4), H += i(ae.uncompressedSize, 4), H += i(F.length, 2), H += i(U.length, 2), { fileRecord: b.LOCAL_FILE_HEADER + H + F + U, dirRecord: b.CENTRAL_FILE_HEADER + i($, 2) + H + i(R.length, 2) + "\0\0\0\0" + i(B, 4) + i(m, 4) + F + U + R };
      }
      var o = t("../utils"), d = t("../stream/GenericWorker"), l = t("../utf8"), A = t("../crc32"), b = t("../signature");
      function _(f, g, p, m) {
        d.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = g, this.zipPlatform = p, this.encodeFileName = m, this.streamFiles = f, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      o.inherits(_, d), _.prototype.push = function(f) {
        var g = f.meta.percent || 0, p = this.entriesCount, m = this._sources.length;
        this.accumulate ? this.contentBuffer.push(f) : (this.bytesWritten += f.data.length, d.prototype.push.call(this, { data: f.data, meta: { currentFile: this.currentFile, percent: p ? (g + 100 * (p - m - 1)) / p : 100 } }));
      }, _.prototype.openedSource = function(f) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = f.file.name;
        var g = this.streamFiles && !f.file.dir;
        if (g) {
          var p = s(f, g, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: p.fileRecord, meta: { percent: 0 } });
        } else this.accumulate = !0;
      }, _.prototype.closedSource = function(f) {
        this.accumulate = !1;
        var g = this.streamFiles && !f.file.dir, p = s(f, g, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(p.dirRecord), g) this.push({ data: function(m) {
          return b.DATA_DESCRIPTOR + i(m.crc32, 4) + i(m.compressedSize, 4) + i(m.uncompressedSize, 4);
        }(f), meta: { percent: 100 } });
        else for (this.push({ data: p.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, _.prototype.flush = function() {
        for (var f = this.bytesWritten, g = 0; g < this.dirRecords.length; g++) this.push({ data: this.dirRecords[g], meta: { percent: 100 } });
        var p = this.bytesWritten - f, m = function(u, C, v, y, k) {
          var O = o.transformTo("string", k(y));
          return b.CENTRAL_DIRECTORY_END + "\0\0\0\0" + i(u, 2) + i(u, 2) + i(C, 4) + i(v, 4) + i(O.length, 2) + O;
        }(this.dirRecords.length, p, f, this.zipComment, this.encodeFileName);
        this.push({ data: m, meta: { percent: 100 } });
      }, _.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, _.prototype.registerPrevious = function(f) {
        this._sources.push(f);
        var g = this;
        return f.on("data", function(p) {
          g.processChunk(p);
        }), f.on("end", function() {
          g.closedSource(g.previous.streamInfo), g._sources.length ? g.prepareNextSource() : g.end();
        }), f.on("error", function(p) {
          g.error(p);
        }), this;
      }, _.prototype.resume = function() {
        return !!d.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, _.prototype.error = function(f) {
        var g = this._sources;
        if (!d.prototype.error.call(this, f)) return !1;
        for (var p = 0; p < g.length; p++) try {
          g[p].error(f);
        } catch {
        }
        return !0;
      }, _.prototype.lock = function() {
        d.prototype.lock.call(this);
        for (var f = this._sources, g = 0; g < f.length; g++) f[g].lock();
      }, r.exports = _;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(t, r, a) {
      var i = t("../compressions"), s = t("./ZipFileWorker");
      a.generateWorker = function(o, d, l) {
        var A = new s(d.streamFiles, l, d.platform, d.encodeFileName), b = 0;
        try {
          o.forEach(function(_, f) {
            b++;
            var g = function(C, v) {
              var y = C || v, k = i[y];
              if (!k) throw new Error(y + " is not a valid compression method !");
              return k;
            }(f.options.compression, d.compression), p = f.options.compressionOptions || d.compressionOptions || {}, m = f.dir, u = f.date;
            f._compressWorker(g, p).withStreamInfo("file", { name: _, dir: m, date: u, comment: f.comment || "", unixPermissions: f.unixPermissions, dosPermissions: f.dosPermissions }).pipe(A);
          }), A.entriesCount = b;
        } catch (_) {
          A.error(_);
        }
        return A;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(t, r, a) {
      function i() {
        if (!(this instanceof i)) return new i();
        if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var s = new i();
          for (var o in this) typeof this[o] != "function" && (s[o] = this[o]);
          return s;
        };
      }
      (i.prototype = t("./object")).loadAsync = t("./load"), i.support = t("./support"), i.defaults = t("./defaults"), i.version = "3.10.2", i.loadAsync = function(s, o) {
        return new i().loadAsync(s, o);
      }, i.external = t("./external"), r.exports = i;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(t, r, a) {
      var i = t("./utils"), s = t("./external"), o = t("./utf8"), d = t("./zipEntries"), l = t("./stream/Crc32Probe"), A = t("./nodejsUtils");
      function b(_) {
        return new s.Promise(function(f, g) {
          var p = _.decompressed.getContentWorker().pipe(new l());
          p.on("error", function(m) {
            g(m);
          }).on("end", function() {
            p.streamInfo.crc32 !== _.decompressed.crc32 ? g(new Error("Corrupted zip : CRC32 mismatch")) : f();
          }).resume();
        });
      }
      r.exports = function(_, f) {
        var g = this;
        return f = i.extend(f || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: o.utf8decode }), A.isNode && A.isStream(_) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : i.prepareContent("the loaded zip file", _, !0, f.optimizedBinaryString, f.base64).then(function(p) {
          var m = new d(f);
          return m.load(p), m;
        }).then(function(p) {
          var m = [s.Promise.resolve(p)], u = p.files;
          if (f.checkCRC32) for (var C = 0; C < u.length; C++) m.push(b(u[C]));
          return s.Promise.all(m);
        }).then(function(p) {
          for (var m = p.shift(), u = m.files, C = 0; C < u.length; C++) {
            var v = u[C], y = v.fileNameStr, k = i.resolve(v.fileNameStr);
            g.file(k, v.decompressed, { binary: !0, optimizedBinaryString: !0, date: v.date, dir: v.dir, comment: v.fileCommentStr.length ? v.fileCommentStr : null, unixPermissions: v.unixPermissions, dosPermissions: v.dosPermissions, createFolders: f.createFolders }), v.dir || (g.file(k).unsafeOriginalName = y);
          }
          return m.zipComment.length && (g.comment = m.zipComment), g;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(t, r, a) {
      var i = t("../utils"), s = t("../stream/GenericWorker");
      function o(d, l) {
        s.call(this, "Nodejs stream input adapter for " + d), this._upstreamEnded = !1, this._bindStream(l);
      }
      i.inherits(o, s), o.prototype._bindStream = function(d) {
        var l = this;
        (this._stream = d).pause(), d.on("data", function(A) {
          l.push({ data: A, meta: { percent: 0 } });
        }).on("error", function(A) {
          l.isPaused ? this.generatedError = A : l.error(A);
        }).on("end", function() {
          l.isPaused ? l._upstreamEnded = !0 : l.end();
        });
      }, o.prototype.pause = function() {
        return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, o.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, r.exports = o;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(t, r, a) {
      var i = t("readable-stream").Readable;
      function s(o, d, l) {
        i.call(this, d), this._helper = o;
        var A = this;
        o.on("data", function(b, _) {
          A.push(b) || A._helper.pause(), l && l(_);
        }).on("error", function(b) {
          A.emit("error", b);
        }).on("end", function() {
          A.push(null);
        });
      }
      t("../utils").inherits(s, i), s.prototype._read = function() {
        this._helper.resume();
      }, r.exports = s;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(t, r, a) {
      r.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(i, s) {
        if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(i, s);
        if (typeof i == "number") throw new Error('The "data" argument must not be a number');
        return new Buffer(i, s);
      }, allocBuffer: function(i) {
        if (Buffer.alloc) return Buffer.alloc(i);
        var s = new Buffer(i);
        return s.fill(0), s;
      }, isBuffer: function(i) {
        return Buffer.isBuffer(i);
      }, isStream: function(i) {
        return i && typeof i.on == "function" && typeof i.pause == "function" && typeof i.resume == "function";
      } };
    }, {}], 15: [function(t, r, a) {
      function i(k, O, S) {
        var F, D = o.getTypeOf(O), Q = o.extend(S || {}, A);
        Q.date = Q.date || /* @__PURE__ */ new Date(), Q.compression !== null && (Q.compression = Q.compression.toUpperCase()), typeof Q.unixPermissions == "string" && (Q.unixPermissions = parseInt(Q.unixPermissions, 8)), Q.unixPermissions && 16384 & Q.unixPermissions && (Q.dir = !0), Q.dosPermissions && 16 & Q.dosPermissions && (Q.dir = !0), Q.dir && (k = u(k)), Q.createFolders && (F = m(k)) && C.call(this, F, !0);
        var R = D === "string" && Q.binary === !1 && Q.base64 === !1;
        S && S.binary !== void 0 || (Q.binary = !R), (O instanceof b && O.uncompressedSize === 0 || Q.dir || !O || O.length === 0) && (Q.base64 = !1, Q.binary = !0, O = "", Q.compression = "STORE", D = "string");
        var E = null;
        E = O instanceof b || O instanceof d ? O : g.isNode && g.isStream(O) ? new p(k, O) : o.prepareContent(k, O, Q.binary, Q.optimizedBinaryString, Q.base64);
        var z = new _(k, E, Q);
        this.files[k] = z;
      }
      var s = t("./utf8"), o = t("./utils"), d = t("./stream/GenericWorker"), l = t("./stream/StreamHelper"), A = t("./defaults"), b = t("./compressedObject"), _ = t("./zipObject"), f = t("./generate"), g = t("./nodejsUtils"), p = t("./nodejs/NodejsStreamInputAdapter"), m = function(k) {
        k.slice(-1) === "/" && (k = k.substring(0, k.length - 1));
        var O = k.lastIndexOf("/");
        return 0 < O ? k.substring(0, O) : "";
      }, u = function(k) {
        return k.slice(-1) !== "/" && (k += "/"), k;
      }, C = function(k, O) {
        return O = O !== void 0 ? O : A.createFolders, k = u(k), this.files[k] || i.call(this, k, null, { dir: !0, createFolders: O }), this.files[k];
      };
      function v(k) {
        return Object.prototype.toString.call(k) === "[object RegExp]";
      }
      var y = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(k) {
        var O, S, F;
        for (O in this.files) F = this.files[O], (S = O.slice(this.root.length, O.length)) && O.slice(0, this.root.length) === this.root && k(S, F);
      }, filter: function(k) {
        var O = [];
        return this.forEach(function(S, F) {
          k(S, F) && O.push(F);
        }), O;
      }, file: function(k, O, S) {
        if (arguments.length !== 1) return k = this.root + k, i.call(this, k, O, S), this;
        if (v(k)) {
          var F = k;
          return this.filter(function(Q, R) {
            return !R.dir && F.test(Q);
          });
        }
        var D = this.files[this.root + k];
        return D && !D.dir ? D : null;
      }, folder: function(k) {
        if (!k) return this;
        if (v(k)) return this.filter(function(D, Q) {
          return Q.dir && k.test(D);
        });
        var O = this.root + k, S = C.call(this, O), F = this.clone();
        return F.root = S.name, F;
      }, remove: function(k) {
        k = this.root + k;
        var O = this.files[k];
        if (O || (k.slice(-1) !== "/" && (k += "/"), O = this.files[k]), O && !O.dir) delete this.files[k];
        else for (var S = this.filter(function(D, Q) {
          return Q.name.slice(0, k.length) === k;
        }), F = 0; F < S.length; F++) delete this.files[S[F].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(k) {
        var O, S = {};
        try {
          if ((S = o.extend(k || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = S.type.toLowerCase(), S.compression = S.compression.toUpperCase(), S.type === "binarystring" && (S.type = "string"), !S.type) throw new Error("No output type specified.");
          o.checkSupport(S.type), S.platform !== "darwin" && S.platform !== "freebsd" && S.platform !== "linux" && S.platform !== "sunos" || (S.platform = "UNIX"), S.platform === "win32" && (S.platform = "DOS");
          var F = S.comment || this.comment || "";
          O = f.generateWorker(this, S, F);
        } catch (D) {
          (O = new d("error")).error(D);
        }
        return new l(O, S.type || "string", S.mimeType);
      }, generateAsync: function(k, O) {
        return this.generateInternalStream(k).accumulate(O);
      }, generateNodeStream: function(k, O) {
        return (k = k || {}).type || (k.type = "nodebuffer"), this.generateInternalStream(k).toNodejsStream(O);
      } };
      r.exports = y;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(t, r, a) {
      r.exports = t("stream");
    }, { stream: void 0 }], 17: [function(t, r, a) {
      var i = t("./DataReader");
      function s(o) {
        i.call(this, o);
        for (var d = 0; d < this.data.length; d++) o[d] = 255 & o[d];
      }
      t("../utils").inherits(s, i), s.prototype.byteAt = function(o) {
        return this.data[this.zero + o];
      }, s.prototype.lastIndexOfSignature = function(o) {
        for (var d = o.charCodeAt(0), l = o.charCodeAt(1), A = o.charCodeAt(2), b = o.charCodeAt(3), _ = this.length - 4; 0 <= _; --_) if (this.data[_] === d && this.data[_ + 1] === l && this.data[_ + 2] === A && this.data[_ + 3] === b) return _ - this.zero;
        return -1;
      }, s.prototype.readAndCheckSignature = function(o) {
        var d = o.charCodeAt(0), l = o.charCodeAt(1), A = o.charCodeAt(2), b = o.charCodeAt(3), _ = this.readData(4);
        return d === _[0] && l === _[1] && A === _[2] && b === _[3];
      }, s.prototype.readData = function(o) {
        if (this.checkOffset(o), o === 0) return [];
        var d = this.data.slice(this.zero + this.index, this.zero + this.index + o);
        return this.index += o, d;
      }, r.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(t, r, a) {
      var i = t("../utils");
      function s(o) {
        this.data = o, this.length = o.length, this.index = 0, this.zero = 0;
      }
      s.prototype = { checkOffset: function(o) {
        this.checkIndex(this.index + o);
      }, checkIndex: function(o) {
        if (this.length < this.zero + o || o < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + o + "). Corrupted zip ?");
      }, setIndex: function(o) {
        this.checkIndex(o), this.index = o;
      }, skip: function(o) {
        this.setIndex(this.index + o);
      }, byteAt: function() {
      }, readInt: function(o) {
        var d, l = 0;
        for (this.checkOffset(o), d = this.index + o - 1; d >= this.index; d--) l = (l << 8) + this.byteAt(d);
        return this.index += o, l;
      }, readString: function(o) {
        return i.transformTo("string", this.readData(o));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var o = this.readInt(4);
        return new Date(Date.UTC(1980 + (o >> 25 & 127), (o >> 21 & 15) - 1, o >> 16 & 31, o >> 11 & 31, o >> 5 & 63, (31 & o) << 1));
      } }, r.exports = s;
    }, { "../utils": 32 }], 19: [function(t, r, a) {
      var i = t("./Uint8ArrayReader");
      function s(o) {
        i.call(this, o);
      }
      t("../utils").inherits(s, i), s.prototype.readData = function(o) {
        this.checkOffset(o);
        var d = this.data.slice(this.zero + this.index, this.zero + this.index + o);
        return this.index += o, d;
      }, r.exports = s;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(t, r, a) {
      var i = t("./DataReader");
      function s(o) {
        i.call(this, o);
      }
      t("../utils").inherits(s, i), s.prototype.byteAt = function(o) {
        return this.data.charCodeAt(this.zero + o);
      }, s.prototype.lastIndexOfSignature = function(o) {
        return this.data.lastIndexOf(o) - this.zero;
      }, s.prototype.readAndCheckSignature = function(o) {
        return o === this.readData(4);
      }, s.prototype.readData = function(o) {
        this.checkOffset(o);
        var d = this.data.slice(this.zero + this.index, this.zero + this.index + o);
        return this.index += o, d;
      }, r.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(t, r, a) {
      var i = t("./ArrayReader");
      function s(o) {
        i.call(this, o);
      }
      t("../utils").inherits(s, i), s.prototype.readData = function(o) {
        if (this.checkOffset(o), o === 0) return new Uint8Array(0);
        var d = this.data.subarray(this.zero + this.index, this.zero + this.index + o);
        return this.index += o, d;
      }, r.exports = s;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(t, r, a) {
      var i = t("../utils"), s = t("../support"), o = t("./ArrayReader"), d = t("./StringReader"), l = t("./NodeBufferReader"), A = t("./Uint8ArrayReader");
      r.exports = function(b) {
        var _ = i.getTypeOf(b);
        return i.checkSupport(_), _ !== "string" || s.uint8array ? _ === "nodebuffer" ? new l(b) : s.uint8array ? new A(i.transformTo("uint8array", b)) : new o(i.transformTo("array", b)) : new d(b);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(t, r, a) {
      a.LOCAL_FILE_HEADER = "PK", a.CENTRAL_FILE_HEADER = "PK", a.CENTRAL_DIRECTORY_END = "PK", a.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", a.ZIP64_CENTRAL_DIRECTORY_END = "PK", a.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(t, r, a) {
      var i = t("./GenericWorker"), s = t("../utils");
      function o(d) {
        i.call(this, "ConvertWorker to " + d), this.destType = d;
      }
      s.inherits(o, i), o.prototype.processChunk = function(d) {
        this.push({ data: s.transformTo(this.destType, d.data), meta: d.meta });
      }, r.exports = o;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(t, r, a) {
      var i = t("./GenericWorker"), s = t("../crc32");
      function o() {
        i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      t("../utils").inherits(o, i), o.prototype.processChunk = function(d) {
        this.streamInfo.crc32 = s(d.data, this.streamInfo.crc32 || 0), this.push(d);
      }, r.exports = o;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(t, r, a) {
      var i = t("../utils"), s = t("./GenericWorker");
      function o(d) {
        s.call(this, "DataLengthProbe for " + d), this.propName = d, this.withStreamInfo(d, 0);
      }
      i.inherits(o, s), o.prototype.processChunk = function(d) {
        if (d) {
          var l = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = l + d.data.length;
        }
        s.prototype.processChunk.call(this, d);
      }, r.exports = o;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(t, r, a) {
      var i = t("../utils"), s = t("./GenericWorker");
      function o(d) {
        s.call(this, "DataWorker");
        var l = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, d.then(function(A) {
          l.dataIsReady = !0, l.data = A, l.max = A && A.length || 0, l.type = i.getTypeOf(A), l.isPaused || l._tickAndRepeat();
        }, function(A) {
          l.error(A);
        });
      }
      i.inherits(o, s), o.prototype.cleanUp = function() {
        s.prototype.cleanUp.call(this), this.data = null;
      }, o.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, i.delay(this._tickAndRepeat, [], this)), !0);
      }, o.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, o.prototype._tick = function() {
        if (this.isPaused || this.isFinished) return !1;
        var d = null, l = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max) return this.end();
        switch (this.type) {
          case "string":
            d = this.data.substring(this.index, l);
            break;
          case "uint8array":
            d = this.data.subarray(this.index, l);
            break;
          case "array":
          case "nodebuffer":
            d = this.data.slice(this.index, l);
        }
        return this.index = l, this.push({ data: d, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, r.exports = o;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(t, r, a) {
      function i(s) {
        this.name = s || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      i.prototype = { push: function(s) {
        this.emit("data", s);
      }, end: function() {
        if (this.isFinished) return !1;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = !0;
        } catch (s) {
          this.emit("error", s);
        }
        return !0;
      }, error: function(s) {
        return !this.isFinished && (this.isPaused ? this.generatedError = s : (this.isFinished = !0, this.emit("error", s), this.previous && this.previous.error(s), this.cleanUp()), !0);
      }, on: function(s, o) {
        return this._listeners[s].push(o), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(s, o) {
        if (this._listeners[s]) for (var d = 0; d < this._listeners[s].length; d++) this._listeners[s][d].call(this, o);
      }, pipe: function(s) {
        return s.registerPrevious(this);
      }, registerPrevious: function(s) {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
        var o = this;
        return s.on("data", function(d) {
          o.processChunk(d);
        }), s.on("end", function() {
          o.end();
        }), s.on("error", function(d) {
          o.error(d);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
      }, resume: function() {
        if (!this.isPaused || this.isFinished) return !1;
        var s = this.isPaused = !1;
        return this.generatedError && (this.error(this.generatedError), s = !0), this.previous && this.previous.resume(), !s;
      }, flush: function() {
      }, processChunk: function(s) {
        this.push(s);
      }, withStreamInfo: function(s, o) {
        return this.extraStreamInfo[s] = o, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var s in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, s) && (this.streamInfo[s] = this.extraStreamInfo[s]);
      }, lock: function() {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var s = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + s : s;
      } }, r.exports = i;
    }, {}], 29: [function(t, r, a) {
      var i = t("../utils"), s = t("./ConvertWorker"), o = t("./GenericWorker"), d = t("../base64"), l = t("../support"), A = t("../external"), b = null;
      if (l.nodestream) try {
        b = t("../nodejs/NodejsStreamOutputAdapter");
      } catch {
      }
      function _(g, p) {
        return new A.Promise(function(m, u) {
          var C = [], v = g._internalType, y = g._outputType, k = g._mimeType;
          g.on("data", function(O, S) {
            C.push(O), p && p(S);
          }).on("error", function(O) {
            C = [], u(O);
          }).on("end", function() {
            try {
              var O = function(S, F, D) {
                switch (S) {
                  case "blob":
                    return i.newBlob(i.transformTo("arraybuffer", F), D);
                  case "base64":
                    return d.encode(F);
                  default:
                    return i.transformTo(S, F);
                }
              }(y, function(S, F) {
                var D, Q = 0, R = null, E = 0;
                for (D = 0; D < F.length; D++) E += F[D].length;
                switch (S) {
                  case "string":
                    return F.join("");
                  case "array":
                    return Array.prototype.concat.apply([], F);
                  case "uint8array":
                    for (R = new Uint8Array(E), D = 0; D < F.length; D++) R.set(F[D], Q), Q += F[D].length;
                    return R;
                  case "nodebuffer":
                    return Buffer.concat(F);
                  default:
                    throw new Error("concat : unsupported type '" + S + "'");
                }
              }(v, C), k);
              m(O);
            } catch (S) {
              u(S);
            }
            C = [];
          }).resume();
        });
      }
      function f(g, p, m) {
        var u = p;
        switch (p) {
          case "blob":
          case "arraybuffer":
            u = "uint8array";
            break;
          case "base64":
            u = "string";
        }
        try {
          this._internalType = u, this._outputType = p, this._mimeType = m, i.checkSupport(u), this._worker = g.pipe(new s(u)), g.lock();
        } catch (C) {
          this._worker = new o("error"), this._worker.error(C);
        }
      }
      f.prototype = { accumulate: function(g) {
        return _(this, g);
      }, on: function(g, p) {
        var m = this;
        return g === "data" ? this._worker.on(g, function(u) {
          p.call(m, u.data, u.meta);
        }) : this._worker.on(g, function() {
          i.delay(p, arguments, m);
        }), this;
      }, resume: function() {
        return i.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(g) {
        if (i.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
        return new b(this, { objectMode: this._outputType !== "nodebuffer" }, g);
      } }, r.exports = f;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(t, r, a) {
      if (a.base64 = !0, a.array = !0, a.string = !0, a.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", a.nodebuffer = typeof Buffer < "u", a.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") a.blob = !1;
      else {
        var i = new ArrayBuffer(0);
        try {
          a.blob = new Blob([i], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var s = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            s.append(i), a.blob = s.getBlob("application/zip").size === 0;
          } catch {
            a.blob = !1;
          }
        }
      }
      try {
        a.nodestream = !!t("readable-stream").Readable;
      } catch {
        a.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(t, r, a) {
      for (var i = t("./utils"), s = t("./support"), o = t("./nodejsUtils"), d = t("./stream/GenericWorker"), l = new Array(256), A = 0; A < 256; A++) l[A] = 252 <= A ? 6 : 248 <= A ? 5 : 240 <= A ? 4 : 224 <= A ? 3 : 192 <= A ? 2 : 1;
      l[254] = l[254] = 1;
      function b() {
        d.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function _() {
        d.call(this, "utf-8 encode");
      }
      a.utf8encode = function(f) {
        return s.nodebuffer ? o.newBufferFrom(f, "utf-8") : function(g) {
          var p, m, u, C, v, y = g.length, k = 0;
          for (C = 0; C < y; C++) (64512 & (m = g.charCodeAt(C))) == 55296 && C + 1 < y && (64512 & (u = g.charCodeAt(C + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (u - 56320), C++), k += m < 128 ? 1 : m < 2048 ? 2 : m < 65536 ? 3 : 4;
          for (p = s.uint8array ? new Uint8Array(k) : new Array(k), C = v = 0; v < k; C++) (64512 & (m = g.charCodeAt(C))) == 55296 && C + 1 < y && (64512 & (u = g.charCodeAt(C + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (u - 56320), C++), m < 128 ? p[v++] = m : (m < 2048 ? p[v++] = 192 | m >>> 6 : (m < 65536 ? p[v++] = 224 | m >>> 12 : (p[v++] = 240 | m >>> 18, p[v++] = 128 | m >>> 12 & 63), p[v++] = 128 | m >>> 6 & 63), p[v++] = 128 | 63 & m);
          return p;
        }(f);
      }, a.utf8decode = function(f) {
        return s.nodebuffer ? i.transformTo("nodebuffer", f).toString("utf-8") : function(g) {
          var p, m, u, C, v = g.length, y = new Array(2 * v);
          for (p = m = 0; p < v; ) if ((u = g[p++]) < 128) y[m++] = u;
          else if (4 < (C = l[u])) y[m++] = 65533, p += C - 1;
          else {
            for (u &= C === 2 ? 31 : C === 3 ? 15 : 7; 1 < C && p < v; ) u = u << 6 | 63 & g[p++], C--;
            1 < C ? y[m++] = 65533 : u < 65536 ? y[m++] = u : (u -= 65536, y[m++] = 55296 | u >> 10 & 1023, y[m++] = 56320 | 1023 & u);
          }
          return y.length !== m && (y.subarray ? y = y.subarray(0, m) : y.length = m), i.applyFromCharCode(y);
        }(f = i.transformTo(s.uint8array ? "uint8array" : "array", f));
      }, i.inherits(b, d), b.prototype.processChunk = function(f) {
        var g = i.transformTo(s.uint8array ? "uint8array" : "array", f.data);
        if (this.leftOver && this.leftOver.length) {
          if (s.uint8array) {
            var p = g;
            (g = new Uint8Array(p.length + this.leftOver.length)).set(this.leftOver, 0), g.set(p, this.leftOver.length);
          } else g = this.leftOver.concat(g);
          this.leftOver = null;
        }
        var m = function(C, v) {
          var y;
          for ((v = v || C.length) > C.length && (v = C.length), y = v - 1; 0 <= y && (192 & C[y]) == 128; ) y--;
          return y < 0 || y === 0 ? v : y + l[C[y]] > v ? y : v;
        }(g), u = g;
        m !== g.length && (s.uint8array ? (u = g.subarray(0, m), this.leftOver = g.subarray(m, g.length)) : (u = g.slice(0, m), this.leftOver = g.slice(m, g.length))), this.push({ data: a.utf8decode(u), meta: f.meta });
      }, b.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: a.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, a.Utf8DecodeWorker = b, i.inherits(_, d), _.prototype.processChunk = function(f) {
        this.push({ data: a.utf8encode(f.data), meta: f.meta });
      }, a.Utf8EncodeWorker = _;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(t, r, a) {
      var i = t("./support"), s = t("./base64"), o = t("./nodejsUtils"), d = t("./external");
      function l(p) {
        return p;
      }
      function A(p, m) {
        for (var u = 0; u < p.length; ++u) m[u] = 255 & p.charCodeAt(u);
        return m;
      }
      t("setimmediate"), a.newBlob = function(p, m) {
        a.checkSupport("blob");
        try {
          return new Blob([p], { type: m });
        } catch {
          try {
            var u = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return u.append(p), u.getBlob(m);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var b = { stringifyByChunk: function(p, m, u) {
        var C = [], v = 0, y = p.length;
        if (y <= u) return String.fromCharCode.apply(null, p);
        for (; v < y; ) m === "array" || m === "nodebuffer" ? C.push(String.fromCharCode.apply(null, p.slice(v, Math.min(v + u, y)))) : C.push(String.fromCharCode.apply(null, p.subarray(v, Math.min(v + u, y)))), v += u;
        return C.join("");
      }, stringifyByChar: function(p) {
        for (var m = "", u = 0; u < p.length; u++) m += String.fromCharCode(p[u]);
        return m;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return i.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return i.nodebuffer && String.fromCharCode.apply(null, o.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function _(p) {
        var m = 65536, u = a.getTypeOf(p), C = !0;
        if (u === "uint8array" ? C = b.applyCanBeUsed.uint8array : u === "nodebuffer" && (C = b.applyCanBeUsed.nodebuffer), C) for (; 1 < m; ) try {
          return b.stringifyByChunk(p, u, m);
        } catch {
          m = Math.floor(m / 2);
        }
        return b.stringifyByChar(p);
      }
      function f(p, m) {
        for (var u = 0; u < p.length; u++) m[u] = p[u];
        return m;
      }
      a.applyFromCharCode = _;
      var g = {};
      g.string = { string: l, array: function(p) {
        return A(p, new Array(p.length));
      }, arraybuffer: function(p) {
        return g.string.uint8array(p).buffer;
      }, uint8array: function(p) {
        return A(p, new Uint8Array(p.length));
      }, nodebuffer: function(p) {
        return A(p, o.allocBuffer(p.length));
      } }, g.array = { string: _, array: l, arraybuffer: function(p) {
        return new Uint8Array(p).buffer;
      }, uint8array: function(p) {
        return new Uint8Array(p);
      }, nodebuffer: function(p) {
        return o.newBufferFrom(p);
      } }, g.arraybuffer = { string: function(p) {
        return _(new Uint8Array(p));
      }, array: function(p) {
        return f(new Uint8Array(p), new Array(p.byteLength));
      }, arraybuffer: l, uint8array: function(p) {
        return new Uint8Array(p);
      }, nodebuffer: function(p) {
        return o.newBufferFrom(new Uint8Array(p));
      } }, g.uint8array = { string: _, array: function(p) {
        return f(p, new Array(p.length));
      }, arraybuffer: function(p) {
        return p.buffer;
      }, uint8array: l, nodebuffer: function(p) {
        return o.newBufferFrom(p);
      } }, g.nodebuffer = { string: _, array: function(p) {
        return f(p, new Array(p.length));
      }, arraybuffer: function(p) {
        return g.nodebuffer.uint8array(p).buffer;
      }, uint8array: function(p) {
        return f(p, new Uint8Array(p.length));
      }, nodebuffer: l }, a.transformTo = function(p, m) {
        if (m = m || "", !p) return m;
        a.checkSupport(p);
        var u = a.getTypeOf(m);
        return g[u][p](m);
      }, a.resolve = function(p) {
        for (var m = p.split("/"), u = [], C = 0; C < m.length; C++) {
          var v = m[C];
          v === "." || v === "" && C !== 0 && C !== m.length - 1 || (v === ".." ? u.pop() : u.push(v));
        }
        return u.join("/");
      }, a.getTypeOf = function(p) {
        if (typeof p == "string") return "string";
        var m = Object.prototype.toString.call(p);
        return m === "[object Array]" ? "array" : i.nodebuffer && o.isBuffer(p) ? "nodebuffer" : i.uint8array && m === "[object Uint8Array]" ? "uint8array" : i.arraybuffer && m === "[object ArrayBuffer]" ? "arraybuffer" : void 0;
      }, a.checkSupport = function(p) {
        if (!i[p.toLowerCase()]) throw new Error(p + " is not supported by this platform");
      }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(p) {
        var m, u, C = "";
        for (u = 0; u < (p || "").length; u++) C += "\\x" + ((m = p.charCodeAt(u)) < 16 ? "0" : "") + m.toString(16).toUpperCase();
        return C;
      }, a.delay = function(p, m, u) {
        setImmediate(function() {
          p.apply(u || null, m || []);
        });
      }, a.inherits = function(p, m) {
        function u() {
        }
        u.prototype = m.prototype, p.prototype = new u();
      }, a.extend = function() {
        var p, m, u = {};
        for (p = 0; p < arguments.length; p++) for (m in arguments[p]) Object.prototype.hasOwnProperty.call(arguments[p], m) && u[m] === void 0 && (u[m] = arguments[p][m]);
        return u;
      }, a.prepareContent = function(p, m, u, C, v) {
        return d.Promise.resolve(m).then(function(y) {
          return i.blob && (y instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(y)) !== -1) ? Blob.prototype.arrayBuffer !== void 0 ? y.arrayBuffer() : typeof FileReader < "u" ? new d.Promise(function(k, O) {
            var S = new FileReader();
            S.onload = function(F) {
              k(F.target.result);
            }, S.onerror = function(F) {
              O(F.target.error);
            }, S.readAsArrayBuffer(y);
          }) : d.Promise.reject(new Error(p + " is a Blob, but we have no way of reading it.")) : y;
        }).then(function(y) {
          var k = a.getTypeOf(y);
          return k ? (k === "arraybuffer" ? y = a.transformTo("uint8array", y) : k === "string" && (v ? y = s.decode(y) : u && C !== !0 && (y = function(O) {
            return A(O, i.uint8array ? new Uint8Array(O.length) : new Array(O.length));
          }(y))), y) : d.Promise.reject(new Error("Can't read the data of '" + p + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(t, r, a) {
      var i = t("./reader/readerFor"), s = t("./utils"), o = t("./signature"), d = t("./zipEntry"), l = t("./support");
      function A(b) {
        this.files = [], this.loadOptions = b;
      }
      A.prototype = { checkSignature: function(b) {
        if (!this.reader.readAndCheckSignature(b)) {
          this.reader.index -= 4;
          var _ = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(_) + ", expected " + s.pretty(b) + ")");
        }
      }, isSignature: function(b, _) {
        var f = this.reader.index;
        this.reader.setIndex(b);
        var g = this.reader.readString(4) === _;
        return this.reader.setIndex(f), g;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var b = this.reader.readData(this.zipCommentLength), _ = l.uint8array ? "uint8array" : "array", f = s.transformTo(_, b);
        this.zipComment = this.loadOptions.decodeFileName(f);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var b, _, f, g = this.zip64EndOfCentralSize - 44; 0 < g; ) b = this.reader.readInt(2), _ = this.reader.readInt(4), f = this.reader.readData(_), this.zip64ExtensibleData[b] = { id: b, length: _, value: f };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var b, _;
        for (b = 0; b < this.files.length; b++) _ = this.files[b], this.reader.setIndex(_.localHeaderOffset), this.checkSignature(o.LOCAL_FILE_HEADER), _.readLocalPart(this.reader), _.handleUTF8(), _.processAttributes();
      }, readCentralDir: function() {
        var b;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER); ) (b = new d({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(b);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var b = this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);
        if (b < 0) throw this.isSignature(0, o.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(b);
        var _ = b;
        if (this.checkSignature(o.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (b = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(b), this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, o.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var f = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (f += 20, f += 12 + this.zip64EndOfCentralSize);
        var g = _ - f;
        if (0 < g) this.isSignature(_, o.CENTRAL_FILE_HEADER) || (this.reader.zero = g);
        else if (g < 0) throw new Error("Corrupted zip: missing " + Math.abs(g) + " bytes.");
      }, prepareReader: function(b) {
        this.reader = i(b);
      }, load: function(b) {
        this.prepareReader(b), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, r.exports = A;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(t, r, a) {
      var i = t("./reader/readerFor"), s = t("./utils"), o = t("./compressedObject"), d = t("./crc32"), l = t("./utf8"), A = t("./compressions"), b = t("./support");
      function _(f, g) {
        this.options = f, this.loadOptions = g;
      }
      _.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(f) {
        var g, p;
        if (f.skip(22), this.fileNameLength = f.readInt(2), p = f.readInt(2), this.fileName = f.readData(this.fileNameLength), f.skip(p), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((g = function(m) {
          for (var u in A) if (Object.prototype.hasOwnProperty.call(A, u) && A[u].magic === m) return A[u];
          return null;
        }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
        this.decompressed = new o(this.compressedSize, this.uncompressedSize, this.crc32, g, f.readData(this.compressedSize));
      }, readCentralPart: function(f) {
        this.versionMadeBy = f.readInt(2), f.skip(2), this.bitFlag = f.readInt(2), this.compressionMethod = f.readString(2), this.date = f.readDate(), this.crc32 = f.readInt(4), this.compressedSize = f.readInt(4), this.uncompressedSize = f.readInt(4);
        var g = f.readInt(2);
        if (this.extraFieldsLength = f.readInt(2), this.fileCommentLength = f.readInt(2), this.diskNumberStart = f.readInt(2), this.internalFileAttributes = f.readInt(2), this.externalFileAttributes = f.readInt(4), this.localHeaderOffset = f.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
        f.skip(g), this.readExtraFields(f), this.parseZIP64ExtraField(f), this.fileComment = f.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var f = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), f == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), f == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var f = i(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = f.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = f.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = f.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = f.readInt(4));
        }
      }, readExtraFields: function(f) {
        var g, p, m, u = f.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); f.index + 4 < u; ) g = f.readInt(2), p = f.readInt(2), m = f.readData(p), this.extraFields[g] = { id: g, length: p, value: m };
        f.setIndex(u);
      }, handleUTF8: function() {
        var f = b.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) this.fileNameStr = l.utf8decode(this.fileName), this.fileCommentStr = l.utf8decode(this.fileComment);
        else {
          var g = this.findExtraFieldUnicodePath();
          if (g !== null) this.fileNameStr = g;
          else {
            var p = s.transformTo(f, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(p);
          }
          var m = this.findExtraFieldUnicodeComment();
          if (m !== null) this.fileCommentStr = m;
          else {
            var u = s.transformTo(f, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(u);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var f = this.extraFields[28789];
        if (f) {
          var g = i(f.value);
          return g.readInt(1) !== 1 || d(this.fileName) !== g.readInt(4) ? null : l.utf8decode(g.readData(f.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var f = this.extraFields[25461];
        if (f) {
          var g = i(f.value);
          return g.readInt(1) !== 1 || d(this.fileComment) !== g.readInt(4) ? null : l.utf8decode(g.readData(f.length - 5));
        }
        return null;
      } }, r.exports = _;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(t, r, a) {
      function i(g, p, m) {
        this.name = g, this.dir = m.dir, this.date = m.date, this.comment = m.comment, this.unixPermissions = m.unixPermissions, this.dosPermissions = m.dosPermissions, this._data = p, this._dataBinary = m.binary, this.options = { compression: m.compression, compressionOptions: m.compressionOptions };
      }
      var s = t("./stream/StreamHelper"), o = t("./stream/DataWorker"), d = t("./utf8"), l = t("./compressedObject"), A = t("./stream/GenericWorker");
      i.prototype = { internalStream: function(g) {
        var p = null, m = "string";
        try {
          if (!g) throw new Error("No output type specified.");
          var u = (m = g.toLowerCase()) === "string" || m === "text";
          m !== "binarystring" && m !== "text" || (m = "string"), p = this._decompressWorker();
          var C = !this._dataBinary;
          C && !u && (p = p.pipe(new d.Utf8EncodeWorker())), !C && u && (p = p.pipe(new d.Utf8DecodeWorker()));
        } catch (v) {
          (p = new A("error")).error(v);
        }
        return new s(p, m, "");
      }, async: function(g, p) {
        return this.internalStream(g).accumulate(p);
      }, nodeStream: function(g, p) {
        return this.internalStream(g || "nodebuffer").toNodejsStream(p);
      }, _compressWorker: function(g, p) {
        if (this._data instanceof l && this._data.compression.magic === g.magic) return this._data.getCompressedWorker();
        var m = this._decompressWorker();
        return this._dataBinary || (m = m.pipe(new d.Utf8EncodeWorker())), l.createWorkerFrom(m, g, p);
      }, _decompressWorker: function() {
        return this._data instanceof l ? this._data.getContentWorker() : this._data instanceof A ? this._data : new o(this._data);
      } };
      for (var b = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], _ = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, f = 0; f < b.length; f++) i.prototype[b[f]] = _;
      r.exports = i;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(t, r, a) {
      (function(i) {
        var s, o, d = i.MutationObserver || i.WebKitMutationObserver;
        if (d) {
          var l = 0, A = new d(g), b = i.document.createTextNode("");
          A.observe(b, { characterData: !0 }), s = function() {
            b.data = l = ++l % 2;
          };
        } else if (i.setImmediate || i.MessageChannel === void 0) s = "document" in i && "onreadystatechange" in i.document.createElement("script") ? function() {
          var p = i.document.createElement("script");
          p.onreadystatechange = function() {
            g(), p.onreadystatechange = null, p.parentNode.removeChild(p), p = null;
          }, i.document.documentElement.appendChild(p);
        } : function() {
          setTimeout(g, 0);
        };
        else {
          var _ = new i.MessageChannel();
          _.port1.onmessage = g, s = function() {
            _.port2.postMessage(0);
          };
        }
        var f = [];
        function g() {
          var p, m;
          o = !0;
          for (var u = f.length; u; ) {
            for (m = f, f = [], p = -1; ++p < u; ) m[p]();
            u = f.length;
          }
          o = !1;
        }
        r.exports = function(p) {
          f.push(p) !== 1 || o || s();
        };
      }).call(this, typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(t, r, a) {
      var i = t("immediate");
      function s() {
      }
      var o = {}, d = ["REJECTED"], l = ["FULFILLED"], A = ["PENDING"];
      function b(u) {
        if (typeof u != "function") throw new TypeError("resolver must be a function");
        this.state = A, this.queue = [], this.outcome = void 0, u !== s && p(this, u);
      }
      function _(u, C, v) {
        this.promise = u, typeof C == "function" && (this.onFulfilled = C, this.callFulfilled = this.otherCallFulfilled), typeof v == "function" && (this.onRejected = v, this.callRejected = this.otherCallRejected);
      }
      function f(u, C, v) {
        i(function() {
          var y;
          try {
            y = C(v);
          } catch (k) {
            return o.reject(u, k);
          }
          y === u ? o.reject(u, new TypeError("Cannot resolve promise with itself")) : o.resolve(u, y);
        });
      }
      function g(u) {
        var C = u && u.then;
        if (u && (typeof u == "object" || typeof u == "function") && typeof C == "function") return function() {
          C.apply(u, arguments);
        };
      }
      function p(u, C) {
        var v = !1;
        function y(S) {
          v || (v = !0, o.reject(u, S));
        }
        function k(S) {
          v || (v = !0, o.resolve(u, S));
        }
        var O = m(function() {
          C(k, y);
        });
        O.status === "error" && y(O.value);
      }
      function m(u, C) {
        var v = {};
        try {
          v.value = u(C), v.status = "success";
        } catch (y) {
          v.status = "error", v.value = y;
        }
        return v;
      }
      (r.exports = b).prototype.finally = function(u) {
        if (typeof u != "function") return this;
        var C = this.constructor;
        return this.then(function(v) {
          return C.resolve(u()).then(function() {
            return v;
          });
        }, function(v) {
          return C.resolve(u()).then(function() {
            throw v;
          });
        });
      }, b.prototype.catch = function(u) {
        return this.then(null, u);
      }, b.prototype.then = function(u, C) {
        if (typeof u != "function" && this.state === l || typeof C != "function" && this.state === d) return this;
        var v = new this.constructor(s);
        return this.state !== A ? f(v, this.state === l ? u : C, this.outcome) : this.queue.push(new _(v, u, C)), v;
      }, _.prototype.callFulfilled = function(u) {
        o.resolve(this.promise, u);
      }, _.prototype.otherCallFulfilled = function(u) {
        f(this.promise, this.onFulfilled, u);
      }, _.prototype.callRejected = function(u) {
        o.reject(this.promise, u);
      }, _.prototype.otherCallRejected = function(u) {
        f(this.promise, this.onRejected, u);
      }, o.resolve = function(u, C) {
        var v = m(g, C);
        if (v.status === "error") return o.reject(u, v.value);
        var y = v.value;
        if (y) p(u, y);
        else {
          u.state = l, u.outcome = C;
          for (var k = -1, O = u.queue.length; ++k < O; ) u.queue[k].callFulfilled(C);
        }
        return u;
      }, o.reject = function(u, C) {
        u.state = d, u.outcome = C;
        for (var v = -1, y = u.queue.length; ++v < y; ) u.queue[v].callRejected(C);
        return u;
      }, b.resolve = function(u) {
        return u instanceof this ? u : o.resolve(new this(s), u);
      }, b.reject = function(u) {
        var C = new this(s);
        return o.reject(C, u);
      }, b.all = function(u) {
        var C = this;
        if (Object.prototype.toString.call(u) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var v = u.length, y = !1;
        if (!v) return this.resolve([]);
        for (var k = new Array(v), O = 0, S = -1, F = new this(s); ++S < v; ) D(u[S], S);
        return F;
        function D(Q, R) {
          C.resolve(Q).then(function(E) {
            k[R] = E, ++O !== v || y || (y = !0, o.resolve(F, k));
          }, function(E) {
            y || (y = !0, o.reject(F, E));
          });
        }
      }, b.race = function(u) {
        var C = this;
        if (Object.prototype.toString.call(u) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var v = u.length, y = !1;
        if (!v) return this.resolve([]);
        for (var k = -1, O = new this(s); ++k < v; ) S = u[k], C.resolve(S).then(function(F) {
          y || (y = !0, o.resolve(O, F));
        }, function(F) {
          y || (y = !0, o.reject(O, F));
        });
        var S;
        return O;
      };
    }, { immediate: 36 }], 38: [function(t, r, a) {
      var i = {};
      (0, t("./lib/utils/common").assign)(i, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), r.exports = i;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(t, r, a) {
      var i = t("./zlib/deflate"), s = t("./utils/common"), o = t("./utils/strings"), d = t("./zlib/messages"), l = t("./zlib/zstream"), A = Object.prototype.toString, b = 0, _ = -1, f = 0, g = 8;
      function p(u) {
        if (!(this instanceof p)) return new p(u);
        this.options = s.assign({ level: _, method: g, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: f, to: "" }, u || {});
        var C = this.options;
        C.raw && 0 < C.windowBits ? C.windowBits = -C.windowBits : C.gzip && 0 < C.windowBits && C.windowBits < 16 && (C.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new l(), this.strm.avail_out = 0;
        var v = i.deflateInit2(this.strm, C.level, C.method, C.windowBits, C.memLevel, C.strategy);
        if (v !== b) throw new Error(d[v]);
        if (C.header && i.deflateSetHeader(this.strm, C.header), C.dictionary) {
          var y;
          if (y = typeof C.dictionary == "string" ? o.string2buf(C.dictionary) : A.call(C.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(C.dictionary) : C.dictionary, (v = i.deflateSetDictionary(this.strm, y)) !== b) throw new Error(d[v]);
          this._dict_set = !0;
        }
      }
      function m(u, C) {
        var v = new p(C);
        if (v.push(u, !0), v.err) throw v.msg || d[v.err];
        return v.result;
      }
      p.prototype.push = function(u, C) {
        var v, y, k = this.strm, O = this.options.chunkSize;
        if (this.ended) return !1;
        y = C === ~~C ? C : C === !0 ? 4 : 0, typeof u == "string" ? k.input = o.string2buf(u) : A.call(u) === "[object ArrayBuffer]" ? k.input = new Uint8Array(u) : k.input = u, k.next_in = 0, k.avail_in = k.input.length;
        do {
          if (k.avail_out === 0 && (k.output = new s.Buf8(O), k.next_out = 0, k.avail_out = O), (v = i.deflate(k, y)) !== 1 && v !== b) return this.onEnd(v), !(this.ended = !0);
          k.avail_out !== 0 && (k.avail_in !== 0 || y !== 4 && y !== 2) || (this.options.to === "string" ? this.onData(o.buf2binstring(s.shrinkBuf(k.output, k.next_out))) : this.onData(s.shrinkBuf(k.output, k.next_out)));
        } while ((0 < k.avail_in || k.avail_out === 0) && v !== 1);
        return y === 4 ? (v = i.deflateEnd(this.strm), this.onEnd(v), this.ended = !0, v === b) : y !== 2 || (this.onEnd(b), !(k.avail_out = 0));
      }, p.prototype.onData = function(u) {
        this.chunks.push(u);
      }, p.prototype.onEnd = function(u) {
        u === b && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = u, this.msg = this.strm.msg;
      }, a.Deflate = p, a.deflate = m, a.deflateRaw = function(u, C) {
        return (C = C || {}).raw = !0, m(u, C);
      }, a.gzip = function(u, C) {
        return (C = C || {}).gzip = !0, m(u, C);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(t, r, a) {
      var i = t("./zlib/inflate"), s = t("./utils/common"), o = t("./utils/strings"), d = t("./zlib/constants"), l = t("./zlib/messages"), A = t("./zlib/zstream"), b = t("./zlib/gzheader"), _ = Object.prototype.toString;
      function f(p) {
        if (!(this instanceof f)) return new f(p);
        this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, p || {});
        var m = this.options;
        m.raw && 0 <= m.windowBits && m.windowBits < 16 && (m.windowBits = -m.windowBits, m.windowBits === 0 && (m.windowBits = -15)), !(0 <= m.windowBits && m.windowBits < 16) || p && p.windowBits || (m.windowBits += 32), 15 < m.windowBits && m.windowBits < 48 && !(15 & m.windowBits) && (m.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new A(), this.strm.avail_out = 0;
        var u = i.inflateInit2(this.strm, m.windowBits);
        if (u !== d.Z_OK) throw new Error(l[u]);
        this.header = new b(), i.inflateGetHeader(this.strm, this.header);
      }
      function g(p, m) {
        var u = new f(m);
        if (u.push(p, !0), u.err) throw u.msg || l[u.err];
        return u.result;
      }
      f.prototype.push = function(p, m) {
        var u, C, v, y, k, O, S = this.strm, F = this.options.chunkSize, D = this.options.dictionary, Q = !1;
        if (this.ended) return !1;
        C = m === ~~m ? m : m === !0 ? d.Z_FINISH : d.Z_NO_FLUSH, typeof p == "string" ? S.input = o.binstring2buf(p) : _.call(p) === "[object ArrayBuffer]" ? S.input = new Uint8Array(p) : S.input = p, S.next_in = 0, S.avail_in = S.input.length;
        do {
          if (S.avail_out === 0 && (S.output = new s.Buf8(F), S.next_out = 0, S.avail_out = F), (u = i.inflate(S, d.Z_NO_FLUSH)) === d.Z_NEED_DICT && D && (O = typeof D == "string" ? o.string2buf(D) : _.call(D) === "[object ArrayBuffer]" ? new Uint8Array(D) : D, u = i.inflateSetDictionary(this.strm, O)), u === d.Z_BUF_ERROR && Q === !0 && (u = d.Z_OK, Q = !1), u !== d.Z_STREAM_END && u !== d.Z_OK) return this.onEnd(u), !(this.ended = !0);
          S.next_out && (S.avail_out !== 0 && u !== d.Z_STREAM_END && (S.avail_in !== 0 || C !== d.Z_FINISH && C !== d.Z_SYNC_FLUSH) || (this.options.to === "string" ? (v = o.utf8border(S.output, S.next_out), y = S.next_out - v, k = o.buf2string(S.output, v), S.next_out = y, S.avail_out = F - y, y && s.arraySet(S.output, S.output, v, y, 0), this.onData(k)) : this.onData(s.shrinkBuf(S.output, S.next_out)))), S.avail_in === 0 && S.avail_out === 0 && (Q = !0);
        } while ((0 < S.avail_in || S.avail_out === 0) && u !== d.Z_STREAM_END);
        return u === d.Z_STREAM_END && (C = d.Z_FINISH), C === d.Z_FINISH ? (u = i.inflateEnd(this.strm), this.onEnd(u), this.ended = !0, u === d.Z_OK) : C !== d.Z_SYNC_FLUSH || (this.onEnd(d.Z_OK), !(S.avail_out = 0));
      }, f.prototype.onData = function(p) {
        this.chunks.push(p);
      }, f.prototype.onEnd = function(p) {
        p === d.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = p, this.msg = this.strm.msg;
      }, a.Inflate = f, a.inflate = g, a.inflateRaw = function(p, m) {
        return (m = m || {}).raw = !0, g(p, m);
      }, a.ungzip = g;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(t, r, a) {
      var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      a.assign = function(d) {
        for (var l = Array.prototype.slice.call(arguments, 1); l.length; ) {
          var A = l.shift();
          if (A) {
            if (typeof A != "object") throw new TypeError(A + "must be non-object");
            for (var b in A) A.hasOwnProperty(b) && (d[b] = A[b]);
          }
        }
        return d;
      }, a.shrinkBuf = function(d, l) {
        return d.length === l ? d : d.subarray ? d.subarray(0, l) : (d.length = l, d);
      };
      var s = { arraySet: function(d, l, A, b, _) {
        if (l.subarray && d.subarray) d.set(l.subarray(A, A + b), _);
        else for (var f = 0; f < b; f++) d[_ + f] = l[A + f];
      }, flattenChunks: function(d) {
        var l, A, b, _, f, g;
        for (l = b = 0, A = d.length; l < A; l++) b += d[l].length;
        for (g = new Uint8Array(b), l = _ = 0, A = d.length; l < A; l++) f = d[l], g.set(f, _), _ += f.length;
        return g;
      } }, o = { arraySet: function(d, l, A, b, _) {
        for (var f = 0; f < b; f++) d[_ + f] = l[A + f];
      }, flattenChunks: function(d) {
        return [].concat.apply([], d);
      } };
      a.setTyped = function(d) {
        d ? (a.Buf8 = Uint8Array, a.Buf16 = Uint16Array, a.Buf32 = Int32Array, a.assign(a, s)) : (a.Buf8 = Array, a.Buf16 = Array, a.Buf32 = Array, a.assign(a, o));
      }, a.setTyped(i);
    }, {}], 42: [function(t, r, a) {
      var i = t("./common"), s = !0, o = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        s = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        o = !1;
      }
      for (var d = new i.Buf8(256), l = 0; l < 256; l++) d[l] = 252 <= l ? 6 : 248 <= l ? 5 : 240 <= l ? 4 : 224 <= l ? 3 : 192 <= l ? 2 : 1;
      function A(b, _) {
        if (_ < 65537 && (b.subarray && o || !b.subarray && s)) return String.fromCharCode.apply(null, i.shrinkBuf(b, _));
        for (var f = "", g = 0; g < _; g++) f += String.fromCharCode(b[g]);
        return f;
      }
      d[254] = d[254] = 1, a.string2buf = function(b) {
        var _, f, g, p, m, u = b.length, C = 0;
        for (p = 0; p < u; p++) (64512 & (f = b.charCodeAt(p))) == 55296 && p + 1 < u && (64512 & (g = b.charCodeAt(p + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (g - 56320), p++), C += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
        for (_ = new i.Buf8(C), p = m = 0; m < C; p++) (64512 & (f = b.charCodeAt(p))) == 55296 && p + 1 < u && (64512 & (g = b.charCodeAt(p + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (g - 56320), p++), f < 128 ? _[m++] = f : (f < 2048 ? _[m++] = 192 | f >>> 6 : (f < 65536 ? _[m++] = 224 | f >>> 12 : (_[m++] = 240 | f >>> 18, _[m++] = 128 | f >>> 12 & 63), _[m++] = 128 | f >>> 6 & 63), _[m++] = 128 | 63 & f);
        return _;
      }, a.buf2binstring = function(b) {
        return A(b, b.length);
      }, a.binstring2buf = function(b) {
        for (var _ = new i.Buf8(b.length), f = 0, g = _.length; f < g; f++) _[f] = b.charCodeAt(f);
        return _;
      }, a.buf2string = function(b, _) {
        var f, g, p, m, u = _ || b.length, C = new Array(2 * u);
        for (f = g = 0; f < u; ) if ((p = b[f++]) < 128) C[g++] = p;
        else if (4 < (m = d[p])) C[g++] = 65533, f += m - 1;
        else {
          for (p &= m === 2 ? 31 : m === 3 ? 15 : 7; 1 < m && f < u; ) p = p << 6 | 63 & b[f++], m--;
          1 < m ? C[g++] = 65533 : p < 65536 ? C[g++] = p : (p -= 65536, C[g++] = 55296 | p >> 10 & 1023, C[g++] = 56320 | 1023 & p);
        }
        return A(C, g);
      }, a.utf8border = function(b, _) {
        var f;
        for ((_ = _ || b.length) > b.length && (_ = b.length), f = _ - 1; 0 <= f && (192 & b[f]) == 128; ) f--;
        return f < 0 || f === 0 ? _ : f + d[b[f]] > _ ? f : _;
      };
    }, { "./common": 41 }], 43: [function(t, r, a) {
      r.exports = function(i, s, o, d) {
        for (var l = 65535 & i | 0, A = i >>> 16 & 65535 | 0, b = 0; o !== 0; ) {
          for (o -= b = 2e3 < o ? 2e3 : o; A = A + (l = l + s[d++] | 0) | 0, --b; ) ;
          l %= 65521, A %= 65521;
        }
        return l | A << 16 | 0;
      };
    }, {}], 44: [function(t, r, a) {
      r.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(t, r, a) {
      var i = function() {
        for (var s, o = [], d = 0; d < 256; d++) {
          s = d;
          for (var l = 0; l < 8; l++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
          o[d] = s;
        }
        return o;
      }();
      r.exports = function(s, o, d, l) {
        var A = i, b = l + d;
        s ^= -1;
        for (var _ = l; _ < b; _++) s = s >>> 8 ^ A[255 & (s ^ o[_])];
        return -1 ^ s;
      };
    }, {}], 46: [function(t, r, a) {
      var i, s = t("../utils/common"), o = t("./trees"), d = t("./adler32"), l = t("./crc32"), A = t("./messages"), b = 0, _ = 4, f = 0, g = -2, p = -1, m = 4, u = 2, C = 8, v = 9, y = 286, k = 30, O = 19, S = 2 * y + 1, F = 15, D = 3, Q = 258, R = Q + D + 1, E = 42, z = 113, h = 1, U = 2, re = 3, K = 4;
      function ie(c, Y) {
        return c.msg = A[Y], Y;
      }
      function G(c) {
        return (c << 1) - (4 < c ? 9 : 0);
      }
      function ae(c) {
        for (var Y = c.length; 0 <= --Y; ) c[Y] = 0;
      }
      function P(c) {
        var Y = c.state, L = Y.pending;
        L > c.avail_out && (L = c.avail_out), L !== 0 && (s.arraySet(c.output, Y.pending_buf, Y.pending_out, L, c.next_out), c.next_out += L, Y.pending_out += L, c.total_out += L, c.avail_out -= L, Y.pending -= L, Y.pending === 0 && (Y.pending_out = 0));
      }
      function B(c, Y) {
        o._tr_flush_block(c, 0 <= c.block_start ? c.block_start : -1, c.strstart - c.block_start, Y), c.block_start = c.strstart, P(c.strm);
      }
      function $(c, Y) {
        c.pending_buf[c.pending++] = Y;
      }
      function H(c, Y) {
        c.pending_buf[c.pending++] = Y >>> 8 & 255, c.pending_buf[c.pending++] = 255 & Y;
      }
      function W(c, Y) {
        var L, x, I = c.max_chain_length, T = c.strstart, Z = c.prev_length, j = c.nice_match, M = c.strstart > c.w_size - R ? c.strstart - (c.w_size - R) : 0, X = c.window, te = c.w_mask, V = c.prev, ne = c.strstart + Q, Ae = X[T + Z - 1], fe = X[T + Z];
        c.prev_length >= c.good_match && (I >>= 2), j > c.lookahead && (j = c.lookahead);
        do
          if (X[(L = Y) + Z] === fe && X[L + Z - 1] === Ae && X[L] === X[T] && X[++L] === X[T + 1]) {
            T += 2, L++;
            do
              ;
            while (X[++T] === X[++L] && X[++T] === X[++L] && X[++T] === X[++L] && X[++T] === X[++L] && X[++T] === X[++L] && X[++T] === X[++L] && X[++T] === X[++L] && X[++T] === X[++L] && T < ne);
            if (x = Q - (ne - T), T = ne - Q, Z < x) {
              if (c.match_start = Y, j <= (Z = x)) break;
              Ae = X[T + Z - 1], fe = X[T + Z];
            }
          }
        while ((Y = V[Y & te]) > M && --I != 0);
        return Z <= c.lookahead ? Z : c.lookahead;
      }
      function le(c) {
        var Y, L, x, I, T, Z, j, M, X, te, V = c.w_size;
        do {
          if (I = c.window_size - c.lookahead - c.strstart, c.strstart >= V + (V - R)) {
            for (s.arraySet(c.window, c.window, V, V, 0), c.match_start -= V, c.strstart -= V, c.block_start -= V, Y = L = c.hash_size; x = c.head[--Y], c.head[Y] = V <= x ? x - V : 0, --L; ) ;
            for (Y = L = V; x = c.prev[--Y], c.prev[Y] = V <= x ? x - V : 0, --L; ) ;
            I += V;
          }
          if (c.strm.avail_in === 0) break;
          if (Z = c.strm, j = c.window, M = c.strstart + c.lookahead, X = I, te = void 0, te = Z.avail_in, X < te && (te = X), L = te === 0 ? 0 : (Z.avail_in -= te, s.arraySet(j, Z.input, Z.next_in, te, M), Z.state.wrap === 1 ? Z.adler = d(Z.adler, j, te, M) : Z.state.wrap === 2 && (Z.adler = l(Z.adler, j, te, M)), Z.next_in += te, Z.total_in += te, te), c.lookahead += L, c.lookahead + c.insert >= D) for (T = c.strstart - c.insert, c.ins_h = c.window[T], c.ins_h = (c.ins_h << c.hash_shift ^ c.window[T + 1]) & c.hash_mask; c.insert && (c.ins_h = (c.ins_h << c.hash_shift ^ c.window[T + D - 1]) & c.hash_mask, c.prev[T & c.w_mask] = c.head[c.ins_h], c.head[c.ins_h] = T, T++, c.insert--, !(c.lookahead + c.insert < D)); ) ;
        } while (c.lookahead < R && c.strm.avail_in !== 0);
      }
      function ce(c, Y) {
        for (var L, x; ; ) {
          if (c.lookahead < R) {
            if (le(c), c.lookahead < R && Y === b) return h;
            if (c.lookahead === 0) break;
          }
          if (L = 0, c.lookahead >= D && (c.ins_h = (c.ins_h << c.hash_shift ^ c.window[c.strstart + D - 1]) & c.hash_mask, L = c.prev[c.strstart & c.w_mask] = c.head[c.ins_h], c.head[c.ins_h] = c.strstart), L !== 0 && c.strstart - L <= c.w_size - R && (c.match_length = W(c, L)), c.match_length >= D) if (x = o._tr_tally(c, c.strstart - c.match_start, c.match_length - D), c.lookahead -= c.match_length, c.match_length <= c.max_lazy_match && c.lookahead >= D) {
            for (c.match_length--; c.strstart++, c.ins_h = (c.ins_h << c.hash_shift ^ c.window[c.strstart + D - 1]) & c.hash_mask, L = c.prev[c.strstart & c.w_mask] = c.head[c.ins_h], c.head[c.ins_h] = c.strstart, --c.match_length != 0; ) ;
            c.strstart++;
          } else c.strstart += c.match_length, c.match_length = 0, c.ins_h = c.window[c.strstart], c.ins_h = (c.ins_h << c.hash_shift ^ c.window[c.strstart + 1]) & c.hash_mask;
          else x = o._tr_tally(c, 0, c.window[c.strstart]), c.lookahead--, c.strstart++;
          if (x && (B(c, !1), c.strm.avail_out === 0)) return h;
        }
        return c.insert = c.strstart < D - 1 ? c.strstart : D - 1, Y === _ ? (B(c, !0), c.strm.avail_out === 0 ? re : K) : c.last_lit && (B(c, !1), c.strm.avail_out === 0) ? h : U;
      }
      function oe(c, Y) {
        for (var L, x, I; ; ) {
          if (c.lookahead < R) {
            if (le(c), c.lookahead < R && Y === b) return h;
            if (c.lookahead === 0) break;
          }
          if (L = 0, c.lookahead >= D && (c.ins_h = (c.ins_h << c.hash_shift ^ c.window[c.strstart + D - 1]) & c.hash_mask, L = c.prev[c.strstart & c.w_mask] = c.head[c.ins_h], c.head[c.ins_h] = c.strstart), c.prev_length = c.match_length, c.prev_match = c.match_start, c.match_length = D - 1, L !== 0 && c.prev_length < c.max_lazy_match && c.strstart - L <= c.w_size - R && (c.match_length = W(c, L), c.match_length <= 5 && (c.strategy === 1 || c.match_length === D && 4096 < c.strstart - c.match_start) && (c.match_length = D - 1)), c.prev_length >= D && c.match_length <= c.prev_length) {
            for (I = c.strstart + c.lookahead - D, x = o._tr_tally(c, c.strstart - 1 - c.prev_match, c.prev_length - D), c.lookahead -= c.prev_length - 1, c.prev_length -= 2; ++c.strstart <= I && (c.ins_h = (c.ins_h << c.hash_shift ^ c.window[c.strstart + D - 1]) & c.hash_mask, L = c.prev[c.strstart & c.w_mask] = c.head[c.ins_h], c.head[c.ins_h] = c.strstart), --c.prev_length != 0; ) ;
            if (c.match_available = 0, c.match_length = D - 1, c.strstart++, x && (B(c, !1), c.strm.avail_out === 0)) return h;
          } else if (c.match_available) {
            if ((x = o._tr_tally(c, 0, c.window[c.strstart - 1])) && B(c, !1), c.strstart++, c.lookahead--, c.strm.avail_out === 0) return h;
          } else c.match_available = 1, c.strstart++, c.lookahead--;
        }
        return c.match_available && (x = o._tr_tally(c, 0, c.window[c.strstart - 1]), c.match_available = 0), c.insert = c.strstart < D - 1 ? c.strstart : D - 1, Y === _ ? (B(c, !0), c.strm.avail_out === 0 ? re : K) : c.last_lit && (B(c, !1), c.strm.avail_out === 0) ? h : U;
      }
      function ue(c, Y, L, x, I) {
        this.good_length = c, this.max_lazy = Y, this.nice_length = L, this.max_chain = x, this.func = I;
      }
      function Ee() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = C, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * S), this.dyn_dtree = new s.Buf16(2 * (2 * k + 1)), this.bl_tree = new s.Buf16(2 * (2 * O + 1)), ae(this.dyn_ltree), ae(this.dyn_dtree), ae(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(F + 1), this.heap = new s.Buf16(2 * y + 1), ae(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * y + 1), ae(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function ge(c) {
        var Y;
        return c && c.state ? (c.total_in = c.total_out = 0, c.data_type = u, (Y = c.state).pending = 0, Y.pending_out = 0, Y.wrap < 0 && (Y.wrap = -Y.wrap), Y.status = Y.wrap ? E : z, c.adler = Y.wrap === 2 ? 0 : 1, Y.last_flush = b, o._tr_init(Y), f) : ie(c, g);
      }
      function ke(c) {
        var Y = ge(c);
        return Y === f && function(L) {
          L.window_size = 2 * L.w_size, ae(L.head), L.max_lazy_match = i[L.level].max_lazy, L.good_match = i[L.level].good_length, L.nice_match = i[L.level].nice_length, L.max_chain_length = i[L.level].max_chain, L.strstart = 0, L.block_start = 0, L.lookahead = 0, L.insert = 0, L.match_length = L.prev_length = D - 1, L.match_available = 0, L.ins_h = 0;
        }(c.state), Y;
      }
      function Re(c, Y, L, x, I, T) {
        if (!c) return g;
        var Z = 1;
        if (Y === p && (Y = 6), x < 0 ? (Z = 0, x = -x) : 15 < x && (Z = 2, x -= 16), I < 1 || v < I || L !== C || x < 8 || 15 < x || Y < 0 || 9 < Y || T < 0 || m < T) return ie(c, g);
        x === 8 && (x = 9);
        var j = new Ee();
        return (c.state = j).strm = c, j.wrap = Z, j.gzhead = null, j.w_bits = x, j.w_size = 1 << j.w_bits, j.w_mask = j.w_size - 1, j.hash_bits = I + 7, j.hash_size = 1 << j.hash_bits, j.hash_mask = j.hash_size - 1, j.hash_shift = ~~((j.hash_bits + D - 1) / D), j.window = new s.Buf8(2 * j.w_size), j.head = new s.Buf16(j.hash_size), j.prev = new s.Buf16(j.w_size), j.lit_bufsize = 1 << I + 6, j.pending_buf_size = 4 * j.lit_bufsize, j.pending_buf = new s.Buf8(j.pending_buf_size), j.d_buf = 1 * j.lit_bufsize, j.l_buf = 3 * j.lit_bufsize, j.level = Y, j.strategy = T, j.method = L, ke(c);
      }
      i = [new ue(0, 0, 0, 0, function(c, Y) {
        var L = 65535;
        for (L > c.pending_buf_size - 5 && (L = c.pending_buf_size - 5); ; ) {
          if (c.lookahead <= 1) {
            if (le(c), c.lookahead === 0 && Y === b) return h;
            if (c.lookahead === 0) break;
          }
          c.strstart += c.lookahead, c.lookahead = 0;
          var x = c.block_start + L;
          if ((c.strstart === 0 || c.strstart >= x) && (c.lookahead = c.strstart - x, c.strstart = x, B(c, !1), c.strm.avail_out === 0) || c.strstart - c.block_start >= c.w_size - R && (B(c, !1), c.strm.avail_out === 0)) return h;
        }
        return c.insert = 0, Y === _ ? (B(c, !0), c.strm.avail_out === 0 ? re : K) : (c.strstart > c.block_start && (B(c, !1), c.strm.avail_out), h);
      }), new ue(4, 4, 8, 4, ce), new ue(4, 5, 16, 8, ce), new ue(4, 6, 32, 32, ce), new ue(4, 4, 16, 16, oe), new ue(8, 16, 32, 32, oe), new ue(8, 16, 128, 128, oe), new ue(8, 32, 128, 256, oe), new ue(32, 128, 258, 1024, oe), new ue(32, 258, 258, 4096, oe)], a.deflateInit = function(c, Y) {
        return Re(c, Y, C, 15, 8, 0);
      }, a.deflateInit2 = Re, a.deflateReset = ke, a.deflateResetKeep = ge, a.deflateSetHeader = function(c, Y) {
        return c && c.state ? c.state.wrap !== 2 ? g : (c.state.gzhead = Y, f) : g;
      }, a.deflate = function(c, Y) {
        var L, x, I, T;
        if (!c || !c.state || 5 < Y || Y < 0) return c ? ie(c, g) : g;
        if (x = c.state, !c.output || !c.input && c.avail_in !== 0 || x.status === 666 && Y !== _) return ie(c, c.avail_out === 0 ? -5 : g);
        if (x.strm = c, L = x.last_flush, x.last_flush = Y, x.status === E) if (x.wrap === 2) c.adler = 0, $(x, 31), $(x, 139), $(x, 8), x.gzhead ? ($(x, (x.gzhead.text ? 1 : 0) + (x.gzhead.hcrc ? 2 : 0) + (x.gzhead.extra ? 4 : 0) + (x.gzhead.name ? 8 : 0) + (x.gzhead.comment ? 16 : 0)), $(x, 255 & x.gzhead.time), $(x, x.gzhead.time >> 8 & 255), $(x, x.gzhead.time >> 16 & 255), $(x, x.gzhead.time >> 24 & 255), $(x, x.level === 9 ? 2 : 2 <= x.strategy || x.level < 2 ? 4 : 0), $(x, 255 & x.gzhead.os), x.gzhead.extra && x.gzhead.extra.length && ($(x, 255 & x.gzhead.extra.length), $(x, x.gzhead.extra.length >> 8 & 255)), x.gzhead.hcrc && (c.adler = l(c.adler, x.pending_buf, x.pending, 0)), x.gzindex = 0, x.status = 69) : ($(x, 0), $(x, 0), $(x, 0), $(x, 0), $(x, 0), $(x, x.level === 9 ? 2 : 2 <= x.strategy || x.level < 2 ? 4 : 0), $(x, 3), x.status = z);
        else {
          var Z = C + (x.w_bits - 8 << 4) << 8;
          Z |= (2 <= x.strategy || x.level < 2 ? 0 : x.level < 6 ? 1 : x.level === 6 ? 2 : 3) << 6, x.strstart !== 0 && (Z |= 32), Z += 31 - Z % 31, x.status = z, H(x, Z), x.strstart !== 0 && (H(x, c.adler >>> 16), H(x, 65535 & c.adler)), c.adler = 1;
        }
        if (x.status === 69) if (x.gzhead.extra) {
          for (I = x.pending; x.gzindex < (65535 & x.gzhead.extra.length) && (x.pending !== x.pending_buf_size || (x.gzhead.hcrc && x.pending > I && (c.adler = l(c.adler, x.pending_buf, x.pending - I, I)), P(c), I = x.pending, x.pending !== x.pending_buf_size)); ) $(x, 255 & x.gzhead.extra[x.gzindex]), x.gzindex++;
          x.gzhead.hcrc && x.pending > I && (c.adler = l(c.adler, x.pending_buf, x.pending - I, I)), x.gzindex === x.gzhead.extra.length && (x.gzindex = 0, x.status = 73);
        } else x.status = 73;
        if (x.status === 73) if (x.gzhead.name) {
          I = x.pending;
          do {
            if (x.pending === x.pending_buf_size && (x.gzhead.hcrc && x.pending > I && (c.adler = l(c.adler, x.pending_buf, x.pending - I, I)), P(c), I = x.pending, x.pending === x.pending_buf_size)) {
              T = 1;
              break;
            }
            T = x.gzindex < x.gzhead.name.length ? 255 & x.gzhead.name.charCodeAt(x.gzindex++) : 0, $(x, T);
          } while (T !== 0);
          x.gzhead.hcrc && x.pending > I && (c.adler = l(c.adler, x.pending_buf, x.pending - I, I)), T === 0 && (x.gzindex = 0, x.status = 91);
        } else x.status = 91;
        if (x.status === 91) if (x.gzhead.comment) {
          I = x.pending;
          do {
            if (x.pending === x.pending_buf_size && (x.gzhead.hcrc && x.pending > I && (c.adler = l(c.adler, x.pending_buf, x.pending - I, I)), P(c), I = x.pending, x.pending === x.pending_buf_size)) {
              T = 1;
              break;
            }
            T = x.gzindex < x.gzhead.comment.length ? 255 & x.gzhead.comment.charCodeAt(x.gzindex++) : 0, $(x, T);
          } while (T !== 0);
          x.gzhead.hcrc && x.pending > I && (c.adler = l(c.adler, x.pending_buf, x.pending - I, I)), T === 0 && (x.status = 103);
        } else x.status = 103;
        if (x.status === 103 && (x.gzhead.hcrc ? (x.pending + 2 > x.pending_buf_size && P(c), x.pending + 2 <= x.pending_buf_size && ($(x, 255 & c.adler), $(x, c.adler >> 8 & 255), c.adler = 0, x.status = z)) : x.status = z), x.pending !== 0) {
          if (P(c), c.avail_out === 0) return x.last_flush = -1, f;
        } else if (c.avail_in === 0 && G(Y) <= G(L) && Y !== _) return ie(c, -5);
        if (x.status === 666 && c.avail_in !== 0) return ie(c, -5);
        if (c.avail_in !== 0 || x.lookahead !== 0 || Y !== b && x.status !== 666) {
          var j = x.strategy === 2 ? function(M, X) {
            for (var te; ; ) {
              if (M.lookahead === 0 && (le(M), M.lookahead === 0)) {
                if (X === b) return h;
                break;
              }
              if (M.match_length = 0, te = o._tr_tally(M, 0, M.window[M.strstart]), M.lookahead--, M.strstart++, te && (B(M, !1), M.strm.avail_out === 0)) return h;
            }
            return M.insert = 0, X === _ ? (B(M, !0), M.strm.avail_out === 0 ? re : K) : M.last_lit && (B(M, !1), M.strm.avail_out === 0) ? h : U;
          }(x, Y) : x.strategy === 3 ? function(M, X) {
            for (var te, V, ne, Ae, fe = M.window; ; ) {
              if (M.lookahead <= Q) {
                if (le(M), M.lookahead <= Q && X === b) return h;
                if (M.lookahead === 0) break;
              }
              if (M.match_length = 0, M.lookahead >= D && 0 < M.strstart && (V = fe[ne = M.strstart - 1]) === fe[++ne] && V === fe[++ne] && V === fe[++ne]) {
                Ae = M.strstart + Q;
                do
                  ;
                while (V === fe[++ne] && V === fe[++ne] && V === fe[++ne] && V === fe[++ne] && V === fe[++ne] && V === fe[++ne] && V === fe[++ne] && V === fe[++ne] && ne < Ae);
                M.match_length = Q - (Ae - ne), M.match_length > M.lookahead && (M.match_length = M.lookahead);
              }
              if (M.match_length >= D ? (te = o._tr_tally(M, 1, M.match_length - D), M.lookahead -= M.match_length, M.strstart += M.match_length, M.match_length = 0) : (te = o._tr_tally(M, 0, M.window[M.strstart]), M.lookahead--, M.strstart++), te && (B(M, !1), M.strm.avail_out === 0)) return h;
            }
            return M.insert = 0, X === _ ? (B(M, !0), M.strm.avail_out === 0 ? re : K) : M.last_lit && (B(M, !1), M.strm.avail_out === 0) ? h : U;
          }(x, Y) : i[x.level].func(x, Y);
          if (j !== re && j !== K || (x.status = 666), j === h || j === re) return c.avail_out === 0 && (x.last_flush = -1), f;
          if (j === U && (Y === 1 ? o._tr_align(x) : Y !== 5 && (o._tr_stored_block(x, 0, 0, !1), Y === 3 && (ae(x.head), x.lookahead === 0 && (x.strstart = 0, x.block_start = 0, x.insert = 0))), P(c), c.avail_out === 0)) return x.last_flush = -1, f;
        }
        return Y !== _ ? f : x.wrap <= 0 ? 1 : (x.wrap === 2 ? ($(x, 255 & c.adler), $(x, c.adler >> 8 & 255), $(x, c.adler >> 16 & 255), $(x, c.adler >> 24 & 255), $(x, 255 & c.total_in), $(x, c.total_in >> 8 & 255), $(x, c.total_in >> 16 & 255), $(x, c.total_in >> 24 & 255)) : (H(x, c.adler >>> 16), H(x, 65535 & c.adler)), P(c), 0 < x.wrap && (x.wrap = -x.wrap), x.pending !== 0 ? f : 1);
      }, a.deflateEnd = function(c) {
        var Y;
        return c && c.state ? (Y = c.state.status) !== E && Y !== 69 && Y !== 73 && Y !== 91 && Y !== 103 && Y !== z && Y !== 666 ? ie(c, g) : (c.state = null, Y === z ? ie(c, -3) : f) : g;
      }, a.deflateSetDictionary = function(c, Y) {
        var L, x, I, T, Z, j, M, X, te = Y.length;
        if (!c || !c.state || (T = (L = c.state).wrap) === 2 || T === 1 && L.status !== E || L.lookahead) return g;
        for (T === 1 && (c.adler = d(c.adler, Y, te, 0)), L.wrap = 0, te >= L.w_size && (T === 0 && (ae(L.head), L.strstart = 0, L.block_start = 0, L.insert = 0), X = new s.Buf8(L.w_size), s.arraySet(X, Y, te - L.w_size, L.w_size, 0), Y = X, te = L.w_size), Z = c.avail_in, j = c.next_in, M = c.input, c.avail_in = te, c.next_in = 0, c.input = Y, le(L); L.lookahead >= D; ) {
          for (x = L.strstart, I = L.lookahead - (D - 1); L.ins_h = (L.ins_h << L.hash_shift ^ L.window[x + D - 1]) & L.hash_mask, L.prev[x & L.w_mask] = L.head[L.ins_h], L.head[L.ins_h] = x, x++, --I; ) ;
          L.strstart = x, L.lookahead = D - 1, le(L);
        }
        return L.strstart += L.lookahead, L.block_start = L.strstart, L.insert = L.lookahead, L.lookahead = 0, L.match_length = L.prev_length = D - 1, L.match_available = 0, c.next_in = j, c.input = M, c.avail_in = Z, L.wrap = T, f;
      }, a.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(t, r, a) {
      r.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(t, r, a) {
      r.exports = function(i, s) {
        var o, d, l, A, b, _, f, g, p, m, u, C, v, y, k, O, S, F, D, Q, R, E, z, h, U;
        o = i.state, d = i.next_in, h = i.input, l = d + (i.avail_in - 5), A = i.next_out, U = i.output, b = A - (s - i.avail_out), _ = A + (i.avail_out - 257), f = o.dmax, g = o.wsize, p = o.whave, m = o.wnext, u = o.window, C = o.hold, v = o.bits, y = o.lencode, k = o.distcode, O = (1 << o.lenbits) - 1, S = (1 << o.distbits) - 1;
        e: do {
          v < 15 && (C += h[d++] << v, v += 8, C += h[d++] << v, v += 8), F = y[C & O];
          t: for (; ; ) {
            if (C >>>= D = F >>> 24, v -= D, (D = F >>> 16 & 255) === 0) U[A++] = 65535 & F;
            else {
              if (!(16 & D)) {
                if (!(64 & D)) {
                  F = y[(65535 & F) + (C & (1 << D) - 1)];
                  continue t;
                }
                if (32 & D) {
                  o.mode = 12;
                  break e;
                }
                i.msg = "invalid literal/length code", o.mode = 30;
                break e;
              }
              Q = 65535 & F, (D &= 15) && (v < D && (C += h[d++] << v, v += 8), Q += C & (1 << D) - 1, C >>>= D, v -= D), v < 15 && (C += h[d++] << v, v += 8, C += h[d++] << v, v += 8), F = k[C & S];
              n: for (; ; ) {
                if (C >>>= D = F >>> 24, v -= D, !(16 & (D = F >>> 16 & 255))) {
                  if (!(64 & D)) {
                    F = k[(65535 & F) + (C & (1 << D) - 1)];
                    continue n;
                  }
                  i.msg = "invalid distance code", o.mode = 30;
                  break e;
                }
                if (R = 65535 & F, v < (D &= 15) && (C += h[d++] << v, (v += 8) < D && (C += h[d++] << v, v += 8)), f < (R += C & (1 << D) - 1)) {
                  i.msg = "invalid distance too far back", o.mode = 30;
                  break e;
                }
                if (C >>>= D, v -= D, (D = A - b) < R) {
                  if (p < (D = R - D) && o.sane) {
                    i.msg = "invalid distance too far back", o.mode = 30;
                    break e;
                  }
                  if (z = u, (E = 0) === m) {
                    if (E += g - D, D < Q) {
                      for (Q -= D; U[A++] = u[E++], --D; ) ;
                      E = A - R, z = U;
                    }
                  } else if (m < D) {
                    if (E += g + m - D, (D -= m) < Q) {
                      for (Q -= D; U[A++] = u[E++], --D; ) ;
                      if (E = 0, m < Q) {
                        for (Q -= D = m; U[A++] = u[E++], --D; ) ;
                        E = A - R, z = U;
                      }
                    }
                  } else if (E += m - D, D < Q) {
                    for (Q -= D; U[A++] = u[E++], --D; ) ;
                    E = A - R, z = U;
                  }
                  for (; 2 < Q; ) U[A++] = z[E++], U[A++] = z[E++], U[A++] = z[E++], Q -= 3;
                  Q && (U[A++] = z[E++], 1 < Q && (U[A++] = z[E++]));
                } else {
                  for (E = A - R; U[A++] = U[E++], U[A++] = U[E++], U[A++] = U[E++], 2 < (Q -= 3); ) ;
                  Q && (U[A++] = U[E++], 1 < Q && (U[A++] = U[E++]));
                }
                break;
              }
            }
            break;
          }
        } while (d < l && A < _);
        d -= Q = v >> 3, C &= (1 << (v -= Q << 3)) - 1, i.next_in = d, i.next_out = A, i.avail_in = d < l ? l - d + 5 : 5 - (d - l), i.avail_out = A < _ ? _ - A + 257 : 257 - (A - _), o.hold = C, o.bits = v;
      };
    }, {}], 49: [function(t, r, a) {
      var i = t("../utils/common"), s = t("./adler32"), o = t("./crc32"), d = t("./inffast"), l = t("./inftrees"), A = 1, b = 2, _ = 0, f = -2, g = 1, p = 852, m = 592;
      function u(E) {
        return (E >>> 24 & 255) + (E >>> 8 & 65280) + ((65280 & E) << 8) + ((255 & E) << 24);
      }
      function C() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new i.Buf16(320), this.work = new i.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function v(E) {
        var z;
        return E && E.state ? (z = E.state, E.total_in = E.total_out = z.total = 0, E.msg = "", z.wrap && (E.adler = 1 & z.wrap), z.mode = g, z.last = 0, z.havedict = 0, z.dmax = 32768, z.head = null, z.hold = 0, z.bits = 0, z.lencode = z.lendyn = new i.Buf32(p), z.distcode = z.distdyn = new i.Buf32(m), z.sane = 1, z.back = -1, _) : f;
      }
      function y(E) {
        var z;
        return E && E.state ? ((z = E.state).wsize = 0, z.whave = 0, z.wnext = 0, v(E)) : f;
      }
      function k(E, z) {
        var h, U;
        return E && E.state ? (U = E.state, z < 0 ? (h = 0, z = -z) : (h = 1 + (z >> 4), z < 48 && (z &= 15)), z && (z < 8 || 15 < z) ? f : (U.window !== null && U.wbits !== z && (U.window = null), U.wrap = h, U.wbits = z, y(E))) : f;
      }
      function O(E, z) {
        var h, U;
        return E ? (U = new C(), (E.state = U).window = null, (h = k(E, z)) !== _ && (E.state = null), h) : f;
      }
      var S, F, D = !0;
      function Q(E) {
        if (D) {
          var z;
          for (S = new i.Buf32(512), F = new i.Buf32(32), z = 0; z < 144; ) E.lens[z++] = 8;
          for (; z < 256; ) E.lens[z++] = 9;
          for (; z < 280; ) E.lens[z++] = 7;
          for (; z < 288; ) E.lens[z++] = 8;
          for (l(A, E.lens, 0, 288, S, 0, E.work, { bits: 9 }), z = 0; z < 32; ) E.lens[z++] = 5;
          l(b, E.lens, 0, 32, F, 0, E.work, { bits: 5 }), D = !1;
        }
        E.lencode = S, E.lenbits = 9, E.distcode = F, E.distbits = 5;
      }
      function R(E, z, h, U) {
        var re, K = E.state;
        return K.window === null && (K.wsize = 1 << K.wbits, K.wnext = 0, K.whave = 0, K.window = new i.Buf8(K.wsize)), U >= K.wsize ? (i.arraySet(K.window, z, h - K.wsize, K.wsize, 0), K.wnext = 0, K.whave = K.wsize) : (U < (re = K.wsize - K.wnext) && (re = U), i.arraySet(K.window, z, h - U, re, K.wnext), (U -= re) ? (i.arraySet(K.window, z, h - U, U, 0), K.wnext = U, K.whave = K.wsize) : (K.wnext += re, K.wnext === K.wsize && (K.wnext = 0), K.whave < K.wsize && (K.whave += re))), 0;
      }
      a.inflateReset = y, a.inflateReset2 = k, a.inflateResetKeep = v, a.inflateInit = function(E) {
        return O(E, 15);
      }, a.inflateInit2 = O, a.inflate = function(E, z) {
        var h, U, re, K, ie, G, ae, P, B, $, H, W, le, ce, oe, ue, Ee, ge, ke, Re, c, Y, L, x, I = 0, T = new i.Buf8(4), Z = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!E || !E.state || !E.output || !E.input && E.avail_in !== 0) return f;
        (h = E.state).mode === 12 && (h.mode = 13), ie = E.next_out, re = E.output, ae = E.avail_out, K = E.next_in, U = E.input, G = E.avail_in, P = h.hold, B = h.bits, $ = G, H = ae, Y = _;
        e: for (; ; ) switch (h.mode) {
          case g:
            if (h.wrap === 0) {
              h.mode = 13;
              break;
            }
            for (; B < 16; ) {
              if (G === 0) break e;
              G--, P += U[K++] << B, B += 8;
            }
            if (2 & h.wrap && P === 35615) {
              T[h.check = 0] = 255 & P, T[1] = P >>> 8 & 255, h.check = o(h.check, T, 2, 0), B = P = 0, h.mode = 2;
              break;
            }
            if (h.flags = 0, h.head && (h.head.done = !1), !(1 & h.wrap) || (((255 & P) << 8) + (P >> 8)) % 31) {
              E.msg = "incorrect header check", h.mode = 30;
              break;
            }
            if ((15 & P) != 8) {
              E.msg = "unknown compression method", h.mode = 30;
              break;
            }
            if (B -= 4, c = 8 + (15 & (P >>>= 4)), h.wbits === 0) h.wbits = c;
            else if (c > h.wbits) {
              E.msg = "invalid window size", h.mode = 30;
              break;
            }
            h.dmax = 1 << c, E.adler = h.check = 1, h.mode = 512 & P ? 10 : 12, B = P = 0;
            break;
          case 2:
            for (; B < 16; ) {
              if (G === 0) break e;
              G--, P += U[K++] << B, B += 8;
            }
            if (h.flags = P, (255 & h.flags) != 8) {
              E.msg = "unknown compression method", h.mode = 30;
              break;
            }
            if (57344 & h.flags) {
              E.msg = "unknown header flags set", h.mode = 30;
              break;
            }
            h.head && (h.head.text = P >> 8 & 1), 512 & h.flags && (T[0] = 255 & P, T[1] = P >>> 8 & 255, h.check = o(h.check, T, 2, 0)), B = P = 0, h.mode = 3;
          case 3:
            for (; B < 32; ) {
              if (G === 0) break e;
              G--, P += U[K++] << B, B += 8;
            }
            h.head && (h.head.time = P), 512 & h.flags && (T[0] = 255 & P, T[1] = P >>> 8 & 255, T[2] = P >>> 16 & 255, T[3] = P >>> 24 & 255, h.check = o(h.check, T, 4, 0)), B = P = 0, h.mode = 4;
          case 4:
            for (; B < 16; ) {
              if (G === 0) break e;
              G--, P += U[K++] << B, B += 8;
            }
            h.head && (h.head.xflags = 255 & P, h.head.os = P >> 8), 512 & h.flags && (T[0] = 255 & P, T[1] = P >>> 8 & 255, h.check = o(h.check, T, 2, 0)), B = P = 0, h.mode = 5;
          case 5:
            if (1024 & h.flags) {
              for (; B < 16; ) {
                if (G === 0) break e;
                G--, P += U[K++] << B, B += 8;
              }
              h.length = P, h.head && (h.head.extra_len = P), 512 & h.flags && (T[0] = 255 & P, T[1] = P >>> 8 & 255, h.check = o(h.check, T, 2, 0)), B = P = 0;
            } else h.head && (h.head.extra = null);
            h.mode = 6;
          case 6:
            if (1024 & h.flags && (G < (W = h.length) && (W = G), W && (h.head && (c = h.head.extra_len - h.length, h.head.extra || (h.head.extra = new Array(h.head.extra_len)), i.arraySet(h.head.extra, U, K, W, c)), 512 & h.flags && (h.check = o(h.check, U, W, K)), G -= W, K += W, h.length -= W), h.length)) break e;
            h.length = 0, h.mode = 7;
          case 7:
            if (2048 & h.flags) {
              if (G === 0) break e;
              for (W = 0; c = U[K + W++], h.head && c && h.length < 65536 && (h.head.name += String.fromCharCode(c)), c && W < G; ) ;
              if (512 & h.flags && (h.check = o(h.check, U, W, K)), G -= W, K += W, c) break e;
            } else h.head && (h.head.name = null);
            h.length = 0, h.mode = 8;
          case 8:
            if (4096 & h.flags) {
              if (G === 0) break e;
              for (W = 0; c = U[K + W++], h.head && c && h.length < 65536 && (h.head.comment += String.fromCharCode(c)), c && W < G; ) ;
              if (512 & h.flags && (h.check = o(h.check, U, W, K)), G -= W, K += W, c) break e;
            } else h.head && (h.head.comment = null);
            h.mode = 9;
          case 9:
            if (512 & h.flags) {
              for (; B < 16; ) {
                if (G === 0) break e;
                G--, P += U[K++] << B, B += 8;
              }
              if (P !== (65535 & h.check)) {
                E.msg = "header crc mismatch", h.mode = 30;
                break;
              }
              B = P = 0;
            }
            h.head && (h.head.hcrc = h.flags >> 9 & 1, h.head.done = !0), E.adler = h.check = 0, h.mode = 12;
            break;
          case 10:
            for (; B < 32; ) {
              if (G === 0) break e;
              G--, P += U[K++] << B, B += 8;
            }
            E.adler = h.check = u(P), B = P = 0, h.mode = 11;
          case 11:
            if (h.havedict === 0) return E.next_out = ie, E.avail_out = ae, E.next_in = K, E.avail_in = G, h.hold = P, h.bits = B, 2;
            E.adler = h.check = 1, h.mode = 12;
          case 12:
            if (z === 5 || z === 6) break e;
          case 13:
            if (h.last) {
              P >>>= 7 & B, B -= 7 & B, h.mode = 27;
              break;
            }
            for (; B < 3; ) {
              if (G === 0) break e;
              G--, P += U[K++] << B, B += 8;
            }
            switch (h.last = 1 & P, B -= 1, 3 & (P >>>= 1)) {
              case 0:
                h.mode = 14;
                break;
              case 1:
                if (Q(h), h.mode = 20, z !== 6) break;
                P >>>= 2, B -= 2;
                break e;
              case 2:
                h.mode = 17;
                break;
              case 3:
                E.msg = "invalid block type", h.mode = 30;
            }
            P >>>= 2, B -= 2;
            break;
          case 14:
            for (P >>>= 7 & B, B -= 7 & B; B < 32; ) {
              if (G === 0) break e;
              G--, P += U[K++] << B, B += 8;
            }
            if ((65535 & P) != (P >>> 16 ^ 65535)) {
              E.msg = "invalid stored block lengths", h.mode = 30;
              break;
            }
            if (h.length = 65535 & P, B = P = 0, h.mode = 15, z === 6) break e;
          case 15:
            h.mode = 16;
          case 16:
            if (W = h.length) {
              if (G < W && (W = G), ae < W && (W = ae), W === 0) break e;
              i.arraySet(re, U, K, W, ie), G -= W, K += W, ae -= W, ie += W, h.length -= W;
              break;
            }
            h.mode = 12;
            break;
          case 17:
            for (; B < 14; ) {
              if (G === 0) break e;
              G--, P += U[K++] << B, B += 8;
            }
            if (h.nlen = 257 + (31 & P), P >>>= 5, B -= 5, h.ndist = 1 + (31 & P), P >>>= 5, B -= 5, h.ncode = 4 + (15 & P), P >>>= 4, B -= 4, 286 < h.nlen || 30 < h.ndist) {
              E.msg = "too many length or distance symbols", h.mode = 30;
              break;
            }
            h.have = 0, h.mode = 18;
          case 18:
            for (; h.have < h.ncode; ) {
              for (; B < 3; ) {
                if (G === 0) break e;
                G--, P += U[K++] << B, B += 8;
              }
              h.lens[Z[h.have++]] = 7 & P, P >>>= 3, B -= 3;
            }
            for (; h.have < 19; ) h.lens[Z[h.have++]] = 0;
            if (h.lencode = h.lendyn, h.lenbits = 7, L = { bits: h.lenbits }, Y = l(0, h.lens, 0, 19, h.lencode, 0, h.work, L), h.lenbits = L.bits, Y) {
              E.msg = "invalid code lengths set", h.mode = 30;
              break;
            }
            h.have = 0, h.mode = 19;
          case 19:
            for (; h.have < h.nlen + h.ndist; ) {
              for (; ue = (I = h.lencode[P & (1 << h.lenbits) - 1]) >>> 16 & 255, Ee = 65535 & I, !((oe = I >>> 24) <= B); ) {
                if (G === 0) break e;
                G--, P += U[K++] << B, B += 8;
              }
              if (Ee < 16) P >>>= oe, B -= oe, h.lens[h.have++] = Ee;
              else {
                if (Ee === 16) {
                  for (x = oe + 2; B < x; ) {
                    if (G === 0) break e;
                    G--, P += U[K++] << B, B += 8;
                  }
                  if (P >>>= oe, B -= oe, h.have === 0) {
                    E.msg = "invalid bit length repeat", h.mode = 30;
                    break;
                  }
                  c = h.lens[h.have - 1], W = 3 + (3 & P), P >>>= 2, B -= 2;
                } else if (Ee === 17) {
                  for (x = oe + 3; B < x; ) {
                    if (G === 0) break e;
                    G--, P += U[K++] << B, B += 8;
                  }
                  B -= oe, c = 0, W = 3 + (7 & (P >>>= oe)), P >>>= 3, B -= 3;
                } else {
                  for (x = oe + 7; B < x; ) {
                    if (G === 0) break e;
                    G--, P += U[K++] << B, B += 8;
                  }
                  B -= oe, c = 0, W = 11 + (127 & (P >>>= oe)), P >>>= 7, B -= 7;
                }
                if (h.have + W > h.nlen + h.ndist) {
                  E.msg = "invalid bit length repeat", h.mode = 30;
                  break;
                }
                for (; W--; ) h.lens[h.have++] = c;
              }
            }
            if (h.mode === 30) break;
            if (h.lens[256] === 0) {
              E.msg = "invalid code -- missing end-of-block", h.mode = 30;
              break;
            }
            if (h.lenbits = 9, L = { bits: h.lenbits }, Y = l(A, h.lens, 0, h.nlen, h.lencode, 0, h.work, L), h.lenbits = L.bits, Y) {
              E.msg = "invalid literal/lengths set", h.mode = 30;
              break;
            }
            if (h.distbits = 6, h.distcode = h.distdyn, L = { bits: h.distbits }, Y = l(b, h.lens, h.nlen, h.ndist, h.distcode, 0, h.work, L), h.distbits = L.bits, Y) {
              E.msg = "invalid distances set", h.mode = 30;
              break;
            }
            if (h.mode = 20, z === 6) break e;
          case 20:
            h.mode = 21;
          case 21:
            if (6 <= G && 258 <= ae) {
              E.next_out = ie, E.avail_out = ae, E.next_in = K, E.avail_in = G, h.hold = P, h.bits = B, d(E, H), ie = E.next_out, re = E.output, ae = E.avail_out, K = E.next_in, U = E.input, G = E.avail_in, P = h.hold, B = h.bits, h.mode === 12 && (h.back = -1);
              break;
            }
            for (h.back = 0; ue = (I = h.lencode[P & (1 << h.lenbits) - 1]) >>> 16 & 255, Ee = 65535 & I, !((oe = I >>> 24) <= B); ) {
              if (G === 0) break e;
              G--, P += U[K++] << B, B += 8;
            }
            if (ue && !(240 & ue)) {
              for (ge = oe, ke = ue, Re = Ee; ue = (I = h.lencode[Re + ((P & (1 << ge + ke) - 1) >> ge)]) >>> 16 & 255, Ee = 65535 & I, !(ge + (oe = I >>> 24) <= B); ) {
                if (G === 0) break e;
                G--, P += U[K++] << B, B += 8;
              }
              P >>>= ge, B -= ge, h.back += ge;
            }
            if (P >>>= oe, B -= oe, h.back += oe, h.length = Ee, ue === 0) {
              h.mode = 26;
              break;
            }
            if (32 & ue) {
              h.back = -1, h.mode = 12;
              break;
            }
            if (64 & ue) {
              E.msg = "invalid literal/length code", h.mode = 30;
              break;
            }
            h.extra = 15 & ue, h.mode = 22;
          case 22:
            if (h.extra) {
              for (x = h.extra; B < x; ) {
                if (G === 0) break e;
                G--, P += U[K++] << B, B += 8;
              }
              h.length += P & (1 << h.extra) - 1, P >>>= h.extra, B -= h.extra, h.back += h.extra;
            }
            h.was = h.length, h.mode = 23;
          case 23:
            for (; ue = (I = h.distcode[P & (1 << h.distbits) - 1]) >>> 16 & 255, Ee = 65535 & I, !((oe = I >>> 24) <= B); ) {
              if (G === 0) break e;
              G--, P += U[K++] << B, B += 8;
            }
            if (!(240 & ue)) {
              for (ge = oe, ke = ue, Re = Ee; ue = (I = h.distcode[Re + ((P & (1 << ge + ke) - 1) >> ge)]) >>> 16 & 255, Ee = 65535 & I, !(ge + (oe = I >>> 24) <= B); ) {
                if (G === 0) break e;
                G--, P += U[K++] << B, B += 8;
              }
              P >>>= ge, B -= ge, h.back += ge;
            }
            if (P >>>= oe, B -= oe, h.back += oe, 64 & ue) {
              E.msg = "invalid distance code", h.mode = 30;
              break;
            }
            h.offset = Ee, h.extra = 15 & ue, h.mode = 24;
          case 24:
            if (h.extra) {
              for (x = h.extra; B < x; ) {
                if (G === 0) break e;
                G--, P += U[K++] << B, B += 8;
              }
              h.offset += P & (1 << h.extra) - 1, P >>>= h.extra, B -= h.extra, h.back += h.extra;
            }
            if (h.offset > h.dmax) {
              E.msg = "invalid distance too far back", h.mode = 30;
              break;
            }
            h.mode = 25;
          case 25:
            if (ae === 0) break e;
            if (W = H - ae, h.offset > W) {
              if ((W = h.offset - W) > h.whave && h.sane) {
                E.msg = "invalid distance too far back", h.mode = 30;
                break;
              }
              le = W > h.wnext ? (W -= h.wnext, h.wsize - W) : h.wnext - W, W > h.length && (W = h.length), ce = h.window;
            } else ce = re, le = ie - h.offset, W = h.length;
            for (ae < W && (W = ae), ae -= W, h.length -= W; re[ie++] = ce[le++], --W; ) ;
            h.length === 0 && (h.mode = 21);
            break;
          case 26:
            if (ae === 0) break e;
            re[ie++] = h.length, ae--, h.mode = 21;
            break;
          case 27:
            if (h.wrap) {
              for (; B < 32; ) {
                if (G === 0) break e;
                G--, P |= U[K++] << B, B += 8;
              }
              if (H -= ae, E.total_out += H, h.total += H, H && (E.adler = h.check = h.flags ? o(h.check, re, H, ie - H) : s(h.check, re, H, ie - H)), H = ae, (h.flags ? P : u(P)) !== h.check) {
                E.msg = "incorrect data check", h.mode = 30;
                break;
              }
              B = P = 0;
            }
            h.mode = 28;
          case 28:
            if (h.wrap && h.flags) {
              for (; B < 32; ) {
                if (G === 0) break e;
                G--, P += U[K++] << B, B += 8;
              }
              if (P !== (4294967295 & h.total)) {
                E.msg = "incorrect length check", h.mode = 30;
                break;
              }
              B = P = 0;
            }
            h.mode = 29;
          case 29:
            Y = 1;
            break e;
          case 30:
            Y = -3;
            break e;
          case 31:
            return -4;
          case 32:
          default:
            return f;
        }
        return E.next_out = ie, E.avail_out = ae, E.next_in = K, E.avail_in = G, h.hold = P, h.bits = B, (h.wsize || H !== E.avail_out && h.mode < 30 && (h.mode < 27 || z !== 4)) && R(E, E.output, E.next_out, H - E.avail_out) ? (h.mode = 31, -4) : ($ -= E.avail_in, H -= E.avail_out, E.total_in += $, E.total_out += H, h.total += H, h.wrap && H && (E.adler = h.check = h.flags ? o(h.check, re, H, E.next_out - H) : s(h.check, re, H, E.next_out - H)), E.data_type = h.bits + (h.last ? 64 : 0) + (h.mode === 12 ? 128 : 0) + (h.mode === 20 || h.mode === 15 ? 256 : 0), ($ == 0 && H === 0 || z === 4) && Y === _ && (Y = -5), Y);
      }, a.inflateEnd = function(E) {
        if (!E || !E.state) return f;
        var z = E.state;
        return z.window && (z.window = null), E.state = null, _;
      }, a.inflateGetHeader = function(E, z) {
        var h;
        return E && E.state && 2 & (h = E.state).wrap ? ((h.head = z).done = !1, _) : f;
      }, a.inflateSetDictionary = function(E, z) {
        var h, U = z.length;
        return E && E.state ? (h = E.state).wrap !== 0 && h.mode !== 11 ? f : h.mode === 11 && s(1, z, U, 0) !== h.check ? -3 : R(E, z, U, U) ? (h.mode = 31, -4) : (h.havedict = 1, _) : f;
      }, a.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(t, r, a) {
      var i = t("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], o = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], d = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], l = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      r.exports = function(A, b, _, f, g, p, m, u) {
        var C, v, y, k, O, S, F, D, Q, R = u.bits, E = 0, z = 0, h = 0, U = 0, re = 0, K = 0, ie = 0, G = 0, ae = 0, P = 0, B = null, $ = 0, H = new i.Buf16(16), W = new i.Buf16(16), le = null, ce = 0;
        for (E = 0; E <= 15; E++) H[E] = 0;
        for (z = 0; z < f; z++) H[b[_ + z]]++;
        for (re = R, U = 15; 1 <= U && H[U] === 0; U--) ;
        if (U < re && (re = U), U === 0) return g[p++] = 20971520, g[p++] = 20971520, u.bits = 1, 0;
        for (h = 1; h < U && H[h] === 0; h++) ;
        for (re < h && (re = h), E = G = 1; E <= 15; E++) if (G <<= 1, (G -= H[E]) < 0) return -1;
        if (0 < G && (A === 0 || U !== 1)) return -1;
        for (W[1] = 0, E = 1; E < 15; E++) W[E + 1] = W[E] + H[E];
        for (z = 0; z < f; z++) b[_ + z] !== 0 && (m[W[b[_ + z]]++] = z);
        if (S = A === 0 ? (B = le = m, 19) : A === 1 ? (B = s, $ -= 257, le = o, ce -= 257, 256) : (B = d, le = l, -1), E = h, O = p, ie = z = P = 0, y = -1, k = (ae = 1 << (K = re)) - 1, A === 1 && 852 < ae || A === 2 && 592 < ae) return 1;
        for (; ; ) {
          for (F = E - ie, Q = m[z] < S ? (D = 0, m[z]) : m[z] > S ? (D = le[ce + m[z]], B[$ + m[z]]) : (D = 96, 0), C = 1 << E - ie, h = v = 1 << K; g[O + (P >> ie) + (v -= C)] = F << 24 | D << 16 | Q | 0, v !== 0; ) ;
          for (C = 1 << E - 1; P & C; ) C >>= 1;
          if (C !== 0 ? (P &= C - 1, P += C) : P = 0, z++, --H[E] == 0) {
            if (E === U) break;
            E = b[_ + m[z]];
          }
          if (re < E && (P & k) !== y) {
            for (ie === 0 && (ie = re), O += h, G = 1 << (K = E - ie); K + ie < U && !((G -= H[K + ie]) <= 0); ) K++, G <<= 1;
            if (ae += 1 << K, A === 1 && 852 < ae || A === 2 && 592 < ae) return 1;
            g[y = P & k] = re << 24 | K << 16 | O - p | 0;
          }
        }
        return P !== 0 && (g[O + P] = E - ie << 24 | 64 << 16 | 0), u.bits = re, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(t, r, a) {
      r.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(t, r, a) {
      var i = t("../utils/common"), s = 0, o = 1;
      function d(I) {
        for (var T = I.length; 0 <= --T; ) I[T] = 0;
      }
      var l = 0, A = 29, b = 256, _ = b + 1 + A, f = 30, g = 19, p = 2 * _ + 1, m = 15, u = 16, C = 7, v = 256, y = 16, k = 17, O = 18, S = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], F = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], D = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], Q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], R = new Array(2 * (_ + 2));
      d(R);
      var E = new Array(2 * f);
      d(E);
      var z = new Array(512);
      d(z);
      var h = new Array(256);
      d(h);
      var U = new Array(A);
      d(U);
      var re, K, ie, G = new Array(f);
      function ae(I, T, Z, j, M) {
        this.static_tree = I, this.extra_bits = T, this.extra_base = Z, this.elems = j, this.max_length = M, this.has_stree = I && I.length;
      }
      function P(I, T) {
        this.dyn_tree = I, this.max_code = 0, this.stat_desc = T;
      }
      function B(I) {
        return I < 256 ? z[I] : z[256 + (I >>> 7)];
      }
      function $(I, T) {
        I.pending_buf[I.pending++] = 255 & T, I.pending_buf[I.pending++] = T >>> 8 & 255;
      }
      function H(I, T, Z) {
        I.bi_valid > u - Z ? (I.bi_buf |= T << I.bi_valid & 65535, $(I, I.bi_buf), I.bi_buf = T >> u - I.bi_valid, I.bi_valid += Z - u) : (I.bi_buf |= T << I.bi_valid & 65535, I.bi_valid += Z);
      }
      function W(I, T, Z) {
        H(I, Z[2 * T], Z[2 * T + 1]);
      }
      function le(I, T) {
        for (var Z = 0; Z |= 1 & I, I >>>= 1, Z <<= 1, 0 < --T; ) ;
        return Z >>> 1;
      }
      function ce(I, T, Z) {
        var j, M, X = new Array(m + 1), te = 0;
        for (j = 1; j <= m; j++) X[j] = te = te + Z[j - 1] << 1;
        for (M = 0; M <= T; M++) {
          var V = I[2 * M + 1];
          V !== 0 && (I[2 * M] = le(X[V]++, V));
        }
      }
      function oe(I) {
        var T;
        for (T = 0; T < _; T++) I.dyn_ltree[2 * T] = 0;
        for (T = 0; T < f; T++) I.dyn_dtree[2 * T] = 0;
        for (T = 0; T < g; T++) I.bl_tree[2 * T] = 0;
        I.dyn_ltree[2 * v] = 1, I.opt_len = I.static_len = 0, I.last_lit = I.matches = 0;
      }
      function ue(I) {
        8 < I.bi_valid ? $(I, I.bi_buf) : 0 < I.bi_valid && (I.pending_buf[I.pending++] = I.bi_buf), I.bi_buf = 0, I.bi_valid = 0;
      }
      function Ee(I, T, Z, j) {
        var M = 2 * T, X = 2 * Z;
        return I[M] < I[X] || I[M] === I[X] && j[T] <= j[Z];
      }
      function ge(I, T, Z) {
        for (var j = I.heap[Z], M = Z << 1; M <= I.heap_len && (M < I.heap_len && Ee(T, I.heap[M + 1], I.heap[M], I.depth) && M++, !Ee(T, j, I.heap[M], I.depth)); ) I.heap[Z] = I.heap[M], Z = M, M <<= 1;
        I.heap[Z] = j;
      }
      function ke(I, T, Z) {
        var j, M, X, te, V = 0;
        if (I.last_lit !== 0) for (; j = I.pending_buf[I.d_buf + 2 * V] << 8 | I.pending_buf[I.d_buf + 2 * V + 1], M = I.pending_buf[I.l_buf + V], V++, j === 0 ? W(I, M, T) : (W(I, (X = h[M]) + b + 1, T), (te = S[X]) !== 0 && H(I, M -= U[X], te), W(I, X = B(--j), Z), (te = F[X]) !== 0 && H(I, j -= G[X], te)), V < I.last_lit; ) ;
        W(I, v, T);
      }
      function Re(I, T) {
        var Z, j, M, X = T.dyn_tree, te = T.stat_desc.static_tree, V = T.stat_desc.has_stree, ne = T.stat_desc.elems, Ae = -1;
        for (I.heap_len = 0, I.heap_max = p, Z = 0; Z < ne; Z++) X[2 * Z] !== 0 ? (I.heap[++I.heap_len] = Ae = Z, I.depth[Z] = 0) : X[2 * Z + 1] = 0;
        for (; I.heap_len < 2; ) X[2 * (M = I.heap[++I.heap_len] = Ae < 2 ? ++Ae : 0)] = 1, I.depth[M] = 0, I.opt_len--, V && (I.static_len -= te[2 * M + 1]);
        for (T.max_code = Ae, Z = I.heap_len >> 1; 1 <= Z; Z--) ge(I, X, Z);
        for (M = ne; Z = I.heap[1], I.heap[1] = I.heap[I.heap_len--], ge(I, X, 1), j = I.heap[1], I.heap[--I.heap_max] = Z, I.heap[--I.heap_max] = j, X[2 * M] = X[2 * Z] + X[2 * j], I.depth[M] = (I.depth[Z] >= I.depth[j] ? I.depth[Z] : I.depth[j]) + 1, X[2 * Z + 1] = X[2 * j + 1] = M, I.heap[1] = M++, ge(I, X, 1), 2 <= I.heap_len; ) ;
        I.heap[--I.heap_max] = I.heap[1], function(fe, Ne) {
          var nt, Le, ft, be, dt, pt, Je = Ne.dyn_tree, rn = Ne.max_code, On = Ne.stat_desc.static_tree, an = Ne.stat_desc.has_stree, on = Ne.stat_desc.extra_bits, ut = Ne.stat_desc.extra_base, qe = Ne.stat_desc.max_length, vt = 0;
          for (be = 0; be <= m; be++) fe.bl_count[be] = 0;
          for (Je[2 * fe.heap[fe.heap_max] + 1] = 0, nt = fe.heap_max + 1; nt < p; nt++) qe < (be = Je[2 * Je[2 * (Le = fe.heap[nt]) + 1] + 1] + 1) && (be = qe, vt++), Je[2 * Le + 1] = be, rn < Le || (fe.bl_count[be]++, dt = 0, ut <= Le && (dt = on[Le - ut]), pt = Je[2 * Le], fe.opt_len += pt * (be + dt), an && (fe.static_len += pt * (On[2 * Le + 1] + dt)));
          if (vt !== 0) {
            do {
              for (be = qe - 1; fe.bl_count[be] === 0; ) be--;
              fe.bl_count[be]--, fe.bl_count[be + 1] += 2, fe.bl_count[qe]--, vt -= 2;
            } while (0 < vt);
            for (be = qe; be !== 0; be--) for (Le = fe.bl_count[be]; Le !== 0; ) rn < (ft = fe.heap[--nt]) || (Je[2 * ft + 1] !== be && (fe.opt_len += (be - Je[2 * ft + 1]) * Je[2 * ft], Je[2 * ft + 1] = be), Le--);
          }
        }(I, T), ce(X, Ae, I.bl_count);
      }
      function c(I, T, Z) {
        var j, M, X = -1, te = T[1], V = 0, ne = 7, Ae = 4;
        for (te === 0 && (ne = 138, Ae = 3), T[2 * (Z + 1) + 1] = 65535, j = 0; j <= Z; j++) M = te, te = T[2 * (j + 1) + 1], ++V < ne && M === te || (V < Ae ? I.bl_tree[2 * M] += V : M !== 0 ? (M !== X && I.bl_tree[2 * M]++, I.bl_tree[2 * y]++) : V <= 10 ? I.bl_tree[2 * k]++ : I.bl_tree[2 * O]++, X = M, Ae = (V = 0) === te ? (ne = 138, 3) : M === te ? (ne = 6, 3) : (ne = 7, 4));
      }
      function Y(I, T, Z) {
        var j, M, X = -1, te = T[1], V = 0, ne = 7, Ae = 4;
        for (te === 0 && (ne = 138, Ae = 3), j = 0; j <= Z; j++) if (M = te, te = T[2 * (j + 1) + 1], !(++V < ne && M === te)) {
          if (V < Ae) for (; W(I, M, I.bl_tree), --V != 0; ) ;
          else M !== 0 ? (M !== X && (W(I, M, I.bl_tree), V--), W(I, y, I.bl_tree), H(I, V - 3, 2)) : V <= 10 ? (W(I, k, I.bl_tree), H(I, V - 3, 3)) : (W(I, O, I.bl_tree), H(I, V - 11, 7));
          X = M, Ae = (V = 0) === te ? (ne = 138, 3) : M === te ? (ne = 6, 3) : (ne = 7, 4);
        }
      }
      d(G);
      var L = !1;
      function x(I, T, Z, j) {
        H(I, (l << 1) + (j ? 1 : 0), 3), function(M, X, te, V) {
          ue(M), $(M, te), $(M, ~te), i.arraySet(M.pending_buf, M.window, X, te, M.pending), M.pending += te;
        }(I, T, Z);
      }
      a._tr_init = function(I) {
        L || (function() {
          var T, Z, j, M, X, te = new Array(m + 1);
          for (M = j = 0; M < A - 1; M++) for (U[M] = j, T = 0; T < 1 << S[M]; T++) h[j++] = M;
          for (h[j - 1] = M, M = X = 0; M < 16; M++) for (G[M] = X, T = 0; T < 1 << F[M]; T++) z[X++] = M;
          for (X >>= 7; M < f; M++) for (G[M] = X << 7, T = 0; T < 1 << F[M] - 7; T++) z[256 + X++] = M;
          for (Z = 0; Z <= m; Z++) te[Z] = 0;
          for (T = 0; T <= 143; ) R[2 * T + 1] = 8, T++, te[8]++;
          for (; T <= 255; ) R[2 * T + 1] = 9, T++, te[9]++;
          for (; T <= 279; ) R[2 * T + 1] = 7, T++, te[7]++;
          for (; T <= 287; ) R[2 * T + 1] = 8, T++, te[8]++;
          for (ce(R, _ + 1, te), T = 0; T < f; T++) E[2 * T + 1] = 5, E[2 * T] = le(T, 5);
          re = new ae(R, S, b + 1, _, m), K = new ae(E, F, 0, f, m), ie = new ae(new Array(0), D, 0, g, C);
        }(), L = !0), I.l_desc = new P(I.dyn_ltree, re), I.d_desc = new P(I.dyn_dtree, K), I.bl_desc = new P(I.bl_tree, ie), I.bi_buf = 0, I.bi_valid = 0, oe(I);
      }, a._tr_stored_block = x, a._tr_flush_block = function(I, T, Z, j) {
        var M, X, te = 0;
        0 < I.level ? (I.strm.data_type === 2 && (I.strm.data_type = function(V) {
          var ne, Ae = 4093624447;
          for (ne = 0; ne <= 31; ne++, Ae >>>= 1) if (1 & Ae && V.dyn_ltree[2 * ne] !== 0) return s;
          if (V.dyn_ltree[18] !== 0 || V.dyn_ltree[20] !== 0 || V.dyn_ltree[26] !== 0) return o;
          for (ne = 32; ne < b; ne++) if (V.dyn_ltree[2 * ne] !== 0) return o;
          return s;
        }(I)), Re(I, I.l_desc), Re(I, I.d_desc), te = function(V) {
          var ne;
          for (c(V, V.dyn_ltree, V.l_desc.max_code), c(V, V.dyn_dtree, V.d_desc.max_code), Re(V, V.bl_desc), ne = g - 1; 3 <= ne && V.bl_tree[2 * Q[ne] + 1] === 0; ne--) ;
          return V.opt_len += 3 * (ne + 1) + 5 + 5 + 4, ne;
        }(I), M = I.opt_len + 3 + 7 >>> 3, (X = I.static_len + 3 + 7 >>> 3) <= M && (M = X)) : M = X = Z + 5, Z + 4 <= M && T !== -1 ? x(I, T, Z, j) : I.strategy === 4 || X === M ? (H(I, 2 + (j ? 1 : 0), 3), ke(I, R, E)) : (H(I, 4 + (j ? 1 : 0), 3), function(V, ne, Ae, fe) {
          var Ne;
          for (H(V, ne - 257, 5), H(V, Ae - 1, 5), H(V, fe - 4, 4), Ne = 0; Ne < fe; Ne++) H(V, V.bl_tree[2 * Q[Ne] + 1], 3);
          Y(V, V.dyn_ltree, ne - 1), Y(V, V.dyn_dtree, Ae - 1);
        }(I, I.l_desc.max_code + 1, I.d_desc.max_code + 1, te + 1), ke(I, I.dyn_ltree, I.dyn_dtree)), oe(I), j && ue(I);
      }, a._tr_tally = function(I, T, Z) {
        return I.pending_buf[I.d_buf + 2 * I.last_lit] = T >>> 8 & 255, I.pending_buf[I.d_buf + 2 * I.last_lit + 1] = 255 & T, I.pending_buf[I.l_buf + I.last_lit] = 255 & Z, I.last_lit++, T === 0 ? I.dyn_ltree[2 * Z]++ : (I.matches++, T--, I.dyn_ltree[2 * (h[Z] + b + 1)]++, I.dyn_dtree[2 * B(T)]++), I.last_lit === I.lit_bufsize - 1;
      }, a._tr_align = function(I) {
        H(I, 2, 3), W(I, v, R), function(T) {
          T.bi_valid === 16 ? ($(T, T.bi_buf), T.bi_buf = 0, T.bi_valid = 0) : 8 <= T.bi_valid && (T.pending_buf[T.pending++] = 255 & T.bi_buf, T.bi_buf >>= 8, T.bi_valid -= 8);
        }(I);
      };
    }, { "../utils/common": 41 }], 53: [function(t, r, a) {
      r.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(t, r, a) {
      (function(i) {
        (function(s, o) {
          if (!s.setImmediate) {
            var d, l, A, b, _ = 1, f = {}, g = !1, p = s.document, m = Object.getPrototypeOf && Object.getPrototypeOf(s);
            m = m && m.setTimeout ? m : s, d = {}.toString.call(s.process) === "[object process]" ? function(y) {
              setTimeout(function() {
                C(y);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var y = !0, k = s.onmessage;
                return s.onmessage = function() {
                  y = !1;
                }, s.postMessage("", "*"), s.onmessage = k, y;
              }
            }() ? (b = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", v, !1) : s.attachEvent("onmessage", v), function(y) {
              s.postMessage(b + y, "*");
            }) : s.MessageChannel ? ((A = new MessageChannel()).port1.onmessage = function(y) {
              C(y.data);
            }, function(y) {
              A.port2.postMessage(y);
            }) : p && "onreadystatechange" in p.createElement("script") ? (l = p.documentElement, function(y) {
              var k = p.createElement("script");
              k.onreadystatechange = function() {
                C(y), k.onreadystatechange = null, l.removeChild(k), k = null;
              }, l.appendChild(k);
            }) : function(y) {
              setTimeout(C, 0, y);
            }, m.setImmediate = function(y) {
              typeof y != "function" && (y = new Function("" + y));
              for (var k = new Array(arguments.length - 1), O = 0; O < k.length; O++) k[O] = arguments[O + 1];
              var S = { callback: y, args: k };
              return f[_] = S, d(_), _++;
            }, m.clearImmediate = u;
          }
          function u(y) {
            delete f[y];
          }
          function C(y) {
            if (g) setTimeout(C, 0, y);
            else {
              var k = f[y];
              if (k) {
                g = !0;
                try {
                  (function(O) {
                    var S = O.callback, F = O.args;
                    switch (F.length) {
                      case 0:
                        S();
                        break;
                      case 1:
                        S(F[0]);
                        break;
                      case 2:
                        S(F[0], F[1]);
                        break;
                      case 3:
                        S(F[0], F[1], F[2]);
                        break;
                      default:
                        S.apply(o, F);
                    }
                  })(k);
                } finally {
                  u(y), g = !1;
                }
              }
            }
          }
          function v(y) {
            y.source === s && typeof y.data == "string" && y.data.indexOf(b) === 0 && C(+y.data.slice(b.length));
          }
        })(typeof self > "u" ? i === void 0 ? this : i : self);
      }).call(this, typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(to);
var bs = to.exports;
const Oi = /* @__PURE__ */ si(bs);
/*! @license DOMPurify 3.4.16 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.16/LICENSE */
function Fi(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function Cs(e) {
  if (Array.isArray(e)) return e;
}
function ws(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r, a, i, s, o = [], d = !0, l = !1;
    try {
      if (i = (t = t.call(e)).next, n !== 0) for (; !(d = (r = i.call(t)).done) && (o.push(r.value), o.length !== n); d = !0) ;
    } catch (A) {
      l = !0, a = A;
    } finally {
      try {
        if (!d && t.return != null && (s = t.return(), Object(s) !== s)) return;
      } finally {
        if (l) throw a;
      }
    }
    return o;
  }
}
function Es() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
function Is(e, n) {
  return Cs(e) || ws(e, n) || vs(e, n) || Es();
}
function vs(e, n) {
  if (e) {
    if (typeof e == "string") return Fi(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Fi(e, n) : void 0;
  }
}
const no = Object.entries, Mi = Object.setPrototypeOf, ys = Object.isFrozen, xs = Object.getPrototypeOf, Bs = Object.getOwnPropertyDescriptor;
let Be = Object.freeze, Qe = Object.seal, Zt = Object.create, ro = typeof Reflect < "u" && Reflect, Jr = ro.apply, qr = ro.construct;
Be || (Be = function(n) {
  return n;
});
Qe || (Qe = function(n) {
  return n;
});
Jr || (Jr = function(n, t) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) a[i - 2] = arguments[i];
  return n.apply(t, a);
});
qr || (qr = function(n) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
  return new n(...r);
});
const Bt = xe(Array.prototype.forEach), ks = xe(Array.prototype.lastIndexOf), Pi = xe(Array.prototype.pop), cn = xe(Array.prototype.push), Ss = xe(Array.prototype.splice), Jt = Array.isArray, gn = xe(String.prototype.toLowerCase), Er = xe(String.prototype.toString), Ui = xe(String.prototype.match), fn = xe(String.prototype.replace), Hi = xe(String.prototype.indexOf), Qs = xe(String.prototype.trim), Ds = xe(Number.prototype.toString), Ts = xe(Boolean.prototype.toString), Yi = typeof BigInt > "u" ? null : xe(BigInt.prototype.toString), Gi = typeof Symbol > "u" ? null : xe(Symbol.prototype.toString), Pe = xe(Object.prototype.hasOwnProperty), dn = xe(Object.prototype.toString), ze = xe(RegExp.prototype.test), mt = Rs(TypeError);
function xe(e) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
    return Jr(e, n, r);
  };
}
function Rs(e) {
  return function() {
    for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];
    return qr(e, t);
  };
}
function pe(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : gn;
  if (Mi && Mi(e, null), !Jt(n)) return e;
  let r = n.length;
  for (; r--; ) {
    let a = n[r];
    if (typeof a == "string") {
      const i = t(a);
      i !== a && (ys(n) || (n[r] = i), a = i);
    }
    e[a] = !0;
  }
  return e;
}
function Ns(e) {
  for (let n = 0; n < e.length; n++) Pe(e, n) || (e[n] = null);
  return e;
}
function Ze(e) {
  const n = Zt(null);
  for (const r of no(e)) {
    var t = Is(r, 2);
    const a = t[0], i = t[1];
    Pe(e, a) && (Jt(i) ? n[a] = Ns(i) : i && typeof i == "object" && i.constructor === Object ? n[a] = Ze(i) : n[a] = i);
  }
  return n;
}
function zs(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Ds(e);
    case "boolean":
      return Ts(e);
    case "bigint":
      return Yi ? Yi(e) : "0";
    case "symbol":
      return Gi ? Gi(e) : "Symbol()";
    case "undefined":
      return dn(e);
    case "function":
    case "object": {
      if (e === null) return dn(e);
      const n = e, t = Xe(n, "toString");
      if (typeof t == "function") {
        const r = t(n);
        return typeof r == "string" ? r : dn(r);
      }
      return dn(e);
    }
    default:
      return dn(e);
  }
}
function Xe(e, n) {
  for (; e !== null; ) {
    const r = Bs(e, n);
    if (r) {
      if (r.get) return xe(r.get);
      if (typeof r.value == "function") return xe(r.value);
    }
    e = xs(e);
  }
  function t() {
    return null;
  }
  return t;
}
function Ls(e) {
  try {
    return ze(e, ""), !0;
  } catch {
    return !1;
  }
}
const ji = Be([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]), Ir = Be([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "enterkeyhint",
  "exportparts",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "inputmode",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "part",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]), vr = Be([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]), Os = Be([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]), yr = Be([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]), Fs = Be([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]), Zi = Be(["#text"]), Wi = Be([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "command",
  "commandfor",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "exportparts",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inert",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "part",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns"
]), xr = Be([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "mask-type",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "pointer-events",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-orientation",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "vector-effect",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]), Ki = Be([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnalign",
  "columnlines",
  "columnspacing",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lquote",
  "lspace",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]), Kn = Be([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), Ms = Qe(/{{[\w\W]*|^[\w\W]*}}/g), Ps = Qe(/<%[\w\W]*|^[\w\W]*%>/g), Us = Qe(/\${[\w\W]*/g), Hs = Qe(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ys = Qe(/^aria-[\-\w]+$/), Ji = Qe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Gs = Qe(/^(?:\w+script|data):/i), js = Qe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Zs = Qe(/^html$/i), Ws = Qe(/^[a-z][.\w]*(-[.\w]+)+$/i), qi = Qe(/<[/\w!]/g), $i = Qe(/<[/\w]/g), Ks = Qe(/<\/no(script|embed|frames)/i), Js = Qe(/\/>/i), Ye = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
}, io = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], qs = Be(pe({}, io)), $s = function() {
  const e = {};
  return Bt(io, (n) => {
    e[n] = Qe(new RegExp("</" + n + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Be(e);
}(), Xs = function() {
  return typeof window > "u" ? null : window;
}, Vs = function(n, t) {
  if (typeof n != "object" || typeof n.createPolicy != "function") return null;
  let r = null;
  const a = "data-tt-policy-suffix";
  t && t.hasAttribute(a) && (r = t.getAttribute(a));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return n.createPolicy(i, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, Xi = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
}, _t = function(n, t, r, a) {
  return Pe(n, t) && Jt(n[t]) ? pe(a.base ? Ze(a.base) : {}, n[t], a.transform) : r;
}, Br = function(n, t, r) {
  const a = Pe(n, t) ? n[t] : void 0;
  return a && typeof a == "object" ? Ze(a) : r();
};
function ao() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Xs();
  const n = (q) => ao(q);
  if (n.version = "3.4.16", n.removed = [], !e || !e.document || e.document.nodeType !== Ye.document || !e.Element)
    return n.isSupported = !1, n;
  let t = e.document;
  const r = t, a = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, s = e.Node, o = e.Element, d = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const l = e.DOMParser, A = e.trustedTypes, b = o.prototype, _ = Xe(b, "cloneNode"), f = Xe(b, "remove"), g = Xe(b, "removeAttributeNode"), p = Xe(b, "nextSibling"), m = Xe(b, "childNodes"), u = Xe(b, "parentNode"), C = Xe(b, "shadowRoot"), v = Xe(b, "attributes"), y = s && s.prototype ? Xe(s.prototype, "nodeType") : null, k = s && s.prototype ? Xe(s.prototype, "nodeName") : null, O = s && s.prototype ? Xe(s.prototype, "ownerDocument") : null, S = function(w) {
    return y ? y(w) : w.nodeType;
  }, F = function(w) {
    return k ? k(w) : w.nodeName;
  };
  if (typeof i == "function") {
    const q = t.createElement("template");
    q.content && q.content.ownerDocument && (t = q.content.ownerDocument);
  }
  let D, Q = "", R, E = !1, z = 0;
  const h = function() {
    if (z > 0) throw mt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, U = function(w) {
    h(), z++;
    try {
      return D.createHTML(w);
    } finally {
      z--;
    }
  }, re = function(w) {
    h(), z++;
    try {
      return D.createScriptURL(w);
    } finally {
      z--;
    }
  }, K = function() {
    return E || (R = Vs(A, a), E = !0), R;
  }, ie = t, G = ie.implementation, ae = ie.createNodeIterator, P = ie.createDocumentFragment, B = ie.getElementsByTagName, $ = r.importNode;
  let H = Xi();
  n.isSupported = typeof no == "function" && typeof u == "function" && G && G.createHTMLDocument !== void 0;
  const W = Ms, le = Ps, ce = Us, oe = Hs, ue = Ys, Ee = Gs, ge = js, ke = Ws;
  let Re = Ji, c = null;
  const Y = pe({}, [
    ...ji,
    ...Ir,
    ...vr,
    ...yr,
    ...Zi
  ]);
  let L = null;
  const x = pe({}, [
    ...Wi,
    ...xr,
    ...Ki,
    ...Kn
  ]);
  let I = Object.seal(Zt(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), T = null, Z = null;
  const j = Object.seal(Zt(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let M = !0, X = !0, te = !1, V = !0, ne = !1, Ae = !0, fe = !1, Ne = !1, nt = null, Le = null, ft = !1, be = !1, dt = !1, pt = !1, Je = !0, rn = !1;
  const On = "user-content-";
  let an = !0, on = !1, ut = {}, qe = null;
  const vt = pe({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let _i = null;
  const bi = pe({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let Ci = null;
  const wi = pe({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]), Fn = "http://www.w3.org/1998/Math/MathML", Mn = "http://www.w3.org/2000/svg", rt = "http://www.w3.org/1999/xhtml";
  let Ft = rt, hr = !1, pr = null;
  const Vo = pe({}, [
    Fn,
    Mn,
    rt
  ], Er), Ei = Be([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let gr = pe({}, Ei);
  const Ii = Be(["annotation-xml"]);
  let mr = pe({}, Ii);
  const es = pe({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let sn = null;
  const ts = ["application/xhtml+xml", "text/html"], ns = "text/html";
  let ye = null, Mt = null;
  const rs = t.createElement("form"), vi = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, _r = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Mt && Mt === w) return;
    (!w || typeof w != "object") && (w = {}), w = Ze(w), sn = ts.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? ns : w.PARSER_MEDIA_TYPE, ye = sn === "application/xhtml+xml" ? Er : gn, c = _t(w, "ALLOWED_TAGS", Y, { transform: ye }), L = _t(w, "ALLOWED_ATTR", x, { transform: ye }), pr = _t(w, "ALLOWED_NAMESPACES", Vo, { transform: Er }), Ci = _t(w, "ADD_URI_SAFE_ATTR", wi, {
      transform: ye,
      base: wi
    }), _i = _t(w, "ADD_DATA_URI_TAGS", bi, {
      transform: ye,
      base: bi
    }), qe = _t(w, "FORBID_CONTENTS", vt, { transform: ye }), T = _t(w, "FORBID_TAGS", Ze({}), { transform: ye }), Z = _t(w, "FORBID_ATTR", Ze({}), { transform: ye }), ut = Pe(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? Ze(w.USE_PROFILES) : w.USE_PROFILES : !1, M = w.ALLOW_ARIA_ATTR !== !1, X = w.ALLOW_DATA_ATTR !== !1, te = w.ALLOW_UNKNOWN_PROTOCOLS || !1, V = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = w.SAFE_FOR_TEMPLATES || !1, Ae = w.SAFE_FOR_XML !== !1, fe = w.WHOLE_DOCUMENT || !1, be = w.RETURN_DOM || !1, dt = w.RETURN_DOM_FRAGMENT || !1, pt = w.RETURN_TRUSTED_TYPE || !1, ft = w.FORCE_BODY || !1, Je = w.SANITIZE_DOM !== !1, rn = w.SANITIZE_NAMED_PROPS || !1, an = w.KEEP_CONTENT !== !1, on = w.IN_PLACE || !1, Re = Ls(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : Ji, Ft = typeof w.NAMESPACE == "string" ? w.NAMESPACE : rt, gr = Br(w, "MATHML_TEXT_INTEGRATION_POINTS", () => pe({}, Ei)), mr = Br(w, "HTML_INTEGRATION_POINTS", () => pe({}, Ii));
    const N = Br(w, "CUSTOM_ELEMENT_HANDLING", () => Zt(null));
    if (I = Zt(null), Pe(N, "tagNameCheck") && vi(N.tagNameCheck) && (I.tagNameCheck = N.tagNameCheck), Pe(N, "attributeNameCheck") && vi(N.attributeNameCheck) && (I.attributeNameCheck = N.attributeNameCheck), Pe(N, "allowCustomizedBuiltInElements") && typeof N.allowCustomizedBuiltInElements == "boolean" && (I.allowCustomizedBuiltInElements = N.allowCustomizedBuiltInElements), Qe(I), ne && (X = !1), dt && (be = !0), ut && (c = pe({}, Zi), L = Zt(null), ut.html === !0 && (pe(c, ji), pe(L, Wi)), ut.svg === !0 && (pe(c, Ir), pe(L, xr), pe(L, Kn)), ut.svgFilters === !0 && (pe(c, vr), pe(L, xr), pe(L, Kn)), ut.mathMl === !0 && (pe(c, yr), pe(L, Ki), pe(L, Kn))), j.tagCheck = null, j.attributeCheck = null, Pe(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? j.tagCheck = w.ADD_TAGS : Jt(w.ADD_TAGS) && (c === Y && (c = Ze(c)), pe(c, w.ADD_TAGS, ye))), Pe(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? j.attributeCheck = w.ADD_ATTR : Jt(w.ADD_ATTR) && (L === x && (L = Ze(L)), pe(L, w.ADD_ATTR, ye))), Pe(w, "ADD_FORBID_CONTENTS") && Jt(w.ADD_FORBID_CONTENTS) && (qe === vt && (qe = Ze(qe)), pe(qe, w.ADD_FORBID_CONTENTS, ye)), an && (c["#text"] = !0), fe && pe(c, [
      "html",
      "head",
      "body"
    ]), c.table && (pe(c, ["tbody"]), delete T.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function") throw mt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw mt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const J = D;
      D = w.TRUSTED_TYPES_POLICY;
      try {
        Q = U("");
      } catch (ee) {
        throw D = J, ee;
      }
    } else w.TRUSTED_TYPES_POLICY === null ? (D = void 0, Q = "") : (D === void 0 && (D = K()), D && typeof Q == "string" && (Q = U("")));
    Be && Be(w), Mt = w;
  }, yi = pe({}, [
    ...Ir,
    ...vr,
    ...Os
  ]), xi = pe({}, [...yr, ...Fs]), is = function(w, N, J) {
    return N.namespaceURI === rt ? w === "svg" : N.namespaceURI === Fn ? w === "svg" && (J === "annotation-xml" || gr[J]) : !!yi[w];
  }, as = function(w, N, J) {
    return N.namespaceURI === rt ? w === "math" : N.namespaceURI === Mn ? w === "math" && mr[J] : !!xi[w];
  }, os = function(w, N, J) {
    return N.namespaceURI === Mn && !mr[J] || N.namespaceURI === Fn && !gr[J] ? !1 : !xi[w] && (es[w] || !yi[w]);
  }, ss = function(w) {
    let N = u(w);
    (!N || !N.tagName) && (N = {
      namespaceURI: Ft,
      tagName: "template"
    });
    const J = gn(w.tagName), ee = gn(N.tagName);
    return pr[w.namespaceURI] ? w.namespaceURI === Mn ? is(J, N, ee) : w.namespaceURI === Fn ? as(J, N, ee) : w.namespaceURI === rt ? os(J, N, ee) : !!(sn === "application/xhtml+xml" && pr[w.namespaceURI]) : !1;
  }, gt = function(w) {
    cn(n.removed, { element: w });
    try {
      u(w).removeChild(w);
    } catch {
      if (f(w), !u(w)) throw mt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Bi = function(w, N, J) {
    try {
      g(w, N);
    } catch {
      try {
        w.removeAttribute(J);
      } catch {
      }
    }
  }, Pn = function(w) {
    Un(w);
    const N = m(w);
    if (N) {
      const ee = [];
      Bt(N, (se) => {
        cn(ee, se);
      }), Bt(ee, (se) => {
        try {
          f(se);
        } catch {
        }
      });
    }
    const J = v(w);
    if (J) for (let ee = J.length - 1; ee >= 0; --ee) {
      const se = J[ee], de = se && se.name;
      typeof de == "string" && Bi(w, se, de);
    }
  }, yt = function(w, N, J) {
    if (!J) try {
      J = N.getAttributeNode(w);
    } catch {
      J = null;
    }
    cn(n.removed, {
      attribute: J || null,
      from: N
    });
    try {
      J ? g(N, J) : N.removeAttribute(w);
    } catch {
      try {
        N.removeAttribute(w);
      } catch {
      }
    }
    if (w === "is")
      if (be || dt) try {
        gt(N);
      } catch {
      }
      else try {
        N.setAttribute(w, "");
      } catch {
      }
  }, ls = function(w) {
    const N = v(w);
    if (N)
      for (let J = N.length - 1; J >= 0; --J) {
        const ee = N[J], se = ee && ee.name;
        typeof se != "string" || L[ye(se)] || Bi(w, ee, se);
      }
  }, Un = function(w) {
    const N = [w];
    for (; N.length > 0; ) {
      const J = N.pop();
      S(J) === Ye.element && ls(J);
      const ee = m(J);
      if (ee) for (let se = ee.length - 1; se >= 0; --se) N.push(ee[se]);
    }
  }, ki = function(w, N) {
    return Ae ? w === "patchsrc" ? !0 : w === "for" && N !== "label" && N !== "output" : !1;
  }, cs = function(w) {
    if (!Ae) return;
    const N = [w];
    for (; N.length > 0; ) {
      const J = N.pop(), ee = S(J);
      if (ee === Ye.processingInstruction || ee === Ye.comment && ze($i, J.data)) {
        try {
          f(J);
        } catch {
        }
        continue;
      }
      if (ee === Ye.element) {
        const de = J, he = ye(F(J));
        try {
          de.hasAttribute && de.hasAttribute("patchsrc") && de.removeAttribute("patchsrc"), de.hasAttribute && de.hasAttribute("for") && ki("for", he) && de.removeAttribute("for");
        } catch {
        }
      }
      const se = m(J);
      if (se) for (let de = se.length - 1; de >= 0; --de) N.push(se[de]);
    }
  }, Si = function(w) {
    let N = null, J = null;
    if (ft) w = "<remove></remove>" + w;
    else {
      const de = Ui(w, /^[\r\n\t ]+/);
      J = de && de[0];
    }
    sn === "application/xhtml+xml" && Ft === rt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const ee = D ? U(w) : w;
    if (Ft === rt) try {
      N = new l().parseFromString(ee, sn);
    } catch {
    }
    if (!N || !N.documentElement) {
      N = G.createDocument(Ft, "template", null);
      try {
        N.documentElement.innerHTML = hr ? Q : ee;
      } catch {
      }
    }
    const se = N.body || N.documentElement;
    return w && J && se.insertBefore(t.createTextNode(J), se.childNodes[0] || null), Ft === rt ? B.call(N, fe ? "html" : "body")[0] : fe ? N.documentElement : se;
  }, Qi = function(w) {
    const N = O ? O(w) : w.ownerDocument;
    return ae.call(N || w, w, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION, null);
  }, Hn = function(w) {
    return w = fn(w, W, " "), w = fn(w, le, " "), w = fn(w, ce, " "), w;
  }, br = function(w) {
    var N;
    w.normalize();
    const J = O ? O(w) : w.ownerDocument, ee = ae.call(J || w, w, d.SHOW_TEXT | d.SHOW_COMMENT | d.SHOW_CDATA_SECTION | d.SHOW_PROCESSING_INSTRUCTION, null);
    let se = ee.nextNode();
    for (; se; )
      se.data = Hn(se.data), se = ee.nextNode();
    const de = (N = w.querySelectorAll) === null || N === void 0 ? void 0 : N.call(w, "template");
    de && Bt(de, (he) => {
      Pt(he.content) && br(he.content);
    });
  }, Yn = function(w) {
    const N = k ? k(w) : null;
    return typeof N != "string" || ye(N) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || w.attributes !== v(w) || typeof w.removeAttribute != "function" || typeof w.removeAttributeNode != "function" || typeof w.getAttributeNode != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || w.nodeType !== y(w) || w.childNodes !== m(w);
  }, Pt = function(w) {
    if (!y || typeof w != "object" || w === null) return !1;
    try {
      return y(w) === Ye.documentFragment;
    } catch {
      return !1;
    }
  }, ln = function(w) {
    if (!y || typeof w != "object" || w === null) return !1;
    try {
      return typeof y(w) == "number";
    } catch {
      return !1;
    }
  };
  function it(q, w, N) {
    q.length !== 0 && Bt(q, (J) => {
      J.call(n, w, N, Mt);
    });
  }
  const fs = function(w, N) {
    return !!(Ae && w.hasChildNodes() && !ln(w.firstElementChild) && ze(qi, w.textContent) && ze(qi, w.innerHTML) || Ae && w.namespaceURI === rt && qs[N] && (ln(w.firstElementChild) || typeof w.textContent == "string" && ze($s[N], w.textContent)) || w.nodeType === Ye.processingInstruction || Ae && w.nodeType === Ye.comment && ze($i, w.data));
  }, Gn = function(w, N) {
    if (w instanceof RegExp) return ze(w, N);
    if (w instanceof Function) {
      for (var J = arguments.length, ee = new Array(J > 2 ? J - 2 : 0), se = 2; se < J; se++) ee[se - 2] = arguments[se];
      return !!w(N, ...ee);
    }
    return !1;
  }, ds = function(w, N, J) {
    if (!T[N] && Ni(N) && Gn(I.tagNameCheck, N)) return !1;
    if (an && !qe[N]) {
      const ee = u(w), se = m(w);
      if (se && ee) {
        const de = se.length;
        for (let he = de - 1; he >= 0; --he) {
          const ve = w === J ? _(se[he], !0) : se[he];
          ee.insertBefore(ve, p(w));
        }
      }
    }
    return gt(w), !0;
  }, Di = function(w, N, J, ee) {
    return w.length === 0 ? N : N === J || N === ee ? Ze(N) : N;
  }, Ut = function(w, N) {
    return w === N || u(w) !== null ? !1 : (on && Un(w), !0);
  }, Ti = function(w, N) {
    if (it(H.beforeSanitizeElements, w, null), Ut(w, N)) return !0;
    if (Yn(w))
      return gt(w), !0;
    const J = ye(F(w));
    if (c = Di(H.uponSanitizeElement, c, Y, nt), it(H.uponSanitizeElement, w, {
      tagName: J,
      allowedTags: c
    }), Ut(w, N)) return !0;
    if (fs(w, J))
      return gt(w), !0;
    if (T[J] || !(j.tagCheck instanceof Function && j.tagCheck(J)) && !c[J]) {
      const ee = ds(w, J, N);
      return ee === !1 && (it(H.afterSanitizeElements, w, null), Ut(w, N)) ? !0 : ee;
    }
    if (S(w) === Ye.element && !ss(w) || (J === "noscript" || J === "noembed" || J === "noframes") && ze(Ks, w.innerHTML))
      return gt(w), !0;
    if (ne && w.nodeType === Ye.text) {
      const ee = Hn(w.textContent);
      w.textContent !== ee && (cn(n.removed, { element: w.cloneNode() }), w.textContent = ee);
    }
    return it(H.afterSanitizeElements, w, null), Ut(w, N);
  }, Ri = function(w, N, J) {
    if (Z[N] || ki(N, w) || Je && (N === "id" || N === "name") && (J in t || J in rs)) return !1;
    const ee = L[N] || j.attributeCheck instanceof Function && j.attributeCheck(N, w);
    return X && ze(oe, N) || M && ze(ue, N) ? !0 : ee ? Ci[N] || ze(Re, fn(J, ge, "")) || (N === "src" || N === "xlink:href" || N === "href") && w !== "script" && Hi(J, "data:") === 0 && _i[w] || te && !ze(Ee, fn(J, ge, "")) ? !0 : !J : Ni(w) && Gn(I.tagNameCheck, w) && Gn(I.attributeNameCheck, N, w) || N === "is" && I.allowCustomizedBuiltInElements && Gn(I.tagNameCheck, J);
  }, us = pe({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Ni = function(w) {
    return !us[gn(w)] && ze(ke, w);
  }, As = function(w, N, J, ee) {
    if (D && typeof A == "object" && typeof A.getAttributeType == "function" && !J) switch (A.getAttributeType(w, N)) {
      case "TrustedHTML":
        return U(ee);
      case "TrustedScriptURL":
        return re(ee);
    }
    return ee;
  }, hs = function(w, N, J, ee) {
    try {
      return J ? w.setAttributeNS(J, N, ee) : w.setAttribute(N, ee), Yn(w) ? (gt(w), !1) : !0;
    } catch {
      return yt(N, w), !1;
    }
  }, zi = function(w, N) {
    if (it(H.beforeSanitizeAttributes, w, null), Ut(w, N)) return;
    const J = w.attributes;
    if (!J || Yn(w)) return;
    L = Di(H.uponSanitizeAttribute, L, x, Le);
    const ee = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: L,
      forceKeepAttr: void 0
    };
    let se = J.length;
    const de = ye(w.nodeName);
    for (; se--; ) {
      const he = J[se], ve = he.name, $e = he.namespaceURI, He = he.value, Ht = ye(ve), wr = He;
      let Oe = ve === "value" ? wr : Qs(wr), Li = !1;
      if (ee.attrName = Ht, ee.attrValue = Oe, ee.keepAttr = !0, ee.forceKeepAttr = void 0, it(H.uponSanitizeAttribute, w, ee), Oe = ee.attrValue, rn && (Ht === "id" || Ht === "name") && Hi(Oe, On) !== 0 && (yt(ve, w, he), Oe = On + Oe, Li = !0), Ae && ze(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Oe)) {
        yt(ve, w, he);
        continue;
      }
      if (Ht === "attributename" && Ui(Oe, "href")) {
        yt(ve, w, he);
        continue;
      }
      if (!ee.forceKeepAttr) {
        if (!ee.keepAttr) {
          yt(ve, w, he);
          continue;
        }
        if (!V && ze(Js, Oe)) {
          yt(ve, w, he);
          continue;
        }
        if (ne && (Oe = Hn(Oe)), !Ri(de, Ht, Oe)) {
          yt(ve, w, he);
          continue;
        }
        Oe = As(de, Ht, $e, Oe), Oe !== wr && hs(w, ve, $e, Oe) && Li && Pi(n.removed);
      }
    }
    it(H.afterSanitizeAttributes, w, null), Ut(w, N);
  }, jn = function(w) {
    let N = null;
    const J = Qi(w);
    for (it(H.beforeSanitizeShadowDOM, w, null); N = J.nextNode(); )
      if (it(H.uponSanitizeShadowNode, N, null), Ti(N, w), zi(N, w), Pt(N.content) && jn(N.content), S(N) === Ye.element) {
        const ee = C(N);
        Pt(ee) && (Cr(ee), jn(ee));
      }
    it(H.afterSanitizeShadowDOM, w, null);
  }, Cr = function(w) {
    const N = [{
      node: w,
      shadow: null
    }];
    for (; N.length > 0; ) {
      const J = N.pop();
      if (J.shadow) {
        jn(J.shadow);
        continue;
      }
      const ee = J.node, se = S(ee) === Ye.element, de = m(ee);
      if (de) for (let he = de.length - 1; he >= 0; --he) N.push({
        node: de[he],
        shadow: null
      });
      if (se) {
        const he = k ? k(ee) : null;
        if (typeof he == "string" && ye(he) === "template") {
          const ve = ee.content;
          Pt(ve) && N.push({
            node: ve,
            shadow: null
          });
        }
      }
      if (se) {
        const he = C(ee);
        Pt(he) && N.push({
          node: null,
          shadow: he
        }, {
          node: he,
          shadow: null
        });
      }
    }
  };
  return n.sanitize = function(q) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, N = null, J = null, ee = null, se = null;
    if (hr = !q, hr && (q = "<!-->"), typeof q != "string" && !ln(q) && (q = zs(q), typeof q != "string"))
      throw mt("dirty is not a string, aborting");
    if (!n.isSupported) return q;
    Ne ? (c = nt, L = Le) : _r(w), (H.uponSanitizeElement.length > 0 || H.uponSanitizeAttribute.length > 0) && (c = Ze(c)), H.uponSanitizeAttribute.length > 0 && (L = Ze(L)), n.removed = [];
    const de = on && typeof q != "string" && ln(q);
    if (de) {
      cs(q);
      const $e = F(q);
      if (typeof $e == "string") {
        const He = ye($e);
        if (!c[He] || T[He])
          throw Pn(q), mt("root node is forbidden and cannot be sanitized in-place");
      }
      if (Yn(q))
        throw Pn(q), mt("root node is clobbered and cannot be sanitized in-place");
      try {
        Cr(q);
      } catch (He) {
        throw Pn(q), He;
      }
    } else if (ln(q))
      N = Si("<!---->"), J = N.ownerDocument.importNode(q, !0), J.nodeType === Ye.element && J.nodeName === "BODY" || J.nodeName === "HTML" ? N = J : N.appendChild(J), Cr(N);
    else {
      if (!be && !ne && !fe && q.indexOf("<") === -1) return D && pt ? U(q) : q;
      if (N = Si(q), !N) return be ? null : pt ? Q : "";
    }
    N && ft && gt(N.firstChild);
    const he = de ? q : N;
    try {
      const $e = Qi(he);
      for (; ee = $e.nextNode(); )
        Ti(ee, he), zi(ee, he), Pt(ee.content) && jn(ee.content);
    } catch ($e) {
      throw de && (Pn(q), Bt(n.removed, (He) => {
        He.element && Un(He.element);
      })), $e;
    }
    if (de) {
      let $e = !1;
      if (Bt(n.removed, (He) => {
        He.element && (He.element === q && ($e = !0), Un(He.element));
      }), $e) throw mt("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return ne && br(q), q;
    }
    if (be) {
      if (ne && br(N), dt)
        for (se = P.call(N.ownerDocument); N.firstChild; ) se.appendChild(N.firstChild);
      else se = N;
      return (L.shadowroot || L.shadowrootmode) && (se = $.call(r, se, !0)), se;
    }
    let ve = fe ? N.outerHTML : N.innerHTML;
    return fe && c["!doctype"] && N.ownerDocument && N.ownerDocument.doctype && N.ownerDocument.doctype.name && ze(Zs, N.ownerDocument.doctype.name) && (ve = "<!DOCTYPE " + N.ownerDocument.doctype.name + `>
` + ve), ne && (ve = Hn(ve)), D && pt ? U(ve) : ve;
  }, n.setConfig = function() {
    let q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _r(q), Ne = !0, nt = c, Le = L;
  }, n.clearConfig = function() {
    Mt = null, Ne = !1, nt = null, Le = null, D = R, Q = "";
  }, n.isValidAttribute = function(q, w, N) {
    Mt || _r({});
    const J = ye(q), ee = ye(w);
    return Ri(J, ee, N);
  }, n.addHook = function(q, w) {
    typeof w == "function" && Pe(H, q) && cn(H[q], w);
  }, n.removeHook = function(q, w) {
    if (Pe(H, q)) {
      if (w !== void 0) {
        const N = ks(H[q], w);
        return N === -1 ? void 0 : Ss(H[q], N, 1)[0];
      }
      return Pi(H[q]);
    }
  }, n.removeHooks = function(q) {
    Pe(H, q) && (H[q] = []);
  }, n.removeAllHooks = function() {
    H = Xi();
  }, n;
}
ao();
/*
 * @license
 * docx-preview <https://github.com/VolodymyrBaydalka/docxjs>
 * Released under Apache License 2.0  <https://github.com/VolodymyrBaydalka/docxjs/blob/master/LICENSE>
 * Copyright Volodymyr Baydalka
 */
var Wt;
(function(e) {
  e.OfficeDocument = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", e.FontTable = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable", e.Image = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", e.Numbering = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering", e.Styles = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", e.StylesWithEffects = "http://schemas.microsoft.com/office/2007/relationships/stylesWithEffects", e.Theme = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme", e.Settings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings", e.WebSettings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings", e.Hyperlink = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", e.Footnotes = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes", e.Endnotes = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes", e.Footer = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer", e.Header = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header", e.ExtendedProperties = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", e.CoreProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", e.CustomProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/custom-properties", e.Comments = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments", e.CommentsExtended = "http://schemas.microsoft.com/office/2011/relationships/commentsExtended", e.AltChunk = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/aFChunk";
})(Wt || (Wt = {}));
var Vi;
(function(e) {
  e.Continuous = "continuous", e.NextPage = "nextPage", e.NextColumn = "nextColumn", e.EvenPage = "evenPage", e.OddPage = "oddPage";
})(Vi || (Vi = {}));
var Ce;
(function(e) {
  e.Document = "document", e.Paragraph = "paragraph", e.Run = "run", e.Break = "break", e.NoBreakHyphen = "noBreakHyphen", e.Table = "table", e.Row = "row", e.Cell = "cell", e.Hyperlink = "hyperlink", e.SmartTag = "smartTag", e.Drawing = "drawing", e.Image = "image", e.Text = "text", e.Tab = "tab", e.Symbol = "symbol", e.BookmarkStart = "bookmarkStart", e.BookmarkEnd = "bookmarkEnd", e.Footer = "footer", e.Header = "header", e.FootnoteReference = "footnoteReference", e.EndnoteReference = "endnoteReference", e.Footnote = "footnote", e.Endnote = "endnote", e.SimpleField = "simpleField", e.ComplexField = "complexField", e.Instruction = "instruction", e.VmlPicture = "vmlPicture", e.MmlMath = "mmlMath", e.MmlMathParagraph = "mmlMathParagraph", e.MmlFraction = "mmlFraction", e.MmlFunction = "mmlFunction", e.MmlFunctionName = "mmlFunctionName", e.MmlNumerator = "mmlNumerator", e.MmlDenominator = "mmlDenominator", e.MmlRadical = "mmlRadical", e.MmlBase = "mmlBase", e.MmlDegree = "mmlDegree", e.MmlSuperscript = "mmlSuperscript", e.MmlSubscript = "mmlSubscript", e.MmlPreSubSuper = "mmlPreSubSuper", e.MmlSubArgument = "mmlSubArgument", e.MmlSuperArgument = "mmlSuperArgument", e.MmlNary = "mmlNary", e.MmlDelimiter = "mmlDelimiter", e.MmlRun = "mmlRun", e.MmlEquationArray = "mmlEquationArray", e.MmlLimit = "mmlLimit", e.MmlLimitLower = "mmlLimitLower", e.MmlMatrix = "mmlMatrix", e.MmlMatrixRow = "mmlMatrixRow", e.MmlBox = "mmlBox", e.MmlBar = "mmlBar", e.MmlGroupChar = "mmlGroupChar", e.VmlElement = "vmlElement", e.Inserted = "inserted", e.Deleted = "deleted", e.DeletedText = "deletedText", e.Comment = "comment", e.CommentReference = "commentReference", e.CommentRangeStart = "commentRangeStart", e.CommentRangeEnd = "commentRangeEnd", e.AltChunk = "altChunk";
})(Ce || (Ce = {}));
Wt.OfficeDocument, Wt.ExtendedProperties, Wt.CoreProperties, Wt.CustomProperties;
Ce.MmlMath, Ce.MmlMathParagraph, Ce.MmlFraction, Ce.MmlFunction, Ce.MmlFunctionName, Ce.MmlNumerator, Ce.MmlDenominator, Ce.MmlRadical, Ce.MmlDegree, Ce.MmlBase, Ce.MmlSuperscript, Ce.MmlSubscript, Ce.MmlPreSubSuper, Ce.MmlSuperArgument, Ce.MmlSubArgument, Ce.MmlDelimiter, Ce.MmlNary, Ce.MmlEquationArray, Ce.MmlLimit, Ce.MmlLimitLower, Ce.MmlMatrix, Ce.MmlMatrixRow, Ce.MmlBox, Ce.MmlBar, Ce.MmlGroupChar;
/*! pako 2.2.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
const el = 4, ea = 0, ta = 1, tl = 2;
function en(e) {
  let n = e.length;
  for (; --n >= 0; )
    e[n] = 0;
}
const nl = 0, oo = 1, rl = 2, il = 3, al = 258, li = 29, Dn = 256, En = Dn + 1 + li, qt = 30, ci = 19, so = 2 * En + 1, kt = 15, kr = 16, ol = 7, fi = 256, lo = 16, co = 17, fo = 18, $r = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), ir = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), sl = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), uo = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), ll = 512, ht = new Array((En + 2) * 2);
en(ht);
const bn = new Array(qt * 2);
en(bn);
const In = new Array(ll);
en(In);
const vn = new Array(al - il + 1);
en(vn);
const di = new Array(li);
en(di);
const ar = new Array(qt);
en(ar);
function Sr(e, n, t, r, a) {
  this.static_tree = e, this.extra_bits = n, this.extra_base = t, this.elems = r, this.max_length = a, this.has_stree = e && e.length;
}
let Ao, ho, po;
function Qr(e, n) {
  this.dyn_tree = e, this.max_code = 0, this.stat_desc = n;
}
const go = (e) => e < 256 ? In[e] : In[256 + (e >>> 7)], yn = (e, n) => {
  e.pending_buf[e.pending++] = n & 255, e.pending_buf[e.pending++] = n >>> 8 & 255;
}, Ue = (e, n, t) => {
  e.bi_valid > kr - t ? (e.bi_buf |= n << e.bi_valid & 65535, yn(e, e.bi_buf), e.bi_buf = n >> kr - e.bi_valid, e.bi_valid += t - kr) : (e.bi_buf |= n << e.bi_valid & 65535, e.bi_valid += t);
}, st = (e, n, t) => {
  Ue(
    e,
    t[n * 2],
    t[n * 2 + 1]
    /*.Len*/
  );
}, mo = (e, n) => {
  let t = 0;
  do
    t |= e & 1, e >>>= 1, t <<= 1;
  while (--n > 0);
  return t >>> 1;
}, cl = (e) => {
  e.bi_valid === 16 ? (yn(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = e.bi_buf & 255, e.bi_buf >>= 8, e.bi_valid -= 8);
}, fl = (e, n) => {
  const t = n.dyn_tree, r = n.max_code, a = n.stat_desc.static_tree, i = n.stat_desc.has_stree, s = n.stat_desc.extra_bits, o = n.stat_desc.extra_base, d = n.stat_desc.max_length;
  let l, A, b, _, f, g, p = 0;
  for (_ = 0; _ <= kt; _++)
    e.bl_count[_] = 0;
  for (t[e.heap[e.heap_max] * 2 + 1] = 0, l = e.heap_max + 1; l < so; l++)
    A = e.heap[l], _ = t[t[A * 2 + 1] * 2 + 1] + 1, _ > d && (_ = d, p++), t[A * 2 + 1] = _, !(A > r) && (e.bl_count[_]++, f = 0, A >= o && (f = s[A - o]), g = t[A * 2], e.opt_len += g * (_ + f), i && (e.static_len += g * (a[A * 2 + 1] + f)));
  if (p !== 0) {
    do {
      for (_ = d - 1; e.bl_count[_] === 0; )
        _--;
      e.bl_count[_]--, e.bl_count[_ + 1] += 2, e.bl_count[d]--, p -= 2;
    } while (p > 0);
    for (_ = d; _ !== 0; _--)
      for (A = e.bl_count[_]; A !== 0; )
        b = e.heap[--l], !(b > r) && (t[b * 2 + 1] !== _ && (e.opt_len += (_ - t[b * 2 + 1]) * t[b * 2], t[b * 2 + 1] = _), A--);
  }
}, _o = (e, n, t) => {
  const r = new Array(kt + 1);
  let a = 0, i, s;
  for (i = 1; i <= kt; i++)
    a = a + t[i - 1] << 1, r[i] = a;
  for (s = 0; s <= n; s++) {
    let o = e[s * 2 + 1];
    o !== 0 && (e[s * 2] = mo(r[o]++, o));
  }
}, dl = () => {
  let e, n, t, r, a;
  const i = new Array(kt + 1);
  for (t = 0, r = 0; r < li - 1; r++)
    for (di[r] = t, e = 0; e < 1 << $r[r]; e++)
      vn[t++] = r;
  for (vn[t - 1] = r, a = 0, r = 0; r < 16; r++)
    for (ar[r] = a, e = 0; e < 1 << ir[r]; e++)
      In[a++] = r;
  for (a >>= 7; r < qt; r++)
    for (ar[r] = a << 7, e = 0; e < 1 << ir[r] - 7; e++)
      In[256 + a++] = r;
  for (n = 0; n <= kt; n++)
    i[n] = 0;
  for (e = 0; e <= 143; )
    ht[e * 2 + 1] = 8, e++, i[8]++;
  for (; e <= 255; )
    ht[e * 2 + 1] = 9, e++, i[9]++;
  for (; e <= 279; )
    ht[e * 2 + 1] = 7, e++, i[7]++;
  for (; e <= 287; )
    ht[e * 2 + 1] = 8, e++, i[8]++;
  for (_o(ht, En + 1, i), e = 0; e < qt; e++)
    bn[e * 2 + 1] = 5, bn[e * 2] = mo(e, 5);
  Ao = new Sr(ht, $r, Dn + 1, En, kt), ho = new Sr(bn, ir, 0, qt, kt), po = new Sr(new Array(0), sl, 0, ci, ol);
}, bo = (e) => {
  let n;
  for (n = 0; n < En; n++)
    e.dyn_ltree[n * 2] = 0;
  for (n = 0; n < qt; n++)
    e.dyn_dtree[n * 2] = 0;
  for (n = 0; n < ci; n++)
    e.bl_tree[n * 2] = 0;
  e.dyn_ltree[fi * 2] = 1, e.opt_len = e.static_len = 0, e.sym_next = e.matches = 0;
}, Co = (e) => {
  e.bi_valid > 8 ? yn(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
}, na = (e, n, t, r) => {
  const a = n * 2, i = t * 2;
  return e[a] < e[i] || e[a] === e[i] && r[n] <= r[t];
}, Dr = (e, n, t) => {
  const r = e.heap[t];
  let a = t << 1;
  for (; a <= e.heap_len && (a < e.heap_len && na(n, e.heap[a + 1], e.heap[a], e.depth) && a++, !na(n, r, e.heap[a], e.depth)); )
    e.heap[t] = e.heap[a], t = a, a <<= 1;
  e.heap[t] = r;
}, ra = (e, n, t) => {
  let r, a, i = 0, s, o;
  if (e.sym_next !== 0)
    do
      r = e.pending_buf[e.sym_buf + i++] & 255, r += (e.pending_buf[e.sym_buf + i++] & 255) << 8, a = e.pending_buf[e.sym_buf + i++], r === 0 ? st(e, a, n) : (s = vn[a], st(e, s + Dn + 1, n), o = $r[s], o !== 0 && (a -= di[s], Ue(e, a, o)), r--, s = go(r), st(e, s, t), o = ir[s], o !== 0 && (r -= ar[s], Ue(e, r, o)));
    while (i < e.sym_next);
  st(e, fi, n);
}, Xr = (e, n) => {
  const t = n.dyn_tree, r = n.stat_desc.static_tree, a = n.stat_desc.has_stree, i = n.stat_desc.elems;
  let s, o, d = -1, l;
  for (e.heap_len = 0, e.heap_max = so, s = 0; s < i; s++)
    t[s * 2] !== 0 ? (e.heap[++e.heap_len] = d = s, e.depth[s] = 0) : t[s * 2 + 1] = 0;
  for (; e.heap_len < 2; )
    l = e.heap[++e.heap_len] = d < 2 ? ++d : 0, t[l * 2] = 1, e.depth[l] = 0, e.opt_len--, a && (e.static_len -= r[l * 2 + 1]);
  for (n.max_code = d, s = e.heap_len >> 1; s >= 1; s--)
    Dr(e, t, s);
  l = i;
  do
    s = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[
      1
      /*SMALLEST*/
    ] = e.heap[e.heap_len--], Dr(
      e,
      t,
      1
      /*SMALLEST*/
    ), o = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[--e.heap_max] = s, e.heap[--e.heap_max] = o, t[l * 2] = t[s * 2] + t[o * 2], e.depth[l] = (e.depth[s] >= e.depth[o] ? e.depth[s] : e.depth[o]) + 1, t[s * 2 + 1] = t[o * 2 + 1] = l, e.heap[
      1
      /*SMALLEST*/
    ] = l++, Dr(
      e,
      t,
      1
      /*SMALLEST*/
    );
  while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[
    1
    /*SMALLEST*/
  ], fl(e, n), _o(t, d, e.bl_count);
}, ia = (e, n, t) => {
  let r, a = -1, i, s = n[0 * 2 + 1], o = 0, d = 7, l = 4;
  for (s === 0 && (d = 138, l = 3), n[(t + 1) * 2 + 1] = 65535, r = 0; r <= t; r++)
    i = s, s = n[(r + 1) * 2 + 1], !(++o < d && i === s) && (o < l ? e.bl_tree[i * 2] += o : i !== 0 ? (i !== a && e.bl_tree[i * 2]++, e.bl_tree[lo * 2]++) : o <= 10 ? e.bl_tree[co * 2]++ : e.bl_tree[fo * 2]++, o = 0, a = i, s === 0 ? (d = 138, l = 3) : i === s ? (d = 6, l = 3) : (d = 7, l = 4));
}, aa = (e, n, t) => {
  let r, a = -1, i, s = n[0 * 2 + 1], o = 0, d = 7, l = 4;
  for (s === 0 && (d = 138, l = 3), r = 0; r <= t; r++)
    if (i = s, s = n[(r + 1) * 2 + 1], !(++o < d && i === s)) {
      if (o < l)
        do
          st(e, i, e.bl_tree);
        while (--o !== 0);
      else i !== 0 ? (i !== a && (st(e, i, e.bl_tree), o--), st(e, lo, e.bl_tree), Ue(e, o - 3, 2)) : o <= 10 ? (st(e, co, e.bl_tree), Ue(e, o - 3, 3)) : (st(e, fo, e.bl_tree), Ue(e, o - 11, 7));
      o = 0, a = i, s === 0 ? (d = 138, l = 3) : i === s ? (d = 6, l = 3) : (d = 7, l = 4);
    }
}, ul = (e) => {
  let n;
  for (ia(e, e.dyn_ltree, e.l_desc.max_code), ia(e, e.dyn_dtree, e.d_desc.max_code), Xr(e, e.bl_desc), n = ci - 1; n >= 3 && e.bl_tree[uo[n] * 2 + 1] === 0; n--)
    ;
  return e.opt_len += 3 * (n + 1) + 5 + 5 + 4, n;
}, Al = (e, n, t, r) => {
  let a;
  for (Ue(e, n - 257, 5), Ue(e, t - 1, 5), Ue(e, r - 4, 4), a = 0; a < r; a++)
    Ue(e, e.bl_tree[uo[a] * 2 + 1], 3);
  aa(e, e.dyn_ltree, n - 1), aa(e, e.dyn_dtree, t - 1);
}, hl = (e) => {
  let n = 4093624447, t;
  for (t = 0; t <= 31; t++, n >>>= 1)
    if (n & 1 && e.dyn_ltree[t * 2] !== 0)
      return ea;
  if (e.dyn_ltree[9 * 2] !== 0 || e.dyn_ltree[10 * 2] !== 0 || e.dyn_ltree[13 * 2] !== 0)
    return ta;
  for (t = 32; t < Dn; t++)
    if (e.dyn_ltree[t * 2] !== 0)
      return ta;
  return ea;
};
let oa = !1;
const pl = (e) => {
  oa || (dl(), oa = !0), e.l_desc = new Qr(e.dyn_ltree, Ao), e.d_desc = new Qr(e.dyn_dtree, ho), e.bl_desc = new Qr(e.bl_tree, po), e.bi_buf = 0, e.bi_valid = 0, bo(e);
}, wo = (e, n, t, r) => {
  Ue(e, (nl << 1) + (r ? 1 : 0), 3), Co(e), yn(e, t), yn(e, ~t), t && e.pending_buf.set(e.window.subarray(n, n + t), e.pending), e.pending += t;
}, gl = (e) => {
  Ue(e, oo << 1, 3), st(e, fi, ht), cl(e);
}, ml = (e, n, t, r) => {
  let a, i, s = 0;
  e.level > 0 ? (e.strm.data_type === tl && (e.strm.data_type = hl(e)), Xr(e, e.l_desc), Xr(e, e.d_desc), s = ul(e), a = e.opt_len + 3 + 7 >>> 3, i = e.static_len + 3 + 7 >>> 3, i <= a && (a = i)) : a = i = t + 5, t + 4 <= a && n !== -1 ? wo(e, n, t, r) : e.strategy === el || i === a ? (Ue(e, (oo << 1) + (r ? 1 : 0), 3), ra(e, ht, bn)) : (Ue(e, (rl << 1) + (r ? 1 : 0), 3), Al(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, s + 1), ra(e, e.dyn_ltree, e.dyn_dtree)), bo(e), r && Co(e);
}, _l = (e, n, t) => (e.pending_buf[e.sym_buf + e.sym_next++] = n, e.pending_buf[e.sym_buf + e.sym_next++] = n >> 8, e.pending_buf[e.sym_buf + e.sym_next++] = t, n === 0 ? e.dyn_ltree[t * 2]++ : (e.matches++, n--, e.dyn_ltree[(vn[t] + Dn + 1) * 2]++, e.dyn_dtree[go(n) * 2]++), e.sym_next === e.sym_end);
var bl = pl, Cl = wo, wl = ml, El = _l, Il = gl, vl = {
  _tr_init: bl,
  _tr_stored_block: Cl,
  _tr_flush_block: wl,
  _tr_tally: El,
  _tr_align: Il
};
const yl = (e, n, t, r) => {
  let a = e & 65535 | 0, i = e >>> 16 & 65535 | 0, s = 0;
  for (; t !== 0; ) {
    s = t > 2e3 ? 2e3 : t, t -= s;
    do
      a = a + n[r++] | 0, i = i + a | 0;
    while (--s);
    a %= 65521, i %= 65521;
  }
  return a | i << 16 | 0;
};
var xn = yl;
const xl = () => {
  let e, n = [];
  for (var t = 0; t < 256; t++) {
    e = t;
    for (var r = 0; r < 8; r++)
      e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
    n[t] = e;
  }
  return n;
}, Bl = new Uint32Array(xl()), kl = (e, n, t, r) => {
  const a = Bl, i = r + t;
  e ^= -1;
  for (let s = r; s < i; s++)
    e = e >>> 8 ^ a[(e ^ n[s]) & 255];
  return e ^ -1;
};
var Se = kl, Tt = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, Tn = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,
  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
const { _tr_init: Sl, _tr_stored_block: Vr, _tr_flush_block: Ql, _tr_tally: wt, _tr_align: Dl } = vl, {
  Z_NO_FLUSH: Et,
  Z_PARTIAL_FLUSH: Tl,
  Z_FULL_FLUSH: Rl,
  Z_FINISH: Ve,
  Z_BLOCK: sa,
  Z_OK: Te,
  Z_STREAM_END: la,
  Z_STREAM_ERROR: lt,
  Z_DATA_ERROR: Nl,
  Z_BUF_ERROR: Tr,
  Z_DEFAULT_COMPRESSION: zl,
  Z_FILTERED: Ll,
  Z_HUFFMAN_ONLY: Jn,
  Z_RLE: Ol,
  Z_FIXED: Fl,
  Z_DEFAULT_STRATEGY: Ml,
  Z_UNKNOWN: Pl,
  Z_DEFLATED: cr
} = Tn, Ul = 9, Hl = 15, Yl = 8, Gl = 29, jl = 256, ei = jl + 1 + Gl, Zl = 30, Wl = 19, Kl = 2 * ei + 1, Jl = 15, me = 3, Ct = 258, ct = Ct + me + 1, ql = 32, Xt = 42, ui = 57, ti = 69, ni = 73, ri = 91, ii = 103, St = 113, mn = 666, Fe = 1, tn = 2, Rt = 3, nn = 4, $l = 3, Qt = (e, n) => (e.msg = Tt[n], n), ca = (e) => e * 2 - (e > 4 ? 9 : 0), bt = (e) => {
  let n = e.length;
  for (; --n >= 0; )
    e[n] = 0;
}, Xl = (e) => {
  let n, t, r, a = e.w_size;
  n = e.hash_size, r = n;
  do
    t = e.head[--r], e.head[r] = t >= a ? t - a : 0;
  while (--n);
  n = a, r = n;
  do
    t = e.prev[--r], e.prev[r] = t >= a ? t - a : 0;
  while (--n);
};
let Ai = (e, n, t) => (n << e.hash_shift ^ t) & e.hash_mask;
const Nt = (e, n) => {
  let t;
  if (e.legacy_hash)
    t = e.ins_h = Ai(e, e.ins_h, e.window[n + me - 1]);
  else {
    const a = e.window, i = a[n] | a[n + 1] << 8 | a[n + 2] << 16 | a[n + 3] << 24;
    t = e.ins_h = Math.imul(i, 66521) + 66521 >>> 16 & e.hash_mask;
  }
  const r = e.prev[n & e.w_mask] = e.head[t];
  return e.head[t] = n, r;
}, We = (e) => {
  const n = e.state;
  let t = n.pending;
  t > e.avail_out && (t = e.avail_out), t !== 0 && (e.output.set(n.pending_buf.subarray(n.pending_out, n.pending_out + t), e.next_out), e.next_out += t, n.pending_out += t, e.total_out += t, e.avail_out -= t, n.pending -= t, n.pending === 0 && (n.pending_out = 0));
}, Ke = (e, n) => {
  Ql(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, n), e.block_start = e.strstart, We(e.strm);
}, _e = (e, n) => {
  e.pending_buf[e.pending++] = n;
}, un = (e, n) => {
  e.pending_buf[e.pending++] = n >>> 8 & 255, e.pending_buf[e.pending++] = n & 255;
}, ai = (e, n, t, r) => {
  let a = e.avail_in;
  return a > r && (a = r), a === 0 ? 0 : (e.avail_in -= a, n.set(e.input.subarray(e.next_in, e.next_in + a), t), e.state.wrap === 1 ? e.adler = xn(e.adler, n, a, t) : e.state.wrap === 2 && (e.adler = Se(e.adler, n, a, t)), e.next_in += a, e.total_in += a, a);
}, Eo = (e, n) => {
  let t = e.max_chain_length, r = e.strstart, a, i, s = e.prev_length, o = e.nice_match;
  const d = e.strstart > e.w_size - ct ? e.strstart - (e.w_size - ct) : 0, l = e.window, A = e.w_mask, b = e.prev, _ = e.strstart + Ct;
  let f = l[r + s - 1], g = l[r + s];
  e.prev_length >= e.good_match && (t >>= 2), o > e.lookahead && (o = e.lookahead);
  do
    if (a = n, !(l[a + s] !== g || l[a + s - 1] !== f || l[a] !== l[r] || l[++a] !== l[r + 1])) {
      r += 2, a++;
      do
        ;
      while (l[++r] === l[++a] && l[++r] === l[++a] && l[++r] === l[++a] && l[++r] === l[++a] && l[++r] === l[++a] && l[++r] === l[++a] && l[++r] === l[++a] && l[++r] === l[++a] && r < _);
      if (i = Ct - (_ - r), r = _ - Ct, i > s) {
        if (e.match_start = n, s = i, i >= o)
          break;
        f = l[r + s - 1], g = l[r + s];
      }
    }
  while ((n = b[n & A]) > d && --t !== 0);
  return s <= e.lookahead ? s : e.lookahead;
}, Vt = (e) => {
  const n = e.w_size;
  let t, r, a;
  do {
    if (r = e.window_size - e.lookahead - e.strstart, e.strstart >= n + (n - ct) && (e.window.set(e.window.subarray(n, n + n - r), 0), e.match_start -= n, e.strstart -= n, e.block_start -= n, e.insert > e.strstart && (e.insert = e.strstart), Xl(e), r += n), e.strm.avail_in === 0)
      break;
    if (t = ai(e.strm, e.window, e.strstart + e.lookahead, r), e.lookahead += t, e.legacy_hash) {
      if (e.lookahead + e.insert >= me)
        for (a = e.strstart - e.insert, e.ins_h = e.window[a], e.ins_h = Ai(e, e.ins_h, e.window[a + 1]); e.insert && (Nt(e, a), a++, e.insert--, !(e.lookahead + e.insert < me)); )
          ;
    } else if (e.lookahead + e.insert > me)
      for (a = e.strstart - e.insert; e.insert && (Nt(e, a), a++, e.insert--, !(e.lookahead + e.insert <= me)); )
        ;
  } while (e.lookahead < ct && e.strm.avail_in !== 0);
}, Io = (e, n) => {
  let t = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5, r, a, i, s = 0, o = e.strm.avail_in;
  do {
    if (r = 65535, i = e.bi_valid + 42 >> 3, e.strm.avail_out < i || (i = e.strm.avail_out - i, a = e.strstart - e.block_start, r > a + e.strm.avail_in && (r = a + e.strm.avail_in), r > i && (r = i), r < t && (r === 0 && n !== Ve || n === Et || r !== a + e.strm.avail_in)))
      break;
    s = n === Ve && r === a + e.strm.avail_in ? 1 : 0, Vr(e, 0, 0, s), e.pending_buf[e.pending - 4] = r, e.pending_buf[e.pending - 3] = r >> 8, e.pending_buf[e.pending - 2] = ~r, e.pending_buf[e.pending - 1] = ~r >> 8, We(e.strm), a && (a > r && (a = r), e.strm.output.set(e.window.subarray(e.block_start, e.block_start + a), e.strm.next_out), e.strm.next_out += a, e.strm.avail_out -= a, e.strm.total_out += a, e.block_start += a, r -= a), r && (ai(e.strm, e.strm.output, e.strm.next_out, r), e.strm.next_out += r, e.strm.avail_out -= r, e.strm.total_out += r);
  } while (s === 0);
  return o -= e.strm.avail_in, o && (o >= e.w_size ? (e.matches = 2, e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0), e.strstart = e.w_size, e.insert = e.strstart) : (e.window_size - e.strstart <= o && (e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, e.insert > e.strstart && (e.insert = e.strstart)), e.window.set(e.strm.input.subarray(e.strm.next_in - o, e.strm.next_in), e.strstart), e.strstart += o, e.insert += o > e.w_size - e.insert ? e.w_size - e.insert : o), e.block_start = e.strstart), e.high_water < e.strstart && (e.high_water = e.strstart), s ? nn : n !== Et && n !== Ve && e.strm.avail_in === 0 && e.strstart === e.block_start ? tn : (i = e.window_size - e.strstart, e.strm.avail_in > i && e.block_start >= e.w_size && (e.block_start -= e.w_size, e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, i += e.w_size, e.insert > e.strstart && (e.insert = e.strstart)), i > e.strm.avail_in && (i = e.strm.avail_in), i && (ai(e.strm, e.window, e.strstart, i), e.strstart += i, e.insert += i > e.w_size - e.insert ? e.w_size - e.insert : i), e.high_water < e.strstart && (e.high_water = e.strstart), i = e.bi_valid + 42 >> 3, i = e.pending_buf_size - i > 65535 ? 65535 : e.pending_buf_size - i, t = i > e.w_size ? e.w_size : i, a = e.strstart - e.block_start, (a >= t || (a || n === Ve) && n !== Et && e.strm.avail_in === 0 && a <= i) && (r = a > i ? i : a, s = n === Ve && e.strm.avail_in === 0 && r === a ? 1 : 0, Vr(e, e.block_start, r, s), e.block_start += r, We(e.strm)), s ? Rt : Fe);
}, Rr = (e, n) => {
  let t, r;
  for (; ; ) {
    if (e.lookahead < ct) {
      if (Vt(e), e.lookahead < ct && n === Et)
        return Fe;
      if (e.lookahead === 0)
        break;
    }
    if (t = 0, e.lookahead >= me && (t = Nt(e, e.strstart)), t !== 0 && e.strstart - t <= e.w_size - ct && (e.match_length = Eo(e, t)), e.match_length >= me)
      if (r = wt(e, e.strstart - e.match_start, e.match_length - me), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= me) {
        e.match_length--;
        do
          e.strstart++, t = Nt(e, e.strstart);
        while (--e.match_length !== 0);
        e.strstart++;
      } else
        e.strstart += e.match_length, e.match_length = 0, e.legacy_hash && (e.ins_h = e.window[e.strstart], e.ins_h = Ai(e, e.ins_h, e.window[e.strstart + 1]));
    else
      r = wt(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
    if (r && (Ke(e, !1), e.strm.avail_out === 0))
      return Fe;
  }
  return e.insert = e.strstart < me - 1 ? e.strstart : me - 1, n === Ve ? (Ke(e, !0), e.strm.avail_out === 0 ? Rt : nn) : e.sym_next && (Ke(e, !1), e.strm.avail_out === 0) ? Fe : tn;
}, Yt = (e, n) => {
  let t, r, a;
  for (; ; ) {
    if (e.lookahead < ct) {
      if (Vt(e), e.lookahead < ct && n === Et)
        return Fe;
      if (e.lookahead === 0)
        break;
    }
    if (t = 0, e.lookahead >= me && (t = Nt(e, e.strstart)), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = me - 1, t !== 0 && e.prev_length < e.max_lazy_match && e.strstart - t <= e.w_size - ct && (e.match_length = Eo(e, t), e.match_length <= 5 && (e.strategy === Ll || e.match_length === me && e.strstart - e.match_start > 4096) && (e.match_length = me - 1)), e.prev_length >= me && e.match_length <= e.prev_length) {
      a = e.strstart + e.lookahead - me, r = wt(e, e.strstart - 1 - e.prev_match, e.prev_length - me), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
      do
        ++e.strstart <= a && (t = Nt(e, e.strstart));
      while (--e.prev_length !== 0);
      if (e.match_available = 0, e.match_length = me - 1, e.strstart++, r && (Ke(e, !1), e.strm.avail_out === 0))
        return Fe;
    } else if (e.match_available) {
      if (r = wt(e, 0, e.window[e.strstart - 1]), r && Ke(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0)
        return Fe;
    } else
      e.match_available = 1, e.strstart++, e.lookahead--;
  }
  return e.match_available && (r = wt(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < me - 1 ? e.strstart : me - 1, n === Ve ? (Ke(e, !0), e.strm.avail_out === 0 ? Rt : nn) : e.sym_next && (Ke(e, !1), e.strm.avail_out === 0) ? Fe : tn;
}, Vl = (e, n) => {
  let t, r, a, i;
  const s = e.window;
  for (; ; ) {
    if (e.lookahead <= Ct) {
      if (Vt(e), e.lookahead <= Ct && n === Et)
        return Fe;
      if (e.lookahead === 0)
        break;
    }
    if (e.match_length = 0, e.lookahead >= me && e.strstart > 0 && (a = e.strstart - 1, r = s[a], r === s[++a] && r === s[++a] && r === s[++a])) {
      i = e.strstart + Ct;
      do
        ;
      while (r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && r === s[++a] && a < i);
      e.match_length = Ct - (i - a), e.match_length > e.lookahead && (e.match_length = e.lookahead);
    }
    if (e.match_length >= me ? (t = wt(e, 1, e.match_length - me), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (t = wt(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), t && (Ke(e, !1), e.strm.avail_out === 0))
      return Fe;
  }
  return e.insert = 0, n === Ve ? (Ke(e, !0), e.strm.avail_out === 0 ? Rt : nn) : e.sym_next && (Ke(e, !1), e.strm.avail_out === 0) ? Fe : tn;
}, ec = (e, n) => {
  let t;
  for (; ; ) {
    if (e.lookahead === 0 && (Vt(e), e.lookahead === 0)) {
      if (n === Et)
        return Fe;
      break;
    }
    if (e.match_length = 0, t = wt(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, t && (Ke(e, !1), e.strm.avail_out === 0))
      return Fe;
  }
  return e.insert = 0, n === Ve ? (Ke(e, !0), e.strm.avail_out === 0 ? Rt : nn) : e.sym_next && (Ke(e, !1), e.strm.avail_out === 0) ? Fe : tn;
};
function at(e, n, t, r, a) {
  this.good_length = e, this.max_lazy = n, this.nice_length = t, this.max_chain = r, this.func = a;
}
const _n = [
  /*      good lazy nice chain */
  new at(0, 0, 0, 0, Io),
  /* 0 store only */
  new at(4, 4, 8, 4, Rr),
  /* 1 max speed, no lazy matches */
  new at(4, 5, 16, 8, Rr),
  /* 2 */
  new at(4, 6, 32, 32, Rr),
  /* 3 */
  new at(4, 4, 16, 16, Yt),
  /* 4 lazy matches */
  new at(8, 16, 32, 32, Yt),
  /* 5 */
  new at(8, 16, 128, 128, Yt),
  /* 6 */
  new at(8, 32, 128, 256, Yt),
  /* 7 */
  new at(32, 128, 258, 1024, Yt),
  /* 8 */
  new at(32, 258, 258, 4096, Yt)
  /* 9 max compression */
], tc = (e) => {
  e.window_size = 2 * e.w_size, bt(e.head), e.max_lazy_match = _n[e.level].max_lazy, e.good_match = _n[e.level].good_length, e.nice_match = _n[e.level].nice_length, e.max_chain_length = _n[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = me - 1, e.match_available = 0, e.ins_h = 0;
};
function nc() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = cr, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.legacy_hash = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(Kl * 2), this.dyn_dtree = new Uint16Array((2 * Zl + 1) * 2), this.bl_tree = new Uint16Array((2 * Wl + 1) * 2), bt(this.dyn_ltree), bt(this.dyn_dtree), bt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(Jl + 1), this.heap = new Uint16Array(2 * ei + 1), bt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * ei + 1), bt(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const Rn = (e) => {
  if (!e)
    return 1;
  const n = e.state;
  return !n || n.strm !== e || n.status !== Xt && //#ifdef GZIP
  n.status !== ui && //#endif
  n.status !== ti && n.status !== ni && n.status !== ri && n.status !== ii && n.status !== St && n.status !== mn ? 1 : 0;
}, vo = (e) => {
  if (Rn(e))
    return Qt(e, lt);
  e.total_in = e.total_out = 0, e.data_type = Pl;
  const n = e.state;
  return n.pending = 0, n.pending_out = 0, n.wrap < 0 && (n.wrap = -n.wrap), n.status = //#ifdef GZIP
  n.wrap === 2 ? ui : (
    //#endif
    n.wrap ? Xt : St
  ), e.adler = n.wrap === 2 ? 0 : 1, n.last_flush = -2, Sl(n), Te;
}, yo = (e) => {
  const n = vo(e);
  return n === Te && tc(e.state), n;
}, rc = (e, n) => Rn(e) || e.state.wrap !== 2 ? lt : (e.state.gzhead = n, Te), xo = (e, n, t, r, a, i, s) => {
  if (!e)
    return lt;
  let o = 1;
  if (n === zl && (n = 6), r < 0 ? (o = 0, r = -r) : r > 15 && (o = 2, r -= 16), a < 1 || a > Ul || t !== cr || r < 8 || r > 15 || n < 0 || n > 9 || i < 0 || i > Fl || r === 8 && o !== 1)
    return Qt(e, lt);
  r === 8 && (r = 9);
  const d = new nc();
  return e.state = d, d.strm = e, d.status = Xt, d.wrap = o, d.gzhead = null, d.w_bits = r, d.w_size = 1 << d.w_bits, d.w_mask = d.w_size - 1, d.legacy_hash = s ? 1 : 0, d.hash_bits = a + 7, !d.legacy_hash && d.hash_bits < 15 && (d.hash_bits = 15), d.hash_size = 1 << d.hash_bits, d.hash_mask = d.hash_size - 1, d.hash_shift = ~~((d.hash_bits + me - 1) / me), d.window = new Uint8Array(d.w_size * 2), d.head = new Uint16Array(d.hash_size), d.prev = new Uint16Array(d.w_size), d.lit_bufsize = 1 << a + 6, d.pending_buf_size = d.lit_bufsize * 4, d.pending_buf = new Uint8Array(d.pending_buf_size), d.sym_buf = d.lit_bufsize, d.sym_end = (d.lit_bufsize - 1) * 3, d.level = n, d.strategy = i, d.method = t, yo(e);
}, ic = (e, n) => xo(e, n, cr, Hl, Yl, Ml), ac = (e, n) => {
  if (Rn(e) || n > sa || n < 0)
    return e ? Qt(e, lt) : lt;
  const t = e.state;
  if (!e.output || e.avail_in !== 0 && !e.input || t.status === mn && n !== Ve)
    return Qt(e, e.avail_out === 0 ? Tr : lt);
  const r = t.last_flush;
  if (t.last_flush = n, t.pending !== 0) {
    if (We(e), e.avail_out === 0)
      return t.last_flush = -1, Te;
  } else if (e.avail_in === 0 && ca(n) <= ca(r) && n !== Ve)
    return Qt(e, Tr);
  if (t.status === mn && e.avail_in !== 0)
    return Qt(e, Tr);
  if (t.status === Xt && t.wrap === 0 && (t.status = St), t.status === Xt) {
    let a = cr + (t.w_bits - 8 << 4) << 8, i = -1;
    if (t.strategy >= Jn || t.level < 2 ? i = 0 : t.level < 6 ? i = 1 : t.level === 6 ? i = 2 : i = 3, a |= i << 6, t.strstart !== 0 && (a |= ql), a += 31 - a % 31, un(t, a), t.strstart !== 0 && (un(t, e.adler >>> 16), un(t, e.adler & 65535)), e.adler = 1, t.status = St, We(e), t.pending !== 0)
      return t.last_flush = -1, Te;
  }
  if (t.status === ui) {
    if (e.adler = 0, _e(t, 31), _e(t, 139), _e(t, 8), t.gzhead)
      _e(
        t,
        (t.gzhead.text ? 1 : 0) + (t.gzhead.hcrc ? 2 : 0) + (t.gzhead.extra ? 4 : 0) + (t.gzhead.name ? 8 : 0) + (t.gzhead.comment ? 16 : 0)
      ), _e(t, t.gzhead.time & 255), _e(t, t.gzhead.time >> 8 & 255), _e(t, t.gzhead.time >> 16 & 255), _e(t, t.gzhead.time >> 24 & 255), _e(t, t.level === 9 ? 2 : t.strategy >= Jn || t.level < 2 ? 4 : 0), _e(t, t.gzhead.os & 255), t.gzhead.extra && t.gzhead.extra.length && (_e(t, t.gzhead.extra.length & 255), _e(t, t.gzhead.extra.length >> 8 & 255)), t.gzhead.hcrc && (e.adler = Se(e.adler, t.pending_buf, t.pending, 0)), t.gzindex = 0, t.status = ti;
    else if (_e(t, 0), _e(t, 0), _e(t, 0), _e(t, 0), _e(t, 0), _e(t, t.level === 9 ? 2 : t.strategy >= Jn || t.level < 2 ? 4 : 0), _e(t, $l), t.status = St, We(e), t.pending !== 0)
      return t.last_flush = -1, Te;
  }
  if (t.status === ti) {
    if (t.gzhead.extra) {
      let a = t.pending, i = (t.gzhead.extra.length & 65535) - t.gzindex;
      for (; t.pending + i > t.pending_buf_size; ) {
        let o = t.pending_buf_size - t.pending;
        if (t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex, t.gzindex + o), t.pending), t.pending = t.pending_buf_size, t.gzhead.hcrc && t.pending > a && (e.adler = Se(e.adler, t.pending_buf, t.pending - a, a)), t.gzindex += o, We(e), t.pending !== 0)
          return t.last_flush = -1, Te;
        a = 0, i -= o;
      }
      let s = new Uint8Array(t.gzhead.extra);
      t.pending_buf.set(s.subarray(t.gzindex, t.gzindex + i), t.pending), t.pending += i, t.gzhead.hcrc && t.pending > a && (e.adler = Se(e.adler, t.pending_buf, t.pending - a, a)), t.gzindex = 0;
    }
    t.status = ni;
  }
  if (t.status === ni) {
    if (t.gzhead.name) {
      let a = t.pending, i;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > a && (e.adler = Se(e.adler, t.pending_buf, t.pending - a, a)), We(e), t.pending !== 0)
            return t.last_flush = -1, Te;
          a = 0;
        }
        t.gzindex < t.gzhead.name.length ? i = t.gzhead.name.charCodeAt(t.gzindex++) & 255 : i = 0, _e(t, i);
      } while (i !== 0);
      t.gzhead.hcrc && t.pending > a && (e.adler = Se(e.adler, t.pending_buf, t.pending - a, a)), t.gzindex = 0;
    }
    t.status = ri;
  }
  if (t.status === ri) {
    if (t.gzhead.comment) {
      let a = t.pending, i;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > a && (e.adler = Se(e.adler, t.pending_buf, t.pending - a, a)), We(e), t.pending !== 0)
            return t.last_flush = -1, Te;
          a = 0;
        }
        t.gzindex < t.gzhead.comment.length ? i = t.gzhead.comment.charCodeAt(t.gzindex++) & 255 : i = 0, _e(t, i);
      } while (i !== 0);
      t.gzhead.hcrc && t.pending > a && (e.adler = Se(e.adler, t.pending_buf, t.pending - a, a));
    }
    t.status = ii;
  }
  if (t.status === ii) {
    if (t.gzhead.hcrc) {
      if (t.pending + 2 > t.pending_buf_size && (We(e), t.pending !== 0))
        return t.last_flush = -1, Te;
      _e(t, e.adler & 255), _e(t, e.adler >> 8 & 255), e.adler = 0;
    }
    if (t.status = St, We(e), t.pending !== 0)
      return t.last_flush = -1, Te;
  }
  if (e.avail_in !== 0 || t.lookahead !== 0 || n !== Et && t.status !== mn) {
    let a = t.level === 0 ? Io(t, n) : t.strategy === Jn ? ec(t, n) : t.strategy === Ol ? Vl(t, n) : _n[t.level].func(t, n);
    if ((a === Rt || a === nn) && (t.status = mn), a === Fe || a === Rt)
      return e.avail_out === 0 && (t.last_flush = -1), Te;
    if (a === tn && (n === Tl ? Dl(t) : n !== sa && (Vr(t, 0, 0, !1), n === Rl && (bt(t.head), t.lookahead === 0 && (t.strstart = 0, t.block_start = 0, t.insert = 0))), We(e), e.avail_out === 0))
      return t.last_flush = -1, Te;
  }
  return n !== Ve ? Te : t.wrap <= 0 ? la : (t.wrap === 2 ? (_e(t, e.adler & 255), _e(t, e.adler >> 8 & 255), _e(t, e.adler >> 16 & 255), _e(t, e.adler >> 24 & 255), _e(t, e.total_in & 255), _e(t, e.total_in >> 8 & 255), _e(t, e.total_in >> 16 & 255), _e(t, e.total_in >> 24 & 255)) : (un(t, e.adler >>> 16), un(t, e.adler & 65535)), We(e), t.wrap > 0 && (t.wrap = -t.wrap), t.pending !== 0 ? Te : la);
}, oc = (e) => {
  if (Rn(e))
    return lt;
  const n = e.state.status;
  return e.state = null, n === St ? Qt(e, Nl) : Te;
}, sc = (e, n) => {
  let t = n.length;
  if (Rn(e))
    return lt;
  const r = e.state, a = r.wrap;
  if (a === 2 || a === 1 && r.status !== Xt || r.lookahead)
    return lt;
  if (a === 1 && (e.adler = xn(e.adler, n, t, 0)), r.wrap = 0, t >= r.w_size) {
    a === 0 && (bt(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0);
    let d = new Uint8Array(r.w_size);
    d.set(n.subarray(t - r.w_size, t), 0), n = d, t = r.w_size;
  }
  const i = e.avail_in, s = e.next_in, o = e.input;
  for (e.avail_in = t, e.next_in = 0, e.input = n, Vt(r); r.lookahead >= me; ) {
    let d = r.strstart, l = r.lookahead - (me - 1);
    do
      Nt(r, d), d++;
    while (--l);
    r.strstart = d, r.lookahead = me - 1, Vt(r);
  }
  return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = me - 1, r.match_available = 0, e.next_in = s, e.input = o, e.avail_in = i, r.wrap = a, Te;
};
var lc = ic, cc = xo, fc = yo, dc = vo, uc = rc, Ac = ac, hc = oc, pc = sc, gc = "pako deflate (from Nodeca project)", Cn = {
  deflateInit: lc,
  deflateInit2: cc,
  deflateReset: fc,
  deflateResetKeep: dc,
  deflateSetHeader: uc,
  deflate: Ac,
  deflateEnd: hc,
  deflateSetDictionary: pc,
  deflateInfo: gc
};
const mc = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
var _c = function(e) {
  const n = Array.prototype.slice.call(arguments, 1);
  for (; n.length; ) {
    const t = n.shift();
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be non-object");
      for (const r in t)
        mc(t, r) && (e[r] = t[r]);
    }
  }
  return e;
}, bc = (e) => {
  let n = 0;
  for (let r = 0, a = e.length; r < a; r++)
    n += e[r].length;
  const t = new Uint8Array(n);
  for (let r = 0, a = 0, i = e.length; r < i; r++) {
    let s = e[r];
    t.set(s, a), a += s.length;
  }
  return t;
}, fr = {
  assign: _c,
  flattenChunks: bc
};
let Bo = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  Bo = !1;
}
const Bn = new Uint8Array(256);
for (let e = 0; e < 256; e++)
  Bn[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
Bn[254] = Bn[255] = 1;
var Cc = (e) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(e);
  let n, t, r, a, i, s = e.length, o = 0;
  for (a = 0; a < s; a++)
    t = e.charCodeAt(a), (t & 64512) === 55296 && a + 1 < s && (r = e.charCodeAt(a + 1), (r & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (r - 56320), a++)), o += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
  for (n = new Uint8Array(o), i = 0, a = 0; i < o; a++)
    t = e.charCodeAt(a), (t & 64512) === 55296 && a + 1 < s && (r = e.charCodeAt(a + 1), (r & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (r - 56320), a++)), t < 128 ? n[i++] = t : t < 2048 ? (n[i++] = 192 | t >>> 6, n[i++] = 128 | t & 63) : t < 65536 ? (n[i++] = 224 | t >>> 12, n[i++] = 128 | t >>> 6 & 63, n[i++] = 128 | t & 63) : (n[i++] = 240 | t >>> 18, n[i++] = 128 | t >>> 12 & 63, n[i++] = 128 | t >>> 6 & 63, n[i++] = 128 | t & 63);
  return n;
};
const wc = (e, n) => {
  if (n < 65534 && e.subarray && Bo)
    return String.fromCharCode.apply(null, e.length === n ? e : e.subarray(0, n));
  let t = "";
  for (let r = 0; r < n; r++)
    t += String.fromCharCode(e[r]);
  return t;
};
var Ec = (e, n) => {
  const t = n || e.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(e.subarray(0, n));
  let r, a;
  const i = new Array(t * 2);
  for (a = 0, r = 0; r < t; ) {
    let s = e[r++];
    if (s < 128) {
      i[a++] = s;
      continue;
    }
    let o = Bn[s];
    if (o > 4) {
      i[a++] = 65533, r += o - 1;
      continue;
    }
    for (s &= o === 2 ? 31 : o === 3 ? 15 : 7; o > 1 && r < t; )
      s = s << 6 | e[r++] & 63, o--;
    if (o > 1) {
      i[a++] = 65533;
      continue;
    }
    s < 65536 ? i[a++] = s : (s -= 65536, i[a++] = 55296 | s >> 10 & 1023, i[a++] = 56320 | s & 1023);
  }
  return wc(i, a);
}, Ic = (e, n) => {
  n = n || e.length, n > e.length && (n = e.length);
  let t = n - 1;
  for (; t >= 0 && (e[t] & 192) === 128; )
    t--;
  return t < 0 || t === 0 ? n : t + Bn[e[t]] > n ? t : n;
}, kn = {
  string2buf: Cc,
  buf2string: Ec,
  utf8border: Ic
};
function vc() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var ko = vc;
const So = Object.prototype.toString, {
  Z_NO_FLUSH: yc,
  Z_SYNC_FLUSH: xc,
  Z_FULL_FLUSH: Bc,
  Z_FINISH: kc,
  Z_OK: or,
  Z_STREAM_END: Sc,
  Z_DEFAULT_COMPRESSION: Qc,
  Z_DEFAULT_STRATEGY: Dc,
  Z_DEFLATED: Tc
} = Tn, Rc = {
  level: Qc,
  method: Tc,
  chunkSize: 16384,
  windowBits: 15,
  memLevel: 8,
  strategy: Dc,
  legacyHash: !0
};
function Nn(e) {
  this.options = fr.assign({}, Rc, e || {});
  let n = this.options;
  n.raw && n.windowBits > 0 ? n.windowBits = -n.windowBits : n.gzip && n.windowBits > 0 && n.windowBits < 16 && (n.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new ko(), this.strm.avail_out = 0;
  let t = Cn.deflateInit2(
    this.strm,
    n.level,
    n.method,
    n.windowBits,
    n.memLevel,
    n.strategy,
    n.legacyHash
  );
  if (t !== or)
    throw new Error(Tt[t]);
  if (n.header && Cn.deflateSetHeader(this.strm, n.header), n.dictionary) {
    let r;
    if (typeof n.dictionary == "string" ? r = kn.string2buf(n.dictionary) : So.call(n.dictionary) === "[object ArrayBuffer]" ? r = new Uint8Array(n.dictionary) : r = n.dictionary, t = Cn.deflateSetDictionary(this.strm, r), t !== or)
      throw new Error(Tt[t]);
    this._dict_set = !0;
  }
}
Nn.prototype.push = function(e, n) {
  const t = this.strm, r = this.options.chunkSize;
  let a, i;
  if (this.ended)
    return !1;
  for (n === ~~n ? i = n : i = n === !0 ? kc : yc, typeof e == "string" ? t.input = kn.string2buf(e) : So.call(e) === "[object ArrayBuffer]" ? t.input = new Uint8Array(e) : t.input = e, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    if (t.avail_out === 0 && (t.output = new Uint8Array(r), t.next_out = 0, t.avail_out = r), (i === xc || i === Bc) && t.avail_out <= 6) {
      this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
      continue;
    }
    if (a = Cn.deflate(t, i), a === Sc)
      return t.next_out > 0 && this.onData(t.output.subarray(0, t.next_out)), a = Cn.deflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === or;
    if (t.avail_out === 0) {
      this.onData(t.output);
      continue;
    }
    if (i > 0 && t.next_out > 0) {
      this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
      continue;
    }
    if (t.avail_in === 0) break;
  }
  return !0;
};
Nn.prototype.onData = function(e) {
  this.chunks.push(e);
};
Nn.prototype.onEnd = function(e) {
  e === or && (this.result = fr.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function hi(e, n) {
  const t = new Nn(n);
  if (t.push(e, !0), t.err)
    throw t.msg || Tt[t.err];
  return t.result;
}
function Nc(e, n) {
  return n = n || {}, n.raw = !0, hi(e, n);
}
function zc(e, n) {
  return n = n || {}, n.gzip = !0, hi(e, n);
}
var Lc = Nn, Oc = hi, Fc = Nc, Mc = zc, Pc = {
  Deflate: Lc,
  deflate: Oc,
  deflateRaw: Fc,
  gzip: Mc
};
const qn = 16209, Uc = 16191;
var Hc = function(n, t) {
  let r, a, i, s, o, d, l, A, b, _, f, g, p, m, u, C, v, y, k, O, S, F, D, Q;
  const R = n.state;
  r = n.next_in, D = n.input, a = r + (n.avail_in - 5), i = n.next_out, Q = n.output, s = i - (t - n.avail_out), o = i + (n.avail_out - 257), d = R.dmax, l = R.wsize, A = R.whave, b = R.wnext, _ = R.window, f = R.hold, g = R.bits, p = R.lencode, m = R.distcode, u = (1 << R.lenbits) - 1, C = (1 << R.distbits) - 1;
  e:
    do {
      g < 15 && (f += D[r++] << g, g += 8, f += D[r++] << g, g += 8), v = p[f & u];
      t:
        for (; ; ) {
          if (y = v >>> 24, f >>>= y, g -= y, y = v >>> 16 & 255, y === 0)
            Q[i++] = v & 65535;
          else if (y & 16) {
            k = v & 65535, y &= 15, y && (g < y && (f += D[r++] << g, g += 8), k += f & (1 << y) - 1, f >>>= y, g -= y), g < 15 && (f += D[r++] << g, g += 8, f += D[r++] << g, g += 8), v = m[f & C];
            n:
              for (; ; ) {
                if (y = v >>> 24, f >>>= y, g -= y, y = v >>> 16 & 255, y & 16) {
                  if (O = v & 65535, y &= 15, g < y && (f += D[r++] << g, g += 8, g < y && (f += D[r++] << g, g += 8)), O += f & (1 << y) - 1, O > d) {
                    n.msg = "invalid distance too far back", R.mode = qn;
                    break e;
                  }
                  if (f >>>= y, g -= y, y = i - s, O > y) {
                    if (y = O - y, y > A && R.sane) {
                      n.msg = "invalid distance too far back", R.mode = qn;
                      break e;
                    }
                    if (S = 0, F = _, b === 0) {
                      if (S += l - y, y < k) {
                        k -= y;
                        do
                          Q[i++] = _[S++];
                        while (--y);
                        S = i - O, F = Q;
                      }
                    } else if (b < y) {
                      if (S += l + b - y, y -= b, y < k) {
                        k -= y;
                        do
                          Q[i++] = _[S++];
                        while (--y);
                        if (S = 0, b < k) {
                          y = b, k -= y;
                          do
                            Q[i++] = _[S++];
                          while (--y);
                          S = i - O, F = Q;
                        }
                      }
                    } else if (S += b - y, y < k) {
                      k -= y;
                      do
                        Q[i++] = _[S++];
                      while (--y);
                      S = i - O, F = Q;
                    }
                    for (; k > 2; )
                      Q[i++] = F[S++], Q[i++] = F[S++], Q[i++] = F[S++], k -= 3;
                    k && (Q[i++] = F[S++], k > 1 && (Q[i++] = F[S++]));
                  } else {
                    S = i - O;
                    do
                      Q[i++] = Q[S++], Q[i++] = Q[S++], Q[i++] = Q[S++], k -= 3;
                    while (k > 2);
                    k && (Q[i++] = Q[S++], k > 1 && (Q[i++] = Q[S++]));
                  }
                } else if (y & 64) {
                  n.msg = "invalid distance code", R.mode = qn;
                  break e;
                } else {
                  v = m[(v & 65535) + (f & (1 << y) - 1)];
                  continue n;
                }
                break;
              }
          } else if (y & 64)
            if (y & 32) {
              R.mode = Uc;
              break e;
            } else {
              n.msg = "invalid literal/length code", R.mode = qn;
              break e;
            }
          else {
            v = p[(v & 65535) + (f & (1 << y) - 1)];
            continue t;
          }
          break;
        }
    } while (r < a && i < o);
  k = g >> 3, r -= k, g -= k << 3, f &= (1 << g) - 1, n.next_in = r, n.next_out = i, n.avail_in = r < a ? 5 + (a - r) : 5 - (r - a), n.avail_out = i < o ? 257 + (o - i) : 257 - (i - o), R.hold = f, R.bits = g;
};
const Gt = 15, fa = 852, da = 592, ua = 0, Nr = 1, Aa = 2, Yc = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), Gc = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  199,
  75
]), jc = new Uint16Array([
  /* Distance codes 0..29 base */
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
  24577,
  0,
  0
]), Zc = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), Wc = (e, n, t, r, a, i, s, o) => {
  const d = o.bits;
  let l = 0, A = 0, b = 0, _ = 0, f = 0, g = 0, p = 0, m = 0, u = 0, C = 0, v, y, k, O, S, F = null, D;
  const Q = new Uint16Array(Gt + 1), R = new Uint16Array(Gt + 1);
  let E = null, z, h, U;
  for (l = 0; l <= Gt; l++)
    Q[l] = 0;
  for (A = 0; A < r; A++)
    Q[n[t + A]]++;
  for (f = d, _ = Gt; _ >= 1 && Q[_] === 0; _--)
    ;
  if (f > _ && (f = _), _ === 0)
    return a[i++] = 1 << 24 | 64 << 16 | 0, a[i++] = 1 << 24 | 64 << 16 | 0, o.bits = 1, 0;
  for (b = 1; b < _ && Q[b] === 0; b++)
    ;
  for (f < b && (f = b), m = 1, l = 1; l <= Gt; l++)
    if (m <<= 1, m -= Q[l], m < 0)
      return -1;
  if (m > 0 && (e === ua || _ !== 1))
    return -1;
  for (R[1] = 0, l = 1; l < Gt; l++)
    R[l + 1] = R[l] + Q[l];
  for (A = 0; A < r; A++)
    n[t + A] !== 0 && (s[R[n[t + A]]++] = A);
  if (e === ua ? (F = E = s, D = 20) : e === Nr ? (F = Yc, E = Gc, D = 257) : (F = jc, E = Zc, D = 0), C = 0, A = 0, l = b, S = i, g = f, p = 0, k = -1, u = 1 << f, O = u - 1, e === Nr && u > fa || e === Aa && u > da)
    return 1;
  for (; ; ) {
    z = l - p, s[A] + 1 < D ? (h = 0, U = s[A]) : s[A] >= D ? (h = E[s[A] - D], U = F[s[A] - D]) : (h = 96, U = 0), v = 1 << l - p, y = 1 << g, b = y;
    do
      y -= v, a[S + (C >> p) + y] = z << 24 | h << 16 | U | 0;
    while (y !== 0);
    for (v = 1 << l - 1; C & v; )
      v >>= 1;
    if (v !== 0 ? (C &= v - 1, C += v) : C = 0, A++, --Q[l] === 0) {
      if (l === _)
        break;
      l = n[t + s[A]];
    }
    if (l > f && (C & O) !== k) {
      for (p === 0 && (p = f), S += b, g = l - p, m = 1 << g; g + p < _ && (m -= Q[g + p], !(m <= 0)); )
        g++, m <<= 1;
      if (u += 1 << g, e === Nr && u > fa || e === Aa && u > da)
        return 1;
      k = C & O, a[k] = f << 24 | g << 16 | S - i | 0;
    }
  }
  return C !== 0 && (a[S + C] = l - p << 24 | 64 << 16 | 0), o.bits = f, 0;
};
var wn = Wc;
const Kc = 0, Qo = 1, Do = 2, {
  Z_FINISH: ha,
  Z_BLOCK: Jc,
  Z_TREES: $n,
  Z_OK: zt,
  Z_STREAM_END: qc,
  Z_NEED_DICT: $c,
  Z_STREAM_ERROR: et,
  Z_DATA_ERROR: To,
  Z_MEM_ERROR: Ro,
  Z_BUF_ERROR: Xc,
  Z_DEFLATED: pa
} = Tn, dr = 16180, ga = 16181, ma = 16182, _a = 16183, ba = 16184, Ca = 16185, wa = 16186, Ea = 16187, Ia = 16188, va = 16189, sr = 16190, At = 16191, zr = 16192, ya = 16193, Lr = 16194, xa = 16195, Ba = 16196, ka = 16197, Sa = 16198, Xn = 16199, Vn = 16200, Qa = 16201, Da = 16202, Ta = 16203, Ra = 16204, Na = 16205, Or = 16206, za = 16207, La = 16208, Ie = 16209, No = 16210, zo = 16211, Vc = 852, ef = 592, tf = 15, nf = tf, Oa = (e) => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
function rf() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const Lt = (e) => {
  if (!e)
    return 1;
  const n = e.state;
  return !n || n.strm !== e || n.mode < dr || n.mode > zo ? 1 : 0;
}, Lo = (e) => {
  if (Lt(e))
    return et;
  const n = e.state;
  return e.total_in = e.total_out = n.total = 0, e.msg = "", n.wrap && (e.adler = n.wrap & 1), n.mode = dr, n.last = 0, n.havedict = 0, n.flags = -1, n.dmax = 32768, n.head = null, n.hold = 0, n.bits = 0, n.lencode = n.lendyn = new Int32Array(Vc), n.distcode = n.distdyn = new Int32Array(ef), n.sane = 1, n.back = -1, zt;
}, Oo = (e) => {
  if (Lt(e))
    return et;
  const n = e.state;
  return n.wsize = 0, n.whave = 0, n.wnext = 0, Lo(e);
}, Fo = (e, n) => {
  let t;
  if (Lt(e))
    return et;
  const r = e.state;
  return n < 0 ? (t = 0, n = -n) : (t = (n >> 4) + 5, n < 48 && (n &= 15)), n && (n < 8 || n > 15) ? et : (r.window !== null && r.wbits !== n && (r.window = null), r.wrap = t, r.wbits = n, Oo(e));
}, Mo = (e, n) => {
  if (!e)
    return et;
  const t = new rf();
  e.state = t, t.strm = e, t.window = null, t.mode = dr;
  const r = Fo(e, n);
  return r !== zt && (e.state = null), r;
}, af = (e) => Mo(e, nf);
let Fa = !0, Fr, Mr;
const of = (e) => {
  if (Fa) {
    Fr = new Int32Array(512), Mr = new Int32Array(32);
    let n = 0;
    for (; n < 144; )
      e.lens[n++] = 8;
    for (; n < 256; )
      e.lens[n++] = 9;
    for (; n < 280; )
      e.lens[n++] = 7;
    for (; n < 288; )
      e.lens[n++] = 8;
    for (wn(Qo, e.lens, 0, 288, Fr, 0, e.work, { bits: 9 }), n = 0; n < 32; )
      e.lens[n++] = 5;
    wn(Do, e.lens, 0, 32, Mr, 0, e.work, { bits: 5 }), Fa = !1;
  }
  e.lencode = Fr, e.lenbits = 9, e.distcode = Mr, e.distbits = 5;
}, Po = (e, n, t, r) => {
  let a;
  const i = e.state;
  return i.window === null && (i.window = new Uint8Array(1 << i.wbits)), i.wsize === 0 && (i.wsize = 1 << i.wbits, i.wnext = 0, i.whave = 0), r >= i.wsize ? (i.window.set(n.subarray(t - i.wsize, t), 0), i.wnext = 0, i.whave = i.wsize) : (a = i.wsize - i.wnext, a > r && (a = r), i.window.set(n.subarray(t - r, t - r + a), i.wnext), r -= a, r ? (i.window.set(n.subarray(t - r, t), 0), i.wnext = r, i.whave = i.wsize) : (i.wnext += a, i.wnext === i.wsize && (i.wnext = 0), i.whave < i.wsize && (i.whave += a))), 0;
}, sf = (e, n) => {
  let t, r, a, i, s, o, d, l, A, b, _, f, g, p, m = 0, u, C, v, y, k, O, S, F;
  const D = new Uint8Array(4);
  let Q, R;
  const E = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (Lt(e) || !e.output || !e.input && e.avail_in !== 0)
    return et;
  t = e.state, t.mode === At && (t.mode = zr), s = e.next_out, a = e.output, d = e.avail_out, i = e.next_in, r = e.input, o = e.avail_in, l = t.hold, A = t.bits, b = o, _ = d, F = zt;
  e:
    for (; ; )
      switch (t.mode) {
        case dr:
          if (t.wrap === 0) {
            t.mode = zr;
            break;
          }
          for (; A < 16; ) {
            if (o === 0)
              break e;
            o--, l += r[i++] << A, A += 8;
          }
          if (t.wrap & 2 && l === 35615) {
            t.wbits === 0 && (t.wbits = 15), t.check = 0, D[0] = l & 255, D[1] = l >>> 8 & 255, t.check = Se(t.check, D, 2, 0), l = 0, A = 0, t.mode = ga;
            break;
          }
          if (t.head && (t.head.done = !1), !(t.wrap & 1) || /* check if zlib header allowed */
          (((l & 255) << 8) + (l >> 8)) % 31) {
            e.msg = "incorrect header check", t.mode = Ie;
            break;
          }
          if ((l & 15) !== pa) {
            e.msg = "unknown compression method", t.mode = Ie;
            break;
          }
          if (l >>>= 4, A -= 4, S = (l & 15) + 8, t.wbits === 0 && (t.wbits = S), S > 15 || S > t.wbits) {
            e.msg = "invalid window size", t.mode = Ie;
            break;
          }
          t.dmax = 1 << t.wbits, t.flags = 0, e.adler = t.check = 1, t.mode = l & 512 ? va : At, l = 0, A = 0;
          break;
        case ga:
          for (; A < 16; ) {
            if (o === 0)
              break e;
            o--, l += r[i++] << A, A += 8;
          }
          if (t.flags = l, (t.flags & 255) !== pa) {
            e.msg = "unknown compression method", t.mode = Ie;
            break;
          }
          if (t.flags & 57344) {
            e.msg = "unknown header flags set", t.mode = Ie;
            break;
          }
          t.head && (t.head.text = l >> 8 & 1), t.flags & 512 && t.wrap & 4 && (D[0] = l & 255, D[1] = l >>> 8 & 255, t.check = Se(t.check, D, 2, 0)), l = 0, A = 0, t.mode = ma;
        case ma:
          for (; A < 32; ) {
            if (o === 0)
              break e;
            o--, l += r[i++] << A, A += 8;
          }
          t.head && (t.head.time = l), t.flags & 512 && t.wrap & 4 && (D[0] = l & 255, D[1] = l >>> 8 & 255, D[2] = l >>> 16 & 255, D[3] = l >>> 24 & 255, t.check = Se(t.check, D, 4, 0)), l = 0, A = 0, t.mode = _a;
        case _a:
          for (; A < 16; ) {
            if (o === 0)
              break e;
            o--, l += r[i++] << A, A += 8;
          }
          t.head && (t.head.xflags = l & 255, t.head.os = l >> 8), t.flags & 512 && t.wrap & 4 && (D[0] = l & 255, D[1] = l >>> 8 & 255, t.check = Se(t.check, D, 2, 0)), l = 0, A = 0, t.mode = ba;
        case ba:
          if (t.flags & 1024) {
            for (; A < 16; ) {
              if (o === 0)
                break e;
              o--, l += r[i++] << A, A += 8;
            }
            t.length = l, t.head && (t.head.extra_len = l), t.flags & 512 && t.wrap & 4 && (D[0] = l & 255, D[1] = l >>> 8 & 255, t.check = Se(t.check, D, 2, 0)), l = 0, A = 0;
          } else t.head && (t.head.extra = null);
          t.mode = Ca;
        case Ca:
          if (t.flags & 1024 && (f = t.length, f > o && (f = o), f && (t.head && (S = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(
            r.subarray(
              i,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              i + f
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            S
          )), t.flags & 512 && t.wrap & 4 && (t.check = Se(t.check, r, f, i)), o -= f, i += f, t.length -= f), t.length))
            break e;
          t.length = 0, t.mode = wa;
        case wa:
          if (t.flags & 2048) {
            if (o === 0)
              break e;
            f = 0;
            do
              S = r[i + f++], t.head && S && t.length < 65536 && (t.head.name += String.fromCharCode(S));
            while (S && f < o);
            if (t.flags & 512 && t.wrap & 4 && (t.check = Se(t.check, r, f, i)), o -= f, i += f, S)
              break e;
          } else t.head && (t.head.name = null);
          t.length = 0, t.mode = Ea;
        case Ea:
          if (t.flags & 4096) {
            if (o === 0)
              break e;
            f = 0;
            do
              S = r[i + f++], t.head && S && t.length < 65536 && (t.head.comment += String.fromCharCode(S));
            while (S && f < o);
            if (t.flags & 512 && t.wrap & 4 && (t.check = Se(t.check, r, f, i)), o -= f, i += f, S)
              break e;
          } else t.head && (t.head.comment = null);
          t.mode = Ia;
        case Ia:
          if (t.flags & 512) {
            for (; A < 16; ) {
              if (o === 0)
                break e;
              o--, l += r[i++] << A, A += 8;
            }
            if (t.wrap & 4 && l !== (t.check & 65535)) {
              e.msg = "header crc mismatch", t.mode = Ie;
              break;
            }
            l = 0, A = 0;
          }
          t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = !0), e.adler = t.check = 0, t.mode = At;
          break;
        case va:
          for (; A < 32; ) {
            if (o === 0)
              break e;
            o--, l += r[i++] << A, A += 8;
          }
          e.adler = t.check = Oa(l), l = 0, A = 0, t.mode = sr;
        case sr:
          if (t.havedict === 0)
            return e.next_out = s, e.avail_out = d, e.next_in = i, e.avail_in = o, t.hold = l, t.bits = A, $c;
          e.adler = t.check = 1, t.mode = At;
        case At:
          if (n === Jc || n === $n)
            break e;
        case zr:
          if (t.last) {
            l >>>= A & 7, A -= A & 7, t.mode = Or;
            break;
          }
          for (; A < 3; ) {
            if (o === 0)
              break e;
            o--, l += r[i++] << A, A += 8;
          }
          switch (t.last = l & 1, l >>>= 1, A -= 1, l & 3) {
            case 0:
              t.mode = ya;
              break;
            case 1:
              if (of(t), t.mode = Xn, n === $n) {
                l >>>= 2, A -= 2;
                break e;
              }
              break;
            case 2:
              t.mode = Ba;
              break;
            case 3:
              e.msg = "invalid block type", t.mode = Ie;
          }
          l >>>= 2, A -= 2;
          break;
        case ya:
          for (l >>>= A & 7, A -= A & 7; A < 32; ) {
            if (o === 0)
              break e;
            o--, l += r[i++] << A, A += 8;
          }
          if ((l & 65535) !== (l >>> 16 ^ 65535)) {
            e.msg = "invalid stored block lengths", t.mode = Ie;
            break;
          }
          if (t.length = l & 65535, l = 0, A = 0, t.mode = Lr, n === $n)
            break e;
        case Lr:
          t.mode = xa;
        case xa:
          if (f = t.length, f) {
            if (f > o && (f = o), f > d && (f = d), f === 0)
              break e;
            a.set(r.subarray(i, i + f), s), o -= f, i += f, d -= f, s += f, t.length -= f;
            break;
          }
          t.mode = At;
          break;
        case Ba:
          for (; A < 14; ) {
            if (o === 0)
              break e;
            o--, l += r[i++] << A, A += 8;
          }
          if (t.nlen = (l & 31) + 257, l >>>= 5, A -= 5, t.ndist = (l & 31) + 1, l >>>= 5, A -= 5, t.ncode = (l & 15) + 4, l >>>= 4, A -= 4, t.nlen > 286 || t.ndist > 30) {
            e.msg = "too many length or distance symbols", t.mode = Ie;
            break;
          }
          t.have = 0, t.mode = ka;
        case ka:
          for (; t.have < t.ncode; ) {
            for (; A < 3; ) {
              if (o === 0)
                break e;
              o--, l += r[i++] << A, A += 8;
            }
            t.lens[E[t.have++]] = l & 7, l >>>= 3, A -= 3;
          }
          for (; t.have < 19; )
            t.lens[E[t.have++]] = 0;
          if (t.lencode = t.lendyn, t.lenbits = 7, Q = { bits: t.lenbits }, F = wn(Kc, t.lens, 0, 19, t.lencode, 0, t.work, Q), t.lenbits = Q.bits, F) {
            e.msg = "invalid code lengths set", t.mode = Ie;
            break;
          }
          t.have = 0, t.mode = Sa;
        case Sa:
          for (; t.have < t.nlen + t.ndist; ) {
            for (; m = t.lencode[l & (1 << t.lenbits) - 1], u = m >>> 24, C = m >>> 16 & 255, v = m & 65535, !(u <= A); ) {
              if (o === 0)
                break e;
              o--, l += r[i++] << A, A += 8;
            }
            if (v < 16)
              l >>>= u, A -= u, t.lens[t.have++] = v;
            else {
              if (v === 16) {
                for (R = u + 2; A < R; ) {
                  if (o === 0)
                    break e;
                  o--, l += r[i++] << A, A += 8;
                }
                if (l >>>= u, A -= u, t.have === 0) {
                  e.msg = "invalid bit length repeat", t.mode = Ie;
                  break;
                }
                S = t.lens[t.have - 1], f = 3 + (l & 3), l >>>= 2, A -= 2;
              } else if (v === 17) {
                for (R = u + 3; A < R; ) {
                  if (o === 0)
                    break e;
                  o--, l += r[i++] << A, A += 8;
                }
                l >>>= u, A -= u, S = 0, f = 3 + (l & 7), l >>>= 3, A -= 3;
              } else {
                for (R = u + 7; A < R; ) {
                  if (o === 0)
                    break e;
                  o--, l += r[i++] << A, A += 8;
                }
                l >>>= u, A -= u, S = 0, f = 11 + (l & 127), l >>>= 7, A -= 7;
              }
              if (t.have + f > t.nlen + t.ndist) {
                e.msg = "invalid bit length repeat", t.mode = Ie;
                break;
              }
              for (; f--; )
                t.lens[t.have++] = S;
            }
          }
          if (t.mode === Ie)
            break;
          if (t.lens[256] === 0) {
            e.msg = "invalid code -- missing end-of-block", t.mode = Ie;
            break;
          }
          if (t.lenbits = 9, Q = { bits: t.lenbits }, F = wn(Qo, t.lens, 0, t.nlen, t.lencode, 0, t.work, Q), t.lenbits = Q.bits, F) {
            e.msg = "invalid literal/lengths set", t.mode = Ie;
            break;
          }
          if (t.distbits = 6, t.distcode = t.distdyn, Q = { bits: t.distbits }, F = wn(Do, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, Q), t.distbits = Q.bits, F) {
            e.msg = "invalid distances set", t.mode = Ie;
            break;
          }
          if (t.mode = Xn, n === $n)
            break e;
        case Xn:
          t.mode = Vn;
        case Vn:
          if (o >= 6 && d >= 258) {
            e.next_out = s, e.avail_out = d, e.next_in = i, e.avail_in = o, t.hold = l, t.bits = A, Hc(e, _), s = e.next_out, a = e.output, d = e.avail_out, i = e.next_in, r = e.input, o = e.avail_in, l = t.hold, A = t.bits, t.mode === At && (t.back = -1);
            break;
          }
          for (t.back = 0; m = t.lencode[l & (1 << t.lenbits) - 1], u = m >>> 24, C = m >>> 16 & 255, v = m & 65535, !(u <= A); ) {
            if (o === 0)
              break e;
            o--, l += r[i++] << A, A += 8;
          }
          if (C && !(C & 240)) {
            for (y = u, k = C, O = v; m = t.lencode[O + ((l & (1 << y + k) - 1) >> y)], u = m >>> 24, C = m >>> 16 & 255, v = m & 65535, !(y + u <= A); ) {
              if (o === 0)
                break e;
              o--, l += r[i++] << A, A += 8;
            }
            l >>>= y, A -= y, t.back += y;
          }
          if (l >>>= u, A -= u, t.back += u, t.length = v, C === 0) {
            t.mode = Na;
            break;
          }
          if (C & 32) {
            t.back = -1, t.mode = At;
            break;
          }
          if (C & 64) {
            e.msg = "invalid literal/length code", t.mode = Ie;
            break;
          }
          t.extra = C & 15, t.mode = Qa;
        case Qa:
          if (t.extra) {
            for (R = t.extra; A < R; ) {
              if (o === 0)
                break e;
              o--, l += r[i++] << A, A += 8;
            }
            t.length += l & (1 << t.extra) - 1, l >>>= t.extra, A -= t.extra, t.back += t.extra;
          }
          t.was = t.length, t.mode = Da;
        case Da:
          for (; m = t.distcode[l & (1 << t.distbits) - 1], u = m >>> 24, C = m >>> 16 & 255, v = m & 65535, !(u <= A); ) {
            if (o === 0)
              break e;
            o--, l += r[i++] << A, A += 8;
          }
          if (!(C & 240)) {
            for (y = u, k = C, O = v; m = t.distcode[O + ((l & (1 << y + k) - 1) >> y)], u = m >>> 24, C = m >>> 16 & 255, v = m & 65535, !(y + u <= A); ) {
              if (o === 0)
                break e;
              o--, l += r[i++] << A, A += 8;
            }
            l >>>= y, A -= y, t.back += y;
          }
          if (l >>>= u, A -= u, t.back += u, C & 64) {
            e.msg = "invalid distance code", t.mode = Ie;
            break;
          }
          t.offset = v, t.extra = C & 15, t.mode = Ta;
        case Ta:
          if (t.extra) {
            for (R = t.extra; A < R; ) {
              if (o === 0)
                break e;
              o--, l += r[i++] << A, A += 8;
            }
            t.offset += l & (1 << t.extra) - 1, l >>>= t.extra, A -= t.extra, t.back += t.extra;
          }
          if (t.offset > t.dmax) {
            e.msg = "invalid distance too far back", t.mode = Ie;
            break;
          }
          t.mode = Ra;
        case Ra:
          if (d === 0)
            break e;
          if (f = _ - d, t.offset > f) {
            if (f = t.offset - f, f > t.whave && t.sane) {
              e.msg = "invalid distance too far back", t.mode = Ie;
              break;
            }
            f > t.wnext ? (f -= t.wnext, g = t.wsize - f) : g = t.wnext - f, f > t.length && (f = t.length), p = t.window;
          } else
            p = a, g = s - t.offset, f = t.length;
          f > d && (f = d), d -= f, t.length -= f;
          do
            a[s++] = p[g++];
          while (--f);
          t.length === 0 && (t.mode = Vn);
          break;
        case Na:
          if (d === 0)
            break e;
          a[s++] = t.length, d--, t.mode = Vn;
          break;
        case Or:
          if (t.wrap) {
            for (; A < 32; ) {
              if (o === 0)
                break e;
              o--, l |= r[i++] << A, A += 8;
            }
            if (_ -= d, e.total_out += _, t.total += _, t.wrap & 4 && _ && (e.adler = t.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            t.flags ? Se(t.check, a, _, s - _) : xn(t.check, a, _, s - _)), _ = d, t.wrap & 4 && (t.flags ? l : Oa(l)) !== t.check) {
              e.msg = "incorrect data check", t.mode = Ie;
              break;
            }
            l = 0, A = 0;
          }
          t.mode = za;
        case za:
          if (t.wrap && t.flags) {
            for (; A < 32; ) {
              if (o === 0)
                break e;
              o--, l += r[i++] << A, A += 8;
            }
            if (t.wrap & 4 && l !== (t.total & 4294967295)) {
              e.msg = "incorrect length check", t.mode = Ie;
              break;
            }
            l = 0, A = 0;
          }
          t.mode = La;
        case La:
          F = qc;
          break e;
        case Ie:
          F = To;
          break e;
        case No:
          return Ro;
        case zo:
        default:
          return et;
      }
  return e.next_out = s, e.avail_out = d, e.next_in = i, e.avail_in = o, t.hold = l, t.bits = A, (t.wsize || _ !== e.avail_out && t.mode < Ie && (t.mode < Or || n !== ha)) && Po(e, e.output, e.next_out, _ - e.avail_out), b -= e.avail_in, _ -= e.avail_out, e.total_in += b, e.total_out += _, t.total += _, t.wrap & 4 && _ && (e.adler = t.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  t.flags ? Se(t.check, a, _, e.next_out - _) : xn(t.check, a, _, e.next_out - _)), e.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === At ? 128 : 0) + (t.mode === Xn || t.mode === Lr ? 256 : 0), (b === 0 && _ === 0 || n === ha) && F === zt && (F = Xc), F;
}, lf = (e) => {
  if (Lt(e))
    return et;
  let n = e.state;
  return n.window && (n.window = null), e.state = null, zt;
}, cf = (e, n) => {
  if (Lt(e))
    return et;
  const t = e.state;
  return t.wrap & 2 ? (t.head = n, n.done = !1, zt) : et;
}, ff = (e, n) => {
  const t = n.length;
  let r, a, i;
  return Lt(e) || (r = e.state, r.wrap !== 0 && r.mode !== sr) ? et : r.mode === sr && (a = 1, a = xn(a, n, t, 0), a !== r.check) ? To : (i = Po(e, n, t, t), i ? (r.mode = No, Ro) : (r.havedict = 1, zt));
};
var df = Oo, uf = Fo, Af = Lo, hf = af, pf = Mo, gf = sf, mf = lf, _f = cf, bf = ff, Cf = "pako inflate (from Nodeca project)", ot = {
  inflateReset: df,
  inflateReset2: uf,
  inflateResetKeep: Af,
  inflateInit: hf,
  inflateInit2: pf,
  inflate: gf,
  inflateEnd: mf,
  inflateGetHeader: _f,
  inflateSetDictionary: bf,
  inflateInfo: Cf
};
function wf() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var Ef = wf;
const Uo = Object.prototype.toString, {
  Z_NO_FLUSH: If,
  Z_FINISH: Ma,
  Z_OK: $t,
  Z_STREAM_END: Pr,
  Z_NEED_DICT: Ur,
  Z_STREAM_ERROR: vf,
  Z_DATA_ERROR: Pa,
  Z_MEM_ERROR: yf,
  Z_BUF_ERROR: Ua
} = Tn, xf = {
  chunkSize: 1024 * 64,
  windowBits: 15,
  to: ""
};
function zn(e) {
  this.options = fr.assign({}, xf, e || {});
  const n = this.options;
  n.raw && n.windowBits >= 0 && n.windowBits < 16 && (n.windowBits = -n.windowBits, n.windowBits === 0 && (n.windowBits = -15)), n.windowBits >= 0 && n.windowBits < 16 && !(e && e.windowBits) && (n.windowBits += 32), n.windowBits > 15 && n.windowBits < 48 && (n.windowBits & 15 || (n.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new ko(), this.strm.avail_out = 0;
  let t = ot.inflateInit2(
    this.strm,
    n.windowBits
  );
  if (t !== $t)
    throw new Error(Tt[t]);
  if (this.header = new Ef(), ot.inflateGetHeader(this.strm, this.header), n.dictionary && (typeof n.dictionary == "string" ? n.dictionary = kn.string2buf(n.dictionary) : Uo.call(n.dictionary) === "[object ArrayBuffer]" && (n.dictionary = new Uint8Array(n.dictionary)), n.raw && (t = ot.inflateSetDictionary(this.strm, n.dictionary), t !== $t)))
    throw new Error(Tt[t]);
}
zn.prototype.push = function(e, n) {
  const t = this.strm, r = this.options.chunkSize, a = this.options.dictionary;
  let i, s, o;
  if (this.ended) return !1;
  for (n === ~~n ? s = n : s = n === !0 ? Ma : If, Uo.call(e) === "[object ArrayBuffer]" ? t.input = new Uint8Array(e) : t.input = e, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    for (t.avail_out === 0 && (t.output = new Uint8Array(r), t.next_out = 0, t.avail_out = r), i = ot.inflate(t, s), i === Ur && a && (i = ot.inflateSetDictionary(t, a), i === $t ? i = ot.inflate(t, s) : i === Pa && (i = Ur)); t.avail_in > 0 && i === Pr && t.state.wrap & 2 && t.state.flags !== 0 && t.input[t.next_in] !== 0; )
      ot.inflateReset(t), i = ot.inflate(t, s);
    switch (i) {
      case vf:
      case Pa:
      case Ur:
      case yf:
        return this.onEnd(i), this.ended = !0, !1;
    }
    if (o = t.avail_out, t.next_out && (t.avail_out === 0 || i === Pr || s > 0))
      if (this.options.to === "string") {
        let d = kn.utf8border(t.output, t.next_out), l = t.next_out - d, A = kn.buf2string(t.output, d);
        t.next_out = l, t.avail_out = r - l, l && t.output.set(t.output.subarray(d, d + l), 0), this.onData(A);
      } else
        this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out)), t.avail_out = 0, t.next_out = 0;
    if (!((i === $t || i === Ua) && o === 0)) {
      if (i === Pr)
        return i = ot.inflateEnd(this.strm), this.onEnd(i), this.ended = !0, !0;
      if (t.avail_in === 0) {
        if (s === Ma)
          return i = ot.inflateEnd(this.strm), this.onEnd(i === $t ? Ua : i), this.ended = !0, !1;
        break;
      }
    }
  }
  return !0;
};
zn.prototype.onData = function(e) {
  this.chunks.push(e);
};
zn.prototype.onEnd = function(e) {
  e === $t && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = fr.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function pi(e, n) {
  const t = new zn(n);
  if (t.push(e, !0), t.err) throw t.msg || Tt[t.err];
  return t.result;
}
function Bf(e, n) {
  return n = n || {}, n.raw = !0, pi(e, n);
}
var kf = zn, Sf = pi, Qf = Bf, Df = pi, Tf = {
  Inflate: kf,
  inflate: Sf,
  inflateRaw: Qf,
  ungzip: Df
};
const { Deflate: Rf, deflate: Nf, deflateRaw: zf, gzip: Lf } = Pc, { Inflate: Of, inflate: Ff, inflateRaw: Mf, ungzip: Pf } = Tf;
var Uf = Rf, Hf = Nf, Yf = zf, Gf = Lf, jf = Of, Zf = Ff, Wf = Mf, Kf = Pf, Jf = Tn, qf = {
  Deflate: Uf,
  deflate: Hf,
  deflateRaw: Yf,
  gzip: Gf,
  Inflate: jf,
  inflate: Zf,
  inflateRaw: Wf,
  ungzip: Kf,
  constants: Jf
}, er = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  jfif: "image/jpeg",
  pjpe: "image/pjpeg",
  pjpeg: "image/pjpeg",
  png: "image/png",
  gif: "image/gif",
  webp: "image/webp",
  avif: "image/avif",
  jxl: "image/jxl",
  svg: "image/svg+xml",
  bmp: "image/bmp",
  ico: "image/x-icon",
  cur: "image/x-icon",
  tif: "image/tiff",
  tiff: "image/tiff",
  apng: "image/apng",
  heic: "image/heic",
  heif: "image/heif",
  mp4: "video/mp4",
  mpg: "video/mpeg",
  mpeg: "video/mpeg",
  mpe: "video/mpeg",
  mpv: "video/mpv",
  webm: "video/webm",
  ogg: "audio/ogg",
  ogv: "video/ogg",
  mov: "video/quicktime",
  m4v: "video/x-m4v",
  avi: "video/x-msvideo",
  mkv: "video/x-matroska",
  flv: "video/x-flv",
  wmv: "video/x-ms-wmv",
  "3gp": "video/3gpp",
  "3g2": "video/3gpp2",
  m2ts: "video/mp2t",
  m3u8: "application/vnd.apple.mpegurl",
  mp3: "audio/mpeg",
  wav: "audio/wav",
  aif: "audio/aiff",
  aiff: "audio/aiff",
  aifc: "audio/aiff",
  aac: "audio/aac",
  m4a: "audio/mp4",
  flac: "audio/flac",
  opus: "audio/opus",
  oga: "audio/ogg",
  weba: "audio/webm",
  amr: "audio/amr",
  mid: "audio/midi",
  midi: "audio/midi",
  caf: "audio/x-caf",
  au: "audio/basic",
  snd: "audio/basic",
  wma: "audio/x-ms-wma",
  pdf: "application/pdf",
  epub: "application/epub+zip",
  xps: "application/vnd.ms-xpsdocument",
  oxps: "application/oxps",
  txt: "text/plain",
  lrc: "text/plain",
  log: "text/plain",
  env: "text/plain",
  gitignore: "text/plain",
  dockerignore: "text/plain",
  npmrc: "text/plain",
  yarnrc: "text/plain",
  pnpmrc: "text/plain",
  editorconfig: "text/plain",
  browserslistrc: "text/plain",
  prettierrc: "application/json",
  eslintrc: "application/json",
  stylelintrc: "application/json",
  conf: "text/plain",
  config: "text/plain",
  properties: "text/plain",
  lock: "text/plain",
  json: "application/json",
  jsonc: "application/json",
  json5: "application/json5",
  ipynb: "application/x-ipynb+json",
  jsonl: "application/x-ndjson",
  ndjson: "application/x-ndjson",
  xml: "application/xml",
  yaml: "text/yaml",
  yml: "text/yaml",
  csv: "text/csv",
  tsv: "text/tab-separated-values",
  md: "text/markdown",
  markdown: "text/markdown",
  mmd: "text/vnd.mermaid",
  mermaid: "text/vnd.mermaid",
  toml: "application/toml",
  ini: "text/plain",
  proto: "text/x-protobuf",
  tf: "text/x-hcl",
  tfvars: "text/x-hcl",
  hcl: "text/x-hcl",
  tex: "application/x-tex",
  latex: "application/x-tex",
  bib: "text/x-bibtex",
  gv: "text/vnd.graphviz",
  http: "message/http",
  css: "text/css",
  scss: "text/css",
  less: "text/css",
  js: "text/javascript",
  mjs: "text/javascript",
  cjs: "text/javascript",
  ts: "text/typescript",
  tsx: "text/typescript",
  jsx: "text/javascript",
  htm: "text/html",
  html: "text/html",
  vue: "text/plain",
  py: "text/x-python",
  java: "text/x-java-source",
  go: "text/x-go",
  rs: "text/rust",
  rb: "text/x-ruby",
  swift: "text/x-swift",
  kt: "text/x-kotlin",
  kts: "text/x-kotlin",
  scala: "text/x-scala",
  lua: "text/x-lua",
  r: "text/x-r",
  dart: "text/x-dart",
  svelte: "text/plain",
  astro: "text/plain",
  elm: "text/x-elm",
  ex: "text/x-elixir",
  exs: "text/x-elixir",
  clj: "text/x-clojure",
  cljs: "text/x-clojure",
  erl: "text/x-erlang",
  hrl: "text/x-erlang",
  fs: "text/x-fsharp",
  fsx: "text/x-fsharp",
  hs: "text/x-haskell",
  lhs: "text/x-haskell",
  php: "application/x-httpd-php",
  c: "text/x-c",
  cpp: "text/x-c++src",
  h: "text/x-c",
  hpp: "text/x-c++hdr",
  cs: "text/x-csharp",
  sql: "application/sql",
  sh: "application/x-sh",
  bash: "application/x-sh",
  zsh: "application/x-sh",
  fish: "application/x-sh",
  ps1: "text/plain",
  bat: "text/plain",
  cmd: "text/plain",
  dockerfile: "text/plain",
  nginxconf: "text/plain",
  gradle: "text/plain",
  graphql: "application/graphql",
  gql: "application/graphql",
  pem: "application/x-pem-file",
  crt: "application/x-x509-ca-cert",
  cer: "application/pkix-cert",
  ics: "text/calendar",
  vcf: "text/vcard",
  diff: "text/x-diff",
  patch: "text/x-diff",
  geojson: "application/geo+json",
  topojson: "application/topo+json",
  kml: "application/vnd.google-earth.kml+xml",
  kmz: "application/vnd.google-earth.kmz",
  gpx: "application/gpx+xml",
  shp: "application/octet-stream",
  drawio: "application/vnd.jgraph.mxfile",
  dio: "application/vnd.jgraph.mxfile",
  xmind: "application/vnd.xmind.workbook",
  excalidraw: "application/vnd.excalidraw+json",
  tldraw: "application/json",
  zip: "application/zip",
  rar: "application/vnd.rar",
  "7z": "application/x-7z-compressed",
  tar: "application/x-tar",
  gz: "application/gzip",
  tgz: "application/gzip",
  bz2: "application/x-bzip2",
  xz: "application/x-xz",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  docm: "application/vnd.ms-word.document.macroenabled.12",
  dotx: "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
  dotm: "application/vnd.ms-word.template.macroenabled.12",
  dot: "application/msword",
  doc: "application/msword",
  rtf: "application/rtf",
  odt: "application/vnd.oasis.opendocument.text",
  fodt: "application/vnd.oasis.opendocument.text-flat-xml",
  wps: "application/vnd.ms-works",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
  xls: "application/vnd.ms-excel",
  xlt: "application/vnd.ms-excel",
  xlsm: "application/vnd.ms-excel.sheet.macroenabled.12",
  xltm: "application/vnd.ms-excel.template.macroenabled.12",
  xlsb: "application/vnd.ms-excel.sheet.binary.macroenabled.12",
  ods: "application/vnd.oasis.opendocument.spreadsheet",
  fods: "application/vnd.oasis.opendocument.spreadsheet-flat-xml",
  numbers: "application/vnd.apple.numbers",
  et: "application/vnd.ms-excel",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  pptm: "application/vnd.ms-powerpoint.presentation.macroenabled.12",
  ppsx: "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
  ppsm: "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
  potx: "application/vnd.openxmlformats-officedocument.presentationml.template",
  potm: "application/vnd.ms-powerpoint.template.macroenabled.12",
  ppt: "application/vnd.ms-powerpoint",
  pps: "application/vnd.ms-powerpoint",
  odp: "application/vnd.oasis.opendocument.presentation",
  fodp: "application/vnd.oasis.opendocument.presentation-flat-xml",
  key: "application/vnd.apple.keynote",
  dps: "application/vnd.ms-powerpoint",
  eml: "message/rfc822",
  msg: "application/vnd.ms-outlook",
  mbox: "application/mbox",
  ofd: "application/ofd",
  gltf: "model/gltf+json",
  glb: "model/gltf-binary",
  stl: "model/stl",
  obj: "model/obj",
  "3ds": "model/3ds",
  fbx: "application/vnd.autodesk.fbx",
  dae: "model/vnd.collada+xml",
  ply: "application/ply",
  "3mf": "model/3mf",
  usdz: "model/vnd.usdz+zip",
  usdc: "model/vnd.usd",
  usda: "model/vnd.usd",
  usd: "model/vnd.usd",
  wrl: "model/vrml",
  vrml: "model/vrml",
  dxf: "image/vnd.dxf",
  dwg: "application/acad",
  dwf: "model/vnd.dwf",
  step: "model/step",
  stp: "model/step",
  iges: "application/iges",
  igs: "application/iges",
  ifc: "application/x-step",
  sat: "application/sat",
  sab: "application/sab",
  x_t: "application/x-parasolid",
  x_b: "application/x-parasolid",
  "3dm": "model/vnd.3dm",
  skp: "application/vnd.sketchup.skp",
  sldprt: "application/sldworks",
  sldasm: "application/sldworks",
  gds: "application/vnd.gds",
  gdsii: "application/x-gdsii",
  oas: "application/vnd.oasis.layout",
  oasis: "application/vnd.oasis.layout",
  ttf: "font/ttf",
  otf: "font/otf",
  woff: "font/woff",
  woff2: "font/woff2",
  eot: "application/vnd.ms-fontobject",
  psd: "image/vnd.adobe.photoshop",
  psb: "image/vnd.adobe.photoshop",
  ai: "application/postscript",
  eps: "application/postscript",
  ps: "application/postscript",
  webarchive: "application/x-webarchive",
  sqlite: "application/vnd.sqlite3",
  sqlite3: "application/vnd.sqlite3",
  db: "application/vnd.sqlite3",
  wasm: "application/wasm",
  parquet: "application/vnd.apache.parquet",
  avro: "application/avro"
};
async function Ho(e, n, t) {
  if (typeof e == "string") {
    const s = n || Xf(e) || "remote-file", o = nr(s);
    return tr({
      source: e,
      name: s,
      extension: o,
      mimeType: t || er[o] || "",
      url: e
    }, t);
  }
  if (e instanceof File) {
    const s = nr(n || e.name);
    return tr({
      source: e,
      name: n || e.name,
      extension: s,
      mimeType: t || e.type || er[s] || "",
      size: e.size,
      blob: e
    }, t);
  }
  if (e instanceof Blob) {
    const s = n || "blob", o = nr(s);
    return tr({
      source: e,
      name: s,
      extension: o,
      mimeType: t || e.type || er[o] || "",
      size: e.size,
      blob: e
    }, t);
  }
  const r = n || "buffer", a = nr(r), i = new Blob([e], { type: t || er[a] || "" });
  return tr({
    source: e,
    name: r,
    extension: a,
    mimeType: i.type,
    size: i.size,
    blob: i
  }, t);
}
var $f = /* @__PURE__ */ new WeakSet();
function tr(e, n) {
  return n && $f.add(e), e;
}
function Xf(e) {
  var t;
  const n = ((t = e.split(/[?#]/, 1)[0]) == null ? void 0 : t.split("/").filter(Boolean).pop()) || "";
  if (!n)
    return "";
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}
function nr(e) {
  var r;
  const n = ((r = e.split("?")[0]) == null ? void 0 : r.split("#")[0]) || "", t = n.lastIndexOf(".");
  return t >= 0 ? n.slice(t + 1).split("!", 1)[0].toLowerCase() : "";
}
function Vf(e) {
  if (typeof e != "string")
    return e;
  const n = document.querySelector(e);
  if (!n)
    throw new Error(`File viewer container not found: ${e}`);
  return n;
}
function ed(e, n, t) {
  n !== void 0 && (e.style.width = typeof n == "number" ? `${n}px` : n), t !== void 0 && (e.style.height = typeof t == "number" ? `${t}px` : t);
}
function Ha(e) {
  const n = e.getBoundingClientRect();
  return {
    width: Math.max(0, Math.round(n.width)),
    height: Math.max(0, Math.round(n.height))
  };
}
function gi(e) {
  if (e.url)
    return e.url;
  if (!e.blob)
    throw new Error("File source cannot be converted to an object URL.");
  return URL.createObjectURL(e.blob);
}
function Kt(e, n) {
  n || URL.revokeObjectURL(e);
}
var td = {
  "zh-CN": {
    loading: "正在加载预览...",
    unsupportedTitle: "当前文件暂不支持在线预览",
    downloadTitle: "当前文件可下载后查看",
    downloadFile: "下载文件",
    file: "文件",
    unnamedFile: "未命名文件",
    format: "格式",
    unknown: "未知",
    mime: "MIME",
    undeclared: "未声明",
    size: "大小",
    source: "来源",
    remoteUrl: "远程 URL",
    localFile: "本地/内存文件",
    textPlainLanguage: "纯文本",
    textLineCount: "{count} 行",
    textWrap: "换行",
    textCopy: "复制",
    textCopied: "已复制",
    textCopyFailed: "复制失败",
    textDownload: "下载",
    textDownloadReady: "下载已准备",
    textLargeFileNotice: "文件较大，当前展示前 {size}，复制和下载仍会使用完整内容。",
    textHighlightSkipped: "内容较大，已跳过语法高亮以保持滚动流畅。",
    textPreviewFailedTitle: "文本预览失败",
    textPreviewFailedMessage: "无法读取该文本内容，可能是远程文件不可访问或响应状态异常。",
    textOpenOriginal: "打开原文件",
    lrcPreviewMode: "LRC 预览模式",
    lrcDisplayMode: "展示模式",
    lrcAnnotatedMode: "美观模式",
    lrcSourceMode: "源码模式",
    lrcWordTimestamp: "逐字时间",
    lrcMale: "男声",
    lrcFemale: "女声",
    lrcDuet: "合唱",
    lrcAuthor: "词曲",
    lrcLyricist: "作词",
    lrcLrcBy: "歌词制作",
    lrcAlbum: "专辑",
    lrcLength: "时长",
    lrcOffset: "时间偏移",
    lrcTool: "制作工具",
    lrcVersion: "版本",
    lrcTrackInformation: "音乐作品信息",
    lrcEmpty: "没有可展示的歌词内容。",
    officeLegacyConversionTitle: "Office 转换提示",
    officeLegacyBinaryNotice: "属于旧版 Microsoft Office 二进制格式，浏览器内无法高保真解析；当前仅展示可信文本片段和结构指纹，完整排版建议接入 LibreOffice/OnlyOffice 服务端转换为 PDF/HTML。",
    officeLegacyMetaFormatType: "格式类型",
    officeLegacyMetaFileStructure: "文件结构",
    officeLegacyOleDetected: "检测到 OLE Compound File 签名",
    officeLegacyOleMissing: "未检测到标准 OLE 签名，按原始二进制尝试提取",
    officeLegacyMetaTextFragments: "文本片段",
    officeLegacyTextFragmentCount: "{count} 段",
    officeLegacyMetaParseStatus: "解析状态",
    officeLegacyReadableFragments: "可读文本片段",
    officeLegacyNoText: "未提取到稳定可读文本。该文件可能经过压缩、加密，或文本编码无法在浏览器端可靠识别；请使用服务端 LibreOffice/OnlyOffice 转换后预览。",
    officeLegacyWordParseFailed: "Word 二进制解析失败：{message}",
    officeSheetParseFailed: "表格解析失败：{message}",
    officeUnsupportedTitle: "Office 基础预览",
    officeUnsupportedLegacyMessage: "该格式属于老二进制或专有格式，浏览器内无法可靠解析；建议接入 LibreOffice/OnlyOffice 服务端转换为 PDF/HTML 后预览。",
    officeUnsupportedGenericMessage: "该格式通常需要服务端转换或专用解析器才能高保真预览。",
    officeUnsupportedIntro: "已进入 Office 插件。{message}",
    officeUnsupportedSupportedFormats: "当前版本优先支持 docx、rtf、odt/fodt、xlsx/xls/csv/ods、pptx/ppsx、odp/fodp 的基础内容预览。",
    officeErrorWithMessage: "解析器返回：{message}",
    officeErrorWithoutMessage: "解析器未返回具体错误信息。",
    officeConvertedTitle: "Office 高保真转换预览",
    officeConvertedPdfFailed: "Office 转换后的 PDF 无法预览",
    pdfEncryptedTitle: "PDF 已加密，无法在线预览",
    pdfEncryptedMessage: "请下载后使用密码打开，或上传解密后的 PDF 文件。",
    pdfPreviewFailedTitle: "PDF 预览失败",
    pdfCorruptedMessage: "该 PDF 文件可能已损坏或格式无效。",
    pdfCannotLoadMessage: "当前浏览器无法加载该 PDF。",
    pdfDownload: "下载 PDF",
    pdfPageLoading: "页面 {page} 加载中...",
    pdfPageEmpty: "该页没有检测到可显示的 PDF 兼容内容。若这是 Illustrator/AI 文件，可能只包含私有编辑数据，建议导出为 PDF/SVG/PNG 后预览。",
    pdfPageRenderFailed: "无法渲染该页面。该页可能包含浏览器 PDF 引擎暂不支持的图形、字体或压缩特性。",
    pdfPreviousPage: "上一页",
    pdfNextPage: "下一页",
    pdfPageInput: "当前页码",
    pdfPagePosition: "/ {total}",
    pdfPageLabel: "第 {page} 页",
    pdfSummaryPages: "页数",
    pdfSummaryPageSizes: "页面尺寸",
    pdfSummaryFit: "适配",
    pdfSummaryActualSize: "原始大小",
    pdfSummaryFitWidth: "适合宽度",
    pdfSummaryZoom: "缩放",
    imagePreviewFailedTitle: "图片预览失败",
    imagePreviewFailedMessage: "当前浏览器无法直接显示该图片，文件可能已损坏或编码暂不受支持。",
    imageDownload: "下载图片",
    imageZoomOut: "缩小",
    imageZoomIn: "放大",
    imageRotate: "旋转图片",
    imageReset: "重置图片视图"
  },
  "en-US": {
    loading: "Loading preview...",
    unsupportedTitle: "Preview is not available for this file",
    downloadTitle: "This file can be downloaded and opened locally",
    downloadFile: "Download file",
    file: "File",
    unnamedFile: "Untitled file",
    format: "Format",
    unknown: "Unknown",
    mime: "MIME",
    undeclared: "Not declared",
    size: "Size",
    source: "Source",
    remoteUrl: "Remote URL",
    localFile: "Local or in-memory file",
    textPlainLanguage: "plain text",
    textLineCount: "{count} lines",
    textWrap: "Wrap",
    textCopy: "Copy",
    textCopied: "Copied",
    textCopyFailed: "Copy failed",
    textDownload: "Download",
    textDownloadReady: "Download ready",
    textLargeFileNotice: "Large file, showing the first {size}. Copy and download still use the full content.",
    textHighlightSkipped: "Large content, syntax highlighting was skipped to keep scrolling smooth.",
    textPreviewFailedTitle: "Text preview failed",
    textPreviewFailedMessage: "Unable to read this text content. The remote file may be unreachable or returned an invalid response.",
    textOpenOriginal: "Open original file",
    lrcPreviewMode: "LRC preview mode",
    lrcDisplayMode: "Lyrics mode",
    lrcAnnotatedMode: "Annotated mode",
    lrcSourceMode: "Source mode",
    lrcWordTimestamp: "Word timestamp",
    lrcMale: "Male vocal",
    lrcFemale: "Female vocal",
    lrcDuet: "Duet",
    lrcAuthor: "Written by",
    lrcLyricist: "Lyrics by",
    lrcLrcBy: "LRC by",
    lrcAlbum: "Album",
    lrcLength: "Length",
    lrcOffset: "Timing offset",
    lrcTool: "Created with",
    lrcVersion: "Version",
    lrcTrackInformation: "Music information",
    lrcEmpty: "No lyrics to display.",
    officeLegacyConversionTitle: "Office conversion guidance",
    officeLegacyBinaryNotice: "belongs to a legacy Microsoft Office binary format that cannot be rendered with high fidelity in the browser. The preview shows trusted text fragments and structural fingerprints; use a LibreOffice/OnlyOffice server conversion to PDF/HTML for complete layout fidelity.",
    officeLegacyMetaFormatType: "Format type",
    officeLegacyMetaFileStructure: "File structure",
    officeLegacyOleDetected: "OLE Compound File signature detected",
    officeLegacyOleMissing: "No standard OLE signature detected; extracting from raw binary data",
    officeLegacyMetaTextFragments: "Text fragments",
    officeLegacyTextFragmentCount: "{count} fragments",
    officeLegacyMetaParseStatus: "Parse status",
    officeLegacyReadableFragments: "Readable text fragments",
    officeLegacyNoText: "No stable readable text was extracted. The file may be compressed, encrypted, or use text encoding that cannot be reliably recognized in the browser; use LibreOffice/OnlyOffice server conversion before previewing.",
    officeLegacyWordParseFailed: "Word binary parse failed: {message}",
    officeSheetParseFailed: "Spreadsheet parse failed: {message}",
    officeUnsupportedTitle: "Office basic preview",
    officeUnsupportedLegacyMessage: "This is a legacy binary or proprietary format that cannot be reliably parsed in the browser; convert it to PDF/HTML through LibreOffice/OnlyOffice on the server before previewing.",
    officeUnsupportedGenericMessage: "This format usually needs server-side conversion or a dedicated parser for high-fidelity preview.",
    officeUnsupportedIntro: "is handled by the Office plugin. {message}",
    officeUnsupportedSupportedFormats: "This version prioritizes basic previews for docx, rtf, odt/fodt, xlsx/xls/csv/ods, pptx/ppsx, and odp/fodp files.",
    officeErrorWithMessage: "Parser returned: {message}",
    officeErrorWithoutMessage: "Parser did not return a specific error.",
    officeConvertedTitle: "High-fidelity Office conversion preview",
    officeConvertedPdfFailed: "The converted Office PDF could not be previewed",
    pdfEncryptedTitle: "This PDF is encrypted and cannot be previewed online",
    pdfEncryptedMessage: "Download and open it with the password, or upload a decrypted PDF file.",
    pdfPreviewFailedTitle: "PDF preview failed",
    pdfCorruptedMessage: "The PDF may be corrupted or use an invalid format.",
    pdfCannotLoadMessage: "This browser could not load the PDF.",
    pdfDownload: "Download PDF",
    pdfPageLoading: "Loading page {page}...",
    pdfPageEmpty: "No displayable PDF-compatible content was detected on this page. If this is an Illustrator/AI file, export it as PDF, SVG, or PNG before previewing.",
    pdfPageRenderFailed: "This page could not be rendered. It may contain graphics, fonts, or compression features that the browser PDF engine does not support.",
    pdfPreviousPage: "Previous page",
    pdfNextPage: "Next page",
    pdfPageInput: "Current page",
    pdfPagePosition: "/ {total}",
    pdfPageLabel: "Page {page}",
    pdfSummaryPages: "Pages",
    pdfSummaryPageSizes: "Page sizes",
    pdfSummaryFit: "Fit",
    pdfSummaryActualSize: "Actual size",
    pdfSummaryFitWidth: "Fit width",
    pdfSummaryZoom: "Zoom",
    imagePreviewFailedTitle: "Image preview failed",
    imagePreviewFailedMessage: "This browser cannot display the image. The file may be corrupted or use an unsupported encoding.",
    imageDownload: "Download image",
    imageZoomOut: "Zoom out",
    imageZoomIn: "Zoom in",
    imageRotate: "Rotate image",
    imageReset: "Reset image view"
  }
};
function nd(e) {
  return {
    ...td[e.locale || "en-US"],
    ...e.messages
  };
}
var Ya = "__ofvSafeSetImmediate__";
function rd(e) {
  const n = e;
  return !!(n.__POWERED_BY_QIANKUN__ || n.__MICRO_APP_ENVIRONMENT__ || n.__POWERED_BY_WUJIE__ || n.__GARFISH__);
}
function id(e) {
  let n = 1;
  const t = /* @__PURE__ */ new Map(), r = e.MessageChannel;
  if (typeof r == "function") {
    const i = new r();
    return i.port1.onmessage = (s) => {
      const o = t.get(s.data);
      o && (t.delete(s.data), o());
    }, {
      schedule(s, o) {
        const d = n++;
        return t.set(d, () => s(...o)), i.port2.postMessage(d), d;
      },
      cancel(s) {
        t.delete(s);
      }
    };
  }
  const a = /* @__PURE__ */ new Map();
  return {
    schedule(i, s) {
      const o = n++;
      return a.set(
        o,
        setTimeout(() => {
          a.delete(o), i(...s);
        }, 0)
      ), o;
    },
    cancel(i) {
      const s = a.get(i);
      s !== void 0 && (clearTimeout(s), a.delete(i));
    }
  };
}
function ad(e = typeof window > "u" ? void 0 : window) {
  var a;
  if (!e || !rd(e))
    return;
  const n = e;
  if ((a = n.setImmediate) != null && a[Ya])
    return;
  const t = id(e), r = (i, ...s) => t.schedule(i, s);
  r[Ya] = !0, n.setImmediate = r, n.clearImmediate = (i) => t.cancel(i);
}
function Sn() {
  return {
    name: "fallback",
    match() {
      return !0;
    },
    render(e) {
      var o, d;
      if ((d = (o = e.options).onUnsupported) == null || d.call(o, e.file), e.options.fallback === "custom" && e.options.renderFallback)
        return e.options.renderFallback(e);
      const n = gi(e.file), t = !!e.file.url, r = document.createElement("div");
      r.className = "ofv-fallback";
      const a = document.createElement("strong");
      a.textContent = e.options.fallback === "download" ? e.options.messages.downloadTitle : e.options.messages.unsupportedTitle;
      const i = od(e.file, e.options.messages), s = document.createElement("a");
      return s.href = n, s.download = e.file.name, s.textContent = e.options.messages.downloadFile, r.append(a, i, s), e.viewport.classList.add("ofv-center"), e.viewport.append(r), e.options.fallback === "download" && s.focus(), {
        destroy() {
          e.viewport.classList.remove("ofv-center"), Kt(n, t);
        }
      };
    }
  };
}
function od(e, n) {
  const t = document.createElement("dl");
  return t.className = "ofv-fallback-meta", An(t, n.file, e.name || n.unnamedFile), An(t, n.format, e.extension ? `.${e.extension}` : n.unknown), An(t, n.mime, e.mimeType || n.undeclared), An(t, n.size, e.size === void 0 ? n.unknown : sd(e.size)), An(t, n.source, e.url ? n.remoteUrl : n.localFile), t;
}
function An(e, n, t) {
  const r = document.createElement("dt");
  r.textContent = n;
  const a = document.createElement("dd");
  a.textContent = t, e.append(r, a);
}
function sd(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(2)} MB`;
}
function ld(e) {
  ad();
  const n = Vf(e.container);
  ed(n, e.width, e.height);
  const t = fd(e.className);
  n.classList.add("ofv-root"), t.length > 0 && n.classList.add(...t);
  const r = pd(n, e.theme || "light"), a = document.createElement("div");
  a.className = "ofv-host";
  const i = document.createElement("div");
  i.className = "ofv-status", i.setAttribute("role", "status"), i.hidden = !0;
  const s = document.createElement("div");
  s.className = "ofv-status-chip";
  const o = document.createElement("span");
  o.className = "ofv-status-spinner", o.setAttribute("aria-hidden", "true");
  const d = document.createElement("span");
  d.className = "ofv-status-text", s.append(o, d), i.append(s);
  const l = document.createElement("div");
  l.className = "ofv-viewport";
  const A = dd(e);
  let b = Ga(e.initialIndex || 0, A.length), _, f = !1;
  const g = async (R) => {
    u || A.length === 0 || (b = Ga(R, A.length), await Q(b));
  }, p = bd(
    e.toolbar,
    l,
    {
      getLength: () => A.length,
      next: () => g(b + 1),
      previous: () => g(b - 1),
      goToPage: (R) => {
        var E;
        return ((E = _ == null ? void 0 : _.goToPage) == null ? void 0 : E.call(_, R)) ?? !1;
      },
      command: (R) => {
        var E;
        return (E = _ == null ? void 0 : _.command) == null ? void 0 : E.call(_, R);
      },
      print: async () => {
        var E;
        if (f)
          return;
        f = !0;
        const R = _;
        try {
          await ((E = R == null ? void 0 : R.preparePrint) == null ? void 0 : E.call(R));
        } catch (z) {
          console.error("Failed to prepare file preview for printing:", z), f = !1;
          return;
        }
        f = !1, !(u || R !== _) && Td(l);
      }
    },
    e.locale || "en-US"
  );
  p && a.append(p.element), a.append(i, l), n.replaceChildren(a);
  const m = {
    ...e,
    fit: e.fit || "contain",
    fitWasProvided: e.fit !== void 0,
    fallback: e.fallback || "inline",
    zoom: hd(e.zoom),
    messages: nd(e)
  };
  let u = !1, C = 0, v;
  const y = cd(
    l,
    (R) => !u && !!(_ != null && _.command) && (_ != null && _.canCommand ? _.canCommand(R) : !0),
    (R) => {
      var E;
      return (E = _ == null ? void 0 : _.command) == null ? void 0 : E.call(_, R);
    }
  ), k = (R) => {
    i.hidden = !R, i.classList.remove("ofv-status-error"), d.textContent = R ? m.messages.loading : "";
  }, O = (R) => {
    i.hidden = !1, i.classList.add("ofv-status-error"), d.textContent = typeof R == "string" ? R : R.message;
  }, S = () => {
    var E;
    if (u)
      return;
    const R = Ha(l);
    (E = _ == null ? void 0 : _.resize) == null || E.call(_, R);
  }, F = gd(n, S), D = async (R, E = ++C) => {
    var re, K, ie;
    if (u || E !== C)
      return;
    Yr(_), _ = void 0, v == null || v.abort();
    const z = new AbortController();
    v = z, l.replaceChildren(), k(!0), p == null || p.update(R, b, A.length);
    const h = [...e.plugins || [], Sn()], U = await Md(h, R);
    if (!(u || E !== C))
      try {
        const G = await U.render({
          host: a,
          viewport: l,
          file: R,
          size: Ha(l),
          options: m,
          toolbar: p == null ? void 0 : p.getContext(),
          signal: z.signal,
          setLoading: k,
          setError: O
        });
        if (u || E !== C) {
          Yr(G);
          return;
        }
        v === z && (v = void 0), _ = G, m.initialPage !== void 0 && ((re = G.goToPage) == null || re.call(G, m.initialPage)), k(!1), p == null || p.setCommandSupport(
          (ae) => !!G.command && (G.canCommand ? G.canCommand(ae) : !0)
        ), (K = e.onLoad) == null || K.call(e, R), S();
      } catch (G) {
        if (v === z && (v = void 0), u || E !== C)
          return;
        const ae = G instanceof Error ? G : new Error(String(G));
        l.replaceChildren(), k(!1), O(ae), (ie = e.onError) == null || ie.call(e, ae, R);
      }
  };
  async function Q(R) {
    const E = ++C;
    v == null || v.abort(), v = void 0;
    const z = A[R], h = await Ho(z.file, z.fileName, z.mimeType);
    u || E !== C || await D(h, E);
  }
  return g(b), {
    async reload(R) {
      if (!u) {
        if (R !== void 0) {
          const E = A[b];
          A.splice(b, 1, Ad(R, E, e));
        }
        await Q(b);
      }
    },
    async next() {
      await g(b + 1);
    },
    async previous() {
      await g(b - 1);
    },
    goTo: g,
    goToPage(R) {
      var E;
      return u ? !1 : ((E = _ == null ? void 0 : _.goToPage) == null ? void 0 : E.call(_, R)) ?? !1;
    },
    getCurrentIndex() {
      return b;
    },
    resize: S,
    destroy() {
      u = !0, C += 1, v == null || v.abort(), v = void 0, F.destroy(), y.destroy(), Yr(_), p == null || p.destroy(), r.destroy(), n.replaceChildren(), n.classList.remove("ofv-root"), t.length > 0 && n.classList.remove(...t);
    }
  };
}
function cd(e, n, t) {
  let i = 0, s;
  const o = (b) => {
    if (b.defaultPrevented || !b.ctrlKey && !b.metaKey || b.deltaY === 0)
      return;
    const _ = b.deltaY < 0 ? "zoom-in" : "zoom-out";
    if (!n(_)) {
      i = 0;
      return;
    }
    b.cancelable && b.preventDefault();
    const f = b.deltaY * (b.deltaMode === 0 ? 1 : 40);
    i !== 0 && Math.sign(i) !== Math.sign(f) && (i = 0), i += f, !(Math.abs(i) < 40) && (t(_), i = 0);
  }, d = (b) => {
    s = b.touches.length === 2 ? Hr(b.touches) : void 0;
  }, l = (b) => {
    if (b.defaultPrevented || b.touches.length !== 2) {
      s = void 0;
      return;
    }
    const _ = Hr(b.touches);
    if (!(_ > 0))
      return;
    if (!(s && s > 0)) {
      s = _;
      return;
    }
    const f = _ > s ? "zoom-in" : "zoom-out";
    if (!n(f))
      return;
    b.cancelable && b.preventDefault();
    const g = _ / s;
    g < 1.08 && g > 1 / 1.08 || (t(f), s = _);
  }, A = (b) => {
    s = b.touches.length === 2 ? Hr(b.touches) : void 0;
  };
  return e.addEventListener("wheel", o, { passive: !1 }), e.addEventListener("touchstart", d, { passive: !0 }), e.addEventListener("touchmove", l, { passive: !1 }), e.addEventListener("touchend", A, { passive: !0 }), e.addEventListener("touchcancel", A, { passive: !0 }), {
    destroy() {
      e.removeEventListener("wheel", o), e.removeEventListener("touchstart", d), e.removeEventListener("touchmove", l), e.removeEventListener("touchend", A), e.removeEventListener("touchcancel", A);
    }
  };
}
function Hr(e) {
  const n = e.item(0), t = e.item(1);
  return n && t ? Math.hypot(t.clientX - n.clientX, t.clientY - n.clientY) : 0;
}
function fd(e) {
  return (e == null ? void 0 : e.trim().split(/\s+/).filter(Boolean)) ?? [];
}
function Yr(e) {
  if (e)
    try {
      e.destroy();
    } catch (n) {
      console.error("Failed to destroy file preview instance:", n);
    }
}
function dd(e) {
  if (e.files && e.files.length > 0)
    return e.files.map(
      (n) => ud(n) ? n : {
        file: n
      }
    );
  if (e.file === void 0)
    throw new Error("File viewer requires either file or files.");
  return [
    {
      file: e.file,
      fileName: e.fileName,
      mimeType: e.mimeType
    }
  ];
}
function ud(e) {
  return typeof e == "object" && e !== null && "file" in e;
}
function Ad(e, n, t) {
  return typeof File < "u" && e instanceof File ? { file: e } : {
    file: e,
    fileName: (n == null ? void 0 : n.fileName) || t.fileName,
    mimeType: (n == null ? void 0 : n.mimeType) || t.mimeType
  };
}
function Ga(e, n) {
  return n <= 0 ? 0 : Math.min(Math.max(e, 0), n - 1);
}
function hd(e) {
  return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : 1;
}
function pd(e, n) {
  var i;
  const t = (i = window.matchMedia) == null ? void 0 : i.call(window, "(prefers-color-scheme: dark)"), r = ["ofv-theme-light", "ofv-theme-dark"], a = () => {
    e.classList.remove(...r);
    const s = n === "auto" && (t != null && t.matches) ? "dark" : n === "auto" ? "light" : n;
    e.classList.add(`ofv-theme-${s}`);
  };
  return a(), n === "auto" && md(t, a), {
    destroy() {
      n === "auto" && _d(t, a), e.classList.remove(...r);
    }
  };
}
function gd(e, n) {
  if (typeof ResizeObserver < "u") {
    const t = new ResizeObserver(n);
    return t.observe(e), {
      destroy() {
        t.disconnect();
      }
    };
  }
  return window.addEventListener("resize", n), {
    destroy() {
      window.removeEventListener("resize", n);
    }
  };
}
function md(e, n) {
  var t;
  if (e) {
    if (typeof e.addEventListener == "function") {
      e.addEventListener("change", n);
      return;
    }
    (t = e.addListener) == null || t.call(e, n);
  }
}
function _d(e, n) {
  var t;
  if (e) {
    if (typeof e.removeEventListener == "function") {
      e.removeEventListener("change", n);
      return;
    }
    (t = e.removeListener) == null || t.call(e, n);
  }
}
function bd(e, n, t, r) {
  if (!e)
    return;
  const a = typeof e == "boolean" ? { zoom: !0, rotate: !0, download: !0, fullscreen: !0, print: !0, search: !0 } : e, i = document.createElement("div");
  i.className = "ofv-toolbar", i.setAttribute("role", "toolbar"), i.setAttribute("aria-label", ur[r].ariaLabel);
  let s, o = 0, d = t.getLength(), l, A, b, _, f, g;
  const p = [], m = [], u = [], C = Bd(n);
  let v, y, k = (B) => !1;
  const O = () => Cd({
    file: s,
    index: o,
    length: d,
    viewport: n,
    queue: t,
    element: i,
    search: C,
    canCommand: k,
    refreshCommandSupport: K,
    zoom: g,
    setZoom: U
  }), S = (B, $, H, W, le, ce = !1) => {
    const oe = document.createElement("button");
    return oe.type = "button", Gr(oe, B, le, ce), oe.title = $, oe.setAttribute("aria-label", $), W && (oe.className = W), oe.addEventListener("click", H), i.append(oe), u.push(() => oe.removeEventListener("click", H)), oe;
  }, F = (B, $, H, W) => {
    const le = S($, H, () => {
      t.command(W);
    }, void 0, xt(a, B), B !== "zoom-reset");
    le.disabled = !0, p.push({ button: le, command: W });
  }, D = (B) => {
    var $, H;
    if (!xd(B)) {
      const W = ($ = a.actions) == null ? void 0 : $.find((le) => le.id === B);
      W && Q(W);
      return;
    }
    if (B === "previous" && t.getLength() > 1) {
      A = S(
        Ge(a, r, "previous"),
        je(a, r, "previous"),
        () => void t.previous(),
        void 0,
        xt(a, "previous"),
        !0
      );
      return;
    }
    if (B === "next" && t.getLength() > 1) {
      b = S(
        Ge(a, r, "next"),
        je(a, r, "next"),
        () => void t.next(),
        void 0,
        xt(a, "next"),
        !0
      );
      return;
    }
    if (B === "queue" && t.getLength() > 1) {
      l = document.createElement("span"), l.className = "ofv-toolbar-queue", i.append(l);
      return;
    }
    if (B === "zoom-out" && a.zoom) {
      F(B, Ge(a, r, B), je(a, r, B), "zoom-out");
      return;
    }
    if (B === "zoom-in" && a.zoom) {
      F(B, Ge(a, r, B), je(a, r, B), "zoom-in");
      return;
    }
    if (B === "zoom-reset" && a.zoom) {
      F(B, Ge(a, r, B), je(a, r, B), "zoom-reset"), _ = (H = p[p.length - 1]) == null ? void 0 : H.button, re();
      return;
    }
    if (B === "rotate-left" && a.rotate) {
      F(B, Ge(a, r, B), je(a, r, B), "rotate-left");
      return;
    }
    if (B === "rotate-right" && a.rotate) {
      F(B, Ge(a, r, B), je(a, r, B), "rotate-right");
      return;
    }
    if (B === "download" && a.download !== !1) {
      S(
        Ge(a, r, B),
        je(a, r, B),
        () => O().download(),
        void 0,
        xt(a, "download"),
        !0
      );
      return;
    }
    if (B === "fullscreen" && a.fullscreen !== !1) {
      f = S(
        Ge(a, r, B),
        je(a, r, B),
        () => O().fullscreen(),
        void 0,
        xt(a, "fullscreen"),
        !0
      ), G();
      return;
    }
    if (B === "print" && a.print) {
      S(
        Ge(a, r, B),
        je(a, r, B),
        () => O().print(),
        void 0,
        xt(a, "print"),
        !0
      );
      return;
    }
    if (B === "search" && a.search !== !1) {
      R();
      return;
    }
  }, Q = (B) => {
    const $ = S(
      B.label,
      B.title || B.label,
      () => void B.onClick(O()),
      B.className,
      B.icon
    );
    $.dataset.ofvToolbarAction = B.id, m.push({ button: $, action: B });
  }, R = () => {
    const B = document.createElement("div");
    B.className = "ofv-toolbar-search", B.title = je(a, r, "search");
    const $ = document.createElement("span");
    $.className = "ofv-toolbar-search-icon", $.setAttribute("aria-hidden", "true"), $.append(Go(oi.search ?? "")), B.append($);
    const H = document.createElement("input");
    H.type = "search", H.placeholder = Ge(a, r, "search"), H.setAttribute("aria-label", je(a, r, "search"));
    const W = document.createElement("span");
    W.className = "ofv-toolbar-search-count", v = H, y = W;
    const le = () => {
      const ce = C.search(H.value);
      W.textContent = H.value ? String(ce) : "";
    };
    H.addEventListener("input", le), B.append(H, W), i.append(B), u.push(() => H.removeEventListener("input", le));
  };
  (() => {
    if (a.render) {
      i.replaceChildren();
      const $ = a.render(O());
      $ && i.append($);
      return;
    }
    const B = Ed(a, t.getLength());
    if (a.order)
      B.forEach(D);
    else {
      const $ = /* @__PURE__ */ new Set();
      for (const H of wd) {
        const W = H.filter((ce) => B.includes(ce));
        if (W.length === 0)
          continue;
        const le = i.childElementCount;
        for (const ce of W)
          $.add(ce), D(ce);
        if (le > 0 && i.childElementCount > le) {
          const ce = document.createElement("span");
          ce.className = "ofv-toolbar-sep", ce.setAttribute("aria-hidden", "true"), i.insertBefore(ce, i.children[le]);
        }
      }
      B.filter((H) => !$.has(H)).forEach(D);
    }
    Id(a).forEach(Q);
  })();
  const z = () => {
    const B = O();
    for (const { button: $, action: H } of m)
      $.disabled = ja(H.disabled, B), $.hidden = ja(H.hidden, B);
  }, h = () => {
    C.clear(), v && (v.value = ""), y && (y.textContent = "");
  };
  function U(B) {
    g = typeof B == "number" && Number.isFinite(B) && B > 0 ? B : void 0, re(), z(), P();
  }
  function re() {
    var B;
    _ && (Gr(
      _,
      g === void 0 ? Ge(a, r, "zoom-reset") : Yo(g),
      (B = a.icons) == null ? void 0 : B["zoom-reset"]
    ), _.classList.add("ofv-toolbar-zoom-reset"));
  }
  function K() {
    p.forEach(({ button: B, command: $ }) => {
      B.disabled = !k($);
    }), z(), P();
  }
  function ie() {
    return !!(typeof document < "u" && i.parentElement && document.fullscreenElement === i.parentElement);
  }
  function G() {
    var le, ce;
    if (!f)
      return;
    const B = ie(), $ = B ? "exit-fullscreen" : "fullscreen", H = B ? ((le = a.icons) == null ? void 0 : le["exit-fullscreen"]) ?? ((ce = a.icons) == null ? void 0 : ce.fullscreen) ?? oi["exit-fullscreen"] : xt(a, "fullscreen");
    Gr(f, Ge(a, r, $), H, !0);
    const W = je(a, r, $);
    f.title = W, f.setAttribute("aria-label", W), f.setAttribute("aria-pressed", String(B));
  }
  const ae = () => {
    G(), P();
  };
  typeof document < "u" && (document.addEventListener("fullscreenchange", ae), u.push(() => document.removeEventListener("fullscreenchange", ae)));
  const P = () => {
    if (!a.render)
      return;
    i.replaceChildren();
    const B = a.render(O());
    B && i.append(B);
  };
  return {
    element: i,
    update(B, $, H) {
      s = B, o = $, d = H, g = void 0, re(), h(), p.forEach(({ button: W }) => {
        W.disabled = !0;
      }), l && (l.textContent = `${$ + 1} / ${H}`), A && (A.disabled = $ <= 0), b && (b.disabled = $ >= H - 1), z(), P();
    },
    setCommandSupport(B) {
      k = B, !k("zoom-in") && !k("zoom-out") && !k("zoom-reset") && (g = void 0, re()), K();
    },
    getContext: O,
    setZoom: U,
    destroy() {
      C.clear();
      for (const B of u)
        B();
      i.replaceChildren();
    }
  };
}
function Cd({
  file: e,
  index: n,
  length: t,
  viewport: r,
  queue: a,
  element: i,
  search: s,
  canCommand: o,
  refreshCommandSupport: d,
  zoom: l,
  setZoom: A
}) {
  return {
    file: e,
    index: n,
    length: t,
    viewport: r,
    canPrevious: n > 0,
    canNext: n < t - 1,
    isFullscreen: !!(typeof document < "u" && i.parentElement && document.fullscreenElement === i.parentElement),
    zoom: l,
    zoomLabel: l === void 0 ? void 0 : Yo(l),
    async previous() {
      await a.previous();
    },
    async next() {
      await a.next();
    },
    goToPage: a.goToPage,
    command: a.command,
    canCommand: o,
    refreshCommandSupport: d,
    setZoom: A,
    download() {
      e && Fd(e);
    },
    fullscreen() {
      var _, f;
      const b = i.parentElement;
      b && (typeof document < "u" && document.fullscreenElement === b ? (_ = document.exitFullscreen) == null || _.call(document) : (f = b.requestFullscreen) == null || f.call(b));
    },
    print() {
      a.print();
    },
    search: s.search,
    clearSearch: s.clear
  };
}
var tt = (e) => `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${e}</svg>`, oi = {
  previous: tt('<path d="M9.8 3.8 5.6 8l4.2 4.2"/>'),
  next: tt('<path d="M6.2 3.8 10.4 8l-4.2 4.2"/>'),
  "zoom-out": tt(
    '<circle cx="7.2" cy="7.2" r="4.4"/><path d="M13.5 13.5l-3.2-3.2"/><path d="M5.4 7.2h3.6"/>'
  ),
  "zoom-in": tt(
    '<circle cx="7.2" cy="7.2" r="4.4"/><path d="M13.5 13.5l-3.2-3.2"/><path d="M5.4 7.2h3.6"/><path d="M7.2 5.4v3.6"/>'
  ),
  "rotate-left": tt(
    '<path d="M2.2 8a5.8 5.8 0 1 0 1.7-4.1L2.2 5.6"/><path d="M2.2 2.2v3.4h3.4"/>'
  ),
  "rotate-right": tt(
    '<path d="M13.8 8a5.8 5.8 0 1 1-1.7-4.1l1.7 1.7"/><path d="M13.8 2.2v3.4h-3.4"/>'
  ),
  download: tt(
    '<path d="M8 2.6v6.9"/><path d="m4.9 6.6 3.1 3.1 3.1-3.1"/><path d="M2.9 11.2v1a1.3 1.3 0 0 0 1.3 1.3h7.6a1.3 1.3 0 0 0 1.3-1.3v-1"/>'
  ),
  fullscreen: tt(
    '<path d="M6 2.9H4.2A1.3 1.3 0 0 0 2.9 4.2V6"/><path d="M10 2.9h1.8a1.3 1.3 0 0 1 1.3 1.3V6"/><path d="M6 13.1H4.2a1.3 1.3 0 0 1-1.3-1.3V10"/><path d="M10 13.1h1.8a1.3 1.3 0 0 0 1.3-1.3V10"/>'
  ),
  "exit-fullscreen": tt(
    '<path d="M2.9 6h1.8A1.3 1.3 0 0 0 6 4.7V2.9"/><path d="M13.1 6h-1.8A1.3 1.3 0 0 1 10 4.7V2.9"/><path d="M2.9 10h1.8A1.3 1.3 0 0 1 6 11.3v1.8"/><path d="M13.1 10h-1.8a1.3 1.3 0 0 0-1.3 1.3v1.8"/>'
  ),
  print: tt(
    '<path d="M4.7 5.8V2.9h6.6v2.9"/><path d="M4.7 11.4H3.5a1.3 1.3 0 0 1-1.3-1.3V7.2a1.4 1.4 0 0 1 1.4-1.4h8.8a1.4 1.4 0 0 1 1.4 1.4v2.9a1.3 1.3 0 0 1-1.3 1.3h-1.2"/><path d="M4.7 9.5h6.6v3.6H4.7z"/>'
  ),
  search: tt('<circle cx="7.2" cy="7.2" r="4.4"/><path d="M13.5 13.5l-3.2-3.2"/>')
};
function xt(e, n) {
  var t;
  return ((t = e.icons) == null ? void 0 : t[n]) ?? oi[n];
}
var wd = [
  ["previous", "next", "queue"],
  ["zoom-out", "zoom-in", "zoom-reset", "rotate-left", "rotate-right"],
  ["download", "fullscreen", "print"]
], ur = {
  "zh-CN": {
    ariaLabel: "文件预览工具栏",
    labels: {
      previous: "上一个",
      next: "下一个",
      queue: "",
      "zoom-out": "-",
      "zoom-in": "+",
      "zoom-reset": "100%",
      "rotate-left": "左旋",
      "rotate-right": "旋转",
      download: "下载",
      fullscreen: "全屏",
      "exit-fullscreen": "退出全屏",
      print: "打印",
      search: "搜索"
    },
    titles: {
      previous: "上一个文件",
      next: "下一个文件",
      queue: "当前文件位置",
      "zoom-out": "缩小",
      "zoom-in": "放大",
      "zoom-reset": "重置缩放",
      "rotate-left": "向左旋转",
      "rotate-right": "向右旋转",
      download: "下载文件",
      fullscreen: "全屏查看预览",
      "exit-fullscreen": "退出全屏",
      print: "打印预览",
      search: "搜索预览文本"
    }
  },
  "en-US": {
    ariaLabel: "File preview toolbar",
    labels: {
      previous: "Prev",
      next: "Next",
      queue: "",
      "zoom-out": "-",
      "zoom-in": "+",
      "zoom-reset": "100%",
      "rotate-left": "Rotate left",
      "rotate-right": "Rotate",
      download: "Download",
      fullscreen: "Fullscreen",
      "exit-fullscreen": "Exit fullscreen",
      print: "Print",
      search: "Search"
    },
    titles: {
      previous: "Previous file",
      next: "Next file",
      queue: "Current file position",
      "zoom-out": "Zoom out",
      "zoom-in": "Zoom in",
      "zoom-reset": "Reset zoom",
      "rotate-left": "Rotate left",
      "rotate-right": "Rotate right",
      download: "Download file",
      fullscreen: "Open preview fullscreen",
      "exit-fullscreen": "Exit fullscreen",
      print: "Print preview",
      search: "Search preview text"
    }
  }
};
function Ge(e, n, t) {
  var r;
  return ((r = e.labels) == null ? void 0 : r[t]) ?? ur[n].labels[t];
}
function je(e, n, t) {
  var r, a;
  return ((r = e.titles) == null ? void 0 : r[t]) ?? ((a = e.labels) == null ? void 0 : a[t]) ?? ur[n].titles[t];
}
function Yo(e) {
  return `${Math.round(e * 100)}%`;
}
function Ed(e, n) {
  if (e.order)
    return e.order;
  const t = [];
  return n > 1 && t.push("previous", "next", "queue"), e.zoom && t.push("zoom-out", "zoom-in", "zoom-reset"), e.rotate && t.push("rotate-left", "rotate-right"), e.download !== !1 && t.push("download"), e.fullscreen !== !1 && t.push("fullscreen"), e.print && t.push("print"), e.search !== !1 && t.push("search"), t;
}
function Id(e) {
  return e.order || !e.actions ? [] : [...e.actions].sort((n, t) => (n.order ?? 0) - (t.order ?? 0));
}
function ja(e, n) {
  return typeof e == "function" ? e(n) : !!e;
}
function Gr(e, n, t, r = !1) {
  if (e.replaceChildren(), e.classList.toggle("ofv-toolbar-icon-button", !!t && r), !t) {
    e.textContent = n;
    return;
  }
  const a = document.createElement("span");
  a.className = "ofv-toolbar-icon", a.setAttribute("aria-hidden", "true"), typeof t == "string" ? a.append(Go(t)) : a.append(t.cloneNode(!0));
  const i = document.createElement("span");
  i.className = "ofv-toolbar-label", i.textContent = n, e.append(a, i);
}
var vd = /* @__PURE__ */ new Set([
  "svg",
  "g",
  "path",
  "circle",
  "rect",
  "line",
  "polyline",
  "polygon",
  "ellipse",
  "defs",
  "title",
  "desc"
]), Za = /* @__PURE__ */ new Set([
  "aria-hidden",
  "class",
  "cx",
  "cy",
  "d",
  "fill",
  "focusable",
  "height",
  "id",
  "points",
  "r",
  "rx",
  "ry",
  "stroke",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-width",
  "transform",
  "viewBox",
  "width",
  "x",
  "x1",
  "x2",
  "y",
  "y1",
  "y2"
]);
function Go(e) {
  const n = document.createElement("template");
  n.innerHTML = e.trim();
  const t = document.createDocumentFragment();
  for (const r of Array.from(n.content.childNodes)) {
    const a = jo(r);
    a && t.append(a);
  }
  return t;
}
function jo(e) {
  if (e.nodeType === Node.TEXT_NODE) {
    const r = e.textContent || "";
    return r.trim() ? document.createTextNode(r) : null;
  }
  if (!(e instanceof Element))
    return null;
  const n = e.tagName.toLowerCase();
  if (!vd.has(n))
    return null;
  const t = document.createElementNS("http://www.w3.org/2000/svg", n);
  for (const r of Array.from(e.attributes))
    yd(r.name, r.value) && t.setAttribute(r.name, r.value);
  for (const r of Array.from(e.childNodes)) {
    const a = jo(r);
    a && t.append(a);
  }
  return t;
}
function yd(e, n) {
  const t = e.toLowerCase();
  return t.startsWith("on") || t.includes(":") || !Za.has(e) && !Za.has(t) && !t.startsWith("data-") ? !1 : !/^\s*(?:javascript|data:text\/html|vbscript):/i.test(n);
}
function xd(e) {
  return e in ur["en-US"].labels;
}
function Bd(e) {
  const n = "ofv-search-match", t = () => {
    const a = jr(e).flatMap((i) => [
      ...i.querySelectorAll(`mark.${n}`)
    ]);
    for (const i of a)
      i.replaceWith(document.createTextNode(i.textContent || ""));
    jr(e).forEach((i) => i.normalize());
  };
  return { search: (a) => {
    var l;
    t();
    const i = a.trim();
    if (!i)
      return 0;
    const s = jr(e).flatMap((A) => kd(A));
    let o = 0, d;
    for (const A of s) {
      const b = A.nodeValue || "", _ = b.toLowerCase(), f = i.toLowerCase();
      let g = 0, p = _.indexOf(f, g);
      if (p < 0)
        continue;
      const m = document.createDocumentFragment();
      for (; p >= 0; ) {
        p > g && m.append(document.createTextNode(b.slice(g, p)));
        const u = document.createElement("mark");
        u.className = n, u.textContent = b.slice(p, p + i.length), m.append(u), d || (d = u), o += 1, g = p + i.length, p = _.indexOf(f, g);
      }
      g < b.length && m.append(document.createTextNode(b.slice(g))), A.replaceWith(m);
    }
    return (l = d == null ? void 0 : d.scrollIntoView) == null || l.call(d, { block: "center", inline: "nearest" }), o;
  }, clear: t };
}
function jr(e) {
  var t;
  const n = [e];
  for (const r of e.querySelectorAll("iframe"))
    try {
      const a = (t = r.contentDocument) == null ? void 0 : t.body;
      a && n.push(a);
    } catch {
    }
  return n;
}
function kd(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
    acceptNode(a) {
      var s;
      const i = a.parentElement;
      return !i || !((s = a.nodeValue) != null && s.trim()) || ["SCRIPT", "STYLE", "TEXTAREA", "INPUT", "BUTTON"].includes(i.tagName) || Sd(i, e) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  let r = t.nextNode();
  for (; r; )
    n.push(r), r = t.nextNode();
  return n;
}
function Sd(e, n) {
  let t = e;
  for (; t; ) {
    if (t.hidden || t.getAttribute("aria-hidden") === "true" || t.style.display === "none" || t.style.visibility === "hidden")
      return !0;
    if (t === n)
      break;
    t = t.parentElement;
  }
  return !1;
}
var Qd = 15e3, Dd = 5 * 6e4;
function Td(e) {
  var C;
  const n = document.createElement("iframe");
  n.className = "ofv-print-frame", n.setAttribute("aria-hidden", "true"), document.body.append(n);
  const t = e.cloneNode(!0);
  Od(e, t), t.classList.add("ofv-print-root", "ofv-root");
  const r = e.querySelector(".ofv-docx-page-frame > section.ofv-docx"), a = r ? getComputedStyle(r) : void 0, i = Number.parseFloat((a == null ? void 0 : a.width) || ""), s = Number.parseFloat((a == null ? void 0 : a.height) || ""), o = Number.isFinite(i) && Number.isFinite(s) ? `size: ${i}px ${s}px;` : "", d = t.querySelector(".ofv-pptx-viewer") || (t.classList.contains("ofv-pptx-viewer") ? t : null);
  let l = 960, A = 540, b = !1;
  if (d) {
    const v = d.querySelectorAll("[data-slide-index]");
    if (v.length > 0) {
      b = !0;
      const y = v[0].firstElementChild, k = y == null ? void 0 : y.firstElementChild;
      k && (l = parseInt(k.style.width) || 960, A = parseInt(k.style.height) || 540), v.forEach((O) => {
        const S = O;
        S.style.width = "100%", S.style.margin = "0 0 20px 0";
        const F = S.firstElementChild;
        if (F) {
          F.style.width = `${l}px`, F.style.height = `${A}px`, F.style.boxShadow = "none", F.style.margin = "0 auto";
          const D = F.firstElementChild;
          D && (D.style.transform = "none", D.style.width = `${l}px`, D.style.height = `${A}px`);
        }
      });
    }
  }
  const _ = n.contentDocument;
  if (!_) {
    n.remove();
    return;
  }
  _.open(), _.write(`<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Print preview</title>
      </head>
      <body></body>
    </html>`), _.close(), Array.from(document.querySelectorAll("style, link[rel='stylesheet']")).forEach((v) => {
    _.head.appendChild(v.cloneNode(!0));
  });
  const f = _.createElement("style");
  if (f.textContent = `
    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      background: #fff;
      color: #111827;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    body { padding: 16px; }
    img, video, canvas, svg { max-width: 100%; }
    pre {
      white-space: pre-wrap;
      word-break: break-word;
      font: 12px/1.5 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    }
    .ofv-viewport, .ofv-print-root {
      width: 100% !important;
      height: auto !important;
      overflow: visible !important;
      background: #fff !important;
      color: #111827 !important;
      border: none !important;
      box-shadow: none !important;
    }
    .ofv-pdf {
      padding: 0;
      overflow: visible;
      background: #fff;
    }
    .ofv-pdf-page {
      display: block;
      max-width: 100%;
      height: auto;
      margin: 0 auto 16px;
      box-shadow: none;
    }
    .ofv-panel,
    .ofv-text,
    .ofv-text-block,
    .ofv-file-list {
      max-height: none;
      min-height: 0;
      overflow: visible;
    }
    .ofv-section {
      break-inside: avoid;
      page-break-inside: avoid;
    }
  `, _.head.appendChild(f), r) {
    const v = _.createElement("style");
    v.textContent = `
      @media print {
        @page {
          ${o}
          margin: 0;
        }
        html, body,
        .ofv-print-root,
        .ofv-office-docx,
        .ofv-docx-document {
          width: 100% !important;
          max-width: none !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: visible !important;
        }
        .ofv-office-docx {
          --ofv-office-zoom: 1 !important;
        }
        .ofv-docx-document .ofv-docx-wrapper {
          display: block !important;
          width: 100% !important;
          max-width: none !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: visible !important;
          --ofv-docx-scale: 1 !important;
        }
        .ofv-docx-page-frame {
          display: block !important;
          width: max-content !important;
          max-width: none !important;
          height: auto !important;
          margin: 0 !important;
          break-after: page;
          page-break-after: always;
        }
        .ofv-docx-page-frame:last-child {
          break-after: auto;
          page-break-after: auto;
        }
        .ofv-docx-page-frame > section.ofv-docx {
          max-width: none !important;
          margin: 0 !important;
          box-shadow: none !important;
          transform: none !important;
          break-inside: avoid;
          page-break-inside: avoid;
        }
      }
    `, _.head.appendChild(v);
  }
  if (b) {
    const v = _.createElement("style");
    v.textContent = `
      @media print {
        @page {
          size: ${l > A ? "landscape" : "portrait"};
          margin: 0;
        }
        html, body {
          background: #fff;
        }
        body {
          width: ${l}px !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .ofv-print-root {
          width: ${l}px !important;
          padding: 0 !important;
        }
        .ofv-pptx-viewer {
          width: ${l}px !important;
          padding: 0 !important;
          background: #fff !important;
          overflow: visible !important;
        }
        .ofv-pptx-viewer > div[data-slide-index] {
          page-break-after: always;
          break-after: page;
          break-inside: avoid;
          page-break-inside: avoid;
          margin: 0 !important;
          padding: 0 !important;
          overflow: visible !important;
        }
        .ofv-pptx-viewer > div[data-slide-index]:last-child {
          page-break-after: avoid;
          break-after: avoid;
        }
      }
    `, _.head.appendChild(v);
  }
  _.body.append(t);
  const g = n.contentWindow;
  if (!g) {
    n.remove();
    return;
  }
  let p = !1, m;
  const u = () => {
    var v;
    p || (p = !0, window.clearTimeout(m), (v = g.removeEventListener) == null || v.call(g, "afterprint", u), n.remove());
  };
  (C = g.addEventListener) == null || C.call(g, "afterprint", u, { once: !0 }), Rd(_).then(() => {
    if (!(p || !n.isConnected)) {
      m = window.setTimeout(u, Dd);
      try {
        g.focus(), g.print();
      } catch {
        u();
      }
    }
  });
}
async function Rd(e) {
  var t;
  const n = [];
  for (const r of Array.from(e.images))
    n.push(Nd(r));
  for (const r of Array.from(e.querySelectorAll("link[rel='stylesheet']")))
    n.push(zd(r));
  (t = e.fonts) != null && t.ready && n.push(Promise.resolve(e.fonts.ready).then(() => {
  }, () => {
  })), await Ld(n), e.body.offsetHeight, await new Promise((r) => window.setTimeout(r, 0));
}
function Nd(e) {
  return typeof e.decode == "function" ? e.decode().then(() => {
  }, () => {
  }) : e.complete ? Promise.resolve() : Zo(e);
}
function zd(e) {
  try {
    if (e.sheet)
      return Promise.resolve();
  } catch {
  }
  return Zo(e);
}
function Zo(e) {
  return new Promise((n) => {
    const t = () => {
      e.removeEventListener("load", t), e.removeEventListener("error", t), n();
    };
    e.addEventListener("load", t, { once: !0 }), e.addEventListener("error", t, { once: !0 });
  });
}
function Ld(e) {
  return e.length === 0 ? Promise.resolve() : new Promise((n) => {
    let t = !1;
    const r = () => {
      t || (t = !0, window.clearTimeout(a), n());
    }, a = window.setTimeout(r, Qd);
    Promise.all(e).then(r, r);
  });
}
function Od(e, n) {
  const t = [...e.querySelectorAll("canvas")], r = [...n.querySelectorAll("canvas")];
  t.forEach((a, i) => {
    const s = r[i];
    if (!s)
      return;
    const o = document.createElement("img");
    o.className = s.className, o.alt = "Canvas preview page";
    try {
      o.src = a.toDataURL("image/png");
    } catch {
      return;
    }
    o.width = a.width, o.height = a.height, s.replaceWith(o);
  });
}
function Fd(e) {
  const n = gi(e), t = !!e.url, r = document.createElement("a");
  r.href = n, r.download = e.name, r.rel = "noopener", r.hidden = !0, document.body.append(r), r.click(), window.setTimeout(() => {
    r.remove(), Kt(n, t);
  }, 0);
}
async function Md(e, n) {
  for (const t of e)
    if (await t.match(n))
      return t;
  return Sn();
}
async function jt(e) {
  if (e.source instanceof ArrayBuffer)
    return e.source;
  if (e.blob)
    return e.blob.arrayBuffer();
  if (typeof e.source == "string") {
    const n = await fetch(e.source);
    if (!n.ok)
      throw new Error(`Failed to fetch file: ${n.status}`);
    return n.arrayBuffer();
  }
  throw new Error("Unsupported file source.");
}
function Pd(e = "") {
  const n = document.createElement("div");
  return n.className = `ofv-panel ${e}`.trim(), n;
}
function Ud(e) {
  const n = document.createElement("section");
  n.className = "ofv-section";
  const t = document.createElement("h3");
  return t.textContent = e, n.append(t), n;
}
function Hd(e, n) {
  return e.extension || n[e.mimeType] || "";
}
function Yd(e, n, t = {}) {
  const r = document.createElement("div");
  r.className = "ofv-fallback ofv-encrypted";
  const a = document.createElement("strong");
  a.textContent = t.title || "文件已加密，无法在线预览";
  const i = document.createElement("span");
  i.textContent = t.message || "请下载后在本地输入密码打开，或上传解密后的文件。";
  const s = document.createElement("dl");
  s.className = "ofv-fallback-meta ofv-encrypted-meta", Wa(s, "文件", e.name || "未命名文件"), Wa(s, "格式", e.extension ? `.${e.extension}` : e.mimeType || "未知");
  const o = document.createElement("a");
  return o.href = n, o.download = e.name, o.textContent = t.action || "下载文件", r.append(a, i, s, o), r;
}
function Gd(e) {
  const n = e instanceof Error ? e.message : String(e || ""), t = typeof e == "object" && e !== null && "name" in e ? String(e.name) : "";
  return /\b(password|encrypted|encrypt|protected|decrypt|permission|加密|密码|受保护)\b/i.test(`${t} ${n}`);
}
function Wa(e, n, t) {
  const r = document.createElement("dt");
  r.textContent = n;
  const a = document.createElement("dd");
  a.textContent = t, e.append(r, a);
}
Uint8Array.from([137, 80, 78, 71, 13, 10, 26, 10]);
Uint8Array.from([255, 216, 255]);
var jd = /* @__PURE__ */ new Set(["zip", "rar", "7z", "tar", "gz", "tgz", "bz2", "xz"]), Zd = /* @__PURE__ */ new Set([
  "application/zip",
  "application/x-zip-compressed",
  "application/vnd.rar",
  "application/x-rar-compressed",
  "application/x-7z-compressed",
  "application/x-tar",
  "application/gzip",
  "application/x-gzip",
  "application/x-bzip2",
  "application/x-xz"
]), Wd = {
  "application/zip": "zip",
  "application/x-zip-compressed": "zip",
  "application/vnd.rar": "rar",
  "application/x-rar-compressed": "rar",
  "application/x-7z-compressed": "7z",
  "application/x-tar": "tar",
  "application/gzip": "gz",
  "application/x-gzip": "gz",
  "application/x-bzip2": "bz2",
  "application/x-xz": "xz"
};
function Kd() {
  return {
    name: "archive",
    match(e) {
      return jd.has(e.extension) || Zd.has(e.mimeType);
    },
    async render(e) {
      const n = gi(e.file), t = !!e.file.url, r = Pd("ofv-archive");
      e.viewport.append(r);
      const a = Hd(e.file, Wd).toLowerCase();
      let i = [], s = !1, o = null, d = null;
      try {
        if (a === "zip")
          try {
            const Q = await Oi.loadAsync(await jt(e.file), {
              decodeFileName: tu
            });
            i = Object.values(Q.files).map((R) => {
              var E;
              return {
                name: R.name,
                unsafeName: R.unsafeOriginalName,
                size: ((E = R._data) == null ? void 0 : E.uncompressedSize) || 0,
                dir: R.dir,
                read: () => R.async("arraybuffer")
              };
            });
          } catch (Q) {
            if (Gd(Q))
              s = !0;
            else
              throw Q;
          }
        else if (a === "tar")
          i = Kr(await jt(e.file));
        else if (a === "gz" || a === "tgz" || a === "tar.gz") {
          const Q = new Uint8Array(await jt(e.file)), R = qf.ungzip(Q), E = e.file.name.endsWith(".gz") ? e.file.name.slice(0, -3) : e.file.name.endsWith(".tgz") ? e.file.name.slice(0, -4) + ".tar" : e.file.name;
          a === "tgz" || a === "tar.gz" || E.endsWith(".tar") ? i = Kr(hn(R)) : i = [
            {
              name: E,
              size: R.byteLength,
              dir: !1,
              read: async () => hn(R)
            }
          ];
        } else if (a === "bz2") {
          const Q = new Uint8Array(await jt(e.file)), R = await qd(Q);
          i = [
            {
              name: (e.file.name.toLowerCase().endsWith(".bz2") ? e.file.name.slice(0, -4) : e.file.name) || "decompressed",
              size: R.byteLength,
              dir: !1,
              read: async () => hn(R)
            }
          ];
        } else if (a === "xz") {
          const Q = new Uint8Array(await jt(e.file)), R = await Xd(Q), E = eu(e.file.name, ".xz", "decompressed");
          E.toLowerCase().endsWith(".tar") || e.file.name.toLowerCase().endsWith(".txz") ? i = Kr(hn(R)) : i = [
            {
              name: E,
              size: R.byteLength,
              dir: !1,
              read: async () => hn(R)
            }
          ];
        } else ["rar", "7z"].includes(a) ? d = lu(await jt(e.file), a) : o = `该格式 (.${a.toUpperCase()}) 目前暂不支持直接在浏览器端在线解压和目录预览。`;
      } catch (Q) {
        o = `压缩包解析失败：${Q.message || Q}`;
      }
      if (s) {
        const Q = Yd(e.file, n, {
          title: "压缩包已加密，无法在线预览",
          message: "请下载后在本地输入密码解压，或上传解密后的压缩包。",
          action: "下载压缩包"
        });
        return r.append(Q), e.viewport.classList.add("ofv-center"), {
          destroy() {
            e.viewport.classList.remove("ofv-center"), Kt(n, t), r.remove();
          }
        };
      }
      if (d)
        return su(r, d, e.file.name, n), {
          destroy() {
            Kt(n, t), r.remove();
          }
        };
      if (o) {
        const Q = document.createElement("div");
        Q.className = "ofv-fallback";
        const R = document.createElement("strong");
        R.textContent = o;
        const E = document.createElement("span");
        E.textContent = "建议下载视频/文档等文件至本地查看，或使用原生解压工具提取内容。";
        const z = document.createElement("a");
        return z.href = n, z.download = e.file.name, z.textContent = "下载压缩包", Q.append(R, E, z), r.append(Q), e.viewport.classList.add("ofv-center"), {
          destroy() {
            e.viewport.classList.remove("ofv-center"), Kt(n, t), r.remove();
          }
        };
      }
      const l = document.createElement("div");
      l.className = "ofv-archive-layout";
      const A = document.createElement("div");
      A.className = "ofv-archive-sidebar";
      const b = document.createElement("div");
      b.className = "ofv-archive-sidebar-panel";
      const _ = document.createElement("div");
      _.className = "ofv-archive-header";
      const f = document.createElement("span");
      f.className = "ofv-archive-header-title", f.textContent = `文件列表 (${i.filter((Q) => !Q.dir).length})`;
      const g = document.createElement("button");
      g.className = "ofv-archive-sidebar-toggle", g.type = "button", g.setAttribute("aria-label", "展开文件列表"), g.setAttribute("aria-expanded", "false"), g.title = "展开文件列表", g.textContent = "‹", _.append(g, f), b.append(_);
      const p = document.createElement("div");
      p.className = "ofv-archive-tree", b.append(p), A.append(b);
      const m = document.createElement("div");
      m.className = "ofv-archive-main", l.append(A, m), r.append(l);
      let u = null;
      const C = () => e.viewport.clientWidth || e.size.width, v = () => C() <= 520, y = (Q) => {
        l.classList.toggle("is-sidebar-collapsed", Q), g.setAttribute("aria-expanded", String(!Q));
        const R = Q ? "展开文件列表" : "收起文件列表";
        g.setAttribute("aria-label", R), g.title = R, g.textContent = Q ? "›" : "‹";
      };
      y(!1), g.addEventListener("click", () => {
        y(!l.classList.contains("is-sidebar-collapsed"));
      });
      const k = (Q = !0) => {
        m.replaceChildren();
        const R = document.createElement("div");
        R.className = "ofv-archive-info", Q && nu(R);
        const E = document.createElement("h3");
        E.textContent = e.file.name;
        const z = document.createElement("div");
        z.className = "ofv-archive-info-meta";
        const h = i.filter((re) => !re.dir).length, U = i.filter((re) => re.dir).length;
        Dt(z, "格式类型", `.${a.toUpperCase()} 压缩文件`), Dt(z, "包含文件数", `${h} 个`), Dt(z, "包含目录数", `${U} 个`), Dt(
          z,
          "操作提示",
          h === 0 ? "压缩包内没有可预览的文件。" : "请点击左侧栏中的文件进行联动预览。"
        ), R.append(E, z, ru(i)), m.append(R);
      }, O = i.filter((Q) => !Q.dir).slice(0, 500);
      k(O.length > 0);
      let S = !1, F = 0;
      const D = async (Q, R) => {
        var z, h, U, re, K;
        if (S)
          return;
        v() && y(!0);
        const E = ++F;
        A.querySelectorAll(".ofv-archive-item").forEach((ie) => {
          ie.classList.remove("is-active"), ie.removeAttribute("aria-current");
        }), R.classList.add("is-active"), R.setAttribute("aria-current", "true"), u && (u.destroy(), u = null, (z = e.toolbar) == null || z.refreshCommandSupport()), m.replaceChildren(ou(Q.name.split("/").pop() || Q.name));
        try {
          let ie = await Q.read();
          if (S || E !== F)
            return;
          const G = Q.name.split("/").pop() || Q.name;
          if ((((h = G.split(".").pop()) == null ? void 0 : h.toLowerCase()) || "") === "shp") {
            const oe = Q.name.slice(0, -4), ue = i.find((ge) => ge.name.toLowerCase() === oe.toLowerCase() + ".dbf"), Ee = i.find((ge) => ge.name.toLowerCase() === oe.toLowerCase() + ".shx");
            if (ue && Ee) {
              const ge = i.find((Re) => Re.name.toLowerCase() === oe.toLowerCase() + ".prj"), ke = new Oi();
              if (ke.file(G, ie), ke.file(ue.name.split("/").pop(), await ue.read()), ke.file(Ee.name.split("/").pop(), await Ee.read()), ge && ke.file(ge.name.split("/").pop(), await ge.read()), ie = await ke.generateAsync({ type: "arraybuffer" }), S || E !== F)
                return;
            }
          }
          const P = document.createElement("div");
          P.style.cssText = "width: 100%; height: 100%; position: relative; display: flex; flex-direction: column;", m.replaceChildren(P);
          const B = document.createElement("div");
          B.className = "ofv-viewport", B.style.cssText = "flex: 1; width: 100%; height: 100%; position: relative; overflow: auto;", P.append(B);
          const $ = await Ho(ie, G), H = [...e.options.plugins || [], Sn()];
          let W = await Jd(H, $);
          if (S || E !== F)
            return;
          W.name === "archive" && (W = Sn());
          let le;
          const ce = await Promise.resolve().then(
            () => W.render({
              host: e.host,
              viewport: B,
              file: $,
              size: { width: B.clientWidth || 600, height: B.clientHeight || 400 },
              options: e.options,
              toolbar: e.toolbar,
              setLoading: () => {
              },
              setError: (oe) => {
                le = oe instanceof Error ? oe : new Error(String(oe)), B.replaceChildren(Wr("文件预览失败", le.message));
              }
            })
          ).catch((oe) => {
            le = oe instanceof Error ? oe : new Error(String(oe)), B.replaceChildren(Wr("文件预览失败", le.message));
          });
          if (S || E !== F) {
            ce == null || ce.destroy();
            return;
          }
          ce && !le ? (u = ce, (U = e.toolbar) == null || U.refreshCommandSupport()) : ce && (ce.destroy(), (re = e.toolbar) == null || re.refreshCommandSupport());
        } catch (ie) {
          if (S || E !== F)
            return;
          u = null, (K = e.toolbar) == null || K.refreshCommandSupport(), m.replaceChildren(Wr("解压加载失败", String(ie.message || ie)));
        }
      };
      return O.forEach((Q, R) => {
        const E = document.createElement("button");
        E.className = "ofv-archive-item", E.type = "button", E.title = Q.name;
        const z = document.createElement("span");
        z.className = "ofv-archive-item-icon", z.textContent = hu(Q.name, Q.dir);
        const h = document.createElement("span");
        h.className = "ofv-archive-item-name", h.textContent = Q.name, h.title = Q.name, E.append(z, h), p.append(E), E.addEventListener("click", async () => {
          await D(Q, E);
        }), R === 0 && D(Q, E);
      }), {
        canCommand(Q) {
          var R;
          return ((R = u == null ? void 0 : u.canCommand) == null ? void 0 : R.call(u, Q)) ?? !1;
        },
        command(Q) {
          var R;
          return ((R = u == null ? void 0 : u.command) == null ? void 0 : R.call(u, Q)) ?? !1;
        },
        preparePrint() {
          var Q;
          return (Q = u == null ? void 0 : u.preparePrint) == null ? void 0 : Q.call(u);
        },
        resize(Q) {
          var R;
          (R = u == null ? void 0 : u.resize) == null || R.call(u, Q);
        },
        destroy() {
          S = !0, F += 1, u && u.destroy(), Kt(n, t), r.remove();
        }
      };
    }
  };
}
async function Jd(e, n) {
  for (const t of e)
    if (await t.match(n))
      return t;
  return Sn();
}
async function qd(e) {
  const n = $d();
  try {
    const t = await Promise.resolve().then(() => Qu), a = (t.default || t).decode(e);
    return a instanceof Uint8Array ? a : a instanceof ArrayBuffer ? new Uint8Array(a) : Uint8Array.from(a);
  } finally {
    n();
  }
}
function $d() {
  const e = globalThis;
  if (typeof e.Buffer == "function")
    return () => {
    };
  class n extends Uint8Array {
    copy(r, a = 0, i = 0, s = this.length) {
      const o = this.subarray(i, s);
      return r.set(o, a), o.length;
    }
    toString(r) {
      return r === "hex" ? Array.from(this).map((a) => a.toString(16).padStart(2, "0")).join("") : new TextDecoder().decode(this);
    }
  }
  return e.Buffer = n, () => {
    e.Buffer === n && Reflect.deleteProperty(e, "Buffer");
  };
}
async function Xd(e) {
  var a;
  const n = await Promise.resolve().then(() => zu), t = n.XzReadableStream || ((a = n.default) == null ? void 0 : a.XzReadableStream);
  if (typeof t != "function")
    throw new Error("XZ 解码器不可用。");
  const r = new Response(new t(Vd(e)));
  return new Uint8Array(await r.arrayBuffer());
}
function Vd(e) {
  const n = new Blob([e]);
  return typeof n.stream == "function" ? n.stream() : new ReadableStream({
    start(t) {
      t.enqueue(e), t.close();
    }
  });
}
function eu(e, n, t) {
  return e.toLowerCase().endsWith(n) ? e.slice(0, -n.length) || t : e || t;
}
function hn(e) {
  const n = new Uint8Array(e.byteLength);
  return n.set(e), n.buffer;
}
function tu(e) {
  const n = Array.isArray(e) ? Uint8Array.from(e.map((a) => a.charCodeAt(0) & 255)) : e instanceof Uint8Array ? e : Uint8Array.from(e), t = Zr(n, "utf-8", !0);
  if (t && !Ka(t))
    return t;
  const r = Zr(n, "gb18030", !1) || Zr(n, "gbk", !1);
  return r && !Ka(r) ? r : t || new TextDecoder("latin1").decode(n);
}
function Zr(e, n, t) {
  try {
    return new TextDecoder(n, { fatal: t }).decode(e);
  } catch {
    return;
  }
}
function Ka(e) {
  return /[\uFFFDÃÂÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß]/.test(e);
}
function Wr(e, n) {
  const t = document.createElement("div");
  t.className = "ofv-fallback";
  const r = document.createElement("strong");
  r.textContent = e;
  const a = document.createElement("span");
  return a.textContent = n, t.append(r, a), t;
}
function Dt(e, n, t) {
  const r = document.createElement("div"), a = document.createElement("strong");
  a.textContent = `${n}：`, r.append(a, document.createTextNode(t)), e.append(r);
}
function nu(e) {
  e.hidden = !0, e.setAttribute("aria-hidden", "true"), e.style.display = "none";
}
function ru(e) {
  const n = e.filter((i) => !i.dir), t = document.createElement("dl");
  t.className = "ofv-archive-summary";
  const r = n.reduce((i, s) => i + s.size, 0), a = n.reduce((i, s) => !i || s.size > i.size ? s : i, void 0);
  return pn(t, "总解压大小", lr(r)), pn(t, "最大文件", a ? `${a.name} · ${lr(a.size)}` : "无"), pn(t, "类型分布", iu(n)), pn(t, "可预览条目", String(n.slice(0, 500).length)), pn(t, "风险路径", String(n.filter((i) => au(i.unsafeName || i.name)).length)), t;
}
function pn(e, n, t) {
  const r = document.createElement("dt");
  r.textContent = n;
  const a = document.createElement("dd");
  a.textContent = t, e.append(r, a);
}
function iu(e) {
  const n = /* @__PURE__ */ new Map();
  for (const t of e) {
    const r = t.name.split("/").pop() || t.name, a = r.lastIndexOf("."), i = a > 0 ? r.slice(a + 1).toLowerCase() : "(无扩展名)";
    n.set(i, (n.get(i) || 0) + 1);
  }
  return [...n.entries()].sort((t, r) => r[1] - t[1] || t[0].localeCompare(r[0])).slice(0, 6).map(([t, r]) => `${t} ${r}`).join(", ") || "无";
}
function au(e) {
  return e.startsWith("/") || /^[A-Za-z]:[\\/]/.test(e) || e.split(/[\\/]+/).includes("..");
}
function ou(e) {
  const n = document.createElement("div");
  n.className = "ofv-archive-loading";
  const t = document.createElement("div");
  t.className = "ofv-archive-loading-spinner";
  const r = document.createElement("span");
  return r.textContent = `正在解压并加载 [${e}]...`, n.append(t, r), n;
}
function su(e, n, t, r) {
  const a = Ud(`${n.format} 结构预览`), i = document.createElement("p");
  i.textContent = n.note;
  const s = document.createElement("div");
  s.className = "ofv-archive-probe-meta", Dt(s, "文件", t), Dt(s, "格式", n.format);
  for (const d of n.meta)
    Dt(s, d.label, d.value);
  const o = document.createElement("a");
  if (o.className = "ofv-asset-download", o.href = r, o.download = t, o.textContent = "下载压缩包", a.append(i, s, o), !n.valid) {
    const d = document.createElement("p");
    d.className = "ofv-data-error", d.textContent = n.error || "压缩包头信息无法识别。", a.append(d);
  }
  if (n.entries.length > 0) {
    const d = document.createElement("div");
    d.className = "ofv-table-scroll ofv-archive-probe-table";
    const l = document.createElement("table"), A = document.createElement("thead"), b = document.createElement("tr");
    for (const f of ["文件", "原始大小", "压缩大小"]) {
      const g = document.createElement("th");
      g.textContent = f, b.append(g);
    }
    A.append(b);
    const _ = document.createElement("tbody");
    for (const f of n.entries.slice(0, 200)) {
      const g = document.createElement("tr");
      for (const p of [
        f.name,
        f.size === void 0 ? "未知" : lr(f.size),
        f.packedSize === void 0 ? "未知" : lr(f.packedSize)
      ]) {
        const m = document.createElement("td");
        m.textContent = p, g.append(m);
      }
      _.append(g);
    }
    l.append(A, _), d.append(l), a.append(d);
  }
  e.append(a);
}
function lu(e, n) {
  const t = new Uint8Array(e);
  return n === "rar" ? cu(t) : n === "7z" ? du(t) : n === "bz2" ? uu(t) : n === "xz" ? Au(t) : {
    format: n.toUpperCase(),
    valid: !1,
    error: "暂不支持该压缩格式的头信息解析。",
    meta: [],
    entries: [],
    note: "当前仅提供压缩包识别和下载入口。"
  };
}
function cu(e) {
  const n = e.length >= 7 && e[0] === 82 && e[1] === 97 && e[2] === 114 && e[3] === 33 && e[4] === 26 && e[5] === 7 && e[6] === 0, t = e.length >= 8 && e[0] === 82 && e[1] === 97 && e[2] === 114 && e[3] === 33 && e[4] === 26 && e[5] === 7 && e[6] === 1 && e[7] === 0, r = n ? fu(e) : [];
  return {
    format: "RAR",
    valid: n || t,
    error: n || t ? void 0 : "缺少 RAR signature。",
    meta: [
      { label: "版本", value: t ? "RAR5" : n ? "RAR4" : "未知" },
      { label: "签名", value: Ar(e) },
      { label: "可见条目", value: String(r.length) }
    ],
    entries: r,
    note: n ? "当前轻量读取 RAR4 未加密文件头，用于目录确认；实际解压仍建议接入 unrar WASM 或本地工具。" : "当前识别 RAR 容器和版本；RAR5 目录解析需要专用解码器。"
  };
}
function fu(e) {
  const n = new DataView(e.buffer, e.byteOffset, e.byteLength), t = [];
  let r = 7;
  for (; r + 7 <= e.length && t.length < 200; ) {
    const a = e[r + 2], i = n.getUint16(r + 3, !0);
    let s = n.getUint16(r + 5, !0);
    if (s < 7 || r + s > e.length)
      break;
    if (i & 32768) {
      if (r + 11 > e.length)
        break;
      s += n.getUint32(r + 7, !0);
    }
    if (a === 116 && r + 32 <= e.length) {
      const o = n.getUint32(r + 7, !0), d = n.getUint32(r + 11, !0), l = n.getUint16(r + 26, !0), A = r + 32, b = Math.min(A + l, r + s, e.length), _ = e.slice(A, b), f = new TextDecoder("latin1").decode(_).replace(/\0.*$/, "");
      f && t.push({ name: f, size: d, packedSize: o });
    }
    r += s;
  }
  return t;
}
function du(e) {
  const n = e.length >= 32 && e[0] === 55 && e[1] === 122 && e[2] === 188 && e[3] === 175 && e[4] === 39 && e[5] === 28, t = [{ label: "签名", value: Ar(e) }];
  if (n) {
    const r = new DataView(e.buffer, e.byteOffset, e.byteLength);
    t.push({ label: "版本", value: `${e[6]}.${e[7]}` }), t.push({ label: "Next header offset", value: String(Ja(r, 12)) }), t.push({ label: "Next header size", value: String(Ja(r, 20)) }), t.push({ label: "Next header CRC", value: `0x${r.getUint32(28, !0).toString(16).toUpperCase()}` });
  }
  return {
    format: "7Z",
    valid: n,
    error: n ? void 0 : "缺少 7z signature。",
    meta: t,
    entries: [],
    note: "当前识别 7z 容器和 next header 边界；目录和解压需要 LZMA/7z 专用解码器。"
  };
}
function uu(e) {
  const n = e.length >= 4 && e[0] === 66 && e[1] === 90 && e[2] === 104 && e[3] >= 49 && e[3] <= 57;
  return {
    format: "BZIP2",
    valid: n,
    error: n ? void 0 : "缺少 BZh magic header。",
    meta: [
      { label: "签名", value: Ar(e) },
      { label: "块大小", value: n ? `${String.fromCharCode(e[3])}00 KB` : "未知" }
    ],
    entries: [],
    note: "BZIP2 通常是单文件压缩流，本预览器当前展示容器头信息；解压可后续接入 bzip2 解码器。"
  };
}
function Au(e) {
  const n = e.length >= 6 && e[0] === 253 && e[1] === 55 && e[2] === 122 && e[3] === 88 && e[4] === 90 && e[5] === 0;
  return {
    format: "XZ",
    valid: n,
    error: n ? void 0 : "缺少 XZ magic header。",
    meta: [
      { label: "签名", value: Ar(e) },
      { label: "Stream flags", value: e.length >= 8 ? `0x${e[6].toString(16).padStart(2, "0").toUpperCase()} 0x${e[7].toString(16).padStart(2, "0").toUpperCase()}` : "未知" }
    ],
    entries: [],
    note: "XZ 通常是单文件 LZMA2 压缩流，本预览器当前展示容器头信息；解压可后续接入 xz/lzma 解码器。"
  };
}
function Ja(e, n) {
  return BigInt(e.getUint32(n, !0)) | BigInt(e.getUint32(n + 4, !0)) << 32n;
}
function lr(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(2)} MB`;
}
function Ar(e) {
  if (e.length === 0)
    return "空文件";
  const n = new TextDecoder("ascii").decode(e.slice(0, Math.min(e.length, 16))).replace(/[^\x20-\x7E]/g, "."), t = Array.from(e.slice(0, Math.min(e.length, 8))).map((r) => r.toString(16).padStart(2, "0").toUpperCase()).join(" ");
  return `${n} (${t})`;
}
function Kr(e) {
  const n = [], t = new Uint8Array(e);
  let r = 0;
  const a = (i, s) => {
    let o = i;
    for (; o < i + s && t[o] !== 0; )
      o++;
    return new TextDecoder().decode(t.subarray(i, o)).trim();
  };
  for (; r + 512 <= e.byteLength; ) {
    const i = a(r + 257, 6);
    if (i !== "ustar" && i !== "ustar\0") {
      let g = !0;
      for (let p = 0; p < 512; p++)
        if (t[r + p] !== 0) {
          g = !1;
          break;
        }
      if (g)
        break;
      break;
    }
    const s = a(r, 100), o = a(r + 345, 155), d = o ? `${o}/${s}` : s, l = a(r + 124, 12), A = parseInt(l, 8) || 0, _ = a(r + 156, 1) === "5" || d.endsWith("/"), f = r + 512;
    n.push({
      name: d,
      size: A,
      dir: _,
      read: async () => e.slice(f, f + A)
    }), r += 512 + Math.ceil(A / 512) * 512;
  }
  return n;
}
function hu(e, n) {
  var r;
  if (n) return "📁";
  switch ((r = e.split(".").pop()) == null ? void 0 : r.toLowerCase()) {
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "svg":
    case "webp":
      return "🖼️";
    case "pdf":
      return "📕";
    case "doc":
    case "docx":
      return "📘";
    case "xls":
    case "xlsx":
      return "📗";
    case "ppt":
    case "pptx":
      return "📙";
    case "zip":
    case "rar":
    case "7z":
    case "tar":
    case "gz":
      return "📦";
    case "mp4":
    case "mkv":
    case "avi":
    case "webm":
      return "🎥";
    case "mp3":
    case "wav":
    case "ogg":
      return "🎵";
    case "txt":
    case "md":
    case "html":
    case "js":
    case "ts":
    case "json":
    case "css":
      return "📄";
    default:
      return "📄";
  }
}
Promise.resolve();
var pu = {
  "font/ttf": "ttf",
  "font/otf": "otf",
  "font/woff": "woff",
  "font/woff2": "woff2",
  "application/vnd.ms-fontobject": "eot",
  "image/vnd.adobe.photoshop": "psd",
  "application/postscript": "ps",
  "application/x-webarchive": "webarchive",
  "application/vnd.sqlite3": "sqlite",
  "application/x-sqlite3": "sqlite",
  "application/wasm": "wasm",
  "application/vnd.apache.parquet": "parquet",
  "application/avro": "avro"
};
new Set(Object.keys(pu));
function Ou(e) {
  return ld({ ...e, plugins: [Kd()] });
}
var qa = [0, 1, 3, 7, 15, 31, 63, 127, 255], Ln = function(e) {
  this.stream = e, this.bitOffset = 0, this.curByte = 0, this.hasByte = !1;
};
Ln.prototype._ensureByte = function() {
  this.hasByte || (this.curByte = this.stream.readByte(), this.hasByte = !0);
};
Ln.prototype.read = function(e) {
  for (var n = 0; e > 0; ) {
    this._ensureByte();
    var t = 8 - this.bitOffset;
    if (e >= t)
      n <<= t, n |= qa[t] & this.curByte, this.hasByte = !1, this.bitOffset = 0, e -= t;
    else {
      n <<= e;
      var r = t - e;
      n |= (this.curByte & qa[e] << r) >> r, this.bitOffset += e, e = 0;
    }
  }
  return n;
};
Ln.prototype.seek = function(e) {
  var n = e % 8, t = (e - n) / 8;
  this.bitOffset = n, this.stream.seek(t), this.hasByte = !1;
};
Ln.prototype.pi = function() {
  var e = new Buffer(6), n;
  for (n = 0; n < e.length; n++)
    e[n] = this.read(8);
  return e.toString("hex");
};
var gu = Ln, Ot = function() {
};
Ot.prototype.readByte = function() {
  throw new Error("abstract method readByte() not implemented");
};
Ot.prototype.read = function(e, n, t) {
  for (var r = 0; r < t; ) {
    var a = this.readByte();
    if (a < 0)
      return r === 0 ? -1 : r;
    e[n++] = a, r++;
  }
  return r;
};
Ot.prototype.seek = function(e) {
  throw new Error("abstract method seek() not implemented");
};
Ot.prototype.writeByte = function(e) {
  throw new Error("abstract method readByte() not implemented");
};
Ot.prototype.write = function(e, n, t) {
  var r;
  for (r = 0; r < t; r++)
    this.writeByte(e[n++]);
  return t;
};
Ot.prototype.flush = function() {
};
var mu = Ot, _u = function() {
  var e = new Uint32Array([
    0,
    79764919,
    159529838,
    222504665,
    319059676,
    398814059,
    445009330,
    507990021,
    638119352,
    583659535,
    797628118,
    726387553,
    890018660,
    835552979,
    1015980042,
    944750013,
    1276238704,
    1221641927,
    1167319070,
    1095957929,
    1595256236,
    1540665371,
    1452775106,
    1381403509,
    1780037320,
    1859660671,
    1671105958,
    1733955601,
    2031960084,
    2111593891,
    1889500026,
    1952343757,
    2552477408,
    2632100695,
    2443283854,
    2506133561,
    2334638140,
    2414271883,
    2191915858,
    2254759653,
    3190512472,
    3135915759,
    3081330742,
    3009969537,
    2905550212,
    2850959411,
    2762807018,
    2691435357,
    3560074640,
    3505614887,
    3719321342,
    3648080713,
    3342211916,
    3287746299,
    3467911202,
    3396681109,
    4063920168,
    4143685023,
    4223187782,
    4286162673,
    3779000052,
    3858754371,
    3904687514,
    3967668269,
    881225847,
    809987520,
    1023691545,
    969234094,
    662832811,
    591600412,
    771767749,
    717299826,
    311336399,
    374308984,
    453813921,
    533576470,
    25881363,
    88864420,
    134795389,
    214552010,
    2023205639,
    2086057648,
    1897238633,
    1976864222,
    1804852699,
    1867694188,
    1645340341,
    1724971778,
    1587496639,
    1516133128,
    1461550545,
    1406951526,
    1302016099,
    1230646740,
    1142491917,
    1087903418,
    2896545431,
    2825181984,
    2770861561,
    2716262478,
    3215044683,
    3143675388,
    3055782693,
    3001194130,
    2326604591,
    2389456536,
    2200899649,
    2280525302,
    2578013683,
    2640855108,
    2418763421,
    2498394922,
    3769900519,
    3832873040,
    3912640137,
    3992402750,
    4088425275,
    4151408268,
    4197601365,
    4277358050,
    3334271071,
    3263032808,
    3476998961,
    3422541446,
    3585640067,
    3514407732,
    3694837229,
    3640369242,
    1762451694,
    1842216281,
    1619975040,
    1682949687,
    2047383090,
    2127137669,
    1938468188,
    2001449195,
    1325665622,
    1271206113,
    1183200824,
    1111960463,
    1543535498,
    1489069629,
    1434599652,
    1363369299,
    622672798,
    568075817,
    748617968,
    677256519,
    907627842,
    853037301,
    1067152940,
    995781531,
    51762726,
    131386257,
    177728840,
    240578815,
    269590778,
    349224269,
    429104020,
    491947555,
    4046411278,
    4126034873,
    4172115296,
    4234965207,
    3794477266,
    3874110821,
    3953728444,
    4016571915,
    3609705398,
    3555108353,
    3735388376,
    3664026991,
    3290680682,
    3236090077,
    3449943556,
    3378572211,
    3174993278,
    3120533705,
    3032266256,
    2961025959,
    2923101090,
    2868635157,
    2813903052,
    2742672763,
    2604032198,
    2683796849,
    2461293480,
    2524268063,
    2284983834,
    2364738477,
    2175806836,
    2238787779,
    1569362073,
    1498123566,
    1409854455,
    1355396672,
    1317987909,
    1246755826,
    1192025387,
    1137557660,
    2072149281,
    2135122070,
    1912620623,
    1992383480,
    1753615357,
    1816598090,
    1627664531,
    1707420964,
    295390185,
    358241886,
    404320391,
    483945776,
    43990325,
    106832002,
    186451547,
    266083308,
    932423249,
    861060070,
    1041341759,
    986742920,
    613929101,
    542559546,
    756411363,
    701822548,
    3316196985,
    3244833742,
    3425377559,
    3370778784,
    3601682597,
    3530312978,
    3744426955,
    3689838204,
    3819031489,
    3881883254,
    3928223919,
    4007849240,
    4037393693,
    4100235434,
    4180117107,
    4259748804,
    2310601993,
    2373574846,
    2151335527,
    2231098320,
    2596047829,
    2659030626,
    2470359227,
    2550115596,
    2947551409,
    2876312838,
    2788305887,
    2733848168,
    3165939309,
    3094707162,
    3040238851,
    2985771188
  ]), n = function() {
    var t = 4294967295;
    this.getCRC = function() {
      return ~t >>> 0;
    }, this.updateCRC = function(r) {
      t = t << 8 ^ e[(t >>> 24 ^ r) & 255];
    }, this.updateCRCRun = function(r, a) {
      for (; a-- > 0; )
        t = t << 8 ^ e[(t >>> 24 ^ r) & 255];
    };
  };
  return n;
}();
const bu = "2.0.0", Cu = "MIT", wu = {
  version: bu,
  license: Cu
};
var Eu = gu, Qn = mu, Wo = _u, Ko = wu, rr = 20, $a = 258, Xa = 0, Iu = 1, vu = 2, yu = 6, xu = 50, Bu = "314159265359", ku = "177245385090", Va = function(e, n) {
  var t = e[n], r;
  for (r = n; r > 0; r--)
    e[r] = e[r - 1];
  return e[0] = t, t;
}, we = {
  OK: 0,
  LAST_BLOCK: -1,
  NOT_BZIP_DATA: -2,
  UNEXPECTED_INPUT_EOF: -3,
  UNEXPECTED_OUTPUT_EOF: -4,
  DATA_ERROR: -5,
  OUT_OF_MEMORY: -6,
  OBSOLETE_INPUT: -7,
  END_OF_BLOCK: -8
}, It = {};
It[we.LAST_BLOCK] = "Bad file checksum";
It[we.NOT_BZIP_DATA] = "Not bzip data";
It[we.UNEXPECTED_INPUT_EOF] = "Unexpected input EOF";
It[we.UNEXPECTED_OUTPUT_EOF] = "Unexpected output EOF";
It[we.DATA_ERROR] = "Data error";
It[we.OUT_OF_MEMORY] = "Out of memory";
It[we.OBSOLETE_INPUT] = "Obsolete (pre 0.9.5) bzip format not supported.";
var De = function(e, n) {
  var t = It[e] || "unknown error";
  n && (t += ": " + n);
  var r = new TypeError(t);
  throw r.errorCode = e, r;
}, Me = function(e, n) {
  this.writePos = this.writeCurrent = this.writeCount = 0, this._start_bunzip(e, n);
};
Me.prototype._init_block = function() {
  var e = this._get_next_block();
  return e ? (this.blockCRC = new Wo(), !0) : (this.writeCount = -1, !1);
};
Me.prototype._start_bunzip = function(e, n) {
  var t = new Buffer(4);
  (e.read(t, 0, 4) !== 4 || String.fromCharCode(t[0], t[1], t[2]) !== "BZh") && De(we.NOT_BZIP_DATA, "bad magic");
  var r = t[3] - 48;
  (r < 1 || r > 9) && De(we.NOT_BZIP_DATA, "level out of range"), this.reader = new Eu(e), this.dbufSize = 1e5 * r, this.nextoutput = 0, this.outputStream = n, this.streamCRC = 0;
};
Me.prototype._get_next_block = function() {
  var e, n, t, r = this.reader, a = r.pi();
  if (a === ku)
    return !1;
  a !== Bu && De(we.NOT_BZIP_DATA), this.targetBlockCRC = r.read(32) >>> 0, this.streamCRC = (this.targetBlockCRC ^ (this.streamCRC << 1 | this.streamCRC >>> 31)) >>> 0, r.read(1) && De(we.OBSOLETE_INPUT);
  var i = r.read(24);
  i > this.dbufSize && De(we.DATA_ERROR, "initial position out of bounds");
  var s = r.read(16), o = new Buffer(256), d = 0;
  for (e = 0; e < 16; e++)
    if (s & 1 << 15 - e) {
      var l = e * 16;
      for (t = r.read(16), n = 0; n < 16; n++)
        t & 1 << 15 - n && (o[d++] = l + n);
    }
  var A = r.read(3);
  (A < vu || A > yu) && De(we.DATA_ERROR);
  var b = r.read(15);
  b === 0 && De(we.DATA_ERROR);
  var _ = new Buffer(256);
  for (e = 0; e < A; e++)
    _[e] = e;
  var f = new Buffer(b);
  for (e = 0; e < b; e++) {
    for (n = 0; r.read(1); n++)
      n >= A && De(we.DATA_ERROR);
    f[e] = Va(_, n);
  }
  var g = d + 2, p = [], m;
  for (n = 0; n < A; n++) {
    var u = new Buffer(g), C = new Uint16Array(rr + 1);
    for (s = r.read(5), e = 0; e < g; e++) {
      for (; (s < 1 || s > rr) && De(we.DATA_ERROR), !!r.read(1); )
        r.read(1) ? s-- : s++;
      u[e] = s;
    }
    var v, y;
    for (v = y = u[0], e = 1; e < g; e++)
      u[e] > y ? y = u[e] : u[e] < v && (v = u[e]);
    m = {}, p.push(m), m.permute = new Uint16Array($a), m.limit = new Uint32Array(rr + 2), m.base = new Uint32Array(rr + 1), m.minLen = v, m.maxLen = y;
    var k = 0;
    for (e = v; e <= y; e++)
      for (C[e] = m.limit[e] = 0, s = 0; s < g; s++)
        u[s] === e && (m.permute[k++] = s);
    for (e = 0; e < g; e++)
      C[u[e]]++;
    for (k = s = 0, e = v; e < y; e++)
      k += C[e], m.limit[e] = k - 1, k <<= 1, s += C[e], m.base[e + 1] = k - s;
    m.limit[y + 1] = Number.MAX_VALUE, m.limit[y] = k + C[y] - 1, m.base[v] = 0;
  }
  var O = new Uint32Array(256);
  for (e = 0; e < 256; e++)
    _[e] = e;
  var S = 0, F = 0, D = 0, Q, R = this.dbuf = new Uint32Array(this.dbufSize);
  for (g = 0; ; ) {
    for (g-- || (g = xu - 1, D >= b && De(we.DATA_ERROR), m = p[f[D++]]), e = m.minLen, n = r.read(e); e > m.maxLen && De(we.DATA_ERROR), !(n <= m.limit[e]); e++)
      n = n << 1 | r.read(1);
    n -= m.base[e], (n < 0 || n >= $a) && De(we.DATA_ERROR);
    var E = m.permute[n];
    if (E === Xa || E === Iu) {
      S || (S = 1, s = 0), E === Xa ? s += S : s += 2 * S, S <<= 1;
      continue;
    }
    if (S)
      for (S = 0, F + s > this.dbufSize && De(we.DATA_ERROR), Q = o[_[0]], O[Q] += s; s--; )
        R[F++] = Q;
    if (E > d)
      break;
    F >= this.dbufSize && De(we.DATA_ERROR), e = E - 1, Q = Va(_, e), Q = o[Q], O[Q]++, R[F++] = Q;
  }
  for ((i < 0 || i >= F) && De(we.DATA_ERROR), n = 0, e = 0; e < 256; e++)
    t = n + O[e], O[e] = n, n = t;
  for (e = 0; e < F; e++)
    Q = R[e] & 255, R[O[Q]] |= e << 8, O[Q]++;
  var z = 0, h = 0, U = 0;
  return F && (z = R[i], h = z & 255, z >>= 8, U = -1), this.writePos = z, this.writeCurrent = h, this.writeCount = F, this.writeRun = U, !0;
};
Me.prototype._read_bunzip = function(e, n) {
  var t, r, a;
  if (this.writeCount < 0)
    return 0;
  var i = this.dbuf, s = this.writePos, o = this.writeCurrent, d = this.writeCount;
  this.outputsize;
  for (var l = this.writeRun; d; ) {
    for (d--, r = o, s = i[s], o = s & 255, s >>= 8, l++ === 3 ? (t = o, a = r, o = -1) : (t = 1, a = o), this.blockCRC.updateCRCRun(a, t); t--; )
      this.outputStream.writeByte(a), this.nextoutput++;
    o != r && (l = 0);
  }
  return this.writeCount = d, this.blockCRC.getCRC() !== this.targetBlockCRC && De(we.DATA_ERROR, "Bad block CRC (got " + this.blockCRC.getCRC().toString(16) + " expected " + this.targetBlockCRC.toString(16) + ")"), this.nextoutput;
};
var mi = function(e) {
  if ("readByte" in e)
    return e;
  var n = new Qn();
  return n.pos = 0, n.readByte = function() {
    return e[this.pos++];
  }, n.seek = function(t) {
    this.pos = t;
  }, n.eof = function() {
    return this.pos >= e.length;
  }, n;
}, Jo = function(e) {
  var n = new Qn(), t = !0;
  if (e)
    if (typeof e == "number")
      n.buffer = new Buffer(e), t = !1;
    else {
      if ("writeByte" in e)
        return e;
      n.buffer = e, t = !1;
    }
  else
    n.buffer = new Buffer(16384);
  return n.pos = 0, n.writeByte = function(r) {
    if (t && this.pos >= this.buffer.length) {
      var a = new Buffer(this.buffer.length * 2);
      this.buffer.copy(a), this.buffer = a;
    }
    this.buffer[this.pos++] = r;
  }, n.getBuffer = function() {
    if (this.pos !== this.buffer.length) {
      if (!t)
        throw new TypeError("outputsize does not match decoded input");
      var r = new Buffer(this.pos);
      this.buffer.copy(r, 0, 0, this.pos), this.buffer = r;
    }
    return this.buffer;
  }, n._coerced = !0, n;
};
Me.Err = we;
Me.decode = function(e, n, t) {
  for (var r = mi(e), a = Jo(n), i = new Me(r, a); !("eof" in r && r.eof()); )
    if (i._init_block())
      i._read_bunzip();
    else {
      var s = i.reader.read(32) >>> 0;
      if (s !== i.streamCRC && De(we.DATA_ERROR, "Bad stream CRC (got " + i.streamCRC.toString(16) + " expected " + s.toString(16) + ")"), t && "eof" in r && !r.eof())
        i._start_bunzip(r, a);
      else break;
    }
  if ("getBuffer" in a)
    return a.getBuffer();
};
Me.decodeBlock = function(e, n, t) {
  var r = mi(e), a = Jo(t), i = new Me(r, a);
  i.reader.seek(n);
  var s = i._get_next_block();
  if (s && (i.blockCRC = new Wo(), i.writeCopies = 0, i._read_bunzip()), "getBuffer" in a)
    return a.getBuffer();
};
Me.table = function(e, n, t) {
  var r = new Qn();
  r.delegate = mi(e), r.pos = 0, r.readByte = function() {
    return this.pos++, this.delegate.readByte();
  }, r.delegate.eof && (r.eof = r.delegate.eof.bind(r.delegate));
  var a = new Qn();
  a.pos = 0, a.writeByte = function() {
    this.pos++;
  };
  for (var i = new Me(r, a), s = i.dbufSize; !("eof" in r && r.eof()); ) {
    var o = r.pos * 8 + i.reader.bitOffset;
    if (i.reader.hasByte && (o -= 8), i._init_block()) {
      var d = a.pos;
      i._read_bunzip(), n(o, a.pos - d);
    } else if (i.reader.read(32), t && "eof" in r && !r.eof())
      i._start_bunzip(r, a), console.assert(
        i.dbufSize === s,
        "shouldn't change block size within multistream file"
      );
    else break;
  }
};
Me.Stream = Qn;
Me.version = Ko.version;
Me.license = Ko.license;
var qo = Me;
const Su = /* @__PURE__ */ si(qo), Qu = /* @__PURE__ */ eo({
  __proto__: null,
  default: Su
}, [qo]);
var $o = { exports: {} };
const Du = {}, Tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Du
}, Symbol.toStringTag, { value: "Module" })), Ru = /* @__PURE__ */ _s(Tu);
/*!
 * Based on xzwasm (c) Steve Sanderson. License: MIT - https://github.com/SteveSanderson/xzwasm
 * Contains xz-embedded by Lasse Collin and Igor Pavlov. License: Public domain - https://tukaani.org/xz/embedded.html
 * and walloc (c) 2020 Igalia, S.L. License: MIT - https://github.com/wingo/walloc
 */
(function(e, n) {
  (function(r, a) {
    e.exports = a(Ru);
  })(ms, (t) => (
    /******/
    (() => {
      var r = [
        ,
        /* 1 */
        /***/
        (o) => {
          o.exports = "data:application/wasm;base64,AGFzbQEAAAABOApgAX8Bf2ABfwBgAABgA39/fwF/YAABf2ACf38AYAN/f34BfmACf38Bf2AEf39/fwF/YAN/f38AAyEgAAABAgMDAwMEAQUAAgMCBgcIBwUDAAMHAQcABwcBAwkFAwEAAgYIAX8BQfCgBAsHTgUGbWVtb3J5AgAOY3JlYXRlX2NvbnRleHQACA9kZXN0cm95X2NvbnRleHQACQxzdXBwbHlfaW5wdXQACg9nZXRfbmV4dF9vdXRwdXQACwqQYCDfAgEFf0EAIQECQCAAQQdqIgJBEEkNAEEBIQEgAkEDdiIDQQJGDQBBAiEBIAJBIEkNAEEDIQEgA0EERg0AQQQhASACQTBJDQBBBSEBIANBBkYNAEEGIQEgAkHIAEkNAEEHIQEgAkHYAEkNAEEIIQEgAkGIAUkNAEEJIQEgAkGIAkkNACAAEIGAgIAAIgBBCGpBACAAGw8LAkACQCABQQJ0QcCIgIAAaiIEKAIAIgANAEEAIQACQAJAQQAoAuSIgIAAIgJFDQBBACACKAIANgLkiICAAAwBC0EAEIGAgIAAIgJFDQILIAJBgIB8cSIAIAJBCHZB/wFxIgJyIAE6AAAgACACQQh0ckGAAmohAEEAIQJBACABQQJ0QYCIgIAAaigCACIDayEFIAMhAQNAIAAgBWoiACACNgIAIAAhAiABIANqIgFBgQJJDQALIAQgADYCAAsgBCAAKAIANgIACyAAC/QHAQh/QQAoArCIgIAAIQECQAJAAkACQAJAQQAtALSIgIAARQ0AQQBBADoAtIiAgAAgAUUNAUGwiICAACECA0ACQAJAIAFBCGoiAyABKAIEIgRqIgVBCHZB/wFxIgYNACABIQIMAQsCQANAIAVBgIB8cSAGai0AAEH+AUcNAUGwiICAACEGA0AgBiIHKAIAIgYgBUcNAAsgByAFKAIANgIAIAEgBCAFKAIEakEIaiIENgIEIAcgAiACIAVGGyECIAMgBGoiBUEIdkH/AXEiBg0ACwsgAigCACECCyACKAIAIgENAAtBACgCsIiAgAAhAQsgAUUNACAAQYcCakGAfnEhCEF/IQJBsIiAgAAhBEEAIQNBsIiAgAAhBgNAIAYhBwJAIAEiBigCBCIFIABJDQAgBSACTw0AIAUhAiAHIQQgBiEDIAVBCGogCEcNACAHIQQgBSECIAYhAwwECyAGKAIAIgENAAsgAw0CDAELQbCIgIAAIQQLPwBBEHQhASAAQYgCaiEHQQAhAwJAAkBBACgCuIiAgAAiAkUNAEEAIQUgASEGDAELQQAgAUHwoISAAEH//wNqQYCAfHEiBmsiAjYCuIiAgAAgAiEFCwJAIAcgBU0NACACQQF2IgIgByAFayIHIAIgB0sbQf//A2oiB0EQdkAAQX9GDQJBAEEAKAK4iICAACAHQYCAfHEiA2o2AriIgIAACyAGRQ0BIAZB/wE6AAEgBkEAKAKwiICAADYCgAIgBkGEAmogAyAFakGAgHxxQfh9aiICNgIAIAZBgAJqIQMLIANBgIB8cSIGIANBCHZB/wFxckH/AToAACAEIAMoAgA2AgACQCACIABrQYB+cSIFDQAgAw8LIAMhAQJAIAYgBUF/cyADQQhqIgQgAmoiB2pBgIB8cUYNACAEQf//A3EhBQJAIABB9/0DSw0AIAYgBEEIdkH/AXFqQf4BOgAAIANBACgCsIiAgAA2AgAgA0GAgAQgBWsiBTYCBEEAIAM2ArCIgIAAEIOAgIAAIAZBhIIEaiACIAVrQfh9aiIFNgIAIAZBgYAEakH/AToAACAGQYCCBGohASAFIABrQYB+cSEFDAELIAIgBWogACAFakH//3tqQYCAfHFrQYCAeGohBSADIQELIAEgASgCBCAFazYCBCAFQfgBaiEGIAcgBWtBCHZB/wFxIQUCQANAIAYiB0GAfmohBiAFIgQNAUEBIQUgB0H4AUcNAAsLAkAgB0H4AUYNACACIANqIAZrQYCAfHEiBSAEakH+AToAACAFIARBCHRqIgVBACgCsIiAgAA2AgAgBSAGNgIEQQAgBTYCsIiAgAAQg4CAgAALIAEPC0EAC3wBAn8CQCAARQ0AAkAgAEGAgHxxIABBCHZB/wFxciIBLQAAIgJB/wFHDQAgAEF4aiIAQQAoArCIgIAANgIAQQAgADYCsIiAgAAgAUH+AToAAEEAQQE6ALSIgIAADwsgACACQQJ0QcCIgIAAaiICKAIANgIAIAIgADYCAAsLawECfwJAQQAoArCIgIAAIgAoAgRB/wFLDQAgAEGAgHxxIgEgAEEIdkH/AXEiAHJBCToAAEEAQQAoArCIgIAAKAIANgKwiICAACABIABBCHRyIgBBACgC5IiAgAA2AgBBACAANgLkiICAAAsLTgECfwJAIAAgAUYNACACRQ0AA0ACQCAALQAAIgMgAS0AACIERg0AQQFBfyADIARLGw8LIAFBAWohASAAQQFqIQAgAkF/aiICDQALC0EAC3gBAX8CQAJAIAAgAU8NACACRQ0BIAAhAwNAIAMgAS0AADoAACABQQFqIQEgA0EBaiEDIAJBf2oiAg0ADAILCyAAIAFNDQAgAkUNACABQX9qIQEgAEF/aiEDA0AgAyACaiABIAJqLQAAOgAAIAJBf2oiAg0ACwsgAAssAQF/AkAgAkUNACAAIQMDQCADIAE6AAAgA0EBaiEDIAJBf2oiAg0ACwsgAAt/AQF/AkACQCABIAByIAJyQQNxRQ0AIAJFDQEgACEDA0AgAyABLQAAOgAAIAFBAWohASADQQFqIQMgAkF/aiICDQAMAgsLIAJBBEkNACACQQJ2IQIgACEDA0AgAyABKAIANgIAIAFBBGohASADQQRqIQMgAkF/aiICDQALCyAAC4gBAQJ/AkBBAC0A6IiAgAANAEEAQQE6AOiIgIAAEIyAgIAAEI6AgIAAC0GggAgQgICAgAAiAEGAgAQ2AgBBAkGAgIAgEJeAgIAAIQEgAEEUakKAgICAgIDAADcCACAAQRBqIABBoIAEajYCACAAQQhqQgA3AgAgACAAQSBqNgIEIAAgATYCHCAACxUAIAAoAhwQmICAgAAgABCCgICAAAsWACAAQQxqIAE2AgAgAEEIakEANgIACxsAIAAoAhwgAEEEaiAAQQxqKAIARRCWgICAAAtUAQN/QQAhAANAQQghASAAIQIDQEEAIAJBAXFrQaCG4u1+cSACQQF2cyECIAFBf2oiAQ0ACyAAQQJ0QfCIgIAAaiACNgIAIABBAWoiAEGAAkcNAAsLTgACQCABRQ0AIAJBf3MhAgNAIAJB/wFxIAAtAABzQQJ0QfCIgIAAaigCACACQQh2cyECIABBAWohACABQX9qIgENAAsgAkF/cyECCyACC10DAX4BfwF+QgAhAANAQQghASAAIQIDQEIAIAJCAYN9QsKenLzd8pW2SYMgAkIBiIUhAiABQX9qIgENAAsgAKdBA3RB8JCAgABqIAI3AwAgAEIBfCIAQoACUg0ACwtPAAJAIAFFDQAgAkJ/hSECA0AgAkL/AYMgADEAAIWnQQN0QfCQgIAAaikDACACQgiIhSECIABBAWohACABQX9qIgENAAsgAkJ/hSECCyACC8oQAgx/An4CQAJAIAAoAiRFDQAgACgCACECDAELQQAhAiAAQQA6ACggAEIANwMAIABCADcDGCAAQcgAakEAQeQAEIaAgIAAGiAAQawBakEMNgIACyAAIAEoAgQiAzYCECAAQeAAaiEEIABByABqIQUgAEG2AWohBiAAQbABaiEHIABBqAFqIQggASgCECEJAkACQAJAAkADQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQCACDgoBAgAEBQYHCAkKDwsgASgCACEKIAAoAqgBIQIgACgCrAEhCyABKAIEIQwgASgCCCENDAILIAcgACgCqAEiDGogASgCACABKAIEIgJqIAEoAgggAmsiAiAAKAKsASAMayIMIAIgDEkbIgIQh4CAgAAaIAEgASgCBCACajYCBEEAIQwgAEEAIAAoAqgBIAJqIgIgAiAAKAKsASILRhs2AqgBIAIgC0cNESAAQQE2AgACQCAHQaiIgIAAQQYQhICAgABFDQBBBSEMDBILIAZBAkEAEI2AgIAAIAAoALgBRw0QQQYhDCAGLQAADREgACAALQC3ASICNgIgIAJBBEsNEUEBIAJ0QRNxRQ0RCyABKAIEIgwgASgCCCINRg0OAkAgASgCACIKIAxqLQAAIgsNACAAIAw2AhAgASAMQQFqNgIEQQYhAgwMC0EAIQIgAEEANgKoASAAQQI2AgAgACALQQJ0QQRqIgs2AqwBIAAgCzYCQAsgByACaiAKIAxqIA0gDGsiDCALIAJrIgIgDCACSRsiAhCHgICAABogASABKAIEIAJqNgIEQQAhDCAAQQAgACgCqAEgAmoiAiACIAAoAqwBIgtGGzYCqAEgAiALRw0PIAAgAkF8aiICNgKsAUEHIQwgByACQQAQjYCAgAAgByAAKAKsASICaigAAEcNDyAAQQI2AqgBIAAtALEBIgtBP3ENDAJAAkAgC0HAAHFFDQAgACAHIAggAhCRgICAAEEBRw0RIAAgACkDCDcDMCAAKAKsASECIAAtALEBIQsMAQsgAEJ/NwMwC0J/IQ4CQCALwEF/Sg0AIAAgByAIIAIQkYCAgABBAUcNECAAKAKsASECIAApAwghDgsgACAONwM4IAIgACgCqAEiC2tBAkkNDyAAIAtBAWoiCjYCqAEgCCALakEIai0AAEEhRw0MIAAgC0ECaiINNgKoASAIIApqQQhqLQAAQQFHDQwgAiANRg0PIAAgC0EDajYCqAEgACgCsAkgCCANakEIai0AABCcgICAACIMDQ8gACgCrAEiAiAAKAKoASIMIAIgDEsbIQ0CQANAIA0gDEYNASAAIAxBAWoiAjYCqAEgACAMaiELIAIhDCALQbABai0AAA0ODAALCyAFQgA3AwAgAEEANgKoASAAQQM2AgAgBUEIakIANwMACyAAIAEoAgQ2AhAgACABKAIQNgIUIAAoArAJIAEQmYCAgAAhDCAAIAApA0ggASgCBCAAKAIQa618Ig43A0ggACAAKQNQIAEoAhAgACgCFCICayILrXwiDzcDUCAOIAApAzBWDQ0gDyAAKQM4Vg0NAkACQAJAAkAgACgCIEF/ag4EAAMDAQMLIAEoAgwgAmogCyAAKAIYEI2AgIAArSEODAELIAEoAgwgAmogCyAAKQMYEI+AgIAAIQ4LIAAgDjcDGAsgDEEBRw0OAkAgACkDMCIOQn9RDQAgDiAFKQMAUg0OCwJAIAApAzgiDkJ/UQ0AQQchDCAOIAApA1BSDQ8LIAAgACkDSCAANQJAfCAAKQNgfCIPNwNgQgQhDgJAAkACQCAAKAIgQX9qDgQBAgIAAgtCCCEOCyAEIA4gD3w3AwALIAAgACkDaCAAKQNQfDcDaCAAIARBGCAAKAJwEI2AgIAANgJwIABBBDYCACAAIAApA1hCAXw3A1gLAkAgBSkDACIOQgODUA0AIA5CAXwhDiABKAIEIQwgASgCCCELA0AgCyAMRg0NIAEgDEEBaiICNgIEIAEoAgAgDGotAAANDiAFIA43AwAgDkIDgyEPIA5CAXwhDiACIQwgD0IAUg0ACwsgAEEFNgIAC0EBIQIgACgCIEF/ag4EBgcHBQcLIAAgARCSgICAACIMQQFHDQsgAEEHNgIAC0EAIAAoAhBrIQUgAEGAAWopAwAhDiABKAIEIQwCQANAIA4gBSAMaq18QgODUA0BAkAgDCABKAIIRw0AIAAgARCTgICAAAwLCyABIAxBAWoiAjYCBCABKAIAIAxqIQsgAiEMIAstAAANCwwACwsgACABEJOAgIAAQQchDCAEIABBkAFqQRgQhICAgAANCiAAQQg2AgALIAAgAUEgEJSAgIAAIgxBAUcNCSAAQQk2AgBBDCELIABBDDYCrAEMAQsgACgCrAEhCwsgByAAKAKoASIMaiABKAIAIAEoAgQiAmogASgCCCACayICIAsgDGsiDCACIAxJGyICEIeAgIAAGiABIAEoAgQgAmo2AgRBACEMIABBACAAKAKoASACaiICIAIgACgCrAEiC0YbNgKoASACIAtHDQcgABCVgICAACEMDAcLQQEhAiAAIAFBwAAQlICAgAAiDEEBRw0GDAELQQEhAiAAIAFBIBCUgICAACIMQQFHDQULIAAgAjYCAAwACwtBBiEMDAILQQAhDAwBC0EHIQwLAkACQCAAKAIkDQACQAJAIAwOAgADAQtBB0EIIAEoAgQgASgCCEYbIQwLIAEgCTYCECABIAM2AgQgDA8LAkAgDA0AIAMgASgCBEcNACAJIAEoAhBHDQAgAC0AKCEBIABBAToAKCABQQN0DwsgAEEAOgAoCyAMC6YBAQN/AkAgACgCBCIEDQAgAEIANwMICyACKAIAIgUgAyAFIANLGyEGA0ACQCAGIAVHDQBBAA8LIAEgBWotAAAhAyACIAVBAWoiBTYCACAAIANB/wBxrSAErYYgACkDCIQ3AwgCQAJAIAPAIgNBAEgNAAJAIAMNAEEHIQMgBA0CCyAAQQA2AgRBAQ8LQQchAyAAIARBB2oiBDYCBCAEQT9HDQELCyADC6ECAgN/AX4gAEGQAWohAiABQQRqIQMDQAJAIAAgASgCACADIAEoAggQkYCAgAAiBEEBRg0AIABBgAFqIgMgAykDACABKAIEIAAoAhAiA2siAq18NwMAIAAgAyABKAIAaiACIAAoAhgQjYCAgACtNwMYIAQPCwJAAkACQAJAAkAgACgCeA4DAAIBAwsgACAAKQMIIgU3A4gBAkAgBSAAKQNYUQ0AQQcPCyAAQQE2AngMAwsgACAAKQOYASAAKQMIfDcDmAEgACACQRggACgCoAEQjYCAgAA2AqABIABBATYCeCAAIAApA4gBQn98IgU3A4gBDAILIABBAjYCeCAAIAApA5ABIAApAwh8NwOQAQsgACkDiAEhBQsgBUIAUg0AC0EBC0ABAn8gAEGAAWoiAiACKQMAIAEoAgQgACgCECICayIDrXw3AwAgACACIAEoAgBqIAMgACgCGBCNgICAAK03AxgLfAEEfyABKAIEIQMgASgCCCEEA0ACQCAEIANHDQBBAA8LIAEgA0EBaiIFNgIEAkAgASgCACADai0AACAAKQMYIAAoAgQiA62Ip0H/AXFGDQBBBw8LIAAgA0EIaiIGNgIEIAUhAyAGIAJJDQALIABBADYCBCAAQgA3AxhBAQtvAQF/QQchAQJAIABBugFqLwAAQdm0AUcNACAAQbQBakEGQQAQjYCAgAAgAEGwAWooAABHDQAgAEGAAWopAwBCAoggADUAtAFSDQAgAEG4AWotAAANAEEBQQcgACgCICAAQbkBai0AAEYbIQELIAELwAIBA38CQAJAAkAgACgCJA0AIABBADoAKCAAQQA2AgBBASECDAELAkAgACgCAEEKRw0AQQAhAwwCC0ECIQMMAQtBASEDCwJAAkADQAJAAkACQAJAIAMOAwABAwMLIAEoAgQiAyABKAIIIgRGDQQgASgCACEFAkADQCAFIANqLQAADQEgASADQQFqIgM2AgQgACAAKAIEQQFqQQNxNgIEIAQgA0YNBgwACwsCQCAAKAIERQ0AQQcPCyAAKAIkRQ0BIABBADoAKCAAQQA2AgBBASEDDAMLIABCADcDGCAAQQA2AgQgAEHIAGpBAEHkABCGgICAABogAEGsAWpBDDYCAAtBAiEDDAELIAAgARCQgICAACIDQQFHDQIgAEEKNgIAQQAhAwwACwsCQCACDQBBAA8LQQdBASAAKAIEGyEDCyADC3UBAX8CQEG4CRCAgICAACICRQ0AIAIgADYCJCACIAAgARCbgICAACIANgKwCQJAIABFDQAgAkEAOgAoIAJCADcDACACQgA3AxggAkHIAGpBAEHkABCGgICAABogAkGsAWpBDDYCACACDwsgAhCCgICAAAtBAAseAAJAIABFDQAgACgCsAkQnYCAgAAgABCCgICAAAsL3RABCn8gAEHo3QFqIQIgAEHUAGohAyAAQRxqIgRBCGohBQJAAkADQCAAKAJAIQYCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgASgCBCIHIAEoAghJDQAgBkEHRg0BDBELIAYOCQECAwQFBgcACQ4LIAAoAkwhBgwHC0EBIQYgASAHQQFqNgIEIAEoAgAgB2otAAAiB0UNCAJAAkAgB0HfAUsNACAHQQFHDQELIABBgAI7AVACQCAAKAI8DQAgACABKAIMIAEoAhAiBmo2AhggACABKAIUIAZrNgIsCyAEQgA3AgAgBUIANwIADAoLIAAtAFBFDQkMDQsgASAHQQFqNgIEIAEoAgAgB2otAAAhByAAQQI2AkAgACAHQQh0IAAoAkhqNgJIDAsLIAEgB0EBajYCBCABKAIAIAdqLQAAIQcgAEEDNgJAIAAgByAAKAJIakEBajYCSAwKCyABIAdBAWo2AgQgASgCACAHai0AACEHIABBBDYCQCAAIAdBCHQ2AkwMCQsgASAHQQFqNgIEIAEoAgAgB2otAAAhByAAIAAoAkQ2AkAgACAHIAAoAkxqQQFqNgJMDAgLIAEgB0EBajYCBEEHIQYgASgCACAHai0AACIHQeABSw0DQQAhCAJAAkAgB0EtTw0AQQAhCQwBCyAHQVNqIgcgB0H/AXFBLW4iCUEtbGshByAJQQFqIQkLIABBfyAJdEF/czYCdAJAIAdB/wFxQQlJDQAgB0F3aiIHIAdB/wFxQQluIghBCWxrIQcgCEEBaiEICyAAIAg2AnAgACAHQf8BcSIHNgJsIAggB2pBBEsNAyADQgA3AgAgA0EIakIANwIAIANBEGpBADYCACAAQX8gCHRBf3M2AnBB+AAhBwNAIAAgB2pBgAg7AQAgB0ECaiIHQeTdAUcNAAsgAEEGNgJAIABBBTYCCCAAQv////8PNwIACyAAKAJMIgpBBUkNBwJAIAAoAggiB0UNACAHQX9qIQYgASgCBCEHIAEoAgghCQNAIAkgB0YNCiABIAdBAWoiCDYCBCABKAIAIAdqLQAAIQcgACAGNgIIIAAgByAAKAIEQQh0cjYCBCAIIQcgBkF/aiIGQX9HDQALCyAAQQc2AkAgACAKQXtqIgY2AkwLIAAgACgCICIHIAEoAhQgASgCEGsiCCAAKAJIIgkgCCAJSRsiCGogACgCLCIJIAkgB2sgCEsbNgIoIAEoAggiCiABKAIEIghrIQcCQAJAAkAgACgC5N0BIgkNACAGDQFBACEGCyACIAlqIAEoAgAgCGpBKiAJayIIIAYgCWsiBiAIIAZJGyIGIAcgBiAHSRsiBxCHgICAABoCQAJAIAAoAuTdASIIIAdqIgYgACgCTEcNACACIAhqIAdqQQBBPyAGaxCGgICAABogACgC5N0BIAdqIQYMAQsCQCAGQRRLDQAgACAGNgLk3QEgASABKAIEIAdqNgIEDAMLIAZBa2ohBgsgAEEANgIQIAAgAjYCDCAAIAY2AhRBByEGIAAQmoCAgABFDQMgACgCECIIIAAoAuTdASIJIAdqSw0DIAAgACgCTCAIayIGNgJMAkAgCCAJTw0AIAAgCSAIayIHNgLk3QEgAiACIAhqIAcQhYCAgAAaDAILIABBADYC5N0BIAEgASgCBCAIIAlraiIINgIEIAEoAggiCiAIayEHCwJAIAdBFUkNACAAIAg2AhAgACABKAIANgIMIAAgCkFraiAIIAZqIAcgBkEVakkbNgIUQQchBiAAEJqAgIAARQ0DIAAoAkwiByAAKAIQIgggASgCBGsiCUkNAyABIAg2AgQgACAHIAlrIgY2AkwgASgCCCAIayIHQRRLDQELIAIgASgCACAIaiAHIAYgByAGSRsiBxCHgICAABogACAHNgLk3QEgASABKAIEIAdqNgIECyAAKAIgIgYgACgCHCIIayEHAkAgACgCPEUNAAJAIAYgACgCLEcNACAAQQA2AiALIAEoAgwgASgCEGogACgCGCAIaiAHEIeAgIAAGiAAKAIgIQYLIAAgBjYCHCABIAEoAhAgB2oiCDYCECAAIAAoAkgiBiAHazYCSAJAIAYgB0cNAEEHIQYgACgCTA0CIAAoAmgNAiAAKAIEDQIgAEEANgJADAQLQQAhBiAIIAEoAhRGDQEgASgCBCABKAIIRw0FIAAoAuTdASAAKAJMTw0FDAELAkADQCAAKAJMIghFDQFBACEGIAEoAggiCSAHTQ0CIAEoAhQiCiABKAIQIgtNDQIgACAIIAkgB2siBiAKIAtrIgkgBiAJSRsiBiAAKAIsIAAoAiAiCWsiCiAGIApJGyIGIAggBiAISRsiBms2AkwgCSAAKAIYaiABKAIAIAdqIAYQhYCAgAAaIAAgACgCICAGaiIHNgIgAkAgACgCJCAHTw0AIAAgBzYCJAsCQCAAKAI8RQ0AAkAgByAAKAIsRw0AIABBADYCIAsgASgCDCABKAIQaiABKAIAIAEoAgRqIAYQhYCAgAAaIAAoAiAhBwsgACAHNgIcIAEgASgCECAGajYCECABIAEoAgQgBmoiBzYCBAwACwsgAEEANgJADAQLIAYPCyAHwEF/Sg0BIABBATYCQCAAIAdBEHRBgID8AHE2AkgCQCAHQcABSQ0AIABBBTYCRCAAQQA6AFEMAwsgAC0AUQ0DIABBBjYCRCAHQaABSQ0CIANCADcCACADQRBqQQA2AgAgA0EIakIANwIAQfgAIQcDQCAAIAdqQYAIOwEAIAdBAmoiB0Hk3QFHDQALCyAAQQU2AgggAEL/////DzcCAAwBCyAHQQJLDQEgAEKDgICAgAE3AkAMAAsLQQcPC0EAC5wYARR/IABBGGohAQJAIABBIGooAgAiAiAAQShqKAIAIgNPDQAgAEHoAGoiBCgCAEUNACABIAQgACgCVBCegICAABogACgCKCEDIAAoAiAhAgsCQCACIANPDQAgAEHYC2ohBSAAQbwNaiEGIABB3A1qIQcgAEHoAGohCCAAQeAVaiEJIABB1ABqIQoDQCAAKAIQIgsgACgCFEsNASAAIAAoAmQiDEEFdGogACgCdCACcSINQQF0aiIOQfgAaiEPAkACQCAAKAIAIgNBgICACEkNACAAKAIEIRAMAQsgACADQQh0IgM2AgAgACALQQFqIgQ2AhAgACAAKAIEQQh0IAAoAgwgC2otAAByIhA2AgQgBCELCwJAAkAgECADQQt2IA8vAQAiEWwiBE8NACAAIAQ2AgAgDyARQYAQIBFrQQV2ajsBACACQX9qIQMCQCACDQAgACgCLCADaiEDCwJAAkAgACgCJCIRDQBBACEDDAELIAEoAgAgA2otAAAhAwsgACAAKAJwIAJxIAAoAmwiD3QgA0EIIA9rdmpBgAxsakHkHWohDgJAAkAgDEEGSw0AQQEhAwNAIA4gA0EBdCIDaiEQAkACQCAAKAIAIgRBgICACEkNACAAKAIEIQwMAQsgACAEQQh0IgQ2AgAgACAAKAIQIg9BAWo2AhAgACAAKAIEQQh0IA8gACgCDGotAAByIgw2AgQLAkACQCAMIARBC3YgEC8BACIRbCIPSQ0AIAAgDCAPazYCBCAEIA9rIQ8gA0EBciEDIBEgEUEFdmshBAwBCyARQYAQIBFrQQV2aiEECyAAIA82AgAgECAEOwEAIANBgAJJDQALIAAoAiAhAgwBCyACIAAoAlQiD0F/c2ohAwJAIAIgD0sNACAAKAIsIANqIQMLAkACQCARDQBBACESDAELIAEoAgAgA2otAAAhEgtBASEDQYACIQ8DQCAOIBJBAXQiEiAPcSITIA9qIANqQQF0aiERAkACQCAEQf///wdNDQAgBCENDAELIAAgBEEIdCINNgIAIAAgC0EBaiIENgIQIAAgEEEIdCAAKAIMIAtqLQAAciIQNgIEIAQhCwsCQAJAIBAgDUELdiARLwEAIgxsIgRPIhQNACAMQYAQIAxrQQV2aiEMDAELIAAgECAEayIQNgIEIA0gBGshBCAMIAxBBXZrIQxBACEPCyAAIAQ2AgAgESAMOwEAIA8gE3MhDyADQQF0IBRyIgNBgAJJDQALCyAAIAJBAWo2AiAgACgCGCACaiADOgAAAkAgACgCJCAAKAIgIgJPDQAgACACNgIkC0EAIQMCQCAAKAJkIgRBBEkNAAJAIARBCUsNACAEQX1qIQMMAQsgBEF6aiEDCyAAIAM2AmQMAQsgACADIARrIgM2AgAgACAQIARrIgQ2AgQgDyARIBFBBXZrOwEAIAAgDEEBdGoiEkH4A2ohDwJAAkAgA0H///8HTQ0AIAshEwwBCyAAIANBCHQiAzYCACAAIAtBAWoiEzYCECAAIARBCHQgACgCDCALai0AAHIiBDYCBAsCQAJAIAQgA0ELdiAPLwEAIhBsIhFJDQAgACADIBFrIgw2AgAgACAEIBFrIgM2AgQgDyAQIBBBBXZrOwEAIBJBkARqIQ8CQAJAIAxB////B00NACATIREMAQsgACAMQQh0Igw2AgAgACATQQFqIhE2AhAgACADQQh0IAAoAgwgE2otAAByIgM2AgQLAkACQCADIAxBC3YgDy8BACIQbCIETw0AIAAgBDYCACAPIBBBgBAgEGtBBXZqOwEAIA5B2ARqIQ8CQCAEQf///wdLDQAgACAEQQh0IgQ2AgAgACARQQFqNgIQIAAgA0EIdCAAKAIMIBFqLQAAciIDNgIECwJAIAMgBEELdiAPLwEAIhBsIhFJDQAgACAEIBFrNgIAIAAgAyARazYCBCAPIBAgEEEFdms7AQAMAgsgACARNgIAIA8gEEGAECAQa0EFdmo7AQAgAEEBNgJoIABBCUELIAAoAmRBB0kbNgJkDAMLIAAgDCAEayIMNgIAIAAgAyAEayIDNgIEIA8gECAQQQV2azsBACASQagEaiEEAkACQCAMQf///wdNDQAgESEODAELIAAgDEEIdCIMNgIAIAAgEUEBaiIONgIQIAAgA0EIdCAAKAIMIBFqLQAAciIDNgIECwJAAkAgAyAMQQt2IAQvAQAiD2wiEE8NACAAIBA2AgAgBCAPQYAQIA9rQQV2ajsBACAAKAJYIQMMAQsgACAMIBBrIhE2AgAgACADIBBrIgM2AgQgBCAPIA9BBXZrOwEAIBJBwARqIQ8CQCARQf///wdLDQAgACARQQh0IhE2AgAgACAOQQFqNgIQIAAgA0EIdCAAKAIMIA5qLQAAciIDNgIECwJAAkAgAyARQQt2IA8vAQAiEGwiBE8NACAQQYAQIBBrQQV2aiEQIAAoAlwhAwwBCyAAIAMgBGs2AgQgACgCYCEDIAAgACgCXDYCYCARIARrIQQgECAQQQV2ayEQCyAAIAQ2AgAgDyAQOwEAIAAgACgCWDYCXAsgACAAKAJUNgJYIAAgAzYCVAsgAEEIQQsgACgCZEEHSRs2AmQgACAJIA0Qn4CAgAAMAQsgACARNgIAIA8gEEGAECAQa0EFdmo7AQAgACAAKAJcNgJgIAAgACkCVDcCWCAAQQdBCiAAKAJkQQdJGzYCZCAAIAcgDRCfgICAACAKIAAoAmgiA0F+akEDIANBBkkbQQd0akGEB2ohDUEBIQMDQCANIANBAXQiA2ohEAJAAkAgACgCACIEQYCAgAhJDQAgACgCBCEMDAELIAAgBEEIdCIENgIAIAAgACgCECIPQQFqNgIQIAAgACgCBEEIdCAPIAAoAgxqLQAAciIMNgIECwJAAkAgDCAEQQt2IBAvAQAiEWwiD0kNACAAIAwgD2s2AgQgBCAPayEPIANBAXIhAyARIBFBBXZrIQQMAQsgEUGAECARa0EFdmohBAsgACAPNgIAIBAgBDsBACADQcAASQ0ACwJAIANBQGoiBEEDSw0AIAAgBDYCVAwBCyAAIANBAXFBAnIiDzYCVCAEQQF2IRACQCAEQQ1LDQAgACAPIBBBf2oiDnQiBDYCVEEBIQ8gBSAEQQF0akHAACADa0EBdGpBfmohEkEAIQwDQCASIA9BAXQiD2ohEAJAAkAgACgCACIDQYCAgAhJDQAgACgCBCENDAELIAAgA0EIdCIDNgIAIAAgACgCECIEQQFqNgIQIAAgACgCBEEIdCAEIAAoAgxqLQAAciINNgIECwJAAkAgDSADQQt2IBAvAQAiEWwiBEkNACAAIA0gBGs2AgQgACAAKAJUQQEgDHRqNgJUIAMgBGshBCAPQQFyIQ8gESARQQV2ayEDDAELIBFBgBAgEWtBBXZqIQMLIAAgBDYCACAQIAM7AQAgDiAMQQFqIgxHDQAMAgsLIBBBe2ohECAAKAIEIQQgACgCACEDA0ACQCADQf///wdLDQAgACADQQh0IgM2AgAgACAAKAIQIhFBAWo2AhAgBEEIdCARIAAoAgxqLQAAciEECyAAIANBAXYiAzYCACAAIAQgA2siBEEfdSIRIA9BAXRqQQFqIg82AlQgACARIANxIARqIgQ2AgQgEEF/aiIQDQALIAAgD0EEdDYCVEEAIQxBASEPA0AgBiAPQQF0Ig9qIRACQAJAIAAoAgAiA0GAgIAISQ0AIAAoAgQhDQwBCyAAIANBCHQiAzYCACAAIAAoAhAiBEEBajYCECAAIAAoAgRBCHQgBCAAKAIMai0AAHIiDTYCBAsCQAJAIA0gA0ELdiAQLwEAIhFsIgRJDQAgACANIARrNgIEIAAgACgCVEEBIAx0ajYCVCADIARrIQQgD0EBciEPIBEgEUEFdmshAwwBCyARQYAQIBFrQQV2aiEDCyAAIAQ2AgAgECADOwEAIAxBAWoiDEEERw0ACwsCQCABIAggACgCVBCegICAAA0AQQAPCyAAKAIgIQILIAIgACgCKEkNAAsLQQEhAwJAIAAoAgAiBEH///8HSw0AIAAgBEEIdDYCAEEBIQMgACAAKAIQIgRBAWo2AhAgACAAKAIEQQh0IAQgACgCDGotAAByNgIECyADC3ABAX8CQEGo3gEQgICAgAAiAkUNACACQTRqIAE2AgAgAkE8aiAANgIAAkACQAJAIABBf2oOAgABAgsgAiABEICAgIAAIgA2AhggAA0BIAIQgoCAgAAMAgsgAkEANgIYIAJBOGpBADYCAAsgAg8LQQAL0gEBAn9BBiECAkAgAUEnSw0AIABBMGogAUEBcUECciABQQF2QQtqdCIBNgIAAkACQCAAQTxqKAIAIgNFDQBBBCECIAEgAEE0aigCAEsNAiAAQSxqIAE2AgAgA0ECRw0AIABBOGoiAygCACABTw0AIAAgATYCOCAAKAIYEIKAgIAAIAAgACgCMBCAgICAACIBNgIYIAENAEEDIQIMAQtBACECIABBADYCQCAAQdAAakEBOgAAIABB6ABqQQA2AgAgAEHk3QFqIQMLIANBADYCAAsgAgsjAAJAIABBPGooAgBFDQAgACgCGBCCgICAAAsgABCCgICAAAvHAQEDf0EAIQMCQCAAKAIMIAJNDQAgACgCGCACTQ0AIAEgASgCACIDIAAoAhAgACgCCCIEayIFIAMgBSADSRsiBWs2AgAgBCACQX9zaiEDAkAgBCACSw0AIAAoAhQgA2ohAwsDQCAAKAIAIgIgA2otAAAhASAAIAAoAggiBEEBajYCCCACIARqIAE6AABBACADQQFqIgMgAyAAKAIURhshAyAFQX9qIgUNAAtBASEDIAAoAgwgACgCCCIFTw0AIAAgBTYCDAsgAwvoBAEGfwJAAkAgACgCACIDQYCAgAhJDQAgACgCBCEEDAELIAAgA0EIdCIDNgIAIAAgACgCECIFQQFqNgIQIAAgACgCBEEIdCAFIAAoAgxqLQAAciIENgIECwJAAkAgBCADQQt2IAEvAQAiBWwiBk8NACAAIAY2AgAgASAFQYAQIAVrQQV2ajsBACABIAJBBHRqQQRqIQdBCCEIQQIhAQwBCyAAIAMgBmsiAzYCACAAIAQgBmsiBDYCBCABIAUgBUEFdms7AQACQCADQf///wdLDQAgACADQQh0IgM2AgAgACAAKAIQIgVBAWo2AhAgACAEQQh0IAUgACgCDGotAAByIgQ2AgQLAkAgBCADQQt2IAEvAQIiBWwiBk8NACAAIAY2AgAgASAFQYAQIAVrQQV2ajsBAiABIAJBBHRqQYQCaiEHQQghCEEKIQEMAQsgACADIAZrNgIAIAAgBCAGazYCBCABIAUgBUEFdms7AQIgAUGEBGohB0GAAiEIQRIhAQsgAEHoAGogATYCAEEBIQEDQCAHIAFBAXQiAWohBAJAAkAgACgCACIDQYCAgAhJDQAgACgCBCECDAELIAAgA0EIdCIDNgIAIAAgACgCECIFQQFqNgIQIAAgACgCBEEIdCAFIAAoAgxqLQAAciICNgIECwJAAkAgAiADQQt2IAQvAQAiBmwiBUkNACAAIAIgBWs2AgQgAyAFayEFIAFBAXIhASAGIAZBBXZrIQMMAQsgBkGAECAGa0EFdmohAwsgACAFNgIAIAQgAzsBACABIAhJDQALIABB6ABqIgAgASAIayAAKAIAajYCAAsLNQEAQYAICy4IAAAAEAAAABgAAAAgAAAAKAAAADAAAABAAAAAUAAAAIAAAAAAAQAA/Td6WFoA";
        },
        /* 2 */
        /***/
        (o) => {
          o.exports = t;
        }
        /******/
      ], a = {};
      function i(o) {
        var d = a[o];
        if (d !== void 0)
          return d.exports;
        var l = a[o] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        return r[o](l, l.exports, i), l.exports;
      }
      i.d = (o, d) => {
        for (var l in d)
          i.o(d, l) && !i.o(o, l) && Object.defineProperty(o, l, { enumerable: !0, get: d[l] });
      }, i.o = (o, d) => Object.prototype.hasOwnProperty.call(o, d), i.r = (o) => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
      };
      var s = {};
      return (() => {
        i.r(s), i.d(s, {
          /* harmony export */
          XzReadableStream: () => (
            /* binding */
            f
          )
          /* harmony export */
        });
        var o = i(1);
        const d = globalThis.ReadableStream || i(2).ReadableStream, l = 0, A = 1;
        class b {
          constructor(m) {
            this.exports = m.exports, this.memory = this.exports.memory, this.ptr = this.exports.create_context(), this._refresh(), this.bufSize = this.mem32[0], this.inStart = this.mem32[1] - this.ptr, this.inEnd = this.inStart + this.bufSize, this.outStart = this.mem32[4] - this.ptr;
          }
          supplyInput(m) {
            this._refresh(), this.mem8.subarray(this.inStart, this.inEnd).set(m, 0), this.exports.supply_input(this.ptr, m.byteLength), this._refresh();
          }
          getNextOutput() {
            const m = this.exports.get_next_output(this.ptr);
            if (this._refresh(), m !== l && m !== A)
              throw new Error(`get_next_output failed with error code ${m}`);
            return { outChunk: this.mem8.slice(this.outStart, this.outStart + /* outPos */
            this.mem32[5]), finished: m === A };
          }
          needsMoreInput() {
            return (
              /* inPos */
              this.mem32[2] === /* inSize */
              this.mem32[3]
            );
          }
          outputBufferIsFull() {
            return (
              /* outPos */
              this.mem32[5] === this.bufSize
            );
          }
          resetOutputBuffer() {
            this.outPos = this.mem32[5] = 0;
          }
          dispose() {
            this.exports.destroy_context(this.ptr), this.exports = null;
          }
          _refresh() {
            var m;
            this.memory.buffer !== ((m = this.mem8) == null ? void 0 : m.buffer) && (this.mem8 = new Uint8Array(this.memory.buffer, this.ptr), this.mem32 = new Uint32Array(this.memory.buffer, this.ptr));
          }
        }
        class _ {
          constructor() {
            this.locked = !1, this.waitQueue = [];
          }
          async acquire() {
            if (!this.locked) {
              this.locked = !0;
              return;
            }
            return new Promise((m) => {
              this.waitQueue.push(m);
            });
          }
          release() {
            this.waitQueue.length > 0 ? this.waitQueue.shift()() : this.locked = !1;
          }
        }
        const g = class g extends d {
          static async _getModuleInstance() {
            const m = o.replace("data:application/wasm;base64,", ""), u = Uint8Array.from(atob(m), (y) => y.charCodeAt(0)).buffer, C = {}, v = await WebAssembly.instantiate(u, C);
            g._moduleInstance = v.instance;
          }
          constructor(m) {
            let u, C = null;
            const v = m.getReader();
            super({
              async start(y) {
                await g._contextMutex.acquire();
                try {
                  g._moduleInstance || await (g._moduleInstancePromise || (g._moduleInstancePromise = g._getModuleInstance())), u = new b(g._moduleInstance);
                } catch (k) {
                  throw g._contextMutex.release(), k;
                }
              },
              async pull(y) {
                try {
                  if (u.needsMoreInput()) {
                    if (C === null || C.byteLength === 0) {
                      const { done: S, value: F } = await v.read();
                      S || (C = F);
                    }
                    const O = Math.min(u.bufSize, C.byteLength);
                    u.supplyInput(C.subarray(0, O)), C = C.subarray(O);
                  }
                  const k = u.getNextOutput();
                  y.enqueue(k.outChunk), u.resetOutputBuffer(), k.finished && (u.dispose(), g._contextMutex.release(), y.close());
                } catch (k) {
                  throw u && u.dispose(), g._contextMutex.release(), k;
                }
              },
              cancel() {
                try {
                  return u && u.dispose(), v.cancel();
                } finally {
                  g._contextMutex.release();
                }
              }
            });
          }
        };
        Zn(g, "_moduleInstancePromise"), Zn(g, "_moduleInstance"), Zn(g, "_contextMutex", new _());
        let f = g;
      })(), s;
    })()
  ));
})($o);
var Xo = $o.exports;
const Nu = /* @__PURE__ */ si(Xo), zu = /* @__PURE__ */ eo({
  __proto__: null,
  default: Nu
}, [Xo]);
export {
  Ou as renderViewer
};

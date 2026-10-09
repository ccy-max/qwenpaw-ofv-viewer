function ds(e, n) {
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
function Ja(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Gn(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Qa = { exports: {} };
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
      function o(c, h) {
        if (!a[c]) {
          if (!r[c]) {
            var v = typeof Gn == "function" && Gn;
            if (!h && v) return v(c, !0);
            if (s) return s(c, !0);
            var _ = new Error("Cannot find module '" + c + "'");
            throw _.code = "MODULE_NOT_FOUND", _;
          }
          var f = a[c] = { exports: {} };
          r[c][0].call(f.exports, function(g) {
            var m = r[c][1][g];
            return o(m || g);
          }, f, f.exports, t, r, a, i);
        }
        return a[c].exports;
      }
      for (var s = typeof Gn == "function" && Gn, d = 0; d < i.length; d++) o(i[d]);
      return o;
    }({ 1: [function(t, r, a) {
      var i = t("./utils"), o = t("./support"), s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      a.encode = function(d) {
        for (var c, h, v, _, f, g, m, b = [], p = 0, x = d.length, k = x, S = i.getTypeOf(d) !== "string"; p < d.length; ) k = x - p, v = S ? (c = d[p++], h = p < x ? d[p++] : 0, p < x ? d[p++] : 0) : (c = d.charCodeAt(p++), h = p < x ? d.charCodeAt(p++) : 0, p < x ? d.charCodeAt(p++) : 0), _ = c >> 2, f = (3 & c) << 4 | h >> 4, g = 1 < k ? (15 & h) << 2 | v >> 6 : 64, m = 2 < k ? 63 & v : 64, b.push(s.charAt(_) + s.charAt(f) + s.charAt(g) + s.charAt(m));
        return b.join("");
      }, a.decode = function(d) {
        var c, h, v, _, f, g, m = 0, b = 0, p = "data:";
        if (d.substr(0, p.length) === p) throw new Error("Invalid base64 input, it looks like a data url.");
        var x, k = 3 * (d = d.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (d.charAt(d.length - 1) === s.charAt(64) && k--, d.charAt(d.length - 2) === s.charAt(64) && k--, k % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
        for (x = o.uint8array ? new Uint8Array(0 | k) : new Array(0 | k); m < d.length; ) c = s.indexOf(d.charAt(m++)) << 2 | (_ = s.indexOf(d.charAt(m++))) >> 4, h = (15 & _) << 4 | (f = s.indexOf(d.charAt(m++))) >> 2, v = (3 & f) << 6 | (g = s.indexOf(d.charAt(m++))), x[b++] = c, f !== 64 && (x[b++] = h), g !== 64 && (x[b++] = v);
        return x;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(t, r, a) {
      var i = t("./external"), o = t("./stream/DataWorker"), s = t("./stream/Crc32Probe"), d = t("./stream/DataLengthProbe");
      function c(h, v, _, f, g) {
        this.compressedSize = h, this.uncompressedSize = v, this.crc32 = _, this.compression = f, this.compressedContent = g;
      }
      c.prototype = { getContentWorker: function() {
        var h = new o(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new d("data_length")), v = this;
        return h.on("end", function() {
          if (this.streamInfo.data_length !== v.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
        }), h;
      }, getCompressedWorker: function() {
        return new o(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, c.createWorkerFrom = function(h, v, _) {
        return h.pipe(new s()).pipe(new d("uncompressedSize")).pipe(v.compressWorker(_)).pipe(new d("compressedSize")).withStreamInfo("compression", v);
      }, r.exports = c;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(t, r, a) {
      var i = t("./stream/GenericWorker");
      a.STORE = { magic: "\0\0", compressWorker: function() {
        return new i("STORE compression");
      }, uncompressWorker: function() {
        return new i("STORE decompression");
      } }, a.DEFLATE = t("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(t, r, a) {
      var i = t("./utils"), o = function() {
        for (var s, d = [], c = 0; c < 256; c++) {
          s = c;
          for (var h = 0; h < 8; h++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
          d[c] = s;
        }
        return d;
      }();
      r.exports = function(s, d) {
        return s !== void 0 && s.length ? i.getTypeOf(s) !== "string" ? function(c, h, v, _) {
          var f = o, g = _ + v;
          c ^= -1;
          for (var m = _; m < g; m++) c = c >>> 8 ^ f[255 & (c ^ h[m])];
          return -1 ^ c;
        }(0 | d, s, s.length, 0) : function(c, h, v, _) {
          var f = o, g = _ + v;
          c ^= -1;
          for (var m = _; m < g; m++) c = c >>> 8 ^ f[255 & (c ^ h.charCodeAt(m))];
          return -1 ^ c;
        }(0 | d, s, s.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(t, r, a) {
      a.base64 = !1, a.binary = !1, a.dir = !1, a.createFolders = !0, a.date = null, a.compression = null, a.compressionOptions = null, a.comment = null, a.unixPermissions = null, a.dosPermissions = null;
    }, {}], 6: [function(t, r, a) {
      var i = null;
      i = typeof Promise < "u" ? Promise : t("lie"), r.exports = { Promise: i };
    }, { lie: 37 }], 7: [function(t, r, a) {
      var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", o = t("pako"), s = t("./utils"), d = t("./stream/GenericWorker"), c = i ? "uint8array" : "array";
      function h(v, _) {
        d.call(this, "FlateWorker/" + v), this._pako = null, this._pakoAction = v, this._pakoOptions = _, this.meta = {};
      }
      a.magic = "\b\0", s.inherits(h, d), h.prototype.processChunk = function(v) {
        this.meta = v.meta, this._pako === null && this._createPako(), this._pako.push(s.transformTo(c, v.data), !1);
      }, h.prototype.flush = function() {
        d.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, h.prototype.cleanUp = function() {
        d.prototype.cleanUp.call(this), this._pako = null;
      }, h.prototype._createPako = function() {
        this._pako = new o[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var v = this;
        this._pako.onData = function(_) {
          v.push({ data: _, meta: v.meta });
        };
      }, a.compressWorker = function(v) {
        return new h("Deflate", v);
      }, a.uncompressWorker = function() {
        return new h("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(t, r, a) {
      function i(f, g) {
        var m, b = "";
        for (m = 0; m < g; m++) b += String.fromCharCode(255 & f), f >>>= 8;
        return b;
      }
      function o(f, g, m, b, p, x) {
        var k, S, C = f.file, B = f.compression, R = x !== c.utf8encode, P = s.transformTo("string", x(C.name)), O = s.transformTo("string", c.utf8encode(C.name)), z = C.comment, N = s.transformTo("string", x(z)), y = s.transformTo("string", c.utf8encode(z)), D = O.length !== C.name.length, u = y.length !== z.length, Z = "", re = "", X = "", ie = C.dir, W = C.date, ae = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        g && !m || (ae.crc32 = f.crc32, ae.compressedSize = f.compressedSize, ae.uncompressedSize = f.uncompressedSize);
        var U = 0;
        g && (U |= 8), R || !D && !u || (U |= 2048);
        var T = 0, q = 0;
        ie && (T |= 16), p === "UNIX" ? (q = 798, T |= function(Y, le) {
          var ce = Y;
          return Y || (ce = le ? 16893 : 33204), (65535 & ce) << 16;
        }(C.unixPermissions, ie)) : (q = 20, T |= function(Y) {
          return 63 & (Y || 0);
        }(C.dosPermissions)), k = W.getUTCHours(), k <<= 6, k |= W.getUTCMinutes(), k <<= 5, k |= W.getUTCSeconds() / 2, S = W.getUTCFullYear() - 1980, S <<= 4, S |= W.getUTCMonth() + 1, S <<= 5, S |= W.getUTCDate(), D && (re = i(1, 1) + i(h(P), 4) + O, Z += "up" + i(re.length, 2) + re), u && (X = i(1, 1) + i(h(N), 4) + y, Z += "uc" + i(X.length, 2) + X);
        var j = "";
        return j += `
\0`, j += i(U, 2), j += B.magic, j += i(k, 2), j += i(S, 2), j += i(ae.crc32, 4), j += i(ae.compressedSize, 4), j += i(ae.uncompressedSize, 4), j += i(P.length, 2), j += i(Z.length, 2), { fileRecord: v.LOCAL_FILE_HEADER + j + P + Z, dirRecord: v.CENTRAL_FILE_HEADER + i(q, 2) + j + i(N.length, 2) + "\0\0\0\0" + i(T, 4) + i(b, 4) + P + Z + N };
      }
      var s = t("../utils"), d = t("../stream/GenericWorker"), c = t("../utf8"), h = t("../crc32"), v = t("../signature");
      function _(f, g, m, b) {
        d.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = g, this.zipPlatform = m, this.encodeFileName = b, this.streamFiles = f, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      s.inherits(_, d), _.prototype.push = function(f) {
        var g = f.meta.percent || 0, m = this.entriesCount, b = this._sources.length;
        this.accumulate ? this.contentBuffer.push(f) : (this.bytesWritten += f.data.length, d.prototype.push.call(this, { data: f.data, meta: { currentFile: this.currentFile, percent: m ? (g + 100 * (m - b - 1)) / m : 100 } }));
      }, _.prototype.openedSource = function(f) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = f.file.name;
        var g = this.streamFiles && !f.file.dir;
        if (g) {
          var m = o(f, g, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: m.fileRecord, meta: { percent: 0 } });
        } else this.accumulate = !0;
      }, _.prototype.closedSource = function(f) {
        this.accumulate = !1;
        var g = this.streamFiles && !f.file.dir, m = o(f, g, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(m.dirRecord), g) this.push({ data: function(b) {
          return v.DATA_DESCRIPTOR + i(b.crc32, 4) + i(b.compressedSize, 4) + i(b.uncompressedSize, 4);
        }(f), meta: { percent: 100 } });
        else for (this.push({ data: m.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, _.prototype.flush = function() {
        for (var f = this.bytesWritten, g = 0; g < this.dirRecords.length; g++) this.push({ data: this.dirRecords[g], meta: { percent: 100 } });
        var m = this.bytesWritten - f, b = function(p, x, k, S, C) {
          var B = s.transformTo("string", C(S));
          return v.CENTRAL_DIRECTORY_END + "\0\0\0\0" + i(p, 2) + i(p, 2) + i(x, 4) + i(k, 4) + i(B.length, 2) + B;
        }(this.dirRecords.length, m, f, this.zipComment, this.encodeFileName);
        this.push({ data: b, meta: { percent: 100 } });
      }, _.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, _.prototype.registerPrevious = function(f) {
        this._sources.push(f);
        var g = this;
        return f.on("data", function(m) {
          g.processChunk(m);
        }), f.on("end", function() {
          g.closedSource(g.previous.streamInfo), g._sources.length ? g.prepareNextSource() : g.end();
        }), f.on("error", function(m) {
          g.error(m);
        }), this;
      }, _.prototype.resume = function() {
        return !!d.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, _.prototype.error = function(f) {
        var g = this._sources;
        if (!d.prototype.error.call(this, f)) return !1;
        for (var m = 0; m < g.length; m++) try {
          g[m].error(f);
        } catch {
        }
        return !0;
      }, _.prototype.lock = function() {
        d.prototype.lock.call(this);
        for (var f = this._sources, g = 0; g < f.length; g++) f[g].lock();
      }, r.exports = _;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(t, r, a) {
      var i = t("../compressions"), o = t("./ZipFileWorker");
      a.generateWorker = function(s, d, c) {
        var h = new o(d.streamFiles, c, d.platform, d.encodeFileName), v = 0;
        try {
          s.forEach(function(_, f) {
            v++;
            var g = function(x, k) {
              var S = x || k, C = i[S];
              if (!C) throw new Error(S + " is not a valid compression method !");
              return C;
            }(f.options.compression, d.compression), m = f.options.compressionOptions || d.compressionOptions || {}, b = f.dir, p = f.date;
            f._compressWorker(g, m).withStreamInfo("file", { name: _, dir: b, date: p, comment: f.comment || "", unixPermissions: f.unixPermissions, dosPermissions: f.dosPermissions }).pipe(h);
          }), h.entriesCount = v;
        } catch (_) {
          h.error(_);
        }
        return h;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(t, r, a) {
      function i() {
        if (!(this instanceof i)) return new i();
        if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var o = new i();
          for (var s in this) typeof this[s] != "function" && (o[s] = this[s]);
          return o;
        };
      }
      (i.prototype = t("./object")).loadAsync = t("./load"), i.support = t("./support"), i.defaults = t("./defaults"), i.version = "3.10.2", i.loadAsync = function(o, s) {
        return new i().loadAsync(o, s);
      }, i.external = t("./external"), r.exports = i;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(t, r, a) {
      var i = t("./utils"), o = t("./external"), s = t("./utf8"), d = t("./zipEntries"), c = t("./stream/Crc32Probe"), h = t("./nodejsUtils");
      function v(_) {
        return new o.Promise(function(f, g) {
          var m = _.decompressed.getContentWorker().pipe(new c());
          m.on("error", function(b) {
            g(b);
          }).on("end", function() {
            m.streamInfo.crc32 !== _.decompressed.crc32 ? g(new Error("Corrupted zip : CRC32 mismatch")) : f();
          }).resume();
        });
      }
      r.exports = function(_, f) {
        var g = this;
        return f = i.extend(f || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: s.utf8decode }), h.isNode && h.isStream(_) ? o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : i.prepareContent("the loaded zip file", _, !0, f.optimizedBinaryString, f.base64).then(function(m) {
          var b = new d(f);
          return b.load(m), b;
        }).then(function(m) {
          var b = [o.Promise.resolve(m)], p = m.files;
          if (f.checkCRC32) for (var x = 0; x < p.length; x++) b.push(v(p[x]));
          return o.Promise.all(b);
        }).then(function(m) {
          for (var b = m.shift(), p = b.files, x = 0; x < p.length; x++) {
            var k = p[x], S = k.fileNameStr, C = i.resolve(k.fileNameStr);
            g.file(C, k.decompressed, { binary: !0, optimizedBinaryString: !0, date: k.date, dir: k.dir, comment: k.fileCommentStr.length ? k.fileCommentStr : null, unixPermissions: k.unixPermissions, dosPermissions: k.dosPermissions, createFolders: f.createFolders }), k.dir || (g.file(C).unsafeOriginalName = S);
          }
          return b.zipComment.length && (g.comment = b.zipComment), g;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(t, r, a) {
      var i = t("../utils"), o = t("../stream/GenericWorker");
      function s(d, c) {
        o.call(this, "Nodejs stream input adapter for " + d), this._upstreamEnded = !1, this._bindStream(c);
      }
      i.inherits(s, o), s.prototype._bindStream = function(d) {
        var c = this;
        (this._stream = d).pause(), d.on("data", function(h) {
          c.push({ data: h, meta: { percent: 0 } });
        }).on("error", function(h) {
          c.isPaused ? this.generatedError = h : c.error(h);
        }).on("end", function() {
          c.isPaused ? c._upstreamEnded = !0 : c.end();
        });
      }, s.prototype.pause = function() {
        return !!o.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, s.prototype.resume = function() {
        return !!o.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, r.exports = s;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(t, r, a) {
      var i = t("readable-stream").Readable;
      function o(s, d, c) {
        i.call(this, d), this._helper = s;
        var h = this;
        s.on("data", function(v, _) {
          h.push(v) || h._helper.pause(), c && c(_);
        }).on("error", function(v) {
          h.emit("error", v);
        }).on("end", function() {
          h.push(null);
        });
      }
      t("../utils").inherits(o, i), o.prototype._read = function() {
        this._helper.resume();
      }, r.exports = o;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(t, r, a) {
      r.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(i, o) {
        if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(i, o);
        if (typeof i == "number") throw new Error('The "data" argument must not be a number');
        return new Buffer(i, o);
      }, allocBuffer: function(i) {
        if (Buffer.alloc) return Buffer.alloc(i);
        var o = new Buffer(i);
        return o.fill(0), o;
      }, isBuffer: function(i) {
        return Buffer.isBuffer(i);
      }, isStream: function(i) {
        return i && typeof i.on == "function" && typeof i.pause == "function" && typeof i.resume == "function";
      } };
    }, {}], 15: [function(t, r, a) {
      function i(C, B, R) {
        var P, O = s.getTypeOf(B), z = s.extend(R || {}, h);
        z.date = z.date || /* @__PURE__ */ new Date(), z.compression !== null && (z.compression = z.compression.toUpperCase()), typeof z.unixPermissions == "string" && (z.unixPermissions = parseInt(z.unixPermissions, 8)), z.unixPermissions && 16384 & z.unixPermissions && (z.dir = !0), z.dosPermissions && 16 & z.dosPermissions && (z.dir = !0), z.dir && (C = p(C)), z.createFolders && (P = b(C)) && x.call(this, P, !0);
        var N = O === "string" && z.binary === !1 && z.base64 === !1;
        R && R.binary !== void 0 || (z.binary = !N), (B instanceof v && B.uncompressedSize === 0 || z.dir || !B || B.length === 0) && (z.base64 = !1, z.binary = !0, B = "", z.compression = "STORE", O = "string");
        var y = null;
        y = B instanceof v || B instanceof d ? B : g.isNode && g.isStream(B) ? new m(C, B) : s.prepareContent(C, B, z.binary, z.optimizedBinaryString, z.base64);
        var D = new _(C, y, z);
        this.files[C] = D;
      }
      var o = t("./utf8"), s = t("./utils"), d = t("./stream/GenericWorker"), c = t("./stream/StreamHelper"), h = t("./defaults"), v = t("./compressedObject"), _ = t("./zipObject"), f = t("./generate"), g = t("./nodejsUtils"), m = t("./nodejs/NodejsStreamInputAdapter"), b = function(C) {
        C.slice(-1) === "/" && (C = C.substring(0, C.length - 1));
        var B = C.lastIndexOf("/");
        return 0 < B ? C.substring(0, B) : "";
      }, p = function(C) {
        return C.slice(-1) !== "/" && (C += "/"), C;
      }, x = function(C, B) {
        return B = B !== void 0 ? B : h.createFolders, C = p(C), this.files[C] || i.call(this, C, null, { dir: !0, createFolders: B }), this.files[C];
      };
      function k(C) {
        return Object.prototype.toString.call(C) === "[object RegExp]";
      }
      var S = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(C) {
        var B, R, P;
        for (B in this.files) P = this.files[B], (R = B.slice(this.root.length, B.length)) && B.slice(0, this.root.length) === this.root && C(R, P);
      }, filter: function(C) {
        var B = [];
        return this.forEach(function(R, P) {
          C(R, P) && B.push(P);
        }), B;
      }, file: function(C, B, R) {
        if (arguments.length !== 1) return C = this.root + C, i.call(this, C, B, R), this;
        if (k(C)) {
          var P = C;
          return this.filter(function(z, N) {
            return !N.dir && P.test(z);
          });
        }
        var O = this.files[this.root + C];
        return O && !O.dir ? O : null;
      }, folder: function(C) {
        if (!C) return this;
        if (k(C)) return this.filter(function(O, z) {
          return z.dir && C.test(O);
        });
        var B = this.root + C, R = x.call(this, B), P = this.clone();
        return P.root = R.name, P;
      }, remove: function(C) {
        C = this.root + C;
        var B = this.files[C];
        if (B || (C.slice(-1) !== "/" && (C += "/"), B = this.files[C]), B && !B.dir) delete this.files[C];
        else for (var R = this.filter(function(O, z) {
          return z.name.slice(0, C.length) === C;
        }), P = 0; P < R.length; P++) delete this.files[R[P].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(C) {
        var B, R = {};
        try {
          if ((R = s.extend(C || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: o.utf8encode })).type = R.type.toLowerCase(), R.compression = R.compression.toUpperCase(), R.type === "binarystring" && (R.type = "string"), !R.type) throw new Error("No output type specified.");
          s.checkSupport(R.type), R.platform !== "darwin" && R.platform !== "freebsd" && R.platform !== "linux" && R.platform !== "sunos" || (R.platform = "UNIX"), R.platform === "win32" && (R.platform = "DOS");
          var P = R.comment || this.comment || "";
          B = f.generateWorker(this, R, P);
        } catch (O) {
          (B = new d("error")).error(O);
        }
        return new c(B, R.type || "string", R.mimeType);
      }, generateAsync: function(C, B) {
        return this.generateInternalStream(C).accumulate(B);
      }, generateNodeStream: function(C, B) {
        return (C = C || {}).type || (C.type = "nodebuffer"), this.generateInternalStream(C).toNodejsStream(B);
      } };
      r.exports = S;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(t, r, a) {
      r.exports = t("stream");
    }, { stream: void 0 }], 17: [function(t, r, a) {
      var i = t("./DataReader");
      function o(s) {
        i.call(this, s);
        for (var d = 0; d < this.data.length; d++) s[d] = 255 & s[d];
      }
      t("../utils").inherits(o, i), o.prototype.byteAt = function(s) {
        return this.data[this.zero + s];
      }, o.prototype.lastIndexOfSignature = function(s) {
        for (var d = s.charCodeAt(0), c = s.charCodeAt(1), h = s.charCodeAt(2), v = s.charCodeAt(3), _ = this.length - 4; 0 <= _; --_) if (this.data[_] === d && this.data[_ + 1] === c && this.data[_ + 2] === h && this.data[_ + 3] === v) return _ - this.zero;
        return -1;
      }, o.prototype.readAndCheckSignature = function(s) {
        var d = s.charCodeAt(0), c = s.charCodeAt(1), h = s.charCodeAt(2), v = s.charCodeAt(3), _ = this.readData(4);
        return d === _[0] && c === _[1] && h === _[2] && v === _[3];
      }, o.prototype.readData = function(s) {
        if (this.checkOffset(s), s === 0) return [];
        var d = this.data.slice(this.zero + this.index, this.zero + this.index + s);
        return this.index += s, d;
      }, r.exports = o;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(t, r, a) {
      var i = t("../utils");
      function o(s) {
        this.data = s, this.length = s.length, this.index = 0, this.zero = 0;
      }
      o.prototype = { checkOffset: function(s) {
        this.checkIndex(this.index + s);
      }, checkIndex: function(s) {
        if (this.length < this.zero + s || s < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + s + "). Corrupted zip ?");
      }, setIndex: function(s) {
        this.checkIndex(s), this.index = s;
      }, skip: function(s) {
        this.setIndex(this.index + s);
      }, byteAt: function() {
      }, readInt: function(s) {
        var d, c = 0;
        for (this.checkOffset(s), d = this.index + s - 1; d >= this.index; d--) c = (c << 8) + this.byteAt(d);
        return this.index += s, c;
      }, readString: function(s) {
        return i.transformTo("string", this.readData(s));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var s = this.readInt(4);
        return new Date(Date.UTC(1980 + (s >> 25 & 127), (s >> 21 & 15) - 1, s >> 16 & 31, s >> 11 & 31, s >> 5 & 63, (31 & s) << 1));
      } }, r.exports = o;
    }, { "../utils": 32 }], 19: [function(t, r, a) {
      var i = t("./Uint8ArrayReader");
      function o(s) {
        i.call(this, s);
      }
      t("../utils").inherits(o, i), o.prototype.readData = function(s) {
        this.checkOffset(s);
        var d = this.data.slice(this.zero + this.index, this.zero + this.index + s);
        return this.index += s, d;
      }, r.exports = o;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(t, r, a) {
      var i = t("./DataReader");
      function o(s) {
        i.call(this, s);
      }
      t("../utils").inherits(o, i), o.prototype.byteAt = function(s) {
        return this.data.charCodeAt(this.zero + s);
      }, o.prototype.lastIndexOfSignature = function(s) {
        return this.data.lastIndexOf(s) - this.zero;
      }, o.prototype.readAndCheckSignature = function(s) {
        return s === this.readData(4);
      }, o.prototype.readData = function(s) {
        this.checkOffset(s);
        var d = this.data.slice(this.zero + this.index, this.zero + this.index + s);
        return this.index += s, d;
      }, r.exports = o;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(t, r, a) {
      var i = t("./ArrayReader");
      function o(s) {
        i.call(this, s);
      }
      t("../utils").inherits(o, i), o.prototype.readData = function(s) {
        if (this.checkOffset(s), s === 0) return new Uint8Array(0);
        var d = this.data.subarray(this.zero + this.index, this.zero + this.index + s);
        return this.index += s, d;
      }, r.exports = o;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(t, r, a) {
      var i = t("../utils"), o = t("../support"), s = t("./ArrayReader"), d = t("./StringReader"), c = t("./NodeBufferReader"), h = t("./Uint8ArrayReader");
      r.exports = function(v) {
        var _ = i.getTypeOf(v);
        return i.checkSupport(_), _ !== "string" || o.uint8array ? _ === "nodebuffer" ? new c(v) : o.uint8array ? new h(i.transformTo("uint8array", v)) : new s(i.transformTo("array", v)) : new d(v);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(t, r, a) {
      a.LOCAL_FILE_HEADER = "PK", a.CENTRAL_FILE_HEADER = "PK", a.CENTRAL_DIRECTORY_END = "PK", a.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", a.ZIP64_CENTRAL_DIRECTORY_END = "PK", a.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(t, r, a) {
      var i = t("./GenericWorker"), o = t("../utils");
      function s(d) {
        i.call(this, "ConvertWorker to " + d), this.destType = d;
      }
      o.inherits(s, i), s.prototype.processChunk = function(d) {
        this.push({ data: o.transformTo(this.destType, d.data), meta: d.meta });
      }, r.exports = s;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(t, r, a) {
      var i = t("./GenericWorker"), o = t("../crc32");
      function s() {
        i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      t("../utils").inherits(s, i), s.prototype.processChunk = function(d) {
        this.streamInfo.crc32 = o(d.data, this.streamInfo.crc32 || 0), this.push(d);
      }, r.exports = s;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(t, r, a) {
      var i = t("../utils"), o = t("./GenericWorker");
      function s(d) {
        o.call(this, "DataLengthProbe for " + d), this.propName = d, this.withStreamInfo(d, 0);
      }
      i.inherits(s, o), s.prototype.processChunk = function(d) {
        if (d) {
          var c = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = c + d.data.length;
        }
        o.prototype.processChunk.call(this, d);
      }, r.exports = s;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(t, r, a) {
      var i = t("../utils"), o = t("./GenericWorker");
      function s(d) {
        o.call(this, "DataWorker");
        var c = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, d.then(function(h) {
          c.dataIsReady = !0, c.data = h, c.max = h && h.length || 0, c.type = i.getTypeOf(h), c.isPaused || c._tickAndRepeat();
        }, function(h) {
          c.error(h);
        });
      }
      i.inherits(s, o), s.prototype.cleanUp = function() {
        o.prototype.cleanUp.call(this), this.data = null;
      }, s.prototype.resume = function() {
        return !!o.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, i.delay(this._tickAndRepeat, [], this)), !0);
      }, s.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, s.prototype._tick = function() {
        if (this.isPaused || this.isFinished) return !1;
        var d = null, c = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max) return this.end();
        switch (this.type) {
          case "string":
            d = this.data.substring(this.index, c);
            break;
          case "uint8array":
            d = this.data.subarray(this.index, c);
            break;
          case "array":
          case "nodebuffer":
            d = this.data.slice(this.index, c);
        }
        return this.index = c, this.push({ data: d, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, r.exports = s;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(t, r, a) {
      function i(o) {
        this.name = o || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      i.prototype = { push: function(o) {
        this.emit("data", o);
      }, end: function() {
        if (this.isFinished) return !1;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = !0;
        } catch (o) {
          this.emit("error", o);
        }
        return !0;
      }, error: function(o) {
        return !this.isFinished && (this.isPaused ? this.generatedError = o : (this.isFinished = !0, this.emit("error", o), this.previous && this.previous.error(o), this.cleanUp()), !0);
      }, on: function(o, s) {
        return this._listeners[o].push(s), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(o, s) {
        if (this._listeners[o]) for (var d = 0; d < this._listeners[o].length; d++) this._listeners[o][d].call(this, s);
      }, pipe: function(o) {
        return o.registerPrevious(this);
      }, registerPrevious: function(o) {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = o.streamInfo, this.mergeStreamInfo(), this.previous = o;
        var s = this;
        return o.on("data", function(d) {
          s.processChunk(d);
        }), o.on("end", function() {
          s.end();
        }), o.on("error", function(d) {
          s.error(d);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
      }, resume: function() {
        if (!this.isPaused || this.isFinished) return !1;
        var o = this.isPaused = !1;
        return this.generatedError && (this.error(this.generatedError), o = !0), this.previous && this.previous.resume(), !o;
      }, flush: function() {
      }, processChunk: function(o) {
        this.push(o);
      }, withStreamInfo: function(o, s) {
        return this.extraStreamInfo[o] = s, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var o in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, o) && (this.streamInfo[o] = this.extraStreamInfo[o]);
      }, lock: function() {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var o = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + o : o;
      } }, r.exports = i;
    }, {}], 29: [function(t, r, a) {
      var i = t("../utils"), o = t("./ConvertWorker"), s = t("./GenericWorker"), d = t("../base64"), c = t("../support"), h = t("../external"), v = null;
      if (c.nodestream) try {
        v = t("../nodejs/NodejsStreamOutputAdapter");
      } catch {
      }
      function _(g, m) {
        return new h.Promise(function(b, p) {
          var x = [], k = g._internalType, S = g._outputType, C = g._mimeType;
          g.on("data", function(B, R) {
            x.push(B), m && m(R);
          }).on("error", function(B) {
            x = [], p(B);
          }).on("end", function() {
            try {
              var B = function(R, P, O) {
                switch (R) {
                  case "blob":
                    return i.newBlob(i.transformTo("arraybuffer", P), O);
                  case "base64":
                    return d.encode(P);
                  default:
                    return i.transformTo(R, P);
                }
              }(S, function(R, P) {
                var O, z = 0, N = null, y = 0;
                for (O = 0; O < P.length; O++) y += P[O].length;
                switch (R) {
                  case "string":
                    return P.join("");
                  case "array":
                    return Array.prototype.concat.apply([], P);
                  case "uint8array":
                    for (N = new Uint8Array(y), O = 0; O < P.length; O++) N.set(P[O], z), z += P[O].length;
                    return N;
                  case "nodebuffer":
                    return Buffer.concat(P);
                  default:
                    throw new Error("concat : unsupported type '" + R + "'");
                }
              }(k, x), C);
              b(B);
            } catch (R) {
              p(R);
            }
            x = [];
          }).resume();
        });
      }
      function f(g, m, b) {
        var p = m;
        switch (m) {
          case "blob":
          case "arraybuffer":
            p = "uint8array";
            break;
          case "base64":
            p = "string";
        }
        try {
          this._internalType = p, this._outputType = m, this._mimeType = b, i.checkSupport(p), this._worker = g.pipe(new o(p)), g.lock();
        } catch (x) {
          this._worker = new s("error"), this._worker.error(x);
        }
      }
      f.prototype = { accumulate: function(g) {
        return _(this, g);
      }, on: function(g, m) {
        var b = this;
        return g === "data" ? this._worker.on(g, function(p) {
          m.call(b, p.data, p.meta);
        }) : this._worker.on(g, function() {
          i.delay(m, arguments, b);
        }), this;
      }, resume: function() {
        return i.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(g) {
        if (i.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
        return new v(this, { objectMode: this._outputType !== "nodebuffer" }, g);
      } }, r.exports = f;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(t, r, a) {
      if (a.base64 = !0, a.array = !0, a.string = !0, a.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", a.nodebuffer = typeof Buffer < "u", a.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") a.blob = !1;
      else {
        var i = new ArrayBuffer(0);
        try {
          a.blob = new Blob([i], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var o = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            o.append(i), a.blob = o.getBlob("application/zip").size === 0;
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
      for (var i = t("./utils"), o = t("./support"), s = t("./nodejsUtils"), d = t("./stream/GenericWorker"), c = new Array(256), h = 0; h < 256; h++) c[h] = 252 <= h ? 6 : 248 <= h ? 5 : 240 <= h ? 4 : 224 <= h ? 3 : 192 <= h ? 2 : 1;
      c[254] = c[254] = 1;
      function v() {
        d.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function _() {
        d.call(this, "utf-8 encode");
      }
      a.utf8encode = function(f) {
        return o.nodebuffer ? s.newBufferFrom(f, "utf-8") : function(g) {
          var m, b, p, x, k, S = g.length, C = 0;
          for (x = 0; x < S; x++) (64512 & (b = g.charCodeAt(x))) == 55296 && x + 1 < S && (64512 & (p = g.charCodeAt(x + 1))) == 56320 && (b = 65536 + (b - 55296 << 10) + (p - 56320), x++), C += b < 128 ? 1 : b < 2048 ? 2 : b < 65536 ? 3 : 4;
          for (m = o.uint8array ? new Uint8Array(C) : new Array(C), x = k = 0; k < C; x++) (64512 & (b = g.charCodeAt(x))) == 55296 && x + 1 < S && (64512 & (p = g.charCodeAt(x + 1))) == 56320 && (b = 65536 + (b - 55296 << 10) + (p - 56320), x++), b < 128 ? m[k++] = b : (b < 2048 ? m[k++] = 192 | b >>> 6 : (b < 65536 ? m[k++] = 224 | b >>> 12 : (m[k++] = 240 | b >>> 18, m[k++] = 128 | b >>> 12 & 63), m[k++] = 128 | b >>> 6 & 63), m[k++] = 128 | 63 & b);
          return m;
        }(f);
      }, a.utf8decode = function(f) {
        return o.nodebuffer ? i.transformTo("nodebuffer", f).toString("utf-8") : function(g) {
          var m, b, p, x, k = g.length, S = new Array(2 * k);
          for (m = b = 0; m < k; ) if ((p = g[m++]) < 128) S[b++] = p;
          else if (4 < (x = c[p])) S[b++] = 65533, m += x - 1;
          else {
            for (p &= x === 2 ? 31 : x === 3 ? 15 : 7; 1 < x && m < k; ) p = p << 6 | 63 & g[m++], x--;
            1 < x ? S[b++] = 65533 : p < 65536 ? S[b++] = p : (p -= 65536, S[b++] = 55296 | p >> 10 & 1023, S[b++] = 56320 | 1023 & p);
          }
          return S.length !== b && (S.subarray ? S = S.subarray(0, b) : S.length = b), i.applyFromCharCode(S);
        }(f = i.transformTo(o.uint8array ? "uint8array" : "array", f));
      }, i.inherits(v, d), v.prototype.processChunk = function(f) {
        var g = i.transformTo(o.uint8array ? "uint8array" : "array", f.data);
        if (this.leftOver && this.leftOver.length) {
          if (o.uint8array) {
            var m = g;
            (g = new Uint8Array(m.length + this.leftOver.length)).set(this.leftOver, 0), g.set(m, this.leftOver.length);
          } else g = this.leftOver.concat(g);
          this.leftOver = null;
        }
        var b = function(x, k) {
          var S;
          for ((k = k || x.length) > x.length && (k = x.length), S = k - 1; 0 <= S && (192 & x[S]) == 128; ) S--;
          return S < 0 || S === 0 ? k : S + c[x[S]] > k ? S : k;
        }(g), p = g;
        b !== g.length && (o.uint8array ? (p = g.subarray(0, b), this.leftOver = g.subarray(b, g.length)) : (p = g.slice(0, b), this.leftOver = g.slice(b, g.length))), this.push({ data: a.utf8decode(p), meta: f.meta });
      }, v.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: a.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, a.Utf8DecodeWorker = v, i.inherits(_, d), _.prototype.processChunk = function(f) {
        this.push({ data: a.utf8encode(f.data), meta: f.meta });
      }, a.Utf8EncodeWorker = _;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(t, r, a) {
      var i = t("./support"), o = t("./base64"), s = t("./nodejsUtils"), d = t("./external");
      function c(m) {
        return m;
      }
      function h(m, b) {
        for (var p = 0; p < m.length; ++p) b[p] = 255 & m.charCodeAt(p);
        return b;
      }
      t("setimmediate"), a.newBlob = function(m, b) {
        a.checkSupport("blob");
        try {
          return new Blob([m], { type: b });
        } catch {
          try {
            var p = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return p.append(m), p.getBlob(b);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var v = { stringifyByChunk: function(m, b, p) {
        var x = [], k = 0, S = m.length;
        if (S <= p) return String.fromCharCode.apply(null, m);
        for (; k < S; ) b === "array" || b === "nodebuffer" ? x.push(String.fromCharCode.apply(null, m.slice(k, Math.min(k + p, S)))) : x.push(String.fromCharCode.apply(null, m.subarray(k, Math.min(k + p, S)))), k += p;
        return x.join("");
      }, stringifyByChar: function(m) {
        for (var b = "", p = 0; p < m.length; p++) b += String.fromCharCode(m[p]);
        return b;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return i.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return i.nodebuffer && String.fromCharCode.apply(null, s.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function _(m) {
        var b = 65536, p = a.getTypeOf(m), x = !0;
        if (p === "uint8array" ? x = v.applyCanBeUsed.uint8array : p === "nodebuffer" && (x = v.applyCanBeUsed.nodebuffer), x) for (; 1 < b; ) try {
          return v.stringifyByChunk(m, p, b);
        } catch {
          b = Math.floor(b / 2);
        }
        return v.stringifyByChar(m);
      }
      function f(m, b) {
        for (var p = 0; p < m.length; p++) b[p] = m[p];
        return b;
      }
      a.applyFromCharCode = _;
      var g = {};
      g.string = { string: c, array: function(m) {
        return h(m, new Array(m.length));
      }, arraybuffer: function(m) {
        return g.string.uint8array(m).buffer;
      }, uint8array: function(m) {
        return h(m, new Uint8Array(m.length));
      }, nodebuffer: function(m) {
        return h(m, s.allocBuffer(m.length));
      } }, g.array = { string: _, array: c, arraybuffer: function(m) {
        return new Uint8Array(m).buffer;
      }, uint8array: function(m) {
        return new Uint8Array(m);
      }, nodebuffer: function(m) {
        return s.newBufferFrom(m);
      } }, g.arraybuffer = { string: function(m) {
        return _(new Uint8Array(m));
      }, array: function(m) {
        return f(new Uint8Array(m), new Array(m.byteLength));
      }, arraybuffer: c, uint8array: function(m) {
        return new Uint8Array(m);
      }, nodebuffer: function(m) {
        return s.newBufferFrom(new Uint8Array(m));
      } }, g.uint8array = { string: _, array: function(m) {
        return f(m, new Array(m.length));
      }, arraybuffer: function(m) {
        return m.buffer;
      }, uint8array: c, nodebuffer: function(m) {
        return s.newBufferFrom(m);
      } }, g.nodebuffer = { string: _, array: function(m) {
        return f(m, new Array(m.length));
      }, arraybuffer: function(m) {
        return g.nodebuffer.uint8array(m).buffer;
      }, uint8array: function(m) {
        return f(m, new Uint8Array(m.length));
      }, nodebuffer: c }, a.transformTo = function(m, b) {
        if (b = b || "", !m) return b;
        a.checkSupport(m);
        var p = a.getTypeOf(b);
        return g[p][m](b);
      }, a.resolve = function(m) {
        for (var b = m.split("/"), p = [], x = 0; x < b.length; x++) {
          var k = b[x];
          k === "." || k === "" && x !== 0 && x !== b.length - 1 || (k === ".." ? p.pop() : p.push(k));
        }
        return p.join("/");
      }, a.getTypeOf = function(m) {
        if (typeof m == "string") return "string";
        var b = Object.prototype.toString.call(m);
        return b === "[object Array]" ? "array" : i.nodebuffer && s.isBuffer(m) ? "nodebuffer" : i.uint8array && b === "[object Uint8Array]" ? "uint8array" : i.arraybuffer && b === "[object ArrayBuffer]" ? "arraybuffer" : void 0;
      }, a.checkSupport = function(m) {
        if (!i[m.toLowerCase()]) throw new Error(m + " is not supported by this platform");
      }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(m) {
        var b, p, x = "";
        for (p = 0; p < (m || "").length; p++) x += "\\x" + ((b = m.charCodeAt(p)) < 16 ? "0" : "") + b.toString(16).toUpperCase();
        return x;
      }, a.delay = function(m, b, p) {
        setImmediate(function() {
          m.apply(p || null, b || []);
        });
      }, a.inherits = function(m, b) {
        function p() {
        }
        p.prototype = b.prototype, m.prototype = new p();
      }, a.extend = function() {
        var m, b, p = {};
        for (m = 0; m < arguments.length; m++) for (b in arguments[m]) Object.prototype.hasOwnProperty.call(arguments[m], b) && p[b] === void 0 && (p[b] = arguments[m][b]);
        return p;
      }, a.prepareContent = function(m, b, p, x, k) {
        return d.Promise.resolve(b).then(function(S) {
          return i.blob && (S instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(S)) !== -1) ? Blob.prototype.arrayBuffer !== void 0 ? S.arrayBuffer() : typeof FileReader < "u" ? new d.Promise(function(C, B) {
            var R = new FileReader();
            R.onload = function(P) {
              C(P.target.result);
            }, R.onerror = function(P) {
              B(P.target.error);
            }, R.readAsArrayBuffer(S);
          }) : d.Promise.reject(new Error(m + " is a Blob, but we have no way of reading it.")) : S;
        }).then(function(S) {
          var C = a.getTypeOf(S);
          return C ? (C === "arraybuffer" ? S = a.transformTo("uint8array", S) : C === "string" && (k ? S = o.decode(S) : p && x !== !0 && (S = function(B) {
            return h(B, i.uint8array ? new Uint8Array(B.length) : new Array(B.length));
          }(S))), S) : d.Promise.reject(new Error("Can't read the data of '" + m + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(t, r, a) {
      var i = t("./reader/readerFor"), o = t("./utils"), s = t("./signature"), d = t("./zipEntry"), c = t("./support");
      function h(v) {
        this.files = [], this.loadOptions = v;
      }
      h.prototype = { checkSignature: function(v) {
        if (!this.reader.readAndCheckSignature(v)) {
          this.reader.index -= 4;
          var _ = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + o.pretty(_) + ", expected " + o.pretty(v) + ")");
        }
      }, isSignature: function(v, _) {
        var f = this.reader.index;
        this.reader.setIndex(v);
        var g = this.reader.readString(4) === _;
        return this.reader.setIndex(f), g;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var v = this.reader.readData(this.zipCommentLength), _ = c.uint8array ? "uint8array" : "array", f = o.transformTo(_, v);
        this.zipComment = this.loadOptions.decodeFileName(f);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var v, _, f, g = this.zip64EndOfCentralSize - 44; 0 < g; ) v = this.reader.readInt(2), _ = this.reader.readInt(4), f = this.reader.readData(_), this.zip64ExtensibleData[v] = { id: v, length: _, value: f };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var v, _;
        for (v = 0; v < this.files.length; v++) _ = this.files[v], this.reader.setIndex(_.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), _.readLocalPart(this.reader), _.handleUTF8(), _.processAttributes();
      }, readCentralDir: function() {
        var v;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); ) (v = new d({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(v);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var v = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
        if (v < 0) throw this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(v);
        var _ = v;
        if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === o.MAX_VALUE_16BITS || this.diskWithCentralDirStart === o.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === o.MAX_VALUE_16BITS || this.centralDirRecords === o.MAX_VALUE_16BITS || this.centralDirSize === o.MAX_VALUE_32BITS || this.centralDirOffset === o.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (v = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(v), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var f = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (f += 20, f += 12 + this.zip64EndOfCentralSize);
        var g = _ - f;
        if (0 < g) this.isSignature(_, s.CENTRAL_FILE_HEADER) || (this.reader.zero = g);
        else if (g < 0) throw new Error("Corrupted zip: missing " + Math.abs(g) + " bytes.");
      }, prepareReader: function(v) {
        this.reader = i(v);
      }, load: function(v) {
        this.prepareReader(v), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, r.exports = h;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(t, r, a) {
      var i = t("./reader/readerFor"), o = t("./utils"), s = t("./compressedObject"), d = t("./crc32"), c = t("./utf8"), h = t("./compressions"), v = t("./support");
      function _(f, g) {
        this.options = f, this.loadOptions = g;
      }
      _.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(f) {
        var g, m;
        if (f.skip(22), this.fileNameLength = f.readInt(2), m = f.readInt(2), this.fileName = f.readData(this.fileNameLength), f.skip(m), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((g = function(b) {
          for (var p in h) if (Object.prototype.hasOwnProperty.call(h, p) && h[p].magic === b) return h[p];
          return null;
        }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + o.pretty(this.compressionMethod) + " unknown (inner file : " + o.transformTo("string", this.fileName) + ")");
        this.decompressed = new s(this.compressedSize, this.uncompressedSize, this.crc32, g, f.readData(this.compressedSize));
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
          this.uncompressedSize === o.MAX_VALUE_32BITS && (this.uncompressedSize = f.readInt(8)), this.compressedSize === o.MAX_VALUE_32BITS && (this.compressedSize = f.readInt(8)), this.localHeaderOffset === o.MAX_VALUE_32BITS && (this.localHeaderOffset = f.readInt(8)), this.diskNumberStart === o.MAX_VALUE_32BITS && (this.diskNumberStart = f.readInt(4));
        }
      }, readExtraFields: function(f) {
        var g, m, b, p = f.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); f.index + 4 < p; ) g = f.readInt(2), m = f.readInt(2), b = f.readData(m), this.extraFields[g] = { id: g, length: m, value: b };
        f.setIndex(p);
      }, handleUTF8: function() {
        var f = v.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) this.fileNameStr = c.utf8decode(this.fileName), this.fileCommentStr = c.utf8decode(this.fileComment);
        else {
          var g = this.findExtraFieldUnicodePath();
          if (g !== null) this.fileNameStr = g;
          else {
            var m = o.transformTo(f, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(m);
          }
          var b = this.findExtraFieldUnicodeComment();
          if (b !== null) this.fileCommentStr = b;
          else {
            var p = o.transformTo(f, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(p);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var f = this.extraFields[28789];
        if (f) {
          var g = i(f.value);
          return g.readInt(1) !== 1 || d(this.fileName) !== g.readInt(4) ? null : c.utf8decode(g.readData(f.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var f = this.extraFields[25461];
        if (f) {
          var g = i(f.value);
          return g.readInt(1) !== 1 || d(this.fileComment) !== g.readInt(4) ? null : c.utf8decode(g.readData(f.length - 5));
        }
        return null;
      } }, r.exports = _;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(t, r, a) {
      function i(g, m, b) {
        this.name = g, this.dir = b.dir, this.date = b.date, this.comment = b.comment, this.unixPermissions = b.unixPermissions, this.dosPermissions = b.dosPermissions, this._data = m, this._dataBinary = b.binary, this.options = { compression: b.compression, compressionOptions: b.compressionOptions };
      }
      var o = t("./stream/StreamHelper"), s = t("./stream/DataWorker"), d = t("./utf8"), c = t("./compressedObject"), h = t("./stream/GenericWorker");
      i.prototype = { internalStream: function(g) {
        var m = null, b = "string";
        try {
          if (!g) throw new Error("No output type specified.");
          var p = (b = g.toLowerCase()) === "string" || b === "text";
          b !== "binarystring" && b !== "text" || (b = "string"), m = this._decompressWorker();
          var x = !this._dataBinary;
          x && !p && (m = m.pipe(new d.Utf8EncodeWorker())), !x && p && (m = m.pipe(new d.Utf8DecodeWorker()));
        } catch (k) {
          (m = new h("error")).error(k);
        }
        return new o(m, b, "");
      }, async: function(g, m) {
        return this.internalStream(g).accumulate(m);
      }, nodeStream: function(g, m) {
        return this.internalStream(g || "nodebuffer").toNodejsStream(m);
      }, _compressWorker: function(g, m) {
        if (this._data instanceof c && this._data.compression.magic === g.magic) return this._data.getCompressedWorker();
        var b = this._decompressWorker();
        return this._dataBinary || (b = b.pipe(new d.Utf8EncodeWorker())), c.createWorkerFrom(b, g, m);
      }, _decompressWorker: function() {
        return this._data instanceof c ? this._data.getContentWorker() : this._data instanceof h ? this._data : new s(this._data);
      } };
      for (var v = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], _ = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, f = 0; f < v.length; f++) i.prototype[v[f]] = _;
      r.exports = i;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(t, r, a) {
      (function(i) {
        var o, s, d = i.MutationObserver || i.WebKitMutationObserver;
        if (d) {
          var c = 0, h = new d(g), v = i.document.createTextNode("");
          h.observe(v, { characterData: !0 }), o = function() {
            v.data = c = ++c % 2;
          };
        } else if (i.setImmediate || i.MessageChannel === void 0) o = "document" in i && "onreadystatechange" in i.document.createElement("script") ? function() {
          var m = i.document.createElement("script");
          m.onreadystatechange = function() {
            g(), m.onreadystatechange = null, m.parentNode.removeChild(m), m = null;
          }, i.document.documentElement.appendChild(m);
        } : function() {
          setTimeout(g, 0);
        };
        else {
          var _ = new i.MessageChannel();
          _.port1.onmessage = g, o = function() {
            _.port2.postMessage(0);
          };
        }
        var f = [];
        function g() {
          var m, b;
          s = !0;
          for (var p = f.length; p; ) {
            for (b = f, f = [], m = -1; ++m < p; ) b[m]();
            p = f.length;
          }
          s = !1;
        }
        r.exports = function(m) {
          f.push(m) !== 1 || s || o();
        };
      }).call(this, typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(t, r, a) {
      var i = t("immediate");
      function o() {
      }
      var s = {}, d = ["REJECTED"], c = ["FULFILLED"], h = ["PENDING"];
      function v(p) {
        if (typeof p != "function") throw new TypeError("resolver must be a function");
        this.state = h, this.queue = [], this.outcome = void 0, p !== o && m(this, p);
      }
      function _(p, x, k) {
        this.promise = p, typeof x == "function" && (this.onFulfilled = x, this.callFulfilled = this.otherCallFulfilled), typeof k == "function" && (this.onRejected = k, this.callRejected = this.otherCallRejected);
      }
      function f(p, x, k) {
        i(function() {
          var S;
          try {
            S = x(k);
          } catch (C) {
            return s.reject(p, C);
          }
          S === p ? s.reject(p, new TypeError("Cannot resolve promise with itself")) : s.resolve(p, S);
        });
      }
      function g(p) {
        var x = p && p.then;
        if (p && (typeof p == "object" || typeof p == "function") && typeof x == "function") return function() {
          x.apply(p, arguments);
        };
      }
      function m(p, x) {
        var k = !1;
        function S(R) {
          k || (k = !0, s.reject(p, R));
        }
        function C(R) {
          k || (k = !0, s.resolve(p, R));
        }
        var B = b(function() {
          x(C, S);
        });
        B.status === "error" && S(B.value);
      }
      function b(p, x) {
        var k = {};
        try {
          k.value = p(x), k.status = "success";
        } catch (S) {
          k.status = "error", k.value = S;
        }
        return k;
      }
      (r.exports = v).prototype.finally = function(p) {
        if (typeof p != "function") return this;
        var x = this.constructor;
        return this.then(function(k) {
          return x.resolve(p()).then(function() {
            return k;
          });
        }, function(k) {
          return x.resolve(p()).then(function() {
            throw k;
          });
        });
      }, v.prototype.catch = function(p) {
        return this.then(null, p);
      }, v.prototype.then = function(p, x) {
        if (typeof p != "function" && this.state === c || typeof x != "function" && this.state === d) return this;
        var k = new this.constructor(o);
        return this.state !== h ? f(k, this.state === c ? p : x, this.outcome) : this.queue.push(new _(k, p, x)), k;
      }, _.prototype.callFulfilled = function(p) {
        s.resolve(this.promise, p);
      }, _.prototype.otherCallFulfilled = function(p) {
        f(this.promise, this.onFulfilled, p);
      }, _.prototype.callRejected = function(p) {
        s.reject(this.promise, p);
      }, _.prototype.otherCallRejected = function(p) {
        f(this.promise, this.onRejected, p);
      }, s.resolve = function(p, x) {
        var k = b(g, x);
        if (k.status === "error") return s.reject(p, k.value);
        var S = k.value;
        if (S) m(p, S);
        else {
          p.state = c, p.outcome = x;
          for (var C = -1, B = p.queue.length; ++C < B; ) p.queue[C].callFulfilled(x);
        }
        return p;
      }, s.reject = function(p, x) {
        p.state = d, p.outcome = x;
        for (var k = -1, S = p.queue.length; ++k < S; ) p.queue[k].callRejected(x);
        return p;
      }, v.resolve = function(p) {
        return p instanceof this ? p : s.resolve(new this(o), p);
      }, v.reject = function(p) {
        var x = new this(o);
        return s.reject(x, p);
      }, v.all = function(p) {
        var x = this;
        if (Object.prototype.toString.call(p) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var k = p.length, S = !1;
        if (!k) return this.resolve([]);
        for (var C = new Array(k), B = 0, R = -1, P = new this(o); ++R < k; ) O(p[R], R);
        return P;
        function O(z, N) {
          x.resolve(z).then(function(y) {
            C[N] = y, ++B !== k || S || (S = !0, s.resolve(P, C));
          }, function(y) {
            S || (S = !0, s.reject(P, y));
          });
        }
      }, v.race = function(p) {
        var x = this;
        if (Object.prototype.toString.call(p) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var k = p.length, S = !1;
        if (!k) return this.resolve([]);
        for (var C = -1, B = new this(o); ++C < k; ) R = p[C], x.resolve(R).then(function(P) {
          S || (S = !0, s.resolve(B, P));
        }, function(P) {
          S || (S = !0, s.reject(B, P));
        });
        var R;
        return B;
      };
    }, { immediate: 36 }], 38: [function(t, r, a) {
      var i = {};
      (0, t("./lib/utils/common").assign)(i, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), r.exports = i;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(t, r, a) {
      var i = t("./zlib/deflate"), o = t("./utils/common"), s = t("./utils/strings"), d = t("./zlib/messages"), c = t("./zlib/zstream"), h = Object.prototype.toString, v = 0, _ = -1, f = 0, g = 8;
      function m(p) {
        if (!(this instanceof m)) return new m(p);
        this.options = o.assign({ level: _, method: g, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: f, to: "" }, p || {});
        var x = this.options;
        x.raw && 0 < x.windowBits ? x.windowBits = -x.windowBits : x.gzip && 0 < x.windowBits && x.windowBits < 16 && (x.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new c(), this.strm.avail_out = 0;
        var k = i.deflateInit2(this.strm, x.level, x.method, x.windowBits, x.memLevel, x.strategy);
        if (k !== v) throw new Error(d[k]);
        if (x.header && i.deflateSetHeader(this.strm, x.header), x.dictionary) {
          var S;
          if (S = typeof x.dictionary == "string" ? s.string2buf(x.dictionary) : h.call(x.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(x.dictionary) : x.dictionary, (k = i.deflateSetDictionary(this.strm, S)) !== v) throw new Error(d[k]);
          this._dict_set = !0;
        }
      }
      function b(p, x) {
        var k = new m(x);
        if (k.push(p, !0), k.err) throw k.msg || d[k.err];
        return k.result;
      }
      m.prototype.push = function(p, x) {
        var k, S, C = this.strm, B = this.options.chunkSize;
        if (this.ended) return !1;
        S = x === ~~x ? x : x === !0 ? 4 : 0, typeof p == "string" ? C.input = s.string2buf(p) : h.call(p) === "[object ArrayBuffer]" ? C.input = new Uint8Array(p) : C.input = p, C.next_in = 0, C.avail_in = C.input.length;
        do {
          if (C.avail_out === 0 && (C.output = new o.Buf8(B), C.next_out = 0, C.avail_out = B), (k = i.deflate(C, S)) !== 1 && k !== v) return this.onEnd(k), !(this.ended = !0);
          C.avail_out !== 0 && (C.avail_in !== 0 || S !== 4 && S !== 2) || (this.options.to === "string" ? this.onData(s.buf2binstring(o.shrinkBuf(C.output, C.next_out))) : this.onData(o.shrinkBuf(C.output, C.next_out)));
        } while ((0 < C.avail_in || C.avail_out === 0) && k !== 1);
        return S === 4 ? (k = i.deflateEnd(this.strm), this.onEnd(k), this.ended = !0, k === v) : S !== 2 || (this.onEnd(v), !(C.avail_out = 0));
      }, m.prototype.onData = function(p) {
        this.chunks.push(p);
      }, m.prototype.onEnd = function(p) {
        p === v && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = p, this.msg = this.strm.msg;
      }, a.Deflate = m, a.deflate = b, a.deflateRaw = function(p, x) {
        return (x = x || {}).raw = !0, b(p, x);
      }, a.gzip = function(p, x) {
        return (x = x || {}).gzip = !0, b(p, x);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(t, r, a) {
      var i = t("./zlib/inflate"), o = t("./utils/common"), s = t("./utils/strings"), d = t("./zlib/constants"), c = t("./zlib/messages"), h = t("./zlib/zstream"), v = t("./zlib/gzheader"), _ = Object.prototype.toString;
      function f(m) {
        if (!(this instanceof f)) return new f(m);
        this.options = o.assign({ chunkSize: 16384, windowBits: 0, to: "" }, m || {});
        var b = this.options;
        b.raw && 0 <= b.windowBits && b.windowBits < 16 && (b.windowBits = -b.windowBits, b.windowBits === 0 && (b.windowBits = -15)), !(0 <= b.windowBits && b.windowBits < 16) || m && m.windowBits || (b.windowBits += 32), 15 < b.windowBits && b.windowBits < 48 && !(15 & b.windowBits) && (b.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new h(), this.strm.avail_out = 0;
        var p = i.inflateInit2(this.strm, b.windowBits);
        if (p !== d.Z_OK) throw new Error(c[p]);
        this.header = new v(), i.inflateGetHeader(this.strm, this.header);
      }
      function g(m, b) {
        var p = new f(b);
        if (p.push(m, !0), p.err) throw p.msg || c[p.err];
        return p.result;
      }
      f.prototype.push = function(m, b) {
        var p, x, k, S, C, B, R = this.strm, P = this.options.chunkSize, O = this.options.dictionary, z = !1;
        if (this.ended) return !1;
        x = b === ~~b ? b : b === !0 ? d.Z_FINISH : d.Z_NO_FLUSH, typeof m == "string" ? R.input = s.binstring2buf(m) : _.call(m) === "[object ArrayBuffer]" ? R.input = new Uint8Array(m) : R.input = m, R.next_in = 0, R.avail_in = R.input.length;
        do {
          if (R.avail_out === 0 && (R.output = new o.Buf8(P), R.next_out = 0, R.avail_out = P), (p = i.inflate(R, d.Z_NO_FLUSH)) === d.Z_NEED_DICT && O && (B = typeof O == "string" ? s.string2buf(O) : _.call(O) === "[object ArrayBuffer]" ? new Uint8Array(O) : O, p = i.inflateSetDictionary(this.strm, B)), p === d.Z_BUF_ERROR && z === !0 && (p = d.Z_OK, z = !1), p !== d.Z_STREAM_END && p !== d.Z_OK) return this.onEnd(p), !(this.ended = !0);
          R.next_out && (R.avail_out !== 0 && p !== d.Z_STREAM_END && (R.avail_in !== 0 || x !== d.Z_FINISH && x !== d.Z_SYNC_FLUSH) || (this.options.to === "string" ? (k = s.utf8border(R.output, R.next_out), S = R.next_out - k, C = s.buf2string(R.output, k), R.next_out = S, R.avail_out = P - S, S && o.arraySet(R.output, R.output, k, S, 0), this.onData(C)) : this.onData(o.shrinkBuf(R.output, R.next_out)))), R.avail_in === 0 && R.avail_out === 0 && (z = !0);
        } while ((0 < R.avail_in || R.avail_out === 0) && p !== d.Z_STREAM_END);
        return p === d.Z_STREAM_END && (x = d.Z_FINISH), x === d.Z_FINISH ? (p = i.inflateEnd(this.strm), this.onEnd(p), this.ended = !0, p === d.Z_OK) : x !== d.Z_SYNC_FLUSH || (this.onEnd(d.Z_OK), !(R.avail_out = 0));
      }, f.prototype.onData = function(m) {
        this.chunks.push(m);
      }, f.prototype.onEnd = function(m) {
        m === d.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = m, this.msg = this.strm.msg;
      }, a.Inflate = f, a.inflate = g, a.inflateRaw = function(m, b) {
        return (b = b || {}).raw = !0, g(m, b);
      }, a.ungzip = g;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(t, r, a) {
      var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      a.assign = function(d) {
        for (var c = Array.prototype.slice.call(arguments, 1); c.length; ) {
          var h = c.shift();
          if (h) {
            if (typeof h != "object") throw new TypeError(h + "must be non-object");
            for (var v in h) h.hasOwnProperty(v) && (d[v] = h[v]);
          }
        }
        return d;
      }, a.shrinkBuf = function(d, c) {
        return d.length === c ? d : d.subarray ? d.subarray(0, c) : (d.length = c, d);
      };
      var o = { arraySet: function(d, c, h, v, _) {
        if (c.subarray && d.subarray) d.set(c.subarray(h, h + v), _);
        else for (var f = 0; f < v; f++) d[_ + f] = c[h + f];
      }, flattenChunks: function(d) {
        var c, h, v, _, f, g;
        for (c = v = 0, h = d.length; c < h; c++) v += d[c].length;
        for (g = new Uint8Array(v), c = _ = 0, h = d.length; c < h; c++) f = d[c], g.set(f, _), _ += f.length;
        return g;
      } }, s = { arraySet: function(d, c, h, v, _) {
        for (var f = 0; f < v; f++) d[_ + f] = c[h + f];
      }, flattenChunks: function(d) {
        return [].concat.apply([], d);
      } };
      a.setTyped = function(d) {
        d ? (a.Buf8 = Uint8Array, a.Buf16 = Uint16Array, a.Buf32 = Int32Array, a.assign(a, o)) : (a.Buf8 = Array, a.Buf16 = Array, a.Buf32 = Array, a.assign(a, s));
      }, a.setTyped(i);
    }, {}], 42: [function(t, r, a) {
      var i = t("./common"), o = !0, s = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        o = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        s = !1;
      }
      for (var d = new i.Buf8(256), c = 0; c < 256; c++) d[c] = 252 <= c ? 6 : 248 <= c ? 5 : 240 <= c ? 4 : 224 <= c ? 3 : 192 <= c ? 2 : 1;
      function h(v, _) {
        if (_ < 65537 && (v.subarray && s || !v.subarray && o)) return String.fromCharCode.apply(null, i.shrinkBuf(v, _));
        for (var f = "", g = 0; g < _; g++) f += String.fromCharCode(v[g]);
        return f;
      }
      d[254] = d[254] = 1, a.string2buf = function(v) {
        var _, f, g, m, b, p = v.length, x = 0;
        for (m = 0; m < p; m++) (64512 & (f = v.charCodeAt(m))) == 55296 && m + 1 < p && (64512 & (g = v.charCodeAt(m + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (g - 56320), m++), x += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
        for (_ = new i.Buf8(x), m = b = 0; b < x; m++) (64512 & (f = v.charCodeAt(m))) == 55296 && m + 1 < p && (64512 & (g = v.charCodeAt(m + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (g - 56320), m++), f < 128 ? _[b++] = f : (f < 2048 ? _[b++] = 192 | f >>> 6 : (f < 65536 ? _[b++] = 224 | f >>> 12 : (_[b++] = 240 | f >>> 18, _[b++] = 128 | f >>> 12 & 63), _[b++] = 128 | f >>> 6 & 63), _[b++] = 128 | 63 & f);
        return _;
      }, a.buf2binstring = function(v) {
        return h(v, v.length);
      }, a.binstring2buf = function(v) {
        for (var _ = new i.Buf8(v.length), f = 0, g = _.length; f < g; f++) _[f] = v.charCodeAt(f);
        return _;
      }, a.buf2string = function(v, _) {
        var f, g, m, b, p = _ || v.length, x = new Array(2 * p);
        for (f = g = 0; f < p; ) if ((m = v[f++]) < 128) x[g++] = m;
        else if (4 < (b = d[m])) x[g++] = 65533, f += b - 1;
        else {
          for (m &= b === 2 ? 31 : b === 3 ? 15 : 7; 1 < b && f < p; ) m = m << 6 | 63 & v[f++], b--;
          1 < b ? x[g++] = 65533 : m < 65536 ? x[g++] = m : (m -= 65536, x[g++] = 55296 | m >> 10 & 1023, x[g++] = 56320 | 1023 & m);
        }
        return h(x, g);
      }, a.utf8border = function(v, _) {
        var f;
        for ((_ = _ || v.length) > v.length && (_ = v.length), f = _ - 1; 0 <= f && (192 & v[f]) == 128; ) f--;
        return f < 0 || f === 0 ? _ : f + d[v[f]] > _ ? f : _;
      };
    }, { "./common": 41 }], 43: [function(t, r, a) {
      r.exports = function(i, o, s, d) {
        for (var c = 65535 & i | 0, h = i >>> 16 & 65535 | 0, v = 0; s !== 0; ) {
          for (s -= v = 2e3 < s ? 2e3 : s; h = h + (c = c + o[d++] | 0) | 0, --v; ) ;
          c %= 65521, h %= 65521;
        }
        return c | h << 16 | 0;
      };
    }, {}], 44: [function(t, r, a) {
      r.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(t, r, a) {
      var i = function() {
        for (var o, s = [], d = 0; d < 256; d++) {
          o = d;
          for (var c = 0; c < 8; c++) o = 1 & o ? 3988292384 ^ o >>> 1 : o >>> 1;
          s[d] = o;
        }
        return s;
      }();
      r.exports = function(o, s, d, c) {
        var h = i, v = c + d;
        o ^= -1;
        for (var _ = c; _ < v; _++) o = o >>> 8 ^ h[255 & (o ^ s[_])];
        return -1 ^ o;
      };
    }, {}], 46: [function(t, r, a) {
      var i, o = t("../utils/common"), s = t("./trees"), d = t("./adler32"), c = t("./crc32"), h = t("./messages"), v = 0, _ = 4, f = 0, g = -2, m = -1, b = 4, p = 2, x = 8, k = 9, S = 286, C = 30, B = 19, R = 2 * S + 1, P = 15, O = 3, z = 258, N = z + O + 1, y = 42, D = 113, u = 1, Z = 2, re = 3, X = 4;
      function ie(l, H) {
        return l.msg = h[H], H;
      }
      function W(l) {
        return (l << 1) - (4 < l ? 9 : 0);
      }
      function ae(l) {
        for (var H = l.length; 0 <= --H; ) l[H] = 0;
      }
      function U(l) {
        var H = l.state, M = H.pending;
        M > l.avail_out && (M = l.avail_out), M !== 0 && (o.arraySet(l.output, H.pending_buf, H.pending_out, M, l.next_out), l.next_out += M, H.pending_out += M, l.total_out += M, l.avail_out -= M, H.pending -= M, H.pending === 0 && (H.pending_out = 0));
      }
      function T(l, H) {
        s._tr_flush_block(l, 0 <= l.block_start ? l.block_start : -1, l.strstart - l.block_start, H), l.block_start = l.strstart, U(l.strm);
      }
      function q(l, H) {
        l.pending_buf[l.pending++] = H;
      }
      function j(l, H) {
        l.pending_buf[l.pending++] = H >>> 8 & 255, l.pending_buf[l.pending++] = 255 & H;
      }
      function Y(l, H) {
        var M, A, E = l.max_chain_length, L = l.strstart, G = l.prev_length, $ = l.nice_match, F = l.strstart > l.w_size - N ? l.strstart - (l.w_size - N) : 0, J = l.window, te = l.w_mask, Q = l.prev, ne = l.strstart + z, he = J[L + G - 1], fe = J[L + G];
        l.prev_length >= l.good_match && (E >>= 2), $ > l.lookahead && ($ = l.lookahead);
        do
          if (J[(M = H) + G] === fe && J[M + G - 1] === he && J[M] === J[L] && J[++M] === J[L + 1]) {
            L += 2, M++;
            do
              ;
            while (J[++L] === J[++M] && J[++L] === J[++M] && J[++L] === J[++M] && J[++L] === J[++M] && J[++L] === J[++M] && J[++L] === J[++M] && J[++L] === J[++M] && J[++L] === J[++M] && L < ne);
            if (A = z - (ne - L), L = ne - z, G < A) {
              if (l.match_start = H, $ <= (G = A)) break;
              he = J[L + G - 1], fe = J[L + G];
            }
          }
        while ((H = Q[H & te]) > F && --E != 0);
        return G <= l.lookahead ? G : l.lookahead;
      }
      function le(l) {
        var H, M, A, E, L, G, $, F, J, te, Q = l.w_size;
        do {
          if (E = l.window_size - l.lookahead - l.strstart, l.strstart >= Q + (Q - N)) {
            for (o.arraySet(l.window, l.window, Q, Q, 0), l.match_start -= Q, l.strstart -= Q, l.block_start -= Q, H = M = l.hash_size; A = l.head[--H], l.head[H] = Q <= A ? A - Q : 0, --M; ) ;
            for (H = M = Q; A = l.prev[--H], l.prev[H] = Q <= A ? A - Q : 0, --M; ) ;
            E += Q;
          }
          if (l.strm.avail_in === 0) break;
          if (G = l.strm, $ = l.window, F = l.strstart + l.lookahead, J = E, te = void 0, te = G.avail_in, J < te && (te = J), M = te === 0 ? 0 : (G.avail_in -= te, o.arraySet($, G.input, G.next_in, te, F), G.state.wrap === 1 ? G.adler = d(G.adler, $, te, F) : G.state.wrap === 2 && (G.adler = c(G.adler, $, te, F)), G.next_in += te, G.total_in += te, te), l.lookahead += M, l.lookahead + l.insert >= O) for (L = l.strstart - l.insert, l.ins_h = l.window[L], l.ins_h = (l.ins_h << l.hash_shift ^ l.window[L + 1]) & l.hash_mask; l.insert && (l.ins_h = (l.ins_h << l.hash_shift ^ l.window[L + O - 1]) & l.hash_mask, l.prev[L & l.w_mask] = l.head[l.ins_h], l.head[l.ins_h] = L, L++, l.insert--, !(l.lookahead + l.insert < O)); ) ;
        } while (l.lookahead < N && l.strm.avail_in !== 0);
      }
      function ce(l, H) {
        for (var M, A; ; ) {
          if (l.lookahead < N) {
            if (le(l), l.lookahead < N && H === v) return u;
            if (l.lookahead === 0) break;
          }
          if (M = 0, l.lookahead >= O && (l.ins_h = (l.ins_h << l.hash_shift ^ l.window[l.strstart + O - 1]) & l.hash_mask, M = l.prev[l.strstart & l.w_mask] = l.head[l.ins_h], l.head[l.ins_h] = l.strstart), M !== 0 && l.strstart - M <= l.w_size - N && (l.match_length = Y(l, M)), l.match_length >= O) if (A = s._tr_tally(l, l.strstart - l.match_start, l.match_length - O), l.lookahead -= l.match_length, l.match_length <= l.max_lazy_match && l.lookahead >= O) {
            for (l.match_length--; l.strstart++, l.ins_h = (l.ins_h << l.hash_shift ^ l.window[l.strstart + O - 1]) & l.hash_mask, M = l.prev[l.strstart & l.w_mask] = l.head[l.ins_h], l.head[l.ins_h] = l.strstart, --l.match_length != 0; ) ;
            l.strstart++;
          } else l.strstart += l.match_length, l.match_length = 0, l.ins_h = l.window[l.strstart], l.ins_h = (l.ins_h << l.hash_shift ^ l.window[l.strstart + 1]) & l.hash_mask;
          else A = s._tr_tally(l, 0, l.window[l.strstart]), l.lookahead--, l.strstart++;
          if (A && (T(l, !1), l.strm.avail_out === 0)) return u;
        }
        return l.insert = l.strstart < O - 1 ? l.strstart : O - 1, H === _ ? (T(l, !0), l.strm.avail_out === 0 ? re : X) : l.last_lit && (T(l, !1), l.strm.avail_out === 0) ? u : Z;
      }
      function oe(l, H) {
        for (var M, A, E; ; ) {
          if (l.lookahead < N) {
            if (le(l), l.lookahead < N && H === v) return u;
            if (l.lookahead === 0) break;
          }
          if (M = 0, l.lookahead >= O && (l.ins_h = (l.ins_h << l.hash_shift ^ l.window[l.strstart + O - 1]) & l.hash_mask, M = l.prev[l.strstart & l.w_mask] = l.head[l.ins_h], l.head[l.ins_h] = l.strstart), l.prev_length = l.match_length, l.prev_match = l.match_start, l.match_length = O - 1, M !== 0 && l.prev_length < l.max_lazy_match && l.strstart - M <= l.w_size - N && (l.match_length = Y(l, M), l.match_length <= 5 && (l.strategy === 1 || l.match_length === O && 4096 < l.strstart - l.match_start) && (l.match_length = O - 1)), l.prev_length >= O && l.match_length <= l.prev_length) {
            for (E = l.strstart + l.lookahead - O, A = s._tr_tally(l, l.strstart - 1 - l.prev_match, l.prev_length - O), l.lookahead -= l.prev_length - 1, l.prev_length -= 2; ++l.strstart <= E && (l.ins_h = (l.ins_h << l.hash_shift ^ l.window[l.strstart + O - 1]) & l.hash_mask, M = l.prev[l.strstart & l.w_mask] = l.head[l.ins_h], l.head[l.ins_h] = l.strstart), --l.prev_length != 0; ) ;
            if (l.match_available = 0, l.match_length = O - 1, l.strstart++, A && (T(l, !1), l.strm.avail_out === 0)) return u;
          } else if (l.match_available) {
            if ((A = s._tr_tally(l, 0, l.window[l.strstart - 1])) && T(l, !1), l.strstart++, l.lookahead--, l.strm.avail_out === 0) return u;
          } else l.match_available = 1, l.strstart++, l.lookahead--;
        }
        return l.match_available && (A = s._tr_tally(l, 0, l.window[l.strstart - 1]), l.match_available = 0), l.insert = l.strstart < O - 1 ? l.strstart : O - 1, H === _ ? (T(l, !0), l.strm.avail_out === 0 ? re : X) : l.last_lit && (T(l, !1), l.strm.avail_out === 0) ? u : Z;
      }
      function ue(l, H, M, A, E) {
        this.good_length = l, this.max_lazy = H, this.nice_length = M, this.max_chain = A, this.func = E;
      }
      function ye() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = x, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new o.Buf16(2 * R), this.dyn_dtree = new o.Buf16(2 * (2 * C + 1)), this.bl_tree = new o.Buf16(2 * (2 * B + 1)), ae(this.dyn_ltree), ae(this.dyn_dtree), ae(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new o.Buf16(P + 1), this.heap = new o.Buf16(2 * S + 1), ae(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new o.Buf16(2 * S + 1), ae(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function _e(l) {
        var H;
        return l && l.state ? (l.total_in = l.total_out = 0, l.data_type = p, (H = l.state).pending = 0, H.pending_out = 0, H.wrap < 0 && (H.wrap = -H.wrap), H.status = H.wrap ? y : D, l.adler = H.wrap === 2 ? 0 : 1, H.last_flush = v, s._tr_init(H), f) : ie(l, g);
      }
      function Ce(l) {
        var H = _e(l);
        return H === f && function(M) {
          M.window_size = 2 * M.w_size, ae(M.head), M.max_lazy_match = i[M.level].max_lazy, M.good_match = i[M.level].good_length, M.nice_match = i[M.level].nice_length, M.max_chain_length = i[M.level].max_chain, M.strstart = 0, M.block_start = 0, M.lookahead = 0, M.insert = 0, M.match_length = M.prev_length = O - 1, M.match_available = 0, M.ins_h = 0;
        }(l.state), H;
      }
      function Ne(l, H, M, A, E, L) {
        if (!l) return g;
        var G = 1;
        if (H === m && (H = 6), A < 0 ? (G = 0, A = -A) : 15 < A && (G = 2, A -= 16), E < 1 || k < E || M !== x || A < 8 || 15 < A || H < 0 || 9 < H || L < 0 || b < L) return ie(l, g);
        A === 8 && (A = 9);
        var $ = new ye();
        return (l.state = $).strm = l, $.wrap = G, $.gzhead = null, $.w_bits = A, $.w_size = 1 << $.w_bits, $.w_mask = $.w_size - 1, $.hash_bits = E + 7, $.hash_size = 1 << $.hash_bits, $.hash_mask = $.hash_size - 1, $.hash_shift = ~~(($.hash_bits + O - 1) / O), $.window = new o.Buf8(2 * $.w_size), $.head = new o.Buf16($.hash_size), $.prev = new o.Buf16($.w_size), $.lit_bufsize = 1 << E + 6, $.pending_buf_size = 4 * $.lit_bufsize, $.pending_buf = new o.Buf8($.pending_buf_size), $.d_buf = 1 * $.lit_bufsize, $.l_buf = 3 * $.lit_bufsize, $.level = H, $.strategy = L, $.method = M, Ce(l);
      }
      i = [new ue(0, 0, 0, 0, function(l, H) {
        var M = 65535;
        for (M > l.pending_buf_size - 5 && (M = l.pending_buf_size - 5); ; ) {
          if (l.lookahead <= 1) {
            if (le(l), l.lookahead === 0 && H === v) return u;
            if (l.lookahead === 0) break;
          }
          l.strstart += l.lookahead, l.lookahead = 0;
          var A = l.block_start + M;
          if ((l.strstart === 0 || l.strstart >= A) && (l.lookahead = l.strstart - A, l.strstart = A, T(l, !1), l.strm.avail_out === 0) || l.strstart - l.block_start >= l.w_size - N && (T(l, !1), l.strm.avail_out === 0)) return u;
        }
        return l.insert = 0, H === _ ? (T(l, !0), l.strm.avail_out === 0 ? re : X) : (l.strstart > l.block_start && (T(l, !1), l.strm.avail_out), u);
      }), new ue(4, 4, 8, 4, ce), new ue(4, 5, 16, 8, ce), new ue(4, 6, 32, 32, ce), new ue(4, 4, 16, 16, oe), new ue(8, 16, 32, 32, oe), new ue(8, 16, 128, 128, oe), new ue(8, 32, 128, 256, oe), new ue(32, 128, 258, 1024, oe), new ue(32, 258, 258, 4096, oe)], a.deflateInit = function(l, H) {
        return Ne(l, H, x, 15, 8, 0);
      }, a.deflateInit2 = Ne, a.deflateReset = Ce, a.deflateResetKeep = _e, a.deflateSetHeader = function(l, H) {
        return l && l.state ? l.state.wrap !== 2 ? g : (l.state.gzhead = H, f) : g;
      }, a.deflate = function(l, H) {
        var M, A, E, L;
        if (!l || !l.state || 5 < H || H < 0) return l ? ie(l, g) : g;
        if (A = l.state, !l.output || !l.input && l.avail_in !== 0 || A.status === 666 && H !== _) return ie(l, l.avail_out === 0 ? -5 : g);
        if (A.strm = l, M = A.last_flush, A.last_flush = H, A.status === y) if (A.wrap === 2) l.adler = 0, q(A, 31), q(A, 139), q(A, 8), A.gzhead ? (q(A, (A.gzhead.text ? 1 : 0) + (A.gzhead.hcrc ? 2 : 0) + (A.gzhead.extra ? 4 : 0) + (A.gzhead.name ? 8 : 0) + (A.gzhead.comment ? 16 : 0)), q(A, 255 & A.gzhead.time), q(A, A.gzhead.time >> 8 & 255), q(A, A.gzhead.time >> 16 & 255), q(A, A.gzhead.time >> 24 & 255), q(A, A.level === 9 ? 2 : 2 <= A.strategy || A.level < 2 ? 4 : 0), q(A, 255 & A.gzhead.os), A.gzhead.extra && A.gzhead.extra.length && (q(A, 255 & A.gzhead.extra.length), q(A, A.gzhead.extra.length >> 8 & 255)), A.gzhead.hcrc && (l.adler = c(l.adler, A.pending_buf, A.pending, 0)), A.gzindex = 0, A.status = 69) : (q(A, 0), q(A, 0), q(A, 0), q(A, 0), q(A, 0), q(A, A.level === 9 ? 2 : 2 <= A.strategy || A.level < 2 ? 4 : 0), q(A, 3), A.status = D);
        else {
          var G = x + (A.w_bits - 8 << 4) << 8;
          G |= (2 <= A.strategy || A.level < 2 ? 0 : A.level < 6 ? 1 : A.level === 6 ? 2 : 3) << 6, A.strstart !== 0 && (G |= 32), G += 31 - G % 31, A.status = D, j(A, G), A.strstart !== 0 && (j(A, l.adler >>> 16), j(A, 65535 & l.adler)), l.adler = 1;
        }
        if (A.status === 69) if (A.gzhead.extra) {
          for (E = A.pending; A.gzindex < (65535 & A.gzhead.extra.length) && (A.pending !== A.pending_buf_size || (A.gzhead.hcrc && A.pending > E && (l.adler = c(l.adler, A.pending_buf, A.pending - E, E)), U(l), E = A.pending, A.pending !== A.pending_buf_size)); ) q(A, 255 & A.gzhead.extra[A.gzindex]), A.gzindex++;
          A.gzhead.hcrc && A.pending > E && (l.adler = c(l.adler, A.pending_buf, A.pending - E, E)), A.gzindex === A.gzhead.extra.length && (A.gzindex = 0, A.status = 73);
        } else A.status = 73;
        if (A.status === 73) if (A.gzhead.name) {
          E = A.pending;
          do {
            if (A.pending === A.pending_buf_size && (A.gzhead.hcrc && A.pending > E && (l.adler = c(l.adler, A.pending_buf, A.pending - E, E)), U(l), E = A.pending, A.pending === A.pending_buf_size)) {
              L = 1;
              break;
            }
            L = A.gzindex < A.gzhead.name.length ? 255 & A.gzhead.name.charCodeAt(A.gzindex++) : 0, q(A, L);
          } while (L !== 0);
          A.gzhead.hcrc && A.pending > E && (l.adler = c(l.adler, A.pending_buf, A.pending - E, E)), L === 0 && (A.gzindex = 0, A.status = 91);
        } else A.status = 91;
        if (A.status === 91) if (A.gzhead.comment) {
          E = A.pending;
          do {
            if (A.pending === A.pending_buf_size && (A.gzhead.hcrc && A.pending > E && (l.adler = c(l.adler, A.pending_buf, A.pending - E, E)), U(l), E = A.pending, A.pending === A.pending_buf_size)) {
              L = 1;
              break;
            }
            L = A.gzindex < A.gzhead.comment.length ? 255 & A.gzhead.comment.charCodeAt(A.gzindex++) : 0, q(A, L);
          } while (L !== 0);
          A.gzhead.hcrc && A.pending > E && (l.adler = c(l.adler, A.pending_buf, A.pending - E, E)), L === 0 && (A.status = 103);
        } else A.status = 103;
        if (A.status === 103 && (A.gzhead.hcrc ? (A.pending + 2 > A.pending_buf_size && U(l), A.pending + 2 <= A.pending_buf_size && (q(A, 255 & l.adler), q(A, l.adler >> 8 & 255), l.adler = 0, A.status = D)) : A.status = D), A.pending !== 0) {
          if (U(l), l.avail_out === 0) return A.last_flush = -1, f;
        } else if (l.avail_in === 0 && W(H) <= W(M) && H !== _) return ie(l, -5);
        if (A.status === 666 && l.avail_in !== 0) return ie(l, -5);
        if (l.avail_in !== 0 || A.lookahead !== 0 || H !== v && A.status !== 666) {
          var $ = A.strategy === 2 ? function(F, J) {
            for (var te; ; ) {
              if (F.lookahead === 0 && (le(F), F.lookahead === 0)) {
                if (J === v) return u;
                break;
              }
              if (F.match_length = 0, te = s._tr_tally(F, 0, F.window[F.strstart]), F.lookahead--, F.strstart++, te && (T(F, !1), F.strm.avail_out === 0)) return u;
            }
            return F.insert = 0, J === _ ? (T(F, !0), F.strm.avail_out === 0 ? re : X) : F.last_lit && (T(F, !1), F.strm.avail_out === 0) ? u : Z;
          }(A, H) : A.strategy === 3 ? function(F, J) {
            for (var te, Q, ne, he, fe = F.window; ; ) {
              if (F.lookahead <= z) {
                if (le(F), F.lookahead <= z && J === v) return u;
                if (F.lookahead === 0) break;
              }
              if (F.match_length = 0, F.lookahead >= O && 0 < F.strstart && (Q = fe[ne = F.strstart - 1]) === fe[++ne] && Q === fe[++ne] && Q === fe[++ne]) {
                he = F.strstart + z;
                do
                  ;
                while (Q === fe[++ne] && Q === fe[++ne] && Q === fe[++ne] && Q === fe[++ne] && Q === fe[++ne] && Q === fe[++ne] && Q === fe[++ne] && Q === fe[++ne] && ne < he);
                F.match_length = z - (he - ne), F.match_length > F.lookahead && (F.match_length = F.lookahead);
              }
              if (F.match_length >= O ? (te = s._tr_tally(F, 1, F.match_length - O), F.lookahead -= F.match_length, F.strstart += F.match_length, F.match_length = 0) : (te = s._tr_tally(F, 0, F.window[F.strstart]), F.lookahead--, F.strstart++), te && (T(F, !1), F.strm.avail_out === 0)) return u;
            }
            return F.insert = 0, J === _ ? (T(F, !0), F.strm.avail_out === 0 ? re : X) : F.last_lit && (T(F, !1), F.strm.avail_out === 0) ? u : Z;
          }(A, H) : i[A.level].func(A, H);
          if ($ !== re && $ !== X || (A.status = 666), $ === u || $ === re) return l.avail_out === 0 && (A.last_flush = -1), f;
          if ($ === Z && (H === 1 ? s._tr_align(A) : H !== 5 && (s._tr_stored_block(A, 0, 0, !1), H === 3 && (ae(A.head), A.lookahead === 0 && (A.strstart = 0, A.block_start = 0, A.insert = 0))), U(l), l.avail_out === 0)) return A.last_flush = -1, f;
        }
        return H !== _ ? f : A.wrap <= 0 ? 1 : (A.wrap === 2 ? (q(A, 255 & l.adler), q(A, l.adler >> 8 & 255), q(A, l.adler >> 16 & 255), q(A, l.adler >> 24 & 255), q(A, 255 & l.total_in), q(A, l.total_in >> 8 & 255), q(A, l.total_in >> 16 & 255), q(A, l.total_in >> 24 & 255)) : (j(A, l.adler >>> 16), j(A, 65535 & l.adler)), U(l), 0 < A.wrap && (A.wrap = -A.wrap), A.pending !== 0 ? f : 1);
      }, a.deflateEnd = function(l) {
        var H;
        return l && l.state ? (H = l.state.status) !== y && H !== 69 && H !== 73 && H !== 91 && H !== 103 && H !== D && H !== 666 ? ie(l, g) : (l.state = null, H === D ? ie(l, -3) : f) : g;
      }, a.deflateSetDictionary = function(l, H) {
        var M, A, E, L, G, $, F, J, te = H.length;
        if (!l || !l.state || (L = (M = l.state).wrap) === 2 || L === 1 && M.status !== y || M.lookahead) return g;
        for (L === 1 && (l.adler = d(l.adler, H, te, 0)), M.wrap = 0, te >= M.w_size && (L === 0 && (ae(M.head), M.strstart = 0, M.block_start = 0, M.insert = 0), J = new o.Buf8(M.w_size), o.arraySet(J, H, te - M.w_size, M.w_size, 0), H = J, te = M.w_size), G = l.avail_in, $ = l.next_in, F = l.input, l.avail_in = te, l.next_in = 0, l.input = H, le(M); M.lookahead >= O; ) {
          for (A = M.strstart, E = M.lookahead - (O - 1); M.ins_h = (M.ins_h << M.hash_shift ^ M.window[A + O - 1]) & M.hash_mask, M.prev[A & M.w_mask] = M.head[M.ins_h], M.head[M.ins_h] = A, A++, --E; ) ;
          M.strstart = A, M.lookahead = O - 1, le(M);
        }
        return M.strstart += M.lookahead, M.block_start = M.strstart, M.insert = M.lookahead, M.lookahead = 0, M.match_length = M.prev_length = O - 1, M.match_available = 0, l.next_in = $, l.input = F, l.avail_in = G, M.wrap = L, f;
      }, a.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(t, r, a) {
      r.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(t, r, a) {
      r.exports = function(i, o) {
        var s, d, c, h, v, _, f, g, m, b, p, x, k, S, C, B, R, P, O, z, N, y, D, u, Z;
        s = i.state, d = i.next_in, u = i.input, c = d + (i.avail_in - 5), h = i.next_out, Z = i.output, v = h - (o - i.avail_out), _ = h + (i.avail_out - 257), f = s.dmax, g = s.wsize, m = s.whave, b = s.wnext, p = s.window, x = s.hold, k = s.bits, S = s.lencode, C = s.distcode, B = (1 << s.lenbits) - 1, R = (1 << s.distbits) - 1;
        e: do {
          k < 15 && (x += u[d++] << k, k += 8, x += u[d++] << k, k += 8), P = S[x & B];
          t: for (; ; ) {
            if (x >>>= O = P >>> 24, k -= O, (O = P >>> 16 & 255) === 0) Z[h++] = 65535 & P;
            else {
              if (!(16 & O)) {
                if (!(64 & O)) {
                  P = S[(65535 & P) + (x & (1 << O) - 1)];
                  continue t;
                }
                if (32 & O) {
                  s.mode = 12;
                  break e;
                }
                i.msg = "invalid literal/length code", s.mode = 30;
                break e;
              }
              z = 65535 & P, (O &= 15) && (k < O && (x += u[d++] << k, k += 8), z += x & (1 << O) - 1, x >>>= O, k -= O), k < 15 && (x += u[d++] << k, k += 8, x += u[d++] << k, k += 8), P = C[x & R];
              n: for (; ; ) {
                if (x >>>= O = P >>> 24, k -= O, !(16 & (O = P >>> 16 & 255))) {
                  if (!(64 & O)) {
                    P = C[(65535 & P) + (x & (1 << O) - 1)];
                    continue n;
                  }
                  i.msg = "invalid distance code", s.mode = 30;
                  break e;
                }
                if (N = 65535 & P, k < (O &= 15) && (x += u[d++] << k, (k += 8) < O && (x += u[d++] << k, k += 8)), f < (N += x & (1 << O) - 1)) {
                  i.msg = "invalid distance too far back", s.mode = 30;
                  break e;
                }
                if (x >>>= O, k -= O, (O = h - v) < N) {
                  if (m < (O = N - O) && s.sane) {
                    i.msg = "invalid distance too far back", s.mode = 30;
                    break e;
                  }
                  if (D = p, (y = 0) === b) {
                    if (y += g - O, O < z) {
                      for (z -= O; Z[h++] = p[y++], --O; ) ;
                      y = h - N, D = Z;
                    }
                  } else if (b < O) {
                    if (y += g + b - O, (O -= b) < z) {
                      for (z -= O; Z[h++] = p[y++], --O; ) ;
                      if (y = 0, b < z) {
                        for (z -= O = b; Z[h++] = p[y++], --O; ) ;
                        y = h - N, D = Z;
                      }
                    }
                  } else if (y += b - O, O < z) {
                    for (z -= O; Z[h++] = p[y++], --O; ) ;
                    y = h - N, D = Z;
                  }
                  for (; 2 < z; ) Z[h++] = D[y++], Z[h++] = D[y++], Z[h++] = D[y++], z -= 3;
                  z && (Z[h++] = D[y++], 1 < z && (Z[h++] = D[y++]));
                } else {
                  for (y = h - N; Z[h++] = Z[y++], Z[h++] = Z[y++], Z[h++] = Z[y++], 2 < (z -= 3); ) ;
                  z && (Z[h++] = Z[y++], 1 < z && (Z[h++] = Z[y++]));
                }
                break;
              }
            }
            break;
          }
        } while (d < c && h < _);
        d -= z = k >> 3, x &= (1 << (k -= z << 3)) - 1, i.next_in = d, i.next_out = h, i.avail_in = d < c ? c - d + 5 : 5 - (d - c), i.avail_out = h < _ ? _ - h + 257 : 257 - (h - _), s.hold = x, s.bits = k;
      };
    }, {}], 49: [function(t, r, a) {
      var i = t("../utils/common"), o = t("./adler32"), s = t("./crc32"), d = t("./inffast"), c = t("./inftrees"), h = 1, v = 2, _ = 0, f = -2, g = 1, m = 852, b = 592;
      function p(y) {
        return (y >>> 24 & 255) + (y >>> 8 & 65280) + ((65280 & y) << 8) + ((255 & y) << 24);
      }
      function x() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new i.Buf16(320), this.work = new i.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function k(y) {
        var D;
        return y && y.state ? (D = y.state, y.total_in = y.total_out = D.total = 0, y.msg = "", D.wrap && (y.adler = 1 & D.wrap), D.mode = g, D.last = 0, D.havedict = 0, D.dmax = 32768, D.head = null, D.hold = 0, D.bits = 0, D.lencode = D.lendyn = new i.Buf32(m), D.distcode = D.distdyn = new i.Buf32(b), D.sane = 1, D.back = -1, _) : f;
      }
      function S(y) {
        var D;
        return y && y.state ? ((D = y.state).wsize = 0, D.whave = 0, D.wnext = 0, k(y)) : f;
      }
      function C(y, D) {
        var u, Z;
        return y && y.state ? (Z = y.state, D < 0 ? (u = 0, D = -D) : (u = 1 + (D >> 4), D < 48 && (D &= 15)), D && (D < 8 || 15 < D) ? f : (Z.window !== null && Z.wbits !== D && (Z.window = null), Z.wrap = u, Z.wbits = D, S(y))) : f;
      }
      function B(y, D) {
        var u, Z;
        return y ? (Z = new x(), (y.state = Z).window = null, (u = C(y, D)) !== _ && (y.state = null), u) : f;
      }
      var R, P, O = !0;
      function z(y) {
        if (O) {
          var D;
          for (R = new i.Buf32(512), P = new i.Buf32(32), D = 0; D < 144; ) y.lens[D++] = 8;
          for (; D < 256; ) y.lens[D++] = 9;
          for (; D < 280; ) y.lens[D++] = 7;
          for (; D < 288; ) y.lens[D++] = 8;
          for (c(h, y.lens, 0, 288, R, 0, y.work, { bits: 9 }), D = 0; D < 32; ) y.lens[D++] = 5;
          c(v, y.lens, 0, 32, P, 0, y.work, { bits: 5 }), O = !1;
        }
        y.lencode = R, y.lenbits = 9, y.distcode = P, y.distbits = 5;
      }
      function N(y, D, u, Z) {
        var re, X = y.state;
        return X.window === null && (X.wsize = 1 << X.wbits, X.wnext = 0, X.whave = 0, X.window = new i.Buf8(X.wsize)), Z >= X.wsize ? (i.arraySet(X.window, D, u - X.wsize, X.wsize, 0), X.wnext = 0, X.whave = X.wsize) : (Z < (re = X.wsize - X.wnext) && (re = Z), i.arraySet(X.window, D, u - Z, re, X.wnext), (Z -= re) ? (i.arraySet(X.window, D, u - Z, Z, 0), X.wnext = Z, X.whave = X.wsize) : (X.wnext += re, X.wnext === X.wsize && (X.wnext = 0), X.whave < X.wsize && (X.whave += re))), 0;
      }
      a.inflateReset = S, a.inflateReset2 = C, a.inflateResetKeep = k, a.inflateInit = function(y) {
        return B(y, 15);
      }, a.inflateInit2 = B, a.inflate = function(y, D) {
        var u, Z, re, X, ie, W, ae, U, T, q, j, Y, le, ce, oe, ue, ye, _e, Ce, Ne, l, H, M, A, E = 0, L = new i.Buf8(4), G = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!y || !y.state || !y.output || !y.input && y.avail_in !== 0) return f;
        (u = y.state).mode === 12 && (u.mode = 13), ie = y.next_out, re = y.output, ae = y.avail_out, X = y.next_in, Z = y.input, W = y.avail_in, U = u.hold, T = u.bits, q = W, j = ae, H = _;
        e: for (; ; ) switch (u.mode) {
          case g:
            if (u.wrap === 0) {
              u.mode = 13;
              break;
            }
            for (; T < 16; ) {
              if (W === 0) break e;
              W--, U += Z[X++] << T, T += 8;
            }
            if (2 & u.wrap && U === 35615) {
              L[u.check = 0] = 255 & U, L[1] = U >>> 8 & 255, u.check = s(u.check, L, 2, 0), T = U = 0, u.mode = 2;
              break;
            }
            if (u.flags = 0, u.head && (u.head.done = !1), !(1 & u.wrap) || (((255 & U) << 8) + (U >> 8)) % 31) {
              y.msg = "incorrect header check", u.mode = 30;
              break;
            }
            if ((15 & U) != 8) {
              y.msg = "unknown compression method", u.mode = 30;
              break;
            }
            if (T -= 4, l = 8 + (15 & (U >>>= 4)), u.wbits === 0) u.wbits = l;
            else if (l > u.wbits) {
              y.msg = "invalid window size", u.mode = 30;
              break;
            }
            u.dmax = 1 << l, y.adler = u.check = 1, u.mode = 512 & U ? 10 : 12, T = U = 0;
            break;
          case 2:
            for (; T < 16; ) {
              if (W === 0) break e;
              W--, U += Z[X++] << T, T += 8;
            }
            if (u.flags = U, (255 & u.flags) != 8) {
              y.msg = "unknown compression method", u.mode = 30;
              break;
            }
            if (57344 & u.flags) {
              y.msg = "unknown header flags set", u.mode = 30;
              break;
            }
            u.head && (u.head.text = U >> 8 & 1), 512 & u.flags && (L[0] = 255 & U, L[1] = U >>> 8 & 255, u.check = s(u.check, L, 2, 0)), T = U = 0, u.mode = 3;
          case 3:
            for (; T < 32; ) {
              if (W === 0) break e;
              W--, U += Z[X++] << T, T += 8;
            }
            u.head && (u.head.time = U), 512 & u.flags && (L[0] = 255 & U, L[1] = U >>> 8 & 255, L[2] = U >>> 16 & 255, L[3] = U >>> 24 & 255, u.check = s(u.check, L, 4, 0)), T = U = 0, u.mode = 4;
          case 4:
            for (; T < 16; ) {
              if (W === 0) break e;
              W--, U += Z[X++] << T, T += 8;
            }
            u.head && (u.head.xflags = 255 & U, u.head.os = U >> 8), 512 & u.flags && (L[0] = 255 & U, L[1] = U >>> 8 & 255, u.check = s(u.check, L, 2, 0)), T = U = 0, u.mode = 5;
          case 5:
            if (1024 & u.flags) {
              for (; T < 16; ) {
                if (W === 0) break e;
                W--, U += Z[X++] << T, T += 8;
              }
              u.length = U, u.head && (u.head.extra_len = U), 512 & u.flags && (L[0] = 255 & U, L[1] = U >>> 8 & 255, u.check = s(u.check, L, 2, 0)), T = U = 0;
            } else u.head && (u.head.extra = null);
            u.mode = 6;
          case 6:
            if (1024 & u.flags && (W < (Y = u.length) && (Y = W), Y && (u.head && (l = u.head.extra_len - u.length, u.head.extra || (u.head.extra = new Array(u.head.extra_len)), i.arraySet(u.head.extra, Z, X, Y, l)), 512 & u.flags && (u.check = s(u.check, Z, Y, X)), W -= Y, X += Y, u.length -= Y), u.length)) break e;
            u.length = 0, u.mode = 7;
          case 7:
            if (2048 & u.flags) {
              if (W === 0) break e;
              for (Y = 0; l = Z[X + Y++], u.head && l && u.length < 65536 && (u.head.name += String.fromCharCode(l)), l && Y < W; ) ;
              if (512 & u.flags && (u.check = s(u.check, Z, Y, X)), W -= Y, X += Y, l) break e;
            } else u.head && (u.head.name = null);
            u.length = 0, u.mode = 8;
          case 8:
            if (4096 & u.flags) {
              if (W === 0) break e;
              for (Y = 0; l = Z[X + Y++], u.head && l && u.length < 65536 && (u.head.comment += String.fromCharCode(l)), l && Y < W; ) ;
              if (512 & u.flags && (u.check = s(u.check, Z, Y, X)), W -= Y, X += Y, l) break e;
            } else u.head && (u.head.comment = null);
            u.mode = 9;
          case 9:
            if (512 & u.flags) {
              for (; T < 16; ) {
                if (W === 0) break e;
                W--, U += Z[X++] << T, T += 8;
              }
              if (U !== (65535 & u.check)) {
                y.msg = "header crc mismatch", u.mode = 30;
                break;
              }
              T = U = 0;
            }
            u.head && (u.head.hcrc = u.flags >> 9 & 1, u.head.done = !0), y.adler = u.check = 0, u.mode = 12;
            break;
          case 10:
            for (; T < 32; ) {
              if (W === 0) break e;
              W--, U += Z[X++] << T, T += 8;
            }
            y.adler = u.check = p(U), T = U = 0, u.mode = 11;
          case 11:
            if (u.havedict === 0) return y.next_out = ie, y.avail_out = ae, y.next_in = X, y.avail_in = W, u.hold = U, u.bits = T, 2;
            y.adler = u.check = 1, u.mode = 12;
          case 12:
            if (D === 5 || D === 6) break e;
          case 13:
            if (u.last) {
              U >>>= 7 & T, T -= 7 & T, u.mode = 27;
              break;
            }
            for (; T < 3; ) {
              if (W === 0) break e;
              W--, U += Z[X++] << T, T += 8;
            }
            switch (u.last = 1 & U, T -= 1, 3 & (U >>>= 1)) {
              case 0:
                u.mode = 14;
                break;
              case 1:
                if (z(u), u.mode = 20, D !== 6) break;
                U >>>= 2, T -= 2;
                break e;
              case 2:
                u.mode = 17;
                break;
              case 3:
                y.msg = "invalid block type", u.mode = 30;
            }
            U >>>= 2, T -= 2;
            break;
          case 14:
            for (U >>>= 7 & T, T -= 7 & T; T < 32; ) {
              if (W === 0) break e;
              W--, U += Z[X++] << T, T += 8;
            }
            if ((65535 & U) != (U >>> 16 ^ 65535)) {
              y.msg = "invalid stored block lengths", u.mode = 30;
              break;
            }
            if (u.length = 65535 & U, T = U = 0, u.mode = 15, D === 6) break e;
          case 15:
            u.mode = 16;
          case 16:
            if (Y = u.length) {
              if (W < Y && (Y = W), ae < Y && (Y = ae), Y === 0) break e;
              i.arraySet(re, Z, X, Y, ie), W -= Y, X += Y, ae -= Y, ie += Y, u.length -= Y;
              break;
            }
            u.mode = 12;
            break;
          case 17:
            for (; T < 14; ) {
              if (W === 0) break e;
              W--, U += Z[X++] << T, T += 8;
            }
            if (u.nlen = 257 + (31 & U), U >>>= 5, T -= 5, u.ndist = 1 + (31 & U), U >>>= 5, T -= 5, u.ncode = 4 + (15 & U), U >>>= 4, T -= 4, 286 < u.nlen || 30 < u.ndist) {
              y.msg = "too many length or distance symbols", u.mode = 30;
              break;
            }
            u.have = 0, u.mode = 18;
          case 18:
            for (; u.have < u.ncode; ) {
              for (; T < 3; ) {
                if (W === 0) break e;
                W--, U += Z[X++] << T, T += 8;
              }
              u.lens[G[u.have++]] = 7 & U, U >>>= 3, T -= 3;
            }
            for (; u.have < 19; ) u.lens[G[u.have++]] = 0;
            if (u.lencode = u.lendyn, u.lenbits = 7, M = { bits: u.lenbits }, H = c(0, u.lens, 0, 19, u.lencode, 0, u.work, M), u.lenbits = M.bits, H) {
              y.msg = "invalid code lengths set", u.mode = 30;
              break;
            }
            u.have = 0, u.mode = 19;
          case 19:
            for (; u.have < u.nlen + u.ndist; ) {
              for (; ue = (E = u.lencode[U & (1 << u.lenbits) - 1]) >>> 16 & 255, ye = 65535 & E, !((oe = E >>> 24) <= T); ) {
                if (W === 0) break e;
                W--, U += Z[X++] << T, T += 8;
              }
              if (ye < 16) U >>>= oe, T -= oe, u.lens[u.have++] = ye;
              else {
                if (ye === 16) {
                  for (A = oe + 2; T < A; ) {
                    if (W === 0) break e;
                    W--, U += Z[X++] << T, T += 8;
                  }
                  if (U >>>= oe, T -= oe, u.have === 0) {
                    y.msg = "invalid bit length repeat", u.mode = 30;
                    break;
                  }
                  l = u.lens[u.have - 1], Y = 3 + (3 & U), U >>>= 2, T -= 2;
                } else if (ye === 17) {
                  for (A = oe + 3; T < A; ) {
                    if (W === 0) break e;
                    W--, U += Z[X++] << T, T += 8;
                  }
                  T -= oe, l = 0, Y = 3 + (7 & (U >>>= oe)), U >>>= 3, T -= 3;
                } else {
                  for (A = oe + 7; T < A; ) {
                    if (W === 0) break e;
                    W--, U += Z[X++] << T, T += 8;
                  }
                  T -= oe, l = 0, Y = 11 + (127 & (U >>>= oe)), U >>>= 7, T -= 7;
                }
                if (u.have + Y > u.nlen + u.ndist) {
                  y.msg = "invalid bit length repeat", u.mode = 30;
                  break;
                }
                for (; Y--; ) u.lens[u.have++] = l;
              }
            }
            if (u.mode === 30) break;
            if (u.lens[256] === 0) {
              y.msg = "invalid code -- missing end-of-block", u.mode = 30;
              break;
            }
            if (u.lenbits = 9, M = { bits: u.lenbits }, H = c(h, u.lens, 0, u.nlen, u.lencode, 0, u.work, M), u.lenbits = M.bits, H) {
              y.msg = "invalid literal/lengths set", u.mode = 30;
              break;
            }
            if (u.distbits = 6, u.distcode = u.distdyn, M = { bits: u.distbits }, H = c(v, u.lens, u.nlen, u.ndist, u.distcode, 0, u.work, M), u.distbits = M.bits, H) {
              y.msg = "invalid distances set", u.mode = 30;
              break;
            }
            if (u.mode = 20, D === 6) break e;
          case 20:
            u.mode = 21;
          case 21:
            if (6 <= W && 258 <= ae) {
              y.next_out = ie, y.avail_out = ae, y.next_in = X, y.avail_in = W, u.hold = U, u.bits = T, d(y, j), ie = y.next_out, re = y.output, ae = y.avail_out, X = y.next_in, Z = y.input, W = y.avail_in, U = u.hold, T = u.bits, u.mode === 12 && (u.back = -1);
              break;
            }
            for (u.back = 0; ue = (E = u.lencode[U & (1 << u.lenbits) - 1]) >>> 16 & 255, ye = 65535 & E, !((oe = E >>> 24) <= T); ) {
              if (W === 0) break e;
              W--, U += Z[X++] << T, T += 8;
            }
            if (ue && !(240 & ue)) {
              for (_e = oe, Ce = ue, Ne = ye; ue = (E = u.lencode[Ne + ((U & (1 << _e + Ce) - 1) >> _e)]) >>> 16 & 255, ye = 65535 & E, !(_e + (oe = E >>> 24) <= T); ) {
                if (W === 0) break e;
                W--, U += Z[X++] << T, T += 8;
              }
              U >>>= _e, T -= _e, u.back += _e;
            }
            if (U >>>= oe, T -= oe, u.back += oe, u.length = ye, ue === 0) {
              u.mode = 26;
              break;
            }
            if (32 & ue) {
              u.back = -1, u.mode = 12;
              break;
            }
            if (64 & ue) {
              y.msg = "invalid literal/length code", u.mode = 30;
              break;
            }
            u.extra = 15 & ue, u.mode = 22;
          case 22:
            if (u.extra) {
              for (A = u.extra; T < A; ) {
                if (W === 0) break e;
                W--, U += Z[X++] << T, T += 8;
              }
              u.length += U & (1 << u.extra) - 1, U >>>= u.extra, T -= u.extra, u.back += u.extra;
            }
            u.was = u.length, u.mode = 23;
          case 23:
            for (; ue = (E = u.distcode[U & (1 << u.distbits) - 1]) >>> 16 & 255, ye = 65535 & E, !((oe = E >>> 24) <= T); ) {
              if (W === 0) break e;
              W--, U += Z[X++] << T, T += 8;
            }
            if (!(240 & ue)) {
              for (_e = oe, Ce = ue, Ne = ye; ue = (E = u.distcode[Ne + ((U & (1 << _e + Ce) - 1) >> _e)]) >>> 16 & 255, ye = 65535 & E, !(_e + (oe = E >>> 24) <= T); ) {
                if (W === 0) break e;
                W--, U += Z[X++] << T, T += 8;
              }
              U >>>= _e, T -= _e, u.back += _e;
            }
            if (U >>>= oe, T -= oe, u.back += oe, 64 & ue) {
              y.msg = "invalid distance code", u.mode = 30;
              break;
            }
            u.offset = ye, u.extra = 15 & ue, u.mode = 24;
          case 24:
            if (u.extra) {
              for (A = u.extra; T < A; ) {
                if (W === 0) break e;
                W--, U += Z[X++] << T, T += 8;
              }
              u.offset += U & (1 << u.extra) - 1, U >>>= u.extra, T -= u.extra, u.back += u.extra;
            }
            if (u.offset > u.dmax) {
              y.msg = "invalid distance too far back", u.mode = 30;
              break;
            }
            u.mode = 25;
          case 25:
            if (ae === 0) break e;
            if (Y = j - ae, u.offset > Y) {
              if ((Y = u.offset - Y) > u.whave && u.sane) {
                y.msg = "invalid distance too far back", u.mode = 30;
                break;
              }
              le = Y > u.wnext ? (Y -= u.wnext, u.wsize - Y) : u.wnext - Y, Y > u.length && (Y = u.length), ce = u.window;
            } else ce = re, le = ie - u.offset, Y = u.length;
            for (ae < Y && (Y = ae), ae -= Y, u.length -= Y; re[ie++] = ce[le++], --Y; ) ;
            u.length === 0 && (u.mode = 21);
            break;
          case 26:
            if (ae === 0) break e;
            re[ie++] = u.length, ae--, u.mode = 21;
            break;
          case 27:
            if (u.wrap) {
              for (; T < 32; ) {
                if (W === 0) break e;
                W--, U |= Z[X++] << T, T += 8;
              }
              if (j -= ae, y.total_out += j, u.total += j, j && (y.adler = u.check = u.flags ? s(u.check, re, j, ie - j) : o(u.check, re, j, ie - j)), j = ae, (u.flags ? U : p(U)) !== u.check) {
                y.msg = "incorrect data check", u.mode = 30;
                break;
              }
              T = U = 0;
            }
            u.mode = 28;
          case 28:
            if (u.wrap && u.flags) {
              for (; T < 32; ) {
                if (W === 0) break e;
                W--, U += Z[X++] << T, T += 8;
              }
              if (U !== (4294967295 & u.total)) {
                y.msg = "incorrect length check", u.mode = 30;
                break;
              }
              T = U = 0;
            }
            u.mode = 29;
          case 29:
            H = 1;
            break e;
          case 30:
            H = -3;
            break e;
          case 31:
            return -4;
          case 32:
          default:
            return f;
        }
        return y.next_out = ie, y.avail_out = ae, y.next_in = X, y.avail_in = W, u.hold = U, u.bits = T, (u.wsize || j !== y.avail_out && u.mode < 30 && (u.mode < 27 || D !== 4)) && N(y, y.output, y.next_out, j - y.avail_out) ? (u.mode = 31, -4) : (q -= y.avail_in, j -= y.avail_out, y.total_in += q, y.total_out += j, u.total += j, u.wrap && j && (y.adler = u.check = u.flags ? s(u.check, re, j, y.next_out - j) : o(u.check, re, j, y.next_out - j)), y.data_type = u.bits + (u.last ? 64 : 0) + (u.mode === 12 ? 128 : 0) + (u.mode === 20 || u.mode === 15 ? 256 : 0), (q == 0 && j === 0 || D === 4) && H === _ && (H = -5), H);
      }, a.inflateEnd = function(y) {
        if (!y || !y.state) return f;
        var D = y.state;
        return D.window && (D.window = null), y.state = null, _;
      }, a.inflateGetHeader = function(y, D) {
        var u;
        return y && y.state && 2 & (u = y.state).wrap ? ((u.head = D).done = !1, _) : f;
      }, a.inflateSetDictionary = function(y, D) {
        var u, Z = D.length;
        return y && y.state ? (u = y.state).wrap !== 0 && u.mode !== 11 ? f : u.mode === 11 && o(1, D, Z, 0) !== u.check ? -3 : N(y, D, Z, Z) ? (u.mode = 31, -4) : (u.havedict = 1, _) : f;
      }, a.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(t, r, a) {
      var i = t("../utils/common"), o = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], s = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], d = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], c = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      r.exports = function(h, v, _, f, g, m, b, p) {
        var x, k, S, C, B, R, P, O, z, N = p.bits, y = 0, D = 0, u = 0, Z = 0, re = 0, X = 0, ie = 0, W = 0, ae = 0, U = 0, T = null, q = 0, j = new i.Buf16(16), Y = new i.Buf16(16), le = null, ce = 0;
        for (y = 0; y <= 15; y++) j[y] = 0;
        for (D = 0; D < f; D++) j[v[_ + D]]++;
        for (re = N, Z = 15; 1 <= Z && j[Z] === 0; Z--) ;
        if (Z < re && (re = Z), Z === 0) return g[m++] = 20971520, g[m++] = 20971520, p.bits = 1, 0;
        for (u = 1; u < Z && j[u] === 0; u++) ;
        for (re < u && (re = u), y = W = 1; y <= 15; y++) if (W <<= 1, (W -= j[y]) < 0) return -1;
        if (0 < W && (h === 0 || Z !== 1)) return -1;
        for (Y[1] = 0, y = 1; y < 15; y++) Y[y + 1] = Y[y] + j[y];
        for (D = 0; D < f; D++) v[_ + D] !== 0 && (b[Y[v[_ + D]]++] = D);
        if (R = h === 0 ? (T = le = b, 19) : h === 1 ? (T = o, q -= 257, le = s, ce -= 257, 256) : (T = d, le = c, -1), y = u, B = m, ie = D = U = 0, S = -1, C = (ae = 1 << (X = re)) - 1, h === 1 && 852 < ae || h === 2 && 592 < ae) return 1;
        for (; ; ) {
          for (P = y - ie, z = b[D] < R ? (O = 0, b[D]) : b[D] > R ? (O = le[ce + b[D]], T[q + b[D]]) : (O = 96, 0), x = 1 << y - ie, u = k = 1 << X; g[B + (U >> ie) + (k -= x)] = P << 24 | O << 16 | z | 0, k !== 0; ) ;
          for (x = 1 << y - 1; U & x; ) x >>= 1;
          if (x !== 0 ? (U &= x - 1, U += x) : U = 0, D++, --j[y] == 0) {
            if (y === Z) break;
            y = v[_ + b[D]];
          }
          if (re < y && (U & C) !== S) {
            for (ie === 0 && (ie = re), B += u, W = 1 << (X = y - ie); X + ie < Z && !((W -= j[X + ie]) <= 0); ) X++, W <<= 1;
            if (ae += 1 << X, h === 1 && 852 < ae || h === 2 && 592 < ae) return 1;
            g[S = U & C] = re << 24 | X << 16 | B - m | 0;
          }
        }
        return U !== 0 && (g[B + U] = y - ie << 24 | 64 << 16 | 0), p.bits = re, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(t, r, a) {
      r.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(t, r, a) {
      var i = t("../utils/common"), o = 0, s = 1;
      function d(E) {
        for (var L = E.length; 0 <= --L; ) E[L] = 0;
      }
      var c = 0, h = 29, v = 256, _ = v + 1 + h, f = 30, g = 19, m = 2 * _ + 1, b = 15, p = 16, x = 7, k = 256, S = 16, C = 17, B = 18, R = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], P = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], O = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], z = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], N = new Array(2 * (_ + 2));
      d(N);
      var y = new Array(2 * f);
      d(y);
      var D = new Array(512);
      d(D);
      var u = new Array(256);
      d(u);
      var Z = new Array(h);
      d(Z);
      var re, X, ie, W = new Array(f);
      function ae(E, L, G, $, F) {
        this.static_tree = E, this.extra_bits = L, this.extra_base = G, this.elems = $, this.max_length = F, this.has_stree = E && E.length;
      }
      function U(E, L) {
        this.dyn_tree = E, this.max_code = 0, this.stat_desc = L;
      }
      function T(E) {
        return E < 256 ? D[E] : D[256 + (E >>> 7)];
      }
      function q(E, L) {
        E.pending_buf[E.pending++] = 255 & L, E.pending_buf[E.pending++] = L >>> 8 & 255;
      }
      function j(E, L, G) {
        E.bi_valid > p - G ? (E.bi_buf |= L << E.bi_valid & 65535, q(E, E.bi_buf), E.bi_buf = L >> p - E.bi_valid, E.bi_valid += G - p) : (E.bi_buf |= L << E.bi_valid & 65535, E.bi_valid += G);
      }
      function Y(E, L, G) {
        j(E, G[2 * L], G[2 * L + 1]);
      }
      function le(E, L) {
        for (var G = 0; G |= 1 & E, E >>>= 1, G <<= 1, 0 < --L; ) ;
        return G >>> 1;
      }
      function ce(E, L, G) {
        var $, F, J = new Array(b + 1), te = 0;
        for ($ = 1; $ <= b; $++) J[$] = te = te + G[$ - 1] << 1;
        for (F = 0; F <= L; F++) {
          var Q = E[2 * F + 1];
          Q !== 0 && (E[2 * F] = le(J[Q]++, Q));
        }
      }
      function oe(E) {
        var L;
        for (L = 0; L < _; L++) E.dyn_ltree[2 * L] = 0;
        for (L = 0; L < f; L++) E.dyn_dtree[2 * L] = 0;
        for (L = 0; L < g; L++) E.bl_tree[2 * L] = 0;
        E.dyn_ltree[2 * k] = 1, E.opt_len = E.static_len = 0, E.last_lit = E.matches = 0;
      }
      function ue(E) {
        8 < E.bi_valid ? q(E, E.bi_buf) : 0 < E.bi_valid && (E.pending_buf[E.pending++] = E.bi_buf), E.bi_buf = 0, E.bi_valid = 0;
      }
      function ye(E, L, G, $) {
        var F = 2 * L, J = 2 * G;
        return E[F] < E[J] || E[F] === E[J] && $[L] <= $[G];
      }
      function _e(E, L, G) {
        for (var $ = E.heap[G], F = G << 1; F <= E.heap_len && (F < E.heap_len && ye(L, E.heap[F + 1], E.heap[F], E.depth) && F++, !ye(L, $, E.heap[F], E.depth)); ) E.heap[G] = E.heap[F], G = F, F <<= 1;
        E.heap[G] = $;
      }
      function Ce(E, L, G) {
        var $, F, J, te, Q = 0;
        if (E.last_lit !== 0) for (; $ = E.pending_buf[E.d_buf + 2 * Q] << 8 | E.pending_buf[E.d_buf + 2 * Q + 1], F = E.pending_buf[E.l_buf + Q], Q++, $ === 0 ? Y(E, F, L) : (Y(E, (J = u[F]) + v + 1, L), (te = R[J]) !== 0 && j(E, F -= Z[J], te), Y(E, J = T(--$), G), (te = P[J]) !== 0 && j(E, $ -= W[J], te)), Q < E.last_lit; ) ;
        Y(E, k, L);
      }
      function Ne(E, L) {
        var G, $, F, J = L.dyn_tree, te = L.stat_desc.static_tree, Q = L.stat_desc.has_stree, ne = L.stat_desc.elems, he = -1;
        for (E.heap_len = 0, E.heap_max = m, G = 0; G < ne; G++) J[2 * G] !== 0 ? (E.heap[++E.heap_len] = he = G, E.depth[G] = 0) : J[2 * G + 1] = 0;
        for (; E.heap_len < 2; ) J[2 * (F = E.heap[++E.heap_len] = he < 2 ? ++he : 0)] = 1, E.depth[F] = 0, E.opt_len--, Q && (E.static_len -= te[2 * F + 1]);
        for (L.max_code = he, G = E.heap_len >> 1; 1 <= G; G--) _e(E, J, G);
        for (F = ne; G = E.heap[1], E.heap[1] = E.heap[E.heap_len--], _e(E, J, 1), $ = E.heap[1], E.heap[--E.heap_max] = G, E.heap[--E.heap_max] = $, J[2 * F] = J[2 * G] + J[2 * $], E.depth[F] = (E.depth[G] >= E.depth[$] ? E.depth[G] : E.depth[$]) + 1, J[2 * G + 1] = J[2 * $ + 1] = F, E.heap[1] = F++, _e(E, J, 1), 2 <= E.heap_len; ) ;
        E.heap[--E.heap_max] = E.heap[1], function(fe, Ie) {
          var nt, Me, ft, ve, dt, mt, Ke = Ie.dyn_tree, rn = Ie.max_code, Pn = Ie.stat_desc.static_tree, an = Ie.stat_desc.has_stree, on = Ie.stat_desc.extra_bits, ut = Ie.stat_desc.extra_base, Ve = Ie.stat_desc.max_length, kt = 0;
          for (ve = 0; ve <= b; ve++) fe.bl_count[ve] = 0;
          for (Ke[2 * fe.heap[fe.heap_max] + 1] = 0, nt = fe.heap_max + 1; nt < m; nt++) Ve < (ve = Ke[2 * Ke[2 * (Me = fe.heap[nt]) + 1] + 1] + 1) && (ve = Ve, kt++), Ke[2 * Me + 1] = ve, rn < Me || (fe.bl_count[ve]++, dt = 0, ut <= Me && (dt = on[Me - ut]), mt = Ke[2 * Me], fe.opt_len += mt * (ve + dt), an && (fe.static_len += mt * (Pn[2 * Me + 1] + dt)));
          if (kt !== 0) {
            do {
              for (ve = Ve - 1; fe.bl_count[ve] === 0; ) ve--;
              fe.bl_count[ve]--, fe.bl_count[ve + 1] += 2, fe.bl_count[Ve]--, kt -= 2;
            } while (0 < kt);
            for (ve = Ve; ve !== 0; ve--) for (Me = fe.bl_count[ve]; Me !== 0; ) rn < (ft = fe.heap[--nt]) || (Ke[2 * ft + 1] !== ve && (fe.opt_len += (ve - Ke[2 * ft + 1]) * Ke[2 * ft], Ke[2 * ft + 1] = ve), Me--);
          }
        }(E, L), ce(J, he, E.bl_count);
      }
      function l(E, L, G) {
        var $, F, J = -1, te = L[1], Q = 0, ne = 7, he = 4;
        for (te === 0 && (ne = 138, he = 3), L[2 * (G + 1) + 1] = 65535, $ = 0; $ <= G; $++) F = te, te = L[2 * ($ + 1) + 1], ++Q < ne && F === te || (Q < he ? E.bl_tree[2 * F] += Q : F !== 0 ? (F !== J && E.bl_tree[2 * F]++, E.bl_tree[2 * S]++) : Q <= 10 ? E.bl_tree[2 * C]++ : E.bl_tree[2 * B]++, J = F, he = (Q = 0) === te ? (ne = 138, 3) : F === te ? (ne = 6, 3) : (ne = 7, 4));
      }
      function H(E, L, G) {
        var $, F, J = -1, te = L[1], Q = 0, ne = 7, he = 4;
        for (te === 0 && (ne = 138, he = 3), $ = 0; $ <= G; $++) if (F = te, te = L[2 * ($ + 1) + 1], !(++Q < ne && F === te)) {
          if (Q < he) for (; Y(E, F, E.bl_tree), --Q != 0; ) ;
          else F !== 0 ? (F !== J && (Y(E, F, E.bl_tree), Q--), Y(E, S, E.bl_tree), j(E, Q - 3, 2)) : Q <= 10 ? (Y(E, C, E.bl_tree), j(E, Q - 3, 3)) : (Y(E, B, E.bl_tree), j(E, Q - 11, 7));
          J = F, he = (Q = 0) === te ? (ne = 138, 3) : F === te ? (ne = 6, 3) : (ne = 7, 4);
        }
      }
      d(W);
      var M = !1;
      function A(E, L, G, $) {
        j(E, (c << 1) + ($ ? 1 : 0), 3), function(F, J, te, Q) {
          ue(F), q(F, te), q(F, ~te), i.arraySet(F.pending_buf, F.window, J, te, F.pending), F.pending += te;
        }(E, L, G);
      }
      a._tr_init = function(E) {
        M || (function() {
          var L, G, $, F, J, te = new Array(b + 1);
          for (F = $ = 0; F < h - 1; F++) for (Z[F] = $, L = 0; L < 1 << R[F]; L++) u[$++] = F;
          for (u[$ - 1] = F, F = J = 0; F < 16; F++) for (W[F] = J, L = 0; L < 1 << P[F]; L++) D[J++] = F;
          for (J >>= 7; F < f; F++) for (W[F] = J << 7, L = 0; L < 1 << P[F] - 7; L++) D[256 + J++] = F;
          for (G = 0; G <= b; G++) te[G] = 0;
          for (L = 0; L <= 143; ) N[2 * L + 1] = 8, L++, te[8]++;
          for (; L <= 255; ) N[2 * L + 1] = 9, L++, te[9]++;
          for (; L <= 279; ) N[2 * L + 1] = 7, L++, te[7]++;
          for (; L <= 287; ) N[2 * L + 1] = 8, L++, te[8]++;
          for (ce(N, _ + 1, te), L = 0; L < f; L++) y[2 * L + 1] = 5, y[2 * L] = le(L, 5);
          re = new ae(N, R, v + 1, _, b), X = new ae(y, P, 0, f, b), ie = new ae(new Array(0), O, 0, g, x);
        }(), M = !0), E.l_desc = new U(E.dyn_ltree, re), E.d_desc = new U(E.dyn_dtree, X), E.bl_desc = new U(E.bl_tree, ie), E.bi_buf = 0, E.bi_valid = 0, oe(E);
      }, a._tr_stored_block = A, a._tr_flush_block = function(E, L, G, $) {
        var F, J, te = 0;
        0 < E.level ? (E.strm.data_type === 2 && (E.strm.data_type = function(Q) {
          var ne, he = 4093624447;
          for (ne = 0; ne <= 31; ne++, he >>>= 1) if (1 & he && Q.dyn_ltree[2 * ne] !== 0) return o;
          if (Q.dyn_ltree[18] !== 0 || Q.dyn_ltree[20] !== 0 || Q.dyn_ltree[26] !== 0) return s;
          for (ne = 32; ne < v; ne++) if (Q.dyn_ltree[2 * ne] !== 0) return s;
          return o;
        }(E)), Ne(E, E.l_desc), Ne(E, E.d_desc), te = function(Q) {
          var ne;
          for (l(Q, Q.dyn_ltree, Q.l_desc.max_code), l(Q, Q.dyn_dtree, Q.d_desc.max_code), Ne(Q, Q.bl_desc), ne = g - 1; 3 <= ne && Q.bl_tree[2 * z[ne] + 1] === 0; ne--) ;
          return Q.opt_len += 3 * (ne + 1) + 5 + 5 + 4, ne;
        }(E), F = E.opt_len + 3 + 7 >>> 3, (J = E.static_len + 3 + 7 >>> 3) <= F && (F = J)) : F = J = G + 5, G + 4 <= F && L !== -1 ? A(E, L, G, $) : E.strategy === 4 || J === F ? (j(E, 2 + ($ ? 1 : 0), 3), Ce(E, N, y)) : (j(E, 4 + ($ ? 1 : 0), 3), function(Q, ne, he, fe) {
          var Ie;
          for (j(Q, ne - 257, 5), j(Q, he - 1, 5), j(Q, fe - 4, 4), Ie = 0; Ie < fe; Ie++) j(Q, Q.bl_tree[2 * z[Ie] + 1], 3);
          H(Q, Q.dyn_ltree, ne - 1), H(Q, Q.dyn_dtree, he - 1);
        }(E, E.l_desc.max_code + 1, E.d_desc.max_code + 1, te + 1), Ce(E, E.dyn_ltree, E.dyn_dtree)), oe(E), $ && ue(E);
      }, a._tr_tally = function(E, L, G) {
        return E.pending_buf[E.d_buf + 2 * E.last_lit] = L >>> 8 & 255, E.pending_buf[E.d_buf + 2 * E.last_lit + 1] = 255 & L, E.pending_buf[E.l_buf + E.last_lit] = 255 & G, E.last_lit++, L === 0 ? E.dyn_ltree[2 * G]++ : (E.matches++, L--, E.dyn_ltree[2 * (u[G] + v + 1)]++, E.dyn_dtree[2 * T(L)]++), E.last_lit === E.lit_bufsize - 1;
      }, a._tr_align = function(E) {
        j(E, 2, 3), Y(E, k, N), function(L) {
          L.bi_valid === 16 ? (q(L, L.bi_buf), L.bi_buf = 0, L.bi_valid = 0) : 8 <= L.bi_valid && (L.pending_buf[L.pending++] = 255 & L.bi_buf, L.bi_buf >>= 8, L.bi_valid -= 8);
        }(E);
      };
    }, { "../utils/common": 41 }], 53: [function(t, r, a) {
      r.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(t, r, a) {
      (function(i) {
        (function(o, s) {
          if (!o.setImmediate) {
            var d, c, h, v, _ = 1, f = {}, g = !1, m = o.document, b = Object.getPrototypeOf && Object.getPrototypeOf(o);
            b = b && b.setTimeout ? b : o, d = {}.toString.call(o.process) === "[object process]" ? function(S) {
              setTimeout(function() {
                x(S);
              });
            } : function() {
              if (o.postMessage && !o.importScripts) {
                var S = !0, C = o.onmessage;
                return o.onmessage = function() {
                  S = !1;
                }, o.postMessage("", "*"), o.onmessage = C, S;
              }
            }() ? (v = "setImmediate$" + Math.random() + "$", o.addEventListener ? o.addEventListener("message", k, !1) : o.attachEvent("onmessage", k), function(S) {
              o.postMessage(v + S, "*");
            }) : o.MessageChannel ? ((h = new MessageChannel()).port1.onmessage = function(S) {
              x(S.data);
            }, function(S) {
              h.port2.postMessage(S);
            }) : m && "onreadystatechange" in m.createElement("script") ? (c = m.documentElement, function(S) {
              var C = m.createElement("script");
              C.onreadystatechange = function() {
                x(S), C.onreadystatechange = null, c.removeChild(C), C = null;
              }, c.appendChild(C);
            }) : function(S) {
              setTimeout(x, 0, S);
            }, b.setImmediate = function(S) {
              typeof S != "function" && (S = new Function("" + S));
              for (var C = new Array(arguments.length - 1), B = 0; B < C.length; B++) C[B] = arguments[B + 1];
              var R = { callback: S, args: C };
              return f[_] = R, d(_), _++;
            }, b.clearImmediate = p;
          }
          function p(S) {
            delete f[S];
          }
          function x(S) {
            if (g) setTimeout(x, 0, S);
            else {
              var C = f[S];
              if (C) {
                g = !0;
                try {
                  (function(B) {
                    var R = B.callback, P = B.args;
                    switch (P.length) {
                      case 0:
                        R();
                        break;
                      case 1:
                        R(P[0]);
                        break;
                      case 2:
                        R(P[0], P[1]);
                        break;
                      case 3:
                        R(P[0], P[1], P[2]);
                        break;
                      default:
                        R.apply(s, P);
                    }
                  })(C);
                } finally {
                  p(S), g = !1;
                }
              }
            }
          }
          function k(S) {
            S.source === o && typeof S.data == "string" && S.data.indexOf(v) === 0 && x(+S.data.slice(v.length));
          }
        })(typeof self > "u" ? i === void 0 ? this : i : self);
      }).call(this, typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(Qa);
var us = Qa.exports;
const Di = /* @__PURE__ */ Ja(us);
/*! @license DOMPurify 3.4.16 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.16/LICENSE */
function Mi(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function hs(e) {
  if (Array.isArray(e)) return e;
}
function ps(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r, a, i, o, s = [], d = !0, c = !1;
    try {
      if (i = (t = t.call(e)).next, n !== 0) for (; !(d = (r = i.call(t)).done) && (s.push(r.value), s.length !== n); d = !0) ;
    } catch (h) {
      c = !0, a = h;
    } finally {
      try {
        if (!d && t.return != null && (o = t.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function ms() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
function _s(e, n) {
  return hs(e) || ps(e, n) || gs(e, n) || ms();
}
function gs(e, n) {
  if (e) {
    if (typeof e == "string") return Mi(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Mi(e, n) : void 0;
  }
}
const eo = Object.entries, Pi = Object.setPrototypeOf, bs = Object.isFrozen, vs = Object.getPrototypeOf, ws = Object.getOwnPropertyDescriptor;
let Te = Object.freeze, Re = Object.seal, Gt = Object.create, to = typeof Reflect < "u" && Reflect, Xr = to.apply, Kr = to.construct;
Te || (Te = function(n) {
  return n;
});
Re || (Re = function(n) {
  return n;
});
Xr || (Xr = function(n, t) {
  for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) a[i - 2] = arguments[i];
  return n.apply(t, a);
});
Kr || (Kr = function(n) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
  return new n(...r);
});
const Tt = Ae(Array.prototype.forEach), xs = Ae(Array.prototype.lastIndexOf), Fi = Ae(Array.prototype.pop), cn = Ae(Array.prototype.push), ys = Ae(Array.prototype.splice), Kt = Array.isArray, _n = Ae(String.prototype.toLowerCase), xr = Ae(String.prototype.toString), Bi = Ae(String.prototype.match), fn = Ae(String.prototype.replace), Ui = Ae(String.prototype.indexOf), Es = Ae(String.prototype.trim), ks = Ae(Number.prototype.toString), Ss = Ae(Boolean.prototype.toString), Zi = typeof BigInt > "u" ? null : Ae(BigInt.prototype.toString), ji = typeof Symbol > "u" ? null : Ae(Symbol.prototype.toString), Ue = Ae(Object.prototype.hasOwnProperty), dn = Ae(Object.prototype.toString), De = Ae(RegExp.prototype.test), gt = As(TypeError);
function Ae(e) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
    return Xr(e, n, r);
  };
}
function As(e) {
  return function() {
    for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];
    return Kr(e, t);
  };
}
function me(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _n;
  if (Pi && Pi(e, null), !Kt(n)) return e;
  let r = n.length;
  for (; r--; ) {
    let a = n[r];
    if (typeof a == "string") {
      const i = t(a);
      i !== a && (bs(n) || (n[r] = i), a = i);
    }
    e[a] = !0;
  }
  return e;
}
function Ts(e) {
  for (let n = 0; n < e.length; n++) Ue(e, n) || (e[n] = null);
  return e;
}
function Ge(e) {
  const n = Gt(null);
  for (const r of eo(e)) {
    var t = _s(r, 2);
    const a = t[0], i = t[1];
    Ue(e, a) && (Kt(i) ? n[a] = Ts(i) : i && typeof i == "object" && i.constructor === Object ? n[a] = Ge(i) : n[a] = i);
  }
  return n;
}
function Cs(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return ks(e);
    case "boolean":
      return Ss(e);
    case "bigint":
      return Zi ? Zi(e) : "0";
    case "symbol":
      return ji ? ji(e) : "Symbol()";
    case "undefined":
      return dn(e);
    case "function":
    case "object": {
      if (e === null) return dn(e);
      const n = e, t = Je(n, "toString");
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
function Je(e, n) {
  for (; e !== null; ) {
    const r = ws(e, n);
    if (r) {
      if (r.get) return Ae(r.get);
      if (typeof r.value == "function") return Ae(r.value);
    }
    e = vs(e);
  }
  function t() {
    return null;
  }
  return t;
}
function zs(e) {
  try {
    return De(e, ""), !0;
  } catch {
    return !1;
  }
}
const Hi = Te([
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
]), yr = Te([
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
]), Er = Te([
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
]), Rs = Te([
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
]), kr = Te([
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
]), Os = Te([
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
]), Wi = Te(["#text"]), $i = Te([
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
]), Sr = Te([
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
]), Gi = Te([
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
]), Yn = Te([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), Ls = Re(/{{[\w\W]*|^[\w\W]*}}/g), Ns = Re(/<%[\w\W]*|^[\w\W]*%>/g), Is = Re(/\${[\w\W]*/g), Ds = Re(/^data-[\-\w.\u00B7-\uFFFF]+$/), Ms = Re(/^aria-[\-\w]+$/), Yi = Re(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Ps = Re(/^(?:\w+script|data):/i), Fs = Re(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Bs = Re(/^html$/i), Us = Re(/^[a-z][.\w]*(-[.\w]+)+$/i), Xi = Re(/<[/\w!]/g), Ki = Re(/<[/\w]/g), Zs = Re(/<\/no(script|embed|frames)/i), js = Re(/\/>/i), He = {
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
}, no = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], Hs = Te(me({}, no)), Ws = function() {
  const e = {};
  return Tt(no, (n) => {
    e[n] = Re(new RegExp("</" + n + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Te(e);
}(), $s = function() {
  return typeof window > "u" ? null : window;
}, Gs = function(n, t) {
  if (typeof n != "object" || typeof n.createPolicy != "function") return null;
  let r = null;
  const a = "data-tt-policy-suffix";
  t && t.hasAttribute(a) && (r = t.getAttribute(a));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return n.createPolicy(i, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, Vi = function() {
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
}, bt = function(n, t, r, a) {
  return Ue(n, t) && Kt(n[t]) ? me(a.base ? Ge(a.base) : {}, n[t], a.transform) : r;
}, Ar = function(n, t, r) {
  const a = Ue(n, t) ? n[t] : void 0;
  return a && typeof a == "object" ? Ge(a) : r();
};
function ro() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $s();
  const n = (V) => ro(V);
  if (n.version = "3.4.16", n.removed = [], !e || !e.document || e.document.nodeType !== He.document || !e.Element)
    return n.isSupported = !1, n;
  let t = e.document;
  const r = t, a = r.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, o = e.Node, s = e.Element, d = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, h = e.trustedTypes, v = s.prototype, _ = Je(v, "cloneNode"), f = Je(v, "remove"), g = Je(v, "removeAttributeNode"), m = Je(v, "nextSibling"), b = Je(v, "childNodes"), p = Je(v, "parentNode"), x = Je(v, "shadowRoot"), k = Je(v, "attributes"), S = o && o.prototype ? Je(o.prototype, "nodeType") : null, C = o && o.prototype ? Je(o.prototype, "nodeName") : null, B = o && o.prototype ? Je(o.prototype, "ownerDocument") : null, R = function(w) {
    return S ? S(w) : w.nodeType;
  }, P = function(w) {
    return C ? C(w) : w.nodeName;
  };
  if (typeof i == "function") {
    const V = t.createElement("template");
    V.content && V.content.ownerDocument && (t = V.content.ownerDocument);
  }
  let O, z = "", N, y = !1, D = 0;
  const u = function() {
    if (D > 0) throw gt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Z = function(w) {
    u(), D++;
    try {
      return O.createHTML(w);
    } finally {
      D--;
    }
  }, re = function(w) {
    u(), D++;
    try {
      return O.createScriptURL(w);
    } finally {
      D--;
    }
  }, X = function() {
    return y || (N = Gs(h, a), y = !0), N;
  }, ie = t, W = ie.implementation, ae = ie.createNodeIterator, U = ie.createDocumentFragment, T = ie.getElementsByTagName, q = r.importNode;
  let j = Vi();
  n.isSupported = typeof eo == "function" && typeof p == "function" && W && W.createHTMLDocument !== void 0;
  const Y = Ls, le = Ns, ce = Is, oe = Ds, ue = Ms, ye = Ps, _e = Fs, Ce = Us;
  let Ne = Yi, l = null;
  const H = me({}, [
    ...Hi,
    ...yr,
    ...Er,
    ...kr,
    ...Wi
  ]);
  let M = null;
  const A = me({}, [
    ...$i,
    ...Sr,
    ...Gi,
    ...Yn
  ]);
  let E = Object.seal(Gt(null, {
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
  })), L = null, G = null;
  const $ = Object.seal(Gt(null, {
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
  let F = !0, J = !0, te = !1, Q = !0, ne = !1, he = !0, fe = !1, Ie = !1, nt = null, Me = null, ft = !1, ve = !1, dt = !1, mt = !1, Ke = !0, rn = !1;
  const Pn = "user-content-";
  let an = !0, on = !1, ut = {}, Ve = null;
  const kt = me({}, [
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
  const gi = me({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let bi = null;
  const vi = me({}, [
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
  ]), Fn = "http://www.w3.org/1998/Math/MathML", Bn = "http://www.w3.org/2000/svg", rt = "http://www.w3.org/1999/xhtml";
  let Ft = rt, hr = !1, pr = null;
  const Ko = me({}, [
    Fn,
    Bn,
    rt
  ], xr), wi = Te([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let mr = me({}, wi);
  const xi = Te(["annotation-xml"]);
  let _r = me({}, xi);
  const Vo = me({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let sn = null;
  const qo = ["application/xhtml+xml", "text/html"], Jo = "text/html";
  let Se = null, Bt = null;
  const Qo = t.createElement("form"), yi = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, gr = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Bt && Bt === w) return;
    (!w || typeof w != "object") && (w = {}), w = Ge(w), sn = qo.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Jo : w.PARSER_MEDIA_TYPE, Se = sn === "application/xhtml+xml" ? xr : _n, l = bt(w, "ALLOWED_TAGS", H, { transform: Se }), M = bt(w, "ALLOWED_ATTR", A, { transform: Se }), pr = bt(w, "ALLOWED_NAMESPACES", Ko, { transform: xr }), bi = bt(w, "ADD_URI_SAFE_ATTR", vi, {
      transform: Se,
      base: vi
    }), _i = bt(w, "ADD_DATA_URI_TAGS", gi, {
      transform: Se,
      base: gi
    }), Ve = bt(w, "FORBID_CONTENTS", kt, { transform: Se }), L = bt(w, "FORBID_TAGS", Ge({}), { transform: Se }), G = bt(w, "FORBID_ATTR", Ge({}), { transform: Se }), ut = Ue(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? Ge(w.USE_PROFILES) : w.USE_PROFILES : !1, F = w.ALLOW_ARIA_ATTR !== !1, J = w.ALLOW_DATA_ATTR !== !1, te = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Q = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = w.SAFE_FOR_TEMPLATES || !1, he = w.SAFE_FOR_XML !== !1, fe = w.WHOLE_DOCUMENT || !1, ve = w.RETURN_DOM || !1, dt = w.RETURN_DOM_FRAGMENT || !1, mt = w.RETURN_TRUSTED_TYPE || !1, ft = w.FORCE_BODY || !1, Ke = w.SANITIZE_DOM !== !1, rn = w.SANITIZE_NAMED_PROPS || !1, an = w.KEEP_CONTENT !== !1, on = w.IN_PLACE || !1, Ne = zs(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : Yi, Ft = typeof w.NAMESPACE == "string" ? w.NAMESPACE : rt, mr = Ar(w, "MATHML_TEXT_INTEGRATION_POINTS", () => me({}, wi)), _r = Ar(w, "HTML_INTEGRATION_POINTS", () => me({}, xi));
    const I = Ar(w, "CUSTOM_ELEMENT_HANDLING", () => Gt(null));
    if (E = Gt(null), Ue(I, "tagNameCheck") && yi(I.tagNameCheck) && (E.tagNameCheck = I.tagNameCheck), Ue(I, "attributeNameCheck") && yi(I.attributeNameCheck) && (E.attributeNameCheck = I.attributeNameCheck), Ue(I, "allowCustomizedBuiltInElements") && typeof I.allowCustomizedBuiltInElements == "boolean" && (E.allowCustomizedBuiltInElements = I.allowCustomizedBuiltInElements), Re(E), ne && (J = !1), dt && (ve = !0), ut && (l = me({}, Wi), M = Gt(null), ut.html === !0 && (me(l, Hi), me(M, $i)), ut.svg === !0 && (me(l, yr), me(M, Sr), me(M, Yn)), ut.svgFilters === !0 && (me(l, Er), me(M, Sr), me(M, Yn)), ut.mathMl === !0 && (me(l, kr), me(M, Gi), me(M, Yn))), $.tagCheck = null, $.attributeCheck = null, Ue(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? $.tagCheck = w.ADD_TAGS : Kt(w.ADD_TAGS) && (l === H && (l = Ge(l)), me(l, w.ADD_TAGS, Se))), Ue(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? $.attributeCheck = w.ADD_ATTR : Kt(w.ADD_ATTR) && (M === A && (M = Ge(M)), me(M, w.ADD_ATTR, Se))), Ue(w, "ADD_FORBID_CONTENTS") && Kt(w.ADD_FORBID_CONTENTS) && (Ve === kt && (Ve = Ge(Ve)), me(Ve, w.ADD_FORBID_CONTENTS, Se)), an && (l["#text"] = !0), fe && me(l, [
      "html",
      "head",
      "body"
    ]), l.table && (me(l, ["tbody"]), delete L.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function") throw gt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw gt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const K = O;
      O = w.TRUSTED_TYPES_POLICY;
      try {
        z = Z("");
      } catch (ee) {
        throw O = K, ee;
      }
    } else w.TRUSTED_TYPES_POLICY === null ? (O = void 0, z = "") : (O === void 0 && (O = X()), O && typeof z == "string" && (z = Z("")));
    Te && Te(w), Bt = w;
  }, Ei = me({}, [
    ...yr,
    ...Er,
    ...Rs
  ]), ki = me({}, [...kr, ...Os]), es = function(w, I, K) {
    return I.namespaceURI === rt ? w === "svg" : I.namespaceURI === Fn ? w === "svg" && (K === "annotation-xml" || mr[K]) : !!Ei[w];
  }, ts = function(w, I, K) {
    return I.namespaceURI === rt ? w === "math" : I.namespaceURI === Bn ? w === "math" && _r[K] : !!ki[w];
  }, ns = function(w, I, K) {
    return I.namespaceURI === Bn && !_r[K] || I.namespaceURI === Fn && !mr[K] ? !1 : !ki[w] && (Vo[w] || !Ei[w]);
  }, rs = function(w) {
    let I = p(w);
    (!I || !I.tagName) && (I = {
      namespaceURI: Ft,
      tagName: "template"
    });
    const K = _n(w.tagName), ee = _n(I.tagName);
    return pr[w.namespaceURI] ? w.namespaceURI === Bn ? es(K, I, ee) : w.namespaceURI === Fn ? ts(K, I, ee) : w.namespaceURI === rt ? ns(K, I, ee) : !!(sn === "application/xhtml+xml" && pr[w.namespaceURI]) : !1;
  }, _t = function(w) {
    cn(n.removed, { element: w });
    try {
      p(w).removeChild(w);
    } catch {
      if (f(w), !p(w)) throw gt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Si = function(w, I, K) {
    try {
      g(w, I);
    } catch {
      try {
        w.removeAttribute(K);
      } catch {
      }
    }
  }, Un = function(w) {
    Zn(w);
    const I = b(w);
    if (I) {
      const ee = [];
      Tt(I, (se) => {
        cn(ee, se);
      }), Tt(ee, (se) => {
        try {
          f(se);
        } catch {
        }
      });
    }
    const K = k(w);
    if (K) for (let ee = K.length - 1; ee >= 0; --ee) {
      const se = K[ee], de = se && se.name;
      typeof de == "string" && Si(w, se, de);
    }
  }, St = function(w, I, K) {
    if (!K) try {
      K = I.getAttributeNode(w);
    } catch {
      K = null;
    }
    cn(n.removed, {
      attribute: K || null,
      from: I
    });
    try {
      K ? g(I, K) : I.removeAttribute(w);
    } catch {
      try {
        I.removeAttribute(w);
      } catch {
      }
    }
    if (w === "is")
      if (ve || dt) try {
        _t(I);
      } catch {
      }
      else try {
        I.setAttribute(w, "");
      } catch {
      }
  }, is = function(w) {
    const I = k(w);
    if (I)
      for (let K = I.length - 1; K >= 0; --K) {
        const ee = I[K], se = ee && ee.name;
        typeof se != "string" || M[Se(se)] || Si(w, ee, se);
      }
  }, Zn = function(w) {
    const I = [w];
    for (; I.length > 0; ) {
      const K = I.pop();
      R(K) === He.element && is(K);
      const ee = b(K);
      if (ee) for (let se = ee.length - 1; se >= 0; --se) I.push(ee[se]);
    }
  }, Ai = function(w, I) {
    return he ? w === "patchsrc" ? !0 : w === "for" && I !== "label" && I !== "output" : !1;
  }, as = function(w) {
    if (!he) return;
    const I = [w];
    for (; I.length > 0; ) {
      const K = I.pop(), ee = R(K);
      if (ee === He.processingInstruction || ee === He.comment && De(Ki, K.data)) {
        try {
          f(K);
        } catch {
        }
        continue;
      }
      if (ee === He.element) {
        const de = K, pe = Se(P(K));
        try {
          de.hasAttribute && de.hasAttribute("patchsrc") && de.removeAttribute("patchsrc"), de.hasAttribute && de.hasAttribute("for") && Ai("for", pe) && de.removeAttribute("for");
        } catch {
        }
      }
      const se = b(K);
      if (se) for (let de = se.length - 1; de >= 0; --de) I.push(se[de]);
    }
  }, Ti = function(w) {
    let I = null, K = null;
    if (ft) w = "<remove></remove>" + w;
    else {
      const de = Bi(w, /^[\r\n\t ]+/);
      K = de && de[0];
    }
    sn === "application/xhtml+xml" && Ft === rt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const ee = O ? Z(w) : w;
    if (Ft === rt) try {
      I = new c().parseFromString(ee, sn);
    } catch {
    }
    if (!I || !I.documentElement) {
      I = W.createDocument(Ft, "template", null);
      try {
        I.documentElement.innerHTML = hr ? z : ee;
      } catch {
      }
    }
    const se = I.body || I.documentElement;
    return w && K && se.insertBefore(t.createTextNode(K), se.childNodes[0] || null), Ft === rt ? T.call(I, fe ? "html" : "body")[0] : fe ? I.documentElement : se;
  }, Ci = function(w) {
    const I = B ? B(w) : w.ownerDocument;
    return ae.call(I || w, w, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION, null);
  }, jn = function(w) {
    return w = fn(w, Y, " "), w = fn(w, le, " "), w = fn(w, ce, " "), w;
  }, br = function(w) {
    var I;
    w.normalize();
    const K = B ? B(w) : w.ownerDocument, ee = ae.call(K || w, w, d.SHOW_TEXT | d.SHOW_COMMENT | d.SHOW_CDATA_SECTION | d.SHOW_PROCESSING_INSTRUCTION, null);
    let se = ee.nextNode();
    for (; se; )
      se.data = jn(se.data), se = ee.nextNode();
    const de = (I = w.querySelectorAll) === null || I === void 0 ? void 0 : I.call(w, "template");
    de && Tt(de, (pe) => {
      Ut(pe.content) && br(pe.content);
    });
  }, Hn = function(w) {
    const I = C ? C(w) : null;
    return typeof I != "string" || Se(I) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || w.attributes !== k(w) || typeof w.removeAttribute != "function" || typeof w.removeAttributeNode != "function" || typeof w.getAttributeNode != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || w.nodeType !== S(w) || w.childNodes !== b(w);
  }, Ut = function(w) {
    if (!S || typeof w != "object" || w === null) return !1;
    try {
      return S(w) === He.documentFragment;
    } catch {
      return !1;
    }
  }, ln = function(w) {
    if (!S || typeof w != "object" || w === null) return !1;
    try {
      return typeof S(w) == "number";
    } catch {
      return !1;
    }
  };
  function it(V, w, I) {
    V.length !== 0 && Tt(V, (K) => {
      K.call(n, w, I, Bt);
    });
  }
  const os = function(w, I) {
    return !!(he && w.hasChildNodes() && !ln(w.firstElementChild) && De(Xi, w.textContent) && De(Xi, w.innerHTML) || he && w.namespaceURI === rt && Hs[I] && (ln(w.firstElementChild) || typeof w.textContent == "string" && De(Ws[I], w.textContent)) || w.nodeType === He.processingInstruction || he && w.nodeType === He.comment && De(Ki, w.data));
  }, Wn = function(w, I) {
    if (w instanceof RegExp) return De(w, I);
    if (w instanceof Function) {
      for (var K = arguments.length, ee = new Array(K > 2 ? K - 2 : 0), se = 2; se < K; se++) ee[se - 2] = arguments[se];
      return !!w(I, ...ee);
    }
    return !1;
  }, ss = function(w, I, K) {
    if (!L[I] && Li(I) && Wn(E.tagNameCheck, I)) return !1;
    if (an && !Ve[I]) {
      const ee = p(w), se = b(w);
      if (se && ee) {
        const de = se.length;
        for (let pe = de - 1; pe >= 0; --pe) {
          const ke = w === K ? _(se[pe], !0) : se[pe];
          ee.insertBefore(ke, m(w));
        }
      }
    }
    return _t(w), !0;
  }, zi = function(w, I, K, ee) {
    return w.length === 0 ? I : I === K || I === ee ? Ge(I) : I;
  }, Zt = function(w, I) {
    return w === I || p(w) !== null ? !1 : (on && Zn(w), !0);
  }, Ri = function(w, I) {
    if (it(j.beforeSanitizeElements, w, null), Zt(w, I)) return !0;
    if (Hn(w))
      return _t(w), !0;
    const K = Se(P(w));
    if (l = zi(j.uponSanitizeElement, l, H, nt), it(j.uponSanitizeElement, w, {
      tagName: K,
      allowedTags: l
    }), Zt(w, I)) return !0;
    if (os(w, K))
      return _t(w), !0;
    if (L[K] || !($.tagCheck instanceof Function && $.tagCheck(K)) && !l[K]) {
      const ee = ss(w, K, I);
      return ee === !1 && (it(j.afterSanitizeElements, w, null), Zt(w, I)) ? !0 : ee;
    }
    if (R(w) === He.element && !rs(w) || (K === "noscript" || K === "noembed" || K === "noframes") && De(Zs, w.innerHTML))
      return _t(w), !0;
    if (ne && w.nodeType === He.text) {
      const ee = jn(w.textContent);
      w.textContent !== ee && (cn(n.removed, { element: w.cloneNode() }), w.textContent = ee);
    }
    return it(j.afterSanitizeElements, w, null), Zt(w, I);
  }, Oi = function(w, I, K) {
    if (G[I] || Ai(I, w) || Ke && (I === "id" || I === "name") && (K in t || K in Qo)) return !1;
    const ee = M[I] || $.attributeCheck instanceof Function && $.attributeCheck(I, w);
    return J && De(oe, I) || F && De(ue, I) ? !0 : ee ? bi[I] || De(Ne, fn(K, _e, "")) || (I === "src" || I === "xlink:href" || I === "href") && w !== "script" && Ui(K, "data:") === 0 && _i[w] || te && !De(ye, fn(K, _e, "")) ? !0 : !K : Li(w) && Wn(E.tagNameCheck, w) && Wn(E.attributeNameCheck, I, w) || I === "is" && E.allowCustomizedBuiltInElements && Wn(E.tagNameCheck, K);
  }, ls = me({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Li = function(w) {
    return !ls[_n(w)] && De(Ce, w);
  }, cs = function(w, I, K, ee) {
    if (O && typeof h == "object" && typeof h.getAttributeType == "function" && !K) switch (h.getAttributeType(w, I)) {
      case "TrustedHTML":
        return Z(ee);
      case "TrustedScriptURL":
        return re(ee);
    }
    return ee;
  }, fs = function(w, I, K, ee) {
    try {
      return K ? w.setAttributeNS(K, I, ee) : w.setAttribute(I, ee), Hn(w) ? (_t(w), !1) : !0;
    } catch {
      return St(I, w), !1;
    }
  }, Ni = function(w, I) {
    if (it(j.beforeSanitizeAttributes, w, null), Zt(w, I)) return;
    const K = w.attributes;
    if (!K || Hn(w)) return;
    M = zi(j.uponSanitizeAttribute, M, A, Me);
    const ee = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: M,
      forceKeepAttr: void 0
    };
    let se = K.length;
    const de = Se(w.nodeName);
    for (; se--; ) {
      const pe = K[se], ke = pe.name, qe = pe.namespaceURI, je = pe.value, jt = Se(ke), wr = je;
      let Pe = ke === "value" ? wr : Es(wr), Ii = !1;
      if (ee.attrName = jt, ee.attrValue = Pe, ee.keepAttr = !0, ee.forceKeepAttr = void 0, it(j.uponSanitizeAttribute, w, ee), Pe = ee.attrValue, rn && (jt === "id" || jt === "name") && Ui(Pe, Pn) !== 0 && (St(ke, w, pe), Pe = Pn + Pe, Ii = !0), he && De(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Pe)) {
        St(ke, w, pe);
        continue;
      }
      if (jt === "attributename" && Bi(Pe, "href")) {
        St(ke, w, pe);
        continue;
      }
      if (!ee.forceKeepAttr) {
        if (!ee.keepAttr) {
          St(ke, w, pe);
          continue;
        }
        if (!Q && De(js, Pe)) {
          St(ke, w, pe);
          continue;
        }
        if (ne && (Pe = jn(Pe)), !Oi(de, jt, Pe)) {
          St(ke, w, pe);
          continue;
        }
        Pe = cs(de, jt, qe, Pe), Pe !== wr && fs(w, ke, qe, Pe) && Ii && Fi(n.removed);
      }
    }
    it(j.afterSanitizeAttributes, w, null), Zt(w, I);
  }, $n = function(w) {
    let I = null;
    const K = Ci(w);
    for (it(j.beforeSanitizeShadowDOM, w, null); I = K.nextNode(); )
      if (it(j.uponSanitizeShadowNode, I, null), Ri(I, w), Ni(I, w), Ut(I.content) && $n(I.content), R(I) === He.element) {
        const ee = x(I);
        Ut(ee) && (vr(ee), $n(ee));
      }
    it(j.afterSanitizeShadowDOM, w, null);
  }, vr = function(w) {
    const I = [{
      node: w,
      shadow: null
    }];
    for (; I.length > 0; ) {
      const K = I.pop();
      if (K.shadow) {
        $n(K.shadow);
        continue;
      }
      const ee = K.node, se = R(ee) === He.element, de = b(ee);
      if (de) for (let pe = de.length - 1; pe >= 0; --pe) I.push({
        node: de[pe],
        shadow: null
      });
      if (se) {
        const pe = C ? C(ee) : null;
        if (typeof pe == "string" && Se(pe) === "template") {
          const ke = ee.content;
          Ut(ke) && I.push({
            node: ke,
            shadow: null
          });
        }
      }
      if (se) {
        const pe = x(ee);
        Ut(pe) && I.push({
          node: null,
          shadow: pe
        }, {
          node: pe,
          shadow: null
        });
      }
    }
  };
  return n.sanitize = function(V) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, K = null, ee = null, se = null;
    if (hr = !V, hr && (V = "<!-->"), typeof V != "string" && !ln(V) && (V = Cs(V), typeof V != "string"))
      throw gt("dirty is not a string, aborting");
    if (!n.isSupported) return V;
    Ie ? (l = nt, M = Me) : gr(w), (j.uponSanitizeElement.length > 0 || j.uponSanitizeAttribute.length > 0) && (l = Ge(l)), j.uponSanitizeAttribute.length > 0 && (M = Ge(M)), n.removed = [];
    const de = on && typeof V != "string" && ln(V);
    if (de) {
      as(V);
      const qe = P(V);
      if (typeof qe == "string") {
        const je = Se(qe);
        if (!l[je] || L[je])
          throw Un(V), gt("root node is forbidden and cannot be sanitized in-place");
      }
      if (Hn(V))
        throw Un(V), gt("root node is clobbered and cannot be sanitized in-place");
      try {
        vr(V);
      } catch (je) {
        throw Un(V), je;
      }
    } else if (ln(V))
      I = Ti("<!---->"), K = I.ownerDocument.importNode(V, !0), K.nodeType === He.element && K.nodeName === "BODY" || K.nodeName === "HTML" ? I = K : I.appendChild(K), vr(I);
    else {
      if (!ve && !ne && !fe && V.indexOf("<") === -1) return O && mt ? Z(V) : V;
      if (I = Ti(V), !I) return ve ? null : mt ? z : "";
    }
    I && ft && _t(I.firstChild);
    const pe = de ? V : I;
    try {
      const qe = Ci(pe);
      for (; ee = qe.nextNode(); )
        Ri(ee, pe), Ni(ee, pe), Ut(ee.content) && $n(ee.content);
    } catch (qe) {
      throw de && (Un(V), Tt(n.removed, (je) => {
        je.element && Zn(je.element);
      })), qe;
    }
    if (de) {
      let qe = !1;
      if (Tt(n.removed, (je) => {
        je.element && (je.element === V && (qe = !0), Zn(je.element));
      }), qe) throw gt("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return ne && br(V), V;
    }
    if (ve) {
      if (ne && br(I), dt)
        for (se = U.call(I.ownerDocument); I.firstChild; ) se.appendChild(I.firstChild);
      else se = I;
      return (M.shadowroot || M.shadowrootmode) && (se = q.call(r, se, !0)), se;
    }
    let ke = fe ? I.outerHTML : I.innerHTML;
    return fe && l["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && De(Bs, I.ownerDocument.doctype.name) && (ke = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + ke), ne && (ke = jn(ke)), O && mt ? Z(ke) : ke;
  }, n.setConfig = function() {
    let V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    gr(V), Ie = !0, nt = l, Me = M;
  }, n.clearConfig = function() {
    Bt = null, Ie = !1, nt = null, Me = null, O = N, z = "";
  }, n.isValidAttribute = function(V, w, I) {
    Bt || gr({});
    const K = Se(V), ee = Se(w);
    return Oi(K, ee, I);
  }, n.addHook = function(V, w) {
    typeof w == "function" && Ue(j, V) && cn(j[V], w);
  }, n.removeHook = function(V, w) {
    if (Ue(j, V)) {
      if (w !== void 0) {
        const I = xs(j[V], w);
        return I === -1 ? void 0 : ys(j[V], I, 1)[0];
      }
      return Fi(j[V]);
    }
  }, n.removeHooks = function(V) {
    Ue(j, V) && (j[V] = []);
  }, n.removeAllHooks = function() {
    j = Vi();
  }, n;
}
ro();
/*
 * @license
 * docx-preview <https://github.com/VolodymyrBaydalka/docxjs>
 * Released under Apache License 2.0  <https://github.com/VolodymyrBaydalka/docxjs/blob/master/LICENSE>
 * Copyright Volodymyr Baydalka
 */
var Yt;
(function(e) {
  e.OfficeDocument = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", e.FontTable = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable", e.Image = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", e.Numbering = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering", e.Styles = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", e.StylesWithEffects = "http://schemas.microsoft.com/office/2007/relationships/stylesWithEffects", e.Theme = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme", e.Settings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings", e.WebSettings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings", e.Hyperlink = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", e.Footnotes = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes", e.Endnotes = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes", e.Footer = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer", e.Header = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header", e.ExtendedProperties = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", e.CoreProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", e.CustomProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/custom-properties", e.Comments = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments", e.CommentsExtended = "http://schemas.microsoft.com/office/2011/relationships/commentsExtended", e.AltChunk = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/aFChunk";
})(Yt || (Yt = {}));
var qi;
(function(e) {
  e.Continuous = "continuous", e.NextPage = "nextPage", e.NextColumn = "nextColumn", e.EvenPage = "evenPage", e.OddPage = "oddPage";
})(qi || (qi = {}));
var we;
(function(e) {
  e.Document = "document", e.Paragraph = "paragraph", e.Run = "run", e.Break = "break", e.NoBreakHyphen = "noBreakHyphen", e.Table = "table", e.Row = "row", e.Cell = "cell", e.Hyperlink = "hyperlink", e.SmartTag = "smartTag", e.Drawing = "drawing", e.Image = "image", e.Text = "text", e.Tab = "tab", e.Symbol = "symbol", e.BookmarkStart = "bookmarkStart", e.BookmarkEnd = "bookmarkEnd", e.Footer = "footer", e.Header = "header", e.FootnoteReference = "footnoteReference", e.EndnoteReference = "endnoteReference", e.Footnote = "footnote", e.Endnote = "endnote", e.SimpleField = "simpleField", e.ComplexField = "complexField", e.Instruction = "instruction", e.VmlPicture = "vmlPicture", e.MmlMath = "mmlMath", e.MmlMathParagraph = "mmlMathParagraph", e.MmlFraction = "mmlFraction", e.MmlFunction = "mmlFunction", e.MmlFunctionName = "mmlFunctionName", e.MmlNumerator = "mmlNumerator", e.MmlDenominator = "mmlDenominator", e.MmlRadical = "mmlRadical", e.MmlBase = "mmlBase", e.MmlDegree = "mmlDegree", e.MmlSuperscript = "mmlSuperscript", e.MmlSubscript = "mmlSubscript", e.MmlPreSubSuper = "mmlPreSubSuper", e.MmlSubArgument = "mmlSubArgument", e.MmlSuperArgument = "mmlSuperArgument", e.MmlNary = "mmlNary", e.MmlDelimiter = "mmlDelimiter", e.MmlRun = "mmlRun", e.MmlEquationArray = "mmlEquationArray", e.MmlLimit = "mmlLimit", e.MmlLimitLower = "mmlLimitLower", e.MmlMatrix = "mmlMatrix", e.MmlMatrixRow = "mmlMatrixRow", e.MmlBox = "mmlBox", e.MmlBar = "mmlBar", e.MmlGroupChar = "mmlGroupChar", e.VmlElement = "vmlElement", e.Inserted = "inserted", e.Deleted = "deleted", e.DeletedText = "deletedText", e.Comment = "comment", e.CommentReference = "commentReference", e.CommentRangeStart = "commentRangeStart", e.CommentRangeEnd = "commentRangeEnd", e.AltChunk = "altChunk";
})(we || (we = {}));
Yt.OfficeDocument, Yt.ExtendedProperties, Yt.CoreProperties, Yt.CustomProperties;
we.MmlMath, we.MmlMathParagraph, we.MmlFraction, we.MmlFunction, we.MmlFunctionName, we.MmlNumerator, we.MmlDenominator, we.MmlRadical, we.MmlDegree, we.MmlBase, we.MmlSuperscript, we.MmlSubscript, we.MmlPreSubSuper, we.MmlSuperArgument, we.MmlSubArgument, we.MmlDelimiter, we.MmlNary, we.MmlEquationArray, we.MmlLimit, we.MmlLimitLower, we.MmlMatrix, we.MmlMatrixRow, we.MmlBox, we.MmlBar, we.MmlGroupChar;
/*! pako 2.2.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
const Ys = 4, Ji = 0, Qi = 1, Xs = 2;
function en(e) {
  let n = e.length;
  for (; --n >= 0; )
    e[n] = 0;
}
const Ks = 0, io = 1, Vs = 2, qs = 3, Js = 258, oi = 29, On = 256, yn = On + 1 + oi, Vt = 30, si = 19, ao = 2 * yn + 1, Ct = 15, Tr = 16, Qs = 7, li = 256, oo = 16, so = 17, lo = 18, Vr = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), rr = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), el = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), co = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), tl = 512, pt = new Array((yn + 2) * 2);
en(pt);
const vn = new Array(Vt * 2);
en(vn);
const En = new Array(tl);
en(En);
const kn = new Array(Js - qs + 1);
en(kn);
const ci = new Array(oi);
en(ci);
const ir = new Array(Vt);
en(ir);
function Cr(e, n, t, r, a) {
  this.static_tree = e, this.extra_bits = n, this.extra_base = t, this.elems = r, this.max_length = a, this.has_stree = e && e.length;
}
let fo, uo, ho;
function zr(e, n) {
  this.dyn_tree = e, this.max_code = 0, this.stat_desc = n;
}
const po = (e) => e < 256 ? En[e] : En[256 + (e >>> 7)], Sn = (e, n) => {
  e.pending_buf[e.pending++] = n & 255, e.pending_buf[e.pending++] = n >>> 8 & 255;
}, Ze = (e, n, t) => {
  e.bi_valid > Tr - t ? (e.bi_buf |= n << e.bi_valid & 65535, Sn(e, e.bi_buf), e.bi_buf = n >> Tr - e.bi_valid, e.bi_valid += t - Tr) : (e.bi_buf |= n << e.bi_valid & 65535, e.bi_valid += t);
}, st = (e, n, t) => {
  Ze(
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
}, nl = (e) => {
  e.bi_valid === 16 ? (Sn(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = e.bi_buf & 255, e.bi_buf >>= 8, e.bi_valid -= 8);
}, rl = (e, n) => {
  const t = n.dyn_tree, r = n.max_code, a = n.stat_desc.static_tree, i = n.stat_desc.has_stree, o = n.stat_desc.extra_bits, s = n.stat_desc.extra_base, d = n.stat_desc.max_length;
  let c, h, v, _, f, g, m = 0;
  for (_ = 0; _ <= Ct; _++)
    e.bl_count[_] = 0;
  for (t[e.heap[e.heap_max] * 2 + 1] = 0, c = e.heap_max + 1; c < ao; c++)
    h = e.heap[c], _ = t[t[h * 2 + 1] * 2 + 1] + 1, _ > d && (_ = d, m++), t[h * 2 + 1] = _, !(h > r) && (e.bl_count[_]++, f = 0, h >= s && (f = o[h - s]), g = t[h * 2], e.opt_len += g * (_ + f), i && (e.static_len += g * (a[h * 2 + 1] + f)));
  if (m !== 0) {
    do {
      for (_ = d - 1; e.bl_count[_] === 0; )
        _--;
      e.bl_count[_]--, e.bl_count[_ + 1] += 2, e.bl_count[d]--, m -= 2;
    } while (m > 0);
    for (_ = d; _ !== 0; _--)
      for (h = e.bl_count[_]; h !== 0; )
        v = e.heap[--c], !(v > r) && (t[v * 2 + 1] !== _ && (e.opt_len += (_ - t[v * 2 + 1]) * t[v * 2], t[v * 2 + 1] = _), h--);
  }
}, _o = (e, n, t) => {
  const r = new Array(Ct + 1);
  let a = 0, i, o;
  for (i = 1; i <= Ct; i++)
    a = a + t[i - 1] << 1, r[i] = a;
  for (o = 0; o <= n; o++) {
    let s = e[o * 2 + 1];
    s !== 0 && (e[o * 2] = mo(r[s]++, s));
  }
}, il = () => {
  let e, n, t, r, a;
  const i = new Array(Ct + 1);
  for (t = 0, r = 0; r < oi - 1; r++)
    for (ci[r] = t, e = 0; e < 1 << Vr[r]; e++)
      kn[t++] = r;
  for (kn[t - 1] = r, a = 0, r = 0; r < 16; r++)
    for (ir[r] = a, e = 0; e < 1 << rr[r]; e++)
      En[a++] = r;
  for (a >>= 7; r < Vt; r++)
    for (ir[r] = a << 7, e = 0; e < 1 << rr[r] - 7; e++)
      En[256 + a++] = r;
  for (n = 0; n <= Ct; n++)
    i[n] = 0;
  for (e = 0; e <= 143; )
    pt[e * 2 + 1] = 8, e++, i[8]++;
  for (; e <= 255; )
    pt[e * 2 + 1] = 9, e++, i[9]++;
  for (; e <= 279; )
    pt[e * 2 + 1] = 7, e++, i[7]++;
  for (; e <= 287; )
    pt[e * 2 + 1] = 8, e++, i[8]++;
  for (_o(pt, yn + 1, i), e = 0; e < Vt; e++)
    vn[e * 2 + 1] = 5, vn[e * 2] = mo(e, 5);
  fo = new Cr(pt, Vr, On + 1, yn, Ct), uo = new Cr(vn, rr, 0, Vt, Ct), ho = new Cr(new Array(0), el, 0, si, Qs);
}, go = (e) => {
  let n;
  for (n = 0; n < yn; n++)
    e.dyn_ltree[n * 2] = 0;
  for (n = 0; n < Vt; n++)
    e.dyn_dtree[n * 2] = 0;
  for (n = 0; n < si; n++)
    e.bl_tree[n * 2] = 0;
  e.dyn_ltree[li * 2] = 1, e.opt_len = e.static_len = 0, e.sym_next = e.matches = 0;
}, bo = (e) => {
  e.bi_valid > 8 ? Sn(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
}, ea = (e, n, t, r) => {
  const a = n * 2, i = t * 2;
  return e[a] < e[i] || e[a] === e[i] && r[n] <= r[t];
}, Rr = (e, n, t) => {
  const r = e.heap[t];
  let a = t << 1;
  for (; a <= e.heap_len && (a < e.heap_len && ea(n, e.heap[a + 1], e.heap[a], e.depth) && a++, !ea(n, r, e.heap[a], e.depth)); )
    e.heap[t] = e.heap[a], t = a, a <<= 1;
  e.heap[t] = r;
}, ta = (e, n, t) => {
  let r, a, i = 0, o, s;
  if (e.sym_next !== 0)
    do
      r = e.pending_buf[e.sym_buf + i++] & 255, r += (e.pending_buf[e.sym_buf + i++] & 255) << 8, a = e.pending_buf[e.sym_buf + i++], r === 0 ? st(e, a, n) : (o = kn[a], st(e, o + On + 1, n), s = Vr[o], s !== 0 && (a -= ci[o], Ze(e, a, s)), r--, o = po(r), st(e, o, t), s = rr[o], s !== 0 && (r -= ir[o], Ze(e, r, s)));
    while (i < e.sym_next);
  st(e, li, n);
}, qr = (e, n) => {
  const t = n.dyn_tree, r = n.stat_desc.static_tree, a = n.stat_desc.has_stree, i = n.stat_desc.elems;
  let o, s, d = -1, c;
  for (e.heap_len = 0, e.heap_max = ao, o = 0; o < i; o++)
    t[o * 2] !== 0 ? (e.heap[++e.heap_len] = d = o, e.depth[o] = 0) : t[o * 2 + 1] = 0;
  for (; e.heap_len < 2; )
    c = e.heap[++e.heap_len] = d < 2 ? ++d : 0, t[c * 2] = 1, e.depth[c] = 0, e.opt_len--, a && (e.static_len -= r[c * 2 + 1]);
  for (n.max_code = d, o = e.heap_len >> 1; o >= 1; o--)
    Rr(e, t, o);
  c = i;
  do
    o = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[
      1
      /*SMALLEST*/
    ] = e.heap[e.heap_len--], Rr(
      e,
      t,
      1
      /*SMALLEST*/
    ), s = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[--e.heap_max] = o, e.heap[--e.heap_max] = s, t[c * 2] = t[o * 2] + t[s * 2], e.depth[c] = (e.depth[o] >= e.depth[s] ? e.depth[o] : e.depth[s]) + 1, t[o * 2 + 1] = t[s * 2 + 1] = c, e.heap[
      1
      /*SMALLEST*/
    ] = c++, Rr(
      e,
      t,
      1
      /*SMALLEST*/
    );
  while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[
    1
    /*SMALLEST*/
  ], rl(e, n), _o(t, d, e.bl_count);
}, na = (e, n, t) => {
  let r, a = -1, i, o = n[0 * 2 + 1], s = 0, d = 7, c = 4;
  for (o === 0 && (d = 138, c = 3), n[(t + 1) * 2 + 1] = 65535, r = 0; r <= t; r++)
    i = o, o = n[(r + 1) * 2 + 1], !(++s < d && i === o) && (s < c ? e.bl_tree[i * 2] += s : i !== 0 ? (i !== a && e.bl_tree[i * 2]++, e.bl_tree[oo * 2]++) : s <= 10 ? e.bl_tree[so * 2]++ : e.bl_tree[lo * 2]++, s = 0, a = i, o === 0 ? (d = 138, c = 3) : i === o ? (d = 6, c = 3) : (d = 7, c = 4));
}, ra = (e, n, t) => {
  let r, a = -1, i, o = n[0 * 2 + 1], s = 0, d = 7, c = 4;
  for (o === 0 && (d = 138, c = 3), r = 0; r <= t; r++)
    if (i = o, o = n[(r + 1) * 2 + 1], !(++s < d && i === o)) {
      if (s < c)
        do
          st(e, i, e.bl_tree);
        while (--s !== 0);
      else i !== 0 ? (i !== a && (st(e, i, e.bl_tree), s--), st(e, oo, e.bl_tree), Ze(e, s - 3, 2)) : s <= 10 ? (st(e, so, e.bl_tree), Ze(e, s - 3, 3)) : (st(e, lo, e.bl_tree), Ze(e, s - 11, 7));
      s = 0, a = i, o === 0 ? (d = 138, c = 3) : i === o ? (d = 6, c = 3) : (d = 7, c = 4);
    }
}, al = (e) => {
  let n;
  for (na(e, e.dyn_ltree, e.l_desc.max_code), na(e, e.dyn_dtree, e.d_desc.max_code), qr(e, e.bl_desc), n = si - 1; n >= 3 && e.bl_tree[co[n] * 2 + 1] === 0; n--)
    ;
  return e.opt_len += 3 * (n + 1) + 5 + 5 + 4, n;
}, ol = (e, n, t, r) => {
  let a;
  for (Ze(e, n - 257, 5), Ze(e, t - 1, 5), Ze(e, r - 4, 4), a = 0; a < r; a++)
    Ze(e, e.bl_tree[co[a] * 2 + 1], 3);
  ra(e, e.dyn_ltree, n - 1), ra(e, e.dyn_dtree, t - 1);
}, sl = (e) => {
  let n = 4093624447, t;
  for (t = 0; t <= 31; t++, n >>>= 1)
    if (n & 1 && e.dyn_ltree[t * 2] !== 0)
      return Ji;
  if (e.dyn_ltree[9 * 2] !== 0 || e.dyn_ltree[10 * 2] !== 0 || e.dyn_ltree[13 * 2] !== 0)
    return Qi;
  for (t = 32; t < On; t++)
    if (e.dyn_ltree[t * 2] !== 0)
      return Qi;
  return Ji;
};
let ia = !1;
const ll = (e) => {
  ia || (il(), ia = !0), e.l_desc = new zr(e.dyn_ltree, fo), e.d_desc = new zr(e.dyn_dtree, uo), e.bl_desc = new zr(e.bl_tree, ho), e.bi_buf = 0, e.bi_valid = 0, go(e);
}, vo = (e, n, t, r) => {
  Ze(e, (Ks << 1) + (r ? 1 : 0), 3), bo(e), Sn(e, t), Sn(e, ~t), t && e.pending_buf.set(e.window.subarray(n, n + t), e.pending), e.pending += t;
}, cl = (e) => {
  Ze(e, io << 1, 3), st(e, li, pt), nl(e);
}, fl = (e, n, t, r) => {
  let a, i, o = 0;
  e.level > 0 ? (e.strm.data_type === Xs && (e.strm.data_type = sl(e)), qr(e, e.l_desc), qr(e, e.d_desc), o = al(e), a = e.opt_len + 3 + 7 >>> 3, i = e.static_len + 3 + 7 >>> 3, i <= a && (a = i)) : a = i = t + 5, t + 4 <= a && n !== -1 ? vo(e, n, t, r) : e.strategy === Ys || i === a ? (Ze(e, (io << 1) + (r ? 1 : 0), 3), ta(e, pt, vn)) : (Ze(e, (Vs << 1) + (r ? 1 : 0), 3), ol(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1), ta(e, e.dyn_ltree, e.dyn_dtree)), go(e), r && bo(e);
}, dl = (e, n, t) => (e.pending_buf[e.sym_buf + e.sym_next++] = n, e.pending_buf[e.sym_buf + e.sym_next++] = n >> 8, e.pending_buf[e.sym_buf + e.sym_next++] = t, n === 0 ? e.dyn_ltree[t * 2]++ : (e.matches++, n--, e.dyn_ltree[(kn[t] + On + 1) * 2]++, e.dyn_dtree[po(n) * 2]++), e.sym_next === e.sym_end);
var ul = ll, hl = vo, pl = fl, ml = dl, _l = cl, gl = {
  _tr_init: ul,
  _tr_stored_block: hl,
  _tr_flush_block: pl,
  _tr_tally: ml,
  _tr_align: _l
};
const bl = (e, n, t, r) => {
  let a = e & 65535 | 0, i = e >>> 16 & 65535 | 0, o = 0;
  for (; t !== 0; ) {
    o = t > 2e3 ? 2e3 : t, t -= o;
    do
      a = a + n[r++] | 0, i = i + a | 0;
    while (--o);
    a %= 65521, i %= 65521;
  }
  return a | i << 16 | 0;
};
var An = bl;
const vl = () => {
  let e, n = [];
  for (var t = 0; t < 256; t++) {
    e = t;
    for (var r = 0; r < 8; r++)
      e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
    n[t] = e;
  }
  return n;
}, wl = new Uint32Array(vl()), xl = (e, n, t, r) => {
  const a = wl, i = r + t;
  e ^= -1;
  for (let o = r; o < i; o++)
    e = e >>> 8 ^ a[(e ^ n[o]) & 255];
  return e ^ -1;
};
var ze = xl, Lt = {
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
}, Ln = {
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
const { _tr_init: yl, _tr_stored_block: Jr, _tr_flush_block: El, _tr_tally: xt, _tr_align: kl } = gl, {
  Z_NO_FLUSH: yt,
  Z_PARTIAL_FLUSH: Sl,
  Z_FULL_FLUSH: Al,
  Z_FINISH: Qe,
  Z_BLOCK: aa,
  Z_OK: Le,
  Z_STREAM_END: oa,
  Z_STREAM_ERROR: lt,
  Z_DATA_ERROR: Tl,
  Z_BUF_ERROR: Or,
  Z_DEFAULT_COMPRESSION: Cl,
  Z_FILTERED: zl,
  Z_HUFFMAN_ONLY: Xn,
  Z_RLE: Rl,
  Z_FIXED: Ol,
  Z_DEFAULT_STRATEGY: Ll,
  Z_UNKNOWN: Nl,
  Z_DEFLATED: lr
} = Ln, Il = 9, Dl = 15, Ml = 8, Pl = 29, Fl = 256, Qr = Fl + 1 + Pl, Bl = 30, Ul = 19, Zl = 2 * Qr + 1, jl = 15, ge = 3, wt = 258, ct = wt + ge + 1, Hl = 32, Jt = 42, fi = 57, ei = 69, ti = 73, ni = 91, ri = 103, zt = 113, gn = 666, Fe = 1, tn = 2, Nt = 3, nn = 4, Wl = 3, Rt = (e, n) => (e.msg = Lt[n], n), sa = (e) => e * 2 - (e > 4 ? 9 : 0), vt = (e) => {
  let n = e.length;
  for (; --n >= 0; )
    e[n] = 0;
}, $l = (e) => {
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
let di = (e, n, t) => (n << e.hash_shift ^ t) & e.hash_mask;
const It = (e, n) => {
  let t;
  if (e.legacy_hash)
    t = e.ins_h = di(e, e.ins_h, e.window[n + ge - 1]);
  else {
    const a = e.window, i = a[n] | a[n + 1] << 8 | a[n + 2] << 16 | a[n + 3] << 24;
    t = e.ins_h = Math.imul(i, 66521) + 66521 >>> 16 & e.hash_mask;
  }
  const r = e.prev[n & e.w_mask] = e.head[t];
  return e.head[t] = n, r;
}, Ye = (e) => {
  const n = e.state;
  let t = n.pending;
  t > e.avail_out && (t = e.avail_out), t !== 0 && (e.output.set(n.pending_buf.subarray(n.pending_out, n.pending_out + t), e.next_out), e.next_out += t, n.pending_out += t, e.total_out += t, e.avail_out -= t, n.pending -= t, n.pending === 0 && (n.pending_out = 0));
}, Xe = (e, n) => {
  El(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, n), e.block_start = e.strstart, Ye(e.strm);
}, be = (e, n) => {
  e.pending_buf[e.pending++] = n;
}, un = (e, n) => {
  e.pending_buf[e.pending++] = n >>> 8 & 255, e.pending_buf[e.pending++] = n & 255;
}, ii = (e, n, t, r) => {
  let a = e.avail_in;
  return a > r && (a = r), a === 0 ? 0 : (e.avail_in -= a, n.set(e.input.subarray(e.next_in, e.next_in + a), t), e.state.wrap === 1 ? e.adler = An(e.adler, n, a, t) : e.state.wrap === 2 && (e.adler = ze(e.adler, n, a, t)), e.next_in += a, e.total_in += a, a);
}, wo = (e, n) => {
  let t = e.max_chain_length, r = e.strstart, a, i, o = e.prev_length, s = e.nice_match;
  const d = e.strstart > e.w_size - ct ? e.strstart - (e.w_size - ct) : 0, c = e.window, h = e.w_mask, v = e.prev, _ = e.strstart + wt;
  let f = c[r + o - 1], g = c[r + o];
  e.prev_length >= e.good_match && (t >>= 2), s > e.lookahead && (s = e.lookahead);
  do
    if (a = n, !(c[a + o] !== g || c[a + o - 1] !== f || c[a] !== c[r] || c[++a] !== c[r + 1])) {
      r += 2, a++;
      do
        ;
      while (c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && r < _);
      if (i = wt - (_ - r), r = _ - wt, i > o) {
        if (e.match_start = n, o = i, i >= s)
          break;
        f = c[r + o - 1], g = c[r + o];
      }
    }
  while ((n = v[n & h]) > d && --t !== 0);
  return o <= e.lookahead ? o : e.lookahead;
}, Qt = (e) => {
  const n = e.w_size;
  let t, r, a;
  do {
    if (r = e.window_size - e.lookahead - e.strstart, e.strstart >= n + (n - ct) && (e.window.set(e.window.subarray(n, n + n - r), 0), e.match_start -= n, e.strstart -= n, e.block_start -= n, e.insert > e.strstart && (e.insert = e.strstart), $l(e), r += n), e.strm.avail_in === 0)
      break;
    if (t = ii(e.strm, e.window, e.strstart + e.lookahead, r), e.lookahead += t, e.legacy_hash) {
      if (e.lookahead + e.insert >= ge)
        for (a = e.strstart - e.insert, e.ins_h = e.window[a], e.ins_h = di(e, e.ins_h, e.window[a + 1]); e.insert && (It(e, a), a++, e.insert--, !(e.lookahead + e.insert < ge)); )
          ;
    } else if (e.lookahead + e.insert > ge)
      for (a = e.strstart - e.insert; e.insert && (It(e, a), a++, e.insert--, !(e.lookahead + e.insert <= ge)); )
        ;
  } while (e.lookahead < ct && e.strm.avail_in !== 0);
}, xo = (e, n) => {
  let t = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5, r, a, i, o = 0, s = e.strm.avail_in;
  do {
    if (r = 65535, i = e.bi_valid + 42 >> 3, e.strm.avail_out < i || (i = e.strm.avail_out - i, a = e.strstart - e.block_start, r > a + e.strm.avail_in && (r = a + e.strm.avail_in), r > i && (r = i), r < t && (r === 0 && n !== Qe || n === yt || r !== a + e.strm.avail_in)))
      break;
    o = n === Qe && r === a + e.strm.avail_in ? 1 : 0, Jr(e, 0, 0, o), e.pending_buf[e.pending - 4] = r, e.pending_buf[e.pending - 3] = r >> 8, e.pending_buf[e.pending - 2] = ~r, e.pending_buf[e.pending - 1] = ~r >> 8, Ye(e.strm), a && (a > r && (a = r), e.strm.output.set(e.window.subarray(e.block_start, e.block_start + a), e.strm.next_out), e.strm.next_out += a, e.strm.avail_out -= a, e.strm.total_out += a, e.block_start += a, r -= a), r && (ii(e.strm, e.strm.output, e.strm.next_out, r), e.strm.next_out += r, e.strm.avail_out -= r, e.strm.total_out += r);
  } while (o === 0);
  return s -= e.strm.avail_in, s && (s >= e.w_size ? (e.matches = 2, e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0), e.strstart = e.w_size, e.insert = e.strstart) : (e.window_size - e.strstart <= s && (e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, e.insert > e.strstart && (e.insert = e.strstart)), e.window.set(e.strm.input.subarray(e.strm.next_in - s, e.strm.next_in), e.strstart), e.strstart += s, e.insert += s > e.w_size - e.insert ? e.w_size - e.insert : s), e.block_start = e.strstart), e.high_water < e.strstart && (e.high_water = e.strstart), o ? nn : n !== yt && n !== Qe && e.strm.avail_in === 0 && e.strstart === e.block_start ? tn : (i = e.window_size - e.strstart, e.strm.avail_in > i && e.block_start >= e.w_size && (e.block_start -= e.w_size, e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, i += e.w_size, e.insert > e.strstart && (e.insert = e.strstart)), i > e.strm.avail_in && (i = e.strm.avail_in), i && (ii(e.strm, e.window, e.strstart, i), e.strstart += i, e.insert += i > e.w_size - e.insert ? e.w_size - e.insert : i), e.high_water < e.strstart && (e.high_water = e.strstart), i = e.bi_valid + 42 >> 3, i = e.pending_buf_size - i > 65535 ? 65535 : e.pending_buf_size - i, t = i > e.w_size ? e.w_size : i, a = e.strstart - e.block_start, (a >= t || (a || n === Qe) && n !== yt && e.strm.avail_in === 0 && a <= i) && (r = a > i ? i : a, o = n === Qe && e.strm.avail_in === 0 && r === a ? 1 : 0, Jr(e, e.block_start, r, o), e.block_start += r, Ye(e.strm)), o ? Nt : Fe);
}, Lr = (e, n) => {
  let t, r;
  for (; ; ) {
    if (e.lookahead < ct) {
      if (Qt(e), e.lookahead < ct && n === yt)
        return Fe;
      if (e.lookahead === 0)
        break;
    }
    if (t = 0, e.lookahead >= ge && (t = It(e, e.strstart)), t !== 0 && e.strstart - t <= e.w_size - ct && (e.match_length = wo(e, t)), e.match_length >= ge)
      if (r = xt(e, e.strstart - e.match_start, e.match_length - ge), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= ge) {
        e.match_length--;
        do
          e.strstart++, t = It(e, e.strstart);
        while (--e.match_length !== 0);
        e.strstart++;
      } else
        e.strstart += e.match_length, e.match_length = 0, e.legacy_hash && (e.ins_h = e.window[e.strstart], e.ins_h = di(e, e.ins_h, e.window[e.strstart + 1]));
    else
      r = xt(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
    if (r && (Xe(e, !1), e.strm.avail_out === 0))
      return Fe;
  }
  return e.insert = e.strstart < ge - 1 ? e.strstart : ge - 1, n === Qe ? (Xe(e, !0), e.strm.avail_out === 0 ? Nt : nn) : e.sym_next && (Xe(e, !1), e.strm.avail_out === 0) ? Fe : tn;
}, Ht = (e, n) => {
  let t, r, a;
  for (; ; ) {
    if (e.lookahead < ct) {
      if (Qt(e), e.lookahead < ct && n === yt)
        return Fe;
      if (e.lookahead === 0)
        break;
    }
    if (t = 0, e.lookahead >= ge && (t = It(e, e.strstart)), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = ge - 1, t !== 0 && e.prev_length < e.max_lazy_match && e.strstart - t <= e.w_size - ct && (e.match_length = wo(e, t), e.match_length <= 5 && (e.strategy === zl || e.match_length === ge && e.strstart - e.match_start > 4096) && (e.match_length = ge - 1)), e.prev_length >= ge && e.match_length <= e.prev_length) {
      a = e.strstart + e.lookahead - ge, r = xt(e, e.strstart - 1 - e.prev_match, e.prev_length - ge), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
      do
        ++e.strstart <= a && (t = It(e, e.strstart));
      while (--e.prev_length !== 0);
      if (e.match_available = 0, e.match_length = ge - 1, e.strstart++, r && (Xe(e, !1), e.strm.avail_out === 0))
        return Fe;
    } else if (e.match_available) {
      if (r = xt(e, 0, e.window[e.strstart - 1]), r && Xe(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0)
        return Fe;
    } else
      e.match_available = 1, e.strstart++, e.lookahead--;
  }
  return e.match_available && (r = xt(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < ge - 1 ? e.strstart : ge - 1, n === Qe ? (Xe(e, !0), e.strm.avail_out === 0 ? Nt : nn) : e.sym_next && (Xe(e, !1), e.strm.avail_out === 0) ? Fe : tn;
}, Gl = (e, n) => {
  let t, r, a, i;
  const o = e.window;
  for (; ; ) {
    if (e.lookahead <= wt) {
      if (Qt(e), e.lookahead <= wt && n === yt)
        return Fe;
      if (e.lookahead === 0)
        break;
    }
    if (e.match_length = 0, e.lookahead >= ge && e.strstart > 0 && (a = e.strstart - 1, r = o[a], r === o[++a] && r === o[++a] && r === o[++a])) {
      i = e.strstart + wt;
      do
        ;
      while (r === o[++a] && r === o[++a] && r === o[++a] && r === o[++a] && r === o[++a] && r === o[++a] && r === o[++a] && r === o[++a] && a < i);
      e.match_length = wt - (i - a), e.match_length > e.lookahead && (e.match_length = e.lookahead);
    }
    if (e.match_length >= ge ? (t = xt(e, 1, e.match_length - ge), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (t = xt(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), t && (Xe(e, !1), e.strm.avail_out === 0))
      return Fe;
  }
  return e.insert = 0, n === Qe ? (Xe(e, !0), e.strm.avail_out === 0 ? Nt : nn) : e.sym_next && (Xe(e, !1), e.strm.avail_out === 0) ? Fe : tn;
}, Yl = (e, n) => {
  let t;
  for (; ; ) {
    if (e.lookahead === 0 && (Qt(e), e.lookahead === 0)) {
      if (n === yt)
        return Fe;
      break;
    }
    if (e.match_length = 0, t = xt(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, t && (Xe(e, !1), e.strm.avail_out === 0))
      return Fe;
  }
  return e.insert = 0, n === Qe ? (Xe(e, !0), e.strm.avail_out === 0 ? Nt : nn) : e.sym_next && (Xe(e, !1), e.strm.avail_out === 0) ? Fe : tn;
};
function at(e, n, t, r, a) {
  this.good_length = e, this.max_lazy = n, this.nice_length = t, this.max_chain = r, this.func = a;
}
const bn = [
  /*      good lazy nice chain */
  new at(0, 0, 0, 0, xo),
  /* 0 store only */
  new at(4, 4, 8, 4, Lr),
  /* 1 max speed, no lazy matches */
  new at(4, 5, 16, 8, Lr),
  /* 2 */
  new at(4, 6, 32, 32, Lr),
  /* 3 */
  new at(4, 4, 16, 16, Ht),
  /* 4 lazy matches */
  new at(8, 16, 32, 32, Ht),
  /* 5 */
  new at(8, 16, 128, 128, Ht),
  /* 6 */
  new at(8, 32, 128, 256, Ht),
  /* 7 */
  new at(32, 128, 258, 1024, Ht),
  /* 8 */
  new at(32, 258, 258, 4096, Ht)
  /* 9 max compression */
], Xl = (e) => {
  e.window_size = 2 * e.w_size, vt(e.head), e.max_lazy_match = bn[e.level].max_lazy, e.good_match = bn[e.level].good_length, e.nice_match = bn[e.level].nice_length, e.max_chain_length = bn[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = ge - 1, e.match_available = 0, e.ins_h = 0;
};
function Kl() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = lr, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.legacy_hash = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(Zl * 2), this.dyn_dtree = new Uint16Array((2 * Bl + 1) * 2), this.bl_tree = new Uint16Array((2 * Ul + 1) * 2), vt(this.dyn_ltree), vt(this.dyn_dtree), vt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(jl + 1), this.heap = new Uint16Array(2 * Qr + 1), vt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * Qr + 1), vt(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const Nn = (e) => {
  if (!e)
    return 1;
  const n = e.state;
  return !n || n.strm !== e || n.status !== Jt && //#ifdef GZIP
  n.status !== fi && //#endif
  n.status !== ei && n.status !== ti && n.status !== ni && n.status !== ri && n.status !== zt && n.status !== gn ? 1 : 0;
}, yo = (e) => {
  if (Nn(e))
    return Rt(e, lt);
  e.total_in = e.total_out = 0, e.data_type = Nl;
  const n = e.state;
  return n.pending = 0, n.pending_out = 0, n.wrap < 0 && (n.wrap = -n.wrap), n.status = //#ifdef GZIP
  n.wrap === 2 ? fi : (
    //#endif
    n.wrap ? Jt : zt
  ), e.adler = n.wrap === 2 ? 0 : 1, n.last_flush = -2, yl(n), Le;
}, Eo = (e) => {
  const n = yo(e);
  return n === Le && Xl(e.state), n;
}, Vl = (e, n) => Nn(e) || e.state.wrap !== 2 ? lt : (e.state.gzhead = n, Le), ko = (e, n, t, r, a, i, o) => {
  if (!e)
    return lt;
  let s = 1;
  if (n === Cl && (n = 6), r < 0 ? (s = 0, r = -r) : r > 15 && (s = 2, r -= 16), a < 1 || a > Il || t !== lr || r < 8 || r > 15 || n < 0 || n > 9 || i < 0 || i > Ol || r === 8 && s !== 1)
    return Rt(e, lt);
  r === 8 && (r = 9);
  const d = new Kl();
  return e.state = d, d.strm = e, d.status = Jt, d.wrap = s, d.gzhead = null, d.w_bits = r, d.w_size = 1 << d.w_bits, d.w_mask = d.w_size - 1, d.legacy_hash = o ? 1 : 0, d.hash_bits = a + 7, !d.legacy_hash && d.hash_bits < 15 && (d.hash_bits = 15), d.hash_size = 1 << d.hash_bits, d.hash_mask = d.hash_size - 1, d.hash_shift = ~~((d.hash_bits + ge - 1) / ge), d.window = new Uint8Array(d.w_size * 2), d.head = new Uint16Array(d.hash_size), d.prev = new Uint16Array(d.w_size), d.lit_bufsize = 1 << a + 6, d.pending_buf_size = d.lit_bufsize * 4, d.pending_buf = new Uint8Array(d.pending_buf_size), d.sym_buf = d.lit_bufsize, d.sym_end = (d.lit_bufsize - 1) * 3, d.level = n, d.strategy = i, d.method = t, Eo(e);
}, ql = (e, n) => ko(e, n, lr, Dl, Ml, Ll), Jl = (e, n) => {
  if (Nn(e) || n > aa || n < 0)
    return e ? Rt(e, lt) : lt;
  const t = e.state;
  if (!e.output || e.avail_in !== 0 && !e.input || t.status === gn && n !== Qe)
    return Rt(e, e.avail_out === 0 ? Or : lt);
  const r = t.last_flush;
  if (t.last_flush = n, t.pending !== 0) {
    if (Ye(e), e.avail_out === 0)
      return t.last_flush = -1, Le;
  } else if (e.avail_in === 0 && sa(n) <= sa(r) && n !== Qe)
    return Rt(e, Or);
  if (t.status === gn && e.avail_in !== 0)
    return Rt(e, Or);
  if (t.status === Jt && t.wrap === 0 && (t.status = zt), t.status === Jt) {
    let a = lr + (t.w_bits - 8 << 4) << 8, i = -1;
    if (t.strategy >= Xn || t.level < 2 ? i = 0 : t.level < 6 ? i = 1 : t.level === 6 ? i = 2 : i = 3, a |= i << 6, t.strstart !== 0 && (a |= Hl), a += 31 - a % 31, un(t, a), t.strstart !== 0 && (un(t, e.adler >>> 16), un(t, e.adler & 65535)), e.adler = 1, t.status = zt, Ye(e), t.pending !== 0)
      return t.last_flush = -1, Le;
  }
  if (t.status === fi) {
    if (e.adler = 0, be(t, 31), be(t, 139), be(t, 8), t.gzhead)
      be(
        t,
        (t.gzhead.text ? 1 : 0) + (t.gzhead.hcrc ? 2 : 0) + (t.gzhead.extra ? 4 : 0) + (t.gzhead.name ? 8 : 0) + (t.gzhead.comment ? 16 : 0)
      ), be(t, t.gzhead.time & 255), be(t, t.gzhead.time >> 8 & 255), be(t, t.gzhead.time >> 16 & 255), be(t, t.gzhead.time >> 24 & 255), be(t, t.level === 9 ? 2 : t.strategy >= Xn || t.level < 2 ? 4 : 0), be(t, t.gzhead.os & 255), t.gzhead.extra && t.gzhead.extra.length && (be(t, t.gzhead.extra.length & 255), be(t, t.gzhead.extra.length >> 8 & 255)), t.gzhead.hcrc && (e.adler = ze(e.adler, t.pending_buf, t.pending, 0)), t.gzindex = 0, t.status = ei;
    else if (be(t, 0), be(t, 0), be(t, 0), be(t, 0), be(t, 0), be(t, t.level === 9 ? 2 : t.strategy >= Xn || t.level < 2 ? 4 : 0), be(t, Wl), t.status = zt, Ye(e), t.pending !== 0)
      return t.last_flush = -1, Le;
  }
  if (t.status === ei) {
    if (t.gzhead.extra) {
      let a = t.pending, i = (t.gzhead.extra.length & 65535) - t.gzindex;
      for (; t.pending + i > t.pending_buf_size; ) {
        let s = t.pending_buf_size - t.pending;
        if (t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex, t.gzindex + s), t.pending), t.pending = t.pending_buf_size, t.gzhead.hcrc && t.pending > a && (e.adler = ze(e.adler, t.pending_buf, t.pending - a, a)), t.gzindex += s, Ye(e), t.pending !== 0)
          return t.last_flush = -1, Le;
        a = 0, i -= s;
      }
      let o = new Uint8Array(t.gzhead.extra);
      t.pending_buf.set(o.subarray(t.gzindex, t.gzindex + i), t.pending), t.pending += i, t.gzhead.hcrc && t.pending > a && (e.adler = ze(e.adler, t.pending_buf, t.pending - a, a)), t.gzindex = 0;
    }
    t.status = ti;
  }
  if (t.status === ti) {
    if (t.gzhead.name) {
      let a = t.pending, i;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > a && (e.adler = ze(e.adler, t.pending_buf, t.pending - a, a)), Ye(e), t.pending !== 0)
            return t.last_flush = -1, Le;
          a = 0;
        }
        t.gzindex < t.gzhead.name.length ? i = t.gzhead.name.charCodeAt(t.gzindex++) & 255 : i = 0, be(t, i);
      } while (i !== 0);
      t.gzhead.hcrc && t.pending > a && (e.adler = ze(e.adler, t.pending_buf, t.pending - a, a)), t.gzindex = 0;
    }
    t.status = ni;
  }
  if (t.status === ni) {
    if (t.gzhead.comment) {
      let a = t.pending, i;
      do {
        if (t.pending === t.pending_buf_size) {
          if (t.gzhead.hcrc && t.pending > a && (e.adler = ze(e.adler, t.pending_buf, t.pending - a, a)), Ye(e), t.pending !== 0)
            return t.last_flush = -1, Le;
          a = 0;
        }
        t.gzindex < t.gzhead.comment.length ? i = t.gzhead.comment.charCodeAt(t.gzindex++) & 255 : i = 0, be(t, i);
      } while (i !== 0);
      t.gzhead.hcrc && t.pending > a && (e.adler = ze(e.adler, t.pending_buf, t.pending - a, a));
    }
    t.status = ri;
  }
  if (t.status === ri) {
    if (t.gzhead.hcrc) {
      if (t.pending + 2 > t.pending_buf_size && (Ye(e), t.pending !== 0))
        return t.last_flush = -1, Le;
      be(t, e.adler & 255), be(t, e.adler >> 8 & 255), e.adler = 0;
    }
    if (t.status = zt, Ye(e), t.pending !== 0)
      return t.last_flush = -1, Le;
  }
  if (e.avail_in !== 0 || t.lookahead !== 0 || n !== yt && t.status !== gn) {
    let a = t.level === 0 ? xo(t, n) : t.strategy === Xn ? Yl(t, n) : t.strategy === Rl ? Gl(t, n) : bn[t.level].func(t, n);
    if ((a === Nt || a === nn) && (t.status = gn), a === Fe || a === Nt)
      return e.avail_out === 0 && (t.last_flush = -1), Le;
    if (a === tn && (n === Sl ? kl(t) : n !== aa && (Jr(t, 0, 0, !1), n === Al && (vt(t.head), t.lookahead === 0 && (t.strstart = 0, t.block_start = 0, t.insert = 0))), Ye(e), e.avail_out === 0))
      return t.last_flush = -1, Le;
  }
  return n !== Qe ? Le : t.wrap <= 0 ? oa : (t.wrap === 2 ? (be(t, e.adler & 255), be(t, e.adler >> 8 & 255), be(t, e.adler >> 16 & 255), be(t, e.adler >> 24 & 255), be(t, e.total_in & 255), be(t, e.total_in >> 8 & 255), be(t, e.total_in >> 16 & 255), be(t, e.total_in >> 24 & 255)) : (un(t, e.adler >>> 16), un(t, e.adler & 65535)), Ye(e), t.wrap > 0 && (t.wrap = -t.wrap), t.pending !== 0 ? Le : oa);
}, Ql = (e) => {
  if (Nn(e))
    return lt;
  const n = e.state.status;
  return e.state = null, n === zt ? Rt(e, Tl) : Le;
}, ec = (e, n) => {
  let t = n.length;
  if (Nn(e))
    return lt;
  const r = e.state, a = r.wrap;
  if (a === 2 || a === 1 && r.status !== Jt || r.lookahead)
    return lt;
  if (a === 1 && (e.adler = An(e.adler, n, t, 0)), r.wrap = 0, t >= r.w_size) {
    a === 0 && (vt(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0);
    let d = new Uint8Array(r.w_size);
    d.set(n.subarray(t - r.w_size, t), 0), n = d, t = r.w_size;
  }
  const i = e.avail_in, o = e.next_in, s = e.input;
  for (e.avail_in = t, e.next_in = 0, e.input = n, Qt(r); r.lookahead >= ge; ) {
    let d = r.strstart, c = r.lookahead - (ge - 1);
    do
      It(r, d), d++;
    while (--c);
    r.strstart = d, r.lookahead = ge - 1, Qt(r);
  }
  return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = ge - 1, r.match_available = 0, e.next_in = o, e.input = s, e.avail_in = i, r.wrap = a, Le;
};
var tc = ql, nc = ko, rc = Eo, ic = yo, ac = Vl, oc = Jl, sc = Ql, lc = ec, cc = "pako deflate (from Nodeca project)", wn = {
  deflateInit: tc,
  deflateInit2: nc,
  deflateReset: rc,
  deflateResetKeep: ic,
  deflateSetHeader: ac,
  deflate: oc,
  deflateEnd: sc,
  deflateSetDictionary: lc,
  deflateInfo: cc
};
const fc = (e, n) => Object.prototype.hasOwnProperty.call(e, n);
var dc = function(e) {
  const n = Array.prototype.slice.call(arguments, 1);
  for (; n.length; ) {
    const t = n.shift();
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be non-object");
      for (const r in t)
        fc(t, r) && (e[r] = t[r]);
    }
  }
  return e;
}, uc = (e) => {
  let n = 0;
  for (let r = 0, a = e.length; r < a; r++)
    n += e[r].length;
  const t = new Uint8Array(n);
  for (let r = 0, a = 0, i = e.length; r < i; r++) {
    let o = e[r];
    t.set(o, a), a += o.length;
  }
  return t;
}, cr = {
  assign: dc,
  flattenChunks: uc
};
let So = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  So = !1;
}
const Tn = new Uint8Array(256);
for (let e = 0; e < 256; e++)
  Tn[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
Tn[254] = Tn[255] = 1;
var hc = (e) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(e);
  let n, t, r, a, i, o = e.length, s = 0;
  for (a = 0; a < o; a++)
    t = e.charCodeAt(a), (t & 64512) === 55296 && a + 1 < o && (r = e.charCodeAt(a + 1), (r & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (r - 56320), a++)), s += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
  for (n = new Uint8Array(s), i = 0, a = 0; i < s; a++)
    t = e.charCodeAt(a), (t & 64512) === 55296 && a + 1 < o && (r = e.charCodeAt(a + 1), (r & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (r - 56320), a++)), t < 128 ? n[i++] = t : t < 2048 ? (n[i++] = 192 | t >>> 6, n[i++] = 128 | t & 63) : t < 65536 ? (n[i++] = 224 | t >>> 12, n[i++] = 128 | t >>> 6 & 63, n[i++] = 128 | t & 63) : (n[i++] = 240 | t >>> 18, n[i++] = 128 | t >>> 12 & 63, n[i++] = 128 | t >>> 6 & 63, n[i++] = 128 | t & 63);
  return n;
};
const pc = (e, n) => {
  if (n < 65534 && e.subarray && So)
    return String.fromCharCode.apply(null, e.length === n ? e : e.subarray(0, n));
  let t = "";
  for (let r = 0; r < n; r++)
    t += String.fromCharCode(e[r]);
  return t;
};
var mc = (e, n) => {
  const t = n || e.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(e.subarray(0, n));
  let r, a;
  const i = new Array(t * 2);
  for (a = 0, r = 0; r < t; ) {
    let o = e[r++];
    if (o < 128) {
      i[a++] = o;
      continue;
    }
    let s = Tn[o];
    if (s > 4) {
      i[a++] = 65533, r += s - 1;
      continue;
    }
    for (o &= s === 2 ? 31 : s === 3 ? 15 : 7; s > 1 && r < t; )
      o = o << 6 | e[r++] & 63, s--;
    if (s > 1) {
      i[a++] = 65533;
      continue;
    }
    o < 65536 ? i[a++] = o : (o -= 65536, i[a++] = 55296 | o >> 10 & 1023, i[a++] = 56320 | o & 1023);
  }
  return pc(i, a);
}, _c = (e, n) => {
  n = n || e.length, n > e.length && (n = e.length);
  let t = n - 1;
  for (; t >= 0 && (e[t] & 192) === 128; )
    t--;
  return t < 0 || t === 0 ? n : t + Tn[e[t]] > n ? t : n;
}, Cn = {
  string2buf: hc,
  buf2string: mc,
  utf8border: _c
};
function gc() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var Ao = gc;
const To = Object.prototype.toString, {
  Z_NO_FLUSH: bc,
  Z_SYNC_FLUSH: vc,
  Z_FULL_FLUSH: wc,
  Z_FINISH: xc,
  Z_OK: ar,
  Z_STREAM_END: yc,
  Z_DEFAULT_COMPRESSION: Ec,
  Z_DEFAULT_STRATEGY: kc,
  Z_DEFLATED: Sc
} = Ln, Ac = {
  level: Ec,
  method: Sc,
  chunkSize: 16384,
  windowBits: 15,
  memLevel: 8,
  strategy: kc,
  legacyHash: !0
};
function In(e) {
  this.options = cr.assign({}, Ac, e || {});
  let n = this.options;
  n.raw && n.windowBits > 0 ? n.windowBits = -n.windowBits : n.gzip && n.windowBits > 0 && n.windowBits < 16 && (n.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Ao(), this.strm.avail_out = 0;
  let t = wn.deflateInit2(
    this.strm,
    n.level,
    n.method,
    n.windowBits,
    n.memLevel,
    n.strategy,
    n.legacyHash
  );
  if (t !== ar)
    throw new Error(Lt[t]);
  if (n.header && wn.deflateSetHeader(this.strm, n.header), n.dictionary) {
    let r;
    if (typeof n.dictionary == "string" ? r = Cn.string2buf(n.dictionary) : To.call(n.dictionary) === "[object ArrayBuffer]" ? r = new Uint8Array(n.dictionary) : r = n.dictionary, t = wn.deflateSetDictionary(this.strm, r), t !== ar)
      throw new Error(Lt[t]);
    this._dict_set = !0;
  }
}
In.prototype.push = function(e, n) {
  const t = this.strm, r = this.options.chunkSize;
  let a, i;
  if (this.ended)
    return !1;
  for (n === ~~n ? i = n : i = n === !0 ? xc : bc, typeof e == "string" ? t.input = Cn.string2buf(e) : To.call(e) === "[object ArrayBuffer]" ? t.input = new Uint8Array(e) : t.input = e, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    if (t.avail_out === 0 && (t.output = new Uint8Array(r), t.next_out = 0, t.avail_out = r), (i === vc || i === wc) && t.avail_out <= 6) {
      this.onData(t.output.subarray(0, t.next_out)), t.avail_out = 0;
      continue;
    }
    if (a = wn.deflate(t, i), a === yc)
      return t.next_out > 0 && this.onData(t.output.subarray(0, t.next_out)), a = wn.deflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === ar;
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
In.prototype.onData = function(e) {
  this.chunks.push(e);
};
In.prototype.onEnd = function(e) {
  e === ar && (this.result = cr.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function ui(e, n) {
  const t = new In(n);
  if (t.push(e, !0), t.err)
    throw t.msg || Lt[t.err];
  return t.result;
}
function Tc(e, n) {
  return n = n || {}, n.raw = !0, ui(e, n);
}
function Cc(e, n) {
  return n = n || {}, n.gzip = !0, ui(e, n);
}
var zc = In, Rc = ui, Oc = Tc, Lc = Cc, Nc = {
  Deflate: zc,
  deflate: Rc,
  deflateRaw: Oc,
  gzip: Lc
};
const Kn = 16209, Ic = 16191;
var Dc = function(n, t) {
  let r, a, i, o, s, d, c, h, v, _, f, g, m, b, p, x, k, S, C, B, R, P, O, z;
  const N = n.state;
  r = n.next_in, O = n.input, a = r + (n.avail_in - 5), i = n.next_out, z = n.output, o = i - (t - n.avail_out), s = i + (n.avail_out - 257), d = N.dmax, c = N.wsize, h = N.whave, v = N.wnext, _ = N.window, f = N.hold, g = N.bits, m = N.lencode, b = N.distcode, p = (1 << N.lenbits) - 1, x = (1 << N.distbits) - 1;
  e:
    do {
      g < 15 && (f += O[r++] << g, g += 8, f += O[r++] << g, g += 8), k = m[f & p];
      t:
        for (; ; ) {
          if (S = k >>> 24, f >>>= S, g -= S, S = k >>> 16 & 255, S === 0)
            z[i++] = k & 65535;
          else if (S & 16) {
            C = k & 65535, S &= 15, S && (g < S && (f += O[r++] << g, g += 8), C += f & (1 << S) - 1, f >>>= S, g -= S), g < 15 && (f += O[r++] << g, g += 8, f += O[r++] << g, g += 8), k = b[f & x];
            n:
              for (; ; ) {
                if (S = k >>> 24, f >>>= S, g -= S, S = k >>> 16 & 255, S & 16) {
                  if (B = k & 65535, S &= 15, g < S && (f += O[r++] << g, g += 8, g < S && (f += O[r++] << g, g += 8)), B += f & (1 << S) - 1, B > d) {
                    n.msg = "invalid distance too far back", N.mode = Kn;
                    break e;
                  }
                  if (f >>>= S, g -= S, S = i - o, B > S) {
                    if (S = B - S, S > h && N.sane) {
                      n.msg = "invalid distance too far back", N.mode = Kn;
                      break e;
                    }
                    if (R = 0, P = _, v === 0) {
                      if (R += c - S, S < C) {
                        C -= S;
                        do
                          z[i++] = _[R++];
                        while (--S);
                        R = i - B, P = z;
                      }
                    } else if (v < S) {
                      if (R += c + v - S, S -= v, S < C) {
                        C -= S;
                        do
                          z[i++] = _[R++];
                        while (--S);
                        if (R = 0, v < C) {
                          S = v, C -= S;
                          do
                            z[i++] = _[R++];
                          while (--S);
                          R = i - B, P = z;
                        }
                      }
                    } else if (R += v - S, S < C) {
                      C -= S;
                      do
                        z[i++] = _[R++];
                      while (--S);
                      R = i - B, P = z;
                    }
                    for (; C > 2; )
                      z[i++] = P[R++], z[i++] = P[R++], z[i++] = P[R++], C -= 3;
                    C && (z[i++] = P[R++], C > 1 && (z[i++] = P[R++]));
                  } else {
                    R = i - B;
                    do
                      z[i++] = z[R++], z[i++] = z[R++], z[i++] = z[R++], C -= 3;
                    while (C > 2);
                    C && (z[i++] = z[R++], C > 1 && (z[i++] = z[R++]));
                  }
                } else if (S & 64) {
                  n.msg = "invalid distance code", N.mode = Kn;
                  break e;
                } else {
                  k = b[(k & 65535) + (f & (1 << S) - 1)];
                  continue n;
                }
                break;
              }
          } else if (S & 64)
            if (S & 32) {
              N.mode = Ic;
              break e;
            } else {
              n.msg = "invalid literal/length code", N.mode = Kn;
              break e;
            }
          else {
            k = m[(k & 65535) + (f & (1 << S) - 1)];
            continue t;
          }
          break;
        }
    } while (r < a && i < s);
  C = g >> 3, r -= C, g -= C << 3, f &= (1 << g) - 1, n.next_in = r, n.next_out = i, n.avail_in = r < a ? 5 + (a - r) : 5 - (r - a), n.avail_out = i < s ? 257 + (s - i) : 257 - (i - s), N.hold = f, N.bits = g;
};
const Wt = 15, la = 852, ca = 592, fa = 0, Nr = 1, da = 2, Mc = new Uint16Array([
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
]), Pc = new Uint8Array([
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
]), Fc = new Uint16Array([
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
]), Bc = new Uint8Array([
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
]), Uc = (e, n, t, r, a, i, o, s) => {
  const d = s.bits;
  let c = 0, h = 0, v = 0, _ = 0, f = 0, g = 0, m = 0, b = 0, p = 0, x = 0, k, S, C, B, R, P = null, O;
  const z = new Uint16Array(Wt + 1), N = new Uint16Array(Wt + 1);
  let y = null, D, u, Z;
  for (c = 0; c <= Wt; c++)
    z[c] = 0;
  for (h = 0; h < r; h++)
    z[n[t + h]]++;
  for (f = d, _ = Wt; _ >= 1 && z[_] === 0; _--)
    ;
  if (f > _ && (f = _), _ === 0)
    return a[i++] = 1 << 24 | 64 << 16 | 0, a[i++] = 1 << 24 | 64 << 16 | 0, s.bits = 1, 0;
  for (v = 1; v < _ && z[v] === 0; v++)
    ;
  for (f < v && (f = v), b = 1, c = 1; c <= Wt; c++)
    if (b <<= 1, b -= z[c], b < 0)
      return -1;
  if (b > 0 && (e === fa || _ !== 1))
    return -1;
  for (N[1] = 0, c = 1; c < Wt; c++)
    N[c + 1] = N[c] + z[c];
  for (h = 0; h < r; h++)
    n[t + h] !== 0 && (o[N[n[t + h]]++] = h);
  if (e === fa ? (P = y = o, O = 20) : e === Nr ? (P = Mc, y = Pc, O = 257) : (P = Fc, y = Bc, O = 0), x = 0, h = 0, c = v, R = i, g = f, m = 0, C = -1, p = 1 << f, B = p - 1, e === Nr && p > la || e === da && p > ca)
    return 1;
  for (; ; ) {
    D = c - m, o[h] + 1 < O ? (u = 0, Z = o[h]) : o[h] >= O ? (u = y[o[h] - O], Z = P[o[h] - O]) : (u = 96, Z = 0), k = 1 << c - m, S = 1 << g, v = S;
    do
      S -= k, a[R + (x >> m) + S] = D << 24 | u << 16 | Z | 0;
    while (S !== 0);
    for (k = 1 << c - 1; x & k; )
      k >>= 1;
    if (k !== 0 ? (x &= k - 1, x += k) : x = 0, h++, --z[c] === 0) {
      if (c === _)
        break;
      c = n[t + o[h]];
    }
    if (c > f && (x & B) !== C) {
      for (m === 0 && (m = f), R += v, g = c - m, b = 1 << g; g + m < _ && (b -= z[g + m], !(b <= 0)); )
        g++, b <<= 1;
      if (p += 1 << g, e === Nr && p > la || e === da && p > ca)
        return 1;
      C = x & B, a[C] = f << 24 | g << 16 | R - i | 0;
    }
  }
  return x !== 0 && (a[R + x] = c - m << 24 | 64 << 16 | 0), s.bits = f, 0;
};
var xn = Uc;
const Zc = 0, Co = 1, zo = 2, {
  Z_FINISH: ua,
  Z_BLOCK: jc,
  Z_TREES: Vn,
  Z_OK: Dt,
  Z_STREAM_END: Hc,
  Z_NEED_DICT: Wc,
  Z_STREAM_ERROR: et,
  Z_DATA_ERROR: Ro,
  Z_MEM_ERROR: Oo,
  Z_BUF_ERROR: $c,
  Z_DEFLATED: ha
} = Ln, fr = 16180, pa = 16181, ma = 16182, _a = 16183, ga = 16184, ba = 16185, va = 16186, wa = 16187, xa = 16188, ya = 16189, or = 16190, ht = 16191, Ir = 16192, Ea = 16193, Dr = 16194, ka = 16195, Sa = 16196, Aa = 16197, Ta = 16198, qn = 16199, Jn = 16200, Ca = 16201, za = 16202, Ra = 16203, Oa = 16204, La = 16205, Mr = 16206, Na = 16207, Ia = 16208, Ee = 16209, Lo = 16210, No = 16211, Gc = 852, Yc = 592, Xc = 15, Kc = Xc, Da = (e) => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
function Vc() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const Mt = (e) => {
  if (!e)
    return 1;
  const n = e.state;
  return !n || n.strm !== e || n.mode < fr || n.mode > No ? 1 : 0;
}, Io = (e) => {
  if (Mt(e))
    return et;
  const n = e.state;
  return e.total_in = e.total_out = n.total = 0, e.msg = "", n.wrap && (e.adler = n.wrap & 1), n.mode = fr, n.last = 0, n.havedict = 0, n.flags = -1, n.dmax = 32768, n.head = null, n.hold = 0, n.bits = 0, n.lencode = n.lendyn = new Int32Array(Gc), n.distcode = n.distdyn = new Int32Array(Yc), n.sane = 1, n.back = -1, Dt;
}, Do = (e) => {
  if (Mt(e))
    return et;
  const n = e.state;
  return n.wsize = 0, n.whave = 0, n.wnext = 0, Io(e);
}, Mo = (e, n) => {
  let t;
  if (Mt(e))
    return et;
  const r = e.state;
  return n < 0 ? (t = 0, n = -n) : (t = (n >> 4) + 5, n < 48 && (n &= 15)), n && (n < 8 || n > 15) ? et : (r.window !== null && r.wbits !== n && (r.window = null), r.wrap = t, r.wbits = n, Do(e));
}, Po = (e, n) => {
  if (!e)
    return et;
  const t = new Vc();
  e.state = t, t.strm = e, t.window = null, t.mode = fr;
  const r = Mo(e, n);
  return r !== Dt && (e.state = null), r;
}, qc = (e) => Po(e, Kc);
let Ma = !0, Pr, Fr;
const Jc = (e) => {
  if (Ma) {
    Pr = new Int32Array(512), Fr = new Int32Array(32);
    let n = 0;
    for (; n < 144; )
      e.lens[n++] = 8;
    for (; n < 256; )
      e.lens[n++] = 9;
    for (; n < 280; )
      e.lens[n++] = 7;
    for (; n < 288; )
      e.lens[n++] = 8;
    for (xn(Co, e.lens, 0, 288, Pr, 0, e.work, { bits: 9 }), n = 0; n < 32; )
      e.lens[n++] = 5;
    xn(zo, e.lens, 0, 32, Fr, 0, e.work, { bits: 5 }), Ma = !1;
  }
  e.lencode = Pr, e.lenbits = 9, e.distcode = Fr, e.distbits = 5;
}, Fo = (e, n, t, r) => {
  let a;
  const i = e.state;
  return i.window === null && (i.window = new Uint8Array(1 << i.wbits)), i.wsize === 0 && (i.wsize = 1 << i.wbits, i.wnext = 0, i.whave = 0), r >= i.wsize ? (i.window.set(n.subarray(t - i.wsize, t), 0), i.wnext = 0, i.whave = i.wsize) : (a = i.wsize - i.wnext, a > r && (a = r), i.window.set(n.subarray(t - r, t - r + a), i.wnext), r -= a, r ? (i.window.set(n.subarray(t - r, t), 0), i.wnext = r, i.whave = i.wsize) : (i.wnext += a, i.wnext === i.wsize && (i.wnext = 0), i.whave < i.wsize && (i.whave += a))), 0;
}, Qc = (e, n) => {
  let t, r, a, i, o, s, d, c, h, v, _, f, g, m, b = 0, p, x, k, S, C, B, R, P;
  const O = new Uint8Array(4);
  let z, N;
  const y = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (Mt(e) || !e.output || !e.input && e.avail_in !== 0)
    return et;
  t = e.state, t.mode === ht && (t.mode = Ir), o = e.next_out, a = e.output, d = e.avail_out, i = e.next_in, r = e.input, s = e.avail_in, c = t.hold, h = t.bits, v = s, _ = d, P = Dt;
  e:
    for (; ; )
      switch (t.mode) {
        case fr:
          if (t.wrap === 0) {
            t.mode = Ir;
            break;
          }
          for (; h < 16; ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << h, h += 8;
          }
          if (t.wrap & 2 && c === 35615) {
            t.wbits === 0 && (t.wbits = 15), t.check = 0, O[0] = c & 255, O[1] = c >>> 8 & 255, t.check = ze(t.check, O, 2, 0), c = 0, h = 0, t.mode = pa;
            break;
          }
          if (t.head && (t.head.done = !1), !(t.wrap & 1) || /* check if zlib header allowed */
          (((c & 255) << 8) + (c >> 8)) % 31) {
            e.msg = "incorrect header check", t.mode = Ee;
            break;
          }
          if ((c & 15) !== ha) {
            e.msg = "unknown compression method", t.mode = Ee;
            break;
          }
          if (c >>>= 4, h -= 4, R = (c & 15) + 8, t.wbits === 0 && (t.wbits = R), R > 15 || R > t.wbits) {
            e.msg = "invalid window size", t.mode = Ee;
            break;
          }
          t.dmax = 1 << t.wbits, t.flags = 0, e.adler = t.check = 1, t.mode = c & 512 ? ya : ht, c = 0, h = 0;
          break;
        case pa:
          for (; h < 16; ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << h, h += 8;
          }
          if (t.flags = c, (t.flags & 255) !== ha) {
            e.msg = "unknown compression method", t.mode = Ee;
            break;
          }
          if (t.flags & 57344) {
            e.msg = "unknown header flags set", t.mode = Ee;
            break;
          }
          t.head && (t.head.text = c >> 8 & 1), t.flags & 512 && t.wrap & 4 && (O[0] = c & 255, O[1] = c >>> 8 & 255, t.check = ze(t.check, O, 2, 0)), c = 0, h = 0, t.mode = ma;
        case ma:
          for (; h < 32; ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << h, h += 8;
          }
          t.head && (t.head.time = c), t.flags & 512 && t.wrap & 4 && (O[0] = c & 255, O[1] = c >>> 8 & 255, O[2] = c >>> 16 & 255, O[3] = c >>> 24 & 255, t.check = ze(t.check, O, 4, 0)), c = 0, h = 0, t.mode = _a;
        case _a:
          for (; h < 16; ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << h, h += 8;
          }
          t.head && (t.head.xflags = c & 255, t.head.os = c >> 8), t.flags & 512 && t.wrap & 4 && (O[0] = c & 255, O[1] = c >>> 8 & 255, t.check = ze(t.check, O, 2, 0)), c = 0, h = 0, t.mode = ga;
        case ga:
          if (t.flags & 1024) {
            for (; h < 16; ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << h, h += 8;
            }
            t.length = c, t.head && (t.head.extra_len = c), t.flags & 512 && t.wrap & 4 && (O[0] = c & 255, O[1] = c >>> 8 & 255, t.check = ze(t.check, O, 2, 0)), c = 0, h = 0;
          } else t.head && (t.head.extra = null);
          t.mode = ba;
        case ba:
          if (t.flags & 1024 && (f = t.length, f > s && (f = s), f && (t.head && (R = t.head.extra_len - t.length, t.head.extra || (t.head.extra = new Uint8Array(t.head.extra_len)), t.head.extra.set(
            r.subarray(
              i,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              i + f
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            R
          )), t.flags & 512 && t.wrap & 4 && (t.check = ze(t.check, r, f, i)), s -= f, i += f, t.length -= f), t.length))
            break e;
          t.length = 0, t.mode = va;
        case va:
          if (t.flags & 2048) {
            if (s === 0)
              break e;
            f = 0;
            do
              R = r[i + f++], t.head && R && t.length < 65536 && (t.head.name += String.fromCharCode(R));
            while (R && f < s);
            if (t.flags & 512 && t.wrap & 4 && (t.check = ze(t.check, r, f, i)), s -= f, i += f, R)
              break e;
          } else t.head && (t.head.name = null);
          t.length = 0, t.mode = wa;
        case wa:
          if (t.flags & 4096) {
            if (s === 0)
              break e;
            f = 0;
            do
              R = r[i + f++], t.head && R && t.length < 65536 && (t.head.comment += String.fromCharCode(R));
            while (R && f < s);
            if (t.flags & 512 && t.wrap & 4 && (t.check = ze(t.check, r, f, i)), s -= f, i += f, R)
              break e;
          } else t.head && (t.head.comment = null);
          t.mode = xa;
        case xa:
          if (t.flags & 512) {
            for (; h < 16; ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << h, h += 8;
            }
            if (t.wrap & 4 && c !== (t.check & 65535)) {
              e.msg = "header crc mismatch", t.mode = Ee;
              break;
            }
            c = 0, h = 0;
          }
          t.head && (t.head.hcrc = t.flags >> 9 & 1, t.head.done = !0), e.adler = t.check = 0, t.mode = ht;
          break;
        case ya:
          for (; h < 32; ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << h, h += 8;
          }
          e.adler = t.check = Da(c), c = 0, h = 0, t.mode = or;
        case or:
          if (t.havedict === 0)
            return e.next_out = o, e.avail_out = d, e.next_in = i, e.avail_in = s, t.hold = c, t.bits = h, Wc;
          e.adler = t.check = 1, t.mode = ht;
        case ht:
          if (n === jc || n === Vn)
            break e;
        case Ir:
          if (t.last) {
            c >>>= h & 7, h -= h & 7, t.mode = Mr;
            break;
          }
          for (; h < 3; ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << h, h += 8;
          }
          switch (t.last = c & 1, c >>>= 1, h -= 1, c & 3) {
            case 0:
              t.mode = Ea;
              break;
            case 1:
              if (Jc(t), t.mode = qn, n === Vn) {
                c >>>= 2, h -= 2;
                break e;
              }
              break;
            case 2:
              t.mode = Sa;
              break;
            case 3:
              e.msg = "invalid block type", t.mode = Ee;
          }
          c >>>= 2, h -= 2;
          break;
        case Ea:
          for (c >>>= h & 7, h -= h & 7; h < 32; ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << h, h += 8;
          }
          if ((c & 65535) !== (c >>> 16 ^ 65535)) {
            e.msg = "invalid stored block lengths", t.mode = Ee;
            break;
          }
          if (t.length = c & 65535, c = 0, h = 0, t.mode = Dr, n === Vn)
            break e;
        case Dr:
          t.mode = ka;
        case ka:
          if (f = t.length, f) {
            if (f > s && (f = s), f > d && (f = d), f === 0)
              break e;
            a.set(r.subarray(i, i + f), o), s -= f, i += f, d -= f, o += f, t.length -= f;
            break;
          }
          t.mode = ht;
          break;
        case Sa:
          for (; h < 14; ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << h, h += 8;
          }
          if (t.nlen = (c & 31) + 257, c >>>= 5, h -= 5, t.ndist = (c & 31) + 1, c >>>= 5, h -= 5, t.ncode = (c & 15) + 4, c >>>= 4, h -= 4, t.nlen > 286 || t.ndist > 30) {
            e.msg = "too many length or distance symbols", t.mode = Ee;
            break;
          }
          t.have = 0, t.mode = Aa;
        case Aa:
          for (; t.have < t.ncode; ) {
            for (; h < 3; ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << h, h += 8;
            }
            t.lens[y[t.have++]] = c & 7, c >>>= 3, h -= 3;
          }
          for (; t.have < 19; )
            t.lens[y[t.have++]] = 0;
          if (t.lencode = t.lendyn, t.lenbits = 7, z = { bits: t.lenbits }, P = xn(Zc, t.lens, 0, 19, t.lencode, 0, t.work, z), t.lenbits = z.bits, P) {
            e.msg = "invalid code lengths set", t.mode = Ee;
            break;
          }
          t.have = 0, t.mode = Ta;
        case Ta:
          for (; t.have < t.nlen + t.ndist; ) {
            for (; b = t.lencode[c & (1 << t.lenbits) - 1], p = b >>> 24, x = b >>> 16 & 255, k = b & 65535, !(p <= h); ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << h, h += 8;
            }
            if (k < 16)
              c >>>= p, h -= p, t.lens[t.have++] = k;
            else {
              if (k === 16) {
                for (N = p + 2; h < N; ) {
                  if (s === 0)
                    break e;
                  s--, c += r[i++] << h, h += 8;
                }
                if (c >>>= p, h -= p, t.have === 0) {
                  e.msg = "invalid bit length repeat", t.mode = Ee;
                  break;
                }
                R = t.lens[t.have - 1], f = 3 + (c & 3), c >>>= 2, h -= 2;
              } else if (k === 17) {
                for (N = p + 3; h < N; ) {
                  if (s === 0)
                    break e;
                  s--, c += r[i++] << h, h += 8;
                }
                c >>>= p, h -= p, R = 0, f = 3 + (c & 7), c >>>= 3, h -= 3;
              } else {
                for (N = p + 7; h < N; ) {
                  if (s === 0)
                    break e;
                  s--, c += r[i++] << h, h += 8;
                }
                c >>>= p, h -= p, R = 0, f = 11 + (c & 127), c >>>= 7, h -= 7;
              }
              if (t.have + f > t.nlen + t.ndist) {
                e.msg = "invalid bit length repeat", t.mode = Ee;
                break;
              }
              for (; f--; )
                t.lens[t.have++] = R;
            }
          }
          if (t.mode === Ee)
            break;
          if (t.lens[256] === 0) {
            e.msg = "invalid code -- missing end-of-block", t.mode = Ee;
            break;
          }
          if (t.lenbits = 9, z = { bits: t.lenbits }, P = xn(Co, t.lens, 0, t.nlen, t.lencode, 0, t.work, z), t.lenbits = z.bits, P) {
            e.msg = "invalid literal/lengths set", t.mode = Ee;
            break;
          }
          if (t.distbits = 6, t.distcode = t.distdyn, z = { bits: t.distbits }, P = xn(zo, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, z), t.distbits = z.bits, P) {
            e.msg = "invalid distances set", t.mode = Ee;
            break;
          }
          if (t.mode = qn, n === Vn)
            break e;
        case qn:
          t.mode = Jn;
        case Jn:
          if (s >= 6 && d >= 258) {
            e.next_out = o, e.avail_out = d, e.next_in = i, e.avail_in = s, t.hold = c, t.bits = h, Dc(e, _), o = e.next_out, a = e.output, d = e.avail_out, i = e.next_in, r = e.input, s = e.avail_in, c = t.hold, h = t.bits, t.mode === ht && (t.back = -1);
            break;
          }
          for (t.back = 0; b = t.lencode[c & (1 << t.lenbits) - 1], p = b >>> 24, x = b >>> 16 & 255, k = b & 65535, !(p <= h); ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << h, h += 8;
          }
          if (x && !(x & 240)) {
            for (S = p, C = x, B = k; b = t.lencode[B + ((c & (1 << S + C) - 1) >> S)], p = b >>> 24, x = b >>> 16 & 255, k = b & 65535, !(S + p <= h); ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << h, h += 8;
            }
            c >>>= S, h -= S, t.back += S;
          }
          if (c >>>= p, h -= p, t.back += p, t.length = k, x === 0) {
            t.mode = La;
            break;
          }
          if (x & 32) {
            t.back = -1, t.mode = ht;
            break;
          }
          if (x & 64) {
            e.msg = "invalid literal/length code", t.mode = Ee;
            break;
          }
          t.extra = x & 15, t.mode = Ca;
        case Ca:
          if (t.extra) {
            for (N = t.extra; h < N; ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << h, h += 8;
            }
            t.length += c & (1 << t.extra) - 1, c >>>= t.extra, h -= t.extra, t.back += t.extra;
          }
          t.was = t.length, t.mode = za;
        case za:
          for (; b = t.distcode[c & (1 << t.distbits) - 1], p = b >>> 24, x = b >>> 16 & 255, k = b & 65535, !(p <= h); ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << h, h += 8;
          }
          if (!(x & 240)) {
            for (S = p, C = x, B = k; b = t.distcode[B + ((c & (1 << S + C) - 1) >> S)], p = b >>> 24, x = b >>> 16 & 255, k = b & 65535, !(S + p <= h); ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << h, h += 8;
            }
            c >>>= S, h -= S, t.back += S;
          }
          if (c >>>= p, h -= p, t.back += p, x & 64) {
            e.msg = "invalid distance code", t.mode = Ee;
            break;
          }
          t.offset = k, t.extra = x & 15, t.mode = Ra;
        case Ra:
          if (t.extra) {
            for (N = t.extra; h < N; ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << h, h += 8;
            }
            t.offset += c & (1 << t.extra) - 1, c >>>= t.extra, h -= t.extra, t.back += t.extra;
          }
          if (t.offset > t.dmax) {
            e.msg = "invalid distance too far back", t.mode = Ee;
            break;
          }
          t.mode = Oa;
        case Oa:
          if (d === 0)
            break e;
          if (f = _ - d, t.offset > f) {
            if (f = t.offset - f, f > t.whave && t.sane) {
              e.msg = "invalid distance too far back", t.mode = Ee;
              break;
            }
            f > t.wnext ? (f -= t.wnext, g = t.wsize - f) : g = t.wnext - f, f > t.length && (f = t.length), m = t.window;
          } else
            m = a, g = o - t.offset, f = t.length;
          f > d && (f = d), d -= f, t.length -= f;
          do
            a[o++] = m[g++];
          while (--f);
          t.length === 0 && (t.mode = Jn);
          break;
        case La:
          if (d === 0)
            break e;
          a[o++] = t.length, d--, t.mode = Jn;
          break;
        case Mr:
          if (t.wrap) {
            for (; h < 32; ) {
              if (s === 0)
                break e;
              s--, c |= r[i++] << h, h += 8;
            }
            if (_ -= d, e.total_out += _, t.total += _, t.wrap & 4 && _ && (e.adler = t.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            t.flags ? ze(t.check, a, _, o - _) : An(t.check, a, _, o - _)), _ = d, t.wrap & 4 && (t.flags ? c : Da(c)) !== t.check) {
              e.msg = "incorrect data check", t.mode = Ee;
              break;
            }
            c = 0, h = 0;
          }
          t.mode = Na;
        case Na:
          if (t.wrap && t.flags) {
            for (; h < 32; ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << h, h += 8;
            }
            if (t.wrap & 4 && c !== (t.total & 4294967295)) {
              e.msg = "incorrect length check", t.mode = Ee;
              break;
            }
            c = 0, h = 0;
          }
          t.mode = Ia;
        case Ia:
          P = Hc;
          break e;
        case Ee:
          P = Ro;
          break e;
        case Lo:
          return Oo;
        case No:
        default:
          return et;
      }
  return e.next_out = o, e.avail_out = d, e.next_in = i, e.avail_in = s, t.hold = c, t.bits = h, (t.wsize || _ !== e.avail_out && t.mode < Ee && (t.mode < Mr || n !== ua)) && Fo(e, e.output, e.next_out, _ - e.avail_out), v -= e.avail_in, _ -= e.avail_out, e.total_in += v, e.total_out += _, t.total += _, t.wrap & 4 && _ && (e.adler = t.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  t.flags ? ze(t.check, a, _, e.next_out - _) : An(t.check, a, _, e.next_out - _)), e.data_type = t.bits + (t.last ? 64 : 0) + (t.mode === ht ? 128 : 0) + (t.mode === qn || t.mode === Dr ? 256 : 0), (v === 0 && _ === 0 || n === ua) && P === Dt && (P = $c), P;
}, ef = (e) => {
  if (Mt(e))
    return et;
  let n = e.state;
  return n.window && (n.window = null), e.state = null, Dt;
}, tf = (e, n) => {
  if (Mt(e))
    return et;
  const t = e.state;
  return t.wrap & 2 ? (t.head = n, n.done = !1, Dt) : et;
}, nf = (e, n) => {
  const t = n.length;
  let r, a, i;
  return Mt(e) || (r = e.state, r.wrap !== 0 && r.mode !== or) ? et : r.mode === or && (a = 1, a = An(a, n, t, 0), a !== r.check) ? Ro : (i = Fo(e, n, t, t), i ? (r.mode = Lo, Oo) : (r.havedict = 1, Dt));
};
var rf = Do, af = Mo, of = Io, sf = qc, lf = Po, cf = Qc, ff = ef, df = tf, uf = nf, hf = "pako inflate (from Nodeca project)", ot = {
  inflateReset: rf,
  inflateReset2: af,
  inflateResetKeep: of,
  inflateInit: sf,
  inflateInit2: lf,
  inflate: cf,
  inflateEnd: ff,
  inflateGetHeader: df,
  inflateSetDictionary: uf,
  inflateInfo: hf
};
function pf() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var mf = pf;
const Bo = Object.prototype.toString, {
  Z_NO_FLUSH: _f,
  Z_FINISH: Pa,
  Z_OK: qt,
  Z_STREAM_END: Br,
  Z_NEED_DICT: Ur,
  Z_STREAM_ERROR: gf,
  Z_DATA_ERROR: Fa,
  Z_MEM_ERROR: bf,
  Z_BUF_ERROR: Ba
} = Ln, vf = {
  chunkSize: 1024 * 64,
  windowBits: 15,
  to: ""
};
function Dn(e) {
  this.options = cr.assign({}, vf, e || {});
  const n = this.options;
  n.raw && n.windowBits >= 0 && n.windowBits < 16 && (n.windowBits = -n.windowBits, n.windowBits === 0 && (n.windowBits = -15)), n.windowBits >= 0 && n.windowBits < 16 && !(e && e.windowBits) && (n.windowBits += 32), n.windowBits > 15 && n.windowBits < 48 && (n.windowBits & 15 || (n.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Ao(), this.strm.avail_out = 0;
  let t = ot.inflateInit2(
    this.strm,
    n.windowBits
  );
  if (t !== qt)
    throw new Error(Lt[t]);
  if (this.header = new mf(), ot.inflateGetHeader(this.strm, this.header), n.dictionary && (typeof n.dictionary == "string" ? n.dictionary = Cn.string2buf(n.dictionary) : Bo.call(n.dictionary) === "[object ArrayBuffer]" && (n.dictionary = new Uint8Array(n.dictionary)), n.raw && (t = ot.inflateSetDictionary(this.strm, n.dictionary), t !== qt)))
    throw new Error(Lt[t]);
}
Dn.prototype.push = function(e, n) {
  const t = this.strm, r = this.options.chunkSize, a = this.options.dictionary;
  let i, o, s;
  if (this.ended) return !1;
  for (n === ~~n ? o = n : o = n === !0 ? Pa : _f, Bo.call(e) === "[object ArrayBuffer]" ? t.input = new Uint8Array(e) : t.input = e, t.next_in = 0, t.avail_in = t.input.length; ; ) {
    for (t.avail_out === 0 && (t.output = new Uint8Array(r), t.next_out = 0, t.avail_out = r), i = ot.inflate(t, o), i === Ur && a && (i = ot.inflateSetDictionary(t, a), i === qt ? i = ot.inflate(t, o) : i === Fa && (i = Ur)); t.avail_in > 0 && i === Br && t.state.wrap & 2 && t.state.flags !== 0 && t.input[t.next_in] !== 0; )
      ot.inflateReset(t), i = ot.inflate(t, o);
    switch (i) {
      case gf:
      case Fa:
      case Ur:
      case bf:
        return this.onEnd(i), this.ended = !0, !1;
    }
    if (s = t.avail_out, t.next_out && (t.avail_out === 0 || i === Br || o > 0))
      if (this.options.to === "string") {
        let d = Cn.utf8border(t.output, t.next_out), c = t.next_out - d, h = Cn.buf2string(t.output, d);
        t.next_out = c, t.avail_out = r - c, c && t.output.set(t.output.subarray(d, d + c), 0), this.onData(h);
      } else
        this.onData(t.output.length === t.next_out ? t.output : t.output.subarray(0, t.next_out)), t.avail_out = 0, t.next_out = 0;
    if (!((i === qt || i === Ba) && s === 0)) {
      if (i === Br)
        return i = ot.inflateEnd(this.strm), this.onEnd(i), this.ended = !0, !0;
      if (t.avail_in === 0) {
        if (o === Pa)
          return i = ot.inflateEnd(this.strm), this.onEnd(i === qt ? Ba : i), this.ended = !0, !1;
        break;
      }
    }
  }
  return !0;
};
Dn.prototype.onData = function(e) {
  this.chunks.push(e);
};
Dn.prototype.onEnd = function(e) {
  e === qt && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = cr.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function hi(e, n) {
  const t = new Dn(n);
  if (t.push(e, !0), t.err) throw t.msg || Lt[t.err];
  return t.result;
}
function wf(e, n) {
  return n = n || {}, n.raw = !0, hi(e, n);
}
var xf = Dn, yf = hi, Ef = wf, kf = hi, Sf = {
  Inflate: xf,
  inflate: yf,
  inflateRaw: Ef,
  ungzip: kf
};
const { Deflate: Af, deflate: Tf, deflateRaw: Cf, gzip: zf } = Nc, { Inflate: Rf, inflate: Of, inflateRaw: Lf, ungzip: Nf } = Sf;
var If = Af, Df = Tf, Mf = Cf, Pf = zf, Ff = Rf, Bf = Of, Uf = Lf, Zf = Nf, jf = Ln, Hf = {
  Deflate: If,
  deflate: Df,
  deflateRaw: Mf,
  gzip: Pf,
  Inflate: Ff,
  inflate: Bf,
  inflateRaw: Uf,
  ungzip: Zf,
  constants: jf
}, Qn = {
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
async function Uo(e, n, t) {
  if (typeof e == "string") {
    const o = n || $f(e) || "remote-file", s = tr(o);
    return er({
      source: e,
      name: o,
      extension: s,
      mimeType: t || Qn[s] || "",
      url: e
    }, t);
  }
  if (e instanceof File) {
    const o = tr(n || e.name);
    return er({
      source: e,
      name: n || e.name,
      extension: o,
      mimeType: t || e.type || Qn[o] || "",
      size: e.size,
      blob: e
    }, t);
  }
  if (e instanceof Blob) {
    const o = n || "blob", s = tr(o);
    return er({
      source: e,
      name: o,
      extension: s,
      mimeType: t || e.type || Qn[s] || "",
      size: e.size,
      blob: e
    }, t);
  }
  const r = n || "buffer", a = tr(r), i = new Blob([e], { type: t || Qn[a] || "" });
  return er({
    source: e,
    name: r,
    extension: a,
    mimeType: i.type,
    size: i.size,
    blob: i
  }, t);
}
var Wf = /* @__PURE__ */ new WeakSet();
function er(e, n) {
  return n && Wf.add(e), e;
}
function $f(e) {
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
function tr(e) {
  var r;
  const n = ((r = e.split("?")[0]) == null ? void 0 : r.split("#")[0]) || "", t = n.lastIndexOf(".");
  return t >= 0 ? n.slice(t + 1).split("!", 1)[0].toLowerCase() : "";
}
function Gf(e) {
  if (typeof e != "string")
    return e;
  const n = document.querySelector(e);
  if (!n)
    throw new Error(`File viewer container not found: ${e}`);
  return n;
}
function Yf(e, n, t) {
  n !== void 0 && (e.style.width = typeof n == "number" ? `${n}px` : n), t !== void 0 && (e.style.height = typeof t == "number" ? `${t}px` : t);
}
function Ua(e) {
  const n = e.getBoundingClientRect();
  return {
    width: Math.max(0, Math.round(n.width)),
    height: Math.max(0, Math.round(n.height))
  };
}
function pi(e) {
  if (e.url)
    return e.url;
  if (!e.blob)
    throw new Error("File source cannot be converted to an object URL.");
  return URL.createObjectURL(e.blob);
}
function Xt(e, n) {
  n || URL.revokeObjectURL(e);
}
var Xf = {
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
function Kf(e) {
  return {
    ...Xf[e.locale || "en-US"],
    ...e.messages
  };
}
var Za = "__ofvSafeSetImmediate__";
function Vf(e) {
  const n = e;
  return !!(n.__POWERED_BY_QIANKUN__ || n.__MICRO_APP_ENVIRONMENT__ || n.__POWERED_BY_WUJIE__ || n.__GARFISH__);
}
function qf(e) {
  let n = 1;
  const t = /* @__PURE__ */ new Map(), r = e.MessageChannel;
  if (typeof r == "function") {
    const i = new r();
    return i.port1.onmessage = (o) => {
      const s = t.get(o.data);
      s && (t.delete(o.data), s());
    }, {
      schedule(o, s) {
        const d = n++;
        return t.set(d, () => o(...s)), i.port2.postMessage(d), d;
      },
      cancel(o) {
        t.delete(o);
      }
    };
  }
  const a = /* @__PURE__ */ new Map();
  return {
    schedule(i, o) {
      const s = n++;
      return a.set(
        s,
        setTimeout(() => {
          a.delete(s), i(...o);
        }, 0)
      ), s;
    },
    cancel(i) {
      const o = a.get(i);
      o !== void 0 && (clearTimeout(o), a.delete(i));
    }
  };
}
function Jf(e = typeof window > "u" ? void 0 : window) {
  var a;
  if (!e || !Vf(e))
    return;
  const n = e;
  if ((a = n.setImmediate) != null && a[Za])
    return;
  const t = qf(e), r = (i, ...o) => t.schedule(i, o);
  r[Za] = !0, n.setImmediate = r, n.clearImmediate = (i) => t.cancel(i);
}
function zn() {
  return {
    name: "fallback",
    match() {
      return !0;
    },
    render(e) {
      var s, d;
      if ((d = (s = e.options).onUnsupported) == null || d.call(s, e.file), e.options.fallback === "custom" && e.options.renderFallback)
        return e.options.renderFallback(e);
      const n = pi(e.file), t = !!e.file.url, r = document.createElement("div");
      r.className = "ofv-fallback";
      const a = document.createElement("strong");
      a.textContent = e.options.fallback === "download" ? e.options.messages.downloadTitle : e.options.messages.unsupportedTitle;
      const i = Qf(e.file, e.options.messages), o = document.createElement("a");
      return o.href = n, o.download = e.file.name, o.textContent = e.options.messages.downloadFile, r.append(a, i, o), e.viewport.classList.add("ofv-center"), e.viewport.append(r), e.options.fallback === "download" && o.focus(), {
        destroy() {
          e.viewport.classList.remove("ofv-center"), Xt(n, t);
        }
      };
    }
  };
}
function Qf(e, n) {
  const t = document.createElement("dl");
  return t.className = "ofv-fallback-meta", hn(t, n.file, e.name || n.unnamedFile), hn(t, n.format, e.extension ? `.${e.extension}` : n.unknown), hn(t, n.mime, e.mimeType || n.undeclared), hn(t, n.size, e.size === void 0 ? n.unknown : ed(e.size)), hn(t, n.source, e.url ? n.remoteUrl : n.localFile), t;
}
function hn(e, n, t) {
  const r = document.createElement("dt");
  r.textContent = n;
  const a = document.createElement("dd");
  a.textContent = t, e.append(r, a);
}
function ed(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(2)} MB`;
}
function td(e) {
  Jf();
  const n = Gf(e.container);
  Yf(n, e.width, e.height);
  const t = rd(e.className);
  n.classList.add("ofv-root"), t.length > 0 && n.classList.add(...t);
  const r = ld(n, e.theme || "light"), a = document.createElement("div");
  a.className = "ofv-host";
  const i = document.createElement("div");
  i.className = "ofv-status", i.setAttribute("role", "status"), i.hidden = !0;
  const o = document.createElement("div");
  o.className = "ofv-status-chip";
  const s = document.createElement("span");
  s.className = "ofv-status-spinner", s.setAttribute("aria-hidden", "true");
  const d = document.createElement("span");
  d.className = "ofv-status-text", o.append(s, d), i.append(o);
  const c = document.createElement("div");
  c.className = "ofv-viewport";
  const h = id(e);
  let v = ja(e.initialIndex || 0, h.length), _, f = !1;
  const g = async (N) => {
    p || h.length === 0 || (v = ja(N, h.length), await z(v));
  }, m = ud(
    e.toolbar,
    c,
    {
      getLength: () => h.length,
      next: () => g(v + 1),
      previous: () => g(v - 1),
      goToPage: (N) => {
        var y;
        return ((y = _ == null ? void 0 : _.goToPage) == null ? void 0 : y.call(_, N)) ?? !1;
      },
      command: (N) => {
        var y;
        return (y = _ == null ? void 0 : _.command) == null ? void 0 : y.call(_, N);
      },
      print: async () => {
        var y;
        if (f)
          return;
        f = !0;
        const N = _;
        try {
          await ((y = N == null ? void 0 : N.preparePrint) == null ? void 0 : y.call(N));
        } catch (D) {
          console.error("Failed to prepare file preview for printing:", D), f = !1;
          return;
        }
        f = !1, !(p || N !== _) && Sd(c);
      }
    },
    e.locale || "en-US"
  );
  m && a.append(m.element), a.append(i, c), n.replaceChildren(a);
  const b = {
    ...e,
    fit: e.fit || "contain",
    fitWasProvided: e.fit !== void 0,
    fallback: e.fallback || "inline",
    zoom: sd(e.zoom),
    messages: Kf(e)
  };
  let p = !1, x = 0, k;
  const S = nd(
    c,
    (N) => !p && !!(_ != null && _.command) && (_ != null && _.canCommand ? _.canCommand(N) : !0),
    (N) => {
      var y;
      return (y = _ == null ? void 0 : _.command) == null ? void 0 : y.call(_, N);
    }
  ), C = (N) => {
    i.hidden = !N, i.classList.remove("ofv-status-error"), d.textContent = N ? b.messages.loading : "";
  }, B = (N) => {
    i.hidden = !1, i.classList.add("ofv-status-error"), d.textContent = typeof N == "string" ? N : N.message;
  }, R = () => {
    var y;
    if (p)
      return;
    const N = Ua(c);
    (y = _ == null ? void 0 : _.resize) == null || y.call(_, N);
  }, P = cd(n, R), O = async (N, y = ++x) => {
    var re, X, ie;
    if (p || y !== x)
      return;
    jr(_), _ = void 0, k == null || k.abort();
    const D = new AbortController();
    k = D, c.replaceChildren(), C(!0), m == null || m.update(N, v, h.length);
    const u = [...e.plugins || [], zn()], Z = await Ld(u, N);
    if (!(p || y !== x))
      try {
        const W = await Z.render({
          host: a,
          viewport: c,
          file: N,
          size: Ua(c),
          options: b,
          toolbar: m == null ? void 0 : m.getContext(),
          signal: D.signal,
          setLoading: C,
          setError: B
        });
        if (p || y !== x) {
          jr(W);
          return;
        }
        k === D && (k = void 0), _ = W, b.initialPage !== void 0 && ((re = W.goToPage) == null || re.call(W, b.initialPage)), C(!1), m == null || m.setCommandSupport(
          (ae) => !!W.command && (W.canCommand ? W.canCommand(ae) : !0)
        ), (X = e.onLoad) == null || X.call(e, N), R();
      } catch (W) {
        if (k === D && (k = void 0), p || y !== x)
          return;
        const ae = W instanceof Error ? W : new Error(String(W));
        c.replaceChildren(), C(!1), B(ae), (ie = e.onError) == null || ie.call(e, ae, N);
      }
  };
  async function z(N) {
    const y = ++x;
    k == null || k.abort(), k = void 0;
    const D = h[N], u = await Uo(D.file, D.fileName, D.mimeType);
    p || y !== x || await O(u, y);
  }
  return g(v), {
    async reload(N) {
      if (!p) {
        if (N !== void 0) {
          const y = h[v];
          h.splice(v, 1, od(N, y, e));
        }
        await z(v);
      }
    },
    async next() {
      await g(v + 1);
    },
    async previous() {
      await g(v - 1);
    },
    goTo: g,
    goToPage(N) {
      var y;
      return p ? !1 : ((y = _ == null ? void 0 : _.goToPage) == null ? void 0 : y.call(_, N)) ?? !1;
    },
    getCurrentIndex() {
      return v;
    },
    resize: R,
    destroy() {
      p = !0, x += 1, k == null || k.abort(), k = void 0, P.destroy(), S.destroy(), jr(_), m == null || m.destroy(), r.destroy(), n.replaceChildren(), n.classList.remove("ofv-root"), t.length > 0 && n.classList.remove(...t);
    }
  };
}
function nd(e, n, t) {
  let i = 0, o;
  const s = (v) => {
    if (v.defaultPrevented || !v.ctrlKey && !v.metaKey || v.deltaY === 0)
      return;
    const _ = v.deltaY < 0 ? "zoom-in" : "zoom-out";
    if (!n(_)) {
      i = 0;
      return;
    }
    v.cancelable && v.preventDefault();
    const f = v.deltaY * (v.deltaMode === 0 ? 1 : 40);
    i !== 0 && Math.sign(i) !== Math.sign(f) && (i = 0), i += f, !(Math.abs(i) < 40) && (t(_), i = 0);
  }, d = (v) => {
    o = v.touches.length === 2 ? Zr(v.touches) : void 0;
  }, c = (v) => {
    if (v.defaultPrevented || v.touches.length !== 2) {
      o = void 0;
      return;
    }
    const _ = Zr(v.touches);
    if (!(_ > 0))
      return;
    if (!(o && o > 0)) {
      o = _;
      return;
    }
    const f = _ > o ? "zoom-in" : "zoom-out";
    if (!n(f))
      return;
    v.cancelable && v.preventDefault();
    const g = _ / o;
    g < 1.08 && g > 1 / 1.08 || (t(f), o = _);
  }, h = (v) => {
    o = v.touches.length === 2 ? Zr(v.touches) : void 0;
  };
  return e.addEventListener("wheel", s, { passive: !1 }), e.addEventListener("touchstart", d, { passive: !0 }), e.addEventListener("touchmove", c, { passive: !1 }), e.addEventListener("touchend", h, { passive: !0 }), e.addEventListener("touchcancel", h, { passive: !0 }), {
    destroy() {
      e.removeEventListener("wheel", s), e.removeEventListener("touchstart", d), e.removeEventListener("touchmove", c), e.removeEventListener("touchend", h), e.removeEventListener("touchcancel", h);
    }
  };
}
function Zr(e) {
  const n = e.item(0), t = e.item(1);
  return n && t ? Math.hypot(t.clientX - n.clientX, t.clientY - n.clientY) : 0;
}
function rd(e) {
  return (e == null ? void 0 : e.trim().split(/\s+/).filter(Boolean)) ?? [];
}
function jr(e) {
  if (e)
    try {
      e.destroy();
    } catch (n) {
      console.error("Failed to destroy file preview instance:", n);
    }
}
function id(e) {
  if (e.files && e.files.length > 0)
    return e.files.map(
      (n) => ad(n) ? n : {
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
function ad(e) {
  return typeof e == "object" && e !== null && "file" in e;
}
function od(e, n, t) {
  return typeof File < "u" && e instanceof File ? { file: e } : {
    file: e,
    fileName: (n == null ? void 0 : n.fileName) || t.fileName,
    mimeType: (n == null ? void 0 : n.mimeType) || t.mimeType
  };
}
function ja(e, n) {
  return n <= 0 ? 0 : Math.min(Math.max(e, 0), n - 1);
}
function sd(e) {
  return typeof e == "number" && Number.isFinite(e) && e > 0 ? e : 1;
}
function ld(e, n) {
  var i;
  const t = (i = window.matchMedia) == null ? void 0 : i.call(window, "(prefers-color-scheme: dark)"), r = ["ofv-theme-light", "ofv-theme-dark"], a = () => {
    e.classList.remove(...r);
    const o = n === "auto" && (t != null && t.matches) ? "dark" : n === "auto" ? "light" : n;
    e.classList.add(`ofv-theme-${o}`);
  };
  return a(), n === "auto" && fd(t, a), {
    destroy() {
      n === "auto" && dd(t, a), e.classList.remove(...r);
    }
  };
}
function cd(e, n) {
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
function fd(e, n) {
  var t;
  if (e) {
    if (typeof e.addEventListener == "function") {
      e.addEventListener("change", n);
      return;
    }
    (t = e.addListener) == null || t.call(e, n);
  }
}
function dd(e, n) {
  var t;
  if (e) {
    if (typeof e.removeEventListener == "function") {
      e.removeEventListener("change", n);
      return;
    }
    (t = e.removeListener) == null || t.call(e, n);
  }
}
function ud(e, n, t, r) {
  if (!e)
    return;
  const a = typeof e == "boolean" ? { zoom: !0, rotate: !0, download: !0, fullscreen: !0, print: !0, search: !0 } : e, i = document.createElement("div");
  i.className = "ofv-toolbar", i.setAttribute("role", "toolbar"), i.setAttribute("aria-label", dr[r].ariaLabel);
  let o, s = 0, d = t.getLength(), c, h, v, _, f, g;
  const m = [], b = [], p = [], x = wd(n);
  let k, S, C = (T) => !1;
  const B = () => hd({
    file: o,
    index: s,
    length: d,
    viewport: n,
    queue: t,
    element: i,
    search: x,
    canCommand: C,
    refreshCommandSupport: X,
    zoom: g,
    setZoom: Z
  }), R = (T, q, j, Y, le, ce = !1) => {
    const oe = document.createElement("button");
    return oe.type = "button", Hr(oe, T, le, ce), oe.title = q, oe.setAttribute("aria-label", q), Y && (oe.className = Y), oe.addEventListener("click", j), i.append(oe), p.push(() => oe.removeEventListener("click", j)), oe;
  }, P = (T, q, j, Y) => {
    const le = R(q, j, () => {
      t.command(Y);
    }, void 0, At(a, T), T !== "zoom-reset");
    le.disabled = !0, m.push({ button: le, command: Y });
  }, O = (T) => {
    var q, j;
    if (!vd(T)) {
      const Y = (q = a.actions) == null ? void 0 : q.find((le) => le.id === T);
      Y && z(Y);
      return;
    }
    if (T === "previous" && t.getLength() > 1) {
      h = R(
        We(a, r, "previous"),
        $e(a, r, "previous"),
        () => void t.previous(),
        void 0,
        At(a, "previous"),
        !0
      );
      return;
    }
    if (T === "next" && t.getLength() > 1) {
      v = R(
        We(a, r, "next"),
        $e(a, r, "next"),
        () => void t.next(),
        void 0,
        At(a, "next"),
        !0
      );
      return;
    }
    if (T === "queue" && t.getLength() > 1) {
      c = document.createElement("span"), c.className = "ofv-toolbar-queue", i.append(c);
      return;
    }
    if (T === "zoom-out" && a.zoom) {
      P(T, We(a, r, T), $e(a, r, T), "zoom-out");
      return;
    }
    if (T === "zoom-in" && a.zoom) {
      P(T, We(a, r, T), $e(a, r, T), "zoom-in");
      return;
    }
    if (T === "zoom-reset" && a.zoom) {
      P(T, We(a, r, T), $e(a, r, T), "zoom-reset"), _ = (j = m[m.length - 1]) == null ? void 0 : j.button, re();
      return;
    }
    if (T === "rotate-left" && a.rotate) {
      P(T, We(a, r, T), $e(a, r, T), "rotate-left");
      return;
    }
    if (T === "rotate-right" && a.rotate) {
      P(T, We(a, r, T), $e(a, r, T), "rotate-right");
      return;
    }
    if (T === "download" && a.download !== !1) {
      R(
        We(a, r, T),
        $e(a, r, T),
        () => B().download(),
        void 0,
        At(a, "download"),
        !0
      );
      return;
    }
    if (T === "fullscreen" && a.fullscreen !== !1) {
      f = R(
        We(a, r, T),
        $e(a, r, T),
        () => B().fullscreen(),
        void 0,
        At(a, "fullscreen"),
        !0
      ), W();
      return;
    }
    if (T === "print" && a.print) {
      R(
        We(a, r, T),
        $e(a, r, T),
        () => B().print(),
        void 0,
        At(a, "print"),
        !0
      );
      return;
    }
    if (T === "search" && a.search !== !1) {
      N();
      return;
    }
  }, z = (T) => {
    const q = R(
      T.label,
      T.title || T.label,
      () => void T.onClick(B()),
      T.className,
      T.icon
    );
    q.dataset.ofvToolbarAction = T.id, b.push({ button: q, action: T });
  }, N = () => {
    const T = document.createElement("div");
    T.className = "ofv-toolbar-search", T.title = $e(a, r, "search");
    const q = document.createElement("span");
    q.className = "ofv-toolbar-search-icon", q.setAttribute("aria-hidden", "true"), q.append(jo(ai.search ?? "")), T.append(q);
    const j = document.createElement("input");
    j.type = "search", j.placeholder = We(a, r, "search"), j.setAttribute("aria-label", $e(a, r, "search"));
    const Y = document.createElement("span");
    Y.className = "ofv-toolbar-search-count", k = j, S = Y;
    const le = () => {
      const ce = x.search(j.value);
      Y.textContent = j.value ? String(ce) : "";
    };
    j.addEventListener("input", le), T.append(j, Y), i.append(T), p.push(() => j.removeEventListener("input", le));
  };
  (() => {
    if (a.render) {
      i.replaceChildren();
      const q = a.render(B());
      q && i.append(q);
      return;
    }
    const T = md(a, t.getLength());
    if (a.order)
      T.forEach(O);
    else {
      const q = /* @__PURE__ */ new Set();
      for (const j of pd) {
        const Y = j.filter((ce) => T.includes(ce));
        if (Y.length === 0)
          continue;
        const le = i.childElementCount;
        for (const ce of Y)
          q.add(ce), O(ce);
        if (le > 0 && i.childElementCount > le) {
          const ce = document.createElement("span");
          ce.className = "ofv-toolbar-sep", ce.setAttribute("aria-hidden", "true"), i.insertBefore(ce, i.children[le]);
        }
      }
      T.filter((j) => !q.has(j)).forEach(O);
    }
    _d(a).forEach(z);
  })();
  const D = () => {
    const T = B();
    for (const { button: q, action: j } of b)
      q.disabled = Ha(j.disabled, T), q.hidden = Ha(j.hidden, T);
  }, u = () => {
    x.clear(), k && (k.value = ""), S && (S.textContent = "");
  };
  function Z(T) {
    g = typeof T == "number" && Number.isFinite(T) && T > 0 ? T : void 0, re(), D(), U();
  }
  function re() {
    var T;
    _ && (Hr(
      _,
      g === void 0 ? We(a, r, "zoom-reset") : Zo(g),
      (T = a.icons) == null ? void 0 : T["zoom-reset"]
    ), _.classList.add("ofv-toolbar-zoom-reset"));
  }
  function X() {
    m.forEach(({ button: T, command: q }) => {
      T.disabled = !C(q);
    }), D(), U();
  }
  function ie() {
    return !!(typeof document < "u" && i.parentElement && document.fullscreenElement === i.parentElement);
  }
  function W() {
    var le, ce;
    if (!f)
      return;
    const T = ie(), q = T ? "exit-fullscreen" : "fullscreen", j = T ? ((le = a.icons) == null ? void 0 : le["exit-fullscreen"]) ?? ((ce = a.icons) == null ? void 0 : ce.fullscreen) ?? ai["exit-fullscreen"] : At(a, "fullscreen");
    Hr(f, We(a, r, q), j, !0);
    const Y = $e(a, r, q);
    f.title = Y, f.setAttribute("aria-label", Y), f.setAttribute("aria-pressed", String(T));
  }
  const ae = () => {
    W(), U();
  };
  typeof document < "u" && (document.addEventListener("fullscreenchange", ae), p.push(() => document.removeEventListener("fullscreenchange", ae)));
  const U = () => {
    if (!a.render)
      return;
    i.replaceChildren();
    const T = a.render(B());
    T && i.append(T);
  };
  return {
    element: i,
    update(T, q, j) {
      o = T, s = q, d = j, g = void 0, re(), u(), m.forEach(({ button: Y }) => {
        Y.disabled = !0;
      }), c && (c.textContent = `${q + 1} / ${j}`), h && (h.disabled = q <= 0), v && (v.disabled = q >= j - 1), D(), U();
    },
    setCommandSupport(T) {
      C = T, !C("zoom-in") && !C("zoom-out") && !C("zoom-reset") && (g = void 0, re()), X();
    },
    getContext: B,
    setZoom: Z,
    destroy() {
      x.clear();
      for (const T of p)
        T();
      i.replaceChildren();
    }
  };
}
function hd({
  file: e,
  index: n,
  length: t,
  viewport: r,
  queue: a,
  element: i,
  search: o,
  canCommand: s,
  refreshCommandSupport: d,
  zoom: c,
  setZoom: h
}) {
  return {
    file: e,
    index: n,
    length: t,
    viewport: r,
    canPrevious: n > 0,
    canNext: n < t - 1,
    isFullscreen: !!(typeof document < "u" && i.parentElement && document.fullscreenElement === i.parentElement),
    zoom: c,
    zoomLabel: c === void 0 ? void 0 : Zo(c),
    async previous() {
      await a.previous();
    },
    async next() {
      await a.next();
    },
    goToPage: a.goToPage,
    command: a.command,
    canCommand: s,
    refreshCommandSupport: d,
    setZoom: h,
    download() {
      e && Od(e);
    },
    fullscreen() {
      var _, f;
      const v = i.parentElement;
      v && (typeof document < "u" && document.fullscreenElement === v ? (_ = document.exitFullscreen) == null || _.call(document) : (f = v.requestFullscreen) == null || f.call(v));
    },
    print() {
      a.print();
    },
    search: o.search,
    clearSearch: o.clear
  };
}
var tt = (e) => `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${e}</svg>`, ai = {
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
function At(e, n) {
  var t;
  return ((t = e.icons) == null ? void 0 : t[n]) ?? ai[n];
}
var pd = [
  ["previous", "next", "queue"],
  ["zoom-out", "zoom-in", "zoom-reset", "rotate-left", "rotate-right"],
  ["download", "fullscreen", "print"]
], dr = {
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
function We(e, n, t) {
  var r;
  return ((r = e.labels) == null ? void 0 : r[t]) ?? dr[n].labels[t];
}
function $e(e, n, t) {
  var r, a;
  return ((r = e.titles) == null ? void 0 : r[t]) ?? ((a = e.labels) == null ? void 0 : a[t]) ?? dr[n].titles[t];
}
function Zo(e) {
  return `${Math.round(e * 100)}%`;
}
function md(e, n) {
  if (e.order)
    return e.order;
  const t = [];
  return n > 1 && t.push("previous", "next", "queue"), e.zoom && t.push("zoom-out", "zoom-in", "zoom-reset"), e.rotate && t.push("rotate-left", "rotate-right"), e.download !== !1 && t.push("download"), e.fullscreen !== !1 && t.push("fullscreen"), e.print && t.push("print"), e.search !== !1 && t.push("search"), t;
}
function _d(e) {
  return e.order || !e.actions ? [] : [...e.actions].sort((n, t) => (n.order ?? 0) - (t.order ?? 0));
}
function Ha(e, n) {
  return typeof e == "function" ? e(n) : !!e;
}
function Hr(e, n, t, r = !1) {
  if (e.replaceChildren(), e.classList.toggle("ofv-toolbar-icon-button", !!t && r), !t) {
    e.textContent = n;
    return;
  }
  const a = document.createElement("span");
  a.className = "ofv-toolbar-icon", a.setAttribute("aria-hidden", "true"), typeof t == "string" ? a.append(jo(t)) : a.append(t.cloneNode(!0));
  const i = document.createElement("span");
  i.className = "ofv-toolbar-label", i.textContent = n, e.append(a, i);
}
var gd = /* @__PURE__ */ new Set([
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
]), Wa = /* @__PURE__ */ new Set([
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
function jo(e) {
  const n = document.createElement("template");
  n.innerHTML = e.trim();
  const t = document.createDocumentFragment();
  for (const r of Array.from(n.content.childNodes)) {
    const a = Ho(r);
    a && t.append(a);
  }
  return t;
}
function Ho(e) {
  if (e.nodeType === Node.TEXT_NODE) {
    const r = e.textContent || "";
    return r.trim() ? document.createTextNode(r) : null;
  }
  if (!(e instanceof Element))
    return null;
  const n = e.tagName.toLowerCase();
  if (!gd.has(n))
    return null;
  const t = document.createElementNS("http://www.w3.org/2000/svg", n);
  for (const r of Array.from(e.attributes))
    bd(r.name, r.value) && t.setAttribute(r.name, r.value);
  for (const r of Array.from(e.childNodes)) {
    const a = Ho(r);
    a && t.append(a);
  }
  return t;
}
function bd(e, n) {
  const t = e.toLowerCase();
  return t.startsWith("on") || t.includes(":") || !Wa.has(e) && !Wa.has(t) && !t.startsWith("data-") ? !1 : !/^\s*(?:javascript|data:text\/html|vbscript):/i.test(n);
}
function vd(e) {
  return e in dr["en-US"].labels;
}
function wd(e) {
  const n = "ofv-search-match", t = () => {
    const a = Wr(e).flatMap((i) => [
      ...i.querySelectorAll(`mark.${n}`)
    ]);
    for (const i of a)
      i.replaceWith(document.createTextNode(i.textContent || ""));
    Wr(e).forEach((i) => i.normalize());
  };
  return { search: (a) => {
    var c;
    t();
    const i = a.trim();
    if (!i)
      return 0;
    const o = Wr(e).flatMap((h) => xd(h));
    let s = 0, d;
    for (const h of o) {
      const v = h.nodeValue || "", _ = v.toLowerCase(), f = i.toLowerCase();
      let g = 0, m = _.indexOf(f, g);
      if (m < 0)
        continue;
      const b = document.createDocumentFragment();
      for (; m >= 0; ) {
        m > g && b.append(document.createTextNode(v.slice(g, m)));
        const p = document.createElement("mark");
        p.className = n, p.textContent = v.slice(m, m + i.length), b.append(p), d || (d = p), s += 1, g = m + i.length, m = _.indexOf(f, g);
      }
      g < v.length && b.append(document.createTextNode(v.slice(g))), h.replaceWith(b);
    }
    return (c = d == null ? void 0 : d.scrollIntoView) == null || c.call(d, { block: "center", inline: "nearest" }), s;
  }, clear: t };
}
function Wr(e) {
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
function xd(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
    acceptNode(a) {
      var o;
      const i = a.parentElement;
      return !i || !((o = a.nodeValue) != null && o.trim()) || ["SCRIPT", "STYLE", "TEXTAREA", "INPUT", "BUTTON"].includes(i.tagName) || yd(i, e) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  let r = t.nextNode();
  for (; r; )
    n.push(r), r = t.nextNode();
  return n;
}
function yd(e, n) {
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
var Ed = 15e3, kd = 5 * 6e4;
function Sd(e) {
  var x;
  const n = document.createElement("iframe");
  n.className = "ofv-print-frame", n.setAttribute("aria-hidden", "true"), document.body.append(n);
  const t = e.cloneNode(!0);
  Rd(e, t), t.classList.add("ofv-print-root", "ofv-root");
  const r = e.querySelector(".ofv-docx-page-frame > section.ofv-docx"), a = r ? getComputedStyle(r) : void 0, i = Number.parseFloat((a == null ? void 0 : a.width) || ""), o = Number.parseFloat((a == null ? void 0 : a.height) || ""), s = Number.isFinite(i) && Number.isFinite(o) ? `size: ${i}px ${o}px;` : "", d = t.querySelector(".ofv-pptx-viewer") || (t.classList.contains("ofv-pptx-viewer") ? t : null);
  let c = 960, h = 540, v = !1;
  if (d) {
    const k = d.querySelectorAll("[data-slide-index]");
    if (k.length > 0) {
      v = !0;
      const S = k[0].firstElementChild, C = S == null ? void 0 : S.firstElementChild;
      C && (c = parseInt(C.style.width) || 960, h = parseInt(C.style.height) || 540), k.forEach((B) => {
        const R = B;
        R.style.width = "100%", R.style.margin = "0 0 20px 0";
        const P = R.firstElementChild;
        if (P) {
          P.style.width = `${c}px`, P.style.height = `${h}px`, P.style.boxShadow = "none", P.style.margin = "0 auto";
          const O = P.firstElementChild;
          O && (O.style.transform = "none", O.style.width = `${c}px`, O.style.height = `${h}px`);
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
    </html>`), _.close(), Array.from(document.querySelectorAll("style, link[rel='stylesheet']")).forEach((k) => {
    _.head.appendChild(k.cloneNode(!0));
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
    const k = _.createElement("style");
    k.textContent = `
      @media print {
        @page {
          ${s}
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
    `, _.head.appendChild(k);
  }
  if (v) {
    const k = _.createElement("style");
    k.textContent = `
      @media print {
        @page {
          size: ${c > h ? "landscape" : "portrait"};
          margin: 0;
        }
        html, body {
          background: #fff;
        }
        body {
          width: ${c}px !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .ofv-print-root {
          width: ${c}px !important;
          padding: 0 !important;
        }
        .ofv-pptx-viewer {
          width: ${c}px !important;
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
    `, _.head.appendChild(k);
  }
  _.body.append(t);
  const g = n.contentWindow;
  if (!g) {
    n.remove();
    return;
  }
  let m = !1, b;
  const p = () => {
    var k;
    m || (m = !0, window.clearTimeout(b), (k = g.removeEventListener) == null || k.call(g, "afterprint", p), n.remove());
  };
  (x = g.addEventListener) == null || x.call(g, "afterprint", p, { once: !0 }), Ad(_).then(() => {
    if (!(m || !n.isConnected)) {
      b = window.setTimeout(p, kd);
      try {
        g.focus(), g.print();
      } catch {
        p();
      }
    }
  });
}
async function Ad(e) {
  var t;
  const n = [];
  for (const r of Array.from(e.images))
    n.push(Td(r));
  for (const r of Array.from(e.querySelectorAll("link[rel='stylesheet']")))
    n.push(Cd(r));
  (t = e.fonts) != null && t.ready && n.push(Promise.resolve(e.fonts.ready).then(() => {
  }, () => {
  })), await zd(n), e.body.offsetHeight, await new Promise((r) => window.setTimeout(r, 0));
}
function Td(e) {
  return typeof e.decode == "function" ? e.decode().then(() => {
  }, () => {
  }) : e.complete ? Promise.resolve() : Wo(e);
}
function Cd(e) {
  try {
    if (e.sheet)
      return Promise.resolve();
  } catch {
  }
  return Wo(e);
}
function Wo(e) {
  return new Promise((n) => {
    const t = () => {
      e.removeEventListener("load", t), e.removeEventListener("error", t), n();
    };
    e.addEventListener("load", t, { once: !0 }), e.addEventListener("error", t, { once: !0 });
  });
}
function zd(e) {
  return e.length === 0 ? Promise.resolve() : new Promise((n) => {
    let t = !1;
    const r = () => {
      t || (t = !0, window.clearTimeout(a), n());
    }, a = window.setTimeout(r, Ed);
    Promise.all(e).then(r, r);
  });
}
function Rd(e, n) {
  const t = [...e.querySelectorAll("canvas")], r = [...n.querySelectorAll("canvas")];
  t.forEach((a, i) => {
    const o = r[i];
    if (!o)
      return;
    const s = document.createElement("img");
    s.className = o.className, s.alt = "Canvas preview page";
    try {
      s.src = a.toDataURL("image/png");
    } catch {
      return;
    }
    s.width = a.width, s.height = a.height, o.replaceWith(s);
  });
}
function Od(e) {
  const n = pi(e), t = !!e.url, r = document.createElement("a");
  r.href = n, r.download = e.name, r.rel = "noopener", r.hidden = !0, document.body.append(r), r.click(), window.setTimeout(() => {
    r.remove(), Xt(n, t);
  }, 0);
}
async function Ld(e, n) {
  for (const t of e)
    if (await t.match(n))
      return t;
  return zn();
}
async function $t(e) {
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
function Nd(e = "") {
  const n = document.createElement("div");
  return n.className = `ofv-panel ${e}`.trim(), n;
}
function Id(e) {
  const n = document.createElement("section");
  n.className = "ofv-section";
  const t = document.createElement("h3");
  return t.textContent = e, n.append(t), n;
}
function Dd(e, n) {
  return e.extension || n[e.mimeType] || "";
}
function Md(e, n, t = {}) {
  const r = document.createElement("div");
  r.className = "ofv-fallback ofv-encrypted";
  const a = document.createElement("strong");
  a.textContent = t.title || "文件已加密，无法在线预览";
  const i = document.createElement("span");
  i.textContent = t.message || "请下载后在本地输入密码打开，或上传解密后的文件。";
  const o = document.createElement("dl");
  o.className = "ofv-fallback-meta ofv-encrypted-meta", $a(o, "文件", e.name || "未命名文件"), $a(o, "格式", e.extension ? `.${e.extension}` : e.mimeType || "未知");
  const s = document.createElement("a");
  return s.href = n, s.download = e.name, s.textContent = t.action || "下载文件", r.append(a, i, o, s), r;
}
function Pd(e) {
  const n = e instanceof Error ? e.message : String(e || ""), t = typeof e == "object" && e !== null && "name" in e ? String(e.name) : "";
  return /\b(password|encrypted|encrypt|protected|decrypt|permission|加密|密码|受保护)\b/i.test(`${t} ${n}`);
}
function $a(e, n, t) {
  const r = document.createElement("dt");
  r.textContent = n;
  const a = document.createElement("dd");
  a.textContent = t, e.append(r, a);
}
Uint8Array.from([137, 80, 78, 71, 13, 10, 26, 10]);
Uint8Array.from([255, 216, 255]);
var Fd = /* @__PURE__ */ new Set(["zip", "rar", "7z", "tar", "gz", "tgz", "bz2", "xz"]), Bd = /* @__PURE__ */ new Set([
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
]), Ud = {
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
function Zd() {
  return {
    name: "archive",
    match(e) {
      return Fd.has(e.extension) || Bd.has(e.mimeType);
    },
    async render(e) {
      const n = pi(e.file), t = !!e.file.url, r = Nd("ofv-archive");
      e.viewport.append(r);
      const a = Dd(e.file, Ud).toLowerCase();
      let i = [], o = !1, s = null, d = null;
      try {
        if (a === "zip")
          try {
            const z = await Di.loadAsync(await $t(e.file), {
              decodeFileName: Xd
            });
            i = Object.values(z.files).map((N) => {
              var y;
              return {
                name: N.name,
                unsafeName: N.unsafeOriginalName,
                size: ((y = N._data) == null ? void 0 : y.uncompressedSize) || 0,
                dir: N.dir,
                read: () => N.async("arraybuffer")
              };
            });
          } catch (z) {
            if (Pd(z))
              o = !0;
            else
              throw z;
          }
        else if (a === "tar")
          i = Yr(await $t(e.file));
        else if (a === "gz" || a === "tgz" || a === "tar.gz") {
          const z = new Uint8Array(await $t(e.file)), N = Hf.ungzip(z), y = e.file.name.endsWith(".gz") ? e.file.name.slice(0, -3) : e.file.name.endsWith(".tgz") ? e.file.name.slice(0, -4) + ".tar" : e.file.name;
          a === "tgz" || a === "tar.gz" || y.endsWith(".tar") ? i = Yr(pn(N)) : i = [
            {
              name: y,
              size: N.byteLength,
              dir: !1,
              read: async () => pn(N)
            }
          ];
        } else if (a === "bz2") {
          const z = new Uint8Array(await $t(e.file)), N = await Hd(z);
          i = [
            {
              name: (e.file.name.toLowerCase().endsWith(".bz2") ? e.file.name.slice(0, -4) : e.file.name) || "decompressed",
              size: N.byteLength,
              dir: !1,
              read: async () => pn(N)
            }
          ];
        } else if (a === "xz") {
          const z = new Uint8Array(await $t(e.file)), N = await $d(z), y = Yd(e.file.name, ".xz", "decompressed");
          y.toLowerCase().endsWith(".tar") || e.file.name.toLowerCase().endsWith(".txz") ? i = Yr(pn(N)) : i = [
            {
              name: y,
              size: N.byteLength,
              dir: !1,
              read: async () => pn(N)
            }
          ];
        } else ["rar", "7z"].includes(a) ? d = tu(await $t(e.file), a) : s = `该格式 (.${a.toUpperCase()}) 目前暂不支持直接在浏览器端在线解压和目录预览。`;
      } catch (z) {
        s = `压缩包解析失败：${z.message || z}`;
      }
      if (o) {
        const z = Md(e.file, n, {
          title: "压缩包已加密，无法在线预览",
          message: "请下载后在本地输入密码解压，或上传解密后的压缩包。",
          action: "下载压缩包"
        });
        return r.append(z), e.viewport.classList.add("ofv-center"), {
          destroy() {
            e.viewport.classList.remove("ofv-center"), Xt(n, t), r.remove();
          }
        };
      }
      if (d)
        return eu(r, d, e.file.name, n), {
          destroy() {
            Xt(n, t), r.remove();
          }
        };
      if (s) {
        const z = document.createElement("div");
        z.className = "ofv-fallback";
        const N = document.createElement("strong");
        N.textContent = s;
        const y = document.createElement("span");
        y.textContent = "建议下载视频/文档等文件至本地查看，或使用原生解压工具提取内容。";
        const D = document.createElement("a");
        return D.href = n, D.download = e.file.name, D.textContent = "下载压缩包", z.append(N, y, D), r.append(z), e.viewport.classList.add("ofv-center"), {
          destroy() {
            e.viewport.classList.remove("ofv-center"), Xt(n, t), r.remove();
          }
        };
      }
      const c = document.createElement("div");
      c.className = "ofv-archive-layout";
      const h = document.createElement("div");
      h.className = "ofv-archive-sidebar";
      const v = document.createElement("div");
      v.className = "ofv-archive-sidebar-panel";
      const _ = document.createElement("div");
      _.className = "ofv-archive-header";
      const f = document.createElement("span");
      f.className = "ofv-archive-header-title", f.textContent = `文件列表 (${i.filter((z) => !z.dir).length})`;
      const g = document.createElement("button");
      g.className = "ofv-archive-sidebar-toggle", g.type = "button", g.setAttribute("aria-label", "展开文件列表"), g.setAttribute("aria-expanded", "false"), g.title = "展开文件列表", g.textContent = "‹", _.append(g, f), v.append(_);
      const m = document.createElement("div");
      m.className = "ofv-archive-tree", v.append(m), h.append(v);
      const b = document.createElement("div");
      b.className = "ofv-archive-main", c.append(h, b), r.append(c);
      let p = null;
      const x = () => e.viewport.clientWidth || e.size.width, k = () => x() <= 520, S = (z) => {
        c.classList.toggle("is-sidebar-collapsed", z), g.setAttribute("aria-expanded", String(!z));
        const N = z ? "展开文件列表" : "收起文件列表";
        g.setAttribute("aria-label", N), g.title = N, g.textContent = z ? "›" : "‹";
      };
      S(!1), g.addEventListener("click", () => {
        S(!c.classList.contains("is-sidebar-collapsed"));
      });
      const C = (z = !0) => {
        b.replaceChildren();
        const N = document.createElement("div");
        N.className = "ofv-archive-info", z && Kd(N);
        const y = document.createElement("h3");
        y.textContent = e.file.name;
        const D = document.createElement("div");
        D.className = "ofv-archive-info-meta";
        const u = i.filter((re) => !re.dir).length, Z = i.filter((re) => re.dir).length;
        Ot(D, "格式类型", `.${a.toUpperCase()} 压缩文件`), Ot(D, "包含文件数", `${u} 个`), Ot(D, "包含目录数", `${Z} 个`), Ot(
          D,
          "操作提示",
          u === 0 ? "压缩包内没有可预览的文件。" : "请点击左侧栏中的文件进行联动预览。"
        ), N.append(y, D, Vd(i)), b.append(N);
      }, B = i.filter((z) => !z.dir).slice(0, 500);
      C(B.length > 0);
      let R = !1, P = 0;
      const O = async (z, N) => {
        var D, u, Z, re, X;
        if (R)
          return;
        k() && S(!0);
        const y = ++P;
        h.querySelectorAll(".ofv-archive-item").forEach((ie) => {
          ie.classList.remove("is-active"), ie.removeAttribute("aria-current");
        }), N.classList.add("is-active"), N.setAttribute("aria-current", "true"), p && (p.destroy(), p = null, (D = e.toolbar) == null || D.refreshCommandSupport()), b.replaceChildren(Qd(z.name.split("/").pop() || z.name));
        try {
          let ie = await z.read();
          if (R || y !== P)
            return;
          const W = z.name.split("/").pop() || z.name;
          if ((((u = W.split(".").pop()) == null ? void 0 : u.toLowerCase()) || "") === "shp") {
            const oe = z.name.slice(0, -4), ue = i.find((_e) => _e.name.toLowerCase() === oe.toLowerCase() + ".dbf"), ye = i.find((_e) => _e.name.toLowerCase() === oe.toLowerCase() + ".shx");
            if (ue && ye) {
              const _e = i.find((Ne) => Ne.name.toLowerCase() === oe.toLowerCase() + ".prj"), Ce = new Di();
              if (Ce.file(W, ie), Ce.file(ue.name.split("/").pop(), await ue.read()), Ce.file(ye.name.split("/").pop(), await ye.read()), _e && Ce.file(_e.name.split("/").pop(), await _e.read()), ie = await Ce.generateAsync({ type: "arraybuffer" }), R || y !== P)
                return;
            }
          }
          const U = document.createElement("div");
          U.style.cssText = "width: 100%; height: 100%; position: relative; display: flex; flex-direction: column;", b.replaceChildren(U);
          const T = document.createElement("div");
          T.className = "ofv-viewport", T.style.cssText = "flex: 1; width: 100%; height: 100%; position: relative; overflow: auto;", U.append(T);
          const q = await Uo(ie, W), j = [...e.options.plugins || [], zn()];
          let Y = await jd(j, q);
          if (R || y !== P)
            return;
          Y.name === "archive" && (Y = zn());
          let le;
          const ce = await Promise.resolve().then(
            () => Y.render({
              host: e.host,
              viewport: T,
              file: q,
              size: { width: T.clientWidth || 600, height: T.clientHeight || 400 },
              options: e.options,
              toolbar: e.toolbar,
              setLoading: () => {
              },
              setError: (oe) => {
                le = oe instanceof Error ? oe : new Error(String(oe)), T.replaceChildren(Gr("文件预览失败", le.message));
              }
            })
          ).catch((oe) => {
            le = oe instanceof Error ? oe : new Error(String(oe)), T.replaceChildren(Gr("文件预览失败", le.message));
          });
          if (R || y !== P) {
            ce == null || ce.destroy();
            return;
          }
          ce && !le ? (p = ce, (Z = e.toolbar) == null || Z.refreshCommandSupport()) : ce && (ce.destroy(), (re = e.toolbar) == null || re.refreshCommandSupport());
        } catch (ie) {
          if (R || y !== P)
            return;
          p = null, (X = e.toolbar) == null || X.refreshCommandSupport(), b.replaceChildren(Gr("解压加载失败", String(ie.message || ie)));
        }
      };
      return B.forEach((z, N) => {
        const y = document.createElement("button");
        y.className = "ofv-archive-item", y.type = "button", y.title = z.name;
        const D = document.createElement("span");
        D.className = "ofv-archive-item-icon", D.textContent = su(z.name, z.dir);
        const u = document.createElement("span");
        u.className = "ofv-archive-item-name", u.textContent = z.name, u.title = z.name, y.append(D, u), m.append(y), y.addEventListener("click", async () => {
          await O(z, y);
        }), N === 0 && O(z, y);
      }), {
        canCommand(z) {
          var N;
          return ((N = p == null ? void 0 : p.canCommand) == null ? void 0 : N.call(p, z)) ?? !1;
        },
        command(z) {
          var N;
          return ((N = p == null ? void 0 : p.command) == null ? void 0 : N.call(p, z)) ?? !1;
        },
        preparePrint() {
          var z;
          return (z = p == null ? void 0 : p.preparePrint) == null ? void 0 : z.call(p);
        },
        resize(z) {
          var N;
          (N = p == null ? void 0 : p.resize) == null || N.call(p, z);
        },
        destroy() {
          R = !0, P += 1, p && p.destroy(), Xt(n, t), r.remove();
        }
      };
    }
  };
}
async function jd(e, n) {
  for (const t of e)
    if (await t.match(n))
      return t;
  return zn();
}
async function Hd(e) {
  const n = Wd();
  try {
    const t = await Promise.resolve().then(() => ku), a = (t.default || t).decode(e);
    return a instanceof Uint8Array ? a : a instanceof ArrayBuffer ? new Uint8Array(a) : Uint8Array.from(a);
  } finally {
    n();
  }
}
function Wd() {
  const e = globalThis;
  if (typeof e.Buffer == "function")
    return () => {
    };
  class n extends Uint8Array {
    copy(r, a = 0, i = 0, o = this.length) {
      const s = this.subarray(i, o);
      return r.set(s, a), s.length;
    }
    toString(r) {
      return r === "hex" ? Array.from(this).map((a) => a.toString(16).padStart(2, "0")).join("") : new TextDecoder().decode(this);
    }
  }
  return e.Buffer = n, () => {
    e.Buffer === n && Reflect.deleteProperty(e, "Buffer");
  };
}
async function $d(e) {
  var a;
  const n = await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/xz.js"), t = n.XzReadableStream || ((a = n.default) == null ? void 0 : a.XzReadableStream);
  if (typeof t != "function")
    throw new Error("XZ 解码器不可用。");
  const r = new Response(new t(Gd(e)));
  return new Uint8Array(await r.arrayBuffer());
}
function Gd(e) {
  const n = new Blob([e]);
  return typeof n.stream == "function" ? n.stream() : new ReadableStream({
    start(t) {
      t.enqueue(e), t.close();
    }
  });
}
function Yd(e, n, t) {
  return e.toLowerCase().endsWith(n) ? e.slice(0, -n.length) || t : e || t;
}
function pn(e) {
  const n = new Uint8Array(e.byteLength);
  return n.set(e), n.buffer;
}
function Xd(e) {
  const n = Array.isArray(e) ? Uint8Array.from(e.map((a) => a.charCodeAt(0) & 255)) : e instanceof Uint8Array ? e : Uint8Array.from(e), t = $r(n, "utf-8", !0);
  if (t && !Ga(t))
    return t;
  const r = $r(n, "gb18030", !1) || $r(n, "gbk", !1);
  return r && !Ga(r) ? r : t || new TextDecoder("latin1").decode(n);
}
function $r(e, n, t) {
  try {
    return new TextDecoder(n, { fatal: t }).decode(e);
  } catch {
    return;
  }
}
function Ga(e) {
  return /[\uFFFDÃÂÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞß]/.test(e);
}
function Gr(e, n) {
  const t = document.createElement("div");
  t.className = "ofv-fallback";
  const r = document.createElement("strong");
  r.textContent = e;
  const a = document.createElement("span");
  return a.textContent = n, t.append(r, a), t;
}
function Ot(e, n, t) {
  const r = document.createElement("div"), a = document.createElement("strong");
  a.textContent = `${n}：`, r.append(a, document.createTextNode(t)), e.append(r);
}
function Kd(e) {
  e.hidden = !0, e.setAttribute("aria-hidden", "true"), e.style.display = "none";
}
function Vd(e) {
  const n = e.filter((i) => !i.dir), t = document.createElement("dl");
  t.className = "ofv-archive-summary";
  const r = n.reduce((i, o) => i + o.size, 0), a = n.reduce((i, o) => !i || o.size > i.size ? o : i, void 0);
  return mn(t, "总解压大小", sr(r)), mn(t, "最大文件", a ? `${a.name} · ${sr(a.size)}` : "无"), mn(t, "类型分布", qd(n)), mn(t, "可预览条目", String(n.slice(0, 500).length)), mn(t, "风险路径", String(n.filter((i) => Jd(i.unsafeName || i.name)).length)), t;
}
function mn(e, n, t) {
  const r = document.createElement("dt");
  r.textContent = n;
  const a = document.createElement("dd");
  a.textContent = t, e.append(r, a);
}
function qd(e) {
  const n = /* @__PURE__ */ new Map();
  for (const t of e) {
    const r = t.name.split("/").pop() || t.name, a = r.lastIndexOf("."), i = a > 0 ? r.slice(a + 1).toLowerCase() : "(无扩展名)";
    n.set(i, (n.get(i) || 0) + 1);
  }
  return [...n.entries()].sort((t, r) => r[1] - t[1] || t[0].localeCompare(r[0])).slice(0, 6).map(([t, r]) => `${t} ${r}`).join(", ") || "无";
}
function Jd(e) {
  return e.startsWith("/") || /^[A-Za-z]:[\\/]/.test(e) || e.split(/[\\/]+/).includes("..");
}
function Qd(e) {
  const n = document.createElement("div");
  n.className = "ofv-archive-loading";
  const t = document.createElement("div");
  t.className = "ofv-archive-loading-spinner";
  const r = document.createElement("span");
  return r.textContent = `正在解压并加载 [${e}]...`, n.append(t, r), n;
}
function eu(e, n, t, r) {
  const a = Id(`${n.format} 结构预览`), i = document.createElement("p");
  i.textContent = n.note;
  const o = document.createElement("div");
  o.className = "ofv-archive-probe-meta", Ot(o, "文件", t), Ot(o, "格式", n.format);
  for (const d of n.meta)
    Ot(o, d.label, d.value);
  const s = document.createElement("a");
  if (s.className = "ofv-asset-download", s.href = r, s.download = t, s.textContent = "下载压缩包", a.append(i, o, s), !n.valid) {
    const d = document.createElement("p");
    d.className = "ofv-data-error", d.textContent = n.error || "压缩包头信息无法识别。", a.append(d);
  }
  if (n.entries.length > 0) {
    const d = document.createElement("div");
    d.className = "ofv-table-scroll ofv-archive-probe-table";
    const c = document.createElement("table"), h = document.createElement("thead"), v = document.createElement("tr");
    for (const f of ["文件", "原始大小", "压缩大小"]) {
      const g = document.createElement("th");
      g.textContent = f, v.append(g);
    }
    h.append(v);
    const _ = document.createElement("tbody");
    for (const f of n.entries.slice(0, 200)) {
      const g = document.createElement("tr");
      for (const m of [
        f.name,
        f.size === void 0 ? "未知" : sr(f.size),
        f.packedSize === void 0 ? "未知" : sr(f.packedSize)
      ]) {
        const b = document.createElement("td");
        b.textContent = m, g.append(b);
      }
      _.append(g);
    }
    c.append(h, _), d.append(c), a.append(d);
  }
  e.append(a);
}
function tu(e, n) {
  const t = new Uint8Array(e);
  return n === "rar" ? nu(t) : n === "7z" ? iu(t) : n === "bz2" ? au(t) : n === "xz" ? ou(t) : {
    format: n.toUpperCase(),
    valid: !1,
    error: "暂不支持该压缩格式的头信息解析。",
    meta: [],
    entries: [],
    note: "当前仅提供压缩包识别和下载入口。"
  };
}
function nu(e) {
  const n = e.length >= 7 && e[0] === 82 && e[1] === 97 && e[2] === 114 && e[3] === 33 && e[4] === 26 && e[5] === 7 && e[6] === 0, t = e.length >= 8 && e[0] === 82 && e[1] === 97 && e[2] === 114 && e[3] === 33 && e[4] === 26 && e[5] === 7 && e[6] === 1 && e[7] === 0, r = n ? ru(e) : [];
  return {
    format: "RAR",
    valid: n || t,
    error: n || t ? void 0 : "缺少 RAR signature。",
    meta: [
      { label: "版本", value: t ? "RAR5" : n ? "RAR4" : "未知" },
      { label: "签名", value: ur(e) },
      { label: "可见条目", value: String(r.length) }
    ],
    entries: r,
    note: n ? "当前轻量读取 RAR4 未加密文件头，用于目录确认；实际解压仍建议接入 unrar WASM 或本地工具。" : "当前识别 RAR 容器和版本；RAR5 目录解析需要专用解码器。"
  };
}
function ru(e) {
  const n = new DataView(e.buffer, e.byteOffset, e.byteLength), t = [];
  let r = 7;
  for (; r + 7 <= e.length && t.length < 200; ) {
    const a = e[r + 2], i = n.getUint16(r + 3, !0);
    let o = n.getUint16(r + 5, !0);
    if (o < 7 || r + o > e.length)
      break;
    if (i & 32768) {
      if (r + 11 > e.length)
        break;
      o += n.getUint32(r + 7, !0);
    }
    if (a === 116 && r + 32 <= e.length) {
      const s = n.getUint32(r + 7, !0), d = n.getUint32(r + 11, !0), c = n.getUint16(r + 26, !0), h = r + 32, v = Math.min(h + c, r + o, e.length), _ = e.slice(h, v), f = new TextDecoder("latin1").decode(_).replace(/\0.*$/, "");
      f && t.push({ name: f, size: d, packedSize: s });
    }
    r += o;
  }
  return t;
}
function iu(e) {
  const n = e.length >= 32 && e[0] === 55 && e[1] === 122 && e[2] === 188 && e[3] === 175 && e[4] === 39 && e[5] === 28, t = [{ label: "签名", value: ur(e) }];
  if (n) {
    const r = new DataView(e.buffer, e.byteOffset, e.byteLength);
    t.push({ label: "版本", value: `${e[6]}.${e[7]}` }), t.push({ label: "Next header offset", value: String(Ya(r, 12)) }), t.push({ label: "Next header size", value: String(Ya(r, 20)) }), t.push({ label: "Next header CRC", value: `0x${r.getUint32(28, !0).toString(16).toUpperCase()}` });
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
function au(e) {
  const n = e.length >= 4 && e[0] === 66 && e[1] === 90 && e[2] === 104 && e[3] >= 49 && e[3] <= 57;
  return {
    format: "BZIP2",
    valid: n,
    error: n ? void 0 : "缺少 BZh magic header。",
    meta: [
      { label: "签名", value: ur(e) },
      { label: "块大小", value: n ? `${String.fromCharCode(e[3])}00 KB` : "未知" }
    ],
    entries: [],
    note: "BZIP2 通常是单文件压缩流，本预览器当前展示容器头信息；解压可后续接入 bzip2 解码器。"
  };
}
function ou(e) {
  const n = e.length >= 6 && e[0] === 253 && e[1] === 55 && e[2] === 122 && e[3] === 88 && e[4] === 90 && e[5] === 0;
  return {
    format: "XZ",
    valid: n,
    error: n ? void 0 : "缺少 XZ magic header。",
    meta: [
      { label: "签名", value: ur(e) },
      { label: "Stream flags", value: e.length >= 8 ? `0x${e[6].toString(16).padStart(2, "0").toUpperCase()} 0x${e[7].toString(16).padStart(2, "0").toUpperCase()}` : "未知" }
    ],
    entries: [],
    note: "XZ 通常是单文件 LZMA2 压缩流，本预览器当前展示容器头信息；解压可后续接入 xz/lzma 解码器。"
  };
}
function Ya(e, n) {
  return BigInt(e.getUint32(n, !0)) | BigInt(e.getUint32(n + 4, !0)) << 32n;
}
function sr(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / 1024 / 1024).toFixed(2)} MB`;
}
function ur(e) {
  if (e.length === 0)
    return "空文件";
  const n = new TextDecoder("ascii").decode(e.slice(0, Math.min(e.length, 16))).replace(/[^\x20-\x7E]/g, "."), t = Array.from(e.slice(0, Math.min(e.length, 8))).map((r) => r.toString(16).padStart(2, "0").toUpperCase()).join(" ");
  return `${n} (${t})`;
}
function Yr(e) {
  const n = [], t = new Uint8Array(e);
  let r = 0;
  const a = (i, o) => {
    let s = i;
    for (; s < i + o && t[s] !== 0; )
      s++;
    return new TextDecoder().decode(t.subarray(i, s)).trim();
  };
  for (; r + 512 <= e.byteLength; ) {
    const i = a(r + 257, 6);
    if (i !== "ustar" && i !== "ustar\0") {
      let g = !0;
      for (let m = 0; m < 512; m++)
        if (t[r + m] !== 0) {
          g = !1;
          break;
        }
      if (g)
        break;
      break;
    }
    const o = a(r, 100), s = a(r + 345, 155), d = s ? `${s}/${o}` : o, c = a(r + 124, 12), h = parseInt(c, 8) || 0, _ = a(r + 156, 1) === "5" || d.endsWith("/"), f = r + 512;
    n.push({
      name: d,
      size: h,
      dir: _,
      read: async () => e.slice(f, f + h)
    }), r += 512 + Math.ceil(h / 512) * 512;
  }
  return n;
}
function su(e, n) {
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
var lu = {
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
new Set(Object.keys(lu));
const cu = { download: !0 };
function Su(e) {
  return td({ ...e, toolbar: cu, plugins: [Zd()] });
}
var Xa = [0, 1, 3, 7, 15, 31, 63, 127, 255], Mn = function(e) {
  this.stream = e, this.bitOffset = 0, this.curByte = 0, this.hasByte = !1;
};
Mn.prototype._ensureByte = function() {
  this.hasByte || (this.curByte = this.stream.readByte(), this.hasByte = !0);
};
Mn.prototype.read = function(e) {
  for (var n = 0; e > 0; ) {
    this._ensureByte();
    var t = 8 - this.bitOffset;
    if (e >= t)
      n <<= t, n |= Xa[t] & this.curByte, this.hasByte = !1, this.bitOffset = 0, e -= t;
    else {
      n <<= e;
      var r = t - e;
      n |= (this.curByte & Xa[e] << r) >> r, this.bitOffset += e, e = 0;
    }
  }
  return n;
};
Mn.prototype.seek = function(e) {
  var n = e % 8, t = (e - n) / 8;
  this.bitOffset = n, this.stream.seek(t), this.hasByte = !1;
};
Mn.prototype.pi = function() {
  var e = new Buffer(6), n;
  for (n = 0; n < e.length; n++)
    e[n] = this.read(8);
  return e.toString("hex");
};
var fu = Mn, Pt = function() {
};
Pt.prototype.readByte = function() {
  throw new Error("abstract method readByte() not implemented");
};
Pt.prototype.read = function(e, n, t) {
  for (var r = 0; r < t; ) {
    var a = this.readByte();
    if (a < 0)
      return r === 0 ? -1 : r;
    e[n++] = a, r++;
  }
  return r;
};
Pt.prototype.seek = function(e) {
  throw new Error("abstract method seek() not implemented");
};
Pt.prototype.writeByte = function(e) {
  throw new Error("abstract method readByte() not implemented");
};
Pt.prototype.write = function(e, n, t) {
  var r;
  for (r = 0; r < t; r++)
    this.writeByte(e[n++]);
  return t;
};
Pt.prototype.flush = function() {
};
var du = Pt, uu = function() {
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
const hu = "2.0.0", pu = "MIT", mu = {
  version: hu,
  license: pu
};
var _u = fu, Rn = du, $o = uu, Go = mu, nr = 20, Ka = 258, Va = 0, gu = 1, bu = 2, vu = 6, wu = 50, xu = "314159265359", yu = "177245385090", qa = function(e, n) {
  var t = e[n], r;
  for (r = n; r > 0; r--)
    e[r] = e[r - 1];
  return e[0] = t, t;
}, xe = {
  OK: 0,
  LAST_BLOCK: -1,
  NOT_BZIP_DATA: -2,
  UNEXPECTED_INPUT_EOF: -3,
  UNEXPECTED_OUTPUT_EOF: -4,
  DATA_ERROR: -5,
  OUT_OF_MEMORY: -6,
  OBSOLETE_INPUT: -7,
  END_OF_BLOCK: -8
}, Et = {};
Et[xe.LAST_BLOCK] = "Bad file checksum";
Et[xe.NOT_BZIP_DATA] = "Not bzip data";
Et[xe.UNEXPECTED_INPUT_EOF] = "Unexpected input EOF";
Et[xe.UNEXPECTED_OUTPUT_EOF] = "Unexpected output EOF";
Et[xe.DATA_ERROR] = "Data error";
Et[xe.OUT_OF_MEMORY] = "Out of memory";
Et[xe.OBSOLETE_INPUT] = "Obsolete (pre 0.9.5) bzip format not supported.";
var Oe = function(e, n) {
  var t = Et[e] || "unknown error";
  n && (t += ": " + n);
  var r = new TypeError(t);
  throw r.errorCode = e, r;
}, Be = function(e, n) {
  this.writePos = this.writeCurrent = this.writeCount = 0, this._start_bunzip(e, n);
};
Be.prototype._init_block = function() {
  var e = this._get_next_block();
  return e ? (this.blockCRC = new $o(), !0) : (this.writeCount = -1, !1);
};
Be.prototype._start_bunzip = function(e, n) {
  var t = new Buffer(4);
  (e.read(t, 0, 4) !== 4 || String.fromCharCode(t[0], t[1], t[2]) !== "BZh") && Oe(xe.NOT_BZIP_DATA, "bad magic");
  var r = t[3] - 48;
  (r < 1 || r > 9) && Oe(xe.NOT_BZIP_DATA, "level out of range"), this.reader = new _u(e), this.dbufSize = 1e5 * r, this.nextoutput = 0, this.outputStream = n, this.streamCRC = 0;
};
Be.prototype._get_next_block = function() {
  var e, n, t, r = this.reader, a = r.pi();
  if (a === yu)
    return !1;
  a !== xu && Oe(xe.NOT_BZIP_DATA), this.targetBlockCRC = r.read(32) >>> 0, this.streamCRC = (this.targetBlockCRC ^ (this.streamCRC << 1 | this.streamCRC >>> 31)) >>> 0, r.read(1) && Oe(xe.OBSOLETE_INPUT);
  var i = r.read(24);
  i > this.dbufSize && Oe(xe.DATA_ERROR, "initial position out of bounds");
  var o = r.read(16), s = new Buffer(256), d = 0;
  for (e = 0; e < 16; e++)
    if (o & 1 << 15 - e) {
      var c = e * 16;
      for (t = r.read(16), n = 0; n < 16; n++)
        t & 1 << 15 - n && (s[d++] = c + n);
    }
  var h = r.read(3);
  (h < bu || h > vu) && Oe(xe.DATA_ERROR);
  var v = r.read(15);
  v === 0 && Oe(xe.DATA_ERROR);
  var _ = new Buffer(256);
  for (e = 0; e < h; e++)
    _[e] = e;
  var f = new Buffer(v);
  for (e = 0; e < v; e++) {
    for (n = 0; r.read(1); n++)
      n >= h && Oe(xe.DATA_ERROR);
    f[e] = qa(_, n);
  }
  var g = d + 2, m = [], b;
  for (n = 0; n < h; n++) {
    var p = new Buffer(g), x = new Uint16Array(nr + 1);
    for (o = r.read(5), e = 0; e < g; e++) {
      for (; (o < 1 || o > nr) && Oe(xe.DATA_ERROR), !!r.read(1); )
        r.read(1) ? o-- : o++;
      p[e] = o;
    }
    var k, S;
    for (k = S = p[0], e = 1; e < g; e++)
      p[e] > S ? S = p[e] : p[e] < k && (k = p[e]);
    b = {}, m.push(b), b.permute = new Uint16Array(Ka), b.limit = new Uint32Array(nr + 2), b.base = new Uint32Array(nr + 1), b.minLen = k, b.maxLen = S;
    var C = 0;
    for (e = k; e <= S; e++)
      for (x[e] = b.limit[e] = 0, o = 0; o < g; o++)
        p[o] === e && (b.permute[C++] = o);
    for (e = 0; e < g; e++)
      x[p[e]]++;
    for (C = o = 0, e = k; e < S; e++)
      C += x[e], b.limit[e] = C - 1, C <<= 1, o += x[e], b.base[e + 1] = C - o;
    b.limit[S + 1] = Number.MAX_VALUE, b.limit[S] = C + x[S] - 1, b.base[k] = 0;
  }
  var B = new Uint32Array(256);
  for (e = 0; e < 256; e++)
    _[e] = e;
  var R = 0, P = 0, O = 0, z, N = this.dbuf = new Uint32Array(this.dbufSize);
  for (g = 0; ; ) {
    for (g-- || (g = wu - 1, O >= v && Oe(xe.DATA_ERROR), b = m[f[O++]]), e = b.minLen, n = r.read(e); e > b.maxLen && Oe(xe.DATA_ERROR), !(n <= b.limit[e]); e++)
      n = n << 1 | r.read(1);
    n -= b.base[e], (n < 0 || n >= Ka) && Oe(xe.DATA_ERROR);
    var y = b.permute[n];
    if (y === Va || y === gu) {
      R || (R = 1, o = 0), y === Va ? o += R : o += 2 * R, R <<= 1;
      continue;
    }
    if (R)
      for (R = 0, P + o > this.dbufSize && Oe(xe.DATA_ERROR), z = s[_[0]], B[z] += o; o--; )
        N[P++] = z;
    if (y > d)
      break;
    P >= this.dbufSize && Oe(xe.DATA_ERROR), e = y - 1, z = qa(_, e), z = s[z], B[z]++, N[P++] = z;
  }
  for ((i < 0 || i >= P) && Oe(xe.DATA_ERROR), n = 0, e = 0; e < 256; e++)
    t = n + B[e], B[e] = n, n = t;
  for (e = 0; e < P; e++)
    z = N[e] & 255, N[B[z]] |= e << 8, B[z]++;
  var D = 0, u = 0, Z = 0;
  return P && (D = N[i], u = D & 255, D >>= 8, Z = -1), this.writePos = D, this.writeCurrent = u, this.writeCount = P, this.writeRun = Z, !0;
};
Be.prototype._read_bunzip = function(e, n) {
  var t, r, a;
  if (this.writeCount < 0)
    return 0;
  var i = this.dbuf, o = this.writePos, s = this.writeCurrent, d = this.writeCount;
  this.outputsize;
  for (var c = this.writeRun; d; ) {
    for (d--, r = s, o = i[o], s = o & 255, o >>= 8, c++ === 3 ? (t = s, a = r, s = -1) : (t = 1, a = s), this.blockCRC.updateCRCRun(a, t); t--; )
      this.outputStream.writeByte(a), this.nextoutput++;
    s != r && (c = 0);
  }
  return this.writeCount = d, this.blockCRC.getCRC() !== this.targetBlockCRC && Oe(xe.DATA_ERROR, "Bad block CRC (got " + this.blockCRC.getCRC().toString(16) + " expected " + this.targetBlockCRC.toString(16) + ")"), this.nextoutput;
};
var mi = function(e) {
  if ("readByte" in e)
    return e;
  var n = new Rn();
  return n.pos = 0, n.readByte = function() {
    return e[this.pos++];
  }, n.seek = function(t) {
    this.pos = t;
  }, n.eof = function() {
    return this.pos >= e.length;
  }, n;
}, Yo = function(e) {
  var n = new Rn(), t = !0;
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
Be.Err = xe;
Be.decode = function(e, n, t) {
  for (var r = mi(e), a = Yo(n), i = new Be(r, a); !("eof" in r && r.eof()); )
    if (i._init_block())
      i._read_bunzip();
    else {
      var o = i.reader.read(32) >>> 0;
      if (o !== i.streamCRC && Oe(xe.DATA_ERROR, "Bad stream CRC (got " + i.streamCRC.toString(16) + " expected " + o.toString(16) + ")"), t && "eof" in r && !r.eof())
        i._start_bunzip(r, a);
      else break;
    }
  if ("getBuffer" in a)
    return a.getBuffer();
};
Be.decodeBlock = function(e, n, t) {
  var r = mi(e), a = Yo(t), i = new Be(r, a);
  i.reader.seek(n);
  var o = i._get_next_block();
  if (o && (i.blockCRC = new $o(), i.writeCopies = 0, i._read_bunzip()), "getBuffer" in a)
    return a.getBuffer();
};
Be.table = function(e, n, t) {
  var r = new Rn();
  r.delegate = mi(e), r.pos = 0, r.readByte = function() {
    return this.pos++, this.delegate.readByte();
  }, r.delegate.eof && (r.eof = r.delegate.eof.bind(r.delegate));
  var a = new Rn();
  a.pos = 0, a.writeByte = function() {
    this.pos++;
  };
  for (var i = new Be(r, a), o = i.dbufSize; !("eof" in r && r.eof()); ) {
    var s = r.pos * 8 + i.reader.bitOffset;
    if (i.reader.hasByte && (s -= 8), i._init_block()) {
      var d = a.pos;
      i._read_bunzip(), n(s, a.pos - d);
    } else if (i.reader.read(32), t && "eof" in r && !r.eof())
      i._start_bunzip(r, a), console.assert(
        i.dbufSize === o,
        "shouldn't change block size within multistream file"
      );
    else break;
  }
};
Be.Stream = Rn;
Be.version = Go.version;
Be.license = Go.license;
var Xo = Be;
const Eu = /* @__PURE__ */ Ja(Xo), ku = /* @__PURE__ */ ds({
  __proto__: null,
  default: Eu
}, [Xo]);
export {
  Su as renderViewer
};

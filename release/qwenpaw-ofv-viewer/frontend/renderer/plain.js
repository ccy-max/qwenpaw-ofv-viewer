import "/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js";
import "/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js";
import "/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js";
import "/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js";
import "/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js";
import "/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js";
import "/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js";
import "/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js";
import "/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js";
import "/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js";
import "/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js";
function ze(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Gr = { exports: {} };
/*!

JSZip v3.10.2 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(t, o) {
  (function(e) {
    t.exports = e();
  })(function() {
    return function e(u, r, i) {
      function a(_, x) {
        if (!r[_]) {
          if (!u[_]) {
            var v = typeof ze == "function" && ze;
            if (!x && v) return v(_, !0);
            if (s) return s(_, !0);
            var m = new Error("Cannot find module '" + _ + "'");
            throw m.code = "MODULE_NOT_FOUND", m;
          }
          var f = r[_] = { exports: {} };
          u[_][0].call(f.exports, function(h) {
            var c = u[_][1][h];
            return a(c || h);
          }, f, f.exports, e, u, r, i);
        }
        return r[_].exports;
      }
      for (var s = typeof ze == "function" && ze, d = 0; d < i.length; d++) a(i[d]);
      return a;
    }({ 1: [function(e, u, r) {
      var i = e("./utils"), a = e("./support"), s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      r.encode = function(d) {
        for (var _, x, v, m, f, h, c, g = [], p = 0, w = d.length, A = w, L = i.getTypeOf(d) !== "string"; p < d.length; ) A = w - p, v = L ? (_ = d[p++], x = p < w ? d[p++] : 0, p < w ? d[p++] : 0) : (_ = d.charCodeAt(p++), x = p < w ? d.charCodeAt(p++) : 0, p < w ? d.charCodeAt(p++) : 0), m = _ >> 2, f = (3 & _) << 4 | x >> 4, h = 1 < A ? (15 & x) << 2 | v >> 6 : 64, c = 2 < A ? 63 & v : 64, g.push(s.charAt(m) + s.charAt(f) + s.charAt(h) + s.charAt(c));
        return g.join("");
      }, r.decode = function(d) {
        var _, x, v, m, f, h, c = 0, g = 0, p = "data:";
        if (d.substr(0, p.length) === p) throw new Error("Invalid base64 input, it looks like a data url.");
        var w, A = 3 * (d = d.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (d.charAt(d.length - 1) === s.charAt(64) && A--, d.charAt(d.length - 2) === s.charAt(64) && A--, A % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
        for (w = a.uint8array ? new Uint8Array(0 | A) : new Array(0 | A); c < d.length; ) _ = s.indexOf(d.charAt(c++)) << 2 | (m = s.indexOf(d.charAt(c++))) >> 4, x = (15 & m) << 4 | (f = s.indexOf(d.charAt(c++))) >> 2, v = (3 & f) << 6 | (h = s.indexOf(d.charAt(c++))), w[g++] = _, f !== 64 && (w[g++] = x), h !== 64 && (w[g++] = v);
        return w;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(e, u, r) {
      var i = e("./external"), a = e("./stream/DataWorker"), s = e("./stream/Crc32Probe"), d = e("./stream/DataLengthProbe");
      function _(x, v, m, f, h) {
        this.compressedSize = x, this.uncompressedSize = v, this.crc32 = m, this.compression = f, this.compressedContent = h;
      }
      _.prototype = { getContentWorker: function() {
        var x = new a(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new d("data_length")), v = this;
        return x.on("end", function() {
          if (this.streamInfo.data_length !== v.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
        }), x;
      }, getCompressedWorker: function() {
        return new a(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, _.createWorkerFrom = function(x, v, m) {
        return x.pipe(new s()).pipe(new d("uncompressedSize")).pipe(v.compressWorker(m)).pipe(new d("compressedSize")).withStreamInfo("compression", v);
      }, u.exports = _;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, u, r) {
      var i = e("./stream/GenericWorker");
      r.STORE = { magic: "\0\0", compressWorker: function() {
        return new i("STORE compression");
      }, uncompressWorker: function() {
        return new i("STORE decompression");
      } }, r.DEFLATE = e("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, u, r) {
      var i = e("./utils"), a = function() {
        for (var s, d = [], _ = 0; _ < 256; _++) {
          s = _;
          for (var x = 0; x < 8; x++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
          d[_] = s;
        }
        return d;
      }();
      u.exports = function(s, d) {
        return s !== void 0 && s.length ? i.getTypeOf(s) !== "string" ? function(_, x, v, m) {
          var f = a, h = m + v;
          _ ^= -1;
          for (var c = m; c < h; c++) _ = _ >>> 8 ^ f[255 & (_ ^ x[c])];
          return -1 ^ _;
        }(0 | d, s, s.length, 0) : function(_, x, v, m) {
          var f = a, h = m + v;
          _ ^= -1;
          for (var c = m; c < h; c++) _ = _ >>> 8 ^ f[255 & (_ ^ x.charCodeAt(c))];
          return -1 ^ _;
        }(0 | d, s, s.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(e, u, r) {
      r.base64 = !1, r.binary = !1, r.dir = !1, r.createFolders = !0, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
    }, {}], 6: [function(e, u, r) {
      var i = null;
      i = typeof Promise < "u" ? Promise : e("lie"), u.exports = { Promise: i };
    }, { lie: 37 }], 7: [function(e, u, r) {
      var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", a = e("pako"), s = e("./utils"), d = e("./stream/GenericWorker"), _ = i ? "uint8array" : "array";
      function x(v, m) {
        d.call(this, "FlateWorker/" + v), this._pako = null, this._pakoAction = v, this._pakoOptions = m, this.meta = {};
      }
      r.magic = "\b\0", s.inherits(x, d), x.prototype.processChunk = function(v) {
        this.meta = v.meta, this._pako === null && this._createPako(), this._pako.push(s.transformTo(_, v.data), !1);
      }, x.prototype.flush = function() {
        d.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, x.prototype.cleanUp = function() {
        d.prototype.cleanUp.call(this), this._pako = null;
      }, x.prototype._createPako = function() {
        this._pako = new a[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var v = this;
        this._pako.onData = function(m) {
          v.push({ data: m, meta: v.meta });
        };
      }, r.compressWorker = function(v) {
        return new x("Deflate", v);
      }, r.uncompressWorker = function() {
        return new x("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, u, r) {
      function i(f, h) {
        var c, g = "";
        for (c = 0; c < h; c++) g += String.fromCharCode(255 & f), f >>>= 8;
        return g;
      }
      function a(f, h, c, g, p, w) {
        var A, L, T = f.file, F = f.compression, P = w !== _.utf8encode, W = s.transformTo("string", w(T.name)), N = s.transformTo("string", _.utf8encode(T.name)), q = T.comment, Y = s.transformTo("string", w(q)), E = s.transformTo("string", _.utf8encode(q)), I = N.length !== T.name.length, l = E.length !== q.length, j = "", it = "", D = "", ot = T.dir, H = T.date, rt = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        h && !c || (rt.crc32 = f.crc32, rt.compressedSize = f.compressedSize, rt.uncompressedSize = f.uncompressedSize);
        var R = 0;
        h && (R |= 8), P || !I && !l || (R |= 2048);
        var S = 0, X = 0;
        ot && (S |= 16), p === "UNIX" ? (X = 798, S |= function($, ct) {
          var lt = $;
          return $ || (lt = ct ? 16893 : 33204), (65535 & lt) << 16;
        }(T.unixPermissions, ot)) : (X = 20, S |= function($) {
          return 63 & ($ || 0);
        }(T.dosPermissions)), A = H.getUTCHours(), A <<= 6, A |= H.getUTCMinutes(), A <<= 5, A |= H.getUTCSeconds() / 2, L = H.getUTCFullYear() - 1980, L <<= 4, L |= H.getUTCMonth() + 1, L <<= 5, L |= H.getUTCDate(), I && (it = i(1, 1) + i(x(W), 4) + N, j += "up" + i(it.length, 2) + it), l && (D = i(1, 1) + i(x(Y), 4) + E, j += "uc" + i(D.length, 2) + D);
        var B = "";
        return B += `
\0`, B += i(R, 2), B += F.magic, B += i(A, 2), B += i(L, 2), B += i(rt.crc32, 4), B += i(rt.compressedSize, 4), B += i(rt.uncompressedSize, 4), B += i(W.length, 2), B += i(j.length, 2), { fileRecord: v.LOCAL_FILE_HEADER + B + W + j, dirRecord: v.CENTRAL_FILE_HEADER + i(X, 2) + B + i(Y.length, 2) + "\0\0\0\0" + i(S, 4) + i(g, 4) + W + j + Y };
      }
      var s = e("../utils"), d = e("../stream/GenericWorker"), _ = e("../utf8"), x = e("../crc32"), v = e("../signature");
      function m(f, h, c, g) {
        d.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = h, this.zipPlatform = c, this.encodeFileName = g, this.streamFiles = f, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      s.inherits(m, d), m.prototype.push = function(f) {
        var h = f.meta.percent || 0, c = this.entriesCount, g = this._sources.length;
        this.accumulate ? this.contentBuffer.push(f) : (this.bytesWritten += f.data.length, d.prototype.push.call(this, { data: f.data, meta: { currentFile: this.currentFile, percent: c ? (h + 100 * (c - g - 1)) / c : 100 } }));
      }, m.prototype.openedSource = function(f) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = f.file.name;
        var h = this.streamFiles && !f.file.dir;
        if (h) {
          var c = a(f, h, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: c.fileRecord, meta: { percent: 0 } });
        } else this.accumulate = !0;
      }, m.prototype.closedSource = function(f) {
        this.accumulate = !1;
        var h = this.streamFiles && !f.file.dir, c = a(f, h, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(c.dirRecord), h) this.push({ data: function(g) {
          return v.DATA_DESCRIPTOR + i(g.crc32, 4) + i(g.compressedSize, 4) + i(g.uncompressedSize, 4);
        }(f), meta: { percent: 100 } });
        else for (this.push({ data: c.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, m.prototype.flush = function() {
        for (var f = this.bytesWritten, h = 0; h < this.dirRecords.length; h++) this.push({ data: this.dirRecords[h], meta: { percent: 100 } });
        var c = this.bytesWritten - f, g = function(p, w, A, L, T) {
          var F = s.transformTo("string", T(L));
          return v.CENTRAL_DIRECTORY_END + "\0\0\0\0" + i(p, 2) + i(p, 2) + i(w, 4) + i(A, 4) + i(F.length, 2) + F;
        }(this.dirRecords.length, c, f, this.zipComment, this.encodeFileName);
        this.push({ data: g, meta: { percent: 100 } });
      }, m.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, m.prototype.registerPrevious = function(f) {
        this._sources.push(f);
        var h = this;
        return f.on("data", function(c) {
          h.processChunk(c);
        }), f.on("end", function() {
          h.closedSource(h.previous.streamInfo), h._sources.length ? h.prepareNextSource() : h.end();
        }), f.on("error", function(c) {
          h.error(c);
        }), this;
      }, m.prototype.resume = function() {
        return !!d.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, m.prototype.error = function(f) {
        var h = this._sources;
        if (!d.prototype.error.call(this, f)) return !1;
        for (var c = 0; c < h.length; c++) try {
          h[c].error(f);
        } catch {
        }
        return !0;
      }, m.prototype.lock = function() {
        d.prototype.lock.call(this);
        for (var f = this._sources, h = 0; h < f.length; h++) f[h].lock();
      }, u.exports = m;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, u, r) {
      var i = e("../compressions"), a = e("./ZipFileWorker");
      r.generateWorker = function(s, d, _) {
        var x = new a(d.streamFiles, _, d.platform, d.encodeFileName), v = 0;
        try {
          s.forEach(function(m, f) {
            v++;
            var h = function(w, A) {
              var L = w || A, T = i[L];
              if (!T) throw new Error(L + " is not a valid compression method !");
              return T;
            }(f.options.compression, d.compression), c = f.options.compressionOptions || d.compressionOptions || {}, g = f.dir, p = f.date;
            f._compressWorker(h, c).withStreamInfo("file", { name: m, dir: g, date: p, comment: f.comment || "", unixPermissions: f.unixPermissions, dosPermissions: f.dosPermissions }).pipe(x);
          }), x.entriesCount = v;
        } catch (m) {
          x.error(m);
        }
        return x;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, u, r) {
      function i() {
        if (!(this instanceof i)) return new i();
        if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var a = new i();
          for (var s in this) typeof this[s] != "function" && (a[s] = this[s]);
          return a;
        };
      }
      (i.prototype = e("./object")).loadAsync = e("./load"), i.support = e("./support"), i.defaults = e("./defaults"), i.version = "3.10.2", i.loadAsync = function(a, s) {
        return new i().loadAsync(a, s);
      }, i.external = e("./external"), u.exports = i;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, u, r) {
      var i = e("./utils"), a = e("./external"), s = e("./utf8"), d = e("./zipEntries"), _ = e("./stream/Crc32Probe"), x = e("./nodejsUtils");
      function v(m) {
        return new a.Promise(function(f, h) {
          var c = m.decompressed.getContentWorker().pipe(new _());
          c.on("error", function(g) {
            h(g);
          }).on("end", function() {
            c.streamInfo.crc32 !== m.decompressed.crc32 ? h(new Error("Corrupted zip : CRC32 mismatch")) : f();
          }).resume();
        });
      }
      u.exports = function(m, f) {
        var h = this;
        return f = i.extend(f || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: s.utf8decode }), x.isNode && x.isStream(m) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : i.prepareContent("the loaded zip file", m, !0, f.optimizedBinaryString, f.base64).then(function(c) {
          var g = new d(f);
          return g.load(c), g;
        }).then(function(c) {
          var g = [a.Promise.resolve(c)], p = c.files;
          if (f.checkCRC32) for (var w = 0; w < p.length; w++) g.push(v(p[w]));
          return a.Promise.all(g);
        }).then(function(c) {
          for (var g = c.shift(), p = g.files, w = 0; w < p.length; w++) {
            var A = p[w], L = A.fileNameStr, T = i.resolve(A.fileNameStr);
            h.file(T, A.decompressed, { binary: !0, optimizedBinaryString: !0, date: A.date, dir: A.dir, comment: A.fileCommentStr.length ? A.fileCommentStr : null, unixPermissions: A.unixPermissions, dosPermissions: A.dosPermissions, createFolders: f.createFolders }), A.dir || (h.file(T).unsafeOriginalName = L);
          }
          return g.zipComment.length && (h.comment = g.zipComment), h;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, u, r) {
      var i = e("../utils"), a = e("../stream/GenericWorker");
      function s(d, _) {
        a.call(this, "Nodejs stream input adapter for " + d), this._upstreamEnded = !1, this._bindStream(_);
      }
      i.inherits(s, a), s.prototype._bindStream = function(d) {
        var _ = this;
        (this._stream = d).pause(), d.on("data", function(x) {
          _.push({ data: x, meta: { percent: 0 } });
        }).on("error", function(x) {
          _.isPaused ? this.generatedError = x : _.error(x);
        }).on("end", function() {
          _.isPaused ? _._upstreamEnded = !0 : _.end();
        });
      }, s.prototype.pause = function() {
        return !!a.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, s.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, u.exports = s;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, u, r) {
      var i = e("readable-stream").Readable;
      function a(s, d, _) {
        i.call(this, d), this._helper = s;
        var x = this;
        s.on("data", function(v, m) {
          x.push(v) || x._helper.pause(), _ && _(m);
        }).on("error", function(v) {
          x.emit("error", v);
        }).on("end", function() {
          x.push(null);
        });
      }
      e("../utils").inherits(a, i), a.prototype._read = function() {
        this._helper.resume();
      }, u.exports = a;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, u, r) {
      u.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(i, a) {
        if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(i, a);
        if (typeof i == "number") throw new Error('The "data" argument must not be a number');
        return new Buffer(i, a);
      }, allocBuffer: function(i) {
        if (Buffer.alloc) return Buffer.alloc(i);
        var a = new Buffer(i);
        return a.fill(0), a;
      }, isBuffer: function(i) {
        return Buffer.isBuffer(i);
      }, isStream: function(i) {
        return i && typeof i.on == "function" && typeof i.pause == "function" && typeof i.resume == "function";
      } };
    }, {}], 15: [function(e, u, r) {
      function i(T, F, P) {
        var W, N = s.getTypeOf(F), q = s.extend(P || {}, x);
        q.date = q.date || /* @__PURE__ */ new Date(), q.compression !== null && (q.compression = q.compression.toUpperCase()), typeof q.unixPermissions == "string" && (q.unixPermissions = parseInt(q.unixPermissions, 8)), q.unixPermissions && 16384 & q.unixPermissions && (q.dir = !0), q.dosPermissions && 16 & q.dosPermissions && (q.dir = !0), q.dir && (T = p(T)), q.createFolders && (W = g(T)) && w.call(this, W, !0);
        var Y = N === "string" && q.binary === !1 && q.base64 === !1;
        P && P.binary !== void 0 || (q.binary = !Y), (F instanceof v && F.uncompressedSize === 0 || q.dir || !F || F.length === 0) && (q.base64 = !1, q.binary = !0, F = "", q.compression = "STORE", N = "string");
        var E = null;
        E = F instanceof v || F instanceof d ? F : h.isNode && h.isStream(F) ? new c(T, F) : s.prepareContent(T, F, q.binary, q.optimizedBinaryString, q.base64);
        var I = new m(T, E, q);
        this.files[T] = I;
      }
      var a = e("./utf8"), s = e("./utils"), d = e("./stream/GenericWorker"), _ = e("./stream/StreamHelper"), x = e("./defaults"), v = e("./compressedObject"), m = e("./zipObject"), f = e("./generate"), h = e("./nodejsUtils"), c = e("./nodejs/NodejsStreamInputAdapter"), g = function(T) {
        T.slice(-1) === "/" && (T = T.substring(0, T.length - 1));
        var F = T.lastIndexOf("/");
        return 0 < F ? T.substring(0, F) : "";
      }, p = function(T) {
        return T.slice(-1) !== "/" && (T += "/"), T;
      }, w = function(T, F) {
        return F = F !== void 0 ? F : x.createFolders, T = p(T), this.files[T] || i.call(this, T, null, { dir: !0, createFolders: F }), this.files[T];
      };
      function A(T) {
        return Object.prototype.toString.call(T) === "[object RegExp]";
      }
      var L = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(T) {
        var F, P, W;
        for (F in this.files) W = this.files[F], (P = F.slice(this.root.length, F.length)) && F.slice(0, this.root.length) === this.root && T(P, W);
      }, filter: function(T) {
        var F = [];
        return this.forEach(function(P, W) {
          T(P, W) && F.push(W);
        }), F;
      }, file: function(T, F, P) {
        if (arguments.length !== 1) return T = this.root + T, i.call(this, T, F, P), this;
        if (A(T)) {
          var W = T;
          return this.filter(function(q, Y) {
            return !Y.dir && W.test(q);
          });
        }
        var N = this.files[this.root + T];
        return N && !N.dir ? N : null;
      }, folder: function(T) {
        if (!T) return this;
        if (A(T)) return this.filter(function(N, q) {
          return q.dir && T.test(N);
        });
        var F = this.root + T, P = w.call(this, F), W = this.clone();
        return W.root = P.name, W;
      }, remove: function(T) {
        T = this.root + T;
        var F = this.files[T];
        if (F || (T.slice(-1) !== "/" && (T += "/"), F = this.files[T]), F && !F.dir) delete this.files[T];
        else for (var P = this.filter(function(N, q) {
          return q.name.slice(0, T.length) === T;
        }), W = 0; W < P.length; W++) delete this.files[P[W].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(T) {
        var F, P = {};
        try {
          if ((P = s.extend(T || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = P.type.toLowerCase(), P.compression = P.compression.toUpperCase(), P.type === "binarystring" && (P.type = "string"), !P.type) throw new Error("No output type specified.");
          s.checkSupport(P.type), P.platform !== "darwin" && P.platform !== "freebsd" && P.platform !== "linux" && P.platform !== "sunos" || (P.platform = "UNIX"), P.platform === "win32" && (P.platform = "DOS");
          var W = P.comment || this.comment || "";
          F = f.generateWorker(this, P, W);
        } catch (N) {
          (F = new d("error")).error(N);
        }
        return new _(F, P.type || "string", P.mimeType);
      }, generateAsync: function(T, F) {
        return this.generateInternalStream(T).accumulate(F);
      }, generateNodeStream: function(T, F) {
        return (T = T || {}).type || (T.type = "nodebuffer"), this.generateInternalStream(T).toNodejsStream(F);
      } };
      u.exports = L;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, u, r) {
      u.exports = e("stream");
    }, { stream: void 0 }], 17: [function(e, u, r) {
      var i = e("./DataReader");
      function a(s) {
        i.call(this, s);
        for (var d = 0; d < this.data.length; d++) s[d] = 255 & s[d];
      }
      e("../utils").inherits(a, i), a.prototype.byteAt = function(s) {
        return this.data[this.zero + s];
      }, a.prototype.lastIndexOfSignature = function(s) {
        for (var d = s.charCodeAt(0), _ = s.charCodeAt(1), x = s.charCodeAt(2), v = s.charCodeAt(3), m = this.length - 4; 0 <= m; --m) if (this.data[m] === d && this.data[m + 1] === _ && this.data[m + 2] === x && this.data[m + 3] === v) return m - this.zero;
        return -1;
      }, a.prototype.readAndCheckSignature = function(s) {
        var d = s.charCodeAt(0), _ = s.charCodeAt(1), x = s.charCodeAt(2), v = s.charCodeAt(3), m = this.readData(4);
        return d === m[0] && _ === m[1] && x === m[2] && v === m[3];
      }, a.prototype.readData = function(s) {
        if (this.checkOffset(s), s === 0) return [];
        var d = this.data.slice(this.zero + this.index, this.zero + this.index + s);
        return this.index += s, d;
      }, u.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, u, r) {
      var i = e("../utils");
      function a(s) {
        this.data = s, this.length = s.length, this.index = 0, this.zero = 0;
      }
      a.prototype = { checkOffset: function(s) {
        this.checkIndex(this.index + s);
      }, checkIndex: function(s) {
        if (this.length < this.zero + s || s < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + s + "). Corrupted zip ?");
      }, setIndex: function(s) {
        this.checkIndex(s), this.index = s;
      }, skip: function(s) {
        this.setIndex(this.index + s);
      }, byteAt: function() {
      }, readInt: function(s) {
        var d, _ = 0;
        for (this.checkOffset(s), d = this.index + s - 1; d >= this.index; d--) _ = (_ << 8) + this.byteAt(d);
        return this.index += s, _;
      }, readString: function(s) {
        return i.transformTo("string", this.readData(s));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var s = this.readInt(4);
        return new Date(Date.UTC(1980 + (s >> 25 & 127), (s >> 21 & 15) - 1, s >> 16 & 31, s >> 11 & 31, s >> 5 & 63, (31 & s) << 1));
      } }, u.exports = a;
    }, { "../utils": 32 }], 19: [function(e, u, r) {
      var i = e("./Uint8ArrayReader");
      function a(s) {
        i.call(this, s);
      }
      e("../utils").inherits(a, i), a.prototype.readData = function(s) {
        this.checkOffset(s);
        var d = this.data.slice(this.zero + this.index, this.zero + this.index + s);
        return this.index += s, d;
      }, u.exports = a;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, u, r) {
      var i = e("./DataReader");
      function a(s) {
        i.call(this, s);
      }
      e("../utils").inherits(a, i), a.prototype.byteAt = function(s) {
        return this.data.charCodeAt(this.zero + s);
      }, a.prototype.lastIndexOfSignature = function(s) {
        return this.data.lastIndexOf(s) - this.zero;
      }, a.prototype.readAndCheckSignature = function(s) {
        return s === this.readData(4);
      }, a.prototype.readData = function(s) {
        this.checkOffset(s);
        var d = this.data.slice(this.zero + this.index, this.zero + this.index + s);
        return this.index += s, d;
      }, u.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, u, r) {
      var i = e("./ArrayReader");
      function a(s) {
        i.call(this, s);
      }
      e("../utils").inherits(a, i), a.prototype.readData = function(s) {
        if (this.checkOffset(s), s === 0) return new Uint8Array(0);
        var d = this.data.subarray(this.zero + this.index, this.zero + this.index + s);
        return this.index += s, d;
      }, u.exports = a;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, u, r) {
      var i = e("../utils"), a = e("../support"), s = e("./ArrayReader"), d = e("./StringReader"), _ = e("./NodeBufferReader"), x = e("./Uint8ArrayReader");
      u.exports = function(v) {
        var m = i.getTypeOf(v);
        return i.checkSupport(m), m !== "string" || a.uint8array ? m === "nodebuffer" ? new _(v) : a.uint8array ? new x(i.transformTo("uint8array", v)) : new s(i.transformTo("array", v)) : new d(v);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, u, r) {
      r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(e, u, r) {
      var i = e("./GenericWorker"), a = e("../utils");
      function s(d) {
        i.call(this, "ConvertWorker to " + d), this.destType = d;
      }
      a.inherits(s, i), s.prototype.processChunk = function(d) {
        this.push({ data: a.transformTo(this.destType, d.data), meta: d.meta });
      }, u.exports = s;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, u, r) {
      var i = e("./GenericWorker"), a = e("../crc32");
      function s() {
        i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      e("../utils").inherits(s, i), s.prototype.processChunk = function(d) {
        this.streamInfo.crc32 = a(d.data, this.streamInfo.crc32 || 0), this.push(d);
      }, u.exports = s;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, u, r) {
      var i = e("../utils"), a = e("./GenericWorker");
      function s(d) {
        a.call(this, "DataLengthProbe for " + d), this.propName = d, this.withStreamInfo(d, 0);
      }
      i.inherits(s, a), s.prototype.processChunk = function(d) {
        if (d) {
          var _ = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = _ + d.data.length;
        }
        a.prototype.processChunk.call(this, d);
      }, u.exports = s;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, u, r) {
      var i = e("../utils"), a = e("./GenericWorker");
      function s(d) {
        a.call(this, "DataWorker");
        var _ = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, d.then(function(x) {
          _.dataIsReady = !0, _.data = x, _.max = x && x.length || 0, _.type = i.getTypeOf(x), _.isPaused || _._tickAndRepeat();
        }, function(x) {
          _.error(x);
        });
      }
      i.inherits(s, a), s.prototype.cleanUp = function() {
        a.prototype.cleanUp.call(this), this.data = null;
      }, s.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, i.delay(this._tickAndRepeat, [], this)), !0);
      }, s.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, s.prototype._tick = function() {
        if (this.isPaused || this.isFinished) return !1;
        var d = null, _ = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max) return this.end();
        switch (this.type) {
          case "string":
            d = this.data.substring(this.index, _);
            break;
          case "uint8array":
            d = this.data.subarray(this.index, _);
            break;
          case "array":
          case "nodebuffer":
            d = this.data.slice(this.index, _);
        }
        return this.index = _, this.push({ data: d, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, u.exports = s;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, u, r) {
      function i(a) {
        this.name = a || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      i.prototype = { push: function(a) {
        this.emit("data", a);
      }, end: function() {
        if (this.isFinished) return !1;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = !0;
        } catch (a) {
          this.emit("error", a);
        }
        return !0;
      }, error: function(a) {
        return !this.isFinished && (this.isPaused ? this.generatedError = a : (this.isFinished = !0, this.emit("error", a), this.previous && this.previous.error(a), this.cleanUp()), !0);
      }, on: function(a, s) {
        return this._listeners[a].push(s), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(a, s) {
        if (this._listeners[a]) for (var d = 0; d < this._listeners[a].length; d++) this._listeners[a][d].call(this, s);
      }, pipe: function(a) {
        return a.registerPrevious(this);
      }, registerPrevious: function(a) {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = a.streamInfo, this.mergeStreamInfo(), this.previous = a;
        var s = this;
        return a.on("data", function(d) {
          s.processChunk(d);
        }), a.on("end", function() {
          s.end();
        }), a.on("error", function(d) {
          s.error(d);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
      }, resume: function() {
        if (!this.isPaused || this.isFinished) return !1;
        var a = this.isPaused = !1;
        return this.generatedError && (this.error(this.generatedError), a = !0), this.previous && this.previous.resume(), !a;
      }, flush: function() {
      }, processChunk: function(a) {
        this.push(a);
      }, withStreamInfo: function(a, s) {
        return this.extraStreamInfo[a] = s, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var a in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, a) && (this.streamInfo[a] = this.extraStreamInfo[a]);
      }, lock: function() {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var a = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + a : a;
      } }, u.exports = i;
    }, {}], 29: [function(e, u, r) {
      var i = e("../utils"), a = e("./ConvertWorker"), s = e("./GenericWorker"), d = e("../base64"), _ = e("../support"), x = e("../external"), v = null;
      if (_.nodestream) try {
        v = e("../nodejs/NodejsStreamOutputAdapter");
      } catch {
      }
      function m(h, c) {
        return new x.Promise(function(g, p) {
          var w = [], A = h._internalType, L = h._outputType, T = h._mimeType;
          h.on("data", function(F, P) {
            w.push(F), c && c(P);
          }).on("error", function(F) {
            w = [], p(F);
          }).on("end", function() {
            try {
              var F = function(P, W, N) {
                switch (P) {
                  case "blob":
                    return i.newBlob(i.transformTo("arraybuffer", W), N);
                  case "base64":
                    return d.encode(W);
                  default:
                    return i.transformTo(P, W);
                }
              }(L, function(P, W) {
                var N, q = 0, Y = null, E = 0;
                for (N = 0; N < W.length; N++) E += W[N].length;
                switch (P) {
                  case "string":
                    return W.join("");
                  case "array":
                    return Array.prototype.concat.apply([], W);
                  case "uint8array":
                    for (Y = new Uint8Array(E), N = 0; N < W.length; N++) Y.set(W[N], q), q += W[N].length;
                    return Y;
                  case "nodebuffer":
                    return Buffer.concat(W);
                  default:
                    throw new Error("concat : unsupported type '" + P + "'");
                }
              }(A, w), T);
              g(F);
            } catch (P) {
              p(P);
            }
            w = [];
          }).resume();
        });
      }
      function f(h, c, g) {
        var p = c;
        switch (c) {
          case "blob":
          case "arraybuffer":
            p = "uint8array";
            break;
          case "base64":
            p = "string";
        }
        try {
          this._internalType = p, this._outputType = c, this._mimeType = g, i.checkSupport(p), this._worker = h.pipe(new a(p)), h.lock();
        } catch (w) {
          this._worker = new s("error"), this._worker.error(w);
        }
      }
      f.prototype = { accumulate: function(h) {
        return m(this, h);
      }, on: function(h, c) {
        var g = this;
        return h === "data" ? this._worker.on(h, function(p) {
          c.call(g, p.data, p.meta);
        }) : this._worker.on(h, function() {
          i.delay(c, arguments, g);
        }), this;
      }, resume: function() {
        return i.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(h) {
        if (i.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
        return new v(this, { objectMode: this._outputType !== "nodebuffer" }, h);
      } }, u.exports = f;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, u, r) {
      if (r.base64 = !0, r.array = !0, r.string = !0, r.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", r.nodebuffer = typeof Buffer < "u", r.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") r.blob = !1;
      else {
        var i = new ArrayBuffer(0);
        try {
          r.blob = new Blob([i], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var a = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            a.append(i), r.blob = a.getBlob("application/zip").size === 0;
          } catch {
            r.blob = !1;
          }
        }
      }
      try {
        r.nodestream = !!e("readable-stream").Readable;
      } catch {
        r.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(e, u, r) {
      for (var i = e("./utils"), a = e("./support"), s = e("./nodejsUtils"), d = e("./stream/GenericWorker"), _ = new Array(256), x = 0; x < 256; x++) _[x] = 252 <= x ? 6 : 248 <= x ? 5 : 240 <= x ? 4 : 224 <= x ? 3 : 192 <= x ? 2 : 1;
      _[254] = _[254] = 1;
      function v() {
        d.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function m() {
        d.call(this, "utf-8 encode");
      }
      r.utf8encode = function(f) {
        return a.nodebuffer ? s.newBufferFrom(f, "utf-8") : function(h) {
          var c, g, p, w, A, L = h.length, T = 0;
          for (w = 0; w < L; w++) (64512 & (g = h.charCodeAt(w))) == 55296 && w + 1 < L && (64512 & (p = h.charCodeAt(w + 1))) == 56320 && (g = 65536 + (g - 55296 << 10) + (p - 56320), w++), T += g < 128 ? 1 : g < 2048 ? 2 : g < 65536 ? 3 : 4;
          for (c = a.uint8array ? new Uint8Array(T) : new Array(T), w = A = 0; A < T; w++) (64512 & (g = h.charCodeAt(w))) == 55296 && w + 1 < L && (64512 & (p = h.charCodeAt(w + 1))) == 56320 && (g = 65536 + (g - 55296 << 10) + (p - 56320), w++), g < 128 ? c[A++] = g : (g < 2048 ? c[A++] = 192 | g >>> 6 : (g < 65536 ? c[A++] = 224 | g >>> 12 : (c[A++] = 240 | g >>> 18, c[A++] = 128 | g >>> 12 & 63), c[A++] = 128 | g >>> 6 & 63), c[A++] = 128 | 63 & g);
          return c;
        }(f);
      }, r.utf8decode = function(f) {
        return a.nodebuffer ? i.transformTo("nodebuffer", f).toString("utf-8") : function(h) {
          var c, g, p, w, A = h.length, L = new Array(2 * A);
          for (c = g = 0; c < A; ) if ((p = h[c++]) < 128) L[g++] = p;
          else if (4 < (w = _[p])) L[g++] = 65533, c += w - 1;
          else {
            for (p &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && c < A; ) p = p << 6 | 63 & h[c++], w--;
            1 < w ? L[g++] = 65533 : p < 65536 ? L[g++] = p : (p -= 65536, L[g++] = 55296 | p >> 10 & 1023, L[g++] = 56320 | 1023 & p);
          }
          return L.length !== g && (L.subarray ? L = L.subarray(0, g) : L.length = g), i.applyFromCharCode(L);
        }(f = i.transformTo(a.uint8array ? "uint8array" : "array", f));
      }, i.inherits(v, d), v.prototype.processChunk = function(f) {
        var h = i.transformTo(a.uint8array ? "uint8array" : "array", f.data);
        if (this.leftOver && this.leftOver.length) {
          if (a.uint8array) {
            var c = h;
            (h = new Uint8Array(c.length + this.leftOver.length)).set(this.leftOver, 0), h.set(c, this.leftOver.length);
          } else h = this.leftOver.concat(h);
          this.leftOver = null;
        }
        var g = function(w, A) {
          var L;
          for ((A = A || w.length) > w.length && (A = w.length), L = A - 1; 0 <= L && (192 & w[L]) == 128; ) L--;
          return L < 0 || L === 0 ? A : L + _[w[L]] > A ? L : A;
        }(h), p = h;
        g !== h.length && (a.uint8array ? (p = h.subarray(0, g), this.leftOver = h.subarray(g, h.length)) : (p = h.slice(0, g), this.leftOver = h.slice(g, h.length))), this.push({ data: r.utf8decode(p), meta: f.meta });
      }, v.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: r.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, r.Utf8DecodeWorker = v, i.inherits(m, d), m.prototype.processChunk = function(f) {
        this.push({ data: r.utf8encode(f.data), meta: f.meta });
      }, r.Utf8EncodeWorker = m;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, u, r) {
      var i = e("./support"), a = e("./base64"), s = e("./nodejsUtils"), d = e("./external");
      function _(c) {
        return c;
      }
      function x(c, g) {
        for (var p = 0; p < c.length; ++p) g[p] = 255 & c.charCodeAt(p);
        return g;
      }
      e("setimmediate"), r.newBlob = function(c, g) {
        r.checkSupport("blob");
        try {
          return new Blob([c], { type: g });
        } catch {
          try {
            var p = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return p.append(c), p.getBlob(g);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var v = { stringifyByChunk: function(c, g, p) {
        var w = [], A = 0, L = c.length;
        if (L <= p) return String.fromCharCode.apply(null, c);
        for (; A < L; ) g === "array" || g === "nodebuffer" ? w.push(String.fromCharCode.apply(null, c.slice(A, Math.min(A + p, L)))) : w.push(String.fromCharCode.apply(null, c.subarray(A, Math.min(A + p, L)))), A += p;
        return w.join("");
      }, stringifyByChar: function(c) {
        for (var g = "", p = 0; p < c.length; p++) g += String.fromCharCode(c[p]);
        return g;
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
      function m(c) {
        var g = 65536, p = r.getTypeOf(c), w = !0;
        if (p === "uint8array" ? w = v.applyCanBeUsed.uint8array : p === "nodebuffer" && (w = v.applyCanBeUsed.nodebuffer), w) for (; 1 < g; ) try {
          return v.stringifyByChunk(c, p, g);
        } catch {
          g = Math.floor(g / 2);
        }
        return v.stringifyByChar(c);
      }
      function f(c, g) {
        for (var p = 0; p < c.length; p++) g[p] = c[p];
        return g;
      }
      r.applyFromCharCode = m;
      var h = {};
      h.string = { string: _, array: function(c) {
        return x(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return h.string.uint8array(c).buffer;
      }, uint8array: function(c) {
        return x(c, new Uint8Array(c.length));
      }, nodebuffer: function(c) {
        return x(c, s.allocBuffer(c.length));
      } }, h.array = { string: m, array: _, arraybuffer: function(c) {
        return new Uint8Array(c).buffer;
      }, uint8array: function(c) {
        return new Uint8Array(c);
      }, nodebuffer: function(c) {
        return s.newBufferFrom(c);
      } }, h.arraybuffer = { string: function(c) {
        return m(new Uint8Array(c));
      }, array: function(c) {
        return f(new Uint8Array(c), new Array(c.byteLength));
      }, arraybuffer: _, uint8array: function(c) {
        return new Uint8Array(c);
      }, nodebuffer: function(c) {
        return s.newBufferFrom(new Uint8Array(c));
      } }, h.uint8array = { string: m, array: function(c) {
        return f(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return c.buffer;
      }, uint8array: _, nodebuffer: function(c) {
        return s.newBufferFrom(c);
      } }, h.nodebuffer = { string: m, array: function(c) {
        return f(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return h.nodebuffer.uint8array(c).buffer;
      }, uint8array: function(c) {
        return f(c, new Uint8Array(c.length));
      }, nodebuffer: _ }, r.transformTo = function(c, g) {
        if (g = g || "", !c) return g;
        r.checkSupport(c);
        var p = r.getTypeOf(g);
        return h[p][c](g);
      }, r.resolve = function(c) {
        for (var g = c.split("/"), p = [], w = 0; w < g.length; w++) {
          var A = g[w];
          A === "." || A === "" && w !== 0 && w !== g.length - 1 || (A === ".." ? p.pop() : p.push(A));
        }
        return p.join("/");
      }, r.getTypeOf = function(c) {
        if (typeof c == "string") return "string";
        var g = Object.prototype.toString.call(c);
        return g === "[object Array]" ? "array" : i.nodebuffer && s.isBuffer(c) ? "nodebuffer" : i.uint8array && g === "[object Uint8Array]" ? "uint8array" : i.arraybuffer && g === "[object ArrayBuffer]" ? "arraybuffer" : void 0;
      }, r.checkSupport = function(c) {
        if (!i[c.toLowerCase()]) throw new Error(c + " is not supported by this platform");
      }, r.MAX_VALUE_16BITS = 65535, r.MAX_VALUE_32BITS = -1, r.pretty = function(c) {
        var g, p, w = "";
        for (p = 0; p < (c || "").length; p++) w += "\\x" + ((g = c.charCodeAt(p)) < 16 ? "0" : "") + g.toString(16).toUpperCase();
        return w;
      }, r.delay = function(c, g, p) {
        setImmediate(function() {
          c.apply(p || null, g || []);
        });
      }, r.inherits = function(c, g) {
        function p() {
        }
        p.prototype = g.prototype, c.prototype = new p();
      }, r.extend = function() {
        var c, g, p = {};
        for (c = 0; c < arguments.length; c++) for (g in arguments[c]) Object.prototype.hasOwnProperty.call(arguments[c], g) && p[g] === void 0 && (p[g] = arguments[c][g]);
        return p;
      }, r.prepareContent = function(c, g, p, w, A) {
        return d.Promise.resolve(g).then(function(L) {
          return i.blob && (L instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(L)) !== -1) ? Blob.prototype.arrayBuffer !== void 0 ? L.arrayBuffer() : typeof FileReader < "u" ? new d.Promise(function(T, F) {
            var P = new FileReader();
            P.onload = function(W) {
              T(W.target.result);
            }, P.onerror = function(W) {
              F(W.target.error);
            }, P.readAsArrayBuffer(L);
          }) : d.Promise.reject(new Error(c + " is a Blob, but we have no way of reading it.")) : L;
        }).then(function(L) {
          var T = r.getTypeOf(L);
          return T ? (T === "arraybuffer" ? L = r.transformTo("uint8array", L) : T === "string" && (A ? L = a.decode(L) : p && w !== !0 && (L = function(F) {
            return x(F, i.uint8array ? new Uint8Array(F.length) : new Array(F.length));
          }(L))), L) : d.Promise.reject(new Error("Can't read the data of '" + c + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, u, r) {
      var i = e("./reader/readerFor"), a = e("./utils"), s = e("./signature"), d = e("./zipEntry"), _ = e("./support");
      function x(v) {
        this.files = [], this.loadOptions = v;
      }
      x.prototype = { checkSignature: function(v) {
        if (!this.reader.readAndCheckSignature(v)) {
          this.reader.index -= 4;
          var m = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(m) + ", expected " + a.pretty(v) + ")");
        }
      }, isSignature: function(v, m) {
        var f = this.reader.index;
        this.reader.setIndex(v);
        var h = this.reader.readString(4) === m;
        return this.reader.setIndex(f), h;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var v = this.reader.readData(this.zipCommentLength), m = _.uint8array ? "uint8array" : "array", f = a.transformTo(m, v);
        this.zipComment = this.loadOptions.decodeFileName(f);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var v, m, f, h = this.zip64EndOfCentralSize - 44; 0 < h; ) v = this.reader.readInt(2), m = this.reader.readInt(4), f = this.reader.readData(m), this.zip64ExtensibleData[v] = { id: v, length: m, value: f };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var v, m;
        for (v = 0; v < this.files.length; v++) m = this.files[v], this.reader.setIndex(m.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), m.readLocalPart(this.reader), m.handleUTF8(), m.processAttributes();
      }, readCentralDir: function() {
        var v;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); ) (v = new d({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(v);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var v = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
        if (v < 0) throw this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(v);
        var m = v;
        if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (v = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(v), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var f = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (f += 20, f += 12 + this.zip64EndOfCentralSize);
        var h = m - f;
        if (0 < h) this.isSignature(m, s.CENTRAL_FILE_HEADER) || (this.reader.zero = h);
        else if (h < 0) throw new Error("Corrupted zip: missing " + Math.abs(h) + " bytes.");
      }, prepareReader: function(v) {
        this.reader = i(v);
      }, load: function(v) {
        this.prepareReader(v), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, u.exports = x;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, u, r) {
      var i = e("./reader/readerFor"), a = e("./utils"), s = e("./compressedObject"), d = e("./crc32"), _ = e("./utf8"), x = e("./compressions"), v = e("./support");
      function m(f, h) {
        this.options = f, this.loadOptions = h;
      }
      m.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(f) {
        var h, c;
        if (f.skip(22), this.fileNameLength = f.readInt(2), c = f.readInt(2), this.fileName = f.readData(this.fileNameLength), f.skip(c), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((h = function(g) {
          for (var p in x) if (Object.prototype.hasOwnProperty.call(x, p) && x[p].magic === g) return x[p];
          return null;
        }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
        this.decompressed = new s(this.compressedSize, this.uncompressedSize, this.crc32, h, f.readData(this.compressedSize));
      }, readCentralPart: function(f) {
        this.versionMadeBy = f.readInt(2), f.skip(2), this.bitFlag = f.readInt(2), this.compressionMethod = f.readString(2), this.date = f.readDate(), this.crc32 = f.readInt(4), this.compressedSize = f.readInt(4), this.uncompressedSize = f.readInt(4);
        var h = f.readInt(2);
        if (this.extraFieldsLength = f.readInt(2), this.fileCommentLength = f.readInt(2), this.diskNumberStart = f.readInt(2), this.internalFileAttributes = f.readInt(2), this.externalFileAttributes = f.readInt(4), this.localHeaderOffset = f.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
        f.skip(h), this.readExtraFields(f), this.parseZIP64ExtraField(f), this.fileComment = f.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var f = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), f == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), f == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var f = i(this.extraFields[1].value);
          this.uncompressedSize === a.MAX_VALUE_32BITS && (this.uncompressedSize = f.readInt(8)), this.compressedSize === a.MAX_VALUE_32BITS && (this.compressedSize = f.readInt(8)), this.localHeaderOffset === a.MAX_VALUE_32BITS && (this.localHeaderOffset = f.readInt(8)), this.diskNumberStart === a.MAX_VALUE_32BITS && (this.diskNumberStart = f.readInt(4));
        }
      }, readExtraFields: function(f) {
        var h, c, g, p = f.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); f.index + 4 < p; ) h = f.readInt(2), c = f.readInt(2), g = f.readData(c), this.extraFields[h] = { id: h, length: c, value: g };
        f.setIndex(p);
      }, handleUTF8: function() {
        var f = v.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) this.fileNameStr = _.utf8decode(this.fileName), this.fileCommentStr = _.utf8decode(this.fileComment);
        else {
          var h = this.findExtraFieldUnicodePath();
          if (h !== null) this.fileNameStr = h;
          else {
            var c = a.transformTo(f, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(c);
          }
          var g = this.findExtraFieldUnicodeComment();
          if (g !== null) this.fileCommentStr = g;
          else {
            var p = a.transformTo(f, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(p);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var f = this.extraFields[28789];
        if (f) {
          var h = i(f.value);
          return h.readInt(1) !== 1 || d(this.fileName) !== h.readInt(4) ? null : _.utf8decode(h.readData(f.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var f = this.extraFields[25461];
        if (f) {
          var h = i(f.value);
          return h.readInt(1) !== 1 || d(this.fileComment) !== h.readInt(4) ? null : _.utf8decode(h.readData(f.length - 5));
        }
        return null;
      } }, u.exports = m;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, u, r) {
      function i(h, c, g) {
        this.name = h, this.dir = g.dir, this.date = g.date, this.comment = g.comment, this.unixPermissions = g.unixPermissions, this.dosPermissions = g.dosPermissions, this._data = c, this._dataBinary = g.binary, this.options = { compression: g.compression, compressionOptions: g.compressionOptions };
      }
      var a = e("./stream/StreamHelper"), s = e("./stream/DataWorker"), d = e("./utf8"), _ = e("./compressedObject"), x = e("./stream/GenericWorker");
      i.prototype = { internalStream: function(h) {
        var c = null, g = "string";
        try {
          if (!h) throw new Error("No output type specified.");
          var p = (g = h.toLowerCase()) === "string" || g === "text";
          g !== "binarystring" && g !== "text" || (g = "string"), c = this._decompressWorker();
          var w = !this._dataBinary;
          w && !p && (c = c.pipe(new d.Utf8EncodeWorker())), !w && p && (c = c.pipe(new d.Utf8DecodeWorker()));
        } catch (A) {
          (c = new x("error")).error(A);
        }
        return new a(c, g, "");
      }, async: function(h, c) {
        return this.internalStream(h).accumulate(c);
      }, nodeStream: function(h, c) {
        return this.internalStream(h || "nodebuffer").toNodejsStream(c);
      }, _compressWorker: function(h, c) {
        if (this._data instanceof _ && this._data.compression.magic === h.magic) return this._data.getCompressedWorker();
        var g = this._decompressWorker();
        return this._dataBinary || (g = g.pipe(new d.Utf8EncodeWorker())), _.createWorkerFrom(g, h, c);
      }, _decompressWorker: function() {
        return this._data instanceof _ ? this._data.getContentWorker() : this._data instanceof x ? this._data : new s(this._data);
      } };
      for (var v = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], m = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, f = 0; f < v.length; f++) i.prototype[v[f]] = m;
      u.exports = i;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, u, r) {
      (function(i) {
        var a, s, d = i.MutationObserver || i.WebKitMutationObserver;
        if (d) {
          var _ = 0, x = new d(h), v = i.document.createTextNode("");
          x.observe(v, { characterData: !0 }), a = function() {
            v.data = _ = ++_ % 2;
          };
        } else if (i.setImmediate || i.MessageChannel === void 0) a = "document" in i && "onreadystatechange" in i.document.createElement("script") ? function() {
          var c = i.document.createElement("script");
          c.onreadystatechange = function() {
            h(), c.onreadystatechange = null, c.parentNode.removeChild(c), c = null;
          }, i.document.documentElement.appendChild(c);
        } : function() {
          setTimeout(h, 0);
        };
        else {
          var m = new i.MessageChannel();
          m.port1.onmessage = h, a = function() {
            m.port2.postMessage(0);
          };
        }
        var f = [];
        function h() {
          var c, g;
          s = !0;
          for (var p = f.length; p; ) {
            for (g = f, f = [], c = -1; ++c < p; ) g[c]();
            p = f.length;
          }
          s = !1;
        }
        u.exports = function(c) {
          f.push(c) !== 1 || s || a();
        };
      }).call(this, typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(e, u, r) {
      var i = e("immediate");
      function a() {
      }
      var s = {}, d = ["REJECTED"], _ = ["FULFILLED"], x = ["PENDING"];
      function v(p) {
        if (typeof p != "function") throw new TypeError("resolver must be a function");
        this.state = x, this.queue = [], this.outcome = void 0, p !== a && c(this, p);
      }
      function m(p, w, A) {
        this.promise = p, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof A == "function" && (this.onRejected = A, this.callRejected = this.otherCallRejected);
      }
      function f(p, w, A) {
        i(function() {
          var L;
          try {
            L = w(A);
          } catch (T) {
            return s.reject(p, T);
          }
          L === p ? s.reject(p, new TypeError("Cannot resolve promise with itself")) : s.resolve(p, L);
        });
      }
      function h(p) {
        var w = p && p.then;
        if (p && (typeof p == "object" || typeof p == "function") && typeof w == "function") return function() {
          w.apply(p, arguments);
        };
      }
      function c(p, w) {
        var A = !1;
        function L(P) {
          A || (A = !0, s.reject(p, P));
        }
        function T(P) {
          A || (A = !0, s.resolve(p, P));
        }
        var F = g(function() {
          w(T, L);
        });
        F.status === "error" && L(F.value);
      }
      function g(p, w) {
        var A = {};
        try {
          A.value = p(w), A.status = "success";
        } catch (L) {
          A.status = "error", A.value = L;
        }
        return A;
      }
      (u.exports = v).prototype.finally = function(p) {
        if (typeof p != "function") return this;
        var w = this.constructor;
        return this.then(function(A) {
          return w.resolve(p()).then(function() {
            return A;
          });
        }, function(A) {
          return w.resolve(p()).then(function() {
            throw A;
          });
        });
      }, v.prototype.catch = function(p) {
        return this.then(null, p);
      }, v.prototype.then = function(p, w) {
        if (typeof p != "function" && this.state === _ || typeof w != "function" && this.state === d) return this;
        var A = new this.constructor(a);
        return this.state !== x ? f(A, this.state === _ ? p : w, this.outcome) : this.queue.push(new m(A, p, w)), A;
      }, m.prototype.callFulfilled = function(p) {
        s.resolve(this.promise, p);
      }, m.prototype.otherCallFulfilled = function(p) {
        f(this.promise, this.onFulfilled, p);
      }, m.prototype.callRejected = function(p) {
        s.reject(this.promise, p);
      }, m.prototype.otherCallRejected = function(p) {
        f(this.promise, this.onRejected, p);
      }, s.resolve = function(p, w) {
        var A = g(h, w);
        if (A.status === "error") return s.reject(p, A.value);
        var L = A.value;
        if (L) c(p, L);
        else {
          p.state = _, p.outcome = w;
          for (var T = -1, F = p.queue.length; ++T < F; ) p.queue[T].callFulfilled(w);
        }
        return p;
      }, s.reject = function(p, w) {
        p.state = d, p.outcome = w;
        for (var A = -1, L = p.queue.length; ++A < L; ) p.queue[A].callRejected(w);
        return p;
      }, v.resolve = function(p) {
        return p instanceof this ? p : s.resolve(new this(a), p);
      }, v.reject = function(p) {
        var w = new this(a);
        return s.reject(w, p);
      }, v.all = function(p) {
        var w = this;
        if (Object.prototype.toString.call(p) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var A = p.length, L = !1;
        if (!A) return this.resolve([]);
        for (var T = new Array(A), F = 0, P = -1, W = new this(a); ++P < A; ) N(p[P], P);
        return W;
        function N(q, Y) {
          w.resolve(q).then(function(E) {
            T[Y] = E, ++F !== A || L || (L = !0, s.resolve(W, T));
          }, function(E) {
            L || (L = !0, s.reject(W, E));
          });
        }
      }, v.race = function(p) {
        var w = this;
        if (Object.prototype.toString.call(p) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var A = p.length, L = !1;
        if (!A) return this.resolve([]);
        for (var T = -1, F = new this(a); ++T < A; ) P = p[T], w.resolve(P).then(function(W) {
          L || (L = !0, s.resolve(F, W));
        }, function(W) {
          L || (L = !0, s.reject(F, W));
        });
        var P;
        return F;
      };
    }, { immediate: 36 }], 38: [function(e, u, r) {
      var i = {};
      (0, e("./lib/utils/common").assign)(i, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), u.exports = i;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, u, r) {
      var i = e("./zlib/deflate"), a = e("./utils/common"), s = e("./utils/strings"), d = e("./zlib/messages"), _ = e("./zlib/zstream"), x = Object.prototype.toString, v = 0, m = -1, f = 0, h = 8;
      function c(p) {
        if (!(this instanceof c)) return new c(p);
        this.options = a.assign({ level: m, method: h, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: f, to: "" }, p || {});
        var w = this.options;
        w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new _(), this.strm.avail_out = 0;
        var A = i.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (A !== v) throw new Error(d[A]);
        if (w.header && i.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var L;
          if (L = typeof w.dictionary == "string" ? s.string2buf(w.dictionary) : x.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (A = i.deflateSetDictionary(this.strm, L)) !== v) throw new Error(d[A]);
          this._dict_set = !0;
        }
      }
      function g(p, w) {
        var A = new c(w);
        if (A.push(p, !0), A.err) throw A.msg || d[A.err];
        return A.result;
      }
      c.prototype.push = function(p, w) {
        var A, L, T = this.strm, F = this.options.chunkSize;
        if (this.ended) return !1;
        L = w === ~~w ? w : w === !0 ? 4 : 0, typeof p == "string" ? T.input = s.string2buf(p) : x.call(p) === "[object ArrayBuffer]" ? T.input = new Uint8Array(p) : T.input = p, T.next_in = 0, T.avail_in = T.input.length;
        do {
          if (T.avail_out === 0 && (T.output = new a.Buf8(F), T.next_out = 0, T.avail_out = F), (A = i.deflate(T, L)) !== 1 && A !== v) return this.onEnd(A), !(this.ended = !0);
          T.avail_out !== 0 && (T.avail_in !== 0 || L !== 4 && L !== 2) || (this.options.to === "string" ? this.onData(s.buf2binstring(a.shrinkBuf(T.output, T.next_out))) : this.onData(a.shrinkBuf(T.output, T.next_out)));
        } while ((0 < T.avail_in || T.avail_out === 0) && A !== 1);
        return L === 4 ? (A = i.deflateEnd(this.strm), this.onEnd(A), this.ended = !0, A === v) : L !== 2 || (this.onEnd(v), !(T.avail_out = 0));
      }, c.prototype.onData = function(p) {
        this.chunks.push(p);
      }, c.prototype.onEnd = function(p) {
        p === v && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = p, this.msg = this.strm.msg;
      }, r.Deflate = c, r.deflate = g, r.deflateRaw = function(p, w) {
        return (w = w || {}).raw = !0, g(p, w);
      }, r.gzip = function(p, w) {
        return (w = w || {}).gzip = !0, g(p, w);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, u, r) {
      var i = e("./zlib/inflate"), a = e("./utils/common"), s = e("./utils/strings"), d = e("./zlib/constants"), _ = e("./zlib/messages"), x = e("./zlib/zstream"), v = e("./zlib/gzheader"), m = Object.prototype.toString;
      function f(c) {
        if (!(this instanceof f)) return new f(c);
        this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, c || {});
        var g = this.options;
        g.raw && 0 <= g.windowBits && g.windowBits < 16 && (g.windowBits = -g.windowBits, g.windowBits === 0 && (g.windowBits = -15)), !(0 <= g.windowBits && g.windowBits < 16) || c && c.windowBits || (g.windowBits += 32), 15 < g.windowBits && g.windowBits < 48 && !(15 & g.windowBits) && (g.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new x(), this.strm.avail_out = 0;
        var p = i.inflateInit2(this.strm, g.windowBits);
        if (p !== d.Z_OK) throw new Error(_[p]);
        this.header = new v(), i.inflateGetHeader(this.strm, this.header);
      }
      function h(c, g) {
        var p = new f(g);
        if (p.push(c, !0), p.err) throw p.msg || _[p.err];
        return p.result;
      }
      f.prototype.push = function(c, g) {
        var p, w, A, L, T, F, P = this.strm, W = this.options.chunkSize, N = this.options.dictionary, q = !1;
        if (this.ended) return !1;
        w = g === ~~g ? g : g === !0 ? d.Z_FINISH : d.Z_NO_FLUSH, typeof c == "string" ? P.input = s.binstring2buf(c) : m.call(c) === "[object ArrayBuffer]" ? P.input = new Uint8Array(c) : P.input = c, P.next_in = 0, P.avail_in = P.input.length;
        do {
          if (P.avail_out === 0 && (P.output = new a.Buf8(W), P.next_out = 0, P.avail_out = W), (p = i.inflate(P, d.Z_NO_FLUSH)) === d.Z_NEED_DICT && N && (F = typeof N == "string" ? s.string2buf(N) : m.call(N) === "[object ArrayBuffer]" ? new Uint8Array(N) : N, p = i.inflateSetDictionary(this.strm, F)), p === d.Z_BUF_ERROR && q === !0 && (p = d.Z_OK, q = !1), p !== d.Z_STREAM_END && p !== d.Z_OK) return this.onEnd(p), !(this.ended = !0);
          P.next_out && (P.avail_out !== 0 && p !== d.Z_STREAM_END && (P.avail_in !== 0 || w !== d.Z_FINISH && w !== d.Z_SYNC_FLUSH) || (this.options.to === "string" ? (A = s.utf8border(P.output, P.next_out), L = P.next_out - A, T = s.buf2string(P.output, A), P.next_out = L, P.avail_out = W - L, L && a.arraySet(P.output, P.output, A, L, 0), this.onData(T)) : this.onData(a.shrinkBuf(P.output, P.next_out)))), P.avail_in === 0 && P.avail_out === 0 && (q = !0);
        } while ((0 < P.avail_in || P.avail_out === 0) && p !== d.Z_STREAM_END);
        return p === d.Z_STREAM_END && (w = d.Z_FINISH), w === d.Z_FINISH ? (p = i.inflateEnd(this.strm), this.onEnd(p), this.ended = !0, p === d.Z_OK) : w !== d.Z_SYNC_FLUSH || (this.onEnd(d.Z_OK), !(P.avail_out = 0));
      }, f.prototype.onData = function(c) {
        this.chunks.push(c);
      }, f.prototype.onEnd = function(c) {
        c === d.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = c, this.msg = this.strm.msg;
      }, r.Inflate = f, r.inflate = h, r.inflateRaw = function(c, g) {
        return (g = g || {}).raw = !0, h(c, g);
      }, r.ungzip = h;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, u, r) {
      var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      r.assign = function(d) {
        for (var _ = Array.prototype.slice.call(arguments, 1); _.length; ) {
          var x = _.shift();
          if (x) {
            if (typeof x != "object") throw new TypeError(x + "must be non-object");
            for (var v in x) x.hasOwnProperty(v) && (d[v] = x[v]);
          }
        }
        return d;
      }, r.shrinkBuf = function(d, _) {
        return d.length === _ ? d : d.subarray ? d.subarray(0, _) : (d.length = _, d);
      };
      var a = { arraySet: function(d, _, x, v, m) {
        if (_.subarray && d.subarray) d.set(_.subarray(x, x + v), m);
        else for (var f = 0; f < v; f++) d[m + f] = _[x + f];
      }, flattenChunks: function(d) {
        var _, x, v, m, f, h;
        for (_ = v = 0, x = d.length; _ < x; _++) v += d[_].length;
        for (h = new Uint8Array(v), _ = m = 0, x = d.length; _ < x; _++) f = d[_], h.set(f, m), m += f.length;
        return h;
      } }, s = { arraySet: function(d, _, x, v, m) {
        for (var f = 0; f < v; f++) d[m + f] = _[x + f];
      }, flattenChunks: function(d) {
        return [].concat.apply([], d);
      } };
      r.setTyped = function(d) {
        d ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, a)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
      }, r.setTyped(i);
    }, {}], 42: [function(e, u, r) {
      var i = e("./common"), a = !0, s = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        a = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        s = !1;
      }
      for (var d = new i.Buf8(256), _ = 0; _ < 256; _++) d[_] = 252 <= _ ? 6 : 248 <= _ ? 5 : 240 <= _ ? 4 : 224 <= _ ? 3 : 192 <= _ ? 2 : 1;
      function x(v, m) {
        if (m < 65537 && (v.subarray && s || !v.subarray && a)) return String.fromCharCode.apply(null, i.shrinkBuf(v, m));
        for (var f = "", h = 0; h < m; h++) f += String.fromCharCode(v[h]);
        return f;
      }
      d[254] = d[254] = 1, r.string2buf = function(v) {
        var m, f, h, c, g, p = v.length, w = 0;
        for (c = 0; c < p; c++) (64512 & (f = v.charCodeAt(c))) == 55296 && c + 1 < p && (64512 & (h = v.charCodeAt(c + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (h - 56320), c++), w += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
        for (m = new i.Buf8(w), c = g = 0; g < w; c++) (64512 & (f = v.charCodeAt(c))) == 55296 && c + 1 < p && (64512 & (h = v.charCodeAt(c + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (h - 56320), c++), f < 128 ? m[g++] = f : (f < 2048 ? m[g++] = 192 | f >>> 6 : (f < 65536 ? m[g++] = 224 | f >>> 12 : (m[g++] = 240 | f >>> 18, m[g++] = 128 | f >>> 12 & 63), m[g++] = 128 | f >>> 6 & 63), m[g++] = 128 | 63 & f);
        return m;
      }, r.buf2binstring = function(v) {
        return x(v, v.length);
      }, r.binstring2buf = function(v) {
        for (var m = new i.Buf8(v.length), f = 0, h = m.length; f < h; f++) m[f] = v.charCodeAt(f);
        return m;
      }, r.buf2string = function(v, m) {
        var f, h, c, g, p = m || v.length, w = new Array(2 * p);
        for (f = h = 0; f < p; ) if ((c = v[f++]) < 128) w[h++] = c;
        else if (4 < (g = d[c])) w[h++] = 65533, f += g - 1;
        else {
          for (c &= g === 2 ? 31 : g === 3 ? 15 : 7; 1 < g && f < p; ) c = c << 6 | 63 & v[f++], g--;
          1 < g ? w[h++] = 65533 : c < 65536 ? w[h++] = c : (c -= 65536, w[h++] = 55296 | c >> 10 & 1023, w[h++] = 56320 | 1023 & c);
        }
        return x(w, h);
      }, r.utf8border = function(v, m) {
        var f;
        for ((m = m || v.length) > v.length && (m = v.length), f = m - 1; 0 <= f && (192 & v[f]) == 128; ) f--;
        return f < 0 || f === 0 ? m : f + d[v[f]] > m ? f : m;
      };
    }, { "./common": 41 }], 43: [function(e, u, r) {
      u.exports = function(i, a, s, d) {
        for (var _ = 65535 & i | 0, x = i >>> 16 & 65535 | 0, v = 0; s !== 0; ) {
          for (s -= v = 2e3 < s ? 2e3 : s; x = x + (_ = _ + a[d++] | 0) | 0, --v; ) ;
          _ %= 65521, x %= 65521;
        }
        return _ | x << 16 | 0;
      };
    }, {}], 44: [function(e, u, r) {
      u.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(e, u, r) {
      var i = function() {
        for (var a, s = [], d = 0; d < 256; d++) {
          a = d;
          for (var _ = 0; _ < 8; _++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
          s[d] = a;
        }
        return s;
      }();
      u.exports = function(a, s, d, _) {
        var x = i, v = _ + d;
        a ^= -1;
        for (var m = _; m < v; m++) a = a >>> 8 ^ x[255 & (a ^ s[m])];
        return -1 ^ a;
      };
    }, {}], 46: [function(e, u, r) {
      var i, a = e("../utils/common"), s = e("./trees"), d = e("./adler32"), _ = e("./crc32"), x = e("./messages"), v = 0, m = 4, f = 0, h = -2, c = -1, g = 4, p = 2, w = 8, A = 9, L = 286, T = 30, F = 19, P = 2 * L + 1, W = 15, N = 3, q = 258, Y = q + N + 1, E = 42, I = 113, l = 1, j = 2, it = 3, D = 4;
      function ot(n, U) {
        return n.msg = x[U], U;
      }
      function H(n) {
        return (n << 1) - (4 < n ? 9 : 0);
      }
      function rt(n) {
        for (var U = n.length; 0 <= --U; ) n[U] = 0;
      }
      function R(n) {
        var U = n.state, O = U.pending;
        O > n.avail_out && (O = n.avail_out), O !== 0 && (a.arraySet(n.output, U.pending_buf, U.pending_out, O, n.next_out), n.next_out += O, U.pending_out += O, n.total_out += O, n.avail_out -= O, U.pending -= O, U.pending === 0 && (U.pending_out = 0));
      }
      function S(n, U) {
        s._tr_flush_block(n, 0 <= n.block_start ? n.block_start : -1, n.strstart - n.block_start, U), n.block_start = n.strstart, R(n.strm);
      }
      function X(n, U) {
        n.pending_buf[n.pending++] = U;
      }
      function B(n, U) {
        n.pending_buf[n.pending++] = U >>> 8 & 255, n.pending_buf[n.pending++] = 255 & U;
      }
      function $(n, U) {
        var O, k, y = n.max_chain_length, C = n.strstart, G = n.prev_length, Z = n.nice_match, M = n.strstart > n.w_size - Y ? n.strstart - (n.w_size - Y) : 0, J = n.window, et = n.w_mask, Q = n.prev, nt = n.strstart + q, pt = J[C + G - 1], ut = J[C + G];
        n.prev_length >= n.good_match && (y >>= 2), Z > n.lookahead && (Z = n.lookahead);
        do
          if (J[(O = U) + G] === ut && J[O + G - 1] === pt && J[O] === J[C] && J[++O] === J[C + 1]) {
            C += 2, O++;
            do
              ;
            while (J[++C] === J[++O] && J[++C] === J[++O] && J[++C] === J[++O] && J[++C] === J[++O] && J[++C] === J[++O] && J[++C] === J[++O] && J[++C] === J[++O] && J[++C] === J[++O] && C < nt);
            if (k = q - (nt - C), C = nt - q, G < k) {
              if (n.match_start = U, Z <= (G = k)) break;
              pt = J[C + G - 1], ut = J[C + G];
            }
          }
        while ((U = Q[U & et]) > M && --y != 0);
        return G <= n.lookahead ? G : n.lookahead;
      }
      function ct(n) {
        var U, O, k, y, C, G, Z, M, J, et, Q = n.w_size;
        do {
          if (y = n.window_size - n.lookahead - n.strstart, n.strstart >= Q + (Q - Y)) {
            for (a.arraySet(n.window, n.window, Q, Q, 0), n.match_start -= Q, n.strstart -= Q, n.block_start -= Q, U = O = n.hash_size; k = n.head[--U], n.head[U] = Q <= k ? k - Q : 0, --O; ) ;
            for (U = O = Q; k = n.prev[--U], n.prev[U] = Q <= k ? k - Q : 0, --O; ) ;
            y += Q;
          }
          if (n.strm.avail_in === 0) break;
          if (G = n.strm, Z = n.window, M = n.strstart + n.lookahead, J = y, et = void 0, et = G.avail_in, J < et && (et = J), O = et === 0 ? 0 : (G.avail_in -= et, a.arraySet(Z, G.input, G.next_in, et, M), G.state.wrap === 1 ? G.adler = d(G.adler, Z, et, M) : G.state.wrap === 2 && (G.adler = _(G.adler, Z, et, M)), G.next_in += et, G.total_in += et, et), n.lookahead += O, n.lookahead + n.insert >= N) for (C = n.strstart - n.insert, n.ins_h = n.window[C], n.ins_h = (n.ins_h << n.hash_shift ^ n.window[C + 1]) & n.hash_mask; n.insert && (n.ins_h = (n.ins_h << n.hash_shift ^ n.window[C + N - 1]) & n.hash_mask, n.prev[C & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = C, C++, n.insert--, !(n.lookahead + n.insert < N)); ) ;
        } while (n.lookahead < Y && n.strm.avail_in !== 0);
      }
      function lt(n, U) {
        for (var O, k; ; ) {
          if (n.lookahead < Y) {
            if (ct(n), n.lookahead < Y && U === v) return l;
            if (n.lookahead === 0) break;
          }
          if (O = 0, n.lookahead >= N && (n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + N - 1]) & n.hash_mask, O = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart), O !== 0 && n.strstart - O <= n.w_size - Y && (n.match_length = $(n, O)), n.match_length >= N) if (k = s._tr_tally(n, n.strstart - n.match_start, n.match_length - N), n.lookahead -= n.match_length, n.match_length <= n.max_lazy_match && n.lookahead >= N) {
            for (n.match_length--; n.strstart++, n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + N - 1]) & n.hash_mask, O = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart, --n.match_length != 0; ) ;
            n.strstart++;
          } else n.strstart += n.match_length, n.match_length = 0, n.ins_h = n.window[n.strstart], n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + 1]) & n.hash_mask;
          else k = s._tr_tally(n, 0, n.window[n.strstart]), n.lookahead--, n.strstart++;
          if (k && (S(n, !1), n.strm.avail_out === 0)) return l;
        }
        return n.insert = n.strstart < N - 1 ? n.strstart : N - 1, U === m ? (S(n, !0), n.strm.avail_out === 0 ? it : D) : n.last_lit && (S(n, !1), n.strm.avail_out === 0) ? l : j;
      }
      function st(n, U) {
        for (var O, k, y; ; ) {
          if (n.lookahead < Y) {
            if (ct(n), n.lookahead < Y && U === v) return l;
            if (n.lookahead === 0) break;
          }
          if (O = 0, n.lookahead >= N && (n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + N - 1]) & n.hash_mask, O = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart), n.prev_length = n.match_length, n.prev_match = n.match_start, n.match_length = N - 1, O !== 0 && n.prev_length < n.max_lazy_match && n.strstart - O <= n.w_size - Y && (n.match_length = $(n, O), n.match_length <= 5 && (n.strategy === 1 || n.match_length === N && 4096 < n.strstart - n.match_start) && (n.match_length = N - 1)), n.prev_length >= N && n.match_length <= n.prev_length) {
            for (y = n.strstart + n.lookahead - N, k = s._tr_tally(n, n.strstart - 1 - n.prev_match, n.prev_length - N), n.lookahead -= n.prev_length - 1, n.prev_length -= 2; ++n.strstart <= y && (n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + N - 1]) & n.hash_mask, O = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart), --n.prev_length != 0; ) ;
            if (n.match_available = 0, n.match_length = N - 1, n.strstart++, k && (S(n, !1), n.strm.avail_out === 0)) return l;
          } else if (n.match_available) {
            if ((k = s._tr_tally(n, 0, n.window[n.strstart - 1])) && S(n, !1), n.strstart++, n.lookahead--, n.strm.avail_out === 0) return l;
          } else n.match_available = 1, n.strstart++, n.lookahead--;
        }
        return n.match_available && (k = s._tr_tally(n, 0, n.window[n.strstart - 1]), n.match_available = 0), n.insert = n.strstart < N - 1 ? n.strstart : N - 1, U === m ? (S(n, !0), n.strm.avail_out === 0 ? it : D) : n.last_lit && (S(n, !1), n.strm.avail_out === 0) ? l : j;
      }
      function dt(n, U, O, k, y) {
        this.good_length = n, this.max_lazy = U, this.nice_length = O, this.max_chain = k, this.func = y;
      }
      function vt() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * P), this.dyn_dtree = new a.Buf16(2 * (2 * T + 1)), this.bl_tree = new a.Buf16(2 * (2 * F + 1)), rt(this.dyn_ltree), rt(this.dyn_dtree), rt(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(W + 1), this.heap = new a.Buf16(2 * L + 1), rt(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * L + 1), rt(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function _t(n) {
        var U;
        return n && n.state ? (n.total_in = n.total_out = 0, n.data_type = p, (U = n.state).pending = 0, U.pending_out = 0, U.wrap < 0 && (U.wrap = -U.wrap), U.status = U.wrap ? E : I, n.adler = U.wrap === 2 ? 0 : 1, U.last_flush = v, s._tr_init(U), f) : ot(n, h);
      }
      function It(n) {
        var U = _t(n);
        return U === f && function(O) {
          O.window_size = 2 * O.w_size, rt(O.head), O.max_lazy_match = i[O.level].max_lazy, O.good_match = i[O.level].good_length, O.nice_match = i[O.level].nice_length, O.max_chain_length = i[O.level].max_chain, O.strstart = 0, O.block_start = 0, O.lookahead = 0, O.insert = 0, O.match_length = O.prev_length = N - 1, O.match_available = 0, O.ins_h = 0;
        }(n.state), U;
      }
      function Lt(n, U, O, k, y, C) {
        if (!n) return h;
        var G = 1;
        if (U === c && (U = 6), k < 0 ? (G = 0, k = -k) : 15 < k && (G = 2, k -= 16), y < 1 || A < y || O !== w || k < 8 || 15 < k || U < 0 || 9 < U || C < 0 || g < C) return ot(n, h);
        k === 8 && (k = 9);
        var Z = new vt();
        return (n.state = Z).strm = n, Z.wrap = G, Z.gzhead = null, Z.w_bits = k, Z.w_size = 1 << Z.w_bits, Z.w_mask = Z.w_size - 1, Z.hash_bits = y + 7, Z.hash_size = 1 << Z.hash_bits, Z.hash_mask = Z.hash_size - 1, Z.hash_shift = ~~((Z.hash_bits + N - 1) / N), Z.window = new a.Buf8(2 * Z.w_size), Z.head = new a.Buf16(Z.hash_size), Z.prev = new a.Buf16(Z.w_size), Z.lit_bufsize = 1 << y + 6, Z.pending_buf_size = 4 * Z.lit_bufsize, Z.pending_buf = new a.Buf8(Z.pending_buf_size), Z.d_buf = 1 * Z.lit_bufsize, Z.l_buf = 3 * Z.lit_bufsize, Z.level = U, Z.strategy = C, Z.method = O, It(n);
      }
      i = [new dt(0, 0, 0, 0, function(n, U) {
        var O = 65535;
        for (O > n.pending_buf_size - 5 && (O = n.pending_buf_size - 5); ; ) {
          if (n.lookahead <= 1) {
            if (ct(n), n.lookahead === 0 && U === v) return l;
            if (n.lookahead === 0) break;
          }
          n.strstart += n.lookahead, n.lookahead = 0;
          var k = n.block_start + O;
          if ((n.strstart === 0 || n.strstart >= k) && (n.lookahead = n.strstart - k, n.strstart = k, S(n, !1), n.strm.avail_out === 0) || n.strstart - n.block_start >= n.w_size - Y && (S(n, !1), n.strm.avail_out === 0)) return l;
        }
        return n.insert = 0, U === m ? (S(n, !0), n.strm.avail_out === 0 ? it : D) : (n.strstart > n.block_start && (S(n, !1), n.strm.avail_out), l);
      }), new dt(4, 4, 8, 4, lt), new dt(4, 5, 16, 8, lt), new dt(4, 6, 32, 32, lt), new dt(4, 4, 16, 16, st), new dt(8, 16, 32, 32, st), new dt(8, 16, 128, 128, st), new dt(8, 32, 128, 256, st), new dt(32, 128, 258, 1024, st), new dt(32, 258, 258, 4096, st)], r.deflateInit = function(n, U) {
        return Lt(n, U, w, 15, 8, 0);
      }, r.deflateInit2 = Lt, r.deflateReset = It, r.deflateResetKeep = _t, r.deflateSetHeader = function(n, U) {
        return n && n.state ? n.state.wrap !== 2 ? h : (n.state.gzhead = U, f) : h;
      }, r.deflate = function(n, U) {
        var O, k, y, C;
        if (!n || !n.state || 5 < U || U < 0) return n ? ot(n, h) : h;
        if (k = n.state, !n.output || !n.input && n.avail_in !== 0 || k.status === 666 && U !== m) return ot(n, n.avail_out === 0 ? -5 : h);
        if (k.strm = n, O = k.last_flush, k.last_flush = U, k.status === E) if (k.wrap === 2) n.adler = 0, X(k, 31), X(k, 139), X(k, 8), k.gzhead ? (X(k, (k.gzhead.text ? 1 : 0) + (k.gzhead.hcrc ? 2 : 0) + (k.gzhead.extra ? 4 : 0) + (k.gzhead.name ? 8 : 0) + (k.gzhead.comment ? 16 : 0)), X(k, 255 & k.gzhead.time), X(k, k.gzhead.time >> 8 & 255), X(k, k.gzhead.time >> 16 & 255), X(k, k.gzhead.time >> 24 & 255), X(k, k.level === 9 ? 2 : 2 <= k.strategy || k.level < 2 ? 4 : 0), X(k, 255 & k.gzhead.os), k.gzhead.extra && k.gzhead.extra.length && (X(k, 255 & k.gzhead.extra.length), X(k, k.gzhead.extra.length >> 8 & 255)), k.gzhead.hcrc && (n.adler = _(n.adler, k.pending_buf, k.pending, 0)), k.gzindex = 0, k.status = 69) : (X(k, 0), X(k, 0), X(k, 0), X(k, 0), X(k, 0), X(k, k.level === 9 ? 2 : 2 <= k.strategy || k.level < 2 ? 4 : 0), X(k, 3), k.status = I);
        else {
          var G = w + (k.w_bits - 8 << 4) << 8;
          G |= (2 <= k.strategy || k.level < 2 ? 0 : k.level < 6 ? 1 : k.level === 6 ? 2 : 3) << 6, k.strstart !== 0 && (G |= 32), G += 31 - G % 31, k.status = I, B(k, G), k.strstart !== 0 && (B(k, n.adler >>> 16), B(k, 65535 & n.adler)), n.adler = 1;
        }
        if (k.status === 69) if (k.gzhead.extra) {
          for (y = k.pending; k.gzindex < (65535 & k.gzhead.extra.length) && (k.pending !== k.pending_buf_size || (k.gzhead.hcrc && k.pending > y && (n.adler = _(n.adler, k.pending_buf, k.pending - y, y)), R(n), y = k.pending, k.pending !== k.pending_buf_size)); ) X(k, 255 & k.gzhead.extra[k.gzindex]), k.gzindex++;
          k.gzhead.hcrc && k.pending > y && (n.adler = _(n.adler, k.pending_buf, k.pending - y, y)), k.gzindex === k.gzhead.extra.length && (k.gzindex = 0, k.status = 73);
        } else k.status = 73;
        if (k.status === 73) if (k.gzhead.name) {
          y = k.pending;
          do {
            if (k.pending === k.pending_buf_size && (k.gzhead.hcrc && k.pending > y && (n.adler = _(n.adler, k.pending_buf, k.pending - y, y)), R(n), y = k.pending, k.pending === k.pending_buf_size)) {
              C = 1;
              break;
            }
            C = k.gzindex < k.gzhead.name.length ? 255 & k.gzhead.name.charCodeAt(k.gzindex++) : 0, X(k, C);
          } while (C !== 0);
          k.gzhead.hcrc && k.pending > y && (n.adler = _(n.adler, k.pending_buf, k.pending - y, y)), C === 0 && (k.gzindex = 0, k.status = 91);
        } else k.status = 91;
        if (k.status === 91) if (k.gzhead.comment) {
          y = k.pending;
          do {
            if (k.pending === k.pending_buf_size && (k.gzhead.hcrc && k.pending > y && (n.adler = _(n.adler, k.pending_buf, k.pending - y, y)), R(n), y = k.pending, k.pending === k.pending_buf_size)) {
              C = 1;
              break;
            }
            C = k.gzindex < k.gzhead.comment.length ? 255 & k.gzhead.comment.charCodeAt(k.gzindex++) : 0, X(k, C);
          } while (C !== 0);
          k.gzhead.hcrc && k.pending > y && (n.adler = _(n.adler, k.pending_buf, k.pending - y, y)), C === 0 && (k.status = 103);
        } else k.status = 103;
        if (k.status === 103 && (k.gzhead.hcrc ? (k.pending + 2 > k.pending_buf_size && R(n), k.pending + 2 <= k.pending_buf_size && (X(k, 255 & n.adler), X(k, n.adler >> 8 & 255), n.adler = 0, k.status = I)) : k.status = I), k.pending !== 0) {
          if (R(n), n.avail_out === 0) return k.last_flush = -1, f;
        } else if (n.avail_in === 0 && H(U) <= H(O) && U !== m) return ot(n, -5);
        if (k.status === 666 && n.avail_in !== 0) return ot(n, -5);
        if (n.avail_in !== 0 || k.lookahead !== 0 || U !== v && k.status !== 666) {
          var Z = k.strategy === 2 ? function(M, J) {
            for (var et; ; ) {
              if (M.lookahead === 0 && (ct(M), M.lookahead === 0)) {
                if (J === v) return l;
                break;
              }
              if (M.match_length = 0, et = s._tr_tally(M, 0, M.window[M.strstart]), M.lookahead--, M.strstart++, et && (S(M, !1), M.strm.avail_out === 0)) return l;
            }
            return M.insert = 0, J === m ? (S(M, !0), M.strm.avail_out === 0 ? it : D) : M.last_lit && (S(M, !1), M.strm.avail_out === 0) ? l : j;
          }(k, U) : k.strategy === 3 ? function(M, J) {
            for (var et, Q, nt, pt, ut = M.window; ; ) {
              if (M.lookahead <= q) {
                if (ct(M), M.lookahead <= q && J === v) return l;
                if (M.lookahead === 0) break;
              }
              if (M.match_length = 0, M.lookahead >= N && 0 < M.strstart && (Q = ut[nt = M.strstart - 1]) === ut[++nt] && Q === ut[++nt] && Q === ut[++nt]) {
                pt = M.strstart + q;
                do
                  ;
                while (Q === ut[++nt] && Q === ut[++nt] && Q === ut[++nt] && Q === ut[++nt] && Q === ut[++nt] && Q === ut[++nt] && Q === ut[++nt] && Q === ut[++nt] && nt < pt);
                M.match_length = q - (pt - nt), M.match_length > M.lookahead && (M.match_length = M.lookahead);
              }
              if (M.match_length >= N ? (et = s._tr_tally(M, 1, M.match_length - N), M.lookahead -= M.match_length, M.strstart += M.match_length, M.match_length = 0) : (et = s._tr_tally(M, 0, M.window[M.strstart]), M.lookahead--, M.strstart++), et && (S(M, !1), M.strm.avail_out === 0)) return l;
            }
            return M.insert = 0, J === m ? (S(M, !0), M.strm.avail_out === 0 ? it : D) : M.last_lit && (S(M, !1), M.strm.avail_out === 0) ? l : j;
          }(k, U) : i[k.level].func(k, U);
          if (Z !== it && Z !== D || (k.status = 666), Z === l || Z === it) return n.avail_out === 0 && (k.last_flush = -1), f;
          if (Z === j && (U === 1 ? s._tr_align(k) : U !== 5 && (s._tr_stored_block(k, 0, 0, !1), U === 3 && (rt(k.head), k.lookahead === 0 && (k.strstart = 0, k.block_start = 0, k.insert = 0))), R(n), n.avail_out === 0)) return k.last_flush = -1, f;
        }
        return U !== m ? f : k.wrap <= 0 ? 1 : (k.wrap === 2 ? (X(k, 255 & n.adler), X(k, n.adler >> 8 & 255), X(k, n.adler >> 16 & 255), X(k, n.adler >> 24 & 255), X(k, 255 & n.total_in), X(k, n.total_in >> 8 & 255), X(k, n.total_in >> 16 & 255), X(k, n.total_in >> 24 & 255)) : (B(k, n.adler >>> 16), B(k, 65535 & n.adler)), R(n), 0 < k.wrap && (k.wrap = -k.wrap), k.pending !== 0 ? f : 1);
      }, r.deflateEnd = function(n) {
        var U;
        return n && n.state ? (U = n.state.status) !== E && U !== 69 && U !== 73 && U !== 91 && U !== 103 && U !== I && U !== 666 ? ot(n, h) : (n.state = null, U === I ? ot(n, -3) : f) : h;
      }, r.deflateSetDictionary = function(n, U) {
        var O, k, y, C, G, Z, M, J, et = U.length;
        if (!n || !n.state || (C = (O = n.state).wrap) === 2 || C === 1 && O.status !== E || O.lookahead) return h;
        for (C === 1 && (n.adler = d(n.adler, U, et, 0)), O.wrap = 0, et >= O.w_size && (C === 0 && (rt(O.head), O.strstart = 0, O.block_start = 0, O.insert = 0), J = new a.Buf8(O.w_size), a.arraySet(J, U, et - O.w_size, O.w_size, 0), U = J, et = O.w_size), G = n.avail_in, Z = n.next_in, M = n.input, n.avail_in = et, n.next_in = 0, n.input = U, ct(O); O.lookahead >= N; ) {
          for (k = O.strstart, y = O.lookahead - (N - 1); O.ins_h = (O.ins_h << O.hash_shift ^ O.window[k + N - 1]) & O.hash_mask, O.prev[k & O.w_mask] = O.head[O.ins_h], O.head[O.ins_h] = k, k++, --y; ) ;
          O.strstart = k, O.lookahead = N - 1, ct(O);
        }
        return O.strstart += O.lookahead, O.block_start = O.strstart, O.insert = O.lookahead, O.lookahead = 0, O.match_length = O.prev_length = N - 1, O.match_available = 0, n.next_in = Z, n.input = M, n.avail_in = G, O.wrap = C, f;
      }, r.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, u, r) {
      u.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(e, u, r) {
      u.exports = function(i, a) {
        var s, d, _, x, v, m, f, h, c, g, p, w, A, L, T, F, P, W, N, q, Y, E, I, l, j;
        s = i.state, d = i.next_in, l = i.input, _ = d + (i.avail_in - 5), x = i.next_out, j = i.output, v = x - (a - i.avail_out), m = x + (i.avail_out - 257), f = s.dmax, h = s.wsize, c = s.whave, g = s.wnext, p = s.window, w = s.hold, A = s.bits, L = s.lencode, T = s.distcode, F = (1 << s.lenbits) - 1, P = (1 << s.distbits) - 1;
        t: do {
          A < 15 && (w += l[d++] << A, A += 8, w += l[d++] << A, A += 8), W = L[w & F];
          e: for (; ; ) {
            if (w >>>= N = W >>> 24, A -= N, (N = W >>> 16 & 255) === 0) j[x++] = 65535 & W;
            else {
              if (!(16 & N)) {
                if (!(64 & N)) {
                  W = L[(65535 & W) + (w & (1 << N) - 1)];
                  continue e;
                }
                if (32 & N) {
                  s.mode = 12;
                  break t;
                }
                i.msg = "invalid literal/length code", s.mode = 30;
                break t;
              }
              q = 65535 & W, (N &= 15) && (A < N && (w += l[d++] << A, A += 8), q += w & (1 << N) - 1, w >>>= N, A -= N), A < 15 && (w += l[d++] << A, A += 8, w += l[d++] << A, A += 8), W = T[w & P];
              n: for (; ; ) {
                if (w >>>= N = W >>> 24, A -= N, !(16 & (N = W >>> 16 & 255))) {
                  if (!(64 & N)) {
                    W = T[(65535 & W) + (w & (1 << N) - 1)];
                    continue n;
                  }
                  i.msg = "invalid distance code", s.mode = 30;
                  break t;
                }
                if (Y = 65535 & W, A < (N &= 15) && (w += l[d++] << A, (A += 8) < N && (w += l[d++] << A, A += 8)), f < (Y += w & (1 << N) - 1)) {
                  i.msg = "invalid distance too far back", s.mode = 30;
                  break t;
                }
                if (w >>>= N, A -= N, (N = x - v) < Y) {
                  if (c < (N = Y - N) && s.sane) {
                    i.msg = "invalid distance too far back", s.mode = 30;
                    break t;
                  }
                  if (I = p, (E = 0) === g) {
                    if (E += h - N, N < q) {
                      for (q -= N; j[x++] = p[E++], --N; ) ;
                      E = x - Y, I = j;
                    }
                  } else if (g < N) {
                    if (E += h + g - N, (N -= g) < q) {
                      for (q -= N; j[x++] = p[E++], --N; ) ;
                      if (E = 0, g < q) {
                        for (q -= N = g; j[x++] = p[E++], --N; ) ;
                        E = x - Y, I = j;
                      }
                    }
                  } else if (E += g - N, N < q) {
                    for (q -= N; j[x++] = p[E++], --N; ) ;
                    E = x - Y, I = j;
                  }
                  for (; 2 < q; ) j[x++] = I[E++], j[x++] = I[E++], j[x++] = I[E++], q -= 3;
                  q && (j[x++] = I[E++], 1 < q && (j[x++] = I[E++]));
                } else {
                  for (E = x - Y; j[x++] = j[E++], j[x++] = j[E++], j[x++] = j[E++], 2 < (q -= 3); ) ;
                  q && (j[x++] = j[E++], 1 < q && (j[x++] = j[E++]));
                }
                break;
              }
            }
            break;
          }
        } while (d < _ && x < m);
        d -= q = A >> 3, w &= (1 << (A -= q << 3)) - 1, i.next_in = d, i.next_out = x, i.avail_in = d < _ ? _ - d + 5 : 5 - (d - _), i.avail_out = x < m ? m - x + 257 : 257 - (x - m), s.hold = w, s.bits = A;
      };
    }, {}], 49: [function(e, u, r) {
      var i = e("../utils/common"), a = e("./adler32"), s = e("./crc32"), d = e("./inffast"), _ = e("./inftrees"), x = 1, v = 2, m = 0, f = -2, h = 1, c = 852, g = 592;
      function p(E) {
        return (E >>> 24 & 255) + (E >>> 8 & 65280) + ((65280 & E) << 8) + ((255 & E) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new i.Buf16(320), this.work = new i.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function A(E) {
        var I;
        return E && E.state ? (I = E.state, E.total_in = E.total_out = I.total = 0, E.msg = "", I.wrap && (E.adler = 1 & I.wrap), I.mode = h, I.last = 0, I.havedict = 0, I.dmax = 32768, I.head = null, I.hold = 0, I.bits = 0, I.lencode = I.lendyn = new i.Buf32(c), I.distcode = I.distdyn = new i.Buf32(g), I.sane = 1, I.back = -1, m) : f;
      }
      function L(E) {
        var I;
        return E && E.state ? ((I = E.state).wsize = 0, I.whave = 0, I.wnext = 0, A(E)) : f;
      }
      function T(E, I) {
        var l, j;
        return E && E.state ? (j = E.state, I < 0 ? (l = 0, I = -I) : (l = 1 + (I >> 4), I < 48 && (I &= 15)), I && (I < 8 || 15 < I) ? f : (j.window !== null && j.wbits !== I && (j.window = null), j.wrap = l, j.wbits = I, L(E))) : f;
      }
      function F(E, I) {
        var l, j;
        return E ? (j = new w(), (E.state = j).window = null, (l = T(E, I)) !== m && (E.state = null), l) : f;
      }
      var P, W, N = !0;
      function q(E) {
        if (N) {
          var I;
          for (P = new i.Buf32(512), W = new i.Buf32(32), I = 0; I < 144; ) E.lens[I++] = 8;
          for (; I < 256; ) E.lens[I++] = 9;
          for (; I < 280; ) E.lens[I++] = 7;
          for (; I < 288; ) E.lens[I++] = 8;
          for (_(x, E.lens, 0, 288, P, 0, E.work, { bits: 9 }), I = 0; I < 32; ) E.lens[I++] = 5;
          _(v, E.lens, 0, 32, W, 0, E.work, { bits: 5 }), N = !1;
        }
        E.lencode = P, E.lenbits = 9, E.distcode = W, E.distbits = 5;
      }
      function Y(E, I, l, j) {
        var it, D = E.state;
        return D.window === null && (D.wsize = 1 << D.wbits, D.wnext = 0, D.whave = 0, D.window = new i.Buf8(D.wsize)), j >= D.wsize ? (i.arraySet(D.window, I, l - D.wsize, D.wsize, 0), D.wnext = 0, D.whave = D.wsize) : (j < (it = D.wsize - D.wnext) && (it = j), i.arraySet(D.window, I, l - j, it, D.wnext), (j -= it) ? (i.arraySet(D.window, I, l - j, j, 0), D.wnext = j, D.whave = D.wsize) : (D.wnext += it, D.wnext === D.wsize && (D.wnext = 0), D.whave < D.wsize && (D.whave += it))), 0;
      }
      r.inflateReset = L, r.inflateReset2 = T, r.inflateResetKeep = A, r.inflateInit = function(E) {
        return F(E, 15);
      }, r.inflateInit2 = F, r.inflate = function(E, I) {
        var l, j, it, D, ot, H, rt, R, S, X, B, $, ct, lt, st, dt, vt, _t, It, Lt, n, U, O, k, y = 0, C = new i.Buf8(4), G = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!E || !E.state || !E.output || !E.input && E.avail_in !== 0) return f;
        (l = E.state).mode === 12 && (l.mode = 13), ot = E.next_out, it = E.output, rt = E.avail_out, D = E.next_in, j = E.input, H = E.avail_in, R = l.hold, S = l.bits, X = H, B = rt, U = m;
        t: for (; ; ) switch (l.mode) {
          case h:
            if (l.wrap === 0) {
              l.mode = 13;
              break;
            }
            for (; S < 16; ) {
              if (H === 0) break t;
              H--, R += j[D++] << S, S += 8;
            }
            if (2 & l.wrap && R === 35615) {
              C[l.check = 0] = 255 & R, C[1] = R >>> 8 & 255, l.check = s(l.check, C, 2, 0), S = R = 0, l.mode = 2;
              break;
            }
            if (l.flags = 0, l.head && (l.head.done = !1), !(1 & l.wrap) || (((255 & R) << 8) + (R >> 8)) % 31) {
              E.msg = "incorrect header check", l.mode = 30;
              break;
            }
            if ((15 & R) != 8) {
              E.msg = "unknown compression method", l.mode = 30;
              break;
            }
            if (S -= 4, n = 8 + (15 & (R >>>= 4)), l.wbits === 0) l.wbits = n;
            else if (n > l.wbits) {
              E.msg = "invalid window size", l.mode = 30;
              break;
            }
            l.dmax = 1 << n, E.adler = l.check = 1, l.mode = 512 & R ? 10 : 12, S = R = 0;
            break;
          case 2:
            for (; S < 16; ) {
              if (H === 0) break t;
              H--, R += j[D++] << S, S += 8;
            }
            if (l.flags = R, (255 & l.flags) != 8) {
              E.msg = "unknown compression method", l.mode = 30;
              break;
            }
            if (57344 & l.flags) {
              E.msg = "unknown header flags set", l.mode = 30;
              break;
            }
            l.head && (l.head.text = R >> 8 & 1), 512 & l.flags && (C[0] = 255 & R, C[1] = R >>> 8 & 255, l.check = s(l.check, C, 2, 0)), S = R = 0, l.mode = 3;
          case 3:
            for (; S < 32; ) {
              if (H === 0) break t;
              H--, R += j[D++] << S, S += 8;
            }
            l.head && (l.head.time = R), 512 & l.flags && (C[0] = 255 & R, C[1] = R >>> 8 & 255, C[2] = R >>> 16 & 255, C[3] = R >>> 24 & 255, l.check = s(l.check, C, 4, 0)), S = R = 0, l.mode = 4;
          case 4:
            for (; S < 16; ) {
              if (H === 0) break t;
              H--, R += j[D++] << S, S += 8;
            }
            l.head && (l.head.xflags = 255 & R, l.head.os = R >> 8), 512 & l.flags && (C[0] = 255 & R, C[1] = R >>> 8 & 255, l.check = s(l.check, C, 2, 0)), S = R = 0, l.mode = 5;
          case 5:
            if (1024 & l.flags) {
              for (; S < 16; ) {
                if (H === 0) break t;
                H--, R += j[D++] << S, S += 8;
              }
              l.length = R, l.head && (l.head.extra_len = R), 512 & l.flags && (C[0] = 255 & R, C[1] = R >>> 8 & 255, l.check = s(l.check, C, 2, 0)), S = R = 0;
            } else l.head && (l.head.extra = null);
            l.mode = 6;
          case 6:
            if (1024 & l.flags && (H < ($ = l.length) && ($ = H), $ && (l.head && (n = l.head.extra_len - l.length, l.head.extra || (l.head.extra = new Array(l.head.extra_len)), i.arraySet(l.head.extra, j, D, $, n)), 512 & l.flags && (l.check = s(l.check, j, $, D)), H -= $, D += $, l.length -= $), l.length)) break t;
            l.length = 0, l.mode = 7;
          case 7:
            if (2048 & l.flags) {
              if (H === 0) break t;
              for ($ = 0; n = j[D + $++], l.head && n && l.length < 65536 && (l.head.name += String.fromCharCode(n)), n && $ < H; ) ;
              if (512 & l.flags && (l.check = s(l.check, j, $, D)), H -= $, D += $, n) break t;
            } else l.head && (l.head.name = null);
            l.length = 0, l.mode = 8;
          case 8:
            if (4096 & l.flags) {
              if (H === 0) break t;
              for ($ = 0; n = j[D + $++], l.head && n && l.length < 65536 && (l.head.comment += String.fromCharCode(n)), n && $ < H; ) ;
              if (512 & l.flags && (l.check = s(l.check, j, $, D)), H -= $, D += $, n) break t;
            } else l.head && (l.head.comment = null);
            l.mode = 9;
          case 9:
            if (512 & l.flags) {
              for (; S < 16; ) {
                if (H === 0) break t;
                H--, R += j[D++] << S, S += 8;
              }
              if (R !== (65535 & l.check)) {
                E.msg = "header crc mismatch", l.mode = 30;
                break;
              }
              S = R = 0;
            }
            l.head && (l.head.hcrc = l.flags >> 9 & 1, l.head.done = !0), E.adler = l.check = 0, l.mode = 12;
            break;
          case 10:
            for (; S < 32; ) {
              if (H === 0) break t;
              H--, R += j[D++] << S, S += 8;
            }
            E.adler = l.check = p(R), S = R = 0, l.mode = 11;
          case 11:
            if (l.havedict === 0) return E.next_out = ot, E.avail_out = rt, E.next_in = D, E.avail_in = H, l.hold = R, l.bits = S, 2;
            E.adler = l.check = 1, l.mode = 12;
          case 12:
            if (I === 5 || I === 6) break t;
          case 13:
            if (l.last) {
              R >>>= 7 & S, S -= 7 & S, l.mode = 27;
              break;
            }
            for (; S < 3; ) {
              if (H === 0) break t;
              H--, R += j[D++] << S, S += 8;
            }
            switch (l.last = 1 & R, S -= 1, 3 & (R >>>= 1)) {
              case 0:
                l.mode = 14;
                break;
              case 1:
                if (q(l), l.mode = 20, I !== 6) break;
                R >>>= 2, S -= 2;
                break t;
              case 2:
                l.mode = 17;
                break;
              case 3:
                E.msg = "invalid block type", l.mode = 30;
            }
            R >>>= 2, S -= 2;
            break;
          case 14:
            for (R >>>= 7 & S, S -= 7 & S; S < 32; ) {
              if (H === 0) break t;
              H--, R += j[D++] << S, S += 8;
            }
            if ((65535 & R) != (R >>> 16 ^ 65535)) {
              E.msg = "invalid stored block lengths", l.mode = 30;
              break;
            }
            if (l.length = 65535 & R, S = R = 0, l.mode = 15, I === 6) break t;
          case 15:
            l.mode = 16;
          case 16:
            if ($ = l.length) {
              if (H < $ && ($ = H), rt < $ && ($ = rt), $ === 0) break t;
              i.arraySet(it, j, D, $, ot), H -= $, D += $, rt -= $, ot += $, l.length -= $;
              break;
            }
            l.mode = 12;
            break;
          case 17:
            for (; S < 14; ) {
              if (H === 0) break t;
              H--, R += j[D++] << S, S += 8;
            }
            if (l.nlen = 257 + (31 & R), R >>>= 5, S -= 5, l.ndist = 1 + (31 & R), R >>>= 5, S -= 5, l.ncode = 4 + (15 & R), R >>>= 4, S -= 4, 286 < l.nlen || 30 < l.ndist) {
              E.msg = "too many length or distance symbols", l.mode = 30;
              break;
            }
            l.have = 0, l.mode = 18;
          case 18:
            for (; l.have < l.ncode; ) {
              for (; S < 3; ) {
                if (H === 0) break t;
                H--, R += j[D++] << S, S += 8;
              }
              l.lens[G[l.have++]] = 7 & R, R >>>= 3, S -= 3;
            }
            for (; l.have < 19; ) l.lens[G[l.have++]] = 0;
            if (l.lencode = l.lendyn, l.lenbits = 7, O = { bits: l.lenbits }, U = _(0, l.lens, 0, 19, l.lencode, 0, l.work, O), l.lenbits = O.bits, U) {
              E.msg = "invalid code lengths set", l.mode = 30;
              break;
            }
            l.have = 0, l.mode = 19;
          case 19:
            for (; l.have < l.nlen + l.ndist; ) {
              for (; dt = (y = l.lencode[R & (1 << l.lenbits) - 1]) >>> 16 & 255, vt = 65535 & y, !((st = y >>> 24) <= S); ) {
                if (H === 0) break t;
                H--, R += j[D++] << S, S += 8;
              }
              if (vt < 16) R >>>= st, S -= st, l.lens[l.have++] = vt;
              else {
                if (vt === 16) {
                  for (k = st + 2; S < k; ) {
                    if (H === 0) break t;
                    H--, R += j[D++] << S, S += 8;
                  }
                  if (R >>>= st, S -= st, l.have === 0) {
                    E.msg = "invalid bit length repeat", l.mode = 30;
                    break;
                  }
                  n = l.lens[l.have - 1], $ = 3 + (3 & R), R >>>= 2, S -= 2;
                } else if (vt === 17) {
                  for (k = st + 3; S < k; ) {
                    if (H === 0) break t;
                    H--, R += j[D++] << S, S += 8;
                  }
                  S -= st, n = 0, $ = 3 + (7 & (R >>>= st)), R >>>= 3, S -= 3;
                } else {
                  for (k = st + 7; S < k; ) {
                    if (H === 0) break t;
                    H--, R += j[D++] << S, S += 8;
                  }
                  S -= st, n = 0, $ = 11 + (127 & (R >>>= st)), R >>>= 7, S -= 7;
                }
                if (l.have + $ > l.nlen + l.ndist) {
                  E.msg = "invalid bit length repeat", l.mode = 30;
                  break;
                }
                for (; $--; ) l.lens[l.have++] = n;
              }
            }
            if (l.mode === 30) break;
            if (l.lens[256] === 0) {
              E.msg = "invalid code -- missing end-of-block", l.mode = 30;
              break;
            }
            if (l.lenbits = 9, O = { bits: l.lenbits }, U = _(x, l.lens, 0, l.nlen, l.lencode, 0, l.work, O), l.lenbits = O.bits, U) {
              E.msg = "invalid literal/lengths set", l.mode = 30;
              break;
            }
            if (l.distbits = 6, l.distcode = l.distdyn, O = { bits: l.distbits }, U = _(v, l.lens, l.nlen, l.ndist, l.distcode, 0, l.work, O), l.distbits = O.bits, U) {
              E.msg = "invalid distances set", l.mode = 30;
              break;
            }
            if (l.mode = 20, I === 6) break t;
          case 20:
            l.mode = 21;
          case 21:
            if (6 <= H && 258 <= rt) {
              E.next_out = ot, E.avail_out = rt, E.next_in = D, E.avail_in = H, l.hold = R, l.bits = S, d(E, B), ot = E.next_out, it = E.output, rt = E.avail_out, D = E.next_in, j = E.input, H = E.avail_in, R = l.hold, S = l.bits, l.mode === 12 && (l.back = -1);
              break;
            }
            for (l.back = 0; dt = (y = l.lencode[R & (1 << l.lenbits) - 1]) >>> 16 & 255, vt = 65535 & y, !((st = y >>> 24) <= S); ) {
              if (H === 0) break t;
              H--, R += j[D++] << S, S += 8;
            }
            if (dt && !(240 & dt)) {
              for (_t = st, It = dt, Lt = vt; dt = (y = l.lencode[Lt + ((R & (1 << _t + It) - 1) >> _t)]) >>> 16 & 255, vt = 65535 & y, !(_t + (st = y >>> 24) <= S); ) {
                if (H === 0) break t;
                H--, R += j[D++] << S, S += 8;
              }
              R >>>= _t, S -= _t, l.back += _t;
            }
            if (R >>>= st, S -= st, l.back += st, l.length = vt, dt === 0) {
              l.mode = 26;
              break;
            }
            if (32 & dt) {
              l.back = -1, l.mode = 12;
              break;
            }
            if (64 & dt) {
              E.msg = "invalid literal/length code", l.mode = 30;
              break;
            }
            l.extra = 15 & dt, l.mode = 22;
          case 22:
            if (l.extra) {
              for (k = l.extra; S < k; ) {
                if (H === 0) break t;
                H--, R += j[D++] << S, S += 8;
              }
              l.length += R & (1 << l.extra) - 1, R >>>= l.extra, S -= l.extra, l.back += l.extra;
            }
            l.was = l.length, l.mode = 23;
          case 23:
            for (; dt = (y = l.distcode[R & (1 << l.distbits) - 1]) >>> 16 & 255, vt = 65535 & y, !((st = y >>> 24) <= S); ) {
              if (H === 0) break t;
              H--, R += j[D++] << S, S += 8;
            }
            if (!(240 & dt)) {
              for (_t = st, It = dt, Lt = vt; dt = (y = l.distcode[Lt + ((R & (1 << _t + It) - 1) >> _t)]) >>> 16 & 255, vt = 65535 & y, !(_t + (st = y >>> 24) <= S); ) {
                if (H === 0) break t;
                H--, R += j[D++] << S, S += 8;
              }
              R >>>= _t, S -= _t, l.back += _t;
            }
            if (R >>>= st, S -= st, l.back += st, 64 & dt) {
              E.msg = "invalid distance code", l.mode = 30;
              break;
            }
            l.offset = vt, l.extra = 15 & dt, l.mode = 24;
          case 24:
            if (l.extra) {
              for (k = l.extra; S < k; ) {
                if (H === 0) break t;
                H--, R += j[D++] << S, S += 8;
              }
              l.offset += R & (1 << l.extra) - 1, R >>>= l.extra, S -= l.extra, l.back += l.extra;
            }
            if (l.offset > l.dmax) {
              E.msg = "invalid distance too far back", l.mode = 30;
              break;
            }
            l.mode = 25;
          case 25:
            if (rt === 0) break t;
            if ($ = B - rt, l.offset > $) {
              if (($ = l.offset - $) > l.whave && l.sane) {
                E.msg = "invalid distance too far back", l.mode = 30;
                break;
              }
              ct = $ > l.wnext ? ($ -= l.wnext, l.wsize - $) : l.wnext - $, $ > l.length && ($ = l.length), lt = l.window;
            } else lt = it, ct = ot - l.offset, $ = l.length;
            for (rt < $ && ($ = rt), rt -= $, l.length -= $; it[ot++] = lt[ct++], --$; ) ;
            l.length === 0 && (l.mode = 21);
            break;
          case 26:
            if (rt === 0) break t;
            it[ot++] = l.length, rt--, l.mode = 21;
            break;
          case 27:
            if (l.wrap) {
              for (; S < 32; ) {
                if (H === 0) break t;
                H--, R |= j[D++] << S, S += 8;
              }
              if (B -= rt, E.total_out += B, l.total += B, B && (E.adler = l.check = l.flags ? s(l.check, it, B, ot - B) : a(l.check, it, B, ot - B)), B = rt, (l.flags ? R : p(R)) !== l.check) {
                E.msg = "incorrect data check", l.mode = 30;
                break;
              }
              S = R = 0;
            }
            l.mode = 28;
          case 28:
            if (l.wrap && l.flags) {
              for (; S < 32; ) {
                if (H === 0) break t;
                H--, R += j[D++] << S, S += 8;
              }
              if (R !== (4294967295 & l.total)) {
                E.msg = "incorrect length check", l.mode = 30;
                break;
              }
              S = R = 0;
            }
            l.mode = 29;
          case 29:
            U = 1;
            break t;
          case 30:
            U = -3;
            break t;
          case 31:
            return -4;
          case 32:
          default:
            return f;
        }
        return E.next_out = ot, E.avail_out = rt, E.next_in = D, E.avail_in = H, l.hold = R, l.bits = S, (l.wsize || B !== E.avail_out && l.mode < 30 && (l.mode < 27 || I !== 4)) && Y(E, E.output, E.next_out, B - E.avail_out) ? (l.mode = 31, -4) : (X -= E.avail_in, B -= E.avail_out, E.total_in += X, E.total_out += B, l.total += B, l.wrap && B && (E.adler = l.check = l.flags ? s(l.check, it, B, E.next_out - B) : a(l.check, it, B, E.next_out - B)), E.data_type = l.bits + (l.last ? 64 : 0) + (l.mode === 12 ? 128 : 0) + (l.mode === 20 || l.mode === 15 ? 256 : 0), (X == 0 && B === 0 || I === 4) && U === m && (U = -5), U);
      }, r.inflateEnd = function(E) {
        if (!E || !E.state) return f;
        var I = E.state;
        return I.window && (I.window = null), E.state = null, m;
      }, r.inflateGetHeader = function(E, I) {
        var l;
        return E && E.state && 2 & (l = E.state).wrap ? ((l.head = I).done = !1, m) : f;
      }, r.inflateSetDictionary = function(E, I) {
        var l, j = I.length;
        return E && E.state ? (l = E.state).wrap !== 0 && l.mode !== 11 ? f : l.mode === 11 && a(1, I, j, 0) !== l.check ? -3 : Y(E, I, j, j) ? (l.mode = 31, -4) : (l.havedict = 1, m) : f;
      }, r.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, u, r) {
      var i = e("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], s = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], d = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], _ = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      u.exports = function(x, v, m, f, h, c, g, p) {
        var w, A, L, T, F, P, W, N, q, Y = p.bits, E = 0, I = 0, l = 0, j = 0, it = 0, D = 0, ot = 0, H = 0, rt = 0, R = 0, S = null, X = 0, B = new i.Buf16(16), $ = new i.Buf16(16), ct = null, lt = 0;
        for (E = 0; E <= 15; E++) B[E] = 0;
        for (I = 0; I < f; I++) B[v[m + I]]++;
        for (it = Y, j = 15; 1 <= j && B[j] === 0; j--) ;
        if (j < it && (it = j), j === 0) return h[c++] = 20971520, h[c++] = 20971520, p.bits = 1, 0;
        for (l = 1; l < j && B[l] === 0; l++) ;
        for (it < l && (it = l), E = H = 1; E <= 15; E++) if (H <<= 1, (H -= B[E]) < 0) return -1;
        if (0 < H && (x === 0 || j !== 1)) return -1;
        for ($[1] = 0, E = 1; E < 15; E++) $[E + 1] = $[E] + B[E];
        for (I = 0; I < f; I++) v[m + I] !== 0 && (g[$[v[m + I]]++] = I);
        if (P = x === 0 ? (S = ct = g, 19) : x === 1 ? (S = a, X -= 257, ct = s, lt -= 257, 256) : (S = d, ct = _, -1), E = l, F = c, ot = I = R = 0, L = -1, T = (rt = 1 << (D = it)) - 1, x === 1 && 852 < rt || x === 2 && 592 < rt) return 1;
        for (; ; ) {
          for (W = E - ot, q = g[I] < P ? (N = 0, g[I]) : g[I] > P ? (N = ct[lt + g[I]], S[X + g[I]]) : (N = 96, 0), w = 1 << E - ot, l = A = 1 << D; h[F + (R >> ot) + (A -= w)] = W << 24 | N << 16 | q | 0, A !== 0; ) ;
          for (w = 1 << E - 1; R & w; ) w >>= 1;
          if (w !== 0 ? (R &= w - 1, R += w) : R = 0, I++, --B[E] == 0) {
            if (E === j) break;
            E = v[m + g[I]];
          }
          if (it < E && (R & T) !== L) {
            for (ot === 0 && (ot = it), F += l, H = 1 << (D = E - ot); D + ot < j && !((H -= B[D + ot]) <= 0); ) D++, H <<= 1;
            if (rt += 1 << D, x === 1 && 852 < rt || x === 2 && 592 < rt) return 1;
            h[L = R & T] = it << 24 | D << 16 | F - c | 0;
          }
        }
        return R !== 0 && (h[F + R] = E - ot << 24 | 64 << 16 | 0), p.bits = it, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e, u, r) {
      u.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(e, u, r) {
      var i = e("../utils/common"), a = 0, s = 1;
      function d(y) {
        for (var C = y.length; 0 <= --C; ) y[C] = 0;
      }
      var _ = 0, x = 29, v = 256, m = v + 1 + x, f = 30, h = 19, c = 2 * m + 1, g = 15, p = 16, w = 7, A = 256, L = 16, T = 17, F = 18, P = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], W = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], N = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], Y = new Array(2 * (m + 2));
      d(Y);
      var E = new Array(2 * f);
      d(E);
      var I = new Array(512);
      d(I);
      var l = new Array(256);
      d(l);
      var j = new Array(x);
      d(j);
      var it, D, ot, H = new Array(f);
      function rt(y, C, G, Z, M) {
        this.static_tree = y, this.extra_bits = C, this.extra_base = G, this.elems = Z, this.max_length = M, this.has_stree = y && y.length;
      }
      function R(y, C) {
        this.dyn_tree = y, this.max_code = 0, this.stat_desc = C;
      }
      function S(y) {
        return y < 256 ? I[y] : I[256 + (y >>> 7)];
      }
      function X(y, C) {
        y.pending_buf[y.pending++] = 255 & C, y.pending_buf[y.pending++] = C >>> 8 & 255;
      }
      function B(y, C, G) {
        y.bi_valid > p - G ? (y.bi_buf |= C << y.bi_valid & 65535, X(y, y.bi_buf), y.bi_buf = C >> p - y.bi_valid, y.bi_valid += G - p) : (y.bi_buf |= C << y.bi_valid & 65535, y.bi_valid += G);
      }
      function $(y, C, G) {
        B(y, G[2 * C], G[2 * C + 1]);
      }
      function ct(y, C) {
        for (var G = 0; G |= 1 & y, y >>>= 1, G <<= 1, 0 < --C; ) ;
        return G >>> 1;
      }
      function lt(y, C, G) {
        var Z, M, J = new Array(g + 1), et = 0;
        for (Z = 1; Z <= g; Z++) J[Z] = et = et + G[Z - 1] << 1;
        for (M = 0; M <= C; M++) {
          var Q = y[2 * M + 1];
          Q !== 0 && (y[2 * M] = ct(J[Q]++, Q));
        }
      }
      function st(y) {
        var C;
        for (C = 0; C < m; C++) y.dyn_ltree[2 * C] = 0;
        for (C = 0; C < f; C++) y.dyn_dtree[2 * C] = 0;
        for (C = 0; C < h; C++) y.bl_tree[2 * C] = 0;
        y.dyn_ltree[2 * A] = 1, y.opt_len = y.static_len = 0, y.last_lit = y.matches = 0;
      }
      function dt(y) {
        8 < y.bi_valid ? X(y, y.bi_buf) : 0 < y.bi_valid && (y.pending_buf[y.pending++] = y.bi_buf), y.bi_buf = 0, y.bi_valid = 0;
      }
      function vt(y, C, G, Z) {
        var M = 2 * C, J = 2 * G;
        return y[M] < y[J] || y[M] === y[J] && Z[C] <= Z[G];
      }
      function _t(y, C, G) {
        for (var Z = y.heap[G], M = G << 1; M <= y.heap_len && (M < y.heap_len && vt(C, y.heap[M + 1], y.heap[M], y.depth) && M++, !vt(C, Z, y.heap[M], y.depth)); ) y.heap[G] = y.heap[M], G = M, M <<= 1;
        y.heap[G] = Z;
      }
      function It(y, C, G) {
        var Z, M, J, et, Q = 0;
        if (y.last_lit !== 0) for (; Z = y.pending_buf[y.d_buf + 2 * Q] << 8 | y.pending_buf[y.d_buf + 2 * Q + 1], M = y.pending_buf[y.l_buf + Q], Q++, Z === 0 ? $(y, M, C) : ($(y, (J = l[M]) + v + 1, C), (et = P[J]) !== 0 && B(y, M -= j[J], et), $(y, J = S(--Z), G), (et = W[J]) !== 0 && B(y, Z -= H[J], et)), Q < y.last_lit; ) ;
        $(y, A, C);
      }
      function Lt(y, C) {
        var G, Z, M, J = C.dyn_tree, et = C.stat_desc.static_tree, Q = C.stat_desc.has_stree, nt = C.stat_desc.elems, pt = -1;
        for (y.heap_len = 0, y.heap_max = c, G = 0; G < nt; G++) J[2 * G] !== 0 ? (y.heap[++y.heap_len] = pt = G, y.depth[G] = 0) : J[2 * G + 1] = 0;
        for (; y.heap_len < 2; ) J[2 * (M = y.heap[++y.heap_len] = pt < 2 ? ++pt : 0)] = 1, y.depth[M] = 0, y.opt_len--, Q && (y.static_len -= et[2 * M + 1]);
        for (C.max_code = pt, G = y.heap_len >> 1; 1 <= G; G--) _t(y, J, G);
        for (M = nt; G = y.heap[1], y.heap[1] = y.heap[y.heap_len--], _t(y, J, 1), Z = y.heap[1], y.heap[--y.heap_max] = G, y.heap[--y.heap_max] = Z, J[2 * M] = J[2 * G] + J[2 * Z], y.depth[M] = (y.depth[G] >= y.depth[Z] ? y.depth[G] : y.depth[Z]) + 1, J[2 * G + 1] = J[2 * Z + 1] = M, y.heap[1] = M++, _t(y, J, 1), 2 <= y.heap_len; ) ;
        y.heap[--y.heap_max] = y.heap[1], function(ut, St) {
          var Wt, Tt, Gt, gt, $t, Vt, Ft = St.dyn_tree, de = St.max_code, we = St.stat_desc.static_tree, fe = St.stat_desc.has_stree, pe = St.stat_desc.extra_bits, qt = St.stat_desc.extra_base, Dt = St.stat_desc.max_length, Jt = 0;
          for (gt = 0; gt <= g; gt++) ut.bl_count[gt] = 0;
          for (Ft[2 * ut.heap[ut.heap_max] + 1] = 0, Wt = ut.heap_max + 1; Wt < c; Wt++) Dt < (gt = Ft[2 * Ft[2 * (Tt = ut.heap[Wt]) + 1] + 1] + 1) && (gt = Dt, Jt++), Ft[2 * Tt + 1] = gt, de < Tt || (ut.bl_count[gt]++, $t = 0, qt <= Tt && ($t = pe[Tt - qt]), Vt = Ft[2 * Tt], ut.opt_len += Vt * (gt + $t), fe && (ut.static_len += Vt * (we[2 * Tt + 1] + $t)));
          if (Jt !== 0) {
            do {
              for (gt = Dt - 1; ut.bl_count[gt] === 0; ) gt--;
              ut.bl_count[gt]--, ut.bl_count[gt + 1] += 2, ut.bl_count[Dt]--, Jt -= 2;
            } while (0 < Jt);
            for (gt = Dt; gt !== 0; gt--) for (Tt = ut.bl_count[gt]; Tt !== 0; ) de < (Gt = ut.heap[--Wt]) || (Ft[2 * Gt + 1] !== gt && (ut.opt_len += (gt - Ft[2 * Gt + 1]) * Ft[2 * Gt], Ft[2 * Gt + 1] = gt), Tt--);
          }
        }(y, C), lt(J, pt, y.bl_count);
      }
      function n(y, C, G) {
        var Z, M, J = -1, et = C[1], Q = 0, nt = 7, pt = 4;
        for (et === 0 && (nt = 138, pt = 3), C[2 * (G + 1) + 1] = 65535, Z = 0; Z <= G; Z++) M = et, et = C[2 * (Z + 1) + 1], ++Q < nt && M === et || (Q < pt ? y.bl_tree[2 * M] += Q : M !== 0 ? (M !== J && y.bl_tree[2 * M]++, y.bl_tree[2 * L]++) : Q <= 10 ? y.bl_tree[2 * T]++ : y.bl_tree[2 * F]++, J = M, pt = (Q = 0) === et ? (nt = 138, 3) : M === et ? (nt = 6, 3) : (nt = 7, 4));
      }
      function U(y, C, G) {
        var Z, M, J = -1, et = C[1], Q = 0, nt = 7, pt = 4;
        for (et === 0 && (nt = 138, pt = 3), Z = 0; Z <= G; Z++) if (M = et, et = C[2 * (Z + 1) + 1], !(++Q < nt && M === et)) {
          if (Q < pt) for (; $(y, M, y.bl_tree), --Q != 0; ) ;
          else M !== 0 ? (M !== J && ($(y, M, y.bl_tree), Q--), $(y, L, y.bl_tree), B(y, Q - 3, 2)) : Q <= 10 ? ($(y, T, y.bl_tree), B(y, Q - 3, 3)) : ($(y, F, y.bl_tree), B(y, Q - 11, 7));
          J = M, pt = (Q = 0) === et ? (nt = 138, 3) : M === et ? (nt = 6, 3) : (nt = 7, 4);
        }
      }
      d(H);
      var O = !1;
      function k(y, C, G, Z) {
        B(y, (_ << 1) + (Z ? 1 : 0), 3), function(M, J, et, Q) {
          dt(M), X(M, et), X(M, ~et), i.arraySet(M.pending_buf, M.window, J, et, M.pending), M.pending += et;
        }(y, C, G);
      }
      r._tr_init = function(y) {
        O || (function() {
          var C, G, Z, M, J, et = new Array(g + 1);
          for (M = Z = 0; M < x - 1; M++) for (j[M] = Z, C = 0; C < 1 << P[M]; C++) l[Z++] = M;
          for (l[Z - 1] = M, M = J = 0; M < 16; M++) for (H[M] = J, C = 0; C < 1 << W[M]; C++) I[J++] = M;
          for (J >>= 7; M < f; M++) for (H[M] = J << 7, C = 0; C < 1 << W[M] - 7; C++) I[256 + J++] = M;
          for (G = 0; G <= g; G++) et[G] = 0;
          for (C = 0; C <= 143; ) Y[2 * C + 1] = 8, C++, et[8]++;
          for (; C <= 255; ) Y[2 * C + 1] = 9, C++, et[9]++;
          for (; C <= 279; ) Y[2 * C + 1] = 7, C++, et[7]++;
          for (; C <= 287; ) Y[2 * C + 1] = 8, C++, et[8]++;
          for (lt(Y, m + 1, et), C = 0; C < f; C++) E[2 * C + 1] = 5, E[2 * C] = ct(C, 5);
          it = new rt(Y, P, v + 1, m, g), D = new rt(E, W, 0, f, g), ot = new rt(new Array(0), N, 0, h, w);
        }(), O = !0), y.l_desc = new R(y.dyn_ltree, it), y.d_desc = new R(y.dyn_dtree, D), y.bl_desc = new R(y.bl_tree, ot), y.bi_buf = 0, y.bi_valid = 0, st(y);
      }, r._tr_stored_block = k, r._tr_flush_block = function(y, C, G, Z) {
        var M, J, et = 0;
        0 < y.level ? (y.strm.data_type === 2 && (y.strm.data_type = function(Q) {
          var nt, pt = 4093624447;
          for (nt = 0; nt <= 31; nt++, pt >>>= 1) if (1 & pt && Q.dyn_ltree[2 * nt] !== 0) return a;
          if (Q.dyn_ltree[18] !== 0 || Q.dyn_ltree[20] !== 0 || Q.dyn_ltree[26] !== 0) return s;
          for (nt = 32; nt < v; nt++) if (Q.dyn_ltree[2 * nt] !== 0) return s;
          return a;
        }(y)), Lt(y, y.l_desc), Lt(y, y.d_desc), et = function(Q) {
          var nt;
          for (n(Q, Q.dyn_ltree, Q.l_desc.max_code), n(Q, Q.dyn_dtree, Q.d_desc.max_code), Lt(Q, Q.bl_desc), nt = h - 1; 3 <= nt && Q.bl_tree[2 * q[nt] + 1] === 0; nt--) ;
          return Q.opt_len += 3 * (nt + 1) + 5 + 5 + 4, nt;
        }(y), M = y.opt_len + 3 + 7 >>> 3, (J = y.static_len + 3 + 7 >>> 3) <= M && (M = J)) : M = J = G + 5, G + 4 <= M && C !== -1 ? k(y, C, G, Z) : y.strategy === 4 || J === M ? (B(y, 2 + (Z ? 1 : 0), 3), It(y, Y, E)) : (B(y, 4 + (Z ? 1 : 0), 3), function(Q, nt, pt, ut) {
          var St;
          for (B(Q, nt - 257, 5), B(Q, pt - 1, 5), B(Q, ut - 4, 4), St = 0; St < ut; St++) B(Q, Q.bl_tree[2 * q[St] + 1], 3);
          U(Q, Q.dyn_ltree, nt - 1), U(Q, Q.dyn_dtree, pt - 1);
        }(y, y.l_desc.max_code + 1, y.d_desc.max_code + 1, et + 1), It(y, y.dyn_ltree, y.dyn_dtree)), st(y), Z && dt(y);
      }, r._tr_tally = function(y, C, G) {
        return y.pending_buf[y.d_buf + 2 * y.last_lit] = C >>> 8 & 255, y.pending_buf[y.d_buf + 2 * y.last_lit + 1] = 255 & C, y.pending_buf[y.l_buf + y.last_lit] = 255 & G, y.last_lit++, C === 0 ? y.dyn_ltree[2 * G]++ : (y.matches++, C--, y.dyn_ltree[2 * (l[G] + v + 1)]++, y.dyn_dtree[2 * S(C)]++), y.last_lit === y.lit_bufsize - 1;
      }, r._tr_align = function(y) {
        B(y, 2, 3), $(y, A, Y), function(C) {
          C.bi_valid === 16 ? (X(C, C.bi_buf), C.bi_buf = 0, C.bi_valid = 0) : 8 <= C.bi_valid && (C.pending_buf[C.pending++] = 255 & C.bi_buf, C.bi_buf >>= 8, C.bi_valid -= 8);
        }(y);
      };
    }, { "../utils/common": 41 }], 53: [function(e, u, r) {
      u.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(e, u, r) {
      (function(i) {
        (function(a, s) {
          if (!a.setImmediate) {
            var d, _, x, v, m = 1, f = {}, h = !1, c = a.document, g = Object.getPrototypeOf && Object.getPrototypeOf(a);
            g = g && g.setTimeout ? g : a, d = {}.toString.call(a.process) === "[object process]" ? function(L) {
              setTimeout(function() {
                w(L);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var L = !0, T = a.onmessage;
                return a.onmessage = function() {
                  L = !1;
                }, a.postMessage("", "*"), a.onmessage = T, L;
              }
            }() ? (v = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", A, !1) : a.attachEvent("onmessage", A), function(L) {
              a.postMessage(v + L, "*");
            }) : a.MessageChannel ? ((x = new MessageChannel()).port1.onmessage = function(L) {
              w(L.data);
            }, function(L) {
              x.port2.postMessage(L);
            }) : c && "onreadystatechange" in c.createElement("script") ? (_ = c.documentElement, function(L) {
              var T = c.createElement("script");
              T.onreadystatechange = function() {
                w(L), T.onreadystatechange = null, _.removeChild(T), T = null;
              }, _.appendChild(T);
            }) : function(L) {
              setTimeout(w, 0, L);
            }, g.setImmediate = function(L) {
              typeof L != "function" && (L = new Function("" + L));
              for (var T = new Array(arguments.length - 1), F = 0; F < T.length; F++) T[F] = arguments[F + 1];
              var P = { callback: L, args: T };
              return f[m] = P, d(m), m++;
            }, g.clearImmediate = p;
          }
          function p(L) {
            delete f[L];
          }
          function w(L) {
            if (h) setTimeout(w, 0, L);
            else {
              var T = f[L];
              if (T) {
                h = !0;
                try {
                  (function(F) {
                    var P = F.callback, W = F.args;
                    switch (W.length) {
                      case 0:
                        P();
                        break;
                      case 1:
                        P(W[0]);
                        break;
                      case 2:
                        P(W[0], W[1]);
                        break;
                      case 3:
                        P(W[0], W[1], W[2]);
                        break;
                      default:
                        P.apply(s, W);
                    }
                  })(T);
                } finally {
                  p(L), h = !1;
                }
              }
            }
          }
          function A(L) {
            L.source === a && typeof L.data == "string" && L.data.indexOf(v) === 0 && w(+L.data.slice(v.length));
          }
        })(typeof self > "u" ? i === void 0 ? this : i : self);
      }).call(this, typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(Gr);
/*! @license DOMPurify 3.4.16 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.16/LICENSE */
function On(t, o) {
  (o == null || o > t.length) && (o = t.length);
  for (var e = 0, u = Array(o); e < o; e++) u[e] = t[e];
  return u;
}
function $r(t) {
  if (Array.isArray(t)) return t;
}
function qr(t, o) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var u, r, i, a, s = [], d = !0, _ = !1;
    try {
      if (i = (e = e.call(t)).next, o !== 0) for (; !(d = (u = i.call(e)).done) && (s.push(u.value), s.length !== o); d = !0) ;
    } catch (x) {
      _ = !0, r = x;
    } finally {
      try {
        if (!d && e.return != null && (a = e.return(), Object(a) !== a)) return;
      } finally {
        if (_) throw r;
      }
    }
    return s;
  }
}
function Vr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
function Yr(t, o) {
  return $r(t) || qr(t, o) || Xr(t, o) || Vr();
}
function Xr(t, o) {
  if (t) {
    if (typeof t == "string") return On(t, o);
    var e = {}.toString.call(t).slice(8, -1);
    return e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set" ? Array.from(t) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? On(t, o) : void 0;
  }
}
const cr = Object.entries, Mn = Object.setPrototypeOf, Kr = Object.isFrozen, Jr = Object.getPrototypeOf, Qr = Object.getOwnPropertyDescriptor;
let kt = Object.freeze, Et = Object.seal, se = Object.create, ur = typeof Reflect < "u" && Reflect, rn = ur.apply, an = ur.construct;
kt || (kt = function(o) {
  return o;
});
Et || (Et = function(o) {
  return o;
});
rn || (rn = function(o, e) {
  for (var u = arguments.length, r = new Array(u > 2 ? u - 2 : 0), i = 2; i < u; i++) r[i - 2] = arguments[i];
  return o.apply(e, r);
});
an || (an = function(o) {
  for (var e = arguments.length, u = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) u[r - 1] = arguments[r];
  return new o(...u);
});
const ee = xt(Array.prototype.forEach), ti = xt(Array.prototype.lastIndexOf), Nn = xt(Array.prototype.pop), ge = xt(Array.prototype.push), ei = xt(Array.prototype.splice), ce = Array.isArray, ye = xt(String.prototype.toLowerCase), Ze = xt(String.prototype.toString), Pn = xt(String.prototype.match), ve = xt(String.prototype.replace), Rn = xt(String.prototype.indexOf), ni = xt(String.prototype.trim), ri = xt(Number.prototype.toString), ii = xt(Boolean.prototype.toString), In = typeof BigInt > "u" ? null : xt(BigInt.prototype.toString), Fn = typeof Symbol > "u" ? null : xt(Symbol.prototype.toString), zt = xt(Object.prototype.hasOwnProperty), be = xt(Object.prototype.toString), At = xt(RegExp.prototype.test), Xt = ai(TypeError);
function xt(t) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var e = arguments.length, u = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) u[r - 1] = arguments[r];
    return rn(t, o, u);
  };
}
function ai(t) {
  return function() {
    for (var o = arguments.length, e = new Array(o), u = 0; u < o; u++) e[u] = arguments[u];
    return an(t, e);
  };
}
function mt(t, o) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ye;
  if (Mn && Mn(t, null), !ce(o)) return t;
  let u = o.length;
  for (; u--; ) {
    let r = o[u];
    if (typeof r == "string") {
      const i = e(r);
      i !== r && (Kr(o) || (o[u] = i), r = i);
    }
    t[r] = !0;
  }
  return t;
}
function oi(t) {
  for (let o = 0; o < t.length; o++) zt(t, o) || (t[o] = null);
  return t;
}
function Rt(t) {
  const o = se(null);
  for (const u of cr(t)) {
    var e = Yr(u, 2);
    const r = e[0], i = e[1];
    zt(t, r) && (ce(i) ? o[r] = oi(i) : i && typeof i == "object" && i.constructor === Object ? o[r] = Rt(i) : o[r] = i);
  }
  return o;
}
function si(t) {
  switch (typeof t) {
    case "string":
      return t;
    case "number":
      return ri(t);
    case "boolean":
      return ii(t);
    case "bigint":
      return In ? In(t) : "0";
    case "symbol":
      return Fn ? Fn(t) : "Symbol()";
    case "undefined":
      return be(t);
    case "function":
    case "object": {
      if (t === null) return be(t);
      const o = t, e = jt(o, "toString");
      if (typeof e == "function") {
        const u = e(o);
        return typeof u == "string" ? u : be(u);
      }
      return be(t);
    }
    default:
      return be(t);
  }
}
function jt(t, o) {
  for (; t !== null; ) {
    const u = Qr(t, o);
    if (u) {
      if (u.get) return xt(u.get);
      if (typeof u.value == "function") return xt(u.value);
    }
    t = Jr(t);
  }
  function e() {
    return null;
  }
  return e;
}
function li(t) {
  try {
    return At(t, ""), !0;
  } catch {
    return !1;
  }
}
const Dn = kt([
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
]), Ge = kt([
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
]), $e = kt([
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
]), ci = kt([
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
]), qe = kt([
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
]), ui = kt([
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
]), Bn = kt(["#text"]), jn = kt([
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
]), Ve = kt([
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
]), Un = kt([
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
]), Oe = kt([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), di = Et(/{{[\w\W]*|^[\w\W]*}}/g), fi = Et(/<%[\w\W]*|^[\w\W]*%>/g), pi = Et(/\${[\w\W]*/g), hi = Et(/^data-[\-\w.\u00B7-\uFFFF]+$/), mi = Et(/^aria-[\-\w]+$/), Wn = Et(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), gi = Et(/^(?:\w+script|data):/i), vi = Et(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), bi = Et(/^html$/i), _i = Et(/^[a-z][.\w]*(-[.\w]+)+$/i), Hn = Et(/<[/\w!]/g), Zn = Et(/<[/\w]/g), yi = Et(/<\/no(script|embed|frames)/i), wi = Et(/\/>/i), Mt = {
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
}, dr = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], xi = kt(mt({}, dr)), ki = function() {
  const t = {};
  return ee(dr, (o) => {
    t[o] = Et(new RegExp("</" + o + "(?=[\\t\\n\\f\\r />])", "i"));
  }), kt(t);
}(), Ei = function() {
  return typeof window > "u" ? null : window;
}, Si = function(o, e) {
  if (typeof o != "object" || typeof o.createPolicy != "function") return null;
  let u = null;
  const r = "data-tt-policy-suffix";
  e && e.hasAttribute(r) && (u = e.getAttribute(r));
  const i = "dompurify" + (u ? "#" + u : "");
  try {
    return o.createPolicy(i, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, Gn = function() {
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
}, Kt = function(o, e, u, r) {
  return zt(o, e) && ce(o[e]) ? mt(r.base ? Rt(r.base) : {}, o[e], r.transform) : u;
}, Ye = function(o, e, u) {
  const r = zt(o, e) ? o[e] : void 0;
  return r && typeof r == "object" ? Rt(r) : u();
};
function fr() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ei();
  const o = (K) => fr(K);
  if (o.version = "3.4.16", o.removed = [], !t || !t.document || t.document.nodeType !== Mt.document || !t.Element)
    return o.isSupported = !1, o;
  let e = t.document;
  const u = e, r = u.currentScript;
  t.DocumentFragment;
  const i = t.HTMLTemplateElement, a = t.Node, s = t.Element, d = t.NodeFilter;
  t.NamedNodeMap === void 0 && (t.NamedNodeMap || t.MozNamedAttrMap), t.HTMLFormElement;
  const _ = t.DOMParser, x = t.trustedTypes, v = s.prototype, m = jt(v, "cloneNode"), f = jt(v, "remove"), h = jt(v, "removeAttributeNode"), c = jt(v, "nextSibling"), g = jt(v, "childNodes"), p = jt(v, "parentNode"), w = jt(v, "shadowRoot"), A = jt(v, "attributes"), L = a && a.prototype ? jt(a.prototype, "nodeType") : null, T = a && a.prototype ? jt(a.prototype, "nodeName") : null, F = a && a.prototype ? jt(a.prototype, "ownerDocument") : null, P = function(b) {
    return L ? L(b) : b.nodeType;
  }, W = function(b) {
    return T ? T(b) : b.nodeName;
  };
  if (typeof i == "function") {
    const K = e.createElement("template");
    K.content && K.content.ownerDocument && (e = K.content.ownerDocument);
  }
  let N, q = "", Y, E = !1, I = 0;
  const l = function() {
    if (I > 0) throw Xt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, j = function(b) {
    l(), I++;
    try {
      return N.createHTML(b);
    } finally {
      I--;
    }
  }, it = function(b) {
    l(), I++;
    try {
      return N.createScriptURL(b);
    } finally {
      I--;
    }
  }, D = function() {
    return E || (Y = Si(x, r), E = !0), Y;
  }, ot = e, H = ot.implementation, rt = ot.createNodeIterator, R = ot.createDocumentFragment, S = ot.getElementsByTagName, X = u.importNode;
  let B = Gn();
  o.isSupported = typeof cr == "function" && typeof p == "function" && H && H.createHTMLDocument !== void 0;
  const $ = di, ct = fi, lt = pi, st = hi, dt = mi, vt = gi, _t = vi, It = _i;
  let Lt = Wn, n = null;
  const U = mt({}, [
    ...Dn,
    ...Ge,
    ...$e,
    ...qe,
    ...Bn
  ]);
  let O = null;
  const k = mt({}, [
    ...jn,
    ...Ve,
    ...Un,
    ...Oe
  ]);
  let y = Object.seal(se(null, {
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
  })), C = null, G = null;
  const Z = Object.seal(se(null, {
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
  let M = !0, J = !0, et = !1, Q = !0, nt = !1, pt = !0, ut = !1, St = !1, Wt = null, Tt = null, Gt = !1, gt = !1, $t = !1, Vt = !1, Ft = !0, de = !1;
  const we = "user-content-";
  let fe = !0, pe = !1, qt = {}, Dt = null;
  const Jt = mt({}, [
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
  let fn = null;
  const pn = mt({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let hn = null;
  const mn = mt({}, [
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
  ]), xe = "http://www.w3.org/1998/Math/MathML", ke = "http://www.w3.org/2000/svg", Ht = "http://www.w3.org/1999/xhtml";
  let ne = Ht, Ie = !1, Fe = null;
  const Lr = mt({}, [
    xe,
    ke,
    Ht
  ], Ze), gn = kt([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let De = mt({}, gn);
  const vn = kt(["annotation-xml"]);
  let Be = mt({}, vn);
  const zr = mt({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let he = null;
  const Or = ["application/xhtml+xml", "text/html"], Mr = "text/html";
  let wt = null, re = null;
  const Nr = e.createElement("form"), bn = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, je = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (re && re === b) return;
    (!b || typeof b != "object") && (b = {}), b = Rt(b), he = Or.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Mr : b.PARSER_MEDIA_TYPE, wt = he === "application/xhtml+xml" ? Ze : ye, n = Kt(b, "ALLOWED_TAGS", U, { transform: wt }), O = Kt(b, "ALLOWED_ATTR", k, { transform: wt }), Fe = Kt(b, "ALLOWED_NAMESPACES", Lr, { transform: Ze }), hn = Kt(b, "ADD_URI_SAFE_ATTR", mn, {
      transform: wt,
      base: mn
    }), fn = Kt(b, "ADD_DATA_URI_TAGS", pn, {
      transform: wt,
      base: pn
    }), Dt = Kt(b, "FORBID_CONTENTS", Jt, { transform: wt }), C = Kt(b, "FORBID_TAGS", Rt({}), { transform: wt }), G = Kt(b, "FORBID_ATTR", Rt({}), { transform: wt }), qt = zt(b, "USE_PROFILES") ? b.USE_PROFILES && typeof b.USE_PROFILES == "object" ? Rt(b.USE_PROFILES) : b.USE_PROFILES : !1, M = b.ALLOW_ARIA_ATTR !== !1, J = b.ALLOW_DATA_ATTR !== !1, et = b.ALLOW_UNKNOWN_PROTOCOLS || !1, Q = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, nt = b.SAFE_FOR_TEMPLATES || !1, pt = b.SAFE_FOR_XML !== !1, ut = b.WHOLE_DOCUMENT || !1, gt = b.RETURN_DOM || !1, $t = b.RETURN_DOM_FRAGMENT || !1, Vt = b.RETURN_TRUSTED_TYPE || !1, Gt = b.FORCE_BODY || !1, Ft = b.SANITIZE_DOM !== !1, de = b.SANITIZE_NAMED_PROPS || !1, fe = b.KEEP_CONTENT !== !1, pe = b.IN_PLACE || !1, Lt = li(b.ALLOWED_URI_REGEXP) ? b.ALLOWED_URI_REGEXP : Wn, ne = typeof b.NAMESPACE == "string" ? b.NAMESPACE : Ht, De = Ye(b, "MATHML_TEXT_INTEGRATION_POINTS", () => mt({}, gn)), Be = Ye(b, "HTML_INTEGRATION_POINTS", () => mt({}, vn));
    const z = Ye(b, "CUSTOM_ELEMENT_HANDLING", () => se(null));
    if (y = se(null), zt(z, "tagNameCheck") && bn(z.tagNameCheck) && (y.tagNameCheck = z.tagNameCheck), zt(z, "attributeNameCheck") && bn(z.attributeNameCheck) && (y.attributeNameCheck = z.attributeNameCheck), zt(z, "allowCustomizedBuiltInElements") && typeof z.allowCustomizedBuiltInElements == "boolean" && (y.allowCustomizedBuiltInElements = z.allowCustomizedBuiltInElements), Et(y), nt && (J = !1), $t && (gt = !0), qt && (n = mt({}, Bn), O = se(null), qt.html === !0 && (mt(n, Dn), mt(O, jn)), qt.svg === !0 && (mt(n, Ge), mt(O, Ve), mt(O, Oe)), qt.svgFilters === !0 && (mt(n, $e), mt(O, Ve), mt(O, Oe)), qt.mathMl === !0 && (mt(n, qe), mt(O, Un), mt(O, Oe))), Z.tagCheck = null, Z.attributeCheck = null, zt(b, "ADD_TAGS") && (typeof b.ADD_TAGS == "function" ? Z.tagCheck = b.ADD_TAGS : ce(b.ADD_TAGS) && (n === U && (n = Rt(n)), mt(n, b.ADD_TAGS, wt))), zt(b, "ADD_ATTR") && (typeof b.ADD_ATTR == "function" ? Z.attributeCheck = b.ADD_ATTR : ce(b.ADD_ATTR) && (O === k && (O = Rt(O)), mt(O, b.ADD_ATTR, wt))), zt(b, "ADD_FORBID_CONTENTS") && ce(b.ADD_FORBID_CONTENTS) && (Dt === Jt && (Dt = Rt(Dt)), mt(Dt, b.ADD_FORBID_CONTENTS, wt)), fe && (n["#text"] = !0), ut && mt(n, [
      "html",
      "head",
      "body"
    ]), n.table && (mt(n, ["tbody"]), delete C.tbody), b.TRUSTED_TYPES_POLICY) {
      if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function") throw Xt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Xt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const V = N;
      N = b.TRUSTED_TYPES_POLICY;
      try {
        q = j("");
      } catch (tt) {
        throw N = V, tt;
      }
    } else b.TRUSTED_TYPES_POLICY === null ? (N = void 0, q = "") : (N === void 0 && (N = D()), N && typeof q == "string" && (q = j("")));
    kt && kt(b), re = b;
  }, _n = mt({}, [
    ...Ge,
    ...$e,
    ...ci
  ]), yn = mt({}, [...qe, ...ui]), Pr = function(b, z, V) {
    return z.namespaceURI === Ht ? b === "svg" : z.namespaceURI === xe ? b === "svg" && (V === "annotation-xml" || De[V]) : !!_n[b];
  }, Rr = function(b, z, V) {
    return z.namespaceURI === Ht ? b === "math" : z.namespaceURI === ke ? b === "math" && Be[V] : !!yn[b];
  }, Ir = function(b, z, V) {
    return z.namespaceURI === ke && !Be[V] || z.namespaceURI === xe && !De[V] ? !1 : !yn[b] && (zr[b] || !_n[b]);
  }, Fr = function(b) {
    let z = p(b);
    (!z || !z.tagName) && (z = {
      namespaceURI: ne,
      tagName: "template"
    });
    const V = ye(b.tagName), tt = ye(z.tagName);
    return Fe[b.namespaceURI] ? b.namespaceURI === ke ? Pr(V, z, tt) : b.namespaceURI === xe ? Rr(V, z, tt) : b.namespaceURI === Ht ? Ir(V, z, tt) : !!(he === "application/xhtml+xml" && Fe[b.namespaceURI]) : !1;
  }, Yt = function(b) {
    ge(o.removed, { element: b });
    try {
      p(b).removeChild(b);
    } catch {
      if (f(b), !p(b)) throw Xt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, wn = function(b, z, V) {
    try {
      h(b, z);
    } catch {
      try {
        b.removeAttribute(V);
      } catch {
      }
    }
  }, Ee = function(b) {
    Se(b);
    const z = g(b);
    if (z) {
      const tt = [];
      ee(z, (at) => {
        ge(tt, at);
      }), ee(tt, (at) => {
        try {
          f(at);
        } catch {
        }
      });
    }
    const V = A(b);
    if (V) for (let tt = V.length - 1; tt >= 0; --tt) {
      const at = V[tt], ft = at && at.name;
      typeof ft == "string" && wn(b, at, ft);
    }
  }, Qt = function(b, z, V) {
    if (!V) try {
      V = z.getAttributeNode(b);
    } catch {
      V = null;
    }
    ge(o.removed, {
      attribute: V || null,
      from: z
    });
    try {
      V ? h(z, V) : z.removeAttribute(b);
    } catch {
      try {
        z.removeAttribute(b);
      } catch {
      }
    }
    if (b === "is")
      if (gt || $t) try {
        Yt(z);
      } catch {
      }
      else try {
        z.setAttribute(b, "");
      } catch {
      }
  }, Dr = function(b) {
    const z = A(b);
    if (z)
      for (let V = z.length - 1; V >= 0; --V) {
        const tt = z[V], at = tt && tt.name;
        typeof at != "string" || O[wt(at)] || wn(b, tt, at);
      }
  }, Se = function(b) {
    const z = [b];
    for (; z.length > 0; ) {
      const V = z.pop();
      P(V) === Mt.element && Dr(V);
      const tt = g(V);
      if (tt) for (let at = tt.length - 1; at >= 0; --at) z.push(tt[at]);
    }
  }, xn = function(b, z) {
    return pt ? b === "patchsrc" ? !0 : b === "for" && z !== "label" && z !== "output" : !1;
  }, Br = function(b) {
    if (!pt) return;
    const z = [b];
    for (; z.length > 0; ) {
      const V = z.pop(), tt = P(V);
      if (tt === Mt.processingInstruction || tt === Mt.comment && At(Zn, V.data)) {
        try {
          f(V);
        } catch {
        }
        continue;
      }
      if (tt === Mt.element) {
        const ft = V, ht = wt(W(V));
        try {
          ft.hasAttribute && ft.hasAttribute("patchsrc") && ft.removeAttribute("patchsrc"), ft.hasAttribute && ft.hasAttribute("for") && xn("for", ht) && ft.removeAttribute("for");
        } catch {
        }
      }
      const at = g(V);
      if (at) for (let ft = at.length - 1; ft >= 0; --ft) z.push(at[ft]);
    }
  }, kn = function(b) {
    let z = null, V = null;
    if (Gt) b = "<remove></remove>" + b;
    else {
      const ft = Pn(b, /^[\r\n\t ]+/);
      V = ft && ft[0];
    }
    he === "application/xhtml+xml" && ne === Ht && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const tt = N ? j(b) : b;
    if (ne === Ht) try {
      z = new _().parseFromString(tt, he);
    } catch {
    }
    if (!z || !z.documentElement) {
      z = H.createDocument(ne, "template", null);
      try {
        z.documentElement.innerHTML = Ie ? q : tt;
      } catch {
      }
    }
    const at = z.body || z.documentElement;
    return b && V && at.insertBefore(e.createTextNode(V), at.childNodes[0] || null), ne === Ht ? S.call(z, ut ? "html" : "body")[0] : ut ? z.documentElement : at;
  }, En = function(b) {
    const z = F ? F(b) : b.ownerDocument;
    return rt.call(z || b, b, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION, null);
  }, Ae = function(b) {
    return b = ve(b, $, " "), b = ve(b, ct, " "), b = ve(b, lt, " "), b;
  }, Ue = function(b) {
    var z;
    b.normalize();
    const V = F ? F(b) : b.ownerDocument, tt = rt.call(V || b, b, d.SHOW_TEXT | d.SHOW_COMMENT | d.SHOW_CDATA_SECTION | d.SHOW_PROCESSING_INSTRUCTION, null);
    let at = tt.nextNode();
    for (; at; )
      at.data = Ae(at.data), at = tt.nextNode();
    const ft = (z = b.querySelectorAll) === null || z === void 0 ? void 0 : z.call(b, "template");
    ft && ee(ft, (ht) => {
      ie(ht.content) && Ue(ht.content);
    });
  }, Te = function(b) {
    const z = T ? T(b) : null;
    return typeof z != "string" || wt(z) !== "form" ? !1 : typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || b.attributes !== A(b) || typeof b.removeAttribute != "function" || typeof b.removeAttributeNode != "function" || typeof b.getAttributeNode != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function" || b.nodeType !== L(b) || b.childNodes !== g(b);
  }, ie = function(b) {
    if (!L || typeof b != "object" || b === null) return !1;
    try {
      return L(b) === Mt.documentFragment;
    } catch {
      return !1;
    }
  }, me = function(b) {
    if (!L || typeof b != "object" || b === null) return !1;
    try {
      return typeof L(b) == "number";
    } catch {
      return !1;
    }
  };
  function Zt(K, b, z) {
    K.length !== 0 && ee(K, (V) => {
      V.call(o, b, z, re);
    });
  }
  const jr = function(b, z) {
    return !!(pt && b.hasChildNodes() && !me(b.firstElementChild) && At(Hn, b.textContent) && At(Hn, b.innerHTML) || pt && b.namespaceURI === Ht && xi[z] && (me(b.firstElementChild) || typeof b.textContent == "string" && At(ki[z], b.textContent)) || b.nodeType === Mt.processingInstruction || pt && b.nodeType === Mt.comment && At(Zn, b.data));
  }, Ce = function(b, z) {
    if (b instanceof RegExp) return At(b, z);
    if (b instanceof Function) {
      for (var V = arguments.length, tt = new Array(V > 2 ? V - 2 : 0), at = 2; at < V; at++) tt[at - 2] = arguments[at];
      return !!b(z, ...tt);
    }
    return !1;
  }, Ur = function(b, z, V) {
    if (!C[z] && Cn(z) && Ce(y.tagNameCheck, z)) return !1;
    if (fe && !Dt[z]) {
      const tt = p(b), at = g(b);
      if (at && tt) {
        const ft = at.length;
        for (let ht = ft - 1; ht >= 0; --ht) {
          const yt = b === V ? m(at[ht], !0) : at[ht];
          tt.insertBefore(yt, c(b));
        }
      }
    }
    return Yt(b), !0;
  }, Sn = function(b, z, V, tt) {
    return b.length === 0 ? z : z === V || z === tt ? Rt(z) : z;
  }, ae = function(b, z) {
    return b === z || p(b) !== null ? !1 : (pe && Se(b), !0);
  }, An = function(b, z) {
    if (Zt(B.beforeSanitizeElements, b, null), ae(b, z)) return !0;
    if (Te(b))
      return Yt(b), !0;
    const V = wt(W(b));
    if (n = Sn(B.uponSanitizeElement, n, U, Wt), Zt(B.uponSanitizeElement, b, {
      tagName: V,
      allowedTags: n
    }), ae(b, z)) return !0;
    if (jr(b, V))
      return Yt(b), !0;
    if (C[V] || !(Z.tagCheck instanceof Function && Z.tagCheck(V)) && !n[V]) {
      const tt = Ur(b, V, z);
      return tt === !1 && (Zt(B.afterSanitizeElements, b, null), ae(b, z)) ? !0 : tt;
    }
    if (P(b) === Mt.element && !Fr(b) || (V === "noscript" || V === "noembed" || V === "noframes") && At(yi, b.innerHTML))
      return Yt(b), !0;
    if (nt && b.nodeType === Mt.text) {
      const tt = Ae(b.textContent);
      b.textContent !== tt && (ge(o.removed, { element: b.cloneNode() }), b.textContent = tt);
    }
    return Zt(B.afterSanitizeElements, b, null), ae(b, z);
  }, Tn = function(b, z, V) {
    if (G[z] || xn(z, b) || Ft && (z === "id" || z === "name") && (V in e || V in Nr)) return !1;
    const tt = O[z] || Z.attributeCheck instanceof Function && Z.attributeCheck(z, b);
    return J && At(st, z) || M && At(dt, z) ? !0 : tt ? hn[z] || At(Lt, ve(V, _t, "")) || (z === "src" || z === "xlink:href" || z === "href") && b !== "script" && Rn(V, "data:") === 0 && fn[b] || et && !At(vt, ve(V, _t, "")) ? !0 : !V : Cn(b) && Ce(y.tagNameCheck, b) && Ce(y.attributeNameCheck, z, b) || z === "is" && y.allowCustomizedBuiltInElements && Ce(y.tagNameCheck, V);
  }, Wr = mt({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Cn = function(b) {
    return !Wr[ye(b)] && At(It, b);
  }, Hr = function(b, z, V, tt) {
    if (N && typeof x == "object" && typeof x.getAttributeType == "function" && !V) switch (x.getAttributeType(b, z)) {
      case "TrustedHTML":
        return j(tt);
      case "TrustedScriptURL":
        return it(tt);
    }
    return tt;
  }, Zr = function(b, z, V, tt) {
    try {
      return V ? b.setAttributeNS(V, z, tt) : b.setAttribute(z, tt), Te(b) ? (Yt(b), !1) : !0;
    } catch {
      return Qt(z, b), !1;
    }
  }, Ln = function(b, z) {
    if (Zt(B.beforeSanitizeAttributes, b, null), ae(b, z)) return;
    const V = b.attributes;
    if (!V || Te(b)) return;
    O = Sn(B.uponSanitizeAttribute, O, k, Tt);
    const tt = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: O,
      forceKeepAttr: void 0
    };
    let at = V.length;
    const ft = wt(b.nodeName);
    for (; at--; ) {
      const ht = V[at], yt = ht.name, Bt = ht.namespaceURI, Ot = ht.value, oe = wt(yt), He = Ot;
      let Ct = yt === "value" ? He : ni(He), zn = !1;
      if (tt.attrName = oe, tt.attrValue = Ct, tt.keepAttr = !0, tt.forceKeepAttr = void 0, Zt(B.uponSanitizeAttribute, b, tt), Ct = tt.attrValue, de && (oe === "id" || oe === "name") && Rn(Ct, we) !== 0 && (Qt(yt, b, ht), Ct = we + Ct, zn = !0), pt && At(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ct)) {
        Qt(yt, b, ht);
        continue;
      }
      if (oe === "attributename" && Pn(Ct, "href")) {
        Qt(yt, b, ht);
        continue;
      }
      if (!tt.forceKeepAttr) {
        if (!tt.keepAttr) {
          Qt(yt, b, ht);
          continue;
        }
        if (!Q && At(wi, Ct)) {
          Qt(yt, b, ht);
          continue;
        }
        if (nt && (Ct = Ae(Ct)), !Tn(ft, oe, Ct)) {
          Qt(yt, b, ht);
          continue;
        }
        Ct = Hr(ft, oe, Bt, Ct), Ct !== He && Zr(b, yt, Bt, Ct) && zn && Nn(o.removed);
      }
    }
    Zt(B.afterSanitizeAttributes, b, null), ae(b, z);
  }, Le = function(b) {
    let z = null;
    const V = En(b);
    for (Zt(B.beforeSanitizeShadowDOM, b, null); z = V.nextNode(); )
      if (Zt(B.uponSanitizeShadowNode, z, null), An(z, b), Ln(z, b), ie(z.content) && Le(z.content), P(z) === Mt.element) {
        const tt = w(z);
        ie(tt) && (We(tt), Le(tt));
      }
    Zt(B.afterSanitizeShadowDOM, b, null);
  }, We = function(b) {
    const z = [{
      node: b,
      shadow: null
    }];
    for (; z.length > 0; ) {
      const V = z.pop();
      if (V.shadow) {
        Le(V.shadow);
        continue;
      }
      const tt = V.node, at = P(tt) === Mt.element, ft = g(tt);
      if (ft) for (let ht = ft.length - 1; ht >= 0; --ht) z.push({
        node: ft[ht],
        shadow: null
      });
      if (at) {
        const ht = T ? T(tt) : null;
        if (typeof ht == "string" && wt(ht) === "template") {
          const yt = tt.content;
          ie(yt) && z.push({
            node: yt,
            shadow: null
          });
        }
      }
      if (at) {
        const ht = w(tt);
        ie(ht) && z.push({
          node: null,
          shadow: ht
        }, {
          node: ht,
          shadow: null
        });
      }
    }
  };
  return o.sanitize = function(K) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, z = null, V = null, tt = null, at = null;
    if (Ie = !K, Ie && (K = "<!-->"), typeof K != "string" && !me(K) && (K = si(K), typeof K != "string"))
      throw Xt("dirty is not a string, aborting");
    if (!o.isSupported) return K;
    St ? (n = Wt, O = Tt) : je(b), (B.uponSanitizeElement.length > 0 || B.uponSanitizeAttribute.length > 0) && (n = Rt(n)), B.uponSanitizeAttribute.length > 0 && (O = Rt(O)), o.removed = [];
    const ft = pe && typeof K != "string" && me(K);
    if (ft) {
      Br(K);
      const Bt = W(K);
      if (typeof Bt == "string") {
        const Ot = wt(Bt);
        if (!n[Ot] || C[Ot])
          throw Ee(K), Xt("root node is forbidden and cannot be sanitized in-place");
      }
      if (Te(K))
        throw Ee(K), Xt("root node is clobbered and cannot be sanitized in-place");
      try {
        We(K);
      } catch (Ot) {
        throw Ee(K), Ot;
      }
    } else if (me(K))
      z = kn("<!---->"), V = z.ownerDocument.importNode(K, !0), V.nodeType === Mt.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? z = V : z.appendChild(V), We(z);
    else {
      if (!gt && !nt && !ut && K.indexOf("<") === -1) return N && Vt ? j(K) : K;
      if (z = kn(K), !z) return gt ? null : Vt ? q : "";
    }
    z && Gt && Yt(z.firstChild);
    const ht = ft ? K : z;
    try {
      const Bt = En(ht);
      for (; tt = Bt.nextNode(); )
        An(tt, ht), Ln(tt, ht), ie(tt.content) && Le(tt.content);
    } catch (Bt) {
      throw ft && (Ee(K), ee(o.removed, (Ot) => {
        Ot.element && Se(Ot.element);
      })), Bt;
    }
    if (ft) {
      let Bt = !1;
      if (ee(o.removed, (Ot) => {
        Ot.element && (Ot.element === K && (Bt = !0), Se(Ot.element));
      }), Bt) throw Xt("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return nt && Ue(K), K;
    }
    if (gt) {
      if (nt && Ue(z), $t)
        for (at = R.call(z.ownerDocument); z.firstChild; ) at.appendChild(z.firstChild);
      else at = z;
      return (O.shadowroot || O.shadowrootmode) && (at = X.call(u, at, !0)), at;
    }
    let yt = ut ? z.outerHTML : z.innerHTML;
    return ut && n["!doctype"] && z.ownerDocument && z.ownerDocument.doctype && z.ownerDocument.doctype.name && At(bi, z.ownerDocument.doctype.name) && (yt = "<!DOCTYPE " + z.ownerDocument.doctype.name + `>
` + yt), nt && (yt = Ae(yt)), N && Vt ? j(yt) : yt;
  }, o.setConfig = function() {
    let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    je(K), St = !0, Wt = n, Tt = O;
  }, o.clearConfig = function() {
    re = null, St = !1, Wt = null, Tt = null, N = Y, q = "";
  }, o.isValidAttribute = function(K, b, z) {
    re || je({});
    const V = wt(K), tt = wt(b);
    return Tn(V, tt, z);
  }, o.addHook = function(K, b) {
    typeof b == "function" && zt(B, K) && ge(B[K], b);
  }, o.removeHook = function(K, b) {
    if (zt(B, K)) {
      if (b !== void 0) {
        const z = ti(B[K], b);
        return z === -1 ? void 0 : ei(B[K], z, 1)[0];
      }
      return Nn(B[K]);
    }
  }, o.removeHooks = function(K) {
    zt(B, K) && (B[K] = []);
  }, o.removeAllHooks = function() {
    B = Gn();
  }, o;
}
var Ai = fr();
const pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ai
}, Symbol.toStringTag, { value: "Module" }));
/*
 * @license
 * docx-preview <https://github.com/VolodymyrBaydalka/docxjs>
 * Released under Apache License 2.0  <https://github.com/VolodymyrBaydalka/docxjs/blob/master/LICENSE>
 * Copyright Volodymyr Baydalka
 */
var le;
(function(t) {
  t.OfficeDocument = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument", t.FontTable = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable", t.Image = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image", t.Numbering = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering", t.Styles = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles", t.StylesWithEffects = "http://schemas.microsoft.com/office/2007/relationships/stylesWithEffects", t.Theme = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme", t.Settings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings", t.WebSettings = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings", t.Hyperlink = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", t.Footnotes = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes", t.Endnotes = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes", t.Footer = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer", t.Header = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header", t.ExtendedProperties = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties", t.CoreProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties", t.CustomProperties = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/custom-properties", t.Comments = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments", t.CommentsExtended = "http://schemas.microsoft.com/office/2011/relationships/commentsExtended", t.AltChunk = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/aFChunk";
})(le || (le = {}));
var $n;
(function(t) {
  t.Continuous = "continuous", t.NextPage = "nextPage", t.NextColumn = "nextColumn", t.EvenPage = "evenPage", t.OddPage = "oddPage";
})($n || ($n = {}));
var bt;
(function(t) {
  t.Document = "document", t.Paragraph = "paragraph", t.Run = "run", t.Break = "break", t.NoBreakHyphen = "noBreakHyphen", t.Table = "table", t.Row = "row", t.Cell = "cell", t.Hyperlink = "hyperlink", t.SmartTag = "smartTag", t.Drawing = "drawing", t.Image = "image", t.Text = "text", t.Tab = "tab", t.Symbol = "symbol", t.BookmarkStart = "bookmarkStart", t.BookmarkEnd = "bookmarkEnd", t.Footer = "footer", t.Header = "header", t.FootnoteReference = "footnoteReference", t.EndnoteReference = "endnoteReference", t.Footnote = "footnote", t.Endnote = "endnote", t.SimpleField = "simpleField", t.ComplexField = "complexField", t.Instruction = "instruction", t.VmlPicture = "vmlPicture", t.MmlMath = "mmlMath", t.MmlMathParagraph = "mmlMathParagraph", t.MmlFraction = "mmlFraction", t.MmlFunction = "mmlFunction", t.MmlFunctionName = "mmlFunctionName", t.MmlNumerator = "mmlNumerator", t.MmlDenominator = "mmlDenominator", t.MmlRadical = "mmlRadical", t.MmlBase = "mmlBase", t.MmlDegree = "mmlDegree", t.MmlSuperscript = "mmlSuperscript", t.MmlSubscript = "mmlSubscript", t.MmlPreSubSuper = "mmlPreSubSuper", t.MmlSubArgument = "mmlSubArgument", t.MmlSuperArgument = "mmlSuperArgument", t.MmlNary = "mmlNary", t.MmlDelimiter = "mmlDelimiter", t.MmlRun = "mmlRun", t.MmlEquationArray = "mmlEquationArray", t.MmlLimit = "mmlLimit", t.MmlLimitLower = "mmlLimitLower", t.MmlMatrix = "mmlMatrix", t.MmlMatrixRow = "mmlMatrixRow", t.MmlBox = "mmlBox", t.MmlBar = "mmlBar", t.MmlGroupChar = "mmlGroupChar", t.VmlElement = "vmlElement", t.Inserted = "inserted", t.Deleted = "deleted", t.DeletedText = "deletedText", t.Comment = "comment", t.CommentReference = "commentReference", t.CommentRangeStart = "commentRangeStart", t.CommentRangeEnd = "commentRangeEnd", t.AltChunk = "altChunk";
})(bt || (bt = {}));
le.OfficeDocument, le.ExtendedProperties, le.CoreProperties, le.CustomProperties;
bt.MmlMath, bt.MmlMathParagraph, bt.MmlFraction, bt.MmlFunction, bt.MmlFunctionName, bt.MmlNumerator, bt.MmlDenominator, bt.MmlRadical, bt.MmlDegree, bt.MmlBase, bt.MmlSuperscript, bt.MmlSubscript, bt.MmlPreSubSuper, bt.MmlSuperArgument, bt.MmlSubArgument, bt.MmlDelimiter, bt.MmlNary, bt.MmlEquationArray, bt.MmlLimit, bt.MmlLimitLower, bt.MmlMatrix, bt.MmlMatrixRow, bt.MmlBox, bt.MmlBar, bt.MmlGroupChar;
/*! pako 2.2.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
function ue(t) {
  let o = t.length;
  for (; --o >= 0; )
    t[o] = 0;
}
const Ti = 3, Ci = 258, hr = 29, Li = 256, zi = Li + 1 + hr, mr = 30, Oi = 512, Mi = new Array((zi + 2) * 2);
ue(Mi);
const Ni = new Array(mr * 2);
ue(Ni);
const Pi = new Array(Oi);
ue(Pi);
const Ri = new Array(Ci - Ti + 1);
ue(Ri);
const Ii = new Array(hr);
ue(Ii);
const Fi = new Array(mr);
ue(Fi);
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
}
const on = new Uint8Array(256);
for (let t = 0; t < 256; t++)
  on[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
on[254] = on[255] = 1;
var Me = {
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
async function Di(t, o, e) {
  if (typeof t == "string") {
    const a = o || ji(t) || "remote-file", s = Pe(a);
    return Ne({
      source: t,
      name: a,
      extension: s,
      mimeType: e || Me[s] || "",
      url: t
    }, e);
  }
  if (t instanceof File) {
    const a = Pe(o || t.name);
    return Ne({
      source: t,
      name: o || t.name,
      extension: a,
      mimeType: e || t.type || Me[a] || "",
      size: t.size,
      blob: t
    }, e);
  }
  if (t instanceof Blob) {
    const a = o || "blob", s = Pe(a);
    return Ne({
      source: t,
      name: a,
      extension: s,
      mimeType: e || t.type || Me[s] || "",
      size: t.size,
      blob: t
    }, e);
  }
  const u = o || "buffer", r = Pe(u), i = new Blob([t], { type: e || Me[r] || "" });
  return Ne({
    source: t,
    name: u,
    extension: r,
    mimeType: i.type,
    size: i.size,
    blob: i
  }, e);
}
var gr = /* @__PURE__ */ new WeakSet();
function Ne(t, o) {
  return o && gr.add(t), t;
}
function Bi(t) {
  return gr.has(t);
}
function ji(t) {
  var e;
  const o = ((e = t.split(/[?#]/, 1)[0]) == null ? void 0 : e.split("/").filter(Boolean).pop()) || "";
  if (!o)
    return "";
  try {
    return decodeURIComponent(o);
  } catch {
    return o;
  }
}
function Pe(t) {
  var u;
  const o = ((u = t.split("?")[0]) == null ? void 0 : u.split("#")[0]) || "", e = o.lastIndexOf(".");
  return e >= 0 ? o.slice(e + 1).split("!", 1)[0].toLowerCase() : "";
}
function Ui(t) {
  const o = Wi(t.name), e = o.split(".")[0];
  return t.mimeType.startsWith("text/") || [
    "application/json",
    "application/json5",
    "application/x-ipynb+json",
    "application/xml",
    "application/yaml",
    "application/x-yaml",
    "application/sql",
    "application/x-sh",
    "application/x-httpd-php",
    "application/javascript",
    "application/x-javascript",
    "application/typescript",
    "application/x-typescript",
    "application/toml",
    "application/x-toml",
    "application/x-ndjson",
    "application/graphql",
    "application/x-pem-file",
    "application/x-x509-ca-cert",
    "application/pkix-cert",
    "application/x-tex",
    "application/lrc",
    "application/x-lrc",
    "message/http",
    "text/calendar",
    "text/vcard",
    "text/x-bibtex",
    "text/x-hcl",
    "text/x-protobuf",
    "text/vnd.graphviz"
  ].includes(t.mimeType) || [
    "txt",
    "lrc",
    "json",
    "jsonc",
    "json5",
    "ipynb",
    "jsonl",
    "ndjson",
    "xml",
    "yaml",
    "yml",
    "csv",
    "log",
    "env",
    "gitignore",
    "dockerignore",
    "npmrc",
    "yarnrc",
    "pnpmrc",
    "editorconfig",
    "browserslistrc",
    "prettierrc",
    "eslintrc",
    "stylelintrc",
    "conf",
    "config",
    "properties",
    "lock",
    "md",
    "markdown",
    "mmd",
    "mermaid",
    "js",
    "mjs",
    "cjs",
    "ts",
    "tsx",
    "jsx",
    "vue",
    "css",
    "scss",
    "less",
    "html",
    "htm",
    "toml",
    "ini",
    "proto",
    "tf",
    "tfvars",
    "hcl",
    "tex",
    "latex",
    "bib",
    "gv",
    "http",
    "java",
    "py",
    "go",
    "rs",
    "rb",
    "swift",
    "kt",
    "kts",
    "scala",
    "lua",
    "r",
    "dart",
    "svelte",
    "astro",
    "elm",
    "ex",
    "exs",
    "clj",
    "cljs",
    "erl",
    "hrl",
    "fs",
    "fsx",
    "hs",
    "lhs",
    "php",
    "c",
    "cpp",
    "h",
    "hpp",
    "cs",
    "sql",
    "sh",
    "bash",
    "zsh",
    "fish",
    "ps1",
    "bat",
    "cmd",
    "dockerfile",
    "nginxconf",
    "gradle",
    "graphql",
    "gql",
    "pem",
    "crt",
    "cer",
    "ics",
    "vcf",
    "diff",
    "patch"
  ].includes(t.extension) || [
    "dockerfile",
    "makefile",
    "rakefile",
    "gemfile",
    "procfile",
    "jenkinsfile",
    "vagrantfile",
    "brewfile",
    "podfile",
    "go.mod",
    "go.sum",
    "cargo.toml",
    "cargo.lock",
    ".gitignore",
    ".dockerignore",
    ".npmrc",
    ".yarnrc",
    ".pnpmrc",
    ".editorconfig",
    ".browserslistrc",
    ".prettierrc",
    ".eslintrc",
    ".stylelintrc"
  ].includes(o) || [
    "readme",
    "changelog",
    "changes",
    "history",
    "license",
    "licence",
    "copying",
    "notice",
    "authors",
    "contributors",
    "codeowners"
  ].includes(e);
}
function Wi(t) {
  return (t.split(/[\\/]/).pop() || t).toLowerCase();
}
function Hi(t) {
  if (typeof t != "string")
    return t;
  const o = document.querySelector(t);
  if (!o)
    throw new Error(`File viewer container not found: ${t}`);
  return o;
}
function Zi(t, o, e) {
  o !== void 0 && (t.style.width = typeof o == "number" ? `${o}px` : o), e !== void 0 && (t.style.height = typeof e == "number" ? `${e}px` : e);
}
function qn(t) {
  const o = t.getBoundingClientRect();
  return {
    width: Math.max(0, Math.round(o.width)),
    height: Math.max(0, Math.round(o.height))
  };
}
function vr(t) {
  if (t.url)
    return t.url;
  if (!t.blob)
    throw new Error("File source cannot be converted to an object URL.");
  return URL.createObjectURL(t.blob);
}
function br(t, o) {
  o || URL.revokeObjectURL(t);
}
var Gi = {
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
function $i(t) {
  return {
    ...Gi[t.locale || "en-US"],
    ...t.messages
  };
}
function Vn(t, o) {
  return t.replace(/\{(\w+)\}/g, (e, u) => String(o[u] ?? e));
}
var Yn = "__ofvSafeSetImmediate__";
function qi(t) {
  const o = t;
  return !!(o.__POWERED_BY_QIANKUN__ || o.__MICRO_APP_ENVIRONMENT__ || o.__POWERED_BY_WUJIE__ || o.__GARFISH__);
}
function Vi(t) {
  let o = 1;
  const e = /* @__PURE__ */ new Map(), u = t.MessageChannel;
  if (typeof u == "function") {
    const i = new u();
    return i.port1.onmessage = (a) => {
      const s = e.get(a.data);
      s && (e.delete(a.data), s());
    }, {
      schedule(a, s) {
        const d = o++;
        return e.set(d, () => a(...s)), i.port2.postMessage(d), d;
      },
      cancel(a) {
        e.delete(a);
      }
    };
  }
  const r = /* @__PURE__ */ new Map();
  return {
    schedule(i, a) {
      const s = o++;
      return r.set(
        s,
        setTimeout(() => {
          r.delete(s), i(...a);
        }, 0)
      ), s;
    },
    cancel(i) {
      const a = r.get(i);
      a !== void 0 && (clearTimeout(a), r.delete(i));
    }
  };
}
function Yi(t = typeof window > "u" ? void 0 : window) {
  var r;
  if (!t || !qi(t))
    return;
  const o = t;
  if ((r = o.setImmediate) != null && r[Yn])
    return;
  const e = Vi(t), u = (i, ...a) => e.schedule(i, a);
  u[Yn] = !0, o.setImmediate = u, o.clearImmediate = (i) => e.cancel(i);
}
function _r() {
  return {
    name: "fallback",
    match() {
      return !0;
    },
    render(t) {
      var s, d;
      if ((d = (s = t.options).onUnsupported) == null || d.call(s, t.file), t.options.fallback === "custom" && t.options.renderFallback)
        return t.options.renderFallback(t);
      const o = vr(t.file), e = !!t.file.url, u = document.createElement("div");
      u.className = "ofv-fallback";
      const r = document.createElement("strong");
      r.textContent = t.options.fallback === "download" ? t.options.messages.downloadTitle : t.options.messages.unsupportedTitle;
      const i = Xi(t.file, t.options.messages), a = document.createElement("a");
      return a.href = o, a.download = t.file.name, a.textContent = t.options.messages.downloadFile, u.append(r, i, a), t.viewport.classList.add("ofv-center"), t.viewport.append(u), t.options.fallback === "download" && a.focus(), {
        destroy() {
          t.viewport.classList.remove("ofv-center"), br(o, e);
        }
      };
    }
  };
}
function Xi(t, o) {
  const e = document.createElement("dl");
  return e.className = "ofv-fallback-meta", _e(e, o.file, t.name || o.unnamedFile), _e(e, o.format, t.extension ? `.${t.extension}` : o.unknown), _e(e, o.mime, t.mimeType || o.undeclared), _e(e, o.size, t.size === void 0 ? o.unknown : Ki(t.size)), _e(e, o.source, t.url ? o.remoteUrl : o.localFile), e;
}
function _e(t, o, e) {
  const u = document.createElement("dt");
  u.textContent = o;
  const r = document.createElement("dd");
  r.textContent = e, t.append(u, r);
}
function Ki(t) {
  return t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(1)} KB` : `${(t / 1024 / 1024).toFixed(2)} MB`;
}
function Ji(t) {
  Yi();
  const o = Hi(t.container);
  Zi(o, t.width, t.height);
  const e = ta(t.className);
  o.classList.add("ofv-root"), e.length > 0 && o.classList.add(...e);
  const u = aa(o, t.theme || "light"), r = document.createElement("div");
  r.className = "ofv-host";
  const i = document.createElement("div");
  i.className = "ofv-status", i.setAttribute("role", "status"), i.hidden = !0;
  const a = document.createElement("div");
  a.className = "ofv-status-chip";
  const s = document.createElement("span");
  s.className = "ofv-status-spinner", s.setAttribute("aria-hidden", "true");
  const d = document.createElement("span");
  d.className = "ofv-status-text", a.append(s, d), i.append(a);
  const _ = document.createElement("div");
  _.className = "ofv-viewport";
  const x = ea(t);
  let v = Xn(t.initialIndex || 0, x.length), m, f = !1;
  const h = async (Y) => {
    p || x.length === 0 || (v = Xn(Y, x.length), await q(v));
  }, c = ca(
    t.toolbar,
    _,
    {
      getLength: () => x.length,
      next: () => h(v + 1),
      previous: () => h(v - 1),
      goToPage: (Y) => {
        var E;
        return ((E = m == null ? void 0 : m.goToPage) == null ? void 0 : E.call(m, Y)) ?? !1;
      },
      command: (Y) => {
        var E;
        return (E = m == null ? void 0 : m.command) == null ? void 0 : E.call(m, Y);
      },
      print: async () => {
        var E;
        if (f)
          return;
        f = !0;
        const Y = m;
        try {
          await ((E = Y == null ? void 0 : Y.preparePrint) == null ? void 0 : E.call(Y));
        } catch (I) {
          console.error("Failed to prepare file preview for printing:", I), f = !1;
          return;
        }
        f = !1, !(p || Y !== m) && xa(_);
      }
    },
    t.locale || "en-US"
  );
  c && r.append(c.element), r.append(i, _), o.replaceChildren(r);
  const g = {
    ...t,
    fit: t.fit || "contain",
    fitWasProvided: t.fit !== void 0,
    fallback: t.fallback || "inline",
    zoom: ia(t.zoom),
    messages: $i(t)
  };
  let p = !1, w = 0, A;
  const L = Qi(
    _,
    (Y) => !p && !!(m != null && m.command) && (m != null && m.canCommand ? m.canCommand(Y) : !0),
    (Y) => {
      var E;
      return (E = m == null ? void 0 : m.command) == null ? void 0 : E.call(m, Y);
    }
  ), T = (Y) => {
    i.hidden = !Y, i.classList.remove("ofv-status-error"), d.textContent = Y ? g.messages.loading : "";
  }, F = (Y) => {
    i.hidden = !1, i.classList.add("ofv-status-error"), d.textContent = typeof Y == "string" ? Y : Y.message;
  }, P = () => {
    var E;
    if (p)
      return;
    const Y = qn(_);
    (E = m == null ? void 0 : m.resize) == null || E.call(m, Y);
  }, W = oa(o, P), N = async (Y, E = ++w) => {
    var it, D, ot;
    if (p || E !== w)
      return;
    Ke(m), m = void 0, A == null || A.abort();
    const I = new AbortController();
    A = I, _.replaceChildren(), T(!0), c == null || c.update(Y, v, x.length);
    const l = [...t.plugins || [], _r()], j = await La(l, Y);
    if (!(p || E !== w))
      try {
        const H = await j.render({
          host: r,
          viewport: _,
          file: Y,
          size: qn(_),
          options: g,
          toolbar: c == null ? void 0 : c.getContext(),
          signal: I.signal,
          setLoading: T,
          setError: F
        });
        if (p || E !== w) {
          Ke(H);
          return;
        }
        A === I && (A = void 0), m = H, g.initialPage !== void 0 && ((it = H.goToPage) == null || it.call(H, g.initialPage)), T(!1), c == null || c.setCommandSupport(
          (rt) => !!H.command && (H.canCommand ? H.canCommand(rt) : !0)
        ), (D = t.onLoad) == null || D.call(t, Y), P();
      } catch (H) {
        if (A === I && (A = void 0), p || E !== w)
          return;
        const rt = H instanceof Error ? H : new Error(String(H));
        _.replaceChildren(), T(!1), F(rt), (ot = t.onError) == null || ot.call(t, rt, Y);
      }
  };
  async function q(Y) {
    const E = ++w;
    A == null || A.abort(), A = void 0;
    const I = x[Y], l = await Di(I.file, I.fileName, I.mimeType);
    p || E !== w || await N(l, E);
  }
  return h(v), {
    async reload(Y) {
      if (!p) {
        if (Y !== void 0) {
          const E = x[v];
          x.splice(v, 1, ra(Y, E, t));
        }
        await q(v);
      }
    },
    async next() {
      await h(v + 1);
    },
    async previous() {
      await h(v - 1);
    },
    goTo: h,
    goToPage(Y) {
      var E;
      return p ? !1 : ((E = m == null ? void 0 : m.goToPage) == null ? void 0 : E.call(m, Y)) ?? !1;
    },
    getCurrentIndex() {
      return v;
    },
    resize: P,
    destroy() {
      p = !0, w += 1, A == null || A.abort(), A = void 0, W.destroy(), L.destroy(), Ke(m), c == null || c.destroy(), u.destroy(), o.replaceChildren(), o.classList.remove("ofv-root"), e.length > 0 && o.classList.remove(...e);
    }
  };
}
function Qi(t, o, e) {
  let i = 0, a;
  const s = (v) => {
    if (v.defaultPrevented || !v.ctrlKey && !v.metaKey || v.deltaY === 0)
      return;
    const m = v.deltaY < 0 ? "zoom-in" : "zoom-out";
    if (!o(m)) {
      i = 0;
      return;
    }
    v.cancelable && v.preventDefault();
    const f = v.deltaY * (v.deltaMode === 0 ? 1 : 40);
    i !== 0 && Math.sign(i) !== Math.sign(f) && (i = 0), i += f, !(Math.abs(i) < 40) && (e(m), i = 0);
  }, d = (v) => {
    a = v.touches.length === 2 ? Xe(v.touches) : void 0;
  }, _ = (v) => {
    if (v.defaultPrevented || v.touches.length !== 2) {
      a = void 0;
      return;
    }
    const m = Xe(v.touches);
    if (!(m > 0))
      return;
    if (!(a && a > 0)) {
      a = m;
      return;
    }
    const f = m > a ? "zoom-in" : "zoom-out";
    if (!o(f))
      return;
    v.cancelable && v.preventDefault();
    const h = m / a;
    h < 1.08 && h > 1 / 1.08 || (e(f), a = m);
  }, x = (v) => {
    a = v.touches.length === 2 ? Xe(v.touches) : void 0;
  };
  return t.addEventListener("wheel", s, { passive: !1 }), t.addEventListener("touchstart", d, { passive: !0 }), t.addEventListener("touchmove", _, { passive: !1 }), t.addEventListener("touchend", x, { passive: !0 }), t.addEventListener("touchcancel", x, { passive: !0 }), {
    destroy() {
      t.removeEventListener("wheel", s), t.removeEventListener("touchstart", d), t.removeEventListener("touchmove", _), t.removeEventListener("touchend", x), t.removeEventListener("touchcancel", x);
    }
  };
}
function Xe(t) {
  const o = t.item(0), e = t.item(1);
  return o && e ? Math.hypot(e.clientX - o.clientX, e.clientY - o.clientY) : 0;
}
function ta(t) {
  return (t == null ? void 0 : t.trim().split(/\s+/).filter(Boolean)) ?? [];
}
function Ke(t) {
  if (t)
    try {
      t.destroy();
    } catch (o) {
      console.error("Failed to destroy file preview instance:", o);
    }
}
function ea(t) {
  if (t.files && t.files.length > 0)
    return t.files.map(
      (o) => na(o) ? o : {
        file: o
      }
    );
  if (t.file === void 0)
    throw new Error("File viewer requires either file or files.");
  return [
    {
      file: t.file,
      fileName: t.fileName,
      mimeType: t.mimeType
    }
  ];
}
function na(t) {
  return typeof t == "object" && t !== null && "file" in t;
}
function ra(t, o, e) {
  return typeof File < "u" && t instanceof File ? { file: t } : {
    file: t,
    fileName: (o == null ? void 0 : o.fileName) || e.fileName,
    mimeType: (o == null ? void 0 : o.mimeType) || e.mimeType
  };
}
function Xn(t, o) {
  return o <= 0 ? 0 : Math.min(Math.max(t, 0), o - 1);
}
function ia(t) {
  return typeof t == "number" && Number.isFinite(t) && t > 0 ? t : 1;
}
function aa(t, o) {
  var i;
  const e = (i = window.matchMedia) == null ? void 0 : i.call(window, "(prefers-color-scheme: dark)"), u = ["ofv-theme-light", "ofv-theme-dark"], r = () => {
    t.classList.remove(...u);
    const a = o === "auto" && (e != null && e.matches) ? "dark" : o === "auto" ? "light" : o;
    t.classList.add(`ofv-theme-${a}`);
  };
  return r(), o === "auto" && sa(e, r), {
    destroy() {
      o === "auto" && la(e, r), t.classList.remove(...u);
    }
  };
}
function oa(t, o) {
  if (typeof ResizeObserver < "u") {
    const e = new ResizeObserver(o);
    return e.observe(t), {
      destroy() {
        e.disconnect();
      }
    };
  }
  return window.addEventListener("resize", o), {
    destroy() {
      window.removeEventListener("resize", o);
    }
  };
}
function sa(t, o) {
  var e;
  if (t) {
    if (typeof t.addEventListener == "function") {
      t.addEventListener("change", o);
      return;
    }
    (e = t.addListener) == null || e.call(t, o);
  }
}
function la(t, o) {
  var e;
  if (t) {
    if (typeof t.removeEventListener == "function") {
      t.removeEventListener("change", o);
      return;
    }
    (e = t.removeListener) == null || e.call(t, o);
  }
}
function ca(t, o, e, u) {
  if (!t)
    return;
  const r = typeof t == "boolean" ? { zoom: !0, rotate: !0, download: !0, fullscreen: !0, print: !0, search: !0 } : t, i = document.createElement("div");
  i.className = "ofv-toolbar", i.setAttribute("role", "toolbar"), i.setAttribute("aria-label", Re[u].ariaLabel);
  let a, s = 0, d = e.getLength(), _, x, v, m, f, h;
  const c = [], g = [], p = [], w = va(o);
  let A, L, T = (S) => !1;
  const F = () => ua({
    file: a,
    index: s,
    length: d,
    viewport: o,
    queue: e,
    element: i,
    search: w,
    canCommand: T,
    refreshCommandSupport: D,
    zoom: h,
    setZoom: j
  }), P = (S, X, B, $, ct, lt = !1) => {
    const st = document.createElement("button");
    return st.type = "button", Je(st, S, ct, lt), st.title = X, st.setAttribute("aria-label", X), $ && (st.className = $), st.addEventListener("click", B), i.append(st), p.push(() => st.removeEventListener("click", B)), st;
  }, W = (S, X, B, $) => {
    const ct = P(X, B, () => {
      e.command($);
    }, void 0, te(r, S), S !== "zoom-reset");
    ct.disabled = !0, c.push({ button: ct, command: $ });
  }, N = (S) => {
    var X, B;
    if (!ga(S)) {
      const $ = (X = r.actions) == null ? void 0 : X.find((ct) => ct.id === S);
      $ && q($);
      return;
    }
    if (S === "previous" && e.getLength() > 1) {
      x = P(
        Nt(r, u, "previous"),
        Pt(r, u, "previous"),
        () => void e.previous(),
        void 0,
        te(r, "previous"),
        !0
      );
      return;
    }
    if (S === "next" && e.getLength() > 1) {
      v = P(
        Nt(r, u, "next"),
        Pt(r, u, "next"),
        () => void e.next(),
        void 0,
        te(r, "next"),
        !0
      );
      return;
    }
    if (S === "queue" && e.getLength() > 1) {
      _ = document.createElement("span"), _.className = "ofv-toolbar-queue", i.append(_);
      return;
    }
    if (S === "zoom-out" && r.zoom) {
      W(S, Nt(r, u, S), Pt(r, u, S), "zoom-out");
      return;
    }
    if (S === "zoom-in" && r.zoom) {
      W(S, Nt(r, u, S), Pt(r, u, S), "zoom-in");
      return;
    }
    if (S === "zoom-reset" && r.zoom) {
      W(S, Nt(r, u, S), Pt(r, u, S), "zoom-reset"), m = (B = c[c.length - 1]) == null ? void 0 : B.button, it();
      return;
    }
    if (S === "rotate-left" && r.rotate) {
      W(S, Nt(r, u, S), Pt(r, u, S), "rotate-left");
      return;
    }
    if (S === "rotate-right" && r.rotate) {
      W(S, Nt(r, u, S), Pt(r, u, S), "rotate-right");
      return;
    }
    if (S === "download" && r.download !== !1) {
      P(
        Nt(r, u, S),
        Pt(r, u, S),
        () => F().download(),
        void 0,
        te(r, "download"),
        !0
      );
      return;
    }
    if (S === "fullscreen" && r.fullscreen !== !1) {
      f = P(
        Nt(r, u, S),
        Pt(r, u, S),
        () => F().fullscreen(),
        void 0,
        te(r, "fullscreen"),
        !0
      ), H();
      return;
    }
    if (S === "print" && r.print) {
      P(
        Nt(r, u, S),
        Pt(r, u, S),
        () => F().print(),
        void 0,
        te(r, "print"),
        !0
      );
      return;
    }
    if (S === "search" && r.search !== !1) {
      Y();
      return;
    }
  }, q = (S) => {
    const X = P(
      S.label,
      S.title || S.label,
      () => void S.onClick(F()),
      S.className,
      S.icon
    );
    X.dataset.ofvToolbarAction = S.id, g.push({ button: X, action: S });
  }, Y = () => {
    const S = document.createElement("div");
    S.className = "ofv-toolbar-search", S.title = Pt(r, u, "search");
    const X = document.createElement("span");
    X.className = "ofv-toolbar-search-icon", X.setAttribute("aria-hidden", "true"), X.append(wr(sn.search ?? "")), S.append(X);
    const B = document.createElement("input");
    B.type = "search", B.placeholder = Nt(r, u, "search"), B.setAttribute("aria-label", Pt(r, u, "search"));
    const $ = document.createElement("span");
    $.className = "ofv-toolbar-search-count", A = B, L = $;
    const ct = () => {
      const lt = w.search(B.value);
      $.textContent = B.value ? String(lt) : "";
    };
    B.addEventListener("input", ct), S.append(B, $), i.append(S), p.push(() => B.removeEventListener("input", ct));
  };
  (() => {
    if (r.render) {
      i.replaceChildren();
      const X = r.render(F());
      X && i.append(X);
      return;
    }
    const S = fa(r, e.getLength());
    if (r.order)
      S.forEach(N);
    else {
      const X = /* @__PURE__ */ new Set();
      for (const B of da) {
        const $ = B.filter((lt) => S.includes(lt));
        if ($.length === 0)
          continue;
        const ct = i.childElementCount;
        for (const lt of $)
          X.add(lt), N(lt);
        if (ct > 0 && i.childElementCount > ct) {
          const lt = document.createElement("span");
          lt.className = "ofv-toolbar-sep", lt.setAttribute("aria-hidden", "true"), i.insertBefore(lt, i.children[ct]);
        }
      }
      S.filter((B) => !X.has(B)).forEach(N);
    }
    pa(r).forEach(q);
  })();
  const I = () => {
    const S = F();
    for (const { button: X, action: B } of g)
      X.disabled = Kn(B.disabled, S), X.hidden = Kn(B.hidden, S);
  }, l = () => {
    w.clear(), A && (A.value = ""), L && (L.textContent = "");
  };
  function j(S) {
    h = typeof S == "number" && Number.isFinite(S) && S > 0 ? S : void 0, it(), I(), R();
  }
  function it() {
    var S;
    m && (Je(
      m,
      h === void 0 ? Nt(r, u, "zoom-reset") : yr(h),
      (S = r.icons) == null ? void 0 : S["zoom-reset"]
    ), m.classList.add("ofv-toolbar-zoom-reset"));
  }
  function D() {
    c.forEach(({ button: S, command: X }) => {
      S.disabled = !T(X);
    }), I(), R();
  }
  function ot() {
    return !!(typeof document < "u" && i.parentElement && document.fullscreenElement === i.parentElement);
  }
  function H() {
    var ct, lt;
    if (!f)
      return;
    const S = ot(), X = S ? "exit-fullscreen" : "fullscreen", B = S ? ((ct = r.icons) == null ? void 0 : ct["exit-fullscreen"]) ?? ((lt = r.icons) == null ? void 0 : lt.fullscreen) ?? sn["exit-fullscreen"] : te(r, "fullscreen");
    Je(f, Nt(r, u, X), B, !0);
    const $ = Pt(r, u, X);
    f.title = $, f.setAttribute("aria-label", $), f.setAttribute("aria-pressed", String(S));
  }
  const rt = () => {
    H(), R();
  };
  typeof document < "u" && (document.addEventListener("fullscreenchange", rt), p.push(() => document.removeEventListener("fullscreenchange", rt)));
  const R = () => {
    if (!r.render)
      return;
    i.replaceChildren();
    const S = r.render(F());
    S && i.append(S);
  };
  return {
    element: i,
    update(S, X, B) {
      a = S, s = X, d = B, h = void 0, it(), l(), c.forEach(({ button: $ }) => {
        $.disabled = !0;
      }), _ && (_.textContent = `${X + 1} / ${B}`), x && (x.disabled = X <= 0), v && (v.disabled = X >= B - 1), I(), R();
    },
    setCommandSupport(S) {
      T = S, !T("zoom-in") && !T("zoom-out") && !T("zoom-reset") && (h = void 0, it()), D();
    },
    getContext: F,
    setZoom: j,
    destroy() {
      w.clear();
      for (const S of p)
        S();
      i.replaceChildren();
    }
  };
}
function ua({
  file: t,
  index: o,
  length: e,
  viewport: u,
  queue: r,
  element: i,
  search: a,
  canCommand: s,
  refreshCommandSupport: d,
  zoom: _,
  setZoom: x
}) {
  return {
    file: t,
    index: o,
    length: e,
    viewport: u,
    canPrevious: o > 0,
    canNext: o < e - 1,
    isFullscreen: !!(typeof document < "u" && i.parentElement && document.fullscreenElement === i.parentElement),
    zoom: _,
    zoomLabel: _ === void 0 ? void 0 : yr(_),
    async previous() {
      await r.previous();
    },
    async next() {
      await r.next();
    },
    goToPage: r.goToPage,
    command: r.command,
    canCommand: s,
    refreshCommandSupport: d,
    setZoom: x,
    download() {
      t && Ca(t);
    },
    fullscreen() {
      var m, f;
      const v = i.parentElement;
      v && (typeof document < "u" && document.fullscreenElement === v ? (m = document.exitFullscreen) == null || m.call(document) : (f = v.requestFullscreen) == null || f.call(v));
    },
    print() {
      r.print();
    },
    search: a.search,
    clearSearch: a.clear
  };
}
var Ut = (t) => `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${t}</svg>`, sn = {
  previous: Ut('<path d="M9.8 3.8 5.6 8l4.2 4.2"/>'),
  next: Ut('<path d="M6.2 3.8 10.4 8l-4.2 4.2"/>'),
  "zoom-out": Ut(
    '<circle cx="7.2" cy="7.2" r="4.4"/><path d="M13.5 13.5l-3.2-3.2"/><path d="M5.4 7.2h3.6"/>'
  ),
  "zoom-in": Ut(
    '<circle cx="7.2" cy="7.2" r="4.4"/><path d="M13.5 13.5l-3.2-3.2"/><path d="M5.4 7.2h3.6"/><path d="M7.2 5.4v3.6"/>'
  ),
  "rotate-left": Ut(
    '<path d="M2.2 8a5.8 5.8 0 1 0 1.7-4.1L2.2 5.6"/><path d="M2.2 2.2v3.4h3.4"/>'
  ),
  "rotate-right": Ut(
    '<path d="M13.8 8a5.8 5.8 0 1 1-1.7-4.1l1.7 1.7"/><path d="M13.8 2.2v3.4h-3.4"/>'
  ),
  download: Ut(
    '<path d="M8 2.6v6.9"/><path d="m4.9 6.6 3.1 3.1 3.1-3.1"/><path d="M2.9 11.2v1a1.3 1.3 0 0 0 1.3 1.3h7.6a1.3 1.3 0 0 0 1.3-1.3v-1"/>'
  ),
  fullscreen: Ut(
    '<path d="M6 2.9H4.2A1.3 1.3 0 0 0 2.9 4.2V6"/><path d="M10 2.9h1.8a1.3 1.3 0 0 1 1.3 1.3V6"/><path d="M6 13.1H4.2a1.3 1.3 0 0 1-1.3-1.3V10"/><path d="M10 13.1h1.8a1.3 1.3 0 0 0 1.3-1.3V10"/>'
  ),
  "exit-fullscreen": Ut(
    '<path d="M2.9 6h1.8A1.3 1.3 0 0 0 6 4.7V2.9"/><path d="M13.1 6h-1.8A1.3 1.3 0 0 1 10 4.7V2.9"/><path d="M2.9 10h1.8A1.3 1.3 0 0 1 6 11.3v1.8"/><path d="M13.1 10h-1.8a1.3 1.3 0 0 0-1.3 1.3v1.8"/>'
  ),
  print: Ut(
    '<path d="M4.7 5.8V2.9h6.6v2.9"/><path d="M4.7 11.4H3.5a1.3 1.3 0 0 1-1.3-1.3V7.2a1.4 1.4 0 0 1 1.4-1.4h8.8a1.4 1.4 0 0 1 1.4 1.4v2.9a1.3 1.3 0 0 1-1.3 1.3h-1.2"/><path d="M4.7 9.5h6.6v3.6H4.7z"/>'
  ),
  search: Ut('<circle cx="7.2" cy="7.2" r="4.4"/><path d="M13.5 13.5l-3.2-3.2"/>')
};
function te(t, o) {
  var e;
  return ((e = t.icons) == null ? void 0 : e[o]) ?? sn[o];
}
var da = [
  ["previous", "next", "queue"],
  ["zoom-out", "zoom-in", "zoom-reset", "rotate-left", "rotate-right"],
  ["download", "fullscreen", "print"]
], Re = {
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
function Nt(t, o, e) {
  var u;
  return ((u = t.labels) == null ? void 0 : u[e]) ?? Re[o].labels[e];
}
function Pt(t, o, e) {
  var u, r;
  return ((u = t.titles) == null ? void 0 : u[e]) ?? ((r = t.labels) == null ? void 0 : r[e]) ?? Re[o].titles[e];
}
function yr(t) {
  return `${Math.round(t * 100)}%`;
}
function fa(t, o) {
  if (t.order)
    return t.order;
  const e = [];
  return o > 1 && e.push("previous", "next", "queue"), t.zoom && e.push("zoom-out", "zoom-in", "zoom-reset"), t.rotate && e.push("rotate-left", "rotate-right"), t.download !== !1 && e.push("download"), t.fullscreen !== !1 && e.push("fullscreen"), t.print && e.push("print"), t.search !== !1 && e.push("search"), e;
}
function pa(t) {
  return t.order || !t.actions ? [] : [...t.actions].sort((o, e) => (o.order ?? 0) - (e.order ?? 0));
}
function Kn(t, o) {
  return typeof t == "function" ? t(o) : !!t;
}
function Je(t, o, e, u = !1) {
  if (t.replaceChildren(), t.classList.toggle("ofv-toolbar-icon-button", !!e && u), !e) {
    t.textContent = o;
    return;
  }
  const r = document.createElement("span");
  r.className = "ofv-toolbar-icon", r.setAttribute("aria-hidden", "true"), typeof e == "string" ? r.append(wr(e)) : r.append(e.cloneNode(!0));
  const i = document.createElement("span");
  i.className = "ofv-toolbar-label", i.textContent = o, t.append(r, i);
}
var ha = /* @__PURE__ */ new Set([
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
]), Jn = /* @__PURE__ */ new Set([
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
function wr(t) {
  const o = document.createElement("template");
  o.innerHTML = t.trim();
  const e = document.createDocumentFragment();
  for (const u of Array.from(o.content.childNodes)) {
    const r = xr(u);
    r && e.append(r);
  }
  return e;
}
function xr(t) {
  if (t.nodeType === Node.TEXT_NODE) {
    const u = t.textContent || "";
    return u.trim() ? document.createTextNode(u) : null;
  }
  if (!(t instanceof Element))
    return null;
  const o = t.tagName.toLowerCase();
  if (!ha.has(o))
    return null;
  const e = document.createElementNS("http://www.w3.org/2000/svg", o);
  for (const u of Array.from(t.attributes))
    ma(u.name, u.value) && e.setAttribute(u.name, u.value);
  for (const u of Array.from(t.childNodes)) {
    const r = xr(u);
    r && e.append(r);
  }
  return e;
}
function ma(t, o) {
  const e = t.toLowerCase();
  return e.startsWith("on") || e.includes(":") || !Jn.has(t) && !Jn.has(e) && !e.startsWith("data-") ? !1 : !/^\s*(?:javascript|data:text\/html|vbscript):/i.test(o);
}
function ga(t) {
  return t in Re["en-US"].labels;
}
function va(t) {
  const o = "ofv-search-match", e = () => {
    const r = Qe(t).flatMap((i) => [
      ...i.querySelectorAll(`mark.${o}`)
    ]);
    for (const i of r)
      i.replaceWith(document.createTextNode(i.textContent || ""));
    Qe(t).forEach((i) => i.normalize());
  };
  return { search: (r) => {
    var _;
    e();
    const i = r.trim();
    if (!i)
      return 0;
    const a = Qe(t).flatMap((x) => ba(x));
    let s = 0, d;
    for (const x of a) {
      const v = x.nodeValue || "", m = v.toLowerCase(), f = i.toLowerCase();
      let h = 0, c = m.indexOf(f, h);
      if (c < 0)
        continue;
      const g = document.createDocumentFragment();
      for (; c >= 0; ) {
        c > h && g.append(document.createTextNode(v.slice(h, c)));
        const p = document.createElement("mark");
        p.className = o, p.textContent = v.slice(c, c + i.length), g.append(p), d || (d = p), s += 1, h = c + i.length, c = m.indexOf(f, h);
      }
      h < v.length && g.append(document.createTextNode(v.slice(h))), x.replaceWith(g);
    }
    return (_ = d == null ? void 0 : d.scrollIntoView) == null || _.call(d, { block: "center", inline: "nearest" }), s;
  }, clear: e };
}
function Qe(t) {
  var e;
  const o = [t];
  for (const u of t.querySelectorAll("iframe"))
    try {
      const r = (e = u.contentDocument) == null ? void 0 : e.body;
      r && o.push(r);
    } catch {
    }
  return o;
}
function ba(t) {
  const o = [], e = document.createTreeWalker(t, NodeFilter.SHOW_TEXT, {
    acceptNode(r) {
      var a;
      const i = r.parentElement;
      return !i || !((a = r.nodeValue) != null && a.trim()) || ["SCRIPT", "STYLE", "TEXTAREA", "INPUT", "BUTTON"].includes(i.tagName) || _a(i, t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  let u = e.nextNode();
  for (; u; )
    o.push(u), u = e.nextNode();
  return o;
}
function _a(t, o) {
  let e = t;
  for (; e; ) {
    if (e.hidden || e.getAttribute("aria-hidden") === "true" || e.style.display === "none" || e.style.visibility === "hidden")
      return !0;
    if (e === o)
      break;
    e = e.parentElement;
  }
  return !1;
}
var ya = 15e3, wa = 5 * 6e4;
function xa(t) {
  var w;
  const o = document.createElement("iframe");
  o.className = "ofv-print-frame", o.setAttribute("aria-hidden", "true"), document.body.append(o);
  const e = t.cloneNode(!0);
  Ta(t, e), e.classList.add("ofv-print-root", "ofv-root");
  const u = t.querySelector(".ofv-docx-page-frame > section.ofv-docx"), r = u ? getComputedStyle(u) : void 0, i = Number.parseFloat((r == null ? void 0 : r.width) || ""), a = Number.parseFloat((r == null ? void 0 : r.height) || ""), s = Number.isFinite(i) && Number.isFinite(a) ? `size: ${i}px ${a}px;` : "", d = e.querySelector(".ofv-pptx-viewer") || (e.classList.contains("ofv-pptx-viewer") ? e : null);
  let _ = 960, x = 540, v = !1;
  if (d) {
    const A = d.querySelectorAll("[data-slide-index]");
    if (A.length > 0) {
      v = !0;
      const L = A[0].firstElementChild, T = L == null ? void 0 : L.firstElementChild;
      T && (_ = parseInt(T.style.width) || 960, x = parseInt(T.style.height) || 540), A.forEach((F) => {
        const P = F;
        P.style.width = "100%", P.style.margin = "0 0 20px 0";
        const W = P.firstElementChild;
        if (W) {
          W.style.width = `${_}px`, W.style.height = `${x}px`, W.style.boxShadow = "none", W.style.margin = "0 auto";
          const N = W.firstElementChild;
          N && (N.style.transform = "none", N.style.width = `${_}px`, N.style.height = `${x}px`);
        }
      });
    }
  }
  const m = o.contentDocument;
  if (!m) {
    o.remove();
    return;
  }
  m.open(), m.write(`<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Print preview</title>
      </head>
      <body></body>
    </html>`), m.close(), Array.from(document.querySelectorAll("style, link[rel='stylesheet']")).forEach((A) => {
    m.head.appendChild(A.cloneNode(!0));
  });
  const f = m.createElement("style");
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
  `, m.head.appendChild(f), u) {
    const A = m.createElement("style");
    A.textContent = `
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
    `, m.head.appendChild(A);
  }
  if (v) {
    const A = m.createElement("style");
    A.textContent = `
      @media print {
        @page {
          size: ${_ > x ? "landscape" : "portrait"};
          margin: 0;
        }
        html, body {
          background: #fff;
        }
        body {
          width: ${_}px !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .ofv-print-root {
          width: ${_}px !important;
          padding: 0 !important;
        }
        .ofv-pptx-viewer {
          width: ${_}px !important;
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
    `, m.head.appendChild(A);
  }
  m.body.append(e);
  const h = o.contentWindow;
  if (!h) {
    o.remove();
    return;
  }
  let c = !1, g;
  const p = () => {
    var A;
    c || (c = !0, window.clearTimeout(g), (A = h.removeEventListener) == null || A.call(h, "afterprint", p), o.remove());
  };
  (w = h.addEventListener) == null || w.call(h, "afterprint", p, { once: !0 }), ka(m).then(() => {
    if (!(c || !o.isConnected)) {
      g = window.setTimeout(p, wa);
      try {
        h.focus(), h.print();
      } catch {
        p();
      }
    }
  });
}
async function ka(t) {
  var e;
  const o = [];
  for (const u of Array.from(t.images))
    o.push(Ea(u));
  for (const u of Array.from(t.querySelectorAll("link[rel='stylesheet']")))
    o.push(Sa(u));
  (e = t.fonts) != null && e.ready && o.push(Promise.resolve(t.fonts.ready).then(() => {
  }, () => {
  })), await Aa(o), t.body.offsetHeight, await new Promise((u) => window.setTimeout(u, 0));
}
function Ea(t) {
  return typeof t.decode == "function" ? t.decode().then(() => {
  }, () => {
  }) : t.complete ? Promise.resolve() : kr(t);
}
function Sa(t) {
  try {
    if (t.sheet)
      return Promise.resolve();
  } catch {
  }
  return kr(t);
}
function kr(t) {
  return new Promise((o) => {
    const e = () => {
      t.removeEventListener("load", e), t.removeEventListener("error", e), o();
    };
    t.addEventListener("load", e, { once: !0 }), t.addEventListener("error", e, { once: !0 });
  });
}
function Aa(t) {
  return t.length === 0 ? Promise.resolve() : new Promise((o) => {
    let e = !1;
    const u = () => {
      e || (e = !0, window.clearTimeout(r), o());
    }, r = window.setTimeout(u, ya);
    Promise.all(t).then(u, u);
  });
}
function Ta(t, o) {
  const e = [...t.querySelectorAll("canvas")], u = [...o.querySelectorAll("canvas")];
  e.forEach((r, i) => {
    const a = u[i];
    if (!a)
      return;
    const s = document.createElement("img");
    s.className = a.className, s.alt = "Canvas preview page";
    try {
      s.src = r.toDataURL("image/png");
    } catch {
      return;
    }
    s.width = r.width, s.height = r.height, a.replaceWith(s);
  });
}
function Ca(t) {
  const o = vr(t), e = !!t.url, u = document.createElement("a");
  u.href = o, u.download = t.name, u.rel = "noopener", u.hidden = !0, document.body.append(u), u.click(), window.setTimeout(() => {
    u.remove(), br(o, e);
  }, 0);
}
async function La(t, o) {
  for (const e of t)
    if (await e.match(o))
      return e;
  return _r();
}
function za(t, o = 0.1, e = 8) {
  return Math.min(e, Math.max(o, t.options.zoom));
}
function tn(t) {
  return Oa(new Uint8Array(t));
}
function Oa(t) {
  if (t.length >= 3 && t[0] === 239 && t[1] === 187 && t[2] === 191)
    return new TextDecoder("utf-8").decode(t.subarray(3));
  if (t.length >= 2) {
    if (t[0] === 255 && t[1] === 254)
      return new TextDecoder("utf-16le").decode(t.subarray(2));
    if (t[0] === 254 && t[1] === 255)
      return new TextDecoder("utf-16be").decode(t.subarray(2));
  }
  try {
    return new TextDecoder("utf-8", { fatal: !0 }).decode(t);
  } catch {
    return Qn(t, "gb18030") || Qn(t, "gbk") || new TextDecoder("utf-8").decode(t);
  }
}
function Qn(t, o) {
  try {
    return new TextDecoder(o).decode(t);
  } catch {
    return;
  }
}
var Ma = {
  display: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,128Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,160Z",
  annotated: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,112H80v32H40Zm56,0H216v32H96ZM216,64V96H40V64ZM40,160H80v32H40Zm176,32H96V160H216v32Z",
  source: "M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
}, dn = String.raw`\d{1,3}:\d{2}(?:[.:]\d{1,3})?`, Na = new RegExp(`^\\s*((?:\\[${dn}\\])+)(.*)$`), Pa = new RegExp(`\\[(${dn})\\]`, "g"), tr = new RegExp(`<(${dn})>`, "g"), er = /\[([a-zA-Z][\w-]*|#):([^\]]*)\]/g, Ra = ["al", "au", "lr", "length"], Ia = ["by", "offset", "re", "tool", "ve"], Fa = 0;
function Da(t) {
  const o = [], e = [];
  let u;
  return t.split(/\r?\n/).forEach((r, i) => {
    const a = i + 1, s = r.trim();
    if (!s)
      return;
    const d = Ba(s, a);
    if (d) {
      o.push(...d);
      return;
    }
    const _ = r.match(Na), x = [];
    let v = r;
    if (_) {
      for (const g of _[1].matchAll(Pa))
        x.push(g[1]);
      v = _[2];
    }
    const m = v.match(/^\s*([MFD]):\s*/i), f = m == null ? void 0 : m[1].toUpperCase();
    f && (u = f, v = v.slice(m[0].length));
    const h = ja(v), c = h.map((g) => g.text).join("");
    (x.length > 0 || c.trim() || f) && e.push({
      timestamps: x,
      text: c,
      words: h,
      role: u,
      explicitRole: f,
      line: a
    });
  }), { metadata: o, lyrics: e };
}
function Ba(t, o) {
  const e = [];
  let u = "";
  er.lastIndex = 0;
  for (const r of t.matchAll(er))
    e.push({ key: r[1].toLowerCase(), value: r[2].trim(), line: o }), u += r[0];
  return e.length > 0 && u === t ? e : void 0;
}
function ja(t) {
  const o = [];
  let e = 0, u;
  tr.lastIndex = 0;
  for (const r of t.matchAll(tr))
    r.index > e && o.push({ timestamp: u, text: t.slice(e, r.index) }), u = r[1], e = r.index + r[0].length;
  return e < t.length && o.push({ timestamp: u, text: t.slice(e) }), o.length === 0 && o.push({ text: t }), o;
}
function Ua(t, o, e, u, r) {
  const i = document.createElement("div");
  i.className = "ofv-lrc-modebar";
  const a = document.createElement("div");
  a.className = "ofv-lrc-mode-switch", a.setAttribute("role", "tablist"), a.setAttribute("aria-label", e.lrcPreviewMode), a.setAttribute("aria-orientation", "horizontal");
  const s = Ha(t, e), d = Ga(t, o, e), _ = ++Fa, x = {
    display: d,
    annotated: s,
    source: u
  }, v = [
    ["display", e.lrcDisplayMode],
    ["annotated", e.lrcAnnotatedMode],
    ["source", e.lrcSourceMode]
  ], m = /* @__PURE__ */ new Map();
  v.forEach(([h, c]) => {
    const g = document.createElement("button");
    g.type = "button", g.className = "ofv-lrc-mode-button", g.dataset.mode = h, g.id = `ofv-lrc-${_}-tab-${h}`, g.setAttribute("role", "tab"), g.setAttribute("aria-controls", `ofv-lrc-${_}-panel-${h}`), g.setAttribute("aria-selected", "false"), g.setAttribute("aria-label", c), g.title = c, g.tabIndex = -1, g.append(Wa(h));
    const p = x[h];
    p.id = `ofv-lrc-${_}-panel-${h}`, p.setAttribute("role", "tabpanel"), p.setAttribute("aria-labelledby", g.id), m.set(h, g), a.append(g);
  }), i.append(a);
  const f = (h) => {
    u.hidden = h !== "source", s.hidden = h !== "annotated", d.hidden = h !== "display", r.hidden = h !== "source", m.forEach((c, g) => {
      const p = g === h;
      c.setAttribute("aria-selected", String(p)), c.tabIndex = p ? 0 : -1;
    }), i.dataset.activeMode = h;
  };
  return m.forEach((h, c) => h.addEventListener("click", () => f(c))), a.addEventListener("keydown", (h) => {
    var w;
    const c = v.findIndex(([A]) => m.get(A) === document.activeElement);
    if (c < 0)
      return;
    let g = c;
    if (h.key === "ArrowRight")
      g = (c + 1) % v.length;
    else if (h.key === "ArrowLeft")
      g = (c - 1 + v.length) % v.length;
    else if (h.key === "Home")
      g = 0;
    else if (h.key === "End")
      g = v.length - 1;
    else
      return;
    h.preventDefault();
    const p = v[g][0];
    f(p), (w = m.get(p)) == null || w.focus();
  }), f("display"), { modeBar: i, annotatedView: s, displayView: d, setMode: f };
}
function Wa(t) {
  const o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  o.classList.add("ofv-lrc-mode-icon"), o.setAttribute("viewBox", "0 0 256 256"), o.setAttribute("aria-hidden", "true"), o.setAttribute("focusable", "false");
  const e = document.createElementNS(o.namespaceURI, "path");
  return e.setAttribute("d", Ma[t]), e.setAttribute("fill", "currentColor"), o.append(e), o;
}
function Ha(t, o) {
  const e = document.createElement("div");
  e.className = "ofv-lrc-annotated";
  const u = document.createElement("div");
  if (u.className = "ofv-lrc-annotated-table", t.metadata.forEach((r) => {
    const i = document.createElement("div");
    i.className = "ofv-lrc-annotated-row is-metadata", i.classList.add(r.key === "ti" ? "is-title" : "is-secondary"), i.dataset.tag = r.key;
    const a = document.createElement("div");
    a.className = "ofv-lrc-annotated-gutter";
    const s = document.createElement("span");
    s.className = "ofv-lrc-meta-label", s.textContent = r.key, a.append(s);
    const d = document.createElement("div");
    d.className = "ofv-lrc-meta-value", d.textContent = r.value, i.append(a, d), u.append(i);
  }), t.lyrics.forEach((r) => {
    const i = document.createElement("div");
    i.className = "ofv-lrc-annotated-row is-lyric", r.role && (i.dataset.role = r.role);
    const a = document.createElement("div");
    a.className = "ofv-lrc-annotated-gutter";
    const s = document.createElement("span");
    s.className = "ofv-lrc-times", r.timestamps.length === 0 ? s.textContent = "·" : r.timestamps.forEach((x) => {
      const v = document.createElement("span");
      v.className = "ofv-lrc-time", v.textContent = x, s.append(v);
    }), a.append(s);
    const d = document.createElement("div");
    d.className = "ofv-lrc-annotated-text", r.explicitRole && d.append(Er(r.explicitRole, o));
    const _ = document.createElement("span");
    _.className = "ofv-lrc-annotated-content", Za(_, r.words, o), d.append(_), i.append(a, d), u.append(i);
  }), !u.hasChildNodes()) {
    const r = document.createElement("p");
    r.className = "ofv-lrc-empty", r.textContent = o.lrcEmpty, u.append(r);
  }
  return e.append(u), e;
}
function Za(t, o, e) {
  o.map((r) => ({ ...r, text: r.text.trim() })).filter((r) => r.text.length > 0).forEach((r, i) => {
    if (i > 0) {
      const _ = document.createElement("span");
      _.className = "ofv-lrc-word-separator", _.textContent = " ", _.setAttribute("aria-hidden", "true"), t.append(_);
    }
    if (!r.timestamp) {
      t.append(document.createTextNode(r.text));
      return;
    }
    const a = document.createElement("ruby");
    a.className = "ofv-lrc-timed-word", a.tabIndex = 0, a.setAttribute("aria-label", `${r.text}, ${e.lrcWordTimestamp}: ${r.timestamp}`);
    const s = document.createElement("span");
    s.className = "ofv-lrc-word-text", s.textContent = r.text;
    const d = document.createElement("rt");
    d.textContent = r.timestamp, a.append(s, d), t.append(a);
  });
}
function Ga(t, o, e) {
  const u = document.createElement("div");
  u.className = "ofv-lrc-display";
  const r = document.createElement("article");
  r.className = "ofv-lrc-display-page";
  const i = document.createElement("div");
  i.className = "ofv-lrc-display-header";
  const a = rr(t, "ti") || o.replace(/\.lrc$/i, ""), s = document.createElement("h2");
  s.textContent = a, i.append(s);
  const d = rr(t, "ar");
  if (d) {
    const m = document.createElement("p");
    m.className = "ofv-lrc-display-artist", m.textContent = d, i.append(m);
  }
  const _ = nr(t, e, Ra);
  _ && (_.classList.add("ofv-lrc-display-track-info"), _.setAttribute("aria-label", e.lrcTrackInformation), i.append(_)), r.append(i);
  const x = document.createElement("div");
  if (x.className = "ofv-lrc-display-lyrics", t.lyrics.forEach((m) => {
    if (!m.text.trim())
      return;
    const f = document.createElement("p");
    f.className = "ofv-lrc-display-line", m.role && (f.dataset.role = m.role), m.explicitRole && f.append(Er(m.explicitRole, e));
    const h = document.createElement("span");
    h.className = "ofv-lrc-display-content", h.textContent = m.text, f.append(h), x.append(f);
  }), !x.hasChildNodes()) {
    const m = document.createElement("p");
    m.className = "ofv-lrc-empty", m.textContent = e.lrcEmpty, x.append(m);
  }
  r.append(x);
  const v = nr(t, e, Ia);
  if (v) {
    const m = document.createElement("div");
    m.className = "ofv-lrc-display-file-info", m.append(v), r.append(m);
  }
  return u.append(r), u;
}
function nr(t, o, e) {
  const u = {
    al: o.lrcAlbum,
    au: o.lrcAuthor,
    lr: o.lrcLyricist,
    by: o.lrcLrcBy,
    length: o.lrcLength,
    offset: o.lrcOffset,
    re: o.lrcTool,
    tool: o.lrcTool,
    ve: o.lrcVersion
  }, r = t.metadata.filter((a) => e.includes(a.key) && u[a.key] && a.value);
  if (r.length === 0)
    return;
  const i = document.createElement("dl");
  return i.className = "ofv-lrc-display-credits", r.forEach((a) => {
    const s = document.createElement("dt");
    s.textContent = u[a.key];
    const d = document.createElement("dd");
    d.textContent = a.value, i.append(s, d);
  }), i;
}
function rr(t, o) {
  var e;
  return (e = t.metadata.find((u) => u.key === o && u.value)) == null ? void 0 : e.value;
}
function Er(t, o) {
  const e = {
    M: o.lrcMale,
    F: o.lrcFemale,
    D: o.lrcDuet
  }, u = document.createElement("sup");
  return u.className = "ofv-lrc-role", u.dataset.role = t, u.textContent = t, u.title = e[t], u.setAttribute("aria-label", e[t]), u;
}
var $a = {
  lrc: "none",
  js: "javascript",
  mjs: "javascript",
  cjs: "javascript",
  ts: "typescript",
  tsx: "tsx",
  jsx: "jsx",
  html: "markup",
  htm: "markup",
  vue: "markup",
  xml: "markup",
  css: "css",
  scss: "scss",
  less: "less",
  json: "json",
  jsonc: "json",
  json5: "json5",
  ipynb: "json",
  jsonl: "json",
  ndjson: "json",
  toml: "toml",
  ini: "ini",
  properties: "properties",
  proto: "protobuf",
  tf: "hcl",
  tfvars: "hcl",
  hcl: "hcl",
  tex: "latex",
  latex: "latex",
  bib: "latex",
  gv: "dot",
  http: "http",
  py: "python",
  java: "java",
  cpp: "cpp",
  c: "c",
  h: "c",
  hpp: "cpp",
  cs: "csharp",
  go: "go",
  rs: "rust",
  rb: "ruby",
  swift: "swift",
  kt: "kotlin",
  kts: "kotlin",
  scala: "scala",
  lua: "lua",
  r: "r",
  dart: "dart",
  svelte: "markup",
  astro: "markup",
  elm: "elm",
  ex: "elixir",
  exs: "elixir",
  clj: "clojure",
  cljs: "clojure",
  erl: "erlang",
  hrl: "erlang",
  fs: "fsharp",
  fsx: "fsharp",
  hs: "haskell",
  lhs: "haskell",
  sql: "sql",
  sh: "bash",
  bash: "bash",
  zsh: "bash",
  fish: "bash",
  ps1: "powershell",
  bat: "batch",
  cmd: "batch",
  dockerfile: "docker",
  nginxconf: "nginx",
  gradle: "groovy",
  graphql: "graphql",
  gql: "graphql",
  yaml: "yaml",
  yml: "yaml",
  diff: "diff",
  patch: "diff",
  php: "php",
  md: "markdown",
  markdown: "markdown",
  mmd: "mermaid",
  mermaid: "mermaid"
}, ir = {
  dockerfile: "docker",
  makefile: "makefile",
  gemfile: "ruby",
  rakefile: "ruby",
  procfile: "bash",
  jenkinsfile: "groovy",
  vagrantfile: "ruby",
  brewfile: "ruby",
  podfile: "ruby",
  "go.mod": "go",
  "go.sum": "go",
  "cargo.toml": "toml",
  "cargo.lock": "toml",
  ".gitignore": "none",
  ".dockerignore": "ignore",
  ".npmrc": "none",
  ".yarnrc": "none",
  ".pnpmrc": "none",
  ".editorconfig": "editorconfig",
  ".browserslistrc": "none",
  ".prettierrc": "json",
  ".eslintrc": "json",
  ".stylelintrc": "json",
  readme: "markdown",
  changelog: "markdown",
  changes: "markdown",
  history: "markdown",
  license: "none",
  licence: "none",
  copying: "none",
  notice: "none",
  authors: "none",
  contributors: "none",
  codeowners: "none"
}, qa = {
  "application/lrc": "none",
  "application/x-lrc": "none",
  "text/lrc": "none",
  "text/x-lrc": "none",
  "text/markdown": "markdown",
  "text/plain": "none",
  "text/vnd.mermaid": "mermaid",
  "text/html": "markup",
  "application/xml": "markup",
  "text/xml": "markup",
  "application/json": "json",
  "application/json5": "json5",
  "application/x-ipynb+json": "json",
  "application/x-ndjson": "json",
  "application/yaml": "yaml",
  "application/x-yaml": "yaml",
  "text/yaml": "yaml",
  "application/javascript": "javascript",
  "application/x-javascript": "javascript",
  "text/javascript": "javascript",
  "application/typescript": "typescript",
  "application/x-typescript": "typescript",
  "text/typescript": "typescript",
  "application/sql": "sql",
  "application/x-sh": "bash",
  "application/graphql": "graphql",
  "text/calendar": "none",
  "text/vcard": "none",
  "application/x-pem-file": "none",
  "application/x-x509-ca-cert": "none",
  "application/pkix-cert": "none",
  "application/x-httpd-php": "php",
  "application/x-tex": "latex",
  "message/http": "http",
  "text/x-bibtex": "latex",
  "text/x-hcl": "hcl",
  "text/x-protobuf": "protobuf",
  "text/vnd.graphviz": "dot",
  "text/css": "css"
}, Va = 18e4, ln = 6e5, en = /* @__PURE__ */ new Map();
function Ya() {
  return {
    name: "text",
    match(t) {
      return Ui(t);
    },
    async render(t) {
      var j, it;
      const o = t.file.extension.toLowerCase(), e = Qa(t.file.name, o, t.file.mimeType, Bi(t.file)), u = o === "lrc" || ["application/lrc", "application/x-lrc", "text/lrc", "text/x-lrc"].includes(t.file.mimeType), r = e === "none", i = e === "markdown", a = await bo(t.file.source).catch((D) => {
      });
      if (a === void 0) {
        const D = eo(t.file.name, t.options.messages, t.file.url);
        return t.viewport.classList.add("ofv-center"), t.viewport.append(D), {
          destroy() {
            t.viewport.classList.remove("ofv-center"), D.remove();
          }
        };
      }
      if (e === "mermaid") {
        const D = await Xa(t, a);
        if (D)
          return D;
      }
      if (i) {
        const [D, ot, H] = await Promise.all([
          import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/marked.js"),
          import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prismjs.js"),
          Promise.resolve().then(() => pr)
        ]), rt = ((j = D.marked) == null ? void 0 : j.parse) || D.parse || ((it = D.default) == null ? void 0 : it.parse), R = ot.default || ot, S = H.default || H, X = document.createElement("div");
        X.className = "ofv-markdown-body";
        const B = document.createElement("div");
        B.className = "ofv-markdown-content", B.innerHTML = S.sanitize(rt(a), {
          USE_PROFILES: { html: !0 },
          ADD_ATTR: ["target"]
        }), X.append(B), no(X), ro(B);
        const $ = io(X);
        t.viewport.appendChild(X);
        try {
          await Ka(X, S);
        } catch (lt) {
          console.warn("Mermaid render for markdown failed:", lt);
        }
        try {
          const lt = X.querySelectorAll("pre code");
          if (lt.length > 0) {
            const st = /* @__PURE__ */ new Set();
            lt.forEach((dt) => {
              const vt = ar(dt) || ar(dt.parentElement);
              vt && st.add(vt);
            }), await Promise.all([...st].map((dt) => or(dt))), lt.forEach((dt) => {
              const vt = dt.parentElement;
              vt && !vt.className.includes("language-") && (vt.className = "language-none"), R.highlightElement(dt);
            });
          }
        } catch (lt) {
          console.warn("Prism highlight for markdown failed:", lt);
        }
        const ct = cn(X, "--ofv-markdown-zoom", t, B);
        return {
          canCommand(lt) {
            return ct.canCommand(lt);
          },
          command(lt) {
            return ct.command(lt);
          },
          destroy() {
            $(), X.remove();
          }
        };
      }
      const [s] = await Promise.all([import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prismjs.js")]), d = s.default || s;
      if (e !== "none")
        try {
          await or(e);
        } catch (D) {
          console.warn(`Prism failed to load language component for: ${e}`, D);
        }
      const _ = a.length > ln ? a.slice(0, ln) : a, x = sr(a), v = sr(_), m = _.length < a.length, f = _.length <= Va, h = document.createElement("div");
      h.className = "ofv-code-container", u && h.classList.add("is-lrc"), m && h.classList.add("is-truncated"), r && h.classList.add("is-wrapped");
      const c = document.createElement("div");
      c.className = "ofv-code-header";
      const g = document.createElement("div");
      g.className = "ofv-code-title";
      const p = document.createElement("strong");
      p.textContent = t.file.name;
      const w = t.options.messages, A = document.createElement("span");
      A.textContent = [
        u ? "LRC" : e === "none" ? w.textPlainLanguage : e,
        Vn(w.textLineCount, { count: x.toLocaleString() }),
        lr(t.file.size ?? (t.file.source instanceof Blob ? t.file.source.size : a.length))
      ].join(" · "), g.append(p, A);
      const L = document.createElement("div");
      L.className = "ofv-code-actions";
      const T = document.createElement("span");
      T.className = "ofv-code-status", T.setAttribute("role", "status");
      const F = document.createElement("button");
      F.type = "button", F.className = "ofv-code-action", F.textContent = w.textWrap, F.setAttribute("aria-pressed", String(r)), F.addEventListener("click", () => {
        const D = h.classList.toggle("is-wrapped");
        F.setAttribute("aria-pressed", String(D));
      });
      const P = document.createElement("button");
      P.type = "button", P.className = "ofv-code-action", P.textContent = w.textCopy, P.addEventListener("click", async () => {
        P.disabled = !0;
        try {
          await go(a), T.textContent = w.textCopied;
        } catch {
          T.textContent = w.textCopyFailed;
        } finally {
          P.disabled = !1;
        }
      });
      const W = document.createElement("button");
      W.type = "button", W.className = "ofv-code-action", W.textContent = w.textDownload, W.addEventListener("click", () => {
        vo(t.file.name, a), T.textContent = w.textDownloadReady;
      }), L.append(F, P, W, T), c.append(g, L);
      const N = uo(a, o, e, t.file.mimeType), q = document.createElement("div");
      q.className = "ofv-code-body";
      const Y = document.createElement("pre");
      Y.className = "ofv-code-gutter", Y.setAttribute("aria-hidden", "true"), Y.textContent = mo(v);
      const E = document.createElement("pre");
      E.className = `language-${e}`;
      const I = document.createElement("code");
      if (I.className = `language-${e}`, I.textContent = _, E.appendChild(I), q.append(Y, E), h.append(c), u) {
        const D = Ua(Da(_), t.file.name, w, q, F);
        h.append(D.modeBar, D.annotatedView, D.displayView);
      }
      if (N && h.append(N), m) {
        const D = document.createElement("div");
        D.className = "ofv-code-notice", D.textContent = Vn(w.textLargeFileNotice, { size: lr(_.length) }), h.append(D);
      }
      if (!f) {
        const D = document.createElement("div");
        D.className = "ofv-code-notice", D.textContent = w.textHighlightSkipped, h.append(D);
      }
      if (h.appendChild(q), t.viewport.appendChild(h), f)
        try {
          d.highlightElement(I);
        } catch (D) {
          console.error("Prism syntax highlighting failed:", D);
        }
      const l = cn(h, "--ofv-text-zoom", t);
      return {
        canCommand(D) {
          return l.canCommand(D);
        },
        command(D) {
          return l.command(D);
        },
        destroy() {
          h.remove();
        }
      };
    }
  };
}
function ar(t) {
  if (t) {
    for (const o of t.classList)
      if (o.startsWith("language-") && o.length > 9)
        return o.slice(9).toLowerCase();
  }
}
var nn, Sr = 0;
function Ar() {
  return nn || (nn = import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/mermaid.js").then((t) => {
    const o = t.default || t;
    return o.initialize({
      startOnLoad: !1,
      securityLevel: "strict",
      theme: "default",
      // Keep labels as plain SVG text: foreignObject html labels are stripped by DOMPurify.
      htmlLabels: !1,
      flowchart: { htmlLabels: !1 },
      class: { htmlLabels: !1 }
    }), o;
  }).catch((t) => {
    throw nn = void 0, t;
  })), nn;
}
var Tr = 5e4;
async function Xa(t, o) {
  var d, _;
  if (o.length > Tr)
    return;
  const e = `ofv-mermaid-${++Sr}`;
  let u;
  try {
    const [x, v] = await Promise.all([Ar(), Promise.resolve().then(() => pr)]), m = v.default || v, f = await x.render(e, o);
    u = m.sanitize(f.svg, { USE_PROFILES: { svg: !0, svgFilters: !0 } });
  } catch (x) {
    (d = document.getElementById(e)) == null || d.remove(), (_ = document.getElementById(`d${e}`)) == null || _.remove(), console.warn("Mermaid file render failed, falling back to source view:", x);
    return;
  }
  const r = document.createElement("div");
  r.className = "ofv-mermaid-file";
  const i = document.createElement("div");
  i.className = "ofv-mermaid-zoom-layer";
  const a = document.createElement("div");
  a.className = "ofv-mermaid", a.innerHTML = u, i.appendChild(a), r.appendChild(i), t.viewport.appendChild(r);
  const s = cn(r, "--ofv-mermaid-zoom", t, i);
  return {
    canCommand(x) {
      return s.canCommand(x);
    },
    command(x) {
      return s.command(x);
    },
    destroy() {
      r.remove();
    }
  };
}
async function Ka(t, o) {
  var r, i;
  const e = Array.from(t.querySelectorAll("pre > code.language-mermaid")).filter(
    (a) => (a.textContent ?? "").length <= Tr
  );
  if (e.length === 0)
    return;
  const u = await Ar();
  for (const a of e) {
    const s = a.parentElement;
    if (!s)
      continue;
    const d = `ofv-mermaid-${++Sr}`;
    try {
      const { svg: _ } = await u.render(d, a.textContent ?? ""), x = document.createElement("div");
      x.className = "ofv-mermaid", x.innerHTML = o.sanitize(_, { USE_PROFILES: { svg: !0, svgFilters: !0 } }), s.replaceWith(x);
    } catch (_) {
      (r = document.getElementById(d)) == null || r.remove(), (i = document.getElementById(`d${d}`)) == null || i.remove(), console.warn("Mermaid diagram render failed, keeping source block:", _);
    }
  }
}
async function or(t) {
  if (["none", "plain", "plaintext", "text", "markup", "css", "clike", "javascript"].includes(t))
    return;
  const o = en.get(t);
  if (o)
    return o;
  const e = Ja(t).catch((u) => {
    throw en.delete(t), u;
  });
  return en.set(t, e), e;
}
async function Ja(t) {
  switch (t) {
    case "typescript":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "jsx":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "tsx":
      await Promise.resolve().then(() => wo);
      break;
    case "python":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "json":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "json5":
      await Promise.resolve().then(() => xo);
      break;
    case "yaml":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "toml":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "ini":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "properties":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "editorconfig":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "ignore":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "protobuf":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "hcl":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "latex":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "dot":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "http":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "bash":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "powershell":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "batch":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "docker":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "makefile":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "ruby":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "nginx":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "groovy":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "graphql":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "csharp":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "rust":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "go":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "swift":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "kotlin":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "java":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "scala":
      await Promise.resolve().then(() => ko);
      break;
    case "lua":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "r":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "dart":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "elm":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "elixir":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "clojure":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "erlang":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "fsharp":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "haskell":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "sql":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "c":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "cpp":
      await Promise.resolve().then(() => Eo);
      break;
    case "scss":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "less":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "markup-templating":
      await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/prism-all.js");
      break;
    case "php":
      await Promise.resolve().then(() => So);
      break;
  }
}
function cn(t, o, e, u) {
  let r = za(e, 0.5, 3);
  const i = () => {
    var s;
    const a = Math.round(r * 100) / 100;
    if (u && (u.style.width = "", t.style.setProperty(o, "1"), a !== 1)) {
      const d = u.clientWidth;
      d > 0 && (u.style.width = `${d}px`);
    }
    t.style.setProperty(o, String(a)), (s = e.toolbar) == null || s.setZoom(a === 1 ? void 0 : a);
  };
  return i(), {
    canCommand(a) {
      return a === "zoom-in" || a === "zoom-out" || a === "zoom-reset";
    },
    command(a) {
      return a === "zoom-in" ? (r = Math.min(3, r * 1.15), i(), !0) : a === "zoom-out" ? (r = Math.max(0.5, r / 1.15), i(), !0) : a === "zoom-reset" ? (r = 1, i(), !0) : !1;
    }
  };
}
function Qa(t, o, e, u) {
  var s;
  const r = to(t), i = ((s = e.split(";", 1)[0]) == null ? void 0 : s.trim().toLowerCase()) || "", a = qa[i];
  return (u ? a : void 0) || $a[o] || ir[r] || ir[r.split(".")[0]] || a || "none";
}
function to(t) {
  return (t.split(/[\\/]/).pop() || t).toLowerCase();
}
function eo(t, o, e) {
  const u = document.createElement("div");
  u.className = "ofv-fallback";
  const r = document.createElement("strong");
  r.textContent = o.textPreviewFailedTitle;
  const i = document.createElement("span");
  if (i.textContent = o.textPreviewFailedMessage, u.append(r, i), e) {
    const a = document.createElement("a");
    a.href = e, a.download = t, a.textContent = o.textOpenOriginal, u.append(a);
  }
  return u;
}
function no(t) {
  for (const o of t.querySelectorAll("a[href]")) {
    const e = o.getAttribute("href") || "";
    if (!co(e)) {
      o.removeAttribute("href"), o.removeAttribute("target"), o.removeAttribute("rel");
      continue;
    }
    /^(https?:)?\/\//i.test(e) && (o.target = "_blank", o.rel = "noopener noreferrer");
  }
}
function ro(t) {
  const o = new Set(
    Array.from(t.querySelectorAll("[id]")).map((u) => u.id).filter(Boolean)
  );
  let e = 0;
  for (const u of t.querySelectorAll("h1, h2, h3, h4, h5, h6")) {
    if (u.id)
      continue;
    const r = un(u.textContent || "") || `heading-${++e}`;
    u.id = oo(r, o);
  }
}
function io(t) {
  const o = (e) => {
    var a, s, d, _;
    const u = (s = (a = e.target) == null ? void 0 : a.closest) == null ? void 0 : s.call(a, "a[href]");
    if (!u || !t.contains(u))
      return;
    const r = u.getAttribute("href") || "";
    if (!r.startsWith("#") || r === "#")
      return;
    const i = ao(t, r.slice(1));
    i && (e.preventDefault(), (d = i.scrollIntoView) == null || d.call(i, { block: "start", inline: "nearest" }), i.hasAttribute("tabindex") || i.setAttribute("tabindex", "-1"), (_ = i.focus) == null || _.call(i, { preventScroll: !0 }));
  };
  return t.addEventListener("click", o), () => t.removeEventListener("click", o);
}
function ao(t, o) {
  const e = so(o), u = t.querySelector(`#${lo(e)}`);
  if (u)
    return u;
  const r = un(e);
  return Array.from(t.querySelectorAll("h1, h2, h3, h4, h5, h6")).find((i) => {
    const a = i.textContent || "";
    return a === e || un(a) === r;
  }) || null;
}
function un(t) {
  return t.trim().toLowerCase().replace(/<[^>]*>/g, "").replace(/[`~!@#$%^&*()+=[\]{}\\|;:'",.<>/?，。！？、；：“”‘’（）【】《》]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
function oo(t, o) {
  let e = t, u = 1;
  for (; o.has(e); )
    e = `${t}-${u++}`;
  return o.add(e), e;
}
function so(t) {
  try {
    return decodeURIComponent(t);
  } catch {
    return t;
  }
}
function lo(t) {
  return typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(t) : t.replace(/["\\#.;,[\]()>/+~*^$|=!:\s]/g, "\\$&");
}
function co(t) {
  const o = t.trim();
  return o.startsWith("#") || o.startsWith("/") || o.startsWith("./") || o.startsWith("../") || /^(https?:|mailto:|tel:)/i.test(o);
}
function sr(t) {
  return t ? t.split(/\r\n|\r|\n/).length : 1;
}
function uo(t, o, e, u) {
  if (t.length > ln)
    return null;
  const r = fo(t, o, e, u);
  if (r.length === 0)
    return null;
  const i = document.createElement("div");
  i.className = "ofv-text-structure", i.hidden = !0, i.setAttribute("aria-hidden", "true"), i.style.display = "none";
  for (const a of r) {
    const s = document.createElement("span"), d = document.createElement("span");
    d.textContent = a.label;
    const _ = document.createElement("strong");
    _.textContent = a.value, s.append(d, _), i.append(s);
  }
  return i;
}
function fo(t, o, e, u) {
  return o === "ipynb" || u === "application/x-ipynb+json" ? po(t) : o === "ndjson" || o === "jsonl" || u === "application/x-ndjson" ? ho(t) : e === "json" || e === "json5" ? Cr(t) : [];
}
function Cr(t) {
  try {
    const o = JSON.parse(t);
    if (Array.isArray(o))
      return [
        { label: "结构", value: "Array" },
        { label: "条目", value: String(o.length) }
      ];
    if (o && typeof o == "object") {
      const e = Object.keys(o);
      return [
        { label: "结构", value: "Object" },
        { label: "键", value: String(e.length) },
        { label: "预览", value: e.slice(0, 8).join(", ") || "无键" }
      ];
    }
    return [{ label: "结构", value: typeof o }];
  } catch {
    return [];
  }
}
function po(t) {
  var o, e, u, r, i, a;
  try {
    const s = JSON.parse(t);
    if (!Array.isArray(s.cells))
      return Cr(t);
    const d = /* @__PURE__ */ new Map();
    for (const x of s.cells) {
      const v = x.cell_type || "unknown";
      d.set(v, (d.get(v) || 0) + 1);
    }
    const _ = ((e = (o = s.metadata) == null ? void 0 : o.kernelspec) == null ? void 0 : e.display_name) || ((r = (u = s.metadata) == null ? void 0 : u.kernelspec) == null ? void 0 : r.name) || ((a = (i = s.metadata) == null ? void 0 : i.language_info) == null ? void 0 : a.name);
    return [
      { label: "Notebook", value: `${s.cells.length} cells` },
      { label: "类型", value: [...d.entries()].map(([x, v]) => `${x} ${v}`).join(", ") || "未知" },
      ..._ ? [{ label: "Kernel", value: _ }] : []
    ];
  } catch {
    return [];
  }
}
function ho(t) {
  const o = t.split(/\r\n|\r|\n/).filter((i) => i.trim());
  let e = 0, u = 0, r = 0;
  for (const i of o.slice(0, 1e3))
    try {
      const a = JSON.parse(i);
      e++, Array.isArray(a) ? r++ : a && typeof a == "object" && u++;
    } catch {
    }
  return [
    { label: "NDJSON", value: `${o.length} lines` },
    { label: "可解析", value: String(e) },
    { label: "类型", value: `object ${u}, array ${r}` }
  ];
}
function mo(t) {
  return Array.from({ length: Math.max(t, 1) }, (o, e) => String(e + 1)).join(`
`);
}
function lr(t) {
  if (!Number.isFinite(t) || t < 0)
    return "0 B";
  if (t < 1024)
    return `${t} B`;
  const o = ["KB", "MB", "GB"];
  let e = t / 1024, u = 0;
  for (; e >= 1024 && u < o.length - 1; )
    e /= 1024, u += 1;
  return `${e.toFixed(e >= 10 ? 1 : 2)} ${o[u]}`;
}
async function go(t) {
  var u, r;
  if ((u = navigator.clipboard) != null && u.writeText) {
    await navigator.clipboard.writeText(t);
    return;
  }
  const o = document.createElement("textarea");
  o.value = t, o.setAttribute("readonly", ""), o.style.position = "fixed", o.style.left = "-9999px", document.body.append(o), o.select();
  const e = (r = document.execCommand) == null ? void 0 : r.call(document, "copy");
  if (o.remove(), !e)
    throw new Error("Clipboard API is not available.");
}
function vo(t, o) {
  const e = new Blob([o], { type: "text/plain;charset=utf-8" }), u = URL.createObjectURL(e), r = document.createElement("a");
  r.href = u, r.download = t, document.body.append(r), r.click(), r.remove(), URL.revokeObjectURL(u);
}
async function bo(t) {
  if (typeof t == "string") {
    const o = await fetch(t);
    if (!o.ok)
      throw new Error(`Failed to fetch text file: ${o.status}`);
    return tn(await o.arrayBuffer());
  }
  return t instanceof Blob ? tn(await t.arrayBuffer()) : t instanceof ArrayBuffer ? tn(t) : String(t);
}
Uint8Array.from([137, 80, 78, 71, 13, 10, 26, 10]);
Uint8Array.from([255, 216, 255]);
Promise.resolve();
var _o = {
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
new Set(Object.keys(_o));
const yo = { search: !0, download: !0 };
function Fo(t) {
  return Ji({ ...t, toolbar: yo, plugins: [Ya()] });
}
const wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), So = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
export {
  Fo as renderViewer
};

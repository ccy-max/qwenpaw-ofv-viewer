function ze(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Or = { exports: {} };
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
    return function e(h, a, i) {
      function s(y, S) {
        if (!a[y]) {
          if (!h[y]) {
            var v = typeof ze == "function" && ze;
            if (!S && v) return v(y, !0);
            if (l) return l(y, !0);
            var p = new Error("Cannot find module '" + y + "'");
            throw p.code = "MODULE_NOT_FOUND", p;
          }
          var u = a[y] = { exports: {} };
          h[y][0].call(u.exports, function(_) {
            var c = h[y][1][_];
            return s(c || _);
          }, u, u.exports, e, h, a, i);
        }
        return a[y].exports;
      }
      for (var l = typeof ze == "function" && ze, f = 0; f < i.length; f++) s(i[f]);
      return s;
    }({ 1: [function(e, h, a) {
      var i = e("./utils"), s = e("./support"), l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      a.encode = function(f) {
        for (var y, S, v, p, u, _, c, g = [], d = 0, w = f.length, T = w, P = i.getTypeOf(f) !== "string"; d < f.length; ) T = w - d, v = P ? (y = f[d++], S = d < w ? f[d++] : 0, d < w ? f[d++] : 0) : (y = f.charCodeAt(d++), S = d < w ? f.charCodeAt(d++) : 0, d < w ? f.charCodeAt(d++) : 0), p = y >> 2, u = (3 & y) << 4 | S >> 4, _ = 1 < T ? (15 & S) << 2 | v >> 6 : 64, c = 2 < T ? 63 & v : 64, g.push(l.charAt(p) + l.charAt(u) + l.charAt(_) + l.charAt(c));
        return g.join("");
      }, a.decode = function(f) {
        var y, S, v, p, u, _, c = 0, g = 0, d = "data:";
        if (f.substr(0, d.length) === d) throw new Error("Invalid base64 input, it looks like a data url.");
        var w, T = 3 * (f = f.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (f.charAt(f.length - 1) === l.charAt(64) && T--, f.charAt(f.length - 2) === l.charAt(64) && T--, T % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
        for (w = s.uint8array ? new Uint8Array(0 | T) : new Array(0 | T); c < f.length; ) y = l.indexOf(f.charAt(c++)) << 2 | (p = l.indexOf(f.charAt(c++))) >> 4, S = (15 & p) << 4 | (u = l.indexOf(f.charAt(c++))) >> 2, v = (3 & u) << 6 | (_ = l.indexOf(f.charAt(c++))), w[g++] = y, u !== 64 && (w[g++] = S), _ !== 64 && (w[g++] = v);
        return w;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(e, h, a) {
      var i = e("./external"), s = e("./stream/DataWorker"), l = e("./stream/Crc32Probe"), f = e("./stream/DataLengthProbe");
      function y(S, v, p, u, _) {
        this.compressedSize = S, this.uncompressedSize = v, this.crc32 = p, this.compression = u, this.compressedContent = _;
      }
      y.prototype = { getContentWorker: function() {
        var S = new s(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new f("data_length")), v = this;
        return S.on("end", function() {
          if (this.streamInfo.data_length !== v.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
        }), S;
      }, getCompressedWorker: function() {
        return new s(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, y.createWorkerFrom = function(S, v, p) {
        return S.pipe(new l()).pipe(new f("uncompressedSize")).pipe(v.compressWorker(p)).pipe(new f("compressedSize")).withStreamInfo("compression", v);
      }, h.exports = y;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, h, a) {
      var i = e("./stream/GenericWorker");
      a.STORE = { magic: "\0\0", compressWorker: function() {
        return new i("STORE compression");
      }, uncompressWorker: function() {
        return new i("STORE decompression");
      } }, a.DEFLATE = e("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, h, a) {
      var i = e("./utils"), s = function() {
        for (var l, f = [], y = 0; y < 256; y++) {
          l = y;
          for (var S = 0; S < 8; S++) l = 1 & l ? 3988292384 ^ l >>> 1 : l >>> 1;
          f[y] = l;
        }
        return f;
      }();
      h.exports = function(l, f) {
        return l !== void 0 && l.length ? i.getTypeOf(l) !== "string" ? function(y, S, v, p) {
          var u = s, _ = p + v;
          y ^= -1;
          for (var c = p; c < _; c++) y = y >>> 8 ^ u[255 & (y ^ S[c])];
          return -1 ^ y;
        }(0 | f, l, l.length, 0) : function(y, S, v, p) {
          var u = s, _ = p + v;
          y ^= -1;
          for (var c = p; c < _; c++) y = y >>> 8 ^ u[255 & (y ^ S.charCodeAt(c))];
          return -1 ^ y;
        }(0 | f, l, l.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(e, h, a) {
      a.base64 = !1, a.binary = !1, a.dir = !1, a.createFolders = !0, a.date = null, a.compression = null, a.compressionOptions = null, a.comment = null, a.unixPermissions = null, a.dosPermissions = null;
    }, {}], 6: [function(e, h, a) {
      var i = null;
      i = typeof Promise < "u" ? Promise : e("lie"), h.exports = { Promise: i };
    }, { lie: 37 }], 7: [function(e, h, a) {
      var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = e("pako"), l = e("./utils"), f = e("./stream/GenericWorker"), y = i ? "uint8array" : "array";
      function S(v, p) {
        f.call(this, "FlateWorker/" + v), this._pako = null, this._pakoAction = v, this._pakoOptions = p, this.meta = {};
      }
      a.magic = "\b\0", l.inherits(S, f), S.prototype.processChunk = function(v) {
        this.meta = v.meta, this._pako === null && this._createPako(), this._pako.push(l.transformTo(y, v.data), !1);
      }, S.prototype.flush = function() {
        f.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, S.prototype.cleanUp = function() {
        f.prototype.cleanUp.call(this), this._pako = null;
      }, S.prototype._createPako = function() {
        this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var v = this;
        this._pako.onData = function(p) {
          v.push({ data: p, meta: v.meta });
        };
      }, a.compressWorker = function(v) {
        return new S("Deflate", v);
      }, a.uncompressWorker = function() {
        return new S("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, h, a) {
      function i(u, _) {
        var c, g = "";
        for (c = 0; c < _; c++) g += String.fromCharCode(255 & u), u >>>= 8;
        return g;
      }
      function s(u, _, c, g, d, w) {
        var T, P, A = u.file, D = u.compression, N = w !== y.utf8encode, H = l.transformTo("string", w(A.name)), M = l.transformTo("string", y.utf8encode(A.name)), Y = A.comment, q = l.transformTo("string", w(Y)), k = l.transformTo("string", y.utf8encode(Y)), F = M.length !== A.name.length, r = k.length !== Y.length, O = "", V = "", j = "", rt = A.dir, W = A.date, it = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        _ && !c || (it.crc32 = u.crc32, it.compressedSize = u.compressedSize, it.uncompressedSize = u.uncompressedSize);
        var I = 0;
        _ && (I |= 8), N || !F && !r || (I |= 2048);
        var x = 0, J = 0;
        rt && (x |= 16), d === "UNIX" ? (J = 798, x |= function(Z, lt) {
          var ft = Z;
          return Z || (ft = lt ? 16893 : 33204), (65535 & ft) << 16;
        }(A.unixPermissions, rt)) : (J = 20, x |= function(Z) {
          return 63 & (Z || 0);
        }(A.dosPermissions)), T = W.getUTCHours(), T <<= 6, T |= W.getUTCMinutes(), T <<= 5, T |= W.getUTCSeconds() / 2, P = W.getUTCFullYear() - 1980, P <<= 4, P |= W.getUTCMonth() + 1, P <<= 5, P |= W.getUTCDate(), F && (V = i(1, 1) + i(S(H), 4) + M, O += "up" + i(V.length, 2) + V), r && (j = i(1, 1) + i(S(q), 4) + k, O += "uc" + i(j.length, 2) + j);
        var B = "";
        return B += `
\0`, B += i(I, 2), B += D.magic, B += i(T, 2), B += i(P, 2), B += i(it.crc32, 4), B += i(it.compressedSize, 4), B += i(it.uncompressedSize, 4), B += i(H.length, 2), B += i(O.length, 2), { fileRecord: v.LOCAL_FILE_HEADER + B + H + O, dirRecord: v.CENTRAL_FILE_HEADER + i(J, 2) + B + i(q.length, 2) + "\0\0\0\0" + i(x, 4) + i(g, 4) + H + O + q };
      }
      var l = e("../utils"), f = e("../stream/GenericWorker"), y = e("../utf8"), S = e("../crc32"), v = e("../signature");
      function p(u, _, c, g) {
        f.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = _, this.zipPlatform = c, this.encodeFileName = g, this.streamFiles = u, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      l.inherits(p, f), p.prototype.push = function(u) {
        var _ = u.meta.percent || 0, c = this.entriesCount, g = this._sources.length;
        this.accumulate ? this.contentBuffer.push(u) : (this.bytesWritten += u.data.length, f.prototype.push.call(this, { data: u.data, meta: { currentFile: this.currentFile, percent: c ? (_ + 100 * (c - g - 1)) / c : 100 } }));
      }, p.prototype.openedSource = function(u) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = u.file.name;
        var _ = this.streamFiles && !u.file.dir;
        if (_) {
          var c = s(u, _, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: c.fileRecord, meta: { percent: 0 } });
        } else this.accumulate = !0;
      }, p.prototype.closedSource = function(u) {
        this.accumulate = !1;
        var _ = this.streamFiles && !u.file.dir, c = s(u, _, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(c.dirRecord), _) this.push({ data: function(g) {
          return v.DATA_DESCRIPTOR + i(g.crc32, 4) + i(g.compressedSize, 4) + i(g.uncompressedSize, 4);
        }(u), meta: { percent: 100 } });
        else for (this.push({ data: c.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, p.prototype.flush = function() {
        for (var u = this.bytesWritten, _ = 0; _ < this.dirRecords.length; _++) this.push({ data: this.dirRecords[_], meta: { percent: 100 } });
        var c = this.bytesWritten - u, g = function(d, w, T, P, A) {
          var D = l.transformTo("string", A(P));
          return v.CENTRAL_DIRECTORY_END + "\0\0\0\0" + i(d, 2) + i(d, 2) + i(w, 4) + i(T, 4) + i(D.length, 2) + D;
        }(this.dirRecords.length, c, u, this.zipComment, this.encodeFileName);
        this.push({ data: g, meta: { percent: 100 } });
      }, p.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, p.prototype.registerPrevious = function(u) {
        this._sources.push(u);
        var _ = this;
        return u.on("data", function(c) {
          _.processChunk(c);
        }), u.on("end", function() {
          _.closedSource(_.previous.streamInfo), _._sources.length ? _.prepareNextSource() : _.end();
        }), u.on("error", function(c) {
          _.error(c);
        }), this;
      }, p.prototype.resume = function() {
        return !!f.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, p.prototype.error = function(u) {
        var _ = this._sources;
        if (!f.prototype.error.call(this, u)) return !1;
        for (var c = 0; c < _.length; c++) try {
          _[c].error(u);
        } catch {
        }
        return !0;
      }, p.prototype.lock = function() {
        f.prototype.lock.call(this);
        for (var u = this._sources, _ = 0; _ < u.length; _++) u[_].lock();
      }, h.exports = p;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, h, a) {
      var i = e("../compressions"), s = e("./ZipFileWorker");
      a.generateWorker = function(l, f, y) {
        var S = new s(f.streamFiles, y, f.platform, f.encodeFileName), v = 0;
        try {
          l.forEach(function(p, u) {
            v++;
            var _ = function(w, T) {
              var P = w || T, A = i[P];
              if (!A) throw new Error(P + " is not a valid compression method !");
              return A;
            }(u.options.compression, f.compression), c = u.options.compressionOptions || f.compressionOptions || {}, g = u.dir, d = u.date;
            u._compressWorker(_, c).withStreamInfo("file", { name: p, dir: g, date: d, comment: u.comment || "", unixPermissions: u.unixPermissions, dosPermissions: u.dosPermissions }).pipe(S);
          }), S.entriesCount = v;
        } catch (p) {
          S.error(p);
        }
        return S;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, h, a) {
      function i() {
        if (!(this instanceof i)) return new i();
        if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var s = new i();
          for (var l in this) typeof this[l] != "function" && (s[l] = this[l]);
          return s;
        };
      }
      (i.prototype = e("./object")).loadAsync = e("./load"), i.support = e("./support"), i.defaults = e("./defaults"), i.version = "3.10.2", i.loadAsync = function(s, l) {
        return new i().loadAsync(s, l);
      }, i.external = e("./external"), h.exports = i;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, h, a) {
      var i = e("./utils"), s = e("./external"), l = e("./utf8"), f = e("./zipEntries"), y = e("./stream/Crc32Probe"), S = e("./nodejsUtils");
      function v(p) {
        return new s.Promise(function(u, _) {
          var c = p.decompressed.getContentWorker().pipe(new y());
          c.on("error", function(g) {
            _(g);
          }).on("end", function() {
            c.streamInfo.crc32 !== p.decompressed.crc32 ? _(new Error("Corrupted zip : CRC32 mismatch")) : u();
          }).resume();
        });
      }
      h.exports = function(p, u) {
        var _ = this;
        return u = i.extend(u || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: l.utf8decode }), S.isNode && S.isStream(p) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : i.prepareContent("the loaded zip file", p, !0, u.optimizedBinaryString, u.base64).then(function(c) {
          var g = new f(u);
          return g.load(c), g;
        }).then(function(c) {
          var g = [s.Promise.resolve(c)], d = c.files;
          if (u.checkCRC32) for (var w = 0; w < d.length; w++) g.push(v(d[w]));
          return s.Promise.all(g);
        }).then(function(c) {
          for (var g = c.shift(), d = g.files, w = 0; w < d.length; w++) {
            var T = d[w], P = T.fileNameStr, A = i.resolve(T.fileNameStr);
            _.file(A, T.decompressed, { binary: !0, optimizedBinaryString: !0, date: T.date, dir: T.dir, comment: T.fileCommentStr.length ? T.fileCommentStr : null, unixPermissions: T.unixPermissions, dosPermissions: T.dosPermissions, createFolders: u.createFolders }), T.dir || (_.file(A).unsafeOriginalName = P);
          }
          return g.zipComment.length && (_.comment = g.zipComment), _;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, h, a) {
      var i = e("../utils"), s = e("../stream/GenericWorker");
      function l(f, y) {
        s.call(this, "Nodejs stream input adapter for " + f), this._upstreamEnded = !1, this._bindStream(y);
      }
      i.inherits(l, s), l.prototype._bindStream = function(f) {
        var y = this;
        (this._stream = f).pause(), f.on("data", function(S) {
          y.push({ data: S, meta: { percent: 0 } });
        }).on("error", function(S) {
          y.isPaused ? this.generatedError = S : y.error(S);
        }).on("end", function() {
          y.isPaused ? y._upstreamEnded = !0 : y.end();
        });
      }, l.prototype.pause = function() {
        return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, l.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, h.exports = l;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, h, a) {
      var i = e("readable-stream").Readable;
      function s(l, f, y) {
        i.call(this, f), this._helper = l;
        var S = this;
        l.on("data", function(v, p) {
          S.push(v) || S._helper.pause(), y && y(p);
        }).on("error", function(v) {
          S.emit("error", v);
        }).on("end", function() {
          S.push(null);
        });
      }
      e("../utils").inherits(s, i), s.prototype._read = function() {
        this._helper.resume();
      }, h.exports = s;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, h, a) {
      h.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(i, s) {
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
    }, {}], 15: [function(e, h, a) {
      function i(A, D, N) {
        var H, M = l.getTypeOf(D), Y = l.extend(N || {}, S);
        Y.date = Y.date || /* @__PURE__ */ new Date(), Y.compression !== null && (Y.compression = Y.compression.toUpperCase()), typeof Y.unixPermissions == "string" && (Y.unixPermissions = parseInt(Y.unixPermissions, 8)), Y.unixPermissions && 16384 & Y.unixPermissions && (Y.dir = !0), Y.dosPermissions && 16 & Y.dosPermissions && (Y.dir = !0), Y.dir && (A = d(A)), Y.createFolders && (H = g(A)) && w.call(this, H, !0);
        var q = M === "string" && Y.binary === !1 && Y.base64 === !1;
        N && N.binary !== void 0 || (Y.binary = !q), (D instanceof v && D.uncompressedSize === 0 || Y.dir || !D || D.length === 0) && (Y.base64 = !1, Y.binary = !0, D = "", Y.compression = "STORE", M = "string");
        var k = null;
        k = D instanceof v || D instanceof f ? D : _.isNode && _.isStream(D) ? new c(A, D) : l.prepareContent(A, D, Y.binary, Y.optimizedBinaryString, Y.base64);
        var F = new p(A, k, Y);
        this.files[A] = F;
      }
      var s = e("./utf8"), l = e("./utils"), f = e("./stream/GenericWorker"), y = e("./stream/StreamHelper"), S = e("./defaults"), v = e("./compressedObject"), p = e("./zipObject"), u = e("./generate"), _ = e("./nodejsUtils"), c = e("./nodejs/NodejsStreamInputAdapter"), g = function(A) {
        A.slice(-1) === "/" && (A = A.substring(0, A.length - 1));
        var D = A.lastIndexOf("/");
        return 0 < D ? A.substring(0, D) : "";
      }, d = function(A) {
        return A.slice(-1) !== "/" && (A += "/"), A;
      }, w = function(A, D) {
        return D = D !== void 0 ? D : S.createFolders, A = d(A), this.files[A] || i.call(this, A, null, { dir: !0, createFolders: D }), this.files[A];
      };
      function T(A) {
        return Object.prototype.toString.call(A) === "[object RegExp]";
      }
      var P = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(A) {
        var D, N, H;
        for (D in this.files) H = this.files[D], (N = D.slice(this.root.length, D.length)) && D.slice(0, this.root.length) === this.root && A(N, H);
      }, filter: function(A) {
        var D = [];
        return this.forEach(function(N, H) {
          A(N, H) && D.push(H);
        }), D;
      }, file: function(A, D, N) {
        if (arguments.length !== 1) return A = this.root + A, i.call(this, A, D, N), this;
        if (T(A)) {
          var H = A;
          return this.filter(function(Y, q) {
            return !q.dir && H.test(Y);
          });
        }
        var M = this.files[this.root + A];
        return M && !M.dir ? M : null;
      }, folder: function(A) {
        if (!A) return this;
        if (T(A)) return this.filter(function(M, Y) {
          return Y.dir && A.test(M);
        });
        var D = this.root + A, N = w.call(this, D), H = this.clone();
        return H.root = N.name, H;
      }, remove: function(A) {
        A = this.root + A;
        var D = this.files[A];
        if (D || (A.slice(-1) !== "/" && (A += "/"), D = this.files[A]), D && !D.dir) delete this.files[A];
        else for (var N = this.filter(function(M, Y) {
          return Y.name.slice(0, A.length) === A;
        }), H = 0; H < N.length; H++) delete this.files[N[H].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(A) {
        var D, N = {};
        try {
          if ((N = l.extend(A || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = N.type.toLowerCase(), N.compression = N.compression.toUpperCase(), N.type === "binarystring" && (N.type = "string"), !N.type) throw new Error("No output type specified.");
          l.checkSupport(N.type), N.platform !== "darwin" && N.platform !== "freebsd" && N.platform !== "linux" && N.platform !== "sunos" || (N.platform = "UNIX"), N.platform === "win32" && (N.platform = "DOS");
          var H = N.comment || this.comment || "";
          D = u.generateWorker(this, N, H);
        } catch (M) {
          (D = new f("error")).error(M);
        }
        return new y(D, N.type || "string", N.mimeType);
      }, generateAsync: function(A, D) {
        return this.generateInternalStream(A).accumulate(D);
      }, generateNodeStream: function(A, D) {
        return (A = A || {}).type || (A.type = "nodebuffer"), this.generateInternalStream(A).toNodejsStream(D);
      } };
      h.exports = P;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, h, a) {
      h.exports = e("stream");
    }, { stream: void 0 }], 17: [function(e, h, a) {
      var i = e("./DataReader");
      function s(l) {
        i.call(this, l);
        for (var f = 0; f < this.data.length; f++) l[f] = 255 & l[f];
      }
      e("../utils").inherits(s, i), s.prototype.byteAt = function(l) {
        return this.data[this.zero + l];
      }, s.prototype.lastIndexOfSignature = function(l) {
        for (var f = l.charCodeAt(0), y = l.charCodeAt(1), S = l.charCodeAt(2), v = l.charCodeAt(3), p = this.length - 4; 0 <= p; --p) if (this.data[p] === f && this.data[p + 1] === y && this.data[p + 2] === S && this.data[p + 3] === v) return p - this.zero;
        return -1;
      }, s.prototype.readAndCheckSignature = function(l) {
        var f = l.charCodeAt(0), y = l.charCodeAt(1), S = l.charCodeAt(2), v = l.charCodeAt(3), p = this.readData(4);
        return f === p[0] && y === p[1] && S === p[2] && v === p[3];
      }, s.prototype.readData = function(l) {
        if (this.checkOffset(l), l === 0) return [];
        var f = this.data.slice(this.zero + this.index, this.zero + this.index + l);
        return this.index += l, f;
      }, h.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, h, a) {
      var i = e("../utils");
      function s(l) {
        this.data = l, this.length = l.length, this.index = 0, this.zero = 0;
      }
      s.prototype = { checkOffset: function(l) {
        this.checkIndex(this.index + l);
      }, checkIndex: function(l) {
        if (this.length < this.zero + l || l < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + l + "). Corrupted zip ?");
      }, setIndex: function(l) {
        this.checkIndex(l), this.index = l;
      }, skip: function(l) {
        this.setIndex(this.index + l);
      }, byteAt: function() {
      }, readInt: function(l) {
        var f, y = 0;
        for (this.checkOffset(l), f = this.index + l - 1; f >= this.index; f--) y = (y << 8) + this.byteAt(f);
        return this.index += l, y;
      }, readString: function(l) {
        return i.transformTo("string", this.readData(l));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var l = this.readInt(4);
        return new Date(Date.UTC(1980 + (l >> 25 & 127), (l >> 21 & 15) - 1, l >> 16 & 31, l >> 11 & 31, l >> 5 & 63, (31 & l) << 1));
      } }, h.exports = s;
    }, { "../utils": 32 }], 19: [function(e, h, a) {
      var i = e("./Uint8ArrayReader");
      function s(l) {
        i.call(this, l);
      }
      e("../utils").inherits(s, i), s.prototype.readData = function(l) {
        this.checkOffset(l);
        var f = this.data.slice(this.zero + this.index, this.zero + this.index + l);
        return this.index += l, f;
      }, h.exports = s;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, h, a) {
      var i = e("./DataReader");
      function s(l) {
        i.call(this, l);
      }
      e("../utils").inherits(s, i), s.prototype.byteAt = function(l) {
        return this.data.charCodeAt(this.zero + l);
      }, s.prototype.lastIndexOfSignature = function(l) {
        return this.data.lastIndexOf(l) - this.zero;
      }, s.prototype.readAndCheckSignature = function(l) {
        return l === this.readData(4);
      }, s.prototype.readData = function(l) {
        this.checkOffset(l);
        var f = this.data.slice(this.zero + this.index, this.zero + this.index + l);
        return this.index += l, f;
      }, h.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, h, a) {
      var i = e("./ArrayReader");
      function s(l) {
        i.call(this, l);
      }
      e("../utils").inherits(s, i), s.prototype.readData = function(l) {
        if (this.checkOffset(l), l === 0) return new Uint8Array(0);
        var f = this.data.subarray(this.zero + this.index, this.zero + this.index + l);
        return this.index += l, f;
      }, h.exports = s;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, h, a) {
      var i = e("../utils"), s = e("../support"), l = e("./ArrayReader"), f = e("./StringReader"), y = e("./NodeBufferReader"), S = e("./Uint8ArrayReader");
      h.exports = function(v) {
        var p = i.getTypeOf(v);
        return i.checkSupport(p), p !== "string" || s.uint8array ? p === "nodebuffer" ? new y(v) : s.uint8array ? new S(i.transformTo("uint8array", v)) : new l(i.transformTo("array", v)) : new f(v);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, h, a) {
      a.LOCAL_FILE_HEADER = "PK", a.CENTRAL_FILE_HEADER = "PK", a.CENTRAL_DIRECTORY_END = "PK", a.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", a.ZIP64_CENTRAL_DIRECTORY_END = "PK", a.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(e, h, a) {
      var i = e("./GenericWorker"), s = e("../utils");
      function l(f) {
        i.call(this, "ConvertWorker to " + f), this.destType = f;
      }
      s.inherits(l, i), l.prototype.processChunk = function(f) {
        this.push({ data: s.transformTo(this.destType, f.data), meta: f.meta });
      }, h.exports = l;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, h, a) {
      var i = e("./GenericWorker"), s = e("../crc32");
      function l() {
        i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      e("../utils").inherits(l, i), l.prototype.processChunk = function(f) {
        this.streamInfo.crc32 = s(f.data, this.streamInfo.crc32 || 0), this.push(f);
      }, h.exports = l;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, h, a) {
      var i = e("../utils"), s = e("./GenericWorker");
      function l(f) {
        s.call(this, "DataLengthProbe for " + f), this.propName = f, this.withStreamInfo(f, 0);
      }
      i.inherits(l, s), l.prototype.processChunk = function(f) {
        if (f) {
          var y = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = y + f.data.length;
        }
        s.prototype.processChunk.call(this, f);
      }, h.exports = l;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, h, a) {
      var i = e("../utils"), s = e("./GenericWorker");
      function l(f) {
        s.call(this, "DataWorker");
        var y = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, f.then(function(S) {
          y.dataIsReady = !0, y.data = S, y.max = S && S.length || 0, y.type = i.getTypeOf(S), y.isPaused || y._tickAndRepeat();
        }, function(S) {
          y.error(S);
        });
      }
      i.inherits(l, s), l.prototype.cleanUp = function() {
        s.prototype.cleanUp.call(this), this.data = null;
      }, l.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, i.delay(this._tickAndRepeat, [], this)), !0);
      }, l.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, l.prototype._tick = function() {
        if (this.isPaused || this.isFinished) return !1;
        var f = null, y = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max) return this.end();
        switch (this.type) {
          case "string":
            f = this.data.substring(this.index, y);
            break;
          case "uint8array":
            f = this.data.subarray(this.index, y);
            break;
          case "array":
          case "nodebuffer":
            f = this.data.slice(this.index, y);
        }
        return this.index = y, this.push({ data: f, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, h.exports = l;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, h, a) {
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
      }, on: function(s, l) {
        return this._listeners[s].push(l), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(s, l) {
        if (this._listeners[s]) for (var f = 0; f < this._listeners[s].length; f++) this._listeners[s][f].call(this, l);
      }, pipe: function(s) {
        return s.registerPrevious(this);
      }, registerPrevious: function(s) {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
        var l = this;
        return s.on("data", function(f) {
          l.processChunk(f);
        }), s.on("end", function() {
          l.end();
        }), s.on("error", function(f) {
          l.error(f);
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
      }, withStreamInfo: function(s, l) {
        return this.extraStreamInfo[s] = l, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var s in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, s) && (this.streamInfo[s] = this.extraStreamInfo[s]);
      }, lock: function() {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var s = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + s : s;
      } }, h.exports = i;
    }, {}], 29: [function(e, h, a) {
      var i = e("../utils"), s = e("./ConvertWorker"), l = e("./GenericWorker"), f = e("../base64"), y = e("../support"), S = e("../external"), v = null;
      if (y.nodestream) try {
        v = e("../nodejs/NodejsStreamOutputAdapter");
      } catch {
      }
      function p(_, c) {
        return new S.Promise(function(g, d) {
          var w = [], T = _._internalType, P = _._outputType, A = _._mimeType;
          _.on("data", function(D, N) {
            w.push(D), c && c(N);
          }).on("error", function(D) {
            w = [], d(D);
          }).on("end", function() {
            try {
              var D = function(N, H, M) {
                switch (N) {
                  case "blob":
                    return i.newBlob(i.transformTo("arraybuffer", H), M);
                  case "base64":
                    return f.encode(H);
                  default:
                    return i.transformTo(N, H);
                }
              }(P, function(N, H) {
                var M, Y = 0, q = null, k = 0;
                for (M = 0; M < H.length; M++) k += H[M].length;
                switch (N) {
                  case "string":
                    return H.join("");
                  case "array":
                    return Array.prototype.concat.apply([], H);
                  case "uint8array":
                    for (q = new Uint8Array(k), M = 0; M < H.length; M++) q.set(H[M], Y), Y += H[M].length;
                    return q;
                  case "nodebuffer":
                    return Buffer.concat(H);
                  default:
                    throw new Error("concat : unsupported type '" + N + "'");
                }
              }(T, w), A);
              g(D);
            } catch (N) {
              d(N);
            }
            w = [];
          }).resume();
        });
      }
      function u(_, c, g) {
        var d = c;
        switch (c) {
          case "blob":
          case "arraybuffer":
            d = "uint8array";
            break;
          case "base64":
            d = "string";
        }
        try {
          this._internalType = d, this._outputType = c, this._mimeType = g, i.checkSupport(d), this._worker = _.pipe(new s(d)), _.lock();
        } catch (w) {
          this._worker = new l("error"), this._worker.error(w);
        }
      }
      u.prototype = { accumulate: function(_) {
        return p(this, _);
      }, on: function(_, c) {
        var g = this;
        return _ === "data" ? this._worker.on(_, function(d) {
          c.call(g, d.data, d.meta);
        }) : this._worker.on(_, function() {
          i.delay(c, arguments, g);
        }), this;
      }, resume: function() {
        return i.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(_) {
        if (i.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
        return new v(this, { objectMode: this._outputType !== "nodebuffer" }, _);
      } }, h.exports = u;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, h, a) {
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
        a.nodestream = !!e("readable-stream").Readable;
      } catch {
        a.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(e, h, a) {
      for (var i = e("./utils"), s = e("./support"), l = e("./nodejsUtils"), f = e("./stream/GenericWorker"), y = new Array(256), S = 0; S < 256; S++) y[S] = 252 <= S ? 6 : 248 <= S ? 5 : 240 <= S ? 4 : 224 <= S ? 3 : 192 <= S ? 2 : 1;
      y[254] = y[254] = 1;
      function v() {
        f.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function p() {
        f.call(this, "utf-8 encode");
      }
      a.utf8encode = function(u) {
        return s.nodebuffer ? l.newBufferFrom(u, "utf-8") : function(_) {
          var c, g, d, w, T, P = _.length, A = 0;
          for (w = 0; w < P; w++) (64512 & (g = _.charCodeAt(w))) == 55296 && w + 1 < P && (64512 & (d = _.charCodeAt(w + 1))) == 56320 && (g = 65536 + (g - 55296 << 10) + (d - 56320), w++), A += g < 128 ? 1 : g < 2048 ? 2 : g < 65536 ? 3 : 4;
          for (c = s.uint8array ? new Uint8Array(A) : new Array(A), w = T = 0; T < A; w++) (64512 & (g = _.charCodeAt(w))) == 55296 && w + 1 < P && (64512 & (d = _.charCodeAt(w + 1))) == 56320 && (g = 65536 + (g - 55296 << 10) + (d - 56320), w++), g < 128 ? c[T++] = g : (g < 2048 ? c[T++] = 192 | g >>> 6 : (g < 65536 ? c[T++] = 224 | g >>> 12 : (c[T++] = 240 | g >>> 18, c[T++] = 128 | g >>> 12 & 63), c[T++] = 128 | g >>> 6 & 63), c[T++] = 128 | 63 & g);
          return c;
        }(u);
      }, a.utf8decode = function(u) {
        return s.nodebuffer ? i.transformTo("nodebuffer", u).toString("utf-8") : function(_) {
          var c, g, d, w, T = _.length, P = new Array(2 * T);
          for (c = g = 0; c < T; ) if ((d = _[c++]) < 128) P[g++] = d;
          else if (4 < (w = y[d])) P[g++] = 65533, c += w - 1;
          else {
            for (d &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && c < T; ) d = d << 6 | 63 & _[c++], w--;
            1 < w ? P[g++] = 65533 : d < 65536 ? P[g++] = d : (d -= 65536, P[g++] = 55296 | d >> 10 & 1023, P[g++] = 56320 | 1023 & d);
          }
          return P.length !== g && (P.subarray ? P = P.subarray(0, g) : P.length = g), i.applyFromCharCode(P);
        }(u = i.transformTo(s.uint8array ? "uint8array" : "array", u));
      }, i.inherits(v, f), v.prototype.processChunk = function(u) {
        var _ = i.transformTo(s.uint8array ? "uint8array" : "array", u.data);
        if (this.leftOver && this.leftOver.length) {
          if (s.uint8array) {
            var c = _;
            (_ = new Uint8Array(c.length + this.leftOver.length)).set(this.leftOver, 0), _.set(c, this.leftOver.length);
          } else _ = this.leftOver.concat(_);
          this.leftOver = null;
        }
        var g = function(w, T) {
          var P;
          for ((T = T || w.length) > w.length && (T = w.length), P = T - 1; 0 <= P && (192 & w[P]) == 128; ) P--;
          return P < 0 || P === 0 ? T : P + y[w[P]] > T ? P : T;
        }(_), d = _;
        g !== _.length && (s.uint8array ? (d = _.subarray(0, g), this.leftOver = _.subarray(g, _.length)) : (d = _.slice(0, g), this.leftOver = _.slice(g, _.length))), this.push({ data: a.utf8decode(d), meta: u.meta });
      }, v.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: a.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, a.Utf8DecodeWorker = v, i.inherits(p, f), p.prototype.processChunk = function(u) {
        this.push({ data: a.utf8encode(u.data), meta: u.meta });
      }, a.Utf8EncodeWorker = p;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, h, a) {
      var i = e("./support"), s = e("./base64"), l = e("./nodejsUtils"), f = e("./external");
      function y(c) {
        return c;
      }
      function S(c, g) {
        for (var d = 0; d < c.length; ++d) g[d] = 255 & c.charCodeAt(d);
        return g;
      }
      e("setimmediate"), a.newBlob = function(c, g) {
        a.checkSupport("blob");
        try {
          return new Blob([c], { type: g });
        } catch {
          try {
            var d = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return d.append(c), d.getBlob(g);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var v = { stringifyByChunk: function(c, g, d) {
        var w = [], T = 0, P = c.length;
        if (P <= d) return String.fromCharCode.apply(null, c);
        for (; T < P; ) g === "array" || g === "nodebuffer" ? w.push(String.fromCharCode.apply(null, c.slice(T, Math.min(T + d, P)))) : w.push(String.fromCharCode.apply(null, c.subarray(T, Math.min(T + d, P)))), T += d;
        return w.join("");
      }, stringifyByChar: function(c) {
        for (var g = "", d = 0; d < c.length; d++) g += String.fromCharCode(c[d]);
        return g;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return i.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return i.nodebuffer && String.fromCharCode.apply(null, l.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function p(c) {
        var g = 65536, d = a.getTypeOf(c), w = !0;
        if (d === "uint8array" ? w = v.applyCanBeUsed.uint8array : d === "nodebuffer" && (w = v.applyCanBeUsed.nodebuffer), w) for (; 1 < g; ) try {
          return v.stringifyByChunk(c, d, g);
        } catch {
          g = Math.floor(g / 2);
        }
        return v.stringifyByChar(c);
      }
      function u(c, g) {
        for (var d = 0; d < c.length; d++) g[d] = c[d];
        return g;
      }
      a.applyFromCharCode = p;
      var _ = {};
      _.string = { string: y, array: function(c) {
        return S(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return _.string.uint8array(c).buffer;
      }, uint8array: function(c) {
        return S(c, new Uint8Array(c.length));
      }, nodebuffer: function(c) {
        return S(c, l.allocBuffer(c.length));
      } }, _.array = { string: p, array: y, arraybuffer: function(c) {
        return new Uint8Array(c).buffer;
      }, uint8array: function(c) {
        return new Uint8Array(c);
      }, nodebuffer: function(c) {
        return l.newBufferFrom(c);
      } }, _.arraybuffer = { string: function(c) {
        return p(new Uint8Array(c));
      }, array: function(c) {
        return u(new Uint8Array(c), new Array(c.byteLength));
      }, arraybuffer: y, uint8array: function(c) {
        return new Uint8Array(c);
      }, nodebuffer: function(c) {
        return l.newBufferFrom(new Uint8Array(c));
      } }, _.uint8array = { string: p, array: function(c) {
        return u(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return c.buffer;
      }, uint8array: y, nodebuffer: function(c) {
        return l.newBufferFrom(c);
      } }, _.nodebuffer = { string: p, array: function(c) {
        return u(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return _.nodebuffer.uint8array(c).buffer;
      }, uint8array: function(c) {
        return u(c, new Uint8Array(c.length));
      }, nodebuffer: y }, a.transformTo = function(c, g) {
        if (g = g || "", !c) return g;
        a.checkSupport(c);
        var d = a.getTypeOf(g);
        return _[d][c](g);
      }, a.resolve = function(c) {
        for (var g = c.split("/"), d = [], w = 0; w < g.length; w++) {
          var T = g[w];
          T === "." || T === "" && w !== 0 && w !== g.length - 1 || (T === ".." ? d.pop() : d.push(T));
        }
        return d.join("/");
      }, a.getTypeOf = function(c) {
        if (typeof c == "string") return "string";
        var g = Object.prototype.toString.call(c);
        return g === "[object Array]" ? "array" : i.nodebuffer && l.isBuffer(c) ? "nodebuffer" : i.uint8array && g === "[object Uint8Array]" ? "uint8array" : i.arraybuffer && g === "[object ArrayBuffer]" ? "arraybuffer" : void 0;
      }, a.checkSupport = function(c) {
        if (!i[c.toLowerCase()]) throw new Error(c + " is not supported by this platform");
      }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(c) {
        var g, d, w = "";
        for (d = 0; d < (c || "").length; d++) w += "\\x" + ((g = c.charCodeAt(d)) < 16 ? "0" : "") + g.toString(16).toUpperCase();
        return w;
      }, a.delay = function(c, g, d) {
        setImmediate(function() {
          c.apply(d || null, g || []);
        });
      }, a.inherits = function(c, g) {
        function d() {
        }
        d.prototype = g.prototype, c.prototype = new d();
      }, a.extend = function() {
        var c, g, d = {};
        for (c = 0; c < arguments.length; c++) for (g in arguments[c]) Object.prototype.hasOwnProperty.call(arguments[c], g) && d[g] === void 0 && (d[g] = arguments[c][g]);
        return d;
      }, a.prepareContent = function(c, g, d, w, T) {
        return f.Promise.resolve(g).then(function(P) {
          return i.blob && (P instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(P)) !== -1) ? Blob.prototype.arrayBuffer !== void 0 ? P.arrayBuffer() : typeof FileReader < "u" ? new f.Promise(function(A, D) {
            var N = new FileReader();
            N.onload = function(H) {
              A(H.target.result);
            }, N.onerror = function(H) {
              D(H.target.error);
            }, N.readAsArrayBuffer(P);
          }) : f.Promise.reject(new Error(c + " is a Blob, but we have no way of reading it.")) : P;
        }).then(function(P) {
          var A = a.getTypeOf(P);
          return A ? (A === "arraybuffer" ? P = a.transformTo("uint8array", P) : A === "string" && (T ? P = s.decode(P) : d && w !== !0 && (P = function(D) {
            return S(D, i.uint8array ? new Uint8Array(D.length) : new Array(D.length));
          }(P))), P) : f.Promise.reject(new Error("Can't read the data of '" + c + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, h, a) {
      var i = e("./reader/readerFor"), s = e("./utils"), l = e("./signature"), f = e("./zipEntry"), y = e("./support");
      function S(v) {
        this.files = [], this.loadOptions = v;
      }
      S.prototype = { checkSignature: function(v) {
        if (!this.reader.readAndCheckSignature(v)) {
          this.reader.index -= 4;
          var p = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(p) + ", expected " + s.pretty(v) + ")");
        }
      }, isSignature: function(v, p) {
        var u = this.reader.index;
        this.reader.setIndex(v);
        var _ = this.reader.readString(4) === p;
        return this.reader.setIndex(u), _;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var v = this.reader.readData(this.zipCommentLength), p = y.uint8array ? "uint8array" : "array", u = s.transformTo(p, v);
        this.zipComment = this.loadOptions.decodeFileName(u);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var v, p, u, _ = this.zip64EndOfCentralSize - 44; 0 < _; ) v = this.reader.readInt(2), p = this.reader.readInt(4), u = this.reader.readData(p), this.zip64ExtensibleData[v] = { id: v, length: p, value: u };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var v, p;
        for (v = 0; v < this.files.length; v++) p = this.files[v], this.reader.setIndex(p.localHeaderOffset), this.checkSignature(l.LOCAL_FILE_HEADER), p.readLocalPart(this.reader), p.handleUTF8(), p.processAttributes();
      }, readCentralDir: function() {
        var v;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(l.CENTRAL_FILE_HEADER); ) (v = new f({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(v);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var v = this.reader.lastIndexOfSignature(l.CENTRAL_DIRECTORY_END);
        if (v < 0) throw this.isSignature(0, l.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(v);
        var p = v;
        if (this.checkSignature(l.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (v = this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(v), this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, l.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var u = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (u += 20, u += 12 + this.zip64EndOfCentralSize);
        var _ = p - u;
        if (0 < _) this.isSignature(p, l.CENTRAL_FILE_HEADER) || (this.reader.zero = _);
        else if (_ < 0) throw new Error("Corrupted zip: missing " + Math.abs(_) + " bytes.");
      }, prepareReader: function(v) {
        this.reader = i(v);
      }, load: function(v) {
        this.prepareReader(v), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, h.exports = S;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, h, a) {
      var i = e("./reader/readerFor"), s = e("./utils"), l = e("./compressedObject"), f = e("./crc32"), y = e("./utf8"), S = e("./compressions"), v = e("./support");
      function p(u, _) {
        this.options = u, this.loadOptions = _;
      }
      p.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(u) {
        var _, c;
        if (u.skip(22), this.fileNameLength = u.readInt(2), c = u.readInt(2), this.fileName = u.readData(this.fileNameLength), u.skip(c), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((_ = function(g) {
          for (var d in S) if (Object.prototype.hasOwnProperty.call(S, d) && S[d].magic === g) return S[d];
          return null;
        }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
        this.decompressed = new l(this.compressedSize, this.uncompressedSize, this.crc32, _, u.readData(this.compressedSize));
      }, readCentralPart: function(u) {
        this.versionMadeBy = u.readInt(2), u.skip(2), this.bitFlag = u.readInt(2), this.compressionMethod = u.readString(2), this.date = u.readDate(), this.crc32 = u.readInt(4), this.compressedSize = u.readInt(4), this.uncompressedSize = u.readInt(4);
        var _ = u.readInt(2);
        if (this.extraFieldsLength = u.readInt(2), this.fileCommentLength = u.readInt(2), this.diskNumberStart = u.readInt(2), this.internalFileAttributes = u.readInt(2), this.externalFileAttributes = u.readInt(4), this.localHeaderOffset = u.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
        u.skip(_), this.readExtraFields(u), this.parseZIP64ExtraField(u), this.fileComment = u.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var u = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), u == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), u == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var u = i(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = u.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = u.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = u.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = u.readInt(4));
        }
      }, readExtraFields: function(u) {
        var _, c, g, d = u.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); u.index + 4 < d; ) _ = u.readInt(2), c = u.readInt(2), g = u.readData(c), this.extraFields[_] = { id: _, length: c, value: g };
        u.setIndex(d);
      }, handleUTF8: function() {
        var u = v.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) this.fileNameStr = y.utf8decode(this.fileName), this.fileCommentStr = y.utf8decode(this.fileComment);
        else {
          var _ = this.findExtraFieldUnicodePath();
          if (_ !== null) this.fileNameStr = _;
          else {
            var c = s.transformTo(u, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(c);
          }
          var g = this.findExtraFieldUnicodeComment();
          if (g !== null) this.fileCommentStr = g;
          else {
            var d = s.transformTo(u, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(d);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var u = this.extraFields[28789];
        if (u) {
          var _ = i(u.value);
          return _.readInt(1) !== 1 || f(this.fileName) !== _.readInt(4) ? null : y.utf8decode(_.readData(u.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var u = this.extraFields[25461];
        if (u) {
          var _ = i(u.value);
          return _.readInt(1) !== 1 || f(this.fileComment) !== _.readInt(4) ? null : y.utf8decode(_.readData(u.length - 5));
        }
        return null;
      } }, h.exports = p;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, h, a) {
      function i(_, c, g) {
        this.name = _, this.dir = g.dir, this.date = g.date, this.comment = g.comment, this.unixPermissions = g.unixPermissions, this.dosPermissions = g.dosPermissions, this._data = c, this._dataBinary = g.binary, this.options = { compression: g.compression, compressionOptions: g.compressionOptions };
      }
      var s = e("./stream/StreamHelper"), l = e("./stream/DataWorker"), f = e("./utf8"), y = e("./compressedObject"), S = e("./stream/GenericWorker");
      i.prototype = { internalStream: function(_) {
        var c = null, g = "string";
        try {
          if (!_) throw new Error("No output type specified.");
          var d = (g = _.toLowerCase()) === "string" || g === "text";
          g !== "binarystring" && g !== "text" || (g = "string"), c = this._decompressWorker();
          var w = !this._dataBinary;
          w && !d && (c = c.pipe(new f.Utf8EncodeWorker())), !w && d && (c = c.pipe(new f.Utf8DecodeWorker()));
        } catch (T) {
          (c = new S("error")).error(T);
        }
        return new s(c, g, "");
      }, async: function(_, c) {
        return this.internalStream(_).accumulate(c);
      }, nodeStream: function(_, c) {
        return this.internalStream(_ || "nodebuffer").toNodejsStream(c);
      }, _compressWorker: function(_, c) {
        if (this._data instanceof y && this._data.compression.magic === _.magic) return this._data.getCompressedWorker();
        var g = this._decompressWorker();
        return this._dataBinary || (g = g.pipe(new f.Utf8EncodeWorker())), y.createWorkerFrom(g, _, c);
      }, _decompressWorker: function() {
        return this._data instanceof y ? this._data.getContentWorker() : this._data instanceof S ? this._data : new l(this._data);
      } };
      for (var v = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], p = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, u = 0; u < v.length; u++) i.prototype[v[u]] = p;
      h.exports = i;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, h, a) {
      (function(i) {
        var s, l, f = i.MutationObserver || i.WebKitMutationObserver;
        if (f) {
          var y = 0, S = new f(_), v = i.document.createTextNode("");
          S.observe(v, { characterData: !0 }), s = function() {
            v.data = y = ++y % 2;
          };
        } else if (i.setImmediate || i.MessageChannel === void 0) s = "document" in i && "onreadystatechange" in i.document.createElement("script") ? function() {
          var c = i.document.createElement("script");
          c.onreadystatechange = function() {
            _(), c.onreadystatechange = null, c.parentNode.removeChild(c), c = null;
          }, i.document.documentElement.appendChild(c);
        } : function() {
          setTimeout(_, 0);
        };
        else {
          var p = new i.MessageChannel();
          p.port1.onmessage = _, s = function() {
            p.port2.postMessage(0);
          };
        }
        var u = [];
        function _() {
          var c, g;
          l = !0;
          for (var d = u.length; d; ) {
            for (g = u, u = [], c = -1; ++c < d; ) g[c]();
            d = u.length;
          }
          l = !1;
        }
        h.exports = function(c) {
          u.push(c) !== 1 || l || s();
        };
      }).call(this, typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(e, h, a) {
      var i = e("immediate");
      function s() {
      }
      var l = {}, f = ["REJECTED"], y = ["FULFILLED"], S = ["PENDING"];
      function v(d) {
        if (typeof d != "function") throw new TypeError("resolver must be a function");
        this.state = S, this.queue = [], this.outcome = void 0, d !== s && c(this, d);
      }
      function p(d, w, T) {
        this.promise = d, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof T == "function" && (this.onRejected = T, this.callRejected = this.otherCallRejected);
      }
      function u(d, w, T) {
        i(function() {
          var P;
          try {
            P = w(T);
          } catch (A) {
            return l.reject(d, A);
          }
          P === d ? l.reject(d, new TypeError("Cannot resolve promise with itself")) : l.resolve(d, P);
        });
      }
      function _(d) {
        var w = d && d.then;
        if (d && (typeof d == "object" || typeof d == "function") && typeof w == "function") return function() {
          w.apply(d, arguments);
        };
      }
      function c(d, w) {
        var T = !1;
        function P(N) {
          T || (T = !0, l.reject(d, N));
        }
        function A(N) {
          T || (T = !0, l.resolve(d, N));
        }
        var D = g(function() {
          w(A, P);
        });
        D.status === "error" && P(D.value);
      }
      function g(d, w) {
        var T = {};
        try {
          T.value = d(w), T.status = "success";
        } catch (P) {
          T.status = "error", T.value = P;
        }
        return T;
      }
      (h.exports = v).prototype.finally = function(d) {
        if (typeof d != "function") return this;
        var w = this.constructor;
        return this.then(function(T) {
          return w.resolve(d()).then(function() {
            return T;
          });
        }, function(T) {
          return w.resolve(d()).then(function() {
            throw T;
          });
        });
      }, v.prototype.catch = function(d) {
        return this.then(null, d);
      }, v.prototype.then = function(d, w) {
        if (typeof d != "function" && this.state === y || typeof w != "function" && this.state === f) return this;
        var T = new this.constructor(s);
        return this.state !== S ? u(T, this.state === y ? d : w, this.outcome) : this.queue.push(new p(T, d, w)), T;
      }, p.prototype.callFulfilled = function(d) {
        l.resolve(this.promise, d);
      }, p.prototype.otherCallFulfilled = function(d) {
        u(this.promise, this.onFulfilled, d);
      }, p.prototype.callRejected = function(d) {
        l.reject(this.promise, d);
      }, p.prototype.otherCallRejected = function(d) {
        u(this.promise, this.onRejected, d);
      }, l.resolve = function(d, w) {
        var T = g(_, w);
        if (T.status === "error") return l.reject(d, T.value);
        var P = T.value;
        if (P) c(d, P);
        else {
          d.state = y, d.outcome = w;
          for (var A = -1, D = d.queue.length; ++A < D; ) d.queue[A].callFulfilled(w);
        }
        return d;
      }, l.reject = function(d, w) {
        d.state = f, d.outcome = w;
        for (var T = -1, P = d.queue.length; ++T < P; ) d.queue[T].callRejected(w);
        return d;
      }, v.resolve = function(d) {
        return d instanceof this ? d : l.resolve(new this(s), d);
      }, v.reject = function(d) {
        var w = new this(s);
        return l.reject(w, d);
      }, v.all = function(d) {
        var w = this;
        if (Object.prototype.toString.call(d) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var T = d.length, P = !1;
        if (!T) return this.resolve([]);
        for (var A = new Array(T), D = 0, N = -1, H = new this(s); ++N < T; ) M(d[N], N);
        return H;
        function M(Y, q) {
          w.resolve(Y).then(function(k) {
            A[q] = k, ++D !== T || P || (P = !0, l.resolve(H, A));
          }, function(k) {
            P || (P = !0, l.reject(H, k));
          });
        }
      }, v.race = function(d) {
        var w = this;
        if (Object.prototype.toString.call(d) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var T = d.length, P = !1;
        if (!T) return this.resolve([]);
        for (var A = -1, D = new this(s); ++A < T; ) N = d[A], w.resolve(N).then(function(H) {
          P || (P = !0, l.resolve(D, H));
        }, function(H) {
          P || (P = !0, l.reject(D, H));
        });
        var N;
        return D;
      };
    }, { immediate: 36 }], 38: [function(e, h, a) {
      var i = {};
      (0, e("./lib/utils/common").assign)(i, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), h.exports = i;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, h, a) {
      var i = e("./zlib/deflate"), s = e("./utils/common"), l = e("./utils/strings"), f = e("./zlib/messages"), y = e("./zlib/zstream"), S = Object.prototype.toString, v = 0, p = -1, u = 0, _ = 8;
      function c(d) {
        if (!(this instanceof c)) return new c(d);
        this.options = s.assign({ level: p, method: _, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: u, to: "" }, d || {});
        var w = this.options;
        w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new y(), this.strm.avail_out = 0;
        var T = i.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (T !== v) throw new Error(f[T]);
        if (w.header && i.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var P;
          if (P = typeof w.dictionary == "string" ? l.string2buf(w.dictionary) : S.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (T = i.deflateSetDictionary(this.strm, P)) !== v) throw new Error(f[T]);
          this._dict_set = !0;
        }
      }
      function g(d, w) {
        var T = new c(w);
        if (T.push(d, !0), T.err) throw T.msg || f[T.err];
        return T.result;
      }
      c.prototype.push = function(d, w) {
        var T, P, A = this.strm, D = this.options.chunkSize;
        if (this.ended) return !1;
        P = w === ~~w ? w : w === !0 ? 4 : 0, typeof d == "string" ? A.input = l.string2buf(d) : S.call(d) === "[object ArrayBuffer]" ? A.input = new Uint8Array(d) : A.input = d, A.next_in = 0, A.avail_in = A.input.length;
        do {
          if (A.avail_out === 0 && (A.output = new s.Buf8(D), A.next_out = 0, A.avail_out = D), (T = i.deflate(A, P)) !== 1 && T !== v) return this.onEnd(T), !(this.ended = !0);
          A.avail_out !== 0 && (A.avail_in !== 0 || P !== 4 && P !== 2) || (this.options.to === "string" ? this.onData(l.buf2binstring(s.shrinkBuf(A.output, A.next_out))) : this.onData(s.shrinkBuf(A.output, A.next_out)));
        } while ((0 < A.avail_in || A.avail_out === 0) && T !== 1);
        return P === 4 ? (T = i.deflateEnd(this.strm), this.onEnd(T), this.ended = !0, T === v) : P !== 2 || (this.onEnd(v), !(A.avail_out = 0));
      }, c.prototype.onData = function(d) {
        this.chunks.push(d);
      }, c.prototype.onEnd = function(d) {
        d === v && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = d, this.msg = this.strm.msg;
      }, a.Deflate = c, a.deflate = g, a.deflateRaw = function(d, w) {
        return (w = w || {}).raw = !0, g(d, w);
      }, a.gzip = function(d, w) {
        return (w = w || {}).gzip = !0, g(d, w);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, h, a) {
      var i = e("./zlib/inflate"), s = e("./utils/common"), l = e("./utils/strings"), f = e("./zlib/constants"), y = e("./zlib/messages"), S = e("./zlib/zstream"), v = e("./zlib/gzheader"), p = Object.prototype.toString;
      function u(c) {
        if (!(this instanceof u)) return new u(c);
        this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, c || {});
        var g = this.options;
        g.raw && 0 <= g.windowBits && g.windowBits < 16 && (g.windowBits = -g.windowBits, g.windowBits === 0 && (g.windowBits = -15)), !(0 <= g.windowBits && g.windowBits < 16) || c && c.windowBits || (g.windowBits += 32), 15 < g.windowBits && g.windowBits < 48 && !(15 & g.windowBits) && (g.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new S(), this.strm.avail_out = 0;
        var d = i.inflateInit2(this.strm, g.windowBits);
        if (d !== f.Z_OK) throw new Error(y[d]);
        this.header = new v(), i.inflateGetHeader(this.strm, this.header);
      }
      function _(c, g) {
        var d = new u(g);
        if (d.push(c, !0), d.err) throw d.msg || y[d.err];
        return d.result;
      }
      u.prototype.push = function(c, g) {
        var d, w, T, P, A, D, N = this.strm, H = this.options.chunkSize, M = this.options.dictionary, Y = !1;
        if (this.ended) return !1;
        w = g === ~~g ? g : g === !0 ? f.Z_FINISH : f.Z_NO_FLUSH, typeof c == "string" ? N.input = l.binstring2buf(c) : p.call(c) === "[object ArrayBuffer]" ? N.input = new Uint8Array(c) : N.input = c, N.next_in = 0, N.avail_in = N.input.length;
        do {
          if (N.avail_out === 0 && (N.output = new s.Buf8(H), N.next_out = 0, N.avail_out = H), (d = i.inflate(N, f.Z_NO_FLUSH)) === f.Z_NEED_DICT && M && (D = typeof M == "string" ? l.string2buf(M) : p.call(M) === "[object ArrayBuffer]" ? new Uint8Array(M) : M, d = i.inflateSetDictionary(this.strm, D)), d === f.Z_BUF_ERROR && Y === !0 && (d = f.Z_OK, Y = !1), d !== f.Z_STREAM_END && d !== f.Z_OK) return this.onEnd(d), !(this.ended = !0);
          N.next_out && (N.avail_out !== 0 && d !== f.Z_STREAM_END && (N.avail_in !== 0 || w !== f.Z_FINISH && w !== f.Z_SYNC_FLUSH) || (this.options.to === "string" ? (T = l.utf8border(N.output, N.next_out), P = N.next_out - T, A = l.buf2string(N.output, T), N.next_out = P, N.avail_out = H - P, P && s.arraySet(N.output, N.output, T, P, 0), this.onData(A)) : this.onData(s.shrinkBuf(N.output, N.next_out)))), N.avail_in === 0 && N.avail_out === 0 && (Y = !0);
        } while ((0 < N.avail_in || N.avail_out === 0) && d !== f.Z_STREAM_END);
        return d === f.Z_STREAM_END && (w = f.Z_FINISH), w === f.Z_FINISH ? (d = i.inflateEnd(this.strm), this.onEnd(d), this.ended = !0, d === f.Z_OK) : w !== f.Z_SYNC_FLUSH || (this.onEnd(f.Z_OK), !(N.avail_out = 0));
      }, u.prototype.onData = function(c) {
        this.chunks.push(c);
      }, u.prototype.onEnd = function(c) {
        c === f.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = c, this.msg = this.strm.msg;
      }, a.Inflate = u, a.inflate = _, a.inflateRaw = function(c, g) {
        return (g = g || {}).raw = !0, _(c, g);
      }, a.ungzip = _;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, h, a) {
      var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      a.assign = function(f) {
        for (var y = Array.prototype.slice.call(arguments, 1); y.length; ) {
          var S = y.shift();
          if (S) {
            if (typeof S != "object") throw new TypeError(S + "must be non-object");
            for (var v in S) S.hasOwnProperty(v) && (f[v] = S[v]);
          }
        }
        return f;
      }, a.shrinkBuf = function(f, y) {
        return f.length === y ? f : f.subarray ? f.subarray(0, y) : (f.length = y, f);
      };
      var s = { arraySet: function(f, y, S, v, p) {
        if (y.subarray && f.subarray) f.set(y.subarray(S, S + v), p);
        else for (var u = 0; u < v; u++) f[p + u] = y[S + u];
      }, flattenChunks: function(f) {
        var y, S, v, p, u, _;
        for (y = v = 0, S = f.length; y < S; y++) v += f[y].length;
        for (_ = new Uint8Array(v), y = p = 0, S = f.length; y < S; y++) u = f[y], _.set(u, p), p += u.length;
        return _;
      } }, l = { arraySet: function(f, y, S, v, p) {
        for (var u = 0; u < v; u++) f[p + u] = y[S + u];
      }, flattenChunks: function(f) {
        return [].concat.apply([], f);
      } };
      a.setTyped = function(f) {
        f ? (a.Buf8 = Uint8Array, a.Buf16 = Uint16Array, a.Buf32 = Int32Array, a.assign(a, s)) : (a.Buf8 = Array, a.Buf16 = Array, a.Buf32 = Array, a.assign(a, l));
      }, a.setTyped(i);
    }, {}], 42: [function(e, h, a) {
      var i = e("./common"), s = !0, l = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        s = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        l = !1;
      }
      for (var f = new i.Buf8(256), y = 0; y < 256; y++) f[y] = 252 <= y ? 6 : 248 <= y ? 5 : 240 <= y ? 4 : 224 <= y ? 3 : 192 <= y ? 2 : 1;
      function S(v, p) {
        if (p < 65537 && (v.subarray && l || !v.subarray && s)) return String.fromCharCode.apply(null, i.shrinkBuf(v, p));
        for (var u = "", _ = 0; _ < p; _++) u += String.fromCharCode(v[_]);
        return u;
      }
      f[254] = f[254] = 1, a.string2buf = function(v) {
        var p, u, _, c, g, d = v.length, w = 0;
        for (c = 0; c < d; c++) (64512 & (u = v.charCodeAt(c))) == 55296 && c + 1 < d && (64512 & (_ = v.charCodeAt(c + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (_ - 56320), c++), w += u < 128 ? 1 : u < 2048 ? 2 : u < 65536 ? 3 : 4;
        for (p = new i.Buf8(w), c = g = 0; g < w; c++) (64512 & (u = v.charCodeAt(c))) == 55296 && c + 1 < d && (64512 & (_ = v.charCodeAt(c + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (_ - 56320), c++), u < 128 ? p[g++] = u : (u < 2048 ? p[g++] = 192 | u >>> 6 : (u < 65536 ? p[g++] = 224 | u >>> 12 : (p[g++] = 240 | u >>> 18, p[g++] = 128 | u >>> 12 & 63), p[g++] = 128 | u >>> 6 & 63), p[g++] = 128 | 63 & u);
        return p;
      }, a.buf2binstring = function(v) {
        return S(v, v.length);
      }, a.binstring2buf = function(v) {
        for (var p = new i.Buf8(v.length), u = 0, _ = p.length; u < _; u++) p[u] = v.charCodeAt(u);
        return p;
      }, a.buf2string = function(v, p) {
        var u, _, c, g, d = p || v.length, w = new Array(2 * d);
        for (u = _ = 0; u < d; ) if ((c = v[u++]) < 128) w[_++] = c;
        else if (4 < (g = f[c])) w[_++] = 65533, u += g - 1;
        else {
          for (c &= g === 2 ? 31 : g === 3 ? 15 : 7; 1 < g && u < d; ) c = c << 6 | 63 & v[u++], g--;
          1 < g ? w[_++] = 65533 : c < 65536 ? w[_++] = c : (c -= 65536, w[_++] = 55296 | c >> 10 & 1023, w[_++] = 56320 | 1023 & c);
        }
        return S(w, _);
      }, a.utf8border = function(v, p) {
        var u;
        for ((p = p || v.length) > v.length && (p = v.length), u = p - 1; 0 <= u && (192 & v[u]) == 128; ) u--;
        return u < 0 || u === 0 ? p : u + f[v[u]] > p ? u : p;
      };
    }, { "./common": 41 }], 43: [function(e, h, a) {
      h.exports = function(i, s, l, f) {
        for (var y = 65535 & i | 0, S = i >>> 16 & 65535 | 0, v = 0; l !== 0; ) {
          for (l -= v = 2e3 < l ? 2e3 : l; S = S + (y = y + s[f++] | 0) | 0, --v; ) ;
          y %= 65521, S %= 65521;
        }
        return y | S << 16 | 0;
      };
    }, {}], 44: [function(e, h, a) {
      h.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(e, h, a) {
      var i = function() {
        for (var s, l = [], f = 0; f < 256; f++) {
          s = f;
          for (var y = 0; y < 8; y++) s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
          l[f] = s;
        }
        return l;
      }();
      h.exports = function(s, l, f, y) {
        var S = i, v = y + f;
        s ^= -1;
        for (var p = y; p < v; p++) s = s >>> 8 ^ S[255 & (s ^ l[p])];
        return -1 ^ s;
      };
    }, {}], 46: [function(e, h, a) {
      var i, s = e("../utils/common"), l = e("./trees"), f = e("./adler32"), y = e("./crc32"), S = e("./messages"), v = 0, p = 4, u = 0, _ = -2, c = -1, g = 4, d = 2, w = 8, T = 9, P = 286, A = 30, D = 19, N = 2 * P + 1, H = 15, M = 3, Y = 258, q = Y + M + 1, k = 42, F = 113, r = 1, O = 2, V = 3, j = 4;
      function rt(n, U) {
        return n.msg = S[U], U;
      }
      function W(n) {
        return (n << 1) - (4 < n ? 9 : 0);
      }
      function it(n) {
        for (var U = n.length; 0 <= --U; ) n[U] = 0;
      }
      function I(n) {
        var U = n.state, L = U.pending;
        L > n.avail_out && (L = n.avail_out), L !== 0 && (s.arraySet(n.output, U.pending_buf, U.pending_out, L, n.next_out), n.next_out += L, U.pending_out += L, n.total_out += L, n.avail_out -= L, U.pending -= L, U.pending === 0 && (U.pending_out = 0));
      }
      function x(n, U) {
        l._tr_flush_block(n, 0 <= n.block_start ? n.block_start : -1, n.strstart - n.block_start, U), n.block_start = n.strstart, I(n.strm);
      }
      function J(n, U) {
        n.pending_buf[n.pending++] = U;
      }
      function B(n, U) {
        n.pending_buf[n.pending++] = U >>> 8 & 255, n.pending_buf[n.pending++] = 255 & U;
      }
      function Z(n, U) {
        var L, E, b = n.max_chain_length, C = n.strstart, $ = n.prev_length, G = n.nice_match, R = n.strstart > n.w_size - q ? n.strstart - (n.w_size - q) : 0, Q = n.window, nt = n.w_mask, tt = n.prev, at = n.strstart + Y, ht = Q[C + $ - 1], ct = Q[C + $];
        n.prev_length >= n.good_match && (b >>= 2), G > n.lookahead && (G = n.lookahead);
        do
          if (Q[(L = U) + $] === ct && Q[L + $ - 1] === ht && Q[L] === Q[C] && Q[++L] === Q[C + 1]) {
            C += 2, L++;
            do
              ;
            while (Q[++C] === Q[++L] && Q[++C] === Q[++L] && Q[++C] === Q[++L] && Q[++C] === Q[++L] && Q[++C] === Q[++L] && Q[++C] === Q[++L] && Q[++C] === Q[++L] && Q[++C] === Q[++L] && C < at);
            if (E = Y - (at - C), C = at - Y, $ < E) {
              if (n.match_start = U, G <= ($ = E)) break;
              ht = Q[C + $ - 1], ct = Q[C + $];
            }
          }
        while ((U = tt[U & nt]) > R && --b != 0);
        return $ <= n.lookahead ? $ : n.lookahead;
      }
      function lt(n) {
        var U, L, E, b, C, $, G, R, Q, nt, tt = n.w_size;
        do {
          if (b = n.window_size - n.lookahead - n.strstart, n.strstart >= tt + (tt - q)) {
            for (s.arraySet(n.window, n.window, tt, tt, 0), n.match_start -= tt, n.strstart -= tt, n.block_start -= tt, U = L = n.hash_size; E = n.head[--U], n.head[U] = tt <= E ? E - tt : 0, --L; ) ;
            for (U = L = tt; E = n.prev[--U], n.prev[U] = tt <= E ? E - tt : 0, --L; ) ;
            b += tt;
          }
          if (n.strm.avail_in === 0) break;
          if ($ = n.strm, G = n.window, R = n.strstart + n.lookahead, Q = b, nt = void 0, nt = $.avail_in, Q < nt && (nt = Q), L = nt === 0 ? 0 : ($.avail_in -= nt, s.arraySet(G, $.input, $.next_in, nt, R), $.state.wrap === 1 ? $.adler = f($.adler, G, nt, R) : $.state.wrap === 2 && ($.adler = y($.adler, G, nt, R)), $.next_in += nt, $.total_in += nt, nt), n.lookahead += L, n.lookahead + n.insert >= M) for (C = n.strstart - n.insert, n.ins_h = n.window[C], n.ins_h = (n.ins_h << n.hash_shift ^ n.window[C + 1]) & n.hash_mask; n.insert && (n.ins_h = (n.ins_h << n.hash_shift ^ n.window[C + M - 1]) & n.hash_mask, n.prev[C & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = C, C++, n.insert--, !(n.lookahead + n.insert < M)); ) ;
        } while (n.lookahead < q && n.strm.avail_in !== 0);
      }
      function ft(n, U) {
        for (var L, E; ; ) {
          if (n.lookahead < q) {
            if (lt(n), n.lookahead < q && U === v) return r;
            if (n.lookahead === 0) break;
          }
          if (L = 0, n.lookahead >= M && (n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + M - 1]) & n.hash_mask, L = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart), L !== 0 && n.strstart - L <= n.w_size - q && (n.match_length = Z(n, L)), n.match_length >= M) if (E = l._tr_tally(n, n.strstart - n.match_start, n.match_length - M), n.lookahead -= n.match_length, n.match_length <= n.max_lazy_match && n.lookahead >= M) {
            for (n.match_length--; n.strstart++, n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + M - 1]) & n.hash_mask, L = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart, --n.match_length != 0; ) ;
            n.strstart++;
          } else n.strstart += n.match_length, n.match_length = 0, n.ins_h = n.window[n.strstart], n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + 1]) & n.hash_mask;
          else E = l._tr_tally(n, 0, n.window[n.strstart]), n.lookahead--, n.strstart++;
          if (E && (x(n, !1), n.strm.avail_out === 0)) return r;
        }
        return n.insert = n.strstart < M - 1 ? n.strstart : M - 1, U === p ? (x(n, !0), n.strm.avail_out === 0 ? V : j) : n.last_lit && (x(n, !1), n.strm.avail_out === 0) ? r : O;
      }
      function st(n, U) {
        for (var L, E, b; ; ) {
          if (n.lookahead < q) {
            if (lt(n), n.lookahead < q && U === v) return r;
            if (n.lookahead === 0) break;
          }
          if (L = 0, n.lookahead >= M && (n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + M - 1]) & n.hash_mask, L = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart), n.prev_length = n.match_length, n.prev_match = n.match_start, n.match_length = M - 1, L !== 0 && n.prev_length < n.max_lazy_match && n.strstart - L <= n.w_size - q && (n.match_length = Z(n, L), n.match_length <= 5 && (n.strategy === 1 || n.match_length === M && 4096 < n.strstart - n.match_start) && (n.match_length = M - 1)), n.prev_length >= M && n.match_length <= n.prev_length) {
            for (b = n.strstart + n.lookahead - M, E = l._tr_tally(n, n.strstart - 1 - n.prev_match, n.prev_length - M), n.lookahead -= n.prev_length - 1, n.prev_length -= 2; ++n.strstart <= b && (n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + M - 1]) & n.hash_mask, L = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart), --n.prev_length != 0; ) ;
            if (n.match_available = 0, n.match_length = M - 1, n.strstart++, E && (x(n, !1), n.strm.avail_out === 0)) return r;
          } else if (n.match_available) {
            if ((E = l._tr_tally(n, 0, n.window[n.strstart - 1])) && x(n, !1), n.strstart++, n.lookahead--, n.strm.avail_out === 0) return r;
          } else n.match_available = 1, n.strstart++, n.lookahead--;
        }
        return n.match_available && (E = l._tr_tally(n, 0, n.window[n.strstart - 1]), n.match_available = 0), n.insert = n.strstart < M - 1 ? n.strstart : M - 1, U === p ? (x(n, !0), n.strm.avail_out === 0 ? V : j) : n.last_lit && (x(n, !1), n.strm.avail_out === 0) ? r : O;
      }
      function ut(n, U, L, E, b) {
        this.good_length = n, this.max_lazy = U, this.nice_length = L, this.max_chain = E, this.func = b;
      }
      function vt() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * N), this.dyn_dtree = new s.Buf16(2 * (2 * A + 1)), this.bl_tree = new s.Buf16(2 * (2 * D + 1)), it(this.dyn_ltree), it(this.dyn_dtree), it(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(H + 1), this.heap = new s.Buf16(2 * P + 1), it(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * P + 1), it(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function bt(n) {
        var U;
        return n && n.state ? (n.total_in = n.total_out = 0, n.data_type = d, (U = n.state).pending = 0, U.pending_out = 0, U.wrap < 0 && (U.wrap = -U.wrap), U.status = U.wrap ? k : F, n.adler = U.wrap === 2 ? 0 : 1, U.last_flush = v, l._tr_init(U), u) : rt(n, _);
      }
      function Et(n) {
        var U = bt(n);
        return U === u && function(L) {
          L.window_size = 2 * L.w_size, it(L.head), L.max_lazy_match = i[L.level].max_lazy, L.good_match = i[L.level].good_length, L.nice_match = i[L.level].nice_length, L.max_chain_length = i[L.level].max_chain, L.strstart = 0, L.block_start = 0, L.lookahead = 0, L.insert = 0, L.match_length = L.prev_length = M - 1, L.match_available = 0, L.ins_h = 0;
        }(n.state), U;
      }
      function St(n, U, L, E, b, C) {
        if (!n) return _;
        var $ = 1;
        if (U === c && (U = 6), E < 0 ? ($ = 0, E = -E) : 15 < E && ($ = 2, E -= 16), b < 1 || T < b || L !== w || E < 8 || 15 < E || U < 0 || 9 < U || C < 0 || g < C) return rt(n, _);
        E === 8 && (E = 9);
        var G = new vt();
        return (n.state = G).strm = n, G.wrap = $, G.gzhead = null, G.w_bits = E, G.w_size = 1 << G.w_bits, G.w_mask = G.w_size - 1, G.hash_bits = b + 7, G.hash_size = 1 << G.hash_bits, G.hash_mask = G.hash_size - 1, G.hash_shift = ~~((G.hash_bits + M - 1) / M), G.window = new s.Buf8(2 * G.w_size), G.head = new s.Buf16(G.hash_size), G.prev = new s.Buf16(G.w_size), G.lit_bufsize = 1 << b + 6, G.pending_buf_size = 4 * G.lit_bufsize, G.pending_buf = new s.Buf8(G.pending_buf_size), G.d_buf = 1 * G.lit_bufsize, G.l_buf = 3 * G.lit_bufsize, G.level = U, G.strategy = C, G.method = L, Et(n);
      }
      i = [new ut(0, 0, 0, 0, function(n, U) {
        var L = 65535;
        for (L > n.pending_buf_size - 5 && (L = n.pending_buf_size - 5); ; ) {
          if (n.lookahead <= 1) {
            if (lt(n), n.lookahead === 0 && U === v) return r;
            if (n.lookahead === 0) break;
          }
          n.strstart += n.lookahead, n.lookahead = 0;
          var E = n.block_start + L;
          if ((n.strstart === 0 || n.strstart >= E) && (n.lookahead = n.strstart - E, n.strstart = E, x(n, !1), n.strm.avail_out === 0) || n.strstart - n.block_start >= n.w_size - q && (x(n, !1), n.strm.avail_out === 0)) return r;
        }
        return n.insert = 0, U === p ? (x(n, !0), n.strm.avail_out === 0 ? V : j) : (n.strstart > n.block_start && (x(n, !1), n.strm.avail_out), r);
      }), new ut(4, 4, 8, 4, ft), new ut(4, 5, 16, 8, ft), new ut(4, 6, 32, 32, ft), new ut(4, 4, 16, 16, st), new ut(8, 16, 32, 32, st), new ut(8, 16, 128, 128, st), new ut(8, 32, 128, 256, st), new ut(32, 128, 258, 1024, st), new ut(32, 258, 258, 4096, st)], a.deflateInit = function(n, U) {
        return St(n, U, w, 15, 8, 0);
      }, a.deflateInit2 = St, a.deflateReset = Et, a.deflateResetKeep = bt, a.deflateSetHeader = function(n, U) {
        return n && n.state ? n.state.wrap !== 2 ? _ : (n.state.gzhead = U, u) : _;
      }, a.deflate = function(n, U) {
        var L, E, b, C;
        if (!n || !n.state || 5 < U || U < 0) return n ? rt(n, _) : _;
        if (E = n.state, !n.output || !n.input && n.avail_in !== 0 || E.status === 666 && U !== p) return rt(n, n.avail_out === 0 ? -5 : _);
        if (E.strm = n, L = E.last_flush, E.last_flush = U, E.status === k) if (E.wrap === 2) n.adler = 0, J(E, 31), J(E, 139), J(E, 8), E.gzhead ? (J(E, (E.gzhead.text ? 1 : 0) + (E.gzhead.hcrc ? 2 : 0) + (E.gzhead.extra ? 4 : 0) + (E.gzhead.name ? 8 : 0) + (E.gzhead.comment ? 16 : 0)), J(E, 255 & E.gzhead.time), J(E, E.gzhead.time >> 8 & 255), J(E, E.gzhead.time >> 16 & 255), J(E, E.gzhead.time >> 24 & 255), J(E, E.level === 9 ? 2 : 2 <= E.strategy || E.level < 2 ? 4 : 0), J(E, 255 & E.gzhead.os), E.gzhead.extra && E.gzhead.extra.length && (J(E, 255 & E.gzhead.extra.length), J(E, E.gzhead.extra.length >> 8 & 255)), E.gzhead.hcrc && (n.adler = y(n.adler, E.pending_buf, E.pending, 0)), E.gzindex = 0, E.status = 69) : (J(E, 0), J(E, 0), J(E, 0), J(E, 0), J(E, 0), J(E, E.level === 9 ? 2 : 2 <= E.strategy || E.level < 2 ? 4 : 0), J(E, 3), E.status = F);
        else {
          var $ = w + (E.w_bits - 8 << 4) << 8;
          $ |= (2 <= E.strategy || E.level < 2 ? 0 : E.level < 6 ? 1 : E.level === 6 ? 2 : 3) << 6, E.strstart !== 0 && ($ |= 32), $ += 31 - $ % 31, E.status = F, B(E, $), E.strstart !== 0 && (B(E, n.adler >>> 16), B(E, 65535 & n.adler)), n.adler = 1;
        }
        if (E.status === 69) if (E.gzhead.extra) {
          for (b = E.pending; E.gzindex < (65535 & E.gzhead.extra.length) && (E.pending !== E.pending_buf_size || (E.gzhead.hcrc && E.pending > b && (n.adler = y(n.adler, E.pending_buf, E.pending - b, b)), I(n), b = E.pending, E.pending !== E.pending_buf_size)); ) J(E, 255 & E.gzhead.extra[E.gzindex]), E.gzindex++;
          E.gzhead.hcrc && E.pending > b && (n.adler = y(n.adler, E.pending_buf, E.pending - b, b)), E.gzindex === E.gzhead.extra.length && (E.gzindex = 0, E.status = 73);
        } else E.status = 73;
        if (E.status === 73) if (E.gzhead.name) {
          b = E.pending;
          do {
            if (E.pending === E.pending_buf_size && (E.gzhead.hcrc && E.pending > b && (n.adler = y(n.adler, E.pending_buf, E.pending - b, b)), I(n), b = E.pending, E.pending === E.pending_buf_size)) {
              C = 1;
              break;
            }
            C = E.gzindex < E.gzhead.name.length ? 255 & E.gzhead.name.charCodeAt(E.gzindex++) : 0, J(E, C);
          } while (C !== 0);
          E.gzhead.hcrc && E.pending > b && (n.adler = y(n.adler, E.pending_buf, E.pending - b, b)), C === 0 && (E.gzindex = 0, E.status = 91);
        } else E.status = 91;
        if (E.status === 91) if (E.gzhead.comment) {
          b = E.pending;
          do {
            if (E.pending === E.pending_buf_size && (E.gzhead.hcrc && E.pending > b && (n.adler = y(n.adler, E.pending_buf, E.pending - b, b)), I(n), b = E.pending, E.pending === E.pending_buf_size)) {
              C = 1;
              break;
            }
            C = E.gzindex < E.gzhead.comment.length ? 255 & E.gzhead.comment.charCodeAt(E.gzindex++) : 0, J(E, C);
          } while (C !== 0);
          E.gzhead.hcrc && E.pending > b && (n.adler = y(n.adler, E.pending_buf, E.pending - b, b)), C === 0 && (E.status = 103);
        } else E.status = 103;
        if (E.status === 103 && (E.gzhead.hcrc ? (E.pending + 2 > E.pending_buf_size && I(n), E.pending + 2 <= E.pending_buf_size && (J(E, 255 & n.adler), J(E, n.adler >> 8 & 255), n.adler = 0, E.status = F)) : E.status = F), E.pending !== 0) {
          if (I(n), n.avail_out === 0) return E.last_flush = -1, u;
        } else if (n.avail_in === 0 && W(U) <= W(L) && U !== p) return rt(n, -5);
        if (E.status === 666 && n.avail_in !== 0) return rt(n, -5);
        if (n.avail_in !== 0 || E.lookahead !== 0 || U !== v && E.status !== 666) {
          var G = E.strategy === 2 ? function(R, Q) {
            for (var nt; ; ) {
              if (R.lookahead === 0 && (lt(R), R.lookahead === 0)) {
                if (Q === v) return r;
                break;
              }
              if (R.match_length = 0, nt = l._tr_tally(R, 0, R.window[R.strstart]), R.lookahead--, R.strstart++, nt && (x(R, !1), R.strm.avail_out === 0)) return r;
            }
            return R.insert = 0, Q === p ? (x(R, !0), R.strm.avail_out === 0 ? V : j) : R.last_lit && (x(R, !1), R.strm.avail_out === 0) ? r : O;
          }(E, U) : E.strategy === 3 ? function(R, Q) {
            for (var nt, tt, at, ht, ct = R.window; ; ) {
              if (R.lookahead <= Y) {
                if (lt(R), R.lookahead <= Y && Q === v) return r;
                if (R.lookahead === 0) break;
              }
              if (R.match_length = 0, R.lookahead >= M && 0 < R.strstart && (tt = ct[at = R.strstart - 1]) === ct[++at] && tt === ct[++at] && tt === ct[++at]) {
                ht = R.strstart + Y;
                do
                  ;
                while (tt === ct[++at] && tt === ct[++at] && tt === ct[++at] && tt === ct[++at] && tt === ct[++at] && tt === ct[++at] && tt === ct[++at] && tt === ct[++at] && at < ht);
                R.match_length = Y - (ht - at), R.match_length > R.lookahead && (R.match_length = R.lookahead);
              }
              if (R.match_length >= M ? (nt = l._tr_tally(R, 1, R.match_length - M), R.lookahead -= R.match_length, R.strstart += R.match_length, R.match_length = 0) : (nt = l._tr_tally(R, 0, R.window[R.strstart]), R.lookahead--, R.strstart++), nt && (x(R, !1), R.strm.avail_out === 0)) return r;
            }
            return R.insert = 0, Q === p ? (x(R, !0), R.strm.avail_out === 0 ? V : j) : R.last_lit && (x(R, !1), R.strm.avail_out === 0) ? r : O;
          }(E, U) : i[E.level].func(E, U);
          if (G !== V && G !== j || (E.status = 666), G === r || G === V) return n.avail_out === 0 && (E.last_flush = -1), u;
          if (G === O && (U === 1 ? l._tr_align(E) : U !== 5 && (l._tr_stored_block(E, 0, 0, !1), U === 3 && (it(E.head), E.lookahead === 0 && (E.strstart = 0, E.block_start = 0, E.insert = 0))), I(n), n.avail_out === 0)) return E.last_flush = -1, u;
        }
        return U !== p ? u : E.wrap <= 0 ? 1 : (E.wrap === 2 ? (J(E, 255 & n.adler), J(E, n.adler >> 8 & 255), J(E, n.adler >> 16 & 255), J(E, n.adler >> 24 & 255), J(E, 255 & n.total_in), J(E, n.total_in >> 8 & 255), J(E, n.total_in >> 16 & 255), J(E, n.total_in >> 24 & 255)) : (B(E, n.adler >>> 16), B(E, 65535 & n.adler)), I(n), 0 < E.wrap && (E.wrap = -E.wrap), E.pending !== 0 ? u : 1);
      }, a.deflateEnd = function(n) {
        var U;
        return n && n.state ? (U = n.state.status) !== k && U !== 69 && U !== 73 && U !== 91 && U !== 103 && U !== F && U !== 666 ? rt(n, _) : (n.state = null, U === F ? rt(n, -3) : u) : _;
      }, a.deflateSetDictionary = function(n, U) {
        var L, E, b, C, $, G, R, Q, nt = U.length;
        if (!n || !n.state || (C = (L = n.state).wrap) === 2 || C === 1 && L.status !== k || L.lookahead) return _;
        for (C === 1 && (n.adler = f(n.adler, U, nt, 0)), L.wrap = 0, nt >= L.w_size && (C === 0 && (it(L.head), L.strstart = 0, L.block_start = 0, L.insert = 0), Q = new s.Buf8(L.w_size), s.arraySet(Q, U, nt - L.w_size, L.w_size, 0), U = Q, nt = L.w_size), $ = n.avail_in, G = n.next_in, R = n.input, n.avail_in = nt, n.next_in = 0, n.input = U, lt(L); L.lookahead >= M; ) {
          for (E = L.strstart, b = L.lookahead - (M - 1); L.ins_h = (L.ins_h << L.hash_shift ^ L.window[E + M - 1]) & L.hash_mask, L.prev[E & L.w_mask] = L.head[L.ins_h], L.head[L.ins_h] = E, E++, --b; ) ;
          L.strstart = E, L.lookahead = M - 1, lt(L);
        }
        return L.strstart += L.lookahead, L.block_start = L.strstart, L.insert = L.lookahead, L.lookahead = 0, L.match_length = L.prev_length = M - 1, L.match_available = 0, n.next_in = G, n.input = R, n.avail_in = $, L.wrap = C, u;
      }, a.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, h, a) {
      h.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(e, h, a) {
      h.exports = function(i, s) {
        var l, f, y, S, v, p, u, _, c, g, d, w, T, P, A, D, N, H, M, Y, q, k, F, r, O;
        l = i.state, f = i.next_in, r = i.input, y = f + (i.avail_in - 5), S = i.next_out, O = i.output, v = S - (s - i.avail_out), p = S + (i.avail_out - 257), u = l.dmax, _ = l.wsize, c = l.whave, g = l.wnext, d = l.window, w = l.hold, T = l.bits, P = l.lencode, A = l.distcode, D = (1 << l.lenbits) - 1, N = (1 << l.distbits) - 1;
        t: do {
          T < 15 && (w += r[f++] << T, T += 8, w += r[f++] << T, T += 8), H = P[w & D];
          e: for (; ; ) {
            if (w >>>= M = H >>> 24, T -= M, (M = H >>> 16 & 255) === 0) O[S++] = 65535 & H;
            else {
              if (!(16 & M)) {
                if (!(64 & M)) {
                  H = P[(65535 & H) + (w & (1 << M) - 1)];
                  continue e;
                }
                if (32 & M) {
                  l.mode = 12;
                  break t;
                }
                i.msg = "invalid literal/length code", l.mode = 30;
                break t;
              }
              Y = 65535 & H, (M &= 15) && (T < M && (w += r[f++] << T, T += 8), Y += w & (1 << M) - 1, w >>>= M, T -= M), T < 15 && (w += r[f++] << T, T += 8, w += r[f++] << T, T += 8), H = A[w & N];
              n: for (; ; ) {
                if (w >>>= M = H >>> 24, T -= M, !(16 & (M = H >>> 16 & 255))) {
                  if (!(64 & M)) {
                    H = A[(65535 & H) + (w & (1 << M) - 1)];
                    continue n;
                  }
                  i.msg = "invalid distance code", l.mode = 30;
                  break t;
                }
                if (q = 65535 & H, T < (M &= 15) && (w += r[f++] << T, (T += 8) < M && (w += r[f++] << T, T += 8)), u < (q += w & (1 << M) - 1)) {
                  i.msg = "invalid distance too far back", l.mode = 30;
                  break t;
                }
                if (w >>>= M, T -= M, (M = S - v) < q) {
                  if (c < (M = q - M) && l.sane) {
                    i.msg = "invalid distance too far back", l.mode = 30;
                    break t;
                  }
                  if (F = d, (k = 0) === g) {
                    if (k += _ - M, M < Y) {
                      for (Y -= M; O[S++] = d[k++], --M; ) ;
                      k = S - q, F = O;
                    }
                  } else if (g < M) {
                    if (k += _ + g - M, (M -= g) < Y) {
                      for (Y -= M; O[S++] = d[k++], --M; ) ;
                      if (k = 0, g < Y) {
                        for (Y -= M = g; O[S++] = d[k++], --M; ) ;
                        k = S - q, F = O;
                      }
                    }
                  } else if (k += g - M, M < Y) {
                    for (Y -= M; O[S++] = d[k++], --M; ) ;
                    k = S - q, F = O;
                  }
                  for (; 2 < Y; ) O[S++] = F[k++], O[S++] = F[k++], O[S++] = F[k++], Y -= 3;
                  Y && (O[S++] = F[k++], 1 < Y && (O[S++] = F[k++]));
                } else {
                  for (k = S - q; O[S++] = O[k++], O[S++] = O[k++], O[S++] = O[k++], 2 < (Y -= 3); ) ;
                  Y && (O[S++] = O[k++], 1 < Y && (O[S++] = O[k++]));
                }
                break;
              }
            }
            break;
          }
        } while (f < y && S < p);
        f -= Y = T >> 3, w &= (1 << (T -= Y << 3)) - 1, i.next_in = f, i.next_out = S, i.avail_in = f < y ? y - f + 5 : 5 - (f - y), i.avail_out = S < p ? p - S + 257 : 257 - (S - p), l.hold = w, l.bits = T;
      };
    }, {}], 49: [function(e, h, a) {
      var i = e("../utils/common"), s = e("./adler32"), l = e("./crc32"), f = e("./inffast"), y = e("./inftrees"), S = 1, v = 2, p = 0, u = -2, _ = 1, c = 852, g = 592;
      function d(k) {
        return (k >>> 24 & 255) + (k >>> 8 & 65280) + ((65280 & k) << 8) + ((255 & k) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new i.Buf16(320), this.work = new i.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function T(k) {
        var F;
        return k && k.state ? (F = k.state, k.total_in = k.total_out = F.total = 0, k.msg = "", F.wrap && (k.adler = 1 & F.wrap), F.mode = _, F.last = 0, F.havedict = 0, F.dmax = 32768, F.head = null, F.hold = 0, F.bits = 0, F.lencode = F.lendyn = new i.Buf32(c), F.distcode = F.distdyn = new i.Buf32(g), F.sane = 1, F.back = -1, p) : u;
      }
      function P(k) {
        var F;
        return k && k.state ? ((F = k.state).wsize = 0, F.whave = 0, F.wnext = 0, T(k)) : u;
      }
      function A(k, F) {
        var r, O;
        return k && k.state ? (O = k.state, F < 0 ? (r = 0, F = -F) : (r = 1 + (F >> 4), F < 48 && (F &= 15)), F && (F < 8 || 15 < F) ? u : (O.window !== null && O.wbits !== F && (O.window = null), O.wrap = r, O.wbits = F, P(k))) : u;
      }
      function D(k, F) {
        var r, O;
        return k ? (O = new w(), (k.state = O).window = null, (r = A(k, F)) !== p && (k.state = null), r) : u;
      }
      var N, H, M = !0;
      function Y(k) {
        if (M) {
          var F;
          for (N = new i.Buf32(512), H = new i.Buf32(32), F = 0; F < 144; ) k.lens[F++] = 8;
          for (; F < 256; ) k.lens[F++] = 9;
          for (; F < 280; ) k.lens[F++] = 7;
          for (; F < 288; ) k.lens[F++] = 8;
          for (y(S, k.lens, 0, 288, N, 0, k.work, { bits: 9 }), F = 0; F < 32; ) k.lens[F++] = 5;
          y(v, k.lens, 0, 32, H, 0, k.work, { bits: 5 }), M = !1;
        }
        k.lencode = N, k.lenbits = 9, k.distcode = H, k.distbits = 5;
      }
      function q(k, F, r, O) {
        var V, j = k.state;
        return j.window === null && (j.wsize = 1 << j.wbits, j.wnext = 0, j.whave = 0, j.window = new i.Buf8(j.wsize)), O >= j.wsize ? (i.arraySet(j.window, F, r - j.wsize, j.wsize, 0), j.wnext = 0, j.whave = j.wsize) : (O < (V = j.wsize - j.wnext) && (V = O), i.arraySet(j.window, F, r - O, V, j.wnext), (O -= V) ? (i.arraySet(j.window, F, r - O, O, 0), j.wnext = O, j.whave = j.wsize) : (j.wnext += V, j.wnext === j.wsize && (j.wnext = 0), j.whave < j.wsize && (j.whave += V))), 0;
      }
      a.inflateReset = P, a.inflateReset2 = A, a.inflateResetKeep = T, a.inflateInit = function(k) {
        return D(k, 15);
      }, a.inflateInit2 = D, a.inflate = function(k, F) {
        var r, O, V, j, rt, W, it, I, x, J, B, Z, lt, ft, st, ut, vt, bt, Et, St, n, U, L, E, b = 0, C = new i.Buf8(4), $ = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!k || !k.state || !k.output || !k.input && k.avail_in !== 0) return u;
        (r = k.state).mode === 12 && (r.mode = 13), rt = k.next_out, V = k.output, it = k.avail_out, j = k.next_in, O = k.input, W = k.avail_in, I = r.hold, x = r.bits, J = W, B = it, U = p;
        t: for (; ; ) switch (r.mode) {
          case _:
            if (r.wrap === 0) {
              r.mode = 13;
              break;
            }
            for (; x < 16; ) {
              if (W === 0) break t;
              W--, I += O[j++] << x, x += 8;
            }
            if (2 & r.wrap && I === 35615) {
              C[r.check = 0] = 255 & I, C[1] = I >>> 8 & 255, r.check = l(r.check, C, 2, 0), x = I = 0, r.mode = 2;
              break;
            }
            if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & I) << 8) + (I >> 8)) % 31) {
              k.msg = "incorrect header check", r.mode = 30;
              break;
            }
            if ((15 & I) != 8) {
              k.msg = "unknown compression method", r.mode = 30;
              break;
            }
            if (x -= 4, n = 8 + (15 & (I >>>= 4)), r.wbits === 0) r.wbits = n;
            else if (n > r.wbits) {
              k.msg = "invalid window size", r.mode = 30;
              break;
            }
            r.dmax = 1 << n, k.adler = r.check = 1, r.mode = 512 & I ? 10 : 12, x = I = 0;
            break;
          case 2:
            for (; x < 16; ) {
              if (W === 0) break t;
              W--, I += O[j++] << x, x += 8;
            }
            if (r.flags = I, (255 & r.flags) != 8) {
              k.msg = "unknown compression method", r.mode = 30;
              break;
            }
            if (57344 & r.flags) {
              k.msg = "unknown header flags set", r.mode = 30;
              break;
            }
            r.head && (r.head.text = I >> 8 & 1), 512 & r.flags && (C[0] = 255 & I, C[1] = I >>> 8 & 255, r.check = l(r.check, C, 2, 0)), x = I = 0, r.mode = 3;
          case 3:
            for (; x < 32; ) {
              if (W === 0) break t;
              W--, I += O[j++] << x, x += 8;
            }
            r.head && (r.head.time = I), 512 & r.flags && (C[0] = 255 & I, C[1] = I >>> 8 & 255, C[2] = I >>> 16 & 255, C[3] = I >>> 24 & 255, r.check = l(r.check, C, 4, 0)), x = I = 0, r.mode = 4;
          case 4:
            for (; x < 16; ) {
              if (W === 0) break t;
              W--, I += O[j++] << x, x += 8;
            }
            r.head && (r.head.xflags = 255 & I, r.head.os = I >> 8), 512 & r.flags && (C[0] = 255 & I, C[1] = I >>> 8 & 255, r.check = l(r.check, C, 2, 0)), x = I = 0, r.mode = 5;
          case 5:
            if (1024 & r.flags) {
              for (; x < 16; ) {
                if (W === 0) break t;
                W--, I += O[j++] << x, x += 8;
              }
              r.length = I, r.head && (r.head.extra_len = I), 512 & r.flags && (C[0] = 255 & I, C[1] = I >>> 8 & 255, r.check = l(r.check, C, 2, 0)), x = I = 0;
            } else r.head && (r.head.extra = null);
            r.mode = 6;
          case 6:
            if (1024 & r.flags && (W < (Z = r.length) && (Z = W), Z && (r.head && (n = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), i.arraySet(r.head.extra, O, j, Z, n)), 512 & r.flags && (r.check = l(r.check, O, Z, j)), W -= Z, j += Z, r.length -= Z), r.length)) break t;
            r.length = 0, r.mode = 7;
          case 7:
            if (2048 & r.flags) {
              if (W === 0) break t;
              for (Z = 0; n = O[j + Z++], r.head && n && r.length < 65536 && (r.head.name += String.fromCharCode(n)), n && Z < W; ) ;
              if (512 & r.flags && (r.check = l(r.check, O, Z, j)), W -= Z, j += Z, n) break t;
            } else r.head && (r.head.name = null);
            r.length = 0, r.mode = 8;
          case 8:
            if (4096 & r.flags) {
              if (W === 0) break t;
              for (Z = 0; n = O[j + Z++], r.head && n && r.length < 65536 && (r.head.comment += String.fromCharCode(n)), n && Z < W; ) ;
              if (512 & r.flags && (r.check = l(r.check, O, Z, j)), W -= Z, j += Z, n) break t;
            } else r.head && (r.head.comment = null);
            r.mode = 9;
          case 9:
            if (512 & r.flags) {
              for (; x < 16; ) {
                if (W === 0) break t;
                W--, I += O[j++] << x, x += 8;
              }
              if (I !== (65535 & r.check)) {
                k.msg = "header crc mismatch", r.mode = 30;
                break;
              }
              x = I = 0;
            }
            r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), k.adler = r.check = 0, r.mode = 12;
            break;
          case 10:
            for (; x < 32; ) {
              if (W === 0) break t;
              W--, I += O[j++] << x, x += 8;
            }
            k.adler = r.check = d(I), x = I = 0, r.mode = 11;
          case 11:
            if (r.havedict === 0) return k.next_out = rt, k.avail_out = it, k.next_in = j, k.avail_in = W, r.hold = I, r.bits = x, 2;
            k.adler = r.check = 1, r.mode = 12;
          case 12:
            if (F === 5 || F === 6) break t;
          case 13:
            if (r.last) {
              I >>>= 7 & x, x -= 7 & x, r.mode = 27;
              break;
            }
            for (; x < 3; ) {
              if (W === 0) break t;
              W--, I += O[j++] << x, x += 8;
            }
            switch (r.last = 1 & I, x -= 1, 3 & (I >>>= 1)) {
              case 0:
                r.mode = 14;
                break;
              case 1:
                if (Y(r), r.mode = 20, F !== 6) break;
                I >>>= 2, x -= 2;
                break t;
              case 2:
                r.mode = 17;
                break;
              case 3:
                k.msg = "invalid block type", r.mode = 30;
            }
            I >>>= 2, x -= 2;
            break;
          case 14:
            for (I >>>= 7 & x, x -= 7 & x; x < 32; ) {
              if (W === 0) break t;
              W--, I += O[j++] << x, x += 8;
            }
            if ((65535 & I) != (I >>> 16 ^ 65535)) {
              k.msg = "invalid stored block lengths", r.mode = 30;
              break;
            }
            if (r.length = 65535 & I, x = I = 0, r.mode = 15, F === 6) break t;
          case 15:
            r.mode = 16;
          case 16:
            if (Z = r.length) {
              if (W < Z && (Z = W), it < Z && (Z = it), Z === 0) break t;
              i.arraySet(V, O, j, Z, rt), W -= Z, j += Z, it -= Z, rt += Z, r.length -= Z;
              break;
            }
            r.mode = 12;
            break;
          case 17:
            for (; x < 14; ) {
              if (W === 0) break t;
              W--, I += O[j++] << x, x += 8;
            }
            if (r.nlen = 257 + (31 & I), I >>>= 5, x -= 5, r.ndist = 1 + (31 & I), I >>>= 5, x -= 5, r.ncode = 4 + (15 & I), I >>>= 4, x -= 4, 286 < r.nlen || 30 < r.ndist) {
              k.msg = "too many length or distance symbols", r.mode = 30;
              break;
            }
            r.have = 0, r.mode = 18;
          case 18:
            for (; r.have < r.ncode; ) {
              for (; x < 3; ) {
                if (W === 0) break t;
                W--, I += O[j++] << x, x += 8;
              }
              r.lens[$[r.have++]] = 7 & I, I >>>= 3, x -= 3;
            }
            for (; r.have < 19; ) r.lens[$[r.have++]] = 0;
            if (r.lencode = r.lendyn, r.lenbits = 7, L = { bits: r.lenbits }, U = y(0, r.lens, 0, 19, r.lencode, 0, r.work, L), r.lenbits = L.bits, U) {
              k.msg = "invalid code lengths set", r.mode = 30;
              break;
            }
            r.have = 0, r.mode = 19;
          case 19:
            for (; r.have < r.nlen + r.ndist; ) {
              for (; ut = (b = r.lencode[I & (1 << r.lenbits) - 1]) >>> 16 & 255, vt = 65535 & b, !((st = b >>> 24) <= x); ) {
                if (W === 0) break t;
                W--, I += O[j++] << x, x += 8;
              }
              if (vt < 16) I >>>= st, x -= st, r.lens[r.have++] = vt;
              else {
                if (vt === 16) {
                  for (E = st + 2; x < E; ) {
                    if (W === 0) break t;
                    W--, I += O[j++] << x, x += 8;
                  }
                  if (I >>>= st, x -= st, r.have === 0) {
                    k.msg = "invalid bit length repeat", r.mode = 30;
                    break;
                  }
                  n = r.lens[r.have - 1], Z = 3 + (3 & I), I >>>= 2, x -= 2;
                } else if (vt === 17) {
                  for (E = st + 3; x < E; ) {
                    if (W === 0) break t;
                    W--, I += O[j++] << x, x += 8;
                  }
                  x -= st, n = 0, Z = 3 + (7 & (I >>>= st)), I >>>= 3, x -= 3;
                } else {
                  for (E = st + 7; x < E; ) {
                    if (W === 0) break t;
                    W--, I += O[j++] << x, x += 8;
                  }
                  x -= st, n = 0, Z = 11 + (127 & (I >>>= st)), I >>>= 7, x -= 7;
                }
                if (r.have + Z > r.nlen + r.ndist) {
                  k.msg = "invalid bit length repeat", r.mode = 30;
                  break;
                }
                for (; Z--; ) r.lens[r.have++] = n;
              }
            }
            if (r.mode === 30) break;
            if (r.lens[256] === 0) {
              k.msg = "invalid code -- missing end-of-block", r.mode = 30;
              break;
            }
            if (r.lenbits = 9, L = { bits: r.lenbits }, U = y(S, r.lens, 0, r.nlen, r.lencode, 0, r.work, L), r.lenbits = L.bits, U) {
              k.msg = "invalid literal/lengths set", r.mode = 30;
              break;
            }
            if (r.distbits = 6, r.distcode = r.distdyn, L = { bits: r.distbits }, U = y(v, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, L), r.distbits = L.bits, U) {
              k.msg = "invalid distances set", r.mode = 30;
              break;
            }
            if (r.mode = 20, F === 6) break t;
          case 20:
            r.mode = 21;
          case 21:
            if (6 <= W && 258 <= it) {
              k.next_out = rt, k.avail_out = it, k.next_in = j, k.avail_in = W, r.hold = I, r.bits = x, f(k, B), rt = k.next_out, V = k.output, it = k.avail_out, j = k.next_in, O = k.input, W = k.avail_in, I = r.hold, x = r.bits, r.mode === 12 && (r.back = -1);
              break;
            }
            for (r.back = 0; ut = (b = r.lencode[I & (1 << r.lenbits) - 1]) >>> 16 & 255, vt = 65535 & b, !((st = b >>> 24) <= x); ) {
              if (W === 0) break t;
              W--, I += O[j++] << x, x += 8;
            }
            if (ut && !(240 & ut)) {
              for (bt = st, Et = ut, St = vt; ut = (b = r.lencode[St + ((I & (1 << bt + Et) - 1) >> bt)]) >>> 16 & 255, vt = 65535 & b, !(bt + (st = b >>> 24) <= x); ) {
                if (W === 0) break t;
                W--, I += O[j++] << x, x += 8;
              }
              I >>>= bt, x -= bt, r.back += bt;
            }
            if (I >>>= st, x -= st, r.back += st, r.length = vt, ut === 0) {
              r.mode = 26;
              break;
            }
            if (32 & ut) {
              r.back = -1, r.mode = 12;
              break;
            }
            if (64 & ut) {
              k.msg = "invalid literal/length code", r.mode = 30;
              break;
            }
            r.extra = 15 & ut, r.mode = 22;
          case 22:
            if (r.extra) {
              for (E = r.extra; x < E; ) {
                if (W === 0) break t;
                W--, I += O[j++] << x, x += 8;
              }
              r.length += I & (1 << r.extra) - 1, I >>>= r.extra, x -= r.extra, r.back += r.extra;
            }
            r.was = r.length, r.mode = 23;
          case 23:
            for (; ut = (b = r.distcode[I & (1 << r.distbits) - 1]) >>> 16 & 255, vt = 65535 & b, !((st = b >>> 24) <= x); ) {
              if (W === 0) break t;
              W--, I += O[j++] << x, x += 8;
            }
            if (!(240 & ut)) {
              for (bt = st, Et = ut, St = vt; ut = (b = r.distcode[St + ((I & (1 << bt + Et) - 1) >> bt)]) >>> 16 & 255, vt = 65535 & b, !(bt + (st = b >>> 24) <= x); ) {
                if (W === 0) break t;
                W--, I += O[j++] << x, x += 8;
              }
              I >>>= bt, x -= bt, r.back += bt;
            }
            if (I >>>= st, x -= st, r.back += st, 64 & ut) {
              k.msg = "invalid distance code", r.mode = 30;
              break;
            }
            r.offset = vt, r.extra = 15 & ut, r.mode = 24;
          case 24:
            if (r.extra) {
              for (E = r.extra; x < E; ) {
                if (W === 0) break t;
                W--, I += O[j++] << x, x += 8;
              }
              r.offset += I & (1 << r.extra) - 1, I >>>= r.extra, x -= r.extra, r.back += r.extra;
            }
            if (r.offset > r.dmax) {
              k.msg = "invalid distance too far back", r.mode = 30;
              break;
            }
            r.mode = 25;
          case 25:
            if (it === 0) break t;
            if (Z = B - it, r.offset > Z) {
              if ((Z = r.offset - Z) > r.whave && r.sane) {
                k.msg = "invalid distance too far back", r.mode = 30;
                break;
              }
              lt = Z > r.wnext ? (Z -= r.wnext, r.wsize - Z) : r.wnext - Z, Z > r.length && (Z = r.length), ft = r.window;
            } else ft = V, lt = rt - r.offset, Z = r.length;
            for (it < Z && (Z = it), it -= Z, r.length -= Z; V[rt++] = ft[lt++], --Z; ) ;
            r.length === 0 && (r.mode = 21);
            break;
          case 26:
            if (it === 0) break t;
            V[rt++] = r.length, it--, r.mode = 21;
            break;
          case 27:
            if (r.wrap) {
              for (; x < 32; ) {
                if (W === 0) break t;
                W--, I |= O[j++] << x, x += 8;
              }
              if (B -= it, k.total_out += B, r.total += B, B && (k.adler = r.check = r.flags ? l(r.check, V, B, rt - B) : s(r.check, V, B, rt - B)), B = it, (r.flags ? I : d(I)) !== r.check) {
                k.msg = "incorrect data check", r.mode = 30;
                break;
              }
              x = I = 0;
            }
            r.mode = 28;
          case 28:
            if (r.wrap && r.flags) {
              for (; x < 32; ) {
                if (W === 0) break t;
                W--, I += O[j++] << x, x += 8;
              }
              if (I !== (4294967295 & r.total)) {
                k.msg = "incorrect length check", r.mode = 30;
                break;
              }
              x = I = 0;
            }
            r.mode = 29;
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
            return u;
        }
        return k.next_out = rt, k.avail_out = it, k.next_in = j, k.avail_in = W, r.hold = I, r.bits = x, (r.wsize || B !== k.avail_out && r.mode < 30 && (r.mode < 27 || F !== 4)) && q(k, k.output, k.next_out, B - k.avail_out) ? (r.mode = 31, -4) : (J -= k.avail_in, B -= k.avail_out, k.total_in += J, k.total_out += B, r.total += B, r.wrap && B && (k.adler = r.check = r.flags ? l(r.check, V, B, k.next_out - B) : s(r.check, V, B, k.next_out - B)), k.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === 12 ? 128 : 0) + (r.mode === 20 || r.mode === 15 ? 256 : 0), (J == 0 && B === 0 || F === 4) && U === p && (U = -5), U);
      }, a.inflateEnd = function(k) {
        if (!k || !k.state) return u;
        var F = k.state;
        return F.window && (F.window = null), k.state = null, p;
      }, a.inflateGetHeader = function(k, F) {
        var r;
        return k && k.state && 2 & (r = k.state).wrap ? ((r.head = F).done = !1, p) : u;
      }, a.inflateSetDictionary = function(k, F) {
        var r, O = F.length;
        return k && k.state ? (r = k.state).wrap !== 0 && r.mode !== 11 ? u : r.mode === 11 && s(1, F, O, 0) !== r.check ? -3 : q(k, F, O, O) ? (r.mode = 31, -4) : (r.havedict = 1, p) : u;
      }, a.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, h, a) {
      var i = e("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], l = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], f = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], y = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      h.exports = function(S, v, p, u, _, c, g, d) {
        var w, T, P, A, D, N, H, M, Y, q = d.bits, k = 0, F = 0, r = 0, O = 0, V = 0, j = 0, rt = 0, W = 0, it = 0, I = 0, x = null, J = 0, B = new i.Buf16(16), Z = new i.Buf16(16), lt = null, ft = 0;
        for (k = 0; k <= 15; k++) B[k] = 0;
        for (F = 0; F < u; F++) B[v[p + F]]++;
        for (V = q, O = 15; 1 <= O && B[O] === 0; O--) ;
        if (O < V && (V = O), O === 0) return _[c++] = 20971520, _[c++] = 20971520, d.bits = 1, 0;
        for (r = 1; r < O && B[r] === 0; r++) ;
        for (V < r && (V = r), k = W = 1; k <= 15; k++) if (W <<= 1, (W -= B[k]) < 0) return -1;
        if (0 < W && (S === 0 || O !== 1)) return -1;
        for (Z[1] = 0, k = 1; k < 15; k++) Z[k + 1] = Z[k] + B[k];
        for (F = 0; F < u; F++) v[p + F] !== 0 && (g[Z[v[p + F]]++] = F);
        if (N = S === 0 ? (x = lt = g, 19) : S === 1 ? (x = s, J -= 257, lt = l, ft -= 257, 256) : (x = f, lt = y, -1), k = r, D = c, rt = F = I = 0, P = -1, A = (it = 1 << (j = V)) - 1, S === 1 && 852 < it || S === 2 && 592 < it) return 1;
        for (; ; ) {
          for (H = k - rt, Y = g[F] < N ? (M = 0, g[F]) : g[F] > N ? (M = lt[ft + g[F]], x[J + g[F]]) : (M = 96, 0), w = 1 << k - rt, r = T = 1 << j; _[D + (I >> rt) + (T -= w)] = H << 24 | M << 16 | Y | 0, T !== 0; ) ;
          for (w = 1 << k - 1; I & w; ) w >>= 1;
          if (w !== 0 ? (I &= w - 1, I += w) : I = 0, F++, --B[k] == 0) {
            if (k === O) break;
            k = v[p + g[F]];
          }
          if (V < k && (I & A) !== P) {
            for (rt === 0 && (rt = V), D += r, W = 1 << (j = k - rt); j + rt < O && !((W -= B[j + rt]) <= 0); ) j++, W <<= 1;
            if (it += 1 << j, S === 1 && 852 < it || S === 2 && 592 < it) return 1;
            _[P = I & A] = V << 24 | j << 16 | D - c | 0;
          }
        }
        return I !== 0 && (_[D + I] = k - rt << 24 | 64 << 16 | 0), d.bits = V, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e, h, a) {
      h.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(e, h, a) {
      var i = e("../utils/common"), s = 0, l = 1;
      function f(b) {
        for (var C = b.length; 0 <= --C; ) b[C] = 0;
      }
      var y = 0, S = 29, v = 256, p = v + 1 + S, u = 30, _ = 19, c = 2 * p + 1, g = 15, d = 16, w = 7, T = 256, P = 16, A = 17, D = 18, N = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], H = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], M = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], Y = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], q = new Array(2 * (p + 2));
      f(q);
      var k = new Array(2 * u);
      f(k);
      var F = new Array(512);
      f(F);
      var r = new Array(256);
      f(r);
      var O = new Array(S);
      f(O);
      var V, j, rt, W = new Array(u);
      function it(b, C, $, G, R) {
        this.static_tree = b, this.extra_bits = C, this.extra_base = $, this.elems = G, this.max_length = R, this.has_stree = b && b.length;
      }
      function I(b, C) {
        this.dyn_tree = b, this.max_code = 0, this.stat_desc = C;
      }
      function x(b) {
        return b < 256 ? F[b] : F[256 + (b >>> 7)];
      }
      function J(b, C) {
        b.pending_buf[b.pending++] = 255 & C, b.pending_buf[b.pending++] = C >>> 8 & 255;
      }
      function B(b, C, $) {
        b.bi_valid > d - $ ? (b.bi_buf |= C << b.bi_valid & 65535, J(b, b.bi_buf), b.bi_buf = C >> d - b.bi_valid, b.bi_valid += $ - d) : (b.bi_buf |= C << b.bi_valid & 65535, b.bi_valid += $);
      }
      function Z(b, C, $) {
        B(b, $[2 * C], $[2 * C + 1]);
      }
      function lt(b, C) {
        for (var $ = 0; $ |= 1 & b, b >>>= 1, $ <<= 1, 0 < --C; ) ;
        return $ >>> 1;
      }
      function ft(b, C, $) {
        var G, R, Q = new Array(g + 1), nt = 0;
        for (G = 1; G <= g; G++) Q[G] = nt = nt + $[G - 1] << 1;
        for (R = 0; R <= C; R++) {
          var tt = b[2 * R + 1];
          tt !== 0 && (b[2 * R] = lt(Q[tt]++, tt));
        }
      }
      function st(b) {
        var C;
        for (C = 0; C < p; C++) b.dyn_ltree[2 * C] = 0;
        for (C = 0; C < u; C++) b.dyn_dtree[2 * C] = 0;
        for (C = 0; C < _; C++) b.bl_tree[2 * C] = 0;
        b.dyn_ltree[2 * T] = 1, b.opt_len = b.static_len = 0, b.last_lit = b.matches = 0;
      }
      function ut(b) {
        8 < b.bi_valid ? J(b, b.bi_buf) : 0 < b.bi_valid && (b.pending_buf[b.pending++] = b.bi_buf), b.bi_buf = 0, b.bi_valid = 0;
      }
      function vt(b, C, $, G) {
        var R = 2 * C, Q = 2 * $;
        return b[R] < b[Q] || b[R] === b[Q] && G[C] <= G[$];
      }
      function bt(b, C, $) {
        for (var G = b.heap[$], R = $ << 1; R <= b.heap_len && (R < b.heap_len && vt(C, b.heap[R + 1], b.heap[R], b.depth) && R++, !vt(C, G, b.heap[R], b.depth)); ) b.heap[$] = b.heap[R], $ = R, R <<= 1;
        b.heap[$] = G;
      }
      function Et(b, C, $) {
        var G, R, Q, nt, tt = 0;
        if (b.last_lit !== 0) for (; G = b.pending_buf[b.d_buf + 2 * tt] << 8 | b.pending_buf[b.d_buf + 2 * tt + 1], R = b.pending_buf[b.l_buf + tt], tt++, G === 0 ? Z(b, R, C) : (Z(b, (Q = r[R]) + v + 1, C), (nt = N[Q]) !== 0 && B(b, R -= O[Q], nt), Z(b, Q = x(--G), $), (nt = H[Q]) !== 0 && B(b, G -= W[Q], nt)), tt < b.last_lit; ) ;
        Z(b, T, C);
      }
      function St(b, C) {
        var $, G, R, Q = C.dyn_tree, nt = C.stat_desc.static_tree, tt = C.stat_desc.has_stree, at = C.stat_desc.elems, ht = -1;
        for (b.heap_len = 0, b.heap_max = c, $ = 0; $ < at; $++) Q[2 * $] !== 0 ? (b.heap[++b.heap_len] = ht = $, b.depth[$] = 0) : Q[2 * $ + 1] = 0;
        for (; b.heap_len < 2; ) Q[2 * (R = b.heap[++b.heap_len] = ht < 2 ? ++ht : 0)] = 1, b.depth[R] = 0, b.opt_len--, tt && (b.static_len -= nt[2 * R + 1]);
        for (C.max_code = ht, $ = b.heap_len >> 1; 1 <= $; $--) bt(b, Q, $);
        for (R = at; $ = b.heap[1], b.heap[1] = b.heap[b.heap_len--], bt(b, Q, 1), G = b.heap[1], b.heap[--b.heap_max] = $, b.heap[--b.heap_max] = G, Q[2 * R] = Q[2 * $] + Q[2 * G], b.depth[R] = (b.depth[$] >= b.depth[G] ? b.depth[$] : b.depth[G]) + 1, Q[2 * $ + 1] = Q[2 * G + 1] = R, b.heap[1] = R++, bt(b, Q, 1), 2 <= b.heap_len; ) ;
        b.heap[--b.heap_max] = b.heap[1], function(ct, At) {
          var Wt, Pt, Gt, gt, $t, qt, Ft = At.dyn_tree, fe = At.max_code, ye = At.stat_desc.static_tree, de = At.stat_desc.has_stree, he = At.stat_desc.extra_bits, Yt = At.stat_desc.extra_base, Dt = At.stat_desc.max_length, Jt = 0;
          for (gt = 0; gt <= g; gt++) ct.bl_count[gt] = 0;
          for (Ft[2 * ct.heap[ct.heap_max] + 1] = 0, Wt = ct.heap_max + 1; Wt < c; Wt++) Dt < (gt = Ft[2 * Ft[2 * (Pt = ct.heap[Wt]) + 1] + 1] + 1) && (gt = Dt, Jt++), Ft[2 * Pt + 1] = gt, fe < Pt || (ct.bl_count[gt]++, $t = 0, Yt <= Pt && ($t = he[Pt - Yt]), qt = Ft[2 * Pt], ct.opt_len += qt * (gt + $t), de && (ct.static_len += qt * (ye[2 * Pt + 1] + $t)));
          if (Jt !== 0) {
            do {
              for (gt = Dt - 1; ct.bl_count[gt] === 0; ) gt--;
              ct.bl_count[gt]--, ct.bl_count[gt + 1] += 2, ct.bl_count[Dt]--, Jt -= 2;
            } while (0 < Jt);
            for (gt = Dt; gt !== 0; gt--) for (Pt = ct.bl_count[gt]; Pt !== 0; ) fe < (Gt = ct.heap[--Wt]) || (Ft[2 * Gt + 1] !== gt && (ct.opt_len += (gt - Ft[2 * Gt + 1]) * Ft[2 * Gt], Ft[2 * Gt + 1] = gt), Pt--);
          }
        }(b, C), ft(Q, ht, b.bl_count);
      }
      function n(b, C, $) {
        var G, R, Q = -1, nt = C[1], tt = 0, at = 7, ht = 4;
        for (nt === 0 && (at = 138, ht = 3), C[2 * ($ + 1) + 1] = 65535, G = 0; G <= $; G++) R = nt, nt = C[2 * (G + 1) + 1], ++tt < at && R === nt || (tt < ht ? b.bl_tree[2 * R] += tt : R !== 0 ? (R !== Q && b.bl_tree[2 * R]++, b.bl_tree[2 * P]++) : tt <= 10 ? b.bl_tree[2 * A]++ : b.bl_tree[2 * D]++, Q = R, ht = (tt = 0) === nt ? (at = 138, 3) : R === nt ? (at = 6, 3) : (at = 7, 4));
      }
      function U(b, C, $) {
        var G, R, Q = -1, nt = C[1], tt = 0, at = 7, ht = 4;
        for (nt === 0 && (at = 138, ht = 3), G = 0; G <= $; G++) if (R = nt, nt = C[2 * (G + 1) + 1], !(++tt < at && R === nt)) {
          if (tt < ht) for (; Z(b, R, b.bl_tree), --tt != 0; ) ;
          else R !== 0 ? (R !== Q && (Z(b, R, b.bl_tree), tt--), Z(b, P, b.bl_tree), B(b, tt - 3, 2)) : tt <= 10 ? (Z(b, A, b.bl_tree), B(b, tt - 3, 3)) : (Z(b, D, b.bl_tree), B(b, tt - 11, 7));
          Q = R, ht = (tt = 0) === nt ? (at = 138, 3) : R === nt ? (at = 6, 3) : (at = 7, 4);
        }
      }
      f(W);
      var L = !1;
      function E(b, C, $, G) {
        B(b, (y << 1) + (G ? 1 : 0), 3), function(R, Q, nt, tt) {
          ut(R), J(R, nt), J(R, ~nt), i.arraySet(R.pending_buf, R.window, Q, nt, R.pending), R.pending += nt;
        }(b, C, $);
      }
      a._tr_init = function(b) {
        L || (function() {
          var C, $, G, R, Q, nt = new Array(g + 1);
          for (R = G = 0; R < S - 1; R++) for (O[R] = G, C = 0; C < 1 << N[R]; C++) r[G++] = R;
          for (r[G - 1] = R, R = Q = 0; R < 16; R++) for (W[R] = Q, C = 0; C < 1 << H[R]; C++) F[Q++] = R;
          for (Q >>= 7; R < u; R++) for (W[R] = Q << 7, C = 0; C < 1 << H[R] - 7; C++) F[256 + Q++] = R;
          for ($ = 0; $ <= g; $++) nt[$] = 0;
          for (C = 0; C <= 143; ) q[2 * C + 1] = 8, C++, nt[8]++;
          for (; C <= 255; ) q[2 * C + 1] = 9, C++, nt[9]++;
          for (; C <= 279; ) q[2 * C + 1] = 7, C++, nt[7]++;
          for (; C <= 287; ) q[2 * C + 1] = 8, C++, nt[8]++;
          for (ft(q, p + 1, nt), C = 0; C < u; C++) k[2 * C + 1] = 5, k[2 * C] = lt(C, 5);
          V = new it(q, N, v + 1, p, g), j = new it(k, H, 0, u, g), rt = new it(new Array(0), M, 0, _, w);
        }(), L = !0), b.l_desc = new I(b.dyn_ltree, V), b.d_desc = new I(b.dyn_dtree, j), b.bl_desc = new I(b.bl_tree, rt), b.bi_buf = 0, b.bi_valid = 0, st(b);
      }, a._tr_stored_block = E, a._tr_flush_block = function(b, C, $, G) {
        var R, Q, nt = 0;
        0 < b.level ? (b.strm.data_type === 2 && (b.strm.data_type = function(tt) {
          var at, ht = 4093624447;
          for (at = 0; at <= 31; at++, ht >>>= 1) if (1 & ht && tt.dyn_ltree[2 * at] !== 0) return s;
          if (tt.dyn_ltree[18] !== 0 || tt.dyn_ltree[20] !== 0 || tt.dyn_ltree[26] !== 0) return l;
          for (at = 32; at < v; at++) if (tt.dyn_ltree[2 * at] !== 0) return l;
          return s;
        }(b)), St(b, b.l_desc), St(b, b.d_desc), nt = function(tt) {
          var at;
          for (n(tt, tt.dyn_ltree, tt.l_desc.max_code), n(tt, tt.dyn_dtree, tt.d_desc.max_code), St(tt, tt.bl_desc), at = _ - 1; 3 <= at && tt.bl_tree[2 * Y[at] + 1] === 0; at--) ;
          return tt.opt_len += 3 * (at + 1) + 5 + 5 + 4, at;
        }(b), R = b.opt_len + 3 + 7 >>> 3, (Q = b.static_len + 3 + 7 >>> 3) <= R && (R = Q)) : R = Q = $ + 5, $ + 4 <= R && C !== -1 ? E(b, C, $, G) : b.strategy === 4 || Q === R ? (B(b, 2 + (G ? 1 : 0), 3), Et(b, q, k)) : (B(b, 4 + (G ? 1 : 0), 3), function(tt, at, ht, ct) {
          var At;
          for (B(tt, at - 257, 5), B(tt, ht - 1, 5), B(tt, ct - 4, 4), At = 0; At < ct; At++) B(tt, tt.bl_tree[2 * Y[At] + 1], 3);
          U(tt, tt.dyn_ltree, at - 1), U(tt, tt.dyn_dtree, ht - 1);
        }(b, b.l_desc.max_code + 1, b.d_desc.max_code + 1, nt + 1), Et(b, b.dyn_ltree, b.dyn_dtree)), st(b), G && ut(b);
      }, a._tr_tally = function(b, C, $) {
        return b.pending_buf[b.d_buf + 2 * b.last_lit] = C >>> 8 & 255, b.pending_buf[b.d_buf + 2 * b.last_lit + 1] = 255 & C, b.pending_buf[b.l_buf + b.last_lit] = 255 & $, b.last_lit++, C === 0 ? b.dyn_ltree[2 * $]++ : (b.matches++, C--, b.dyn_ltree[2 * (r[$] + v + 1)]++, b.dyn_dtree[2 * x(C)]++), b.last_lit === b.lit_bufsize - 1;
      }, a._tr_align = function(b) {
        B(b, 2, 3), Z(b, T, q), function(C) {
          C.bi_valid === 16 ? (J(C, C.bi_buf), C.bi_buf = 0, C.bi_valid = 0) : 8 <= C.bi_valid && (C.pending_buf[C.pending++] = 255 & C.bi_buf, C.bi_buf >>= 8, C.bi_valid -= 8);
        }(b);
      };
    }, { "../utils/common": 41 }], 53: [function(e, h, a) {
      h.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(e, h, a) {
      (function(i) {
        (function(s, l) {
          if (!s.setImmediate) {
            var f, y, S, v, p = 1, u = {}, _ = !1, c = s.document, g = Object.getPrototypeOf && Object.getPrototypeOf(s);
            g = g && g.setTimeout ? g : s, f = {}.toString.call(s.process) === "[object process]" ? function(P) {
              setTimeout(function() {
                w(P);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var P = !0, A = s.onmessage;
                return s.onmessage = function() {
                  P = !1;
                }, s.postMessage("", "*"), s.onmessage = A, P;
              }
            }() ? (v = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", T, !1) : s.attachEvent("onmessage", T), function(P) {
              s.postMessage(v + P, "*");
            }) : s.MessageChannel ? ((S = new MessageChannel()).port1.onmessage = function(P) {
              w(P.data);
            }, function(P) {
              S.port2.postMessage(P);
            }) : c && "onreadystatechange" in c.createElement("script") ? (y = c.documentElement, function(P) {
              var A = c.createElement("script");
              A.onreadystatechange = function() {
                w(P), A.onreadystatechange = null, y.removeChild(A), A = null;
              }, y.appendChild(A);
            }) : function(P) {
              setTimeout(w, 0, P);
            }, g.setImmediate = function(P) {
              typeof P != "function" && (P = new Function("" + P));
              for (var A = new Array(arguments.length - 1), D = 0; D < A.length; D++) A[D] = arguments[D + 1];
              var N = { callback: P, args: A };
              return u[p] = N, f(p), p++;
            }, g.clearImmediate = d;
          }
          function d(P) {
            delete u[P];
          }
          function w(P) {
            if (_) setTimeout(w, 0, P);
            else {
              var A = u[P];
              if (A) {
                _ = !0;
                try {
                  (function(D) {
                    var N = D.callback, H = D.args;
                    switch (H.length) {
                      case 0:
                        N();
                        break;
                      case 1:
                        N(H[0]);
                        break;
                      case 2:
                        N(H[0], H[1]);
                        break;
                      case 3:
                        N(H[0], H[1], H[2]);
                        break;
                      default:
                        N.apply(l, H);
                    }
                  })(A);
                } finally {
                  d(P), _ = !1;
                }
              }
            }
          }
          function T(P) {
            P.source === s && typeof P.data == "string" && P.data.indexOf(v) === 0 && w(+P.data.slice(v.length));
          }
        })(typeof self > "u" ? i === void 0 ? this : i : self);
      }).call(this, typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(Or);
/*! @license DOMPurify 3.4.16 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.16/LICENSE */
function On(t, o) {
  (o == null || o > t.length) && (o = t.length);
  for (var e = 0, h = Array(o); e < o; e++) h[e] = t[e];
  return h;
}
function Lr(t) {
  if (Array.isArray(t)) return t;
}
function Rr(t, o) {
  var e = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (e != null) {
    var h, a, i, s, l = [], f = !0, y = !1;
    try {
      if (i = (e = e.call(t)).next, o !== 0) for (; !(f = (h = i.call(e)).done) && (l.push(h.value), l.length !== o); f = !0) ;
    } catch (S) {
      y = !0, a = S;
    } finally {
      try {
        if (!f && e.return != null && (s = e.return(), Object(s) !== s)) return;
      } finally {
        if (y) throw a;
      }
    }
    return l;
  }
}
function Mr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
function Ir(t, o) {
  return Lr(t) || Rr(t, o) || Nr(t, o) || Mr();
}
function Nr(t, o) {
  if (t) {
    if (typeof t == "string") return On(t, o);
    var e = {}.toString.call(t).slice(8, -1);
    return e === "Object" && t.constructor && (e = t.constructor.name), e === "Map" || e === "Set" ? Array.from(t) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? On(t, o) : void 0;
  }
}
const tr = Object.entries, Ln = Object.setPrototypeOf, Fr = Object.isFrozen, Dr = Object.getPrototypeOf, Br = Object.getOwnPropertyDescriptor;
let kt = Object.freeze, Tt = Object.seal, se = Object.create, er = typeof Reflect < "u" && Reflect, sn = er.apply, ln = er.construct;
kt || (kt = function(o) {
  return o;
});
Tt || (Tt = function(o) {
  return o;
});
sn || (sn = function(o, e) {
  for (var h = arguments.length, a = new Array(h > 2 ? h - 2 : 0), i = 2; i < h; i++) a[i - 2] = arguments[i];
  return o.apply(e, a);
});
ln || (ln = function(o) {
  for (var e = arguments.length, h = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) h[a - 1] = arguments[a];
  return new o(...h);
});
const ee = xt(Array.prototype.forEach), Ur = xt(Array.prototype.lastIndexOf), Rn = xt(Array.prototype.pop), ge = xt(Array.prototype.push), jr = xt(Array.prototype.splice), ce = Array.isArray, we = xt(String.prototype.toLowerCase), Ve = xt(String.prototype.toString), Mn = xt(String.prototype.match), ve = xt(String.prototype.replace), In = xt(String.prototype.indexOf), Wr = xt(String.prototype.trim), Hr = xt(Number.prototype.toString), Zr = xt(Boolean.prototype.toString), Nn = typeof BigInt > "u" ? null : xt(BigInt.prototype.toString), Fn = typeof Symbol > "u" ? null : xt(Symbol.prototype.toString), Ot = xt(Object.prototype.hasOwnProperty), be = xt(Object.prototype.toString), Ct = xt(RegExp.prototype.test), Xt = Gr(TypeError);
function xt(t) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var e = arguments.length, h = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) h[a - 1] = arguments[a];
    return sn(t, o, h);
  };
}
function Gr(t) {
  return function() {
    for (var o = arguments.length, e = new Array(o), h = 0; h < o; h++) e[h] = arguments[h];
    return ln(t, e);
  };
}
function mt(t, o) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : we;
  if (Ln && Ln(t, null), !ce(o)) return t;
  let h = o.length;
  for (; h--; ) {
    let a = o[h];
    if (typeof a == "string") {
      const i = e(a);
      i !== a && (Fr(o) || (o[h] = i), a = i);
    }
    t[a] = !0;
  }
  return t;
}
function $r(t) {
  for (let o = 0; o < t.length; o++) Ot(t, o) || (t[o] = null);
  return t;
}
function Nt(t) {
  const o = se(null);
  for (const h of tr(t)) {
    var e = Ir(h, 2);
    const a = e[0], i = e[1];
    Ot(t, a) && (ce(i) ? o[a] = $r(i) : i && typeof i == "object" && i.constructor === Object ? o[a] = Nt(i) : o[a] = i);
  }
  return o;
}
function Yr(t) {
  switch (typeof t) {
    case "string":
      return t;
    case "number":
      return Hr(t);
    case "boolean":
      return Zr(t);
    case "bigint":
      return Nn ? Nn(t) : "0";
    case "symbol":
      return Fn ? Fn(t) : "Symbol()";
    case "undefined":
      return be(t);
    case "function":
    case "object": {
      if (t === null) return be(t);
      const o = t, e = Ut(o, "toString");
      if (typeof e == "function") {
        const h = e(o);
        return typeof h == "string" ? h : be(h);
      }
      return be(t);
    }
    default:
      return be(t);
  }
}
function Ut(t, o) {
  for (; t !== null; ) {
    const h = Br(t, o);
    if (h) {
      if (h.get) return xt(h.get);
      if (typeof h.value == "function") return xt(h.value);
    }
    t = Dr(t);
  }
  function e() {
    return null;
  }
  return e;
}
function qr(t) {
  try {
    return Ct(t, ""), !0;
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
]), Xe = kt([
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
]), Ke = kt([
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
]), Vr = kt([
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
]), Je = kt([
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
]), Xr = kt([
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
]), Bn = kt(["#text"]), Un = kt([
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
]), Qe = kt([
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
]), jn = kt([
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
]), Kr = Tt(/{{[\w\W]*|^[\w\W]*}}/g), Jr = Tt(/<%[\w\W]*|^[\w\W]*%>/g), Qr = Tt(/\${[\w\W]*/g), ti = Tt(/^data-[\-\w.\u00B7-\uFFFF]+$/), ei = Tt(/^aria-[\-\w]+$/), Wn = Tt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), ni = Tt(/^(?:\w+script|data):/i), ri = Tt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), ii = Tt(/^html$/i), ai = Tt(/^[a-z][.\w]*(-[.\w]+)+$/i), Hn = Tt(/<[/\w!]/g), Zn = Tt(/<[/\w]/g), oi = Tt(/<\/no(script|embed|frames)/i), si = Tt(/\/>/i), Rt = {
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
}, nr = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], li = kt(mt({}, nr)), ci = function() {
  const t = {};
  return ee(nr, (o) => {
    t[o] = Tt(new RegExp("</" + o + "(?=[\\t\\n\\f\\r />])", "i"));
  }), kt(t);
}(), ui = function() {
  return typeof window > "u" ? null : window;
}, fi = function(o, e) {
  if (typeof o != "object" || typeof o.createPolicy != "function") return null;
  let h = null;
  const a = "data-tt-policy-suffix";
  e && e.hasAttribute(a) && (h = e.getAttribute(a));
  const i = "dompurify" + (h ? "#" + h : "");
  try {
    return o.createPolicy(i, {
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
}, Kt = function(o, e, h, a) {
  return Ot(o, e) && ce(o[e]) ? mt(a.base ? Nt(a.base) : {}, o[e], a.transform) : h;
}, tn = function(o, e, h) {
  const a = Ot(o, e) ? o[e] : void 0;
  return a && typeof a == "object" ? Nt(a) : h();
};
function rr() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ui();
  const o = (K) => rr(K);
  if (o.version = "3.4.16", o.removed = [], !t || !t.document || t.document.nodeType !== Rt.document || !t.Element)
    return o.isSupported = !1, o;
  let e = t.document;
  const h = e, a = h.currentScript;
  t.DocumentFragment;
  const i = t.HTMLTemplateElement, s = t.Node, l = t.Element, f = t.NodeFilter;
  t.NamedNodeMap === void 0 && (t.NamedNodeMap || t.MozNamedAttrMap), t.HTMLFormElement;
  const y = t.DOMParser, S = t.trustedTypes, v = l.prototype, p = Ut(v, "cloneNode"), u = Ut(v, "remove"), _ = Ut(v, "removeAttributeNode"), c = Ut(v, "nextSibling"), g = Ut(v, "childNodes"), d = Ut(v, "parentNode"), w = Ut(v, "shadowRoot"), T = Ut(v, "attributes"), P = s && s.prototype ? Ut(s.prototype, "nodeType") : null, A = s && s.prototype ? Ut(s.prototype, "nodeName") : null, D = s && s.prototype ? Ut(s.prototype, "ownerDocument") : null, N = function(m) {
    return P ? P(m) : m.nodeType;
  }, H = function(m) {
    return A ? A(m) : m.nodeName;
  };
  if (typeof i == "function") {
    const K = e.createElement("template");
    K.content && K.content.ownerDocument && (e = K.content.ownerDocument);
  }
  let M, Y = "", q, k = !1, F = 0;
  const r = function() {
    if (F > 0) throw Xt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, O = function(m) {
    r(), F++;
    try {
      return M.createHTML(m);
    } finally {
      F--;
    }
  }, V = function(m) {
    r(), F++;
    try {
      return M.createScriptURL(m);
    } finally {
      F--;
    }
  }, j = function() {
    return k || (q = fi(S, a), k = !0), q;
  }, rt = e, W = rt.implementation, it = rt.createNodeIterator, I = rt.createDocumentFragment, x = rt.getElementsByTagName, J = h.importNode;
  let B = Gn();
  o.isSupported = typeof tr == "function" && typeof d == "function" && W && W.createHTMLDocument !== void 0;
  const Z = Kr, lt = Jr, ft = Qr, st = ti, ut = ei, vt = ni, bt = ri, Et = ai;
  let St = Wn, n = null;
  const U = mt({}, [
    ...Dn,
    ...Xe,
    ...Ke,
    ...Je,
    ...Bn
  ]);
  let L = null;
  const E = mt({}, [
    ...Un,
    ...Qe,
    ...jn,
    ...Oe
  ]);
  let b = Object.seal(se(null, {
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
  })), C = null, $ = null;
  const G = Object.seal(se(null, {
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
  let R = !0, Q = !0, nt = !1, tt = !0, at = !1, ht = !0, ct = !1, At = !1, Wt = null, Pt = null, Gt = !1, gt = !1, $t = !1, qt = !1, Ft = !0, fe = !1;
  const ye = "user-content-";
  let de = !0, he = !1, Yt = {}, Dt = null;
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
  let dn = null;
  const hn = mt({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let pn = null;
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
  ]), xe = "http://www.w3.org/1998/Math/MathML", Ee = "http://www.w3.org/2000/svg", Ht = "http://www.w3.org/1999/xhtml";
  let ne = Ht, je = !1, We = null;
  const mr = mt({}, [
    xe,
    Ee,
    Ht
  ], Ve), gn = kt([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let He = mt({}, gn);
  const vn = kt(["annotation-xml"]);
  let Ze = mt({}, vn);
  const gr = mt({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let pe = null;
  const vr = ["application/xhtml+xml", "text/html"], br = "text/html";
  let yt = null, re = null;
  const _r = e.createElement("form"), bn = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, Ge = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (re && re === m) return;
    (!m || typeof m != "object") && (m = {}), m = Nt(m), pe = vr.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? br : m.PARSER_MEDIA_TYPE, yt = pe === "application/xhtml+xml" ? Ve : we, n = Kt(m, "ALLOWED_TAGS", U, { transform: yt }), L = Kt(m, "ALLOWED_ATTR", E, { transform: yt }), We = Kt(m, "ALLOWED_NAMESPACES", mr, { transform: Ve }), pn = Kt(m, "ADD_URI_SAFE_ATTR", mn, {
      transform: yt,
      base: mn
    }), dn = Kt(m, "ADD_DATA_URI_TAGS", hn, {
      transform: yt,
      base: hn
    }), Dt = Kt(m, "FORBID_CONTENTS", Jt, { transform: yt }), C = Kt(m, "FORBID_TAGS", Nt({}), { transform: yt }), $ = Kt(m, "FORBID_ATTR", Nt({}), { transform: yt }), Yt = Ot(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? Nt(m.USE_PROFILES) : m.USE_PROFILES : !1, R = m.ALLOW_ARIA_ATTR !== !1, Q = m.ALLOW_DATA_ATTR !== !1, nt = m.ALLOW_UNKNOWN_PROTOCOLS || !1, tt = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, at = m.SAFE_FOR_TEMPLATES || !1, ht = m.SAFE_FOR_XML !== !1, ct = m.WHOLE_DOCUMENT || !1, gt = m.RETURN_DOM || !1, $t = m.RETURN_DOM_FRAGMENT || !1, qt = m.RETURN_TRUSTED_TYPE || !1, Gt = m.FORCE_BODY || !1, Ft = m.SANITIZE_DOM !== !1, fe = m.SANITIZE_NAMED_PROPS || !1, de = m.KEEP_CONTENT !== !1, he = m.IN_PLACE || !1, St = qr(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : Wn, ne = typeof m.NAMESPACE == "string" ? m.NAMESPACE : Ht, He = tn(m, "MATHML_TEXT_INTEGRATION_POINTS", () => mt({}, gn)), Ze = tn(m, "HTML_INTEGRATION_POINTS", () => mt({}, vn));
    const z = tn(m, "CUSTOM_ELEMENT_HANDLING", () => se(null));
    if (b = se(null), Ot(z, "tagNameCheck") && bn(z.tagNameCheck) && (b.tagNameCheck = z.tagNameCheck), Ot(z, "attributeNameCheck") && bn(z.attributeNameCheck) && (b.attributeNameCheck = z.attributeNameCheck), Ot(z, "allowCustomizedBuiltInElements") && typeof z.allowCustomizedBuiltInElements == "boolean" && (b.allowCustomizedBuiltInElements = z.allowCustomizedBuiltInElements), Tt(b), at && (Q = !1), $t && (gt = !0), Yt && (n = mt({}, Bn), L = se(null), Yt.html === !0 && (mt(n, Dn), mt(L, Un)), Yt.svg === !0 && (mt(n, Xe), mt(L, Qe), mt(L, Oe)), Yt.svgFilters === !0 && (mt(n, Ke), mt(L, Qe), mt(L, Oe)), Yt.mathMl === !0 && (mt(n, Je), mt(L, jn), mt(L, Oe))), G.tagCheck = null, G.attributeCheck = null, Ot(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? G.tagCheck = m.ADD_TAGS : ce(m.ADD_TAGS) && (n === U && (n = Nt(n)), mt(n, m.ADD_TAGS, yt))), Ot(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? G.attributeCheck = m.ADD_ATTR : ce(m.ADD_ATTR) && (L === E && (L = Nt(L)), mt(L, m.ADD_ATTR, yt))), Ot(m, "ADD_FORBID_CONTENTS") && ce(m.ADD_FORBID_CONTENTS) && (Dt === Jt && (Dt = Nt(Dt)), mt(Dt, m.ADD_FORBID_CONTENTS, yt)), de && (n["#text"] = !0), ct && mt(n, [
      "html",
      "head",
      "body"
    ]), n.table && (mt(n, ["tbody"]), delete C.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function") throw Xt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Xt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const X = M;
      M = m.TRUSTED_TYPES_POLICY;
      try {
        Y = O("");
      } catch (et) {
        throw M = X, et;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? (M = void 0, Y = "") : (M === void 0 && (M = j()), M && typeof Y == "string" && (Y = O("")));
    kt && kt(m), re = m;
  }, _n = mt({}, [
    ...Xe,
    ...Ke,
    ...Vr
  ]), wn = mt({}, [...Je, ...Xr]), wr = function(m, z, X) {
    return z.namespaceURI === Ht ? m === "svg" : z.namespaceURI === xe ? m === "svg" && (X === "annotation-xml" || He[X]) : !!_n[m];
  }, yr = function(m, z, X) {
    return z.namespaceURI === Ht ? m === "math" : z.namespaceURI === Ee ? m === "math" && Ze[X] : !!wn[m];
  }, xr = function(m, z, X) {
    return z.namespaceURI === Ee && !Ze[X] || z.namespaceURI === xe && !He[X] ? !1 : !wn[m] && (gr[m] || !_n[m]);
  }, Er = function(m) {
    let z = d(m);
    (!z || !z.tagName) && (z = {
      namespaceURI: ne,
      tagName: "template"
    });
    const X = we(m.tagName), et = we(z.tagName);
    return We[m.namespaceURI] ? m.namespaceURI === Ee ? wr(X, z, et) : m.namespaceURI === xe ? yr(X, z, et) : m.namespaceURI === Ht ? xr(X, z, et) : !!(pe === "application/xhtml+xml" && We[m.namespaceURI]) : !1;
  }, Vt = function(m) {
    ge(o.removed, { element: m });
    try {
      d(m).removeChild(m);
    } catch {
      if (u(m), !d(m)) throw Xt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, yn = function(m, z, X) {
    try {
      _(m, z);
    } catch {
      try {
        m.removeAttribute(X);
      } catch {
      }
    }
  }, ke = function(m) {
    Se(m);
    const z = g(m);
    if (z) {
      const et = [];
      ee(z, (ot) => {
        ge(et, ot);
      }), ee(et, (ot) => {
        try {
          u(ot);
        } catch {
        }
      });
    }
    const X = T(m);
    if (X) for (let et = X.length - 1; et >= 0; --et) {
      const ot = X[et], dt = ot && ot.name;
      typeof dt == "string" && yn(m, ot, dt);
    }
  }, Qt = function(m, z, X) {
    if (!X) try {
      X = z.getAttributeNode(m);
    } catch {
      X = null;
    }
    ge(o.removed, {
      attribute: X || null,
      from: z
    });
    try {
      X ? _(z, X) : z.removeAttribute(m);
    } catch {
      try {
        z.removeAttribute(m);
      } catch {
      }
    }
    if (m === "is")
      if (gt || $t) try {
        Vt(z);
      } catch {
      }
      else try {
        z.setAttribute(m, "");
      } catch {
      }
  }, kr = function(m) {
    const z = T(m);
    if (z)
      for (let X = z.length - 1; X >= 0; --X) {
        const et = z[X], ot = et && et.name;
        typeof ot != "string" || L[yt(ot)] || yn(m, et, ot);
      }
  }, Se = function(m) {
    const z = [m];
    for (; z.length > 0; ) {
      const X = z.pop();
      N(X) === Rt.element && kr(X);
      const et = g(X);
      if (et) for (let ot = et.length - 1; ot >= 0; --ot) z.push(et[ot]);
    }
  }, xn = function(m, z) {
    return ht ? m === "patchsrc" ? !0 : m === "for" && z !== "label" && z !== "output" : !1;
  }, Sr = function(m) {
    if (!ht) return;
    const z = [m];
    for (; z.length > 0; ) {
      const X = z.pop(), et = N(X);
      if (et === Rt.processingInstruction || et === Rt.comment && Ct(Zn, X.data)) {
        try {
          u(X);
        } catch {
        }
        continue;
      }
      if (et === Rt.element) {
        const dt = X, pt = yt(H(X));
        try {
          dt.hasAttribute && dt.hasAttribute("patchsrc") && dt.removeAttribute("patchsrc"), dt.hasAttribute && dt.hasAttribute("for") && xn("for", pt) && dt.removeAttribute("for");
        } catch {
        }
      }
      const ot = g(X);
      if (ot) for (let dt = ot.length - 1; dt >= 0; --dt) z.push(ot[dt]);
    }
  }, En = function(m) {
    let z = null, X = null;
    if (Gt) m = "<remove></remove>" + m;
    else {
      const dt = Mn(m, /^[\r\n\t ]+/);
      X = dt && dt[0];
    }
    pe === "application/xhtml+xml" && ne === Ht && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const et = M ? O(m) : m;
    if (ne === Ht) try {
      z = new y().parseFromString(et, pe);
    } catch {
    }
    if (!z || !z.documentElement) {
      z = W.createDocument(ne, "template", null);
      try {
        z.documentElement.innerHTML = je ? Y : et;
      } catch {
      }
    }
    const ot = z.body || z.documentElement;
    return m && X && ot.insertBefore(e.createTextNode(X), ot.childNodes[0] || null), ne === Ht ? x.call(z, ct ? "html" : "body")[0] : ct ? z.documentElement : ot;
  }, kn = function(m) {
    const z = D ? D(m) : m.ownerDocument;
    return it.call(z || m, m, f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION, null);
  }, Te = function(m) {
    return m = ve(m, Z, " "), m = ve(m, lt, " "), m = ve(m, ft, " "), m;
  }, $e = function(m) {
    var z;
    m.normalize();
    const X = D ? D(m) : m.ownerDocument, et = it.call(X || m, m, f.SHOW_TEXT | f.SHOW_COMMENT | f.SHOW_CDATA_SECTION | f.SHOW_PROCESSING_INSTRUCTION, null);
    let ot = et.nextNode();
    for (; ot; )
      ot.data = Te(ot.data), ot = et.nextNode();
    const dt = (z = m.querySelectorAll) === null || z === void 0 ? void 0 : z.call(m, "template");
    dt && ee(dt, (pt) => {
      ie(pt.content) && $e(pt.content);
    });
  }, Ae = function(m) {
    const z = A ? A(m) : null;
    return typeof z != "string" || yt(z) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || m.attributes !== T(m) || typeof m.removeAttribute != "function" || typeof m.removeAttributeNode != "function" || typeof m.getAttributeNode != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function" || m.nodeType !== P(m) || m.childNodes !== g(m);
  }, ie = function(m) {
    if (!P || typeof m != "object" || m === null) return !1;
    try {
      return P(m) === Rt.documentFragment;
    } catch {
      return !1;
    }
  }, me = function(m) {
    if (!P || typeof m != "object" || m === null) return !1;
    try {
      return typeof P(m) == "number";
    } catch {
      return !1;
    }
  };
  function Zt(K, m, z) {
    K.length !== 0 && ee(K, (X) => {
      X.call(o, m, z, re);
    });
  }
  const Tr = function(m, z) {
    return !!(ht && m.hasChildNodes() && !me(m.firstElementChild) && Ct(Hn, m.textContent) && Ct(Hn, m.innerHTML) || ht && m.namespaceURI === Ht && li[z] && (me(m.firstElementChild) || typeof m.textContent == "string" && Ct(ci[z], m.textContent)) || m.nodeType === Rt.processingInstruction || ht && m.nodeType === Rt.comment && Ct(Zn, m.data));
  }, Ce = function(m, z) {
    if (m instanceof RegExp) return Ct(m, z);
    if (m instanceof Function) {
      for (var X = arguments.length, et = new Array(X > 2 ? X - 2 : 0), ot = 2; ot < X; ot++) et[ot - 2] = arguments[ot];
      return !!m(z, ...et);
    }
    return !1;
  }, Ar = function(m, z, X) {
    if (!C[z] && Cn(z) && Ce(b.tagNameCheck, z)) return !1;
    if (de && !Dt[z]) {
      const et = d(m), ot = g(m);
      if (ot && et) {
        const dt = ot.length;
        for (let pt = dt - 1; pt >= 0; --pt) {
          const wt = m === X ? p(ot[pt], !0) : ot[pt];
          et.insertBefore(wt, c(m));
        }
      }
    }
    return Vt(m), !0;
  }, Sn = function(m, z, X, et) {
    return m.length === 0 ? z : z === X || z === et ? Nt(z) : z;
  }, ae = function(m, z) {
    return m === z || d(m) !== null ? !1 : (he && Se(m), !0);
  }, Tn = function(m, z) {
    if (Zt(B.beforeSanitizeElements, m, null), ae(m, z)) return !0;
    if (Ae(m))
      return Vt(m), !0;
    const X = yt(H(m));
    if (n = Sn(B.uponSanitizeElement, n, U, Wt), Zt(B.uponSanitizeElement, m, {
      tagName: X,
      allowedTags: n
    }), ae(m, z)) return !0;
    if (Tr(m, X))
      return Vt(m), !0;
    if (C[X] || !(G.tagCheck instanceof Function && G.tagCheck(X)) && !n[X]) {
      const et = Ar(m, X, z);
      return et === !1 && (Zt(B.afterSanitizeElements, m, null), ae(m, z)) ? !0 : et;
    }
    if (N(m) === Rt.element && !Er(m) || (X === "noscript" || X === "noembed" || X === "noframes") && Ct(oi, m.innerHTML))
      return Vt(m), !0;
    if (at && m.nodeType === Rt.text) {
      const et = Te(m.textContent);
      m.textContent !== et && (ge(o.removed, { element: m.cloneNode() }), m.textContent = et);
    }
    return Zt(B.afterSanitizeElements, m, null), ae(m, z);
  }, An = function(m, z, X) {
    if ($[z] || xn(z, m) || Ft && (z === "id" || z === "name") && (X in e || X in _r)) return !1;
    const et = L[z] || G.attributeCheck instanceof Function && G.attributeCheck(z, m);
    return Q && Ct(st, z) || R && Ct(ut, z) ? !0 : et ? pn[z] || Ct(St, ve(X, bt, "")) || (z === "src" || z === "xlink:href" || z === "href") && m !== "script" && In(X, "data:") === 0 && dn[m] || nt && !Ct(vt, ve(X, bt, "")) ? !0 : !X : Cn(m) && Ce(b.tagNameCheck, m) && Ce(b.attributeNameCheck, z, m) || z === "is" && b.allowCustomizedBuiltInElements && Ce(b.tagNameCheck, X);
  }, Cr = mt({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Cn = function(m) {
    return !Cr[we(m)] && Ct(Et, m);
  }, Pr = function(m, z, X, et) {
    if (M && typeof S == "object" && typeof S.getAttributeType == "function" && !X) switch (S.getAttributeType(m, z)) {
      case "TrustedHTML":
        return O(et);
      case "TrustedScriptURL":
        return V(et);
    }
    return et;
  }, zr = function(m, z, X, et) {
    try {
      return X ? m.setAttributeNS(X, z, et) : m.setAttribute(z, et), Ae(m) ? (Vt(m), !1) : !0;
    } catch {
      return Qt(z, m), !1;
    }
  }, Pn = function(m, z) {
    if (Zt(B.beforeSanitizeAttributes, m, null), ae(m, z)) return;
    const X = m.attributes;
    if (!X || Ae(m)) return;
    L = Sn(B.uponSanitizeAttribute, L, E, Pt);
    const et = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: L,
      forceKeepAttr: void 0
    };
    let ot = X.length;
    const dt = yt(m.nodeName);
    for (; ot--; ) {
      const pt = X[ot], wt = pt.name, Bt = pt.namespaceURI, Lt = pt.value, oe = yt(wt), qe = Lt;
      let zt = wt === "value" ? qe : Wr(qe), zn = !1;
      if (et.attrName = oe, et.attrValue = zt, et.keepAttr = !0, et.forceKeepAttr = void 0, Zt(B.uponSanitizeAttribute, m, et), zt = et.attrValue, fe && (oe === "id" || oe === "name") && In(zt, ye) !== 0 && (Qt(wt, m, pt), zt = ye + zt, zn = !0), ht && Ct(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, zt)) {
        Qt(wt, m, pt);
        continue;
      }
      if (oe === "attributename" && Mn(zt, "href")) {
        Qt(wt, m, pt);
        continue;
      }
      if (!et.forceKeepAttr) {
        if (!et.keepAttr) {
          Qt(wt, m, pt);
          continue;
        }
        if (!tt && Ct(si, zt)) {
          Qt(wt, m, pt);
          continue;
        }
        if (at && (zt = Te(zt)), !An(dt, oe, zt)) {
          Qt(wt, m, pt);
          continue;
        }
        zt = Pr(dt, oe, Bt, zt), zt !== qe && zr(m, wt, Bt, zt) && zn && Rn(o.removed);
      }
    }
    Zt(B.afterSanitizeAttributes, m, null), ae(m, z);
  }, Pe = function(m) {
    let z = null;
    const X = kn(m);
    for (Zt(B.beforeSanitizeShadowDOM, m, null); z = X.nextNode(); )
      if (Zt(B.uponSanitizeShadowNode, z, null), Tn(z, m), Pn(z, m), ie(z.content) && Pe(z.content), N(z) === Rt.element) {
        const et = w(z);
        ie(et) && (Ye(et), Pe(et));
      }
    Zt(B.afterSanitizeShadowDOM, m, null);
  }, Ye = function(m) {
    const z = [{
      node: m,
      shadow: null
    }];
    for (; z.length > 0; ) {
      const X = z.pop();
      if (X.shadow) {
        Pe(X.shadow);
        continue;
      }
      const et = X.node, ot = N(et) === Rt.element, dt = g(et);
      if (dt) for (let pt = dt.length - 1; pt >= 0; --pt) z.push({
        node: dt[pt],
        shadow: null
      });
      if (ot) {
        const pt = A ? A(et) : null;
        if (typeof pt == "string" && yt(pt) === "template") {
          const wt = et.content;
          ie(wt) && z.push({
            node: wt,
            shadow: null
          });
        }
      }
      if (ot) {
        const pt = w(et);
        ie(pt) && z.push({
          node: null,
          shadow: pt
        }, {
          node: pt,
          shadow: null
        });
      }
    }
  };
  return o.sanitize = function(K) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, z = null, X = null, et = null, ot = null;
    if (je = !K, je && (K = "<!-->"), typeof K != "string" && !me(K) && (K = Yr(K), typeof K != "string"))
      throw Xt("dirty is not a string, aborting");
    if (!o.isSupported) return K;
    At ? (n = Wt, L = Pt) : Ge(m), (B.uponSanitizeElement.length > 0 || B.uponSanitizeAttribute.length > 0) && (n = Nt(n)), B.uponSanitizeAttribute.length > 0 && (L = Nt(L)), o.removed = [];
    const dt = he && typeof K != "string" && me(K);
    if (dt) {
      Sr(K);
      const Bt = H(K);
      if (typeof Bt == "string") {
        const Lt = yt(Bt);
        if (!n[Lt] || C[Lt])
          throw ke(K), Xt("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ae(K))
        throw ke(K), Xt("root node is clobbered and cannot be sanitized in-place");
      try {
        Ye(K);
      } catch (Lt) {
        throw ke(K), Lt;
      }
    } else if (me(K))
      z = En("<!---->"), X = z.ownerDocument.importNode(K, !0), X.nodeType === Rt.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? z = X : z.appendChild(X), Ye(z);
    else {
      if (!gt && !at && !ct && K.indexOf("<") === -1) return M && qt ? O(K) : K;
      if (z = En(K), !z) return gt ? null : qt ? Y : "";
    }
    z && Gt && Vt(z.firstChild);
    const pt = dt ? K : z;
    try {
      const Bt = kn(pt);
      for (; et = Bt.nextNode(); )
        Tn(et, pt), Pn(et, pt), ie(et.content) && Pe(et.content);
    } catch (Bt) {
      throw dt && (ke(K), ee(o.removed, (Lt) => {
        Lt.element && Se(Lt.element);
      })), Bt;
    }
    if (dt) {
      let Bt = !1;
      if (ee(o.removed, (Lt) => {
        Lt.element && (Lt.element === K && (Bt = !0), Se(Lt.element));
      }), Bt) throw Xt("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return at && $e(K), K;
    }
    if (gt) {
      if (at && $e(z), $t)
        for (ot = I.call(z.ownerDocument); z.firstChild; ) ot.appendChild(z.firstChild);
      else ot = z;
      return (L.shadowroot || L.shadowrootmode) && (ot = J.call(h, ot, !0)), ot;
    }
    let wt = ct ? z.outerHTML : z.innerHTML;
    return ct && n["!doctype"] && z.ownerDocument && z.ownerDocument.doctype && z.ownerDocument.doctype.name && Ct(ii, z.ownerDocument.doctype.name) && (wt = "<!DOCTYPE " + z.ownerDocument.doctype.name + `>
` + wt), at && (wt = Te(wt)), M && qt ? O(wt) : wt;
  }, o.setConfig = function() {
    let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ge(K), At = !0, Wt = n, Pt = L;
  }, o.clearConfig = function() {
    re = null, At = !1, Wt = null, Pt = null, M = q, Y = "";
  }, o.isValidAttribute = function(K, m, z) {
    re || Ge({});
    const X = yt(K), et = yt(m);
    return An(X, et, z);
  }, o.addHook = function(K, m) {
    typeof m == "function" && Ot(B, K) && ge(B[K], m);
  }, o.removeHook = function(K, m) {
    if (Ot(B, K)) {
      if (m !== void 0) {
        const z = Ur(B[K], m);
        return z === -1 ? void 0 : jr(B[K], z, 1)[0];
      }
      return Rn(B[K]);
    }
  }, o.removeHooks = function(K) {
    Ot(B, K) && (B[K] = []);
  }, o.removeAllHooks = function() {
    B = Gn();
  }, o;
}
rr();
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
var _t;
(function(t) {
  t.Document = "document", t.Paragraph = "paragraph", t.Run = "run", t.Break = "break", t.NoBreakHyphen = "noBreakHyphen", t.Table = "table", t.Row = "row", t.Cell = "cell", t.Hyperlink = "hyperlink", t.SmartTag = "smartTag", t.Drawing = "drawing", t.Image = "image", t.Text = "text", t.Tab = "tab", t.Symbol = "symbol", t.BookmarkStart = "bookmarkStart", t.BookmarkEnd = "bookmarkEnd", t.Footer = "footer", t.Header = "header", t.FootnoteReference = "footnoteReference", t.EndnoteReference = "endnoteReference", t.Footnote = "footnote", t.Endnote = "endnote", t.SimpleField = "simpleField", t.ComplexField = "complexField", t.Instruction = "instruction", t.VmlPicture = "vmlPicture", t.MmlMath = "mmlMath", t.MmlMathParagraph = "mmlMathParagraph", t.MmlFraction = "mmlFraction", t.MmlFunction = "mmlFunction", t.MmlFunctionName = "mmlFunctionName", t.MmlNumerator = "mmlNumerator", t.MmlDenominator = "mmlDenominator", t.MmlRadical = "mmlRadical", t.MmlBase = "mmlBase", t.MmlDegree = "mmlDegree", t.MmlSuperscript = "mmlSuperscript", t.MmlSubscript = "mmlSubscript", t.MmlPreSubSuper = "mmlPreSubSuper", t.MmlSubArgument = "mmlSubArgument", t.MmlSuperArgument = "mmlSuperArgument", t.MmlNary = "mmlNary", t.MmlDelimiter = "mmlDelimiter", t.MmlRun = "mmlRun", t.MmlEquationArray = "mmlEquationArray", t.MmlLimit = "mmlLimit", t.MmlLimitLower = "mmlLimitLower", t.MmlMatrix = "mmlMatrix", t.MmlMatrixRow = "mmlMatrixRow", t.MmlBox = "mmlBox", t.MmlBar = "mmlBar", t.MmlGroupChar = "mmlGroupChar", t.VmlElement = "vmlElement", t.Inserted = "inserted", t.Deleted = "deleted", t.DeletedText = "deletedText", t.Comment = "comment", t.CommentReference = "commentReference", t.CommentRangeStart = "commentRangeStart", t.CommentRangeEnd = "commentRangeEnd", t.AltChunk = "altChunk";
})(_t || (_t = {}));
le.OfficeDocument, le.ExtendedProperties, le.CoreProperties, le.CustomProperties;
_t.MmlMath, _t.MmlMathParagraph, _t.MmlFraction, _t.MmlFunction, _t.MmlFunctionName, _t.MmlNumerator, _t.MmlDenominator, _t.MmlRadical, _t.MmlDegree, _t.MmlBase, _t.MmlSuperscript, _t.MmlSubscript, _t.MmlPreSubSuper, _t.MmlSuperArgument, _t.MmlSubArgument, _t.MmlDelimiter, _t.MmlNary, _t.MmlEquationArray, _t.MmlLimit, _t.MmlLimitLower, _t.MmlMatrix, _t.MmlMatrixRow, _t.MmlBox, _t.MmlBar, _t.MmlGroupChar;
/*! pako 2.2.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
function ue(t) {
  let o = t.length;
  for (; --o >= 0; )
    t[o] = 0;
}
const di = 3, hi = 258, ir = 29, pi = 256, mi = pi + 1 + ir, ar = 30, gi = 512, vi = new Array((mi + 2) * 2);
ue(vi);
const bi = new Array(ar * 2);
ue(bi);
const _i = new Array(gi);
ue(_i);
const wi = new Array(hi - di + 1);
ue(wi);
const yi = new Array(ir);
ue(yi);
const xi = new Array(ar);
ue(xi);
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
}
const cn = new Uint8Array(256);
for (let t = 0; t < 256; t++)
  cn[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
cn[254] = cn[255] = 1;
var Le = {
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
async function Ei(t, o, e) {
  if (typeof t == "string") {
    const s = o || Si(t) || "remote-file", l = Me(s);
    return Re({
      source: t,
      name: s,
      extension: l,
      mimeType: e || Le[l] || "",
      url: t
    }, e);
  }
  if (t instanceof File) {
    const s = Me(o || t.name);
    return Re({
      source: t,
      name: o || t.name,
      extension: s,
      mimeType: e || t.type || Le[s] || "",
      size: t.size,
      blob: t
    }, e);
  }
  if (t instanceof Blob) {
    const s = o || "blob", l = Me(s);
    return Re({
      source: t,
      name: s,
      extension: l,
      mimeType: e || t.type || Le[l] || "",
      size: t.size,
      blob: t
    }, e);
  }
  const h = o || "buffer", a = Me(h), i = new Blob([t], { type: e || Le[a] || "" });
  return Re({
    source: t,
    name: h,
    extension: a,
    mimeType: i.type,
    size: i.size,
    blob: i
  }, e);
}
var ki = /* @__PURE__ */ new WeakSet();
function Re(t, o) {
  return o && ki.add(t), t;
}
function Si(t) {
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
function Me(t) {
  var h;
  const o = ((h = t.split("?")[0]) == null ? void 0 : h.split("#")[0]) || "", e = o.lastIndexOf(".");
  return e >= 0 ? o.slice(e + 1).split("!", 1)[0].toLowerCase() : "";
}
function Ti(t) {
  if (typeof t != "string")
    return t;
  const o = document.querySelector(t);
  if (!o)
    throw new Error(`File viewer container not found: ${t}`);
  return o;
}
function Ai(t, o, e) {
  o !== void 0 && (t.style.width = typeof o == "number" ? `${o}px` : o), e !== void 0 && (t.style.height = typeof e == "number" ? `${e}px` : e);
}
function Yn(t) {
  const o = t.getBoundingClientRect();
  return {
    width: Math.max(0, Math.round(o.width)),
    height: Math.max(0, Math.round(o.height))
  };
}
function fn(t) {
  if (t.url)
    return t.url;
  if (!t.blob)
    throw new Error("File source cannot be converted to an object URL.");
  return URL.createObjectURL(t.blob);
}
function De(t, o) {
  o || URL.revokeObjectURL(t);
}
var or = {
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
function Ci(t) {
  return {
    ...or[t.locale || "en-US"],
    ...t.messages
  };
}
function Fe(t, o) {
  return t.replace(/\{(\w+)\}/g, (e, h) => String(o[h] ?? e));
}
var qn = "__ofvSafeSetImmediate__";
function Pi(t) {
  const o = t;
  return !!(o.__POWERED_BY_QIANKUN__ || o.__MICRO_APP_ENVIRONMENT__ || o.__POWERED_BY_WUJIE__ || o.__GARFISH__);
}
function zi(t) {
  let o = 1;
  const e = /* @__PURE__ */ new Map(), h = t.MessageChannel;
  if (typeof h == "function") {
    const i = new h();
    return i.port1.onmessage = (s) => {
      const l = e.get(s.data);
      l && (e.delete(s.data), l());
    }, {
      schedule(s, l) {
        const f = o++;
        return e.set(f, () => s(...l)), i.port2.postMessage(f), f;
      },
      cancel(s) {
        e.delete(s);
      }
    };
  }
  const a = /* @__PURE__ */ new Map();
  return {
    schedule(i, s) {
      const l = o++;
      return a.set(
        l,
        setTimeout(() => {
          a.delete(l), i(...s);
        }, 0)
      ), l;
    },
    cancel(i) {
      const s = a.get(i);
      s !== void 0 && (clearTimeout(s), a.delete(i));
    }
  };
}
function Oi(t = typeof window > "u" ? void 0 : window) {
  var a;
  if (!t || !Pi(t))
    return;
  const o = t;
  if ((a = o.setImmediate) != null && a[qn])
    return;
  const e = zi(t), h = (i, ...s) => e.schedule(i, s);
  h[qn] = !0, o.setImmediate = h, o.clearImmediate = (i) => e.cancel(i);
}
function sr() {
  return {
    name: "fallback",
    match() {
      return !0;
    },
    render(t) {
      var l, f;
      if ((f = (l = t.options).onUnsupported) == null || f.call(l, t.file), t.options.fallback === "custom" && t.options.renderFallback)
        return t.options.renderFallback(t);
      const o = fn(t.file), e = !!t.file.url, h = document.createElement("div");
      h.className = "ofv-fallback";
      const a = document.createElement("strong");
      a.textContent = t.options.fallback === "download" ? t.options.messages.downloadTitle : t.options.messages.unsupportedTitle;
      const i = Li(t.file, t.options.messages), s = document.createElement("a");
      return s.href = o, s.download = t.file.name, s.textContent = t.options.messages.downloadFile, h.append(a, i, s), t.viewport.classList.add("ofv-center"), t.viewport.append(h), t.options.fallback === "download" && s.focus(), {
        destroy() {
          t.viewport.classList.remove("ofv-center"), De(o, e);
        }
      };
    }
  };
}
function Li(t, o) {
  const e = document.createElement("dl");
  return e.className = "ofv-fallback-meta", _e(e, o.file, t.name || o.unnamedFile), _e(e, o.format, t.extension ? `.${t.extension}` : o.unknown), _e(e, o.mime, t.mimeType || o.undeclared), _e(e, o.size, t.size === void 0 ? o.unknown : Ri(t.size)), _e(e, o.source, t.url ? o.remoteUrl : o.localFile), e;
}
function _e(t, o, e) {
  const h = document.createElement("dt");
  h.textContent = o;
  const a = document.createElement("dd");
  a.textContent = e, t.append(h, a);
}
function Ri(t) {
  return t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(1)} KB` : `${(t / 1024 / 1024).toFixed(2)} MB`;
}
function Mi(t) {
  Oi();
  const o = Ti(t.container);
  Ai(o, t.width, t.height);
  const e = Ni(t.className);
  o.classList.add("ofv-root"), e.length > 0 && o.classList.add(...e);
  const h = ji(o, t.theme || "light"), a = document.createElement("div");
  a.className = "ofv-host";
  const i = document.createElement("div");
  i.className = "ofv-status", i.setAttribute("role", "status"), i.hidden = !0;
  const s = document.createElement("div");
  s.className = "ofv-status-chip";
  const l = document.createElement("span");
  l.className = "ofv-status-spinner", l.setAttribute("aria-hidden", "true");
  const f = document.createElement("span");
  f.className = "ofv-status-text", s.append(l, f), i.append(s);
  const y = document.createElement("div");
  y.className = "ofv-viewport";
  const S = Fi(t);
  let v = Vn(t.initialIndex || 0, S.length), p, u = !1;
  const _ = async (q) => {
    d || S.length === 0 || (v = Vn(q, S.length), await Y(v));
  }, c = Gi(
    t.toolbar,
    y,
    {
      getLength: () => S.length,
      next: () => _(v + 1),
      previous: () => _(v - 1),
      goToPage: (q) => {
        var k;
        return ((k = p == null ? void 0 : p.goToPage) == null ? void 0 : k.call(p, q)) ?? !1;
      },
      command: (q) => {
        var k;
        return (k = p == null ? void 0 : p.command) == null ? void 0 : k.call(p, q);
      },
      print: async () => {
        var k;
        if (u)
          return;
        u = !0;
        const q = p;
        try {
          await ((k = q == null ? void 0 : q.preparePrint) == null ? void 0 : k.call(q));
        } catch (F) {
          console.error("Failed to prepare file preview for printing:", F), u = !1;
          return;
        }
        u = !1, !(d || q !== p) && ia(y);
      }
    },
    t.locale || "en-US"
  );
  c && a.append(c.element), a.append(i, y), o.replaceChildren(a);
  const g = {
    ...t,
    fit: t.fit || "contain",
    fitWasProvided: t.fit !== void 0,
    fallback: t.fallback || "inline",
    zoom: Ui(t.zoom),
    messages: Ci(t)
  };
  let d = !1, w = 0, T;
  const P = Ii(
    y,
    (q) => !d && !!(p != null && p.command) && (p != null && p.canCommand ? p.canCommand(q) : !0),
    (q) => {
      var k;
      return (k = p == null ? void 0 : p.command) == null ? void 0 : k.call(p, q);
    }
  ), A = (q) => {
    i.hidden = !q, i.classList.remove("ofv-status-error"), f.textContent = q ? g.messages.loading : "";
  }, D = (q) => {
    i.hidden = !1, i.classList.add("ofv-status-error"), f.textContent = typeof q == "string" ? q : q.message;
  }, N = () => {
    var k;
    if (d)
      return;
    const q = Yn(y);
    (k = p == null ? void 0 : p.resize) == null || k.call(p, q);
  }, H = Wi(o, N), M = async (q, k = ++w) => {
    var V, j, rt;
    if (d || k !== w)
      return;
    nn(p), p = void 0, T == null || T.abort();
    const F = new AbortController();
    T = F, y.replaceChildren(), A(!0), c == null || c.update(q, v, S.length);
    const r = [...t.plugins || [], sr()], O = await fa(r, q);
    if (!(d || k !== w))
      try {
        const W = await O.render({
          host: a,
          viewport: y,
          file: q,
          size: Yn(y),
          options: g,
          toolbar: c == null ? void 0 : c.getContext(),
          signal: F.signal,
          setLoading: A,
          setError: D
        });
        if (d || k !== w) {
          nn(W);
          return;
        }
        T === F && (T = void 0), p = W, g.initialPage !== void 0 && ((V = W.goToPage) == null || V.call(W, g.initialPage)), A(!1), c == null || c.setCommandSupport(
          (it) => !!W.command && (W.canCommand ? W.canCommand(it) : !0)
        ), (j = t.onLoad) == null || j.call(t, q), N();
      } catch (W) {
        if (T === F && (T = void 0), d || k !== w)
          return;
        const it = W instanceof Error ? W : new Error(String(W));
        y.replaceChildren(), A(!1), D(it), (rt = t.onError) == null || rt.call(t, it, q);
      }
  };
  async function Y(q) {
    const k = ++w;
    T == null || T.abort(), T = void 0;
    const F = S[q], r = await Ei(F.file, F.fileName, F.mimeType);
    d || k !== w || await M(r, k);
  }
  return _(v), {
    async reload(q) {
      if (!d) {
        if (q !== void 0) {
          const k = S[v];
          S.splice(v, 1, Bi(q, k, t));
        }
        await Y(v);
      }
    },
    async next() {
      await _(v + 1);
    },
    async previous() {
      await _(v - 1);
    },
    goTo: _,
    goToPage(q) {
      var k;
      return d ? !1 : ((k = p == null ? void 0 : p.goToPage) == null ? void 0 : k.call(p, q)) ?? !1;
    },
    getCurrentIndex() {
      return v;
    },
    resize: N,
    destroy() {
      d = !0, w += 1, T == null || T.abort(), T = void 0, H.destroy(), P.destroy(), nn(p), c == null || c.destroy(), h.destroy(), o.replaceChildren(), o.classList.remove("ofv-root"), e.length > 0 && o.classList.remove(...e);
    }
  };
}
function Ii(t, o, e) {
  let i = 0, s;
  const l = (v) => {
    if (v.defaultPrevented || !v.ctrlKey && !v.metaKey || v.deltaY === 0)
      return;
    const p = v.deltaY < 0 ? "zoom-in" : "zoom-out";
    if (!o(p)) {
      i = 0;
      return;
    }
    v.cancelable && v.preventDefault();
    const u = v.deltaY * (v.deltaMode === 0 ? 1 : 40);
    i !== 0 && Math.sign(i) !== Math.sign(u) && (i = 0), i += u, !(Math.abs(i) < 40) && (e(p), i = 0);
  }, f = (v) => {
    s = v.touches.length === 2 ? en(v.touches) : void 0;
  }, y = (v) => {
    if (v.defaultPrevented || v.touches.length !== 2) {
      s = void 0;
      return;
    }
    const p = en(v.touches);
    if (!(p > 0))
      return;
    if (!(s && s > 0)) {
      s = p;
      return;
    }
    const u = p > s ? "zoom-in" : "zoom-out";
    if (!o(u))
      return;
    v.cancelable && v.preventDefault();
    const _ = p / s;
    _ < 1.08 && _ > 1 / 1.08 || (e(u), s = p);
  }, S = (v) => {
    s = v.touches.length === 2 ? en(v.touches) : void 0;
  };
  return t.addEventListener("wheel", l, { passive: !1 }), t.addEventListener("touchstart", f, { passive: !0 }), t.addEventListener("touchmove", y, { passive: !1 }), t.addEventListener("touchend", S, { passive: !0 }), t.addEventListener("touchcancel", S, { passive: !0 }), {
    destroy() {
      t.removeEventListener("wheel", l), t.removeEventListener("touchstart", f), t.removeEventListener("touchmove", y), t.removeEventListener("touchend", S), t.removeEventListener("touchcancel", S);
    }
  };
}
function en(t) {
  const o = t.item(0), e = t.item(1);
  return o && e ? Math.hypot(e.clientX - o.clientX, e.clientY - o.clientY) : 0;
}
function Ni(t) {
  return (t == null ? void 0 : t.trim().split(/\s+/).filter(Boolean)) ?? [];
}
function nn(t) {
  if (t)
    try {
      t.destroy();
    } catch (o) {
      console.error("Failed to destroy file preview instance:", o);
    }
}
function Fi(t) {
  if (t.files && t.files.length > 0)
    return t.files.map(
      (o) => Di(o) ? o : {
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
function Di(t) {
  return typeof t == "object" && t !== null && "file" in t;
}
function Bi(t, o, e) {
  return typeof File < "u" && t instanceof File ? { file: t } : {
    file: t,
    fileName: (o == null ? void 0 : o.fileName) || e.fileName,
    mimeType: (o == null ? void 0 : o.mimeType) || e.mimeType
  };
}
function Vn(t, o) {
  return o <= 0 ? 0 : Math.min(Math.max(t, 0), o - 1);
}
function Ui(t) {
  return typeof t == "number" && Number.isFinite(t) && t > 0 ? t : 1;
}
function ji(t, o) {
  var i;
  const e = (i = window.matchMedia) == null ? void 0 : i.call(window, "(prefers-color-scheme: dark)"), h = ["ofv-theme-light", "ofv-theme-dark"], a = () => {
    t.classList.remove(...h);
    const s = o === "auto" && (e != null && e.matches) ? "dark" : o === "auto" ? "light" : o;
    t.classList.add(`ofv-theme-${s}`);
  };
  return a(), o === "auto" && Hi(e, a), {
    destroy() {
      o === "auto" && Zi(e, a), t.classList.remove(...h);
    }
  };
}
function Wi(t, o) {
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
function Hi(t, o) {
  var e;
  if (t) {
    if (typeof t.addEventListener == "function") {
      t.addEventListener("change", o);
      return;
    }
    (e = t.addListener) == null || e.call(t, o);
  }
}
function Zi(t, o) {
  var e;
  if (t) {
    if (typeof t.removeEventListener == "function") {
      t.removeEventListener("change", o);
      return;
    }
    (e = t.removeListener) == null || e.call(t, o);
  }
}
function Gi(t, o, e, h) {
  if (!t)
    return;
  const a = typeof t == "boolean" ? { zoom: !0, rotate: !0, download: !0, fullscreen: !0, print: !0, search: !0 } : t, i = document.createElement("div");
  i.className = "ofv-toolbar", i.setAttribute("role", "toolbar"), i.setAttribute("aria-label", Be[h].ariaLabel);
  let s, l = 0, f = e.getLength(), y, S, v, p, u, _;
  const c = [], g = [], d = [], w = Qi(o);
  let T, P, A = (x) => !1;
  const D = () => $i({
    file: s,
    index: l,
    length: f,
    viewport: o,
    queue: e,
    element: i,
    search: w,
    canCommand: A,
    refreshCommandSupport: j,
    zoom: _,
    setZoom: O
  }), N = (x, J, B, Z, lt, ft = !1) => {
    const st = document.createElement("button");
    return st.type = "button", rn(st, x, lt, ft), st.title = J, st.setAttribute("aria-label", J), Z && (st.className = Z), st.addEventListener("click", B), i.append(st), d.push(() => st.removeEventListener("click", B)), st;
  }, H = (x, J, B, Z) => {
    const lt = N(J, B, () => {
      e.command(Z);
    }, void 0, te(a, x), x !== "zoom-reset");
    lt.disabled = !0, c.push({ button: lt, command: Z });
  }, M = (x) => {
    var J, B;
    if (!Ji(x)) {
      const Z = (J = a.actions) == null ? void 0 : J.find((lt) => lt.id === x);
      Z && Y(Z);
      return;
    }
    if (x === "previous" && e.getLength() > 1) {
      S = N(
        Mt(a, h, "previous"),
        It(a, h, "previous"),
        () => void e.previous(),
        void 0,
        te(a, "previous"),
        !0
      );
      return;
    }
    if (x === "next" && e.getLength() > 1) {
      v = N(
        Mt(a, h, "next"),
        It(a, h, "next"),
        () => void e.next(),
        void 0,
        te(a, "next"),
        !0
      );
      return;
    }
    if (x === "queue" && e.getLength() > 1) {
      y = document.createElement("span"), y.className = "ofv-toolbar-queue", i.append(y);
      return;
    }
    if (x === "zoom-out" && a.zoom) {
      H(x, Mt(a, h, x), It(a, h, x), "zoom-out");
      return;
    }
    if (x === "zoom-in" && a.zoom) {
      H(x, Mt(a, h, x), It(a, h, x), "zoom-in");
      return;
    }
    if (x === "zoom-reset" && a.zoom) {
      H(x, Mt(a, h, x), It(a, h, x), "zoom-reset"), p = (B = c[c.length - 1]) == null ? void 0 : B.button, V();
      return;
    }
    if (x === "rotate-left" && a.rotate) {
      H(x, Mt(a, h, x), It(a, h, x), "rotate-left");
      return;
    }
    if (x === "rotate-right" && a.rotate) {
      H(x, Mt(a, h, x), It(a, h, x), "rotate-right");
      return;
    }
    if (x === "download" && a.download !== !1) {
      N(
        Mt(a, h, x),
        It(a, h, x),
        () => D().download(),
        void 0,
        te(a, "download"),
        !0
      );
      return;
    }
    if (x === "fullscreen" && a.fullscreen !== !1) {
      u = N(
        Mt(a, h, x),
        It(a, h, x),
        () => D().fullscreen(),
        void 0,
        te(a, "fullscreen"),
        !0
      ), W();
      return;
    }
    if (x === "print" && a.print) {
      N(
        Mt(a, h, x),
        It(a, h, x),
        () => D().print(),
        void 0,
        te(a, "print"),
        !0
      );
      return;
    }
    if (x === "search" && a.search !== !1) {
      q();
      return;
    }
  }, Y = (x) => {
    const J = N(
      x.label,
      x.title || x.label,
      () => void x.onClick(D()),
      x.className,
      x.icon
    );
    J.dataset.ofvToolbarAction = x.id, g.push({ button: J, action: x });
  }, q = () => {
    const x = document.createElement("div");
    x.className = "ofv-toolbar-search", x.title = It(a, h, "search");
    const J = document.createElement("span");
    J.className = "ofv-toolbar-search-icon", J.setAttribute("aria-hidden", "true"), J.append(cr(un.search ?? "")), x.append(J);
    const B = document.createElement("input");
    B.type = "search", B.placeholder = Mt(a, h, "search"), B.setAttribute("aria-label", It(a, h, "search"));
    const Z = document.createElement("span");
    Z.className = "ofv-toolbar-search-count", T = B, P = Z;
    const lt = () => {
      const ft = w.search(B.value);
      Z.textContent = B.value ? String(ft) : "";
    };
    B.addEventListener("input", lt), x.append(B, Z), i.append(x), d.push(() => B.removeEventListener("input", lt));
  };
  (() => {
    if (a.render) {
      i.replaceChildren();
      const J = a.render(D());
      J && i.append(J);
      return;
    }
    const x = qi(a, e.getLength());
    if (a.order)
      x.forEach(M);
    else {
      const J = /* @__PURE__ */ new Set();
      for (const B of Yi) {
        const Z = B.filter((ft) => x.includes(ft));
        if (Z.length === 0)
          continue;
        const lt = i.childElementCount;
        for (const ft of Z)
          J.add(ft), M(ft);
        if (lt > 0 && i.childElementCount > lt) {
          const ft = document.createElement("span");
          ft.className = "ofv-toolbar-sep", ft.setAttribute("aria-hidden", "true"), i.insertBefore(ft, i.children[lt]);
        }
      }
      x.filter((B) => !J.has(B)).forEach(M);
    }
    Vi(a).forEach(Y);
  })();
  const F = () => {
    const x = D();
    for (const { button: J, action: B } of g)
      J.disabled = Xn(B.disabled, x), J.hidden = Xn(B.hidden, x);
  }, r = () => {
    w.clear(), T && (T.value = ""), P && (P.textContent = "");
  };
  function O(x) {
    _ = typeof x == "number" && Number.isFinite(x) && x > 0 ? x : void 0, V(), F(), I();
  }
  function V() {
    var x;
    p && (rn(
      p,
      _ === void 0 ? Mt(a, h, "zoom-reset") : lr(_),
      (x = a.icons) == null ? void 0 : x["zoom-reset"]
    ), p.classList.add("ofv-toolbar-zoom-reset"));
  }
  function j() {
    c.forEach(({ button: x, command: J }) => {
      x.disabled = !A(J);
    }), F(), I();
  }
  function rt() {
    return !!(typeof document < "u" && i.parentElement && document.fullscreenElement === i.parentElement);
  }
  function W() {
    var lt, ft;
    if (!u)
      return;
    const x = rt(), J = x ? "exit-fullscreen" : "fullscreen", B = x ? ((lt = a.icons) == null ? void 0 : lt["exit-fullscreen"]) ?? ((ft = a.icons) == null ? void 0 : ft.fullscreen) ?? un["exit-fullscreen"] : te(a, "fullscreen");
    rn(u, Mt(a, h, J), B, !0);
    const Z = It(a, h, J);
    u.title = Z, u.setAttribute("aria-label", Z), u.setAttribute("aria-pressed", String(x));
  }
  const it = () => {
    W(), I();
  };
  typeof document < "u" && (document.addEventListener("fullscreenchange", it), d.push(() => document.removeEventListener("fullscreenchange", it)));
  const I = () => {
    if (!a.render)
      return;
    i.replaceChildren();
    const x = a.render(D());
    x && i.append(x);
  };
  return {
    element: i,
    update(x, J, B) {
      s = x, l = J, f = B, _ = void 0, V(), r(), c.forEach(({ button: Z }) => {
        Z.disabled = !0;
      }), y && (y.textContent = `${J + 1} / ${B}`), S && (S.disabled = J <= 0), v && (v.disabled = J >= B - 1), F(), I();
    },
    setCommandSupport(x) {
      A = x, !A("zoom-in") && !A("zoom-out") && !A("zoom-reset") && (_ = void 0, V()), j();
    },
    getContext: D,
    setZoom: O,
    destroy() {
      w.clear();
      for (const x of d)
        x();
      i.replaceChildren();
    }
  };
}
function $i({
  file: t,
  index: o,
  length: e,
  viewport: h,
  queue: a,
  element: i,
  search: s,
  canCommand: l,
  refreshCommandSupport: f,
  zoom: y,
  setZoom: S
}) {
  return {
    file: t,
    index: o,
    length: e,
    viewport: h,
    canPrevious: o > 0,
    canNext: o < e - 1,
    isFullscreen: !!(typeof document < "u" && i.parentElement && document.fullscreenElement === i.parentElement),
    zoom: y,
    zoomLabel: y === void 0 ? void 0 : lr(y),
    async previous() {
      await a.previous();
    },
    async next() {
      await a.next();
    },
    goToPage: a.goToPage,
    command: a.command,
    canCommand: l,
    refreshCommandSupport: f,
    setZoom: S,
    download() {
      t && ua(t);
    },
    fullscreen() {
      var p, u;
      const v = i.parentElement;
      v && (typeof document < "u" && document.fullscreenElement === v ? (p = document.exitFullscreen) == null || p.call(document) : (u = v.requestFullscreen) == null || u.call(v));
    },
    print() {
      a.print();
    },
    search: s.search,
    clearSearch: s.clear
  };
}
var jt = (t) => `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${t}</svg>`, un = {
  previous: jt('<path d="M9.8 3.8 5.6 8l4.2 4.2"/>'),
  next: jt('<path d="M6.2 3.8 10.4 8l-4.2 4.2"/>'),
  "zoom-out": jt(
    '<circle cx="7.2" cy="7.2" r="4.4"/><path d="M13.5 13.5l-3.2-3.2"/><path d="M5.4 7.2h3.6"/>'
  ),
  "zoom-in": jt(
    '<circle cx="7.2" cy="7.2" r="4.4"/><path d="M13.5 13.5l-3.2-3.2"/><path d="M5.4 7.2h3.6"/><path d="M7.2 5.4v3.6"/>'
  ),
  "rotate-left": jt(
    '<path d="M2.2 8a5.8 5.8 0 1 0 1.7-4.1L2.2 5.6"/><path d="M2.2 2.2v3.4h3.4"/>'
  ),
  "rotate-right": jt(
    '<path d="M13.8 8a5.8 5.8 0 1 1-1.7-4.1l1.7 1.7"/><path d="M13.8 2.2v3.4h-3.4"/>'
  ),
  download: jt(
    '<path d="M8 2.6v6.9"/><path d="m4.9 6.6 3.1 3.1 3.1-3.1"/><path d="M2.9 11.2v1a1.3 1.3 0 0 0 1.3 1.3h7.6a1.3 1.3 0 0 0 1.3-1.3v-1"/>'
  ),
  fullscreen: jt(
    '<path d="M6 2.9H4.2A1.3 1.3 0 0 0 2.9 4.2V6"/><path d="M10 2.9h1.8a1.3 1.3 0 0 1 1.3 1.3V6"/><path d="M6 13.1H4.2a1.3 1.3 0 0 1-1.3-1.3V10"/><path d="M10 13.1h1.8a1.3 1.3 0 0 0 1.3-1.3V10"/>'
  ),
  "exit-fullscreen": jt(
    '<path d="M2.9 6h1.8A1.3 1.3 0 0 0 6 4.7V2.9"/><path d="M13.1 6h-1.8A1.3 1.3 0 0 1 10 4.7V2.9"/><path d="M2.9 10h1.8A1.3 1.3 0 0 1 6 11.3v1.8"/><path d="M13.1 10h-1.8a1.3 1.3 0 0 0-1.3 1.3v1.8"/>'
  ),
  print: jt(
    '<path d="M4.7 5.8V2.9h6.6v2.9"/><path d="M4.7 11.4H3.5a1.3 1.3 0 0 1-1.3-1.3V7.2a1.4 1.4 0 0 1 1.4-1.4h8.8a1.4 1.4 0 0 1 1.4 1.4v2.9a1.3 1.3 0 0 1-1.3 1.3h-1.2"/><path d="M4.7 9.5h6.6v3.6H4.7z"/>'
  ),
  search: jt('<circle cx="7.2" cy="7.2" r="4.4"/><path d="M13.5 13.5l-3.2-3.2"/>')
};
function te(t, o) {
  var e;
  return ((e = t.icons) == null ? void 0 : e[o]) ?? un[o];
}
var Yi = [
  ["previous", "next", "queue"],
  ["zoom-out", "zoom-in", "zoom-reset", "rotate-left", "rotate-right"],
  ["download", "fullscreen", "print"]
], Be = {
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
function Mt(t, o, e) {
  var h;
  return ((h = t.labels) == null ? void 0 : h[e]) ?? Be[o].labels[e];
}
function It(t, o, e) {
  var h, a;
  return ((h = t.titles) == null ? void 0 : h[e]) ?? ((a = t.labels) == null ? void 0 : a[e]) ?? Be[o].titles[e];
}
function lr(t) {
  return `${Math.round(t * 100)}%`;
}
function qi(t, o) {
  if (t.order)
    return t.order;
  const e = [];
  return o > 1 && e.push("previous", "next", "queue"), t.zoom && e.push("zoom-out", "zoom-in", "zoom-reset"), t.rotate && e.push("rotate-left", "rotate-right"), t.download !== !1 && e.push("download"), t.fullscreen !== !1 && e.push("fullscreen"), t.print && e.push("print"), t.search !== !1 && e.push("search"), e;
}
function Vi(t) {
  return t.order || !t.actions ? [] : [...t.actions].sort((o, e) => (o.order ?? 0) - (e.order ?? 0));
}
function Xn(t, o) {
  return typeof t == "function" ? t(o) : !!t;
}
function rn(t, o, e, h = !1) {
  if (t.replaceChildren(), t.classList.toggle("ofv-toolbar-icon-button", !!e && h), !e) {
    t.textContent = o;
    return;
  }
  const a = document.createElement("span");
  a.className = "ofv-toolbar-icon", a.setAttribute("aria-hidden", "true"), typeof e == "string" ? a.append(cr(e)) : a.append(e.cloneNode(!0));
  const i = document.createElement("span");
  i.className = "ofv-toolbar-label", i.textContent = o, t.append(a, i);
}
var Xi = /* @__PURE__ */ new Set([
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
]), Kn = /* @__PURE__ */ new Set([
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
function cr(t) {
  const o = document.createElement("template");
  o.innerHTML = t.trim();
  const e = document.createDocumentFragment();
  for (const h of Array.from(o.content.childNodes)) {
    const a = ur(h);
    a && e.append(a);
  }
  return e;
}
function ur(t) {
  if (t.nodeType === Node.TEXT_NODE) {
    const h = t.textContent || "";
    return h.trim() ? document.createTextNode(h) : null;
  }
  if (!(t instanceof Element))
    return null;
  const o = t.tagName.toLowerCase();
  if (!Xi.has(o))
    return null;
  const e = document.createElementNS("http://www.w3.org/2000/svg", o);
  for (const h of Array.from(t.attributes))
    Ki(h.name, h.value) && e.setAttribute(h.name, h.value);
  for (const h of Array.from(t.childNodes)) {
    const a = ur(h);
    a && e.append(a);
  }
  return e;
}
function Ki(t, o) {
  const e = t.toLowerCase();
  return e.startsWith("on") || e.includes(":") || !Kn.has(t) && !Kn.has(e) && !e.startsWith("data-") ? !1 : !/^\s*(?:javascript|data:text\/html|vbscript):/i.test(o);
}
function Ji(t) {
  return t in Be["en-US"].labels;
}
function Qi(t) {
  const o = "ofv-search-match", e = () => {
    const a = an(t).flatMap((i) => [
      ...i.querySelectorAll(`mark.${o}`)
    ]);
    for (const i of a)
      i.replaceWith(document.createTextNode(i.textContent || ""));
    an(t).forEach((i) => i.normalize());
  };
  return { search: (a) => {
    var y;
    e();
    const i = a.trim();
    if (!i)
      return 0;
    const s = an(t).flatMap((S) => ta(S));
    let l = 0, f;
    for (const S of s) {
      const v = S.nodeValue || "", p = v.toLowerCase(), u = i.toLowerCase();
      let _ = 0, c = p.indexOf(u, _);
      if (c < 0)
        continue;
      const g = document.createDocumentFragment();
      for (; c >= 0; ) {
        c > _ && g.append(document.createTextNode(v.slice(_, c)));
        const d = document.createElement("mark");
        d.className = o, d.textContent = v.slice(c, c + i.length), g.append(d), f || (f = d), l += 1, _ = c + i.length, c = p.indexOf(u, _);
      }
      _ < v.length && g.append(document.createTextNode(v.slice(_))), S.replaceWith(g);
    }
    return (y = f == null ? void 0 : f.scrollIntoView) == null || y.call(f, { block: "center", inline: "nearest" }), l;
  }, clear: e };
}
function an(t) {
  var e;
  const o = [t];
  for (const h of t.querySelectorAll("iframe"))
    try {
      const a = (e = h.contentDocument) == null ? void 0 : e.body;
      a && o.push(a);
    } catch {
    }
  return o;
}
function ta(t) {
  const o = [], e = document.createTreeWalker(t, NodeFilter.SHOW_TEXT, {
    acceptNode(a) {
      var s;
      const i = a.parentElement;
      return !i || !((s = a.nodeValue) != null && s.trim()) || ["SCRIPT", "STYLE", "TEXTAREA", "INPUT", "BUTTON"].includes(i.tagName) || ea(i, t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    }
  });
  let h = e.nextNode();
  for (; h; )
    o.push(h), h = e.nextNode();
  return o;
}
function ea(t, o) {
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
var na = 15e3, ra = 5 * 6e4;
function ia(t) {
  var w;
  const o = document.createElement("iframe");
  o.className = "ofv-print-frame", o.setAttribute("aria-hidden", "true"), document.body.append(o);
  const e = t.cloneNode(!0);
  ca(t, e), e.classList.add("ofv-print-root", "ofv-root");
  const h = t.querySelector(".ofv-docx-page-frame > section.ofv-docx"), a = h ? getComputedStyle(h) : void 0, i = Number.parseFloat((a == null ? void 0 : a.width) || ""), s = Number.parseFloat((a == null ? void 0 : a.height) || ""), l = Number.isFinite(i) && Number.isFinite(s) ? `size: ${i}px ${s}px;` : "", f = e.querySelector(".ofv-pptx-viewer") || (e.classList.contains("ofv-pptx-viewer") ? e : null);
  let y = 960, S = 540, v = !1;
  if (f) {
    const T = f.querySelectorAll("[data-slide-index]");
    if (T.length > 0) {
      v = !0;
      const P = T[0].firstElementChild, A = P == null ? void 0 : P.firstElementChild;
      A && (y = parseInt(A.style.width) || 960, S = parseInt(A.style.height) || 540), T.forEach((D) => {
        const N = D;
        N.style.width = "100%", N.style.margin = "0 0 20px 0";
        const H = N.firstElementChild;
        if (H) {
          H.style.width = `${y}px`, H.style.height = `${S}px`, H.style.boxShadow = "none", H.style.margin = "0 auto";
          const M = H.firstElementChild;
          M && (M.style.transform = "none", M.style.width = `${y}px`, M.style.height = `${S}px`);
        }
      });
    }
  }
  const p = o.contentDocument;
  if (!p) {
    o.remove();
    return;
  }
  p.open(), p.write(`<!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Print preview</title>
      </head>
      <body></body>
    </html>`), p.close(), Array.from(document.querySelectorAll("style, link[rel='stylesheet']")).forEach((T) => {
    p.head.appendChild(T.cloneNode(!0));
  });
  const u = p.createElement("style");
  if (u.textContent = `
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
  `, p.head.appendChild(u), h) {
    const T = p.createElement("style");
    T.textContent = `
      @media print {
        @page {
          ${l}
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
    `, p.head.appendChild(T);
  }
  if (v) {
    const T = p.createElement("style");
    T.textContent = `
      @media print {
        @page {
          size: ${y > S ? "landscape" : "portrait"};
          margin: 0;
        }
        html, body {
          background: #fff;
        }
        body {
          width: ${y}px !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .ofv-print-root {
          width: ${y}px !important;
          padding: 0 !important;
        }
        .ofv-pptx-viewer {
          width: ${y}px !important;
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
    `, p.head.appendChild(T);
  }
  p.body.append(e);
  const _ = o.contentWindow;
  if (!_) {
    o.remove();
    return;
  }
  let c = !1, g;
  const d = () => {
    var T;
    c || (c = !0, window.clearTimeout(g), (T = _.removeEventListener) == null || T.call(_, "afterprint", d), o.remove());
  };
  (w = _.addEventListener) == null || w.call(_, "afterprint", d, { once: !0 }), aa(p).then(() => {
    if (!(c || !o.isConnected)) {
      g = window.setTimeout(d, ra);
      try {
        _.focus(), _.print();
      } catch {
        d();
      }
    }
  });
}
async function aa(t) {
  var e;
  const o = [];
  for (const h of Array.from(t.images))
    o.push(oa(h));
  for (const h of Array.from(t.querySelectorAll("link[rel='stylesheet']")))
    o.push(sa(h));
  (e = t.fonts) != null && e.ready && o.push(Promise.resolve(t.fonts.ready).then(() => {
  }, () => {
  })), await la(o), t.body.offsetHeight, await new Promise((h) => window.setTimeout(h, 0));
}
function oa(t) {
  return typeof t.decode == "function" ? t.decode().then(() => {
  }, () => {
  }) : t.complete ? Promise.resolve() : fr(t);
}
function sa(t) {
  try {
    if (t.sheet)
      return Promise.resolve();
  } catch {
  }
  return fr(t);
}
function fr(t) {
  return new Promise((o) => {
    const e = () => {
      t.removeEventListener("load", e), t.removeEventListener("error", e), o();
    };
    t.addEventListener("load", e, { once: !0 }), t.addEventListener("error", e, { once: !0 });
  });
}
function la(t) {
  return t.length === 0 ? Promise.resolve() : new Promise((o) => {
    let e = !1;
    const h = () => {
      e || (e = !0, window.clearTimeout(a), o());
    }, a = window.setTimeout(h, na);
    Promise.all(t).then(h, h);
  });
}
function ca(t, o) {
  const e = [...t.querySelectorAll("canvas")], h = [...o.querySelectorAll("canvas")];
  e.forEach((a, i) => {
    const s = h[i];
    if (!s)
      return;
    const l = document.createElement("img");
    l.className = s.className, l.alt = "Canvas preview page";
    try {
      l.src = a.toDataURL("image/png");
    } catch {
      return;
    }
    l.width = a.width, l.height = a.height, s.replaceWith(l);
  });
}
function ua(t) {
  const o = fn(t), e = !!t.url, h = document.createElement("a");
  h.href = o, h.download = t.name, h.rel = "noopener", h.hidden = !0, document.body.append(h), h.click(), window.setTimeout(() => {
    h.remove(), De(o, e);
  }, 0);
}
async function fa(t, o) {
  for (const e of t)
    if (await e.match(o))
      return e;
  return sr();
}
function da(t, o = 0.1, e = 8) {
  return Math.min(e, Math.max(o, t.options.zoom));
}
function ha(t, o, e = {}) {
  const h = document.createElement("div");
  h.className = "ofv-fallback ofv-encrypted";
  const a = document.createElement("strong");
  a.textContent = e.title || "文件已加密，无法在线预览";
  const i = document.createElement("span");
  i.textContent = e.message || "请下载后在本地输入密码打开，或上传解密后的文件。";
  const s = document.createElement("dl");
  s.className = "ofv-fallback-meta ofv-encrypted-meta", Jn(s, "文件", t.name || "未命名文件"), Jn(s, "格式", t.extension ? `.${t.extension}` : t.mimeType || "未知");
  const l = document.createElement("a");
  return l.href = o, l.download = t.name, l.textContent = e.action || "下载文件", h.append(a, i, s, l), h;
}
function pa(t) {
  const o = t instanceof Error ? t.message : String(t || ""), e = typeof t == "object" && t !== null && "name" in t ? String(t.name) : "";
  return /\b(password|encrypted|encrypt|protected|decrypt|permission|加密|密码|受保护)\b/i.test(`${e} ${o}`);
}
function Jn(t, o, e) {
  const h = document.createElement("dt");
  h.textContent = o;
  const a = document.createElement("dd");
  a.textContent = e, t.append(h, a);
}
function ma(t, o) {
  return [
    t[0] * o[0] + t[2] * o[1],
    t[1] * o[0] + t[3] * o[1],
    t[0] * o[2] + t[2] * o[3],
    t[1] * o[2] + t[3] * o[3],
    t[0] * o[4] + t[2] * o[5] + t[4],
    t[1] * o[4] + t[3] * o[5] + t[5]
  ];
}
function ga(t = {}) {
  return {
    name: "pdf",
    match(o) {
      return o.mimeType === "application/pdf" || o.extension === "pdf";
    },
    async render(o) {
      const e = Sa(t), h = fn(o.file), a = !!o.file.url;
      return va({
        ...e,
        fileName: o.file.name,
        fileUrl: h,
        fileSize: o.file.size,
        isExternal: a,
        viewport: o.viewport,
        size: o.size,
        // A scrolling PDF reader historically defaulted to fit-width. Keep
        // that behavior when the host did not choose a fit mode, while still
        // honoring explicit contain/height/cover/scale-down requests.
        fit: o.options.fitWasProvided ? o.options.fit : "width",
        zoom: o.options.zoom,
        toolbar: o.toolbar,
        messages: o.options.messages,
        revokeUrlOnDestroy: !0
      });
    }
  };
}
async function va(t) {
  const o = Ia(t.compatibilityMode);
  o && Na();
  const e = t.pdfjs || (o ? await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/pdfjs-legacy.js") : await import("/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/pdfjs.js")), h = { ...or["en-US"], ...t.messages };
  Ma(e, t.workerSrc, t.legacyWorkerSrc, o);
  const a = document.createElement("div");
  if (a.className = "ofv-pdf-viewer", t.title) {
    const r = document.createElement("strong");
    r.className = "ofv-pdf-viewer-title", r.textContent = t.title, a.append(r);
  }
  const i = document.createElement("div");
  i.className = "ofv-pdf-summary", i.hidden = !0, i.setAttribute("aria-hidden", "true"), i.style.display = "none";
  const s = document.createElement("div");
  s.className = "ofv-pdf ofv-pdf-pages", a.append(i, s), t.viewport.append(a);
  const l = (r) => {
    a.remove();
    const O = {
      source: t.fileUrl,
      name: t.fileName,
      extension: t.fileName.includes(".") && t.fileName.split(".").pop() || "pdf",
      mimeType: "application/pdf",
      size: t.fileSize,
      url: t.fileUrl
    }, V = pa(r) ? ha(O, t.fileUrl, {
      title: t.encryptedTitle || h.pdfEncryptedTitle,
      message: t.encryptedMessage || h.pdfEncryptedMessage,
      action: t.encryptedAction || h.pdfDownload
    }) : Ca(
      t.fileName,
      t.fileUrl,
      La(r, h),
      h,
      t.fallbackTitle,
      t.webFallbackScripts
    );
    V.classList.contains("ofv-pdf-web-fallback") || t.viewport.classList.add("ofv-center"), t.viewport.append(V);
  };
  let f, y;
  try {
    const r = t.useFetchData ? await Ta(t.fileUrl) : void 0, O = {
      ...r ? { data: r } : { url: t.fileUrl },
      cMapUrl: t.cMapUrl ?? `https://cdn.jsdelivr.net/npm/pdfjs-dist@${e.version}/cmaps/`,
      cMapPacked: t.cMapPacked ?? !0,
      standardFontDataUrl: t.standardFontDataUrl ?? `https://cdn.jsdelivr.net/npm/pdfjs-dist@${e.version}/standard_fonts/`,
      ...t.wasmUrl === void 0 ? {} : { wasmUrl: t.wasmUrl },
      useSystemFonts: t.useSystemFonts ?? !0,
      disableStream: t.disableStream,
      disableAutoFetch: t.disableAutoFetch,
      disableRange: t.disableRange,
      rangeChunkSize: t.rangeChunkSize
    };
    f = e.getDocument(O), y = await f.promise.catch((V) => {
      l(V);
    });
  } catch (r) {
    l(r);
  }
  if (!y)
    return {
      canCommand() {
        return !1;
      },
      command() {
        return !1;
      },
      resize() {
      },
      destroy() {
        t.viewport.classList.remove("ofv-center"), on(f), t.revokeUrlOnDestroy && De(t.fileUrl, !!t.isExternal);
      }
    };
  const S = y, v = [];
  for (let r = 1; r <= S.numPages; r += 1)
    try {
      const O = await S.getPage(r), V = O.getViewport({ scale: 1 });
      v.push({
        width: V.width,
        height: V.height,
        rotation: xa(O)
      });
    } catch {
      v.push({ width: 612, height: 792, rotation: 0 });
    }
  const p = [];
  let u = null, _, c = t.size, g = da({ options: { zoom: t.zoom ?? 1 } }, 0.25, 4), d = 0, w = 1;
  const T = (r) => s.clientWidth > 0 ? s.clientWidth : r.width, P = (r) => s.clientHeight > 0 ? s.clientHeight : r.height, A = (r, O = !0) => {
    var rt;
    w = Math.min(S.numPages, Math.max(1, Math.round(r) || 1)), D.setCurrent(w);
    const V = (rt = p[w - 1]) == null ? void 0 : rt.wrapper;
    if (!O || !V)
      return !0;
    Y(w - 1, c);
    const j = Math.max(0, V.offsetTop - 16);
    return typeof s.scrollTo == "function" ? s.scrollTo({ top: j, behavior: "smooth" }) : s.scrollTop = j, !0;
  }, D = Ra(S.numPages, h, (r) => A(r));
  a.insertBefore(D.element, i);
  const N = () => {
    const O = s.getBoundingClientRect().top + Math.min(Math.max(s.clientHeight * 0.25, 40), 180);
    let V = w, j = Number.POSITIVE_INFINITY;
    p.forEach((rt, W) => {
      const it = Math.abs(rt.wrapper.getBoundingClientRect().top - O);
      it < j && (j = it, V = W + 1);
    }), V !== w && (w = V, D.setCurrent(w));
  };
  s.addEventListener("scroll", N, { passive: !0 });
  const H = () => {
    var r;
    ya(i, S.numPages, v, t.fit, g, h), (r = t.toolbar) == null || r.setZoom(g);
  }, M = (r) => {
    const O = p[r];
    if (!(!O || !O.rendered)) {
      if (O.renderTask) {
        try {
          O.renderTask.cancel();
        } catch {
        }
        O.renderTask = null;
      }
      O.canvas = null, O.rendered = !1, O.wrapper.replaceChildren(), O.wrapper.append(
        Ne("ofv-pdf-skeleton", Fe(h.pdfPageLoading, { page: r + 1 }))
      );
    }
  }, Y = async (r, O) => {
    const V = p[r];
    if (!V) return;
    for (; V.renderPromise; )
      await V.renderPromise;
    if (V.rendered) return;
    V.rendered = !0;
    const j = (async () => {
      try {
        const rt = await S.getPage(r + 1), W = v[r], it = Qn(
          W,
          t.fit,
          T(O),
          P(O),
          g,
          d
        ), I = rt.getViewport({ scale: it, rotation: Ea(W, d) }), x = ba(), J = Math.floor(I.width), B = Math.floor(I.height), Z = document.createElement("canvas");
        Z.className = "ofv-pdf-page", Z.width = Math.floor(J * x), Z.height = Math.floor(B * x), Z.style.width = `${J}px`, Z.style.height = `${B}px`;
        const lt = Z.getContext("2d");
        if (!lt)
          throw new Error("Canvas 2D context is not available.");
        V.wrapper.replaceChildren(Z), V.canvas = Z;
        const ft = rt.render({
          canvasContext: lt,
          viewport: I,
          transform: x === 1 ? void 0 : [x, 0, 0, x, 0, 0]
        });
        V.renderTask = ft, await ft.promise, V.renderTask = null;
        const st = await rt.getTextContent(), ut = document.createElement("div");
        ut.className = "ofv-pdf-text-layer", ut.style.width = `${J}px`, ut.style.height = `${B}px`, V.wrapper.appendChild(ut);
        for (const vt of st.items) {
          if (!("str" in vt)) continue;
          const bt = vt.str;
          if (!bt.trim()) continue;
          const Et = ma(I.transform, vt.transform), St = Math.sqrt(Et[2] * Et[2] + Et[3] * Et[3]), n = document.createElement("span");
          if (n.textContent = bt, n.style.fontSize = `${St}px`, n.style.lineHeight = "1", n.style.height = `${St}px`, n.style.fontFamily = vt.fontName || "sans-serif", n.style.left = `${Et[4]}px`, n.style.top = `${Et[5] - St}px`, n.style.transformOrigin = "0% 0%", ut.appendChild(n), vt.width) {
            const U = vt.width * it, L = n.offsetWidth || n.getBoundingClientRect().width;
            L > 0 && Math.abs(L - U) > 1 && (n.style.transform = `scaleX(${U / L})`);
          }
        }
        ut.childElementCount === 0 && Aa(Z, lt) && V.wrapper.appendChild(
          Ne(
            "ofv-pdf-empty",
            h.pdfPageEmpty
          )
        );
      } catch (rt) {
        console.error(`Failed to render PDF page ${r + 1}:`, rt), V.rendered = !1, V.wrapper.replaceChildren(
          Ne("ofv-pdf-error", h.pdfPageRenderFailed)
        );
      }
    })();
    V.renderPromise = j;
    try {
      await j;
    } finally {
      V.renderPromise === j && (V.renderPromise = null);
    }
  }, q = (r) => {
    u == null || u.disconnect(), H(), s.replaceChildren(), p.length = 0, typeof IntersectionObserver < "u" && (u = new IntersectionObserver(
      (O) => {
        O.forEach((V) => {
          const j = parseInt(V.target.getAttribute("data-page-index") || "0", 10), rt = p[j];
          rt && (V.isIntersecting ? rt.rendered || Y(j, r) : !_ && rt.rendered && S.numPages > 8 && M(j));
        });
      },
      {
        root: s,
        rootMargin: "400px 0px 400px 0px"
      }
    ));
    for (let O = 0; O < S.numPages; O++) {
      const V = v[O], j = hr(V, d), rt = pr(V, d), W = Qn(
        V,
        t.fit,
        T(r),
        P(r),
        g,
        d
      ), it = Math.floor(j * W), I = Math.floor(rt * W), x = document.createElement("div");
      x.className = "ofv-pdf-page-wrapper", x.setAttribute("data-page-index", String(O)), x.setAttribute("aria-label", Fe(h.pdfPageLabel, { page: O + 1 })), x.style.width = `${it}px`, x.style.height = `${I}px`, x.append(Ne("ofv-pdf-skeleton", Fe(h.pdfPageLoading, { page: O + 1 }))), s.appendChild(x), p.push({
        wrapper: x,
        canvas: null,
        renderTask: null,
        renderPromise: null,
        rendered: !1
      }), u ? u.observe(x) : Y(O, r);
    }
    u && window.setTimeout(() => {
      const O = S.numPages > 8 ? 2 : S.numPages;
      for (let V = 0; V < O; V++)
        Y(V, r);
    }, 0), A(w, !1);
  };
  q(t.size);
  const k = () => {
    s.scrollLeft = Math.max(0, (s.scrollWidth - s.clientWidth) / 2);
  };
  let F;
  return {
    goToPage(r) {
      return A(r);
    },
    canCommand(r) {
      return r === "zoom-in" || r === "zoom-out" || r === "zoom-reset" || r === "rotate-right" || r === "rotate-left";
    },
    command(r) {
      return r === "zoom-in" ? (g = Math.min(4, g + 0.15), q(c), k(), !0) : r === "zoom-out" ? (g = Math.max(0.25, g - 0.15), q(c), k(), !0) : r === "zoom-reset" ? (g = 1, d = 0, q(c), k(), !0) : r === "rotate-right" || r === "rotate-left" ? (d = Ue(d + (r === "rotate-right" ? 90 : -90)), q(c), !0) : !1;
    },
    resize(r) {
      c = r, window.clearTimeout(F), F = window.setTimeout(() => {
        q(r);
      }, 120);
    },
    preparePrint() {
      if (_)
        return _;
      const r = u;
      return r == null || r.disconnect(), _ = (async () => {
        let O = 0;
        const V = async () => {
          for (; O < p.length; ) {
            const rt = O;
            O += 1, await Y(rt, c);
          }
        }, j = Math.min(3, p.length);
        await Promise.all(Array.from({ length: j }, () => V()));
      })().finally(() => {
        if (u === r)
          for (const O of p)
            r == null || r.observe(O.wrapper);
        _ = void 0;
      }), _;
    },
    destroy() {
      var r;
      (r = t.toolbar) == null || r.setZoom(void 0), D.destroy(), s.removeEventListener("scroll", N), window.clearTimeout(F), u == null || u.disconnect(), p.forEach((O) => {
        if (O.renderTask)
          try {
            O.renderTask.cancel();
          } catch {
          }
      }), p.length = 0, on(S), on(f), t.revokeUrlOnDestroy && De(t.fileUrl, !!t.isExternal);
    }
  };
}
function on(t) {
  if (!t || typeof t != "object")
    return;
  const o = t;
  if (typeof o.destroy == "function") {
    o.destroy();
    return;
  }
  typeof o.cleanup == "function" && o.cleanup();
}
function ba() {
  return typeof window > "u" ? 1 : Math.max(2, Math.min(window.devicePixelRatio || 1, 2.5));
}
function _a(t) {
  if (!Number.isFinite(t) || t <= 0)
    return 1;
  const o = t < 160 ? 16 : 32;
  return Math.max(1, t - o);
}
function wa(t) {
  if (!Number.isFinite(t) || t <= 0)
    return 1;
  const o = t < 160 ? 16 : 32;
  return Math.max(1, t - o);
}
function Qn(t, o, e, h, a, i) {
  const s = _a(e) / hr(t, i), l = wa(h) / pr(t, i);
  let f;
  switch (o) {
    case "actual":
      f = 1;
      break;
    case "width":
      f = s;
      break;
    case "height":
      f = l;
      break;
    case "cover":
      f = Math.max(s, l);
      break;
    case "scale-down":
      f = Math.min(1, s, l);
      break;
    case "contain":
    default:
      f = Math.min(s, l);
      break;
  }
  return Math.max(0.05, Math.min(5, f * a));
}
function ya(t, o, e, h, a, i) {
  t.replaceChildren(), Ie(t, i.pdfSummaryPages, String(o));
  const s = ka(e);
  s && Ie(t, i.pdfSummaryPageSizes, s), Ie(t, i.pdfSummaryFit, h === "actual" ? i.pdfSummaryActualSize : i.pdfSummaryFitWidth), Ie(t, i.pdfSummaryZoom, `${Math.round(a * 100)}%`);
}
function Ie(t, o, e) {
  const h = document.createElement("span"), a = document.createElement("span");
  a.textContent = o;
  const i = document.createElement("strong");
  i.textContent = e, h.append(a, i), t.append(h);
}
function Ue(t) {
  return (t % 360 + 360) % 360;
}
function xa(t) {
  const o = Number(t.rotate);
  return Number.isFinite(o) ? Ue(o) : 0;
}
function Ea(t, o) {
  return Ue((t.rotation || 0) + o);
}
function dr(t) {
  const o = Ue(t);
  return o === 90 || o === 270;
}
function hr(t, o) {
  return dr(o) ? t.height : t.width;
}
function pr(t, o) {
  return dr(o) ? t.width : t.height;
}
function ka(t) {
  const o = /* @__PURE__ */ new Map();
  for (const e of t) {
    const h = `${Math.round(e.width)} x ${Math.round(e.height)}`;
    o.set(h, (o.get(h) || 0) + 1);
  }
  return [...o.entries()].sort((e, h) => h[1] - e[1]).slice(0, 4).map(([e, h]) => h > 1 ? `${e} (${h})` : e).join(", ");
}
function Sa(t) {
  return "getDocument" in t ? { pdfjs: t } : t;
}
async function Ta(t) {
  const o = await fetch(t);
  if (!o.ok)
    throw new Error(`Failed to load PDF data: ${o.status} ${o.statusText}`);
  return new Uint8Array(await o.arrayBuffer());
}
function Aa(t, o) {
  if (t.width === 0 || t.height === 0 || typeof o.getImageData != "function")
    return !1;
  try {
    const e = Math.min(t.width, 96), h = Math.min(t.height, 96), a = Math.max(1, Math.floor(t.width / e)), i = Math.max(1, Math.floor(t.height / h));
    let s = 0, l = 0;
    for (let f = 0; f < t.height; f += i)
      for (let y = 0; y < t.width; y += a) {
        const S = o.getImageData(y, f, 1, 1).data, v = S[0], p = S[1], u = S[2], _ = S[3];
        if (s += 1, _ > 8 && (v < 248 || p < 248 || u < 248) && (l += 1, l / s > 2e-3))
          return !1;
      }
    return s > 0;
  } catch {
    return !1;
  }
}
function Ne(t, o) {
  const e = document.createElement("div");
  return e.className = t, e.textContent = o, e;
}
function Ca(t, o, e, h, a = h.pdfPreviewFailedTitle, i = "auto") {
  if (Oa(o))
    return Pa(t, o, i);
  const s = document.createElement("div");
  s.className = "ofv-fallback";
  const l = document.createElement("strong");
  l.textContent = a;
  const f = document.createElement("span");
  f.textContent = `${e} ${t}`;
  const y = document.createElement("a");
  return y.href = o, y.download = t, y.textContent = h.pdfDownload, s.append(l, f, y), s;
}
function Pa(t, o, e) {
  const h = document.createElement("div");
  h.className = "ofv-pdf-web-fallback";
  const a = document.createElement("iframe");
  a.className = "ofv-pdf-web-fallback-frame", a.src = o, a.title = `${t} HTML preview`;
  const i = ["allow-forms", "allow-popups", "allow-presentation", "allow-same-origin"];
  return za(o, e) && i.push("allow-scripts"), a.setAttribute("sandbox", i.join(" ")), h.append(a), h;
}
function za(t, o) {
  if (o === "always")
    return !0;
  if (o === "never" || typeof window > "u" || typeof document > "u")
    return !1;
  try {
    const e = document.createElement("a");
    return e.href = t, e.origin !== window.location.origin;
  } catch {
    return !1;
  }
}
function Oa(t) {
  return /^https?:\/\//i.test(t);
}
function La(t, o) {
  const e = t instanceof Error ? t.message : String(t || ""), a = `${typeof t == "object" && t !== null && "name" in t ? String(t.name) : ""} ${e}`.toLowerCase();
  return a.includes("invalid") || a.includes("missing") || a.includes("corrupt") ? o.pdfCorruptedMessage : o.pdfCannotLoadMessage;
}
function Ra(t, o, e) {
  const h = document.createElement("div");
  h.className = "ofv-pdf-page-navigator";
  const a = document.createElement("button");
  a.type = "button", a.textContent = "‹", a.title = o.pdfPreviousPage, a.setAttribute("aria-label", o.pdfPreviousPage);
  const i = document.createElement("input");
  i.type = "number", i.min = "1", i.max = String(t), i.value = "1", i.inputMode = "numeric", i.setAttribute("aria-label", o.pdfPageInput);
  const s = document.createElement("span");
  s.textContent = Fe(o.pdfPagePosition, { total: t });
  const l = document.createElement("button");
  l.type = "button", l.textContent = "›", l.title = o.pdfNextPage, l.setAttribute("aria-label", o.pdfNextPage);
  const f = () => e(Number(i.value)), y = (p) => {
    p.key === "Enter" && f();
  }, S = () => e(Number(i.value) - 1), v = () => e(Number(i.value) + 1);
  return i.addEventListener("change", f), i.addEventListener("keydown", y), a.addEventListener("click", S), l.addEventListener("click", v), h.append(a, i, s, l), {
    element: h,
    setCurrent(p) {
      i.value = String(p), a.disabled = p <= 1, l.disabled = p >= t;
    },
    destroy() {
      i.removeEventListener("change", f), i.removeEventListener("keydown", y), a.removeEventListener("click", S), l.removeEventListener("click", v);
    }
  };
}
function Ma(t, o, e, h = !1) {
  const a = h && e || o;
  if (a) {
    t.GlobalWorkerOptions.workerSrc = a;
    return;
  }
  if (!t.GlobalWorkerOptions.workerSrc && typeof window < "u") {
    const i = h ? "legacy/build" : "build";
    t.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${t.version}/${i}/pdf.worker.mjs`;
  }
}
function Ia(t = "auto") {
  if (t === "legacy")
    return !0;
  if (t === "modern")
    return !1;
  if (typeof Promise.withResolvers != "function")
    return !0;
  if (typeof navigator > "u")
    return !1;
  const e = navigator.userAgent, h = /AppleWebKit/i.test(e), a = /(?:iPhone|iPad|iPod)/i.test(e), i = /(?:Chrome|Chromium|CriOS|Edg|OPR|SamsungBrowser)/i.test(e);
  return /(?:QIHU|360SE|360EE)/i.test(e) || h && (a || !i);
}
function Na() {
  const t = Promise;
  typeof t.withResolvers != "function" && Object.defineProperty(t, "withResolvers", {
    configurable: !0,
    writable: !0,
    value: () => {
      let o, e;
      return { promise: new Promise((a, i) => {
        o = a, e = i;
      }), resolve: o, reject: e };
    }
  });
}
Uint8Array.from([137, 80, 78, 71, 13, 10, 26, 10]);
Uint8Array.from([255, 216, 255]);
Promise.resolve();
var Fa = {
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
new Set(Object.keys(Fa));
const Da = "/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/pdf.worker.mjs", Ba = { zoom: !0, search: !0, print: !0, download: !0, fullscreen: !1 };
function Ua(t) {
  return Mi({
    ...t,
    toolbar: Ba,
    plugins: [ga({ workerSrc: Da })]
  });
}
export {
  Ua as renderViewer
};

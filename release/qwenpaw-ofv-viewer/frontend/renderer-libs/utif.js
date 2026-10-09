function M0(K, ie) {
  for (var he = 0; he < ie.length; he++) {
    const J = ie[he];
    if (typeof J != "string" && !Array.isArray(J)) {
      for (const F in J)
        if (F !== "default" && !(F in K)) {
          const g = Object.getOwnPropertyDescriptor(J, F);
          g && Object.defineProperty(K, F, g.get ? g : {
            enumerable: !0,
            get: () => J[F]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(K, Symbol.toStringTag, { value: "Module" }));
}
function C0(K) {
  return K && K.__esModule && Object.prototype.hasOwnProperty.call(K, "default") ? K.default : K;
}
function m0(K) {
  throw new Error('Could not dynamically require "' + K + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var D0 = { exports: {} }, Ue = {}, _0;
function Ke() {
  return _0 || (_0 = 1, function(K) {
    var ie = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
    function he(g, Y) {
      return Object.prototype.hasOwnProperty.call(g, Y);
    }
    K.assign = function(g) {
      for (var Y = Array.prototype.slice.call(arguments, 1); Y.length; ) {
        var n = Y.shift();
        if (n) {
          if (typeof n != "object")
            throw new TypeError(n + "must be non-object");
          for (var r in n)
            he(n, r) && (g[r] = n[r]);
        }
      }
      return g;
    }, K.shrinkBuf = function(g, Y) {
      return g.length === Y ? g : g.subarray ? g.subarray(0, Y) : (g.length = Y, g);
    };
    var J = {
      arraySet: function(g, Y, n, r, d) {
        if (Y.subarray && g.subarray) {
          g.set(Y.subarray(n, n + r), d);
          return;
        }
        for (var s = 0; s < r; s++)
          g[d + s] = Y[n + s];
      },
      // Join array of chunks to single array.
      flattenChunks: function(g) {
        var Y, n, r, d, s, v;
        for (r = 0, Y = 0, n = g.length; Y < n; Y++)
          r += g[Y].length;
        for (v = new Uint8Array(r), d = 0, Y = 0, n = g.length; Y < n; Y++)
          s = g[Y], v.set(s, d), d += s.length;
        return v;
      }
    }, F = {
      arraySet: function(g, Y, n, r, d) {
        for (var s = 0; s < r; s++)
          g[d + s] = Y[n + s];
      },
      // Join array of chunks to single array.
      flattenChunks: function(g) {
        return [].concat.apply([], g);
      }
    };
    K.setTyped = function(g) {
      g ? (K.Buf8 = Uint8Array, K.Buf16 = Uint16Array, K.Buf32 = Int32Array, K.assign(K, J)) : (K.Buf8 = Array, K.Buf16 = Array, K.Buf32 = Array, K.assign(K, F));
    }, K.setTyped(ie);
  }(Ue)), Ue;
}
var $e = {}, Ce = {}, Ye = {}, d0;
function Z0() {
  if (d0) return Ye;
  d0 = 1;
  var K = Ke(), ie = 4, he = 0, J = 1, F = 2;
  function g(o) {
    for (var P = o.length; --P >= 0; )
      o[P] = 0;
  }
  var Y = 0, n = 1, r = 2, d = 3, s = 258, v = 29, _ = 256, h = _ + 1 + v, b = 30, S = 19, f = 2 * h + 1, u = 15, c = 16, l = 7, t = 256, w = 16, k = 17, p = 18, A = (
    /* extra bits for each length code */
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
  ), y = (
    /* extra bits for each distance code */
    [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
  ), N = (
    /* extra bits for each bit length code */
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
  ), B = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], D = 512, L = new Array((h + 2) * 2);
  g(L);
  var j = new Array(b * 2);
  g(j);
  var G = new Array(D);
  g(G);
  var Z = new Array(s - d + 1);
  g(Z);
  var m = new Array(v);
  g(m);
  var ee = new Array(b);
  g(ee);
  function C(o, P, W, U, E) {
    this.static_tree = o, this.extra_bits = P, this.extra_base = W, this.elems = U, this.max_length = E, this.has_stree = o && o.length;
  }
  var I, te, T;
  function Q(o, P) {
    this.dyn_tree = o, this.max_code = 0, this.stat_desc = P;
  }
  function V(o) {
    return o < 256 ? G[o] : G[256 + (o >>> 7)];
  }
  function de(o, P) {
    o.pending_buf[o.pending++] = P & 255, o.pending_buf[o.pending++] = P >>> 8 & 255;
  }
  function re(o, P, W) {
    o.bi_valid > c - W ? (o.bi_buf |= P << o.bi_valid & 65535, de(o, o.bi_buf), o.bi_buf = P >> c - o.bi_valid, o.bi_valid += W - c) : (o.bi_buf |= P << o.bi_valid & 65535, o.bi_valid += W);
  }
  function oe(o, P, W) {
    re(
      o,
      W[P * 2],
      W[P * 2 + 1]
      /*.Len*/
    );
  }
  function le(o, P) {
    var W = 0;
    do
      W |= o & 1, o >>>= 1, W <<= 1;
    while (--P > 0);
    return W >>> 1;
  }
  function pe(o) {
    o.bi_valid === 16 ? (de(o, o.bi_buf), o.bi_buf = 0, o.bi_valid = 0) : o.bi_valid >= 8 && (o.pending_buf[o.pending++] = o.bi_buf & 255, o.bi_buf >>= 8, o.bi_valid -= 8);
  }
  function xe(o, P) {
    var W = P.dyn_tree, U = P.max_code, E = P.stat_desc.static_tree, M = P.stat_desc.has_stree, a = P.stat_desc.extra_bits, H = P.stat_desc.extra_base, fe = P.stat_desc.max_length, e, R, O, i, x, z, ae = 0;
    for (i = 0; i <= u; i++)
      o.bl_count[i] = 0;
    for (W[o.heap[o.heap_max] * 2 + 1] = 0, e = o.heap_max + 1; e < f; e++)
      R = o.heap[e], i = W[W[R * 2 + 1] * 2 + 1] + 1, i > fe && (i = fe, ae++), W[R * 2 + 1] = i, !(R > U) && (o.bl_count[i]++, x = 0, R >= H && (x = a[R - H]), z = W[R * 2], o.opt_len += z * (i + x), M && (o.static_len += z * (E[R * 2 + 1] + x)));
    if (ae !== 0) {
      do {
        for (i = fe - 1; o.bl_count[i] === 0; )
          i--;
        o.bl_count[i]--, o.bl_count[i + 1] += 2, o.bl_count[fe]--, ae -= 2;
      } while (ae > 0);
      for (i = fe; i !== 0; i--)
        for (R = o.bl_count[i]; R !== 0; )
          O = o.heap[--e], !(O > U) && (W[O * 2 + 1] !== i && (o.opt_len += (i - W[O * 2 + 1]) * W[O * 2], W[O * 2 + 1] = i), R--);
    }
  }
  function ze(o, P, W) {
    var U = new Array(u + 1), E = 0, M, a;
    for (M = 1; M <= u; M++)
      U[M] = E = E + W[M - 1] << 1;
    for (a = 0; a <= P; a++) {
      var H = o[a * 2 + 1];
      H !== 0 && (o[a * 2] = le(U[H]++, H));
    }
  }
  function _e() {
    var o, P, W, U, E, M = new Array(u + 1);
    for (W = 0, U = 0; U < v - 1; U++)
      for (m[U] = W, o = 0; o < 1 << A[U]; o++)
        Z[W++] = U;
    for (Z[W - 1] = U, E = 0, U = 0; U < 16; U++)
      for (ee[U] = E, o = 0; o < 1 << y[U]; o++)
        G[E++] = U;
    for (E >>= 7; U < b; U++)
      for (ee[U] = E << 7, o = 0; o < 1 << y[U] - 7; o++)
        G[256 + E++] = U;
    for (P = 0; P <= u; P++)
      M[P] = 0;
    for (o = 0; o <= 143; )
      L[o * 2 + 1] = 8, o++, M[8]++;
    for (; o <= 255; )
      L[o * 2 + 1] = 9, o++, M[9]++;
    for (; o <= 279; )
      L[o * 2 + 1] = 7, o++, M[7]++;
    for (; o <= 287; )
      L[o * 2 + 1] = 8, o++, M[8]++;
    for (ze(L, h + 1, M), o = 0; o < b; o++)
      j[o * 2 + 1] = 5, j[o * 2] = le(o, 5);
    I = new C(L, A, _ + 1, h, u), te = new C(j, y, 0, b, u), T = new C(new Array(0), N, 0, S, l);
  }
  function Se(o) {
    var P;
    for (P = 0; P < h; P++)
      o.dyn_ltree[P * 2] = 0;
    for (P = 0; P < b; P++)
      o.dyn_dtree[P * 2] = 0;
    for (P = 0; P < S; P++)
      o.bl_tree[P * 2] = 0;
    o.dyn_ltree[t * 2] = 1, o.opt_len = o.static_len = 0, o.last_lit = o.matches = 0;
  }
  function me(o) {
    o.bi_valid > 8 ? de(o, o.bi_buf) : o.bi_valid > 0 && (o.pending_buf[o.pending++] = o.bi_buf), o.bi_buf = 0, o.bi_valid = 0;
  }
  function Ne(o, P, W, U) {
    me(o), de(o, W), de(o, ~W), K.arraySet(o.pending_buf, o.window, P, W, o.pending), o.pending += W;
  }
  function Ae(o, P, W, U) {
    var E = P * 2, M = W * 2;
    return o[E] < o[M] || o[E] === o[M] && U[P] <= U[W];
  }
  function ne(o, P, W) {
    for (var U = o.heap[W], E = W << 1; E <= o.heap_len && (E < o.heap_len && Ae(P, o.heap[E + 1], o.heap[E], o.depth) && E++, !Ae(P, U, o.heap[E], o.depth)); )
      o.heap[W] = o.heap[E], W = E, E <<= 1;
    o.heap[W] = U;
  }
  function X(o, P, W) {
    var U, E, M = 0, a, H;
    if (o.last_lit !== 0)
      do
        U = o.pending_buf[o.d_buf + M * 2] << 8 | o.pending_buf[o.d_buf + M * 2 + 1], E = o.pending_buf[o.l_buf + M], M++, U === 0 ? oe(o, E, P) : (a = Z[E], oe(o, a + _ + 1, P), H = A[a], H !== 0 && (E -= m[a], re(o, E, H)), U--, a = V(U), oe(o, a, W), H = y[a], H !== 0 && (U -= ee[a], re(o, U, H)));
      while (M < o.last_lit);
    oe(o, t, P);
  }
  function ue(o, P) {
    var W = P.dyn_tree, U = P.stat_desc.static_tree, E = P.stat_desc.has_stree, M = P.stat_desc.elems, a, H, fe = -1, e;
    for (o.heap_len = 0, o.heap_max = f, a = 0; a < M; a++)
      W[a * 2] !== 0 ? (o.heap[++o.heap_len] = fe = a, o.depth[a] = 0) : W[a * 2 + 1] = 0;
    for (; o.heap_len < 2; )
      e = o.heap[++o.heap_len] = fe < 2 ? ++fe : 0, W[e * 2] = 1, o.depth[e] = 0, o.opt_len--, E && (o.static_len -= U[e * 2 + 1]);
    for (P.max_code = fe, a = o.heap_len >> 1; a >= 1; a--)
      ne(o, W, a);
    e = M;
    do
      a = o.heap[
        1
        /*SMALLEST*/
      ], o.heap[
        1
        /*SMALLEST*/
      ] = o.heap[o.heap_len--], ne(
        o,
        W,
        1
        /*SMALLEST*/
      ), H = o.heap[
        1
        /*SMALLEST*/
      ], o.heap[--o.heap_max] = a, o.heap[--o.heap_max] = H, W[e * 2] = W[a * 2] + W[H * 2], o.depth[e] = (o.depth[a] >= o.depth[H] ? o.depth[a] : o.depth[H]) + 1, W[a * 2 + 1] = W[H * 2 + 1] = e, o.heap[
        1
        /*SMALLEST*/
      ] = e++, ne(
        o,
        W,
        1
        /*SMALLEST*/
      );
    while (o.heap_len >= 2);
    o.heap[--o.heap_max] = o.heap[
      1
      /*SMALLEST*/
    ], xe(o, P), ze(W, fe, o.bl_count);
  }
  function ce(o, P, W) {
    var U, E = -1, M, a = P[0 * 2 + 1], H = 0, fe = 7, e = 4;
    for (a === 0 && (fe = 138, e = 3), P[(W + 1) * 2 + 1] = 65535, U = 0; U <= W; U++)
      M = a, a = P[(U + 1) * 2 + 1], !(++H < fe && M === a) && (H < e ? o.bl_tree[M * 2] += H : M !== 0 ? (M !== E && o.bl_tree[M * 2]++, o.bl_tree[w * 2]++) : H <= 10 ? o.bl_tree[k * 2]++ : o.bl_tree[p * 2]++, H = 0, E = M, a === 0 ? (fe = 138, e = 3) : M === a ? (fe = 6, e = 3) : (fe = 7, e = 4));
  }
  function be(o, P, W) {
    var U, E = -1, M, a = P[0 * 2 + 1], H = 0, fe = 7, e = 4;
    for (a === 0 && (fe = 138, e = 3), U = 0; U <= W; U++)
      if (M = a, a = P[(U + 1) * 2 + 1], !(++H < fe && M === a)) {
        if (H < e)
          do
            oe(o, M, o.bl_tree);
          while (--H !== 0);
        else M !== 0 ? (M !== E && (oe(o, M, o.bl_tree), H--), oe(o, w, o.bl_tree), re(o, H - 3, 2)) : H <= 10 ? (oe(o, k, o.bl_tree), re(o, H - 3, 3)) : (oe(o, p, o.bl_tree), re(o, H - 11, 7));
        H = 0, E = M, a === 0 ? (fe = 138, e = 3) : M === a ? (fe = 6, e = 3) : (fe = 7, e = 4);
      }
  }
  function we(o) {
    var P;
    for (ce(o, o.dyn_ltree, o.l_desc.max_code), ce(o, o.dyn_dtree, o.d_desc.max_code), ue(o, o.bl_desc), P = S - 1; P >= 3 && o.bl_tree[B[P] * 2 + 1] === 0; P--)
      ;
    return o.opt_len += 3 * (P + 1) + 5 + 5 + 4, P;
  }
  function Ze(o, P, W, U) {
    var E;
    for (re(o, P - 257, 5), re(o, W - 1, 5), re(o, U - 4, 4), E = 0; E < U; E++)
      re(o, o.bl_tree[B[E] * 2 + 1], 3);
    be(o, o.dyn_ltree, P - 1), be(o, o.dyn_dtree, W - 1);
  }
  function Ie(o) {
    var P = 4093624447, W;
    for (W = 0; W <= 31; W++, P >>>= 1)
      if (P & 1 && o.dyn_ltree[W * 2] !== 0)
        return he;
    if (o.dyn_ltree[9 * 2] !== 0 || o.dyn_ltree[10 * 2] !== 0 || o.dyn_ltree[13 * 2] !== 0)
      return J;
    for (W = 32; W < _; W++)
      if (o.dyn_ltree[W * 2] !== 0)
        return J;
    return he;
  }
  var Me = !1;
  function Te(o) {
    Me || (_e(), Me = !0), o.l_desc = new Q(o.dyn_ltree, I), o.d_desc = new Q(o.dyn_dtree, te), o.bl_desc = new Q(o.bl_tree, T), o.bi_buf = 0, o.bi_valid = 0, Se(o);
  }
  function Je(o, P, W, U) {
    re(o, (Y << 1) + (U ? 1 : 0), 3), Ne(o, P, W);
  }
  function De(o) {
    re(o, n << 1, 3), oe(o, t, L), pe(o);
  }
  function Pe(o, P, W, U) {
    var E, M, a = 0;
    o.level > 0 ? (o.strm.data_type === F && (o.strm.data_type = Ie(o)), ue(o, o.l_desc), ue(o, o.d_desc), a = we(o), E = o.opt_len + 3 + 7 >>> 3, M = o.static_len + 3 + 7 >>> 3, M <= E && (E = M)) : E = M = W + 5, W + 4 <= E && P !== -1 ? Je(o, P, W, U) : o.strategy === ie || M === E ? (re(o, (n << 1) + (U ? 1 : 0), 3), X(o, L, j)) : (re(o, (r << 1) + (U ? 1 : 0), 3), Ze(o, o.l_desc.max_code + 1, o.d_desc.max_code + 1, a + 1), X(o, o.dyn_ltree, o.dyn_dtree)), Se(o), U && me(o);
  }
  function Xe(o, P, W) {
    return o.pending_buf[o.d_buf + o.last_lit * 2] = P >>> 8 & 255, o.pending_buf[o.d_buf + o.last_lit * 2 + 1] = P & 255, o.pending_buf[o.l_buf + o.last_lit] = W & 255, o.last_lit++, P === 0 ? o.dyn_ltree[W * 2]++ : (o.matches++, P--, o.dyn_ltree[(Z[W] + _ + 1) * 2]++, o.dyn_dtree[V(P) * 2]++), o.last_lit === o.lit_bufsize - 1;
  }
  return Ye._tr_init = Te, Ye._tr_stored_block = Je, Ye._tr_flush_block = Pe, Ye._tr_tally = Xe, Ye._tr_align = De, Ye;
}
var Fe, u0;
function B0() {
  if (u0) return Fe;
  u0 = 1;
  function K(ie, he, J, F) {
    for (var g = ie & 65535 | 0, Y = ie >>> 16 & 65535 | 0, n = 0; J !== 0; ) {
      n = J > 2e3 ? 2e3 : J, J -= n;
      do
        g = g + he[F++] | 0, Y = Y + g | 0;
      while (--n);
      g %= 65521, Y %= 65521;
    }
    return g | Y << 16 | 0;
  }
  return Fe = K, Fe;
}
var e0, v0;
function z0() {
  if (v0) return e0;
  v0 = 1;
  function K() {
    for (var J, F = [], g = 0; g < 256; g++) {
      J = g;
      for (var Y = 0; Y < 8; Y++)
        J = J & 1 ? 3988292384 ^ J >>> 1 : J >>> 1;
      F[g] = J;
    }
    return F;
  }
  var ie = K();
  function he(J, F, g, Y) {
    var n = ie, r = Y + g;
    J ^= -1;
    for (var d = Y; d < r; d++)
      J = J >>> 8 ^ n[(J ^ F[d]) & 255];
    return J ^ -1;
  }
  return e0 = he, e0;
}
var r0, s0;
function h0() {
  return s0 || (s0 = 1, r0 = {
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
  }), r0;
}
var c0;
function P0() {
  if (c0) return Ce;
  c0 = 1;
  var K = Ke(), ie = Z0(), he = B0(), J = z0(), F = h0(), g = 0, Y = 1, n = 3, r = 4, d = 5, s = 0, v = 1, _ = -2, h = -3, b = -5, S = -1, f = 1, u = 2, c = 3, l = 4, t = 0, w = 2, k = 8, p = 9, A = 15, y = 8, N = 29, B = 256, D = B + 1 + N, L = 30, j = 19, G = 2 * D + 1, Z = 15, m = 3, ee = 258, C = ee + m + 1, I = 32, te = 42, T = 69, Q = 73, V = 91, de = 103, re = 113, oe = 666, le = 1, pe = 2, xe = 3, ze = 4, _e = 3;
  function Se(e, R) {
    return e.msg = F[R], R;
  }
  function me(e) {
    return (e << 1) - (e > 4 ? 9 : 0);
  }
  function Ne(e) {
    for (var R = e.length; --R >= 0; )
      e[R] = 0;
  }
  function Ae(e) {
    var R = e.state, O = R.pending;
    O > e.avail_out && (O = e.avail_out), O !== 0 && (K.arraySet(e.output, R.pending_buf, R.pending_out, O, e.next_out), e.next_out += O, R.pending_out += O, e.total_out += O, e.avail_out -= O, R.pending -= O, R.pending === 0 && (R.pending_out = 0));
  }
  function ne(e, R) {
    ie._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, R), e.block_start = e.strstart, Ae(e.strm);
  }
  function X(e, R) {
    e.pending_buf[e.pending++] = R;
  }
  function ue(e, R) {
    e.pending_buf[e.pending++] = R >>> 8 & 255, e.pending_buf[e.pending++] = R & 255;
  }
  function ce(e, R, O, i) {
    var x = e.avail_in;
    return x > i && (x = i), x === 0 ? 0 : (e.avail_in -= x, K.arraySet(R, e.input, e.next_in, x, O), e.state.wrap === 1 ? e.adler = he(e.adler, R, x, O) : e.state.wrap === 2 && (e.adler = J(e.adler, R, x, O)), e.next_in += x, e.total_in += x, x);
  }
  function be(e, R) {
    var O = e.max_chain_length, i = e.strstart, x, z, ae = e.prev_length, $ = e.nice_match, q = e.strstart > e.w_size - C ? e.strstart - (e.w_size - C) : 0, ve = e.window, He = e.w_mask, ge = e.prev, se = e.strstart + ee, Ee = ve[i + ae - 1], Be = ve[i + ae];
    e.prev_length >= e.good_match && (O >>= 2), $ > e.lookahead && ($ = e.lookahead);
    do
      if (x = R, !(ve[x + ae] !== Be || ve[x + ae - 1] !== Ee || ve[x] !== ve[i] || ve[++x] !== ve[i + 1])) {
        i += 2, x++;
        do
          ;
        while (ve[++i] === ve[++x] && ve[++i] === ve[++x] && ve[++i] === ve[++x] && ve[++i] === ve[++x] && ve[++i] === ve[++x] && ve[++i] === ve[++x] && ve[++i] === ve[++x] && ve[++i] === ve[++x] && i < se);
        if (z = ee - (se - i), i = se - ee, z > ae) {
          if (e.match_start = R, ae = z, z >= $)
            break;
          Ee = ve[i + ae - 1], Be = ve[i + ae];
        }
      }
    while ((R = ge[R & He]) > q && --O !== 0);
    return ae <= e.lookahead ? ae : e.lookahead;
  }
  function we(e) {
    var R = e.w_size, O, i, x, z, ae;
    do {
      if (z = e.window_size - e.lookahead - e.strstart, e.strstart >= R + (R - C)) {
        K.arraySet(e.window, e.window, R, R, 0), e.match_start -= R, e.strstart -= R, e.block_start -= R, i = e.hash_size, O = i;
        do
          x = e.head[--O], e.head[O] = x >= R ? x - R : 0;
        while (--i);
        i = R, O = i;
        do
          x = e.prev[--O], e.prev[O] = x >= R ? x - R : 0;
        while (--i);
        z += R;
      }
      if (e.strm.avail_in === 0)
        break;
      if (i = ce(e.strm, e.window, e.strstart + e.lookahead, z), e.lookahead += i, e.lookahead + e.insert >= m)
        for (ae = e.strstart - e.insert, e.ins_h = e.window[ae], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[ae + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[ae + m - 1]) & e.hash_mask, e.prev[ae & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = ae, ae++, e.insert--, !(e.lookahead + e.insert < m)); )
          ;
    } while (e.lookahead < C && e.strm.avail_in !== 0);
  }
  function Ze(e, R) {
    var O = 65535;
    for (O > e.pending_buf_size - 5 && (O = e.pending_buf_size - 5); ; ) {
      if (e.lookahead <= 1) {
        if (we(e), e.lookahead === 0 && R === g)
          return le;
        if (e.lookahead === 0)
          break;
      }
      e.strstart += e.lookahead, e.lookahead = 0;
      var i = e.block_start + O;
      if ((e.strstart === 0 || e.strstart >= i) && (e.lookahead = e.strstart - i, e.strstart = i, ne(e, !1), e.strm.avail_out === 0) || e.strstart - e.block_start >= e.w_size - C && (ne(e, !1), e.strm.avail_out === 0))
        return le;
    }
    return e.insert = 0, R === r ? (ne(e, !0), e.strm.avail_out === 0 ? xe : ze) : (e.strstart > e.block_start && (ne(e, !1), e.strm.avail_out === 0), le);
  }
  function Ie(e, R) {
    for (var O, i; ; ) {
      if (e.lookahead < C) {
        if (we(e), e.lookahead < C && R === g)
          return le;
        if (e.lookahead === 0)
          break;
      }
      if (O = 0, e.lookahead >= m && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + m - 1]) & e.hash_mask, O = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), O !== 0 && e.strstart - O <= e.w_size - C && (e.match_length = be(e, O)), e.match_length >= m)
        if (i = ie._tr_tally(e, e.strstart - e.match_start, e.match_length - m), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= m) {
          e.match_length--;
          do
            e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + m - 1]) & e.hash_mask, O = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
          while (--e.match_length !== 0);
          e.strstart++;
        } else
          e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
      else
        i = ie._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
      if (i && (ne(e, !1), e.strm.avail_out === 0))
        return le;
    }
    return e.insert = e.strstart < m - 1 ? e.strstart : m - 1, R === r ? (ne(e, !0), e.strm.avail_out === 0 ? xe : ze) : e.last_lit && (ne(e, !1), e.strm.avail_out === 0) ? le : pe;
  }
  function Me(e, R) {
    for (var O, i, x; ; ) {
      if (e.lookahead < C) {
        if (we(e), e.lookahead < C && R === g)
          return le;
        if (e.lookahead === 0)
          break;
      }
      if (O = 0, e.lookahead >= m && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + m - 1]) & e.hash_mask, O = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = m - 1, O !== 0 && e.prev_length < e.max_lazy_match && e.strstart - O <= e.w_size - C && (e.match_length = be(e, O), e.match_length <= 5 && (e.strategy === f || e.match_length === m && e.strstart - e.match_start > 4096) && (e.match_length = m - 1)), e.prev_length >= m && e.match_length <= e.prev_length) {
        x = e.strstart + e.lookahead - m, i = ie._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - m), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
        do
          ++e.strstart <= x && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + m - 1]) & e.hash_mask, O = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
        while (--e.prev_length !== 0);
        if (e.match_available = 0, e.match_length = m - 1, e.strstart++, i && (ne(e, !1), e.strm.avail_out === 0))
          return le;
      } else if (e.match_available) {
        if (i = ie._tr_tally(e, 0, e.window[e.strstart - 1]), i && ne(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0)
          return le;
      } else
        e.match_available = 1, e.strstart++, e.lookahead--;
    }
    return e.match_available && (i = ie._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < m - 1 ? e.strstart : m - 1, R === r ? (ne(e, !0), e.strm.avail_out === 0 ? xe : ze) : e.last_lit && (ne(e, !1), e.strm.avail_out === 0) ? le : pe;
  }
  function Te(e, R) {
    for (var O, i, x, z, ae = e.window; ; ) {
      if (e.lookahead <= ee) {
        if (we(e), e.lookahead <= ee && R === g)
          return le;
        if (e.lookahead === 0)
          break;
      }
      if (e.match_length = 0, e.lookahead >= m && e.strstart > 0 && (x = e.strstart - 1, i = ae[x], i === ae[++x] && i === ae[++x] && i === ae[++x])) {
        z = e.strstart + ee;
        do
          ;
        while (i === ae[++x] && i === ae[++x] && i === ae[++x] && i === ae[++x] && i === ae[++x] && i === ae[++x] && i === ae[++x] && i === ae[++x] && x < z);
        e.match_length = ee - (z - x), e.match_length > e.lookahead && (e.match_length = e.lookahead);
      }
      if (e.match_length >= m ? (O = ie._tr_tally(e, 1, e.match_length - m), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (O = ie._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), O && (ne(e, !1), e.strm.avail_out === 0))
        return le;
    }
    return e.insert = 0, R === r ? (ne(e, !0), e.strm.avail_out === 0 ? xe : ze) : e.last_lit && (ne(e, !1), e.strm.avail_out === 0) ? le : pe;
  }
  function Je(e, R) {
    for (var O; ; ) {
      if (e.lookahead === 0 && (we(e), e.lookahead === 0)) {
        if (R === g)
          return le;
        break;
      }
      if (e.match_length = 0, O = ie._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, O && (ne(e, !1), e.strm.avail_out === 0))
        return le;
    }
    return e.insert = 0, R === r ? (ne(e, !0), e.strm.avail_out === 0 ? xe : ze) : e.last_lit && (ne(e, !1), e.strm.avail_out === 0) ? le : pe;
  }
  function De(e, R, O, i, x) {
    this.good_length = e, this.max_lazy = R, this.nice_length = O, this.max_chain = i, this.func = x;
  }
  var Pe;
  Pe = [
    /*      good lazy nice chain */
    new De(0, 0, 0, 0, Ze),
    /* 0 store only */
    new De(4, 4, 8, 4, Ie),
    /* 1 max speed, no lazy matches */
    new De(4, 5, 16, 8, Ie),
    /* 2 */
    new De(4, 6, 32, 32, Ie),
    /* 3 */
    new De(4, 4, 16, 16, Me),
    /* 4 lazy matches */
    new De(8, 16, 32, 32, Me),
    /* 5 */
    new De(8, 16, 128, 128, Me),
    /* 6 */
    new De(8, 32, 128, 256, Me),
    /* 7 */
    new De(32, 128, 258, 1024, Me),
    /* 8 */
    new De(32, 258, 258, 4096, Me)
    /* 9 max compression */
  ];
  function Xe(e) {
    e.window_size = 2 * e.w_size, Ne(e.head), e.max_lazy_match = Pe[e.level].max_lazy, e.good_match = Pe[e.level].good_length, e.nice_match = Pe[e.level].nice_length, e.max_chain_length = Pe[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = m - 1, e.match_available = 0, e.ins_h = 0;
  }
  function o() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = k, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new K.Buf16(G * 2), this.dyn_dtree = new K.Buf16((2 * L + 1) * 2), this.bl_tree = new K.Buf16((2 * j + 1) * 2), Ne(this.dyn_ltree), Ne(this.dyn_dtree), Ne(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new K.Buf16(Z + 1), this.heap = new K.Buf16(2 * D + 1), Ne(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new K.Buf16(2 * D + 1), Ne(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
  }
  function P(e) {
    var R;
    return !e || !e.state ? Se(e, _) : (e.total_in = e.total_out = 0, e.data_type = w, R = e.state, R.pending = 0, R.pending_out = 0, R.wrap < 0 && (R.wrap = -R.wrap), R.status = R.wrap ? te : re, e.adler = R.wrap === 2 ? 0 : 1, R.last_flush = g, ie._tr_init(R), s);
  }
  function W(e) {
    var R = P(e);
    return R === s && Xe(e.state), R;
  }
  function U(e, R) {
    return !e || !e.state || e.state.wrap !== 2 ? _ : (e.state.gzhead = R, s);
  }
  function E(e, R, O, i, x, z) {
    if (!e)
      return _;
    var ae = 1;
    if (R === S && (R = 6), i < 0 ? (ae = 0, i = -i) : i > 15 && (ae = 2, i -= 16), x < 1 || x > p || O !== k || i < 8 || i > 15 || R < 0 || R > 9 || z < 0 || z > l)
      return Se(e, _);
    i === 8 && (i = 9);
    var $ = new o();
    return e.state = $, $.strm = e, $.wrap = ae, $.gzhead = null, $.w_bits = i, $.w_size = 1 << $.w_bits, $.w_mask = $.w_size - 1, $.hash_bits = x + 7, $.hash_size = 1 << $.hash_bits, $.hash_mask = $.hash_size - 1, $.hash_shift = ~~(($.hash_bits + m - 1) / m), $.window = new K.Buf8($.w_size * 2), $.head = new K.Buf16($.hash_size), $.prev = new K.Buf16($.w_size), $.lit_bufsize = 1 << x + 6, $.pending_buf_size = $.lit_bufsize * 4, $.pending_buf = new K.Buf8($.pending_buf_size), $.d_buf = 1 * $.lit_bufsize, $.l_buf = 3 * $.lit_bufsize, $.level = R, $.strategy = z, $.method = O, W(e);
  }
  function M(e, R) {
    return E(e, R, k, A, y, t);
  }
  function a(e, R) {
    var O, i, x, z;
    if (!e || !e.state || R > d || R < 0)
      return e ? Se(e, _) : _;
    if (i = e.state, !e.output || !e.input && e.avail_in !== 0 || i.status === oe && R !== r)
      return Se(e, e.avail_out === 0 ? b : _);
    if (i.strm = e, O = i.last_flush, i.last_flush = R, i.status === te)
      if (i.wrap === 2)
        e.adler = 0, X(i, 31), X(i, 139), X(i, 8), i.gzhead ? (X(
          i,
          (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)
        ), X(i, i.gzhead.time & 255), X(i, i.gzhead.time >> 8 & 255), X(i, i.gzhead.time >> 16 & 255), X(i, i.gzhead.time >> 24 & 255), X(i, i.level === 9 ? 2 : i.strategy >= u || i.level < 2 ? 4 : 0), X(i, i.gzhead.os & 255), i.gzhead.extra && i.gzhead.extra.length && (X(i, i.gzhead.extra.length & 255), X(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (e.adler = J(e.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = T) : (X(i, 0), X(i, 0), X(i, 0), X(i, 0), X(i, 0), X(i, i.level === 9 ? 2 : i.strategy >= u || i.level < 2 ? 4 : 0), X(i, _e), i.status = re);
      else {
        var ae = k + (i.w_bits - 8 << 4) << 8, $ = -1;
        i.strategy >= u || i.level < 2 ? $ = 0 : i.level < 6 ? $ = 1 : i.level === 6 ? $ = 2 : $ = 3, ae |= $ << 6, i.strstart !== 0 && (ae |= I), ae += 31 - ae % 31, i.status = re, ue(i, ae), i.strstart !== 0 && (ue(i, e.adler >>> 16), ue(i, e.adler & 65535)), e.adler = 1;
      }
    if (i.status === T)
      if (i.gzhead.extra) {
        for (x = i.pending; i.gzindex < (i.gzhead.extra.length & 65535) && !(i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > x && (e.adler = J(e.adler, i.pending_buf, i.pending - x, x)), Ae(e), x = i.pending, i.pending === i.pending_buf_size)); )
          X(i, i.gzhead.extra[i.gzindex] & 255), i.gzindex++;
        i.gzhead.hcrc && i.pending > x && (e.adler = J(e.adler, i.pending_buf, i.pending - x, x)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = Q);
      } else
        i.status = Q;
    if (i.status === Q)
      if (i.gzhead.name) {
        x = i.pending;
        do {
          if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > x && (e.adler = J(e.adler, i.pending_buf, i.pending - x, x)), Ae(e), x = i.pending, i.pending === i.pending_buf_size)) {
            z = 1;
            break;
          }
          i.gzindex < i.gzhead.name.length ? z = i.gzhead.name.charCodeAt(i.gzindex++) & 255 : z = 0, X(i, z);
        } while (z !== 0);
        i.gzhead.hcrc && i.pending > x && (e.adler = J(e.adler, i.pending_buf, i.pending - x, x)), z === 0 && (i.gzindex = 0, i.status = V);
      } else
        i.status = V;
    if (i.status === V)
      if (i.gzhead.comment) {
        x = i.pending;
        do {
          if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > x && (e.adler = J(e.adler, i.pending_buf, i.pending - x, x)), Ae(e), x = i.pending, i.pending === i.pending_buf_size)) {
            z = 1;
            break;
          }
          i.gzindex < i.gzhead.comment.length ? z = i.gzhead.comment.charCodeAt(i.gzindex++) & 255 : z = 0, X(i, z);
        } while (z !== 0);
        i.gzhead.hcrc && i.pending > x && (e.adler = J(e.adler, i.pending_buf, i.pending - x, x)), z === 0 && (i.status = de);
      } else
        i.status = de;
    if (i.status === de && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && Ae(e), i.pending + 2 <= i.pending_buf_size && (X(i, e.adler & 255), X(i, e.adler >> 8 & 255), e.adler = 0, i.status = re)) : i.status = re), i.pending !== 0) {
      if (Ae(e), e.avail_out === 0)
        return i.last_flush = -1, s;
    } else if (e.avail_in === 0 && me(R) <= me(O) && R !== r)
      return Se(e, b);
    if (i.status === oe && e.avail_in !== 0)
      return Se(e, b);
    if (e.avail_in !== 0 || i.lookahead !== 0 || R !== g && i.status !== oe) {
      var q = i.strategy === u ? Je(i, R) : i.strategy === c ? Te(i, R) : Pe[i.level].func(i, R);
      if ((q === xe || q === ze) && (i.status = oe), q === le || q === xe)
        return e.avail_out === 0 && (i.last_flush = -1), s;
      if (q === pe && (R === Y ? ie._tr_align(i) : R !== d && (ie._tr_stored_block(i, 0, 0, !1), R === n && (Ne(i.head), i.lookahead === 0 && (i.strstart = 0, i.block_start = 0, i.insert = 0))), Ae(e), e.avail_out === 0))
        return i.last_flush = -1, s;
    }
    return R !== r ? s : i.wrap <= 0 ? v : (i.wrap === 2 ? (X(i, e.adler & 255), X(i, e.adler >> 8 & 255), X(i, e.adler >> 16 & 255), X(i, e.adler >> 24 & 255), X(i, e.total_in & 255), X(i, e.total_in >> 8 & 255), X(i, e.total_in >> 16 & 255), X(i, e.total_in >> 24 & 255)) : (ue(i, e.adler >>> 16), ue(i, e.adler & 65535)), Ae(e), i.wrap > 0 && (i.wrap = -i.wrap), i.pending !== 0 ? s : v);
  }
  function H(e) {
    var R;
    return !e || !e.state ? _ : (R = e.state.status, R !== te && R !== T && R !== Q && R !== V && R !== de && R !== re && R !== oe ? Se(e, _) : (e.state = null, R === re ? Se(e, h) : s));
  }
  function fe(e, R) {
    var O = R.length, i, x, z, ae, $, q, ve, He;
    if (!e || !e.state || (i = e.state, ae = i.wrap, ae === 2 || ae === 1 && i.status !== te || i.lookahead))
      return _;
    for (ae === 1 && (e.adler = he(e.adler, R, O, 0)), i.wrap = 0, O >= i.w_size && (ae === 0 && (Ne(i.head), i.strstart = 0, i.block_start = 0, i.insert = 0), He = new K.Buf8(i.w_size), K.arraySet(He, R, O - i.w_size, i.w_size, 0), R = He, O = i.w_size), $ = e.avail_in, q = e.next_in, ve = e.input, e.avail_in = O, e.next_in = 0, e.input = R, we(i); i.lookahead >= m; ) {
      x = i.strstart, z = i.lookahead - (m - 1);
      do
        i.ins_h = (i.ins_h << i.hash_shift ^ i.window[x + m - 1]) & i.hash_mask, i.prev[x & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = x, x++;
      while (--z);
      i.strstart = x, i.lookahead = m - 1, we(i);
    }
    return i.strstart += i.lookahead, i.block_start = i.strstart, i.insert = i.lookahead, i.lookahead = 0, i.match_length = i.prev_length = m - 1, i.match_available = 0, e.next_in = q, e.input = ve, e.avail_in = $, i.wrap = ae, s;
  }
  return Ce.deflateInit = M, Ce.deflateInit2 = E, Ce.deflateReset = W, Ce.deflateResetKeep = P, Ce.deflateSetHeader = U, Ce.deflate = a, Ce.deflateEnd = H, Ce.deflateSetDictionary = fe, Ce.deflateInfo = "pako deflate (from Nodeca project)", Ce;
}
var We = {}, w0;
function N0() {
  if (w0) return We;
  w0 = 1;
  var K = Ke(), ie = !0, he = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch {
    ie = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch {
    he = !1;
  }
  for (var J = new K.Buf8(256), F = 0; F < 256; F++)
    J[F] = F >= 252 ? 6 : F >= 248 ? 5 : F >= 240 ? 4 : F >= 224 ? 3 : F >= 192 ? 2 : 1;
  J[254] = J[254] = 1, We.string2buf = function(Y) {
    var n, r, d, s, v, _ = Y.length, h = 0;
    for (s = 0; s < _; s++)
      r = Y.charCodeAt(s), (r & 64512) === 55296 && s + 1 < _ && (d = Y.charCodeAt(s + 1), (d & 64512) === 56320 && (r = 65536 + (r - 55296 << 10) + (d - 56320), s++)), h += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
    for (n = new K.Buf8(h), v = 0, s = 0; v < h; s++)
      r = Y.charCodeAt(s), (r & 64512) === 55296 && s + 1 < _ && (d = Y.charCodeAt(s + 1), (d & 64512) === 56320 && (r = 65536 + (r - 55296 << 10) + (d - 56320), s++)), r < 128 ? n[v++] = r : r < 2048 ? (n[v++] = 192 | r >>> 6, n[v++] = 128 | r & 63) : r < 65536 ? (n[v++] = 224 | r >>> 12, n[v++] = 128 | r >>> 6 & 63, n[v++] = 128 | r & 63) : (n[v++] = 240 | r >>> 18, n[v++] = 128 | r >>> 12 & 63, n[v++] = 128 | r >>> 6 & 63, n[v++] = 128 | r & 63);
    return n;
  };
  function g(Y, n) {
    if (n < 65534 && (Y.subarray && he || !Y.subarray && ie))
      return String.fromCharCode.apply(null, K.shrinkBuf(Y, n));
    for (var r = "", d = 0; d < n; d++)
      r += String.fromCharCode(Y[d]);
    return r;
  }
  return We.buf2binstring = function(Y) {
    return g(Y, Y.length);
  }, We.binstring2buf = function(Y) {
    for (var n = new K.Buf8(Y.length), r = 0, d = n.length; r < d; r++)
      n[r] = Y.charCodeAt(r);
    return n;
  }, We.buf2string = function(Y, n) {
    var r, d, s, v, _ = n || Y.length, h = new Array(_ * 2);
    for (d = 0, r = 0; r < _; ) {
      if (s = Y[r++], s < 128) {
        h[d++] = s;
        continue;
      }
      if (v = J[s], v > 4) {
        h[d++] = 65533, r += v - 1;
        continue;
      }
      for (s &= v === 2 ? 31 : v === 3 ? 15 : 7; v > 1 && r < _; )
        s = s << 6 | Y[r++] & 63, v--;
      if (v > 1) {
        h[d++] = 65533;
        continue;
      }
      s < 65536 ? h[d++] = s : (s -= 65536, h[d++] = 55296 | s >> 10 & 1023, h[d++] = 56320 | s & 1023);
    }
    return g(h, d);
  }, We.utf8border = function(Y, n) {
    var r;
    for (n = n || Y.length, n > Y.length && (n = Y.length), r = n - 1; r >= 0 && (Y[r] & 192) === 128; )
      r--;
    return r < 0 || r === 0 ? n : r + J[Y[r]] > n ? r : n;
  }, We;
}
var a0, b0;
function R0() {
  if (b0) return a0;
  b0 = 1;
  function K() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  }
  return a0 = K, a0;
}
var g0;
function G0() {
  if (g0) return $e;
  g0 = 1;
  var K = P0(), ie = Ke(), he = N0(), J = h0(), F = R0(), g = Object.prototype.toString, Y = 0, n = 4, r = 0, d = 1, s = 2, v = -1, _ = 0, h = 8;
  function b(c) {
    if (!(this instanceof b)) return new b(c);
    this.options = ie.assign({
      level: v,
      method: h,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: _,
      to: ""
    }, c || {});
    var l = this.options;
    l.raw && l.windowBits > 0 ? l.windowBits = -l.windowBits : l.gzip && l.windowBits > 0 && l.windowBits < 16 && (l.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new F(), this.strm.avail_out = 0;
    var t = K.deflateInit2(
      this.strm,
      l.level,
      l.method,
      l.windowBits,
      l.memLevel,
      l.strategy
    );
    if (t !== r)
      throw new Error(J[t]);
    if (l.header && K.deflateSetHeader(this.strm, l.header), l.dictionary) {
      var w;
      if (typeof l.dictionary == "string" ? w = he.string2buf(l.dictionary) : g.call(l.dictionary) === "[object ArrayBuffer]" ? w = new Uint8Array(l.dictionary) : w = l.dictionary, t = K.deflateSetDictionary(this.strm, w), t !== r)
        throw new Error(J[t]);
      this._dict_set = !0;
    }
  }
  b.prototype.push = function(c, l) {
    var t = this.strm, w = this.options.chunkSize, k, p;
    if (this.ended)
      return !1;
    p = l === ~~l ? l : l === !0 ? n : Y, typeof c == "string" ? t.input = he.string2buf(c) : g.call(c) === "[object ArrayBuffer]" ? t.input = new Uint8Array(c) : t.input = c, t.next_in = 0, t.avail_in = t.input.length;
    do {
      if (t.avail_out === 0 && (t.output = new ie.Buf8(w), t.next_out = 0, t.avail_out = w), k = K.deflate(t, p), k !== d && k !== r)
        return this.onEnd(k), this.ended = !0, !1;
      (t.avail_out === 0 || t.avail_in === 0 && (p === n || p === s)) && (this.options.to === "string" ? this.onData(he.buf2binstring(ie.shrinkBuf(t.output, t.next_out))) : this.onData(ie.shrinkBuf(t.output, t.next_out)));
    } while ((t.avail_in > 0 || t.avail_out === 0) && k !== d);
    return p === n ? (k = K.deflateEnd(this.strm), this.onEnd(k), this.ended = !0, k === r) : (p === s && (this.onEnd(r), t.avail_out = 0), !0);
  }, b.prototype.onData = function(c) {
    this.chunks.push(c);
  }, b.prototype.onEnd = function(c) {
    c === r && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = ie.flattenChunks(this.chunks)), this.chunks = [], this.err = c, this.msg = this.strm.msg;
  };
  function S(c, l) {
    var t = new b(l);
    if (t.push(c, !0), t.err)
      throw t.msg || J[t.err];
    return t.result;
  }
  function f(c, l) {
    return l = l || {}, l.raw = !0, S(c, l);
  }
  function u(c, l) {
    return l = l || {}, l.gzip = !0, S(c, l);
  }
  return $e.Deflate = b, $e.deflate = S, $e.deflateRaw = f, $e.gzip = u, $e;
}
var Qe = {}, Le = {}, i0, p0;
function H0() {
  if (p0) return i0;
  p0 = 1;
  var K = 30, ie = 12;
  return i0 = function(J, F) {
    var g, Y, n, r, d, s, v, _, h, b, S, f, u, c, l, t, w, k, p, A, y, N, B, D, L;
    g = J.state, Y = J.next_in, D = J.input, n = Y + (J.avail_in - 5), r = J.next_out, L = J.output, d = r - (F - J.avail_out), s = r + (J.avail_out - 257), v = g.dmax, _ = g.wsize, h = g.whave, b = g.wnext, S = g.window, f = g.hold, u = g.bits, c = g.lencode, l = g.distcode, t = (1 << g.lenbits) - 1, w = (1 << g.distbits) - 1;
    e:
      do {
        u < 15 && (f += D[Y++] << u, u += 8, f += D[Y++] << u, u += 8), k = c[f & t];
        r:
          for (; ; ) {
            if (p = k >>> 24, f >>>= p, u -= p, p = k >>> 16 & 255, p === 0)
              L[r++] = k & 65535;
            else if (p & 16) {
              A = k & 65535, p &= 15, p && (u < p && (f += D[Y++] << u, u += 8), A += f & (1 << p) - 1, f >>>= p, u -= p), u < 15 && (f += D[Y++] << u, u += 8, f += D[Y++] << u, u += 8), k = l[f & w];
              a:
                for (; ; ) {
                  if (p = k >>> 24, f >>>= p, u -= p, p = k >>> 16 & 255, p & 16) {
                    if (y = k & 65535, p &= 15, u < p && (f += D[Y++] << u, u += 8, u < p && (f += D[Y++] << u, u += 8)), y += f & (1 << p) - 1, y > v) {
                      J.msg = "invalid distance too far back", g.mode = K;
                      break e;
                    }
                    if (f >>>= p, u -= p, p = r - d, y > p) {
                      if (p = y - p, p > h && g.sane) {
                        J.msg = "invalid distance too far back", g.mode = K;
                        break e;
                      }
                      if (N = 0, B = S, b === 0) {
                        if (N += _ - p, p < A) {
                          A -= p;
                          do
                            L[r++] = S[N++];
                          while (--p);
                          N = r - y, B = L;
                        }
                      } else if (b < p) {
                        if (N += _ + b - p, p -= b, p < A) {
                          A -= p;
                          do
                            L[r++] = S[N++];
                          while (--p);
                          if (N = 0, b < A) {
                            p = b, A -= p;
                            do
                              L[r++] = S[N++];
                            while (--p);
                            N = r - y, B = L;
                          }
                        }
                      } else if (N += b - p, p < A) {
                        A -= p;
                        do
                          L[r++] = S[N++];
                        while (--p);
                        N = r - y, B = L;
                      }
                      for (; A > 2; )
                        L[r++] = B[N++], L[r++] = B[N++], L[r++] = B[N++], A -= 3;
                      A && (L[r++] = B[N++], A > 1 && (L[r++] = B[N++]));
                    } else {
                      N = r - y;
                      do
                        L[r++] = L[N++], L[r++] = L[N++], L[r++] = L[N++], A -= 3;
                      while (A > 2);
                      A && (L[r++] = L[N++], A > 1 && (L[r++] = L[N++]));
                    }
                  } else if (p & 64) {
                    J.msg = "invalid distance code", g.mode = K;
                    break e;
                  } else {
                    k = l[(k & 65535) + (f & (1 << p) - 1)];
                    continue a;
                  }
                  break;
                }
            } else if (p & 64)
              if (p & 32) {
                g.mode = ie;
                break e;
              } else {
                J.msg = "invalid literal/length code", g.mode = K;
                break e;
              }
            else {
              k = c[(k & 65535) + (f & (1 << p) - 1)];
              continue r;
            }
            break;
          }
      } while (Y < n && r < s);
    A = u >> 3, Y -= A, u -= A << 3, f &= (1 << u) - 1, J.next_in = Y, J.next_out = r, J.avail_in = Y < n ? 5 + (n - Y) : 5 - (Y - n), J.avail_out = r < s ? 257 + (s - r) : 257 - (r - s), g.hold = f, g.bits = u;
  }, i0;
}
var t0, k0;
function j0() {
  if (k0) return t0;
  k0 = 1;
  var K = Ke(), ie = 15, he = 852, J = 592, F = 0, g = 1, Y = 2, n = [
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
  ], r = [
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
    72,
    78
  ], d = [
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
  ], s = [
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
  ];
  return t0 = function(_, h, b, S, f, u, c, l) {
    var t = l.bits, w = 0, k = 0, p = 0, A = 0, y = 0, N = 0, B = 0, D = 0, L = 0, j = 0, G, Z, m, ee, C, I = null, te = 0, T, Q = new K.Buf16(ie + 1), V = new K.Buf16(ie + 1), de = null, re = 0, oe, le, pe;
    for (w = 0; w <= ie; w++)
      Q[w] = 0;
    for (k = 0; k < S; k++)
      Q[h[b + k]]++;
    for (y = t, A = ie; A >= 1 && Q[A] === 0; A--)
      ;
    if (y > A && (y = A), A === 0)
      return f[u++] = 1 << 24 | 64 << 16 | 0, f[u++] = 1 << 24 | 64 << 16 | 0, l.bits = 1, 0;
    for (p = 1; p < A && Q[p] === 0; p++)
      ;
    for (y < p && (y = p), D = 1, w = 1; w <= ie; w++)
      if (D <<= 1, D -= Q[w], D < 0)
        return -1;
    if (D > 0 && (_ === F || A !== 1))
      return -1;
    for (V[1] = 0, w = 1; w < ie; w++)
      V[w + 1] = V[w] + Q[w];
    for (k = 0; k < S; k++)
      h[b + k] !== 0 && (c[V[h[b + k]]++] = k);
    if (_ === F ? (I = de = c, T = 19) : _ === g ? (I = n, te -= 257, de = r, re -= 257, T = 256) : (I = d, de = s, T = -1), j = 0, k = 0, w = p, C = u, N = y, B = 0, m = -1, L = 1 << y, ee = L - 1, _ === g && L > he || _ === Y && L > J)
      return 1;
    for (; ; ) {
      oe = w - B, c[k] < T ? (le = 0, pe = c[k]) : c[k] > T ? (le = de[re + c[k]], pe = I[te + c[k]]) : (le = 96, pe = 0), G = 1 << w - B, Z = 1 << N, p = Z;
      do
        Z -= G, f[C + (j >> B) + Z] = oe << 24 | le << 16 | pe | 0;
      while (Z !== 0);
      for (G = 1 << w - 1; j & G; )
        G >>= 1;
      if (G !== 0 ? (j &= G - 1, j += G) : j = 0, k++, --Q[w] === 0) {
        if (w === A)
          break;
        w = h[b + c[k]];
      }
      if (w > y && (j & ee) !== m) {
        for (B === 0 && (B = y), C += p, N = w - B, D = 1 << N; N + B < A && (D -= Q[N + B], !(D <= 0)); )
          N++, D <<= 1;
        if (L += 1 << N, _ === g && L > he || _ === Y && L > J)
          return 1;
        m = j & ee, f[m] = y << 24 | N << 16 | C - u | 0;
      }
    }
    return j !== 0 && (f[C + j] = w - B << 24 | 64 << 16 | 0), l.bits = y, 0;
  }, t0;
}
var x0;
function I0() {
  if (x0) return Le;
  x0 = 1;
  var K = Ke(), ie = B0(), he = z0(), J = H0(), F = j0(), g = 0, Y = 1, n = 2, r = 4, d = 5, s = 6, v = 0, _ = 1, h = 2, b = -2, S = -3, f = -4, u = -5, c = 8, l = 1, t = 2, w = 3, k = 4, p = 5, A = 6, y = 7, N = 8, B = 9, D = 10, L = 11, j = 12, G = 13, Z = 14, m = 15, ee = 16, C = 17, I = 18, te = 19, T = 20, Q = 21, V = 22, de = 23, re = 24, oe = 25, le = 26, pe = 27, xe = 28, ze = 29, _e = 30, Se = 31, me = 32, Ne = 852, Ae = 592, ne = 15, X = ne;
  function ue(E) {
    return (E >>> 24 & 255) + (E >>> 8 & 65280) + ((E & 65280) << 8) + ((E & 255) << 24);
  }
  function ce() {
    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new K.Buf16(320), this.work = new K.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  function be(E) {
    var M;
    return !E || !E.state ? b : (M = E.state, E.total_in = E.total_out = M.total = 0, E.msg = "", M.wrap && (E.adler = M.wrap & 1), M.mode = l, M.last = 0, M.havedict = 0, M.dmax = 32768, M.head = null, M.hold = 0, M.bits = 0, M.lencode = M.lendyn = new K.Buf32(Ne), M.distcode = M.distdyn = new K.Buf32(Ae), M.sane = 1, M.back = -1, v);
  }
  function we(E) {
    var M;
    return !E || !E.state ? b : (M = E.state, M.wsize = 0, M.whave = 0, M.wnext = 0, be(E));
  }
  function Ze(E, M) {
    var a, H;
    return !E || !E.state || (H = E.state, M < 0 ? (a = 0, M = -M) : (a = (M >> 4) + 1, M < 48 && (M &= 15)), M && (M < 8 || M > 15)) ? b : (H.window !== null && H.wbits !== M && (H.window = null), H.wrap = a, H.wbits = M, we(E));
  }
  function Ie(E, M) {
    var a, H;
    return E ? (H = new ce(), E.state = H, H.window = null, a = Ze(E, M), a !== v && (E.state = null), a) : b;
  }
  function Me(E) {
    return Ie(E, X);
  }
  var Te = !0, Je, De;
  function Pe(E) {
    if (Te) {
      var M;
      for (Je = new K.Buf32(512), De = new K.Buf32(32), M = 0; M < 144; )
        E.lens[M++] = 8;
      for (; M < 256; )
        E.lens[M++] = 9;
      for (; M < 280; )
        E.lens[M++] = 7;
      for (; M < 288; )
        E.lens[M++] = 8;
      for (F(Y, E.lens, 0, 288, Je, 0, E.work, { bits: 9 }), M = 0; M < 32; )
        E.lens[M++] = 5;
      F(n, E.lens, 0, 32, De, 0, E.work, { bits: 5 }), Te = !1;
    }
    E.lencode = Je, E.lenbits = 9, E.distcode = De, E.distbits = 5;
  }
  function Xe(E, M, a, H) {
    var fe, e = E.state;
    return e.window === null && (e.wsize = 1 << e.wbits, e.wnext = 0, e.whave = 0, e.window = new K.Buf8(e.wsize)), H >= e.wsize ? (K.arraySet(e.window, M, a - e.wsize, e.wsize, 0), e.wnext = 0, e.whave = e.wsize) : (fe = e.wsize - e.wnext, fe > H && (fe = H), K.arraySet(e.window, M, a - H, fe, e.wnext), H -= fe, H ? (K.arraySet(e.window, M, a - H, H, 0), e.wnext = H, e.whave = e.wsize) : (e.wnext += fe, e.wnext === e.wsize && (e.wnext = 0), e.whave < e.wsize && (e.whave += fe))), 0;
  }
  function o(E, M) {
    var a, H, fe, e, R, O, i, x, z, ae, $, q, ve, He, ge = 0, se, Ee, Be, Re, Ve, qe, ke, Oe, ye = new K.Buf8(4), je, Ge, o0 = (
      /* permutation of code lengths */
      [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
    );
    if (!E || !E.state || !E.output || !E.input && E.avail_in !== 0)
      return b;
    a = E.state, a.mode === j && (a.mode = G), R = E.next_out, fe = E.output, i = E.avail_out, e = E.next_in, H = E.input, O = E.avail_in, x = a.hold, z = a.bits, ae = O, $ = i, Oe = v;
    e:
      for (; ; )
        switch (a.mode) {
          case l:
            if (a.wrap === 0) {
              a.mode = G;
              break;
            }
            for (; z < 16; ) {
              if (O === 0)
                break e;
              O--, x += H[e++] << z, z += 8;
            }
            if (a.wrap & 2 && x === 35615) {
              a.check = 0, ye[0] = x & 255, ye[1] = x >>> 8 & 255, a.check = he(a.check, ye, 2, 0), x = 0, z = 0, a.mode = t;
              break;
            }
            if (a.flags = 0, a.head && (a.head.done = !1), !(a.wrap & 1) || /* check if zlib header allowed */
            (((x & 255) << 8) + (x >> 8)) % 31) {
              E.msg = "incorrect header check", a.mode = _e;
              break;
            }
            if ((x & 15) !== c) {
              E.msg = "unknown compression method", a.mode = _e;
              break;
            }
            if (x >>>= 4, z -= 4, ke = (x & 15) + 8, a.wbits === 0)
              a.wbits = ke;
            else if (ke > a.wbits) {
              E.msg = "invalid window size", a.mode = _e;
              break;
            }
            a.dmax = 1 << ke, E.adler = a.check = 1, a.mode = x & 512 ? D : j, x = 0, z = 0;
            break;
          case t:
            for (; z < 16; ) {
              if (O === 0)
                break e;
              O--, x += H[e++] << z, z += 8;
            }
            if (a.flags = x, (a.flags & 255) !== c) {
              E.msg = "unknown compression method", a.mode = _e;
              break;
            }
            if (a.flags & 57344) {
              E.msg = "unknown header flags set", a.mode = _e;
              break;
            }
            a.head && (a.head.text = x >> 8 & 1), a.flags & 512 && (ye[0] = x & 255, ye[1] = x >>> 8 & 255, a.check = he(a.check, ye, 2, 0)), x = 0, z = 0, a.mode = w;
          case w:
            for (; z < 32; ) {
              if (O === 0)
                break e;
              O--, x += H[e++] << z, z += 8;
            }
            a.head && (a.head.time = x), a.flags & 512 && (ye[0] = x & 255, ye[1] = x >>> 8 & 255, ye[2] = x >>> 16 & 255, ye[3] = x >>> 24 & 255, a.check = he(a.check, ye, 4, 0)), x = 0, z = 0, a.mode = k;
          case k:
            for (; z < 16; ) {
              if (O === 0)
                break e;
              O--, x += H[e++] << z, z += 8;
            }
            a.head && (a.head.xflags = x & 255, a.head.os = x >> 8), a.flags & 512 && (ye[0] = x & 255, ye[1] = x >>> 8 & 255, a.check = he(a.check, ye, 2, 0)), x = 0, z = 0, a.mode = p;
          case p:
            if (a.flags & 1024) {
              for (; z < 16; ) {
                if (O === 0)
                  break e;
                O--, x += H[e++] << z, z += 8;
              }
              a.length = x, a.head && (a.head.extra_len = x), a.flags & 512 && (ye[0] = x & 255, ye[1] = x >>> 8 & 255, a.check = he(a.check, ye, 2, 0)), x = 0, z = 0;
            } else a.head && (a.head.extra = null);
            a.mode = A;
          case A:
            if (a.flags & 1024 && (q = a.length, q > O && (q = O), q && (a.head && (ke = a.head.extra_len - a.length, a.head.extra || (a.head.extra = new Array(a.head.extra_len)), K.arraySet(
              a.head.extra,
              H,
              e,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              q,
              /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
              ke
            )), a.flags & 512 && (a.check = he(a.check, H, q, e)), O -= q, e += q, a.length -= q), a.length))
              break e;
            a.length = 0, a.mode = y;
          case y:
            if (a.flags & 2048) {
              if (O === 0)
                break e;
              q = 0;
              do
                ke = H[e + q++], a.head && ke && a.length < 65536 && (a.head.name += String.fromCharCode(ke));
              while (ke && q < O);
              if (a.flags & 512 && (a.check = he(a.check, H, q, e)), O -= q, e += q, ke)
                break e;
            } else a.head && (a.head.name = null);
            a.length = 0, a.mode = N;
          case N:
            if (a.flags & 4096) {
              if (O === 0)
                break e;
              q = 0;
              do
                ke = H[e + q++], a.head && ke && a.length < 65536 && (a.head.comment += String.fromCharCode(ke));
              while (ke && q < O);
              if (a.flags & 512 && (a.check = he(a.check, H, q, e)), O -= q, e += q, ke)
                break e;
            } else a.head && (a.head.comment = null);
            a.mode = B;
          case B:
            if (a.flags & 512) {
              for (; z < 16; ) {
                if (O === 0)
                  break e;
                O--, x += H[e++] << z, z += 8;
              }
              if (x !== (a.check & 65535)) {
                E.msg = "header crc mismatch", a.mode = _e;
                break;
              }
              x = 0, z = 0;
            }
            a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0), E.adler = a.check = 0, a.mode = j;
            break;
          case D:
            for (; z < 32; ) {
              if (O === 0)
                break e;
              O--, x += H[e++] << z, z += 8;
            }
            E.adler = a.check = ue(x), x = 0, z = 0, a.mode = L;
          case L:
            if (a.havedict === 0)
              return E.next_out = R, E.avail_out = i, E.next_in = e, E.avail_in = O, a.hold = x, a.bits = z, h;
            E.adler = a.check = 1, a.mode = j;
          case j:
            if (M === d || M === s)
              break e;
          case G:
            if (a.last) {
              x >>>= z & 7, z -= z & 7, a.mode = pe;
              break;
            }
            for (; z < 3; ) {
              if (O === 0)
                break e;
              O--, x += H[e++] << z, z += 8;
            }
            switch (a.last = x & 1, x >>>= 1, z -= 1, x & 3) {
              case 0:
                a.mode = Z;
                break;
              case 1:
                if (Pe(a), a.mode = T, M === s) {
                  x >>>= 2, z -= 2;
                  break e;
                }
                break;
              case 2:
                a.mode = C;
                break;
              case 3:
                E.msg = "invalid block type", a.mode = _e;
            }
            x >>>= 2, z -= 2;
            break;
          case Z:
            for (x >>>= z & 7, z -= z & 7; z < 32; ) {
              if (O === 0)
                break e;
              O--, x += H[e++] << z, z += 8;
            }
            if ((x & 65535) !== (x >>> 16 ^ 65535)) {
              E.msg = "invalid stored block lengths", a.mode = _e;
              break;
            }
            if (a.length = x & 65535, x = 0, z = 0, a.mode = m, M === s)
              break e;
          case m:
            a.mode = ee;
          case ee:
            if (q = a.length, q) {
              if (q > O && (q = O), q > i && (q = i), q === 0)
                break e;
              K.arraySet(fe, H, e, q, R), O -= q, e += q, i -= q, R += q, a.length -= q;
              break;
            }
            a.mode = j;
            break;
          case C:
            for (; z < 14; ) {
              if (O === 0)
                break e;
              O--, x += H[e++] << z, z += 8;
            }
            if (a.nlen = (x & 31) + 257, x >>>= 5, z -= 5, a.ndist = (x & 31) + 1, x >>>= 5, z -= 5, a.ncode = (x & 15) + 4, x >>>= 4, z -= 4, a.nlen > 286 || a.ndist > 30) {
              E.msg = "too many length or distance symbols", a.mode = _e;
              break;
            }
            a.have = 0, a.mode = I;
          case I:
            for (; a.have < a.ncode; ) {
              for (; z < 3; ) {
                if (O === 0)
                  break e;
                O--, x += H[e++] << z, z += 8;
              }
              a.lens[o0[a.have++]] = x & 7, x >>>= 3, z -= 3;
            }
            for (; a.have < 19; )
              a.lens[o0[a.have++]] = 0;
            if (a.lencode = a.lendyn, a.lenbits = 7, je = { bits: a.lenbits }, Oe = F(g, a.lens, 0, 19, a.lencode, 0, a.work, je), a.lenbits = je.bits, Oe) {
              E.msg = "invalid code lengths set", a.mode = _e;
              break;
            }
            a.have = 0, a.mode = te;
          case te:
            for (; a.have < a.nlen + a.ndist; ) {
              for (; ge = a.lencode[x & (1 << a.lenbits) - 1], se = ge >>> 24, Ee = ge >>> 16 & 255, Be = ge & 65535, !(se <= z); ) {
                if (O === 0)
                  break e;
                O--, x += H[e++] << z, z += 8;
              }
              if (Be < 16)
                x >>>= se, z -= se, a.lens[a.have++] = Be;
              else {
                if (Be === 16) {
                  for (Ge = se + 2; z < Ge; ) {
                    if (O === 0)
                      break e;
                    O--, x += H[e++] << z, z += 8;
                  }
                  if (x >>>= se, z -= se, a.have === 0) {
                    E.msg = "invalid bit length repeat", a.mode = _e;
                    break;
                  }
                  ke = a.lens[a.have - 1], q = 3 + (x & 3), x >>>= 2, z -= 2;
                } else if (Be === 17) {
                  for (Ge = se + 3; z < Ge; ) {
                    if (O === 0)
                      break e;
                    O--, x += H[e++] << z, z += 8;
                  }
                  x >>>= se, z -= se, ke = 0, q = 3 + (x & 7), x >>>= 3, z -= 3;
                } else {
                  for (Ge = se + 7; z < Ge; ) {
                    if (O === 0)
                      break e;
                    O--, x += H[e++] << z, z += 8;
                  }
                  x >>>= se, z -= se, ke = 0, q = 11 + (x & 127), x >>>= 7, z -= 7;
                }
                if (a.have + q > a.nlen + a.ndist) {
                  E.msg = "invalid bit length repeat", a.mode = _e;
                  break;
                }
                for (; q--; )
                  a.lens[a.have++] = ke;
              }
            }
            if (a.mode === _e)
              break;
            if (a.lens[256] === 0) {
              E.msg = "invalid code -- missing end-of-block", a.mode = _e;
              break;
            }
            if (a.lenbits = 9, je = { bits: a.lenbits }, Oe = F(Y, a.lens, 0, a.nlen, a.lencode, 0, a.work, je), a.lenbits = je.bits, Oe) {
              E.msg = "invalid literal/lengths set", a.mode = _e;
              break;
            }
            if (a.distbits = 6, a.distcode = a.distdyn, je = { bits: a.distbits }, Oe = F(n, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, je), a.distbits = je.bits, Oe) {
              E.msg = "invalid distances set", a.mode = _e;
              break;
            }
            if (a.mode = T, M === s)
              break e;
          case T:
            a.mode = Q;
          case Q:
            if (O >= 6 && i >= 258) {
              E.next_out = R, E.avail_out = i, E.next_in = e, E.avail_in = O, a.hold = x, a.bits = z, J(E, $), R = E.next_out, fe = E.output, i = E.avail_out, e = E.next_in, H = E.input, O = E.avail_in, x = a.hold, z = a.bits, a.mode === j && (a.back = -1);
              break;
            }
            for (a.back = 0; ge = a.lencode[x & (1 << a.lenbits) - 1], se = ge >>> 24, Ee = ge >>> 16 & 255, Be = ge & 65535, !(se <= z); ) {
              if (O === 0)
                break e;
              O--, x += H[e++] << z, z += 8;
            }
            if (Ee && !(Ee & 240)) {
              for (Re = se, Ve = Ee, qe = Be; ge = a.lencode[qe + ((x & (1 << Re + Ve) - 1) >> Re)], se = ge >>> 24, Ee = ge >>> 16 & 255, Be = ge & 65535, !(Re + se <= z); ) {
                if (O === 0)
                  break e;
                O--, x += H[e++] << z, z += 8;
              }
              x >>>= Re, z -= Re, a.back += Re;
            }
            if (x >>>= se, z -= se, a.back += se, a.length = Be, Ee === 0) {
              a.mode = le;
              break;
            }
            if (Ee & 32) {
              a.back = -1, a.mode = j;
              break;
            }
            if (Ee & 64) {
              E.msg = "invalid literal/length code", a.mode = _e;
              break;
            }
            a.extra = Ee & 15, a.mode = V;
          case V:
            if (a.extra) {
              for (Ge = a.extra; z < Ge; ) {
                if (O === 0)
                  break e;
                O--, x += H[e++] << z, z += 8;
              }
              a.length += x & (1 << a.extra) - 1, x >>>= a.extra, z -= a.extra, a.back += a.extra;
            }
            a.was = a.length, a.mode = de;
          case de:
            for (; ge = a.distcode[x & (1 << a.distbits) - 1], se = ge >>> 24, Ee = ge >>> 16 & 255, Be = ge & 65535, !(se <= z); ) {
              if (O === 0)
                break e;
              O--, x += H[e++] << z, z += 8;
            }
            if (!(Ee & 240)) {
              for (Re = se, Ve = Ee, qe = Be; ge = a.distcode[qe + ((x & (1 << Re + Ve) - 1) >> Re)], se = ge >>> 24, Ee = ge >>> 16 & 255, Be = ge & 65535, !(Re + se <= z); ) {
                if (O === 0)
                  break e;
                O--, x += H[e++] << z, z += 8;
              }
              x >>>= Re, z -= Re, a.back += Re;
            }
            if (x >>>= se, z -= se, a.back += se, Ee & 64) {
              E.msg = "invalid distance code", a.mode = _e;
              break;
            }
            a.offset = Be, a.extra = Ee & 15, a.mode = re;
          case re:
            if (a.extra) {
              for (Ge = a.extra; z < Ge; ) {
                if (O === 0)
                  break e;
                O--, x += H[e++] << z, z += 8;
              }
              a.offset += x & (1 << a.extra) - 1, x >>>= a.extra, z -= a.extra, a.back += a.extra;
            }
            if (a.offset > a.dmax) {
              E.msg = "invalid distance too far back", a.mode = _e;
              break;
            }
            a.mode = oe;
          case oe:
            if (i === 0)
              break e;
            if (q = $ - i, a.offset > q) {
              if (q = a.offset - q, q > a.whave && a.sane) {
                E.msg = "invalid distance too far back", a.mode = _e;
                break;
              }
              q > a.wnext ? (q -= a.wnext, ve = a.wsize - q) : ve = a.wnext - q, q > a.length && (q = a.length), He = a.window;
            } else
              He = fe, ve = R - a.offset, q = a.length;
            q > i && (q = i), i -= q, a.length -= q;
            do
              fe[R++] = He[ve++];
            while (--q);
            a.length === 0 && (a.mode = Q);
            break;
          case le:
            if (i === 0)
              break e;
            fe[R++] = a.length, i--, a.mode = Q;
            break;
          case pe:
            if (a.wrap) {
              for (; z < 32; ) {
                if (O === 0)
                  break e;
                O--, x |= H[e++] << z, z += 8;
              }
              if ($ -= i, E.total_out += $, a.total += $, $ && (E.adler = a.check = /*UPDATE(state.check, put - _out, _out);*/
              a.flags ? he(a.check, fe, $, R - $) : ie(a.check, fe, $, R - $)), $ = i, (a.flags ? x : ue(x)) !== a.check) {
                E.msg = "incorrect data check", a.mode = _e;
                break;
              }
              x = 0, z = 0;
            }
            a.mode = xe;
          case xe:
            if (a.wrap && a.flags) {
              for (; z < 32; ) {
                if (O === 0)
                  break e;
                O--, x += H[e++] << z, z += 8;
              }
              if (x !== (a.total & 4294967295)) {
                E.msg = "incorrect length check", a.mode = _e;
                break;
              }
              x = 0, z = 0;
            }
            a.mode = ze;
          case ze:
            Oe = _;
            break e;
          case _e:
            Oe = S;
            break e;
          case Se:
            return f;
          case me:
          default:
            return b;
        }
    return E.next_out = R, E.avail_out = i, E.next_in = e, E.avail_in = O, a.hold = x, a.bits = z, (a.wsize || $ !== E.avail_out && a.mode < _e && (a.mode < pe || M !== r)) && Xe(E, E.output, E.next_out, $ - E.avail_out), ae -= E.avail_in, $ -= E.avail_out, E.total_in += ae, E.total_out += $, a.total += $, a.wrap && $ && (E.adler = a.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
    a.flags ? he(a.check, fe, $, E.next_out - $) : ie(a.check, fe, $, E.next_out - $)), E.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === j ? 128 : 0) + (a.mode === T || a.mode === m ? 256 : 0), (ae === 0 && $ === 0 || M === r) && Oe === v && (Oe = u), Oe;
  }
  function P(E) {
    if (!E || !E.state)
      return b;
    var M = E.state;
    return M.window && (M.window = null), E.state = null, v;
  }
  function W(E, M) {
    var a;
    return !E || !E.state || (a = E.state, !(a.wrap & 2)) ? b : (a.head = M, M.done = !1, v);
  }
  function U(E, M) {
    var a = M.length, H, fe, e;
    return !E || !E.state || (H = E.state, H.wrap !== 0 && H.mode !== L) ? b : H.mode === L && (fe = 1, fe = ie(fe, M, a, 0), fe !== H.check) ? S : (e = Xe(E, M, a, a), e ? (H.mode = Se, f) : (H.havedict = 1, v));
  }
  return Le.inflateReset = we, Le.inflateReset2 = Ze, Le.inflateResetKeep = be, Le.inflateInit = Me, Le.inflateInit2 = Ie, Le.inflate = o, Le.inflateEnd = P, Le.inflateGetHeader = W, Le.inflateSetDictionary = U, Le.inflateInfo = "pako inflate (from Nodeca project)", Le;
}
var n0, E0;
function O0() {
  return E0 || (E0 = 1, n0 = {
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
    //Z_MEM_ERROR:     -4,
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
  }), n0;
}
var f0, S0;
function J0() {
  if (S0) return f0;
  S0 = 1;
  function K() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
  }
  return f0 = K, f0;
}
var y0;
function K0() {
  if (y0) return Qe;
  y0 = 1;
  var K = I0(), ie = Ke(), he = N0(), J = O0(), F = h0(), g = R0(), Y = J0(), n = Object.prototype.toString;
  function r(v) {
    if (!(this instanceof r)) return new r(v);
    this.options = ie.assign({
      chunkSize: 16384,
      windowBits: 0,
      to: ""
    }, v || {});
    var _ = this.options;
    _.raw && _.windowBits >= 0 && _.windowBits < 16 && (_.windowBits = -_.windowBits, _.windowBits === 0 && (_.windowBits = -15)), _.windowBits >= 0 && _.windowBits < 16 && !(v && v.windowBits) && (_.windowBits += 32), _.windowBits > 15 && _.windowBits < 48 && (_.windowBits & 15 || (_.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new g(), this.strm.avail_out = 0;
    var h = K.inflateInit2(
      this.strm,
      _.windowBits
    );
    if (h !== J.Z_OK)
      throw new Error(F[h]);
    if (this.header = new Y(), K.inflateGetHeader(this.strm, this.header), _.dictionary && (typeof _.dictionary == "string" ? _.dictionary = he.string2buf(_.dictionary) : n.call(_.dictionary) === "[object ArrayBuffer]" && (_.dictionary = new Uint8Array(_.dictionary)), _.raw && (h = K.inflateSetDictionary(this.strm, _.dictionary), h !== J.Z_OK)))
      throw new Error(F[h]);
  }
  r.prototype.push = function(v, _) {
    var h = this.strm, b = this.options.chunkSize, S = this.options.dictionary, f, u, c, l, t, w = !1;
    if (this.ended)
      return !1;
    u = _ === ~~_ ? _ : _ === !0 ? J.Z_FINISH : J.Z_NO_FLUSH, typeof v == "string" ? h.input = he.binstring2buf(v) : n.call(v) === "[object ArrayBuffer]" ? h.input = new Uint8Array(v) : h.input = v, h.next_in = 0, h.avail_in = h.input.length;
    do {
      if (h.avail_out === 0 && (h.output = new ie.Buf8(b), h.next_out = 0, h.avail_out = b), f = K.inflate(h, J.Z_NO_FLUSH), f === J.Z_NEED_DICT && S && (f = K.inflateSetDictionary(this.strm, S)), f === J.Z_BUF_ERROR && w === !0 && (f = J.Z_OK, w = !1), f !== J.Z_STREAM_END && f !== J.Z_OK)
        return this.onEnd(f), this.ended = !0, !1;
      h.next_out && (h.avail_out === 0 || f === J.Z_STREAM_END || h.avail_in === 0 && (u === J.Z_FINISH || u === J.Z_SYNC_FLUSH)) && (this.options.to === "string" ? (c = he.utf8border(h.output, h.next_out), l = h.next_out - c, t = he.buf2string(h.output, c), h.next_out = l, h.avail_out = b - l, l && ie.arraySet(h.output, h.output, c, l, 0), this.onData(t)) : this.onData(ie.shrinkBuf(h.output, h.next_out))), h.avail_in === 0 && h.avail_out === 0 && (w = !0);
    } while ((h.avail_in > 0 || h.avail_out === 0) && f !== J.Z_STREAM_END);
    return f === J.Z_STREAM_END && (u = J.Z_FINISH), u === J.Z_FINISH ? (f = K.inflateEnd(this.strm), this.onEnd(f), this.ended = !0, f === J.Z_OK) : (u === J.Z_SYNC_FLUSH && (this.onEnd(J.Z_OK), h.avail_out = 0), !0);
  }, r.prototype.onData = function(v) {
    this.chunks.push(v);
  }, r.prototype.onEnd = function(v) {
    v === J.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = ie.flattenChunks(this.chunks)), this.chunks = [], this.err = v, this.msg = this.strm.msg;
  };
  function d(v, _) {
    var h = new r(_);
    if (h.push(v, !0), h.err)
      throw h.msg || F[h.err];
    return h.result;
  }
  function s(v, _) {
    return _ = _ || {}, _.raw = !0, d(v, _);
  }
  return Qe.Inflate = r, Qe.inflate = d, Qe.inflateRaw = s, Qe.ungzip = d, Qe;
}
var l0, A0;
function Y0() {
  if (A0) return l0;
  A0 = 1;
  var K = Ke().assign, ie = G0(), he = K0(), J = O0(), F = {};
  return K(F, ie, he, J), l0 = F, l0;
}
(function(K) {
  var ie = {};
  (function() {
    var he = {};
    K.exports = he;
    var J;
    typeof m0 == "function" ? J = Y0() : J = self.pako;
    function F() {
      (typeof process > "u" || ie.NODE_ENV == "development") && console.log.apply(console, arguments);
    }
    (function(g, Y) {
      (function() {
        var n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
          return typeof s;
        } : function(s) {
          return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
        }, r = function() {
          function s(v) {
            this.message = "JPEG error: " + v;
          }
          return s.prototype = Error(), s.prototype.name = "JpegError", s.constructor = s;
        }(), d = function() {
          function s(v, _) {
            this.message = v, this.g = _;
          }
          return s.prototype = Error(), s.prototype.name = "DNLMarkerError", s.constructor = s;
        }();
        (function() {
          function s() {
            this.M = null, this.B = -1;
          }
          function v(f, u) {
            for (var c = 0, l = [], t, w, k = 16; 0 < k && !f[k - 1]; ) k--;
            l.push({ children: [], index: 0 });
            var p = l[0], A;
            for (t = 0; t < k; t++) {
              for (w = 0; w < f[t]; w++) {
                for (p = l.pop(), p.children[p.index] = u[c]; 0 < p.index; ) p = l.pop();
                for (p.index++, l.push(p); l.length <= t; ) l.push(A = { children: [], index: 0 }), p.children[p.index] = A.children, p = A;
                c++;
              }
              t + 1 < k && (l.push(A = { children: [], index: 0 }), p.children[p.index] = A.children, p = A);
            }
            return l[0].children;
          }
          function _(f, u, c, l, t, w, k, p, A) {
            function y() {
              if (0 < T) return T--, te >> T & 1;
              if (te = f[u++], te === 255) {
                var X = f[u++];
                if (X) {
                  if (X === 220 && ee) {
                    u += 2;
                    var ue = f[u++] << 8 | f[u++];
                    if (0 < ue && ue !== c.g) throw new d("Found DNL marker (0xFFDC) while parsing scan data", ue);
                  }
                  throw new r("unexpected marker " + (te << 8 | X).toString(16));
                }
              }
              return T = 7, te >>> 7;
            }
            function N(X) {
              for (; ; ) {
                if (X = X[y()], typeof X == "number") return X;
                if ((typeof X > "u" ? "undefined" : n(X)) !== "object") throw new r("invalid huffman sequence");
              }
            }
            function B(X) {
              for (var ue = 0; 0 < X; ) ue = ue << 1 | y(), X--;
              return ue;
            }
            function D(X) {
              if (X === 1) return y() === 1 ? 1 : -1;
              var ue = B(X);
              return ue >= 1 << X - 1 ? ue : ue + (-1 << X) + 1;
            }
            function L(X, ue) {
              var ce = N(X.D);
              for (ce = ce === 0 ? 0 : D(ce), X.a[ue] = X.m += ce, ce = 1; 64 > ce; ) {
                var be = N(X.o), we = be & 15;
                if (be >>= 4, we === 0) {
                  if (15 > be) break;
                  ce += 16;
                } else ce += be, X.a[ue + S[ce]] = D(we), ce++;
              }
            }
            function j(X, ue) {
              var ce = N(X.D);
              ce = ce === 0 ? 0 : D(ce) << A, X.a[ue] = X.m += ce;
            }
            function G(X, ue) {
              X.a[ue] |= y() << A;
            }
            function Z(X, ue) {
              if (0 < Q) Q--;
              else for (var ce = w; ce <= k; ) {
                var be = N(X.o), we = be & 15;
                if (be >>= 4, we === 0) {
                  if (15 > be) {
                    Q = B(be) + (1 << be) - 1;
                    break;
                  }
                  ce += 16;
                } else ce += be, X.a[ue + S[ce]] = D(we) * (1 << A), ce++;
              }
            }
            function m(X, ue) {
              for (var ce = w, be = 0, we; ce <= k; ) {
                we = ue + S[ce];
                var Ze = 0 > X.a[we] ? -1 : 1;
                switch (V) {
                  case 0:
                    if (be = N(X.o), we = be & 15, be >>= 4, we === 0) 15 > be ? (Q = B(be) + (1 << be), V = 4) : (be = 16, V = 1);
                    else {
                      if (we !== 1) throw new r("invalid ACn encoding");
                      de = D(we), V = be ? 2 : 3;
                    }
                    continue;
                  case 1:
                  case 2:
                    X.a[we] ? X.a[we] += Ze * (y() << A) : (be--, be === 0 && (V = V === 2 ? 3 : 0));
                    break;
                  case 3:
                    X.a[we] ? X.a[we] += Ze * (y() << A) : (X.a[we] = de << A, V = 0);
                    break;
                  case 4:
                    X.a[we] && (X.a[we] += Ze * (y() << A));
                }
                ce++;
              }
              V === 4 && (Q--, Q === 0 && (V = 0));
            }
            for (var ee = 9 < arguments.length && arguments[9] !== void 0 ? arguments[9] : !1, C = c.P, I = u, te = 0, T = 0, Q = 0, V = 0, de, re = l.length, oe, le, pe, xe, ze = c.S ? w === 0 ? p === 0 ? j : G : p === 0 ? Z : m : L, _e = 0, Se = re === 1 ? l[0].c * l[0].l : C * c.O, me, Ne; _e < Se; ) {
              var Ae = t ? Math.min(Se - _e, t) : Se;
              for (oe = 0; oe < re; oe++) l[oe].m = 0;
              if (Q = 0, re === 1) {
                var ne = l[0];
                for (xe = 0; xe < Ae; xe++) ze(ne, 64 * ((ne.c + 1) * (_e / ne.c | 0) + _e % ne.c)), _e++;
              } else for (xe = 0; xe < Ae; xe++) {
                for (oe = 0; oe < re; oe++) for (ne = l[oe], me = ne.h, Ne = ne.j, le = 0; le < Ne; le++) for (pe = 0; pe < me; pe++) ze(ne, 64 * ((ne.c + 1) * ((_e / C | 0) * ne.j + le) + (_e % C * ne.h + pe)));
                _e++;
              }
              if (T = 0, (ne = b(f, u)) && ne.f && ((0, _util.warn)("decodeScan - unexpected MCU data, current marker is: " + ne.f), u = ne.offset), ne = ne && ne.F, !ne || 65280 >= ne) throw new r("marker was not found");
              if (65488 <= ne && 65495 >= ne) u += 2;
              else break;
            }
            return (ne = b(f, u)) && ne.f && ((0, _util.warn)("decodeScan - unexpected Scan data, current marker is: " + ne.f), u = ne.offset), u - I;
          }
          function h(f, u) {
            for (var c = u.c, l = u.l, t = new Int16Array(64), w = 0; w < l; w++) for (var k = 0; k < c; k++) {
              var p = 64 * ((u.c + 1) * w + k), A = t, y = u.G, N = u.a;
              if (!y) throw new r("missing required Quantization Table.");
              for (var B = 0; 64 > B; B += 8) {
                var D = N[p + B], L = N[p + B + 1], j = N[p + B + 2], G = N[p + B + 3], Z = N[p + B + 4], m = N[p + B + 5], ee = N[p + B + 6], C = N[p + B + 7];
                if (D *= y[B], !(L | j | G | Z | m | ee | C)) D = 5793 * D + 512 >> 10, A[B] = D, A[B + 1] = D, A[B + 2] = D, A[B + 3] = D, A[B + 4] = D, A[B + 5] = D, A[B + 6] = D, A[B + 7] = D;
                else {
                  L *= y[B + 1], j *= y[B + 2], G *= y[B + 3], Z *= y[B + 4], m *= y[B + 5], ee *= y[B + 6], C *= y[B + 7];
                  var I = 5793 * D + 128 >> 8, te = 5793 * Z + 128 >> 8, T = j, Q = ee;
                  Z = 2896 * (L - C) + 128 >> 8, C = 2896 * (L + C) + 128 >> 8, G <<= 4, m <<= 4, I = I + te + 1 >> 1, te = I - te, D = 3784 * T + 1567 * Q + 128 >> 8, T = 1567 * T - 3784 * Q + 128 >> 8, Q = D, Z = Z + m + 1 >> 1, m = Z - m, C = C + G + 1 >> 1, G = C - G, I = I + Q + 1 >> 1, Q = I - Q, te = te + T + 1 >> 1, T = te - T, D = 2276 * Z + 3406 * C + 2048 >> 12, Z = 3406 * Z - 2276 * C + 2048 >> 12, C = D, D = 799 * G + 4017 * m + 2048 >> 12, G = 4017 * G - 799 * m + 2048 >> 12, m = D, A[B] = I + C, A[B + 7] = I - C, A[B + 1] = te + m, A[B + 6] = te - m, A[B + 2] = T + G, A[B + 5] = T - G, A[B + 3] = Q + Z, A[B + 4] = Q - Z;
                }
              }
              for (y = 0; 8 > y; ++y) D = A[y], L = A[y + 8], j = A[y + 16], G = A[y + 24], Z = A[y + 32], m = A[y + 40], ee = A[y + 48], C = A[y + 56], L | j | G | Z | m | ee | C ? (I = 5793 * D + 2048 >> 12, te = 5793 * Z + 2048 >> 12, T = j, Q = ee, Z = 2896 * (L - C) + 2048 >> 12, C = 2896 * (L + C) + 2048 >> 12, I = (I + te + 1 >> 1) + 4112, te = I - te, D = 3784 * T + 1567 * Q + 2048 >> 12, T = 1567 * T - 3784 * Q + 2048 >> 12, Q = D, Z = Z + m + 1 >> 1, m = Z - m, C = C + G + 1 >> 1, G = C - G, I = I + Q + 1 >> 1, Q = I - Q, te = te + T + 1 >> 1, T = te - T, D = 2276 * Z + 3406 * C + 2048 >> 12, Z = 3406 * Z - 2276 * C + 2048 >> 12, C = D, D = 799 * G + 4017 * m + 2048 >> 12, G = 4017 * G - 799 * m + 2048 >> 12, m = D, D = I + C, C = I - C, L = te + m, ee = te - m, j = T + G, m = T - G, G = Q + Z, Z = Q - Z, D = 16 > D ? 0 : 4080 <= D ? 255 : D >> 4, L = 16 > L ? 0 : 4080 <= L ? 255 : L >> 4, j = 16 > j ? 0 : 4080 <= j ? 255 : j >> 4, G = 16 > G ? 0 : 4080 <= G ? 255 : G >> 4, Z = 16 > Z ? 0 : 4080 <= Z ? 255 : Z >> 4, m = 16 > m ? 0 : 4080 <= m ? 255 : m >> 4, ee = 16 > ee ? 0 : 4080 <= ee ? 255 : ee >> 4, C = 16 > C ? 0 : 4080 <= C ? 255 : C >> 4, N[p + y] = D, N[p + y + 8] = L, N[p + y + 16] = j, N[p + y + 24] = G, N[p + y + 32] = Z, N[p + y + 40] = m, N[p + y + 48] = ee, N[p + y + 56] = C) : (D = 5793 * D + 8192 >> 14, D = -2040 > D ? 0 : 2024 <= D ? 255 : D + 2056 >> 4, N[p + y] = D, N[p + y + 8] = D, N[p + y + 16] = D, N[p + y + 24] = D, N[p + y + 32] = D, N[p + y + 40] = D, N[p + y + 48] = D, N[p + y + 56] = D);
            }
            return u.a;
          }
          function b(f, u) {
            var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : u, l = f.length - 1;
            if (c = c < u ? c : u, u >= l) return null;
            var t = f[u] << 8 | f[u + 1];
            if (65472 <= t && 65534 >= t) return { f: null, F: t, offset: u };
            for (var w = f[c] << 8 | f[c + 1]; !(65472 <= w && 65534 >= w); ) {
              if (++c >= l) return null;
              w = f[c] << 8 | f[c + 1];
            }
            return { f: t.toString(16), F: w, offset: c };
          }
          var S = new Uint8Array([
            0,
            1,
            8,
            16,
            9,
            2,
            3,
            10,
            17,
            24,
            32,
            25,
            18,
            11,
            4,
            5,
            12,
            19,
            26,
            33,
            40,
            48,
            41,
            34,
            27,
            20,
            13,
            6,
            7,
            14,
            21,
            28,
            35,
            42,
            49,
            56,
            57,
            50,
            43,
            36,
            29,
            22,
            15,
            23,
            30,
            37,
            44,
            51,
            58,
            59,
            52,
            45,
            38,
            31,
            39,
            46,
            53,
            60,
            61,
            54,
            47,
            55,
            62,
            63
          ]);
          s.prototype = { parse: function(f) {
            function u() {
              var T = f[k] << 8 | f[k + 1];
              return k += 2, T;
            }
            function c() {
              var T = u();
              T = k + T - 2;
              var Q = b(f, T, k);
              return Q && Q.f && ((0, _util.warn)("readDataBlock - incorrect length, current marker is: " + Q.f), T = Q.offset), T = f.subarray(k, T), k += T.length, T;
            }
            function l(T) {
              for (var Q = Math.ceil(T.v / 8 / T.s), V = Math.ceil(T.g / 8 / T.u), de = 0; de < T.b.length; de++) {
                I = T.b[de];
                var re = Math.ceil(Math.ceil(T.v / 8) * I.h / T.s), oe = Math.ceil(Math.ceil(T.g / 8) * I.j / T.u);
                I.a = new Int16Array(64 * V * I.j * (Q * I.h + 1)), I.c = re, I.l = oe;
              }
              T.P = Q, T.O = V;
            }
            var t = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).N, w = t === void 0 ? null : t, k = 0, p = null, A = 0;
            t = [];
            var y = [], N = [], B = u();
            if (B !== 65496) throw new r("SOI not found");
            for (B = u(); B !== 65497; ) {
              switch (B) {
                case 65504:
                case 65505:
                case 65506:
                case 65507:
                case 65508:
                case 65509:
                case 65510:
                case 65511:
                case 65512:
                case 65513:
                case 65514:
                case 65515:
                case 65516:
                case 65517:
                case 65518:
                case 65519:
                case 65534:
                  var D = c();
                  B === 65518 && D[0] === 65 && D[1] === 100 && D[2] === 111 && D[3] === 98 && D[4] === 101 && (p = { version: D[5] << 8 | D[6], Y: D[7] << 8 | D[8], Z: D[9] << 8 | D[10], W: D[11] });
                  break;
                case 65499:
                  B = u() + k - 2;
                  for (var L; k < B; ) {
                    var j = f[k++], G = new Uint16Array(64);
                    if (j >> 4) if (j >> 4 === 1) for (D = 0; 64 > D; D++) L = S[D], G[L] = u();
                    else throw new r("DQT - invalid table spec");
                    else for (D = 0; 64 > D; D++) L = S[D], G[L] = f[k++];
                    t[j & 15] = G;
                  }
                  break;
                case 65472:
                case 65473:
                case 65474:
                  if (Z) throw new r("Only single frame JPEGs supported");
                  u();
                  var Z = {};
                  for (Z.X = B === 65473, Z.S = B === 65474, Z.precision = f[k++], B = u(), Z.g = w || B, Z.v = u(), Z.b = [], Z.C = {}, D = f[k++], B = G = j = 0; B < D; B++) {
                    L = f[k];
                    var m = f[k + 1] >> 4, ee = f[k + 1] & 15;
                    j < m && (j = m), G < ee && (G = ee), m = Z.b.push({ h: m, j: ee, T: f[k + 2], G: null }), Z.C[L] = m - 1, k += 3;
                  }
                  Z.s = j, Z.u = G, l(Z);
                  break;
                case 65476:
                  for (L = u(), B = 2; B < L; ) {
                    for (j = f[k++], G = new Uint8Array(16), D = m = 0; 16 > D; D++, k++) m += G[D] = f[k];
                    for (ee = new Uint8Array(m), D = 0; D < m; D++, k++) ee[D] = f[k];
                    B += 17 + m, (j >> 4 ? y : N)[j & 15] = v(G, ee);
                  }
                  break;
                case 65501:
                  u();
                  var C = u();
                  break;
                case 65498:
                  for (D = ++A === 1 && !w, u(), j = f[k++], L = [], B = 0; B < j; B++) {
                    G = Z.C[f[k++]];
                    var I = Z.b[G];
                    G = f[k++], I.D = N[G >> 4], I.o = y[G & 15], L.push(I);
                  }
                  B = f[k++], j = f[k++], G = f[k++];
                  try {
                    var te = _(f, k, Z, L, C, B, j, G >> 4, G & 15, D);
                    k += te;
                  } catch (T) {
                    if (T instanceof d) return (0, _util.warn)('Attempting to re-parse JPEG image using "scanLines" parameter found in DNL marker (0xFFDC) segment.'), this.parse(f, { N: T.g });
                    throw T;
                  }
                  break;
                case 65500:
                  k += 4;
                  break;
                case 65535:
                  f[k] !== 255 && k--;
                  break;
                default:
                  if (f[k - 3] === 255 && 192 <= f[k - 2] && 254 >= f[k - 2]) k -= 3;
                  else if ((D = b(f, k - 2)) && D.f) (0, _util.warn)("JpegImage.parse - unexpected data, current marker is: " + D.f), k = D.offset;
                  else throw new r("unknown marker " + B.toString(16));
              }
              B = u();
            }
            for (this.width = Z.v, this.height = Z.g, this.A = p, this.b = [], B = 0; B < Z.b.length; B++)
              I = Z.b[B], (C = t[I.T]) && (I.G = C), this.b.push({ R: h(Z, I), U: I.h / Z.s, V: I.j / Z.u, c: I.c, l: I.l });
            this.i = this.b.length;
          }, L: function(f, u) {
            var c = this.width / f, l = this.height / u, t, w, k = this.b.length, p = f * u * k, A = new Uint8ClampedArray(p), y = new Uint32Array(f);
            for (w = 0; w < k; w++) {
              var N = this.b[w], B = N.U * c, D = N.V * l, L = w, j = N.R, G = N.c + 1 << 3;
              for (t = 0; t < f; t++) N = 0 | t * B, y[t] = (N & 4294967288) << 3 | N & 7;
              for (B = 0; B < u; B++) for (N = 0 | B * D, N = G * (N & 4294967288) | (N & 7) << 3, t = 0; t < f; t++) A[L] = j[N + y[t]], L += k;
            }
            if (l = this.M) for (w = 0; w < p; ) for (c = N = 0; N < k; N++, w++, c += 2) A[w] = (A[w] * l[c] >> 8) + l[c + 1];
            return A;
          }, w: function() {
            return this.A ? !!this.A.W : this.i === 3 ? this.B !== 0 : this.B === 1;
          }, I: function(f) {
            for (var u, c, l, t = 0, w = f.length; t < w; t += 3) u = f[t], c = f[t + 1], l = f[t + 2], f[t] = u - 179.456 + 1.402 * l, f[t + 1] = u + 135.459 - 0.344 * c - 0.714 * l, f[t + 2] = u - 226.816 + 1.772 * c;
            return f;
          }, K: function(f) {
            for (var u, c, l, t, w = 0, k = 0, p = f.length; k < p; k += 4) u = f[k], c = f[k + 1], l = f[k + 2], t = f[k + 3], f[w++] = -122.67195406894 + c * (-660635669420364e-19 * c + 437130475926232e-18 * l - 54080610064599e-18 * u + 48449797120281e-17 * t - 0.154362151871126) + l * (-957964378445773e-18 * l + 817076911346625e-18 * u - 0.00477271405408747 * t + 1.53380253221734) + u * (961250184130688e-18 * u - 0.00266257332283933 * t + 0.48357088451265) + t * (-336197177618394e-18 * t + 0.484791561490776), f[w++] = 107.268039397724 + c * (219927104525741e-19 * c - 640992018297945e-18 * l + 659397001245577e-18 * u + 426105652938837e-18 * t - 0.176491792462875) + l * (-778269941513683e-18 * l + 0.00130872261408275 * u + 770482631801132e-18 * t - 0.151051492775562) + u * (0.00126935368114843 * u - 0.00265090189010898 * t + 0.25802910206845) + t * (-318913117588328e-18 * t - 0.213742400323665), f[w++] = -20.810012546947 + c * (-570115196973677e-18 * c - 263409051004589e-19 * l + 0.0020741088115012 * u - 0.00288260236853442 * t + 0.814272968359295) + l * (-153496057440975e-19 * l - 132689043961446e-18 * u + 560833691242812e-18 * t - 0.195152027534049) + u * (0.00174418132927582 * u - 0.00255243321439347 * t + 0.116935020465145) + t * (-343531996510555e-18 * t + 0.24165260232407);
            return f.subarray(
              0,
              w
            );
          }, J: function(f) {
            for (var u, c, l, t = 0, w = f.length; t < w; t += 4) u = f[t], c = f[t + 1], l = f[t + 2], f[t] = 434.456 - u - 1.402 * l, f[t + 1] = 119.541 - u + 0.344 * c + 0.714 * l, f[t + 2] = 481.816 - u - 1.772 * c;
            return f;
          }, H: function(f) {
            for (var u, c, l, t, w = 0, k = 1 / 255, p = 0, A = f.length; p < A; p += 4) u = f[p] * k, c = f[p + 1] * k, l = f[p + 2] * k, t = f[p + 3] * k, f[w++] = 255 + u * (-4.387332384609988 * u + 54.48615194189176 * c + 18.82290502165302 * l + 212.25662451639585 * t - 285.2331026137004) + c * (1.7149763477362134 * c - 5.6096736904047315 * l - 17.873870861415444 * t - 5.497006427196366) + l * (-2.5217340131683033 * l - 21.248923337353073 * t + 17.5119270841813) - t * (21.86122147463605 * t + 189.48180835922747), f[w++] = 255 + u * (8.841041422036149 * u + 60.118027045597366 * c + 6.871425592049007 * l + 31.159100130055922 * t - 79.2970844816548) + c * (-15.310361306967817 * c + 17.575251261109482 * l + 131.35250912493976 * t - 190.9453302588951) + l * (4.444339102852739 * l + 9.8632861493405 * t - 24.86741582555878) - t * (20.737325471181034 * t + 187.80453709719578), f[w++] = 255 + u * (0.8842522430003296 * u + 8.078677503112928 * c + 30.89978309703729 * l - 0.23883238689178934 * t - 14.183576799673286) + c * (10.49593273432072 * c + 63.02378494754052 * l + 50.606957656360734 * t - 112.23884253719248) + l * (0.03296041114873217 * l + 115.60384449646641 * t - 193.58209356861505) - t * (22.33816807309886 * t + 180.12613974708367);
            return f.subarray(0, w);
          }, getData: function(f, u, c) {
            if (4 < this.i) throw new r("Unsupported color mode");
            if (f = this.L(f, u), this.i === 1 && c) {
              c = f.length, u = new Uint8ClampedArray(3 * c);
              for (var l = 0, t = 0; t < c; t++) {
                var w = f[t];
                u[l++] = w, u[l++] = w, u[l++] = w;
              }
              return u;
            }
            if (this.i === 3 && this.w()) return this.I(f);
            if (this.i === 4) {
              if (this.w()) return c ? this.K(f) : this.J(f);
              if (c) return this.H(f);
            }
            return f;
          } }, g.JpegDecoder = s;
        })();
      })(), g.encodeImage = function(n, r, d, s) {
        var v = {
          t256: [r],
          t257: [d],
          t258: [8, 8, 8, 8],
          t259: [1],
          t262: [2],
          t273: [1e3],
          // strips offset
          t277: [4],
          t278: [d],
          /* rows per strip */
          t279: [r * d * 4],
          // strip byte counts
          t282: [1],
          t283: [1],
          t284: [1],
          t286: [0],
          t287: [0],
          t296: [1],
          t305: ["Photopea (UTIF.js)"],
          t338: [1]
        };
        if (s) for (var _ in s) v[_] = s[_];
        for (var h = new Uint8Array(g.encode([v])), b = new Uint8Array(n), S = new Uint8Array(1e3 + r * d * 4), _ = 0; _ < h.length; _++) S[_] = h[_];
        for (var _ = 0; _ < b.length; _++) S[1e3 + _] = b[_];
        return S.buffer;
      }, g.encode = function(n) {
        var r = new Uint8Array(2e4), d = 4, s = g._binBE;
        r[0] = 77, r[1] = 77, r[3] = 42;
        var v = 8;
        s.writeUint(r, d, v), d += 4;
        for (var _ = 0; _ < n.length; _++) {
          var h = g._writeIFD(s, r, v, n[_]);
          v = h[1], _ < n.length - 1 && s.writeUint(r, h[0], v);
        }
        return r.slice(0, v).buffer;
      }, g.decode = function(n) {
        g.decode._decodeG3.allow2D = null;
        var r = new Uint8Array(n), d = 0, s = g._binBE.readASCII(r, d, 2);
        d += 2;
        var v = s == "II" ? g._binLE : g._binBE;
        v.readUshort(r, d), d += 2;
        var _ = v.readUint(r, d);
        d += 4;
        for (var h = []; ; ) {
          var b = g._readIFD(v, r, _, h, 0, !1);
          if (_ = v.readUint(r, b), _ == 0) break;
        }
        return h;
      }, g.decodeImage = function(n, r, d) {
        var s = new Uint8Array(n), v = g._binBE.readASCII(s, 0, 2);
        if (r.t256 != null) {
          r.isLE = v == "II", r.width = r.t256[0], r.height = r.t257[0];
          var _ = r.t259 ? r.t259[0] : 1, h = r.t266 ? r.t266[0] : 1;
          r.t284 && r.t284[0] == 2 && F("PlanarConfiguration 2 should not be used!");
          var b;
          r.t258 ? b = Math.min(32, r.t258[0]) * r.t258.length : b = r.t277 ? r.t277[0] : 1, _ == 1 && r.t279 != null && r.t278 && r.t262[0] == 32803 && (b = Math.round(r.t279[0] * 8 / (r.width * r.t278[0])));
          var S = Math.ceil(r.width * b / 8) * 8, f = r.t273;
          f == null && (f = r.t324);
          var u = r.t279;
          _ == 1 && f.length == 1 && (u = [r.height * (S >>> 3)]), u == null && (u = r.t325);
          var c = new Uint8Array(r.height * (S >>> 3)), l = 0;
          if (r.t322 != null) {
            for (var t = r.t322[0], w = r.t323[0], k = Math.floor((r.width + t - 1) / t), p = Math.floor((r.height + w - 1) / w), A = new Uint8Array(Math.ceil(t * w * b / 8) | 0), y = 0; y < p; y++)
              for (var N = 0; N < k; N++) {
                for (var B = y * k + N, D = 0; D < A.length; D++) A[D] = 0;
                g.decode._decompress(r, d, s, f[B], u[B], _, A, 0, h), _ == 6 ? c = A : g._copyTile(A, Math.ceil(t * b / 8) | 0, w, c, Math.ceil(r.width * b / 8) | 0, r.height, Math.ceil(N * t * b / 8) | 0, y * w);
              }
            l = c.length * 8;
          } else {
            var L = r.t278 ? r.t278[0] : r.height;
            L = Math.min(L, r.height);
            for (var B = 0; B < f.length; B++)
              g.decode._decompress(r, d, s, f[B], u[B], _, c, Math.ceil(l / 8) | 0, h), l += S * L;
            l = Math.min(l, c.length * 8);
          }
          r.data = new Uint8Array(c.buffer, 0, Math.ceil(l / 8) | 0);
        }
      }, g.decode._decompress = function(n, r, d, s, v, _, h, b, S) {
        if (_ == 1 || v == h.length && _ != 32767) for (var f = 0; f < v; f++) h[b + f] = d[s + f];
        else if (_ == 3) g.decode._decodeG3(d, s, v, h, b, n.width, S);
        else if (_ == 4) g.decode._decodeG4(d, s, v, h, b, n.width, S);
        else if (_ == 5) g.decode._decodeLZW(d, s, h, b);
        else if (_ == 6) g.decode._decodeOldJPEG(n, d, s, v, h, b);
        else if (_ == 7) g.decode._decodeNewJPEG(n, d, s, v, h, b);
        else if (_ == 8)
          for (var u = new Uint8Array(d.buffer, s, v), c = Y.inflate(u), l = 0; l < c.length; l++) h[b + l] = c[l];
        else _ == 32767 ? g.decode._decodeARW(n, d, s, v, h, b) : _ == 32773 ? g.decode._decodePackBits(d, s, v, h, b) : _ == 32809 ? g.decode._decodeThunder(d, s, v, h, b) : _ == 34713 ? g.decode._decodeNikon(n, r, d, s, v, h, b) : F("Unknown compression", _);
        var t = n.t258 ? Math.min(32, n.t258[0]) : 1, w = n.t277 ? n.t277[0] : 1, k = t * w >>> 3, p = n.t278 ? n.t278[0] : n.height, A = Math.ceil(t * w * n.width / 8);
        if (t == 16 && !n.isLE && n.t33422 == null)
          for (var y = 0; y < p; y++)
            for (var N = b + y * A, B = 1; B < A; B += 2) {
              var D = h[N + B];
              h[N + B] = h[N + B - 1], h[N + B - 1] = D;
            }
        if (n.t317 && n.t317[0] == 2)
          for (var y = 0; y < p; y++) {
            var L = b + y * A;
            if (t == 16) for (var f = k; f < A; f += 2) {
              var j = (h[L + f + 1] << 8 | h[L + f]) + (h[L + f - k + 1] << 8 | h[L + f - k]);
              h[L + f] = j & 255, h[L + f + 1] = j >>> 8 & 255;
            }
            else if (w == 3) for (var f = 3; f < A; f += 3)
              h[L + f] = h[L + f] + h[L + f - 3] & 255, h[L + f + 1] = h[L + f + 1] + h[L + f - 2] & 255, h[L + f + 2] = h[L + f + 2] + h[L + f - 1] & 255;
            else for (var f = k; f < A; f++) h[L + f] = h[L + f] + h[L + f - k] & 255;
          }
      }, g.decode._ljpeg_diff = function(n, r, d) {
        var s = g.decode._getbithuff, v, _;
        return v = s(n, r, d[0], d), _ = s(n, r, v, 0), _ & 1 << v - 1 || (_ -= (1 << v) - 1), _;
      }, g.decode._decodeARW = function(n, r, d, s, v, _) {
        var h = n.t256[0], b = n.t257[0], S = n.t258[0], f = n.isLE ? g._binLE : g._binBE, u = h * b == s || h * b * 1.5 == s;
        if (!u) {
          b += 8;
          var c = [d, 0, 0, 0], l = new Uint16Array(32770), t = [
            3857,
            3856,
            3599,
            3342,
            3085,
            2828,
            2571,
            2314,
            2057,
            1800,
            1543,
            1286,
            1029,
            772,
            771,
            768,
            514,
            513
          ], V, w, k, Z, G, p = 0, A = g.decode._ljpeg_diff;
          for (l[0] = 15, k = V = 0; V < 18; V++)
            for (var y = 32768 >>> (t[V] >>> 8), w = 0; w < y; w++) l[++k] = t[V];
          for (Z = h; Z--; )
            for (G = 0; G < b + 1; G += 2)
              if (G == b && (G = 1), p += A(r, c, l), G < b) {
                var N = p & 4095;
                g.decode._putsF(v, (G * h + Z) * S, N << 16 - S);
              }
          return;
        }
        if (h * b * 1.5 == s) {
          for (var V = 0; V < s; V += 3) {
            var B = r[d + V + 0], D = r[d + V + 1], L = r[d + V + 2];
            v[_ + V] = D << 4 | B >>> 4, v[_ + V + 1] = B << 4 | L >>> 4, v[_ + V + 2] = L << 4 | D >>> 4;
          }
          return;
        }
        var j = new Uint16Array(16), G, Z, m, ee, C, I, te, T, Q, V, de, re = new Uint8Array(h + 1);
        for (G = 0; G < b; G++) {
          for (var oe = 0; oe < h; oe++) re[oe] = r[d++];
          for (de = 0, Z = 0; Z < h - 30; de += 16) {
            for (ee = 2047 & (m = f.readUint(re, de)), C = 2047 & m >>> 11, I = 15 & m >>> 22, te = 15 & m >>> 26, T = 0; T < 4 && 128 << T <= ee - C; T++) ;
            for (Q = 30, V = 0; V < 16; V++)
              V == I ? j[V] = ee : V == te ? j[V] = C : (j[V] = ((f.readUshort(re, de + (Q >> 3)) >>> (Q & 7) & 127) << T) + C, j[V] > 2047 && (j[V] = 2047), Q += 7);
            for (V = 0; V < 16; V++, Z += 2) {
              var N = j[V] << 1;
              g.decode._putsF(v, (G * h + Z) * S, N << 16 - S);
            }
            Z -= Z & 1 ? 1 : 31;
          }
        }
      }, g.decode._decodeNikon = function(n, r, d, s, v, _, h) {
        var b = [
          [
            0,
            0,
            1,
            5,
            1,
            1,
            1,
            1,
            1,
            1,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            /* 12-bit lossy */
            5,
            4,
            3,
            6,
            2,
            7,
            1,
            0,
            8,
            9,
            11,
            10,
            12
          ],
          [
            0,
            0,
            1,
            5,
            1,
            1,
            1,
            1,
            1,
            1,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            /* 12-bit lossy after split */
            57,
            90,
            56,
            39,
            22,
            5,
            4,
            3,
            2,
            1,
            0,
            11,
            12,
            12
          ],
          [
            0,
            0,
            1,
            4,
            2,
            3,
            1,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            /* 12-bit lossless */
            5,
            4,
            6,
            3,
            7,
            2,
            8,
            1,
            9,
            0,
            10,
            11,
            12
          ],
          [
            0,
            0,
            1,
            4,
            3,
            1,
            1,
            1,
            1,
            1,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            /* 14-bit lossy */
            5,
            6,
            4,
            7,
            8,
            3,
            9,
            2,
            1,
            0,
            10,
            11,
            12,
            13,
            14
          ],
          [
            0,
            0,
            1,
            5,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            2,
            0,
            0,
            0,
            0,
            0,
            /* 14-bit lossy after split */
            8,
            92,
            75,
            58,
            41,
            7,
            6,
            5,
            4,
            3,
            2,
            1,
            0,
            13,
            14
          ],
          [
            0,
            0,
            1,
            4,
            2,
            2,
            3,
            1,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            /* 14-bit lossless */
            7,
            6,
            8,
            5,
            9,
            4,
            10,
            3,
            11,
            12,
            2,
            0,
            1,
            13,
            14
          ]
        ], S = n.t256[0], f = n.t257[0], u = n.t258[0], c = 0, l = 0, t = g.decode._make_decoder, w = g.decode._getbithuff, k = r[0].exifIFD.makerNote, p = k.t150 ? k.t150 : k.t140, A = 0, y = p[A++], N = p[A++];
        (y == 73 || N == 88) && (A += 2110), y == 70 && (c = 2), u == 14 && (c += 3);
        for (var B = [[0, 0], [0, 0]], D = n.isLE ? g._binLE : g._binBE, m = 0; m < 2; m++) for (var L = 0; L < 2; L++)
          B[m][L] = D.readShort(p, A), A += 2;
        var j = 1 << u & 32767, G = 0, Z = D.readShort(p, A);
        A += 2, Z > 1 && (G = Math.floor(j / (Z - 1))), y == 68 && N == 32 && G > 0 && (l = D.readShort(p, 562));
        var m, ee, C, I, te, T, Q = [0, 0], V = t(b[c]), de = [s, 0, 0, 0];
        for (ee = 0; ee < f; ee++)
          for (l && ee == l && (V = t(b[c + 1])), C = 0; C < S; C++) {
            m = w(d, de, V[0], V), I = m & 15, te = m >>> 4, T = (w(d, de, I - te, 0) << 1) + 1 << te >>> 1, T & 1 << I - 1 || (T -= (1 << I) - (te == 0 ? 1 : 0)), C < 2 ? Q[C] = B[ee & 1][C] += T : Q[C & 1] += T;
            var re = Math.min(Math.max(Q[C & 1], 0), (1 << u) - 1), oe = (ee * S + C) * u;
            g.decode._putsF(_, oe, re << 16 - u);
          }
      }, g.decode._putsF = function(n, r, d) {
        d = d << 8 - (r & 7);
        var s = r >>> 3;
        n[s] |= d >>> 16, n[s + 1] |= d >>> 8, n[s + 2] |= d;
      }, g.decode._getbithuff = function(n, r, d, s) {
        var v = 0;
        g.decode._get_byte;
        var _, h = r[0], b = r[1], S = r[2], f = r[3];
        if (d == 0 || S < 0) return 0;
        for (; !f && S < d && (_ = n[h++]) != -1 && !(f = v); )
          b = (b << 8) + _, S += 8;
        if (_ = b << 32 - S >>> 32 - d, s ? (S -= s[_ + 1] >>> 8, _ = s[_ + 1] & 255) : S -= d, S < 0) throw "e";
        return r[0] = h, r[1] = b, r[2] = S, r[3] = f, _;
      }, g.decode._make_decoder = function(n) {
        var r, d, s, v, _, h = [];
        for (r = 16; r != 0 && !n[r]; r--) ;
        var b = 17;
        for (h[0] = r, s = d = 1; d <= r; d++)
          for (v = 0; v < n[d]; v++, ++b)
            for (_ = 0; _ < 1 << r - d; _++)
              s <= 1 << r && (h[s++] = d << 8 | n[b]);
        return h;
      }, g.decode._decodeNewJPEG = function(n, r, d, s, v, _) {
        var h = n.t347, b = h ? h.length : 0, S = new Uint8Array(b + s);
        if (h) {
          for (var f = 216, u = 217, c = 0, l = 0; l < b - 1 && !(h[l] == 255 && h[l + 1] == u); l++)
            S[c++] = h[l];
          var t = r[d], w = r[d + 1];
          (t != 255 || w != f) && (S[c++] = t, S[c++] = w);
          for (var l = 2; l < s; l++) S[c++] = r[d + l];
        } else for (var l = 0; l < s; l++) S[l] = r[d + l];
        if (n.t262[0] == 32803 || n.t262[0] == 34892) {
          var k = n.t258[0], p = g.LosslessJpegDecode(S), A = p.length;
          if (k == 16)
            if (n.isLE) for (var l = 0; l < A; l++)
              v[_ + (l << 1)] = p[l] & 255, v[_ + (l << 1) + 1] = p[l] >>> 8;
            else for (var l = 0; l < A; l++)
              v[_ + (l << 1)] = p[l] >>> 8, v[_ + (l << 1) + 1] = p[l] & 255;
          else if (k == 14 || k == 12)
            for (var y = 16 - k, l = 0; l < A; l++) g.decode._putsF(v, l * k, p[l] << y);
          else throw new Error("unsupported bit depth " + k);
        } else {
          var N = new g.JpegDecoder();
          N.parse(S);
          for (var B = N.getData(N.width, N.height), l = 0; l < B.length; l++) v[_ + l] = B[l];
        }
        n.t262[0] == 6 && (n.t262[0] = 2);
      }, g.decode._decodeOldJPEGInit = function(n, r, d, s) {
        var v = 216, _ = 219, h = 196, b = 221, S = 192, f = 218, u = 0, c = 0, l, t, w = !1, k, p, A, y = n.t513, N = y ? y[0] : 0, B = n.t514, D = B ? B[0] : 0, L = n.t324 || n.t273 || y, j = n.t530, G = 0, Z = 0, m = n.t277 ? n.t277[0] : 1, ee = n.t515;
        if (L && (c = L[0], w = L.length > 1), !w) {
          if (r[d] == 255 && r[d + 1] == v) return { jpegOffset: d };
          if (y != null && (r[d + N] == 255 && r[d + N + 1] == v ? u = d + N : F("JPEGInterchangeFormat does not point to SOI"), B == null ? F("JPEGInterchangeFormatLength field is missing") : (N >= c || N + D <= c) && F("JPEGInterchangeFormatLength field value is invalid"), u != null))
            return { jpegOffset: u };
        }
        if (j != null && (G = j[0], Z = j[1]), y != null && B != null)
          if (D >= 2 && N + D <= c) {
            for (r[d + N + D - 2] == 255 && r[d + N + D - 1] == v ? l = new Uint8Array(D - 2) : l = new Uint8Array(D), k = 0; k < l.length; k++) l[k] = r[d + N + k];
            F("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables");
          } else F("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");
        if (l == null) {
          var C = 0, I = [];
          I[C++] = 255, I[C++] = v;
          var te = n.t519;
          if (te == null) throw new Error("JPEGQTables tag is missing");
          for (k = 0; k < te.length; k++)
            for (I[C++] = 255, I[C++] = _, I[C++] = 0, I[C++] = 67, I[C++] = k, p = 0; p < 64; p++) I[C++] = r[d + te[k] + p];
          for (A = 0; A < 2; A++) {
            var T = n[A == 0 ? "t520" : "t521"];
            if (T == null) throw new Error((A == 0 ? "JPEGDCTables" : "JPEGACTables") + " tag is missing");
            for (k = 0; k < T.length; k++) {
              I[C++] = 255, I[C++] = h;
              var Q = 19;
              for (p = 0; p < 16; p++) Q += r[d + T[k] + p];
              for (I[C++] = Q >>> 8, I[C++] = Q & 255, I[C++] = k | A << 4, p = 0; p < 16; p++) I[C++] = r[d + T[k] + p];
              for (p = 0; p < Q; p++) I[C++] = r[d + T[k] + 16 + p];
            }
          }
          if (I[C++] = 255, I[C++] = S, I[C++] = 0, I[C++] = 8 + 3 * m, I[C++] = 8, I[C++] = n.height >>> 8 & 255, I[C++] = n.height & 255, I[C++] = n.width >>> 8 & 255, I[C++] = n.width & 255, I[C++] = m, m == 1)
            I[C++] = 1, I[C++] = 17, I[C++] = 0;
          else for (k = 0; k < 3; k++)
            I[C++] = k + 1, I[C++] = k != 0 ? 17 : (G & 15) << 4 | Z & 15, I[C++] = k;
          ee != null && ee[0] != 0 && (I[C++] = 255, I[C++] = b, I[C++] = 0, I[C++] = 4, I[C++] = ee[0] >>> 8 & 255, I[C++] = ee[0] & 255), l = new Uint8Array(I);
        }
        var V = -1;
        for (k = 0; k < l.length - 1; ) {
          if (l[k] == 255 && l[k + 1] == S) {
            V = k;
            break;
          }
          k++;
        }
        if (V == -1) {
          var de = new Uint8Array(l.length + 10 + 3 * m);
          de.set(l);
          var re = l.length;
          if (V = l.length, l = de, l[re++] = 255, l[re++] = S, l[re++] = 0, l[re++] = 8 + 3 * m, l[re++] = 8, l[re++] = n.height >>> 8 & 255, l[re++] = n.height & 255, l[re++] = n.width >>> 8 & 255, l[re++] = n.width & 255, l[re++] = m, m == 1)
            l[re++] = 1, l[re++] = 17, l[re++] = 0;
          else for (k = 0; k < 3; k++)
            l[re++] = k + 1, l[re++] = k != 0 ? 17 : (G & 15) << 4 | Z & 15, l[re++] = k;
        }
        if (r[c] == 255 && r[c + 1] == f) {
          var oe = r[c + 2] << 8 | r[c + 3];
          for (t = new Uint8Array(oe + 2), t[0] = r[c], t[1] = r[c + 1], t[2] = r[c + 2], t[3] = r[c + 3], k = 0; k < oe - 2; k++) t[k + 4] = r[c + k + 4];
        } else {
          t = new Uint8Array(8 + 2 * m);
          var le = 0;
          if (t[le++] = 255, t[le++] = f, t[le++] = 0, t[le++] = 6 + 2 * m, t[le++] = m, m == 1)
            t[le++] = 1, t[le++] = 0;
          else for (k = 0; k < 3; k++)
            t[le++] = k + 1, t[le++] = k << 4 | k;
          t[le++] = 0, t[le++] = 63, t[le++] = 0;
        }
        return { jpegOffset: d, tables: l, sosMarker: t, sofPosition: V };
      }, g.decode._decodeOldJPEG = function(n, r, d, s, v, _) {
        var h, b, S, f, u, c = g.decode._decodeOldJPEGInit(n, r, d, s);
        if (c.jpegOffset != null)
          for (b = d + s - c.jpegOffset, f = new Uint8Array(b), h = 0; h < b; h++) f[h] = r[c.jpegOffset + h];
        else {
          for (S = c.tables.length, f = new Uint8Array(S + c.sosMarker.length + s + 2), f.set(c.tables), u = S, f[c.sofPosition + 5] = n.height >>> 8 & 255, f[c.sofPosition + 6] = n.height & 255, f[c.sofPosition + 7] = n.width >>> 8 & 255, f[c.sofPosition + 8] = n.width & 255, (r[d] != 255 || r[d + 1] != SOS) && (f.set(c.sosMarker, u), u += sosMarker.length), h = 0; h < s; h++) f[u++] = r[d + h];
          f[u++] = 255, f[u++] = EOI;
        }
        var l = new g.JpegDecoder();
        l.parse(f);
        for (var t = l.getData(l.width, l.height), h = 0; h < t.length; h++) v[_ + h] = t[h];
        n.t262 && n.t262[0] == 6 && (n.t262[0] = 2);
      }, g.decode._decodePackBits = function(n, r, d, s, v) {
        for (var _ = new Int8Array(n.buffer), h = new Int8Array(s.buffer), b = r + d; r < b; ) {
          var S = _[r];
          if (r++, S >= 0 && S < 128) for (var f = 0; f < S + 1; f++)
            h[v] = _[r], v++, r++;
          if (S >= -127 && S < 0) {
            for (var f = 0; f < -S + 1; f++)
              h[v] = _[r], v++;
            r++;
          }
        }
      }, g.decode._decodeThunder = function(n, r, d, s, v) {
        for (var _ = [0, 1, 0, -1], h = [0, 1, 2, 3, 0, -3, -2, -1], b = r + d, S = v * 2, f = 0; r < b; ) {
          var u = n[r], c = u >>> 6, l = u & 63;
          if (r++, c == 3 && (f = l & 15, s[S >>> 1] |= f << 4 * (1 - S & 1), S++), c == 0) for (var t = 0; t < l; t++)
            s[S >>> 1] |= f << 4 * (1 - S & 1), S++;
          if (c == 2) for (var t = 0; t < 2; t++) {
            var w = l >>> 3 * (1 - t) & 7;
            w != 4 && (f += h[w], s[S >>> 1] |= f << 4 * (1 - S & 1), S++);
          }
          if (c == 1) for (var t = 0; t < 3; t++) {
            var w = l >>> 2 * (2 - t) & 3;
            w != 2 && (f += _[w], s[S >>> 1] |= f << 4 * (1 - S & 1), S++);
          }
        }
      }, g.decode._dmap = { 1: 0, "011": 1, "000011": 2, "0000011": 3, "010": -1, "000010": -2, "0000010": -3 }, g.decode._lens = function() {
        var n = function(S, f, u, c) {
          for (var l = 0; l < f.length; l++) S[f[l]] = u + l * c;
        }, r = "00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100", d = "0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111", s = "11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011", v = "0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101", _ = "00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";
        r = r.split(","), d = d.split(","), s = s.split(","), v = v.split(","), _ = _.split(",");
        var h = {}, b = {};
        return n(h, r, 0, 1), n(h, s, 64, 64), n(h, _, 1792, 64), n(b, d, 0, 1), n(b, v, 64, 64), n(b, _, 1792, 64), [h, b];
      }(), g.decode._decodeG4 = function(n, r, d, s, v, _, h) {
        for (var b = g.decode, S = r << 3, f = 0, u = "", c = [], l = [], t = 0; t < _; t++) l.push(0);
        l = b._makeDiff(l);
        for (var w = 0, k = 0, p = 0, A = 0, y = 0, N = 0, B = "", D = 0, L = Math.ceil(_ / 8) * 8; S >>> 3 < r + d; ) {
          p = b._findDiff(l, w + (w == 0 ? 0 : 1), 1 - y), A = b._findDiff(l, p, y);
          var j = 0;
          if (h == 1 && (j = n[S >>> 3] >>> 7 - (S & 7) & 1), h == 2 && (j = n[S >>> 3] >>> (S & 7) & 1), S++, u += j, B == "H") {
            if (b._lens[y][u] != null) {
              var G = b._lens[y][u];
              u = "", f += G, G < 64 && (b._addNtimes(c, f, y), w += f, y = 1 - y, f = 0, D--, D == 0 && (B = ""));
            }
          } else
            u == "0001" && (u = "", b._addNtimes(c, A - w, y), w = A), u == "001" && (u = "", B = "H", D = 2), b._dmap[u] != null && (k = p + b._dmap[u], b._addNtimes(c, k - w, y), w = k, u = "", y = 1 - y);
          c.length == _ && B == "" && (b._writeBits(c, s, v * 8 + N * L), y = 0, N++, w = 0, l = b._makeDiff(c), c = []);
        }
      }, g.decode._findDiff = function(n, r, d) {
        for (var s = 0; s < n.length; s += 2) if (n[s] >= r && n[s + 1] == d) return n[s];
      }, g.decode._makeDiff = function(n) {
        var r = [];
        n[0] == 1 && r.push(0, 1);
        for (var d = 1; d < n.length; d++) n[d - 1] != n[d] && r.push(d, n[d]);
        return r.push(n.length, 0, n.length, 1), r;
      }, g.decode._decodeG3 = function(n, r, d, s, v, _, h) {
        for (var b = g.decode, S = r << 3, f = 0, u = "", c = [], l = [], t = 0; t < _; t++) c.push(0);
        for (var w = 0, k = 0, p = 0, A = 0, y = 0, N = -1, B = "", D = 0, L = !1, j = Math.ceil(_ / 8) * 8; S >>> 3 < r + d; ) {
          p = b._findDiff(l, w + (w == 0 ? 0 : 1), 1 - y), A = b._findDiff(l, p, y);
          var G = 0;
          if (h == 1 && (G = n[S >>> 3] >>> 7 - (S & 7) & 1), h == 2 && (G = n[S >>> 3] >>> (S & 7) & 1), S++, u += G, L) {
            if (b._lens[y][u] != null) {
              var Z = b._lens[y][u];
              u = "", f += Z, Z < 64 && (b._addNtimes(c, f, y), y = 1 - y, f = 0);
            }
          } else if (B == "H") {
            if (b._lens[y][u] != null) {
              var Z = b._lens[y][u];
              u = "", f += Z, Z < 64 && (b._addNtimes(c, f, y), w += f, y = 1 - y, f = 0, D--, D == 0 && (B = ""));
            }
          } else
            u == "0001" && (u = "", b._addNtimes(c, A - w, y), w = A), u == "001" && (u = "", B = "H", D = 2), b._dmap[u] != null && (k = p + b._dmap[u], b._addNtimes(c, k - w, y), w = k, u = "", y = 1 - y);
          u.endsWith("000000000001") && (N >= 0 && b._writeBits(c, s, v * 8 + N * j), h == 1 && (L = (n[S >>> 3] >>> 7 - (S & 7) & 1) == 1), h == 2 && (L = (n[S >>> 3] >>> (S & 7) & 1) == 1), S++, b._decodeG3.allow2D == null && (b._decodeG3.allow2D = L), b._decodeG3.allow2D || (L = !0, S--), u = "", y = 0, N++, w = 0, l = b._makeDiff(c), c = []);
        }
        c.length == _ && b._writeBits(c, s, v * 8 + N * j);
      }, g.decode._addNtimes = function(n, r, d) {
        for (var s = 0; s < r; s++) n.push(d);
      }, g.decode._writeBits = function(n, r, d) {
        for (var s = 0; s < n.length; s++) r[d + s >>> 3] |= n[s] << 7 - (d + s & 7);
      }, g.decode._decodeLZW = function(n, r, d, s) {
        if (g.decode._lzwTab == null) {
          for (var v = new Uint32Array(65535), _ = new Uint16Array(65535), u = new Uint8Array(2e6), h = 0; h < 256; h++)
            u[h << 2] = h, v[h] = h << 2, _[h] = 1;
          g.decode._lzwTab = [v, _, u];
        }
        for (var b = g.decode._copyData, S = g.decode._lzwTab[0], f = g.decode._lzwTab[1], u = g.decode._lzwTab[2], c = 258, l = 1032, t = 9, w = r << 3, k = 256, p = 257, A = 0, y = 0, N = 0; A = n[w >>> 3] << 16 | n[w + 8 >>> 3] << 8 | n[w + 16 >>> 3], y = A >> 24 - (w & 7) - t & (1 << t) - 1, w += t, y != p; ) {
          if (y == k) {
            if (t = 9, c = 258, l = 1032, A = n[w >>> 3] << 16 | n[w + 8 >>> 3] << 8 | n[w + 16 >>> 3], y = A >> 24 - (w & 7) - t & (1 << t) - 1, w += t, y == p) break;
            d[s] = y, s++;
          } else if (y < c) {
            var B = S[y], D = f[y];
            if (b(u, B, d, s, D), s += D, N >= c)
              S[c] = l, u[S[c]] = B[0], f[c] = 1, l = l + 1 + 3 & -4, c++;
            else {
              S[c] = l;
              var L = S[N], j = f[N];
              b(u, L, u, l, j), u[l + j] = u[B], j++, f[c] = j, c++, l = l + j + 3 & -4;
            }
            c + 1 == 1 << t && t++;
          } else {
            if (N >= c)
              S[c] = l, f[c] = 0, c++;
            else {
              S[c] = l;
              var L = S[N], j = f[N];
              b(u, L, u, l, j), u[l + j] = u[l], j++, f[c] = j, c++, b(u, l, d, s, j), s += j, l = l + j + 3 & -4;
            }
            c + 1 == 1 << t && t++;
          }
          N = y;
        }
      }, g.decode._copyData = function(n, r, d, s, v) {
        for (var _ = 0; _ < v; _ += 4)
          d[s + _] = n[r + _], d[s + _ + 1] = n[r + _ + 1], d[s + _ + 2] = n[r + _ + 2], d[s + _ + 3] = n[r + _ + 3];
      }, g.tags = {}, g.ttypes = { 256: 3, 257: 3, 258: 3, 259: 3, 262: 3, 273: 4, 274: 3, 277: 3, 278: 4, 279: 4, 282: 5, 283: 5, 284: 3, 286: 5, 287: 5, 296: 3, 305: 2, 306: 2, 338: 3, 513: 4, 514: 4, 34665: 4 }, g._readIFD = function(n, r, d, s, v, _) {
        var h = n.readUshort(r, d);
        d += 2;
        var b = {};
        s.push(b), _ && F("   ".repeat(v), s.length - 1, ">>>----------------");
        for (var S = 0; S < h; S++) {
          var f = n.readUshort(r, d);
          d += 2;
          var u = n.readUshort(r, d);
          d += 2;
          var c = n.readUint(r, d);
          d += 4;
          var l = n.readUint(r, d);
          d += 4;
          var t = [];
          if ((u == 1 || u == 7) && (t = new Uint8Array(r.buffer, c < 5 ? d - 4 : l, c)), u == 2) {
            var w = c < 5 ? d - 4 : l, k = r[w];
            k < 128 ? t.push(n.readASCII(r, w, c - 1)) : t = new Uint8Array(r.buffer, w, c - 1);
          }
          if (u == 3)
            for (var p = 0; p < c; p++) t.push(n.readUshort(r, (c < 3 ? d - 4 : l) + 2 * p));
          if (u == 4)
            for (var p = 0; p < c; p++) t.push(n.readUint(r, (c < 2 ? d - 4 : l) + 4 * p));
          if (u == 5)
            for (var p = 0; p < c; p++) t.push(n.readUint(r, l + p * 8) / n.readUint(r, l + p * 8 + 4));
          if (u == 8)
            for (var p = 0; p < c; p++) t.push(n.readShort(r, (c < 3 ? d - 4 : l) + 2 * p));
          if (u == 9)
            for (var p = 0; p < c; p++) t.push(n.readInt(r, (c < 2 ? d - 4 : l) + 4 * p));
          if (u == 10)
            for (var p = 0; p < c; p++) t.push(n.readInt(r, l + p * 8) / n.readInt(r, l + p * 8 + 4));
          if (u == 11)
            for (var p = 0; p < c; p++) t.push(n.readFloat(r, l + p * 4));
          if (u == 12)
            for (var p = 0; p < c; p++) t.push(n.readDouble(r, l + p * 8));
          if (b["t" + f] = t, c != 0 && t.length == 0 && F("unknown TIFF tag type: ", u, "num:", c), _ && F("   ".repeat(v), f, u, g.tags[f], t), !(f == 330 && b.t272 && b.t272[0] == "DSLR-A100")) {
            if (f == 330 || f == 34665 || f == 50740 && n.readUshort(r, n.readUint(t, 0)) < 300) {
              for (var A = f == 50740 ? [n.readUint(t, 0)] : t, y = [], p = 0; p < A.length; p++) g._readIFD(n, r, A[p], y, v + 1, _);
              f == 330 && (b.subIFD = y), f == 34665 && (b.exifIFD = y[0]), f == 50740 && (b.dngPrvt = y[0]);
            }
          }
          if (f == 37500) {
            var N = t;
            if (n.readASCII(N, 0, 5) == "Nikon") b.makerNote = g.decode(N.slice(10).buffer)[0];
            else if (n.readUshort(r, l) < 300) {
              var B = [];
              g._readIFD(n, r, l, B, v + 1, _), b.makerNote = B[0];
            }
          }
        }
        return _ && F("   ".repeat(v), "<<<---------------"), d;
      }, g._writeIFD = function(n, r, d, s) {
        var v = Object.keys(s);
        n.writeUshort(r, d, v.length), d += 2;
        for (var _ = d + v.length * 12 + 4, h = 0; h < v.length; h++) {
          var b = v[h], S = parseInt(b.slice(1)), f = g.ttypes[S];
          if (f == null) throw new Error("unknown type of tag: " + S);
          var u = s[b];
          f == 2 && (u = u[0] + "\0");
          var c = u.length;
          n.writeUshort(r, d, S), d += 2, n.writeUshort(r, d, f), d += 2, n.writeUint(r, d, c), d += 4;
          var l = [-1, 1, 1, 2, 4, 8, 0, 0, 0, 0, 0, 0, 8][f] * c, t = d;
          if (l > 4 && (n.writeUint(r, d, _), t = _), f == 2 && n.writeASCII(r, t, u), f == 3)
            for (var w = 0; w < c; w++) n.writeUshort(r, t + 2 * w, u[w]);
          if (f == 4)
            for (var w = 0; w < c; w++) n.writeUint(r, t + 4 * w, u[w]);
          if (f == 5)
            for (var w = 0; w < c; w++)
              n.writeUint(r, t + 8 * w, Math.round(u[w] * 1e4)), n.writeUint(r, t + 8 * w + 4, 1e4);
          if (f == 12)
            for (var w = 0; w < c; w++) n.writeDouble(r, t + 8 * w, u[w]);
          l > 4 && (l += l & 1, _ += l), d += 4;
        }
        return [d, _];
      }, g.toRGBA8 = function(n) {
        var r = n.width, d = n.height, s = r * d, v = s * 4, _ = n.data, h = new Uint8Array(s * 4), b = n.t262 ? n.t262[0] : 2, S = n.t258 ? Math.min(32, n.t258[0]) : 1;
        if (b == 0)
          for (var f = Math.ceil(S * r / 8), u = 0; u < d; u++) {
            var c = u * f, l = u * r;
            if (S == 1) for (var t = 0; t < r; t++) {
              var w = l + t << 2, k = _[c + (t >> 3)] >> 7 - (t & 7) & 1;
              h[w] = h[w + 1] = h[w + 2] = (1 - k) * 255, h[w + 3] = 255;
            }
            if (S == 4) for (var t = 0; t < r; t++) {
              var w = l + t << 2, k = _[c + (t >> 1)] >> 4 - 4 * (t & 1) & 15;
              h[w] = h[w + 1] = h[w + 2] = (15 - k) * 17, h[w + 3] = 255;
            }
            if (S == 8) for (var t = 0; t < r; t++) {
              var w = l + t << 2, k = _[c + t];
              h[w] = h[w + 1] = h[w + 2] = 255 - k, h[w + 3] = 255;
            }
          }
        else if (b == 1)
          for (var f = Math.ceil(S * r / 8), u = 0; u < d; u++) {
            var c = u * f, l = u * r;
            if (S == 1) for (var t = 0; t < r; t++) {
              var w = l + t << 2, k = _[c + (t >> 3)] >> 7 - (t & 7) & 1;
              h[w] = h[w + 1] = h[w + 2] = k * 255, h[w + 3] = 255;
            }
            if (S == 2) for (var t = 0; t < r; t++) {
              var w = l + t << 2, k = _[c + (t >> 2)] >> 6 - 2 * (t & 3) & 3;
              h[w] = h[w + 1] = h[w + 2] = k * 85, h[w + 3] = 255;
            }
            if (S == 8) for (var t = 0; t < r; t++) {
              var w = l + t << 2, k = _[c + t];
              h[w] = h[w + 1] = h[w + 2] = k, h[w + 3] = 255;
            }
            if (S == 16) for (var t = 0; t < r; t++) {
              var w = l + t << 2, k = _[c + (2 * t + 1)];
              h[w] = h[w + 1] = h[w + 2] = Math.min(255, k), h[w + 3] = 255;
            }
          }
        else if (b == 2) {
          var p = n.t258 ? n.t258.length : 3;
          if (S == 8) {
            if (p == 4) for (var t = 0; t < v; t++) h[t] = _[t];
            if (p == 3) for (var t = 0; t < s; t++) {
              var w = t << 2, A = t * 3;
              h[w] = _[A], h[w + 1] = _[A + 1], h[w + 2] = _[A + 2], h[w + 3] = 255;
            }
          } else {
            if (p == 4) for (var t = 0; t < s; t++) {
              var w = t << 2, A = t * 8 + 1;
              h[w] = _[A], h[w + 1] = _[A + 2], h[w + 2] = _[A + 4], h[w + 3] = _[A + 6];
            }
            if (p == 3) for (var t = 0; t < s; t++) {
              var w = t << 2, A = t * 6 + 1;
              h[w] = _[A], h[w + 1] = _[A + 2], h[w + 2] = _[A + 4], h[w + 3] = 255;
            }
          }
        } else if (b == 3)
          for (var y = n.t320, t = 0; t < s; t++) {
            var w = t << 2, N = _[t];
            h[w] = y[N] >> 8, h[w + 1] = y[256 + N] >> 8, h[w + 2] = y[512 + N] >> 8, h[w + 3] = 255;
          }
        else if (b == 5)
          for (var p = n.t258 ? n.t258.length : 4, B = p > 4 ? 1 : 0, t = 0; t < s; t++) {
            var w = t << 2, D = t * p, L = 255 - _[D], j = 255 - _[D + 1], G = 255 - _[D + 2], Z = (255 - _[D + 3]) * (1 / 255);
            h[w] = ~~(L * Z + 0.5), h[w + 1] = ~~(j * Z + 0.5), h[w + 2] = ~~(G * Z + 0.5), h[w + 3] = 255 * (1 - B) + _[D + 4] * B;
          }
        else F("Unknown Photometric interpretation: " + b);
        return h;
      }, g.replaceIMG = function(n) {
        n == null && (n = document.getElementsByTagName("img"));
        for (var r = ["tif", "tiff", "dng", "cr2", "nef"], d = 0; d < n.length; d++) {
          var s = n[d], v = s.getAttribute("src");
          if (v != null) {
            var _ = v.split(".").pop().toLowerCase();
            if (r.indexOf(_) != -1) {
              var h = new XMLHttpRequest();
              g._xhrs.push(h), g._imgs.push(s), h.open("GET", v), h.responseType = "arraybuffer", h.onload = g._imgLoaded, h.send();
            }
          }
        }
      }, g._xhrs = [], g._imgs = [], g._imgLoaded = function(n) {
        var r = n.target.response, d = g.decode(r), s = d, v = 0, _ = s[0];
        d[0].subIFD && (s = s.concat(d[0].subIFD));
        for (var h = 0; h < s.length; h++) {
          var l = s[h];
          if (!(l.t258 == null || l.t258.length < 3)) {
            var b = l.t256 * l.t257;
            b > v && (v = b, _ = l);
          }
        }
        g.decodeImage(r, _, d);
        var S = g.toRGBA8(_), f = _.width, u = _.height, c = g._xhrs.indexOf(n.target), l = g._imgs[c];
        g._xhrs.splice(c, 1), g._imgs.splice(c, 1);
        var t = document.createElement("canvas");
        t.width = f, t.height = u;
        for (var w = t.getContext("2d"), k = w.createImageData(f, u), h = 0; h < S.length; h++) k.data[h] = S[h];
        w.putImageData(k, 0, 0), l.setAttribute("src", t.toDataURL());
      }, g._binBE = {
        nextZero: function(n, r) {
          for (; n[r] != 0; ) r++;
          return r;
        },
        readUshort: function(n, r) {
          return n[r] << 8 | n[r + 1];
        },
        readShort: function(n, r) {
          var d = g._binBE.ui8;
          return d[0] = n[r + 1], d[1] = n[r + 0], g._binBE.i16[0];
        },
        readInt: function(n, r) {
          var d = g._binBE.ui8;
          return d[0] = n[r + 3], d[1] = n[r + 2], d[2] = n[r + 1], d[3] = n[r + 0], g._binBE.i32[0];
        },
        readUint: function(n, r) {
          var d = g._binBE.ui8;
          return d[0] = n[r + 3], d[1] = n[r + 2], d[2] = n[r + 1], d[3] = n[r + 0], g._binBE.ui32[0];
        },
        readASCII: function(n, r, d) {
          for (var s = "", v = 0; v < d; v++) s += String.fromCharCode(n[r + v]);
          return s;
        },
        readFloat: function(n, r) {
          for (var d = g._binBE.ui8, s = 0; s < 4; s++) d[s] = n[r + 3 - s];
          return g._binBE.fl32[0];
        },
        readDouble: function(n, r) {
          for (var d = g._binBE.ui8, s = 0; s < 8; s++) d[s] = n[r + 7 - s];
          return g._binBE.fl64[0];
        },
        writeUshort: function(n, r, d) {
          n[r] = d >> 8 & 255, n[r + 1] = d & 255;
        },
        writeUint: function(n, r, d) {
          n[r] = d >> 24 & 255, n[r + 1] = d >> 16 & 255, n[r + 2] = d >> 8 & 255, n[r + 3] = d >> 0 & 255;
        },
        writeASCII: function(n, r, d) {
          for (var s = 0; s < d.length; s++) n[r + s] = d.charCodeAt(s);
        },
        writeDouble: function(n, r, d) {
          g._binBE.fl64[0] = d;
          for (var s = 0; s < 8; s++) n[r + s] = g._binBE.ui8[7 - s];
        }
      }, g._binBE.ui8 = new Uint8Array(8), g._binBE.i16 = new Int16Array(g._binBE.ui8.buffer), g._binBE.i32 = new Int32Array(g._binBE.ui8.buffer), g._binBE.ui32 = new Uint32Array(g._binBE.ui8.buffer), g._binBE.fl32 = new Float32Array(g._binBE.ui8.buffer), g._binBE.fl64 = new Float64Array(g._binBE.ui8.buffer), g._binLE = {
        nextZero: g._binBE.nextZero,
        readUshort: function(n, r) {
          return n[r + 1] << 8 | n[r];
        },
        readShort: function(n, r) {
          var d = g._binBE.ui8;
          return d[0] = n[r + 0], d[1] = n[r + 1], g._binBE.i16[0];
        },
        readInt: function(n, r) {
          var d = g._binBE.ui8;
          return d[0] = n[r + 0], d[1] = n[r + 1], d[2] = n[r + 2], d[3] = n[r + 3], g._binBE.i32[0];
        },
        readUint: function(n, r) {
          var d = g._binBE.ui8;
          return d[0] = n[r + 0], d[1] = n[r + 1], d[2] = n[r + 2], d[3] = n[r + 3], g._binBE.ui32[0];
        },
        readASCII: g._binBE.readASCII,
        readFloat: function(n, r) {
          for (var d = g._binBE.ui8, s = 0; s < 4; s++) d[s] = n[r + s];
          return g._binBE.fl32[0];
        },
        readDouble: function(n, r) {
          for (var d = g._binBE.ui8, s = 0; s < 8; s++) d[s] = n[r + s];
          return g._binBE.fl64[0];
        }
      }, g._copyTile = function(n, r, d, s, v, _, h, b) {
        for (var S = Math.min(r, v - h), f = Math.min(d, _ - b), u = 0; u < f; u++)
          for (var c = (b + u) * v + h, l = u * r, t = 0; t < S; t++) s[c + t] = n[l + t];
      }, g.LosslessJpegDecode = function() {
        function n(v) {
          this.w = v, this.N = 0, this._ = 0, this.G = 0;
        }
        n.prototype = { t: function(v) {
          this.N = Math.max(0, Math.min(this.w.length, v));
        }, i: function() {
          return this.w[this.N++];
        }, l: function() {
          var v = this.N;
          return this.N += 2, this.w[v] << 8 | this.w[v + 1];
        }, J: function() {
          return this._ == 0 && (this.G = this.w[this.N], this.N += 1 + (this.G + 1 >>> 8), this._ = 8), this.G >>> --this._ & 1;
        }, Z: function(v) {
          var _ = this._, h = this.G, b = Math.min(_, v);
          v -= b, _ -= b;
          for (var S = h >>> _ & (1 << b) - 1; v > 0; )
            h = this.w[this.N], this.N += 1 + (h + 1 >>> 8), b = Math.min(8, v), v -= b, _ = 8 - b, S <<= b, S |= h >>> _ & (1 << b) - 1;
          return this._ = _, this.G = h, S;
        } };
        var r = {};
        r.X = function() {
          return [0, 0, -1];
        }, r.s = function(v, _, h) {
          v[r.Y(v, 0, h) + 2] = _;
        }, r.Y = function(v, _, h) {
          if (v[_ + 2] != -1) return 0;
          if (h == 0) return _;
          for (var b = 0; b < 2; b++) {
            v[_ + b] == 0 && (v[_ + b] = v.length, v.push(0), v.push(0), v.push(-1));
            var S = r.Y(v, v[_ + b], h - 1);
            if (S != 0) return S;
          }
          return 0;
        }, r.B = function(v, _) {
          for (var h = 0, b = 0, S = 0, f = _._, u = _.G, c = _.N; ; )
            if (f == 0 && (u = _.w[c], c += 1 + (u + 1 >>> 8), f = 8), S = u >>> --f & 1, h = v[h + S], b = v[h + 2], b != -1)
              return _._ = f, _.G = u, _.N = c, b;
          return -1;
        };
        function d(v) {
          this.z = new n(v), this.D(this.z);
        }
        d.prototype = { $: function(v, _) {
          this.Q = v.i(), this.F = v.l(), this.o = v.l();
          var h = this.O = v.i();
          this.L = [];
          for (var b = 0; b < h; b++) {
            var S = v.i();
            v.i(), v.i(), this.L[S] = b;
          }
          v.t(v.N + _ - (6 + h * 3));
        }, e: function() {
          var v = 0, _ = this.z.i();
          this.H == null && (this.H = {});
          for (var h = this.H[_] = r.X(), b = [], S = 0; S < 16; S++)
            b[S] = this.z.i(), v += b[S];
          for (var S = 0; S < 16; S++) for (var f = 0; f < b[S]; f++) r.s(h, this.z.i(), S + 1);
          return v + 17;
        }, W: function(v) {
          for (; v > 0; ) v -= this.e();
        }, p: function(v, _) {
          var h = v.i();
          this.U || (this.U = []);
          for (var b = 0; b < h; b++) {
            var S = v.i(), f = v.i();
            this.U[this.L[S]] = this.H[f >>> 4];
          }
          this.g = v.i(), v.t(v.N + _ - (2 + h * 2));
        }, D: function(v) {
          var _ = !1, h = v.l();
          if (h === d.q)
            do {
              var h = v.l(), b = v.l() - 2;
              switch (h) {
                case d.m:
                  this.$(v, b);
                  break;
                case d.K:
                  this.W(b);
                  break;
                case d.V:
                  this.p(v, b), _ = !0;
                  break;
                default:
                  v.t(v.N + b);
                  break;
              }
            } while (!_);
        }, I: function(v, _) {
          var h = r.B(_, v);
          if (h == 16) return -32768;
          var b = v.Z(h);
          return b & 1 << h - 1 || (b -= (1 << h) - 1), b;
        }, B: function(v, _) {
          for (var h = this.z, b = this.O, S = this.F, f = this.I, u = this.g, c = this.o * b, l = this.U, t = 0; t < b; t++)
            v[t] = f(h, l[t]) + (1 << this.Q - 1);
          for (var w = b; w < c; w += b)
            for (var t = 0; t < b; t++) v[w + t] = f(h, l[t]) + v[w + t - b];
          for (var k = _, p = 1; p < S; p++) {
            for (var t = 0; t < b; t++)
              v[k + t] = f(h, l[t]) + v[k + t - _];
            for (var w = b; w < c; w += b)
              for (var t = 0; t < b; t++) {
                var A = k + w + t, y = v[A - b];
                u == 6 && (y = v[A - _] + (y - v[A - b - _] >>> 1)), v[A] = y + f(h, l[t]);
              }
            k += _;
          }
        } }, d.m = 65475, d.K = 65476, d.q = 65496, d.V = 65498;
        function s(v) {
          var _ = new d(v), h = _.Q > 8 ? Uint16Array : Uint8Array, b = new h(_.o * _.F * _.O), S = _.o * _.O;
          return _.B(b, S), b;
        }
        return s;
      }();
    })(he, J);
  })();
})(D0);
var L0 = D0.exports;
const W0 = /* @__PURE__ */ C0(L0), T0 = /* @__PURE__ */ M0({
  __proto__: null,
  default: W0
}, [L0]);
export {
  T0 as default
};

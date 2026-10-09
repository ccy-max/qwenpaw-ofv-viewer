(() => {
  const C = "0.3.0", P = "[ofv-viewer]", S = "qwenpaw-ofv-viewer", k = /* @__PURE__ */ new Set([
    // office（含老格式，原生都不支持）
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "rtf",
    "odt",
    "ods",
    "odp",
    // 压缩包
    "zip",
    "rar",
    "7z",
    "tar",
    "gz",
    "tgz",
    "bz2",
    // 邮件
    "eml",
    "msg",
    "mbox",
    // 文本/代码（原生只支持代码块内预览，这里给带高亮的完整预览）
    "txt",
    "log",
    "json",
    "yaml",
    "yml",
    "toml",
    "ini",
    "conf",
    "py",
    "js",
    "ts",
    "tsx",
    "jsx",
    "java",
    "go",
    "rs",
    "c",
    "cpp",
    "h",
    "sh",
    "sql",
    "xml"
  ]), b = (...e) => {
    try {
      console.log(P, C, ...e);
    } catch {
    }
  }, m = (...e) => {
    try {
      console.error(P, C, ...e);
    } catch {
    }
  };
  function R(e) {
    const t = /\.([^.]+)$/.exec(String(e || ""));
    return t ? t[1].toLowerCase() : "";
  }
  function I(e) {
    const t = String(e || ""), n = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
    return n >= 0 ? t.slice(n + 1) : t;
  }
  function O(e) {
    let t = String(e || "").trim();
    if (!t) return "";
    t.toLowerCase().startsWith("file://") && (t = t.slice(7), t.toLowerCase().startsWith("localhost/") && (t = t.slice(10))), t.startsWith("/files/preview/") && (t = t.slice(14));
    try {
      t = decodeURIComponent(t).replace(/\\/g, "/");
    } catch {
    }
    return t;
  }
  function z(e) {
    const t = String(e || ""), n = "/files/preview/", i = t.indexOf(n);
    if (i < 0) return "";
    const r = t.slice(i + n.length).split(/[?#]/, 1)[0];
    if (!r) return "";
    try {
      const c = decodeURIComponent(r).replace(/\\/g, "/");
      return /^[a-z]:\//i.test(c) ? c : "/" + c.replace(/^\/+/, "");
    } catch {
      return "";
    }
  }
  function F(e) {
    const t = /\/workspaces\/([^/]+)\//.exec(String(e || ""));
    return t ? t[1] : "";
  }
  function T(e) {
    const t = String(e || "");
    let n = /^(\/.*)\/coding_projects\/([^/]+)\//.exec(t);
    return n ? n[1] + "/coding_projects/" + n[2] : (n = /^\/(.*)\/workspaces\/([^/]+)\//.exec(t), n ? "/" + n[1] + "/workspaces/" + n[2] : "");
  }
  async function Q() {
    const e = window.QwenPaw;
    try {
      const t = await e.host.fetch("/agents");
      if (t.ok)
        return ((await t.json()).agents || []).map((i) => i.id).filter(Boolean);
    } catch {
    }
    return [];
  }
  async function U(e, t) {
    const n = window.QwenPaw;
    if (!n || !n.host || typeof n.host.fetch != "function")
      throw new Error("宿主 fetch 不可用");
    const i = [];
    t && /^\/files\/preview\//.test(String(t)) && i.push({ direct: String(t), agent: "" });
    const r = String(e || ""), f = r.replace(/^\/+/, "").split("/").filter(Boolean), u = (o, a, s) => {
      a && (i.some((d) => d.root === o && d.path === a && d.agent === s) || i.push({ root: o, path: a, agent: s }));
    }, p = [F(r)].filter(Boolean);
    for (const o of p) {
      const a = T(r), s = a ? r.slice(a.length + 1) : "";
      a && s && u("project:" + a, s, o);
      const d = "/workspaces/" + o + "/", v = r.indexOf(d);
      v >= 0 && u("workspace", r.slice(v + d.length), o);
      const W = Math.min(f.length, 3);
      for (let E = 1; E <= W; E++)
        u("workspace", f.slice(-E).join("/"), o), u("project", f.slice(-E).join("/"), o);
    }
    let l = "";
    const h = /* @__PURE__ */ new Set();
    for (const o of i) {
      const a = o.direct ? "d" : o.root + ":" + o.path + "@" + o.agent;
      if (!h.has(a)) {
        h.add(a);
        try {
          const s = o.direct ? o.direct : "/workspace/file-download?path=" + encodeURIComponent(o.path) + "&root=" + encodeURIComponent(o.root), d = o.agent ? { headers: { "X-Agent-Id": o.agent } } : void 0, v = await n.host.fetch(s, d);
          if (v.ok) return await v.blob();
          l = (o.direct ? "direct" : o.root + ":" + o.path + "@" + (o.agent || "cur")) + " -> HTTP " + v.status;
        } catch (s) {
          l = (o.direct ? "direct" : o.root + ":" + o.path + "@" + (o.agent || "cur")) + " -> " + (s && s.message ? s.message : s);
        }
      }
    }
    const w = f[f.length - 1] || "";
    if (w && !p.length) {
      const o = await Q();
      for (const a of o)
        for (const s of ["workspace", "project"])
          try {
            const d = "/workspace/file-download?path=" + encodeURIComponent(w) + "&root=" + s, v = await n.host.fetch(d, { headers: { "X-Agent-Id": a } });
            if (v.ok) return await v.blob();
            l = s + ":" + w + "@" + a + " -> HTTP " + v.status;
          } catch (d) {
            l = s + ":" + w + "@" + a + " -> " + (d && d.message ? d.message : d);
          }
    }
    throw new Error("拉取失败（已试 " + h.size + " 个候选）最后: " + l);
  }
  let y = null, x = null;
  const _ = {};
  function g() {
    try {
      x && x.destroy && x.destroy();
    } catch {
    }
    if (x = null, y && y.parentNode) {
      const e = y, t = e.firstElementChild;
      t && (t.style.transform = "translateX(100%)"), e.style.opacity = "0", setTimeout(() => {
        e.parentNode && e.parentNode.removeChild(e);
      }, 280);
    }
    y = null;
    try {
      document.removeEventListener("keydown", j);
    } catch {
    }
  }
  function j(e) {
    e.key === "Escape" && g();
  }
  function D() {
    if (document.getElementById("qp-ofv-style")) return;
    const e = document.createElement("style");
    e.id = "qp-ofv-style", e.textContent = [
      /* ---- 滚动条：OFV 内部滚动容器显式化（含代码区/面板/文本），可拖拽 ---- */
      "[data-qp-ofv-overlay] .ofv-code-body,",
      "[data-qp-ofv-overlay] .ofv-text-block,",
      "[data-qp-ofv-overlay] .ofv-panel,",
      "[data-qp-ofv-overlay] .ofv-viewport {",
      "  scrollbar-width: auto;",
      "  scrollbar-color: #94a3b8 transparent;",
      "}",
      "[data-qp-ofv-overlay] .ofv-code-body::-webkit-scrollbar,",
      "[data-qp-ofv-overlay] .ofv-text-block::-webkit-scrollbar,",
      "[data-qp-ofv-overlay] .ofv-panel::-webkit-scrollbar,",
      "[data-qp-ofv-overlay] .ofv-viewport::-webkit-scrollbar {",
      "  width: 14px; height: 14px;",
      "}",
      "[data-qp-ofv-overlay] .ofv-code-body::-webkit-scrollbar-thumb,",
      "[data-qp-ofv-overlay] .ofv-text-block::-webkit-scrollbar-thumb,",
      "[data-qp-ofv-overlay] .ofv-panel::-webkit-scrollbar-thumb,",
      "[data-qp-ofv-overlay] .ofv-viewport::-webkit-scrollbar-thumb {",
      "  background: #94a3b8; border-radius: 7px;",
      "  border: 3px solid transparent; background-clip: content-box;",
      "}",
      "[data-qp-ofv-overlay] .ofv-code-body::-webkit-scrollbar-thumb:hover,",
      "[data-qp-ofv-overlay] .ofv-text-block::-webkit-scrollbar-thumb:hover,",
      "[data-qp-ofv-overlay] .ofv-panel::-webkit-scrollbar-thumb:hover,",
      "[data-qp-ofv-overlay] .ofv-viewport::-webkit-scrollbar-thumb:hover {",
      "  background: #64748b; border: 3px solid transparent; background-clip: content-box;",
      "}",
      "[data-qp-ofv-overlay] .ofv-code-body::-webkit-scrollbar-track,",
      "[data-qp-ofv-overlay] .ofv-text-block::-webkit-scrollbar-track,",
      "[data-qp-ofv-overlay] .ofv-panel::-webkit-scrollbar-track,",
      "[data-qp-ofv-overlay] .ofv-viewport::-webkit-scrollbar-track {",
      "  background: #f1f5f9;",
      "}",
      /* ---- 工具栏按钮图标（换行/复制/下载）---- */
      "[data-qp-ofv-overlay] .ofv-code-action {",
      "  display: inline-flex; align-items: center; gap: 5px;",
      "  padding: 0 10px; font-size: 12.5px; min-height: 30px;",
      "  vertical-align: middle;",
      "}",
      "[data-qp-ofv-overlay] .ofv-code-action::before {",
      "  font-size: 11px; line-height: 1; font-style: normal;",
      "  margin-top: -0.5px;",
      "  display: inline-block;",
      "}",
      "[data-qp-ofv-overlay] .ofv-code-action:nth-of-type(1)::before { content: '\\21A9'; }",
      "[data-qp-ofv-overlay] .ofv-code-action:nth-of-type(2)::before { content: '\\2398'; }",
      "[data-qp-ofv-overlay] .ofv-code-action:nth-of-type(3)::before { content: '\\2913'; }",
      /* ---- 状态文字不挤按钮 ---- */
      "[data-qp-ofv-overlay] .ofv-code-status { flex: 0 1 auto; max-width: 220px; }"
    ].join(`
`), document.head.appendChild(e);
  }
  async function A(e, t, n, i) {
    g(), D();
    const r = document.createElement("div");
    r.setAttribute("data-qp-ofv-overlay", "1"), r.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:rgba(15,23,42,.45);transition:opacity .25s ease;", r.onclick = (o) => {
      o.target === r && g();
    };
    const c = document.createElement("div");
    c.style.cssText = "position:fixed;right:0;top:0;bottom:0;z-index:2147483001;width:min(96vw, 1100px);background:#fff;box-shadow:-8px 0 32px rgba(0,0,0,.18);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .3s cubic-bezier(0.16,1,0.3,1);font:14px/1.4 -apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;";
    const f = document.createElement("div");
    f.style.cssText = "flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid #e2e8f0;background:#fff;";
    const u = document.createElement("div");
    u.style.cssText = "font-weight:600;color:#0f172a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", u.textContent = e + " · 预览";
    const p = document.createElement("button");
    p.textContent = "✕", p.title = "关闭 (Esc)", p.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;", p.onmouseenter = () => {
      p.style.background = "#e2e8f0";
    }, p.onmouseleave = () => {
      p.style.background = "#f1f5f9";
    }, p.onclick = g, f.appendChild(u), f.appendChild(p);
    const l = document.createElement("div");
    l.style.cssText = "flex:1 1 auto;min-height:0;overflow:auto;padding:12px;";
    const h = document.createElement("div");
    h.textContent = "加载中…", h.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;min-height:240px;color:#64748b;", l.appendChild(h), c.appendChild(f), c.appendChild(l), r.appendChild(c), document.body.appendChild(r), y = r, document.addEventListener("keydown", j), requestAnimationFrame(() => {
      c.style.transform = "translateX(0)";
    });
    let w;
    try {
      w = await U(n, i);
    } catch (o) {
      h.textContent = "拉取文件失败：" + (o && o.message ? o.message : o) + "（点击关闭）", h.onclick = g, m("拉取失败", n, o);
      return;
    }
    try {
      l.removeChild(h);
      const o = document.createElement("div");
      o.style.cssText = "height:100%;min-height:0;", l.appendChild(o);
      const a = ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "rtf", "odt", "ods", "odp"].includes(t) ? "office" : ["zip", "rar", "7z", "tar", "gz", "tgz", "bz2"].includes(t) ? "archive" : ["eml", "msg", "mbox"].includes(t) ? "email" : "text";
      if (!_[a]) {
        const d = window.__QP_OFV_RENDERER_BASE__ || location.origin + "/api/frontend_plugin/" + S + "/files/frontend/renderer/";
        _[a] = import(
          /* @vite-ignore */
          d + a + ".js"
        ).catch((v) => {
          throw delete _[a], v;
        });
      }
      const { renderViewer: s } = await _[a];
      x = s({
        container: o,
        file: w,
        fileName: e,
        height: "100%",
        locale: "zh-CN",
        theme: "light",
        onError: (d, v) => m("OFV 渲染错误", v && v.name, d)
      }), b("已打开 OFV 预览:", e, "(" + t + ")", n);
    } catch (o) {
      h.textContent = "OFV 渲染失败：" + (o && o.message ? o.message : o) + "（点击关闭）", h.onclick = g, m("OFV 渲染失败", o);
    }
  }
  function L() {
    window.__QP_OFV_CAPTURE__ || (window.__QP_OFV_CAPTURE__ = !0, window.addEventListener(
      "qwenpaw:open-file-preview",
      (e) => {
        try {
          const n = (e && e.detail || {}).target || {}, i = String(n.artifactUrl || ""), r = String(n.path || ""), c = I(r || i), f = R(c || i || r);
          if (!k.has(f)) return;
          e.stopPropagation();
          try {
            e.stopImmediatePropagation();
          } catch {
          }
          b("接管预览:", c, "(" + f + ") path=", r, "url=", i);
          const u = O(r || i);
          if (!u) {
            m("无法归一化路径，放行");
            return;
          }
          A(c, f, u, i);
        } catch (t) {
          m("接管失败:", t);
        }
      },
      !0
    ), b("已安装预览接管监听"));
  }
  const M = new RegExp(
    "([\\w@.\\-]+\\.(" + [...k].join("|") + "))(?![\\w-])",
    "i"
  ), V = new RegExp(
    "(\\/?[\\w@.\\-]+(?:\\/[\\w@.\\-]+)*\\.(" + [...k].join("|") + "))(?![\\w-])",
    "i"
  );
  function N(e, t) {
    if (!e) return !1;
    const n = e.getAttribute("title") || e.getAttribute("aria-label") || e.getAttribute("data-path") || "", i = (e.textContent || "").replace(/\s+/g, " ").trim(), r = (n + " " + i).trim();
    let c = r;
    try {
      const o = decodeURIComponent(r);
      o.indexOf("�") === -1 && (c = o);
    } catch {
    }
    const f = M.exec(c);
    if (!f) return !1;
    const u = I(f[1]), p = R(u);
    if (!k.has(p)) return !1;
    let l = "";
    const h = V.exec(c);
    h ? (l = h[1], l.startsWith("/") || (l = "/" + l)) : l = u;
    try {
      const o = e.querySelector('a[href*="/files/preview/"], img[src*="/files/preview/"]'), a = o && (o.getAttribute("href") || o.getAttribute("src")) || "", s = z(a);
      s && (l = s);
    } catch {
    }
    const w = O(l);
    if (!w) return !1;
    if (t) {
      t.preventDefault(), t.stopPropagation();
      try {
        t.stopImmediatePropagation();
      } catch {
      }
    }
    return b("接管预览(DOM):", u, "(" + p + ") path=", w), A(u, p, w, ""), !0;
  }
  function B() {
    window.__QP_OFV_DOM__ || (window.__QP_OFV_DOM__ = !0, document.addEventListener(
      "click",
      (e) => {
        try {
          const t = e.target;
          if (!t || !t.closest || t.closest("[data-qp-ofv-overlay]")) return;
          const n = t.closest('[class*="bubbleFile"]') || t.closest('[class*="ResponseArtifactList-module__file"]') || t.closest('[class*="ResponseArtifactList-module__details__"]');
          if (!n) return;
          N(n, e);
        } catch (t) {
          m("DOM 委托失败:", t);
        }
      },
      !0
    ), b("已安装 DOM 点击委托"));
  }
  const X = "/api/frontend_plugin/" + S + "/files/frontend/style.css";
  function H() {
    if (document.querySelector("link[data-qp-ofv-style]")) return;
    const e = document.createElement("link");
    e.rel = "stylesheet", e.href = X, e.setAttribute("data-qp-ofv-style", "1"), document.head.appendChild(e);
  }
  function q() {
    H(), L(), B();
  }
  if (window.QwenPaw && window.QwenPaw.host)
    q();
  else {
    let e = 0;
    const t = setInterval(() => {
      if (window.QwenPaw && window.QwenPaw.host) {
        clearInterval(t), q();
        return;
      }
      ++e > 40 && (clearInterval(t), q());
    }, 500);
  }
})();

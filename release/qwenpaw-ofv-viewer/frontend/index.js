(() => {
  const P = "0.4.0", R = "[ofv-viewer]", S = "qwenpaw-ofv-viewer", _ = /* @__PURE__ */ new Set([
    // pdf（v0.4.0 接管）
    "pdf",
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
  ]), z = (() => {
    const e = {}, t = (n, i) => i.forEach((a) => e[a] = n);
    return t("office", ["docx", "docm", "dotx", "dotm", "rtf", "odt", "fodt"]), t("sheet", ["xlsx", "xlsm", "xlsb", "xls", "ods", "fods"]), t("ppt", ["pptx", "pptm", "ppsx", "ppsm", "potx", "potm", "odp", "fodp"]), t("legacy", ["doc", "dot", "ppt", "pps"]), t("pdf", ["pdf"]), t("archive", ["zip", "rar", "7z", "tar", "gz", "tgz", "bz2"]), t("email", ["eml", "msg", "mbox"]), t("plain", ["txt", "log", "conf", "ini", "env", "properties", "md"]), t("text", [
      "json",
      "yaml",
      "yml",
      "toml",
      "xml",
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
      "hpp",
      "sh",
      "bash",
      "sql",
      "rb",
      "php",
      "swift",
      "kt",
      "cs",
      "proto",
      "hcl",
      "tf",
      "dockerfile",
      "makefile"
    ]), e;
  })(), y = (...e) => {
    try {
      console.log(R, P, ...e);
    } catch {
    }
  }, w = (...e) => {
    try {
      console.error(R, P, ...e);
    } catch {
    }
  };
  function j(e) {
    const t = /\.([^.]+)$/.exec(String(e || ""));
    return t ? t[1].toLowerCase() : "";
  }
  function O(e) {
    const t = String(e || ""), n = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
    return n >= 0 ? t.slice(n + 1) : t;
  }
  function I(e) {
    let t = String(e || "").trim();
    if (!t) return "";
    t.toLowerCase().startsWith("file://") && (t = t.slice(7), t.toLowerCase().startsWith("localhost/") && (t = t.slice(10))), t.startsWith("/files/preview/") && (t = t.slice(14));
    try {
      t = decodeURIComponent(t).replace(/\\/g, "/");
    } catch {
    }
    return t;
  }
  function F(e) {
    const t = String(e || ""), n = "/files/preview/", i = t.indexOf(n);
    if (i < 0) return "";
    const a = t.slice(i + n.length).split(/[?#]/, 1)[0];
    if (!a) return "";
    try {
      const c = decodeURIComponent(a).replace(/\\/g, "/");
      return /^[a-z]:\//i.test(c) ? c : "/" + c.replace(/^\/+/, "");
    } catch {
      return "";
    }
  }
  function D(e) {
    const t = /\/workspaces\/([^/]+)\//.exec(String(e || ""));
    return t ? t[1] : "";
  }
  function Q(e) {
    const t = String(e || "");
    let n = /^(\/.*)\/coding_projects\/([^/]+)\//.exec(t);
    return n ? n[1] + "/coding_projects/" + n[2] : (n = /^\/(.*)\/workspaces\/([^/]+)\//.exec(t), n ? "/" + n[1] + "/workspaces/" + n[2] : "");
  }
  async function U() {
    const e = window.QwenPaw;
    try {
      const t = await e.host.fetch("/agents");
      if (t.ok)
        return ((await t.json()).agents || []).map((i) => i.id).filter(Boolean);
    } catch {
    }
    return [];
  }
  async function L(e, t) {
    const n = window.QwenPaw;
    if (!n || !n.host || typeof n.host.fetch != "function")
      throw new Error("宿主 fetch 不可用");
    const i = [];
    t && /^\/files\/preview\//.test(String(t)) && i.push({ direct: String(t), agent: "" });
    const a = String(e || ""), p = a.replace(/^\/+/, "").split("/").filter(Boolean), u = (o, f, r) => {
      f && (i.some((l) => l.root === o && l.path === f && l.agent === r) || i.push({ root: o, path: f, agent: r }));
    }, d = [D(a)].filter(Boolean);
    for (const o of d) {
      const f = Q(a), r = f ? a.slice(f.length + 1) : "";
      f && r && u("project:" + f, r, o);
      const l = "/workspaces/" + o + "/", v = a.indexOf(l);
      v >= 0 && u("workspace", a.slice(v + l.length), o);
      const E = Math.min(p.length, 3);
      for (let g = 1; g <= E; g++)
        u("workspace", p.slice(-g).join("/"), o), u("project", p.slice(-g).join("/"), o);
    }
    let s = "";
    const m = /* @__PURE__ */ new Set();
    for (const o of i) {
      const f = o.direct ? "d" : o.root + ":" + o.path + "@" + o.agent;
      if (!m.has(f)) {
        m.add(f);
        try {
          const r = o.direct ? o.direct : "/workspace/file-download?path=" + encodeURIComponent(o.path) + "&root=" + encodeURIComponent(o.root), l = o.agent ? { headers: { "X-Agent-Id": o.agent } } : void 0, v = await n.host.fetch(r, l);
          if (v.ok) return await v.blob();
          s = (o.direct ? "direct" : o.root + ":" + o.path + "@" + (o.agent || "cur")) + " -> HTTP " + v.status;
        } catch (r) {
          s = (o.direct ? "direct" : o.root + ":" + o.path + "@" + (o.agent || "cur")) + " -> " + (r && r.message ? r.message : r);
        }
      }
    }
    const h = p[p.length - 1] || "";
    if (h && !d.length) {
      const o = await U();
      for (const f of o)
        for (const r of ["workspace", "project"])
          try {
            const l = "/workspace/file-download?path=" + encodeURIComponent(h) + "&root=" + r, v = await n.host.fetch(l, { headers: { "X-Agent-Id": f } });
            if (v.ok) return await v.blob();
            s = r + ":" + h + "@" + f + " -> HTTP " + v.status;
          } catch (l) {
            s = r + ":" + h + "@" + f + " -> " + (l && l.message ? l.message : l);
          }
    }
    throw new Error("拉取失败（已试 " + m.size + " 个候选）最后: " + s);
  }
  let x = null, k = null;
  const q = {};
  function b() {
    try {
      k && k.destroy && k.destroy();
    } catch {
    }
    if (k = null, x && x.parentNode) {
      const e = x, t = e.firstElementChild;
      t && (t.style.transform = "translateX(100%)"), e.style.opacity = "0", setTimeout(() => {
        e.parentNode && e.parentNode.removeChild(e);
      }, 280);
    }
    x = null;
    try {
      document.removeEventListener("keydown", T);
    } catch {
    }
  }
  function T(e) {
    e.key === "Escape" && b();
  }
  function M(e) {
    const t = document.querySelector('[class*="sender"] textarea');
    if (!t)
      return w("未找到聊天输入框，引用失败"), !1;
    const n = "@ " + String(e || ""), i = t.selectionStart ?? t.value.length, a = t.selectionEnd ?? i, c = t.value.slice(0, i), p = t.value.slice(a), u = c && !/\s$/.test(c) ? " " : "", d = c + u + n + " " + p, s = Object.getPrototypeOf(t), m = Object.getOwnPropertyDescriptor(s, "value");
    m && m.set ? m.set.call(t, d) : t.value = d, t.dispatchEvent(new Event("input", { bubbles: !0 }));
    const h = c.length + u.length + n.length + 1;
    return requestAnimationFrame(() => {
      t.focus();
      try {
        t.setSelectionRange(h, h);
      } catch {
      }
    }), y("已引用到聊天:", n), !0;
  }
  function N() {
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
    b(), N();
    const a = document.createElement("div");
    a.setAttribute("data-qp-ofv-overlay", "1"), a.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:rgba(15,23,42,.45);transition:opacity .25s ease;", a.onclick = (r) => {
      r.target === a && b();
    };
    const c = document.createElement("div");
    c.style.cssText = "position:fixed;right:0;top:0;bottom:0;z-index:2147483001;width:min(96vw, 1100px);background:#fff;box-shadow:-8px 0 32px rgba(0,0,0,.18);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .3s cubic-bezier(0.16,1,0.3,1);font:14px/1.4 -apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;";
    const p = document.createElement("div");
    p.style.cssText = "flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid #e2e8f0;background:#fff;";
    const u = document.createElement("div");
    u.style.cssText = "font-weight:600;color:#0f172a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", u.textContent = e + " · 预览";
    const d = document.createElement("button");
    d.textContent = "✕", d.title = "关闭 (Esc)", d.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;", d.onmouseenter = () => {
      d.style.background = "#e2e8f0";
    }, d.onmouseleave = () => {
      d.style.background = "#f1f5f9";
    }, d.onclick = b;
    const s = document.createElement("button");
    s.textContent = "在聊天中引用", s.title = "以 @ 路径的形式插入到聊天输入框", s.style.cssText = "border:1px solid #e2e8f0;background:#fff;color:#334155;height:28px;padding:0 10px;border-radius:6px;cursor:pointer;font-size:12.5px;margin-right:8px;line-height:1;", s.onmouseenter = () => {
      s.style.background = "#f1f5f9";
    }, s.onmouseleave = () => {
      s.style.background = "#fff";
    }, s.onclick = () => {
      M(n) && b();
    };
    const m = document.createElement("div");
    m.style.cssText = "display:flex;align-items:center;", m.appendChild(s), m.appendChild(d), p.appendChild(u), p.appendChild(m);
    const h = document.createElement("div");
    h.style.cssText = "flex:1 1 auto;min-height:0;overflow:auto;padding:12px;";
    const o = document.createElement("div");
    o.textContent = "加载中…", o.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;min-height:240px;color:#64748b;", h.appendChild(o), c.appendChild(p), c.appendChild(h), a.appendChild(c), document.body.appendChild(a), x = a, document.addEventListener("keydown", T), requestAnimationFrame(() => {
      c.style.transform = "translateX(0)";
    });
    let f;
    try {
      f = await L(n, i);
    } catch (r) {
      o.textContent = "拉取文件失败：" + (r && r.message ? r.message : r) + "（点击关闭）", o.onclick = b, w("拉取失败", n, r);
      return;
    }
    try {
      h.removeChild(o);
      const r = document.createElement("div");
      r.style.cssText = "height:100%;min-height:0;", h.appendChild(r);
      const l = z[t] || "text";
      if (!q[l]) {
        const E = window.__QP_OFV_RENDERER_BASE__ || location.origin + "/api/frontend_plugin/" + S + "/files/frontend/renderer/";
        q[l] = import(
          /* @vite-ignore */
          E + l + ".js"
        ).catch((g) => {
          throw delete q[l], g;
        });
      }
      const { renderViewer: v } = await q[l];
      k = v({
        container: r,
        file: f,
        fileName: e,
        height: "100%",
        locale: "zh-CN",
        theme: "light",
        onError: (E, g) => w("OFV 渲染错误", g && g.name, E)
      }), y("已打开 OFV 预览:", e, "(" + t + ")", n);
    } catch (r) {
      o.textContent = "OFV 渲染失败：" + (r && r.message ? r.message : r) + "（点击关闭）", o.onclick = b, w("OFV 渲染失败", r);
    }
  }
  function V() {
    window.__QP_OFV_CAPTURE__ || (window.__QP_OFV_CAPTURE__ = !0, window.addEventListener(
      "qwenpaw:open-file-preview",
      (e) => {
        try {
          const n = (e && e.detail || {}).target || {}, i = String(n.artifactUrl || ""), a = String(n.path || ""), c = O(a || i), p = j(c || i || a);
          if (!_.has(p)) return;
          e.stopPropagation();
          try {
            e.stopImmediatePropagation();
          } catch {
          }
          y("接管预览:", c, "(" + p + ") path=", a, "url=", i);
          const u = I(a || i);
          if (!u) {
            w("无法归一化路径，放行");
            return;
          }
          A(c, p, u, i);
        } catch (t) {
          w("接管失败:", t);
        }
      },
      !0
    ), y("已安装预览接管监听"));
  }
  const B = new RegExp(
    "([\\w@.\\-]+\\.(" + [..._].join("|") + "))(?![\\w-])",
    "i"
  ), X = new RegExp(
    "(\\/?[\\w@.\\-]+(?:\\/[\\w@.\\-]+)*\\.(" + [..._].join("|") + "))(?![\\w-])",
    "i"
  );
  function H(e, t) {
    if (!e) return !1;
    const n = e.getAttribute("title") || e.getAttribute("aria-label") || e.getAttribute("data-path") || "", i = (e.textContent || "").replace(/\s+/g, " ").trim(), a = (n + " " + i).trim();
    let c = a;
    try {
      const o = decodeURIComponent(a);
      o.indexOf("�") === -1 && (c = o);
    } catch {
    }
    const p = B.exec(c);
    if (!p) return !1;
    const u = O(p[1]), d = j(u);
    if (!_.has(d)) return !1;
    let s = "";
    const m = X.exec(c);
    m ? (s = m[1], s.startsWith("/") || (s = "/" + s)) : s = u;
    try {
      const o = e.querySelector('a[href*="/files/preview/"], img[src*="/files/preview/"]'), f = o && (o.getAttribute("href") || o.getAttribute("src")) || "", r = F(f);
      r && (s = r);
    } catch {
    }
    const h = I(s);
    if (!h) return !1;
    if (t) {
      t.preventDefault(), t.stopPropagation();
      try {
        t.stopImmediatePropagation();
      } catch {
      }
    }
    return y("接管预览(DOM):", u, "(" + d + ") path=", h), A(u, d, h, ""), !0;
  }
  function W() {
    window.__QP_OFV_DOM__ || (window.__QP_OFV_DOM__ = !0, document.addEventListener(
      "click",
      (e) => {
        try {
          const t = e.target;
          if (!t || !t.closest || t.closest("[data-qp-ofv-overlay]")) return;
          const n = t.closest('[class*="bubbleFile"]') || t.closest('[class*="ResponseArtifactList-module__file"]') || t.closest('[class*="ResponseArtifactList-module__details__"]');
          if (!n) return;
          H(n, e);
        } catch (t) {
          w("DOM 委托失败:", t);
        }
      },
      !0
    ), y("已安装 DOM 点击委托"));
  }
  const G = "/api/frontend_plugin/" + S + "/files/frontend/style.css";
  function Y() {
    if (document.querySelector("link[data-qp-ofv-style]")) return;
    const e = document.createElement("link");
    e.rel = "stylesheet", e.href = G, e.setAttribute("data-qp-ofv-style", "1"), document.head.appendChild(e);
  }
  function C() {
    Y(), V(), W();
  }
  if (window.QwenPaw && window.QwenPaw.host)
    C();
  else {
    let e = 0;
    const t = setInterval(() => {
      if (window.QwenPaw && window.QwenPaw.host) {
        clearInterval(t), C();
        return;
      }
      ++e > 40 && (clearInterval(t), C());
    }, 500);
  }
})();

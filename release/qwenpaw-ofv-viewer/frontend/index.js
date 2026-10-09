(() => {
  const D = "0.5.1", M = "[ofv-viewer]", L = "qwenpaw-ofv-viewer", T = /* @__PURE__ */ new Set([
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
  ]), H = (() => {
    const e = {}, t = (n, l) => l.forEach((r) => e[r] = n);
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
  })(), _ = (...e) => {
    try {
      console.log(M, D, ...e);
    } catch {
    }
  }, k = (...e) => {
    try {
      console.error(M, D, ...e);
    } catch {
    }
  };
  function Q(e) {
    const t = /\.([^.]+)$/.exec(String(e || ""));
    return t ? t[1].toLowerCase() : "";
  }
  function U(e) {
    const t = String(e || ""), n = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
    return n >= 0 ? t.slice(n + 1) : t;
  }
  function N(e) {
    let t = String(e || "").trim();
    if (!t) return "";
    t.toLowerCase().startsWith("file://") && (t = t.slice(7), t.toLowerCase().startsWith("localhost/") && (t = t.slice(10))), t.startsWith("/files/preview/") && (t = t.slice(14));
    try {
      t = decodeURIComponent(t).replace(/\\/g, "/");
    } catch {
    }
    return t;
  }
  function W(e) {
    const t = String(e || ""), n = "/files/preview/", l = t.indexOf(n);
    if (l < 0) return "";
    const r = t.slice(l + n.length).split(/[?#]/, 1)[0];
    if (!r) return "";
    try {
      const a = decodeURIComponent(r).replace(/\\/g, "/");
      return /^[a-z]:\//i.test(a) ? a : "/" + a.replace(/^\/+/, "");
    } catch {
      return "";
    }
  }
  function G(e) {
    const t = /\/workspaces\/([^/]+)\//.exec(String(e || ""));
    return t ? t[1] : "";
  }
  function Y(e) {
    const t = String(e || "");
    let n = /^(\/.*)\/coding_projects\/([^/]+)\//.exec(t);
    return n ? n[1] + "/coding_projects/" + n[2] : (n = /^\/(.*)\/workspaces\/([^/]+)\//.exec(t), n ? "/" + n[1] + "/workspaces/" + n[2] : "");
  }
  async function $() {
    const e = window.QwenPaw;
    try {
      const t = await e.host.fetch("/agents");
      if (t.ok)
        return ((await t.json()).agents || []).map((l) => l.id).filter(Boolean);
    } catch {
    }
    return [];
  }
  async function K(e, t) {
    const n = window.QwenPaw;
    if (!n || !n.host || typeof n.host.fetch != "function")
      throw new Error("宿主 fetch 不可用");
    const l = [];
    t && /^\/files\/preview\//.test(String(t)) && l.push({ direct: String(t), agent: "" });
    const r = String(e || ""), f = r.replace(/^\/+/, "").split("/").filter(Boolean), u = (o, d, c) => {
      d && (l.some((h) => h.root === o && h.path === d && h.agent === c) || l.push({ root: o, path: d, agent: c }));
    }, p = [G(r)].filter(Boolean);
    for (const o of p) {
      const d = Y(r), c = d ? r.slice(d.length + 1) : "";
      d && c && u("project:" + d, c, o);
      const h = "/workspaces/" + o + "/", g = r.indexOf(h);
      g >= 0 && u("workspace", r.slice(g + h.length), o);
      const v = Math.min(f.length, 3);
      for (let q = 1; q <= v; q++)
        u("workspace", f.slice(-q).join("/"), o), u("project", f.slice(-q).join("/"), o);
    }
    let i = "";
    const b = /* @__PURE__ */ new Set();
    for (const o of l) {
      const d = o.direct ? "d" : o.root + ":" + o.path + "@" + o.agent;
      if (!b.has(d)) {
        b.add(d);
        try {
          const c = o.direct ? o.direct : "/workspace/file-download?path=" + encodeURIComponent(o.path) + "&root=" + encodeURIComponent(o.root), h = o.agent ? { headers: { "X-Agent-Id": o.agent } } : void 0, g = await n.host.fetch(c, h);
          if (g.ok) return await g.blob();
          i = (o.direct ? "direct" : o.root + ":" + o.path + "@" + (o.agent || "cur")) + " -> HTTP " + g.status;
        } catch (c) {
          i = (o.direct ? "direct" : o.root + ":" + o.path + "@" + (o.agent || "cur")) + " -> " + (c && c.message ? c.message : c);
        }
      }
    }
    const m = f[f.length - 1] || "";
    if (m && !p.length) {
      const o = await $();
      for (const d of o)
        for (const c of ["workspace", "project"])
          try {
            const h = "/workspace/file-download?path=" + encodeURIComponent(m) + "&root=" + c, g = await n.host.fetch(h, { headers: { "X-Agent-Id": d } });
            if (g.ok) return await g.blob();
            i = c + ":" + m + "@" + d + " -> HTTP " + g.status;
          } catch (h) {
            i = c + ":" + m + "@" + d + " -> " + (h && h.message ? h.message : h);
          }
    }
    throw new Error("拉取失败（已试 " + b.size + " 个候选）最后: " + i);
  }
  let C = null, x = null;
  const R = {};
  function E() {
    try {
      x && x.destroy && x.destroy();
    } catch {
    }
    if (x = null, C && C.parentNode) {
      const e = C, t = e.firstElementChild;
      t && (t.style.transform = "translateX(100%)"), e.style.opacity = "0", setTimeout(() => {
        e.parentNode && e.parentNode.removeChild(e);
      }, 280);
    }
    C = null;
    try {
      document.removeEventListener("keydown", V);
    } catch {
    }
  }
  function V(e) {
    e.key === "Escape" && E();
  }
  function J(e) {
    const t = document.querySelector('[class*="sender"] textarea');
    if (!t)
      return k("未找到聊天输入框，引用失败"), !1;
    const n = "@ " + String(e || ""), l = t.selectionStart ?? t.value.length, r = t.selectionEnd ?? l, a = t.value.slice(0, l), f = t.value.slice(r), u = a && !/\s$/.test(a) ? " " : "", p = a + u + n + " " + f, i = Object.getPrototypeOf(t), b = Object.getOwnPropertyDescriptor(i, "value");
    b && b.set ? b.set.call(t, p) : t.value = p, t.dispatchEvent(new Event("input", { bubbles: !0 }));
    const m = a.length + u.length + n.length + 1;
    return requestAnimationFrame(() => {
      t.focus();
      try {
        t.setSelectionRange(m, m);
      } catch {
      }
    }), _("已引用到聊天:", n), !0;
  }
  function Z() {
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
  async function B(e, t, n, l) {
    E(), Z();
    const r = document.createElement("div");
    r.setAttribute("data-qp-ofv-overlay", "1"), r.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:rgba(15,23,42,.45);transition:opacity .25s ease;", r.onclick = (s) => {
      s.target === r && E();
    };
    const a = document.createElement("div");
    a.style.cssText = "position:fixed;right:0;top:0;bottom:0;z-index:2147483001;width:min(96vw, 1100px);background:#fff;box-shadow:-8px 0 32px rgba(0,0,0,.18);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .3s cubic-bezier(0.16,1,0.3,1);font:14px/1.4 -apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;";
    const f = document.createElement("div");
    f.style.cssText = "flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid #e2e8f0;background:#fff;";
    const u = document.createElement("div");
    u.style.cssText = "font-weight:600;color:#0f172a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", u.textContent = e + " · 预览";
    const p = document.createElement("button");
    p.textContent = "✕", p.title = "关闭 (Esc)", p.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;", p.onmouseenter = () => {
      p.style.background = "#e2e8f0";
    }, p.onmouseleave = () => {
      p.style.background = "#f1f5f9";
    }, p.onclick = E;
    const i = document.createElement("button");
    i.textContent = "在聊天中引用", i.title = "以 @ 路径的形式插入到聊天输入框", i.style.cssText = "border:1px solid #e2e8f0;background:#fff;color:#334155;height:28px;padding:0 10px;border-radius:6px;cursor:pointer;font-size:12.5px;margin-right:8px;line-height:1;", i.onmouseenter = () => {
      i.style.background = "#f1f5f9";
    }, i.onmouseleave = () => {
      i.style.background = "#fff";
    }, i.onclick = () => {
      J(n) && E();
    };
    const m = [
      "pdf",
      "docx",
      "docm",
      "dotx",
      "dotm",
      "rtf",
      "odt",
      "fodt",
      "pptx",
      "pptm",
      "ppsx",
      "ppsm",
      "potx",
      "potm",
      "odp",
      "fodp",
      "doc",
      "ppt",
      "xlsx",
      "xls",
      "ods"
    ].includes(t), o = document.createElement("button");
    o.textContent = "☰ 目录", o.title = "显示/隐藏页码导航", o.style.cssText = i.style.cssText, o.onmouseenter = () => {
      o.style.background = "#f1f5f9";
    }, o.onmouseleave = () => {
      o.style.background = "#fff";
    }, o.onclick = () => {
      q(!h);
    };
    const d = document.createElement("button");
    d.textContent = "⛶", d.title = "全屏 / 退出全屏", d.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;margin-right:8px;", d.onclick = () => {
      document.fullscreenElement ? document.exitFullscreen() : a.requestFullscreen && a.requestFullscreen().catch(() => {
      });
    };
    const c = document.createElement("div");
    c.style.cssText = "display:flex;align-items:center;", c.appendChild(i), m && c.appendChild(o), c.appendChild(d), c.appendChild(p), f.appendChild(u), f.appendChild(c);
    let h = !1;
    const g = document.createElement("div");
    g.style.cssText = "flex:0 0 auto;width:0;overflow:hidden;transition:width .22s ease;border-right:0 solid #e2e8f0;background:#f8fafc;";
    const v = document.createElement("div");
    v.style.cssText = "width:200px;padding:12px;box-sizing:border-box;height:100%;overflow:auto;", v.innerHTML = '<div style="font-size:12px;color:#64748b;margin-bottom:8px">页面导航</div><div style="display:flex;gap:6px;margin-bottom:10px"><button data-toc="prev" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">上一页</button><button data-toc="next" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">下一页</button></div><div style="display:flex;gap:6px;align-items:center"><input data-toc="page" type="number" min="1" style="width:64px;height:28px;border:1px solid #e2e8f0;border-radius:6px;padding:0 6px"><button data-toc="go" style="height:28px;padding:0 10px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">跳转</button></div><div data-toc="tip" style="margin-top:10px;font-size:11.5px;color:#94a3b8;line-height:1.5">提示：也可直接用工具栏的缩放与搜索</div>', g.appendChild(v);
    function q(s) {
      h = s, g.style.width = s ? "200px" : "0", g.style.borderRightWidth = s ? "1px" : "0", o.style.background = s ? "#e2e8f0" : "#fff", setTimeout(() => {
        try {
          x && x.resize && x.resize();
        } catch {
        }
      }, 250);
    }
    const z = v.querySelector('[data-toc="page"]');
    let P = 1;
    const A = (s) => {
      if (!x || typeof x.goToPage != "function") return !1;
      const y = x.goToPage(s);
      return y && (P = s), y;
    };
    v.querySelector('[data-toc="prev"]').onclick = () => {
      A(Math.max(1, P - 1)) && (z.value = P);
    }, v.querySelector('[data-toc="next"]').onclick = () => {
      A(P + 1) && (z.value = P);
    }, v.querySelector('[data-toc="go"]').onclick = () => {
      const s = parseInt(z.value, 10);
      s > 0 && A(s);
    };
    const S = document.createElement("div");
    S.style.cssText = "flex:1 1 auto;min-height:0;overflow:auto;padding:12px;";
    const w = document.createElement("div");
    w.textContent = "加载中…", w.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;min-height:240px;color:#64748b;", S.appendChild(w), a.appendChild(f);
    const j = document.createElement("div");
    j.style.cssText = "flex:1 1 auto;min-height:0;display:flex;", j.appendChild(g), j.appendChild(S), a.appendChild(j), r.appendChild(a), document.body.appendChild(r), C = r, document.addEventListener("keydown", V), requestAnimationFrame(() => {
      a.style.transform = "translateX(0)";
    });
    let X;
    try {
      X = await K(n, l);
    } catch (s) {
      w.textContent = "拉取文件失败：" + (s && s.message ? s.message : s) + "（点击关闭）", w.onclick = E, k("拉取失败", n, s);
      return;
    }
    try {
      S.removeChild(w);
      const s = document.createElement("div");
      s.style.cssText = "height:100%;min-height:0;", S.appendChild(s);
      const y = H[t] || "text";
      if (!R[y]) {
        const F = window.__QP_OFV_RENDERER_BASE__ || location.origin + "/api/frontend_plugin/" + L + "/files/frontend/renderer/";
        R[y] = import(
          /* @vite-ignore */
          F + y + ".js"
        ).catch((O) => {
          throw delete R[y], O;
        });
      }
      const { renderViewer: it } = await R[y];
      x = it({
        container: s,
        file: X,
        fileName: e,
        height: "100%",
        locale: "zh-CN",
        theme: "light",
        onError: (F, O) => k("OFV 渲染错误", O && O.name, F)
      }), _("已打开 OFV 预览:", e, "(" + t + ")", n);
    } catch (s) {
      w.textContent = "OFV 渲染失败：" + (s && s.message ? s.message : s) + "（点击关闭）", w.onclick = E, k("OFV 渲染失败", s);
    }
  }
  function tt() {
    window.__QP_OFV_CAPTURE__ || (window.__QP_OFV_CAPTURE__ = !0, window.addEventListener(
      "qwenpaw:open-file-preview",
      (e) => {
        try {
          const n = (e && e.detail || {}).target || {}, l = String(n.artifactUrl || ""), r = String(n.path || ""), a = U(r || l), f = Q(a || l || r);
          if (!T.has(f)) return;
          e.stopPropagation();
          try {
            e.stopImmediatePropagation();
          } catch {
          }
          _("接管预览:", a, "(" + f + ") path=", r, "url=", l);
          const u = N(r || l);
          if (!u) {
            k("无法归一化路径，放行");
            return;
          }
          B(a, f, u, l);
        } catch (t) {
          k("接管失败:", t);
        }
      },
      !0
    ), _("已安装预览接管监听"));
  }
  const et = new RegExp(
    "([\\w@.\\-]+\\.(" + [...T].join("|") + "))(?![\\w-])",
    "i"
  ), ot = new RegExp(
    "(\\/?[\\w@.\\-]+(?:\\/[\\w@.\\-]+)*\\.(" + [...T].join("|") + "))(?![\\w-])",
    "i"
  );
  function nt(e, t) {
    if (!e) return !1;
    const n = e.getAttribute("title") || e.getAttribute("aria-label") || e.getAttribute("data-path") || "", l = (e.textContent || "").replace(/\s+/g, " ").trim(), r = (n + " " + l).trim();
    let a = r;
    try {
      const o = decodeURIComponent(r);
      o.indexOf("�") === -1 && (a = o);
    } catch {
    }
    const f = et.exec(a);
    if (!f) return !1;
    const u = U(f[1]), p = Q(u);
    if (!T.has(p)) return !1;
    let i = "";
    const b = ot.exec(a);
    b ? (i = b[1], i.startsWith("/") || (i = "/" + i)) : i = u;
    try {
      const o = e.querySelector('a[href*="/files/preview/"], img[src*="/files/preview/"]'), d = o && (o.getAttribute("href") || o.getAttribute("src")) || "", c = W(d);
      c && (i = c);
    } catch {
    }
    const m = N(i);
    if (!m) return !1;
    if (t) {
      t.preventDefault(), t.stopPropagation();
      try {
        t.stopImmediatePropagation();
      } catch {
      }
    }
    return _("接管预览(DOM):", u, "(" + p + ") path=", m), B(u, p, m, ""), !0;
  }
  function rt() {
    window.__QP_OFV_DOM__ || (window.__QP_OFV_DOM__ = !0, document.addEventListener(
      "click",
      (e) => {
        try {
          const t = e.target;
          if (!t || !t.closest || t.closest("[data-qp-ofv-overlay]")) return;
          const n = t.closest('[class*="bubbleFile"]') || t.closest('[class*="ResponseArtifactList-module__file"]') || t.closest('[class*="ResponseArtifactList-module__details__"]');
          if (!n) return;
          nt(n, e);
        } catch (t) {
          k("DOM 委托失败:", t);
        }
      },
      !0
    ), _("已安装 DOM 点击委托"));
  }
  const st = "/api/frontend_plugin/" + L + "/files/frontend/style.css";
  function at() {
    if (document.querySelector("link[data-qp-ofv-style]")) return;
    const e = document.createElement("link");
    e.rel = "stylesheet", e.href = st, e.setAttribute("data-qp-ofv-style", "1"), document.head.appendChild(e);
  }
  function I() {
    at(), tt(), rt();
  }
  if (window.QwenPaw && window.QwenPaw.host)
    I();
  else {
    let e = 0;
    const t = setInterval(() => {
      if (window.QwenPaw && window.QwenPaw.host) {
        clearInterval(t), I();
        return;
      }
      ++e > 40 && (clearInterval(t), I());
    }, 500);
  }
})();

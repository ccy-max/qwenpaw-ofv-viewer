(() => {
  const M = "0.6.2", L = "[ofv-viewer]", Q = "qwenpaw-ofv-viewer", T = /* @__PURE__ */ new Set([
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
  ]), W = (() => {
    const e = {}, t = (n, c) => c.forEach((r) => e[r] = n);
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
  })(), q = (...e) => {
    try {
      console.log(L, M, ...e);
    } catch {
    }
  }, k = (...e) => {
    try {
      console.error(L, M, ...e);
    } catch {
    }
  };
  function U(e) {
    const t = /\.([^.]+)$/.exec(String(e || ""));
    return t ? t[1].toLowerCase() : "";
  }
  function B(e) {
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
  function G(e) {
    const t = String(e || ""), n = "/files/preview/", c = t.indexOf(n);
    if (c < 0) return "";
    const r = t.slice(c + n.length).split(/[?#]/, 1)[0];
    if (!r) return "";
    try {
      const s = decodeURIComponent(r).replace(/\\/g, "/");
      return /^[a-z]:\//i.test(s) ? s : "/" + s.replace(/^\/+/, "");
    } catch {
      return "";
    }
  }
  function Y(e) {
    const t = /\/workspaces\/([^/]+)\//.exec(String(e || ""));
    return t ? t[1] : "";
  }
  function $(e) {
    const t = String(e || "");
    let n = /^(\/.*)\/coding_projects\/([^/]+)\//.exec(t);
    return n ? n[1] + "/coding_projects/" + n[2] : (n = /^\/(.*)\/workspaces\/([^/]+)\//.exec(t), n ? "/" + n[1] + "/workspaces/" + n[2] : "");
  }
  async function K() {
    const e = window.QwenPaw;
    try {
      const t = await e.host.fetch("/agents");
      if (t.ok)
        return ((await t.json()).agents || []).map((c) => c.id).filter(Boolean);
    } catch {
    }
    return [];
  }
  async function J(e, t) {
    const n = window.QwenPaw;
    if (!n || !n.host || typeof n.host.fetch != "function")
      throw new Error("宿主 fetch 不可用");
    const c = [];
    t && /^\/files\/preview\//.test(String(t)) && c.push({ direct: String(t), agent: "" });
    const r = String(e || ""), u = r.replace(/^\/+/, "").split("/").filter(Boolean), f = (o, d, l) => {
      d && (c.some((h) => h.root === o && h.path === d && h.agent === l) || c.push({ root: o, path: d, agent: l }));
    }, p = [Y(r)].filter(Boolean);
    for (const o of p) {
      const d = $(r), l = d ? r.slice(d.length + 1) : "";
      d && l && f("project:" + d, l, o);
      const h = "/workspaces/" + o + "/", x = r.indexOf(h);
      x >= 0 && f("workspace", r.slice(x + h.length), o);
      const b = Math.min(u.length, 3);
      for (let C = 1; C <= b; C++)
        f("workspace", u.slice(-C).join("/"), o), f("project", u.slice(-C).join("/"), o);
    }
    let a = "";
    const m = /* @__PURE__ */ new Set();
    for (const o of c) {
      const d = o.direct ? "d" : o.root + ":" + o.path + "@" + o.agent;
      if (!m.has(d)) {
        m.add(d);
        try {
          const l = o.direct ? o.direct : "/workspace/file-download?path=" + encodeURIComponent(o.path) + "&root=" + encodeURIComponent(o.root), h = o.agent ? { headers: { "X-Agent-Id": o.agent } } : void 0, x = await n.host.fetch(l, h);
          if (x.ok) return await x.blob();
          a = (o.direct ? "direct" : o.root + ":" + o.path + "@" + (o.agent || "cur")) + " -> HTTP " + x.status;
        } catch (l) {
          a = (o.direct ? "direct" : o.root + ":" + o.path + "@" + (o.agent || "cur")) + " -> " + (l && l.message ? l.message : l);
        }
      }
    }
    const g = u[u.length - 1] || "";
    if (g && !p.length) {
      const o = await K();
      for (const d of o)
        for (const l of ["workspace", "project"])
          try {
            const h = "/workspace/file-download?path=" + encodeURIComponent(g) + "&root=" + l, x = await n.host.fetch(h, { headers: { "X-Agent-Id": d } });
            if (x.ok) return await x.blob();
            a = l + ":" + g + "@" + d + " -> HTTP " + x.status;
          } catch (h) {
            a = l + ":" + g + "@" + d + " -> " + (h && h.message ? h.message : h);
          }
    }
    throw new Error("拉取失败（已试 " + m.size + " 个候选）最后: " + a);
  }
  function Z(e, t, n) {
    let c = !1;
    const r = () => {
      if (c) return !0;
      const a = e.querySelectorAll(".ofv-code-action");
      if (!a.length) return !1;
      let m = n.nextSibling;
      return a.forEach((g) => {
        g.setAttribute("data-qp-ofv-hoisted", "1"), g.style.cssText += "margin-left:8px;", t.insertBefore(g, m);
      }), c = !0, !0;
    };
    if (r()) return;
    const s = new MutationObserver(() => {
      r() && s.disconnect();
    });
    s.observe(e, { childList: !0, subtree: !0 });
    let u = 0;
    const f = setInterval(() => {
      (r() || ++u > 40) && (clearInterval(f), s.disconnect());
    }, 250), p = () => {
      s.disconnect(), clearInterval(f);
    };
    O.push(p);
  }
  let _ = null, v = null;
  const R = {}, O = [];
  function E() {
    try {
      v && v.destroy && v.destroy();
    } catch {
    }
    if (v = null, _ && _.parentNode) {
      const e = _, t = e.firstElementChild;
      t && (t.style.transform = "translateX(100%)"), e.style.opacity = "0", setTimeout(() => {
        e.parentNode && e.parentNode.removeChild(e);
      }, 280);
    }
    _ = null;
    try {
      document.removeEventListener("keydown", V);
    } catch {
    }
    for (; O.length; )
      try {
        O.pop()();
      } catch {
      }
  }
  function V(e) {
    e.key === "Escape" && E();
  }
  function tt(e) {
    const t = document.querySelector('[class*="sender"] textarea');
    if (!t)
      return k("未找到聊天输入框，引用失败"), !1;
    const n = "@ " + String(e || ""), c = t.selectionStart ?? t.value.length, r = t.selectionEnd ?? c, s = t.value.slice(0, c), u = t.value.slice(r), f = s && !/\s$/.test(s) ? " " : "", p = s + f + n + " " + u, a = Object.getPrototypeOf(t), m = Object.getOwnPropertyDescriptor(a, "value");
    m && m.set ? m.set.call(t, p) : t.value = p, t.dispatchEvent(new Event("input", { bubbles: !0 }));
    const g = s.length + f.length + n.length + 1;
    return requestAnimationFrame(() => {
      t.focus();
      try {
        t.setSelectionRange(g, g);
      } catch {
      }
    }), q("已引用到聊天:", n), !0;
  }
  function et() {
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
      /* 注：这些按钮已由 hoistCodeActions() 搬到抽屉标题栏，
         与「在聊天中引用」同一行；此处统一其外观与标题栏按钮一致 */
      "[data-qp-ofv-overlay] .ofv-code-action,",
      "[data-qp-ofv-hoisted].ofv-code-action {",
      "  display: inline-flex; align-items: center; gap: 6px;",
      "  height: 28px; padding: 0 11px; font-size: 12.5px;",
      "  border: 1px solid #e2e8f0; background: #fff; color: #334155;",
      "  border-radius: 6px; cursor: pointer; line-height: 1;",
      "  margin-left: 8px;",
      "}",
      "[data-qp-ofv-hoisted].ofv-code-action:hover { background: #f1f5f9; }",
      /* 搬运后：三个文字按钮自成一组，与右侧图标按钮（全屏/关闭）拉开距 */
      "[data-qp-ofv-hoisted].ofv-code-action:last-of-type { margin-right: 16px; }",
      "[data-qp-ofv-overlay] .ofv-code-action::before {",
      "  font-size: 11.5px; line-height: 1; font-style: normal;",
      "  margin-top: -0.5px;",
      "  display: inline-block;",
      "}",
      "[data-qp-ofv-overlay] .ofv-code-action:nth-of-type(1)::before { content: '\\21A9'; }",
      "[data-qp-ofv-overlay] .ofv-code-action:nth-of-type(2)::before { content: '\\2398'; }",
      "[data-qp-ofv-overlay] .ofv-code-action:nth-of-type(3)::before { content: '\\2913'; }",
      /* ---- 状态文字不挤按钮 ---- */
      "[data-qp-ofv-overlay] .ofv-code-status { flex: 0 1 auto; max-width: 220px; }",
      /* 按钮已搬到标题栏：面板头部隐藏动作容器（含状态），避免留白 */
      "[data-qp-ofv-overlay] .ofv-code-actions { display: none !important; }"
    ].join(`
`), document.head.appendChild(e);
  }
  async function X(e, t, n, c) {
    E(), et();
    const r = document.createElement("div");
    r.setAttribute("data-qp-ofv-overlay", "1"), r.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:rgba(15,23,42,.45);transition:opacity .25s ease;", r.onclick = (i) => {
      i.target === r && E();
    };
    const s = document.createElement("div");
    s.style.cssText = "position:fixed;right:0;top:0;bottom:0;z-index:2147483001;width:min(96vw, 1100px);background:#fff;box-shadow:-8px 0 32px rgba(0,0,0,.18);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .3s cubic-bezier(0.16,1,0.3,1);font:14px/1.4 -apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;";
    const u = document.createElement("div");
    u.style.cssText = "flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid #e2e8f0;background:#fff;";
    const f = document.createElement("div");
    f.style.cssText = "font-weight:600;color:#0f172a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", f.textContent = e + " · 预览";
    const p = document.createElement("button");
    p.textContent = "✕", p.title = "关闭 (Esc)", p.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;", p.onmouseenter = () => {
      p.style.background = "#e2e8f0";
    }, p.onmouseleave = () => {
      p.style.background = "#f1f5f9";
    }, p.onclick = E;
    const a = document.createElement("button");
    a.textContent = "在聊天中引用", a.title = "以 @ 路径的形式插入到聊天输入框", a.style.cssText = "border:1px solid #e2e8f0;background:#fff;color:#334155;height:28px;padding:0 10px;border-radius:6px;cursor:pointer;font-size:12.5px;margin-right:8px;line-height:1;", a.onmouseenter = () => {
      a.style.background = "#f1f5f9";
    }, a.onmouseleave = () => {
      a.style.background = "#fff";
    }, a.onclick = () => {
      tt(n) && E();
    };
    const g = [
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
    o.textContent = "☰ 目录", o.title = "显示/隐藏页码导航", o.style.cssText = a.style.cssText, o.onmouseenter = () => {
      o.style.background = "#f1f5f9";
    }, o.onmouseleave = () => {
      o.style.background = "#fff";
    }, o.onclick = () => {
      C(!h);
    };
    const d = document.createElement("button");
    d.textContent = "⛶", d.title = "全屏 / 退出全屏", d.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;margin-right:8px;", d.onclick = () => {
      document.fullscreenElement ? document.exitFullscreen() : s.requestFullscreen && s.requestFullscreen().catch(() => {
      });
    };
    const l = document.createElement("div");
    l.style.cssText = "display:flex;align-items:center;", l.appendChild(a), g && l.appendChild(o), l.appendChild(d), l.appendChild(p), u.appendChild(f), u.appendChild(l);
    let h = !1;
    const x = document.createElement("div");
    x.style.cssText = "flex:0 0 auto;width:0;overflow:hidden;transition:width .22s ease;border-right:0 solid #e2e8f0;background:#f8fafc;";
    const b = document.createElement("div");
    b.style.cssText = "width:200px;padding:12px;box-sizing:border-box;height:100%;overflow:auto;", b.innerHTML = '<div style="font-size:12px;color:#64748b;margin-bottom:8px">页面导航</div><div style="display:flex;gap:6px;margin-bottom:10px"><button data-toc="prev" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">上一页</button><button data-toc="next" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">下一页</button></div><div style="display:flex;gap:6px;align-items:center"><input data-toc="page" type="number" min="1" style="width:64px;height:28px;border:1px solid #e2e8f0;border-radius:6px;padding:0 6px"><button data-toc="go" style="height:28px;padding:0 10px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">跳转</button></div><div data-toc="tip" style="margin-top:10px;font-size:11.5px;color:#94a3b8;line-height:1.5">提示：也可直接用工具栏的缩放与搜索</div>', x.appendChild(b);
    function C(i) {
      h = i, x.style.width = i ? "200px" : "0", x.style.borderRightWidth = i ? "1px" : "0", o.style.background = i ? "#e2e8f0" : "#fff", setTimeout(() => {
        try {
          v && v.resize && v.resize();
        } catch {
        }
      }, 250);
    }
    const A = b.querySelector('[data-toc="page"]');
    let P = 1;
    const F = (i) => {
      if (!v || typeof v.goToPage != "function") return !1;
      const y = v.goToPage(i);
      return y && (P = i), y;
    };
    b.querySelector('[data-toc="prev"]').onclick = () => {
      F(Math.max(1, P - 1)) && (A.value = P);
    }, b.querySelector('[data-toc="next"]').onclick = () => {
      F(P + 1) && (A.value = P);
    }, b.querySelector('[data-toc="go"]').onclick = () => {
      const i = parseInt(A.value, 10);
      i > 0 && F(i);
    };
    const S = document.createElement("div");
    S.style.cssText = "flex:1 1 auto;min-height:0;overflow:auto;padding:12px;";
    const w = document.createElement("div");
    w.textContent = "加载中…", w.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;min-height:240px;color:#64748b;", S.appendChild(w), s.appendChild(u);
    const I = document.createElement("div");
    I.style.cssText = "flex:1 1 auto;min-height:0;display:flex;", I.appendChild(x), I.appendChild(S), s.appendChild(I), r.appendChild(s), document.body.appendChild(r), _ = r, document.addEventListener("keydown", V), requestAnimationFrame(() => {
      s.style.transform = "translateX(0)";
    });
    let H;
    try {
      H = await J(n, c);
    } catch (i) {
      w.textContent = "拉取文件失败：" + (i && i.message ? i.message : i) + "（点击关闭）", w.onclick = E, k("拉取失败", n, i);
      return;
    }
    try {
      S.removeChild(w);
      const i = document.createElement("div");
      i.style.cssText = "height:100%;min-height:0;", S.appendChild(i);
      const y = W[t] || "text";
      if (!R[y]) {
        const D = window.__QP_OFV_RENDERER_BASE__ || location.origin + "/api/frontend_plugin/" + Q + "/files/frontend/renderer/";
        R[y] = import(
          /* @vite-ignore */
          D + y + ".js"
        ).catch((j) => {
          throw delete R[y], j;
        });
      }
      const { renderViewer: lt } = await R[y];
      v = lt({
        container: i,
        file: H,
        fileName: e,
        height: "100%",
        locale: "zh-CN",
        theme: "light",
        onError: (D, j) => k("OFV 渲染错误", j && j.name, D)
      }), q("已打开 OFV 预览:", e, "(" + t + ")", n), Z(i, l, a);
    } catch (i) {
      w.textContent = "OFV 渲染失败：" + (i && i.message ? i.message : i) + "（点击关闭）", w.onclick = E, k("OFV 渲染失败", i);
    }
  }
  function ot() {
    window.__QP_OFV_CAPTURE__ || (window.__QP_OFV_CAPTURE__ = !0, window.addEventListener(
      "qwenpaw:open-file-preview",
      (e) => {
        try {
          const n = (e && e.detail || {}).target || {}, c = String(n.artifactUrl || ""), r = String(n.path || ""), s = B(r || c), u = U(s || c || r);
          if (!T.has(u)) return;
          e.stopPropagation();
          try {
            e.stopImmediatePropagation();
          } catch {
          }
          q("接管预览:", s, "(" + u + ") path=", r, "url=", c);
          const f = N(r || c);
          if (!f) {
            k("无法归一化路径，放行");
            return;
          }
          X(s, u, f, c);
        } catch (t) {
          k("接管失败:", t);
        }
      },
      !0
    ), q("已安装预览接管监听"));
  }
  const nt = new RegExp(
    "([\\w@.\\-]+\\.(" + [...T].join("|") + "))(?![\\w-])",
    "i"
  ), rt = new RegExp(
    "(\\/?[\\w@.\\-]+(?:\\/[\\w@.\\-]+)*\\.(" + [...T].join("|") + "))(?![\\w-])",
    "i"
  );
  function st(e, t) {
    if (!e) return !1;
    const n = e.getAttribute("title") || e.getAttribute("aria-label") || e.getAttribute("data-path") || "", c = (e.textContent || "").replace(/\s+/g, " ").trim(), r = (n + " " + c).trim();
    let s = r;
    try {
      const o = decodeURIComponent(r);
      o.indexOf("�") === -1 && (s = o);
    } catch {
    }
    const u = nt.exec(s);
    if (!u) return !1;
    const f = B(u[1]), p = U(f);
    if (!T.has(p)) return !1;
    let a = "";
    const m = rt.exec(s);
    m ? (a = m[1], a.startsWith("/") || (a = "/" + a)) : a = f;
    try {
      const o = e.querySelector('a[href*="/files/preview/"], img[src*="/files/preview/"]'), d = o && (o.getAttribute("href") || o.getAttribute("src")) || "", l = G(d);
      l && (a = l);
    } catch {
    }
    const g = N(a);
    if (!g) return !1;
    if (t) {
      t.preventDefault(), t.stopPropagation();
      try {
        t.stopImmediatePropagation();
      } catch {
      }
    }
    return q("接管预览(DOM):", f, "(" + p + ") path=", g), X(f, p, g, ""), !0;
  }
  function at() {
    window.__QP_OFV_DOM__ || (window.__QP_OFV_DOM__ = !0, document.addEventListener(
      "click",
      (e) => {
        try {
          const t = e.target;
          if (!t || !t.closest || t.closest("[data-qp-ofv-overlay]")) return;
          const n = t.closest('[class*="bubbleFile"]') || t.closest('[class*="ResponseArtifactList-module__file"]') || t.closest('[class*="ResponseArtifactList-module__details__"]');
          if (!n) return;
          st(n, e);
        } catch (t) {
          k("DOM 委托失败:", t);
        }
      },
      !0
    ), q("已安装 DOM 点击委托"));
  }
  const it = "/api/frontend_plugin/" + Q + "/files/frontend/style.css";
  function ct() {
    if (document.querySelector("link[data-qp-ofv-style]")) return;
    const e = document.createElement("link");
    e.rel = "stylesheet", e.href = it, e.setAttribute("data-qp-ofv-style", "1"), document.head.appendChild(e);
  }
  function z() {
    ct(), ot(), at();
  }
  if (window.QwenPaw && window.QwenPaw.host)
    z();
  else {
    let e = 0;
    const t = setInterval(() => {
      if (window.QwenPaw && window.QwenPaw.host) {
        clearInterval(t), z();
        return;
      }
      ++e > 40 && (clearInterval(t), z());
    }, 500);
  }
})();

(() => {
  const N = "0.6.3", U = "[ofv-viewer]", Q = "qwenpaw-ofv-viewer", j = /* @__PURE__ */ new Set([
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
  ]), Y = (() => {
    const t = {}, e = (n, c) => c.forEach((r) => t[r] = n);
    return e("office", ["docx", "docm", "dotx", "dotm", "rtf", "odt", "fodt"]), e("sheet", ["xlsx", "xlsm", "xlsb", "xls", "ods", "fods"]), e("ppt", ["pptx", "pptm", "ppsx", "ppsm", "potx", "potm", "odp", "fodp"]), e("legacy", ["doc", "dot", "ppt", "pps"]), e("pdf", ["pdf"]), e("archive", ["zip", "rar", "7z", "tar", "gz", "tgz", "bz2"]), e("email", ["eml", "msg", "mbox"]), e("plain", ["txt", "log", "conf", "ini", "env", "properties", "md"]), e("text", [
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
    ]), t;
  })(), _ = (...t) => {
    try {
      console.log(U, N, ...t);
    } catch {
    }
  }, k = (...t) => {
    try {
      console.error(U, N, ...t);
    } catch {
    }
  };
  function V(t) {
    const e = /\.([^.]+)$/.exec(String(t || ""));
    return e ? e[1].toLowerCase() : "";
  }
  function $(t) {
    const e = Number(t);
    return !isFinite(e) || e < 0 ? "" : e < 1024 ? e + " B" : e < 1024 * 1024 ? (e / 1024).toFixed(e < 10240 ? 1 : 0) + " KB" : (e / 1024 / 1024).toFixed(1) + " MB";
  }
  function X(t) {
    const e = String(t || ""), n = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\"));
    return n >= 0 ? e.slice(n + 1) : e;
  }
  function H(t) {
    let e = String(t || "").trim();
    if (!e) return "";
    e.toLowerCase().startsWith("file://") && (e = e.slice(7), e.toLowerCase().startsWith("localhost/") && (e = e.slice(10))), e.startsWith("/files/preview/") && (e = e.slice(14));
    try {
      e = decodeURIComponent(e).replace(/\\/g, "/");
    } catch {
    }
    return e;
  }
  function J(t) {
    const e = String(t || ""), n = "/files/preview/", c = e.indexOf(n);
    if (c < 0) return "";
    const r = e.slice(c + n.length).split(/[?#]/, 1)[0];
    if (!r) return "";
    try {
      const a = decodeURIComponent(r).replace(/\\/g, "/");
      return /^[a-z]:\//i.test(a) ? a : "/" + a.replace(/^\/+/, "");
    } catch {
      return "";
    }
  }
  function Z(t) {
    const e = /\/workspaces\/([^/]+)\//.exec(String(t || ""));
    return e ? e[1] : "";
  }
  function ee(t) {
    const e = String(t || "");
    let n = /^(\/.*)\/coding_projects\/([^/]+)\//.exec(e);
    return n ? n[1] + "/coding_projects/" + n[2] : (n = /^\/(.*)\/workspaces\/([^/]+)\//.exec(e), n ? "/" + n[1] + "/workspaces/" + n[2] : "");
  }
  async function te() {
    const t = window.QwenPaw;
    try {
      const e = await t.host.fetch("/agents");
      if (e.ok)
        return ((await e.json()).agents || []).map((c) => c.id).filter(Boolean);
    } catch {
    }
    return [];
  }
  async function oe(t, e) {
    const n = window.QwenPaw;
    if (!n || !n.host || typeof n.host.fetch != "function")
      throw new Error("宿主 fetch 不可用");
    const c = [];
    e && /^\/files\/preview\//.test(String(e)) && c.push({ direct: String(e), agent: "" });
    const r = String(t || ""), f = r.replace(/^\/+/, "").split("/").filter(Boolean), l = (o, i, u) => {
      i && (c.some((g) => g.root === o && g.path === i && g.agent === u) || c.push({ root: o, path: i, agent: u }));
    }, m = [Z(r)].filter(Boolean);
    for (const o of m) {
      const i = ee(r), u = i ? r.slice(i.length + 1) : "";
      i && u && l("project:" + i, u, o);
      const g = "/workspaces/" + o + "/", p = r.indexOf(g);
      p >= 0 && l("workspace", r.slice(p + g.length), o);
      const q = Math.min(f.length, 3);
      for (let v = 1; v <= q; v++)
        l("workspace", f.slice(-v).join("/"), o), l("project", f.slice(-v).join("/"), o);
    }
    let d = "";
    const x = /* @__PURE__ */ new Set();
    for (const o of c) {
      const i = o.direct ? "d" : o.root + ":" + o.path + "@" + o.agent;
      if (!x.has(i)) {
        x.add(i);
        try {
          const u = o.direct ? o.direct : "/workspace/file-download?path=" + encodeURIComponent(o.path) + "&root=" + encodeURIComponent(o.root), g = o.agent ? { headers: { "X-Agent-Id": o.agent } } : void 0, p = await n.host.fetch(u, g);
          if (p.ok) return await p.blob();
          d = (o.direct ? "direct" : o.root + ":" + o.path + "@" + (o.agent || "cur")) + " -> HTTP " + p.status;
        } catch (u) {
          d = (o.direct ? "direct" : o.root + ":" + o.path + "@" + (o.agent || "cur")) + " -> " + (u && u.message ? u.message : u);
        }
      }
    }
    const h = f[f.length - 1] || "";
    if (h && !m.length) {
      const o = await te();
      for (const i of o)
        for (const u of ["workspace", "project"])
          try {
            const g = "/workspace/file-download?path=" + encodeURIComponent(h) + "&root=" + u, p = await n.host.fetch(g, { headers: { "X-Agent-Id": i } });
            if (p.ok) return await p.blob();
            d = u + ":" + h + "@" + i + " -> HTTP " + p.status;
          } catch (g) {
            d = u + ":" + h + "@" + i + " -> " + (g && g.message ? g.message : g);
          }
    }
    throw new Error("拉取失败（已试 " + x.size + " 个候选）最后: " + d);
  }
  function ne(t, e, n) {
    let c = !1;
    const r = () => {
      if (c) return !0;
      const d = t.querySelectorAll(".ofv-code-action");
      if (!d.length) return !1;
      let x = n.nextSibling;
      return d.forEach((h) => {
        h.setAttribute("data-qp-ofv-hoisted", "1"), h.style.cssText += "margin-left:8px;", e.insertBefore(h, x);
      }), c = !0, !0;
    };
    if (r()) return;
    const a = new MutationObserver(() => {
      r() && a.disconnect();
    });
    a.observe(t, { childList: !0, subtree: !0 });
    let f = 0;
    const l = setInterval(() => {
      (r() || ++f > 40) && (clearInterval(l), a.disconnect());
    }, 250), m = () => {
      a.disconnect(), clearInterval(l);
    };
    A.push(m);
  }
  let P = null, b = null;
  const I = {}, A = [];
  function E() {
    try {
      b && b.destroy && b.destroy();
    } catch {
    }
    if (b = null, P && P.parentNode) {
      const t = P, e = t.firstElementChild;
      e && (e.style.transform = "translateX(100%)"), t.style.opacity = "0", setTimeout(() => {
        t.parentNode && t.parentNode.removeChild(t);
      }, 280);
    }
    P = null;
    try {
      document.removeEventListener("keydown", W);
    } catch {
    }
    for (; A.length; )
      try {
        A.pop()();
      } catch {
      }
  }
  function W(t) {
    t.key === "Escape" && E();
  }
  function re(t) {
    const e = document.querySelector('[class*="sender"] textarea');
    if (!e)
      return k("未找到聊天输入框，引用失败"), !1;
    const n = "@ " + String(t || ""), c = e.selectionStart ?? e.value.length, r = e.selectionEnd ?? c, a = e.value.slice(0, c), f = e.value.slice(r), l = a && !/\s$/.test(a) ? " " : "", m = a + l + n + " " + f, d = Object.getPrototypeOf(e), x = Object.getOwnPropertyDescriptor(d, "value");
    x && x.set ? x.set.call(e, m) : e.value = m, e.dispatchEvent(new Event("input", { bubbles: !0 }));
    const h = a.length + l.length + n.length + 1;
    return requestAnimationFrame(() => {
      e.focus();
      try {
        e.setSelectionRange(h, h);
      } catch {
      }
    }), _("已引用到聊天:", n), !0;
  }
  function se() {
    if (document.getElementById("qp-ofv-style")) return;
    const t = document.createElement("style");
    t.id = "qp-ofv-style", t.textContent = [
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
      /* 按钮已搬到标题栏：面板头整体隐藏（文件名/格式/行数/大小 已在抽屉标题展示，
         避免与标题栏重复出现两处文件名） */
      "[data-qp-ofv-overlay] .ofv-code-header { display: none !important; }"
    ].join(`
`), document.head.appendChild(t);
  }
  async function G(t, e, n, c) {
    E(), se();
    const r = document.createElement("div");
    r.setAttribute("data-qp-ofv-overlay", "1"), r.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:rgba(15,23,42,.45);transition:opacity .25s ease;", r.onclick = (s) => {
      s.target === r && E();
    };
    const a = document.createElement("div");
    a.style.cssText = "position:fixed;right:0;top:0;bottom:0;z-index:2147483001;width:min(96vw, 1100px);background:#fff;box-shadow:-8px 0 32px rgba(0,0,0,.18);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .3s cubic-bezier(0.16,1,0.3,1);font:14px/1.4 -apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;";
    const f = document.createElement("div");
    f.style.cssText = "flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid #e2e8f0;background:#fff;";
    const l = document.createElement("div");
    l.style.cssText = "min-width:0;overflow:hidden;";
    const m = document.createElement("div");
    m.textContent = t, m.style.cssText = "font-weight:600;color:#0f172a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
    const d = document.createElement("div");
    d.style.cssText = "font-size:11.5px;color:#94a3b8;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", l.appendChild(m), l.appendChild(d);
    const x = () => {
      const s = [];
      e && s.push(e.toUpperCase()), h.value != null && s.push($(h.value)), d.textContent = s.join(" · ");
    }, h = { value: null }, o = document.createElement("button");
    o.textContent = "✕", o.title = "关闭 (Esc)", o.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;", o.onmouseenter = () => {
      o.style.background = "#e2e8f0";
    }, o.onmouseleave = () => {
      o.style.background = "#f1f5f9";
    }, o.onclick = E;
    const i = document.createElement("button");
    i.textContent = "在聊天中引用", i.title = "以 @ 路径的形式插入到聊天输入框", i.style.cssText = "border:1px solid #e2e8f0;background:#fff;color:#334155;height:28px;padding:0 10px;border-radius:6px;cursor:pointer;font-size:12.5px;margin-right:8px;line-height:1;", i.onmouseenter = () => {
      i.style.background = "#f1f5f9";
    }, i.onmouseleave = () => {
      i.style.background = "#fff";
    }, i.onclick = () => {
      re(n) && E();
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
    ].includes(e), p = document.createElement("button");
    p.textContent = "☰ 目录", p.title = "显示/隐藏页码导航", p.style.cssText = i.style.cssText, p.onmouseenter = () => {
      p.style.background = "#f1f5f9";
    }, p.onmouseleave = () => {
      p.style.background = "#fff";
    }, p.onclick = () => {
      ue(!K);
    };
    const q = document.createElement("button");
    q.textContent = "⛶", q.title = "全屏 / 退出全屏", q.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;margin-right:8px;", q.onclick = () => {
      document.fullscreenElement ? document.exitFullscreen() : a.requestFullscreen && a.requestFullscreen().catch(() => {
      });
    };
    const v = document.createElement("div");
    v.style.cssText = "display:flex;align-items:center;", v.appendChild(i), g && v.appendChild(p), v.appendChild(q), v.appendChild(o), f.appendChild(l), f.appendChild(v);
    let K = !1;
    const T = document.createElement("div");
    T.style.cssText = "flex:0 0 auto;width:0;overflow:hidden;transition:width .22s ease;border-right:0 solid #e2e8f0;background:#f8fafc;";
    const C = document.createElement("div");
    C.style.cssText = "width:200px;padding:12px;box-sizing:border-box;height:100%;overflow:auto;", C.innerHTML = '<div style="font-size:12px;color:#64748b;margin-bottom:8px">页面导航</div><div style="display:flex;gap:6px;margin-bottom:10px"><button data-toc="prev" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">上一页</button><button data-toc="next" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">下一页</button></div><div style="display:flex;gap:6px;align-items:center"><input data-toc="page" type="number" min="1" style="width:64px;height:28px;border:1px solid #e2e8f0;border-radius:6px;padding:0 6px"><button data-toc="go" style="height:28px;padding:0 10px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">跳转</button></div><div data-toc="tip" style="margin-top:10px;font-size:11.5px;color:#94a3b8;line-height:1.5">提示：也可直接用工具栏的缩放与搜索</div>', T.appendChild(C);
    function ue(s) {
      K = s, T.style.width = s ? "200px" : "0", T.style.borderRightWidth = s ? "1px" : "0", p.style.background = s ? "#e2e8f0" : "#fff", setTimeout(() => {
        try {
          b && b.resize && b.resize();
        } catch {
        }
      }, 250);
    }
    const M = C.querySelector('[data-toc="page"]');
    let S = 1;
    const D = (s) => {
      if (!b || typeof b.goToPage != "function") return !1;
      const y = b.goToPage(s);
      return y && (S = s), y;
    };
    C.querySelector('[data-toc="prev"]').onclick = () => {
      D(Math.max(1, S - 1)) && (M.value = S);
    }, C.querySelector('[data-toc="next"]').onclick = () => {
      D(S + 1) && (M.value = S);
    }, C.querySelector('[data-toc="go"]').onclick = () => {
      const s = parseInt(M.value, 10);
      s > 0 && D(s);
    };
    const R = document.createElement("div");
    R.style.cssText = "flex:1 1 auto;min-height:0;overflow:auto;padding:12px;";
    const w = document.createElement("div");
    w.textContent = "加载中…", w.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;min-height:240px;color:#64748b;", R.appendChild(w), a.appendChild(f);
    const O = document.createElement("div");
    O.style.cssText = "flex:1 1 auto;min-height:0;display:flex;", O.appendChild(T), O.appendChild(R), a.appendChild(O), r.appendChild(a), document.body.appendChild(r), P = r, document.addEventListener("keydown", W), requestAnimationFrame(() => {
      a.style.transform = "translateX(0)";
    });
    let B;
    try {
      B = await oe(n, c), h.value = B, x();
    } catch (s) {
      w.textContent = "拉取文件失败：" + (s && s.message ? s.message : s) + "（点击关闭）", w.onclick = E, k("拉取失败", n, s);
      return;
    }
    try {
      R.removeChild(w);
      const s = document.createElement("div");
      s.style.cssText = "height:100%;min-height:0;", R.appendChild(s);
      const y = Y[e] || "text";
      if (!I[y]) {
        const L = window.__QP_OFV_RENDERER_BASE__ || location.origin + "/api/frontend_plugin/" + Q + "/files/frontend/renderer/";
        I[y] = import(
          /* @vite-ignore */
          L + y + ".js"
        ).catch((z) => {
          throw delete I[y], z;
        });
      }
      const { renderViewer: he } = await I[y];
      b = he({
        container: s,
        file: B,
        fileName: t,
        height: "100%",
        locale: "zh-CN",
        theme: "light",
        onError: (L, z) => k("OFV 渲染错误", z && z.name, L)
      }), _("已打开 OFV 预览:", t, "(" + e + ")", n), ne(s, v, i);
    } catch (s) {
      w.textContent = "OFV 渲染失败：" + (s && s.message ? s.message : s) + "（点击关闭）", w.onclick = E, k("OFV 渲染失败", s);
    }
  }
  function ae() {
    window.__QP_OFV_CAPTURE__ || (window.__QP_OFV_CAPTURE__ = !0, window.addEventListener(
      "qwenpaw:open-file-preview",
      (t) => {
        try {
          const n = (t && t.detail || {}).target || {}, c = String(n.artifactUrl || ""), r = String(n.path || ""), a = X(r || c), f = V(a || c || r);
          if (!j.has(f)) return;
          t.stopPropagation();
          try {
            t.stopImmediatePropagation();
          } catch {
          }
          _("接管预览:", a, "(" + f + ") path=", r, "url=", c);
          const l = H(r || c);
          if (!l) {
            k("无法归一化路径，放行");
            return;
          }
          G(a, f, l, c);
        } catch (e) {
          k("接管失败:", e);
        }
      },
      !0
    ), _("已安装预览接管监听"));
  }
  const ie = new RegExp(
    "([\\w@.\\-]+\\.(" + [...j].join("|") + "))(?![\\w-])",
    "i"
  ), ce = new RegExp(
    "(\\/?[\\w@.\\-]+(?:\\/[\\w@.\\-]+)*\\.(" + [...j].join("|") + "))(?![\\w-])",
    "i"
  );
  function le(t, e) {
    if (!t) return !1;
    const n = t.getAttribute("title") || t.getAttribute("aria-label") || t.getAttribute("data-path") || "", c = (t.textContent || "").replace(/\s+/g, " ").trim(), r = (n + " " + c).trim();
    let a = r;
    try {
      const o = decodeURIComponent(r);
      o.indexOf("�") === -1 && (a = o);
    } catch {
    }
    const f = ie.exec(a);
    if (!f) return !1;
    const l = X(f[1]), m = V(l);
    if (!j.has(m)) return !1;
    let d = "";
    const x = ce.exec(a);
    x ? (d = x[1], d.startsWith("/") || (d = "/" + d)) : d = l;
    try {
      const o = t.querySelector('a[href*="/files/preview/"], img[src*="/files/preview/"]'), i = o && (o.getAttribute("href") || o.getAttribute("src")) || "", u = J(i);
      u && (d = u);
    } catch {
    }
    const h = H(d);
    if (!h) return !1;
    if (e) {
      e.preventDefault(), e.stopPropagation();
      try {
        e.stopImmediatePropagation();
      } catch {
      }
    }
    return _("接管预览(DOM):", l, "(" + m + ") path=", h), G(l, m, h, ""), !0;
  }
  function de() {
    window.__QP_OFV_DOM__ || (window.__QP_OFV_DOM__ = !0, document.addEventListener(
      "click",
      (t) => {
        try {
          const e = t.target;
          if (!e || !e.closest || e.closest("[data-qp-ofv-overlay]")) return;
          const n = e.closest('[class*="bubbleFile"]') || e.closest('[class*="ResponseArtifactList-module__file"]') || e.closest('[class*="ResponseArtifactList-module__details__"]');
          if (!n) return;
          le(n, t);
        } catch (e) {
          k("DOM 委托失败:", e);
        }
      },
      !0
    ), _("已安装 DOM 点击委托"));
  }
  const fe = "/api/frontend_plugin/" + Q + "/files/frontend/style.css";
  function pe() {
    if (document.querySelector("link[data-qp-ofv-style]")) return;
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = fe, t.setAttribute("data-qp-ofv-style", "1"), document.head.appendChild(t);
  }
  function F() {
    pe(), ae(), de();
  }
  if (window.QwenPaw && window.QwenPaw.host)
    F();
  else {
    let t = 0;
    const e = setInterval(() => {
      if (window.QwenPaw && window.QwenPaw.host) {
        clearInterval(e), F();
        return;
      }
      ++t > 40 && (clearInterval(e), F());
    }, 500);
  }
})();

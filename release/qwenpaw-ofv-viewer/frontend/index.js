(() => {
  const B = "0.6.5", N = "[ofv-viewer]", Q = "qwenpaw-ofv-viewer", O = /* @__PURE__ */ new Set([
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
    const t = {}, e = (n, s) => s.forEach((r) => t[r] = n);
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
  })(), E = (...t) => {
    try {
      console.log(N, B, ...t);
    } catch {
    }
  }, y = (...t) => {
    try {
      console.error(N, B, ...t);
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
    const e = String(t || ""), n = "/files/preview/", s = e.indexOf(n);
    if (s < 0) return "";
    const r = e.slice(s + n.length).split(/[?#]/, 1)[0];
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
        return ((await e.json()).agents || []).map((s) => s.id).filter(Boolean);
    } catch {
    }
    return [];
  }
  async function oe(t, e) {
    const n = window.QwenPaw;
    if (!n || !n.host || typeof n.host.fetch != "function")
      throw new Error("宿主 fetch 不可用");
    const s = [];
    e && /^\/files\/preview\//.test(String(e)) && s.push({ direct: String(e), agent: "" });
    const r = String(t || ""), p = r.replace(/^\/+/, "").split("/").filter(Boolean), d = (o, c, h) => {
      c && (s.some((m) => m.root === o && m.path === c && m.agent === h) || s.push({ root: o, path: c, agent: h }));
    }, f = [Z(r)].filter(Boolean);
    for (const o of f) {
      const c = ee(r), h = c ? r.slice(c.length + 1) : "";
      c && h && d("project:" + c, h, o);
      const m = "/workspaces/" + o + "/", u = r.indexOf(m);
      u >= 0 && d("workspace", r.slice(u + m.length), o);
      const C = Math.min(p.length, 3);
      for (let x = 1; x <= C; x++)
        d("workspace", p.slice(-x).join("/"), o), d("project", p.slice(-x).join("/"), o);
    }
    let l = "";
    const v = /* @__PURE__ */ new Set();
    for (const o of s) {
      const c = o.direct ? "d" : o.root + ":" + o.path + "@" + o.agent;
      if (!v.has(c)) {
        v.add(c);
        try {
          const h = o.direct ? o.direct : "/workspace/file-download?path=" + encodeURIComponent(o.path) + "&root=" + encodeURIComponent(o.root), m = o.agent ? { headers: { "X-Agent-Id": o.agent } } : void 0, u = await n.host.fetch(h, m);
          if (u.ok) return await u.blob();
          l = (o.direct ? "direct" : o.root + ":" + o.path + "@" + (o.agent || "cur")) + " -> HTTP " + u.status;
        } catch (h) {
          l = (o.direct ? "direct" : o.root + ":" + o.path + "@" + (o.agent || "cur")) + " -> " + (h && h.message ? h.message : h);
        }
      }
    }
    const g = p[p.length - 1] || "";
    if (g && !f.length) {
      const o = await te();
      for (const c of o)
        for (const h of ["workspace", "project"])
          try {
            const m = "/workspace/file-download?path=" + encodeURIComponent(g) + "&root=" + h, u = await n.host.fetch(m, { headers: { "X-Agent-Id": c } });
            if (u.ok) return await u.blob();
            l = h + ":" + g + "@" + c + " -> HTTP " + u.status;
          } catch (m) {
            l = h + ":" + g + "@" + c + " -> " + (m && m.message ? m.message : m);
          }
    }
    throw new Error("拉取失败（已试 " + v.size + " 个候选）最后: " + l);
  }
  function ne(t, e, n) {
    let s = !1;
    const r = () => {
      if (s) return !0;
      const l = t.querySelectorAll(".ofv-code-action");
      if (!l.length) return !1;
      let v = n.nextSibling;
      return l.forEach((g) => {
        g.setAttribute("data-qp-ofv-hoisted", "1"), g.style.cssText += "margin-left:8px;", e.insertBefore(g, v);
      }), s = !0, !0;
    };
    if (r()) return;
    const a = new MutationObserver(() => {
      r() && a.disconnect();
    });
    a.observe(t, { childList: !0, subtree: !0 });
    let p = 0;
    const d = setInterval(() => {
      (r() || ++p > 40) && (clearInterval(d), a.disconnect());
    }, 250), f = () => {
      a.disconnect(), clearInterval(d);
    };
    z.push(f);
  }
  let T = null, b = null;
  const j = {}, z = [];
  function re(t, e) {
    if (!t) {
      y("下载失败：没有可用的文件数据");
      return;
    }
    try {
      const n = URL.createObjectURL(t), s = document.createElement("a");
      s.href = n, s.download = e || "download", s.style.display = "none", document.body.appendChild(s), s.click(), setTimeout(() => {
        try {
          s.remove(), URL.revokeObjectURL(n);
        } catch {
        }
      }, 4e3), E("已触发下载:", e, t.size, "bytes");
    } catch (n) {
      y("下载失败:", n);
    }
  }
  function se(t, e, n) {
    const s = (f) => {
      f.__qpOfvDl || (f.__qpOfvDl = !0, f.addEventListener("click", (l) => {
        l.preventDefault(), l.stopPropagation();
        try {
          l.stopImmediatePropagation();
        } catch {
        }
        re(e, n);
      }, !0));
    }, r = () => {
      t.querySelectorAll("button").forEach((f) => {
        const l = (f.title || "") + (f.textContent || "");
        /下载|download/i.test(l) && s(f);
      });
    };
    r();
    const a = new MutationObserver(r);
    a.observe(t, { childList: !0, subtree: !0 });
    let p = 0;
    const d = setInterval(() => {
      r(), ++p > 30 && (clearInterval(d), a.disconnect());
    }, 300);
    z.push(() => {
      a.disconnect(), clearInterval(d);
    });
  }
  function q() {
    try {
      b && b.destroy && b.destroy();
    } catch {
    }
    if (b = null, T && T.parentNode) {
      const t = T, e = t.firstElementChild;
      e && (e.style.transform = "translateX(100%)"), t.style.opacity = "0", setTimeout(() => {
        t.parentNode && t.parentNode.removeChild(t);
      }, 280);
    }
    T = null;
    try {
      document.removeEventListener("keydown", W);
    } catch {
    }
    for (; z.length; )
      try {
        z.pop()();
      } catch {
      }
  }
  function W(t) {
    t.key === "Escape" && q();
  }
  function ae(t) {
    const e = document.querySelector('[class*="sender"] textarea');
    if (!e)
      return y("未找到聊天输入框，引用失败"), !1;
    const n = "@ " + String(t || ""), s = e.selectionStart ?? e.value.length, r = e.selectionEnd ?? s, a = e.value.slice(0, s), p = e.value.slice(r), d = a && !/\s$/.test(a) ? " " : "", f = a + d + n + " " + p, l = Object.getPrototypeOf(e), v = Object.getOwnPropertyDescriptor(l, "value");
    v && v.set ? v.set.call(e, f) : e.value = f, e.dispatchEvent(new Event("input", { bubbles: !0 }));
    const g = a.length + d.length + n.length + 1;
    return requestAnimationFrame(() => {
      e.focus();
      try {
        e.setSelectionRange(g, g);
      } catch {
      }
    }), E("已引用到聊天:", n), !0;
  }
  function ie() {
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
  async function G(t, e, n, s) {
    q(), ie();
    const r = document.createElement("div");
    r.setAttribute("data-qp-ofv-overlay", "1"), r.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:rgba(15,23,42,.45);transition:opacity .25s ease;", r.onclick = (i) => {
      i.target === r && q();
    };
    const a = document.createElement("div");
    a.style.cssText = "position:fixed;right:0;top:0;bottom:0;z-index:2147483001;width:min(96vw, 1100px);background:#fff;box-shadow:-8px 0 32px rgba(0,0,0,.18);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .3s cubic-bezier(0.16,1,0.3,1);font:14px/1.4 -apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;";
    const p = document.createElement("div");
    p.style.cssText = "flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid #e2e8f0;background:#fff;";
    const d = document.createElement("div");
    d.style.cssText = "min-width:0;overflow:hidden;";
    const f = document.createElement("div");
    f.textContent = t, f.style.cssText = "font-weight:600;color:#0f172a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
    const l = document.createElement("div");
    l.style.cssText = "font-size:11.5px;color:#94a3b8;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", d.appendChild(f), d.appendChild(l);
    const v = () => {
      const i = [];
      e && i.push(e.toUpperCase()), g.value != null && i.push($(g.value)), l.textContent = i.join(" · ");
    }, g = { value: null }, o = document.createElement("button");
    o.textContent = "✕", o.title = "关闭 (Esc)", o.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;", o.onmouseenter = () => {
      o.style.background = "#e2e8f0";
    }, o.onmouseleave = () => {
      o.style.background = "#f1f5f9";
    }, o.onclick = q;
    const c = document.createElement("button");
    c.textContent = "在聊天中引用", c.title = "以 @ 路径的形式插入到聊天输入框", c.style.cssText = "border:1px solid #e2e8f0;background:#fff;color:#334155;height:28px;padding:0 10px;border-radius:6px;cursor:pointer;font-size:12.5px;margin-right:8px;line-height:1;", c.onmouseenter = () => {
      c.style.background = "#f1f5f9";
    }, c.onmouseleave = () => {
      c.style.background = "#fff";
    }, c.onclick = () => {
      ae(n) && q();
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
    ].includes(e), u = document.createElement("button");
    u.textContent = "☰ 目录", u.title = "显示/隐藏页码导航", u.style.cssText = c.style.cssText, u.onmouseenter = () => {
      u.style.background = "#f1f5f9";
    }, u.onmouseleave = () => {
      u.style.background = "#fff";
    }, u.onclick = () => {
      ge(!K);
    };
    const C = document.createElement("button");
    C.textContent = "⛶", C.title = "全屏 / 退出全屏", C.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;margin-right:8px;", C.onclick = () => {
      document.fullscreenElement ? document.exitFullscreen() : a.requestFullscreen && a.requestFullscreen().catch(() => {
      });
    };
    const x = document.createElement("div");
    x.style.cssText = "display:flex;align-items:center;", x.appendChild(c), m && x.appendChild(u), x.appendChild(C), x.appendChild(o), p.appendChild(d), p.appendChild(x);
    let K = !1;
    const S = document.createElement("div");
    S.style.cssText = "flex:0 0 auto;width:0;overflow:hidden;transition:width .22s ease;border-right:0 solid #e2e8f0;background:#f8fafc;";
    const _ = document.createElement("div");
    _.style.cssText = "width:200px;padding:12px;box-sizing:border-box;height:100%;overflow:auto;", _.innerHTML = '<div style="font-size:12px;color:#64748b;margin-bottom:8px">页面导航</div><div style="display:flex;gap:6px;margin-bottom:10px"><button data-toc="prev" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">上一页</button><button data-toc="next" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">下一页</button></div><div style="display:flex;gap:6px;align-items:center"><input data-toc="page" type="number" min="1" style="width:64px;height:28px;border:1px solid #e2e8f0;border-radius:6px;padding:0 6px"><button data-toc="go" style="height:28px;padding:0 10px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">跳转</button></div><div data-toc="tip" style="margin-top:10px;font-size:11.5px;color:#94a3b8;line-height:1.5">提示：也可直接用工具栏的缩放与搜索</div>', S.appendChild(_);
    function ge(i) {
      K = i, S.style.width = i ? "200px" : "0", S.style.borderRightWidth = i ? "1px" : "0", u.style.background = i ? "#e2e8f0" : "#fff", setTimeout(() => {
        try {
          b && b.resize && b.resize();
        } catch {
        }
      }, 250);
    }
    const L = _.querySelector('[data-toc="page"]');
    let R = 1;
    const M = (i) => {
      if (!b || typeof b.goToPage != "function") return !1;
      const w = b.goToPage(i);
      return w && (R = i), w;
    };
    _.querySelector('[data-toc="prev"]').onclick = () => {
      M(Math.max(1, R - 1)) && (L.value = R);
    }, _.querySelector('[data-toc="next"]').onclick = () => {
      M(R + 1) && (L.value = R);
    }, _.querySelector('[data-toc="go"]').onclick = () => {
      const i = parseInt(L.value, 10);
      i > 0 && M(i);
    };
    const I = document.createElement("div");
    I.style.cssText = "flex:1 1 auto;min-height:0;overflow:auto;padding:12px;";
    const k = document.createElement("div");
    k.textContent = "加载中…", k.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;min-height:240px;color:#64748b;", I.appendChild(k), a.appendChild(p);
    const A = document.createElement("div");
    A.style.cssText = "flex:1 1 auto;min-height:0;display:flex;", A.appendChild(S), A.appendChild(I), a.appendChild(A), r.appendChild(a), document.body.appendChild(r), T = r, document.addEventListener("keydown", W), requestAnimationFrame(() => {
      a.style.transform = "translateX(0)";
    });
    let P;
    try {
      P = await oe(n, s), g.value = P && typeof P.size == "number" ? P.size : null, v();
    } catch (i) {
      k.textContent = "拉取文件失败：" + (i && i.message ? i.message : i) + "（点击关闭）", k.onclick = q, y("拉取失败", n, i);
      return;
    }
    try {
      I.removeChild(k);
      const i = document.createElement("div");
      i.style.cssText = "height:100%;min-height:0;", I.appendChild(i);
      const w = Y[e] || "text";
      if (!j[w]) {
        const U = window.__QP_OFV_RENDERER_BASE__ || location.origin + "/api/frontend_plugin/" + Q + "/files/frontend/renderer/";
        j[w] = import(
          /* @vite-ignore */
          U + w + ".js"
        ).catch((F) => {
          throw delete j[w], F;
        });
      }
      const { renderViewer: me } = await j[w];
      b = me({
        container: i,
        file: P,
        fileName: t,
        height: "100%",
        locale: "zh-CN",
        theme: "light",
        onError: (U, F) => y("OFV 渲染错误", F && F.name, U)
      }), E("已打开 OFV 预览:", t, "(" + e + ")", n), ne(i, x, c), se(a, P, t);
    } catch (i) {
      k.textContent = "OFV 渲染失败：" + (i && i.message ? i.message : i) + "（点击关闭）", k.onclick = q, y("OFV 渲染失败", i);
    }
  }
  function ce() {
    window.__QP_OFV_CAPTURE__ || (window.__QP_OFV_CAPTURE__ = !0, window.addEventListener(
      "qwenpaw:open-file-preview",
      (t) => {
        try {
          const n = (t && t.detail || {}).target || {}, s = String(n.artifactUrl || ""), r = String(n.path || ""), a = X(r || s), p = V(a || s || r);
          if (!O.has(p)) return;
          t.stopPropagation();
          try {
            t.stopImmediatePropagation();
          } catch {
          }
          E("接管预览:", a, "(" + p + ") path=", r, "url=", s);
          const d = H(r || s);
          if (!d) {
            y("无法归一化路径，放行");
            return;
          }
          G(a, p, d, s);
        } catch (e) {
          y("接管失败:", e);
        }
      },
      !0
    ), E("已安装预览接管监听"));
  }
  const le = new RegExp(
    "([\\w@.\\-]+\\.(" + [...O].join("|") + "))(?![\\w-])",
    "i"
  ), de = new RegExp(
    "(\\/?[\\w@.\\-]+(?:\\/[\\w@.\\-]+)*\\.(" + [...O].join("|") + "))(?![\\w-])",
    "i"
  );
  function fe(t, e) {
    if (!t) return !1;
    const n = t.getAttribute("title") || t.getAttribute("aria-label") || t.getAttribute("data-path") || "", s = (t.textContent || "").replace(/\s+/g, " ").trim(), r = (n + " " + s).trim();
    let a = r;
    try {
      const o = decodeURIComponent(r);
      o.indexOf("�") === -1 && (a = o);
    } catch {
    }
    const p = le.exec(a);
    if (!p) return !1;
    const d = X(p[1]), f = V(d);
    if (!O.has(f)) return !1;
    let l = "";
    const v = de.exec(a);
    v ? (l = v[1], l.startsWith("/") || (l = "/" + l)) : l = d;
    try {
      const o = t.querySelector('a[href*="/files/preview/"], img[src*="/files/preview/"]'), c = o && (o.getAttribute("href") || o.getAttribute("src")) || "", h = J(c);
      h && (l = h);
    } catch {
    }
    const g = H(l);
    if (!g) return !1;
    if (e) {
      e.preventDefault(), e.stopPropagation();
      try {
        e.stopImmediatePropagation();
      } catch {
      }
    }
    return E("接管预览(DOM):", d, "(" + f + ") path=", g), G(d, f, g, ""), !0;
  }
  function pe() {
    window.__QP_OFV_DOM__ || (window.__QP_OFV_DOM__ = !0, document.addEventListener(
      "click",
      (t) => {
        try {
          const e = t.target;
          if (!e || !e.closest || e.closest("[data-qp-ofv-overlay]")) return;
          const n = e.closest('[class*="bubbleFile"]') || e.closest('[class*="ResponseArtifactList-module__file"]') || e.closest('[class*="ResponseArtifactList-module__details__"]');
          if (!n) return;
          fe(n, t);
        } catch (e) {
          y("DOM 委托失败:", e);
        }
      },
      !0
    ), E("已安装 DOM 点击委托"));
  }
  const ue = "/api/frontend_plugin/" + Q + "/files/frontend/style.css";
  function he() {
    if (document.querySelector("link[data-qp-ofv-style]")) return;
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = ue, t.setAttribute("data-qp-ofv-style", "1"), document.head.appendChild(t);
  }
  function D() {
    he(), ce(), pe();
  }
  if (window.QwenPaw && window.QwenPaw.host)
    D();
  else {
    let t = 0;
    const e = setInterval(() => {
      if (window.QwenPaw && window.QwenPaw.host) {
        clearInterval(e), D();
        return;
      }
      ++t > 40 && (clearInterval(e), D());
    }, 500);
  }
})();

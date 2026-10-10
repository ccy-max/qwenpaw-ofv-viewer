(() => {
  const X = "0.7.1", W = "[ofv-viewer]", G = "qwenpaw-ofv-viewer", V = "OFV_NATIVE_EXTS", et = [
    // 图片：宿主原生预览已支持
    "png",
    "jpg",
    "jpeg",
    "gif",
    "webp",
    "svg",
    "ico",
    "bmp",
    // 标记/网页/表格：宿主原生渲染更好
    "md",
    "mdx",
    "html",
    "htm",
    "csv"
  ], H = [
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
  ];
  let j = new Set(et), _ = new Set(H.filter((e) => !j.has(e)));
  function ot(e) {
    return String(e ?? "").split(/[,\s;]+/).map((t) => t.trim().replace(/^\.+/, "").toLowerCase()).filter(Boolean);
  }
  function nt() {
    _ = new Set(H.filter((e) => !j.has(e))), F = null, L = null;
  }
  const rt = (() => {
    const e = {}, t = (o, s) => s.forEach((r) => e[r] = o);
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
  })(), w = (...e) => {
    try {
      console.log(W, X, ...e);
    } catch {
    }
  }, b = (...e) => {
    try {
      console.error(W, X, ...e);
    } catch {
    }
  };
  function $(e) {
    const t = /\.([^.]+)$/.exec(String(e || ""));
    return t ? t[1].toLowerCase() : "";
  }
  function st(e) {
    const t = Number(e);
    return !isFinite(t) || t < 0 ? "" : t < 1024 ? t + " B" : t < 1024 * 1024 ? (t / 1024).toFixed(t < 10240 ? 1 : 0) + " KB" : (t / 1024 / 1024).toFixed(1) + " MB";
  }
  function K(e) {
    const t = String(e || ""), o = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
    return o >= 0 ? t.slice(o + 1) : t;
  }
  function Y(e) {
    let t = String(e || "").trim();
    if (!t) return "";
    t.toLowerCase().startsWith("file://") && (t = t.slice(7), t.toLowerCase().startsWith("localhost/") && (t = t.slice(10))), t.startsWith("/files/preview/") && (t = t.slice(14));
    try {
      t = decodeURIComponent(t).replace(/\\/g, "/");
    } catch {
    }
    return t;
  }
  function at(e) {
    const t = String(e || ""), o = "/files/preview/", s = t.indexOf(o);
    if (s < 0) return "";
    const r = t.slice(s + o.length).split(/[?#]/, 1)[0];
    if (!r) return "";
    try {
      const a = decodeURIComponent(r).replace(/\\/g, "/");
      return /^[a-z]:\//i.test(a) ? a : "/" + a.replace(/^\/+/, "");
    } catch {
      return "";
    }
  }
  function it(e) {
    const t = /\/workspaces\/([^/]+)\//.exec(String(e || ""));
    return t ? t[1] : "";
  }
  function ct(e) {
    const t = String(e || "");
    let o = /^(\/.*)\/coding_projects\/([^/]+)\//.exec(t);
    return o ? o[1] + "/coding_projects/" + o[2] : (o = /^\/(.*)\/workspaces\/([^/]+)\//.exec(t), o ? "/" + o[1] + "/workspaces/" + o[2] : "");
  }
  async function lt() {
    const e = window.QwenPaw;
    try {
      const t = await e.host.fetch("/agents");
      if (t.ok)
        return ((await t.json()).agents || []).map((s) => s.id).filter(Boolean);
    } catch {
    }
    return [];
  }
  async function dt(e, t) {
    const o = window.QwenPaw;
    if (!o || !o.host || typeof o.host.fetch != "function")
      throw new Error("宿主 fetch 不可用");
    const s = [];
    t && /^\/files\/preview\//.test(String(t)) && s.push({ direct: String(t), agent: "" });
    const r = String(e || ""), p = r.replace(/^\/+/, "").split("/").filter(Boolean), d = (n, c, h) => {
      c && (s.some((g) => g.root === n && g.path === c && g.agent === h) || s.push({ root: n, path: c, agent: h }));
    }, f = [it(r)].filter(Boolean);
    for (const n of f) {
      const c = ct(r), h = c ? r.slice(c.length + 1) : "";
      c && h && d("project:" + c, h, n);
      const g = "/workspaces/" + n + "/", u = r.indexOf(g);
      u >= 0 && d("workspace", r.slice(u + g.length), n);
      const q = Math.min(p.length, 3);
      for (let x = 1; x <= q; x++)
        d("workspace", p.slice(-x).join("/"), n), d("project", p.slice(-x).join("/"), n);
    }
    let l = "";
    const v = /* @__PURE__ */ new Set();
    for (const n of s) {
      const c = n.direct ? "d" : n.root + ":" + n.path + "@" + n.agent;
      if (!v.has(c)) {
        v.add(c);
        try {
          const h = n.direct ? n.direct : "/workspace/file-download?path=" + encodeURIComponent(n.path) + "&root=" + encodeURIComponent(n.root), g = n.agent ? { headers: { "X-Agent-Id": n.agent } } : void 0, u = await o.host.fetch(h, g);
          if (u.ok) return await u.blob();
          l = (n.direct ? "direct" : n.root + ":" + n.path + "@" + (n.agent || "cur")) + " -> HTTP " + u.status;
        } catch (h) {
          l = (n.direct ? "direct" : n.root + ":" + n.path + "@" + (n.agent || "cur")) + " -> " + (h && h.message ? h.message : h);
        }
      }
    }
    const m = p[p.length - 1] || "";
    if (m && !f.length) {
      const n = await lt();
      for (const c of n)
        for (const h of ["workspace", "project"])
          try {
            const g = "/workspace/file-download?path=" + encodeURIComponent(m) + "&root=" + h, u = await o.host.fetch(g, { headers: { "X-Agent-Id": c } });
            if (u.ok) return await u.blob();
            l = h + ":" + m + "@" + c + " -> HTTP " + u.status;
          } catch (g) {
            l = h + ":" + m + "@" + c + " -> " + (g && g.message ? g.message : g);
          }
    }
    throw new Error("拉取失败（已试 " + v.size + " 个候选）最后: " + l);
  }
  function ft(e, t, o) {
    let s = !1;
    const r = () => {
      if (s) return !0;
      const l = e.querySelectorAll(".ofv-code-action");
      if (!l.length) return !1;
      let v = o.nextSibling;
      return l.forEach((m) => {
        m.setAttribute("data-qp-ofv-hoisted", "1"), m.style.cssText += "margin-left:8px;", t.insertBefore(m, v);
      }), s = !0, !0;
    };
    if (r()) return;
    const a = new MutationObserver(() => {
      r() && a.disconnect();
    });
    a.observe(e, { childList: !0, subtree: !0 });
    let p = 0;
    const d = setInterval(() => {
      (r() || ++p > 40) && (clearInterval(d), a.disconnect());
    }, 250), f = () => {
      a.disconnect(), clearInterval(d);
    };
    A.push(f);
  }
  let P = null, y = null;
  const z = {}, A = [];
  function pt(e, t) {
    if (!e) {
      b("下载失败：没有可用的文件数据");
      return;
    }
    try {
      const o = URL.createObjectURL(e), s = document.createElement("a");
      s.href = o, s.download = t || "download", s.style.display = "none", document.body.appendChild(s), s.click(), setTimeout(() => {
        try {
          s.remove(), URL.revokeObjectURL(o);
        } catch {
        }
      }, 4e3), w("已触发下载:", t, e.size, "bytes");
    } catch (o) {
      b("下载失败:", o);
    }
  }
  function ut(e, t, o) {
    const s = (f) => {
      f.__qpOfvDl || (f.__qpOfvDl = !0, f.addEventListener("click", (l) => {
        l.preventDefault(), l.stopPropagation();
        try {
          l.stopImmediatePropagation();
        } catch {
        }
        pt(t, o);
      }, !0));
    }, r = () => {
      e.querySelectorAll("button").forEach((f) => {
        const l = (f.title || "") + (f.textContent || "");
        /下载|download/i.test(l) && s(f);
      });
    };
    r();
    const a = new MutationObserver(r);
    a.observe(e, { childList: !0, subtree: !0 });
    let p = 0;
    const d = setInterval(() => {
      r(), ++p > 30 && (clearInterval(d), a.disconnect());
    }, 300);
    A.push(() => {
      a.disconnect(), clearInterval(d);
    });
  }
  function C() {
    try {
      y && y.destroy && y.destroy();
    } catch {
    }
    if (y = null, P && P.parentNode) {
      const e = P, t = e.firstElementChild;
      t && (t.style.transform = "translateX(100%)"), e.style.opacity = "0", setTimeout(() => {
        e.parentNode && e.parentNode.removeChild(e);
      }, 280);
    }
    P = null;
    try {
      document.removeEventListener("keydown", J);
    } catch {
    }
    for (; A.length; )
      try {
        A.pop()();
      } catch {
      }
  }
  function J(e) {
    e.key === "Escape" && C();
  }
  function ht(e) {
    const t = document.querySelector('[class*="sender"] textarea');
    if (!t)
      return b("未找到聊天输入框，引用失败"), !1;
    const o = "@ " + String(e || ""), s = t.selectionStart ?? t.value.length, r = t.selectionEnd ?? s, a = t.value.slice(0, s), p = t.value.slice(r), d = a && !/\s$/.test(a) ? " " : "", f = a + d + o + " " + p, l = Object.getPrototypeOf(t), v = Object.getOwnPropertyDescriptor(l, "value");
    v && v.set ? v.set.call(t, f) : t.value = f, t.dispatchEvent(new Event("input", { bubbles: !0 }));
    const m = a.length + d.length + o.length + 1;
    return requestAnimationFrame(() => {
      t.focus();
      try {
        t.setSelectionRange(m, m);
      } catch {
      }
    }), w("已引用到聊天:", o), !0;
  }
  function mt() {
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
      /* 按钮已搬到标题栏：面板头整体隐藏（文件名/格式/行数/大小 已在抽屉标题展示，
         避免与标题栏重复出现两处文件名） */
      "[data-qp-ofv-overlay] .ofv-code-header { display: none !important; }"
    ].join(`
`), document.head.appendChild(e);
  }
  async function Z(e, t, o, s) {
    C(), mt();
    const r = document.createElement("div");
    r.setAttribute("data-qp-ofv-overlay", "1"), r.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:rgba(15,23,42,.45);transition:opacity .25s ease;", r.onclick = (i) => {
      i.target === r && C();
    };
    const a = document.createElement("div");
    a.style.cssText = "position:fixed;right:0;top:0;bottom:0;z-index:2147483001;width:min(96vw, 1100px);background:#fff;box-shadow:-8px 0 32px rgba(0,0,0,.18);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .3s cubic-bezier(0.16,1,0.3,1);font:14px/1.4 -apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;";
    const p = document.createElement("div");
    p.style.cssText = "flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid #e2e8f0;background:#fff;";
    const d = document.createElement("div");
    d.style.cssText = "min-width:0;overflow:hidden;";
    const f = document.createElement("div");
    f.textContent = e, f.style.cssText = "font-weight:600;color:#0f172a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
    const l = document.createElement("div");
    l.style.cssText = "font-size:11.5px;color:#94a3b8;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", d.appendChild(f), d.appendChild(l);
    const v = () => {
      const i = [];
      t && i.push(t.toUpperCase()), m.value != null && i.push(st(m.value)), l.textContent = i.join(" · ");
    }, m = { value: null }, n = document.createElement("button");
    n.textContent = "✕", n.title = "关闭 (Esc)", n.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;", n.onmouseenter = () => {
      n.style.background = "#e2e8f0";
    }, n.onmouseleave = () => {
      n.style.background = "#f1f5f9";
    }, n.onclick = C;
    const c = document.createElement("button");
    c.textContent = "在聊天中引用", c.title = "以 @ 路径的形式插入到聊天输入框", c.style.cssText = "border:1px solid #e2e8f0;background:#fff;color:#334155;height:28px;padding:0 10px;border-radius:6px;cursor:pointer;font-size:12.5px;margin-right:8px;line-height:1;", c.onmouseenter = () => {
      c.style.background = "#f1f5f9";
    }, c.onmouseleave = () => {
      c.style.background = "#fff";
    }, c.onclick = () => {
      ht(o) && C();
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
    ].includes(t), u = document.createElement("button");
    u.textContent = "☰ 目录", u.title = "显示/隐藏页码导航", u.style.cssText = c.style.cssText, u.onmouseenter = () => {
      u.style.background = "#f1f5f9";
    }, u.onmouseleave = () => {
      u.style.background = "#fff";
    }, u.onclick = () => {
      _t(!tt);
    };
    const q = document.createElement("button");
    q.textContent = "⛶", q.title = "全屏 / 退出全屏", q.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;margin-right:8px;", q.onclick = () => {
      document.fullscreenElement ? document.exitFullscreen() : a.requestFullscreen && a.requestFullscreen().catch(() => {
      });
    };
    const x = document.createElement("div");
    x.style.cssText = "display:flex;align-items:center;", x.appendChild(c), g && x.appendChild(u), x.appendChild(q), x.appendChild(n), p.appendChild(d), p.appendChild(x);
    let tt = !1;
    const I = document.createElement("div");
    I.style.cssText = "flex:0 0 auto;width:0;overflow:hidden;transition:width .22s ease;border-right:0 solid #e2e8f0;background:#f8fafc;";
    const S = document.createElement("div");
    S.style.cssText = "width:200px;padding:12px;box-sizing:border-box;height:100%;overflow:auto;", S.innerHTML = '<div style="font-size:12px;color:#64748b;margin-bottom:8px">页面导航</div><div style="display:flex;gap:6px;margin-bottom:10px"><button data-toc="prev" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">上一页</button><button data-toc="next" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">下一页</button></div><div style="display:flex;gap:6px;align-items:center"><input data-toc="page" type="number" min="1" style="width:64px;height:28px;border:1px solid #e2e8f0;border-radius:6px;padding:0 6px"><button data-toc="go" style="height:28px;padding:0 10px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">跳转</button></div><div data-toc="tip" style="margin-top:10px;font-size:11.5px;color:#94a3b8;line-height:1.5">提示：也可直接用工具栏的缩放与搜索</div>', I.appendChild(S);
    function _t(i) {
      tt = i, I.style.width = i ? "200px" : "0", I.style.borderRightWidth = i ? "1px" : "0", u.style.background = i ? "#e2e8f0" : "#fff", setTimeout(() => {
        try {
          y && y.resize && y.resize();
        } catch {
        }
      }, 250);
    }
    const M = S.querySelector('[data-toc="page"]');
    let R = 1;
    const B = (i) => {
      if (!y || typeof y.goToPage != "function") return !1;
      const k = y.goToPage(i);
      return k && (R = i), k;
    };
    S.querySelector('[data-toc="prev"]').onclick = () => {
      B(Math.max(1, R - 1)) && (M.value = R);
    }, S.querySelector('[data-toc="next"]').onclick = () => {
      B(R + 1) && (M.value = R);
    }, S.querySelector('[data-toc="go"]').onclick = () => {
      const i = parseInt(M.value, 10);
      i > 0 && B(i);
    };
    const O = document.createElement("div");
    O.style.cssText = "flex:1 1 auto;min-height:0;overflow:auto;padding:12px;";
    const E = document.createElement("div");
    E.textContent = "加载中…", E.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;min-height:240px;color:#64748b;", O.appendChild(E), a.appendChild(p);
    const D = document.createElement("div");
    D.style.cssText = "flex:1 1 auto;min-height:0;display:flex;", D.appendChild(I), D.appendChild(O), a.appendChild(D), r.appendChild(a), document.body.appendChild(r), P = r, document.addEventListener("keydown", J), requestAnimationFrame(() => {
      a.style.transform = "translateX(0)";
    });
    let T;
    try {
      T = await dt(o, s), m.value = T && typeof T.size == "number" ? T.size : null, v();
    } catch (i) {
      E.textContent = "拉取文件失败：" + (i && i.message ? i.message : i) + "（点击关闭）", E.onclick = C, b("拉取失败", o, i);
      return;
    }
    try {
      O.removeChild(E);
      const i = document.createElement("div");
      i.style.cssText = "height:100%;min-height:0;", O.appendChild(i);
      const k = rt[t] || "text";
      if (!z[k]) {
        const Q = window.__QP_OFV_RENDERER_BASE__ || location.origin + "/api/frontend_plugin/" + G + "/files/frontend/renderer/";
        z[k] = import(
          /* @vite-ignore */
          Q + k + ".js"
        ).catch((U) => {
          throw delete z[k], U;
        });
      }
      const { renderViewer: Ct } = await z[k];
      y = Ct({
        container: i,
        file: T,
        fileName: e,
        height: "100%",
        locale: "zh-CN",
        theme: "light",
        onError: (Q, U) => b("OFV 渲染错误", U && U.name, Q)
      }), w("已打开 OFV 预览:", e, "(" + t + ")", o), ft(i, x, c), ut(a, T, e);
    } catch (i) {
      E.textContent = "OFV 渲染失败：" + (i && i.message ? i.message : i) + "（点击关闭）", E.onclick = C, b("OFV 渲染失败", i);
    }
  }
  function gt() {
    window.__QP_OFV_CAPTURE__ || (window.__QP_OFV_CAPTURE__ = !0, window.addEventListener(
      "qwenpaw:open-file-preview",
      (e) => {
        try {
          const o = (e && e.detail || {}).target || {}, s = String(o.artifactUrl || ""), r = String(o.path || ""), a = K(r || s), p = $(a || s || r);
          if (!_.has(p)) return;
          e.stopPropagation();
          try {
            e.stopImmediatePropagation();
          } catch {
          }
          w("接管预览:", a, "(" + p + ") path=", r, "url=", s);
          const d = Y(r || s);
          if (!d) {
            b("无法归一化路径，放行");
            return;
          }
          Z(a, p, d, s);
        } catch (t) {
          b("接管失败:", t);
        }
      },
      !0
    ), w("已安装预览接管监听"));
  }
  let F = null, L = null;
  function vt() {
    return F || (F = _.size ? new RegExp(
      "([\\w@.\\-]+\\.(" + [..._].join("|") + "))(?![\\w-])",
      "i"
    ) : /$^/), F;
  }
  function xt() {
    return L || (L = _.size ? new RegExp(
      "(\\/?[\\w@.\\-]+(?:\\/[\\w@.\\-]+)*\\.(" + [..._].join("|") + "))(?![\\w-])",
      "i"
    ) : /$^/), L;
  }
  function bt(e, t) {
    if (!e) return !1;
    const o = e.getAttribute("title") || e.getAttribute("aria-label") || e.getAttribute("data-path") || "", s = (e.textContent || "").replace(/\s+/g, " ").trim(), r = (o + " " + s).trim();
    let a = r;
    try {
      const n = decodeURIComponent(r);
      n.indexOf("�") === -1 && (a = n);
    } catch {
    }
    const p = vt().exec(a);
    if (!p) return !1;
    const d = K(p[1]), f = $(d);
    if (!_.has(f)) return !1;
    let l = "";
    const v = xt().exec(a);
    v ? (l = v[1], l.startsWith("/") || (l = "/" + l)) : l = d;
    try {
      const n = e.querySelector('a[href*="/files/preview/"], img[src*="/files/preview/"]'), c = n && (n.getAttribute("href") || n.getAttribute("src")) || "", h = at(c);
      h && (l = h);
    } catch {
    }
    const m = Y(l);
    if (!m) return !1;
    if (t) {
      t.preventDefault(), t.stopPropagation();
      try {
        t.stopImmediatePropagation();
      } catch {
      }
    }
    return w("接管预览(DOM):", d, "(" + f + ") path=", m), Z(d, f, m, ""), !0;
  }
  function yt() {
    window.__QP_OFV_DOM__ || (window.__QP_OFV_DOM__ = !0, document.addEventListener(
      "click",
      (e) => {
        try {
          const t = e.target;
          if (!t || !t.closest || t.closest("[data-qp-ofv-overlay]")) return;
          const o = t.closest('[class*="bubbleFile"]') || t.closest('[class*="ResponseArtifactList-module__file"]') || t.closest('[class*="ResponseArtifactList-module__details__"]');
          if (!o) return;
          bt(o, e);
        } catch (t) {
          b("DOM 委托失败:", t);
        }
      },
      !0
    ), w("已安装 DOM 点击委托"));
  }
  const wt = "/api/frontend_plugin/" + G + "/files/frontend/style.css";
  function kt() {
    if (document.querySelector("link[data-qp-ofv-style]")) return;
    const e = document.createElement("link");
    e.rel = "stylesheet", e.href = wt, e.setAttribute("data-qp-ofv-style", "1"), document.head.appendChild(e);
  }
  async function Et() {
    const e = window.QwenPaw;
    if (!(!e || !e.host || typeof e.host.fetch != "function"))
      try {
        const t = await e.host.fetch("/envs");
        if (!t.ok) {
          b("读取环境变量失败:", t.status);
          return;
        }
        const o = await t.json(), s = Array.isArray(o) ? o.find((r) => r && String(r.key).toUpperCase() === V) : null;
        s ? (j = new Set(ot(s.value)), w(V + " 已配置 → 交回原生:", [...j].join(",") || "(空，OFV 全接管)")) : w(V + " 未配置 → 用默认放行清单"), nt();
      } catch (t) {
        b("读取环境变量异常（用默认清单）:", t);
      }
  }
  function N() {
    kt(), gt(), yt(), Et();
  }
  if (window.QwenPaw && window.QwenPaw.host)
    N();
  else {
    let e = 0;
    const t = setInterval(() => {
      if (window.QwenPaw && window.QwenPaw.host) {
        clearInterval(t), N();
        return;
      }
      ++e > 40 && (clearInterval(t), N());
    }, 500);
  }
})();

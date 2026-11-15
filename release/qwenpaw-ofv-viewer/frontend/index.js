(() => {
  const Y = "0.8.2", J = "[ofv-viewer]", Z = "qwenpaw-ofv-viewer", B = "OFV_NATIVE_EXTS", lt = [
    // 图片：宿主原生预览已支持
    "png",
    "jpg",
    "jpeg",
    "gif",
    "webp",
    "svg",
    "ico",
    "bmp",
    // 标记/网页/表格/样式：默认宿主原生渲染更好，但已纳入可接管全集，
    // 从 OFV_NATIVE_EXTS 配置里去掉即可让 OFV 接管（v0.7.7）
    "md",
    "mdx",
    "html",
    "htm",
    "css",
    "csv"
  ], tt = [
    // pdf（v0.4.0 接管）
    "pdf",
    // office（含老格式与宏格式，原生都不支持）
    "doc",
    "docx",
    "docm",
    "dot",
    "dotx",
    "dotm",
    "xls",
    "xlsx",
    "xlsm",
    "xlsb",
    "ppt",
    "pptx",
    "pptm",
    "pps",
    "ppsx",
    "ppsm",
    "potx",
    "potm",
    "rtf",
    "odt",
    "fodt",
    "ods",
    "fods",
    "odp",
    "fodp",
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
    "env",
    "properties",
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
    "xml",
    "proto",
    "hcl",
    "tf",
    "dockerfile",
    "makefile",
    "r",
    // 前端框架/标记（v0.7.5：vue/html 等纯文本，OFV langMap 原生支持）
    "vue",
    "svelte",
    "astro",
    "scss",
    "less",
    "kt",
    "swift",
    "rb",
    "php",
    "cs",
    "dart",
    "lua",
    "bat",
    "ps1",
    // v0.7.7：网页/样式/标记/表格纳入可接管全集（默认仍在放行清单走原生，
    // 从 OFV_NATIVE_EXTS 去掉即由 OFV 接管）——修 OFV_NATIVE_EXTS 无法接管这些的不对称
    "html",
    "htm",
    "css",
    "md",
    "csv"
  ];
  let z = new Set(lt), S = new Set(tt.filter((e) => !z.has(e)));
  function dt(e) {
    return String(e ?? "").split(/[,\s;]+/).map((t) => t.trim().replace(/^\.+/, "").toLowerCase()).filter(Boolean);
  }
  function pt() {
    S = new Set(tt.filter((e) => !z.has(e))), D = null;
  }
  const ft = (() => {
    const e = {}, t = (o, n) => n.forEach((r) => e[r] = o);
    return t("office", ["docx", "docm", "dotx", "dotm", "rtf", "odt", "fodt"]), t("sheet", ["xlsx", "xlsm", "xlsb", "xls", "ods", "fods", "csv"]), t("ppt", ["pptx", "pptm", "ppsx", "ppsm", "potx", "potm", "odp", "fodp"]), t("legacy", ["doc", "dot", "ppt", "pps"]), t("pdf", ["pdf"]), t("archive", ["zip", "rar", "7z", "tar", "gz", "tgz", "bz2"]), t("email", ["eml", "msg", "mbox"]), t("plain", ["txt", "log", "conf", "ini", "env", "properties", "md"]), t("text", [
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
      "makefile",
      "vue",
      "svelte",
      "astro",
      "scss",
      "less",
      "dart",
      "lua",
      "bat",
      "ps1",
      "r",
      // v0.7.7：网页/样式源码高亮（OFV langMap：html/htm→markup、css→css）
      "html",
      "htm",
      "css"
    ]), e;
  })(), g = (...e) => {
    try {
      console.log(J, Y, ...e);
    } catch {
    }
  }, x = (...e) => {
    try {
      console.error(J, Y, ...e);
    } catch {
    }
  };
  function N(e) {
    const t = /\.([^.]+)$/.exec(String(e || ""));
    return t ? t[1].toLowerCase() : "";
  }
  function ut(e) {
    const t = Number(e);
    return !isFinite(t) || t < 0 ? "" : t < 1024 ? t + " B" : t < 1024 * 1024 ? (t / 1024).toFixed(t < 10240 ? 1 : 0) + " KB" : (t / 1024 / 1024).toFixed(1) + " MB";
  }
  function Q(e) {
    const t = String(e || ""), o = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
    return o >= 0 ? t.slice(o + 1) : t;
  }
  function et(e) {
    let t = String(e || "").trim();
    if (!t) return "";
    t.toLowerCase().startsWith("file://") && (t = t.slice(7), t.toLowerCase().startsWith("localhost/") && (t = t.slice(10))), t.startsWith("/files/preview/") && (t = t.slice(14));
    try {
      t = decodeURIComponent(t).replace(/\\/g, "/");
    } catch {
    }
    return t;
  }
  function ht(e) {
    const t = /\/workspaces\/([^/]+)\//.exec(String(e || ""));
    return t ? t[1] : "";
  }
  function mt(e) {
    const t = String(e || "");
    let o = /^(\/.*)\/coding_projects\/([^/]+)\//.exec(t);
    return o ? o[1] + "/coding_projects/" + o[2] : (o = /^\/(.*)\/workspaces\/([^/]+)\//.exec(t), o ? "/" + o[1] + "/workspaces/" + o[2] : "");
  }
  function gt() {
    try {
      const e = location.pathname.match(/^\/chat\/([^/?#]+)/);
      if (e) return decodeURIComponent(e[1]);
    } catch {
    }
    return "";
  }
  function xt(e) {
    const t = String(e || "");
    return t.startsWith("/") || t.startsWith("~") || /^[a-z]:\//i.test(t);
  }
  function bt() {
    const e = window.QwenPaw && window.QwenPaw.host || {}, t = {};
    try {
      const o = typeof e.getApiToken == "function" ? e.getApiToken() : localStorage.getItem("qwenpaw_auth_token") || "";
      o && (t.Authorization = "Bearer " + o);
    } catch {
    }
    try {
      const o = sessionStorage.getItem("qwenpaw-agent-storage") || localStorage.getItem("qwenpaw-agent-storage") || "", n = o ? JSON.parse(o) : null, r = n && n.state && n.state.selectedAgent;
      r && (t["X-Agent-Id"] = r);
    } catch {
    }
    return t;
  }
  function ot(e) {
    let t = String(e || "");
    if (!t) return "";
    if (/^https?:\/\//i.test(t)) return t;
    if (t.startsWith("/")) {
      const o = window.QwenPaw && window.QwenPaw.host || {};
      try {
        t = typeof o.getApiUrl == "function" ? o.getApiUrl(t) : "/api" + t;
      } catch {
      }
      try {
        const n = typeof o.getApiToken == "function" ? o.getApiToken() : localStorage.getItem("qwenpaw_auth_token") || "";
        n && t.indexOf("token=") < 0 && (t += (t.indexOf("?") >= 0 ? "&" : "?") + "token=" + encodeURIComponent(n));
      } catch {
      }
      return t;
    }
    return t;
  }
  async function vt(e, t, o) {
    const n = window.QwenPaw;
    if (!n || !n.host || typeof n.host.fetch != "function")
      throw new Error("宿主 fetch 不可用");
    const r = String(e || ""), a = r.replace(/^\/+/, ""), c = a.split("/").filter(Boolean), i = [], d = gt(), p = d ? { "X-Chat-Id": d } : {};
    if (t && i.push({ direct: String(t) }), !xt(r))
      i.push({ root: o || "project", path: a, headers: p }), (o || "project") !== "workspace" && i.push({ root: "workspace", path: a, headers: p });
    else {
      i.push({ direct: "/files/preview/" + a });
      const s = ht(r);
      if (s) {
        const f = mt(r), m = f ? r.slice(f.length + 1) : "";
        f && m && i.push({ root: "project:" + f, path: m, agent: s, headers: p });
        const A = "/workspaces/" + s + "/", h = r.indexOf(A);
        h >= 0 && i.push({ root: "workspace", path: r.slice(h + A.length), agent: s, headers: p });
      } else {
        const f = Math.min(c.length, 3);
        for (let m = 1; m <= f; m++)
          i.push({ root: "workspace", path: c.slice(-m).join("/"), headers: p }), i.push({ root: "project", path: c.slice(-m).join("/"), headers: p });
      }
    }
    let u = "";
    const b = /* @__PURE__ */ new Set();
    for (const s of i) {
      const f = s.direct ? "d:" + s.direct : s.root + ":" + s.path + "@" + (s.agent || "cur") + ":" + (s.headers && s.headers["X-Chat-Id"] ? "chat" : "plain");
      if (!b.has(f)) {
        b.add(f);
        try {
          let m;
          if (s.direct)
            m = await fetch(ot(s.direct), { headers: bt() });
          else {
            const A = "/workspace/file-download?path=" + encodeURIComponent(s.path) + "&root=" + encodeURIComponent(s.root), h = {};
            s.agent && (h.headers = { ...h.headers || {}, "X-Agent-Id": s.agent }), s.headers && (h.headers = { ...h.headers || {}, ...s.headers }), m = await n.host.fetch(A, Object.keys(h).length ? h : void 0);
          }
          if (m.ok) return await m.blob();
          u = (s.direct ? "direct:" + s.direct : s.root + ":" + s.path) + " -> HTTP " + m.status, g("候选未命中:", u);
        } catch (m) {
          u = (s.direct ? "direct:" + s.direct : s.root + ":" + s.path) + " -> " + (m && m.message ? m.message : m), g("候选异常:", u);
        }
      }
    }
    const w = new Error("拉取失败（已试 " + b.size + " 个候选）最后: " + u);
    throw w.downloadUrls = i.filter((s) => s.direct).map((s) => s.direct), w;
  }
  async function yt(e) {
    try {
      const t = await e.text();
      if (navigator.clipboard && navigator.clipboard.writeText)
        await navigator.clipboard.writeText(t);
      else {
        const o = document.createElement("textarea");
        o.value = t, o.style.position = "fixed", o.style.opacity = "0", document.body.appendChild(o), o.select();
        try {
          document.execCommand("copy");
        } catch {
        }
        o.remove();
      }
      return g("已复制", (t || "").length, "字符"), !0;
    } catch (t) {
      return x("复制失败:", t), !1;
    }
  }
  function nt(e, t, o) {
    const n = document.createElement("button");
    return n.textContent = e, n.title = t, n.style.cssText = "border:1px solid #e2e8f0;background:#fff;color:#334155;height:28px;padding:0 10px;border-radius:6px;cursor:pointer;font-size:12.5px;margin-right:8px;line-height:1;", n.onmouseenter = () => {
      n.style.background = "#f1f5f9";
    }, n.onmouseleave = () => {
      n.style.background = "#fff";
    }, n.onclick = o, n;
  }
  function wt(e, t, o, n) {
    let r = !1;
    const a = () => {
      if (r) return !0;
      const u = e.querySelectorAll(".ofv-code-action");
      if (!u.length) return !1;
      let b = o.nextSibling;
      return u.forEach((w) => {
        w.setAttribute("data-qp-ofv-hoisted", "1"), w.style.cssText += "margin-left:8px;", t.insertBefore(w, b);
      }), r = !0, !0;
    }, c = () => {
      if (r) return;
      r = !0;
      const u = o.nextSibling;
      n.isText && t.insertBefore(
        nt("复制", "复制文本内容", () => yt(n.blob)),
        u
      );
      const b = nt("下载", "下载文件", () => M(n.blob, n.name));
      b.__qpOfvDl = !0, t.insertBefore(b, u);
    };
    if (!n.hasCodeActions) {
      c();
      return;
    }
    if (a()) return;
    const i = new MutationObserver(() => {
      a() && i.disconnect();
    });
    i.observe(e, { childList: !0, subtree: !0 });
    let d = 0;
    const p = setInterval(() => {
      a() ? (clearInterval(p), i.disconnect()) : ++d > 10 && (clearInterval(p), i.disconnect(), c());
    }, 250);
    R.push(() => {
      i.disconnect(), clearInterval(p);
    });
  }
  let _ = null, y = null;
  const F = {}, R = [];
  function M(e, t) {
    if (!e) {
      x("下载失败：没有可用的文件数据");
      return;
    }
    try {
      const o = URL.createObjectURL(e), n = document.createElement("a");
      n.href = o, n.download = t || "download", n.style.display = "none", document.body.appendChild(n), n.click(), setTimeout(() => {
        try {
          n.remove(), URL.revokeObjectURL(o);
        } catch {
        }
      }, 4e3), g("已触发下载:", t, e.size, "bytes");
    } catch (o) {
      x("下载失败:", o);
    }
  }
  function kt(e, t, o) {
    const n = (d) => {
      d.__qpOfvDl || (d.__qpOfvDl = !0, d.addEventListener("click", (p) => {
        p.preventDefault(), p.stopPropagation();
        try {
          p.stopImmediatePropagation();
        } catch {
        }
        M(t, o);
      }, !0));
    }, r = () => {
      e.querySelectorAll("button").forEach((d) => {
        const p = (d.title || "") + (d.textContent || "");
        /下载|download/i.test(p) && n(d);
      });
    };
    r();
    const a = new MutationObserver(r);
    a.observe(e, { childList: !0, subtree: !0 });
    let c = 0;
    const i = setInterval(() => {
      r(), ++c > 30 && (clearInterval(i), a.disconnect());
    }, 300);
    R.push(() => {
      a.disconnect(), clearInterval(i);
    });
  }
  function C() {
    try {
      y && y.destroy && y.destroy();
    } catch {
    }
    if (y = null, _ && _.parentNode) {
      const e = _, t = e.firstElementChild;
      t && (t.style.transform = "translateX(100%)"), e.style.opacity = "0", setTimeout(() => {
        e.parentNode && e.parentNode.removeChild(e);
      }, 280);
    }
    _ = null;
    try {
      document.removeEventListener("keydown", rt);
    } catch {
    }
    for (; R.length; )
      try {
        R.pop()();
      } catch {
      }
  }
  function rt(e) {
    e.key === "Escape" && C();
  }
  function _t(e) {
    const t = document.querySelector('[class*="sender"] textarea');
    if (!t)
      return x("未找到聊天输入框，引用失败"), !1;
    const o = "@ " + String(e || ""), n = t.selectionStart ?? t.value.length, r = t.selectionEnd ?? n, a = t.value.slice(0, n), c = t.value.slice(r), i = a && !/\s$/.test(a) ? " " : "", d = a + i + o + " " + c, p = Object.getPrototypeOf(t), u = Object.getOwnPropertyDescriptor(p, "value");
    u && u.set ? u.set.call(t, d) : t.value = d, t.dispatchEvent(new Event("input", { bubbles: !0 }));
    const b = a.length + i.length + o.length + 1;
    return requestAnimationFrame(() => {
      t.focus();
      try {
        t.setSelectionRange(b, b);
      } catch {
      }
    }), g("已引用到聊天:", o), !0;
  }
  function Et() {
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
  function at(e, t) {
    const o = document.createElement("div");
    o.style.cssText = "display:flex;gap:10px;justify-content:center;margin-top:14px;";
    const n = (r, a) => {
      const c = document.createElement("button");
      return c.textContent = r, c.style.cssText = "border:1px solid #e2e8f0;background:#fff;color:#334155;height:32px;padding:0 14px;border-radius:6px;cursor:pointer;font-size:13px;", c.onmouseenter = () => {
        c.style.background = "#f1f5f9";
      }, c.onmouseleave = () => {
        c.style.background = "#fff";
      }, c.onclick = (i) => {
        i.stopPropagation(), a();
      }, c;
    };
    if (t.url) {
      const r = document.createElement("a");
      r.textContent = "⬇ 下载文件", r.title = "浏览器直接下载（服务端原始地址）", r.href = ot(t.url), t.name && (r.download = t.name), r.style.cssText = "display:inline-flex;align-items:center;height:32px;padding:0 14px;border:1px solid #e2e8f0;background:#fff;color:#334155;border-radius:6px;cursor:pointer;font-size:13px;text-decoration:none;", r.onclick = (a) => a.stopPropagation(), o.appendChild(r);
    }
    t.blob && o.appendChild(n("⬇ 下载已取回的文件", () => M(t.blob, t.name))), e.appendChild(o);
  }
  async function Ct(e, t, o, n, r) {
    C(), Et();
    const a = document.createElement("div");
    a.setAttribute("data-qp-ofv-overlay", "1"), a.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:rgba(15,23,42,.45);transition:opacity .25s ease;", a.onclick = (l) => {
      l.target === a && C();
    };
    const c = document.createElement("div");
    c.style.cssText = "position:fixed;right:0;top:0;bottom:0;z-index:2147483001;width:min(96vw, 1100px);background:#fff;box-shadow:-8px 0 32px rgba(0,0,0,.18);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .3s cubic-bezier(0.16,1,0.3,1);font:14px/1.4 -apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;";
    const i = document.createElement("div");
    i.style.cssText = "flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid #e2e8f0;background:#fff;";
    const d = document.createElement("div");
    d.style.cssText = "min-width:0;overflow:hidden;";
    const p = document.createElement("div");
    p.textContent = e, p.style.cssText = "font-weight:600;color:#0f172a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
    const u = document.createElement("div");
    u.style.cssText = "font-size:11.5px;color:#94a3b8;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", d.appendChild(p), d.appendChild(u);
    const b = () => {
      const l = [];
      t && l.push(t.toUpperCase()), w.value != null && l.push(ut(w.value)), u.textContent = l.join(" · ");
    }, w = { value: null }, s = document.createElement("button");
    s.textContent = "✕", s.title = "关闭 (Esc)", s.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;", s.onmouseenter = () => {
      s.style.background = "#e2e8f0";
    }, s.onmouseleave = () => {
      s.style.background = "#f1f5f9";
    }, s.onclick = C;
    const f = document.createElement("button");
    f.textContent = "在聊天中引用", f.title = "以 @ 路径的形式插入到聊天输入框", f.style.cssText = "border:1px solid #e2e8f0;background:#fff;color:#334155;height:28px;padding:0 10px;border-radius:6px;cursor:pointer;font-size:12.5px;margin-right:8px;line-height:1;", f.onmouseenter = () => {
      f.style.background = "#f1f5f9";
    }, f.onmouseleave = () => {
      f.style.background = "#fff";
    }, f.onclick = () => {
      _t(o) && C();
    };
    const A = [
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
    ].includes(t), h = document.createElement("button");
    h.textContent = "☰ 目录", h.title = "显示/隐藏页码导航", h.style.cssText = f.style.cssText, h.onmouseenter = () => {
      h.style.background = "#f1f5f9";
    }, h.onmouseleave = () => {
      h.style.background = "#fff";
    }, h.onclick = () => {
      Ft(!st);
    };
    const I = document.createElement("button");
    I.textContent = "⛶", I.title = "全屏 / 退出全屏", I.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;margin-right:8px;", I.onclick = () => {
      document.fullscreenElement ? document.exitFullscreen() : c.requestFullscreen && c.requestFullscreen().catch(() => {
      });
    };
    const T = document.createElement("div");
    T.style.cssText = "display:flex;align-items:center;", T.appendChild(f), A && T.appendChild(h), T.appendChild(I), T.appendChild(s), i.appendChild(d), i.appendChild(T);
    let st = !1;
    const P = document.createElement("div");
    P.style.cssText = "flex:0 0 auto;width:0;overflow:hidden;transition:width .22s ease;border-right:0 solid #e2e8f0;background:#f8fafc;";
    const q = document.createElement("div");
    q.style.cssText = "width:200px;padding:12px;box-sizing:border-box;height:100%;overflow:auto;", q.innerHTML = '<div style="font-size:12px;color:#64748b;margin-bottom:8px">页面导航</div><div style="display:flex;gap:6px;margin-bottom:10px"><button data-toc="prev" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">上一页</button><button data-toc="next" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">下一页</button></div><div style="display:flex;gap:6px;align-items:center"><input data-toc="page" type="number" min="1" style="width:64px;height:28px;border:1px solid #e2e8f0;border-radius:6px;padding:0 6px"><button data-toc="go" style="height:28px;padding:0 10px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">跳转</button></div><div data-toc="tip" style="margin-top:10px;font-size:11.5px;color:#94a3b8;line-height:1.5">提示：也可直接用工具栏的缩放与搜索</div>', P.appendChild(q);
    function Ft(l) {
      st = l, P.style.width = l ? "200px" : "0", P.style.borderRightWidth = l ? "1px" : "0", h.style.background = l ? "#e2e8f0" : "#fff", setTimeout(() => {
        try {
          y && y.resize && y.resize();
        } catch {
        }
      }, 250);
    }
    const $ = q.querySelector('[data-toc="page"]');
    let O = 1;
    const G = (l) => {
      if (!y || typeof y.goToPage != "function") return !1;
      const k = y.goToPage(l);
      return k && (O = l), k;
    };
    q.querySelector('[data-toc="prev"]').onclick = () => {
      G(Math.max(1, O - 1)) && ($.value = O);
    }, q.querySelector('[data-toc="next"]').onclick = () => {
      G(O + 1) && ($.value = O);
    }, q.querySelector('[data-toc="go"]').onclick = () => {
      const l = parseInt($.value, 10);
      l > 0 && G(l);
    };
    const j = document.createElement("div");
    j.style.cssText = "flex:1 1 auto;min-height:0;overflow:auto;padding:12px;";
    const v = document.createElement("div");
    v.textContent = "加载中…", v.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;min-height:240px;color:#64748b;", j.appendChild(v), c.appendChild(i);
    const U = document.createElement("div");
    U.style.cssText = "flex:1 1 auto;min-height:0;display:flex;", U.appendChild(P), U.appendChild(j), c.appendChild(U), a.appendChild(c), document.body.appendChild(a), _ = a, document.addEventListener("keydown", rt);
    const L = a;
    requestAnimationFrame(() => {
      c.style.transform = "translateX(0)";
    });
    let E;
    try {
      if (E = await vt(o, n, r), _ !== L) return;
      w.value = E && typeof E.size == "number" ? E.size : null, b();
    } catch (l) {
      if (_ !== L) return;
      v.style.flexDirection = "column", v.textContent = "拉取文件失败：" + (l && l.message ? l.message : l), at(v, {
        url: l && l.downloadUrls && l.downloadUrls[0] || "",
        name: e
      }), v.onclick = C, x("拉取失败", o, l);
      return;
    }
    try {
      if (_ !== L) return;
      j.removeChild(v);
      const l = document.createElement("div");
      l.style.cssText = "height:100%;min-height:0;", j.appendChild(l);
      const k = ft[t] || "text";
      if (!F[k]) {
        const K = window.__QP_OFV_RENDERER_BASE__ || location.origin + "/api/frontend_plugin/" + Z + "/files/frontend/renderer/";
        F[k] = import(
          /* @vite-ignore */
          K + k + ".js"
        ).catch((V) => {
          throw delete F[k], V;
        });
      }
      const { renderViewer: Rt } = await F[k];
      y = Rt({
        container: l,
        file: E,
        fileName: e,
        height: "100%",
        locale: "zh-CN",
        theme: "light",
        onError: (K, V) => x("OFV 渲染错误", V && V.name, K)
      }), g("已打开 OFV 预览:", e, "(" + t + ")", o);
      const ct = k === "text" || k === "plain";
      wt(l, T, f, { blob: E, name: e, isText: ct, hasCodeActions: ct && t !== "md" && t !== "markdown" }), kt(c, E, e);
    } catch (l) {
      if (_ !== L) return;
      v.style.flexDirection = "column", v.textContent = "OFV 渲染失败：" + (l && l.message ? l.message : l), at(v, { blob: E, name: e }), v.onclick = C, x("OFV 渲染失败", l);
    }
  }
  let X = { path: "", ts: 0 };
  function H(e, t, o, n, r) {
    const a = Date.now();
    X.path === o && a - X.ts < 500 || (X = { path: o, ts: a }, Ct(e, t, o, n, r));
  }
  function Tt() {
    if (window.__QP_OFV_DISPATCH__) return;
    window.__QP_OFV_DISPATCH__ = !0;
    const e = window.dispatchEvent.bind(window);
    window.dispatchEvent = function(t) {
      try {
        if (t && t.type === "qwenpaw:open-file-preview") {
          const o = t.detail && t.detail.target || {}, n = String(o.artifactUrl || ""), r = String(o.path || ""), a = Q(r || n), c = N(a || n || r);
          if (S.has(c)) {
            const i = et(r || n);
            if (i)
              return g("接管预览(dispatch):", a, "(" + c + ") path=", i, "root=", o.root || ""), H(a, c, i, n, String(o.root || "")), !0;
          }
        }
      } catch (o) {
        x("dispatch 拦截失败，回退宿主:", o);
      }
      return e(t);
    }, g("已安装派发源头拦截");
  }
  function qt() {
    window.__QP_OFV_CAPTURE__ || (window.__QP_OFV_CAPTURE__ = !0, window.addEventListener(
      "qwenpaw:open-file-preview",
      (e) => {
        try {
          const o = (e && e.detail || {}).target || {}, n = String(o.artifactUrl || ""), r = String(o.path || ""), a = Q(r || n), c = N(a || n || r);
          if (!S.has(c)) return;
          e.stopPropagation();
          try {
            e.stopImmediatePropagation();
          } catch {
          }
          g("接管预览:", a, "(" + c + ") path=", r, "url=", n);
          const i = et(r || n);
          if (!i) {
            x("无法归一化路径，放行");
            return;
          }
          H(a, c, i, n, String(o.root || ""));
        } catch (t) {
          x("接管失败:", t);
        }
      },
      !0
    ), g("已安装预览接管监听"));
  }
  const it = "\\p{L}\\p{N}@.\\-_%";
  let D = null;
  function St() {
    return D || (D = S.size ? new RegExp(
      "([" + it + "]+\\.(" + [...S].join("|") + "))(?![" + it + "\\w-])",
      "iu"
    ) : /$^/), D;
  }
  function At(e) {
    try {
      const t = e.querySelector(
        "a[href], img[src], video[src], audio[src], source[src], [data-url]"
      );
      if (t) {
        const o = t.getAttribute("href") || t.getAttribute("src") || t.getAttribute("data-url") || "";
        if (o && !o.startsWith("#") && !/^javascript:/i.test(o)) return o;
      }
    } catch {
    }
    try {
      const t = Object.keys(e).find(
        (n) => n.startsWith("__reactFiber$") || n.startsWith("__reactInternalInstance$")
      );
      let o = t ? e[t] : null;
      for (let n = 0; o && n < 14; n++, o = o.return) {
        const r = o && o.memoizedProps;
        if (!r || typeof r != "object") continue;
        const a = r.url || r.item && r.item.url || r.data && r.data.url || r.media && r.media.url;
        if (typeof a == "string" && a && !a.startsWith("#") && !/^javascript:/i.test(a)) return a;
      }
    } catch {
    }
    return "";
  }
  function It(e, t) {
    if (!e) return !1;
    const o = At(e);
    if (!o) return !1;
    let n = Q(String(o).split("?")[0].split("#")[0]);
    if (!n || n.indexOf(".") < 0) {
      const a = e.getAttribute("title") || e.getAttribute("aria-label") || "", c = (e.textContent || "").replace(/\s+/g, " ").trim(), i = St().exec((a + " " + c).trim());
      n = i && i[1] || n || "file";
    }
    const r = N(n);
    if (!S.has(r)) return !1;
    if (t) {
      t.preventDefault(), t.stopPropagation();
      try {
        t.stopImmediatePropagation();
      } catch {
      }
    }
    return g("接管预览(DOM):", n, "(" + r + ") url=", o), H(n, r, n, o, ""), !0;
  }
  function Pt() {
    window.__QP_OFV_DOM__ || (window.__QP_OFV_DOM__ = !0, document.addEventListener(
      "click",
      (e) => {
        try {
          const t = e.target;
          if (!t || !t.closest || t.closest("[data-qp-ofv-overlay]")) return;
          const o = t.closest('[class*="bubbleFile"]') || t.closest('[class*="ResponseArtifactList-module__file"]') || t.closest('[class*="ResponseArtifactList-module__details__"]');
          if (!o) return;
          It(o, e);
        } catch (t) {
          x("DOM 委托失败:", t);
        }
      },
      !0
    ), g("已安装 DOM 点击委托"));
  }
  const Ot = "/api/frontend_plugin/" + Z + "/files/frontend/style.css";
  function jt() {
    if (document.querySelector("link[data-qp-ofv-style]")) return;
    const e = document.createElement("link");
    e.rel = "stylesheet", e.href = Ot, e.setAttribute("data-qp-ofv-style", "1"), document.head.appendChild(e);
  }
  async function zt() {
    const e = window.QwenPaw;
    if (!(!e || !e.host))
      try {
        const t = e.host, o = typeof t.getApiUrl == "function" ? t.getApiUrl("/envs") : "/api/envs";
        let n = "";
        try {
          n = typeof t.getApiToken == "function" ? t.getApiToken() : localStorage.getItem("qwenpaw_auth_token") || "";
        } catch {
          n = "";
        }
        const r = {};
        n && (r.Authorization = "Bearer " + n);
        const a = await fetch(o, { headers: r });
        if (!a.ok) {
          x("读取环境变量失败:", a.status);
          return;
        }
        const c = await a.json(), i = Array.isArray(c) ? c.find((d) => d && String(d.key).toUpperCase() === B) : null;
        i ? (z = new Set(dt(i.value)), g(B + " 已配置 → 交回原生:", [...z].join(",") || "(空，OFV 全接管)")) : g(B + " 未配置 → 用默认放行清单"), pt();
      } catch (t) {
        x("读取环境变量异常（用默认清单）:", t);
      }
  }
  function W() {
    jt(), Tt(), qt(), Pt(), zt();
  }
  if (window.QwenPaw && window.QwenPaw.host)
    W();
  else {
    let e = 0;
    const t = setInterval(() => {
      if (window.QwenPaw && window.QwenPaw.host) {
        clearInterval(t), W();
        return;
      }
      ++e > 40 && (clearInterval(t), W());
    }, 500);
  }
})();

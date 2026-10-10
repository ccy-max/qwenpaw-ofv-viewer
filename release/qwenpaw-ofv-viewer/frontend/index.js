(() => {
  const Z = "0.7.8", tt = "[ofv-viewer]", et = "qwenpaw-ofv-viewer", M = "OFV_NATIVE_EXTS", it = [
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
  ], ot = [
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
    "xml",
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
  let z = new Set(it), T = new Set(ot.filter((e) => !z.has(e)));
  function at(e) {
    return String(e ?? "").split(/[,\s;]+/).map((t) => t.trim().replace(/^\.+/, "").toLowerCase()).filter(Boolean);
  }
  function ct() {
    T = new Set(ot.filter((e) => !z.has(e))), V = null, B = null;
  }
  const lt = (() => {
    const e = {}, t = (o, n) => n.forEach((s) => e[s] = o);
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
  })(), k = (...e) => {
    try {
      console.log(tt, Z, ...e);
    } catch {
    }
  }, y = (...e) => {
    try {
      console.error(tt, Z, ...e);
    } catch {
    }
  };
  function F(e) {
    const t = /\.([^.]+)$/.exec(String(e || ""));
    return t ? t[1].toLowerCase() : "";
  }
  function dt(e) {
    const t = Number(e);
    return !isFinite(t) || t < 0 ? "" : t < 1024 ? t + " B" : t < 1024 * 1024 ? (t / 1024).toFixed(t < 10240 ? 1 : 0) + " KB" : (t / 1024 / 1024).toFixed(1) + " MB";
  }
  function X(e) {
    const t = String(e || ""), o = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
    return o >= 0 ? t.slice(o + 1) : t;
  }
  function H(e) {
    let t = String(e || "").trim();
    if (!t) return "";
    t.toLowerCase().startsWith("file://") && (t = t.slice(7), t.toLowerCase().startsWith("localhost/") && (t = t.slice(10))), t.startsWith("/files/preview/") && (t = t.slice(14));
    try {
      t = decodeURIComponent(t).replace(/\\/g, "/");
    } catch {
    }
    return t;
  }
  function ft(e) {
    const t = String(e || ""), o = "/files/preview/", n = t.indexOf(o);
    if (n < 0) return "";
    const s = t.slice(n + o.length).split(/[?#]/, 1)[0];
    if (!s) return "";
    try {
      const i = decodeURIComponent(s).replace(/\\/g, "/");
      return /^[a-z]:\//i.test(i) ? i : "/" + i.replace(/^\/+/, "");
    } catch {
      return "";
    }
  }
  function pt(e) {
    const t = /\/workspaces\/([^/]+)\//.exec(String(e || ""));
    return t ? t[1] : "";
  }
  function ut(e) {
    const t = String(e || "");
    let o = /^(\/.*)\/coding_projects\/([^/]+)\//.exec(t);
    return o ? o[1] + "/coding_projects/" + o[2] : (o = /^\/(.*)\/workspaces\/([^/]+)\//.exec(t), o ? "/" + o[1] + "/workspaces/" + o[2] : "");
  }
  async function ht() {
    const e = window.QwenPaw;
    try {
      const t = await e.host.fetch("/agents");
      if (t.ok)
        return ((await t.json()).agents || []).map((n) => n.id).filter(Boolean);
    } catch {
    }
    return [];
  }
  async function mt(e, t) {
    const o = window.QwenPaw;
    if (!o || !o.host || typeof o.host.fetch != "function")
      throw new Error("宿主 fetch 不可用");
    const n = [];
    t && n.push({ direct: String(t), agent: "" });
    const s = String(e || ""), c = s.replace(/^\/+/, "").split("/").filter(Boolean), a = (r, f, x) => {
      f && (n.some((w) => w.root === r && w.path === f && w.agent === x) || n.push({ root: r, path: f, agent: x }));
    }, d = [pt(s)].filter(Boolean);
    for (const r of d) {
      const f = ut(s), x = f ? s.slice(f.length + 1) : "";
      f && x && a("project:" + f, x, r);
      const w = "/workspaces/" + r + "/", m = s.indexOf(w);
      m >= 0 && a("workspace", s.slice(m + w.length), r);
      const h = Math.min(c.length, 3);
      for (let g = 1; g <= h; g++)
        a("workspace", c.slice(-g).join("/"), r), a("project", c.slice(-g).join("/"), r);
    }
    let p = "";
    const u = /* @__PURE__ */ new Set();
    for (const r of n) {
      const f = r.direct ? "d" : r.root + ":" + r.path + "@" + r.agent;
      if (!u.has(f)) {
        u.add(f);
        try {
          const x = r.direct ? r.direct : "/workspace/file-download?path=" + encodeURIComponent(r.path) + "&root=" + encodeURIComponent(r.root), w = r.agent ? { headers: { "X-Agent-Id": r.agent } } : void 0, m = await o.host.fetch(x, w);
          if (m.ok) return await m.blob();
          p = (r.direct ? "direct" : r.root + ":" + r.path + "@" + (r.agent || "cur")) + " -> HTTP " + m.status;
        } catch (x) {
          p = (r.direct ? "direct" : r.root + ":" + r.path + "@" + (r.agent || "cur")) + " -> " + (x && x.message ? x.message : x);
        }
      }
    }
    if ((c[c.length - 1] || "") && !d.length) {
      const r = (() => {
        var h, g, C;
        try {
          return ((g = (h = window.QwenPaw) == null ? void 0 : h.context) == null ? void 0 : g.chatId) || ((C = window.QwenPaw) == null ? void 0 : C.chatId) || "";
        } catch {
          return "";
        }
      })(), f = r ? { "X-Chat-Id": r } : {}, x = [""];
      try {
        x.push(...await ht());
      } catch {
      }
      const w = /* @__PURE__ */ new Set(), m = [];
      for (let h = 0; h < c.length; h++) m.push(c.slice(h).join("/"));
      for (const h of x)
        for (const g of ["project", "workspace"])
          for (const C of m) {
            const q = g + ":" + C + "@" + h;
            if (!w.has(q)) {
              w.add(q);
              try {
                const b = "/workspace/file-download?path=" + encodeURIComponent(C) + "&root=" + g, K = h ? { headers: { "X-Agent-Id": h, ...f } } : Object.keys(f).length ? { headers: f } : void 0, I = await o.host.fetch(b, K);
                if (I.ok) return await I.blob();
                p = g + ":" + C + "@" + (h || "cur") + " -> HTTP " + I.status;
              } catch (b) {
                p = g + ":" + C + "@" + (h || "cur") + " -> " + (b && b.message ? b.message : b);
              }
            }
          }
    }
    throw new Error("拉取失败（已试 " + u.size + " 个候选）最后: " + p);
  }
  async function gt(e) {
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
      return k("已复制", (t || "").length, "字符"), !0;
    } catch (t) {
      return y("复制失败:", t), !1;
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
  function xt(e, t, o, n) {
    let s = !1;
    const i = () => {
      if (s) return !0;
      const u = e.querySelectorAll(".ofv-code-action");
      if (!u.length) return !1;
      let v = o.nextSibling;
      return u.forEach((r) => {
        r.setAttribute("data-qp-ofv-hoisted", "1"), r.style.cssText += "margin-left:8px;", t.insertBefore(r, v);
      }), s = !0, !0;
    }, c = () => {
      if (s) return;
      s = !0;
      const u = o.nextSibling;
      n.isText && t.insertBefore(
        nt("复制", "复制文本内容", () => gt(n.blob)),
        u
      );
      const v = nt("下载", "下载文件", () => rt(n.blob, n.name));
      v.__qpOfvDl = !0, t.insertBefore(v, u);
    };
    if (i()) return;
    const a = new MutationObserver(() => {
      i() && a.disconnect();
    });
    a.observe(e, { childList: !0, subtree: !0 });
    let d = 0;
    const p = setInterval(() => {
      i() ? (clearInterval(p), a.disconnect()) : ++d > 10 && (clearInterval(p), a.disconnect(), c());
    }, 250);
    D.push(() => {
      a.disconnect(), clearInterval(p);
    });
  }
  let A = null, E = null;
  const L = {}, D = [];
  function rt(e, t) {
    if (!e) {
      y("下载失败：没有可用的文件数据");
      return;
    }
    try {
      const o = URL.createObjectURL(e), n = document.createElement("a");
      n.href = o, n.download = t || "download", n.style.display = "none", document.body.appendChild(n), n.click(), setTimeout(() => {
        try {
          n.remove(), URL.revokeObjectURL(o);
        } catch {
        }
      }, 4e3), k("已触发下载:", t, e.size, "bytes");
    } catch (o) {
      y("下载失败:", o);
    }
  }
  function vt(e, t, o) {
    const n = (d) => {
      d.__qpOfvDl || (d.__qpOfvDl = !0, d.addEventListener("click", (p) => {
        p.preventDefault(), p.stopPropagation();
        try {
          p.stopImmediatePropagation();
        } catch {
        }
        rt(t, o);
      }, !0));
    }, s = () => {
      e.querySelectorAll("button").forEach((d) => {
        const p = (d.title || "") + (d.textContent || "");
        /下载|download/i.test(p) && n(d);
      });
    };
    s();
    const i = new MutationObserver(s);
    i.observe(e, { childList: !0, subtree: !0 });
    let c = 0;
    const a = setInterval(() => {
      s(), ++c > 30 && (clearInterval(a), i.disconnect());
    }, 300);
    D.push(() => {
      i.disconnect(), clearInterval(a);
    });
  }
  function P() {
    try {
      E && E.destroy && E.destroy();
    } catch {
    }
    if (E = null, A && A.parentNode) {
      const e = A, t = e.firstElementChild;
      t && (t.style.transform = "translateX(100%)"), e.style.opacity = "0", setTimeout(() => {
        e.parentNode && e.parentNode.removeChild(e);
      }, 280);
    }
    A = null;
    try {
      document.removeEventListener("keydown", st);
    } catch {
    }
    for (; D.length; )
      try {
        D.pop()();
      } catch {
      }
  }
  function st(e) {
    e.key === "Escape" && P();
  }
  function bt(e) {
    const t = document.querySelector('[class*="sender"] textarea');
    if (!t)
      return y("未找到聊天输入框，引用失败"), !1;
    const o = "@ " + String(e || ""), n = t.selectionStart ?? t.value.length, s = t.selectionEnd ?? n, i = t.value.slice(0, n), c = t.value.slice(s), a = i && !/\s$/.test(i) ? " " : "", d = i + a + o + " " + c, p = Object.getPrototypeOf(t), u = Object.getOwnPropertyDescriptor(p, "value");
    u && u.set ? u.set.call(t, d) : t.value = d, t.dispatchEvent(new Event("input", { bubbles: !0 }));
    const v = i.length + a.length + o.length + 1;
    return requestAnimationFrame(() => {
      t.focus();
      try {
        t.setSelectionRange(v, v);
      } catch {
      }
    }), k("已引用到聊天:", o), !0;
  }
  function yt() {
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
  async function wt(e, t, o, n) {
    P(), yt();
    const s = document.createElement("div");
    s.setAttribute("data-qp-ofv-overlay", "1"), s.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:rgba(15,23,42,.45);transition:opacity .25s ease;", s.onclick = (l) => {
      l.target === s && P();
    };
    const i = document.createElement("div");
    i.style.cssText = "position:fixed;right:0;top:0;bottom:0;z-index:2147483001;width:min(96vw, 1100px);background:#fff;box-shadow:-8px 0 32px rgba(0,0,0,.18);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .3s cubic-bezier(0.16,1,0.3,1);font:14px/1.4 -apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;";
    const c = document.createElement("div");
    c.style.cssText = "flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid #e2e8f0;background:#fff;";
    const a = document.createElement("div");
    a.style.cssText = "min-width:0;overflow:hidden;";
    const d = document.createElement("div");
    d.textContent = e, d.style.cssText = "font-weight:600;color:#0f172a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
    const p = document.createElement("div");
    p.style.cssText = "font-size:11.5px;color:#94a3b8;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", a.appendChild(d), a.appendChild(p);
    const u = () => {
      const l = [];
      t && l.push(t.toUpperCase()), v.value != null && l.push(dt(v.value)), p.textContent = l.join(" · ");
    }, v = { value: null }, r = document.createElement("button");
    r.textContent = "✕", r.title = "关闭 (Esc)", r.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;", r.onmouseenter = () => {
      r.style.background = "#e2e8f0";
    }, r.onmouseleave = () => {
      r.style.background = "#f1f5f9";
    }, r.onclick = P;
    const f = document.createElement("button");
    f.textContent = "在聊天中引用", f.title = "以 @ 路径的形式插入到聊天输入框", f.style.cssText = "border:1px solid #e2e8f0;background:#fff;color:#334155;height:28px;padding:0 10px;border-radius:6px;cursor:pointer;font-size:12.5px;margin-right:8px;line-height:1;", f.onmouseenter = () => {
      f.style.background = "#f1f5f9";
    }, f.onmouseleave = () => {
      f.style.background = "#fff";
    }, f.onclick = () => {
      bt(o) && P();
    };
    const w = [
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
    ].includes(t), m = document.createElement("button");
    m.textContent = "☰ 目录", m.title = "显示/隐藏页码导航", m.style.cssText = f.style.cssText, m.onmouseenter = () => {
      m.style.background = "#f1f5f9";
    }, m.onmouseleave = () => {
      m.style.background = "#fff";
    }, m.onclick = () => {
      K(!C);
    };
    const h = document.createElement("button");
    h.textContent = "⛶", h.title = "全屏 / 退出全屏", h.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;margin-right:8px;", h.onclick = () => {
      document.fullscreenElement ? document.exitFullscreen() : i.requestFullscreen && i.requestFullscreen().catch(() => {
      });
    };
    const g = document.createElement("div");
    g.style.cssText = "display:flex;align-items:center;", g.appendChild(f), w && g.appendChild(m), g.appendChild(h), g.appendChild(r), c.appendChild(a), c.appendChild(g);
    let C = !1;
    const q = document.createElement("div");
    q.style.cssText = "flex:0 0 auto;width:0;overflow:hidden;transition:width .22s ease;border-right:0 solid #e2e8f0;background:#f8fafc;";
    const b = document.createElement("div");
    b.style.cssText = "width:200px;padding:12px;box-sizing:border-box;height:100%;overflow:auto;", b.innerHTML = '<div style="font-size:12px;color:#64748b;margin-bottom:8px">页面导航</div><div style="display:flex;gap:6px;margin-bottom:10px"><button data-toc="prev" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">上一页</button><button data-toc="next" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">下一页</button></div><div style="display:flex;gap:6px;align-items:center"><input data-toc="page" type="number" min="1" style="width:64px;height:28px;border:1px solid #e2e8f0;border-radius:6px;padding:0 6px"><button data-toc="go" style="height:28px;padding:0 10px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">跳转</button></div><div data-toc="tip" style="margin-top:10px;font-size:11.5px;color:#94a3b8;line-height:1.5">提示：也可直接用工具栏的缩放与搜索</div>', q.appendChild(b);
    function K(l) {
      C = l, q.style.width = l ? "200px" : "0", q.style.borderRightWidth = l ? "1px" : "0", m.style.background = l ? "#e2e8f0" : "#fff", setTimeout(() => {
        try {
          E && E.resize && E.resize();
        } catch {
        }
      }, 250);
    }
    const I = b.querySelector('[data-toc="page"]');
    let j = 1;
    const Y = (l) => {
      if (!E || typeof E.goToPage != "function") return !1;
      const _ = E.goToPage(l);
      return _ && (j = l), _;
    };
    b.querySelector('[data-toc="prev"]').onclick = () => {
      Y(Math.max(1, j - 1)) && (I.value = j);
    }, b.querySelector('[data-toc="next"]').onclick = () => {
      Y(j + 1) && (I.value = j);
    }, b.querySelector('[data-toc="go"]').onclick = () => {
      const l = parseInt(I.value, 10);
      l > 0 && Y(l);
    };
    const R = document.createElement("div");
    R.style.cssText = "flex:1 1 auto;min-height:0;overflow:auto;padding:12px;";
    const S = document.createElement("div");
    S.textContent = "加载中…", S.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;min-height:240px;color:#64748b;", R.appendChild(S), i.appendChild(c);
    const N = document.createElement("div");
    N.style.cssText = "flex:1 1 auto;min-height:0;display:flex;", N.appendChild(q), N.appendChild(R), i.appendChild(N), s.appendChild(i), document.body.appendChild(s), A = s, document.addEventListener("keydown", st), requestAnimationFrame(() => {
      i.style.transform = "translateX(0)";
    });
    let O;
    try {
      O = await mt(o, n), v.value = O && typeof O.size == "number" ? O.size : null, u();
    } catch (l) {
      S.textContent = "拉取文件失败：" + (l && l.message ? l.message : l) + "（点击关闭）", S.onclick = P, y("拉取失败", o, l);
      return;
    }
    try {
      R.removeChild(S);
      const l = document.createElement("div");
      l.style.cssText = "height:100%;min-height:0;", R.appendChild(l);
      const _ = lt[t] || "text";
      if (!L[_]) {
        const J = window.__QP_OFV_RENDERER_BASE__ || location.origin + "/api/frontend_plugin/" + et + "/files/frontend/renderer/";
        L[_] = import(
          /* @vite-ignore */
          J + _ + ".js"
        ).catch((Q) => {
          throw delete L[_], Q;
        });
      }
      const { renderViewer: At } = await L[_];
      E = At({
        container: l,
        file: O,
        fileName: e,
        height: "100%",
        locale: "zh-CN",
        theme: "light",
        onError: (J, Q) => y("OFV 渲染错误", Q && Q.name, J)
      }), k("已打开 OFV 预览:", e, "(" + t + ")", o), xt(l, g, f, { blob: O, name: e, isText: _ === "text" || _ === "plain" }), vt(i, O, e);
    } catch (l) {
      S.textContent = "OFV 渲染失败：" + (l && l.message ? l.message : l) + "（点击关闭）", S.onclick = P, y("OFV 渲染失败", l);
    }
  }
  let W = { path: "", ts: 0 };
  function G(e, t, o, n) {
    const s = Date.now();
    W.path === o && s - W.ts < 500 || (W = { path: o, ts: s }, wt(e, t, o, n));
  }
  function kt() {
    if (window.__QP_OFV_DISPATCH__) return;
    window.__QP_OFV_DISPATCH__ = !0;
    const e = window.dispatchEvent.bind(window);
    window.dispatchEvent = function(t) {
      try {
        if (t && t.type === "qwenpaw:open-file-preview") {
          const o = t.detail && t.detail.target || {}, n = String(o.artifactUrl || ""), s = String(o.path || ""), i = X(s || n), c = F(i || n || s);
          if (T.has(c)) {
            const a = H(s || n);
            if (a)
              return k("接管预览(dispatch):", i, "(" + c + ") path=", a), G(i, c, a, n), !0;
          }
        }
      } catch (o) {
        y("dispatch 拦截失败，回退宿主:", o);
      }
      return e(t);
    }, k("已安装派发源头拦截");
  }
  function Et() {
    window.__QP_OFV_CAPTURE__ || (window.__QP_OFV_CAPTURE__ = !0, window.addEventListener(
      "qwenpaw:open-file-preview",
      (e) => {
        try {
          const o = (e && e.detail || {}).target || {}, n = String(o.artifactUrl || ""), s = String(o.path || ""), i = X(s || n), c = F(i || n || s);
          if (!T.has(c)) return;
          e.stopPropagation();
          try {
            e.stopImmediatePropagation();
          } catch {
          }
          k("接管预览:", i, "(" + c + ") path=", s, "url=", n);
          const a = H(s || n);
          if (!a) {
            y("无法归一化路径，放行");
            return;
          }
          G(i, c, a, n);
        } catch (t) {
          y("接管失败:", t);
        }
      },
      !0
    ), k("已安装预览接管监听"));
  }
  const U = "\\p{L}\\p{N}@.\\-_%";
  let V = null, B = null;
  function _t() {
    return V || (V = T.size ? new RegExp(
      "([" + U + "]+\\.(" + [...T].join("|") + "))(?![" + U + "\\w-])",
      "iu"
    ) : /$^/), V;
  }
  function Ct() {
    return B || (B = T.size ? new RegExp(
      "(\\/?[" + U + "]+(?:\\/[\\p{L}\\p{N}@.\\-_%~+()（）\\[\\]]+)*\\.(" + [...T].join("|") + "))(?![" + U + "\\w-])",
      "iu"
    ) : /$^/), B;
  }
  function Tt(e) {
    let t = String(e || "").trim();
    if (!t) return "";
    try {
      t = decodeURIComponent(t).replace(/\\/g, "/");
    } catch {
    }
    const o = t.indexOf("/");
    o >= 0 && (t = t.slice(o));
    const n = F(t);
    return !n || !T.has(n) ? "" : t;
  }
  function qt(e, t) {
    if (!e) return !1;
    const o = e.getAttribute("title") || e.getAttribute("aria-label") || e.getAttribute("data-path") || "", n = Tt(o), s = (e.textContent || "").replace(/\s+/g, " ").trim(), i = (o + " " + s).trim();
    let c = i;
    try {
      const r = decodeURIComponent(i);
      r.indexOf("�") === -1 && (c = r);
    } catch {
    }
    const a = _t().exec(n || c);
    if (!a) return !1;
    const d = X(a[1]), p = F(d);
    if (!T.has(p)) return !1;
    let u = n || "";
    if (!u) {
      const r = Ct().exec(c);
      r ? (u = r[1], u.startsWith("/") || (u = "/" + u)) : u = d;
    }
    try {
      const r = e.querySelector('a[href*="/files/preview/"], img[src*="/files/preview/"]'), f = r && (r.getAttribute("href") || r.getAttribute("src")) || "", x = ft(f);
      x && (u = x);
    } catch {
    }
    const v = H(u);
    if (!v) return !1;
    if (t) {
      t.preventDefault(), t.stopPropagation();
      try {
        t.stopImmediatePropagation();
      } catch {
      }
    }
    return k("接管预览(DOM):", d, "(" + p + ") path=", v), G(d, p, v, ""), !0;
  }
  function St() {
    window.__QP_OFV_DOM__ || (window.__QP_OFV_DOM__ = !0, document.addEventListener(
      "click",
      (e) => {
        try {
          const t = e.target;
          if (!t || !t.closest || t.closest("[data-qp-ofv-overlay]")) return;
          const o = t.closest('[class*="bubbleFile"]') || t.closest('[class*="ResponseArtifactList-module__file"]') || t.closest('[class*="ResponseArtifactList-module__details__"]');
          if (!o) return;
          qt(o, e);
        } catch (t) {
          y("DOM 委托失败:", t);
        }
      },
      !0
    ), k("已安装 DOM 点击委托"));
  }
  const Pt = "/api/frontend_plugin/" + et + "/files/frontend/style.css";
  function It() {
    if (document.querySelector("link[data-qp-ofv-style]")) return;
    const e = document.createElement("link");
    e.rel = "stylesheet", e.href = Pt, e.setAttribute("data-qp-ofv-style", "1"), document.head.appendChild(e);
  }
  async function Ot() {
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
        const s = {};
        n && (s.Authorization = "Bearer " + n);
        const i = await fetch(o, { headers: s });
        if (!i.ok) {
          y("读取环境变量失败:", i.status);
          return;
        }
        const c = await i.json(), a = Array.isArray(c) ? c.find((d) => d && String(d.key).toUpperCase() === M) : null;
        a ? (z = new Set(at(a.value)), k(M + " 已配置 → 交回原生:", [...z].join(",") || "(空，OFV 全接管)")) : k(M + " 未配置 → 用默认放行清单"), ct();
      } catch (t) {
        y("读取环境变量异常（用默认清单）:", t);
      }
  }
  function $() {
    It(), kt(), Et(), St(), Ot();
  }
  if (window.QwenPaw && window.QwenPaw.host)
    $();
  else {
    let e = 0;
    const t = setInterval(() => {
      if (window.QwenPaw && window.QwenPaw.host) {
        clearInterval(t), $();
        return;
      }
      ++e > 40 && (clearInterval(t), $());
    }, 500);
  }
})();

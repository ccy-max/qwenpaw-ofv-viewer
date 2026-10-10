(() => {
  const $ = "0.7.5", K = "[ofv-viewer]", Y = "qwenpaw-ofv-viewer", Q = "OFV_NATIVE_EXTS", nt = [
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
  ], J = [
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
    "ps1"
  ];
  let A = new Set(nt), S = new Set(J.filter((e) => !A.has(e)));
  function rt(e) {
    return String(e ?? "").split(/[,\s;]+/).map((t) => t.trim().replace(/^\.+/, "").toLowerCase()).filter(Boolean);
  }
  function st() {
    S = new Set(J.filter((e) => !A.has(e))), D = null, N = null;
  }
  const at = (() => {
    const e = {}, t = (o, r) => r.forEach((s) => e[s] = o);
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
      "r"
    ]), e;
  })(), _ = (...e) => {
    try {
      console.log(K, $, ...e);
    } catch {
    }
  }, w = (...e) => {
    try {
      console.error(K, $, ...e);
    } catch {
    }
  };
  function B(e) {
    const t = /\.([^.]+)$/.exec(String(e || ""));
    return t ? t[1].toLowerCase() : "";
  }
  function it(e) {
    const t = Number(e);
    return !isFinite(t) || t < 0 ? "" : t < 1024 ? t + " B" : t < 1024 * 1024 ? (t / 1024).toFixed(t < 10240 ? 1 : 0) + " KB" : (t / 1024 / 1024).toFixed(1) + " MB";
  }
  function Z(e) {
    const t = String(e || ""), o = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
    return o >= 0 ? t.slice(o + 1) : t;
  }
  function tt(e) {
    let t = String(e || "").trim();
    if (!t) return "";
    t.toLowerCase().startsWith("file://") && (t = t.slice(7), t.toLowerCase().startsWith("localhost/") && (t = t.slice(10))), t.startsWith("/files/preview/") && (t = t.slice(14));
    try {
      t = decodeURIComponent(t).replace(/\\/g, "/");
    } catch {
    }
    return t;
  }
  function ct(e) {
    const t = String(e || ""), o = "/files/preview/", r = t.indexOf(o);
    if (r < 0) return "";
    const s = t.slice(r + o.length).split(/[?#]/, 1)[0];
    if (!s) return "";
    try {
      const a = decodeURIComponent(s).replace(/\\/g, "/");
      return /^[a-z]:\//i.test(a) ? a : "/" + a.replace(/^\/+/, "");
    } catch {
      return "";
    }
  }
  function lt(e) {
    const t = /\/workspaces\/([^/]+)\//.exec(String(e || ""));
    return t ? t[1] : "";
  }
  function dt(e) {
    const t = String(e || "");
    let o = /^(\/.*)\/coding_projects\/([^/]+)\//.exec(t);
    return o ? o[1] + "/coding_projects/" + o[2] : (o = /^\/(.*)\/workspaces\/([^/]+)\//.exec(t), o ? "/" + o[1] + "/workspaces/" + o[2] : "");
  }
  async function ft() {
    const e = window.QwenPaw;
    try {
      const t = await e.host.fetch("/agents");
      if (t.ok)
        return ((await t.json()).agents || []).map((r) => r.id).filter(Boolean);
    } catch {
    }
    return [];
  }
  async function pt(e, t) {
    const o = window.QwenPaw;
    if (!o || !o.host || typeof o.host.fetch != "function")
      throw new Error("宿主 fetch 不可用");
    const r = [];
    t && r.push({ direct: String(t), agent: "" });
    const s = String(e || ""), l = s.replace(/^\/+/, "").split("/").filter(Boolean), f = (n, c, v) => {
      c && (r.some((y) => y.root === n && y.path === c && y.agent === v) || r.push({ root: n, path: c, agent: v }));
    }, d = [lt(s)].filter(Boolean);
    for (const n of d) {
      const c = dt(s), v = c ? s.slice(c.length + 1) : "";
      c && v && f("project:" + c, v, n);
      const y = "/workspaces/" + n + "/", m = s.indexOf(y);
      m >= 0 && f("workspace", s.slice(m + y.length), n);
      const h = Math.min(l.length, 3);
      for (let g = 1; g <= h; g++)
        f("workspace", l.slice(-g).join("/"), n), f("project", l.slice(-g).join("/"), n);
    }
    let p = "";
    const u = /* @__PURE__ */ new Set();
    for (const n of r) {
      const c = n.direct ? "d" : n.root + ":" + n.path + "@" + n.agent;
      if (!u.has(c)) {
        u.add(c);
        try {
          const v = n.direct ? n.direct : "/workspace/file-download?path=" + encodeURIComponent(n.path) + "&root=" + encodeURIComponent(n.root), y = n.agent ? { headers: { "X-Agent-Id": n.agent } } : void 0, m = await o.host.fetch(v, y);
          if (m.ok) return await m.blob();
          p = (n.direct ? "direct" : n.root + ":" + n.path + "@" + (n.agent || "cur")) + " -> HTTP " + m.status;
        } catch (v) {
          p = (n.direct ? "direct" : n.root + ":" + n.path + "@" + (n.agent || "cur")) + " -> " + (v && v.message ? v.message : v);
        }
      }
    }
    if ((l[l.length - 1] || "") && !d.length) {
      const n = (() => {
        var h, g, E;
        try {
          return ((g = (h = window.QwenPaw) == null ? void 0 : h.context) == null ? void 0 : g.chatId) || ((E = window.QwenPaw) == null ? void 0 : E.chatId) || "";
        } catch {
          return "";
        }
      })(), c = n ? { "X-Chat-Id": n } : {}, v = [""];
      try {
        v.push(...await ft());
      } catch {
      }
      const y = /* @__PURE__ */ new Set(), m = [];
      for (let h = 0; h < l.length; h++) m.push(l.slice(h).join("/"));
      for (const h of v)
        for (const g of ["project", "workspace"])
          for (const E of m) {
            const C = g + ":" + E + "@" + h;
            if (!y.has(C)) {
              y.add(C);
              try {
                const b = "/workspace/file-download?path=" + encodeURIComponent(E) + "&root=" + g, H = h ? { headers: { "X-Agent-Id": h, ...c } } : Object.keys(c).length ? { headers: c } : void 0, I = await o.host.fetch(b, H);
                if (I.ok) return await I.blob();
                p = g + ":" + E + "@" + (h || "cur") + " -> HTTP " + I.status;
              } catch (b) {
                p = g + ":" + E + "@" + (h || "cur") + " -> " + (b && b.message ? b.message : b);
              }
            }
          }
    }
    throw new Error("拉取失败（已试 " + u.size + " 个候选）最后: " + p);
  }
  function ut(e, t, o) {
    let r = !1;
    const s = () => {
      if (r) return !0;
      const p = e.querySelectorAll(".ofv-code-action");
      if (!p.length) return !1;
      let u = o.nextSibling;
      return p.forEach((x) => {
        x.setAttribute("data-qp-ofv-hoisted", "1"), x.style.cssText += "margin-left:8px;", t.insertBefore(x, u);
      }), r = !0, !0;
    };
    if (s()) return;
    const a = new MutationObserver(() => {
      s() && a.disconnect();
    });
    a.observe(e, { childList: !0, subtree: !0 });
    let l = 0;
    const f = setInterval(() => {
      (s() || ++l > 40) && (clearInterval(f), a.disconnect());
    }, 250), d = () => {
      a.disconnect(), clearInterval(f);
    };
    L.push(d);
  }
  let R = null, k = null;
  const F = {}, L = [];
  function ht(e, t) {
    if (!e) {
      w("下载失败：没有可用的文件数据");
      return;
    }
    try {
      const o = URL.createObjectURL(e), r = document.createElement("a");
      r.href = o, r.download = t || "download", r.style.display = "none", document.body.appendChild(r), r.click(), setTimeout(() => {
        try {
          r.remove(), URL.revokeObjectURL(o);
        } catch {
        }
      }, 4e3), _("已触发下载:", t, e.size, "bytes");
    } catch (o) {
      w("下载失败:", o);
    }
  }
  function mt(e, t, o) {
    const r = (d) => {
      d.__qpOfvDl || (d.__qpOfvDl = !0, d.addEventListener("click", (p) => {
        p.preventDefault(), p.stopPropagation();
        try {
          p.stopImmediatePropagation();
        } catch {
        }
        ht(t, o);
      }, !0));
    }, s = () => {
      e.querySelectorAll("button").forEach((d) => {
        const p = (d.title || "") + (d.textContent || "");
        /下载|download/i.test(p) && r(d);
      });
    };
    s();
    const a = new MutationObserver(s);
    a.observe(e, { childList: !0, subtree: !0 });
    let l = 0;
    const f = setInterval(() => {
      s(), ++l > 30 && (clearInterval(f), a.disconnect());
    }, 300);
    L.push(() => {
      a.disconnect(), clearInterval(f);
    });
  }
  function P() {
    try {
      k && k.destroy && k.destroy();
    } catch {
    }
    if (k = null, R && R.parentNode) {
      const e = R, t = e.firstElementChild;
      t && (t.style.transform = "translateX(100%)"), e.style.opacity = "0", setTimeout(() => {
        e.parentNode && e.parentNode.removeChild(e);
      }, 280);
    }
    R = null;
    try {
      document.removeEventListener("keydown", et);
    } catch {
    }
    for (; L.length; )
      try {
        L.pop()();
      } catch {
      }
  }
  function et(e) {
    e.key === "Escape" && P();
  }
  function gt(e) {
    const t = document.querySelector('[class*="sender"] textarea');
    if (!t)
      return w("未找到聊天输入框，引用失败"), !1;
    const o = "@ " + String(e || ""), r = t.selectionStart ?? t.value.length, s = t.selectionEnd ?? r, a = t.value.slice(0, r), l = t.value.slice(s), f = a && !/\s$/.test(a) ? " " : "", d = a + f + o + " " + l, p = Object.getPrototypeOf(t), u = Object.getOwnPropertyDescriptor(p, "value");
    u && u.set ? u.set.call(t, d) : t.value = d, t.dispatchEvent(new Event("input", { bubbles: !0 }));
    const x = a.length + f.length + o.length + 1;
    return requestAnimationFrame(() => {
      t.focus();
      try {
        t.setSelectionRange(x, x);
      } catch {
      }
    }), _("已引用到聊天:", o), !0;
  }
  function vt() {
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
  async function ot(e, t, o, r) {
    P(), vt();
    const s = document.createElement("div");
    s.setAttribute("data-qp-ofv-overlay", "1"), s.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:rgba(15,23,42,.45);transition:opacity .25s ease;", s.onclick = (i) => {
      i.target === s && P();
    };
    const a = document.createElement("div");
    a.style.cssText = "position:fixed;right:0;top:0;bottom:0;z-index:2147483001;width:min(96vw, 1100px);background:#fff;box-shadow:-8px 0 32px rgba(0,0,0,.18);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .3s cubic-bezier(0.16,1,0.3,1);font:14px/1.4 -apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;";
    const l = document.createElement("div");
    l.style.cssText = "flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid #e2e8f0;background:#fff;";
    const f = document.createElement("div");
    f.style.cssText = "min-width:0;overflow:hidden;";
    const d = document.createElement("div");
    d.textContent = e, d.style.cssText = "font-weight:600;color:#0f172a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
    const p = document.createElement("div");
    p.style.cssText = "font-size:11.5px;color:#94a3b8;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", f.appendChild(d), f.appendChild(p);
    const u = () => {
      const i = [];
      t && i.push(t.toUpperCase()), x.value != null && i.push(it(x.value)), p.textContent = i.join(" · ");
    }, x = { value: null }, n = document.createElement("button");
    n.textContent = "✕", n.title = "关闭 (Esc)", n.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;", n.onmouseenter = () => {
      n.style.background = "#e2e8f0";
    }, n.onmouseleave = () => {
      n.style.background = "#f1f5f9";
    }, n.onclick = P;
    const c = document.createElement("button");
    c.textContent = "在聊天中引用", c.title = "以 @ 路径的形式插入到聊天输入框", c.style.cssText = "border:1px solid #e2e8f0;background:#fff;color:#334155;height:28px;padding:0 10px;border-radius:6px;cursor:pointer;font-size:12.5px;margin-right:8px;line-height:1;", c.onmouseenter = () => {
      c.style.background = "#f1f5f9";
    }, c.onmouseleave = () => {
      c.style.background = "#fff";
    }, c.onclick = () => {
      gt(o) && P();
    };
    const y = [
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
    m.textContent = "☰ 目录", m.title = "显示/隐藏页码导航", m.style.cssText = c.style.cssText, m.onmouseenter = () => {
      m.style.background = "#f1f5f9";
    }, m.onmouseleave = () => {
      m.style.background = "#fff";
    }, m.onclick = () => {
      H(!E);
    };
    const h = document.createElement("button");
    h.textContent = "⛶", h.title = "全屏 / 退出全屏", h.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;margin-right:8px;", h.onclick = () => {
      document.fullscreenElement ? document.exitFullscreen() : a.requestFullscreen && a.requestFullscreen().catch(() => {
      });
    };
    const g = document.createElement("div");
    g.style.cssText = "display:flex;align-items:center;", g.appendChild(c), y && g.appendChild(m), g.appendChild(h), g.appendChild(n), l.appendChild(f), l.appendChild(g);
    let E = !1;
    const C = document.createElement("div");
    C.style.cssText = "flex:0 0 auto;width:0;overflow:hidden;transition:width .22s ease;border-right:0 solid #e2e8f0;background:#f8fafc;";
    const b = document.createElement("div");
    b.style.cssText = "width:200px;padding:12px;box-sizing:border-box;height:100%;overflow:auto;", b.innerHTML = '<div style="font-size:12px;color:#64748b;margin-bottom:8px">页面导航</div><div style="display:flex;gap:6px;margin-bottom:10px"><button data-toc="prev" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">上一页</button><button data-toc="next" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">下一页</button></div><div style="display:flex;gap:6px;align-items:center"><input data-toc="page" type="number" min="1" style="width:64px;height:28px;border:1px solid #e2e8f0;border-radius:6px;padding:0 6px"><button data-toc="go" style="height:28px;padding:0 10px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">跳转</button></div><div data-toc="tip" style="margin-top:10px;font-size:11.5px;color:#94a3b8;line-height:1.5">提示：也可直接用工具栏的缩放与搜索</div>', C.appendChild(b);
    function H(i) {
      E = i, C.style.width = i ? "200px" : "0", C.style.borderRightWidth = i ? "1px" : "0", m.style.background = i ? "#e2e8f0" : "#fff", setTimeout(() => {
        try {
          k && k.resize && k.resize();
        } catch {
        }
      }, 250);
    }
    const I = b.querySelector('[data-toc="page"]');
    let j = 1;
    const W = (i) => {
      if (!k || typeof k.goToPage != "function") return !1;
      const q = k.goToPage(i);
      return q && (j = i), q;
    };
    b.querySelector('[data-toc="prev"]').onclick = () => {
      W(Math.max(1, j - 1)) && (I.value = j);
    }, b.querySelector('[data-toc="next"]').onclick = () => {
      W(j + 1) && (I.value = j);
    }, b.querySelector('[data-toc="go"]').onclick = () => {
      const i = parseInt(I.value, 10);
      i > 0 && W(i);
    };
    const z = document.createElement("div");
    z.style.cssText = "flex:1 1 auto;min-height:0;overflow:auto;padding:12px;";
    const T = document.createElement("div");
    T.textContent = "加载中…", T.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;min-height:240px;color:#64748b;", z.appendChild(T), a.appendChild(l);
    const V = document.createElement("div");
    V.style.cssText = "flex:1 1 auto;min-height:0;display:flex;", V.appendChild(C), V.appendChild(z), a.appendChild(V), s.appendChild(a), document.body.appendChild(s), R = s, document.addEventListener("keydown", et), requestAnimationFrame(() => {
      a.style.transform = "translateX(0)";
    });
    let O;
    try {
      O = await pt(o, r), x.value = O && typeof O.size == "number" ? O.size : null, u();
    } catch (i) {
      T.textContent = "拉取文件失败：" + (i && i.message ? i.message : i) + "（点击关闭）", T.onclick = P, w("拉取失败", o, i);
      return;
    }
    try {
      z.removeChild(T);
      const i = document.createElement("div");
      i.style.cssText = "height:100%;min-height:0;", z.appendChild(i);
      const q = at[t] || "text";
      if (!F[q]) {
        const G = window.__QP_OFV_RENDERER_BASE__ || location.origin + "/api/frontend_plugin/" + Y + "/files/frontend/renderer/";
        F[q] = import(
          /* @vite-ignore */
          G + q + ".js"
        ).catch((M) => {
          throw delete F[q], M;
        });
      }
      const { renderViewer: St } = await F[q];
      k = St({
        container: i,
        file: O,
        fileName: e,
        height: "100%",
        locale: "zh-CN",
        theme: "light",
        onError: (G, M) => w("OFV 渲染错误", M && M.name, G)
      }), _("已打开 OFV 预览:", e, "(" + t + ")", o), ut(i, g, c), mt(a, O, e);
    } catch (i) {
      T.textContent = "OFV 渲染失败：" + (i && i.message ? i.message : i) + "（点击关闭）", T.onclick = P, w("OFV 渲染失败", i);
    }
  }
  function xt() {
    window.__QP_OFV_CAPTURE__ || (window.__QP_OFV_CAPTURE__ = !0, window.addEventListener(
      "qwenpaw:open-file-preview",
      (e) => {
        try {
          const o = (e && e.detail || {}).target || {}, r = String(o.artifactUrl || ""), s = String(o.path || ""), a = Z(s || r), l = B(a || r || s);
          if (!S.has(l)) return;
          e.stopPropagation();
          try {
            e.stopImmediatePropagation();
          } catch {
          }
          _("接管预览:", a, "(" + l + ") path=", s, "url=", r);
          const f = tt(s || r);
          if (!f) {
            w("无法归一化路径，放行");
            return;
          }
          ot(a, l, f, r);
        } catch (t) {
          w("接管失败:", t);
        }
      },
      !0
    ), _("已安装预览接管监听"));
  }
  const U = "\\p{L}\\p{N}@.\\-_%";
  let D = null, N = null;
  function bt() {
    return D || (D = S.size ? new RegExp(
      "([" + U + "]+\\.(" + [...S].join("|") + "))(?![" + U + "\\w-])",
      "iu"
    ) : /$^/), D;
  }
  function yt() {
    return N || (N = S.size ? new RegExp(
      "(\\/?[" + U + "]+(?:\\/[\\p{L}\\p{N}@.\\-_%~+()（）\\[\\]]+)*\\.(" + [...S].join("|") + "))(?![" + U + "\\w-])",
      "iu"
    ) : /$^/), N;
  }
  function wt(e) {
    let t = String(e || "").trim();
    if (!t) return "";
    try {
      t = decodeURIComponent(t).replace(/\\/g, "/");
    } catch {
    }
    const o = t.indexOf("/");
    o >= 0 && (t = t.slice(o));
    const r = B(t);
    return !r || !S.has(r) ? "" : t;
  }
  function kt(e, t) {
    if (!e) return !1;
    const o = e.getAttribute("title") || e.getAttribute("aria-label") || e.getAttribute("data-path") || "", r = wt(o), s = (e.textContent || "").replace(/\s+/g, " ").trim(), a = (o + " " + s).trim();
    let l = a;
    try {
      const n = decodeURIComponent(a);
      n.indexOf("�") === -1 && (l = n);
    } catch {
    }
    const f = bt().exec(r || l);
    if (!f) return !1;
    const d = Z(f[1]), p = B(d);
    if (!S.has(p)) return !1;
    let u = r || "";
    if (!u) {
      const n = yt().exec(l);
      n ? (u = n[1], u.startsWith("/") || (u = "/" + u)) : u = d;
    }
    try {
      const n = e.querySelector('a[href*="/files/preview/"], img[src*="/files/preview/"]'), c = n && (n.getAttribute("href") || n.getAttribute("src")) || "", v = ct(c);
      v && (u = v);
    } catch {
    }
    const x = tt(u);
    if (!x) return !1;
    if (t) {
      t.preventDefault(), t.stopPropagation();
      try {
        t.stopImmediatePropagation();
      } catch {
      }
    }
    return _("接管预览(DOM):", d, "(" + p + ") path=", x), ot(d, p, x, ""), !0;
  }
  function Et() {
    window.__QP_OFV_DOM__ || (window.__QP_OFV_DOM__ = !0, document.addEventListener(
      "click",
      (e) => {
        try {
          const t = e.target;
          if (!t || !t.closest || t.closest("[data-qp-ofv-overlay]")) return;
          const o = t.closest('[class*="bubbleFile"]') || t.closest('[class*="ResponseArtifactList-module__file"]') || t.closest('[class*="ResponseArtifactList-module__details__"]');
          if (!o) return;
          kt(o, e);
        } catch (t) {
          w("DOM 委托失败:", t);
        }
      },
      !0
    ), _("已安装 DOM 点击委托"));
  }
  const _t = "/api/frontend_plugin/" + Y + "/files/frontend/style.css";
  function Ct() {
    if (document.querySelector("link[data-qp-ofv-style]")) return;
    const e = document.createElement("link");
    e.rel = "stylesheet", e.href = _t, e.setAttribute("data-qp-ofv-style", "1"), document.head.appendChild(e);
  }
  async function qt() {
    const e = window.QwenPaw;
    if (!(!e || !e.host || typeof e.host.fetch != "function"))
      try {
        const t = await e.host.fetch("/envs");
        if (!t.ok) {
          w("读取环境变量失败:", t.status);
          return;
        }
        const o = await t.json(), r = Array.isArray(o) ? o.find((s) => s && String(s.key).toUpperCase() === Q) : null;
        r ? (A = new Set(rt(r.value)), _(Q + " 已配置 → 交回原生:", [...A].join(",") || "(空，OFV 全接管)")) : _(Q + " 未配置 → 用默认放行清单"), st();
      } catch (t) {
        w("读取环境变量异常（用默认清单）:", t);
      }
  }
  function X() {
    Ct(), xt(), Et(), qt();
  }
  if (window.QwenPaw && window.QwenPaw.host)
    X();
  else {
    let e = 0;
    const t = setInterval(() => {
      if (window.QwenPaw && window.QwenPaw.host) {
        clearInterval(t), X();
        return;
      }
      ++e > 40 && (clearInterval(t), X());
    }, 500);
  }
})();

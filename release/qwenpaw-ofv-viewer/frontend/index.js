(() => {
  const W = "0.7.3", G = "[ofv-viewer]", $ = "qwenpaw-ofv-viewer", V = "OFV_NATIVE_EXTS", ot = [
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
  ], K = [
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
  let j = new Set(ot), _ = new Set(K.filter((e) => !j.has(e)));
  function nt(e) {
    return String(e ?? "").split(/[,\s;]+/).map((t) => t.trim().replace(/^\.+/, "").toLowerCase()).filter(Boolean);
  }
  function rt() {
    _ = new Set(K.filter((e) => !j.has(e))), L = null, D = null;
  }
  const st = (() => {
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
      "makefile"
    ]), e;
  })(), k = (...e) => {
    try {
      console.log(G, W, ...e);
    } catch {
    }
  }, y = (...e) => {
    try {
      console.error(G, W, ...e);
    } catch {
    }
  };
  function M(e) {
    const t = /\.([^.]+)$/.exec(String(e || ""));
    return t ? t[1].toLowerCase() : "";
  }
  function it(e) {
    const t = Number(e);
    return !isFinite(t) || t < 0 ? "" : t < 1024 ? t + " B" : t < 1024 * 1024 ? (t / 1024).toFixed(t < 10240 ? 1 : 0) + " KB" : (t / 1024 / 1024).toFixed(1) + " MB";
  }
  function Y(e) {
    const t = String(e || ""), o = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
    return o >= 0 ? t.slice(o + 1) : t;
  }
  function J(e) {
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
    const t = String(e || ""), o = "/files/preview/", r = t.indexOf(o);
    if (r < 0) return "";
    const s = t.slice(r + o.length).split(/[?#]/, 1)[0];
    if (!s) return "";
    try {
      const i = decodeURIComponent(s).replace(/\\/g, "/");
      return /^[a-z]:\//i.test(i) ? i : "/" + i.replace(/^\/+/, "");
    } catch {
      return "";
    }
  }
  function ct(e) {
    const t = /\/workspaces\/([^/]+)\//.exec(String(e || ""));
    return t ? t[1] : "";
  }
  function lt(e) {
    const t = String(e || "");
    let o = /^(\/.*)\/coding_projects\/([^/]+)\//.exec(t);
    return o ? o[1] + "/coding_projects/" + o[2] : (o = /^\/(.*)\/workspaces\/([^/]+)\//.exec(t), o ? "/" + o[1] + "/workspaces/" + o[2] : "");
  }
  async function dt() {
    const e = window.QwenPaw;
    try {
      const t = await e.host.fetch("/agents");
      if (t.ok)
        return ((await t.json()).agents || []).map((r) => r.id).filter(Boolean);
    } catch {
    }
    return [];
  }
  async function ft(e, t) {
    const o = window.QwenPaw;
    if (!o || !o.host || typeof o.host.fetch != "function")
      throw new Error("宿主 fetch 不可用");
    const r = [];
    t && /^\/files\/preview\//.test(String(t)) && r.push({ direct: String(t), agent: "" });
    const s = String(e || ""), l = s.replace(/^\/+/, "").split("/").filter(Boolean), f = (n, c, u) => {
      c && (r.some((x) => x.root === n && x.path === c && x.agent === u) || r.push({ root: n, path: c, agent: u }));
    }, d = [ct(s)].filter(Boolean);
    for (const n of d) {
      const c = lt(s), u = c ? s.slice(c.length + 1) : "";
      c && u && f("project:" + c, u, n);
      const x = "/workspaces/" + n + "/", m = s.indexOf(x);
      m >= 0 && f("workspace", s.slice(m + x.length), n);
      const b = Math.min(l.length, 3);
      for (let g = 1; g <= b; g++)
        f("workspace", l.slice(-g).join("/"), n), f("project", l.slice(-g).join("/"), n);
    }
    let p = "";
    const h = /* @__PURE__ */ new Set();
    for (const n of r) {
      const c = n.direct ? "d" : n.root + ":" + n.path + "@" + n.agent;
      if (!h.has(c)) {
        h.add(c);
        try {
          const u = n.direct ? n.direct : "/workspace/file-download?path=" + encodeURIComponent(n.path) + "&root=" + encodeURIComponent(n.root), x = n.agent ? { headers: { "X-Agent-Id": n.agent } } : void 0, m = await o.host.fetch(u, x);
          if (m.ok) return await m.blob();
          p = (n.direct ? "direct" : n.root + ":" + n.path + "@" + (n.agent || "cur")) + " -> HTTP " + m.status;
        } catch (u) {
          p = (n.direct ? "direct" : n.root + ":" + n.path + "@" + (n.agent || "cur")) + " -> " + (u && u.message ? u.message : u);
        }
      }
    }
    if ((l[l.length - 1] || "") && !d.length) {
      const n = await dt(), c = [];
      for (let u = 0; u < l.length; u++)
        c.push(l.slice(u).join("/"));
      for (const u of n)
        for (const x of ["project", "workspace"])
          for (const m of c)
            try {
              const b = "/workspace/file-download?path=" + encodeURIComponent(m) + "&root=" + x, g = await o.host.fetch(b, { headers: { "X-Agent-Id": u } });
              if (g.ok) return await g.blob();
              p = x + ":" + m + "@" + u + " -> HTTP " + g.status;
            } catch (b) {
              p = x + ":" + m + "@" + u + " -> " + (b && b.message ? b.message : b);
            }
    }
    throw new Error("拉取失败（已试 " + h.size + " 个候选）最后: " + p);
  }
  function pt(e, t, o) {
    let r = !1;
    const s = () => {
      if (r) return !0;
      const p = e.querySelectorAll(".ofv-code-action");
      if (!p.length) return !1;
      let h = o.nextSibling;
      return p.forEach((v) => {
        v.setAttribute("data-qp-ofv-hoisted", "1"), v.style.cssText += "margin-left:8px;", t.insertBefore(v, h);
      }), r = !0, !0;
    };
    if (s()) return;
    const i = new MutationObserver(() => {
      s() && i.disconnect();
    });
    i.observe(e, { childList: !0, subtree: !0 });
    let l = 0;
    const f = setInterval(() => {
      (s() || ++l > 40) && (clearInterval(f), i.disconnect());
    }, 250), d = () => {
      i.disconnect(), clearInterval(f);
    };
    A.push(d);
  }
  let P = null, w = null;
  const z = {}, A = [];
  function ut(e, t) {
    if (!e) {
      y("下载失败：没有可用的文件数据");
      return;
    }
    try {
      const o = URL.createObjectURL(e), r = document.createElement("a");
      r.href = o, r.download = t || "download", r.style.display = "none", document.body.appendChild(r), r.click(), setTimeout(() => {
        try {
          r.remove(), URL.revokeObjectURL(o);
        } catch {
        }
      }, 4e3), k("已触发下载:", t, e.size, "bytes");
    } catch (o) {
      y("下载失败:", o);
    }
  }
  function ht(e, t, o) {
    const r = (d) => {
      d.__qpOfvDl || (d.__qpOfvDl = !0, d.addEventListener("click", (p) => {
        p.preventDefault(), p.stopPropagation();
        try {
          p.stopImmediatePropagation();
        } catch {
        }
        ut(t, o);
      }, !0));
    }, s = () => {
      e.querySelectorAll("button").forEach((d) => {
        const p = (d.title || "") + (d.textContent || "");
        /下载|download/i.test(p) && r(d);
      });
    };
    s();
    const i = new MutationObserver(s);
    i.observe(e, { childList: !0, subtree: !0 });
    let l = 0;
    const f = setInterval(() => {
      s(), ++l > 30 && (clearInterval(f), i.disconnect());
    }, 300);
    A.push(() => {
      i.disconnect(), clearInterval(f);
    });
  }
  function q() {
    try {
      w && w.destroy && w.destroy();
    } catch {
    }
    if (w = null, P && P.parentNode) {
      const e = P, t = e.firstElementChild;
      t && (t.style.transform = "translateX(100%)"), e.style.opacity = "0", setTimeout(() => {
        e.parentNode && e.parentNode.removeChild(e);
      }, 280);
    }
    P = null;
    try {
      document.removeEventListener("keydown", Z);
    } catch {
    }
    for (; A.length; )
      try {
        A.pop()();
      } catch {
      }
  }
  function Z(e) {
    e.key === "Escape" && q();
  }
  function mt(e) {
    const t = document.querySelector('[class*="sender"] textarea');
    if (!t)
      return y("未找到聊天输入框，引用失败"), !1;
    const o = "@ " + String(e || ""), r = t.selectionStart ?? t.value.length, s = t.selectionEnd ?? r, i = t.value.slice(0, r), l = t.value.slice(s), f = i && !/\s$/.test(i) ? " " : "", d = i + f + o + " " + l, p = Object.getPrototypeOf(t), h = Object.getOwnPropertyDescriptor(p, "value");
    h && h.set ? h.set.call(t, d) : t.value = d, t.dispatchEvent(new Event("input", { bubbles: !0 }));
    const v = i.length + f.length + o.length + 1;
    return requestAnimationFrame(() => {
      t.focus();
      try {
        t.setSelectionRange(v, v);
      } catch {
      }
    }), k("已引用到聊天:", o), !0;
  }
  function gt() {
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
  async function tt(e, t, o, r) {
    q(), gt();
    const s = document.createElement("div");
    s.setAttribute("data-qp-ofv-overlay", "1"), s.style.cssText = "position:fixed;inset:0;z-index:2147483000;background:rgba(15,23,42,.45);transition:opacity .25s ease;", s.onclick = (a) => {
      a.target === s && q();
    };
    const i = document.createElement("div");
    i.style.cssText = "position:fixed;right:0;top:0;bottom:0;z-index:2147483001;width:min(96vw, 1100px);background:#fff;box-shadow:-8px 0 32px rgba(0,0,0,.18);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .3s cubic-bezier(0.16,1,0.3,1);font:14px/1.4 -apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;";
    const l = document.createElement("div");
    l.style.cssText = "flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid #e2e8f0;background:#fff;";
    const f = document.createElement("div");
    f.style.cssText = "min-width:0;overflow:hidden;";
    const d = document.createElement("div");
    d.textContent = e, d.style.cssText = "font-weight:600;color:#0f172a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
    const p = document.createElement("div");
    p.style.cssText = "font-size:11.5px;color:#94a3b8;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", f.appendChild(d), f.appendChild(p);
    const h = () => {
      const a = [];
      t && a.push(t.toUpperCase()), v.value != null && a.push(it(v.value)), p.textContent = a.join(" · ");
    }, v = { value: null }, n = document.createElement("button");
    n.textContent = "✕", n.title = "关闭 (Esc)", n.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;", n.onmouseenter = () => {
      n.style.background = "#e2e8f0";
    }, n.onmouseleave = () => {
      n.style.background = "#f1f5f9";
    }, n.onclick = q;
    const c = document.createElement("button");
    c.textContent = "在聊天中引用", c.title = "以 @ 路径的形式插入到聊天输入框", c.style.cssText = "border:1px solid #e2e8f0;background:#fff;color:#334155;height:28px;padding:0 10px;border-radius:6px;cursor:pointer;font-size:12.5px;margin-right:8px;line-height:1;", c.onmouseenter = () => {
      c.style.background = "#f1f5f9";
    }, c.onmouseleave = () => {
      c.style.background = "#fff";
    }, c.onclick = () => {
      mt(o) && q();
    };
    const x = [
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
      qt(!et);
    };
    const b = document.createElement("button");
    b.textContent = "⛶", b.title = "全屏 / 退出全屏", b.style.cssText = "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;margin-right:8px;", b.onclick = () => {
      document.fullscreenElement ? document.exitFullscreen() : i.requestFullscreen && i.requestFullscreen().catch(() => {
      });
    };
    const g = document.createElement("div");
    g.style.cssText = "display:flex;align-items:center;", g.appendChild(c), x && g.appendChild(m), g.appendChild(b), g.appendChild(n), l.appendChild(f), l.appendChild(g);
    let et = !1;
    const I = document.createElement("div");
    I.style.cssText = "flex:0 0 auto;width:0;overflow:hidden;transition:width .22s ease;border-right:0 solid #e2e8f0;background:#f8fafc;";
    const S = document.createElement("div");
    S.style.cssText = "width:200px;padding:12px;box-sizing:border-box;height:100%;overflow:auto;", S.innerHTML = '<div style="font-size:12px;color:#64748b;margin-bottom:8px">页面导航</div><div style="display:flex;gap:6px;margin-bottom:10px"><button data-toc="prev" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">上一页</button><button data-toc="next" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">下一页</button></div><div style="display:flex;gap:6px;align-items:center"><input data-toc="page" type="number" min="1" style="width:64px;height:28px;border:1px solid #e2e8f0;border-radius:6px;padding:0 6px"><button data-toc="go" style="height:28px;padding:0 10px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">跳转</button></div><div data-toc="tip" style="margin-top:10px;font-size:11.5px;color:#94a3b8;line-height:1.5">提示：也可直接用工具栏的缩放与搜索</div>', I.appendChild(S);
    function qt(a) {
      et = a, I.style.width = a ? "200px" : "0", I.style.borderRightWidth = a ? "1px" : "0", m.style.background = a ? "#e2e8f0" : "#fff", setTimeout(() => {
        try {
          w && w.resize && w.resize();
        } catch {
        }
      }, 250);
    }
    const Q = S.querySelector('[data-toc="page"]');
    let R = 1;
    const X = (a) => {
      if (!w || typeof w.goToPage != "function") return !1;
      const E = w.goToPage(a);
      return E && (R = a), E;
    };
    S.querySelector('[data-toc="prev"]').onclick = () => {
      X(Math.max(1, R - 1)) && (Q.value = R);
    }, S.querySelector('[data-toc="next"]').onclick = () => {
      X(R + 1) && (Q.value = R);
    }, S.querySelector('[data-toc="go"]').onclick = () => {
      const a = parseInt(Q.value, 10);
      a > 0 && X(a);
    };
    const O = document.createElement("div");
    O.style.cssText = "flex:1 1 auto;min-height:0;overflow:auto;padding:12px;";
    const C = document.createElement("div");
    C.textContent = "加载中…", C.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;min-height:240px;color:#64748b;", O.appendChild(C), i.appendChild(l);
    const N = document.createElement("div");
    N.style.cssText = "flex:1 1 auto;min-height:0;display:flex;", N.appendChild(I), N.appendChild(O), i.appendChild(N), s.appendChild(i), document.body.appendChild(s), P = s, document.addEventListener("keydown", Z), requestAnimationFrame(() => {
      i.style.transform = "translateX(0)";
    });
    let T;
    try {
      T = await ft(o, r), v.value = T && typeof T.size == "number" ? T.size : null, h();
    } catch (a) {
      C.textContent = "拉取文件失败：" + (a && a.message ? a.message : a) + "（点击关闭）", C.onclick = q, y("拉取失败", o, a);
      return;
    }
    try {
      O.removeChild(C);
      const a = document.createElement("div");
      a.style.cssText = "height:100%;min-height:0;", O.appendChild(a);
      const E = st[t] || "text";
      if (!z[E]) {
        const H = window.__QP_OFV_RENDERER_BASE__ || location.origin + "/api/frontend_plugin/" + $ + "/files/frontend/renderer/";
        z[E] = import(
          /* @vite-ignore */
          H + E + ".js"
        ).catch((U) => {
          throw delete z[E], U;
        });
      }
      const { renderViewer: St } = await z[E];
      w = St({
        container: a,
        file: T,
        fileName: e,
        height: "100%",
        locale: "zh-CN",
        theme: "light",
        onError: (H, U) => y("OFV 渲染错误", U && U.name, H)
      }), k("已打开 OFV 预览:", e, "(" + t + ")", o), pt(a, g, c), ht(i, T, e);
    } catch (a) {
      C.textContent = "OFV 渲染失败：" + (a && a.message ? a.message : a) + "（点击关闭）", C.onclick = q, y("OFV 渲染失败", a);
    }
  }
  function vt() {
    window.__QP_OFV_CAPTURE__ || (window.__QP_OFV_CAPTURE__ = !0, window.addEventListener(
      "qwenpaw:open-file-preview",
      (e) => {
        try {
          const o = (e && e.detail || {}).target || {}, r = String(o.artifactUrl || ""), s = String(o.path || ""), i = Y(s || r), l = M(i || r || s);
          if (!_.has(l)) return;
          e.stopPropagation();
          try {
            e.stopImmediatePropagation();
          } catch {
          }
          k("接管预览:", i, "(" + l + ") path=", s, "url=", r);
          const f = J(s || r);
          if (!f) {
            y("无法归一化路径，放行");
            return;
          }
          tt(i, l, f, r);
        } catch (t) {
          y("接管失败:", t);
        }
      },
      !0
    ), k("已安装预览接管监听"));
  }
  const F = "\\p{L}\\p{N}@.\\-_%";
  let L = null, D = null;
  function xt() {
    return L || (L = _.size ? new RegExp(
      "([" + F + "]+\\.(" + [..._].join("|") + "))(?![" + F + "\\w-])",
      "iu"
    ) : /$^/), L;
  }
  function bt() {
    return D || (D = _.size ? new RegExp(
      "(\\/?[" + F + "]+(?:\\/[\\p{L}\\p{N}@.\\-_%~+()（）\\[\\]]+)*\\.(" + [..._].join("|") + "))(?![" + F + "\\w-])",
      "iu"
    ) : /$^/), D;
  }
  function yt(e) {
    let t = String(e || "").trim();
    if (!t) return "";
    try {
      t = decodeURIComponent(t).replace(/\\/g, "/");
    } catch {
    }
    const o = t.indexOf("/");
    o >= 0 && (t = t.slice(o));
    const r = M(t);
    return !r || !_.has(r) ? "" : t;
  }
  function wt(e, t) {
    if (!e) return !1;
    const o = e.getAttribute("title") || e.getAttribute("aria-label") || e.getAttribute("data-path") || "", r = yt(o), s = (e.textContent || "").replace(/\s+/g, " ").trim(), i = (o + " " + s).trim();
    let l = i;
    try {
      const n = decodeURIComponent(i);
      n.indexOf("�") === -1 && (l = n);
    } catch {
    }
    const f = xt().exec(r || l);
    if (!f) return !1;
    const d = Y(f[1]), p = M(d);
    if (!_.has(p)) return !1;
    let h = r || "";
    if (!h) {
      const n = bt().exec(l);
      n ? (h = n[1], h.startsWith("/") || (h = "/" + h)) : h = d;
    }
    try {
      const n = e.querySelector('a[href*="/files/preview/"], img[src*="/files/preview/"]'), c = n && (n.getAttribute("href") || n.getAttribute("src")) || "", u = at(c);
      u && (h = u);
    } catch {
    }
    const v = J(h);
    if (!v) return !1;
    if (t) {
      t.preventDefault(), t.stopPropagation();
      try {
        t.stopImmediatePropagation();
      } catch {
      }
    }
    return k("接管预览(DOM):", d, "(" + p + ") path=", v), tt(d, p, v, ""), !0;
  }
  function kt() {
    window.__QP_OFV_DOM__ || (window.__QP_OFV_DOM__ = !0, document.addEventListener(
      "click",
      (e) => {
        try {
          const t = e.target;
          if (!t || !t.closest || t.closest("[data-qp-ofv-overlay]")) return;
          const o = t.closest('[class*="bubbleFile"]') || t.closest('[class*="ResponseArtifactList-module__file"]') || t.closest('[class*="ResponseArtifactList-module__details__"]');
          if (!o) return;
          wt(o, e);
        } catch (t) {
          y("DOM 委托失败:", t);
        }
      },
      !0
    ), k("已安装 DOM 点击委托"));
  }
  const Et = "/api/frontend_plugin/" + $ + "/files/frontend/style.css";
  function _t() {
    if (document.querySelector("link[data-qp-ofv-style]")) return;
    const e = document.createElement("link");
    e.rel = "stylesheet", e.href = Et, e.setAttribute("data-qp-ofv-style", "1"), document.head.appendChild(e);
  }
  async function Ct() {
    const e = window.QwenPaw;
    if (!(!e || !e.host || typeof e.host.fetch != "function"))
      try {
        const t = await e.host.fetch("/envs");
        if (!t.ok) {
          y("读取环境变量失败:", t.status);
          return;
        }
        const o = await t.json(), r = Array.isArray(o) ? o.find((s) => s && String(s.key).toUpperCase() === V) : null;
        r ? (j = new Set(nt(r.value)), k(V + " 已配置 → 交回原生:", [...j].join(",") || "(空，OFV 全接管)")) : k(V + " 未配置 → 用默认放行清单"), rt();
      } catch (t) {
        y("读取环境变量异常（用默认清单）:", t);
      }
  }
  function B() {
    _t(), vt(), kt(), Ct();
  }
  if (window.QwenPaw && window.QwenPaw.host)
    B();
  else {
    let e = 0;
    const t = setInterval(() => {
      if (window.QwenPaw && window.QwenPaw.host) {
        clearInterval(t), B();
        return;
      }
      ++e > 40 && (clearInterval(t), B());
    }, 500);
  }
})();

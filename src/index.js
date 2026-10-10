/**
 * qwenpaw-ofv-viewer — QwenPaw 前端插件
 * 用 Open File Viewer (OFV) 接管对话文件卡片预览，覆盖原生不支持的格式。
 *
 * 机制（参考 qwenpaw-onlyoffice 验证过的路径）：
 *  1. window 捕获阶段监听 `qwenpaw:open-file-preview`，
 *     detail.target = { path, artifactUrl, source, ... }
 *  2. 只接管 OFV 能渲染、且原生预览不支持的扩展名（office 老格式/压缩包/邮件等）
 *  3. window.QwenPaw.host.fetch 拉文件（自动带鉴权头）→ Blob → OFV createViewer
 *  4. 全屏遮罩展示，Esc / 关闭按钮销毁
 *  5. 未接管格式放行原生预览
 */
(() => {
  "use strict";

  const VERSION = "0.7.4";
  const TAG = "[ofv-viewer]";
  const PLUGIN_ID = "qwenpaw-ofv-viewer";

  // ── 接管格式（可配置）────────────────────────────────────────
  // 语义：OFV 可接管的全集 − 交回原生预览的格式 = 实际接管集合。
  // 交回原生的格式由 QwenPaw 环境变量 `OFV_NATIVE_EXTS` 配置（v0.7.0）：
  //   设置界面 → 环境变量 → 新增 OFV_NATIVE_EXTS，值形如
  //   "png,jpg,jpeg,gif,webp,svg,ico,bmp,md,mdx,html,htm,csv"
  //   （逗号/空格/分号分隔，前导点可选，大小写不敏感）
  //   · 未配置该变量 → 用下面的默认放行清单
  //   · 配置为空串   → 不放行任何格式，OFV 全接管
  // 改完刷新控制台生效（无需重装插件）。
  const NATIVE_EXTS_ENV_KEY = "OFV_NATIVE_EXTS";
  const DEFAULT_NATIVE_EXTS = [
    // 图片：宿主原生预览已支持
    "png", "jpg", "jpeg", "gif", "webp", "svg", "ico", "bmp",
    // 标记/网页/表格：宿主原生渲染更好
    "md", "mdx", "html", "htm", "csv",
  ];
  // OFV 可接管全集
  // v0.4.0：pdf 从原生 <embed> 改为 OFV 接管（可缩放/目录/搜索，worker 自托管不走 CDN）
  const OFV_ALL_EXTS = [
    // pdf（v0.4.0 接管）
    "pdf",
    // office（含老格式，原生都不支持）
    "doc", "docx", "xls", "xlsx", "ppt", "pptx", "rtf", "odt", "ods", "odp",
    // 压缩包
    "zip", "rar", "7z", "tar", "gz", "tgz", "bz2",
    // 邮件
    "eml", "msg", "mbox",
    // 文本/代码（原生只支持代码块内预览，这里给带高亮的完整预览）
    "txt", "log", "json", "yaml", "yml", "toml", "ini", "conf",
    "py", "js", "ts", "tsx", "jsx", "java", "go", "rs", "c", "cpp", "h", "sh", "sql", "xml",
  ];
  let NATIVE_EXTS = new Set(DEFAULT_NATIVE_EXTS);
  let OFV_EXTS = new Set(OFV_ALL_EXTS.filter((e) => !NATIVE_EXTS.has(e)));

  /** 解析 env 值为扩展名数组（容忍前导点、大小写、逗号/空格/分号分隔） */
  function parseExtList(raw) {
    return String(raw == null ? "" : raw)
      .split(/[,\s;]+/)
      .map((s) => s.trim().replace(/^\.+/, "").toLowerCase())
      .filter(Boolean);
  }

  /** 依据 NATIVE_EXTS 重算接管集合与派生正则缓存 */
  function rebuildExtSets() {
    OFV_EXTS = new Set(OFV_ALL_EXTS.filter((e) => !NATIVE_EXTS.has(e)));
    _nameRe = null;
    _pathRe = null;
  }

  // 扩展名 → 渲染器 chunk 路由（v0.4.0 细拆：点 docx 不再被迫下载 xlsx/pptx 解析器）
  const EXT_RENDERER = (() => {
    const m = {};
    const put = (renderer, exts) => exts.forEach((e) => (m[e] = renderer));
    put("office", ["docx", "docm", "dotx", "dotm", "rtf", "odt", "fodt"]);
    put("sheet", ["xlsx", "xlsm", "xlsb", "xls", "ods", "fods"]);
    put("ppt", ["pptx", "pptm", "ppsx", "ppsm", "potx", "potm", "odp", "fodp"]);
    put("legacy", ["doc", "dot", "ppt", "pps"]); // 老二进制格式走 emf/转换路径
    put("pdf", ["pdf"]);
    put("archive", ["zip", "rar", "7z", "tar", "gz", "tgz", "bz2"]);
    put("email", ["eml", "msg", "mbox"]);
    put("plain", ["txt", "log", "conf", "ini", "env", "properties", "md"]);
    put("text", ["json", "yaml", "yml", "toml", "xml", "py", "js", "ts", "tsx", "jsx",
      "java", "go", "rs", "c", "cpp", "h", "hpp", "sh", "bash", "sql", "rb", "php",
      "swift", "kt", "cs", "proto", "hcl", "tf", "dockerfile", "makefile"]);
    return m;
  })();

  const log = (...a) => { try { console.log(TAG, VERSION, ...a); } catch (e) {} };
  const err = (...a) => { try { console.error(TAG, VERSION, ...a); } catch (e) {} };

  function getExt(name) {
    const m = /\.([^.]+)$/.exec(String(name || ""));
    return m ? m[1].toLowerCase() : "";
  }
  /** 人类可读文件大小（与 OFV 面板一致的风格：B / KB / MB） */
  function formatSize(bytes) {
    const n = Number(bytes);
    if (!isFinite(n) || n < 0) return "";
    if (n < 1024) return n + " B";
    if (n < 1024 * 1024) return (n / 1024).toFixed(n < 10240 ? 1 : 0) + " KB";
    return (n / 1024 / 1024).toFixed(1) + " MB";
  }

  function getBaseName(p) {
    const s = String(p || "");
    const i = Math.max(s.lastIndexOf("/"), s.lastIndexOf("\\"));
    return i >= 0 ? s.slice(i + 1) : s;
  }

  /** 归一化卡片路径：剥 file:// 前缀、解 URL 编码（同 OnlyOffice 插件验证过的逻辑） */
  function normalizePath(raw) {
    let src = String(raw || "").trim();
    if (!src) return "";
    if (src.toLowerCase().startsWith("file://")) {
      src = src.slice("file://".length);
      if (src.toLowerCase().startsWith("localhost/")) src = src.slice("localhost/".length);
    }
    if (src.startsWith("/files/preview/")) src = src.slice("/files/preview".length);
    try { src = decodeURIComponent(src).replace(/\\/g, "/"); } catch (e) {}
    return src;
  }

  /** 从 /files/preview/... URL 提取文件路径（同宿主 internalFileLinks 的 z() 逻辑） */
  function pathFromPreviewUrl(url) {
    const s = String(url || "");
    const marker = "/files/preview/";
    const i = s.indexOf(marker);
    if (i < 0) return "";
    const tail = s.slice(i + marker.length).split(/[?#]/, 1)[0];
    if (!tail) return "";
    try {
      const dec = decodeURIComponent(tail).replace(/\\/g, "/");
      return /^[a-z]:\//i.test(dec) ? dec : "/" + dec.replace(/^\/+/, "");
    } catch (e) {
      return "";
    }
  }

  /** 从绝对路径提取所属 agent id：/…/workspaces/<agent_id>/…（QwenPaw 标准目录布局） */
  function agentIdFromPath(absPath) {
    const m = /\/workspaces\/([^/]+)\//.exec(String(absPath || ""));
    return m ? m[1] : "";
  }

  /** 从绝对路径推导项目根（root=project:<root> 用）：
   *  布局 A：…/workspaces/<agent>/coding_projects/<name>/… → 项目根 = coding_projects/<name>
   *  布局 B：…/workspaces/<agent>/<dir>/…（无 coding_projects 段）→ 项目根 = workspace 根
   *  （与 agent.json project_dirs 的标准配置一致；找不到 workspaces 段返回 ""） */
  function projectRootFromPath(absPath) {
    const s = String(absPath || "");
    let m = /^(\/.*)\/coding_projects\/([^/]+)\//.exec(s);
    if (m) return m[1] + "/coding_projects/" + m[2];
    m = /^\/(.*)\/workspaces\/([^/]+)\//.exec(s);
    if (m) return "/" + m[1] + "/workspaces/" + m[2];
    return "";
  }

  /** 列出全部 agent id（用于相对路径无归属信息时的遍历兜底）
   *  ⚠️ host.fetch 内部会经 getApiUrl(ce) 自动补 /api 前缀 —— 传 /api/agents 会变成
   *  /api/api/agents（真机 404 实锤，见 v0.2.3），必须传 /agents */
  async function listAgentIds() {
    const QP = window.QwenPaw;
    try {
      const resp = await QP.host.fetch("/agents");
      if (resp.ok) {
        const j = await resp.json();
        return (j.agents || []).map((a) => a.id).filter(Boolean);
      }
    } catch (e) {}
    return [];
  }

  /** 用宿主带鉴权的 fetch 拉文件为 Blob。
   *  ⚠️ URL 前缀：host.fetch 内部经 getApiUrl 自动补 "/api"（真机抓包 /api/api/ 404 实锤，
   *  v0.2.3 修复）—— 传参必须写 "/workspace/..."，绝不能带 /api 前缀。
   *  file-download 端点只收相对路径（绝对路径 400），root 解析三层耦合：
   *    X-Agent-Id 头（agent 身份）→ 该 agent 绑定的项目目录 → 当前 chat 的会话级绑定覆盖。
   *  Console 当前选中的 agent/会话都可能与文件所属不符 → 必须把三层全部显式化：
   *    绝对路径 → 提取 (agent_id, 项目根, 相对子路径)，用 root=project:<项目根绝对路径>
   *    （服务端 _resolve_extra_project_root 只按 agent 绑定列表判成员资格，绕开 chat 绑定）
   *  级联顺序：
   *    1. artifactUrl 直连（带 token，最可靠）
   *    2. root=project:<推导的项目根> × 相对子路径（首选，无歧义直达）
   *    3. root=workspace × 相对 workspace 的子路径
   *    4. 旧式 root=workspace/project × 路径后缀（相对路径卡片兜底）
   *    5. 相对路径（无归属信息）→ 遍历全部 agent × basename */
  async function fetchBlob(absPath, artifactUrl) {
    const QP = window.QwenPaw;
    if (!QP || !QP.host || typeof QP.host.fetch !== "function") {
      throw new Error("宿主 fetch 不可用");
    }
    const candidates = [];
    // 候选0：artifactUrl 直连——照抄宿主原生预览逻辑（v0.7.4）：
    // 宿主对运行中卡片就是 fetch(artifactUrl, {headers: 鉴权})，不挑前缀、不猜路径。
    // 旧版要求 /^\/files\/preview\// 才直连，导致带 token 的可靠路径被弃用。
    if (artifactUrl) {
      candidates.push({ direct: String(artifactUrl), agent: "" });
    }
    const raw = String(absPath || "");
    const p = raw.replace(/^\/+/, "");
    const segs = p.split("/").filter(Boolean);
    const push = (root, path, agent) => {
      if (!path) return;
      if (!candidates.some((c) => c.root === root && c.path === path && c.agent === agent)) {
        candidates.push({ root, path, agent });
      }
    };
    const pathAgents = [agentIdFromPath(raw)].filter(Boolean);
    for (const ag of pathAgents) {
      // 绝对路径 → 显式 root=project:<项目根> + 相对子路径（绕开 chat 会话绑定）
      const projRoot = projectRootFromPath(raw);
      const rel = projRoot ? raw.slice(projRoot.length + 1) : "";
      if (projRoot && rel) {
        push("project:" + projRoot, rel, ag);
      }
      // root=workspace：相对 workspace 根的子路径
      const wsMark = "/workspaces/" + ag + "/";
      const iws = raw.indexOf(wsMark);
      if (iws >= 0) {
        push("workspace", raw.slice(iws + wsMark.length), ag);
      }
      // 旧式兜底：basename → 2段 → 3段
      const maxSeg = Math.min(segs.length, 3);
      for (let n = 1; n <= maxSeg; n++) {
        push("workspace", segs.slice(-n).join("/"), ag);
        push("project", segs.slice(-n).join("/"), ag);
      }
    }
    let lastErr = "";
    const tried = new Set();
    for (const c of candidates) {
      const key = (c.direct ? "d" : c.root + ":" + c.path + "@" + c.agent);
      if (tried.has(key)) continue;
      tried.add(key);
      try {
        const url = c.direct
          ? c.direct
          : "/workspace/file-download?path=" + encodeURIComponent(c.path) + "&root=" + encodeURIComponent(c.root);
        const init = c.agent ? { headers: { "X-Agent-Id": c.agent } } : undefined;
        const resp = await QP.host.fetch(url, init);
        if (resp.ok) return await resp.blob();
        lastErr = (c.direct ? "direct" : c.root + ":" + c.path + "@" + (c.agent || "cur")) + " -> HTTP " + resp.status;
      } catch (e) {
        lastErr = (c.direct ? "direct" : c.root + ":" + c.path + "@" + (c.agent || "cur")) + " -> " + (e && e.message ? e.message : e);
      }
    }
    // 相对路径兜底（照抄宿主 Files 面板语义，v0.7.4 补 X-Chat-Id）：
    // 宿主对 workspace 类 target 的请求头是 {鉴权, X-Chat-Id}（无 chat 时用
    // X-Session-Project-Dir）。file-download 的 path 相对「该 chat 绑定的项目根」。
    // 运行中卡片给的相对路径（my-pm/backend/.../Foo.java）直接原样试——它通常
    // 就是相对当前 chat 绑定根的路径；再逐级去头兜底，basename 最后。
    const base = segs[segs.length - 1] || "";
    if (base && !pathAgents.length) {
      const chatId = (() => {
        try { return window.QwenPaw?.context?.chatId || window.QwenPaw?.chatId || ""; }
        catch (e) { return ""; }
      })();
      const extraHeaders = chatId ? { "X-Chat-Id": chatId } : {};
      const agents = [""]; // 空串 = 不带 X-Agent-Id（宿主默认当前 agent），优先
      try { agents.push(...(await listAgentIds())); } catch (e) {}
      const seen = new Set();
      const relVariants = [];
      for (let i = 0; i < segs.length; i++) relVariants.push(segs.slice(i).join("/"));
      for (const ag of agents) {
        for (const root of ["project", "workspace"]) {
          for (const rel of relVariants) {
            const key = root + ":" + rel + "@" + ag;
            if (seen.has(key)) continue;
            seen.add(key);
            try {
              const url = "/workspace/file-download?path=" + encodeURIComponent(rel) + "&root=" + root;
              const init = ag ? { headers: { "X-Agent-Id": ag, ...extraHeaders } }
                              : Object.keys(extraHeaders).length ? { headers: extraHeaders } : undefined;
              const resp = await QP.host.fetch(url, init);
              if (resp.ok) return await resp.blob();
              lastErr = root + ":" + rel + "@" + (ag || "cur") + " -> HTTP " + resp.status;
            } catch (e) {
              lastErr = root + ":" + rel + "@" + (ag || "cur") + " -> " + (e && e.message ? e.message : e);
            }
          }
        }
      }
    }
    throw new Error("拉取失败（已试 " + tried.size + " 个候选）最后: " + lastErr);
  }

  /**
   * 把 OFV 文本面板的按钮（换行/复制/下载，类名 .ofv-code-action）
   * 搬到抽屉标题栏，插到「在聊天中引用」按钮右侧。
   * OFV 面板异步渲染 → 用 MutationObserver 等它出现；搬运后加标记防重复。
   */
  function hoistCodeActions(scope, headRight, anchorBtn) {
    let moved = false;
    const collect = () => {
      if (moved) return true;
      const actions = scope.querySelectorAll(".ofv-code-action");
      if (!actions.length) return false;
      // 按原顺序插入到 anchor（在聊天中引用）之后
      let ref = anchorBtn.nextSibling;
      actions.forEach((el) => {
        el.setAttribute("data-qp-ofv-hoisted", "1");
        el.style.cssText += "margin-left:8px;";
        headRight.insertBefore(el, ref);
      });
      moved = true;
      return true;
    };
    if (collect()) return;
    const obs = new MutationObserver(() => {
      if (collect()) obs.disconnect();
    });
    obs.observe(scope, { childList: true, subtree: true });
    // 兜底：OFV 渲染较慢时再轮询几次
    let tries = 0;
    const timer = setInterval(() => {
      if (collect() || ++tries > 40) { clearInterval(timer); obs.disconnect(); }
    }, 250);
    // 预览关闭时清理观察者
    const cleanup = () => { obs.disconnect(); clearInterval(timer); };
    backdropCleanups.push(cleanup);
  }

  // ================================================================
  // 全屏遮罩 + OFV 渲染
  // ================================================================
  let overlayEl = null;
  let viewerInst = null;
  // 渲染器动态 import 缓存（按格式族；一次加载会话内复用，失败允许重试）
  const RENDERER_PROMISES = {};
  // 预览生命周期清理回调（观察者/定时器等，closeOverlay 时统一执行）
  const backdropCleanups = [];

  /**
   * 用我们持有的 blob 直接触发下载（不依赖 OFV 内部 download —— 真机上它
   * 生成的是空文件，因为 OFV 持有的 file 引用与宿主 fetch 的 blob 不同步）。
   */
  function downloadCurrent(blob, name) {
    if (!blob) { err("下载失败：没有可用的文件数据"); return; }
    try {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = name || "download";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        try { a.remove(); URL.revokeObjectURL(url); } catch (e) {}
      }, 4000);
      log("已触发下载:", name, blob.size, "bytes");
    } catch (e) {
      err("下载失败:", e);
    }
  }

  /**
   * 给预览里所有"下载"按钮挂上我们自己的下载逻辑。
   * 用捕获阶段监听 + stopImmediatePropagation 抢在 OFV 的处理器之前执行。
   */
  function bindDownload(scope, blob, name) {
    const attach = (btn) => {
      if (btn.__qpOfvDl) return;
      btn.__qpOfvDl = true;
      btn.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        try { ev.stopImmediatePropagation(); } catch (e) {}
        downloadCurrent(blob, name);
      }, true);
    };
    const scan = () => {
      scope.querySelectorAll("button").forEach((b) => {
        const label = (b.title || "") + (b.textContent || "");
        if (/下载|download/i.test(label)) attach(b);
      });
    };
    scan();
    const obs = new MutationObserver(scan);
    obs.observe(scope, { childList: true, subtree: true });
    let tries = 0;
    const timer = setInterval(() => { scan(); if (++tries > 30) { clearInterval(timer); obs.disconnect(); } }, 300);
    backdropCleanups.push(() => { obs.disconnect(); clearInterval(timer); });
  }

  function closeOverlay() {
    try { if (viewerInst && viewerInst.destroy) viewerInst.destroy(); } catch (e) {}
    viewerInst = null;
    if (overlayEl && overlayEl.parentNode) {
      // 出场动画：抽屉滑出 + 背景淡出后再移除 DOM
      const el = overlayEl;
      const drawer = el.firstElementChild;
      if (drawer) drawer.style.transform = "translateX(100%)";
      el.style.opacity = "0";
      setTimeout(() => { if (el.parentNode) el.parentNode.removeChild(el); }, 280);
    }
    overlayEl = null;
    try { document.removeEventListener("keydown", onKey); } catch (e) {}
    // 清理本轮预览的观察者/定时器
    while (backdropCleanups.length) {
      try { backdropCleanups.pop()(); } catch (e) {}
    }
  }
  function onKey(ev) { if (ev.key === "Escape") closeOverlay(); }

  // ================================================================
  // 「在聊天中引用」—— 复刻宿主原预览行为（逆向 index-x-DPAHiB.js 的 au()）：
  // 往 sender textarea 光标处插入 "@ <path>"，聚焦并定位光标。
  // ================================================================
  function mentionInChat(path) {
    const textarea = document.querySelector('[class*="sender"] textarea');
    if (!textarea) {
      err("未找到聊天输入框，引用失败");
      return false;
    }
    const text = "@ " + String(path || "");
    const start = textarea.selectionStart ?? textarea.value.length;
    const end = textarea.selectionEnd ?? start;
    const before = textarea.value.slice(0, start);
    const after = textarea.value.slice(end);
    const sep = before && !/\s$/.test(before) ? " " : "";
    const next = before + sep + text + " " + after;
    // React 受控组件：走原生 setter 触发 onChange
    const proto = Object.getPrototypeOf(textarea);
    const desc = Object.getOwnPropertyDescriptor(proto, "value");
    if (desc && desc.set) desc.set.call(textarea, next);
    else textarea.value = next;
    textarea.dispatchEvent(new Event("input", { bubbles: true }));
    const caret = before.length + sep.length + text.length + 1;
    requestAnimationFrame(() => {
      textarea.focus();
      try { textarea.setSelectionRange(caret, caret); } catch (e) {}
    });
    log("已引用到聊天:", text);
    return true;
  }

  // 一次性注入插件样式：工具栏按钮加图标、滚动条可见可拖、按钮中文化微调
  function ensureUiStyle() {
    if (document.getElementById("qp-ofv-style")) return;
    const st = document.createElement("style");
    st.id = "qp-ofv-style";
    st.textContent = [
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
      "[data-qp-ofv-overlay] .ofv-code-header { display: none !important; }",
    ].join("\n");
    document.head.appendChild(st);
  }

  async function openPreview(name, ext, path, artifactUrl) {
    closeOverlay();

    ensureUiStyle();

    // 右侧抽屉式遮罩（与宿主原生文件预览同构，减少割裂感）
    const backdrop = document.createElement("div");
    backdrop.setAttribute("data-qp-ofv-overlay", "1");
    backdrop.style.cssText =
      "position:fixed;inset:0;z-index:2147483000;background:rgba(15,23,42,.45);" +
      "transition:opacity .25s ease;";
    backdrop.onclick = (ev) => { if (ev.target === backdrop) closeOverlay(); };

    const drawer = document.createElement("div");
    drawer.style.cssText =
      "position:fixed;right:0;top:0;bottom:0;z-index:2147483001;" +
      "width:min(96vw, 1100px);background:#fff;" +
      "box-shadow:-8px 0 32px rgba(0,0,0,.18);" +
      "display:flex;flex-direction:column;" +
      "transform:translateX(100%);transition:transform .3s cubic-bezier(0.16,1,0.3,1);" +
      "font:14px/1.4 -apple-system,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;";

    const header = document.createElement("div");
    header.style.cssText =
      "flex:0 0 auto;display:flex;align-items:center;justify-content:space-between;" +
      "padding:12px 16px;border-bottom:1px solid #e2e8f0;background:#fff;";
    // 标题：第一行文件名，第二行元信息（格式 · 大小）——由 updateTitleMeta() 填充
    const title = document.createElement("div");
    title.style.cssText = "min-width:0;overflow:hidden;";
    const titleName = document.createElement("div");
    titleName.textContent = name;
    titleName.style.cssText =
      "font-weight:600;color:#0f172a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
    const titleMeta = document.createElement("div");
    titleMeta.style.cssText =
      "font-size:11.5px;color:#94a3b8;margin-top:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
    title.appendChild(titleName);
    title.appendChild(titleMeta);
    // blob 就绪后展示大小（与 OFV 面板头信息一致：格式 · 大小）
    const updateTitleMeta = () => {
      const bits = [];
      if (ext) bits.push(ext.toUpperCase());
      if (blobRef.value != null) bits.push(formatSize(blobRef.value));
      titleMeta.textContent = bits.join(" · ");
    };
    const blobRef = { value: null };
    const btn = document.createElement("button");
    btn.textContent = "✕";
    btn.title = "关闭 (Esc)";
    btn.style.cssText =
      "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;" +
      "border-radius:6px;cursor:pointer;font-size:14px;line-height:1;" +
      "display:flex;align-items:center;justify-content:center;";
    btn.onmouseenter = () => { btn.style.background = "#e2e8f0"; };
    btn.onmouseleave = () => { btn.style.background = "#f1f5f9"; };
    btn.onclick = closeOverlay;
    // 「在聊天中引用」按钮（复刻宿主原预览 mentionInChat）
    const citeBtn = document.createElement("button");
    citeBtn.textContent = "在聊天中引用";
    citeBtn.title = "以 @ 路径的形式插入到聊天输入框";
    citeBtn.style.cssText =
      "border:1px solid #e2e8f0;background:#fff;color:#334155;height:28px;" +
      "padding:0 10px;border-radius:6px;cursor:pointer;font-size:12.5px;" +
      "margin-right:8px;line-height:1;";
    citeBtn.onmouseenter = () => { citeBtn.style.background = "#f1f5f9"; };
    citeBtn.onmouseleave = () => { citeBtn.style.background = "#fff"; };
    citeBtn.onclick = () => {
      if (mentionInChat(path)) closeOverlay();
    };
    // ---- 目录/页码导航按钮（分页格式 docx/pdf/pptx 才有意义）----
    const PAGED = ["pdf", "docx", "docm", "dotx", "dotm", "rtf", "odt", "fodt",
      "pptx", "pptm", "ppsx", "ppsm", "potx", "potm", "odp", "fodp", "doc", "ppt",
      "xlsx", "xls", "ods"];
    const isPaged = PAGED.includes(ext);
    const tocBtn = document.createElement("button");
    tocBtn.textContent = "☰ 目录";
    tocBtn.title = "显示/隐藏页码导航";
    tocBtn.style.cssText = citeBtn.style.cssText;
    tocBtn.onmouseenter = () => { tocBtn.style.background = "#f1f5f9"; };
    tocBtn.onmouseleave = () => { tocBtn.style.background = "#fff"; };
    tocBtn.onclick = () => { toggleToc(!tocOpen); };

    // ---- 全屏按钮（放关闭按钮旁）----
    const fsBtn = document.createElement("button");
    fsBtn.textContent = "⛶";
    fsBtn.title = "全屏 / 退出全屏";
    fsBtn.style.cssText =
      "border:0;background:#f1f5f9;color:#475569;width:28px;height:28px;" +
      "border-radius:6px;cursor:pointer;font-size:14px;line-height:1;" +
      "display:flex;align-items:center;justify-content:center;margin-right:8px;";
    fsBtn.onclick = () => {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (drawer.requestFullscreen) drawer.requestFullscreen().catch(() => {});
    };

    const headRight = document.createElement("div");
    headRight.style.cssText = "display:flex;align-items:center;";
    headRight.appendChild(citeBtn);
    if (isPaged) headRight.appendChild(tocBtn);
    headRight.appendChild(fsBtn);
    headRight.appendChild(btn);
    header.appendChild(title);
    header.appendChild(headRight);

    // ---- 侧栏：页码导航（"目录"）—— 仅在分页格式下由 header 按钮开关 ----
    let tocOpen = false;
    const tocPanel = document.createElement("div");
    tocPanel.style.cssText =
      "flex:0 0 auto;width:0;overflow:hidden;transition:width .22s ease;" +
      "border-right:0 solid #e2e8f0;background:#f8fafc;";
    const tocInner = document.createElement("div");
    tocInner.style.cssText = "width:200px;padding:12px;box-sizing:border-box;height:100%;overflow:auto;";
    tocInner.innerHTML =
      '<div style="font-size:12px;color:#64748b;margin-bottom:8px">页面导航</div>' +
      '<div style="display:flex;gap:6px;margin-bottom:10px">' +
      '<button data-toc="prev" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">上一页</button>' +
      '<button data-toc="next" style="flex:1;height:28px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">下一页</button>' +
      "</div>" +
      '<div style="display:flex;gap:6px;align-items:center">' +
      '<input data-toc="page" type="number" min="1" style="width:64px;height:28px;border:1px solid #e2e8f0;border-radius:6px;padding:0 6px">' +
      '<button data-toc="go" style="height:28px;padding:0 10px;border:1px solid #e2e8f0;background:#fff;border-radius:6px;cursor:pointer">跳转</button>' +
      "</div>" +
      '<div data-toc="tip" style="margin-top:10px;font-size:11.5px;color:#94a3b8;line-height:1.5">' +
      "提示：也可直接用工具栏的缩放与搜索</div>";
    tocPanel.appendChild(tocInner);

    function toggleToc(open) {
      tocOpen = open;
      tocPanel.style.width = open ? "200px" : "0";
      tocPanel.style.borderRightWidth = open ? "1px" : "0";
      tocBtn.style.background = open ? "#e2e8f0" : "#fff";
      // 尺寸变化后让 OFV 重排（它有 resize 接口）
      setTimeout(() => { try { if (viewerInst && viewerInst.resize) viewerInst.resize(); } catch (e) {} }, 250);
    }

    // 页码操作：走 OFV 的 goToPage（1-based，非分页格式返回 false）
    const pageInput = tocInner.querySelector('[data-toc="page"]');
    let curPage = 1;
    const gotoPage = (p) => {
      if (!viewerInst || typeof viewerInst.goToPage !== "function") return false;
      const ok = viewerInst.goToPage(p);
      if (ok) curPage = p;
      return ok;
    };
    tocInner.querySelector('[data-toc="prev"]').onclick = () => { if (gotoPage(Math.max(1, curPage - 1))) pageInput.value = curPage; };
    tocInner.querySelector('[data-toc="next"]').onclick = () => { if (gotoPage(curPage + 1)) pageInput.value = curPage; };
    tocInner.querySelector('[data-toc="go"]').onclick = () => {
      const v = parseInt(pageInput.value, 10);
      if (v > 0) gotoPage(v);
    };

    const body = document.createElement("div");
    body.style.cssText = "flex:1 1 auto;min-height:0;overflow:auto;padding:12px;";
    const loading = document.createElement("div");
    loading.textContent = "加载中…";
    loading.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;min-height:240px;color:#64748b;";
    body.appendChild(loading);

    drawer.appendChild(header);
    const contentRow = document.createElement("div");
    contentRow.style.cssText = "flex:1 1 auto;min-height:0;display:flex;";
    contentRow.appendChild(tocPanel);
    contentRow.appendChild(body);
    drawer.appendChild(contentRow);
    backdrop.appendChild(drawer);
    document.body.appendChild(backdrop);
    overlayEl = backdrop;
    document.addEventListener("keydown", onKey);

    // 入场动画
    requestAnimationFrame(() => { drawer.style.transform = "translateX(0)"; });

    let blob;
    try {
      blob = await fetchBlob(path, artifactUrl);
      // ⚠️ formatSize 需要字节数而非 Blob 对象（曾传 blob 本身导致大小恒空）
      blobRef.value = blob && typeof blob.size === "number" ? blob.size : null;
      updateTitleMeta();
    } catch (e) {
      loading.textContent = "拉取文件失败：" + (e && e.message ? e.message : e) + "（点击关闭）";
      loading.onclick = closeOverlay;
      err("拉取失败", path, e);
      return;
    }

    try {
      body.removeChild(loading);
      // OFV 容器需要明确高度，同时让 body 滚动条接管
      const ofvBox = document.createElement("div");
      ofvBox.style.cssText = "height:100%;min-height:0;";
      body.appendChild(ofvBox);
      // 手写分块：按扩展名族首次点开才拉对应渲染器（入口不含 OFV，硬刷新零重负载）
      // v0.4.0 细路由：docx/xlsx/pptx/老格式各自独立 chunk；大库（xlsx/pptx/prism/pdfjs…）
      // 由渲染器运行时按需从 renderer-libs/ 拉取
      const family = EXT_RENDERER[ext] || "text";
      if (!RENDERER_PROMISES[family]) {
        // ⚠️ blob 模块上下文里根相对路径（"/api/..."）无法解析（blob 不按页面 base
        // 解析 specifier，实测 "Failed to resolve module specifier"），必须全绝对 URL
        const base = window.__QP_OFV_RENDERER_BASE__
          || location.origin + "/api/frontend_plugin/" + PLUGIN_ID + "/files/frontend/renderer/";
        RENDERER_PROMISES[family] = import(/* @vite-ignore */ base + family + ".js").catch((e) => {
          delete RENDERER_PROMISES[family]; // 失败允许重试
          throw e;
        });
      }
      const { renderViewer } = await RENDERER_PROMISES[family];
      viewerInst = renderViewer({
        container: ofvBox,
        file: blob,
        fileName: name,
        height: "100%",
        locale: "zh-CN",
        theme: "light",
        onError: (e2, f) => err("OFV 渲染错误", f && f.name, e2),
      });
      log("已打开 OFV 预览:", name, "(" + ext + ")", path);

      // OFV 文本面板的「换行 / 复制 / 下载」是渲染后异步生成的
      // （.ofv-code-action），把它们搬到标题栏「在聊天中引用」右侧。
      hoistCodeActions(ofvBox, headRight, citeBtn);
      // 接管所有下载按钮：用宿主 fetch 到的 blob 直接下载（OFV 自带下载会出空文件）
      bindDownload(drawer, blob, name);
    } catch (e) {
      loading.textContent = "OFV 渲染失败：" + (e && e.message ? e.message : e) + "（点击关闭）";
      loading.onclick = closeOverlay;
      err("OFV 渲染失败", e);
    }
  }

  // ================================================================
  // 接管 qwenpaw:open-file-preview（window 捕获阶段，同 OnlyOffice 插件）
  // ================================================================
  function installCapture() {
    if (window.__QP_OFV_CAPTURE__) return;
    window.__QP_OFV_CAPTURE__ = true;
    window.addEventListener(
      "qwenpaw:open-file-preview",
      (e) => {
        try {
          const detail = (e && e.detail) || {};
          const t = detail.target || {};
          const url = String(t.artifactUrl || "");
          const path = String(t.path || "");
          const name = getBaseName(path || url);
          const ext = getExt(name || url || path);
          if (!OFV_EXTS.has(ext)) return; // 放行原生预览

          e.stopPropagation();
          try { e.stopImmediatePropagation(); } catch (e2) {}
          log("接管预览:", name, "(" + ext + ") path=", path, "url=", url);

          const p = normalizePath(path || url);
          if (!p) { err("无法归一化路径，放行"); return; }
          openPreview(name, ext, p, url);
        } catch (e2) {
          err("接管失败:", e2);
        }
      },
      true
    );
    log("已安装预览接管监听");
  }

  // ================================================================
  // DOM 层点击委托（document 捕获阶段，先于 React 根容器）
  // 背景：附件气泡卡（bubbleFile）的点击走宿主内部回调（onFileCardClick →
  // 同步 setState 开原生抽屉），根本不派发 qwenpaw:open-file-preview 事件，
  // window 事件拦截对它无效 —— 必须在 document 捕获阶段从 DOM 拦。
  // 网格卡（ResponseArtifactList）走 window 事件，已由 installCapture 覆盖；
  // 这里只处理事件路径覆盖不到的气泡卡，并兼容网格卡作为双保险。
  // ================================================================
  // 文件名提取：白名单扩展名正则（避免把路径中 6 字母内的目录名误当扩展名）
  // ⚠️ v0.7.2：字符类必须含 Unicode 字母/数字（\p{L}\p{N}）——旧版 [\w@.\-] 的
  // \w 只匹配 ASCII，中文文件名（如 …/中文目录名…报告V1.0.docx）会被截成
  // "V1.0.docx" 丢失目录 → 候选全 404。需 u flag 才支持 \p。
  const CH = "\\p{L}\\p{N}@.\\-_%";
  let _nameRe = null;
  let _pathRe = null;
  function nameRe() {
    if (!_nameRe) _nameRe = OFV_EXTS.size ? new RegExp(
      "([" + CH + "]+\\.(" + [...OFV_EXTS].join("|") + "))(?![" + CH + "\\w-])",
      "iu"
    ) : /$^/; // 全放行时永不匹配
    return _nameRe;
  }
  function pathRe() {
    // 段内不含空格（防同行多文件贪婪吞并）；带空格路径经 title 快路径直取
    if (!_pathRe) _pathRe = OFV_EXTS.size ? new RegExp(
      "(\\/?[" + CH + "]+(?:\\/[\\p{L}\\p{N}@.\\-_%~+()（）\\[\\]]+)*\\.(" + [...OFV_EXTS].join("|") + "))(?![" + CH + "\\w-])",
      "iu"
    ) : /$^/;
    return _pathRe;
  }

  /** 快路径：title/aria-label 本身就是纯路径时直接取，避免正则歧义。
   *  兼容 aria-label 的「文件名 + 空格 + 完整路径」混合形态：从首个 "/" 起截取。 */
  function directPathFromLabel(labeled) {
    let s = String(labeled || "").trim();
    if (!s) return "";
    try { s = decodeURIComponent(s).replace(/\\/g, "/"); } catch (e) {}
    const i = s.indexOf("/");
    if (i >= 0) s = s.slice(i); // 丢掉路径前的文件名前缀（aria-label 形态）
    const ext = getExt(s);
    if (!ext || !OFV_EXTS.has(ext)) return "";
    return s;
  }

  function tryTakeOverFromCard(card, ev) {
    if (!card) return false;
    // 从卡片 DOM 提取文件名：优先 title/aria-label（网格卡 title=完整路径），退化用文本
    const labeled =
      card.getAttribute("title") ||
      card.getAttribute("aria-label") ||
      card.getAttribute("data-path") ||
      "";
    // 快路径：title 本身是纯接管路径（网格卡形态）→ 直接取，绕开文本正则歧义
    const direct = directPathFromLabel(labeled);
    const text = (card.textContent || "").replace(/\s+/g, " ").trim();
    const hay = (labeled + " " + text).trim();
    // 匹配带扩展名的文件名（支持 URL 编码的中文）
    let decoded = hay;
    try {
      const d = decodeURIComponent(hay);
      if (d.indexOf("\uFFFD") === -1) decoded = d;
    } catch (e) {}
    const m = nameRe().exec(direct || decoded);
    if (!m) return false;
    const name = getBaseName(m[1]);
    const ext = getExt(name);
    if (!OFV_EXTS.has(ext)) return false;

    // 提取路径：快路径 > title/文本正则 > basename 兜底
    let rawPath = direct || "";
    if (!rawPath) {
      const pathMatch = pathRe().exec(decoded);
      if (pathMatch) {
        rawPath = pathMatch[1];
        if (!rawPath.startsWith("/")) rawPath = "/" + rawPath;
      } else {
        rawPath = name; // basename 兜底（fetchBlob 有 workspace 根 basename 候选）
      }
    }
    // 卡片内若有带 /files/preview/ 的链接/img，优先取其真实路径
    try {
      const el = card.querySelector('a[href*="/files/preview/"], img[src*="/files/preview/"]');
      const href = el ? (el.getAttribute("href") || el.getAttribute("src") || "") : "";
      const fromUrl = pathFromPreviewUrl(href);
      if (fromUrl) rawPath = fromUrl;
    } catch (e2) {}

    const p = normalizePath(rawPath);
    if (!p) return false;
    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      try { ev.stopImmediatePropagation(); } catch (e3) {}
    }
    log("接管预览(DOM):", name, "(" + ext + ") path=", p);
    openPreview(name, ext, p, "");
    return true;
  }

  function installDomDelegate() {
    if (window.__QP_OFV_DOM__) return;
    window.__QP_OFV_DOM__ = true;
    document.addEventListener(
      "click",
      (ev) => {
        try {
          const t = ev.target;
          if (!t || !t.closest) return;
          // 排除自有控件
          if (t.closest('[data-qp-ofv-overlay]')) return;
          // 命中任一文件卡片形态：气泡附件卡 / 网格交付物卡
          const card =
            t.closest('[class*="bubbleFile"]') ||
            t.closest('[class*="ResponseArtifactList-module__file"]') ||
            t.closest('[class*="ResponseArtifactList-module__details__"]');
          if (!card) return;
          tryTakeOverFromCard(card, ev);
        } catch (e) {
          err("DOM 委托失败:", e);
        }
      },
      true
    );
    log("已安装 DOM 点击委托");
  }

  // ================================================================
  // OFV 样式注入（构建时 CSS 独立产出，运行时按插件静态地址加载）
  // ================================================================
  const STYLE_URL =
    "/api/frontend_plugin/" + PLUGIN_ID + "/files/frontend/style.css";

  function ensureStyle() {
    if (document.querySelector('link[data-qp-ofv-style]')) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = STYLE_URL;
    link.setAttribute("data-qp-ofv-style", "1");
    document.head.appendChild(link);
  }

  // ================================================================
  // 从 QwenPaw 环境变量读取 OFV_NATIVE_EXTS（交回原生预览的格式清单）
  // 端点 GET /envs 返回 [{key,value}]（用户显式配置的变量）。
  // ⚠️ host.fetch 自动补 /api 前缀 → 这里只写 "/envs"。
  // 未配置该变量 → 保持默认清单；配置了（含空串）→ 覆盖。
  // ================================================================
  async function loadNativeExts() {
    const QP = window.QwenPaw;
    if (!QP || !QP.host || typeof QP.host.fetch !== "function") return;
    try {
      const resp = await QP.host.fetch("/envs");
      if (!resp.ok) { err("读取环境变量失败:", resp.status); return; }
      const list = await resp.json();
      const hit = Array.isArray(list)
        ? list.find((x) => x && String(x.key).toUpperCase() === NATIVE_EXTS_ENV_KEY)
        : null;
      if (hit) {
        NATIVE_EXTS = new Set(parseExtList(hit.value));
        log(NATIVE_EXTS_ENV_KEY + " 已配置 → 交回原生:", [...NATIVE_EXTS].join(",") || "(空，OFV 全接管)");
      } else {
        log(NATIVE_EXTS_ENV_KEY + " 未配置 → 用默认放行清单");
      }
      rebuildExtSets();
    } catch (e) {
      err("读取环境变量异常（用默认清单）:", e);
    }
  }

  // ================================================================
  // 插件入口
  // ================================================================
  function boot() {
    ensureStyle();
    installCapture();
    installDomDelegate();
    loadNativeExts();
  }

  if (window.QwenPaw && window.QwenPaw.host) {
    boot();
  } else {
    let tries = 0;
    const timer = setInterval(() => {
      if (window.QwenPaw && window.QwenPaw.host) { clearInterval(timer); boot(); return; }
      if (++tries > 40) { clearInterval(timer); boot(); } // 宿主 SDK 未就绪也兜底安装（不依赖宿主也能监听事件）
    }, 500);
  }
})();

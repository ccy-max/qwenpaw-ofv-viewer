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

  const VERSION = "0.8.2";
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
    // 标记/网页/表格/样式：默认宿主原生渲染更好，但已纳入可接管全集，
    // 从 OFV_NATIVE_EXTS 配置里去掉即可让 OFV 接管（v0.7.7）
    "md", "mdx", "html", "htm", "css", "csv",
  ];
  // OFV 可接管全集（与 EXT_RENDERER 路由表保持一致，v0.8.1 补齐差集：
  // xlsm/docm/pptm 等宏格式此前配了路由却不在全集，永远不会被接管）
  const OFV_ALL_EXTS = [
    // pdf（v0.4.0 接管）
    "pdf",
    // office（含老格式与宏格式，原生都不支持）
    "doc", "docx", "docm", "dot", "dotx", "dotm",
    "xls", "xlsx", "xlsm", "xlsb",
    "ppt", "pptx", "pptm", "pps", "ppsx", "ppsm", "potx", "potm",
    "rtf", "odt", "fodt", "ods", "fods", "odp", "fodp",
    // 压缩包
    "zip", "rar", "7z", "tar", "gz", "tgz", "bz2",
    // 邮件
    "eml", "msg", "mbox",
    // 文本/代码（原生只支持代码块内预览，这里给带高亮的完整预览）
    "txt", "log", "json", "yaml", "yml", "toml", "ini", "conf", "env", "properties",
    "py", "js", "ts", "tsx", "jsx", "java", "go", "rs", "c", "cpp", "h", "hpp",
    "sh", "bash", "sql", "xml", "proto", "hcl", "tf", "dockerfile", "makefile", "r",
    // 前端框架/标记（v0.7.5：vue/html 等纯文本，OFV langMap 原生支持）
    "vue", "svelte", "astro", "scss", "less",
    "kt", "swift", "rb", "php", "cs", "dart", "lua", "bat", "ps1",
    // v0.7.7：网页/样式/标记/表格纳入可接管全集（默认仍在放行清单走原生，
    // 从 OFV_NATIVE_EXTS 去掉即由 OFV 接管）——修 OFV_NATIVE_EXTS 无法接管这些的不对称
    "html", "htm", "css", "md", "csv",
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
  }

  // 扩展名 → 渲染器 chunk 路由（v0.4.0 细拆：点 docx 不再被迫下载 xlsx/pptx 解析器）
  const EXT_RENDERER = (() => {
    const m = {};
    const put = (renderer, exts) => exts.forEach((e) => (m[e] = renderer));
    put("office", ["docx", "docm", "dotx", "dotm", "rtf", "odt", "fodt"]);
    put("sheet", ["xlsx", "xlsm", "xlsb", "xls", "ods", "fods", "csv"]);
    put("ppt", ["pptx", "pptm", "ppsx", "ppsm", "potx", "potm", "odp", "fodp"]);
    put("legacy", ["doc", "dot", "ppt", "pps"]); // 老二进制格式走 emf/转换路径
    put("pdf", ["pdf"]);
    put("archive", ["zip", "rar", "7z", "tar", "gz", "tgz", "bz2"]);
    put("email", ["eml", "msg", "mbox"]);
    put("plain", ["txt", "log", "conf", "ini", "env", "properties", "md"]);
    put("text", ["json", "yaml", "yml", "toml", "xml", "py", "js", "ts", "tsx", "jsx",
      "java", "go", "rs", "c", "cpp", "h", "hpp", "sh", "bash", "sql", "rb", "php",
      "swift", "kt", "cs", "proto", "hcl", "tf", "dockerfile", "makefile",
      "vue", "svelte", "astro", "scss", "less", "dart", "lua", "bat", "ps1", "r",
      // v0.7.7：网页/样式源码高亮（OFV langMap：html/htm→markup、css→css）
      "html", "htm", "css"]);
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

  /** 当前会话的 chatId（X-Chat-Id 头用）。
   *  官方 FilePreview 的 chatId 与路由 /chat/<id> 同源（routeChatId，会话解析后
   *  即后端真实 chat id，见 pages/Chat/index.tsx 的 const chatId = routeChatId）。
   *  宿主 host bridge 没有暴露 chatId/context，URL 是插件侧唯一可靠来源。 */
  function currentChatId() {
    try {
      const m = location.pathname.match(/^\/chat\/([^/?#]+)/);
      if (m) return decodeURIComponent(m[1]);
    } catch (e) {}
    return "";
  }

  /** 绝对路径判定（官方 targetForPath 同款：/ 、~ 、Windows 盘符） */
  function isAbsPath(p) {
    const s = String(p || "");
    return s.startsWith("/") || s.startsWith("~") || /^[a-z]:\//i.test(s);
  }

  /** 官方 buildAuthHeaders 等价（console/src/api/authHeaders.ts）：
   *  Authorization Bearer + X-Agent-Id（agent-storage 里的选中 agent）。 */
  function directFetchHeaders() {
    const H = (window.QwenPaw && window.QwenPaw.host) || {};
    const headers = {};
    try {
      const token = typeof H.getApiToken === "function"
        ? H.getApiToken()
        : (localStorage.getItem("qwenpaw_auth_token") || "");
      if (token) headers.Authorization = "Bearer " + token;
    } catch (e) {}
    try {
      const raw = sessionStorage.getItem("qwenpaw-agent-storage")
        || localStorage.getItem("qwenpaw-agent-storage") || "";
      const parsed = raw ? JSON.parse(raw) : null;
      const ag = parsed && parsed.state && parsed.state.selectedAgent;
      if (ag) headers["X-Agent-Id"] = ag;
    } catch (e) {}
    return headers;
  }

  /** 直连 URL 规整（官方 filePreviewUrl 同款语义）：
   *  http(s) 完整 URL 原样；/ 开头 → getApiUrl 补 /api 前缀 + 追加 token query。 */
  function normalizeDirectUrl(u) {
    let s = String(u || "");
    if (!s) return "";
    if (/^https?:\/\//i.test(s)) return s;
    if (s.startsWith("/")) {
      const H = (window.QwenPaw && window.QwenPaw.host) || {};
      try { s = typeof H.getApiUrl === "function" ? H.getApiUrl(s) : "/api" + s; } catch (e) {}
      try {
        const token = typeof H.getApiToken === "function"
          ? H.getApiToken()
          : (localStorage.getItem("qwenpaw_auth_token") || "");
        if (token && s.indexOf("token=") < 0) {
          s += (s.indexOf("?") >= 0 ? "&" : "?") + "token=" + encodeURIComponent(token);
        }
      } catch (e) {}
      return s;
    }
    return s;
  }

  /** 用宿主带鉴权的 fetch 拉文件为 Blob（对齐官方 FilePreview 的拉取语义）。
   *  ⚠️ URL 前缀：host.fetch 内部经 getApiUrl 自动补 "/api"，传参不带 /api。
   *  host.fetch 自动注入 buildAuthHeaders()（Authorization + 当前选中 agent 的
   *  X-Agent-Id），init.headers 可覆盖/追加。
   *
   *  官方行为（console/src/pages/Coding/FilePreview.tsx）：
   *    相对路径 → GET /workspace/file-download?path=<rel>&root=project
   *               headers 额外带 X-Chat-Id（当前会话）→ 服务端把 root=project
   *               解析到该会话绑定的项目根，一次命中。
   *    绝对路径 → artifactUrl / /api/files/preview/<abs> 直连。
   *  本函数按同一语义构造候选，避免旧版"全 agent × 变体"盲遍历。 */
  async function fetchBlob(absPath, artifactUrl, targetRoot) {
    const QP = window.QwenPaw;
    if (!QP || !QP.host || typeof QP.host.fetch !== "function") {
      throw new Error("宿主 fetch 不可用");
    }
    const raw = String(absPath || "");
    const p = raw.replace(/^\/+/, "");
    const segs = p.split("/").filter(Boolean);
    const candidates = [];
    const chatId = currentChatId();
    const chatHeaders = chatId ? { "X-Chat-Id": chatId } : {};

    // 候选0：artifactUrl 直连——官方 binaryUrl 优先，同款行为（v0.7.4）。
    if (artifactUrl) {
      candidates.push({ direct: String(artifactUrl) });
    }

    if (!isAbsPath(raw)) {
      // ── 相对路径：官方 FilePreview 同款，最多两条候选，不盲遍历 ──
      // root=project + X-Chat-Id → 服务端按会话绑定项目根解析（官方主路径）
      candidates.push({ root: targetRoot || "project", path: p, headers: chatHeaders });
      // root=workspace → agent 自己的存储根（官方 WorkspaceRoot 的另一合法值）
      if ((targetRoot || "project") !== "workspace") {
        candidates.push({ root: "workspace", path: p, headers: chatHeaders });
      }
    } else {
      // ── 绝对路径：/api/files/preview/<abs> 直连（官方 filePreviewUrl 同款，
      // 服务端 expanduser+resolve，受 file_guard 配置控制）。工作区外文件
      // （如 /tmp/xxx.sql）唯一可靠路径（v0.8.0）。
      candidates.push({ direct: "/files/preview/" + p });
      const ag = agentIdFromPath(raw);
      if (ag) {
        // 绝对路径 → 显式 root=project:<项目根> + 相对子路径（绕开 chat 会话绑定）
        const projRoot = projectRootFromPath(raw);
        const rel = projRoot ? raw.slice(projRoot.length + 1) : "";
        if (projRoot && rel) {
          candidates.push({ root: "project:" + projRoot, path: rel, agent: ag, headers: chatHeaders });
        }
        // root=workspace：相对 workspace 根的子路径
        const wsMark = "/workspaces/" + ag + "/";
        const iws = raw.indexOf(wsMark);
        if (iws >= 0) {
          candidates.push({ root: "workspace", path: raw.slice(iws + wsMark.length), agent: ag, headers: chatHeaders });
        }
      } else {
        // 无 workspaces 归属的绝对路径（如 /tmp/x.sql 且 files/preview 被关）：
        // 保留旧式后缀兜底（basename → 2段 → 3段），不带 X-Agent-Id（当前 agent）
        const maxSeg = Math.min(segs.length, 3);
        for (let n = 1; n <= maxSeg; n++) {
          candidates.push({ root: "workspace", path: segs.slice(-n).join("/"), headers: chatHeaders });
          candidates.push({ root: "project", path: segs.slice(-n).join("/"), headers: chatHeaders });
        }
      }
    }

    let lastErr = "";
    const tried = new Set();
    for (const c of candidates) {
      // ⚠️ direct 候选必须用完整 URL 做 key：artifactUrl 与 /files/preview 是
      // 两个不同候选，旧版都用 "d" 导致第二个永远被跳过（v0.8.1 修复）
      const key = c.direct
        ? "d:" + c.direct
        : c.root + ":" + c.path + "@" + (c.agent || "cur") + ":" + (c.headers && c.headers["X-Chat-Id"] ? "chat" : "plain");
      if (tried.has(key)) continue;
      tried.add(key);
      try {
        let resp;
        if (c.direct) {
          // 直连（artifactUrl / files/preview）：官方 FilePreview 的 binaryUrl
          // 就是原生 fetch，不过 getApiUrl。这里同款：原生 fetch + 官方鉴权头。
          resp = await fetch(normalizeDirectUrl(c.direct), { headers: directFetchHeaders() });
        } else {
          const url = "/workspace/file-download?path=" + encodeURIComponent(c.path) + "&root=" + encodeURIComponent(c.root);
          const init = {};
          if (c.agent) init.headers = { ...(init.headers || {}), "X-Agent-Id": c.agent };
          if (c.headers) init.headers = { ...(init.headers || {}), ...c.headers };
          resp = await QP.host.fetch(url, Object.keys(init).length ? init : undefined);
        }
        if (resp.ok) return await resp.blob();
        lastErr = (c.direct ? "direct:" + c.direct : c.root + ":" + c.path) + " -> HTTP " + resp.status;
        log("候选未命中:", lastErr);
      } catch (e) {
        lastErr = (c.direct ? "direct:" + c.direct : c.root + ":" + c.path) + " -> " + (e && e.message ? e.message : e);
        log("候选异常:", lastErr);
      }
    }
    // v0.8.2：失败也留下载出口 —— 直连 URL（artifactUrl / files/preview，带 token）
    // 浏览器 <a download> 直接可下；file-download 类候选需要鉴权头，a 标签导航带不上。
    const e2 = new Error("拉取失败（已试 " + tried.size + " 个候选）最后: " + lastErr);
    e2.downloadUrls = candidates.filter((c) => c.direct).map((c) => c.direct);
    throw e2;
  }

  /** 从 blob 复制纯文本到剪贴板（navigator.clipboard 不可用时退化 execCommand） */
  async function copyTextFromBlob(blob) {
    try {
      const text = await blob.text();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); } catch (e) {}
        ta.remove();
      }
      log("已复制", (text || "").length, "字符");
      return true;
    } catch (e) { err("复制失败:", e); return false; }
  }

  /** 造一个与「在聊天中引用」同款外观的标题栏文字按钮 */
  function makeHeaderTextBtn(label, title, handler) {
    const b = document.createElement("button");
    b.textContent = label; b.title = title;
    b.style.cssText =
      "border:1px solid #e2e8f0;background:#fff;color:#334155;height:28px;" +
      "padding:0 10px;border-radius:6px;cursor:pointer;font-size:12.5px;" +
      "margin-right:8px;line-height:1;";
    b.onmouseenter = () => { b.style.background = "#f1f5f9"; };
    b.onmouseleave = () => { b.style.background = "#fff"; };
    b.onclick = handler;
    return b;
  }

  /**
   * 统一标题栏操作按钮（v0.7.8）：
   *  - OFV 代码视图（txt/py/html/css…）渲染后会生成 .ofv-code-action（换行/复制/下载）
   *    → 搬到标题栏「在聊天中引用」右侧（原行为）。
   *  - 富文本/表格/office 等没有 .ofv-code-action（如 md 被 OFV 渲染成富文本）
   *    → 等一小会儿确认搬不到后，自己注入统一按钮：文本类给 复制+下载，其余给 下载。
   * 这样各格式的标题栏都有「复制/下载」，不再有的有有的没有。
   */
  function ensureHeaderActions(scope, headRight, anchorBtn, ctx) {
    let done = false;
    const hoist = () => {
      if (done) return true;
      const actions = scope.querySelectorAll(".ofv-code-action");
      if (!actions.length) return false;
      let ref = anchorBtn.nextSibling;
      actions.forEach((el) => {
        el.setAttribute("data-qp-ofv-hoisted", "1");
        el.style.cssText += "margin-left:8px;";
        headRight.insertBefore(el, ref);
      });
      done = true;
      return true;
    };
    const inject = () => {
      if (done) return;
      done = true;
      const ref = anchorBtn.nextSibling; // 固定参照：按序 insertBefore 即得正确顺序
      if (ctx.isText) {
        headRight.insertBefore(
          makeHeaderTextBtn("复制", "复制文本内容", () => copyTextFromBlob(ctx.blob)),
          ref
        );
      }
      const dlBtn = makeHeaderTextBtn("下载", "下载文件", () => downloadCurrent(ctx.blob, ctx.name));
      dlBtn.__qpOfvDl = true; // bindDownload 会跳过：避免重复挂监听触发两次下载
      headRight.insertBefore(dlBtn, ref);
    };
    if (!ctx.hasCodeActions) { inject(); return; } // v0.7.9：非代码视图（md富文本/office/pdf/csv…）
    // 永远不会有 .ofv-code-action，直接注入，不再空等轮询超时（原 ~2.5s 延迟）
    if (hoist()) return;
    const obs = new MutationObserver(() => { if (hoist()) obs.disconnect(); });
    obs.observe(scope, { childList: true, subtree: true });
    let tries = 0;
    const timer = setInterval(() => {
      if (hoist()) { clearInterval(timer); obs.disconnect(); }
      else if (++tries > 10) { // ~2.5s 仍无 .ofv-code-action → OFV 走了富文本/非代码视图
        clearInterval(timer); obs.disconnect(); inject();
      }
    }, 250);
    backdropCleanups.push(() => { obs.disconnect(); clearInterval(timer); });
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

  /** 失败面板里的"下载文件"按钮（预览失败也要能拿到文件 —— v0.8.2） */
  function attachFailDownload(loading, opts) {
    // opts: { url?, blob?, name }
    const row = document.createElement("div");
    row.style.cssText = "display:flex;gap:10px;justify-content:center;margin-top:14px;";
    const mk = (label, fn) => {
      const b = document.createElement("button");
      b.textContent = label;
      b.style.cssText =
        "border:1px solid #e2e8f0;background:#fff;color:#334155;height:32px;" +
        "padding:0 14px;border-radius:6px;cursor:pointer;font-size:13px;";
      b.onmouseenter = () => { b.style.background = "#f1f5f9"; };
      b.onmouseleave = () => { b.style.background = "#fff"; };
      b.onclick = (ev) => { ev.stopPropagation(); fn(); };
      return b;
    };
    if (opts.url) {
      const a = document.createElement("a");
      a.textContent = "⬇ 下载文件";
      a.title = "浏览器直接下载（服务端原始地址）";
      a.href = normalizeDirectUrl(opts.url);
      if (opts.name) a.download = opts.name;
      a.style.cssText =
        "display:inline-flex;align-items:center;height:32px;padding:0 14px;" +
        "border:1px solid #e2e8f0;background:#fff;color:#334155;border-radius:6px;" +
        "cursor:pointer;font-size:13px;text-decoration:none;";
      a.onclick = (ev) => ev.stopPropagation();
      row.appendChild(a);
    }
    if (opts.blob) {
      row.appendChild(mk("⬇ 下载已取回的文件", () => downloadCurrent(opts.blob, opts.name)));
    }
    loading.appendChild(row);
  }

  async function openPreview(name, ext, path, artifactUrl, targetRoot) {
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
    const myBackdrop = backdrop;

    // 入场动画
    requestAnimationFrame(() => { drawer.style.transform = "translateX(0)"; });

    let blob;
    try {
      blob = await fetchBlob(path, artifactUrl, targetRoot);
      // 竞态守卫：拉取期间抽屉已被关闭（Esc/点背景）或被新预览替换
      // → 直接丢弃，避免在已脱离文档的 DOM 里幽灵渲染 + observer 泄漏
      if (overlayEl !== myBackdrop) return;
      // ⚠️ formatSize 需要字节数而非 Blob 对象（曾传 blob 本身导致大小恒空）
      blobRef.value = blob && typeof blob.size === "number" ? blob.size : null;
      updateTitleMeta();
    } catch (e) {
      if (overlayEl !== myBackdrop) return;
      loading.style.flexDirection = "column";
      loading.textContent = "拉取文件失败：" + (e && e.message ? e.message : e);
      // v0.8.2：预览失败也要能下载 —— 直连 URL（带 token）浏览器直接下载
      attachFailDownload(loading, {
        url: (e && e.downloadUrls && e.downloadUrls[0]) || "",
        name,
      });
      loading.onclick = closeOverlay;
      err("拉取失败", path, e);
      return;
    }

    try {
      if (overlayEl !== myBackdrop) return;
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
      // （.ofv-code-action）搬到标题栏；富文本/表格类没有这些按钮则自注入 复制/下载。
      // v0.7.9：md 在 OFV 里走 marked 富文本渲染（无代码按钮），与 office/pdf/csv 等
      // 一样在路由时就判定，直接注入不等轮询（修按钮延迟 ~2.5s 的问题）。
      const isText = family === "text" || family === "plain";
      const hasCodeActions = isText && ext !== "md" && ext !== "markdown";
      ensureHeaderActions(ofvBox, headRight, citeBtn, { blob, name, isText, hasCodeActions });
      // 接管所有下载按钮：用宿主 fetch 到的 blob 直接下载（OFV 自带下载会出空文件）
      bindDownload(drawer, blob, name);
    } catch (e) {
      if (overlayEl !== myBackdrop) return;
      loading.style.flexDirection = "column";
      loading.textContent = "OFV 渲染失败：" + (e && e.message ? e.message : e);
      // v0.8.2：blob 已在手，渲染失败也提供下载
      attachFailDownload(loading, { blob, name });
      loading.onclick = closeOverlay;
      err("OFV 渲染失败", e);
    }
  }

  // ================================================================
  // 派发源头拦截（v0.7.8）：包装 window.dispatchEvent
  // 背景：宿主把 OPEN_PREVIEW 监听注册在 window 上，且注册时机早于插件加载。
  // 对 window.dispatchEvent 直接派发的事件，window 就是 target —— 同节点监听
  // 按注册顺序触发（capture 标志不改变 target 阶段顺序），所以我们在
  // installCapture 里 stopImmediatePropagation 拦不住先执行的宿主监听 →
  // 原生抽屉和 OFV 双开（工具行「预览」芯片 filePreviewLink 等 DOM 委托
  // 覆盖不到的派发点全中招）。唯一可靠做法：在派发时刻吞掉事件，让宿主
  // 监听根本收不到。detail.target 是宿主给的权威路径，比 DOM 提取更准。
  // 天然覆盖全部三个派发点（气泡附件卡/预览芯片/网格卡）与未来新增派发点。
  // ================================================================
  let _lastOpen = { path: "", ts: 0 };
  function openPreviewDedup(name, ext, p, url, targetRoot) {
    const now = Date.now();
    if (_lastOpen.path === p && now - _lastOpen.ts < 500) return; // 同一文件短窗口去重
    _lastOpen = { path: p, ts: now };
    openPreview(name, ext, p, url, targetRoot);
  }

  function installDispatchIntercept() {
    if (window.__QP_OFV_DISPATCH__) return;
    window.__QP_OFV_DISPATCH__ = true;
    const orig = window.dispatchEvent.bind(window);
    window.dispatchEvent = function (ev) {
      try {
        if (ev && ev.type === "qwenpaw:open-file-preview") {
          const t = (ev.detail && ev.detail.target) || {};
          const url = String(t.artifactUrl || "");
          const path = String(t.path || "");
          const name = getBaseName(path || url);
          const ext = getExt(name || url || path);
          if (OFV_EXTS.has(ext)) {
            const p = normalizePath(path || url);
            if (p) {
              log("接管预览(dispatch):", name, "(" + ext + ") path=", p, "root=", t.root || "");
              openPreviewDedup(name, ext, p, url, String(t.root || ""));
              return true; // 吞掉事件：宿主原生抽屉不再打开
            }
          }
        }
      } catch (e) {
        err("dispatch 拦截失败，回退宿主:", e);
      }
      return orig(ev);
    };
    log("已安装派发源头拦截");
  }

  // ================================================================
  // 接管 qwenpaw:open-file-preview（window 捕获阶段，同 OnlyOffice 插件）
  // —— v0.7.8 起作为 dispatch 拦截的兜底（如别处以非派发方式触发）
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
          openPreviewDedup(name, ext, p, url, String(t.root || ""));
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
  function nameRe() {
    if (!_nameRe) _nameRe = OFV_EXTS.size ? new RegExp(
      "([" + CH + "]+\\.(" + [...OFV_EXTS].join("|") + "))(?![" + CH + "\\w-])",
      "iu"
    ) : /$^/; // 全放行时永不匹配
    return _nameRe;
  }
    /** 从卡片 DOM / React fiber 提取文件 URL（即官方 artifactUrl）。
   *  气泡卡 FileCard 的 url 不一定落在 DOM 属性上，补 fiber props 挖掘。
   *  拿不到返回 ""。 */
  function extractArtifactUrl(card) {
    try {
      const el = card.querySelector(
        "a[href], img[src], video[src], audio[src], source[src], [data-url]"
      );
      if (el) {
        const u = el.getAttribute("href") || el.getAttribute("src")
          || el.getAttribute("data-url") || "";
        if (u && !u.startsWith("#") && !/^javascript:/i.test(u)) return u;
      }
    } catch (e) {}
    try {
      const fk = Object.keys(card).find(
        (k) => k.startsWith("__reactFiber$") || k.startsWith("__reactInternalInstance$")
      );
      let fiber = fk ? card[fk] : null;
      for (let i = 0; fiber && i < 14; i++, fiber = fiber.return) {
        const props = fiber && fiber.memoizedProps;
        if (!props || typeof props !== "object") continue;
        const cand = props.url
          || (props.item && props.item.url)
          || (props.data && props.data.url)
          || (props.media && props.media.url);
        if (typeof cand === "string" && cand && !cand.startsWith("#")
            && !/^javascript:/i.test(cand)) return cand;
      }
    } catch (e) {}
    return "";
  }

  function tryTakeOverFromCard(card, ev) {
    if (!card) return false;
    // 只认卡片上的真实文件 URL（官方 artifactUrl 同源），拿到才接管。
    // 拿不到 URL 线索一律放行：2.3.0 气泡卡/网格卡/预览芯片点击都会派发
    // qwenpaw:open-file-preview（target 由宿主构造，带权威 artifactUrl/path/root），
    // 由 dispatch 拦截接管。旧版从文本正则猜路径不可靠（zip 卡 7 候选全 404 即教训）。
    const url = extractArtifactUrl(card);
    if (!url) return false;
    let name = getBaseName(String(url).split("?")[0].split("#")[0]);
    if (!name || name.indexOf(".") < 0) {
      const labeled = card.getAttribute("title") || card.getAttribute("aria-label") || "";
      const text = (card.textContent || "").replace(/\s+/g, " ").trim();
      const m = nameRe().exec((labeled + " " + text).trim());
      name = (m && m[1]) || name || "file";
    }
    const ext = getExt(name);
    if (!OFV_EXTS.has(ext)) return false;
    if (ev) {
      ev.preventDefault();
      ev.stopPropagation();
      try { ev.stopImmediatePropagation(); } catch (e3) {}
    }
    log("接管预览(DOM):", name, "(" + ext + ") url=", url);
    openPreviewDedup(name, ext, name, url, "");
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
    if (!QP || !QP.host) return;
    try {
      // ⚠️ 不能用 host.fetch：它对 /envs 这类管理端点不注入 Authorization（真机 401）。
      // 改原生 fetch + 宿主 SDK 同款鉴权头（getApiUrl 补 /api、getApiToken 取 Bearer）。
      const H = QP.host;
      const url = typeof H.getApiUrl === "function" ? H.getApiUrl("/envs") : "/api/envs";
      let token = "";
      try {
        token = typeof H.getApiToken === "function"
          ? H.getApiToken()
          : (localStorage.getItem("qwenpaw_auth_token") || "");
      } catch (e) { token = ""; }
      const headers = {};
      if (token) headers.Authorization = "Bearer " + token;
      const resp = await fetch(url, { headers });
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
    installDispatchIntercept();
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

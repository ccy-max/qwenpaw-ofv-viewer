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
import {
  createViewer,
  imagePlugin,
  officePlugin,
  textPlugin,
  archivePlugin,
  emailPlugin,
} from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

(() => {
  "use strict";

  const VERSION = "0.2.4";
  const TAG = "[ofv-viewer]";
  const PLUGIN_ID = "qwenpaw-ofv-viewer";

  // 原生预览已支持的：png/jpg/jpeg/gif/webp/svg/ico/bmp/pdf/md/mdx/html/htm/csv —— 一律放行
  // OFV officePlugin 覆盖（原生不支持）：doc/docx/xls/xlsx/ppt/pptx/rtf/odt/ods/odp
  // OFV 其他插件：zip/rar/7z/tar/gz（archive）、eml/msg/mbox（email）、文本/源码（text）
  const OFV_EXTS = new Set([
    // office（含老格式，原生都不支持）
    "doc", "docx", "xls", "xlsx", "ppt", "pptx", "rtf", "odt", "ods", "odp",
    // 压缩包
    "zip", "rar", "7z", "tar", "gz", "tgz", "bz2",
    // 邮件
    "eml", "msg", "mbox",
    // 文本/代码（原生只支持代码块内预览，这里给带高亮的完整预览）
    "txt", "log", "json", "yaml", "yml", "toml", "ini", "conf",
    "py", "js", "ts", "tsx", "jsx", "java", "go", "rs", "c", "cpp", "h", "sh", "sql", "xml",
  ]);

  const log = (...a) => { try { console.log(TAG, VERSION, ...a); } catch (e) {} };
  const err = (...a) => { try { console.error(TAG, VERSION, ...a); } catch (e) {} };

  function getExt(name) {
    const m = /\.([^.]+)$/.exec(String(name || ""));
    return m ? m[1].toLowerCase() : "";
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
    // 候选0：artifactUrl 直连（带 token，最可靠）
    if (artifactUrl && /^\/files\/preview\//.test(String(artifactUrl))) {
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
    // 相对路径（无 agent 归属）兜底：遍历全部 agent × basename
    const base = segs[segs.length - 1] || "";
    if (base && !pathAgents.length) {
      const agents = await listAgentIds();
      for (const ag of agents) {
        for (const root of ["workspace", "project"]) {
          try {
            const url = "/workspace/file-download?path=" + encodeURIComponent(base) + "&root=" + root;
            const resp = await QP.host.fetch(url, { headers: { "X-Agent-Id": ag } });
            if (resp.ok) return await resp.blob();
            lastErr = root + ":" + base + "@" + ag + " -> HTTP " + resp.status;
          } catch (e) {
            lastErr = root + ":" + base + "@" + ag + " -> " + (e && e.message ? e.message : e);
          }
        }
      }
    }
    throw new Error("拉取失败（已试 " + tried.size + " 个候选）最后: " + lastErr);
  }

  // ================================================================
  // 全屏遮罩 + OFV 渲染
  // ================================================================
  let overlayEl = null;
  let viewerInst = null;

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
  }
  function onKey(ev) { if (ev.key === "Escape") closeOverlay(); }

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
      "[data-qp-ofv-overlay] .ofv-code-action {",
      "  display: inline-flex; align-items: center; gap: 5px;",
      "  padding: 0 10px; font-size: 12.5px; min-height: 30px;",
      "  vertical-align: middle;",
      "}",
      "[data-qp-ofv-overlay] .ofv-code-action::before {",
      "  font-size: 11px; line-height: 1; font-style: normal;",
      "  margin-top: -0.5px;",
      "  display: inline-block;",
      "}",
      "[data-qp-ofv-overlay] .ofv-code-action:nth-of-type(1)::before { content: '\\21A9'; }",
      "[data-qp-ofv-overlay] .ofv-code-action:nth-of-type(2)::before { content: '\\2398'; }",
      "[data-qp-ofv-overlay] .ofv-code-action:nth-of-type(3)::before { content: '\\2913'; }",
      /* ---- 状态文字不挤按钮 ---- */
      "[data-qp-ofv-overlay] .ofv-code-status { flex: 0 1 auto; max-width: 220px; }",
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
    const title = document.createElement("div");
    title.style.cssText = "font-weight:600;color:#0f172a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;";
    title.textContent = name + " · 预览";
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
    header.appendChild(title);
    header.appendChild(btn);

    const body = document.createElement("div");
    body.style.cssText = "flex:1 1 auto;min-height:0;overflow:auto;padding:12px;";
    const loading = document.createElement("div");
    loading.textContent = "加载中…";
    loading.style.cssText = "display:flex;align-items:center;justify-content:center;height:100%;min-height:240px;color:#64748b;";
    body.appendChild(loading);

    drawer.appendChild(header);
    drawer.appendChild(body);
    backdrop.appendChild(drawer);
    document.body.appendChild(backdrop);
    overlayEl = backdrop;
    document.addEventListener("keydown", onKey);

    // 入场动画
    requestAnimationFrame(() => { drawer.style.transform = "translateX(0)"; });

    let blob;
    try {
      blob = await fetchBlob(path, artifactUrl);
    } catch (e) {
      loading.textContent = "拉取文件失败：" + (e && e.message ? e.message : e) + "（点击关闭）";
      loading.onclick = closeOverlay;
      err("拉取失败", path, e);
      return;
    }

    try {
      if (typeof createViewer !== "function") throw new Error("OFV 未加载");
      body.removeChild(loading);
      // OFV 容器需要明确高度，同时让 body 滚动条接管
      const ofvBox = document.createElement("div");
      ofvBox.style.cssText = "height:100%;min-height:0;";
      body.appendChild(ofvBox);
      viewerInst = createViewer({
        container: ofvBox,
        file: blob,
        fileName: name,
        height: "100%",
        locale: "zh-CN",
        theme: "light",
        plugins: [
          officePlugin(),
          archivePlugin(),
          emailPlugin(),
          textPlugin(),
          imagePlugin(),
        ],
        onError: (e2, f) => err("OFV 渲染错误", f && f.name, e2),
      });
      log("已打开 OFV 预览:", name, "(" + ext + ")", path);
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
  const NAME_RE = new RegExp(
    "([\\w@.\\-]+\\.(" + [...OFV_EXTS].join("|") + "))(?![\\w-])",
    "i"
  );
  const PATH_RE = new RegExp(
    "(\\/?[\\w@.\\-]+(?:\\/[\\w@.\\-]+)*\\.(" + [...OFV_EXTS].join("|") + "))(?![\\w-])",
    "i"
  );

  function tryTakeOverFromCard(card, ev) {
    if (!card) return false;
    // 从卡片 DOM 提取文件名：优先 title/aria-label（网格卡 title=完整路径），退化用文本
    const labeled =
      card.getAttribute("title") ||
      card.getAttribute("aria-label") ||
      card.getAttribute("data-path") ||
      "";
    const text = (card.textContent || "").replace(/\s+/g, " ").trim();
    const hay = (labeled + " " + text).trim();
    // 匹配带扩展名的文件名（支持 URL 编码的中文）
    let decoded = hay;
    try {
      const d = decodeURIComponent(hay);
      if (d.indexOf("\uFFFD") === -1) decoded = d;
    } catch (e) {}
    const m = NAME_RE.exec(decoded);
    if (!m) return false;
    const name = getBaseName(m[1]);
    const ext = getExt(name);
    if (!OFV_EXTS.has(ext)) return false;

    // 提取路径：优先完整路径（title/aria-label 里的绝对或工作区路径），退化用 basename
    let rawPath = "";
    const pathMatch = PATH_RE.exec(decoded);
    if (pathMatch) {
      rawPath = pathMatch[1];
      if (!rawPath.startsWith("/")) rawPath = "/" + rawPath;
    } else {
      rawPath = name; // basename 兜底（fetchBlob 有 workspace 根 basename 候选）
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
  // 插件入口
  // ================================================================
  function boot() {
    ensureStyle();
    installCapture();
    installDomDelegate();
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

# 📄 OFV 万能文件预览

> OFV 万能文件预览插件（v0.2.4）｜插件 ID：`qwenpaw-ofv-viewer`

在 QwenPaw 对话里接管文件卡片的预览，用 [Open File Viewer (OFV)](https://github.com/xushanpei/open-file-viewer) 在浏览器内直接渲染各类文件——**无需 OnlyOffice / 文档服务器，零后端**。未覆盖的格式（pdf / 图片 / md / html / csv 等）自动放行回原生预览。

- **适用版本**：QwenPaw 2.0.0 ~ 2.3.0
- **授权**：MIT（渲染内核 `@open-file-viewer/core` 亦为 MIT）

---

## 目录

- [功能特性](#功能特性)
- [支持格式](#支持格式)
- [技术栈](#技术栈)
- [架构与文件拉取链路](#架构与文件拉取链路)
- [安装](#安装)
- [卸载](#卸载)
- [使用说明](#使用说明)
- [常见问题](#常见问题)
- [版本更新摘要](#版本更新摘要)

---

## 功能特性

### 核心能力

| 能力 | 说明 |
|------|------|
| **Office 全家桶** | `doc` `docx` `xls` `xlsx` `ppt` `pptx` `rtf` `odt` `ods` `odp`（含老格式 `.doc`、OpenDocument） |
| **压缩包浏览** | `zip` `rar` `7z` `tar` `gz` `tgz` `bz2` |
| **邮件预览** | `eml` `msg` `mbox` |
| **文本 / 源码高亮** | 30+ 格式（`txt` `log` `json` `yaml` `py` `js` `ts` `java` `go` `sql` `xml` …）带行号与语法高亮 |
| **纯前端零后端** | 无 Python 执行、无外部服务，随插件热加载 |
| **原生预览互补** | 未覆盖格式不抢，自动放行宿主原生预览 |

### 预览体验

- **右侧抽屉式**：从右侧滑出，点背景或按 `Esc` 关闭，与宿主原生预览同构
- **中文工具栏**：基于 OFV 内置 `zh-CN` 字典（换行 / 复制 / 下载 / 已复制 / 文件较大提示全中文）
- **可拖滚动条**：代码与文本区域滚动条显式 14px 可拖拽
- **双卡接管**：对话网格交付物卡 + 附件气泡卡均覆盖（事件捕获为主、DOM 捕获委托兜底）

---

## 支持格式

| 类别 | 扩展名 |
|------|--------|
| 文档 | `doc` `docx` `rtf` `odt` `ods` `odp` |
| 表格 / 演示 | `xls` `xlsx` `ppt` `pptx` |
| 压缩包 | `zip` `rar` `7z` `tar` `gz` `tgz` `bz2` |
| 邮件 | `eml` `msg` `mbox` |
| 文本 / 源码 | `txt` `log` `json` `yaml` `yml` `toml` `ini` `conf` `py` `js` `ts` `tsx` `jsx` `java` `go` `rs` `c` `cpp` `h` `sh` `sql` `xml` |

> **自动放行（原生预览）**：`pdf` / `png` `jpg` `gif` 等图片 / `md` `html` `htm` / `csv`。规划中：`pdfjs-dist` worker 支持（v0.2+ backlog）。

---

## 技术栈

| 层 | 选型 |
|----|------|
| 宿主平台 | QwenPaw（前端插件机制，2.0.0+） |
| 渲染内核 | `@open-file-viewer/core`（MIT） |
| 构建工具 | Vite 5（`vite build`，单文件 bundle 输出） |
| 兼容垫片 | `buffer`（`@6`，为 Emscripten / `@mapbox/togeojson` 浏览器环境补 `Buffer`） |
| 插件形态 | frontend-only（`type: "frontend"`，无 backend） |

---

## 架构与文件拉取链路

### 为什么是单文件 bundle

QwenPaw 的插件加载器会先 fetch 插件入口 → 转 Blob URL → 动态 `import`。在这种 Blob-loader 模式下，Vite 的 code-splitting（按需 chunk）无法工作，因此构建配置 `inlineDynamicImports: true`，产出**单个 ~11MB 的 `index.js`**（零相对 import），确保能在宿主环境正常加载。

### 文件拉取链路（关键设计）

宿主不暴露文件直链，需经带鉴权的 `host.fetch` 拉取 Blob。路径解析有三层耦合：

1. `X-Agent-Id` 头决定请求落在哪个 agent
2. 该 agent 绑定的项目目录
3. 当前会话（`X-Chat-Id`）的会话级项目绑定覆盖

插件用级联候选绕过上述耦合：

- `artifactUrl` 直连（卡片自带、带 token 的最可靠路径）
- `root=project:<项目根绝对路径>`（绕开会话绑定，服务端按 agent 绑定列表判成员资格）
- `root=workspace` + 相对子路径
- 旧式 `root=workspace|project` + 路径后缀兜底
- 相对路径无归属时遍历全 agent × basename

> ⚠️ **坑**：`host.fetch` 内部会自动补 `/api` 前缀，插件传参必须写 `/workspace/...` 而非 `/api/workspace/...`，否则会变成 `/api/api/...` 必然 404。（详见版本摘要 v0.2.3）

---

## 安装

### 方式一：本地目录安装（开发 / 构建后）

```bash
# 发布产物在 release/qwenpaw-ofv-viewer/
qwenpaw plugin install /path/to/qwenpaw-ofv-viewer/release/qwenpaw-ofv-viewer
```

QwenPaw 运行中会**热加载**（无需重启）。更新用 `--force` 覆盖重装：

```bash
qwenpaw plugin install /path/to/qwenpaw-ofv-viewer/release/qwenpaw-ofv-viewer --force
```

### 安装后验证

```bash
qwenpaw plugin list
```

应看到：

```
• OFV 万能文件预览 (v0.2.4)
  ID: qwenpaw-ofv-viewer
```

然后在对话里**硬刷新控制台（Ctrl+Shift+R）**，点文件卡片即可看到右侧抽屉预览。

---

## 卸载

> ⚠️ **本插件请手动删除子目录，不要用 `qwenpaw plugin uninstall`。**
> 历史上一次 `uninstall` 的 `rmtree` 曾误删整个 `plugins/` 环境。本插件零后端，直接删子目录即可：

```bash
# 仅删除本插件自身目录，不影响其他插件
rm -rf ~/.qwenpaw/plugins/qwenpaw-ofv-viewer
```

更新前建议先备份 `plugins/` 目录。

---

## 使用说明

1. 硬刷新控制台（Ctrl+Shift+R）确保加载最新插件
2. 在对话里点**文件卡片**（网格交付物卡或附件气泡卡均可）
3. 右侧滑出预览抽屉，OFV 渲染文件内容
4. 工具栏中文按钮：**换行** / **复制** / **下载**
5. 关闭：点抽屉外背景区域，或按 `Esc`

---

## 常见问题

**Q：点开一直 404 / 拉取失败？**
检查 F12 Console 的 `[ofv-viewer] 0.2.x` 日志。若看到 `GET .../api/api/workspace/...` 双前缀，是旧版本 bug，升级到 v0.2.3+。若候选全是 `project:...@<agent>` 404，是当前会话未绑定到文件所在项目目录（v0.2.2 已用 `root=project:<绝对根>` 绕过，仍失败多半是路径解析问题，把日志发我）。

**Q：某些格式还是直接下载 / 没预览？**
`pdf` / 图片 / `md` `html` `csv` 等是本插件**故意放行**的原生格式，正常行为。若要 OFV 接管 pdf，等 pdfjs worker 支持（backlog）。

**Q：抽屉宽度 / 图标想改？**
抽屉宽度在 `src/index.js` 的 `drawer` 样式（`min(96vw, 1100px)`），工具栏图标在 `ensureUiStyle()` 的 `::before` 伪元素。改完 `npm run build` + 重新 `install --force` 即可。

**Q：构建报堆内存不足（OOM）？**
Vite 单文件 bundle 体积大，加：`NODE_OPTIONS=--max-old-space-size=3072 npm run build`。

---

## 版本更新摘要

### v0.2.4 (2026-10-09)

- **右侧抽屉式预览**：全屏遮罩改为右侧滑出抽屉（`min(96vw, 1100px)`，缓动滑入 / 滑出，点背景或 Esc 关闭）
- **中文工具栏**：`createViewer` 传 `locale: "zh-CN"`，换行 / 复制 / 下载 / 已复制 / 文件较大提示全套中文
- **可拖滚动条**：注入 CSS 让 `.ofv-code-body` 等内部容器滚动条显式 14px 圆角可拖
- 修复 `ensureUiStyle` 与既有 `ensureStyle`（OFV CSS 注入）重名冲突导致样式未注入

### v0.2.3 (2026-10-09)

- **修复真机 404 根因**：`host.fetch` 内部自动补 `/api` 前缀，插件此前传 `/api/workspace/...` 产生 `/api/api/...` 必然 404；全部调用改为 `/workspace/file-download`、`/agents`（不带 `/api`）
- 此前 v0.2.1 / v0.2.2 的 agent 注入与 `root=project:<绝对根>` 策略均因该双前缀隐形失效，v0.2.3 后整条链路才真正打通

### v0.2.2 (2026-10-09)

- 绝对路径卡片改用 `root=project:<项目根绝对路径>`，绕开 `root=project` 依赖的会话级项目绑定（服务端按 agent 绑定列表判成员资格）

### v0.2.1 (2026-10-09)

- 发现 `host.fetch(url, init)` 的 `init.headers` 可覆盖默认头；从绝对路径 `/workspaces/<agent_id>/` 推导归属 agent 注入 `X-Agent-Id`，相对路径时遍历全 agent 兜底

### v0.2.0 (2026-10-09)

- `artifactUrl` 直连候选（卡片自带带 token URL，不依赖 agent / 根解析）
- DOM 捕获委托接管附件气泡卡（`bubbleFile` 卡不走 `window` 事件）
- `VERSION` 常量与 `plugin.json` 同步（此前日志恒显 0.1.0）

### v0.1.x (2026-10-09)

- 初版：用 OFV 替换 OnlyOffice，纯前端零后端；接管 `qwenpaw:open-file-preview` + DOM 捕获委托
- 修复 Blob 加载器不兼容：改为单文件 bundle（`inlineDynamicImports`）+ `process` 桩 + `buffer` polyfill
- 修复绝对路径 400：改用相对路径候选级联

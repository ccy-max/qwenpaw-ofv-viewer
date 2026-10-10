# 📄 OFV 万能文件预览

> OFV 万能文件预览插件（v0.7.1）｜插件 ID：`qwenpaw-ofv-viewer`

在 QwenPaw 对话里接管文件卡片的预览，用 [Open File Viewer (OFV)](https://github.com/xushanpei/open-file-viewer) 在浏览器内直接渲染各类文件——**无需 OnlyOffice / 文档服务器，零后端**。未覆盖的格式（图片 / md / html / csv 等）自动放行回原生预览，**放行清单可用环境变量 `OFV_NATIVE_EXTS` 自定义**。

- **适用版本**：QwenPaw 2.0.0 ~ 2.3.0
- **授权**：MIT（渲染内核 `@open-file-viewer/core` 亦为 MIT）
- **最新下载**：[GitHub Releases](https://github.com/ccy-max/qwenpaw-ofv-viewer/releases/latest) → `qwenpaw-ofv-viewer-v<版本>.zip`

---

## 目录

- [功能特性](#功能特性)
- [支持格式](#支持格式)
- [配置](#配置)
- [技术栈](#技术栈)
- [架构与文件拉取链路](#架构与文件拉取链路)
- [安装](#安装)
- [卸载](#卸载)
- [使用说明](#使用说明)
- [开发：构建与发布](#开发构建与发布)
- [常见问题](#常见问题)
- [版本更新摘要](#版本更新摘要)

---

## 功能特性

### 核心能力

| 能力 | 说明 |
|------|------|
| **Office 全家桶** | `doc` `docx` `xls` `xlsx` `ppt` `pptx` `rtf` `odt` `ods` `odp`（含老格式 `.doc`、OpenDocument） |
| **PDF** | 缩放 / 搜索 / 打印 / 目录页码导航，pdf.js worker 自托管（不走 CDN） |
| **压缩包浏览** | `zip` `rar` `7z` `tar` `gz` `tgz` `bz2` |
| **邮件预览** | `eml` `msg` `mbox` |
| **文本 / 源码高亮** | 30+ 格式（`txt` `log` `json` `yaml` `py` `js` `ts` `java` `go` `sql` `xml` …）带行号与语法高亮 |
| **按需分块加载** | 入口仅 ~24KB，按格式族拆 9 个渲染器 chunk，首次点开对应格式才下载并会话内缓存 |
| **纯前端零后端** | 无 Python 执行、无外部服务，随插件热加载 |
| **原生预览互补** | 未覆盖格式不抢，自动放行宿主原生预览 |

### 预览体验

- **右侧抽屉式**：从右侧滑出（`min(96vw, 1100px)`），点背景或按 `Esc` 关闭，与宿主原生预览同构
- **标题栏信息区**：第一行文件名，第二行元信息（格式 · 大小，如 `DOCX · 25 KB`），不再与面板内容重复
- **标题栏操作区**：`在聊天中引用` ｜ `换行` `复制` `下载` ｜ `⛶ 全屏` ｜ `✕ 关闭`
- **中文工具栏**：基于 OFV 内置 `zh-CN` 字典，按格式定制按钮——Office/PDF 开缩放+搜索+打印+下载，文本/邮件开搜索+下载
- **可靠下载**：下载按钮由插件接管，直接用宿主鉴权拉到的文件数据触发，规避 OFV 内部下载产生空文件的问题
- **可拖滚动条**：代码与文本区域滚动条显式 14px 可拖拽
- **双卡接管**：对话网格交付物卡 + 附件气泡卡均覆盖（事件捕获为主、DOM 捕获委托兜底）

---

## 支持格式

| 类别 | 扩展名 |
|------|--------|
| 文档 | `doc` `docx` `rtf` `odt` `ods` `odp` |
| 表格 / 演示 | `xls` `xlsx` `ppt` `pptx` |
| PDF | `pdf` |
| 压缩包 | `zip` `rar` `7z` `tar` `gz` `tgz` `bz2` |
| 邮件 | `eml` `msg` `mbox` |
| 文本 / 源码 | `txt` `log` `json` `yaml` `yml` `toml` `ini` `conf` `py` `js` `ts` `tsx` `jsx` `java` `go` `rs` `c` `cpp` `h` `sh` `sql` `xml` |

> **自动放行（原生预览）**：`png` `jpg` `jpeg` `gif` `webp` `svg` 等图片 / `md` `mdx` `html` `htm` / `csv`。这些由宿主原生预览处理，本插件不接管。
>
> **可配置**：放行哪些格式可通过 QwenPaw 环境变量 `OFV_NATIVE_EXTS` 自定义，详见 [配置](#配置)。

---

## 配置

### `OFV_NATIVE_EXTS` — 交回原生预览的格式清单

v0.7.0 起，接管哪些格式可以配置。语义：**OFV 可接管全集 − 本变量列出的格式 = 实际接管集合**。

在 QwenPaw **设置界面 → 环境变量** 新增（或启动前注入进程环境）：

| 项 | 值 |
|----|----|
| 变量名 | `OFV_NATIVE_EXTS` |
| 示例值 | `png, jpg, jpeg, gif, webp, svg, ico, bmp, md, mdx, html, htm, csv` |

- **分隔符**：逗号 / 空格 / 分号混用皆可
- **容忍写法**：前导点（`.pdf`）、大小写（`PDF`）自动归一化
- **未配置该变量** → 用默认放行清单：`png jpg jpeg gif webp svg ico bmp md mdx html htm csv`
- **配置为空串** → 不放行任何格式，OFV 全接管
- 改完**硬刷新控制台**（Ctrl+Shift+R）生效，无需重装插件

**常用例子：**

```
# 让 OFV 也接管 pdf（关掉原生 PDF 查看器）
OFV_NATIVE_EXTS = png, jpg, jpeg, gif, webp, svg, ico, bmp, md, mdx, html, htm, csv

# 把 markdown 交给 OFV（带滚动条与打印）
OFV_NATIVE_EXTS = png, jpg, jpeg, gif, webp, svg, ico, bmp, html, htm, csv

# 只留图片走原生，其余全 OFV 接管
OFV_NATIVE_EXTS = png, jpg, jpeg, gif, webp, svg, ico, bmp
```

> 注：`OFV_NATIVE_EXTS` 只能把格式**交回**原生，不能凭空让 OFV 接管它渲染不了的类型。
> F12 控制台看 `[ofv-viewer]` 日志可确认配置是否读到（`OFV_NATIVE_EXTS 已配置 → 交回原生: ...`）。

---

## 技术栈

| 层 | 选型 |
|----|------|
| 宿主平台 | QwenPaw（前端插件机制，2.0.0+） |
| 渲染内核 | `@open-file-viewer/core`（MIT） |
| 构建工具 | Vite 5（入口 `vite build` + 渲染器/大库由 `build-all.mjs` 分阶段构建） |
| 兼容垫片 | `buffer`（`@6`，为 Emscripten / `@mapbox/togeojson` 浏览器环境补 `Buffer`） |
| 插件形态 | frontend-only（`type: "frontend"`，无 backend） |
| CI/CD | GitHub Actions：推 `v*` tag 自动构建并发布 Release |

---

## 架构与文件拉取链路

### 分块加载（v0.3.0 起）

QwenPaw 的插件加载器会先 fetch 插件入口 → 转 Blob URL → 动态 `import`。这种 Blob-loader 模式下 Vite 的 code-splitting 无法工作，因此**每个渲染器 chunk 独立构建**（各自 `inlineDynamicImports` 保证自包含），入口保持极小（~24KB），运行时按扩展名动态 `import` 对应 chunk。

| chunk | 覆盖格式 | 体积 |
|-------|---------|------|
| `office.js` | docx 族 | ~1.0MB |
| `sheet.js` | xlsx/xls 表格族 | ~1.0MB |
| `ppt.js` | pptx/ppt 演示族 | ~1.0MB |
| `legacy.js` | 老格式 doc/xls/ppt + odt/ods + emf 转换 | ~1.0MB |
| `email.js` | eml/msg/mbox | ~0.8MB |
| `archive.js` | zip/rar/7z/tar/gz | ~0.35MB |
| `text.js` | 代码高亮 | ~0.28MB |
| `plain.js` | 纯文本 | ~0.28MB |
| `pdf.js` | pdf（worker 自托管） | ~0.26MB |

> ⚠️ **两个 blob 模块硬约束**：①入口零相对 import（blob: 上下文无法解析）；②chunk 的动态 import URL 必须是 `location.origin` 全绝对地址（根相对路径 `/api/...` 会炸 `Failed to resolve module specifier`）。

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

### 方式一：下载 Release zip（推荐）

从 [Releases](https://github.com/ccy-max/qwenpaw-ofv-viewer/releases/latest) 下载 `qwenpaw-ofv-viewer-v<版本>.zip`，解压后把 `qwenpaw-ofv-viewer/` 整个目录放进 `~/.qwenpaw/plugins/`：

```bash
unzip qwenpaw-ofv-viewer-v0.6.5.zip -d ~/.qwenpaw/plugins/
```

### 方式二：本地目录安装（开发 / 构建后）

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

应看到 `OFV 万能文件预览 (v0.7.0)`。然后在对话里**硬刷新控制台（Ctrl+Shift+R）**，点文件卡片即可看到右侧抽屉预览。

---

## 卸载

> ⚠️ **本插件请手动删除子目录，不要用 `qwenpaw plugin uninstall`。**
> 历史上一次 `uninstall` 的 `rmtree` 曾误删整个 `plugins/` 环境。本插件零后端，直接删子目录即可：

```bash
# 仅删除本插件自身目录，不影响其他插件
rm -rf ~/.qwenpaw/plugins/qwenpaw-ofv-viewer
```

更新前建议先备份 `plugins/` 目录（`install.sh` 已自动备份）。

---

## 使用说明

1. 硬刷新控制台（Ctrl+Shift+R）确保加载最新插件
2. 在对话里点**文件卡片**（网格交付物卡或附件气泡卡均可）
3. 右侧滑出预览抽屉，OFV 渲染文件内容；标题栏显示文件名 + 格式·大小
4. **标题栏**：`在聊天中引用` / `换行` / `复制` / `下载` / `⛶ 全屏` / `✕ 关闭`
5. **工具栏**（按格式）：缩小 / 放大 / 重置缩放 / 搜索 / 打印 / 下载
6. 关闭：点抽屉外背景区域，或按 `Esc`

---

## 开发：构建与发布

### 版本号单一真相源

改版本只改 `src/index.js` 顶部的 `const VERSION = "x.y.z"`。构建与发布脚本会把它同步到 `plugin.json`。

### 本地构建

```bash
npm ci
npm run build:full     # = node build-all.mjs && vite build（渲染器+大库+prism+入口全量）
npm run package        # 组装 release/ 并打 dist-release/qwenpaw-ofv-viewer-v<版本>.zip
```

### 装机（开发机）

```bash
./install.sh           # 备份 → 铺产物 → 同步 plugin.json → 版本一致性校验
```

### 发布（自动）

```bash
# 1. 确保 src/index.js 的 VERSION 已是目标版本
# 2. 打 tag 并推送 —— CI 自动构建并发布 GitHub Release
git tag -a v0.7.0 -m "说明"
git push origin v0.7.0
```

CI（`.github/workflows/release.yml`）会校验 tag 与源码 `VERSION` 一致，不一致直接 fail，防发布错版本。

> ⚠️ 首次配置 CI 需要 PAT 带 `workflow` scope 才能推送 `.github/workflows/`。

---

## 常见问题

**Q：点开一直 404 / 拉取失败？**
检查 F12 Console 的 `[ofv-viewer]` 日志。若看到 `GET .../api/api/workspace/...` 双前缀，是旧版本 bug，升级到 v0.2.3+。若候选全是 `project:...@<agent>` 404，多半是文件不在会话绑定目录内（`file-download` 有授权边界）。

**Q：下载得到空文件？**
v0.6.5 起下载已由插件接管（用宿主拉到的 blob 直接触发），正常不会空。若仍异常，F12 看 `[ofv-viewer] 已触发下载: <名> <字节>` 那行的字节数。

**Q：某些格式还是直接下载 / 没预览？**
图片 / `md` `html` `csv` 是本插件**故意放行**的原生格式，正常行为。

**Q：插件列表版本号没变？**
宿主版本来自安装目录的 `plugin.json`。手动只替换 `frontend/` 产物不会更新版本号——用 `./install.sh`（会同步 plugin.json）或重装 release 目录。

**Q：构建报堆内存不足（OOM）？**
`NODE_OPTIONS=--max-old-space-size=3072 npm run build:full`。

---

## 版本更新摘要

### v0.7.1 (2026-10-10)

- **发布产物附带文档**：Release zip 内加入 `README.md` 与 `LICENSE`（MIT，解压目录即含），插件目录自解释；仓库补 LICENSE 文件

### v0.7.0 (2026-10-10)

- **`OFV_NATIVE_EXTS` 环境变量配置**：交回原生预览的格式清单可自定义（QwenPaw 设置界面 → 环境变量）。未配置用默认清单（图片/md/html/csv）；空串 = OFV 全接管；支持逗号/空格/分号分隔、前导点、大小写不敏感。运行时经 `GET /envs` 读取（复用 `host.fetch` 鉴权），接管集合与派生正则热重算，改完刷新控制台即生效
- 实现：`OFV_EXTS` 从常量改为「全集 − 放行集」动态计算；`NAME_RE`/`PATH_RE` 改惰性构建缓存

### v0.6.x (2026-10-10)

- **v0.6.5 下载接管**：OFV 内部下载用的是它自身 file 引用，与宿主 `host.fetch` 的 blob 不同步 → 空文件。改为捕获阶段拦截所有下载按钮，用入口持有的 blob 走 `a[download]` 触发
- **v0.6.4 标题大小修复**：`formatSize` 误收 Blob 对象（`Number(Blob)=NaN`）导致大小恒空，改存 `blob.size`
- **v0.6.3 标题去重**：隐藏 OFV 面板自带文件头，文件名/格式·大小统一并入抽屉标题两行式
- **v0.6.2 工具栏修正**：恢复缩放组（缩小/放大/重置）；OFV toolbar 开关不对称——`fullscreen`/`search` 传对象不写即默认开，显式 `fullscreen:false` 去掉自带全屏（全屏统一用标题栏 ⛶）
- **v0.6.1 标题栏间距**：换行/复制/下载 组内 8px、组末 16px 与全屏/关闭图标分组
- **v0.6.0 标题栏增强**：换行/复制/下载 三按钮从文本面板上移到抽屉标题栏（MutationObserver 异步搬运）

### v0.5.x (2026-10-10)

- **v0.5.1**：移除工具栏 zoom 组（后于 v0.6.2 恢复），全屏归标题栏 ⛶
- **v0.5.0 工具栏增强**：OFV toolbar 默认关闭，按格式开启缩放/搜索/打印/下载；新增全屏按钮 + 分页格式「☰ 目录」页码导航（上一页/下一页/跳转）

### v0.4.0 (2026-10-10)

- **PDF 接管**：pdf 从原生 `<embed>` 改为 OFV 接管（可缩放/目录/搜索），pdf.js worker 自托管不走 CDN
- **细粒度分块**：office 4.3MB→1.0MB、text 5.3MB→287KB（external + paths 方案），渲染器拆到 9 个
- **在聊天中引用**按钮

### v0.3.0 (2026-10-09)

- **手写分块加载**：首屏从 11MB 单文件降到 ~15KB 入口；按格式族拆自包含渲染器，首次点开对应格式才按需下载并会话内缓存
- **关键取舍**：OFV 内部用裸包名动态 import（three/xlsx/utif/prismjs…），rollup 多 chunk 模式会把它们摇掉 → 各渲染器独立构建 `inlineDynamicImports` 保证自包含
- **blob 模块限制两连**：①入口零依赖；②blob 内动态 import 根相对路径必炸 → 渲染器 URL 必须 `location.origin` 全绝对
- 构建改为 `build-all.mjs` 串行：入口 + 各渲染器各自构建

### v0.2.4 (2026-10-09)

- **右侧抽屉式预览**：全屏遮罩改为右侧滑出抽屉（`min(96vw, 1100px)`，缓动滑入 / 滑出，点背景或 Esc 关闭）
- **中文工具栏**：`createViewer` 传 `locale: "zh-CN"`，换行 / 复制 / 下载 / 已复制 / 文件较大提示全套中文
- **可拖滚动条**：注入 CSS 让 `.ofv-code-body` 等内部容器滚动条显式 14px 圆角可拖
- 修复 `ensureUiStyle` 与既有 `ensureStyle`（OFV CSS 注入）重名冲突导致样式未注入

### v0.2.3 (2026-10-09)

- **修复真机 404 根因**：`host.fetch` 内部自动补 `/api` 前缀，插件此前传 `/api/workspace/...` 产生 `/api/api/...` 必然 404；全部调用改为 `/workspace/file-download`、`/agents`（不带 `/api`）
- 此前 v0.2.1 / v0.2.2 的策略均因该双前缀隐形失效，v0.2.3 后整条链路才真正打通

### v0.2.2 (2026-10-09)

- 绝对路径卡片改用 `root=project:<项目根绝对路径>`，绕开 `root=project` 依赖的会话级项目绑定

### v0.2.1 (2026-10-09)

- `host.fetch(url, init)` 的 `init.headers` 可覆盖默认头；从绝对路径推导归属 agent 注入 `X-Agent-Id`，相对路径时遍历全 agent 兜底

### v0.2.0 (2026-10-09)

- `artifactUrl` 直连候选（卡片自带带 token URL）
- DOM 捕获委托接管附件气泡卡
- `VERSION` 常量与 `plugin.json` 同步

### v0.1.x (2026-10-09)

- 初版：用 OFV 替换 OnlyOffice，纯前端零后端；接管 `qwenpaw:open-file-preview` + DOM 捕获委托
- 修复 Blob 加载器不兼容：单文件 bundle + `process` 桩 + `buffer` polyfill
- 修复绝对路径 400：改用相对路径候选级联

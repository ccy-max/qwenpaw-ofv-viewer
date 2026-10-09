# OFV 万能文件预览（qwenpaw-ofv-viewer）

一个 **QwenPaw 前端插件**，接管对话里的文件卡片预览，用 [Open File Viewer (OFV)](https://github.com/xushanpei/open-file-viewer) 在浏览器内直接渲染各类文件，**无需 OnlyOffice / 文档服务器，零后端**。

> 替代原生的「下载 / 暂不支持预览」，覆盖 Office、压缩包、邮件、30+ 文本源码格式；未覆盖格式（pdf / 图片 / md / html / csv 等）自动放行回原生预览。

---

## 功能特性

- **Office 全家桶**：`doc` `docx` `xls` `xlsx` `ppt` `pptx` `rtf` `odt` `ods` `odp`（含老格式 `.doc`、OpenDocument）
- **压缩包**：`zip` `rar` `7z` `tar` `gz` `tgz` `bz2`
- **邮件**：`eml` `msg` `mbox`
- **文本 / 源码高亮**：`txt` `log` `json` `yaml` `yml` `toml` `ini` `conf` `py` `js` `ts` `tsx` `jsx` `java` `go` `rs` `c` `cpp` `h` `sh` `sql` `xml`
- **右侧抽屉式预览**：从右侧滑出，点背景或按 `Esc` 关闭，与宿主原生预览同构
- **中文工具栏**：基于 OFV 内置 `zh-CN` 字典（换行 / 复制 / 下载 / 已复制 / 文件较大提示全中文）
- **可拖滚动条**：代码与文本区域滚动条显式 14px 可拖拽
- **纯前端、零后端**：无 Python 执行、无外部服务，随插件热加载

---

## 技术栈

| 层 | 选型 |
|----|------|
| 宿主平台 | QwenPaw（前端插件机制，2.0.0+） |
| 渲染内核 | `@open-file-viewer/core`（MIT） |
| 构建工具 | Vite 5（`vite build`，单文件 bundle 输出） |
| 兼容垫片 | `buffer`（`@6`，为 Emscripten / `@mapbox/togeojson` 浏览器环境补 `Buffer`） |
| 插件形态 | frontend-only（`type: "frontend"`，无 backend） |

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

> ⚠️ 坑：`host.fetch` 内部会自动补 `/api` 前缀，插件传参必须写 `/workspace/...` 而非 `/api/workspace/...`，否则会变成 `/api/api/...` 必然 404。

---

## 目录结构

```
qwenpaw-ofv-viewer/
├── src/
│   └── index.js            # 插件主逻辑（接管、拉取、渲染、UI）
├── release/
│   └── qwenpaw-ofv-viewer/ # 发布产物（plugin.json + frontend/）
│       ├── plugin.json
│       └── frontend/
│           ├── index.js    # 构建后的单文件 bundle
│           └── style.css
├── vite.config.js          # 构建配置（单文件 bundle）
├── package.json
└── README.md
```

---

## 本地开发

```bash
# 1. 安装依赖
npm install

# 2. 开发构建（watch 模式）
npm run dev

# 3. 生产构建（产出 dist/index.js + dist/style.css）
npm run build

# 4. 同步到发布目录
cp dist/index.js dist/style.css release/qwenpaw-ofv-viewer/frontend/
```

构建若遇 Vite 堆 OOM，加：`NODE_OPTIONS=--max-old-space-size=3072 npm run build`

---

## 安装 / 部署到 QwenPaw

> 发布目录在 `release/qwenpaw-ofv-viewer/`。

```bash
# 首次安装
qwenpaw plugin install /path/to/qwenpaw-ofv-viewer/release/qwenpaw-ofv-viewer

# 更新（热重载，无需重启）
qwenpaw plugin install /path/to/qwenpaw-ofv-viewer/release/qwenpaw-ofv-viewer --force
```

安装后**硬刷新控制台（Ctrl+Shift+R）**，点对话里的文件卡片即可看到右侧抽屉预览。

> 回滚：本插件零后端，直接删除 `plugins/qwenpaw-ofv-viewer/` 子目录即可，无需 `uninstall`（避免误删整个 `plugins/`）。更新前建议先备份 `plugins/` 目录。

---

## 版本

当前 `v0.2.4`：右侧抽屉式预览 + 中文工具栏 + 可拖滚动条。

---

## License

插件代码随仓库；渲染内核 `@open-file-viewer/core` 为 MIT。

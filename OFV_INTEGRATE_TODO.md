# OFV_INTEGRATE — 集成 Open File Viewer 实现在线预览

方案（官方 Vue 适配 `@open-file-viewer/vue`，MIT）：
- officePlugin: doc/docx/xls/xlsx/pptx/rtf/odt/ods/odp（含老 .doc！）
- pdfPlugin 需宿主提供 pdfjs-dist worker URL（Vite ?url 导入）
- file 参数接受 Blob → 沿用现有带鉴权的 blob 拉取链路，不暴露 URL

- [x] npm 安装 @open-file-viewer/core @open-file-viewer/vue pdfjs-dist
- [x] 新建 FilePreview.vue 共享组件（plugins: image/pdf/office/text/archive）
- [x] AttachmentList + AttachmentDialogs 接入（blob 传入，替代 img/iframe）
- [x] DocumentList 接入（扩展支持集=OFV 能力集，不支持的仍走下载）
- [x] useProjectDetail + ProjectDocs/ProjectTasks 接入
- [x] 构建部署 + 浏览器实测（docx 渲染出内容 / 图片 / 丢失文件仍单条中文报错）

## 实测结论（2026-10-05）
- 文档管理页 docx（含真实业务文档「接口文档.docx」）→ A4 分页渲染 ✅
- 附件管理页 docx → 渲染 ✅
- 图片 PNG → blob `<img>` 渲染 ✅
- 丢失文件（6-9月空壳记录）→ 0 弹窗 + 单条「附件文件已丢失」toast ✅
- 项目详情页「项目文档」页签 docx → 渲染 ✅

## 构建踩坑（重要）
1. **pdfjs-dist 的 Node-only 死代码 `require("@napi-rs/canvas")` 被 rollup commonjs
   插件跟进 .node 二进制 → 构建失败**。external / resolve.alias 都拦不住（commonjs
   解析带 nodeResolver 标记绕过 alias）。最终用 `enforce:'pre'` 自定义插件在
   resolveId 阶段把 `@napi-rs/canvas(/.*)?` 换成空桩 src/shims/node-canvas.js。
2. **根因坑：frontend 目录同时有 vite.config.js 和 vite.config.ts，Vite 优先加载 .js**，
   导致改 .ts 全程无效（external/alias/pre插件"都没生效"的真相）。.js 是 6-24 误提交
   的陈旧副本，已删除（git status 显示 D），.ts 为唯一正源。
3. OFV 全家桶体积大，rollup 打包默认堆 ~2G 会 OOM → Dockerfile 构建步骤加
   `NODE_OPTIONS=--max-old-space-size=3072`；.dockerignore 补 `*.bak`。

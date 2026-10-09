// PDF 渲染器（v0.4.0 接管；worker 自托管不走 CDN）
import { createViewer, pdfPlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

const WORKER_SRC =
  "/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/pdf.worker.mjs";

// PDF 工具栏：缩放 + 搜索 + 打印 + 下载（翻页由抽屉页码导航条承担，
// 全屏用抽屉自己的按钮；rotate 对纯 PDF 意义不大）
const TOOLBAR = { zoom: true, search: true, print: true, download: true, fullscreen: false };

export function renderViewer(opts) {
  return createViewer({
    ...opts,
    toolbar: TOOLBAR,
    plugins: [pdfPlugin({ workerSrc: WORKER_SRC })],
  });
}

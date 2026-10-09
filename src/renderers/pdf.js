// PDF 渲染器（v0.4.0 新增接管；worker 自托管不走 CDN）
import { createViewer, pdfPlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

const WORKER_SRC =
  "/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/pdf.worker.mjs";

export function renderViewer(opts) {
  return createViewer({
    ...opts,
    plugins: [pdfPlugin({ workerSrc: WORKER_SRC })],
  });
}

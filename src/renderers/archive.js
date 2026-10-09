// 压缩包渲染器（自包含子 bundle，按需加载）
import { createViewer, archivePlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

// 压缩包：下载（列表内浏览无需搜索/缩放）
const TOOLBAR = { download: true, fullscreen: false };

export function renderViewer(opts) {
  return createViewer({ ...opts, toolbar: TOOLBAR, plugins: [archivePlugin()] });
}

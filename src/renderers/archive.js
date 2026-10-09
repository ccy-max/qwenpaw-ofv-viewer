// 压缩包渲染器（自包含子 bundle，按需加载）
import { createViewer, archivePlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

export function renderViewer(opts) {
  return createViewer({ ...opts, plugins: [archivePlugin()] });
}

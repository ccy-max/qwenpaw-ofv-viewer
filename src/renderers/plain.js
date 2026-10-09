// 文本子渲染器 —— 纯文本/通用
import { createViewer, textPlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

const TOOLBAR = { search: true, download: true, fullscreen: false };

export function renderViewer(opts) {
  return createViewer({ ...opts, toolbar: TOOLBAR, plugins: [textPlugin()] });
}

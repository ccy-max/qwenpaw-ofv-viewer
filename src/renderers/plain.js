// 文本子渲染器 —— 纯文本/通用（prismjs 外置，真正打开代码文件才拉高亮库）
import { createViewer, textPlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

export function renderViewer(opts) {
  return createViewer({ ...opts, plugins: [textPlugin()] });
}

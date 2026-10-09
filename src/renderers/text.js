// 文本子渲染器 —— 代码高亮（prism 外置，打开代码文件才拉）
import { createViewer, textPlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

// 代码/文本：搜索 + 下载（换行/复制由 OFV 文本面板自带）
const TOOLBAR = { search: true, download: true };

export function renderViewer(opts) {
  return createViewer({ ...opts, toolbar: TOOLBAR, plugins: [textPlugin()] });
}

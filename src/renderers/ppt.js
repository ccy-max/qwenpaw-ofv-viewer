// Office 子渲染器 —— 演示族 pptx/ppt/pptm/ppsx/odp/fodp
import { createViewer, officePlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

// 演示文稿：翻页 + 缩放 + 搜索 + 打印 + 下载
const TOOLBAR = { zoom: true, search: true, print: true, download: true, fullscreen: false };

export function renderViewer(opts) {
  return createViewer({ ...opts, toolbar: TOOLBAR, plugins: [officePlugin()] });
}

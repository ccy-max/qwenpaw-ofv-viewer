// Office 子渲染器 —— 演示族 pptx/ppt/odp 等
import { createViewer, officePlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

export function renderViewer(opts) {
  return createViewer({ ...opts, plugins: [officePlugin()] });
}

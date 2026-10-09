// Office 子渲染器 —— docx/docm（docx-preview 路径，最轻）
import { createViewer, officePlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

// 工具栏：按格式族定制（OFV 默认 toolbar=false，不传就没有工具栏）
const TOOLBAR = { zoom: true, search: true, print: true, download: true, fullscreen: false };

export function renderViewer(opts) {
  return createViewer({ ...opts, toolbar: TOOLBAR, plugins: [officePlugin()] });
}

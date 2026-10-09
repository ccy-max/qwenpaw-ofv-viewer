// Office 子渲染器 —— docx/docm（docx-preview 路径，最轻）
import { createViewer, officePlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

export function renderViewer(opts) {
  return createViewer({ ...opts, plugins: [officePlugin()] });
}

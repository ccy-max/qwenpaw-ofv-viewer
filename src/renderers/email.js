// 邮件渲染器（自包含子 bundle，按需加载）
import { createViewer, emailPlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

const TOOLBAR = { search: true, download: true, fullscreen: false };

export function renderViewer(opts) {
  return createViewer({ ...opts, toolbar: TOOLBAR, plugins: [emailPlugin()] });
}

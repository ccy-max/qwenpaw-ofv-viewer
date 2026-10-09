// Office 子渲染器 —— 老格式 doc/xls/ppt + odt/ods + emf 转换路径
import { createViewer, officePlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

const TOOLBAR = { zoom: true, search: true, print: true, download: true, fullscreen: false };

export function renderViewer(opts) {
  return createViewer({ ...opts, toolbar: TOOLBAR, plugins: [officePlugin()] });
}

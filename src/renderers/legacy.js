// Office 子渲染器 —— 老格式/转换路径 doc/xls/ppt/rtf/odt/ods/eml 之外的 legacy office
import { createViewer, officePlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

export function renderViewer(opts) {
  return createViewer({ ...opts, plugins: [officePlugin()] });
}

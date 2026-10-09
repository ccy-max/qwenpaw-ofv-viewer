// Office 子渲染器 —— 表格族 xlsx/xls/xlsm/csv/tsv
import { createViewer, officePlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

export function renderViewer(opts) {
  return createViewer({ ...opts, plugins: [officePlugin()] });
}

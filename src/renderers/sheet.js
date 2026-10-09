// Office 子渲染器 —— 表格族 xlsx/xls/xlsm/csv/tsv
import { createViewer, officePlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

// 表格：搜索（单元格查找）+ 缩放 + 打印 + 下载
const TOOLBAR = { zoom: true, search: true, print: true, download: true, fullscreen: false };

export function renderViewer(opts) {
  return createViewer({ ...opts, toolbar: TOOLBAR, plugins: [officePlugin()] });
}

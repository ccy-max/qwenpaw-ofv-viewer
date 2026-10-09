// Office 子渲染器 —— docx/docm（docx-preview 路径，最轻）
import { createViewer, officePlugin } from "@open-file-viewer/core";
import "@open-file-viewer/core/style.css";

// 工具栏：按格式族定制（OFV 默认 toolbar=false，不传就没有工具栏）
const TOOLBAR = {
  zoom: true,      // 缩放
  search: true,    // 搜索
  print: true,     // 打印
  download: true,  // 下载
  rotate: false,   // 文档无需旋转
  fullscreen: false, // 全屏用我们抽屉自己的按钮（更可控）
};

export function renderViewer(opts) {
  return createViewer({ ...opts, toolbar: TOOLBAR, plugins: [officePlugin()] });
}

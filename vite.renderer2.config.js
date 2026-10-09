import { defineConfig } from "vite";
import { resolve } from "node:path";

// v0.4.0 渲染器构建：external 大库 → /renderer-libs/*.js（点开对应格式才按需拉）
// 由 build-all.mjs 传 RENDERER 环境变量
const renderer = process.env.RENDERER || "office";

// 大库外置映射（渲染器 HTTP 上下文相对宿主 / 根）
const paths = (p) => {
  if (p === "xlsx") return location_placeholder_xlsx;
  return p;
};

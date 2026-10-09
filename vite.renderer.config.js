import { defineConfig } from "vite";
import { resolve } from "node:path";

// 每个格式族渲染器单独构建（自包含：inlineDynamicImports，因为 OFV 内部用
// 裸包名动态 import，多 chunk 模式下 rollup 会把它们摇掉 → 只能内联）。
// 由 build-all.mjs 依次以不同 RENDERER 环境变量调用本配置。
const renderer = process.env.RENDERER || "office";

export default defineConfig({
  define: {
    "process.env": {},
    "process.platform": '"browser"',
    "process.versions": {},
    "process.nextTick": "setTimeout",
    global: "globalThis",
  },
  resolve: {
    alias: { buffer: "buffer/" },
  },
  build: {
    outDir: "dist/renderer",
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, `src/renderers/${renderer}.js`),
      formats: ["es"],
      fileName: () => `${renderer}.js`,
    },
    rollupOptions: {
      output: { inlineDynamicImports: true },
    },
    chunkSizeWarningLimit: 16384,
    minify: "esbuild",
  },
});

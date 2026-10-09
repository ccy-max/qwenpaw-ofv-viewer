import { defineConfig } from "vite";
import { resolve } from "node:path";

// 插件入口构建：零依赖（不含 OFV），宿主 Blob-loader 加载。
// 渲染器由 build-all.mjs 用 vite.renderer.config.js 单独构建。
export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      formats: ["es"],
      fileName: () => "index.js",
    },
    chunkSizeWarningLimit: 16384,
  },
});

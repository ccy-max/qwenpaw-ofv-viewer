import { defineConfig } from "vite";

// 前端插件 lib 构建：只产出一个 ES bundle + OFV 样式 css。
// 不打包 react/react-dom（我们不用 JSX，纯 DOM API），OFV core 及其依赖全部打进 bundle，
// 运行时不依赖宿主之外的任何模块。
//
// 重要：QwenPaw 宿主加载插件的流程是
//   fetch(入口) → Blob URL → import(blobUrl) → revoke
// blob: 上下文里相对导入（如 import "./chunk-xxx.js"）无法解析，
// 所以必须 inlineDynamicImports 出单文件 bundle，不能有任何分包。
export default defineConfig({
  // OFV 部分依赖（Emscripten 产物等）在浏览器环境裸引用 Node 的 process，
  // 宿主页面没有 Node 全局 → 注入运行时 stub（不污染构建产物体积）
  define: {
    "process.env": {},
    "process.platform": '"browser"',
    "process.versions": {},
    "process.nextTick": "setTimeout",
    global: "globalThis",
  },
  resolve: {
    // @mapbox/togeojson→concat-stream 依赖 Node 的 buffer/readable-stream 包，
    // 必须显式指到浏览器可用的 npm buffer polyfill（rollup 对空 interop 会炸 prototype）
    alias: {
      buffer: "buffer/",
    },
  },
  build: {
    lib: {
      entry: "src/index.js",
      formats: ["es"],
      fileName: () => "index.js",
    },
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
    // OFV 体积较大，给足内存
    chunkSizeWarningLimit: 16384,
  },
});


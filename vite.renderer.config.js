import { defineConfig } from "vite";
import { resolve } from "node:path";

// v0.4.0 渲染器构建：external 大库 → /renderer-libs/*.js（对应格式首次打开才按需拉）。
// 由 build-all.mjs 以 RENDERER 环境变量逐个调用。
//
// paths 回调把裸包名转写成宿主可服务的绝对路径。宿主插件静态托管根：
//   /api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/
// 渲染器位于 .../frontend/renderer/<name>.js，库位于 .../frontend/renderer-libs/<name>.js。
const RENDERER = process.env.RENDERER || "office";

const LIB_BASE = "/api/frontend_plugin/qwenpaw-ofv-viewer/files/frontend/renderer-libs/";

const libPaths = (p) => {
  switch (p) {
    case "xlsx": return LIB_BASE + "xlsx.js";
    case "@aiden0z/pptx-renderer": return LIB_BASE + "pptx.js";
    case "emf-converter": return LIB_BASE + "emf.js";
    case "utif": return LIB_BASE + "utif.js";
    case "heic2any": return LIB_BASE + "heic2any.js";
    case "prismjs": return LIB_BASE + "prismjs.js";
    case "pdfjs-dist": return LIB_BASE + "pdfjs.js";
    case "pdfjs-dist/legacy/build/pdf.mjs": return LIB_BASE + "pdfjs-legacy.js";
    case "marked": return LIB_BASE + "marked.js";
    case "topojson-client": return LIB_BASE + "topojson.js";
    case "xz-decompress": return LIB_BASE + "xz.js";
    case "dompurify": return LIB_BASE + "dompurify.js";
  }
  if (p.startsWith("@aiden0z/")) return LIB_BASE + "pptx.js";
  if (p.startsWith("mermaid")) return LIB_BASE + "mermaid.js";
  if (p === "three" || p.startsWith("three/")) return LIB_BASE + "three.js";
  if (p.startsWith("prismjs/components/")) return LIB_BASE + "prism-all.js";
  if (p.startsWith("prismjs/")) return LIB_BASE + "prismjs.js";
  if (p.startsWith("pdfjs-dist/")) return LIB_BASE + "pdfjs.js";
  return p;
};

export default defineConfig({
  define: {
    "process.env": {},
    "process.platform": '"browser"',
    "process.versions": {},
    "process.nextTick": "setTimeout",
    global: "globalThis",
  },
  resolve: { alias: { buffer: "buffer/" } },
  build: {
    outDir: "dist/renderer",
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, `src/renderers/${RENDERER}.js`),
      formats: ["es"],
      fileName: () => `${RENDERER}.js`,
    },
    rollupOptions: {
      external: [
        /^xlsx$/,
        /^@aiden0z\//,
        /^emf-converter$/,
        /^utif$/,
        /^heic2any$/,
        /^prismjs/,
        /^mermaid/,
        /^three($|\/)/,
        /^pdfjs-dist/,
        /^marked$/,
        /^topojson-client$/,
        /^xz-decompress$/,
      ],
      output: {
        inlineDynamicImports: true,
        paths: libPaths,
      },
    },
    chunkSizeWarningLimit: 16384,
  },
});

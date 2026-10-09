import { defineConfig } from "vite";
import { resolve } from "node:path";
const lib = process.env.LIB || "xlsx";
const out = process.env.OUT || lib;
const entryMap = {
  xlsx: "src/libs/_xlsx.js",
  pptx: "src/libs/_pptx.js",
  emf: "src/libs/_emf.js",
  utif: "src/libs/_utif.js",
  heic2any: "src/libs/_heic2any.js",
  pdfjs: "src/libs/_pdfjs.js",
  pdfjsLegacy: "src/libs/_pdfjsLegacy.js",
  marked: "src/libs/_marked.js",
  topojson: "src/libs/_topojson.js",
  xz: "src/libs/_xz.js",
  dompurify: "src/libs/_dompurify.js",
  mermaid: "src/libs/_mermaid.js",
  three: "src/libs/_three.js",
};
export default defineConfig({
  define: { "process.env":{}, "process.platform":'"browser"', "process.versions":{}, "process.nextTick":"setTimeout", global:"globalThis" },
  resolve: { alias: { buffer: "buffer/" } },
  build: {
    outDir: "dist-libs", emptyOutDir: false,
    lib: { entry: resolve(__dirname, entryMap[lib]), formats: ["es"], fileName: () => out + ".js" },
    rollupOptions: { output: { inlineDynamicImports: true } },
    chunkSizeWarningLimit: 16384,
  },
});

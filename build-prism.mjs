// prismjs 拆分构建 v2：prismjs.js（核心）+ prism-all.js（全部所需语言按依赖拓扑序串联）
// paths 映射：import("prismjs") → /renderer-libs/prismjs.js
//            import("prismjs/components/prism-X") → /renderer-libs/prism-all.js（组件 import 为纯副作用，OFV 源码确认）
import { build } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";

const here = dirname(fileURLToPath(import.meta.url));
const order = JSON.parse(readFileSync("/tmp/prism-final.json", "utf8"));

// 生成 prism-all 源：按拓扑序 import 每个语言组件（副作用注册）
mkdirSync(resolve(here, "src/libs"), { recursive: true });
const allSrc = order
  .map((l) => `import "prismjs/components/prism-${l}.js";`)
  .join("\n");
writeFileSync(resolve(here, "src/libs/_prism-all.js"), allSrc + "\n");
writeFileSync(
  resolve(here, "src/libs/_prismjs.js"),
  `import * as M from "prismjs";\nexport default M;\nexport * from "prismjs";\n`
);

const common = {
  define: {
    "process.env": {},
    "process.platform": '"browser"',
    "process.versions": {},
    "process.nextTick": "setTimeout",
    global: "globalThis",
  },
  resolve: { alias: { buffer: "buffer/" } },
};

// ① prism 核心
await build({
  ...common,
  configFile: false,
  build: {
    outDir: resolve(here, "dist-libs"),
    emptyOutDir: false,
    minify: true,
    lib: { entry: resolve(here, "src/libs/_prismjs.js"), formats: ["es"], fileName: () => "prismjs.js" },
    rollupOptions: { output: { inlineDynamicImports: true } },
    chunkSizeWarningLimit: 16384,
  },
});

// ② 全部语言（按依赖拓扑序一次执行）
await build({
  ...common,
  configFile: false,
  build: {
    outDir: resolve(here, "dist-libs"),
    emptyOutDir: false,
    minify: true,
    lib: { entry: resolve(here, "src/libs/_prism-all.js"), formats: ["es"], fileName: () => "prism-all.js" },
    rollupOptions: { output: { inlineDynamicImports: true } },
    chunkSizeWarningLimit: 16384,
  },
});

console.log("prismjs.js + prism-all.js 构建完成");

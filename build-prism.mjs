// prismjs 拆分构建 v3：prismjs.js（核心 re-export）+ prism-all.js（core 源码 + 组件源码物理拼接）
// ⚠️ v2 教训：import 语句方式会被 rollup treeshake 掉 prism core 的全局自挂载（_self.Prism=_），
//    而语言组件引用全局裸标识符 Prism → ReferenceError。物理拼接源码顺序执行才可靠。
import { build } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync, mkdirSync, writeFileSync, existsSync } from "node:fs";

const here = dirname(fileURLToPath(import.meta.url));

function require_json(p) {
  return JSON.parse(readFileSync(p, "utf8"));
}

// 从 OFV 源提取组件清单（与 build 时的 core 版本一致）
const ofvSrc = readFileSync("node_modules/@open-file-viewer/core/dist/index.js", "utf8");
const iSwitch = ofvSrc.indexOf("async function loadPrismLanguageComponent");
const seg = ofvSrc.slice(iSwitch, iSwitch + 8000);
const ofvLangs = [...new Set([...seg.matchAll(/prismjs\/components\/prism-([a-z0-9-]+)"/g)].map((m) => m[1]))];

const compsMeta = require_json("node_modules/prismjs/components.json").languages;
const need = new Set(["markup", "css", "clike", "javascript"]);
function add(lang) {
  if (need.has(lang)) return;
  need.add(lang);
  const req = compsMeta[lang]?.require;
  for (const d of Array.isArray(req) ? req : req ? [req] : []) add(d);
}
for (const l of ofvLangs) add(l);
const order = [...need];

// 物理拼接：core 源码 + 各组件源码（顺序执行，core 先挂全局 self.Prism）
const coreSrc = readFileSync("node_modules/prismjs/prism.js", "utf8");
const parts = [coreSrc];
const missing = [];
for (const l of [...order].sort()) {
  const p = `node_modules/prismjs/components/prism-${l}.js`;
  if (existsSync(p)) parts.push(readFileSync(p, "utf-8"));
  else missing.push(l);
}
const allSrc =
  "const __g = typeof self!=='undefined' ? self : globalThis;\n" +
  parts.join("\n;\n") +
  "\nexport default __g.Prism;\n";

mkdirSync(resolve(here, "src/libs"), { recursive: true });
writeFileSync(resolve(here, "src/libs/_prism-all.js"), allSrc);
writeFileSync(
  resolve(here, "src/libs/_prismjs.js"),
  `import * as M from "prismjs";\nexport default M;\nexport * from "prismjs";\n`
);
console.log(`prism-all 拼接：核心 + ${parts.length - 1} 组件${missing.length ? "（缺失: " + missing + "）" : ""} = ${(allSrc.length / 1024) | 0}KB`);

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

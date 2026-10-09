// v0.4.0 全量构建：渲染器（external 大库）+ renderer-libs（独立按需包）
import { execSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";

// 渲染器清单
const renderers = [
  "office",    // docx 族（最常用，最轻）
  "sheet",     // xlsx/xls 表格族
  "ppt",       // pptx/ppt 演示族
  "legacy",    // 老格式 doc/xls/ppt + odt/ods + emf 转换
  "text",      // 代码高亮
  "plain",     // 纯文本
  "archive",   // 压缩包
  "email",     // 邮件
  "pdf",       // pdf（v0.4.0 新增接管，worker 自托管）
];

// ① 大库独立包（renderer-libs/）
mkdirSync("src/libs", { recursive: true });
const libs = {
  xlsx: ["xlsx", "xlsx"],
  pptx: ["@aiden0z/pptx-renderer", "pptx"],
  emf: ["emf-converter", "emf"],
  utif: ["utif", "utif"],
  heic2any: ["heic2any", "heic2any"],
  pdfjs: ["pdfjs-dist", "pdfjs"],
  pdfjsLegacy: ["pdfjs-dist/legacy/build/pdf.mjs", "pdfjs-legacy"],
  marked: ["marked", "marked"],
  topojson: ["topojson-client", "topojson"],
  xz: ["xz-decompress", "xz"],
  dompurify: ["dompurify", "dompurify"],
  mermaid: ["mermaid", "mermaid"],
};
// lib 产物 = 包的静态全量 re-export（OFV 期望 import(URL) 直接得到模块，含 default 与命名导出）
for (const [key, [pkg]] of Object.entries(libs)) {
  writeFileSync(`src/libs/_${key}.js`,
    `import * as M from ${JSON.stringify(pkg)};\nexport default M;\nexport * from ${JSON.stringify(pkg)};\n`);
}
// three.js：静态 import 全量（含 loaders 动态引用的基座）
writeFileSync("src/libs/_three.js", `import * as T from "three";\nexport async function load() { return T; }\nexport * from "three";\n`);
libs.three = ["three", "three"];

// prism 两个包由 build-prism.mjs 产出（有依赖拓扑逻辑）
execSync("node build-prism.mjs", { stdio: "inherit" });


for (const [key, [pkg, out]] of Object.entries(libs)) {
  console.log(`\n===== lib: ${out} =====`);
  execSync(
    `npx vite build --config vite.libs.config.js`,
    { stdio: "inherit", env: { ...process.env, LIB: key, OUT: out } }
  );
}

// ② 渲染器本体
for (const r of renderers) {
  console.log(`\n===== renderer: ${r} =====`);
  execSync(`npx vite build --config vite.renderer.config.js`, {
    stdio: "inherit",
    env: { ...process.env, RENDERER: r },
  });
}

// ③ pdf.js worker 拷贝（自托管，不走 jsdelivr CDN）
mkdirSync("dist/renderer-libs", { recursive: true });
execSync("cp dist-libs/*.js dist/renderer-libs/");
if (existsSync("node_modules/pdfjs-dist/build/pdf.worker.min.mjs")) {
  execSync("cp node_modules/pdfjs-dist/build/pdf.worker.min.mjs dist/renderer-libs/pdf.worker.mjs");
  console.log("pdf.worker.mjs 已拷贝");
} else {
  console.log("警告: pdfjs-dist worker 未找到，检查版本");
}

console.log("\n全部构建完成");

// 依次构建：入口（小）+ 各格式族渲染器（自包含，按需加载）
import { execSync } from "node:child_process";

const renderers = ["office", "archive", "email", "text"];

execSync("npx vite build", { stdio: "inherit" });
for (const r of renderers) {
  console.log(`\n===== renderer: ${r} =====`);
  execSync(`npx vite build --config vite.renderer.config.js`, {
    stdio: "inherit",
    env: { ...process.env, RENDERER: r },
  });
}
console.log("\n全部构建完成");

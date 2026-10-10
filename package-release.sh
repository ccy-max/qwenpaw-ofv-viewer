#!/bin/sh
# 组装发布产物：dist → release/<PLUGIN_ID>/ 并同步版本号，最后打 zip。
# 版本号单一来源 = src/index.js 的 `const VERSION = "x.y.z"`。
set -e

REPO=$(cd "$(dirname "$0")" && pwd)
cd "$REPO"

PLUGIN_ID="qwenpaw-ofv-viewer"
REL_DIR="release/$PLUGIN_ID"
FRONTEND_DIR="$REL_DIR/frontend"

# 1) 从源码提取版本号（唯一真相源）
VERSION=$(node -e "
const s=require('fs').readFileSync('src/index.js','utf8');
const m=s.match(/const VERSION = \"([^\"]+)\"/);
if(!m){console.error('src/index.js 里找不到 VERSION 常量');process.exit(1);}
console.log(m[1]);
")
echo "版本号（来自 src/index.js）: $VERSION"

# 2) 校验 dist 已构建
[ -f dist/index.js ] || { echo "dist/index.js 不存在，先跑 npm run build:full"; exit 1; }
[ -d dist/renderer ] || { echo "dist/renderer 不存在，先跑 npm run build:full"; exit 1; }

# 3) 铺产物到 release/<PLUGIN_ID>/frontend/
mkdir -p "$FRONTEND_DIR"
rm -rf "$FRONTEND_DIR/index.js" "$FRONTEND_DIR/style.css" \
       "$FRONTEND_DIR/renderer" "$FRONTEND_DIR/renderer-libs"
cp dist/index.js dist/style.css "$FRONTEND_DIR/"
cp -r dist/renderer "$FRONTEND_DIR/renderer"
cp -r dist/renderer-libs "$FRONTEND_DIR/renderer-libs"

# 4) 同步 plugin.json 版本号（保留其余字段）
node -e "
const fs=require('fs');
const p='$REL_DIR/plugin.json';
const d=JSON.parse(fs.readFileSync(p,'utf8'));
d.version='$VERSION';
fs.writeFileSync(p, JSON.stringify(d,null,2)+'\n');
console.log('plugin.json version ->', d.version);
"

# 5) 打 zip（zip 根为 <PLUGIN_ID>/，可直接解压进 ~/.qwenpaw/plugins/）
DIST_ZIP="dist-release"
mkdir -p "$DIST_ZIP"
ZIP_NAME="$PLUGIN_ID-v$VERSION.zip"
rm -f "$DIST_ZIP/$ZIP_NAME"
# 在 release/ 下打包，使 zip 根为 <PLUGIN_ID>/（去掉 release/ 前缀）
( cd release && zip -rq "../$DIST_ZIP/$ZIP_NAME" "$PLUGIN_ID" -x '*.DS_Store' )
echo "已生成: $DIST_ZIP/$ZIP_NAME ($(wc -c < "$DIST_ZIP/$ZIP_NAME") bytes)"

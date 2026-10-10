#!/bin/sh
# 装机：把 dist/ 与 release/plugin.json 同步到 QwenPaw 插件安装目录
# ⚠️ 禁止用 plugin uninstall 卸载（会 rmtree 毁环境）；回滚请手动删插件子目录。
set -e

REPO=$(cd "$(dirname "$0")" && pwd)
# QwenPaw 工作目录：默认 ~/.qwenpaw，可用 QWENPAW_HOME 或本地 .env.local 覆盖
[ -f "$REPO/.env.local" ] && . "$REPO/.env.local"
QWENPAW_HOME="${QWENPAW_HOME:-$HOME/.qwenpaw}"
PLUGINS_DIR="$QWENPAW_HOME/plugins"
PLUGIN_ID="qwenpaw-ofv-viewer"
DST="$PLUGINS_DIR/$PLUGIN_ID"

# 1) 备份（安装前必做）
if [ -d "$DST" ]; then
  cp -r "$DST" "$PLUGINS_DIR/plugins.bak-$(date +%Y%m%d-%H%M%S)"
  echo "已备份 $PLUGIN_ID"
fi

# 2) 清旧产物并铺新的（含 plugin.json —— 版本号由它决定宿主显示）
mkdir -p "$DST"
rm -rf "$DST/frontend/index.js" "$DST/frontend/style.css" \
       "$DST/frontend/renderer" "$DST/frontend/renderer-libs"
mkdir -p "$DST/frontend"
cp "$REPO/dist/index.js" "$DST/frontend/index.js"
cp "$REPO/dist/style.css" "$DST/frontend/style.css"
cp -r "$REPO/dist/renderer" "$DST/frontend/renderer"
cp -r "$REPO/dist/renderer-libs" "$DST/frontend/renderer-libs"
cp "$REPO/release/$PLUGIN_ID/plugin.json" "$DST/plugin.json"

# 3) 同步 release 产物副本
rm -rf "$REPO/release/$PLUGIN_ID/frontend/renderer" \
       "$REPO/release/$PLUGIN_ID/frontend/renderer-libs"
cp "$REPO/dist/index.js" "$REPO/dist/style.css" "$REPO/release/$PLUGIN_ID/frontend/"
cp -r "$REPO/dist/renderer" "$REPO/release/$PLUGIN_ID/frontend/renderer"
cp -r "$REPO/dist/renderer-libs" "$REPO/release/$PLUGIN_ID/frontend/renderer-libs"

# 4) 核对：安装目录版本 == release 版本
V1=$(node -e "console.log(require('$DST/plugin.json').version)")
V2=$(node -e "console.log(require('$REPO/release/$PLUGIN_ID/plugin.json').version)")
if [ "$V1" != "$V2" ]; then echo "版本号不一致: $V1 vs $V2"; exit 1; fi

echo "装机完成: $PLUGIN_ID v$V1"
echo "  frontend/index.js $(wc -c < "$DST/frontend/index.js") bytes"
echo "  renderer chunks: $(ls "$DST/frontend/renderer"/*.js | wc -l)"
echo "  renderer-libs:   $(ls "$DST/frontend/renderer-libs"/*.js | wc -l)"

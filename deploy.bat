@echo off
setlocal

:: 构建网站
echo 🔨 构建网站...
call npm run build

:: 切换到构建输出目录
cd build

:: 初始化 git 仓库
git init
git add -A
git commit -m "部署更新 %date%"

:: 推送到 gh-pages 分支
git push -f git@github.com:NeuraVoxel/NeuraVoxel.github.io.git master:gh-pages

:: 返回上一级目录
cd ..

echo ✅ 部署完成！
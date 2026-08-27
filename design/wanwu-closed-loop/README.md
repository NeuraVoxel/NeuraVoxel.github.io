# 万物闭环官网设计稿

NeuraVoxel 官网改版视觉预览，基于 [设计 spec](../../docs/superpowers/specs/2026-08-27-wanwu-closed-loop-site-design.md)。

## 预览

```bash
cd design/wanwu-closed-loop
python3 -m http.server 8765
# 打开 http://localhost:8765/home.html
```

| 页面 | 文件 |
|------|------|
| 首页 | `home.html` |
| 工具页 | `tools.html` |
| 文章页 | `articles.html` |

## 样式结构

- `shared.css` — design tokens、导航、页脚、按钮、标签等共享组件
- `home.css` / `tools.css` / `articles.css` — 各页面专属样式

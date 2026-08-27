# 智樾云飞 ZeyoFly 官网设计稿

独立品牌设计预览，视觉风格与 `design/wanwu-closed-loop/` 保持一致。

| 层级 | 名称 |
|------|------|
| 主品牌 | 智樾云飞 / ZeyoFly |
| Tagline | 万物闭环 |
| 工坊 | 乐乐工坊 |
| 助手 | 飞飞助手（右下角卡通小鸟智能体） |
| 域名 | zeyofly.com（主站）、zeyo.info（短链） |
| 产品 | NeuraVoxel（自动驾驶）、English-Agent、Task-Agent |

## 预览

```bash
cd design/zeyo
python3 -m http.server 8766
# 打开 http://localhost:8766/home.html
```

| 页面 | 文件 |
|------|------|
| 首页 | `home.html` |
| 乐乐工坊 | `workshop.html` |
| 文章页 | `articles.html` |

## 样式

- `shared.css` — tokens、导航、多栏页脚、按钮、飞飞助手
- `feifei-bird.svg` — 飞飞卡通小鸟形象
- `assistant.js` — 飞飞助手交互
- `home.css` / `workshop.css` / `articles.css` — 各页专属样式

# 白天 / 晚上主题切换设计

**日期：** 2026-08-29  
**状态：** 已批准  
**范围：** 主站 `ZeyoLayout`（首页、工坊、文章、合作咨询）  
**方案：** CSS 变量 + `html[data-theme]`

---

## 1. 目标

为 NeuraVoxel 主站增加白天（浅色）/ 晚上（深色）主题切换：

- 默认深色（保持现有墨色底 · 青绿信号视觉）
- 顶栏右侧日月图标手动切换
- 用 `localStorage` 记住偏好，刷新与跨主站页面保持一致
- 首屏无主题闪烁（FOUC）

### 1.1 非目标

- 跟随系统 `prefers-color-scheme`
- 按时间自动切换
- 文档页 / 模块页等旧 `BaseLayout` 布局
- 为 logo、助手、二维码准备两套静态资源

---

## 2. 架构

### 2.1 状态载体

主题写在根节点：

| 值 | 含义 |
|----|------|
| `data-theme="dark"` | 晚上（默认） |
| `data-theme="light"` | 白天 |

未设置或非法值时，按深色处理。

### 2.2 Token 策略

- `:root` / `[data-theme="dark"]`：保留现有 `--ww-*` 深色 token
- `[data-theme="light"]`：覆盖同一套 token 为浅色值
- 组件与页面样式优先使用变量；硬编码颜色改为变量或加浅色覆盖

### 2.3 持久化

| 项 | 值 |
|----|-----|
| Key | `nv-theme` |
| Values | `dark` \| `light` |
| 存储失败 | 本会话内切换仍生效，不持久 |

### 2.4 防闪屏

在 `ZeyoLayout.astro` 的 `<head>` 内联同步脚本（在样式生效前执行）：

1. 读 `localStorage["nv-theme"]`
2. 若为 `light` 或 `dark`，设置 `document.documentElement.dataset.theme`
3. 否则设为 `dark`
4. `try/catch` 包裹，异常时回退深色

### 2.5 数据流

```
首次访问 → 无存储 → data-theme="dark"
点击切换 → 翻转 light/dark → 写 localStorage
再次访问 → 读 localStorage → 立刻设 data-theme（无闪屏）
```

---

## 3. 浅色调色板

延续冷灰工业感，避免奶油纸 / 暖色默认风。

| Token | 深色（现状） | 浅色（白天） |
|-------|-------------|-------------|
| `--ww-void` | `#080c12` | `#f2f5f8` |
| `--ww-surface` | `#101820` | `#ffffff` |
| `--ww-elevated` | `#182028` | `#e8eef4` |
| `--ww-rule` | `#243040` | `#c8d2dc` |
| `--ww-paper` | `#dce4ec` | `#121820` |
| `--ww-mist` | `#8898a8` | `#4a5a6a` |
| `--ww-dim` | `#5a6a7a` | `#6a7a8a` |
| `--ww-signal` | `#40b8b0` | `#1a8a82` |
| `--ww-signal-dim` | `#2a7870` | `#147068` |
| `--ww-signal-glow` | `rgba(64, 184, 176, 0.22)` | `rgba(26, 138, 130, 0.14)` |

新增（替换硬编码）：

| Token | 深色 | 浅色 |
|-------|------|------|
| `--ww-header-bg` | `rgba(8, 12, 18, 0.85)` | `rgba(242, 245, 248, 0.88)` |
| `--ww-signal-hover` | `#5ed4cc` | `#147068` |

场景色（`--ww-perceive` 等）与 `--ww-ok` / `--ww-warn` / `--ww-planned` 两套主题共用，不单独改。

---

## 4. UI 控件

### 4.1 位置与形态

- 组件：`ZeyoHeader.astro` 导航最右侧
- 形态：图标按钮（无边框幽灵样式）
- 图标语义：
  - 当前深色 → 显示月亮；`aria-label`：「切换到白天模式」
  - 当前浅色 → 显示太阳；`aria-label`：「切换到晚上模式」
- Hover：文字/图标色变为 `--ww-signal`
- 键盘：可聚焦，沿用全站 `focus-visible` 样式

### 4.2 行为脚本

小型客户端脚本（可放在 header 或 layout 的 `scripts` slot）：

1. 绑定按钮 click
2. 读当前 `data-theme`，翻转到另一值
3. 写回 `document.documentElement` 与 `localStorage`
4. 更新按钮图标与 `aria-label`

颜色过渡使用现有 `--ww-dur` / `--ww-ease`；尊重 `prefers-reduced-motion`（全局已缩短 transition）。

---

## 5. 涉及文件

| 文件 | 变更 |
|------|------|
| `src/styles/zeyo/shared.css` | 浅色 token 覆盖；header 等硬编码改变量 |
| `src/styles/zeyo/home.css` 等页面 CSS | 仅当存在写死颜色且浅色对比不足时补覆盖 |
| `src/layouts/ZeyoLayout.astro` | 内联防闪屏脚本；可选默认 `data-theme="dark"` |
| `src/components/zeyo/ZeyoHeader.astro` | 主题切换按钮 + 行为脚本 |

`design/zeyo/` 设计稿可选同步，非实现阻塞项。

---

## 6. 边界情况

| 情况 | 处理 |
|------|------|
| 无 JS | 默认深色，页面可用 |
| `localStorage` 不可用 | 切换有效，不持久 |
| 非法存储值 | 回退深色 |
| 助手 / 二维码 / logo | 不换资源；靠背景 token；对比不足再调容器 |

---

## 7. 验收标准

1. 首次打开主站任意页 → 深色，无闪浅色
2. 点击顶栏图标 → 切到白天；背景、文字、边框同步变浅
3. 刷新或进入其他主站页面 → 仍为白天
4. 再次点击 → 回深色并写入存储
5. 按钮可键盘聚焦，`aria-label` 与当前主题一致
6. 开启「减少动态效果」时无突兀长动画

---

## 8. 决策记录

| 决策 | 选择 | 理由 |
|------|------|------|
| 默认主题 | 深色 | 保持现有品牌主视觉 |
| 控件位置 | 顶栏右侧图标 | 常见模式，不占文案 |
| 持久化 | `localStorage` (`nv-theme`) | 跨页、跨会话一致 |
| 覆盖范围 | 仅 `ZeyoLayout` | 主路径；文档已有独立浅色壳 |
| 实现方式 | CSS 变量 + `data-theme` | 与现有 `--ww-*` 一致，改动面可控 |

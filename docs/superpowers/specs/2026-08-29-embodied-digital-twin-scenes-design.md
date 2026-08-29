# 具身智能 · 数字孪生空场景设计

**日期:** 2026-08-29  
**状态:** 已确认  
**范围:** 乐乐工坊新增两个一级空场景占位 + 首页 / 页脚 / 联系页同步

## 目标

在工坊场景体系中增加「具身智能」「数字孪生」两个一级场景，形态与现有「更多场景」一致：有 Tab / 场景卡 / 锚点，暂无作品，展示「即将开放」空状态。

## 方案

最小改动：复用 `WorkshopScene` 的 `empty` 模式，在数据与各展示面按约定顺序插入；不新建页面、不改类型与组件结构。

## 场景顺序

`AI办公 → 自动驾驶 → 具身智能 → 数字孪生 → 教育学习 → 职场求职 → 市场营销 → 更多场景`

默认选中仍为 AI办公（`office`），不因新增场景改变。

## 工坊数据

文件：`src/data/workshop.zh.json` → `scenes` 数组，插在 `driving` 之后、`learning` 之前。

### 具身智能

| 字段 | 值 |
|------|-----|
| `id` | `embodied` |
| `title` | 具身智能 |
| `countLabel` | 规划中 |
| `loopSteps` | `["感知", "决策", "执行", "回流"]` |
| `products` | `[]` |
| `empty` | `true` |
| `emptyTitle` | 具身智能即将开放 |
| `emptyDesc` | 演示数据与真机反馈经同一数据契约组织，仿真与实机闭环缩短迭代周期。NeuraVoxel 正在识别环上断点。 |

### 数字孪生

| 字段 | 值 |
|------|-----|
| `id` | `digital-twin` |
| `title` | 数字孪生 |
| `countLabel` | 规划中 |
| `loopSteps` | `["建模", "仿真", "监测", "优化"]` |
| `products` | `[]` |
| `empty` | `true` |
| `emptyTitle` | 数字孪生即将开放 |
| `emptyDesc` | 虚实映射、仿真验证与运行监测回流，形成可迭代的孪生闭环。NeuraVoxel 正在逐个攻克环节。 |

## 展示面

### 首页 `src/pages/index.astro`

在自动驾驶场景卡之后、教育学习之前，各增一张 `scene-card--muted`：

| 卡片 | href | loop | title | desc | meta |
|------|------|------|-------|------|------|
| 具身智能 | `/workshop/#embodied` | 感知→决策→执行→回流 | 具身智能 | 感知→决策→执行→回流的具身闭环。演示与真机数据对齐，缩短迭代。 | 即将开放 → |
| 数字孪生 | `/workshop/#digital-twin` | 建模→仿真→监测→优化 | 数字孪生 | 建模→仿真→监测→优化的孪生闭环。虚实映射，结果回流优化。 | 即将开放 → |

### 工坊 `src/pages/workshop/index.astro`

在 Tab 列表中，于「自动驾驶」之后插入：

- `data-filter="embodied"` → 具身智能  
- `data-filter="digital-twin"` → 数字孪生  

场景区块由 `workshop.zh.json` 渲染，数据顺序即展示顺序；无需改默认筛选逻辑。

### 页脚 `src/components/zeyo/ZeyoFooter.astro`

工坊列在「自动驾驶」之后增加：

- `/workshop/#embodied` → 具身智能  
- `/workshop/#digital-twin` → 数字孪生  

产品列不新增条目（尚无作品）。

### 联系页 `src/pages/contact/index.astro`

合作方向列表在自动驾驶相关项之后增加：

- 具身智能 · 演示与真机数据闭环（规划中）  
- 数字孪生 · 虚实映射与监测回流（规划中）  

页头场景列举可改为含二者（可选，实现时与现有句式对齐即可）。

## 非目标

- 不新增作品、外链或 `/modules/*` 页面  
- 不改 `workshop.types.ts` 或 `ToolCard` / 空状态组件  
- 不重构首页为从 JSON 推导场景卡  
- 不同步 `design/` 静态稿与历史 specs  
- 不改默认选中场景（仍为 `office`）

## 验收

1. 首页场景卡顺序符合约定，两张新卡为 muted，链向正确锚点，meta 为「即将开放 →」。  
2. `/workshop/#embodied`、`/workshop/#digital-twin` 显示对应空状态标题与描述，loop 步骤正确。  
3. 工坊 Tab 与页脚工坊列顺序与数据一致。  
4. 联系页合作方向可见两条规划中条目。  
5. 其他场景与作品无回归；无 hash 时仍默认 AI办公。

# Feature Specification: NeuraVoxel 产品门户站点

**Feature Branch**: `001-neuravoxel-portal`

**Created**: 2026-08-26

**Status**: Draft

**Input**: User description: "建设 NeuraVoxel 产品门户站点：门户叙事 + 模块/文档入口，中英双语（默认中文），首页 DMP 中枢闭环叙事，模块频道（DMP + 三个环上模块），文档频道（概念/DMP/对接/releases），静态部署至 GitHub Pages (neuravoxel.cn)。视觉风格见 design/preview.html，详细设计见 docs/superpowers/specs/2026-08-26-neuravoxel-site-design.md"

**Reference artifacts** (approved, out of scope for this spec's implementation detail):

- Design document: `docs/superpowers/specs/2026-08-26-neuravoxel-site-design.md`
- Visual preview: `design/preview.html`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - 产业客户理解数据闭环价值 (Priority: P1)

产业客户或业务决策者首次访问 NeuraVoxel 门户，需要在无需登录的情况下，快速理解 NeuraVoxel 以自动化数据引擎为核心的产业数据闭环，以及 DMP（数据管理平台）作为中枢如何驱动标注、训练/微调、仿真等能力。

**Why this priority**: 首页是门户的核心转化面；若无法讲清 DMP 中枢与闭环叙事，后续模块与文档入口失去上下文。

**Independent Test**: 访问默认中文首页，不点击任何外链，在 2 分钟内能回答「DMP 是什么、环上能力有哪些、数据如何回流」三个问题。

**Acceptance Scenarios**:

1. **Given** 访客打开站点根路径，**When** 首页加载完成，**Then** 可见 NeuraVoxel 品牌、一句核心主张、支撑说明，以及「了解闭环」「查看模块」「阅读文档」等行动入口。
2. **Given** 访客在首页，**When** 浏览闭环区域，**Then** 可见 DMP 作为中枢（非环上并列一步）的说明，以及标注对接、训练/微调、仿真验证、数据回流四步环上能力。
3. **Given** 访客在首页，**When** 浏览交互方式摘要，**Then** 可见下载、API、DDS 三种 DMP 与外部平台交互方式的简要说明。
4. **Given** 访客在首页，**When** 浏览产业场景区，**Then** 可见自动驾驶与具身智能两个场景，各含痛点、数据进 DMP 与环上消费/回流的说明，以及链向相关模块或文档的入口。

---

### User Story 2 - 技术读者发现模块与获取资源 (Priority: P2)

技术读者需要浏览模块/工具列表，了解各模块角色（核心 vs 环上）、可用状态，进入单模块页查看介绍、下载项与外链（控制台、仓库、文档等）。

**Why this priority**: 模块频道是「轻量能力入口」，承接首页叙事后的具体行动。

**Independent Test**: 从首页进入模块列表，找到 DMP（标记为核心），打开其详情页，可见完整介绍及至少一项下载或外链。

**Acceptance Scenarios**:

1. **Given** 访客在模块列表页，**When** 浏览列表，**Then** DMP 置顶并标记为核心，其余模块按核心→环上顺序排列。
2. **Given** 访客打开 DMP 模块页，**When** 阅读内容，**Then** 可见名称、摘要、状态、与 DMP 相关的交互能力说明（数据集下载、服务化接口、DDS），以及下载项与外链。
3. **Given** 访客打开任一环上模块页（标注对接、训练/微调对接、仿真对接），**When** 阅读内容，**Then** 可见产品介绍、状态（可用/预览/计划中）及配置的外链；即使状态为预览或计划中，介绍页仍完整可读。
4. **Given** 访客在模块页，**When** 点击指向文档的链接，**Then** 可跳转到对应文档页面。

---

### User Story 3 - 技术读者查阅文档与版本说明 (Priority: P3)

技术读者需要阅读 Markdown 格式的使用说明、概念说明、DMP 交互细节、对接步骤以及版本发布/Changelog，并通过目录导航与内链在文档间跳转。

**Why this priority**: 文档承载深度内容，是模块外链与首页概念摘要的延伸。

**Independent Test**: 从文档首页进入「快速了解」或「概念」类文档，阅读含代码块与表格的页面，并通过内链跳转到 DMP 或模块相关页面。

**Acceptance Scenarios**:

1. **Given** 访客打开文档首页，**When** 浏览目录，**Then** 可见 getting-started、concepts、dmp、integrations、releases 等主题分组。
2. **Given** 访客打开任意已发布文档，**When** 阅读正文，**Then** Markdown 内容正确渲染（标题、段落、代码块、表格、内链）。
3. **Given** 访客在文档中遇到模块名称链接，**When** 点击，**Then** 跳转到对应模块详情页。
4. **Given** 访客打开 releases/Changelog 文档，**When** 阅读，**Then** 可见版本发布与变更说明的首批真实内容。

---

### User Story 4 - 中英文访客切换语言 (Priority: P4)

中文为默认语言；英文访客可通过语言切换访问 `/en` 前缀下的镜像页面。缺译内容有明确提示并可回到中文页。

**Why this priority**: 双语是已批准的产品要求，影响国际读者与合作伙伴的可访问性。

**Independent Test**: 在中文模块页切换至英文，同路径英文页可访问；对尚未翻译的英文文档，显示「暂无英文」并链回中文。

**Acceptance Scenarios**:

1. **Given** 访客在任意中文页面，**When** 点击语言切换，**Then** 跳转至同路径的英文镜像（英文首页为 `/en`）。
2. **Given** 访客在英文页面，**When** 点击语言切换，**Then** 跳转回对应中文路径。
3. **Given** 某英文文档尚未翻译，**When** 访客访问该英文文档路径，**Then** 显示本地化「暂无英文」提示，并提供返回中文对应页或文档首页的链接。
4. **Given** 访客直接输入站点 URL，**When** 无语言前缀，**Then** 默认呈现中文内容。

---

### User Story 5 - 移动端访客浏览门户 (Priority: P5)

访客在手机或窄屏设备上浏览首页、模块列表与文档，内容与导航仍可读可用。

**Why this priority**: 产业与技术读者均可能通过移动设备初次访问；可读性影响第一印象。

**Independent Test**: 在 viewport 宽度 ≤ 768px 下打开首页、模块列表、文档页，无需横向滚动即可完成主要阅读与导航。

**Acceptance Scenarios**:

1. **Given** 访客使用移动设备打开首页，**When** 纵向滚动，**Then** 品牌区、闭环叙事、产业场景、能力入口各节内容可读，CTA 可点击。
2. **Given** 访客使用移动设备打开模块列表与文档页，**When** 浏览，**Then** 文字与链接不被截断至不可读，主导航或等效入口可用。

---

### Edge Cases

- 访客访问不存在的路径时，看到本地化 404 页，并提供回首页、模块列表、文档首页的入口。
- 模块或文档仅有中文版、无英文版时，英文路径显示「暂无英文」而非空白或系统错误。
- 文档内链或模块外链指向不存在页面时，构建阶段应尽可能暴露；运行时呈现 404。
- 外链在新窗口或新标签打开时使用安全属性，避免站内承担目标站可用性。
- 访客系统开启「减少动效」偏好时，品牌入场与闭环步骤动画应降级或关闭，不影响阅读。
- 闭环示意图或装饰性视觉加载失败时，文字叙事与导航仍完整可用。

## Requirements *(mandatory)*

### Functional Requirements

**站点定位与范围**

- **FR-001**: 站点 MUST 作为产品门户与轻量能力入口，对外讲清产业数据闭环，对内（技术读者）提供模块介绍与文档；MUST NOT 提供用户登录、鉴权拉数或真实任务提交。
- **FR-002**: v1 MUST NOT 包含独立日常开发日志频道；版本变更信息由文档 releases/Changelog 承担。
- **FR-003**: v1 产业场景 MUST 仅包含自动驾驶与具身智能；完整多产业目录为后续范围。

**路由与信息架构**

- **FR-004**: 站点 MUST 提供以下中文默认路由：`/`（首页）、`/modules`（模块列表）、`/modules/[slug]`（单模块）、`/docs`（文档首页）、`/docs/[...slug]`（文档页）。
- **FR-005**: 站点 MUST 提供英文镜像路由：`/en`、`/en/modules`、`/en/modules/[slug]`、`/en/docs`、`/en/docs/[...slug]`。
- **FR-006**: 页脚 MUST 包含关于/联系入口（简短页或外链）、语言切换与版权信息。

**首页内容**

- **FR-007**: 首页第一屏 MUST 呈现单一构图：NeuraVoxel 品牌为英雄级信号、核心主张、支撑说明（训练/微调/仿真对接/标注对接）、CTA（了解闭环、查看模块、阅读文档），以及全幅闭环视觉锚点；MUST NOT 使用插卡式小图或浮层徽章替代主视觉。
- **FR-008**: 首页 MUST 包含「闭环以 DMP 为核」专节：DMP 居中说明（组织、版本、权限、分发、回流），环上能力（标注→训练/微调→仿真→回流），以及下载/API/DDS 交互摘要。
- **FR-009**: 首页 MUST 包含两个产业场景卡片及「能力入口」节（模块与工具、文档与版本），并展示首批模块条（DMP 置顶）。

**视觉与可访问性**

- **FR-010**: 站点视觉 MUST 遵循已批准预览的方向：深空灰/冷青数据感、克制动效、工业仪表/示意图气质；MUST NOT 采用紫白渐变、奶油衬线陶土风或报章密栏等通用模板风格。
- **FR-011**: 动效 MUST 支持「减少动效」系统偏好；装饰性动画失败 MUST NOT 阻断内容阅读。
- **FR-012**: 站点 MUST 提供跳过导航至正文的机制，供辅助技术用户使用。

**模块频道**

- **FR-013**: v1 MUST 包含四个固定 slug 的模块：dmp（核心）、annotation-bridge、training-bridge、simulation-bridge。
- **FR-014**: 每个模块 MUST 暴露：标题、摘要、角色（core/ring）、状态（available/preview/planned）、下载项列表、外链列表；DMP MUST  additionally 暴露 integrations（dataset_download、service_api、dds 等）。
- **FR-015**: 模块列表 MUST 按核心→环上排序，DMP 置顶并标记为核心。
- **FR-016**: 模块正文 MUST 为产品介绍；长篇手册内容 MUST 放在文档频道，模块页通过链接引用。

**文档频道**

- **FR-017**: 文档 MUST 以 Markdown 源内容驱动，支持标题、代码块、表格与内链渲染。
- **FR-018**: 中文文档目录 MUST 至少包含：getting-started、concepts、dmp、integrations、releases 主题下的首批可渲染页面。
- **FR-019**: 英文文档 MAY 少于中文；缺页 MUST 显示「暂无英文」并链回中文。
- **FR-020**: 文档中的模块名 MUST 可链接至 `/modules/[slug]`；模块页 MUST 可链接至对应 `docs/...`；首页闭环图节点 SHOULD 链至模块或概念文档。

**双语**

- **FR-021**: 默认语言 MUST 为中文（无前缀路由）；UI 文案与长内容 MUST 分离管理，便于独立翻译。
- **FR-022**: 语言切换 MUST 在同路径下切换 locale（中文 `/foo` ↔ 英文 `/en/foo`）。

**部署与域名**

- **FR-023**: 站点 MUST 可静态构建并发布至公共 Web 访问，生产域名 MUST 为 neuravoxel.cn。
- **FR-024**: 发布流程 MUST 在每次内容更新后可重复执行，且不需服务端运行时。

**错误与边界**

- **FR-025**: 未知路由 MUST 呈现本地化 404，并提供回首页、模块、文档的导航。
- **FR-026**: 外链 MUST 可配置；在新窗口打开外部站点时 MUST NOT 将当前页暴露给目标页（安全外链行为）。

### Key Entities

- **Module（模块）**: 代表 NeuraVoxel 产品能力单元。属性：slug、标题、摘要、角色（core/ring）、状态、下载项、外链、integrations（可选）、关联产业、正文介绍。DMP 为唯一 core 模块。
- **Document（文档）**: 代表一篇 Markdown 文档。属性：slug 路径、语言、标题、正文、所属主题分组（getting-started/concepts/dmp/integrations/releases）、内链与交叉引用。
- **Industry Scene（产业场景）**: 首页展示的场景条目。属性：名称、痛点、数据进 DMP 与环上消费/回流说明、关联模块与文档链接。v1 固定为自动驾驶、具身智能。
- **UI Copy（界面文案）**: 按语言存放的短字符串（导航、按钮、404、缺译提示等），与 Module/Document 长内容分离。
- **Download Item（下载项）**: 模块附属资源。属性：标签、URL、类型。
- **External Link（外链）**: 模块附属外链。属性：标签、URL（控制台、仓库、文档锚点等）。

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 90% 的首次访客在打开首页后 30 秒内能看到品牌、核心主张与至少一个 CTA，无需登录或额外步骤。
- **SC-002**: 产业客户在无引导下浏览首页后，能在 2 分钟内口头或书面回答 DMP 的角色、三种交互方式（下载/API/DDS）及至少两个环上能力名称。
- **SC-003**: 技术读者从首页到达 DMP 模块详情页的路径不超过 3 次点击。
- **SC-004**: 模块列表页展示全部 4 个 v1 模块，且 DMP 标记为核心并位于列表首位。
- **SC-005**: 文档频道至少包含 5 篇可独立打开的中文文档，覆盖概念、DMP 交互说明与 releases/Changelog。
- **SC-006**: 语言切换在首页、模块页、文档页均可完成，切换后 URL 路径除语言前缀外保持一致。
- **SC-007**: 在 viewport 宽度 320px–768px 下，首页、模块列表、文档页无横向滚动即可阅读正文与点击主要链接。
- **SC-008**: 静态构建成功且部署后，neuravoxel.cn 可访问全部 v1 路由；404 页在错误路径下 100% 呈现。
- **SC-009**: 开启「减少动效」时，首页无必需依赖动画才能阅读的内容区块。

## Assumptions

- 已批准的设计文档（2026-08-26）与 `design/preview.html` 视觉预览为 v1 内容与样式的权威参考；实现阶段可引用其结构与令牌，但本规格不限定技术栈。
- 真实训练、仿真、标注与 DMP 控制台仍托管在外部系统；站内仅提供叙事、文档与可配置外链/下载链接。
- 英文内容允许阶段性少于中文；缺译 fallback 行为已在上文定义，不要求 v1 英文全覆盖。
- 首批模块内容中，DMP 相对完整；三个环上模块可为 preview/planned 状态，但介绍页结构齐全。
- 关于/联系可为简短静态页或指向外部联系方式的外链，不强制 CRM 或表单后端。
- 目标部署为静态站点托管（已选 GitHub Pages）；无服务端渲染、无后端 API、无用户会话。
- 现有仓库域名配置（neuravoxel.cn）与 CI 发布流程为部署前提。
- 性能目标遵循标准静态站点期望：首屏在常见宽带下 3 秒内可交互阅读，除非网络或 CDN 外部因素。

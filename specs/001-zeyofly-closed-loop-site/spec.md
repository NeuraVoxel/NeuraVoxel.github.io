# Feature Specification: 智樾云飞 ZeyoFly 万物闭环官网

**Feature Branch**: `001-zeyofly-closed-loop-site`

**Created**: 2026-08-27

**Status**: Draft

**Input**: User description: "智樾云飞 ZeyoFly 万物闭环官网：基于 design/zeyo 设计稿实现首页、乐乐工坊、文章页、合作咨询页，含飞飞助手占位、页脚多栏、合作 CTA，部署至 zeyofly.com"

**Reference artifacts** (approved, out of scope for this spec's implementation detail):

- Design document: `docs/superpowers/specs/2026-08-27-wanwu-closed-loop-site-design.md`
- Visual mockups: `design/zeyo/` (home, workshop, articles, contact)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - 客户理解万物闭环并发起合作 (Priority: P1)

产业客户或合作伙伴首次访问智樾云飞官网，需要在 30 秒内理解「万物闭环」世界观、智樾云飞在做什么、以及为什么值得合作，并通过合作咨询入口建立联系。

**Why this priority**: 首页是面向 A 类受众的核心转化面；闭环叙事与合作 CTA 是品牌升级后的主路径。

**Independent Test**: 访问站点根路径，不登录，在 30 秒内能回答「万物闭环是什么、智樾云飞在攻克哪些场景、如何发起合作」三个问题，并成功进入合作咨询页。

**Acceptance Scenarios**:

1. **Given** 访客打开首页，**When** 页面加载完成，**Then** 可见智樾云飞品牌、ZeyoFly 标识、tagline「万物闭环」、Hero 主标题与闭环动画。
2. **Given** 访客在首页，**When** 浏览「闭环思维是什么」区域，**Then** 可见看问题、做产品、AI 时代三段式解释。
3. **Given** 访客在首页，**When** 浏览场景卡片，**Then** 可见自动驾驶、教育学习、日常办公、更多场景四个一级场景，各含闭环描述与链向工坊的入口。
4. **Given** 访客在首页，**When** 点击「合作咨询」主 CTA 或底部合作条按钮，**Then** 跳转至合作咨询页。
5. **Given** 访客在首页，**When** 点击「探索工坊」次 CTA，**Then** 跳转至乐乐工坊页。

---

### User Story 2 - 开发者发现并使用工坊产品 (Priority: P2)

开发者或技术同行需要快速找到所需产品，了解它解决闭环哪一环，并一键直达使用或文档。

**Why this priority**: 乐乐工坊是面向 B 类受众的能力入口，承接首页场景叙事后的具体行动。

**Independent Test**: 从首页进入工坊，按场景筛选找到 NeuraVoxel DMP 或 English-Agent，可见状态、环节标签与打开/文档按钮。

**Acceptance Scenarios**:

1. **Given** 访客在工坊页，**When** 浏览页头与工坊介绍，**Then** 可见「乐乐工坊」品牌、乐/匠/坊四卡片介绍。
2. **Given** 访客在工坊页，**When** 使用场景 Tab 筛选，**Then** 可按全部/自动驾驶/教育学习/日常办公/更多场景过滤产品列表。
3. **Given** 访客浏览自动驾驶场景，**When** 查看产品卡片，**Then** 可见 DMP、标注桥、训练桥、仿真桥四件作品，各含名称、状态、描述、环节标签与操作按钮。
4. **Given** 访客点击 NeuraVoxel 产品的「查看文档」，**When** 链接可用，**Then** 跳转至对应模块或文档页。
5. **Given** 访客点击 English-Agent 或 Task-Agent 的「打开」，**When** 链接可用，**Then** 在新标签页打开产品外链。

---

### User Story 3 - 思想读者深入闭环方法论 (Priority: P3)

思想认同者或行业读者需要阅读闭环方法论文章，按分类浏览，并通过合作 CTA 建立长期关注。

**Why this priority**: 文章页是面向 C 类受众的思想阵地，支撑品牌深度与长期信任。

**Independent Test**: 从导航进入文章页，浏览置顶与列表，按分类筛选，打开至少一篇种子文章阅读全文。

**Acceptance Scenarios**:

1. **Given** 访客在文章页，**When** 浏览页头，**Then** 可见「闭环思维 — 从闭环视角看世界」主题说明。
2. **Given** 访客在文章页，**When** 使用分类 Tab，**Then** 可按全部/闭环思维/场景实践/Agent × 闭环筛选文章。
3. **Given** 访客在文章页，**When** 浏览列表，**Then** 可见置顶文章（最新方法论）及文章行（标题、摘要、日期、分类标签）。
4. **Given** 访客点击一篇文章，**When** 文章已发布，**Then** 进入单篇阅读页，正文可读。
5. **Given** 访客在文章页底部，**When** 浏览合作 CTA 条，**Then** 可见垂直居中布局的标题、说明与「合作咨询」按钮。

---

### User Story 4 - 合作伙伴填写合作意向 (Priority: P4)

客户或合作伙伴从首页、文章页 CTA 进入合作咨询页，填写合作意向或查看联系方式。

**Why this priority**: 合作咨询是 A 类受众的主转化路径，承接全站合作 CTA。

**Independent Test**: 从首页进入合作咨询页，填写表单字段，提交后触发 mailto 预览（Phase 1），或查看右侧合作方向与联系方式。

**Acceptance Scenarios**:

1. **Given** 访客在合作咨询页，**When** 浏览页头，**Then** 可见「合作咨询 — 欢迎探讨共建、对接与合作」说明。
2. **Given** 访客在合作咨询页，**When** 填写左栏表单，**Then** 可输入姓名、机构、邮箱、合作类型（产品共建/场景对接/技术合作/渠道生态/其他）与合作简述。
3. **Given** 访客提交表单（Phase 1），**When** 点击提交，**Then** 打开邮件客户端，收件人为 contact@zeyofly.com。
4. **Given** 访客在合作咨询页，**When** 浏览右栏，**Then** 可见合作方向示例、直接联系（邮箱/域名）与微信公众号二维码区域。

---

### User Story 5 - 全站导航与辅助体验 (Priority: P5)

任意访客需要在全站使用统一导航、页脚与飞飞助手，快速到达目标页面。

**Why this priority**: 全站组件保证品牌一致性与基础可用性。

**Independent Test**: 在任意页面使用主导航切换四页，打开飞飞助手对话占位，页脚可见唯一公众号入口。

**Acceptance Scenarios**:

1. **Given** 访客在任意页面，**When** 查看页眉导航，**Then** 可见首页、工坊、文章、合作咨询四项，当前页高亮。
2. **Given** 访客在任意页面，**When** 查看页脚，**Then** 可见多栏链接（产品、工坊、了解更多、联系我们）及唯一公众号二维码占位。
3. **Given** 访客在任意页面，**When** 点击右下角飞飞助手，**Then** 展开对话面板，可输入消息并获得占位回复。
4. **Given** 访客使用键盘或屏幕阅读器，**When** 浏览页面，**Then** 可见跳过正文链接与基本无障碍标签。

### Edge Cases

- 访客禁用动画时，闭环 Hero 环节点亮动画应停止，静态环图仍可读。
- 工坊或文章筛选 Tab 在无匹配内容时，对应区块隐藏但不破坏布局。
- 合作表单必填项未填时，浏览器原生校验阻止提交。
- 外链产品（English-Agent、Task-Agent）在新标签打开，并带 rel="noopener"。
- 英文路径 `/en/...` 在 Phase 1 可返回占位或链回中文，框架预留不阻塞 MVP。

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: 站点 MUST 提供首页（`/`），包含 Hero、闭环思维、场景卡片、长期主义宣言、底部合作 CTA 五个内容区。
- **FR-002**: 站点 MUST 提供乐乐工坊页（`/workshop`），含工坊介绍、场景 Tab 筛选、按场景分组的产品卡片网格。
- **FR-003**: 站点 MUST 提供文章列表页（`/articles`），含分类 Tab、置顶文章、文章列表与底部合作 CTA。
- **FR-004**: 站点 MUST 提供单篇文章页（`/articles/[slug]`），渲染 Markdown 正文。
- **FR-005**: 站点 MUST 提供合作咨询页（`/contact`），含双栏布局（移动端单列）：合作意向表单与联系信息侧栏。
- **FR-006**: 全站 MUST 使用统一页眉（智樾云飞 logo + ZeyoFly + tagline + 四导航项）与多栏页脚（含唯一公众号入口）。
- **FR-007**: 全站 MUST 在右下角提供飞飞助手 UI 占位，支持打开/关闭对话与占位回复。
- **FR-008**: 首页与文章页 MUST 包含垂直居中布局的合作 CTA 条（标题 → 说明 → 按钮）。
- **FR-009**: 产品卡片 MUST 展示名称、状态（已上线/内测/规划中）、一句话描述、闭环环节标签、打开与文档（如有）按钮。
- **FR-010**: 合作咨询表单在 Phase 1 MUST 通过 mailto 方式预览提交；正式后端接入留待 Phase 2。
- **FR-011**: 站点 MUST 发布至少 1–2 篇种子文章（P0 优先级：万物闭环方法论、自动驾驶数据闭环）。
- **FR-012**: 英文镜像路由（`/en/...`）MUST 在结构上预留，Phase 1 内容可先仅中文。
- **FR-013**: NeuraVoxel 系列产品 MUST 链向现有模块/文档页（DMP、标注桥、训练桥、仿真桥）。
- **FR-014**: 视觉风格 MUST 遵循设计稿：深色底、青绿信号色、Noto Serif SC 标题 + Figtree 正文 + IBM Plex Mono 标签。

### Key Entities

- **场景（Scene）**: 一级产品分类（自动驾驶、教育学习、日常办公、更多场景）；含名称、闭环环节描述、锚点 ID。
- **工坊作品（Workshop Product）**: 乐乐工坊中的单个产品；含名称、场景、状态、描述、环节标签、打开 URL、文档 URL。
- **文章（Article）**: 思想阵地内容；含 slug、标题、摘要、分类（闭环思维/场景实践/Agent × 闭环）、发布日期、是否置顶。
- **合作意向（Partnership Inquiry）**: 访客提交的合作信息；含姓名、机构、邮箱、合作类型、简述（Phase 1 经 mailto 发送）。

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 90% 的新访客能在 30 秒内从首页回答「万物闭环是什么」并完成至少一次 CTA 点击（合作咨询或探索工坊）。
- **SC-002**: 开发者能在 1 分钟内从工坊页找到目标场景下的产品并点击「打开」或「查看文档」。
- **SC-003**: 文章页至少包含 2 篇可阅读的全文种子文章，分类 Tab 筛选结果与标签一致。
- **SC-004**: 合作咨询表单在桌面与移动端均可完整填写并触发 mailto 提交。
- **SC-005**: 全站四页（首页、工坊、文章、合作咨询）导航、页脚、飞飞助手行为一致。
- **SC-006**: 站点静态构建成功，可部署至 zeyofly.com 域名。

## Assumptions

- Phase 1 不包含用户登录、鉴权、站内真实任务操作。
- 合作表单后端接入、飞飞助手真实 Agent 能力留待 Phase 2。
- 产品品牌拆分（English-Agent、Task-Agent 独立品牌页）留待 Phase 3。
- 英文内容框架预留，Phase 1 以中文为主。
- 微信公众号二维码使用设计稿占位样式，正式二维码图片后续替换。
- 隐私政策与服务条款链接在 Phase 1 可为占位（`#`）。
- 现有 NeuraVoxel 模块页（`/modules/*`）与文档页（`/docs/*`）保留，作为工坊 NeuraVoxel 产品的文档入口。

export type ArticleCategory = "thinking" | "practice" | "agent";
export type ArticleSeries = "ai-select" | "ai-augmentation";

/* 哲学层面：文章在哪个哲学分支上讨论 AI */
export type ArticleLens =
  | "ontology"
  | "epistemology"
  | "dialectics"
  | "historical-materialism"
  | "axiology"
  | "praxis";

/* 体例原型：该篇仿写的哲学文本体例 */
export type ArticleLensForm =
  | "thesis"
  | "shijianlun"
  | "maodunlun"
  | "class-analysis"
  | "rectification"
  | "anti-dogma"
  | "strategy"
  | "program"
  | "framework";

export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  series?: ArticleSeries;
  date: string;
  featured?: boolean;
}

export const categoryLabels: Record<ArticleCategory, string> = {
  thinking: "闭环思维",
  practice: "场景实践",
  agent: "Agent × 闭环",
};

export const seriesLabels: Record<ArticleSeries, string> = {
  "ai-select": "AI选",
  "ai-augmentation": "AI增强",
};

/* 阅读顺序：原理 → 认识 → 矛盾 → 历史 → 价值 → 行动 */
export const lensOrder: ArticleLens[] = [
  "ontology",
  "epistemology",
  "dialectics",
  "historical-materialism",
  "axiology",
  "praxis",
];

export const lensLabels: Record<ArticleLens, string> = {
  ontology: "本体论",
  epistemology: "认识论",
  dialectics: "辩证法·矛盾论",
  "historical-materialism": "历史唯物论",
  axiology: "价值论·人学",
  praxis: "实践哲学·战略",
};

export const lensDescriptions: Record<ArticleLens, string> = {
  ontology: "AI 是什么——概率性与确定性，是两种不同的存在方式",
  epistemology: "人如何正确认识 AI——认知来源于实践，反对教条与本本",
  dialectics: "冲突在哪——概率性生产力与确定性生产关系的对立与转化",
  "historical-materialism": "生产力变了，生产关系怎么变",
  axiology: "人是目的还是成本——增强而非替代",
  praxis: "组织与个人怎么办——方针、纠偏与落地框架",
};

export const lensFormLabels: Record<ArticleLensForm, string> = {
  thesis: "原理体",
  shijianlun: "实践论体",
  maodunlun: "矛盾论体",
  "class-analysis": "分层分析体",
  rectification: "纠偏文献体",
  "anti-dogma": "反教条体",
  strategy: "战略方针体",
  program: "纲领体",
  framework: "综合框架体",
};

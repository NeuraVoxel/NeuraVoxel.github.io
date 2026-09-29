export type ArticleCategory = "thinking" | "practice" | "agent";
export type ArticleSeries = "ai-select";

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
};

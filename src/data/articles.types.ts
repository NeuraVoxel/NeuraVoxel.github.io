export type ArticleCategory = "thinking" | "practice" | "agent";

export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  date: string;
  featured?: boolean;
}

export const categoryLabels: Record<ArticleCategory, string> = {
  thinking: "闭环思维",
  practice: "场景实践",
  agent: "Agent × 闭环",
};

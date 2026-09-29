import {
  categoryLabels,
  seriesLabels,
  type ArticleCategory,
  type ArticleSeries,
} from "../data/articles.types";

export { categoryLabels, seriesLabels, type ArticleCategory, type ArticleSeries };

export function formatArticleDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

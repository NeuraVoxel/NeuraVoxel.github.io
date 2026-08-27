import { categoryLabels, type ArticleCategory } from "../data/articles.types";

export { categoryLabels, type ArticleCategory };

export function formatArticleDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

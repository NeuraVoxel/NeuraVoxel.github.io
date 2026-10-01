import {
  categoryLabels,
  seriesLabels,
  seriesDescriptions,
  lensLabels,
  lensDescriptions,
  lensFormLabels,
  lensOrder,
  type ArticleCategory,
  type ArticleSeries,
  type ArticleLens,
  type ArticleLensForm,
} from "../data/articles.types";

export {
  categoryLabels,
  seriesLabels,
  seriesDescriptions,
  lensLabels,
  lensDescriptions,
  lensFormLabels,
  lensOrder,
  type ArticleCategory,
  type ArticleSeries,
  type ArticleLens,
  type ArticleLensForm,
};

export function formatArticleDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

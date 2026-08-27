import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "./locale";

export type ModuleEntry = CollectionEntry<"modules">;
export type DocEntry = CollectionEntry<"docs">;
export type ArticleEntry = CollectionEntry<"articles">;

const SECTION_ORDER = [
  "getting-started",
  "concepts",
  "dmp",
  "integrations",
  "releases",
] as const;

function localeId(locale: Locale, slug: string): string {
  return `${locale}/${slug}`;
}

function normalizeSlug(slug: string): string {
  return slug.endsWith(".md") ? slug.slice(0, -3) : slug;
}

function stripLocale(id: string, locale: Locale): string {
  const prefix = `${locale}/`;
  const raw = id.startsWith(prefix) ? id.slice(prefix.length) : id;
  return normalizeSlug(raw);
}

export async function getModulesForLocale(
  locale: Locale,
): Promise<ModuleEntry[]> {
  const all = await getCollection("modules", ({ id }) => {
    return id.startsWith(`${locale}/`);
  });

  return all.sort((a, b) => {
    if (a.data.role === "core" && b.data.role !== "core") return -1;
    if (b.data.role === "core" && a.data.role !== "core") return 1;
    const orderA = a.data.order ?? 999;
    const orderB = b.data.order ?? 999;
    if (orderA !== orderB) return orderA - orderB;
    return a.data.title.localeCompare(b.data.title, locale);
  });
}

export async function getModuleBySlug(
  locale: Locale,
  slug: string,
): Promise<ModuleEntry | undefined> {
  const modules = await getModulesForLocale(locale);
  return modules.find((entry) => stripLocale(entry.id, locale) === slug);
}

export async function getDocsForLocale(locale: Locale): Promise<DocEntry[]> {
  return getCollection("docs", ({ id, data }) => {
    return id.startsWith(`${locale}/`) && !data.draft;
  });
}

export async function getDocBySlug(
  locale: Locale,
  slug: string,
): Promise<DocEntry | undefined> {
  const docs = await getDocsForLocale(locale);
  return docs.find((entry) => stripLocale(entry.id, locale) === slug);
}

export type DocTreeSection = {
  section: (typeof SECTION_ORDER)[number];
  label: string;
  items: { slug: string; title: string; href: string }[];
};

export async function getDocTree(
  locale: Locale,
  prefix: string,
): Promise<DocTreeSection[]> {
  const docs = await getDocsForLocale(locale);
  const grouped = new Map<string, DocEntry[]>();

  for (const doc of docs) {
    const list = grouped.get(doc.data.section) ?? [];
    list.push(doc);
    grouped.set(doc.data.section, list);
  }

  return SECTION_ORDER.filter((section) => grouped.has(section)).map(
    (section) => {
      const items = (grouped.get(section) ?? [])
        .sort(
          (a, b) =>
            (a.data.order ?? 999) - (b.data.order ?? 999) ||
            a.data.title.localeCompare(b.data.title, locale),
        )
        .map((doc) => {
          const slug = stripLocale(doc.id, locale);
          return {
            slug,
            title: doc.data.title,
            href: `${prefix}/docs/${slug}`,
          };
        });

      return { section, label: section, items };
    },
  );
}

export function moduleSlug(entry: ModuleEntry, locale: Locale): string {
  return stripLocale(entry.id, locale);
}

export function docSlug(entry: DocEntry, locale: Locale): string {
  return stripLocale(entry.id, locale);
}

export async function getArticlesForLocale(
  locale: Locale,
): Promise<ArticleEntry[]> {
  const all = await getCollection("articles", ({ id, data }) => {
    return id.startsWith(`${locale}/`) && !data.draft;
  });

  return all.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
}

export async function getArticleBySlug(
  locale: Locale,
  slug: string,
): Promise<ArticleEntry | undefined> {
  const articles = await getArticlesForLocale(locale);
  return articles.find((entry) => stripLocale(entry.id, locale) === slug);
}

export function articleSlug(entry: ArticleEntry, locale: Locale): string {
  return stripLocale(entry.id, locale);
}

export { localeId, stripLocale };

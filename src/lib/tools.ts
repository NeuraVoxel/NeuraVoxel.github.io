import toolsEn from "../data/tools.en.json";
import toolsZh from "../data/tools.zh.json";
import type { ToolData, ToolsFile } from "../data/tools.types";
import type { Locale } from "./locale";

const FILES: Record<Locale, ToolsFile> = {
  zh: toolsZh as ToolsFile,
  en: toolsEn as ToolsFile,
};

export function getToolsForLocale(locale: Locale): ToolData[] {
  return [...FILES[locale].tools].sort(
    (a, b) => (a.order ?? 999) - (b.order ?? 999),
  );
}

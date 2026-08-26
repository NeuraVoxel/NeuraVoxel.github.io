import type { Locale } from "./locale";
import zh from "../i18n/zh.json";
import en from "../i18n/en.json";

const dictionaries = { zh, en } as const;

type Dictionary = typeof zh;

function resolveKey(dict: Dictionary, key: string): string | undefined {
  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, dict) as string | undefined;
}

export function useTranslations(locale: Locale) {
  const dict = dictionaries[locale];
  return (key: string): string => resolveKey(dict, key) ?? key;
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

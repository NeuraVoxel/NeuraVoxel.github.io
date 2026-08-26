export type Locale = "zh" | "en";

export function localePrefix(locale: Locale): string {
  return locale === "en" ? "/en" : "";
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "zh";
}

/** Toggle locale while preserving path suffix. */
export function alternateLocalePath(pathname: string, locale: Locale): string {
  if (locale === "zh") {
    if (pathname === "/") return "/en";
    return `/en${pathname}`;
  }

  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) {
    const stripped = pathname.slice(3);
    return stripped || "/";
  }

  return pathname;
}

export function href(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const prefix = localePrefix(locale);
  if (normalized === "/") return prefix || "/";
  return `${prefix}${normalized}`;
}

export function htmlLang(locale: Locale): string {
  return locale === "en" ? "en" : "zh-CN";
}

# i18n Contract: NeuraVoxel Portal

**Version**: 1.0.0  
**Date**: 2026-08-26  
**Feature**: 001-neuravoxel-portal

## Files

| File | Locale |
|------|--------|
| `src/i18n/zh.json` | Chinese (default) |
| `src/i18n/en.json` | English |

## Key Schema

Both files MUST contain identical key paths. Values MAY differ.

```json
{
  "meta": {
    "siteTitle": "string",
    "siteDescription": "string"
  },
  "nav": {
    "loop": "string",
    "scenes": "string",
    "modules": "string",
    "docs": "string",
    "langSwitch": "string",
    "skipToContent": "string"
  },
  "hero": {
    "eyebrow": "string",
    "claim": "string",
    "support": "string",
    "learnLoop": "string",
    "viewModules": "string",
    "readDocs": "string"
  },
  "loop": {
    "label": "string",
    "title": "string",
    "description": "string",
    "channelsLabel": "string",
    "download": "string",
    "api": "string",
    "dds": "string"
  },
  "scenes": {
    "label": "string",
    "title": "string",
    "description": "string",
    "relatedModules": "string"
  },
  "entries": {
    "label": "string",
    "title": "string",
    "description": "string",
    "modulesTitle": "string",
    "modulesDesc": "string",
    "docsTitle": "string",
    "docsDesc": "string"
  },
  "modules": {
    "pageTitle": "string",
    "pageDescription": "string",
    "downloads": "string",
    "links": "string",
    "integrations": "string",
    "viewDocs": "string"
  },
  "docs": {
    "pageTitle": "string",
    "pageDescription": "string",
    "onThisPage": "string"
  },
  "status": {
    "core": "string",
    "available": "string",
    "preview": "string",
    "planned": "string"
  },
  "footer": {
    "tagline": "string",
    "about": "string",
    "contact": "string",
    "copyright": "string"
  },
  "errors": {
    "notFoundTitle": "string",
    "notFoundMessage": "string",
    "backHome": "string",
    "missingTranslationTitle": "string",
    "missingTranslationMessage": "string",
    "viewChinese": "string"
  }
}
```

## Contract Tests

### I1: Key parity

```
Load zh.json and en.json
Expect: identical nested key sets
```

### I2: No empty required strings

```
For keys in nav, hero, errors
Expect: non-empty string in both locales
```

### I3: Runtime lookup

```
t('errors.notFoundTitle') for locale zh
Expect: Chinese localized string
```

## Usage

```typescript
// src/lib/i18n.ts
import zh from '../i18n/zh.json';
import en from '../i18n/en.json';

export function useTranslations(locale: 'zh' | 'en') {
  const dict = locale === 'en' ? en : zh;
  return (key: string) => /* dot-path lookup */;
}
```

Long-form content (modules, docs) MUST NOT live in i18n JSON.

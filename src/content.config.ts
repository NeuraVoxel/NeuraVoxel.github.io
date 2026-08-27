import { defineCollection, z } from "astro:content";

const downloadItem = z.object({
  label: z.string(),
  url: z.string(),
  type: z.string().optional(),
});

const externalLink = z.object({
  label: z.string(),
  url: z.string(),
  external: z.boolean().optional(),
});

const modules = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.enum(["core", "ring"]),
    status: z.enum(["available", "preview", "planned"]),
    order: z.number().optional(),
    downloads: z.array(downloadItem).optional(),
    links: z.array(externalLink).optional(),
    integrations: z
      .array(z.enum(["dataset_download", "service_api", "dds"]))
      .optional(),
    industries: z.array(z.string()).optional(),
    docAnchor: z.string().optional(),
  }),
});

const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    section: z.enum([
      "getting-started",
      "concepts",
      "dmp",
      "integrations",
      "releases",
    ]),
    order: z.number().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["thinking", "practice", "agent"]),
    date: z.coerce.date(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { modules, docs, articles };

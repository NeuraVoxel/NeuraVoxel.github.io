import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://zeyofly.com",
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
    },
  },
});

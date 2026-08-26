import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://neuravoxel.cn",
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
    },
  },
});

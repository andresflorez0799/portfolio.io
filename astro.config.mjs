import { defineConfig } from "astro/config";
import staticAdapter from "@astrojs/adapter-static";

export default defineConfig({
  site: "https://andresflorez0799.github.io/portfolio.io",
  base: "/portfolio.io/",
  adapter: staticAdapter(),
});

// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import { remarkReadingTime } from "./src/helpers/readingtime";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    mdx({
      remarkPlugins: [remarkReadingTime],
    }),
  ],
});

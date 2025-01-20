// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import { remarkReadingTime } from "./src/helpers/readingtime";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: 'https://haven-sayanjit.vercel.app/',

  integrations: [
    tailwind(),
    react(),
    mdx({
      remarkPlugins: [remarkReadingTime],
    }),
    sitemap(),
  ],

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
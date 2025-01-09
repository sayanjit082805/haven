// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import { remarkReadingTime } from "./src/helpers/readingtime";

import vercelStatic from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic({
      webAnalytics: {
          enabled: true,
      },
      // @ts-ignore
      speedInsights: {
          enabled: true,
      },
  }),
  integrations: [
    tailwind(),
    react(),
    mdx({
      remarkPlugins: [remarkReadingTime],
    }),
  ],
});

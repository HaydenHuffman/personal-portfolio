import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio-git-main-hayden-huffmans-projects.vercel.app/",
  integrations: [preact()]
});
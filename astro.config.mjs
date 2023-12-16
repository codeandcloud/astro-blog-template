import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
const config = {
  site: 'https://codeandcloud.netlify.app',
  integrations: [preact()],
};

// https://astro.build/config
export default defineConfig(config);

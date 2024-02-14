import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import netlify from "@astrojs/netlify/functions";
import { englishPosts, spanishPosts } from './src/schemas/posts';
import { members } from './src/schemas/members';
import { societies } from './src/schemas/societies';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [NetlifyCMS({
    config: {
      backend: {
        name: 'git-gateway',
        branch: 'main'
      },
      collections: [members, societies, englishPosts, spanishPosts]
    }
  }), react()],
  output: "server",
  adapter: netlify()
});
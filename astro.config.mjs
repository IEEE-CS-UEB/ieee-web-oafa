import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

import netlify from "@astrojs/netlify/functions";

import { englishPosts, spanishPosts } from './src/schemas/posts';

// https://astro.build/config
export default defineConfig({
    integrations: [NetlifyCMS({
    config: {
        backend: {
            name: 'git-gateway',
            branch: 'main'
        },
        collections: [
            englishPosts, spanishPosts
        ]
    }
    })],
    output: "server",
    adapter: netlify()
});
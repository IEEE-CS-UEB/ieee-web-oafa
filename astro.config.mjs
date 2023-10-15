import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
    integrations: [NetlifyCMS({
    config: {
        backend: {
            name: 'git-gateway',
            branch: 'main'
        },
        collections: [
            // Content collections
        ]
    }
    })],
    output: "server",
    adapter: netlify()
});
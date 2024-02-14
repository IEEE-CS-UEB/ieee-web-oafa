import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_fbbedcfc.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_e79d2476.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/generic_0b747fc8.mjs');
const _page1  = () => import('./chunks/admin-dashboard_a717f179.mjs');
const _page2  = () => import('./chunks/index_e279b43b.mjs');
const _page3  = () => import('./chunks/index_ffc9d43b.mjs');
const _page4  = () => import('./chunks/how-i-built-this_e98de739.mjs');
const _page5  = () => import('./chunks/posts_9ce7980a.mjs');
const _page6  = () => import('./chunks/index_be290d61.mjs');
const _page7  = () => import('./chunks/index_5707b6e8.mjs');
const _page8  = () => import('./chunks/index_fe37be94.mjs');
const _page9  = () => import('./chunks/hardware_63fc6ac0.mjs');
const _page10  = () => import('./chunks/software_6df8267d.mjs');
const _page11  = () => import('./chunks/index_556030a0.mjs');
const _page12  = () => import('./chunks/how-i-built-this_2c4d9f65.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["node_modules/astro-netlify-cms/admin-dashboard.astro", _page1],["src/pages/en/index.md", _page2],["src/pages/en/posts/index.md", _page3],["src/pages/en/posts/how-i-built-this.md", _page4],["src/pages/en/posts.md", _page5],["src/pages/es/index.md", _page6],["src/pages/es/societies/index.md", _page7],["src/pages/es/societies/discover/index.md", _page8],["src/pages/es/societies/discover/hardware.md", _page9],["src/pages/es/societies/discover/software.md", _page10],["src/pages/es/posts/index.md", _page11],["src/pages/es/posts/how-i-built-this.md", _page12]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };

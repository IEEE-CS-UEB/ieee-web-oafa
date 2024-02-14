import { e as createComponent, r as renderTemplate, i as renderComponent, u as unescapeHTML } from '../astro_e79d2476.mjs';
import 'clsx';
import { $ as $$Home } from './index_b58baf77.mjs';
import 'html-escaper';
import './hardware_ab0a2eec.mjs';
import 'svgo';
import 'react';
import 'fs';
/* empty css                              *//* empty css                              *//* empty css                           */import '@astrojs/internal-helpers/path';
/* empty css                           *//* empty css                           */
const html = "<p>Posts</p>";

				const frontmatter = {"layout":"../../layouts/Home.astro"};
				const file = "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/pages/en/posts.md";
				const url = "/en/posts";
				function rawContent() {
					return "Posts";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Home, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

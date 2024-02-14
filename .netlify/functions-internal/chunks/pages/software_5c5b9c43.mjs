import { e as createComponent, r as renderTemplate, i as renderComponent, u as unescapeHTML } from '../astro_e79d2476.mjs';
import 'clsx';
import { b as $$Discover } from './hardware_ab0a2eec.mjs';
import 'html-escaper';
import 'svgo';
import 'react';
import 'fs';
/* empty css                              *//* empty css                              */
const html = "";

				const frontmatter = {"title":["","Elige tu vocación"],"headerText":["Elige el tema que más te interese","Te llevaremos a la sociedad correcta"],"firstLayerTopics":[{"icon":"ph:robot","name":"Computer","desc":"lorem ipsum","href":"computer"},{"icon":"ph:robot","name":"IoT","desc":"lorem ipsum","href":"comunidad iot"}],"loadingText":"Cargando","letMeInText":["¿Ya tienes un capítulo en mente? Entonces","selecciónalo"],"layout":"../../../../layouts/Discover.astro"};
				const file = "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/pages/es/societies/discover/software.md";
				const url = "/es/societies/discover/software";
				function rawContent() {
					return "";
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

					return renderTemplate`${renderComponent(result, 'Layout', $$Discover, {
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

import { d as createAstro, e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute, j as renderSlot, u as unescapeHTML } from '../astro_e79d2476.mjs';
import 'clsx';
import { $ as $$EveryPage } from './hardware_ab0a2eec.mjs';
/* empty css                                      */
const $$Astro = createAstro();
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const { frontmatter } = Astro2.props;
  let langPathname = Astro2.url.pathname.length > 3 ? Astro2.url.pathname.match(/^\/\w+/)[0] : Astro2.url.pathname;
  langPathname.charAt[langPathname.length - 1] !== "/" ? langPathname += "/" : () => {
  };
  console.log(langPathname);
  return renderTemplate`${renderComponent($$result, "EveryPage", $$EveryPage, { "data-astro-cid-gvpn4u4b": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="Page" data-astro-cid-gvpn4u4b><div class="Img"${addAttribute(
    `background-image: url(${frontmatter.img});
          width: 100%;
          height: 300px;`,
    "style"
  )} data-astro-cid-gvpn4u4b></div><div id="Crumbs" data-astro-cid-gvpn4u4b><a${addAttribute(`${langPathname}posts?society=Computer`, "href")} data-astro-cid-gvpn4u4b>${frontmatter.society}</a><a${addAttribute(`${langPathname}posts?society=Computer&type=${frontmatter.type}s`, "href")} data-astro-cid-gvpn4u4b>${frontmatter.type}s</a><span data-astro-cid-gvpn4u4b>${frontmatter.title}</span></div><div id="Content" class="Container" data-astro-cid-gvpn4u4b><div id="Meta" data-astro-cid-gvpn4u4b><div class="Author Img" style="background-image: url(https://i.imgur.com/kW2Olq1.png);" data-astro-cid-gvpn4u4b></div><div class="Author Name" data-astro-cid-gvpn4u4b>${frontmatter.author} | ${frontmatter.society}</div><div class="Badge" style="
  background-color: var(--theme-main);" data-astro-cid-gvpn4u4b>Blog</div></div><h1 data-astro-cid-gvpn4u4b>${frontmatter.title}</h1>${renderSlot($$result2, $$slots["default"])}</div></div>` })}`;
}, "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/layouts/Post.astro", void 0);

const html$1 = "<h1 id=\"background\">Background</h1>\n<p>The development team that had been developing the page prior to my arrival had already made a lot of progress in building an application using the MERN stack (MongoDB, Express, React and Node.js). The product we had was fine. Personally I was not satisfied with the UI that had been built using ‘create-react-app’ (which we will call CRA’ the rest of the article to be brief). It had several small visual defects and was made with Material Design, the Google design system that has become my archenemy.</p>\n<p>Initially I wanted to leave everything as it was and alter the source code that was already there as little as possible, respect the work of the previous team and focus on changing only what was necessary to get this product out in the shortest possible time. However, when the MongoDB instance we had on Heroku ceased to exist due to the <a href=\"https://www.muycomputerpro.com/2022/08/26/heroku-eliminara-planes-gratuitos\">end of the Heroku free tier</a>, I took this as a sign and an opportunity. That’s when I decided to give the development of the page a different course.</p>\n<h1 id=\"plan\">Plan</h1>\n<p>Having challenged myself and drawing from who knows where the determination to create the website from scratch, I outlined some very simple guidelines to make sure that this development was fast, maintainable and, above all, fun.</p>\n<h2 id=\"ill-take-care-of-the-css\">I’ll take care of the CSS</h2>\n<p>Material Design and Bootstrap are, without a doubt, a tool that multiplies the productivity of a developer to the tenth power. However, as a web UI/UX designer, who loves websites with personality and whose Pinterest is full of beautiful interface designs, I abhor these two bookstores. Although it sounds ugly to say it (or rather, to write it), for me Material and Bootstrap are a cancer that has taken over the Moderna web.</p>\n<p>On the one hand, I’ve seen thousands of websites that do simple things like convert audio files, compress files or download YouTube videos making use of Material Design components inconsistently. They always feel like a mini speedrun made to earn a few extra lucas. Even if Material is more prevalent in the Android app space, for some reason it’s incredibly prevalent on the web (probably because of the popularity of Angular, which provides functional Material components). On the other hand, Bootstrap sites are the opposite side. A site made in Bootstrap looks, smells, feels. It is almost impossible to ignore the presence of Bootstrap on a site. The layout of the elements, the images with text (Cards), the forms, the animations of the buttons, the icons… All that generic design screams “Boostrap” in an undeniable and clear way; and those who develop websites with this library never try to disguise that they are using the library.</p>\n<p>To combat this, I chose to create and impose my own stylesheet on this project, thus leaving the development team with no option to opt for Material, Bootstrap or any other option that looks generic and takes away personality from websites. Creating a uniform website that sticks to the image of the university without the UI feeling like an improvisation put together with adhesive tape in a couple of days is very easy, because we already have a reference to the virtual classroom, an application with a very nice UI appearance and a decent UX. If you are interested to know more about Flora.css, the style sheet I built, you can read [the documentation](<a href=\"https://cfuen-dev\">https://cfuen-dev</a> .notion.site/Flora-Espa-ol-c2c0771d47894a0597c0e6e3afaa6d4a).</p>";

				const frontmatter$1 = {"society":"Computer","img":"https://images.unsplash.com/photo-1601212085833-34bad8c2d778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80","layout":"../../../layouts/Post.astro","title":"Build a CMS-Powered Blog in less than Two Weeks","type":"Blog","author":"Juan Castillo","description":"Learn how we built the blog you're reading this article in with $0 and a two-week deadline","publishDate":"16 May 2022"};
				const file$1 = "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/pages/en/posts/how-i-built-this.md";
				const url$1 = "/en/posts/how-i-built-this";
				function rawContent$1() {
					return "# Background\n\nThe development team that had been developing the page prior to my arrival had already made a lot of progress in building an application using the MERN stack (MongoDB, Express, React and Node.js). The product we had was fine. Personally I was not satisfied with the UI that had been built using 'create-react-app' (which we will call CRA' the rest of the article to be brief). It had several small visual defects and was made with Material Design, the Google design system that has become my archenemy.\n\nInitially I wanted to leave everything as it was and alter the source code that was already there as little as possible, respect the work of the previous team and focus on changing only what was necessary to get this product out in the shortest possible time. However, when the MongoDB instance we had on Heroku ceased to exist due to the [end of the Heroku free tier](https://www.muycomputerpro.com/2022/08/26/heroku-eliminara-planes-gratuitos ), I took this as a sign and an opportunity. That's when I decided to give the development of the page a different course.\n\n# Plan\n\nHaving challenged myself and drawing from who knows where the determination to create the website from scratch, I outlined some very simple guidelines to make sure that this development was fast, maintainable and, above all, fun.\n\n## I'll take care of the CSS\n\nMaterial Design and Bootstrap are, without a doubt, a tool that multiplies the productivity of a developer to the tenth power. However, as a web UI/UX designer, who loves websites with personality and whose Pinterest is full of beautiful interface designs, I abhor these two bookstores. Although it sounds ugly to say it (or rather, to write it), for me Material and Bootstrap are a cancer that has taken over the Moderna web.\n\nOn the one hand, I've seen thousands of websites that do simple things like convert audio files, compress files or download YouTube videos making use of Material Design components inconsistently. They always feel like a mini speedrun made to earn a few extra lucas. Even if Material is more prevalent in the Android app space, for some reason it's incredibly prevalent on the web (probably because of the popularity of Angular, which provides functional Material components). On the other hand, Bootstrap sites are the opposite side. A site made in Bootstrap looks, smells, feels. It is almost impossible to ignore the presence of Bootstrap on a site. The layout of the elements, the images with text (Cards), the forms, the animations of the buttons, the icons... All that generic design screams \"Boostrap\" in an undeniable and clear way; and those who develop websites with this library never try to disguise that they are using the library.\n\nTo combat this, I chose to create and impose my own stylesheet on this project, thus leaving the development team with no option to opt for Material, Bootstrap or any other option that looks generic and takes away personality from websites. Creating a uniform website that sticks to the image of the university without the UI feeling like an improvisation put together with adhesive tape in a couple of days is very easy, because we already have a reference to the virtual classroom, an application with a very nice UI appearance and a decent UX. If you are interested to know more about Flora.css, the style sheet I built, you can read [the documentation](https://cfuen-dev .notion.site/Flora-Espa-ol-c2c0771d47894a0597c0e6e3afaa6d4a).";
				}
				function compiledContent$1() {
					return html$1;
				}
				function getHeadings$1() {
					return [{"depth":1,"slug":"background","text":"Background"},{"depth":1,"slug":"plan","text":"Plan"},{"depth":2,"slug":"ill-take-care-of-the-css","text":"I’ll take care of the CSS"}];
				}

				const Content$1 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;

					return renderTemplate`${renderComponent(result, 'Layout', $$Post, {
								file: file$1,
								url: url$1,
								content,
								frontmatter: content,
								headings: getHeadings$1(),
								rawContent: rawContent$1,
								compiledContent: compiledContent$1,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html$1)}`
							})}`;
				});

const howIBuiltThis$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$1,
  compiledContent: compiledContent$1,
  default: Content$1,
  file: file$1,
  frontmatter: frontmatter$1,
  getHeadings: getHeadings$1,
  rawContent: rawContent$1,
  url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const html = "<h1 id=\"antecedentes\">Antecedentes</h1>\n<p>El equipo de desarrollo que había estado desarrollando la página previo a mi llegada ya había avanzado bastante en la construcción de una aplicación utilizando la pila MERN (MongoDB, Express, React y Node.js). El producto que teníamos estaba bien. Personalmente no estaba satisfecho con la UI que se había construido utilizando <code>create-react-app</code> (Que llamaremos CRA el resto del artículo pa’ ser breves). Tenía varios pequeños defectos visuales y estaba hecho con Material Design, el sistema de diseño de Google que se ha convertido en mi archienemigo.</p>\n<p>Inicialmente quería dejar todo como estaba y alterar el código fuente que ya estaba lo menos posible, respetar el trabajo del equipo anterior y centrarme en cambiar únicamente lo que hiciera falta para sacar este producto en el menor tiempo posible. Sin embargo, cuando la instancia de MongoDB que teníamos en Heroku dejó de existir debido al <a href=\"https://www.muycomputerpro.com/2022/08/26/heroku-eliminara-planes-gratuitos\">fin del tier gratis de Heroku</a>, tomé esto como una señal y una oportunidad. Fue ahí cuando decidí darle al desarrollo de la página un curso diferente.</p>\n<h1 id=\"el-plan\">El plan</h1>\n<p>Habiéndome retado a mí mismo y sacando de quién sabe donde la determinación para crear el sitio web desde cero, divisé unas muy simples pautas para asegurarme de que este desarrollo fuera rápido, mantenible y, sobre todo, divertido.</p>\n<h2 id=\"yo-me-encargaré-del-css\">Yo me encargaré del CSS</h2>\n<p>Material Design y Bootstrap son, sin duda alguna, una herramienta que multiplica la productividad de un desarrollador a la décima potencia. Sin embargo, como diseñador UI/UX web, que ama los sitios web con personalidad y cuyo pinterest está lleno de diseños de interfaz hermosos, aborrezco estas dos librerías. Aunque suene feo decirlo (O más bien, escribirlo), para mí Material y Bootstrap son un cáncer que se ha apoderado de la web moderna.</p>\n<p>Por un lado, he visto miles de sitios web que hacen cosas simples como convertir archivos de audio, comprimir archivos o descargar vídeos de YouTube haciendo uso de los componentes de Material Design de forma inconsistente. Siempre se sienten como un mini speedrun hecho para ganarse unas lucas extra. Aún si Material es más prevalente en el espacio de las aplicaciones de Android, por alguna razón es increíblemente prevalente en la web (Probablemente por la popularidad de Angular, que provee componentes de Material funcionales). Por otro lado, los sitios de Bootstrap son el lado opuesto. Un sitio hecho en Bootstrap se ve, se huele, se siente. Es casi imposible ignorar la presencia de Bootstrap en un sitio. La distribución de los elementos, las imágenes con texto (Cards), los formularios, las animaciones de los botones, los íconos… Todo ese diseño genérico grita “Boostrap” de una forma innegable y clara; y quienes desarrollan los sitios web con esta librería nunca se esfuerzan en disimular que están usando la librería.</p>\n<p>Para acombatir esto, elegí crear e imponer mi propia hoja de estilos en este proyecto, dejando así al equipo de desarrollo sin opción de optar por Material, Bootstrap o cualquier otra opción que se vea genérica y le quita personalidad a los sitios web. Crear un sitio web uniforme y que se apegara a la imagen de la universidad sin que la UI se sintiera como una improvisación juntada con cinta adhesiva en un par de días es muy fácil, pues ya tenemos de referente al aula virtual, una aplicación con un muy bonito aspecto de UI y con una UX decente. Si les interesa saber más sobre Flora.css, la hoja de estilos que construí, pueden leer <a href=\"https://cfuen-dev.notion.site/Flora-Espa-ol-c2c0771d47894a0597c0e6e3afaa6d4a\">la documentación</a>.</p>";

				const frontmatter = {"img":"https://images.unsplash.com/photo-1601212085833-34bad8c2d778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","title":"Construye un Blog con CMS (Como este) súper rápido","author":"Juan Castillo","description":"Te cuento cómo construimos el blog en el que lees este artículo sin un peso y en dos semanas","society":"Computer","type":"Blog","publishDate":"16 May 2022","layout":"../../../layouts/Post.astro"};
				const file = "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/pages/es/posts/how-i-built-this.md";
				const url = "/es/posts/how-i-built-this";
				function rawContent() {
					return "# Antecedentes\r\n\r\nEl equipo de desarrollo que había estado desarrollando la página previo a mi llegada ya había avanzado bastante en la construcción de una aplicación utilizando la pila MERN (MongoDB, Express, React y Node.js). El producto que teníamos estaba bien. Personalmente no estaba satisfecho con la UI que se había construido utilizando `create-react-app` (Que llamaremos CRA el resto del artículo pa' ser breves). Tenía varios pequeños defectos visuales y estaba hecho con Material Design, el sistema de diseño de Google que se ha convertido en mi archienemigo.\r\n\r\nInicialmente quería dejar todo como estaba y alterar el código fuente que ya estaba lo menos posible, respetar el trabajo del equipo anterior y centrarme en cambiar únicamente lo que hiciera falta para sacar este producto en el menor tiempo posible. Sin embargo, cuando la instancia de MongoDB que teníamos en Heroku dejó de existir debido al [fin del tier gratis de Heroku](https://www.muycomputerpro.com/2022/08/26/heroku-eliminara-planes-gratuitos), tomé esto como una señal y una oportunidad. Fue ahí cuando decidí darle al desarrollo de la página un curso diferente.\r\n\r\n# El plan\r\n\r\nHabiéndome retado a mí mismo y sacando de quién sabe donde la determinación para crear el sitio web desde cero, divisé unas muy simples pautas para asegurarme de que este desarrollo fuera rápido, mantenible y, sobre todo, divertido.\r\n\r\n## Yo me encargaré del CSS\r\n\r\nMaterial Design y Bootstrap son, sin duda alguna, una herramienta que multiplica la productividad de un desarrollador a la décima potencia. Sin embargo, como diseñador UI/UX web, que ama los sitios web con personalidad y cuyo pinterest está lleno de diseños de interfaz hermosos, aborrezco estas dos librerías. Aunque suene feo decirlo (O más bien, escribirlo), para mí Material y Bootstrap son un cáncer que se ha apoderado de la web moderna.\r\n\r\nPor un lado, he visto miles de sitios web que hacen cosas simples como convertir archivos de audio, comprimir archivos o descargar vídeos de YouTube haciendo uso de los componentes de Material Design de forma inconsistente. Siempre se sienten como un mini speedrun hecho para ganarse unas lucas extra. Aún si Material es más prevalente en el espacio de las aplicaciones de Android, por alguna razón es increíblemente prevalente en la web (Probablemente por la popularidad de Angular, que provee componentes de Material funcionales). Por otro lado, los sitios de Bootstrap son el lado opuesto. Un sitio hecho en Bootstrap se ve, se huele, se siente. Es casi imposible ignorar la presencia de Bootstrap en un sitio. La distribución de los elementos, las imágenes con texto (Cards), los formularios, las animaciones de los botones, los íconos... Todo ese diseño genérico grita \"Boostrap\" de una forma innegable y clara; y quienes desarrollan los sitios web con esta librería nunca se esfuerzan en disimular que están usando la librería.\r\n\r\nPara acombatir esto, elegí crear e imponer mi propia hoja de estilos en este proyecto, dejando así al equipo de desarrollo sin opción de optar por Material, Bootstrap o cualquier otra opción que se vea genérica y le quita personalidad a los sitios web. Crear un sitio web uniforme y que se apegara a la imagen de la universidad sin que la UI se sintiera como una improvisación juntada con cinta adhesiva en un par de días es muy fácil, pues ya tenemos de referente al aula virtual, una aplicación con un muy bonito aspecto de UI y con una UX decente. Si les interesa saber más sobre Flora.css, la hoja de estilos que construí, pueden leer [la documentación](https://cfuen-dev.notion.site/Flora-Espa-ol-c2c0771d47894a0597c0e6e3afaa6d4a).";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"antecedentes","text":"Antecedentes"},{"depth":1,"slug":"el-plan","text":"El plan"},{"depth":2,"slug":"yo-me-encargaré-del-css","text":"Yo me encargaré del CSS"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Post, {
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

const howIBuiltThis = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { howIBuiltThis as a, howIBuiltThis$1 as h };

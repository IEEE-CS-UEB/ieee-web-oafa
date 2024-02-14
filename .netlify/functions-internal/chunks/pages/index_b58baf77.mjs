import { d as createAstro, e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute, u as unescapeHTML, A as AstroError, k as UnknownContentCollectionError, l as renderUniqueStylesheet, n as renderScriptElement, o as createHeadAndContent } from '../astro_e79d2476.mjs';
import 'clsx';
import { $ as $$EveryPage, a as $$Icon, d as dissectPathname, b as $$Discover } from './hardware_ab0a2eec.mjs';
/* empty css                           */import { prependForwardSlash } from '@astrojs/internal-helpers/path';
/* empty css                           *//* empty css                           */import fs from 'fs';

const $$Astro$4 = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Home;
  const { frontmatter } = Astro2.props;
  let langPathname = Astro2.url.pathname.length > 3 ? Astro2.url.pathname.replace(/\/\w+$/, "") : Astro2.url.pathname;
  langPathname.charAt[langPathname.length - 1] !== "/" ? langPathname += "/" : () => {
  };
  console.log(langPathname);
  return renderTemplate`${renderComponent($$result, "EveryPage", $$EveryPage, { "data-astro-cid-k74dcqyt": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section id="Hero" data-astro-cid-k74dcqyt><div class="Left Container" data-astro-cid-k74dcqyt><h1 data-astro-cid-k74dcqyt>${frontmatter.heroTitle}</h1><!--Connect with like-minded individuals and develop your skills by working in exciting projects with El Bosque students. --><h3 data-astro-cid-k74dcqyt>${frontmatter.heroDesc}</h3><button class="Primary"${addAttribute(`window.location.href='${langPathname}societies/discover'`, "onclick")} data-astro-cid-k74dcqyt>Join today!</button></div><div class="Img" data-astro-cid-k74dcqyt><img alt="Estudiantes del capítulo Computer reunidos con nuevos integrantes" data-astro-cid-k74dcqyt></div></section>` })}`;
}, "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/layouts/Home.astro", void 0);

const html$5 = "<p>helloooo</p>";

				const frontmatter$5 = {"layout":"../../layouts/Home.astro","heroTitle":"Become a leader in engineering","heroDesc":"Connect with like-minded individuals and develop your skills by working in exciting projects with El Bosque students"};
				const file$5 = "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/pages/en/index.md";
				const url$5 = "/en";
				function rawContent$5() {
					return "helloooo";
				}
				function compiledContent$5() {
					return html$5;
				}
				function getHeadings$5() {
					return [];
				}

				const Content$5 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$5;
					content.file = file$5;
					content.url = url$5;

					return renderTemplate`${renderComponent(result, 'Layout', $$Home, {
								file: file$5,
								url: url$5,
								content,
								frontmatter: content,
								headings: getHeadings$5(),
								rawContent: rawContent$5,
								compiledContent: compiledContent$5,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html$5)}`
							})}`;
				});

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$5,
  compiledContent: compiledContent$5,
  default: Content$5,
  file: file$5,
  frontmatter: frontmatter$5,
  getHeadings: getHeadings$5,
  rawContent: rawContent$5,
  url: url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$ArticlePreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ArticlePreview;
  const { author, img, title, society, type, href, views = 0 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="Posts"><article class="Post Container"><div class="Img Notext"${addAttribute({ backgroundImage: `url(${img})` }, "style")}><img${addAttribute(`Image for article ${title} by ${views}`, "alt")}></div><div class="Post-user"><div class="Post-user-profilepicture">${renderComponent($$result, "Icon", $$Icon, { "name": "ph:user-circle", "width": "24px" })}</div><div class="Post-user-nickname"><span>${author}</span></div><span>|</span><div class="Post-chapter"><span>${society}</span></div><div class="Badge"${addAttribute({
    backgroundColor: type == "Blog" ? "#009999" : "var(--theme-main)"
  }, "style")}>${type}</div></div><div><div class="Cont"><div class="Post-caption"><a class="a"${addAttribute(`posts/${href}`, "href")}><h1>${title}</h1></a></div><div class="Post-w">${renderComponent($$result, "Icon", $$Icon, { "name": "ph:eyeglasses", "width": "24px", "style": { paddingRight: "5px" } })}<strong>${views ? views : 0}</strong></div></div></div></article></div>`;
}, "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/components/ArticlePreview/ArticlePreview.astro", void 0);

const $$Astro$2 = createAstro();
const $$Filter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Filter;
  const chapter = ["Computer", "IoT", "RAS", "SSIT", "IAS", "EMB"];
  const { text } = Astro2.props;
  let { fullAstroPathname } = dissectPathname(Astro2.url.pathname);
  return renderTemplate`${maybeRenderHead()}<div id="Filter" class="Container"${addAttribute(fullAstroPathname, "data-pathname")} data-astro-cid-nhxjo3iv><header data-astro-cid-nhxjo3iv><strong class="Post-caption" data-astro-cid-nhxjo3iv>${text[0]}</strong></header><div data-astro-cid-nhxjo3iv><div id="ChapterFilter" data-astro-cid-nhxjo3iv><h1 class="Subtitile" data-astro-cid-nhxjo3iv>${text[1]}</h1>${chapter.map((chaptername) => renderTemplate`<ul data-astro-cid-nhxjo3iv><li class="li" data-astro-cid-nhxjo3iv><a class="li"${addAttribute(chaptername, "data-chaptername")} href="" data-astro-cid-nhxjo3iv>${chaptername}</a></li></ul>`)}</div><div id="TypeFilter" data-astro-cid-nhxjo3iv><h1 class="Subtitile" data-astro-cid-nhxjo3iv>${text[2]}</h1><ul data-astro-cid-nhxjo3iv><li data-astro-cid-nhxjo3iv><a class="li"${addAttribute(text[3], "data-typename")} href="" data-astro-cid-nhxjo3iv>${text[3]}</a></li><li data-astro-cid-nhxjo3iv><a class="li"${addAttribute(text[4], "data-typename")} href="" data-astro-cid-nhxjo3iv>${text[4]}</a></li></ul></div></div></div>`;
}, "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/components/Filter.astro", void 0);

const $$Astro$1 = createAstro();
const $$News = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$News;
  const { lang } = dissectPathname(Astro2.url.pathname);
  const { filterText } = Astro2.props.frontmatter;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../pages/en/posts/how-i-built-this.md": () => import('./how-i-built-this_f4b06b51.mjs').then(n => n.h),"../../pages/en/posts/index.md": () => Promise.resolve().then(() => index$4),"../../pages/es/posts/how-i-built-this.md": () => import('./how-i-built-this_f4b06b51.mjs').then(n => n.a),"../../pages/es/posts/index.md": () => Promise.resolve().then(() => index)}), () => "../../pages/*/posts/*.md");
  const postsSourcePath = new RegExp(`/${lang}/`, "gm");
  const relevantPosts = allPosts.filter(
    (post) => post.file.match(postsSourcePath) && !post.url.match(/posts$/)
  );
  const articleIDs = JSON.parse(
    fs.readFileSync("src/data/article-ids.json").toString()
  );
  const namifyURL = (articleURL) => {
    return articleURL.replace(/(\/.+)(?=\/.+$)/gm, "").replace(/\//gm, "");
  };
  const getArticleID = (articleName) => {
    const requiredArticleName = namifyURL(articleName);
    return articleIDs[lang][requiredArticleName];
  };
  let postViewsData = await fetch(({}).REPLIT_DB_URL, {
    method: "GET",
    headers: { "content-type": "application/json" }
  });
  const postViews = await postViewsData.json();
  const getPostViewsFromID = (id) => {
    if (postViews || postViews?.find) {
      return postViews.find((views) => views.id === id).article_views;
    } else {
      return "[Error]";
    }
  };
  return renderTemplate`${renderComponent($$result, "EveryPage", $$EveryPage, { "data-astro-cid-gsv4pcuc": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="News" data-astro-cid-gsv4pcuc><div${addAttribute({
    position: "fixed",
    width: "25%"
  }, "style")} data-astro-cid-gsv4pcuc>${renderComponent($$result2, "Filter", $$Filter, { "text": filterText, "data-astro-cid-gsv4pcuc": true })}</div><div class="post" data-astro-cid-gsv4pcuc>${relevantPosts.map(
    ({ frontmatter: { author, img, title, society, type }, url }) => renderTemplate`${renderComponent($$result2, "Post", $$ArticlePreview, { ...{
      author,
      img,
      title,
      society,
      type,
      href: namifyURL(url),
      views: getPostViewsFromID(getArticleID(url))
    }, "data-astro-cid-gsv4pcuc": true })}`
  )}</div></div>` })}`;
}, "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/layouts/News/News.astro", void 0);

const html$4 = "";

				const frontmatter$4 = {"layout":"../../../layouts/News/News.astro","filterText":["Filter","By chapter","By type","News","Blog"]};
				const file$4 = "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/pages/en/posts/index.md";
				const url$4 = "/en/posts";
				function rawContent$4() {
					return "";
				}
				function compiledContent$4() {
					return html$4;
				}
				function getHeadings$4() {
					return [];
				}

				const Content$4 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$4;
					content.file = file$4;
					content.url = url$4;

					return renderTemplate`${renderComponent(result, 'Layout', $$News, {
								file: file$4,
								url: url$4,
								content,
								frontmatter: content,
								headings: getHeadings$4(),
								rawContent: rawContent$4,
								compiledContent: compiledContent$4,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html$4)}`
							})}`;
				});

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$4,
  compiledContent: compiledContent$4,
  default: Content$4,
  file: file$4,
  frontmatter: frontmatter$4,
  getHeadings: getHeadings$4,
  rawContent: rawContent$4,
  url: url$4
}, Symbol.toStringTag, { value: 'Module' }));

const html$3 = "";

				const frontmatter$3 = {"layout":"../../layouts/Home.astro","heroTitle":"Conviértete en un líder ingeniero","heroDesc":"Conecta con gente con tus mismos intereses y desarrolla tus habilidades en proyectos estudiantiles con estudiantes de El Bosque"};
				const file$3 = "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/pages/es/index.md";
				const url$3 = "/es";
				function rawContent$3() {
					return "";
				}
				function compiledContent$3() {
					return html$3;
				}
				function getHeadings$3() {
					return [];
				}

				const Content$3 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3;
					content.file = file$3;
					content.url = url$3;

					return renderTemplate`${renderComponent(result, 'Layout', $$Home, {
								file: file$3,
								url: url$3,
								content,
								frontmatter: content,
								headings: getHeadings$3(),
								rawContent: rawContent$3,
								compiledContent: compiledContent$3,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html$3)}`
							})}`;
				});

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$3,
  compiledContent: compiledContent$3,
  default: Content$3,
  file: file$3,
  frontmatter: frontmatter$3,
  getHeadings: getHeadings$3,
  rawContent: rawContent$3,
  url: url$3
}, Symbol.toStringTag, { value: 'Module' }));

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro = createAstro();
const $$Societies = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Societies;
  Astro2.props;
  let { fullAstroPathname, langPathname, lang } = dissectPathname(
    Astro2.url.pathname
  );
  const societies = getCollection("societies");
  const engineers = getCollection("members");
  const getUniques = (arr, prop) => {
    let uniqueBuffer = [];
    let uniqueResult = [];
    arr.forEach((arrItem) => {
      uniqueBuffer.find((buffer) => buffer === arrItem[prop]) == void 0 ? uniqueBuffer.push(arrItem[prop]) : uniqueBuffer.push(null);
    });
    uniqueBuffer.forEach((buffer) => {
      buffer === null ? null : uniqueResult.push(arr[uniqueBuffer.indexOf(buffer)]);
    });
    return uniqueResult;
  };
  let engineersBySociety = {};
  getUniques(engineers, "society").forEach((e) => {
    const societyName = societies[e.society].name.toLowerCase();
    engineersBySociety[societyName] = [];
  });
  engineers.forEach((e) => {
    engineersBySociety[societies[e.society].name.toLowerCase()].push(e);
  });
  return renderTemplate`${renderComponent($$result, "EveryPage", $$EveryPage, { "data-astro-cid-vxasy2kw": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="Page"${addAttribute(lang, "data-lang")} data-astro-cid-vxasy2kw><h2 data-astro-cid-vxasy2kw>Explore Societies</h2><div id="Societies" data-astro-cid-vxasy2kw>${societies.map((s, i) => renderTemplate`<button${addAttribute(i, "data-society-id")} class="Society Card Container" data-astro-cid-vxasy2kw><div class="Img Notext"${addAttribute(`background-image:url(${s.img}); width:225px; height:160px;`, "style")} data-astro-cid-vxasy2kw><img data-astro-cid-vxasy2kw></div><h2 data-astro-cid-vxasy2kw>${s.name}</h2><div class="Info" data-astro-cid-vxasy2kw>${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:users", "width": "20px", "data-astro-cid-vxasy2kw": true })}<span data-astro-cid-vxasy2kw>${engineersBySociety[s.name.toLowerCase()].length}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:newspaper", "width": "20px", "data-astro-cid-vxasy2kw": true })}<span data-astro-cid-vxasy2kw>[Error]</span></div></button>`)}<div id="Society" class="Hidden Container" style="padding: 0; position: relative; padding-bottom: 20px; overflow: clip; margin-top: 30px;" data-astro-cid-vxasy2kw><button id="Close" data-astro-cid-vxasy2kw>${renderComponent($$result2, "Icon", $$Icon, { "name": "ph:x-bold", "color": "white", "style": "", "width": "24px", "data-astro-cid-vxasy2kw": true })}</button><div class="Img Notext" style="
          background-image: url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
          width: 100%;
          height: 200px;" data-astro-cid-vxasy2kw><img alt="XD" data-astro-cid-vxasy2kw></div><header style="position: relative; border-bottom: 1px solid var(--theme-stroke); margin-bottom: 15px;" data-astro-cid-vxasy2kw><div class="Img Notext" style="" data-astro-cid-vxasy2kw><img alt="Loguito" data-astro-cid-vxasy2kw></div><!--<Icon
            name="ph:user-circle"
            width="100px"
            style="position: absolute; top: -30px;"
          />--><h1 id="Name" data-astro-cid-vxasy2kw></h1></header><div id="Info" class="Container" data-astro-cid-vxasy2kw><div class="Options" data-astro-cid-vxasy2kw><button data-info="Description" data-astro-cid-vxasy2kw> Desc.</button><button data-info="Mission" data-astro-cid-vxasy2kw> Mission</button><button data-info="Vision" data-astro-cid-vxasy2kw> Vision</button></div><div id="Description" class="Text" data-astro-cid-vxasy2kw>INFO BACANA</div><div id="Mission" class="Text Hidden" data-astro-cid-vxasy2kw>INFO BACANA</div><div id="Vision" class="Text Hidden" data-astro-cid-vxasy2kw>INFO BACANA</div></div><div id="Engineers" data-astro-cid-vxasy2kw></div></div></div></div>` })}`;
}, "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/layouts/Societies.astro", void 0);

const html$2 = "";

				const frontmatter$2 = {"layout":"../../../layouts/Societies.astro"};
				const file$2 = "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/pages/es/societies/index.md";
				const url$2 = "/es/societies";
				function rawContent$2() {
					return "";
				}
				function compiledContent$2() {
					return html$2;
				}
				function getHeadings$2() {
					return [];
				}

				const Content$2 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2;
					content.file = file$2;
					content.url = url$2;

					return renderTemplate`${renderComponent(result, 'Layout', $$Societies, {
								file: file$2,
								url: url$2,
								content,
								frontmatter: content,
								headings: getHeadings$2(),
								rawContent: rawContent$2,
								compiledContent: compiledContent$2,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html$2)}`
							})}`;
				});

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content: Content$2,
  compiledContent: compiledContent$2,
  default: Content$2,
  file: file$2,
  frontmatter: frontmatter$2,
  getHeadings: getHeadings$2,
  rawContent: rawContent$2,
  url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const html$1 = "";

				const frontmatter$1 = {"title":["","Elige tu vocación"],"headerText":["Elige el tema que más te interese","Te llevaremos a la sociedad correcta"],"firstLayerTopics":[{"icon":"ph:code-bold","name":"Software","desc":"Creación de herramientas digitales utilizables en la Web, Móvil, Escritorio, etc.","href":"discover/software"},{"icon":"ph:flag-bold","name":"Labor Social","desc":"Trabajar con y para comunidades para lograr un impacto ético y sostenible","href":"ssit"},{"icon":"ph:gear-six-bold","name":"Hardware","desc":"Dar vida a dispositivos electrónicos a través del ensamblaje de componentes físicos","href":"discover/hardware"}],"loadingText":"Cargando","letMeInText":["¿Ya tienes un capítulo en mente? Entonces","selecciónalo"],"layout":"../../../../layouts/Discover.astro"};
				const file$1 = "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/pages/es/societies/discover/index.md";
				const url$1 = "/es/societies/discover";
				function rawContent$1() {
					return "";
				}
				function compiledContent$1() {
					return html$1;
				}
				function getHeadings$1() {
					return [];
				}

				const Content$1 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;

					return renderTemplate`${renderComponent(result, 'Layout', $$Discover, {
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

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

const html = "";

				const frontmatter = {"layout":"../../../layouts/News/News.astro","filterText":["Filtrar","Por capítulo","Por tipo","Noticias","Blog"]};
				const file = "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/pages/es/posts/index.md";
				const url = "/es/posts";
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

					return renderTemplate`${renderComponent(result, 'Layout', $$News, {
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

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { $$Home as $, index$4 as a, index$3 as b, index$2 as c, index$1 as d, index as e, index$5 as i };

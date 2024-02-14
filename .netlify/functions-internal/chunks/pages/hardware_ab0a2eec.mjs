import { d as createAstro, e as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, s as spreadAttributes, u as unescapeHTML, i as renderComponent, F as Fragment, f as renderHead, j as renderSlot } from '../astro_e79d2476.mjs';
import 'clsx';
import { optimize } from 'svgo';
import 'react';
import 'fs';
/* empty css                              *//* empty css                              */
const $$Astro$7 = createAstro();
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, permalink } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/ueb_favicon_ieee.ico"><link rel="stylesheet" href="https://ieee-cs-ueb.github.io/Flora/src/css/flora.css"><!-- Primary Meta Tags --><title>IEEE Unbosque - ${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(permalink, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image" content="https://astro.build/social.png?v=1"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(permalink, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image" content="https://astro.build/social.png?v=1"><!-- Fonts --><link rel="preconnect" href="https://fonts.gstatic.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans:wght@400;700&display=swap">`;
}, "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/components/BaseHead.astro", void 0);

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$6 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$5 = createAstro();
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}</svg>`;
}, "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$4 = createAstro();
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$3 = createAstro();
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>${title ? renderTemplate`<title>${title}</title>` : ""}<use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use></svg>`;
}, "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

function Dropdown({ id, wrapsMarginTop, optionsTop, hover = false, wraps, options }) {
  if (hover) {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "Dropdown",
        onMouseEnter: () => {
          document.getElementById(`${id}_Options`).classList.toggle("Hidden");
        }
      },
      /* @__PURE__ */ React.createElement("div", { id, style: { marginTop: wrapsMarginTop } }, wraps),
      /* @__PURE__ */ React.createElement("div", { id: `${id}_Options`, className: "Options Container Hidden", style: { top: optionsTop } }, options)
    );
  } else {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "Dropdown",
        onClick: () => {
          document.getElementById(`${id}_Options`).classList.toggle("Hidden");
        }
      },
      /* @__PURE__ */ React.createElement("div", { id, style: { marginTop: wrapsMarginTop } }, wraps),
      /* @__PURE__ */ React.createElement("div", { id: `${id}_Options`, className: "Options Container Hidden", style: { top: optionsTop } }, options)
    );
  }
}

const dissectPathname = (fullAstroPathname) => {
  const langPathname = fullAstroPathname.toString().length > 3 ? fullAstroPathname.toString().replace(/(?<!^)(\/\w+)+\/\w+$|(?<!^)\/\w+$/gm, "") : fullAstroPathname;
  const lang = langPathname.toString().replace(/(?<=^\/\w{2}).+/gm, "").replace(/\//gm, "");
  return { fullAstroPathname, langPathname, lang };
};

const $$Astro$2 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Nav;
  const { links } = Astro2.props;
  let { fullAstroPathname, langPathname, lang } = dissectPathname(Astro2.url.pathname);
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-dmqpwcec><div id="Logo" class="Noclick" data-astro-cid-dmqpwcec></div><ul data-astro-cid-dmqpwcec>${links.map(({ name, href }) => renderTemplate`<li${addAttribute(
    href === fullAstroPathname.replace(/^\/\w\w\/|\/$|\/\w+$/gm, "") ? "Here" : "",
    "class"
  )} data-astro-cid-dmqpwcec><a${addAttribute(`/${lang}/${href}`, "href")} data-astro-cid-dmqpwcec>${name}</a></li>`)}</ul><ul data-astro-cid-dmqpwcec><li style="padding: 7.5px 0" data-astro-cid-dmqpwcec>${renderComponent($$result, "Dropdown", Dropdown, { "client:load": true, "id": "Lang", "hover": false, "wrapsMarginTop": "10px", "optionsTop": "53px", "client:component-hydration": "load", "client:component-path": "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/components/Dropdown", "client:component-export": "default", "data-astro-cid-dmqpwcec": true }, { "options": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "options" }, { "default": ($$result3) => renderTemplate`${unescapeHTML(`
          <option value="en">English (US)</option>
          <option value="es">Espa\xF1ol (MX)</option>
          <option value="pt">Portug. (BR)</option>
		`)}` })}`, "wraps": ($$result2) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "slot": "wraps", "name": "ph:translate", "width": "30px", "data-astro-cid-dmqpwcec": true })}` })}</li><li style="padding: 15.5px 0; padding-bottom: 9.5px" data-astro-cid-dmqpwcec>${renderComponent($$result, "Icon", $$Icon, { "slot": "wraps", "name": "ph:moon", "width": "30px", "data-astro-cid-dmqpwcec": true })}</li></ul></nav>`;
}, "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/components/Nav.astro", void 0);

const SITE = {
  title: "IEEE UEB"
};

const $$Astro$1 = createAstro();
const $$EveryPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EveryPage;
  let { title } = SITE;
  let description = "The perfect starter for your perfect blog.";
  let permalink = "https://example.com/";
  return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "permalink": permalink })}${renderHead()}</head><body class="ieee-light">${renderComponent($$result, "Nav", $$Nav, { "links": [
    { name: "P\xE1gina Principal", href: "" },
    { name: "Cap\xEDtulos", href: "societies" },
    { name: "Blog / Noticias", href: "posts" }
  ] })}${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/layouts/EveryPage.astro", void 0);

const $$Astro = createAstro();
const $$Discover = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Discover;
  const { frontmatter } = Astro2.props;
  let { fullAstroPathname, langPathname } = dissectPathname(Astro2.url.pathname);
  return renderTemplate`${renderComponent($$result, "EveryPage", $$EveryPage, { "data-astro-cid-tg37uy5n": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="Page" data-astro-cid-tg37uy5n><header data-astro-cid-tg37uy5n><h1 data-astro-cid-tg37uy5n>${frontmatter.title[1]}</h1><!-- Choose your calling --><span data-astro-cid-tg37uy5n>${frontmatter.headerText[0]}</span><!-- Pick the topic that interests you the most --><span style="opacity: 60%;" data-astro-cid-tg37uy5n>${frontmatter.headerText[1]}</span><!-- We'll take you to the right society --></header><section id="Interests" data-astro-cid-tg37uy5n><div id="Base" data-astro-cid-tg37uy5n>${frontmatter.firstLayerTopics.map((topic) => renderTemplate`<button class="InterestCard"${addAttribute(topic.href.match("discover/") ? `${langPathname}/societies/${topic.href}` : `${langPathname}/societies?s=${topic.href}`, "data-href")} data-astro-cid-tg37uy5n><header class="Container" data-astro-cid-tg37uy5n>${renderComponent($$result2, "Icon", $$Icon, { "width": "50px", "name": topic.icon, "data-astro-cid-tg37uy5n": true })}<span data-astro-cid-tg37uy5n>${topic.name}</span><!-- Software --></header><span class="Container" data-astro-cid-tg37uy5n>${topic.desc}</span><!-- Creating digital tools that can be used on the Web, Mobile, Desktop
            and other systems --><div data-astro-cid-tg37uy5n>${frontmatter.loadingText}... ${renderComponent($$result2, "Icon", $$Icon, { "width": "50px", "name": "ph:spinner-bold", "data-astro-cid-tg37uy5n": true })}</div></button>`)}</div></section><footer data-astro-cid-tg37uy5n>${frontmatter.letMeInText[0]}<a${addAttribute(`${langPathname}/societies`, "href")} data-astro-cid-tg37uy5n>${frontmatter.letMeInText[1]}</a></footer></div>` })}`;
}, "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/layouts/Discover.astro", void 0);

const html = "";

				const frontmatter = {"title":["","Elige tu vocación"],"headerText":["Elige el tema que más te interese","Te llevaremos a la sociedad correcta"],"firstLayerTopics":[{"icon":"ph:factory","name":"Industrial","desc":"Tecnologías industriales que mejoran a los sistemas automatizados","href":"ias"},{"icon":"ph:heartbeat","name":"Biomedicina","desc":"Desarrollo de soluciones tecnológicas para la industria médica","href":"embs"},{"icon":"ph:robot","name":"Robótica","desc":"Creación de robots y sistemas automatizados","href":"ras"},{"icon":"ph:wifi-high","name":"IoT","desc":"Domótica y sistemas monitoreados por Wi-Fi","href":"comunidad_iot"}],"loadingText":"Cargando","letMeInText":["¿Ya tienes un capítulo en mente? Entonces","selecciónalo"],"layout":"../../../../layouts/Discover.astro"};
				const file = "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/src/pages/es/societies/discover/hardware.md";
				const url = "/es/societies/discover/hardware";
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

const hardware = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { $$EveryPage as $, $$Icon as a, $$Discover as b, dissectPathname as d, hardware as h };

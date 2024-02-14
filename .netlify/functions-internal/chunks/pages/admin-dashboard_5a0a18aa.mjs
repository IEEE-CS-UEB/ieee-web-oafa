import { d as createAstro, e as createComponent, r as renderTemplate, f as renderHead } from '../astro_e79d2476.mjs';
import 'clsx';
/* empty css                                     */import 'html-escaper';

const $$Astro = createAstro();
const $$AdminDashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminDashboard;
  return renderTemplate`<html lang="en"><head><title>Content Manager</title><meta name="description" content="Admin dashboard for managing website content">${renderHead()}</head><body></body></html>`;
}, "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/node_modules/astro-netlify-cms/admin-dashboard.astro", void 0);

const $$file = "C:/Users/cfuen/Programming/Code/IEEE/ieee-ueb-web/astro_oafa/node_modules/astro-netlify-cms/admin-dashboard.astro";
const $$url = undefined;

export { $$AdminDashboard as default, $$file as file, $$url as url };

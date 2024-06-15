/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, f as createAstro, g as renderComponent, h as renderHead } from '../astro_BkFkbLia.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$5 = createAstro();
const $$HeaderButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HeaderButton;
  const { url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="flex-row justify-center text-white cursor-pointer hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-2.5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-100 scale-90 gap-x-2 opacity-70 hover:opacity-100"> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"])} ${renderSlot($$result, $$slots["after"])} </a>`;
}, "C:/Users/isabe/Desktop/WSAstro/astro-space/src/components/HeaderButton.astro", void 0);

const $$Astro$4 = createAstro();
const $$AboutIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AboutIcon;
  return renderTemplate`${maybeRenderHead()}<svg slot="before" xmlns="http://www.w3.org/2000/svg" width="44" height="44"${addAttribute(Astro2.props.class, "class")} viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 9h.01"></path> <path d="M11 12h1v4h1"></path> <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path> </svg>`;
}, "C:/Users/isabe/Desktop/WSAstro/astro-space/src/icons/AboutIcon.astro", void 0);

const $$Astro$3 = createAstro();
const $$ClockIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ClockIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" slot="after"${addAttribute(Astro2.props.class, "class")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20.984 12.535a9 9 0 1 0 -8.431 8.448"></path><path d="M12 7v5l3 3"></path><path d="M19 16v6"></path><path d="M22 19l-3 3l-3 -3"></path></svg>`;
}, "C:/Users/isabe/Desktop/WSAstro/astro-space/src/icons/ClockIcon.astro", void 0);

const $$Astro$2 = createAstro();
const $$RocketIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RocketIcon;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44"${addAttribute(Astro2.props.class, "class")} slot="before" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-rocket"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>`;
}, "C:/Users/isabe/Desktop/WSAstro/astro-space/src/icons/RocketIcon.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  console.log("js");
  return renderTemplate`${maybeRenderHead()}<header class="py-8 px-4 mx-auto max-w-xl lg:py-16 lg:px-6"> <div class="mx-auto text-center mb-8 lg:mb-16"> <h2 class="text-5xl mb-4 tracking-tight font-extrabold text-white">
Spacex Launches 🚀
</h2> <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
All the information about SpaceX launches
</p> </div> <nav class="flex flex-col items-center justify-between w-full text-center md:flex-row"> ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "url": "/" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "RocketIcon", $$RocketIcon, {})} Todos los lanzamientos` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "url": "about" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutIcon", $$AboutIcon, {})} Sobre el proyecto
` })} ${renderComponent($$result, "HeaderButton", $$HeaderButton, { "url": "newest" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ClockIcon", $$ClockIcon, {})}Los más recientes ` })} </nav> </header>`;
}, "C:/Users/isabe/Desktop/WSAstro/astro-space/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/isabe/Desktop/WSAstro/astro-space/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-gray-900 min-h-screen pb-32"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-5xl px-4 m-auto">${renderSlot($$result, $$slots["default"])}</main>  </body></html>`;
}, "C:/Users/isabe/Desktop/WSAstro/astro-space/src/layouts/Layout.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Not Found" }, { "default": ($$result2) => renderTemplate`Error 404: Página no encontrada` })}`;
}, "C:/Users/isabe/Desktop/WSAstro/astro-space/src/pages/404.astro", void 0);

const $$file = "C:/Users/isabe/Desktop/WSAstro/astro-space/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };

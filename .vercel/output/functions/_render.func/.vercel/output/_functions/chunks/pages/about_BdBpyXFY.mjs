/* empty css                          */
import { c as createComponent, r as renderTemplate, g as renderComponent, f as createAstro, m as maybeRenderHead } from '../astro_BkFkbLia.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_D8a3x4Tg.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About the project" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8"> <h1 class="text-4xl text-white font-bold mb-4">About the project</h1> <p class="text-lg text-gray-300">
The Spacex Launches project is an Astro Project under development.
</p> </section> ` })}`;
}, "C:/Users/isabe/Desktop/WSAstro/astro-space/src/pages/about.astro", void 0);

const $$file = "C:/Users/isabe/Desktop/WSAstro/astro-space/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };

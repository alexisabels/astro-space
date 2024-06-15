/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as createAstro, g as renderComponent } from '../astro_BkFkbLia.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from './404_D8a3x4Tg.mjs';
import 'clsx';
import { g as getLatestLaunches } from './_id__BweILU97.mjs';

const $$Astro = createAstro();
const $$CardLaunch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardLaunch;
  const { success, img, id, details, name, flightNumber } = Astro2.props;
  const successText = success ? "\xC9xito" : "Fracaso";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/launch/${id}`, "href")} class="rounded-lg border shadow-md bg-gray-800 border-gray-700
  hover:scale-105 hover:bg-gray-700 hover:border-gray-500 transition flex flex-col"> <picture class="flex justify-center"> <img class="rounded-lg pt-4 h-52 w-52"${addAttribute(img, "src")}${addAttribute(`Patch for launch ${id}`, "alt")}> </picture> <header class="p-4 flex-grow"> <span${addAttribute(`text-xs font-semibold px-2.5 py-0.5 rounded ${success ? "bg-green-200 text-green-900" : "bg-red-200 text-red-900"}`, "class")}> ${successText} </span> <h2 class="my-2 text-2xl font-bold tracking-tight text-white">
Flight #${flightNumber} - ${name} </h2> <p class="font-light text-gray-400"> ${details != null && details?.length > 100 ? details.slice(0, 100) + "..." : details} </p> </header> </a>`;
}, "C:/Users/isabe/Desktop/WSAstro/astro-space/src/components/CardLaunch.astro", void 0);

const $$Launches = createComponent(async ($$result, $$props, $$slots) => {
  const launches = await getLatestLaunches();
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${launches.map(
    ({ id, links, details, flight_number: flightNumber, success, name }) => renderTemplate`${renderComponent($$result, "CardLaunch", $$CardLaunch, { "name": name, "id": id, "img": links.patch.small, "details": details, "flightNumber": flightNumber, "success": success })}`
  )} </div>`;
}, "C:/Users/isabe/Desktop/WSAstro/astro-space/src/components/Launches.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spacex Launches" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Launches", $$Launches, {})} ` })}`;
}, "C:/Users/isabe/Desktop/WSAstro/astro-space/src/pages/index.astro", void 0);

const $$file = "C:/Users/isabe/Desktop/WSAstro/astro-space/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

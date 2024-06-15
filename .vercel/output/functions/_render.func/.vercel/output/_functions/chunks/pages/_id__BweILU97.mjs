/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as createAstro, g as renderComponent } from '../astro_BkFkbLia.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_D8a3x4Tg.mjs';

const $$Astro$1 = createAstro();
const $$YoutubeEmbed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$YoutubeEmbed;
  let { videoCode } = Astro2.props;
  return renderTemplate`${videoCode ? renderTemplate`${maybeRenderHead()}<iframe class="w-full aspect-video rounded"${addAttribute(`https://www.youtube.com/embed/${videoCode}`, "src")} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : renderTemplate`<div>Video not available</div>`}`;
}, "C:/Users/isabe/Desktop/WSAstro/astro-space/src/components/YoutubeEmbed.astro", void 0);

const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc"
        },
        limit: 12
      }
    })
  });
  const { docs: launches } = await res.json();
  return launches;
};
const getLaunchById = async ({ id }) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = await res.json();
  return launch;
};

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let launch;
  if (id) {
    launch = await getLaunchById({ id });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Lanzamiento ${id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="flex gap-y-4 flex-col"> <img class="w-52 h-auto"${addAttribute(launch?.links?.patch.small, "src")}${addAttribute(launch?.name, "alt")}> <h2 class="text-4xl text-white font-bold">
Flight #${launch?.flight_number} </h2> <p class="text-lg">${launch?.links.flickr.original}</p> <p class="text-lg">${launch?.details}</p> ${renderComponent($$result2, "YoutubeEmbed", $$YoutubeEmbed, { "videoCode": launch?.links.youtube_id })} </article> ` })}`;
}, "C:/Users/isabe/Desktop/WSAstro/astro-space/src/pages/launch/[id].astro", void 0);

const $$file = "C:/Users/isabe/Desktop/WSAstro/astro-space/src/pages/launch/[id].astro";
const $$url = "/launch/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_ as _, getLatestLaunches as g };

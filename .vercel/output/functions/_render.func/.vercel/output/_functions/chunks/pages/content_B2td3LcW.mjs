/* empty css                          */
import { c as createComponent, r as renderTemplate, g as renderComponent, u as unescapeHTML } from '../astro_BkFkbLia.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_D8a3x4Tg.mjs';

const html = "<h1 id=\"esto-es-un-ejemplo-de-artículo\">Esto es un ejemplo de artículo</h1>\n<p>lorem ipsum</p>\n<h2 id=\"subtitulo\">Subtitulo</h2>";

				const frontmatter = {"title":"Contenido de la pagina","layout":"../layouts/Layout.astro"};
				const file = "C:/Users/isabe/Desktop/WSAstro/astro-space/src/pages/content.md";
				const url = "/content";
				function rawContent() {
					return "\r\n# Esto es un ejemplo de artículo\r\n\r\nlorem ipsum\r\n\r\n## Subtitulo\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"esto-es-un-ejemplo-de-artículo","text":"Esto es un ejemplo de artículo"},{"depth":2,"slug":"subtitulo","text":"Subtitulo"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Layout, {
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

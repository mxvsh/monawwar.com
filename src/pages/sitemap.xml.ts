import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const site = "https://monawwar.com";

export const GET: APIRoute = async () => {
	const projects = await getCollection("projects");
	const paths = [
		"/",
		"/contact",
		"/projects",
		...projects.map((p) => `/projects/${p.id}`),
		"/projects/typecam/privacy",
		"/projects/piko/privacy",
		"/projects/piko/delete-account",
	];
	const urls = paths.map((p) => `<url><loc>${site}${p === "/" ? "" : p}</loc></url>`).join("");
	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
		{ headers: { "Content-Type": "application/xml" } },
	);
};

import { getCollection } from "astro:content";
import type { Project } from "../components/ProjectList";

// Content uses schema.org categories ("DesignApplication"); show them as "Design".
const categoryLabel = (category: string) => category.replace(/Application$/, "") || category;

/** Listed projects, newest first. */
export async function getProjects(): Promise<Project[]> {
	const entries = await getCollection("projects", ({ data }) => data.listed);
	return entries
		.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
		.map(({ id, data }) => ({
			name: data.name,
			description: data.description,
			link: `/projects/${id}`,
			site: (data.links.find((l) => l.icon === "web") ?? data.links.find((l) => l.icon === "github"))?.href,
			logo: data.logo,
			cover: data.og?.src,
			category: categoryLabel(data.category),
		}));
}

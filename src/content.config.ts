import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const item = z.object({ title: z.string(), text: z.string() });

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		name: z.string(),
		description: z.string(),
		logo: z.string().optional(),
		date: z.coerce.date(),
		listed: z.boolean().default(true),

		title: z.string(),
		seoDescription: z.string().optional(),
		tagline: z.string(),
		intro: z.string(),
		category: z.string(),
		os: z.string(),
		og: z.object({ src: z.string(), alt: z.string() }).optional(),
		status: z.string().optional(),
		links: z
			.array(z.object({ label: z.string(), href: z.string().url(), icon: z.enum(["apple", "github", "web"]) }))
			.default([]),
		screenshots: z
			.array(z.object({ src: z.string(), alt: z.string(), width: z.number(), height: z.number() }))
			.default([]),
		steps: z.array(item.extend({ keys: z.array(z.string()).optional() })).default([]),
		features: z.array(item).default([]),
		requirements: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
		faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
		outro: item.optional(),
	}),
});

export const collections = { projects };

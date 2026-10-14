import { useEffect, useMemo, useRef, useState } from "react";
import type { Project } from "./ProjectList";

const ALL = "All";

export default function ProjectBrowser({ projects }: { projects: Project[] }) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [query, setQuery] = useState("");
	const [category, setCategory] = useState(ALL);

	const categories = useMemo(
		() => [ALL, ...Array.from(new Set(projects.map((p) => p.category))).sort()],
		[projects],
	);

	const results = useMemo(() => {
		const q = query.trim().toLowerCase();
		return projects.filter(
			(p) =>
				(category === ALL || p.category === category) &&
				(!q || [p.name, p.description, p.category].some((s) => s.toLowerCase().includes(q))),
		);
	}, [projects, query, category]);

	// Restore ?q= / ?category= so filtered views are linkable, and keep the URL in sync.
	useEffect(() => {
		const params = new URLSearchParams(location.search);
		setQuery(params.get("q") ?? "");
		const c = params.get("category");
		if (c && categories.includes(c)) setCategory(c);
	}, [categories]);

	useEffect(() => {
		const params = new URLSearchParams();
		if (query) params.set("q", query);
		if (category !== ALL) params.set("category", category);
		const search = params.toString();
		history.replaceState(null, "", search ? `?${search}` : location.pathname);
	}, [query, category]);

	// "/" focuses search, like most app stores and docs sites.
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			const target = e.target as HTMLElement;
			if (e.key !== "/" || target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
			e.preventDefault();
			inputRef.current?.focus();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	const reset = () => {
		setQuery("");
		setCategory(ALL);
	};

	return (
		<div>
			<div className="relative">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.75"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-subtle"
					aria-hidden="true"
				>
					<circle cx="11" cy="11" r="7" />
					<path d="m20 20-3.5-3.5" />
				</svg>
				<input
					ref={inputRef}
					type="search"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyDown={(e) => e.key === "Escape" && setQuery("")}
					placeholder="Search projects"
					aria-label="Search projects"
					autoComplete="off"
					spellCheck={false}
					className="h-12 w-full appearance-none rounded-xl bg-surface pl-11 pr-12 text-base text-fg ring-1 ring-line transition-shadow duration-300 ease-out-soft placeholder:text-subtle focus:outline-none focus:ring-fg/30 [&::-webkit-search-cancel-button]:hidden"
				/>
				{query ? (
					<button
						type="button"
						onClick={() => {
							setQuery("");
							inputRef.current?.focus();
						}}
						aria-label="Clear search"
						className="absolute right-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-lg text-subtle transition-colors hover:bg-hover hover:text-fg"
					>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="size-4" aria-hidden="true">
							<path d="M18 6 6 18M6 6l12 12" />
						</svg>
					</button>
				) : (
					<kbd className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-md px-1.5 py-0.5 font-sans text-xs text-subtle ring-1 ring-line sm:block">
						/
					</kbd>
				)}
			</div>

			<div
				role="group"
				aria-label="Filter by category"
				className="-mx-6 mt-3 flex gap-2 overflow-x-auto px-6 py-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
			>
				{categories.map((c) => {
					const active = c === category;
					return (
						<button
							key={c}
							type="button"
							onClick={() => setCategory(c)}
							aria-pressed={active}
							className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm ring-1 transition-colors duration-300 ease-out-soft ${
								active ? "bg-fg text-bg ring-fg" : "text-muted ring-line hover:bg-hover hover:text-fg"
							}`}
						>
							{c}
						</button>
					);
				})}
			</div>

			<p className="mt-10 mb-5 text-sm text-subtle" aria-live="polite">
				{results.length} {results.length === 1 ? "project" : "projects"}
			</p>

			{results.length > 0 ? (
				<ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
					{results.map((p) => (
						<li key={p.link}>
							<a href={p.link} className="group flex h-full flex-col focus-visible:outline-offset-8">
								<div className="relative aspect-[1200/630] overflow-hidden rounded-2xl bg-surface ring-1 ring-line">
									{p.cover ? (
										<img
											src={p.cover}
											alt=""
											width={1200}
											height={630}
											loading="lazy"
											className="size-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
										/>
									) : (
										<div className="grid size-full place-items-center bg-[radial-gradient(80%_100%_at_50%_0%,var(--hover),var(--surface))]">
											{p.logo && (
												<img
													src={p.logo}
													alt=""
													width={80}
													height={80}
													loading="lazy"
													className="size-20 rounded-[22px] shadow-[0_8px_24px_-8px_rgb(0_0_0/0.3)] transition-transform duration-700 ease-out-soft group-hover:scale-110"
												/>
											)}
										</div>
									)}
								</div>

								<div className="mt-4 flex items-center gap-3">
									{p.logo ? (
										<img src={p.logo} alt="" width={40} height={40} loading="lazy" className="size-10 shrink-0 rounded-[11px] ring-1 ring-line" />
									) : (
										<div className="grid size-10 shrink-0 place-items-center rounded-[11px] bg-surface font-medium text-muted ring-1 ring-line">
											{p.name[0]}
										</div>
									)}
									<div className="min-w-0">
										<h2 className="truncate font-display text-xl font-semibold leading-tight tracking-tight text-fg">{p.name}</h2>
										<p className="text-[13px] text-subtle">{p.category}</p>
									</div>
								</div>
								<p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-muted">{p.description}</p>
							</a>
						</li>
					))}
				</ul>
			) : (
				<div className="rounded-2xl px-6 py-14 text-center ring-1 ring-line">
					<p className="text-fg">No projects found</p>
					<p className="mt-1 text-sm text-muted">Try a different search or category.</p>
					<button type="button" onClick={reset} className="link-underline mt-4 text-sm text-fg">
						Clear filters
					</button>
				</div>
			)}
		</div>
	);
}

import { useRef, useState } from "react";

export interface Project {
	name: string;
	description: string;
	link: string;
	logo?: string;
}

interface Highlight {
	y: number;
	height: number;
	visible: boolean;
	// Only slide between rows; on first hover the highlight fades in place.
	slide: boolean;
}

function displayUrl(link: string) {
	const url = new URL(link);
	return (url.host + url.pathname).replace(/^www\./, "").replace(/\/$/, "");
}

export default function ProjectList({ projects }: { projects: Project[] }) {
	const listRef = useRef<HTMLUListElement>(null);
	const [highlight, setHighlight] = useState<Highlight>({ y: 0, height: 0, visible: false, slide: false });

	// Measure against the list, not offsetTop: each <li> is positioned, so offsetTop is always 0.
	const moveTo = (el: HTMLElement) => {
		const list = listRef.current;
		if (!list) return;
		const y = el.getBoundingClientRect().top - list.getBoundingClientRect().top;
		setHighlight((h) => ({ y, height: el.offsetHeight, visible: true, slide: h.visible }));
	};
	const hide = () => setHighlight((h) => ({ ...h, visible: false }));

	return (
		<ul ref={listRef} className="relative -mx-4" onMouseLeave={hide}>
			<div
				aria-hidden="true"
				className={`pointer-events-none absolute inset-x-0 top-0 rounded-xl bg-hover ring-1 ring-line duration-300 ease-out-soft ${highlight.slide ? "transition-[transform,height,opacity]" : "transition-opacity"}`}
				style={{
					transform: `translateY(${highlight.y}px)`,
					height: highlight.height,
					opacity: highlight.visible ? 1 : 0,
				}}
			/>
			{projects.map((project) => (
				<li key={project.link} className="relative">
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						onMouseEnter={(e) => moveTo(e.currentTarget)}
						onFocus={(e) => moveTo(e.currentTarget)}
						onBlur={hide}
						className="group flex items-start gap-4 rounded-xl px-4 py-4 focus-visible:outline-none"
					>
						{project.logo && (
							<img
								src={project.logo}
								alt=""
								width={40}
								height={40}
								loading="lazy"
								className="mt-0.5 size-10 shrink-0 rounded-[10px] ring-1 ring-line transition-transform duration-500 ease-out-soft group-hover:-rotate-3 group-hover:scale-105"
							/>
						)}
						<div className="min-w-0 flex-1">
							<h3 className="font-medium text-fg">{project.name}</h3>
							<p className="mt-1 text-[15px] leading-relaxed text-muted">{project.description}</p>
							<p className="mt-2 truncate font-mono text-xs text-subtle">{displayUrl(project.link)}</p>
						</div>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.75"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="mt-1 size-4 shrink-0 text-subtle transition-all duration-300 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg group-focus-visible:text-fg"
							aria-hidden="true"
						>
							<path d="M7 17 17 7M8 7h9v9" />
						</svg>
					</a>
				</li>
			))}
		</ul>
	);
}

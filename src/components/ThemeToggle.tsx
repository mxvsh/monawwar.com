function applyTheme() {
	const root = document.documentElement;
	const dark = !root.classList.contains("dark");
	root.classList.toggle("dark", dark);
	try {
		localStorage.setItem("theme", dark ? "dark" : "light");
	} catch {}
}

export default function ThemeToggle() {
	const toggle = () => {
		if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) {
			applyTheme();
			return;
		}
		document.startViewTransition(applyTheme);
	};

	// Icons swap via the `dark:` variant so server and client markup always match.
	return (
		<button
			type="button"
			onClick={toggle}
			aria-label="Toggle theme"
			className="group relative grid size-8 place-items-center rounded-full text-muted transition-colors duration-300 hover:bg-surface hover:text-fg"
		>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.75"
				strokeLinecap="round"
				className="absolute size-4 rotate-0 scale-100 opacity-100 transition-all duration-500 ease-out-soft dark:-rotate-90 dark:scale-50 dark:opacity-0"
				aria-hidden="true"
			>
				<circle cx="12" cy="12" r="4" />
				<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
			</svg>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.75"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="absolute size-4 rotate-90 scale-50 opacity-0 transition-all duration-500 ease-out-soft dark:rotate-0 dark:scale-100 dark:opacity-100"
				aria-hidden="true"
			>
				<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
			</svg>
		</button>
	);
}

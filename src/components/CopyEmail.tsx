import { useEffect, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (!copied) return;
		const id = setTimeout(() => setCopied(false), 1600);
		return () => clearTimeout(id);
	}, [copied]);

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
		} catch {
			window.location.href = `mailto:${email}`;
		}
	};

	return (
		<button
			type="button"
			onClick={copy}
			aria-label={copied ? "Email copied" : "Copy email address"}
			className="relative grid size-7 place-items-center rounded-md text-subtle transition-colors duration-300 hover:bg-surface hover:text-fg"
		>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.75"
				strokeLinecap="round"
				strokeLinejoin="round"
				className={`absolute size-3.5 transition-all duration-300 ease-out-soft ${copied ? "scale-50 opacity-0" : "scale-100 opacity-100"}`}
				aria-hidden="true"
			>
				<rect x="9" y="9" width="12" height="12" rx="2" />
				<path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
			</svg>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className={`absolute size-3.5 text-fg transition-all duration-300 ease-out-soft ${copied ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
				aria-hidden="true"
			>
				<path d="M20 6 9 17l-5-5" />
			</svg>
			<span
				aria-hidden="true"
				className={`pointer-events-none absolute left-full ml-1.5 whitespace-nowrap font-mono text-xs text-muted transition-all duration-300 ease-out-soft ${copied ? "translate-x-0 opacity-100" : "-translate-x-1 opacity-0"}`}
			>
				Copied
			</span>
			<span role="status" className="sr-only">
				{copied ? "Email copied to clipboard" : ""}
			</span>
		</button>
	);
}

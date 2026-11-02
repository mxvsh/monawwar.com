import { useState, type CSSProperties } from "react";
import type { Device, Wallpaper } from "../lib/wallpapers";

const deviceLabels: Record<Device, string> = { iphone: "iPhone", mac: "Mac" };
const deviceOrder: Device[] = ["iphone", "mac"];

const PREVIEW_SIZE: Record<Device, { width: number; height: number }> = {
	iphone: { width: 600, height: 1300 },
	mac: { width: 1000, height: 650 },
};

const glare = "linear-gradient(115deg, rgb(255 255 255 / 0.14) 0%, rgb(255 255 255 / 0) 38%)";

/**
 * One device that morphs between an iPhone and a MacBook. Sizes are in `cqw` (1% of the card width),
 * so the whole mockup scales with the card. Screen shapes match the originals:
 * iPhone 1179x2556 and MacBook Air 2560x1664.
 */
interface Shape {
	/** Outer body (iPhone body / MacBook lid). */
	width: string;
	height: string;
	radius: string;
	/** Metal rim around the black bezel. */
	rim: string;
	/** Black glass bezel around the screen. */
	bezel: string;
	bezelRadius: string;
	screenRadius: string;
}

const shapes: Record<Device, Shape> = {
	iphone: {
		width: "46cqw",
		height: "96.4cqw",
		radius: "7.1cqw",
		rim: "0.5cqw",
		bezel: "0.7cqw",
		bezelRadius: "6.6cqw",
		screenRadius: "5.9cqw",
	},
	mac: {
		width: "86cqw",
		height: "57.3cqw",
		radius: "2.1cqw 2.1cqw 0.3cqw 0.3cqw",
		rim: "0.16cqw 0.16cqw 0 0.16cqw",
		bezel: "1.4cqw 1.4cqw 1.7cqw",
		bezelRadius: "1.9cqw 1.9cqw 0 0",
		screenRadius: "0.5cqw",
	},
};

const morph = "transition-[width,height,border-radius,padding] duration-700 ease-out-soft motion-reduce:transition-none";
const fade = "transition-opacity duration-500 ease-out-soft motion-reduce:transition-none";

const button = (top: string, height: string, side: "left" | "right"): CSSProperties => ({
	position: "absolute",
	top,
	height,
	width: "0.8cqw",
	[side]: "-0.5cqw",
	borderRadius: side === "left" ? "0.4cqw 0 0 0.4cqw" : "0 0.4cqw 0.4cqw 0",
	background:
		side === "left"
			? "linear-gradient(90deg, #2b2b2e, #5a5a5f 60%, #3a3a3d)"
			: "linear-gradient(90deg, #3a3a3d, #5a5a5f 40%, #2b2b2e)",
});

function Device({ wallpaper, device }: { wallpaper: Wallpaper; device: Device }) {
	const s = shapes[device];
	const phone = device === "iphone";

	return (
		<div
			className={`absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 ${morph}`}
			style={{ width: s.width, height: s.height }}
		>
			{/* iPhone side buttons: action, volume up / down, power. */}
			<div className={`pointer-events-none ${fade} ${phone ? "opacity-100" : "opacity-0"}`} aria-hidden="true">
				<span style={button("13.5%", "3.4%", "left")} />
				<span style={button("19.5%", "6.6%", "left")} />
				<span style={button("27.5%", "6.6%", "left")} />
				<span style={button("23%", "10.5%", "right")} />
			</div>

			{/* Body: titanium on iPhone, aluminium on MacBook. */}
			<div
				className={`absolute inset-0 overflow-hidden ${morph}`}
				style={{
					padding: s.rim,
					borderRadius: s.radius,
					boxShadow: "0 1.2cqw 3cqw -1cqw rgb(0 0 0 / 0.55)",
				}}
			>
				<span
					aria-hidden="true"
					className={`absolute inset-0 ${fade} ${phone ? "opacity-100" : "opacity-0"}`}
					style={{
						background: "linear-gradient(145deg, #5b5b60 0%, #26262a 28%, #1a1a1d 55%, #3f3f44 100%)",
						boxShadow: "inset 0 0 0 0.12cqw rgb(255 255 255 / 0.18)",
					}}
				/>
				<span
					aria-hidden="true"
					className={`absolute inset-0 ${fade} ${phone ? "opacity-0" : "opacity-100"}`}
					style={{ background: "linear-gradient(180deg, #d9dadd, #a9abb0)" }}
				/>

				{/* Black glass bezel. */}
				<div className={`relative size-full bg-[#050506] ${morph}`} style={{ padding: s.bezel, borderRadius: s.bezelRadius }}>
					{/* Screen. */}
					<div className={`relative size-full overflow-hidden bg-black ${morph}`} style={{ borderRadius: s.screenRadius }}>
						{deviceOrder.map((d) => {
							const variant = wallpaper.variants[d];
							if (!variant) return null;
							const shown = d === device;
							return (
								<img
									key={d}
									src={variant.preview}
									alt={shown ? `${wallpaper.name} wallpaper on ${deviceLabels[d]}` : ""}
									aria-hidden={!shown}
									width={PREVIEW_SIZE[d].width}
									height={PREVIEW_SIZE[d].height}
									loading="lazy"
									decoding="async"
									draggable={false}
									className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ease-out-soft motion-reduce:transition-none ${
										shown ? "opacity-100" : "opacity-0"
									}`}
								/>
							);
						})}

						{/* Dynamic Island. */}
						<span
							aria-hidden="true"
							className={`absolute left-1/2 -translate-x-1/2 bg-black ${fade} ${phone ? "opacity-100" : "opacity-0"}`}
							style={{ top: "1.5cqw", width: "12.6cqw", height: "3.7cqw", borderRadius: "1.85cqw" }}
						/>
						{/* Camera notch. */}
						<span
							aria-hidden="true"
							className={`absolute top-0 left-1/2 -translate-x-1/2 bg-black ${fade} ${phone ? "opacity-0" : "opacity-100"}`}
							style={{ width: "9cqw", height: "2cqw", borderRadius: "0 0 1cqw 1cqw" }}
						/>
						<span aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: glare }} />
					</div>
				</div>
			</div>

			{/* MacBook hinge, base with thumb notch, and contact shadow. */}
			<div
				aria-hidden="true"
				className={`pointer-events-none absolute top-full left-0 w-full ${fade} ${phone ? "opacity-0" : "opacity-100"}`}
			>
				<div style={{ height: "0.3cqw", background: "linear-gradient(#6f7176, #8c8e93)" }} />
				<div
					className="relative"
					style={{
						width: "102.6%",
						marginLeft: "-1.3%",
						height: "1.5cqw",
						borderRadius: "0.25cqw 0.25cqw 2cqw 2cqw / 0.25cqw 0.25cqw 1.5cqw 1.5cqw",
						background: "linear-gradient(180deg, #eceef0 0%, #cfd1d5 55%, #a2a4a9 100%)",
						boxShadow: "inset 0 0.12cqw 0 rgb(255 255 255 / 0.7)",
					}}
				>
					<span
						className="absolute top-0 left-1/2 -translate-x-1/2"
						style={{
							width: "13cqw",
							height: "0.65cqw",
							borderRadius: "0 0 0.9cqw 0.9cqw",
							background: "linear-gradient(180deg, #a3a5aa, #d3d5d8)",
						}}
					/>
				</div>
				<span
					className="absolute left-1/2 -translate-x-1/2 bg-black/50"
					style={{ top: "2.6cqw", width: "92%", height: "1.7cqw", borderRadius: "50%", filter: "blur(1.2cqw)" }}
				/>
			</div>
		</div>
	);
}

function WallpaperCard({ wallpaper }: { wallpaper: Wallpaper }) {
	const devices = deviceOrder.filter((d) => wallpaper.variants[d]);
	const [device, setDevice] = useState<Device>(devices[0]);
	const active = wallpaper.variants[device]!;

	return (
		<li>
			<div
				className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[radial-gradient(90%_70%_at_50%_0%,var(--hover),var(--surface))] ring-1 ring-line"
				style={{ containerType: "inline-size" }}
			>
				<Device wallpaper={wallpaper} device={device} />

				{devices.length > 1 && (
					<div
						role="group"
						aria-label={`${wallpaper.name} device`}
						className="absolute bottom-3 left-1/2 inline-flex -translate-x-1/2 gap-1 rounded-full bg-bg/70 p-1 ring-1 ring-line backdrop-blur"
					>
						{devices.map((d) => (
							<button
								key={d}
								type="button"
								onClick={() => setDevice(d)}
								aria-pressed={d === device}
								className={`rounded-full px-3 py-1 text-sm transition-colors duration-300 ease-out-soft ${
									d === device ? "bg-fg text-bg" : "text-muted hover:text-fg"
								}`}
							>
								{deviceLabels[d]}
							</button>
						))}
					</div>
				)}
			</div>

			<div className="mt-4 flex items-start justify-between gap-3">
				<div className="min-w-0">
					<h2 title={wallpaper.name} className="truncate font-display text-lg font-semibold leading-tight tracking-tight text-fg">{wallpaper.name}</h2>
					<p className="mt-0.5 truncate text-[13px] tabular-nums text-subtle" aria-live="polite">
						{active.specs}
					</p>
				</div>

				<a
					href={active.original}
					download={active.filename}
					aria-label={`Download ${wallpaper.name} for ${deviceLabels[device]}`}
					title={`Download for ${deviceLabels[device]}`}
					data-umami-event="wallpaper-download"
					data-umami-event-wallpaper={wallpaper.slug}
					data-umami-event-device={device}
					className="group/dl grid size-9 shrink-0 place-items-center rounded-full text-muted ring-1 ring-line transition-colors duration-300 ease-out-soft hover:bg-hover hover:text-fg"
				>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.75"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="size-4 transition-transform duration-300 ease-out-soft group-hover/dl:translate-y-0.5"
						aria-hidden="true"
					>
						<path d="M12 4v12m0 0 5-5m-5 5-5-5M5 20h14" />
					</svg>
				</a>
			</div>
		</li>
	);
}

export default function WallpaperGrid({ wallpapers }: { wallpapers: Wallpaper[] }) {
	return (
		<ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
			{wallpapers.map((w) => (
				<WallpaperCard key={w.slug} wallpaper={w} />
			))}
		</ul>
	);
}

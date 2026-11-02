#!/usr/bin/env bash
# For every wallpaper original in public/wallpapers/<slug>/<device>.<ext> (device: iphone | mac):
#   1. generates a WebP preview next to it (skipped if it exists; pass --force to regenerate)
#   2. records its pixel size and file size in src/lib/wallpaper-meta.json (shown on the page)
# Requires ImageMagick (`magick`).
#
#   iphone.png -> iphone.webp (600px wide)
#   mac.png    -> mac.webp    (1000px wide)
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
meta="$root/src/lib/wallpaper-meta.json"
force=${1:-}
entries=()

cd "$root/public/wallpapers"

for original in */*.png */*.jpg */*.jpeg; do
	[ -e "$original" ] || continue
	base=${original%.*}
	device=$(basename "$base")

	case "$device" in
		iphone) width=600 ;;
		mac) width=1000 ;;
		*) echo "skip $original (device must be iphone or mac)"; continue ;;
	esac

	if [ ! -e "$base.webp" ] || [ "$force" = "--force" ]; then
		magick "$original" -resize "${width}x" -quality 80 "$base.webp"
		echo "wrote public/wallpapers/$base.webp"
	fi

	read -r w h < <(magick identify -format "%w %h\n" "$original")
	bytes=$(wc -c < "$original" | tr -d ' ')
	entries+=("  \"$base\": { \"width\": $w, \"height\": $h, \"bytes\": $bytes }")
done

{
	echo "{"
	for i in "${!entries[@]}"; do
		if [ "$i" -lt $((${#entries[@]} - 1)) ]; then echo "${entries[$i]},"; else echo "${entries[$i]}"; fi
	done
	echo "}"
} > "$meta"
echo "wrote src/lib/wallpaper-meta.json"

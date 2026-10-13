---
name: Drop
description: Convert, compress and keep files mid-drag on your Mac. Press Option while dragging to bring up the drop zone.
logo: /projects/drop/icon.png
date: 2026-10-13

title: Drop — Convert and compress files mid-drag on your Mac
seoDescription: Drop is a native macOS menu bar app. Start dragging any file, press Option, and drop it on an action to convert images to PNG, JPEG, WebP or ICNS, compress videos, make GIFs, merge PDFs, remove backgrounds and more. Everything runs on your Mac.
tagline: Convert, compress and keep files without leaving the drag
intro: Start dragging any file, press Option, and Drop appears **right beside your cursor** with actions that fit that file. Drop it on one and the result lands next to the original, ready to drag on into Slack, Mail or Figma. Everything runs on your Mac.
category: UtilitiesApplication
os: macOS 15
og:
  src: /projects/drop/og.jpg
  alt: "Drop: convert, compress and keep files without leaving the drag"
links:
  - { label: Download for macOS, href: "https://github.com/mxvsh/Drop/releases/latest", icon: apple }
  - { label: GitHub, href: "https://github.com/mxvsh/Drop", icon: github }
steps:
  - { title: Drag, text: "Start dragging any file from Finder, the desktop, Mail or any other app." }
  - { title: Press, keys: ["⌥"], text: "Drop appears beside your cursor and stays open, showing only what fits that file." }
  - { title: Drop, text: "Let go on an action. The result is saved next to the original." }
features:
  - { title: Images, text: "PNG, JPEG, HEIC and WebP, plus ICNS and ICO icons. Resize, compress or strip location data." }
  - { title: Remove background, text: "Lift the subject onto a transparent PNG with Apple's on-device Vision." }
  - { title: Video, text: "Compress to 720p, 1080p or 4K, convert to MP4, pull out the audio, or turn a clip into a GIF." }
  - { title: PDFs, text: "Merge, compress, export every page as an image, or copy the text, even from scans." }
  - { title: Shelf, text: "Park files for later and drag them out when you need them." }
  - { title: Asks when it matters, text: "Resize, Compress and GIF open a small form for size, quality or frame rate, and remember your choice." }
  - { title: For developers, text: "Copy a path, a Base64 data URI or a SHA-256 checksum. Zip and unzip in place." }
  - { title: Private, text: "No account, no uploads. Every action runs on your Mac." }
requirements:
  - { label: Mac, value: macOS 15 or later }
  - { label: Looks best on, value: "macOS 26, with Liquid Glass" }
  - { label: Permissions, value: "Folder access only, asked once during setup" }
faqs:
  - q: Is Drop free?
    a: Yes. Download it from GitHub. It updates itself when a new version is out.
  - q: Does Option interfere with Finder?
    a: Finder treats Option as "copy" while dragging. Drop stays open once it appears, so let go of the key before dropping somewhere else. You can switch the trigger to Control, Command, Shift, Fn or a quick shake in Settings.
  - q: Where do converted files go?
    a: Next to the original by default, never overwriting anything. You can send them to Downloads or any folder instead, copy them to the clipboard, or move the originals to the Trash.
  - q: Does it need Accessibility or Screen Recording access?
    a: No. Drop only asks for access to your Desktop, Documents and Downloads folders, so it can save results there.
outro:
  title: Feedback
  text: Found a bug or want a new action? [Open an issue](https://github.com/mxvsh/Drop/issues) or [get in touch](/contact).
---

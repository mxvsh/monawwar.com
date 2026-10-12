---
name: Drivebase
description: Cloud-agnostic file management platform for people and teams using multiple storage providers.
logo: /projects/drivebase.svg
date: 2026-07-01

title: Drivebase — One file manager for all your cloud storage
seoDescription: Drivebase is an open-source, self-hosted file manager for Google Drive, S3, Dropbox, OneDrive and local storage. Browse, transfer and manage files across providers from one desktop-like interface.
tagline: Every drive. One workspace.
intro: Connect Google Drive, S3, Dropbox, OneDrive and local storage, then **browse, move and manage files across all of them** from one place. Drivebase runs like a desktop in your browser, with windows you can move, resize and tile.
category: BusinessApplication
os: Web
og:
  src: /projects/drivebase/og.png
  alt: "Drivebase: unified file manager for all your cloud storage"
links:
  - { label: Get started, href: "https://drivebase.io", icon: web }
  - { label: GitHub, href: "https://github.com/drivebase/drivebase", icon: github }
screenshots:
  - { src: /projects/drivebase/1.webp, alt: "Drivebase file browser with Google Drive, S3, Dropbox and OneDrive", width: 1600, height: 720 }
  - { src: /projects/drivebase/2.webp, alt: Installing Drivebase with a single command, width: 1600, height: 720 }
  - { src: /projects/drivebase/3.webp, alt: Connecting multiple storage providers in Drivebase, width: 1600, height: 720 }
  - { src: /projects/drivebase/4.webp, alt: Drivebase personal vault encrypting files before upload, width: 1600, height: 720 }
  - { src: /projects/drivebase/5.webp, alt: Inviting members to a Drivebase workspace, width: 1600, height: 720 }
  - { src: /projects/drivebase/6.webp, alt: Smart upload rules that route files to a provider, width: 1600, height: 720 }
  - { src: /projects/drivebase/7.webp, alt: Moving files between cloud providers in Drivebase, width: 1600, height: 720 }
  - { src: /projects/drivebase/8.webp, alt: "Smart search, cloud transfer, Docker and auto-sync in Drivebase", width: 1600, height: 720 }
steps:
  - { title: Install, text: "Run the one-line installer, then start everything with Docker Compose." }
  - { title: Connect, text: "Add Google Drive, S3, Dropbox, OneDrive or a local folder as providers." }
  - { title: Manage, text: "Browse, upload and move files across every provider from one window." }
features:
  - { title: Desktop shell, text: "Files, Providers and Settings open as windows you move, resize and switch between." }
  - { title: Every provider, text: "Google Drive, S3 and S3-compatible stores like R2, Wasabi, B2 and MinIO, Dropbox, OneDrive and local." }
  - { title: Vault, text: "End-to-end encryption. Files are encrypted before they leave your device." }
  - { title: Batch transfers, text: "Copy, move and delete across providers, with conflicts caught before anything runs." }
  - { title: Live progress, text: "Real-time status over server-sent events. Chunked uploads resume after a reload." }
  - { title: Smart uploads, text: "Rules that route new files to the right provider and folder automatically." }
  - { title: Teams, text: "Shared workspaces with invite links and roles." }
  - { title: GraphQL API, text: "Every capability is exposed through a typed API, with a clean interface for new providers." }
requirements:
  - { label: Self-host, value: Docker and Docker Compose }
  - { label: Source, value: "Bun 1.3.5+, PostgreSQL 15+, Redis 7+" }
  - { label: Cloud, value: "Managed instances from $9.99 a month" }
faqs:
  - q: How do I install it?
    a: "Run `curl -fsSL https://drivebase.io/install | bash`, then `docker compose up -d` in the new folder and open localhost:4000."
  - q: Is Drivebase free?
    a: "Yes. Self-hosting is free and open source under the MIT license. Managed cloud instances are available if you'd rather not run it yourself."
  - q: Which storage providers are supported?
    a: "Google Drive, Amazon S3 and S3-compatible services like Cloudflare R2, Wasabi, Backblaze B2 and MinIO, Dropbox, OneDrive and the local filesystem. Box, Azure Blob Storage and SFTP are on the way."
  - q: Are my files encrypted?
    a: "With Vault, files are encrypted on your device before they're uploaded, so only you can read them."
  - q: Does it copy my files into its own storage?
    a: "No. Drivebase talks to each provider directly, so your files stay where they are."
outro:
  title: Contribute
  text: Drivebase is built in the open. Browse the [source](https://github.com/drivebase/drivebase), open an [issue](https://github.com/drivebase/drivebase/issues) or [get in touch](/contact).
---

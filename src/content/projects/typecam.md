---
name: TypeCam
description: Use your iPhone as a wired, low-latency camera for OBS on macOS.
logo: /projects/typecam/icon.png
date: 2026-10-07

title: TypeCam — Use your iPhone as a wired camera for OBS
seoDescription: TypeCam turns your iPhone into a low-latency, wired camera for OBS Studio on macOS. Hardware-encoded HEVC over the USB cable, pro camera controls and mic audio. Open source.
tagline: Your iPhone as a wired camera for OBS
intro: Plug your iPhone into your Mac and use it as a **sharp, low-latency camera** in OBS Studio. TypeCam hardware-encodes video and audio on the phone and sends it straight down the cable. No Wi-Fi, no network setup, no subscription.
category: MultimediaApplication
os: iOS 18, macOS 13
og:
  src: /projects/typecam/og.png
  alt: "TypeCam: your iPhone as a wired, low-latency camera for OBS"
links:
  - { label: Download on the App Store, href: "https://apps.apple.com/us/app/typecam-obs-camera/id6821537950", icon: apple }
  - { label: View on GitHub, href: "https://github.com/mxvsh/TypeCam", icon: github }
steps:
  - { title: Plug in, text: Connect your iPhone to your Mac with a USB-C or Lightning cable and tap Trust. }
  - { title: Open TypeCam, text: "The app starts serving its camera feed over the cable. No Wi-Fi, no pairing." }
  - { title: Add the source, text: "In OBS, add a TypeCam (iPhone) source. The feed is live in a moment." }
features:
  - { title: Wired, text: "Streams over Apple's USB tunnel, the same link Xcode uses. Nothing touches your network." }
  - { title: Low latency, text: "Real-time H.264 or HEVC with no B-frames. Frames are dropped, never queued." }
  - { title: Up to 4K60, text: "720p, 1080p or 4K at 24 to 60 fps, with auto or manual bitrate." }
  - { title: Pro controls, text: "Every lens, manual focus, ISO, shutter, EV and white balance lock on ruler dials." }
  - { title: Audio, text: "Mic audio in sync with video, as PCM or AAC, with gain, presets and a low-cut filter." }
  - { title: Assist, text: "Grid, level, histogram, zebra and focus peaking. Preview only, never in the stream." }
  - { title: Multi-camera, text: Plug in two iPhones and use them as two separate OBS sources. }
  - { title: Open source, text: "A Swift app and a C plugin, built with Apple frameworks only." }
requirements:
  - { label: iPhone, value: iOS 18 or later }
  - { label: Mac, value: macOS 13 or later }
  - { label: OBS, value: OBS Studio 31 or later }
  - { label: Cable, value: USB-C or Lightning }
faqs:
  - q: Does TypeCam need Wi-Fi?
    a: "No. Video and audio travel over the USB cable through usbmuxd, which is built into macOS. Your phone and Mac don't even need to be on the same network."
  - q: How low is the latency?
    a: TypeCam targets under 100 ms from glass to OBS at 1080p60. It uses a real-time hardware encoder, short keyframe intervals and small queues.
  - q: Does it work on Windows or Linux?
    a: Not yet. Version 1 is macOS only. Windows and Linux plugin builds are on the roadmap.
  - q: Is it free?
    a: Yes. TypeCam is open source on GitHub, and contributions are welcome.
outro:
  title: Contribute
  text: TypeCam is built in the open. Read the [docs](https://github.com/mxvsh/TypeCam/tree/main/docs), open an [issue](https://github.com/mxvsh/TypeCam/issues) or [get in touch](/contact).
---

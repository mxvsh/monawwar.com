---
name: Wave
description: Private macOS dictation app for fast voice-to-text workflows.
logo: /projects/wave/icon.png
order: 4

title: Wave — Private dictation for macOS
seoDescription: Wave is a native macOS dictation app. Hold a key, speak, and your words are pasted at the cursor. On-device Whisper or Groq, plus an AI Mode for rewrites and answers. Free and open source.
tagline: Your voice, typed instantly, anywhere on your Mac
intro: Hold a key, speak, and let go. Wave turns your voice into text and **pastes it right at the cursor**, in any app. Run Whisper on your Mac for complete privacy, or use Groq for speed. No account, no subscription.
category: ProductivityApplication
os: macOS 14
og:
  src: /projects/wave/og.png
  alt: "Wave: your voice, typed instantly, anywhere on your Mac"
links:
  - { label: Download for macOS, href: "https://github.com/mxvsh/wave/releases/latest", icon: apple }
  - { label: GitHub, href: "https://github.com/mxvsh/wave", icon: github }
screenshots:
  - { src: /projects/wave/general.webp, alt: "Wave settings window next to the line Local. Private. Speech-to-Text.", width: 1600, height: 1000 }
  - { src: /projects/wave/ai-mode.webp, alt: Wave shortcut settings with Fn for dictation and Right Option for AI Mode, width: 1600, height: 1000 }
  - { src: /projects/wave/byok.webp, alt: Wave model settings using a Groq API key, width: 1600, height: 1000 }
  - { src: /projects/wave/local.webp, alt: Downloading a local Whisper model in Wave, width: 1600, height: 1000 }
steps:
  - { title: Hold, keys: [fn], text: "Works in any app. Wave lives in the menu bar, so there's no window to open." }
  - { title: Speak, text: Full sentences or rough thoughts. Wave listens while you stay focused. }
  - { title: Release, text: Your words are transcribed and pasted right at the cursor. }
features:
  - { title: Local Whisper, text: On-device transcription with whisper.cpp. Nothing leaves your Mac. }
  - { title: Groq, text: Bring your own Groq key for near-instant cloud transcription. }
  - { title: AI Mode, text: "Hold Right Option to write emails, draft prompts or rewrite selected text." }
  - { title: Two modes, text: "Push to talk, or press once to start and again to stop." }
  - { title: Vocabulary, text: Teach Wave the names and terms it should always get right. }
  - { title: Snippets, text: Save reusable text. AI Mode knows about them too. }
  - { title: History, text: Recent transcriptions a click away in the menu bar. }
  - { title: Open source, text: "A native Swift app. No account, no subscription." }
requirements:
  - { label: Mac, value: macOS 14 or later }
  - { label: Mic, value: Built-in or any input device }
  - { label: Groq, value: "Optional, with your own API key" }
faqs:
  - q: Is Wave free?
    a: Yes. Wave is free and open source. You only pay Groq if you choose their hosted transcription or AI features, and their free tier is plenty to start.
  - q: Can I use it offline?
    a: Yes. Download a Whisper model in Settings and dictation runs entirely on your Mac. Internet is only needed for Groq.
  - q: Do I need an account?
    a: No. There's no sign-up. For cloud features you paste in your own Groq API key.
  - q: Can I change the shortcuts?
    a: Yes. Dictation defaults to Fn and AI Mode to Right Option. Both can be changed in Settings, and Wave tells left and right modifier keys apart.
outro:
  title: Contribute
  text: Wave is built in the open. Browse the [source](https://github.com/mxvsh/wave), open an [issue](https://github.com/mxvsh/wave/issues), join the [Discord](https://discord.gg/6YznRVc23J) or [get in touch](/contact).
---

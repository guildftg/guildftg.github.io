# Add `theme-color` meta tag

## What to add

In `index.html`, inside `<head>`, add:

```html
<meta name="theme-color" content="#1c5f8f" />
```

Place it near the other top-level meta tags (e.g. right after the `viewport` tag, before the `og:*` block) — it's a browser-chrome hint, not part of the Open Graph group, so keep it visually separate from that section.

## Where the color comes from

`#1c5f8f` is `--ftg-brand-primary`, defined in `src/styles/theme.css:9`. It's the guild's actual brand blue — already used for nav active-link color, primary buttons, link color, the avatar border/ring, the emblem icon, and the `page-header`/`signoff` accent borders. It's the single most representative "this is FTG" color on the site, which is why it's the right pick over, say, `--ftg-discord` (`#5865f2`, that's Discord's brand color, not the guild's) or the dark-mode variant `--ftg-brand-primary` (`#7cc0e8`, only active when `data-bs-theme="dark"`).

## Scope decision (confirmed with Alden)

Site supports light/dark mode with two different brand blues (`#1c5f8f` light / `#7cc0e8` dark) plus a manual override via `ThemeToggle.jsx` that can disagree with the OS `prefers-color-scheme`. Going with the simple option: **one static `theme-color` tag, always `#1c5f8f`, regardless of active theme.** No JS changes required — this is a pure `index.html` edit.

Trade-off, noted for the record: the browser chrome/toolbar color (Android Chrome address bar, PWA title bar, etc.) will stay the light-mode blue even when a visitor is in dark mode. That's a cosmetic inconsistency, not a functional bug — acceptable for a guild site. If this becomes annoying later, the fix is two static tags with `media="(prefers-color-scheme: light/dark)"` for the OS-only case, or updating the meta tag from the existing inline boot script (`index.html` lines ~33-44) and from `ThemeToggle.jsx`'s theme-change effect for a fully live-updating version. Not doing either now — flagging so it's a deliberate "not yet" rather than an oversight.

## Verification

- View source (or `curl`) on the built `dist/index.html` and confirm the tag is present with the right hex value.
- Chrome on Android / a Chromium-based mobile browser will tint the address bar to `#1c5f8f` when visiting the site — visually confirm if a device is available.

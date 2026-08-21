# Fix OG image / social embeds + close meta tag gaps

## Root cause (found during exploration)

`index.html` already declares:

```html
<meta property="og:image" content="https://www.ftgguild.com/og-image.png" />
```

This file **does not exist anywhere in the repo** — not in `src/`, not in `dist/`, and there is no `public/` directory in the Vite project to serve it from. Any crawler (Discord, Slack, Facebook, X/Twitter, iMessage) requesting that URL gets a 404, so no logo/preview image renders in embeds. That's the actual bug — it isn't that the tag is missing from pages, it's that the tag points at a dead URL.

Also relevant: this is a client-rendered SPA (Vite + React Router, no SSR/prerendering). Crawlers for link-preview embeds do **not** execute JavaScript — they fetch the static `index.html` once and read whatever `<meta>` tags are already in the raw HTML. That means:

- The static tags in `index.html` are what actually control embed previews for every route (since the guild likely mostly shares the homepage or specific deep links, but crawlers hitting any deep link still only see the static `index.html` head — no route-specific rendering happens for them).
- `PageMeta.jsx`'s `useEffect`-based tag rewriting (title, description, og:title/description/url, twitter:title/description) only matters for real browsers doing client-side navigation and for SEO tools that do execute JS. It has **zero effect** on how links unfurl in Discord/Slack/iMessage/etc.

So "add the meta tag to every React page" isn't quite the right frame — you don't need 8 copies of an og:image tag, you need one correct one that resolves, plus (optionally) wiring image into the existing per-route system for future flexibility.

## Current meta tag inventory

**`index.html`** (static, ships in every response, this is what crawlers actually see):
- `charset`, `viewport`
- `description`
- `link rel="canonical"` → `https://www.ftgguild.com/`
- `og:type` = `website`
- `og:site_name` = `<FTG>`
- `og:title`
- `og:description`
- `og:url` → `https://www.ftgguild.com/`
- `og:image` → `https://www.ftgguild.com/og-image.png` (**broken, 404**)
- `twitter:card` = `summary_large_image`
- `twitter:title`
- `twitter:description`
- **No `twitter:image`** (Twitter/X falls back to `og:image` in some cases but it's not guaranteed — should be explicit)
- **No `og:image:width` / `og:image:height`** (Discord and some other unfurlers use these to lay out the preview correctly and can skip the image if missing/unparseable)
- `link rel="icon"` → `/src/assets/images/art/ftg_logo_128.png` (note: pointing into `/src/...` works in dev but is fragile for prod — Vite dev-serves `/src`, but in the production build this path won't resolve the same way unless it happens to also exist under `dist/`. Worth verifying against `dist/index.html`.)
- `title`

**`src/components/layout/PageMeta.jsx`** (client-side only, runs after JS loads, per-route via `src/data/routeMeta.js`):
- `document.title`
- `description`
- `og:title`, `og:description`, `og:url`
- `twitter:title`, `twitter:description`
- canonical link
- Does **not** touch `og:image` or `twitter:image` at all today

**`src/data/routeMeta.js`** has per-route title/description entries for `/`, `/recruitment`, `/raiding`, `/about`, `/rules`, `/raiding/loot-changes`, `/addons`. (`/recruitment`... verify this route actually exists in `App.jsx`/router config — flagged below.)

## Image asset problem

The only candidate logo file is `src/assets/images/art/ftg_logo.png`, which is **80×80px**. That's far too small and the wrong aspect ratio for an OG/Twitter card image. Recommended OG image size is 1200×630 (1.91:1); Discord and most platforms will crop/pad anything that doesn't roughly match that ratio, and very small source images get upscaled and look blurry.

There's a `splash.png` (1832×1364) and `splash-1200.webp` (1200×893) already in `src/assets/images/art/` — closer to usable but still not 1200×630, and `.webp` is not safe to use for `og:image` since some unfurlers (older Facebook/Slack crawlers in particular) don't reliably parse WebP for previews — PNG or JPEG is the safe choice for this specific tag.

## Recommended fix (for Claude Code to implement)

1. **Create a real `public/` directory** at the Vite project root (`working/public/`). Anything placed there is copied verbatim to the root of `dist/` at build time and served at a stable, non-fingerprinted URL — which is required for `og:image`, since social crawlers need a permanent, predictable URL (not the hashed `/assets/ftg_logo-BLWfnKLj.png` Vite produces for imported images).

2. **Produce a dedicated share image** at 1200×630 (PNG or JPG), e.g. `public/og-image.png`, built from the existing logo/brand art — not just the raw 80×80 logo stretched. This is a design task, not just a meta-tag edit; flag to Alden that someone should export this from the source art (there may be a higher-res logo source outside this repo, or `splash.png` could be cropped/composited with the logo).

3. **Fix `index.html`**:
   - Point `og:image` and add a new `twitter:image` at the real, deployed URL: `https://www.ftgguild.com/og-image.png` (matching the `www` canonical domain already used everywhere else — do **not** use the bare `ftgguild.com` from the user's example, since `CNAME` and every existing canonical/og:url tag use `www.ftgguild.com`).
   - Add `og:image:width` (1200) and `og:image:height` (630) so unfurlers don't have to fetch-and-measure the image themselves.
   - Add `og:image:type` (`image/png`).
   - Double check `link rel="icon"` resolves correctly in the production build (compare against `dist/index.html` after a build) — if it breaks in prod, move the favicon into `public/` too and reference it as `/favicon.png` or similar.

4. **Extend `PageMeta.jsx` + `routeMeta.js`** (optional, low-priority) to support a per-route `image` field, falling back to the default `og-image.png`, and add `setMetaTag` calls for `og:image` / `twitter:image`. This won't change what crawlers see (SPA limitation above still applies) but keeps the in-browser `<head>` state consistent for any tooling that does render JS, and sets up the codebase to support unique share images per page later without more rework.

5. **Note the SPA/crawler limitation explicitly to Alden** — if per-page-accurate embeds (e.g. a recruitment post linking `/recruitment` showing recruitment-specific title/description/image in the unfurl) actually matter, that requires either prerendering per route at build time (e.g. `vite-plugin-ssr`, `vite-plugin-prerender`, or a small static-HTML-generation script that stamps route-specific meta into a copy of `index.html` for each route at build time) or moving to a framework with SSR (Astro/Next/Remix). That's a bigger architectural decision, not a meta-tag fix — flagging it here so it's a conscious choice rather than a "why isn't this working" surprise later.

## Secondary findings worth a quick look

- Verify `/recruitment` is an actual registered route (only saw `App.jsx`'s shared shell; didn't confirm the full router table) — `routeMeta.js` has an entry for it but if the route doesn't exist the entry is dead weight.
- No `robots.txt` or `sitemap.xml` found anywhere in the repo. Not related to this task, but worth a follow-up plan since they affect discoverability/SEO independent of social embeds.

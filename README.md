# &lt;FTG&gt; — Guild Website

The source for [www.ftgguild.com](https://www.ftgguild.com), the site for **&lt;FTG&gt;**, a World of Warcraft Classic raiding guild on **Dreamscythe (Horde)**.

## About the guild

&lt;FTG&gt; runs two 25-man progression teams, **Charlie** and **Delta**, raiding Monday/Tuesday/Thursday at 6:30 PM server (8:30 PM Eastern). Both teams are currently 10/10 in Phase 2 and prepping for Black Temple and Mount Hyjal.

Loot runs on a personal loot list plus loot council — no EP/GP points economy. Progress is tracked on [WarcraftLogs](https://fresh.warcraftlogs.com/guild/us/dreamscythe/ftg) rather than hand-maintained on the site, and personal loot lists are managed through the guild's own [TMB](https://tmb.ftgguild.com) instance.

If you're a raider looking for a guild that's actually been stable for more than a phase, the full pitch — schedule, culture, what's expected — is on the [Recruitment page](https://www.ftgguild.com/recruitment). Fastest way to actually reach us is Discord:

**[discord.gg/b2VXu4ABPq](https://discord.gg/b2VXu4ABPq)**

## For visitors interested in the site itself

The rest of this README is for anyone who found this repo out of curiosity about how a small guild site like this is put together, rather than for the guild's own visitors — that audience should just go to the live site above.

### Stack

- **[React 18](https://react.dev/)** with **[React Router 7](https://reactrouter.com/)** (plain declarative `<Routes>`/`<Route>` — no loaders/actions, no server component features; this is a client-rendered SPA, not a framework app)
- **[Vite 6](https://vitejs.dev/)** for dev server and build
- **[React-Bootstrap 2](https://react-bootstrap.github.io/)** on top of **Bootstrap 5.3**, restyled through CSS custom properties rather than a Sass theme rebuild
- Plain CSS (`src/styles/theme.css`) — no CSS-in-JS, no Tailwind, no preprocessor
- No backend, no database, no CMS. It's a fully static site; every character byte of "dynamic" content is either hand-edited in code or delegated to a purpose-built external tool (see [Content model](#content-model) below)

### Notable implementation details

A few things worth knowing if you're picking through the code:

- **Theming** is entirely CSS custom properties, resolved in three tiers: a manually-toggled theme (persisted to `localStorage`) takes priority over the OS's `prefers-color-scheme`, which takes priority over a light-mode default. This maps directly onto Bootstrap 5.3's built-in `data-bs-theme` attribute mechanism rather than fighting it.
- **Client-side routing on a static host** — GitHub Pages has no concept of an SPA fallback, so deep links (`/raiding`, `/rules`, etc.) would 404 on a hard refresh without help. This repo uses the standard [spa-github-pages](https://github.com/rafgraph/spa-github-pages) trick: `public/404.html` re-encodes the requested path into a query string and redirects to `index.html`, which decodes it back via an inline script before React Router ever mounts.
- **Content/layout separation** — everything guild-specific (roster, schedule, rules copy, addon list, external links, current progression text) lives in `src/data/*.js`, separate from the `src/pages/*.jsx` components that render it. The guild has no CMS and no non-technical editors; this split just keeps "update the roster" a data-file edit instead of a JSX edit for the couple of developers who maintain it directly in code.
- **A few small accessibility/SEO details** that are easy to skip on a project this size but weren't: a skip-to-content link, a keyboard-navigable nav, per-route `<title>`/meta description (`PageMeta.jsx`), Open Graph/Twitter card tags for link-preview embeds (this matters in practice — Discord invites get shared with a rich preview instead of a bare URL), and a `sitemap.xml`/`robots.txt`.
- **Responsive images** for hero/section art use a manually-generated `srcset` at 400/800/1200px widths rather than a build-time image pipeline plugin — deliberately low-tech for a site with a handful of images that change rarely.

### Project structure

```
working/
├── src/
│   ├── pages/            One component per route
│   ├── components/layout/  Shared chrome: nav, footer, theme toggle, page header, etc.
│   ├── data/              Guild content as plain JS modules — the thing you actually
│   │                      edit to update the roster, schedule, rules, or addon list
│   ├── styles/theme.css   The entire visual system: CSS custom properties, light/dark
│   │                      tokens, and every component-level style rule
│   └── assets/            Images, in source form (responsive art gets pre-generated
│                          into 400/800/1200px variants alongside the originals)
├── public/                Copied to the build output as-is: robots.txt, sitemap.xml,
│                          og-image.png, the 404.html SPA-redirect shim, CNAME
├── .github/workflows/     GitHub Actions deploy pipeline (see below)
└── context/                Internal planning docs — audit notes, content drafts,
                            source material used while building the site
```

### Running it locally

```
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

No test suite or linter is configured — this is a small, mostly-static site maintained directly by a couple of developers; verification is `npm run build` succeeding plus a manual pass through the affected pages.

### Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`: install, `npm run build`, and publish `dist/` to GitHub Pages via `actions/deploy-pages`. No manual deploy step, no separate hosting account, no cost — GitHub Pages serves the whole thing for free. The custom domain (`www.ftgguild.com`) is wired up through `public/CNAME`, which Vite copies into the build output automatically.

## Content model

Everything on the site falls into one of three buckets, by design:

- **Static** — write once, touched rarely (About, Rules, Guild Rules, Addons). Edited directly in `src/data/` or `src/pages/` when something actually changes.
- **Periodic** — updated in code by hand at natural checkpoints, like a new tier's progression headline (`CURRENT_PROGRESSION` in `src/data/config.js`) or a roster change.
- **Embedded/linked** — deliberately *not* rebuilt here. Raid progress lives on WarcraftLogs, personal loot lists live on the guild's TMB instance, recruitment conversations happen in Discord. The site links out to all three rather than duplicating what a purpose-built tool already does better.

This is a static site with no backend by choice, not by limitation — if a feature would need one (accounts, forms, a database), the answer has consistently been "link to a tool that already has one," not "add a backend."

---

World of Warcraft and all related marks are the property of Blizzard Entertainment. This repository contains this guild's own website content and is not affiliated with or endorsed by Blizzard.

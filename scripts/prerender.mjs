// Static Site Generation: turns the client build (dist/) plus the SSR build
// (dist-server/) into a fully pre-rendered site - a real, crawlable, JS-optional
// index.html for every route, generated ahead of time instead of an empty
// <div id="root"> that only fills in after React loads in the browser.
//
// Runs as the third step of `npm run build`, after both `vite build` (client)
// and `vite build --ssr src/entry-server.jsx` (server) have produced dist/ and
// dist-server/ respectively. Requires both to already exist.
//
// For each real page (the keys of routeMeta below) this:
//   1. Calls the SSR bundle's render(url) to get that page's HTML.
//   2. Injects it into a copy of the built dist/index.html shell (same JS
//      bundle, same CSS, same <head> boilerplate - only the body content and
//      the per-route <head> meta tags change between routes).
//   3. Writes the result to dist/index.html (for "/") or dist/<route>/index.html
//      (everything else), so GitHub Pages serves a real file for that path
//      instead of 404ing on a hard refresh or a crawler's first request.
//
// It also writes dist/404.html from the NotFound page (GitHub Pages serves
// this automatically for any path with no matching file), and a plain static
// redirect page for every entry in redirects.js (see generateRedirectPage
// below for why those are hand-rolled HTML rather than SSR output).
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  DEFAULT_SHARE_IMAGE_HEIGHT,
  DEFAULT_SHARE_IMAGE_TYPE,
  DEFAULT_SHARE_IMAGE_URL,
  DEFAULT_SHARE_IMAGE_WIDTH,
  SITE_URL,
} from "../src/data/config.js";
import { routeMeta } from "../src/data/routeMeta.js";
import { redirects } from "../src/data/redirects.js";

const distDir = path.resolve("dist");
const ssrEntryPath = path.resolve("dist-server/entry-server.js");
const templatePath = path.join(distDir, "index.html");
const defaultImageAlt = "FTG guild logo";

const notFoundMeta = {
  title: "Page Not Found - FTG",
  description: "This page doesn't exist, moved, or got renamed.",
  noindex: true,
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function absoluteUrl(url) {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

function outputPathFor(routePath) {
  if (routePath === "/") {
    return templatePath;
  }

  return path.join(distDir, routePath, "index.html");
}

function setTag(html, selector, tagHtml) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`<meta\\s+${escapedSelector}[^>]*>`, "i");

  if (pattern.test(html)) {
    return html.replace(pattern, tagHtml);
  }

  return html.replace("</head>", `    ${tagHtml}\n  </head>`);
}

function setTitle(html, title) {
  return html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
}

function setCanonical(html, url) {
  const tag = `<link rel="canonical" href="${escapeHtml(url)}" />`;
  const pattern = /<link\s+rel="canonical"[^>]*>/i;

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setRootContent(html, rootHtml) {
  return html.replace('<div id="root"></div>', `<div id="root">${rootHtml}</div>`);
}

function withMeta(template, routePath, meta) {
  const url = `${SITE_URL}${routePath === "/" ? "/" : routePath}`;
  const image = absoluteUrl(meta.image ?? DEFAULT_SHARE_IMAGE_URL);
  const imageAlt = meta.imageAlt ?? defaultImageAlt;
  let html = setTitle(template, meta.title);

  html = setCanonical(html, url);
  html = setTag(html, 'name="description"', `<meta name="description" content="${escapeHtml(meta.description)}" />`);
  html = setTag(html, 'property="og:type"', '<meta property="og:type" content="website" />');
  html = setTag(html, 'property="og:title"', `<meta property="og:title" content="${escapeHtml(meta.title)}" />`);
  html = setTag(
    html,
    'property="og:description"',
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
  );
  html = setTag(html, 'property="og:url"', `<meta property="og:url" content="${escapeHtml(url)}" />`);
  html = setTag(html, 'property="og:image"', `<meta property="og:image" content="${escapeHtml(image)}" />`);
  html = setTag(
    html,
    'property="og:image:width"',
    `<meta property="og:image:width" content="${DEFAULT_SHARE_IMAGE_WIDTH}" />`,
  );
  html = setTag(
    html,
    'property="og:image:height"',
    `<meta property="og:image:height" content="${DEFAULT_SHARE_IMAGE_HEIGHT}" />`,
  );
  html = setTag(
    html,
    'property="og:image:type"',
    `<meta property="og:image:type" content="${DEFAULT_SHARE_IMAGE_TYPE}" />`,
  );
  html = setTag(
    html,
    'property="og:image:alt"',
    `<meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />`,
  );
  html = setTag(html, 'name="twitter:card"', '<meta name="twitter:card" content="summary" />');
  html = setTag(html, 'name="twitter:title"', `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`);
  html = setTag(
    html,
    'name="twitter:description"',
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
  );
  html = setTag(html, 'name="twitter:image"', `<meta name="twitter:image" content="${escapeHtml(image)}" />`);
  html = setTag(
    html,
    'name="twitter:image:alt"',
    `<meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}" />`,
  );

  if (meta.noindex) {
    html = setTag(html, 'name="robots"', '<meta name="robots" content="noindex" />');
  }

  return html;
}

// The `redirects.js` routes are deliberately NOT rendered through React/SSR.
// Rendering them through AppRoutes would mean React Router's <Navigate> and
// ExternalRedirect both render nothing useful during SSR (their real work -
// navigate()/window.location.replace - only happens client-side, in an
// effect, which doesn't run in renderToString). That would prerender an
// empty page. A plain static <meta http-equiv="refresh"> page is simpler,
// works with JS disabled, and needs no hydration (no <script> at all here,
// so there's no client/server markup mismatch to worry about).
function generateRedirectPage(target) {
  const isExternal = /^https?:\/\//i.test(target);
  const href = isExternal ? target : absoluteUrl(target);
  const canonicalTag = isExternal ? "" : `\n    <link rel="canonical" href="${escapeHtml(href)}" />`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex" />
    <meta http-equiv="refresh" content="0; url=${escapeHtml(href)}" />${canonicalTag}
    <title>Redirecting... - FTG</title>
  </head>
  <body>
    <p>Redirecting to <a href="${escapeHtml(href)}">${escapeHtml(href)}</a>&hellip;</p>
  </body>
</html>
`;
}

async function main() {
  const template = await readFile(templatePath, "utf8");
  const { render } = await import(ssrEntryPath);

  for (const [routePath, meta] of Object.entries(routeMeta)) {
    const bodyHtml = render(routePath);
    let html = setRootContent(template, bodyHtml);
    html = withMeta(html, routePath, meta);

    const outputPath = outputPathFor(routePath);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
    console.log(`prerendered ${routePath === "/" ? "/" : routePath}`);
  }

  // 404.html: GitHub Pages serves this for any request that doesn't match a
  // real file, so this is the actual NotFound page, not a redirect trick.
  const notFoundHtml = render("/this-page-does-not-exist");
  let notFoundPage = setRootContent(template, notFoundHtml);
  notFoundPage = withMeta(notFoundPage, "/404", notFoundMeta);
  await writeFile(path.join(distDir, "404.html"), notFoundPage);
  console.log("prerendered 404.html");

  for (const [routePath, target] of Object.entries(redirects)) {
    const outputPath = outputPathFor(routePath);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, generateRedirectPage(target));
    console.log(`wrote redirect stub ${routePath} -> ${target}`);
  }

  // dist-server/ is a build-time-only artifact - nothing in it should ship.
  // Cleanup failure shouldn't fail the whole build (e.g. a locked file on
  // Windows) - dist-server/ is gitignored either way, so at worst it's a
  // stray folder that gets overwritten by the next build.
  try {
    await rm(path.resolve("dist-server"), { recursive: true, force: true });
  } catch (error) {
    console.warn(`warning: could not remove dist-server/ (${error.message})`);
  }
}

await main();

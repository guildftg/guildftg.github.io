// Single source of truth for every route that isn't a real page: legacy/aliased
// paths that should land somewhere else on the site, plus the short external
// links (/discord, /tmb, /logs). `src/routes.jsx` turns each entry into a client
// route (in-app navigation), and `scripts/prerender.mjs` turns each entry into a
// static redirect page (direct/hard loads, crawlers, JS-disabled clients) - so
// this map is the only place a redirect needs to be added or changed.
import {
  DISCORD_INVITE_URL,
  PUG_TMB_URL,
  TMB_URL,
  WARCRAFTLOGS_URL,
} from "./config.js";

export const redirects = {
  "/roster": "/raiding",
  "/progress": "/raiding",
  "/schedule": "/raiding",
  "/guild-rules": "/rules",
  "/rules/loot-changes": "/raiding/loot-changes",
  "/tmb": TMB_URL,
  "/pug": PUG_TMB_URL,
  "/logs": WARCRAFTLOGS_URL,
  "/discord": DISCORD_INVITE_URL,
};

export function isExternalRedirect(target) {
  return /^https?:\/\//i.test(target);
}

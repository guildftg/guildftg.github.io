import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  ssr: {
    // This SSR bundle only ever runs once, transiently, inside
    // scripts/prerender.mjs at build time - it's never shipped to the browser
    // and never runs as a persistent server. So there's no cold-start/bundle-size
    // reason to externalize node_modules the way you would for a real SSR server.
    // Bundling everything sidesteps the whole class of "package X has deep
    // subpath imports without a modern exports map, and Node's native ESM
    // resolver can't load them at runtime" errors (react-bootstrap, dom-helpers,
    // and likely more of react-bootstrap's own dependency tree) instead of
    // fixing them one at a time as each one surfaces.
    noExternal: true,
  },
});

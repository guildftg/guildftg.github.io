import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  ssr: {
    // react-bootstrap ships deep subpath imports (e.g. "react-bootstrap/Container")
    // without a modern package.json "exports" map. Vite's SSR build externalizes
    // node_modules packages by default, so at runtime Node's native ESM resolver
    // tries to load those bare specifiers itself and fails with
    // ERR_UNSUPPORTED_DIR_IMPORT (Node's ESM resolver won't do the implicit
    // directory/extension resolution that CommonJS require() does). Bundling
    // react-bootstrap into the SSR output at build time sidesteps that entirely.
    noExternal: ["react-bootstrap"],
  },
});

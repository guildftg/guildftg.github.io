import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import AppRoutes from "./routes.jsx";

// Renders one route to an HTML string, server-side. Only used at build time
// by scripts/prerender.mjs via the `dist-server` SSR bundle - never shipped
// to the browser, never runs at request time (GitHub Pages only serves
// static files).
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  );
}

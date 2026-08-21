import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/theme.css";
import AppRoutes from "./routes.jsx";

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

// Every route in `redirects.js` is prerendered as a plain static HTML page
// (no root div, no bundle - see scripts/prerender.mjs), so there's nothing to
// hydrate there. Every other route is prerendered WITH matching markup, so
// hydrateRoot attaches to it instead of throwing it away and re-rendering
// from scratch on first paint.
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}

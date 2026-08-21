import { Navigate, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Recruitment from "./pages/Recruitment.jsx";
import Raiding from "./pages/Raiding.jsx";
import About from "./pages/About.jsx";
import Rules from "./pages/Rules.jsx";
import RaidingLootChanges from "./pages/RaidingLootChanges.jsx";
import Addons from "./pages/Addons.jsx";
import NotFound from "./pages/NotFound.jsx";
import ExternalRedirect from "./components/layout/ExternalRedirect.jsx";
import { isExternalRedirect, redirects } from "./data/redirects.js";

// The routes actually rendered by React - used as-is by the client (inside
// BrowserRouter) and by the SSR entry (inside StaticRouter) so the two can
// never drift. Note that scripts/prerender.mjs does NOT render the `redirects`
// routes below through this tree at build time - it generates plain static
// redirect pages for those instead (see that script for why), so this is only
// where they're wired up for in-app client-side navigation.
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/raiding" element={<Raiding />} />
        <Route path="/raiding/loot-changes" element={<RaidingLootChanges />} />
        <Route path="/about" element={<About />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/addons" element={<Addons />} />

        {Object.entries(redirects).map(([path, target]) =>
          isExternalRedirect(target) ? (
            <Route key={path} path={path} element={<ExternalRedirect to={target} />} />
          ) : (
            <Route key={path} path={path} element={<Navigate to={target} replace />} />
          ),
        )}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

import { Outlet } from "react-router-dom";
import SiteFooter from "./components/layout/Footer.jsx";
import SiteNavBar from "./components/layout/NavBar.jsx";
import NavigationReset from "./components/layout/NavigationReset.jsx";
import PageMeta from "./components/layout/PageMeta.jsx";

export default function App() {
  return (
    <div className="site-shell">
      <PageMeta />
      <NavigationReset />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteNavBar />
      <main id="main-content" className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

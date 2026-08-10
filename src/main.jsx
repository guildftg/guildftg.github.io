import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/theme.css";
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
import { DISCORD_INVITE_URL, TMB_URL, WARCRAFTLOGS_URL } from "./data/config.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/raiding" element={<Raiding />} />
          <Route path="/roster" element={<Navigate to="/raiding" replace />} />
          <Route path="/progress" element={<Navigate to="/raiding" replace />} />
          <Route path="/raiding/loot-changes" element={<RaidingLootChanges />} />
          <Route path="/about" element={<About />} />
          <Route path="/rules" element={<Rules />} />
          <Route
            path="/rules/loot-changes"
            element={<Navigate to="/raiding/loot-changes" replace />}
          />
          <Route path="/guild-rules" element={<Navigate to="/rules" replace />} />
          <Route path="/schedule" element={<Navigate to="/raiding" replace />} />
          <Route path="/addons" element={<Addons />} />
          <Route path="/tmb" element={<ExternalRedirect to={TMB_URL} />} />
          <Route path="/logs" element={<ExternalRedirect to={WARCRAFTLOGS_URL} />} />
          <Route path="/discord" element={<ExternalRedirect to={DISCORD_INVITE_URL} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL } from "../../data/config.js";
import { routeMeta } from "../../data/routeMeta.js";

const DEFAULT_TITLE = "FTG - Dreamscythe Horde Raiding Guild";
const DEFAULT_DESCRIPTION =
  "FTG is a Horde raiding guild on Dreamscythe running two 25-man progression teams.";

function setMetaTag(attr, key, content) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonical(url) {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = routeMeta[pathname] ?? {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    };
    const url = `${SITE_URL}${pathname}`;

    document.title = meta.title;
    setMetaTag("name", "description", meta.description);
    setMetaTag("property", "og:title", meta.title);
    setMetaTag("property", "og:description", meta.description);
    setMetaTag("property", "og:url", url);
    setMetaTag("name", "twitter:title", meta.title);
    setMetaTag("name", "twitter:description", meta.description);
    setCanonical(url);
  }, [pathname]);

  return null;
}

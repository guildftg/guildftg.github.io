import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_SHARE_IMAGE_HEIGHT,
  DEFAULT_SHARE_IMAGE_TYPE,
  DEFAULT_SHARE_IMAGE_URL,
  DEFAULT_SHARE_IMAGE_WIDTH,
  SITE_URL,
} from "../../data/config.js";
import { routeMeta } from "../../data/routeMeta.js";

const DEFAULT_TITLE = "FTG - Dreamscythe Horde Raiding Guild";
const DEFAULT_DESCRIPTION =
  "FTG is a Horde raiding guild on Dreamscythe running two 25-man progression teams.";
const DEFAULT_SHARE_IMAGE_ALT = "FTG guild logo";

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

function toAbsoluteUrl(url) {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = routeMeta[pathname] ?? {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    };
    const url = `${SITE_URL}${pathname}`;
    const image = toAbsoluteUrl(meta.image ?? DEFAULT_SHARE_IMAGE_URL);

    document.title = meta.title;
    setMetaTag("name", "description", meta.description);
    setMetaTag("property", "og:title", meta.title);
    setMetaTag("property", "og:description", meta.description);
    setMetaTag("property", "og:url", url);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:image", image);
    setMetaTag("property", "og:image:width", DEFAULT_SHARE_IMAGE_WIDTH);
    setMetaTag("property", "og:image:height", DEFAULT_SHARE_IMAGE_HEIGHT);
    setMetaTag("property", "og:image:type", DEFAULT_SHARE_IMAGE_TYPE);
    setMetaTag("property", "og:image:alt", meta.imageAlt ?? DEFAULT_SHARE_IMAGE_ALT);
    setMetaTag("name", "twitter:card", "summary");
    setMetaTag("name", "twitter:title", meta.title);
    setMetaTag("name", "twitter:description", meta.description);
    setMetaTag("name", "twitter:image", image);
    setMetaTag("name", "twitter:image:alt", meta.imageAlt ?? DEFAULT_SHARE_IMAGE_ALT);
    setCanonical(url);
  }, [pathname]);

  return null;
}

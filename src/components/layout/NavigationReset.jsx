import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function NavigationReset() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    window.getSelection?.()?.removeAllRanges();

    if (hash) {
      const timeoutId = window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);

      return () => window.clearTimeout(timeoutId);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [hash, pathname]);

  return null;
}

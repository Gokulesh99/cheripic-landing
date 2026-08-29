import { useEffect } from "react";
import scrollToId from "../utils/scrollToId.js";

// Routes every same-page `#hash` link through scrollToId, which measures the
// target correctly despite lazy sections and content-visibility. Delegated at
// the document so individual components keep their plain <a href="#..."> markup.
export default function useHashLinks() {
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = e.target.closest?.('a[href*="#"]');
      if (!link || link.target === "_blank") return;

      const url = new URL(link.href, window.location.href);
      if (url.pathname !== window.location.pathname || url.hash.length < 2) return;

      e.preventDefault();
      window.history.pushState({}, "", url.hash);
      scrollToId(url.hash.slice(1));
    };

    document.addEventListener("click", onClick);

    // Deep link (/#join) or a back/forward step onto a hash.
    const onPop = () => {
      if (window.location.hash.length > 1) scrollToId(window.location.hash.slice(1));
    };
    if (window.location.hash.length > 1) scrollToId(window.location.hash.slice(1));
    window.addEventListener("popstate", onPop);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPop);
    };
  }, []);
}

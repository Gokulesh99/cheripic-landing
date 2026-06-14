import { useEffect, useState } from "react";

// Minimal client-side router built on the History API — no extra dependencies.
// `navigate("/path")` or `navigate("/#join")` updates the URL and notifies
// listeners; a trailing #hash is scrolled into view on the destination page.
export function navigate(to) {
  const hashIndex = to.indexOf("#");
  const hash = hashIndex >= 0 ? to.slice(hashIndex + 1) : "";

  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));

  if (hash) {
    // Wait for the destination view to render before scrolling to the anchor.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      })
    );
  } else {
    window.scrollTo(0, 0);
  }
}

export default function useRoute() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return path;
}

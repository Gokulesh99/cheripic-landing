import { useEffect, useState } from 'react';

/**
 * Tiny hash router. Only hashes that start with `#/` count as routes,
 * so in-page anchors (`#top`, `#main`) keep working untouched.
 * Hash routing needs no server rewrites — the site stays a static build.
 *
 * '#/legal/privacy' -> '/legal/privacy'   ·   '#top' or '' -> '/'
 */
export function useHashRoute() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}

function readRoute() {
  const { hash } = window.location;
  return hash.startsWith('#/') ? hash.slice(1).replace(/\/+$/, '') || '/' : '/';
}

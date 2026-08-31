import { lazy, Suspense } from 'react';
import { useHashRoute } from '@hooks/useHashRoute';
import Home from '@pages/Home';

// The legal agreement is a large, rarely-visited route — split it out so it
// never weighs down the landing page's initial load.
const Legal = lazy(() => import('@pages/Legal'));

/**
 * Routes live in the hash (`#/legal/privacy`) so the build stays a static
 * bundle — no server rewrite rules needed. Anything that isn't a known
 * route falls through to the landing page.
 */
export default function App() {
  const route = useHashRoute();

  if (route === '/legal' || route.startsWith('/legal/')) {
    const focus = route.slice('/legal'.length).replace(/^\//, '');
    return (
      <Suspense fallback={null}>
        <Legal focus={focus || undefined} />
      </Suspense>
    );
  }

  if (route === '/privacy')
    return (
      <Suspense fallback={null}>
        <Legal focus="privacy" />
      </Suspense>
    );

  if (route === '/terms')
    return (
      <Suspense fallback={null}>
        <Legal />
      </Suspense>
    );

  return <Home />;
}

import { lazy, Suspense } from 'react';
import { useHashRoute } from '@hooks/useHashRoute';
import Home from '@pages/Home';

// The legal agreement is a large, rarely-visited route — split it out so it
// never weighs down the landing page's initial load.
const Legal = lazy(() => import('@pages/Legal'));
const DeleteAccount = lazy(() => import('@pages/DeleteAccount'));
const Pricing = lazy(() => import('@pages/Pricing'));
const LawEnforcement = lazy(() => import('@pages/LawEnforcement'));

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

  // Linked from the mobile app (Profile & settings) and app-store listings.
  if (route === '/community-guidelines')
    return (
      <Suspense fallback={null}>
        <Legal focus="conduct" />
      </Suspense>
    );

  if (route === '/pricing')
    return (
      <Suspense fallback={null}>
        <Pricing />
      </Suspense>
    );

  if (route === '/law-enforcement')
    return (
      <Suspense fallback={null}>
        <LawEnforcement />
      </Suspense>
    );

  if (route === '/delete-account')
    return (
      <Suspense fallback={null}>
        <DeleteAccount />
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

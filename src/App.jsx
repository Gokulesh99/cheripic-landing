import { lazy, Suspense } from 'react';
import { useHashRoute } from '@hooks/useHashRoute';
import Home from '@pages/Home';

// The legal agreement is a large, rarely-visited route — split it out so it
// never weighs down the landing page's initial load.
const Legal = lazy(() => import('@pages/Legal'));
const DeleteAccount = lazy(() => import('@pages/DeleteAccount'));
const Policy = lazy(() => import('@pages/Policy'));

/**
 * Standalone policy pages, keyed by route -> policies.js entry. Checked
 * before the `/legal/<section>` catch-all so these slugs win over clauses.
 * The un-prefixed aliases keep links already shipped in the mobile app and
 * app-store listings working.
 */
const policyRoutes = {
  '/legal/acceptable-use': 'acceptableUse',
  '/legal/community-guidelines': 'communityGuidelines',
  '/community-guidelines': 'communityGuidelines',
  '/legal/law-enforcement': 'lawEnforcement',
  '/law-enforcement': 'lawEnforcement',
  '/legal/subscriptions-refunds': 'subscriptions',
  // Plans and their terms are one page now.
  '/pricing': 'subscriptions',
  '/safety': 'safety',
  '/service-availability': 'availability',
  '/contact': 'contact',
};

/**
 * Routes live in the hash (`#/legal/privacy`) so the build stays a static
 * bundle — no server rewrite rules needed. Anything that isn't a known
 * route falls through to the landing page.
 */
export default function App() {
  const route = useHashRoute();

  const policy = policyRoutes[route];
  if (policy)
    return (
      <Suspense fallback={null}>
        <Policy page={policy} />
      </Suspense>
    );

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

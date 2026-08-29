import { useHashRoute } from '@hooks/useHashRoute';
import { Home, Legal } from '@pages';

/**
 * Routes live in the hash (`#/legal/privacy`) so the build stays a static
 * bundle — no server rewrite rules needed. Anything that isn't a known
 * route falls through to the landing page.
 */
export default function App() {
  const route = useHashRoute();

  if (route === '/legal' || route.startsWith('/legal/')) {
    const focus = route.slice('/legal'.length).replace(/^\//, '');
    return <Legal focus={focus || undefined} />;
  }

  if (route === '/privacy') return <Legal focus="privacy" />;
  if (route === '/terms') return <Legal />;

  return <Home />;
}

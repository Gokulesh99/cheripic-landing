import { lazy, Suspense, useEffect } from 'react';
// Import above-the-fold pieces directly (not via the barrels) so the barrels
// don't statically pull every section/layout module into the main chunk and
// defeat the lazy splits below.
import { ComingSoonProvider } from '@components/ui/ComingSoonModal';
import Header from '@components/layout/Header';
import StickyCta from '@components/layout/StickyCta';
import Footer from '@components/layout/Footer';
import Hero from '@components/sections/Hero';
import VideoShowcase from '@components/sections/VideoShowcase';

// Above the fold (Hero, video) ships in the main bundle. Everything below is
// split into its own chunk so the initial JavaScript payload stays small.
const Pain = lazy(() => import('@components/sections/Pain'));
const HowItWorks = lazy(() => import('@components/sections/HowItWorks'));
const Perks = lazy(() => import('@components/sections/Perks'));
const Pricing = lazy(() => import('@components/sections/Pricing'));
const CheriAi = lazy(() => import('@components/sections/CheriAi'));
const FinalCta = lazy(() => import('@components/sections/FinalCta'));

export default function Home() {
  // Returning from a legal route should land at the top, not mid-page.
  useEffect(() => {
    const { hash } = window.location;
    if (!hash || hash === '#top') window.scrollTo(0, 0);
  }, []);

  return (
    <ComingSoonProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <VideoShowcase />
        <Suspense fallback={null}>
          <Pain />
          <HowItWorks />
          <Perks />
          <Pricing />
          <CheriAi />
          <FinalCta />
        </Suspense>
      </main>

      <Footer />
      <StickyCta />
    </ComingSoonProvider>
  );
}

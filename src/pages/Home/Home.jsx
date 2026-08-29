import { useEffect } from 'react';
import { Footer, Header, StickyCta } from '@components/layout';
import {
  CheriAi,
  FinalCta,
  Hero,
  HowItWorks,
  Pain,
  Perks,
  VideoShowcase,
} from '@components/sections';

export default function Home() {
  // Returning from a legal route should land at the top, not mid-page.
  useEffect(() => {
    const { hash } = window.location;
    if (!hash || hash === '#top') window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <VideoShowcase />
        <Pain />
        <HowItWorks />
        <Perks />
        <CheriAi />
        <FinalCta />
      </main>

      <Footer />
      <StickyCta />
    </>
  );
}

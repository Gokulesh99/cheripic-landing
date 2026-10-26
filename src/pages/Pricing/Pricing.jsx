import { useEffect } from 'react';
import { Container, Footer, Header } from '@components/layout';
import PricingSection from '@components/sections/Pricing';
import { pricing, site } from '@data/content';
import styles from './Pricing.module.css';

/**
 * Standalone membership page (#/pricing), linked from the footer.
 * Reuses the landing page's pricing section verbatim so the plans only
 * ever live in one place; here its heading is the page's h1.
 */
export default function Pricing() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${pricing.eyebrow} — ${site.name}`;
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#pricing-main">
        Skip to content
      </a>

      <Header />

      <main id="pricing-main" className={styles.page}>
        <Container>
          <a className={styles.back} href="#top">
            <span aria-hidden="true">←</span> Back to {site.name}
          </a>
        </Container>

        <PricingSection headingLevel="h1" />
      </main>

      <Footer />
    </>
  );
}

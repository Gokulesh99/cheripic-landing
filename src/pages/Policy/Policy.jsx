import { useEffect } from 'react';
import { Container, Footer, Header } from '@components/layout';
import PricingSection from '@components/sections/Pricing';
import { policies } from '@data/policies';
import { site } from '@data/content';
import { cx } from '@/utils/cx';
import LegalBlock from '../Legal/LegalBlock';
import legalStyles from '../Legal/Legal.module.css';
import styles from './Policy.module.css';

/**
 * Standalone public policy page — Acceptable Use, Community Guidelines,
 * Safety, Law Enforcement, Subscriptions, Service Availability, Contact.
 * `page` is a key into policies.js. Reuses the legal page's typography so
 * every policy reads as one set. A policy with `plans` also shows the
 * landing page's pricing section after its terms, so plans and their terms
 * share one page.
 */
export default function Policy({ page }) {
  const policy = policies[page];

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${policy.title} — ${site.name}`;
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
    };
  }, [policy]);

  return (
    <>
      <a className="skip-link" href="#policy-main">
        Skip to content
      </a>

      <Header />

      <main id="policy-main" className={cx(legalStyles.page, policy.plans && styles.withPlans)}>
        <Container>
          <header className={legalStyles.head}>
            <a className={legalStyles.back} href="#top">
              <span aria-hidden="true">←</span> Back to {site.name}
            </a>
            <h1 className={legalStyles.title}>{policy.title}</h1>
            {policy.subtitle && <p className={legalStyles.subtitle}>{policy.subtitle}</p>}
            {policy.updated && <p className={styles.updated}>{policy.updated}</p>}
          </header>
        </Container>

        <Container>
          <article id="policy-text" className={cx(legalStyles.doc, styles.doc)}>
            {policy.sections.map((section) => (
              <section key={section.id} id={section.id} className={legalStyles.section}>
                {section.title && <h2 className={legalStyles.sectionTitle}>{section.title}</h2>}
                {section.body.map((item, index) => (
                  <LegalBlock key={index} item={item} />
                ))}
              </section>
            ))}
          </article>
        </Container>

        {policy.plans && <PricingSection />}
      </main>

      <Footer />
    </>
  );
}

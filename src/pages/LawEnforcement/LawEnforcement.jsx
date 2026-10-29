import { useEffect } from 'react';
import { Container, Footer, Header } from '@components/layout';
import { lawEnforcementMeta, lawEnforcementSections } from '@data/lawEnforcement';
import { site } from '@data/content';
import LegalBlock from '../Legal/LegalBlock';
import styles from '../Legal/Legal.module.css';

/**
 * Law enforcement request guidelines (#/law-enforcement), linked as
 * "Legal" in the footer. Reuses the legal page's typography so it reads
 * as part of the policies.
 */
export default function LawEnforcement() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${lawEnforcementMeta.title} — ${site.name}`;
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#law-enforcement-main">
        Skip to content
      </a>

      <Header />

      <main id="law-enforcement-main" className={styles.page}>
        <Container>
          <header className={styles.head}>
            <a className={styles.back} href="#top">
              <span aria-hidden="true">←</span> Back to {site.name}
            </a>
            <h1 className={styles.title}>{lawEnforcementMeta.title}</h1>
            <p className={styles.subtitle}>{lawEnforcementMeta.updated}</p>
          </header>

          <article className={styles.doc}>
            {lawEnforcementSections.map((section) => (
              <section key={section.id} id={section.id} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {section.body.map((item, index) => (
                  <LegalBlock key={index} item={item} />
                ))}
              </section>
            ))}
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}

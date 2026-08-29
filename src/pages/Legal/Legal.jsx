import { useEffect } from 'react';
import { Container, Footer, Header } from '@components/layout';
import { legalMeta, legalSections } from '@data/legal';
import { site } from '@data/content';
import LegalBlock from './LegalBlock';
import LegalToc from './LegalToc';
import { sectionSlug } from './slug';
import styles from './Legal.module.css';

/**
 * Full Master User Agreement. `focus` is the section id pulled from the
 * route (#/legal/privacy -> 'privacy') and scrolls that section into view.
 */
export default function Legal({ focus }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${legalMeta.title} — ${site.name}`;
    return () => {
      document.title = previousTitle;
    };
  }, []);

  useEffect(() => {
    const target = focus && document.getElementById(focus);
    if (target) target.scrollIntoView({ behavior: 'auto', block: 'start' });
    else window.scrollTo(0, 0);
  }, [focus]);

  return (
    <>
      <a className="skip-link" href="#legal-main">
        Skip to content
      </a>

      <Header />

      <main id="legal-main" className={styles.page}>
        <Container>
          <header className={styles.head}>
            <a className={styles.back} href="#top">
              <span aria-hidden="true">←</span> Back to {site.name}
            </a>

            <h1 className={styles.title}>{legalMeta.title}</h1>
            <p className={styles.subtitle}>{legalMeta.subtitle}</p>

            <dl className={styles.meta}>
              <div className={styles.metaItem}>
                <dt>Effective</dt>
                <dd>{legalMeta.effectiveDate}</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>Platform</dt>
                <dd>{legalMeta.platform}</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>Operated by</dt>
                <dd>{legalMeta.operatedBy}</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>Websites</dt>
                <dd>{legalMeta.websites.join(' · ')}</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>Support</dt>
                <dd>
                  <a className={styles.link} href={`mailto:${legalMeta.support}`}>
                    {legalMeta.support}
                  </a>
                </dd>
              </div>
            </dl>
          </header>

          <div className={styles.layout}>
            <LegalToc sections={legalSections} />

            <article className={styles.doc}>
              {legalSections.map((section) => (
                <section key={section.num} id={sectionSlug(section)} className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.num}>{section.num}</span>
                    {section.title}
                  </h2>
                  {section.body.map((item, index) => (
                    <LegalBlock key={index} item={item} />
                  ))}
                </section>
              ))}

              {/* <p className={styles.footnote}>{site.legal}</p> */}
            </article>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}

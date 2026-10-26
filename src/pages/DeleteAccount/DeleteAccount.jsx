import { useEffect } from 'react';
import { Container, Footer, Header } from '@components/layout';
import { deleteAccountMeta, deleteAccountSections } from '@data/deleteAccount';
import { site } from '@data/content';
import LegalBlock from '../Legal/LegalBlock';
import styles from '../Legal/Legal.module.css';

/**
 * Public account-deletion instructions (#/delete-account). Linked from the
 * mobile app, the Privacy Policy and the Google Play data-safety form.
 * Reuses the legal page's typography so it reads as part of the policies.
 */
export default function DeleteAccount() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${deleteAccountMeta.title} — ${site.name}`;
    window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const mailto = `mailto:support@cheripic.com?subject=${encodeURIComponent(
    deleteAccountMeta.requestSubject,
  )}&body=${encodeURIComponent(deleteAccountMeta.requestBody)}`;

  return (
    <>
      <a className="skip-link" href="#delete-main">
        Skip to content
      </a>

      <Header />

      <main id="delete-main" className={styles.page}>
        <Container>
          <header className={styles.head}>
            <a className={styles.back} href="#top">
              <span aria-hidden="true">←</span> Back to {site.name}
            </a>
            <h1 className={styles.title}>{deleteAccountMeta.title}</h1>
            <p className={styles.subtitle}>{deleteAccountMeta.subtitle}</p>
          </header>

          <article className={styles.doc}>
            {deleteAccountSections.map((section) => (
              <section key={section.id} id={section.id} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {section.body.map((item, index) => (
                  <LegalBlock key={index} item={item} />
                ))}
                {section.id === 'without-the-app' ? (
                  <p className={styles.p}>
                    <a className={styles.link} href={mailto}>
                      {deleteAccountMeta.requestLabel}
                    </a>
                  </p>
                ) : null}
              </section>
            ))}
            <p className={styles.p}>
              <a className={styles.link} href={site.deletionPolicyUrl}>
                Read the full Data Retention and Account Deletion policy
              </a>
            </p>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}

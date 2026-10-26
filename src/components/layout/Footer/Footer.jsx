import Container from '../Container';
import { Icon } from '@components/ui';
import { site } from '@data/content';
import styles from './Footer.module.css';

/** wa.me wants the number as digits only — no +, spaces or dashes. */
const whatsappUrl = `https://wa.me/${site.whatsappNumber.replace(/\D/g, '')}`;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <span>{site.legal}</span>
        {/* Two groups so the row splits predictably on narrow screens
            instead of wrapping wherever it runs out of space. */}
        <nav className={styles.links} aria-label="Footer">
          <div className={styles.group}>
            <a href={site.privacyUrl}>Privacy</a>
            <a href={site.termsUrl}>Terms</a>
            <a href={site.communityUrl}>Community</a>
          </div>
          <div className={styles.group}>
            {/* <a href={site.pricingUrl}>Pricing</a> */}
            <a href={site.deleteAccountUrl}>Delete account</a>
            <a
              className={styles.whatsapp}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Connect with us on WhatsApp at ${site.whatsappNumber}`}
            >
              <Icon name="whatsapp" size={15} className={styles.whatsappMark} />
              Connect
            </a>
          </div>
        </nav>
      </Container>
    </footer>
  );
}

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
        <nav className={styles.links} aria-label="Footer">
          <a href={site.privacyUrl}>Privacy</a>
          <a href={site.termsUrl}>Terms</a>
          {/* <a
            className={styles.whatsapp}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Connect with us on WhatsApp at ${site.whatsappNumber}`}
          >
            <Icon name="whatsapp" size={15} className={styles.whatsappMark} />
            Connect
          </a> */}
          <p>Thanks</p>
        </nav>
      </Container>
    </footer>
  );
}

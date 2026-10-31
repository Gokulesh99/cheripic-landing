import Container from '../Container';
import { Icon } from '@components/ui';
import { footerLinks, site } from '@data/content';
import styles from './Footer.module.css';

/** wa.me wants the number as digits only — no +, spaces or dashes. */
const whatsappUrl = `https://wa.me/${site.whatsappNumber.replace(/\D/g, '')}`;

/** `withStickyCta` reserves room for the landing page's fixed mobile CTA bar. */
export default function Footer({ withStickyCta = false }) {
  return (
    <footer className={`${styles.footer} ${withStickyCta ? styles.withSticky : ''}`}>
      <Container className={styles.inner}>
        <nav className={styles.links} aria-label="Footer">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
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
        </nav>

        <div className={styles.company}>
          <p>{site.operator}</p>
          <p>
            Support: <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
          </p>
          <p>{site.legal}</p>
        </div>
      </Container>
    </footer>
  );
}

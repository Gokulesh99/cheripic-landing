import Container from '../Container';
import { Button, Logo } from '@components/ui';
import { useScrolled } from '@hooks/useScrolled';
import { site } from '@data/content';
import { cx } from '@/utils/cx';
import styles from './Header.module.css';

/** Fixed top bar that condenses and gains a backdrop once scrolled. */
export default function Header() {
  const isScrolled = useScrolled(30);

  return (
    <header className={cx(styles.header, isScrolled && styles.scrolled)}>
      <Container className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label={`${site.name} home`}>
          <Logo label={site.name} />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <a href={site.signInUrl} className={styles.signIn}>
            Sign In
          </a>
          <Button href={site.joinUrl} size="sm">
            Join Free
          </Button>
        </nav>
      </Container>
    </header>
  );
}

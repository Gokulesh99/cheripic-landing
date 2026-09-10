import Container from '../Container';
import { JoinButton, Logo, useComingSoon } from '@components/ui';
import { useScrolled } from '@hooks/useScrolled';
import { site } from '@data/content';
import { cx } from '@/utils/cx';
import styles from './Header.module.css';

/** Fixed top bar that condenses and gains a backdrop once scrolled. */
export default function Header() {
  const isScrolled = useScrolled(30);
  const openComingSoon = useComingSoon();

  return (
    <header className={cx(styles.header, isScrolled && styles.scrolled)}>
      <Container className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label={`${site.name} home`}>
          <Logo label={site.name} />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {/* Pre-launch both routes to the coming-soon overlay; without a
              provider it degrades to the app link. */}
          {openComingSoon ? (
            <button
              type="button"
              className={styles.signIn}
              onClick={openComingSoon}
              aria-haspopup="dialog"
            >
              Sign In
            </button>
          ) : (
            <a href={site.signInUrl} className={styles.signIn}>
              Sign In
            </a>
          )}
          <JoinButton size="sm">Join Free</JoinButton>
        </nav>
      </Container>
    </header>
  );
}

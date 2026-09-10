import { JoinButton } from '@components/ui';
import { useScrolled } from '@hooks/useScrolled';
import { site } from '@data/content';
import { cx } from '@/utils/cx';
import styles from './StickyCta.module.css';

/**
 * Mobile-only bottom bar. Slides in after the hero + video block
 * so it never competes with the primary CTA above the fold.
 */
export default function StickyCta({ showAfter = 620 }) {
  const isVisible = useScrolled(showAfter);

  return (
    <div className={cx(styles.bar, isVisible && styles.visible)} aria-hidden={!isVisible}>
      <JoinButton fullWidth tabIndex={isVisible ? 0 : -1}>
        {site.ctaLabel}
      </JoinButton>
    </div>
  );
}

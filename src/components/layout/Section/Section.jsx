import Container from '../Container';
import { cx } from '@/utils/cx';
import styles from './Section.module.css';

/**
 * Vertical rhythm + background treatment for a page section.
 * tone: 'base' | 'soft' | 'glow'   padded: applies --section-y
 */
export default function Section({
  id,
  tone = 'base',
  padded = true,
  bordered = false,
  contained = true,
  className,
  innerClassName,
  children,
  ...rest
}) {
  const body = contained ? <Container className={innerClassName}>{children}</Container> : children;

  return (
    <section
      id={id}
      className={cx(styles.section, styles[tone], padded && styles.padded, bordered && styles.bordered, className)}
      {...rest}
    >
      {body}
    </section>
  );
}

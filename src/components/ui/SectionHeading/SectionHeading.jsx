import Eyebrow from '../Eyebrow';
import Reveal from '../Reveal';
import { cx } from '@/utils/cx';
import styles from './SectionHeading.module.css';

/**
 * Eyebrow + title block shared by every section.
 * size 'lg' matches the standard section heading, 'sm' the tighter one.
 */
export default function SectionHeading({
  eyebrow,
  title,
  align = 'center',
  size = 'lg',
  width,
  className,
  children,
}) {
  return (
    <Reveal
      className={cx(styles.head, styles[align], styles[size], className)}
      style={width ? { maxWidth: width } : undefined}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </Reveal>
  );
}

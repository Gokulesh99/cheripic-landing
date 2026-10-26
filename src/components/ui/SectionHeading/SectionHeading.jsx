import Eyebrow from '../Eyebrow';
import Reveal from '../Reveal';
import { cx } from '@/utils/cx';
import styles from './SectionHeading.module.css';

/**
 * Eyebrow + title block shared by every section.
 * size 'lg' matches the standard section heading, 'sm' the tighter one.
 * `as` lifts the heading to h1 when a section is the whole page.
 */
export default function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  align = 'center',
  size = 'lg',
  as: Heading = 'h2',
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
      {(title || titleAccent) && (
        <Heading className={styles.title}>
          {title}
          {/* The space survives when the break is dropped on narrow screens. */}
          {title && titleAccent && <> <br /></>}
          {titleAccent && <span className={styles.accent}>{titleAccent}</span>}
        </Heading>
      )}
      {children}
    </Reveal>
  );
}

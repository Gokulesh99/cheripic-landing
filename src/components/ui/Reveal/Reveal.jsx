import { useScrollReveal } from '@hooks/useScrollReveal';
import { cx } from '@/utils/cx';
import styles from './Reveal.module.css';

/**
 * Fades and lifts its children into view on scroll.
 * `delay` staggers siblings (ms).
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  threshold = 0.15,
  className,
  style,
  children,
  ...rest
}) {
  const [ref, isVisible] = useScrollReveal({ threshold });

  return (
    <Tag
      ref={ref}
      className={cx(styles.reveal, isVisible && styles.visible, className)}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

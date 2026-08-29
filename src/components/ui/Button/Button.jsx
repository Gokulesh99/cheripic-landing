import { cx } from '@/utils/cx';
import styles from './Button.module.css';

/**
 * Renders an <a> when `href` is passed, a <button> otherwise.
 * variant: 'primary' | 'ghost'   size: 'sm' | 'md' | 'lg'
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...rest
}) {
  const Tag = href ? 'a' : 'button';
  const classes = cx(
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    className,
  );

  const extraProps = href ? { href } : { type: rest.type ?? 'button' };

  return (
    <Tag className={classes} {...extraProps} {...rest}>
      {children}
    </Tag>
  );
}

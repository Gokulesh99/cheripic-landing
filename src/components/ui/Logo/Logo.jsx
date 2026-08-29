import logoUrl from '@/assets/logo.webp';
import { cx } from '@/utils/cx';
import styles from './Logo.module.css';

/**
 * Brand lockup — infinity-heart glyph over the wordmark.
 * Sized by height in CSS so it scales with the viewport; the intrinsic
 * width/height keep the space reserved before the image decodes.
 */
export default function Logo({ label = 'CheriPic', className }) {
  return (
    <img
      className={cx(styles.logo, className)}
      src={logoUrl}
      alt={label}
      width={300}
      height={200}
      decoding="async"
    />
  );
}

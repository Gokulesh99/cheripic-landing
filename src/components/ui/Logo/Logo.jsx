import logoUrl from '@/assets/logoDark.webp';
import { cx } from '@/utils/cx';
import styles from './Logo.module.css';

/**
 * Brand lockup — infinity-heart glyph beside the wordmark (3:1).
 * Light-on-dark variant, derived from newLogoDark with its flat matte
 * lifted to real transparency so it sits on the hero glow and the modal.
 * Sized by height in CSS so it scales with the viewport; the intrinsic
 * width/height keep the space reserved before the image decodes.
 */
export default function Logo({ label = 'CheriPic', className }) {
  return (
    <img
      className={cx(styles.logo, className)}
      src={logoUrl}
      alt={label}
      width={600}
      height={200}
      decoding="async"
    />
  );
}

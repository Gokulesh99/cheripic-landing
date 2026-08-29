import { cx } from '@/utils/cx';
import styles from './Eyebrow.module.css';

/** Small uppercase label that sits above a heading. */
export default function Eyebrow({ as: Tag = 'span', className, children }) {
  return <Tag className={cx(styles.eyebrow, className)}>{children}</Tag>;
}

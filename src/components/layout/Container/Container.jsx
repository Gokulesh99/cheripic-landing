import { cx } from '@/utils/cx';
import styles from './Container.module.css';

/** Centred max-width wrapper with the responsive page gutter. */
export default function Container({ as: Tag = 'div', className, children, ...rest }) {
  return (
    <Tag className={cx(styles.container, className)} {...rest}>
      {children}
    </Tag>
  );
}

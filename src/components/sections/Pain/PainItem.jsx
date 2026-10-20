import { Reveal } from '@components/ui';
import styles from './Pain.module.css';

export default function PainItem({ title, body, delay }) {
  return (
    <Reveal as="li" className={styles.item} delay={delay}>
      <h3 className={styles.itemTitle}>{title}</h3>
      <p className={styles.itemBody}>{body}</p>
    </Reveal>
  );
}

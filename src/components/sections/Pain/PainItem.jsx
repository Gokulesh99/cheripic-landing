import { Reveal } from '@components/ui';
import styles from './Pain.module.css';

export default function PainItem({ text, delay }) {
  return (
    <Reveal as="li" className={styles.item} delay={delay}>
      {text}
    </Reveal>
  );
}

import { Icon, Reveal } from '@components/ui';
import { cx } from '@/utils/cx';
import styles from './Perks.module.css';

export default function PerkCard({ icon, title, body, highlight = false, delay }) {
  return (
    <Reveal as="li" className={cx(styles.card, highlight && styles.highlight)} delay={delay}>
      <span className={styles.icon}>
        <Icon name={icon} size={20} />
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
    </Reveal>
  );
}

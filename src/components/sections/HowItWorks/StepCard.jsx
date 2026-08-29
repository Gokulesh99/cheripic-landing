import { Icon, Reveal } from '@components/ui';
import styles from './HowItWorks.module.css';

export default function StepCard({ icon, title, body, delay }) {
  return (
    <Reveal as="li" className={styles.card} delay={delay}>
      <span className={styles.node}>
        <Icon name={icon} size={24} />
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{body}</p>
    </Reveal>
  );
}

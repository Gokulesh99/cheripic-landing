import { cx } from '@/utils/cx';
import styles from './CheriAi.module.css';

/** One message in the CheriAI preview. `from` is 'user' or 'ai'. */
export default function ChatBubble({ from, tag, text }) {
  const isAi = from === 'ai';

  return (
    <div className={cx(styles.bubble, isAi ? styles.bubbleAi : styles.bubbleUser)}>
      {tag && <span className={styles.tag}>{tag}</span>}
      <span className={styles.bubbleText}>{text}</span>
    </div>
  );
}

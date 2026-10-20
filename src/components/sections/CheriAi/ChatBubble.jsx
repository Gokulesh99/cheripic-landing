import { Icon } from '@components/ui';
import { cx } from '@/utils/cx';
import styles from './CheriAi.module.css';

/** One message in the CheriAI preview. `from` is 'user' or 'ai'. */
export default function ChatBubble({ from, tag, text }) {
  const isAi = from === 'ai';

  return (
    <div className={cx(styles.row, isAi ? styles.rowAi : styles.rowUser)}>
      <span
        className={cx(styles.avatar, isAi ? styles.avatarAi : styles.avatarUser)}
        aria-hidden="true"
      >
        <Icon name={isAi ? 'infinity' : 'user'} size={isAi ? 20 : 16} />
      </span>

      <div className={cx(styles.bubble, isAi ? styles.bubbleAi : styles.bubbleUser)}>
        {tag && <span className={styles.tag}>{tag}</span>}
        <span className={styles.bubbleText}>{text}</span>
      </div>
    </div>
  );
}

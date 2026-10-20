import styles from './VideoShowcase.module.css';

/** Benefit checklist under the video — two columns, collapsing to one on small screens. */
export default function TrustList({ items }) {
  return (
    <ul className={styles.trust}>
      {items.map(({ id, title, body }) => (
        <li key={id} className={styles.trustItem}>
          <span className={styles.check} aria-hidden="true">
            ✓
          </span>
          <div>
            <p className={styles.trustTitle}>{title}</p>
            <p className={styles.trustBody}>{body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

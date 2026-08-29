import styles from './VideoShowcase.module.css';

/** Two-column checklist under the video; collapses to one column on small screens. */
export default function TrustList({ items }) {
  return (
    <ul className={styles.trust}>
      {items.map((item) => (
        <li key={item} className={styles.trustItem}>
          <span className={styles.check} aria-hidden="true">
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

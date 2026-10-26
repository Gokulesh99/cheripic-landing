import styles from './Legal.module.css';

/** Renders one body entry: paragraph, sub-heading, bullet or numbered list, or email. */
export default function LegalBlock({ item }) {
  if (typeof item === 'string') return <p className={styles.p}>{item}</p>;

  if (item.sub) return <h3 className={styles.sub}>{item.sub}</h3>;

  if (item.ul) {
    return (
      <ul className={styles.ul}>
        {item.ul.map((line) => (
          <li key={line} className={styles.li}>
            {line}
          </li>
        ))}
      </ul>
    );
  }

  if (item.ol) {
    return (
      <ol className={styles.ol}>
        {item.ol.map((line) => (
          <li key={line} className={styles.oli}>
            {line}
          </li>
        ))}
      </ol>
    );
  }

  if (item.email) {
    return (
      <a className={styles.email} href={`mailto:${item.email}`}>
        {item.email}
      </a>
    );
  }

  return null;
}

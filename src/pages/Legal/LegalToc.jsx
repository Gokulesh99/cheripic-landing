import { useEffect, useState } from 'react';
import { cx } from '@/utils/cx';
import { sectionSlug } from './slug';
import styles from './Legal.module.css';

/** Sticky clause index. Highlights whichever section is currently in view. */
export default function LegalToc({ sections }) {
  const [activeId, setActiveId] = useState(() => sectionSlug(sections[0]));

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(sectionSlug(section)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className={styles.toc} aria-label="Agreement sections">
      <p className={styles.tocLabel}>Contents</p>
      <ol className={styles.tocList}>
        {sections.map((section) => {
          const id = sectionSlug(section);
          return (
            <li key={section.num}>
              <a
                href={`#/legal/${id}`}
                className={cx(styles.tocLink, activeId === id && styles.tocActive)}
                aria-current={activeId === id ? 'true' : undefined}
              >
                <span className={styles.tocNum}>{section.num}</span>
                {section.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

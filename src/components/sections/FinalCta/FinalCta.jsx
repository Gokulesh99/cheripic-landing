import { Section } from '@components/layout';
import { Eyebrow, JoinButton, Reveal } from '@components/ui';
import { finalCta } from '@data/content';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <Section tone="glow">
      <Reveal>
        <Eyebrow>{finalCta.eyebrow}</Eyebrow>
        <h2 className={styles.title}>
          {finalCta.title} <span className={styles.accent}>{finalCta.titleAccent}</span>
        </h2>
        <div className={styles.bodyBlock}>
          {finalCta.body.map((paragraph) => (
            <p key={paragraph} className={styles.body}>
              {paragraph}
            </p>
          ))}
        </div>
        <JoinButton size="lg">{finalCta.ctaLabel}</JoinButton>
        <p className={styles.microcopy}>{finalCta.microcopy}</p>
      </Reveal>
    </Section>
  );
}

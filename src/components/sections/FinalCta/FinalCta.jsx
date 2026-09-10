import { Section } from '@components/layout';
import { Eyebrow, JoinButton, Reveal } from '@components/ui';
import { finalCta, site } from '@data/content';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <Section tone="glow">
      <Reveal>
        <Eyebrow>{finalCta.eyebrow}</Eyebrow>
        <h2 className={styles.title}>{finalCta.title}</h2>
        <p className={styles.body}>{finalCta.body}</p>
        <JoinButton size="lg">{site.ctaLabel}</JoinButton>
        <p className={styles.microcopy}>{finalCta.microcopy}</p>
      </Reveal>
    </Section>
  );
}

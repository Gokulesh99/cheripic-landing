import { Section } from '@components/layout';
import { JoinButton, Reveal, SectionHeading } from '@components/ui';
import { pain, site } from '@data/content';
import PainItem from './PainItem';
import styles from './Pain.module.css';

export default function Pain() {
  return (
    <Section tone="base">
      <SectionHeading
        eyebrow={pain.eyebrow}
        title={pain.title}
        titleAccent={pain.titleAccent}
        size="sm"
        width="640px"
      />

      <ul className={styles.list}>
        {pain.items.map((item, index) => (
          <PainItem key={item.id} {...item} delay={index * 70} />
        ))}
      </ul>

      <Reveal className={styles.closerBlock}>
        <p className={styles.closerLead}>{pain.closerLead}</p>
        <p className={styles.closer}>{pain.closer}</p>
        <JoinButton size="sm">{pain.ctaLabel}</JoinButton>
        <p className={styles.microcopy}>{site.ctaMicrocopy}</p>
      </Reveal>
    </Section>
  );
}

import { Section } from '@components/layout';
import { JoinButton, Reveal, SectionHeading } from '@components/ui';
import { perks, site } from '@data/content';
import PerkCard from './PerkCard';
import styles from './Perks.module.css';

export default function Perks() {
  return (
    <Section tone="base">
      <SectionHeading
        eyebrow={
          <>
            {perks.eyebrowLead} <span className={styles.eyebrowAccent}>{perks.eyebrowAccent}</span>{' '}
            {perks.eyebrowTrail}
          </>
        }
        title={perks.title}
        titleAccent={perks.titleAccent}
        width="640px"
      >
        <p className={styles.intro}>{perks.intro}</p>
      </SectionHeading>

      <ul className={styles.grid}>
        {perks.items.map((perk, index) => (
          <PerkCard key={perk.id} {...perk} delay={(index % 2) * 70} />
        ))}
      </ul>

      {/* <Reveal className={styles.ctaBlock}>
        <JoinButton size="lg">{perks.ctaLabel}</JoinButton>
        <p className={styles.microcopy}>{site.ctaMicrocopy}</p>
      </Reveal> */}
    </Section>
  );
}

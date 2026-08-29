import { Section } from '@components/layout';
import { SectionHeading } from '@components/ui';
import { perks } from '@data/content';
import PerkCard from './PerkCard';
import styles from './Perks.module.css';

export default function Perks() {
  return (
    <Section tone="base">
      <SectionHeading eyebrow={perks.eyebrow} title={perks.title} width="600px" />

      <ul className={styles.grid}>
        {perks.items.map((perk, index) => (
          <PerkCard key={perk.id} {...perk} delay={(index % 3) * 70} />
        ))}
      </ul>
    </Section>
  );
}

import { Section } from '@components/layout';
import { Reveal, SectionHeading } from '@components/ui';
import { pain } from '@data/content';
import PainItem from './PainItem';
import styles from './Pain.module.css';

export default function Pain() {
  return (
    <Section tone="base">
      <SectionHeading eyebrow={pain.eyebrow} title={pain.title} size="sm" width="600px" />

      <ul className={styles.list}>
        {pain.items.map((text, index) => (
          <PainItem key={text} text={text} delay={index * 70} />
        ))}
      </ul>

      <Reveal as="p" className={styles.closer}>
        {pain.closer[0]}
        <br />
        {pain.closer[1]}
      </Reveal>
    </Section>
  );
}

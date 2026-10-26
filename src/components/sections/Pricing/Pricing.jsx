import { useState } from 'react';
import { Section } from '@components/layout';
import { Reveal, SectionHeading } from '@components/ui';
import { pricing } from '@data/content';
import PlanCard from './PlanCard';
import styles from './Pricing.module.css';

export default function Pricing({ headingLevel = 'h2' }) {
  // Which plan opens selected is data-driven; falls back to the first.
  const defaultPlan = pricing.plans.find((plan) => plan.defaultSelected) ?? pricing.plans[0];
  const [selectedId, setSelectedId] = useState(defaultPlan.id);

  return (
    <Section id="pricing" tone="soft">
      <SectionHeading
        as={headingLevel}
        eyebrow={pricing.eyebrow}
        title={pricing.title}
        width="860px"
      >
        <p className={styles.subtitle}>{pricing.subtitle}</p>
        <p className={styles.intro}>{pricing.intro}</p>
      </SectionHeading>

      <ul className={styles.grid}>
        {pricing.plans.map((plan, index) => (
          <PlanCard
            key={plan.id}
            {...plan}
            selected={plan.id === selectedId}
            onSelect={setSelectedId}
            delay={index * 70}
          />
        ))}
      </ul>

      <Reveal className={styles.fine}>
        {pricing.disclaimers.map((line) => (
          <p key={line} className={styles.disclaimer}>
            {line}
          </p>
        ))}
        <p className={styles.footerLine}>{pricing.footerLine}</p>
      </Reveal>
    </Section>
  );
}

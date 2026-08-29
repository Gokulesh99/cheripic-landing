import { Section } from '@components/layout';
import { SectionHeading } from '@components/ui';
import { howItWorks } from '@data/content';
import StepCard from './StepCard';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <Section tone="soft" bordered>
      <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.title} width="620px" />

      <ol className={styles.path}>
        {howItWorks.steps.map((step, index) => (
          <StepCard key={step.id} {...step} delay={index * 90} />
        ))}
      </ol>
    </Section>
  );
}

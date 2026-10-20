import { Section } from '@components/layout';
import { Eyebrow, JoinButton, Reveal, Rich } from '@components/ui';
import { cheriAi } from '@data/content';
import ChatBubble from './ChatBubble';
import styles from './CheriAi.module.css';

export default function CheriAi() {
  return (
    <Section tone="base">
      <div className={styles.grid}>
        <Reveal className={styles.copy}>
          <Eyebrow>{cheriAi.eyebrow}</Eyebrow>
          <h2 className={styles.title}>
            {cheriAi.title} <span className={styles.accent}>{cheriAi.titleAccent}</span>
          </h2>
          {cheriAi.body.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              <Rich text={paragraph} />
            </p>
          ))}

          <ul className={styles.pillars}>
            {cheriAi.pillars.map((pillar) => (
              <li key={pillar.id} className={styles.pillar}>
                <span className={styles.pillarLead}>{pillar.lead}</span> {pillar.trail}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className={styles.panel} delay={80}>
          <div className={styles.panelHead}>
            <span className={styles.panelDot} aria-hidden="true" />
            {cheriAi.panelLabel}
          </div>

          {cheriAi.conversation.map((message) => (
            <ChatBubble key={message.id} {...message} />
          ))}

          <p className={styles.footnote}>{cheriAi.footnote}</p>

          {/* <JoinButton size="lg" fullWidth>
            {cheriAi.ctaLabel}
          </JoinButton> */}
        </Reveal>
      </div>
    </Section>
  );
}

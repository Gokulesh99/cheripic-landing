import { Section } from '@components/layout';
import { Eyebrow, Reveal } from '@components/ui';
import { cheriAi } from '@data/content';
import ChatBubble from './ChatBubble';
import styles from './CheriAi.module.css';

export default function CheriAi() {
  return (
    <Section tone="base">
      <div className={styles.grid}>
        <Reveal className={styles.copy}>
          <Eyebrow>{cheriAi.eyebrow}</Eyebrow>
          <h2 className={styles.title}>{cheriAi.title}</h2>
          {cheriAi.body.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
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
        </Reveal>
      </div>
    </Section>
  );
}

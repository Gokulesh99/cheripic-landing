import { Container } from '@components/layout';
import { Eyebrow, Icon } from '@components/ui';
import { hero } from '@data/content';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <Container>
        <div className={styles.inner}>
          <Eyebrow className={styles.eyebrow}>{hero.eyebrow}</Eyebrow>
          <h1 className={styles.title}>
            {hero.headlineLead}
            <br />
            <span className={styles.accent}>{hero.headlineAccent}</span>
          </h1>
          <p className={styles.subhead}>
            {hero.subheadLead} <span className={styles.accentSolid}>{hero.subheadAccent}</span>
          </p>
          <p className={styles.sub}>{hero.sub}</p>

          <ul className={styles.cards}>
            {hero.cards.map((card) => (
              <li key={card.id} className={styles.card}>
                <span className={styles.cardIcon}>
                  <Icon name={card.icon} size={32} strokeWidth={1.7} />
                </span>
                <div className={styles.cardText}>
                  <h2 className={styles.cardTitle}>
                    {card.title ?? (
                      <>
                        {card.titleLead} <span className={styles.accentSolid}>{card.titleAccent}</span>{' '}
                        {card.titleTrail}
                      </>
                    )}
                  </h2>
                  <p className={styles.cardBody}>{card.body}</p>
                  {card.tagline && <p className={styles.cardTagline}>{card.tagline}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

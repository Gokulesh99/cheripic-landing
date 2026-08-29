import { Container } from '@components/layout';
import { Eyebrow } from '@components/ui';
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
            {hero.headlineJoin} <span className={styles.accent}>{hero.headlineAccent}</span>
          </h1>
          <p className={styles.sub}>{hero.sub}</p>
        </div>
      </Container>
    </section>
  );
}

import { Container } from '@components/layout';
import { Button, Reveal } from '@components/ui';
import { site, video } from '@data/content';
import VideoPlayer from './VideoPlayer';
import TrustList from './TrustList';
import styles from './VideoShowcase.module.css';

export default function VideoShowcase() {
  return (
    <section className={styles.section}>
      <Container>
        <Reveal>
          <p className={styles.badge}>
            <span className={styles.dot} aria-hidden="true" />
            {video.badge}
          </p>

          <VideoPlayer src={video.src} />

          <p className={styles.caption}>{video.caption}</p>

          <div className={styles.ctaRow}>
            <Button href={site.joinUrl} size="lg">
              {site.ctaLabel}
            </Button>
            <span className={styles.microcopy}>{site.ctaMicrocopy}</span>
          </div>

          <TrustList items={video.trust} />
        </Reveal>
      </Container>
    </section>
  );
}

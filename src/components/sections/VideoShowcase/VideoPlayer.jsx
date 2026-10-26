import { useState } from 'react';
import { cx } from '@/utils/cx';
import styles from './VideoShowcase.module.css';

const isFileSrc = (src) => /\.(mp4|webm|ogg)$/i.test(src || '');

/** Pull the 11-char video id out of any common YouTube URL shape. */
const youtubeId = (src) => {
  const match = src?.match(
    /(?:youtube\.com\/(?:embed\/|watch\?v=|v\/|shorts\/)|youtu\.be\/)([\w-]{11})/,
  );
  return match ? match[1] : null;
};

/** Append params to a URL without clobbering any already present. */
const withParams = (src, params) =>
  Object.entries(params).reduce(
    (url, [key, value]) =>
      url.includes(`${key}=`) ? url : `${url}${url.includes('?') ? '&' : '?'}${key}=${value}`,
    src,
  );

/**
 * The explainer video. For YouTube we show a lightweight thumbnail facade and
 * only mount the real iframe once the visitor clicks play. That keeps YouTube's
 * heavy embed (hundreds of KB of JS plus main-thread work) off the initial
 * mobile load entirely — the single biggest performance win on this page. The
 * click is a user gesture, so the player then autoplays with sound.
 *
 * playsinline keeps iOS from hijacking the screen into fullscreen.
 */
export default function VideoPlayer({ src, title = 'CheriPic explainer' }) {
  const [active, setActive] = useState(false);

  if (!src) {
    return (
      <div className={styles.frame}>
        <p className={styles.empty}>The video goes live soon. Add its URL in data/content.js.</p>
      </div>
    );
  }

  // Self-hosted file: cheap to keep inline; just don't preload the whole thing.
  if (isFileSrc(src)) {
    return (
      <div className={styles.frame}>
        <video className={styles.media} src={src} controls playsInline preload="metadata" />
      </div>
    );
  }

  const id = youtubeId(src);

  // YouTube, not yet activated → thumbnail + play button, no iframe.
  if (id && !active) {
    return (
      <button
        type="button"
        className={cx(styles.frame, styles.facade)}
        onClick={() => setActive(true)}
        aria-label={`Play video: ${title}`}
      >
        <picture>
          {/* Mobile gets the tiny 16:9 thumbnail (~10 KB) — this is the LCP
              element on phones, so ship the smallest image that fills it. */}
          <source media="(max-width: 700px)" srcSet={`https://i.ytimg.com/vi/${id}/mqdefault.jpg`} />
          <img
            className={styles.thumb}
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            onError={(event) => {
              event.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
            }}
            alt=""
            decoding="async"
            fetchpriority="high"
            width={1280}
            height={720}
          />
        </picture>
        <span className={styles.playBtn} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </button>
    );
  }

  const playerSrc = withParams(src, { playsinline: '1', autoplay: '1', rel: '0' });

  return (
    <div className={styles.frame}>
      <iframe
        className={styles.media}
        src={playerSrc}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

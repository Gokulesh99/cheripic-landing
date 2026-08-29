import styles from './VideoShowcase.module.css';

/**
 * Autoplay is off: the video waits for the visitor to press play. That press
 * is a user gesture, so it plays with sound — no muting, no unmute prompt.
 * Flip this to true to have it start on its own, and note what that costs:
 * browsers only allow autoplay without sound, so it would begin silent.
 */
const AUTOPLAY = false;

const isFileSrc = (src) => /\.(mp4|webm|ogg)$/i.test(src || '');

/**
 * playsinline keeps iOS from hijacking the screen into fullscreen.
 * Anything already set on the URL in content.js wins.
 */
const playerSrc = (src) => {
  const params = {
    playsinline: '1',
    autoplay: AUTOPLAY ? '1' : '0',
    mute: AUTOPLAY ? '1' : '0',
  };

  return Object.entries(params).reduce(
    (url, [key, value]) =>
      url.includes(`${key}=`) ? url : `${url}${url.includes('?') ? '&' : '?'}${key}=${value}`,
    src,
  );
};

/**
 * The video itself, sitting in the page — no poster step, no overlay. The
 * player loads with the section, so pressing play starts it straight away.
 */
export default function VideoPlayer({ src, title = 'CheriPic explainer' }) {
  const isFile = isFileSrc(src);

  return (
    <div className={styles.frame}>
      {!src && <p className={styles.empty}>The video goes live soon. Add its URL in data/content.js.</p>}

      {src && isFile && (
        <video
          className={styles.media}
          src={src}
          controls
          playsInline
          autoPlay={AUTOPLAY}
          muted={AUTOPLAY}
          preload="auto"
        />
      )}

      {src && !isFile && (
        <iframe
          className={styles.media}
          src={playerSrc(src)}
          title={title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}

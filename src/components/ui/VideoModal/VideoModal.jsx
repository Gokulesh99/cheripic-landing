import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import { useLockBodyScroll } from '@hooks/useLockBodyScroll';
import { cx } from '@/utils/cx';
import styles from './VideoModal.module.css';

const YT_ORIGIN = 'https://www.youtube.com';

/**
 * Warm-up: the player is mounted (hidden) while the page is idle instead of
 * on click, so the ~1MB YouTube bundle is already parsed by the time someone
 * hits play. With PREBUFFER on it also buffers a couple of seconds muted and
 * parks back at 0 — that is what makes playback start instantly. Set it to
 * false to warm the player without pulling any video data.
 */
const PREBUFFER = true;
const PREBUFFER_MS = 2500;
/** Fallback in case the player's onReady handshake never reaches us. */
const READY_FALLBACK_MS = 900;

const isFileSrc = (src) => /\.(mp4|webm|ogg)$/i.test(src || '');

const buildEmbedSrc = (src, { autoplay, muted }) => {
  const url = new URL(src, window.location.href);
  url.searchParams.set('enablejsapi', '1');
  url.searchParams.set('playsinline', '1');
  url.searchParams.set('origin', window.location.origin);
  url.searchParams.set('autoplay', autoplay ? '1' : '0');
  url.searchParams.set('mute', muted ? '1' : '0');
  return url.toString();
};

/**
 * Video overlay. Pass `src` (embed URL or MP4) from data/content.js;
 * without one it shows the "coming soon" state.
 *
 * The player stays mounted once created — closing pauses it and keeps the
 * position, so reopening resumes rather than reloading.
 */
export default function VideoModal({ isOpen, onClose, src, title = 'CheriPic explainer' }) {
  const closeRef = useRef(null);
  const playerRef = useRef(null);
  const isPrebufferingRef = useRef(false);
  const [embedSrc, setEmbedSrc] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const isFile = isFileSrc(src);
  useLockBodyScroll(isOpen);

  const post = useCallback((payload) => {
    playerRef.current?.contentWindow?.postMessage(JSON.stringify(payload), YT_ORIGIN);
  }, []);

  const send = useCallback(
    (func, args = []) => post({ event: 'command', func, args }),
    [post],
  );

  /* Create the player during idle time, muted, so nothing can ever be heard
     before the user asks for it. */
  useEffect(() => {
    if (!src || isFile || embedSrc) return undefined;

    const warm = () => {
      const prebuffer = PREBUFFER && !navigator.connection?.saveData;
      isPrebufferingRef.current = prebuffer;
      setEmbedSrc(buildEmbedSrc(src, { autoplay: prebuffer, muted: true }));
    };

    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(warm, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(warm, 900);
    return () => window.clearTimeout(id);
  }, [src, isFile, embedSrc]);

  /* Clicked before the warm-up ran — mount now, unmuted, on the user gesture. */
  useEffect(() => {
    if (!isOpen || isFile || !src || embedSrc) return;
    isPrebufferingRef.current = false;
    setEmbedSrc(buildEmbedSrc(src, { autoplay: true, muted: false }));
  }, [isOpen, isFile, src, embedSrc]);

  /* The player answers our `listening` handshake with onReady. */
  useEffect(() => {
    if (!embedSrc) return undefined;
    const onMessage = (event) => {
      if (event.origin !== YT_ORIGIN) return;
      try {
        if (JSON.parse(event.data)?.event === 'onReady') setIsReady(true);
      } catch {
        /* not a player message */
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [embedSrc]);

  /* Park the prebuffered player back at the start. */
  useEffect(() => {
    if (!isReady || !isPrebufferingRef.current) return undefined;
    const id = window.setTimeout(() => {
      if (!isPrebufferingRef.current) return;
      isPrebufferingRef.current = false;
      send('pauseVideo');
      send('seekTo', [0, true]);
    }, PREBUFFER_MS);
    return () => window.clearTimeout(id);
  }, [isReady, send]);

  /* Open plays, close pauses — for both the embed and a plain file. */
  useEffect(() => {
    if (isFile) {
      const node = playerRef.current;
      if (!node) return;
      if (isOpen) node.play?.().catch(() => {});
      else node.pause?.();
      return;
    }

    if (!embedSrc || !isReady) return;

    if (isOpen) {
      if (isPrebufferingRef.current) {
        isPrebufferingRef.current = false;
        send('seekTo', [0, true]);
      }
      send('unMute');
      send('setVolume', [100]);
      send('playVideo');
    } else if (!isPrebufferingRef.current) {
      send('pauseVideo');
    }
  }, [isOpen, isReady, embedSrc, isFile, send]);

  useEffect(() => {
    if (!isOpen) return undefined;
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  // Nothing to keep warm without a source.
  if (!src && !isOpen) return null;

  const onFrameLoad = () => {
    post({ event: 'listening', id: 'cheripic-player', channel: 'widget' });
    window.setTimeout(() => setIsReady(true), READY_FALLBACK_MS);
  };

  return (
    <div
      className={cx(styles.overlay, !isOpen && styles.closed)}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      aria-hidden={!isOpen}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={styles.shell}>
        <button ref={closeRef} className={styles.close} onClick={onClose} aria-label="Close video">
          <Icon name="close" size={20} />
        </button>

        <div className={styles.frame}>
          {!src && <p className={styles.empty}>The video goes live soon. Add its URL in data/content.js.</p>}

          {src && isFile && (
            <video
              ref={playerRef}
              className={styles.player}
              src={src}
              controls
              playsInline
              preload="auto"
            />
          )}

          {src && !isFile && embedSrc && (
            <iframe
              ref={playerRef}
              className={styles.player}
              src={embedSrc}
              title={title}
              onLoad={onFrameLoad}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </div>
  );
}

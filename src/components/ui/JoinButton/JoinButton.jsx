import Button from '../Button';
import { useComingSoon } from '../ComingSoonModal';
import { site } from '@data/content';

/**
 * The Join CTA. While the app is pre-launch it opens the coming-soon overlay;
 * outside a <ComingSoonProvider> it degrades to a plain link to the app.
 */
export default function JoinButton({ children, ...rest }) {
  const openComingSoon = useComingSoon();

  if (!openComingSoon) {
    return (
      <Button href={site.joinUrl} {...rest}>
        {children}
      </Button>
    );
  }

  return (
    <Button onClick={openComingSoon} aria-haspopup="dialog" {...rest}>
      {children}
    </Button>
  );
}

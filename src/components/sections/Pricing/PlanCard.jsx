import { Button, Icon, JoinButton, Reveal } from '@components/ui';
import { cx } from '@/utils/cx';
import { site } from '@data/content';
import styles from './Pricing.module.css';

/** Don't select the card; on the subscriptions page itself the link's hash
    wouldn't change, so scroll down to the terms instead. */
function onPolicyClick(event) {
  event.stopPropagation();
  const terms = document.getElementById('policy-text');
  if (terms) {
    event.preventDefault();
    terms.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function PlanCard({
  id,
  name,
  badge,
  price,
  period,
  note,
  tagline,
  features,
  ctaLabel,
  ctaDisabled = false,
  microcopy,
  renewal,
  selected = false,
  onSelect,
  delay,
}) {
  const inputId = `plan-${id}`;

  return (
    /* The whole card is a click target for the pointer; the hidden radio
       carries the real state and keyboard handling (tab in, arrows between). */
    <Reveal
      as="li"
      className={cx(styles.card, selected && styles.selected)}
      delay={delay}
      onClick={() => onSelect(id)}
    >
      <div className={styles.head}>
        <input
          id={inputId}
          className={styles.radio}
          type="radio"
          name="cheripic-plan"
          value={id}
          checked={selected}
          onChange={() => onSelect(id)}
        />
        <h3 className={styles.name}>
          <label htmlFor={inputId}>{name}</label>
        </h3>
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>

      <p className={styles.price}>
        {price}
        <span className={styles.period}>{period}</span>
      </p>
      <p className={styles.note}>{note}</p>

      <p className={styles.tagline}>{tagline}</p>

      <ul className={styles.features}>
        {features.map((feature) => (
          <li key={feature} className={styles.feature}>
            <span className={styles.check} aria-hidden="true">
              <Icon name="checkCircle" size={18} strokeWidth={1.7} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* The planned tier can't be bought yet, so its CTA is inert rather than
          opening the join flow. */}
      {ctaDisabled ? (
        <Button variant="ghost" size="lg" fullWidth disabled className={styles.cta}>
          {ctaLabel}
        </Button>
      ) : (
        <JoinButton size="lg" fullWidth className={styles.cta}>
          {ctaLabel}
        </JoinButton>
      )}

      {renewal && (
        <p className={styles.renewal}>
          {renewal.text} {renewal.linkLead}{' '}
          <a href={site.subscriptionsUrl} onClick={onPolicyClick}>
            {renewal.linkLabel}
          </a>{' '}
          {renewal.linkTrail}
        </p>
      )}

      <p className={styles.microcopy}>{microcopy}</p>
    </Reveal>
  );
}

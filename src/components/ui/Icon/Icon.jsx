const paths = {
  shield: (
    <path d="M12 2.5 4 5.5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10v-6L12 2.5Z" />
  ),
  shieldCheck: (
    <>
      <path d="M12 2.5 4 5.5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10v-6L12 2.5Z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5 10.8 15 16 9" />
    </>
  ),
  chat: (
    <path d="M20 12c0 4.4-3.6 8-8 8-1.3 0-2.5-.3-3.6-.9L4 20l1.1-4C4.4 14.9 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8Z" />
  ),
  inbox: (
    <>
      <path d="M3 6.5 12 13l9-6.5" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3 13.8 8.5 19.5 10 13.8 11.5 12 17 10.2 11.5 4.5 10 10.2 8.5 12 3Z" />
      <path d="M18 15.5 18.8 18 21 18.8 18.8 19.5 18 22 17.2 19.5 15 18.8 17.2 18 18 15.5Z" />
    </>
  ),
  building: <path d="M4 20h16M6 20V9l6-4 6 4v11M10 20v-6h4v6" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M3 19.5c0-3 2.7-4.8 6-4.8s6 1.8 6 4.8" />
      <path d="M16 5.3a3.4 3.4 0 0 1 0 6.4" />
      <path d="M17.5 14.9c2.1.6 3.5 2.1 3.5 4.6" />
    </>
  ),
  chart: (
    <>
      <path d="M5 20V12" />
      <path d="M12 20V5" />
      <path d="M19 20v-5.5" />
    </>
  ),
  heart: (
    <path d="M12 20.5s-7.5-4.3-7.5-9.4a4.3 4.3 0 0 1 7.5-2.85 4.3 4.3 0 0 1 7.5 2.85c0 5.1-7.5 9.4-7.5 9.4Z" />
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" />
    </>
  ),
  // Stands in for the brand's infinity-heart glyph at avatar size.
  infinity: (
    <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
  ),
  // Brand mark: an infinity loop whose right lobe is an upright heart. Both
  // halves terminate at (12.5 12.5) so the round caps join into one stroke.
  // The heart is the classic diamond + two semicircles on its upper edges.
  infinityHeart: (
    <>
      <path d="M12.5 12.5c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Z" />
      <path d="M16.5 16.5 12.5 12.5a2.83 2.83 0 0 1 4-4 2.83 2.83 0 0 1 4 4Z" />
    </>
  ),
  bulb: (
    <>
      {/* Glass, then the screw base */}
      <path d="M12 5a4.7 4.7 0 0 0-2.82 8.46c.47.35.74.86.74 1.41v.33h4.16v-.33c0-.55.27-1.06.74-1.41A4.7 4.7 0 0 0 12 5Z" />
      <path d="M10.2 17.4h3.6M10.9 19.5h2.2" />
      {/* Rays */}
      <path d="M12 1.6v1.7M5.6 5.1l1.2 1.2M18.4 5.1l-1.2 1.2M2.8 10.6h1.7M19.5 10.6h1.7" />
    </>
  ),
  prohibited: (
    <>
      <circle cx="12" cy="12" r="10" strokeWidth="1.9" />
      <path d="M4.93 4.93 19.07 19.07" strokeWidth="1.9" />
    </>
  ),
  close: (
    <>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </>
  ),
  // Brand mark — solid, so it stays readable at footer size.
  whatsapp: (
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  ),
};

/** Icons drawn as solid shapes rather than strokes. */
const solid = new Set(['whatsapp']);

/**
 * Single stroke-icon set. Every icon inherits `currentColor`,
 * so colour is controlled by the parent.
 */
export default function Icon({ name, size = 24, strokeWidth = 1.6, className, ...rest }) {
  const shape = paths[name];
  if (!shape) return null;

  const isSolid = solid.has(name);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isSolid ? 'currentColor' : 'none'}
      stroke={isSolid ? 'none' : 'currentColor'}
      strokeWidth={isSolid ? undefined : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {shape}
    </svg>
  );
}

export const iconNames = Object.keys(paths);

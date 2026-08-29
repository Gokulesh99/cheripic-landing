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

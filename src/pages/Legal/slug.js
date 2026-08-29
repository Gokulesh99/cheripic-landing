/** Stable DOM id for a clause — named sections keep their route-friendly id. */
export const sectionSlug = (section) => section.id ?? `s${section.num}`;

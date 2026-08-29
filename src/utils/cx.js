/** Join truthy class names. Keeps JSX free of ternary noise. */
export const cx = (...classes) => classes.filter(Boolean).join(' ');

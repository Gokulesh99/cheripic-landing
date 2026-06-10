export default function Button({ href, variant = "primary", children, withArrow, ...rest }) {
  return (
    <a href={href} className={`btn btn-${variant}`} {...rest}>
      {children}
      {withArrow && <span className="btn-arrow">→</span>}
    </a>
  );
}
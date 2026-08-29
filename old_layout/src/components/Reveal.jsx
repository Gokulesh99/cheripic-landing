import useScrollReveal from "../hooks/useScrollReveal.js";

export default function Reveal({ as: Tag = "div", className = "", delay, style, children, ...rest }) {
  const ref = useScrollReveal();
  const mergedStyle = delay ? { transitionDelay: delay, ...style } : style;
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  );
}
export default function Eyebrow({ children, centered }) {
  return (
    <div className="eyebrow" style={centered ? { textAlign: "center" } : undefined}>
      {children}
    </div>
  );
}
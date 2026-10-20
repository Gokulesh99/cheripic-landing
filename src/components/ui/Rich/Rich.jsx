/**
 * Renders copy that carries `**bold**` spans, so emphasis can live in
 * content.js next to the words instead of being hard-coded in a component.
 * Everything outside the markers is passed through untouched.
 */
export default function Rich({ text }) {
  return text.split('**').map((part, index) =>
    // Odd indices sit between a pair of markers.
    index % 2 ? <strong key={index}>{part}</strong> : part,
  );
}

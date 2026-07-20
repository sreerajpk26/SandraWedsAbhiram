import './MonogramBadge.css';

export default function MonogramBadge({ visible }) {
  return (
    <div id="mono-badge" className={visible ? 'show' : ''}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none">
        <circle cx="50" cy="50" r="48" fill="#1a1510" stroke="rgba(198,163,92,.45)" strokeWidth="1" />
        <text x="30" y="62" textAnchor="middle" fontFamily="Italiana, serif" fontSize="34" fill="#c6a35c">
          S
        </text>
        <text
          x="50"
          y="62"
          textAnchor="middle"
          fontFamily="Playfair Display, serif"
          fontSize="18"
          fill="rgba(198,163,92,.7)"
          fontStyle="italic"
        >
          &amp;
        </text>
        <text x="70" y="62" textAnchor="middle" fontFamily="Cinzel, serif" fontSize="28" fill="#c6a35c">
          R
        </text>
      </svg>
    </div>
  );
}

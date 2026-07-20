import { WEDDING } from '../config';
import './Footer.css';

export default function Footer({ onAdmin }) {
  return (
    <footer className="footer">
      <div className="couple-initials">S &amp; R</div>
      <div className="tagline">With love &amp; gratitude</div>
      <div className="footer-line">{WEDDING.footerLine}</div>
      <button className="admin-link" onClick={onAdmin}>
        ADMIN
      </button>
    </footer>
  );
}

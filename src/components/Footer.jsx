import { WEDDING } from '../config';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="couple-initials">A &amp; S</div>
      <div className="tagline">With love &amp; gratitude</div>
      <div className="footer-line">{WEDDING.footerLine}</div>
    </footer>
  );
}

import { VERSE } from '../config';
import './Verse.css';

export default function Verse() {
  return (
    <section className="verse-section">
      <div className="reveal">
        <div className="verse-ar">{VERSE.arabic}</div>
        <div className="verse-en">{VERSE.english}</div>
        <div className="verse-ref">{VERSE.reference}</div>
      </div>
    </section>
  );
}

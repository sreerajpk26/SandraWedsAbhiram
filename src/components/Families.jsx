import { FAMILIES } from '../config';
import './Families.css';

export default function Families() {
  return (
    <section className="families">
      <div className="reveal">
        <div className="section-eyebrow">OUR FAMILIES</div>
        <h2 className="section-title">With the Blessings of Our Parents</h2>
        <div className="family-grid">
          {FAMILIES.map((f) => (
            <div className="family-card" key={f.side}>
              <div className="family-side">{f.side}</div>
              <div className="family-name">{f.name}</div>
              <div className="family-diamond">◆</div>
              <div className="family-detail">
                <strong>FATHER</strong>
                {f.father}
                <div className="family-diamond">◆</div>
                <strong>MOTHER</strong>
                {f.mother}
                <div className="family-diamond">◆</div>
                <strong>RESIDENCE</strong>
                {f.residence}
              </div>
            </div>
          ))}
        </div>
        <div className="divider">
          <span />
          <div className="dot" />
          <span />
        </div>
      </div>
    </section>
  );
}

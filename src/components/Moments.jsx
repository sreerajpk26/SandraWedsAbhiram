import { MOMENTS } from '../config';
import './Moments.css';

export default function Moments({ photos }) {
  return (
    <section className="moments">
      <div className="reveal">
        <div className="section-eyebrow">OUR MOMENTS</div>
        <h2 className="section-title">A Love Story in Frames</h2>
        <div className="gallery">
          {MOMENTS.map((m, i) => (
            <div className="photo-card" key={m.id}>
              <div className={`photo-frame ${photos[m.id] ? 'has-img' : ''}`}>
                {photos[m.id] ? (
                  <img src={photos[m.id]} alt={`Moment ${i + 1}`} />
                ) : (
                  <div className="photo-placeholder">PHOTO {i + 1}</div>
                )}
              </div>
              <div className="photo-cap">{m.caption}</div>
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

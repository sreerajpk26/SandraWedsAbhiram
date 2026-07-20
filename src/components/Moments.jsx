import { useState } from 'react';
import { MOMENTS } from '../config';
import './Moments.css';

export default function Moments() {
  const [failed, setFailed] = useState({});

  return (
    <section className="moments">
      <div className="reveal">
        <div className="section-eyebrow">OUR MOMENTS</div>
        <h2 className="section-title">A Love Story in Frames</h2>
        <div className="gallery">
          {MOMENTS.map((m, i) => (
            <div className="photo-card" key={m.id}>
              <div className={`photo-frame ${failed[m.id] ? '' : 'has-img'}`}>
                {failed[m.id] ? (
                  <div className="photo-placeholder">PHOTO {i + 1}</div>
                ) : (
                  <img
                    src={import.meta.env.BASE_URL + m.src}
                    alt={`Moment ${i + 1}`}
                    onError={() => setFailed((f) => ({ ...f, [m.id]: true }))}
                  />
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

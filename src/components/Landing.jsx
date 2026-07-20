import { WEDDING } from '../config';
import './Landing.css';

const SPARKS = [
  { left: '12%', top: '18%', size: 3, dur: '2.8s', delay: '-0.4s' },
  { left: '78%', top: '12%', size: 4, dur: '3.2s', delay: '-1.2s' },
  { left: '22%', top: '72%', size: 2, dur: '3.6s', delay: '-2.1s' },
  { left: '88%', top: '55%', size: 5, dur: '3.0s', delay: '-0.8s' },
  { left: '45%', top: '28%', size: 3, dur: '4.0s', delay: '-1.5s' },
  { left: '65%', top: '80%', size: 4, dur: '2.7s', delay: '-2.6s' },
  { left: '8%', top: '48%', size: 3, dur: '3.4s', delay: '-0.2s' },
  { left: '92%', top: '30%', size: 2, dur: '3.8s', delay: '-1.9s' },
];

function guestNameFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return (params.get('to') || params.get('name') || '').trim();
}

export default function Landing({ opened, onOpen }) {
  const guest = guestNameFromUrl() || 'Beloved Guest';

  return (
    <div id="landing" className={opened ? 'gone' : ''}>
      <div className="ornament tl" />
      <div className="ornament tr" />
      <div className="ornament bl" />
      <div className="ornament br" />

      <div className="glitter" aria-hidden="true">
        {SPARKS.map((s, i) => (
          <span
            key={i}
            className="spark"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              animationDuration: s.dur,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>

      <div className="landing-invocation">॥ ॐ नमो भगवते वासुदेवाय ॥</div>
      <div className="landing-stamp">WITH THE DIVINE BLESSINGS</div>
      <div className="landing-greet">Dear</div>
      <div className="landing-guest">{guest}</div>
      <h1 className="landing-names">
        {WEDDING.brideShort}
        <span className="amp">&amp;</span>
        {WEDDING.groomShort}
      </h1>
      <div className="landing-date">{WEDDING.dateLabel}</div>
      <div className="landing-venue">{WEDDING.landingVenue}</div>
      <div className="landing-divider">
        <span />
        <div className="dot" />
        <span />
      </div>
      <button className="enter-btn" onClick={onOpen}>
        OPEN INVITATION ↓
      </button>
    </div>
  );
}

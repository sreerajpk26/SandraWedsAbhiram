import { useCountdown } from '../hooks/useCountdown';
import { WEDDING } from '../config';
import './Countdown.css';

const UNITS = [
  ['days', 'DAYS'],
  ['hours', 'HOURS'],
  ['mins', 'MINS'],
  ['secs', 'SECS'],
];

export default function Countdown() {
  const parts = useCountdown(WEDDING.dateTime);

  return (
    <section className="countdown">
      <div className="reveal">
        <div className="cd-label">DAYS UNTIL FOREVER</div>
        <div className="cd-grid">
          {UNITS.map(([key, label], i) => (
            <span key={key} className="cd-item">
              {i > 0 && <span className="cd-sep">·</span>}
              <span className="cd-unit">
                <span className="cd-num">{parts[key]}</span>
                <span className="cd-txt">{label}</span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

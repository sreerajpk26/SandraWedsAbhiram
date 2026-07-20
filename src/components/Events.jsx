import { EVENTS } from '../config';
import './Events.css';

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Events() {
  return (
    <section className="details">
      <div className="reveal">
        <div className="section-eyebrow center">SAVE THE DATE</div>
        <h2 className="section-title center">Nikah &amp; Reception</h2>
        <p className="details-lede">
          Two gatherings, one blessed beginning. We would be honoured to have you with us.
        </p>

        {EVENTS.map((ev) => (
          <div className="event-card" key={ev.num}>
            <div className="event-head">
              <div className="event-num">{ev.num}</div>
              <div className="event-title">{ev.title}</div>
            </div>
            <div className="event-row">
              <div className="row-icon">
                <CalendarIcon />
              </div>
              <div className="row-body">
                <div className="row-label">DATE &amp; TIME</div>
                <div className="row-value">{ev.date}</div>
                <div className="row-sub">{ev.time}</div>
              </div>
            </div>
            <div className="event-row">
              <div className="row-icon">
                <HomeIcon />
              </div>
              <div className="row-body">
                <div className="row-label">VENUE</div>
                <div className="row-value">{ev.venue}</div>
                <div className="row-sub">{ev.address}</div>
              </div>
            </div>
            <div className="event-actions">
              <a className="btn btn-primary" href={ev.mapsUrl} target="_blank" rel="noopener noreferrer">
                <PinIcon />
                VIEW ON MAPS
              </a>
            </div>
          </div>
        ))}

        <div className="divider">
          <span />
          <div className="dot" />
          <span />
        </div>
      </div>
    </section>
  );
}

import { CONTACTS, EVENTS, MARRIAGE_NOTE } from '../config';
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

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
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
        <h2 className="section-title center">Wedding Reception</h2>
        <p className="details-lede">
          One blessed beginning. We would be honoured to have you with us.
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
                {ev.dateSub && <div className="row-sub">{ev.dateSub}</div>}
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
            <div className="event-row">
              <div className="row-icon">
                <PhoneIcon />
              </div>
              <div className="row-body">
                <div className="row-label">CONTACT</div>
                <div className="contact-list">
                  {CONTACTS.map((c) => (
                    <a key={c.tel} className="contact-link" href={`tel:${c.tel}`}>
                      +91 {c.label}
                    </a>
                  ))}
                </div>
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

        <p className="marriage-note">{MARRIAGE_NOTE}</p>

        <div className="divider">
          <span />
          <div className="dot" />
          <span />
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import { useWishes } from '../hooks/useWishes';
import { WEDDING } from '../config';
import './Wishes.css';

export default function Wishes({ opened, showToast }) {
  const { wishes, visibleCount, sending, load, loadMore, submit } = useWishes();
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (opened) load();
  }, [opened, load]);

  const handleSubmit = async () => {
    const n = name.trim();
    const m = msg.trim();
    if (!n || !m) {
      showToast('Please enter your name and wish');
      return;
    }
    await submit(n, m);
    setName('');
    setMsg('');
    showToast('Wish sent! ✦');
  };

  const count = wishes.length;

  return (
    <section className="wishes">
      <div className="reveal">
        <div className="section-eyebrow center">WISHES</div>
        <h2 className="section-title center">Send Your Blessings</h2>
        <div className="wish-count">
          ✨ {count} blessing{count === 1 ? '' : 's'} received
        </div>
        <div className="wish-form">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
          <textarea
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder={`Write a blessing or warm wish for ${WEDDING.brideShort} & ${WEDDING.groomShort}…`}
          />
          <button className="wfl-submit" onClick={handleSubmit} disabled={sending}>
            {sending ? 'SENDING…' : 'SEND WISHES ✦'}
          </button>
        </div>
        <div className="wish-grid">
          {wishes.slice(0, visibleCount).map((w) => (
            <div className="wish-card" key={w.key}>
              <div className="wish-card-name">{w.name}</div>
              <div className="wish-card-msg">{w.msg}</div>
              <div className="wish-card-time">{w.time || ''}</div>
            </div>
          ))}
        </div>
        {visibleCount < wishes.length && (
          <div className="loadmore-wrap">
            <button className="loadmore-btn" onClick={loadMore}>
              LOAD MORE WISHES
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

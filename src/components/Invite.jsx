import { WEDDING } from '../config';
import './Invite.css';

export default function Invite() {
  return (
    <section className="invite">
      <div className="reveal">
        <div className="invite-blessing">WITH THE DIVINE BLESSINGS</div>
        <h2 className="invite-names">
          {WEDDING.brideShort}
          <span className="amp">&amp;</span>
          {WEDDING.groomShort}
        </h2>
        <div className="invite-date">{WEDDING.dateLabel}</div>
        <div className="section-eyebrow">— YOU ARE CORDIALLY INVITED —</div>
        <div className="invite-body">
          <p>We joyfully announce the wedding of</p>
          <p>
            <span className="accent">
              {WEDDING.brideFull} &amp; {WEDDING.groomFull}
            </span>
          </p>
          <p>
            and cordially invite you to the reception celebrating this auspicious occasion.
          </p>
        </div>
        <div className="stars">✦ ✦ ✦</div>
        <div className="divider">
          <span />
          <div className="dot" />
          <span />
        </div>
      </div>
    </section>
  );
}

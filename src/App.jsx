import { useCallback, useEffect, useState } from 'react';
import Landing from './components/Landing';
import Invite from './components/Invite';
import Countdown from './components/Countdown';
import Moments from './components/Moments';
import Events from './components/Events';
import Verse from './components/Verse';
import Families from './components/Families';
import Wishes from './components/Wishes';
import Footer from './components/Footer';
import MonogramBadge from './components/MonogramBadge';
import Toast from './components/Toast';
import { useReveal } from './hooks/useReveal';
import { useMedia } from './hooks/useMedia';
import { ADMIN_PIN } from './config';

export default function App() {
  const [opened, setOpened] = useState(false);
  const [adminMode, setAdminMode] = useState(false);
  const [toast, setToast] = useState('');
  const media = useMedia();
  const mainRef = useReveal(opened);

  const showToast = useCallback((msg) => {
    setToast(msg);
  }, []);

  useEffect(() => {
    if (opened) media.load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  const handleAdmin = () => {
    const pin = prompt('Enter admin PIN:');
    if (pin !== ADMIN_PIN) {
      showToast('INCORRECT PIN');
      return;
    }
    setAdminMode(true);
    showToast('ADMIN MODE — UPLOAD PHOTOS');
  };

  return (
    <>
      <div className="travel-dots" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <div className="travel-dot" key={i} />
        ))}
      </div>

      <MonogramBadge visible={opened} />
      <Landing opened={opened} onOpen={() => setOpened(true)} />

      <div ref={mainRef} className={`main ${opened ? 'show' : ''}`}>
        <Invite />
        <Countdown />
        <Moments media={media} adminMode={adminMode} showToast={showToast} />
        <Events />
        <Verse />
        <Families />
        <Wishes opened={opened} showToast={showToast} />
        <Footer onAdmin={handleAdmin} />
      </div>

      <Toast message={toast} onDone={() => setToast('')} />
    </>
  );
}

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

export default function App() {
  const [opened, setOpened] = useState(false);
  const [toast, setToast] = useState('');
  const { photos, load } = useMedia();
  const mainRef = useReveal(opened);

  const showToast = useCallback((msg) => {
    setToast(msg);
  }, []);

  useEffect(() => {
    if (opened) load();
  }, [opened, load]);

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
        <Moments photos={photos} />
        <Events />
        <Verse />
        <Families />
        <Wishes opened={opened} showToast={showToast} />
        <Footer />
      </div>

      <Toast message={toast} onDone={() => setToast('')} />
    </>
  );
}

import { useCallback, useEffect, useRef, useState } from 'react';
import './MusicControl.css';

const AUDIO_SRC = `${import.meta.env.BASE_URL}audio/invitation.mp3`;

export default function MusicControl({ active }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.55;
    audioRef.current = audio;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      audio.pause();
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !active) return;
    audio.play().catch(() => {
      // Autoplay may still be blocked; user can tap the control.
      setPlaying(false);
    });
  }, [active]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  }, []);

  return (
    <button
      type="button"
      id="music-control"
      className={active ? 'show' : ''}
      onClick={toggle}
      aria-label={playing ? 'Mute music' : 'Play music'}
      title={playing ? 'Mute' : 'Play'}
    >
      {playing ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M11 5L6 9H3v6h3l5 4V5z" />
          <path d="M15.5 8.5a5 5 0 010 7M18 6a8 8 0 010 12" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          <path d="M11 5L6 9H3v6h3l5 4V5z" />
          <path d="M20 9l-6 6M14 9l6 6" />
        </svg>
      )}
    </button>
  );
}

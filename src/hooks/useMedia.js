import { useCallback, useState } from 'react';
import { ref, get, set } from 'firebase/database';
import { db } from '../lib/firebase';
import { MEDIA_PATH } from '../config';

const LS_KEY = 'shahda-rafi-media';

function localMedia() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || '{}');
  } catch {
    return {};
  }
}

export function useMedia() {
  const [photos, setPhotos] = useState({});

  const load = useCallback(async () => {
    let merged = { ...localMedia() };
    if (db) {
      try {
        const snap = await get(ref(db, MEDIA_PATH));
        merged = { ...merged, ...(snap.val() || {}) };
      } catch (err) {
        console.error('Loading media failed:', err);
      }
    }
    setPhotos(merged);
  }, []);

  const savePhoto = useCallback((id, dataUrl) => {
    setPhotos((prev) => ({ ...prev, [id]: dataUrl }));
    try {
      const local = localMedia();
      local[id] = dataUrl;
      localStorage.setItem(LS_KEY, JSON.stringify(local));
    } catch (err) {
      console.warn('localStorage save failed:', err);
    }
    if (db) {
      set(ref(db, `${MEDIA_PATH}/${id}`), dataUrl).catch(() => {});
    }
  }, []);

  return { photos, load, savePhoto };
}

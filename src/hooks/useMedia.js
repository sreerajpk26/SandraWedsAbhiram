import { useCallback, useState } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '../lib/firebase';
import { MEDIA_PATH } from '../config';

// Gallery photos are managed directly in the Firebase console:
// put image URLs under MEDIA_PATH as photo1, photo2, photo3.
export function useMedia() {
  const [photos, setPhotos] = useState({});

  const load = useCallback(async () => {
    if (!db) return;
    try {
      const snap = await get(ref(db, MEDIA_PATH));
      setPhotos(snap.val() || {});
    } catch (err) {
      console.error('Loading media failed:', err);
    }
  }, []);

  return { photos, load };
}

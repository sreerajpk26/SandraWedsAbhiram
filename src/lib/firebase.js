import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { FIREBASE_CONFIG } from '../config';

let db = null;

try {
  const app = initializeApp(FIREBASE_CONFIG);
  db = getDatabase(app);
} catch (err) {
  console.warn('Firebase unavailable, falling back to localStorage:', err);
}

export { db };

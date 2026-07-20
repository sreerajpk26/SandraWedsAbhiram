import { useCallback, useState } from 'react';
import { ref, get, push, query, orderByKey, limitToLast } from 'firebase/database';
import { db } from '../lib/firebase';
import { WISH_PATH } from '../config';

const LS_KEY = 'sandra-abhiram-wishes';
export const PAGE_SIZE = 6;

function localWishes() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveLocalWish(entry) {
  const list = localWishes();
  list.unshift({ key: `local_${Date.now()}`, ...entry });
  localStorage.setItem(LS_KEY, JSON.stringify(list.slice(0, 200)));
}

export function useWishes() {
  const [wishes, setWishes] = useState([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [sending, setSending] = useState(false);

  const load = useCallback(async () => {
    let list = [];
    if (db) {
      try {
        const snap = await get(query(ref(db, WISH_PATH), orderByKey(), limitToLast(500)));
        snap.forEach((child) => {
          list.push({ key: child.key, ...child.val() });
        });
        list.reverse();
      } catch (err) {
        console.error('Loading wishes failed:', err);
        list = localWishes();
      }
    } else {
      list = localWishes();
    }
    setWishes(list);
    setVisibleCount(Math.min(PAGE_SIZE, list.length));
  }, []);

  const loadMore = useCallback(() => {
    setVisibleCount((n) => Math.min(n + PAGE_SIZE, wishes.length));
  }, [wishes.length]);

  const submit = useCallback(
    async (name, msg) => {
      const entry = {
        name,
        msg,
        time: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      };
      setSending(true);
      try {
        if (db) {
          await push(ref(db, WISH_PATH), entry);
        } else {
          saveLocalWish(entry);
        }
      } catch (err) {
        console.error('Sending wish failed, saved locally:', err);
        saveLocalWish(entry);
      } finally {
        setSending(false);
      }
      await load();
    },
    [load]
  );

  return { wishes, visibleCount, sending, load, loadMore, submit };
}

import { useEffect, useState } from 'react';

const pad = (n) => String(n).padStart(2, '0');

function diffParts(target) {
  const diff = Math.max(0, target - Date.now());
  return {
    days: pad(Math.floor(diff / 86400000)),
    hours: pad(Math.floor((diff % 86400000) / 3600000)),
    mins: pad(Math.floor((diff % 3600000) / 60000)),
    secs: pad(Math.floor((diff % 60000) / 1000)),
  };
}

export function useCountdown(dateTime) {
  const target = new Date(dateTime).getTime();
  const [parts, setParts] = useState(() => diffParts(target));

  useEffect(() => {
    const timer = setInterval(() => setParts(diffParts(target)), 1000);
    return () => clearInterval(timer);
  }, [target]);

  return parts;
}

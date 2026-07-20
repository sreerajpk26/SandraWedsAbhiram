import { useEffect, useRef } from 'react';

// Adds the "on" class to .reveal elements when they scroll into view.
export function useReveal(active = true) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!active || !rootRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('on');
        });
      },
      { threshold: 0.12 }
    );
    rootRef.current.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  return rootRef;
}

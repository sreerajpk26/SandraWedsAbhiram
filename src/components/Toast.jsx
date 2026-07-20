import { useEffect, useState } from 'react';
import './Toast.css';

export default function Toast({ message, onDone }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) return;
    setVisible(true);
    const hide = setTimeout(() => setVisible(false), 2600);
    const clear = setTimeout(onDone, 3000);
    return () => {
      clearTimeout(hide);
      clearTimeout(clear);
    };
  }, [message, onDone]);

  return (
    <div className={`toast ${visible ? 'show' : ''}`} role="status">
      {message}
    </div>
  );
}

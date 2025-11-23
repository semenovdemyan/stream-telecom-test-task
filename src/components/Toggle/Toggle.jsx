import { useState, useEffect } from 'react';

export default function Toggle() {
  const [view, setView] = useState(() => {
    return localStorage.getItem('viewMode') || 'list';
  });

  useEffect(() => {
    localStorage.setItem('viewMode', view);
  }, [view]);

  const toggleView = () => {
    const newValue = view === 'list' ? 'tiles' : 'list';
    setView(newValue);
    localStorage.setItem('viewMode', newValue);

    window.dispatchEvent(
      new CustomEvent('viewModeChange', { detail: newValue })
    );
  };

  return (
    <div>
      <button onClick={toggleView}>
        Отобразить {view === 'list' ? 'плиткой' : 'списком'}
      </button>
    </div>
  );
}

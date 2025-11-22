import { useState, useEffect } from 'react';

export default function Toggle() {
  const [view, setView] = useState(() => {
    return localStorage.getItem('viewMode') || 'list';
  });

  useEffect(() => {
    localStorage.setItem('viewMode', view);
  }, [view]);

  const toggleView = () => {
    setView((prev) => (prev === 'list' ? 'tiles' : 'list'));
  };

  return (
    <div>
      <button onClick={toggleView}>
        Отобразить {view === 'list' ? 'плиткой' : 'списком'}
      </button>
      <div>
        Отображение: <strong>{view}</strong>
      </div>
    </div>
  );
}

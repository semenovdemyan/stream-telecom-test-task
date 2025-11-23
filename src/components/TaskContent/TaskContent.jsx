import { useState, useEffect } from 'react';
import mockData from '@/mockData.json';

export default function TaskContent() {
  const [view, setView] = useState(() => {
    return localStorage.getItem('viewMode') || 'list';
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setView(localStorage.getItem('viewMode') || 'list');
    };

    const handleViewChange = (e) => {
      setView(e.detail);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('viewModeChange', handleViewChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('viewModeChange', handleViewChange);
    };
  }, []);

  return view === 'list' ? (
    <table
      border="1"
      cellPadding="8"
      style={{ borderCollapse: 'collapse', marginTop: '30px' }}
    >
      <tbody>
        {mockData.map((item, index) => (
          <tr key={index}>
            <td>{`${item.surname} ${item.name} ${item.middleName}`}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        marginTop: '16px',
      }}
    >
      {mockData.map((item, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '12px',
            minWidth: '250px',
          }}
        >
          <p>
            {item.surname} {item.name}
          </p>
          <p></p>
          <p>{item.middleName}</p>
          <p>{item.email}</p>
          <p>{item.phone}</p>
        </div>
      ))}
    </div>
  );
}

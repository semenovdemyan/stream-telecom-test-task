import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import HeaderNav from '@/components/HeaderNav/HeaderNav';
import Home from '@/routes/Home';
import PageFirst from '@/routes/PageFirst';
import PageSecond from '@/routes/PageSecond';
import PageThird from '@/routes/PageThird';

import mockData from '@/mockData.json';

export default function App() {
  const [users, setUsers] = useState([]);
  const [dataSource, setDataSource] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://example.com/api/users');
        if (!response.ok) throw new Error('API недоступно');
        const data = await response.json();
        setUsers(data);
        setDataSource('api');
      } catch (error) {
        console.warn('API недоступно, используем mockData.json', error);
        setUsers(mockData);
        setDataSource('mock');
      }
    };

    fetchUsers();
  }, []);

  return (
    <HashRouter>
      <HeaderNav className="container header-container" />
      <main className="container main-container">
        <Routes>
          <Route
            path="/"
            element={<Home users={users} dataSource={dataSource} />}
          />
          <Route path="/page-first" element={<PageFirst />} />
          <Route path="/page-second" element={<PageSecond />} />
          <Route path="/page-third" element={<PageThird />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

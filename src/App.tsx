import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './layouts';
import Account from './pages/Account';
import Dexfund from './pages/Dexfund';
import Manage from './pages/Manage';
import Profile from './pages/Profile';
import { useAppSelector } from './store';

function App() {
  const themeMode = useAppSelector((state) => state.themeMode.value);

  return (
    <div className={`${themeMode}`}>
      <div className="text-text-1 dark:text-text-1-dark">
        <Layout>
          <Routes>
            <Route path="/" element={<Dexfund />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Layout>
      </div>
    </div>
  );
}

export default App;

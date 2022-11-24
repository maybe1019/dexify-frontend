import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './layouts';
import Account from './pages/Account';
import Dexfund from './pages/Dexfund';
import Manage from './pages/Manage';
import Portfolio from './pages/Portfolio';
import { useAppSelector } from './store';
import metadata from './helpers/data/page-metadata.json';
import FundDetail from './pages/Dexfund/FundDetail';

function App() {
  const themeMode = useAppSelector((state) => state.themeMode.value);

  return (
    <div className={`${themeMode}`}>
      <Helmet>
        <meta property="og:title" content={metadata.default.title} />
        <meta
          property="og:description"
          content={metadata.default.description}
        />
        <meta property="og:image" content={metadata.default.image} />
        <link rel="icon" type="image/png" href="favicon.ico" />
      </Helmet>
      <div className="text-text-1 dark:text-text-1-dark">
        <Layout>
          <Routes>
            <Route path="/" element={<Dexfund />} />
            <Route path="/funds/:fundAddress" element={<FundDetail />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Layout>
      </div>
    </div>
  );
}

export default App;

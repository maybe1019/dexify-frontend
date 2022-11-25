import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './layouts';
import { useAppSelector } from './store';
import metadata from './helpers/data/page-metadata.json';
import { useQuery } from '@apollo/client';
import { setAllFunds } from './store/reducers/allFundsSlice';
import { useDispatch } from 'react-redux';
import queries from './graphql';
import LazyLoadingSpinner from './components/LazyLoadingSpinner';

const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Account = React.lazy(() => import('./pages/Account'));
const Dexfund = React.lazy(() => import('./pages/Dexfund'));
const Manage = React.lazy(() => import('./pages/Manage'));
const FundDetail = React.lazy(() => import('./pages/Dexfund/FundDetail'));

function App() {
  const themeMode = useAppSelector((state) => state.themeMode.value);
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(queries.getAllFunds);
  useEffect(() => {
    if (!loading && !error) {
      dispatch(setAllFunds(data?.funds));
    }
  }, [loading, error, data]);

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
        {loading ? (
          <LazyLoadingSpinner />
        ) : (
          <Layout>
            <Routes>
              <Route path="/" element={<Dexfund />} />
              <Route path="/funds/:fundAddress" element={<FundDetail />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/manage" element={<Manage />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </Layout>
        )}
      </div>
    </div>
  );
}

export default App;

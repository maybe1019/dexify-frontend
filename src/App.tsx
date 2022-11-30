import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './layouts';
import { useAppSelector } from './store';
import metadata from './helpers/data/page-metadata.json';
import { setAllFunds } from './store/reducers/allFundsSlice';
import { useDispatch } from 'react-redux';
import LazyLoadingSpinner from './components/LazyLoadingSpinner';
import utils from './helpers/utils';
import api from './api';
import { setThemeMode } from './store/reducers/themeModeSlice';
import { PageSpinner } from './components/Spinner';

const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Account = React.lazy(() => import('./pages/Account'));
const Dexfund = React.lazy(() => import('./pages/Dexfund'));
const Manage = React.lazy(() => import('./pages/Manage'));
const FundDetail = React.lazy(() => import('./pages/Dexfund/FundDetail'));

function App() {
  const themeMode = useAppSelector((state) => state.themeMode.value);
  const pageLoading = useAppSelector((state) => state.pageLoading.value);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    initFundData();

    const theme = localStorage.getItem('dexify-finance-theme');
    if (theme !== null) {
      dispatch(setThemeMode(theme));
    }
  }, []);

  const initFundData = async () => {
    await api.token.initPricesLast7D();

    const funds = await utils.graphql.getFunds();
    const tmpData: any[] = await Promise.all(
      funds.map((fund) => utils.fund.formatFundData(fund)),
    );
    dispatch(setAllFunds(tmpData));
    console.log(tmpData);
    setLoading(false);
  };

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
      {pageLoading && <PageSpinner />}
    </div>
  );
}

export default App;

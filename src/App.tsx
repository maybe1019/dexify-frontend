import React, { useEffect, useState, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Layout } from './layouts';
import { useAppDispatch, useAppSelector } from './store';
import metadata from './helpers/data/page-metadata.json';
import { setAllFunds } from './store/reducers/allFundsSlice';
import LazyLoadingSpinner from './components/LazyLoadingSpinner';
import utils from './helpers/utils';
import api from './api';
import { setThemeMode } from './store/reducers/themeModeSlice';
import { PageSpinner } from './components/Spinner';
import { useEthers } from '@usedapp/core';
import { updateMyAccountWithTwitter } from './store/reducers/myAccountSlice';
import { ethers } from 'ethers';
import { ThunkStatus } from './helpers/enums';

const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Account = React.lazy(() => import('./pages/Account'));
const Dexfund = React.lazy(() => import('./pages/Dexfund'));
const Manage = React.lazy(() => import('./pages/Manage'));
const FundDetail = React.lazy(() => import('./pages/FundDetail'));

function App() {
  const themeMode = useAppSelector((state) => state.themeMode.value);
  const pageLoading = useAppSelector((state) => state.pageLoading.value);
  const accountStatus = useAppSelector((state) => state.myAccount.status);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { library } = useEthers();

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

  const oauth_token = new URLSearchParams(location.search).get('oauth_token');
  const oauth_verifier = new URLSearchParams(location.search).get(
    'oauth_verifier',
  );

  useEffect(() => {
    if (oauth_token && oauth_verifier && library) {
      dispatch(
        updateMyAccountWithTwitter({
          library: library as ethers.providers.JsonRpcProvider,
          oauth_verifier,
        }),
      );
    }
  }, [library]);

  useEffect(() => {
    if (accountStatus === ThunkStatus.READY && oauth_token) {
      const location = localStorage.getItem('twitter_login_location');
      navigate(`/${location}`);
    }
  }, [accountStatus]);

  useEffect(() => {
    const scrollColors: Record<string, string> = {
      '--theme-bg-color': '#EDF2F9',
      '--theme-scroll-bg-color': '#fff',
      '--theme-scroll-thumb-color': '#aab',
      '--theme-scroll-hover-color': '#99a',
    };
    if (themeMode === 'dark') {
      scrollColors['--theme-bg-color'] = '#0A1727';
      scrollColors['--theme-scroll-bg-color'] = '#121E2D';
      scrollColors['--theme-scroll-thumb-color'] = '#40404588';
      scrollColors['--theme-scroll-hover-color'] = '#404045';
    }

    for (const key in scrollColors) {
      (document.querySelector(':root') as HTMLElement).style.setProperty(
        key,
        scrollColors[key],
      );
    }

    localStorage.setItem('dexify-finance-theme', themeMode);
  }, [themeMode]);

  return (
    <div className={`${themeMode}`}>
      <Suspense fallback={<LazyLoadingSpinner />}>
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
      </Suspense>
    </div>
  );
}

export default App;

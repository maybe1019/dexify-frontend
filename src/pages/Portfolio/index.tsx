import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserDexfund from '../../components/UserDexfund';
import utils from '../../helpers/utils';
import DexfundSplit from './components/DexfundSplit';
import TotalROI from './components/TotalROI';
import TotoalAUM from './components/TotoalAUM';

const Portfolio = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    utils.pageMeta.handelTitle(pathname);
  }, [pathname]);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <TotoalAUM />
        <DexfundSplit />
        <div className="lg:col-span-2 xl:col-span-1">
          <TotalROI />
        </div>
      </div>
      <h1 className="text-[22px] font-[500] m-12 mb-6 text-center lg:text-left">
        My Dexfunds
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <UserDexfund />
        <UserDexfund />
        <UserDexfund />
      </div>
    </div>
  );
};

export default Portfolio;

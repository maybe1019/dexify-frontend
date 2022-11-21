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
      <div className="flex flex-wrap justify-around gap-2 sm:gap-4">
        <TotoalAUM />
        <DexfundSplit />
        <TotalROI />
      </div>
      <h1 className="text-[22px] font-[500] m-12 mb-6 text-center lg:text-left">
        My Dexfunds
      </h1>
      <div className="sm:flex sm:flex-wrap sm:justify-around gap-2 sm:gap-4">
        <UserDexfund />
        <UserDexfund />
        <UserDexfund />
      </div>
    </div>
  );
};

export default Portfolio;

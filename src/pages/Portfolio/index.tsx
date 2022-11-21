import React from 'react';
import UserDexfund from '../../components/UserDexfund';
import DexfundSplit from './components/DexfundSplit';
import TotalROI from './components/TotalROI';
import TotoalAUM from './components/TotoalAUM';

const Portfolio = () => {
  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-around gap-2 sm:gap-4">
        <TotoalAUM />
        <DexfundSplit />
        <TotalROI />
      </div>
      <h1 className="text-[22px] font-[500] mt-12 mb-6 text-center sm:text-left">
        My Dexfunds
      </h1>
      <div className="flex flex-wrap justify-around gap-2 sm:gap-4">
        <UserDexfund />
        <UserDexfund />
        <UserDexfund />
      </div>
    </div>
  );
};

export default Portfolio;

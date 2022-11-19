import React from 'react';
import UserDexfund from '../../components/UserDexfund';
import DexfundSplit from './components/DexfundSplit';
import TotalROI from './components/TotalROI';
import TotoalAUM from './components/TotoalAUM';

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-[22px] font-[500] mb-5">Top Dexfunds</h1>
      <div className="flex flex-wrap justify-around mx-4">
        <TotoalAUM />
        <DexfundSplit />
        <TotalROI />
      </div>
      <div className="flex flex-wrap justify-around mx-8 lg:mx-6 md:mx-4">
        <UserDexfund />
        <UserDexfund />
        <UserDexfund />
      </div>
    </div>
  );
};

export default Portfolio;

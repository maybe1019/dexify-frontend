import React from 'react';
import UserDexfund from '../../components/UserDexfund';
import PageMeta from '../../layouts/PageMeta';
import DexfundSplit from './components/DexfundSplit';
import TotalROI from './components/TotalROI';
import TotalAUM from './components/TotalAUM';
import { PageName } from '../../helpers/enums';

const Portfolio = () => {
  return (
    <div>
      <PageMeta pageName={PageName.PORTFOLIO} />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <TotalAUM />
        <DexfundSplit />
        <div className="lg:col-span-2 xl:col-span-1">
          <TotalROI />
        </div>
      </div>
      <h1 className="text-[22px] font-[500] m-12 mb-6 text-center lg:text-left">
        My Dexfunds
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {Array(3)
          .fill(1)
          .map((item, i) => (
            <div key={i}>
              <UserDexfund />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;

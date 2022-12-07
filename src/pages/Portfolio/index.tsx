import React, { useEffect, useState } from 'react';
// import UserDexfund from '../../components/UserDexfund';
import PageMeta from '../../layouts/PageMeta';
import TotalAUM from './components/TotalAUM';
import TotalROI from './components/TotalROI';
import DexfundSplit from './components/DexfundSplit';
import { PageName } from '../../helpers/enums';
import { useEthers } from '@usedapp/core';
import { getFundsPerInvestor } from '../../helpers/utils/graphql';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { formatFundsPerInvestor } from '../../helpers/utils/fund';

const Portfolio = () => {
  const allFunds = useSelector((state: RootState) => state.allFunds.value);
  const { account } = useEthers();

  const [funds, setFunds] = useState<any[]>([]);

  useEffect(() => {
    if (!account) return;
    init();
  }, [account]);

  const init = async () => {
    const funds = await getFundsPerInvestor(account?.toLowerCase() as string);
    const res = await formatFundsPerInvestor(allFunds, funds);
    console.log('res: ', res);
    setFunds(res);
  };

  return (
    <div>
      <PageMeta pageName={PageName.PORTFOLIO} />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <TotalAUM funds={funds} />
        <DexfundSplit funds={funds} />
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
            <div key={i}>{/* <UserDexfund dexfund={'sd'} /> */}</div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;

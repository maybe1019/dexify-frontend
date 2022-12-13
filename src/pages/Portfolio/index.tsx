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
import UserDexfund from '../../components/UserDexfund';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const allFunds = useSelector((state: RootState) => state.allFunds.value);
  const { account } = useEthers();

  const [dataLoading, setDataLoading] = useState(true);
  const [funds, setFunds] = useState<any[]>([]);

  useEffect(() => {
    if (!account) return;
    init();
  }, [account]);

  const init = async () => {
    const funds = await getFundsPerInvestor(account?.toLowerCase() as string);
    const res = await formatFundsPerInvestor(allFunds, funds);
    setFunds(res);
    setDataLoading(false);
  };

  return (
    <div>
      <PageMeta pageName={PageName.PORTFOLIO} />
      {funds.length === 0 && !dataLoading ? (
        <div className=" h-[calc(100vh-100px)] sm:h-[calc(100vh-200px)] flex flex-col justify-center items-center">
          <img
            src="/images/no-history.png"
            alt="ho history"
            className=" opacity-50 w-64"
          />
          <h3 className=" text-gray-400 dark:text-gray-600 text-[32px] font-bold">
            No History
          </h3>
          <Link
            to={'/manage'}
            className="my-4 bg-primary/70 px-4 py-2 rounded-md text-white hover:bg-primary/80 shadow shadow-primary/20"
          >
            Create a Dexfund
          </Link>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            <TotalAUM funds={funds} dataLoading={dataLoading} />
            <DexfundSplit funds={funds} dataLoading={dataLoading} />
            <div className="lg:col-span-2 xl:col-span-1">
              <TotalROI funds={funds} dataLoading={dataLoading} />
            </div>
          </div>
          <h1 className="text-[22px] font-[500] m-12 mb-6 text-center lg:text-left">
            My Dexfunds
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {funds.map((fund: any, i) => (
              <div key={i}>
                <UserDexfund
                  dexfund={fund.fundData}
                  dataLoading={dataLoading}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

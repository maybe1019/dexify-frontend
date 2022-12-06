import React, { useEffect, useState } from 'react';
import {
  getEntryFee,
  getManagementFee,
  getPerformanceFee,
} from '../../../../helpers/utils/graphql';

type FeesProp = {
  fund: FundData;
};

function Fees({ fund }: FeesProp) {
  const [entryFee, setEntryFee] = useState<number>(-1);
  const [performanceFee, setPerformanceFee] = useState<number>(-1);
  const [managementFee, setManagementFee] = useState<number>(-1);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const ef = await getEntryFee(fund.id);
    setEntryFee(ef);
    const pf = await getPerformanceFee(fund.comptrollerId);
    setPerformanceFee(pf);
    const mf = await getManagementFee(fund.comptrollerId);
    setManagementFee(mf);
  };

  return (
    <div className="mx-2 text-text-2 dark:text-text-2-dark">
      <div className="grid grid-cols-5 gap-4 mt-5 relative">
        <p className="col-span-3 text-md text-right">Entry Fee:</p>
        <p className="col-span-2 text-md">{entryFee * 100}%</p>
        {entryFee === -1 && (
          <div className=" absolute skeleton w-full h-full left-0 top-0 z-50 rounded-xl"></div>
        )}
      </div>
      <div className="grid grid-cols-5 gap-4 mt-5 relative">
        <p className="col-span-3 text-md text-right">Performance Fee:</p>
        <p className="col-span-2 text-md">{performanceFee * 100}%</p>
        {performanceFee === -1 && (
          <div className=" absolute skeleton w-full h-full left-0 top-0 z-50 rounded-xl"></div>
        )}
      </div>
      <div className="grid grid-cols-5 gap-4 mt-5 relative">
        <p className="col-span-3 text-md text-right">Management Fee:</p>
        <p className="col-span-2 text-md">{managementFee * 100}%</p>
        {performanceFee === -1 && (
          <div className=" absolute skeleton w-full h-full left-0 top-0 z-50 rounded-xl"></div>
        )}
      </div>
      <div className="grid grid-cols-5 gap-4 my-5">
        <p className="col-span-3 text-md text-right">Minimum investment:</p>
        <p className="col-span-2 text-md">${fund.minInvestment}</p>
      </div>
    </div>
  );
}

export default Fees;

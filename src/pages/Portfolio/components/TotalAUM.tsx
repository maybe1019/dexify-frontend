import React from 'react';
import utils from '../../../helpers/utils';

type TotalAUMProps = {
  funds: any[];
};

function TotalAUM({ funds }: TotalAUMProps) {
  const getBiggestFund = (): any => {
    let s = 0;
    for (let i = 1; i < funds.length; i++) {
      if (funds[i].investorAum > funds[s].investorAum) {
        s = i;
      }
    }
    return funds[s];
  };

  const getBestPerformance = (): any => {
    let s = 0;
    for (let i = 1; i < funds.length; i++) {
      if (funds[i].roi > funds[s].roi) {
        s = i;
      }
    }
    return funds[s];
  };

  return (
    <div className="card overflow-hidden min-h-[340px] flex flex-col justify-between">
      <div className="text-text-1 dark:text-text-1-dark text-xl header p-6 font-bold">
        Totoal AUM
      </div>
      <div>
        <div className="flex flex-col my-3">
          <div className="flex py-3 px-6 border-b border-[#8882]">
            <span className="text-sm text-text-3 dark:text-text-3-dark">
              Total AUM
            </span>
            <span className="text-sm text-text-2 dark:text-text-2-dark ml-auto">
              ${' '}
              {utils.utils.formatFloatFixed(
                funds.reduce((a, b) => a + b.investorAum, 0),
              )}
            </span>
          </div>
          <div className="flex py-3 px-6 border-b border-[#8882]">
            <span className="text-sm text-text-3 dark:text-text-3-dark">
              24 Hours Ago
            </span>
            <span className="text-sm text-text-2 dark:text-text-2-dark ml-auto">
              ${' '}
              {utils.utils.formatFloatFixed(
                funds.reduce((a, b) => a + b.investorAum24H, 0),
              )}
            </span>
          </div>
          <div className="flex py-3 px-6 border-b border-[#8882]">
            <span className="text-sm text-text-3 dark:text-text-3-dark">
              At first
            </span>
            <span className="text-sm text-text-2 dark:text-text-2-dark ml-auto">
              ${' '}
              {utils.utils.formatFloatFixed(
                funds.reduce((a, b) => a + b.investorAumFirst, 0),
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around p-7 gap-y-3">
        <div className="flex items-center">
          <img
            src="/images/default-user.png"
            alt="default-user"
            className="w-10 rounded-full"
          />
          <p className="text-sm font-[500] sm:text-base mx-2">
            {getBiggestFund()?.fundData.name}
          </p>
          <p className="text-xs sm:text-sm text-text-3 dark:text-text-3-dark font-[500]">
            Dexfund - Biggest fund
          </p>
        </div>
        <div className="flex items-center mt-1">
          <img
            src="/images/default-user.png"
            alt="default-user"
            className="w-10 rounded-full"
          />
          <p className="text-sm font-[500] sm:text-base mx-2">
            {getBestPerformance()?.fundData.name}
          </p>
          <p className="text-xs sm:text-sm text-text-3 dark:text-text-3-dark font-[500]">
            Dexfund - Best performing
          </p>
        </div>
      </div>
    </div>
  );
}

export default TotalAUM;

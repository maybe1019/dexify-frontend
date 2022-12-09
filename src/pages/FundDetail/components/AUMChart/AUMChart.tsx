import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import FundChart from '../../../../components/FundChart';
import DatePeriodDropDown from '../../../../components/DatePeriodDropDown';
import { getAumHistoryOf } from '../../../../helpers/utils/fund';
import { formatFloatFixed } from '../../../../helpers/utils/utils';
import { ComponentSpinner } from '../../../../components/Spinner';
import { ReactComponent as TwitterIcon } from '../../../../assets/images/svg/twitter-icon.svg';

type AUMChartProps = {
  fund: FundData;
  managerInfo: User;
};

const AUMChart = ({ fund, managerInfo }: AUMChartProps) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [risePercentage, setRisePercentage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    onChangePeriod(7);
  }, []);

  const onChangePeriod = async (days: number) => {
    setLoading(true);
    const aumHistory = await getAumHistoryOf(fund, days);
    setChartData(aumHistory);
    setRisePercentage((fund.aum / aumHistory[0].aum) * 100 - 100);
    setLoading(false);
  };

  return (
    <div className="card overflow-hidden py-7 relative">
      <div className="flex justify-between items-center mx-10">
        <div className="flex items-center">
          <img
            src="/images/default-user.png"
            alt="default-user"
            className="w-12 rounded-full"
          />
          <p className="text-base font-bold sm:text-xl mx-4">{fund.name}</p>
        </div>
        {managerInfo && managerInfo.twitterName && (
          <>
            <div className="relative flex items-center gap-4">
              <img
                src={managerInfo.twitterImage}
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <TwitterIcon
                width={16}
                height={16}
                className="bg-bg-2 dark:bg-bg-2-dark rounded-full absolute left-7 top-0 border-2 border-bg-2 dark:border-bg-2-dark"
              />
              <div className="font-bold text-lg text-[#03a9f4]">
                @{managerInfo.twitterScreenName}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex items-center justify-center my-4 mx-6 gap-4 md:mx-12 md:gap-12 text-center ">
        <span className="text-text-2 dark:text-text-2-dark text-xs">AUM</span>
        <span className="text-text-2 dark:text-text-2-dark text-xs">
          ${formatFloatFixed(fund.aum)}
        </span>
        <DatePeriodDropDown onChange={onChangePeriod} />
        <span className="text-green-500 flex text-sm ml-auto">
          <span
            className={
              'flex text-sm gap-1 ' +
              (risePercentage >= 0 ? 'text-green-500' : 'text-red-500')
            }
          >
            {risePercentage > 0 && '+'}
            {risePercentage.toFixed(1)}%
            {risePercentage >= 0 ? (
              <ChevronUpIcon width={12} strokeWidth={4} />
            ) : (
              <ChevronDownIcon width={12} />
            )}
          </span>
        </span>
      </div>
      <div className="relative flex-grow text-xs transition-none h-52 md:h-[375px] pr-3 pt-3">
        {loading && <ComponentSpinner />}
        <FundChart xAxis={true} yAxis={true} data={chartData} dataKey="aum" />
      </div>
    </div>
  );
};

export default AUMChart;

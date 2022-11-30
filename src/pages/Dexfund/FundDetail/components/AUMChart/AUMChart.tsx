import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import FundChart from '../../../../../components/FundChart';
import { ReactComponent as TwitterIcon } from '../../../../../assets/images/svg/twitter-icon.svg';
import DatePeriodDropDown from '../../../../../components/DatePeriodDropDown';
import { getAumHistoryOf } from '../../../../../helpers/utils/fund';
import { formatFloatFixed } from '../../../../../helpers/utils/utils';

type AUMChartProps = {
  fund: FundData;
};

const AUMChart = ({ fund }: AUMChartProps) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [risePercentage, setRisePercentage] = useState<number>(0);

  useEffect(() => {
    onChangePeriod(7);
  }, []);

  const onChangePeriod = async (days: number) => {
    const aumHistory = await getAumHistoryOf(fund, days);
    setChartData(aumHistory);
    setRisePercentage((fund.aum / aumHistory[0].value) * 100 - 100);
  };

  return (
    <div className="card overflow-hidden py-7">
      <div className="flex justify-between items-center mx-10">
        <div className="flex items-center mt-1">
          <img
            src="/images/default-user.png"
            alt="default-user"
            className="w-12 rounded-full"
          />
          <p className="text-base font-bold sm:text-xl mx-4">{fund.name}</p>
        </div>
        <div className="twitter-button">
          <span className="text-xs leading-[12px] text-[#03A9F4]">Twitter</span>
          <TwitterIcon />
        </div>
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
      <div className="flex-grow text-xs transition-none h-52 md:h-[375px] mr-3">
        <FundChart xAxis={true} yAxis={true} data={chartData} />
      </div>
    </div>
  );
};

export default AUMChart;

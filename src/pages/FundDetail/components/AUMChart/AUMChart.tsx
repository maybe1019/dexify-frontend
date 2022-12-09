import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import FundChart from '../../../../components/FundChart';
import DatePeriodDropDown from '../../../../components/DatePeriodDropDown';
import { getAumHistoryOf } from '../../../../helpers/utils/fund';
import { formatFloatFixed } from '../../../../helpers/utils/utils';
import { ComponentSpinner } from '../../../../components/Spinner';

type AUMChartProps = {
  fund: FundData;
};

const AUMChart = ({ fund }: AUMChartProps) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [risePercentage, setRisePercentage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataKey, setDataKey] = useState<string>('aum');

  useEffect(() => {
    onChangePeriod(7);
  }, []);

  const onChangePeriod = async (days: number) => {
    setLoading(true);
    const fundHistory = (await getAumHistoryOf(fund, days)).map((v: any) => ({
      ...v,
      value: v[dataKey],
    }));
    console.log(fundHistory);
    if (fundHistory[0].totalSupply === 0) {
      fundHistory.shift();
    }

    setChartData(fundHistory);
    setRisePercentage((fund.aum / fundHistory[0].aum) * 100 - 100);
    setLoading(false);
  };

  const onChangeDataKey = (dk: string) => {
    setDataKey(dk);
    const tmp = chartData.map((v: any) => ({
      ...v,
      value: v[dk],
    }));
    setRisePercentage((tmp[tmp.length - 1].value / tmp[0].value) * 100 - 100);
    setChartData(tmp);
  };

  return (
    <div className="card overflow-hidden py-7 relative">
      <div className="flex justify-between items-center mx-10">
        <div className="flex items-center mt-1">
          <img
            src="/images/default-user.png"
            alt="default-user"
            className="w-12 rounded-full"
          />
          <p className="text-base font-bold sm:text-xl mx-4">{fund.name}</p>
        </div>
      </div>
      <div className="flex items-center justify-center my-4 mx-6 gap-4 md:mx-12 md:gap-12 text-center ">
        <span className="text-text-2 dark:text-text-2-dark text-xs">AUM</span>
        <span className="text-text-2 dark:text-text-2-dark text-xs">
          ${formatFloatFixed(fund.aum)}
        </span>

        <div className="text-xs bg-bg-1 dark:bg-bg-1-dark p-1 rounded-md flex gap-1">
          <button
            className={
              'py-1 px-2 rounded-md' +
              (dataKey === 'aum' ? ' bg-white dark:bg-bg-2-dark' : '')
            }
            onClick={() => onChangeDataKey('aum')}
          >
            AUM
          </button>
          <button
            className={
              'py-1 px-2 rounded-md' +
              (dataKey === 'sharePrice' ? ' bg-white dark:bg-bg-2-dark' : '')
            }
            onClick={() => onChangeDataKey('sharePrice')}
          >
            SharePrice
          </button>
        </div>

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
        <FundChart xAxis={true} yAxis={true} data={chartData} />
      </div>
    </div>
  );
};

export default AUMChart;

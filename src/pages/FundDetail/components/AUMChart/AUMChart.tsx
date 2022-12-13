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
    if (fundHistory[0].totalSupply === 0) {
      fundHistory.shift();
    }

    setChartData(fundHistory);
    setRisePercentage(
      (fundHistory[fundHistory.length - 1].value / fundHistory[0].value) * 100 -
        100,
    );
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
        <div className="flex items-center">
          <img
            src={
              managerInfo
                ? managerInfo.image ||
                  managerInfo.twitterImage ||
                  '/images/default-user.png'
                : '/images/default-user.png'
            }
            alt="default-user"
            className="w-12 h-12 overflow-hidden rounded-full"
          />
          <p className="text-base font-bold sm:text-xl mx-4">{fund.name}</p>
        </div>
        {managerInfo && managerInfo.twitterName && (
          <>
            <div className="relative flex items-center gap-4">
              <img
                src={managerInfo.twitterImage}
                alt="user"
                className="w-10 h-10 rounded-full overflow-hidden"
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
      <div className="flex items-center justify-between my-4 mx-6 md:mx-12 text-center ">
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

        {loading ? (
          <div className="h-5 w-20 skeleton rounded-md"></div>
        ) : (
          <span className="flex text-sm">
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
        )}
      </div>
      <div className="relative flex-grow text-xs transition-none h-52 md:h-[375px] pr-3 pt-3">
        {loading && <ComponentSpinner />}
        <FundChart xAxis={true} yAxis={true} data={chartData} />
      </div>
    </div>
  );
};

export default AUMChart;

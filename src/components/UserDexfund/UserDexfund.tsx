import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import FundChart from '../FundChart';
import DatePeriodDropDown from '../DatePeriodDropDown';
import { shortenAddress } from '@usedapp/core';
import { formatFloatFixed, getTokenInfo } from '../../helpers/utils/utils';
import { getAumHistoryOf } from '../../helpers/utils/fund';

type UserDexfundProps = {
  dexfund: FundData;
};

const UserDexfund = ({ dexfund }: UserDexfundProps) => {
  const [chartDays, setChartDays] = useState<number>(7);
  const [chartData, setChartData] = useState<any[]>([]);

  const navigate = useNavigate();
  const onChangeChartsDays = async () => {
    const aumHistory = await getAumHistoryOf(dexfund, chartDays);
    setChartData(aumHistory);
  };

  useEffect(() => {
    onChangeChartsDays();
  }, [chartDays]);

  return (
    <div className="card overflow-hidden transition ease-in-out delay-150">
      <div
        className="header px-2 sm:px-8 py-5 flex gap-2 sm:gap-4 items-center cursor-pointer"
        onClick={() => {
          navigate(`/funds/${dexfund.id}`);
        }}
      >
        <img
          src="/images/default-user.png"
          alt="default-user"
          className=" w-10 rounded-full"
        />
        <div className="grow max-w-[calc(100%-180px)]">
          <p className="text-lg font-[500] text-ellipsis overflow-hidden whitespace-nowrap">
            {dexfund.name}
          </p>
          <p className=" text-text-2 dark:text-text-2-dark text-xs">
            {shortenAddress(dexfund.id)}
          </p>
        </div>
        <div className="ml-auto">
          <p className="text-primary text-lg text-right">
            ${formatFloatFixed(dexfund.aum)}
          </p>
          <p className=" text-text-2 dark:text-text-2-dark text-xs text-right">
            Market Cap
          </p>
        </div>
      </div>

      <div className="card px-2 py-4 flex gap-2 flex-col md:flex-row">
        <div className="p-2 flex flex-col gap-3 w-full md:w-1/2">
          <div className="flex justify-between items-center">
            <span className="rounded-lg bg-purple-300 dark:bg-purple-800 p-2 font-[500] text-xs">
              Users
            </span>
            <span className="text-sm">{dexfund.investorId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="rounded-lg bg-pink-200 dark:bg-pink-900 p-2 font-[500] text-xs">
              Risk
            </span>
            <span className="text-sm">{dexfund.risk}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="rounded-lg bg-amber-200 dark:bg-amber-900 p-2 font-[500] text-xs">
              Min Investment
            </span>
            <span className="text-sm flex items-center gap-2 tooltip">
              <img
                src={getTokenInfo(dexfund.denominationAsset)?.logoURI}
                alt=""
                className=" w-5 overflow-hidden rounded-full"
              />{' '}
              {dexfund.minInvestment}
              <div className="tooltiptext">{dexfund.denominationAsset}</div>
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="rounded-lg bg-green-200 dark:bg-green-900 p-2 font-[500] text-xs">
              Age(days)
            </span>
            <span className="text-sm">{dexfund.age}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="rounded-lg bg-orange-200 dark:bg-orange-900 p-2 font-[500] text-xs">
              Biggest Holding
            </span>
            <span className="text-sm flex items-center tooltip gap-1">
              <img
                src={getTokenInfo(dexfund.topAsset)?.logoURI}
                alt=""
                className="w-5 rounded-full"
              />
              {dexfund.aum > 0
                ? Math.floor((dexfund.topAssetAUM / dexfund.aum) * 100)
                : 0}
              %<div className="tooltiptext">{dexfund.topAsset}</div>
            </span>
          </div>
        </div>

        <div className="grow overflow-hidden p-2 rounded-xl flex flex-col gap-3 shadow">
          <div className="flex justify-between items-center p-2">
            <span className=" text-green-500 flex text-sm gap-1">
              +45% <ChevronUpIcon width={12} strokeWidth={4} />
            </span>
            <DatePeriodDropDown onChange={setChartDays} />
          </div>
          <div className="flex-grow text-xs transition-none h-[160px] md:h-auto">
            <FundChart xAxis={true} yAxis={false} data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDexfund;

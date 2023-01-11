import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import FundChart from '../FundChart';
import DatePeriodDropDown from '../DatePeriodDropDown';
import { shortenAddress } from '@usedapp/core';
import { formatFloatFixed, getTokenInfo } from '../../helpers/utils/utils';
import { ComponentSpinner } from '../Spinner';
import { getMinMaxInvestment } from '../../helpers/utils/graphql';
import { getAumHistoryOf } from '../../helpers/utils/fund';
import { getUser } from '../../api/user';

import dexifyDexfunds from '../../helpers/data/dexify_dexfunds.json';

type UserDexfundProps = {
  dexfund: FundData;
  dataLoading?: boolean;
};

const UserDexfund = ({ dexfund }: UserDexfundProps) => {
  const [chartDays, setChartDays] = useState<number>(7);
  const [chartData, setChartData] = useState<any[]>([]);
  const [risePercentage, setRisePercentage] = useState<number>(0);
  const [chartLoading, setChartLoading] = useState<boolean>(true);
  const [minInvestment, setMinInvestment] = useState<number>(-1);
  const [managerImage, setManagerImage] = useState('');

  const navigate = useNavigate();
  const onChangeChartsDays = async () => {
    setChartLoading(true);
    const aumHistory = await getAumHistoryOf(dexfund, chartDays);
    setChartData(aumHistory);
    setRisePercentage((dexfund.aum / aumHistory[0].aum) * 100 - 100);
    setChartLoading(false);
  };

  useEffect(() => {
    onChangeChartsDays();
  }, [chartDays]);

  useEffect(() => {
    const func = async () => {
      const minMaxInvestment = await getMinMaxInvestment(dexfund.id);
      setMinInvestment(minMaxInvestment.minInvestment);

      try {
        const user = await getUser(dexfund.manager);
        if (user.image !== '') {
          setManagerImage(user.image);
        } else if (user.twitterImage !== '') {
          setManagerImage(user.twitterImage);
        } else {
          setManagerImage('/images/default-user.png');
        }
      } catch (error) {
        setManagerImage('/images/default-user.png');
      }
    };
    func();
  }, [dexfund]);

  return (
    <div className="card overflow-hidden transition ease-in-out delay-150 relative">
      <div
        className="header px-2 sm:px-8 py-5 flex gap-2 sm:gap-4 items-center cursor-pointer"
        onClick={() => {
          navigate(`/funds/${dexfund.id}`);
        }}
      >
        {managerImage === '' ? (
          <div className="skeleton rounded-full w-10 h-10 z-10 relative"></div>
        ) : (
          <img
            src={managerImage}
            alt="manager image"
            className=" w-10 h-10 rounded-full overflow-hidden z-10 relative"
          />
        )}
        <div className="grow max-w-[calc(100%-180px)]">
          <p className="text-lg font-[500] text-ellipsis overflow-hidden whitespace-nowrap">
            {dexfund.name}
          </p>
          <p className=" text-text-2 dark:text-text-2-dark text-xs mt-1">
            {shortenAddress(dexfund.id)}
            {dexifyDexfunds.includes(dexfund.id) && (
              <span className="ml-4 bg-primary/20 px-2 py-1 rounded-md shadow-md shadow-primary/10">
                <span className="text-primary font-bold text-[14px]">DEX</span>
                <span className="text-text-1 dark:text-text-1-dark font-bold text-[14px]">
                  IFY
                </span>
              </span>
            )}
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
            <span className="text-sm">{dexfund.investorCnt}</span>
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
              {minInvestment}
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

        <div className="grow overflow-hidden p-2 rounded-xl flex flex-col gap-3 shadow relative">
          {chartLoading && <ComponentSpinner />}
          <div className="flex justify-between items-center py-2 px-1">
            {!isFinite(risePercentage) ? (
              <span className="text-sm text-green-500">- - -</span>
            ) : (
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
            )}
            <DatePeriodDropDown onChange={setChartDays} />
          </div>
          <div className="flex-grow text-xs transition-none h-[160px] md:h-auto">
            <FundChart
              xAxis={true}
              yAxis={false}
              data={chartData.map((v: any) => ({ ...v, value: v.aum }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDexfund;

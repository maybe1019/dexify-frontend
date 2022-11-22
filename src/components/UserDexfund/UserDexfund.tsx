import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import data from '../../helpers/data/chartInitData.json';
import FundChart from '../FundChart';
import DatePeriodDropDown from '../DatePeriodDropDown';

const UserDexfund = () => {
  const navigate = useNavigate();
  return (
    <div className="card overflow-hidden hover:cursor-pointer transition ease-in-out delay-150">
      <div
        className="px-2 sm:px-8 py-6 flex gap-2 sm:gap-4 items-center"
        onClick={() => {
          navigate(`/funds/adasd5456dfdsfdf4dsf4646d`);
        }}
      >
        <img
          src="/images/default-user.png"
          alt="default-user"
          className=" w-10 rounded-full"
        />
        <div>
          <p className="text-lg font-[500]">New User</p>
          <p className=" text-text-2 dark:text-text-2-dark text-xs">
            adasd5456dfdsfdf4dsf4646d
          </p>
        </div>
        <div className="ml-auto">
          <p className="text-primary text-lg">11,050,405</p>
          <p className=" text-text-2 dark:text-text-2-dark text-xs text-right">
            Market Cap
          </p>
        </div>
      </div>
      <div className="card p-2 flex gap-2 flex-col md:flex-row">
        <div className="p-2 flex flex-col gap-3 w-full md:w-1/2">
          <div className="flex justify-between items-center">
            <span className="rounded-lg bg-purple-300 dark:bg-purple-800 p-2 font-[500] text-xs">
              Users
            </span>
            <span className="text-sm">32,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="rounded-lg bg-pink-200 dark:bg-pink-900 p-2 font-[500] text-xs">
              Risk
            </span>
            <span className="text-sm">3</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="rounded-lg bg-amber-200 dark:bg-amber-900 p-2 font-[500] text-xs">
              Min Investment
            </span>
            <span className="text-sm">250</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="rounded-lg bg-green-200 dark:bg-green-900 p-2 font-[500] text-xs">
              Age(days)
            </span>
            <span className="text-sm">75</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="rounded-lg bg-orange-200 dark:bg-orange-900 p-2 font-[500] text-xs">
              Biggest Holding
            </span>
            <span className="text-sm">BTC 50%</span>
          </div>
        </div>
        <div className="grow overflow-hidden p-2 shadow-[0_0_2px_0_primary] shadow-[#C96AE488] rounded-xl flex flex-col gap-3">
          <div className="flex justify-between items-center p-2">
            <span className=" text-green-500 flex text-sm gap-1">
              +45% <ChevronUpIcon width={12} strokeWidth={4} />
            </span>
            <DatePeriodDropDown />
          </div>
          <div className="flex-grow text-xs transition-none h-[160px] md:h-auto">
            <FundChart xAxis={true} yAxis={false} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDexfund;

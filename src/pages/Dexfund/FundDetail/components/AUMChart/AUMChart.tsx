import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import FundChart from '../../../../../components/FundChart';
import data from '../../../../../helpers/data/chartInitData.json';
import { ReactComponent as TwitterIcon } from '../../../../../assets/images/svg/twitter-icon.svg';
import DatePeriodDropDown from '../../../../../components/DatePeriodDropDown';

const AUMChart = () => {
  return (
    <div className="card overflow-hidden py-7">
      <div className="flex justify-between items-center mx-10">
        <div className="flex items-center mt-1">
          <img
            src="/images/default-user.png"
            alt="default-user"
            className="w-12 rounded-full"
          />
          <p className="text-base font-bold sm:text-xl mx-4">Ryan’s Dexfund</p>
        </div>
        <div className="twitter-button">
          <span className="text-xs leading-[12px] text-[#03A9F4]">Twitter</span>
          <TwitterIcon />
        </div>
      </div>
      <div className="flex items-center justify-center my-4 mx-6 gap-4 md:mx-12 md:gap-12 text-center ">
        <span className="text-text-2 dark:text-text-2-dark text-xs">AUM</span>
        <span className="text-text-2 dark:text-text-2-dark text-xs">
          12,542
        </span>
        <DatePeriodDropDown />
        <span className="text-green-500 flex text-sm ml-auto">
          <span className="mr-1">+45%</span>
          <ChevronUpIcon width={12} strokeWidth={4} />
        </span>
      </div>
      <div className="flex-grow text-xs transition-none h-52 md:h-[375px] mr-3">
        <FundChart xAxis={true} yAxis={true} data={data} />
      </div>
    </div>
  );
};

export default AUMChart;

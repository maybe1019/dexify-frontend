import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import FundChart from '../../../../components/FundChart';
import data from '../../../../helpers/data/chartInitData.json';
import { ReactComponent as TwitterIcon } from '../../../../assets/images/svg/twitter-icon.svg';

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
          <span className="text-[8px] leading-[11px] text-[#03A9F4]">
            Twitter
          </span>
          <TwitterIcon />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-4 mb-2 text-center">
        <span className="text-text-2 dark:text-text-2-dark text-xs">AUM</span>
        <span className="text-text-2 dark:text-text-2-dark text-xs">
          12,542
        </span>
        <span className="text-text-2 dark:text-text-2-dark text-xs">
          Past 7D
        </span>
        <span className="text-green-500 flex text-sm m-auto">
          <span className="mr-1">+45%</span>
          <ChevronUpIcon width={12} strokeWidth={4} />
        </span>
      </div>
      <div className="flex-grow text-xs transition-none h-[375px]">
        <FundChart xAxis={true} yAxis={true} data={data} />
      </div>
    </div>
  );
};

export default AUMChart;

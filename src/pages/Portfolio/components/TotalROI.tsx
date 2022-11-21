import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import FundChart from '../../../components/FundChart';
import data from '../../../helpers/data/chartInitData.json';
import DropDown from '../../../components/DropDown';

function TotalROI() {
  return (
    <div className="card overflow-hidden pt-7 min-h-[340px]">
      <div className="ml-8 text-text-1 dark:text-text-1-dark text-xl">
        Total ROI
      </div>
      <div className="card overflow-hidden m-2 sm:m-4">
        <div className="grid grid-cols-4 mt-4 mb-2 text-center">
          <span className="text-text-2 dark:text-text-2-dark text-xs">AUM</span>
          <span className="text-text-2 dark:text-text-2-dark text-xs">
            12,542
          </span>
          <DropDown />
          <span className="text-green-500 flex text-sm m-auto">
            <span className="mr-1">+45%</span>
            <ChevronUpIcon width={12} strokeWidth={4} />
          </span>
        </div>
        <div className="flex-grow text-xs transition-none h-[256px]">
          <FundChart xAxis={true} yAxis={true} data={data} />
        </div>
      </div>
    </div>
  );
}

export default TotalROI;

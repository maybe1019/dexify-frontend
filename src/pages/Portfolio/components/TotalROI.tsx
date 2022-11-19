import { ChevronUpIcon } from '@heroicons/react/24/solid';
import React from 'react';
import FundChart from '../../../components/FundChart';
import data from '../../../helpers/data/chartInitData.json';

function TotalROI() {
  return (
    <div className="card overflow-hidden p-7 w-[448px] min-h-[340px] mt-4">
      <div className=" text-text-1 dark:text-text-1-dark text-xl">
        Total ROI
      </div>
      <div className="grid grid-cols-4 mt-4 mb-2">
        <span className="text-text-2 dark:text-text-2-dark text-xs">AUM</span>
        <span className="text-text-2 dark:text-text-2-dark text-xs">
          12,542
        </span>
        <span className="text-text-2 dark:text-text-2-dark text-xs">
          Past 7D
        </span>
        <span className=" text-green-500 flex text-sm">
          <span className="mr-1">+45%</span>
          <ChevronUpIcon width={12} strokeWidth={4} />
        </span>
      </div>
      <div className="flex-grow text-xs transition-none h-[256px]">
        <FundChart xAxis={true} yAxis={true} data={data} />
      </div>
    </div>
  );
}

export default TotalROI;

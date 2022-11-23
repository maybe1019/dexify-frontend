import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import FundChart from '../../../components/FundChart';
import data from '../../../helpers/data/chartInitData.json';
import DatePeriodDropDown from '../../../components/DatePeriodDropDown';

function TotalROI() {
  return (
    <div className="card overflow-hidden min-h-[340px]">
      <div className="text-text-1 dark:text-text-1-dark text-xl header p-6 font-bold">
        Total ROI
      </div>
      <div className="overflow-hidden p-6">
        <div className="flex gap-8 items-center mb-6 text-center">
          <span className="text-text-2 dark:text-text-2-dark text-xs">AUM</span>
          <span className="text-text-2 dark:text-text-2-dark text-xs">
            12,542
          </span>
          <DatePeriodDropDown />
          <span className="text-green-500 flex text-sm mx-auto">
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

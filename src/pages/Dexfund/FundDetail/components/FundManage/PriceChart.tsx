import React from 'react';
import FundChart from '../../../../../components/FundChart';
import data from '../../../../../helpers/data/chartInitData.json';

function PriceChart() {
  return (
    <div className="bg-[#daaae9] shadow-[0_0_12px_0_primary] shadow-[#daaae9] rounded-2xl dark:bg-[#daaae9] p-7">
      <p className="text-secondary">BUSD/USDT</p>
      <div className="flex-grow text-xs transition-none h-[375px] mr-3">
        <FundChart xAxis={true} yAxis={true} data={data} />
      </div>
    </div>
  );
}

export default PriceChart;

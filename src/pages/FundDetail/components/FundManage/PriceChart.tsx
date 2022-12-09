import React from 'react';
import FundChart from '../../../../components/FundChart';
import data from '../../../../helpers/data/chartInitData.json';

function PriceChart() {
  return (
    <div className="card rounded-2xl p-7">
      <p className=" p-2">BUSD/USDT</p>
      <div className="flex-grow text-xs transition-none h-[375px] mr-3">
        <FundChart xAxis={true} yAxis={true} data={data} dataKey="value" />
      </div>
    </div>
  );
}

export default PriceChart;

import React, { useState } from 'react';
import { PieChart, Pie, Cell, Sector } from 'recharts';
import colorArray from '../../../helpers/data/color-array.json';
import utils from '../../../helpers/utils';

const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};

type DexfundSplitProps = {
  funds: any[];
  dataLoading: boolean;
};

function DexfundSplit({ funds, dataLoading }: DexfundSplitProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="card overflow-hidden min-h-[340px] flex flex-col ">
      <div className=" text-text-1 dark:text-text-1-dark text-xl header p-6 font-bold">
        Dexfund Split
      </div>
      {dataLoading ? (
        <div className=" grow skeleton rounded-md m-4"></div>
      ) : (
        <div className="sm:flex sm:justify-around px-2 my-auto">
          <div className="flex relative text-center">
            <div className="mx-auto overflow-visible">
              <PieChart width={330} height={330}>
                <Pie
                  stroke="none"
                  cx="50%"
                  cy="50%"
                  legendType="circle"
                  data={funds.map((fund) => ({
                    name: fund.fundData.name,
                    value: utils.utils.formatFloatFixed(fund.investorAum),
                  }))}
                  nameKey="name"
                  dataKey="value"
                  label
                  labelLine
                  startAngle={180}
                  endAngle={-180}
                  cornerRadius={0}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={0}
                  isAnimationActive={true}
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  onMouseEnter={(_, i) => setActiveIndex(i)}
                >
                  {funds.map((_, index) => (
                    <Cell key={`slice-${index}`} fill={colorArray[index]} />
                  ))}
                </Pie>
              </PieChart>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DexfundSplit;

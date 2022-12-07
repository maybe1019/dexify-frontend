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
};

function DexfundSplit({ funds }: DexfundSplitProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="card overflow-hidden min-h-[340px] flex flex-col ">
      <div className=" text-text-1 dark:text-text-1-dark text-xl header p-6 font-bold">
        Dexfund Split
      </div>
      <div className="sm:flex sm:justify-around py-6 px-2 my-auto">
        <div className="flex relative text-center">
          <div className="mx-auto overflow-visible">
            <PieChart width={270} height={270}>
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
                {funds.map((entry, index) => (
                  <Cell key={`slice-${index}`} fill={colorArray[index]} />
                ))}
              </Pie>
            </PieChart>
          </div>
          {/* <div className="absolute top-0 left-0 text-xl text-primary w-full h-full flex items-center justify-center">
            Split
          </div> */}
        </div>
        {/* <div className="grid grid-cols-3 sm:flex sm:flex-col flex-wrap sm:justify-around">
          {fundUsersData.map((entry, index) => (
            <div
              key={index}
              className="flex items-center mt-1 sm:mt-0 px-2 py-1.5 rounded cursor-pointer border border-transparent hover:border-text-3-dark hover:dark:border-text-3"
              style={{ backgroundColor: `${colorArray[index]}22` }}
              onMouseEnter={() => setSelectedGroups([index])}
              onMouseLeave={() => setSelectedGroups([])}
            >
              <div
                className="w-3 h-3 rounded-full mr-3"
                style={{ backgroundColor: colorArray[index] }}
              ></div>
              <div className="text-xs font-semibold">{entry.name}</div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default DexfundSplit;

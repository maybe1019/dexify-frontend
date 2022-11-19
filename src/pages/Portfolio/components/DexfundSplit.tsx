import React, { useCallback, useState } from 'react';
import { PieChart, Pie, Sector, Cell, Label } from 'recharts';
import colorArray from '../../../helpers/data/color-array.json';
import fundUsersData from '../../../helpers/data/funded-users.json';

function DexfundSplit() {
  return (
    <div className="card overflow-hidden p-7 w-[448px] min-h-[340px] mt-4">
      <div className=" text-text-1 dark:text-text-1-dark text-xl">
        Dexfund Split
      </div>
      <div className="flex">
        <PieChart width={270} height={270}>
          <Pie
            stroke="none"
            cx="50%"
            cy="50%"
            legendType="circle"
            data={fundUsersData}
            nameKey="name"
            dataKey="value"
            startAngle={180}
            endAngle={-180}
            cornerRadius={100}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={-10}
            labelLine={true}
            label
            isAnimationActive={true}
          >
            {fundUsersData.map((entry, index) => (
              <Cell key={`slice-${index}`} fill={colorArray[index]} />
            ))}
          </Pie>
        </PieChart>
        <div className="flex flex-col justify-around">
          {fundUsersData.map((entry, index) => (
            <div className="flex">
              <div
                className="w-3 h-3 rounded-full mr-3"
                style={{ backgroundColor: colorArray[index] }}
              ></div>
              <span className="text-xs">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

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
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`PV ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};
export default DexfundSplit;

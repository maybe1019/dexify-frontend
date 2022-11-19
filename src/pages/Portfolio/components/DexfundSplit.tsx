import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import colorArray from '../../../helpers/data/color-array.json';
import fundUsersData from '../../../helpers/data/funded-users.json';

function DexfundSplit() {
  return (
    <div className="card overflow-hidden p-7 w-[448px] min-h-[340px] mt-4">
      <div className=" text-text-1 dark:text-text-1-dark text-xl">
        Dexfund Split
      </div>
      <div className="flex justify-between">
        <div className="relative text-center">
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
          <div className="absolute top-0 left-0 text-xl text-primary w-full h-full flex items-center justify-center">
            Split
          </div>
        </div>
        <div className="flex flex-col justify-around">
          {fundUsersData.map((entry, index) => (
            <div className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-3"
                style={{ backgroundColor: colorArray[index] }}
              ></div>
              <div className="text-xs">{entry.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DexfundSplit;
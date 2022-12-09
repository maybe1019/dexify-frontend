import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  formatDateTimeToString,
  formatTimestampToString,
} from '../../helpers/utils/utils';

type FundChartProps = {
  data: any[];
  xAxis: boolean;
  yAxis: boolean;
  dataKey: string;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className=" p-2 bg-white/50 dark:bg-black/50">
        <p className=" text-sm">{formatDateTimeToString(new Date(label))}</p>
        <p className="text-primary">AUM: ${payload[0].value}</p>
      </div>
    );
  }

  return null;
};

const FundChart = ({ data, xAxis, yAxis, dataKey }: FundChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d946ef" stopOpacity={0.7} />
            <stop offset="75%" stopColor="#ff9bff81" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        {xAxis && (
          <XAxis
            dataKey="timestamp"
            height={20}
            type="number"
            domain={['dataMin', 'dataMax']}
            tickCount={data.length}
            tickFormatter={(v) =>
              formatTimestampToString(v, data[2].timestamp - data[1].timestamp)
            }
          />
        )}
        {yAxis && <YAxis width={45} />}
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke="#d946ef"
          strokeWidth="2"
          fill="url(#colorView)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default FundChart;

import React, { useEffect, useState } from 'react';
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
  formatFloatFixed,
  formatTimestampToString,
} from '../../../helpers/utils/utils';

type FundChartProps = {
  data: any[];
  xAxis: boolean;
  yAxis: boolean;
};

const CustomTooltip = (props: any) => {
  const { active, payload, label, data } = props;
  if (active && payload && payload.length) {
    return (
      <div className="py-2 px-4 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
        <div className="overflow-hidden">
          <div className="text-sm my-2">
            {formatTimestampToString(
              label,
              data[2].timestamp - data[1].timestamp,
            )}
          </div>
          <div
            className={
              'text-sm my-2 ' +
              (payload[0].value >= 0 ? 'text-green-500' : 'text-red-500')
            }
          >
            ROI: $ {formatFloatFixed(payload[0].value)}
          </div>
          {data.find((d: any) => d.timestamp === label) &&
            Object.keys(data.find((d: any) => d.timestamp === label)).map(
              (key) => {
                if (key === 'value' || key === 'timestamp') return '';
                return (
                  <div className=" text-sm my-2" key={key}>
                    {key}: ${' '}
                    {formatFloatFixed(
                      data.find((d: any) => d.timestamp === label)[key],
                    )}
                  </div>
                );
              },
            )}
        </div>
      </div>
    );
  }

  return null;
};

const ROIChart = ({ data, xAxis, yAxis }: FundChartProps) => {
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    setOffset(gradientOffset());
  }, [data]);

  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.value));
    const dataMin = Math.min(...data.map((i) => i.value));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

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
          <linearGradient id="strokeColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={offset} stopColor="green" stopOpacity={1} />
            <stop offset={offset} stopColor="red" stopOpacity={1} />
          </linearGradient>
          <linearGradient id="fillColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={offset} stopColor="green" stopOpacity={0.5} />
            <stop offset={offset} stopColor="red" stopOpacity={0.5} />
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
        <Tooltip content={<CustomTooltip data={data} />} />
        <Area
          type="monotone"
          dataKey="value"
          stroke="url(#strokeColor)"
          strokeWidth="2"
          fill="url(#fillColor)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ROIChart;

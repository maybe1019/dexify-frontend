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
import { getTokenPriceHistory } from '../../../../api/token';
import { ComponentSpinner } from '../../../../components/Spinner';
import {
  formatDateTimeToString,
  formatFloatFixed,
  formatTimestampToString,
  getChartTimestampPoints,
  getTokenPriceAt,
  milliseconds,
} from '../../../../helpers/utils/utils';

const CustomTooltip = (props: any) => {
  const { active, payload, label, data } = props;
  if (active && payload && payload.length) {
    return (
      <div className=" p-2 bg-white/50 dark:bg-black/50 w-40">
        <div className=" text-sm my-2">
          {formatDateTimeToString(new Date(label))}
        </div>
        <div className="text-primary text-sm my-1 flex justify-between">
          <div>{data.find((d: any) => d.timestamp === label).token1}:</div>
          <div>
            ${' '}
            {formatFloatFixed(
              data.find((d: any) => d.timestamp === label).price1,
            )}
          </div>
        </div>
        <div className="text-secondary text-sm my-1 flex justify-between">
          <div>{data.find((d: any) => d.timestamp === label).token2}:</div>
          <div>
            ${' '}
            {formatFloatFixed(
              data.find((d: any) => d.timestamp === label).price2,
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

type PriceChartProps = {
  swapToken: Token;
  receiveToken: Token;
};

function PriceChart({ swapToken, receiveToken }: PriceChartProps) {
  const [chartData, setChartData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    formatChartData();
  }, [swapToken, receiveToken]);

  const formatChartData = async () => {
    setLoading(true);

    const timeNow = Date.now();
    const from = timeNow - milliseconds['1W'];
    const prices = await getTokenPriceHistory(
      `${swapToken.coingeckoId},${receiveToken.coingeckoId}`,
      timeNow - milliseconds['1W'],
      timeNow,
      milliseconds['1h'] * 3,
    );
    const timestamps = getChartTimestampPoints(from, 7);
    timestamps.pop();
    const data = timestamps.map((timestamp: number) => {
      const price1 = getTokenPriceAt(prices, swapToken.coingeckoId, timestamp);
      const price2 = getTokenPriceAt(
        prices,
        receiveToken.coingeckoId,
        timestamp,
      );
      return {
        timestamp,
        value: price1 / price2,
        token1: swapToken.symbol,
        token2: receiveToken.symbol,
        price1,
        price2,
      };
    });
    setChartData(data);
    setLoading(false);
  };

  return (
    <div className="card rounded-2xl p-4">
      <p className=" p-2">
        {swapToken.symbol} / {receiveToken.symbol}
      </p>
      <div className="flex-grow text-xs transition-none mr-3 aspect-video relative p-2 rounded-md overflow-hidden">
        {loading && <ComponentSpinner />}
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={600}
            height={400}
            data={chartData}
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
            <XAxis
              dataKey="timestamp"
              height={20}
              type="number"
              domain={['dataMin', 'dataMax']}
              tickCount={chartData.length}
              tickFormatter={(v) =>
                formatTimestampToString(v, milliseconds['1h'] * 5)
              }
            />
            <YAxis width={35} />
            <Tooltip content={<CustomTooltip data={chartData} />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#d946ef"
              strokeWidth="2"
              fill="url(#colorView)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PriceChart;

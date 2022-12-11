import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import DatePeriodDropDown from '../../../components/DatePeriodDropDown';
import { useEthers } from '@usedapp/core';
import { formatFundHistoryPerInvestor } from '../../../helpers/utils/fund';
import ROIChart from './ROIChart';
import { formatFloatFixed } from '../../../helpers/utils/utils';
import { ComponentSpinner } from '../../../components/Spinner';

function TotalROI({ funds }: { funds: any[] }) {
  const { account } = useEthers();

  const [days, setDays] = useState<number>(7);
  const [chartData, setChartData] = useState<any[]>([]);
  const [riseValue, setRiseValue] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const onChangePeriod = (d: number) => {
    setDays(d);
  };

  useEffect(() => {
    if (funds.length > 0 && account) {
      calcROIHistory();
    }
  }, [funds, account, days]); //eslint-disable-line

  const calcROIHistory = async () => {
    setLoading(true);

    const details = await Promise.all(
      funds.map(async (fund: any) => ({
        history: await formatFundHistoryPerInvestor(
          fund,
          account as string,
          days,
        ),
        fund: fund.fundData,
      })),
    );

    const from = Math.min(...details.map((d: any) => d.history[0].timestamp));
    const xPoints: number[] = (
      details.find((d: any) => d.history[0].timestamp === from) as any
    ).history.map((h: any) => h.timestamp as number);

    const data: any[] = xPoints.map((timestamp) => {
      const roi: Record<string, number> = {
        value: 0,
        timestamp,
      };
      details.forEach((detail: any) => {
        if (detail.history[0].timestamp - 1000 > timestamp) {
          return;
        }
        if (timestamp < detail.history[0].timestamp) {
          roi.value += detail.history[0].roi;
          roi[detail.fund.name] = detail.history[0].roi;
          return;
        }
        let i: number;
        for (i = 0; i + 1 < detail.history.length; i++) {
          if (
            detail.history[i].timestamp <= timestamp &&
            timestamp < detail.history[i + 1].timestamp
          ) {
            break;
          }
        }
        roi.value += detail.history[i].roi;
        roi[detail.fund.name] = detail.history[i].roi;
      });

      return roi;
    });

    while (data.length > 1 && data[1].value === 0) {
      data.shift();
    }
    setChartData(data);
    setRiseValue(formatFloatFixed(data[data.length - 1].value - data[0].value));
    setLoading(false);
  };

  return (
    <div className="card overflow-hidden min-h-[340px]">
      <div className="text-text-1 dark:text-text-1-dark text-xl header p-6 font-bold">
        Total ROI
      </div>
      <div className="overflow-hidden p-6">
        <div className="flex gap-8 items-center mb-6 text-center">
          <span className="text-text-2 dark:text-text-2-dark text-xs">ROI</span>
          <span className="text-text-2 dark:text-text-2-dark text-xs">
            12,542
          </span>
          <DatePeriodDropDown onChange={onChangePeriod} />
          <span
            className={
              'flex text-sm mx-auto ' +
              (riseValue >= 0 ? 'text-green-500 ' : 'text-red-500 ')
            }
          >
            <span className="mr-1">$ {Math.abs(riseValue)}</span>
            {riseValue >= 0 ? (
              <ChevronUpIcon width={12} strokeWidth={4} />
            ) : (
              <ChevronDownIcon width={12} strokeWidth={4} />
            )}
          </span>
        </div>
        <div className="flex-grow text-xs transition-none h-[280px] relative p-4">
          {loading && <ComponentSpinner />}

          <ROIChart xAxis={true} yAxis={true} data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default TotalROI;

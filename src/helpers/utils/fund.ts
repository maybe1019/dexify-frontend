import { shortenAddress } from '@usedapp/core';
import { calcDate, formatFloatFixed } from './utils';

const calcAumFromHoldings = (holdings: any[]): number => {
  let aum = 0;
  holdings.forEach((element) => {
    const price =
      parseFloat(element.amount as string) *
      parseFloat(element.asset.price.price as string);
    aum += price;
  });
  return aum;
};

export const formatFundData = (fund: any): any => {
  const data: any = {};
  data.manager = shortenAddress(fund.manager.id as string);
  data.dexfund = fund.name;

  const aum = calcAumFromHoldings(fund.portfolio.holdings as any[]);
  data.aum = formatFloatFixed(aum);

  let topAssets = '';
  let max = 0;
  (fund.portfolio.holdings as Array<any>).forEach((element: any) => {
    const price =
      parseFloat(element.amount as string) *
      parseFloat(element.asset.price.price as string);
    if (price > max) {
      topAssets = element.asset.symbol as string;
      max = price;
    }
  });
  data.topAssets = topAssets;

  data.investorId = parseInt(fund.investmentCount as string) + 1;

  data.age = calcDate(
    parseInt(fund.accessor.activationTime as string),
    Date.now() / 1000,
    'sec',
  );

  if (fund.dailyStates.length === 0) {
    data.volume24H = 0;
    data.volume7D = 0;
  } else {
    if (fund.dailyStates[0].end < Date.now() / 1000 - 86400) {
      data.volume24H = 0;
    } else {
      const aum24h = calcAumFromHoldings(
        fund.dailyStates[0].first.portfolio.holdings as any[],
      );
      data.volume24H = formatFloatFixed((data.aum / aum24h) * 100 - 100);
    }

    let i = 0;
    for (
      i = 0;
      i < fund.dailyStates.length &&
      parseInt(fund.dailyStates[i].start) > Date.now() / 1000 - 86400;
      i++
    ) {}
    if (i === 0) {
      data.volume7D = 0;
    } else {
      if (i === fund.dailyStates.length) {
        i--;
      }
      const aum7D = calcAumFromHoldings(
        fund.dailyStates[i].first.portfolio.holdings as any[],
      );
      data.volume7D = formatFloatFixed((data.aum / aum7D) * 100 - 100);
    }
  }

  data.inception = parseInt(fund.inception as string);
  data.risk = 1;

  return data;
};

import utils from '.';
import { getTokenPriceHistory } from '../../api/token';
import { getDailyStates, getHourlyStates } from './graphql';
import {
  calcDate,
  formatFloatFixed,
  formatTimestampToString,
  getTokenInfo,
  getTokenPriceAt,
  miliseconds,
} from './utils';

const getHoldingsFromStatesAt = (states: any[], timestamp: number): any[] => {
  if (states.length === 0) {
    return [];
  }

  timestamp /= 1000;
  const length = states.length;
  if (timestamp < parseInt(states[length - 1].start)) {
    return states[length - 1].first.portfolio.holdings as any[];
  }

  let i = 0;
  for (i = 0; i < length; i++) {
    const start = parseInt(states[i].start);
    const end = parseInt(states[i].end);
    if (timestamp >= end) {
      return states[i].last.portfolio.holdings as any[];
    }
    if (timestamp >= start) {
      return states[i].first.portfolio.holdings as any[];
    }
  }

  return states[length - 1].first.portfolio.holdings as any[];
};

const calcAumFromHoldingsWithBnbPrice = (
  holdings: any[],
  coinPrices: any[],
  timestamp: number,
): number => {
  let aum = 0;
  const bnbPrice = utils.utils.getBnbPriceAt(timestamp);
  holdings.forEach((holding) => {
    const priceInBnb = parseFloat(
      coinPrices.find((cp) => cp.id === holding.asset.id).price,
    );
    aum += parseFloat(holding.amount) * priceInBnb * bnbPrice;
  });

  return aum;
};

const calcAUMfromHoldings = (
  holdings: any[],
  coinPrices: any,
  timestamp: number,
): number => {
  let aum = 0;

  for (let i = 0; i < holdings.length; i++) {
    const amount = parseFloat(holdings[i].amount);
    const price = getTokenPriceAt(
      coinPrices,
      getTokenInfo(holdings[i].asset.symbol)?.coingeckoId as string,
      timestamp,
    );
    aum += price * amount;
  }

  return aum;
};

export const formatFundData = (fund: any) => {
  const result: FundData = {
    id: '',
    name: '',
    manager: '',
    aum: 0,
    topAsset: '',
    topAssetAUM: 0,
    investorCnt: 0,
    age: 0,
    aum24H: 0,
    aum7D: 0,
    aumFirst: 0,
    risk: 1,
    denominationAsset: '',
    startTimestamp: 0,
    holdings: [],
    comptrollerId: '',
  };

  result.id = fund.id;
  result.name = fund.name;
  result.manager = fund.manager.id;
  result.denominationAsset = fund.accessor.denominationAsset.id;
  result.comptrollerId = fund.accessor.id;
  result.startTimestamp = parseInt(fund.inception) * 1000;
  result.investorCnt = parseInt(fund.investmentCount);

  result.age = calcDate(result.startTimestamp, Date.now(), 'milisec');

  // calculate aum, topAsset, topAssetAum
  const bnbPrice = utils.utils.getBnbPriceAt(Date.now());
  fund.portfolio.holdings.forEach((holding: any) => {
    const amt = parseFloat(holding.amount);
    const price = parseFloat(holding.price.price) * bnbPrice;
    result.holdings.push({
      amount: amt,
      aum: amt * price,
      id: holding.asset.id,
    });
    if (amt * price > result.topAssetAUM) {
      result.topAsset = holding.asset.id;
      result.topAssetAUM = amt * price;
    }
  });
  result.aum = calcAumFromHoldingsWithBnbPrice(
    fund.portfolio.holdings,
    fund.portfolio.holdings.map((holding: any) => ({
      id: holding.asset.id,
      price: holding.price.price,
    })),
    Date.now(),
  );

  // calculate aum of inception
  if (fund.portfolioInception.length < 2) {
    result.aumFirst = 0;
  } else {
    result.aumFirst = calcAumFromHoldingsWithBnbPrice(
      fund.portfolioInception[1].holdings,
      fund.portfolioInception[1].holdings.map((hd: any) => ({
        id: hd.asset.id,
        price: hd.price.price,
      })),
      result.startTimestamp,
    );
  }

  if (fund.portfolio1dAgo.length === 0) {
    result.aum24H = result.aumFirst;
  } else {
    result.aum24H = calcAumFromHoldingsWithBnbPrice(
      fund.portfolio1dAgo[0].holdings,
      fund.trackedAssets.map((asset: any) => ({
        id: asset.id,
        price: asset.price1dAgo[0].price,
      })),
      Date.now() - utils.utils.miliseconds['1d'],
    );
  }

  if (fund.portfolio7dAgo.length === 0) {
    result.aum7D = result.aumFirst;
  } else {
    result.aum7D = calcAumFromHoldingsWithBnbPrice(
      fund.portfolio7dAgo[0].holdings,
      fund.trackedAssets.map((asset: any) => ({
        id: asset.id,
        price: asset.price7dAgo[0].price,
      })),
      Date.now() - utils.utils.miliseconds['1d'] * 7,
    );
  }

  return result;
};

export const getAumHistoryOf = (dexfund: FundData, days: number) =>
  new Promise<any[]>(async (resolve) => {
    try {
      let states: any[] = [];
      const unitDay = utils.utils.miliseconds['1d'];
      let limit = 0;
      let unit = unitDay;

      let startAt = Math.max(
        dexfund.startTimestamp,
        Date.now() - days * unitDay,
      );

      if (days === 0) {
        limit = dexfund.age;
        states = await getDailyStates(dexfund.id, limit);
        unit = Math.floor((dexfund.age * unitDay) / 30);
        startAt = dexfund.startTimestamp;
      } else if (days === 1) {
        limit = 24;
        states = await getHourlyStates(dexfund.id, limit);
        unit = unitDay / 24;
      } else if (days === 7) {
        limit = days * 24;
        states = await getHourlyStates(dexfund.id, limit);
        unit = Math.floor((Math.min(dexfund.age, days) * unitDay) / 30);
      } else {
        limit = days;
        states = await getDailyStates(dexfund.id, limit);
        if (Math.min(dexfund.age, days) <= 30) {
          unit = unitDay;
        } else {
          unit = Math.floor((Math.min(dexfund.age, days) * unitDay) / 30);
        }
      }

      const coinPrices = await getTokenPriceHistory(
        'all',
        startAt,
        Date.now(),
        unit,
      );

      const aumHistory: any[] = [];
      let timestamp = startAt;
      for (; timestamp <= Date.now(); timestamp += unit) {
        const holdings = getHoldingsFromStatesAt(states, timestamp);
        const aum = calcAUMfromHoldings(holdings, coinPrices, timestamp);
        aumHistory.push({
          title: formatTimestampToString(timestamp, unit),
          value: formatFloatFixed(aum),
        });
      }

      timestamp = Date.now();
      const aum = dexfund.aum;
      aumHistory.push({
        title: formatTimestampToString(timestamp, unit),
        value: formatFloatFixed(aum),
      });

      resolve(aumHistory);
    } catch (error) {
      console.error('getAumHistoryOf: ', error);
      resolve([]);
    }
  });

const getTotalSupplyFromStatesAt = (
  states: any[],
  timestamp: number,
): number => {
  timestamp = Math.floor(timestamp / 1000);
  for (let i = 0; i < states.length; i++) {
    if (parseInt(states[i].end) <= timestamp) {
      return parseFloat(states[i].last.shares.totalSupply);
    }
    if (parseInt(states[i].start) <= timestamp) {
      return parseFloat(states[i].first.shares.totalSupply);
    }
  }
  return 1;
};

const getShareFromHistoryAt = (history: any[], timestamp: number): number => {
  timestamp = Math.floor(timestamp / 1000);
  for (let i = 0; i < history.length; i++) {
    if (timestamp >= parseInt(history[i].timestamp)) {
      return parseFloat(history[i].shares);
    }
  }
  return 0;
};

export const formatFundsPerInvestor = (allFunds: FundData[], funds: any[]) =>
  new Promise<any[]>(async (resolve) => {
    console.log('funds: ', funds);

    const res: any[] = await Promise.all(
      funds.map(async (fund: any) => {
        const myFund: any = {};
        const fundData = allFunds.find((f) => f.id === fund.id) as FundData;
        myFund.aum = fundData.aum;

        myFund.investorAum =
          (myFund.aum * parseFloat(fund.investments[0].shares)) /
          parseFloat(fund.shares.totalSupply);

        let totalSupply = 0;
        let investorShare = 0;
        let timestamp = 0;
        timestamp = Date.now() - miliseconds['1d'];

        totalSupply = getTotalSupplyFromStatesAt(fund.dailyStates, timestamp);
        investorShare = getShareFromHistoryAt(
          fund.investments[0].stateHistory,
          timestamp,
        );
        myFund.investorAum24H = (fundData.aum24H * investorShare) / totalSupply;

        timestamp =
          parseInt(
            fund.investments[0].stateHistory[
              fund.investments[0].stateHistory.length - 1
            ].timestamp,
          ) * 1000;
        totalSupply = getTotalSupplyFromStatesAt(fund.dailyStates, timestamp);
        investorShare = getShareFromHistoryAt(
          fund.investments[0].stateHistory,
          timestamp,
        );

        const holdings = getHoldingsFromStatesAt(fund.dailyStates, timestamp);
        const coinPrices = await getTokenPriceHistory(
          'all',
          timestamp,
          timestamp + miliseconds['1d'],
          miliseconds['1h'],
        );
        const aum = calcAUMfromHoldings(holdings, coinPrices, timestamp);
        myFund.investorAumFirst = (aum * investorShare) / totalSupply;

        const roiEnd = myFund.aum / parseFloat(fund.shares.totalSupply);
        const roiStart = aum / totalSupply;
        myFund.roi =
          (roiEnd - roiStart) * parseFloat(fund.investments[0].shares);

        myFund.fundData = fundData;

        return myFund;
      }),
    );

    resolve(res);
  });

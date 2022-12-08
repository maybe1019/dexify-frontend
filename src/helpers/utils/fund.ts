import utils from '.';
import {
  getCoinPriceHistoryLast7D,
  getTokenPriceHistory,
} from '../../api/token';
import {
  getDailyStates,
  getHourlyStates,
  getMinMaxInvestment,
} from './graphql';
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
      getTokenInfo(holdings[i].asset.symbol).coingeckoId,
      timestamp,
    );
    aum += price * amount;
  }

  return aum;
};

export const formatFundData = (fund: any): Promise<FundData> =>
  new Promise(async (resolve) => {
    const result: FundData = {
      id: '',
      name: '',
      manager: '',
      aum: 0,
      topAsset: '',
      topAssetAUM: 0,
      investorId: 0,
      age: 0,
      aum24H: 0,
      aum7D: 0,
      aumFirst: 0,
      risk: 1,
      minInvestment: 0,
      maxInvestment: 0,
      denominationAsset: '',
      startTimestamp: 0,
      holdings: [],
      comptrollerId: '',
    };
    try {
      result.id = fund.id;
      result.name = fund.name;
      result.manager = fund.manager.id;
      result.denominationAsset = fund.accessor.denominationAsset.symbol;
      result.comptrollerId = fund.accessor.id;
      result.startTimestamp = parseInt(fund.accessor.activationTime) * 1000;
      result.investorId = parseInt(fund.investmentCount);

      const coinPricesLast7D = getCoinPriceHistoryLast7D();

      result.aum = calcAUMfromHoldings(
        fund.portfolio.holdings,
        coinPricesLast7D,
        Date.now(),
      );

      // calc top asset and it's aum
      if (fund.portfolio.holdings.length > 0) {
        let topAssetAUM = 0;
        let topAsset = '';
        for (let i = 0; i < fund.portfolio.holdings.length; i++) {
          const amount = parseFloat(fund.portfolio.holdings[i].amount);
          const price = getTokenPriceAt(
            coinPricesLast7D,
            getTokenInfo(fund.portfolio.holdings[i].asset.symbol)?.coingeckoId,
            Date.now(),
          );

          result.holdings.push({
            symbol: fund.portfolio.holdings[i].asset.symbol,
            aum: amount * price,
            amount: amount,
          });

          if (amount * price > topAssetAUM) {
            topAssetAUM = amount * price;
            topAsset = fund.portfolio.holdings[i].asset.symbol;
          }
        }
        result.topAsset = topAsset;
        result.topAssetAUM = topAssetAUM;
      }

      result.age = calcDate(
        parseInt(fund.accessor.activationTime),
        Date.now() / 1000,
        'sec',
      );

      if (fund.volume7D.length !== 0) {
        const holdings7DAgo = getHoldingsFromStatesAt(
          fund.volume7D,
          Date.now() - 1000 * 3600 * 24 * 7,
        );
        const aum7D = calcAUMfromHoldings(
          holdings7DAgo,
          coinPricesLast7D,
          Date.now() - 1000 * 3600 * 24 * 7,
        );
        result.aum7D = (result.aum / aum7D) * 100 - 100;

        const holdings24HAgo = getHoldingsFromStatesAt(
          fund.volume7D,
          Date.now() - 1000 * 3600 * 24,
        );
        const aum24H = calcAUMfromHoldings(
          holdings24HAgo,
          coinPricesLast7D,
          Date.now() - 1000 * 3600 * 24,
        );
        result.aum24H = aum24H;

        const holdingsFirst = fund.volumeAll[0].first.portfolio.holdings;
        const timestamp = parseInt(fund.volumeAll[0].first.timestamp) * 1000;
        const prices = await getTokenPriceHistory(
          '',
          timestamp,
          timestamp + miliseconds['1h'] * 2,
          miliseconds['30m'],
        );

        const aumFirst = calcAUMfromHoldings(
          holdingsFirst,
          prices,
          parseInt(fund.volumeAll[0].start) * 1000,
        );
        result.aumFirst = aumFirst;
      }

      try {
        const minMaxInvestment = await getMinMaxInvestment(result.id);
        result.minInvestment = minMaxInvestment.minInvestment;
        result.maxInvestment = minMaxInvestment.maxInvestment;
      } catch (error) {}

      resolve(result);
    } catch (error) {
      console.error('formatFundData: ', error);
      resolve(result);
    }
  });

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
        '',
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
          '',
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

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
      volume24H: 0,
      volume7D: 0,
      volumeAll: 0,
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
        result.volume7D = (result.aum / aum7D) * 100 - 100;

        const holdings24HAgo = getHoldingsFromStatesAt(
          fund.volume7D,
          Date.now() - 1000 * 3600 * 24,
        );
        const aum24H = calcAUMfromHoldings(
          holdings24HAgo,
          coinPricesLast7D,
          Date.now() - 1000 * 3600 * 24,
        );
        result.volume24H = (result.aum / aum24H) * 100 - 100;

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
        result.volumeAll = (result.aum / aumFirst) * 100 - 100;
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
      for (let timestamp = startAt; timestamp < Date.now(); timestamp += unit) {
        const holdings = getHoldingsFromStatesAt(states, timestamp);
        const aum = calcAUMfromHoldings(holdings, coinPrices, timestamp);
        aumHistory.push({
          title: formatTimestampToString(timestamp, unit),
          value: formatFloatFixed(aum),
        });
      }

      resolve(aumHistory);
    } catch (error) {
      console.error('getAumHistoryOf: ', error);
      resolve([]);
    }
  });

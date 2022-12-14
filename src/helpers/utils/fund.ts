import utils from '.';
import { getTokenPriceHistory } from '../../api/token';
import { getFundHistory, getFundSharehistoryPerInvestor } from './graphql';
import {
  calcDate,
  getTokenInfo,
  getTokenPriceAt,
  getTokenPriceAtFromLocal,
  milliseconds,
} from './utils';

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
      getTokenInfo(holdings[i].asset.id)?.coingeckoId as string,
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
  fund.portfolio.holdings.forEach((holding: any) => {
    const amt = parseFloat(holding.amount);
    const price = getTokenPriceAtFromLocal(
      (getTokenInfo(holding.asset.id as string) as Token).coingeckoId,
      Date.now(),
    );
    result.holdings.push({
      amount: amt,
      aum: amt * price,
      id: holding.asset.id,
    });
    result.aum += amt * price;
    if (amt * price > result.topAssetAUM) {
      result.topAsset = holding.asset.id;
      result.topAssetAUM = amt * price;
    }
  });

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
      fund.portfolio1dAgo[0].holdings.map((holding: any) => ({
        id: holding.asset.id,
        price: holding.asset.price1dAgo[0].price,
      })),
      Date.now() - utils.utils.milliseconds['1D'],
    );
  }

  if (fund.portfolio7dAgo.length === 0) {
    result.aum7D = result.aumFirst;
  } else {
    result.aum7D = calcAumFromHoldingsWithBnbPrice(
      fund.portfolio7dAgo[0].holdings,
      fund.portfolio7dAgo[0].holdings.map((holding: any) => ({
        id: holding.asset.id,
        price: holding.asset.price7dAgo[0].price,
      })),
      Date.now() - utils.utils.milliseconds['1D'] * 7,
    );
  }

  return result;
};

export const getAumHistoryOf = (dexfund: FundData, days: number) =>
  new Promise<any[]>(async (resolve) => {
    try {
      const chartXPoints = utils.utils.getChartTimestampPoints(
        dexfund.startTimestamp,
        days,
      );
      const internal = chartXPoints.pop() as number;

      let portfolioList: any[] = [];
      let totalSupplyList: any[] = [];

      const fundHistory = await getFundHistory(dexfund.id, chartXPoints[0]);
      portfolioList = fundHistory.portfolioList;
      totalSupplyList = fundHistory.totalSupplyList;

      totalSupplyList.reverse();

      const assetPrices = await getTokenPriceHistory(
        'all',
        chartXPoints[0],
        Date.now(),
        Math.floor(internal / 2),
      );

      let i = 0;
      let aum = 0;
      let totalSupply = 1;
      const aumChartData: any[] = [];

      chartXPoints.forEach((xPoint, index) => {
        aum = calcAUMfromHoldings(
          portfolioList[i].holdings,
          assetPrices,
          xPoint,
        );

        totalSupply = totalSupplyList.find(
          (ts: any) => ts.timestamp <= xPoint,
        ).totalSupply;

        aumChartData.push({
          timestamp: xPoint,
          aum: aum,
          sharePrice: aum === 0 ? 0 : aum / totalSupply,
          totalSupply,
        });
        if (index < chartXPoints.length - 1) {
          while (true) {
            if (i + 1 === portfolioList.length) {
              break;
            }
            const timestamp = parseInt(portfolioList[i + 1].timestamp) * 1000;
            if (timestamp <= chartXPoints[index + 1]) {
              i++;
              aum = calcAUMfromHoldings(
                portfolioList[i].holdings,
                assetPrices,
                xPoint,
              );

              totalSupply = totalSupplyList.find(
                (ts: any) => ts.timestamp <= timestamp,
              ).totalSupply;

              aumChartData.push({
                timestamp: timestamp,
                aum: aum,
                sharePrice: aum === 0 ? 0 : aum / totalSupply,
                totalSupply,
              });
            } else {
              break;
            }
          }
        }
      });

      resolve(aumChartData);
    } catch (error) {
      console.error('getAumHistoryOf: ', error);
      resolve([]);
    }
  });

export const formatFundsPerInvestor = (allFunds: FundData[], funds: any[]) =>
  new Promise<any[]>(async (resolve) => {
    try {
      const now = Date.now();
      const time24hAgo = now - milliseconds['1D'];
      const time7DAgo = now - milliseconds['1W'];

      const res: any[] = await Promise.all(
        funds.map(async (fund: any) => {
          const investorPortfolio: any = {};
          const fundData = allFunds.find((f) => f.id === fund.id) as FundData;

          const stateHistory = fund.investments[0].stateHistory;

          investorPortfolio.investorSince =
            parseInt(fund.investments[0].investor.investorSince) * 1000;
          investorPortfolio.fundAum = fundData.aum;
          investorPortfolio.investorAum =
            (fundData.aum * parseFloat(fund.investments[0].shares)) /
            parseFloat(fund.shares.totalSupply);

          // investor aum of 7 days ago
          if (fund.totalSupply7DAgo.length === 0) {
            investorPortfolio.investorAum24hAgo = 0;
          } else {
            const totalSupply = parseFloat(
              fund.totalSupply7DAgo[0].shares.totalSupply,
            );
            const share = parseFloat(
              stateHistory.find(
                (state: any) => parseInt(state.timestamp) * 1000 <= time7DAgo,
              )?.shares,
            );
            if (share) {
              investorPortfolio.investorAum24hAgo =
                (fundData.aum7D * share) / totalSupply;
            } else {
              investorPortfolio.investorAum7DAgo = 0;
            }
          }

          // investor aum of 24 hours ago
          if (fund.totalSupply24hAgo.length === 0) {
            investorPortfolio.investorAum24hAgo = 0;
          } else {
            const totalSupply = parseFloat(
              fund.totalSupply24hAgo[0].shares.totalSupply,
            );
            const share = parseFloat(
              stateHistory.find(
                (state: any) => parseInt(state.timestamp) * 1000 <= time24hAgo,
              )?.shares,
            );
            if (share) {
              investorPortfolio.investorAum24hAgo =
                (fundData.aum24H * share) / totalSupply;
            } else {
              investorPortfolio.investorAum24hAgo = 0;
            }
          }

          investorPortfolio.fundData = fundData;

          return investorPortfolio;
        }),
      );

      resolve(res);
    } catch (error) {
      console.error('formatFundsPerInvestor: ', error);
      resolve([]);
    }
  });

export const formatFundHistoryPerInvestor = (
  fund: any,
  investor: string,
  days: number,
) =>
  new Promise<any[]>(async (resolve, reject) => {
    try {
      const fundData: FundData = fund.fundData;
      const aumHistory = await getAumHistoryOf(
        fundData,
        Math.min(
          days,
          Math.ceil((Date.now() - fund.investorSince) / milliseconds['1D']),
        ),
      );
      const sharesHistory = await getFundSharehistoryPerInvestor(
        fundData.id,
        investor,
        aumHistory[0].timestamp,
      );
      sharesHistory.sort((a: any, b: any) => a.timestamp - b.timestamp);

      const fundDetail: any[] = [];

      let i;
      for (
        i = 0;
        i < aumHistory.length &&
        aumHistory[i].timestamp < sharesHistory[0].timestamp;
        i++
      ) {
        fundDetail.push({
          ...aumHistory[i],
          roi: 0,
          investorAum: sharesHistory[0].shares * aumHistory[i].sharePrice,
        });
      }

      let investAmt = aumHistory[i].sharePrice * sharesHistory[0].shares;
      for (let j = 0; j < sharesHistory.length; j++) {
        const to = sharesHistory[j + 1]
          ? sharesHistory[j + 1].timestamp
          : 9999999999999;
        for (; i < aumHistory.length && aumHistory[i].timestamp < to; i++) {
          const investorAum =
            aumHistory[i].sharePrice * sharesHistory[j].shares;
          fundDetail.push({
            ...aumHistory[i],
            roi: investorAum - investAmt,
            investorAum,
          });
        }
        if (j + 1 < sharesHistory.length) {
          const amt =
            (sharesHistory[j + 1].shares - sharesHistory[j].shares) *
            aumHistory[i].sharePrice;
          investAmt += amt;
        }
      }

      resolve(fundDetail);
    } catch (error) {
      reject(error);
    }
  });

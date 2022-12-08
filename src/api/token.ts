import axios from 'axios';

const baseUri: string = process.env.REACT_APP_SERVER_URL as string;

import tokens from '../config/tokenlists.json';

const tokenList: Token[] = tokens;

let coinPricesLast7D: any = {};

const getTotalTokenIds = (): string => {
  let ids = tokenList[0].coingeckoId;
  for (let i = 1; i < tokenList.length; i++) {
    ids += ',' + tokenList[i].coingeckoId;
  }
  return ids;
};

export const initPricesLast7D = async () => {
  const ids = getTotalTokenIds();
  const to = Date.now();
  const from = to - 7 * 24 * 60 * 60 * 1000;
  const interval = 30 * 60 * 1000;
  coinPricesLast7D = await getTokenPriceHistory(ids, from, to, interval);
};

export const getCoinPriceHistoryLast7D = (): any => coinPricesLast7D;

export const getTokenPrice = (id: string): Promise<number> =>
  new Promise(async (resolve) => {
    try {
      const res = await axios.get(`${baseUri}/price?id=${id}`);
      resolve(res.data.price);
    } catch (error) {
      console.error('getTokenPrice: ', error);
      resolve(0);
    }
  });

export const getTokenPriceHistory = (
  ids: string,
  from: number,
  to: number,
  interval: number,
): Promise<Record<string, Record<string, number>[]>> =>
  new Promise(async (resolve) => {
    try {
      if (ids === 'all') {
        ids = getTotalTokenIds();
      }
      const res = await axios.get(`${baseUri}/price/history`, {
        params: {
          ids,
          startDate: from,
          endDate: to,
          interval,
        },
      });
      const prices: Record<string, Record<string, number>[]> = {};
      Object.keys(res.data).forEach((key: string) => {
        prices[key] = [];
        for (let i = res.data[key].length - 1; i >= 0; i--) {
          if (res.data[key][i].price === null) {
            continue;
          }
          prices[key].push({
            timestamp: parseFloat(res.data[key][i].timeStamp),
            price: parseFloat(res.data[key][i].price),
          });
        }
        if (prices[key].length === 0) {
          prices[key] = coinPricesLast7D[key];
        }
      });
      resolve(prices);
    } catch (error) {
      console.error('getTokenPriceHistory: ', error);
      resolve({});
    }
  });

export const getLatestTokenPrice = (id: string) =>
  new Promise<number>(async (resolve) => {
    try {
      const res = await axios.get(`${baseUri}/price`, { params: { id } });
      resolve(parseFloat(res.data.price));
    } catch (error) {
      console.error('getLatestTokenPrice: ', error);
      resolve(0);
    }
  });

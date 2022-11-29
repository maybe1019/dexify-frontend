import axios from 'axios';

const baseUri: string = process.env.REACT_APP_SERVER_URL as string;

import tokens from '../config/tokenlists.json';
import utils from '../helpers/utils';
import { miliseconds } from '../helpers/utils/utils';

const tokenList: Token[] = tokens;

let coinPricesLast7D: any = {};
let isHistoryLoaded = false;

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
  isHistoryLoaded = true;
};

export const getCoinPriceHistoryLast7D = (): any => coinPricesLast7D;

export const getTokenPrice = (id: string): Promise<number> =>
  new Promise(async (resolve) => {
    try {
      const res = await axios.get(`${baseUri}/price?id=${id}`);
      resolve(res.data.price);
    } catch (error: any) {
      utils.notification.danger('Error', error.message);
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
      if (from >= Date.now() - 7 * miliseconds['1d'] && isHistoryLoaded) {
        resolve(coinPricesLast7D);
      }

      ids = getTotalTokenIds();
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
        for (let i = 0; i < res.data[key].length; i++) {
          if (res.data[key][i].price === null) {
            continue;
          }
          prices[key].push({
            timestamp: res.data[key][i].timeStamp,
            price: res.data[key][i].price,
          });
        }
        if (prices[key].length === 0) {
          prices[key] = coinPricesLast7D[key];
        }
      });
      resolve(prices);
    } catch (error) {
      console.log('getTokenPriceHistory: ', error);
      resolve({});
    }
  });

import alpha from '../data/coin-prices/alphacoin.json';
import band from '../data/coin-prices/band-protocol.json';
import busd from '../data/coin-prices/binance-usd.json';
import link from '../data/coin-prices/chainlink.json';
import comp from '../data/coin-prices/compound-coin.json';
import sushi from '../data/coin-prices/sushi.json';
import sxp from '../data/coin-prices/swipe.json';
import usdt from '../data/coin-prices/tether.json';
import uni from '../data/coin-prices/uniswap.json';
import wbnb from '../data/coin-prices/wbnb.json';

import tokens from '../../config/tokenlists.json';

const tokenList: Token[] = tokens;

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const coinPrices: Record<string, number[][]> = {
  alpha: alpha.prices,
  band: band.prices,
  busd: busd.prices,
  link: link.prices,
  comp: comp.prices,
  sushi: sushi.prices,
  sxp: sxp.prices,
  usdt: usdt.prices,
  uni: uni.prices,
  wbnb: wbnb.prices,
};

export const calcDate = (
  timestamp1: number,
  timestamp2: number,
  unit: string,
): number => {
  const from = Math.min(timestamp1, timestamp2);
  const to = Math.max(timestamp1, timestamp2);
  let day: number;
  if (unit === 'sec') {
    day = 60 * 60 * 24;
  } else {
    day = 60 * 60 * 24 * 1000;
  }
  return Math.floor((to - from) / day);
};

export const formatFloatFixed = (num: number) => {
  if (num - parseFloat(num.toFixed(2)) === 0) {
    return num;
  }
  return parseFloat(num.toFixed(2));
};

export const getTokenPriceAt = (symbol: string, timestamp: number): number => {
  try {
    const prices = coinPrices[symbol.toLowerCase()];
    if (timestamp < prices[0][0]) {
      return prices[0][1];
    }
    if (timestamp > prices[prices.length - 1][0]) {
      return prices[prices.length - 1][1];
    }
    let i = 0;
    for (i = 0; i < prices.length - 1; i++) {
      if (timestamp >= prices[i][0] && timestamp <= prices[i + 1][0]) {
        return prices[i][1];
      }
    }
  } catch (error) {
    console.log(symbol, new Date(timestamp));
  }
  return 0;
};

export const formatTimestampToString = (
  timestamp: number,
  unit: number,
): string => {
  const date = new Date(timestamp);
  const milisecDay = 1000 * 60 * 60 * 24;
  if (unit < milisecDay) {
    return `${date.getDate()} ${
      date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    }:00`;
  } else {
    return `${months[date.getMonth()]} ${date.getDate()}`;
  }
};

export const getTokenInfo = (symbol: string): Token | undefined => {
  for (let i = 0; i < tokenList.length; i++) {
    if (tokenList[i].symbol.toLowerCase() === symbol.toLowerCase()) {
      return tokenList[i];
    }
  }
  return undefined;
};

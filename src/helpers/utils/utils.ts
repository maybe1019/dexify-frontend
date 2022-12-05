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
  if (num - parseFloat(num.toFixed(3)) === 0) {
    return num;
  }
  return parseFloat(num.toFixed(3));
};

export const getTokenPriceAt = (
  priceList: any,
  geckoId: string,
  timestamp: number,
): number => {
  try {
    const prices = priceList[geckoId];
    if (timestamp < prices[0].timestamp) {
      return prices[0].price;
    }
    if (timestamp > prices[prices.length - 1].timestamp) {
      return prices[prices.length - 1].price;
    }
    let i = 0;
    for (i = 0; i < prices.length - 1; i++) {
      if (
        timestamp >= prices[i].timestamp &&
        timestamp <= prices[i + 1].timestamp
      ) {
        return prices[i].price;
      }
    }
  } catch (error) {
    console.error('getTokenPriceAt: ', error);
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

export const formatDateTimeToString = (date: Date): string => {
  let res = '';
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  res += `${month < 10 ? '0' : ''}${month}/${
    day < 10 ? '0' : ''
  }${day}/${year}`;
  const hour = date.getHours();
  const min = date.getMinutes();
  res += ` ${hour < 10 ? '0' : ''}${hour}:${min < 10 ? '0' : ''}${min}`;
  return res;
};

export const getTokenInfo = (symbol: string): Token => {
  for (let i = 0; i < tokenList.length; i++) {
    if (tokenList[i].symbol.toLowerCase() === symbol.toLowerCase()) {
      return tokenList[i];
    }
  }
  return tokenList[0];
};

export const miliseconds = {
  '1s': 1000,
  '1m': 1000 * 60,
  '30m': 1000 * 60 * 30,
  '1h': 1000 * 60 * 60,
  '1d': 1000 * 60 * 60 * 24,
};

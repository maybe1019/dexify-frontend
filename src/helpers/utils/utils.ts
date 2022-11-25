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
  return num.toFixed(2);
};

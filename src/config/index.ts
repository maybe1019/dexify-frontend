import { BSC } from '@usedapp/core';

const NETWORK = {
  RPC_URL: `https://bsc-dataseed1.binance.org/${process.env.REACT_APP_INFURA_ID}`,
  ...BSC,
};

export { NETWORK };

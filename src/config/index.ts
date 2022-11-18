import { BSC, BSCTestnet } from "@usedapp/core";

let NETWORK: any;
if (process.env.REACT_APP_MODE === "prod") {
  NETWORK = {
    RPC_URL: `https://bsc-dataseed1.binance.org/${process.env.REACT_APP_INFURA_ID}`,
    ...BSC,
  };
} else {
  NETWORK = {
    RPC_URL: `https://data-seed-prebsc-1-s1.binance.org:8545/${process.env.REACT_APP_INFURA_ID}`,
    ...BSCTestnet,
  };
}

export { NETWORK };

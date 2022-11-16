interface NetworkInterface {
  CHAIN_ID: number;
  RPC_URL: string;
}

const network: Record<string, NetworkInterface> = {
  prod: {
    CHAIN_ID: 56,
    RPC_URL: "https://bsc-dataseed.binance.org/",
  },
  dev: {
    CHAIN_ID: 97,
    RPC_URL: "https://data-seed-prebsc-1-s1.binance.org:8545",
  },
};

export const NETWORK: NetworkInterface = network[process.env.REACT_APP_MODE as string]
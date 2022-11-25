type User = {
  id: string;
  address: string;
  email: string;
  title: string;
  bio: string;
  name: string;
  image: string;
};

type Token = {
  name: string;
  symbol: string;
  address: string;
  chainId: number;
  decimals: number;
  logoURI: string;
};

type ComptrollerProxy = {
  id: string;
  timestamp: string;
  activationTime: string;
  destructionTime: string;
};

type Account = {
  id: string;
  firstSeen: string;
  manager: boolean;
  managerSince: string;
  investor: boolean;
  investorSince: string;
};

type Asset = {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  price: {
    price: string;
  };
};

type HoldingState = {
  id: string;
  asset: Asset;
  amount: string;
};

type PortfolioState = {
  id: string;
  holdings: HoldingState[];
};

type ShareState = {
  totalSupply: string;
};

type Fund = {
  id: string;
  name: string;
  inception: string;
  migrator: string;
  accessor: ComptrollerProxy;
  creator: Account;
  manager: Account;
  trackedAssets: Asset[];
  portfolio: PortfolioState;
  share: ShareState;
};

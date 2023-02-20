type User = {
  id: string;
  address: string;
  email: string;
  title: string;
  bio: string;
  name: string;
  image: string;
  twitterName: string;
  twitterScreenName: string;
  twitterImage: string;
};

type Token = {
  name: string;
  symbol: string;
  address: string;
  decimals: number;
  logoURI: string;
  coingeckoId: string;
};

type HoldingToken = {
  id: string;
  aum: number;
  amount: number;
};

type FundData = {
  id: string;
  name: string;
  manager: string;
  comptrollerId: string;
  aum: number;
  sharePrice: number;
  topAsset: string;
  topAssetAUM: number;
  investorCnt: number;
  age: number;
  aum24H: number;
  aum7D: number;
  aumFirst: number;
  sharePrice24H: number;
  sharePrice7D: number;
  sharePriceFirst: number;
  risk: number;
  denominationAsset: string;
  startTimestamp: number;
  holdings: HoldingToken[];
};

type AccountState = {
  value: User;
  status: ThunkStatus;
};

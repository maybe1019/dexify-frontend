import { ApolloClient, InMemoryCache } from '@apollo/client';
import queries from '../../graphql';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/trust0212/dexify-finance-subgraph',
  cache: new InMemoryCache(),
});

export const getMinMaxInvestment = (fundId: string): Promise<any> =>
  new Promise(async (resolve, reject) => {
    try {
      const query = queries.minMaxInvestment(fundId);
      const res = await client.query({ query });
      resolve({
        minInvestment: parseInt(
          res.data.minMaxInvestmentFundSettingsSetEvents[0].minInvestmentAmount,
        ),
        maxInvestment: parseInt(
          res.data.minMaxInvestmentFundSettingsSetEvents[0].maxInvestmentAmount,
        ),
      });
    } catch (error) {
      reject(error);
    }
  });

export const getFunds = (): Promise<any[]> =>
  new Promise(async (resolve) => {
    try {
      const query = queries.funds();
      const res = await client.query({ query });
      resolve(res.data.funds);
    } catch (error) {
      console.log('getFunds: ', error);
      resolve([]);
    }
  });

export const getDailyStates = (fundId: string, limit: number): Promise<any[]> =>
  new Promise(async (resolve) => {
    try {
      const query = queries.dailyState(fundId, limit);
      const res = await client.query({ query });
      resolve(res.data.fund.dailyStates);
    } catch (error) {
      console.log('getDailyStates: ', error);
      resolve([]);
    }
  });

export const getHourlyStates = (
  fundId: string,
  limit: number,
): Promise<any[]> =>
  new Promise(async (resolve) => {
    try {
      const query = queries.hourlyState(fundId, limit);
      const res = await client.query({ query });
      resolve(res.data.fund.hourlyStates);
    } catch (error) {
      console.log('getHourlyStates: ', error);
      resolve([]);
    }
  });

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
      console.error('getFunds: ', error);
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
      console.error('getDailyStates: ', error);
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
      console.error('getHourlyStates: ', error);
      resolve([]);
    }
  });

export const getEntryFee = (fundId: string) =>
  new Promise<number>(async (resolve) => {
    try {
      const query = queries.entranceDirectBurnFees(fundId);
      const res = await client.query({ query });
      if (res.data.entranceRateBurnFeeSettledEvents.length === 0) {
        resolve(0);
      } else {
        resolve(
          parseFloat(
            res.data.entranceRateBurnFeeSettledEvents[0].sharesQuantity,
          ),
        );
      }
    } catch (error) {
      resolve(0);
    }
  });

export const getPerformanceFee = (comptrollerId: string) =>
  new Promise<number>(async (resolve) => {
    try {
      const query = queries.performanceFee(comptrollerId);
      const res = await client.query({ query });
      if (res.data.performanceFeeSettings.length === 0) {
        resolve(0);
      } else {
        resolve(parseFloat(res.data.performanceFeeSettings[0].rate));
      }
    } catch (error) {
      resolve(0);
    }
  });

export const getManagementFee = (comptrollerId: string) =>
  new Promise<number>(async (resolve) => {
    try {
      const query = queries.managementFee(comptrollerId);
      const res = await client.query({ query });
      if (res.data.managementFeeSettings.length === 0) {
        resolve(0);
      } else {
        resolve(
          parseFloat(res.data.managementFeeSettings[0].scaledPerSecondRate),
        );
      }
    } catch (error) {
      resolve(0);
    }
  });

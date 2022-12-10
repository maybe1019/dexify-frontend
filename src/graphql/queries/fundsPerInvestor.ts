import { DocumentNode, gql } from '@apollo/client';
import { milliseconds } from '../../helpers/utils/utils';

const fundsPerInvestor = (address: string): DocumentNode => {
  const now = Date.now();
  const time24hAgo = now - milliseconds['1D'];
  const time7DAgo = now - milliseconds['1W'];

  return gql`
    query getFundsPerInvestor {
      funds {
        id
        name
        inception
        investmentCount
        shares {
          totalSupply
        }
        investments(where: {investor: "${address.toLowerCase()}" }) {
          investor {
            id
            firstSeen
            investorSince
          }
          shares
          stateHistory(orderBy: timestamp, orderDirection: desc) {
            shares
            timestamp
          }
        }
        totalSupply24hAgo: stateHistory(where: { timestamp_lte: ${time24hAgo} }, orderBy: timestamp, orderDirection: desc, first: 1) {
          shares {
            totalSupply
          }      
        }
        totalSupply7DAgo: stateHistory(where: { timestamp_lte: ${time7DAgo} }, orderBy: timestamp, orderDirection: desc, first: 1) {
          shares {
            totalSupply
          }      
        }
      }
    }
  `;
};

export default fundsPerInvestor;

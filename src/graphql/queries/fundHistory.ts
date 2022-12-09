import { DocumentNode, gql } from '@apollo/client';
import { PORTFOLIO_FIELDS } from '../fragments';

const fundHistory = (id: string, timestamp: number): DocumentNode => {
  return gql`
    ${PORTFOLIO_FIELDS}
    query getFundHistory {
      fund(id: "${id}") {
        trackedAssets {
          id
        }
        portfolioHistory(
          where: { timestamp_gte: ${timestamp} }
          orderBy: timestamp
          orderDirection: asc
        ) {
          ...portfolioFragment
        }
        lastPortfolio: portfolioHistory(
          where: { timestamp_lt: ${timestamp} }
          orderBy: timestamp
          orderDirection: desc
          first: 1
        ) {
          ...portfolioFragment
        }

        sharesHistory (
          where: { timestamp_gte: ${timestamp} }
          orderBy: timestamp
          orderDirection: asc
        ) {
          timestamp
          totalSupply
        }
        lastShare: sharesHistory (
          where: { timestamp_lt: ${timestamp} }
          orderBy: timestamp
          orderDirection: desc
          first: 1
        ) {
          timestamp
          totalSupply
        }
      }
    }
  `;
};

export default fundHistory;

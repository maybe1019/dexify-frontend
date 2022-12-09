import { DocumentNode, gql } from '@apollo/client';
import { PORTFOLIO_FIELDS } from '../fragments';

const fundPortfolioHistory = (id: string, timestamp: number): DocumentNode => {
  return gql`
    ${PORTFOLIO_FIELDS}
    query getFundPortfolioHistory {
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
      }
    }
  `;
};

export default fundPortfolioHistory;

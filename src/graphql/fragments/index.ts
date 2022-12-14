import { gql } from '@apollo/client';

export const PORTFOLIO_FIELDS = gql`
  fragment portfolioFragment on PortfolioState {
    timestamp
    holdings {
      amount
      asset {
        id
        symbol
      }
      price {
        price
      }
    }
  }
`;

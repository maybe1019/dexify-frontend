import { DocumentNode, gql } from '@apollo/client';
import { milliseconds } from '../../helpers/utils/utils';
import { PORTFOLIO_FIELDS } from '../fragments';

const funds = (): DocumentNode => {
  const now = Date.now();
  const time1dAgo = Math.floor((now - milliseconds['1D']) / 1000);
  const time7dAgo = Math.floor((now - milliseconds['1D'] * 7) / 1000);
  return gql`
    ${PORTFOLIO_FIELDS}
    query getAllFunds {
      funds {
        id
        name
        inception
        investmentCount
        accessor {
          id
          denominationAsset {
            id
          }
        }
        creator {id}
        manager {id}

        trackedAssets {
          id
          symbol
          price {
            price
          }
          price1dAgo: priceHistory(where:{ timestamp_lte: ${time1dAgo}}, orderBy: timestamp, orderDirection: desc, first: 1) {
            timestamp
            price
          }
          price7dAgo: priceHistory(where:{ timestamp_lte: ${time7dAgo}}, orderBy: timestamp, orderDirection: desc, first: 1) {
            timestamp
            price
          }
        }

        portfolio {
          ...portfolioFragment
        }
        
        portfolio1dAgo: portfolioHistory(where: {timestamp_lte: ${time1dAgo}}, orderBy: timestamp, orderDirection: desc, first: 1) {
          ...portfolioFragment
          holdings {
            asset {
              price1dAgo: priceHistory(where:{ timestamp_lte: ${time1dAgo}}, orderBy: timestamp, orderDirection: desc, first: 1) {
                timestamp
                price
              }
              price7dAgo: priceHistory(where:{ timestamp_lte: ${time7dAgo}}, orderBy: timestamp, orderDirection: desc, first: 1) {
                timestamp
                price
              }
            }
          }
        }

        portfolio7dAgo: portfolioHistory(where: {timestamp_lte: ${time7dAgo}}, orderBy: timestamp, orderDirection: desc, first: 1) {
          ...portfolioFragment
          holdings {
            asset {
              price1dAgo: priceHistory(where:{ timestamp_lte: ${time1dAgo}}, orderBy: timestamp, orderDirection: desc, first: 1) {
                timestamp
                price
              }
              price7dAgo: priceHistory(where:{ timestamp_lte: ${time7dAgo}}, orderBy: timestamp, orderDirection: desc, first: 1) {
                timestamp
                price
              }
            }
          }
        }

        portfolioInception:portfolioHistory(orderBy: timestamp, orderDirection: asc, first: 2) {
          ...portfolioFragment
          holdings {
            price {
              price
              timestamp
            }
          }
        }

        shares {
          totalSupply
        }

        sharesInception: sharesHistory (orderBy: timestamp, orderDirection: asc, first: 2) {
          totalSupply
        }

        shares1dAgo: sharesHistory (where: {timestamp_lte: ${time1dAgo}}, orderBy: timestamp, orderDirection: desc, first: 1) {
          totalSupply
          timestamp
        }

        shares7dAgo: sharesHistory (where: {timestamp_lte: ${time7dAgo}}, orderBy: timestamp, orderDirection: desc, first: 1) {
          totalSupply
          timestamp
        }
      }
    }
  `;
};

export default funds;

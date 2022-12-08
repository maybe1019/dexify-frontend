import { DocumentNode, gql } from '@apollo/client';
import { miliseconds } from '../../helpers/utils/utils';
import { PORTFOLIO_FIELDS } from '../fragments';

const funds = (): DocumentNode => {
  const now = Date.now();
  const time1dAgo = Math.floor((now - miliseconds['1d']) / 1000);
  const time7dAgo = Math.floor((now - miliseconds['1d'] * 7) / 1000);
  console.log(time1dAgo, time7dAgo);
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
        }

        portfolio7dAgo: portfolioHistory(where: {timestamp_lte: ${time7dAgo}}, orderBy: timestamp, orderDirection: desc, first: 1) {
          ...portfolioFragment
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
      }
    }
  `;
};

export default funds;

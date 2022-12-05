import { DocumentNode, gql } from '@apollo/client';

const fundTransactions = (fundId: string): DocumentNode => gql`
  query getFundTransactions {
    sharesBoughtEvents(where: {fund:"${fundId}"}) {
      id
      fund {
        id
        name
      }
      shares
      investmentAmount
      timestamp
      investor {
        id
      }
      transaction {
        id
        from
        to
      }
      asset {
        id
        symbol
        price {
          price
        }
      }
    }
      
    sharesRedeemedEvents(where: {fund: "${fundId}"}) {
      fund {
        id
        name
      }
      id
      shares
      timestamp
      investor {
        id
      }
      transaction {
        id
        from
        to
      }
      payoutAssetAmounts {
        asset {
          symbol
          id
          price {
            price
          }
        }
        price {
          price
        }
        amount
      }
    }
  }
`;

export default fundTransactions;

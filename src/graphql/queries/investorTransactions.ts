import { DocumentNode, gql } from '@apollo/client';

const investorTransactions = (investorId: string): DocumentNode => gql`
  query getFundTransactions {
    sharesBoughtEvents(where: {investor:"${investorId.toLowerCase()}"}) {
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
      
    sharesRedeemedEvents(where: {investor: "${investorId.toLowerCase()}"}) {
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

export default investorTransactions;

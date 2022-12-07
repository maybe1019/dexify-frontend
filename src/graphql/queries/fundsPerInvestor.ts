import { DocumentNode, gql } from '@apollo/client';

const fundsPerInvestor = (address: string): DocumentNode => gql`
  query getFundsPerInvestor {
    funds {
      id
      name
      inception
      investmentCount
      shares {
        totalSupply
      }
      portfolio {
        holdings {
          amount
          asset {
            id
            symbol
            price {
              price
            }
          }
        }
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
      dailyStates(orderBy: start, orderDirection: desc) {
        start
        end
        first {
          shares {
            totalSupply
            timestamp
          }
          portfolio {
            holdings {
              amount
              asset {
                name
                symbol
                price {
                  price
                }
              }
            }
          }
        }
        last {
          shares {
            totalSupply
            timestamp
          }
          portfolio {
            holdings {
              amount
              asset {
                name
                symbol
                price {
                  price
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default fundsPerInvestor;

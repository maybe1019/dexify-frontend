import { DocumentNode, gql } from '@apollo/client';

const getAllFunds: DocumentNode = gql`
  query getAllFunds {
    funds {
      id
      name
      inception
      accessor {
        id
        timestamp
        activationTime
        destructionTime
      }
      creator {
        id
        firstSeen
        manager
        managerSince
        investor
        investorSince
      }
      manager {
        id
        firstSeen
        manager
        managerSince
        investor
        investorSince
      }
      trackedAssets {
        id
        name
        symbol
        decimals
        price {
          price
        }
      }
      investmentCount
      portfolio {
        id
        holdings {
          id
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
      shares {
        totalSupply
      }
      dailyStates(first: 10, orderBy: start, orderDirection: desc) {
        id
        start
        end
        first {
          portfolio {
            holdings {
              amount
              asset {
                price {
                  price
                }
              }
            }
          }
        }
        last {
          portfolio {
            holdings {
              amount
              asset {
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

export default getAllFunds;

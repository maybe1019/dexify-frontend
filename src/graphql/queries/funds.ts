import { DocumentNode, gql } from '@apollo/client';

const funds = (): DocumentNode => gql`
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
        denominationAsset {
          symbol
        }
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
      }
      investmentCount
      portfolio {
        holdings {
          amount
          asset {
            name
            symbol
          }
        }
      }
      volume7D: dailyStates(first: 7, orderBy: start, orderDirection: desc) {
        id
        start
        end
        first {
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
      volumeAll: dailyStates(first: 1, orderBy: start, orderDirection: asc) {
        id
        start
        end
        first {
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

export default funds;

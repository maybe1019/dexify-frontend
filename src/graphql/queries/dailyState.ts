import { DocumentNode, gql } from '@apollo/client';

const dailyState = (id: string, limit: number): DocumentNode => gql`
  query getFundDetail {
    fund(id: "${id}") {
      dailyStates(first: ${limit}, orderBy: start, orderDirection: desc) {
        start
        end
        first {
          portfolio {
            holdings {
              asset {
                symbol
              }
              timestamp
              amount
            }
          }
        }
        last {
          portfolio {
            holdings {
              asset {
                symbol
              }
              timestamp
              amount
            }
          }
        }
      }
    }
  }
`;

export default dailyState;

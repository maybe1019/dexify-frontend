import { DocumentNode, gql } from '@apollo/client';
import { PORTFOLIO_FIELDS } from '../fragments';

const fundShareHistoryPerInvestor = (
  fundId: string,
  investorId: string,
  from: number,
): DocumentNode => {
  return gql`
    ${PORTFOLIO_FIELDS}
    query fundShareHistoryPerInvestor {
      fund(id: "${fundId.toLowerCase()}") {
        investments(where: {investor: "${investorId.toLowerCase()}" }) {
          shares
          stateHistory(where: {timestamp_gte: ${from}}, orderBy: timestamp, orderDirection: desc) {
            shares
            timestamp
          }
          lastState: stateHistory(where: {timestamp_lt: ${from}}, orderBy: timestamp, orderDirection: desc, first: 1) {
            shares
            timestamp
          }
        }
      }
    }
  `;
};

export default fundShareHistoryPerInvestor;

import { DocumentNode, gql } from '@apollo/client';

const performanceFee = (comptrollerId: string): DocumentNode => gql`
  query getPerformanceFeeSetting {
    performanceFeeSettings(where:{comptroller: "${comptrollerId}"}){
      rate
      period
      comptroller{
        id
        fund{
          id
        }
      }
    }
  }
`;

export default performanceFee;

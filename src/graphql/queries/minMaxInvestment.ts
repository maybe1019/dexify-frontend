import { DocumentNode, gql } from '@apollo/client';

const minMaxInvestment = (fundId: string): DocumentNode => gql`
  query minMaxInvestment {
    minMaxInvestmentFundSettingsSetEvents (first:1, where:{fund: "${fundId}"}) {
      id
      fund{
        id
        accessor{
          denominationAsset{
            id
            symbol
            name
          }
        }
      }
      minInvestmentAmount
      maxInvestmentAmount
    }
  }
`;

export default minMaxInvestment;

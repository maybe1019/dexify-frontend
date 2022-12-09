import { DocumentNode, gql } from '@apollo/client';

const minMaxInvestment = (fundId: string): DocumentNode => gql`
  query minMaxInvestment {
    minMaxInvestmentFundSettingsSetEvents (first:1, where:{fund: "${fundId}"}) {
      minInvestmentAmount
      maxInvestmentAmount
    }
  }
`;

export default minMaxInvestment;

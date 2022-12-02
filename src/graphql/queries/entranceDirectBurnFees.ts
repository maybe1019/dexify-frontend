import { DocumentNode, gql } from '@apollo/client';

const entranceDirectBurnFees = (fundId: string): DocumentNode => gql`
  query getEntranceDirectBurnFees {
    entranceRateBurnFeeSettledEvents(where:{fund: "${fundId}"}){
      fund{
        id 
      }
      sharesQuantity
    }
  }
`;

export default entranceDirectBurnFees;

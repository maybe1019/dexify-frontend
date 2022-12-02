import { DocumentNode, gql } from '@apollo/client';

const managementFee = (comptrollerId: string): DocumentNode => gql`
  query getManagementFeeSetting {
    managementFeeSettings(where:{comptroller: "${comptrollerId}"}){
      id
      scaledPerSecondRate
    }
  }
`;

export default managementFee;

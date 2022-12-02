import { useMemo } from 'react';
import { useEthers } from '@usedapp/core';
import { FundDeployer__factory } from '../../types';
import { ethers } from 'ethers';
import { FundDeployerAddress } from '../../helpers/constants';

export const useFundDeployerContract = () => {
  const { library } = useEthers();
  const signer = (library as ethers.providers.JsonRpcProvider)?.getSigner();
  const fundDeployerContract = useMemo(() => {
    if (!library) return undefined;
    return FundDeployer__factory.connect(FundDeployerAddress, signer);
  }, [library]);

  return fundDeployerContract;
};

import { useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import { useMemo } from 'react';
import { VaultLib__factory } from '../../types';

export const useVaultLib = (address: string) => {
  const { library } = useEthers();
  const signer = (library as ethers.providers.JsonRpcProvider)?.getSigner();
  const vaultLibContract = useMemo(() => {
    if (!library || !address) return undefined;
    return VaultLib__factory.connect(address, signer);
  }, [library, address]);

  return vaultLibContract;
};

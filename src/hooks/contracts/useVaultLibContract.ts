import { useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import { useCallback } from 'react';
import { VaultLib__factory } from '../../types';

export const useVaultLib = () => {
  const { library } = useEthers();
  const signer = (library as ethers.providers.JsonRpcProvider)?.getSigner();
  const getVaultLibContract = useCallback(
    (address: string) => {
      if (!library || !address) return undefined;
      return VaultLib__factory.connect(address, signer);
    },
    [library],
  );

  return { getVaultLibContract };
};

export const useVaultLibContract = () => {
  const { getVaultLibContract } = useVaultLib();

  const getAccessorAddr = useCallback(
    async (fundAddr: string): Promise<string> => {
      const vaultLibContract = getVaultLibContract(fundAddr);
      if (!vaultLibContract) return '';
      return await vaultLibContract?.getAccessor();
    },
    [getVaultLibContract],
  );

  return { getAccessorAddr };
};

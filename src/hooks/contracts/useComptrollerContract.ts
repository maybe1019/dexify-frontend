import { useCallback } from 'react';
import { useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import { ComptrollerLib__factory } from '../../types';

export const useComptrollerLib = () => {
  const { library } = useEthers();
  const signer = (library as ethers.providers.JsonRpcProvider)?.getSigner();
  const getComptrollerLibContract = useCallback(
    (comptrollerAddr: string) => {
      if (!library || !comptrollerAddr) return undefined;
      return ComptrollerLib__factory.connect(comptrollerAddr, signer);
    },
    [library],
  );

  return { getComptrollerLibContract };
};

export const useComptrollerLibContract = () => {
  const { getComptrollerLibContract } = useComptrollerLib();

  const getDenominationAssetAddr = useCallback(
    async (accessorAddr: string): Promise<string> => {
      const comptrollerLibContract = getComptrollerLibContract(accessorAddr);
      if (!comptrollerLibContract) return '';
      return await comptrollerLibContract.getDenominationAsset();
    },
    [getComptrollerLibContract],
  );

  return { getDenominationAssetAddr };
};

import { useCallback, useState } from 'react';
import { useVaultLibContract } from './useVaultLibContract';
import utils from '../../helpers/utils';
import { useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import { ComptrollerLib__factory } from '../../types';
import { useCheckNetwork } from './useCheckNetwork';

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
    async (address: string): Promise<string> => {
      const comptrollerLibContract = getComptrollerLibContract(address);
      if (!comptrollerLibContract) return '';
      return await comptrollerLibContract.getDenominationAsset();
    },
    [getComptrollerLibContract],
  );

  return { getDenominationAssetAddr };
};

export const useWithdraw = (fundAddr: string) => {
  const { library } = useEthers();
  const signer = (library as ethers.providers.JsonRpcProvider)?.getSigner();
  const { isWrongNetwork } = useCheckNetwork();
  const disabled = library === undefined || isWrongNetwork;

  const [loading, setLoading] = useState(false);

  const { getAccessorAddr } = useVaultLibContract();

  const redeemSharesAmount = useCallback(
    async (amount: number) => {
      try {
        if (library) throw new Error('Please connect wallet first');
        if (isWrongNetwork) throw new Error('Wrong Network');
        setLoading(true);
        const comptrollerLibAddr = await getAccessorAddr(fundAddr);
        if (!comptrollerLibAddr) throw new Error('Not found fund');
        const comptrollerLabContract = ComptrollerLib__factory.connect(
          comptrollerLibAddr,
          signer,
        );
        if (amount <= 0) throw new Error('Amount should be greater than 0');
        await comptrollerLabContract?.redeemSharesDetailed([amount], [], []);
      } catch (error: any) {
        utils.notification.danger('Error', error.message);
      } finally {
        setLoading(false);
      }
    },
    [signer],
  );

  return { redeemSharesAmount, loading, disabled };
};

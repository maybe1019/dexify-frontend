import { useCallback, useState } from 'react';
import { useVaultLib } from './useContracts';
import utils from '../../helpers/utils';
import { useEthers } from '@usedapp/core';
import { parseEther } from '@ethersproject/units';
import { ethers } from 'ethers';
import { ComptrollerLib__factory } from '../../types';
import { useCheckNetwork } from './useCheckNetwork';

export const useVaultLibContract = (fundAddr: string) => {
  const vaultLibContract = useVaultLib(fundAddr);

  const getComptrollerAddr = useCallback(async (): Promise<string> => {
    if (!vaultLibContract) return '';
    return await vaultLibContract?.getAccessor();
  }, [vaultLibContract]);

  return { getComptrollerAddr };
};

export const useInvest = (fundAddr: string) => {
  const { library } = useEthers();
  const signer = (library as ethers.providers.JsonRpcProvider)?.getSigner();
  const { isWrongNetwork } = useCheckNetwork();
  const disabled = library === undefined || isWrongNetwork;

  const [loading, setLoading] = useState(false);

  const { getComptrollerAddr } = useVaultLibContract(fundAddr);

  const investFundDenomination = useCallback(
    async (investor: string | undefined, amount: number) => {
      try {
        if (library) throw new Error('Please connect wallet first');
        if (isWrongNetwork) throw new Error('Wrong Network');
        setLoading(true);
        const comptrollerLibAddr = await getComptrollerAddr();
        if (!comptrollerLibAddr) throw new Error('Not found fund');
        const comptrollerLabContract = ComptrollerLib__factory.connect(
          comptrollerLibAddr,
          signer,
        );
        if (!investor) throw new Error('Undefined wallet');
        if (amount <= 0) throw new Error('Amount should be greater than 0');
        await comptrollerLabContract?.buyShares(
          [investor],
          [parseEther(String(amount))],
          [1],
        );
      } catch (error: any) {
        utils.notification.danger('Error', error.message);
      } finally {
        setLoading(false);
      }
    },
    [signer],
  );

  return { investFundDenomination, loading, disabled };
};

export const useWithdraw = (fundAddr: string) => {
  const { library } = useEthers();
  const signer = (library as ethers.providers.JsonRpcProvider)?.getSigner();
  const { isWrongNetwork } = useCheckNetwork();
  const disabled = library === undefined || isWrongNetwork;

  const [loading, setLoading] = useState(false);

  const { getComptrollerAddr } = useVaultLibContract(fundAddr);

  const redeemSharesAmount = useCallback(
    async (amount: number) => {
      try {
        if (library) throw new Error('Please connect wallet first');
        if (isWrongNetwork) throw new Error('Wrong Network');
        setLoading(true);
        const comptrollerLibAddr = await getComptrollerAddr();
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

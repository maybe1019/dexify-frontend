import { useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import { useCallback, useState } from 'react';
import { useCheckNetwork } from './contracts/useCheckNetwork';
import { useComptrollerLib } from './contracts/useComptrollerContract';
import { useVaultLibContract } from './contracts/useVaultLibContract';
import { parseEther } from '@ethersproject/units';
import utils from '../helpers/utils';

export const useWithdraw = (fundAddr: string) => {
  const { library } = useEthers();
  const signer = (library as ethers.providers.JsonRpcProvider)?.getSigner();
  const { isWrongNetwork } = useCheckNetwork();
  const disabled = library === undefined || isWrongNetwork;

  const [loading, setLoading] = useState(false);

  const { getAccessorAddr } = useVaultLibContract();
  const { getComptrollerLibContract } = useComptrollerLib();

  const redeemSharesDetailed = useCallback(
    async (amount: number) => {
      try {
        if (isWrongNetwork) throw new Error('Wrong Network');
        if (amount <= 0) throw new Error('Amount should be greater than 0');
        setLoading(true);

        const accessorAddr = await getAccessorAddr(fundAddr);

        const comptrollerLabContract = getComptrollerLibContract(accessorAddr);
        if (!comptrollerLabContract) throw new Error('Not found Fund');
        const redeemSharesDetailedTx =
          await comptrollerLabContract?.redeemSharesDetailed(
            parseEther(String(amount)),
            [],
            [],
          );
        await redeemSharesDetailedTx.wait();
        utils.notification.success(
          'Success',
          'Your shares have been withdrawn',
        );
      } catch (error: any) {
        console.error('redeemSharesDetailed: ', error);
        const err = error?.reason?.split(':');
        const errorTitle = err[0].toUpperCase();
        utils.notification.danger(
          errorTitle,
          error?.reason?.slice(errorTitle.length + 1),
        );
      } finally {
        setLoading(false);
      }
    },
    [signer, getComptrollerLibContract, getAccessorAddr],
  );

  return { redeemSharesDetailed, loading, disabled };
};

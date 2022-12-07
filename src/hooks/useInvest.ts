import { useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import { useCallback, useState } from 'react';
import { useCheckNetwork } from './contracts/useCheckNetwork';
import {
  useComptrollerLib,
  useComptrollerLibContract,
} from './contracts/useComptrollerContract';
import {
  useVaultLib,
  useVaultLibContract,
} from './contracts/useVaultLibContract';
import { parseEther, formatEther } from '@ethersproject/units';
import utils from '../helpers/utils';

export const useInvest = (fundAddr: string) => {
  const { library, account } = useEthers();
  const signer = (library as ethers.providers.JsonRpcProvider)?.getSigner();
  const { isWrongNetwork } = useCheckNetwork();
  const disabled = library === undefined || isWrongNetwork;

  const [loading, setLoading] = useState(false);

  const { getVaultLibContract } = useVaultLib();
  const { getAccessorAddr } = useVaultLibContract();
  const { getComptrollerLibContract } = useComptrollerLib();
  const { getDenominationAssetAddr } = useComptrollerLibContract();

  const investFundDenomination = useCallback(
    async (amount: number) => {
      try {
        if (isWrongNetwork) throw new Error('Wrong Network');
        if (!account) throw new Error('Undefined wallet');
        if (amount <= 0) throw new Error('Amount should be greater than 0');
        setLoading(true);

        const accessorAddr = await getAccessorAddr(fundAddr);

        if (!accessorAddr) throw new Error('Not found fund');
        const assetAddr = await getDenominationAssetAddr(accessorAddr);

        if (!assetAddr) throw new Error('Not found asset');
        const assetContract = getVaultLibContract(assetAddr);

        if (!assetContract) throw new Error('Not found asset');
        const allowance = await assetContract.allowance(account, accessorAddr);
        if (parseFloat(formatEther(allowance)) < amount) {
          const receipt = await assetContract.approve(
            accessorAddr,
            parseEther(String(1000000)),
          );
          await receipt.wait();
        }

        const comptrollerLabContract = getComptrollerLibContract(accessorAddr);
        if (!comptrollerLabContract) throw new Error('Not found Fund');
        const buySharesTx = await comptrollerLabContract.buyShares(
          [account],
          [parseEther(String(amount))],
          [1],
        );
        await buySharesTx.wait();
        utils.notification.success(
          'Success',
          'You got some shares. Please check your wallet.',
        );
      } catch (error: any) {
        console.log(error);
        utils.notification.danger('Error', error.message);
      } finally {
        setLoading(false);
      }
    },
    [
      signer,
      account,
      getVaultLibContract,
      getComptrollerLibContract,
      getDenominationAssetAddr,
      getAccessorAddr,
    ],
  );

  return { investFundDenomination, loading, disabled };
};

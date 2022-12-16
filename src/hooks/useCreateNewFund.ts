import { useFundDeployerContract } from './contracts/useDeployerContract';
import { useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import { useCallback, useState } from 'react';
import { useCheckNetwork } from './contracts/useCheckNetwork';
import utils from '../helpers/utils';

export const useCreateNewFund = () => {
  const { library, account } = useEthers();
  const signer = (library as ethers.providers.JsonRpcProvider)?.getSigner();
  const { isWrongNetwork } = useCheckNetwork();
  const disabled = library === undefined || isWrongNetwork;
  const fundDeployerContract = useFundDeployerContract();
  const [loading, setLoading] = useState(false);

  const createNewFund = useCallback(
    async (
      fundOwner: string,
      fundName: string,
      denominationAsset: string,
      timeLockInSeconds: number,
      feeManagerConfig: string,
      policyManagerConfigData: string,
    ) => {
      try {
        if (isWrongNetwork) throw new Error('Wrong Network');
        if (!account) throw new Error('Undefined wallet');
        if (!fundDeployerContract) throw new Error('Undefined Deployer');
        setLoading(true);
        const nonce = await library?.getTransactionCount(account, 'pending');
        const deployFund = await fundDeployerContract.createNewFund(
          fundOwner,
          fundName,
          denominationAsset,
          timeLockInSeconds,
          feeManagerConfig,
          policyManagerConfigData,
          { nonce: nonce },
        );
        const receipt = await deployFund.wait();
        utils.notification.success(
          'Congratulations',
          'A new fund has been created successfully.',
        );
        if (!receipt.events) return undefined;
        const newFundAddr = receipt.events.filter(
          (e) => e?.['event'] === 'NewFundCreated',
        )[0].args?.[2];

        return newFundAddr as string;
      } catch (error: any) {
        console.error('useCreateNewFund: ', error.code);
        const err = error?.reason?.split(':');
        const errorTitle = err ? err[0].toUpperCase() : error.message;
        utils.notification.danger(
          errorTitle,
          error?.reason?.slice(errorTitle.length + 1),
        );
      } finally {
        setLoading(false);
      }
    },
    [signer, fundDeployerContract],
  );

  return { createNewFund, loading, disabled };
};

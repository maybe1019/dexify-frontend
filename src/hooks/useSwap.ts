import { useComptrollerLib } from './contracts/useComptrollerContract';
import { useState, useCallback } from 'react';
import utils from '../helpers/utils';
import { BigNumber, ethers } from 'ethers';
import { useCheckNetwork } from './contracts/useCheckNetwork';
import { useEthers } from '@usedapp/core';
import {
  IntegrationManagerAddress,
  UniswapV2AdapterAddress,
} from '../helpers/constants';
import { useVaultLibContract } from './contracts/useVaultLibContract';
import { parseUnits } from '@ethersproject/units';

export const useSwap = () => {
  const { library } = useEthers();
  const signer = (library as ethers.providers.JsonRpcProvider)?.getSigner();
  const { isWrongNetwork } = useCheckNetwork();
  const [loading, setLoading] = useState(false);
  const { getAccessorAddr } = useVaultLibContract();
  const { getComptrollerLibContract } = useComptrollerLib();
  const abiCoder = new ethers.utils.AbiCoder();

  const swap = useCallback(
    async (
      fundAddr: string,
      amount: number,
      from: Token,
      to: Token,
      maxAmount: BigNumber | undefined,
    ) => {
      try {
        if (isWrongNetwork) throw new Error('Wrong Network');
        setLoading(true);

        const accessorAddr = await getAccessorAddr(fundAddr);
        const comptrollerContract = getComptrollerLibContract(accessorAddr);

        if (!comptrollerContract) throw new Error('Not found fund');

        const integrationData = abiCoder.encode(
          ['address[]', 'uint256', 'uint256'],
          [
            [from.address, to.address],
            maxAmount ||
              parseUnits(
                amount.toLocaleString('en-US', { useGrouping: false }),
                from.decimals,
              ),
            '1',
          ],
        );
        const integrationCallArgs = abiCoder.encode(
          ['address', 'bytes4', 'bytes'],
          [
            UniswapV2AdapterAddress,
            '0x03e38a2b', // takeOrder
            integrationData,
          ],
        );

        const receipt = await comptrollerContract.callOnExtension(
          IntegrationManagerAddress,
          0,
          integrationCallArgs,
        );
        await receipt.wait();

        utils.notification.success('Success', 'Succeed in swap');
      } catch (error: any) {
        console.error('swap: ', error);
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
    [signer],
  );

  return { loading, swap };
};

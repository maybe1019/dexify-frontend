import { useComptrollerLib } from './contracts/useComptrollerContract';
import { useState, useCallback } from 'react';
import axios from 'axios';
import utils from '../helpers/utils';
import { ethers } from 'ethers';
import { useCheckNetwork } from './contracts/useCheckNetwork';
import { useEthers } from '@usedapp/core';
import {
  IntegrationManagerAddress,
  UniswapV2AdapterAddress,
} from '../helpers/constants';
import {
  uniswapV2TakeOrderArgs,
  callOnIntegrationArgs,
  takeOrderSelector,
} from '@enzymefinance/protocol';

const getParaswapData = async (
  fundAddr: string,
  from: Token,
  to: Token,
  priceRoute: any,
) => {
  try {
    const { srcUSD, destUSD, gasCostUSD, destAmount, srcAmount } = priceRoute;
    const paramBuilderBody = {
      partner: 'Dexify',
      userAddress: fundAddr,
      srcToken: from.address,
      destToken: to.address,
      srcDecimals: from.decimals,
      destDecimals: to.decimals,
      srcAmount,
      destAmount,
      priceRoute,
    };

    const pPath = await axios.post(
      `https://apiv5.paraswap.io/transactions/56?ignoreChecks=true&onlyParams=true`,
      paramBuilderBody,
      {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      },
    );

    if (pPath.status != 200) return false;

    const contractData = pPath.data;

    return {
      contractData,
      srcUSD,
      destUSD,
      gasCostUSD,
      srcAmount,
      destAmount,
      srcDecs: from.decimals,
      destDecs: to.decimals,
      src: from.address,
      dest: to.address,
    };
  } catch (error: any) {
    console.error('getParaswapData: ', error);
    utils.notification.danger('Error', error.message);
    return false;
  }
};

export const useSwap = () => {
  const { library } = useEthers();
  const signer = (library as ethers.providers.JsonRpcProvider)?.getSigner();
  const { isWrongNetwork } = useCheckNetwork();
  const [loading, setLoading] = useState(false);
  const { getComptrollerLibContract } = useComptrollerLib();
  const abiCoder = new ethers.utils.AbiCoder();

  const swap = useCallback(
    async (fundAddr: string, priceRoute: any, from: Token, to: Token) => {
      try {
        if (isWrongNetwork) throw new Error('Wrong Network');
        setLoading(true);
        const swapPaths = [];

        const paraswapData = await getParaswapData(
          fundAddr,
          from,
          to,
          priceRoute,
        );
        if (paraswapData) {
          swapPaths.push({
            exchange: 'Paraswap V4',
            price: 1 / parseFloat(paraswapData.gasCostUSD),
            amount:
              parseInt(paraswapData.destAmount) / 10 ** paraswapData.destDecs,
            ...paraswapData,
          });
        }
        const comptrollerContract = getComptrollerLibContract(fundAddr);
        if (!comptrollerContract) throw new Error('Not found fund');
        if (!swapPaths) throw new Error('Not found contract Data');

        // const paths = [];
        // for (let j = 0; j < swapPaths[0].contractData[0].path.length; j++) {
        //   const routes = [];
        //   for (
        //     let i = 0;
        //     i < swapPaths[0].contractData[0].path[j].adapters.length;
        //     i++
        //   ) {
        //     const route =
        //       swapPaths[0].contractData[0].path[j].adapters[i].route[0];
        //     routes.push([
        //       route.targetExchange,
        //       route.targetExchange,
        //       route.percent,
        //       route.payload,
        //       route.networkFee,
        //     ]);
        //   }

        //   paths.push([
        //     swapPaths[0].contractData[0].path[j].to,
        //     swapPaths[0].contractData[0].path[j].totalNetworkFee,
        //     routes,
        //   ]);
        // }
        console.log([
          [from.address, to.address],
          swapPaths[0].srcAmount.toString(),
          swapPaths[0].destAmount.toString(),
        ]);
        const integrationData = abiCoder.encode(
          ['address[]', 'uint256', 'uint256'],
          [
            [from.address, to.address],
            swapPaths[0].srcAmount.toString(),
            swapPaths[0].destAmount.toString(),
          ],
        );
        // const takeOrderFragment = ethers.utils.FunctionFragment.fromString(
        //   'takeOrder(address,bytes,bytes)',
        // );
        // const takeOrderSelector = sighash(takeOrderFragment);
        // const integrationCallArgs = abiCoder.encode(
        //   ['address', 'bytes4', 'bytes'],
        //   [
        //     UniswapV2AdapterAddress,
        //     takeOrderSelector, // takeOrder
        //     integrationData,
        //   ],
        // );

        // const receipt = await comptrollerContract.callOnExtension(
        //   IntegrationManagerAddress,
        //   0,
        //   integrationCallArgs,
        // );
        const takeOrderArgs = uniswapV2TakeOrderArgs({
          minIncomingAssetAmount: swapPaths[0].destAmount.toString(),
          outgoingAssetAmount: swapPaths[0].srcAmount.toString(),
          path: [from.address, to.address],
        });
        const callArgs = callOnIntegrationArgs({
          adapter: UniswapV2AdapterAddress,
          encodedCallArgs: takeOrderArgs,
          selector: takeOrderSelector,
        });
        const receipt = await comptrollerContract.callOnExtension(
          IntegrationManagerAddress,
          0,
          callArgs,
        );
        await receipt.wait();

        utils.notification.success('Success', 'Succeed in swap');
        setLoading(false);
      } catch (error: any) {
        console.error('useSwap->callback: ', error);
        utils.notification.danger('Error', error.message);
      } finally {
        setLoading(false);
      }
    },
    [signer],
  );

  return { loading, swap };
};

import { useComptrollerLib } from './contracts/useComptrollerContract';
import { useState, useCallback } from 'react';
import axios from 'axios';
import utils from '../helpers/utils';
import { ethers } from 'ethers';
import { useCheckNetwork } from './contracts/useCheckNetwork';
import { useEthers } from '@usedapp/core';
import {
  ParaSwapV4AdapterAddress,
  IntegrationManagerAddress,
} from '../helpers/constants';

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
      destAmount,
      srcDecs: from.decimals,
      destDecs: to.decimals,
      src: from.address,
      dest: to.address,
    };
  } catch (error: any) {
    console.error(error);
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
        const paths = [];
        for (let j = 0; j < swapPaths[0].contractData[0].path.length; j++) {
          const routes = [];
          for (
            let i = 0;
            i < swapPaths[0].contractData[0].path[j].adapters.length;
            i++
          ) {
            const route =
              swapPaths[0].contractData[0].path[j].adapters[i].route[0];
            routes.push([
              route.targetExchange,
              route.targetExchange,
              route.percent,
              route.payload,
              route.networkFee,
            ]);
          }

          paths.push([
            swapPaths[0].contractData[0].path[j].to,
            swapPaths[0].contractData[0].path[j].totalNetworkFee,
            routes,
          ]);
        }
        console.log(paths);

        const integrationData = abiCoder.encode(
          [
            'uint256',
            'uint256',
            'address',
            'uint256',
            'tuple(address,uint256,tuple(address,address,uint256,bytes,uint256)[])[]',
          ],
          [
            swapPaths[0].destAmount.toString(),
            swapPaths[0].destAmount.toString(),
            swapPaths[0].src,
            swapPaths[0].destAmount.toString(),
            paths,
          ],
        );

        const integrationCallArgs = abiCoder.encode(
          ['address', 'bytes4', 'bytes'],
          [
            ParaSwapV4AdapterAddress,
            '0x03e38a2b', // takeOrder
            integrationData,
          ],
        );

        console.log('integrationCallArgs: ', integrationCallArgs);

        const receipt = await comptrollerContract.callOnExtension(
          IntegrationManagerAddress,
          0,
          integrationCallArgs,
        );
        await receipt.wait();

        utils.notification.success('Success', 'Succeed in swap');
        setLoading(false);
      } catch (error: any) {
        console.error(error);
        utils.notification.danger('Error', error.message);
      } finally {
        setLoading(false);
      }
    },
    [signer],
  );

  return { loading, swap };
};

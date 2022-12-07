import { useState, useEffect } from 'react';
import { parseEther } from '@ethersproject/units';
import axios from 'axios';
import utils from '../helpers/utils';

const getParaswapData = async (
  fundAddr: string,
  from: Token,
  to: Token,
  amount: number,
) => {
  try {
    if (amount <= 0) return;
    const scaledAmount = parseEther(amount.toString());
    const getPathRequestEndpoint = `https://apiv5.paraswap.io/prices?srcToken=${from.symbol}&destToken=${to.symbol}&amount=${scaledAmount}&side=SELL&network=56&includeDEXS=&excludeDEXS=&includeContractMethods=multiSwap`;
    const { data } = await axios.get(getPathRequestEndpoint);
    const { srcUSD, destUSD, gasCostUSD, destAmount } = data.priceRoute;

    const paramBuilderBody = {
      partner: 'Dexify',
      userAddress: fundAddr,
      srcToken: from.address,
      destToken: to.address,
      srcDecimals: from.decimals,
      destDecimals: to.decimals,
      srcAmount: scaledAmount.toString(),
      destAmount,
      priceRoute: data.priceRoute,
    };

    const pPath = await axios.post(
      `https://apiv5.paraswap.io/transactions/56?onlyParams=true`,
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
    console.log(error);
    utils.notification.danger('Error', error.message);
    return false;
  }
};

export const useSwapData = (
  fundAddr: string,
  from: Token,
  to: Token,
  amount: number,
) => {
  const [loading, setLoading] = useState(false);
  const [tradePaths, setTradePaths] = useState<any>();

  useEffect(() => {
    getTradePaths(fundAddr, from, to, amount);

    async function getTradePaths(
      fund: string,
      from: Token,
      to: Token,
      amount: number,
    ) {
      setLoading(true);
      const swapPaths = [];

      const paraswapData = await getParaswapData(fund, from, to, amount);
      console.log('paraswapData: ' + JSON.stringify(paraswapData));
      if (paraswapData) {
        swapPaths.push({
          exchange: 'Paraswap V4',
          price: 1 / parseInt(paraswapData.gasCostUSD),
          amount:
            parseInt(paraswapData.destAmount) / 10 ** paraswapData.destDecs,
          ...paraswapData,
        });
      }

      setTradePaths(swapPaths);
      setLoading(false);
    }
  }, [fundAddr, from, to, amount]);

  return { loading, tradePaths };
};

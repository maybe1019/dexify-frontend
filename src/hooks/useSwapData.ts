import { useState, useEffect, useCallback } from 'react';
import { parseEther } from '@ethersproject/units';
import axios from 'axios';
import utils from '../helpers/utils';

const getPriceRoute = async (from: Token, to: Token, amount: number) => {
  if (amount <= 0) return;
  const scaledAmount = parseEther(amount.toString());
  const getPathRequestEndpoint = `https://apiv5.paraswap.io/prices?srcToken=${from.symbol}&destToken=${to.symbol}&amount=${scaledAmount}&side=SELL&network=56&includeDEXS=&excludeDEXS=&includeContractMethods=multiSwap`;
  const { data } = await axios.get(getPathRequestEndpoint);
  return data.priceRoute;
};

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

export const useSwapData = (from: Token, to: Token, amount: number) => {
  const [loading, setLoading] = useState(false);
  const [tradePaths, setTradePaths] = useState<any>();
  const [priceRoute, setPriceRoute] = useState<any>();

  useEffect(() => {
    getPriceRouteData();

    async function getPriceRouteData() {
      setLoading(true);
      const priceRoute = await getPriceRoute(from, to, amount);
      setPriceRoute(priceRoute);
      setLoading(false);
    }
  }, [from, to, amount]);

  const getTradePath = useCallback(
    async (fundAddr: string) => {
      setLoading(true);
      const swapPaths = [];

      const paraswapData = await getParaswapData(
        fundAddr,
        from,
        to,
        priceRoute,
      );
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
    },
    [from, to, amount],
  );

  return { loading, tradePaths, priceRoute, getTradePath };
};

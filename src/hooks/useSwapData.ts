import { useState, useEffect } from 'react';
import { parseEther } from '@ethersproject/units';
import axios from 'axios';
import utils from '../helpers/utils';

const getPriceRoute = async (from: Token, to: Token, amount: number) => {
  try {
    if (amount <= 0) return { priceRoute: '', impactValue: '' };
    const scaledAmount = parseEther(amount.toString());
    const getPathRequestEndpoint = `https://apiv5.paraswap.io/prices?srcToken=${from.symbol}&destToken=${to.symbol}&amount=${scaledAmount}&side=SELL&network=56&includeDEXS=&excludeDEXS=&includeContractMethods=multiSwap`;
    const { data } = await axios.get(getPathRequestEndpoint);
    return { priceRoute: data.priceRoute, impactValue: data.value };
  } catch (error: any) {
    if (!error.response.data.value)
      utils.notification.danger('Error', error.response.data.error);
    return {
      priceRoute: error.response.data.priceRoute,
      impactValue: error.response.data.value,
    };
  }
};

export const useSwapData = (from: Token, to: Token, amount: number) => {
  const [loading, setLoading] = useState(false);
  const [priceRoute, setPriceRoute] = useState<any>();
  const [impactValue, setImpactValue] = useState<any>();

  useEffect(() => {
    getPriceRouteData();

    async function getPriceRouteData() {
      setLoading(true);
      const { priceRoute, impactValue } = await getPriceRoute(from, to, amount);
      setPriceRoute(priceRoute);
      setImpactValue(impactValue);
      setLoading(false);
    }
  }, [from, to, amount]);

  return { loading, priceRoute, impactValue };
};

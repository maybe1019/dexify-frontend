import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid';
import { useTokenBalance } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import React, { useEffect, useState } from 'react';
import tokenLists from '../../../../config/tokenlists.json';
import TokenListDropdown from './TokenListDropdown';
import api from '../../../../api';
import { useSwapData } from '../../../../hooks/useSwapData';
import { useSwap } from '../../../../hooks/useSwap';

function Swap({ fundAddress }: { fundAddress: string }) {
  const [swapToken, setSwapToken] = useState<Token>(tokenLists[0]);
  const [receiveToken, setReceiveToken] = useState<Token>(tokenLists[1]);
  const [swapAmount, setSwapAmount] = useState(1);
  const tokenBalance = useTokenBalance(swapToken.address, fundAddress);

  const { loading, priceRoute, impactValue } = useSwapData(
    swapToken,
    receiveToken,
    swapAmount,
  );

  const { swap } = useSwap();

  const onSwap = async () => {
    console.log('swap button clicked');
    await swap(fundAddress, priceRoute, swapToken, receiveToken);
  };

  const swapFromAndToTokens = () => {
    const tmpS = { ...swapToken };
    const tmpR = { ...receiveToken };
    setSwapToken(tmpR);
    setReceiveToken(tmpS);
  };

  const [tokenPrice, setTokenPrice] = useState<number>(1);
  const getTokenPrice = async (tokenCoingeckoId: string) => {
    const bnbPrice = await api.token.getTokenPrice(tokenCoingeckoId);
    setTokenPrice(bnbPrice);
  };
  useEffect(() => {
    getTokenPrice(swapToken.coingeckoId);
  }, [swapToken]);

  return (
    <div className="card shadow-xl rounded-2xl py-6 px-4 lg:px-6 ">
      <div className="max-w-[360px] mx-auto my-4">
        <p className="text-xl">Swap</p>
        <div className="mt-8 w-full bg-[#8881] p-6 rounded-2xl shadow-lg">
          <div id="menu-button" aria-expanded="true" aria-haspopup="true">
            <div className="flex gap-2 ">
              <input
                type="number"
                value={swapAmount}
                min={0}
                onChange={(e: any) => {
                  if (e.target.value === '') {
                    setSwapAmount(0);
                    return;
                  }
                  if (swapAmount === 0) {
                    setSwapAmount(e.target.value.replace('0', ''));
                    return;
                  }
                  setSwapAmount(e.target.value);
                }}
                className="bg-transparent w-20 outline-none grow py-2 text-xl lg:text-2xl pl-2 text-text-1 dark:text-text-1-dark"
                placeholder="Input Amount"
              />

              <TokenListDropdown
                tokenList={tokenLists}
                oppToken={receiveToken}
                selectedToken={swapToken}
                setToken={setSwapToken}
              ></TokenListDropdown>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 mb-2 mx-2">
            <div className=" text-text-3 dark:text-text-3-dark text-sm">
              = ${tokenPrice * swapAmount}
            </div>
            <div className=" text-text-3 dark:text-text-3-dark text-sm ml-auto">
              Balance:{' '}
              {tokenBalance
                ? parseFloat(formatEther(tokenBalance)).toFixed(2)
                : 0.0}
            </div>
          </div>
          <div className="grid grid-cols-4 text-xs gap-2">
            {['25%', '50%', '75%', 'MAX'].map((value, i) => (
              <button
                key={i + 1}
                index-data={i + 1}
                onClick={(e: any) => {
                  if (tokenBalance) {
                    const val =
                      (e.target.attributes[0].value *
                        parseFloat(formatEther(tokenBalance))) /
                      4;
                    setSwapAmount(val);
                  }
                }}
                className=" bg-white dark:bg-bg-4-dark w-14 h-6 rounded-full mx-auto shadow-lg text-text-3 dark:text-text-3-dark hover:text-black hover:dark:text-white"
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        <div className="my-2 relative">
          <button
            className="absolute translate-x-[-50%] left-1/2 top-[-24px] bg-bg-3 dark:bg-bg-3-dark border-4 rounded-lg border-bg-2 dark:border-bg-2-dark w-10 h-10 flex items-center justify-center"
            onClick={swapFromAndToTokens}
          >
            <ArrowPathRoundedSquareIcon width={20} />
          </button>
        </div>
        <div className="w-full bg-[#8881] p-6 rounded-2xl shadow-lg">
          <div id="menu-button" aria-expanded="true" aria-haspopup="true">
            <div className="flex gap-2 ">
              <div className="bg-transparent w-20 overflow-auto outline-none grow py-2 text-xl lg:text-2xl pl-2 text-text-1 dark:text-text-1-dark relative">
                {loading && (
                  <div className=" absolute skeleton w-full h-full left-0 top-0 z-50"></div>
                )}
                {priceRoute
                  ? parseFloat(formatEther(priceRoute.destAmount)).toFixed(4)
                  : '-'}
              </div>

              <TokenListDropdown
                tokenList={tokenLists}
                oppToken={swapToken}
                selectedToken={receiveToken}
                setToken={setReceiveToken}
              ></TokenListDropdown>
            </div>
          </div>
        </div>
        <div className="mx-4 mt-6 my-20 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="col-span-1 text-center text-sm">Rate</span>
            <div className="relative">
              {loading && (
                <div className=" absolute skeleton w-full h-full left-0 top-0 z-50"></div>
              )}
              <span className="col-span-2 text-primary font-bold">
                {'1 ' + receiveToken.symbol + ' = '}
                {priceRoute
                  ? (priceRoute.srcAmount / priceRoute.destAmount).toFixed(2)
                  : '-'}{' '}
                {swapToken.symbol}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="col-span-1 text-center text-sm">Fee</span>
            <div className="relative col-span-2">
              {loading && (
                <div className=" absolute skeleton w-full h-full left-0 top-0 z-50"></div>
              )}
              <span className="w-full text-primary font-bold">
                {priceRoute ? priceRoute.gasCostUSD : '-'}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="col-span-1 text-center text-sm">Price Impact</span>
            {priceRoute && priceRoute.maxImpactReached ? (
              <div className="relative">
                {loading && (
                  <div className=" absolute skeleton w-full h-full left-0 top-0 z-50"></div>
                )}
                <span className="col-span-2 text-red-600 font-bold">
                  {'- ' + impactValue}
                </span>
              </div>
            ) : (
              <span className="col-span-2 text-primary font-bold">-</span>
            )}
          </div>
        </div>
        <button
          onClick={onSwap}
          className="w-full bg-primary p-3 rounded-lg text-white max-w-[250px] mx-auto block shadow-[0_1px_1px_1px_#9926af]"
        >
          Swap
        </button>
      </div>
    </div>
  );
}
export default Swap;

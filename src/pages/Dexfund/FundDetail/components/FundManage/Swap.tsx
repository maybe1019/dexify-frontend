import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import tokenLists from '../../../../../config/tokenlists.json';
import TokenListDropdown from './TokenListDropdown';

function Swap() {
  const [swapToken, setSwapToken] = useState<Token>(tokenLists.tokens[0]);
  const [receiveToken, setReceiveToken] = useState<Token>(tokenLists.tokens[1]);

  const swapFromandToTokens = () => {
    const tmpS = { ...swapToken };
    const tmpR = { ...receiveToken };
    setSwapToken(tmpR);
    setReceiveToken(tmpS);
  };

  return (
    <div className="card shadow-xl rounded-2xl py-6 px-4 lg:px-6 ">
      <div className="max-w-[360px] mx-auto my-4">
        <p className="text-xl">Swap</p>
        <div className="mt-8 w-full bg-[#8881] p-6 rounded-2xl shadow-lg">
          <div id="menu-button" aria-expanded="true" aria-haspopup="true">
            <div className="flex gap-2 ">
              <input
                type="number"
                className="bg-transparent w-20 outline-none grow py-2 text-xl lg:text-2xl pl-2 text-text-1 dark:text-text-1-dark"
                placeholder="Input Amount"
              />

              <TokenListDropdown
                tokenList={tokenLists.tokens}
                token={swapToken}
                setToken={setSwapToken}
              ></TokenListDropdown>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 mb-2 mx-2">
            <div className=" text-text-3 dark:text-text-3-dark text-sm">
              = $4000
            </div>
            <div className=" text-text-3 dark:text-text-3-dark text-sm ml-auto">
              Balance: 1000
            </div>
          </div>
          <div className="grid grid-cols-4 text-xs gap-2">
            {['25%', '50%', '75%', 'MAX'].map((value) => (
              <button className=" bg-white dark:bg-bg-4-dark w-14 h-6 rounded-full mx-auto shadow-lg text-text-3 dark:text-text-3-dark hover:text-black hover:dark:text-white">
                {value}
              </button>
            ))}
          </div>
        </div>
        <div className="my-2 relative">
          <button
            className="absolute translate-x-[-50%] left-1/2 top-[-24px] bg-bg-3 dark:bg-bg-3-dark border-4 rounded-lg border-bg-2 dark:border-bg-2-dark w-10 h-10 flex items-center justify-center"
            onClick={swapFromandToTokens}
          >
            <ArrowPathRoundedSquareIcon width={20} />
          </button>
        </div>
        <div className="w-full bg-[#8881] p-6 rounded-2xl shadow-lg">
          <div id="menu-button" aria-expanded="true" aria-haspopup="true">
            <div className="flex gap-2 ">
              <div className="bg-transparent w-20 outline-none grow py-2 text-xl lg:text-2xl pl-2 text-text-1 dark:text-text-1-dark">
                100
              </div>

              <TokenListDropdown
                tokenList={tokenLists.tokens}
                token={receiveToken}
                setToken={setReceiveToken}
              ></TokenListDropdown>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 mx-2">
            <div className=" text-text-3 dark:text-text-3-dark text-sm">
              = $4000
            </div>
            <div className=" text-text-3 dark:text-text-3-dark text-sm ml-auto">
              Balance: 1000
            </div>
          </div>
        </div>
        <div className="mx-4 mt-6 my-20 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="col-span-1 text-center text-sm">Rate</span>
            <span className="col-span-2 text-primary font-bold">
              1 BNB = 650 USDT
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="col-span-1 text-center text-sm">Fee</span>
            <span className="col-span-2 text-primary font-bold">$0.019</span>
          </div>
        </div>
        <button className="w-full bg-primary p-3 rounded-lg text-white max-w-[250px] mx-auto block shadow-[0_1px_1px_1px_#9926af]">
          Swap
        </button>
      </div>
    </div>
  );
}
export default Swap;

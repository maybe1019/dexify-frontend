import React, { useState } from 'react';
import tokenLists from '../../../../../config/tokenlists.json';
import TokenListDropdown from './TokenListDropdown';

function Swap() {
  const [swapToken, setSwapToken] = useState<Token>(tokenLists.tokens[0]);
  const [receiveToken, setReceiveToken] = useState<Token>(tokenLists.tokens[1]);

  return (
    <div className="bg-[#720790] shadow-[0_0_12px_0_primary] shadow-[#72079088] rounded-2xl dark:bg-[#430f52] p-7">
      <p className="text-text-1-dark text-xl">Swap</p>
      <div className="mt-8 flex justify-around w-full">
        <TokenListDropdown
          tokenList={tokenLists.tokens}
          token={swapToken}
          setToken={setSwapToken}
        ></TokenListDropdown>
        <div>
          <div
            className="text-sm text-text-1-dark leading-6 px-2 py-1 rounded-md border-2 bg-[#72079099] border-primary flex gap-2"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <input className="bg-transparent w-20 focus:outline-none" />
            <p className="hover:cursor-pointer">Max</p>
          </div>
          <div className="grid grid-cols-4 text-xs m-2 text-white">
            <span>25%</span>
            <span>50%</span>
            <span>75%</span>
          </div>
        </div>
      </div>
      <hr className="border-primary border my-5" />
      <p className="text-text-1-dark text-xl">For</p>
      <div className="my-8 flex justify-around">
        <TokenListDropdown
          tokenList={tokenLists.tokens}
          token={receiveToken}
          setToken={setReceiveToken}
        ></TokenListDropdown>
        <div>
          <div
            className="text-sm text-text-1-dark leading-6 px-2 py-1 rounded-md border-2 bg-[#72079099] border-primary flex gap-2 w-[136px]"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            0
          </div>
        </div>
      </div>
      <div className="w-[50%] mx-auto py-2 text-sm text-text-1-dark rounded-md border-2 bg-[#72079099] border-primary grid grid-cols-3 gap-2">
        <p className="col-span-1 text-center text-sm text-text-1-dark">Rate</p>
        <p className="col-span-2 text-sm text-text-1-dark">1 BNB = 650 USDT</p>
        <p className="col-span-1 text-center text-sm text-text-1-dark">Fee</p>
        <p className="col-span-2 text-sm text-text-1-dark">$0.019</p>
      </div>
      <div className="flex justify-around mt-20">
        <button className="text-sm shadow-[0_0_3px_0_primary] shadow-[#72079099] text-primary bg-white px-4 md:px-8 py-2 rounded-2xl hover:opacity-90 mr-6">
          Swap
        </button>
        <button className="text-sm shadow-[0_0_3px_0_primary] shadow-[#430f52] bg-[#72079099] text-white px-4 md:px-8 py-2 rounded-2xl hover:opacity-90">
          Confirm
        </button>
      </div>
    </div>
  );
}
export default Swap;

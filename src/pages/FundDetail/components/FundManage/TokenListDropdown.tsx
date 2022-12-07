import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import React, { Fragment } from 'react';

type Props = {
  tokenList: Array<Token>;
  selectedToken: Token;
  oppToken: Token;
  setToken: React.Dispatch<React.SetStateAction<Token>>;
};

function TokenListDropdown({
  tokenList,
  selectedToken,
  oppToken,
  setToken,
}: Props) {
  return (
    <Popover className="relative">
      <Popover.Button className={'outline-none w-full'}>
        <div
          className="text-sm p-2 rounded-full bg-white dark:bg-bg-4-dark flex items-center shadow-lg w-full"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <img
            src={selectedToken.logoURI}
            alt="Token Logo"
            className="rounded-full w-6 h-6 block mr-2"
          />
          <div className="pt-1">{selectedToken.symbol}</div>
          <ChevronDownIcon width={10} className="ml-4" />
        </div>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 z-10 mt-1 w-[200px] min-w-full px-1 text-xs">
          <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-bg-1 dark:bg-bg-1-dark p-2 flex flex-col gap-1">
            {tokenList
              .filter((token) => token !== selectedToken && token !== oppToken)
              .map((token) => (
                <Popover.Button key={token.symbol}>
                  <div
                    className=" cursor-pointer hover:bg-bg-2 dark:hover:bg-bg-2-dark px-4 py-2 2xl:px-6 2xl:py-3 rounded flex text-lg gap-3 items-center"
                    onClick={() => setToken(token)}
                    key={token.symbol}
                  >
                    <img src={token.logoURI} alt="token" className="w-6 h-6" />
                    {token.symbol}
                  </div>
                </Popover.Button>
              ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default TokenListDropdown;

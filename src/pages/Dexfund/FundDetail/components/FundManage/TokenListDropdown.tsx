import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import React, { Fragment } from 'react';

type Props = {
  tokenList: Array<Token>;
  token: Token;
  setToken: React.Dispatch<React.SetStateAction<Token>>;
};

function TokenListDropdown({ tokenList, token, setToken }: Props) {
  return (
    <Popover className="relative">
      <Popover.Button className={'outline-none'}>
        <div
          className="text-sm text-text-1-dark leading-6 px-2 py-1 rounded-md border-2 bg-[#72079099] border-primary flex gap-9"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <div className="flex gap-2">
            <img src={token.logoURI} alt="Token Logo" width={24} />
            {token.symbol}
          </div>
          <ChevronDownIcon width={10} />
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
        <Popover.Panel className="absolute right-0 z-10 mt-1 w-[120px] px-1 sm:px-0 text-xs">
          <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-bg-1 dark:bg-bg-1-dark p-2 flex flex-col gap-1">
            {tokenList.map((token) => (
              <div
                className=" cursor-pointer hover:bg-bg-2 dark:hover:bg-bg-2-dark px-2 py-1 rounded"
                onClick={() => setToken(token)}
                key={token.symbol}
              >
                {token.symbol}
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default TokenListDropdown;

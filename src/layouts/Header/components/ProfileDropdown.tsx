import { Popover, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/solid';
import { BSC, shortenAddress, useEthers } from '@usedapp/core';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../store';

const ProfileDropdown = () => {
  const { account, deactivate, activateBrowserWallet, chainId, switchNetwork } =
    useEthers();
  const myAccount = useSelector((state: RootState) => state.myAccount.value);

  const handleConnect = async () => {
    if (account && chainId === BSC.chainId) {
      deactivate();
    } else {
      activateBrowserWallet();
      await switchNetwork(BSC.chainId);
    }
  };

  return (
    <div>
      {account && chainId === BSC.chainId ? (
        <Popover className="relative h-[44px]">
          <Popover.Button>
            <div
              className="flex gap-3 items-center cursor-pointer"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <img
                src={
                  myAccount
                    ? myAccount.image ||
                      myAccount.twitterImage ||
                      '/images/default-user.png'
                    : '/images/default-user.png'
                }
                alt="avatar"
                className=" w-11 h-11 block overflow-hidden rounded-full"
              />
              <div className="text-[18px] font-[500] hidden md:block">
                {myAccount.title}
              </div>
              <ChevronDownIcon
                width={10}
                className="hover:opacity-70 cursor-pointer text-text-1 dark:text-text-1-dark hidden md:block"
                onClick={() => navigator.clipboard.writeText(myAccount.name)}
              />
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
            <Popover.Panel className="absolute right-[-10px] z-10 mt-4 w-[300px] sm:px-0">
              <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-bg-1 dark:bg-bg-1-dark p-4">
                {myAccount.name ? (
                  <div className="pt-2">
                    <div className="py-2 flex justify-between">
                      {myAccount.name}
                      <ClipboardDocumentIcon
                        color="gray"
                        width={22}
                        className="hover:opacity-70 cursor-pointer"
                        onClick={() =>
                          navigator.clipboard.writeText(myAccount.name)
                        }
                      />
                    </div>
                    <div className="py-2 flex justify-between">
                      {myAccount.email}
                      <ClipboardDocumentIcon
                        color="gray"
                        width={22}
                        className="hover:opacity-70 cursor-pointer"
                        onClick={() =>
                          navigator.clipboard.writeText(myAccount.email)
                        }
                      />
                    </div>
                    <div className="py-2 flex justify-between">
                      {shortenAddress(account)}
                      <ClipboardDocumentIcon
                        color="gray"
                        width={22}
                        className="hover:opacity-70 cursor-pointer"
                        onClick={() => navigator.clipboard.writeText(account)}
                      />
                    </div>
                    <Link
                      to={'/account'}
                      className=" block w-full mt-4 rounded-lg p-2 bg-secondary text-center text-white hover:opacity-90"
                    >
                      Edit Account
                    </Link>
                  </div>
                ) : (
                  <div className="pt-2">
                    <div className="py-2 flex justify-between">
                      {shortenAddress(account)}
                      <ClipboardDocumentIcon
                        color="gray"
                        width={22}
                        className="hover:opacity-70 cursor-pointer"
                        onClick={() => navigator.clipboard.writeText(account)}
                      />
                    </div>
                    <Link
                      to={'/account'}
                      className=" block w-full mt-4 rounded-lg p-2 bg-secondary text-center text-white hover:opacity-90"
                    >
                      {myAccount.id ? 'Update Account' : 'Create Account'}
                    </Link>
                  </div>
                )}
                <button
                  className=" w-full bg-red-500 text-white p-2 rounded-lg mt-2 text-center hover:opacity-90"
                  onClick={deactivate}
                >
                  Disconnect
                </button>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      ) : (
        <button
          className="font-bold bg-primary text-white px-4 md:px-8 py-2 rounded-lg hover:opacity-90"
          onClick={handleConnect}
        >
          {account && chainId === BSC.chainId
            ? shortenAddress(account)
            : 'CONNECT'}
        </button>
      )}
    </div>
  );
};

export default ProfileDropdown;

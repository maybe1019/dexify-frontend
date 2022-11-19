import { shortenAddress, useEthers } from '@usedapp/core';
import React, { Fragment, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import {
  ClipboardDocumentIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid';
import { ethers } from 'ethers';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import {
  getMyAccount,
  setMyAccountAsDevault,
} from '../store/reducers/myAccountSlice';
import ThemeModeToggle from '../components/ThemeModeToggle';

const links: Array<Record<string, string>> = [
  { path: '/', name: 'Dexfund' },
  { path: '/manage', name: 'Manage' },
  { path: '/portfolio', name: 'Portfolio' },
];

export const Header = (): JSX.Element => {
  const { account, library, activateBrowserWallet, deactivate } = useEthers();
  const myAccount = useSelector((state: RootState) => state.myAccount.value);

  const dispatch = useAppDispatch();

  const location = useLocation();

  useEffect(() => {
    if (account) {
      initAccount();
    } else {
      dispatch(setMyAccountAsDevault());
    }
  }, [account]); //eslint-disable-line

  const initAccount = async () => {
    try {
      dispatch(getMyAccount(library as ethers.providers.JsonRpcProvider));
    } catch (error) {
      throw error;
    }
  };

  const handleConnect = () => {
    if (account) {
      deactivate();
    } else {
      activateBrowserWallet();
    }
  };

  return (
    <header className="bg-bg-1 shadow-lg dark:bg-black">
      <div className="container mx-auto px-2 py-3 text flex items-center">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="logo" className="w-[48px] mr-2" />
          <span className=" text-[22px] font-bold text-primary">DEX</span>
          <span className=" text-[22px] font-bold text-black dark:text-white">
            IFY
          </span>
        </Link>

        <nav className="flex items-center gap-10 ml-24">
          {links.map((link) => (
            <div className="w-[80px]" key={link.name}>
              <Link
                to={link.path}
                className={
                  'nav-item' +
                  (link.path === location.pathname ? ' active' : '')
                }
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>

        <div className="ml-auto mr-4">
          <ThemeModeToggle />
        </div>

        {account ? (
          <div>
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
                      myAccount.image !== ''
                        ? myAccount.image
                        : '/images/default-user.png'
                    }
                    alt="avatar"
                    className=" w-11 h-11 block overflow-hidden rounded-full"
                  />
                  <div className="text-[18px] font-[500]">
                    {myAccount.title}
                  </div>
                  <ChevronDownIcon
                    width={10}
                    className="hover:opacity-70 cursor-pointer text-text-1 dark:text-text-1-dark"
                    onClick={() =>
                      navigator.clipboard.writeText(myAccount.name)
                    }
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
                <Popover.Panel className="absolute right-[-10px] z-10 mt-4 w-[300px] px-4 sm:px-0">
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
                            onClick={() =>
                              navigator.clipboard.writeText(account)
                            }
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
                            onClick={() =>
                              navigator.clipboard.writeText(account)
                            }
                          />
                        </div>
                        <Link
                          to={'/account'}
                          className=" block w-full mt-4 rounded-lg p-2 bg-secondary text-center text-white hover:opacity-90"
                        >
                          Create Account
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
          </div>
        ) : (
          <button
            className="font-bold bg-primary text-white px-8 py-2 rounded-lg hover:opacity-90"
            onClick={handleConnect}
          >
            {account ? shortenAddress(account) : 'CONNECT'}
          </button>
        )}
      </div>
    </header>
  );
};

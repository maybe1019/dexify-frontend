import { shortenAddress, useEthers } from "@usedapp/core";
import React, { Fragment, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import { ethers } from "ethers";
import { getUser } from "../api/user";
import { useSelector, useDispatch } from "react-redux";

import type { RootState } from "../store";
import { setMyAccount, setMyAccountAsDevault } from "../slices/myAccountSlice";

const links: Array<Record<string, string>> = [
  { path: "/", name: "Dexfund" },
  { path: "/manage", name: "Manage" },
  { path: "/profile", name: "Profile" },
];

export const Header = (): JSX.Element => {
  const { account, library, activateBrowserWallet, deactivate } = useEthers();
  const myAccount = useSelector((state: RootState) => state.myAccount);

  const dispatch = useDispatch();

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
      const provider: ethers.providers.JsonRpcProvider =
        library as ethers.providers.JsonRpcProvider;
      const signer = await provider.getSigner();
      const signature = await signer.signMessage(account as string);
      console.log(signature, account);
      let res = await getUser(signature, account as string);

      if (res.title) {
        dispatch(setMyAccount(res));
      } else {
        dispatch(setMyAccountAsDevault());
      }
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
    <header className=" bg-white shadow-lg">
      <div className="container mx-auto px-2 py-3 text flex items-center">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="logo" className="w-[48px] mr-2" />
          <span className=" text-[22px] font-bold text-primary">DEX</span>
          <span className=" text-[22px] font-bold">IFY</span>
        </Link>

        <nav className="flex items-center gap-10 ml-24">
          {links.map((link) => (
            <div className="w-[80px]" key={link.name}>
              <Link
                to={link.path}
                className={
                  "nav-item" +
                  (link.path === location.pathname ? " active" : "")
                }
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>

        {account ? (
          <div className="ml-auto">
            <Popover className="relative h-[44px]">
              <Popover.Button>
                <div
                  className="flex gap-3 items-center cursor-pointer"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <img src={myAccount.image} alt="avatar" className=" w-11" />
                  <div className="text-[18px] font-[500]">
                    {myAccount.title}
                  </div>
                  <img
                    src="/images/icon-angle-down.svg"
                    alt="angle down"
                    className=" ml-3 w-[10px]"
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
                  <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-white p-4">
                    {myAccount.name ? (
                      <div className="pt-2">
                        <div className="py-2">
                          {myAccount.name}
                          <ClipboardDocumentIcon />
                        </div>
                        <div className="py-2">
                          {myAccount.email}
                          <ClipboardDocumentIcon />
                        </div>
                        <div className="py-2">
                          {shortenAddress(account)}
                          <ClipboardDocumentIcon />
                        </div>
                        <Link
                          to={"/account"}
                          className="mt-4 rounded-lg p-2 bg-secondary text-center text-white"
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
                          to={"/account"}
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
            className="ml-auto font-bold bg-primary text-white px-8 py-2 rounded-lg hover:opacity-90"
            onClick={handleConnect}
          >
            {account ? shortenAddress(account) : "CONNECT"}
          </button>
        )}
      </div>
    </header>
  );
};

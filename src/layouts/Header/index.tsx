import { useEthers } from '@usedapp/core';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ethers } from 'ethers';
import { useAppDispatch } from '../../store';
import {
  getMyAccount,
  setMyAccountAsDevault,
} from '../../store/reducers/myAccountSlice';
import ThemeModeToggle from './components/ThemeModeToggle';
import ProfileDropdown from './components/ProfileDropdown';
import MenuDrawer from './components/MenuDrawer';
import { Logo } from './components/Logo';
import untypedLinks from './data/links.json';

const links: Array<Record<string, string>> = untypedLinks;

const Header = (): JSX.Element => {
  const { account, library } = useEthers();

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

  return (
    <header className="bg-bg-1 shadow-lg dark:bg-black">
      <div className="container mx-auto px-2 py-3 text flex items-center gap-4">
        <Logo />

        <nav className="items-center gap-10 ml-20 hidden md:flex">
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

        <div className="ml-auto">
          <ThemeModeToggle />
        </div>

        <div>
          <ProfileDropdown />
        </div>

        <div className="md:hidden">
          <MenuDrawer />
        </div>
      </div>
    </header>
  );
};

export default Header;

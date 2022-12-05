import { useEthers } from '@usedapp/core';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../store';
import {
  getMyAccount,
  setMyAccountAsDefault,
} from '../../store/reducers/myAccountSlice';
import ThemeModeToggle from './components/ThemeModeToggle';
import ProfileDropdown from './components/ProfileDropdown';
import MenuDrawer from './components/MenuDrawer';
import { Logo } from './components/Logo';
import untypedLinks from './data/links.json';

const links: Array<Record<string, string>> = untypedLinks;

const Header = (): JSX.Element => {
  const { account } = useEthers();

  const dispatch = useAppDispatch();

  const location = useLocation();

  useEffect(() => {
    if (account) {
      initAccount();
    } else {
      dispatch(setMyAccountAsDefault());
    }
  }, [account]); //eslint-disable-line

  const initAccount = async () => {
    try {
      dispatch(getMyAccount(account as string));
    } catch (error) {
      throw error;
    }
  };

  return (
    <header className="bg-bg-2 shadow-lg dark:bg-bg-2-dark sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 text flex items-center gap-4">
        <Logo />

        <nav className="items-center gap-6 ml-auto lg:ml-20 hidden md:flex">
          {links.map((link) => (
            <Link
              to={link.path}
              className={
                'nav-item' +
                (link.path === location.pathname ? ' active' : '') +
                (link.path === '/portfolio' && !account ? ' hidden' : '')
              }
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden ml-auto md:flex items-center justify-center opacity-70 hover:opacity-90 w-10 h-10 rounded-lg hover:bg-bg-1 hover:dark:bg-bg-1-dark cursor-pointer">
          <ThemeModeToggle />
        </div>

        <div className="ml-auto md:ml-0">
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

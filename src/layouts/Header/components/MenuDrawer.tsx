import { XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Logo } from './Logo';
import untypedLinks from '../data/links.json';
import { Link } from 'react-router-dom';

const links: Array<Record<string, string>> = untypedLinks as Array<
  Record<string, string>
>;

const MenuDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <div>
      <button
        className="w-6 h-5 cursor-pointer flex flex-col gap-1 items-end"
        onClick={openDrawer}
      >
        <div className="w-full h-1 rounded-full bg-primary"></div>
        <div className="w-3/4 h-1 rounded-full bg-black dark:bg-white"></div>
        <div className="w-1/2 h-1 rounded-full bg-black dark:bg-white"></div>
      </button>

      {isDrawerOpen && (
        <div
          className="w-screen h-screen fixed left-0 top-0 z-20"
          onClick={closeDrawer}
        ></div>
      )}

      <div
        className={`w-screen h-screen max-w-sm bg-bg-1 dark:bg-bg-1-dark fixed top-0 z-30 p-6 ${
          isDrawerOpen ? 'right-0' : 'right-[-100%]'
        }`}
      >
        <div className="flex items-center justify-between">
          <div onClick={closeDrawer}>
            <Logo />
          </div>
          <button className="p-2" onClick={closeDrawer}>
            <XMarkIcon width={18} />
          </button>
        </div>
        <nav className="mt-8 flex flex-col gap-3">
          {links.map((link) => (
            <div key={link.name} onClick={closeDrawer}>
              <Link
                to={link.path}
                className={
                  'nav-item w-full block px-4 py-2 rounded-lg' +
                  (link.path === location.pathname ? ' active' : '')
                }
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MenuDrawer;

import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src="/images/logo.png" alt="logo" className="w-[48px] mr-2" />
      <span className=" text-[22px] font-bold text-primary">DEX</span>
      <span className=" text-[22px] font-bold text-black dark:text-white">
        IFY
      </span>
    </Link>
  );
};

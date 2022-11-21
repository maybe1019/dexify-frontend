import React, { PropsWithChildren } from 'react';
import Header from './Header';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" min-h-screen flex flex-col bg-gradient-to-br from-[#f5f0ff] to-[#e5d7ff] dark:from-[#1c133e] dark:to-[#131416]">
      <Header />
      <main className="flex-grow">
        <div className="container px-4 mx-auto my-3 sm:my-16">{children}</div>
      </main>
    </div>
  );
};

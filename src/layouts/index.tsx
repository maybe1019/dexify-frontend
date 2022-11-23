import React, { PropsWithChildren } from 'react';
import Header from './Header';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" min-h-screen flex flex-col bg-bg-1 dark:bg-bg-1-dark">
      <Header />
      <main className="flex-grow">
        <div className="container px-4 mx-auto my-3 sm:my-16">{children}</div>
      </main>
    </div>
  );
};

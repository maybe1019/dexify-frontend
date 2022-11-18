import React, { PropsWithChildren } from 'react';
import { Header } from './Header';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className=" min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container px-2 mx-auto my-16">{children}</div>
      </main>
    </div>
  );
};

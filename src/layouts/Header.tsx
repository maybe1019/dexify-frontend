import React from "react";
import { Link, useLocation } from "react-router-dom";

const links: Array<Record<string, string>> = [
  { path: "/dexfund", name: "Dexfund" },
  { path: "/manage", name: "Manage" },
  { path: "/profile", name: "Profile" },
];

export const Header = (): JSX.Element => {
  const location = useLocation();

  return (
    <header className=" bg-white shadow-lg">
      <div className="container mx-auto px-2 py-[16px] flex items-center">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="logo" className="w-[48px] mr-2" />
          <span className=" text-[22px] font-bold text-primary">DEX</span>
          <span className=" text-[22px] font-bold">IFY</span>
        </Link>

        <nav className="flex items-center gap-10 ml-24">
          {links.map((link) => (
            <div className="w-[80px]">
              <Link
                to={link.path}
                className={
                  "nav-item" +
                  (link.path === location.pathname ? " active" : "")
                }
                key={link.name}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>

        <button className="ml-auto font-bold bg-primary text-white px-8 py-2 rounded-lg hover:opacity-90">
          CONNECT
        </button>
      </div>
    </header>
  );
};

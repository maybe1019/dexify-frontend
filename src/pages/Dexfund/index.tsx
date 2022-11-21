import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserDexfund from '../../components/UserDexfund';
import utils from '../../helpers/utils';

const Dexfund = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    utils.pageMeta.handelTitle(pathname);
  }, [pathname]);
  return (
    <div>
      <h1 className="text-[22px] font-[500] mb-5">Top Dexfunds</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <UserDexfund />
        <UserDexfund />
        <UserDexfund />
        <UserDexfund />
        <UserDexfund />
        <UserDexfund />
      </div>
    </div>
  );
};

export default Dexfund;

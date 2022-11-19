import React from 'react';
import UserDexfund from '../components/UserDexfund';

const Dexfund = () => {
  return (
    <div>
      <h1 className="text-[22px] font-[500] mb-5">Top Dexfunds</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
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

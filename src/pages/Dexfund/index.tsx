import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserDexfund from '../../components/UserDexfund';

const Dexfund = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-[22px] font-[500] mb-5">Top Dexfunds</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {Array(6)
          .fill(1)
          .map((item, i) => (
            <div
              key={i}
              onClick={() => {
                navigate(`/funds/${i}`);
              }}
            >
              <UserDexfund />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dexfund;

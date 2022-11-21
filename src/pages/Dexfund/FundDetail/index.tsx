import React from 'react';
import { useParams } from 'react-router-dom';
import AUMChart from './components/AUMChart';
import AssetsInfo from './components/AssetsInfo';
import FondInfo from './components/FondInfo';
import Tweets from './components/Tweets';
import './index.css';

const FundDetail = () => {
  const { fundAddress } = useParams();
  console.log(fundAddress);
  return (
    <div className="grid grid-cols-8 gap-4">
      <div className="col-span-8 lg:col-span-5 flex flex-col gap-4">
        <AUMChart />
        <AssetsInfo />
        <div className="m-auto">
          <button className="text-sm shadow-[0_0_3px_0_primary] shadow-[#C96AE488] text-primary bg-white px-4 md:px-8 py-3 rounded-lg hover:opacity-90 mr-6">
            Invest
          </button>
          <button className="text-sm shadow-[0_0_3px_0_primary] shadow-[#C96AE488] bg-primary text-white px-4 md:px-8 py-3 rounded-lg hover:opacity-90">
            Withdraw
          </button>
        </div>
      </div>
      <div className="col-span-8 lg:col-span-3 hidden lg:flex flex-col gap-4">
        <Tweets />
        <FondInfo />
      </div>
    </div>
  );
};

export default FundDetail;

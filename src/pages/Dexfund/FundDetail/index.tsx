import React, { useState, createRef } from 'react';
import { useParams } from 'react-router-dom';
import AUMChart from './components/AUMChart';
import AssetsInfo from './components/AssetsInfo';
import FundInfo from './components/FundInfo';
import Tweets from './components/Tweets';
import { Tab } from '@headlessui/react';
import './index.css';
import Bio from './components/FundInfo/Bio';
import Fees from './components/FundInfo/Fees';
import TotalHistory from './components/FundInfo/TotalHistory';
import { useOutsideHandler } from '../../../helpers/hooks/useOutsideHandler';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const tabList = ['Bio', 'Fees', 'Total History'];

const FundDetail = () => {
  const [step, setStep] = useState('');
  const { fundAddress } = useParams();
  console.log(fundAddress);
  const targetDom = createRef<HTMLDivElement>();

  const handleStep = (e?: any) => {
    if (e) {
      setStep(e.target.innerText);
      return;
    }
    setStep('');
  };
  useOutsideHandler(targetDom, handleStep);

  return (
    <div className="lg:grid grid-cols-8 gap-4">
      <Tab.Group>
        <Tab.List className="flex lg:hidden card space-x-1 bg-primary dark:bg-bg-2-dark p-2 mb-4">
          <Tab
            key={'Tweets'}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-5 text-sm font-medium leading-5',
                ' focus:outline-none focus:text-black',
                selected
                  ? 'bg-primary shadow text-black'
                  : 'bg-[#F7F7F7] dark:bg-[#2e3e58] text-[#636677] hover:bg-white/[0.12] hover:text-black dark:hover:text-white',
              )
            }
            onClick={(e: any) => handleStep(e)}
          >
            Tweets
          </Tab>
          {tabList.map((title) => (
            <Tab
              key={title}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-5 text-sm font-medium leading-5',
                  ' focus:outline-none focus:text-black',
                  selected
                    ? 'bg-[#F9E1FD] shadow text-black'
                    : 'bg-[#F7F7F7] dark:bg-[#2e3e58] text-[#636677] hover:bg-white/[0.12] hover:text-black dark:hover:text-white',
                )
              }
              onClick={(e: any) => handleStep(e)}
            >
              {title}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>

      <div className="lg:col-span-5 flex flex-col gap-4 relative">
        <div ref={targetDom}>
          {step === 'Tweets' && (
            <div className="absolute lg:hidden w-full bg-white dark:bg-bg-2-dark z-10">
              <Tweets />
            </div>
          )}
          {step === tabList[0] && (
            <div className="absolute lg:hidden w-full card z-10">
              <Bio />
            </div>
          )}
          {step === tabList[1] && (
            <div className="absolute lg:hidden w-full card z-10">
              <Fees />
            </div>
          )}
          {step === tabList[2] && (
            <div className="absolute lg:hidden w-full card z-10">
              <TotalHistory />
            </div>
          )}
        </div>
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

      <div className="lg:col-span-3 hidden lg:flex flex-col gap-4 mt-4">
        <Tweets />
        <FundInfo />
      </div>
    </div>
  );
};

export default FundDetail;

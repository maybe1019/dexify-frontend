import React, { useState, createRef } from 'react';
import { useParams } from 'react-router-dom';
import FundInfo from './components/FundInfo';
import { Disclosure, Tab } from '@headlessui/react';
import './index.css';
import Bio from './components/FundInfo/Bio';
import Fees from './components/FundInfo/Fees';
import TotalHistory from './components/FundInfo/TotalHistory';
import { useOutsideHandler } from '../../../helpers/hooks/useOutsideHandler';
import Swap from './components/FundManage/Swap';
import PriceChart from './components/FundManage/PriceChart';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
const AssetsInfo = React.lazy(
  () => import('./components/AssetsInfo/AssetsInfo'),
);
const Tweets = React.lazy(() => import('./components/Tweets/Tweets'));
const AUMChart = React.lazy(() => import('./components/AUMChart/AUMChart'));

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const fundInfoTabList = ['Bio', 'Fees', 'Total History'];

const FundDetail = () => {
  const [fundInfoStep, setFundInfoStep] = useState('');
  const [manageStep, setManageStep] = useState(false);
  const { fundAddress } = useParams();
  console.log(fundAddress);
  const targetDom = createRef<HTMLDivElement>();

  const handleStep = (e?: any) => {
    if (e) {
      setFundInfoStep(e.target.innerText);
      return;
    }
    setFundInfoStep('');
  };
  useOutsideHandler(targetDom, handleStep);

  return (
    <div className="lg:grid grid-cols-8 gap-4 relative pt-[100px] sm:pt-[60px] lg:top-[-70px]">
      {/* ---------- Mobile only ------------ */}
      <div className="w-full absolute z-20 lg:hidden top-0 sm:top-[-50px]">
        <div className="">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full flex bg-[#720790] shadow-[0_0_12px_0_primary] shadow-[#72079088] rounded-2xl dark:bg-[#430f52] p-7">
                  <div className="flex m-auto items-center gap-3 text-text-1-dark">
                    <span>Swap</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 text-purple-500`}
                    />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="w-full pt-4 pb-2 text-sm text-gray-500">
                  <div className="grid gap-4 w-full">
                    <Swap />
                    <PriceChart />
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
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
          {fundInfoTabList.map((title) => (
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
          {fundInfoStep === 'Tweets' && (
            <div className="absolute lg:hidden w-full bg-white dark:bg-bg-2-dark z-10">
              <Tweets />
            </div>
          )}
          {fundInfoStep === fundInfoTabList[0] && (
            <div className="absolute lg:hidden w-full card z-10">
              <Bio />
            </div>
          )}
          {fundInfoStep === fundInfoTabList[1] && (
            <div className="absolute lg:hidden w-full card z-10">
              <Fees />
            </div>
          )}
          {fundInfoStep === fundInfoTabList[2] && (
            <div className="absolute lg:hidden w-full card z-10">
              <TotalHistory />
            </div>
          )}
        </div>
        {/* ---------- Mobile only ------------ */}

        <AUMChart />
        <AssetsInfo />
        <div className="mx-auto">
          <button className="text-sm shadow-[0_0_3px_0_primary] shadow-[#C96AE488] text-primary bg-white px-4 md:px-8 py-3 rounded-lg hover:opacity-90 mr-6">
            Invest
          </button>
          <button className="text-sm shadow-[0_0_3px_0_primary] shadow-[#C96AE488] bg-primary text-white px-4 md:px-8 py-3 rounded-lg hover:opacity-90">
            Withdraw
          </button>
        </div>
      </div>

      <div className="lg:col-span-3 hidden lg:flex flex-col gap-4 mt-4">
        <Tab.Group>
          <Tab.List className="hidden lg:flex card space-x-1 bg-primary dark:bg-bg-2-dark p-2 mb-4">
            <Tab
              key={'Tweets'}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-5 text-lg font-medium leading-5',
                  ' focus:outline-none focus:text-black',
                  selected
                    ? 'bg-primary shadow text-black'
                    : 'bg-[#F7F7F7] dark:bg-[#2e3e58] text-[#636677] hover:bg-white/[0.12] hover:text-black dark:hover:text-white',
                )
              }
              onClick={() => setManageStep(false)}
            >
              Fund Info
            </Tab>
            <Tab
              key={'Tweets'}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-5 text-lg font-medium leading-5',
                  ' focus:outline-none focus:text-black',
                  selected
                    ? 'bg-primary shadow text-black'
                    : 'bg-[#F7F7F7] dark:bg-[#2e3e58] text-[#636677] hover:bg-white/[0.12] hover:text-black dark:hover:text-white',
                )
              }
              onClick={() => setManageStep(true)}
            >
              Manage
            </Tab>
          </Tab.List>
        </Tab.Group>
        {manageStep ? (
          <>
            <Swap />
            <PriceChart />
          </>
        ) : (
          <>
            <Tweets />
            <FundInfo />
          </>
        )}
      </div>
    </div>
  );
};

export default FundDetail;

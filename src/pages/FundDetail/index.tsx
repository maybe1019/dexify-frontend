import React, { useState, createRef } from 'react';
import FundInfo from './components/FundInfo';
import { Disclosure, Tab } from '@headlessui/react';
import './index.css';
import Bio from './components/FundInfo/Bio';
import Fees from './components/FundInfo/Fees';
import TotalHistory from './components/FundInfo/TotalHistory';
import Swap from './components/FundManage/Swap';
import PriceChart from './components/FundManage/PriceChart';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import AssetsInfo from './components/AssetsInfo';
import Tweets from './components/Tweets';
import AUMChart from './components/AUMChart';
import { useOutsideHandler } from '../../hooks/useOutsideHandler';
import { useInvest } from '../../hooks/useInvest';
import { useEthers } from '@usedapp/core';
import InvestModal from './components/InvestModal';
import utils from '../../helpers/utils';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getTokenInfo } from '../../helpers/utils/utils';
import WithdrawMOdal from './components/WithdrawModal';
import { setPageLoading } from '../../store/reducers/pageLoadingSlice';
import { useWithdraw } from '../../hooks/useWithdraw';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const fundInfoTabList = ['Bio', 'Fees', 'History'];

const FundDetail = () => {
  const { account } = useEthers();
  const { fundAddress } = useParams();
  const [fundInfoStep, setFundInfoStep] = useState('');
  const [manageStep, setManageStep] = useState(false);
  const targetDom = createRef<HTMLDivElement>();
  const [isOpenActionModal, setIsOpenActionModal] = useState<number>(0); // closed: 0, invest:1, withdraw:2

  const allFunds = useSelector((state: RootState) => state.allFunds.value);

  // eslint-disable-next-line
  const [fund, setFund] = useState<FundData>(
    allFunds.find((value) => value.id === fundAddress) as FundData,
  );
  const denominationAsset = fund && getTokenInfo(fund?.denominationAsset);

  const handleStep = (e?: any) => {
    if (e) {
      setFundInfoStep(e.target.innerText);
      return;
    }
    setFundInfoStep('');
  };
  useOutsideHandler(targetDom, handleStep);

  const {
    investFundDenomination,
    loading: investLoading,
    disabled: investDisabled,
  } = useInvest(fundAddress as string);

  const {
    redeemSharesDetailed,
    loading: withdrawLoading,
    disabled: withdrawDisabled,
  } = useWithdraw(fundAddress as string);

  // Page loading
  const dispatch = useDispatch();
  dispatch(setPageLoading(investLoading || withdrawLoading));

  const openActionModal = async (step: number) => {
    if (!account) {
      utils.notification.warning('Error', 'Please connect wallet first');
      return;
    }
    if (investDisabled || withdrawDisabled) {
      utils.notification.warning(
        'Error',
        'Please switch the network to Binance Smart Chain',
      );
      return;
    }
    setIsOpenActionModal(step);
  };

  const onInvest = async (amount: number) => {
    if (amount <= 0) {
      utils.notification.warning('Error', 'Amount should be greater than 0');
      return;
    }
    await investFundDenomination(amount);
    setIsOpenActionModal(0);
  };

  const onWithdraw = async (amount: number) => {
    if (amount <= 0) {
      utils.notification.warning('Error', 'Amount should be greater than 0');
      return;
    }
    await redeemSharesDetailed(amount);
    setIsOpenActionModal(0);
  };

  return (
    <div className="lg:grid grid-cols-8 gap-4 relative pt-[100px] sm:pt-[60px] lg:top-[-70px]">
      {denominationAsset && (
        <InvestModal
          isOpen={isOpenActionModal === 1}
          onCancel={() => setIsOpenActionModal(0)}
          onConfirm={(amount: number) => onInvest(amount)}
          token={denominationAsset}
        />
      )}
      {fundAddress && (
        <WithdrawMOdal
          isOpen={isOpenActionModal === 2}
          onCancel={() => setIsOpenActionModal(0)}
          onConfirm={(amount: number) => onWithdraw(amount)}
          fundAddress={fundAddress}
        />
      )}
      {/* ---------- Mobile only ------------ */}
      <div className="w-full absolute z-20 lg:hidden top-0 sm:top-[-50px]">
        <div className="">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="w-full flex bg-secondary rounded-2xl p-5">
                  <div className="flex m-auto items-center gap-3 text-text-1-dark">
                    <span>Swap</span>
                    <ChevronUpIcon
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5`}
                    />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="w-full pt-4 pb-2 text-sm text-gray-500">
                  <div className="grid gap-4 w-full">
                    <Swap fundAddress={fundAddress as string} />
                    <PriceChart />
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
      <Tab.Group>
        <Tab.List className="flex lg:hidden card bg-primary dark:bg-bg-2-dark p-2 mb-4">
          <Tab
            key={'Tweets'}
            className={({ selected }) =>
              classNames(
                ' w-1/4 rounded-lg py-5 text-sm leading-5 font-bold',
                ' focus:outline-none mr-2',
                ' shadow-[2px_2px_4px_1px_rgba(100,100,100,0.5)] dark:shadow-[2px_2px_4px_1px_rgba(20,20,20,1)]',
                selected
                  ? 'bg-primary text-white'
                  : 'bg-[white] dark:bg-[#2e3e58]',
              )
            }
            onClick={(e: any) => handleStep(e)}
          >
            Tweets
          </Tab>
          <div className="flex grow">
            {fundInfoTabList.map((title) => (
              <Tab
                key={title}
                className={({ selected }) =>
                  classNames(
                    'w-full py-5 text-sm font-medium leading-5 grow border-none outline-none',
                    'first:rounded-tl-lg first:rounded-bl-lg last:rounded-tr-lg last:rounded-br-lg',
                    selected
                      ? 'bg-primary text-white'
                      : 'bg-transparent text-[#636677] hover:bg-white/[0.12] hover:text-black dark:hover:text-white  bg-bg-3 dark:bg-bg-3-dark',
                  )
                }
                onClick={(e: any) => handleStep(e)}
              >
                {title}
              </Tab>
            ))}
          </div>
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
              <Fees fund={fund} />
            </div>
          )}
          {fundInfoStep === fundInfoTabList[2] && (
            <div className="absolute lg:hidden w-full card z-10">
              <TotalHistory fund={fund} />
            </div>
          )}
        </div>
        {/* ---------- Mobile only ------------ */}

        <AUMChart fund={fund as FundData} />
        <AssetsInfo fund={fund as FundData} />
        <div className="mx-auto">
          <button
            onClick={() => openActionModal(1)}
            className="text-sm shadow-[0_0_3px_0_primary] shadow-[#C96AE488] text-primary bg-white px-4 md:px-8 py-3 rounded-lg hover:opacity-90 mr-6"
          >
            Invest
          </button>
          <button
            onClick={() => openActionModal(2)}
            className="text-sm shadow-[0_0_3px_0_primary] shadow-[#C96AE488] bg-primary text-white px-4 md:px-8 py-3 rounded-lg hover:opacity-90"
          >
            Withdraw
          </button>
        </div>
      </div>

      <div className="lg:col-span-3 hidden lg:flex flex-col gap-4 mt-4">
        <Tab.Group>
          <Tab.List className="hidden lg:flex bg-primary bg-transparent w-[calc(100%-24px)] mx-auto">
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full py-4 text-lg font-mediu rounded-tl-lg rounded-tr-lg',
                  ' focus:outline-none',
                  'border-b-2 border-b-gray-500/50',
                  selected
                    ? 'text-primary border-b-primary'
                    : 'text-text-3 dark:text-text-3-dark hover:bg-white/[0.12] hover:text-black dark:hover:text-white',
                )
              }
              onClick={() => setManageStep(false)}
            >
              Fund Info
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full py-4 text-lg font-medium rounded-tl-lg rounded-tr-lg',
                  ' focus:outline-none',
                  'border-b-2 border-b-gray-500/50',
                  selected
                    ? 'text-primary border-b-primary'
                    : 'text-text-3 dark:text-text-3-dark hover:bg-white/[0.12] hover:text-black dark:hover:text-white',
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
            <Swap fundAddress={fundAddress as string} />
            <PriceChart />
          </>
        ) : (
          <>
            <Tweets />
            <FundInfo fund={fund} />
          </>
        )}
      </div>
    </div>
  );
};

export default FundDetail;

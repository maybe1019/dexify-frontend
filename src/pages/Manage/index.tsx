import { useEthers } from '@usedapp/core';
import { isAddress } from 'ethers/lib/utils';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { twitterLogin } from '../../api/twitter';
import utils from '../../helpers/utils';
import { prepareFundData } from '../../helpers/utils/createFund';
import { useCreateNewFund } from '../../hooks/useCreateNewFund';
import { RootState, useAppSelector } from '../../store';
import { setPageLoading } from '../../store/reducers/pageLoadingSlice';
import { ReactComponent as TwitterIcon } from '../../assets/images/svg/twitter-icon.svg';

import allowedTokenList from './data/tokenList.json';
import PageMeta from '../../layouts/PageMeta';
import { PageName } from '../../helpers/enums';
import { Transition } from '@headlessui/react';

const Manage = () => {
  const { account } = useEthers();
  const myAccountValue = useAppSelector(
    (state: RootState) => state.myAccount.value,
  );
  const [selectedTokenAddress, setSelectedTokenAddress] = useState<string>();
  const [formData, setFormData] = useState<any>({
    walletAddress: account,
  });

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    const newFormData: any = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  };

  const { createNewFund, loading, disabled } = useCreateNewFund();
  // Page loading
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageLoading(loading));
  }, [loading]);

  const onCreateNewFund = async () => {
    console.log(formData);
    if (!account) {
      utils.notification.warning('Error', 'Please connect wallet first');
      return;
    }
    if (disabled) {
      utils.notification.warning(
        'Error',
        'Please switch the network to Binance Smart Chain',
      );
      return;
    }
    if (Object.keys(formData).length !== 6) {
      utils.notification.warning('Please fill in all fields', '');
      return;
    }
    if (!selectedTokenAddress) {
      utils.notification.warning('Error', 'Please select starting asset.');
      return;
    }
    if (!isAddress(formData?.walletAddress)) {
      utils.notification.danger('Invalid wallet address', '');
      return;
    }
    const { feeArgsData, policyArgsData } = prepareFundData(
      formData?.entryFee,
      formData?.performanceFee,
      formData?.minInvestment,
    );
    await createNewFund(
      formData?.walletAddress,
      formData?.fundName,
      selectedTokenAddress,
      (formData?.lockTime as number) * 3600,
      feeArgsData,
      policyArgsData,
      account,
    );
  };

  const onTwitterLogin = () => {
    localStorage.setItem('twitter_login_location', 'manage');
    twitterLogin();
  };

  return (
    <>
      <PageMeta pageName={PageName.MANAGE} />
      <div className="md:bg-white dark:md:bg-bg-2-dark rounded-3xl max-w-4xl px-4 lg:px-24 py-0 md:py-12 mx-auto my-20">
        <h1 className=" text-3xl lg:text-4xl my-8 text-center font-bold">
          Create a Dexfund
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="manage-input-container lg:col-span-2">
            <input
              type="text"
              name="walletAddress"
              value={formData.walletAddress ?? account}
              placeholder="Manager Wallet Address"
              onChange={onChangeValue}
            />
            <div className="information-tag">
              <div className="i-icon">i</div>
              <div className="description">
                This is manager's wallet address.
              </div>
            </div>
          </div>
          <div className="manage-input-container lg:col-span-2">
            <input
              type="text"
              name="fundName"
              placeholder="Dexfund Name"
              onChange={onChangeValue}
            />
            <div className="information-tag">
              <div className="i-icon">i</div>
              <div className="description">
                This is the name of your dexfund.
              </div>
            </div>
          </div>
          <div className="manage-input-container">
            <input
              type="number"
              name="performanceFee"
              placeholder="Performance Fee (%)"
              onChange={onChangeValue}
            />
            <div className="information-tag">
              <div className="i-icon">i</div>
              <div className="description">Performance Fee. (%)</div>
            </div>
          </div>
          <div className="manage-input-container">
            <input
              type="number"
              name="entryFee"
              placeholder="Entry Fee (%)"
              onChange={onChangeValue}
            />
            <div className="information-tag">
              <div className="i-icon">i</div>
              <div className="description">Entry Fee. (%)</div>
            </div>
          </div>
          <div className="manage-input-container">
            <input
              type="number"
              name="minInvestment"
              placeholder="Minimum Investment"
              onChange={onChangeValue}
            />
            <div className="information-tag">
              <div className="i-icon">i</div>
              <div className="description">Minimum Investment.</div>
            </div>
          </div>
          <div className="manage-input-container">
            <input
              type="number"
              name="lockTime"
              placeholder="Lock Time (H)"
              onChange={onChangeValue}
            />

            <div className="information-tag">
              <div className="i-icon">i</div>
              <div className="description">Lock Time. (H)</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 my-8">
          <div className=" text-sm min-w-[160px]">Select Starting Assets</div>
          <div className="grid grid-cols-4 sm:grid-cols-7 grow gap-2">
            {allowedTokenList.map((token) => (
              <div
                key={token.symbol}
                className="rounded py-1 text-center text-sm cursor-pointer hover:shadow bg-[#8882] font-semibold"
                style={
                  selectedTokenAddress === token.address
                    ? { backgroundColor: '#0074D966' }
                    : { color: 'gray' }
                }
                onClick={() => setSelectedTokenAddress(token.address)}
              >
                {token.symbol}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center my-4">
          <button
            className="block text-primary font-bold text-xl"
            onClick={
              account
                ? onCreateNewFund
                : () =>
                    utils.notification.info(
                      'Please connect your wallet first',
                      '',
                    )
            }
          >
            Create Fund
          </button>
          {myAccountValue.twitterScreenName ? (
            <>
              <p className="text-[#8888]">Connected with:</p>
              <div className="relative flex items-center gap-4">
                <img
                  src={myAccountValue.twitterImage}
                  alt="user"
                  className="w-10 h-10 rounded-full"
                />
                <TwitterIcon
                  width={16}
                  height={16}
                  className="bg-bg-2 dark:bg-bg-2-dark rounded-full absolute left-7 top-0 border-2 border-bg-2 dark:border-bg-2-dark"
                />
                <div className="font-bold text-lg text-[#03a9f4]">
                  @{myAccountValue.twitterScreenName}
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="text-[#8888]">Connect with:</p>
              <button
                className="text-[#03A9F4] flex gap-2 shadow-lg px-4 py-2 rounded-lg"
                onClick={
                  account
                    ? onTwitterLogin
                    : () =>
                        utils.notification.info(
                          'Please connect your wallet first',
                          '',
                        )
                }
              >
                Twitter <img src="/images/icon-twitter.svg" alt="twitter" />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Manage;

import { useEthers } from '@usedapp/core';
import { isAddress } from 'ethers/lib/utils';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import utils from '../../helpers/utils';
import { prepareFundData } from '../../helpers/utils/createFund';
import { useCreateNewFund } from '../../hooks/useCreateNewFund';
import { setPageLoading } from '../../store/reducers/pageLoadingSlice';

import allowedTokenList from './data/tokenList.json';

const Manage = () => {
  const { account, activate } = useEthers();
  const [selectedTokenAddress, setSelectedTokenAddress] = useState<string>();
  const [formData, setFormData] = useState<any>({
    walletAddress: account,
  });

  const onChangeValue = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    const name = e.target.name;
    const newFormData: any = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  };

  const { createNewFund, loading, disabled } = useCreateNewFund();
  // Page loading
  const dispatch = useDispatch();
  dispatch(setPageLoading(loading));

  const onCreateNewFund = async () => {
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
    if (Object.keys(formData).length !== 7) {
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

  return (
    <div className="md:bg-white dark:md:bg-bg-2-dark rounded-3xl max-w-4xl px-4 lg:px-24 py-0 md:py-12 mx-auto my-20">
      <h1 className=" text-3xl lg:text-4xl my-8 text-center font-bold">
        Create a Dexfund
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <input
          type="text"
          name="walletAddress"
          value={formData.walletAddress}
          className="bg-[#8881] rounded-lg p-4 sm:p-6 text-sm sm:text-lg outline-none lg:col-span-2 focus:shadow"
          placeholder="Manager Wallet Address"
          onChange={onChangeValue}
        />

        <input
          type="text"
          name="fundName"
          className="bg-[#8881] rounded-lg p-4 sm:p-6 text-sm sm:text-lg outline-none lg:col-span-2 focus:shadow"
          placeholder="Dexfund Name"
          onChange={onChangeValue}
        />
        <input
          type="number"
          name="performanceFee"
          className="bg-[#8881] rounded-lg p-4 sm:p-6 text-sm sm:text-lg outline-none focus:shadow"
          placeholder="Performance Fee (%)"
          onChange={onChangeValue}
        />
        <input
          type="number"
          name="entryFee"
          className="bg-[#8881] rounded-lg p-4 sm:p-6 text-sm sm:text-lg outline-none focus:shadow"
          placeholder="Entry Fee (%)"
          onChange={onChangeValue}
        />
        <input
          type="number"
          name="minInvestment"
          className="bg-[#8881] rounded-lg p-4 sm:p-6 text-sm sm:text-lg outline-none focus:shadow"
          placeholder="Minimum Investment"
          onChange={onChangeValue}
        />
        <input
          type="number"
          name="lockTime"
          className="bg-[#8881] rounded-lg p-4 sm:p-6 text-sm sm:text-lg outline-none focus:shadow"
          placeholder="Lock Time (H)"
          onChange={onChangeValue}
        />
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
        <p className="text-[#8888]">Connect with:</p>
        <a
          href="https://twitter.com"
          target="_blank"
          className="text-[#03A9F4] flex gap-2 shadow-lg px-4 py-2 rounded-lg"
        >
          Twitter <img src="/images/icon-twitter.svg" alt="twitter" />
        </a>
      </div>
    </div>
  );
};

export default Manage;

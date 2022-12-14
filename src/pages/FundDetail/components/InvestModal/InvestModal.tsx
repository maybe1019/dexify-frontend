import { Dialog, Transition } from '@headlessui/react';
import { useEthers, useTokenBalance } from '@usedapp/core';
import { Fragment, useEffect, useState } from 'react';
import { formatEther } from '@ethersproject/units';
import api from '../../../../api';
import { BigNumber } from 'ethers';

type Props = {
  isOpen: boolean;
  onCancel(): void;
  onConfirm(amount: number | BigNumber): any;
  token: Token;
};

export default function InvestModal({
  isOpen,
  onCancel,
  onConfirm,
  token,
}: Props) {
  const [investAmount, setInvestAmount] = useState(0);
  const [isMax, setIsMax] = useState(false);
  const { account } = useEthers();
  const denominationAssetBalance = useTokenBalance(token.address, account);
  const invest = () => {
    onConfirm(
      isMax && denominationAssetBalance
        ? denominationAssetBalance
        : investAmount,
    );
  };
  const [bnbPrice, setBNBPrice] = useState<number>(1);
  const getBNBPrice = async () => {
    const bnbPrice = await api.token.getTokenPrice('binancecoin');
    setBNBPrice(bnbPrice);
  };
  useEffect(() => {
    if (token.symbol === 'WBNB') getBNBPrice();
  }, [token]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="card shadow-xl rounded-2xl py-6 px-4 lg:px-6 relative z-10"
        onClose={() => {
          return;
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all mt-8 bg-bg-1 dark:bg-bg-1-dark">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Invest for shares
                </Dialog.Title>
                <div className="mt-8 w-full bg-[#8881] p-6 rounded-2xl shadow-lg">
                  <div
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    <div className="flex gap-2 mx-2 items-center">
                      <input
                        type="number"
                        value={investAmount}
                        min={0}
                        onChange={(e: any) => {
                          setIsMax(false);
                          if (e.target.value === '') {
                            setInvestAmount(0);
                            return;
                          }
                          if (investAmount === 0) {
                            setInvestAmount(e.target.value.replace('0', ''));
                            return;
                          }
                          setInvestAmount(e.target.value);
                        }}
                        className="bg-transparent w-20 outline-none grow py-2 text-xl lg:text-2xl pl-2 text-text-1 dark:text-text-1-dark"
                        placeholder="Input Amount"
                      />
                      <p className="dark:text-white">{token.symbol}</p>
                    </div>
                  </div>
                  {denominationAssetBalance && (
                    <div className="flex items-center justify-between mt-4 mb-2 mx-2">
                      <div className=" text-text-3 dark:text-text-3-dark text-sm">
                        = ${(bnbPrice * investAmount).toFixed(2)}
                      </div>
                      <div className=" text-text-3 dark:text-text-3-dark text-sm ml-auto">
                        Balance:{' '}
                        {parseFloat(
                          formatEther(denominationAssetBalance),
                        ).toFixed(2)}{' '}
                        {token.symbol}
                      </div>
                    </div>
                  )}
                  <div className="grid grid-cols-4 text-xs gap-2">
                    {['25%', '50%', '75%', 'MAX'].map((value, i) => (
                      <button
                        key={i + 1}
                        index-data={i + 1}
                        onClick={(e: any) => {
                          if (denominationAssetBalance) {
                            const val =
                              (e.target.attributes[0].value *
                                parseFloat(
                                  formatEther(denominationAssetBalance),
                                )) /
                              4;
                            setInvestAmount(val);
                            if (e.target.attributes[0].value === '4') {
                              setIsMax(true);
                            } else setIsMax(false);
                          }
                        }}
                        className=" bg-white dark:bg-bg-4-dark w-14 h-6 rounded-full mx-auto shadow-lg text-text-3 dark:text-text-3-dark hover:text-black hover:dark:text-white"
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4 mx-4 flex justify-between">
                  <button
                    type="button"
                    className="text-sm shadow-[0_0_3px_0_primary] shadow-[#C96AE488] text-primary bg-white px-3 md:px-6 py-2 rounded-lg hover:opacity-90 mr-6"
                    onClick={onCancel}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="text-sm shadow-[0_0_3px_0_primary] shadow-[#C96AE488] bg-primary text-white px-3 md:px-6 py-2 rounded-lg hover:opacity-90"
                    onClick={invest}
                  >
                    Confirm
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

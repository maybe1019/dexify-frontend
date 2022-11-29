import { Dialog, Transition } from '@headlessui/react';
import { useEtherBalance, useEthers } from '@usedapp/core';
import { Fragment, useEffect, useState } from 'react';
import { InvestableTokenType } from '../../../../../helpers/enums';
import { formatEther } from '@ethersproject/units';
import api from '../../../../../api';

type Props = {
  isOpen: boolean;
  onCancel(): void;
  onConfirm(amount: number): any;
  tokenType: InvestableTokenType;
};

export default function InvestModal({
  isOpen,
  onCancel,
  onConfirm,
  tokenType,
}: Props) {
  const [investAmount, setInvestAmount] = useState(0);
  const { account } = useEthers();
  const bnbBalance = useEtherBalance(account);
  const invest = () => {
    onConfirm(investAmount);
  };
  const [bnbPrice, setBNBPrice] = useState<number>(0);
  const getBNBPrice = async () => {
    const bnbPrice = await api.token.getTokenPrice('binancecoin');
    setBNBPrice(bnbPrice);
  };
  useEffect(() => {
    getBNBPrice();
  }, []);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="card shadow-xl rounded-2xl py-6 px-4 lg:px-6 relative z-10"
        onClose={onCancel}
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
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Invest for this fund
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
                      <p>{tokenType}</p>
                    </div>
                  </div>
                  {bnbBalance && (
                    <div className="flex items-center justify-between mt-4 mb-2 mx-2">
                      <div className=" text-text-3 dark:text-text-3-dark text-sm">
                        = ${(bnbPrice * investAmount).toFixed(2)}
                      </div>
                      <div className=" text-text-3 dark:text-text-3-dark text-sm ml-auto">
                        Balance:{' '}
                        {parseFloat(formatEther(bnbBalance)).toFixed(2)}{' '}
                        {tokenType}
                      </div>
                    </div>
                  )}
                  <div className="grid grid-cols-4 text-xs gap-2">
                    {['25%', '50%', '75%', 'MAX'].map((value, i) => (
                      <button
                        key={i + 1}
                        index-data={i + 1}
                        onClick={(e: any) => {
                          if (bnbBalance) {
                            const val =
                              (e.target.attributes[0].value *
                                parseFloat(formatEther(bnbBalance))) /
                              4;
                            setInvestAmount(val);
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
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onCancel}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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

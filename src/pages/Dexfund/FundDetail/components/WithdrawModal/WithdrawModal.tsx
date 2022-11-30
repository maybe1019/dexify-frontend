import { Dialog, Transition } from '@headlessui/react';
import { useEthers, useTokenBalance } from '@usedapp/core';
import { Fragment, useEffect, useState } from 'react';
import { formatEther } from '@ethersproject/units';
import api from '../../../../../api';

type Props = {
  isOpen: boolean;
  onCancel(): void;
  onConfirm(amount: number): any;
  token: Token;
};

export default function WithdrawModal({
  isOpen,
  onCancel,
  onConfirm,
  token,
}: Props) {
  const [investAmount, setInvestAmount] = useState(0);
  const { account } = useEthers();
  const denominationAssetBalance = useTokenBalance(token.address, account);
  const invest = () => {
    onConfirm(investAmount);
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
                  Withdraw my shares
                </Dialog.Title>
                <div className="mt-8 w-full bg-[#8881] p-6 rounded-2xl shadow-lg">
                  <div
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    <div className="flex gap-2 mx-2 items-center justify-between">
                      <p>10</p>
                      <p>{token.symbol}</p>
                    </div>
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

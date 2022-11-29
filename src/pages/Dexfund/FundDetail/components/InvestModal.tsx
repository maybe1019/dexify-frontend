import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

type Props = {
  isOpen: boolean;
  onCancel(): void;
  onConfirm(amount: number): any;
};

export default function InvestModal({ isOpen, onCancel, onConfirm }: Props) {
  function closeModal() {
    onCancel();
  }

  const invest = () => {
    onConfirm(1000);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
                    <div className="flex gap-2 ">
                      <input
                        type="number"
                        className="bg-transparent w-20 outline-none grow py-2 text-xl lg:text-2xl pl-2 text-text-1 dark:text-text-1-dark"
                        placeholder="Input Amount"
                      />
                      <div>tokenimage</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 mb-2 mx-2">
                    <div className=" text-text-3 dark:text-text-3-dark text-sm">
                      = $4000
                    </div>
                    <div className=" text-text-3 dark:text-text-3-dark text-sm ml-auto">
                      Balance: 1000
                    </div>
                  </div>
                  <div className="grid grid-cols-4 text-xs gap-2">
                    {['25%', '50%', '75%', 'MAX'].map((value) => (
                      <button className=" bg-white dark:bg-bg-4-dark w-14 h-6 rounded-full mx-auto shadow-lg text-text-3 dark:text-text-3-dark hover:text-black hover:dark:text-white">
                        {value}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={invest}
                  >
                    Got it, thanks!
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

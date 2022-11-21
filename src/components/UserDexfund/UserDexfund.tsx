import React, { Fragment, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import data from '../../helpers/data/chartInitData.json';
import { Popover, Transition } from '@headlessui/react';
import FundChart from '../FundChart';

const UserDexfund = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('Last 7 Days');

  return (
    <div className="card overflow-hidden hover:cursor-pointer transition ease-in-out delay-150 hover:-translate-y-2">
      <div className="px-2 sm:px-8 py-6 flex gap-2 sm:gap-4 items-center">
        <img
          src="/images/default-user.png"
          alt="default-user"
          className=" w-10 rounded-full"
        />
        <div>
          <p className="text-lg font-[500]">New User</p>
          <p className=" text-text-2 dark:text-text-2-dark text-xs">
            adasd5456dfdsfdf4dsf4646d
          </p>
        </div>
        <div className="ml-auto">
          <p className="text-primary text-lg">11,050,405</p>
          <p className=" text-text-2 dark:text-text-2-dark text-xs text-right">
            Market Cap
          </p>
        </div>
      </div>
      <div className="card p-2 flex gap-2 flex-col md:flex-row">
        <div className="p-2 flex flex-col gap-3 w-full md:w-1/2">
          <div className="flex justify-between items-center">
            <span className="rounded-lg bg-purple-300 dark:bg-purple-800 p-2 font-[500] text-xs">
              Users
            </span>
            <span className="text-sm">32,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="rounded-lg bg-pink-200 dark:bg-pink-900 p-2 font-[500] text-xs">
              Risk
            </span>
            <span className="text-sm">3</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="rounded-lg bg-amber-200 dark:bg-amber-900 p-2 font-[500] text-xs">
              Min Investment
            </span>
            <span className="text-sm">250</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="rounded-lg bg-green-200 dark:bg-green-900 p-2 font-[500] text-xs">
              Age(days)
            </span>
            <span className="text-sm">75</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="rounded-lg bg-orange-200 dark:bg-orange-900 p-2 font-[500] text-xs">
              Biggest Holding
            </span>
            <span className="text-sm">BTC 50%</span>
          </div>
        </div>
        <div className="grow overflow-hidden p-2 shadow-[0_0_2px_0_primary] shadow-[#C96AE488] rounded-xl flex flex-col gap-3">
          <div className="flex justify-between items-center p-2">
            <span className=" text-green-500 flex text-sm gap-1">
              +45% <ChevronUpIcon width={12} strokeWidth={4} />
            </span>
            <div>
              <Popover className="relative">
                <Popover.Button className={'outline-none'}>
                  <div
                    className="text-xs px-2 py-1 rounded border border-gray-500 flex gap-1"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    {selectedPeriod} <ChevronDownIcon width={10} />
                  </div>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-0 z-10 mt-1 w-[120px] px-1 sm:px-0 text-xs">
                    <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-bg-1 dark:bg-bg-1-dark p-2 flex flex-col gap-1">
                      {['Today', 'Last 7 Days', 'This Month', '3 Months'].map(
                        (text) => (
                          <div
                            className=" cursor-pointer hover:bg-bg-2 dark:hover:bg-bg-2-dark px-2 py-1 rounded"
                            onClick={() => setSelectedPeriod(text)}
                            key={text}
                          >
                            {text}
                          </div>
                        ),
                      )}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
          </div>
          <div className="flex-grow text-xs transition-none h-[160px] md:h-auto">
            <FundChart xAxis={true} yAxis={false} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDexfund;

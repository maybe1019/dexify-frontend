import React, { Fragment, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import {
  AreaChart,
  XAxis,
  Area,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import data from '../helpers/data/chartInitData.json';
import { Popover, Transition } from '@headlessui/react';

const UserDexfund = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('Last 7 Days');

  return (
    <div className="card overflow-hidden">
      <div className=" px-8 py-6 flex gap-4 items-center">
        <img
          src="/images/default-user.png"
          alt="default-user"
          className=" w-10 rounded-full"
        />
        <div>
          <p className="text-lg font-[500]">New User</p>
          <p className=" text-text-2 dark:text-text-2-dark text-xs">
            adasd5456dfdsfdf4dsf4646ddsg
          </p>
        </div>
        <div className="ml-auto">
          <p className="text-primary text-lg">11,050,405</p>
          <p className=" text-text-2 dark:text-text-2-dark text-xs text-right">
            Market Cap
          </p>
        </div>
      </div>
      <div className="card p-2 flex gap-2">
        <div className="p-2 flex flex-col gap-3 w-1/2">
          <div className="flex justify-between items-center">
            <span className="rounded-xl bg-purple-300 dark:bg-purple-800 px-3 py-2 font-[500] text-sm">
              Users
            </span>
            <span>32,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="rounded-xl bg-pink-200 dark:bg-pink-900 px-3 py-2 font-[500] text-sm">
              Risk
            </span>
            <span>3</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="rounded-xl bg-amber-200 dark:bg-amber-900 px-3 py-2 font-[500] text-sm">
              Min Investment
            </span>
            <span>250</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="rounded-xl bg-green-200 dark:bg-green-900 px-3 py-2 font-[500] text-sm">
              Age(days)
            </span>
            <span>75</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="rounded-xl bg-orange-200 dark:bg-orange-900 px-3 py-2 font-[500] text-sm">
              Biggest Holding
            </span>
            <span>BTC 50%</span>
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
          <div className="flex-grow text-xs transition-none">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={600}
                height={400}
                data={data}
                margin={{
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C96AE4" stopOpacity={0.7} />
                    <stop
                      offset="75%"
                      stopColor="#ff9bff81"
                      stopOpacity={0.3}
                    />
                    <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" height={20} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#C96AE4"
                  strokeWidth="3"
                  fill="url(#colorView)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDexfund;

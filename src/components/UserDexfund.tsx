import React from 'react';

const UserDexfund = () => {
  return (
    <div className="card">
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
        <div className="grow overflow-hidden p-2 shadow-[0_0_2px_0_primary] shadow-[#C96AE488] rounded-xl">
          hello
        </div>
      </div>
    </div>
  );
};

export default UserDexfund;

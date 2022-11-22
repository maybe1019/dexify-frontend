import React from 'react';

import assets from './data/assets.json';

const Manage = () => {
  return (
    <div className="md:bg-white dark:md:bg-bg-2-dark rounded-3xl max-w-4xl px-4 lg:px-24 py-0 md:py-12 mx-auto my-20">
      <h1 className=" text-3xl lg:text-4xl my-8 text-center font-bold">
        Create a Dexfund
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <input
          type="text"
          className="bg-[#8881] rounded-lg p-4 sm:p-6 text-sm sm:text-lg outline-none lg:col-span-2"
          placeholder="Wallet Address"
        />

        <input
          type="text"
          className="bg-[#8881] rounded-lg p-4 sm:p-6 text-sm sm:text-lg outline-none lg:col-span-2"
          placeholder="Dexfund Name"
        />
        <input
          type="text"
          className="bg-[#8881] rounded-lg p-4 sm:p-6 text-sm sm:text-lg outline-none"
          placeholder="Performance"
        />
        <input
          type="text"
          className="bg-[#8881] rounded-lg p-4 sm:p-6 text-sm sm:text-lg outline-none"
          placeholder="Entry Fee"
        />

        <input
          type="text"
          className="bg-[#8881] rounded-lg p-4 sm:p-6 text-sm sm:text-lg outline-none"
          placeholder="Minimum Investment"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 my-8">
        <div className=" text-sm min-w-[160px]">Select Starting Assets</div>
        <div className="grid grid-cols-4 sm:grid-cols-7 grow gap-2">
          {assets.map((asset) => (
            <div
              key={asset.name}
              className="rounded py-1 text-center text-sm"
              style={{ backgroundColor: asset.color }}
            >
              {asset.name}
            </div>
          ))}
        </div>
      </div>
      <textarea
        name="bio"
        placeholder="Bio"
        className=" resize-none bg-[#8881] rounded-lg p-4 sm:p-6 text-sm sm:text-lg outline-none w-full h-32"
      ></textarea>

      <div className="flex flex-col gap-2 items-center my-4">
        <button className="block text-primary font-bold text-xl">
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

import React from 'react';

function TotoalAUM() {
  return (
    <div className="card overflow-hidden min-h-[340px]">
      <div className="p-7 text-text-1 dark:text-text-1-dark text-xl">
        Totoal AUM
      </div>
      <div>
        <hr className="border-[#F3F5F9] dark:border-text-3-dark" />
        <div className="flex flex-col gap-y-3 mx-7 my-3">
          <div className="flex">
            <span className="text-sm text-text-3 dark:text-text-3-dark">
              Total AUM
            </span>
            <span className="text-sm text-text-2 dark:text-text-2-dark ml-auto">
              $12.542
            </span>
          </div>
          <hr className="border-[#F3F5F9] dark:border-text-3-dark" />
          <div className="flex">
            <span className="text-sm text-text-3 dark:text-text-3-dark">
              7 Day %
            </span>
            <span className="text-sm text-text-2 dark:text-text-2-dark ml-auto">
              34%
            </span>
          </div>
          <hr className="border-[#F3F5F9] dark:border-text-3-dark" />
          <div className="flex">
            <span className="text-sm text-text-3 dark:text-text-3-dark">
              Total %
            </span>
            <span className="text-sm text-text-2 dark:text-text-2-dark ml-auto">
              142%
            </span>
          </div>
        </div>
        <hr className="border-[#F3F5F9] dark:border-text-3-dark" />
      </div>
      <div className="flex flex-col justify-around p-7 gap-y-3">
        <div className="flex items-center">
          <img
            src="/images/default-user.png"
            alt="default-user"
            className="w-10 rounded-full"
          />
          <p className="text-sm font-[500] sm:text-base mx-2">Alt Queen’s</p>
          <p className="text-xs sm:text-sm text-text-3 dark:text-text-3-dark font-[500]">
            Dexfund - biggest fund
          </p>
        </div>
        <div className="flex items-center mt-1">
          <img
            src="/images/default-user.png"
            alt="default-user"
            className="w-10 rounded-full"
          />
          <p className="text-sm font-[500] sm:text-base mx-2">BlackRock’s</p>
          <p className="text-xs sm:text-sm text-text-3 dark:text-text-3-dark font-[500]">
            Dexfund - Best performing
          </p>
        </div>
      </div>
    </div>
  );
}

export default TotoalAUM;

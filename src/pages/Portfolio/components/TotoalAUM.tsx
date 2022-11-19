import React from 'react';

function TotoalAUM() {
  return (
    <div className="card overflow-hidden p-7 w-[448px] min-h-[340px] mt-4 flex flex-col justify-between">
      <div className=" text-text-1 dark:text-text-1-dark text-xl">
        Totoal AUM
      </div>
      <div>
        <div className="flex">
          <span className="text-sm text-text-3 dark:text-text-3-dark">
            Total AUM
          </span>
          <span className="text-sm text-text-2 dark:text-text-2-dark ml-auto">
            $12.542
          </span>
        </div>
        <div className="flex mt-6">
          <span className="text-sm text-text-3 dark:text-text-3-dark">
            7 Day %
          </span>
          <span className="text-sm text-text-2 dark:text-text-2-dark ml-auto">
            34%
          </span>
        </div>
        <div className="flex mt-6">
          <span className="text-sm text-text-3 dark:text-text-3-dark">
            Total %
          </span>
          <span className="text-sm text-text-2 dark:text-text-2-dark ml-auto">
            142%
          </span>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <img
            src="/images/default-user.png"
            alt="default-user"
            className="w-10 rounded-full"
          />
          <p className="text-base font-[500] mx-2">Alt Queen’s</p>
          <p className="text-sm text-text-3 dark:text-text-3-dark font-[500]">
            Dexfund - biggest fund
          </p>
        </div>
        <div className="flex items-center mt-1">
          <img
            src="/images/default-user.png"
            alt="default-user"
            className="w-10 rounded-full"
          />
          <p className="text-base font-[500] mx-2">BlackRock’s</p>
          <p className="text-sm text-text-3 dark:text-text-3-dark font-[500]">
            Dexfund - Best performing
          </p>
        </div>
      </div>
    </div>
  );
}

export default TotoalAUM;

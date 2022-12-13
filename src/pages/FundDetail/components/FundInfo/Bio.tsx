import React from 'react';
import {
  formatTimestampToString,
  milliseconds,
} from '../../../../helpers/utils/utils';

type BioProps = {
  fund: FundData;
  managerInfo: User;
  loading: boolean;
};

function Bio({ fund, managerInfo, loading }: BioProps) {
  return (
    <div className="m-2 text-text-2 dark:text-text-2-dark flex flex-col gap-4 py-4">
      <div className="flex gap-2">
        <p className="text-sm text-right w-16">Name:</p>
        <p className="text-xs col-span-4 pt-0.5">{fund.name}</p>
      </div>
      <div className="flex gap-2">
        <p className="text-sm text-right w-16">Age:</p>
        <p className="text-xs col-span-4 pt-0.5">
          {formatTimestampToString(fund.startTimestamp, milliseconds['1D'])} (
          {fund.age} days old)
        </p>
      </div>
      <div className="flex gap-2">
        <p className="text-sm text-right w-16">Bio:</p>
        {loading ? (
          <div className="grow h-5 skeleton rounded-md"></div>
        ) : (
          managerInfo && (
            <p className="text-xs col-span-4 pt-0.5">{managerInfo.bio}</p>
          )
        )}
      </div>
    </div>
  );
}

export default Bio;

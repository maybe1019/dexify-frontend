import React from 'react';
import {
  formatTimestampToString,
  milliseconds,
} from '../../../../helpers/utils/utils';

function Bio({ fund, managerInfo }: { fund: FundData; managerInfo: User }) {
  return (
    <div className="mx-2 text-text-2 dark:text-text-2-dark">
      <div className="grid grid-cols-5 gap-4 pt-5">
        <p className="text-sm text-right">Name:</p>
        <p className="text-xs col-span-4 pt-0.5">{fund.name}</p>
      </div>
      <div className="grid grid-cols-5 gap-4 pt-5">
        <p className="text-sm text-right">Age:</p>
        <p className="text-xs col-span-4 pt-0.5">
          {formatTimestampToString(fund.startTimestamp, milliseconds['1D'])} (
          {fund.age} days old)
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4 py-5">
        <p className="text-sm text-right">Bio:</p>
        {managerInfo && (
          <p className="text-xs col-span-4 pt-0.5">{managerInfo.bio}</p>
        )}
      </div>
    </div>
  );
}

export default Bio;

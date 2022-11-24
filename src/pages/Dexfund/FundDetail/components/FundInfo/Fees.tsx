import React from 'react';

function Fees() {
  return (
    <div className="mx-2 text-text-2 dark:text-text-2-dark">
      <div className="grid grid-cols-5 gap-4 pt-5">
        <p className="col-span-3 text-lg text-right">Entry Fee:</p>
        <p className="col-span-2 text-xl">0.05%</p>
      </div>
      <div className="grid grid-cols-5 gap-4 pt-5">
        <p className="col-span-3 text-lg text-right">Performance Fee:</p>
        <p className="col-span-2 text-xl">5%</p>
      </div>
      <div className="grid grid-cols-5 gap-4 pt-5">
        <p className="col-span-3 text-lg text-right">Exit Fee:</p>
        <p className="col-span-2 text-xl">-</p>
      </div>
      <div className="grid grid-cols-5 gap-4 py-5">
        <p className="col-span-3 text-lg text-right">Minimum investment:</p>
        <p className="col-span-2 text-xl">$500</p>
      </div>
    </div>
  );
}

export default Fees;

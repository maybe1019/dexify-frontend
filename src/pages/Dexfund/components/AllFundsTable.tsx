import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../store';
import DataTable from '../../../components/DataTable';
import untypedFields from '../data/fields.json';

const AllFundsTable = () => {
  const allFunds = useSelector((state: RootState) => state.allFunds.value);

  const [dexifyData, setDexifyData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    if (allFunds.length > 0) {
      setDexifyData(allFunds.map((f) => f));
      setFilteredData(allFunds.map((f) => f));
    }
  }, [allFunds]);

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchBy: string = e.target.value;
    const tmp: any[] = dexifyData.filter(
      (d) =>
        d.dexfund.toLowerCase().includes(searchBy) ||
        d.manager.toLowerCase().includes(searchBy),
    );
    setFilteredData(tmp);
  };
  return (
    <div>
      <h1 className="text-[22px] font-[500] mt-12">Browse Dexify</h1>
      <div className="w-full relative bg-bg-2 dark:bg-bg-2-dark rounded-lg my-8 md:w-[300px]">
        <input
          type="text"
          className="bg-transparent outline-none py-4 pl-12 pr-4 w-full"
          onChange={onChangeSearchValue}
        />
        <MagnifyingGlassIcon width={24} className="absolute left-4 top-4" />
      </div>
      <div className="card">
        <DataTable
          data={filteredData}
          fields={untypedFields}
          pagination={true}
          minWidth={950}
        />
      </div>
    </div>
  );
};

export default AllFundsTable;

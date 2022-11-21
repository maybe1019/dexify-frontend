import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { useState, useEffect } from 'react';
import DataTable from '../../components/DataTable';
import UserDexfund from '../../components/UserDexfund';

import untypedDexifyData from './data/dexifyData.json';
import untypedFields from './data/fields.json';

const Dexfund = () => {
  const [filteredData, setFilteredData] = useState<any[]>(untypedDexifyData);

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchBy: string = e.target.value;
    const tmp: any[] = untypedDexifyData.filter(
      (d) =>
        d.dexfund.toLowerCase().includes(searchBy) ||
        d.manager.toLowerCase().includes(searchBy),
    );
    setFilteredData(tmp);
  };

  useEffect(() => {
    console.log(filteredData);
  }, [filteredData]);

  return (
    <div>
      <h1 className="text-[22px] font-[500] mb-5">Top Dexfunds</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <UserDexfund />
        <UserDexfund />
        <UserDexfund />
        <UserDexfund />
        <UserDexfund />
        <UserDexfund />
      </div>
      <h1 className="text-[22px] font-[500] mt-12">Browse Dexify</h1>
      <div className="w-full relative bg-[#8881] rounded-lg my-8 md:w-[300px]">
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

export default Dexfund;

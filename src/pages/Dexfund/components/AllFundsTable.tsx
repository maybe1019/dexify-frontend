import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../store';
import DataTable from '../../../components/DataTable';
import untypedFields from '../data/fields.json';
import { formatFloatFixed } from '../../../helpers/utils/utils';

const AllFundsTable = () => {
  const allFunds = useSelector((state: RootState) => state.allFunds);

  const [dexifyData, setDexifyData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    if (allFunds.value.length > 0) {
      const data = allFunds.value.map((f) => {
        const volume24H = formatFloatFixed(
          f.aum === 0 ? 0 : (f.aum / f.aum24H) * 100 - 100,
        );
        const volume7D = formatFloatFixed(
          f.aum === 0 ? 0 : (f.aum / f.aum7D) * 100 - 100,
        );
        const volumeAll = formatFloatFixed(
          f.aum === 0 ? 0 : (f.aum / f.aumFirst) * 100 - 100,
        );
        return {
          ...f,
          volume24H: volume24H > 0 ? `+${volume24H}` : `${volume24H}`,
          volume7D: volume7D > 0 ? `+${volume7D}` : `${volume7D}`,
          volumeAll: volumeAll > 0 ? `+${volumeAll}` : `${volumeAll}`,
          link: `/funds/${f.id}`,
        };
      });
      setDexifyData(data);
      setFilteredData(data.map((d) => d));
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
          minWidth={1080}
          rowCnt={10}
          loading={allFunds.loading}
        />
      </div>
    </div>
  );
};

export default AllFundsTable;

import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';

import colors from '../../helpers/data/color-array.json';

type DataType = {
  name: string;
  title: string;
  prefix: string;
  suffix: string;
  type: string;
  colorful?: boolean;
};

type DataTableProps = {
  fields: Array<DataType>;
  data: any[];
  pagination: boolean;
  minWidth: number;
};

const DataTable = ({ fields, data, pagination, minWidth }: DataTableProps) => {
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<number>(1);
  const [showList, setShowList] = useState<any[]>(data);

  useEffect(() => {
    setShowList(data);
    setSortBy('');
    setSortDirection(1);
  }, [data]);

  const sort = (sortName: string) => {
    let dir = sortDirection;
    if (sortBy === sortName) {
      dir *= -1;
    }
    const newList: any[] = showList.sort((a, b) =>
      a[sortName] > b[sortName] ? dir : -1 * dir,
    );
    setShowList(newList);
    setSortBy(sortName);
    setSortDirection(dir);
  };

  return (
    <div className="p-2">
      <div className="pb-2 overflow-auto text-sm">
        <table
          className={`w-full border-collapse`}
          style={{ minWidth: `${minWidth}px` }}
        >
          <thead>
            <tr className=" bg-[#8881]">
              {fields.map((field) => (
                <th
                  className=" text-text-3 dark:text-text-3-dark font-[500] px-3 py-4 first:rounded-l-lg last:rounded-r-lg text-left cursor-pointer"
                  key={field.title}
                  onClick={() => sort(field.name)}
                >
                  {field.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              showList.slice((page - 1) * 10, page * 10).map((d, index) => (
                <tr
                  key={index}
                  className=" border-b border-b-[#8881] last:border-b-0"
                >
                  {fields.map((field) => (
                    <td
                      key={field.title}
                      className="px-3 py-3 md:py-4 font-[300]"
                      style={
                        field.colorful ? { color: colors[d[field.name]] } : {}
                      }
                    >
                      {field.prefix} {d[field.name]} {field.suffix}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                {fields.map((field) => (
                  <td
                    key={field.title}
                    className="px-3 py-3 md:py-4 font-[300] pl-6"
                  >
                    -
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {pagination && (
        <div className="flex mx-8 mt-2">
          <div className="ml-auto">
            <Pagination
              totalPage={Math.ceil(data.length / 10)}
              onChange={(p) => setPage(p)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;

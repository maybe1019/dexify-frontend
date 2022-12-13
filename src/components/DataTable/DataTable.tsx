import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';

import colors from '../../helpers/data/color-array.json';
import { shortenAddress } from '@usedapp/core';
import { formatFloatFixed, getTokenInfo } from '../../helpers/utils/utils';
import { Link } from 'react-router-dom';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

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
  rowCnt: number;
  loading: boolean;
};

const DataTable = ({
  fields,
  data,
  pagination,
  minWidth,
  rowCnt,
  loading,
}: DataTableProps) => {
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
      <div className="pb-6 overflow-x-auto overflow-y-hidden text-sm">
        <table
          className={`w-full border-collapse overflow-hidden overflow-y-visible`}
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
            {loading ? (
              Array(rowCnt)
                .fill(1)
                .map((v, i) => (
                  <tr
                    key={i}
                    className="border-b border-b-[#8881] last:border-b-0 relative"
                  >
                    {fields.map((field) => (
                      <td key={field.title} className="px-3 py-3 md:py-4">
                        -
                      </td>
                    ))}
                    <td className="absolute h-5 w-[calc(100%-24px)] skeleton left-3 top-3 md:top-4 rounded-md"></td>
                  </tr>
                ))
            ) : data.length > 0 ? (
              showList
                .slice((page - 1) * rowCnt, page * rowCnt)
                .map((d, index) => (
                  <tr
                    key={index}
                    className=" border-b border-b-[#8881] last:border-b-0"
                  >
                    {fields.map((field) => (
                      <td
                        key={field.title}
                        className="px-3 py-3 md:py-4 font-[300] tooltip"
                        style={
                          field.colorful ? { color: colors[d[field.name]] } : {}
                        }
                      >
                        {field.prefix}{' '}
                        {field.type === 'address' ? (
                          shortenAddress(d[field.name])
                        ) : field.type === 'number' ? (
                          formatFloatFixed(d[field.name])
                        ) : field.type === 'token' ? (
                          getTokenInfo(d[field.name]) ? (
                            <img
                              src={getTokenInfo(d[field.name])?.logoURI}
                              alt="top asset"
                              className=" w-6 block rounded-full"
                            />
                          ) : (
                            ''
                          )
                        ) : field.type === 'link' ? (
                          <Link to={d[field.name]}>
                            <ArrowTopRightOnSquareIcon width={16} />
                          </Link>
                        ) : (
                          d[field.name]
                        )}{' '}
                        {field.suffix}
                        <div className="tooltiptext">
                          {field.prefix}
                          {d[field.name]}
                          {field.suffix}
                        </div>
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
              totalPage={Math.ceil(data.length / rowCnt)}
              onChange={(p) => setPage(p)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;

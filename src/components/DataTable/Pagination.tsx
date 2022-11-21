import React, { useState, useEffect } from 'react';

type PaginationProps = {
  totalPage: number;
  onChange?: (page: number) => void;
};

const Pagination = ({ totalPage, onChange }: PaginationProps) => {
  const [page, setPage] = useState<number>(1);
  const [buttonList, setButtonList] = useState<number[]>([]);

  const onClickPage = (p: number) => {
    setPage(p);
    if (onChange) {
      onChange(p);
    }
  };

  useEffect(() => {
    const list: number[] = [1];
    if (page > 3) {
      list.push(0);
    }
    for (
      let i = Math.max(2, page - 1);
      i <= Math.min(totalPage - 1, page + 1);
      i++
    ) {
      list.push(i);
    }
    if (page < totalPage - 2) {
      list.push(0);
    }
    if (totalPage > 1) {
      list.push(totalPage);
    }
    setButtonList(list);
  }, [page]);

  return (
    <div className="flex gap-2">
      {buttonList.map((button, index) =>
        button === 0 ? (
          <span key={0 - index}>...</span>
        ) : (
          <button
            key={button}
            onClick={() => onClickPage(button)}
            className={`w-8 h-8 text-center border border-[#8884] first:rounded-l-md last:rounded-r-md ${
              page === button ? 'bg-[#8883]' : ''
            }`}
          >
            {button}
          </button>
        ),
      )}
    </div>
  );
};

export default Pagination;

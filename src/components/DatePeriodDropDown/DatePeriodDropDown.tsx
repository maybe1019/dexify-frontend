import React, { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const list = [
  { title: 'Today', value: 1 },
  { title: 'Last 7Days', value: 7 },
  { title: 'This month', value: 30 },
  { title: 'Last 3Months', value: 90 },
  { title: 'All', value: 0 },
];

type DatePeriodDropDownProps = {
  onChange: (days: number) => void;
};

function DatePeriodDropDown({ onChange }: DatePeriodDropDownProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

  const onClick = (index: number) => {
    setSelectedIndex(index);
    onChange(list[index].value);
  };

  return (
    <div>
      <Popover className="relative">
        <Popover.Button className={'outline-none w-[110px]'}>
          <div
            className="text-xs px-2 py-1 rounded border border-gray-500 flex gap-1"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {list[selectedIndex].title}{' '}
            <ChevronDownIcon width={10} className="ml-auto" />
          </div>
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute right-0 z-10 mt-1 w-[120px] px-1 sm:px-0 text-xs">
            <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-bg-1 dark:bg-bg-1-dark p-2 flex flex-col gap-1">
              {list.map(({ title }, index) => (
                <Popover.Button key={title}>
                  <div
                    className=" cursor-pointer hover:bg-bg-2 dark:hover:bg-bg-2-dark px-2 py-1 rounded"
                    onClick={() => onClick(index)}
                  >
                    {title}
                  </div>
                </Popover.Button>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default DatePeriodDropDown;

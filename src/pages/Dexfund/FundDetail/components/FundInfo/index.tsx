import React from 'react';
import { Tab } from '@headlessui/react';
import Bio from './Bio';
import Fees from './Fees';
import TotalHistory from './TotalHistory';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function FundInfo() {
  const tabList = ['Bio', 'Fees', 'Total History'];
  return (
    <div className="card overflow-hidden p-2">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-[#F7F7F7] dark:bg-[#2e3e58] p-1">
          {tabList.map((title) => (
            <Tab
              key={title}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-5 text-sm font-medium leading-5',
                  ' focus:outline-none focus:text-black',
                  selected
                    ? 'bg-[#F9E1FD] shadow text-black'
                    : 'bg-[#F7F7F7] dark:bg-[#2e3e58] text-[#636677] hover:bg-white/[0.12] hover:text-black dark:hover:text-white',
                )
              }
            >
              {title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <Bio />
          </Tab.Panel>
          <Tab.Panel>
            <Fees />
          </Tab.Panel>
          <Tab.Panel>
            <TotalHistory />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

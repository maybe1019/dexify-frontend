import React from 'react';
import { Tab } from '@headlessui/react';
import Bio from './Bio';
import Fees from './Fees';
import TotalHistory from './TotalHistory';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const tabList = ['Bio', 'Fees', 'History'];

type FundInfoProp = {
  fund: FundData;
  tweetsData: any;
};

export default function FundInfo({ fund, tweetsData }: FundInfoProp) {
  return (
    <div className="card overflow-hidden p-2">
      <Tab.Group>
        <Tab.List className="flex gap-2 rounded-xl">
          {tabList.map((title) => (
            <Tab
              key={title}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-3 text-sm font-medium leading-5',
                  ' focus:outline-none',
                  selected
                    ? 'bg-bg-3 dark:bg-bg-3-dark shadow text-primary font-bold'
                    : 'text-[#636677] hover:bg-white/[0.02]',
                )
              }
            >
              {title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>
            <Bio fund={fund} managerInfo={tweetsData.user} />
          </Tab.Panel>
          <Tab.Panel>
            <Fees fund={fund} />
          </Tab.Panel>
          <Tab.Panel>
            <TotalHistory fund={fund} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

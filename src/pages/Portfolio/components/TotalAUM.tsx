import React, { useEffect, useState } from 'react';
import utils from '../../../helpers/utils';
import api from '../../../api';

type TotalAUMProps = {
  funds: any[];
  dataLoading: boolean;
};

const FundLink = ({ fund, title }: { fund: FundData; title: string }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [imageUrl, setImageUrl] = useState<string>('/images/default-user.png');

  useEffect(() => {
    if (!fund) {
      setLoading(true);
      return;
    }
    init();
  }, [fund]);

  const init = async () => {
    try {
      const manager: User = await api.user.getUser(fund.manager);
      if (manager.image !== '') {
        setImageUrl(manager.image);
      } else if (manager.twitterImage !== '') {
        setImageUrl(manager.twitterImage);
      }
    } catch (error) {}
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center">
          <div className="skeleton rounded-full w-10 h-10"></div>
          <p className="skeleton text-sm font-[500] sm:text-base mx-2 grow h-4"></p>
        </div>
      ) : (
        <div className="flex items-center cursor-pointer">
          <img
            src={imageUrl}
            alt="manager"
            className="w-10 rounded-full h-10"
          />
          <p className="text-sm font-[500] sm:text-base ml-3 mr-1">
            {fund.name}
          </p>
          <p className="text-xs sm:text-sm text-text-3 dark:text-text-3-dark font-[500]">
            {' '}
            - {title}
          </p>
        </div>
      )}
    </div>
  );
};

function TotalAUM({ funds, dataLoading }: TotalAUMProps) {
  return (
    <div className="card overflow-hidden min-h-[340px] flex flex-col justify-between">
      <div className="text-text-1 dark:text-text-1-dark text-xl header p-6 font-bold">
        Totoal AUM
      </div>
      <div>
        <div className="flex flex-col my-3">
          <div className="py-3 px-6 border-b border-[#8882]">
            {dataLoading ? (
              <div className="skeleton rounded-md h-5 w-full"></div>
            ) : (
              <div className="flex justify-between">
                <span className="text-sm text-text-3 dark:text-text-3-dark">
                  Total AUM
                </span>
                <span className="text-sm text-text-2 dark:text-text-2-dark ml-auto">
                  ${' '}
                  {utils.utils.formatFloatFixed(
                    funds.reduce((a, b) => a + b.investorAum, 0),
                  )}
                </span>
              </div>
            )}
          </div>
          <div className="py-3 px-6 border-b border-[#8882]">
            {dataLoading ? (
              <div className="skeleton rounded-md h-5 w-full"></div>
            ) : (
              <div className="flex justify-between">
                <span className="text-sm text-text-3 dark:text-text-3-dark">
                  24 Hours Ago
                </span>
                <span className="text-sm text-text-2 dark:text-text-2-dark">
                  ${' '}
                  {utils.utils.formatFloatFixed(
                    funds.reduce((a, b) => a + b.investorAum24hAgo, 0),
                  )}
                </span>
              </div>
            )}
          </div>
          <div className="py-3 px-6 border-b border-[#8882]">
            {dataLoading ? (
              <div className="skeleton rounded-md h-5 w-full"></div>
            ) : (
              <div className="flex justify-between">
                <span className="text-sm text-text-3 dark:text-text-3-dark">
                  7 Days Ago
                </span>
                <span className="text-sm text-text-2 dark:text-text-2-dark">
                  {isNaN(funds.reduce((a, b) => a + b.investorAum7DAgo, 0))
                    ? '---'
                    : `$ ${utils.utils.formatFloatFixed(
                        funds.reduce((a, b) => a + b.investorAum7DAgo, 0),
                      )}`}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-around p-7 gap-y-3">
        <FundLink
          fund={
            funds.map((f) => f).sort((a, b) => b.investorAum - a.investorAum)[0]
              ?.fundData
          }
          title="Biggest fund"
        />
        <FundLink
          fund={
            funds
              .map((f) => f)
              .sort(
                (a, b) =>
                  b.investorAum -
                  b.investorAum24hAgo -
                  (a.investorAum - a.investorAum24hAgo),
              )[0]?.fundData
          }
          title="Best performing"
        />
      </div>
    </div>
  );
}

export default TotalAUM;

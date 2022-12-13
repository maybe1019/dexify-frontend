import React, { useEffect, useState } from 'react';
import DataTable from '../../../../components/DataTable';
import { getFundTransactions } from '../../../../helpers/utils/graphql';
import {
  formatFloatFixed,
  getTokenInfo,
} from '../../../../helpers/utils/utils';
import untypedField from '../../../Dexfund/data/history-fields.json';

const fields: any = untypedField;

type TotalHistoryProps = {
  fund: FundData;
};

function TotalHistory({ fund }: TotalHistoryProps) {
  const [fundTransactions, setFundTransactions] = useState<any[]>([]);
  const [transactionLoading, setTransactionLoading] = useState<boolean>(true);
  const [totalInvest, setTotalInvest] = useState<number>(0);

  useEffect(() => {
    init();
  }, []); //eslint-disable-line

  const init = async () => {
    const { fundTransactions, totalInvestedAmount } = await getFundTransactions(
      fund.id,
    );
    setFundTransactions(fundTransactions);
    setTotalInvest(totalInvestedAmount);
    setTransactionLoading(false);
  };

  return (
    <div>
      <DataTable
        data={fundTransactions}
        fields={fields}
        pagination={true}
        minWidth={550}
        rowCnt={5}
        loading={transactionLoading}
      />
      <div className="text-lg p-4">
        {transactionLoading ? (
          <div className="skeleton rounded-md h-[28px] w-full"></div>
        ) : (
          <div className="flex items-center justify-between">
            <div>Total Invested:</div>
            <div className="flex items-center gap-1">
              <img
                src={getTokenInfo(fund.denominationAsset)?.logoURI}
                alt="token"
                className="w-5 h-5"
              />{' '}
              {formatFloatFixed(totalInvest)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TotalHistory;

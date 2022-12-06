import React, { useEffect, useState } from 'react';
import DataTable from '../../../../../components/DataTable';
import { getFundTransactions } from '../../../../../helpers/utils/graphql';
import untypedField from '../../../data/history-fields.json';

const fields: any = untypedField;

type TotalHistoryProps = {
  fund: FundData;
};

function TotalHistory({ fund }: TotalHistoryProps) {
  const [fundTransactions, setFundTransactions] = useState<any[]>([]);
  const [transactionLoading, setTransactionLoading] = useState<boolean>(true);

  useEffect(() => {
    init();
  }, []); //eslint-disable-line

  const init = async () => {
    const fundTransactions = await getFundTransactions(fund.id);
    setFundTransactions(fundTransactions);
    setTransactionLoading(false);
  };

  return (
    <div>
      <DataTable
        data={fundTransactions}
        fields={fields}
        pagination={true}
        minWidth={375}
        rowCnt={5}
        loading={transactionLoading}
      />
      <div className="xl:grid xl:grid-cols-2 mx-4 py-2">
        <p className="sm:text-xl text-center">Total PNL: 34% </p>
        <p className="sm:text-xl text-center">Total Invested: 9,000</p>
      </div>
    </div>
  );
}

export default TotalHistory;

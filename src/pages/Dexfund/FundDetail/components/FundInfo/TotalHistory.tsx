import React from 'react';
import DataTable from '../../../../../components/DataTable';
import untypedData from '../../../data/history-data.json';
import untypedField from '../../../data/history-fields.json';

const fields: any = untypedField;
const data: any = untypedData;

function TotalHistory() {
  return (
    <div>
      <DataTable
        data={data}
        fields={fields}
        pagination={false}
        minWidth={375}
      />
      <div className="xl:grid xl:grid-cols-2 mx-4 py-2">
        <p className="text-xl">Total PNL: 34% </p>
        <p className="text-xl">Total Invested: 9,000</p>
      </div>
    </div>
  );
}

export default TotalHistory;

import React from 'react';
import DataTable from '../../../../../components/DataTable';
import untypedData from '../../../data/history-data.json';
import untypedField from '../../../data/history-fields.json';

const fields: any = untypedField;
const data: any = untypedData;

function TotalHistory() {
  return (
    <div className="">
      <DataTable
        data={data}
        fields={fields}
        pagination={false}
        minWidth={400}
      />
    </div>
  );
}

export default TotalHistory;

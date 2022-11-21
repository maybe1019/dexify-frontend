import React from 'react';
import DataTable from '../../../../components/DataTable';
import untypedData from '../../data/fund-detail-data.json';
import untypedField from '../../data/fund-detail-fields.json';

const fields: any = untypedField;
const data: any = untypedData;

function AssetsInfo() {
  return (
    <div className="card overflow-hidden min-h-[400px]">
      <DataTable
        data={data}
        fields={fields}
        pagination={false}
        minWidth={400}
      />
    </div>
  );
}

export default AssetsInfo;

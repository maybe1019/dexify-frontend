import React, { useEffect, useState } from 'react';
import { getTokenPriceHistory } from '../../../../../api/token';
import DataTable from '../../../../../components/DataTable';
import {
  getTokenInfo,
  getTokenPriceAt,
  miliseconds,
} from '../../../../../helpers/utils/utils';
import untypedField from '../../../data/fund-detail-fields.json';

const fields: any = untypedField;

type AssetsInfoProps = {
  fund: FundData;
};

function AssetsInfo({ fund }: AssetsInfoProps) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    init();
  }, [fund]); //eslint-disable-line

  const init = async () => {
    const prices = await getTokenPriceHistory(
      '',
      Date.now() - miliseconds['1d'],
      Date.now(),
      miliseconds['1h'],
    );
    const tmp: any[] = fund.holdings.map((asset) => {
      const price = getTokenPriceAt(
        prices,
        getTokenInfo(asset.symbol).coingeckoId,
        Date.now() - miliseconds['1d'],
      );
      const dailyPercentage = (asset.aum / asset.amount / price) * 100 - 100;
      return {
        assets: asset.symbol,
        aum: asset.aum,
        price: asset.aum / asset.amount,
        daily: `${dailyPercentage > 0 ? '+' : ''}${dailyPercentage.toFixed(1)}`,
        allocation: (asset.aum / fund.aum) * 100,
      };
    });
    setData(tmp);
  };

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

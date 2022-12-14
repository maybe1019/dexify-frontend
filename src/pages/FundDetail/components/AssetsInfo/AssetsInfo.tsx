import React, { useEffect, useState } from 'react';
import { getTokenPriceHistory } from '../../../../api/token';
import DataTable from '../../../../components/DataTable';
import {
  getTokenInfo,
  getTokenPriceAt,
  milliseconds,
} from '../../../../helpers/utils/utils';
import fields from '../../../Dexfund/data/fund-detail-fields.json';

type AssetsInfoProps = {
  fund: FundData;
};

function AssetsInfo({ fund }: AssetsInfoProps) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    init();
  }, [fund]); //eslint-disable-line

  const init = async () => {
    console.log(fund.holdings);
    const prices = await getTokenPriceHistory(
      'all',
      Date.now() - milliseconds['1D'],
      Date.now(),
      milliseconds['1h'],
    );
    const totalAum = fund.holdings.reduce((a, b) => ({
      ...a,
      aum: a.aum + b.aum,
    })).aum;
    const tmp: any[] = fund.holdings
      .filter((asset) => asset.aum > 0)
      .map((asset) => {
        const price = getTokenPriceAt(
          prices,
          getTokenInfo(asset.id)?.coingeckoId as string,
          Date.now() - milliseconds['1D'],
        );
        const dailyPercentage = (asset.aum / asset.amount / price) * 100 - 100;
        const token = getTokenInfo(asset.id);
        return {
          assets: `${token?.name} (${token?.symbol})`,
          aum: asset.aum,
          price: asset.aum / asset.amount,
          daily: `${dailyPercentage > 0 ? '+' : ''}${dailyPercentage.toFixed(
            1,
          )}`,
          allocation: (asset.aum / totalAum) * 100,
        };
      });
    setData(tmp);
    setLoading(false);
  };

  return (
    <div className="card overflow-hidden min-h-[400px]">
      <DataTable
        data={data}
        fields={fields}
        pagination={false}
        minWidth={450}
        rowCnt={5}
        loading={loading}
      />
    </div>
  );
}

export default AssetsInfo;

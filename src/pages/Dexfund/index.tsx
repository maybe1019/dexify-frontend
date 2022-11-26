import UserDexfund from '../../components/UserDexfund';
import AllFundsTable from './components/AllFundsTable';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Dexfund = () => {
  const allFunds = useSelector((state: RootState) => state.allFunds.value);

  return (
    <div>
      <h1 className="text-[22px] font-[500] mb-5">Top Dexfunds</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {allFunds.length > 0 &&
          allFunds
            .map((f) => f)
            .sort((a, b) => b.aum - a.aum)
            .slice(0, 6)
            .map((item, i) => (
              <div key={i}>
                <UserDexfund dexfund={item} />
              </div>
            ))}
      </div>
      <AllFundsTable />
    </div>
  );
};

export default Dexfund;

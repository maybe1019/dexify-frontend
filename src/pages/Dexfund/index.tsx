import UserDexfund from '../../components/UserDexfund';
import AllFundsTable from './components/AllFundsTable';

const Dexfund = () => {
  return (
    <div>
      <h1 className="text-[22px] font-[500] mb-5">Top Dexfunds</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {Array(6)
          .fill(1)
          .map((item, i) => (
            <div key={i}>
              <UserDexfund />
            </div>
          ))}
      </div>
      <AllFundsTable />
    </div>
  );
};

export default Dexfund;

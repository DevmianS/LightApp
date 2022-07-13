import BulbBase from './BulbBase/BulbBase';
import BulbCounter from './BulbCounter/BulbCounter';
import cl from './LumenCalc.module.scss';
const LumenCalc = () => {
  return (
    // <div className={cl.calc}>
    <div className='flex h-full w-full flex-col gap-4 rounded-3xl bg-amber-100 p-5'>
      <BulbCounter />
      <BulbBase />
    </div>
  );
};

export default LumenCalc;

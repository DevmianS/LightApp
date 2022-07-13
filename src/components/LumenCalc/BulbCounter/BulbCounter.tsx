import Panel from '../../UI/Panel';

const BulbCounter = () => {
  return (
    <Panel>
      <div className='flex h-full w-full items-center justify-between px-4'>
        <div className='flex w-1/2 justify-evenly'>
          <span className='text-6xl'>💡</span>
          <span className='text-7xl font-bold'>1</span>
        </div>
        <div className='flex w-1/2 flex-col items-center '>
          <span className='text-4xl'>🔼</span>
          <span className='text-4xl'>🔽</span>
        </div>
      </div>
    </Panel>
  );
};

export default BulbCounter;

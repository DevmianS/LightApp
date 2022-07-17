import Panel from '../../UI/Panel';

const LightTemp = () => {
  return (
    <Panel title='Select Light Temperature(Color)'>
      <div className='flex h-1/2 w-full items-center justify-evenly rounded-md bg-gradient-to-r from-amber-500 via-white to-blue-300'>
        <button>1800K</button>
        <button>2800K</button>
        <button>4000K</button>
        <button>6000K</button>
        <button>6500K</button>
      </div>
    </Panel>
  );
};

export default LightTemp;

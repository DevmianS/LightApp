import Panel from '../../UI/Panel';

const LightTemp = () => {
  return (
    <Panel title='Select Light Temperature(Color)'>
      <div className='flex h-1/2 w-full items-center justify-evenly rounded-md bg-gradient-to-r from-amber-500 via-white to-blue-300'>
        <span>1800K</span>
        <span>2800K</span>
        <span>4000K</span>
        <span>6000K</span>
        <span>6500K</span>
      </div>
    </Panel>
  );
};

export default LightTemp;

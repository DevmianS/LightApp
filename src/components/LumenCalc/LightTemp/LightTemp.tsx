import Panel from '../../UI/Panel';

const LightTemp = props => {
  return (
    <Panel title='Select Light Temperature(Color)'>
      {/* <div className='flex h-full w-full items-center justify-evenly'> */}
      <span>1800K</span>
      <span>2800K</span>
      <span>4000K</span>
      <span>6000K</span>
      <span>6500K</span>
      {/* </div> */}
    </Panel>
  );
};

export default LightTemp;

import Panel from '../../UI/Panel';

const LightTemp = props => {
  return (
    <Panel>
      <div className='flex h-full w-full items-center justify-evenly'>
        <span>🌞</span>
        <span>⚪</span>
        <span>🥶</span>
      </div>
    </Panel>
  );
};

export default LightTemp;

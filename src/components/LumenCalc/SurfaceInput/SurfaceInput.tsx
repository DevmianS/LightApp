import Panel from '../../UI/Panel';
import MeterInput from './MeterInput';

const SurfaceInput = props => {
  return (
    <Panel>
      <div className='flex w-full items-center justify-evenly'>
        <span className='text-6xl'>🔳</span>
        <div className='flex w-1/2 items-center justify-evenly'>
          <MeterInput id='meter1' />
          <span className='text-4xl'>x</span>
          <MeterInput id='meter2' />
        </div>
      </div>
    </Panel>
  );
};

export default SurfaceInput;

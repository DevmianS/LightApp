import Panel from '../../UI/Panel';
import BrightnessButton from './BrightnessButton';

const BrightnessSelector = () => {
  return (
    <Panel title='How bright you want it?'>
      {/* <div className='flex h-full w-full items-center justify-evenly gap-2 px-2 '> */}
      <BrightnessButton size={'small'}></BrightnessButton>
      <BrightnessButton size={'medium'}></BrightnessButton>
      <BrightnessButton size={'large'}></BrightnessButton>
      {/* </div> */}
      {/* <input
        className='w-5/6 pb-10'
        type='range'
        min='1'
        defaultValue='1'
        max='3'
        step='1'
      ></input> */}
    </Panel>
  );
};

export default BrightnessSelector;

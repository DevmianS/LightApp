import { FC, useEffect, useState } from 'react';
import Panel from '../../UI/Panel';
import MeterInput from './MeterInput';

interface Props {
  stateData: {
    sqMeters: number;
    setSqMeters: React.Dispatch<React.SetStateAction<number>>;
  };
}
const SurfaceInput: FC<Props> = ({ stateData: { sqMeters, setSqMeters } }) => {
  return (
    <Panel title='What is the size of the room?'>
      <span className='text-6xl'>🔳</span>
      <div className='flex w-1/2 items-center justify-center'>
        <MeterInput setSqMeters={setSqMeters} id='meter1' />
        {/* <span className='text-4xl'>x</span>
        <MeterInput setMeter={setMeter2} id='meter2' /> */}
      </div>
    </Panel>
  );
};

export default SurfaceInput;

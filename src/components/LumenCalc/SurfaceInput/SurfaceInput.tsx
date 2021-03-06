import { FC } from 'react';
import Panel from '../../UI/Panel';
import MeterInput from './MeterInput';
import { getLang } from '../../../utils/utils';
import surfaceicon from '../../../assets/icons/surface.png';

interface Props {
  stateData: {
    sqMeters: number;
    setSqMeters: React.Dispatch<React.SetStateAction<number>>;
  };
}

const SurfaceInput: FC<Props> = ({ stateData: { sqMeters, setSqMeters } }) => {
  return (
    <Panel
      title={getLang(
        'What is the area of ​​the room?',
        'Jaka jest powierzchnia pokoju?'
      )}
    >
      <label htmlFor='meter1'>
        <img className='h-36' src={surfaceicon} alt='surface icon' />
      </label>
      {/* <span className='text-6xl'>🔳</span> */}
      <div className='flex w-1/2 items-center justify-center'>
        <MeterInput setSqMeters={setSqMeters} id='meter1' />
      </div>
    </Panel>
  );
};

export default SurfaceInput;

import { FC, useState } from 'react';
import Panel from '../../UI/Panel';
import { brightnessLevel } from '../../../types/types';
import ButtonPrimary from '../../UI/ButtonPrimary';
import { getLang } from '../../../utils/utils';
import kitchen from '../../../assets/icons/kitchen.png';
import bedroom from '../../../assets/icons/bedroom.png';
import livingroom from '../../../assets/icons/livingroom.png';

interface Props {
  stateData: {
    brightnessLevel: brightnessLevel;
    setBrightnessLevel: React.Dispatch<React.SetStateAction<brightnessLevel>>;
  };
}
const BrightnessSelector: FC<Props> = ({
  stateData: { setBrightnessLevel },
}) => {
  const [selected, setSelected] = useState<brightnessLevel>('200');
  const brightnessLevelHandler = (brightness: brightnessLevel) => {
    setBrightnessLevel(brightness);
    setSelected(brightness);
  };

  return (
    <Panel title={getLang('How bright you want it?', 'Jak jasno ma być?')}>
      <div className='flex flex-col items-center justify-center'>
        <ButtonPrimary
          className='flex flex-col items-center justify-center text-7xl'
          onClick={brightnessLevelHandler}
          data='120'
          selected={selected === '120'}
        >
          <img src={bedroom} alt={getLang('Bedroom', 'Sypialnia')} />
        </ButtonPrimary>
        <span className='text-lg font-bold'>
          {getLang('Bedroom', 'Sypialnia')}
        </span>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <ButtonPrimary
          className='flex flex-col items-center justify-center'
          onClick={brightnessLevelHandler}
          data='200'
          selected={selected === '200'}
        >
          <img src={livingroom} alt={getLang('Living room', 'Salon')} />
        </ButtonPrimary>
        <span className='text-lg font-bold'>
          {getLang('Living room', 'Salon')}
        </span>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <ButtonPrimary
          className='flex flex-col items-center justify-center'
          onClick={brightnessLevelHandler}
          data='300'
          selected={selected === '300'}
        >
          <img src={kitchen} alt={getLang('Kitchen', 'Kuchnia')} />
        </ButtonPrimary>
        <span className='text-lg font-bold'>
          {getLang('Kitchen', 'Kuchnia')}
        </span>
      </div>
    </Panel>
  );
};

export default BrightnessSelector;

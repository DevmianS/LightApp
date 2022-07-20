import { FC, useState } from 'react';
import Panel from '../../UI/Panel';
import { brightnessLevel } from '../../../types/types';
import ButtonPrimary from '../../UI/ButtonPrimary';
import { getLang } from '../../../utlis/utlis';

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
      <ButtonPrimary
        className='text-3xl'
        onClick={brightnessLevelHandler}
        data='120'
        selected={selected === '120'}
      >
        💡
      </ButtonPrimary>
      <ButtonPrimary
        className='text-5xl'
        onClick={brightnessLevelHandler}
        data='200'
        selected={selected === '200'}
      >
        💡
      </ButtonPrimary>
      <ButtonPrimary
        className='text-7xl'
        onClick={brightnessLevelHandler}
        data='300'
        selected={selected === '300'}
      >
        💡
      </ButtonPrimary>
    </Panel>
  );
};

export default BrightnessSelector;

import { FC, useState } from 'react';
import Panel from '../../UI/Panel';
import { brightnessLevel } from '../../../types/types';
import ButtonPrimary from '../../UI/ButtonPrimary';

interface Props {
  stateData: {
    brightnessLevel: brightnessLevel;
    setBrightnessLevel: React.Dispatch<React.SetStateAction<brightnessLevel>>;
  };
}
const BrightnessSelector: FC<Props> = ({
  stateData: { setBrightnessLevel },
}) => {
  const [selected, setSelected] = useState<brightnessLevel>('medium');
  const brightnessLevelHandler = (brightness: brightnessLevel) => {
    if (brightness === 'low') {
      setBrightnessLevel('low');
      setSelected('low');
    }
    if (brightness === 'medium') {
      setBrightnessLevel('medium');
      setSelected('medium');
    }
    if (brightness === 'high') {
      setBrightnessLevel('high');
      setSelected('high');
    }
  };

  // const getSize = () => {
  //   if (brightness === 'low') return 'text-3xl';
  //   if (brightness === 'medium') return 'text-5xl';
  //   if (brightness === 'high') return 'text-7xl';
  // };
  return (
    <Panel title='How bright you want it?'>
      <ButtonPrimary
        className='text-3xl'
        onClick={brightnessLevelHandler}
        id='low'
        selected={selected === 'low'}
      >
        💡
      </ButtonPrimary>
      <ButtonPrimary
        className='text-5xl'
        onClick={brightnessLevelHandler}
        id='medium'
        selected={selected === 'medium'}
      >
        💡
      </ButtonPrimary>
      <ButtonPrimary
        className='text-7xl'
        onClick={brightnessLevelHandler}
        id='high'
        selected={selected === 'high'}
      >
        💡
      </ButtonPrimary>
    </Panel>
  );
};

export default BrightnessSelector;

import { FC, useState } from 'react';
import { colorTemp } from '../../../types/types';
import ButtonPrimary from '../../UI/ButtonPrimary';
import Panel from '../../UI/Panel';
import { getLang } from '../../../Utlis/utlis';

interface Props {
  stateData: {
    colorTemp: colorTemp;
    setColorTemp: React.Dispatch<React.SetStateAction<colorTemp>>;
  };
}

const LightTemp: FC<Props> = ({ stateData: { colorTemp, setColorTemp } }) => {
  const [selected, setSelected] = useState<colorTemp>('4000K');

  const colorTempHandler = (temp: colorTemp) => {
    setColorTemp(temp);
    setSelected(temp);
  };
  const colorTemps = ['1800K', '2900K', '4000K', '6000K', '6500K'];

  const renderButtons = () => {
    return colorTemps.map(temp => {
      return (
        <ButtonPrimary
          key={temp}
          id={temp}
          onClick={colorTempHandler}
          selected={selected === temp}
          selectedStyle='shadow-inner  backdrop-blur-lg font-bold text-lg shadow-slate-600'
          className='h-full w-1/5 bg-transparent'
        >
          {temp}
        </ButtonPrimary>
      );
    });
  };

  return (
    <Panel
      title={getLang(
        'Which light color do you want?',
        'Jaka ma być barwa światła?'
      )}
    >
      <div className='flex h-1/2 w-full items-center justify-evenly rounded-md bg-gradient-to-r from-amber-500 via-white to-blue-300'>
        {renderButtons()}
      </div>
    </Panel>
  );
};

export default LightTemp;

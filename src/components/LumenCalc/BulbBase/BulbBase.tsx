import { FC, useState } from 'react';
import { bulbBase } from '../../../types/types';
import ButtonPrimary from '../../UI/ButtonPrimary';
import Panel from '../../UI/Panel';
import { getLang } from '../../../utils/utils';
import e27 from '../../../assets/icons/e27.png';
import e14 from '../../../assets/icons/e14.png';
import gu10 from '../../../assets/icons/gu10.png';
import g9 from '../../../assets/icons/g9.png';
import mr16 from '../../../assets/icons/mr16.png';

interface Props {
  stateData: {
    bulbBase: bulbBase;
    setBulbBase: React.Dispatch<React.SetStateAction<bulbBase>>;
  };
}
const BulbBase: FC<Props> = ({ stateData: { bulbBase, setBulbBase } }) => {
  const [selected, setSelected] = useState<bulbBase>('E27');
  const bulbBaseHandler = (base: bulbBase) => {
    setSelected(base);
    setBulbBase(base);
  };

  return (
    <Panel
      title={getLang(
        'Which light bulb base type?',
        'Jaki masz trzonek żarówki?'
      )}
    >
      <div className='flex h-full items-center gap-4 overflow-x-auto px-2'>
        <div className='flex flex-col items-center justify-center'>
          <ButtonPrimary
            key='E27'
            data='E27'
            className='flex flex-col items-center justify-center'
            onClick={bulbBaseHandler}
            selected={selected === 'E27'}
          >
            <img src={e27} alt='e27' />
          </ButtonPrimary>
          <span className='text-lg font-bold'>E27</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <ButtonPrimary
            key='E14'
            data='E14'
            className='flex flex-col items-center justify-center'
            onClick={bulbBaseHandler}
            selected={selected === 'E14'}
          >
            <img src={e14} alt='e14' />
          </ButtonPrimary>
          <span className='text-lg font-bold'>E14</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <ButtonPrimary
            key='GU10'
            data='GU10'
            className='flex flex-col items-center justify-center'
            onClick={bulbBaseHandler}
            selected={selected === 'GU10'}
          >
            <img src={gu10} alt='GU10' />
          </ButtonPrimary>
          <span className='text-lg font-bold'>GU10</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <ButtonPrimary
            key='MR16/GU5.3'
            data='MR16/GU5.3'
            className='flex flex-col items-center justify-center'
            onClick={bulbBaseHandler}
            selected={selected === 'MR16/GU5.3'}
          >
            <img src={mr16} alt='MR16/GU5.3' />
          </ButtonPrimary>
          <span className='text-lg font-bold'>MR16/GU5.3</span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <ButtonPrimary
            key='G9'
            data='G9'
            className='flex flex-col items-center justify-center'
            onClick={bulbBaseHandler}
            selected={selected === 'G9'}
          >
            <img src={g9} alt='G9' />
          </ButtonPrimary>
          <span className='text-lg font-bold'>G9</span>
        </div>
      </div>
    </Panel>
  );
};

export default BulbBase;

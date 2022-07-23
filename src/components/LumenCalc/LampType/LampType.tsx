import { FC, useState } from 'react';
import { lampType } from '../../../types/types';
import ButtonPrimary from '../../UI/ButtonPrimary';
import Panel from '../../UI/Panel';
import { getLang } from '../../../utils/utils';
import halfvisible from '../../../assets/icons/halfvisible.png';
import open from '../../../assets/icons/open.png';
import closed from '../../../assets/icons/closed.png';

interface Props {
  stateData: {
    lampType: lampType;
    setLampType: React.Dispatch<React.SetStateAction<lampType>>;
  };
}

const LampType: FC<Props> = ({ stateData: { lampType, setLampType } }) => {
  const [selected, setSelected] = useState<lampType>('open');
  const lampTypeHandler = (type: lampType) => {
    setSelected(type);
    setLampType(type);
  };

  return (
    <Panel title={getLang('Lamp type?', 'Typ lampy?')}>
      <div className='flex flex-col items-center justify-center'>
        <ButtonPrimary
          key='open'
          data='open'
          onClick={lampTypeHandler}
          selected={selected === 'open'}
          className='flex flex-col items-center justify-center'
        >
          <img src={open} alt={getLang('open', 'otwarty')} />
        </ButtonPrimary>
        <span className='text-lg font-bold'>{getLang('Open', 'Otwarty')}</span>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <ButtonPrimary
          key='semi'
          data='semi'
          onClick={lampTypeHandler}
          selected={selected === 'semi'}
          className='flex flex-col items-center justify-center'
        >
          <img
            src={halfvisible}
            alt={getLang('semi transparent', 'półprzezroczysty')}
          />
        </ButtonPrimary>
        <span className='text-lg font-bold'>
          {getLang('Semi open', 'Półotwarty')}
        </span>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <ButtonPrimary
          key='closed'
          data='closed'
          onClick={lampTypeHandler}
          selected={selected === 'closed'}
          className='flex flex-col items-center justify-center'
        >
          <img src={closed} alt={getLang('closed', 'zamknięty')} />
        </ButtonPrimary>
        <span className='text-lg font-bold'>
          {getLang('Closed', 'Zamknięty')}
        </span>
      </div>
    </Panel>
  );
};

export default LampType;

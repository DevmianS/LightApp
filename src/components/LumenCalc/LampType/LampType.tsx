import { FC, useState } from 'react';
import { lampType } from '../../../types/types';
import ButtonPrimary from '../../UI/ButtonPrimary';
import Panel from '../../UI/Panel';

interface Props {
  stateData: {
    lampType: lampType;
    setLampType: React.Dispatch<React.SetStateAction<lampType>>;
  };
}

const LampType: FC<Props> = ({ stateData: { lampType, setLampType } }) => {
  const [selected, setSelected] = useState<lampType>('semi');
  const lampTypes = ['open', 'semi', 'closed'];
  const lampTypeHandler = (type: lampType) => {
    setSelected(type);
    setLampType(type);
  };

  const renderButtons = () => {
    return lampTypes.map(type => {
      return (
        <ButtonPrimary
          key={type}
          id={type}
          onClick={lampTypeHandler}
          selected={selected === type}
          className='flex flex-col items-center justify-center'
        >
          <span className='text-4xl'>💡</span>
        </ButtonPrimary>
      );
    });
  };

  return <Panel title='Lamp type?'>{renderButtons()}</Panel>;
};

export default LampType;

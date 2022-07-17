import { FC, useState } from 'react';
import { bulbBase } from '../../../types/types';
import ButtonPrimary from '../../UI/ButtonPrimary';
import Panel from '../../UI/Panel';

interface Props {
  stateData: {
    bulbBase: bulbBase;
    setBulbBase: React.Dispatch<React.SetStateAction<bulbBase>>;
  };
}
const BulbBase: FC<Props> = ({ stateData: { bulbBase, setBulbBase } }) => {
  const [selected, setSelected] = useState<bulbBase>();
  const bulbBases = ['G9', 'GU10', 'MR16', 'E14', 'E27'];
  const bulbBaseHandler = (base: bulbBase) => {
    setSelected(base);
    setBulbBase(base);
  };

  const renderButtons = () => {
    return bulbBases.map(base => {
      return (
        <ButtonPrimary
          key={base}
          id={base}
          className='flex flex-col items-center justify-center'
          onClick={bulbBaseHandler}
          selected={selected === base}
        >
          <span className='text-4xl'>💡</span>
          <span>{base}</span>
        </ButtonPrimary>
      );
    });
  };

  return (
    <Panel title='Which light bulb base type?'>
      <div className='flex h-full items-center gap-4 overflow-x-auto px-2'>
        {renderButtons()}
      </div>
    </Panel>
  );
};

export default BulbBase;

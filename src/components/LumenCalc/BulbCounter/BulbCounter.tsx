import { FC } from 'react';
import { bulbsCountTypes } from '../../../types/types';
import Panel from '../../UI/Panel';

interface Props {
  stateData: {
    bulbCount: number;
    setBulbCount: React.Dispatch<React.SetStateAction<number>>;
  };
}
const BulbCounter: FC<Props> = ({ stateData: { bulbCount, setBulbCount } }) => {
  const bulbCountHandler = (addOrSubt: boolean) => {
    const maxVal = 10;
    const minVal = 1;
    if (addOrSubt && bulbCount < maxVal) {
      setBulbCount(prevState => prevState + 1);
    } else if (!addOrSubt && bulbCount > minVal) {
      setBulbCount(prevState => prevState - 1);
    }
  };

  return (
    <Panel title='How many light bulbs?'>
      <div className='flex w-1/2 justify-evenly'>
        <span className='text-6xl'>💡</span>
        <span className='text-7xl font-bold'>{bulbCount}</span>
      </div>
      <div className='flex w-1/2 flex-col items-center gap-1 '>
        <button
          onClick={() => {
            bulbCountHandler(true);
          }}
          className='text-4xl'
        >
          🔼
        </button>
        <button
          onClick={() => {
            bulbCountHandler(false);
          }}
          className='text-4xl'
        >
          🔽
        </button>
      </div>
    </Panel>
  );
};

export default BulbCounter;

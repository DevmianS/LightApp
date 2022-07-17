import { FC } from 'react';
import ButtonPrimary from '../../UI/ButtonPrimary';
import Panel from '../../UI/Panel';

interface Props {
  stateData: {
    bulbCount: number;
    setBulbCount: React.Dispatch<React.SetStateAction<number>>;
  };
}
const BulbCounter: FC<Props> = ({ stateData: { bulbCount, setBulbCount } }) => {
  const bulbCountHandler = (addOrSubt: boolean) => {
    const maxVal = 15;
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
        <ButtonPrimary
          className='h-16 w-16 text-4xl'
          onClick={() => {
            bulbCountHandler(true);
          }}
        >
          🔼
        </ButtonPrimary>
        <ButtonPrimary
          className='h-16 w-16 text-4xl'
          onClick={() => {
            bulbCountHandler(false);
          }}
        >
          🔽
        </ButtonPrimary>
      </div>
    </Panel>
  );
};

export default BulbCounter;

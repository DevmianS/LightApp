import { FC } from 'react';
import ButtonPrimary from '../../UI/ButtonPrimary';
import Panel from '../../UI/Panel';
import { getLang } from '../../../utils/utils';
import bulb from '../../../assets/icons/bulb.svg';
import arrowup from '../../../assets/icons/arrowup.svg';
import arrowdown from '../../../assets/icons/arrowdown.svg';
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
    <Panel
      title={getLang('How many light bulbs?', 'Ile żarówek potrzebujesz?')}
    >
      <div className='relative flex w-1/2 items-end justify-evenly'>
        {/* <span className='text-6xl'>💡</span> */}
        <img className='h-36' src={bulb} alt='' />
        <span className='absolute pb-12 text-5xl font-bold'>{bulbCount}</span>
      </div>
      <div className='flex w-1/2 flex-col items-center gap-1 '>
        <ButtonPrimary
          className='h-16 w-16 text-4xl'
          onClick={() => {
            bulbCountHandler(true);
          }}
        >
          <img src={arrowup} alt='' />
        </ButtonPrimary>
        <ButtonPrimary
          className='h-16 w-16 text-4xl'
          onClick={() => {
            bulbCountHandler(false);
          }}
        >
          <img src={arrowdown} alt='' />
        </ButtonPrimary>
      </div>
    </Panel>
  );
};

export default BulbCounter;

import { FC } from 'react';
import {
  brightnessLevel,
  bulbBase,
  colorTemp,
  lampType,
} from '../../types/types';
import { getLang } from '../../utils/utils';
import Controls from '../LumenCalc/Controls/Controls';
import ResultTile from './ResultTile';

interface Props {
  stateData: {
    bulbCount: number;
    sqMeters: number;
    brightnessLevel: brightnessLevel;
    colorTemp: colorTemp;
    bulbBase: bulbBase;
    lampType: lampType;
  };
  resultVisibility: {
    resultIsVisible: boolean;
    setResultIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const ResultWindow: FC<Props> = ({
  stateData: {
    bulbBase,
    sqMeters,
    brightnessLevel,
    colorTemp,
    bulbCount,
    lampType,
  },
  resultVisibility: { resultIsVisible, setResultIsVisible },
}) => {
  const resultWindowHandler = () => {
    setResultIsVisible(!resultIsVisible);
  };

  const calcTemp = () => {
    if (colorTemp === '1800K') return 'left-[5%]';
    if (colorTemp === '2700K') return 'left-[15%]';
    if (colorTemp === '4000K') return 'left-[50%]';
    if (colorTemp === '6000K') return 'left-[70%]';
    if (colorTemp === '6500K') return 'left-[92%]';
  };

  const getLampType = (val: number) => {
    //lamp type to additional lumen percent per bulb
    if (lampType === 'closed') return val * 0.4;
    if (lampType === 'semi') return val * 0.2;
    else return 0;
  };

  const calculator = () => {
    const roundToTen = (num: number) => {
      return Math.ceil(num / 10) * 10;
    };

    const lumensPerSqMeter = sqMeters * +brightnessLevel;
    const lumensPlusLampType = getLampType(lumensPerSqMeter);
    const lumensPerBulb = (lumensPerSqMeter + lumensPlusLampType) / bulbCount;
    return roundToTen(lumensPerBulb);
  };
  return (
    <div
      className={`fixed bottom-0 left-0 flex h-96 w-full translate-y-[338px] flex-col items-center justify-between rounded-t-2xl bg-gray-700 shadow-xl transition-all duration-500 ease-in  ${
        resultIsVisible ? 'translate-y-[0px]' : ''
      }`}
    >
      <Controls />
      <button
        onClick={resultWindowHandler}
        className='absolute -top-1 my-2 h-10 w-1/3  rounded-full  bg-gray-800 text-lg font-bold  uppercase text-slate-200'
      >
        {getLang('Result', 'Wynik')}
      </button>
      <div className='grid h-[85%] w-11/12 grid-cols-2 grid-rows-2 items-center justify-center gap-4 rounded-t-2xl bg-slate-400 p-2'>
        <ResultTile data={{ title: getLang('Bulbs count', 'Ilość żarówek') }}>
          <span className='text-center font-semibold'>{bulbCount}x💡</span>
        </ResultTile>
        <ResultTile
          data={{ title: getLang('Base type', 'Typ trzonka / gwintu') }}
        >
          <span className='text-center text-2xl font-semibold'>{bulbBase}</span>
        </ResultTile>
        <ResultTile data={{ title: getLang('Lumens', 'Lumeny') }}>
          <span className='text-center font-semibold'>{calculator()}lm</span>
        </ResultTile>
        <ResultTile
          data={{ title: getLang('Color of light', 'Kolor światła') }}
        >
          <div className='relative h-4 w-24 border border-solid border-black bg-gradient-to-r from-amber-500 via-white to-blue-300'>
            <div
              className={`absolute -top-1 h-6 w-[3px] bg-black ${calcTemp()}`}
            ></div>
          </div>
          <span className='text-lg'>{colorTemp}</span>
        </ResultTile>
      </div>
    </div>
  );
};

export default ResultWindow;

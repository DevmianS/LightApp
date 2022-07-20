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
    if (colorTemp === '2900K') return 'left-[15%]';
    if (colorTemp === '4000K') return 'left-[50%]';
    if (colorTemp === '6000K') return 'left-[70%]';
    if (colorTemp === '6500K') return 'left-[92%]';
  };
  const calculator = () => {
    // const getBrightnessLumens = () => {
    //   if (brightnessLevel === 'low') return 100;
    //   if (brightnessLevel === 'high') return 300;
    //   else return 150;
    // };
    // const lumenPerMeter = getBrightnessLumens();
    return Math.round((sqMeters * +brightnessLevel) / bulbCount);
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
        <ResultTile data={{ title: getLang('Base type', 'Rodzaj trzonka') }}>
          <span className='text-center font-semibold'>{bulbBase}</span>
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

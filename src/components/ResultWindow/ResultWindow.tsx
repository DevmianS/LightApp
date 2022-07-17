import { FC, useState } from 'react';
import {
  brightnessLevel,
  bulbBase,
  colorTemp,
  lampType,
} from '../../types/types';

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
  return (
    <div
      className={`fixed bottom-0 left-0 flex h-1/2 w-full  translate-y-[90%] items-center justify-center rounded-t-2xl bg-gray-600 shadow-xl transition-all duration-500 ease-in ${
        resultIsVisible ? 'translate-y-0' : ''
      }`}
    >
      <div
        onClick={resultWindowHandler}
        className='absolute top-4 my-2 h-1.5 w-1/3 rounded-full bg-black'
      ></div>
      <div className='flex h-4/5 w-11/12 flex-col items-center justify-center rounded-2xl bg-slate-400'>
        <span className='text-center font-semibold'>
          You need {bulbCount}x💡 with {bulbBase} base type,
          {Math.round((sqMeters * 140) / bulbCount)} lumens and color value of
        </span>

        <div className='flex flex-col items-center justify-center gap-1'>
          <div className='relative h-4 w-24 border border-solid border-black bg-gradient-to-r from-amber-500 via-white to-blue-300'>
            <div
              className={`absolute -top-1 h-6 w-[3px] bg-black ${calcTemp()}`}
            ></div>
          </div>
          {colorTemp}
        </div>
        {/* <span>BulbCount: {bulbCount}</span>
        <span>BulbBase: {bulbBase}</span>
        <span>Lumens: {Math.round((sqMeters * 140) / bulbCount)}lm</span>
        <span>Color temperature: {colorTemp}</span>
        <div className='bg-gradient-to-r from-amber-500 via-white to-blue-300'></div>
        <br></br> */}
      </div>
    </div>
  );
};

export default ResultWindow;

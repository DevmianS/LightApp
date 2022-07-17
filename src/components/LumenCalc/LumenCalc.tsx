import { Fragment, useEffect, useState } from 'react';
import ResultWindow from '../ResultWindow/ResultWindow';
import BulbBase from './BulbBase/BulbBase';
import BulbCounter from './BulbCounter/BulbCounter';
import SurfaceInput from './SurfaceInput/SurfaceInput';
import BrightnessSelector from './BrightnessSelector/BrightnessSelector';
import LampType from './LampType/LampType';
import LightTemp from './LightTemp/LightTemp';

import { brightnessLevel } from '../../types/types';
const LumenCalc = () => {
  const [bulbCount, setBulbCount] = useState(1);
  const [sqMeters, setSqMeters] = useState(1);
  const [brightnessLevel, setBrightnessLevel] =
    useState<brightnessLevel>('medium');
  useEffect(() => {
    console.log(brightnessLevel);
  }, [brightnessLevel]);

  return (
    <Fragment>
      <div className='rounded-3xlp-5 flex h-full w-full flex-col items-center gap-4 bg-gray-200 pb-12 pt-6 '>
        <BulbCounter stateData={{ bulbCount, setBulbCount }} />
        <SurfaceInput stateData={{ sqMeters, setSqMeters }}></SurfaceInput>
        <BrightnessSelector
          stateData={{ brightnessLevel, setBrightnessLevel }}
        ></BrightnessSelector>
        <LampType></LampType>
        <BulbBase />
        <LightTemp></LightTemp>
      </div>
      <ResultWindow />
    </Fragment>
  );
};

export default LumenCalc;

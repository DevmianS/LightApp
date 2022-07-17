import { Fragment, useEffect, useState } from 'react';
import ResultWindow from '../ResultWindow/ResultWindow';
import BulbBase from './BulbBase/BulbBase';
import BulbCounter from './BulbCounter/BulbCounter';
import SurfaceInput from './SurfaceInput/SurfaceInput';
import BrightnessSelector from './BrightnessSelector/BrightnessSelector';
import LampType from './LampType/LampType';
import LightTemp from './LightTemp/LightTemp';

import { brightnessLevel, bulbBase, colorTemp } from '../../types/types';
const LumenCalc = () => {
  const [bulbCount, setBulbCount] = useState(1);
  const [sqMeters, setSqMeters] = useState(1);
  const [brightnessLevel, setBrightnessLevel] =
    useState<brightnessLevel>('medium');
  const [colorTemp, setColorTemp] = useState<colorTemp>('4000K');
  const [bulbBase, setBulbBase] = useState<bulbBase>('E27');

  useEffect(() => {
    console.log(colorTemp, brightnessLevel);
  }, [brightnessLevel, colorTemp]);

  return (
    <Fragment>
      <div className='rounded-3xlp-5 flex h-full w-full flex-col items-center gap-2 bg-gray-200 pb-12 pt-6 '>
        <BulbCounter stateData={{ bulbCount, setBulbCount }} />
        <SurfaceInput stateData={{ sqMeters, setSqMeters }} />
        <BrightnessSelector
          stateData={{ brightnessLevel, setBrightnessLevel }}
        />
        <BulbBase stateData={{ bulbBase, setBulbBase }} />
        <LampType />
        <LightTemp stateData={{ colorTemp, setColorTemp }} />
      </div>
      <ResultWindow />
    </Fragment>
  );
};

export default LumenCalc;

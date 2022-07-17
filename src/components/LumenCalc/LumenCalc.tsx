import { Fragment, useEffect, useState } from 'react';
import ResultWindow from '../ResultWindow/ResultWindow';
import BulbBase from './BulbBase/BulbBase';
import BulbCounter from './BulbCounter/BulbCounter';
import SurfaceInput from './SurfaceInput/SurfaceInput';
import BrightnessSelector from './BrightnessSelector/BrightnessSelector';
import LampType from './LampType/LampType';
import LightTemp from './LightTemp/LightTemp';

import {
  brightnessLevel,
  bulbBase,
  colorTemp,
  lampType,
} from '../../types/types';
const LumenCalc = () => {
  const [bulbCount, setBulbCount] = useState(1);
  const [sqMeters, setSqMeters] = useState(1);
  const [brightnessLevel, setBrightnessLevel] =
    useState<brightnessLevel>('medium');
  const [colorTemp, setColorTemp] = useState<colorTemp>('4000K');
  const [bulbBase, setBulbBase] = useState<bulbBase>('E27');
  const [lampType, setLampType] = useState<lampType>('semi');
  const [resultIsVisible, setResultIsVisible] = useState(false);

  useEffect(() => {
    console.log(colorTemp, brightnessLevel);
  }, [brightnessLevel, colorTemp]);

  return (
    <Fragment>
      <div
        className={`rounded-3xlp-5 flex h-full w-full flex-col items-center gap-2 bg-gray-200 pb-12 pt-6 transition-all`}
      >
        <SurfaceInput stateData={{ sqMeters, setSqMeters }} />
        <BulbCounter stateData={{ bulbCount, setBulbCount }} />
        <BrightnessSelector
          stateData={{ brightnessLevel, setBrightnessLevel }}
        />
        <BulbBase stateData={{ bulbBase, setBulbBase }} />
        {bulbBase === ('E27' || 'E14') && (
          <LampType stateData={{ lampType, setLampType }} />
        )}
        <LightTemp stateData={{ colorTemp, setColorTemp }} />
      </div>
      <ResultWindow
        stateData={{
          bulbBase,
          sqMeters,
          brightnessLevel,
          colorTemp,
          bulbCount,
          lampType,
        }}
        resultVisibility={{ resultIsVisible, setResultIsVisible }}
      />
    </Fragment>
  );
};

export default LumenCalc;

import { Fragment, useContext, useEffect, useState } from 'react';
import ResultWindow from '../ResultWindow/ResultWindow';
import BulbBase from './BulbBase/BulbBase';
import BulbCounter from './BulbCounter/BulbCounter';
import SurfaceInput from './SurfaceInput/SurfaceInput';
import BrightnessSelector from './BrightnessSelector/BrightnessSelector';
import LampType from './LampType/LampType';
import LightTemp from './LightTemp/LightTemp';
import { DarkModeContext } from '../../store/theme-context';
import LangContext from '../../store/lang-context';

import {
  brightnessLevel,
  bulbBase,
  colorTemp,
  lampType,
} from '../../types/types';
import Footer from '../Footer/Footer';
const LumenCalc = () => {
  const [bulbCount, setBulbCount] = useState(1);
  const [sqMeters, setSqMeters] = useState(1);
  const [brightnessLevel, setBrightnessLevel] =
    useState<brightnessLevel>('200');
  const [colorTemp, setColorTemp] = useState<colorTemp>('4000K');
  const [bulbBase, setBulbBase] = useState<bulbBase>('E27');
  const [lampType, setLampType] = useState<lampType>('semi');
  const [resultIsVisible, setResultIsVisible] = useState(false);
  const themeCtx = useContext(DarkModeContext);

  return (
    <LangContext>
      <div
        className={`flex h-full w-full flex-col items-center gap-2 rounded-b-3xl py-6 transition-all md:grid md:grid-cols-2 md:rounded-t-3xl  ${
          themeCtx.darkModeIsOn ? 'bg-gray-800' : 'bg-gray-200'
        }`}
      >
        <SurfaceInput stateData={{ sqMeters, setSqMeters }} />
        <BulbCounter stateData={{ bulbCount, setBulbCount }} />
        <BrightnessSelector
          stateData={{ brightnessLevel, setBrightnessLevel }}
        />
        <BulbBase stateData={{ bulbBase, setBulbBase }} />
        {(bulbBase === 'E27' || bulbBase === 'E14') && (
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
      <Footer></Footer>
    </LangContext>
  );
};

export default LumenCalc;

import { Fragment, useEffect, useState } from 'react';
import ResultWindow from '../ResultWindow/ResultWindow';
import BulbBase from './BulbBase/BulbBase';
import BulbCounter from './BulbCounter/BulbCounter';
import SurfaceInput from './SurfaceInput/SurfaceInput';
import cl from './LumenCalc.module.scss';
import BrightnessSelector from './BrightnessSelector/BrightnessSelector';
import LampType from './LampType/LampType';
import LightTemp from './LightTemp/LightTemp';

import { bulbsCountTypes } from '../../types/types';
const LumenCalc = () => {
  const [bulbCount, setBulbCount] = useState(1);

  return (
    <Fragment>
      <div className='rounded-3xlp-5 flex h-full w-full flex-col items-center gap-4 bg-gray-200 py-12 '>
        <BulbCounter stateData={{ bulbCount, setBulbCount }} />
        <SurfaceInput></SurfaceInput>
        <BrightnessSelector></BrightnessSelector>
        <LampType></LampType>
        <BulbBase />
        <LightTemp></LightTemp>
      </div>
      <ResultWindow />
    </Fragment>
  );
};

export default LumenCalc;

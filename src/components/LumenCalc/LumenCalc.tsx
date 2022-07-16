import { Fragment } from 'react';
import ResultWindow from '../ResultWindow/ResultWindow';
import BulbBase from './BulbBase/BulbBase';
import BulbCounter from './BulbCounter/BulbCounter';
import SurfaceInput from './SurfaceInput/SurfaceInput';
import cl from './LumenCalc.module.scss';
import BrightnessSelector from './BrightnessSelector/BrightnessSelector';
import LampType from './LampType/LampType';
import LightTemp from './LightTemp/LightTemp';
const LumenCalc = () => {
  return (
    <Fragment>
      <div className='rounded-3xlp-5 flex h-full w-full flex-col items-center gap-4 bg-gray-200 py-12 '>
        <BulbCounter />
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

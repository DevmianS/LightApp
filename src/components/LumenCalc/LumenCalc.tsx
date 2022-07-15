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
      <div className='flex h-full w-full flex-col gap-4 rounded-3xl bg-amber-100 p-5 pb-12'>
        <LightTemp></LightTemp>
        <BulbCounter />
        <BulbBase />
        <SurfaceInput></SurfaceInput>
        <BrightnessSelector></BrightnessSelector>
        <LampType></LampType>
      </div>
      <ResultWindow />
    </Fragment>
  );
};

export default LumenCalc;

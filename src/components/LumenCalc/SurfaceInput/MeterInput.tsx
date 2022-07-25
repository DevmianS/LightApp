import { FC, Fragment, useRef } from 'react';

interface Props {
  id: string;
  setSqMeters: React.Dispatch<React.SetStateAction<number>>;
}
const MeterInput: FC<Props> = ({ id, setSqMeters }) => {
  const meterInputRef = useRef<HTMLInputElement>(null);
  return (
    <Fragment>
      <input
        ref={meterInputRef}
        onChange={() => {
          if (meterInputRef.current) {
            let val = +meterInputRef.current.value;
            if (val > 40) {
              meterInputRef.current.value = '40';
              val = +meterInputRef.current.value;
              setSqMeters(prev => (prev = val));
            } else if (val < 1) {
              meterInputRef.current.value = '';
              val = +meterInputRef.current.value;
              setSqMeters(prev => (prev = val));
            } else {
              setSqMeters(prev => (prev = val));
            }
          }
        }}
        onKeyDown={evt =>
          ['e', 'E', '+', '-'].includes(evt.key) && evt.preventDefault()
        }
        id={id}
        type='number'
        min='1'
        max='40'
        placeholder='1'
        className='h-20 w-[90px] rounded-md bg-transparent bg-slate-300 text-center text-7xl font-bold'
      ></input>
      <span className='text-7xl font-bold'>m²</span>
    </Fragment>
  );
};

export default MeterInput;

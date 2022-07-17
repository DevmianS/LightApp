import { FC } from 'react';

interface Props {
  id: string;
}
const MeterInput: FC<Props> = ({ id }) => {
  return (
    <input
      id={id}
      type='number'
      min='1'
      max='10'
      placeholder='0m'
      className='h-20 w-20 bg-transparent text-center text-4xl'
    ></input>
  );
};

export default MeterInput;

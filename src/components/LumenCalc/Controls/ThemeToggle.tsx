import { FC } from 'react';

interface Props {
  onOff: boolean;
  onClick: (darkModeIsOn: boolean) => void;
}
const ThemeToggle: FC<Props> = ({ onOff, onClick }) => {
  return (
    <button
      className='relative flex h-9 w-20 items-center overflow-hidden rounded-3xl bg-slate-800 px-2 text-center text-2xl'
      onClick={() => {
        onClick(!onOff);
      }}
    >
      <div
        className={`absolute z-10 h-6 w-6 rounded-full bg-slate-800 transition-all delay-100 duration-500 ${
          !onOff ? 'translate-x-8' : '-translate-x-8 delay-[0ms] duration-700'
        }`}
      ></div>
      <div
        className={`h-7 w-7 rounded-full bg-yellow-500 transition-all duration-700 ease-in-out ${
          !onOff && 'translate-x-9'
        }`}
      ></div>
    </button>
  );
};

export default ThemeToggle;

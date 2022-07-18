import { useContext } from 'react';
import { DarkModeContext } from '../../../store/theme-context';
import ThemeToggle from './ThemeToggle';
const Controls = () => {
  const themeCtx = useContext(DarkModeContext);
  return (
    <div className='fixed top-0 right-0 flex h-11 w-full  items-center justify-between rounded-bl-2xl  px-6'>
      <button
        className='relative flex h-10 w-10 overflow-hidden text-center text-2xl'
        onClick={() => {
          themeCtx.setDarkModeIsOn(!themeCtx.darkModeIsOn);
        }}
      >
        <span
          className={`absolute right-0 left-0 ml-auto mr-auto h-10 w-10 transition-all ${
            !themeCtx.darkModeIsOn && '-translate-y-10'
          }`}
        >
          ☀
        </span>
        <span
          className={`absolute left-[50%] ml-auto mr-auto h-10 w-10 translate-x-[50%] transition-all ${
            themeCtx.darkModeIsOn && 'translate-y-10'
          }`}
        >
          🌙
        </span>
      </button>
      <ThemeToggle
        onClick={themeCtx.setDarkModeIsOn}
        onOff={themeCtx.darkModeIsOn}
      ></ThemeToggle>
    </div>
  );
};

export default Controls;

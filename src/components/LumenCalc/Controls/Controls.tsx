import { useContext } from 'react';
import { DarkModeContext } from '../../../store/theme-context';
import { LangContext } from '../../../store/lang-context';
import LangToggle from './LangToggle';
import ThemeToggle from './ThemeToggle';
const Controls = () => {
  const themeCtx = useContext(DarkModeContext);
  const langCtx = useContext(LangContext);
  return (
    <div className='top-0 right-0 flex h-12 w-full  items-center justify-between rounded-bl-2xl  px-6'>
      <LangToggle
        onClick={langCtx.setLanguage}
        lang={langCtx.language}
      ></LangToggle>
      <ThemeToggle
        onClick={themeCtx.setDarkModeIsOn}
        onOff={themeCtx.darkModeIsOn}
      ></ThemeToggle>
    </div>
  );
};

export default Controls;

import { FC, useContext } from 'react';
import EN from '../../../assets/icons/EN.png';
import PL from '../../../assets/icons/PL.png';
import { LangContext } from '../../../store/lang-context';

interface Props {
  lang: 'EN' | 'PL';
  onClick: (lang: 'EN' | 'PL') => void;
}
const LangToggle: FC<Props> = ({ lang, onClick }) => {
  const langCtx = useContext(LangContext);
  const getLang = () => {
    if (lang === 'EN') return 'PL';
    else return 'EN';
  };

  return (
    <button
      className='relative flex h-9 w-20 items-center overflow-hidden rounded-3xl bg-slate-800 px-2 text-center text-2xl'
      onClick={() => {
        onClick(getLang());
      }}
    >
      <img
        src={langCtx.language === 'EN' ? PL : EN}
        className={`h-7 w-7 rounded-full transition-all duration-700 ease-in-out ${
          lang === 'PL' && 'translate-x-9'
        }`}
      ></img>
    </button>
  );
};

export default LangToggle;

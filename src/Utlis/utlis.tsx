import { useContext } from 'react';
import { LangContext } from '../store/lang-context';

export const getLang = (en: string, pl: string) => {
  const langCtx = useContext(LangContext);
  if (langCtx.language === 'PL') return pl;
  else return en;
};

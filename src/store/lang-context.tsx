import React, { useState } from 'react';

interface Props {
  language: 'EN' | 'PL';
  setLanguage: (lang: 'EN' | 'PL') => void;
}

export const LangContext = React.createContext<Props>({
  language: 'EN',
  setLanguage: () => {},
});

export default (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [language, setLanguage] = useState<'EN' | 'PL'>('EN');
  return (
    <LangContext.Provider value={{ language: language, setLanguage }}>
      {props.children}
    </LangContext.Provider>
  );
};

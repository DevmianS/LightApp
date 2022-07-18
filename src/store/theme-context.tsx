import React, { useState } from 'react';

export const DarkModeContext = React.createContext({
  darkModeIsOn: false,
  setDarkModeIsOn: (darkModeIsOn: boolean) => {},
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
  const [darkModeIsOn, setDarkModeIsOn] = useState(false);
  return (
    <DarkModeContext.Provider
      value={{ darkModeIsOn: darkModeIsOn, setDarkModeIsOn }}
    >
      {props.children}
    </DarkModeContext.Provider>
  );
};

import { useContext } from 'react';
import LumenCalc from './components/LumenCalc/LumenCalc';
import DarkModeContextProvider from './store/theme-context';

function App() {
  return (
    <DarkModeContextProvider>
      <LumenCalc />;
    </DarkModeContextProvider>
  );
}

export default App;

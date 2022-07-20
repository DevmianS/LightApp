import { FC, useContext } from 'react';
import { DarkModeContext } from '../../store/theme-context';
interface Props {
  title: string;
  children: any;
  className?: string;
}
const Panel: FC<Props> = props => {
  const themeCtx = useContext(DarkModeContext);
  return (
    <div
      className={`relative mb-4 grid min-h-[200px] w-11/12 grid-cols-1 grid-rows-[1fr_5fr] justify-self-center  rounded-xl  p-2 drop-shadow-md transition-colors duration-700 ${
        themeCtx.darkModeIsOn ? 'bg-gray-600' : 'bg-gray-100'
      } ${props.className}`}
    >
      <span className='flex items-center justify-center rounded-md bg-slate-300 text-center drop-shadow-sm'>
        <p>{props.title}</p>
      </span>
      <div className='flex h-full w-full items-center justify-evenly'>
        {props.children}
      </div>
    </div>
  );
};

export default Panel;

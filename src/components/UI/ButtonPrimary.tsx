import { FC } from 'react';
// import { brightnessLevel } from '../../../types/types';

interface Props {
  onClick: any;
  selected?: boolean;
  className?: string;
  data?: string;
  children: any;
  selectedStyle?: string;
}
const ButtonPrimary: FC<Props> = ({
  onClick,
  selected,
  data,
  children,
  className,
  selectedStyle = 'z-10 scale-90 bg-amber-500 shadow-inner font-bold shadow-slate-600',
}) => {
  return (
    <button
      data-data={data}
      onClick={() => {
        onClick(data);
      }}
      className={`h-24 w-24 flex-shrink-0 rounded-2xl bg-slate-400 text-center transition-all active:scale-90 active:drop-shadow-sm ${
        selected && selectedStyle
      } ${!selected && 'drop-shadow-lg'} ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;

import { FC } from 'react';
// import { brightnessLevel } from '../../../types/types';

interface Props {
  onClick: any;
  selected?: boolean;
  className?: string;
  id?: string;
  children: string;
}
const ButtonPrimary: FC<Props> = ({
  onClick,
  selected,
  id,
  children,
  className,
}) => {
  return (
    <button
      id={id}
      onClick={() => {
        onClick(id);
      }}
      className={`h-24 w-24 flex-shrink-0 rounded-3xl bg-slate-400 text-center drop-shadow-sm transition-all ${
        selected && 'z-10 scale-110 bg-amber-500 drop-shadow-xl'
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;

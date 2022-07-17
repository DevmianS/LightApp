import { FC } from 'react';

interface Props {
  size: 'small' | 'medium' | 'large';
}
const BrightnessButton: FC<Props> = ({ size }) => {
  const getSize = () => {
    if (size === 'small') return 'text-3xl';
    if (size === 'medium') return 'text-5xl';
    if (size === 'large') return 'text-7xl';
  };

  return (
    <button
      className={`${getSize()} h-full w-2/6 flex-shrink-0 rounded-3xl bg-slate-400 p-5 text-center`}
    >
      💡
    </button>
  );
};

export default BrightnessButton;

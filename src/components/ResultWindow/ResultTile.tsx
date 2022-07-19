import { FC } from 'react';

interface Props {
  data: {
    title: string;
  };
  children: any;
}

const ResultTile: FC<Props> = ({ data: { title }, children }) => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-between justify-self-center rounded-2xl bg-slate-500 py-10'>
      <div className='flex flex-col items-center justify-center gap-1 text-3xl font-bold'>
        {children}
      </div>
      <span className='text-center text-xl font-semibold'>{title}</span>
    </div>
  );
};

export default ResultTile;

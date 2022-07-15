const Panel = props => {
  return (
    <div
      className={` relative mb-4 grid min-h-[200px] w-full grid-cols-1 grid-rows-[1fr_5fr] rounded-2xl bg-amber-300 p-2 drop-shadow-lg ${props.className}`}
    >
      <span className='flex items-center justify-center text-center'>
        <p>{props.title}</p>
      </span>
      <div className='flex h-full w-full items-center justify-evenly'>
        {props.children}
      </div>
    </div>
  );
};

export default Panel;

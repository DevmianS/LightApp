const Panel = props => {
  return (
    <div className='flex h-1/5 w-full items-center justify-center  rounded-2xl bg-amber-300'>
      {props.children}
    </div>
  );
};

export default Panel;

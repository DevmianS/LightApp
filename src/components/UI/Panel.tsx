const Panel = props => {
  return (
    <div
      className={` relative mb-4  flex h-1/5 min-h-[200px] w-full flex-row items-center  justify-center rounded-2xl bg-amber-300 drop-shadow-lg ${props.classes}`}
    >
      {props.children}
    </div>
  );
};

export default Panel;

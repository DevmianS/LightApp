const MeterInput = props => {
  return (
    <input
      id={props.id}
      type='number'
      min='1'
      max='10'
      placeholder='0m'
      className='h-14 w-14 text-center text-4xl'
    ></input>
  );
};

export default MeterInput;

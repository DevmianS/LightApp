const BrightnessButton = props => {
  const getSize = () => {
    if (props.size === 'small') return 'text-3xl';
    if (props.size === 'medium') return 'text-5xl';
    if (props.size === 'big') return 'text-7xl';
  };

  return (
    <button
      className={`${getSize()} h-full w-full rounded-3xl bg-amber-700 p-5`}
    >
      💡
    </button>
  );
};

export default BrightnessButton;

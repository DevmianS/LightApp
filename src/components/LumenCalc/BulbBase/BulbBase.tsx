import Panel from '../../UI/Panel';

const BulbBase = () => {
  return (
    <Panel title='Which light bulb base type?'>
      <div className='flex w-full justify-evenly'>
        <p>E27</p>
        <p>E14</p>
        <p>GU10</p>
        <p>G9</p>
      </div>
    </Panel>
  );
};

export default BulbBase;

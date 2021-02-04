import { IActionBarProps } from '../interfaces';
import { useActions } from '../hooks/useActions';

const ActionBar: React.FC<IActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div>
      <button onClick={() => moveCell(id, 'up')}>UP</button>
      <button onClick={() => moveCell(id, 'down')}>DOWN</button>
      <button onClick={() => deleteCell(id)}>DELETE</button>
    </div>
  );
};

export default ActionBar;

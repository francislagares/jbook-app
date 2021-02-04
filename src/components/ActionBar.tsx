import { IActionBarProps } from '../interfaces';
import { useActions } from '../hooks/useActions';
import './ActionBar.css';

const ActionBar: React.FC<IActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  // TODO: Create a reusable button component
  return (
    <div className="action-bar">
      <button
        className="button is-primary is-small"
        onClick={() => moveCell(id, 'up')}
      >
        <span className="icon">
          <i className="fas fa-arrow-up" />
        </span>
      </button>
      <button
        className="button is-primary is-small"
        onClick={() => moveCell(id, 'down')}
      >
        <span className="icon">
          <i className="fas fa-arrow-down" />
        </span>
      </button>
      <button
        className="button is-primary is-small"
        onClick={() => deleteCell(id)}
      >
        <span className="icon">
          <i className="fas fa-times" />
        </span>
      </button>
    </div>
  );
};

export default ActionBar;

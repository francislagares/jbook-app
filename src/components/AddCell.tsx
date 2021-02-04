import { IAddCellProps } from '../interfaces';
import { useActions } from '../hooks/useActions';
import './AddCell.css';

const AddCell: React.FC<IAddCellProps> = ({ visible, nextCellId }) => {
  const { insertCellBefore } = useActions();
  return (
    <div className={`add-cell ${visible && 'visible'}`}>
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellBefore(nextCellId, 'code')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Code</span>
        </button>
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellBefore(nextCellId, 'text')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;

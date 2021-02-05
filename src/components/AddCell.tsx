import { IAddCellProps } from '../interfaces';
import { useActions } from '../hooks/useActions';
import './AddCell.css';

const AddCell: React.FC<IAddCellProps> = ({ visible, previousCellId }) => {
  const { insertCellAfter } = useActions();
  return (
    <div className={`add-cell ${visible && 'visible'}`}>
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(previousCellId, 'code')}
        >
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
          <span>Code</span>
        </button>
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertCellAfter(previousCellId, 'text')}
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

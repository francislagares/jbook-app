import { ICellListItemProps } from '../interfaces';
import CodeCell from '../components/CodeCell';
import TextEditor from '../components/TextEditor';
import ActionBar from '../components/ActionBar';
import './CellListItem.css';

const CellListItem: React.FC<ICellListItemProps> = ({ cell }) => {
  let child: JSX.Element;

  if (cell.type === 'code') {
    child = (
      <>
        <div className="action-bar-wrapper">
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </>
    );
  } else {
    child = (
      <>
        <TextEditor cell={cell} />
        <ActionBar id={cell.id} />
      </>
    );
  }

  return <div className="cell-list-item">{child}</div>;
};

export default CellListItem;

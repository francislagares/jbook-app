import { ICellListItemProps } from '../interfaces';
import CodeCell from '../components/CodeCell';
import TextEditor from '../components/TextEditor';
import ActionBar from '../components/ActionBar';

const CellListItem: React.FC<ICellListItemProps> = ({ cell }) => {
  let child: JSX.Element;

  if (cell.type === 'code') {
    child = <CodeCell cell={cell} />;
  } else {
    child = <TextEditor cell={cell} />;
  }

  return (
    <div>
      <ActionBar id={cell.id} />
      {child}
    </div>
  );
};

export default CellListItem;

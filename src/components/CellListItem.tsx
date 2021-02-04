import { ICellListItemProps } from '../interfaces';
import CodeCell from '../components/CodeCell';
import TextEditor from '../components/TextEditor';

const CellListItem: React.FC<ICellListItemProps> = ({ cell }) => {
  let child: JSX.Element;

  if (cell.type === 'code') {
    child = <CodeCell />;
  } else {
    child = <TextEditor />;
  }

  return <div>{child}</div>;
};

export default CellListItem;

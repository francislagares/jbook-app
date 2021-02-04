import { useTypedSelector } from '../hooks/useTypedSelector';
import CellListItem from './CellListItem';
import AddCell from './AddCell';
import { Fragment } from 'react';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map(id => {
      return data[id];
    });
  });

  const renderedCells = cells.map(cell => (
    <Fragment key={cell.id}>
      <AddCell nextCellId={cell.id} />
      <CellListItem key={cell.id} cell={cell} />
    </Fragment>
  ));

  return (
    <div>
      {renderedCells}
      <div>
        <AddCell visible={cells.length === 0} nextCellId={null} />
      </div>
    </div>
  );
};

export default CellList;

import { ActionType } from '../types/Actions';
import { CellTypes } from '../types/Cell';
import { Direction } from '../types/Direction';

export interface ICell {
  id: string;
  type: CellTypes;
  content: string;
}

export interface ICodeCellProps {
  cell: ICell;
}

export interface ITextEditorProps {
  cell: ICell;
}

export interface IActionBarProps {
  id: string;
}

export interface ICellListItemProps {
  cell: ICell;
}

export interface ICellState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: ICell;
  };
}

export interface IMoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: Direction;
  };
}

export interface IDeleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string | null;
}

export interface IInsertCellBeforeAction {
  type: ActionType.INSERT_CELL_BEFORE;
  payload: {
    id: string;
    type: CellTypes;
  };
}

export interface IUpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

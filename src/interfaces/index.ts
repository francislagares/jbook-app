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

export interface IAddCellProps {
  previousCellId: string | null;
  visible?: boolean;
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

export interface IBundleState {
  [key: string]:
    | {
        loading: boolean;
        code: string;
        error: string;
      }
    | undefined;
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

export interface IInsertCellAfterAction {
  type: ActionType.INSERT_CELL_AFTER;
  payload: {
    id: string | null;
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

export interface IBundleStartAction {
  type: ActionType.BUNDLE_START;
  payload: {
    cellId: string;
  };
}

export interface IBundleCompleteAction {
  type: ActionType.BUNDLE_COMPLETE;
  payload: {
    cellId: string;
    bundle: {
      code: string;
      error: string;
    };
  };
}

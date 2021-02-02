import { ActionType } from '../types/Actions';
import { CellTypes } from '../types/Cell';

export interface ICell {
  id: string;
  type: CellTypes;
  content: string;
}

export interface IMoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: 'up' | 'down';
  };
}

export interface IDeleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string;
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

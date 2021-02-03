import {
  IDeleteCellAction,
  IInsertCellBeforeAction,
  IMoveCellAction,
  IUpdateCellAction,
} from '../../interfaces';
import { ActionType } from '../../types/Actions';
import { CellTypes } from '../../types/Cell';
import { Direction } from '../../types/Direction';

export const updateCell = (id: string, content: string): IUpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};

export const deleteCell = (id: string): IDeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  };
};

export const moveCell = (id: string, direction: Direction): IMoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};

export const insertCellBefore = (
  id: string,
  type: CellTypes,
): IInsertCellBeforeAction => {
  return {
    type: ActionType.INSERT_CELL_BEFORE,
    payload: {
      id,
      type,
    },
  };
};

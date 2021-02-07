import {
  IMoveCellAction,
  IDeleteCellAction,
  IInsertCellAfterAction,
  IUpdateCellAction,
  IBundleStartAction,
  IBundleCompleteAction,
} from '../interfaces';

export enum ActionType {
  MOVE_CELL = 'move_cell',
  DELETE_CELL = 'delete_cell',
  INSERT_CELL_AFTER = 'insert_cell_after',
  UPDATE_CELL = 'update_cell',
  BUNDLE_START = 'bundle_start',
  BUNDLE_COMPLETE = 'bundle_complete',
}

export type Action =
  | IMoveCellAction
  | IDeleteCellAction
  | IInsertCellAfterAction
  | IUpdateCellAction
  | IBundleStartAction
  | IBundleCompleteAction;

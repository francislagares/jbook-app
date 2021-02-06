/* eslint-disable @typescript-eslint/no-unused-vars */
import { Middleware } from 'redux';
import { ActionType } from '../../types/Actions';
import bundle from '../../bundler';

let timer: any;

export const bundlerMiddleware: Middleware = ({
  getState,
  dispatch,
}) => next => action => {
  next(action);

  if (action.type !== ActionType.UPDATE_CELL) {
    return;
  }

  const {
    cells: { data: cellData },
  } = getState();
  const cell = cellData[action.payload.id];

  if (cell.type === 'text') {
    return;
  }

  clearTimeout(timer);
  timer = setTimeout(async () => {
    console.log('Timer expired');
    const result = await bundle(action.payload.content);

    dispatch({
      type: ActionType.BUNDLE_CREATED,
      payload: {
        cellId: action.payload.id,
        bundle: result,
      },
    });
    console.log('dispatch');
  }, 750);
};

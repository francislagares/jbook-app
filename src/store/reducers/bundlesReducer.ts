import produce from 'immer';
import { ActionType, Action } from '../../types/Actions';
import { IBundleState } from '../../interfaces';

const initialState: IBundleState = {};

const reducer = produce(
  (state: IBundleState = initialState, action: Action): IBundleState => {
    switch (action.type) {
      case ActionType.BUNDLE_START:
        state[action.payload.cellId] = {
          loading: true,
          code: '',
          error: '',
        };
        return state;
      case ActionType.BUNDLE_COMPLETE:
        state[action.payload.cellId] = {
          loading: false,
          code: action.payload.bundle.code,
          error: action.payload.bundle.error,
        };
        return state;
      default:
        return state;
    }
  },
);

export default reducer;

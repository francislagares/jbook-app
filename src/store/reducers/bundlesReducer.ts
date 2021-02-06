import produce from 'immer';
import { ActionType, Action } from '../../types/Actions';
import { IBundleState } from '../../interfaces';

const initialState: IBundleState = {};

const reducer = produce(
  (state: IBundleState = initialState, action: Action): IBundleState => {
    switch (action.type) {
      case ActionType.BUNDLE_CREATED:
        state[action.payload.cellId] = action.payload.bundle;
        return state;
      default:
        return state;
    }
  },
);

export default reducer;

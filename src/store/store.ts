import { createStore, applyMiddleware } from 'redux';
import { bundlerMiddleware } from './middlewares/bundlerMiddleware';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const store = createStore(
  reducers,
  {},
  applyMiddleware(bundlerMiddleware as any, thunk),
);

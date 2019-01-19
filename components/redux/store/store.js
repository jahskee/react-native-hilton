/* jshint esversion: 6 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import freeze from 'redux-freeze';
import { createLogger } from 'redux-logger';

import * as _actions from '../actions/actions';
import rootReducer from '../reducers/reducers';

const middlewares = [];
middlewares.push(thunk);

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ diff: true });

  // returns error when state is mutated
  middlewares.push(freeze);
  middlewares.push(logger);
}

export function configureStore() {
  const persistedState = {};

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...middlewares),
  );
  return store;
}

const store = configureStore();


store.dispatch(_actions.fetchRooms());
//store.dispatch(_actions.initRooms(roomsData))
export default store;
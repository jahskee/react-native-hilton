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

// initialize store with data
const initialList = [
  {
    from: 'Celsius',
    to: 'Rankine',
    input: 0,
    correctAnswer: parseInt(491.67, 10).toFixed(2),
    studentAnswer: 0,
    result: '',
  },
];
store.dispatch(_actions.initExamEntries(initialList));

export default store;
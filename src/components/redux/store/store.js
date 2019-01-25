/* jshint esversion: 6 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import freeze from 'redux-freeze';
import { createLogger } from 'redux-logger';

import * as _actions from '../actions/actions';
import * as _roomActions from '../actions/roomActions';
import * as _hotelActions from '../actions/hotelActions';
import * as _cityActions from '../actions/cityActions';

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

  const store = createStore(rootReducer, persistedState, applyMiddleware(...middlewares));
  return store;
}

const store = configureStore();

/* --- Initialize store with objects from graphql server --- */
store.dispatch(_cityActions.fetchCities());
store.dispatch(_hotelActions.fetchHotels());
store.dispatch(_roomActions.fetchRooms());
store.dispatch(
  _actions.saveUserSession({
    selectedLocation: 'Los Angeles, CA',
    locationIndex: 0,
  }),
);

export default store;

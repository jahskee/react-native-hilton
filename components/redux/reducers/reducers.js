/* jshint esversion: 6 */

import { combineReducers } from 'redux';

import * as _actions from '../actions/actions';
import reducerFuncs from './reducerFuncs';

const merge = (prev, next) => Object.assign({}, prev, next);

/* any uncategorized state */
const dataReducer = (data = {}, action) => {
  switch (action.type) {
    case _actions.UPDATE_DATA:
      return merge(data, action.payload);
    default:
      return data;
  }
};


const roomsReducer = (rooms = [], action) => {
  switch (action.type) {
    case _actions.FETCH_ROOMS_BEGIN:
      return action.payload;
    case _actions.FETCH_ROOMS_SUCCESS:
      return action.payload;
    case _actions.FETCH_ROOMS_FAILURE:
      return {};

    default:
      return rooms;
  }
};

const reducer = combineReducers({
  data: dataReducer,
  rooms: roomsReducer,
});

export default reducer;
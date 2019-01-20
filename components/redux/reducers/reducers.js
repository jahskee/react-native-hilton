/* jshint esversion: 6 */

import { combineReducers } from 'redux';

import * as _actions from '../actions/actions';

import * as _roomActions from '../actions/roomActions';
import * as _hotelActions from '../actions/hotelActions';
import * as _cityActions from '../actions/cityActions';
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

const roomReducer = (rooms = [], action) => {
  switch (action.type) {
    case _roomActions.FETCH_ROOMS_BEGIN:
      return action.payload;
    case _roomActions.FETCH_ROOMS_SUCCESS:
      return action.payload;
    case _roomActions.FETCH_ROOMS_FAILURE:
      return [];
    case _roomActions.TOGGLE_ROOM_SELECTED:
       rooms = reducerFuncs.toggleRoomSelected(action, rooms);
       return rooms;
    case _roomActions.RESET_ROOMS_SELECTION:
       rooms = rooms.map( room => ({...room, isSelected: false}));
       return rooms;
    default:
      return rooms;
  }
};

const hotelReducer = (hotels = [], action) => {
  switch (action.type) {
    case _hotelActions.FETCH_HOTELS_BEGIN:
      return action.payload;
    case _hotelActions.FETCH_HOTELS_SUCCESS:
      return action.payload;
    case _hotelActions.FETCH_HOTELS_FAILURE:
      return [];
    default:
      return hotels;
  }
};

const cityReducer = (citys = [], action) => {
  switch (action.type) {
    case _cityActions.FETCH_CITIES_BEGIN:
      return action.payload;
    case _cityActions.FETCH_CITIES_SUCCESS:
      return action.payload;
    case _cityActions.FETCH_CITIES_FAILURE:
      return [];
    default:
      return citys;
  }
};

const userSessionReducer = (userSession = {}, action) => {

  switch (action.type) {
    case _actions.SAVE_USER_SESSION:
      return {...userSession, ...action.payload};
 
    default:
      return userSession;
  }
};


const reducer = combineReducers({
  data: dataReducer,
  rooms: roomReducer,
  hotels: hotelReducer,
  city: cityReducer,
  userSession: userSessionReducer,
});

export default reducer;
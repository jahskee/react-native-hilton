/* jshint esversion: 6 */

import { combineReducers } from 'redux';

import * as _actions from '../actions/actions';

import * as _roomActions from '../actions/roomActions';
import * as _hotelActions from '../actions/hotelActions';
import * as _cityActions from '../actions/cityActions';
import * as _reservationActions from '../actions/reservationActions';
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
      return reducerFuncs.toggleRoomSelected(action, rooms);
    case _roomActions.RESET_ROOMS_SELECTION:
      return rooms.map(room => ({ ...room, isSelected: false }));
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

const reservationReducer = (reservations = [], action) => {
  switch (action.type) {
    /* ---- fetch reservations -----*/

    case _reservationActions.FETCH_RESERVATIONS_BEGIN:
      return action.payload;
    case _reservationActions.FETCH_RESERVATIONS_SUCCESS:
      return action.payload;
    case _reservationActions.FETCH_RESERVATIONS_FAILURE:
      return [];

      /* ---- add reservation -----*/

    case _reservationActions.ADD_RESERVATION_BEGIN:
      return action.payload;
    case _reservationActions.ADD_RESERVATION_SUCCESS:
      return action.payload;
    case _reservationActions.ADD_RESERVATION_FAILURE:
      return [];
    default:
      return reservations;
  }
};

const userSessionReducer = (userSession = {}, action) => {
  switch (action.type) {
    case _actions.SAVE_USER_SESSION:
      return { ...userSession, ...action.payload };

    default:
      return userSession;
  }
};

const reducer = combineReducers({
  data: dataReducer,
  rooms: roomReducer,
  hotels: hotelReducer,
  city: cityReducer,
  reservations: reservationReducer,
  userSession: userSessionReducer,
});

export default reducer;

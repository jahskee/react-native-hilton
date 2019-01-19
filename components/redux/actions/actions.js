/* jshint esversion: 6 */
import  API from '../../api/API';
export const UPDATE_DATA = 'UPDATE_DATA';

export const INIT_ROOMS = 'INIT_ROOMS';

export const initRooms = rooms => ({
  type: INIT_ROOMS,
  payload: rooms,
});

/* ---- Start: Async fetch of Rooms ---- */
export const FETCH_ROOMS_BEGIN   = 'FETCH_ROOMS_BEGIN';
export const FETCH_ROOMS_SUCCESS = 'FETCH_ROOMS_SUCCESS';
export const FETCH_ROOMS_FAILURE = 'FETCH_ROOMS_FAILURE';

export const fetchRoomsBegin = () => ({
  type: FETCH_ROOMS_BEGIN,
  payload: []
});

export const fetchRoomsSuccess = rooms => ({
  type: FETCH_ROOMS_SUCCESS,
  payload: rooms 
});

export const fetchRoomsFailure = error => ({
  type: FETCH_ROOMS_FAILURE,
  payload: { error }
});

// async actions creators
export const fetchRooms = () => async dispatch => {
  dispatch(fetchRoomsBegin);
  try {   
    const rooms = await API.fetchRooms();  
    await dispatch(fetchRoomsSuccess(rooms.rooms));
  } catch (error) {
    console.error(error);
    dispatch(fetchRoomsFailure(error));
  }
};
/* ---- End: Async fetch of Rooms ---- */

// any state not yet categorized
export const updateData = data => ({
  type: UPDATE_DATA,
  payload: data,
});
/* jshint esversion: 6 */
import API from '../../api/API';

export const TOGGLE_ROOM_SELECTED = 'TOGGLE_ROOM_SELECTED';
export const toggleRoomSelected = roomNo => ({
  type: TOGGLE_ROOM_SELECTED,
  payload: { roomNo },
});

export const RESET_ROOMS_SELECTION = 'RESET_ROOMS_SELECTION';
export const resetRoomsSelection = () => ({
  type: RESET_ROOMS_SELECTION,
});

/* ---- Start: Async fetch of Rooms ---- */
export const FETCH_ROOMS_BEGIN = 'FETCH_ROOMS_BEGIN';
export const FETCH_ROOMS_SUCCESS = 'FETCH_ROOMS_SUCCESS';
export const FETCH_ROOMS_FAILURE = 'FETCH_ROOMS_FAILURE';

export const fetchRoomsBegin = () => ({
  type: FETCH_ROOMS_BEGIN,
  payload: [],
});

export const fetchRoomsSuccess = rooms => ({
  type: FETCH_ROOMS_SUCCESS,
  payload: rooms,
});

export const fetchRoomsFailure = error => ({
  type: FETCH_ROOMS_FAILURE,
  payload: { error },
});

// async actions creators
export const fetchRooms = () => async (dispatch) => {
  dispatch(fetchRoomsBegin);
  try {
    const rooms = await API.fetchRooms();
    await dispatch(fetchRoomsSuccess(rooms));
  } catch (error) {
    dispatch(fetchRoomsFailure(error));
  }
};
/* ---- End: Async fetch of Rooms ---- */

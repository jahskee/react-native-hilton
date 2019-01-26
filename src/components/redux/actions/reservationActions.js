/* jshint esversion: 6 */
import API from '../../api/API';
import * as _actions from './actions';

/* ---- Start: Async fetch of Reservations ---- */
export const FETCH_RESERVATIONS_BEGIN = 'FETCH_RESERVATIONS_BEGIN';
export const FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS';
export const FETCH_RESERVATIONS_FAILURE = 'FETCH_RESERVATIONS_FAILURE';

export const fetchReservationsBegin = () => ({
  type: FETCH_RESERVATIONS_BEGIN,
  payload: [],
});

export const fetchReservationsSuccess = reservations => ({
  type: FETCH_RESERVATIONS_SUCCESS,
  payload: reservations,
});

export const fetchReservationsFailure = error => ({
  type: FETCH_RESERVATIONS_FAILURE,
  payload: { error },
});

// async actions creators
export const fetchReservations = () => async (dispatch) => {
  dispatch(fetchReservationsBegin);
  try {
    const reservations = await API.fetchReservations();
    await dispatch(fetchReservationsSuccess(reservations));
  } catch (error) {
    dispatch(fetchReservationsFailure(error));
  }
};
/* ---- End: Async fetch of Reservations ---- */

/* ---- Start: Async Add Reservation ---- */
export const ADD_RESERVATION_BEGIN = 'ADD_RESERVATION_BEGIN';
export const ADD_RESERVATION_SUCCESS = 'ADD_RESERVATION_SUCCESS';
export const ADD_RESERVATION_FAILURE = 'ADD_RESERVATION_FAILURE';

export const addReservationBegin = () => ({
  type: ADD_RESERVATION_BEGIN,
  payload: [],
});

export const addReservationSuccess = reservation => ({
  type: ADD_RESERVATION_SUCCESS,
  payload: reservation,
});

export const addReservationFailure = error => ({
  type: ADD_RESERVATION_FAILURE,
  payload: { error },
});

// async actions creators
export const addReservation = param => async (dispatch) => {
  dispatch(addReservationBegin);
  try {
    const reservation = await API.addReservation(param);
    await dispatch(addReservationSuccess(reservation));
    await dispatch(_actions.saveUserSession({ reservation }));
  } catch (error) {
    dispatch(addReservationFailure(error));
  }
};
/* ---- End: Async Add Reservation ---- */

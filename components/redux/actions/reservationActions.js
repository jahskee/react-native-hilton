/* jshint esversion: 6 */
import  API from '../../api/API';


/* ---- Start: Async fetch of Hotels ---- */
export const FETCH_RESERVATIONS_BEGIN   = 'FETCH_RESERVATIONS_BEGIN';
export const FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS';
export const FETCH_RESERVATIONS_FAILURE = 'FETCH_RESERVATIONS_FAILURE';


export const fetchReservationsBegin = () => ({
  type: FETCH_RESERVATIONS_BEGIN,
  payload: []
});

export const fetchReservationsSuccess = reservations => ({
  type: FETCH_RESERVATIONS_SUCCESS,
  payload: reservations 
});

export const fetchReservationsFailure = error => ({
  type: FETCH_RESERVATIONS_FAILURE,
  payload: { error }
});

// async actions creators
export const fetchReservations = () => async dispatch => {
  dispatch(fetchReservationsBegin);
  try {   
    const reservations = await API.fetchReservations();  
    await dispatch(fetchReservationsSuccess(reservations));
  } catch (error) {
    console.error(error);
    dispatch(fetchReservationsFailure(error));
  }
};
/* ---- End: Async fetch of Reservations ---- */
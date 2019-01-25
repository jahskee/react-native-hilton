/* jshint esversion: 6 */
import API from '../../api/API';

/* ---- Start: Async fetch of Hotels ---- */
export const FETCH_HOTELS_BEGIN = 'FETCH_HOTELS_BEGIN';
export const FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS';
export const FETCH_HOTELS_FAILURE = 'FETCH_HOTELS_FAILURE';

export const fetchHotelsBegin = () => ({
  type: FETCH_HOTELS_BEGIN,
  payload: [],
});

export const fetchHotelsSuccess = hotels => ({
  type: FETCH_HOTELS_SUCCESS,
  payload: hotels,
});

export const fetchHotelsFailure = error => ({
  type: FETCH_HOTELS_FAILURE,
  payload: { error },
});

// async actions creators
export const fetchHotels = () => async (dispatch) => {
  dispatch(fetchHotelsBegin);
  try {
    const hotels = await API.fetchHotels();
    await dispatch(fetchHotelsSuccess(hotels));
  } catch (error) {
    dispatch(fetchHotelsFailure(error));
  }
};
/* ---- End: Async fetch of Hotels ---- */

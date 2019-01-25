/* jshint esversion: 6 */
import API from '../../api/API';

/* ---- Start: Async fetch of CITIES ---- */
export const FETCH_CITIES_BEGIN = 'FETCH_CITIES_BEGIN';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const FETCH_CITIES_FAILURE = 'FETCH_CITIES_FAILURE';

export const fetchCitiesBegin = () => ({
  type: FETCH_CITIES_BEGIN,
  payload: [],
});

export const fetchCitiesSuccess = cities => ({
  type: FETCH_CITIES_SUCCESS,
  payload: cities,
});

export const fetchCitiesFailure = error => ({
  type: FETCH_CITIES_FAILURE,
  payload: { error },
});

// async actions creators
export const fetchCities = () => async (dispatch) => {
  dispatch(fetchCitiesBegin);
  try {
    const cities = await API.fetchCities();
    await dispatch(fetchCitiesSuccess(cities));
  } catch (error) {
    dispatch(fetchCitiesFailure(error));
  }
};
/* ---- End: Async fetch of Cities ---- */

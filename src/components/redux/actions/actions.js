/* jshint esversion: 6 */
export const UPDATE_DATA = 'UPDATE_DATA';

/* ------ User Session Actions ------*/
export const SAVE_USER_SESSION = 'SAVE_USER_SESSION';
export const saveUserSession = userSession => ({
  type: SAVE_USER_SESSION,
  payload: userSession,
});

// any state not yet categorized
export const updateData = data => ({
  type: UPDATE_DATA,
  payload: data,
});

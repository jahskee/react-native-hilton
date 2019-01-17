// action types
export const UPDATE_DATA = "UPDATE_DATA";

export const ADD_DECK = "ADD_DECK";
export const ADD_DECK_KEYS = "ADD_DECK_KEYS";
export const ADD_CARD = "ADD_CARD";

// action creators
export const updateData = data => ({
  type: UPDATE_DATA,
  payload: data
});

export const addDeck = data => ({
  type: ADD_DECK,
  payload: data
});

export const addCard = data => ({
  type: ADD_CARD,
  payload: data
});

export const addDeckKeys = data => ({
  type: ADD_DECK_KEYS
});

export const addQuestion = data => ({
  type: ADD_QUESTION,
  payload: data
});

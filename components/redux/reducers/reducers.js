/* jshint esversion: 6 */
import { combineReducers } from "redux";
import * as _actions from "../actions/actions";

import { decksData } from "../_data/initdata.js";

// store.data is anything not yet categorized
const dataReducer = (prevData = {}, action) => {
  switch (action.type) {
    case _actions.UPDATE_DATA:
      return {...prevData, ...action.payload};
    default:
      return prevData;
  }
};

const addKeys = (val, key) => ({ key: "" + key, ...val });

const deckReducer = (prevDecks = decksData, action) => {
  switch (action.type) {
    case _actions.ADD_DECK:
      return [...prevDecks, action.payload];
    case _actions.ADD_DECK_KEYS:
      return [...prevDecks].map(addKeys);

    case _actions.ADD_CARD: {
      // start add card
      const newDecks = [...prevDecks];

      const question = {
        question: action.payload.question,
        answer: action.payload.answer,
        isCorrect: action.payload.isCorrect
      };

      let index = 0;
      for (let i = 0; i < prevDecks.length; i++) {
        if (prevDecks[i].title === action.payload.deckName) {
          index = i;
          break;
        }
      }

      const deck = newDecks[index];
      deck.questions = [...deck.questions, question];
      return newDecks;
    } // end add card

    default:
      return prevDecks;
  }
};

const reducer = combineReducers({
  decks: deckReducer,
  data: dataReducer
});

export default reducer;

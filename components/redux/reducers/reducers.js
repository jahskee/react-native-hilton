/* jshint esversion: 6 */

import { combineReducers } from 'redux';

import * as _actions from '../actions/actions';
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

const examEntriesReducer = (examEntries = [], action) => {
  switch (action.type) {
    case _actions.INIT_EXAM_ENTRIES:
      return [...examEntries, ...action.payload];

    case _actions.ADD_EXAM_ENTRY:
      return [...examEntries, action.payload];

    case _actions.UPDATE_EXAM_ANSWER:
      return reducerFuncs.updateExamAnswer(examEntries, action);

    case _actions.UPDATE_EXAM_RESULTS:
      return reducerFuncs.updateExamResults(examEntries, action);

    default:
      return examEntries;
  }
};

const roomsReducer = (examEntries = [], action) => {
  switch (action.type) {
    case _actions.INIT_EXAM_ENTRIES:
      return [...rooms, ...action.payload];

    case _actions.ADD_EXAM_ENTRY:
      return [...examEntries, action.payload];

    case _actions.UPDATE_EXAM_ANSWER:
      return reducerFuncs.updateExamAnswer(examEntries, action);

    case _actions.UPDATE_EXAM_RESULTS:
      return reducerFuncs.updateExamResults(examEntries, action);

    default:
      return examEntries;
  }
};

const reducer = combineReducers({
  data: dataReducer,
  rooms: roomsReducer,
  examEntries: examEntriesReducer,
});

export default reducer;
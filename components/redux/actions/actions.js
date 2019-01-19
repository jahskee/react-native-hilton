/* jshint esversion: 6 */

export const UPDATE_DATA = 'UPDATE_DATA';
export const ADD_EXAM_ENTRY = 'ADD_EXAM_ENTRY';
export const INIT_EXAM_ENTRIES = 'INIT_EXAM_ENTRIES';
export const UPDATE_EXAM_ANSWER = 'UPDATE_EXAM_ANSWER';
export const UPDATE_EXAM_RESULTS = 'UPDATE_EXAM_RESULTS';

export const initExamEntries = examEntries => ({
  type: INIT_EXAM_ENTRIES,
  payload: examEntries,
});

export const addExamEntry = examEntry => ({
  type: ADD_EXAM_ENTRY,
  payload: examEntry,
});

export const updateExamAnswer = (index, studentAnswer) => ({
  type: UPDATE_EXAM_ANSWER,
  payload: { index, studentAnswer },
});

export const updateExamResults = examEntries => ({
  type: UPDATE_EXAM_RESULTS,
  paylod: examEntries,
});

// any state not yet categorized
export const updateData = data => ({
  type: UPDATE_DATA,
  payload: data,
});
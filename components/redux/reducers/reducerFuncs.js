/* jshint esversion: 6 */

import * as cloneDeep from "lodash/cloneDeep";

/* This makes reducer functions more testable */
const reducerFuncs = {
  updateExamAnswer: function(examEntries, action) {
    const { index, studentAnswer } = action.payload;
    const newExamEntries = cloneDeep(examEntries);
    newExamEntries[index].studentAnswer = studentAnswer;
    return newExamEntries;
  },

  updateExamResults: function(examEntries, action) {
    const newExamEntries = examEntries.map(examEntry => {
      const studentAnswer = parseInt(examEntry.studentAnswer, 10);
      const correctAnswer = parseInt(examEntry.correctAnswer, 10);

      let result;
      if (isNaN(studentAnswer)) result = "invalid";
      else if (correctAnswer === studentAnswer) {
        result = "correct";
      } else {
        result = "incorrect";
      }
      const newExamEntry = { ...examEntry, result };
      return newExamEntry;
    });
    return newExamEntries;
  }
};

export default reducerFuncs;
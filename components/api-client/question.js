/* jshint esversion: 6 */
import { addKeys, escapeUnicode } from '../utils/utils';

const API = {};

API.getQuestions = async () => {
  /* global fetch */
  const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean');
  const questions = await response.json();

  questions.results = questions.results
    .map(question => ({ ...question, Answer: null }))
    .map(addKeys)
    .map(question => ({
      ...question,
      question: question.question.escapeUnicode().trim(),
    }));

  return questions.results;
};

String.prototype.escapeUnicode = escapeUnicode();

export default API;

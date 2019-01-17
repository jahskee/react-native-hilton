import { Animated } from "react-native";

export const decksData = [
  {
    title: "React",
    questions: [
      {
        question: "What is React?",
        answer: "A library for managing user interfaces",
        isCorrect: "Correct"
      },
      {
        question: "Where do you make Ajax requests in React?",
        answer: "The componentDidMount lifecycle event",
        isCorrect: "Correct"
      }
    ],
    style: { bgcolor: new Animated.Value(1) }
  },

  {
    title: "Javascript",
    questions: [
      {
        question: "What is a closure?",
        answer:
          "The combination of a function and the lexical environment within which that function was declared.",
        isCorrect: "Correct"
      }
    ],
    style: { bgcolor: new Animated.Value(1) }
  }
];

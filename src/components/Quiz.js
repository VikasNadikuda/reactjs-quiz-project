import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions";
import Answers from "./Answers.js";
import Question from "./Question.js";
import ProgressBar from "./ProgressBar.js";
import quizcompleteimg from "../assets/quiz-complete.png";
export default function Quiz() {
  const [answersSelected, setAnswersSelected] = useState([]);
  //   const [answerState, setAnswerState] = useState("");
  const activeQuestionIndex = answersSelected.length;
  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
    setAnswersSelected((prevAnswerArray) => {
      return [...prevAnswerArray, answer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsCompleted) {
    // return (
    // );
  }

  return (
    <div id="quiz">
      <Question
        index={activeQuestionIndex}
        key={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}

import Answers from "./Answers.js";
import ProgressBar from "./ProgressBar.js";
import { useState } from "react";
import QUESTIONS from "../questions";

export default function Question({ onSkipAnswer, onSelectAnswer, index }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  let timer = 15000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect != null) {
    timer = 2000;
  }
  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }
  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect != null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <ProgressBar
        // key={activeQuestionIndex} // removes old instance of component from DOM and as activequestionindex changes new component instance is created
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        timeout={timer}
        mode={answerState}
        key={timer}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        // key={activeQuestionIndex} /// cannot use same const or variable key to different components
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}

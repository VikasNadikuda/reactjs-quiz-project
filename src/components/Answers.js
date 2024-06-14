import { useRef } from "react";
export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    // console.log(activeQuestionIndex);
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5); //1 will stay in the order  and negative number will swap,Math.random() will give any random b/w 0 and 1
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";
        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        } else if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClasses = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button className={cssClasses} onClick={() => onSelect(answer)} disabled={answerState!=''}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

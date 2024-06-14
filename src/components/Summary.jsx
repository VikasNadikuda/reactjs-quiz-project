import quizcompleteimg from "../assets/quiz-complete.png";

export default function Summary() {
  return (
    <div id="summary">
      <img src={quizcompleteimg} alt="Trophy icon" />
      <h2> Quiz Completed !</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="Text">skipped</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="Text">answered correctly</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="Text">answered incorrectly</span>
        </p>
      </div>
      <ol>li</ol>
    </div>
  );
}

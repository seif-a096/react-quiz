function FinishScreen({ points, maxPoints, highScore, dispatch }) {
  let percentage = (points / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> points out of{" "}
        <strong>{maxPoints}</strong> ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <div className="ui-container">
        <button className="btn " onClick={() => dispatch({ type: "restart" })}>
          Restart Quiz
        </button>
      </div>
    </>
  );
}

export default FinishScreen;

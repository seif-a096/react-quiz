function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>Welcome to The React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <div className="ui-container">
        <button className="btn" onClick={() => dispatch({ type: "start" })}>
          Let's start
        </button>
      </div>
    </div>
  );
}

export default StartScreen;

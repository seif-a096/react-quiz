function Question({ question, dispatch, newAnswer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, i) => (
          <button
            className={`btn btn-option ${
              i === newAnswer
                ? `answer ${i !== question.correctOption ? "wrong-select" : ""}`
                : ""
            } ${
              newAnswer && (i === question.correctOption ? "correct" : "wrong")
            }`}
            key={option}
            onClick={() => dispatch({ type: "new-answer", payload: i })}
            disabled={newAnswer}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;

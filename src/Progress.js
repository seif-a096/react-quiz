function Progress({ index, numQuestions, maxPoints, points, newAnswer }) {
  return (
    <header className="progress">
      <progress value={index + (newAnswer ? 1 : 0)} max={numQuestions} />
      <p>
        <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPoints}
      </p>
    </header>
  );
}

export default Progress;

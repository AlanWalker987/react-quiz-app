function Progress({ index, points, questionsLength, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={questionsLength} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {questionsLength}
      </p>
      <p>
        Points <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;

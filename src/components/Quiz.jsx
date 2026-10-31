
import { useState } from "react";

function Quiz({ questions, onFinish, onBack }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState({});
  const [finished, setFinished] = useState(false);
  const [saved, setSaved] = useState(false);

  const question = questions[current];
  const answered = selected[current] !== undefined;

  const score = questions.filter(
    (q, index) => selected[index] === q.answer
  ).length;

  function nextQuestion() {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);

      if (!saved) {
        onFinish(score);
        setSaved(true);
      }
    }
  }

  function restartQuiz() {
    setCurrent(0);
    setSelected({});
    setFinished(false);
    setSaved(false);
  }

  if (finished) {
    return (
      <section className="panel quiz-panel result-panel">
        <h2>Quiz Completed!</h2>
        <h1>
          {score} / {questions.length}
        </h1>
        <p>
          Percentage:{" "}
          {Math.round((score / questions.length) * 100)}%
        </p>

        <button className="primary-btn" onClick={restartQuiz}>
          Try Again
        </button>

        <button className="secondary-btn" onClick={onBack}>
          Dashboard
        </button>
      </section>
    );
  }

  return (
    <section className="panel quiz-panel">
      <div className="quiz-top">
        <span className="pill"><h1>Web Development</h1></span>
        <span>
          <h5>Question {current + 1} of {questions.length}</h5>
        </span>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${((current + 1) / questions.length) * 100}%`
          }}
        />
      </div>

      <h2 className="question-title">{question.question}</h2>

      <div className="options">
        {question.options.map((option, index) => {
          let className = "option";

          if (answered && index === question.answer) {
            className += " correct";
          } else if (
            answered &&
            selected[current] === index
          ) {
            className += " incorrect";
          }

          return (
            <button
              key={option}
              className={className}
              disabled={answered}
              onClick={() =>
                setSelected((previous) => ({
                  ...previous,
                  [current]: index
                }))
              }
            >
              {String.fromCharCode(65 + index)}. {option}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="feedback">
          <h5><strong>
            {selected[current] === question.answer
              ? "Correct answer!"
              : "Incorrect answer"}
          </strong>
          </h5>
          <br />
          <h4>{question.explanation}</h4>
          <br />
        </div>
      )}

      <div className="quiz-footer" >
        <button
          className="secondary-btn"
          disabled={current === 0}
          onClick={() => setCurrent(current - 1)}
        >
          Previous
        </button>
        <button
          className="primary-btn"
          disabled={!answered}
          onClick={nextQuestion}
        >
          {current === questions.length - 1
            ? "See Results"
            : "Next Question"}
        </button>
      </div>
    </section>
  );
}

export default Quiz;

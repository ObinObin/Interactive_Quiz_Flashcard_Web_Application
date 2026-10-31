
import StatCard from "./StatCard";

function Progress({
  scores,
  bestScore,
  totalQuestions,
  knownCards,
  onClear
}) {
  return (
    <section>
      <br />
      <div className="stats">
        <StatCard
          icon="📝"
          label="Quizzes completed"
          value={scores.length}
        />
<br />
        <StatCard
          icon="🏆"
          label="Best score"
          value={`${bestScore}/${totalQuestions}`}
        />
<br />
        <StatCard
          icon="🗂️"
          label="Cards mastered"
          value={knownCards.length}
        />
      </div>
<br />
      <div className="panel">
        <h2>Quiz History</h2>
<br />
        {scores.length === 0 ? (
          <h5>No quiz attempts yet. Complete a quiz to see progress.</h5>
        ) : (
          <div className="history-list">
            {[...scores].reverse().map((item, index) => (
              <div
                className="history-item"
                key={`${item.date}-${index}`}
              >
                <div>
                  <strong>
                    Quiz attempt : {scores.length - index}
                  </strong>
                  <br />
                  <strong> Date:{item.date}</strong>
                </div>

                <strong>score:
                  {item.score}/{item.total} (
                  {Math.round(
                    (item.score / item.total) * 100
                  )}%)
                </strong>
              </div>
            ))}
          </div>
        )}
      </div>
<br />
      <button
        className="secondary-btn"
        onClick={() => {
          if (window.confirm("Clear all quiz history?")) {
            onClear();
          }
        }}
      >
        Clear quiz history
      </button>
    </section>
  );
}

export default Progress;

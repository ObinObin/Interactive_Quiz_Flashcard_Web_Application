
import StatCard from "./StatCard";

function Dashboard({
  scores,
  bestScore,
  knownCards,
  totalQuestions,
  setPage
}) {
  const latestScore = scores[scores.length - 1];

  return (
    <section>
      <div className="welcome">
        <div>
          <h1 className="eyebrow">WELCOME </h1>
          <h2>Learn something new today.</h2>
         
          <h2>Test your knowledge and revise important concepts.</h2>
         <br/ >
          <button
            className="primary-btn"
            onClick={() => setPage("quiz")}
          >
            Start a quiz →
          </button>
          
        </div>
        <br />
      </div>

      <div className="stats">
        <StatCard
          icon="📝"
          label="Quizzes completed :"
          value={scores.length}
        />
        <br />
        <StatCard
          icon="🏆"
          label="Best score :"
          value={`${bestScore}/${totalQuestions}`}
        />
        <br />
        <StatCard
          icon="🗂️"
          label="Cards mastered :"
          value={knownCards.length}
        />
      </div>
<br />
      <h2 className="section-title">Choose your activity</h2>

      <div className="activity-grid">
        <div className="activity-card">
          <span className="activity-icon">🎯</span>
          <h3>Test your knowledge</h3>
          <h5>Answer questions and get instant feedback.</h5>
          <button
            className="text-btn"
            onClick={() => setPage("quiz")}
          >
            Start quiz →
          </button>
        </div>

        <div className="activity-card">
          <span className="activity-icon">🧠</span>
          <h3>Review flashcards</h3>
          <h5>Practice remembering important concepts.</h5>
          <button
            className="text-btn"
            onClick={() => setPage("flashcards")}
          >
            Study cards →
          </button>
        </div>
      </div>

      {latestScore && (
        <div className="panel latest">
          <h3>Last quiz result</h3>
          <p>
             <strong>Score:{latestScore.score}/
            {latestScore.total} — {latestScore.date}
            </strong>
          </p>
        </div>
      )}
    </section>
  );
}

export default Dashboard;

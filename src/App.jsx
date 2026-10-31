
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Quiz from "./components/Quiz";
import Flashcards from "./components/Flashcards";
import Progress from "./components/Progress";
import { questions } from "./data/quizData";
import { flashcardData } from "./data/flashcardData";
import "./App.css";

function App() {
  const [page, setPage] = useState("dashboard");

  const [scores, setScores] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("quizScores")) || [];
    } catch {
      return [];
    }
  });

  const [knownCards, setKnownCards] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("knownCards")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("quizScores", JSON.stringify(scores));
  }, [scores]);

  useEffect(() => {
    localStorage.setItem("knownCards", JSON.stringify(knownCards));
  }, [knownCards]);

  function saveScore(score) {
    setScores((previous) => [
      ...previous,
      {
        score,
        total: questions.length,
        date: new Date().toLocaleDateString()
      }
    ]);
  }

  function toggleKnown(index) {
    setKnownCards((previous) =>
      previous.includes(index)
        ? previous.filter((id) => id !== index)
        : [...previous, index]
    );
  }

  const bestScore = scores.reduce(
    (best, item) => Math.max(best, item.score),
    0
  );

  return (
    <div className="app">
      <Sidebar page={page} setPage={setPage} />

      <main className="main">
        <Header page={page} />

        {page === "dashboard" && (
          <Dashboard
            scores={scores}
            bestScore={bestScore}
            knownCards={knownCards}
            totalQuestions={questions.length}
            setPage={setPage}
          />
        )}

        {page === "quiz" && (
          <Quiz
            questions={questions}
            onFinish={saveScore}
            onBack={() => setPage("dashboard")}
          />
        )}

        {page === "flashcards" && (
          <Flashcards
            cards={flashcardData}
            knownCards={knownCards}
            toggleKnown={toggleKnown}
          />
        )}

        {page === "progress" && (
          <Progress
            scores={scores}
            bestScore={bestScore}
            totalQuestions={questions.length}
            knownCards={knownCards}
            onClear={() => setScores([])}
          />
        )}
      </main>
    </div>
  );
}

export default App;

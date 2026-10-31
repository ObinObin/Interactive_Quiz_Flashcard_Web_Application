
import { useState } from "react";

function Flashcards({ cards, knownCards, toggleKnown }) {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = cards[current];

  function moveCard(direction) {
    setCurrent(
      (current + direction + cards.length) % cards.length
    );
    setFlipped(false);
  }

  if (cards.length === 0) {
    return <p>No flashcards available.</p>;
  }

  return (
    <section>
      <div className="flashcard-heading">
        <div>
          <h2>Study your concepts</h2>
          <br />
          <p>
           <h5> Card {current + 1} of {cards.length}</h5>
          </p>
        </div>
<br />
      
        
      </div>

      <button
        className={`flashcard ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <span className="flashcard-label">
          {flipped ? "ANSWER" : "QUESTION"}
        </span>

        <span className="flashcard-content">
          {flipped ? card.back : card.front}
        </span>

        <span className="flip-hint">Click to flip ↻</span>
      </button>
      <br />
       <span className="pill">
         <h6>{knownCards.length} concepts learned</h6>
        </span>
        <br />

      <div className="flashcard-controls">
        <button
          className="secondary-btn"
          onClick={() => moveCard(-1)}
        >
          Previous
        </button>

        <button
          className="primary-btn"
          onClick={() => toggleKnown(current)}
        >
          {knownCards.includes(current)
            ? "✓ Mastered"
            : "I know this"}
        </button>

        <button
          className="secondary-btn"
          onClick={() => moveCard(1)}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Flashcards;

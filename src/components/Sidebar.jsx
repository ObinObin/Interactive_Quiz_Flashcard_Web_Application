
function Sidebar({ page, setPage }) {
  const menu = [
    ["dashboard", "Dashboard"],
    ["quiz", "Take a Quiz"],
    ["flashcards", "Flashcards"],
    ["progress", "My Progress"]
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-icon"></span>
        <div>
          <h2>QuizMate</h2>
          <small></small>
        </div>
      </div>

      <h3 className="menu-label">MENU</h3>
<br />
      {menu.map(([id, label]) => (
        <button
          key={id}
          className={`nav-link ${page === id ? "active" : ""}`}
          onClick={() => setPage(id)}
        >
          {label}
        </button>
      ))}
    </aside>
  );
}

export default Sidebar;

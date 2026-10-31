
function Header({ page }) {
  const titles = {
    dashboard: "Dashboard",
    quiz: "Interactive Quiz",
    flashcards: "Flashcards",
    progress: "My Progress"
  };

  return (
    <header className="topbar">
      <div>
        
        <h1>{titles[page]}</h1>
      </div>

      <div className="profile">
        <span className="avatar"></span>
        
      </div>
    </header>
  );
}

export default Header;

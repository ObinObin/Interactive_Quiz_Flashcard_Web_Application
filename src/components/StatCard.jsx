
function StatCard({ icon, label, value }) {
  return (
    <div className="stat-card">
      <span className="stat-icon">{icon}</span>
      <p>{label}</p>
      <h2>{value}</h2>
    </div>
  );
}

export default StatCard;

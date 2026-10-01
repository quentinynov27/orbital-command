import { alerts } from "../data/data";

export function AlertsPage() {
  return (
    <div>
      <h1>Journal des alertes</h1>
      <ul className="record-list">
        {alerts.map((alert) => (
          <li key={alert.id} className={`alert-${alert.severity}`}>
            <strong>{alert.severity === "critical" ? "Critique" : "Avertissement"}</strong>
            <p>{alert.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

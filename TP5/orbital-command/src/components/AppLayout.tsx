import { NavLink, Outlet } from "react-router-dom";
import { FLEET, MISSIONS, CONTROL, ALERTS } from "../routing/paths";

export function AppLayout() {
  return (
    <div className="shell">
      <nav className="topnav">
        <NavLink to={FLEET} className={({ isActive }) => (isActive ? "active" : "")}>
          Flotte
        </NavLink>
        <NavLink to={MISSIONS} className={({ isActive }) => (isActive ? "active" : "")}>
          Missions
        </NavLink>
        <NavLink to={CONTROL} className={({ isActive }) => (isActive ? "active" : "")}>
          Contrôle
        </NavLink>
        <NavLink to={ALERTS} className={({ isActive }) => (isActive ? "active" : "")}>
          Alertes
        </NavLink>
      </nav>

      <main className="page">
        <Outlet />
      </main>
    </div>
  );
}

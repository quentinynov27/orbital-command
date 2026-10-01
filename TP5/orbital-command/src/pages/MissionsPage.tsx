import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Mission } from "../data/data";
import { getMissions } from "../services/missions";
import { missionPath, MISSION_NEW } from "../routing/paths";

const statusLabel: Record<Mission["status"], string> = {
  scheduled: "Planifiée",
  countdown: "Compte à rebours",
  draft: "Brouillon",
};

export function MissionsPage() {
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const data = await getMissions(controller.signal);
        setMissions(data);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        console.error(error);
      }
    }

    void load();
    return () => controller.abort();
  }, []);

  return (
    <div>
      <h1>Liste des missions</h1>
      <Link to={MISSION_NEW} className="new-mission-link">
        Planifier une mission
      </Link>
      <ul className="record-list">
        {missions.map((mission) => (
          <li key={mission.id}>
            <Link to={missionPath(mission.id)}>
              <strong>{mission.codeName}</strong>
            </Link>
            <span> — {statusLabel[mission.status]}</span>
            <p>{mission.objective}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
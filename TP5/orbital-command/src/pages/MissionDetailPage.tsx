import { useParams } from "react-router-dom";
import { findMission } from "../data/data";

export function MissionDetailPage() {
  const { missionId } = useParams();
  const mission = missionId ? findMission(missionId) : undefined;

  return <h1>{mission ? `Fiche mission : ${mission.codeName}` : "Mission introuvable"}</h1>;
}

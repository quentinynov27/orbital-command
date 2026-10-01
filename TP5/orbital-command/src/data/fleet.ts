export type VehicleStatus = "ready" | "maintenance" | "assigned" | "grounded";

export type LaunchVehicle =
  | {
      kind: "reusable-launcher";
      id: string;
      name: string;
      model: string;
      flightsCompleted: number;
      status: VehicleStatus;
    }
  | {
      kind: "heavy-launcher";
      id: string;
      name: string;
      model: string;
      maxPayloadKg: number;
      status: VehicleStatus;
    }
  | {
      kind: "cargo-vehicle";
      id: string;
      name: string;
      model: string;
      dockingPort: string;
      status: VehicleStatus;
    }
  | {
      kind: "crew-capsule";
      id: string;
      name: string;
      model: string;
      crewCapacity: number;
      lifeSupportStatus: string;
      status: VehicleStatus;
    };

export type Mission = {
  id: string;
  codeName: string;
  vehicleId: string;
  launchAt: string;
  objective: string;
  status: "scheduled" | "countdown" | "draft";
};

export type GroundAlert = {
  id: string;
  kind: "fuel" | "temperature" | "signal";
  severity: "warning" | "critical";
  message: string;
  vehicleId: string;
};

export const vehicles: LaunchVehicle[] = [
  { kind: "reusable-launcher", id: "aquila-1", name: "Aquila-1", model: "Aquila", flightsCompleted: 12, status: "ready" },
  { kind: "reusable-launcher", id: "aquila-2", name: "Aquila-2", model: "Aquila", flightsCompleted: 7, status: "maintenance" },
  { kind: "heavy-launcher", id: "titan-heavy", name: "Titan Heavy", model: "Titan", maxPayloadKg: 28000, status: "assigned" },
  { kind: "cargo-vehicle", id: "hermes-a", name: "Hermes A", model: "Hermes", dockingPort: "A", status: "ready" },
  { kind: "cargo-vehicle", id: "hermes-b", name: "Hermes B", model: "Hermes", dockingPort: "B", status: "grounded" },
];

export const missions: Mission[] = [
  { id: "dawn-watch", codeName: "Dawn Watch", vehicleId: "aquila-1", launchAt: "2026-09-18T04:12:00.000Z", objective: "Déployer un relais optique LumenNet au-dessus de l'Atlantique.", status: "scheduled" },
  { id: "heavy-lift-7", codeName: "Heavy Lift 7", vehicleId: "titan-heavy", launchAt: "2026-09-22T11:40:00.000Z", objective: "Livrer le module habitable Odyssey-3 en orbite terrestre basse.", status: "countdown" },
  { id: "silent-harbor", codeName: "Silent Harbor", vehicleId: "hermes-a", launchAt: "2026-10-02T19:05:00.000Z", objective: "Ravitaillement cargo d'Odyssey via le port d'amarrage A.", status: "draft" },
];

export const alerts: GroundAlert[] = [
  { id: "alert-fuel-aquila-2", kind: "fuel", severity: "warning", message: "Aquila-2 : réservoir de banc à 18 % — donnée pédagogique.", vehicleId: "aquila-2" },
  { id: "alert-temp-titan", kind: "temperature", severity: "critical", message: "Titan Heavy : température moteur hors plage au banc d'essai.", vehicleId: "titan-heavy" },
  { id: "alert-signal-hermes-b", kind: "signal", severity: "warning", message: "Hermes B : liaison sol dégradée pendant la maintenance.", vehicleId: "hermes-b" },
];

export function findVehicle(id: string): LaunchVehicle | undefined {
  return vehicles.find((vehicle) => vehicle.id === id);
}

export function findMission(id: string): Mission | undefined {
  return missions.find((mission) => mission.id === id);
}

export function findAlert(id: string): GroundAlert | undefined {
  return alerts.find((alert) => alert.id === id);
}

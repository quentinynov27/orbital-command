/**
 * Canonical Orbital Command domain types (AstraForge Aerospace).
 * Copy into each TP — do not import across TP folders at runtime.
 * Simulation only: no live telemetry, no real launch authority.
 */

export type VehicleStatus = "ready" | "maintenance" | "assigned" | "grounded";

export type LaunchVehicle =
  | {
      kind: "reusable-launcher";
      id: string;
      name: string;
      model: "Aquila";
      flightsCompleted: number;
      status: VehicleStatus;
    }
  | {
      kind: "heavy-launcher";
      id: string;
      name: string;
      model: "Titan";
      maxPayloadKg: number;
      status: VehicleStatus;
    }
  | {
      kind: "cargo-vehicle";
      id: string;
      name: string;
      model: "Hermes";
      dockingPort: "A" | "B" | "C";
      status: VehicleStatus;
    };

export type MissionStatus =
  | "draft"
  | "scheduled"
  | "countdown"
  | "liftoff"
  | "ascent"
  | "orbit"
  | "docking"
  | "completed"
  | "aborted";

export interface Mission {
  id: string;
  codeName: string;
  vehicleId: string;
  launchAt: string;
  windowStart: string;
  windowEnd: string;
  objective: string;
  status: MissionStatus;
  abortReason?: string;
}

export type AlertKind = "fuel" | "temperature" | "signal";
export type AlertSeverity = "warning" | "critical";

export type Alert =
  | { id: string; kind: "fuel"; severity: AlertSeverity; value: number }
  | { id: string; kind: "temperature"; severity: AlertSeverity; value: number }
  | { id: string; kind: "signal"; severity: AlertSeverity; value: number };

export interface MissionDraft {
  codeName: string;
  objective: string;
  vehicleId: string;
  launchAt: string;
  windowStart: string;
  windowEnd: string;
}

export type FieldName = keyof MissionDraft;

export type FieldErrors = Partial<Record<FieldName, string>>;

export interface AbortRecord {
  missionId: string;
  codeName: string;
  reason: string;
  at: string;
  recoveredAt?: string;
}

export interface DisplayPreferences {
  density: "comfortable" | "compact";
  showSimulationBanner: boolean;
  theme: "night" | "day";
}

export const EMPTY_DRAFT: MissionDraft = {
  codeName: "",
  objective: "",
  vehicleId: "",
  launchAt: "",
  windowStart: "",
  windowEnd: "",
};

export const MISSION_CODE_PATTERN = /^OC-\d{4}$/;

export function isVehicleAvailable(vehicle: LaunchVehicle): boolean {
  return vehicle.status === "ready";
}

export function vehicleLabel(vehicle: LaunchVehicle): string {
  return `${vehicle.model} · ${vehicle.name} (${vehicle.status})`;
}

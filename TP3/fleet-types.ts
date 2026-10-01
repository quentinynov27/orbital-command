export type VehicleStatus = "ready" | "maintenance" | "assigned" | "grounded";
export type DockingPort = "A" | "B" | "C";

export interface VehicleBase {
  readonly id: string;
  name: string;
  status: VehicleStatus;
}

export interface AquilaVehicle extends VehicleBase {
  model: "Aquila";
  kind: "cargo";
  flightsCompleted: number;
}

export interface TitanVehicle extends VehicleBase {
  model: "Titan";
  kind: "airplane";
  maxPayloadKg: number;
}

export interface HermesVehicle extends VehicleBase {
  model: "Hermes";
  kind: "spaceplane";
  dockingPort: DockingPort;
}

export interface OrionisVehicle extends VehicleBase {
  model: "Orionis";
  kind: "crew-capsule";
  crewCapacity: number;
  lifeSupportStatus: "operational" | "degraded" | "offline";
}

export type LaunchVehicle = AquilaVehicle | TitanVehicle | HermesVehicle | OrionisVehicle;

export type LifeSupportStatus = "operational" | "degraded" | "offline";

// TODO: ajouter kind a chaque famille
// TODO: ajouter Orionis (kind: "crew-capsule", crewCapacity, lifeSupportStatus)

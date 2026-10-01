export type VehicleStatus = "ready" | "maintenance" | "assigned" | "grounded";
export type DockingPort = "A" | "B" | "C";
export type LifeSupportStatus = "nominal" | "degraded";

export interface VehicleBase {
  readonly id: string;
  name: string;
  status: VehicleStatus;
}

export interface AquilaVehicle extends VehicleBase {
  kind: "reusable-launcher";
  model: "Aquila";
  flightsCompleted: number;
}

export interface TitanVehicle extends VehicleBase {
  kind: "heavy-launcher";
  model: "Titan";
  maxPayloadKg: number;
}

export interface HermesVehicle extends VehicleBase {
  kind: "cargo-vehicle";
  model: "Hermes";
  dockingPort: DockingPort;
}

export interface OrionisVehicle extends VehicleBase {
  kind: "crew-capsule";
  model: "Orionis";
  crewCapacity: number;
  lifeSupportStatus: LifeSupportStatus;
}

export type LaunchVehicle =
  | AquilaVehicle
  | TitanVehicle
  | HermesVehicle
  | OrionisVehicle;

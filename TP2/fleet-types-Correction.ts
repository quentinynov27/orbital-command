export type VehicleStatus = "ready" | "maintenance" | "assigned" | "grounded";

export type DockingPort = "A" | "B" | "C";

export interface VehicleBase {
  readonly id: string;
  name: string;
  status: VehicleStatus;
}

export interface AquilaVehicle extends VehicleBase {
  model: "Aquila";
  flightsCompleted: number;
}

export interface TitanVehicle extends VehicleBase {
  model: "Titan";
  maxPayloadKg: number;
}

export interface HermesVehicle extends VehicleBase {
  model: "Hermes";
  dockingPort: DockingPort;
}

export type FleetVehicle = AquilaVehicle | TitanVehicle | HermesVehicle;

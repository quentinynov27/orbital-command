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

export const vehicles: LaunchVehicle[] = [
  {
    kind: "reusable-launcher",
    id: "AF-A01",
    model: "Aquila",
    name: "Aquila-1",
    status: "ready",
    flightsCompleted: 12,
  },
  {
    kind: "reusable-launcher",
    id: "AF-A02",
    model: "Aquila",
    name: "Aquila-2",
    status: "maintenance",
    flightsCompleted: 4,
  },
  {
    kind: "heavy-launcher",
    id: "AF-T01",
    model: "Titan",
    name: "Titan Heavy",
    status: "assigned",
    maxPayloadKg: 28000,
  },
  {
    kind: "cargo-vehicle",
    id: "AF-H01",
    model: "Hermes",
    name: "Hermes A",
    status: "ready",
    dockingPort: "B",
  },
  {
    kind: "crew-capsule",
    id: "AF-O01",
    model: "Orionis",
    name: "Orionis-1",
    status: "ready",
    crewCapacity: 4,
    lifeSupportStatus: "nominal",
  },
];

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
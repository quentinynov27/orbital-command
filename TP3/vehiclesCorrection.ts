import type { LaunchVehicle } from "./fleet-types";
import { getVehicleSpecificMetric } from "./vehicle-metric";

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

export const metrics = vehicles.map(getVehicleSpecificMetric);

import type { LaunchVehicle } from "./fleet-types";
import { getVehicleSpecificMetric } from "./vehicle-metric";

export const vehicles: LaunchVehicle[] = [
  { id: "AF-A01", model: "Aquila", name: "Aquila-1", status: "ready", flightsCompleted: 12, kind: "cargo" },
  { id: "AF-T01", model: "Titan", name: "Titan Heavy", status: "assigned", maxPayloadKg: 28000, kind: "airplane" },
  { id: "AF-H01", model: "Hermes", name: "Hermes A", status: "ready", dockingPort: "B", kind: "spaceplane" },
  { id: "AF-O01", model: "Orionis", name: "Orionis-1", status: "ready", crewCapacity: 6, lifeSupportStatus: "operational", kind: "crew-capsule" },
];

vehicles.forEach((v) => console.log(getVehicleSpecificMetric(v)));

export const metrics = vehicles.map(getVehicleSpecificMetric);

import type { FleetVehicle, VehicleBase } from "./fleet-types";

const vehicles: FleetVehicle[] = [
  {
    id: "AF-A01",
    model: "Aquila",
    name: "Aquila One",
    status: "ready",
    flightsCompleted: 12,
  },
  {
    id: "AF-T01",
    model: "Titan",
    name: "Titan Heavy",
    status: "maintenance",
    maxPayloadKg: 22000,
  },
  {
    id: "AF-H01",
    model: "Hermes",
    name: "Hermes Cargo",
    status: "assigned",
    dockingPort: "B",
  },
];

function printBaseVehicleSummary(vehicle: VehicleBase): string {
  return `${vehicle.id} — ${vehicle.name} ${vehicle.status}`;
}

console.log(printBaseVehicleSummary(vehicles[0]));

const summaries: string[] = vehicles.map(printBaseVehicleSummary);

export { vehicles, printBaseVehicleSummary, summaries };

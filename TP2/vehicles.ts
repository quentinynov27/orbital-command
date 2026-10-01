import type { Aquila, Titan, Hermes, VehicleBase } from "./fleet-types";


const rawVehicles : (Aquila | Titan | Hermes)[] = [
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

// TODO 4: typer ces vehicules avec les interfaces de fleet-types.ts
// TODO 5: ecrire printBaseVehicleSummary, limitee aux proprietes communes

function printBaseVehicleSummary(vehicle: VehicleBase): void {
  console.log(`ID: ${vehicle.id}, Model: ${vehicle.model}, Name: ${vehicle.name}, Status: ${vehicle.status}`);
}

export { rawVehicles, printBaseVehicleSummary };

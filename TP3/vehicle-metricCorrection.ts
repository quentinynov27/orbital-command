import type { LaunchVehicle } from "./fleet-types";

export function assertNever(value: never): never {
  throw new Error(`Cas non traite: ${String(value)}`);
}

export function getVehicleSpecificMetric(vehicle: LaunchVehicle): string {
  switch (vehicle.kind) {
    case "reusable-launcher":
      return `${vehicle.flightsCompleted} vols`;
    case "heavy-launcher":
      return `${vehicle.maxPayloadKg} kg`;
    case "cargo-vehicle":
      return `Port ${vehicle.dockingPort}`;
    case "crew-capsule":
      return `${vehicle.crewCapacity} places, support ${vehicle.lifeSupportStatus}`;
    default:
      return assertNever(vehicle);
  }
}

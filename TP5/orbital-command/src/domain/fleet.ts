import type { LaunchVehicle } from "./orbital";

/**
 * Pedagogical fleet for AstraForge Aerospace.
 * Status mix is intentional: validators must reject anything that is not `ready`.
 */
export const FLEET: LaunchVehicle[] = [
  {
    kind: "reusable-launcher",
    id: "aquila-1",
    name: "Dawn",
    model: "Aquila",
    flightsCompleted: 11,
    status: "ready",
  },
  {
    kind: "reusable-launcher",
    id: "aquila-2",
    name: "Nimbus",
    model: "Aquila",
    flightsCompleted: 7,
    status: "assigned",
  },
  {
    kind: "reusable-launcher",
    id: "aquila-3",
    name: "Solstice",
    model: "Aquila",
    flightsCompleted: 3,
    status: "maintenance",
  },
  {
    kind: "heavy-launcher",
    id: "titan-1",
    name: "Atlas Peak",
    model: "Titan",
    maxPayloadKg: 28000,
    status: "ready",
  },
  {
    kind: "heavy-launcher",
    id: "titan-2",
    name: "Kodiak",
    model: "Titan",
    maxPayloadKg: 28000,
    status: "grounded",
  },
  {
    kind: "cargo-vehicle",
    id: "hermes-1",
    name: "Hearth",
    model: "Hermes",
    dockingPort: "A",
    status: "ready",
  },
  {
    kind: "cargo-vehicle",
    id: "hermes-2",
    name: "Relay",
    model: "Hermes",
    dockingPort: "B",
    status: "assigned",
  },
  {
    kind: "cargo-vehicle",
    id: "hermes-3",
    name: "Harbor",
    model: "Hermes",
    dockingPort: "C",
    status: "maintenance",
  },
];

export function getVehicleById(
  id: string,
  fleet: LaunchVehicle[] = FLEET,
): LaunchVehicle | undefined {
  return fleet.find((vehicle) => vehicle.id === id);
}

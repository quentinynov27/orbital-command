import type { VehicleDto } from "../types/dto";
import type { VehicleStatus } from "../data/data";

export interface FuelReading {
  id: string;
  fuelPercent: number;
  status: VehicleStatus;
}

const stateToStatus: Record<VehicleDto["state"], VehicleStatus> = {
  GO: "ready",
  HOLD: "maintenance",
  SCRUB: "grounded",
};

export function adaptVehicle(dto: VehicleDto): FuelReading {
  return {
    id: String(dto.vehicle_id),
    fuelPercent: Math.round(dto.fuel_ratio * 100),
    status: stateToStatus[dto.state],
  };
}

if (import.meta.env.DEV) {
  const sample: VehicleDto = { vehicle_id: 7, fuel_ratio: 0.82, state: "GO" };
  const result = adaptVehicle(sample);
  console.assert(
    result.id === "7" && result.fuelPercent === 82 && result.status === "ready",
    "adaptVehicle: le mini-défi ne produit pas le résultat attendu",
    result
  );
}
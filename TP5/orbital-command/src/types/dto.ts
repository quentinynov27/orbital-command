export interface VehicleDto {
  vehicle_id: number;
  fuel_ratio: number;
  state: "GO" | "HOLD" | "SCRUB";
}
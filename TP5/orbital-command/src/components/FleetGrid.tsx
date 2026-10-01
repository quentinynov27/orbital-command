import type { LaunchVehicle } from "../data/data";
import VehicleCard from "./VehicleCard";

interface FleetGridProps {
  vehicles: LaunchVehicle[];
}

export function FleetGrid({ vehicles }: FleetGridProps) {
  return (
    <section className="fleet-list">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </section>
  );
}

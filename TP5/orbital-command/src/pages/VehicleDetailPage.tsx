import { useParams } from "react-router-dom";
import { findVehicle } from "../data/data";

export function VehicleDetailPage() {
  const { vehicleId } = useParams();
  const vehicle = vehicleId ? findVehicle(vehicleId) : undefined;

  return <h1>{vehicle ? `Fiche véhicule : ${vehicle.name}` : "Véhicule introuvable"}</h1>;
}

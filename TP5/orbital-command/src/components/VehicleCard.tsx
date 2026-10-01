import type { LaunchVehicle } from "../data/data";
import Metric from "./Metric";
import type { MetricProps } from "./Metric";
import { StatusBadge } from "./StatusBadge";

export interface VehicleCardProps {
  vehicle: LaunchVehicle;
}

function getSpecificMetrics(vehicle: LaunchVehicle): MetricProps[] {
  switch (vehicle.kind) {
    case "reusable-launcher":
      return [{ label: "Vols effectués", value: vehicle.flightsCompleted, unit: "vols" }];
    case "heavy-launcher":
      return [{ label: "Charge utile max", value: vehicle.maxPayloadKg, unit: "kg" }];
    case "cargo-vehicle":
      return [{ label: "Port d'amarrage", value: vehicle.dockingPort }];
    case "crew-capsule":
      return [
        { label: "Équipage", value: vehicle.crewCapacity, unit: "places" },
        { label: "Support vie", value: vehicle.lifeSupportStatus },
      ];
    default: {
      const exhaustiveCheck: never = vehicle;
      return exhaustiveCheck;
    }
  }
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <tr className="vehicle-row">
      <th scope="row">
        <span className="vehicle-name">{vehicle.name}</span>
        <span className="vehicle-id">{vehicle.id}</span>
      </th>
      <td className="vehicle-model">{vehicle.model}</td>
      <td>
        <StatusBadge status={vehicle.status} />
      </td>
      <td>
        <div className="vehicle-metrics">
          {getSpecificMetrics(vehicle).map((metric) => (
            <Metric
              key={metric.label}
              label={metric.label}
              value={metric.value}
              unit={metric.unit}
            />
          ))}
        </div>
      </td>
      <td className="row-action">
        <button type="button" className="card-link">
          Fiche →
        </button>
      </td>
    </tr>
  );
}

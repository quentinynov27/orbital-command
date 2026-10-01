import type { VehicleStatus } from "../data/data";

interface StatusBadgeProps {
  status: VehicleStatus;
}

function assertNever(value: never): never {
  throw new Error(`Cas non traite: ${String(value)}`);
}

function getStatusLabel(status: VehicleStatus): string {
  switch (status) {
    case "ready":
      return "Prêt";
    case "maintenance":
      return "En maintenance";
    case "assigned":
      return "Assigné";
    case "grounded":
      return "Au sol";  
    default:
      return assertNever(status);
  }
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`status-badge status-${status}`}>{getStatusLabel(status)}</span>
  );
}

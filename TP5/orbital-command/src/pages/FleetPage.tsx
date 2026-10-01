import { useEffect, useState } from "react";
import type { LaunchVehicle, VehicleStatus } from "../data/data";
import { useVehicles } from "../hooks/useVehicles";
import Panel from "../components/Panel";
import PanelHeader from "../components/PanelHeader";
import { FleetGrid } from "../components/FleetGrid";

type StatusFilter = Extract<VehicleStatus, "ready" | "maintenance"> | "all";

export function FleetPage() {
  const vehiclesResource = useVehicles();
  const [filter, setFilter] = useState<StatusFilter>("all");

  const [localVehicles, setLocalVehicles] = useState<LaunchVehicle[] | null>(null);

  const resourceData = vehiclesResource.status === "success" ? vehiclesResource.vehicles : null;
  useEffect(() => {
    if (resourceData) {
      setLocalVehicles(resourceData);
    }
  }, [resourceData]);

  const vehicles = localVehicles ?? resourceData ?? [];

  function toggleMaintenance(id: string) {
    setLocalVehicles((previous) =>
      (previous ?? []).map((vehicle) =>
        vehicle.id === id
          ? { ...vehicle, status: vehicle.status === "maintenance" ? "ready" : "maintenance" }
          : vehicle
      )
    );
  }

  if (vehiclesResource.status === "loading") {
    return (
      <Panel>
        <PanelHeader title="Flotte" />
        <p>Chargement de la flotte…</p>
      </Panel>
    );
  }

  if (vehiclesResource.status === "error") {
    return (
      <Panel>
        <PanelHeader title="Flotte" />
        <p>Erreur : {vehiclesResource.message}</p>
        <button onClick={vehiclesResource.retry}>Réessayer</button>
      </Panel>
    );
  }

  const filteredVehicles =
    filter === "all" ? vehicles : vehicles.filter((vehicle: LaunchVehicle) => vehicle.status === filter);

  return (
    <Panel>
      <PanelHeader title="Flotte">
        <div className="filters">
          <button onClick={() => setFilter("all")}>Tous</button>
          <button onClick={() => setFilter("ready")}>Prêts</button>
          <button onClick={() => setFilter("maintenance")}>Maintenance</button>
        </div>
      </PanelHeader>

      <p>{filteredVehicles.length} véhicule(s) disponible(s)</p>

      {filteredVehicles.length === 0 ? (
        <p>Aucun véhicule n'est disponible pour décoller.</p>
      ) : (
        <>
          <table>
            <tbody>
              <FleetGrid vehicles={filteredVehicles} />
            </tbody>
          </table>
          <ul className="fleet-actions">
            {filteredVehicles.map((vehicle: LaunchVehicle) => (
              <li key={vehicle.id}>
                <span>{vehicle.name}</span>
                <button onClick={() => toggleMaintenance(vehicle.id)}>
                  {vehicle.status === "maintenance" ? "Remettre en service" : "Passer en maintenance"}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </Panel>
  );
}
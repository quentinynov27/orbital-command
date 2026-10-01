import { vehicles } from "../data/vehicles";
import Panel from "../components/Panel";
import PanelHeader from "../components/PanelHeader";
import MetricGrid from "../components/MetricGrid";
import Metric from "../components/Metric";

export function ControlPage() {
  const readyCount = vehicles.filter((v) => v.status === "ready").length;
  const maintenanceCount = vehicles.filter((v) => v.status === "maintenance").length;
  const totalFlights = vehicles
    .filter((v) => v.model === "Aquila")
    .reduce(
      (sum, v) =>
        sum + ("flightsCompleted" in v ? v.flightsCompleted : 0),
      0,
    );

  return (
    <div className="control-grid">
      <Panel>
        <PanelHeader title="Disponibilité" />
        <MetricGrid>
          <Metric label="Prêts" value={readyCount} unit="véhicules" />
          <Metric label="Total flotte" value={vehicles.length} unit="véhicules" />
        </MetricGrid>
      </Panel>

      <Panel>
        <PanelHeader title="Maintenance" />
        <MetricGrid>
          <Metric label="En maintenance" value={maintenanceCount} unit="véhicules" />
          <Metric label="Vols cumulés (Aquila)" value={totalFlights} unit="vols" />
        </MetricGrid>
      </Panel>
    </div>
  );
}

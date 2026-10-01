// TODO 1: creer VehicleStatus = ready | maintenance | assigned | grounded
// TODO 2: creer VehicleBase avec id en readonly
// TODO 3: creer une interface par famille (Aquila, Titan, Hermes)
// Ne pas fusionner toutes les proprietes specifiques en optionnel.
// Ne pas dupliquer les proprietes communes.

type VehicleStatus = "ready" | "maintenance" | "assigned" | "grounded";

interface VehicleBase {
  readonly id: string;
  model: string;
  name: string;
  status: VehicleStatus;
}

interface Aquila extends VehicleBase {
  flightsCompleted: number;
}

interface Titan extends VehicleBase {
  maxPayloadKg: number;
}

interface Hermes extends VehicleBase {
  dockingPort: string;
}

export { VehicleBase, Aquila, Titan, Hermes };

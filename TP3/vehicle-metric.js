export function getVehicleSpecificMetric(vehicle) {
    switch (vehicle.kind) {
        case "cargo":
            return `${vehicle.flightsCompleted} vols effectués`;
        case "airplane":
            return `Charge max : ${vehicle.maxPayloadKg} kg`;
        case "spaceplane":
            return `Port d'amarrage : ${vehicle.dockingPort}`;
        case "crew-capsule":
            return `Capacité : ${vehicle.crewCapacity} membres (support vie : ${vehicle.lifeSupportStatus})`;
        default:
            return assertNever(vehicle);
    }
}
// TODO: switch sur kind
// TODO: controle exhaustif avec never
export function assertNever(value) {
    throw new Error(`Cas non traite: ${String(value)}`);
}

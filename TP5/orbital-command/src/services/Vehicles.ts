import type { LaunchVehicle } from "../data/data";

export async function getVehicles(signal?: AbortSignal): Promise<LaunchVehicle[]> {
  const response = await fetch("/api/vehicles.json", { signal });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data: unknown = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Réponse inattendue : un tableau de véhicules était attendu.");
  }

  return data as LaunchVehicle[];
}
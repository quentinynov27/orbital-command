import type { Mission } from "../data/data";

export async function getMissions(signal?: AbortSignal): Promise<Mission[]> {
  const response = await fetch("/api/missions.json", { signal });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const data: unknown = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Réponse inattendue : un tableau de missions était attendu.");
  }

  return data as Mission[];
}
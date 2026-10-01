import { useCallback, useEffect, useState } from "react";
import type { LaunchVehicle } from "../data/data";
import { getVehicles } from "../services/Vehicles";

type VehiclesState =
  | { status: "loading" }
  | { status: "success"; vehicles: LaunchVehicle[] }
  | { status: "error"; message: string };

export function useVehicles() {
  const [state, setState] = useState<VehiclesState>({ status: "loading" });
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setState({ status: "loading" });

    async function load() {
      try {
        const vehicles = await getVehicles(controller.signal);
        setState({ status: "success", vehicles });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setState({
          status: "error",
          message: error instanceof Error ? error.message : "Erreur inconnue",
        });
      }
    }

    void load();
    return () => controller.abort();
  }, [reloadKey]);

  const retry = useCallback(() => setReloadKey((key) => key + 1), []);

  return { ...state, retry };
}
import { useState } from "react";
import type { FormEvent } from "react";
import { useVehicles } from "../hooks/useVehicles";

interface MissionDraft {
  code: string;
  objective: string;
  vehicleId: string;
  date: string;
  windowStart: string;
  windowEnd: string;
}

const emptyDraft: MissionDraft = {
  code: "",
  objective: "",
  vehicleId: "",
  date: "",
  windowStart: "",
  windowEnd: "",
};

export function NewMissionPage() {
  const vehicleState = useVehicles();
  const { status, retry } = vehicleState;
  const message = status === "error" ? vehicleState.message : "";
  const vehicles = status === "success" ? vehicleState.vehicles : [];

  const [code, setCode] = useState(emptyDraft.code);
  const [objective, setObjective] = useState(emptyDraft.objective);
  const [vehicleId, setVehicleId] = useState(emptyDraft.vehicleId);
  const [date, setDate] = useState(emptyDraft.date);
  const [windowStart, setWindowStart] = useState(emptyDraft.windowStart);
  const [windowEnd, setWindowEnd] = useState(emptyDraft.windowEnd);

  const [lastSubmitted, setLastSubmitted] = useState<MissionDraft | null>(null);

  const selectedVehicleName =
    status === "success"
      ? vehicles.find((vehicle) => vehicle.id === vehicleId)?.name
      : undefined;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const draft: MissionDraft = { code, objective, vehicleId, date, windowStart, windowEnd };
    setLastSubmitted(draft);

    setCode(emptyDraft.code);
    setObjective(emptyDraft.objective);
    setDate(emptyDraft.date);
    setWindowStart(emptyDraft.windowStart);
    setWindowEnd(emptyDraft.windowEnd);
  }

  return (
    <div className="new-mission-page">
      <h1>Nouvel ordre de mission</h1>

      <div className="mission-form-layout">
        <form onSubmit={handleSubmit} className="mission-form">
          <div className="field">
            <label htmlFor="mission-code">Code mission</label>
            <input
              id="mission-code"
              type="text"
              value={code}
              onChange={(event) => setCode(event.target.value)}
              placeholder="ODYSSEY-02"
            />
          </div>

          <div className="field">
            <label htmlFor="mission-objective">Objectif</label>
            <textarea
              id="mission-objective"
              value={objective}
              onChange={(event) => setObjective(event.target.value)}
              rows={3}
            />
          </div>

          <div className="field">
            <label htmlFor="mission-vehicle">Véhicule</label>
            {status === "loading" && (
              <select id="mission-vehicle" disabled>
                <option>Chargement des véhicules…</option>
              </select>
            )}
            {status === "error" && (
              <div className="field-error">
                <p>Impossible de charger les véhicules : {message}</p>
                <button type="button" onClick={retry}>
                  Réessayer
                </button>
              </div>
            )}
            {status === "success" && (
              <select
                id="mission-vehicle"
                value={vehicleId}
                onChange={(event) => setVehicleId(event.target.value)}
              >
                <option value="">— Choisir un véhicule —</option>
                {vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="field">
            <label htmlFor="mission-date">Date</label>
            <input
              id="mission-date"
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="mission-window-start">Début de fenêtre</label>
            <input
              id="mission-window-start"
              type="datetime-local"
              value={windowStart}
              onChange={(event) => setWindowStart(event.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="mission-window-end">Fin de fenêtre</label>
            <input
              id="mission-window-end"
              type="datetime-local"
              value={windowEnd}
              onChange={(event) => setWindowEnd(event.target.value)}
            />
          </div>

          <button type="submit">Créer la mission</button>
        </form>

        <aside className="mission-preview">
          <h2>Aperçu</h2>
          <dl>
            <dt>Code</dt>
            <dd>{code || "non renseigné"}</dd>

            <dt>Objectif</dt>
            <dd>{objective || "non renseigné"}</dd>

            <dt>Véhicule</dt>
            <dd>{selectedVehicleName ?? "non renseigné"}</dd>

            <dt>Date</dt>
            <dd>{date || "non renseigné"}</dd>

            <dt>Fenêtre</dt>
            <dd>
              {windowStart || "—"} → {windowEnd || "—"}
            </dd>
          </dl>
        </aside>
      </div>

      {lastSubmitted && (
        <p className="submit-confirmation">
          Ordre « {lastSubmitted.code || "(sans code)"} » enregistré (pas encore envoyé au store — TP 4).
        </p>
      )}
    </div>
  );
}
import type { LaunchVehicle, Mission, MissionDraft } from "../domain/orbital";

export function MissionPreview({
  missions,
  vehicles,
  draft,
}: {
  missions: Mission[];
  vehicles: LaunchVehicle[];
  draft?: MissionDraft;
}) {
  // TODO étape 3 : aperçu live du draft (hors du <form> / aside) — le même état que les inputs.
  // Lister : code, objectif, nom du véhicule (id → vehicles), date, fenêtre.
  // Champ vide → « non renseigné » (pas une donnée inventée).
  void missions;
  void vehicles;
  void draft;

  return (
    <aside className="rounded-xl border border-dashed border-slate-700 p-6 text-sm text-slate-400">
      TODO : aperçu live
    </aside>
  );
}

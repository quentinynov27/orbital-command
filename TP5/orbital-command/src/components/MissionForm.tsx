import { type FormEvent } from "react";
import type { LaunchVehicle, Mission } from "../domain/orbital";
import { Field, inputClass } from "../ui/Field";

interface Props {
  vehicles: LaunchVehicle[];
  onCreate: (mission: Mission) => void;
}

export function MissionForm({ vehicles, onCreate }: Props) {
  // TODO étape 2 : un useState par champ, ou un seul draft (EMPTY_DRAFT) mis à jour de façon immuable.
  // TODO étape 2 : chaque champ contrôlé — value={...} + onChange. Interdit : defaultValue, FormData seul.
  void vehicles;
  void onCreate;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO étape 2 : construire un Mission (id unique, status "draft", dates ISO) puis onCreate(mission).
    // TODO étape 4 : reset sélectif — vider codeName, objective, launchAt, windowStart, windowEnd.
    //   conserver vehicleId. Pas de input.value = "" ni de key sur le <form>.
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/60 p-5">
      <Field id="codeName" label="Code mission">
        {/* TODO : input contrôlé — ex. ODYSSEY-02 */}
        <input id="codeName" name="codeName" className={inputClass()} placeholder="OC-2410" />
      </Field>
      {/* TODO : objective — textarea contrôlé */}
      {/* TODO : vehicleId — select contrôlé, options = vehicles (success du hook) */}
      {/* TODO : launchAt — input type="date" ou datetime-local */}
      {/* TODO : windowStart et windowEnd — deux valeurs distinctes dans l'état */}
      <button type="submit" className="rounded-md bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950">
        Enregistrer le brouillon
      </button>
    </form>
  );
}

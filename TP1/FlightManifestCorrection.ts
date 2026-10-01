interface MissionManifest {
  missionCode: string,
  fuelPercent: number,
  launchWindow: string | null,
  crew: string[],
  altitudeKm: number,
  enginesReady: boolean,
}

// Decision 1: missionCode is a string identifier (ODYSSEY-01), not a year.
const missionCode = "ODYSSEY-01";

// Decision 2: fuel is stored as a number in percent (0-100), never as "87".
const fuelPercent = 87;

// Decision 3: a missing launch window is null, not a magic string or undefined.
const launchWindow: string | null = null;

const crew: string[] = ["Maya Chen", "Noah Okonkwo", "Leila Haddad"];

const manifest: MissionManifest = {
  missionCode,
  fuelPercent,
  launchWindow,
  crew,
  altitudeKm: 120,
  enginesReady: true,
};

function remainingFuel(fuel: number | null): number {
  if (fuel === null) {
    return 0;
  }
  return fuel - 10;
}

const remainingPercent: number = remainingFuel(manifest.fuelPercent);

export { manifest, remainingFuel, remainingPercent };

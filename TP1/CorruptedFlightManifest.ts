const missionCode : number = 2042;
const fuelPercent : number = 87;
const launchWindow : Date | null = null;
const member1 : [string, number] = ["Maya Chen", 42];
const member2 : [string, number] = ["Liam Patel", 35];
const member3 : [string, number] = ["Ava Smith", 29];

interface MissionManifest {
  missionCode: number;
  fuelPercent: number;
  launchWindow: Date | null;
  crew: [string, number][];
  altitudeKm: number;
  enginesReady: boolean;
}

if (launchWindow === null) {
  console.error("Error: Launch window is not set.");
}

const manifest: MissionManifest = {
  missionCode,
  fuelPercent,
  launchWindow,
  crew: [member1, member2, member3],
  altitudeKm: 120,
  enginesReady: true,
};

function remainingFuel(fuel: number): number {
  return fuel - 10;
}

console.log(manifest);
console.log(remainingFuel(manifest.fuelPercent));

"use strict";
const missionCode = 2042;
const fuelPercent = 87;
const launchWindow = null;
const member1 = ["Maya Chen", 42];
const member2 = ["Liam Patel", 35];
const member3 = ["Ava Smith", 29];
if (launchWindow === null) {
    console.error("Error: Launch window is not set.");
}
const manifest = {
    missionCode,
    fuelPercent,
    launchWindow,
    crew: [member1, member2, member3],
    altitudeKm: 120,
    enginesReady: true,
};
function remainingFuel(fuel) {
    return fuel - 10;
}
console.log(manifest);
console.log(remainingFuel(manifest.fuelPercent));

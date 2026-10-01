export const FLEET = "/fleet";
export const MISSIONS = "/missions";
export const MISSION_NEW = "/missions/new";
export const CONTROL = "/control";
export const ALERTS = "/alerts";

export function vehiclePath(id: string): string {
  return `${FLEET}/${id}`;
}

export function missionPath(id: string): string {
  return `${MISSIONS}/${id}`;
}

export function alertPath(id: string): string {
  return `${ALERTS}/${id}`;
}

export function isFleetPath(path: string): boolean {
  return path === FLEET || path.startsWith('${FLEET}/');
}

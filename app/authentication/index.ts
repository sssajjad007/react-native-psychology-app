import { authState } from "./entities";
export * from "./screens";
export { initToken, exit, registerSilentRefresh, isTokenExpired, refresh } from "./usecases";
export function getLoggedIn() {
  return authState.loggedIn;
}

export function getRole() {
  return authState.role;
}
export function getJWT() {
  return authState.token;
}

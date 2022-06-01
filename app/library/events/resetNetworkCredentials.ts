import { events } from "./eventSingleton";

const RESET_NETWORK_CREDENTIALS_EVENT = "RESET_NETWORK_CREDENTIALS_EVENT";

export function resetNetworkCredentialsEvent() {
  events.emit(RESET_NETWORK_CREDENTIALS_EVENT);
}

export function registerResetNetworkCredentialsEvents(callback: any) {
  events.on(RESET_NETWORK_CREDENTIALS_EVENT, callback);
}

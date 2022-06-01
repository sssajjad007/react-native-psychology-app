import { events } from "./eventSingleton";

const RETRIEVE_CUSTOMERS_EVENT = "RETRIEVE_CUSTOMERS_EVENT";

export function retrieveCustomersEvent() {
  events.emit(RETRIEVE_CUSTOMERS_EVENT);
}

export function registerRetrieveCustomersEvents(callback: any) {
  events.on(RETRIEVE_CUSTOMERS_EVENT, callback);
}

import { registerRetrieveCustomersEvents } from "../../library";
import { retrieveCustomers } from "./retrieveCustomers";

async function retrieveCustomersEventHandler() {
  await retrieveCustomers();
}

export function registerCustomerEvents() {
  registerRetrieveCustomersEvents(retrieveCustomersEventHandler);
}

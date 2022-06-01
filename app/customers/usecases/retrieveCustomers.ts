// adatpers
import { fetchGetCustomers } from "../adapters";
import { customerState } from "../entities";

export async function retrieveCustomers() {
  const { error, customers } = await fetchGetCustomers();
  if (error) {
    customerState.setCustomers([]);
    return;
  }
  customerState.setCustomers(customers);
}

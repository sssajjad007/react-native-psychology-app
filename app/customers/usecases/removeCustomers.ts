import { fetchRemoveCustomers } from "../adapters";
import { customerState } from "../entities";

export async function removeCustomers(customerId: string) {
  const { payload, error } = await fetchRemoveCustomers(customerId);
  if (error) {
    return error;
  }
  customerState.removeCustomer(customerId);
  return payload;
}

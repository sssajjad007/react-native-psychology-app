import { fetchGetUser } from "../adapters";
import { dashboardState } from "../entities";

export async function retrieveCustomers(userId: string) {
  const { error, customer } = await fetchGetUser(userId);
  if (error) {
    dashboardState.setCustomer(undefined);
    return;
  }
  return dashboardState.setCustomer(customer);
}
